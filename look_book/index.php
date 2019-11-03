<?php
// соединение с БД
$my_connect = mysqli_connect('localhost', "root");
if(!$my_connect) die("Error");

$query = "SELECT * FROM send";

$result = mysqli_query($my_connect, $query);

while ($line = mysqli_fetch_row($query))
{
    echo "name: $line[0]. email: $line[1]. message: $line[2].<br>";
}

/*
if ( !$result ) echo "Произошла ошибка: "  .  mysqli_error();
else echo "Данные получены";

mysqli_close( $link );
*/
?>