import { useState } from 'react';
import { useLocations } from '../queries/useLocations';
import { CommonPage } from '../../components/CommonPage/CommonPage';
import { ILinkCardData } from '../../types/common';

export const LocationsPage = () => {
  const [page, setPage] = useState(1);
  const [name, setName] = useState('');
  const { locations, pages, loading } = useLocations(page, name);
  return (
    <CommonPage
      pageName="locations"
      search={name}
      currentPage={page}
      pagesCount={pages}
      isLoading={loading}
      data={locations as ILinkCardData[]}
      setPage={setPage}
      setSearch={setName}
    />
  );
};
