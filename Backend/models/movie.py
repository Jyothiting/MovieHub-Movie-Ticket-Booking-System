from sqlalchemy import Column, Integer, String, Text

from database import Base


class Movie(Base):

    __tablename__ = "movies"

    # ==========================================================
    # PRIMARY KEY
    # ==========================================================

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    # ==========================================================
    # MOVIE INFORMATION
    # ==========================================================

    title = Column(
        String(200),
        nullable=False
    )

    image = Column(
        String(255),
        nullable=False
    )

    rating = Column(
        String(50),
        nullable=False
    )

    genre = Column(
        String(150),
        nullable=False
    )

    duration = Column(
        String(50),
        nullable=False
    )

    release_date = Column(
        String(50),
        nullable=False
    )

    language = Column(
        String(100),
        nullable=False
    )

    director = Column(
        String(200),
        nullable=False
    )

    cast = Column(
        Text,
        nullable=False
    )

    description = Column(
        Text,
        nullable=False
    )

    # ==========================================================
    # TRAILER
    # ==========================================================

    trailer = Column(
        String(500),
        nullable=True
    )

    # ==========================================================
    # MOVIE TYPE
    # ==========================================================

    movie_type = Column(
        String(30),
        nullable=True,
        default="now_showing"
    )

    # ==========================================================
    # REFUND POLICY
    # ==========================================================

    refund_policy = Column(
        String(30),
        nullable=False,
        default="refundable"
    )

    # ==========================================================
    # LOCATION
    # ==========================================================

    location = Column(
        String(100),
        nullable=True
    )

    # ==========================================================
    # THEATRE
    # ==========================================================

    theatre = Column(
        String(150),
        nullable=True
    )