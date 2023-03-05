import Link from "next/link";
import React from "react";
import { PageNavigateWrapper, PageNavigateButton } from "./styles/PageNavigate.style";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const PageNavigate = (props) => {
  const { nextPage, prevPage, currentPage, pagesCount, dimension } = props;

  // return different href depends on if it is dimension page
  const prevHerf = dimension ? `/dimension/${dimension}/${prevPage}` : `${prevPage}`;
  const nextHerf = dimension ? `/dimension/${dimension}/${nextPage}` : `${nextPage}`;

  return (
    <PageNavigateWrapper>
      {prevPage && (
        <PageNavigateButton href={prevHerf}>
          <IoIosArrowBack />
        </PageNavigateButton>
      )}
      <span>
        Page {currentPage} of {pagesCount}
      </span>

      {nextPage && (
        <PageNavigateButton href={nextHerf}>
          <IoIosArrowForward />
        </PageNavigateButton>
      )}
    </PageNavigateWrapper>
  );
};

export default PageNavigate;
