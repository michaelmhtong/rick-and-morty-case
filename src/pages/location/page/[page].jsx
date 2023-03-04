import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { GET_ALL_LOCATIONS } from "../../../../apollo/queries/locationQuery";
import ErrorCard from "../../../../components/ErrorCard";
import PageNavigate from "../../../../components/PageNavigate";
import GridCard from "../../../../components/GridCard";

const Locations = () => {
  const router = useRouter();
  const { page } = router.query;
  const { loading, error, data } = useQuery(GET_ALL_LOCATIONS, {
    variables: { page: parseInt(page) },
    fetchPolicy: "cache-and-network",
  });

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <ErrorCard />;
  }

  const { locations } = data;

  return (
    <div>
      <ul>
        {locations.results.map((location) => (
          <GridCard type="location" data={location} />
        ))}
      </ul>
      <PageNavigate
        nextPage={locations.info.next}
        prevPage={locations.info.prev}
        currentPage={page}
        pagesCount={locations.info.pages}
      />
    </div>
  );
};
export default Locations;
