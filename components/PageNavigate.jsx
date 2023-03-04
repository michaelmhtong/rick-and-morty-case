import Link from "next/link";
import React from "react";
import { PageNavigateWrapper, PageNavigateButton } from "./styles/PageNavigate.style";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const PageNavigate = (props) => {
  const { nextPage, prevPage, currentPage, pagesCount } = props;

  return (
    <PageNavigateWrapper>
      {prevPage && (
        <PageNavigateButton href={`${prevPage}`}>
          <IoIosArrowBack />
        </PageNavigateButton>
      )}
      <span>
        Page {currentPage} of {pagesCount}
      </span>
      {nextPage && (
        <PageNavigateButton href={`${nextPage}`}>
          <IoIosArrowForward />
        </PageNavigateButton>
      )}
    </PageNavigateWrapper>
  );
};

export default PageNavigate;
