window.addEventListener('DOMContentLoaded', function() {
    var contentElement = document.getElementById('content');
  
    // Replace 'path/to/your/file.md' with the actual path to your .md file
    fetch('data/Readme.md')
      .then(response => response.text())
      .then(text => {
        var html = marked(text); // Assuming you have a Markdown parser library like 'marked'
        contentElement.innerHTML = html;
      })
      .catch(error => {
        contentElement.innerHTML = 'Error loading the content';
        console.error(error);
      });
  });
  