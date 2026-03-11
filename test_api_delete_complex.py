
import requests
import json
import os
from dotenv import load_dotenv

def test_delete_user_with_campaign():
    load_dotenv('.env')
    base_url = "http://127.0.0.1:8000/api"
    
    # 1. Login as admin
    print("Logging in as admin...")
    login_data = {
        "email": "admin@adplatform.com",
        "password": "admin123"
    }
    res = requests.post(f"{base_url}/auth/login/json", json=login_data)
    token = res.json()["access_token"]
    headers = {"Authorization": f"Bearer {token}"}
    
    # 2. Create a new advertiser
    unique_email = f"campaign_user_{os.urandom(4).hex()}@test.com"
    print(f"Creating new advertiser: {unique_email}...")
    new_user_data = {
        "name": "Campaign User",
        "email": unique_email,
        "password": "password123",
        "country": "US",
        "industry": "Retail"
    }
    res = requests.post(f"{base_url}/auth/signup", json=new_user_data)
    if not res.ok:
        print(f"Signup failed: {res.text}")
        return
    
    # Login as this user to get ID and create a campaign
    print(f"Logging in as new user {unique_email}...")
    res = requests.post(f"{base_url}/auth/login/json", json={"email": unique_email, "password": "password123"})
    user_token = res.json()["access_token"]
    user_headers = {"Authorization": f"Bearer {user_token}"}
    
    # Get user info for ID
    res = requests.get(f"{base_url}/auth/me", headers=user_headers)
    user = res.json()
    user_id = user["id"]
    print(f"User ID: {user_id}")
    
    # 3. Create a campaign for this user
    print("Creating a campaign for the user...")
    campaign_data = {
        "name": "Test Campaign",
        "budget": 500.0,
        "industry_type": "Retail",
        "ad_format": "Leaderboard",
        "start_date": "2026-04-01",
        "end_date": "2026-04-30",
        "coverage_type": "30-mile",
        "target_postcode": "90210"
    }
    res = requests.post(f"{base_url}/campaigns", json=campaign_data, headers=user_headers)
    if not res.ok:
        print(f"Campaign creation failed: {res.text}")
        return
    campaign_id = res.json()["id"]
    print(f"Created campaign ID: {campaign_id}")
    
    # 4. Try to delete the user as admin
    print(f"Attempting to delete user {unique_email} (ID: {user_id}) as admin...")
    res = requests.delete(f"{base_url}/admin/users/{user_id}", headers=headers)
    
    if res.ok:
        print("✅ User with campaign deleted successfully")
    else:
        print(f"❌ Delete failed: {res.status_code}")
        print(f"Detail: {res.text}")

if __name__ == "__main__":
    test_delete_user_with_campaign()
