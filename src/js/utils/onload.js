// remove animation on load
import $ from "jquery";

$(window).on('load', function(){
  $('body').removeClass('preload');
});