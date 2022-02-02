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









"use strict"

document.addEventListener('DOMContentLoaded', function() {
	const form = document.querySelector('#form');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);

		if (error === 0) {
			form.classList.add('_sending');
			let room_type = document.querySelectorAll('[name="room-type"]')[0].value;
			let cover_type = document.querySelectorAll('[name="cover-type"]')[0].value;
			let complete = document.querySelector('[name="complete"]:checked').value;
			let user_area = document.querySelectorAll('[name="user_area"]')[0].value;
			let user_phone = document.querySelectorAll('[name="user_phone"]')[0].value;

			Email.send({
				Host : "smtp.elasticemail.com",
				Username : "arnautartyom@gmail.com",
				Password : "61349B556A0FADD7F4B81508BD3E50753E93",
				To : 'arnautartyom@yandex.com',
				From : "arnautartyom@gmail.com",
				Subject : "Поступила новая заявка с MosDecor!",
				Body : `<div style="color: #333333; font: 32px Montserrat, sans-serif; line-height: 120%; -webkit-text-size-adjust:none; display: block;">Поступила новая заявка с MosDecor!</div>
				<br>
				<br>
				<div style="color: #333333; font: 20px Montserrat, sans-serif; line-height: 30px; -webkit-text-size-adjust:none; display: block;">Тип помещения: <b>${room_type}</b>
				<br>
				Тип штукатурки: <b>${cover_type}</b>
				<br>
				Оттелка стен: <b>${complete}</b>
				<br>
				Объем работ: <b>${user_area} м<sup>2</sup></b> 
				<br>
				Номер телефона: <a href="tel:${user_phone}"><b>${user_phone}</b></a>
				</div>`,
			}).then(
			message => { 
				alert("Сообщение отправлено");
				form.classList.remove('_sending');
			}
			);
		} else {
			alert('Заполните обязательные поля!');
		}
	}


	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll("._req");

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('_phone')) {
				if (!phoneTest(input)) {
					formAddError(input);
					error++;
				}
			}
			if (input.value === '') {
				formAddError(input);
				error++;
			}
		}
		return error;
	}

	function formAddError(input) {
		input.classList.add("_error");
	}
	function formRemoveError(input) {
		input.classList.remove("_error");
	}

	function phoneTest(input) {
		var a = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
		return a.test(input.value);
	}
});