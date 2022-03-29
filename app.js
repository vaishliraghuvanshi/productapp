const express = require('express');
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://vaishali:Vaishali%40123@cluster0.iqght.mongodb.net/productapi?retryWrites=true&w=majority")
const cors = require('cors');
const bodyparser = require('body-parser');


const app = express();



app.use(cors());
app.use(express.static("./public"));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());



app.use(cors());
const userRouter = require('./routes/userroute');
app.use("/user", userRouter);
app.listen(3000, () => {
    console.log("server is running");
})