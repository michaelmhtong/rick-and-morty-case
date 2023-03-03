import { gql } from "@apollo/client";

export const LOCATION_ALL_QUERY = gql`
  query {
    locations {
      results {
        id
        name
      }
    }
  }
`;

export const LOCATION_QUERY = gql`
  query GetLocation($id: ID!) {
    location(id: $id) {
      name
      residents {
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
        image
        episode {
          id
        }
      }
    }
  }
`;
