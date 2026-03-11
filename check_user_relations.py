
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
        
        # Check Campaigns
        res = conn.execute(text("SELECT count(*) FROM campaigns WHERE advertiser_id=:uid"), {"uid": user_id}).fetchone()
        print(f"Campaigns as Advertiser: {res[0]}")
        
        # Check Reviewed Campaigns
        res = conn.execute(text("SELECT count(*) FROM campaigns WHERE reviewed_by=:uid"), {"uid": user_id}).fetchone()
        print(f"Campaigns Reviewed: {res[0]}")
        
        # Check Invoices
        res = conn.execute(text("SELECT count(*) FROM invoices WHERE user_id=:uid"), {"uid": user_id}).fetchone()
        print(f"Invoices: {res[0]}")
        
        # Check Transactions
        res = conn.execute(text("SELECT count(*) FROM payment_transactions WHERE user_id=:uid"), {"uid": user_id}).fetchone()
        print(f"Transactions: {res[0]}")
        
        # Check Media approved by
        res = conn.execute(text("SELECT count(*) FROM media WHERE approved_by=:uid"), {"uid": user_id}).fetchone()
        print(f"Media Approved: {res[0]}")

if __name__ == "__main__":
    check_user_relations("muhammad@gmail.com")
