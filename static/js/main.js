 $(document).ready( function(){
      $('a').smoothScroll({
            speed: 1000,
            easing: 'easeInOutCubic'
      });

      $('.showOlderChanges').on('click', function(e){
            $('.changelog .old').slideDown('slow');
            $(this).fadeOut();
            e.preventDefault();
      })
  });



var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-2196019-1']);
_gaq.push(['_trackPageview']);

(function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
