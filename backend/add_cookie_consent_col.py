from sqlalchemy import text
from app.database import engine, SessionLocal
from app import models
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def add_cookie_consent_column():
    try:
        with engine.connect() as conn:
            # Check if column exists
            # For Postgres
            if "postgresql" in str(engine.url).lower():
                check_query = text("""
                    SELECT column_name 
                    FROM information_schema.columns 
                    WHERE table_name='users' AND column_name='cookie_consent';
                """)
                res = conn.execute(check_query).fetchone()
                if not res:
                    logger.info("Adding cookie_consent column to users table (Postgres)...")
                    conn.execute(text("ALTER TABLE users ADD COLUMN cookie_consent BOOLEAN DEFAULT FALSE;"))
                    conn.commit()
                    logger.info("Column added successfully.")
                else:
                    logger.info("Column cookie_consent already exists.")
            # For SQLite
            else:
                try:
                    conn.execute(text("SELECT cookie_consent FROM users LIMIT 1"))
                    logger.info("Column cookie_consent already exists.")
                except Exception:
                    logger.info("Adding cookie_consent column to users table (SQLite)...")
                    conn.execute(text("ALTER TABLE users ADD COLUMN cookie_consent BOOLEAN DEFAULT 0;"))
                    conn.commit()
                    logger.info("Column added successfully.")
    except Exception as e:
        logger.error(f"Error adding column: {e}")

if __name__ == "__main__":
    add_cookie_consent_column()
