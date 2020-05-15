let P = 0;

function changeProgressBar(deltaP) {
  P = P + deltaP;
  if (P < 0) {
    P = 0;
  }
  if (P > 100) {
    P = 100;
  }
  $("#my-progress-bar").width(P + "%"); 
  $("#my-progress-bar").text(P + "%")
}

function init() {
  $("#button-1").click(function() {
    changeProgressBar(1);
  });
  $("#button-3").click(function() {
    changeProgressBar(3);
  });
  $("#button-7").click(function() {
    changeProgressBar(7);
  });
  $("#button-20").click(function() {
    changeProgressBar(20);
  });
  $("#button-min-20").click(function() {
    changeProgressBar(-20);
  });
};

$(document).ready(init);