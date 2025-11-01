const express = require('express');
const app = express();

app.use(express.json());

// GET route - returns a greeting message
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

// POST route - adds two numbers
app.post('/add', (req, res) => {
  const { a, b } = req.body;
  res.json({ sum: a + b });
});

const PORT = 3000;
if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}

// Export app for testing
module.exports = app;
