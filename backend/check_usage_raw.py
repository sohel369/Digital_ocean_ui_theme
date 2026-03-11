import os
from sqlalchemy import create_engine, text
from dotenv import load_dotenv

load_dotenv()
DB_URL = os.getenv("DATABASE_URL")
if DB_URL.startswith("postgres://"):
    DB_URL = DB_URL.replace("postgres://", "postgresql://", 1)

engine = create_engine(DB_URL)

with engine.connect() as conn:
    print("Campaign industries:")
    res = conn.execute(text("SELECT DISTINCT industry_type FROM campaigns"))
    for row in res:
        print(f"- {row[0]}")
        
    print("\nUser industries:")
    res = conn.execute(text("SELECT DISTINCT industry FROM users"))
    for row in res:
        print(f"- {row[0]}")
