<?php
$ip = file_get_contents('https://api.ipify.org/');
$sql = mysqli_connect("Your IP or Localhost", "Username", "Password", "Your Database Name");
$checkServer = "SELECT * FROM licenses WHERE serverip='$ip';";
$result = mysqli_query($sql, $checkServer);
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "Authenticated";
        break;
    }
    } else {
    echo "Not Authenticated";
}
mysqli_close($sql);
?>