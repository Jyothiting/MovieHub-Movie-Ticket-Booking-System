// =====================================================
// src/utils/movieImages.js
// =====================================================

// =====================================================
// MOVIE IMAGE IMPORTS
// =====================================================

import DC from "../assets/movies/DC.jpg";
import GattaKusthi from "../assets/movies/GattaKusthi2.jpg";
import GDN from "../assets/movies/GDN.jpg";
import JanaNayagan from "../assets/movies/JanaNayagan.jpg";
import SpiderMan from "../assets/movies/SpiderManBrandNewDay.jpg";
import VishwanathanSons from "../assets/movies/VishwanathandSons.jpg";
import Sardar2 from "../assets/movies/Sardar2.jpg";
import DemonteColony3 from "../assets/movies/DemonteColony3.jpg";
import Magudam from "../assets/movies/Magudam.jpg";
import Irumudi from "../assets/movies/Irumudi.jpg";
import RajiniTheJailer2 from "../assets/movies/The Jailer 2.jpg";
import toxic from "../assets/movies/toxic.jpg";
import bethlehemkudumba from "../assets/movies/bethlehemkudumba.jpg";
import Cinema from "../assets/movies/Cinema.jpg";


// =====================================================
// MOVIE IMAGE FILE NAMES
// =====================================================

const movieImages = {

    "DC.jpg": DC,

    "GattaKusthi2.jpg": GattaKusthi,

    "GDN.jpg": GDN,

    "JanaNayagan.jpg": JanaNayagan,

    "SpiderManBrandNewDay.jpg": SpiderMan,

    "VishwanathandSons.jpg": VishwanathanSons,

    "Sardar2.jpg": Sardar2,

    "DemonteColony3.jpg": DemonteColony3,

    "Magudam.jpg": Magudam,

    "Irumudi.jpg": Irumudi,

    "The Jailer 2.jpg": RajiniTheJailer2,

    "toxic.jpg": toxic,

    "bethlehemkudumba.jpg": bethlehemkudumba,

    "Cinema.jpg": Cinema

};


// =====================================================
// GET MOVIE IMAGE
// =====================================================

export const getMovieImage = (image) => {

    // -------------------------------------------------
    // No image
    // -------------------------------------------------

    if (
        !image ||
        typeof image !== "string"
    ) {
        return null;
    }


    let imagePath = image.trim();


    if (!imagePath) {
        return null;
    }


    // -------------------------------------------------
    // EXTERNAL IMAGE
    // -------------------------------------------------

    if (
        imagePath.startsWith("http://") ||
        imagePath.startsWith("https://") ||
        imagePath.startsWith("blob:") ||
        imagePath.startsWith("data:")
    ) {
        return imagePath;
    }


    // -------------------------------------------------
    // NORMALIZE WINDOWS PATH
    // -------------------------------------------------

    imagePath = imagePath.replace(/\\/g, "/");


    // -------------------------------------------------
    // GET ONLY FILE NAME
    // -------------------------------------------------

    const filename =
        imagePath
            .split("/")
            .pop()
            ?.trim();


    if (!filename) {
        return null;
    }


    // -------------------------------------------------
    // EXACT MATCH
    // -------------------------------------------------

    if (movieImages[filename]) {
        return movieImages[filename];
    }


    // -------------------------------------------------
    // CASE-INSENSITIVE MATCH
    // -------------------------------------------------

    const matchedFilename =
        Object.keys(movieImages).find(
            (key) =>
                key.toLowerCase() ===
                filename.toLowerCase()
        );


    if (matchedFilename) {
        return movieImages[matchedFilename];
    }


    // -------------------------------------------------
    // IMAGE NOT FOUND
    // -------------------------------------------------

    console.error(
        "Movie image not found:",
        image
    );


    return null;
};


// =====================================================
// GET MOVIE FILENAME
// =====================================================

export const getMovieFilename = (image) => {

    if (
        !image ||
        typeof image !== "string"
    ) {
        return "";
    }


    let imagePath = image.trim();


    imagePath = imagePath.replace(
        /\\/g,
        "/"
    );


    return (
        imagePath
            .split("/")
            .pop()
            ?.trim() || ""
    );
};


// =====================================================
// DEFAULT EXPORT
// =====================================================

export default movieImages;