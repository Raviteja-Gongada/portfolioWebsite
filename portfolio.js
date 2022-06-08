
/**
* Template Name: Kelly - v4.7.0
* Template URL: https://bootstrapmade.com/kelly-free-bootstrap-cv-resume-html-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }
  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Initiate portfolio details lightbox 
   */
  const portfolioDetailsLightbox = GLightbox({
    selector: '.portfolio-details-lightbox',
    width: '90%',
    height: '90vh'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });



  //     // The offsetTop property returns the top position (in pixels) relative to the parent.

// // The returned value includes:

// // the top position, and margin of the element
// // the top padding, scrollbar and border of the parent
var button = document.querySelector('#about_me');
button.addEventListener('click', function(){
    var y = document.querySelector('#about').offsetTop;
        window.scrollTo(0,y);
})

var button = document.querySelector('#skill');
button.addEventListener('click', function(){
    var y = document.querySelector('#skills').offsetTop;
        window.scrollTo(0,y);
})

var button = document.querySelector('#contact');
button.addEventListener('click', function(){
    var y = document.querySelector('#footer').offsetTop;
        window.scrollTo(0,y);
})

var button = document.querySelector('#resume_1');
button.addEventListener('click', function(){
    var y = document.querySelector('#resume').offsetTop;
        window.scrollTo(0,y);
})

var button = document.querySelector('#projects');
button.addEventListener('click', function(){
    var y = document.querySelector('#portfolio').offsetTop;
        window.scrollTo(0,y);
})

var button = document.querySelector('#scholarship_1');
button.addEventListener('click', function(){
    var y = document.querySelector('#scholarship').offsetTop;
        window.scrollTo(0,y);
})

})()