import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_EPISODE } from "../../../../apollo/queries/episodeQuery";
import Loading from "../../../../components/Loading";
import ErrorCard from "../../../../components/ErrorCard";
import CharacterCard from "../../../../components/CharacterCard";

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
    <div>
      <h1>
        {episode.episode} {episode.name}
      </h1>
      {episode.characters.map((character) => (
        <CharacterCard character={character} />
      ))}
    </div>
  );
};

export default Episode;
