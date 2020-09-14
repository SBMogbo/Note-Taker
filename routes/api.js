const path = require("path")
const router=require("express").Router()
const { v4: uuidv4 } = require('uuid');
var fs = require("fs");

// Routes


router.get(`/notes`, function (req, res) {
 const db = fs.readFileSync("./db/db.json","utf8")
  const Jsondata= JSON.parse(db);
    res.json(Jsondata);
  
});

// Create New newNote - takes in JSON input
router.post(`/notes`, function (req, res) {
  let db =fs.readFileSync("./db/db.json");
  db=JSON.parse(db);
  let info = req.body;
  console.log(db);
  info['id']=uuidv4();
  db.push(info)
  fs.writeFileSync("./db/db.json", JSON.stringify(db));
  res.json(info);
  
});

//Delete a note
router.delete(`/notes/:id`,(req,res)=>{
  let db = fs.readFileSync('./db/db.json',"utf8");
  db=JSON.parse(db);
  let id = req.params.id
  let deleteNote = db.findIndex((element) => element.id === id);
  db.splice(deleteNote,1);
    fs.writeFileSync("./db/db.json",JSON.stringify(db));
    res.send("Note Deleted")
})

module.exports=router

