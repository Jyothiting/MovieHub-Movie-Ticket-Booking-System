import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Theatres.css";


function Theatre(){



  const navigate = useNavigate();





  const [selectedTheatre,setSelectedTheatre] = useState("");

  const [selectedTime,setSelectedTime] = useState("");








  const theatres = [



    {

      name:"PVR Cinemas",

      location:"Chennai",

      timings:[

        "10:00 AM",

        "2:00 PM",

        "6:00 PM"

      ]

    },





    {

      name:"INOX Cinemas",

      location:"Chennai",

      timings:[

        "10:00 AM",

        "2:00 PM",

        "6:00 PM"

      ]

    },





    {

      name:"AGS Cinemas",

      location:"Chennai",

      timings:[

        "10:00 AM",

        "2:00 PM",

        "6:00 PM"

      ]

    }



  ];









  const handleTimeSelect = (theatre,time)=>{



    setSelectedTheatre(theatre);


    setSelectedTime(time);



  };









  const bookSeats = (theatre)=>{



    if(

      selectedTheatre !== theatre ||

      selectedTime === ""

    ){


      alert("Please select show time");


      return;


    }







    navigate("/seatbooking",{



      state:{



        theatre:theatre,


        time:selectedTime



      }



    });



  };









  return(



    <section className="theatre-page">





      <h1>


        Select Theatre


      </h1>









      <div className="theatre-container">







        {

          theatres.map((theatre,index)=>(



            <div

              className="theatre-card"

              key={index}

            >







              <h2>


                🏢 {theatre.name}


              </h2>







              <p>


                📍 {theatre.location}


              </p>









              <div className="show-times">







                {

                  theatre.timings.map((time,index)=>(



                    <button



                      key={index}



                      className={



                        selectedTheatre === theatre.name &&

                        selectedTime === time



                        ?



                        "time-btn selected-time"



                        :



                        "time-btn"



                      }



                      onClick={()=>handleTimeSelect(

                        theatre.name,

                        time

                      )}



                    >



                      {time}



                    </button>



                  ))



                }







              </div>









              <button



                className="select-btn"



                onClick={()=>bookSeats(theatre.name)}



              >



                Book Seats



              </button>









            </div>



          ))



        }







      </div>







    </section>



  );


}



export default Theatre;