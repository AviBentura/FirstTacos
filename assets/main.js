/******/ (function (modules) {
  // webpackBootstrap
  /******/ // install a JSONP callback for chunk loading
  /******/ function webpackJsonpCallback(data) {
    /******/ var chunkIds = data[0];
    /******/ var moreModules = data[1];
    /******/ var executeModules = data[2];
    /******/
    /******/ // add "moreModules" to the modules object,
    /******/ // then flag all "chunkIds" as loaded and fire callback
    /******/ var moduleId,
      chunkId,
      i = 0,
      resolves = [];
    /******/ for (; i < chunkIds.length; i++) {
      /******/ chunkId = chunkIds[i];
      /******/ if (installedChunks[chunkId]) {
        /******/ resolves.push(installedChunks[chunkId][0]);
        /******/
      }
      /******/ installedChunks[chunkId] = 0;
      /******/
    }
    /******/ for (moduleId in moreModules) {
      /******/ if (
        Object.prototype.hasOwnProperty.call(moreModules, moduleId)
      ) {
        /******/ modules[moduleId] = moreModules[moduleId];
        /******/
      }
      /******/
    }
    /******/ if (parentJsonpFunction) parentJsonpFunction(data);
    /******/
    /******/ while (resolves.length) {
      /******/ resolves.shift()();
      /******/
    }
    /******/
    /******/ // add entry modules from loaded chunk to deferred list
    /******/ deferredModules.push.apply(deferredModules, executeModules || []);
    /******/
    /******/ // run deferred modules when all chunks ready
    /******/ return checkDeferredModules();
    /******/
  }
  /******/ function checkDeferredModules() {
    /******/ var result;
    /******/ for (var i = 0; i < deferredModules.length; i++) {
      /******/ var deferredModule = deferredModules[i];
      /******/ var fulfilled = true;
      /******/ for (var j = 1; j < deferredModule.length; j++) {
        /******/ var depId = deferredModule[j];
        /******/ if (installedChunks[depId] !== 0) fulfilled = false;
        /******/
      }
      /******/ if (fulfilled) {
        /******/ deferredModules.splice(i--, 1);
        /******/ result = __webpack_require__(
          (__webpack_require__.s = deferredModule[0])
        );
        /******/
      }
      /******/
    }
    /******/ return result;
    /******/
  }
  /******/
  /******/ // The module cache
  /******/ var installedModules = {};
  /******/
  /******/ // object to store loaded and loading chunks
  /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
  /******/ // Promise = chunk loading, 0 = chunk loaded
  /******/ var installedChunks = {
    /******/ main: 0,
    /******/
  };
  /******/
  /******/ var deferredModules = [];
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Flag the module as loaded
    /******/ module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/ __webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/ __webpack_require__.d = function (exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /******/
    }
    /******/
  };
  /******/
  /******/ // define __esModule on exports
  /******/ __webpack_require__.r = function (exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module",
      });
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", { value: true });
    /******/
  };
  /******/
  /******/ // create a fake namespace object
  /******/ // mode & 1: value is a module id, require it
  /******/ // mode & 2: merge all properties of value into the ns
  /******/ // mode & 4: return value when already ns object
  /******/ // mode & 8|1: behave like require
  /******/ __webpack_require__.t = function (value, mode) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === "object" &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value,
    });
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/ __webpack_require__.n = function (module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/ __webpack_require__.p = "/";
  /******/
  /******/ var jsonpArray = (window["webpackJsonp"] =
    window["webpackJsonp"] || []);
  /******/ var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
  /******/ jsonpArray.push = webpackJsonpCallback;
  /******/ jsonpArray = jsonpArray.slice();
  /******/ for (var i = 0; i < jsonpArray.length; i++)
    webpackJsonpCallback(jsonpArray[i]);
  /******/ var parentJsonpFunction = oldJsonpFunction;
  /******/
  /******/
  /******/ // add entry module to deferred list
  /******/ deferredModules.push([
    "./src/assets/scripts/index.js",
    "vendors~main",
  ]);
  /******/ // run deferred modules when ready
  /******/ return checkDeferredModules();
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "./src/assets/scripts/contact/country_data.json":
      /*!******************************************************!*\
  !*** ./src/assets/scripts/contact/country_data.json ***!
  \******************************************************/
      /*! exports provided: belgium, netherlands, france, default */
      /***/ function (module) {
        eval(
          'module.exports = {"belgium":{"bounds":{"south":49.497013,"west":2.52409990000001,"north":51.5051449,"east":6.408124100000009},"location":{"lat":50.503887,"lng":4.4699359999999615},"location_type":"APPROXIMATE","viewport":{"south":49.497013,"west":2.52409990000001,"north":51.5051449,"east":6.408124100000009}},"netherlands":{"bounds":{"south":50.75038379999999,"west":3.3316001000000597,"north":53.6316,"east":7.227510199999983},"location":{"lat":52.132633,"lng":5.2912659999999505},"location_type":"APPROXIMATE","viewport":{"south":50.7503837,"west":3.3315999999999804,"north":53.6756,"east":7.227140500000019}},"france":{"bounds":{"south":41.31433,"west":-5.559099999999944,"north":51.1241999,"east":9.662499900000057},"location":{"lat":46.227638,"lng":2.213749000000007},"location_type":"APPROXIMATE","viewport":{"south":41.31433,"west":-5.559099999999944,"north":51.1241999,"east":9.662499900000057}}};\n\n//# sourceURL=webpack:///./src/assets/scripts/contact/country_data.json?'
        );

        /***/
      },

    /***/ "./src/assets/scripts/contact/datepicker.js":
      /*!**************************************************!*\
  !*** ./src/assets/scripts/contact/datepicker.js ***!
  \**************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flatpickr */ \"./node_modules/flatpickr/dist/flatpickr.js\");\n/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flatpickr__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar datepicker = function datepicker() {\n  var dateFields = document.querySelectorAll('.datepicker');\n\n  for (var i = 0; i < dateFields.length; i++) {\n    dateFields[i].addEventListener('click', flatpickr__WEBPACK_IMPORTED_MODULE_0___default()(dateFields[i], {\n      maxDate: 'today',\n      dateFormat: 'd-m-Y'\n    }));\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (datepicker);\n\n//# sourceURL=webpack:///./src/assets/scripts/contact/datepicker.js?"
        );

        /***/
      },

    /***/ "./src/assets/scripts/contact/map.js":
      /*!*******************************************!*\
  !*** ./src/assets/scripts/contact/map.js ***!
  \*******************************************/
      /*! exports provided: initMap */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initMap\", function() { return initMap; });\n/* harmony import */ var _country_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./country_data */ \"./src/assets/scripts/contact/country_data.json\");\nvar _country_data__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./country_data */ \"./src/assets/scripts/contact/country_data.json\", 1);\nvar map;\nvar prevWindow = false;\nvar prevMarker = false;\nvar country;\n\nvar markers = [];\n\nfunction makeInfoWindowContent(marker) {\n  var message = ''; // basic content\n\n  marker.contactInfo.forEach(function (infoBlock) {\n    Object.keys(infoBlock).forEach(function (key) {\n      switch (key) {\n        case 'street':\n          if (infoBlock[key]) {\n            message += \"<h4 itemprop=\\\"streetAddress\\\">\".concat(infoBlock[key], \"</h4>\");\n          }\n\n          break;\n\n        case 'city':\n          if (infoBlock[key]) {\n            message += \"<p itemprop=\\\"addressLocality\\\" class='m-0'>\".concat(infoBlock[key], \"</p>\");\n          }\n\n          break;\n\n        case 'state':\n          if (infoBlock[key]) {\n            message += \"<p itemprop=\\\"addressRegion\\\" class='m-0'>\".concat(infoBlock[key], \"</p>\");\n          }\n\n          break;\n\n        case 'zip':\n          if (infoBlock[key]) {\n            message += \"<p itemprop=\\\"postalCode\\\" class='m-0'>\".concat(infoBlock[key], \"</p>\");\n          }\n\n          break;\n\n        case 'country':\n          if (infoBlock[key]) {\n            message += \"<p class='m-0'>\".concat(infoBlock[key], \"</p>\");\n          }\n\n          break;\n\n        case 'email':\n          if (infoBlock[key]) {\n            message += \"<p itemprop=\\\"email\\\" itemscope itemtype=\\\"http://schema.org/LocalBusiness\\\" class='m-0'>\".concat(infoBlock[key], \"</p>\");\n          }\n\n          break;\n\n        case 'telephone':\n          if (infoBlock[key]) {\n            message += \"<p itemprop=\\\"telephone\\\" itemscope itemtype=\\\"http://schema.org/LocalBusiness\\\"class='m-0'>\".concat(infoBlock[key], \"</p>\");\n          }\n\n          break;\n\n        default:\n          message = 'There is no restaurant information.';\n      }\n    });\n  }); // opening hours\n\n  if (marker.openingHours.filter(function (line) {\n    return line.day.length > 0;\n  }).length > 0) {\n    message += '<br />';\n    marker.openingHours.forEach(function (line) {\n      if (line.day.length > 0) {\n        message += \"<p class=\\\"d-flex mt-0 mb-0\\\">\".concat(line.day, \": <span class=\\\"ml-3 text-right flex-grow-1\\\">\").concat(line.hours, \"</span></p>\");\n      }\n    });\n  }\n\n  return message;\n}\n\nfunction addInfoWindow(marker) {\n  var infoWindow = new window.google.maps.InfoWindow({\n    content: \"<div itemscope itemtype=\\\"http://schema.org/LocalBusiness\\\"><div itemscope itemtype=\\\"http://schema.org/Place\\\">\".concat(makeInfoWindowContent(marker), \"</div></div>\")\n  });\n\n  if (prevWindow) {\n    prevWindow.close();\n  }\n\n  if (prevMarker) {\n    prevMarker.setIcon('/assets/default-icons/marker.png');\n  }\n\n  prevWindow = infoWindow;\n  prevMarker = marker;\n  marker.setIcon('/assets/default-icons/marker-dark.png');\n  infoWindow.open(map, marker);\n}\n\nfunction openMarker(mapEl, marker) {\n  mapEl.setZoom(15);\n  mapEl.setCenter(marker.getPosition());\n  addInfoWindow(marker);\n}\n\nfunction getCountry() {\n  switch (window.locale) {\n    case 'be':\n      return 'belgium';\n\n    case 'fr':\n      return 'france';\n\n    case 'nl':\n      return 'netherlands';\n\n    case 'de':\n      return 'belgium';\n\n    case 'en':\n      return 'france';\n\n    default:\n      return 'belgium';\n  }\n}\n\nfunction setCountryZoom(geoData, country) {\n  map.setCenter(geoData[country].location);\n  map.fitBounds(geoData[country].viewport);\n\n  switch (country) {\n    case 'belgium':\n      map.setZoom(map.getZoom() + 10);\n      break;\n\n    case 'france':\n      map.setZoom(map.getZoom() + 1.25);\n      break;\n\n    case 'netherlands':\n      map.setZoom(map.getZoom() + 1);\n      break;\n\n    default:\n      break;\n  }\n}\n\nfunction initMap() {\n  map = new window.google.maps.Map(document.getElementById('map'), {\n    zoom: 10,\n    disableDefaultUI: false,\n    mapTypeControl: false,\n    styles: [{\n      featureType: 'landscape',\n      elementType: 'labels',\n      stylers: [{\n        visibility: 'off'\n      }]\n    }, {\n      featureType: 'transit',\n      elementType: 'labels',\n      stylers: [{\n        visibility: 'off'\n      }]\n    }, {\n      featureType: 'poi',\n      elementType: 'labels',\n      stylers: [{\n        visibility: 'off'\n      }]\n    }, {\n      featureType: 'water',\n      elementType: 'labels',\n      stylers: [{\n        visibility: 'off'\n      }]\n    }, {\n      featureType: 'road',\n      elementType: 'labels.icon',\n      stylers: [{\n        visibility: 'off'\n      }]\n    }, {\n      stylers: [{\n        hue: '#00aaff'\n      }, {\n        saturation: -100\n      }, {\n        gamma: 2.15\n      }, {\n        lightness: 12\n      }]\n    }, {\n      featureType: 'road',\n      elementType: 'labels.text.fill',\n      stylers: [{\n        visibility: 'on'\n      }, {\n        lightness: 24\n      }]\n    }, {\n      featureType: 'road',\n      elementType: 'geometry',\n      stylers: [{\n        lightness: 57\n      }]\n    }]\n  });\n  country = getCountry();\n  setCountryZoom(_country_data__WEBPACK_IMPORTED_MODULE_0__, country);\n\n  if (window.locations) {\n    var locations = JSON.parse(window.locations);\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n      for (var _iterator = locations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n        var location = _step.value;\n        setMarker(location);\n      }\n    } catch (err) {\n      _didIteratorError = true;\n      _iteratorError = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion && _iterator.return != null) {\n          _iterator.return();\n        }\n      } finally {\n        if (_didIteratorError) {\n          throw _iteratorError;\n        }\n      }\n    }\n\n    var markerCluster = new MarkerClusterer(map, markers, {\n      imagePath: '/assets/default-icons/m'\n    }); // init search box\n\n    initSearch();\n  }\n}\n\nfunction initSearch() {\n  var autocomplete = new window.google.maps.places.Autocomplete(document.getElementById('map-input')); // Bind the map's bounds (viewport) property to the autocomplete object,\n  // so that the autocomplete requests use the current map bounds for the\n  // bounds option in the request.\n\n  autocomplete.bindTo('bounds', map); // this is hardcoded for now\n\n  autocomplete.setComponentRestrictions({\n    country: ['be', 'nl', 'fr', 'lu']\n  });\n  autocomplete.addListener('place_changed', function () {\n    var place = autocomplete.getPlace();\n\n    if (!place.geometry) {\n      return;\n    }\n\n    map.setCenter(place.geometry.location);\n    map.setZoom(13);\n  });\n}\n\nfunction setMarker(location) {\n  var marker = new window.google.maps.Marker({\n    position: {\n      lat: Number(location.lat),\n      lng: Number(location.long)\n    },\n    map: map,\n    id: location.id,\n    title: location.name,\n    icon: '/assets/default-icons/marker.png',\n    contactInfo: location.contactInfo,\n    openingHours: location.openingHours\n  });\n  marker.addListener('click', function () {\n    openMarker(map, marker);\n  });\n  markers.push(marker);\n}\n\n//# sourceURL=webpack:///./src/assets/scripts/contact/map.js?"
        );

        /***/
      },

    /***/ "./src/assets/scripts/cookies.js":
      /*!***************************************!*\
  !*** ./src/assets/scripts/cookies.js ***!
  \***************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cookies_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cookies/helpers */ \"./src/assets/scripts/cookies/helpers.js\");\n\nvar ACCEPTED_COOKIE = 'hasAcceptedCookies';\nvar ACCEPTED_ANALYTICS = 'hasAcceptedAnalytics';\n\nvar initCookies = function initCookies() {\n  var hasAcceptedCookies = Object(_cookies_helpers__WEBPACK_IMPORTED_MODULE_0__[\"getCookie\"])(ACCEPTED_COOKIE);\n  var hasAcceptedAnalytics = Object(_cookies_helpers__WEBPACK_IMPORTED_MODULE_0__[\"getCookie\"])(ACCEPTED_ANALYTICS);\n  var cookieNotice = document.querySelector('.cookie');\n  var revokeCookiesSection = document.querySelector('.revoke-cookies-section');\n\n  if (cookieNotice) {\n    if (!hasAcceptedCookies && !hasAcceptedAnalytics) {\n      cookieNotice.setAttribute('open', true);\n      setMargin(cookieNotice);\n      cookieNotice.querySelectorAll('.cookie-buttons button').forEach(function (button) {\n        button.addEventListener('click', function () {\n          cookieNotice.removeAttribute('open');\n          Object(_cookies_helpers__WEBPACK_IMPORTED_MODULE_0__[\"setCookie\"])(ACCEPTED_COOKIE, true);\n          setMargin(cookieNotice);\n\n          if (Boolean(button.getAttribute('data-accept'))) {\n            if (revokeCookiesSection) {\n              revokeCookiesSection.classList.remove('d-none');\n            }\n\n            Object(_cookies_helpers__WEBPACK_IMPORTED_MODULE_0__[\"setCookie\"])(ACCEPTED_ANALYTICS, true);\n            initGoogleAnalytics();\n          }\n        });\n      });\n    }\n  }\n\n  if (revokeCookiesSection) {\n    if (hasAcceptedAnalytics) {\n      revokeCookiesSection.classList.remove('d-none');\n    }\n\n    revokeCookiesSection.querySelector('button').addEventListener('click', function () {\n      Object(_cookies_helpers__WEBPACK_IMPORTED_MODULE_0__[\"deleteCookie\"])(ACCEPTED_ANALYTICS);\n      Object(_cookies_helpers__WEBPACK_IMPORTED_MODULE_0__[\"deleteCookie\"])(ACCEPTED_COOKIE);\n      Object(_cookies_helpers__WEBPACK_IMPORTED_MODULE_0__[\"deleteCookie\"])(\"_gat_gtag_\".concat(window.googleAnalyticsKey));\n      disableGoogleAnalytics();\n      revokeCookiesSection.classList.add('d-none');\n    });\n  }\n};\n\nvar initGoogleAnalytics = function initGoogleAnalytics() {\n  window.dataLayer = window.dataLayer || [];\n\n  function gtag() {\n    dataLayer.push(arguments);\n  }\n\n  gtag('js', new Date());\n  gtag('config', window.googleAnalyticsKey);\n};\n\nvar disableGoogleAnalytics = function disableGoogleAnalytics() {\n  window[\"ga-disable-\".concat(window.googleAnalyticsKey)] = true;\n};\n\nvar setMargin = function setMargin(cookieNotice) {\n  document.querySelector('.content').style.marginTop = \"\".concat(cookieNotice.offsetHeight, \"px\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initCookies);\n\n//# sourceURL=webpack:///./src/assets/scripts/cookies.js?"
        );

        /***/
      },

    /***/ "./src/assets/scripts/cookies/helpers.js":
      /*!***********************************************!*\
  !*** ./src/assets/scripts/cookies/helpers.js ***!
  \***********************************************/
      /*! exports provided: getCookie, setCookie, deleteCookie */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCookie\", function() { return getCookie; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setCookie\", function() { return setCookie; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteCookie\", function() { return deleteCookie; });\nvar getCookie = function getCookie(name) {\n  var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');\n  return v ? v[2] : null;\n};\nvar setCookie = function setCookie(name, value) {\n  var days = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 30;\n  var d = new Date();\n  d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);\n  document.cookie = name + '=' + value + ';path=/;expires=' + d.toGMTString();\n};\nvar deleteCookie = function deleteCookie(name) {\n  setCookie(name, '', -1);\n};\n\n//# sourceURL=webpack:///./src/assets/scripts/cookies/helpers.js?"
        );

        /***/
      },

    /***/ "./src/assets/scripts/index.js":
      /*!*************************************!*\
  !*** ./src/assets/scripts/index.js ***!
  \*************************************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_styles_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/styles/index.scss */ "./src/assets/styles/index.scss");\n/* harmony import */ var _assets_styles_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_index_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contact_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact/datepicker */ "./src/assets/scripts/contact/datepicker.js");\n/* harmony import */ var _cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cookies */ "./src/assets/scripts/cookies.js");\n/* harmony import */ var _contact_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/map */ "./src/assets/scripts/contact/map.js");\n/* harmony import */ var _navigation_language__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigation/language */ "./src/assets/scripts/navigation/language.js");\n/* harmony import */ var _navigation_sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navigation/sidebar */ "./src/assets/scripts/navigation/sidebar.js");\n\n\n\n\n\n\n\nwindow.addEventListener(\'DOMContentLoaded\', function () {\n  document.querySelector(\'.preload\').classList.remove(\'preload\');\n  Object(_cookies__WEBPACK_IMPORTED_MODULE_3__["default"])();\n}, false);\n\nif (document.querySelector(\'#map\')) {\n  window.initMap = _contact_map__WEBPACK_IMPORTED_MODULE_4__["initMap"];\n}\n\nObject(_navigation_sidebar__WEBPACK_IMPORTED_MODULE_6__["default"])();\nObject(_navigation_language__WEBPACK_IMPORTED_MODULE_5__["default"])();\nObject(_contact_datepicker__WEBPACK_IMPORTED_MODULE_2__["default"])();\n\n//# sourceURL=webpack:///./src/assets/scripts/index.js?'
        );

        /***/
      },

    /***/ "./src/assets/scripts/navigation/language.js":
      /*!***************************************************!*\
  !*** ./src/assets/scripts/navigation/language.js ***!
  \***************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          "__webpack_require__.r(__webpack_exports__);\nvar languageSwitcher = function languageSwitcher() {\n  var activeLang = document.querySelector('#active-lang');\n  var langSwitcher = document.querySelector('#language-switcher');\n  activeLang.addEventListener('click', function () {\n    if (langSwitcher.classList.contains('show')) {\n      langSwitcher.classList.toggle('show-items');\n      setTimeout(function () {\n        langSwitcher.classList.toggle('show');\n      }, 100);\n    } else {\n      langSwitcher.classList.toggle('show');\n      setTimeout(function () {\n        langSwitcher.classList.toggle('show-items');\n      }, 100);\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (languageSwitcher);\n\n//# sourceURL=webpack:///./src/assets/scripts/navigation/language.js?"
        );

        /***/
      },

    /***/ "./src/assets/scripts/navigation/sidebar.js":
      /*!**************************************************!*\
  !*** ./src/assets/scripts/navigation/sidebar.js ***!
  \**************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          "__webpack_require__.r(__webpack_exports__);\nvar toggleSidebar = function toggleSidebar() {\n  var sidebarToggle = document.querySelector('#sidebar-toggle');\n  var sidebarContainer = document.querySelector('#sidebar-container');\n\n  if (sidebarToggle && sidebarContainer) {\n    sidebarToggle.addEventListener('click', function () {\n      sidebarContainer.classList.toggle('open');\n    });\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (toggleSidebar);\n\n//# sourceURL=webpack:///./src/assets/scripts/navigation/sidebar.js?"
        );

        /***/
      },

    /***/ "./src/assets/styles/index.scss":
      /*!**************************************!*\
  !*** ./src/assets/styles/index.scss ***!
  \**************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          "// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/assets/styles/index.scss?"
        );

        /***/
      },

    /******/
  }
);
