$(document).ready(function() {
  $('a').click(function() {

    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
      && location.hostname == this.hostname) {
        var $target = $(this.hash);
        $target = $target.length && $target || $("[name='" + this.hash.slice(1) +"']");
    if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body').animate({scrollTop: targetOffset}, 700);
        return false;
    }
}
});
$(function() {
   var menuVisible = false;
   $('#burger').click(function() {
     if (menuVisible) {
       $('#navliste').addClass("hidden-mobile")
       menuVisible = false;
       return;
     }
     $('#navliste').removeClass("hidden-mobile")
     menuVisible = true;
   });

 });

})
