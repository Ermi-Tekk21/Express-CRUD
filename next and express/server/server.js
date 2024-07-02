const express = require('express');
const cors = require('cors');

const app = express();
const port = 8080;

// Middleware
app.use(cors()); // Enable CORS for all origins

// Example endpoint
app.get('/api/home', (req, res) => {
  // Example data
  const data = {
    message: 'Hello from the backend!',
  };
  
  // Simulate delay for demonstration
  setTimeout(() => {
    res.json(data);
  }, 1000); // Delay of 1 second
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
