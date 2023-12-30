


/*!
 * Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2023 Fonticons, Inc.
 */

(function (global, factory) {
  // Check the environment and call the factory function accordingly
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () {
  'use strict';

  // Utility functions
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      }));
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }

    return target;
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  // Global variables
  var _WINDOW = {};
  var _DOCUMENT = {};

  try {
    // Attempt to get window and document objects
    if (typeof window !== 'undefined') _WINDOW = window;
    if (typeof document !== 'undefined') _DOCUMENT = document;
  } catch (e) {}

  var _ref = _WINDOW.navigator || {},
    _ref$userAgent = _ref.userAgent,
    userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;

  // Alias for global variables
  var WINDOW = _WINDOW;
  var DOCUMENT = _DOCUMENT;

  // Environment checks
  var IS_BROWSER = !!WINDOW.document;
  var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
  var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

  // Arrays to store functions and loaded status
  var functions = [];
  var loaded = false;

  // Listener function for DOMContentLoaded event
  var listener = function listener() {
    DOCUMENT.removeEventListener('DOMContentLoaded', listener);
    loaded = true;
    functions.map(function (fn) {
      return fn();
    });
  };

  if (IS_DOM) {
    // Check if DOMContentLoaded event has already occurred
    loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);

    // Add event listener for DOMContentLoaded if not already loaded
    if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
  }

  // Function to execute when DOM is ready
  function domready(fn) {
    if (!IS_DOM) return;
    loaded ? setTimeout(fn, 0) : functions.push(fn);
  }

  // Function to report test results
  function report(_ref) {
    var nodesTested = _ref.nodesTested,
      nodesFound = _ref.nodesFound;
    var timedOutTests = {};

    for (var key in nodesFound) {
      if (!(nodesTested.conflict[key] || nodesTested.noConflict[key])) {
        timedOutTests[key] = nodesFound[key];
      }
    }

    var conflictsCount = Object.keys(nodesTested.conflict).length;

    if (conflictsCount > 0) {
      console.info("%cConflict".concat(conflictsCount > 1 ? 's' : '', " found:"), 'color: darkred; font-size: large');
      var data = {};

      for (var _key in nodesTested.conflict) {
        var item = nodesTested.conflict[_key];
        data[_key] = {
          'tagName': item.tagName,
          'src/href': item.src || item.href || 'n/a',
          'innerText excerpt': item.innerText && item.innerText !== '' ? item.innerText.slice(0, 200) + '...' : '(empty)'
        };
      }

      console.table(data);
    }

    var noConflictsCount = Object.keys(nodesTested.noConflict).length;

    if (noConflictsCount > 0) {
      console.info("%cNo conflicts found:", 'color: darkgreen; font-size: large');
      var _data = {};

      for (var _key2 in nodesTested.noConflict) {
        var _item = nodesTested.noConflict[_key2];
        _data[_key2] = {
          'tagName': _item.tagName,
          'src/href': _item.src || _item.href || 'n/a',
          'innerText excerpt': _item.innerText && _item.innerText !== '' ? _item.innerText.slice(0, 200) + '...' : '(empty)'
        };
      }

      console.table(_data);
    }

    var timedOutCount = Object.keys(timedOutTests).length;

    if (timedOutCount > 0) {
      console.warn("%cTimed out:".concat(timedOutCount > 1 ? ' ' : '', timedOutCount > 1 ? '' : 'No', " test".concat(timedOutCount > 1 ? 's' : '', " responded within the given timeout. See browser console for details."), 'color: darkorange; font-size: large'));
    }
  }

  // Main function to test conflicts
  function testConflicts(options) {
    var {
      tests,
      timeout = 10000
    } = options;

    if (!IS_DOM || !tests || tests.length === 0) {
      console.error('Invalid arguments provided to testConflicts.');
      return;
    }

    var nodesTested = {
      conflict: {},
      noConflict: {}
    };
    var nodesFound = {};
    var testCount = tests.length;
    var finishedTests = 0;
    var timeoutId;
    var callback = options.callback || function () {};

    // Function to handle test completion
    function testComplete(node, isConflict) {
      var key = "".concat(node.tagName, "-").concat(node.src || node.href || node.innerText);
      nodesFound[key] = node;

      if (isConflict) {
        nodesTested.conflict[key] = node;
      } else {
        nodesTested.noConflict[key] = node;
      }

      finishedTests += 1;

      if (finishedTests === testCount) {
        clearTimeout(timeoutId);
        report({
          nodesTested,
          nodesFound
        });
        callback({
          nodesTested,
          nodesFound
        });
      }
    }

    // Function to handle test timeout
    function testTimeout() {
      console.error('Test timeout reached. Not all tests completed.');
      report({
        nodesTested,
        nodesFound
      });
      callback({
        nodesTested,
        nodesFound
      });
    }

    // Set timeout for test completion
    timeoutId = setTimeout(testTimeout, timeout);

    // Perform tests
    tests.forEach(function (test) {
      var {
        src,
        href,
        tagName,
        noConflict,
        afterTest
      } = test;

      if (!tagName || (!src && !href)) {
        console.error('Invalid test configuration:', test);
        testComplete({}, false);
        return;
      }

      var node = DOCUMENT.createElement(tagName);

      // Set attributes based on the test configuration
      if (tagName === 'script') {
        node.type = 'text/javascript';
        node.async = true;
        node.defer = true;
      } else if (tagName === 'link') {
        node.rel = 'stylesheet';
        node.type = 'text/css';
      }

      if (src) node.src = src;
      if (href) node.href = href;

      // Append the node to the document
      DOCUMENT.head.appendChild(node);

      // Function to check for conflicts
      function checkForConflict() {
        // Check for conflict
        var isConflict = false;

        if (noConflict) {
          // Check for conflict using the noConflict function
          isConflict = noConflict(_WINDOW);
        } else {
          // Check for conflict by comparing the global object before and after the test
          var originalGlobal = _objectSpread2({}, _WINDOW);
          afterTest(_WINDOW);
          var modifiedGlobal = _WINDOW;

          for (var key in modifiedGlobal) {
            if (originalGlobal[key] !== modifiedGlobal[key]) {
              isConflict = true;
              break;
            }
          }
        }

        // Clean up and complete the test
        DOCUMENT.head.removeChild(node);
        testComplete({
          tagName,
          src,
          href,
          innerText: node.innerText
        }, isConflict);
      }

      // Add listener for script load event
      if (tagName === 'script') {
        node.addEventListener('load', checkForConflict);
      }

      // Execute the test
      try {
        afterTest(_WINDOW, checkForConflict);
      } catch (error) {
        console.error('Error executing test:', error);
        testComplete({}, false);
      }
    });
  }

  // Expose the testConflicts function to the global scope
  _WINDOW.testConflicts = testConflicts;

  // Export the domready function
  _WINDOW.domready = domready;

  // Return an object with the exposed functions
  return {
    testConflicts,
    domready
  };
})));


/*!
 * Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2023 Fonticons, Inc.
 */

(function (global, factory) {
  // Check the environment and call the factory function accordingly
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () {
  'use strict';

  // Utility functions
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      }));
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }

    return target;
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  // Global variables
  var _WINDOW = {};
  var _DOCUMENT = {};

  try {
    // Attempt to get window and document objects
    if (typeof window !== 'undefined') _WINDOW = window;
    if (typeof document !== 'undefined') _DOCUMENT = document;
  } catch (e) {}

  var _ref = _WINDOW.navigator || {},
    _ref$userAgent = _ref.userAgent,
    userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;

  // Alias for global variables
  var WINDOW = _WINDOW;
  var DOCUMENT = _DOCUMENT;

  // Environment checks
  var IS_BROWSER = !!WINDOW.document;
  var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
  var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

  // Arrays to store functions and loaded status
  var functions = [];
  var loaded = false;

  // Listener function for DOMContentLoaded event
  var listener = function listener() {
    DOCUMENT.removeEventListener('DOMContentLoaded', listener);
    loaded = true;
    functions.map(function (fn) {
      return fn();
    });
  };

  if (IS_DOM) {
    // Check if DOMContentLoaded event has already occurred
    loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);

    // Add event listener for DOMContentLoaded if not already loaded
    if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
  }

  // Function to execute when DOM is ready
  function domready(fn) {
    if (!IS_DOM) return;
    loaded ? setTimeout(fn, 0) : functions.push(fn);
  }

  // Function to report test results
  function report(_ref) {
    var nodesTested = _ref.nodesTested,
      nodesFound = _ref.nodesFound;
    var timedOutTests = {};

    for (var key in nodesFound) {
      if (!(nodesTested.conflict[key] || nodesTested.noConflict[key])) {
        timedOutTests[key] = nodesFound[key];
      }
    }

    var conflictsCount = Object.keys(nodesTested.conflict).length;

    if (conflictsCount > 0) {
      console.info("%cConflict".concat(conflictsCount > 1 ? 's' : '', " found:"), 'color: darkred; font-size: large');
      var data = {};

      for (var _key in nodesTested.conflict) {
        var item = nodesTested.conflict[_key];
        data[_key] = {
          'tagName': item.tagName,
          'src/href': item.src || item.href || 'n/a',
          'innerText excerpt': item.innerText && item.innerText !== '' ? item.innerText.slice(0, 200) + '...' : '(empty)'
        };
      }

      console.table(data);
    }

    var noConflictsCount = Object.keys(nodesTested.noConflict).length;

    if (noConflictsCount > 0) {
      console.info("%cNo conflicts found:", 'color: darkgreen; font-size: large');
      var _data = {};

      for (var _key2 in nodesTested.noConflict) {
        var _item = nodesTested.noConflict[_key2];
        _data[_key2] = {
          'tagName': _item.tagName,
          'src/href': _item.src || _item.href || 'n/a',
          'innerText excerpt': _item.innerText && _item.innerText !== '' ? _item.innerText.slice(0, 200) + '...' : '(empty)'
        };
      }

      console.table(_data);
    }

    var timedOutCount = Object.keys(timedOutTests).length;

    if (timedOutCount > 0) {
      console.warn("%cTimed out:".concat(timedOutCount > 1 ? ' ' : '', timedOutCount > 1 ? '' : 'No', " test".concat(timedOutCount > 1 ? 's' : '', " responded within the given timeout. See browser console for details."), 'color: darkorange; font-size: large'));
    }
  }

  // Main function to test conflicts
  function testConflicts(options) {
    var {
      tests,
      timeout = 10000
    } = options;

    if (!IS_DOM || !tests || tests.length === 0) {
      console.error('Invalid arguments provided to testConflicts.');
      return;
    }

    var nodesTested = {
      conflict: {},
      noConflict: {}
    };
    var nodesFound = {};
    var testCount = tests.length;
    var finishedTests = 0;
    var timeoutId;
    var callback = options.callback || function () {};

    // Function to handle test completion
    function testComplete(node, isConflict) {
      var key = "".concat(node.tagName, "-").concat(node.src || node.href || node.innerText);
      nodesFound[key] = node;

      if (isConflict) {
        nodesTested.conflict[key] = node;
      } else {
        nodesTested.noConflict[key] = node;
      }

      finishedTests += 1;

      if (finishedTests === testCount) {
        clearTimeout(timeoutId);
        report({
          nodesTested,
          nodesFound
        });
        callback({
          nodesTested,
          nodesFound
        });
      }
    }

    // Function to handle test timeout
    function testTimeout() {
      console.error('Test timeout reached. Not all tests completed.');
      report({
        nodesTested,
        nodesFound
      });
      callback({
        nodesTested,
        nodesFound
      });
    }

    // Set timeout for test completion
    timeoutId = setTimeout(testTimeout, timeout);

    // Perform tests
    tests.forEach(function (test) {
      var {
        src,
        href,
        tagName,
        noConflict,
        afterTest
      } = test;

      if (!tagName || (!src && !href)) {
        console.error('Invalid test configuration:', test);
        testComplete({}, false);
        return;
      }

      var node = DOCUMENT.createElement(tagName);

      // Set attributes based on the test configuration
      if (tagName === 'script') {
        node.type = 'text/javascript';
        node.async = true;
        node.defer = true;
      } else if (tagName === 'link') {
        node.rel = 'stylesheet';
        node.type = 'text/css';
      }

      if (src) node.src = src;
      if (href) node.href = href;

      // Append the node to the document
      DOCUMENT.head.appendChild(node);

      // Function to check for conflicts
      function checkForConflict() {
        // Check for conflict
        var isConflict = false;

        if (noConflict) {
          // Check for conflict using the noConflict function
          isConflict = noConflict(_WINDOW);
        } else {
          // Check for conflict by comparing the global object before and after the test
          var originalGlobal = _objectSpread2({}, _WINDOW);
          afterTest(_WINDOW);
          var modifiedGlobal = _WINDOW;

          for (var key in modifiedGlobal) {
            if (originalGlobal[key] !== modifiedGlobal[key]) {
              isConflict = true;
              break;
            }
          }
        }

        // Clean up and complete the test
        DOCUMENT.head.removeChild(node);
        testComplete({
          tagName,
          src,
          href,
          innerText: node.innerText
        }, isConflict);
      }

      // Add listener for script load event
      if (tagName === 'script') {
        node.addEventListener('load', checkForConflict);
      }

      // Execute the test
      try {
        afterTest(_WINDOW, checkForConflict);
      } catch (error) {
        console.error('Error executing test:', error);
        testComplete({}, false);
      }
    });
  }

  // Expose the testConflicts function to the global scope
  _WINDOW.testConflicts = testConflicts;

  // Export the domready function
  _WINDOW.domready = domready;

  // Return an object with the exposed functions
  return {
    testConflicts,
    domready
  };
})));

/*!
 * Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2023 Fonticons, Inc.
 */

(function (global, factory) {
  // Check the environment and call the factory function accordingly
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () {
  'use strict';

  // Utility functions
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      }));
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }

    return target;
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  // Global variables
  var _WINDOW = {};
  var _DOCUMENT = {};

  try {
    // Attempt to get window and document objects
    if (typeof window !== 'undefined') _WINDOW = window;
    if (typeof document !== 'undefined') _DOCUMENT = document;
  } catch (e) {}

  var _ref = _WINDOW.navigator || {},
    _ref$userAgent = _ref.userAgent,
    userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;

  // Alias for global variables
  var WINDOW = _WINDOW;
  var DOCUMENT = _DOCUMENT;

  // Environment checks
  var IS_BROWSER = !!WINDOW.document;
  var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
  var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

  // Arrays to store functions and loaded status
  var functions = [];
  var loaded = false;

  // Listener function for DOMContentLoaded event
  var listener = function listener() {
    DOCUMENT.removeEventListener('DOMContentLoaded', listener);
    loaded = true;
    functions.map(function (fn) {
      return fn();
    });
  };

  if (IS_DOM) {
    // Check if DOMContentLoaded event has already occurred
    loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);

    // Add event listener for DOMContentLoaded if not already loaded
    if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
  }

  // Function to execute when DOM is ready
  function domready(fn) {
    if (!IS_DOM) return;
    loaded ? setTimeout(fn, 0) : functions.push(fn);
  }

  // Function to report test results
  function report(_ref) {
    var nodesTested = _ref.nodesTested,
      nodesFound = _ref.nodesFound;
    var timedOutTests = {};

    for (var key in nodesFound) {
      if (!(nodesTested.conflict[key] || nodesTested.noConflict[key])) {
        timedOutTests[key] = nodesFound[key];
      }
    }

    var conflictsCount = Object.keys(nodesTested.conflict).length;

    if (conflictsCount > 0) {
      console.info("%cConflict".concat(conflictsCount > 1 ? 's' : '', " found:"), 'color: darkred; font-size: large');
      var data = {};

      for (var _key in nodesTested.conflict) {
        var item = nodesTested.conflict[_key];
        data[_key] = {
          'tagName': item.tagName,
          'src/href': item.src || item.href || 'n/a',
          'innerText excerpt': item.innerText && item.innerText !== '' ? item.innerText.slice(0, 200) + '...' : '(empty)'
        };
      }

      console.table(data);
    }

    var noConflictsCount = Object.keys(nodesTested.noConflict).length;

    if (noConflictsCount > 0) {
      console.info("%cNo conflicts found:", 'color: darkgreen; font-size: large');
      var _data = {};

      for (var _key2 in nodesTested.noConflict) {
        var _item = nodesTested.noConflict[_key2];
        _data[_key2] = {
          'tagName': _item.tagName,
          'src/href': _item.src || _item.href || 'n/a',
          'innerText excerpt': _item.innerText && _item.innerText !== '' ? _item.innerText.slice(0, 200) + '...' : '(empty)'
        };
      }

      console.table(_data);
    }

    var timedOutCount = Object.keys(timedOutTests).length;

    if (timedOutCount > 0) {
      console.warn("%cTimed out:".concat(timedOutCount > 1 ? ' ' : '', timedOutCount > 1 ? '' : 'No', " test".concat(timedOutCount > 1 ? 's' : '', " responded within the given timeout. See browser console for details."), 'color: darkorange; font-size: large'));
    }
  }

  // Main function to test conflicts
  function testConflicts(options) {
    var {
      tests,
      timeout = 10000
    } = options;

    if (!IS_DOM || !tests || tests.length === 0) {
      console.error('Invalid arguments provided to testConflicts.');
      return;
    }

    var nodesTested = {
      conflict: {},
      noConflict: {}
    };
    var nodesFound = {};
    var testCount = tests.length;
    var finishedTests = 0;
    var timeoutId;
    var callback = options.callback || function () {};

    // Function to handle test completion
    function testComplete(node, isConflict) {
      var key = "".concat(node.tagName, "-").concat(node.src || node.href || node.innerText);
      nodesFound[key] = node;

      if (isConflict) {
        nodesTested.conflict[key] = node;
      } else {
        nodesTested.noConflict[key] = node;
      }

      finishedTests += 1;

      if (finishedTests === testCount) {
        clearTimeout(timeoutId);
        report({
          nodesTested,
          nodesFound
        });
        callback({
          nodesTested,
          nodesFound
        });
      }
    }

    // Function to handle test timeout
    function testTimeout() {
      console.error('Test timeout reached. Not all tests completed.');
      report({
        nodesTested,
        nodesFound
      });
      callback({
        nodesTested,
        nodesFound
      });
    }

    // Set timeout for test completion
    timeoutId = setTimeout(testTimeout, timeout);

    // Perform tests
    tests.forEach(function (test) {
      var {
        src,
        href,
        tagName,
        noConflict,
        afterTest
      } = test;

      if (!tagName || (!src && !href)) {
        console.error('Invalid test configuration:', test);
        testComplete({}, false);
        return;
      }

      var node = DOCUMENT.createElement(tagName);

      // Set attributes based on the test configuration
      if (tagName === 'script') {
        node.type = 'text/javascript';
        node.async = true;
        node.defer = true;
      } else if (tagName === 'link') {
        node.rel = 'stylesheet';
        node.type = 'text/css';
      }

      if (src) node.src = src;
      if (href) node.href = href;

      // Append the node to the document
      DOCUMENT.head.appendChild(node);

      // Function to check for conflicts
      function checkForConflict() {
        // Check for conflict
        var isConflict = false;

        if (noConflict) {
          // Check for conflict using the noConflict function
          isConflict = noConflict(_WINDOW);
        } else {
          // Check for conflict by comparing the global object before and after the test
          var originalGlobal = _objectSpread2({}, _WINDOW);
          afterTest(_WINDOW);
          var modifiedGlobal = _WINDOW;

          for (var key in modifiedGlobal) {
            if (originalGlobal[key] !== modifiedGlobal[key]) {
              isConflict = true;
              break;
            }
          }
        }

        // Clean up and complete the test
        DOCUMENT.head.removeChild(node);
        testComplete({
          tagName,
          src,
          href,
          innerText: node.innerText
        }, isConflict);
      }

      // Add listener for script load event
      if (tagName === 'script') {
        node.addEventListener('load', checkForConflict);
      }

      // Execute the test
      try {
        afterTest(_WINDOW, checkForConflict);
      } catch (error) {
        console.error('Error executing test:', error);
        testComplete({}, false);
      }
    });
  }

  // Expose the testConflicts function to the global scope
  _WINDOW.testConflicts = testConflicts;

  // Export the domready function
  _WINDOW.domready = domready;

  // Return an object with the exposed functions
  return {
    testConflicts,
    domready
  };
})));


/*!
 * Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2023 Fonticons, Inc.
 */

(function (global, factory) {
  // Check the environment and call the factory function accordingly
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () {
  'use strict';

  // Utility functions
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      }));
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }

    return target;
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  // Global variables
  var _WINDOW = {};
  var _DOCUMENT = {};

  try {
    // Attempt to get window and document objects
    if (typeof window !== 'undefined') _WINDOW = window;
    if (typeof document !== 'undefined') _DOCUMENT = document;
  } catch (e) {}

  var _ref = _WINDOW.navigator || {},
    _ref$userAgent = _ref.userAgent,
    userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;

  // Alias for global variables
  var WINDOW = _WINDOW;
  var DOCUMENT = _DOCUMENT;

  // Environment checks
  var IS_BROWSER = !!WINDOW.document;
  var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
  var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

  // Arrays to store functions and loaded status
  var functions = [];
  var loaded = false;

  // Listener function for DOMContentLoaded event
  var listener = function listener() {
    DOCUMENT.removeEventListener('DOMContentLoaded', listener);
    loaded = true;
    functions.map(function (fn) {
      return fn();
    });
  };

  if (IS_DOM) {
    // Check if DOMContentLoaded event has already occurred
    loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);

    // Add event listener for DOMContentLoaded if not already loaded
    if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
  }

  // Function to execute when DOM is ready
  function domready(fn) {
    if (!IS_DOM) return;
    loaded ? setTimeout(fn, 0) : functions.push(fn);
  }

  // Function to report test results
  function report(_ref) {
    var nodesTested = _ref.nodesTested,
      nodesFound = _ref.nodesFound;
    var timedOutTests = {};

    for (var key in nodesFound) {
      if (!(nodesTested.conflict[key] || nodesTested.noConflict[key])) {
        timedOutTests[key] = nodesFound[key];
      }
    }

    var conflictsCount = Object.keys(nodesTested.conflict).length;

    if (conflictsCount > 0) {
      console.info("%cConflict".concat(conflictsCount > 1 ? 's' : '', " found:"), 'color: darkred; font-size: large');
      var data = {};

      for (var _key in nodesTested.conflict) {
        var item = nodesTested.conflict[_key];
        data[_key] = {
          'tagName': item.tagName,
          'src/href': item.src || item.href || 'n/a',
          'innerText excerpt': item.innerText && item.innerText !== '' ? item.innerText.slice(0, 200) + '...' : '(empty)'
        };
      }

      console.table(data);
    }

    var noConflictsCount = Object.keys(nodesTested.noConflict).length;

    if (noConflictsCount > 0) {
      console.info("%cNo conflicts found:", 'color: darkgreen; font-size: large');
      var _data = {};

      for (var _key2 in nodesTested.noConflict) {
        var _item = nodesTested.noConflict[_key2];
        _data[_key2] = {
          'tagName': _item.tagName,
          'src/href': _item.src || _item.href || 'n/a',
          'innerText excerpt': _item.innerText && _item.innerText !== '' ? _item.innerText.slice(0, 200) + '...' : '(empty)'
        };
      }

      console.table(_data);
    }

    var timedOutCount = Object.keys(timedOutTests).length;

    if (timedOutCount > 0) {
      console.warn("%cTimed out:".concat(timedOutCount > 1 ? ' ' : '', timedOutCount > 1 ? '' : 'No', " test".concat(timedOutCount > 1 ? 's' : '', " responded within the given timeout. See browser console for details."), 'color: darkorange; font-size: large'));
    }
  }

  // Main function to test conflicts
  function testConflicts(options) {
    var {
      tests,
      timeout = 10000
    } = options;

    if (!IS_DOM || !tests || tests.length === 0) {
      console.error('Invalid arguments provided to testConflicts.');
      return;
    }

    var nodesTested = {
      conflict: {},
      noConflict: {}
    };
    var nodesFound = {};
    var testCount = tests.length;
    var finishedTests = 0;
    var timeoutId;
    var callback = options.callback || function () {};

    // Function to handle test completion
    function testComplete(node, isConflict) {
      var key = "".concat(node.tagName, "-").concat(node.src || node.href || node.innerText);
      nodesFound[key] = node;

      if (isConflict) {
        nodesTested.conflict[key] = node;
      } else {
        nodesTested.noConflict[key] = node;
      }

      finishedTests += 1;

      if (finishedTests === testCount) {
        clearTimeout(timeoutId);
        report({
          nodesTested,
          nodesFound
        });
        callback({
          nodesTested,
          nodesFound
        });
      }
    }

    // Function to handle test timeout
    function testTimeout() {
      console.error('Test timeout reached. Not all tests completed.');
      report({
        nodesTested,
        nodesFound
      });
      callback({
        nodesTested,
        nodesFound
      });
    }

    // Set timeout for test completion
    timeoutId = setTimeout(testTimeout, timeout);

    // Perform tests
    tests.forEach(function (test) {
      var {
        src,
        href,
        tagName,
        noConflict,
        afterTest
      } = test;

      if (!tagName || (!src && !href)) {
        console.error('Invalid test configuration:', test);
        testComplete({}, false);
        return;
      }

      var node = DOCUMENT.createElement(tagName);

      // Set attributes based on the test configuration
      if (tagName === 'script') {
        node.type = 'text/javascript';
        node.async = true;
        node.defer = true;
      } else if (tagName === 'link') {
        node.rel = 'stylesheet';
        node.type = 'text/css';
      }

      if (src) node.src = src;
      if (href) node.href = href;

      // Append the node to the document
      DOCUMENT.head.appendChild(node);

      // Function to check for conflicts
      function checkForConflict() {
        // Check for conflict
        var isConflict = false;

        if (noConflict) {
          // Check for conflict using the noConflict function
          isConflict = noConflict(_WINDOW);
        } else {
          // Check for conflict by comparing the global object before and after the test
          var originalGlobal = _objectSpread2({}, _WINDOW);
          afterTest(_WINDOW);
          var modifiedGlobal = _WINDOW;

          for (var key in modifiedGlobal) {
            if (originalGlobal[key] !== modifiedGlobal[key]) {
              isConflict = true;
              break;
            }
          }
        }

        // Clean up and complete the test
        DOCUMENT.head.removeChild(node);
        testComplete({
          tagName,
          src,
          href,
          innerText: node.innerText
        }, isConflict);
      }

      // Add listener for script load event
      if (tagName === 'script') {
        node.addEventListener('load', checkForConflict);
      }

      // Execute the test
      try {
        afterTest(_WINDOW, checkForConflict);
      } catch (error) {
        console.error('Error executing test:', error);
        testComplete({}, false);
      }
    });
  }

  // Expose the testConflicts function to the global scope
  _WINDOW.testConflicts = testConflicts;

  // Export the domready function
  _WINDOW.domready = domready;

  // Return an object with the exposed functions
  return {
    testConflicts,
    domready
  };
})));
