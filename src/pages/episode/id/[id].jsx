import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_EPISODE } from "../../../../apollo/queries/episodeQuery";
import Loading from "../../../../components/Loading";
import ErrorCard from "../../../../components/ErrorCard";
import CharacterCard from "../../../../components/CharacterCard";
import { Heading } from "@/pages/globalStyle";
import { CharacterWrapper } from "../../../../components/styles/CharacterCard.style";
import BackButton from "../../../../components/BackButton";

const Episode = () => {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useQuery(GET_EPISODE, { variables: { id } });

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <ErrorCard />;
  }

  const { episode } = data;

  return (
    <>
      <BackButton />
      <Heading>
        {episode.episode} {episode.name}
      </Heading>
      <CharacterWrapper>
        {episode.characters.map((character) => (
          <CharacterCard character={character} />
        ))}
      </CharacterWrapper>
    </>
  );
};

export default Episode;
