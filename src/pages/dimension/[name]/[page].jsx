import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_DIMENSIONS_CHARACTER_ID } from "../../../../apollo/queries/dimensionQuery";
import Loading from "../../../../components/Loading";
import ErrorCard from "../../../../components/ErrorCard";
import PageNavigate from "../../../../components/PageNavigate";
import GridCard from "../../../../components/GridCard";
import { Heading } from "@/pages/globalStyle";
import { CardWrapper } from "../../../../components/styles/GridCard.style";

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
    <>
      <Heading>
        {name} ({locations.results.length} locations)
      </Heading>
      <CardWrapper>
        {locations.results.map((character, index) => (
          <GridCard type="location" data={character} key={index}/>
        ))}
      </CardWrapper>
      <PageNavigate
        nextPage={locations.info.next}
        prevPage={locations.info.prev}
        currentPage={page}
        pagesCount={locations.info.pages}
      />
    </>
  );
};

export default Dimension;
