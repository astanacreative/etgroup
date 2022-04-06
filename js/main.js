$(document).ready(function () {
	$("#phone").mask("+7 (999) 999-99-99");
	
});



const scrollButton = document.querySelector(".scroll__button");
window.addEventListener("scroll", function (e) {
	let scrollPos = window.scrollY;
	if (scrollPos > 0) {
		scrollButton.classList.add("active");
	} else {
		scrollButton.classList.remove("active")
	}
});

const menuBurger = document.querySelector('.new-menu__block');
menuBurger.addEventListener('click', function () {
	if (!menuBurger.nextElementSibling.classList.contains('active')) {
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
	mobileFirst: true,
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

$('.next-btn').on("click", function (e) {
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

const menuBtn = document.querySelectorAll('.menu-block__li');
const menuBlock = document.querySelectorAll('.menu-block');

menuBtn.forEach((elem) => {
	elem.addEventListener('mouseenter', function () {
		elem.classList.add('active');
	});
	elem.addEventListener('mouseleave', function () {
		elem.classList.toggle('active');
	});
});

const sidebarBtn = document.querySelectorAll('.sidebar-item__li');

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
let openElement = document.querySelectorAll('order-buy-block');
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

const orBuyBlock= document.querySelectorAll('.order-buy-block');
const buyJsBtn = document.querySelectorAll('.next-js-btn');
let hiddenAreaIn = document.querySelector('.type-of-ship');
let hiddenAreaPayment=document.querySelector('.type-of-payment');
let hiddenSNP=document.querySelector('.type-of-snp');
let hiddenEmail=document.querySelector('.type-of-email');
let hiddenPhone=document.querySelector('.type-of-phone');
let hiddenCity=document.querySelector('.type-of-city');
let hiddenAdress=document.querySelector('.type-of-adress');
let OrderBtnSave=document.querySelector('.btn-order-save');
let OrderBtnSavePrice=document.querySelector('.order-btn-save-block');
buyJsBtn.forEach((elem) => {
	elem.addEventListener('click', function () {
		if (orBuyBlock[0] && orBuyBlock[1] && orBuyBlock[2]){
		elem.parentElement.parentElement.parentElement.parentElement.classList.add('active');
		elem.parentElement.parentElement.parentElement.parentElement.nextElementSibling.classList.add('open')
		hiddenAreaIn.textContent = elem.closest('.order-buy-block').querySelector('.js-input:checked').value;
		hiddenAreaPayment.textContent = elem.closest('.order-buy-block').querySelector('.js-input:checked').value;
		// hiddenEmail.textContent= elem.closest('.order-buy-block').getElementById('email').value;
		// hiddenPhone.textContent= elem.closest('.order-buy-block').getElementById('phone').value;
		// hiddenCity.textContent= elem.closest('.order-buy-block').getElementById('city').value;
		// hiddenAdress.textContent= elem.closest('.order-buy-block').getElementById('ship-adress').value;
		}
	}),
	elem.addEventListener('click', function(){
		if (orBuyBlock[3].classList.contains('active')){
			validate(elem);
			hiddenSNP.textContent = document.querySelector('.inputtext').value;
			hiddenEmail.textContent = document.querySelector('.email').value;
			hiddenPhone.textContent = document.querySelector('.phone').value;
			hiddenCity.textContent = document.querySelector('.city').value;
			hiddenAdress.textContent= document.querySelector('.ship').value;
	}
	}),
	elem.addEventListener('click', function(){
		if (orBuyBlock[4].classList.contains('open')){
			elem=OrderBtnSave;
			elem.classList.add('open');
			elem=OrderBtnSavePrice;
			elem.classList.add('open');	
		}
	})

});
// buyJsBtn.addEventListener('click', function(){
// 	if (orBuyBlock){
// 		OrderBtnSave.classList.add('open');
// 		OrderBtnSavePrice.classList.add('open');
// 	}
// });

const urFace= document.getElementById('ur-face');
let formSNP=document.getElementById('form-snp');
const physFace= document.getElementById('phys-face');
let CouPaym=document.getElementById('courer-payment');


function validate(e) {
	let snp = document.forms["order-form"]["form_name"].value;
	let urAdress = document.forms["order-form"]["ur-adress"].value;
	let email = document.forms["order-form"]["email"].value;
	let telephone = document.forms["order-form"]["telephone"].value;
	let city= document.forms["order-form"]["city"].value;
	let shipingAdress= document.forms["order-form"]["shiping-adress"].value;
	let iinBin= document.forms["order-form"]["iin-bin"].value;
	if (physFace.checked){
	if (snp == "") {
	alert("Укажите ваше Ф.И.О");
	e.parentElement.parentElement.parentElement.parentElement.classList.remove('active');
	e.parentElement.parentElement.parentElement.parentElement.nextElementSibling.classList.remove('open');
}
	
} else if (snp== "") {
	alert("Укажите название компании");
	e.parentElement.parentElement.parentElement.parentElement.classList.remove('active');
	e.parentElement.parentElement.parentElement.parentElement.nextElementSibling.classList.remove('open');
	}
	else if (urAdress == "") {
	alert("Укажите юридический адрес");
	e.parentElement.parentElement.parentElement.parentElement.classList.remove('active');
	e.parentElement.parentElement.parentElement.parentElement.nextElementSibling.classList.remove('open');
}
	else if (iinBin == "") {
	alert("Укажите ИНН/БИН");
	e.parentElement.parentElement.parentElement.parentElement.classList.remove('active');
	e.parentElement.parentElement.parentElement.parentElement.nextElementSibling.classList.remove('open');
}
	if (email == "" ) {
	alert("Укажите ваш Е-майл");
	e.parentElement.parentElement.parentElement.parentElement.classList.remove('active');
	e.parentElement.parentElement.parentElement.parentElement.nextElementSibling.classList.remove('open');
	}else if (telephone == "") {
	alert("Укажите ваш телефон");
	e.parentElement.parentElement.parentElement.parentElement.classList.remove('active');
	e.parentElement.parentElement.parentElement.parentElement.nextElementSibling.classList.remove('open');
	}else if (city == "") {
	alert("Укажите ваш город");
	e.parentElement.parentElement.parentElement.parentElement.classList.remove('active');
	e.parentElement.parentElement.parentElement.parentElement.nextElementSibling.classList.remove('open');
	}else if (shipingAdress == "") {
	alert("Укажите ваш адрес доставки");
	e.parentElement.parentElement.parentElement.parentElement.classList.remove('active');
	e.parentElement.parentElement.parentElement.parentElement.nextElementSibling.classList.remove('open');
	}
}

let urAdreses=document.querySelector('.ur-adresses');
if (urAdreses) {
	urFace.addEventListener('change', function(){
		if (this.checked){
			formSNP.innerHTML="Название компании";
			urAdreses.style.display="block";
			CouPaym.style.display="none";
		}
	});
}

const backBtnJs = document.querySelectorAll('.order-back-btn-a');
backBtnJs.forEach((elem) => {
	elem.addEventListener('click', function () {
		elem.parentElement.parentElement.parentElement.parentElement.classList.remove('open');
		elem.parentElement.parentElement.parentElement.parentElement.previousElementSibling.classList.remove('active')
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

	rangeSlider.noUiSlider.on('update', function (values, handle) {
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

	rangeSliderTwo.noUiSlider.on('update', function (values, handle) {
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
	elem.addEventListener('click', function () {
		if (!elem.parentElement.classList.contains('active')) {
			elem.parentElement.classList.add('active');
		} else {
			elem.parentElement.classList.remove('active');
		}
	});
});


const filterBtn = document.querySelector('.catalog-menu__inputs');
if (filterBtn) {
	filterBtn.addEventListener('click', function () {
		filterBtn.parentElement.classList.toggle('active');
	});
}

function openbox(id) {
	var all = document.querySelectorAll(".ship-block");
	for (var i = 0; i < all.length; i++) {
		if (all[i].id == id) {
			all[i].style.display = 'block';

		} else {
			all[i].style.display = 'none';
		}
	}
}
function openboxBank(id) {
	var sb = document.querySelectorAll(".bank-block");
	for (var i = 0; i < sb.length; i++) {
		if (sb[i].id == id) {
			sb[i].style.display = 'block';
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
		elem.addEventListener('click', function () {
			elem.parentElement.classList.toggle('active');
		});
	});
}


// const counter = function () {
// 	const btns = document.querySelectorAll('.counter__btn');
// 	btns.forEach(btn => {
// 		btn.addEventListener('click', function () {
// 			const direction = this.dataset.direction;
// 			const inp = this.parentElement.querySelector('.counter__value');
// 			const currentValue = +inp.value;
// 			let newValue;
// 			if (direction === 'plus') {

// 				newValue = currentValue + 1;
// 			} else {
// 				newValue = currentValue - 1 > 0 ? currentValue - 1 : 1;
// 			}
// 			inp.value = newValue;
// 		})
// 	});
// }
// counter();



// const removeButton = document.querySelector('.remove-button');
// const basketBlock = document.getElementById('basket');
// removeButton.addEventListener('click', function () {
// 	basketBlock.classList.add('remove');
// });

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
if (slider) {
	slider.addEventListener('mouseenter', function () {
		this.classList.add('active');
	});
	slider.addEventListener('mouseleave', function () {
		this.classList.remove('active');
	});
}



const formatNumber = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
const totalPriceWrapper = document.getElementById('total-price');
const subScale = document.getElementById('sub-price');
const getSubTotalPrice = (input) => Number(input.value) * (Number(input.dataset.price) - ((Number(input.dataset.price) * Number(input.dataset.scale))/100));

// const ACTION = {
// 	MINUS: 'minus',
// 	PLUS: 'plus',
// }

const allprice = () => {
	// const discountProduct = document.querySelector('.discount');
	let totalCost = 0;
	[...document.querySelectorAll('.item-price')].forEach((basketItem) => {
		totalCost += getSubTotalPrice(basketItem.querySelector('.counter__value'));
	});
	totalPriceWrapper.textContent = formatNumber(totalCost);
	totalPriceWrapper.dataset.value = totalCost;
	// subPriceWrapper.textContent = formatNumber(totalCost);
	// subPriceWrapper.dataset.value = totalCost;
}

const counter = function () {
	const btns = document.querySelectorAll('.counter__btn');
	btns.forEach((btn) => {
		btn.addEventListener('click', function () {
			const direction = this.dataset.direction;
			const input = this.parentElement.querySelector('.counter__value');
			const currentValue = +input.value;
			let newValue;
			if (direction === 'plus') {
				newValue = currentValue + 1;
				totalPriceWrapper.textContent = formatNumber(Number(totalPriceWrapper.dataset.value) + Number(input.dataset.price));
				totalPriceWrapper.dataset.value = Number(totalPriceWrapper.dataset.value) + Number(input.dataset.price);
			} else {
				if (currentValue - 1 > 0) {
					newValue = currentValue - 1;
					totalPriceWrapper.textContent = formatNumber(Number(totalPriceWrapper.dataset.value) - Number(input.dataset.price));
					totalPriceWrapper.dataset.value = Number(totalPriceWrapper.dataset.value) - Number(input.dataset.price);
				} else {
					newValue = 1;
				}

				// newValue = currentValue - 1 > 0 ? currentValue - 1 : 1;
			}
			input.value = newValue;
			const itemMain = btn.closest('.item-price');
			itemMain.querySelector('.all-price').textContent = `${formatNumber(getSubTotalPrice(input))} тг`;
		})
	});
}

const cardCatalog = document.querySelectorAll('.js-product');
const cardBasket = document.getElementById('cart-content');
const button = document.querySelector('.js-buy');
const removeBasket = document.querySelector('.remove-button');
let cartData = JSON.parse(localStorage.getItem('cart')) || {};
function basketButton() {
	cardCatalog.forEach((elem) => {
		elem.addEventListener('click', function (event) {
			if (event.target.classList.contains('js-buy')) {
				addToCart(elem);
				// console.log(elem)
				// console.log(elem.closest('.js-product'));
			}
			return false;
		});
	});
}
basketButton();

function getCartData() {
	return JSON.parse(localStorage.getItem('cart'));
}
// Записываем данные в LocalStorage
function setCartData(o) {
	localStorage.setItem('cart', JSON.stringify(o));
	return false;
}
// let cart = localStorage.getItem('cart');

function addToCart(e) {
	e.querySelector('.js-buy').disabled = true;
	e.querySelector('.catalog-section__submit').classList.add('active');
	e.querySelector('.js-buy').innerHTML = 'В корзине';
	// получаем данные корзины или создаём новый объект, если данных еще нет
	let parentBox = e.closest('.js-product');
		itemDataId = parentBox.getAttribute('data-id'), // родительский элемент кнопки "Добавить в корзину"
		itemId = e.closest('.js-product').getAttribute('data-id'),
		itemSrc = e.closest('.js-product').getAttribute('data-product-img'),
		itemSale = e.closest('.js-product').getAttribute('data-product-basket'),
		itemTitle = e.closest('.js-product').getAttribute('data-product-title'), // название товара
		itemPrice = Number(e.closest('.js-product').getAttribute('data-product-price')), // стоимость товара
		// itemOne = Number(e.closest('.js-product').querySelector('.counter__value').value);
		itemCount = Number(e.closest('.js-product').getAttribute('data-product-count')),
		itemSummaSale = itemPrice - ((itemSale * itemPrice) / 100),
		itemSumma = itemSummaSale * itemCount;
		// itemTotal = totalPriceWrapper.dataset.value;
		// itemTitle = parentBox.getAttribute('card__link'), // название товара
      // itemPrice = parentBox.getAttribute('.card__price'); // стоимость товара
		cartData[itemDataId]
	if (cartData.hasOwnProperty(itemDataId)) { // если такой товар уже в корзине, то добавляем +1 к его количеству
		e.querySelector('.js-buy').disabled = true;
		e.querySelector('.catalog-section__submit').classList.add('active');
		e.querySelector('.js-buy').innerHTML = 'В корзине';
	} else { // если товара в корзине еще нет, то добавляем в объект
		cartData[itemDataId] = {itemId, itemSrc, itemTitle, itemSale, itemPrice, itemCount, itemSumma, itemSummaSale};
	}
	if (!setCartData(cartData)) { // Обновляем данные в LocalStorage
		e.querySelector('.js-buy').disabled = true; // разблокируем кнопку после обновления LS
		e.querySelector('.catalog-section__submit').classList.add('active');
		e.querySelector('.js-buy').innerHTML = 'В корзине';
	}
	return false;
}

openCart();
function openCart(e){
	var cartData = getCartData(), // вытаскиваем все данные корзины
		totalItems = '';
	// если что-то в корзине уже есть, начинаем формировать данные для вывода
	if(cartData !== null){
		document.querySelector('.section-body__nomer').innerHTML = Object.keys(cartData).length; // 3
		totalItems = '<div class="basket-product__body" id="basket"><div class="basket-product__top product-top"><div class="product-top__one">Товары</div><div class="product-top__block"><div class="product-top__two">Скидка</div><div class="product-top__three">Цена</div><div class="product-top__four">Количество</div><div class="product-top__five">Сумма</div></div></div>';
		for(var items in cartData){
			totalItems += '<div class="basket-product__bottom product-bottom item-price" data-id="' + cartData[items].itemId + '">';
			for(var i = 0; i < 1; i++){
				totalItems += '<div class="product-bottom__one"><div class="product-bottom__image"><img src="' + cartData[items].itemSrc + '"alt=""></div><div class="product-bottom__title"><p>' + cartData[items].itemTitle + '</p></div></div>';
				totalItems += '<div class="product-bottom__block"><div class="product-bottom__two"><div class="product-bottom__text">Скидка:</div><div class="product-bottom__subtitle">' + cartData[items].itemSale + '%</div></div>';
				totalItems += '<div class="product-bottom__three"><div class="product-bottom__title price">' + cartData[items].itemPrice + ' тг/шт</div><div class="product-bottom__text">Розничная цена</div></div>';
				totalItems += '<div class="product-bottom__four"><div class="catalog-section__range"><form action=""><div class="counter_block big_basket" ><input type="button"  value="-" data-direction="minus" class="counter__btn counter__minus"><input value="' + cartData[items].itemCount + '" type="text" data-price="' + cartData[items].itemPrice + '" data-scale="' + cartData[items].itemSale + '" class="counter__value"><input type="button" value="+" data-direction="plus" class="counter__btn counter__plus"></div></form></div></div>';
				// totalItems += '<div class="product-bottom__four"><div class="section-bottom__range"><form action=""><div class="counter_block big_basket" ><input type="button"  value="-" class="counter__btn btn-minus"><input value="' + cartData[items].itemCount +'" type="text" data-price="' + cartData[items][3] + '" class="input"><input type="button" value="+" class="counter__btn btn-plus"></div></form></div></div>';
				totalItems += '<div class="product-bottom__five"><div class="product-bottom__text">Сумма:</div><div class="product-bottom__title all-price">' + cartData[items].itemSumma + ' тг </div></div>';
				totalItems += '<div class="product-bottom__remove"><a href="javascript:;"></a></div>';
			}
			totalItems += '</div></div>'
		}

		totalItems += '</div>';
		cardBasket.innerHTML = totalItems;
		} else {
		// если в корзине пусто, то сигнализируем об этом
		cardBasket.innerHTML = '<div class="basket__block"><div class="basket-null"><div class="basket-null__img"><img src="img/basket-cart.png" alt=""></div><div class="basket-null__content"><div class="basket-null__title">К сожалению, ваша корзина пуста</div><div class="basket-null__text"><p>Исправить это недоразумение очень просто: выберите в каталоге<br>интересующий товар<br>и нажмите кнопку «В корзину».</p></div><div class="basket-null__button"><a href="javascript:;">Закрыть</a></div></div></div></div>';
		const sectionSumma = document.querySelector('.section-summa');
		const sectionButtons = document.querySelector('.section-bottom__buttons');
		const sectionBodyRow = document.querySelector('.section-body__row');
		sectionBodyRow.style.display="none";
		removeBasket.style.display='none';
		sectionSumma.style.display='none';
		sectionButtons.style.display='none';
		}
		// document.querySelectorAll('.item-price').forEach((elem) => {
		// 	elem.addEventListener('click', function (event) {
		// 		console.log(event.target);
				// if(event.target.classList.contains('counter__minus')) {
				// 	cartData[items][5] -= 1;
				// 	setCartData(cartData);
				// 	console.log(cartData[items][5]);
				// }
				// if(event.target.classList.contains('counter__plus')) {
				// 	cartData[items][5] += 1;
				// 	setCartData(cartData);
				// 	console.log(cartData[items][5]);
				// }
		// 	});
		// });
		// const btns = document.querySelectorAll('.counter__btn');
		// btns.forEach(btn => {
		// 	btn.addEventListener('click', function () {
		// 		const direction = this.dataset.direction;
		// 		if (direction === 'plus') {
		// 			cartData[items].itemCount += 1;
		// 			setCartData(cartData);
		// 			console.log(cartData[items].itemCount);
		// 			console.log(items);
		// 		} else {
		// 			if(cartData[items].itemCount > 1) {
		// 				cartData[items].itemCount -= 1;
		// 				setCartData(cartData);
		// 			}
		// 		}
		// 	})
		// });
		const updateQuantityTotalPrice = (id, quantity) => {
			cartData[id].itemCount = quantity;
			cartData[id].itemSummaSale = cartData[id].itemPrice - ((cartData[id].itemSale * cartData[id].itemPrice) / 100);
			cartData[id].itemSumma = cartData[id].itemSummaSale * cartData[id].itemCount;
			setCartData(cartData);
		}
		const increaseQuantity = (id) => {
			const newQuantity = cartData[id].itemCount + 1;
			updateQuantityTotalPrice(id, newQuantity);
		}
		const decreaseQuantity = (id) => {
			const newQuantity = cartData[id].itemCount - 1;
			if (newQuantity >= 1) {
				updateQuantityTotalPrice(id, newQuantity);
			}
		}


		const deleteCartItem = (id) => {	
			// const cartItemDOMElement = cartDOMElement.querySelector(`[data-id="${id}"]`);
			// cartDOMElement.removeChild(cartItemDOMElement);
			
			delete cartData[id];
			setCartData(cartData)
			basketButton();
			// if(cartData[id] == undefined) {
			// 	localStorage.clear();
				// openCart();
			// }
		}

		const btns = document.querySelectorAll('.counter__btn');
		btns.forEach(btn => {
			btn.addEventListener('click', function () {
				const direction = this.dataset.direction;
				const cartDOMElement = btn.closest('.item-price')
				const productID = cartDOMElement.getAttribute('data-id');
				if (direction === 'plus') {
					increaseQuantity(productID);
				} else {
					decreaseQuantity(productID);
				}
			});
		});
		const removeOneElement = document.querySelectorAll('.product-bottom__remove');
		removeOneElement.forEach((elem) => {
			elem.addEventListener('click', function (event) {
				const cartDOMElement = event.target.closest('.item-price');
				console.log(cartDOMElement);
				cartDOMElement.style.display = 'none';
				setCartData(cartData);
				const productID = cartDOMElement.getAttribute('data-id');
				deleteCartItem(productID);
			});
		});
	
	allprice();
	counter();
	const btnClose = document.querySelector('.basket-null__button');
		if(btnClose) {
		btnClose.addEventListener('click', function () {
			btnClose.closest('.section').classList.remove('active');
		});
	}
	return false;
}

openCart();

const openBasket = document.getElementById('checkout');
if (openBasket) {
	openBasket.addEventListener('click', openCart);
}
const sectionSumma = document.querySelector('.section-summa');
const sectionButtons = document.querySelector('.section-bottom__buttons');
removeBasket.addEventListener('click', function () {
	localStorage.removeItem('cart');
	cardBasket.style.display='none';
	sectionSumma.style.display='none';
	sectionButtons.style.display='none';
});





// const tabsBasket = document.querySelectorAll('.section__link');
// const tabBasketItem = document.querySelectorAll('.section__body');
// const closeBasket = document.querySelector('.basket-null__button');
// tabsBasket.forEach(function (item) {
// 	item.addEventListener('click', function () {
// 		let currentBtn = item;
// 		let tabId = currentBtn.getAttribute('data-basket');
// 		let currentTab = document.querySelector(tabId);

// 		if (!currentBtn.classList.contains('active')) {

// 			tabsBasket.forEach(function (item) {
// 				item.classList.remove('active');
// 			});
// 			tabBasketItem.forEach(function (item) {
// 				item.classList.remove('active');
// 			});
// 			currentBtn.classList.add('active');
// 			currentTab.classList.add('active');
// 		} else {
// 			tabsBasket.forEach(function (item) {
// 				item.classList.remove('active');
// 			});
// 			tabBasketItem.forEach(function (item) {
// 				item.classList.remove('active');
// 			});
// 		}
// 	});
// });


const btnSection = document.querySelector('.section__button');
btnSection.addEventListener('click', function (event) {
	event.target.closest('.section').classList.toggle('active')
});



