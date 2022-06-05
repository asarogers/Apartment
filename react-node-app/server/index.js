// server/index.js

const path = require("path");
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.json());

//Node will serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));

//when a get request is made, response with message
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

//binds and listens to given port
app.listen(PORT, () => {
  //print message to terminal
  console.log(`Server listening on ${PORT}`);
});

//ROUTES//

//create a todo
app.post("/todos/:id", async (req,res) =>{
  try{
    console.log(req.body)
  } catch(err){
    console.error(err.message);
  }
})
//get all todo

//get a todo

//update todo

//delete all todos