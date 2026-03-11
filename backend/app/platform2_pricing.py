"""
platform2_pricing.py — Pricing Engine for the Second Advertiser Platform.

This module implements the pricing logic for the broader B2C/B2B advertising platform.
It is fully independent from the existing PricingEngine in pricing.py.

Formulas:
    Website Advertising:
        final_price = base_price × category_multiplier × ad_format_multiplier × coverage_multiplier

    Email Newsletter (CPM):
        newsletter_price = (subscribers / 1000) × base_cpm × ad_format_multiplier

    Duration Discounts:
        2 months  → 5%
        3 months  → 10%
        6 months  → 25%
        12 months → 50%
"""

from typing import Dict, Optional, List
import math

from .platform2_categories import (
    PLATFORM2_BASE_PRICE,
    get_platform2_category_multiplier,
    get_platform2_all_categories,
    PLATFORM2_CATEGORY_MULTIPLIERS,
)
from .platform2_ad_formats import (
    get_ad_format_multiplier,
    get_all_ad_formats,
    get_all_email_formats,
    AD_FORMAT_MULTIPLIERS,
)


# ─── Coverage Multipliers (matching existing system) ───
COVERAGE_MULTIPLIERS: Dict[str, float] = {
    "30-mile": 1.0,
    "state": 2.5,
    "country": 5.0,
}

# ─── Email Newsletter CPM Range ───
EMAIL_BASE_CPM_MIN: float = 15.0  # $ per 1,000 subscribers
EMAIL_BASE_CPM_MAX: float = 20.0
EMAIL_BASE_CPM_DEFAULT: float = 17.50  # Midpoint


class Platform2PricingEngine:
    """
    Pricing calculation engine for the second advertiser platform.

    This does NOT interact with the database PricingMatrix table.
    It uses the configuration files directly for deterministic pricing.
    """

    def __init__(self):
        self.base_price = PLATFORM2_BASE_PRICE

    def calculate_price(
        self,
        category_name: str,
        ad_format_name: str,
        coverage_type: str = "30-mile",
        duration_months: int = 1,
    ) -> dict:
        """
        Calculate the final campaign price for the second platform.

        Returns a full breakdown dict.
        """
        # 1. Get multipliers
        category_multiplier = get_platform2_category_multiplier(category_name)
        ad_format_multiplier = get_ad_format_multiplier(ad_format_name)
        coverage_multiplier = COVERAGE_MULTIPLIERS.get(coverage_type, 1.0)

        # 2. Base calculation
        category_price = self.base_price * category_multiplier
        monthly_gross = self.base_price * category_multiplier * ad_format_multiplier * coverage_multiplier

        # 3. Duration discount
        duration_discount_percent = self._get_duration_discount(duration_months)
        discount_amount = monthly_gross * (duration_discount_percent / 100.0)
        monthly_net = monthly_gross - discount_amount

        # 4. Total for full duration
        total_gross = monthly_gross * duration_months
        total_discount = discount_amount * duration_months
        total_price = monthly_net * duration_months

        return {
            "base_price": self.base_price,
            "category_name": category_name,
            "category_multiplier": category_multiplier,
            "category_price": round(category_price, 2),
            "ad_format_name": ad_format_name,
            "ad_format_multiplier": ad_format_multiplier,
            "coverage_type": coverage_type,
            "coverage_multiplier": coverage_multiplier,
            "duration_months": duration_months,
            "duration_discount_percent": duration_discount_percent,
            "monthly_gross": round(monthly_gross, 2),
            "monthly_discount": round(discount_amount, 2),
            "monthly_net": round(monthly_net, 2),
            "total_gross": round(total_gross, 2),
            "total_discount": round(total_discount, 2),
            "total_price": round(total_price, 2),
            "formula": "base_price × category_multiplier × ad_format_multiplier × coverage_multiplier",
        }

    def calculate_newsletter_price(
        self,
        ad_format_name: str,
        subscriber_count: int,
        base_cpm: Optional[float] = None,
        duration_months: int = 1,
    ) -> dict:
        """
        Calculate email newsletter advertising price using CPM model.

        Formula: (subscribers / 1000) × base_cpm × ad_format_multiplier
        """
        effective_cpm = base_cpm if base_cpm else EMAIL_BASE_CPM_DEFAULT
        ad_format_multiplier = get_ad_format_multiplier(ad_format_name, default=1.0)

        # Check if it's an email-specific format
        email_formats = {f["name"]: f["multiplier"] for f in get_all_email_formats()}
        if ad_format_name in email_formats:
            ad_format_multiplier = email_formats[ad_format_name]

        cpm_units = subscriber_count / 1000.0
        monthly_price = cpm_units * effective_cpm * ad_format_multiplier

        # Duration discount
        duration_discount_percent = self._get_duration_discount(duration_months)
        discount_amount = monthly_price * (duration_discount_percent / 100.0)
        monthly_net = monthly_price - discount_amount

        total_price = monthly_net * duration_months

        return {
            "pricing_model": "CPM",
            "subscriber_count": subscriber_count,
            "base_cpm": effective_cpm,
            "cpm_range": {"min": EMAIL_BASE_CPM_MIN, "max": EMAIL_BASE_CPM_MAX},
            "ad_format_name": ad_format_name,
            "ad_format_multiplier": ad_format_multiplier,
            "duration_months": duration_months,
            "duration_discount_percent": duration_discount_percent,
            "monthly_gross": round(monthly_price, 2),
            "monthly_discount": round(discount_amount, 2),
            "monthly_net": round(monthly_net, 2),
            "total_price": round(total_price, 2),
            "formula": "(subscribers / 1000) × base_cpm × ad_format_multiplier",
        }

    @staticmethod
    def _get_duration_discount(months: int) -> float:
        """Return discount percentage based on commitment duration."""
        if months >= 12:
            return 50.0
        elif months >= 6:
            return 25.0
        elif months >= 3:
            return 10.0
        elif months >= 2:
            return 5.0
        return 0.0

    def get_pricing_summary(self) -> dict:
        """
        Return a full pricing summary for API consumers (frontend).
        Includes all categories, ad formats, coverage options, and email formats.
        """
        return {
            "platform": "Platform 2 — B2C/B2B Advertising",
            "base_price": self.base_price,
            "categories": get_platform2_all_categories(),
            "ad_formats": get_all_ad_formats(),
            "email_formats": get_all_email_formats(),
            "coverage_options": [
                {"type": "30-mile", "label": "30-Mile Radius", "multiplier": 1.0},
                {"type": "state", "label": "State-Wide", "multiplier": 2.5},
                {"type": "country", "label": "Country-Wide", "multiplier": 5.0},
            ],
            "duration_discounts": [
                {"months": 1, "discount_percent": 0},
                {"months": 2, "discount_percent": 5},
                {"months": 3, "discount_percent": 10},
                {"months": 6, "discount_percent": 25},
                {"months": 12, "discount_percent": 50},
            ],
            "email_cpm": {
                "min": EMAIL_BASE_CPM_MIN,
                "max": EMAIL_BASE_CPM_MAX,
                "default": EMAIL_BASE_CPM_DEFAULT,
                "description": "CPM pricing: $ per 1,000 subscribers",
            },
            "formula": "final_price = base_price × category_multiplier × ad_format_multiplier × coverage_multiplier",
            "newsletter_formula": "(subscribers / 1000) × base_cpm × ad_format_multiplier",
        }
