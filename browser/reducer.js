import { RECEIVE_ALL_KITTIES, RECEIVE_SINGLE_KITTY } from './action-creators';

// NOTE: we do not end up using selectedKitty because we did not have time to build out that component/container
const initialState = {
  allKitties: [],
  selectedKitty: {},
}

// default to the initial state if we don't get the state argument
const kittyReducer = (state = initialState, action) => {
  // Object.assign so that we are following redux's immutability
  const newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_KITTIES:
      newState.allKitties = action.allKitties;
      break;
    case RECEIVE_SINGLE_KITTY:
      newState.selectedKitty = action.selectedKitty;
      break;
    default:
      return state;
  }

  return newState;
}


export default kittyReducer;
