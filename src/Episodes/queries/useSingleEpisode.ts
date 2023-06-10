import { useQuery } from '@apollo/client';
import { gql } from '../../gql';

const GET_SINGLE_EPISODE = gql(/* GraphQL */ `
  query GetEpisode($id: ID!) {
    episode(id: $id) {
      name
      air_date
      characters {
        id
        name
        image
      }
    }
  }
`);

export const useSingleEpisode = (id: number) => {
  const { data, loading, error } = useQuery(GET_SINGLE_EPISODE, {
    variables: { id }
  });

  return { episode: data?.episode, loading, error };
};
