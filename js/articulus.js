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


// Перключение артикулов
let object = {
	"1": {
		"xx": 1,
		"yy": 2,
	},
	"2": {
		"cc": 3
	}
}
let cover = {
    "perlamut": [
        {"url": "assets/articulus/perlamut/1.jpg", "art": "articul 1"},
        {"url": "assets/articulus/perlamut/2.jpg", "art": "articul 2"},
        {"url": "assets/articulus/perlamut/3.jpg", "art": "articul 3"},
        {"url": "assets/articulus/perlamut/4.jpg", "art": "articul 4"},
        {"url": "assets/articulus/perlamut/5.jpg", "art": "articul 5"},
        {"url": "assets/articulus/perlamut/6.jpg", "art": "articul 6"},
        {"url": "assets/articulus/perlamut/7.jpg", "art": "articul 7"},
        {"url": "assets/articulus/perlamut/8.jpg", "art": "articul 8"},
        {"url": "assets/articulus/perlamut/9.jpg", "art": "articul 9"},
        {"url": "assets/articulus/perlamut/10.jpg", "art": "articul 10"},
        {"url": "assets/articulus/perlamut/11.jpg", "art": "articul 11"},
        {"url": "assets/articulus/perlamut/12.jpg", "art": "articul 12"},
        {"url": "assets/articulus/perlamut/13.jpg", "art": "articul 13"},
        {"url": "assets/articulus/perlamut/14.jpg", "art": "articul 14"},
        {"url": "assets/articulus/perlamut/15.jpg", "art": "articul 15"},
        {"url": "assets/articulus/perlamut/16.jpg", "art": "articul 16"},
        {"url": "assets/articulus/perlamut/17.jpg", "art": "articul 17"},
        {"url": "assets/articulus/perlamut/18.jpg", "art": "articul 18"},
        {"url": "assets/articulus/perlamut/19.jpg", "art": "articul 19"},
        {"url": "assets/articulus/perlamut/20.jpg", "art": "articul 20"},
        {"url": "assets/articulus/perlamut/21.jpg", "art": "articul 21"},
        {"url": "assets/articulus/perlamut/22.jpg", "art": "articul 22"},
        {"url": "assets/articulus/perlamut/23.jpg", "art": "articul 23"},
        {"url": "assets/articulus/perlamut/24.jpg", "art": "articul 24"},
        {"url": "assets/articulus/perlamut/25.jpg", "art": "articul 25"},
        {"url": "assets/articulus/perlamut/26.jpg", "art": "articul 26"},
        {"url": "assets/articulus/perlamut/27.jpg", "art": "articul 27"},
        {"url": "assets/articulus/perlamut/28.jpg", "art": "articul 28"},
        {"url": "assets/articulus/perlamut/29.jpg", "art": "articul 29"},
        {"url": "assets/articulus/perlamut/30.jpg", "art": "articul 30"},
        {"url": "assets/articulus/perlamut/31.jpg", "art": "articul 31"},
        {"url": "assets/articulus/perlamut/32.jpg", "art": "articul 32"},
        {"url": "assets/articulus/perlamut/33.jpg", "art": "articul 33"},
        {"url": "assets/articulus/perlamut/34.jpg", "art": "articul 34"},
        {"url": "assets/articulus/perlamut/35.jpg", "art": "articul 35"},
        {"url": "assets/articulus/perlamut/36.jpg", "art": "articul 36"},
        {"url": "assets/articulus/perlamut/37.jpg", "art": "articul 37"},
        {"url": "assets/articulus/perlamut/38.jpg", "art": "articul 38"},
        {"url": "assets/articulus/perlamut/39.jpg", "art": "articul 39"},
        {"url": "assets/articulus/perlamut/40.jpg", "art": "articul 40"},
        {"url": "assets/articulus/perlamut/41.jpg", "art": "articul 41"},
        {"url": "assets/articulus/perlamut/42.jpg", "art": "articul 42"},
        {"url": "assets/articulus/perlamut/43.jpg", "art": "articul 43"},
        {"url": "assets/articulus/perlamut/44.jpg", "art": "articul 44"},
        {"url": "assets/articulus/perlamut/45.jpg", "art": "articul 45"},
        {"url": "assets/articulus/perlamut/46.jpg", "art": "articul 46"}
    ],
    "venecia": [
		{url: "assets/articulus/venecia/АРТ. В0101.jpg", art: "АРТ. В0101"},
		{url: "assets/articulus/venecia/АРТ. В0102.jpg", art: "АРТ. В0102"},
		{url: "assets/articulus/venecia/АРТ. В0103.jpg", art: "АРТ. В0103"},
		{url: "assets/articulus/venecia/АРТ. В0104.jpg", art: "АРТ. В0104"},
		{url: "assets/articulus/venecia/АРТ. В0105.jpg", art: "АРТ. В0105"},
		{url: "assets/articulus/venecia/АРТ. В0106.jpg", art: "АРТ. В0106"},
		{url: "assets/articulus/venecia/АРТ. В0107.jpg", art: "АРТ. В0107"},
		{url: "assets/articulus/venecia/АРТ. В0108.jpg", art: "АРТ. В0108"},
		{url: "assets/articulus/venecia/АРТ. В0109.jpg", art: "АРТ. В0109"},
		{url: "assets/articulus/venecia/АРТ. В0110.jpg", art: "АРТ. В0110"},
		{url: "assets/articulus/venecia/АРТ. В0111.jpg", art: "АРТ. В0111"},
		{url: "assets/articulus/venecia/АРТ. В0112.jpg", art: "АРТ. В0112"},
		{url: "assets/articulus/venecia/АРТ. В0113.jpg", art: "АРТ. В0113"},
		{url: "assets/articulus/venecia/АРТ. В0114.jpg", art: "АРТ. В0114"},
		{url: "assets/articulus/venecia/АРТ. В0115.jpg", art: "АРТ. В0115"},
		{url: "assets/articulus/venecia/АРТ. В0116.jpg", art: "АРТ. В0116"},
		{url: "assets/articulus/venecia/АРТ. В0117.jpg", art: "АРТ. В0117"},
		{url: "assets/articulus/venecia/АРТ. В0118.jpg", art: "АРТ. В0118"},
		{url: "assets/articulus/venecia/АРТ. В0119.jpg", art: "АРТ. В0119"},
		{url: "assets/articulus/venecia/АРТ. В0120.jpg", art: "АРТ. В0120"},
		{url: "assets/articulus/venecia/АРТ. В0121.jpg", art: "АРТ. В0121"},
		{url: "assets/articulus/venecia/АРТ. В0122.jpg", art: "АРТ. В0122"}
	],
	"shelk": [
		{url: "assets/articulus/shelk/АРТ. Ш0101", art: "АРТ. Ш0101"},
		{url: "assets/articulus/shelk/АРТ. Ш0102", art: "АРТ. Ш0102"},
		{url: "assets/articulus/shelk/АРТ. Ш0103", art: "АРТ. Ш0103"},
		{url: "assets/articulus/shelk/АРТ. Ш0104", art: "АРТ. Ш0104"},
		{url: "assets/articulus/shelk/АРТ. Ш0105", art: "АРТ. Ш0105"},
		{url: "assets/articulus/shelk/АРТ. Ш0106", art: "АРТ. Ш0106"},
		{url: "assets/articulus/shelk/АРТ. Ш0107", art: "АРТ. Ш0107"},
		{url: "assets/articulus/shelk/АРТ. Ш0108", art: "АРТ. Ш0108"},
		{url: "assets/articulus/shelk/АРТ. Ш0109", art: "АРТ. Ш0109"},
		{url: "assets/articulus/shelk/АРТ. Ш0110", art: "АРТ. Ш01010"},
		{url: "assets/articulus/shelk/АРТ. Ш0111", art: "АРТ. Ш01011"},
		{url: "assets/articulus/shelk/АРТ. Ш0112", art: "АРТ. Ш01012"},
		{url: "assets/articulus/shelk/АРТ. Ш0113", art: "АРТ. Ш01013"},
		{url: "assets/articulus/shelk/АРТ. Ш0114", art: "АРТ. Ш01014"},
		{url: "assets/articulus/shelk/АРТ. Ш0115", art: "АРТ. Ш01015"},
		{url: "assets/articulus/shelk/АРТ. Ш0116", art: "АРТ. Ш01016"},
		{url: "assets/articulus/shelk/АРТ. Ш0117", art: "АРТ. Ш01017"},
		{url: "assets/articulus/shelk/АРТ. Ш0118", art: "АРТ. Ш01018"},
		{url: "assets/articulus/shelk/АРТ. Ш0119", art: "АРТ. Ш01019"},
		{url: "assets/articulus/shelk/АРТ. Ш0120", art: "АРТ. Ш01020"},
		{url: "assets/articulus/shelk/АРТ. Ш0121", art: "АРТ. Ш01021"},
		{url: "assets/articulus/shelk/АРТ. Ш0122", art: "АРТ. Ш01022"}
	],
	"relief": [
		{url: "assets/articulus/shelk/АРТ. Р0101", art: "АРТ. Р0101"},
		{url: "assets/articulus/shelk/АРТ. Р0102", art: "АРТ. Р0102"},
		{url: "assets/articulus/shelk/АРТ. Р0103", art: "АРТ. Р0103"},
		{url: "assets/articulus/shelk/АРТ. Р0104", art: "АРТ. Р0104"},
		{url: "assets/articulus/shelk/АРТ. Р0105", art: "АРТ. Р0105"},
		{url: "assets/articulus/shelk/АРТ. Р0106", art: "АРТ. Р0106"},
		{url: "assets/articulus/shelk/АРТ. Р0107", art: "АРТ. Р0107"},
		{url: "assets/articulus/shelk/АРТ. Р0108", art: "АРТ. Р0108"},
		{url: "assets/articulus/shelk/АРТ. Р0109", art: "АРТ. Р0109"},
		{url: "assets/articulus/shelk/АРТ. Р0110", art: "АРТ. Р01010"},
		{url: "assets/articulus/shelk/АРТ. Р0111", art: "АРТ. Р01011"},
		{url: "assets/articulus/shelk/АРТ. Р0112", art: "АРТ. Р01012"},
		{url: "assets/articulus/shelk/АРТ. Р0113", art: "АРТ. Р01013"},
		{url: "assets/articulus/shelk/АРТ. Р0114", art: "АРТ. Р01014"},
		{url: "assets/articulus/shelk/АРТ. Р0115", art: "АРТ. Р01015"},
		{url: "assets/articulus/shelk/АРТ. Р0116", art: "АРТ. Р01016"},
		{url: "assets/articulus/shelk/АРТ. Р0117", art: "АРТ. Р01017"},
		{url: "assets/articulus/shelk/АРТ. Р0118", art: "АРТ. Р01018"},
		{url: "assets/articulus/shelk/АРТ. Р0119", art: "АРТ. Р01019"},
		{url: "assets/articulus/shelk/АРТ. Р0120", art: "АРТ. Р01020"},
		{url: "assets/articulus/shelk/АРТ. Р0121", art: "АРТ. Р01021"},
		{url: "assets/articulus/shelk/АРТ. Р0122", art: "АРТ. Р01022"},
		{url: "assets/articulus/shelk/АРТ. Р0123", art: "АРТ. Р01023"},
		{url: "assets/articulus/shelk/АРТ. Р0124", art: "АРТ. Р01024"},
		{url: "assets/articulus/shelk/АРТ. Р0125", art: "АРТ. Р01025"},
		{url: "assets/articulus/shelk/АРТ. Р0126", art: "АРТ. Р01026"},
		{url: "assets/articulus/shelk/АРТ. Р0127", art: "АРТ. Р01027"},
		{url: "assets/articulus/shelk/АРТ. Р0128", art: "АРТ. Р01028"},
		{url: "assets/articulus/shelk/АРТ. Р0129", art: "АРТ. Р01029"},
		{url: "assets/articulus/shelk/АРТ. Р0130", art: "АРТ. Р01030"},
		{url: "assets/articulus/shelk/АРТ. Р0131", art: "АРТ. Р01031"},
		{url: "assets/articulus/shelk/АРТ. Р0132", art: "АРТ. Р01032"},
		{url: "assets/articulus/shelk/АРТ. Р0133", art: "АРТ. Р01033"},
		{url: "assets/articulus/shelk/АРТ. Р0134", art: "АРТ. Р01034"},
		{url: "assets/articulus/shelk/АРТ. Р0135", art: "АРТ. Р01035"},
		{url: "assets/articulus/shelk/АРТ. Р0136", art: "АРТ. Р01036"},
		{url: "assets/articulus/shelk/АРТ. Р0137", art: "АРТ. Р01037"},
		{url: "assets/articulus/shelk/АРТ. Р0138", art: "АРТ. Р01038"},
		{url: "assets/articulus/shelk/АРТ. Р0139", art: "АРТ. Р01039"},
		{url: "assets/articulus/shelk/АРТ. Р0140", art: "АРТ. Р01040"},
		{url: "assets/articulus/shelk/АРТ. Р0141", art: "АРТ. Р01041"},
		{url: "assets/articulus/shelk/АРТ. Р0142", art: "АРТ. Р01042"},
		{url: "assets/articulus/shelk/АРТ. Р0143", art: "АРТ. Р01043"},
		{url: "assets/articulus/shelk/АРТ. Р0144", art: "АРТ. Р01044"},
		{url: "assets/articulus/shelk/АРТ. Р0145", art: "АРТ. Р01045"},
		{url: "assets/articulus/shelk/АРТ. Р0146", art: "АРТ. Р01046"},
		{url: "assets/articulus/shelk/АРТ. Р0147", art: "АРТ. Р01047"},
		{url: "assets/articulus/shelk/АРТ. Р0148", art: "АРТ. Р01048"},
		{url: "assets/articulus/shelk/АРТ. Р0149", art: "АРТ. Р01049"},
		{url: "assets/articulus/shelk/АРТ. Р0150", art: "АРТ. Р01050"},
		{url: "assets/articulus/shelk/АРТ. Р0151", art: "АРТ. Р01051"},
		{url: "assets/articulus/shelk/АРТ. Р0152", art: "АРТ. Р01052"},
		{url: "assets/articulus/shelk/АРТ. Р0153", art: "АРТ. Р01053"}
	],
	"krakelur": [

	]
}

let conatiner = document.querySelector('.articulus__grid');
var articulButton = document.querySelectorAll('.articulus__item');
var a = {
	"kartinki": [{}]
}

for (let i = 1; i < 54; i++) {
	a.kartinki.push({
		"url": `assets/articulus/shelk/АРТ. Р010${i}`,
		"art": `АРТ. Р010${i}`
	})
}

articulButton.forEach(textFromButton);

function textFromButton(e) {
	e.addEventListener('click', e => {
		conatiner.innerHTML = "";
		var buttonValue = e.target.dataset.value;
		cover[buttonValue].forEach((e) => {
			conatiner.innerHTML += `
			<div class="articulus__grid__preview">
				<img class="articulus__grid__img" src="${e.url}">
				<p class="articulus__grid__number">${e.art}</p>
			</div>
			`
		})
	})
}
