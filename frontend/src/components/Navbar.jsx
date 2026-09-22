import {
    Link,
    useNavigate
} from "react-router-dom";

import {
    useEffect,
    useState
} from "react";

import "../styles/Navbar.css";


function Navbar() {

    const navigate = useNavigate();


    // ==================================================
    // GET USER FROM LOCAL STORAGE
    // ==================================================

    const getUser = () => {

        try {

            const storedUser =
                localStorage.getItem("user");

            if (!storedUser) {

                return null;

            }

            return JSON.parse(
                storedUser
            );

        }

        catch (error) {

            console.error(
                "User data error:",
                error
            );

            return null;

        }

    };


    const [user, setUser] =
        useState(getUser);


    const [menuOpen, setMenuOpen] =
        useState(false);


    // ==================================================
    // UPDATE USER
    // ==================================================

    useEffect(() => {

        const updateUser = () => {

            setUser(
                getUser()
            );

        };


        // Custom event
        window.addEventListener(
            "userChanged",
            updateUser
        );


        // Storage event
        window.addEventListener(
            "storage",
            updateUser
        );


        return () => {

            window.removeEventListener(
                "userChanged",
                updateUser
            );

            window.removeEventListener(
                "storage",
                updateUser
            );

        };

    }, []);


    // ==================================================
    // CLOSE MENU
    // ==================================================

    const closeMenu = () => {

        setMenuOpen(false);

    };


    // ==================================================
    // LOGOUT
    // ==================================================

    const handleLogout = () => {

        localStorage.removeItem(
            "user"
        );


        setUser(null);


        closeMenu();


        window.dispatchEvent(
            new Event("userChanged")
        );


        navigate(
            "/login"
        );

    };


    // ==================================================
    // PROFILE
    // ==================================================

    const handleProfile = () => {

        closeMenu();

        navigate(
            "/profile"
        );

    };


    // ==================================================
    // JSX
    // ==================================================

    return (

        <nav className="navbar">


            {/* ==========================================
                LOGO
            ========================================== */}

            <Link
                to="/"
                className="logo"
                onClick={closeMenu}
            >

                🎬 MovieHub

            </Link>


            {/* ==========================================
                MOBILE MENU
            ========================================== */}

            <button
                type="button"
                className="menu-btn"

                onClick={() =>
                    setMenuOpen(
                        !menuOpen
                    )
                }

                aria-label="Toggle navigation"
            >

                ☰

            </button>


            {/* ==========================================
                NAV LINKS
            ========================================== */}

            <div
                className={
                    menuOpen
                        ? "nav-links active"
                        : "nav-links"
                }
            >


                {/* HOME */}

                <Link
                    to="/"
                    onClick={closeMenu}
                >

                    Home

                </Link>


                {/* MOVIES */}

                <Link
                    to="/movies"
                    onClick={closeMenu}
                >

                    Movies

                </Link>


                {/* THEATRES */}

                <Link
                    to="/theatres"
                    onClick={closeMenu}
                >

                    Theatres

                </Link>


                {/* ======================================
                    LOGGED-IN USER
                ====================================== */}

                {user ? (

                    <div className="user-menu">


                        {/* PROFILE */}

                        <button
                            type="button"
                            className="profile-nav"

                            onClick={
                                handleProfile
                            }
                        >

                            👤{" "}
                            {user.name}

                        </button>


                        {/* MY BOOKINGS */}

                        <Link
                            to="/my-bookings"
                            onClick={
                                closeMenu
                            }
                        >

                            🎟 My Booking

                        </Link>


                        {/* LOGOUT */}

                        <button
                            type="button"
                            className="logout-nav"

                            onClick={
                                handleLogout
                            }
                        >

                            Logout

                        </button>


                    </div>

                ) : (

                    /* ==================================
                       NOT LOGGED IN
                    ================================== */

                    <>

                        <Link
                            to="/login"
                            onClick={
                                closeMenu
                            }
                        >

                            Login

                        </Link>


                        <Link
                            to="/register"
                            onClick={
                                closeMenu
                            }
                        >

                            Register

                        </Link>

                    </>

                )}

            </div>

        </nav>

    );

}


export default Navbar;
