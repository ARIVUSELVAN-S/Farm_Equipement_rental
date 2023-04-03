const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const dbconnection=require('./db')
app.use('/api/cars/',require('./routes/carsRoute'))
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`NODE JS SERVER STARTED in port ${port}!`))