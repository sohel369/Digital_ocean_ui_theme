from app.database import SessionLocal
from app import models

db = SessionLocal()
try:
    camps = db.query(models.Campaign.industry_type).distinct().all()
    print("Campaign industries:")
    for (i,) in camps:
        print(f"- {i}")
        
    users = db.query(models.User.industry).distinct().all()
    print("\nUser industries:")
    for (i,) in users:
        print(f"- {i}")
finally:
    db.close()
