
import os
from sqlalchemy import create_engine, text
from dotenv import load_dotenv

def check_user_relations(email):
    load_dotenv('.env')
    db_url = os.getenv('DATABASE_URL')
    engine = create_engine(db_url)
    
    with engine.connect() as conn:
        res = conn.execute(text("SELECT id FROM users WHERE email=:email"), {"email": email}).fetchone()
        if not res:
            print(f"User {email} not found")
            return
        user_id = res[0]
        print(f"User ID: {user_id}")
        
        # Campaigns
        campaigns = conn.execute(text("SELECT id FROM campaigns WHERE advertiser_id=:uid"), {"uid": user_id}).fetchall()
        c_ids = [c[0] for c in campaigns]
        print(f"Number of Campaigns: {len(c_ids)}")
        
        if c_ids:
            # Media
            res = conn.execute(text("SELECT count(*) FROM media WHERE campaign_id IN :cids"), {"cids": tuple(c_ids)}).fetchone()
            print(f"Media Files: {res[0]}")
            
            # Invoices for these campaigns
            res = conn.execute(text("SELECT count(*) FROM invoices WHERE campaign_id IN :cids"), {"cids": tuple(c_ids)}).fetchone()
            print(f"Invoices for these campaigns: {res[0]}")
            
            # Transactions for these campaigns
            res = conn.execute(text("SELECT count(*) FROM payment_transactions WHERE campaign_id IN :cids"), {"cids": tuple(c_ids)}).fetchone()
            print(f"Transactions for these campaigns: {res[0]}")
            
            # Notifications for these campaigns
            res = conn.execute(text("SELECT count(*) FROM notifications WHERE campaign_id IN :cids"), {"cids": tuple(c_ids)}).fetchone()
            print(f"Notifications for these campaigns: {res[0]}")

if __name__ == "__main__":
    check_user_relations("muhammad@gmail.com")
