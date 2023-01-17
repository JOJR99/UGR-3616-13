

var slideIndex = 0;
slider();

function slider() {
  var a;
  var b = document.getElementsByClassName("slides");
  for (a = 0; a < b.length; a++) {
    b[a].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > b.length) {slideIndex = 1} 
    
    b[slideIndex-1].style.display = "block"; 
    setTimeout(slider, 4000); 
};


function ValidateEmail(input) {

  var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
  if (input.value.match(regex)) {
  
    document.formc.email.focus();
    return true;
  
  } else {
  
    const message = document.getElementById('paraco');
    message.innerHTML = "Enter correct format of email before submitting"
    document.formc.email.focus();
  
    return false;
  
  }
  
  }


var current = document.getElementById('home');       
function currentPage(page) {
   if (current != null)
   {
       current.className = "";
   }
   page.className = "current";
   current = page;
}


var highlight = document.getElementById('b1');       
function currentDiv(div) {
   if (highlight != null)
   {
       highlight.className = "";
   }
   div.className = "current";
   highlight = div;
}


function show0(){
        
        
  if (document.getElementById('payd')) {
      
      document.getElementById("payd").style.display="block"
      document.getElementById("payc").style.display="none"
      document.getElementById("paya").style.display="none"
      document.getElementById("payh").style.display="none"
}

}
function show1(){
        
        
  if (document.getElementById('payc')) {
      
      document.getElementById("payc").style.display="block"
      document.getElementById("paya").style.display="none"
      document.getElementById("payh").style.display="none"
}

}
function show2(){


  if (document.getElementById('paya')) {
      
      document.getElementById("payc").style.display="none"
      document.getElementById("paya").style.display="block"
      document.getElementById("payh").style.display="none"


}

}
function show3(){


  if (document.getElementById('payh')) {
      
      document.getElementById("payc").style.display="none"
      document.getElementById("paya").style.display="none"
      document.getElementById("payh").style.display="block"


}

}



function load(){
  document.getElementById('plead').click();
}



function store(){
  localStorage.setItem('pack', 'short term')
  localStorage.setItem('packyear', 'It is a Three year pay plan')
  localStorage.setItem('packint', 'comes with Low interest rate- down to 5%/annum')
  localStorage.setItem('packmain', 'We offered an additional 1 year maintenance service')
  localStorage.setItem('packsolar', '5 sets of solar pannels')

  localStorage.removeItem('pack2','pack2year','pack2int','pack2main','pack2solar');
  localStorage.removeItem('pack3','pack3year','pack3int','pack3main','pack3solar');


}
function store2(){
  localStorage.setItem('pack2', 'sholo term')
  localStorage.setItem('pack2year', 'It is a Five year pay plan')
  localStorage.setItem('pack2int', 'comes with Medium interest rate- down to 7%/annum')
  localStorage.setItem('pack2main', 'We offered an additional 6 month maintenance service')
  localStorage.setItem('pack2solar', '2 sets of solar pannels')



  localStorage.removeItem('pack','packyear','packint','packmain','packsolar');
  localStorage.removeItem('pack3','pack3year','pack3int','pack3main', 'pack3solar');
}
function store3(){
  localStorage.setItem('pack3', 'Long term')
  localStorage.setItem('pack3year', 'It is an Eight year pay plan')
  localStorage.setItem('pack3int', 'comes with High interest rate - up to 12%/annum')
  localStorage.setItem('pack3main', 'No maintenance service')
  localStorage.setItem('pack3solar', 'No sets of solar pannels')


  localStorage.removeItem('pack2','pack2year','pack2int','pack2main','pack2solar');
  localStorage.removeItem('pack','packyear','packint','packmain','packsolar');

}



function change(){
  document.getElementById('plan').innerHTML = localStorage.getItem('pack')
  document.getElementById('year').innerHTML = localStorage.getItem('packyear')
  document.getElementById('int').innerHTML = localStorage.getItem('packint')
  document.getElementById('main').innerHTML = localStorage.getItem('packmain')
  document.getElementById('solar').innerHTML = localStorage.getItem('packsolar')
}
function change2(){
  document.getElementById('plan').innerHTML = localStorage.getItem('pack2')
  document.getElementById('year').innerHTML = localStorage.getItem('pack2year')
  document.getElementById('int').innerHTML = localStorage.getItem('pack2int')
  document.getElementById('main').innerHTML = localStorage.getItem('pack2main')
  document.getElementById('solar').innerHTML = localStorage.getItem('pack2solar')
}
function change3(){
  document.getElementById('plan').innerHTML = localStorage.getItem('pack3')
  document.getElementById('year').innerHTML = localStorage.getItem('pack3year')
  document.getElementById('int').innerHTML = localStorage.getItem('pack3int')
  document.getElementById('main').innerHTML = localStorage.getItem('pack3main')
  document.getElementById('solar').innerHTML = localStorage.getItem('pack3solar')
  
}
  function validatePhone(input) {
    var result = /^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/

    return result.test(input)
  }

  function validateNumber(input) {
    var number = input.value
    if (!validatePhone(number)) {
alert("Incorrect phone-number format. Try again");

      document.creditForm.number.focus();
      const message = document.getElementById('re')
      message.innerHTML = 'Enter correct phone format'
   return false;
    } else {

      document.creditForm.number.focus();
      return true;
    }
    
  }


function clicked(){

  if (localStorage.getItem('pack') != null) {
    change();
    return;

  }
 if (localStorage.getItem('pack2') != null) {
  change2();
  return

}
if (localStorage.getItem('pack3') != null) {
  change3();
  return;}

}


  function validateNumber2(input) {
    var number = input.value
    if (!validatePhone(number)) {
alert("Incorrect phone-number format. Try again");
      document.creditForm.number.focus();
      const message = document.getElementById('res')
      message.innerHTML = 'Enter correct phone format'
   return false;
    } else {

      document.creditForm.number.focus();
      return true;
    }
    
  }

