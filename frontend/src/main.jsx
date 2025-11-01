import React from 'react';
import ReactDOM from 'react-dom/client';
import Greeting from './Greeting.jsx';

function App() {
  return (
    <div>
      <Greeting name="Cypress Tester" />
      <button onClick={() => alert('Button clicked!')}>Click me</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
