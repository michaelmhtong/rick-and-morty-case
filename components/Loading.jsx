import React from "react";
import { CharacterWrapper } from "./styles/CharacterCard.style";
import { CardWrapper } from "./styles/GridCard.style";
import { LoadingCharacterCard, LoadingGridCard } from "./styles/LoadingCard.style";

const Loading = ({ type }) => {
  const skeletons = Array.from({ length: 20 });
  return type == "character" ? (
    <CharacterWrapper>
      {skeletons.map((item, index) => (
        <LoadingCharacterCard key={index} />
      ))}
    </CharacterWrapper>
  ) : (
    <CardWrapper>
      {skeletons.map((item, index) => (
        <LoadingGridCard key={index} />
      ))}
    </CardWrapper>
  );
};

export default Loading;
