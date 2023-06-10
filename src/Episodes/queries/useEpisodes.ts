import { useQuery } from '@apollo/client';
import { useMemo } from 'react';
import { gql } from '../../gql';

const GET_EPISODES = gql(/* GraphQL */ `
  query GetEpisodes($page: Int, $name: String) {
    episodes(page: $page, filter: { name: $name }) {
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

export const useEpisodes = (page: number, name: string) => {
  const { data, loading, error } = useQuery(GET_EPISODES, {
    variables: {
      page,
      name
    }
  });

  const episodesData = useMemo(() => {
    const episodes = data?.episodes?.results || [];
    const pages = data?.episodes?.info?.pages || 0;
    return { episodes, pages };
  }, [data?.episodes?.info?.pages, data?.episodes?.results]);

  return { ...episodesData, loading, error };
};
