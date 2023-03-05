import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-top: 2rem;
  padding-bottom: 6rem;
  grid-gap: 2rem;
  grid-auto-rows: 1fr;
  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 3rem;
    padding-bottom: 4rem;
  }
  @media screen and (max-width: 568px) {
    grid-template-columns: repeat(1, 1fr);
    padding-bottom: 2rem;
  }
`;

export const CardColumn = styled(motion.div)`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background: #f9f8f5;
  padding: 20px;
  box-shadow: 0 0 10px 1px lightgray;
  border-radius: 10px;
`;

export const CardLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

export const CardName = styled.h3`
  color: oliveDrab;
  text-align: center;
  font-weight: 600;
  padding-bottom: 5px;
  @media screen and (max-width: 768px) {
    font-weight: 400;
    font-size: 1rem;
  }
`;

export const CardText = styled.p`
  margin: 1rem 0 auto;
  text-align: center;
  font-size: 0.8rem;
  line-height: 1;
  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
`;
