const fs = require('fs-extra');
const express = require('express');

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

    // Split Markdown content into lines
    const lines = data.split('\n');

    // Extract key-value pairs
    const keyValuePairs = {};
    let currentKey = '';
    let currentValue = '';

    lines.forEach(line => {
      if (line.startsWith('## ')) {
        // Found a new key
        if (currentKey && currentValue) {
          // Store previous key-value pair
          keyValuePairs[currentKey] = currentValue.trim();
          currentValue = '';
        }

        // Extract new key
        currentKey = line.substring(3).trim();
      } else {
        // Concatenate value lines
        currentValue += line.trim() + ' ';
      }
    });

    // Store the last key-value pair
    if (currentKey && currentValue) {
      keyValuePairs[currentKey] = currentValue.trim();
    }

    // Send the JSON response
    res.json(keyValuePairs);
  });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
