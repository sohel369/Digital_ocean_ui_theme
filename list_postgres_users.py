
import os
import sys
from sqlalchemy import create_engine, text
from dotenv import load_dotenv

def list_users():
    load_dotenv('.env')
    db_url = os.getenv('DATABASE_URL')
    print(f"Connecting to {db_url}")
    
    engine = create_engine(db_url)
    with engine.connect() as conn:
        res = conn.execute(text("SELECT id, email, role FROM users"))
        users = res.fetchall()
        print(f"Found {len(users)} users:")
        for user in users:
            print(f"ID: {user[0]}, Email: {user[1]}, Role: {user[2]}")

if __name__ == "__main__":
    list_users()
