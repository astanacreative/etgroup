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

// $(document).ready(function () {
// 	$('.slider').slick({
// 		dots: true,
// 		adaptiveHeight: true,
// 		slidesToShow: 1,
// 		slidesToScroll: 1,
// 		speed: 800,
// 		initialSlide: 0,
// 		autoplay: false,
// 		autoplaySpeed: 800,
// 		rows: 1,
// 		responsive: [
// 			{
// 				breakpoint: 1200,
// 				settings: {
// 					slidesToShow: 1,
// 					slidesToScroll: 1,
// 				}
// 			}, {
// 				breakpoint: 1000,
// 				settings: {
// 					slidesToShow: 1,
// 					slidesToScroll: 1,
// 				}
// 			}, {
// 				breakpoint: 768,
// 				settings: {
// 					arrows: false,
// 					slidesToShow: 1,
// 					slidesToScroll: 1,
// 					dots: true,
// 				}
// 			}
// 		]
// 	});
// });


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

slider.addEventListener('mouseenter', function () {
	this.classList.add('active');
});
slider.addEventListener('mouseleave', function () {
	this.classList.remove('active');
});

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

