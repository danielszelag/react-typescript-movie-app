import { AxiosResponse } from 'axios';
import api from '../services/api';

interface IGetMoviesParams {
  query: String;
  pageNumber: Number;
}

const getMovies = ({
  query,
  pageNumber,
}: IGetMoviesParams): Promise<AxiosResponse<any, any>> => {
  return api.get('', {
    params: {
      // @ts-ignore
      s: query,
      type: 'movie',
      page: pageNumber,
    },
  });
};

export default getMovies;
