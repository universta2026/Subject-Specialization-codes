import uuid
from typing import Optional
from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.models.models import Specialization
from app.schemas.schemas import SpecializationRead

router = APIRouter(prefix="/specializations", tags=["specializations"])

@router.get("", response_model=list[SpecializationRead])
def list_specializations(
    subject_id: Optional[uuid.UUID] = Query(default=None, description="Filter by parent subject ID"),
    is_featured: Optional[bool] = Query(default=None, description="Filter featured specializations"),
    status_filter: Optional[str] = Query(default=None, alias="status", description="Filter by status"),
    db: Session = Depends(get_db)
):
    query = db.query(Specialization)
    if subject_id:
        query = query.filter(Specialization.subject_id == subject_id)
    if is_featured is not None:
        query = query.filter(Specialization.is_featured == is_featured)
    if status_filter:
        query = query.filter(Specialization.status == status_filter)
    return query.order_by(Specialization.display_order.asc(), Specialization.name.asc()).all()

@router.get("/{slug}", response_model=SpecializationRead)
def get_specialization_by_slug(slug: str, db: Session = Depends(get_db)):
    spec = db.query(Specialization).filter(Specialization.slug == slug).first()
    if not spec:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Specialization '{slug}' not found")
    return spec

