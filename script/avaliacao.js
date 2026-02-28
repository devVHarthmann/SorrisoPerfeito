const avaliacoes = [
    {
        stars: "⭐⭐⭐⭐⭐",
        author: "Bruno Soares",
        description: "Fiquei muito satisfeito com o atendimento e os resultados. Recomendo a todos!"       
    },
    {
        stars: "⭐⭐⭐⭐⭐",
        author: "Vitor Harthmann",
        description: "Atendimento impecável e profissionais muito atenciosos. Perdi o medo de dentista aqui."       
    },
    {
        stars: "⭐⭐⭐⭐⭐",
        author: "Deide Costa",
        description: "Minha filha adora vir nas consultas. A odontopediatra é muito carinhosa e paciente."       
    }

]

const gridAvaliacoes = document.getElementById("avaliacaoGrid");

avaliacoes.forEach(avaliacao => {
    const cardAvaliacao = document.createElement("div");
    cardAvaliacao.className = "avaliacao-card";
    cardAvaliacao.innerHTML = `
        <div class="avaliacao-stars">${avaliacao.stars}</div>
        <div class="avaliacao-content">
            <p>"${avaliacao.description}"</p>
            <h3>-${avaliacao.author}</h3>
            
        </div>
    `;
    gridAvaliacoes.appendChild(cardAvaliacao);
}); 