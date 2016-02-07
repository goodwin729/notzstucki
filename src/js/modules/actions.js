$(document).ready(function(){


    //search-block
    $( ".search-trigger" ).click(function(event) {
        $( ".search" ).toggleClass( "is-active" );
    });
    $(document).click( function(event){
        if( $(event.target).closest( ".search" ).length )
            return;
        $( ".search" ).removeClass( "is-active" );
        event.stopPropagation();
    });


    //select-dropdown
    $( ".select" ).click(function(event) {
        $(this).toggleClass( "is-active" );
    });
    $(document).click( function(event){
        if( $(event.target).closest( ".select" ).length )
            return;
        $( ".select" ).removeClass( "is-active" );
        event.stopPropagation();
    });


    //mobile-menu
    $( ".btn-mobile-trigger" ).click(function(event) {
        $( ".nav-mobile" ).toggleClass( "is-active" );
        $( "body" ).toggleClass( "is-hidden" );
    });
    $(document).click( function(event){
        if( $(event.target).closest( ".nav-mobile" ).length )
            return;
        $( ".nav-mobile" ).removeClass( "is-active" );
        $( "body" ).removeClass( "is-hidden" );
        event.stopPropagation();
    });

});
