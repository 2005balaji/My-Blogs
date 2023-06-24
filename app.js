// Fetch the JSON file
fetch('http://localhost:3000/blogs')
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    const contentDiv = document.getElementById('content');
    contentDiv.innerText = data.content;
  })
  .catch(error => {
    console.error('Error:', error);
  });
