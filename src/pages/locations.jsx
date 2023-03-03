import React from "react";
import { useQuery } from "@apollo/client";
import { LOCATIONS_QUERY } from "../../apollo/queries/locationsQuery";

const Locations = () => {
  const { loading, data } = useQuery(LOCATIONS_QUERY);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul>
        {data.locations.results.map((location) => (
          <li key={location.id}>{location.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default Locations;
