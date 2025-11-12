window.onload = () => {
    const button = document.getElementById("searchBtn");

    button.addEventListener("click", () => {
        fetch("superheroes.php")
            .then(response => response.text())
            .then(data => {
                alert(data);  // show list of superheroes
            })
            .catch(error => console.error(error));
    });
};
