"""
migrate_add_industry_pricing.py

Seeds PricingMatrix database entries for the 5 new advertiser industry verticals:
  - Vehicle Wrapping
  - Automotive Services
  - Logistics Software
  - GPS Navigation Tools
  - Finance Services

Run this once after deploying the new industry_config.py changes.

Usage:
    cd backend
    python migrate_add_industry_pricing.py

Safe to run multiple times — skips entries that already exist.
"""

import sys
import os

# Allow running from the project root or backend/ directory
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from app.database import SessionLocal, engine, Base
from app import models
from app.industry_config import INDUSTRY_MULTIPLIERS

# -------------------------------------------------------------------
# New industries and their base rates
# -------------------------------------------------------------------
NEW_INDUSTRIES = [
    {
        "industry_type": "Vehicle Wrapping",
        "base_rates": {
            models.CoverageType.RADIUS_30: 150.0,
            models.CoverageType.STATE: 500.0,
            models.CoverageType.COUNTRY: 1500.0,
        }
    },
    {
        "industry_type": "Automotive Services",
        "base_rates": {
            models.CoverageType.RADIUS_30: 150.0,
            models.CoverageType.STATE: 500.0,
            models.CoverageType.COUNTRY: 1500.0,
        }
    },
    {
        "industry_type": "Logistics Software",
        "base_rates": {
            models.CoverageType.RADIUS_30: 200.0,
            models.CoverageType.STATE: 650.0,
            models.CoverageType.COUNTRY: 2000.0,
        }
    },
    {
        "industry_type": "GPS Navigation Tools",
        "base_rates": {
            models.CoverageType.RADIUS_30: 180.0,
            models.CoverageType.STATE: 600.0,
            models.CoverageType.COUNTRY: 1800.0,
        }
    },
    {
        "industry_type": "Finance Services",
        "base_rates": {
            models.CoverageType.RADIUS_30: 250.0,
            models.CoverageType.STATE: 800.0,
            models.CoverageType.COUNTRY: 2500.0,
        }
    },
]

AD_TYPES = ["display", "Leaderboard (728x90)", "Mobile Leaderboard (320x50)"]


def seed_new_industries():
    db = SessionLocal()
    created = 0
    skipped = 0

    try:
        for ind in NEW_INDUSTRIES:
            industry_type = ind["industry_type"]
            multiplier = INDUSTRY_MULTIPLIERS.get(industry_type, 1.0)

            for coverage_type, base_rate in ind["base_rates"].items():
                for ad_type in AD_TYPES:
                    # Check if entry already exists
                    existing = db.query(models.PricingMatrix).filter(
                        models.PricingMatrix.industry_type == industry_type,
                        models.PricingMatrix.advert_type == ad_type,
                        models.PricingMatrix.coverage_type == coverage_type,
                        models.PricingMatrix.country_id.is_(None)
                    ).first()

                    if existing:
                        print(f"  SKIP (exists): {industry_type} | {ad_type} | {coverage_type.value}")
                        skipped += 1
                        continue

                    entry = models.PricingMatrix(
                        industry_type=industry_type,
                        advert_type=ad_type,
                        coverage_type=coverage_type,
                        base_rate=base_rate,
                        multiplier=multiplier,
                        state_discount=10.0,
                        national_discount=15.0,
                        country_id=None  # Global default (no country filter)
                    )
                    db.add(entry)
                    print(f"  CREATE: {industry_type} | {ad_type} | {coverage_type.value} | base={base_rate} | multiplier={multiplier}")
                    created += 1

        db.commit()
        print(f"\n✅ Migration complete: {created} created, {skipped} skipped.")
    except Exception as e:
        db.rollback()
        print(f"\n❌ Migration failed: {e}")
        raise
    finally:
        db.close()


if __name__ == "__main__":
    print("🚀 Seeding PricingMatrix for new industry verticals...\n")
    seed_new_industries()
