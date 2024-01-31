<?php
 $temperature = $_GET["temp"];
 $humidity = $_GET["hum"];

echo "Temperature is: ".$temperature." <br>Humidity is: ".$humidity;


$server = "localhost:4306";
$username = "root";
$password = "";
$database = "sensor_dh11";

$conn = mysqli_connect($server, $username, $password, $database) or die ("Not able to connect!");

$getinfo = "INSERT INTO dh11 (temperature, humidity) VALUES (".$temperature.", ".$humidity.")";

$result = mysqli_query($conn, $getinfo );
?>
