import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { LOCATION_QUERY } from "../../../../apollo/queries/locationQuery";
import Loading from "../../../../components/Loading";
import ErrorCard from "../../../../components/ErrorCard";
import CharacterCard from "../../../../components/CharacterCard";

const Location = () => {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useQuery(LOCATION_QUERY, { variables: { id } });

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <ErrorCard />;
  }

  const { location } = data;

  return (
    <div>
      <h1>{location.name}</h1>
      {location.residents.map((character) => (
        <CharacterCard character={character} />
      ))}
    </div>
  );
};

export default Location;
