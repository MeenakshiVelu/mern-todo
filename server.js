// require("dotenv").config()
const express = require("express");
const todosRoutes = require("./routes/todosRoutes.js")
const mongoose = require("mongoose")
const path = require("path")
const dotenv = require("dotenv");
const connectDb = require("./config/connectDB.js");

//config dotenc file
dotenv.config();

//databse call
connectDb();

const app = express();

//middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

//routes
app.use("/apis/todos", todosRoutes)


//static files
app.use(express.static(path.join(__dirname, "./client/build")))

app.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname, "./client/build/index.html"))
})

const PORT = process.env.PORT || 8080
// mongoose.connect(process.env.MONGO_URI)
//     .then(()=>{
//         //listen fo requests
//         app.listen(PORT, () => {
//             console.log("Connected to db and listeneing on port 8080")        
//         })

//     })
//     .catch((error)=>{
//         console.log(error)
//     })


    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });