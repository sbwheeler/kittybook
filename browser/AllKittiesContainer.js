import { connect } from 'react-redux';
import AllKittiesComponent from './AllKittiesComponent';


function mapStateToProps(state) {
  return {
    allKitties: state.allKitties,
  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

const AllKittiesContainer = connect(mapStateToProps, mapDispatchToProps)(AllKittiesComponent);

export default AllKittiesContainer;
