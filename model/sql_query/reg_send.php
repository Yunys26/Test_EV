
<?php
/*Объявляем перменные в глобальном массиве POST*/
$nickname = $_POST['nickname'];
$email = $_POST['email'];
$password = $_POST['password'];
/*
echo ($nickname);
/*
$subject = "=?utf-8?B?".base_encode("Message c site")."?=";
$headers = "From: $email\r\nReply-on: $email\r\n\Content-type text/html; charset=utf-8\r\n";
*/
include('connection.php');
/*  
mysqli_select_db("reg_user", $my_connect);*/
// запрос В БД
$query = "INSERT INTO users (name, email, password)"." VALUES('$nickname', '$email', '$password')";
// проверка на добавление данных в БД

if (mysqli_query($my_connect, $query)) echo "Пользователь добавлен.";
else echo "Пользователь не добавлен: "  . mysqli_error($my_connect);

mysqli_close($my_connect);
/*
$result = mysqli_query($my_connect,$query)
or die(mysqli_error($my_connect));
*/

?>