const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');

const index = require('./routes/index');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/ping', function (req, res) {
    console.log('X');
 return res.send('pong');
});
app.use('/', index);
app.use('/:request', index);
app.use('/services/:serviceid', index);

app.use(express.static(path.join(__dirname, 'build')));

app.listen(process.env.PORT || 8080);