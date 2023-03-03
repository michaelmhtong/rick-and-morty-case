import { gql } from "@apollo/client";

export const EPISODES_ALL_QUERY = gql`
  query {
    episodes {
      results {
        id
        name
        air_date
        episode
        characters {
          id
        }
      }
    }
  }
`;
