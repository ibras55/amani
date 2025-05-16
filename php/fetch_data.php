<?php
include 'db.php';

$result = $conn->query("SELECT * FROM test_results ORDER BY date DESC");
$data = [];

while ($row = $result->fetch_assoc()) {
  $data[] = $row;
}

echo json_encode($data);
?>
