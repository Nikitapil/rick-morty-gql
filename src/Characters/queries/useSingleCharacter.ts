import { useQuery } from '@apollo/client';
import { gql } from '../../gql';

const GET_SINGLE_CHARACTER = gql(/* GraphQL */ `
  query GetCharacter($id: ID!) {
    character(id: $id) {
      name
      status
      species
      gender
      image
      origin {
        id
        name
      }
      episode {
        id
        name
      }
    }
  }
`);

export const useSingleCharacter = (id: number) => {
  const { data, error, loading } = useQuery(GET_SINGLE_CHARACTER, {
    variables: { id }
  });

  return { character: data?.character, error, loading };
};
