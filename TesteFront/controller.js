
const slides = document.querySelectorAll('[data-js="carousel_item"]');
const nextButton = document.querySelector('[data-js="carousel_button--next"]');
const prevButton = document.querySelector('[data-js="carousel_button--prev"]');
const lastSlideIndex = slides.length -1

const indicator = document.querySelector('#indicator')

var currentSlideIndex = 0;
let time = 5000;

const manipulateSlidesClasses = correntSlideIndex => {
    slides.forEach(slide => {slide.classList.remove('carousel_item--visible')
    slides[correntSlideIndex].classList.add('carousel_item--visible')
    renderindicator()
     })   
}

function renderindicator(){

   indicator.innerHTML='';
   for(var i=0; i < slides.length; i++){
      var span = document.createElement('span')

      span.innerHTML = (i === currentSlideIndex 
      ? indicator.appendChild(span).className = "active" 
      : indicator.appendChild(span).className = "disabled"
     
      )
   }
}

function nextImage(){

  manipulateSlidesClasses(currentSlideIndex)
   currentSlideIndex++

   if(currentSlideIndex > lastSlideIndex){
      currentSlideIndex = 0
   }
   manipulateSlidesClasses(currentSlideIndex)
  }
   

nextButton.addEventListener('click', () => {
   if(currentSlideIndex === 3){
    currentSlideIndex--
   }

   const correntSlideIndex = currentSlideIndex === lastSlideIndex
   ? currentSlideIndex = 0
   : ++currentSlideIndex

   manipulateSlidesClasses(correntSlideIndex)
   
   })

prevButton.addEventListener('click', () =>{

   const correntSlideIndex = currentSlideIndex === 0 
   ? currentSlideIndex = lastSlideIndex
   : --currentSlideIndex

   manipulateSlidesClasses(correntSlideIndex)
  
})

function start(){
   setInterval(() => {
     nextImage()
   }, time)
}

renderindicator()
 window.addEventListener("load", start)






