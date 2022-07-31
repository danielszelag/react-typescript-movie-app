import { useState } from 'react';
import styles from './Navbar.module.scss';
import { useDispatch } from 'react-redux';
import {
  setMovies,
  setSearchQuery,
  setPageNumber,
} from '../../store/reducers/appSlice/appSlice';
import getMovies from '../../helpers/getMovies';
import { useRouteMatch, Link } from 'react-router-dom';

const Navbar = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  let match = useRouteMatch(`/movie/:id/details/:slug`);

  const onSubmitHandler = async (e: any) => {
    e.preventDefault();
    dispatch(setMovies([]));
    dispatch(setPageNumber(1));
    dispatch(setSearchQuery(value));
    console.log(value);
    try {
      const result = await getMovies({ query: value, pageNumber: 1 });
      console.log(result, 'result');
      // @ts-ignore
      console.log(result.data, 'result.data');
      // @ts-ignore
      console.log(result.data.Search, 'result.data.Search');
      // @ts-ignore
      dispatch(setMovies(result.data.Search));
    } catch (error) {
      console.log(error);
    }
    setValue('');
  };

  const onChangeHandler = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.root}>
      <div className={styles.logo}>MoviesApp</div>
      {!match ? (
        <form className={styles.form} onSubmit={onSubmitHandler}>
          <input
            value={value}
            onChange={onChangeHandler}
            className={styles.input}
            placeholder="Search movies"
          />
        </form>
      ) : (
        <Link to="/" className={styles.back}>
          {`< Go Back`}
        </Link>
      )}
      <div className={styles.invisible}></div>
    </div>
  );
};

export default Navbar;
