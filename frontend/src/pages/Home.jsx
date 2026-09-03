import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Movies from "./Movies";
import UpcomingMovies from "../components/UpcomingMovies";
import Footer from "../components/Footer";

import homeBackground from "../background/home-bg.jpg";

import "../styles/Home.css";


function Home() {

    const homeStyle = {

        "--home-background":
            `url("${homeBackground}")`

    };


    return (

        <div className="home-page">

            {/* =========================================
                NAVBAR
            ========================================= */}

            <Navbar />


            {/* =========================================
                HOME CONTENT WITH BACKGROUND
            ========================================= */}

            <div
                className="home-background-content"
                style={homeStyle}
            >

                <main>

                    <Hero />

                    <Movies />

                    <UpcomingMovies />

                </main>

            </div>


            {/* =========================================
                FOOTER
            ========================================= */}

            <Footer />

        </div>

    );

}


export default Home;
