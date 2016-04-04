$( document ).ready(function() {
$.ajax("doc.txt")
  .done(function( data ) {
    $("#but").click(function(){
      $("#doc").html(data)
    })
  })
  .fail(function() {
    alert( "error" );
  });

});
