from pydantic import BaseModel, EmailStr, Field
from typing import Optional


class CreateUserRequest(BaseModel):
    name: str = Field(..., min_length=2)
    email: EmailStr
    password: str = Field(..., min_length=6)
    title: Optional[str] = None
    birth_date: Optional[str] = None
    birth_month: Optional[str] = None
    birth_year: Optional[str] = None
    model_config = {
        "extra": "forbid"   # Prevent unknown fields
    }