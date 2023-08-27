

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

gsap.from("#about-us img,#about-us-in", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
gsap.from(".card", {
  scale: 0.8,
  // opacity:0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers:false,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});

// Thanks itna aage tak aane ke liye lekin pura code utha ke copy paste karne ki jagah khud ek baar banane ka try karna, kuch naya seekhne ko milega!





$(document).ready(function() {
  let menuOpen = false;

  // Ouvrir/Fermer le menu latéral
  $('#menu-btn').on('click', function() {
      if(menuOpen) {
          $('#sidebar').css('left', '-300px');
          menuOpen = false;
      } else {
          $('#sidebar').css('left', '0');
          menuOpen = true;
      }
  });

  // Fermer le menu latéral lorsqu'on clique sur la croix
  $('#close-btn').on('click', function() {
      $('#sidebar').css('left', '-300px');
      menuOpen = false;
  });

  // Fermer le menu latéral lorsqu'on clique en dehors
  $(document).on('click', function(event) {
      if (!$(event.target).closest('#sidebar, #menu-btn').length && menuOpen) {
          $('#sidebar').css('left', '-300px');
          menuOpen = false;
      }
  });

  // Mettre en évidence la page actuelle dans le menu
  const currentLocation = window.location.pathname; // Utilisez pathname pour obtenir seulement le chemin, sans le nom de domaine

  $("#sidebar a").each(function() {
      if (this.pathname === currentLocation) {
          $(this).addClass("current-page");
      }
  });
});
