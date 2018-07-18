import express from 'express';
import path from 'path';
import webpack from 'webpack';
import config from './webpack.config.dev';

const bodyParser = require('body-parser');
const csrf = require('csurf');
const cookieParser = require('cookie-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/seanwasere', { useNewUrlParser: true });

const compiler = webpack(config);

const port = process.env.PORT || 8080;
const app = express();

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));




app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
//app.use(csrf({ cookie: true, value: (req) => (req.cookies._csrf) }));

var catsRouter = require('./routes/cats');
app.use('/api/', catsRouter);

app.use(express.static(path.join(__dirname, 'www')));

// app.use(function (req, res, next) {
//     res.cookie('csrfToken', req.csrfToken ? req.csrfToken() : null, { sameSite: true, httpOnly: true });
//     next();
// });
//app.use(csrf({ cookie: true }));


// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, 'www/index.html'));
// });


app.listen(port, function (error) {
    console.log('nodejs server started : \nhttp://nodejs:' + port);


    if (error) {
        console.log(error);
    }
});
