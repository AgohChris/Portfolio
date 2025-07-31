// ===== SYSTÈME DE CURSEUR PERSONNALISÉ =====
// Ce système crée un curseur interactif qui suit la souris et réagit aux éléments cliquables

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');
let cursor3 = document.querySelector('.cursor-3');
let cursor4 = document.querySelector('.cursor-3');

// Fonction qui met à jour la position du curseur en temps réel
window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

// Sélectionne tous les liens et ajoute des interactions au survol
// Cette approche améliore l'expérience utilisateur en rendant les éléments interactifs visuellement distincts
document.querySelectorAll('a').forEach(links =>{

    // Quand la souris entre sur un lien, le curseur s'agrandit
    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    // Quand la souris quitte un lien, le curseur reprend sa taille normale
    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});


// ===== GESTION DE LA NAVIGATION RESPONSIVE =====
// Cette fonction contrôle l'affichage du menu sur les appareils mobiles

function myMenuFunction(){
  var menuBtn = document.getElementById("ma_nav_menu");

  // Toggle entre l'état fermé et ouvert du menu mobile
  // Cette technique utilise les classes CSS pour contrôler la visibilité
  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

// ===== EFFET D'OMBRE SUR LA BARRE DE NAVIGATION AU SCROLL =====
// Cette fonctionnalité améliore la perception de profondeur et la lisibilité

window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader =document.getElementById("header");

  // Détermine si l'utilisateur a scrollé suffisamment pour déclencher l'effet
  // Les valeurs 50px sont optimisées pour créer une transition naturelle
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

    // Applique l'ombre et réduit la hauteur pour un design plus compact
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    // Remet l'état initial sans ombre avec la hauteur complète
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}


// ===== EFFET DE FRAPPE DYNAMIQUE =====
// Utilise la bibliothèque Typed.js pour créer une animation de texte engageante

var EffetDeFrappe = new Typed(".typedText",{
  // Tableau des différents textes qui s'afficheront en rotation
  // Chaque texte reflète un aspect de votre profil professionnel
  strings : ["Etudiant en Génie Logiciel", 
              // "Aspirant Datascientist", 
              // "Passioné par les Bases de Données", 
              // "Passioné par le Dev backend",
              // "Passionné par la CyberSécurité",
            ],
  loop : true,        // L'animation se répète indéfiniment
  typeSpeed : 50,     // Vitesse de frappe (plus le chiffre est bas, plus c'est rapide)
  backSpeed : 50,     // Vitesse d'effacement
  backDelay : 100     // Pause avant de commencer à effacer
});


// ===== SYSTÈME D'ANIMATIONS AU SCROLL AVEC SCROLLREVEAL =====
// ScrollReveal permet de créer des animations fluides qui se déclenchent quand les éléments entrent dans la vue

// Configuration globale pour les animations venant du haut
const sr = ScrollReveal({
      origin: 'top',        // Les éléments apparaissent en venant du haut
      distance: '80px',     // Distance de déplacement pendant l'animation
      duration: 2000,       // Durée de l'animation en millisecondes
      reset: true           // L'animation se rejoue à chaque fois qu'on scroll
})

// ===== ANIMATIONS POUR LA SECTION HOME =====
// Ces animations créent une séquence d'apparition progressive des éléments

sr.reveal('.featured-text-card',{})                    // Carte de nom (premier élément)
sr.reveal('.featured-name',{delay: 100})               // Titre principal (léger délai)
sr.reveal('.description',{delay: 200})                 // Description (délai progressif)
sr.reveal('.featured-text-btn',{delay: 200})           // Boutons d'action
sr.reveal('.social_icons',{delay: 200})                // Icônes sociales
sr.reveal('.featured-image',{delay: 300})              // Image de profil (en dernier)

// Le système de délais crée un effet de cascade qui guide l'œil naturellement


// ===== ANIMATIONS POUR LA SECTION PROJETS =====
// L'intervalle crée un effet d'apparition séquentielle des projets

sr.reveal('.project-box',{interval: 200}) // Chaque projet apparaît 200ms après le précédent

// ===== ANIMATIONS POUR LES EN-TÊTES DE SECTIONS =====
sr.reveal('.top-header',{}) // Tous les titres de sections utilisent la même animation


// ===== ANIMATIONS SPÉCIFIQUES À LA SECTION EXPÉRIENCE =====
// Nouvelles animations pour intégrer harmonieusement la section expérience professionnelle

// Animation pour le conteneur principal de la timeline
sr.reveal('.experience-timeline', {
    origin: 'left',         // Apparition depuis la gauche pour créer un effet de déploiement
    distance: '50px',       // Distance plus courte pour un effet plus subtil
    duration: 1500,         // Animation plus rapide pour ne pas ralentir la navigation
    delay: 100              // Petit délai pour laisser le temps au titre de s'afficher
});

// Animation pour chaque élément de la timeline
sr.reveal('.experience-item', {
    origin: 'right',        // Apparition depuis la droite, contrastant avec la timeline
    distance: '60px',       // Distance modérée pour un effet visible mais élégant
    duration: 1800,         // Durée légèrement plus longue pour permettre de lire le contenu
    interval: 300,          // Intervalle entre chaque expérience (si vous en ajoutez d'autres)
    delay: 200              // Délai pour que la timeline soit visible avant les éléments
});

// Animation spécifique pour les badges de date
sr.reveal('.date-badge', {
    origin: 'left',         // Même origine que la timeline pour créer une cohérence visuelle
    distance: '30px',       // Mouvement subtil car les badges sont petits
    duration: 1000,         // Animation rapide pour ces petits éléments
    delay: 300              // Délai pour créer une séquence logique d'apparition
});

// Animation pour les tags de technologies
sr.reveal('.tech-tag', {
    origin: 'bottom',       // Apparition depuis le bas pour varier les directions
    distance: '20px',       // Mouvement très subtil car ce sont de petits éléments
    duration: 800,          // Animation rapide pour ne pas être intrusive
    interval: 50,           // Très court intervalle pour un effet de "pluie" de tags
    delay: 500              // Délai plus long car ces éléments viennent en fin de lecture
});


// ===== ANIMATIONS POUR LES SECTIONS VENANT DE LA GAUCHE =====
// Configuration spéciale pour les éléments qui apparaissent depuis la gauche

const srLeft = ScrollReveal({
  origin: 'left',           // Direction d'apparition
  distance: '80px',         // Distance cohérente avec les autres animations
  duration: 2000,           // Durée standard
  reset: true               // Réinitialisation au scroll
})

// Application aux sections spécifiques
srLeft.reveal('.about-info',{delay: 100})    // Informations personnelles
srLeft.reveal('.contact-info',{delay: 100})  // Informations de contact

// ===== ANIMATIONS POUR LES SECTIONS VENANT DE LA DROITE =====
// Configuration miroir pour créer un équilibre visuel

const srRight = ScrollReveal({
origin: 'right',            // Direction opposée pour créer du contraste
distance: '80px',           // Distance identique pour maintenir la cohérence
duration: 2000,             // Durée standard
reset: true                 // Comportement identique
})

// Application aux éléments de droite
srRight.reveal('.competences-box',{delay: 100}) // Boîtes de compétences
srRight.reveal('.form-control',{delay: 100})    // Formulaires de contact


// ===== GESTION DES DÉTAILS DE PROJETS =====
// Fonction pour afficher les détails d'un projet au clic

function afficherDetailsProjet(projectId) {
    var projectDetails = document.getElementById(projectId);
    projectDetails.style.opacity = "1";           // Rend l'élément visible
    projectDetails.style.transition = "opacity 0.3s ease-in-out"; // Animation fluide
}

// ===== FONCTION UTILITAIRE DE TRONCATURE DE TEXTE =====
// Cette fonction limite la longueur du texte pour maintenir un design propre

function tronquerTexte(texte, longueurMax) {
      if (texte.length > longueurMax) {
          return texte.substring(0, longueurMax) + "..."; 
      } else {
          return texte;
      }
  }

  // Application de la troncature aux différents projets
  // Ces valeurs sont calibrées pour maintenir un design équilibré
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


// ===== SYSTÈME DE NAVIGATION ACTIVE DYNAMIQUE =====
// Cette fonction met en surbrillance le lien de navigation correspondant à la section visible

const sections = document.querySelectorAll('section[id]') // Sélectionne toutes les sections avec un ID

function scrollActive() {
const scrollY = window.scrollY; // Position actuelle du scroll

sections.forEach(current =>{
  // Calcule les dimensions et position de chaque section
  const sectionHeight = current.offsetHeight,        // Hauteur de la section
      sectionTop = current.offsetTop - 50,          // Position du haut (avec offset pour la navigation)
    sectionId = current.getAttribute('id')          // ID de la section

  // Détermine si la section est actuellement visible à l'écran
  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

      // Ajoute la classe active au lien correspondant
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

  }  else {

    // Retire la classe active des autres liens
    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

  }
})
}

// Attache la fonction à l'événement de scroll pour une mise à jour en temps réel
// Cette approche est plus performante que de vérifier constamment la position
window.addEventListener('scroll', scrollActive)


// ===== COMMENTAIRES SUR L'ARCHITECTURE GLOBALE =====

/* 
PHILOSOPHIE DE CONCEPTION DES ANIMATIONS :

1. COHÉRENCE VISUELLE : Toutes les animations utilisent des durées et distances similaires
   pour créer une expérience utilisateur uniforme à travers tout le portfolio.

2. DIRECTION NARRATIVE : Les animations guident l'œil dans une progression logique :
   - Éléments principaux apparaissent en premier (top)
   - Éléments de contexte viennent des côtés (left/right)
   - Détails apparaissent en dernier (bottom, intervalles)

3. PERFORMANCE : Les délais et intervalles sont optimisés pour ne pas créer de latence
   perceptible tout en maintenant l'impact visuel souhaité.

4. ACCESSIBILITÉ : L'option 'reset: true' permet aux utilisateurs de revoir les animations
   s'ils scrollent à nouveau, améliorant l'expérience pour tous types d'utilisateurs.

INTÉGRATION DE LA SECTION EXPÉRIENCE :

La nouvelle section expérience s'intègre parfaitement dans ce système grâce à :
- Des animations cohérentes avec le style existant
- Des délais calculés pour créer une séquence logique de lecture
- Des directions variées qui maintiennent l'intérêt visuel
- Une attention particulière aux petits éléments (badges, tags) avec des animations subtiles

Cette approche garantit que l'ajout de nouvelles sections ne perturbe pas l'harmonie
visuelle globale du portfolio, tout en apportant sa propre personnalité à la présentation
de votre expérience professionnelle.
*/
