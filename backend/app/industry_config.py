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
    # ── Existing automotive / transport verticals ──
    "Tyres and Wheels": 1.1,
    "Vehicle Servicing and Maintenance": 1.2,
    "Panel Beating and Smash Repairs": 1.3,
    "Automotive Finance Solutions": 2.0,
    "Vehicle Insurance Products": 2.5,
    "Auto Parts, Tools, and Accessories": 1.1,
    "Fleet Management Tools": 1.3,
    "Workshop Technology and Equipment": 1.2,
    "Telematics Systems and Vehicle Tracking Solutions": 1.4,
    "Fuel Cards and Fuel Management Services": 1.3,
    "Vehicle Cleaning and Detailing Services": 1.0,
    "Logistics and Scheduling Software": 1.4,
    "Safety and Compliance Solutions": 1.2,
    "Driver Training and Induction Programs": 1.1,
    "Roadside Assistance Programs": 1.2,
    "GPS Navigation and Route Optimisation Tools": 1.35,
    "EV Charging Infrastructure and Electric Vehicle Solutions": 1.5,
    "Mobile Device Integration and Communications Equipment": 1.3,
    "Asset Recovery and Anti-Theft Technologies": 1.4,
    # ── Legacy placeholder industries ──
    "Industry A": 1.5,
    "Industry B": 1.8,
    "Industry C": 2.2,
    # ── New advertiser industry verticals (2024 expansion) ──
    "Vehicle Wrapping": 1.15,
    "Automotive Services": 1.2,
    "Logistics Software": 1.4,
    "GPS Navigation Tools": 1.35,
    "Finance Services": 2.2,
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
    "Vehicle Wrapping": "/vehicle-wrapping",
    "Automotive Services": "/automotive-services",
    "Logistics Software": "/logistics-software",
    "GPS Navigation Tools": "/gps-navigation",
    "Finance Services": "/finance-services",
}
