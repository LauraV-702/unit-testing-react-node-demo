import React from 'react';
import ReactDOM from 'react-dom/client';
import Greeting from './Greeting.jsx';

function App() {
  return <Greeting name="Cypress Tester" />;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
