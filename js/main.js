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

let orBuyBlock = document.querySelectorAll('.order-buy-block');
const buyJsBtn = document.querySelectorAll('.next-js-btn');
let hiddenAreaIn = document.querySelector('.type-of-ship');
let hiddenAreaPayment = document.querySelector('.type-of-payment');
let hiddenSNP = document.querySelector('.type-of-snp');
let hiddenEmail = document.querySelector('.type-of-email');
let hiddenPhone = document.querySelector('.type-of-phone');
let hiddenCity = document.querySelector('.type-of-city');
let hiddenAdress = document.querySelector('.type-of-adress');
buyJsBtn.forEach((elem) => {
	elem.addEventListener('click', function () {
		elem.parentElement.parentElement.parentElement.parentElement.classList.add('active');
		elem.parentElement.parentElement.parentElement.parentElement.nextElementSibling.classList.add('open')
		hiddenAreaIn.textContent = elem.closest('.order-buy-block').querySelector('.js-input:checked').value;
		hiddenAreaPayment.textContent = elem.closest('.order-buy-block').querySelector('.js-input:checked').value;
		// hiddenEmail.textContent= elem.closest('.order-buy-block').getElementById('email').value;
		// hiddenPhone.textContent= elem.closest('.order-buy-block').getElementById('phone').value;
		// hiddenCity.textContent= elem.closest('.order-buy-block').getElementById('city').value;
		// hiddenAdress.textContent= elem.closest('.order-buy-block').getElementById('ship-adress').value;
	}),
		elem.addEventListener('click', function () {
			hiddenSNP.textContent = document.querySelector('.inputtext').value;
			hiddenEmail.textContent = document.querySelector('.email').value;
			hiddenPhone.textContent = document.querySelector('.phone').value;
			hiddenCity.textContent = document.querySelector('.city').value;
			hiddenAdress.textContent = document.querySelector('.ship').value;
		})
});

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


const cardCatalog = document.querySelectorAll('.js-product');
const cardBasket = document.getElementById('cart-content');
const button = document.querySelector('.js-buy');
const removeBasket = document.querySelector('.remove-button');
let cartData = JSON.parse(localStorage.getItem('cart')) || {};
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

function getCartData() {
	return JSON.parse(localStorage.getItem('cart'));
}
// Записываем данные в LocalStorage
function setCartData(o) {
	localStorage.setItem('cart', JSON.stringify(o));
	return false;
}



function addToCart(e) {
	e.querySelector('.js-buy').disabled = true;
	e.querySelector('.catalog-section__submit').classList.add('active');
	e.querySelector('.catalog-section__range').style.display = 'none';
	e.querySelector('.js-buy').innerHTML = 'В корзине';
	// получаем данные корзины или создаём новый объект, если данных еще нет
	let parentBox = e.closest('.js-product');
		itemId = parentBox.getAttribute('data-id'), // родительский элемент кнопки "Добавить в корзину"
		itemSrc = e.closest('.js-product').getAttribute('data-product-img'),
		itemBasket = e.closest('.js-product').getAttribute('data-product-basket'),
		itemTitle = e.closest('.js-product').getAttribute('data-product-title'), // название товара
		itemPrice = e.closest('.js-product').getAttribute('data-product-price'), // стоимость товара
		itemOne = Number(e.closest('.js-product').querySelector('.counter__value').value),
		itemTotal = totalPriceWrapper.textContent;
		// itemTitle = parentBox.getAttribute('card__link'), // название товара
      // itemPrice = parentBox.getAttribute('.card__price'); // стоимость товара
	if (cartData.hasOwnProperty(itemId)) { // если такой товар уже в корзине, то добавляем +1 к его количеству
		e.querySelector('.js-buy').disabled = true;
		e.querySelector('.catalog-section__submit').classList.add('active');
		e.querySelector('.catalog-section__range').style.display = 'none';
		e.querySelector('.js-buy').innerHTML = 'В корзине';
	} else { // если товара в корзине еще нет, то добавляем в объект
		cartData[itemId] = [itemSrc, itemTitle, itemBasket, itemPrice, itemOne, itemTotal];
	}
	if (!setCartData(cartData)) { // Обновляем данные в LocalStorage
		this.disabled = false; // разблокируем кнопку после обновления LS
	}
	console.log(e.closest('.js-product').querySelector('.card-img'))
	return false;
}
function openCart(e){

	var cartData = getCartData(), // вытаскиваем все данные корзины
		totalItems = '';
	// если что-то в корзине уже есть, начинаем формировать данные для вывода
	if(cartData !== null){
		document.querySelector('.section-body__nomer').innerHTML = Object.keys(cartData).length; // 3
		totalItems = '<div class="basket-product__body" id="basket"><div class="basket-product__top product-top"><div class="product-top__one">Товары</div><div class="product-top__block"><div class="product-top__two">Скидка</div><div class="product-top__three">Цена</div><div class="product-top__four">Количество</div><div class="product-top__five">Сумма</div><div class="product-top__six"></div></div></div>';
		for(var items in cartData){
			console.log(cartData[items][3]);
			totalItems += '<div class="basket-product__bottom product-bottom item-price">';
			for(var i = 0; i < 1; i++){
				// totalItems += '<div class="section-bottom__image"><img src="' + cartData[items][0] + '" alt=""></div>';
				// totalItems += '<div class="section-bottom__two"><div class="section-bottom__subtitle discount">' + cartData[items][1] + '</div></div>';
				// totalItems += '<div class="section-bottom__link"><a href="">' + cartData[items][2] + '</a></div>';
				// totalItems += '<div class="section-bottom__three"><div class="section-bottom__text">Розничная цена</div>' + cartData[items][3] + '</div>';
				totalItems += '<div class="product-bottom__one"><div class="product-bottom__image"><img src="' + cartData[items][0] + '"alt=""></div><div class="product-bottom__title"><p>' + cartData[items][1] + '</p></div></div>';
				// totalItems += '<td>' + cartData[items][1] + '</td>';
				totalItems += '<div class="product-bottom__block"><div class="product-bottom__two"><div class="product-bottom__text">Скидка:</div><div class="product-bottom__subtitle">' + cartData[items][2] + '%</div></div>';
				totalItems += '<div class="product-bottom__three"><div class="product-bottom__title price">' + cartData[items][3] + 'тг</div><div class="product-bottom__text">Розничная цена</div></div>';
				totalItems += '<div class="product-bottom__four"><div class="catalog-section__range"><form action=""><div class="counter_block big_basket" ><input type="button"  value="-" class="counter__btn btn-minus"><input value="' + cartData[items][4] + '" type="text" data-price="' + cartData[items][3]  + '" class="input"><input type="button" value="+" class="counter__btn btn-plus"></div></form><div class="product-bottom__text">шт</div></div></div>';
				totalItems += '<div class="product-bottom__five"><div class="product-bottom__text">Сумма:</div><div class="product-bottom__title all-price">' + cartData[items][4] * cartData[items][3] + '</div></div>';
				totalItems += '<div class="product-bottom__six"><div class="product-bottom__icon"><a href=""><img src="img/like-icon.png" alt=""></a></div></div><div class="product-bottom__remove"><a href=""></a></div>';
			}
			totalItems += '</div></div>';
		}
		totalItems += '</div>';
		cardBasket.innerHTML = totalItems;
		} else {
		// если в корзине пусто, то сигнализируем об этом
		cardBasket.innerHTML = '<div class="basket__block"><div class="basket-null"><div class="basket-null__img"><img src="img/basket-cart.png" alt=""></div><div class="basket-null__content"><div class="basket-null__title">К сожалению, ваша корзина пуста</div><div class="basket-null__text"><p>Исправить это недоразумение очень просто: выберите в каталоге<br>интер        есующий товар<br>и нажмите кнопку «В корзину».</p></div><div class="basket-null__button"><a href="javascript:;">Закрыть</a></div></div></div></div>';
		const sectionSumma = document.querySelector('.section-summa');
		const sectionButtons = document.querySelector('.section-bottom__buttons');
		const sectionBodyRow = document.querySelector('.section-body__row');
		sectionBodyRow.style.display="none";
		removeBasket.style.display='none';
		sectionSumma.style.display='none';
		sectionButtons.style.display='none';
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
	if (event.target.classList.contains('btn-minus')) {
		console.log('minus');
		calculateSeparateItem(
			event.target.closest('.item-price'),
			ACTION.MINUS
		);
	}
	if (event.target.classList.contains('btn-plus')) {
		console.log('plus');
		calculateSeparateItem(
			event.target.closest('.item-price'),
			ACTION.PLUS
		);
	}
});

allprice();

const tabsBasket = document.querySelectorAll('.section__link');
const tabBasketItem = document.querySelectorAll('.section__body');
tabsBasket.forEach(function (item) {
	item.addEventListener('click', function () {
		let currentBtn = item;
		let tabId = currentBtn.getAttribute('data-basket');
		let currentTab = document.querySelector(tabId);

		if (!currentBtn.classList.contains('active')) {

			tabsBasket.forEach(function (item) {
				item.classList.remove('active');
			});
			tabBasketItem.forEach(function (item) {
				item.classList.remove('active');
			});
			currentBtn.classList.add('active');
			currentTab.classList.add('active');
		} else {
			tabsBasket.forEach(function (item) {
				item.classList.remove('active');
			});
			tabBasketItem.forEach(function (item) {
				item.classList.remove('active');
			});
		}
	});
});