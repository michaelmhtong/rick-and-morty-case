import Link from "next/link";
import styled from "styled-components";

export const PageNavigateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 100px;
  @media screen and (max-width: 1100px) {
    padding-top: 40px;
    padding-bottom: 50px;
  }
  @media screen and (max-width: 568px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

export const PageNavigateButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: oliveDrab;
`;
