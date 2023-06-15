const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Allam2588@',
  database: 'train',
});

// API to register a company with the John Doe Railway Server
app.post('/train/register', (req, res) => {
  const { companyName, ownerName, rollNo, ownerEmail, accessCode } = req.body;

  // Perform database operations
  // Insert the registration details into the database

  // Example query to insert data into a 'companies' table
  const query = `INSERT INTO companies (companyName, ownerName, rollNo, ownerEmail, accessCode) VALUES (?, ?, ?, ?, ?)`;
  const values = [companyName, ownerName, rollNo, ownerEmail, accessCode];

  connection.query(query, values, (err, result) => {
    if (err) {
      console.error('Error registering the company:', err);
      res.status(500).json({ error: 'Failed to register the company' });
      return;
    }

    res.status(200).json({ message: 'Company registered successfully' });
  });
});

// API to obtain the authorization token
app.post('/train/auth', (req, res) => {
  const { companyName, clientID, ownerName, ownerEmail, rollNo, clientSecret } = req.body;

  // Perform database operations
  // Validate the clientID, ownerName, and clientSecret against the database

  // Example query to retrieve data from a 'companies' table
  const query = `SELECT * FROM companies WHERE companyName = ? AND clientID = ? AND ownerName = ? AND clientSecret = ?`;
  const values = [companyName, clientID, ownerName, clientSecret];

  connection.query(query, values, (err, result) => {
    if (err) {
      console.error('Error validating the client:', err);
      res.status(500).json({ error: 'Failed to obtain authorization token' });
      return;
    }

    if (result.length === 0) {
      res.status(401).json({ error: 'Invalid client credentials' });
      return;
    }

    // Generate and return the authorization token
    const token = generateAuthToken(); // Implement your own token generation logic
    res.status(200).json({ token });
  });
});

// API to get all train details
app.get('/train/trains', (req, res) => {
  // Verify the authorization token from the request headers

  // Perform database operations
  // Retrieve all train details from the database

  // Example query to retrieve all data from a 'trains' table
  const query = `SELECT * FROM trains`;

  connection.query(query, (err, result) => {
    if (err) {
      console.error('Error retrieving train details:', err);
      res.status(500).json({ error: 'Failed to retrieve train details' });
      return;
    }

    res.status(200).json(result);
  });
});

// API to get details of a particular train
app.get('/train/trains/:trainNumber', (req, res) => {
  const { trainNumber } = req.params;

  // Verify the authorization token from the request headers

  // Perform database operations
  // Retrieve details of the specified train from the database

  // Example query to retrieve data from a 'trains' table based on trainNumber
  const query = `SELECT * FROM trains WHERE trainNumber = ?`;
  const values = [trainNumber];

  connection.query(query, values, (err, result) => {
    if (err) {
      console.error('Error retrieving train details:', err);
      res.status(500).json({ error: 'Failed to retrieve train details' });
      return;
    }

    if (result.length === 0) {
      res.status(404).json({ error: 'Train not found' });
      return;
    }

    res.status(200).json(result[0]);
  });
});

// Start the server
app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
app.use(
  cors({
    origin: 'http://localhost:3000', // Replace with your frontend origin
  })
);