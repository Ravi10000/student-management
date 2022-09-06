const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors");
const bodyParser = require("body-parser");
const studentRoutes = require('./routes/student.routes')

const app = express()

const DB_URL = process.env.DB_URL || "mongodb://localhost:27017/student-management";
const PORT = process.env.PORT || 5000;

mongoose.connect(DB_URL);
const DB = mongoose.connection;
DB.on("error", console.error.bind(console, "connection error: "));
DB.once("open", () => {
  console.log("connected to database");
});

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/student', studentRoutes)
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname, "client", "build")));
//     app.get("*", (req, res) => {
//       res.sendFile(path.resolve(__dirname, "client/build", "index.html"));
//     });
//   }
  

app.listen(PORT, ()=>{
    console.log(`api running on port ${PORT}`)
})
