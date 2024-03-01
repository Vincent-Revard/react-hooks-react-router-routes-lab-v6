import { useEffect, useState } from "react"
import NavBar from "../components/NavBar"
import { useParams } from "react-router-dom"
import { v4 as uuidv4} from "uuid"


function Movie() {
  const [movieInfo, setMovieInfo] = useState({});
  const params = useParams();
  const movieId = params.id;

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
      .then((resp) => resp.json())
      .then((data) => setMovieInfo(data))
      .catch((error) => console.error(error));
  }, [movieId]);

  if (!movieInfo.title) {
    return <h1>Loading...</h1>;
  }

  const genres = movieInfo.genres.map((genre) => (
    <span key={uuidv4()}>{genre}</span>
    
  ));
  
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movieInfo.title}</h1>
        <p>Time: {movieInfo.time} Minutes</p>
        <span>Genres: {genres} </span>
      </main>
    </>
  );
}

export default Movie;
