<?php
// соединение с БД
$my_connect = mysqli_connect('localhost', 'root', '', 'guest_list');
/*print_r($my_connect);*/
if (!$my_connect) die("Error");
?>