$(document).ready(function(){
    /*$('.next').click(function(){
       var seccion = $(this).attr('data-section');
        $('.panel').removeClass('show');
        $('.panel[id="'+seccion+'"]').addClass('show');

        $('.menu .item-nav').removeClass('active');
        $('.menu .item-nav[data-section="'+seccion+'"]').addClass('active');
    });
*/


//new WOW().init();

$('#pagepiling').pagepiling({
    menu: null,
    direction: 'horizontal',
    verticalCentered: true,
    sectionsColor: [],
    anchors: [],
    scrollingSpeed: 700,
    easing: 'swing',
    loopBottom: false,
    loopTop: false,
    css3: true,
    navigation: {
        'textColor': '#ccc',
        'bulletsColor': '#000',
        'position': 'right',
        'tooltips': ['Intro', 'About', 'section3', 'section4']
    },
       normalScrollElements: null,
    normalScrollElementTouchThreshold: 5,
    touchSensitivity: 5,
    keyboardScrolling: true,
    sectionSelector: '.section',
    animateAnchor: false,

    //events
    onLeave: function(index, nextIndex, direction){},
    afterLoad: function(anchorLink, index){},
    afterRender: function(){},
});
});