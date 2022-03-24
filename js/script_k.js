let count = document.getElementById("buttonCountNumber");

document.getElementById("buttonCountPlus").onclick = function() {
  let countPlus = count.value;
  if(+countPlus <= 20){
    count.value++;
  }
}

document.getElementById("buttonCountMinus").onclick = function() {
  let countMinus = count.value;
  if(+countMinus >= 2){
    count.value--;
  }
}
const tabBody = document.querySelectorAll('.tab-item__body');
tabBody.forEach((elem) => {
	elem.addEventListener('mouseenter', function () {
		elem.parentElement.classList.add('active');
	});
	elem.addEventListener('mouseleave', function () {
		elem.parentElement.classList.remove('active');
	});
});

$('.single-prod-slider').slick();


$('.recomend-slider-block').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});