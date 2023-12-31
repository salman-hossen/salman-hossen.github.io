jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(t, e, i, n, s) {
            return jQuery.easing[jQuery.easing.def](t, e, i, n, s)
        },
        easeInQuad: function(t, e, i, n, s) {
            return n * (e /= s) * e + i
        },
        easeOutQuad: function(t, e, i, n, s) {
            return -n * (e /= s) * (e - 2) + i
        },
        easeInOutQuad: function(t, e, i, n, s) {
            return (e /= s / 2) < 1 ? n / 2 * e * e + i : -n / 2 * (--e * (e - 2) - 1) + i
        },
        easeInCubic: function(t, e, i, n, s) {
            return n * (e /= s) * e * e + i
        },
        easeOutCubic: function(t, e, i, n, s) {
            return n * ((e = e / s - 1) * e * e + 1) + i
        },
        easeInOutCubic: function(t, e, i, n, s) {
            return (e /= s / 2) < 1 ? n / 2 * e * e * e + i : n / 2 * ((e -= 2) * e * e + 2) + i
        },
        easeInQuart: function(t, e, i, n, s) {
            return n * (e /= s) * e * e * e + i
        },
        easeOutQuart: function(t, e, i, n, s) {
            return -n * ((e = e / s - 1) * e * e * e - 1) + i
        },
        easeInOutQuart: function(t, e, i, n, s) {
            return (e /= s / 2) < 1 ? n / 2 * e * e * e * e + i : -n / 2 * ((e -= 2) * e * e * e - 2) + i
        },
        easeInQuint: function(t, e, i, n, s) {
            return n * (e /= s) * e * e * e * e + i
        },
        easeOutQuint: function(t, e, i, n, s) {
            return n * ((e = e / s - 1) * e * e * e * e + 1) + i
        },
        easeInOutQuint: function(t, e, i, n, s) {
            return (e /= s / 2) < 1 ? n / 2 * e * e * e * e * e + i : n / 2 * ((e -= 2) * e * e * e * e + 2) + i
        },
        easeInSine: function(t, e, i, n, s) {
            return -n * Math.cos(e / s * (Math.PI / 2)) + n + i
        },
        easeOutSine: function(t, e, i, n, s) {
            return n * Math.sin(e / s * (Math.PI / 2)) + i
        },
        easeInOutSine: function(t, e, i, n, s) {
            return -n / 2 * (Math.cos(Math.PI * e / s) - 1) + i
        },
        easeInExpo: function(t, e, i, n, s) {
            return 0 == e ? i : n * Math.pow(2, 10 * (e / s - 1)) + i
        },
        easeOutExpo: function(t, e, i, n, s) {
            return e == s ? i + n : n * (-Math.pow(2, -10 * e / s) + 1) + i
        },
        easeInOutExpo: function(t, e, i, n, s) {
            return 0 == e ? i : e == s ? i + n : (e /= s / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + i : n / 2 * (-Math.pow(2, -10 * --e) + 2) + i
        },
        easeInCirc: function(t, e, i, n, s) {
            return -n * (Math.sqrt(1 - (e /= s) * e) - 1) + i
        },
        easeOutCirc: function(t, e, i, n, s) {
            return n * Math.sqrt(1 - (e = e / s - 1) * e) + i
        },
        easeInOutCirc: function(t, e, i, n, s) {
            return (e /= s / 2) < 1 ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + i : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i
        },
        easeInElastic: function(t, e, i, n, s) {
            var a = 1.70158,
                o = 0,
                r = n;
            if (0 == e) return i;
            if (1 == (e /= s)) return i + n;
            if (o || (o = .3 * s), r < Math.abs(n)) {
                r = n;
                var a = o / 4
            } else var a = o / (2 * Math.PI) * Math.asin(n / r);
            return -(r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * s - a) * (2 * Math.PI) / o)) + i
        },
        easeOutElastic: function(t, e, i, n, s) {
            var a = 1.70158,
                o = 0,
                r = n;
            if (0 == e) return i;
            if (1 == (e /= s)) return i + n;
            if (o || (o = .3 * s), r < Math.abs(n)) {
                r = n;
                var a = o / 4
            } else var a = o / (2 * Math.PI) * Math.asin(n / r);
            return r * Math.pow(2, -10 * e) * Math.sin((e * s - a) * (2 * Math.PI) / o) + n + i
        },
        easeInOutElastic: function(t, e, i, n, s) {
            var a = 1.70158,
                o = 0,
                r = n;
            if (0 == e) return i;
            if (2 == (e /= s / 2)) return i + n;
            if (o || (o = s * (.3 * 1.5)), r < Math.abs(n)) {
                r = n;
                var a = o / 4
            } else var a = o / (2 * Math.PI) * Math.asin(n / r);
            return 1 > e ? -.5 * (r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * s - a) * (2 * Math.PI) / o)) + i : r * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * s - a) * (2 * Math.PI) / o) * .5 + n + i
        },
        easeInBack: function(t, e, i, n, s, a) {
            return void 0 == a && (a = 1.70158), n * (e /= s) * e * ((a + 1) * e - a) + i
        },
        easeOutBack: function(t, e, i, n, s, a) {
            return void 0 == a && (a = 1.70158), n * ((e = e / s - 1) * e * ((a + 1) * e + a) + 1) + i
        },
        easeInOutBack: function(t, e, i, n, s, a) {
            return void 0 == a && (a = 1.70158), (e /= s / 2) < 1 ? n / 2 * (e * e * (((a *= 1.525) + 1) * e - a)) + i : n / 2 * ((e -= 2) * e * (((a *= 1.525) + 1) * e + a) + 2) + i
        },
        easeInBounce: function(t, e, i, n, s) {
            return n - jQuery.easing.easeOutBounce(t, s - e, 0, n, s) + i
        },
        easeOutBounce: function(t, e, i, n, s) {
            return (e /= s) < 1 / 2.75 ? n * (7.5625 * e * e) + i : 2 / 2.75 > e ? n * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : 2.5 / 2.75 > e ? n * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : n * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i
        },
        easeInOutBounce: function(t, e, i, n, s) {
            return s / 2 > e ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, n, s) + i : .5 * jQuery.easing.easeOutBounce(t, 2 * e - s, 0, n, s) + .5 * n + i
        }
    }),
    function(t) {
        "use strict";
        var e = null,
            i = null,
            n = null;
        ! function() {
            var e = ["webkit", "moz", "o", "ms"],
                i = t.document.createElement("div"),
                n = -1;
            for (n = 0; n < e.length && !t.requestAnimationFrame; n++) t.requestAnimationFrame = t[e[n] + "RequestAnimationFrame"];
            "undefined" == typeof i.nextElementSibling && Object.defineProperty(t.Element.prototype, "nextElementSibling", {
                    get: function() {
                        for (var t = this.nextSibling; t;) {
                            if (1 === t.nodeType) return t;
                            t = t.nextSibling
                        }
                        return null
                    }
                }),
                function(t) {
                    t.matches = t.matches || t.machesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector || t.webkitMatchesSelector || function(t) {
                        return Array.prototype.indexOf.call(this.parentElement.querySelectorAll(t), this) > -1
                    }
                }(t.Element.prototype), Object.keys || (Object.keys = function() {
                    var t = Object.prototype.hasOwnProperty,
                        e = !1,
                        i = [],
                        n = -1;
                    return e = !{
                            toString: null
                        }.propertyIsEnumerable("toString"), i = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], n = i.length,
                        function(s) {
                            var a = [],
                                o = "",
                                r = -1;
                            if ("object" != typeof s && ("function" != typeof s || null === s)) throw new TypeError("Object.keys called on non-object");
                            for (o in s) t.call(s, o) && a.push(o);
                            if (e)
                                for (r = 0; n > r; r++) t.call(s, i[r]) && a.push(i[r]);
                            return a
                        }
                }()), Array.isArray || (Array.isArray = function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                }), "function" != typeof Object.create && (Object.create = function(t) {
                    var e = function() {};
                    return function(i, n) {
                        if (i !== Object(i) && null !== i) throw TypeError("Argument must be an object, or null");
                        e.prototype = i || {};
                        var s = new e;
                        return e.prototype = null, n !== t && Object.defineProperties(s, n), null === i && (s.__proto__ = null), s
                    }
                }()), String.prototype.trim || (String.prototype.trim = function() {
                    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                }), Array.prototype.indexOf || (Array.prototype.indexOf = function(t) {
                    var e, i, n, s;
                    if (null === this) throw new TypeError;
                    if (n = Object(this), s = n.length >>> 0, 0 === s) return -1;
                    if (e = 0, arguments.length > 1 && (e = Number(arguments[1]), e !== e ? e = 0 : 0 !== e && e !== 1 / 0 && e !== -(1 / 0) && (e = (e > 0 || -1) * Math.floor(Math.abs(e)))), e >= s) return -1;
                    for (i = e >= 0 ? e : Math.max(s - Math.abs(e), 0); s > i; i++)
                        if (i in n && n[i] === t) return i;
                    return -1
                }), Function.prototype.bind || (Function.prototype.bind = function(t) {
                    var e, i, n, s;
                    if ("function" != typeof this) throw new TypeError;
                    return e = Array.prototype.slice.call(arguments, 1), i = this, n = function() {}, s = function() {
                        return i.apply(this instanceof n ? this : t, e.concat(Array.prototype.slice.call(arguments)))
                    }, this.prototype && (n.prototype = this.prototype), s.prototype = new n, s
                }), t.Element.prototype.dispatchEvent || (t.Element.prototype.dispatchEvent = function(t) {
                    try {
                        return this.fireEvent("on" + t.type, t)
                    } catch (e) {}
                })
        }(), e = function(n, s, a) {
            var o = null,
                r = !1,
                l = null,
                c = null,
                h = null,
                u = null,
                d = [],
                g = "",
                m = [],
                p = -1;
            if (h = a || t.document, (r = arguments[3]) && (r = "boolean" == typeof r), "string" == typeof n) m = h.querySelectorAll(n);
            else if (n && "object" == typeof n && i.isElement(n, h)) m = [n];
            else {
                if (!n || "object" != typeof n || !n.length) throw new Error(e.messages.errorFactoryInvalidContainer());
                m = n
            }
            if (m.length < 1) throw new Error(e.messages.errorFactoryContainerNotFound());
            for (p = 0;
                (o = m[p]) && (!(p > 0) || r); p++) o.id ? g = o.id : (g = "MixItUp" + i.randomHex(), o.id = g), e.instances[g] instanceof e.Mixer ? (l = e.instances[g], (!s || s && s.debug && s.debug.showWarnings !== !1) && console.warn(e.messages.warningFactoryPreexistingInstance())) : (l = new e.Mixer, l.attach(o, h, g, s), e.instances[g] = l), c = new e.Facade(l), s && s.debug && s.debug.enable ? d.push(l) : d.push(c);
            return u = r ? new e.Collection(d) : d[0]
        }, e.use = function(t) {
            e.Base.prototype.callActions.call(e, "beforeUse", arguments), "function" == typeof t && "mixitup-extension" === t.TYPE ? "undefined" == typeof e.extensions[t.NAME] && (t(e), e.extensions[t.NAME] = t) : t.fn && t.fn.jquery && (e.libraries.$ = t, e.registerJqPlugin(t)), e.Base.prototype.callActions.call(e, "afterUse", arguments)
        }, e.registerJqPlugin = function(t) {
            t.fn.mixItUp = function() {
                var t = arguments[0],
                    i = arguments[1],
                    n = Array.prototype.slice.call(arguments, 1),
                    s = [],
                    a = [];
                return a = this.each(function() {
                    var a = null,
                        o = null;
                    t && "string" == typeof t ? (a = e.instances[this.id], o = a[t].apply(a, n), "undefined" != typeof o && null !== o && "function" != typeof o.then && s.push(o)) : e(this, i)
                }), s.length ? s.length > 1 ? s : s[0] : a
            }
        }, e.instances = {}, e.extensions = {}, e.libraries = {}, i = {
            hasClass: function(t, e) {
                return !!t.className.match(new RegExp("(\\s|^)" + e + "(\\s|$)"))
            },
            addClass: function(t, e) {
                this.hasClass(t, e) || (t.className += t.className ? " " + e : e)
            },
            removeClass: function(t, e) {
                if (this.hasClass(t, e)) {
                    var i = new RegExp("(\\s|^)" + e + "(\\s|$)");
                    t.className = t.className.replace(i, " ").trim()
                }
            },
            extend: function(t, e, i, n) {
                var s = [],
                    a = "",
                    o = -1;
                i = i || !1, n = n || !1;
                try {
                    if (Array.isArray(e))
                        for (o = 0; o < e.length; o++) s.push(o);
                    else e && (s = Object.keys(e));
                    for (o = 0; o < s.length; o++) a = s[o], !i || "object" != typeof e[a] || this.isElement(e[a]) ? t[a] = e[a] : Array.isArray(e[a]) ? (t[a] || (t[a] = []), this.extend(t[a], e[a], i, n)) : (t[a] || (t[a] = {}), this.extend(t[a], e[a], i, n))
                } catch (r) {
                    if (!n) throw r;
                    this.handleExtendError(r, t)
                }
                return t
            },
            handleExtendError: function(t, i) {
                var n = /property "?(\w*)"?[,:] object/i,
                    s = null,
                    a = "",
                    o = "",
                    r = "",
                    l = "",
                    c = "",
                    h = -1,
                    u = -1;
                if (t instanceof TypeError && (s = n.exec(t.message))) {
                    a = s[1];
                    for (c in i) {
                        for (u = 0; u < a.length && a.charAt(u) === c.charAt(u);) u++;
                        u > h && (h = u, l = c)
                    }
                    throw h > 1 && (r = e.messages.errorConfigInvalidPropertySuggestion({
                        probableMatch: l
                    })), o = e.messages.errorConfigInvalidProperty({
                        erroneous: a,
                        suggestion: r
                    }), new TypeError(o)
                }
                throw t
            },
            template: function(t) {
                for (var e = /\${([\w]*)}/g, i = {}, n = null; n = e.exec(t);) i[n[1]] = new RegExp("\\${" + n[1] + "}", "g");
                return function(e) {
                    var n = "",
                        s = t;
                    e = e || {};
                    for (n in i) s = s.replace(i[n], "undefined" != typeof e[n] ? e[n] : "");
                    return s
                }
            },
            on: function(e, i, n, s) {
                e && (e.addEventListener ? e.addEventListener(i, n, s) : e.attachEvent && (e["e" + i + n] = n, e[i + n] = function() {
                    e["e" + i + n](t.event)
                }, e.attachEvent("on" + i, e[i + n])))
            },
            off: function(t, e, i) {
                t && (t.removeEventListener ? t.removeEventListener(e, i, !1) : t.detachEvent && (t.detachEvent("on" + e, t[e + i]), t[e + i] = null))
            },
            getCustomEvent: function(e, i, n) {
                var s = null;
                return n = n || t.document, "function" == typeof t.CustomEvent ? s = new t.CustomEvent(e, {
                    detail: i,
                    bubbles: !0,
                    cancelable: !0
                }) : "function" == typeof n.createEvent ? (s = n.createEvent("CustomEvent"), s.initCustomEvent(e, !0, !0, i)) : (s = n.createEventObject(), s.type = e, s.returnValue = !1, s.cancelBubble = !1, s.detail = i), s
            },
            getOriginalEvent: function(t) {
                return t.touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t
            },
            index: function(t, e) {
                for (var i = 0; null !== (t = t.previousElementSibling);)(!e || t.matches(e)) && ++i;
                return i
            },
            camelCase: function(t) {
                return t.toLowerCase().replace(/([_-][a-z])/g, function(t) {
                    return t.toUpperCase().replace(/[_-]/, "")
                })
            },
            pascalCase: function(t) {
                return (t = this.camelCase(t)).charAt(0).toUpperCase() + t.slice(1)
            },
            dashCase: function(t) {
                return t.replace(/([A-Z])/g, "-$1").replace(/^-/, "").toLowerCase()
            },
            isElement: function(e, i) {
                return i = i || t.document, t.HTMLElement && e instanceof t.HTMLElement ? !0 : i.defaultView && i.defaultView.HTMLElement && e instanceof i.defaultView.HTMLElement ? !0 : null !== e && 1 === e.nodeType && "string" == typeof e.nodeName
            },
            createElement: function(e, i) {
                var n = null,
                    s = null;
                for (i = i || t.document, n = i.createDocumentFragment(), s = i.createElement("div"), s.innerHTML = e; s.firstChild;) n.appendChild(s.firstChild);
                return n
            },
            removeWhitespace: function(t) {
                for (var e; t && "#text" === t.nodeName;) e = t, t = t.previousSibling, e.parentElement && e.parentElement.removeChild(e)
            },
            isEqualArray: function(t, e) {
                var i = t.length;
                if (i !== e.length) return !1;
                for (; i--;)
                    if (t[i] !== e[i]) return !1;
                return !0
            },
            deepEquals: function(t, e) {
                var i;
                if ("object" == typeof t && t && "object" == typeof e && e) {
                    if (Object.keys(t).length !== Object.keys(e).length) return !1;
                    for (i in t)
                        if (!e.hasOwnProperty(i) || !this.deepEquals(t[i], e[i])) return !1
                } else if (t !== e) return !1;
                return !0
            },
            arrayShuffle: function(t) {
                for (var e = t.slice(), i = e.length, n = i, s = -1, a = []; n--;) s = ~~(Math.random() * i), a = e[n], e[n] = e[s], e[s] = a;
                return e
            },
            arrayFromList: function(t) {
                var e, i;
                try {
                    return Array.prototype.slice.call(t)
                } catch (n) {
                    for (e = [], i = 0; i < t.length; i++) e.push(t[i]);
                    return e
                }
            },
            debounce: function(t, e, i) {
                var n;
                return function() {
                    var s = this,
                        a = arguments,
                        o = i && !n,
                        r = null;
                    r = function() {
                        n = null, i || t.apply(s, a)
                    }, clearTimeout(n), n = setTimeout(r, e), o && t.apply(s, a)
                }
            },
            position: function(t) {
                for (var e = 0, i = 0, n = t; t;) e -= t.scrollLeft, i -= t.scrollTop, t === n && (e += t.offsetLeft, i += t.offsetTop, n = t.offsetParent), t = t.parentElement;
                return {
                    x: e,
                    y: i
                }
            },
            getHypotenuse: function(t, e) {
                var i = t.x - e.x,
                    n = t.y - e.y;
                return i = 0 > i ? -1 * i : i, n = 0 > n ? -1 * n : n, Math.sqrt(Math.pow(i, 2) + Math.pow(n, 2))
            },
            getIntersectionRatio: function(t, e) {
                var i = t.width * t.height,
                    n = -1,
                    s = -1,
                    a = -1,
                    o = -1;
                return n = Math.max(0, Math.min(t.left + t.width, e.left + e.width) - Math.max(t.left, e.left)), s = Math.max(0, Math.min(t.top + t.height, e.top + e.height) - Math.max(t.top, e.top)), a = s * n, o = a / i
            },
            closestParent: function(e, i, n, s) {
                var a = e.parentNode;
                if (s = s || t.document, n && e.matches(i)) return e;
                for (; a && a != s.body;) {
                    if (a.matches && a.matches(i)) return a;
                    if (!a.parentNode) return null;
                    a = a.parentNode
                }
                return null
            },
            children: function(e, i, n) {
                var s = [],
                    a = "";
                return n = n || t.doc, e && (e.id || (a = "Temp" + this.randomHexKey(), e.id = a), s = n.querySelectorAll("#" + e.id + " > " + i), a && e.removeAttribute("id")), s
            },
            clean: function(t) {
                var e = [],
                    i = -1;
                for (i = 0; i < t.length; i++) "" !== t[i] && e.push(t[i]);
                return e
            },
            defer: function(i) {
                var n = null,
                    s = null,
                    a = null;
                return s = new this.Deferred, e.features.has.promises ? s.promise = new Promise(function(t, e) {
                    s.resolve = t, s.reject = e
                }) : (a = t.jQuery || i.$) && "function" == typeof a.Deferred ? (n = a.Deferred(), s.promise = n.promise(), s.resolve = n.resolve, s.reject = n.reject) : t.console && console.warn(e.messages.warningNoPromiseImplementation()), s
            },
            all: function(i, n) {
                var s = null;
                return e.features.has.promises ? Promise.all(i) : (s = t.jQuery || n.$) && "function" == typeof s.when ? s.when.apply(s, i).done(function() {
                    return arguments
                }) : (t.console && console.warn(e.messages.warningNoPromiseImplementation()), [])
            },
            getPrefix: function(t, e, n) {
                var s = -1,
                    a = "";
                if (i.dashCase(e) in t.style) return "";
                for (s = 0; a = n[s]; s++)
                    if (a + e in t.style) return a.toLowerCase();
                return "unsupported"
            },
            randomHex: function() {
                return ("00000" + (16777216 * Math.random() << 0).toString(16)).substr(-6).toUpperCase()
            },
            getDocumentState: function(e) {
                return e = "object" == typeof e.body ? e : t.document, {
                    scrollTop: t.pageYOffset,
                    scrollLeft: t.pageXOffset,
                    docHeight: e.documentElement.scrollHeight
                }
            },
            bind: function(t, e) {
                return function() {
                    return e.apply(t, arguments)
                }
            },
            isVisible: function(e) {
                var i = null;
                return e.offsetParent ? !0 : (i = t.getComputedStyle(e), "fixed" === i.position && "hidden" !== i.visibility && "0" !== i.opacity ? !0 : !1)
            },
            seal: function(t) {
                "function" == typeof Object.seal && Object.seal(t)
            },
            freeze: function(t) {
                "function" == typeof Object.freeze && Object.freeze(t)
            },
            compareVersions: function(t, e) {
                var i = t.split("."),
                    n = e.split("."),
                    s = -1,
                    a = -1,
                    o = -1;
                for (o = 0; o < i.length; o++) {
                    if (s = parseInt(i[o].replace(/[^\d.]/g, "")), a = parseInt(n[o].replace(/[^\d.]/g, "") || 0), s > a) return !1;
                    if (a > s) return !0
                }
                return !0
            },
            Deferred: function() {
                this.promise = null, this.resolve = null, this.reject = null, this.id = i.randomHex()
            },
            isEmptyObject: function(t) {
                var e = "";
                if ("function" == typeof Object.keys) return 0 === Object.keys(t).length;
                for (e in t)
                    if (t.hasOwnProperty(e)) return !1;
                return !0
            },
            getClassname: function(t, e, i) {
                var n = "";
                return n += t.block, n.length && (n += t.delineatorElement), n += t["element" + this.pascalCase(e)], i ? (n.length && (n += t.delineatorModifier), n += i) : n
            },
            getProperty: function(t, e) {
                var i = e.split("."),
                    n = null,
                    s = "",
                    a = 0;
                if (!e) return t;
                for (n = function(t) {
                        return t ? t[s] : null
                    }; a < i.length;) s = i[a], t = n(t), a++;
                return "undefined" != typeof t ? t : null
            }
        }, e.h = i, e.Base = function() {}, e.Base.prototype = {
            constructor: e.Base,
            callActions: function(t, e) {
                var n = this,
                    s = n.constructor.actions[t],
                    a = "";
                if (s && !i.isEmptyObject(s))
                    for (a in s) s[a].apply(n, e)
            },
            callFilters: function(t, e, n) {
                var s = this,
                    a = s.constructor.filters[t],
                    o = e,
                    r = "";
                if (!a || i.isEmptyObject(a)) return o;
                n = n || [];
                for (r in a) n = i.arrayFromList(n), n.unshift(o), o = a[r].apply(s, n);
                return o
            }
        }, e.BaseStatic = function() {
            this.actions = {}, this.filters = {}, this.extend = function(t) {
                i.extend(this.prototype, t)
            }, this.registerAction = function(t, e, i) {
                (this.actions[t] = this.actions[t] || {})[e] = i
            }, this.registerFilter = function(t, e, i) {
                (this.filters[t] = this.filters[t] || {})[e] = i
            }
        }, e.Features = function() {
            e.Base.call(this), this.callActions("beforeConstruct"), this.boxSizingPrefix = "", this.transformPrefix = "", this.transitionPrefix = "", this.boxSizingPrefix = "", this.transformProp = "", this.transformRule = "", this.transitionProp = "", this.perspectiveProp = "", this.perspectiveOriginProp = "", this.has = new e.Has, this.canary = null, this.BOX_SIZING_PROP = "boxSizing", this.TRANSITION_PROP = "transition", this.TRANSFORM_PROP = "transform", this.PERSPECTIVE_PROP = "perspective", this.PERSPECTIVE_ORIGIN_PROP = "perspectiveOrigin", this.VENDORS = ["Webkit", "moz", "O", "ms"], this.TWEENABLE = ["opacity", "width", "height", "marginRight", "marginBottom", "x", "y", "scale", "translateX", "translateY", "translateZ", "rotateX", "rotateY", "rotateZ"], this.callActions("afterConstruct")
        }, e.BaseStatic.call(e.Features), e.Features.prototype = Object.create(e.Base.prototype), i.extend(e.Features.prototype, {
            constructor: e.Features,
            init: function() {
                var t = this;
                t.callActions("beforeInit", arguments), t.canary = document.createElement("div"), t.setPrefixes(), t.runTests(), t.callActions("beforeInit", arguments)
            },
            runTests: function() {
                var e = this;
                e.callActions("beforeRunTests", arguments), e.has.promises = "function" == typeof t.Promise, e.has.transitions = "unsupported" !== e.transitionPrefix, e.callActions("afterRunTests", arguments), i.freeze(e.has)
            },
            setPrefixes: function() {
                var t = this;
                t.callActions("beforeSetPrefixes", arguments), t.transitionPrefix = i.getPrefix(t.canary, "Transition", t.VENDORS), t.transformPrefix = i.getPrefix(t.canary, "Transform", t.VENDORS), t.boxSizingPrefix = i.getPrefix(t.canary, "BoxSizing", t.VENDORS), t.boxSizingProp = t.boxSizingPrefix ? t.boxSizingPrefix + i.pascalCase(t.BOX_SIZING_PROP) : t.BOX_SIZING_PROP, t.transitionProp = t.transitionPrefix ? t.transitionPrefix + i.pascalCase(t.TRANSITION_PROP) : t.TRANSITION_PROP, t.transformProp = t.transformPrefix ? t.transformPrefix + i.pascalCase(t.TRANSFORM_PROP) : t.TRANSFORM_PROP, t.transformRule = t.transformPrefix ? "-" + t.transformPrefix + "-" + t.TRANSFORM_PROP : t.TRANSFORM_PROP, t.perspectiveProp = t.transformPrefix ? t.transformPrefix + i.pascalCase(t.PERSPECTIVE_PROP) : t.PERSPECTIVE_PROP, t.perspectiveOriginProp = t.transformPrefix ? t.transformPrefix + i.pascalCase(t.PERSPECTIVE_ORIGIN_PROP) : t.PERSPECTIVE_ORIGIN_PROP, t.callActions("afterSetPrefixes", arguments)
            }
        }), e.Has = function() {
            this.transitions = !1, this.promises = !1, i.seal(this)
        }, e.features = new e.Features, e.features.init(), e.ConfigAnimation = function() {
            e.Base.call(this), this.callActions("beforeConstruct"), this.enable = !0, this.effects = "fade scale", this.effectsIn = "", this.effectsOut = "", this.duration = 600, this.easing = "ease", this.applyPerspective = !0, this.perspectiveDistance = "3000px", this.perspectiveOrigin = "50% 50%", this.queue = !0, this.queueLimit = 3, this.animateResizeContainer = !0, this.animateResizeTargets = !1, this.staggerSequence = null, this.reverseOut = !1, this.nudge = !0, this.clampHeight = !0, this.callActions("afterConstruct"), i.seal(this)
        }, e.BaseStatic.call(e.ConfigAnimation), e.ConfigAnimation.prototype = Object.create(e.Base.prototype), e.ConfigAnimation.prototype.constructor = e.ConfigAnimation, e.ConfigCallbacks = function() {
            e.Base.call(this), this.callActions("beforeConstruct"), this.onMixStart = null, this.onMixBusy = null, this.onMixEnd = null, this.onMixFail = null, this.onMixClick = null, this.callActions("afterConstruct"), i.seal(this)
        }, e.BaseStatic.call(e.ConfigCallbacks), e.ConfigCallbacks.prototype = Object.create(e.Base.prototype), e.ConfigCallbacks.prototype.constructor = e.ConfigCallbacks, e.ConfigControls = function() {
            e.Base.call(this), this.callActions("beforeConstruct"), this.enable = !0, this.live = !1, this.scope = "global", this.toggleLogic = "or", this.toggleDefault = "all", this.callActions("afterConstruct"), i.seal(this)
        }, e.BaseStatic.call(e.ConfigControls), e.ConfigControls.prototype = Object.create(e.Base.prototype), e.ConfigControls.prototype.constructor = e.ConfigControls, e.ConfigClassNames = function() {
            e.Base.call(this), this.callActions("beforeConstruct"), this.block = "mixitup", this.elementContainer = "container", this.elementFilter = "control", this.elementSort = "control", this.elementMultimix = "control", this.elementToggle = "control", this.modifierActive = "active", this.modifierDisabled = "disabled", this.modifierFailed = "failed", this.delineatorElement = "-", this.delineatorModifier = "-", this.callActions("afterConstruct"), i.seal(this)
        }, e.BaseStatic.call(e.ConfigClassNames), e.ConfigClassNames.prototype = Object.create(e.Base.prototype), e.ConfigClassNames.prototype.constructor = e.ConfigClassNames, e.ConfigData = function() {
            e.Base.call(this), this.callActions("beforeConstruct"), this.uidKey = "", this.dirtyCheck = !1, this.callActions("afterConstruct"), i.seal(this)
        }, e.BaseStatic.call(e.ConfigData), e.ConfigData.prototype = Object.create(e.Base.prototype), e.ConfigData.prototype.constructor = e.ConfigData, e.ConfigDebug = function() {
            e.Base.call(this), this.callActions("beforeConstruct"), this.enable = !1, this.showWarnings = !0, this.fauxAsync = !1, this.callActions("afterConstruct"), i.seal(this)
        }, e.BaseStatic.call(e.ConfigDebug), e.ConfigDebug.prototype = Object.create(e.Base.prototype), e.ConfigDebug.prototype.constructor = e.ConfigDebug, e.ConfigLayout = function() {
            e.Base.call(this), this.callActions("beforeConstruct"), this.allowNestedTargets = !0, this.containerClassName = "", this.siblingBefore = null, this.siblingAfter = null, this.callActions("afterConstruct"), i.seal(this)
        }, e.BaseStatic.call(e.ConfigLayout), e.ConfigLayout.prototype = Object.create(e.Base.prototype), e.ConfigLayout.prototype.constructor = e.ConfigLayout, e.ConfigLoad = function() {
            e.Base.call(this), this.callActions("beforeConstruct"), this.filter = "all", this.sort = "default:asc", this.dataset = null, this.callActions("afterConstruct"), i.seal(this)
        }, e.BaseStatic.call(e.ConfigLoad), e.ConfigLoad.prototype = Object.create(e.Base.prototype), e.ConfigLoad.prototype.constructor = e.ConfigLoad, e.ConfigSelectors = function() {
            e.Base.call(this), this.callActions("beforeConstruct"), this.target = ".mix", this.control = "", this.callActions("afterConstruct"), i.seal(this)
        }, e.BaseStatic.call(e.ConfigSelectors), e.ConfigSelectors.prototype = Object.create(e.Base.prototype), e.ConfigSelectors.prototype.constructor = e.ConfigSelectors, e.ConfigRender = function() {
            e.Base.call(this), this.callActions("beforeConstruct"), this.target = null, this.callActions("afterConstruct"), i.seal(this)
        }, e.BaseStatic.call(e.ConfigRender), e.ConfigRender.prototype = Object.create(e.Base.prototype), e.ConfigRender.prototype.constructor = e.ConfigRender, e.ConfigTemplates = function() {
            e.Base.call(this), this.callActions("beforeConstruct"), this.callActions("afterConstruct"), i.seal(this)
        }, e.BaseStatic.call(e.ConfigTemplates), e.ConfigTemplates.prototype = Object.create(e.Base.prototype), e.ConfigTemplates.prototype.constructor = e.ConfigTemplates, e.Config = function() {
            e.Base.call(this), this.callActions("beforeConstruct"), this.animation = new e.ConfigAnimation, this.callbacks = new e.ConfigCallbacks, this.controls = new e.ConfigControls, this.classNames = new e.ConfigClassNames, this.data = new e.ConfigData, this.debug = new e.ConfigDebug, this.layout = new e.ConfigLayout, this.load = new e.ConfigLoad, this.selectors = new e.ConfigSelectors, this.render = new e.ConfigRender, this.templates = new e.ConfigTemplates, this.callActions("afterConstruct"), i.seal(this)
        }, e.BaseStatic.call(e.Config), e.Config.prototype = Object.create(e.Base.prototype), e.Config.prototype.constructor = e.Config, e.MixerDom = function() {
            e.Base.call(this), this.callActions("beforeConstruct"), this.document = null, this.body = null, this.container = null, this.parent = null, this.targets = [], this.callActions("afterConstruct"), i.seal(this)
        }, e.BaseStatic.call(e.MixerDom), e.MixerDom.prototype = Object.create(e.Base.prototype), e.MixerDom.prototype.constructor = e.MixerDom, e.UiClassNames = function() {
            e.Base.call(this), this.callActions("beforeConstruct"), this.base = "", this.active = "", this.disabled = "", this.callActions("afterConstruct"), i.seal(this)
        }, e.BaseStatic.call(e.UiClassNames), e.UiClassNames.prototype = Object.create(e.Base.prototype), e.UiClassNames.prototype.constructor = e.UiClassNames, e.CommandDataset = function() {
            e.Base.call(this), this.callActions("beforeConstruct"), this.dataset = null, this.callActions("afterConstruct"), i.seal(this)
        }, e.BaseStatic.call(e.CommandDataset), e.CommandDataset.prototype = Object.create(e.Base.prototype), e.CommandDataset.prototype.constructor = e.CommandDataset, e.CommandMultimix = function() {
            e.Base.call(this), this.callActions("beforeConstruct"), this.filter = null, this.sort = null, this.insert = null, this.remove = null, this.changeLayout = null, this.callActions("afterConstruct"), i.seal(this)
        }, e.BaseStatic.call(e.CommandMultimix), e.CommandMultimix.prototype = Object.create(e.Base.prototype), e.CommandMultimix.prototype.constructor = e.CommandMultimix, e.CommandFilter = function() {
            e.Base.call(this), this.callActions("beforeConstruct"), this.selector = "", this.collection = null, this.action = "show", this.callActions("afterConstruct"), i.seal(this)
        }, e.BaseStatic.call(e.CommandFilter), e.CommandFilter.prototype = Object.create(e.Base.prototype), e.CommandFilter.prototype.constructor = e.CommandFilter, e.CommandSort = function() {
            e.Base.call(this), this.callActions("beforeConstruct"), this.sortString = "", this.attribute = "", this.order = "asc", this.collection = null, this.next = null, this.callActions("afterConstruct"), i.seal(this)
        }, e.BaseStatic.call(e.CommandSort), e.CommandSort.prototype = Object.create(e.Base.prototype), e.CommandSort.prototype.constructor = e.CommandSort, e.CommandInsert = function() {
            e.Base.call(this), this.callActions("beforeConstruct"), this.index = 0, this.collection = [], this.position = "before", this.sibling = null, this.callActions("afterConstruct"), i.seal(this)
        }, e.BaseStatic.call(e.CommandInsert), e.CommandInsert.prototype = Object.create(e.Base.prototype), e.CommandInsert.prototype.constructor = e.CommandInsert, e.CommandRemove = function() {
            e.Base.call(this), this.callActions("beforeConstruct"), this.targets = [], this.collection = [], this.callActions("afterConstruct"), i.seal(this)
        }, e.BaseStatic.call(e.CommandRemove), e.CommandRemove.prototype = Object.create(e.Base.prototype), e.CommandRemove.prototype.constructor = e.CommandRemove, e.CommandChangeLayout = function() {
            e.Base.call(this), this.callActions("beforeConstruct"), this.containerClassName = "", this.callActions("afterConstruct"), i.seal(this)
        }, e.BaseStatic.call(e.CommandChangeLayout), e.CommandChangeLayout.prototype = Object.create(e.Base.prototype), e.CommandChangeLayout.prototype.constructor = e.CommandChangeLayout, e.ControlDefinition = function(t, n, s, a) {
            e.Base.call(this), this.callActions("beforeConstruct"), this.type = t, this.selector = n, this.live = s || !1, this.parent = a || "", this.callActions("afterConstruct"), i.freeze(this), i.seal(this)
        }, e.BaseStatic.call(e.ControlDefinition), e.ControlDefinition.prototype = Object.create(e.Base.prototype), e.ControlDefinition.prototype.constructor = e.ControlDefinition, e.controlDefinitions = [], e.controlDefinitions.push(new e.ControlDefinition("multimix", "[data-filter][data-sort]")), e.controlDefinitions.push(new e.ControlDefinition("filter", "[data-filter]")), e.controlDefinitions.push(new e.ControlDefinition("sort", "[data-sort]")), e.controlDefinitions.push(new e.ControlDefinition("toggle", "[data-toggle]")), e.Control = function() {
            e.Base.call(this), this.callActions("beforeConstruct"), this.el = null, this.selector = "", this.bound = [], this.pending = -1, this.type = "", this.status = "inactive", this.filter = "", this.sort = "", this.canDisable = !1, this.handler = null, this.classNames = new e.UiClassNames, this.callActions("afterConstruct"), i.seal(this)
        }, e.BaseStatic.call(e.Control), e.Control.prototype = Object.create(e.Base.prototype), i.extend(e.Control.prototype, {
            constructor: e.Control,
            init: function(t, i, n) {
                var s = this;
                if (this.callActions("beforeInit", arguments), s.el = t, s.type = i, s.selector = n, s.selector) s.status = "live";
                else switch (s.canDisable = "boolean" == typeof s.el.disable, s.type) {
                    case "filter":
                        s.filter = s.el.getAttribute("data-filter");
                        break;
                    case "toggle":
                        s.filter = s.el.getAttribute("data-toggle");
                        break;
                    case "sort":
                        s.sort = s.el.getAttribute("data-sort");
                        break;
                    case "multimix":
                        s.filter = s.el.getAttribute("data-filter"), s.sort = s.el.getAttribute("data-sort")
                }
                s.bindClick(), e.controls.push(s), this.callActions("afterInit", arguments)
            },
            isBound: function(t) {
                var e = this,
                    i = !1;
                return this.callActions("beforeIsBound", arguments), i = e.bound.indexOf(t) > -1, e.callFilters("afterIsBound", i, arguments)
            },
            addBinding: function(t) {
                var e = this;
                this.callActions("beforeAddBinding", arguments), e.isBound() || e.bound.push(t), this.callActions("afterAddBinding", arguments)
            },
            removeBinding: function(t) {
                var i = this,
                    n = -1;
                this.callActions("beforeRemoveBinding", arguments), (n = i.bound.indexOf(t)) > -1 && i.bound.splice(n, 1), i.bound.length < 1 && (i.unbindClick(), n = e.controls.indexOf(i), e.controls.splice(n, 1), "active" === i.status && i.renderStatus(i.el, "inactive")), this.callActions("afterRemoveBinding", arguments)
            },
            bindClick: function() {
                var t = this;
                this.callActions("beforeBindClick", arguments), t.handler = function(e) {
                    t.handleClick(e)
                }, i.on(t.el, "click", t.handler), this.callActions("afterBindClick", arguments)
            },
            unbindClick: function() {
                var t = this;
                this.callActions("beforeUnbindClick", arguments), i.off(t.el, "click", t.handler), t.handler = null, this.callActions("afterUnbindClick", arguments)
            },
            handleClick: function(t) {
                var n = this,
                    s = null,
                    a = null,
                    o = !1,
                    r = void 0,
                    l = {},
                    c = null,
                    h = [],
                    u = -1;
                if (this.callActions("beforeHandleClick", arguments), this.pending = 0, a = n.bound[0], s = n.selector ? i.closestParent(t.target, a.config.selectors.control + n.selector, !0, a.dom.document) : n.el, !s) return void n.callActions("afterHandleClick", arguments);
                switch (n.type) {
                    case "filter":
                        l.filter = n.filter || s.getAttribute("data-filter");
                        break;
                    case "sort":
                        l.sort = n.sort || s.getAttribute("data-sort");
                        break;
                    case "multimix":
                        l.filter = n.filter || s.getAttribute("data-filter"), l.sort = n.sort || s.getAttribute("data-sort");
                        break;
                    case "toggle":
                        l.filter = n.filter || s.getAttribute("data-toggle"), o = "live" === n.status ? i.hasClass(s, n.classNames.active) : "active" === n.status
                }
                for (u = 0; u < n.bound.length; u++) c = new e.CommandMultimix, i.extend(c, l), h.push(c);
                for (h = n.callFilters("commandsHandleClick", h, arguments), n.pending = n.bound.length, u = 0; a = n.bound[u]; u++) l = h[u], l && (a.lastClicked || (a.lastClicked = s), e.events.fire("mixClick", a.dom.container, {
                    state: a.state,
                    instance: a,
                    originalEvent: t,
                    control: a.lastClicked
                }, a.dom.document), ("function" != typeof a.config.callbacks.onMixClick || (r = a.config.callbacks.onMixClick.call(a.lastClicked, a.state, t, a), r !== !1)) && ("toggle" === n.type ? o ? a.toggleOff(l.filter) : a.toggleOn(l.filter) : a.multimix(l)));
                this.callActions("afterHandleClick", arguments)
            },
            update: function(t, i) {
                var n = this,
                    s = new e.CommandMultimix;
                n.callActions("beforeUpdate", arguments), n.pending--, n.pending = Math.max(0, n.pending), n.pending > 0 || ("live" === n.status ? n.updateLive(t, i) : (s.sort = n.sort, s.filter = n.filter, n.callFilters("actionsUpdate", s, arguments), n.parseStatusChange(n.el, t, s, i)), n.callActions("afterUpdate", arguments))
            },
            updateLive: function(t, i) {
                var n = this,
                    s = null,
                    a = null,
                    o = null,
                    r = -1;
                if (n.callActions("beforeUpdateLive", arguments), n.el) {
                    for (s = n.el.querySelectorAll(n.selector), r = 0; o = s[r]; r++) {
                        switch (a = new e.CommandMultimix, n.type) {
                            case "filter":
                                a.filter = o.getAttribute("data-filter");
                                break;
                            case "sort":
                                a.sort = o.getAttribute("data-sort");
                                break;
                            case "multimix":
                                a.filter = o.getAttribute("data-filter"), a.sort = o.getAttribute("data-sort");
                                break;
                            case "toggle":
                                a.filter = o.getAttribute("data-toggle")
                        }
                        a = n.callFilters("actionsUpdateLive", a, arguments), n.parseStatusChange(o, t, a, i)
                    }
                    n.callActions("afterUpdateLive", arguments)
                }
            },
            parseStatusChange: function(t, e, i, n) {
                var s = this,
                    a = "",
                    o = "",
                    r = -1;
                switch (s.callActions("beforeParseStatusChange", arguments), s.type) {
                    case "filter":
                        e.filter === i.filter ? s.renderStatus(t, "active") : s.renderStatus(t, "inactive");
                        break;
                    case "multimix":
                        e.sort === i.sort && e.filter === i.filter ? s.renderStatus(t, "active") : s.renderStatus(t, "inactive");
                        break;
                    case "sort":
                        e.sort.match(/:asc/g) && (a = e.sort.replace(/:asc/g, "")), e.sort === i.sort || a === i.sort ? s.renderStatus(t, "active") : s.renderStatus(t, "inactive");
                        break;
                    case "toggle":
                        for (n.length < 1 && s.renderStatus(t, "inactive"), e.filter === i.filter && s.renderStatus(t, "active"), r = 0; r < n.length; r++) {
                            if (o = n[r], o === i.filter) {
                                s.renderStatus(t, "active");
                                break
                            }
                            s.renderStatus(t, "inactive")
                        }
                }
                s.callActions("afterParseStatusChange", arguments)
            },
            renderStatus: function(t, e) {
                var n = this;
                switch (n.callActions("beforeRenderStatus", arguments), e) {
                    case "active":
                        i.addClass(t, n.classNames.active), i.removeClass(t, n.classNames.disabled), n.canDisable && (n.el.disabled = !1);
                        break;
                    case "inactive":
                        i.removeClass(t, n.classNames.active), i.removeClass(t, n.classNames.disabled), n.canDisable && (n.el.disabled = !1);
                        break;
                    case "disabled":
                        n.canDisable && (n.el.disabled = !0), i.addClass(t, n.classNames.disabled), i.removeClass(t, n.classNames.active)
                }
                "live" !== n.status && (n.status = e), n.callActions("afterRenderStatus", arguments)
            }
        }), e.controls = [], e.StyleData = function() {
            e.Base.call(this), this.callActions("beforeConstruct"), this.x = 0, this.y = 0, this.top = 0, this.right = 0, this.bottom = 0, this.left = 0, this.width = 0, this.height = 0, this.marginRight = 0, this.marginBottom = 0,
                this.opacity = 0, this.scale = new e.TransformData, this.translateX = new e.TransformData, this.translateY = new e.TransformData, this.translateZ = new e.TransformData, this.rotateX = new e.TransformData, this.rotateY = new e.TransformData, this.rotateZ = new e.TransformData, this.callActions("afterConstruct"), i.seal(this)
        }, e.BaseStatic.call(e.StyleData), e.StyleData.prototype = Object.create(e.Base.prototype), e.StyleData.prototype.constructor = e.StyleData, e.TransformData = function() {
            e.Base.call(this), this.callActions("beforeConstruct"), this.value = 0, this.unit = "", this.callActions("afterConstruct"), i.seal(this)
        }, e.BaseStatic.call(e.TransformData), e.TransformData.prototype = Object.create(e.Base.prototype), e.TransformData.prototype.constructor = e.TransformData, e.TransformDefaults = function() {
            e.StyleData.apply(this), this.callActions("beforeConstruct"), this.scale.value = .01, this.scale.unit = "", this.translateX.value = 20, this.translateX.unit = "px", this.translateY.value = 20, this.translateY.unit = "px", this.translateZ.value = 20, this.translateZ.unit = "px", this.rotateX.value = 90, this.rotateX.unit = "deg", this.rotateY.value = 90, this.rotateY.unit = "deg", this.rotateX.value = 90, this.rotateX.unit = "deg", this.rotateZ.value = 180, this.rotateZ.unit = "deg", this.callActions("afterConstruct"), i.seal(this)
        }, e.BaseStatic.call(e.TransformDefaults), e.TransformDefaults.prototype = Object.create(e.StyleData.prototype), e.TransformDefaults.prototype.constructor = e.TransformDefaults, e.transformDefaults = new e.TransformDefaults, e.EventDetail = function() {
            this.state = null, this.futureState = null, this.instance = null, this.originalEvent = null
        }, e.Events = function() {
            e.Base.call(this), this.callActions("beforeConstruct"), this.mixStart = null, this.mixBusy = null, this.mixEnd = null, this.mixFail = null, this.mixClick = null, this.callActions("afterConstruct"), i.seal(this)
        }, e.BaseStatic.call(e.Events), e.Events.prototype = Object.create(e.Base.prototype), e.Events.prototype.constructor = e.Events, e.Events.prototype.fire = function(t, n, s, a) {
            var o = this,
                r = null,
                l = new e.EventDetail;
            if (o.callActions("beforeFire", arguments), "undefined" == typeof o[t]) throw new Error('Event type "' + t + '" not found.');
            l.state = new e.State, i.extend(l.state, s.state), s.futureState && (l.futureState = new e.State, i.extend(l.futureState, s.futureState)), l.instance = s.instance, s.originalEvent && (l.originalEvent = s.originalEvent), r = i.getCustomEvent(t, l, a), o.callFilters("eventFire", r, arguments), n.dispatchEvent(r)
        }, e.events = new e.Events, e.QueueItem = function() {
            e.Base.call(this), this.callActions("beforeConstruct"), this.args = [], this.instruction = null, this.triggerElement = null, this.deferred = null, this.isToggling = !1, this.callActions("afterConstruct"), i.seal(this)
        }, e.BaseStatic.call(e.QueueItem), e.QueueItem.prototype = Object.create(e.Base.prototype), e.QueueItem.prototype.constructor = e.QueueItem, e.Mixer = function() {
            e.Base.call(this), this.callActions("beforeConstruct"), this.config = new e.Config, this.id = "", this.isBusy = !1, this.isToggling = !1, this.incPadding = !0, this.controls = [], this.targets = [], this.origOrder = [], this.cache = {}, this.toggleArray = [], this.targetsMoved = 0, this.targetsImmovable = 0, this.targetsBound = 0, this.targetsDone = 0, this.staggerDuration = 0, this.effectsIn = null, this.effectsOut = null, this.transformIn = [], this.transformOut = [], this.queue = [], this.state = null, this.lastOperation = null, this.lastClicked = null, this.userCallback = null, this.userDeferred = null, this.dom = new e.MixerDom, this.callActions("afterConstruct"), i.seal(this)
        }, e.BaseStatic.call(e.Mixer), e.Mixer.prototype = Object.create(e.Base.prototype), i.extend(e.Mixer.prototype, {
            constructor: e.Mixer,
            attach: function(n, s, a, o) {
                var r = this,
                    l = null,
                    c = -1;
                for (r.callActions("beforeAttach", arguments), r.id = a, o && i.extend(r.config, o, !0, !0), r.sanitizeConfig(), r.cacheDom(n, s), r.config.layout.containerClassName && i.addClass(r.dom.container, r.config.layout.containerClassName), e.features.has.transitions || (r.config.animation.enable = !1), "undefined" == typeof t.console && (r.config.debug.showWarnings = !1), r.config.data.uidKey && (r.config.controls.enable = !1), r.indexTargets(), r.state = r.getInitialState(), c = 0; l = r.lastOperation.toHide[c]; c++) l.hide();
                r.config.controls.enable && (r.initControls(), r.updateControls({
                    filter: r.state.activeFilter,
                    sort: r.state.activeSort
                }), r.buildToggleArray(null, r.state)), r.parseEffects(), r.callActions("afterAttach", arguments)
            },
            sanitizeConfig: function() {
                var t = this;
                t.callActions("beforeSanitizeConfig", arguments), t.config.controls.scope = t.config.controls.scope.toLowerCase().trim(), t.config.controls.toggleLogic = t.config.controls.toggleLogic.toLowerCase().trim(), t.config.controls.toggleDefault = t.config.controls.toggleDefault.toLowerCase().trim(), t.config.animation.effects = t.config.animation.effects.trim(), t.callActions("afterSanitizeConfig", arguments)
            },
            getInitialState: function() {
                var t = this,
                    i = new e.State,
                    n = new e.Operation;
                if (t.callActions("beforeGetInitialState", arguments), i.activeContainerClassName = t.config.layout.containerClassName, t.config.load.dataset) {
                    if (!t.config.data.uidKey || "string" != typeof t.config.data.uidKey) throw new TypeError(e.messages.errorConfigDataUidKeyNotSet());
                    n.startDataset = n.newDataset = i.activeDataset = t.config.load.dataset.slice(), n.startContainerClassName = n.newContainerClassName = i.activeContainerClassName, n.show = t.targets.slice(), i = t.callFilters("stateGetInitialState", i, arguments)
                } else i.activeFilter = t.parseFilterArgs([t.config.load.filter]).command, i.activeSort = t.parseSortArgs([t.config.load.sort]).command, i.totalTargets = t.targets.length, i = t.callFilters("stateGetInitialState", i, arguments), i.activeSort.collection || i.activeSort.attribute || "random" === i.activeSort.order || "desc" === i.activeSort.order ? (n.newSort = i.activeSort, t.sortOperation(n), t.printSort(!1, n), t.targets = n.newOrder) : n.startOrder = n.newOrder = t.targets, n.startFilter = n.newFilter = i.activeFilter, n.startSort = n.newSort = i.activeSort, n.startContainerClassName = n.newContainerClassName = i.activeContainerClassName, "all" === n.newFilter.selector ? n.newFilter.selector = t.config.selectors.target : "none" === n.newFilter.selector && (n.newFilter.selector = "");
                return n = t.callFilters("operationGetInitialState", n, [i]), t.lastOperation = n, n.newFilter && t.filterOperation(n), i = t.buildState(n)
            },
            cacheDom: function(t, e) {
                var i = this;
                i.callActions("beforeCacheDom", arguments), i.dom.document = e, i.dom.body = i.dom.document.querySelector("body"), i.dom.container = t, i.dom.parent = t, i.callActions("afterCacheDom", arguments)
            },
            indexTargets: function() {
                var t = this,
                    n = null,
                    s = null,
                    a = null,
                    o = -1;
                if (t.callActions("beforeIndexTargets", arguments), t.dom.targets = t.config.layout.allowNestedTargets ? t.dom.container.querySelectorAll(t.config.selectors.target) : i.children(t.dom.container, t.config.selectors.target, t.dom.document), t.dom.targets = i.arrayFromList(t.dom.targets), t.targets = [], (a = t.config.load.dataset) && a.length !== t.dom.targets.length) throw new Error(e.messages.errorDatasetPrerenderedMismatch());
                if (t.dom.targets.length) {
                    for (o = 0; s = t.dom.targets[o]; o++) n = new e.Target, n.init(s, t, a ? a[o] : void 0), n.isInDom = !0, t.targets.push(n);
                    t.dom.parent = t.dom.targets[0].parentElement === t.dom.container ? t.dom.container : t.dom.targets[0].parentElement
                }
                t.origOrder = t.targets, t.callActions("afterIndexTargets", arguments)
            },
            initControls: function() {
                var t = this,
                    i = "",
                    n = null,
                    s = null,
                    a = null,
                    o = null,
                    r = null,
                    l = -1,
                    c = -1;
                switch (t.callActions("beforeInitControls", arguments), t.config.controls.scope) {
                    case "local":
                        a = t.dom.container;
                        break;
                    case "global":
                        a = t.dom.document;
                        break;
                    default:
                        throw new Error(e.messages.errorConfigInvalidControlsScope())
                }
                for (l = 0; i = e.controlDefinitions[l]; l++)
                    if (t.config.controls.live || i.live) {
                        if (i.parent) {
                            if (o = t.dom[i.parent], !o || o.length < 0) continue;
                            "number" != typeof o.length && (o = [o])
                        } else o = [a];
                        for (c = 0; s = o[c]; c++) r = t.getControl(s, i.type, i.selector), t.controls.push(r)
                    } else
                        for (n = a.querySelectorAll(t.config.selectors.control + i.selector), c = 0; s = n[c]; c++) r = t.getControl(s, i.type, ""), r && t.controls.push(r);
                t.callActions("afterInitControls", arguments)
            },
            getControl: function(t, n, s) {
                var a = this,
                    o = null,
                    r = -1;
                if (a.callActions("beforeGetControl", arguments), !s)
                    for (r = 0; o = e.controls[r]; r++) {
                        if (o.el === t && o.isBound(a)) return a.callFilters("controlGetControl", null, arguments);
                        if (o.el === t && o.type === n && o.selector === s) return o.addBinding(a), a.callFilters("controlGetControl", o, arguments)
                    }
                return o = new e.Control, o.init(t, n, s), o.classNames.base = i.getClassname(a.config.classNames, n), o.classNames.active = i.getClassname(a.config.classNames, n, a.config.classNames.modifierActive), o.classNames.disabled = i.getClassname(a.config.classNames, n, a.config.classNames.modifierDisabled), o.addBinding(a), a.callFilters("controlGetControl", o, arguments)
            },
            getToggleSelector: function() {
                var t = this,
                    e = "or" === t.config.controls.toggleLogic ? ", " : "",
                    n = "";
                return t.callActions("beforeGetToggleSelector", arguments), t.toggleArray = i.clean(t.toggleArray), n = t.toggleArray.join(e), "" === n && (n = t.config.controls.toggleDefault), t.callFilters("selectorGetToggleSelector", n, arguments)
            },
            buildToggleArray: function(t, e) {
                var n = this,
                    s = "";
                if (n.callActions("beforeBuildToggleArray", arguments), t && t.filter) s = t.filter.selector.replace(/\s/g, "");
                else {
                    if (!e) return;
                    s = e.activeFilter.selector.replace(/\s/g, "")
                }(s === n.config.selectors.target || "all" === s) && (s = ""), "or" === n.config.controls.toggleLogic ? n.toggleArray = s.split(",") : n.toggleArray = n.splitCompoundSelector(s), n.toggleArray = i.clean(n.toggleArray), n.callActions("afterBuildToggleArray", arguments)
            },
            splitCompoundSelector: function(t) {
                var e = t.split(/([\.\[])/g),
                    i = [],
                    n = "",
                    s = -1;
                for ("" === e[0] && e.shift(), s = 0; s < e.length; s++) s % 2 === 0 && (n = ""), n += e[s], s % 2 !== 0 && i.push(n);
                return i
            },
            updateControls: function(t) {
                var n = this,
                    s = null,
                    a = new e.CommandMultimix,
                    o = -1;
                for (n.callActions("beforeUpdateControls", arguments), t.filter ? a.filter = t.filter.selector : a.filter = n.state.activeFilter.selector, t.sort ? a.sort = n.buildSortString(t.sort) : a.sort = n.buildSortString(n.state.activeSort), a.filter === n.config.selectors.target && (a.filter = "all"), "" === a.filter && (a.filter = "none"), i.freeze(a), o = 0; s = n.controls[o]; o++) s.update(a, n.toggleArray);
                n.callActions("afterUpdateControls", arguments)
            },
            buildSortString: function(t) {
                var e = this,
                    i = "";
                return i += t.sortString, t.next && (i += " " + e.buildSortString(t.next)), i
            },
            insertTargets: function(t, n) {
                var s = this,
                    a = null,
                    o = -1,
                    r = null,
                    l = null,
                    c = null,
                    h = -1;
                if (s.callActions("beforeInsertTargets", arguments), "undefined" == typeof t.index && (t.index = 0), a = s.getNextSibling(t.index, t.sibling, t.position), r = s.dom.document.createDocumentFragment(), o = a ? i.index(a, s.config.selectors.target) : s.targets.length, t.collection) {
                    for (h = 0; c = t.collection[h]; h++) {
                        if (s.dom.targets.indexOf(c) > -1) throw new Error(e.messages.errorInsertPreexistingElement());
                        c.style.display = "none", r.appendChild(c), r.appendChild(s.dom.document.createTextNode(" ")), i.isElement(c, s.dom.document) && c.matches(s.config.selectors.target) && (l = new e.Target, l.init(c, s), l.isInDom = !0, s.targets.splice(o, 0, l), o++)
                    }
                    s.dom.parent.insertBefore(r, a)
                }
                n.startOrder = s.origOrder = s.targets, s.callActions("afterInsertTargets", arguments)
            },
            getNextSibling: function(t, e, i) {
                var n = this,
                    s = null;
                return t = Math.max(t, 0), e && "before" === i ? s = e : e && "after" === i ? s = e.nextElementSibling || null : n.targets.length > 0 && "undefined" != typeof t ? s = t < n.targets.length || !n.targets.length ? n.targets[t].dom.el : n.targets[n.targets.length - 1].dom.el.nextElementSibling : 0 === n.targets.length && n.dom.parent.children.length > 0 && (n.config.layout.siblingAfter ? s = n.config.layout.siblingAfter : n.config.layout.siblingBefore ? s = n.config.layout.siblingBefore.nextElementSibling : n.dom.parent.children[0]), n.callFilters("elementGetNextSibling", s, arguments)
            },
            filterOperation: function(t) {
                var e = this,
                    i = !1,
                    n = -1,
                    s = "",
                    a = null,
                    o = -1;
                for (e.callActions("beforeFilterOperation", arguments), s = t.newFilter.action, o = 0; a = t.newOrder[o]; o++) i = t.newFilter.collection ? t.newFilter.collection.indexOf(a.dom.el) > -1 : "" === t.newFilter.selector ? !1 : a.dom.el.matches(t.newFilter.selector), e.evaluateHideShow(i, a, s, t);
                if (t.toRemove.length)
                    for (o = 0; a = t.show[o]; o++) t.toRemove.indexOf(a) > -1 && (t.show.splice(o, 1), (n = t.toShow.indexOf(a)) > -1 && t.toShow.splice(n, 1), t.toHide.push(a), t.hide.push(a), o--);
                t.matching = t.show.slice(), 0 === t.show.length && "" !== t.newFilter.selector && 0 !== e.targets.length && (t.hasFailed = !0), e.callActions("afterFilterOperation", arguments)
            },
            evaluateHideShow: function(t, e, i, n) {
                var s = this;
                s.callActions("beforeEvaluateHideShow", arguments), t === !0 && "show" === i || t === !1 && "hide" === i ? (n.show.push(e), !e.isShown && n.toShow.push(e)) : (n.hide.push(e), e.isShown && n.toHide.push(e)), s.callActions("afterEvaluateHideShow", arguments)
            },
            sortOperation: function(t) {
                var e = this;
                e.callActions("beforeSortOperation", arguments), t.startOrder = e.targets, t.newSort.collection ? t.newOrder = t.newSort.collection : "random" === t.newSort.order ? t.newOrder = i.arrayShuffle(t.startOrder) : "" === t.newSort.attribute ? (t.newOrder = e.origOrder.slice(), "desc" === t.newSort.order && t.newOrder.reverse()) : (t.newOrder = t.startOrder.slice(), t.newOrder.sort(function(i, n) {
                    return e.compare(i, n, t.newSort)
                })), i.isEqualArray(t.newOrder, t.startOrder) && (t.willSort = !1), e.callActions("afterSortOperation", arguments)
            },
            compare: function(t, e, i) {
                var n = this,
                    s = i.order,
                    a = n.getAttributeValue(t, i.attribute),
                    o = n.getAttributeValue(e, i.attribute);
                return isNaN(1 * a) || isNaN(1 * o) ? (a = a.toLowerCase(), o = o.toLowerCase()) : (a = 1 * a, o = 1 * o), o > a ? "asc" === s ? -1 : 1 : a > o ? "asc" === s ? 1 : -1 : a === o && i.next ? n.compare(t, e, i.next) : 0
            },
            getAttributeValue: function(t, i) {
                var n = this,
                    s = "";
                return s = t.dom.el.getAttribute("data-" + i), null === s && n.config.debug.showWarnings && console.warn(e.messages.warningInconsistentSortingAttributes({
                    attribute: "data-" + i
                })), n.callFilters("valueGetAttributeValue", s || 0, arguments)
            },
            printSort: function(e, n) {
                var s = this,
                    a = e ? n.newOrder : n.startOrder,
                    o = e ? n.startOrder : n.newOrder,
                    r = a.length ? a[a.length - 1].dom.el.nextElementSibling : null,
                    l = t.document.createDocumentFragment(),
                    c = null,
                    h = null,
                    u = null,
                    d = -1;
                for (s.callActions("beforePrintSort", arguments), d = 0; h = a[d]; d++) u = h.dom.el, "absolute" !== u.style.position && (i.removeWhitespace(u.previousSibling), u.parentElement.removeChild(u));
                for (c = r ? r.previousSibling : s.dom.parent.lastChild, c && "#text" === c.nodeName && i.removeWhitespace(c), d = 0; h = o[d]; d++) u = h.dom.el, i.isElement(l.lastChild) && l.appendChild(t.document.createTextNode(" ")), l.appendChild(u);
                s.dom.parent.firstChild && s.dom.parent.firstChild !== r && l.insertBefore(t.document.createTextNode(" "), l.childNodes[0]), r ? (l.appendChild(t.document.createTextNode(" ")), s.dom.parent.insertBefore(l, r)) : s.dom.parent.appendChild(l), s.callActions("afterPrintSort", arguments)
            },
            parseSortString: function(t, n) {
                var s = this,
                    a = t.split(" "),
                    o = n,
                    r = [],
                    l = -1;
                for (l = 0; l < a.length; l++) {
                    switch (r = a[l].split(":"), o.sortString = a[l], o.attribute = i.dashCase(r[0]), o.order = r[1] || "asc", o.attribute) {
                        case "default":
                            o.attribute = "";
                            break;
                        case "random":
                            o.attribute = "", o.order = "random"
                    }
                    if (!o.attribute || "random" === o.order) break;
                    l < a.length - 1 && (o.next = new e.CommandSort, i.freeze(o), o = o.next)
                }
                return s.callFilters("commandsParseSort", n, arguments)
            },
            parseEffects: function() {
                var t = this,
                    i = "",
                    n = t.config.animation.effectsIn || t.config.animation.effects,
                    s = t.config.animation.effectsOut || t.config.animation.effects;
                t.callActions("beforeParseEffects", arguments), t.effectsIn = new e.StyleData, t.effectsOut = new e.StyleData, t.transformIn = [], t.transformOut = [], t.effectsIn.opacity = t.effectsOut.opacity = 1, t.parseEffect("fade", n, t.effectsIn, t.transformIn), t.parseEffect("fade", s, t.effectsOut, t.transformOut, !0);
                for (i in e.transformDefaults) e.transformDefaults[i] instanceof e.TransformData && (t.parseEffect(i, n, t.effectsIn, t.transformIn), t.parseEffect(i, s, t.effectsOut, t.transformOut, !0));
                t.parseEffect("stagger", n, t.effectsIn, t.transformIn), t.parseEffect("stagger", s, t.effectsOut, t.transformOut, !0), t.callActions("afterParseEffects", arguments)
            },
            parseEffect: function(t, i, n, s, a) {
                var o = this,
                    r = /\(([^)]+)\)/,
                    l = -1,
                    c = "",
                    h = [],
                    u = "",
                    d = ["%", "px", "em", "rem", "vh", "vw", "deg"],
                    g = "",
                    m = -1;
                if (o.callActions("beforeParseEffect", arguments), "string" != typeof i) throw new TypeError(e.messages.errorConfigInvalidAnimationEffects());
                if (i.indexOf(t) < 0) return void("stagger" === t && (o.staggerDuration = 0));
                switch (l = i.indexOf(t + "("), l > -1 && (c = i.substring(l), h = r.exec(c), u = h[1]), t) {
                    case "fade":
                        n.opacity = u ? parseFloat(u) : 0;
                        break;
                    case "stagger":
                        o.staggerDuration = u ? parseFloat(u) : 100;
                        break;
                    default:
                        if (a && o.config.animation.reverseOut && "scale" !== t ? n[t].value = -1 * (u ? parseFloat(u) : e.transformDefaults[t].value) : n[t].value = u ? parseFloat(u) : e.transformDefaults[t].value, u) {
                            for (m = 0; g = d[m]; m++)
                                if (u.indexOf(g) > -1) {
                                    n[t].unit = g;
                                    break
                                }
                        } else n[t].unit = e.transformDefaults[t].unit;
                        s.push(t + "(" + n[t].value + n[t].unit + ")")
                }
                o.callActions("afterParseEffect", arguments)
            },
            buildState: function(t) {
                var i = this,
                    n = new e.State,
                    s = null,
                    a = -1;
                for (i.callActions("beforeBuildState", arguments), a = 0; s = i.targets[a]; a++)(!t.toRemove.length || t.toRemove.indexOf(s) < 0) && n.targets.push(s.dom.el);
                for (a = 0; s = t.matching[a]; a++) n.matching.push(s.dom.el);
                for (a = 0; s = t.show[a]; a++) n.show.push(s.dom.el);
                for (a = 0; s = t.hide[a]; a++)(!t.toRemove.length || t.toRemove.indexOf(s) < 0) && n.hide.push(s.dom.el);
                return n.id = i.id, n.container = i.dom.container, n.activeFilter = t.newFilter, n.activeSort = t.newSort, n.activeDataset = t.newDataset, n.activeContainerClassName = t.newContainerClassName, n.hasFailed = t.hasFailed, n.totalTargets = i.targets.length, n.totalShow = t.show.length, n.totalHide = t.hide.length, n.totalMatching = t.matching.length, n.triggerElement = t.triggerElement, i.callFilters("stateBuildState", n, arguments)
            },
            goMix: function(n, s) {
                var a = this,
                    o = null;
                return a.callActions("beforeGoMix", arguments), a.config.animation.duration && a.config.animation.effects && i.isVisible(a.dom.container) || (n = !1), s.toShow.length || s.toHide.length || s.willSort || s.willChangeLayout || (n = !1), s.startState.show.length || s.show.length || (n = !1), e.events.fire("mixStart", a.dom.container, {
                    state: s.startState,
                    futureState: s.newState,
                    instance: a
                }, a.dom.document), "function" == typeof a.config.callbacks.onMixStart && a.config.callbacks.onMixStart.call(a.dom.container, s.startState, s.newState, a), i.removeClass(a.dom.container, i.getClassname(a.config.classNames, "container", a.config.classNames.modifierFailed)), o = a.userDeferred ? a.userDeferred : a.userDeferred = i.defer(e.libraries), a.isBusy = !0, n && e.features.has.transitions ? (t.pageYOffset !== s.docState.scrollTop && t.scrollTo(s.docState.scrollLeft, s.docState.scrollTop), a.config.animation.applyPerspective && (a.dom.parent.style[e.features.perspectiveProp] = a.config.animation.perspectiveDistance, a.dom.parent.style[e.features.perspectiveOriginProp] = a.config.animation.perspectiveOrigin), (a.config.animation.animateResizeContainer || s.startHeight === s.newHeight) && (a.dom.parent.style.height = s.startHeight + "px"), (a.config.animation.animateResizeContainer || s.startWidth === s.newWidth) && (a.dom.parent.style.width = s.startWidth + "px"), requestAnimationFrame(function() {
                    a.moveTargets(s)
                }), a.callFilters("promiseGoMix", o.promise, arguments)) : (a.config.debug.fauxAsync ? setTimeout(function() {
                    a.cleanUp(s)
                }, a.config.animation.duration) : a.cleanUp(s), a.callFilters("promiseGoMix", o.promise, arguments))
            },
            getStartMixData: function(i) {
                var n = this,
                    s = t.getComputedStyle(n.dom.parent),
                    a = n.dom.parent.getBoundingClientRect(),
                    o = null,
                    r = {},
                    l = -1,
                    c = s[e.features.boxSizingProp];
                for (n.incPadding = "border-box" === c, n.callActions("beforeGetStartMixData", arguments), l = 0; o = i.show[l]; l++) r = o.getPosData(), i.showPosData[l] = {
                    startPosData: r
                };
                for (l = 0; o = i.toHide[l]; l++) r = o.getPosData(), i.toHidePosData[l] = {
                    startPosData: r
                };
                i.startX = a.left, i.startY = a.top, i.startHeight = n.incPadding ? a.height : a.height - parseFloat(s.paddingTop) - parseFloat(s.paddingBottom) - parseFloat(s.borderTop) - parseFloat(s.borderBottom), i.startWidth = n.incPadding ? a.width : a.width - parseFloat(s.paddingLeft) - parseFloat(s.paddingRight) - parseFloat(s.borderLeft) - parseFloat(s.borderRight), n.callActions("afterGetStartMixData", arguments)
            },
            setInter: function(t) {
                var e = this,
                    n = null,
                    s = -1;
                for (e.callActions("beforeSetInter", arguments), e.config.animation.clampHeight && (e.dom.parent.style.height = t.startHeight + "px", e.dom.parent.style.overflow = "hidden"), s = 0; n = t.toShow[s]; s++) n.show();
                t.willChangeLayout && (i.removeClass(e.dom.container, t.startContainerClassName), i.addClass(e.dom.container, t.newContainerClassName)), e.callActions("afterSetInter", arguments)
            },
            getInterMixData: function(t) {
                var e = this,
                    i = null,
                    n = -1;
                for (e.callActions("beforeGetInterMixData", arguments), n = 0; i = t.show[n]; n++) t.showPosData[n].interPosData = i.getPosData();
                for (n = 0; i = t.toHide[n]; n++) t.toHidePosData[n].interPosData = i.getPosData();
                e.callActions("afterGetInterMixData", arguments)
            },
            setFinal: function(t) {
                var e = this,
                    i = null,
                    n = -1;
                for (e.callActions("beforeSetFinal", arguments), e.config.animation.clampHeight && (e.dom.parent.style.height = e.dom.parent.style.overflow = ""), t.willSort && e.printSort(!1, t), n = 0; i = t.toHide[n]; n++) i.hide();
                e.callActions("afterSetFinal", arguments)
            },
            getFinalMixData: function(e) {
                var n = this,
                    s = null,
                    a = n.dom.parent.getBoundingClientRect(),
                    o = null,
                    r = -1;
                for (n.incPadding || (s = t.getComputedStyle(n.dom.parent)), n.callActions("beforeGetFinalMixData", arguments), r = 0; o = e.show[r]; r++) e.showPosData[r].finalPosData = o.getPosData();
                for (r = 0; o = e.toHide[r]; r++) e.toHidePosData[r].finalPosData = o.getPosData();
                for (e.newX = a.left, e.newY = a.top, e.newHeight = n.incPadding ? a.height : a.height - parseFloat(s.paddingTop) - parseFloat(s.paddingBottom) - parseFloat(s.borderTop) - parseFloat(s.borderBottom), e.newWidth = n.incPadding ? a.width : a.width - parseFloat(s.paddingLeft) - parseFloat(s.paddingRight) - parseFloat(s.borderLeft) - parseFloat(s.borderRight), e.willSort && n.printSort(!0, e), r = 0; o = e.toShow[r]; r++) o.hide();
                for (r = 0; o = e.toHide[r]; r++) o.show();
                e.willChangeLayout && (i.removeClass(n.dom.container, e.newContainerClassName), i.addClass(n.dom.container, n.config.layout.containerClassName)), n.callActions("afterGetFinalMixData", arguments)
            },
            getTweenData: function(t) {
                var i = this,
                    n = null,
                    s = null,
                    a = Object.getOwnPropertyNames(i.effectsIn),
                    o = "",
                    r = null,
                    l = -1,
                    c = -1,
                    h = -1,
                    u = -1;
                for (i.callActions("beforeGetTweenData", arguments), h = 0; n = t.show[h]; h++)
                    for (s = t.showPosData[h], s.posIn = new e.StyleData, s.posOut = new e.StyleData, s.tweenData = new e.StyleData, n.isShown ? (s.posIn.x = s.startPosData.x - s.interPosData.x, s.posIn.y = s.startPosData.y - s.interPosData.y) : s.posIn.x = s.posIn.y = 0, s.posOut.x = s.finalPosData.x - s.interPosData.x, s.posOut.y = s.finalPosData.y - s.interPosData.y, s.posIn.opacity = n.isShown ? 1 : i.effectsIn.opacity, s.posOut.opacity = 1, s.tweenData.opacity = s.posOut.opacity - s.posIn.opacity, n.isShown || i.config.animation.nudge || (s.posIn.x = s.posOut.x, s.posIn.y = s.posOut.y), s.tweenData.x = s.posOut.x - s.posIn.x, s.tweenData.y = s.posOut.y - s.posIn.y, i.config.animation.animateResizeTargets && (s.posIn.width = s.startPosData.width, s.posIn.height = s.startPosData.height, l = (s.startPosData.width || s.finalPosData.width) - s.interPosData.width, s.posIn.marginRight = s.startPosData.marginRight - l, c = (s.startPosData.height || s.finalPosData.height) - s.interPosData.height, s.posIn.marginBottom = s.startPosData.marginBottom - c, s.posOut.width = s.finalPosData.width, s.posOut.height = s.finalPosData.height, l = (s.finalPosData.width || s.startPosData.width) - s.interPosData.width, s.posOut.marginRight = s.finalPosData.marginRight - l, c = (s.finalPosData.height || s.startPosData.height) - s.interPosData.height, s.posOut.marginBottom = s.finalPosData.marginBottom - c, s.tweenData.width = s.posOut.width - s.posIn.width, s.tweenData.height = s.posOut.height - s.posIn.height, s.tweenData.marginRight = s.posOut.marginRight - s.posIn.marginRight, s.tweenData.marginBottom = s.posOut.marginBottom - s.posIn.marginBottom), u = 0; o = a[u]; u++) r = i.effectsIn[o], r instanceof e.TransformData && r.value && (s.posIn[o].value = r.value, s.posOut[o].value = 0, s.tweenData[o].value = s.posOut[o].value - s.posIn[o].value, s.posIn[o].unit = s.posOut[o].unit = s.tweenData[o].unit = r.unit);
                for (h = 0; n = t.toHide[h]; h++)
                    for (s = t.toHidePosData[h], s.posIn = new e.StyleData, s.posOut = new e.StyleData, s.tweenData = new e.StyleData, s.posIn.x = n.isShown ? s.startPosData.x - s.interPosData.x : 0, s.posIn.y = n.isShown ? s.startPosData.y - s.interPosData.y : 0, s.posOut.x = i.config.animation.nudge ? 0 : s.posIn.x, s.posOut.y = i.config.animation.nudge ? 0 : s.posIn.y, s.tweenData.x = s.posOut.x - s.posIn.x, s.tweenData.y = s.posOut.y - s.posIn.y, i.config.animation.animateResizeTargets && (s.posIn.width = s.startPosData.width, s.posIn.height = s.startPosData.height, l = s.startPosData.width - s.interPosData.width, s.posIn.marginRight = s.startPosData.marginRight - l, c = s.startPosData.height - s.interPosData.height, s.posIn.marginBottom = s.startPosData.marginBottom - c), s.posIn.opacity = 1, s.posOut.opacity = i.effectsOut.opacity, s.tweenData.opacity = s.posOut.opacity - s.posIn.opacity, u = 0; o = a[u]; u++) r = i.effectsOut[o], r instanceof e.TransformData && r.value && (s.posIn[o].value = 0, s.posOut[o].value = r.value, s.tweenData[o].value = s.posOut[o].value - s.posIn[o].value, s.posIn[o].unit = s.posOut[o].unit = s.tweenData[o].unit = r.unit);
                i.callActions("afterGetTweenData", arguments)
            },
            moveTargets: function(t) {
                var n = this,
                    s = null,
                    a = null,
                    o = null,
                    r = "",
                    l = !1,
                    c = -1,
                    h = -1,
                    u = n.checkProgress.bind(n);
                for (n.callActions("beforeMoveTargets", arguments), h = 0; s = t.show[h]; h++) a = new e.IMoveData, o = t.showPosData[h], r = s.isShown ? "none" : "show", l = n.willTransition(r, t.hasEffect, o.posIn, o.posOut), l && c++, s.show(), a.posIn = o.posIn, a.posOut = o.posOut, a.statusChange = r, a.staggerIndex = c, a.operation = t, a.callback = l ? u : null, s.move(a);
                for (h = 0; s = t.toHide[h]; h++) o = t.toHidePosData[h], a = new e.IMoveData, r = "hide", l = n.willTransition(r, o.posIn, o.posOut), a.posIn = o.posIn, a.posOut = o.posOut, a.statusChange = r, a.staggerIndex = h, a.operation = t, a.callback = l ? u : null, s.move(a);
                n.config.animation.animateResizeContainer && (n.dom.parent.style[e.features.transitionProp] = "height " + n.config.animation.duration + "ms ease, width " + n.config.animation.duration + "ms ease ", requestAnimationFrame(function() {
                    n.dom.parent.style.height = t.newHeight + "px", n.dom.parent.style.width = t.newWidth + "px"
                })), t.willChangeLayout && (i.removeClass(n.dom.container, n.config.layout.ContainerClassName), i.addClass(n.dom.container, t.newContainerClassName)), n.callActions("afterMoveTargets", arguments)
            },
            hasEffect: function() {
                var t = this,
                    e = ["scale", "translateX", "translateY", "translateZ", "rotateX", "rotateY", "rotateZ"],
                    i = "",
                    n = null,
                    s = !1,
                    a = -1,
                    o = -1;
                if (1 !== t.effectsIn.opacity) return t.callFilters("resultHasEffect", !0, arguments);
                for (o = 0; i = e[o]; o++)
                    if (n = t.effectsIn[i], a = "undefined" !== n.value ? n.value : n, 0 !== a) {
                        s = !0;
                        break
                    }
                return t.callFilters("resultHasEffect", s, arguments)
            },
            willTransition: function(t, e, n, s) {
                var a = this,
                    o = !1;
                return o = i.isVisible(a.dom.container) ? "none" !== t && e || n.x !== s.x || n.y !== s.y ? !0 : a.config.animation.animateResizeTargets ? n.width !== s.width || n.height !== s.height || n.marginRight !== s.marginRight || n.marginTop !== s.marginTop : !1 : !1, a.callFilters("resultWillTransition", o, arguments)
            },
            checkProgress: function(t) {
                var e = this;
                e.targetsDone++, e.targetsBound === e.targetsDone && e.cleanUp(t)
            },
            cleanUp: function(t) {
                var n = this,
                    s = null,
                    a = null,
                    o = null,
                    r = null,
                    l = -1;
                for (n.callActions("beforeCleanUp", arguments), n.targetsMoved = n.targetsImmovable = n.targetsBound = n.targetsDone = 0, l = 0; s = t.show[l]; l++) s.cleanUp(), s.show();
                for (l = 0; s = t.toHide[l]; l++) s.cleanUp(), s.hide();
                if (t.willSort && n.printSort(!1, t), n.dom.parent.style[e.features.transitionProp] = n.dom.parent.style.height = n.dom.parent.style.width = n.dom.parent.style[e.features.perspectiveProp] = n.dom.parent.style[e.features.perspectiveOriginProp] = "", t.willChangeLayout && (i.removeClass(n.dom.container, t.startContainerClassName), i.addClass(n.dom.container, t.newContainerClassName)), t.toRemove.length) {
                    for (l = 0; s = n.targets[l]; l++) t.toRemove.indexOf(s) > -1 && ((a = s.dom.el.previousSibling) && "#text" === a.nodeName && (o = s.dom.el.nextSibling) && "#text" === o.nodeName && i.removeWhitespace(a), t.willSort || n.dom.parent.removeChild(s.dom.el), n.targets.splice(l, 1), s.isInDom = !1, l--);
                    n.origOrder = n.targets
                }
                t.willSort && (n.targets = t.newOrder), n.state = t.newState, n.lastOperation = t, n.dom.targets = n.state.targets, e.events.fire("mixEnd", n.dom.container, {
                    state: n.state,
                    instance: n
                }, n.dom.document), "function" == typeof n.config.callbacks.onMixEnd && n.config.callbacks.onMixEnd.call(n.dom.container, n.state, n), t.hasFailed && (e.events.fire("mixFail", n.dom.container, {
                    state: n.state,
                    instance: n
                }, n.dom.document), "function" == typeof n.config.callbacks.onMixFail && n.config.callbacks.onMixFail.call(n.dom.container, n.state, n), i.addClass(n.dom.container, i.getClassname(n.config.classNames, "container", n.config.classNames.modifierFailed))), "function" == typeof n.userCallback && n.userCallback.call(n.dom.container, n.state, n), "function" == typeof n.userDeferred.resolve && n.userDeferred.resolve(n.state), n.userCallback = null, n.userDeferred = null, n.lastClicked = null, n.isToggling = !1, n.isBusy = !1, n.queue.length && (n.callActions("beforeReadQueueCleanUp", arguments), r = n.queue.shift(), n.userDeferred = r.deferred, n.isToggling = r.isToggling, n.lastClicked = r.triggerElement, r.instruction.command instanceof e.CommandMultimix ? n.multimix.apply(n, r.args) : n.dataset.apply(n, r.args)), n.callActions("afterCleanUp", arguments)
            },
            parseMultimixArgs: function(t) {
                var n = this,
                    s = new e.UserInstruction,
                    a = null,
                    o = -1;
                for (s.animate = n.config.animation.enable, s.command = new e.CommandMultimix, o = 0; o < t.length; o++) a = t[o], null !== a && ("object" == typeof a ? i.extend(s.command, a) : "boolean" == typeof a ? s.animate = a : "function" == typeof a && (s.callback = a));
                return !s.command.insert || s.command.insert instanceof e.CommandInsert || (s.command.insert = n.parseInsertArgs([s.command.insert]).command), !s.command.remove || s.command.remove instanceof e.CommandRemove || (s.command.remove = n.parseRemoveArgs([s.command.remove]).command), !s.command.filter || s.command.filter instanceof e.CommandFilter || (s.command.filter = n.parseFilterArgs([s.command.filter]).command), !s.command.sort || s.command.sort instanceof e.CommandSort || (s.command.sort = n.parseSortArgs([s.command.sort]).command), !s.command.changeLayout || s.command.changeLayout instanceof e.CommandChangeLayout || (s.command.changeLayout = n.parseChangeLayoutArgs([s.command.changeLayout]).command), s = n.callFilters("instructionParseMultimixArgs", s, arguments), i.freeze(s), s
            },
            parseFilterArgs: function(t) {
                var n = this,
                    s = new e.UserInstruction,
                    a = null,
                    o = -1;
                for (s.animate = n.config.animation.enable, s.command = new e.CommandFilter, o = 0; o < t.length; o++) a = t[o], "string" == typeof a ? s.command.selector = a : null === a ? s.command.collection = [] : "object" == typeof a && i.isElement(a, n.dom.document) ? s.command.collection = [a] : "object" == typeof a && "undefined" != typeof a.length ? s.command.collection = i.arrayFromList(a) : "object" == typeof a ? i.extend(s.command, a) : "boolean" == typeof a ? s.animate = a : "function" == typeof a && (s.callback = a);
                if (s.command.selector && s.command.collection) throw new Error(e.messages.errorFilterInvalidArguments());
                return s = n.callFilters("instructionParseFilterArgs", s, arguments), i.freeze(s), s
            },
            parseSortArgs: function(t) {
                var n = this,
                    s = new e.UserInstruction,
                    a = null,
                    o = "",
                    r = -1;
                for (s.animate = n.config.animation.enable, s.command = new e.CommandSort, r = 0; r < t.length; r++)
                    if (a = t[r], null !== a) switch (typeof a) {
                        case "string":
                            o = a;
                            break;
                        case "object":
                            a.length && (s.command.collection = i.arrayFromList(a));
                            break;
                        case "boolean":
                            s.animate = a;
                            break;
                        case "function":
                            s.callback = a
                    }
                    return o && (s.command = n.parseSortString(o, s.command)), s = n.callFilters("instructionParseSortArgs", s, arguments), i.freeze(s), s
            },
            parseInsertArgs: function(t) {
                var n = this,
                    s = new e.UserInstruction,
                    a = null,
                    o = -1;
                for (s.animate = n.config.animation.enable, s.command = new e.CommandInsert, o = 0; o < t.length; o++) a = t[o], null !== a && ("number" == typeof a ? s.command.index = a : "string" == typeof a && ["before", "after"].indexOf(a) > -1 ? s.command.position = a : "string" == typeof a ? s.command.collection = i.arrayFromList(i.createElement(a).childNodes) : "object" == typeof a && i.isElement(a, n.dom.document) ? s.command.collection.length ? s.command.sibling = a : s.command.collection = [a] : "object" == typeof a && a.length ? s.command.collection.length ? s.command.sibling = a[0] : s.command.collection = a : "object" == typeof a && a.childNodes && a.childNodes.length ? s.command.collection.length ? s.command.sibling = a.childNodes[0] : s.command.collection = i.arrayFromList(a.childNodes) : "object" == typeof a ? i.extend(s.command, a) : "boolean" == typeof a ? s.animate = a : "function" == typeof a && (s.callback = a));
                if (s.command.index && s.command.sibling) throw new Error(e.messages.errorInsertInvalidArguments());
                return !s.command.collection.length && n.config.debug.showWarnings && console.warn(e.messages.warningInsertNoElements()), s = n.callFilters("instructionParseInsertArgs", s, arguments), i.freeze(s), s
            },
            parseRemoveArgs: function(t) {
                var n = this,
                    s = new e.UserInstruction,
                    a = null,
                    o = null,
                    r = -1;
                for (s.animate = n.config.animation.enable, s.command = new e.CommandRemove, r = 0; r < t.length; r++)
                    if (o = t[r],
                        null !== o) switch (typeof o) {
                        case "number":
                            n.targets[o] && (s.command.targets[0] = n.targets[o]);
                            break;
                        case "string":
                            s.command.collection = i.arrayFromList(n.dom.parent.querySelectorAll(o));
                            break;
                        case "object":
                            o && o.length ? s.command.collection = o : i.isElement(o, n.dom.document) ? s.command.collection = [o] : i.extend(s.command, o);
                            break;
                        case "boolean":
                            s.animate = o;
                            break;
                        case "function":
                            s.callback = o
                    }
                    if (s.command.collection.length)
                        for (r = 0; a = n.targets[r]; r++) s.command.collection.indexOf(a.dom.el) > -1 && s.command.targets.push(a);
                return !s.command.targets.length && n.config.debug.showWarnings && console.warn(e.messages.warningRemoveNoElements()), i.freeze(s), s
            },
            parseDatasetArgs: function(t) {
                var n = this,
                    s = new e.UserInstruction,
                    a = null,
                    o = -1;
                for (s.animate = n.config.animation.enable, s.command = new e.CommandDataset, o = 0; o < t.length; o++)
                    if (a = t[o], null !== a) switch (typeof a) {
                        case "object":
                            Array.isArray(a) || "number" == typeof a.length ? s.command.dataset = a : i.extend(s.command, a);
                            break;
                        case "boolean":
                            s.animate = a;
                            break;
                        case "function":
                            s.callback = a
                    }
                    return i.freeze(s), s
            },
            parseChangeLayoutArgs: function(t) {
                var n = this,
                    s = new e.UserInstruction,
                    a = null,
                    o = -1;
                for (s.animate = n.config.animation.enable, s.command = new e.CommandChangeLayout, o = 0; o < t.length; o++)
                    if (a = t[o], null !== a) switch (typeof a) {
                        case "string":
                            s.command.containerClassName = a;
                            break;
                        case "object":
                            i.extend(s.command, a);
                            break;
                        case "boolean":
                            s.animate = a;
                            break;
                        case "function":
                            s.callback = a
                    }
                    return i.freeze(s), s
            },
            queueMix: function(t) {
                var n = this,
                    s = null,
                    a = "";
                return n.callActions("beforeQueueMix", arguments), s = i.defer(e.libraries), n.config.animation.queue && n.queue.length < n.config.animation.queueLimit ? (t.deferred = s, n.queue.push(t), n.config.controls.enable && (n.isToggling ? (n.buildToggleArray(t.instruction.command), a = n.getToggleSelector(), n.updateControls({
                    filter: {
                        selector: a
                    }
                })) : n.updateControls(t.instruction.command))) : (n.config.debug.showWarnings && console.warn(e.messages.warningMultimixInstanceQueueFull()), s.resolve(n.state), e.events.fire("mixBusy", n.dom.container, {
                    state: n.state,
                    instance: n
                }, n.dom.document), "function" == typeof n.config.callbacks.onMixBusy && n.config.callbacks.onMixBusy.call(n.dom.container, n.state, n)), n.callFilters("promiseQueueMix", s.promise, arguments)
            },
            getDataOperation: function(t) {
                var n = this,
                    s = new e.Operation,
                    a = [];
                if (s = n.callFilters("operationUnmappedGetDataOperation", s, arguments), n.dom.targets.length && !(a = n.state.activeDataset || []).length) throw new Error(e.messages.errorDatasetNotSet());
                return s.id = i.randomHex(), s.startState = n.state, s.startDataset = a, s.newDataset = t.slice(), n.diffDatasets(s), s.startOrder = n.targets, s.newOrder = s.show, n.config.animation.enable && (n.getStartMixData(s), n.setInter(s), s.docState = i.getDocumentState(n.dom.document), n.getInterMixData(s), n.setFinal(s), n.getFinalMixData(s), n.parseEffects(), s.hasEffect = n.hasEffect(), n.getTweenData(s)), n.targets = s.show.slice(), s.newState = n.buildState(s), Array.prototype.push.apply(n.targets, s.toRemove), s = n.callFilters("operationMappedGetDataOperation", s, arguments)
            },
            diffDatasets: function(t) {
                var n = this,
                    s = [],
                    a = [],
                    o = [],
                    r = null,
                    l = null,
                    c = null,
                    h = null,
                    u = null,
                    d = {},
                    g = "",
                    m = -1;
                for (n.callActions("beforeDiffDatasets", arguments), m = 0; r = t.newDataset[m]; m++) {
                    if ("undefined" == typeof(g = r[n.config.data.uidKey]) || g.toString().length < 1) throw new TypeError(e.messages.errorDatasetInvalidUidKey({
                        uidKey: n.config.data.uidKey
                    }));
                    if (d[g]) throw new Error(e.messages.errorDatasetDuplicateUid({
                        uid: g
                    }));
                    d[g] = !0, (l = n.cache[g]) instanceof e.Target ? (n.config.data.dirtyCheck && !i.deepEquals(r, l.data) && (c = l.render(r), l.data = r, c !== l.dom.el && (l.isInDom && (l.unbindEvents(), n.dom.parent.replaceChild(c, l.dom.el)), l.isShown || (c.style.display = "none"), l.dom.el = c, l.isInDom && l.bindEvents())), c = l.dom.el) : (l = new e.Target, l.init(null, n, r), l.hide()), l.isInDom ? (u = l.dom.el.nextElementSibling, a.push(g), h && (h.lastElementChild && h.appendChild(n.dom.document.createTextNode(" ")), n.insertDatasetFrag(h, l.dom.el, n.targets.indexOf(l), o), h = null)) : (h || (h = n.dom.document.createDocumentFragment()), h.lastElementChild && h.appendChild(n.dom.document.createTextNode(" ")), h.appendChild(l.dom.el), l.isInDom = !0, l.unbindEvents(), l.bindEvents(), l.hide(), t.toShow.push(l), o.push(l)), t.show.push(l)
                }
                for (h && (u = u || n.config.layout.siblingAfter, u && h.appendChild(n.dom.document.createTextNode(" ")), n.insertDatasetFrag(h, u, n.dom.targets.length, o)), m = 0; r = t.startDataset[m]; m++) g = r[n.config.data.uidKey], l = n.cache[g], t.show.indexOf(l) < 0 ? (t.hide.push(l), t.toHide.push(l), t.toRemove.push(l)) : s.push(g);
                i.isEqualArray(s, a) || (t.willSort = !0), n.callActions("afterDiffDatasets", arguments)
            },
            insertDatasetFrag: function(t, e, i, n) {
                var s = this;
                for (s.dom.parent.insertBefore(t, e); n.length;) s.targets.splice(i, 0, n.shift()), i++
            },
            willSort: function(t, e) {
                var i = this,
                    n = !1;
                return n = "random" === t.order || t.attribute !== e.attribute || t.order !== e.order || t.collection !== e.collection || null === t.next && e.next || t.next && null === e.next ? !0 : t.next && e.next ? i.willSort(t.next, e.next) : !1, i.callFilters("resultWillSort", n, arguments)
            },
            show: function() {
                var t = this;
                return t.filter("all")
            },
            hide: function() {
                var t = this;
                return t.filter("none")
            },
            isMixing: function() {
                var t = this;
                return t.isBusy
            },
            filter: function() {
                var t = this,
                    e = t.parseFilterArgs(arguments);
                return t.multimix({
                    filter: e.command
                }, e.animate, e.callback)
            },
            toggleOn: function() {
                var t = this,
                    e = t.parseFilterArgs(arguments),
                    i = e.command.selector,
                    n = "";
                return t.isToggling = !0, t.toggleArray.indexOf(i) < 0 && t.toggleArray.push(i), n = t.getToggleSelector(), t.multimix({
                    filter: n
                }, e.animate, e.callback)
            },
            toggleOff: function() {
                var t = this,
                    e = t.parseFilterArgs(arguments),
                    i = e.command.selector,
                    n = "";
                return t.isToggling = !0, t.toggleArray.splice(t.toggleArray.indexOf(i), 1), n = t.getToggleSelector(), t.multimix({
                    filter: n
                }, e.animate, e.callback)
            },
            sort: function() {
                var t = this,
                    e = t.parseSortArgs(arguments);
                return t.multimix({
                    sort: e.command
                }, e.animate, e.callback)
            },
            changeLayout: function() {
                var t = this,
                    e = t.parseChangeLayoutArgs(arguments);
                return t.multimix({
                    changeLayout: e.command
                }, e.animate, e.callback)
            },
            dataset: function() {
                var t = this,
                    i = t.parseDatasetArgs(arguments),
                    n = null,
                    s = null,
                    a = !1;
                return t.callActions("beforeDataset", arguments), t.isBusy ? (s = new e.QueueItem, s.args = arguments, s.instruction = i, t.queueMix(s)) : (i.callback && (t.userCallback = i.callback), a = i.animate ^ t.config.animation.enable ? i.animate : t.config.animation.enable, n = t.getDataOperation(i.command.dataset), t.goMix(a, n))
            },
            multimix: function() {
                var t = this,
                    i = null,
                    n = !1,
                    s = null,
                    a = t.parseMultimixArgs(arguments);
                return t.callActions("beforeMultimix", arguments), t.isBusy ? (s = new e.QueueItem, s.args = arguments, s.instruction = a, s.triggerElement = t.lastClicked, s.isToggling = t.isToggling, t.queueMix(s)) : (i = t.getOperation(a.command), t.config.controls.enable && (a.command.filter && !t.isToggling && (t.toggleArray.length = 0, t.buildToggleArray(i.command)), t.queue.length < 1 && t.updateControls(i.command)), a.callback && (t.userCallback = a.callback), n = a.animate ^ t.config.animation.enable ? a.animate : t.config.animation.enable, t.callFilters("operationMultimix", i, arguments), t.goMix(n, i))
            },
            getOperation: function(t) {
                var n = this,
                    s = t.sort,
                    a = t.filter,
                    o = t.changeLayout,
                    r = t.remove,
                    l = t.insert,
                    c = new e.Operation;
                return c = n.callFilters("operationUnmappedGetOperation", c, arguments), c.id = i.randomHex(), c.command = t, c.startState = n.state, c.triggerElement = n.lastClicked, n.isBusy ? (n.config.debug.showWarnings && console.warn(e.messages.warningGetOperationInstanceBusy()), null) : (l && n.insertTargets(l, c), r && (c.toRemove = r.targets), c.startSort = c.newSort = c.startState.activeSort, c.startOrder = c.newOrder = n.targets, s && (c.startSort = c.startState.activeSort, c.newSort = s, c.willSort = n.willSort(s, c.startState.activeSort), c.willSort && n.sortOperation(c)), c.startFilter = c.startState.activeFilter, a ? c.newFilter = a : c.newFilter = i.extend(new e.CommandFilter, c.startFilter), "all" === c.newFilter.selector ? c.newFilter.selector = n.config.selectors.target : "none" === c.newFilter.selector && (c.newFilter.selector = ""), n.filterOperation(c), c.startContainerClassName = c.startState.activeContainerClassName, o ? (c.newContainerClassName = o.containerClassName, c.newContainerClassName !== c.startContainerClassName && (c.willChangeLayout = !0)) : c.newContainerClassName = c.startContainerClassName, n.config.animation.enable && (n.getStartMixData(c), n.setInter(c), c.docState = i.getDocumentState(n.dom.document), n.getInterMixData(c), n.setFinal(c), n.getFinalMixData(c), n.parseEffects(), c.hasEffect = n.hasEffect(), n.getTweenData(c)), c.newState = n.buildState(c), n.callFilters("operationMappedGetOperation", c, arguments))
            },
            tween: function(t, e) {
                var i = null,
                    n = null,
                    s = -1,
                    a = -1;
                for (e = Math.min(e, 1), e = Math.max(e, 0), a = 0; i = t.show[a]; a++) n = t.showPosData[a], i.applyTween(n, e);
                for (a = 0; i = t.hide[a]; a++) i.isShown && i.hide(), (s = t.toHide.indexOf(i)) > -1 && (n = t.toHidePosData[s], i.isShown || i.show(), i.applyTween(n, e))
            },
            insert: function() {
                var t = this,
                    e = t.parseInsertArgs(arguments);
                return t.multimix({
                    insert: e.command
                }, e.animate, e.callback)
            },
            insertBefore: function() {
                var t = this,
                    e = t.parseInsertArgs(arguments);
                return t.insert(e.command.collection, "before", e.command.sibling, e.animate, e.callback)
            },
            insertAfter: function() {
                var t = this,
                    e = t.parseInsertArgs(arguments);
                return t.insert(e.command.collection, "after", e.command.sibling, e.animate, e.callback)
            },
            prepend: function() {
                var t = this,
                    e = t.parseInsertArgs(arguments);
                return t.insert(0, e.command.collection, e.animate, e.callback)
            },
            append: function() {
                var t = this,
                    e = t.parseInsertArgs(arguments);
                return t.insert(t.state.totalTargets, e.command.collection, e.animate, e.callback)
            },
            remove: function() {
                var t = this,
                    e = t.parseRemoveArgs(arguments);
                return t.multimix({
                    remove: e.command
                }, e.animate, e.callback)
            },
            getConfig: function(t) {
                var e = this,
                    n = null;
                return n = t ? i.getProperty(e.config, t) : e.config, e.callFilters("valueGetConfig", n, arguments)
            },
            configure: function(t) {
                var e = this;
                e.callActions("beforeConfigure", arguments), i.extend(e.config, t, !0, !0), e.callActions("afterConfigure", arguments)
            },
            getState: function() {
                var t = this,
                    n = null;
                return n = new e.State, i.extend(n, t.state), i.freeze(n), t.callFilters("stateGetState", n, arguments)
            },
            forceRefresh: function() {
                var t = this;
                t.indexTargets()
            },
            destroy: function(t) {
                var i = this,
                    n = null,
                    s = null,
                    a = 0;
                for (i.callActions("beforeDestroy", arguments), a = 0; n = i.controls[a]; a++) n.removeBinding(i);
                for (a = 0; s = i.targets[a]; a++) t && s.show(), s.unbindEvents();
                i.dom.container.id.match(/^MixItUp/) && i.dom.container.removeAttribute("id"), delete e.instances[i.id], i.callActions("afterDestroy", arguments)
            }
        }), e.IMoveData = function() {
            e.Base.call(this), this.callActions("beforeConstruct"), this.posIn = null, this.posOut = null, this.operation = null, this.callback = null, this.statusChange = "", this.duration = -1, this.staggerIndex = -1, this.callActions("afterConstruct"), i.seal(this)
        }, e.BaseStatic.call(e.IMoveData), e.IMoveData.prototype = Object.create(e.Base.prototype), e.IMoveData.prototype.constructor = e.IMoveData, e.TargetDom = function() {
            e.Base.call(this), this.callActions("beforeConstruct"), this.el = null, this.callActions("afterConstruct"), i.seal(this)
        }, e.BaseStatic.call(e.TargetDom), e.TargetDom.prototype = Object.create(e.Base.prototype), e.TargetDom.prototype.constructor = e.TargetDom, e.Target = function() {
            e.Base.call(this), this.callActions("beforeConstruct"), this.id = "", this.sortString = "", this.mixer = null, this.callback = null, this.isShown = !1, this.isBound = !1, this.isExcluded = !1, this.isInDom = !1, this.handler = null, this.operation = null, this.data = null, this.dom = new e.TargetDom, this.callActions("afterConstruct"), i.seal(this)
        }, e.BaseStatic.call(e.Target), e.Target.prototype = Object.create(e.Base.prototype), i.extend(e.Target.prototype, {
            constructor: e.Target,
            init: function(t, i, n) {
                var s = this,
                    a = "";
                if (s.callActions("beforeInit", arguments), s.mixer = i, t || (t = s.render(n)), s.cacheDom(t), s.bindEvents(), "none" !== s.dom.el.style.display && (s.isShown = !0), n && i.config.data.uidKey) {
                    if ("undefined" == typeof(a = n[i.config.data.uidKey]) || a.toString().length < 1) throw new TypeError(e.messages.errorDatasetInvalidUidKey({
                        uidKey: i.config.data.uidKey
                    }));
                    s.id = a, s.data = n, i.cache[a] = s
                }
                s.callActions("afterInit", arguments)
            },
            render: function(t) {
                var n = this,
                    s = null,
                    a = null,
                    o = null,
                    r = "";
                if (n.callActions("beforeRender", arguments), s = n.callFilters("renderRender", n.mixer.config.render.target, arguments), "function" != typeof s) throw new TypeError(e.messages.errorDatasetRendererNotSet());
                return r = s(t), r && "object" == typeof r && i.isElement(r) ? a = r : "string" == typeof r && (o = document.createElement("div"), o.innerHTML = r, a = o.firstElementChild), n.callFilters("elRender", a, arguments)
            },
            cacheDom: function(t) {
                var e = this;
                e.callActions("beforeCacheDom", arguments), e.dom.el = t, e.callActions("afterCacheDom", arguments)
            },
            getSortString: function(t) {
                var e = this,
                    i = e.dom.el.getAttribute("data-" + t) || "";
                e.callActions("beforeGetSortString", arguments), i = isNaN(1 * i) ? i.toLowerCase() : 1 * i, e.sortString = i, e.callActions("afterGetSortString", arguments)
            },
            show: function() {
                var t = this;
                t.callActions("beforeShow", arguments), t.isShown || (t.dom.el.style.display = "", t.isShown = !0), t.callActions("afterShow", arguments)
            },
            hide: function() {
                var t = this;
                t.callActions("beforeHide", arguments), t.isShown && (t.dom.el.style.display = "none", t.isShown = !1), t.callActions("afterHide", arguments)
            },
            move: function(t) {
                var e = this;
                e.callActions("beforeMove", arguments), e.isExcluded || e.mixer.targetsMoved++, e.applyStylesIn(t), requestAnimationFrame(function() {
                    e.applyStylesOut(t)
                }), e.callActions("afterMove", arguments)
            },
            applyTween: function(t, i) {
                var n = this,
                    s = "",
                    a = null,
                    o = t.posIn,
                    r = [],
                    l = new e.StyleData,
                    c = -1;
                for (n.callActions("beforeApplyTween", arguments), l.x = o.x, l.y = o.y, 0 === i ? n.hide() : n.isShown || n.show(), c = 0; s = e.features.TWEENABLE[c]; c++)
                    if (a = t.tweenData[s], "x" === s) {
                        if (!a) continue;
                        l.x = o.x + a * i
                    } else if ("y" === s) {
                    if (!a) continue;
                    l.y = o.y + a * i
                } else if (a instanceof e.TransformData) {
                    if (!a.value) continue;
                    l[s].value = o[s].value + a.value * i, l[s].unit = a.unit, r.push(s + "(" + l[s].value + a.unit + ")")
                } else {
                    if (!a) continue;
                    l[s] = o[s] + a * i, n.dom.el.style[s] = l[s]
                }(l.x || l.y) && r.unshift("translate(" + l.x + "px, " + l.y + "px)"), r.length && (n.dom.el.style[e.features.transformProp] = r.join(" ")), n.callActions("afterApplyTween", arguments)
            },
            applyStylesIn: function(t) {
                var i = this,
                    n = t.posIn,
                    s = 1 !== i.mixer.effectsIn.opacity,
                    a = [];
                i.callActions("beforeApplyStylesIn", arguments), a.push("translate(" + n.x + "px, " + n.y + "px)"), i.mixer.config.animation.animateResizeTargets && ("show" !== t.statusChange && (i.dom.el.style.width = n.width + "px", i.dom.el.style.height = n.height + "px"), i.dom.el.style.marginRight = n.marginRight + "px", i.dom.el.style.marginBottom = n.marginBottom + "px"), s && (i.dom.el.style.opacity = n.opacity), "show" === t.statusChange && (a = a.concat(i.mixer.transformIn)), i.dom.el.style[e.features.transformProp] = a.join(" "), i.callActions("afterApplyStylesIn", arguments)
            },
            applyStylesOut: function(t) {
                var i = this,
                    n = [],
                    s = [],
                    a = i.mixer.config.animation.animateResizeTargets,
                    o = "undefined" != typeof i.mixer.effectsIn.opacity;
                if (i.callActions("beforeApplyStylesOut", arguments), n.push(i.writeTransitionRule(e.features.transformRule, t.staggerIndex)), "none" !== t.statusChange && n.push(i.writeTransitionRule("opacity", t.staggerIndex, t.duration)), a && (n.push(i.writeTransitionRule("width", t.staggerIndex, t.duration)), n.push(i.writeTransitionRule("height", t.staggerIndex, t.duration)), n.push(i.writeTransitionRule("margin", t.staggerIndex, t.duration))), !t.callback) return i.mixer.targetsImmovable++, void(i.mixer.targetsMoved === i.mixer.targetsImmovable && i.mixer.cleanUp(t.operation));
                switch (i.operation = t.operation, i.callback = t.callback, !i.isExcluded && i.mixer.targetsBound++, i.isBound = !0, i.applyTransition(n), a && t.posOut.width > 0 && t.posOut.height > 0 && (i.dom.el.style.width = t.posOut.width + "px", i.dom.el.style.height = t.posOut.height + "px", i.dom.el.style.marginRight = t.posOut.marginRight + "px", i.dom.el.style.marginBottom = t.posOut.marginBottom + "px"), i.mixer.config.animation.nudge || "hide" !== t.statusChange || s.push("translate(" + t.posOut.x + "px, " + t.posOut.y + "px)"), t.statusChange) {
                    case "hide":
                        o && (i.dom.el.style.opacity = i.mixer.effectsOut.opacity), s = s.concat(i.mixer.transformOut);
                        break;
                    case "show":
                        o && (i.dom.el.style.opacity = 1)
                }(i.mixer.config.animation.nudge || !i.mixer.config.animation.nudge && "hide" !== t.statusChange) && s.push("translate(" + t.posOut.x + "px, " + t.posOut.y + "px)"), i.dom.el.style[e.features.transformProp] = s.join(" "), i.callActions("afterApplyStylesOut", arguments)
            },
            writeTransitionRule: function(t, e, i) {
                var n = this,
                    s = n.getDelay(e),
                    a = "";
                return a = t + " " + (i > 0 ? i : n.mixer.config.animation.duration) + "ms " + s + "ms " + ("opacity" === t ? "linear" : n.mixer.config.animation.easing), n.callFilters("ruleWriteTransitionRule", a, arguments)
            },
            getDelay: function(t) {
                var e = this,
                    i = -1;
                return "function" == typeof e.mixer.config.animation.staggerSequence && (t = e.mixer.config.animation.staggerSequence.call(e, t, e.state)), i = e.mixer.staggerDuration ? t * e.mixer.staggerDuration : 0, e.callFilters("delayGetDelay", i, arguments)
            },
            applyTransition: function(t) {
                var i = this,
                    n = t.join(", ");
                i.callActions("beforeApplyTransition", arguments), i.dom.el.style[e.features.transitionProp] = n, i.callActions("afterApplyTransition", arguments)
            },
            handleTransitionEnd: function(t) {
                var e = this,
                    i = t.propertyName,
                    n = e.mixer.config.animation.animateResizeTargets;
                e.callActions("beforeHandleTransitionEnd", arguments), e.isBound && t.target.matches(e.mixer.config.selectors.target) && (i.indexOf("transform") > -1 || i.indexOf("opacity") > -1 || n && i.indexOf("height") > -1 || n && i.indexOf("width") > -1 || n && i.indexOf("margin") > -1) && (e.callback.call(e, e.operation), e.isBound = !1, e.callback = null, e.operation = null), e.callActions("afterHandleTransitionEnd", arguments)
            },
            eventBus: function(t) {
                var e = this;
                switch (e.callActions("beforeEventBus", arguments), t.type) {
                    case "webkitTransitionEnd":
                    case "transitionend":
                        e.handleTransitionEnd(t)
                }
                e.callActions("afterEventBus", arguments)
            },
            unbindEvents: function() {
                var t = this;
                t.callActions("beforeUnbindEvents", arguments), i.off(t.dom.el, "webkitTransitionEnd", t.handler), i.off(t.dom.el, "transitionend", t.handler), t.callActions("afterUnbindEvents", arguments)
            },
            bindEvents: function() {
                var t = this,
                    n = "";
                t.callActions("beforeBindEvents", arguments), n = "webkit" === e.features.transitionPrefix ? "webkitTransitionEnd" : "transitionend", t.handler = function(e) {
                    return t.eventBus(e)
                }, i.on(t.dom.el, n, t.handler), t.callActions("afterBindEvents", arguments)
            },
            getPosData: function(i) {
                var n = this,
                    s = {},
                    a = null,
                    o = new e.StyleData;
                return n.callActions("beforeGetPosData", arguments), o.x = n.dom.el.offsetLeft, o.y = n.dom.el.offsetTop, (n.mixer.config.animation.animateResizeTargets || i) && (a = n.dom.el.getBoundingClientRect(), o.top = a.top, o.right = a.right, o.bottom = a.bottom, o.left = a.left, o.width = a.width, o.height = a.height), n.mixer.config.animation.animateResizeTargets && (s = t.getComputedStyle(n.dom.el), o.marginBottom = parseFloat(s.marginBottom), o.marginRight = parseFloat(s.marginRight)), n.callFilters("posDataGetPosData", o, arguments)
            },
            cleanUp: function() {
                var t = this;
                t.callActions("beforeCleanUp", arguments), t.dom.el.style[e.features.transformProp] = "", t.dom.el.style[e.features.transitionProp] = "", t.dom.el.style.opacity = "", t.mixer.config.animation.animateResizeTargets && (t.dom.el.style.width = "", t.dom.el.style.height = "", t.dom.el.style.marginRight = "", t.dom.el.style.marginBottom = ""), t.callActions("afterCleanUp", arguments)
            }
        }), e.Collection = function(t) {
            var e = null,
                n = -1;
            for (this.callActions("beforeConstruct"), n = 0; e = t[n]; n++) this[n] = e;
            this.length = t.length, this.callActions("afterConstruct"), i.freeze(this)
        }, e.BaseStatic.call(e.Collection), e.Collection.prototype = Object.create(e.Base.prototype), i.extend(e.Collection.prototype, {
            constructor: e.Collection,
            mixitup: function(t) {
                var n = this,
                    s = null,
                    a = Array.prototype.slice.call(arguments),
                    o = [],
                    r = -1;
                for (this.callActions("beforeMixitup"), a.shift(), r = 0; s = n[r]; r++) o.push(s[t].apply(s, a));
                return n.callFilters("promiseMixitup", i.all(o, e.libraries), arguments)
            }
        }), e.Operation = function() {
            e.Base.call(this), this.callActions("beforeConstruct"), this.id = "", this.args = [], this.command = null, this.showPosData = [], this.toHidePosData = [], this.startState = null, this.newState = null, this.docState = null, this.willSort = !1, this.willChangeLayout = !1, this.hasEffect = !1, this.hasFailed = !1, this.triggerElement = null, this.show = [], this.hide = [], this.matching = [], this.toShow = [], this.toHide = [], this.toMove = [], this.toRemove = [], this.startOrder = [], this.newOrder = [], this.startSort = null, this.newSort = null, this.startFilter = null, this.newFilter = null, this.startDataset = null, this.newDataset = null, this.startX = 0, this.startY = 0, this.startHeight = 0, this.startWidth = 0, this.newX = 0, this.newY = 0, this.newHeight = 0, this.newWidth = 0, this.startContainerClassName = "", this.startDisplay = "", this.newContainerClassName = "", this.newDisplay = "", this.callActions("afterConstruct"), i.seal(this)
        }, e.BaseStatic.call(e.Operation), e.Operation.prototype = Object.create(e.Base.prototype), e.Operation.prototype.constructor = e.Operation, e.State = function() {
            e.Base.call(this), this.callActions("beforeConstruct"), this.id = "", this.activeFilter = null, this.activeSort = null, this.activeContainerClassName = "", this.container = null, this.targets = [], this.hide = [], this.show = [], this.matching = [], this.totalTargets = -1, this.totalShow = -1, this.totalHide = -1, this.totalMatching = -1, this.hasFailed = !1, this.triggerElement = null, this.activeDataset = null, this.callActions("afterConstruct"), i.seal(this)
        }, e.BaseStatic.call(e.State), e.State.prototype = Object.create(e.Base.prototype), e.State.prototype.constructor = e.State, e.UserInstruction = function() {
            e.Base.call(this), this.callActions("beforeConstruct"), this.command = {}, this.animate = !1, this.callback = null, this.callActions("afterConstruct"), i.seal(this)
        }, e.BaseStatic.call(e.UserInstruction), e.UserInstruction.prototype = Object.create(e.Base.prototype), e.UserInstruction.prototype.constructor = e.UserInstruction, e.Messages = function() {
            e.Base.call(this), this.callActions("beforeConstruct"), this.ERROR_FACTORY_INVALID_CONTAINER = "[MixItUp] An invalid selector or element reference was passed to the mixitup factory function", this.ERROR_FACTORY_CONTAINER_NOT_FOUND = "[MixItUp] The provided selector yielded no container element", this.ERROR_CONFIG_INVALID_ANIMATION_EFFECTS = "[MixItUp] Invalid value for `animation.effects`", this.ERROR_CONFIG_INVALID_CONTROLS_SCOPE = "[MixItUp] Invalid value for `controls.scope`", this.ERROR_CONFIG_INVALID_PROPERTY = '[MixitUp] Invalid configuration object property "${erroneous}"${suggestion}', this.ERROR_CONFIG_INVALID_PROPERTY_SUGGESTION = '. Did you mean "${probableMatch}"?', this.ERROR_CONFIG_DATA_UID_KEY_NOT_SET = "[MixItUp] To use the dataset API, a UID key must be specified using `data.uidKey`", this.ERROR_DATASET_INVALID_UID_KEY = '[MixItUp] The specified UID key "${uidKey}" is not present on one or more dataset items', this.ERROR_DATASET_DUPLICATE_UID = '[MixItUp] The UID "${uid}" was found on two or more dataset items. UIDs must be unique.', this.ERROR_INSERT_INVALID_ARGUMENTS = "[MixItUp] Please provider either an index or a sibling and position to insert, not both", this.ERROR_INSERT_PREEXISTING_ELEMENT = "[MixItUp] An element to be inserted already exists in the container", this.ERROR_FILTER_INVALID_ARGUMENTS = "[MixItUp] Please provide either a selector or collection `.filter()`, not both", this.ERROR_DATASET_NOT_SET = "[MixItUp] To use the dataset API with pre-rendered targets, a starting dataset must be set using `load.dataset`", this.ERROR_DATASET_PRERENDERED_MISMATCH = "[MixItUp] `load.dataset` does not match pre-rendered targets", this.ERROR_DATASET_RENDERER_NOT_SET = "[MixItUp] To insert an element via the dataset API, a target renderer function must be provided to `render.target`", this.WARNING_FACTORY_PREEXISTING_INSTANCE = "[MixItUp] WARNING: This element already has an active MixItUp instance. The provided configuration object will be ignored. If you wish to perform additional methods on this instance, please create a reference.", this.WARNING_INSERT_NO_ELEMENTS = "[MixItUp] WARNING: No valid elements were passed to `.insert()`", this.WARNING_REMOVE_NO_ELEMENTS = "[MixItUp] WARNING: No valid elements were passed to `.remove()`", this.WARNING_MULTIMIX_INSTANCE_QUEUE_FULL = "[MixItUp] WARNING: An operation was requested but the MixItUp instance was busy. The operation was rejected because the queue is full or queuing is disabled.", this.WARNING_GET_OPERATION_INSTANCE_BUSY = "[MixItUp] WARNING: Operations can be be created while the MixItUp instance is busy.", this.WARNING_NO_PROMISE_IMPLEMENTATION = "[MixItUp] WARNING: No Promise implementations could be found. If you wish to use promises with MixItUp please install an ES6 Promise polyfill.", this.WARNING_INCONSISTENT_SORTING_ATTRIBUTES = '[MixItUp] WARNING: The requested sorting data attribute "${attribute}" was not present on one or more target elements which may product unexpected sort output', this.callActions("afterConstruct"), this.compileTemplates(), i.seal(this)
        }, e.BaseStatic.call(e.Messages), e.Messages.prototype = Object.create(e.Base.prototype), e.Messages.prototype.constructor = e.Messages, e.Messages.prototype.compileTemplates = function() {
            var t = "",
                e = "";
            for (t in this) "string" == typeof(e = this[t]) && (this[i.camelCase(t)] = i.template(e))
        }, e.messages = new e.Messages, e.Facade = function(t) {
            e.Base.call(this), this.callActions("beforeConstruct", arguments), this.configure = t.configure.bind(t), this.show = t.show.bind(t), this.hide = t.hide.bind(t), this.filter = t.filter.bind(t), this.toggleOn = t.toggleOn.bind(t), this.toggleOff = t.toggleOff.bind(t), this.sort = t.sort.bind(t), this.changeLayout = t.changeLayout.bind(t), this.multimix = t.multimix.bind(t), this.multiMix = t.multimix.bind(t), this.dataset = t.dataset.bind(t), this.tween = t.tween.bind(t), this.insert = t.insert.bind(t), this.insertBefore = t.insertBefore.bind(t), this.insertAfter = t.insertAfter.bind(t), this.prepend = t.prepend.bind(t), this.append = t.append.bind(t), this.remove = t.remove.bind(t), this.destroy = t.destroy.bind(t), this.forceRefresh = t.forceRefresh.bind(t), this.isMixing = t.isMixing.bind(t), this.getOperation = t.getOperation.bind(t), this.getConfig = t.getConfig.bind(t), this.getState = t.getState.bind(t), this.callActions("afterConstruct", arguments), i.freeze(this), i.seal(this)
        }, e.BaseStatic.call(e.Facade), e.Facade.prototype = Object.create(e.Base.prototype), e.Facade.prototype.constructor = e.Facade, "object" == typeof exports && "object" == typeof module ? module.exports = e : "function" == typeof define && define.amd ? define(function() {
            return e
        }) : ("undefined" == typeof t.mixitup || "function" != typeof t.mixitup) && (t.mixitup = t.mixItUp = e), (n = t.$ || t.jQuery) && n.fn.jquery && e.registerJqPlugin(n), e.BaseStatic.call(e.constructor), e.NAME = "mixitup", e.CORE_VERSION = "3.1.10"
    }(window),
    function(t, e, i, n) {
        function s(e, i) {
            this.settings = null, this.options = t.extend({}, s.Defaults, i), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
                time: null,
                target: null,
                pointer: null,
                stage: {
                    start: null,
                    current: null
                },
                direction: null
            }, this._states = {
                current: {},
                tags: {
                    initializing: ["busy"],
                    animating: ["busy"],
                    dragging: ["interacting"]
                }
            }, t.each(["onResize", "onThrottledResize"], t.proxy(function(e, i) {
                this._handlers[i] = t.proxy(this[i], this)
            }, this)), t.each(s.Plugins, t.proxy(function(t, e) {
                this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
            }, this)), t.each(s.Workers, t.proxy(function(e, i) {
                this._pipe.push({
                    filter: i.filter,
                    run: t.proxy(i.run, this)
                })
            }, this)), this.setup(), this.initialize()
        }
        s.Defaults = {
            items: 3,
            loop: !1,
            center: !1,
            rewind: !1,
            mouseDrag: !0,
            touchDrag: !0,
            pullDrag: !0,
            freeDrag: !1,
            margin: 0,
            stagePadding: 0,
            merge: !1,
            mergeFit: !0,
            autoWidth: !1,
            startPosition: 0,
            rtl: !1,
            smartSpeed: 250,
            fluidSpeed: !1,
            dragEndSpeed: !1,
            responsive: {},
            responsiveRefreshRate: 200,
            responsiveBaseElement: e,
            fallbackEasing: "swing",
            info: !1,
            nestedItemSelector: !1,
            itemElement: "div",
            stageElement: "div",
            refreshClass: "owl-refresh",
            loadedClass: "owl-loaded",
            loadingClass: "owl-loading",
            rtlClass: "owl-rtl",
            responsiveClass: "owl-responsive",
            dragClass: "owl-drag",
            itemClass: "owl-item",
            stageClass: "owl-stage",
            stageOuterClass: "owl-stage-outer",
            grabClass: "owl-grab"
        }, s.Width = {
            Default: "default",
            Inner: "inner",
            Outer: "outer"
        }, s.Type = {
            Event: "event",
            State: "state"
        }, s.Plugins = {}, s.Workers = [{
            filter: ["width", "settings"],
            run: function() {
                this._width = this.$element.width()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                t.current = this._items && this._items[this.relative(this._current)]
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                this.$stage.children(".cloned").remove()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                var e = this.settings.margin || "",
                    i = !this.settings.autoWidth,
                    n = this.settings.rtl,
                    s = {
                        width: "auto",
                        "margin-left": n ? e : "",
                        "margin-right": n ? "" : e
                    };
                !i && this.$stage.children().css(s), t.css = s
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                    i = null,
                    n = this._items.length,
                    s = !this.settings.autoWidth,
                    a = [];
                for (t.items = {
                        merge: !1,
                        width: e
                    }; n--;) i = this._mergers[n], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, t.items.merge = i > 1 || t.items.merge, a[n] = s ? e * i : this._items[n].width();
                this._widths = a
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                var e = [],
                    i = this._items,
                    n = this.settings,
                    s = Math.max(2 * n.items, 4),
                    a = 2 * Math.ceil(i.length / 2),
                    o = n.loop && i.length ? n.rewind ? s : Math.max(s, a) : 0,
                    r = "",
                    l = "";
                for (o /= 2; o--;) e.push(this.normalize(e.length / 2, !0)), r += i[e[e.length - 1]][0].outerHTML, e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)), l = i[e[e.length - 1]][0].outerHTML + l;
                this._clones = e, t(r).addClass("cloned").appendTo(this.$stage), t(l).addClass("cloned").prependTo(this.$stage)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, n = 0, s = 0, a = []; ++i < e;) n = a[i - 1] || 0, s = this._widths[this.relative(i)] + this.settings.margin, a.push(n + s * t);
                this._coordinates = a
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                var t = this.settings.stagePadding,
                    e = this._coordinates,
                    i = {
                        width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                        "padding-left": t || "",
                        "padding-right": t || ""
                    };
                this.$stage.css(i)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                var e = this._coordinates.length,
                    i = !this.settings.autoWidth,
                    n = this.$stage.children();
                if (i && t.items.merge)
                    for (; e--;) t.css.width = this._widths[this.relative(e)], n.eq(e).css(t.css);
                else i && (t.css.width = t.items.width, n.css(t.css))
            }
        }, {
            filter: ["items"],
            run: function() {
                this._coordinates.length < 1 && this.$stage.removeAttr("style")
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
            }
        }, {
            filter: ["position"],
            run: function() {
                this.animate(this.coordinates(this._current))
            }
        }, {
            filter: ["width", "position", "items", "settings"],
            run: function() {
                var t, e, i, n, s = this.settings.rtl ? 1 : -1,
                    a = 2 * this.settings.stagePadding,
                    o = this.coordinates(this.current()) + a,
                    r = o + this.width() * s,
                    l = [];
                for (i = 0, n = this._coordinates.length; n > i; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + a * s, (this.op(t, "<=", o) && this.op(t, ">", r) || this.op(e, "<", o) && this.op(e, ">", r)) && l.push(i);
                this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
            }
        }], s.prototype.initialize = function() {
            if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
                var e, i, s;
                e = this.$element.find("img"), i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : n, s = this.$element.children(i).width(), e.length && 0 >= s && this.preloadAutoWidthImages(e)
            }
            this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
        }, s.prototype.setup = function() {
            var e = this.viewport(),
                i = this.options.responsive,
                n = -1,
                s = null;
            i ? (t.each(i, function(t) {
                    e >= t && t > n && (n = Number(t))
                }), s = t.extend({}, this.options, i[n]), "function" == typeof s.stagePadding && (s.stagePadding = s.stagePadding()),
                delete s.responsive, s.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + n))) : s = t.extend({}, this.options), this.trigger("change", {
                property: {
                    name: "settings",
                    value: s
                }
            }), this._breakpoint = n, this.settings = s, this.invalidate("settings"), this.trigger("changed", {
                property: {
                    name: "settings",
                    value: this.settings
                }
            })
        }, s.prototype.optionsLogic = function() {
            this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
        }, s.prototype.prepare = function(e) {
            var i = this.trigger("prepare", {
                content: e
            });
            return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {
                content: i.data
            }), i.data
        }, s.prototype.update = function() {
            for (var e = 0, i = this._pipe.length, n = t.proxy(function(t) {
                    return this[t]
                }, this._invalidated), s = {}; i > e;)(this._invalidated.all || t.grep(this._pipe[e].filter, n).length > 0) && this._pipe[e].run(s), e++;
            this._invalidated = {}, !this.is("valid") && this.enter("valid")
        }, s.prototype.width = function(t) {
            switch (t = t || s.Width.Default) {
                case s.Width.Inner:
                case s.Width.Outer:
                    return this._width;
                default:
                    return this._width - 2 * this.settings.stagePadding + this.settings.margin
            }
        }, s.prototype.refresh = function() {
            this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
        }, s.prototype.onThrottledResize = function() {
            e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
        }, s.prototype.onResize = function() {
            return this._items.length ? this._width === this.$element.width() ? !1 : this.$element.is(":visible") ? (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized"))) : !1 : !1
        }, s.prototype.registerEventHandlers = function() {
            t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(e, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
                return !1
            })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)))
        }, s.prototype.onDragStart = function(e) {
            var n = null;
            3 !== e.which && (t.support.transform ? (n = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), n = {
                x: n[16 === n.length ? 12 : 4],
                y: n[16 === n.length ? 13 : 5]
            }) : (n = this.$stage.position(), n = {
                x: this.settings.rtl ? n.left + this.$stage.width() - this.width() + this.settings.margin : n.left,
                y: n.top
            }), this.is("animating") && (t.support.transform ? this.animate(n.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = t(e.target), this._drag.stage.start = n, this._drag.stage.current = n, this._drag.pointer = this.pointer(e), t(i).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(i).one("mousemove.owl.core touchmove.owl.core", t.proxy(function(e) {
                var n = this.difference(this._drag.pointer, this.pointer(e));
                t(i).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(n.x) < Math.abs(n.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
            }, this)))
        }, s.prototype.onDragMove = function(t) {
            var e = null,
                i = null,
                n = null,
                s = this.difference(this._drag.pointer, this.pointer(t)),
                a = this.difference(this._drag.stage.start, s);
            this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - e, a.x = ((a.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), n = this.settings.pullDrag ? -1 * s.x / 5 : 0, a.x = Math.max(Math.min(a.x, e + n), i + n)), this._drag.stage.current = a, this.animate(a.x))
        }, s.prototype.onDragEnd = function(e) {
            var n = this.difference(this._drag.pointer, this.pointer(e)),
                s = this._drag.stage.current,
                a = n.x > 0 ^ this.settings.rtl ? "left" : "right";
            t(i).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== n.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(s.x, 0 !== n.x ? a : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = a, (Math.abs(n.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
                return !1
            })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
        }, s.prototype.closest = function(e, i) {
            var n = -1,
                s = 30,
                a = this.width(),
                o = this.coordinates();
            return this.settings.freeDrag || t.each(o, t.proxy(function(t, r) {
                return "left" === i && e > r - s && r + s > e ? n = t : "right" === i && e > r - a - s && r - a + s > e ? n = t + 1 : this.op(e, "<", r) && this.op(e, ">", o[t + 1] || r - a) && (n = "left" === i ? t + 1 : t), -1 === n
            }, this)), this.settings.loop || (this.op(e, ">", o[this.minimum()]) ? n = e = this.minimum() : this.op(e, "<", o[this.maximum()]) && (n = e = this.maximum())), n
        }, s.prototype.animate = function(e) {
            var i = this.speed() > 0;
            this.is("animating") && this.onTransitionEnd(), i && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({
                transform: "translate3d(" + e + "px,0px,0px)",
                transition: this.speed() / 1e3 + "s"
            }) : i ? this.$stage.animate({
                left: e + "px"
            }, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({
                left: e + "px"
            })
        }, s.prototype.is = function(t) {
            return this._states.current[t] && this._states.current[t] > 0
        }, s.prototype.current = function(t) {
            if (t === n) return this._current;
            if (0 === this._items.length) return n;
            if (t = this.normalize(t), this._current !== t) {
                var e = this.trigger("change", {
                    property: {
                        name: "position",
                        value: t
                    }
                });
                e.data !== n && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                    property: {
                        name: "position",
                        value: this._current
                    }
                })
            }
            return this._current
        }, s.prototype.invalidate = function(e) {
            return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, function(t, e) {
                return e
            })
        }, s.prototype.reset = function(t) {
            t = this.normalize(t), t !== n && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
        }, s.prototype.normalize = function(t, e) {
            var i = this._items.length,
                s = e ? 0 : this._clones.length;
            return !this.isNumeric(t) || 1 > i ? t = n : (0 > t || t >= i + s) && (t = ((t - s / 2) % i + i) % i + s / 2), t
        }, s.prototype.relative = function(t) {
            return t -= this._clones.length / 2, this.normalize(t, !0)
        }, s.prototype.maximum = function(t) {
            var e, i, n, s = this.settings,
                a = this._coordinates.length;
            if (s.loop) a = this._clones.length / 2 + this._items.length - 1;
            else if (s.autoWidth || s.merge) {
                for (e = this._items.length, i = this._items[--e].width(), n = this.$element.width(); e-- && (i += this._items[e].width() + this.settings.margin, !(i > n)););
                a = e + 1
            } else a = s.center ? this._items.length - 1 : this._items.length - s.items;
            return t && (a -= this._clones.length / 2), Math.max(a, 0)
        }, s.prototype.minimum = function(t) {
            return t ? 0 : this._clones.length / 2
        }, s.prototype.items = function(t) {
            return t === n ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
        }, s.prototype.mergers = function(t) {
            return t === n ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
        }, s.prototype.clones = function(e) {
            var i = this._clones.length / 2,
                s = i + this._items.length,
                a = function(t) {
                    return t % 2 === 0 ? s + t / 2 : i - (t + 1) / 2
                };
            return e === n ? t.map(this._clones, function(t, e) {
                return a(e)
            }) : t.map(this._clones, function(t, i) {
                return t === e ? a(i) : null
            })
        }, s.prototype.speed = function(t) {
            return t !== n && (this._speed = t), this._speed
        }, s.prototype.coordinates = function(e) {
            var i, s = 1,
                a = e - 1;
            return e === n ? t.map(this._coordinates, t.proxy(function(t, e) {
                return this.coordinates(e)
            }, this)) : (this.settings.center ? (this.settings.rtl && (s = -1, a = e + 1), i = this._coordinates[e], i += (this.width() - i + (this._coordinates[a] || 0)) / 2 * s) : i = this._coordinates[a] || 0, i = Math.ceil(i))
        }, s.prototype.duration = function(t, e, i) {
            return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
        }, s.prototype.to = function(t, e) {
            var i = this.current(),
                n = null,
                s = t - this.relative(i),
                a = (s > 0) - (0 > s),
                o = this._items.length,
                r = this.minimum(),
                l = this.maximum();
            this.settings.loop ? (!this.settings.rewind && Math.abs(s) > o / 2 && (s += -1 * a * o), t = i + s, n = ((t - r) % o + o) % o + r, n !== t && l >= n - s && n - s > 0 && (i = n - s, t = n, this.reset(i))) : this.settings.rewind ? (l += 1, t = (t % l + l) % l) : t = Math.max(r, Math.min(l, t)), this.speed(this.duration(i, t, e)), this.current(t), this.$element.is(":visible") && this.update()
        }, s.prototype.next = function(t) {
            t = t || !1, this.to(this.relative(this.current()) + 1, t)
        }, s.prototype.prev = function(t) {
            t = t || !1, this.to(this.relative(this.current()) - 1, t)
        }, s.prototype.onTransitionEnd = function(t) {
            return t !== n && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0)) ? !1 : (this.leave("animating"), void this.trigger("translated"))
        }, s.prototype.viewport = function() {
            var n;
            return this.options.responsiveBaseElement !== e ? n = t(this.options.responsiveBaseElement).width() : e.innerWidth ? n = e.innerWidth : i.documentElement && i.documentElement.clientWidth ? n = i.documentElement.clientWidth : console.warn("Can not detect viewport width."), n
        }, s.prototype.replace = function(e) {
            this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function() {
                return 1 === this.nodeType
            }).each(t.proxy(function(t, e) {
                e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
            }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
        }, s.prototype.add = function(e, i) {
            var s = this.relative(this._current);
            i = i === n ? this._items.length : this.normalize(i, !0), e = e instanceof jQuery ? e : t(e), this.trigger("add", {
                content: e,
                position: i
            }), e = this.prepare(e), 0 === this._items.length || i === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[i - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[i].before(e), this._items.splice(i, 0, e), this._mergers.splice(i, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[s] && this.reset(this._items[s].index()), this.invalidate("items"), this.trigger("added", {
                content: e,
                position: i
            })
        }, s.prototype.remove = function(t) {
            t = this.normalize(t, !0), t !== n && (this.trigger("remove", {
                content: this._items[t],
                position: t
            }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
                content: null,
                position: t
            }))
        }, s.prototype.preloadAutoWidthImages = function(e) {
            e.each(t.proxy(function(e, i) {
                this.enter("pre-loading"), i = t(i), t(new Image).one("load", t.proxy(function(t) {
                    i.attr("src", t.target.src), i.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
                }, this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"))
            }, this))
        }, s.prototype.destroy = function() {
            this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(i).off(".owl.core"), this.settings.responsive !== !1 && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize));
            for (var n in this._plugins) this._plugins[n].destroy();
            this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
        }, s.prototype.op = function(t, e, i) {
            var n = this.settings.rtl;
            switch (e) {
                case "<":
                    return n ? t > i : i > t;
                case ">":
                    return n ? i > t : t > i;
                case ">=":
                    return n ? i >= t : t >= i;
                case "<=":
                    return n ? t >= i : i >= t
            }
        }, s.prototype.on = function(t, e, i, n) {
            t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i)
        }, s.prototype.off = function(t, e, i, n) {
            t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i)
        }, s.prototype.trigger = function(e, i, n, a, o) {
            var r = {
                    item: {
                        count: this._items.length,
                        index: this.current()
                    }
                },
                l = t.camelCase(t.grep(["on", e, n], function(t) {
                    return t
                }).join("-").toLowerCase()),
                c = t.Event([e, "owl", n || "carousel"].join(".").toLowerCase(), t.extend({
                    relatedTarget: this
                }, r, i));
            return this._supress[e] || (t.each(this._plugins, function(t, e) {
                e.onTrigger && e.onTrigger(c)
            }), this.register({
                type: s.Type.Event,
                name: e
            }), this.$element.trigger(c), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, c)), c
        }, s.prototype.enter = function(e) {
            t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) {
                this._states.current[e] === n && (this._states.current[e] = 0), this._states.current[e]++
            }, this))
        }, s.prototype.leave = function(e) {
            t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) {
                this._states.current[e]--
            }, this))
        }, s.prototype.register = function(e) {
            if (e.type === s.Type.Event) {
                if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
                    var i = t.event.special[e.name]._default;
                    t.event.special[e.name]._default = function(t) {
                        return !i || !i.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && t.namespace.indexOf("owl") > -1 : i.apply(this, arguments)
                    }, t.event.special[e.name].owl = !0
                }
            } else e.type === s.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy(function(i, n) {
                return t.inArray(i, this._states.tags[e.name]) === n
            }, this)))
        }, s.prototype.suppress = function(e) {
            t.each(e, t.proxy(function(t, e) {
                this._supress[e] = !0
            }, this))
        }, s.prototype.release = function(e) {
            t.each(e, t.proxy(function(t, e) {
                delete this._supress[e]
            }, this))
        }, s.prototype.pointer = function(t) {
            var i = {
                x: null,
                y: null
            };
            return t = t.originalEvent || t || e.event, t = t.touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t, t.pageX ? (i.x = t.pageX, i.y = t.pageY) : (i.x = t.clientX, i.y = t.clientY), i
        }, s.prototype.isNumeric = function(t) {
            return !isNaN(parseFloat(t))
        }, s.prototype.difference = function(t, e) {
            return {
                x: t.x - e.x,
                y: t.y - e.y
            }
        }, t.fn.owlCarousel = function(e) {
            var i = Array.prototype.slice.call(arguments, 1);
            return this.each(function() {
                var n = t(this),
                    a = n.data("owl.carousel");
                a || (a = new s(this, "object" == typeof e && e), n.data("owl.carousel", a), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(e, i) {
                    a.register({
                        type: s.Type.Event,
                        name: i
                    }), a.$element.on(i + ".owl.carousel.core", t.proxy(function(t) {
                        t.namespace && t.relatedTarget !== this && (this.suppress([i]), a[i].apply(this, [].slice.call(arguments, 1)), this.release([i]))
                    }, a))
                })), "string" == typeof e && "_" !== e.charAt(0) && a[e].apply(a, i)
            })
        }, t.fn.owlCarousel.Constructor = s
    }





    (window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        var s = function(e) {
            this._core = e, this._interval = null, this._visible = null, this._handlers = {
                "initialized.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.autoRefresh && this.watch()
                }, this)
            }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        s.Defaults = {
            autoRefresh: !0,
            autoRefreshInterval: 500
        }, s.prototype.watch = function() {
            this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
        }, s.prototype.refresh = function() {
            this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
        }, s.prototype.destroy = function() {
            var t, i;
            e.clearInterval(this._interval);
            for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = s
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        var s = function(e) {
            this._core = e, this._loaded = [], this._handlers = {
                "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(function(e) {
                    if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))
                        for (var i = this._core.settings, s = i.center && Math.ceil(i.items / 2) || i.items, a = i.center && -1 * s || 0, o = (e.property && e.property.value !== n ? e.property.value : this._core.current()) + a, r = this._core.clones().length, l = t.proxy(function(t, e) {
                                this.load(e)
                            }, this); a++ < s;) this.load(r / 2 + this._core.relative(o)), r && t.each(this._core.clones(this._core.relative(o)), l), o++
                }, this)
            }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        s.Defaults = {
            lazyLoad: !1
        }, s.prototype.load = function(i) {
            var n = this._core.$stage.children().eq(i),
                s = n && n.find(".owl-lazy");
            !s || t.inArray(n.get(0), this._loaded) > -1 || (s.each(t.proxy(function(i, n) {
                var s, a = t(n),
                    o = e.devicePixelRatio > 1 && a.attr("data-src-retina") || a.attr("data-src");
                this._core.trigger("load", {
                    element: a,
                    url: o
                }, "lazy"), a.is("img") ? a.one("load.owl.lazy", t.proxy(function() {
                    a.css("opacity", 1), this._core.trigger("loaded", {
                        element: a,
                        url: o
                    }, "lazy")
                }, this)).attr("src", o) : (s = new Image, s.onload = t.proxy(function() {
                    a.css({
                        "background-image": 'url("' + o + '")',
                        opacity: "1"
                    }), this._core.trigger("loaded", {
                        element: a,
                        url: o
                    }, "lazy")
                }, this), s.src = o)
            }, this)), this._loaded.push(n.get(0)))
        }, s.prototype.destroy = function() {
            var t, e;
            for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Lazy = s
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        var s = function(e) {
            this._core = e, this._handlers = {
                "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.autoHeight && this.update()
                }, this),
                "changed.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.autoHeight && "position" == t.property.name && this.update()
                }, this),
                "loaded.owl.lazy": t.proxy(function(t) {
                    t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
                }, this)
            }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        s.Defaults = {
            autoHeight: !1,
            autoHeightClass: "owl-height"
        }, s.prototype.update = function() {
            var e = this._core._current,
                i = e + this._core.settings.items,
                n = this._core.$stage.children().toArray().slice(e, i),
                s = [],
                a = 0;
            t.each(n, function(e, i) {
                s.push(t(i).height())
            }), a = Math.max.apply(null, s), this._core.$stage.parent().height(a).addClass(this._core.settings.autoHeightClass)
        }, s.prototype.destroy = function() {
            var t, e;
            for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = s
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        var s = function(e) {
            this._core = e, this._videos = {}, this._playing = null, this._handlers = {
                "initialized.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.register({
                        type: "state",
                        name: "playing",
                        tags: ["interacting"]
                    })
                }, this),
                "resize.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
                }, this),
                "refreshed.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
                }, this),
                "changed.owl.carousel": t.proxy(function(t) {
                    t.namespace && "position" === t.property.name && this._playing && this.stop()
                }, this),
                "prepared.owl.carousel": t.proxy(function(e) {
                    if (e.namespace) {
                        var i = t(e.content).find(".owl-video");
                        i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
                    }
                }, this)
            }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function(t) {
                this.play(t)
            }, this))
        };
        s.Defaults = {
            video: !1,
            videoHeight: !1,
            videoWidth: !1
        }, s.prototype.fetch = function(t, e) {
            var i = function() {
                    return t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube"
                }(),
                n = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
                s = t.attr("data-width") || this._core.settings.videoWidth,
                a = t.attr("data-height") || this._core.settings.videoHeight,
                o = t.attr("href");
            if (!o) throw new Error("Missing video URL.");
            if (n = o.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), n[3].indexOf("youtu") > -1) i = "youtube";
            else if (n[3].indexOf("vimeo") > -1) i = "vimeo";
            else {
                if (!(n[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
                i = "vzaar"
            }
            n = n[6], this._videos[o] = {
                type: i,
                id: n,
                width: s,
                height: a
            }, e.attr("data-video", o), this.thumbnail(t, this._videos[o])
        }, s.prototype.thumbnail = function(e, i) {
            var n, s, a, o = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "",
                r = e.find("img"),
                l = "src",
                c = "",
                h = this._core.settings,
                u = function(t) {
                    s = '<div class="owl-video-play-icon"></div>', n = h.lazyLoad ? '<div class="owl-video-tn ' + c + '" ' + l + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(n), e.after(s)
                };
            return e.wrap('<div class="owl-video-wrapper"' + o + "></div>"), this._core.settings.lazyLoad && (l = "data-src", c = "owl-lazy"), r.length ? (u(r.attr(l)), r.remove(), !1) : void("youtube" === i.type ? (a = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg", u(a)) : "vimeo" === i.type ? t.ajax({
                type: "GET",
                url: "//vimeo.com/api/v2/video/" + i.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function(t) {
                    a = t[0].thumbnail_large, u(a)
                }
            }) : "vzaar" === i.type && t.ajax({
                type: "GET",
                url: "//vzaar.com/api/videos/" + i.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function(t) {
                    a = t.framegrab_url, u(a)
                }
            }))
        }, s.prototype.stop = function() {
            this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
        }, s.prototype.play = function(e) {
            var i, n = t(e.target),
                s = n.closest("." + this._core.settings.itemClass),
                a = this._videos[s.attr("data-video")],
                o = a.width || "100%",
                r = a.height || this._core.$stage.height();
            this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), s = this._core.items(this._core.relative(s.index())), this._core.reset(s.index()), "youtube" === a.type ? i = '<iframe width="' + o + '" height="' + r + '" src="//www.youtube.com/embed/' + a.id + "?autoplay=1&rel=0&v=" + a.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === a.type ? i = '<iframe src="//player.vimeo.com/video/' + a.id + '?autoplay=1" width="' + o + '" height="' + r + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === a.type && (i = '<iframe frameborder="0"height="' + r + '"width="' + o + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + a.id + '/player?autoplay=true"></iframe>'), t('<div class="owl-video-frame">' + i + "</div>").insertAfter(s.find(".owl-video")), this._playing = s.addClass("owl-video-playing"))
        }, s.prototype.isInFullScreen = function() {
            var e = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
            return e && t(e).parent().hasClass("owl-video-frame")
        }, s.prototype.destroy = function() {
            var t, e;
            this._core.$element.off("click.owl.video");
            for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Video = s
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        var s = function(e) {
            this.core = e, this.core.options = t.extend({}, s.Defaults, this.core.options), this.swapping = !0, this.previous = n, this.next = n, this.handlers = {
                "change.owl.carousel": t.proxy(function(t) {
                    t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
                }, this),
                "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function(t) {
                    t.namespace && (this.swapping = "translated" == t.type)
                }, this),
                "translate.owl.carousel": t.proxy(function(t) {
                    t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
                }, this)
            }, this.core.$element.on(this.handlers)
        };
        s.Defaults = {
            animateOut: !1,
            animateIn: !1
        }, s.prototype.swap = function() {
            if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
                this.core.speed(0);
                var e, i = t.proxy(this.clear, this),
                    n = this.core.$stage.children().eq(this.previous),
                    s = this.core.$stage.children().eq(this.next),
                    a = this.core.settings.animateIn,
                    o = this.core.settings.animateOut;
                this.core.current() !== this.previous && (o && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), n.one(t.support.animation.end, i).css({
                    left: e + "px"
                }).addClass("animated owl-animated-out").addClass(o)), a && s.one(t.support.animation.end, i).addClass("animated owl-animated-in").addClass(a))
            }
        }, s.prototype.clear = function(e) {
            t(e.target).css({
                left: ""
            }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
        }, s.prototype.destroy = function() {
            var t, e;
            for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Animate = s
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        var s = function(e) {
            this._core = e, this._timeout = null, this._paused = !1, this._handlers = {
                "changed.owl.carousel": t.proxy(function(t) {
                    t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
                }, this),
                "initialized.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.autoplay && this.play()
                }, this),
                "play.owl.autoplay": t.proxy(function(t, e, i) {
                    t.namespace && this.play(e, i)
                }, this),
                "stop.owl.autoplay": t.proxy(function(t) {
                    t.namespace && this.stop()
                }, this),
                "mouseover.owl.autoplay": t.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                }, this),
                "mouseleave.owl.autoplay": t.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
                }, this),
                "touchstart.owl.core": t.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                }, this),
                "touchend.owl.core": t.proxy(function() {
                    this._core.settings.autoplayHoverPause && this.play()
                }, this)
            }, this._core.$element.on(this._handlers), this._core.options = t.extend({}, s.Defaults, this._core.options)
        };
        s.Defaults = {
            autoplay: !1,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !1,
            autoplaySpeed: !1
        }, s.prototype.play = function(t, e) {
            this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
        }, s.prototype._getNextTimeout = function(n, s) {
            return this._timeout && e.clearTimeout(this._timeout), e.setTimeout(t.proxy(function() {
                this._paused || this._core.is("busy") || this._core.is("interacting") || i.hidden || this._core.next(s || this._core.settings.autoplaySpeed)
            }, this), n || this._core.settings.autoplayTimeout)
        }, s.prototype._setAutoPlayInterval = function() {
            this._timeout = this._getNextTimeout()
        }, s.prototype.stop = function() {
            this._core.is("rotating") && (e.clearTimeout(this._timeout), this._core.leave("rotating"))
        }, s.prototype.pause = function() {
            this._core.is("rotating") && (this._paused = !0)
        }, s.prototype.destroy = function() {
            var t, e;
            this.stop();
            for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.autoplay = s
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        "use strict";
        var s = function(e) {
            this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
                next: this._core.next,
                prev: this._core.prev,
                to: this._core.to
            }, this._handlers = {
                "prepared.owl.carousel": t.proxy(function(e) {
                    e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
                }, this),
                "added.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
                }, this),
                "remove.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
                }, this),
                "changed.owl.carousel": t.proxy(function(t) {
                    t.namespace && "position" == t.property.name && this.draw()
                }, this),
                "initialized.owl.carousel": t.proxy(function(t) {
                    t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
                }, this),
                "refreshed.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
                }, this)
            }, this._core.options = t.extend({}, s.Defaults, this._core.options), this.$element.on(this._handlers)
        };
        s.Defaults = {
            nav: !1,
            navText: ["prev", "next"],
            navSpeed: !1,
            navElement: "div",
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotsData: !1,
            dotsSpeed: !1,
            dotsContainer: !1
        }, s.prototype.initialize = function() {
            var e, i = this._core.settings;
            this._controls.$relative = (i.navContainer ? t(i.navContainer) : t("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy(function(t) {
                this.prev(i.navSpeed)
            }, this)), this._controls.$next = t("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy(function(t) {
                this.next(i.navSpeed)
            }, this)), i.dotsData || (this._templates = [t("<div>").addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? t(i.dotsContainer) : t("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", t.proxy(function(e) {
                var n = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
                e.preventDefault(), this.to(n, i.dotsSpeed)
            }, this));
            for (e in this._overrides) this._core[e] = t.proxy(this[e], this)
        }, s.prototype.destroy = function() {
            var t, e, i, n;
            for (t in this._handlers) this.$element.off(t, this._handlers[t]);
            for (e in this._controls) this._controls[e].remove();
            for (n in this.overides) this._core[n] = this._overrides[n];
            for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
        }, s.prototype.update = function() {
            var t, e, i, n = this._core.clones().length / 2,
                s = n + this._core.items().length,
                a = this._core.maximum(!0),
                o = this._core.settings,
                r = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items;
            if ("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)), o.dots || "page" == o.slideBy)
                for (this._pages = [], t = n, e = 0, i = 0; s > t; t++) {
                    if (e >= r || 0 === e) {
                        if (this._pages.push({
                                start: Math.min(a, t - n),
                                end: t - n + r - 1
                            }), Math.min(a, t - n) === a) break;
                        e = 0, ++i
                    }
                    e += this._core.mergers(this._core.relative(t))
                }
        }, s.prototype.draw = function() {
            var e, i = this._core.settings,
                n = this._core.items().length <= i.items,
                s = this._core.relative(this._core.current()),
                a = i.loop || i.rewind;
            this._controls.$relative.toggleClass("disabled", !i.nav || n), i.nav && (this._controls.$previous.toggleClass("disabled", !a && s <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !a && s >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !i.dots || n), i.dots && (e = this._pages.length - this._controls.$absolute.children().length, i.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0])) : 0 > e && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
        }, s.prototype.onTrigger = function(e) {
            var i = this._core.settings;
            e.page = {
                index: t.inArray(this.current(), this._pages),
                count: this._pages.length,
                size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items)
            }
        }, s.prototype.current = function() {
            var e = this._core.relative(this._core.current());
            return t.grep(this._pages, t.proxy(function(t, i) {
                return t.start <= e && t.end >= e
            }, this)).pop()
        }, s.prototype.getPosition = function(e) {
            var i, n, s = this._core.settings;
            return "page" == s.slideBy ? (i = t.inArray(this.current(), this._pages), n = this._pages.length, e ? ++i : --i, i = this._pages[(i % n + n) % n].start) : (i = this._core.relative(this._core.current()), n = this._core.items().length, e ? i += s.slideBy : i -= s.slideBy), i
        }, s.prototype.next = function(e) {
            t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
        }, s.prototype.prev = function(e) {
            t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
        }, s.prototype.to = function(e, i, n) {
            var s;
            !n && this._pages.length ? (s = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % s + s) % s].start, i)) : t.proxy(this._overrides.to, this._core)(e, i)
        }, t.fn.owlCarousel.Constructor.Plugins.Navigation = s
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        "use strict";
        var s = function(i) {
            this._core = i, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
                "initialized.owl.carousel": t.proxy(function(i) {
                    i.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
                }, this),
                "prepared.owl.carousel": t.proxy(function(e) {
                    if (e.namespace) {
                        var i = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                        if (!i) return;
                        this._hashes[i] = e.content
                    }
                }, this),
                "changed.owl.carousel": t.proxy(function(i) {
                    if (i.namespace && "position" === i.property.name) {
                        var n = this._core.items(this._core.relative(this._core.current())),
                            s = t.map(this._hashes, function(t, e) {
                                return t === n ? e : null
                            }).join();
                        if (!s || e.location.hash.slice(1) === s) return;
                        e.location.hash = s
                    }
                }, this)
            }, this._core.options = t.extend({}, s.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function(t) {
                var i = e.location.hash.substring(1),
                    s = this._core.$stage.children(),
                    a = this._hashes[i] && s.index(this._hashes[i]);
                a !== n && a !== this._core.current() && this._core.to(this._core.relative(a), !1, !0)
            }, this))
        };
        s.Defaults = {
            URLhashListener: !1
        }, s.prototype.destroy = function() {
            var i, n;
            t(e).off("hashchange.owl.navigation");
            for (i in this._handlers) this._core.$element.off(i, this._handlers[i]);
            for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Hash = s
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        function s(e, i) {
            var s = !1,
                a = e.charAt(0).toUpperCase() + e.slice(1);
            return t.each((e + " " + r.join(a + " ") + a).split(" "), function(t, e) {
                return o[e] !== n ? (s = i ? e : !0, !1) : void 0
            }), s
        }

        function a(t) {
            return s(t, !0)
        }
        var o = t("<support>").get(0).style,
            r = "Webkit Moz O ms".split(" "),
            l = {
                transition: {
                    end: {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd",
                        transition: "transitionend"
                    }
                },
                animation: {
                    end: {
                        WebkitAnimation: "webkitAnimationEnd",
                        MozAnimation: "animationend",
                        OAnimation: "oAnimationEnd",
                        animation: "animationend"
                    }
                }
            },
            c = {
                csstransforms: function() {
                    return !!s("transform")
                },
                csstransforms3d: function() {
                    return !!s("perspective")
                },
                csstransitions: function() {
                    return !!s("transition")
                },
                cssanimations: function() {
                    return !!s("animation")
                }
            };
        c.csstransitions() && (t.support.transition = new String(a("transition")), t.support.transition.end = l.transition.end[t.support.transition]), c.cssanimations() && (t.support.animation = new String(a("animation")), t.support.animation.end = l.animation.end[t.support.animation]), c.csstransforms() && (t.support.transform = new String(a("transform")), t.support.transform3d = c.csstransforms3d())
    }(window.Zepto || window.jQuery, window, document);