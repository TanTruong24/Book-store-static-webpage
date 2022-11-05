function ResponsiveTopnav() {
    var x = document.getElementById("responsive-topnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

var divs = ["sub-item1", "sub-item2", "sub-item3", "sub-item4"];
var visibleDivId = null;
function clickSidenav(divId) {
  if(visibleDivId === divId) {
    //visibleDivId = null;
  } else {
    visibleDivId = divId;
  }
  hideNonVisibleDivs();
}
function hideNonVisibleDivs() {
  var i, divId, div;
  for(i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);
    if(visibleDivId === divId) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
};

function increment() {
  document.getElementById('quantilyBooks').stepUp();
}
function decrement() {
  document.getElementById('quantilyBooks').stepDown();
}


jQuery("#carousel-release").owlCarousel({
  autoplay: true,
  rewind: true, /* use rewind if you don't want loop */
  margin: 20,
   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 5000,
  smartSpeed: 800,
  nav: true,
  items: 1
});
jQuery("#carousel-banner").owlCarousel({
  autoplay: true,
  rewind: true,
  margin: 20,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 8000,
  smartSpeed: 800,
  nav: true,
  items: 1
});
jQuery("#carousel-bestselling").owlCarousel({
  autoplay: true,
  rewind: true, /* use rewind if you don't want loop */
  margin: 0,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 3
    },

    1024: {
      items: 4
    },

    1366: {
      items: 5
    }
  }
});