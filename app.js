const express = require('express');
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://vaishali:root@cluster0.iqght.mongodb.net/productapi?retryWrites=true&w=majority")
const cors = require('cors');
const bodyparser = require('body-parser');


const app = express();
const port = process.env.PORT|| 3000


app.use(cors());
app.use(express.static("./public"));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());




const userRouter = require('./routes/userroute');
app.use("/user", userRouter);
app.listen(port ,() => {
    console.log("server is running");
})
