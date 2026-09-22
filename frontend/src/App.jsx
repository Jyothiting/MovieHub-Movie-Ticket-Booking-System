import { useEffect, useState } from "react";
import {
    Routes,
    Route
} from "react-router-dom";


import Loader from "./components/Loader";

import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";


// ==================================================
// PAGES
// ==================================================

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import Location from "./pages/Location";
import Theatres from "./pages/Theatres";
import SeatBooking from "./pages/SeatBooking";
import BookingSummary from "./pages/BookingSummary";
import Payment from "./pages/Payment";
import Success from "./pages/Success";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

import NotFound from "./pages/NotFound";
import MyBookings from "./pages/MyBookings";

import AdminMovies from "./pages/AdminMovies";
import AdminLogin from "./pages/AdminLogin";


function App() {


    // ==================================================
    // LOADING
    // ==================================================

    const [loading, setLoading] =
        useState(true);


    useEffect(() => {

        const timer =
            setTimeout(() => {

                setLoading(false);

            }, 1500);


        return () =>
            clearTimeout(timer);

    }, []);


    // ==================================================
    // INITIAL LOADER
    // ==================================================

    if (loading) {

        return <Loader />;

    }


    // ==================================================
    // ROUTES
    // ==================================================

    return (

        <Routes>


            {/* ==================================================
                PUBLIC ROUTES
            ================================================== */}


            {/* HOME */}

            <Route
                path="/"
                element={
                    <Home />
                }
            />


            {/* MOVIES */}

            <Route
                path="/movies"
                element={
                    <Movies />
                }
            />


            {/* MOVIE DETAILS */}

            <Route
                path="/movie/:id"
                element={
                    <MovieDetails />
                }
            />


            {/* LOCATION */}

            <Route
                path="/location"
                element={
                    <Location />
                }
            />


            {/* THEATRES */}

            <Route
                path="/theatres"
                element={
                    <Theatres />
                }
            />


            {/* LOGIN */}

            <Route
                path="/login"
                element={
                    <Login />
                }
            />


            {/* REGISTER */}

            <Route
                path="/register"
                element={
                    <Register />
                }
            />


            {/* ==================================================
                PROTECTED ROUTES
            ================================================== */}

            <Route
                element={
                    <ProtectedRoute />
                }
            >


                {/* SEATS */}

                <Route
                    path="/seats"
                    element={
                        <SeatBooking />
                    }
                />


                {/* BOOKING SUMMARY */}

                <Route
                    path="/summary"
                    element={
                        <BookingSummary />
                    }
                />


                {/* PAYMENT */}

                <Route
                    path="/payment"
                    element={
                        <Payment />
                    }
                />


                {/* SUCCESS */}

                <Route
                    path="/success"
                    element={
                        <Success />
                    }
                />


                {/* PROFILE */}

                <Route
                    path="/profile"
                    element={
                        <Profile />
                    }
                />


                {/* MY BOOKINGS */}

                <Route
                    path="/my-bookings"
                    element={
                        <MyBookings />
                    }
                />


            </Route>


            {/* ==================================================
                ADMIN
            ================================================== */}

            <Route
                path="/admin/movies"
                element={
                    <AdminRoute>
                        <AdminMovies />
                    </AdminRoute>
                }
            />


            {/* ADMIN LOGIN */}

            <Route
                path="/admin-login"
                element={
                    <AdminLogin />
                }
            />


            {/* ==================================================
                NOT FOUND
            ================================================== */}

            <Route
                path="*"
                element={
                    <NotFound />
                }
            />


        </Routes>

    );

}


export default App;