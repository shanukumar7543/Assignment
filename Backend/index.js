const con = require('../backend/model/Model')
const express = require('express')
const cors = require('cors')
require("dotenv").config()
const swaggerui = require('swagger-ui-express')
const swaggerjsdoc = require('swagger-jsdoc')

const app = express()
app.use(express.json())
app.use(cors())
const port = process.env.PORT;


// const option =
const option = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'api documentetion for Server...',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:3308',
      },
    ],
  },
  apis: [
    '../backend/routes/user.routes.js',
  ],
}

app.use('/testing', swaggerui.serve, swaggerui.setup(swaggerjsdoc(option)))


const { user_Routes } = require('../Backend/routes/user.routes')
app.use('/user', user_Routes)




app.listen(port, (err) => {
  if (err) {
    console.log('error')
  } else {
    console.log(`"server started on port no http://localhost:${port}"`)
  }
})
