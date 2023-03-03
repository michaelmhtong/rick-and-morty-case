import { gql } from "@apollo/client";

export const LOCATIONS_QUERY = gql`
  query {
    locations {
      results {
        id
        name
      }
    }
  }
`;
