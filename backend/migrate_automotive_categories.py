"""
migrate_automotive_categories.py

Updated migration tool for the Automotive B2B Platform (Platform 1).
- Deletes legacy/placeholder industries (Industry A, B, C, etc.)
- Ensures the 20 specific automotive categories exist with correct multipliers.
- Sets global default base rates.

Usage:
    cd backend
    python migrate_automotive_categories.py
"""

import sys
import os

# Allow running from the project root or backend/ directory
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from app.database import SessionLocal, engine
from app import models
from app.industry_config import INDUSTRY_MULTIPLIERS

# Industries to remove
OLD_INDUSTRIES = ["Industry A", "Industry B", "Industry C", "Vehicle Wrapping", "Automotive Services", "Logistics Software", "GPS Navigation Tools", "Finance Services"]

# The core 20 categories (Keys must match INDUSTRY_MULTIPLIERS)
CORE_INDUSTRIES = list(INDUSTRY_MULTIPLIERS.keys())

AD_TYPES = ["display", "Leaderboard (728x90)", "Mobile Leaderboard (320x50)", "Skyscraper (160x600)", "Medium Rectangle (300x250)"]
COVERAGE_TYPES = [models.CoverageType.RADIUS_30, models.CoverageType.STATE, models.CoverageType.COUNTRY]

def migrate():
    db = SessionLocal()
    deleted = 0
    created = 0
    updated = 0

    try:
        # 1. Cleanup old industries
        print("🧹 Cleaning up old industry entries...")
        for old_ind in OLD_INDUSTRIES:
            res = db.query(models.PricingMatrix).filter(models.PricingMatrix.industry_type == old_ind).delete()
            if res > 0:
                print(f"  DELETED: {old_ind} ({res} rows)")
                deleted += res

        # 2. Seed/Update Core Industries
        print("\n🌱 Seeding core 20 automotive categories...")
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
                    # Check if entry already exists (Global default - no country)
                    existing = db.query(models.PricingMatrix).filter(
                        models.PricingMatrix.industry_type == industry_type,
                        models.PricingMatrix.advert_type == ad_type,
                        models.PricingMatrix.coverage_type == coverage_type,
                        models.PricingMatrix.country_id.is_(None)
                    ).first()

                    if existing:
                        # Update multiplier if it differs
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
        print(f"   - Deleted: {deleted} legacy entries")
        print(f"   - Created: {created} new entries")
        print(f"   - Updated: {updated} existing entries")

    except Exception as e:
        db.rollback()
        print(f"\n❌ Migration Failed: {e}")
        raise
    finally:
        db.close()

if __name__ == "__main__":
    print("🚀 Starting Automotive Category Migration (Platform 1.0)...\n")
    migrate()
