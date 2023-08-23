
//******************************************************************** */
var os = require("os");
var https = require("https");
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var path = require('path');
var $CVar = require('./constants');
var merge = require('merge'), original, cloned;
var moment = require('moment');
var path = require('path');
var cmfunc = require('./cmfunc');
var fs = require("fs"); //Load the filesystem module
var sessions = require('client-sessions');
var inproduction =  (os.hostname() === 'auzora01')?1:0;
//var inproduction =  1;
// set the view engine to ejs
app.set('view engine', 'ejs')
app.use(sessions({
  cookieName: 'session',
  secret: '%@#adsfdfdfsggf344154353',
  duration: 180 * 60 * 1000,
  activeDuration: 180 * 60 * 1000,
}));
app.set('views', path.join(__dirname, '/'));
app.use('/assets',express.static(path.join(__dirname, '/assets')));
app.use('/public',express.static(path.join(__dirname, '../public')));
app.use('/layerslider',express.static(path.join(__dirname, '/layerslider')));


//*******************************
var serverIP = require('ip').address();

var httpserver = app.listen($CVar.appPORT2, function () {
  var port = httpserver.address().port;
  console.log("App http listening on port %s %s", serverIP, port);
});

//start body-parser configuration

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(function( req, res, next){
  res.locals.la = merge(require('./lang')("vi"), {
    lang: "vi",
    production: inproduction,
    devcompany: 'eBizco Australia Pty Ltd',
    devcompanyurl: 'https://ebizco.com.au' 
  })
  next();
})

//********************************* START ********************************************/
app.get('/', (req, res) => {
  console.log(cmfunc.getTimeStamp() + 'goto root..');
  res.render('index', merge({
  }, res.locals.la) );   
});

app.get('/index', (req, res) => {
  console.log(cmfunc.getTimeStamp() + 'goto index..' );
  res.render('index', merge({
  }, res.locals.la) );     
});
app.get('/about', (req, res) => {
  console.log(cmfunc.getTimeStamp() + 'goto about..' );
  res.render('about', merge({
  }, res.locals.la) );     
});
app.get('/contact', (req, res) => {
  console.log(cmfunc.getTimeStamp() + 'goto contact..' );
  res.render('contact', merge({
  }, res.locals.la) );     
});
app.get('/service', (req, res) => {
  console.log(cmfunc.getTimeStamp() + 'goto service..' );
  res.render('service', merge({
  }, res.locals.la) );     
});
app.get('/service-details', (req, res) => {
  console.log(cmfunc.getTimeStamp() + 'goto service-details..' );
  res.render('service-details', merge({
  }, res.locals.la) );     
});
app.get('/project', (req, res) => {
  console.log(cmfunc.getTimeStamp() + 'goto project..' );
  res.render('project', merge({
  }, res.locals.la) );     
});
app.get('/project-details', (req, res) => {
  console.log(cmfunc.getTimeStamp() + 'goto project-details..' );
  res.render('project-details', merge({
  }, res.locals.la) );     
});
app.get('/privacy', (req, res) => {
  console.log(cmfunc.getTimeStamp() + 'goto privacy..' );
  res.render('privacy', merge({
  }, res.locals.la) );     
});
app.get('/blog', (req, res) => {
  console.log(cmfunc.getTimeStamp() + 'goto blog..' );
  res.render('blog', merge({
  }, res.locals.la) );     
});
app.get('/blog-details', (req, res) => {
  console.log(cmfunc.getTimeStamp() + 'goto blog-details..' );
  res.render('blog-details', merge({
  }, res.locals.la) );     
});
app.get('/blogihms', (req, res) => {
  console.log(cmfunc.getTimeStamp() + 'goto blogihms..' );
  res.render('blogihms', merge({
  }, res.locals.la) );     
});
app.get('/blogicutv', (req, res) => {
  console.log(cmfunc.getTimeStamp() + 'goto blogicutv..' );
  res.render('blogicutv', merge({
  }, res.locals.la) );     
});
app.get('/blogantifake', (req, res) => {
  console.log(cmfunc.getTimeStamp() + 'goto blogantifake..' );
  res.render('blogantifake', merge({
  }, res.locals.la) );     
});
app.get('/blog-grid', (req, res) => {
  console.log(cmfunc.getTimeStamp() + 'goto blog-grid..' );
  res.render('blog-grid', merge({
  }, res.locals.la) );     
});
//*********** Functions ***************
module.exports = app;
