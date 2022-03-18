let calculate = document.getElementById("calculation");
let count = document.getElementById("buttonCountNumber");

document.getElementById("buttonCountPlus").onclick = function() {
  let countPlus = count.innerHTML;
  if(+countPlus <= 20){
    count.value++;
    let countPlus = count.innerHTML;
    calculate.innerHTML = calculations(countPlus) ;
  }
}

document.getElementById("buttonCountMinus").onclick = function() {
  let countMinus = count.value;
  if(+countMinus >= 2){
    count.value--;
    let countMinus = count.value;
    calculate.innerHTML = calculations(countMinus) ;
  }
}

calculations = (count) => {
  return count ;
}

$('.single-prod-slider').slick();