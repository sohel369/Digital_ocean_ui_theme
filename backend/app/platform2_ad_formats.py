"""
platform2_ad_formats.py — Advertising Format Multiplier Configuration for Platform 2.

This module defines the ad format multipliers used in the second advertiser platform.
These are independent of the existing ad types in the Automotive B2B platform.

Pricing formula:
    final_price = base_price × category_multiplier × ad_format_multiplier × coverage_multiplier

Adding a new ad format:
    1. Add it to AD_FORMAT_MULTIPLIERS below
    2. Update the corresponding frontend config in platform2AdFormats.js
"""

from typing import Dict, List, Optional


# ─── Ad Format Multiplier Registry ───
AD_FORMAT_MULTIPLIERS: Dict[str, float] = {
    "Mobile Leaderboard": 1.0,
    "Leaderboard Footer": 1.2,
    "Skyscraper Left": 1.5,
    "Skyscraper Right": 1.5,
    "Leaderboard Header": 1.8,
    "Medium Rectangle": 2.0,
    "Large Rectangle": 2.2,
    "Video 15s": 5.0,
    "Video 30s": 6.0,
    "Video 45s": 7.0,
    "Video 60s": 8.0,
}

# ─── Ad Format Metadata (for frontend display) ───
AD_FORMAT_DETAILS: List[dict] = [
    {
        "name": "Mobile Leaderboard",
        "multiplier": 1.0,
        "dimensions": "320×50",
        "description": "Standard mobile banner at the top or bottom of mobile screens",
        "type": "display",
    },
    {
        "name": "Leaderboard Footer",
        "multiplier": 1.2,
        "dimensions": "728×90",
        "description": "Leaderboard banner placed at the footer of pages",
        "type": "display",
    },
    {
        "name": "Skyscraper Left",
        "multiplier": 1.5,
        "dimensions": "160×600",
        "description": "Tall vertical banner on the left sidebar",
        "type": "display",
    },
    {
        "name": "Skyscraper Right",
        "multiplier": 1.5,
        "dimensions": "160×600",
        "description": "Tall vertical banner on the right sidebar",
        "type": "display",
    },
    {
        "name": "Leaderboard Header",
        "multiplier": 1.8,
        "dimensions": "728×90",
        "description": "Premium leaderboard banner at the top of pages",
        "type": "display",
    },
    {
        "name": "Medium Rectangle",
        "multiplier": 2.0,
        "dimensions": "300×250",
        "description": "Versatile rectangle ad embedded within content",
        "type": "display",
    },
    {
        "name": "Large Rectangle",
        "multiplier": 2.2,
        "dimensions": "336×280",
        "description": "Larger in-content rectangle for maximum visibility",
        "type": "display",
    },
    {
        "name": "Video 15s",
        "multiplier": 5.0,
        "dimensions": "16:9",
        "description": "Short-form video ad — 15 seconds",
        "type": "video",
    },
    {
        "name": "Video 30s",
        "multiplier": 6.0,
        "dimensions": "16:9",
        "description": "Standard video ad — 30 seconds",
        "type": "video",
    },
    {
        "name": "Video 45s",
        "multiplier": 7.0,
        "dimensions": "16:9",
        "description": "Extended video ad — 45 seconds",
        "type": "video",
    },
    {
        "name": "Video 60s",
        "multiplier": 8.0,
        "dimensions": "16:9",
        "description": "Full-length video ad — 60 seconds",
        "type": "video",
    },
]


# ─── Email Newsletter Ad Formats (CPM-based) ───
# These reuse the same multipliers but pricing is based on subscriber count.
EMAIL_NEWSLETTER_FORMATS: List[dict] = [
    {
        "name": "Newsletter Header Banner",
        "multiplier": 1.8,
        "description": "Top banner position in email newsletter",
    },
    {
        "name": "Newsletter Medium Rectangle",
        "multiplier": 2.0,
        "description": "In-content rectangle within newsletter body",
    },
    {
        "name": "Newsletter Footer Banner",
        "multiplier": 1.2,
        "description": "Footer banner at the bottom of newsletter",
    },
    {
        "name": "Newsletter Sponsored Content",
        "multiplier": 2.5,
        "description": "Native-style sponsored content block within newsletter",
    },
]


def get_ad_format_multiplier(format_name: str, default: float = 1.0) -> float:
    """
    Return the multiplier for a given ad format.
    Falls back to `default` if the format is not found.
    """
    return AD_FORMAT_MULTIPLIERS.get(format_name, default)


def get_all_ad_formats() -> List[dict]:
    """Return all ad format details for API responses."""
    return AD_FORMAT_DETAILS


def get_all_email_formats() -> List[dict]:
    """Return all email newsletter ad format details."""
    return EMAIL_NEWSLETTER_FORMATS
