from typing import Optional
from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.models.models import Country
from app.schemas.schemas import CountryRead

router = APIRouter(prefix="/countries", tags=["countries"])

@router.get("", response_model=list[CountryRead])
def list_countries(
    status: Optional[str] = Query(default=None, description="Filter by status: published, draft, etc."),
    db: Session = Depends(get_db)
):
    query = db.query(Country)
    if status:
        query = query.filter(Country.status == status)
    return query.order_by(Country.display_order.asc(), Country.name.asc()).all()

