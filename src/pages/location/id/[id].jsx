import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_LOCATION } from "../../../../apollo/queries/locationQuery";
import Loading from "../../../../components/Loading";
import ErrorCard from "../../../../components/ErrorCard";
import CharacterCard from "../../../../components/CharacterCard";
import { Heading } from "@/pages/globalStyle";
import { CharacterWrapper } from "../../../../components/styles/CharacterCard.style";
import BackButton from "../../../../components/BackButton";

const Location = () => {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useQuery(GET_LOCATION, { variables: { id } });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorCard />;
  }

  return (
    <>
      <BackButton />
      <Heading>Location - {data.location.name}</Heading>
      <CharacterWrapper>
        {data.location.residents.map((character, index) => (
          <CharacterCard character={character} key={index} />
        ))}
      </CharacterWrapper>
    </>
  );
};

export default Location;
