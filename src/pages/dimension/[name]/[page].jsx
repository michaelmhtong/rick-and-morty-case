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
import BackButton from "../../../../components/BackButton";

const Dimension = () => {
  const router = useRouter();
  const { name, page } = router.query;
  const { loading, error, data } = useQuery(GET_DIMENSIONS_CHARACTER_ID, {
    variables: { dimension: name, page: parseInt(page) },
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
      <BackButton />
      <Heading>
        {name} ({locations.info.pages} pages of locations)
      </Heading>

      {/* location card */}
      <CardWrapper>
        {locations.results.map((character, index) => (
          <GridCard type="location" data={character} key={index} />
        ))}
      </CardWrapper>

      {/* page navigation for diemension */}
      <PageNavigate
        nextPage={locations.info.next}
        prevPage={locations.info.prev}
        currentPage={page}
        pagesCount={locations.info.pages}
        dimension={name}
      />
    </>
  );
};

export default Dimension;
