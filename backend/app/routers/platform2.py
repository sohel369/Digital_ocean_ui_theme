"""
platform2.py — API Router for the Second Advertiser Platform.

All endpoints are prefixed with /platform2 to keep them fully isolated
from the existing Automotive B2B routes.

Endpoints:
    GET  /platform2/categories      → All categories with tiers and multipliers
    GET  /platform2/ad-formats      → All ad format multipliers
    GET  /platform2/pricing-summary → Full pricing config for frontend
    POST /platform2/calculate       → Calculate website ad campaign price
    POST /platform2/newsletter      → Calculate email newsletter CPM price
"""

from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel, Field
from typing import Optional, List

router = APIRouter(prefix="/platform2", tags=["Platform 2 — B2C/B2B Advertising"])


# ─── Request/Response Schemas ───

class Platform2PriceRequest(BaseModel):
    """Request schema for website ad pricing calculation."""
    category_name: str = Field(..., description="Category from the 25-category grid")
    ad_format_name: str = Field(..., description="Ad format (e.g. 'Medium Rectangle', 'Video 30s')")
    coverage_type: str = Field(default="30-mile", description="Coverage: '30-mile', 'state', or 'country'")
    duration_months: int = Field(default=1, ge=1, le=24, description="Campaign duration in months")


class Platform2NewsletterRequest(BaseModel):
    """Request schema for email newsletter CPM pricing."""
    ad_format_name: str = Field(..., description="Newsletter ad format name")
    subscriber_count: int = Field(..., ge=100, description="Number of email subscribers")
    base_cpm: Optional[float] = Field(None, ge=1.0, le=100.0, description="Custom base CPM ($15-$20 default)")
    duration_months: int = Field(default=1, ge=1, le=24, description="Campaign duration in months")


# ─── Endpoints ───

@router.get("/categories")
async def get_platform2_categories():
    """
    Get all Platform 2 categories with tier info, multipliers, and grid positions.
    Returns 24 categories (slot 25 is reserved for future expansion).
    """
    from ..platform2_categories import get_platform2_all_categories, PLATFORM2_TIERS

    return {
        "platform": "Platform 2 — B2C/B2B Advertising",
        "total_categories": 24,
        "max_grid_slots": 25,
        "grid_layout": "5×5",
        "tiers": PLATFORM2_TIERS,
        "categories": get_platform2_all_categories(),
    }


@router.get("/ad-formats")
async def get_platform2_ad_formats():
    """
    Get all ad format multipliers for Platform 2.
    Includes both website display/video formats and email newsletter formats.
    """
    from ..platform2_ad_formats import get_all_ad_formats, get_all_email_formats

    return {
        "website_formats": get_all_ad_formats(),
        "email_formats": get_all_email_formats(),
    }


@router.get("/pricing-summary")
async def get_platform2_pricing_summary():
    """
    Get the complete pricing configuration for frontend consumption.
    Includes categories, ad formats, coverage options, discounts, and formulas.
    """
    from ..platform2_pricing import Platform2PricingEngine

    engine = Platform2PricingEngine()
    return engine.get_pricing_summary()


@router.post("/calculate")
async def calculate_platform2_price(request: Platform2PriceRequest):
    """
    Calculate the campaign price for a Platform 2 advertiser.

    Formula: final_price = base_price × category_multiplier × ad_format_multiplier × coverage_multiplier
    """
    from ..platform2_pricing import Platform2PricingEngine
    from ..platform2_categories import PLATFORM2_CATEGORY_MULTIPLIERS
    from ..platform2_ad_formats import AD_FORMAT_MULTIPLIERS

    # Validate category
    if request.category_name not in PLATFORM2_CATEGORY_MULTIPLIERS:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Unknown category: '{request.category_name}'. Use GET /platform2/categories for valid options."
        )

    # Validate ad format
    if request.ad_format_name not in AD_FORMAT_MULTIPLIERS:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Unknown ad format: '{request.ad_format_name}'. Use GET /platform2/ad-formats for valid options."
        )

    # Validate coverage type
    valid_coverage = ["30-mile", "state", "country"]
    if request.coverage_type not in valid_coverage:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Invalid coverage_type: '{request.coverage_type}'. Must be one of: {valid_coverage}"
        )

    engine = Platform2PricingEngine()
    result = engine.calculate_price(
        category_name=request.category_name,
        ad_format_name=request.ad_format_name,
        coverage_type=request.coverage_type,
        duration_months=request.duration_months,
    )

    return result


@router.post("/newsletter")
async def calculate_newsletter_price(request: Platform2NewsletterRequest):
    """
    Calculate email newsletter advertising price using CPM model.

    Formula: newsletter_price = (subscribers / 1000) × base_cpm × ad_format_multiplier
    """
    from ..platform2_pricing import Platform2PricingEngine

    engine = Platform2PricingEngine()
    result = engine.calculate_newsletter_price(
        ad_format_name=request.ad_format_name,
        subscriber_count=request.subscriber_count,
        base_cpm=request.base_cpm,
        duration_months=request.duration_months,
    )

    return result
