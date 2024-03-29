import styles from './common-page.module.scss';
import { AppInput } from '../AppInput/AppInput';
import { Pagination } from '../Pagination/Pagination';
import { ILinkCardData } from '../../types/common';
import { Loader } from '../Loader/Loader';
import { DataList } from './DataList';

interface ICommonPageProps {
  pageName: string;
  search: string;
  currentPage: number;
  pagesCount: number;
  isLoading: boolean;
  data: ILinkCardData[];
  setPage: (page: number) => void;
  setSearch: (value: string) => void;
}

export const CommonPage = ({
  pageName,
  search,
  setSearch,
  data,
  currentPage,
  pagesCount,
  setPage,
  isLoading
}: ICommonPageProps) => {
  if (isLoading && !search) {
    return (
      <div className="full-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="container">
      <div className={styles.page}>
        <h2 className="page-title">{pageName}</h2>
        <section className={styles.search}>
          <AppInput
            value={search}
            setValue={setSearch}
            placeholder={`Search ${pageName}...`}
          />
        </section>
        <DataList
          data={data}
          pageName={pageName}
        />
        {data.length === 0 && <p>No data found</p>}
        <Pagination
          currentPage={currentPage}
          pagesCount={pagesCount}
          setPage={setPage}
        />
      </div>
    </div>
  );
};
