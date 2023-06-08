import { useState } from 'react';
import { useCharacters } from '../queries/useCharacters';
import { CommonPage } from '../../components/CommonPage/CommonPage';
import { ILinkCardData } from '../../types/common';

export const CharactersPage = () => {
  const [page, setPage] = useState(1);
  const [name, setName] = useState('');

  const { characters, pages, loading } = useCharacters(page, name);

  return (
    <CommonPage
      pageName="characters"
      search={name}
      currentPage={page}
      pagesCount={pages}
      isLoading={loading}
      data={characters as ILinkCardData[]}
      setSearch={setName}
      setPage={setPage}
    />
  );
};
