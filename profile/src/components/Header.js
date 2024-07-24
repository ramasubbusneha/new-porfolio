import React, { useState } from 'react';

const Header = () => {
  const [state, setState] = useState();

  const handleClick = () => {
    // Example action on button click
    setState('Button clicked');
  };

  return (
    <div>
      <button onClick={handleClick}>Click</button>
      <p>{state}</p> {/* Display the state value */}
    </div>
  );
};

export default Header;
