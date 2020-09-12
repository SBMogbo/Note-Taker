// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var fs = require("fs");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3005;

//starts noteData
let noteData=[];

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname,"/public")));

// Routes

// Basic route that sends the user first to the AJAX Page
app.get(`*`, function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "notes.html"));
});

// Create New newNote - takes in JSON input
app.post(`/api/notes`, function (req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newNote = req.body;

  // Using a RegEx Pattern to remove spaces from newNote
  newNote.routeName = newNote.name.replace(/\s+/g, "").toLowerCase();

  console.log(newNote);

  characters.push(newNote);

  res.json(newNote);
});