<?php
	// Файлы phpmailer
	require 'phpmailer/PHPMailer.php';
	require 'phpmailer/SMTP.php';
	require 'phpmailer/Exception.php';

	// Переменные, которые отправляет пользователь
	$name = $_POST['user_phone'];

	// Формирование самого письма
	$title = "Заголовок письма";
	$body = "
	<h2>Новое письмо</h2>
	<b>Телефон:</b> $name<br>
	";

	// Настройки PHPMailer
	$mail = new PHPMailer(true);
	try {
	    $mail->isSMTP();   
	    $mail->CharSet = "UTF-8";
	    $mail->SMTPAuth   = true;
	    $mail->SMTPDebug = 3;
	    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

	    // Настройки вашей почты
	    $mail->Host       = 'smtp.yandex.ru'; // SMTP сервера вашей почты
	    $mail->Username   = 'artyom-sh2001'; // Логин на почте
	    $mail->Password   = 'rxxuavhxwwnyonkx'; // Пароль на почте
	    $mail->SMTPSecure = 'ssl';
	    $mail->Port       = 465;
	    $mail->setFrom('artyom-sh2001@yandex.ru', 'Artem'); // Адрес самой почты и имя отправителя

	    // Получатель письма
	    $mail->addAddress('arnautartyom@yandex.ru');  

		// Отправка сообщения
		$mail->isHTML(true);
		$mail->Subject = $title;
		$mail->Body = $body;    

		// Проверяем отравленность сообщения
		if ($mail->send()) {$result = "success";} 
		else {$result = "error";}
	} catch (Exception $e) {
	    $result = "error";
	    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
	}

	// Отображение результата
	echo json_encode(["result" => $result, "status" => $status]);
?>