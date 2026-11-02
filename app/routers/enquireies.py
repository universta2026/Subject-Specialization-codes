from typing import Optional
from fastapi import APIRouter, Depends, Query, status
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.models.models import Enquiry
from app.schemas.schemas import EnquiryCreate, EnquiryRead

router = APIRouter(prefix="/enquiries", tags=["enquiries"])

@router.post("", response_model=EnquiryRead, status_code=status.HTTP_201_CREATED)
def create_enquiry(payload: EnquiryCreate, db: Session = Depends(get_db)):
    enquiry = Enquiry(
        full_name=payload.full_name,
        email=payload.email,
        phone=payload.phone,
        preferred_country_id=payload.preferred_country_id,
        planned_intake=payload.planned_intake,
        source_page=payload.source_page,
        status="new"
    )
    db.add(enquiry)
    db.commit()
    db.refresh(enquiry)
    return enquiry

@router.get("", response_model=list[EnquiryRead])
def list_enquiries(
    status_filter: Optional[str] = Query(default=None, alias="status", description="Filter by status: new, contacted, in_progress, closed"),
    db: Session = Depends(get_db)
):
    query = db.query(Enquiry)
    if status_filter:
        query = query.filter(Enquiry.status == status_filter)
    return query.order_by(Enquiry.created_at.desc()).all()

