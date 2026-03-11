"""
migrate_automotive_categories_v2.py

Robust migration tool for the Automotive B2B Platform (Platform 1).
- EXTREME CLEANUP: Removes ALL global PricingMatrix entries not in the new 20-category list.
- Fixes casing issues (Title Case parity).
- Syncs the database with the exact 20 industries provided.

Usage:
    cd backend
    python migrate_automotive_categories_v2.py
"""

import sys
import os

# Allow running from the project root or backend/ directory
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from app.database import SessionLocal, engine
from app import models
from app.industry_config import INDUSTRY_MULTIPLIERS

# The core 20 categories (Source of Truth)
CORE_INDUSTRIES = list(INDUSTRY_MULTIPLIERS.keys())

AD_TYPES = ["display", "Leaderboard (728x90)", "Mobile Leaderboard (320x50)", "Skyscraper (160x600)", "Medium Rectangle (300x250)"]
COVERAGE_TYPES = [models.CoverageType.RADIUS_30, models.CoverageType.STATE, models.CoverageType.COUNTRY]

def migrate():
    db = SessionLocal()
    deleted = 0
    created = 0
    updated = 0

    try:
        # 1. Extreme Cleanup
        print("🧹 Performing deep cleanup of PricingMatrix...")
        
        # Get all current industries in matrix
        all_entries = db.query(models.PricingMatrix).filter(models.PricingMatrix.country_id.is_(None)).all()
        
        for entry in all_entries:
            if entry.industry_type not in CORE_INDUSTRIES:
                db.delete(entry)
                deleted += 1
        
        db.commit()
        print(f"  Cleaned up {deleted} legacy/non-standard entries.")

        # 2. Re-Seed carefully
        print("\n🌱 Reseeding standard automotive categories...")
        for industry_type in CORE_INDUSTRIES:
            multiplier = INDUSTRY_MULTIPLIERS.get(industry_type, 1.0)
            
            # Default base rates
            base_rates = {
                models.CoverageType.RADIUS_30: 150.0,
                models.CoverageType.STATE: 500.0,
                models.CoverageType.COUNTRY: 1500.0,
            }

            for coverage_type in COVERAGE_TYPES:
                base_rate = base_rates.get(coverage_type, 100.0)
                
                for ad_type in AD_TYPES:
                    # Double check if it exists (Title Case matched)
                    existing = db.query(models.PricingMatrix).filter(
                        models.PricingMatrix.industry_type == industry_type,
                        models.PricingMatrix.advert_type == ad_type,
                        models.PricingMatrix.coverage_type == coverage_type,
                        models.PricingMatrix.country_id.is_(None)
                    ).first()

                    if existing:
                        # Ensure multiplier is correct
                        if existing.multiplier != multiplier:
                            existing.multiplier = multiplier
                            updated += 1
                        continue

                    # Create new entry
                    entry = models.PricingMatrix(
                        industry_type=industry_type,
                        advert_type=ad_type,
                        coverage_type=coverage_type,
                        base_rate=base_rate,
                        multiplier=multiplier,
                        state_discount=10.0,
                        national_discount=15.0,
                        country_id=None
                    )
                    db.add(entry)
                    created += 1

        db.commit()
        print(f"\n✅ Migration Successful!")
        print(f"   - Deleted: {deleted} legacy rows")
        print(f"   - Created: {created} missing rows")
        print(f"   - Updated: {updated} existing rows")

    except Exception as e:
        db.rollback()
        print(f"\n❌ Migration Failed: {e}")
        raise
    finally:
        db.close()

if __name__ == "__main__":
    print("🚀 Starting Automotive Category Migration V2...\n")
    migrate()
