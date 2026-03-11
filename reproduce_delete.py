
import os
import sys
import logging
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

# Setup logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Add backend to path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), 'backend')))

from app import models
from app.database import SessionLocal

def delete_user_reproduction(email):
    db = SessionLocal()
    try:
        user = db.query(models.User).filter(models.User.email == email).first()
        if not user:
            print(f"User {email} not found")
            return
        
        print(f"Attempting to delete user {user.email} (ID: {user.id})")
        
        # Exact same logic as in admin.py
        
        # 1. Clear out reviewer fields if this user reviewed anything
        print("Clearing reviewer/approver fields...")
        db.query(models.Campaign).filter(models.Campaign.reviewed_by == user.id).update({models.Campaign.reviewed_by: None})
        db.query(models.Media).filter(models.Media.approved_by == user.id).update({models.Media.approved_by: None})
        
        # 2. Delete related notifications
        print("Deleting notifications...")
        db.query(models.Notification).filter(models.Notification.user_id == user.id).delete()
        
        # 3. Delete related payment transactions
        print("Deleting transactions...")
        db.query(models.PaymentTransaction).filter(models.PaymentTransaction.user_id == user.id).delete()
        
        # 4. Delete related invoices
        print("Deleting invoices...")
        db.query(models.Invoice).filter(models.Invoice.user_id == user.id).delete()
        
        # Finally delete the user
        print("Deleting user record...")
        db.delete(user)
        
        print("Committing...")
        db.commit()
        print("✅ User deleted successfully")

    except Exception as e:
        db.rollback()
        print(f"❌ Deletion failed: {e}")
        import traceback
        traceback.print_exc()
    finally:
        db.close()

if __name__ == "__main__":
    if len(sys.argv) > 1:
        delete_user_reproduction(sys.argv[1])
    else:
        print("Usage: python reproduce_delete.py <email>")
