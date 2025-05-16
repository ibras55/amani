// Function to measure internet speed




function measureInternetSpeed() {
  const testFileUrl = "http://localhost/bandwith/testfile"; // Local test file
  const fileSizeInBytes = 5000000; // 5 MB test file

  // Measure Download Speed
  const startTime = new Date().getTime();
  fetch(testFileUrl)
      .then(response => response.blob())
      .then(() => {
          const endTime = new Date().getTime();
          const durationInSeconds = (endTime - startTime) / 1000;
          const downloadSpeedMbps = (fileSizeInBytes * 8) / (durationInSeconds * 1024 * 1024);

          // Display download speed
          document.getElementById('download-speed').innerText = `Download Speed: ${downloadSpeedMbps.toFixed(2)} Mbps`;

          // Measure Upload Speed
          measureUploadSpeed(downloadSpeedMbps);
      })
      .catch(() => {
          document.getElementById('download-speed').innerText = "Error measuring download speed.";
      });
}

// Function to measure upload speed
function measureUploadSpeed(downloadSpeed) {
  const startTime = new Date().getTime();
  const testData = new Blob(["0".repeat(1000000)]); // 1 MB test data
  const formData = new FormData();
  formData.append("file", testData);

  fetch("http://localhost/bandwith/upload_test.php", {
      method: "POST",
      body: formData,
  })
  .then(() => {
      const endTime = new Date().getTime();
      const durationInSeconds = (endTime - startTime) / 1000;
      const uploadSpeedMbps = (testData.size * 8) / (durationInSeconds * 1024 * 1024);

      // Display upload speed
      document.getElementById('upload-speed').innerText = `Upload Speed: ${uploadSpeedMbps.toFixed(2)} Mbps`;

      // Save speed to the database
      saveSpeedToDatabase(downloadSpeed, uploadSpeedMbps);
  })
  .catch(() => {
      document.getElementById('upload-speed').innerText = "Error measuring upload speed.";
  });
}

// Function to save speed results to the database
function saveSpeedToDatabase(downloadSpeed, uploadSpeed) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost/bandwith/save_speed.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
          console.log("Speed saved successfully:", xhr.responseText);
      }
  };
  xhr.send(`downloadSpeed=${downloadSpeed}&uploadSpeed=${uploadSpeed}`);
}









// function measureInternetSpeed() {
//   const testFileUrl = "https://example.com/testfile"; // Replace with your own hosted file
//   const fileSizeInBytes = 5000000; // 5 MB test file size

//   // Measure Download Speed
//   const startTime = new Date().getTime();
//   fetch(testFileUrl)
//     .then(response => response.blob())
//     .then(() => {
//       const endTime = new Date().getTime();
//       const durationInSeconds = (endTime - startTime) / 1000;
//       const downloadSpeedMbps = (fileSizeInBytes * 8) / (durationInSeconds * 1024 * 1024);

//       // Display download speed
//       document.getElementById('download-speed').innerText = `Download Speed: ${downloadSpeedMbps.toFixed(2)} Mbps`;

//       // Measure Upload Speed
//       measureUploadSpeed(downloadSpeedMbps);
//     })
//     .catch(() => {
//       document.getElementById('download-speed').innerText = "Error measuring download speed.";
//     });
// }

// function measureUploadSpeed(downloadSpeed) {
//   const startTime = new Date().getTime();
//   const testData = new Blob(["0".repeat(1000000)]); // 1 MB test data
//   const formData = new FormData();
//   formData.append("file", testData);

//   fetch("upload_test.php", {
//     method: "POST",
//     body: formData,
//   })
//     .then(() => {
//       const endTime = new Date().getTime();
//       const durationInSeconds = (endTime - startTime) / 1000;
//       const uploadSpeedMbps = (testData.size * 8) / (durationInSeconds * 1024 * 1024);

//       // Display upload speed
//       document.getElementById('upload-speed').innerText = `Upload Speed: ${uploadSpeedMbps.toFixed(2)} Mbps`;

//       // Save both speeds to the database
//       saveSpeedToDatabase(downloadSpeed, uploadSpeedMbps);
//     })
//     .catch(() => {
//       document.getElementById('upload-speed').innerText = "Error measuring upload speed.";
//     });
// }

// function saveSpeedToDatabase(downloadSpeed, uploadSpeed) {
//   const xhr = new XMLHttpRequest();
//   xhr.open("POST", "save_speed.php", true);
//   xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       console.log("Speed saved successfully:", xhr.responseText);
//     }
//   };
//   xhr.send(`downloadSpeed=${downloadSpeed}&uploadSpeed=${uploadSpeed}`);
// }



// function measureBandwidth() {
//   const startTime = new Date().getTime();

//   fetch('https://jsonplaceholder.typicode.com/photos') // Dummy API for testing
//     .then(response => response.json())
//     .then(data => {
//       const endTime = new Date().getTime();
//       const durationInSeconds = (endTime - startTime) / 1000;

//       const fileSizeInBytes = JSON.stringify(data).length * 2; // Approx. data size
//       const speedInMbps = (fileSizeInBytes * 8) / (durationInSeconds * 1024 * 1024);

//       document.getElementById('result').innerText = `Download Speed: ${speedInMbps.toFixed(2)} Mbps`;
//     })
//     .catch(() => {
//       document.getElementById('result').innerText = 'Error: Unable to measure speed. Please try again.';
//     });
// }
