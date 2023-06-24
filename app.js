fetch('http://143.198.225.25:3000/blogs')
  .then(response => response.json())
  .then(data => {
    // Render the blogs here
    const container = document.getElementById('blogContainer');

    // Iterate over the key-value pairs
    for (const key in data) {
      const value = data[key];

      // Create HTML elements
      const keyElement = document.createElement('h2');
      const valueElement = document.createElement('p');

      // Set the text content
      keyElement.textContent = key;
      valueElement.textContent = value;

      // Append elements to container
      container.appendChild(keyElement);
      container.appendChild(valueElement);
    }
  })
  .catch(error => console.error(error));
