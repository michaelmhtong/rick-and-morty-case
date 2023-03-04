import { gql } from "@apollo/client";

export const GET_DIMENSIONS_CHARACTER_ID = gql`
  query ($dimension: String!) {
    locations(filter: { dimension: $dimension }) {
      info {
        pages
        next
        prev
      }
      results {
        id
        name
        type
        dimension
        residents {
          id
        }
      }
    }
  }
`;
