import { useLocation, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { getMovieImage } from "../utils/movieImages";
import bookingBackground from "../background/booking-bg.jpg";

import "../styles/BookingSummary.css";


function BookingSummary() {

    const location = useLocation();

    const navigate = useNavigate();


    // ==================================================
    // GET BOOKING DATA
    // ==================================================

    const bookingData = location.state;


    // ==================================================
    // BOOKING BACKGROUND
    // ==================================================

    const backgroundStyle = {

        backgroundImage: `
            linear-gradient(
                rgba(5, 8, 18, 0.60),
                rgba(5, 8, 18, 0.70)
            ),
            url("${bookingBackground}")
        `,

        backgroundSize: "cover",

        backgroundPosition: "center center",

        backgroundRepeat: "no-repeat",

        backgroundAttachment: "scroll"

    };


    // ==================================================
    // NO BOOKING DATA
    // ==================================================

    if (!bookingData) {

        return (

            <>

                <Navbar />

                <div
                    className="no-booking"
                    style={backgroundStyle}
                >

                    <div className="no-booking-content">

                        <div className="no-booking-icon">
                            🎬
                        </div>

                        <h2>
                            No Booking Data Found
                        </h2>

                        <p>
                            Please select a movie,
                            theatre and seats first.
                        </p>

                        <button
                            type="button"
                            onClick={() =>
                                navigate("/")
                            }
                        >
                            🏠 Go Home
                        </button>

                    </div>

                </div>

                <Footer />

            </>

        );

    }


    // ==================================================
    // CONVERT SEATS
    // ==================================================

    const seatNames =

        Array.isArray(bookingData.seats)

            ? bookingData.seats.map(
                (seat) => {

                    if (
                        typeof seat === "object" &&
                        seat !== null
                    ) {

                        return (
                            seat.seat ||
                            seat.name ||
                            seat.label ||
                            ""
                        );

                    }

                    return String(seat);

                }
            )

            : [];


    // ==================================================
    // MOVIE
    // ==================================================

    const movie =

        typeof bookingData.movie === "object" &&
        bookingData.movie !== null

            ? bookingData.movie

            : {

                id:
                    bookingData.movie_id,

                title:
                    bookingData.movie ||
                    bookingData.movie_title ||
                    "",

                image:
                    bookingData.image ||
                    "",

                rating:
                    bookingData.rating ||
                    ""

            };


    // ==================================================
    // MOVIE ID
    // ==================================================

    const movieId =
        bookingData.movie_id ||
        movie.id;


    // ==================================================
    // MOVIE TITLE
    // ==================================================

    const movieTitle =
        movie.title ||
        bookingData.movie_title ||
        "";


    // ==================================================
    // MOVIE IMAGE
    // ==================================================

    const movieImage =
        getMovieImage(movie.image);


    // ==================================================
    // NUMBER OF TICKETS
    // ==================================================

    const ticketCount =
        seatNames.length;


    // ==================================================
    // PRICE PER SEAT
    // ==================================================

    const pricePerSeat =
        Number(
            bookingData.pricePerSeat || 0
        );


    // ==================================================
    // TOTAL PRICE
    // ==================================================

    const totalPrice =
        Number(
            bookingData.price ||
            (
                ticketCount *
                pricePerSeat
            )
        );


    // ==================================================
    // PROCEED TO PAYMENT
    // ==================================================

    const proceedPayment = () => {

        // ----------------------------------------------
        // VALIDATE MOVIE
        // ----------------------------------------------

        if (!movieId) {

            alert(
                "Movie information is missing."
            );

            return;

        }


        if (!movieTitle) {

            alert(
                "Movie title is missing."
            );

            return;

        }


        // ----------------------------------------------
        // FINAL PAYMENT DATA
        // ----------------------------------------------

        const paymentData = {

            // USER
            user_id:
                bookingData.user_id,


            // MOVIE
            movie_id:
                movieId,

            movie_title:
                movieTitle,


            movie: {

                id:
                    movieId,

                title:
                    movieTitle,

                image:
                    movie.image ||
                    bookingData.image ||
                    "",

                rating:
                    movie.rating ||
                    bookingData.rating ||
                    ""

            },


            // IMAGE
            image:
                movie.image ||
                bookingData.image ||
                "",


            // LOCATION
            city:
                bookingData.city,


            // THEATRE
            theatre:
                bookingData.theatre,

            theatreId:
                bookingData.theatreId,


            // DATE
            date:
                bookingData.date,


            // TIME
            time:
                bookingData.time,


            // SHOW
            showTimingId:
                bookingData.showTimingId,


            // SEATS
            seats:
                seatNames,


            // PRICE PER SEAT
            pricePerSeat:
                pricePerSeat,


            // TOTAL PRICE
            price:
                totalPrice

        };


        // ----------------------------------------------
        // DEBUG
        // ----------------------------------------------

        console.log(
            "===================================="
        );

        console.log(
            "DATA SENT TO PAYMENT:"
        );

        console.log(
            paymentData
        );

        console.log(
            "PAYMENT DATA JSON:"
        );

        console.log(
            JSON.stringify(
                paymentData,
                null,
                2
            )
        );

        console.log(
            "===================================="
        );


        // ----------------------------------------------
        // NAVIGATE TO PAYMENT
        // ----------------------------------------------

        navigate(
            "/payment",
            {
                state:
                    paymentData
            }
        );

    };


    // ==================================================
    // JSX
    // ==================================================

    return (

        <>

            <Navbar />


            {/* ==================================================
                BOOKING SUMMARY PAGE
            ================================================== */}

            <div
                className="summary-page"
                style={backgroundStyle}
            >

                <div className="summary-card">


                    {/* ==================================
                        HEADER
                    ================================== */}

                    <h1>
                        🎬 MovieHub
                    </h1>


                    <h2>
                        Booking Summary
                    </h2>


                    {/* ==================================
                        MOVIE IMAGE
                    ================================== */}

                    {movieImage ? (

                        <img

                            src={movieImage}

                            alt={
                                movieTitle ||
                                "Movie"
                            }

                            className="movie-image"

                            onError={(e) => {

                                console.error(
                                    "Summary image failed:",
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


                    {/* ==================================
                        MOVIE DETAILS
                    ================================== */}

                    <div className="movie-section">

                        <h2>

                            🎬{" "}

                            {movieTitle ||
                                "Movie"}

                        </h2>


                        <p>

                            ⭐ Rating:{" "}

                            <strong>

                                {movie.rating ||
                                    "N/A"}

                            </strong>

                        </p>

                    </div>


                    {/* ==================================
                        CITY + THEATRE
                    ================================== */}

                    <div className="details">

                        <div>

                            <span>
                                🏙 City
                            </span>

                            <strong>

                                {bookingData.city ||
                                    "N/A"}

                            </strong>

                        </div>


                        <div>

                            <span>
                                🏢 Theatre
                            </span>

                            <strong>

                                {bookingData.theatre ||
                                    "N/A"}

                            </strong>

                        </div>

                    </div>


                    {/* ==================================
                        DATE + TIME
                    ================================== */}

                    <div className="details">

                        <div>

                            <span>
                                📅 Date
                            </span>

                            <strong>

                                {bookingData.date ||
                                    "N/A"}

                            </strong>

                        </div>


                        <div>

                            <span>
                                ⏰ Show Time
                            </span>

                            <strong>

                                {bookingData.time ||
                                    "N/A"}

                            </strong>

                        </div>

                    </div>


                    {/* ==================================
                        SEATS
                    ================================== */}

                    <div className="seat-box">

                        <h3>
                            💺 Selected Seats
                        </h3>


                        <strong>

                            {seatNames.length > 0

                                ? seatNames.join(", ")

                                : "None"}

                        </strong>


                        <p>

                            🎟 Tickets:{" "}

                            {ticketCount}

                        </p>

                    </div>


                    {/* ==================================
                        PRICE DETAILS
                    ================================== */}

                    <div className="price-box">

                        <h3>
                            💰 Price Details
                        </h3>


                        <p>

                            🎟 Price per seat:{" "}

                            <strong>
                                ₹{pricePerSeat}
                            </strong>

                        </p>


                        <p>

                            🎫 Number of tickets:{" "}

                            <strong>
                                {ticketCount}
                            </strong>

                        </p>


                        <hr />


                        <h2>
                            Total Amount
                        </h2>


                        <h1>
                            ₹{totalPrice}
                        </h1>

                    </div>


                    {/* ==================================
                        PAYMENT BUTTON
                    ================================== */}

                    <button

                        type="button"

                        className="payment-btn"

                        onClick={
                            proceedPayment
                        }

                    >

                        Proceed To Payment 💳

                    </button>


                    {/* ==================================
                        HOME BUTTON
                    ================================== */}

                    <button

                        type="button"

                        className="home-btn"

                        onClick={() =>
                            navigate("/")
                        }

                    >

                        🏠 Home

                    </button>


                </div>

            </div>


            <Footer />

        </>

    );

}


export default BookingSummary;