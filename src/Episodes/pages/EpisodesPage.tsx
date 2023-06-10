import { useState } from 'react';
import { useEpisodes } from '../queries/useEpisodes';
import { CommonPage } from '../../components/CommonPage/CommonPage';
import { ILinkCardData } from '../../types/common';

export const EpisodesPage = () => {
  const [page, setPage] = useState(1);
  const [name, setName] = useState('');
  const { episodes, pages, loading } = useEpisodes(page, name);

  return (
    <CommonPage
      pageName="episodes"
      search={name}
      currentPage={page}
      pagesCount={pages}
      isLoading={loading}
      data={episodes as ILinkCardData[]}
      setPage={setPage}
      setSearch={setName}
    />
  );
};
