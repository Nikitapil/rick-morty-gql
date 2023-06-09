import { useQuery } from '@apollo/client';
import { useMemo } from 'react';
import { gql } from '../../gql';

const GET_LOCATIONS = gql(/* GraphQL */ `
  query GetLocations($page: Int, $name: String) {
    locations(page: $page, filter: { name: $name }) {
      results {
        id
        name
      }
      info {
        pages
      }
    }
  }
`);

export const useLocations = (page: number, name: string) => {
  const { data, error, loading } = useQuery(GET_LOCATIONS, {
    variables: {
      page,
      name
    }
  });

  const locationsData = useMemo(() => {
    const locations = data?.locations?.results || [];
    const pages = data?.locations?.info?.pages || 0;
    return { locations, pages };
  }, [data?.locations?.info?.pages, data?.locations?.results]);

  return { ...locationsData, loading, error };
};
