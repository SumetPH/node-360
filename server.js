const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/views', express.static('views'))
app.use('/images', express.static('images'))

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Server start >> http://localhost:${port}`))
