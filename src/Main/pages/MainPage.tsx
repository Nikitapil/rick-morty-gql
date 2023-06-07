import styles from '../assets/styles/main.module.scss';
import { useMainCharacters } from '../queries/useMainCharacters';
import { LinkCard } from '../../components/LinkCard/LinkCard';

export const MainPage = () => {
  const { characters } = useMainCharacters();

  return (
    <div className="container">
      <div className={styles.page}>
        <h2 className={styles.title}>Rick And Morty</h2>
        <p className={styles.description}>
          Wiki about Rick and Morty. There you can find information about characters, locations or
          episodes in Rick and Morty universe
        </p>
        <div className={styles.characters}>
          {characters?.map((character) => (
            <LinkCard
              path={`/cahracters/${character!.id}`}
              title={character?.name || ''}
              image={character?.image || ''}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
