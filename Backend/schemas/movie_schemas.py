from pydantic import BaseModel

from typing import Optional


class MovieCreate(BaseModel):

    title: str

    image: str

    rating: str

    genre: str

    duration: str

    release_date: str

    language: str

    director: str

    cast: str

    description: str

    trailer: Optional[str] = None

    movie_type: Optional[str] = "now_showing"

    refund_policy: Optional[str] = "refundable"

    location: Optional[str] = None

    theatre: Optional[str] = None


class MovieResponse(MovieCreate):

    id: int

    class Config:

        from_attributes = True