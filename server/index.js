const express = require('express');
const corsOptions = require('./config/corsOptions');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3500;
const pool = require('./db');

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

// Route to retrieve data from the database
app.get("/data", async (req, res) => {
  try {
    const getData = await pool.query('SELECT * FROM tipsdata');
    res.json(getData.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Internal Server Error');
  }
});

// Route to update a specific property in the database
app.put("/data/:property", async (req, res) => {
  const { property } = req.params;
  const { value } = req.body;

  try {
    // Use parameterized queries to prevent SQL injection
    await pool.query(`UPDATE tipsdata SET ${property} = $1`, [value]);
    res.json(`${property} was updated to ${value}`);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Internal Server Error');
  }
});

