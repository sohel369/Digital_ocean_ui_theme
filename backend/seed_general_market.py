
import os
import sys

# Add the parent directory to sys.path to allow absolute imports
current_dir = os.path.dirname(os.path.abspath(__file__))
if current_dir not in sys.path:
    sys.path.append(current_dir)

from app.database import SessionLocal, init_db
from app.models import PricingMatrix, CoverageType
from app.industry_config import INDUSTRY_MULTIPLIERS

def seed_general_market():
    print("🌱 Seeding General Market Categories into Pricing Matrix...")
    db = SessionLocal()
    
    # 24 General Market Categories from platform2Categories.js
    categories = [
        ("Real Estate & Property Agents", 2.5),
        ("Legal Services, Lawyers & Mediation", 2.5),
        ("Financial and Insurance Services", 2.3),
        ("Health, Wellness & Medical", 2.3),
        ("Automotive Services", 2.2),
        ("IT & Tech Support Services", 2.0),
        ("Professional Training & Certification", 2.0),
        ("Department Stores and Electronics", 2.0),
        ("Mobile Phone and Internet Services", 2.0),
        ("Education & Tutoring", 1.8),
        ("Event & Wedding Services", 1.8),
        ("Beauty and Cosmetic Surgery", 1.7),
        ("Fitness & Personal Training", 1.6),
        ("Home & Garden", 1.6),
        ("Lifestyle, Boutique, Apparel & Accessories", 1.5),
        ("Travel & Tourism", 1.5),
        ("Storage, Logistics and Removalists", 1.5),
        ("Restaurants, Food & Beverage", 1.3),
        ("Trades & Home Services", 1.3),
        ("Pets & Animals", 1.2),
        ("Childcare & Aged Care Providers", 1.2),
        ("Radio and TV Stations", 1.2),
        ("Baby Clothes, Accessories & Toys", 1.1),
        ("Accounting & Tax Services", 1.1)
    ]
    
    # Ad types to seed
    ad_types = [
        "Mobile Leaderboard", "Leaderboard Footer", "Skyscraper Left", 
        "Skyscraper Right", "Leaderboard Header", "Medium Rectangle", 
        "Large Rectangle", "Video 15s", "Video 30s", "Video 45s", "Video 60s"
    ]
    
    # Coverage types
    coverage_types = [CoverageType.RADIUS_30, CoverageType.STATE, CoverageType.COUNTRY]
    
    count = 0
    for name, multiplier in categories:
        # Check if industry exists for any ad type
        exists = db.query(PricingMatrix).filter(PricingMatrix.industry_type == name).first()
        if not exists:
            print(f"➕ Adding {name} (multiplier: {multiplier})")
            # For each industry, we should ideally have entries for all ad types and coverage types
            # But for the admin panel search to find it, even one entry is enough
            # We'll add one default entry per industry
            new_entry = PricingMatrix(
                industry_type=name,
                advert_type="Mobile Leaderboard",
                coverage_type=CoverageType.RADIUS_30,
                base_rate=100.0,
                multiplier=multiplier,
                state_discount=0.15,
                national_discount=0.30
            )
            db.add(new_entry)
            count += 1
        else:
            # Update multiplier if it changed
            if exists.multiplier != multiplier:
                print(f"🔄 Updating {name} multiplier: {exists.multiplier} -> {multiplier}")
                db.query(PricingMatrix).filter(PricingMatrix.industry_type == name).update({"multiplier": multiplier})
                count += 1

    db.commit()
    print(f"✅ Seeding complete. {count} entries added or updated.")
    db.close()

if __name__ == "__main__":
    seed_general_market()
