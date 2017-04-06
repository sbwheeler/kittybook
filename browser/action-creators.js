import axios from 'axios';

export const RECEIVE_ALL_KITTIES = 'RECEIVE_ALL_KITTIES';
export const RECEIVE_SINGLE_KITTY = 'RECEIVE_SINGLE_KITTY';

export function receiveAllKitties(allKitties) {
  return {
    type: RECEIVE_ALL_KITTIES,
    allKitties
  }
}

export function receiveSingleKitty(selectedKitty) {
  return {
    type: RECEIVE_SINGLE_KITTY,
    selectedKitty
  }
}

export function getAllKittiesFromServer() {
  return function(dispatch) {
    axios.get('/api/kitties')
    .then(foundKitties => foundKitties.data)
    .then(kittiesData => {
      dispatch(receiveAllKitties(kittiesData));
    })
    .catch(err => {
      console.error(err);
    });
  }
}

export function getSingleKittyFromServer(id) {
  return function(dispatch) {
    axios.get(`/api/kitties/${id}`)
    .then(foundKitty => foundKitty.data)
    .then(kittyData => {
      dispatch(receiveSingleKitty(kittyData));
    })
    .catch(err => {
      console.error(err);
    });
  }
}
