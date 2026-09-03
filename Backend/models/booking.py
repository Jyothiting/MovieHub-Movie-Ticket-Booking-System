from sqlalchemy import Column, Integer, String, JSON, ForeignKey

from database import Base


class Booking(Base):

    __tablename__ = "bookings"


    # ==========================================================
    # PRIMARY KEY
    # ==========================================================

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )


    # ==========================================================
    # BOOKING ID
    # ==========================================================

    booking_id = Column(
        String(50),
        unique=True,
        nullable=False
    )


    # ==========================================================
    # USER
    # ==========================================================

    user_id = Column(
        Integer,
        ForeignKey("users.id"),
        nullable=False
    )


    # ==========================================================
    # MOVIE
    # ==========================================================

    movie_id = Column(
        Integer,
        ForeignKey("movies.id"),
        nullable=False
    )


    movie = Column(
        String(100),
        nullable=False
    )


    image = Column(
        String(255),
        nullable=True
    )


    # ==========================================================
    # LOCATION
    # ==========================================================

    city = Column(
        String(100),
        nullable=False
    )


    theatre = Column(
        String(150),
        nullable=False
    )


    # ==========================================================
    # SHOW DETAILS
    # ==========================================================

    date = Column(
        String(50),
        nullable=False
    )


    time = Column(
        String(50),
        nullable=False
    )


    # ==========================================================
    # SEATS
    # ==========================================================

    seats = Column(
        JSON,
        nullable=False
    )


    # ==========================================================
    # PRICE
    # ==========================================================

    price = Column(
        Integer,
        nullable=False
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
    # BOOKING STATUS
    # ==========================================================

    status = Column(
        String(50),
        default="confirmed"
    )