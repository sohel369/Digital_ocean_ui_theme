"""
migrate_automotive_categories_v3.py

Final robust migration tool for the Automotive B2B Platform (Platform 1).
- DELETES ALL global PricingMatrix entries (country_id IS NULL) to ensure NO casing duplicates.
- Rebuilds the global matrix using the exact list provided by the user.

Usage:
    cd backend
    python migrate_automotive_categories_v3.py
"""

import sys
import os

# Allow running from the project root or backend/ directory
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from app.database import SessionLocal
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

    try:
        # 1. TOTAL GLOBAL RESET
        print("🧹 Clearing all global PricingMatrix entries to ensure consistency...")
        deleted = db.query(models.PricingMatrix).filter(models.PricingMatrix.country_id.is_(None)).delete()
        db.commit()
        print(f"  Removed {deleted} total rows from global matrix.")

        # 2. Re-Seed carefully
        print("\n🌱 Rebuilding standard automotive categories...")
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
        print(f"   - Re-initialized global matrix with {created} rows for {len(CORE_INDUSTRIES)} industries.")

    except Exception as e:
        db.rollback()
        print(f"\n❌ Migration Failed: {e}")
        raise
    finally:
        db.close()

if __name__ == "__main__":
    print("🚀 Starting Automotive Category Migration V3 (Full Reset)...\n")
    migrate()
