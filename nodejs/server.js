import express from 'express';
import webpack from 'webpack';
import config from './webpack.config.dev';

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://my_user:password123@mongodb:27017/seanwasere', { useNewUrlParser: true });

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

var catsRouter = require('./routes/cats');
app.use('/', catsRouter);

app.listen(port, function (error) {
    console.log('nodejs server started : \nhttp://nodejs:' + port);

    if (error) {
        console.log(error);
    }
});
