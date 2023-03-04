import { useQuery } from "@apollo/client";
import React from "react";
import { GET_ALL_EPISODES } from "../../../../apollo/queries/episodeQuery";
import ErrorCard from "../../../../components/ErrorCard";
import GridCard from "../../../../components/GridCard";
import Loading from "../../../../components/Loading";

const Episodes = () => {
  const { loading, error, data } = useQuery(GET_ALL_EPISODES);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <ErrorCard />;
  }

  const { episodes } = data;

  return (
    <div>
      episodes
      {episodes.results.map((character) => (
        <GridCard type="episode" data={character} />
      ))}
    </div>
  );
};

export default Episodes;
