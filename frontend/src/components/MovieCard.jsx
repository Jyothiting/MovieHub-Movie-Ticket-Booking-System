import { useNavigate } from "react-router-dom";

import "../styles/MovieCard.css";


function MovieCard({ movie }) {

    const navigate =
        useNavigate();


    // ==================================================
    // BOOK MOVIE
    // ==================================================

    const handleBooking = () => {

        navigate(

            `/movie/${movie.id}`,

            {
                state: {
                    movie: movie
                }
            }

        );

    };


    // ==================================================
    // JSX
    // ==================================================

    return (

        <div className="movie-card">


            {/* ==========================================
                IMAGE
            ========================================== */}

            {movie.image ? (

                <img

                    src={
                        movie.image
                    }

                    alt={
                        movie.title ||
                        "Movie"
                    }

                    onError={(e) => {

                        console.error(
                            "Movie image failed:",
                            movie.image
                        );


                        e.currentTarget.style.display =
                            "none";

                    }}

                />

            ) : (

                <div className="no-movie-image">

                    🎬

                    <span>
                        No Image
                    </span>

                </div>

            )}


            {/* ==========================================
                MOVIE CONTENT
            ========================================== */}

            <div className="movie-content">


                {/* TITLE */}

                <h3>

                    {movie.title ||
                        "Movie"}

                </h3>


                {/* RATING */}

                <p>

                    ⭐ Rating:{" "}

                    {movie.rating ||
                        "N/A"}

                </p>


                {/* GENRE */}

                <p>

                    🎭{" "}

                    {movie.genre ||
                        "N/A"}

                </p>


                {/* DURATION */}

                <p>

                    ⏱{" "}

                    {movie.duration ||
                        "N/A"}

                </p>


                {/* LANGUAGE */}

                {movie.language && (

                    <p>

                        🌐{" "}

                        {movie.language}

                    </p>

                )}


                {/* BOOK */}

                <button

                    type="button"

                    onClick={
                        handleBooking
                    }

                >

                    Book Now

                </button>


            </div>

        </div>

    );

}


export default MovieCard;