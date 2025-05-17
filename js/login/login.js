document.addEventListener("DOMContentLoaded", function () {
  //array of gradients
  const gradients = [
    "linear-gradient(150deg, #003366, #cccccc)",
    "linear-gradient(130deg, #000000, #f2f2f2)",
    "linear-gradient(110deg, #003366, #ccffcc)",
    "linear-gradient(90deg, #006600, #ccffcc)",
    "linear-gradient(70deg, #660000, #ffcccc)"
  ];


  const signInBtn = document.getElementById("signInBtn");
  const fgrtPass = document.getElementById("fgrtPass");


  let currentIndex = 0;


  //function signInBtn
  

  function changeGradients() {
    document.body.style.transition = "background all 5s ease-in-out";
    document.body.style.background = gradients[currentIndex];
    currentIndex = (currentIndex + 1) % gradients.length;
  }

  // Change gradients every 5 seconds
  setInterval(changeGradients, 5000);

  changeGradients();
});







// const express = require("express");
// const app = express();
// const path = require("path");

// // Middleware to parse URL-encoded bodies and JSON bodies
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Serve static files from the "frontend" folder
// app.use(express.static(path.join(__dirname, "learn nav bar")));

// // Serve the index.html file on the root path
// app.get("/", (_req, res) => {
//     const filepath = path.join(__dirname, "learn nav bar", "logout.html");
//     console.log(filepath);
//     res.sendFile(filepath);
// });

// // Login route
// const NAME = "timi";
// const PASSWORD = "timilehin";
// app.post("dashboard.html", (req, res) => {
//     const { username, password } = req.body;  // Get username and password from the form data

//     if (username === NAME && password === PASSWORD) {
//         const filepath = path.join(__dirname, "learn nav bar", "dashboard.html");
//         console.log(filepath);
//         res.sendFile(filepath);
//     } else {
//         res.send("<h1>incorrect details <a href='/'> try again</a></h1>")

//     }
// });

// app.listen(3001, () => {
//     console.log("Server running on port 3001");
// });
