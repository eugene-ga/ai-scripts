Array.prototype.every||(Array.prototype.every=function(e,t){var r,n;if(void 0===this||null===this)throw new TypeError("Array.prototype.every called on null or undefined");var o=Object(this),i=o.length>>>0;if("Function"!==e.__class__)throw new TypeError(e+" is not a function");for(r=arguments.length>1?t:void 0,n=0;n<i;){var a;if(n in o)if(a=o[n],!e.call(r,a,n,o))return!1;n++}return!0}),Array.prototype.filter||(Array.prototype.filter=function(e,t){if(void 0===this||null===this)throw new TypeError("Array.prototype.filter called on null or undefined");var r=Object(this),n=r.length>>>0;if("Function"!==e.__class__)throw new TypeError(e+" is not a function");for(var o=[],i=arguments.length>1?t:void 0,a=0;a<n;a++)if(a in r){var c=r[a];e.call(i,c,a,r)&&o.push(c)}return o}),Array.prototype.forEach||(Array.prototype.forEach=function(e,t){if(void 0===this||null===this)throw new TypeError("Array.prototype.forEach called on null or undefined");var r=Object(this),n=r.length>>>0;if("Function"!==e.__class__)throw new TypeError(e+" is not a function");for(var o=arguments.length>1?t:void 0,i=0;i<n;i++){var a;i in r&&(a=r[i],e.call(o,a,i,r))}}),Array.prototype.indexOf||(Array.prototype.indexOf=function(e,t){if(void 0===this||null===this)throw new TypeError("Array.prototype.indexOf called on null or undefined");var r,n=Object(this),o=n.length>>>0;if(0===o)return-1;var i=+t||0;if(Math.abs(i)===1/0&&(i=0),i>=o)return-1;for(r=Math.max(i>=0?i:o-Math.abs(i),0);r<o;){if(r in n&&n[r]===e)return r;r++}return-1}),Array.isArray||(Array.isArray=function(e){return void 0!==e&&null!==e&&"Array"===e.__class__}),Array.prototype.lastIndexOf||(Array.prototype.lastIndexOf=function(e,t){if(void 0===this||null===this)throw new TypeError("Array.prototype.lastIndexOf called on null or undefined");var r,n,o=Object(this),i=o.length>>>0;if(0===i)return-1;for(r=i-1,arguments.length>1&&((r=Number(arguments[1]))!=r?r=0:0!=r&&r!=1/0&&r!=-1/0&&(r=(r>0||-1)*Math.floor(Math.abs(r)))),n=r>=0?Math.min(r,i-1):i-Math.abs(r);n>=0;n--)if(n in o&&o[n]===e)return n;return-1}),Array.prototype.map||(Array.prototype.map=function(e,t){var r,n;if(void 0===this||null===this)throw new TypeError("Array.prototype.map called on null or undefined");var o=Object(this),i=o.length>>>0;if("Function"!==e.__class__)throw new TypeError(e+" is not a function");r=arguments.length>1?t:void 0,n=new Array(i);for(var a=0;a<i;a++){var c,l;a in o&&(c=o[a],l=e.call(r,c,a,o),n[a]=l)}return n}),Array.prototype.reduce||(Array.prototype.reduce=function(e,t){if(void 0===this||null===this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("Function"!==e.__class__)throw new TypeError(e+" is not a function");var r,n=Object(this),o=n.length>>>0,i=0;if(arguments.length>1)r=t;else{for(;i<o&&!(i in n);)i++;if(i>=o)throw new TypeError("Reduce of empty array with no initial value");r=n[i++]}for(;i<o;i++)i in n&&(r=e(r,n[i],i,n));return r}),Array.prototype.reduceRight||(Array.prototype.reduceRight=function(e,t){if(void 0===this||null===this)throw new TypeError("Array.prototype.reduceRight called on null or undefined");if("Function"!==e.__class__)throw new TypeError(e+" is not a function");var r,n=Object(this),o=(n.length>>>0)-1;if(arguments.length>1)r=t;else{for(;o>=0&&!(o in n);)o--;if(o<0)throw new TypeError("Reduce of empty array with no initial value");r=n[o--]}for(;o>=0;o--)o in n&&(r=e(r,n[o],o,n));return r}),Array.prototype.some||(Array.prototype.some=function(e,t){if(void 0===this||null===this)throw new TypeError("Array.prototype.some called on null or undefined");if("Function"!==e.__class__)throw new TypeError(e+" is not a function");for(var r=Object(this),n=r.length>>>0,o=arguments.length>1?t:void 0,i=0;i<n;i++)if(i in r&&e.call(o,r[i],i,r))return!0;return!1}),Function.prototype.bind||(Function.prototype.bind=function(e){if("Function"!==this.__class__)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var t=Array.prototype.slice.call(arguments,1),r=this,n=function(){},o=function(){return r.apply(this instanceof n?this:e,t.concat(Array.prototype.slice.call(arguments)))};return this.prototype&&(n.prototype=this.prototype),o.prototype=new n,o}),String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}),Object.create||(Object.create=function(){function e(){}var t=Object.prototype.hasOwnProperty;return function(r){if(Object(r)!==r&&null!==r)throw TypeError("Object prototype may only be an Object or null");e.prototype=r;var n=new e;if(e.prototype=null,arguments.length>1){var o=Object(arguments[1]);for(var i in o)if(t.call(o,i)){var a=o[i];if(Object(a)!==a)throw TypeError(i+"must be an object");if("get"in a||"set"in a)throw new TypeError("getters & setters can not be defined on this javascript engine");"value"in a&&(n[i]=o[i])}}return n}}()),Object.defineProperties||(Object.defineProperties=function(e,t){function r(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function n(e){if(Object(e)!==e)throw new TypeError("Descriptor can only be an Object.");var t={};if(r(e,"enumerable")&&(t.enumerable=!!e.enumerable),r(e,"configurable")&&(t.configurable=!!e.configurable),r(e,"value")&&(t.value=e.value),r(e,"writable")&&(t.writable=!!e.writable),r(e,"get"))throw new TypeError("getters & setters can not be defined on this javascript engine");if(r(e,"set"))throw new TypeError("getters & setters can not be defined on this javascript engine");return t}if(Object(e)!==e)throw new TypeError("Object.defineProperties can only be called on Objects.");if(Object(t)!==t)throw new TypeError("Properties can only be an Object.");var o=Object(t);for(propName in o)if(hasOwnProperty.call(o,propName)){var i=n(o[propName]);e[propName]=i.value}return e}),Object.defineProperty||(Object.defineProperty=function(e,t,r){if(Object(e)!==e)throw new TypeError("Object.defineProperty can only be called on Objects.");if(Object(r)!==r)throw new TypeError("Property description can only be an Object.");if("get"in r||"set"in r)throw new TypeError("getters & setters can not be defined on this javascript engine");return"value"in r&&(e[t]=r.value),e}),Object.freeze||(Object.freeze=function(e){if(Object(e)!==e)throw new TypeError("Object.freeze can only be called on Objects.");return e}),Object.getOwnPropertyDescriptor||(Object.getOwnPropertyDescriptor=function(e,t){if(Object(e)!==e)throw new TypeError("Object.getOwnPropertyDescriptor can only be called on Objects.");var r;if(!Object.prototype.hasOwnProperty.call(e,t))return r;(r={enumerable:Object.prototype.propertyIsEnumerable.call(e,t),configurable:!0}).value=e[t];var n=e.reflect.find(t).type;return r.writable="readwrite"===n,r}),Object.getOwnPropertyNames||(Object.getOwnPropertyNames=function(e){if(Object(e)!==e)throw new TypeError("Object.getOwnPropertyNames can only be called on Objects.");for(var t=e.reflect.properties,r=e.reflect.methods.concat(t),n=[],o=0;o<r.length;o++)n.push(r[o].name);return n}),Object.getPrototypeOf||(Object.getPrototypeOf=function(e){if(Object(e)!==e)throw new TypeError("Object.getPrototypeOf can only be called on Objects.");return e.__proto__}),Object.isExtensible||(Object.isExtensible=function(e){if(Object(e)!==e)throw new TypeError("Object.isExtensible can only be called on Objects.");return!0}),Object.isFrozen||(Object.isFrozen=function(e){if(Object(e)!==e)throw new TypeError("Object.isFrozen can only be called on Objects.");return!1}),Object.isSealed||(Object.isSealed=function(e){if(Object(e)!==e)throw new TypeError("Object.isSealed can only be called on Objects.");return!1}),Object.keys||(Object.keys=function(){var e=Object.prototype.hasOwnProperty;return function(t){if(Object(t)!==t)throw new TypeError("Object.keys can only be called on Objects.");var r,n=[];for(r in t)e.call(t,r)&&n.push(r);return n}}()),Object.preventExtensions||(Object.preventExtensions=function(e){if(Object(e)!==e)throw new TypeError("Object.preventExtensions can only be called on Objects.");return e}),Object.seal||(Object.seal=function(e){if(Object(e)!==e)throw new TypeError("Object.seal can only be called on Objects.");return e}),"object"!=typeof JSON&&(JSON={}),function(){"use strict";function f(e){return 10>e?"0"+e:e}function this_value(){return this.valueOf()}function quote(e){return rx_escapable.lastIndex=0,rx_escapable.test(e)?'"'+e.replace(rx_escapable,function(e){var t=meta[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var r,n,o,i,a,c=gap,l=t[e];switch(l&&"object"==typeof l&&"function"==typeof l.toJSON&&(l=l.toJSON(e)),"function"==typeof rep&&(l=rep.call(t,e,l)),typeof l){case"string":return quote(l);case"number":return isFinite(l)?l+"":"null";case"boolean":case"null":return l+"";case"object":if(!l)return"null";if(gap+=indent,a=[],"[object Array]"===Object.prototype.toString.apply(l)){for(i=l.length,r=0;i>r;r+=1)a[r]=str(r,l)||"null";return o=0===a.length?"[]":gap?"[\n"+gap+a.join(",\n"+gap)+"\n"+c+"]":"["+a.join(",")+"]",gap=c,o}if(rep&&"object"==typeof rep)for(i=rep.length,r=0;i>r;r+=1)"string"==typeof rep[r]&&((o=str(n=rep[r],l))&&a.push(quote(n)+(gap?": ":":")+o));else for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&((o=str(n,l))&&a.push(quote(n)+(gap?": ":":")+o));return o=0===a.length?"{}":gap?"{\n"+gap+a.join(",\n"+gap)+"\n"+c+"}":"{"+a.join(",")+"}",gap=c,o}}var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta,rep;"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value),"function"!=typeof JSON.stringify&&(meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(e,t,r){var n;if(gap="",indent="","number"==typeof r)for(n=0;r>n;n+=1)indent+=" ";else"string"==typeof r&&(indent=r);if(rep=t,t&&"function"!=typeof t&&("object"!=typeof t||"number"!=typeof t.length))throw Error("JSON.stringify");return str("",{"":e})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(e,t){var r,n,o=e[t];if(o&&"object"==typeof o)for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(void 0!==(n=walk(o,r))?o[r]=n:delete o[r]);return reviver.call(e,t,o)}var j;if(text+="",rx_dangerous.lastIndex=0,rx_dangerous.test(text)&&(text=text.replace(rx_dangerous,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})),rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}();;

				(function(){
					try {
						!function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: !1,
            exports: {}
        };
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
        module.l = !0, module.exports;
    }
    __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function(exports, name, getter) {
        __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
            configurable: !1,
            enumerable: !0,
            get: getter
        });
    }, __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module.default;
        } : function() {
            return module;
        };
        return __webpack_require__.d(getter, "a", getter), getter;
    }, __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 9);
}([ function(module, exports, __webpack_require__) {
    "use strict";
    var extendStatics, __extends = this && this.__extends || (extendStatics = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
    }, function(d, b) {
        function __() {
            this.constructor = d;
        }
        extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
        new __());
    });
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var write_1 = __webpack_require__(1), Component = function() {
        function Component(type) {
            this.type = type;
        }
        return Component.prototype.init = function() {
            this.debug("initializing");
        }, Component.prototype.getValue = function() {
            return null;
        }, Component.prototype.setValue = function(val) {}, Component.prototype.getClassName = function() {
            return this.constructor.name;
        }, Component.prototype.setSize = function(width, height) {
            this.inner.size = [ width, height ];
        }, Component.prototype.setProps = function(props) {
            for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
                var key = _a[_i];
                this.inner[key] = props[key];
            }
        }, Component.prototype.debug = function(str) {
            write_1.write("[" + this.getClassName() + "] " + str);
        }, Component;
    }();
    exports.Component = Component;
    var CompositeComponent = function(_super) {
        function CompositeComponent(type) {
            var _this = _super.call(this, type) || this;
            return _this.children = [], _this;
        }
        return __extends(CompositeComponent, _super), CompositeComponent.prototype.init = function() {
            _super.prototype.init.call(this);
        }, CompositeComponent.prototype.add = function(component) {
            return component.parent = this, this.children.push(component), this.mountChild(component), 
            component.init(), component;
        }, CompositeComponent.prototype.mountChild = function(component) {
            return this.debug("mounting child <" + component.getClassName() + ">"), component;
        }, CompositeComponent;
    }(Component);
    exports.CompositeComponent = CompositeComponent;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.write = function(text) {
        $.fileName.indexOf("ai-scripts/scripts/standalone") >= 0 && $.writeln(text);
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    function translation(en, translations, locale) {
        for (var _i = 0, translations_1 = translations; _i < translations_1.length; _i++) {
            var trans = translations_1[_i];
            if (0 === "en".indexOf(trans.locale)) return trans.strings;
        }
        return en;
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.translation = translation, exports.tranEnRu = function(tran) {
        for (var en = {}, ru = {}, _i = 0, _a = Object.keys(tran); _i < _a.length; _i++) {
            var key = _a[_i];
            en[key] = tran[key][0], ru[key] = tran[key][1];
        }
        return translation(en, [ {
            locale: "ru",
            strings: ru
        } ]);
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(path) {
        return new File(path);
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    var extendStatics, __extends = this && this.__extends || (extendStatics = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
    }, function(d, b) {
        function __() {
            this.constructor = d;
        }
        extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
        new __());
    });
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var Group = function(_super) {
        function Group() {
            return _super.call(this, "group") || this;
        }
        return __extends(Group, _super), Group.prototype.mountChild = function(component) {
            return (component = _super.prototype.mountChild.call(this, component)).inner = this.inner.add(component.type), 
            component;
        }, Group.prototype.init = function() {
            _super.prototype.init.call(this), this.inner.orientation = "row", this.inner.alignment = [ ScriptUI.Alignment.LEFT, ScriptUI.Alignment.TOP ];
        }, Group;
    }(__webpack_require__(0).CompositeComponent);
    exports.Group = Group;
}, function(module, exports, __webpack_require__) {
    "use strict";
    var extendStatics, __extends = this && this.__extends || (extendStatics = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
    }, function(d, b) {
        function __() {
            this.constructor = d;
        }
        extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
        new __());
    });
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var StaticText = function(_super) {
        function StaticText(defaultValue) {
            var _this = _super.call(this, "statictext") || this;
            return _this.defaultValue = defaultValue, _this;
        }
        return __extends(StaticText, _super), StaticText.prototype.init = function() {
            _super.prototype.init.call(this), this.inner.alignment = [ ScriptUI.Alignment.LEFT, ScriptUI.Alignment.TOP ], 
            this.setValue(this.defaultValue);
        }, StaticText.prototype.getValue = function() {
            return this.inner.text;
        }, StaticText.prototype.setValue = function(val) {
            this.inner.text = val;
        }, StaticText;
    }(__webpack_require__(0).Component);
    exports.StaticText = StaticText;
}, function(module, exports, __webpack_require__) {
    (function(process) {
        function normalizeArray(parts, allowAboveRoot) {
            for (var up = 0, i = parts.length - 1; i >= 0; i--) {
                var last = parts[i];
                "." === last ? parts.splice(i, 1) : ".." === last ? (parts.splice(i, 1), up++) : up && (parts.splice(i, 1), 
                up--);
            }
            if (allowAboveRoot) for (;up--; up) parts.unshift("..");
            return parts;
        }
        var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, splitPath = function(filename) {
            return splitPathRe.exec(filename).slice(1);
        };
        function filter(xs, f) {
            if (xs.filter) return xs.filter(f);
            for (var res = [], i = 0; i < xs.length; i++) f(xs[i], i, xs) && res.push(xs[i]);
            return res;
        }
        exports.resolve = function() {
            for (var resolvedPath = "", resolvedAbsolute = !1, i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
                var path = i >= 0 ? arguments[i] : process.cwd();
                if ("string" != typeof path) throw new TypeError("Arguments to path.resolve must be strings");
                path && (resolvedPath = path + "/" + resolvedPath, resolvedAbsolute = "/" === path.charAt(0));
            }
            return resolvedPath = normalizeArray(filter(resolvedPath.split("/"), function(p) {
                return !!p;
            }), !resolvedAbsolute).join("/"), (resolvedAbsolute ? "/" : "") + resolvedPath || ".";
        }, exports.normalize = function(path) {
            var isAbsolute = exports.isAbsolute(path), trailingSlash = "/" === substr(path, -1);
            return (path = normalizeArray(filter(path.split("/"), function(p) {
                return !!p;
            }), !isAbsolute).join("/")) || isAbsolute || (path = "."), path && trailingSlash && (path += "/"), 
            (isAbsolute ? "/" : "") + path;
        }, exports.isAbsolute = function(path) {
            return "/" === path.charAt(0);
        }, exports.join = function() {
            var paths = Array.prototype.slice.call(arguments, 0);
            return exports.normalize(filter(paths, function(p, index) {
                if ("string" != typeof p) throw new TypeError("Arguments to path.join must be strings");
                return p;
            }).join("/"));
        }, exports.relative = function(from, to) {
            function trim(arr) {
                for (var start = 0; start < arr.length && "" === arr[start]; start++) ;
                for (var end = arr.length - 1; end >= 0 && "" === arr[end]; end--) ;
                return start > end ? [] : arr.slice(start, end - start + 1);
            }
            from = exports.resolve(from).substr(1), to = exports.resolve(to).substr(1);
            for (var fromParts = trim(from.split("/")), toParts = trim(to.split("/")), length = Math.min(fromParts.length, toParts.length), samePartsLength = length, i = 0; i < length; i++) if (fromParts[i] !== toParts[i]) {
                samePartsLength = i;
                break;
            }
            var outputParts = [];
            for (i = samePartsLength; i < fromParts.length; i++) outputParts.push("..");
            return (outputParts = outputParts.concat(toParts.slice(samePartsLength))).join("/");
        }, exports.sep = "/", exports.delimiter = ":", exports.dirname = function(path) {
            var result = splitPath(path), root = result[0], dir = result[1];
            return root || dir ? (dir && (dir = dir.substr(0, dir.length - 1)), root + dir) : ".";
        }, exports.basename = function(path, ext) {
            var f = splitPath(path)[2];
            return ext && f.substr(-1 * ext.length) === ext && (f = f.substr(0, f.length - ext.length)), 
            f;
        }, exports.extname = function(path) {
            return splitPath(path)[3];
        };
        var substr = "b" === "ab".substr(-1) ? function(str, start, len) {
            return str.substr(start, len);
        } : function(str, start, len) {
            return start < 0 && (start = str.length + start), str.substr(start, len);
        };
    }).call(exports, __webpack_require__(14));
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(art) {
        if (!art) {
            var doc = app.activeDocument, artIndex = doc.artboards.getActiveArtboardIndex();
            art = doc.artboards[artIndex];
        }
        var _a = art.artboardRect, left = _a[0], top = _a[1];
        return {
            left: left,
            top: top,
            width: _a[2] - left,
            height: top - _a[3]
        };
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    var extendStatics, __extends = this && this.__extends || (extendStatics = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
    }, function(d, b) {
        function __() {
            this.constructor = d;
        }
        extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
        new __());
    });
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var Button = function(_super) {
        function Button(label) {
            var _this = _super.call(this, "button") || this;
            return _this.label = label, _this;
        }
        return __extends(Button, _super), Button.prototype.init = function() {
            var _this = this;
            _super.prototype.init.call(this), this.inner.text = this.label, this.inner.onClick = function() {
                _this.debug("clicked"), _this.onClick && _this.onClick();
            };
        }, Button.prototype.getValue = function() {
            return this.inner.text;
        }, Button.prototype.setValue = function(val) {
            this.inner.text = val;
        }, Button;
    }(__webpack_require__(0).Component);
    exports.Button = Button;
}, function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(10);
}, function(module, exports, __webpack_require__) {
    "use strict";
    var extendStatics, __extends = this && this.__extends || (extendStatics = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
    }, function(d, b) {
        function __() {
            this.constructor = d;
        }
        extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
        new __());
    });
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var jpeg_1 = __webpack_require__(11), openFile_1 = __webpack_require__(12), path_1 = __webpack_require__(13), resizeToResolution_1 = __webpack_require__(15), toFile_1 = __webpack_require__(3), translation_1 = __webpack_require__(2), FileProcessor_1 = __webpack_require__(24), Group_1 = __webpack_require__(4), Slider_1 = __webpack_require__(31), StaticText_1 = __webpack_require__(5), strings = translation_1.tranEnRu({
        exportJpeg: [ "Export Jpeg", "Экспорт Jpeg" ],
        jpegResolution: [ "Jpeg Resolution", "Разрешение" ],
        saving: [ "Saving", "Saving" ],
        closing: [ "Closing", "Closing" ],
        opening: [ "Opening", "Opening" ],
        resizing: [ "Resizing", "Resizing" ]
    });
    !function(Labels) {
        Labels[Labels.closing = 0] = "closing", Labels[Labels.opening = 1] = "opening";
    }(exports.Labels || (exports.Labels = {}));
    var ExportJpegProcessor = function(_super) {
        function ExportJpegProcessor() {
            return _super.call(this, {
                title: strings.exportJpeg
            }) || this;
        }
        return __extends(ExportJpegProcessor, _super), ExportJpegProcessor.prototype.onInit = function() {
            var _this = this, group = this.dlg.add(new Group_1.Group());
            group.add(new StaticText_1.StaticText(strings.jpegResolution + ":")).setSize(130, 20), 
            this.slider = group.add(new Slider_1.Slider({
                min: 6,
                max: 64,
                step: 1,
                value: 24
            })), this.slider.setSize(300, 30);
            var resolutionLabel = group.add(new StaticText_1.StaticText("24mp"));
            resolutionLabel.setProps({
                size: [ 60, 20 ]
            }), this.slider.onChanging = function() {
                return resolutionLabel.setValue(_this.slider.getValue() + "mp");
            };
        }, ExportJpegProcessor.prototype.onProcess = function(file) {
            var destDir = this.srcSelect.getValue().destDir, name = path_1.parse(file).name, finalFile = path_1.join(destDir, name + ".jpg");
            if (!toFile_1.default(finalFile).exists) {
                this.setStatus(strings.opening);
                var doc = openFile_1.default(file);
                this.setStatus(strings.resizing), resizeToResolution_1.default(this.slider.getValue()), 
                this.setStatus(strings.saving), jpeg_1.default(finalFile), this.setStatus(strings.closing), 
                doc.close(SaveOptions.DONOTSAVECHANGES);
            }
        }, ExportJpegProcessor;
    }(FileProcessor_1.FileProcessor);
    exports.ExportJpegProcessor = ExportJpegProcessor;
    new ExportJpegProcessor();
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var toFile_1 = __webpack_require__(3);
    exports.default = function(file) {
        !function(file) {
            var jpegOpts = new ExportOptionsJPEG();
            jpegOpts.antiAliasing = !0, jpegOpts.artBoardClipping = !0, jpegOpts.qualitySetting = 100, 
            jpegOpts.horizontalScale = 100, jpegOpts.verticalScale = 100, app.activeDocument.exportFile(toFile_1.default(file), ExportType.JPEG, jpegOpts);
        }(file);
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var toFile_1 = __webpack_require__(3);
    function openFile(file) {
        try {
            return app.open(toFile_1.default(file));
        } catch (e) {
            throw new Error("Can't open file: " + file + ". Error: " + e);
        }
    }
    exports.default = openFile, exports.reopenCurrentFile = function() {
        var currentFile = app.activeDocument.path + "/" + app.activeDocument.name;
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES), openFile(currentFile);
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var path = __webpack_require__(6);
    exports.parse = function(filePath) {
        var basename = path.basename(filePath), ext = path.extname(filePath), dir = path.dirname(filePath);
        return {
            name: basename.slice(0, -ext.length),
            dir: dir,
            ext: ext,
            basename: basename
        };
    };
    var path_1 = __webpack_require__(6);
    exports.join = path_1.join, exports.basename = path_1.basename, exports.dirname = path_1.dirname, 
    exports.extname = path_1.extname;
}, function(module, exports) {
    var cachedSetTimeout, cachedClearTimeout, process = module.exports = {};
    function defaultSetTimout() {
        throw new Error("setTimeout has not been defined");
    }
    function defaultClearTimeout() {
        throw new Error("clearTimeout has not been defined");
    }
    function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) return setTimeout(fun, 0);
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) return cachedSetTimeout = setTimeout, 
        setTimeout(fun, 0);
        try {
            return cachedSetTimeout(fun, 0);
        } catch (e) {
            try {
                return cachedSetTimeout.call(null, fun, 0);
            } catch (e) {
                return cachedSetTimeout.call(this, fun, 0);
            }
        }
    }
    !function() {
        try {
            cachedSetTimeout = "function" == typeof setTimeout ? setTimeout : defaultSetTimout;
        } catch (e) {
            cachedSetTimeout = defaultSetTimout;
        }
        try {
            cachedClearTimeout = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout;
        } catch (e) {
            cachedClearTimeout = defaultClearTimeout;
        }
    }();
    var currentQueue, queue = [], draining = !1, queueIndex = -1;
    function cleanUpNextTick() {
        draining && currentQueue && (draining = !1, currentQueue.length ? queue = currentQueue.concat(queue) : queueIndex = -1, 
        queue.length && drainQueue());
    }
    function drainQueue() {
        if (!draining) {
            var timeout = runTimeout(cleanUpNextTick);
            draining = !0;
            for (var len = queue.length; len; ) {
                for (currentQueue = queue, queue = []; ++queueIndex < len; ) currentQueue && currentQueue[queueIndex].run();
                queueIndex = -1, len = queue.length;
            }
            currentQueue = null, draining = !1, function(marker) {
                if (cachedClearTimeout === clearTimeout) return clearTimeout(marker);
                if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) return cachedClearTimeout = clearTimeout, 
                clearTimeout(marker);
                try {
                    cachedClearTimeout(marker);
                } catch (e) {
                    try {
                        return cachedClearTimeout.call(null, marker);
                    } catch (e) {
                        return cachedClearTimeout.call(this, marker);
                    }
                }
            }(timeout);
        }
    }
    function Item(fun, array) {
        this.fun = fun, this.array = array;
    }
    function noop() {}
    process.nextTick = function(fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) args[i - 1] = arguments[i];
        queue.push(new Item(fun, args)), 1 !== queue.length || draining || runTimeout(drainQueue);
    }, Item.prototype.run = function() {
        this.fun.apply(null, this.array);
    }, process.title = "browser", process.browser = !0, process.env = {}, process.argv = [], 
    process.version = "", process.versions = {}, process.on = noop, process.addListener = noop, 
    process.once = noop, process.off = noop, process.removeListener = noop, process.removeAllListeners = noop, 
    process.emit = noop, process.prependListener = noop, process.prependOnceListener = noop, 
    process.listeners = function(name) {
        return [];
    }, process.binding = function(name) {
        throw new Error("process.binding is not supported");
    }, process.cwd = function() {
        return "/";
    }, process.chdir = function(dir) {
        throw new Error("process.chdir is not supported");
    }, process.umask = function() {
        return 0;
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var write_1 = __webpack_require__(1), getArtboardSize_1 = __webpack_require__(7), resizeScale_1 = __webpack_require__(16);
    exports.default = function(resolution) {
        var artboardSize = getArtboardSize_1.default(), oldResolution = artboardSize.width * artboardSize.height, newResolution = 1e6 * resolution, scale = Math.ceil(100 * Math.sqrt(newResolution / oldResolution));
        write_1.write("Resizing from resolution " + oldResolution / 1e6 + " to resolution " + newResolution / 1e6 + ". Scale factor: " + scale), 
        resizeScale_1.default(scale);
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var doAction_1 = __webpack_require__(17), getArtboardSize_1 = __webpack_require__(7), menu_1 = __webpack_require__(18), withAction_1 = __webpack_require__(19), write_1 = __webpack_require__(1);
    exports.default = function(scaleW, scaleH) {
        scaleH = scaleH || scaleW, menu_1.callMenu("unlockAll"), menu_1.callMenu("selectall");
        var artboardSize = getArtboardSize_1.default(), newWidth = artboardSize.width * scaleW / 100, newHeight = artboardSize.height * scaleH / 100;
        write_1.write("Resizing to [" + newWidth + "x" + newHeight + "]"), withAction_1.default(__webpack_require__(23), {
            width: newWidth.toFixed(1),
            height: newHeight.toFixed(1)
        }, function(act) {
            doAction_1.default(act);
        }), app.activeDocument.fitArtboardToSelectedArt(app.activeDocument.artboards.getActiveArtboardIndex());
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var write_1 = __webpack_require__(1);
    exports.default = function(action, name) {
        for (var _i = 0, actions_1 = name ? [ name ] : action.actions; _i < actions_1.length; _i++) {
            var act = actions_1[_i];
            write_1.write("doAction: [" + action.setName + "->" + action.setName + "]"), app.doScript(act, action.setName);
        }
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.callMenu = function(menuCommand) {
        try {
            app.executeMenuCommand(menuCommand);
        } catch (e) {
            if (1200 !== e.number) throw e;
        }
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    var __assign = this && this.__assign || Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) for (var p in s = arguments[i]) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
        return t;
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var isFunction_1 = __webpack_require__(20), disposeAction_1 = __webpack_require__(21), ensureAction_1 = __webpack_require__(22);
    function withActions(sets, fn) {
        try {
            for (var _i = 0, sets_1 = sets; _i < sets_1.length; _i++) {
                var set = sets_1[_i];
                ensureAction_1.default(set.content);
            }
            fn(sets);
        } finally {
            for (var _a = 0, sets_2 = sets; _a < sets_2.length; _a++) {
                set = sets_2[_a];
                disposeAction_1.default(set.setName);
            }
        }
    }
    exports.withActions = withActions, exports.default = function(actionDef, params, fn) {
        isFunction_1.default(params) && (fn = params, params = {}), withActions([ __assign({}, actionDef, {
            content: function(content, params) {
                return params = params || {}, content.replace(/<%=\s*([^} ]*)\s*%>/gi, function(substr, key) {
                    if (!params[key]) throw new Error("Param " + key + " does not exists");
                    return params[key];
                });
            }(actionDef.content, params)
        }) ], function(acts) {
            fn(acts[0]);
        });
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(functionToCheck) {
        return functionToCheck && "[object Function]" === {}.toString.call(functionToCheck);
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(actionSetName) {
        try {
            app.unloadAction(actionSetName, "");
        } catch (e) {}
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(actionContent) {
        var scriptDir = new File($.fileName).path, actionFile = new File(scriptDir + "/temp.aia");
        actionFile.open("w", void 0, void 0), actionFile.encoding = "UTF-8", actionFile.lineFeed = "Unix", 
        actionFile.writeln(actionContent), actionFile.close(), app.loadAction(actionFile), 
        actionFile.remove();
    };
}, function(module, exports) {
    module.exports = {
        setName: "__resize",
        actions: [ "resize" ],
        content: "/version 3\r\n/name [ 8\r\n\t5f5f726573697a65\r\n]\r\n/isOpen 1\r\n/actionCount 1\r\n/action-1 {\r\n\t/name [ 6\r\n\t\t726573697a65\r\n\t]\r\n\t/keyIndex 0\r\n\t/colorIndex 0\r\n\t/isOpen 1\r\n\t/eventCount 2\r\n\t/event-1 {\r\n\t\t/useRulersIn1stQuadrant 0\r\n\t\t/internalName (ai_plugin_transformPalette)\r\n\t\t/localizedName [ 15\r\n\t\t\t5472616e73666f726d2050616e656c\r\n\t\t]\r\n\t\t/isOpen 0\r\n\t\t/isOn 1\r\n\t\t/hasDialog 0\r\n\t\t/parameterCount 2\r\n\t\t/parameter-1 {\r\n\t\t\t/key 1954115685\r\n\t\t\t/showInPalette 4294967295\r\n\t\t\t/type (enumerated)\r\n\t\t\t/name [ 15\r\n\t\t\t\t5363616c6520776964746820746f3a\r\n\t\t\t]\r\n\t\t\t/value 2\r\n\t\t}\r\n\t\t/parameter-2 {\r\n\t\t\t/key 1986096245\r\n\t\t\t/showInPalette 4294967295\r\n\t\t\t/type (unit real)\r\n\t\t\t/value <%= width %>\r\n\t\t\t/unit 592476268\r\n\t\t}\r\n\t}\r\n\t/event-2 {\r\n\t\t/useRulersIn1stQuadrant 0\r\n\t\t/internalName (ai_plugin_transformPalette)\r\n\t\t/localizedName [ 15\r\n\t\t\t5472616e73666f726d2050616e656c\r\n\t\t]\r\n\t\t/isOpen 0\r\n\t\t/isOn 1\r\n\t\t/hasDialog 0\r\n\t\t/parameterCount 2\r\n\t\t/parameter-1 {\r\n\t\t\t/key 1954115685\r\n\t\t\t/showInPalette 4294967295\r\n\t\t\t/type (enumerated)\r\n\t\t\t/name [ 16\r\n\t\t\t\t5363616c652068656967687420746f3a\r\n\t\t\t]\r\n\t\t\t/value 3\r\n\t\t}\r\n\t\t/parameter-2 {\r\n\t\t\t/key 1986096245\r\n\t\t\t/showInPalette 4294967295\r\n\t\t\t/type (unit real)\r\n\t\t\t/value <%= height %>\r\n\t\t\t/unit 592476268\r\n\t\t}\r\n\t}\r\n}\r\n"
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    var __assign = this && this.__assign || Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) for (var p in s = arguments[i]) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
        return t;
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var translation_1 = __webpack_require__(2), Button_1 = __webpack_require__(8), Group_1 = __webpack_require__(4), Dialog_1 = __webpack_require__(25), Progressbar_1 = __webpack_require__(26), DirectorySelectInOut_1 = __webpack_require__(27), strings = translation_1.tranEnRu({
        cancel: [ "Cancel", "Отмена" ],
        canceling: [ "Canceling", "Отменяю" ],
        start: [ "Start", "Запустить" ],
        of: [ "of", "из" ],
        done: [ "Done", "Готово" ],
        processing: [ "Processing", "Обрабатываю" ],
        processFiles: [ "Process Files", "Обработка файлов" ],
        operationCanceled: [ "Operation Canceled", "Операция отменена" ]
    }), FileProcessor = function() {
        function FileProcessor(opts) {
            this.opts = opts, this.opts = __assign({
                title: strings.processFiles
            }, opts), this.dlg = new Dialog_1.Dialog(this.opts.title), this.init(), this.dlg.show();
        }
        return FileProcessor.prototype.onCanceled = function() {}, FileProcessor.prototype.onProcess = function(file) {}, 
        FileProcessor.prototype.onComplete = function() {}, FileProcessor.prototype.onInit = function() {}, 
        FileProcessor.prototype.processFiles = function(files) {
            for (var index = 0, total = files.length, _i = 0, files_1 = files; _i < files_1.length; _i++) {
                var filePath = files_1[_i];
                if (this.stopSignal) throw this.stopSignal;
                this.checkStop(), index++, this.currentStatus = strings.processing + " " + index + " " + strings.of + " " + total + " [" + filePath.match(/[^\/]*$/g)[0] + "].", 
                this.progBar.setLabel(this.currentStatus), this.progBar.setValue(index / total * 100), 
                this.dlg.update(), this.onProcess(filePath);
            }
        }, FileProcessor.prototype.setStatus = function(info) {
            this.dlg.update(), this.checkStop(), this.progBar.setLabel(this.currentStatus + (info ? " " + info : ""));
        }, FileProcessor.prototype.init = function() {
            var _this = this;
            this.srcSelect = this.dlg.add(new DirectorySelectInOut_1.DirectorySelectInOut()), 
            this.onInit(), this.progBar = this.dlg.add(new Progressbar_1.Progressbar()), this.progBar.inner.alignment = "left", 
            this.progBar.label.inner.alignment = "left", this.progBar.setSize(530, 10);
            var btnGroup = this.dlg.add(new Group_1.Group());
            this.btnCancel = btnGroup.add(new Button_1.Button(strings.cancel)), this.btnStart = btnGroup.add(new Button_1.Button(strings.start)), 
            this.btnCancel.onClick = function() {
                _this.isRunning ? (_this.btnCancel.setValue(strings.canceling + "..."), _this.stopSignal = new Error(strings.operationCanceled)) : (_this.onCanceled(), 
                _this.dlg.close());
            }, this.btnStart.onClick = function() {
                if (!_this.isRunning) try {
                    _this.isRunning = !0;
                    var _a = _this.srcSelect.getValue(), srcDir = _a.srcDir, inputFiles = (_a.destDir, 
                    new Folder(srcDir).getFiles(/\.(eps|ai)$/i));
                    if (0 === inputFiles.length) throw new Error("No eps or ai files in dir: [" + srcDir + "]");
                    _this.processFiles(inputFiles.map(function(f) {
                        return f.absoluteURI;
                    })), _this.progBar.setLabel(strings.done);
                } catch (e) {
                    alert(e);
                } finally {
                    _this.isRunning = !1, _this.stopSignal = null, _this.onComplete(), _this.dlg.close();
                }
            };
        }, FileProcessor.prototype.checkStop = function() {
            if ($.sleep(50), this.stopSignal) throw this.stopSignal;
        }, FileProcessor;
    }();
    exports.FileProcessor = FileProcessor;
}, function(module, exports, __webpack_require__) {
    "use strict";
    var extendStatics, __extends = this && this.__extends || (extendStatics = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
    }, function(d, b) {
        function __() {
            this.constructor = d;
        }
        extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
        new __());
    });
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var Dialog = function(_super) {
        function Dialog(title) {
            var _this = _super.call(this, "dialog") || this;
            return _this.title = title, _this.inner = new Window(_this.type, title), _this;
        }
        return __extends(Dialog, _super), Dialog.prototype.mountChild = function(component) {
            return (component = _super.prototype.mountChild.call(this, component)).type && (component.inner = this.inner.add(component.type, void 0, "")), 
            component;
        }, Dialog.prototype.show = function() {
            this.inner.show();
        }, Dialog.prototype.close = function() {
            this.inner.close();
        }, Dialog.prototype.update = function() {
            this.inner.update();
        }, Dialog;
    }(__webpack_require__(0).CompositeComponent);
    exports.Dialog = Dialog;
}, function(module, exports, __webpack_require__) {
    "use strict";
    var extendStatics, __extends = this && this.__extends || (extendStatics = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
    }, function(d, b) {
        function __() {
            this.constructor = d;
        }
        extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
        new __());
    });
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var Component_1 = __webpack_require__(0), StaticText_1 = __webpack_require__(5), Progressbar = function(_super) {
        function Progressbar() {
            return _super.call(this, "progressbar") || this;
        }
        return __extends(Progressbar, _super), Progressbar.prototype.init = function() {
            _super.prototype.init.call(this), this.inner.minvalue = 0, this.inner.maxvalue = 100, 
            this.label = this.parent.add(new StaticText_1.StaticText("")), this.label.setSize(400, 20), 
            this.setSize(400, 10);
        }, Progressbar.prototype.getValue = function() {
            return this.inner.value;
        }, Progressbar.prototype.setValue = function(val) {
            this.inner.value = val;
        }, Progressbar.prototype.getLabel = function() {
            return this.label.getValue();
        }, Progressbar.prototype.setLabel = function(val) {
            this.label.setValue(val);
        }, Progressbar;
    }(Component_1.Component);
    exports.Progressbar = Progressbar;
}, function(module, exports, __webpack_require__) {
    "use strict";
    var extendStatics, __extends = this && this.__extends || (extendStatics = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
    }, function(d, b) {
        function __() {
            this.constructor = d;
        }
        extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
        new __());
    });
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var translation_1 = __webpack_require__(2), Component_1 = __webpack_require__(0), DirectorySelect_1 = __webpack_require__(28), strings = translation_1.tranEnRu({
        sourceDirectory: [ "Source directory:", "Откуда:" ],
        destinationDirectory: [ "Destination directory:", "Куда:" ]
    }), DirectorySelectInOut = function(_super) {
        function DirectorySelectInOut() {
            return _super.call(this, "") || this;
        }
        return __extends(DirectorySelectInOut, _super), DirectorySelectInOut.prototype.init = function() {
            var _this = this;
            _super.prototype.init.call(this), this.srcSelect = this.parent.add(new DirectorySelect_1.DirectorySelect(strings.sourceDirectory)), 
            this.destSelect = this.parent.add(new DirectorySelect_1.DirectorySelect(strings.destinationDirectory)), 
            this.srcSelect.onChange = function(newPath) {
                _this.destSelect.setValue(newPath), _this.debug("changed"), _this.onChange && _this.onChange();
            };
        }, DirectorySelectInOut.prototype.getValue = function() {
            return {
                srcDir: this.srcSelect.getValue(),
                destDir: this.destSelect.getValue()
            };
        }, DirectorySelectInOut.prototype.setValue = function(val) {
            this.srcSelect.setValue(val.srcDir), this.destSelect.setValue(val.destDir);
        }, DirectorySelectInOut;
    }(Component_1.Component);
    exports.DirectorySelectInOut = DirectorySelectInOut;
}, function(module, exports, __webpack_require__) {
    "use strict";
    var extendStatics, __extends = this && this.__extends || (extendStatics = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
    }, function(d, b) {
        function __() {
            this.constructor = d;
        }
        extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
        new __());
    });
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var DirectorySelect = function(_super) {
        function DirectorySelect(label, basePath) {
            return void 0 === basePath && (basePath = "~/Desktop"), _super.call(this, label, basePath) || this;
        }
        return __extends(DirectorySelect, _super), DirectorySelect.prototype.select = function() {
            var newPath = Folder.selectDialog(this.label);
            return newPath ? newPath.toString() : "";
        }, DirectorySelect;
    }(__webpack_require__(29).SelectDialog);
    exports.DirectorySelect = DirectorySelect;
}, function(module, exports, __webpack_require__) {
    "use strict";
    var extendStatics, __extends = this && this.__extends || (extendStatics = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
    }, function(d, b) {
        function __() {
            this.constructor = d;
        }
        extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
        new __());
    });
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var translation_1 = __webpack_require__(2), Button_1 = __webpack_require__(8), EditText_1 = __webpack_require__(30), Group_1 = __webpack_require__(4), StaticText_1 = __webpack_require__(5), strings = translation_1.tranEnRu({
        choose: [ "Choose...", "Выбрать..." ]
    }), SelectDialog = function(_super) {
        function SelectDialog(label, basePath) {
            void 0 === basePath && (basePath = "~/Desktop");
            var _this = _super.call(this) || this;
            return _this.label = label, _this.basePath = basePath, _this;
        }
        return __extends(SelectDialog, _super), SelectDialog.prototype.init = function() {
            var _this = this;
            _super.prototype.init.call(this), this.text = this.add(new StaticText_1.StaticText(this.label)), 
            this.text.setSize(130, 20), this.input = this.add(new EditText_1.EditText(this.basePath)), 
            this.btn = this.add(new Button_1.Button(strings.choose)), this.btn.onClick = function() {
                var selected = _this.select();
                selected && (_this.setValue(selected), _this.debug("changed"), _this.onChange && _this.onChange(selected));
            };
        }, SelectDialog.prototype.getValue = function() {
            return this.input.getValue();
        }, SelectDialog.prototype.setValue = function(val) {
            this.input.setValue(val);
        }, SelectDialog;
    }(Group_1.Group);
    exports.SelectDialog = SelectDialog;
}, function(module, exports, __webpack_require__) {
    "use strict";
    var extendStatics, __extends = this && this.__extends || (extendStatics = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
    }, function(d, b) {
        function __() {
            this.constructor = d;
        }
        extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
        new __());
    });
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var EditText = function(_super) {
        function EditText(defaultValue) {
            var _this = _super.call(this, "edittext") || this;
            return _this.defaultValue = defaultValue, _this;
        }
        return __extends(EditText, _super), EditText.prototype.init = function() {
            var _this = this;
            _super.prototype.init.call(this), this.setValue(this.defaultValue), this.inner.size = [ 300, 20 ], 
            this.inner.onChanging = function() {
                _this.onChanging && _this.onChanging();
            };
        }, EditText.prototype.getValue = function() {
            return this.inner.text;
        }, EditText.prototype.setValue = function(val) {
            this.inner.text = val;
        }, EditText;
    }(__webpack_require__(0).Component);
    exports.EditText = EditText;
}, function(module, exports, __webpack_require__) {
    "use strict";
    var extendStatics, __extends = this && this.__extends || (extendStatics = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
    }, function(d, b) {
        function __() {
            this.constructor = d;
        }
        extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
        new __());
    });
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var Slider = function(_super) {
        function Slider(opts) {
            var _this = _super.call(this, "slider") || this;
            return _this.opts = opts, _this;
        }
        return __extends(Slider, _super), Slider.prototype.init = function() {
            var _this = this;
            _super.prototype.init.call(this), this.inner.minvalue = this.opts.min, this.inner.maxvalue = this.opts.max, 
            this.inner.value = this.opts.value, this.inner.onChanging = function() {
                _this.inner.value = Math.round(_this.inner.value / _this.opts.step) * _this.opts.step, 
                _this.onChanging && _this.onChanging();
            };
        }, Slider.prototype.getValue = function() {
            return this.inner.value;
        }, Slider.prototype.setValue = function(val) {
            this.inner.value = val;
        }, Slider;
    }(__webpack_require__(0).Component);
    exports.Slider = Slider;
} ]);
					} catch (e) {
						alert(e.message);
						return;
					}
				})();
			