const express = require('express');
const mc = require('./controllers/messages_controller')

const app = express();

app.use(express.json());

const port = 3001;

app.use(express.static(__dirname + './../public/build'));

const messagesBaseUrl = '/api/messages';
app.get(messagesBaseUrl, mc.read)
app.post(messagesBaseUrl, mc.create)
app.put(`${messagesBaseUrl}/:id`, mc.update)
app.delete(`${messagesBaseUrl}/:id`, mc.delete)

app.listen(port, () => "Server boi is running on " + port);