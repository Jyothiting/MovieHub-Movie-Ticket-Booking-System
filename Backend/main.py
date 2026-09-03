from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes import auth
from routes import movies
from routes import bookings
from routes import locations
from routes import theatres
from routes import show_timings
from routes import movie_theatres


app = FastAPI()


app.add_middleware(
    CORSMiddleware,

    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"],
)


app.include_router(auth.router)
app.include_router(movies.router)
app.include_router(bookings.router)
app.include_router(locations.router)
app.include_router(theatres.router)
app.include_router(show_timings.router)
app.include_router(movie_theatres.router)


@app.get("/")
def root():

    return {
        "message": "MovieHub Backend Running"
    }