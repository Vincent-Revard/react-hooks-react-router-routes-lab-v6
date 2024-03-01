import React from "react"
import { v4 as uuidv4} from "uuid"

const DirectorCard = ({ name, movies }) => {
  const mappedMovies = movies.map((movie) => <li key={uuidv4()}>{movie}</li>);

  return (
    <article>
      <h2>{name}</h2>
      <ul>{mappedMovies}</ul>
    </article>
  );
};

export default DirectorCard;