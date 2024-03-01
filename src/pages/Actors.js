import { useEffect, useState } from "react"
import NavBar from "../components/NavBar"
import ActorCard from "../components/ActorCard"
import { v4 as uuidv4} from "uuid"

function Actors() {
  const [actors, setActors] = useState([]);


  useEffect(() => {
    fetch('http://localhost:4000/actors')
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("The json server is not running");
        }
        return resp.json()
          .then(data =>setActors(data))
      .catch((error) => console.log(error.message));
      })
  }, []);

  const mappedActors = actors.map((director) => (
    <ActorCard
    key={uuidv4()}
    name={director.name}
    movies={director.movies}
    />
    ))

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {mappedActors}
      </main>
    </>
  );
};

export default Actors;
