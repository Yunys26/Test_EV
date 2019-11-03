<?php

// обхявление глобальных переменных 
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// соединение с БД
$my_connect = mysqli_connect('localhost', 'root@localhost', '', 'guest_list');
if (!$my_connect) die("Error");

mysqli_select_db("send", $my_connect);

// запрос В БД
$query = "INSERT INTO send (name, email, message)"."VALUES('$name', '$email', '$message')";
// проверка на добавление данных в БД
if(mysqli_query($my_connect, $query)) echo "Данные добавлены.";
else echo "Данные не добавлены." . mysql_error();

/*
$result = mysqli_query($my_connect,$query)
or die(mysqli_error($my_connect));
*/
?>