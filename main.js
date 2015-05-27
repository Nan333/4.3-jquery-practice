(function($) {

  var allPanels = $('#menu > div').hide();

  $('#menu > div > button').click(function() {
    allPanels.slideUp();
    $(this).parent().next().slideDown();
    return false;
  });

})(jQuery);
