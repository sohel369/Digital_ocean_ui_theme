
import requests
import json
import os
from dotenv import load_dotenv

def test_delete_user():
    load_dotenv('.env')
    base_url = "http://127.0.0.1:8000/api"
    
    # 1. Login as admin
    print("Logging in as admin...")
    login_data = {
        "email": "admin@adplatform.com",
        "password": "admin123"
    }
    res = requests.post(f"{base_url}/auth/login/json", json=login_data)
    if not res.ok:
        print(f"Login failed: {res.status_code} {res.text}")
        return
    
    token = res.json()["access_token"]
    headers = {"Authorization": f"Bearer {token}"}
    
    # 2. Get users
    print("Fetching users...")
    res = requests.get(f"{base_url}/admin/users", headers=headers)
    users = res.json()
    
    # Find a non-admin user to delete
    target_user = None
    for u in users:
        if u['role'] != 'admin' and u['email'] != 'admin@adplatform.com':
            target_user = u
            break
    
    if not target_user:
        print("No non-admin user found to delete. Creating one...")
        # Signup a new user
        signup_data = {
            "name": "Test Delete",
            "email": "test_delete@example.com",
            "password": "password123",
            "country": "US",
            "industry": "Retail"
        }
        res = requests.post(f"{base_url}/auth/register", json=signup_data) # Check if this path is correct
        if not res.ok:
             # Try another path
             res = requests.post(f"{base_url}/auth/signup", json=signup_data)
        
        if res.ok:
            target_user = res.json()["user"]
            print(f"Created user: {target_user['email']} (ID: {target_user['id']})")
        else:
            print(f"Failed to create user: {res.status_code} {res.text}")
            return

    # 3. Attempt Delete
    print(f"Attempting to delete user {target_user['email']} (ID: {target_user['id']})...")
    res = requests.delete(f"{base_url}/admin/users/{target_user['id']}", headers=headers)
    
    if res.ok:
        print("✅ User deleted successfully via API")
    else:
        print(f"❌ Delete failed: {res.status_code}")
        print(f"Detail: {res.text}")

if __name__ == "__main__":
    test_delete_user()
