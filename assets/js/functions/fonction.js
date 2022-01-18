var  slideIndex=0
var slides=document.querySelectorAll('.slide');
var hideslider=()=>{
    //cibler tous les slides 
   
    displayDot(slides)
   
    for (let index = 1; index < slides.length; index++) {
        const slide = slides[index];
        slide.style.display="none";
        
    }

}
//fonction pour voir plusieur
var initslide=()=>{
    hideslider();
}
//fonction display Dot 
//sliders est une liste

var displayDot=(sliders)=>{

    for (let index = 0; index < sliders.length; index++) {
        const slides = sliders[index];
       
        //creer un element Span 
        var span=document.createElement("span")
        span.onclick=()=>showSlide(index)
        //donner un class name 
       // span.className="dot"
       span.setAttribute("class","dot");
       //ajouter un flis ou dots 
       document.getElementById("dots").appendChild(span)


    }

   

}
var showSlide = (index) =>{
    
    let lastSlideIndex = slideIndex
    //Mtah abs rende index positif
    slideIndex = Math.abs(index) % slides.length

    // Cacher l'ancien slide
    slides[lastSlideIndex].style.display = "none"

    // Affichage du slide correspondant à l'indice reçu en paramètre
    slides[slideIndex].style.display = "block"
}