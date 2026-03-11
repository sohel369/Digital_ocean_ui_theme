"""
industry_config.py — Centralised industry multiplier configuration.

This module separates industry-specific business rules from the core pricing engine.
Admin can override these in the database (PricingMatrix table).
This file acts as a code-level fallback and documentation.

Formula:
    final_price = base_rate × industry_multiplier × coverage_multiplier

Adding a new industry:
    1. Add its slug to constants.SUPPORTED_INDUSTRIES
    2. Add its multiplier to INDUSTRY_MULTIPLIERS below
    3. Optionally seed a PricingMatrix row via migrate_add_industry_pricing.py
"""

# ---------------------------------------------------------------------------
# Industry multiplier registry
# ---------------------------------------------------------------------------
# Keys must exactly match the industry_type strings used in:
#   - models.Campaign.industry_type
#   - models.PricingMatrix.industry_type
#   - constants.SUPPORTED_INDUSTRIES
# ---------------------------------------------------------------------------

INDUSTRY_MULTIPLIERS: dict[str, float] = {
    "Real Estate & Property Agents": 2.5,
    "Legal Services, Lawyers & Mediation": 2.5,
    "Financial and Insurance Services": 2.3,
    "Health, Wellness & Medical": 2.3,
    "Automotive Services": 2.2,
    "IT & Tech Support Services": 2.0,
    "Professional Training & Certification": 2.0,
    "Department Stores and Electronics": 2.0,
    "Mobile Phone and Internet Services": 2.0,
    "Education & Tutoring": 1.8,
    "Event & Wedding Services": 1.8,
    "Beauty and Cosmetic Surgery": 1.7,
    "Fitness & Personal Training": 1.6,
    "Home & Garden": 1.6,
    "Lifestyle, Boutique, Apparel & Accessories": 1.5,
    "Travel & Tourism": 1.5,
    "Storage, Logistics and Removalists": 1.5,
    "Restaurants, Food & Beverage": 1.3,
    "Trades & Home Services": 1.3,
    "Pets & Animals": 1.2,
    "Childcare & Aged Care Providers": 1.2,
    "Radio and TV Stations": 1.2,
    "Baby Clothes, Accessories & Toys": 1.1,
    "Accounting & Tax Services": 1.1
}


def get_industry_multiplier(industry_type: str, default: float = 1.0) -> float:
    """
    Return the industry multiplier for a given industry_type string.

    Falls back to `default` if the industry is not found in the registry.
    The pricing engine calls this to determine the multiplier when no
    database override exists.
    """
    return INDUSTRY_MULTIPLIERS.get(industry_type, default)


# ---------------------------------------------------------------------------
# Industry → public landing page slug mapping
# (used by backend if SEO sitemap generation is added later)
# ---------------------------------------------------------------------------
INDUSTRY_LANDING_SLUGS: dict[str, str] = {
    "Real Estate & Property Agents": "/real-estate",
    "Legal Services, Lawyers & Mediation": "/legal-services",
    "Financial and Insurance Services": "/financial-services",
    "Health, Wellness & Medical": "/health-medical",
    "Automotive Services": "/automotive-services",
}
