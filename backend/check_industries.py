from app.database import SessionLocal
from app import models

db = SessionLocal()
inds = db.query(models.PricingMatrix.industry_type).distinct().all()
print("Industries in DB:")
for (i,) in inds:
    print(f"- {i}")
db.close()
