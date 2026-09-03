from pydantic import BaseModel
from typing import List


# ==================================================
# CREATE LOCATION
# ==================================================

class LocationCreate(BaseModel):

    city: str

    area: str

    state: str = "Tamil Nadu"


# ==================================================
# AREA RESPONSE
# ==================================================

class AreaResponse(BaseModel):

    id: int

    name: str


# ==================================================
# LOCATION RESPONSE
# ==================================================

class LocationResponse(BaseModel):

    id: int

    city: str

    area: List[AreaResponse]

    class Config:

        from_attributes = True