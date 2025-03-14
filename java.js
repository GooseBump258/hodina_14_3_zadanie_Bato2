document.addEventListener("DOMContentLoaded", function() {
    fetch("/Bato_projekt/data/texty.json")
        .then(response => response.json())
        .then(data => {
            document.getElementById("nadpis").textContent = data.nadpis;
            document.getElementById("podnadpis").textContent = data.podnadpis;
            document.getElementById("odsek").textContent = data.odsek;
        })
        .catch(error => console.error("Chyba pri načítaní JSON:", error));
});
