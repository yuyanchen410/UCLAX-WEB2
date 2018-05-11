/*-------------------------------------
| Your Script Solution Goes here.
-------------------------------------*/

console.log("This is only seen by us");

window.onload = function() {

  var items = document.querySelectorAll('.item');
  console.log(items);
  console.log(items[0]);
  console.log(items[1]);
  console.log(items[2]);
  console.log(items[3]);
  console.log(items[4]);
  console.log(items[5]);

  items[0] .addEventListener('mouseover', function(){
    console.log('Ouch you mouseovered me.');
    console.log(items[0]);
    items[0].classList.toggle('on');
    items[0].classList.toggle('text');
});

  items[1] .addEventListener('mouseover', function(){
    console.log('Ouch you mouseovered me.');
    console.log(items[1]);
    items[1].classList.toggle('on');
    items[1].classList.toggle('text');
  });

  items[2] .addEventListener('mouseover', function(){
    console.log('Ouch you mouseovered me.');
    console.log(items[2]);
    items[2].classList.toggle('on');
    items[2].classList.toggle('text');
});

  items[3] .addEventListener('mouseover', function(){
    console.log('Ouch you mouseovered me.');
    console.log(items[3]);
    items[3].classList.toggle('on');
    items[3].classList.toggle('text');
  });

  items[4] .addEventListener('mouseover', function(){
    console.log('Ouch you mouseovered me.');
    console.log(items[4]);
    items[4].classList.toggle('on');
    items[4].classList.toggle('text');
});

  items[5] .addEventListener('mouseover', function(){
    console.log('Ouch you mouseovered me.');
    console.log(items[5]);
    items[5].classList.toggle('on');
    items[5].classList.toggle('text');
  });



  var desc = document.querySelectorAll('.desc');

  console.log(desc);
  console.log(desc[0]);
  console.log(desc[1]);
  console.log(desc[2]);
  console.log(desc[3]);
  console.log(desc[4]);
  console.log(desc[5]);

  desc[0] .addEventListener('mouseover', function(){
    console.log('Ouch you mouseovered me.');
    console.log(desc[0]);
    desc[0].classList.toggle('on');
    desc[0].classList.toggle('text');
});

  desc[1] .addEventListener('mouseover', function(){
    console.log('Ouch you mouseovered me.');
    console.log(desc[1]);
    desc[1].classList.toggle('on');
    desc[1].classList.toggle('text');
  });

  desc[2] .addEventListener('mouseover', function(){
    console.log('Ouch you mouseovered me.');
    console.log(desc[2]);
    desc[2].classList.toggle('on');
    desc[2].classList.toggle('text');
  });

  desc[3] .addEventListener('mouseover', function(){
    console.log('Ouch you mouseovered me.');
    console.log(desc[3]);
    desc[3].classList.toggle('on');
    desc[3].classList.toggle('text');
  });

  desc[4] .addEventListener('mouseover', function(){
    console.log('Ouch you mouseovered me.');
    console.log(desc[4]);
    desc[4].classList.toggle('on');
    desc[4].classList.toggle('text');
  });

  desc[5] .addEventListener('mouseover', function(){
    console.log('Ouch you mouseovered me.');
    console.log(desc[5]);
    desc[5].classList.toggle('on');
    desc[5].classList.toggle('text');
  });



};
