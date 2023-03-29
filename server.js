const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port  =process.env.PORT || 5000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
          'id' : 1,
          'image' : 'https://placeimg.com/64/64/any/1',
          'name' : '홍길동',
          'birthday' : '961222',
          'gender' : '남자',
          'job' : '대학생'
        },
        {
          'id' : 2,
          'image' : 'https://placeimg.com/64/64/any/2',
          'name' : '이순신',
          'birthday' : '920102',
          'gender' : '남자',
          'job' : '직장인'
        },
        {
          'id' : 3,
          'image' : 'https://placeimg.com/64/64/any/3',
          'name' : '유관순',
          'birthday' : '861220',
          'gender' : '여자',
          'job' : '프로그래머'
        }
      ])
})

app.listen(port, () => console.log(`Listening on port ${port}`));
