var express = require('express');
var path = require('path');

var app = express();

//Routes for use
app.use('/',express.static(__dirname + '/public'));

app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'))
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'))
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'))

/*
app.get('/',function(req,res){
  res.send('index.html');
});
*/
app.listen(process.env.PORT || 5000, function(){
  console.log('Server Running, 5000');

})
