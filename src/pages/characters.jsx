import React from "react";
import { useQuery } from "@apollo/client";
import { CHARACTERS_ALL_QUERY } from "../../apollo/queries/charactersQuery";
import Loading from "../../components/Loading";

const characters = () => {
  const { loading, error, data } = useQuery(CHARACTERS_ALL_QUERY);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <ErrorCard />;
  }

  return (
    <div>
      <h1>characters</h1>
      <ul>
        {data.characters.results.map((location) => (
          <li key={location.id}>{location.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default characters;
