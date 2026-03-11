from app.database import SessionLocal
from app import models

db = SessionLocal()

try:
    # try to delete user id 2, or just the first advertiser
    user = db.query(models.User).filter(models.User.role == "advertiser").first()
    if user:
        print(f"Deleting user {user.id}")
        db.query(models.Campaign).filter(models.Campaign.reviewed_by == user.id).update({models.Campaign.reviewed_by: None})
        db.query(models.Media).filter(models.Media.approved_by == user.id).update({models.Media.approved_by: None})
        db.query(models.Notification).filter(models.Notification.user_id == user.id).delete()
        db.query(models.PaymentTransaction).filter(models.PaymentTransaction.user_id == user.id).delete()
        db.query(models.Invoice).filter(models.Invoice.user_id == user.id).delete()
        
        db.delete(user)
        db.commit()
        print("Success")
    else:
        print("No advertiser found")
except Exception as e:
    db.rollback()
    print("Error:", str(e))
finally:
    db.close()
