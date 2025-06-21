const express = require('express');
const path = require('path');
const app = express();

// Use Railway's PORT or fallback to 8080
const port = process.env.PORT || 8080;
console.log(`Value of process.env.PORT is: ${process.env.PORT}`); // Add this for debugging
app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port ${port}`);
});

// Serve static files from current directory instead of build
app.use(express.static(__dirname));

// Handle React routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Add health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});