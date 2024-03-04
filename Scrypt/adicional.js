document.addEventListener("DOMContentLoaded", function () {
    // Recupere os sabores selecionados e o valor total do localStorage
    var saboresSelecionados = JSON.parse(localStorage.getItem("saboresSelecionados")) || [];
    var valorTotal = localStorage.getItem("valorTotal") || "0.00";

    // Selecione o elemento onde você deseja inserir as pizzas selecionadas
    var pizzaSelecionadaDiv = document.querySelector(".pizzaSelecionada");

    // Limpe o conteúdo existente
    pizzaSelecionadaDiv.innerHTML = "";

    // Crie e adicione os elementos das pizzas selecionadas
    saboresSelecionados.forEach(function (sabor, index) {
        var pizzaParagrafo = document.createElement("p");
        pizzaParagrafo.textContent = `Sabor ${index + 1}: ${sabor.sabor}`;
        pizzaSelecionadaDiv.appendChild(pizzaParagrafo);
    });

    // Atualize o valor total
    var resultadoFinalElement = document.querySelector(".resultadoFinal");
    resultadoFinalElement.textContent = valorTotal;

    // Se necessário, aqui você pode adicionar outros códigos para interagir com o Firebase ou outras partes do seu site.
});
