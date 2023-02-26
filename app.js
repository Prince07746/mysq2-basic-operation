const express = require('express');
const path = require('path');
const fs = require('fs');


var app = express();
var port = process.env.PORT || 3030;

app.use(express.static(__dirname+'/pages'));


app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'pages','index.html'));
});

app.post('/formula',function(req,res){
    res.send('welcome');
})



app.get('/tables',function(req,res){
  res.send('this is the database');
  console.log('dtb finded on server point with tables');
});
  
    
    
app.listen(port,function(err){
    if(err){
        console.log('server down');
    }

    console.log('server connected');

});
