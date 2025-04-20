const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Configure Pug as the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('form');
});

app.post('/submit', (req, res) => {
  // Here you would typically save the form data to a database
  console.log('Form submitted:', req.body);
  
  // For demonstration, just show the submitted data
  res.render('submission', { 
    title: 'Form Submission Received',
    formData: req.body 
  });
});

// Create a simple submission confirmation view
app.get('/submission', (req, res) => {
  res.render('submission', { 
    title: 'Submission Confirmation',
    formData: {} 
  });
});

// Error handling
app.use((req, res, next) => {
  res.status(404).send("Sorry, that route doesn't exist.");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});