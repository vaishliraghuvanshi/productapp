const express = require('express');
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://vaishali:abcd@cluster0.iqght.mongodb.net/productapi?retryWrites=true&w=majority")
const bodyparser = require('body-parser');


const app = express();
const port = process.env.PORT|| 3000
const cors = require('cors');


app.use(cors());
app.use(express.static("./public"));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());



const userRouter = require('./routes/userroute');
const categoryRouter =require('./routes/categoryroute');
app.use("/user", userRouter);
app.use("/category",categoryRouter);
app.listen(port ,() => {
    console.log("server is running");
})
