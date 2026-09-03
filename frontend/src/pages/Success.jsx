import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import { jsPDF } from "jspdf";
import QRCode from "qrcode";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { getMovieImage } from "../utils/movieImages";

import "../styles/Success.css";


function Success() {

    const location = useLocation();
    const navigate = useNavigate();


    // --------------------------------------------------
    // Booking data
    // --------------------------------------------------

    const bookingData =
        location.state;


    const [qrImage, setQrImage] =
        useState("");


    // --------------------------------------------------
    // No booking
    // --------------------------------------------------

    if (!bookingData) {

        return (

            <>

                <Navbar />

                <div className="no-booking">

                    <h2>
                        No Booking Found
                    </h2>

                    <button
                        onClick={() =>
                            navigate("/")
                        }
                        className="home-btn"
                    >
                        🏠 Go Home
                    </button>

                </div>

                <Footer />

            </>

        );

    }


    // --------------------------------------------------
    // Movie
    // --------------------------------------------------

    const movie =
        typeof bookingData.movie === "object"

            ? bookingData.movie

            : {
                title:
                    bookingData.movie,

                image:
                    bookingData.image
            };


    const movieTitle =
        movie?.title ||
        "Movie";


    // --------------------------------------------------
    // Movie image
    // --------------------------------------------------

    const movieFile =
        movie?.image ||
        bookingData.image ||
        "";


    const movieImage =
        getMovieImage(movieFile);


    console.log(
        "SUCCESS MOVIE FILE:",
        movieFile
    );


    console.log(
        "SUCCESS MOVIE IMAGE:",
        movieImage
    );


    // --------------------------------------------------
    // Seats
    // --------------------------------------------------

    const seats =
        Array.isArray(bookingData.seats)

            ? bookingData.seats.map((seat) => {

                if (typeof seat === "object") {

                    return (
                        seat.seat ||
                        seat.name ||
                        seat.label ||
                        ""
                    );

                }

                return seat;

            })

            : [];


    // --------------------------------------------------
    // Booking ID
    // --------------------------------------------------

    const bookingId =
        bookingData.booking_id ||
        bookingData.bookingId ||
        "MH" + Date.now();


    // --------------------------------------------------
    // Generate QR
    // --------------------------------------------------

    const generateQR = async () => {

        try {

            const qrText = `

MovieHub Ticket

Booking ID : ${bookingId}

Movie : ${movieTitle}

City : ${bookingData.city}

Theatre : ${bookingData.theatre}

Date : ${bookingData.date}

Time : ${bookingData.time}

Seats : ${seats.join(", ")}

Amount : Rs.${bookingData.price}

            `;


            const qr =
                await QRCode.toDataURL(
                    qrText
                );


            setQrImage(qr);

        }

        catch (error) {

            console.error(
                "QR Error:",
                error
            );

            alert(
                "Unable to generate QR code"
            );

        }

    };


    // --------------------------------------------------
    // Convert image to Base64
    // --------------------------------------------------

    const getBase64Image = (image) => {

        return new Promise(
            (resolve, reject) => {

                const img =
                    new Image();


                img.crossOrigin =
                    "anonymous";


                img.onload = () => {

                    const canvas =
                        document.createElement(
                            "canvas"
                        );


                    canvas.width =
                        img.naturalWidth ||
                        img.width;


                    canvas.height =
                        img.naturalHeight ||
                        img.height;


                    const ctx =
                        canvas.getContext(
                            "2d"
                        );


                    ctx.drawImage(
                        img,
                        0,
                        0
                    );


                    resolve(
                        canvas.toDataURL(
                            "image/jpeg",
                            0.9
                        )
                    );

                };


                img.onerror =
                    reject;


                img.src =
                    image;

            }
        );

    };


    // --------------------------------------------------
    // Download PDF
    // --------------------------------------------------

    const downloadPDF = async () => {

        try {

            const pdf =
                new jsPDF();


            const pageWidth =
                pdf.internal.pageSize.getWidth();


            // Movie image

            let movieImageBase64 =
                null;


            if (movieImage) {

                try {

                    movieImageBase64 =
                        await getBase64Image(
                            movieImage
                        );

                }

                catch (error) {

                    console.error(
                        "Movie image PDF error:",
                        error
                    );

                }

            }


            // Outer frame

            pdf.setLineWidth(2);


            pdf.roundedRect(
                10,
                10,
                190,
                270,
                8,
                8
            );


            // Header

            pdf.setFontSize(26);


            pdf.text(
                "MovieHub",
                pageWidth / 2,
                30,
                {
                    align: "center"
                }
            );


            pdf.setFontSize(14);


            pdf.text(
                "PREMIUM MOVIE TICKET",
                pageWidth / 2,
                42,
                {
                    align: "center"
                }
            );


            pdf.line(
                20,
                50,
                190,
                50
            );


            // Movie poster

            if (movieImageBase64) {

                pdf.roundedRect(
                    20,
                    65,
                    45,
                    65,
                    5,
                    5
                );


                pdf.addImage(
                    movieImageBase64,
                    "JPEG",
                    22,
                    67,
                    41,
                    61
                );

            }


            // Movie details

            pdf.setFontSize(15);


            pdf.text(
                "MOVIE DETAILS",
                80,
                70
            );


            pdf.setFontSize(12);


            pdf.text(
                `Movie : ${movieTitle}`,
                80,
                85
            );


            pdf.text(
                `Rating : ${
                    movie?.rating ||
                    "N/A"
                }`,
                80,
                98
            );


            pdf.text(
                `Theatre : ${
                    bookingData.theatre ||
                    "N/A"
                }`,
                80,
                111
            );


            pdf.text(
                `City : ${
                    bookingData.city ||
                    "N/A"
                }`,
                80,
                124
            );


            pdf.line(
                20,
                145,
                190,
                145
            );


            // Booking details

            pdf.setFontSize(15);


            pdf.text(
                "BOOKING DETAILS",
                20,
                165
            );


            pdf.setFontSize(12);


            pdf.text(
                `Booking ID : ${bookingId}`,
                20,
                180
            );


            pdf.text(
                `Date : ${
                    bookingData.date ||
                    "N/A"
                }`,
                20,
                193
            );


            pdf.text(
                `Time : ${
                    bookingData.time ||
                    "N/A"
                }`,
                20,
                206
            );


            pdf.text(
                `Seats : ${seats.join(", ")}`,
                20,
                219
            );


            // Amount

            pdf.roundedRect(
                120,
                180,
                60,
                35,
                5,
                5
            );


            pdf.setFontSize(14);


            pdf.text(
                "TOTAL",
                140,
                193
            );


            pdf.setFontSize(18);


            pdf.text(
                `Rs.${bookingData.price}`,
                135,
                207
            );


            // QR

            const qrText = `

MovieHub Ticket

Booking ID : ${bookingId}

Movie : ${movieTitle}

Seats : ${seats.join(", ")}

Amount : Rs.${bookingData.price}

            `;


            const qr =
                await QRCode.toDataURL(
                    qrText
                );


            pdf.addImage(
                qr,
                "PNG",
                75,
                225,
                45,
                45
            );


            // Footer

            pdf.setFontSize(10);


            pdf.text(
                "Thank you for choosing MovieHub",
                pageWidth / 2,
                265,
                {
                    align: "center"
                }
            );


            pdf.save(
                "MovieHub_Premium_Ticket.pdf"
            );

        }

        catch (error) {

            console.error(
                "PDF Error:",
                error
            );

            alert(
                "Unable to download ticket"
            );

        }

    };


    // --------------------------------------------------
    // JSX
    // --------------------------------------------------

    return (

        <>

            <Navbar />


            <div className="success-page">

                <div className="success-ticket">


                    {/* Header */}

                    <div className="success-header">

                        <div className="success-icon">
                            ✅
                        </div>


                        <h1>
                            Payment Successful
                        </h1>


                        <h2>
                            🎬 {movieTitle}
                        </h2>

                    </div>


                    {/* Ticket */}

                    <div className="ticket-main">


                        {/* Poster */}

                        <div className="poster-section">

                            {movieImage ? (

                                <img
                                    src={movieImage}
                                    alt={movieTitle}
                                    className="ticket-movie-image"
                                    onError={(e) => {
                                        console.error(
                                            "Success image failed:",
                                            movieFile
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

                        </div>


                        {/* Booking details */}

                        <div className="ticket-content">


                            <div className="detail-item">

                                <span>
                                    🎟 Booking ID
                                </span>

                                <strong>
                                    {bookingId}
                                </strong>

                            </div>


                            <div className="detail-item">

                                <span>
                                    🏙 City
                                </span>

                                <strong>
                                    {bookingData.city}
                                </strong>

                            </div>


                            <div className="detail-item">

                                <span>
                                    🏢 Theatre
                                </span>

                                <strong>
                                    {bookingData.theatre}
                                </strong>

                            </div>


                            <div className="detail-item">

                                <span>
                                    📅 Date
                                </span>

                                <strong>
                                    {bookingData.date}
                                </strong>

                            </div>


                            <div className="detail-item">

                                <span>
                                    ⏰ Time
                                </span>

                                <strong>
                                    {bookingData.time}
                                </strong>

                            </div>


                            <div className="detail-item">

                                <span>
                                    💺 Seats
                                </span>

                                <strong>
                                    {seats.join(", ")}
                                </strong>

                            </div>


                        </div>

                    </div>


                    {/* Divider */}

                    <div className="ticket-divider">
                    </div>


                    {/* Price */}

                    <div className="ticket-price-section">

                        <span>
                            Total Amount
                        </span>

                        <strong>
                            ₹{bookingData.price}
                        </strong>

                    </div>


                    {/* QR */}

                    {qrImage && (

                        <div className="qr-section">

                            <img
                                src={qrImage}
                                className="qr-image"
                                alt="Booking QR Code"
                            />

                            <p>
                                Scan to view ticket details
                            </p>

                        </div>

                    )}


                    {/* Buttons */}

                    <div className="ticket-buttons">


                        <button
                            className="qr-btn"
                            onClick={generateQR}
                        >
                            🎫 Generate QR
                        </button>


                        <button
                            className="download-btn"
                            onClick={downloadPDF}
                        >
                            📄 Download Ticket
                        </button>


                        <button
                            className="home-btn"
                            onClick={() =>
                                navigate("/")
                            }
                        >
                            🏠 Home
                        </button>


                    </div>


                    {/* Footer */}

                    <div className="ticket-footer">

                        <p>
                            Thank you for choosing MovieHub ❤️
                        </p>

                        <span>
                            Enjoy your movie! 🍿
                        </span>

                    </div>


                </div>

            </div>


            <Footer />

        </>

    );

}


export default Success;