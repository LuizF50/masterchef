const ingredientesDisponiveis = [
    "batata", "cenoura", "cebola", "alho", "pimentão",
    "tomate", "queijo", "pão", "leite", "chocolate",
    "açúcar", "arroz", "feijão", "macarrão", "abobrinha",
    "berinjela", "brócolis", "couve-flor", "espinafre", "abacaxi"
];

function exibirIngredientesDisponiveis() {
    const lista = document.getElementById("listaIngredientes");
    ingredientesDisponiveis.forEach(ingrediente => {
        const li = document.createElement("li");
        li.textContent = ingrediente;
        lista.appendChild(li);
    });
}

function verificarIngredientes() {
    const chefeA = [
        document.getElementById("chefeA1").value.toLowerCase(),
        document.getElementById("chefeA2").value.toLowerCase(),
        document.getElementById("chefeA3").value.toLowerCase()
    ];

    const chefeB = [
        document.getElementById("chefeB1").value.toLowerCase(),
        document.getElementById("chefeB2").value.toLowerCase(),
        document.getElementById("chefeB3").value.toLowerCase()
    ];

    const todosIngredientes = new Set([...chefeA, ...chefeB]);

    const resultadoElement = document.getElementById("resultado");
    if (todosIngredientes.size === 6) {
        resultadoElement.textContent = "Sim: Os chefes podem preparar seus pratos sem repetir ingredientes.";
        resultadoElement.style.color = "#fff"; // Cor #fff para resultado positivo
    } else {
        resultadoElement.textContent = "Não: Há pelo menos um ingrediente repetido.";
        resultadoElement.style.color = "#fff"; // Cor #fff para resultado negativo
    }
}

window.onload = exibirIngredientesDisponiveis;
