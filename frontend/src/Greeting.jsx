import React from 'react';

function Greeting({ name }) {
  return <h1>Hello, {name || 'Guest'}!</h1>;
}

export default Greeting;
