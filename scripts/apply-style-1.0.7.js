//trim.js
/*
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
*/
if (!String.prototype.trim) {
	// Вырезаем BOM и неразрывный пробел
	String.prototype.trim = function() {
		return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
	};
}
//every.js
/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
*/
if (!Array.prototype.every) {
  Array.prototype.every = function(callback, thisArg) {
    var T, k;

    if (this === void 0 || this === null) {
      throw new TypeError('Array.prototype.every called on null or undefined');
    }

    // 1. Let O be the result of calling ToObject passing the this 
    //    value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get internal method
    //    of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If IsCallable(callback) is false, throw a TypeError exception.
    if (callback.__class__ !== 'Function') {
      throw new TypeError(callback + ' is not a function');
    }

    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
    T = (arguments.length > 1) ? thisArg : void 0;

    // 6. Let k be 0.
    k = 0;

    // 7. Repeat, while k < len
    while (k < len) {

      var kValue;

      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty internal 
      //    method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal method
        //    of O with argument Pk.
        kValue = O[k];

        // ii. Let testResult be the result of calling the Call internal method
        //     of callback with T as the this value and argument list 
        //     containing kValue, k, and O.
        var testResult = callback.call(T, kValue, k, O);

        // iii. If ToBoolean(testResult) is false, return false.
        if (!testResult) {
          return false;
        }
      }
      k++;
    }
    return true;
  };
}
//filter.js
/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
*/
if (!Array.prototype.filter) {
  Array.prototype.filter = function(callback, thisArg) {

    if (this === void 0 || this === null) {
      throw new TypeError('Array.prototype.filter called on null or undefined');
    }

    var t = Object(this);
    var len = t.length >>> 0;

    if (callback.__class__ !== 'Function') {
      throw new TypeError(callback + ' is not a function');
    }

    var res = [];

    var T = (arguments.length > 1) ? thisArg : void 0;
    
    for (var i = 0; i < len; i++) {
      if (i in t) {
        var val = t[i];

        // NOTE: Technically this should Object.defineProperty at
        //       the next index, as push can be affected by
        //       properties on Object.prototype and Array.prototype.
        //       But that method's new, and collisions should be
        //       rare, so use the more-compatible alternative.
        if (callback.call(T, val, i, t)) {
          res.push(val);
        }
      }
    }

    return res;
  };
}
//forEach.js
/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
*/
// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.io/#x15.4.4.18
if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(callback, thisArg) {


        if (this === void 0 || this === null) {
            throw new TypeError('Array.prototype.forEach called on null or undefined');
        }

        // 1. Let O be the result of calling toObject() passing the
        // |this| value as the argument.
        var O = Object(this);

        // 2. Let lenValue be the result of calling the Get() internal
        // method of O with the argument "length".
        // 3. Let len be toUint32(lenValue).
        var len = O.length >>> 0;

        // 4. If isCallable(callback) is false, throw a TypeError exception. 
        // See: http://es5.github.com/#x9.11
        if (callback.__class__ !== 'Function') {
            throw new TypeError(callback + ' is not a function');
        }

        // 5. If thisArg was supplied, let T be thisArg; else let
        // T be undefined.
        var T = (arguments.length > 1) ? thisArg : void 0;


        // 6. Let k be 0
        //k = 0;

        // 7. Repeat, while k < len
        for (var k = 0; k < len; k++) {
            var kValue;
            // a. Let Pk be ToString(k).
            //    This is implicit for LHS operands of the in operator
            // b. Let kPresent be the result of calling the HasProperty
            //    internal method of O with argument Pk.
            //    This step can be combined with c
            // c. If kPresent is true, then
            if (k in O) {
                // i. Let kValue be the result of calling the Get internal
                // method of O with argument Pk.
                kValue = O[k];
                // ii. Call the Call internal method of callback with T as
                // the this value and argument list containing kValue, k, and O.
                callback.call(T, kValue, k, O);
            }
        }
        // 8. return undefined
    }
}
//indexOf.js
/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#Polyfill
*/
// Production steps of ECMA-262, Edition 5, 15.4.4.14
// Reference: http://es5.github.io/#x15.4.4.14
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(searchElement, fromIndex) {


    // 1. Let o be the result of calling ToObject passing
    //    the this value as the argument.
    if (this === void 0 || this === null) {
      throw new TypeError('Array.prototype.indexOf called on null or undefined');
    }

    var k;
    var o = Object(this);

    // 2. Let lenValue be the result of calling the Get
    //    internal method of o with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = o.length >>> 0;

    // 4. If len is 0, return -1.
    if (len === 0) {
      return -1;
    }

    // 5. If argument fromIndex was passed let n be
    //    ToInteger(fromIndex); else let n be 0.
    var n = +fromIndex || 0;

    if (Math.abs(n) === Infinity) {
      n = 0;
    }

    // 6. If n >= len, return -1.
    if (n >= len) {
      return -1;
    }

    // 7. If n >= 0, then Let k be n.
    // 8. Else, n<0, Let k be len - abs(n).
    //    If k is less than 0, then let k be 0.
    k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

    // 9. Repeat, while k < len
    while (k < len) {
      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the
      //    HasProperty internal method of o with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      //    i.  Let elementK be the result of calling the Get
      //        internal method of o with the argument ToString(k).
      //   ii.  Let same be the result of applying the
      //        Strict Equality Comparison Algorithm to
      //        searchElement and elementK.
      //  iii.  If same is true, return k.
      if (k in o && o[k] === searchElement) {
        return k;
      }
      k++;
    }
    return -1;
  };
}
//isArray.js
/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
*/
if (!Array.isArray) {
  Array.isArray = function(arg) {

    if (arg === void 0 || arg === null) {
      return false;
    }
  	return (arg.__class__ === 'Array');
  };
}
//lastIndexOf.js
/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
*/
// Production steps of ECMA-262, Edition 5, 15.4.4.15
// Reference: http://es5.github.io/#x15.4.4.15
if (!Array.prototype.lastIndexOf) {
  Array.prototype.lastIndexOf = function(searchElement, fromIndex) {

    if (this === void 0 || this === null) {
      throw new TypeError('Array.prototype.lastIndexOf called on null or undefined');
    }

    var n, k,
      t = Object(this),
      len = t.length >>> 0;
    if (len === 0) {
      return -1;
    }

    n = len - 1;
    if (arguments.length > 1) {
      n = Number(arguments[1]);
      if (n != n) {
        n = 0;
      }
      else if (n != 0 && n != Infinity && n != -Infinity) {
        n = (n > 0 || -1) * Math.floor(Math.abs(n));
      }
    }

    for (k = n >= 0 ? Math.min(n, len - 1) : len - Math.abs(n); k >= 0; k--) {
      if (k in t && t[k] === searchElement) {
        return k;
      }
    }
    return -1;
  };
}
//map.js
/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*/
// Production steps of ECMA-262, Edition 5, 15.4.4.19
// Reference: http://es5.github.io/#x15.4.4.19
if (!Array.prototype.map) {

  Array.prototype.map = function(callback, thisArg) {

    var T, A, k;

    if (this === void 0 || this === null) {
      throw new TypeError('Array.prototype.map called on null or undefined');
    }

    // 1. Let O be the result of calling ToObject passing the |this| 
    //    value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get internal 
    //    method of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If IsCallable(callback) is false, throw a TypeError exception.
    // See: http://es5.github.com/#x9.11
    if (callback.__class__ !== 'Function') {
      throw new TypeError(callback + ' is not a function');
    }

    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
    T = (arguments.length > 1) ? thisArg : void 0;

    // 6. Let A be a new array created as if by the expression new Array(len) 
    //    where Array is the standard built-in constructor with that name and 
    //    len is the value of len.
    A = new Array(len);

    for (var k = 0; k < len; k++) {

      var kValue, mappedValue;

      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty internal 
      //    method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal 
        //    method of O with argument Pk.
        kValue = O[k];

        // ii. Let mappedValue be the result of calling the Call internal 
        //     method of callback with T as the this value and argument 
        //     list containing kValue, k, and O.
        mappedValue = callback.call(T, kValue, k, O);

        // iii. Call the DefineOwnProperty internal method of A with arguments
        // Pk, Property Descriptor
        // { Value: mappedValue,
        //   Writable: true,
        //   Enumerable: true,
        //   Configurable: true },
        // and false.

        // In browsers that support Object.defineProperty, use the following:
        // Object.defineProperty(A, k, {
        //   value: mappedValue,
        //   writable: true,
        //   enumerable: true,
        //   configurable: true
        // });

        // For best browser support, use the following:
        A[k] = mappedValue;
      }
    }
    // 9. return A
    return A;
  };
}
//reduce.js
/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
*/
// Production steps of ECMA-262, Edition 5, 15.4.4.21
// Reference: http://es5.github.io/#x15.4.4.21
if (!Array.prototype.reduce) {
  Array.prototype.reduce = function(callback, initialValue) {

    if (this === void 0 || this === null) {
      throw new TypeError('Array.prototype.reduce called on null or undefined');
    }

    if (callback.__class__ !== 'Function') {
      throw new TypeError(callback + ' is not a function');
    }

    var t = Object(this), len = t.length >>> 0, k = 0, value;

    if (arguments.length > 1) 
      {
        value = initialValue;
      } 
    else 
      {
        while (k < len && !(k in t)) {
          k++; 
        }
        if (k >= len) {
          throw new TypeError('Reduce of empty array with no initial value');
        }
        value = t[k++];
      }

    for (; k < len; k++) {
      if (k in t) {
        value = callback(value, t[k], k, t);
      }
    }
    return value;
  };
}
//reduceRight.js
/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight
*/
// Production steps of ECMA-262, Edition 5, 15.4.4.22
// Reference: http://es5.github.io/#x15.4.4.22
if (!Array.prototype.reduceRight) {
  Array.prototype.reduceRight = function(callback, initialValue) {

    if (this === void 0 || this === null) {
      throw new TypeError('Array.prototype.reduceRight called on null or undefined');
    }

    if (callback.__class__ !== 'Function') {
      throw new TypeError(callback + ' is not a function');
    }

    var t = Object(this), len = t.length >>> 0, k = len - 1, value;
    if (arguments.length > 1) 
      {
        value = initialValue;
      } 
    else 
      {
        while (k >= 0 && !(k in t)) {
          k--;
        }
        if (k < 0) {
          throw new TypeError('Reduce of empty array with no initial value');
        }
        value = t[k--];
      }
      
    for (; k >= 0; k--) {
      if (k in t) {
        value = callback(value, t[k], k, t);
      }
    }
    return value;
  };
}
//some.js
/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
*/
// Production steps of ECMA-262, Edition 5, 15.4.4.17
// Reference: http://es5.github.io/#x15.4.4.17
if (!Array.prototype.some) {
  Array.prototype.some = function(callback, thisArg) {

    if (this === void 0 || this === null) {
      throw new TypeError('Array.prototype.some called on null or undefined');
    }

    if (callback.__class__ !== 'Function') {
      throw new TypeError(callback + ' is not a function');
    }

    var t = Object(this);
    var len = t.length >>> 0;

    var T = arguments.length > 1 ? thisArg : void 0;
    for (var i = 0; i < len; i++) {
      if (i in t && callback.call(T, t[i], i, t)) {
        return true;
      }
    }

    return false;
  };
}
//create.js
if (!Object.create) {
  // Production steps of ECMA-262, Edition 5, 15.2.3.5
  // Reference: http://es5.github.io/#x15.2.3.5
  Object.create = (function() {
    // To save on memory, use a shared constructor
    function Temp() {}

    // make a safe reference to Object.prototype.hasOwnProperty
    var hasOwn = Object.prototype.hasOwnProperty;

    return function(O) {
      // 1. If Type(O) is not Object or Null throw a TypeError exception.
      if (Object(O) !== O && O !== null) {
        throw TypeError('Object prototype may only be an Object or null');
      }

      // 2. Let obj be the result of creating a new object as if by the
      //    expression new Object() where Object is the standard built-in
      //    constructor with that name
      // 3. Set the [[Prototype]] internal property of obj to O.
      Temp.prototype = O;
      var obj = new Temp();
      Temp.prototype = null; // Let's not keep a stray reference to O...

      // 4. If the argument Properties is present and not undefined, add
      //    own properties to obj as if by calling the standard built-in
      //    function Object.defineProperties with arguments obj and
      //    Properties.
      if (arguments.length > 1) {
        // Object.defineProperties does ToObject on its first argument.
        var Properties = Object(arguments[1]);
        for (var prop in Properties) {
          if (hasOwn.call(Properties, prop)) {
            var descriptor = Properties[prop];
            if (Object(descriptor) !== descriptor) {
              throw TypeError(prop + 'must be an object');
            }
            if ('get' in descriptor || 'set' in descriptor) {
              throw new TypeError('getters & setters can not be defined on this javascript engine');
            }
            if ('value' in descriptor) {
              obj[prop] = Properties[prop];
            }

          }
        }
      }

      // 5. Return obj
      return obj;
    };
  })();
}
//defineProperties.js
/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties#Polyfill
*/
if (!Object.defineProperties) {

  Object.defineProperties = function(object, props) {

    function hasProperty(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }

    function convertToDescriptor(desc) {

      if (Object(desc) !== desc) {
        throw new TypeError('Descriptor can only be an Object.');
      }


      var d = {};

      if (hasProperty(desc, "enumerable")) {
        d.enumerable = !!desc.enumerable;
      }

      if (hasProperty(desc, "configurable")) {
        d.configurable = !!desc.configurable;
      }

      if (hasProperty(desc, "value")) {
        d.value = desc.value;
      }

      if (hasProperty(desc, "writable")) {
        d.writable = !!desc.writable;
      }

      if (hasProperty(desc, "get")) {
        throw new TypeError('getters & setters can not be defined on this javascript engine');
      }

      if (hasProperty(desc, "set")) {
        throw new TypeError('getters & setters can not be defined on this javascript engine');
      }

      return d;
    }

    if (Object(object) !== object) {
      throw new TypeError('Object.defineProperties can only be called on Objects.');
    }

    if (Object(props) !== props) {
      throw new TypeError('Properties can only be an Object.');
    }

    var properties = Object(props);
    for (propName in properties) {
      if (hasOwnProperty.call(properties, propName)) {
        var descr = convertToDescriptor(properties[propName]);
        object[propName] = descr.value;
      }
    }
    return object;
  }
}
//defineProperty.js
if (!Object.defineProperty) {

    Object.defineProperty = function defineProperty(object, property, descriptor) {

        if (Object(object) !== object) {
            throw new TypeError('Object.defineProperty can only be called on Objects.');
        }

        if (Object(descriptor) !== descriptor) {
            throw new TypeError('Property description can only be an Object.');
        }

        if ('get' in descriptor || 'set' in descriptor) {
            throw new TypeError('getters & setters can not be defined on this javascript engine');
        }
        // If it's a data property.
        if ('value' in descriptor) {
            // fail silently if 'writable', 'enumerable', or 'configurable'
            // are requested but not supported
            // can't implement these features; allow true but not false
            /* if ( 
                     ('writable' in descriptor && !descriptor.writable) ||
                     ('enumerable' in descriptor && !descriptor.enumerable) ||
                     ('configurable' in descriptor && !descriptor.configurable)
                 )
                     {
                         throw new RangeError('This implementation of Object.defineProperty does not support configurable, enumerable, or writable properties SET to FALSE.');
                     }*/


            object[property] = descriptor.value;
        }
        return object;
    }
}
//freeze.js
/*
https://github.com/es-shims/es5-shim/blob/master/es5-sham.js
*/
// ES5 15.2.3.9
// http://es5.github.com/#x15.2.3.9
if (!Object.freeze) {
    Object.freeze = function freeze(object) {
        if (Object(object) !== object) {
            throw new TypeError('Object.freeze can only be called on Objects.');
        }
        // this is misleading and breaks feature-detection, but
        // allows "securable" code to "gracefully" degrade to working
        // but insecure code.
        return object;
    };
}
//getOwnPropertyNames.js
if (!Object.getOwnPropertyNames) {
    Object.getOwnPropertyNames = function getOwnPropertyNames(object) {

        if (Object(object) !== object) {
            throw new TypeError('Object.getOwnPropertyNames can only be called on Objects.');
        }
        var names = [];
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var propertyIsEnumerable = Object.prototype.propertyIsEnumerable;
        for (var prop in object) {
            if (hasOwnProperty.call(object, prop)) {
                names.push(prop);
            }
        }
        var properties = object.reflect.properties;
        var methods = object.reflect.methods;
        var all = methods.concat(properties);
        for (var i = 0; i < all.length; i++) {
            var prop = all[i].name;
            if (hasOwnProperty.call(object, prop) && !(propertyIsEnumerable.call(object, prop))) {
                names.push(prop);
            }
        }
        return names;
    };
}
//getOwnPropertyDescriptor.js
if (!Object.getOwnPropertyDescriptor) {

    Object.getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
        if (Object(object) !== object) {
            throw new TypeError('Object.getOwnPropertyDescriptor can only be called on Objects.');
        }

        var descriptor;
        if (!Object.prototype.hasOwnProperty.call(object, property)) {
            return descriptor;
        }

        descriptor = {
            enumerable: Object.prototype.propertyIsEnumerable.call(object, property),
            configurable: true
        };

        descriptor.value = object[property];

        var psPropertyType = object.reflect.find(property).type;
        descriptor.writable = !(psPropertyType === "readonly");

        return descriptor;
    }
}
//getPrototypeOf.js
if (!Object.getPrototypeOf) {
	Object.getPrototypeOf = function(object) {
		if (Object(object) !== object) {
			throw new TypeError('Object.getPrototypeOf can only be called on Objects.');
		}
		return object.__proto__;
	}
}
//isExtensible.js
// ES5 15.2.3.13
// http://es5.github.com/#x15.2.3.13
if (!Object.isExtensible) {
    Object.isExtensible = function isExtensible(object) {
        if (Object(object) !== object) {
            throw new TypeError('Object.isExtensible can only be called on Objects.');
        }
        return true;
    };
}
//isFrozen.js
/*
https://github.com/es-shims/es5-shim/blob/master/es5-sham.js
*/
// ES5 15.2.3.12
// http://es5.github.com/#x15.2.3.12
if (!Object.isFrozen) {
    Object.isFrozen = function isFrozen(object) {
        if (Object(object) !== object) {
            throw new TypeError('Object.isFrozen can only be called on Objects.');
        }
        return false;
    };
}
//isSealed.js
/*
https://github.com/es-shims/es5-shim/blob/master/es5-sham.js
*/
// ES5 15.2.3.11
// http://es5.github.com/#x15.2.3.11
if (!Object.isSealed) {
    Object.isSealed = function isSealed(object) {
        if (Object(object) !== object) {
            throw new TypeError('Object.isSealed can only be called on Objects.');
        }
        return false;
    };
}
//keys.js
if (!Object.keys) {
    Object.keys = function(object) {
        if (Object(object) !== object) {
            throw new TypeError('Object.keys can only be called on Objects.');
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var result = [];
        for (var prop in object) {
            if (hasOwnProperty.call(object, prop)) {
                result.push(prop);
            }
        }
        return result;
    };
}
//preventExtensions.js
/*
https://github.com/es-shims/es5-shim/blob/master/es5-sham.js
*/
// ES5 15.2.3.10
// http://es5.github.com/#x15.2.3.10
if (!Object.preventExtensions) {
    Object.preventExtensions = function preventExtensions(object) {

        if (Object(object) !== object) {
            throw new TypeError('Object.preventExtensions can only be called on Objects.');
        }
        // this is misleading and breaks feature-detection, but
        // allows "securable" code to "gracefully" degrade to working
        // but insecure code.
        return object;
    };
}
//seal.js
/*
https://github.com/es-shims/es5-shim/blob/master/es5-sham.js
*/
// ES5 15.2.3.8
// http://es5.github.com/#x15.2.3.8
if (!Object.seal) {
    Object.seal = function seal(object) {
        if (Object(object) !== object) {
            throw new TypeError('Object.seal can only be called on Objects.');
        }
        // this is misleading and breaks feature-detection, but
        // allows "securable" code to "gracefully" degrade to working
        // but insecure code.
        return object;
    };
}
//bind.js
/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind#Polyfill

WARNING! Bound functions used as constructors NOT supported by this polyfill!
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind#Bound_functions_used_as_constructors
*/
if (!Function.prototype.bind) {
  Function.prototype.bind = function(oThis) {
    if (this.__class__ !== 'Function') {
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }

    var aArgs   = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP    = function() {},
        fBound  = function() {
          return fToBind.apply(this instanceof fNOP
                 ? this
                 : oThis,
                 aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    if (this.prototype) {
      // Function.prototype doesn't have a prototype property
      fNOP.prototype = this.prototype; 
    }
    fBound.prototype = new fNOP();

    return fBound;
  };
}
//toISOString.js
/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
*/
if (!Date.prototype.toISOString) {
  (function() {

    function pad(number) {
      if (number < 10) {
        return '0' + number;
      }
      return number;
    }

    Date.prototype.toISOString = function() {
      return this.getUTCFullYear() +
        '-' + pad(this.getUTCMonth() + 1) +
        '-' + pad(this.getUTCDate()) +
        'T' + pad(this.getUTCHours()) +
        ':' + pad(this.getUTCMinutes()) +
        ':' + pad(this.getUTCSeconds()) +
        '.' + (this.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
        'Z';
    };

  }());
}
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],2:[function(require,module,exports){
(function (process){(function (){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Array.prototype.every || (Array.prototype.every = function (e, t) {
  var r, n;
  if (null == this) throw new TypeError("Array.prototype.every called on null or undefined");
  var o = Object(this),
      i = o.length >>> 0;
  if ("Function" !== e.__class__) throw new TypeError(e + " is not a function");

  for (r = 1 < arguments.length ? t : void 0, n = 0; n < i;) {
    if (n in o) {
      var a = o[n];
      if (!e.call(r, a, n, o)) return !1;
    }

    n++;
  }

  return !0;
}), Array.prototype.filter || (Array.prototype.filter = function (e, t) {
  if (null == this) throw new TypeError("Array.prototype.filter called on null or undefined");
  var r = Object(this),
      n = r.length >>> 0;
  if ("Function" !== e.__class__) throw new TypeError(e + " is not a function");

  for (var o, i = [], a = 1 < arguments.length ? t : void 0, u = 0; u < n; u++) {
    u in r && (o = r[u], e.call(a, o, u, r) && i.push(o));
  }

  return i;
}), Array.prototype.forEach || (Array.prototype.forEach = function (e, t) {
  if (null == this) throw new TypeError("Array.prototype.forEach called on null or undefined");
  var r = Object(this),
      n = r.length >>> 0;
  if ("Function" !== e.__class__) throw new TypeError(e + " is not a function");

  for (var o, i = 1 < arguments.length ? t : void 0, a = 0; a < n; a++) {
    a in r && (o = r[a], e.call(i, o, a, r));
  }
}), Array.isArray || (Array.isArray = function (e) {
  return null != e && "Array" === e.__class__;
}), Array.prototype.indexOf || (Array.prototype.indexOf = function (e, t) {
  if (null == this) throw new TypeError("Array.prototype.indexOf called on null or undefined");
  var r,
      n = Object(this),
      o = n.length >>> 0;
  if (0 == o) return -1;
  t = +t || 0;
  if (Math.abs(t) === 1 / 0 && (t = 0), o <= t) return -1;

  for (r = Math.max(0 <= t ? t : o - Math.abs(t), 0); r < o;) {
    if (r in n && n[r] === e) return r;
    r++;
  }

  return -1;
}), Array.prototype.lastIndexOf || (Array.prototype.lastIndexOf = function (e, t) {
  if (null == this) throw new TypeError("Array.prototype.lastIndexOf called on null or undefined");
  var r,
      n,
      o = Object(this),
      i = o.length >>> 0;
  if (0 == i) return -1;

  for (r = i - 1, 1 < arguments.length && ((r = Number(t)) != r ? r = 0 : 0 != r && r != 1 / 0 && r != -1 / 0 && (r = (0 < r || -1) * Math.floor(Math.abs(r)))), n = 0 <= r ? Math.min(r, i - 1) : i - Math.abs(r); 0 <= n; n--) {
    if (n in o && o[n] === e) return n;
  }

  return -1;
}), Array.prototype.reduce || (Array.prototype.reduce = function (e, t) {
  if (null == this) throw new TypeError("Array.prototype.reduce called on null or undefined");
  if ("Function" !== e.__class__) throw new TypeError(e + " is not a function");
  var r,
      n = Object(this),
      o = n.length >>> 0,
      i = 0;
  if (1 < arguments.length) r = t;else {
    for (; i < o && !(i in n);) {
      i++;
    }

    if (o <= i) throw new TypeError("Reduce of empty array with no initial value");
    r = n[i++];
  }

  for (; i < o; i++) {
    i in n && (r = e(r, n[i], i, n));
  }

  return r;
}), Array.prototype.some || (Array.prototype.some = function (e, t) {
  if (null == this) throw new TypeError("Array.prototype.some called on null or undefined");
  if ("Function" !== e.__class__) throw new TypeError(e + " is not a function");

  for (var r = Object(this), n = r.length >>> 0, o = 1 < arguments.length ? t : void 0, i = 0; i < n; i++) {
    if (i in r && e.call(o, r[i], i, r)) return !0;
  }

  return !1;
}), Function.prototype.bind || (Function.prototype.bind = function (e) {
  if ("Function" !== this.__class__) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");

  function t() {}

  function r() {
    return o.apply(this instanceof t ? this : e, n.concat(Array.prototype.slice.call(arguments)));
  }

  var n = Array.prototype.slice.call(arguments, 1),
      o = this;
  return this.prototype && (t.prototype = this.prototype), r.prototype = new t(), r;
}), Array.prototype.reduceRight || (Array.prototype.reduceRight = function (e, t) {
  if (null == this) throw new TypeError("Array.prototype.reduceRight called on null or undefined");
  if ("Function" !== e.__class__) throw new TypeError(e + " is not a function");
  var r,
      n = Object(this),
      o = (n.length >>> 0) - 1;
  if (1 < arguments.length) r = t;else {
    for (; 0 <= o && !(o in n);) {
      o--;
    }

    if (o < 0) throw new TypeError("Reduce of empty array with no initial value");
    r = n[o--];
  }

  for (; 0 <= o; o--) {
    o in n && (r = e(r, n[o], o, n));
  }

  return r;
}), Array.prototype.map || (Array.prototype.map = function (e, t) {
  var r, n;
  if (null == this) throw new TypeError("Array.prototype.map called on null or undefined");
  var o = Object(this),
      i = o.length >>> 0;
  if ("Function" !== e.__class__) throw new TypeError(e + " is not a function");
  r = 1 < arguments.length ? t : void 0, n = new Array(i);

  for (var a, u = 0; u < i; u++) {
    u in o && (a = o[u], a = e.call(r, a, u, o), n[u] = a);
  }

  return n;
}), Date.prototype.toISOString || function () {
  function e(e) {
    return e < 10 ? "0" + e : e;
  }

  Date.prototype.toISOString = function () {
    return this.getUTCFullYear() + "-" + e(this.getUTCMonth() + 1) + "-" + e(this.getUTCDate()) + "T" + e(this.getUTCHours()) + ":" + e(this.getUTCMinutes()) + ":" + e(this.getUTCSeconds()) + "." + (this.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z";
  };
}(), String.prototype.trim || (String.prototype.trim = function () {
  return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
}), Object.create || (Object.create = function () {
  function i() {}

  var a = Object.prototype.hasOwnProperty;
  return function (e) {
    if (Object(e) !== e && null !== e) throw TypeError("Object prototype may only be an Object or null");
    i.prototype = e;
    var t = new i();

    if (i.prototype = null, 1 < arguments.length) {
      var r,
          n = Object(arguments[1]);

      for (r in n) {
        if (a.call(n, r)) {
          var o = n[r];
          if (Object(o) !== o) throw TypeError(r + "must be an object");
          if ("get" in o || "set" in o) throw new TypeError("getters & setters can not be defined on this javascript engine");
          "value" in o && (t[r] = n[r].value);
        }
      }
    }

    return t;
  };
}()), Object.defineProperties || (Object.defineProperties = function (e, t) {
  function r(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }

  if (Object(e) !== e) throw new TypeError("Object.defineProperties can only be called on Objects.");
  if (Object(t) !== t) throw new TypeError("Properties can only be an Object.");
  var n,
      o = Object(t);

  for (propName in o) {
    hasOwnProperty.call(o, propName) && (n = function (e) {
      if (Object(e) !== e) throw new TypeError("Descriptor can only be an Object.");
      var t = {};
      if (r(e, "enumerable") && (t.enumerable = !!e.enumerable), r(e, "configurable") && (t.configurable = !!e.configurable), r(e, "value") && (t.value = e.value), r(e, "writable") && (t.writable = !!e.writable), r(e, "get")) throw new TypeError("getters & setters can not be defined on this javascript engine");
      if (r(e, "set")) throw new TypeError("getters & setters can not be defined on this javascript engine");
      return t;
    }(o[propName]), e[propName] = n.value);
  }

  return e;
}), Object.defineProperty || (Object.defineProperty = function (e, t, r) {
  if (Object(e) !== e) throw new TypeError("Object.defineProperty can only be called on Objects.");
  if (Object(r) !== r) throw new TypeError("Property description can only be an Object.");
  if ("get" in r || "set" in r) throw new TypeError("getters & setters can not be defined on this javascript engine");
  return "value" in r && (e[t] = r.value), e;
}), Object.getOwnPropertyDescriptor || (Object.getOwnPropertyDescriptor = function (e, t) {
  if (Object(e) !== e) throw new TypeError("Object.getOwnPropertyDescriptor can only be called on Objects.");
  var r;
  if (!Object.prototype.hasOwnProperty.call(e, t)) return r;
  (r = {
    enumerable: Object.prototype.propertyIsEnumerable.call(e, t),
    configurable: !0
  }).value = e[t];
  t = e.reflect.find(t).type;
  return r.writable = !("readonly" === t), r;
}), Object.getOwnPropertyNames || (Object.getOwnPropertyNames = function (e) {
  if (Object(e) !== e) throw new TypeError("Object.getOwnPropertyNames can only be called on Objects.");
  var t = [],
      r = Object.prototype.hasOwnProperty,
      n = Object.prototype.propertyIsEnumerable;

  for (u in e) {
    r.call(e, u) && t.push(u);
  }

  for (var o = e.reflect.properties, i = e.reflect.methods.concat(o), a = 0; a < i.length; a++) {
    var u = i[a].name;
    r.call(e, u) && !n.call(e, u) && t.push(u);
  }

  return t;
}), Object.getPrototypeOf || (Object.getPrototypeOf = function (e) {
  if (Object(e) !== e) throw new TypeError("Object.getPrototypeOf can only be called on Objects.");
  return e.__proto__;
}), Object.isExtensible || (Object.isExtensible = function (e) {
  if (Object(e) !== e) throw new TypeError("Object.isExtensible can only be called on Objects.");
  return !0;
}), Object.isFrozen || (Object.isFrozen = function (e) {
  if (Object(e) !== e) throw new TypeError("Object.isFrozen can only be called on Objects.");
  return !1;
}), Object.isSealed || (Object.isSealed = function (e) {
  if (Object(e) !== e) throw new TypeError("Object.isSealed can only be called on Objects.");
  return !1;
}), Object.keys || (Object.keys = function (e) {
  if (Object(e) !== e) throw new TypeError("Object.keys can only be called on Objects.");
  var t,
      r = Object.prototype.hasOwnProperty,
      n = [];

  for (t in e) {
    r.call(e, t) && n.push(t);
  }

  return n;
}), Object.preventExtensions || (Object.preventExtensions = function (e) {
  if (Object(e) !== e) throw new TypeError("Object.preventExtensions can only be called on Objects.");
  return e;
}), Object.seal || (Object.seal = function (e) {
  if (Object(e) !== e) throw new TypeError("Object.seal can only be called on Objects.");
  return e;
}), Object.freeze || (Object.freeze = function (e) {
  if (Object(e) !== e) throw new TypeError("Object.freeze can only be called on Objects.");
  return e;
}), "object" != (typeof JSON === "undefined" ? "undefined" : _typeof(JSON)) && (JSON = {}), function () {
  "use strict";

  var rx_one = /^[\],:{}\s]*$/,
      rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
      rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
      rx_four = /(?:^|:|,)(?:\s*\[)+/g,
      rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      gap,
      indent,
      meta,
      rep;

  function f(e) {
    return e < 10 ? "0" + e : e;
  }

  function this_value() {
    return this.valueOf();
  }

  function quote(e) {
    return rx_escapable.lastIndex = 0, rx_escapable.test(e) ? '"' + e.replace(rx_escapable, function (e) {
      var t = meta[e];
      return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
    }) + '"' : '"' + e + '"';
  }

  function str(e, t) {
    var r,
        n,
        o,
        i,
        a,
        u = gap,
        c = t[e];

    switch (c && "object" == _typeof(c) && "function" == typeof c.toJSON && (c = c.toJSON(e)), "function" == typeof rep && (c = rep.call(t, e, c)), _typeof(c)) {
      case "string":
        return quote(c);

      case "number":
        return isFinite(c) ? String(c) : "null";

      case "boolean":
      case "null":
        return String(c);

      case "object":
        if (!c) return "null";

        if (gap += indent, a = [], "[object Array]" === Object.prototype.toString.apply(c)) {
          for (i = c.length, r = 0; r < i; r += 1) {
            a[r] = str(r, c) || "null";
          }

          return o = 0 === a.length ? "[]" : gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + u + "]" : "[" + a.join(",") + "]", gap = u, o;
        }

        if (rep && "object" == _typeof(rep)) for (i = rep.length, r = 0; r < i; r += 1) {
          "string" == typeof rep[r] && (o = str(n = rep[r], c)) && a.push(quote(n) + (gap ? ": " : ":") + o);
        } else for (n in c) {
          Object.prototype.hasOwnProperty.call(c, n) && (o = str(n, c)) && a.push(quote(n) + (gap ? ": " : ":") + o);
        }
        return o = 0 === a.length ? "{}" : gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + u + "}" : "{" + a.join(",") + "}", gap = u, o;
    }
  }

  "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
    return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null;
  }, Boolean.prototype.toJSON = this_value, Number.prototype.toJSON = this_value, String.prototype.toJSON = this_value), "function" != typeof JSON.stringify && (meta = {
    "\b": "\\b",
    "\t": "\\t",
    "\n": "\\n",
    "\f": "\\f",
    "\r": "\\r",
    '"': '\\"',
    "\\": "\\\\"
  }, JSON.stringify = function (e, t, r) {
    var n;
    if (indent = gap = "", "number" == typeof r) for (n = 0; n < r; n += 1) {
      indent += " ";
    } else "string" == typeof r && (indent = r);
    if ((rep = t) && "function" != typeof t && ("object" != _typeof(t) || "number" != typeof t.length)) throw new Error("JSON.stringify");
    return str("", {
      "": e
    });
  }), "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) {
    var j;

    function walk(e, t) {
      var r,
          n,
          o = e[t];
      if (o && "object" == _typeof(o)) for (r in o) {
        Object.prototype.hasOwnProperty.call(o, r) && (void 0 !== (n = walk(o, r)) ? o[r] = n : delete o[r]);
      }
      return reviver.call(e, t, o);
    }

    if (text = String(text), rx_dangerous.lastIndex = 0, rx_dangerous.test(text) && (text = text.replace(rx_dangerous, function (e) {
      return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
    })), rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
      "": j
    }, "") : j;
    throw new SyntaxError("JSON.parse");
  });
}(), "object" != (typeof JSON === "undefined" ? "undefined" : _typeof(JSON)) && (JSON = {}), function () {
  "use strict";

  function f(e) {
    return e < 10 ? "0" + e : e;
  }

  function this_value() {
    return this.valueOf();
  }

  function quote(e) {
    return rx_escapable.lastIndex = 0, rx_escapable.test(e) ? '"' + e.replace(rx_escapable, function (e) {
      var t = meta[e];
      return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
    }) + '"' : '"' + e + '"';
  }

  function str(e, t) {
    var r,
        n,
        o,
        i,
        a,
        u = gap,
        c = t[e];

    switch (c && "object" == _typeof(c) && "function" == typeof c.toJSON && (c = c.toJSON(e)), "function" == typeof rep && (c = rep.call(t, e, c)), _typeof(c)) {
      case "string":
        return quote(c);

      case "number":
        return isFinite(c) ? c + "" : "null";

      case "boolean":
      case "null":
        return c + "";

      case "object":
        if (!c) return "null";

        if (gap += indent, a = [], "[object Array]" === Object.prototype.toString.apply(c)) {
          for (i = c.length, r = 0; r < i; r += 1) {
            a[r] = str(r, c) || "null";
          }

          return o = 0 === a.length ? "[]" : gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + u + "]" : "[" + a.join(",") + "]", gap = u, o;
        }

        if (rep && "object" == _typeof(rep)) for (i = rep.length, r = 0; r < i; r += 1) {
          "string" == typeof rep[r] && (o = str(n = rep[r], c)) && a.push(quote(n) + (gap ? ": " : ":") + o);
        } else for (n in c) {
          Object.prototype.hasOwnProperty.call(c, n) && (o = str(n, c), o && a.push(quote(n) + (gap ? ": " : ":") + o));
        }
        return o = 0 === a.length ? "{}" : gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + u + "}" : "{" + a.join(",") + "}", gap = u, o;
    }
  }

  var rx_one = /^[\],:{}\s]*$/,
      rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
      rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
      rx_four = /(?:^|:|,)(?:\s*\[)+/g,
      rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      gap,
      indent,
      meta,
      rep;
  "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
    return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null;
  }, Boolean.prototype.toJSON = this_value, Number.prototype.toJSON = this_value, String.prototype.toJSON = this_value), "function" != typeof JSON.stringify && (meta = {
    "\b": "\\b",
    "\t": "\\t",
    "\n": "\\n",
    "\f": "\\f",
    "\r": "\\r",
    '"': '\\"',
    "\\": "\\\\"
  }, JSON.stringify = function (e, t, r) {
    var n;
    if (indent = gap = "", "number" == typeof r) for (n = 0; n < r; n += 1) {
      indent += " ";
    } else "string" == typeof r && (indent = r);
    if ((rep = t) && "function" != typeof t && ("object" != _typeof(t) || "number" != typeof t.length)) throw Error("JSON.stringify");
    return str("", {
      "": e
    });
  }), "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) {
    function walk(e, t) {
      var r,
          n,
          o = e[t];
      if (o && "object" == _typeof(o)) for (r in o) {
        Object.prototype.hasOwnProperty.call(o, r) && (n = walk(o, r), void 0 !== n ? o[r] = n : delete o[r]);
      }
      return reviver.call(e, t, o);
    }

    var j;
    if (text += "", rx_dangerous.lastIndex = 0, rx_dangerous.test(text) && (text = text.replace(rx_dangerous, function (e) {
      return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
    })), rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
      "": j
    }, "") : j;
    throw new SyntaxError("JSON.parse");
  });
}();
;
app.coordinateSystem = CoordinateSystem.ARTBOARDCOORDINATESYSTEM;
var DEBUG = false;

(function () {
  try {
    /******/
    (function () {
      // webpackBootstrap

      /******/
      var __webpack_modules__ = {
        /***/
        23:
        /***/
        function _(module) {
          "use strict"; // 'path' module extracted from Node.js v8.11.1 (only the posix part)
          // transplited with Babel
          // Copyright Joyent, Inc. and other Node contributors.
          //
          // Permission is hereby granted, free of charge, to any person obtaining a
          // copy of this software and associated documentation files (the
          // "Software"), to deal in the Software without restriction, including
          // without limitation the rights to use, copy, modify, merge, publish,
          // distribute, sublicense, and/or sell copies of the Software, and to permit
          // persons to whom the Software is furnished to do so, subject to the
          // following conditions:
          //
          // The above copyright notice and this permission notice shall be included
          // in all copies or substantial portions of the Software.
          //
          // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
          // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
          // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
          // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
          // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
          // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
          // USE OR OTHER DEALINGS IN THE SOFTWARE.

          function assertPath(path) {
            if (typeof path !== 'string') {
              throw new TypeError('Path must be a string. Received ' + JSON.stringify(path));
            }
          } // Resolves . and .. elements in a path with directory names


          function normalizeStringPosix(path, allowAboveRoot) {
            var res = '';
            var lastSegmentLength = 0;
            var lastSlash = -1;
            var dots = 0;
            var code;

            for (var i = 0; i <= path.length; ++i) {
              if (i < path.length) code = path.charCodeAt(i);else if (code === 47
              /*/*/
              ) break;else code = 47
              /*/*/
              ;

              if (code === 47
              /*/*/
              ) {
                  if (lastSlash === i - 1 || dots === 1) {// NOOP
                  } else if (lastSlash !== i - 1 && dots === 2) {
                    if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46
                    /*.*/
                    || res.charCodeAt(res.length - 2) !== 46
                    /*.*/
                    ) {
                        if (res.length > 2) {
                          var lastSlashIndex = res.lastIndexOf('/');

                          if (lastSlashIndex !== res.length - 1) {
                            if (lastSlashIndex === -1) {
                              res = '';
                              lastSegmentLength = 0;
                            } else {
                              res = res.slice(0, lastSlashIndex);
                              lastSegmentLength = res.length - 1 - res.lastIndexOf('/');
                            }

                            lastSlash = i;
                            dots = 0;
                            continue;
                          }
                        } else if (res.length === 2 || res.length === 1) {
                          res = '';
                          lastSegmentLength = 0;
                          lastSlash = i;
                          dots = 0;
                          continue;
                        }
                      }

                    if (allowAboveRoot) {
                      if (res.length > 0) res += '/..';else res = '..';
                      lastSegmentLength = 2;
                    }
                  } else {
                    if (res.length > 0) res += '/' + path.slice(lastSlash + 1, i);else res = path.slice(lastSlash + 1, i);
                    lastSegmentLength = i - lastSlash - 1;
                  }

                  lastSlash = i;
                  dots = 0;
                } else if (code === 46
              /*.*/
              && dots !== -1) {
                ++dots;
              } else {
                dots = -1;
              }
            }

            return res;
          }

          function _format(sep, pathObject) {
            var dir = pathObject.dir || pathObject.root;
            var base = pathObject.base || (pathObject.name || '') + (pathObject.ext || '');

            if (!dir) {
              return base;
            }

            if (dir === pathObject.root) {
              return dir + base;
            }

            return dir + sep + base;
          }

          var posix = {
            // path.resolve([from ...], to)
            resolve: function resolve() {
              var resolvedPath = '';
              var resolvedAbsolute = false;
              var cwd;

              for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
                var path;
                if (i >= 0) path = arguments[i];else {
                  if (cwd === undefined) cwd = process.cwd();
                  path = cwd;
                }
                assertPath(path); // Skip empty entries

                if (path.length === 0) {
                  continue;
                }

                resolvedPath = path + '/' + resolvedPath;
                resolvedAbsolute = path.charCodeAt(0) === 47
                /*/*/
                ;
              } // At this point the path should be resolved to a full absolute path, but
              // handle relative paths to be safe (might happen when process.cwd() fails)
              // Normalize the path


              resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);

              if (resolvedAbsolute) {
                if (resolvedPath.length > 0) return '/' + resolvedPath;else return '/';
              } else if (resolvedPath.length > 0) {
                return resolvedPath;
              } else {
                return '.';
              }
            },
            normalize: function normalize(path) {
              assertPath(path);
              if (path.length === 0) return '.';
              var isAbsolute = path.charCodeAt(0) === 47
              /*/*/
              ;
              var trailingSeparator = path.charCodeAt(path.length - 1) === 47
              /*/*/
              ; // Normalize the path

              path = normalizeStringPosix(path, !isAbsolute);
              if (path.length === 0 && !isAbsolute) path = '.';
              if (path.length > 0 && trailingSeparator) path += '/';
              if (isAbsolute) return '/' + path;
              return path;
            },
            isAbsolute: function isAbsolute(path) {
              assertPath(path);
              return path.length > 0 && path.charCodeAt(0) === 47
              /*/*/
              ;
            },
            join: function join() {
              if (arguments.length === 0) return '.';
              var joined;

              for (var i = 0; i < arguments.length; ++i) {
                var arg = arguments[i];
                assertPath(arg);

                if (arg.length > 0) {
                  if (joined === undefined) joined = arg;else joined += '/' + arg;
                }
              }

              if (joined === undefined) return '.';
              return posix.normalize(joined);
            },
            relative: function relative(from, to) {
              assertPath(from);
              assertPath(to);
              if (from === to) return '';
              from = posix.resolve(from);
              to = posix.resolve(to);
              if (from === to) return ''; // Trim any leading backslashes

              var fromStart = 1;

              for (; fromStart < from.length; ++fromStart) {
                if (from.charCodeAt(fromStart) !== 47
                /*/*/
                ) break;
              }

              var fromEnd = from.length;
              var fromLen = fromEnd - fromStart; // Trim any leading backslashes

              var toStart = 1;

              for (; toStart < to.length; ++toStart) {
                if (to.charCodeAt(toStart) !== 47
                /*/*/
                ) break;
              }

              var toEnd = to.length;
              var toLen = toEnd - toStart; // Compare paths to find the longest common path from root

              var length = fromLen < toLen ? fromLen : toLen;
              var lastCommonSep = -1;
              var i = 0;

              for (; i <= length; ++i) {
                if (i === length) {
                  if (toLen > length) {
                    if (to.charCodeAt(toStart + i) === 47
                    /*/*/
                    ) {
                        // We get here if `from` is the exact base path for `to`.
                        // For example: from='/foo/bar'; to='/foo/bar/baz'
                        return to.slice(toStart + i + 1);
                      } else if (i === 0) {
                      // We get here if `from` is the root
                      // For example: from='/'; to='/foo'
                      return to.slice(toStart + i);
                    }
                  } else if (fromLen > length) {
                    if (from.charCodeAt(fromStart + i) === 47
                    /*/*/
                    ) {
                        // We get here if `to` is the exact base path for `from`.
                        // For example: from='/foo/bar/baz'; to='/foo/bar'
                        lastCommonSep = i;
                      } else if (i === 0) {
                      // We get here if `to` is the root.
                      // For example: from='/foo'; to='/'
                      lastCommonSep = 0;
                    }
                  }

                  break;
                }

                var fromCode = from.charCodeAt(fromStart + i);
                var toCode = to.charCodeAt(toStart + i);
                if (fromCode !== toCode) break;else if (fromCode === 47
                /*/*/
                ) lastCommonSep = i;
              }

              var out = ''; // Generate the relative path based on the path difference between `to`
              // and `from`

              for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
                if (i === fromEnd || from.charCodeAt(i) === 47
                /*/*/
                ) {
                    if (out.length === 0) out += '..';else out += '/..';
                  }
              } // Lastly, append the rest of the destination (`to`) path that comes after
              // the common path parts


              if (out.length > 0) return out + to.slice(toStart + lastCommonSep);else {
                toStart += lastCommonSep;
                if (to.charCodeAt(toStart) === 47
                /*/*/
                ) ++toStart;
                return to.slice(toStart);
              }
            },
            _makeLong: function _makeLong(path) {
              return path;
            },
            dirname: function dirname(path) {
              assertPath(path);
              if (path.length === 0) return '.';
              var code = path.charCodeAt(0);
              var hasRoot = code === 47
              /*/*/
              ;
              var end = -1;
              var matchedSlash = true;

              for (var i = path.length - 1; i >= 1; --i) {
                code = path.charCodeAt(i);

                if (code === 47
                /*/*/
                ) {
                    if (!matchedSlash) {
                      end = i;
                      break;
                    }
                  } else {
                  // We saw the first non-path separator
                  matchedSlash = false;
                }
              }

              if (end === -1) return hasRoot ? '/' : '.';
              if (hasRoot && end === 1) return '//';
              return path.slice(0, end);
            },
            basename: function basename(path, ext) {
              if (ext !== undefined && typeof ext !== 'string') throw new TypeError('"ext" argument must be a string');
              assertPath(path);
              var start = 0;
              var end = -1;
              var matchedSlash = true;
              var i;

              if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
                if (ext.length === path.length && ext === path) return '';
                var extIdx = ext.length - 1;
                var firstNonSlashEnd = -1;

                for (i = path.length - 1; i >= 0; --i) {
                  var code = path.charCodeAt(i);

                  if (code === 47
                  /*/*/
                  ) {
                      // If we reached a path separator that was not part of a set of path
                      // separators at the end of the string, stop now
                      if (!matchedSlash) {
                        start = i + 1;
                        break;
                      }
                    } else {
                    if (firstNonSlashEnd === -1) {
                      // We saw the first non-path separator, remember this index in case
                      // we need it if the extension ends up not matching
                      matchedSlash = false;
                      firstNonSlashEnd = i + 1;
                    }

                    if (extIdx >= 0) {
                      // Try to match the explicit extension
                      if (code === ext.charCodeAt(extIdx)) {
                        if (--extIdx === -1) {
                          // We matched the extension, so mark this as the end of our path
                          // component
                          end = i;
                        }
                      } else {
                        // Extension does not match, so our result is the entire path
                        // component
                        extIdx = -1;
                        end = firstNonSlashEnd;
                      }
                    }
                  }
                }

                if (start === end) end = firstNonSlashEnd;else if (end === -1) end = path.length;
                return path.slice(start, end);
              } else {
                for (i = path.length - 1; i >= 0; --i) {
                  if (path.charCodeAt(i) === 47
                  /*/*/
                  ) {
                      // If we reached a path separator that was not part of a set of path
                      // separators at the end of the string, stop now
                      if (!matchedSlash) {
                        start = i + 1;
                        break;
                      }
                    } else if (end === -1) {
                    // We saw the first non-path separator, mark this as the end of our
                    // path component
                    matchedSlash = false;
                    end = i + 1;
                  }
                }

                if (end === -1) return '';
                return path.slice(start, end);
              }
            },
            extname: function extname(path) {
              assertPath(path);
              var startDot = -1;
              var startPart = 0;
              var end = -1;
              var matchedSlash = true; // Track the state of characters (if any) we see before our first dot and
              // after any path separator we find

              var preDotState = 0;

              for (var i = path.length - 1; i >= 0; --i) {
                var code = path.charCodeAt(i);

                if (code === 47
                /*/*/
                ) {
                    // If we reached a path separator that was not part of a set of path
                    // separators at the end of the string, stop now
                    if (!matchedSlash) {
                      startPart = i + 1;
                      break;
                    }

                    continue;
                  }

                if (end === -1) {
                  // We saw the first non-path separator, mark this as the end of our
                  // extension
                  matchedSlash = false;
                  end = i + 1;
                }

                if (code === 46
                /*.*/
                ) {
                    // If this is our first dot, mark it as the start of our extension
                    if (startDot === -1) startDot = i;else if (preDotState !== 1) preDotState = 1;
                  } else if (startDot !== -1) {
                  // We saw a non-dot and non-path separator before our dot, so we should
                  // have a good chance at having a non-empty extension
                  preDotState = -1;
                }
              }

              if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
              preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
              preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
                return '';
              }

              return path.slice(startDot, end);
            },
            format: function format(pathObject) {
              if (pathObject === null || _typeof(pathObject) !== 'object') {
                throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + _typeof(pathObject));
              }

              return _format('/', pathObject);
            },
            parse: function parse(path) {
              assertPath(path);
              var ret = {
                root: '',
                dir: '',
                base: '',
                ext: '',
                name: ''
              };
              if (path.length === 0) return ret;
              var code = path.charCodeAt(0);
              var isAbsolute = code === 47
              /*/*/
              ;
              var start;

              if (isAbsolute) {
                ret.root = '/';
                start = 1;
              } else {
                start = 0;
              }

              var startDot = -1;
              var startPart = 0;
              var end = -1;
              var matchedSlash = true;
              var i = path.length - 1; // Track the state of characters (if any) we see before our first dot and
              // after any path separator we find

              var preDotState = 0; // Get non-dir info

              for (; i >= start; --i) {
                code = path.charCodeAt(i);

                if (code === 47
                /*/*/
                ) {
                    // If we reached a path separator that was not part of a set of path
                    // separators at the end of the string, stop now
                    if (!matchedSlash) {
                      startPart = i + 1;
                      break;
                    }

                    continue;
                  }

                if (end === -1) {
                  // We saw the first non-path separator, mark this as the end of our
                  // extension
                  matchedSlash = false;
                  end = i + 1;
                }

                if (code === 46
                /*.*/
                ) {
                    // If this is our first dot, mark it as the start of our extension
                    if (startDot === -1) startDot = i;else if (preDotState !== 1) preDotState = 1;
                  } else if (startDot !== -1) {
                  // We saw a non-dot and non-path separator before our dot, so we should
                  // have a good chance at having a non-empty extension
                  preDotState = -1;
                }
              }

              if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
              preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
              preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
                if (end !== -1) {
                  if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);else ret.base = ret.name = path.slice(startPart, end);
                }
              } else {
                if (startPart === 0 && isAbsolute) {
                  ret.name = path.slice(1, startDot);
                  ret.base = path.slice(1, end);
                } else {
                  ret.name = path.slice(startPart, startDot);
                  ret.base = path.slice(startPart, end);
                }

                ret.ext = path.slice(startDot, end);
              }

              if (startPart > 0) ret.dir = path.slice(0, startPart - 1);else if (isAbsolute) ret.dir = '/';
              return ret;
            },
            sep: '/',
            delimiter: ':',
            win32: null,
            posix: null
          };
          posix.posix = posix;
          module.exports = posix;
          /***/
        },

        /***/
        219:
        /***/
        function _(module) {
          module.exports = {
            setName: "__expandObject",
            actions: ["expandObject"],
            content: "/version 3\r/name [ 14\r\t5f5f657870616e644f626a656374\r]\r/isOpen 1\r/actionCount 1\r/action-1 {\r\t/name [ 12\r\t\t657870616e644f626a656374\r\t]\r\t/keyIndex 0\r\t/colorIndex 0\r\t/isOpen 0\r\t/eventCount 1\r\t/event-1 {\r\t\t/useRulersIn1stQuadrant 0\r\t\t/internalName (ai_plugin_expand)\r\t\t/localizedName [ 6\r\t\t\t457870616e64\r\t\t]\r\t\t/isOpen 1\r\t\t/isOn 1\r\t\t/hasDialog 1\r\t\t/showDialog 0\r\t\t/parameterCount 4\r\t\t/parameter-1 {\r\t\t\t/key 1868720756\r\t\t\t/showInPalette 4294967295\r\t\t\t/type (boolean)\r\t\t\t/value 1\r\t\t}\r\t\t/parameter-2 {\r\t\t\t/key 1718185068\r\t\t\t/showInPalette 4294967295\r\t\t\t/type (boolean)\r\t\t\t/value 0\r\t\t}\r\t\t/parameter-3 {\r\t\t\t/key 1937011307\r\t\t\t/showInPalette 4294967295\r\t\t\t/type (boolean)\r\t\t\t/value 0\r\t\t}\r\t\t/parameter-4 {\r\t\t\t/key 1936553064\r\t\t\t/showInPalette 4294967295\r\t\t\t/type (boolean)\r\t\t\t/value 0\r\t\t}\r\t}\r}\r"
          };
          /***/
        },

        /***/
        955:
        /***/
        function _(__unused_webpack_module, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.write = void 0;

          function write(text) {
            if (DEBUG) {// $.writeln(text);
            }
          }

          exports.write = write;
          /***/
        },

        /***/
        101:
        /***/
        function _(__unused_webpack_module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var toFile_1 = __webpack_require__(585);

          function ai(file) {
            var saveOpts = new IllustratorSaveOptions();
            saveOpts.embedLinkedFiles = false;
            saveOpts.saveMultipleArtboards = false;
            app.activeDocument.saveAs(toFile_1["default"](file), saveOpts);
          }

          exports["default"] = ai;
          /***/
        },

        /***/
        245:
        /***/
        function _(__unused_webpack_module, exports, __webpack_require__) {
          "use strict";

          var __assign = this && this.__assign || function () {
            __assign = Object.assign || function (t) {
              for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];

                for (var p in s) {
                  if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
              }

              return t;
            };

            return __assign.apply(this, arguments);
          };

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var toFile_1 = __webpack_require__(585);

          function shutterEps(file, opts) {
            // validateShutter();
            opts = __assign({
              compatibility: Compatibility.ILLUSTRATOR10,
              saveMultipleArtboards: false
            }, opts); // clean();

            var saveOpts = new EPSSaveOptions();
            saveOpts.preview = EPSPreview.None;
            saveOpts.cmykPostScript = false;
            saveOpts.compatibility = opts.compatibility;
            saveOpts.embedAllFonts = false;
            saveOpts.embedLinkedFiles = false;
            saveOpts.includeDocumentThumbnails = false;
            saveOpts.postScript = EPSPostScriptLevelEnum.LEVEL3;
            saveOpts.saveMultipleArtboards = opts.saveMultipleArtboards; // write(`saving eps file [${file}] with options <${JSON.stringify(saveOpts)}>`)

            app.activeDocument.saveAs(toFile_1["default"](file), saveOpts);
          }

          exports["default"] = shutterEps;
          /***/
        },

        /***/
        471:
        /***/
        function _(__unused_webpack_module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var shutterEps_1 = __webpack_require__(245);

          function shutterEps10(file, opts) {
            if (opts === void 0) {
              opts = {};
            }

            opts.compatibility = Compatibility.ILLUSTRATOR10;
            shutterEps_1["default"](file, opts);
          }

          exports["default"] = shutterEps10;
          /***/
        },

        /***/
        137:
        /***/
        function _(__unused_webpack_module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var getArtboardSize_1 = __webpack_require__(596);

          var menu_1 = __webpack_require__(97);

          var createMask = function createMask() {
            menu_1.callMenu("selectall");
            menu_1.callMenu("group");
            menu_1.callMenu("deselectall");
            var size = getArtboardSize_1["default"](); // const clipRect = app.activeDocument.pathItems.rectangle(size.height, 0, size.width, size.height);
            // const clipRect = app.activeDocument.pathItems.rectangle(size.top, size.left, size.width, size.height);

            var clipRect = app.activeDocument.pathItems.rectangle(0, size.left, size.width, size.height);
            clipRect.selected = true;
            menu_1.callMenu("sendToFront");
            menu_1.callMenu("selectall");
          };

          function clipToArtboardSize() {
            createMask();
            menu_1.callMenu("makeMask");
          }

          exports["default"] = clipToArtboardSize;
          /***/
        },

        /***/
        565:
        /***/
        function _(__unused_webpack_module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.copyFile = void 0;

          var openFile_1 = __webpack_require__(119);

          function copyFile(file) {
            openFile_1["default"](file, function () {
              app.executeMenuCommand("selectall");
              app.executeMenuCommand("copy");
            });
          }

          exports.copyFile = copyFile;
          /***/
        },

        /***/
        901:
        /***/
        function _(__unused_webpack_module, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          function disposeAction(actionSetName) {
            try {
              app.unloadAction(actionSetName, "");
            } catch (e) {// do nothing
            }
          }

          exports["default"] = disposeAction;
          ;
          /***/
        },

        /***/
        768:
        /***/
        function _(__unused_webpack_module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.loadAndDoAction = void 0;

          var write_1 = __webpack_require__(955);

          var withAction_1 = __webpack_require__(501);

          function doAction(action, name) {
            var actions = name ? [name] : action.actions;

            for (var _i = 0, actions_1 = actions; _i < actions_1.length; _i++) {
              var act = actions_1[_i];
              write_1.write("doAction: [" + action.setName + "->" + action.setName + "]");
              app.doScript(act, action.setName, false);
            }
          }

          exports["default"] = doAction;

          function loadAndDoAction(action, name) {
            withAction_1["default"](action, function () {
              doAction(action, name);
            });
          }

          exports.loadAndDoAction = loadAndDoAction;
          /***/
        },

        /***/
        967:
        /***/
        function _(__unused_webpack_module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var path = __webpack_require__(23);

          var writeFile_1 = __webpack_require__(144);

          function ensureAction(actionContent) {
            var tempDir = Folder.temp.fsName;
            var tempAction = path.join(tempDir, "temp.aia");
            var actionFile = new File(tempAction);

            try {
              writeFile_1["default"](actionFile, actionContent);
              app.loadAction(actionFile);
            } finally {
              actionFile.remove();
            }
          }

          exports["default"] = ensureAction;
          ;
          /***/
        },

        /***/
        771:
        /***/
        function _(__unused_webpack_module, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          function getActiveDocument(required) {
            if (required === void 0) {
              required = false;
            }

            try {
              return app.activeDocument;
            } catch (e) {
              if (required) {
                throw e;
              }

              return undefined;
            }
          }

          exports["default"] = getActiveDocument;
          /***/
        },

        /***/
        596:
        /***/
        function _(__unused_webpack_module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.getArtworkSize = exports.findBackground = void 0;

          var toArray_1 = __webpack_require__(703);

          function getArtboardSize(art) {
            if (!art) {
              var doc = app.activeDocument;
              var artIndex = doc.artboards.getActiveArtboardIndex();
              art = doc.artboards[artIndex];
            }

            var _a = art.artboardRect,
                left = _a[0],
                height = _a[1],
                width = _a[2],
                top = _a[3];
            return {
              left: left,
              top: top,
              width: Math.abs(width - left),
              height: Math.abs(top - height)
            };
          }

          exports["default"] = getArtboardSize;

          function findBackground() {
            var doc = app.activeDocument;
            var size = getArtboardSize();
            var width = size.width,
                height = size.height;
            var layer = doc.activeLayer;

            for (var _i = 0, _a = toArray_1["default"](layer.pathItems); _i < _a.length; _i++) {
              var pathItem = _a[_i];

              if (Math.abs(width - pathItem.width) < 1 && Math.abs(height - pathItem.height) < 1) {
                return pathItem;
              }
            }
          }

          exports.findBackground = findBackground;

          function getArtworkSize() {
            app.executeMenuCommand("deselectall");
            var bg = findBackground();

            if (bg) {
              bg.hidden = true;
              app.executeMenuCommand('Fit Artboard to artwork bounds');
              var artSize = getArtboardSize();
              bg.hidden = false;
              app.executeMenuCommand('Fit Artboard to artwork bounds');
              return artSize;
            } else {
              return getArtboardSize();
            }
          }

          exports.getArtworkSize = getArtworkSize;
          /***/
        },

        /***/
        809:
        /***/
        function _(__unused_webpack_module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var toFile_1 = __webpack_require__(585);

          function getCurrentFile() {
            return toFile_1["default"]($.fileName).fsName;
          }

          exports["default"] = getCurrentFile;
          ;
          /***/
        },

        /***/
        97:
        /***/
        function _(__unused_webpack_module, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.callMenu = void 0;

          function callMenu(menuCommand) {
            try {
              app.executeMenuCommand(menuCommand);
            } catch (e) {
              if (e.number !== 1200) {
                // MRAP menu not available
                throw e;
              }
            }
          }

          exports.callMenu = callMenu;
          /***/
        },

        /***/
        119:
        /***/
        function _(__unused_webpack_module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var toFile_1 = __webpack_require__(585);

          function openFile(file, fn) {
            try {
              var document_1 = app.open(toFile_1["default"](file));

              if (fn) {
                try {
                  fn(document_1);
                } finally {
                  document_1.close(SaveOptions.DONOTSAVECHANGES);
                }
              }

              return document_1;
            } catch (e) {
              throw new Error("Can't open file: " + file + ". Error: " + e);
            }
          }

          exports["default"] = openFile;
          /***/
        },

        /***/
        575:
        /***/
        function _(__unused_webpack_module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FsPath = void 0;

          var path = __webpack_require__(23);

          var FsPath =
          /** @class */
          function () {
            function FsPath() {}

            FsPath.parse = function (filePath) {
              // const fileName = aiEpsPath.match(/[^\/]*$/g)[0];
              // const fileBaseName = fileName.match(/^[^\.]*/g);
              var basename = this.basename(filePath);
              var ext = this.extname(filePath);
              var dir = this.dirname(filePath);
              return {
                name: basename.slice(0, -ext.length),
                dir: dir,
                ext: ext,
                basename: basename
              };
            };

            FsPath.join = function () {
              var paths = [];

              for (var _i = 0; _i < arguments.length; _i++) {
                paths[_i] = arguments[_i];
              }

              return path.join.apply(path, paths);
            };

            FsPath.basename = function (p, ext) {
              return path.basename(p, ext);
            };

            FsPath.extname = function (p) {
              return path.extname(p);
            };

            FsPath.dirname = function (p) {
              return path.dirname(p);
            };

            return FsPath;
          }();

          exports.FsPath = FsPath;
          exports["default"] = FsPath;
          /***/
        },

        /***/
        77:
        /***/
        function _(__unused_webpack_module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var toFile_1 = __webpack_require__(585);

          var writeFile_1 = __webpack_require__(144);

          function readFile(filePath, required) {
            if (required === void 0) {
              required = true;
            }

            var readFile = toFile_1["default"](filePath);
            return writeFile_1.withFile(filePath, function (file) {
              return file ? file.read() : "";
            }, "r", required);
          }

          exports["default"] = readFile;
          /***/
        },

        /***/
        407:
        /***/
        function _(__unused_webpack_module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var readFile_1 = __webpack_require__(77);

          function readFileJson(filePath, required) {
            if (required === void 0) {
              required = true;
            }

            var content = readFile_1["default"](filePath, required);
            return content ? JSON.parse(content) : {};
          }

          exports["default"] = readFileJson;
          /***/
        },

        /***/
        655:
        /***/
        function _(__unused_webpack_module, exports, __webpack_require__) {
          "use strict";

          var __assign = this && this.__assign || function () {
            __assign = Object.assign || function (t) {
              for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];

                for (var p in s) {
                  if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
              }

              return t;
            };

            return __assign.apply(this, arguments);
          };

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.getSettings = exports.setSettings = void 0;

          var getCurrentFile_1 = __webpack_require__(809);

          var path_1 = __webpack_require__(575);

          var readFileJson_1 = __webpack_require__(407);

          var writeFileJson_1 = __webpack_require__(667);

          function setSettings(key, value) {
            var _a;

            var _b = path_1["default"].parse(getCurrentFile_1["default"]()),
                dir = _b.dir,
                name = _b.name;

            var settingsFile = path_1["default"].join(dir, name + ".json");
            var currentSettings = readFileJson_1["default"](settingsFile, false);
            writeFileJson_1["default"](settingsFile, __assign(__assign({}, currentSettings), (_a = {}, _a[key] = value, _a)));
          }

          exports.setSettings = setSettings;

          function getSettings(key) {
            var _a = path_1["default"].parse(getCurrentFile_1["default"]()),
                dir = _a.dir,
                name = _a.name;

            var settingsFile = path_1["default"].join(dir, name + ".json");
            var currentSettings = readFileJson_1["default"](settingsFile, false);
            return currentSettings[key];
          }

          exports.getSettings = getSettings;
          /***/
        },

        /***/
        703:
        /***/
        function _(__unused_webpack_module, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.asEnumerable = exports.Enumerable = void 0;

          function toArray(obj) {
            var result = [];

            if (!obj) {
              return result;
            }

            try {
              var length_1 = obj.length;

              for (var i = 0; i < length_1; i++) {
                try {
                  result.push(obj[i]);
                } catch (e) {// not added
                }
              }
            } catch (e) {
              return result;
            }

            return result;
          }

          exports["default"] = toArray;

          var Enumerable =
          /** @class */
          function () {
            function Enumerable(inner) {
              this.inner = inner;
              this.length = inner.length;
            }

            Enumerable.prototype.find = function (predicate) {
              for (var i = 0; i < this.length; i++) {
                var item = this.inner[i];

                if (predicate(item)) {
                  return item;
                }
              }

              return undefined;
            };

            return Enumerable;
          }();

          exports.Enumerable = Enumerable;

          function asEnumerable(obj) {
            return new Enumerable(obj);
          }

          exports.asEnumerable = asEnumerable;
          /***/
        },

        /***/
        585:
        /***/
        function _(__unused_webpack_module, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          function toFile(path) {
            return new File(path);
          }

          exports["default"] = toFile;
          /***/
        },

        /***/
        501:
        /***/
        function _(__unused_webpack_module, exports, __webpack_require__) {
          "use strict";

          var __assign = this && this.__assign || function () {
            __assign = Object.assign || function (t) {
              for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];

                for (var p in s) {
                  if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
              }

              return t;
            };

            return __assign.apply(this, arguments);
          };

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.withActions = void 0;

          var isFunction_1 = __webpack_require__(353);

          var disposeAction_1 = __webpack_require__(901);

          var ensureAction_1 = __webpack_require__(967);

          function withActions(sets, fn, opts) {
            try {
              for (var _i = 0, sets_1 = sets; _i < sets_1.length; _i++) {
                var set = sets_1[_i];
                ensureAction_1["default"](set.content);
              }

              fn(sets);
            } finally {
              for (var _a = 0, sets_2 = sets; _a < sets_2.length; _a++) {
                var set = sets_2[_a];

                if (!opts || !opts.keepAction) {
                  disposeAction_1["default"](set.setName);
                }
              }
            }
          }

          exports.withActions = withActions;

          function replacePlaceholders(content, params) {
            params = params || {};
            return content.replace(/<%=\s*([^} ]*)\s*%>/gi, function (substr, key) {
              if (!params[key]) {
                throw new Error("Param " + key + " does not exists");
              }

              return params[key];
            });
          }

          function withAction(actionDef, params, fn, opts) {
            if (isFunction_1["default"](params)) {
              fn = params;
              params = {};
            }

            var action = __assign(__assign({}, actionDef), {
              content: replacePlaceholders(actionDef.content, params)
            });

            withActions([action], function (acts) {
              fn(acts[0]);
            }, opts);
          }

          exports["default"] = withAction;
          /***/
        },

        /***/
        144:
        /***/
        function _(__unused_webpack_module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.withFile = void 0;

          var toFile_1 = __webpack_require__(585);

          function withFile(filePath, fn, openFlag, required) {
            if (openFlag === void 0) {
              openFlag = "w";
            }

            if (required === void 0) {
              required = true;
            }

            var file = toFile_1["default"](filePath);

            if (file.open(openFlag, undefined, undefined)) {
              try {
                file.encoding = "UTF-8";
                file.lineFeed = "Unix";
                return fn(file);
              } catch (e) {
                throw e;
              } finally {
                file.close();
              }
            } else {
              if (required) {
                throw new Error("can't open file " + filePath);
              }

              return fn(undefined);
            }
          }

          exports.withFile = withFile;

          function writeFile(filePath, content) {
            withFile(filePath, function (file) {
              file.write(content);
            }, "w");
          }

          exports["default"] = writeFile;
          /***/
        },

        /***/
        667:
        /***/
        function _(__unused_webpack_module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var writeFile_1 = __webpack_require__(144);

          function writeFileJson(filePath, obj) {
            writeFile_1["default"](filePath, JSON.stringify(obj));
          }

          exports["default"] = writeFileJson;
          /***/
        },

        /***/
        895:
        /***/
        function _(__unused_webpack_module, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EventHandler = void 0;

          var EventHandler =
          /** @class */
          function () {
            function EventHandler() {}

            return EventHandler;
          }();

          exports.EventHandler = EventHandler;
          /***/
        },

        /***/
        353:
        /***/
        function _(__unused_webpack_module, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          function isFunction(functionToCheck) {
            return functionToCheck && {}.toString.call(functionToCheck) === "[object Function]";
          }

          exports["default"] = isFunction;
          /***/
        },

        /***/
        797:
        /***/
        function _(__unused_webpack_module, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.tranEnRu = exports.translation = void 0;

          function translation(en, translations, locale) {
            locale = locale || app.locale;

            if (locale) {
              for (var _i = 0, translations_1 = translations; _i < translations_1.length; _i++) {
                var trans = translations_1[_i];

                if (locale.indexOf(trans.locale) === 0) {
                  return trans.strings;
                }
              }
            }

            return en;
          }

          exports.translation = translation;
          ;

          function tranEnRu(tran) {
            var en = {};
            var ru = {};

            for (var _i = 0, _a = Object.keys(tran); _i < _a.length; _i++) {
              var key = _a[_i];
              en[key] = tran[key][0];
              ru[key] = tran[key][1];
            }

            return translation(en, [{
              locale: "ru",
              strings: ru
            }]);
          }

          exports.tranEnRu = tranEnRu;
          /***/
        },

        /***/
        807:
        /***/
        function _(__unused_webpack_module, exports, __webpack_require__) {
          "use strict";

          var __extends = this && this.__extends || function () {
            var _extendStatics = function extendStatics(d, b) {
              _extendStatics = Object.setPrototypeOf || {
                __proto__: []
              } instanceof Array && function (d, b) {
                d.__proto__ = b;
              } || function (d, b) {
                for (var p in b) {
                  if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                }
              };

              return _extendStatics(d, b);
            };

            return function (d, b) {
              _extendStatics(d, b);

              function __() {
                this.constructor = d;
              }

              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
          }();

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Button = void 0;

          var Component_1 = __webpack_require__(960);

          var Button =
          /** @class */
          function (_super) {
            __extends(Button, _super);

            function Button(label) {
              var _this = _super.call(this, "button") || this;

              _this.label = label;
              return _this;
            }

            Button.prototype.init = function () {
              var _this = this;

              _super.prototype.init.call(this);

              this.inner.text = this.label;

              this.inner.onClick = function () {
                _this.debug("clicked");

                if (_this.onClick) {
                  _this.onClick();
                }
              };
            };

            Button.prototype.getValue = function () {
              return this.inner.text;
            };

            Button.prototype.setValue = function (val) {
              this.inner.text = val;
            };

            return Button;
          }(Component_1.Component);

          exports.Button = Button;
          /***/
        },

        /***/
        546:
        /***/
        function _(__unused_webpack_module, exports, __webpack_require__) {
          "use strict";

          var __extends = this && this.__extends || function () {
            var _extendStatics2 = function extendStatics(d, b) {
              _extendStatics2 = Object.setPrototypeOf || {
                __proto__: []
              } instanceof Array && function (d, b) {
                d.__proto__ = b;
              } || function (d, b) {
                for (var p in b) {
                  if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                }
              };

              return _extendStatics2(d, b);
            };

            return function (d, b) {
              _extendStatics2(d, b);

              function __() {
                this.constructor = d;
              }

              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
          }();

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CheckBox = exports.toItem = void 0;

          var Component_1 = __webpack_require__(960);

          function toItem(value) {
            return value instanceof String || typeof value === "string" ? {
              key: value,
              text: value
            } : value;
          }

          exports.toItem = toItem;

          var CheckBox =
          /** @class */
          function (_super) {
            __extends(CheckBox, _super);

            function CheckBox(value, selected) {
              if (selected === void 0) {
                selected = false;
              }

              var _this = _super.call(this, "checkbox") || this;

              _this.value = value;
              _this.selected = selected;
              _this.item = toItem(value);
              return _this;
            }

            CheckBox.prototype.init = function () {
              _super.prototype.init.call(this);

              this.inner.alignment = [ScriptUI.Alignment.LEFT, ScriptUI.Alignment.TOP];
              this.inner.text = this.item.text;
              this.setValue(this.selected);
            };

            CheckBox.prototype.getValue = function () {
              return this.inner.value;
            };

            CheckBox.prototype.setValue = function (val) {
              this.inner.value = val;
            };

            return CheckBox;
          }(Component_1.Component);

          exports.CheckBox = CheckBox;
          /***/
        },

        /***/
        149:
        /***/
        function _(__unused_webpack_module, exports, __webpack_require__) {
          "use strict";

          var __extends = this && this.__extends || function () {
            var _extendStatics3 = function extendStatics(d, b) {
              _extendStatics3 = Object.setPrototypeOf || {
                __proto__: []
              } instanceof Array && function (d, b) {
                d.__proto__ = b;
              } || function (d, b) {
                for (var p in b) {
                  if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                }
              };

              return _extendStatics3(d, b);
            };

            return function (d, b) {
              _extendStatics3(d, b);

              function __() {
                this.constructor = d;
              }

              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
          }();

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CheckBoxPanel = void 0;

          var CheckBox_1 = __webpack_require__(546);

          var Group_1 = __webpack_require__(794);

          var Panel_1 = __webpack_require__(406);

          var CheckBoxPanel =
          /** @class */
          function (_super) {
            __extends(CheckBoxPanel, _super);

            function CheckBoxPanel(items, selectedItems, options) {
              var _this = _super.call(this, options) || this;

              _this.items = items;
              _this.selectedItems = selectedItems;
              _this.options = options;
              _this.checks = [];
              return _this;
            }

            CheckBoxPanel.prototype.init = function () {
              _super.prototype.init.call(this);

              var height = (this.options || {}).height || 200;
              var orientation = (this.options || {}).orientation || "column";
              this.inner.alignChildren = "left";
              this.group = this.add(new Group_1.Group());
              this.group.inner.orientation = orientation;
              this.group.inner.alignChildren = "left";
              this.group.inner.spacing = 5;

              for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                var item = _a[_i];
                this.checks.push(this.group.add(new CheckBox_1.CheckBox(item, this.selectedItems.indexOf(CheckBox_1.toItem(item).key) >= 0)));
              }

              var panel = this.inner;
              var scrollGroup = this.group.inner;
              scrollGroup.size = {
                height: height,
                width: 300,
                length: 2
              };
              var scrollBar = panel.add('scrollbar {stepdelta: 1}');
              var numItems = this.items.length;
              var scrollGroupActualHeight = 0;
              var itemHeight = 0;
              this.on("show", function () {
                panel.size.height = height;
                scrollBar.size.height = panel.size.height - 20;
                scrollBar.size.width = 20;
                scrollBar.location = [panel.size.width - 30, 8];
                itemHeight = scrollGroup.children[0].size[1] + scrollGroup.spacing;
                scrollGroupActualHeight = panel.size[1] - panel.margins[1] - panel.margins[3]; // scrollGroup.size[1] is at the max value  

                scrollBar.maxvalue = Math.ceil(numItems - scrollGroupActualHeight / itemHeight);
              });

              scrollBar.onChanging = function () {
                var children = scrollGroup.children;
                var n;

                for (n = 0; n < numItems; n++) {
                  children[n].location.y = (n - this.value) * itemHeight;
                }

                ;
              };
            };

            CheckBoxPanel.prototype.getValue = function () {
              return this.checks.filter(function (c) {
                return c.getValue();
              }).map(function (c) {
                return c.item.key;
              });
            };

            CheckBoxPanel.prototype.setValue = function (val) {
              for (var _i = 0, _a = this.checks; _i < _a.length; _i++) {
                var check = _a[_i];
                check.setValue(val.indexOf(check.item.key) >= 0);
              }
            };

            return CheckBoxPanel;
          }(Panel_1.Panel);

          exports.CheckBoxPanel = CheckBoxPanel;
          /***/
        },

        /***/
        960:
        /***/
        function _(__unused_webpack_module, exports, __webpack_require__) {
          "use strict";

          var __extends = this && this.__extends || function () {
            var _extendStatics4 = function extendStatics(d, b) {
              _extendStatics4 = Object.setPrototypeOf || {
                __proto__: []
              } instanceof Array && function (d, b) {
                d.__proto__ = b;
              } || function (d, b) {
                for (var p in b) {
                  if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                }
              };

              return _extendStatics4(d, b);
            };

            return function (d, b) {
              _extendStatics4(d, b);

              function __() {
                this.constructor = d;
              }

              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
          }();

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CompositeComponentContainer = exports.CompositeComponent = exports.Component = void 0;

          var write_1 = __webpack_require__(955);

          var eventHandler_1 = __webpack_require__(895);

          var Component =
          /** @class */
          function () {
            function Component(type, params) {
              this.type = type;
              this.params = params;
              this.listeners = [];
              this.params = params || {};
            }

            Component.prototype.init = function () {
              this.debug("initializing");

              for (var _i = 0, _a = Object.keys(this.params); _i < _a.length; _i++) {
                var key = _a[_i];
                this.inner[key] = this.params[key];
              }
            };

            Component.prototype.getValue = function () {
              return null;
            };

            Component.prototype.setValue = function (val) {// override
            };

            Component.prototype.getClassName = function () {
              return this.constructor.name;
            };

            Component.prototype.setSize = function (width, height) {
              this.inner.size = [width, height];
            };

            Component.prototype.setProps = function (props) {
              for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
                var key = _a[_i];
                this.inner[key] = props[key];
              }
            };

            Component.prototype.send = function (eventName) {
              this.debug("sending " + eventName + " event. " + this.listeners.length + " listeners");

              for (var _i = 0, _a = this.listeners; _i < _a.length; _i++) {
                var handler = _a[_i];

                if (handler.name === eventName) {
                  handler.fn();
                }
              }
            };

            Component.prototype.on = function (eventName, fn) {
              var listener = new eventHandler_1.EventHandler();
              listener.name = eventName;
              listener.fn = fn;
              this.listeners.push(listener);
            };

            Component.prototype.debug = function (str) {
              write_1.write("[" + this.getClassName() + "] " + str);
            };

            return Component;
          }();

          exports.Component = Component;

          var CompositeComponent =
          /** @class */
          function (_super) {
            __extends(CompositeComponent, _super);

            function CompositeComponent(type) {
              var _this = _super.call(this, type) || this;

              _this.children = [];
              return _this;
            }

            CompositeComponent.prototype.init = function () {
              _super.prototype.init.call(this);
            };

            CompositeComponent.prototype.add = function (component) {
              component.parent = this;
              this.children.push(component);
              this.mountChild(component);
              component.init();
              return component;
            };

            CompositeComponent.prototype.send = function (eventName) {
              _super.prototype.send.call(this, eventName);

              for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
                var child = _a[_i];
                child.send(eventName);
              }
            };

            CompositeComponent.prototype.mountChild = function (component) {
              this.debug("mounting child <" + component.getClassName() + "> with params " + JSON.stringify(component.params, null, 2));
              return component;
            };

            return CompositeComponent;
          }(Component);

          exports.CompositeComponent = CompositeComponent;

          var CompositeComponentContainer =
          /** @class */
          function (_super) {
            __extends(CompositeComponentContainer, _super);

            function CompositeComponentContainer() {
              return _super !== null && _super.apply(this, arguments) || this;
            }

            CompositeComponentContainer.prototype.mountChild = function (component) {
              component = _super.prototype.mountChild.call(this, component);
              component.inner = this.inner.add(component.type, undefined, undefined, component.params);
              return component;
            };

            return CompositeComponentContainer;
          }(CompositeComponent);

          exports.CompositeComponentContainer = CompositeComponentContainer;
          /***/
        },

        /***/
        220:
        /***/
        function _(__unused_webpack_module, exports, __webpack_require__) {
          "use strict";

          var __extends = this && this.__extends || function () {
            var _extendStatics5 = function extendStatics(d, b) {
              _extendStatics5 = Object.setPrototypeOf || {
                __proto__: []
              } instanceof Array && function (d, b) {
                d.__proto__ = b;
              } || function (d, b) {
                for (var p in b) {
                  if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                }
              };

              return _extendStatics5(d, b);
            };

            return function (d, b) {
              _extendStatics5(d, b);

              function __() {
                this.constructor = d;
              }

              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
          }();

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Dialog = void 0;

          var Component_1 = __webpack_require__(960);

          var Dialog =
          /** @class */
          function (_super) {
            __extends(Dialog, _super);

            function Dialog(title) {
              var _this = _super.call(this, "dialog") || this;

              _this.title = title;
              _this.inner = new Window(_this.type, title);

              _this.inner.onShow = function () {
                return _this.send("show");
              };

              _this.inner.maximumSize.height = 800;
              return _this;
            }

            Dialog.prototype.mountChild = function (component) {
              component = _super.prototype.mountChild.call(this, component);

              if (component.type) {
                component.inner = this.inner.add(component.type, undefined, "");
              }

              return component;
            };

            Dialog.prototype.show = function () {
              this.inner.show();
            };

            Dialog.prototype.close = function () {
              this.inner.close();
            };

            Dialog.prototype.update = function () {
              this.inner.update();
            };

            return Dialog;
          }(Component_1.CompositeComponent);

          exports.Dialog = Dialog;
          /***/
        },

        /***/
        658:
        /***/
        function _(__unused_webpack_module, exports, __webpack_require__) {
          "use strict";

          var __extends = this && this.__extends || function () {
            var _extendStatics6 = function extendStatics(d, b) {
              _extendStatics6 = Object.setPrototypeOf || {
                __proto__: []
              } instanceof Array && function (d, b) {
                d.__proto__ = b;
              } || function (d, b) {
                for (var p in b) {
                  if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                }
              };

              return _extendStatics6(d, b);
            };

            return function (d, b) {
              _extendStatics6(d, b);

              function __() {
                this.constructor = d;
              }

              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
          }();

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DirectorySelect = void 0;

          var SelectDialog_1 = __webpack_require__(537);

          var DirectorySelect =
          /** @class */
          function (_super) {
            __extends(DirectorySelect, _super);

            function DirectorySelect(label, basePath) {
              if (basePath === void 0) {
                basePath = Folder.desktop.fsName;
              }

              return _super.call(this, label, basePath) || this;
            }

            DirectorySelect.prototype.select = function () {
              var newPath = Folder.selectDialog(this.label);

              if (newPath) {
                return newPath.fsName;
              }

              return "";
            };

            return DirectorySelect;
          }(SelectDialog_1.SelectDialog);

          exports.DirectorySelect = DirectorySelect;
          /***/
        },

        /***/
        916:
        /***/
        function _(__unused_webpack_module, exports, __webpack_require__) {
          "use strict";

          var __extends = this && this.__extends || function () {
            var _extendStatics7 = function extendStatics(d, b) {
              _extendStatics7 = Object.setPrototypeOf || {
                __proto__: []
              } instanceof Array && function (d, b) {
                d.__proto__ = b;
              } || function (d, b) {
                for (var p in b) {
                  if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                }
              };

              return _extendStatics7(d, b);
            };

            return function (d, b) {
              _extendStatics7(d, b);

              function __() {
                this.constructor = d;
              }

              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
          }();

          var __assign = this && this.__assign || function () {
            __assign = Object.assign || function (t) {
              for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];

                for (var p in s) {
                  if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
              }

              return t;
            };

            return __assign.apply(this, arguments);
          };

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DirectorySelectInOut = void 0;

          var settings_1 = __webpack_require__(655);

          var Component_1 = __webpack_require__(960);

          var DirectorySelect_1 = __webpack_require__(658);

          var DirectorySelectInOut =
          /** @class */
          function (_super) {
            __extends(DirectorySelectInOut, _super);

            function DirectorySelectInOut(opts) {
              var _this = _super.call(this, "") || this;

              _this.opts = opts;
              _this.opts = __assign({
                srcDirLabel: "Source Directory",
                destDirLabel: "Destination Directory"
              }, opts || {});
              return _this;
            }

            DirectorySelectInOut.prototype.init = function () {
              var _this = this;

              _super.prototype.init.call(this);

              this.srcSelect = this.parent.add(new DirectorySelect_1.DirectorySelect(this.opts.srcDirLabel, settings_1.getSettings("lastSrcDir")));
              this.destSelect = this.parent.add(new DirectorySelect_1.DirectorySelect(this.opts.destDirLabel, settings_1.getSettings("lastDestDir")));

              this.srcSelect.onChange = function (newPath) {
                settings_1.setSettings("lastSrcDir", newPath);

                _this.destSelect.setValue(newPath);

                _this.debug("changed");

                if (_this.onChange) {
                  _this.onChange();
                }
              };

              this.destSelect.onChange = function (newPath) {
                settings_1.setSettings("lastDestDir", newPath);
              };
            };

            DirectorySelectInOut.prototype.getValue = function () {
              return {
                srcDir: this.srcSelect.getValue(),
                destDir: this.destSelect.getValue()
              };
            };

            DirectorySelectInOut.prototype.setValue = function (val) {
              this.srcSelect.setValue(val.srcDir);
              this.destSelect.setValue(val.destDir);
            };

            return DirectorySelectInOut;
          }(Component_1.Component);

          exports.DirectorySelectInOut = DirectorySelectInOut;
          /***/
        },

        /***/
        622:
        /***/
        function _(__unused_webpack_module, exports, __webpack_require__) {
          "use strict";

          var __extends = this && this.__extends || function () {
            var _extendStatics8 = function extendStatics(d, b) {
              _extendStatics8 = Object.setPrototypeOf || {
                __proto__: []
              } instanceof Array && function (d, b) {
                d.__proto__ = b;
              } || function (d, b) {
                for (var p in b) {
                  if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                }
              };

              return _extendStatics8(d, b);
            };

            return function (d, b) {
              _extendStatics8(d, b);

              function __() {
                this.constructor = d;
              }

              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
          }();

          var __assign = this && this.__assign || function () {
            __assign = Object.assign || function (t) {
              for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];

                for (var p in s) {
                  if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
              }

              return t;
            };

            return __assign.apply(this, arguments);
          };

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EditText = void 0;

          var Component_1 = __webpack_require__(960);

          var EditText =
          /** @class */
          function (_super) {
            __extends(EditText, _super);

            function EditText(defaultValue, params) {
              var _this = _super.call(this, "edittext", __assign({
                size: [300, 20]
              }, params || {})) || this;

              _this.defaultValue = defaultValue;
              return _this;
            }

            EditText.prototype.init = function () {
              var _this = this;

              _super.prototype.init.call(this);

              this.setValue(this.defaultValue);

              this.inner.onChanging = function () {
                if (_this.onChanging) {
                  _this.onChanging();
                }
              };
            };

            EditText.prototype.getValue = function () {
              return this.inner.text;
            };

            EditText.prototype.setValue = function (val) {
              this.inner.text = val;
            };

            return EditText;
          }(Component_1.Component);

          exports.EditText = EditText;
          /***/
        },

        /***/
        279:
        /***/
        function _(__unused_webpack_module, exports, __webpack_require__) {
          "use strict";

          var __extends = this && this.__extends || function () {
            var _extendStatics9 = function extendStatics(d, b) {
              _extendStatics9 = Object.setPrototypeOf || {
                __proto__: []
              } instanceof Array && function (d, b) {
                d.__proto__ = b;
              } || function (d, b) {
                for (var p in b) {
                  if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                }
              };

              return _extendStatics9(d, b);
            };

            return function (d, b) {
              _extendStatics9(d, b);

              function __() {
                this.constructor = d;
              }

              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
          }();

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FieldComponent = void 0;

          var Group_1 = __webpack_require__(794);

          var StaticText_1 = __webpack_require__(869);

          var FieldComponent =
          /** @class */
          function (_super) {
            __extends(FieldComponent, _super);

            function FieldComponent(label, ctrl) {
              var _this = _super.call(this) || this;

              _this.label = label;
              _this.ctrl = ctrl;
              return _this;
            }

            FieldComponent.prototype.init = function () {
              _super.prototype.init.call(this);

              this.text = this.add(new StaticText_1.StaticText(this.label + ":"));
              this.text.setSize(130, 20);
              this.ctrl = this.add(this.ctrl);
            };

            FieldComponent.prototype.getValue = function () {
              return this.ctrl.getValue();
            };

            FieldComponent.prototype.setValue = function (val) {
              return this.ctrl.setValue(val);
            };

            return FieldComponent;
          }(Group_1.Group);

          exports.FieldComponent = FieldComponent;
          /***/
        },

        /***/
        794:
        /***/
        function _(__unused_webpack_module, exports, __webpack_require__) {
          "use strict";

          var __extends = this && this.__extends || function () {
            var _extendStatics10 = function extendStatics(d, b) {
              _extendStatics10 = Object.setPrototypeOf || {
                __proto__: []
              } instanceof Array && function (d, b) {
                d.__proto__ = b;
              } || function (d, b) {
                for (var p in b) {
                  if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                }
              };

              return _extendStatics10(d, b);
            };

            return function (d, b) {
              _extendStatics10(d, b);

              function __() {
                this.constructor = d;
              }

              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
          }();

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Group = void 0;

          var Component_1 = __webpack_require__(960);

          var Group =
          /** @class */
          function (_super) {
            __extends(Group, _super);

            function Group() {
              return _super.call(this, "group") || this;
            }

            Group.prototype.init = function () {
              _super.prototype.init.call(this);

              this.inner.orientation = "row";
              this.inner.alignment = [ScriptUI.Alignment.LEFT, ScriptUI.Alignment.TOP];
            };

            return Group;
          }(Component_1.CompositeComponentContainer);

          exports.Group = Group;
          /***/
        },

        /***/
        406:
        /***/
        function _(__unused_webpack_module, exports, __webpack_require__) {
          "use strict";

          var __extends = this && this.__extends || function () {
            var _extendStatics11 = function extendStatics(d, b) {
              _extendStatics11 = Object.setPrototypeOf || {
                __proto__: []
              } instanceof Array && function (d, b) {
                d.__proto__ = b;
              } || function (d, b) {
                for (var p in b) {
                  if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                }
              };

              return _extendStatics11(d, b);
            };

            return function (d, b) {
              _extendStatics11(d, b);

              function __() {
                this.constructor = d;
              }

              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
          }();

          var __assign = this && this.__assign || function () {
            __assign = Object.assign || function (t) {
              for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];

                for (var p in s) {
                  if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
              }

              return t;
            };

            return __assign.apply(this, arguments);
          };

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Panel = void 0;

          var Component_1 = __webpack_require__(960);

          var Panel =
          /** @class */
          function (_super) {
            __extends(Panel, _super);

            function Panel(opts) {
              var _this = _super.call(this, "panel") || this;

              _this.opts = opts;
              _this.opts = __assign({
                orientation: "row"
              }, opts || {});
              return _this;
            }

            Panel.prototype.init = function () {
              _super.prototype.init.call(this);

              this.inner.orientation = this.opts.orientation;
              this.inner.alignment = [ScriptUI.Alignment.LEFT, ScriptUI.Alignment.TOP];
            };

            return Panel;
          }(Component_1.CompositeComponentContainer);

          exports.Panel = Panel;
          /***/
        },

        /***/
        741:
        /***/
        function _(__unused_webpack_module, exports, __webpack_require__) {
          "use strict";

          var __extends = this && this.__extends || function () {
            var _extendStatics12 = function extendStatics(d, b) {
              _extendStatics12 = Object.setPrototypeOf || {
                __proto__: []
              } instanceof Array && function (d, b) {
                d.__proto__ = b;
              } || function (d, b) {
                for (var p in b) {
                  if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                }
              };

              return _extendStatics12(d, b);
            };

            return function (d, b) {
              _extendStatics12(d, b);

              function __() {
                this.constructor = d;
              }

              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
          }();

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Progressbar = void 0;

          var Component_1 = __webpack_require__(960);

          var StaticText_1 = __webpack_require__(869);

          var Progressbar =
          /** @class */
          function (_super) {
            __extends(Progressbar, _super);

            function Progressbar() {
              return _super.call(this, "progressbar") || this;
            }

            Progressbar.prototype.init = function () {
              _super.prototype.init.call(this);

              this.inner.minvalue = 0;
              this.inner.maxvalue = 100;
              this.label = this.parent.add(new StaticText_1.StaticText(""));
              this.label.setSize(400, 20);
              this.setSize(400, 10);
            };

            Progressbar.prototype.getValue = function () {
              return this.inner.value;
            };

            Progressbar.prototype.setValue = function (val) {
              this.inner.value = val;
            };

            Progressbar.prototype.getLabel = function () {
              return this.label.getValue();
            };

            Progressbar.prototype.setLabel = function (val) {
              this.label.setValue(val);
            };

            return Progressbar;
          }(Component_1.Component);

          exports.Progressbar = Progressbar;
          /***/
        },

        /***/
        537:
        /***/
        function _(__unused_webpack_module, exports, __webpack_require__) {
          "use strict";

          var __extends = this && this.__extends || function () {
            var _extendStatics13 = function extendStatics(d, b) {
              _extendStatics13 = Object.setPrototypeOf || {
                __proto__: []
              } instanceof Array && function (d, b) {
                d.__proto__ = b;
              } || function (d, b) {
                for (var p in b) {
                  if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                }
              };

              return _extendStatics13(d, b);
            };

            return function (d, b) {
              _extendStatics13(d, b);

              function __() {
                this.constructor = d;
              }

              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
          }();

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SelectDialog = void 0;

          var translation_1 = __webpack_require__(797);

          var Button_1 = __webpack_require__(807);

          var EditText_1 = __webpack_require__(622);

          var Group_1 = __webpack_require__(794);

          var StaticText_1 = __webpack_require__(869);

          var strings = translation_1.tranEnRu({
            choose: ["Choose...", "Выбрать..."]
          });

          var SelectDialog =
          /** @class */
          function (_super) {
            __extends(SelectDialog, _super);

            function SelectDialog(label, basePath) {
              if (basePath === void 0) {
                basePath = "~/Desktop";
              }

              var _this = _super.call(this) || this;

              _this.label = label;
              _this.basePath = basePath;
              return _this;
            }

            SelectDialog.prototype.init = function () {
              var _this = this;

              _super.prototype.init.call(this);

              this.text = this.add(new StaticText_1.StaticText(this.label));
              this.text.setSize(130, 20);
              this.input = this.add(new EditText_1.EditText(this.basePath));
              this.btn = this.add(new Button_1.Button(strings.choose));

              this.btn.onClick = function () {
                var selected = _this.select();

                if (selected) {
                  _this.setValue(selected);

                  _this.debug("changed");

                  if (_this.onChange) {
                    _this.onChange(selected);
                  }
                }
              };
            };

            SelectDialog.prototype.getValue = function () {
              return this.input.getValue();
            };

            SelectDialog.prototype.setValue = function (val) {
              this.input.setValue(val);
            };

            return SelectDialog;
          }(Group_1.Group);

          exports.SelectDialog = SelectDialog;
          /***/
        },

        /***/
        869:
        /***/
        function _(__unused_webpack_module, exports, __webpack_require__) {
          "use strict";

          var __extends = this && this.__extends || function () {
            var _extendStatics14 = function extendStatics(d, b) {
              _extendStatics14 = Object.setPrototypeOf || {
                __proto__: []
              } instanceof Array && function (d, b) {
                d.__proto__ = b;
              } || function (d, b) {
                for (var p in b) {
                  if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                }
              };

              return _extendStatics14(d, b);
            };

            return function (d, b) {
              _extendStatics14(d, b);

              function __() {
                this.constructor = d;
              }

              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
          }();

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StaticText = void 0;

          var Component_1 = __webpack_require__(960);

          var StaticText =
          /** @class */
          function (_super) {
            __extends(StaticText, _super);

            function StaticText(defaultValue) {
              var _this = _super.call(this, "statictext") || this;

              _this.defaultValue = defaultValue;
              return _this;
            }

            StaticText.prototype.init = function () {
              _super.prototype.init.call(this);

              this.inner.alignment = [ScriptUI.Alignment.LEFT, ScriptUI.Alignment.TOP];
              this.setValue(this.defaultValue);
            };

            StaticText.prototype.getValue = function () {
              return this.inner.text;
            };

            StaticText.prototype.setValue = function (val) {
              this.inner.text = val;
            };

            return StaticText;
          }(Component_1.Component);

          exports.StaticText = StaticText;
          /***/
        },

        /***/
        528:
        /***/
        function _(__unused_webpack_module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var translation_1 = __webpack_require__(797);

          exports["default"] = translation_1.tranEnRu({
            applyStyle: ["Apply Style", "Применить стиль"],
            style: ["Style", "Стиль"],
            styles: ["Styles", "Стили"],
            noOpenedDocument: ["Document with styles should be opened", "Документ со стилями должен быть открыт"],
            noStylesInDocument: ["Current document does not contain any styles", "Текущий документ не содержит стилей"],
            actions: ["Options", "Опции"],
            expandAppearance: ["Expand Appearance", "Expand Appearance"],
            expandObjects: ["Expand Objects", "Expand Objects"],
            clipToArtboard: ["Clip to Artboard", "Clip to Artboard"],
            saveEps: ["Save as EPS", "Соранять EPS"]
          });
          /***/
        },

        /***/
        928:
        /***/
        function _(__unused_webpack_module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var translation_1 = __webpack_require__(797);

          exports["default"] = translation_1.tranEnRu({
            choose: ["Choose...", "Выбрать..."],
            sourceDirectory: ["Source directory", "Откуда"],
            destinationDirectory: ["Destination directory", "Куда"],
            cancel: ["Cancel", "Отменить"],
            canceling: ["Canceling", "Отмена"],
            start: ["Start", "Старт"],
            of: ["of", "из"],
            done: ["Done", "Готово"],
            processing: ["Processing", "Обработка файла"],
            processFiles: ["Process Files", "Обработка файла"],
            operationCanceled: ["Operation Canceled", "Операция отменена"]
          });
          /***/
        },

        /***/
        945:
        /***/
        function _(__unused_webpack_module, exports, __webpack_require__) {
          "use strict";

          var __assign = this && this.__assign || function () {
            __assign = Object.assign || function (t) {
              for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];

                for (var p in s) {
                  if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
              }

              return t;
            };

            return __assign.apply(this, arguments);
          };

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FileProcessor = void 0;

          var Button_1 = __webpack_require__(807);

          var Dialog_1 = __webpack_require__(220);

          var DirectorySelectInOut_1 = __webpack_require__(916);

          var Group_1 = __webpack_require__(794);

          var Progressbar_1 = __webpack_require__(741);

          var CommonStrings_1 = __webpack_require__(928);

          var FileProcessor =
          /** @class */
          function () {
            function FileProcessor(opts) {
              this.opts = opts;
              this.opts = __assign({
                title: CommonStrings_1["default"].processFiles,
                filesFilter: /\.(eps|ai|svg)$/i
              }, opts || {});
              var _a = this.opts,
                  title = _a.title,
                  version = _a.version;
              this.dlg = new Dialog_1.Dialog(title + (version ? " " + version : ""));
              this.init();
              this.dlg.show();
            }

            FileProcessor.prototype.onCanceled = function () {};

            FileProcessor.prototype.onProcess = function (file, index) {};

            FileProcessor.prototype.onComplete = function () {};

            FileProcessor.prototype.onInit = function () {};

            FileProcessor.prototype.processFiles = function (files) {
              var index = 0;
              var total = files.length;

              for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                var filePath = files_1[_i];

                if (this.stopSignal) {
                  alert(CommonStrings_1["default"].operationCanceled);
                  this.stopSignal = null;
                  return;
                }

                this.checkStop();
                index++;
                this.currentStatus = CommonStrings_1["default"].processing + " " + index + " " + CommonStrings_1["default"].of + " " + total + " [" + filePath.match(/[^\/]*$/g)[0] + "].";
                this.progBar.setLabel(this.currentStatus);
                this.progBar.setValue(index / total * 100);
                this.dlg.update();
                this.onProcess(filePath, index);
                $.gc();
              }
            };

            FileProcessor.prototype.setStatus = function (info) {
              this.checkStop();
              this.progBar.setLabel(this.currentStatus + (info ? " " + info : ""));
              this.dlg.update();
            };

            FileProcessor.prototype.init = function () {
              var _this = this;

              this.srcSelect = this.dlg.add(new DirectorySelectInOut_1.DirectorySelectInOut());
              this.onInit();
              this.progBar = this.dlg.add(new Progressbar_1.Progressbar());
              this.progBar.inner.alignment = "left";
              this.progBar.label.inner.alignment = "left";
              this.progBar.setSize(530, 10);
              var btnGroup = this.dlg.add(new Group_1.Group());
              this.btnCancel = btnGroup.add(new Button_1.Button(CommonStrings_1["default"].cancel));
              this.btnStart = btnGroup.add(new Button_1.Button(CommonStrings_1["default"].start));

              this.btnCancel.onClick = function () {
                if (_this.isRunning) {
                  _this.btnCancel.setValue(CommonStrings_1["default"].canceling + "...");

                  _this.stopSignal = new Error(CommonStrings_1["default"].operationCanceled);
                } else {
                  _this.onCanceled();

                  _this.dlg.close();
                }
              };

              this.btnStart.onClick = function () {
                if (_this.isRunning) {
                  return;
                }

                try {
                  _this.isRunning = true;

                  var _a = _this.srcSelect.getValue(),
                      srcDir = _a.srcDir,
                      destDir = _a.destDir;

                  var inputFiles_1 = new Folder(srcDir).getFiles(_this.opts.filesFilter);
                  var total = inputFiles_1.length;

                  if (total === 0) {
                    throw new Error("No eps or ai files in dir: [" + srcDir + "]");
                  }

                  _this.processFiles(inputFiles_1.map(function (f) {
                    return f.absoluteURI;
                  }));

                  _this.progBar.setLabel(CommonStrings_1["default"].done);
                } catch (e) {
                  alert(e);
                } finally {
                  _this.complete();

                  _this.dlg.close();
                }
              };
            };

            FileProcessor.prototype.complete = function () {
              this.isRunning = false;
              this.stopSignal = null;
              this.onComplete();
            };

            FileProcessor.prototype.checkStop = function () {
              $.sleep(50);

              if (this.stopSignal) {
                throw this.stopSignal;
              }
            };

            return FileProcessor;
          }();

          exports.FileProcessor = FileProcessor;
          /***/
        },

        /***/
        582:
        /***/
        function _(__unused_webpack_module, exports, __webpack_require__) {
          "use strict";

          var __extends = this && this.__extends || function () {
            var _extendStatics15 = function extendStatics(d, b) {
              _extendStatics15 = Object.setPrototypeOf || {
                __proto__: []
              } instanceof Array && function (d, b) {
                d.__proto__ = b;
              } || function (d, b) {
                for (var p in b) {
                  if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                }
              };

              return _extendStatics15(d, b);
            };

            return function (d, b) {
              _extendStatics15(d, b);

              function __() {
                this.constructor = d;
              }

              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
          }();

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ApplyStyleProcessor = exports.actions = void 0;

          var ai_1 = __webpack_require__(101);

          var clipToArtboardSize_1 = __webpack_require__(137);

          var copyFile_1 = __webpack_require__(565);

          var doAction_1 = __webpack_require__(768);

          var getActiveDocument_1 = __webpack_require__(771);

          var menu_1 = __webpack_require__(97);

          var openFile_1 = __webpack_require__(119);

          var toArray_1 = __webpack_require__(703);

          var toFile_1 = __webpack_require__(585);

          var shutterEps10_1 = __webpack_require__(471);

          var CheckBoxPanel_1 = __webpack_require__(149);

          var FieldComponent_1 = __webpack_require__(279);

          var ApplyStyleStrings_1 = __webpack_require__(528);

          var FileProcessor_1 = __webpack_require__(945);

          var expandObjectAction = __webpack_require__(219);

          var version = "1.0.7"; // 1-expand appearance
          // 2-expand objects
          // 3-clipping mask - artboard size

          exports.actions = {
            expandAppearance: {
              fn: function fn() {
                menu_1.callMenu("selectall");
                menu_1.callMenu("expandStyle"); // alert("TODO: expandAppearance");
              },
              order: 0
            },
            expandObjects: {
              fn: function fn() {
                menu_1.callMenu("selectall");
                doAction_1.loadAndDoAction(expandObjectAction);
              },
              order: 2
            },
            clipToArtboard: {
              fn: function fn() {
                clipToArtboardSize_1["default"]();
              },
              order: 3
            },
            saveEps: {
              fn: function fn() {},
              order: 3
            }
          };

          var ApplyStyleProcessor =
          /** @class */
          function (_super) {
            __extends(ApplyStyleProcessor, _super);

            function ApplyStyleProcessor() {
              return _super.call(this, {
                title: ApplyStyleStrings_1["default"].applyStyle,
                version: version,
                filesFilter: /\.(eps|ai|jpe?g)$/i
              }) || this;
            }

            ApplyStyleProcessor.prototype.onInit = function () {
              var doc = getActiveDocument_1["default"]();

              if (!doc) {
                throw new Error(ApplyStyleStrings_1["default"].noOpenedDocument);
              }

              var styles = toArray_1["default"](doc.graphicStyles).map(function (s) {
                return s.name;
              }).filter(function (n) {
                return n !== "[Default]";
              });

              if (!styles.length) {
                throw new Error(ApplyStyleStrings_1["default"].noStylesInDocument);
              }

              this.templateFile = doc.path + "/" + doc.name; // this.dlg.add(new ScrollablePanel());

              var items = Object.keys(exports.actions).sort(function (k1, k2) {
                return exports.actions[k1].order - exports.actions[k2].order;
              }).map(function (k) {
                return {
                  key: k,
                  text: ApplyStyleStrings_1["default"][k]
                };
              });
              this.fieldActions = this.dlg.add(new FieldComponent_1.FieldComponent(ApplyStyleStrings_1["default"].actions, new CheckBoxPanel_1.CheckBoxPanel(items, ["expandAppearance", "expandObjects"],
              /*items.map(i => i.key)*/
              {
                orientation: "column",
                height: 100
              })));
              this.fieldStyles = this.dlg.add(new FieldComponent_1.FieldComponent(ApplyStyleStrings_1["default"].styles, new CheckBoxPanel_1.CheckBoxPanel(styles, styles, {
                orientation: "column"
              })));
            };

            ApplyStyleProcessor.prototype.onProcess = function (file) {
              var doActions = this.fieldActions.ctrl.getValue();
              var isEps = doActions.indexOf("saveEps") >= 0;
              copyFile_1.copyFile(file);
              var styles = this.fieldStyles.ctrl.getValue();
              var destDir = this.srcSelect.getValue().destDir;
              var index = 0;

              for (var _i = 0, styles_1 = styles; _i < styles_1.length; _i++) {
                var styleName = styles_1[_i];
                index++;
                this.setStatus(ApplyStyleStrings_1["default"].style + ": " + styleName + " (" + index + "/" + styles.length + ")");
                var finalFilePath = this.getFinalPath(file, destDir, styleName, isEps);
                var finalFile = toFile_1["default"](finalFilePath);

                if (finalFile.exists) {
                  continue;
                }

                menu_1.callMenu("pasteInPlace");
                var doc = getActiveDocument_1["default"]();
                menu_1.callMenu("Fit Artboard to selected Art");
                var style = doc.graphicStyles.getByName(styleName); // if clipping mask select underneath

                if (doc.activeLayer.groupItems && doc.activeLayer.groupItems.length === 1 && doc.activeLayer.groupItems[0].clipped) {
                  var group = doc.activeLayer.groupItems[0];
                  app.selection = group;

                  for (var _a = 0, _b = toArray_1["default"](group.pathItems); _a < _b.length; _a++) {
                    var clippedPath = _b[_a];

                    if (clippedPath.clipping) {
                      clippedPath.selected = false;
                    }
                  }
                }

                var selectedItems = app.selection;
                var itemsCount = selectedItems.length;

                for (var i = 0; i < itemsCount; i++) {
                  style.applyTo(selectedItems[i]);
                }

                for (var _c = 0, _d = Object.keys(exports.actions).sort(function (k1, k2) {
                  return exports.actions[k1].order - exports.actions[k2].order;
                }); _c < _d.length; _c++) {
                  var step = _d[_c];

                  if (doActions.indexOf(step) >= 0) {
                    try {
                      this.setStatus(ApplyStyleStrings_1["default"][step]);
                      exports.actions[step].fn();
                    } catch (e) {
                      alert("[" + ApplyStyleStrings_1["default"][step] + "] failed. " + e.message);
                      throw e;
                    }
                  }
                }

                if (isEps) {
                  shutterEps10_1["default"](finalFilePath);
                } else {
                  ai_1["default"](finalFilePath);
                }

                doc.close(SaveOptions.DONOTSAVECHANGES);
                openFile_1["default"](this.templateFile);
              }
            };

            ApplyStyleProcessor.prototype.getFinalPath = function (aiEpsPath, outputFolder, styleName, isEps) {
              var fileName = aiEpsPath.match(/[^\/]*$/g)[0];
              var fileBaseName = fileName.match(/^[^\.]*/g);
              return outputFolder + "/" + fileBaseName + "__" + styleName + (isEps ? ".eps" : ".ai");
            };

            return ApplyStyleProcessor;
          }(FileProcessor_1.FileProcessor);

          exports.ApplyStyleProcessor = ApplyStyleProcessor;
          var processor = new ApplyStyleProcessor();
          // exports["default"](args);
          /***/
        }
        /******/

      };
      /************************************************************************/

      /******/
      // The module cache

      /******/

      var __webpack_module_cache__ = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/
        // Check if module is in cache

        /******/
        if (__webpack_module_cache__[moduleId]) {
          /******/
          return __webpack_module_cache__[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = __webpack_module_cache__[moduleId] = {
          /******/
          // no module.id needed

          /******/
          // no module.loaded needed

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Return the exports of the module

        /******/


        return module.exports;
        /******/
      }
      /******/

      /************************************************************************/

      /******/
      // startup

      /******/
      // Load entry module

      /******/
      // This entry module is referenced by other modules so it can't be inlined

      /******/


      __webpack_require__(582);
      /******/

    })();
  } catch (e) {
    alert(e.message);
    return;
  }
})();

}).call(this)}).call(this,require('_process'))
},{"_process":1}]},{},[2]);
