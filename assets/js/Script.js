
// Curseur 

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');
let cursor3 = document.querySelector('.cursor-3');
let cursor4 = document.querySelector('.cursor-3');

window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});






/*================= BARRE DE NAVIGATION ======================== */
function myMenuFunction(){
  var menuBtn = document.getElementById("ma_nav_menu");

  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader =document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}


/* ----- EFFET DE FRAPPE ----- */
var EffetDeFrappe = new Typed(".typedText",{
  strings : ["Etudiant en Génie Logiciel", 
              "Aspirant Datascientist", 
              "Passioné par les Bases de Données", 
              "Passioné par le Dev backend",
              "& la CyberSécurité"
            ],
  loop : true,
  typeSpeed : 80, 
  backSpeed : 80,
  backDelay : 2000
});



/* ----- ## -- ANNIMATION DE DÉFILEMENT -- ## ----- */
const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true     
})

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.description',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- SECTION PROJET -- */
// Pour l'apparition fluide des éléments
sr.reveal('.project-box',{interval: 200})

/* -- HEADER -- */
sr.reveal('.top-header',{})



/* ----- ## -- ANIMATION POUR LE DÉFILEMENT DES ÉLÉMENTS DE GAUCHE À DROITE -- ## ----- */
/* -- ABOUT ET CONTACT -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
  })


srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT & FORM -- */
const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})

srRight.reveal('.competences-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})




//========================== Section Projets====================



function afficherDetailsProjet(projectId) {
  // Récupérer l'élément correspondant au projet
  var projectDetails = document.getElementById(projectId);
  
  // Afficher les détails du projet pour le rendre visible
  projectDetails.style.display = "block";
  
  //animation pour afficher les détails du projet toucher de la souris
  projectDetails.classList.add("fadeIn"); 


  // Masquer les autres détails de projets s'ils sont affichés
  var allProjectDetails = document.querySelectorAll(".project-details");
  allProjectDetails.forEach(function(detail) {
      if (detail.id !== projectId) {
          detail.style.display = "none";
      }
  });
}



// FONCTION POUR TRONQUER LE TEXTE ET AJOUTER TROIS POINTS DE SUSPENSION

function tronquerTexte(texte, longueurMax) {
      if (texte.length > longueurMax) {
          return texte.substring(0, longueurMax) + "..."; 
      } else {
          return texte;
      }
  }

  var detailsProjet1 = document.getElementById("project1");
  detailsProjet1.innerHTML = tronquerTexte(detailsProjet1.innerHTML, 200);

  var detailsProjet2 = document.getElementById("project2");
  detailsProjet2.innerHTML = tronquerTexte(detailsProjet2.innerHTML, 200);

  var detailsProjet3 = document.getElementById("project3");
  detailsProjet3.innerHTML = tronquerTexte(detailsProjet3.innerHTML, 200);


  var detailsProjet4 = document.getElementById("project4");
  detailsProjet4.innerHTML = tronquerTexte(detailsProjet4.innerHTML, 250);


  var detailsProjet5 = document.getElementById("project5");
  detailsProjet5.innerHTML = tronquerTexte(detailsProjet5.innerHTML, 150);


  var detailsProjet6 = document.getElementById("project6");
  detailsProjet6.innerHTML = tronquerTexte(detailsProjet6.innerHTML, 200);











/* ----- FONCTION POUR MODIFIER LE LIEN ACTIF ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
const scrollY = window.scrollY;

sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')

  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

  }  else {

    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

  }
})
}

window.addEventListener('scroll', scrollActive)