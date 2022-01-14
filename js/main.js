// Samples switcher
const samplesArray = Array.from(document.querySelectorAll('.samples__body-item'));
const samplesBgMasks = Array.from(document.querySelectorAll('#samples__backgorund-mask'));
samplesBgMasks[0].style.display = 'block';

samplesArray.forEach((item, index, arr) => {
	item.addEventListener('click', e => {
		for (let i = 0; i < samplesArray.length; i++) {
			samplesArray[i].classList.remove('_selected');
		}
		e.target.classList.add('_selected');
		for (let j = 0; j < samplesBgMasks.length; j++) {
			samplesBgMasks[j].style.display = 'none';
			if (e.target.dataset.value == samplesBgMasks[j].dataset.value) {
				samplesBgMasks[j].style.display = 'block';
			}
		}
	})
});



// Slider
const track = document.querySelector('.slider__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.slider__button--right');
const prevButton = document.querySelector('.slider__button--left');
const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange the slides
const setSlidePosition = (slide, index) => {
	slide.style.left = (slideWidth + 30) * index + 'px';
}
slides.forEach(setSlidePosition);

// Function to move slides
const moveToSlide = (track, currentSlide, targetSlide) => {

	track.style.transform = `translateX(-${parseInt(targetSlide.style.left)}px)`;
	currentSlide.classList.remove('current-slide');
	targetSlide.classList.add('current-slide');
}

// Move to the left
prevButton.addEventListener('click', e => {
	const currentSlide = document.querySelector('.current-slide');
	const prevSlide = currentSlide.previousElementSibling;

	//let tmp = 0;

	moveToSlide(track, currentSlide, prevSlide);
})

// Move to the right
nextButton.addEventListener('click', e => {
	const currentSlide = document.querySelector('.current-slide');
	const nextSlide = currentSlide.nextElementSibling;

	//let tmp = -200;

	moveToSlide(track, currentSlide, nextSlide);
})


// Dropdown menu from calculator
document.querySelectorAll('.dropdown').forEach(function (dropdownWrapper) {
	const dropdownBtn = dropdownWrapper.querySelector('.dropdown__button');
	const hiddenInput = dropdownWrapper.querySelector('.dropdown__input-hidden');
	const dropdownList = dropdownWrapper.querySelector('.dropdown__list');
	const dropdownItems = dropdownList.querySelectorAll('.dropdown__list-item');

	dropdownBtn.addEventListener('click', () => {
		dropdownList.classList.toggle('dropdown__list--visible');
	})

	dropdownItems.forEach(function(listItem) {
		listItem.addEventListener('click', function(e) {
			e.stopPropagation();
			dropdownBtn.innerText = this.innerText;
			hiddenInput.value = this.dataset.value;
			dropdownList.classList.remove('dropdown__list--visible');
		})
	})

	document.addEventListener('click', function(e) {
		if(e.target !== dropdownBtn) {
			dropdownList.classList.remove('dropdown__list--visible');
		}
	})
})

document.querySelector('.calculate__button').addEventListener('click', e => {

})
// Нужно будет вывести две штуки hiddenInput.value, номер телефона
// значения чекбокса и ползунка объема работ


// Переключение аватарок
const avatarContainer = document.querySelector('.avatar');
const descriptions = document.querySelector('.description').children;
const avatarItem = document.querySelectorAll('.avatar__item');
for (let i = 0; i < avatarItem.length; i++) {
	avatarItem[i].addEventListener('click', function(e) {

		displayDescription(e.target)

		e.target.remove();
		
		for (let j = 0; j < avatarItem.length; j++) {
			avatarItem[j].classList.remove('_selected');
		}

		e.target.classList.add('_selected');

		const newAvatarItem = document.querySelectorAll('.avatar__item');
		avatarContainer.insertBefore(e.target, newAvatarItem[0]);
	})
}

function displayDescription(target) {
	const id = target.id;
	if (id == 'albert') {
		for (let i = 0; i < descriptions.length; i++) {
			descriptions[i].classList.remove('selected');
			if (descriptions[i].classList == 'description__albert') {
				descriptions[i].classList.add('selected');
			}
		}
	}
	if (id == 'victor') {
		for (let i = 0; i < descriptions.length; i++) {
			descriptions[i].classList.remove('selected');
			if (descriptions[i].classList == 'description__victor') {
				descriptions[i].classList.add('selected');
			}
		}
	}
	if (id == 'eduard') {
		for (let i = 0; i < descriptions.length; i++) {
			descriptions[i].classList.remove('selected');
			if (descriptions[i].classList == 'description__eduard') {
				descriptions[i].classList.add('selected');
			}
		}
	}
}


// Calculate toddler
function polzynok() {
	const square = '';
	console.log(window.innerWidth)
	if (window.innerWidth >= 768) {
		square = 'кв ';
	}
	console.log(square);
	var rng = document.getElementById('toddler');
	var p = document.getElementById('toddler-result');
	p.innerHTML = `${rng.value} ${square}м<sup>2</sup>`;
	if (rng.value == '200') { p.innerHTML = `${rng.value}+ ${square}м<sup>2</sup>` }
}


// Burger menu
const iconMenu = document.querySelector('.menu__burger');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener('click', () => {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	})
}


// Menu navigation
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener('click', onMenuClick);
	})
	function onMenuClick(e) {
		const menuLink = e.target
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
		
			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}



