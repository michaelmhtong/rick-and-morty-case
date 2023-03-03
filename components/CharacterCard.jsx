import React from "react";

const CharacterCard = ({ character }) => {
  return (
    <div key={character.id}>
      <h2>{character.name}</h2>
      <ul>
        <li>{character.name}</li>
        <li>{character.status}</li>
        <li>{character.species}</li>
        <li>{character.gender}</li>
        <li>{character.origin.name}</li>
        <li>{character.image}</li>
        <ul>
          {character.episode.map((episode) => (
            <li>{episode.id}</li>
          ))}
        </ul>
      </ul>
    </div>
  );
};

export default CharacterCard;
