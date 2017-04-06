import axios from 'axios';

export const RECEIVE_ALL_KITTIES = 'RECEIVE_ALL_KITTIES';
export const RECEIVE_SINGLE_KITTY = 'RECEIVE_SINGLE_KITTY';

// receive all kitties from the server (this is called in our getAllKittiesFromServer thunk)
export function receiveAllKitties(allKitties) {
  return {
    type: RECEIVE_ALL_KITTIES,
    allKitties
  }
}

// receive one kitty from the server (this is called in our getSingleKittyFromServer thunk), NOTE: we do not end up using this as we didn't have time to build it out
export function receiveSingleKitty(selectedKitty) {
  return {
    type: RECEIVE_SINGLE_KITTY,
    selectedKitty
  }
}

export function getAllKittiesFromServer() {
  //our thunks return a function (rather than an object literal like a normal action creator), so our thunk middleware catches them on the way to the store, realizes that they're going to be asynchronous, and passes the store.dispatch method into this returned anonymous function, and then waits because it knows this is async
  return function(dispatch) {
    axios.get('/api/kitties')
    .then(foundKitties => foundKitties.data)
    .then(kittiesData => {
      // once we've got our data asynchronously from the back end, dispatch our regular old action creator to the store using the passed in dispatch argument
      dispatch(receiveAllKitties(kittiesData));
    })
    .catch(err => {
      console.error(err);
    });
  }
}

export function getSingleKittyFromServer(id) {
  //our thunks return a function (rather than an object literal like a normal action creator), so our thunk middleware catches them on the way to the store, realizes that they're going to be asynchronous, and passes the store.dispatch method into this returned anonymous function, and then waits because it knows this is async
  return function(dispatch) {
    axios.get(`/api/kitties/${id}`)
    .then(foundKitty => foundKitty.data)
    .then(kittyData => {
      // once we've got our data asynchronously from the back end, dispatch our regular old action creator to the store using the passed in dispatch argument
      dispatch(receiveSingleKitty(kittyData));
    })
    .catch(err => {
      console.error(err);
    });
  }
}
