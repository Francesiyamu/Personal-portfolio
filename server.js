const express = require('express');
const app = express() //start an express app;
const path = require('path');


//Define routes

const router = express.Router();


app.use(express.static('public'));



router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "/public/portfolio.html"));
})



app.use("/", router);


app.listen(8080, () =>{
  console.log("App is starting at port...", 8080);
}); 