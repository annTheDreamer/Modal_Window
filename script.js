'use strict';

const quotesEinstein = document.getElementById('einstein-quotes');
const quotesRoosevelt = document.getElementById('roosevelt-quotes');
const quotesWilde = document.getElementById('wilde-quotes');
const quotesMandela = document.getElementById('mandela-quotes');
const quotesConfucius = document.getElementById('confucius-quotes');
const quotesDickens = document.getElementById('dickens-quotes');
const quotesChurchill = document.getElementById('churchill-quotes');
const quotesJefferson = document.getElementById('jefferson-quotes');
const quotesAristotle = document.getElementById('aristotle-quotes');

const btnOpenQuotes = document.querySelectorAll('.show-quotes');
const btnCloseQuotes = document.querySelectorAll('.close-quotes');
const overlay = document.querySelector('.overlay');

const quotes = [
	quotesEinstein,
	quotesRoosevelt,
	quotesWilde,
	quotesMandela,
	quotesConfucius,
	quotesDickens,
	quotesChurchill,
	quotesJefferson,
	quotesAristotle,
];

//Checking whether a particular element with the class className also has the hidden class or not; if it does, the quotes are not displayed. The function removes the hidden class from both the div with the quotes, and the overlay if one of the elements from the array has the class className.
const openQuotes = function (className) {
	for (let i = 0; i < quotes.length; i++) {
		if (quotes[i].classList.contains(className)) {
			quotes[i].classList.remove('hidden');
			overlay.classList.remove('hidden');
			break;
		}
	}
};

//Same as in the case with openQuotes, except this time the hidden class is added to the div with the passed argument for className.
const closeQuotes = function (className) {
	for (let i = 0; i < quotes.length; i++) {
		if (quotes[i].classList.contains(className)) {
			quotes[i].classList.add('hidden');
			overlay.classList.add('hidden');
			break;
		}
	}
};

//Checking whether a particular div doesn't contain the class hidden - if it doesn't, the function is adding it to both the div and the overlay element
const closeOverlay = function () {
	for (let i = 0; i < quotes.length; i++) {
		if (!quotes[i].classList.contains('hidden')) {
			quotes[i].classList.add('hidden');
			overlay.classList.add('hidden');
			break;
		}
	}
};

//Adding an event listener to all the buttons; the cName variable takes the second class of the button element and then is used as an argument in the openQuotes function, in the event listener. After the loop is finished, all the buttons have event listeners attached to them, with the correct divs that contain the quotes.
for (let i = 0; i < btnOpenQuotes.length; i++) {
	let cName = btnOpenQuotes[i].classList[1];
	btnOpenQuotes[i].addEventListener('click', () => {
		openQuotes(`quotes-${cName}`);
	});
}

//Same as adding the event listener for opening the quotes, except this time it's about closing the modal window with the quotes. The split function here is needed because of the way the classes in the close buttons were written. After getting the class of the element in question, the event listener is added on the corresponding closing button, and the actual closing is done by the closeQuotes function.
for (let i = 0; i < btnCloseQuotes.length; i++) {
	let cName = btnCloseQuotes[i].classList[1].split('-')[1];
	btnCloseQuotes[i].addEventListener('click', () => {
		closeQuotes(`quotes-${cName}`);
	});
}

//Adding the event listener for closing the modal window by clicking on the overlay
overlay.addEventListener('click', closeOverlay);

//Adding the event listener for closing the modal window by pressing the Esc key. The event listener is added on the whole document, so to distinguish between keys, the event object is accessed => when the Esc key is pressed, the closeOverlay function is executed.
document.addEventListener('keydown', function (event) {
	console.log(event);
	if (event.key === 'Escape') closeOverlay();
});
