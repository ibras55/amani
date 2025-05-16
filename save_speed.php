<?php
// Database configuration
//include 'db.php';
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "bandwidth_monitor";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the speeds from the POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $downloadSpeed = floatval($_POST['downloadSpeed']);
    $uploadSpeed = floatval($_POST['uploadSpeed']);

    // Prepare and execute the SQL query
    $stmt = $conn->prepare("INSERT INTO speed_tests (download_speed, upload_speed) VALUES (?, ?)");
    $stmt->bind_param("dd", $downloadSpeed, $uploadSpeed);

    if ($stmt->execute()) {
        echo "Speeds saved successfully.";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
} else {
    echo "Invalid request.";
}

$conn->close();
?>


<!-- <?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $speed = $_POST['speed'];

  $stmt = $conn->prepare("INSERT INTO test_results (speed) VALUES (?)");
  $stmt->bind_param("d", $speed);
  $stmt->execute();
  echo "Data saved successfully!";
}
?> -->

