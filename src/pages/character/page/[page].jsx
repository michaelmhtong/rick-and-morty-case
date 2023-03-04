import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_ALL_CHARACTERS } from "../../../../apollo/queries/characterQuery";
import Loading from "../../../../components/Loading";
import CharacterCard from "../../../../components/CharacterCard";
import ErrorCard from "../../../../components/ErrorCard";
import PageNavigate from "../../../../components/PageNavigate";
import { Heading } from "@/pages/globalStyle";
import { CharacterWrapper } from "../../../../components/styles/CharacterCard.style";

const Character = () => {
  const router = useRouter();
  const { page } = router.query;
  const { loading, error, data } = useQuery(GET_ALL_CHARACTERS, {
    variables: { page: parseInt(page) },
    fetchPolicy: "cache-and-network",
  });

  if (error) {
    return <ErrorCard />;
  }

  return (
    <>
      <Heading>All Characters</Heading>
      {loading && <Loading type="character" />}
      {!loading && (
        <>
          <CharacterWrapper>
            {data.characters.results.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </CharacterWrapper>
          <PageNavigate
            nextPage={data.characters.info.next}
            prevPage={data.characters.info.prev}
            currentPage={page}
            pagesCount={data.characters.info.pages}
          />
        </>
      )}
    </>
  );
};

export default Character;
