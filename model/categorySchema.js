const mongoose = require("mongoose")
const {Schema} = mongoose

const categorySchema = new Schema({
    name: {
        type: String,
        trim: true,
        unique: true
    },
    description: {
        type: String,
        trim: true
    }
})

module.exports = mongoose.model("category", categorySchema)