import express from "express";
import studentRoutes from "./src/student/routes.js";
const app = express();
const PORT = 3000;

app.get("/", (req, res) =>{
    res.send("server responding, Woohoo!");
})

app.use("/api/v1/students", studentRoutes);
// we are going to use the path /api/v1/students 
// when router.get (in routes.js) is activated, we are going to send the message from there, whether it's a string or a JSON file


app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
  });
