var nav = document.querySelector('nav.header-left')
var iconNav = document.querySelector('.header-top-left .header-icon')
var listes = document.querySelectorAll('.header-left ul li')
var prev = document.getElementById("prev")
var next = document.getElementById("next")

/**
 * Objet contenant les gestionnaires d'évènements
 */
var listenerFunctions = {
    openNav: ()=>{
        nav.style.display = "block"
    },
    closeNav: ()=>{
        nav.style.display = "none"
    } ,
    prevSlide:()=>{
        let slide=slideIndex-1
        showSlide(slide)
    },
    nextslide:()=>{
        let slide=slideIndex+1
        showSlide(slide)
    }
}

/**
 * Fonction qui réalise les abonnements
 */
var setupListeners = () =>{
    iconNav.onmouseover = listenerFunctions.openNav
    nav.onmouseleave = listenerFunctions.closeNav
    prev.onclick=listenerFunctions.prevSlide
    next.onclick=listenerFunctions.nextslide
    for (let index = 0; index < listes.length; index++) {
        const li = listes[index];
        li.onclick = listenerFunctions.closeNav
    }
}