const express = require('express');
const fs = require('fs-extra');

const app = express();


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });


app.get('/blogs', (req, res) => {
  // Read the Markdown file
  fs.readFile('Readme.md', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to read file' });
    }

    // Convert Markdown to JSON
    const jsonData = { content: data };

    // Send the JSON response
    res.json(jsonData);
  });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
