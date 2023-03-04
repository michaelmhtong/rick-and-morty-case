import Link from "next/link";
import React from "react";

const GridCard = ({ type, data }) => {
  console.log(data);
  return (
    <Link href={`../../${type}/id/${data.id}`}>
      <div key={data.id}>
        {type === "location" ? (
          <ul>
            <li>
              <h1>{data.name}</h1>
            </li>
            <li>Type: {data.type}</li>
            <li>Dimension: {data.dimension}</li>
            <li>Number of residents: {data.residents.length}</li>
          </ul>
        ) : (
          <ul>
            <li>{data.episode}</li>
            <li>{data.name}</li>
          </ul>
        )}
      </div>
    </Link>
  );
};

export default GridCard;
