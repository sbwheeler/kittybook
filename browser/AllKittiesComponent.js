import React from 'react';

// our components are generally just dumb (presentational) functions that take in props and spit our HTML dependent on those props. they have no knowledge of redux, that is the job of the container, which is a wrapper around them

// note this object destructuring in our arguments. this is shorthand and is functioning the same as
// const AllKittiesComponent = (props) => {
//   const allKitties = props.allKitties;

const AllKittiesComponent = ({ allKitties }) => {
  console.log(allKitties);
  return (
    <div>
      <h1>WELCOME TO KITTYBOOK (NOT PUPPYBOOK) </h1>
    </div>
  );
}

export default AllKittiesComponent;
