import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_ALL_CHARACTERS } from "../../../../apollo/queries/characterQuery";
import Loading from "../../../../components/Loading";
import CharacterCard from "../../../../components/CharacterCard";
import ErrorCard from "../../../../components/ErrorCard";
import PageNavigate from "../../../../components/PageNavigate";

const Character = () => {
  const router = useRouter();
  const { page } = router.query;
  const { loading, error, data } = useQuery(GET_ALL_CHARACTERS, {
    variables: { page: parseInt(page) },
    fetchPolicy: "cache-and-network",
  });
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <ErrorCard />;
  }

  const { characters } = data;

  return (
    <div>
      <h1>All Characters</h1>
      {characters.results.map((character) => (
        <CharacterCard character={character} />
      ))}
      <PageNavigate
        nextPage={characters.info.next}
        prevPage={characters.info.prev}
        currentPage={page}
        pagesCount={characters.info.pages}
      />
    </div>
  );
};

export default Character;
