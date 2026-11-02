from typing import Optional
from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.models.models import Subject
from app.schemas.schemas import SubjectRead

router = APIRouter(prefix="/subjects", tags=["subjects"])

@router.get("", response_model=list[SubjectRead])
def list_subjects(
    status_filter: Optional[str] = Query(default=None, alias="status", description="Filter by status: published, draft, etc."),
    db: Session = Depends(get_db)
):
    query = db.query(Subject)
    if status_filter:
        query = query.filter(Subject.status == status_filter)
    return query.order_by(Subject.display_order.asc(), Subject.name.asc()).all()

@router.get("/{slug}", response_model=SubjectRead)
def get_subject_by_slug(slug: str, db: Session = Depends(get_db)):
    subject = db.query(Subject).filter(Subject.slug == slug).first()
    if not subject:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Subject '{slug}' not found")
    return subject

