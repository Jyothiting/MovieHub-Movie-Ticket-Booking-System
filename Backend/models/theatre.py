from sqlalchemy import Column, Integer, String, ForeignKey

from database import Base


class Theatre(Base):

    __tablename__ = "theatres"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    name = Column(
        String,
        nullable=False
    )

    location_id = Column(
        Integer,
        ForeignKey(
            "locations.id",
            ondelete="CASCADE"
        ),
        nullable=False
    )

    city = Column(
        String,
        nullable=False
    )

    area = Column(
        String,
        nullable=False
    )

    address = Column(
        String,
        nullable=False
    )

    screens = Column(
        Integer,
        nullable=False
    )