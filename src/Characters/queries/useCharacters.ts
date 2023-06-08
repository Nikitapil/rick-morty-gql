import { useQuery } from '@apollo/client';
import { useMemo } from 'react';
import { gql } from '../../gql';

const GET_CHARACTERS = gql(/* GraphQL */ `
  query GetCharacters($page: Int, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      results {
        id
        name
        image
      }
      info {
        pages
      }
    }
  }
`);

export const useCharacters = (page: number, name: string) => {
  const { data, error, loading } = useQuery(GET_CHARACTERS, {
    variables: {
      page,
      name
    }
  });

  const charactersData = useMemo(() => {
    const characters = data?.characters?.results || [];
    const pages = data?.characters?.info?.pages || 0;
    return { characters, pages };
  }, [data]);

  return { ...charactersData, error, loading };
};
