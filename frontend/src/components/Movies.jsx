import MovieCard from "./MovieCard";
import "../styles/Movie.css";


import janaNayagan from "../assets/movies/JanaNayagan.jpg";
import spiderMan from "../assets/movies/SpiderManBrandNewDay.jpg";
import Gattakusthi2 from "../assets/movies/GattaKusthi2.jpg";



function Movies(){



  const movies = [



    {
      id:1,

      title:"Jana Nayagan",

      genre:"Action, Drama",

      rating:"8.5/10",

      duration:"2h 35m",

      releaseDate:"9 January 2026",

      language:"Tamil",

      director:"H. Vinoth",

      cast:"Vijay, Pooja Hegde, Bobby Deol",

      description:
      "Jana Nayagan is an upcoming Tamil action drama movie with political and emotional elements.",

      image:janaNayagan

    },





    {
      id:2,

      title:"Spider-Man: Brand New Day",

      genre:"Action, Sci-Fi, Adventure",

      rating:"9/10",

      duration:"2h 20m",

      releaseDate:"31 July 2026",

      language:"English",

      director:"Destin Daniel Cretton",

      cast:"Tom Holland, Zendaya, Jacob Batalon",

      description:
      "Spider-Man: Brand New Day follows Peter Parker's new challenges while protecting the city.",

      image:spiderMan

    },





    {
      id:3,

      title:"GattaKusthi 2",

      genre:"Action, Comedy, Drama",

      rating:"8/10",

      duration:"2h 15m",

      releaseDate:"2026",

      language:"Tamil",

      director:"Chella Ayyavu",

      cast:"Vishnu Vishal, Aishwarya Lekshmi",

      description:
      "GattaKusthi 2 is a comedy action drama movie with wrestling and family emotions.",

      image:Gattakusthi2

    }



  ];







  return(



    <section className="movies-section">





      <h2>

        Latest Movies

      </h2>







      <div className="movie-container">





        {

          movies.map((movie)=>(



            <MovieCard

              key={movie.id}

              movie={movie}

            />



          ))

        }






      </div>





    </section>


  );


}



export default Movies;