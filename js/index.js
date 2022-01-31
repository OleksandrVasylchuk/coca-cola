window.onload = function () {
  document.body.classList.add("loaded_hiding");
  window.setTimeout(function () {
    document.body.classList.add("loaded");
    document.body.classList.remove("loaded_hiding");
  }, 500);
};

// Scroll!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// var myFullpage = new fullpage("#fullpage", {
//   css3: true,
//   scrollingSpeed: 700,
//   autoScrolling: true,
//   responsiveWidth: 900,
//   responsiveWidtdh: 800,
//   fitToSection: true,
//   fitToSectionDelay: 1000,
//   scrollBar: false,
//   easing: "easeInOutCubic",
//   easingcss3: "ease",
//   loopBottom: false,
//   loopTop: false,
//   loopHorizontal: true,
//   continuousVertical: false,
//   continuousHorizontal: false,
//   scrollHorizontally: false,
//   interlockedSlides: false,
//   dragAndMove: false,
//   offsetSections: false,
//   resetSliders: false,
//   fadingEffect: false,
//   normalScrollElements: "#element1, .element2",
//   scrollOverflow: false,
//   scrollOverflowReset: false,
//   scrollOverflowOptions: null,
//   touchSensitivity: 15,
//   bigSectionsDestination: null,

//   //Accessibility
//   keyboardScrolling: true,
//   animateAnchor: true,
//   recordHistory: true,

//   //Custom selectors
//   sectionSelector: ".section",
//   slideSelector: ".slide",

//   lazyLoading: true,

//   afterRender: function () {
//     const mq = window.matchMedia("(min-width: 960px)");

//     if (mq.matches) {
//       alert("window width >= 960px");
//       fullpage_api.autoScrolling(true);
//       fullpage_api.setAllowScrolling(true);
//     } else {
//       alert("window width < 960px");
//       fullpage_api.autoScrolling(false);
//       fullpage_api.setAllowScrolling(false);
//     }
//   },
// });
