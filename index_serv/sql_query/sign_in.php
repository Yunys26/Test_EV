<?php
$email = $_POST['email'];
$password = $_POST['password'];
print_r ($_POST);

include('connection.php');

$query = "SELECT * FROM users WHERE email = '$email' and password = '$password'";


if (mysqli_query($my_connect, $query)) echo "Пользователь вошел";
else echo "Пользователь не зашел: "  . mysqli_error($my_connect);

$result = mysqli_query($my_connect, $query) or die(mysqli_error($my_connect));
$res = mysqli_fetch_assoc($result);
if (mysqli_num_rows($result) == 1)
{
session_start();
$_SESSION['id'] = $res['id'];
$_SESSION['email'] = $res['email'];
$_SESSION['password'] = $res['password'];
}
print_r($_SESSION);
mysqli_close($my_connect);

?>