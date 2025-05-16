<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Performance History</title>
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="button.css">
</head>
<body>
  <header>
    <h1>Performance History</h1>
  </header>
  <main>
  <div class="content">
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Speed (Mbps)</th>
        </tr>
      </thead>
      <tbody>
        <?php
        include 'php/db.php';
        $result = $conn->query("SELECT * FROM test_results ORDER BY date DESC");
        while ($row = $result->fetch_assoc()) {
          echo "<tr><td>{$row['date']}</td><td>{$row['speed']} Mbps</td></tr>";
        }
        ?>
      </tbody>
    </table>
    </div>
  </main>
  <footer>
    <p>&copy; 2025 Bandwidth Monitoring System</p>
  </footer>
</body>
</html>
