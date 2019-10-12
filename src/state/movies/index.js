import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GET_MOVIES} from './constants';

export default function movies(state = [], action){
  switch (action.type) {    
    case GET_MOVIES:
      return {...state, movies: Array(20).fill().map(() => 
        {        
          return {
            thumbnail: 'http://lorempixel.com/200/300/',
            title1: 'Đốt',
            title2: 'Burn',
            duration: '120 phút'
          }
        })}
    default:
      return state
  }
}

const moviesSelector = (state) => state.movies.movies;
const getMovies = () => {
  return ({type : GET_MOVIES})
}

export const useMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector(moviesSelector);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch])

  return movies;
}