const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');

module.exports = function () {
    const app = express();

    if (process.env.NODE_ENV === "development") {
        app.use(morgan('dev'));
    }
    else {
        app.use(compression());
    }

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    var config = require('./config');
    app.use(session({
        secret: config.sessionSecret,
        resave: false,
        saveUninitializeed: true
    }));
    app.use(passport.initialize()); // start passport
    app.use(passport.session()); // use session via express-session

    var path = require("path");
    app.set('views', path.join(__dirname + '/../app/views/home.html'));
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'ejs');

    require('../app/routes/index.route')(app);
    require('../app/routes/user.route')(app);
    require('../app/routes/post.route')(app);

    return app;
}
