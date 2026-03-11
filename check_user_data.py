
import os
import sys
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

# Add backend to path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), 'backend')))

from app import models
from app.database import SessionLocal

def check_user_data(email):
    db = SessionLocal()
    try:
        user = db.query(models.User).filter(models.User.email == email).first()
        if not user:
            print(f"User {email} not found")
            return
        
        print(f"User: {user.email} (ID: {user.id})")
        
        campaigns = db.query(models.Campaign).filter(models.Campaign.advertiser_id == user.id).all()
        print(f"Campaigns owned: {len(campaigns)}")
        for c in campaigns:
            print(f"  - Campaign {c.id}: {c.name}")
            
        reviewed = db.query(models.Campaign).filter(models.Campaign.reviewed_by == user.id).all()
        print(f"Campaigns reviewed: {len(reviewed)}")
        
        notifications = db.query(models.Notification).filter(models.Notification.user_id == user.id).all()
        print(f"Notifications: {len(notifications)}")
        
        invoices = db.query(models.Invoice).filter(models.Invoice.user_id == user.id).all()
        print(f"Invoices: {len(invoices)}")
        
        transactions = db.query(models.PaymentTransaction).filter(models.PaymentTransaction.user_id == user.id).all()
        print(f"Transactions: {len(transactions)}")
        
        media_approved = db.query(models.Media).filter(models.Media.approved_by == user.id).all()
        print(f"Media approved: {len(media_approved)}")

    finally:
        db.close()

if __name__ == "__main__":
    if len(sys.argv) > 1:
        check_user_data(sys.argv[1])
    else:
        check_user_data("muhammad@gmail.com")
