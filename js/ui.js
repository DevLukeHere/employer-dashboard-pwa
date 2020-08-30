$(document).ready(function(){
  $('.sidenav').sidenav();
  $('.modal').modal();
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
    direction: 'top',
    hoverEnabled: false
  });

  var width = 0;
  $('.overlay-trigger').click(overlay);
  $('.overlay').click(hideOverlay);
  $(window).on("scroll", hideOverlay);

  function overlay(event) {
    if ($('.overlay').css('display') == 'none') {
      $('.overlay').css({
        'display': 'block'
      });
      width = window.innerWidth;
    }
  }

  function hideOverlay(event) {
    if ($('.overlay').css('display') == 'block') {
      $('.overlay').css({
        'display': 'none'
      });
    }
  }

  // Dark mode trigger
  $('.switch').click(function(e) {
    if(document.getElementById('dark-mode-checkbox').checked) {
      $('body').removeClass('grey')
      $('body').addClass('black')
    } else {
      $('body').addClass('grey')
      $('body').removeClass('black')
    }
  })
});
