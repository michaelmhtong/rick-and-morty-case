import React from "react";
import { useQuery } from "@apollo/client";
import { LOCATION_ALL_QUERY } from "../../../apollo/queries/locationQuery";
import ErrorCard from "../../../components/ErrorCard";
import Link from "next/link";

const Locations = () => {
  const { loading, error, data } = useQuery(LOCATION_ALL_QUERY);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <ErrorCard />;
  }

  return (
    <div>
      <ul>
        {data.locations.results.map((location) => (
          <li key={location.id}>
            <Link href={`location/id/${location.id}`}>{location.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Locations;
