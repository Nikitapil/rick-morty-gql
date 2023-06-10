import { useParams } from 'react-router-dom';
import { useSingleEpisode } from '../queries/useSingleEpisode';
import { Loader } from '../../components/Loader/Loader';
import { DataList } from '../../components/CommonPage/DataList';
import { ILinkCardData } from '../../types/common';

export const SingleEpisodePage = () => {
  const { id } = useParams();
  const { episode, loading, error } = useSingleEpisode(+(id || 0));

  if (loading) {
    return (
      <div className="full-center">
        <Loader />
      </div>
    );
  }

  if (!episode || error) {
    return <div className="full-center">Episode not found</div>;
  }

  return (
    <div className="container">
      <div className="page-container">
        <h2 className="page-title mb-10">{episode.name}</h2>
        <p className="mb-10">{episode.air_date}</p>
        <h3 className="align-start mb-10">Characters: </h3>
        <DataList
          data={episode.characters as ILinkCardData[]}
          pageName="characters"
        />
      </div>
    </div>
  );
};
