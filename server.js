'use strict';

const express = require('express');
const app=express();
const PORT = process.env.PORT||3000;



app.use(express.static('./starter-code'));

app.get('/home',function(req,res){

  res.sendFile(`${__dirname}/starter-code/index.html`);


});

app.listen(PORT,function(){

  console.log('listening on port', PORT);

});