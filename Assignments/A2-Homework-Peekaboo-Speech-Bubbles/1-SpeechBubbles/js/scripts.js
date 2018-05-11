/*-------------------------------------
| Your Script Solution Goes here.
-------------------------------------*/
console.log("This is only seen by us");

window.onload = function() {

  var features = document.querySelectorAll('div.feature');
  var bubbles = document.querySelectorAll('img.bubble');

  console.log(bubbles);
  console.log(bubbles[0]);
  console.log(bubbles[1]);
  console.log(bubbles[2]);

  bubbles[0] .addEventListener('mouseover', function(){
    console.log('Ouch you mouseovered me.');
    console.log(bubbles[0]);
    bubbles[0].classList.toggle('on');

});

      bubbles[0] .addEventListener('mouseout', function(){
      console.log('Ouch you mouseoutted me.');
      console.log(bubbles[0]);
      bubbles[0].classList.toggle('on');

});

  bubbles[1] .addEventListener('mouseover', function(){
  console.log('Ouch you mouseovered me.');
  console.log(bubbles[1]);
  bubbles[1].classList.toggle('on');

});

  bubbles[1] .addEventListener('mouseout', function(){
  console.log('Ouch you mouseoutted me.');
  console.log(bubbles[1]);
  bubbles[1].classList.toggle('on');

});


bubbles[2] .addEventListener('mouseover', function(){
  console.log('Ouch you mouseovered me.');
  console.log(bubbles[2]);
  bubbles[2].classList.toggle('on');

});

bubbles[2] .addEventListener('mouseout', function(){
  console.log('Ouch you mouseoutted me.');
  console.log(bubbles[2]);
  bubbles[2].classList.toggle('on');

});

  };
