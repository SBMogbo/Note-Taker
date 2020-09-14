// Dependencies
// =============================================================
var express = require("express");
var apiRoutes= require("./routes/api")
var viewRoutes= require("./routes/view")
// Sets up the Express App
// =============================================================
var app = express();
const PORT = process.env.PORT || 3005;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static( "public"));

app.use("/api",apiRoutes)
app.use("/",viewRoutes)

app.listen(PORT, () => {
  console.log("The server is listening on PORT" +PORT)
});