from sqlalchemy import Column, Integer, ForeignKey
from database import Base


class MovieTheatre(Base):

    __tablename__ = "movie_theatres"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    movie_id = Column(
        Integer,
        ForeignKey(
            "movies.id",
            ondelete="CASCADE"
        ),
        nullable=False
    )

    theatre_id = Column(
        Integer,
        ForeignKey(
            "theatres.id",
            ondelete="CASCADE"
        ),
        nullable=False
    )