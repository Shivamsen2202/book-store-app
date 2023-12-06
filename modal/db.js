const mongoose = require("mongoose");
mongoose
.connect("mongodb://127.0.0.1:27017/books")
.then(() =>  console.log("db Connected"))
.catch(() => console.log("err.message"))