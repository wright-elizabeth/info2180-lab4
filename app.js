window.onload = () => {
  const button = document.getElementById("searchBtn");
  const result = document.getElementById("result");

  button.addEventListener("click", () => {
    const query = document.getElementById("search").value.trim();
    const url = `superheroes.php?query=${encodeURIComponent(query)}`;

    fetch(url)
      .then(response => response.text())
      .then(data => {
        result.innerHTML = data; // put PHP response inside the page
      })
      .catch(error => console.error(error));
  });
};
