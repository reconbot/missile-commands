import { combineReducers } from 'redux'

function status(state = 'rest', action){
  switch(action.type){
    case 'armer:closed':
      return (state === 'rest') ? 'armed' : state;
    case 'armer:open':
      return 'rest';
    case 'launcher:press':
      return (state === 'armed') ? 'launched' : state;
    default:
      return state;
  }
}

// export default function missileLauncher(state, action){
//   return {
//     status: status(state, action)
//   }
// }

const missileLauncher = combineReducers({ status });

export default missileLauncher;
