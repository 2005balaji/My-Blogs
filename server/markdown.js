const fs = require('fs');

// Read the Markdown file
const markdownContent = fs.readFileSync('Readme.md', 'utf8');

// Split Markdown content into lines
const lines = markdownContent.split('\n');

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

// Convert key-value pairs to JSON
const jsonContent = JSON.stringify(keyValuePairs, null, 2);

// Write the JSON object to a file
fs.writeFileSync('output.json', jsonContent);

console.log('Conversion completed. JSON file created.');
