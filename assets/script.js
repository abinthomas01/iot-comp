document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const page = this.getAttribute('data-page');

    if (page === "home") {
      document.getElementById("content").innerHTML = `
        <h2>Welcome Home</h2>
        <p>This is the home page.</p>`;
    } else {
      fetch(page)
        .then(res => res.text())
        .then(data => {
          document.getElementById("content").innerHTML = data;
        })
        .catch(() => {
          document.getElementById("content").innerHTML = "<p>Error loading page.</p>";
        });
    }
  });
});