import React from "react";
import Image from "next/image";
import { CardColumn, CardName, CardText } from "./styles/GridCard.style";
import {
  CharacterImageWrapper,
  CharacterBadge,
  CharacterBadgeWrapper,
  CharacterTextLink,
} from "./styles/CharacterCard.style";
import { IoLocationSharp, IoTicket, IoEarth } from "react-icons/io5";

const CharacterCard = ({ character }) => {
  const initial = {
    y: 40,
    opacity: 0,
  };
  const animate = {
    y: 0,
    opacity: 1,
  };

  const shownEpisode = character.episode.length;
  const lastEpisode = character.episode[shownEpisode - 1].episode;

  return (
    <CardColumn
      initial={initial}
      animate={animate}
      transition={{ duration: 0.5 }}
      key={character.id}
    >
      <CharacterImageWrapper>
        <Image src={character.image} alt={`Image of ${character.name}`} width={100} height={100} />
      </CharacterImageWrapper>
      <CardName>{character.name}</CardName>
      <CharacterBadgeWrapper>
        <CharacterBadge backgroundColor="rgba(255, 0, 0, 0.3)">{character.status}</CharacterBadge>
        <CharacterBadge backgroundColor="rgba(0, 255, 0, 0.3)">{character.species}</CharacterBadge>
        <CharacterBadge backgroundColor="rgba(0, 0, 255, 0.3)">{character.gender}</CharacterBadge>
      </CharacterBadgeWrapper>
      <CharacterTextLink href={`../../location/id/${character.location.id}`}>
        <IoEarth /> {character.location.name}
      </CharacterTextLink>
      <CharacterTextLink href={`../../dimension/${character.location.dimension}/1`}>
        <IoLocationSharp /> {character.location.dimension}
      </CharacterTextLink>
      <CharacterTextLink href={`../../episode/id/${shownEpisode}`}>
        <IoTicket /> Last seen in {lastEpisode}
      </CharacterTextLink>
      <CardText>Shown in {shownEpisode} episode</CardText>
    </CardColumn>
  );
};

export default CharacterCard;
