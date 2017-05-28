$(document).ready(function(){
console.log('JQ');

var objectToSend = {
  search: $('#searchBar').val(),
};//end search object
console.log('searching:',objectToSend);
$('#addButton').on('click', function(){
  console.log('add button clicked');
  // var addSearch = {
  //   add: $('#searchBar').val()
  // };//end var addSearch
    $.ajax({
      type:'POST',
      url:'/addInventory',
      data: objectToSend,
      success: function(response){
        console.log('add to inventory', response);
        viewArray();
      }//end success function
      });//end ajax POST

  });//end add search function
//});//end addButton click event

$('#searchButton').on('click', function (){
console.log('button clicked');



//ajax to get
var getSearch = function(){
  $.ajax({
    type: 'POST',
    url: '/searchInventory',
    success: function (response) {
      console.log('seaching:', response);
    }//end success function
}); //end get ajax
};//end object to send

});//end click function

$('#viewButton').on('click', function(){
  console.log('view me');
  var viewArray = function(){
    $.ajax({
        type: 'GET',
        url: '/viewInventory',
        success: function( response ){
          console.log( 'view Inventory:', response );
          $('#divSearch').empty();
          for (var i = 0; i < response.search.length; i++) {
            $('#divSearch').append('<p>' + response.search[i].searches +  '</p>');
          }
}//end success
});//end get ajax
}; //end viewArray function

});//end veiwButton event



});//end on ready
