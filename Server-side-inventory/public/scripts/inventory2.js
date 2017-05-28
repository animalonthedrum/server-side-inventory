$(document).ready(function(){
console.log('JQ');
//POST ADD OBJECTS FROM SERVER SIDE ARRAY
$('#addButton').on('click', function(){
  console.log('Add Clicked');
if($('#searchBar').val() === ('')) {
  alert ('Nothing to Add');
} else {
var dataToSend = { data: $('#searchBar').val() };
  $.ajax({
     type: 'POST',
     url: '/addInventory',
     data: dataToSend,
     success: function( response ){
       console.log( 'Add Inventory:', response );
        $('#searchBar').val('');

       // when back from server update display
 } // end success
   }); //end ajax
}
});//end add click function

//POST SEARCH
$('#searchButton').on('click', function(){
  console.log('search button hit');
  var searchSend = {search: $('#searchBar').val() };
  $.ajax({
    type: 'POST',
    url: '/searchInventory',
    data: searchSend,
    success: function( response ){
      console.log( 'Add Inventory:', response );
       $('#searchBar').val('');
    $('.searchDiv').append('<p>' + response + '</p>');
    }//end success
  });// end post search
});//end search on click event


//GET VIEW RETURN FULL ARRAY
$('#viewButton').on('click', function(){
  console.log('view clicked');
 var getInventory = function() {
$.ajax({
type:'GET',
url: '/Inventory',
success: function( response){
  console.log('inventory:', response);
  $('#searchBar').val('');
  $('#divSearch').empty();
  for (var i = 0; i < response.inventory.length; i++) {
  $('#divSearch').append('<p>' + response.inventory[i].data + ' <button id = "rmvBtn"> Remove</button> ' + '</p>' );
  }
}// end success


});//end ajax
};// end get inventory
getInventory();

});//end view click event

 }); // end on ready
