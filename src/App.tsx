import { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MoviesList from './views/moviesList/MoviesList';
import MovieDetails from './views/movieDetails/MovieDetails';
import getMovies from './helpers/getMovies';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from './store/reducers/appSlice/appSlice';
import { setIsLoading } from './store/reducers/commonSlice/commonSlice';
import IState from './types/state';
import { setPageNumber } from './store/reducers/appSlice/appSlice';

function App() {
  const dispatch = useDispatch();
  const { movies, pageNumber, searchQuery } = useSelector(
    (state: IState) => state.app
  );

  useEffect(() => {
    if (!movies || movies.length === 0) {
      (async () => {
        dispatch(setPageNumber(1));
        await getMovies({ query: searchQuery, pageNumber })
          .then(({ data }) => {
            dispatch(setMovies(data.Search));
            dispatch(setPageNumber((pageNumber as number) + 1));
          })
          .finally(() => {
            dispatch(setIsLoading(false));
          });
      })();
    }
  }, [movies, pageNumber, setMovies, setPageNumber, setIsLoading, searchQuery]);

  if (!movies || movies.length === 0) {
    setIsLoading(true);
    return null;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <MoviesList />
          </Route>
          <Route exact path="/movie/:id/details/:slug">
            <MovieDetails />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
