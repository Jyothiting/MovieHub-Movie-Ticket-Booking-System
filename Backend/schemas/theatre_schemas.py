from pydantic import BaseModel


class TheatreCreate(BaseModel):

    name: str
    location_id: int
    city: str
    area: str
    address: str
    screens: int


class TheatreResponse(TheatreCreate):

    id: int

    class Config:
        from_attributes = True