<?php
	$room_type = $_POST['room-type'];
	$cover_type = $_POST['cover-type'];
	$complete = $_POST['complete'];
	$user_area = $_POST['user_area'];
	$user_phone = $_POST['user_phone'];
	$token = "5087101504:AAEzJ95ZXvZIAZr52UWiWq4hnF0BYqKqd_k"
	$char_id = "-756918387"

	$arr = array(
		"Тип помещения: " => $room_type,
		"Тип покрытия: " => $cover_type,
		"Подготовка стен: " => $complete,
		"Объем работ: " => $user_area,
		"Телефон: " => $user_phone
	);

	foreach ($arr as $key => $value) {
		$txt .= "<b>".key."</b>" ".$value"."%0A";
	};

	$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={&txt}", "r");

	if ($sendToTelegram) {
		echo 'Success';
	} else {
		echo 'Error';
	}
?>