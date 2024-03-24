<?php
header("Access-Control-Allow-Origin:  *");
header("Access-Control-Allow-Origin:  *");

$connect = mysqli_connect("localhost:4306", "root", "", "sensor_dh11");
if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
    exit();
}

$sql = "SELECT * FROM mq5 ORDER BY id DESC";
$result = mysqli_query($connect, $sql);
$json_array = array();
while ($row = mysqli_fetch_assoc($result)) {
    $json_array[] = $row;
}
echo json_encode($json_array);

mysqli_close($connect);
?>
