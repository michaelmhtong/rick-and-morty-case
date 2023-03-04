import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_DIMENSIONS_CHARACTER_ID } from "../../../../apollo/queries/dimensionQuery";
import Loading from "../../../../components/Loading";
import CharacterCard from "../../../../components/CharacterCard";
import ErrorCard from "../../../../components/ErrorCard";
import PageNavigate from "../../../../components/PageNavigate";
import { GET_BY_CHARACTERS_ID } from "../../../../apollo/queries/characterQuery";
import GridCard from "../../../../components/GridCard";

const Dimension = () => {
  const router = useRouter();
  const { name, page } = router.query;
  const { loading, error, data } = useQuery(GET_DIMENSIONS_CHARACTER_ID, {
    variables: { dimension: name },
    fetchPolicy: "cache-and-network",
  });

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <ErrorCard />;
  }

  const { locations } = data;
  return (
    <div>
      <h1>{name}</h1>
      {locations.results.map((character) => (
        <GridCard type="location" data={character} />
      ))}
      <PageNavigate
        nextPage={locations.info.next}
        prevPage={locations.info.prev}
        currentPage={page}
        pagesCount={locations.info.pages}
      />
    </div>
  );
};

export default Dimension;
