from datetime import date, datetime
from typing import List, Optional, Union

from sqlmodel import SQLModel


class ProjectBase(SQLModel):
    name: str
    description: str
    creation_date: Optional[datetime]
    end_date: Optional[datetime]
    status: Optional[str]
    owner_id: Optional[int]
    contact_id: Optional[int]


class Project(ProjectBase):
    id: int