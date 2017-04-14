$(document).ready(function() {

    function loaderIcon() {
        var imgb1 = $('.img-box1');
        var imgb2 = $('.img-box2');

        setTimeout(function() {
            $(imgb1).css({
                "animation-name": "rotateRound360",
                "animation-iteration-count": "infinite"
            });
            $(imgb2).css({
                "animation-name": "rotateRound360",
                "animation-iteration-count": "infinite"
            });
        }, 14100);
    }

    // loaderIcon();

    //check which case statement is running after nuber hits 0
    //tomorrows TASK!!!
    //GET COLOURSCHEME SET UP
    //SET UP OTHER PAGES AND FIX DESIGN QUIRKS
    //REFACTOR CODE WHERE POSSIBLE



    //REFACTORED CODE

    var startpos = 5;
    var timeptag = $('#time01');

    function countD() {
      console.log("countdown initialize");
      $(timeptag).text(startpos);

      if (startpos > 0) {
        console.log();
        timeingFunc();
      }
    }

    function clearIval(intf) {
      clearInterval(intf);
    }

    function timeingFunc() {
        var x = setInterval(function(){

            switch (startpos) {
              case 5:
                startpos -= 1;
                $(timeptag).text(startpos);
                return startpos;
                break;

              case 4:
                startpos -= 1;
                $(timeptag).text(startpos);
                return startpos;
                break;

              case 3:
                startpos -= 1;
                $(timeptag).text(startpos);
                return startpos;
                break;

              case 2:
                startpos -= 1;
                $(timeptag).text(startpos);
                return startpos;
                break;

              case 1:
                startpos -= 1;
                $(timeptag).text(startpos);
                return startpos;
                break;

              case 0:
                $(timeptag).text("ENTER");
                console.log("program finished");
                clearIval(x);
                break;
              default:

            }
          // console.log("Im about to run");
          // startpos -= 1;
          // console.log("number: " + startpos);
          // if (startpos === 0) {
          //   console.log("time to stop");
          //   countD();
          //   return startpos;
          //
          // }
        }, 1000);
    }

    countD();





});
