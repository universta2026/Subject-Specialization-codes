from typing import Optional
from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.models.models import StudyLevel
from app.schemas.schemas import StudyLevelRead

router = APIRouter(prefix="/study-levels", tags=["study-levels"])

@router.get("", response_model=list[StudyLevelRead])
def list_study_levels(
    status_filter: Optional[str] = Query(default=None, alias="status", description="Filter by status"),
    db: Session = Depends(get_db)
):
    query = db.query(StudyLevel)
    if status_filter:
        query = query.filter(StudyLevel.status == status_filter)
    return query.order_by(StudyLevel.display_order.asc(), StudyLevel.name.asc()).all()

@router.get("/{slug}", response_model=StudyLevelRead)
def get_study_level_by_slug(slug: str, db: Session = Depends(get_db)):
    level = db.query(StudyLevel).filter(StudyLevel.slug == slug).first()
    if not level:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Study level '{slug}' not found")
    return level

