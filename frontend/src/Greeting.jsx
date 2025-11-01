import React, { useState } from 'react';

function Greeting({ name = 'Guest' }) {
  const quotes = [
    `Hello, ${name}! Have you tried turning it off and on again? 💻`,
    `Hey ${name}, you look debugging-licious today 🐞`,
    `Sup ${name}? Remember to hydrate! 💧`,
    `Yo ${name}, may your tests be green and your coffee strong ☕`,
    `Hola ${name}! 404 problems but a bug ain't one 🚀`
  ];

  const [index, setIndex] = useState(0);

  const nextQuote = () => setIndex((index + 1) % quotes.length);
  const resetQuote = () => setIndex(0);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🤖 Greeting Machine</h1>
      <p style={styles.quote}>{quotes[index]}</p>

      <div style={styles.buttons}>
        <button onClick={nextQuote} style={styles.btnPrimary}>
          Next Quote →
        </button>
        <button onClick={resetQuote} style={styles.btnSecondary}>
          Reset
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'system-ui, sans-serif',
    textAlign: 'center',
    padding: '3rem',
    background: 'linear-gradient(135deg, #e0f7fa, #fff9c4)',
    minHeight: '100vh'
  },
  title: {
    fontSize: '2.2rem',
    marginBottom: '1rem'
  },
  quote: {
    fontSize: '1.4rem',
    marginBottom: '2rem'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem'
  },
  btnPrimary: {
    padding: '0.8rem 1.4rem',
    backgroundColor: '#1976d2',
    color: 'white',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    fontSize: '1rem'
  },
  btnSecondary: {
    padding: '0.8rem 1.4rem',
    backgroundColor: '#9e9e9e',
    color: 'white',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    fontSize: '1rem'
  }
};

export default Greeting;
