// Selecionar elementos HTML pela classe ou id
const container = document.querySelector(".container"); // Contêiner para o QR code e botão
const qrCodeBtn = document.querySelector("#qr-form button"); // Botão para gerar o QR code
const qrCodeInput = document.querySelector("#qr-form input"); // Campo de entrada de texto
const qrCodeImg = document.querySelector("#qr-code img"); // Elemento de imagem para exibir o QR code

// Eventos associados aos elementos HTML

// Função para gerar QR code
function generateQrCode() {
    // Obter o valor da entrada de texto
    const qrCodeInputValue = qrCodeInput.value;

    // Verificar se o texto é vazio ou contém apenas espaços em branco
    if (!qrCodeInputValue || /^\s+$/.test(qrCodeInputValue)) {
        // Se for, retornar sem gerar o QR code
        return;
    }

    // Atualizar o texto do botão durante a geração do QR code
    qrCodeBtn.innerText = "Gerando código...";

    // Configurar a origem da imagem com o QR code gerado
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

    // Adicionar um ouvinte de evento para quando a imagem do QR code terminar de carregar
    qrCodeImg.addEventListener("load", () => {
        // Adicionar a classe 'active' ao contêiner para mostrar o QR code
        container.classList.add("active");
        // Restaurar o texto original do botão
        qrCodeBtn.innerText = "Código criado!";
    });
}

// Adicionar um ouvinte de evento para o clique no botão de geração do QR code
qrCodeBtn.addEventListener("click", () => {
    generateQrCode();
});

// Adicionar um ouvinte de evento para a tecla "Enter" pressionada no campo de entrada
qrCodeInput.addEventListener("keydown", (e) => {
    // Verificar se a tecla pressionada é "Enter"
    if (e.code === "Enter") {
        // Se for, chamar a função para gerar o QR code
        generateQrCode();
    }
});

// Adicionar um ouvinte de evento para a tecla solta no campo de entrada
qrCodeInput.addEventListener("keyup", () => {
    // Verificar se o campo de entrada está vazio
    if (!qrCodeInput.value) {
        // Se estiver vazio, remover a classe 'active' do contêiner e restaurar o texto do botão
        container.classList.remove("active");
        qrCodeBtn.innerText = "Gerar QR Code";
    }
});
