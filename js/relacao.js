// ==================relacao==================

const btn = document.querySelector('.btn-mobile');
const navRelacao = document.querySelector('.nav_relacao');


btn.addEventListener('click' , () => {
	navRelacao.classList.toggle('ativar');
});

