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

$('.next-btn').on("click", function(e) {
	const target = e.target
	if (target.classList.contains('active')) {
		$(target.childNodes[3]).slideUp();
		target.classList.remove('active')
	} else {
		$('.accord__content').slideUp();
		$(target.childNodes[3]).slideDown();
		$('.accord__item').removeClass('active')
		target.classList.add('active')
	}
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


const buyBtn = document.querySelectorAll('.next-btn');
let hiddenAreaFace = document.querySelector('.order-buy-rdy span');
let openElement=document.querySelectorAll('order-buy-block');
buyBtn.forEach((elem) => {
	elem.addEventListener('click', function () {
		elem.parentElement.parentElement.classList.add('active');
		elem.parentElement.parentElement.nextElementSibling.classList.add('open')
		hiddenAreaFace.textContent = elem.closest('.order-buy-block').querySelector('.js-input:checked').value;
	});
});

let changeBtn = document.querySelectorAll('.order-change-btn');

changeBtn.forEach((elem) => {
	elem.addEventListener('click', function () {
		elem.parentElement.parentElement.classList.remove('active');
});
});

// let orBuyBlock= document.querySelectorAll('.order-buy-block');
// const buyJsBtn = document.querySelectorAll('.next-js-btn');
// let hiddenAreaIn = document.querySelector('.type-of-ship');
// let hiddenAreaPayment=document.querySelector('.type-of-payment');
// let hiddenSNP=document.querySelector('.type-of-snp');
// let hiddenEmail=document.querySelector('.type-of-email');
// let hiddenPhone=document.querySelector('.type-of-phone');
// let hiddenCity=document.querySelector('.type-of-city');
// let hiddenAdress=document.querySelector('.type-of-adress');
// let snpInf= document.getElementById('snp').value;
// console.log(snpInf);
// buyJsBtn.forEach((elem) => {
// 	elem.addEventListener('click', function () {
// 		elem.parentElement.parentElement.parentElement.parentElement.classList.add('active');
// 		elem.parentElement.parentElement.parentElement.parentElement.nextElementSibling.classList.add('open')
// 		hiddenAreaIn.textContent= elem.closest('.order-buy-block').querySelector('.js-input:checked').value;
// 		hiddenAreaPayment.textContent= elem.closest('.order-buy-block').querySelector('.js-input:checked').value;
// 		hiddenSNP.textContent= document.getElementById('snp').value;
// 		// hiddenEmail.textContent= elem.closest('.order-buy-block').getElementById('email').value;
// 		// hiddenPhone.textContent= elem.closest('.order-buy-block').getElementById('phone').value;
// 		// hiddenCity.textContent= elem.closest('.order-buy-block').getElementById('city').value;
// 		// hiddenAdress.textContent= elem.closest('.order-buy-block').getElementById('ship-adress').value;
// 	});
// });
// const backBtnJs = document.querySelectorAll('.order-back-btn-a');
// backBtnJs.forEach((elem) => {
// 	elem.addEventListener('click', function () {
// 		elem.parentElement.parentElement.parentElement.parentElement.classList.remove('open');
// 		elem.parentElement.parentElement.parentElement.parentElement.previousElementSibling.classList.remove('active')	
// 	});
// });



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
if (prodShare) {
prodShare.addEventListener('click', function () {
	this.parentElement.classList.toggle('active');
});
}



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
if (filterBtn) {
filterBtn.addEventListener('click', function() {
	filterBtn.parentElement.classList.toggle('active');
});
}

function openbox(id) {
	var all = document.querySelectorAll(".ship-block");
	for (var i = 0; i < all.length; i++) {
		if (all[i].id == id) {
			all[i].style.display ='block' ;         
			
		} else {
			all[i].style.display = 'none';
		}
	}
}
function openboxBank(id){
	var sb = document.querySelectorAll(".bank-block");
	for (var i = 0; i < sb.length; i++) {
		if (sb[i].id == id) {
			sb[i].style.display ='block' ;         
			
		} else {
			sb[i].style.display = 'none';
		}
	}
}

const articlesBtn = document.querySelector('.articles-two__button');
const articlesBottom = document.querySelector('.articles-two__bottom');
if (articlesBtn) {
	articlesBtn.addEventListener('click', function () {
		articlesBottom.classList.toggle('active');
	});
	const articlesColumnBtn = document.querySelectorAll('.articles-column__block');
	articlesColumnBtn.forEach((elem) => {
		elem.addEventListener('click', function() {
			elem.parentElement.classList.toggle('active');
		});
	});
}


const sectionBtn = document.querySelectorAll('.section__button');
const section = document.querySelector('.section');
sectionBtn.forEach((elem) => {
	elem.addEventListener('click', function () {
		section.classList.toggle('active');
	});
});

const formatNumber = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

const totalPriceWrapper = document.getElementById('total-price');
// const subPriceWrapper = document.getElementById('sub-price');

const getSubTotalPrice = (input) => Number(input.value) * Number(input.dataset.price);

const ACTION = {
	MINUS: 'minus',
	PLUS: 'plus',
}

const allprice = () => {
	const discountProduct = document.querySelector('.discount')
	let totalCost = 0;
	[...document.querySelectorAll('.item-price')].forEach((basketItem) => {
		totalCost += getSubTotalPrice(basketItem.querySelector('.input'));
	});
	totalPriceWrapper.textContent = formatNumber(totalCost);
	totalPriceWrapper.dataset.value = totalCost;
	// subPriceWrapper.textContent = formatNumber(totalCost);
	// subPriceWrapper.dataset.value = totalCost;
}
const calculateSeparateItem = (basketItem, action) => {
	const input = basketItem.querySelector('.input');
	switch (action) {
		case ACTION.PLUS:
			input.value++;
			totalPriceWrapper.textContent = formatNumber(Number(totalPriceWrapper.dataset.value) + Number(input.dataset.price));
			totalPriceWrapper.dataset.value = Number(totalPriceWrapper.dataset.value) + Number(input.dataset.price);
			// subPriceWrapper.textContent = formatNumber(Number(totalPriceWrapper.dataset.value) + Number(input.dataset.price));
			// subPriceWrapper.dataset.value = Number.parseInt(totalPriceWrapper.dataset.value) + Number(input.dataset.price);
			break;
		case ACTION.MINUS:
			// input.value = input.value - 1 > 0 ? input.value - 1 : 1
			if (input.value - 1 > 0) {
				input.value--;
				totalPriceWrapper.textContent = formatNumber(Number(totalPriceWrapper.dataset.value) - Number(input.dataset.price));
				totalPriceWrapper.dataset.value = Number(totalPriceWrapper.dataset.value) - Number(input.dataset.price);
			} 
			// input.value--;
			// subPriceWrapper.textContent = formatNumber(Number.parseInt(totalPriceWrapper.dataset.value) - Number(input.dataset.price));
			// subPriceWrapper.dataset.value = Number(totalPriceWrapper.dataset.value) - Number(input.dataset.price);
			break;
	}
	basketItem.querySelector('.all-price').textContent = `${formatNumber(getSubTotalPrice(input))} тг`;
};

document.getElementById('basket').addEventListener('click', (event) => {
	if(event.target.classList.contains('btn-minus')) {
		console.log('minus');
		calculateSeparateItem(
			event.target.closest('.item-price'),
			ACTION.MINUS
		);
	}
	if(event.target.classList.contains('btn-plus')) {
		console.log('plus');
		calculateSeparateItem(
			event.target.closest('.item-price'),
			ACTION.PLUS
		);
	}
});

allprice();



const counter = function () {
	const btns = document.querySelectorAll('.counter__btn');
	btns.forEach(btn => {
		btn.addEventListener('click', function () {
		const direction = this.dataset.direction;
		const inp = this.parentElement.querySelector('.counter__value');
		const currentValue = +inp.value;
		let newValue;
		if (direction === 'plus') {

			newValue = currentValue + 1;
		} else {
			newValue = currentValue - 1 > 0 ? currentValue - 1 : 1;
		}
			inp.value = newValue;
		})
	}); 
}
counter();



const removeButton = document.querySelector('.remove-button'); 
const basketBlock = document.getElementById('basket');
removeButton.addEventListener('click', function () {
	basketBlock.classList.add('remove');
});

// const totalPriceWrapper = document.getElementById('total-price');
// const getItemSubTotalPrice = (input) => Number(input.value) 


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
if (slider){
slider.addEventListener('mouseenter', function () {
	this.classList.add('active');
});
slider.addEventListener('mouseleave', function () {
	this.classList.remove('active');
});
}






