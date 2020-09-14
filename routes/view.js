const path = require("path")
const router=require("express").Router()


// Basic route that sends the user first to the AJAX Page
router.get("/notes", function (req, res) {
  console.log("get notes")
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});



router.get("*",function(req,res){
  res.sendFile(path.join(__dirname,`../public/index.html`));
});

module.exports=router