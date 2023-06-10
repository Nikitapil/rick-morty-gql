import { useQuery } from '@apollo/client';
import { gql } from '../../gql';

const GET_SINGLE_LOCATION = gql(/* GraphQL */ `
  query GetLocation($id: ID!) {
    location(id: $id) {
      name
      type
      dimension
      residents {
        id
        name
        image
      }
    }
  }
`);

export const useSingleLocation = (id: number) => {
  const { data, loading, error } = useQuery(GET_SINGLE_LOCATION, {
    variables: { id }
  });

  return { location: data?.location, loading, error };
};
