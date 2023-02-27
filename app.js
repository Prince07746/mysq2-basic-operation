const express = require('express');
const path = require('path');
const fs = require('fs');
const mysql = require('mysql2');

var app = express();
var port = process.env.PORT || 3030;

app.use(express.static(__dirname+'/pages'));

// DATA BASE CONNECTION
const connection = mysql.createConnection({
  host: 'us-cdbr-east-06.cleardb.net',
  user: 'b3b86034d97059',
  password: '5157a6c3',
  database: 'heroku_2073bff5db0dcc9'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('Connected!');
});



app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'pages','index.html'));
});

app.post('/formula',function(req,res){
    res.send('welcome');
})



app.get('/tables',function(req,res){

connection.query('SHOW TABLES', function (err, results, fields) {
  if (err) throw err;
  res.send(results);
});

});    
    
    
app.listen(port,function(err){
    if(err){
        console.log('server down');
    }

    console.log('server connected');

});
