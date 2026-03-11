import os
from sqlalchemy import create_engine, text
from dotenv import load_dotenv

load_dotenv()
DB_URL = os.getenv("DATABASE_URL")
if DB_URL.startswith("postgres://"):
    DB_URL = DB_URL.replace("postgres://", "postgres://", 1)

# Exact 20 mapping (Case Insensitive to Exact Case)
MAPPING = {
    "tyres and wheels": "Tyres and wheels",
    "vehicle servicing and maintenance": "Vehicle servicing and maintenance",
    "panel beating and smash repairs": "Panel beating and smash repairs",
    "automotive finance solutions": "Automotive finance solutions",
    "vehicle insurance products": "Vehicle insurance products",
    "auto parts, tools, and accessories": "Auto parts, tools, and accessories",
    "auto parts tools and accessories": "Auto parts, tools, and accessories",
    "fleet management tools": "Fleet management tools",
    "workshop technology and equipment": "Workshop technology and equipment",
    "telematics systems and vehicle tracking solutions": "Telematics systems and vehicle tracking solutions",
    "fuel cards and fuel management services": "Fuel cards and fuel management services",
    "vehicle cleaning and detailing services": "Vehicle cleaning and detailing services",
    "logistics and scheduling software": "Logistics and scheduling software",
    "safety and compliance solutions": "Safety and compliance solutions",
    "driver training and induction programs": "Driver training and induction programs",
    "roadside assistance programs": "Roadside assistance programs",
    "gps navigation and route optimisation tools": "GPS navigation and route optimisation tools",
    "ev charging infrastructure and electric vehicle solutions": "EV charging infrastructure and electric vehicle solutions",
    "ev charging infrastructure": "EV charging infrastructure and electric vehicle solutions",
    "mobile device integration and communications equipment": "Mobile device integration and communications equipment",
    "asset recovery and anti-theft technologies": "Asset recovery and anti-theft technologies",
    "vinyl vehicle wrapping services": "Vinyl Vehicle Wrapping Services",
    "vehicle wrapping": "Vinyl Vehicle Wrapping Services",
    "automotive services": "Vehicle servicing and maintenance",
    "logistics software": "Logistics and scheduling software",
    "gps navigation tools": "GPS navigation and route optimisation tools",
    "finance services": "Automotive finance solutions",

    # Legacy cleanup
    "retail": "Tyres and wheels",
    "healthcare": "Vehicle servicing and maintenance",
    "technology": "Workshop technology and equipment",
}

engine = create_engine(DB_URL)

with engine.connect() as conn:
    print("Migrating campaigns...")
    res = conn.execute(text("SELECT id, industry_type FROM campaigns"))
    for row in res:
        cid, old_val = row
        if not old_val: continue
        key = old_val.lower().replace("  ", " ").strip()
        new_val = MAPPING.get(key)
        if not new_val:
            # Try some fuzzy matching for known legacy categories
            if "tyres" in key: new_val = "Tyres and wheels"
            elif "servicing" in key: new_val = "Vehicle servicing and maintenance"
            elif "panel" in key: new_val = "Panel beating and smash repairs"
            elif "finance" in key: new_val = "Automotive finance solutions"
            elif "insurance" in key: new_val = "Vehicle insurance products"
            elif "logistics" in key: new_val = "Logistics and scheduling software"
            elif "gps" in key: new_val = "GPS navigation and route optimisation tools"
            elif "wrapping" in key: new_val = "Vinyl Vehicle Wrapping Services"

        if new_val and new_val != old_val:
            print(f"  UPDATING Campaign {cid}: '{old_val}' -> '{new_val}'")
            conn.execute(text("UPDATE campaigns SET industry_type = :val WHERE id = :id"), {"val": new_val, "id": cid})
            
    print("\nMigrating users...")
    res = conn.execute(text("SELECT id, industry FROM users"))
    for row in res:
        uid, old_val = row
        if not old_val: continue
        key = old_val.lower().replace("  ", " ").strip()
        new_val = MAPPING.get(key)
        if not new_val:
            if "tyres" in key: new_val = "Tyres and wheels"
            elif "servicing" in key: new_val = "Vehicle servicing and maintenance"

        if new_val and new_val != old_val:
            print(f"  UPDATING User {uid}: '{old_val}' -> '{new_val}'")
            conn.execute(text("UPDATE users SET industry = :val WHERE id = :id"), {"val": new_val, "id": uid})
    
    # Ensure all global PricingMatrix rows are also mapped to the exact casing if they somehow got messed up
    print("\nMigrating global pricing matrix...")
    res = conn.execute(text("SELECT id, industry_type FROM pricing_matrix WHERE country_id IS NULL"))
    for row in res:
        pid, old_val = row
        if not old_val: continue
        key = old_val.lower().strip()
        new_val = MAPPING.get(key)
        if new_val and new_val != old_val:
            print(f"  UPDATING PricingMatrix {pid}: '{old_val}' -> '{new_val}'")
            conn.execute(text("UPDATE pricing_matrix SET industry_type = :val WHERE id = :id"), {"val": new_val, "id": pid})

    conn.commit()
    print("\n✅ Migration complete.")
