# Use Python 3.11 slim image
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Install system dependencies
# libmagic1 is for python-magic, postgresql-client for DB tools
RUN apt-get update && apt-get install -y \
    postgresql-client \
    libmagic1 \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Copy backend code
COPY backend/ /app/backend/

# Create virtual environment and install dependencies
RUN cd backend && \
    python -m venv /opt/venv && \
    /opt/venv/bin/pip install --upgrade pip && \
    /opt/venv/bin/pip install -r requirements.txt

# Set environment variables
ENV PYTHONUNBUFFERED=1
ENV PATH="/opt/venv/bin:$PATH"
ENV PYTHONPATH="/app/backend"

# Expose port (Internal documentation only, Railway uses dynamic port)
EXPOSE 8000

# Start command - Use dynamic port provided by Railway
CMD ["sh", "-c", "/opt/venv/bin/uvicorn app.main:app --host 0.0.0.0 --port ${PORT:-8000} --app-dir backend"]
