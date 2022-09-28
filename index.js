const express = require('express')
const app = express()
const cors = require('cors')

app.set('port', process.env.PORT || 3000)

app.use(express.json());
app.use(cors());
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(require('./controller/movement'))

app.listen(app.get('port'), () => {
    console.log("Backend server is running on port", app.get('port'));
});