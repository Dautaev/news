const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
app.use(express.json())
app.use(require('./routes/category.routes'))
app.use(require('./routes/comments.routes'))
app.use(require('./routes/news.routes'))

mongoose.connect("mongodb+srv://adam:pasiman1100@cluster0.qnwzrrm.mongodb.net/news?retryWrites=true&w=majority", {
}).then(() => console.log('Успешно соединились с сервером MongoDB'))
    .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))

app.listen(port, () => {
    console.log('Сервер запущен')
}) 