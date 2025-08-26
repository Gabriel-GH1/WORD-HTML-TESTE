// Aguarda o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    // Mostra a data atual no rodapé
    const dataElemento = document.getElementById('current-date');
    if (dataElemento) {
        dataElemento.textContent = new Date().toLocaleDateString('pt-BR');
    }
    
    // 🔹 1. Quando clicar em uma linha da tabela, ela fica destacada
    const linhas = document.querySelectorAll(".material-table tbody tr");
    
    linhas.forEach(linha => {
        linha.addEventListener("click", () => {
            linha.classList.toggle("selecionada");
        });
    });
    
    // 🔹 2. Botão para contar quantos itens tem na tabela
    const botaoContar = document.getElementById("botao-contar");
    
    if (botaoContar) {
        botaoContar.addEventListener("click", () => {
            const total = document.querySelectorAll(".material-table tbody tr").length;
            mostrarMensagem(`A tabela tem ${total} itens de material de bordo.`, 'success');
        });
    } // <-- chave de fechamento adicionada aqui
    
    // 🔹 3. Campo de busca para filtrar materiais
    const campoBusca = document.getElementById("campo-busca");
    
    if (campoBusca) {
        campoBusca.addEventListener("keyup", () => {
            const filtro = campoBusca.value.toLowerCase();
            linhas.forEach(linha => {
                const texto = linha.textContent.toLowerCase();
                linha.style.display = texto.includes(filtro) ? "" : "none";
            });
        });
    }
    
    // Função para mostrar mensagens de status
    function mostrarMensagem(mensagem, tipo) {
        const statusElement = document.getElementById('status-message');
        if (statusElement) {
            statusElement.textContent = mensagem;
            statusElement.className = 'status-message ' + tipo;
            statusElement.style.display = 'block';
            
            // Esconder a mensagem após 3 segundos
            setTimeout(() => {
                statusElement.style.display = 'none';
            }, 3000);
        }
    }
}); // <-- chave de fechamento