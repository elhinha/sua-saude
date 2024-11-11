// Função para abrir modal de adicionar usuário
function abrirModalAdicionar() {
    // Alterando o estilo do modal para exibi-lo, ao definir o display como 'block'
    document.getElementById('modalAdicionar').style.display = 'block';
}

// Função para fechar modal de adicionar usuário
function fecharModalAdicionar() {
    // Alterando o estilo do modal para ocultá-lo, ao definir o display como 'none'
    document.getElementById('modalAdicionar').style.display = 'none';
}

// Função para abrir modal de editar usuário
function abrirModalEditar() {
    // Alterando o estilo do modal de editar para exibi-lo
    document.getElementById('modalEditar').style.display = 'block';
}

// Função para fechar modal de editar usuário
function fecharModalEditar() {
    // Alterando o estilo do modal de editar para ocultá-lo
    document.getElementById('modalEditar').style.display = 'none';
}

// Função para abrir modal de confirmação de exclusão
function abrirModalExcluir() {
    // Alterando o estilo do modal de exclusão para exibi-lo
    document.getElementById('modalExcluir').style.display = 'block';
}

// Função para fechar modal de exclusão
function fecharModalExcluir() {
    // Alterando o estilo do modal de exclusão para ocultá-lo
    document.getElementById('modalExcluir').style.display = 'none';
}

// Função de busca na tabela
function buscarUsuario() {
    // Obtém o valor digitado no campo de pesquisa
    const input = document.getElementById("inputBusca");
    // Converte o valor da busca para maiúsculo para garantir que a busca seja insensível a maiúsculas/minúsculas
    const filter = input.value.toUpperCase();
    // Obtém a tabela de usuários
    const tabela = document.getElementById("tabelaUsuarios");
    // Obtém todas as linhas da tabela
    const linhas = tabela.getElementsByTagName("tr");

    // Loop para percorrer todas as linhas da tabela, começando pela linha 1 (ignorando o cabeçalho)
    for (let i = 1; i < linhas.length; i++) {
        // Obtém todas as colunas de cada linha
        const colunas = linhas[i].getElementsByTagName("td");
        let match = false; // Variável para verificar se há correspondência na busca

        // Loop para percorrer todas as colunas da linha
        for (let j = 0; j < colunas.length; j++) {
            // Obtém o conteúdo de cada célula (coluna) da linha
            const conteudo = colunas[j].innerText || colunas[j].textContent;
            
            // Verifica se o conteúdo da coluna contém o texto da busca
            if (conteudo.toUpperCase().indexOf(filter) > -1) {
                match = true; // Se houver correspondência, define match como true
                break; // Sai do loop de colunas assim que encontra uma correspondência
            }
        }

        // Se houver correspondência, exibe a linha; caso contrário, oculta
        linhas[i].style.display = match ? "" : "none";
    }
}
