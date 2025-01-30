const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowleft = document.querySelector('.arrow_left')
const arrowright = document.querySelector('.arrow_right')
const bulletpoints = document.querySelector('.dots')
const imagebanner = document.querySelector('.banner-img')
const textbanner = document.querySelector('#banner p')
let indexslide = 0

function initDot() {
	slides.forEach((_, index) => {
		const dot = document.createElement('div')
		dot.classList.add('dot')
		if (index === 0) {
			dot.classList.add('dot_selected')
		}
		bulletpoints.appendChild(dot)
	});
}
initDot();

function updateDot() {
	const bulletpointslist = document.querySelectorAll('.dot')
	bulletpointslist.forEach((dot, index) => {
		if (index === indexslide) {
			dot.classList.add('dot_selected')
		}
		else {
			dot.classList.remove('dot_selected')
		}
	})
}

arrowright.addEventListener("click", () => {
	if (indexslide === slides.length-1) {
		indexslide = 0
	}
	else {
		indexslide++
	}
	updateBanner()
})

arrowleft.addEventListener("click", () => {
	if (indexslide === 0) {
		indexslide = 3
	}
	else {
		indexslide--
	}
	updateBanner()
})

function updateBanner() {
	imagebanner.src = `./assets/images/slideshow/${slides[indexslide].image}`
	textbanner.innerHTML = slides[indexslide].tagLine
	updateDot()
}
