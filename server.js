//Logging mechanism
const JL = require('jsnlog').JL;
// Templating system
const express = require('express');
const bodyParser = require('body-parser');

// Http server
const http = require('http');

const app = express();
const server = http.createServer(app);

app.use(bodyParser.urlencoded({
    extended: true,
    //limit: '10mb'
}));
app.use(bodyParser.json({
    limit: '10mb'
}));

// Detect automatically if we are in the local development environment or in Openshift environment
var devEnvironment;
if (process.env.APP_NAME == "pro") {
    devEnvironment = "pro";
} else if (process.env.APP_NAME == "pre") {
    devEnvironment = "pre";
} else {
    devEnvironment = "dev";
}

// Determine LOG level
var logLevel;
if (devEnvironment == "pro") {
    logLevel = 5000;
} else {
    logLevel = 2000;
}

//Set LOG level for back-end
JL("back-end.logger").setOptions({
    "level": logLevel
});

//Set LOG level for routes
JL("routesjs.logger").setOptions({
    "level": logLevel
});

if(devEnvironment != 'pro'){
    app.use(function (request, response, next) {
        //Enabling CORS
        response.header("Access-Control-Allow-Origin", "*");
        response.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x - client - key, x - client - token, x - client - secret, Authorization");
        next();
    });
}

const port = 8880;

require("./app/routes/routes.js")(app, JL);

server.listen(port, () => {
    console.log(`NodeJS version: ${process.version}`);
    console.log(`Example app listening on port ${port}`);
});
