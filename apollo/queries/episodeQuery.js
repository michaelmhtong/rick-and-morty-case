import { gql } from "@apollo/client";

export const GET_ALL_EPISODES = gql`
  query {
    episodes {
      results {
        id
        name
        air_date
        episode
      }
    }
  }
`;

export const GET_EPISODE = gql`
  query ($id: ID!) {
    episode(id: $id) {
      episode
      name
      characters {
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