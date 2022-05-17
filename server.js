const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT ||5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// 기본
// app.get('/api/hello', (req, res)=>{
//     res.send({message: 'Hello Express!'});
// });

//REST API 활용
app.get('/api/customers', (req,res) =>{
    res.send([
        {
          'id':1,
          'image': 'https://placeimg.com/64/64/1',
          'name': '이순신',
          'birthday': '850920',
          'gender': '남자',
          'job': '관리자'
        },
        {
          'id':2,
          'image': 'https://placeimg.com/64/64/1',
          'name': '손준석',
          'birthday': '850920',
          'gender': '남자',
          'job': '관리자'
        },
        {
            'id':3,
            'image': 'https://placeimg.com/64/64/1',
            'name': '김종서',
            'birthday': '850920',
            'gender': '남자',
            'job': '관리자'
        },
      ])
})

app.listen(port, ()=> console.log(`Listening on port ${port}`));