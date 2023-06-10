import { ILinkCardData } from '../../types/common';
import { LinkCard } from '../LinkCard/LinkCard';
import styles from './common-page.module.scss';

interface IDataListProps {
  data: ILinkCardData[];
  pageName: string;
}

export const DataList = ({ data, pageName }: IDataListProps) => {
  return (
    <section className={styles['data-container']}>
      {data.map((item) => (
        <LinkCard
          key={item?.id}
          path={`/${pageName}/${item?.id}`}
          title={item?.name || ''}
          image={item?.image || ''}
        />
      ))}
    </section>
  );
};
