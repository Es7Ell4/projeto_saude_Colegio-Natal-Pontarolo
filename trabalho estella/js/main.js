// // ===============inicial=============================
const burgue = document.querySelector('#img_burgue');
const navInicial = document.querySelector('.nav_mobile');

function menuInicialMobile(botao,nav) {

	botao.onclick = () => {
		nav.classList.toggle('mudaNav');
	}
}

menuInicialMobile(burgue,navInicial);

// ==================scroll================

let navigation = document.getElementById('navigation');


function scroll() {
	if(scrollY > 0) {
		navigation.classList.add('style_nav');	
	}else{
		navigation.classList.remove('style_nav');
	}
}


ScrollReveal({
	origin:'left',
	distance:'30px',
	duration: 1000,
}).reveal('.pai_cards, .inteligencia-emocional');


ScrollReveal({
	origin:'rigth',
	distance:'30px',
	duration: 1000,
}).reveal('#pai, .transtornos-mentais');

