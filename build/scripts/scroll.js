button = document.getElementById("top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

function topFunction() {
  var myVar = setInterval(smoothScroll, 0.05);
  var y=document.documentElement.scrollTop; //document.documentElement.scrollTop retrieves the current position

  function smoothScroll() {
    if (y > 0) {
      window.scrollTo(0, y);
      y = y-25;
    } else {
      window.scrollTo(0, 0);
      clearInterval(myVar);
    }
  }
}
