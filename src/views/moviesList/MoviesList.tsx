import MovieCard from '../../components/MovieCard/MovieCard';
import Navbar from '../../components/Navbar/Navbar';
import styles from './MoviesList.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import InfiniteScroll from 'react-infinite-scroll-component';
import getMovies from '../../helpers/getMovies';
import {
  setMovies,
  setPageNumber,
} from '../../store/reducers/appSlice/appSlice';

interface IMovie {
  Poster: String;
  Title: String;
  Type: String;
  Year: String;
  imdbID: String;
}

const MoviesList = () => {
  const { movies, pageNumber, searchQuery } = useSelector(
    (state: any) => state.app
  );
  const { isLoading } = useSelector((state: any) => state.common);
  const dispatch = useDispatch();

  // console.log(movies, 'movies');
  // console.log(isLoading, 'isLoading');

  if (!movies || movies.length === 0) {
    return null;
  }

  const fetchMoreMovies = () => {
    getMovies({
      query: searchQuery,
      pageNumber,
    }).then(({ data }) => {
      dispatch(setMovies([...movies, ...data.Search]));
      dispatch(setPageNumber(pageNumber + 1));
    });
  };

  return (
    <>
      <Navbar />

      <div className={styles.root}>
        <div className={styles.headingWrapper}>
          <h1 className={styles.heading}>Your Movies</h1>
          <p className={styles.subheading}>
            Below you can find the movies that came back from your search
          </p>
        </div>
        <InfiniteScroll
          className={styles.moviesWrapper}
          dataLength={movies.length}
          next={fetchMoreMovies}
          hasMore={true}
          loader={<Loader />}
          endMessage={<div>No more movies</div>}
        >
          {movies.map((movie: IMovie) => (
            <MovieCard
              key={movie.imdbID as string}
              imgSrc={movie.Poster}
              title={movie.Title}
              year={movie.Year}
              imdbID={movie.imdbID}
            />
          ))}
        </InfiniteScroll>

        {isLoading && (
          <div className={styles.loaderWrapper}>
            <Loader />
          </div>
        )}
      </div>
    </>
  );
};

export default MoviesList;
