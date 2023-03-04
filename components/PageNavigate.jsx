import Link from "next/link";
import React from "react";

const PageNavigate = (props) => {
  const { nextPage, prevPage, currentPage, pagesCount } = props;

  return (
    <div>
      {prevPage && <Link href={`${prevPage}`}>-</Link>}
      <span>
        Page {currentPage} of {pagesCount}
      </span>
      {nextPage && <Link href={`${nextPage}`}>+</Link>}
    </div>
  );
};

export default PageNavigate;
