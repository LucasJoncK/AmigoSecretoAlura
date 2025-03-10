// Array para armazenar os amigos
let amigos = [];

// Função para adicionar um nome ao array e exibir na lista
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim(); // Remove espaços extras

    // Validação: Se estiver vazio, mostra um alerta
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    } 

    // Adiciona o nome ao array
    amigos.push(nome);
    
    // Atualiza a lista de amigos na tela
    atualizarLista();

    // Limpa o campo de entrada
    input.value = "";
}

// Função para atualizar a lista de amigos no HTML
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de recriar

    amigos.forEach(amigo => {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia! Adicione nomes antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    // Exibe o nome sorteado na página
    document.getElementById("resultado").innerHTML = `🎉 Parabens o ganhador foi: <strong>${amigoSorteado}</strong>!`;
}

// Botão para reiniciar o jogo
document.getElementById("reiniciar").addEventListener("click", function() {
    location.reload();
});