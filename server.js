const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());

app.get('/api/products', async (req, res) => {
  console.log('Received request for /api/products');
  try {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
