const mongoose = require ("mongoose")
const { link } = require("../routes")
const book = new mongoose.Schema({
    name:String,
    auther:String,
    Image:String,
    description:String,
    publication:String,
    prise:Number,
    page:Number,
    year:Number,
})
module.exports = mongoose.model("newbook", book)