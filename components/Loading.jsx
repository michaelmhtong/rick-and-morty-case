import React from "react";
import { CharacterWrapper } from "./styles/CharacterCard.style";
import { CardWrapper } from "./styles/GridCard.style";
import { LoadingCharacterCard, LoadingGridCard } from "./styles/LoadingCard.style";

const Loading = ({ type }) => {
  const skeletons = Array.from({ length: 20 });
  return type == "character" ? (
    <CharacterWrapper>
      {skeletons.map(() => (
        <LoadingCharacterCard />
      ))}
    </CharacterWrapper>
  ) : (
    <CardWrapper>
      {skeletons.map(() => (
        <LoadingGridCard />
      ))}
    </CardWrapper>
  );
};

export default Loading;
