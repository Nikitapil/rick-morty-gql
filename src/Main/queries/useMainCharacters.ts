import { useQuery } from '@apollo/client';
import { useMemo } from 'react';
import { gql } from '../../gql';

const GET_MAIN_CHARACTERS = gql(/* GraphQL */ `
  query getMainCharacters {
    charactersByIds(ids: [1, 2, 3, 4, 5]) {
      id
      name
      image
    }
  }
`);

export const useMainCharacters = () => {
  const { data, error, loading } = useQuery(GET_MAIN_CHARACTERS);

  const characters = useMemo(() => {
    return data?.charactersByIds || null;
  }, [data]);

  return { characters, error, loading };
};
