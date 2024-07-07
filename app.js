import express from "express";

const app = express();

// Middleware to parse JSON request bodies

app.use(express.json());

// Middleware to log incoming requests

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// API endpoint to get all users

app.get('/api/users', (req, res) => {
  // Simulating fetching users from a database

  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' },
  ];

  res.json(users);
});

// host

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
