var express = require('express');
var router = express.Router();

var faker = require('faker');

/* GET users listing. */
router.get('/', function(req, res, next) {

  console.log('件数: ' + req.query.count);

  //jsonデータの作成
  var jsonData = 
  [
      {
          fullname: faker.name.findName(),//............フルネーム
          mailaddr:faker.internet.email(),//............メールアドレス
          zipcode:faker.address.zipCode(),//............郵便番号
          password:faker.internet.password(),//.........パスワード
          phonenumber:faker.phone.phoneNumber(),//......電話番号
      }
  ]
  
  //指定した件数jsonデータの作成
  for (let i = 0; i < req.query.count-1; i++) {
      var jsonDataAdd = 
      {
          fullname: faker.name.findName(),//............フルネーム
          mailaddr:faker.internet.email(),//............メールアドレス
          zipcode:faker.address.zipCode(),//............郵便番号
          password:faker.internet.password(),//.........パスワード
          phonenumber:faker.phone.phoneNumber(),//......電話番号
      }
      jsonData.push(jsonDataAdd);
    }


    console.log(jsonData);

  res.json(jsonData);
});

module.exports = router;