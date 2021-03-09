(function ($) {
$(document).ready(function() {

  // DISPLAYING THE ACTUAL VIEWPORT
  // - Useful for finding breakpoints in responsive projects
  // ------------------------------------------------------------
  function getViewport() {
    var viewPortWidth;
    var viewPortHeight;
    // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
    if (typeof window.innerWidth !== 'undefined') {
     viewPortWidth = window.innerWidth,
     viewPortHeight = window.innerHeight
    }
    return [viewPortWidth+"x"+viewPortHeight+"px"];
  }

  // Decomment here to display the viewport value
  // $('body').prepend('<div class="viewport">'+getViewport()+'</div>');
  // $('.viewport').css({ position: 'fixed', right: 0, background: '#fff', 'z-index': '100', padding: '10px' });


  // Your custom Javascript code
  // ------------------------------------------------------------


});
})(jQuery);