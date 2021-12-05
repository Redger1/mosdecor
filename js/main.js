const track = document.querySelector('.slider__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.slider__button--right');
const prevButton = document.querySelector('.slider__button--left');
const slideWidth = slides[0].getBoundingClientRect().width;

// arrange the slides
const setSlidePosition = (slide, index) => {
	slide.style.left = (slideWidth + 30) * index + 'px';
}
slides.forEach(setSlidePosition);

// function to move slides
const moveToSlide = (track, currentSlide, targetSlide) => {
	track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
	currentSlide.classList.remove('current-slide');
	targetSlide.classList.add('current-slide');
}

// move to the left
prevButton.addEventListener('click', e => {
	const currentSlide = document.querySelector('.current-slide');
	const prevSlide = currentSlide.previousElementSibling;

	moveToSlide(track, currentSlide, prevSlide);
})

// move to the right
nextButton.addEventListener('click', e => {
	const currentSlide = document.querySelector('.current-slide');
	const nextSlide = currentSlide.nextElementSibling;
	
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