import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MovieCard.module.scss';
import getSlugFromTitle from '../../helpers/getSlugFromTitle';

interface IProps {
  imgSrc: String;
  title: String;
  year: String;
  imdbID: String;
}

const MovieCard: React.FunctionComponent<IProps> = ({
  imgSrc,
  title,
  year,
  imdbID,
}) => {
  return (
    <Link
      className={styles.root}
      to={`/movie/${imdbID}/details/${getSlugFromTitle(title as string)}`}
    >
      <img src={imgSrc as string} className={styles.image} />
      <div className={styles.details}>
        <div className={styles.year}>{year}</div>
        <div className={styles.stars}>* * * * * </div>
        <div className={styles.title}>{title}</div>
      </div>
    </Link>
  );
};

export default MovieCard;
