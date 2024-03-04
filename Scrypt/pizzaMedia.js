document.addEventListener("DOMContentLoaded", function () {
    // Adicione um ouvinte de evento para cada botão de adicionar
    var btnAdicionarList = document.querySelectorAll(".btnAdicionar");

    btnAdicionarList.forEach(function (btnAdicionar) {
        btnAdicionar.addEventListener("click", function () {
            // Obtenha o índice do produto
            var index = btnAdicionar
                .closest(".product")
                .getAttribute("data-index");

            // Atualize a classe 'unidade'
            var unidadeElement = document.querySelector(
                '.product[data-index="' + index + '"] .unidade'
            );
            var unidadeValue = parseInt(unidadeElement.textContent) + 1;
            unidadeElement.textContent = unidadeValue;

            // Atualize o valor final
            var resultadoFinalElement =
                document.querySelector(".resultadoFinal");
            var valorAtual = parseFloat(resultadoFinalElement.textContent);
            var novoValor = valorAtual + 50.0;
            resultadoFinalElement.textContent = novoValor.toFixed(2);

            // Armazene localmente os sabores selecionados e o valor total
            atualizarLocalStorage();
        });
    });

    // Adicione um ouvinte de evento para cada botão de retirar
    var btnRetirarList = document.querySelectorAll(".btnRetirar");

    btnRetirarList.forEach(function (btnRetirar) {
        btnRetirar.addEventListener("click", function () {
            // Obtenha o índice do produto
            var index = btnRetirar
                .closest(".product")
                .getAttribute("data-index");

            // Atualize a classe 'unidade'
            var unidadeElement = document.querySelector(
                '.product[data-index="' + index + '"] .unidade'
            );
            var unidadeValue = parseInt(unidadeElement.textContent);
            if (unidadeValue > 0) {
                unidadeValue -= 1;
                unidadeElement.textContent = unidadeValue;

                // Atualize o valor final
                var resultadoFinalElement =
                    document.querySelector(".resultadoFinal");
                var valorAtual = parseFloat(resultadoFinalElement.textContent);
                var novoValor = valorAtual - 70.0;
                resultadoFinalElement.textContent = novoValor.toFixed(2);

                // Armazene localmente os sabores selecionados e o valor total
                atualizarLocalStorage();
            }
        });
    });

    // Função para atualizar o armazenamento local
    function atualizarLocalStorage() {
        var saboresSelecionados = [];
        var unidades = document.querySelectorAll(".unidade");
        unidades.forEach(function (unidade, index) {
            var quantidade = parseInt(unidade.textContent);
            if (quantidade > 0) {
                saboresSelecionados.push({
                    sabor: "Pizza " + (index + 1),
                    quantidade: quantidade,
                });
            }
        });

        var valorTotal = parseFloat(
            document.querySelector(".resultadoFinal").textContent
        );

        // Armazenar no localStorage
        localStorage.setItem(
            "saboresSelecionados",
            JSON.stringify(saboresSelecionados)
        );
        localStorage.setItem("valorTotal", valorTotal.toFixed(2));
    }
});
