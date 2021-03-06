window.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('.header__list'),
		menuItem = document.querySelectorAll('.header__item'),
		hamburger = document.querySelector('.burger');

	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('burger__active');
		menu.classList.toggle('header__active');
	});

	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			hamburger.classList.toggle('burger__active');
			menu.classList.toggle('header__active');
		})
	})
})

function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();