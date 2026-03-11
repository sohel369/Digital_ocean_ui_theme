from app.database import SessionLocal
from app import models

db = SessionLocal()
try:
    user_count = db.query(models.User).count()
    camp_count = db.query(models.Campaign).count()
    print(f"Users: {user_count}")
    print(f"Campaigns: {camp_count}")
finally:
    db.close()
