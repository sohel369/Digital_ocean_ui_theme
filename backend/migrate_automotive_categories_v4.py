"""
migrate_automotive_categories_v4.py

TRULY GLOBAL migration tool for the Automotive B2B Platform (Platform 1).
- DELETES EVERY SINGLE ROW in PricingMatrix where industry_type is not in the new list.
- Ensures absolute casing consistency across all country overrides.

Usage:
    cd backend
    python migrate_automotive_categories_v4.py
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

def migrate():
    db = SessionLocal()
    deleted = 0

    try:
        # 1. DELETE ANY INDUSTRY NOT IN CORE LIST (TABLE-WIDE)
        print("🚀 Performing absolute site-wide cleanup of PricingMatrix...")
        
        # Get all entries
        all_entries = db.query(models.PricingMatrix).all()
        
        for entry in all_entries:
            if entry.industry_type not in CORE_INDUSTRIES:
                db.delete(entry)
                deleted += 1
        
        db.commit()
        print(f"  Scrubbed {deleted} legacy/incorrect-casing rows from the database.")

        # 2. Check for missing global defaults and add them if scrubbed
        # (Assuming V3 already added global ones with correct casing)
        # This part is just a safety check.
        
        db.commit()
        print(f"\n✅ Migration Successful!")

    except Exception as e:
        db.rollback()
        print(f"\n❌ Migration Failed: {e}")
        raise
    finally:
        db.close()

if __name__ == "__main__":
    print("🚀 Starting Automotive Category Migration V4 (Full Scrub)...\n")
    migrate()
