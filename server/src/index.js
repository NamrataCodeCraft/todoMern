const express = require('express')
require('dotenv').config()
const cors = require('cors')

const errorHandler = require('./middleware/errorHandler')
const router = require('./routes/route')
const dbConnection = require('./config/db')


const app = express();
const PORT = process.env.PORT || 3000


dbConnection()
app.use(express.json())
app.use(cors())




app.use('/', router)

app.use(errorHandler)



app.listen(PORT, () => {
    console.log(`Server is listeing on ${PORT}`)
})