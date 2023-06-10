import { useParams } from 'react-router-dom';
import { useSingleLocation } from '../queries/useSingleLocation';
import { Loader } from '../../components/Loader/Loader';
import { DataList } from '../../components/CommonPage/DataList';
import { ILinkCardData } from '../../types/common';
import styles from '../assets/styles/locations.module.scss';

export const SingleLocationPage = () => {
  const { id } = useParams();
  const { location, error, loading } = useSingleLocation(+(id || 0));

  if (loading) {
    return (
      <div className="full-center">
        <Loader />
      </div>
    );
  }

  if (!location || error) {
    return <div className="full-center">Character not found</div>;
  }

  return (
    <div className="container">
      <div className="page-container">
        <h2 className="page-title">{location.name}</h2>
        <section className={styles['location-info']}>
          <div className={styles['location-info__item']}>
            <h3>Type:</h3>
            <p>{location.type}</p>
          </div>
          <div className={styles['location-info__item']}>
            <h3>Dimension:</h3>
            <p>{location.dimension}</p>
          </div>
        </section>
        <DataList
          data={location.residents as ILinkCardData[]}
          pageName="characters"
        />
      </div>
    </div>
  );
};
