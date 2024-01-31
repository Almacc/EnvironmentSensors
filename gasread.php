<?php
 $gaslevel = $_GET["gas"];


echo "Gas level is: ".$gaslevel ;


$server = "localhost:4306";
$username = "root";
$password = "";
$database = "sensor_dh11";

$conn = mysqli_connect($server, $username, $password, $database) or die ("Not able to connect!");

$getinfo = "INSERT INTO mq5 (gaslevel) VALUES (".$gaslevel.")";

$result = mysqli_query($conn, $getinfo );
?>
