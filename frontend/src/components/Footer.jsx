import { Link } from "react-router-dom";
import "../styles/Footer.css";


function Footer() {


  return (


    <footer className="footer">


      <div className="footer-container">





        <div className="footer-section">


          <h2>

            🎬 MovieHub

          </h2>



          <p>

            Your ultimate destination for booking movie tickets online.

          </p>



        </div>








        <div className="footer-section">


          <h3>

            Quick Links

          </h3>




          <Link to="/">

            Home

          </Link>




          <Link to="/movies">

            Movies

          </Link>




          <Link to="/theatres">

            Theatres

          </Link>




          <Link to="/profile">

            Profile

          </Link>



        </div>








        <div className="footer-section">


          <h3>

            Contact Us

          </h3>



          <p>

            📧 support@moviehub.com

          </p>



          <p>

            📞 +91 9345614991

          </p>



          <p>

            📍 Chennai, Tamil Nadu

          </p>



        </div>






      </div>







      <div className="footer-bottom">


        <p>

          © 2026 MovieHub. All Rights Reserved.

        </p>


      </div>






    </footer>


  );


}


export default Footer;