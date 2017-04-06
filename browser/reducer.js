import { RECEIVE_ALL_KITTIES, RECEIVE_SINGLE_KITTY } from './action-creators';

const initialState = {
  allKitties: [],
  selectedKitty: {},
}

const kittyReducer = (state = initialState, action) => {
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
