import api from '../services/api';

const getMovieDetails = (movieId: string) => {
  return api.get('', {
    params: {
      i: movieId,
      type: 'movie',
    },
  });
};

export default getMovieDetails;
