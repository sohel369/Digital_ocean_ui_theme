from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
import logging

from ..database import get_db
from .. import models, schemas, auth

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/invoices", tags=["Invoices"])

@router.get("/", response_model=List[schemas.Invoice])
async def get_user_invoices(
    current_user: models.User = Depends(auth.get_current_active_user),
    db: Session = Depends(get_db)
):
    """
    Get all invoices for the current user.
    """
    invoices = db.query(models.Invoice).filter(
        models.Invoice.user_id == current_user.id
    ).order_by(models.Invoice.billing_date.desc()).all()
    
    return invoices

@router.get("/{invoice_id}", response_model=schemas.Invoice)
async def get_invoice(
    invoice_id: int,
    current_user: models.User = Depends(auth.get_current_active_user),
    db: Session = Depends(get_db)
):
    """
    Get a specific invoice.
    """
    invoice = db.query(models.Invoice).filter(
        models.Invoice.id == invoice_id
    ).first()
    
    if not invoice:
        raise HTTPException(status_code=404, detail="Invoice not found")
    
    # Check ownership
    if invoice.user_id != current_user.id:
        # Check if user is admin
        role = str(current_user.role).lower() if current_user.role else ""
        if role not in ["admin", "country_admin"]:
            raise HTTPException(status_code=403, detail="Not authorized to view this invoice")
            
    return invoice
