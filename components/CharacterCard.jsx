import React from "react";
import Image from "next/image";
import Link from "next/link";

const CharacterCard = ({ character }) => {
  console.log(character)
  return (
    <div key={character.id}>
      <h2>{character.name}</h2>
      <ul>
        <li>
          <img src={character.image} alt={`Image of ${character.name}`} width={300} height={300} />
        </li>
        <li>{character.status}</li>
        <li>{character.species}</li>
        <li>{character.gender}</li>
        <li>
          <Link href={`../../dimension/${character.location.dimension}/1`}>
            Dimension: {character.location.dimension}
          </Link>
        </li>
        <li>
          <Link href={`../../location/id/${character.location.id}`}>
            {character.location.name}{" "}
          </Link>
        </li>
        <ul>
          <li>Episodes</li>

          {character.episode.map((episode) => (
            <Link href={`../../episode/id/${episode.id}`}>
              <li key={episode.id}>{episode.episode}</li>
            </Link>
          ))}
        </ul>
      </ul>
    </div>
  );
};

export default CharacterCard;
