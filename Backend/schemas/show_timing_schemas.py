from pydantic import BaseModel


# ==================================================
# CREATE SHOW TIMING
# ==================================================

class ShowTimingCreate(BaseModel):

    movie_id: int

    theatre_id: int

    language: str

    show_time: str

    price: int


# ==================================================
# RESPONSE
# ==================================================

class ShowTimingResponse(BaseModel):

    id: int

    movie_id: int

    theatre_id: int

    language: str

    show_time: str

    price: int

    class Config:

        from_attributes = True