/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

eval("console.log('Gradiweb is online!!!');\n\n\n//# sourceURL=webpack://shopify-simulator/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	
/******/ })()
;

/*
 * Function where we manage the visibility of product cards
 * In this case we only apply the hidden class to hide the products, and the animate class to animate the image entry
 * Since we don't have so many products we can handle it this way but pagination would be ideal.
 */

document.addEventListener('DOMContentLoaded', function() {
  const showMoreBtn = document.querySelector('.show-more-btn');
  const hiddenProducts = document.querySelectorAll('.product-card.hidden');

  showMoreBtn.addEventListener('click', function() {
    if (showMoreBtn.textContent === 'Show More') {
      hiddenProducts.forEach(product => {
        product.classList.remove('hidden');
        const imageContainer = product.querySelector('.product-card-image-container');
        if (imageContainer) {
          imageContainer.classList.add('animate');
        }
      });
      showMoreBtn.textContent = 'Show Less';
    } else {
      hiddenProducts.forEach(product => {
        product.classList.add('hidden');
        const imageContainer = product.querySelector('.product-card-image-container');
        if (imageContainer) {
          imageContainer.classList.remove('animate');
        }
      });
      showMoreBtn.textContent = 'Show More';
    }
  });
});