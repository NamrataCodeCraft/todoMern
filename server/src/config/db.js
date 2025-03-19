const mongoose = require('mongoose')
require('dotenv').config()
const dbConnection = async () => {
    try {
        const dbConect = await mongoose.connect(process.env.DB)
        console.log("Database connected ");

    } catch (err) {
        console.log(err)
    }
}
module.exports = dbConnection