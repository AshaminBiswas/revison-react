import React, { useEffect } from 'react';

function Navbar({ color }) {
  // useEffect to run only once when the component is mounted
  useEffect(() => {
    alert('I am navbar and I am called only one time when the component is mounted');
  }, []);

  // Example of a useEffect that depends on a variable (count)
  // Ensure `count` is defined in the component
  const count = 0; // Define count or pass it as a prop if needed
  useEffect(() => {
    alert('I am run because count is updated');
  }, [count]);

  return (
    <div>
      This is nav bar and my color is {color}
    </div>
  );
}

export default Navbar;