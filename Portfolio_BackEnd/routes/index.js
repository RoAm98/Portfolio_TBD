var express = require('express');
var router = express.Router();
var mongoclient = require('mongodb').MongoClient
var moncon = "mongodb://localhost:27017"


router.get('/getprojects', (req, res) => {
  mongoclient.connect(moncon, {useUnifiedTopology: true}, (err, db) => {
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

module.exports = router;
