var express = require('express');
var router = express.Router();
var mongoclient = require('mongodb').MongoClient
var moncon = "mongodb://localhost:27017"
var nodemailer = require('nodemailer')


router.get('/getprojects', (req, res) => {
  mongoclient.connect(moncon, { useUnifiedTopology: true }, (err, db) => {
    if (err) throw err;
    let dbo = db.db('Portfolio');
    dbo.collection('projects').find().toArray((err, result) => {
      if (err) throw err;
      db.close();
      res.send(JSON.stringify(result));
      console.log(JSON.stringify(result))
      res.end();
    });
  });
});

router.post('/sendmessage', (req, res) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'rogeramat98@gmail.com',
      pass: ''
    }
  });

  var mailOptions = {
    from: 'rogeramat98@gmail.com',
    to: 'rogeramat98@gmail.com',
    subject: 'Test',
    text: 'That was easy!'
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});

module.exports = router;
