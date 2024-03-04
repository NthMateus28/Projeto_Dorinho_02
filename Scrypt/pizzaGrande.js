document.addEventListener("DOMContentLoaded", function () {
    // Adicione um ouvinte de evento para cada botão de adicionar
    var btnAdicionarList = document.querySelectorAll(".btnAdicionar");

    btnAdicionarList.forEach(function (btnAdicionar) {
        btnAdicionar.addEventListener("click", function () {
            // Obtenha o nome do produto
            var nomeProduto = btnAdicionar
                .closest(".product")
                .getAttribute("data-sabor");

            // Atualize a classe 'unidade'
            var unidadeElement = btnAdicionar
                .closest(".product")
                .querySelector(".unidade");
            var unidadeValue = parseInt(unidadeElement.textContent) + 1;
            unidadeElement.textContent = unidadeValue;

            // Atualize o valor final
            var resultadoFinalElement =
                document.querySelector(".resultadoFinal");
            var valorAtual = parseFloat(resultadoFinalElement.textContent);
            var novoValor = valorAtual + 60.0;
            resultadoFinalElement.textContent = novoValor.toFixed(2);

            // Armazene localmente os sabores selecionados e o valor total
            atualizarLocalStorage(nomeProduto, unidadeValue);
        });
    });

    // Adicione um ouvinte de evento para cada botão de retirar
    var btnRetirarList = document.querySelectorAll(".btnRetirar");

    btnRetirarList.forEach(function (btnRetirar) {
        btnRetirar.addEventListener("click", function () {
            // Obtenha o nome do produto
            var nomeProduto = btnRetirar
                .closest(".product")
                .getAttribute("data-sabor");

            // Atualize a classe 'unidade'
            var unidadeElement = btnRetirar
                .closest(".product")
                .querySelector(".unidade");
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
                atualizarLocalStorage(nomeProduto, unidadeValue);
            }
        });
    });

    // Função para atualizar o armazenamento local
    function atualizarLocalStorage(nomeProduto, quantidade) {
        var saboresSelecionados =
            JSON.parse(localStorage.getItem("saboresSelecionados")) || [];

        // Verifica se o sabor já está na lista
        var saborExistente = saboresSelecionados.find(function (item) {
            return item.sabor === nomeProduto;
        });

        if (saborExistente) {
            saborExistente.quantidade = quantidade;
        } else {
            saboresSelecionados.push({
                sabor: nomeProduto,
                quantidade: quantidade,
            });
        }

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
