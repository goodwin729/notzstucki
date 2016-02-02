

$( ".search-trigger" ).click(function(event) {
    $(".search").toggleClass( "active" );
});
$(document).click( function(event){
    if( $(event.target).closest( ".search" ).length )
        return;
    $( ".search" ).removeClass( "active" );
    event.stopPropagation();
});