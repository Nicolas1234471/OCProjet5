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
const bulletpointslist = document.querySelectorAll('.dot')
let indexslide = 0

function initdot() {
	slides.forEach((_, index) => {
		const dot = document.createElement('div')
		dot.classList.add('dot')
		if (index === 0) {
			dot.classList.add('dot_selected')
		}
		bulletpoints.appendChild(dot)
	});
}
initdot();

function updateDot() {
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
	alert('Clic flèche de droite')
	indexslide++
	updateBanner()
})

arrowleft.addEventListener("click", () => {
	alert('Clic flèche de gauche')
	indexslide--
	updateBanner()
})

function updateBanner() {
	imagebanner.src = `./assets/images/slideshow/${slides[indexslide].image}`
	textbanner.innerHTML = slides[indexslide].tagLine
	updateDot()
}


/* function changebanner() {
	slides.forEach((_, index) => {
		if (index === 0) 
			imagebanner.src = "./assets/images/slideshow/slide1.jpg"
		else if (index === 1)
			imagebanner.src = "./assets/images/slideshow/slide2.jpg"
		else if (index === 2)
			imagebanner.src = "./assets/images/slideshow/slide3.jpg"
		else if (index === 3)
			imagebanner.src = "./assets/images/slideshow/slide4.png"
	} );
}
changebanner(); */