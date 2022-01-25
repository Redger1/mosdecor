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


// Calculate toddler
function polzynok() {
	var rng = document.getElementById('toddler');
	var p = document.getElementById('toddler-result');
	p.innerHTML = `${rng.value} м<sup>2</sup>`;
	if (rng.value == '200') { p.innerHTML = `${rng.value}+ м<sup>2</sup>` }
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


// Popups
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;
const timeout = 600;

if (popupLinks.length > 0) {
	for (let i = 0; i < popupLinks.length; i++) {
		const popupLink = popupLinks[i];
		popupLink.addEventListener('click', function(e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const currentPopup = document.getElementById(popupName);
			popupOpen(currentPopup);
			e.preventDefault();
		});
	}
};

const popupCloseIcon = document.querySelectorAll('.close__popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function(e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
};

function popupOpen(currentPopup) {
	if (currentPopup && unlock) {
		const popupActive = document.querySelector('popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		currentPopup.classList.add('open');
		currentPopup.addEventListener('click', function(e) {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		})
	}
};

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnlock();
		}
	}
};

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';

	for (let i = 0; i < lockPadding.length; i++) {
		lockPadding[i].style.paddingRight = lockPaddingValue;
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('_lock');

	unlock = false;
	setTimeout(function() {
		unlock = true;
	}, timeout);
};

function bodyUnlock() {
	setTimeout(function() {
		if (lockPadding.length > 0) {
			for (let i = 0; i < lockPadding.length; i++) {
				lockPadding[i].style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('_lock');
	}, timeout);

	unlock = false;
	setTimeout(function() {
		unlock = true;
	}, timeout);
};

document.addEventListener('keydown', function(e) {
	if (e.which === 27) {
		const popupActive = document.querySelector('popup.open');
		popupClose(popupActive);
	}
});


(function () {
	if (!Element.prototype.closest) {
		Element.prototype.closest = function(css) {
			var node = this;
			while(node) {
				if(node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	if(!Element.prototype.matches) {
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	};
})();


// Динамическая высота для карточек мастеров
if (window.innerWidth > 1024) {
	const masterSlides = Array.from(document.querySelectorAll('.swiper-slide'));
	let maxHeight = 0;
	masterSlides.forEach((item, index, arr) => {
		if (item.getClientRects()[0].height >= maxHeight) maxHeight = item.getClientRects()[0].height;
	});
	masterSlides.forEach((item, index, arr) => {
		item.style.height = maxHeight + 'px';
	})
} else {
	const masterSlidesMobile = Array.from(document.querySelectorAll('.swiper-slide--mobile'));
	let maxHeightMobile = 0;
	masterSlidesMobile.forEach((item, index, arr) => {
		if (item.getClientRects()[0].height >= maxHeightMobile) maxHeightMobile = item.getClientRects()[0].height;
	});
	masterSlidesMobile.forEach((item, index, arr) => {
		item.style.height = maxHeightMobile + 'px';
	})
}
