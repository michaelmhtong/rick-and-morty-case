import { gql } from "@apollo/client";

export const GET_ALL_CHARACTERS = gql`
  query ($page: Int) {
    characters(page: $page) {
      info {
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        type
        gender
        origin {
          id
          name
        }
        location {
          id
          name
          dimension
        }
        image
        episode {
          id
          episode
        }
      }
    }
  }
`;
