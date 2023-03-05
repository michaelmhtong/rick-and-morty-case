import { gql } from "@apollo/client";

export const GET_DIMENSIONS_CHARACTER_ID = gql`
  query ($dimension: String!, $page: Int) {
    locations(filter: { dimension: $dimension }, page: $page) {
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
