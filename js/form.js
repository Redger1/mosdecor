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
			message => alert("Сообщение отправлено")
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
				if (phoneTest(input)) {
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
		return !/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(input.value);
	}
});