const express = require('express');
const db = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require('./routes');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(routes);

db.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });

  // Listen for the "error" event on the db connection
db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});
