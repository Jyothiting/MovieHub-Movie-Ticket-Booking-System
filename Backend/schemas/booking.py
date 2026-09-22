from pydantic import BaseModel
from typing import List, Optional


# ==========================================================
# CREATE BOOKING
# ==========================================================

class BookingCreate(BaseModel):

    user_id: int

    movie_id: int

    movie: str

    image: Optional[str] = ""

    city: str

    theatre: str

    date: str

    time: str

    seats: List[str]

    price: int


# ==========================================================
# BOOKING RESPONSE
# ==========================================================

class BookingResponse(BaseModel):

    id: int

    booking_id: str

    user_id: int

    movie_id: int

    movie: str

    image: Optional[str]

    city: str

    theatre: str

    date: str

    time: str

    seats: List[str]

    price: int

    refund_policy: str

    status: str


    class Config:

        from_attributes = True