const bodyParser=require('body-parser');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
let config=require('config');

const app = express();

// Setup body-parser
app.use(bodyParser());
app.use(bodyParser.urlencoded({
  extended:true
}));
app.use(bodyParser.json());

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

// Getting contact email thing
app.post('/text', function (req, res) { 
  var options;
  options={
    from: `"Killstreak Contact" <${req.body.e}>`, // sender address
    to: config.get('mailer.email'), // list of receivers
    subject: '[Contact Page Message]', // Subject line
    text: `From: ${req.body.e} <br /> <br /> ${req.body.q}`, // plaintext body
    html: `From: ${req.body.e} <br /> <br /> ${req.body.q}` // html body
  }
  transporter.sendMail(options, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
  });
})

module.exports = app;




var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://gage%40quangoinc.com:henderson@smtp.gmail.com');

/* setup e-mail data with unicode symbols
var mailOptions = {
    from: '"Fred Foo ?" <foo@blurdybloop.com>', // sender address
    to: 'gage@quangoinc.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plaintext body
    html: '<b>Hello world ?</b>' // html body
};
*/

/* send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});
*/