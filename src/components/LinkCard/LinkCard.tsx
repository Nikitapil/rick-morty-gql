import { Link } from 'react-router-dom';
import styles from './link-card.module.scss';

interface ILinkCardProps {
  path: string;
  image?: string;
  title: string;
}

export const LinkCard = ({ path, image, title }: ILinkCardProps) => {
  return (
    <Link
      className={styles.card}
      to={path}
    >
      {image && (
        <img
          src={image}
          alt="link preview"
        />
      )}
      <h3>{title}</h3>
    </Link>
  );
};
