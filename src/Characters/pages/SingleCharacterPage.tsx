import { Link, useParams } from 'react-router-dom';
import { useSingleCharacter } from '../queries/useSingleCharacter';
import { Loader } from '../../components/Loader/Loader';
import styles from '../assets/styles/characters.module.scss';

export const SingleCharacterPage = () => {
  const { id } = useParams();
  const { character, loading, error } = useSingleCharacter(+(id || 0));

  if (loading) {
    return (
      <div className="full-center">
        <Loader />
      </div>
    );
  }

  if (!character || error) {
    return <div className="full-center">Character not found</div>;
  }

  return (
    <div className="container">
      <div className={styles['page-container']}>
        <h2 className="page-title">{character.name}</h2>
        <div className={styles['single-character']}>
          {character.image && (
            <img
              className={styles.image}
              src={character.image}
              alt="character avatar"
            />
          )}
          <dl className={styles['character-info']}>
            <div className={styles['character-info__item']}>
              <dt>Status:</dt>
              <dd>{character.status}</dd>
            </div>
            <div className={styles['character-info__item']}>
              <dt>Species:</dt>
              <dd>{character.species}</dd>
            </div>
            <div className={styles['character-info__item']}>
              <dt>Gender:</dt>
              <dd>{character.gender}</dd>
            </div>
            <Link
              to={`/locations/${character.origin?.id}`}
              className={`${styles['character-info__item']} ${styles.link}`}
            >
              <dt>Origin:</dt>
              <dd>{character.origin?.name}</dd>
            </Link>
            <div className={styles['character-info__item']}>
              <dt className="align-start">Episodes:</dt>
              <dd className={styles.episodes}>
                <ul className="episodes-list">
                  {character.episode.map((episode) => {
                    return (
                      <li key={episode?.id}>
                        <Link
                          className={styles.link}
                          to={`/episodes/${episode?.id}`}
                        >
                          {episode?.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};
