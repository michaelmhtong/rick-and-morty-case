import Link from "next/link";
import styled from "styled-components";

export const PageNavigateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 6rem;
  @media screen and (max-width: 1100px) {
    padding-bottom: 4rem;
  }
  @media screen and (max-width: 568px) {
    padding-bottom: 2rem;
  }
`;

export const PageNavigateButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: oliveDrab;
`;
