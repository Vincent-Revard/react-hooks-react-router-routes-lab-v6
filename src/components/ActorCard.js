import React from "react"
import { v4 as uuidv4} from "uuid"

const ActorCard = ({ name, movies }) => {
  const mappedActorMovies = movies.map((movie) => (<li key={uuidv4()}>{movie}</li>))

  return (
    <article>
      <h1>Actor Page</h1>
      <h2>{name}</h2>
      <ul>{mappedActorMovies}</ul>
    </article>
  );
};

export default ActorCard;