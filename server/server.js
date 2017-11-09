// --IMPORTS--
require('dotenv').config();
const express = require('express')
    , session = require('express-session')
    , bodyParser = require('body-parser')
    , massive = require('massive')

// , http = require('http').Server(app)
// , io = require('socket.io');

// --SETUP APP--
const app = express();
app.use( express.static( `${__dirname}/../build` ) );

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))
//important to have this at top of file


// --MASSIVE--
massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);

})


// --ENDPOINTS--
// --AUTH ENDPOINTS--

// --SOCKET--


// --SETUP APP TO LISTEN TO PORT--
const PORT = 8085;
app.listen(PORT, () => console.log(`Listening on ${PORT}`))

