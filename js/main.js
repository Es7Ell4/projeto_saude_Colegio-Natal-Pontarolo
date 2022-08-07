// // ===============inicial=============================
const burgue = document.querySelector('#img_burgue');
const navInicial = document.querySelector('.nav_mobile');
function menuInicialMobile(botao,nav) {

	botao.onclick = () => {
		nav.classList.toggle('mudaNav');
	}
}

menuInicialMobile(burgue,navInicial);




