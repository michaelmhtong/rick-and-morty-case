import { gql } from "@apollo/client";

export const CHARACTERS_ALL_QUERY = gql`
  query {
    characters {
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
        }
        image
        episode {
          id
        }
      }
    }
  }
`;
