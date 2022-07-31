import mockAxios from 'axios';
import getMovies from './getMovies';

const data = {
  Search: [
    {
      Title: 'Crazy, Studi, Love.',
      Year: '2011',
      imdbID: 'tt1570728',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTg2MjkwMTM0NF5BMl5BanBnXkFtZTcwMzc4NDg2NQ@@._V1_SX300.jpg',
    },
    {
      Title: 'Love Actually',
      Year: '2003',
      imdbID: 'tt0314331',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_SX300.jpg',
    },
  ],
};

test('Check test is working', () => {
  expect(true).toBe(true);
});

test('Fetch movies data from OMDB api', async () => {
  //@ts-ignore
  mockAxios.get.mockImplementationOnce(() => Promise.resolve(data));
  await expect(getMovies({ query: 'love', pageNumber: 1 })).resolves.toEqual(
    data
  );
});
