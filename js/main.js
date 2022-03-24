$(document).ready(function() {
	$("#phone").mask("+7 (999) 999-99-99");
});



const scrollButton = document.querySelector(".scroll__button");
window.addEventListener("scroll", function(e) {
	let scrollPos = window.scrollY;
		if(scrollPos > 0) {
			scrollButton.classList.add("active");
		} else {
			scrollButton.classList.remove("active")
		}
});

const menuBurger = document.querySelector('.new-menu__block');
menuBurger.addEventListener('click', function () {
	if(!menuBurger.nextElementSibling.classList.contains('active')) {
		menuBurger.nextElementSibling.classList.add('active');
	} else {
		menuBurger.nextElementSibling.classList.remove('active');
	}
});


const newList = document.querySelectorAll('.new-menu__li');
newList.forEach((elem) => {
	elem.addEventListener('click', function () {
		this.classList.toggle('active');
	});
});

$(document).ready(function () {
	$('.slider').slick({
		dots: false,
		arrows: false,
		adaptiveHeight: true,
		slidesToShow: 8,
		slidesToScroll: 2,
		speed: 800,
		autoplay: false,
		autoplaySpeed: 800,
		rows: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 6,
				}
			}, {
				breakpoint: 1000,
				settings: {
					slidesToShow: 5,
				}
			}, {
				breakpoint: 768,
				settings: {
					arrows: true,
					slidesToShow: 4,
				}
			}, {
				breakpoint: 568,
				settings: {
					arrows: true,
					slidesToShow: 3,
				}
			}, {
				breakpoint: 400,
				settings: {
					arrows: true,
					slidesToShow: 2,
				}
			}
		]
	});
});
$('.single-prod-slider').slick();

$('.recomend-slider-block').slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 4,
	mobileFirst:true,
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
	  },
	  {
		breakpoint: 380,
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




const mouseCatalog = document.querySelectorAll('.main-catalog__item');
mouseCatalog.forEach((elem) => {
	elem.addEventListener('mouseenter', function () {
		elem.classList.add('active');
	});
	elem.addEventListener('mouseleave', function () {
		elem.classList.toggle('active');
	});
});

const	menuBtn = document.querySelectorAll('.menu-block__li');
const	menuBlock = document.querySelectorAll('.menu-block');

menuBtn.forEach((elem) => {
	elem.addEventListener('mouseenter', function () {
		elem.classList.add('active');
	});
	elem.addEventListener('mouseleave', function () {
		elem.classList.toggle('active');
	});
});

const	sidebarBtn = document.querySelectorAll('.sidebar-item__li');

sidebarBtn.forEach((elem) => {
	elem.addEventListener('mouseenter', function () {
		elem.classList.add('active');
	});
	elem.addEventListener('mouseleave', function () {
		elem.classList.toggle('active');
	});
});

const tabBody = document.querySelectorAll('.tab-item__body');
tabBody.forEach((elem) => {
	elem.addEventListener('mouseenter', function () {
		elem.parentElement.classList.add('active');
	});
	elem.addEventListener('mouseleave', function () {
		elem.parentElement.classList.remove('active');
	});
});

const menuItemButton = document.querySelector('.sidebar-item_active');

menuItemButton.addEventListener('mouseenter', function () {
	this.classList.add('active');
});
menuItemButton.addEventListener('mouseleave', function () {
	this.classList.remove('active');
});


const slider = document.querySelector('#carouselExampleIndicators');


const tabsBtn = document.querySelectorAll('.tabs-btn');
const tabItems = document.querySelectorAll('.tabs__row');
const tabMenu = document.querySelectorAll('.tabs__menu');
tabsBtn.forEach(function (item) {
	item.addEventListener('click', function () {
		let currentBtn = item;
		let tabId = currentBtn.getAttribute('data-tab');
		let currentTab = document.querySelector(tabId);	

		if (!currentBtn.classList.contains('active')) {

			tabsBtn.forEach(function (item) {
				item.classList.remove('active');
			});
			tabItems.forEach(function (item) {
				item.classList.remove('active');
			});
			currentBtn.classList.add('active');
			currentTab.classList.add('active');
		} else {
			tabsBtn.forEach(function (item) {
				item.classList.remove('active');
			});
			tabItems.forEach(function (item) {
				item.classList.remove('active');
			});
		} 
	});
});

const count = document.querySelectorAll(".buttonCountNumber");
count.forEach((elem) => {
	document.querySelectorAll(".buttonCountPlus").forEach((link) => {
		link.addEventListener('click', function () {
			let countPlus = elem.innerHTML;
			if(countPlus <= 20){
				elem.value++;
			}
		});
	});
	document.querySelectorAll(".buttonCountMinus").forEach((link) => {
		link.addEventListener('click', function () {
			let countMinus = elem.value;
			if(countMinus >= 2){
				elem.value--;
			}
		});
	});
});


const rangeSlider = document.getElementById('range-slider');
if (rangeSlider) {
	noUiSlider.create(rangeSlider, {
		start: [0, 94700],
		connect: true,
		step: 1,
		limit: 94700,
		pips: {
			mode: 'values',
			values: [30000, 95000],
			density: 0,
			stepped: false
		},
		range: {
			'min': 30000,
			'max': 95000
		},
	});
	const input0 = document.getElementById('range_1');
	const input1 = document.getElementById('range_2');
	const inputs = [input0, input1];

	rangeSlider.noUiSlider.on('update', function(values, handle){
		inputs[handle].value = Math.round(values[handle]);
	});

	const setRangeSlider = (i, value) => {
		let arr = [null, null];
		arr[i] = value;

		console.log(arr);

		rangeSlider.noUiSlider.set(arr);
	};

	inputs.forEach((el, index) => {
		el.addEventListener('change', (e) => {
			console.log(index);
			setRangeSlider(index, e.currentTarget.value);
		});
	});
};

const rangeSliderTwo = document.getElementById('range-slider_two');
if (rangeSliderTwo) {
	noUiSlider.create(rangeSliderTwo, {
		start: [0, 94700],
		connect: true,
		step: 1,
		limit: 94700,
		pips: {
			mode: 'values',
			values: [30000, 95000],
			density: 0,
			stepped: false
		},
		range: {
			'min': 30000,
			'max': 95000
		},
	});
	const input0 = document.getElementById('rangetwo_1');
	const input1 = document.getElementById('rangetwo_2');
	const inputs = [input0, input1];

	rangeSliderTwo.noUiSlider.on('update', function(values, handle){
		inputs[handle].value = Math.round(values[handle]);
	});

	const setRangeSliderTwo = (i, value) => {
		let arr = [null, null];
		arr[i] = value;

		console.log(arr);

		rangeSliderTwo.noUiSlider.set(arr);
	};

	inputs.forEach((el, index) => {
		el.addEventListener('change', (e) => {
			console.log(index);
			setRangeSliderTwo(index, e.currentTarget.value);
		});
	});
};

const prodShare = document.querySelector('.prod-share');
prodShare.addEventListener('click', function () {
	this.parentElement.classList.toggle('active');
});

const inputButton = document.querySelectorAll('.catalog-inputs__button');
inputButton.forEach((elem) => {
	elem.addEventListener('click', function() {
		if(!elem.parentElement.classList.contains('active')) {
			elem.parentElement.classList.add('active');
		} else {
			elem.parentElement.classList.remove('active');
		}
	});
});
const filterBtn = document.querySelector('.catalog-menu__inputs');
filterBtn.addEventListener('click', function() {
	filterBtn.parentElement.classList.toggle('active');
});



// const btnMinus = document.getElementById('buttonCountMinus');
// const btnPlus = document.getElementById('buttonCountPlus');
// const btnInput = document.getElementById('buttonCountNumber')
// btnMinus.addEventListener('click', function () {
// 	let btnValue = btnInput.value;
// 	btnInput.value = parseInt(btnValue) - 1;
// });
// btnPlus.addEventListener('click', function () {
// 	let btnValue = btnInput.value;
// 	btnInput.value = parseInt(btnValue) + 1;
// });



/* SLIDER MAIN MENU */
slider.addEventListener('mouseenter', function () {
	this.classList.add('active');
});
slider.addEventListener('mouseleave', function () {
	this.classList.remove('active');
});





