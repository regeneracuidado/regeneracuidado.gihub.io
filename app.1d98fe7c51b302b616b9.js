/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/autolink.js":
/*!****************************!*\
  !*** ./src/js/autolink.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setupAutolink)
/* harmony export */ });

function setupAutolink()
{
    document.querySelectorAll('.autolink').forEach((elem) => {
        elem.addEventListener('click', () => location.href = elem.dataset.link )
    })
}



/***/ }),

/***/ "./src/js/mobile-button.js":
/*!*********************************!*\
  !*** ./src/js/mobile-button.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setupMobileButton)
/* harmony export */ });

function setupMobileButton()
{
    let attachEvent = (elem) => {
        elem.addEventListener('click', (event) => {
            console.log('click')
            document.body.classList.toggle("mobile-menu");
        })
    }

    document.querySelectorAll('.mobile-button').forEach(attachEvent)
}


/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setupModal)
/* harmony export */ });

function setupModal()
{
    // botão abrir

    let attachEvent = (elem) => {
        elem.addEventListener('click', (event) => {
            document.body.classList.toggle("modal");

            drawContent()
        })
    }

    document.querySelectorAll('.modal-button').forEach(attachEvent);

    // botão fechar

    document.querySelector('div.modal button').addEventListener('click', (event) => {
        document.body.classList.toggle("modal");
    })
}

function drawContent()
{
    let modalElement = document.querySelector('div.modal');

    let gap = 30;
    
    let modalWidth  = window.innerWidth - gap * 2;
    let modalHeight = calcModalHeight(modalWidth);

    if (window.innerWidth > 1120) {
        modalWidth = 1060
        modalHeight = 596
    }

    let marginTop  = calcModalTop(modalHeight);
    let marginLeft = calcModalLeft(modalWidth);
    
    // janela

    let section = modalElement.querySelector('section')

    section.style.width      = modalWidth + 'px'
    section.style.height     = modalHeight + 'px'
    section.style.marginTop  = marginTop + 'px'
    section.style.marginLeft = marginLeft + 'px'

    // vídeo

    let iframeGap = gap/2;

    section.querySelector('div').innerHTML = `
        <iframe width="${modalWidth - iframeGap*2}" height="${modalHeight - 60 - iframeGap}" 
            src="https://www.youtube.com/embed/fKSXWsBbHt4?si=wydMxp7cDZ6BZL1b" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
        </iframe>
    `
}

function calcModalWidth(modalWidth)
{
    let modalHeight = calcModalHeight(modalWidth);
    
    if (modalHeight < window.innerHeight) {
        modalWidth = resizeModalWidth(modalWidth, modal)
    }

    return modalWidth;
}

function calcModalHeight(modalWidth)
{
    // formato padrão do youtube
    let baseWidth = 560;
    let baseHeight = 315;

    // regra de três
    // - - - - - 
    // baseWidth   \ / baseHeight
    // modalWidth / \  x
    // - - - - - 
    // baseWidth x  = modalWidth * baseHeigh (result)
    // x = (result) / baseWidth
    return (modalWidth * baseHeight) / baseWidth
}

function calcModalTop(modalHeight)
{
    let marginTop = (window.innerHeight - modalHeight) / 2

    return marginTop < 0 ? 0 : marginTop
}

function calcModalLeft(modalWidth)
{
    return (window.innerWidth - modalWidth) / 2
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_mobile_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/mobile-button.js */ "./src/js/mobile-button.js");
/* harmony import */ var _js_modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/modal.js */ "./src/js/modal.js");
/* harmony import */ var _js_autolink_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/autolink.js */ "./src/js/autolink.js");




window.addEventListener("load", (event) => {
    (0,_js_mobile_button_js__WEBPACK_IMPORTED_MODULE_0__["default"])()

    ;(0,_js_modal_js__WEBPACK_IMPORTED_MODULE_1__["default"])()

    ;(0,_js_autolink_js__WEBPACK_IMPORTED_MODULE_2__["default"])()
})


})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjFkOThmZTdjNTFiMzAyYjYxNmI5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0xlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDVmU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLHlCQUF5Qix5QkFBeUIsWUFBWSw2QkFBNkI7QUFDM0Y7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFVBQVUsaUJBQWlCLGlCQUFpQixXQUFXLG9CQUFvQjtBQUM3RztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNyR0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05zRDtBQUNmO0FBQ007O0FBRTdDO0FBQ0EsSUFBSSxnRUFBaUI7O0FBRXJCLElBQUkseURBQVU7O0FBRWQsSUFBSSw0REFBYTtBQUNqQixDQUFDOzs7Ozs7Ozs7OztBQ1ZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwbGljYXRpb24vLi9zcmMvanMvYXV0b2xpbmsuanMiLCJ3ZWJwYWNrOi8vYXBwbGljYXRpb24vLi9zcmMvanMvbW9iaWxlLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9hcHBsaWNhdGlvbi8uL3NyYy9qcy9tb2RhbC5qcyIsIndlYnBhY2s6Ly9hcHBsaWNhdGlvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hcHBsaWNhdGlvbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYXBwbGljYXRpb24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hcHBsaWNhdGlvbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FwcGxpY2F0aW9uLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly9hcHBsaWNhdGlvbi8uL3NyYy9hcHAuc2Nzcz9lZmY3Il0sInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0dXBBdXRvbGluaygpXG57XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmF1dG9saW5rJykuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbG9jYXRpb24uaHJlZiA9IGVsZW0uZGF0YXNldC5saW5rIClcbiAgICB9KVxufVxuXG4iLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldHVwTW9iaWxlQnV0dG9uKClcbntcbiAgICBsZXQgYXR0YWNoRXZlbnQgPSAoZWxlbSkgPT4ge1xuICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2xpY2snKVxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwibW9iaWxlLW1lbnVcIik7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vYmlsZS1idXR0b24nKS5mb3JFYWNoKGF0dGFjaEV2ZW50KVxufVxuIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXR1cE1vZGFsKClcbntcbiAgICAvLyBib3TDo28gYWJyaXJcblxuICAgIGxldCBhdHRhY2hFdmVudCA9IChlbGVtKSA9PiB7XG4gICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcIm1vZGFsXCIpO1xuXG4gICAgICAgICAgICBkcmF3Q29udGVudCgpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsLWJ1dHRvbicpLmZvckVhY2goYXR0YWNoRXZlbnQpO1xuXG4gICAgLy8gYm90w6NvIGZlY2hhclxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2Lm1vZGFsIGJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcIm1vZGFsXCIpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGRyYXdDb250ZW50KClcbntcbiAgICBsZXQgbW9kYWxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2Lm1vZGFsJyk7XG5cbiAgICBsZXQgZ2FwID0gMzA7XG4gICAgXG4gICAgbGV0IG1vZGFsV2lkdGggID0gd2luZG93LmlubmVyV2lkdGggLSBnYXAgKiAyO1xuICAgIGxldCBtb2RhbEhlaWdodCA9IGNhbGNNb2RhbEhlaWdodChtb2RhbFdpZHRoKTtcblxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDExMjApIHtcbiAgICAgICAgbW9kYWxXaWR0aCA9IDEwNjBcbiAgICAgICAgbW9kYWxIZWlnaHQgPSA1OTZcbiAgICB9XG5cbiAgICBsZXQgbWFyZ2luVG9wICA9IGNhbGNNb2RhbFRvcChtb2RhbEhlaWdodCk7XG4gICAgbGV0IG1hcmdpbkxlZnQgPSBjYWxjTW9kYWxMZWZ0KG1vZGFsV2lkdGgpO1xuICAgIFxuICAgIC8vIGphbmVsYVxuXG4gICAgbGV0IHNlY3Rpb24gPSBtb2RhbEVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbicpXG5cbiAgICBzZWN0aW9uLnN0eWxlLndpZHRoICAgICAgPSBtb2RhbFdpZHRoICsgJ3B4J1xuICAgIHNlY3Rpb24uc3R5bGUuaGVpZ2h0ICAgICA9IG1vZGFsSGVpZ2h0ICsgJ3B4J1xuICAgIHNlY3Rpb24uc3R5bGUubWFyZ2luVG9wICA9IG1hcmdpblRvcCArICdweCdcbiAgICBzZWN0aW9uLnN0eWxlLm1hcmdpbkxlZnQgPSBtYXJnaW5MZWZ0ICsgJ3B4J1xuXG4gICAgLy8gdsOtZGVvXG5cbiAgICBsZXQgaWZyYW1lR2FwID0gZ2FwLzI7XG5cbiAgICBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJ2RpdicpLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGlmcmFtZSB3aWR0aD1cIiR7bW9kYWxXaWR0aCAtIGlmcmFtZUdhcCoyfVwiIGhlaWdodD1cIiR7bW9kYWxIZWlnaHQgLSA2MCAtIGlmcmFtZUdhcH1cIiBcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL2ZLU1hXc0JiSHQ0P3NpPXd5ZE14cDdjRFo2QlpMMWJcIiBcbiAgICAgICAgICAgIHRpdGxlPVwiWW91VHViZSB2aWRlbyBwbGF5ZXJcIiBcbiAgICAgICAgICAgIGZyYW1lYm9yZGVyPVwiMFwiIFxuICAgICAgICAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlOyB3ZWItc2hhcmVcIiBcbiAgICAgICAgICAgIHJlZmVycmVycG9saWN5PVwic3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpblwiIFxuICAgICAgICAgICAgYWxsb3dmdWxsc2NyZWVuPlxuICAgICAgICA8L2lmcmFtZT5cbiAgICBgXG59XG5cbmZ1bmN0aW9uIGNhbGNNb2RhbFdpZHRoKG1vZGFsV2lkdGgpXG57XG4gICAgbGV0IG1vZGFsSGVpZ2h0ID0gY2FsY01vZGFsSGVpZ2h0KG1vZGFsV2lkdGgpO1xuICAgIFxuICAgIGlmIChtb2RhbEhlaWdodCA8IHdpbmRvdy5pbm5lckhlaWdodCkge1xuICAgICAgICBtb2RhbFdpZHRoID0gcmVzaXplTW9kYWxXaWR0aChtb2RhbFdpZHRoLCBtb2RhbClcbiAgICB9XG5cbiAgICByZXR1cm4gbW9kYWxXaWR0aDtcbn1cblxuZnVuY3Rpb24gY2FsY01vZGFsSGVpZ2h0KG1vZGFsV2lkdGgpXG57XG4gICAgLy8gZm9ybWF0byBwYWRyw6NvIGRvIHlvdXR1YmVcbiAgICBsZXQgYmFzZVdpZHRoID0gNTYwO1xuICAgIGxldCBiYXNlSGVpZ2h0ID0gMzE1O1xuXG4gICAgLy8gcmVncmEgZGUgdHLDqnNcbiAgICAvLyAtIC0gLSAtIC0gXG4gICAgLy8gYmFzZVdpZHRoICAgXFwgLyBiYXNlSGVpZ2h0XG4gICAgLy8gbW9kYWxXaWR0aCAvIFxcICB4XG4gICAgLy8gLSAtIC0gLSAtIFxuICAgIC8vIGJhc2VXaWR0aCB4ICA9IG1vZGFsV2lkdGggKiBiYXNlSGVpZ2ggKHJlc3VsdClcbiAgICAvLyB4ID0gKHJlc3VsdCkgLyBiYXNlV2lkdGhcbiAgICByZXR1cm4gKG1vZGFsV2lkdGggKiBiYXNlSGVpZ2h0KSAvIGJhc2VXaWR0aFxufVxuXG5mdW5jdGlvbiBjYWxjTW9kYWxUb3AobW9kYWxIZWlnaHQpXG57XG4gICAgbGV0IG1hcmdpblRvcCA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLSBtb2RhbEhlaWdodCkgLyAyXG5cbiAgICByZXR1cm4gbWFyZ2luVG9wIDwgMCA/IDAgOiBtYXJnaW5Ub3Bcbn1cblxuZnVuY3Rpb24gY2FsY01vZGFsTGVmdChtb2RhbFdpZHRoKVxue1xuICAgIHJldHVybiAod2luZG93LmlubmVyV2lkdGggLSBtb2RhbFdpZHRoKSAvIDJcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHNldHVwTW9iaWxlQnV0dG9uIGZyb20gJy4vanMvbW9iaWxlLWJ1dHRvbi5qcyc7XG5pbXBvcnQgc2V0dXBNb2RhbCBmcm9tICcuL2pzL21vZGFsLmpzJztcbmltcG9ydCBzZXR1cEF1dG9saW5rIGZyb20gJy4vanMvYXV0b2xpbmsuanMnO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKGV2ZW50KSA9PiB7XG4gICAgc2V0dXBNb2JpbGVCdXR0b24oKVxuXG4gICAgc2V0dXBNb2RhbCgpXG5cbiAgICBzZXR1cEF1dG9saW5rKClcbn0pXG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==