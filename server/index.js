const express = require('express');
const corsOptions = require('./config/corsOptions');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3500;

// Apply CORS middleware with custom options
app.use(cors(corsOptions));

// Parse JSON in incoming requests
app.use(express.json());

// Server listening on the specified port
app.listen(PORT, () => {
  console.log(`Tips app running on port ${PORT}.`);
});

// Basic route for checking if the server is running
app.get("/", (req, res) => {
  res.send("Server is running!");
});




