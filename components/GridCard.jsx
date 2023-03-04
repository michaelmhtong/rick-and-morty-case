import Link from "next/link";
import React from "react";
import { CardColumn, CardLink, CardName, CardText } from "./styles/GridCard.style";
import { FaUser } from "react-icons/fa";
import { IoPlanet, IoLocationSharp, IoTicket, IoCalendar } from "react-icons/io5";

const GridCard = ({ type, data }) => {
  const initial = {
    y: 40,
    opacity: 0,
  };
  const animate = {
    y: 0,
    opacity: 1,
  };

  console.log(data);
  return (
    <CardColumn initial={initial} animate={animate} transition={{ duration: 0.5 }} key={data.id}>
      <CardLink href={`../../${type}/id/${data.id}`}>
        {type === "location" ? (
          <>
            <CardName>{data.name}</CardName>
            <CardText>
              <IoPlanet /> {data.type}
            </CardText>
            <CardText>
              <IoLocationSharp /> {data.dimension}
            </CardText>
            <CardText>
              <FaUser /> {data.residents.length} residents
            </CardText>
          </>
        ) : (
          <>
            <CardName>{data.name}</CardName>
            <CardText>
              <IoTicket /> {data.episode}
            </CardText>
            <CardText>
              <IoCalendar /> {data.air_date}
            </CardText>
            <CardText>
              <FaUser /> {data.characters.length} characters
            </CardText>
          </>
        )}
      </CardLink>
    </CardColumn>
  );
};

export default GridCard;
