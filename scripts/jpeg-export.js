Array.prototype.every||(Array.prototype.every=function(e,r){var t,n;if(void 0===this||null===this)throw new TypeError("Array.prototype.every called on null or undefined");var o=Object(this),i=o.length>>>0;if("Function"!==e.__class__)throw new TypeError(e+" is not a function");for(t=arguments.length>1?r:void 0,n=0;n<i;){var c;if(n in o)if(c=o[n],!e.call(t,c,n,o))return!1;n++}return!0}),Array.prototype.filter||(Array.prototype.filter=function(e,r){if(void 0===this||null===this)throw new TypeError("Array.prototype.filter called on null or undefined");var t=Object(this),n=t.length>>>0;if("Function"!==e.__class__)throw new TypeError(e+" is not a function");for(var o=[],i=arguments.length>1?r:void 0,c=0;c<n;c++)if(c in t){var a=t[c];e.call(i,a,c,t)&&o.push(a)}return o}),Array.prototype.forEach||(Array.prototype.forEach=function(e,r){if(void 0===this||null===this)throw new TypeError("Array.prototype.forEach called on null or undefined");var t=Object(this),n=t.length>>>0;if("Function"!==e.__class__)throw new TypeError(e+" is not a function");for(var o=arguments.length>1?r:void 0,i=0;i<n;i++){var c;i in t&&(c=t[i],e.call(o,c,i,t))}}),Array.prototype.indexOf||(Array.prototype.indexOf=function(e,r){if(void 0===this||null===this)throw new TypeError("Array.prototype.indexOf called on null or undefined");var t,n=Object(this),o=n.length>>>0;if(0===o)return-1;var i=+r||0;if(Math.abs(i)===1/0&&(i=0),i>=o)return-1;for(t=Math.max(i>=0?i:o-Math.abs(i),0);t<o;){if(t in n&&n[t]===e)return t;t++}return-1}),Array.isArray||(Array.isArray=function(e){return void 0!==e&&null!==e&&"Array"===e.__class__}),Array.prototype.lastIndexOf||(Array.prototype.lastIndexOf=function(e,r){if(void 0===this||null===this)throw new TypeError("Array.prototype.lastIndexOf called on null or undefined");var t,n,o=Object(this),i=o.length>>>0;if(0===i)return-1;for(t=i-1,arguments.length>1&&((t=Number(arguments[1]))!=t?t=0:0!=t&&t!=1/0&&t!=-1/0&&(t=(t>0||-1)*Math.floor(Math.abs(t)))),n=t>=0?Math.min(t,i-1):i-Math.abs(t);n>=0;n--)if(n in o&&o[n]===e)return n;return-1}),Array.prototype.map||(Array.prototype.map=function(e,r){var t,n;if(void 0===this||null===this)throw new TypeError("Array.prototype.map called on null or undefined");var o=Object(this),i=o.length>>>0;if("Function"!==e.__class__)throw new TypeError(e+" is not a function");t=arguments.length>1?r:void 0,n=new Array(i);for(var c=0;c<i;c++){var a,l;c in o&&(a=o[c],l=e.call(t,a,c,o),n[c]=l)}return n}),Array.prototype.reduce||(Array.prototype.reduce=function(e,r){if(void 0===this||null===this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("Function"!==e.__class__)throw new TypeError(e+" is not a function");var t,n=Object(this),o=n.length>>>0,i=0;if(arguments.length>1)t=r;else{for(;i<o&&!(i in n);)i++;if(i>=o)throw new TypeError("Reduce of empty array with no initial value");t=n[i++]}for(;i<o;i++)i in n&&(t=e(t,n[i],i,n));return t}),Array.prototype.reduceRight||(Array.prototype.reduceRight=function(e,r){if(void 0===this||null===this)throw new TypeError("Array.prototype.reduceRight called on null or undefined");if("Function"!==e.__class__)throw new TypeError(e+" is not a function");var t,n=Object(this),o=(n.length>>>0)-1;if(arguments.length>1)t=r;else{for(;o>=0&&!(o in n);)o--;if(o<0)throw new TypeError("Reduce of empty array with no initial value");t=n[o--]}for(;o>=0;o--)o in n&&(t=e(t,n[o],o,n));return t}),Array.prototype.some||(Array.prototype.some=function(e,r){if(void 0===this||null===this)throw new TypeError("Array.prototype.some called on null or undefined");if("Function"!==e.__class__)throw new TypeError(e+" is not a function");for(var t=Object(this),n=t.length>>>0,o=arguments.length>1?r:void 0,i=0;i<n;i++)if(i in t&&e.call(o,t[i],i,t))return!0;return!1}),Function.prototype.bind||(Function.prototype.bind=function(e){if("Function"!==this.__class__)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var r=Array.prototype.slice.call(arguments,1),t=this,n=function(){},o=function(){return t.apply(this instanceof n?this:e,r.concat(Array.prototype.slice.call(arguments)))};return this.prototype&&(n.prototype=this.prototype),o.prototype=new n,o}),String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}),Object.create||(Object.create=function(){function e(){}var r=Object.prototype.hasOwnProperty;return function(t){if(Object(t)!==t&&null!==t)throw TypeError("Object prototype may only be an Object or null");e.prototype=t;var n=new e;if(e.prototype=null,arguments.length>1){var o=Object(arguments[1]);for(var i in o)if(r.call(o,i)){var c=o[i];if(Object(c)!==c)throw TypeError(i+"must be an object");if("get"in c||"set"in c)throw new TypeError("getters & setters can not be defined on this javascript engine");"value"in c&&(n[i]=o[i])}}return n}}()),Object.defineProperties||(Object.defineProperties=function(e,r){function t(e,r){return Object.prototype.hasOwnProperty.call(e,r)}function n(e){if(Object(e)!==e)throw new TypeError("Descriptor can only be an Object.");var r={};if(t(e,"enumerable")&&(r.enumerable=!!e.enumerable),t(e,"configurable")&&(r.configurable=!!e.configurable),t(e,"value")&&(r.value=e.value),t(e,"writable")&&(r.writable=!!e.writable),t(e,"get"))throw new TypeError("getters & setters can not be defined on this javascript engine");if(t(e,"set"))throw new TypeError("getters & setters can not be defined on this javascript engine");return r}if(Object(e)!==e)throw new TypeError("Object.defineProperties can only be called on Objects.");if(Object(r)!==r)throw new TypeError("Properties can only be an Object.");var o=Object(r);for(propName in o)if(hasOwnProperty.call(o,propName)){var i=n(o[propName]);e[propName]=i.value}return e}),Object.defineProperty||(Object.defineProperty=function(e,r,t){if(Object(e)!==e)throw new TypeError("Object.defineProperty can only be called on Objects.");if(Object(t)!==t)throw new TypeError("Property description can only be an Object.");if("get"in t||"set"in t)throw new TypeError("getters & setters can not be defined on this javascript engine");return"value"in t&&(e[r]=t.value),e}),Object.freeze||(Object.freeze=function(e){if(Object(e)!==e)throw new TypeError("Object.freeze can only be called on Objects.");return e}),Object.getOwnPropertyDescriptor||(Object.getOwnPropertyDescriptor=function(e,r){if(Object(e)!==e)throw new TypeError("Object.getOwnPropertyDescriptor can only be called on Objects.");var t;if(!Object.prototype.hasOwnProperty.call(e,r))return t;(t={enumerable:Object.prototype.propertyIsEnumerable.call(e,r),configurable:!0}).value=e[r];var n=e.reflect.find(r).type;return t.writable="readwrite"===n,t}),Object.getOwnPropertyNames||(Object.getOwnPropertyNames=function(e){if(Object(e)!==e)throw new TypeError("Object.getOwnPropertyNames can only be called on Objects.");for(var r=e.reflect.properties,t=e.reflect.methods.concat(r),n=[],o=0;o<t.length;o++)n.push(t[o].name);return n}),Object.getPrototypeOf||(Object.getPrototypeOf=function(e){if(Object(e)!==e)throw new TypeError("Object.getPrototypeOf can only be called on Objects.");return e.__proto__}),Object.isExtensible||(Object.isExtensible=function(e){if(Object(e)!==e)throw new TypeError("Object.isExtensible can only be called on Objects.");return!0}),Object.isFrozen||(Object.isFrozen=function(e){if(Object(e)!==e)throw new TypeError("Object.isFrozen can only be called on Objects.");return!1}),Object.isSealed||(Object.isSealed=function(e){if(Object(e)!==e)throw new TypeError("Object.isSealed can only be called on Objects.");return!1}),Object.keys||(Object.keys=function(){var e=Object.prototype.hasOwnProperty;return function(r){if(Object(r)!==r)throw new TypeError("Object.keys can only be called on Objects.");var t,n=[];for(t in r)e.call(r,t)&&n.push(t);return n}}()),Object.preventExtensions||(Object.preventExtensions=function(e){if(Object(e)!==e)throw new TypeError("Object.preventExtensions can only be called on Objects.");return e}),Object.seal||(Object.seal=function(e){if(Object(e)!==e)throw new TypeError("Object.seal can only be called on Objects.");return e});;
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
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 8);
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
    var write_1 = __webpack_require__(5), Component = function() {
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
        function CompositeComponent(type, initChildren) {
            void 0 === initChildren && (initChildren = []);
            var _this = _super.call(this, type) || this;
            return _this.initChildren = initChildren, _this.children = [], _this;
        }
        return __extends(CompositeComponent, _super), CompositeComponent.prototype.init = function() {
            _super.prototype.init.call(this);
        }, CompositeComponent.prototype.add = function(component) {
            return component.parent = this, this.children.push(component), this.mountChild(component), 
            component.init(), component;
        }, CompositeComponent.prototype.mountChild = function(component) {
            return this.debug("mounting child <" + component.getClassName() + ">"), component;
        }, CompositeComponent.prototype.initializeChildren = function() {
            for (var _i = 0, _a = this.initChildren; _i < _a.length; _i++) {
                var child = _a[_i];
                this.add(child), child instanceof CompositeComponent && child.initializeChildren();
            }
        }, CompositeComponent;
    }(Component);
    exports.CompositeComponent = CompositeComponent;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(path) {
        return new File(path);
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    function translation(en, translations, locale) {
        if (locale = locale || app.locale) for (var _i = 0, translations_1 = translations; _i < translations_1.length; _i++) {
            var trans = translations_1[_i];
            if (0 === locale.indexOf(trans.locale)) return trans.strings;
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
            _super.prototype.init.call(this), this.setValue(this.defaultValue);
        }, StaticText.prototype.getValue = function() {
            return this.inner.text;
        }, StaticText.prototype.setValue = function(val) {
            this.inner.text = val;
        }, StaticText;
    }(__webpack_require__(0).Component);
    exports.StaticText = StaticText;
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
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.write = function(text) {
        $.writeln(text);
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
    var write_1 = __webpack_require__(5), Component = function() {
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
        function CompositeComponent(type, initChildren) {
            void 0 === initChildren && (initChildren = []);
            var _this = _super.call(this, type) || this;
            return _this.initChildren = initChildren, _this.children = [], _this;
        }
        return __extends(CompositeComponent, _super), CompositeComponent.prototype.init = function() {
            _super.prototype.init.call(this);
        }, CompositeComponent.prototype.add = function(component) {
            return component.parent = this, this.children.push(component), this.mountChild(component), 
            component.init(), component;
        }, CompositeComponent.prototype.mountChild = function(component) {
            return this.debug("mounting child <" + component.getClassName() + ">"), component;
        }, CompositeComponent.prototype.initializeChildren = function() {
            for (var _i = 0, _a = this.initChildren; _i < _a.length; _i++) {
                var child = _a[_i];
                this.add(child), child instanceof CompositeComponent && child.initializeChildren();
            }
        }, CompositeComponent;
    }(Component);
    exports.CompositeComponent = CompositeComponent;
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
        function Group(initChildren) {
            return void 0 === initChildren && (initChildren = []), _super.call(this, "group", initChildren) || this;
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
    module.exports = __webpack_require__(9);
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var stopSignal, jpeg_1 = __webpack_require__(10), openFile_1 = __webpack_require__(11), resizeToResolution_1 = __webpack_require__(12), toFile_1 = __webpack_require__(1), translation_1 = __webpack_require__(2), Button_1 = __webpack_require__(4), Dialog_1 = __webpack_require__(15), DirectorySelectInOut_1 = __webpack_require__(16), Group_1 = __webpack_require__(7), Progressbar_1 = __webpack_require__(19), Slider_1 = __webpack_require__(20), StaticText_1 = __webpack_require__(3), strings = translation_1.tranEnRu({
        exportJpeg: [ "Export Jpeg", "Экспорт Jpeg" ],
        jpegResoulution: [ "Jpeg Resolution", "Разрешение" ],
        cancel: [ "Cancel", "Отмена" ],
        canceling: [ "Canceling", "Отменяю" ],
        exportt: [ "Export", "Экспорт" ],
        exporting: [ "Exporting", "Экспортирую" ],
        of: [ "of", "из" ],
        operationCanceled: [ "Operation Canceled", "Операция отменена" ],
        done: [ "Done", "Готово" ]
    }), isRunning = !1, checkStop = function() {
        if ($.sleep(50), stopSignal) throw stopSignal;
    }, getJpegFilePath = function(aiEpsPath, outputFolder) {
        return outputFolder + "/" + aiEpsPath.match(/[^\/]*$/g)[0].match(/^[^\.]*/g) + ".jpg";
    }, exportFile = function(file, outputFolder, resolution) {
        var outFile = getJpegFilePath(file, outputFolder), outputFile = toFile_1.default(outFile);
        if (!outputFile.exists) {
            checkStop();
            var doc = openFile_1.default(file);
            return checkStop(), resizeToResolution_1.default(resolution), checkStop(), jpeg_1.default(outFile), 
            checkStop(), doc.close(SaveOptions.DONOTSAVECHANGES), checkStop(), outputFile;
        }
    }, dlg = new Dialog_1.Dialog(strings.exportJpeg), dir = dlg.add(new DirectorySelectInOut_1.DirectorySelectInOut()), group = dlg.add(new Group_1.Group());
    group.add(new StaticText_1.StaticText(strings.jpegResoulution + ":")).setSize(130, 20);
    var slider = group.add(new Slider_1.Slider({
        min: 6,
        max: 64,
        step: 1,
        value: 24
    }));
    slider.setSize(300, 30);
    var resolutionLabel = group.add(new StaticText_1.StaticText("24mp"));
    resolutionLabel.setProps({
        size: [ 60, 20 ]
    }), slider.onChanging = function() {
        return resolutionLabel.setValue(slider.getValue() + "mp");
    };
    var progBar = dlg.add(new Progressbar_1.Progressbar());
    progBar.inner.alignment = "left", progBar.label.inner.alignment = "left", progBar.setSize(530, 10);
    var btnGroup = dlg.add(new Group_1.Group()), btnCancel = btnGroup.add(new Button_1.Button(strings.cancel)), btnExport = btnGroup.add(new Button_1.Button(strings.exportt));
    btnCancel.onClick = function() {
        if (isRunning) return btnCancel.setValue(strings.canceling + "..."), stopSignal = new Error(strings.operationCanceled);
        dlg.close();
    }, btnExport.onClick = function() {
        if (!isRunning) try {
            isRunning = !0;
            var _a = dir.getValue(), srcDir = _a.srcDir, destDir_1 = _a.destDir, inputFiles = new Folder(srcDir).getFiles(/\.(eps|ai)$/i), total = inputFiles.length;
            if (0 === total) throw new Error("No eps or ai files in dir: [" + srcDir + "]");
            for (var jpegFiles_1 = new Folder(destDir_1).getFiles(/\.(jpe?g)$/i).map(function(f) {
                return f.absoluteURI;
            }), notProcessedFiles = inputFiles.filter(function(inpf) {
                return -1 === jpegFiles_1.indexOf(getJpegFilePath(inpf.absoluteURI, destDir_1));
            }), existedFiles = inputFiles.length - notProcessedFiles.length, index = 0, _i = 0, notProcessedFiles_1 = notProcessedFiles; _i < notProcessedFiles_1.length; _i++) {
                var inputFile = notProcessedFiles_1[_i];
                if (stopSignal) throw stopSignal;
                checkStop();
                var fileIndex = ++index + existedFiles;
                progBar.setLabel(strings.exporting + " " + (index + existedFiles) + " " + strings.of + " " + total + ". " + inputFile.absoluteURI.match(/[^\/]*$/g)[0]), 
                progBar.setValue(fileIndex / total * 100), dlg.update();
                var resolution = slider.getValue();
                exportFile(inputFile.absoluteURI, destDir_1, resolution) ? 0 : existedFiles++;
            }
            progBar.setLabel(strings.done);
        } catch (e) {
            alert(e);
        } finally {
            dlg.close(), isRunning = !1, stopSignal = null;
        }
    }, dlg.show();
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var toFile_1 = __webpack_require__(1);
    exports.default = function(file) {
        var jpegOpts = new ExportOptionsJPEG();
        jpegOpts.antiAliasing = !0, jpegOpts.artBoardClipping = !0, jpegOpts.qualitySetting = 100, 
        jpegOpts.horizontalScale = 100, jpegOpts.artBoardClipping = !0, jpegOpts.verticalScale = 100, 
        app.activeDocument.exportFile(toFile_1.default(file), ExportType.JPEG, jpegOpts);
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var toFile_1 = __webpack_require__(1);
    exports.default = function(file) {
        try {
            return app.open(toFile_1.default(file));
        } catch (e) {
            throw new Error("Can't open file: " + file + ". Error: " + e);
        }
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var getArtboardSize_1 = __webpack_require__(13), resizeScale_1 = __webpack_require__(14);
    exports.default = function(resolution) {
        var artboardSize = getArtboardSize_1.default(), oldResolution = artboardSize.width * artboardSize.height, newResolution = 1e6 * resolution, scale = Math.ceil(100 * Math.sqrt(newResolution / oldResolution));
        resizeScale_1.default(scale);
    };
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
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(scaleW, scaleH) {
        app.executeMenuCommand("unlockAll"), app.executeMenuCommand("selectall"), app.executeMenuCommand("group"), 
        scaleH = scaleH || scaleW, app.activeDocument.activeLayer.groupItems[0].resize(scaleW, scaleH, void 0, void 0, void 0, void 0, scaleW, Transformation.TOPLEFT), 
        app.executeMenuCommand("ungroup");
        var artboard = app.activeDocument.artboards[app.activeDocument.artboards.getActiveArtboardIndex()], _a = artboard.artboardRect, left = _a[0], top = _a[1], width = _a[2], height = _a[3], _b = [ (width - left) * (scaleW / 100 - 1), (height - top) * (scaleH / 100 - 1) ], newRect = [ left, top, width + _b[0], height + _b[1] ];
        artboard.artboardRect = newRect;
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
    var Dialog = function(_super) {
        function Dialog(title, initChildren) {
            void 0 === initChildren && (initChildren = []);
            var _this = _super.call(this, "dialog", initChildren) || this;
            return _this.title = title, _this.inner = new Window(_this.type, title), _this.initializeChildren(), 
            _this;
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
    }(__webpack_require__(6).CompositeComponent);
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
    var translation_1 = __webpack_require__(2), Component_1 = __webpack_require__(6), DirectorySelect_1 = __webpack_require__(17), strings = translation_1.tranEnRu({
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
    var translation_1 = __webpack_require__(2), Button_1 = __webpack_require__(4), EditText_1 = __webpack_require__(18), Group_1 = __webpack_require__(7), StaticText_1 = __webpack_require__(3), strings = translation_1.tranEnRu({
        choose: [ "Choose...", "Выбрать..." ]
    }), DirectorySelect = function(_super) {
        function DirectorySelect(label, basePath) {
            void 0 === basePath && (basePath = "~/Desktop");
            var _this = _super.call(this) || this;
            return _this.label = label, _this.basePath = basePath, _this;
        }
        return __extends(DirectorySelect, _super), DirectorySelect.prototype.init = function() {
            var _this = this;
            _super.prototype.init.call(this), this.text = this.add(new StaticText_1.StaticText(this.label)), 
            this.text.setSize(130, 20), this.input = this.add(new EditText_1.EditText(this.basePath)), 
            this.btn = this.add(new Button_1.Button(strings.choose)), this.btn.onClick = function() {
                var newPath = Folder.selectDialog(_this.label);
                newPath && (_this.setValue(newPath.toString()), _this.debug("changed"), _this.onChange && _this.onChange(newPath.toString()));
            };
        }, DirectorySelect.prototype.getValue = function() {
            return this.input.getValue();
        }, DirectorySelect.prototype.setValue = function(val) {
            this.input.setValue(val);
        }, DirectorySelect;
    }(Group_1.Group);
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
    var component_1 = __webpack_require__(0), StaticText_1 = __webpack_require__(3), Progressbar = function(_super) {
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
    }(component_1.Component);
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