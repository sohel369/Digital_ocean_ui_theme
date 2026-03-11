
import os
import sys
from sqlalchemy import create_engine, text

# Add backend to path for app imports if needed, but we'll use raw SQL
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), 'backend')))

def fix_schema():
    # Try to determine DATABASE_URL
    # Check .env in current dir first
    env_path = ".env"
    database_url = None
    if os.path.exists(env_path):
        with open(env_path, "r") as f:
            for line in f:
                if line.startswith("DATABASE_URL="):
                    database_url = line.split("=", 1)[1].strip()
                    break
    
    if not database_url:
        database_url = os.getenv("DATABASE_URL", "sqlite:///./app.db")
    
    if database_url.startswith("postgres://"):
        database_url = database_url.replace("postgres://", "postgresql://", 1)
    
    print(f"Connecting to: {database_url}")
    engine = create_engine(database_url)
    
    columns_to_add = [
        ("users", "industry", "VARCHAR(255)"),
        ("users", "industry_type", "VARCHAR(100)"),
        ("users", "managed_country", "VARCHAR(10)"),
        ("campaigns", "industry_type", "VARCHAR(100)"),
        ("invoices", "country", "VARCHAR(100)"),
        ("invoices", "tax_rate", "FLOAT"),
        ("invoices", "tax_amount", "FLOAT"),
    ]
    
    is_sqlite = "sqlite" in database_url.lower()
    
    try:
        with engine.connect().execution_options(isolation_level="AUTOCOMMIT") as conn:
            for table, col, col_type in columns_to_add:
                print(f"Checking {table}.{col}...")
                try:
                    if is_sqlite:
                        # SQLite check
                        res = conn.execute(text(f"PRAGMA table_info({table})"))
                        cols = [r[1] for r in res.fetchall()]
                        if col not in cols:
                            print(f"Adding {col} to {table}...")
                            conn.execute(text(f"ALTER TABLE {table} ADD COLUMN {col} {col_type}"))
                            print("Done.")
                        else:
                            print("Exists.")
                    else:
                        # Postgres check
                        res = conn.execute(text(f"""
                            SELECT column_name 
                            FROM information_schema.columns 
                            WHERE table_name='{table}' AND column_name='{col}'
                        """))
                        if not res.fetchone():
                            print(f"Adding {col} to {table}...")
                            conn.execute(text(f"ALTER TABLE {table} ADD COLUMN {col} {col_type}"))
                            print("Done.")
                        else:
                            print("Exists.")
                except Exception as e:
                    print(f"Error fixing {table}.{col}: {e}")
            
            print("Migration attempt finished.")
    except Exception as e:
        print(f"Fatal error: {e}")

if __name__ == "__main__":
    fix_schema()
