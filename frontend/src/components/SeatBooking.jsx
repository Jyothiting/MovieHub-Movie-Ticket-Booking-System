import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/SeatBooking.css";


function SeatBooking(){



  const navigate = useNavigate();

  const location = useLocation();




  const theatreData = location.state;





  if(!theatreData){


    return(


      <h2 className="no-booking">


        No Theatre Data Found


      </h2>


    );


  }







  const seats = [


    "A1","A2","A3","A4",

    "B1","B2","B3","B4",

    "C1","C2","C3","C4"


  ];






  const [selectedSeats,setSelectedSeats] = useState([]);








  const handleSeat = (seat)=>{



    if(selectedSeats.includes(seat)){



      setSelectedSeats(

        selectedSeats.filter(

          item => item !== seat

        )

      );



    }

    else{



      setSelectedSeats([

        ...selectedSeats,

        seat

      ]);



    }



  };









  const continueBooking = ()=>{



    if(selectedSeats.length === 0){


      alert("Please select seats");


      return;


    }






    navigate("/summary",{



      state:{


        theatre:theatreData.theatre,


        time:theatreData.time,


        seats:selectedSeats,


        price:selectedSeats.length * 150



      }



    });





  };









  return(



    <div className="seat-page">






      <h1>

        Select Your Seats

      </h1>







      <h3>

        🏢 {theatreData.theatre}

      </h3>





      <h3>

        ⏰ {theatreData.time}

      </h3>









      <div className="screen">


        SCREEN


      </div>









      <div className="seat-container">





        {

          seats.map((seat)=>(



            <button



              key={seat}



              className={


                selectedSeats.includes(seat)


                ?


                "seat selected"


                :


                "seat"



              }



              onClick={()=>handleSeat(seat)}



            >


              {seat}


            </button>



          ))



        }







      </div>







      <div className="selected-info">



        <h3>


          Selected Seats:


        </h3>





        <p>


          {selectedSeats.length > 0

          ?

          selectedSeats.join(", ")

          :

          "No seats selected"

          }


        </p>



      </div>







      <h2>


        Total Amount: ₹{selectedSeats.length * 150}


      </h2>







      <button


        className="continue-btn"


        onClick={continueBooking}



      >


        Continue to Summary


      </button>







    </div>


  );


}



export default SeatBooking;