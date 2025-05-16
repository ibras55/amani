<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Measure Bandwidth</title>
  <link rel="stylesheet" a href="style.css">
  <link rel="stylesheet" a href="button.css">
  <script defer src="speedtest.js"></script>
</head>
<body>
  <header>
    <h1>Measure Bandwidth</h1>
  </header>
  <main>
  <div class="content">
  <button class="btn-download" onclick="measureInternetSpeed()">Start Test</button>
  <span class="btn-open">finish Test</span>
  </div>
    <p id="download-speed">Download Speed: -</p>
    <p id="upload-speed">Upload Speed: -</p>
  </main>
  <!-- <script>
        function measureInternetSpeed() {
            alert("Speed test started!"); // Simple test to check if function is working
        }
    </script> -->
</body>
</html>
