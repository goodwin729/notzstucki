$(document).ready(function(){


    //hidden header + shadow
    function init() {

        window.addEventListener('scroll', function(e){
            var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 140,
                header = document.querySelector(".nav-list--header");
            if (distanceY > shrinkOn) {
                classie.addClass(header,"is-active");
            } else {
                if (classie.has(header,"is-active")) {
                    classie.removeClass(header,"is-active");
                }
            }
        });
        window.addEventListener('scroll', function(e){
            var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 1,
                header = document.querySelector(".search-drop");
            if (distanceY > shrinkOn) {
                classie.addClass(header,"is-shadow");
            } else {
                if (classie.has(header,"is-shadow")) {
                    classie.removeClass(header,"is-shadow");
                }
            }
        });
    }
    window.onload = init();


    //social-network-alert
    var window_height, window_width;
    window_width = 505;
    window_height = 370;

    $('body').on("click", '[share-social]', function(_e) {
        var $el, __left, __opts, __top, __type;
        _e.preventDefault();
        $el = $(this);
        __type = $el.attr('share-social');
        __left = ($(window).width() - window_width) / 2;
        __top = ($(window).height() - window_height) / 2;
        __opts = "status=1" + ",width=" + window_width + ",height=" + window_height + ",top=" + __top + ",left=" + __left;
        window.open($el.attr("href"), $el.attr('share-social'), __opts);
    });


    //search-block
    $( ".search-trigger" ).click(function(event) {
        $( ".search" ).toggleClass( "is-active" );
        $( ".search-drop-input" ).focus();
    });
    $(document).click( function(event){
        if( $(event.target).closest( ".search" ).length )
            return;
        $( ".search" ).removeClass( "is-active" );
        $( ".search-drop-input" ).blur()
        event.stopPropagation();
    });


    //share-block
    $( ".share--drop" ).click(function(event) {
        $( ".share--drop" ).toggleClass( "is-active" );
    });
    $(document).click( function(event){
        if( $(event.target).closest( ".share--drop" ).length )
            return;
        $( ".share--drop" ).removeClass( "is-active" );
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


    //hover-banner-author
    $( ".author" ).hover(function(event) {
        $( ".banner-click-author" ).toggleClass( "is-hover" );
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

    //external links attribute
    $("body").on('click',
        "a[href^='http']:not([href*='" + document.domain + "']), " +
        "a[href^='https']:not([href*='" + document.domain + "']), " +
        "a[href$='.pdf']:not([href*='" + document.domain + "']), " +
        "a[href$='.pdf']" +
        "a.external", function() {
        $(this).attr('target', '_blank');
    });

    $("a[href^='#']").attr('href', 'javascript:;');

});


