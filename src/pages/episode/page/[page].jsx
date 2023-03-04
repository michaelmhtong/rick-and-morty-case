import { Heading } from "@/pages/globalStyle";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import React from "react";
import { GET_ALL_EPISODES } from "../../../../apollo/queries/episodeQuery";
import ErrorCard from "../../../../components/ErrorCard";
import GridCard from "../../../../components/GridCard";
import Loading from "../../../../components/Loading";
import PageNavigate from "../../../../components/PageNavigate";
import { CardWrapper } from "../../../../components/styles/GridCard.style";

const Episodes = () => {
  const router = useRouter();
  const { page } = router.query;
  const { loading, error, data } = useQuery(GET_ALL_EPISODES, {
    variables: { page: parseInt(page) },
    fetchPolicy: "cache-and-network",
  });

  if (error) {
    return <ErrorCard />;
  }

  return (
    <>
      <Heading>All Episodes</Heading>
      {loading && <Loading type="grid" />}
      {!loading && (
        <>
          <CardWrapper>
            {data.episodes.results.map((character) => (
              <GridCard type="episode" data={character} />
            ))}
          </CardWrapper>
          <PageNavigate
            nextPage={data.episodes.info.next}
            prevPage={data.episodes.info.prev}
            currentPage={page}
            pagesCount={data.episodes.info.pages}
          />
        </>
      )}
    </>
  );
};

export default Episodes;
