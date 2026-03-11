from app.database import SessionLocal
from app import models

db = SessionLocal()
print("Checking Users...")
users = db.query(models.User.industry).distinct().all()
for (i,) in users:
    print(f"- User industry: {i}")

print("\nChecking Campaigns...")
campaigns = db.query(models.Campaign.industry_type).distinct().all()
for (i,) in campaigns:
    print(f"- Campaign industry: {i}")
db.close()
