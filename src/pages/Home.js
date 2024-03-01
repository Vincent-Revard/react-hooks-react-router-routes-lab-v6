import { useEffect, useState } from "react"
import NavBar from "../components/NavBar"
import MovieCard from "../components/MovieCard"
import { v4 as uuidv4} from "uuid"

function Home() {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(0)

  useEffect(() =>{
    fetch(`http://localhost:4000/movies`)
    .then((resp) => resp.json())
      .then(data => setMovies(data))
      .catch(error => setError(error.message))
  
  }, [])

  const mappedMovies = movies.map((movie) => (<span key={uuidv4()}><MovieCard key={movie.id} {...movie} /></span>))

  if(!movies){
    return <h1>Loading...</h1>;
  };

  return (
    <>
      {error ? <p>{error}</p> : null}
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {mappedMovies}
      </main>
    </>
  );
};

export default Home;
