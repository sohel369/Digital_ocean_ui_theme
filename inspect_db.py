
import os
from sqlalchemy import create_engine, inspect, text
from dotenv import load_dotenv

def inspect_db():
    load_dotenv('.env')
    db_url = os.getenv('DATABASE_URL')
    print(f"Inspecting: {db_url}")
    
    engine = create_engine(db_url)
    inspector = inspect(engine)
    
    tables = inspector.get_table_names()
    print(f"Tables: {tables}")
    
    for table in tables:
        print(f"\n--- Table: {table} ---")
        columns = inspector.get_columns(table)
        for col in columns:
            print(f"  Column: {col['name']} ({col['type']})")
        
        fks = inspector.get_foreign_keys(table)
        for fk in fks:
            print(f"  FK: {fk['constrained_columns']} -> {fk['referred_table']}.{fk['referred_columns']}")

if __name__ == "__main__":
    inspect_db()
