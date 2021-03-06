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

	// ============== Для попапа ============== //
	const popupForm = document.querySelector('.popup__form');
	popupForm.addEventListener('submit', popupSend);

	function popupSend(e) {
		e.preventDefault();

		let error = popupValidate(popupForm);
		
		if (error === 0) {
			popupForm.classList.add('_sending');
			let popupName = document.querySelectorAll('[name="popup-name"]')[0].value;
			let popupPhone = document.querySelectorAll('[name="popup-phone"]')[0].value;

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
				<div style="color: #333333; font: 20px Montserrat, sans-serif; line-height: 30px; -webkit-text-size-adjust:none; display: block;">Номер телефона: <b>${popupPhone}</b>
				<br>
				Имя: <b>${popupName}</b>
				</div>`,
			}).then(
			message => { 
				alert("Сообщение отправлено");
				popupForm.classList.remove('_sending');
				popupForm.closest('.popup.open').classList.remove('open');
			}
			);
		} else {
			alert('Заполните обязательные поля!');
		}
	}
	// ============== ========== ============== //

	function popupValidate(form) {
		let error = 0;
		let popupReq = document.querySelectorAll(".popup_req");

		for (let index = 0; index < popupReq.length; index++) {
			const input = popupReq[index];
			formRemoveError(input);

			if (input.classList.contains('popup__phone')) {
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