<?php
/*Объявляем перменные в глобальном массиве POST*/
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

echo ($message);
/*
$subject = "=?utf-8?B?".base_encode("Message c site")."?=";
$headers = "From: $email\r\nReply-on: $email\r\n\Content-type text/html; charset=utf-8\r\n";
*/
include('connection.php');
/*
mysqli_select_db("reg_user", $my_connect);*/
// запрос В БД
$query = "INSERT INTO send_user (name, email, message)"." VALUES('$name', '$email', '$message')";
// проверка на добавление данных в БД

if (mysqli_query($my_connect, $query)) echo "Сообщение отправлено.";
else echo "Сообщение не отправлено "  . mysqli_error($my_connect);

mysqli_close($my_connect);
/*
$result = mysqli_query($my_connect,$query)
or die(mysqli_error($my_connect));
*/
?>