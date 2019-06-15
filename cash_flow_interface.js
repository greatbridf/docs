#!/usr/bin/node

const http = require('http')
const mysql = require('mysql')
const url = require('url')

const sql_select = 'SELECT * FROM flow'
const sql_insert = 'INSERT INTO flow(description, amount) VALUES(?, ?)'

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'david',
  password: 'g1214814536',
  port: '3306',
  database: 'money'
})

connection.connect()

http.createServer(function(request, response) {
  var query = url.parse(request.url, true).query
  switch (query.method) {
    case 'get':
      connection.query(sql_select, function(err, result) {
        if (err) {
          response.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'})
          response.end(`cannot get data: ${err.message}`)
          return
        }
        response.writeHead(200, {'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*'})
        response.end(JSON.stringify(result))
      })
      break;
    case 'add':
      connection.query(sql_insert, [query.description, query.amount], function(err, result) {
        if (err) {
          response.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'})
          response.end(`cannot add data: ${err.message}`)
          return
        }
        response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8', 'Access-Control-Allow-Origin': '*'})
        response.end('Done!')
      })
      break;
    default:
      response.writeHead(400, {'Content-Type': 'text/plain; charset=utf-8'})
      response.end('no query method')
      break;
  }
}).listen(2333)

process.on('exit', function() {
  connection.end()
})

