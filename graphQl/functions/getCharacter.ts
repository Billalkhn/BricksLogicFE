import gql from 'graphql-tag';

const GETCHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        type
        image
        gender
        location {
          id
          name
        }
        episode {
          id
          name
        }
      }
    }
  }
`;
export default GETCHARACTERS;
