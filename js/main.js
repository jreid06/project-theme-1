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

    function countdown(time) {
      switch (time) {
        case 1:
            setTimeout(function(){
              time = 0;
              $('#time01').text(time);
              return timedsd(time);

            }, 1000);
          break;
          case 2:
            setTimeout(function(){
              time = 1;
              $('#time01').text(time);
              return timedsd(time);

            }, 1000);
          break;
        case 3:
            setTimeout(function(){
              time = 2;
              $('#time01').text(time);
              return timedsd(time);

            }, 1000);
          break;
        case 4:
            setTimeout(function(){
                time = 3;
                $('#time01').text(time);
              return timedsd(time);

            }, 1000);
          break;
        case 5:
            setTimeout(function(){
              time = 4;
              $('#time01').text(time);
              return timedsd(time);
            }, 1000);
          break;
      }
    }

    function timedsd(cdval) {
      if (cdval === 5) {
        countdown(cdval);
        console.log("first if ran");
      }
      else if (cdval === 4) {
        countdown(cdval);
        console.log("second if ran");
      }
      else if (cdval === 3) {
        countdown(cdval);
        console.log("third if ran");
      }
      else if (cdval === 2) {
        countdown(cdval);
        console.log("fourth if ran");
      }
      else if (cdval === 1) {
        countdown(cdval);
        console.log("fourth if ran");
      }

      else if (cdval === 0) {
        x = 7;
        console.log("COUNTDOWN PROCESS STOPPED");
      }
    }

    // var x = 5;

  //   function counter() {
  //     $('#time01').text(x);
  //
  //     //log statement
  //     console.log("5 is in starting position");
  //
  //     setInterval(function(){
  //       timedsd(x);
  //       console.log("counter function has started");
  //     },1000);
  //   }
  //
  // if (x < 6) {
  //     counter();
  // }

  alert("new branch COUNTDOWN 01");


    // var count = 0;
    //
    // for (var i = 0; i < 5; i++) {
    //   if (count[i] < 5) {
    //     setInterval(function(){
    //       counter();
    //       count[i]++
    //     }, 1000);
    //   }
    // }





});
