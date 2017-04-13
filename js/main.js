$(document).ready(function(){

  function loaderIcon() {
      var imgb1 = $('.img-box1');
      var imgb2 = $('.img-box2');

      setTimeout(function(){
        $(imgb1).css({"animation-name": "rotateRound360", "animation-iteration-count": "infinite"});
        $(imgb2).css({"animation-name": "rotateRound360", "animation-iteration-count": "infinite"});
      }, 14100);
  }

  // loaderIcon();

});
