from datetime import date, datetime
from typing import TYPE_CHECKING, List, Optional

from sqlmodel import JSON, Column, Field, Relationship, SQLModel


class Users(SQLModel, table=True):
    id: Optional[int] = Field(primary_key=True, index=True)
    name: str = Field(index=True)
    email: str
    hashed_password: str
    is_active: Optional[bool] = Field(default=True)
    role_id: Optional[int] = Field(foreign_key="roles.id")


# class Item(SQLModel, table=True):
#     # __tablename__ = "items"

#     id : int  = Field(primary_key=True, index=True)
#     title : str = Field( index=True)
#     description : str = Field( index=True)
#     owner_id : int = Field(foreign_key = "users.id")


class Sequences(SQLModel, table=True):
    id: int = Field(primary_key=True, index=True)
    deployment_id: int = Field(foreign_key="deployments.id")


class Sequences_Files(SQLModel, table=True):
    id: int = Field(primary_key=True, index=True)
    sequence_id: int = Field(foreign_key="sequences.id")
    file_id: str = Field(foreign_key="files.id")


class Annotations(SQLModel, table=True):
    id: int = Field(primary_key=True, index=True)
    specie_id: int
    behavior: str
    sexe: str
    life_stage: str
    biological_state: str
    ind_number: int
    file_id: str = Field(foreign_key="files.id")


class Megadetector(SQLModel, table=True):
    id: int = Field(primary_key=True, index=True)
    label_class: str


class Deepfaune(SQLModel, table=True):
    id: int = Field(primary_key=True, index=True)
    label_class: str


class TemplateSequence(SQLModel, table=True):
    id: int = Field(primary_key=True, index=True)
    mode: str
    frequence: int = Field(default=0)
    number_images: int = Field(default=1)


class ExifKeyModel(SQLModel, table=True):
    id: int = Field(primary_key=True, index=True)
    json_exif: dict = Field(sa_column=Column(JSON), default={})


class Groups(SQLModel, table=True):
    id: int = Field(primary_key=True, index=True)
    name: str
    role_id: int = Field(foreign_key="roles.id")


class GroupsUsers(SQLModel, table=True):
    id: int = Field(primary_key=True, index=True)
    user_id: int = Field(foreign_key="users.id")
    group_id: int = Field(foreign_key="groups.id")


class Roles(SQLModel, table=True):
    id: int = Field(primary_key=True, index=True)
    role: str
    description: str