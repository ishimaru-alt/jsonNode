var express = require('express');
var router = express.Router();

// webフォルダの中身を公開する
router.use(express.static('web'));

router.get('/', function(req, res, next) {

  const https = require('http');
  req = https.request('http://localhost:3000/json?count=10', (res) => {
      res.on('data', (chunk) => {
          console.log(`BODY: ${chunk}`);
      });
      res.on('end', () => {
          console.log('JSONデータは以上です。');
      });
  })

  req.on('error', (e) => {
    console.error(`エラーが出ました： ${e.message}`);
  });

  req.end();

  res.render('hello', { title: 'Hello World!', text: 'This is a sample page.' });
});



module.exports = router;