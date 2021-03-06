'use strict'

const log = require('./utils/logger')
const app = require('./app')

let host = process.env.HOST || '0.0.0.0'
let port = process.env.PORT || 3000

app.listen( port, host, log.info( `App listening at http://${host}:${port}` ) )
