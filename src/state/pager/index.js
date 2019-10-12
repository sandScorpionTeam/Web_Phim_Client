import { SET_PAGE} from './constants';

export default function pager(state = 1, action){
  switch (action.type) {
    case SET_PAGE:
      return {...state, page: action.page}    
    default:
      return state
  }
}