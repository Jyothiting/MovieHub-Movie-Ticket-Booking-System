import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Success.css";

function BookingSuccess() {

  const location = useLocation();
  const navigate = useNavigate();

  const bookingData = location.state;

  if (!bookingData) {
    return (
      <div className="success-page">
        <div className="success-card">
          <h2>No Booking Found</h2>

          <button
            className="home-btn"
            onClick={() => navigate("/")}
          >
            Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="success-page">

      <div className="success-card">

        <h1>✅ Booking Confirmed</h1>

        <h2>{bookingData.movie?.title}</h2>

        <p>📍 {bookingData.city}</p>

        <p>🏢 {bookingData.theatre}</p>

        <p>📅 {bookingData.date}</p>

        <p>⏰ {bookingData.time}</p>

        <p>
          💺 Seats :
          {" "}
          {Array.isArray(bookingData.seats)
            ? bookingData.seats.join(", ")
            : bookingData.seats}
        </p>

        <h2>₹{bookingData.price}</h2>

        {bookingData.booking_id && (
          <p>
            🎟 Booking ID : {bookingData.booking_id}
          </p>
        )}

        <button
          className="home-btn"
          onClick={() =>
            navigate("/payment", {
              state: bookingData
            })
          }
        >
          Continue To Payment 💳
        </button>

        <button
          className="home-btn"
          onClick={() => navigate("/")}
        >
          🏠 Back Home
        </button>

      </div>

    </div>
  );
}

export default BookingSuccess;