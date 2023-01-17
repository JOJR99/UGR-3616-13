


/* THIS JS CODE WON'T WORK IF PUT IN 'main,js'. 
COULDN'T FIGURE OUT WHY, SO I HAVE MADE THIS EXTRA JS FILE(slider.js) */








var designIndex = 1;
display(designIndex);

function next(c) {
  display(designIndex += c);
}

function display(c) {
  var a;
  var b = document.getElementsByClassName("designSlider");
  if (c > b.length) {designIndex = 1}
  if (c < 1) {designIndex = b.length}
  for (a = 0; a < b.length; a++) {
    b[a].style.display = "none";  
  }
  b[designIndex-1].style.display = "block";  
}


