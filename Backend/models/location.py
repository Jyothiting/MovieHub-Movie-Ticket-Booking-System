from sqlalchemy import Column, Integer, String

from database import Base


class Location(Base):

    __tablename__ = "locations"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    city = Column(
        String,
        nullable=False
    )

    area = Column(
        String,
        nullable=False
    )

    state = Column(
        String,
        nullable=False,
        default="Tamil Nadu"
    )