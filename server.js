const express = require('express')  // using express library
const app = express()

app.use(express.static(__dirname + '/public')) // public folder import

app.listen(8080, () => {    // 8080 port open
    console.log('server on http://localhost:8080')
})

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html') // __dirname : 현재프로젝트 절대경로
})


app.get('/news', (request, response) => {
    response.send('Today\'s news')
})


app.get('/shop', (request, response) => {
    response.send('Shopping page')
})


app.get('/about', (request, response) => {
    response.sendFile(__dirname + '/aboutMe.html')
})

