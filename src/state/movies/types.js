import { GET_MOVIES } from './constants';

export const getMovies = (page) => {
  return {
    type: GET_MOVIES, page
  }
}