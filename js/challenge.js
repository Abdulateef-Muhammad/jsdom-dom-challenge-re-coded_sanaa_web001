document.addEventListener('DOMContentLoaded', function() {

  let plus = select('plus');
  let minus = select('minus');
  let pause = select('pause');
  let heart = select('heart');
  let counter = select('counter');
  
  plus.addEventListener('click' function() {
    console.log(counter.innerText);
  });
  
});

function select(elementId) {
  return document.getElementById(elementId);
}