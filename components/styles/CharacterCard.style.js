import styled from "styled-components";
import Link from "next/link";

export const CharacterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 2rem;
  grid-gap: 3rem;
  grid-auto-rows: 1fr;
  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 3rem;
  }
  @media screen and (max-width: 568px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CharacterImageWrapper = styled.div`
  margin-bottom: 1rem;
  padding: 3px;
`;

export const CharacterBadgeWrapper = styled.div`
  display: flex;
  padding-bottom: 12px;
  gap: 10px;
`;

export const CharacterBadge = styled.span`
  background-color: ${(props) => props.backgroundColor};
  color: white;
  padding: 4px 8px;
  text-align: center;
  border-radius: 5px;
  font-size: 0.6rem;
`;

export const CharacterTextLink = styled(Link)`
  color: black;
  text-decoration: none;
  margin: 0.2rem 0 auto;
  text-align: center;
  font-size: 0.8rem;
  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
  &:hover {
    text-decoration: underline;
  }
`;
