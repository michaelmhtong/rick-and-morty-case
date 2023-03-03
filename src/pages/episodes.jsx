import { useQuery } from "@apollo/client";
import React from "react";
import { EPISODES_ALL_QUERY } from "../../apollo/queries/episodesQuery";
import ErrorCard from "../../components/ErrorCard";
import Loading from "../../components/Loading";

const episodes = () => {
  const { loading, error, data } = useQuery(EPISODES_ALL_QUERY);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <ErrorCard />;
  }

  return (
    <div>
      episodes
      <ul>
        {data.episodes.results.map((location) => (
          <li key={location.id}>{location.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default episodes;
