<?php

include("connection.php");
mysqli_select_db($my_connect, "send_user");
$result = mysqli_query( $my_connect, "SELECT * FROM send_user");

echo "<table border='1' >
<tr> 
<td align=center> <b>Name</b></td>
<td align=center><b>Email</b></td>
<td align=center><b>Message</b></td>";

while($data = mysqli_fetch_row($result))
{   
    echo "<tr>";
    echo "<td align=center>$data[0]</td>";
    echo "<td align=center>$data[1]</td>";
    echo "<td align=center>$data[2]</td>";
    echo "</tr>";
}
echo "</table>";
/*
  $host = "localhost";
  $user = "root";
  $pass = "root";

  $databaseName = "guest_list";
  $tableName = "send_user";

  // ------------------------------------------------ --------------------------
  // 1) Подключение к базе данных MySQL
  // ------------------------------------------------ --------------------------

    $my_connect = mysqli_connect($host, $user, '', $databaseName);
    echo $my_connect;
    $sel = mysqli_select_db($my_connect, $tableName);

  // ------------------------------------------------ --------------------------
  // 2) Запрос базы данных для данных
  // ------------------------------------------------ --------------------------
  $result = mysql_query ("SELECT * FROM $tableName"); // запрос
  $array = mysql_fetch_row ($result); // получить результат    

  // ------------------------------------------------ --------------------------
  // 3) результат эха как json 
  // ------------------------------------------------ --------------------------
  echo json_encode ($array);




/*
$sdd_db_host='localhost'; // ваш хост
$sdd_db_name='guest_list'; // ваша бд
$sdd_db_user='root'; // пользователь бд

$my_connect = mysqli_connect($sdd_db_host, $sdd_db_user, '', $sdd_db_name);
print_r($my_connect);
if (!$connect)
{
    throw new Exception('Не удалось подключиться к базе данных! Проверьте параметры подключения');
}

$query = "SELECT * FROM reg_user";
$q = mysqli_query($my_connect, $query);
$res = array();

while ($tmp = mysqli_fetch_assoc($q))
{
    $res[] = $tmp;
    //printf('<p>Данные Имя='.$row['name']. 'Почта='.$row['email']. 'Отзыв='.$row['message'].'</p>');
}
echo json_encode($res);


if (mysqli_query($my_connect, $query)) echo "Данные выведены";
else echo "Данные не вывелись" . mysqli_error($my_connect);

mysqli_close($my_connect);
*/
?>