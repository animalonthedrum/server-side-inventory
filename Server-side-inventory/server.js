//requires
var express = require( 'express' );
var app = express();
var path = require( 'path');
var bodyParser = require('body-parser');

//uses
app.use(express.static ( 'public' ) );
app.use(bodyParser.urlencoded({ extended: true }));

//globals
var searches =[];

//listen
app.listen( 4215, function(){
  console.log( 'server up on 4215');
});

//base url

app.get('/', function (req, res){
  console.log('base url hit');
  res.sendFile(path.resolve( 'views/index.html' ) );
});//end base url

app.get('/Inventory', function(req, res){
  console.log('view Inventory');
  var responseObject = {
    inventory: searches
  };// end var response
  res.send( responseObject);

});

app.post('/addInventory', function (req, res) {
searches.push( req.body);
res.send('search results');
});//end app post

app.post('/searchInventory', function (req, res){
console.log(req.body);
var searchRequest = req.body;
var trueFalse;
console.log(searches);
for (var i = 0; i < searches.length; i++) {
  if(searches[i].data == searchRequest.search){
res.send('Match: ' + searchRequest.search);
    trueFalse = true;
  }

}
res.send('no matches');
// if (trueFalse) {
//   res.send('Match: ' + searchRequest.search);
// }
// else {
//   res.send('No Matches');
// }
});// end app post
