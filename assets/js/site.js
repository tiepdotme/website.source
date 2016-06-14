jQuery(document).ready(function($) {

  jQuery('.dropdown').dropdown();
  $('.logoo').popup();

  
  $('.special.cards .image').dimmer({on: 'hover'});

  var $grid = $('.portfolio').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
  });

  var filterFns = {
    numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    },
    ium: function() {
      var name = $(this).find('.name').text();
      return name.match( /ium$/ );
    }
  };

  $('#filters').on( 'click', 'a', function() {
    var filterValue = $( this ).attr('data-filter');
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });

  var pathname = window.location.pathname;
  $("#menu > a.item").each(function(index) {
    console.log($(this).attr('href'));
    if (pathname.toUpperCase().indexOf($(this).attr('href').toUpperCase()) != -1)
      $(this).addClass("active");
  });

  logoo


});
