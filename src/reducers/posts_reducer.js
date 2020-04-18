import { FETCH_POSTS } from '../actions';

export default function(state = [], action) {
  switch(action.type) {
    default:
      return state
    case FETCH_POSTS:
      return action.payload
  }
}
