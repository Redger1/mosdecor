<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->isHTML(true);

	//От кого писмьо
	$mail->setFrom('artyom.shlianov@yandex.ru', 'Артем');
	//Кому письмо
	$mail->addAddress('artyom-sh2001@yandex.ru');
	//Тема письма
	$mail->Subject = 'Новая заявка';

	//Стена
	$wall = 'Не Сделана';
	if($_POST['complete'] == 'done') {
		$wall = "Сделана";
	} 

	//Тело письма
	$body = '<h1>Новая заявка!</h1>'

	if(trim(!empty($_POST['room-type']))) {
		$body.='<p><strong>Тип помещения:</strong> '.$_POST['room-type'].'</p>';
	}

	if(trim(!empty($_POST['cover-type']))) {
		$body.='<p><strong>Тип штукатурки:</strong> '.$_POST['cover-type'].'</p>';
	}

	if(trim(!empty($_POST['complete']))) {
		$body.='<p><strong>Тип штукатурки:</strong> '.$wall.'</p>';
	}

	if(trim(!empty($_POST['user_area']))) {
		$body.='<p><strong>Тип штукатурки:</strong> '.$_POST['user_area'].'</p>';
	}

	if(trim(!empty($_POST['user_phone']))) {
		$body.='<p><strong>Тип штукатурки:</strong> '.$_POST['user_phone'].'</p>';
	}

	$mail->Body = $body;

	//Отправляем
	if (!$mail->send()) {
		$message = 'Ошибка';
	} else {
		$message = 'Данные отправлены';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);

?>