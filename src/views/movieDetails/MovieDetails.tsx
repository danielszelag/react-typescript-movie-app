import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './MovieDetails.module.scss';
import getMovieDetails from '../../helpers/getMovieDetails';
import { useDispatch, useSelector } from 'react-redux';
import IState from '../../types/state';
import { setMovieDetails } from '../../store/reducers/appSlice/appSlice';
import Navbar from '../../components/Navbar/Navbar';
import IMovieDetails from '../../types/movieDetails';

const MovieDetails = () => {
  //@ts-ignore
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movieDetails } = useSelector((state: IState) => state.app);

  useEffect(() => {
    (async () => {
      await getMovieDetails(id).then(({ data }) => {
        dispatch(setMovieDetails(data));
      });
    })();
  }, [id, setMovieDetails]);

  if (!id) {
    return null;
  }

  return (
    <div className={styles.root}>
      <Navbar />
      {movieDetails && (
        <div className={styles.content}>
          <div className={styles.main}>
            <div>Details</div>
            <div>
              <img src={movieDetails.Poster as string} />
            </div>
          </div>
          <div className={styles.details}>details</div>
          <div className={styles.awards}>awards</div>
          <div className={styles.ratings}>
            <div className={styles.rating}>rating</div>
            <div className={styles.rating}>rating</div>
            <div className={styles.rating}>rating</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
