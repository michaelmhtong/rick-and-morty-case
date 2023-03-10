import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_ALL_LOCATIONS } from "../../../../apollo/queries/locationQuery";
import ErrorCard from "../../../../components/ErrorCard";
import PageNavigate from "../../../../components/PageNavigate";
import GridCard from "../../../../components/GridCard";
import { Heading } from "@/pages/globalStyle";
import { CardWrapper } from "../../../../components/styles/GridCard.style";
import Loading from "../../../../components/Loading";

const Locations = () => {
  const router = useRouter();
  const { page } = router.query;
  const { loading, error, data } = useQuery(GET_ALL_LOCATIONS, {
    variables: { page: parseInt(page) },
    fetchPolicy: "cache-and-network",
  });

  if (error) {
    return <ErrorCard />;
  }

  return (
    <>
      <Heading>All Locations</Heading>

      {/* show loading cards if it is loading */}
      {loading && <Loading type="grid" />}

      {/* show grid cards when it get the data */}
      {!loading && (
        <>
          <CardWrapper>
            {data.locations.results.map((location, index) => (
              <GridCard type="location" data={location} key={index} />
            ))}
          </CardWrapper>

          {/* page navigation */}
          <PageNavigate
            nextPage={data.locations.info.next}
            prevPage={data.locations.info.prev}
            currentPage={page}
            pagesCount={data.locations.info.pages}
          />
        </>
      )}
    </>
  );
};
export default Locations;
