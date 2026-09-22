import { Link } from "react-router-dom";

import "../styles/NotFound.css";


function NotFound() {

    return (

        <div className="notfound-page">

            <div className="notfound-card">

                <h1>
                    🎬 MovieHub
                </h1>


                <h2>
                    404
                </h2>


                <h3>
                    Page Not Found
                </h3>


                <p>
                    The page you are looking for does not exist.
                </p>


                <Link to="/">

                    <button>
                        Go Home
                    </button>

                </Link>

            </div>

        </div>

    );

}


export default NotFound;