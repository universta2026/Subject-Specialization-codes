import uuid
from datetime import datetime
from typing import Optional
from pydantic import BaseModel, ConfigDict, EmailStr

# -------------------------------------------------------------------
# COUNTRIES
# -------------------------------------------------------------------
class CountryBase(BaseModel):
    name: str
    slug: str
    country_code: Optional[str] = None
    description: Optional[str] = None
    status: str = "draft"
    display_order: int = 0

class CountryRead(CountryBase):
    id: uuid.UUID

    model_config = ConfigDict(from_attributes=True)


# -------------------------------------------------------------------
# SUBJECTS
# -------------------------------------------------------------------
class SubjectBase(BaseModel):
    name: str
    slug: str
    description: Optional[str] = None
    icon_key: Optional[str] = None
    status: str = "draft"
    display_order: int = 0

class SubjectRead(SubjectBase):
    id: uuid.UUID

    model_config = ConfigDict(from_attributes=True)


# -------------------------------------------------------------------
# SPECIALIZATIONS
# -------------------------------------------------------------------
class SpecializationBase(BaseModel):
    subject_id: uuid.UUID
    name: str
    slug: str
    description: Optional[str] = None
    is_featured: bool = False
    status: str = "draft"
    display_order: int = 0

class SpecializationRead(SpecializationBase):
    id: uuid.UUID

    model_config = ConfigDict(from_attributes=True)


# -------------------------------------------------------------------
# STUDY LEVELS
# -------------------------------------------------------------------
class StudyLevelBase(BaseModel):
    name: str
    slug: str
    description: Optional[str] = None
    duration: Optional[str] = None
    status: str = "draft"
    display_order: int = 0

class StudyLevelRead(StudyLevelBase):
    id: uuid.UUID

    model_config = ConfigDict(from_attributes=True)


# -------------------------------------------------------------------
# ENQUIRIES
# -------------------------------------------------------------------
class EnquiryCreate(BaseModel):
    full_name: str
    email: Optional[str] = None
    phone: Optional[str] = None
    preferred_country_id: Optional[uuid.UUID] = None
    planned_intake: Optional[str] = None
    source_page: Optional[str] = None

class EnquiryRead(EnquiryCreate):
    id: uuid.UUID
    status: str = "new"
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)
