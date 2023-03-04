import { gql } from "@apollo/client";

export const GET_ALL_LOCATIONS = gql`
  query ($page: Int) {
    locations(page: $page) {
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

export const GET_LOCATION = gql`
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
