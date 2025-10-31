const express = require('express');
const app = express();

app.use(express.json());

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

app.post('/add', (req, res) => {
  const { a, b } = req.body;
  res.json({ sum: a + b });
});

const PORT = 3000;
if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}

module.exports = app;
