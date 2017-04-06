import { connect } from 'react-redux';
import AllKittiesComponent from './AllKittiesComponent';


// pull the allKitties property off of our redux state, and pass it down as a prop to our AllKittiesComponent
function mapStateToProps(state) {
  return {
    allKitties: state.allKitties,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // in this case we do not need anything here because we do not have any functions in our AllKittiesComponent that are dispatching to the redux store
  }
}

// since our mapDispatchToProps function is returning an empty object and is not actually being used here, we could also do
// const AllKittiesContainer = connect(mapStateToProps, null)(AllKittiesComponent);
// OR
// const AllKittiesContainer = connect(mapStateToProps)(AllKittiesComponent);
// but the code below also works fine


const AllKittiesContainer = connect(mapStateToProps, mapDispatchToProps)(AllKittiesComponent);

export default AllKittiesContainer;
