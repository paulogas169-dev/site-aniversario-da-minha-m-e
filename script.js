// ========================================
// SURPRESA AO CLICAR NO BOTÃO
// ========================================

const botaoMensagem = document.querySelector('a[href="#mensagem"]');

botaoMensagem.addEventListener("click", () => {

    // Quantidade de corações
    for (let i = 0; i < 20; i++) {

        const coracao = document.createElement("span");

        coracao.textContent = "❤️";

        // Estilos do coração
        coracao.style.position = "fixed";
        coracao.style.left = Math.random() * 100 + "vw";
        coracao.style.top = Math.random() * 100 + "vh";
        coracao.style.fontSize = Math.random() * 20 + 15 + "px";
        coracao.style.zIndex = "9999";
        coracao.style.pointerEvents = "none";

        // Animação
        coracao.animate(
            [
                {
                    transform: "translateY(0) scale(1)",
                    opacity: 1
                },
                {
                    transform: `translateY(-${100 + Math.random() * 200}px) scale(0)`,
                    opacity: 0
                }
            ],
            {
                duration: 1200 + Math.random() * 1000,
                easing: "ease-out"
            }
        );

        document.body.appendChild(coracao);

        // Remove o coração depois da animação
        setTimeout(() => {
            coracao.remove();
        }, 2500);
    }

});