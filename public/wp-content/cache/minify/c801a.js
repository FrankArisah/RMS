! function(t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var i = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) n.d(r, i, function(e) {
                return t[e]
            }.bind(null, i));
        return r
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 1)
}([function(t, e) {
    t.exports = jQuery
}, function(t, e, n) {
    n(2), n(6), t.exports = n(4)
}, function(t, e, n) {
    var r, i, u, s;
    /*!
     * @fileOverview TouchSwipe - jQuery Plugin @version 1.6.18 / SANDBOXED VERSION FOR TP
     * @author Matt Bryson http://www.github.com/mattbryson
     * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
     * @see http://labs.rampinteractive.co.uk/touchSwipe/
     * @see http://plugins.jquery.com/project/touchSwipe
     * @license
     * Copyright (c) 2010-2015 Matt Bryson
     * Dual licensed under the MIT or GPL Version 2 licenses.
     *
     */
    s = function(t) {
        "use strict";
        var e = "left",
            n = "right",
            r = "up",
            i = "down",
            u = "none",
            s = "doubletap",
            o = "longtap",
            a = "horizontal",
            l = "vertical",
            h = "all",
            f = "move",
            D = "end",
            p = "cancel",
            c = "ontouchstart" in window,
            d = window.navigator.msPointerEnabled && !window.PointerEvent && !c,
            g = (window.PointerEvent || window.navigator.msPointerEnabled) && !c,
            _ = "TouchSwipe";

        function m(m, v) {
            v = t.extend({}, v);
            var y = c || g || !v.fallbackToMouseEvents,
                C = y ? g ? d ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
                x = y ? g ? d ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
                F = y ? g ? d ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
                w = y ? g ? "mouseleave" : null : "mouseleave",
                E = g ? d ? "MSPointerCancel" : "pointercancel" : "touchcancel",
                b = 0,
                T = null,
                A = null,
                M = 0,
                O = 0,
                S = 0,
                P = 1,
                B = 0,
                k = 0,
                L = null,
                N = t(m),
                R = "start",
                I = 0,
                z = {},
                Y = 0,
                X = 0,
                j = 0,
                V = 0,
                U = 0,
                W = null,
                q = null;
            try {
                N.on(C, G), N.on(E, K)
            } catch (m) {
                t.error("events not supported " + C + "," + E + " on jQuery.swipe")
            }

            function G(u) {
                if (!0 !== N.data(_ + "_intouch") && !(0 < t(u.target).closest(v.excludedElements, N).length)) {
                    var s = u.originalEvent ? u.originalEvent : u;
                    if (!s.pointerType || "mouse" != s.pointerType || 0 != v.fallbackToMouseEvents) {
                        var o, a, l = s.touches,
                            f = l ? l[0] : s;
                        return R = "start", l ? I = l.length : !1 !== v.preventDefaultEvents && u.preventDefault(), k = A = T = null, P = 1, B = S = O = M = b = 0, (a = {})[e] = yt(e), a[n] = yt(n), a.up = yt(r), a[i] = yt(i), L = a, ct(), _t(0, f), !l || I === v.fingers || v.fingers === h || st() ? (Y = wt(), 2 == I && (_t(1, l[1]), O = S = xt(z[0].start, z[1].start)), (v.swipeStatus || v.pinchStatus) && (o = tt(s, R))) : o = !1, !1 === o ? (tt(s, R = p), o) : (v.hold && (q = setTimeout(t.proxy((function() {
                            N.trigger("hold", [s.target]), v.hold && (o = v.hold.call(N, s, s.target))
                        }), this), v.longTapThreshold)), gt(!0), null)
                    }
                }
            }

            function H(s) {
                var o = s.originalEvent ? s.originalEvent : s;
                if (R !== D && R !== p && !dt()) {
                    var c, d, g, _, m, y, C, x = o.touches,
                        F = mt(x ? x[0] : o);
                    if (X = wt(), x && (I = x.length), v.hold && clearTimeout(q), R = f, 2 == I && (0 == O ? (_t(1, x[1]), O = S = xt(z[0].start, z[1].start)) : (mt(x[1]), S = xt(z[0].end, z[1].end), z[0].end, z[1].end, k = P < 1 ? "out" : "in"), P = (S / O * 1).toFixed(2), B = Math.abs(O - S)), I === v.fingers || v.fingers === h || !x || st()) {
                        if (T = Ft(F.start, F.end), function(t, s) {
                                if (!1 !== v.preventDefaultEvents)
                                    if (v.allowPageScroll === u) t.preventDefault();
                                    else {
                                        var o = "auto" === v.allowPageScroll;
                                        switch (s) {
                                            case e:
                                                (v.swipeLeft && o || !o && v.allowPageScroll != a) && t.preventDefault();
                                                break;
                                            case n:
                                                (v.swipeRight && o || !o && v.allowPageScroll != a) && t.preventDefault();
                                                break;
                                            case r:
                                                (v.swipeUp && o || !o && v.allowPageScroll != l) && t.preventDefault();
                                                break;
                                            case i:
                                                (v.swipeDown && o || !o && v.allowPageScroll != l) && t.preventDefault()
                                        }
                                    }
                            }(s, A = Ft(F.last, F.end)), y = F.start, C = F.end, b = Math.round(Math.sqrt(Math.pow(C.x - y.x, 2) + Math.pow(C.y - y.y, 2))), M = Ct(), function(t, e) {
                                t != u && (e = Math.max(e, vt(t)), L[t].distance = e)
                            }(T, b), c = tt(o, R), !v.triggerOnTouchEnd || v.triggerOnTouchLeave) {
                            var w = !0;
                            v.triggerOnTouchLeave && (g = {
                                left: (m = (_ = t(_ = this)).offset()).left,
                                right: m.left + _.outerWidth(),
                                top: m.top,
                                bottom: m.top + _.outerHeight()
                            }, w = (d = F.end).x > g.left && d.x < g.right && d.y > g.top && d.y < g.bottom), !v.triggerOnTouchEnd && w ? R = J(f) : v.triggerOnTouchLeave && !w && (R = J(D)), R != p && R != D || tt(o, R)
                        }
                    } else tt(o, R = p);
                    !1 === c && tt(o, R = p)
                }
            }

            function Q(t) {
                var e, n = t.originalEvent ? t.originalEvent : t,
                    r = n.touches;
                if (r) {
                    if (r.length && !dt()) return e = n, j = wt(), V = e.touches.length + 1, !0;
                    if (r.length && dt()) return !0
                }
                return dt() && (I = V), X = wt(), M = Ct(), rt() || !nt() ? tt(n, R = p) : v.triggerOnTouchEnd || !1 === v.triggerOnTouchEnd && R === f ? (!1 !== v.preventDefaultEvents && !1 !== t.cancelable && t.preventDefault(), tt(n, R = D)) : !v.triggerOnTouchEnd && ft() ? et(n, R = D, "tap") : R === f && tt(n, R = p), gt(!1), null
            }

            function K() {
                S = O = Y = X = I = 0, P = 1, ct(), gt(!1)
            }

            function Z(t) {
                var e = t.originalEvent ? t.originalEvent : t;
                v.triggerOnTouchLeave && tt(e, R = J(D))
            }

            function $() {
                N.off(C, G), N.off(E, K), N.off(x, H), N.off(F, Q), w && N.off(w, Z), gt(!1)
            }

            function J(t) {
                var e = t,
                    n = it(),
                    r = nt(),
                    i = rt();
                return !n || i ? e = p : !r || t != f || v.triggerOnTouchEnd && !v.triggerOnTouchLeave ? !r && t == D && v.triggerOnTouchLeave && (e = p) : e = D, e
            }

            function tt(t, e) {
                var n, r = t.touches;
                return (ot() && at() || at()) && (n = et(t, e, "swipe")), (ut() && st() || st()) && !1 !== n && (n = et(t, e, "pinch")), pt() && Dt() && !1 !== n ? n = et(t, e, s) : M > v.longTapThreshold && b < 10 && v.longTap && !1 !== n ? n = et(t, e, o) : 1 !== I && c || !(isNaN(b) || b < v.threshold) || !ft() || !1 === n || (n = et(t, e, "tap")), e === p && K(), e === D && (r && r.length || K()), n
            }

            function et(u, a, l) {
                var h;
                if ("swipe" == l) {
                    if (N.trigger("swipeStatus", [a, T || null, b || 0, M || 0, I, z, A]), v.swipeStatus && !1 === (h = v.swipeStatus.call(N, u, a, T || null, b || 0, M || 0, I, z, A))) return !1;
                    if (a == D && ot()) {
                        if (clearTimeout(W), clearTimeout(q), N.trigger("swipe", [T, b, M, I, z, A]), v.swipe && !1 === (h = v.swipe.call(N, u, T, b, M, I, z, A))) return !1;
                        switch (T) {
                            case e:
                                N.trigger("swipeLeft", [T, b, M, I, z, A]), v.swipeLeft && (h = v.swipeLeft.call(N, u, T, b, M, I, z, A));
                                break;
                            case n:
                                N.trigger("swipeRight", [T, b, M, I, z, A]), v.swipeRight && (h = v.swipeRight.call(N, u, T, b, M, I, z, A));
                                break;
                            case r:
                                N.trigger("swipeUp", [T, b, M, I, z, A]), v.swipeUp && (h = v.swipeUp.call(N, u, T, b, M, I, z, A));
                                break;
                            case i:
                                N.trigger("swipeDown", [T, b, M, I, z, A]), v.swipeDown && (h = v.swipeDown.call(N, u, T, b, M, I, z, A))
                        }
                    }
                }
                if ("pinch" == l) {
                    if (N.trigger("pinchStatus", [a, k || null, B || 0, M || 0, I, P, z]), v.pinchStatus && !1 === (h = v.pinchStatus.call(N, u, a, k || null, B || 0, M || 0, I, P, z))) return !1;
                    if (a == D && ut()) switch (k) {
                        case "in":
                            N.trigger("pinchIn", [k || null, B || 0, M || 0, I, P, z]), v.pinchIn && (h = v.pinchIn.call(N, u, k || null, B || 0, M || 0, I, P, z));
                            break;
                        case "out":
                            N.trigger("pinchOut", [k || null, B || 0, M || 0, I, P, z]), v.pinchOut && (h = v.pinchOut.call(N, u, k || null, B || 0, M || 0, I, P, z))
                    }
                }
                return "tap" == l ? a !== p && a !== D || (clearTimeout(W), clearTimeout(q), Dt() && !pt() ? (U = wt(), W = setTimeout(t.proxy((function() {
                    U = null, N.trigger("tap", [u.target]), v.tap && (h = v.tap.call(N, u, u.target))
                }), this), v.doubleTapThreshold)) : (U = null, N.trigger("tap", [u.target]), v.tap && (h = v.tap.call(N, u, u.target)))) : l == s ? a !== p && a !== D || (clearTimeout(W), clearTimeout(q), U = null, N.trigger("doubletap", [u.target]), v.doubleTap && (h = v.doubleTap.call(N, u, u.target))) : l == o && (a !== p && a !== D || (clearTimeout(W), U = null, N.trigger("longtap", [u.target]), v.longTap && (h = v.longTap.call(N, u, u.target)))), h
            }

            function nt() {
                var t = !0;
                return null !== v.threshold && (t = b >= v.threshold), t
            }

            function rt() {
                var t = !1;
                return null !== v.cancelThreshold && null !== T && (t = vt(T) - b >= v.cancelThreshold), t
            }

            function it() {
                return !(v.maxTimeThreshold && M >= v.maxTimeThreshold)
            }

            function ut() {
                var t = lt(),
                    e = ht(),
                    n = null === v.pinchThreshold || B >= v.pinchThreshold;
                return t && e && n
            }

            function st() {
                return v.pinchStatus || v.pinchIn || v.pinchOut
            }

            function ot() {
                var t = it(),
                    e = nt(),
                    n = lt(),
                    r = ht();
                return !rt() && r && n && e && t
            }

            function at() {
                return v.swipe || v.swipeStatus || v.swipeLeft || v.swipeRight || v.swipeUp || v.swipeDown
            }

            function lt() {
                return I === v.fingers || v.fingers === h || !c
            }

            function ht() {
                return 0 !== z[0].end.x
            }

            function ft() {
                return v.tap
            }

            function Dt() {
                return !!v.doubleTap
            }

            function pt() {
                if (null == U) return !1;
                var t = wt();
                return Dt() && t - U <= v.doubleTapThreshold
            }

            function ct() {
                V = j = 0
            }

            function dt() {
                var t = !1;
                return j && wt() - j <= v.fingerReleaseThreshold && (t = !0), t
            }

            function gt(t) {
                N && (!0 === t ? (N.on(x, H), N.on(F, Q), w && N.on(w, Z)) : (N.off(x, H, !1), N.off(F, Q, !1), w && N.off(w, Z, !1)), N.data(_ + "_intouch", !0 === t))
            }

            function _t(t, e) {
                var n = {
                    start: {
                        x: 0,
                        y: 0
                    },
                    last: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    }
                };
                return n.start.x = n.last.x = n.end.x = e.pageX || e.clientX, n.start.y = n.last.y = n.end.y = e.pageY || e.clientY, z[t] = n
            }

            function mt(t) {
                var e = void 0 !== t.identifier ? t.identifier : 0,
                    n = z[e] || null;
                return null === n && (n = _t(e, t)), n.last.x = n.end.x, n.last.y = n.end.y, n.end.x = t.pageX || t.clientX, n.end.y = t.pageY || t.clientY, n
            }

            function vt(t) {
                if (L[t]) return L[t].distance
            }

            function yt(t) {
                return {
                    direction: t,
                    distance: 0
                }
            }

            function Ct() {
                return X - Y
            }

            function xt(t, e) {
                var n = Math.abs(t.x - e.x),
                    r = Math.abs(t.y - e.y);
                return Math.round(Math.sqrt(n * n + r * r))
            }

            function Ft(t, s) {
                if (a = s, (o = t).x == a.x && o.y == a.y) return u;
                var o, a, l, h, f, D, p, c, d = (h = s, f = (l = t).x - h.x, D = h.y - l.y, p = Math.atan2(D, f), (c = Math.round(180 * p / Math.PI)) < 0 && (c = 360 - Math.abs(c)), c);
                return d <= 45 && 0 <= d || d <= 360 && 315 <= d ? e : 135 <= d && d <= 225 ? n : 45 < d && d < 135 ? i : r
            }

            function wt() {
                return (new Date).getTime()
            }
            this.enable = function() {
                return this.disable(), N.on(C, G), N.on(E, K), N
            }, this.disable = function() {
                return $(), N
            }, this.destroy = function() {
                $(), N.data(_, null), N = null
            }, this.option = function(e, n) {
                if ("object" == typeof e) v = t.extend(v, e);
                else if (void 0 !== v[e]) {
                    if (void 0 === n) return v[e];
                    v[e] = n
                } else {
                    if (!e) return v;
                    t.error("Option " + e + " does not exist on jQuery.swipe.options")
                }
                return null
            }
        }
        t.fn.rsswipe = function(e) {
            var n = t(this),
                r = n.data(_);
            if (r && "string" == typeof e) {
                if (r[e]) return r[e].apply(r, Array.prototype.slice.call(arguments, 1));
                t.error("Method " + e + " does not exist on jQuery.rsswipe")
            } else if (r && "object" == typeof e) r.option.apply(r, arguments);
            else if (!(r || "object" != typeof e && e)) return function(e) {
                return !e || void 0 !== e.allowPageScroll || void 0 === e.swipe && void 0 === e.swipeStatus || (e.allowPageScroll = u), void 0 !== e.click && void 0 === e.tap && (e.tap = e.click), e = e || {}, e = t.extend({}, t.fn.rsswipe.defaults, e), this.each((function() {
                    var n = t(this),
                        r = n.data(_);
                    r || (r = new m(this, e), n.data(_, r))
                }))
            }.apply(this, arguments);
            return n
        }, t.fn.rsswipe.version = "1.6.18", t.fn.rsswipe.defaults = {
            fingers: 1,
            threshold: 75,
            cancelThreshold: null,
            pinchThreshold: 20,
            maxTimeThreshold: null,
            fingerReleaseThreshold: 250,
            longTapThreshold: 500,
            doubleTapThreshold: 200,
            swipe: null,
            swipeLeft: null,
            swipeRight: null,
            swipeUp: null,
            swipeDown: null,
            swipeStatus: null,
            pinchIn: null,
            pinchOut: null,
            pinchStatus: null,
            click: null,
            tap: null,
            doubleTap: null,
            longTap: null,
            hold: null,
            triggerOnTouchEnd: !0,
            triggerOnTouchLeave: !1,
            allowPageScroll: "auto",
            fallbackToMouseEvents: !0,
            excludedElements: ".noSwipe",
            preventDefaultEvents: !0
        }, t.fn.rsswipe.phases = {
            PHASE_START: "start",
            PHASE_MOVE: f,
            PHASE_END: D,
            PHASE_CANCEL: p
        }, t.fn.rsswipe.directions = {
            LEFT: e,
            RIGHT: n,
            UP: r,
            DOWN: i,
            IN: "in",
            OUT: "out"
        }, t.fn.rsswipe.pageScroll = {
            NONE: u,
            HORIZONTAL: a,
            VERTICAL: l,
            AUTO: "auto"
        }, t.fn.rsswipe.fingers = {
            ONE: 1,
            TWO: 2,
            THREE: 3,
            FOUR: 4,
            FIVE: 5,
            ALL: h
        }
    }, n(3).jQuery ? (i = [n(0)], void 0 === (u = "function" == typeof(r = s) ? r.apply(e, i) : r) || (t.exports = u)) : t.exports ? s(n(0)) : s(jQuery)
}, function(t, e) {
    (function(e) {
        t.exports = e
    }).call(this, {})
}, function(t, e) {
    var n;
    (n = jQuery).waitForImages = {
        hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage"]
    }, n.expr.pseudos.uncached = function(t) {
        var e = document.createElement("img");
        return e.src = t.src, n(t).is('img[src!=""]') && !e.complete
    }, n.fn.waitForImages = function(t, e, r) {
        if (n.isPlainObject(t) && (e = t.each, r = t.waitForAll, t = t.finished), t = t || n.noop, e = e || n.noop, r = !!r, !n.isFunction(t) || !n.isFunction(e)) throw new TypeError("An invalid callback was supplied.");
        return this.each((function() {
            var i = n(this),
                u = [];
            if (r) {
                var s = n.waitForImages.hasImageProperties || [],
                    o = /url\((['"]?)(.*?)\1\)/g;
                i.find("*").each((function() {
                    var t = n(this);
                    t.is("img:uncached") && u.push({
                        src: t.attr("src"),
                        element: t[0]
                    }), n.each(s, (function(e, n) {
                        var r, i = t.css(n);
                        if (!i) return !0;
                        for (; r = o.exec(i);) u.push({
                            src: r[2],
                            element: t[0]
                        })
                    }))
                }))
            } else i.find("img:uncached").each((function() {
                u.push({
                    src: this.src,
                    element: this
                })
            }));
            var a = u.length,
                l = 0;
            0 == a && t.call(i[0]), n.each(u, (function(r, u) {
                var s = new Image;
                n(s).bind("load error", (function(n) {
                    if (l++, e.call(u.element, l, a, "load" == n.type), l == a) return t.call(i[0]), !1
                })), s.src = u.src
            }))
        }))
    }
}, , function(t, e, n) {
    "use strict";

    function r(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function i(t, e) {
        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    /*!
     * GSAP 3.5.1
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    n.r(e);
    var u, s, o, a, l, h, f, D, p, c, d, g, _, m, v, y, C, x, F, w, E, b, T, A, M, O, S, P = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        },
        B = {
            duration: .5,
            overwrite: !1,
            delay: 0
        },
        k = 1e8,
        L = 2 * Math.PI,
        N = L / 4,
        R = 0,
        I = Math.sqrt,
        z = Math.cos,
        Y = Math.sin,
        X = function(t) {
            return "string" == typeof t
        },
        j = function(t) {
            return "function" == typeof t
        },
        V = function(t) {
            return "number" == typeof t
        },
        U = function(t) {
            return void 0 === t
        },
        W = function(t) {
            return "object" == typeof t
        },
        q = function(t) {
            return !1 !== t
        },
        G = function() {
            return "undefined" != typeof window
        },
        H = function(t) {
            return j(t) || X(t)
        },
        Q = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        K = Array.isArray,
        Z = /(?:-?\.?\d|\.)+/gi,
        $ = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,
        J = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        tt = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi,
        et = /[+-]=-?[\.\d]+/,
        nt = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
        rt = {},
        it = {},
        ut = function(t) {
            return (it = St(t, rt)) && cn
        },
        st = function(t, e) {
            return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
        },
        ot = function(t, e) {
            return !e && console.warn(t)
        },
        at = function(t, e) {
            return t && (rt[t] = e) && it && (it[t] = e) || rt
        },
        lt = function() {
            return 0
        },
        ht = {},
        ft = [],
        Dt = {},
        pt = {},
        ct = {},
        dt = 30,
        gt = [],
        _t = "",
        mt = function(t) {
            var e, n, r = t[0];
            if (W(r) || j(r) || (t = [t]), !(e = (r._gsap || {}).harness)) {
                for (n = gt.length; n-- && !gt[n].targetTest(r););
                e = gt[n]
            }
            for (n = t.length; n--;) t[n] && (t[n]._gsap || (t[n]._gsap = new Ie(t[n], e))) || t.splice(n, 1);
            return t
        },
        vt = function(t) {
            return t._gsap || mt(ie(t))[0]._gsap
        },
        yt = function(t, e, n) {
            return (n = t[e]) && j(n) ? t[e]() : U(n) && t.getAttribute && t.getAttribute(e) || n
        },
        Ct = function(t, e) {
            return (t = t.split(",")).forEach(e) || t
        },
        xt = function(t) {
            return Math.round(1e5 * t) / 1e5 || 0
        },
        Ft = function(t, e) {
            for (var n = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < n;);
            return r < n
        },
        wt = function(t, e, n) {
            var r, i = V(t[1]),
                u = (i ? 2 : 1) + (e < 2 ? 0 : 1),
                s = t[u];
            if (i && (s.duration = t[1]), s.parent = n, e) {
                for (r = s; n && !("immediateRender" in r);) r = n.vars.defaults || {}, n = q(n.vars.inherit) && n.parent;
                s.immediateRender = q(r.immediateRender), e < 2 ? s.runBackwards = 1 : s.startAt = t[u - 1]
            }
            return s
        },
        Et = function() {
            var t, e, n = ft.length,
                r = ft.slice(0);
            for (Dt = {}, ft.length = 0, t = 0; t < n; t++)(e = r[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
        },
        bt = function(t, e, n, r) {
            ft.length && Et(), t.render(e, n, r), ft.length && Et()
        },
        Tt = function(t) {
            var e = parseFloat(t);
            return (e || 0 === e) && (t + "").match(nt).length < 2 ? e : X(t) ? t.trim() : t
        },
        At = function(t) {
            return t
        },
        Mt = function(t, e) {
            for (var n in e) n in t || (t[n] = e[n]);
            return t
        },
        Ot = function(t, e) {
            for (var n in e) n in t || "duration" === n || "ease" === n || (t[n] = e[n])
        },
        St = function(t, e) {
            for (var n in e) t[n] = e[n];
            return t
        },
        Pt = function t(e, n) {
            for (var r in n) e[r] = W(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r];
            return e
        },
        Bt = function(t, e) {
            var n, r = {};
            for (n in t) n in e || (r[n] = t[n]);
            return r
        },
        kt = function(t) {
            var e = t.parent || u,
                n = t.keyframes ? Ot : Mt;
            if (q(t.inherit))
                for (; e;) n(t, e.vars.defaults), e = e.parent || e._dp;
            return t
        },
        Lt = function(t, e, n, r) {
            void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
            var i = e._prev,
                u = e._next;
            i ? i._next = u : t[n] === e && (t[n] = u), u ? u._prev = i : t[r] === e && (t[r] = i), e._next = e._prev = e.parent = null
        },
        Nt = function(t, e) {
            t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), t._act = 0
        },
        Rt = function(t, e) {
            if (t && (!e || e._end > t._dur || e._start < 0))
                for (var n = t; n;) n._dirty = 1, n = n.parent;
            return t
        },
        It = function(t) {
            for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
            return t
        },
        zt = function(t) {
            return t._repeat ? Yt(t._tTime, t = t.duration() + t._rDelay) * t : 0
        },
        Yt = function(t, e) {
            return (t /= e) && ~~t === t ? ~~t - 1 : ~~t
        },
        Xt = function(t, e) {
            return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
        },
        jt = function(t) {
            return t._end = xt(t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0))
        },
        Vt = function(t, e) {
            var n = t._dp;
            return n && n.smoothChildTiming && t._ts && (t._start = xt(t._dp._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), jt(t), n._dirty || Rt(n, t)), t
        },
        Ut = function(t, e) {
            var n;
            if ((e._time || e._initted && !e._dur) && (n = Xt(t.rawTime(), e), (!e._dur || Jt(0, e.totalDuration(), n) - e._tTime > 1e-8) && e.render(n, !0)), Rt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
                if (t._dur < t.duration())
                    for (n = t; n._dp;) n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
                t._zTime = -1e-8
            }
        },
        Wt = function(t, e, n, r) {
            return e.parent && Nt(e), e._start = xt(n + e._delay), e._end = xt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
                function(t, e, n, r, i) {
                    void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
                    var u, s = t[r];
                    if (i)
                        for (u = e[i]; s && s[i] > u;) s = s._prev;
                    s ? (e._next = s._next, s._next = e) : (e._next = t[n], t[n] = e), e._next ? e._next._prev = e : t[r] = e, e._prev = s, e.parent = e._dp = t
                }(t, e, "_first", "_last", t._sort ? "_start" : 0), t._recent = e, r || Ut(t, e), t
        },
        qt = function(t, e) {
            return (rt.ScrollTrigger || st("scrollTrigger", e)) && rt.ScrollTrigger.create(e, t)
        },
        Gt = function(t, e, n, r) {
            return We(t, e), t._initted ? !n && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && h !== Ee.frame ? (ft.push(t), t._lazy = [e, r], 1) : void 0 : 1
        },
        Ht = function(t, e, n, r) {
            var i = t._repeat,
                u = xt(e) || 0,
                s = t._tTime / t._tDur;
            return s && !r && (t._time *= u / t._dur), t._dur = u, t._tDur = i ? i < 0 ? 1e10 : xt(u * (i + 1) + t._rDelay * i) : u, s && !r ? Vt(t, t._tTime = t._tDur * s) : t.parent && jt(t), n || Rt(t.parent, t), t
        },
        Qt = function(t) {
            return t instanceof Ye ? Rt(t) : Ht(t, t._dur)
        },
        Kt = {
            _start: 0,
            endTime: lt
        },
        Zt = function t(e, n) {
            var r, i, u = e.labels,
                s = e._recent || Kt,
                o = e.duration() >= k ? s.endTime(!1) : e._dur;
            return X(n) && (isNaN(n) || n in u) ? "<" === (r = n.charAt(0)) || ">" === r ? ("<" === r ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) : (r = n.indexOf("=")) < 0 ? (n in u || (u[n] = o), u[n]) : (i = +(n.charAt(r - 1) + n.substr(r + 1)), r > 1 ? t(e, n.substr(0, r - 1)) + i : o + i) : null == n ? o : +n
        },
        $t = function(t, e) {
            return t || 0 === t ? e(t) : e
        },
        Jt = function(t, e, n) {
            return n < t ? t : n > e ? e : n
        },
        te = function(t) {
            return (t = (t + "").substr((parseFloat(t) + "").length)) && isNaN(t) ? t : ""
        },
        ee = [].slice,
        ne = function(t, e) {
            return t && W(t) && "length" in t && (!e && !t.length || t.length - 1 in t && W(t[0])) && !t.nodeType && t !== s
        },
        re = function(t, e, n) {
            return void 0 === n && (n = []), t.forEach((function(t) {
                var r;
                return X(t) && !e || ne(t, 1) ? (r = n).push.apply(r, ie(t)) : n.push(t)
            })) || n
        },
        ie = function(t, e) {
            return !X(t) || e || !o && be() ? K(t) ? re(t, e) : ne(t) ? ee.call(t, 0) : t ? [t] : [] : ee.call(a.querySelectorAll(t), 0)
        },
        ue = function(t) {
            return t.sort((function() {
                return .5 - Math.random()
            }))
        },
        se = function(t) {
            if (j(t)) return t;
            var e = W(t) ? t : {
                    each: t
                },
                n = Be(e.ease),
                r = e.from || 0,
                i = parseFloat(e.base) || 0,
                u = {},
                s = r > 0 && r < 1,
                o = isNaN(r) || s,
                a = e.axis,
                l = r,
                h = r;
            return X(r) ? l = h = {
                    center: .5,
                    edges: .5,
                    end: 1
                }[r] || 0 : !s && o && (l = r[0], h = r[1]),
                function(t, s, f) {
                    var D, p, c, d, g, _, m, v, y, C = (f || e).length,
                        x = u[C];
                    if (!x) {
                        if (!(y = "auto" === e.grid ? 0 : (e.grid || [1, k])[1])) {
                            for (m = -k; m < (m = f[y++].getBoundingClientRect().left) && y < C;);
                            y--
                        }
                        for (x = u[C] = [], D = o ? Math.min(y, C) * l - .5 : r % y, p = o ? C * h / y - .5 : r / y | 0, m = 0, v = k, _ = 0; _ < C; _++) c = _ % y - D, d = p - (_ / y | 0), x[_] = g = a ? Math.abs("y" === a ? d : c) : I(c * c + d * d), g > m && (m = g), g < v && (v = g);
                        "random" === r && ue(x), x.max = m - v, x.min = v, x.v = C = (parseFloat(e.amount) || parseFloat(e.each) * (y > C ? C - 1 : a ? "y" === a ? C / y : y : Math.max(y, C / y)) || 0) * ("edges" === r ? -1 : 1), x.b = C < 0 ? i - C : i, x.u = te(e.amount || e.each) || 0, n = n && C < 0 ? Se(n) : n
                    }
                    return C = (x[t] - x.min) / x.max || 0, xt(x.b + (n ? n(C) : C) * x.v) + x.u
                }
        },
        oe = function(t) {
            var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
            return function(n) {
                return Math.floor(Math.round(parseFloat(n) / t) * t * e) / e + (V(n) ? 0 : te(n))
            }
        },
        ae = function(t, e) {
            var n, r, i = K(t);
            return !i && W(t) && (n = i = t.radius || k, t.values ? (t = ie(t.values), (r = !V(t[0])) && (n *= n)) : t = oe(t.increment)), $t(e, i ? j(t) ? function(e) {
                return r = t(e), Math.abs(r - e) <= n ? r : e
            } : function(e) {
                for (var i, u, s = parseFloat(r ? e.x : e), o = parseFloat(r ? e.y : 0), a = k, l = 0, h = t.length; h--;)(i = r ? (i = t[h].x - s) * i + (u = t[h].y - o) * u : Math.abs(t[h] - s)) < a && (a = i, l = h);
                return l = !n || a <= n ? t[l] : e, r || l === e || V(e) ? l : l + te(e)
            } : oe(t))
        },
        le = function(t, e, n, r) {
            return $t(K(t) ? !e : !0 === n ? !!(n = 0) : !r, (function() {
                return K(t) ? t[~~(Math.random() * t.length)] : (n = n || 1e-5) && (r = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((t + Math.random() * (e - t)) / n) * n * r) / r
            }))
        },
        he = function(t, e, n) {
            return $t(n, (function(n) {
                return t[~~e(n)]
            }))
        },
        fe = function(t) {
            for (var e, n, r, i, u = 0, s = ""; ~(e = t.indexOf("random(", u));) r = t.indexOf(")", e), i = "[" === t.charAt(e + 7), n = t.substr(e + 7, r - e - 7).match(i ? nt : Z), s += t.substr(u, e - u) + le(i ? n : +n[0], i ? 0 : +n[1], +n[2] || 1e-5), u = r + 1;
            return s + t.substr(u, t.length - u)
        },
        De = function(t, e, n, r, i) {
            var u = e - t,
                s = r - n;
            return $t(i, (function(e) {
                return n + ((e - t) / u * s || 0)
            }))
        },
        pe = function(t, e, n) {
            var r, i, u, s = t.labels,
                o = k;
            for (r in s)(i = s[r] - e) < 0 == !!n && i && o > (i = Math.abs(i)) && (u = r, o = i);
            return u
        },
        ce = function(t, e, n) {
            var r, i, u = t.vars,
                s = u[e];
            if (s) return r = u[e + "Params"], i = u.callbackScope || t, n && ft.length && Et(), r ? s.apply(i, r) : s.call(i)
        },
        de = function(t) {
            return Nt(t), t.progress() < 1 && ce(t, "onInterrupt"), t
        },
        ge = function(t) {
            var e = (t = !t.name && t.default || t).name,
                n = j(t),
                r = e && !n && t.init ? function() {
                    this._props = []
                } : t,
                i = {
                    init: lt,
                    render: un,
                    add: Ve,
                    kill: on,
                    modifier: sn,
                    rawVars: 0
                },
                u = {
                    targetTest: 0,
                    get: 0,
                    getSetter: tn,
                    aliases: {},
                    register: 0
                };
            if (be(), t !== r) {
                if (pt[e]) return;
                Mt(r, Mt(Bt(t, i), u)), St(r.prototype, St(i, Bt(t, u))), pt[r.prop = e] = r, t.targetTest && (gt.push(r), ht[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
            }
            at(e, r), t.register && t.register(cn, r, hn)
        },
        _e = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        },
        me = function(t, e, n) {
            return 255 * (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (n - e) * t * 6 : t < .5 ? n : 3 * t < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) + .5 | 0
        },
        ve = function(t, e, n) {
            var r, i, u, s, o, a, l, h, f, D, p = t ? V(t) ? [t >> 16, t >> 8 & 255, 255 & t] : 0 : _e.black;
            if (!p) {
                if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), _e[t]) p = _e[t];
                else if ("#" === t.charAt(0)) 4 === t.length && (r = t.charAt(1), i = t.charAt(2), u = t.charAt(3), t = "#" + r + r + i + i + u + u), p = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];
                else if ("hsl" === t.substr(0, 3))
                    if (p = D = t.match(Z), e) {
                        if (~t.indexOf("=")) return p = t.match($), n && p.length < 4 && (p[3] = 1), p
                    } else s = +p[0] % 360 / 360, o = +p[1] / 100, r = 2 * (a = +p[2] / 100) - (i = a <= .5 ? a * (o + 1) : a + o - a * o), p.length > 3 && (p[3] *= 1), p[0] = me(s + 1 / 3, r, i), p[1] = me(s, r, i), p[2] = me(s - 1 / 3, r, i);
                else p = t.match(Z) || _e.transparent;
                p = p.map(Number)
            }
            return e && !D && (r = p[0] / 255, i = p[1] / 255, u = p[2] / 255, a = ((l = Math.max(r, i, u)) + (h = Math.min(r, i, u))) / 2, l === h ? s = o = 0 : (f = l - h, o = a > .5 ? f / (2 - l - h) : f / (l + h), s = l === r ? (i - u) / f + (i < u ? 6 : 0) : l === i ? (u - r) / f + 2 : (r - i) / f + 4, s *= 60), p[0] = ~~(s + .5), p[1] = ~~(100 * o + .5), p[2] = ~~(100 * a + .5)), n && p.length < 4 && (p[3] = 1), p
        },
        ye = function(t) {
            var e = [],
                n = [],
                r = -1;
            return t.split(xe).forEach((function(t) {
                var i = t.match(J) || [];
                e.push.apply(e, i), n.push(r += i.length + 1)
            })), e.c = n, e
        },
        Ce = function(t, e, n) {
            var r, i, u, s, o = "",
                a = (t + o).match(xe),
                l = e ? "hsla(" : "rgba(",
                h = 0;
            if (!a) return t;
            if (a = a.map((function(t) {
                    return (t = ve(t, e, 1)) && l + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
                })), n && (u = ye(t), (r = n.c).join(o) !== u.c.join(o)))
                for (s = (i = t.replace(xe, "1").split(J)).length - 1; h < s; h++) o += i[h] + (~r.indexOf(h) ? a.shift() || l + "0,0,0,0)" : (u.length ? u : a.length ? a : n).shift());
            if (!i)
                for (s = (i = t.split(xe)).length - 1; h < s; h++) o += i[h] + a[h];
            return o + i[s]
        },
        xe = function() {
            var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (t in _e) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi")
        }(),
        Fe = /hsl[a]?\(/,
        we = function(t) {
            var e, n = t.join(" ");
            if (xe.lastIndex = 0, xe.test(n)) return e = Fe.test(n), t[1] = Ce(t[1], e), t[0] = Ce(t[0], e, ye(t[1])), !0
        },
        Ee = (v = Date.now, y = 500, C = 33, x = v(), F = x, E = w = 1e3 / 240, T = function t(e) {
            var n, r, i, u, s = v() - F,
                o = !0 === e;
            if (s > y && (x += s - C), ((n = (i = (F += s) - x) - E) > 0 || o) && (u = ++g.frame, _ = i - 1e3 * g.time, g.time = i /= 1e3, E += n + (n >= w ? 4 : w - n), r = 1), o || (p = c(t)), r)
                for (m = 0; m < b.length; m++) b[m](i, _, u, e)
        }, g = {
            time: 0,
            frame: 0,
            tick: function() {
                T(!0)
            },
            deltaRatio: function(t) {
                return _ / (1e3 / (t || 60))
            },
            wake: function() {
                l && (!o && G() && (s = o = window, a = s.document || {}, rt.gsap = cn, (s.gsapVersions || (s.gsapVersions = [])).push(cn.version), ut(it || s.GreenSockGlobals || !s.gsap && s || {}), d = s.requestAnimationFrame), p && g.sleep(), c = d || function(t) {
                    return setTimeout(t, E - 1e3 * g.time + 1 | 0)
                }, D = 1, T(2))
            },
            sleep: function() {
                (d ? s.cancelAnimationFrame : clearTimeout)(p), D = 0, c = lt
            },
            lagSmoothing: function(t, e) {
                y = t || 1 / 1e-8, C = Math.min(e, y, 0)
            },
            fps: function(t) {
                w = 1e3 / (t || 240), E = 1e3 * g.time + w
            },
            add: function(t) {
                b.indexOf(t) < 0 && b.push(t), be()
            },
            remove: function(t) {
                var e;
                ~(e = b.indexOf(t)) && b.splice(e, 1) && m >= e && m--
            },
            _listeners: b = []
        }),
        be = function() {
            return !D && Ee.wake()
        },
        Te = {},
        Ae = /^[\d.\-M][\d.\-,\s]/,
        Me = /["']/g,
        Oe = function(t) {
            for (var e, n, r, i = {}, u = t.substr(1, t.length - 3).split(":"), s = u[0], o = 1, a = u.length; o < a; o++) n = u[o], e = o !== a - 1 ? n.lastIndexOf(",") : n.length, r = n.substr(0, e), i[s] = isNaN(r) ? r.replace(Me, "").trim() : +r, s = n.substr(e + 1).trim();
            return i
        },
        Se = function(t) {
            return function(e) {
                return 1 - t(1 - e)
            }
        },
        Pe = function t(e, n) {
            for (var r, i = e._first; i;) i instanceof Ye ? t(i, n) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === n || (i.timeline ? t(i.timeline, n) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = n)), i = i._next
        },
        Be = function(t, e) {
            return t && (j(t) ? t : Te[t] || function(t) {
                var e, n, r, i, u = (t + "").split("("),
                    s = Te[u[0]];
                return s && u.length > 1 && s.config ? s.config.apply(null, ~t.indexOf("{") ? [Oe(u[1])] : (e = t, n = e.indexOf("(") + 1, r = e.indexOf(")"), i = e.indexOf("(", n), e.substring(n, ~i && i < r ? e.indexOf(")", r + 1) : r)).split(",").map(Tt)) : Te._CE && Ae.test(t) ? Te._CE("", t) : s
            }(t)) || e
        },
        ke = function(t, e, n, r) {
            void 0 === n && (n = function(t) {
                return 1 - e(1 - t)
            }), void 0 === r && (r = function(t) {
                return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
            });
            var i, u = {
                easeIn: e,
                easeOut: n,
                easeInOut: r
            };
            return Ct(t, (function(t) {
                for (var e in Te[t] = rt[t] = u, Te[i = t.toLowerCase()] = n, u) Te[i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Te[t + "." + e] = u[e]
            })), u
        },
        Le = function(t) {
            return function(e) {
                return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
            }
        },
        Ne = function t(e, n, r) {
            var i = n >= 1 ? n : 1,
                u = (r || (e ? .3 : .45)) / (n < 1 ? n : 1),
                s = u / L * (Math.asin(1 / i) || 0),
                o = function(t) {
                    return 1 === t ? 1 : i * Math.pow(2, -10 * t) * Y((t - s) * u) + 1
                },
                a = "out" === e ? o : "in" === e ? function(t) {
                    return 1 - o(1 - t)
                } : Le(o);
            return u = L / u, a.config = function(n, r) {
                return t(e, n, r)
            }, a
        },
        Re = function t(e, n) {
            void 0 === n && (n = 1.70158);
            var r = function(t) {
                    return t ? --t * t * ((n + 1) * t + n) + 1 : 0
                },
                i = "out" === e ? r : "in" === e ? function(t) {
                    return 1 - r(1 - t)
                } : Le(r);
            return i.config = function(n) {
                return t(e, n)
            }, i
        };
    Ct("Linear,Quad,Cubic,Quart,Quint,Strong", (function(t, e) {
        var n = e < 5 ? e + 1 : e;
        ke(t + ",Power" + (n - 1), e ? function(t) {
            return Math.pow(t, n)
        } : function(t) {
            return t
        }, (function(t) {
            return 1 - Math.pow(1 - t, n)
        }), (function(t) {
            return t < .5 ? Math.pow(2 * t, n) / 2 : 1 - Math.pow(2 * (1 - t), n) / 2
        }))
    })), Te.Linear.easeNone = Te.none = Te.Linear.easeIn, ke("Elastic", Ne("in"), Ne("out"), Ne()), A = 7.5625, O = 1 / (M = 2.75), ke("Bounce", (function(t) {
        return 1 - S(1 - t)
    }), S = function(t) {
        return t < O ? A * t * t : t < .7272727272727273 ? A * Math.pow(t - 1.5 / M, 2) + .75 : t < .9090909090909092 ? A * (t -= 2.25 / M) * t + .9375 : A * Math.pow(t - 2.625 / M, 2) + .984375
    }), ke("Expo", (function(t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    })), ke("Circ", (function(t) {
        return -(I(1 - t * t) - 1)
    })), ke("Sine", (function(t) {
        return 1 === t ? 1 : 1 - z(t * N)
    })), ke("Back", Re("in"), Re("out"), Re()), Te.SteppedEase = Te.steps = rt.SteppedEase = {
        config: function(t, e) {
            void 0 === t && (t = 1);
            var n = 1 / t,
                r = t + (e ? 0 : 1),
                i = e ? 1 : 0;
            return function(t) {
                return ((r * Jt(0, 1 - 1e-8, t) | 0) + i) * n
            }
        }
    }, B.ease = Te["quad.out"], Ct("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function(t) {
        return _t += t + "," + t + "Params,"
    }));
    var Ie = function(t, e) {
            this.id = R++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : yt, this.set = e ? e.getSetter : tn
        },
        ze = function() {
            function t(t, e) {
                var n = t.parent || u;
                this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Ht(this, +t.duration, 1, 1), this.data = t.data, D || Ee.wake(), n && Wt(n, this, e || 0 === e ? e : n._time, 1), t.reversed && this.reverse(), t.paused && this.paused(!0)
            }
            var e = t.prototype;
            return e.delay = function(t) {
                return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
            }, e.duration = function(t) {
                return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
            }, e.totalDuration = function(t) {
                return arguments.length ? (this._dirty = 0, Ht(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
            }, e.totalTime = function(t, e) {
                if (be(), !arguments.length) return this._tTime;
                var n = this._dp;
                if (n && n.smoothChildTiming && this._ts) {
                    for (Vt(this, t); n.parent;) n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
                    !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && Wt(this._dp, this, this._start - this._delay)
                }
                return (this._tTime !== t || !this._dur && !e || this._initted && 1e-8 === Math.abs(this._zTime) || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), bt(this, t, e)), this
            }, e.time = function(t, e) {
                return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + zt(this)) % this._dur || (t ? this._dur : 0), e) : this._time
            }, e.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
            }, e.progress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + zt(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
            }, e.iteration = function(t, e) {
                var n = this.duration() + this._rDelay;
                return arguments.length ? this.totalTime(this._time + (t - 1) * n, e) : this._repeat ? Yt(this._tTime, n) + 1 : 1
            }, e.timeScale = function(t) {
                if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
                if (this._rts === t) return this;
                var e = this.parent && this._ts ? Xt(this.parent._time, this) : this._tTime;
                return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, It(this.totalTime(Jt(-this._delay, this._tDur, e), !0))
            }, e.paused = function(t) {
                return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (be(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= 1e-8) && 1e-8 !== Math.abs(this._zTime)))), this) : this._ps
            }, e.startTime = function(t) {
                if (arguments.length) {
                    this._start = t;
                    var e = this.parent || this._dp;
                    return e && (e._sort || !this.parent) && Wt(e, this, t - this._delay), this
                }
                return this._start
            }, e.endTime = function(t) {
                return this._start + (q(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
            }, e.rawTime = function(t) {
                var e = this.parent || this._dp;
                return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Xt(e.rawTime(t), this) : this._tTime : this._tTime
            }, e.globalTime = function(t) {
                for (var e = this, n = arguments.length ? t : e.rawTime(); e;) n = e._start + n / (e._ts || 1), e = e._dp;
                return n
            }, e.repeat = function(t) {
                return arguments.length ? (this._repeat = t, Qt(this)) : this._repeat
            }, e.repeatDelay = function(t) {
                return arguments.length ? (this._rDelay = t, Qt(this)) : this._rDelay
            }, e.yoyo = function(t) {
                return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, e.seek = function(t, e) {
                return this.totalTime(Zt(this, t), q(e))
            }, e.restart = function(t, e) {
                return this.play().totalTime(t ? -this._delay : 0, q(e))
            }, e.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, e.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, e.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, e.resume = function() {
                return this.paused(!1)
            }, e.reversed = function(t) {
                return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0
            }, e.invalidate = function() {
                return this._initted = 0, this._zTime = -1e-8, this
            }, e.isActive = function() {
                var t, e = this.parent || this._dp,
                    n = this._start;
                return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= n && t < this.endTime(!0) - 1e-8))
            }, e.eventCallback = function(t, e, n) {
                var r = this.vars;
                return arguments.length > 1 ? (e ? (r[t] = e, n && (r[t + "Params"] = n), "onUpdate" === t && (this._onUpdate = e)) : delete r[t], this) : r[t]
            }, e.then = function(t) {
                var e = this;
                return new Promise((function(n) {
                    var r = j(t) ? t : At,
                        i = function() {
                            var t = e.then;
                            e.then = null, j(r) && (r = r(e)) && (r.then || r === e) && (e.then = t), n(r), e.then = t
                        };
                    e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? i() : e._prom = i
                }))
            }, e.kill = function() {
                de(this)
            }, t
        }();
    Mt(ze.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Ye = function(t) {
        function e(e, n) {
            var i;
            return void 0 === e && (e = {}), (i = t.call(this, e, n) || this).labels = {}, i.smoothChildTiming = !!e.smoothChildTiming, i.autoRemoveChildren = !!e.autoRemoveChildren, i._sort = q(e.sortChildren), i.parent && Ut(i.parent, r(i)), e.scrollTrigger && qt(r(i), e.scrollTrigger), i
        }
        i(e, t);
        var n = e.prototype;
        return n.to = function(t, e, n) {
            return new Qe(t, wt(arguments, 0, this), Zt(this, V(e) ? arguments[3] : n)), this
        }, n.from = function(t, e, n) {
            return new Qe(t, wt(arguments, 1, this), Zt(this, V(e) ? arguments[3] : n)), this
        }, n.fromTo = function(t, e, n, r) {
            return new Qe(t, wt(arguments, 2, this), Zt(this, V(e) ? arguments[4] : r)), this
        }, n.set = function(t, e, n) {
            return e.duration = 0, e.parent = this, kt(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Qe(t, e, Zt(this, n), 1), this
        }, n.call = function(t, e, n) {
            return Wt(this, Qe.delayedCall(0, t, e), Zt(this, n))
        }, n.staggerTo = function(t, e, n, r, i, u, s) {
            return n.duration = e, n.stagger = n.stagger || r, n.onComplete = u, n.onCompleteParams = s, n.parent = this, new Qe(t, n, Zt(this, i)), this
        }, n.staggerFrom = function(t, e, n, r, i, u, s) {
            return n.runBackwards = 1, kt(n).immediateRender = q(n.immediateRender), this.staggerTo(t, e, n, r, i, u, s)
        }, n.staggerFromTo = function(t, e, n, r, i, u, s, o) {
            return r.startAt = n, kt(r).immediateRender = q(r.immediateRender), this.staggerTo(t, e, r, i, u, s, o)
        }, n.render = function(t, e, n) {
            var r, i, s, o, a, l, h, f, D, p, c, d, g = this._time,
                _ = this._dirty ? this.totalDuration() : this._tDur,
                m = this._dur,
                v = this !== u && t > _ - 1e-8 && t >= 0 ? _ : t < 1e-8 ? 0 : t,
                y = this._zTime < 0 != t < 0 && (this._initted || !m);
            if (v !== this._tTime || n || y) {
                if (g !== this._time && m && (v += this._time - g, t += this._time - g), r = v, D = this._start, l = !(f = this._ts), y && (m || (g = this._zTime), (t || !e) && (this._zTime = t)), this._repeat && (c = this._yoyo, a = m + this._rDelay, r = xt(v % a), v === _ ? (o = this._repeat, r = m) : ((o = ~~(v / a)) && o === v / a && (r = m, o--), r > m && (r = m)), p = Yt(this._tTime, a), !g && this._tTime && p !== o && (p = o), c && 1 & o && (r = m - r, d = 1), o !== p && !this._lock)) {
                    var C = c && 1 & p,
                        x = C === (c && 1 & o);
                    if (o < p && (C = !C), g = C ? 0 : m, this._lock = 1, this.render(g || (d ? 0 : xt(o * a)), e, !m)._lock = 0, !e && this.parent && ce(this, "onRepeat"), this.vars.repeatRefresh && !d && (this.invalidate()._lock = 1), g !== this._time || l !== !this._ts) return this;
                    if (m = this._dur, _ = this._tDur, x && (this._lock = 2, g = C ? m : -1e-4, this.render(g, !0), this.vars.repeatRefresh && !d && this.invalidate()), this._lock = 0, !this._ts && !l) return this;
                    Pe(this, d)
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (h = function(t, e, n) {
                        var r;
                        if (n > e)
                            for (r = t._first; r && r._start <= n;) {
                                if (!r._dur && "isPause" === r.data && r._start > e) return r;
                                r = r._next
                            } else
                                for (r = t._last; r && r._start >= n;) {
                                    if (!r._dur && "isPause" === r.data && r._start < e) return r;
                                    r = r._prev
                                }
                    }(this, xt(g), xt(r))) && (v -= r - (r = h._start)), this._tTime = v, this._time = r, this._act = !f, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t), !g && r && !e && ce(this, "onStart"), r >= g && t >= 0)
                    for (i = this._first; i;) {
                        if (s = i._next, (i._act || r >= i._start) && i._ts && h !== i) {
                            if (i.parent !== this) return this.render(t, e, n);
                            if (i.render(i._ts > 0 ? (r - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (r - i._start) * i._ts, e, n), r !== this._time || !this._ts && !l) {
                                h = 0, s && (v += this._zTime = -1e-8);
                                break
                            }
                        }
                        i = s
                    } else {
                        i = this._last;
                        for (var F = t < 0 ? t : r; i;) {
                            if (s = i._prev, (i._act || F <= i._end) && i._ts && h !== i) {
                                if (i.parent !== this) return this.render(t, e, n);
                                if (i.render(i._ts > 0 ? (F - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (F - i._start) * i._ts, e, n), r !== this._time || !this._ts && !l) {
                                    h = 0, s && (v += this._zTime = F ? -1e-8 : 1e-8);
                                    break
                                }
                            }
                            i = s
                        }
                    }
                if (h && !e && (this.pause(), h.render(r >= g ? 0 : -1e-8)._zTime = r >= g ? 1 : -1, this._ts)) return this._start = D, jt(this), this.render(t, e, n);
                this._onUpdate && !e && ce(this, "onUpdate", !0), (v === _ && _ >= this.totalDuration() || !v && g) && (D !== this._start && Math.abs(f) === Math.abs(this._ts) || this._lock || ((t || !m) && (v === _ && this._ts > 0 || !v && this._ts < 0) && Nt(this, 1), e || t < 0 && !g || !v && !g || (ce(this, v === _ ? "onComplete" : "onReverseComplete", !0), this._prom && !(v < _ && this.timeScale() > 0) && this._prom())))
            }
            return this
        }, n.add = function(t, e) {
            var n = this;
            if (V(e) || (e = Zt(this, e)), !(t instanceof ze)) {
                if (K(t)) return t.forEach((function(t) {
                    return n.add(t, e)
                })), this;
                if (X(t)) return this.addLabel(t, e);
                if (!j(t)) return this;
                t = Qe.delayedCall(0, t)
            }
            return this !== t ? Wt(this, t, e) : this
        }, n.getChildren = function(t, e, n, r) {
            void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === n && (n = !0), void 0 === r && (r = -k);
            for (var i = [], u = this._first; u;) u._start >= r && (u instanceof Qe ? e && i.push(u) : (n && i.push(u), t && i.push.apply(i, u.getChildren(!0, e, n)))), u = u._next;
            return i
        }, n.getById = function(t) {
            for (var e = this.getChildren(1, 1, 1), n = e.length; n--;)
                if (e[n].vars.id === t) return e[n]
        }, n.remove = function(t) {
            return X(t) ? this.removeLabel(t) : j(t) ? this.killTweensOf(t) : (Lt(this, t), t === this._recent && (this._recent = this._last), Rt(this))
        }, n.totalTime = function(e, n) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = xt(Ee.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, n), this._forcing = 0, this) : this._tTime
        }, n.addLabel = function(t, e) {
            return this.labels[t] = Zt(this, e), this
        }, n.removeLabel = function(t) {
            return delete this.labels[t], this
        }, n.addPause = function(t, e, n) {
            var r = Qe.delayedCall(0, e || lt, n);
            return r.data = "isPause", this._hasPause = 1, Wt(this, r, Zt(this, t))
        }, n.removePause = function(t) {
            var e = this._first;
            for (t = Zt(this, t); e;) e._start === t && "isPause" === e.data && Nt(e), e = e._next
        }, n.killTweensOf = function(t, e, n) {
            for (var r = this.getTweensOf(t, n), i = r.length; i--;) Xe !== r[i] && r[i].kill(t, e);
            return this
        }, n.getTweensOf = function(t, e) {
            for (var n, r = [], i = ie(t), u = this._first, s = V(e); u;) u instanceof Qe ? Ft(u._targets, i) && (s ? (!Xe || u._initted && u._ts) && u.globalTime(0) <= e && u.globalTime(u.totalDuration()) > e : !e || u.isActive()) && r.push(u) : (n = u.getTweensOf(i, e)).length && r.push.apply(r, n), u = u._next;
            return r
        }, n.tweenTo = function(t, e) {
            e = e || {};
            var n = this,
                r = Zt(n, t),
                i = e,
                u = i.startAt,
                s = i.onStart,
                o = i.onStartParams,
                a = Qe.to(n, Mt(e, {
                    ease: "none",
                    lazy: !1,
                    time: r,
                    overwrite: "auto",
                    duration: e.duration || Math.abs((r - (u && "time" in u ? u.time : n._time)) / n.timeScale()) || 1e-8,
                    onStart: function() {
                        n.pause();
                        var t = e.duration || Math.abs((r - n._time) / n.timeScale());
                        a._dur !== t && Ht(a, t, 0, 1).render(a._time, !0, !0), s && s.apply(a, o || [])
                    }
                }));
            return a
        }, n.tweenFromTo = function(t, e, n) {
            return this.tweenTo(e, Mt({
                startAt: {
                    time: Zt(this, t)
                }
            }, n))
        }, n.recent = function() {
            return this._recent
        }, n.nextLabel = function(t) {
            return void 0 === t && (t = this._time), pe(this, Zt(this, t))
        }, n.previousLabel = function(t) {
            return void 0 === t && (t = this._time), pe(this, Zt(this, t), 1)
        }, n.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + 1e-8)
        }, n.shiftChildren = function(t, e, n) {
            void 0 === n && (n = 0);
            for (var r, i = this._first, u = this.labels; i;) i._start >= n && (i._start += t, i._end += t), i = i._next;
            if (e)
                for (r in u) u[r] >= n && (u[r] += t);
            return Rt(this)
        }, n.invalidate = function() {
            var e = this._first;
            for (this._lock = 0; e;) e.invalidate(), e = e._next;
            return t.prototype.invalidate.call(this)
        }, n.clear = function(t) {
            void 0 === t && (t = !0);
            for (var e, n = this._first; n;) e = n._next, this.remove(n), n = e;
            return this._time = this._tTime = this._pTime = 0, t && (this.labels = {}), Rt(this)
        }, n.totalDuration = function(t) {
            var e, n, r, i = 0,
                s = this,
                o = s._last,
                a = k;
            if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t));
            if (s._dirty) {
                for (r = s.parent; o;) e = o._prev, o._dirty && o.totalDuration(), (n = o._start) > a && s._sort && o._ts && !s._lock ? (s._lock = 1, Wt(s, o, n - o._delay, 1)._lock = 0) : a = n, n < 0 && o._ts && (i -= n, (!r && !s._dp || r && r.smoothChildTiming) && (s._start += n / s._ts, s._time -= n, s._tTime -= n), s.shiftChildren(-n, !1, -Infinity), a = 0), o._end > i && o._ts && (i = o._end), o = e;
                Ht(s, s === u && s._time > i ? s._time : i, 1, 1), s._dirty = 0
            }
            return s._tDur
        }, e.updateRoot = function(t) {
            if (u._ts && (bt(u, Xt(t, u)), h = Ee.frame), Ee.frame >= dt) {
                dt += P.autoSleep || 120;
                var e = u._first;
                if ((!e || !e._ts) && P.autoSleep && Ee._listeners.length < 2) {
                    for (; e && !e._ts;) e = e._next;
                    e || Ee.sleep()
                }
            }
        }, e
    }(ze);
    Mt(Ye.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    var Xe, je = function(t, e, n, r, i, u, s) {
            var o, a, l, h, f, D, p, c, d = new hn(this._pt, t, e, 0, 1, rn, null, i),
                g = 0,
                _ = 0;
            for (d.b = n, d.e = r, n += "", (p = ~(r += "").indexOf("random(")) && (r = fe(r)), u && (u(c = [n, r], t, e), n = c[0], r = c[1]), a = n.match(tt) || []; o = tt.exec(r);) h = o[0], f = r.substring(g, o.index), l ? l = (l + 1) % 5 : "rgba(" === f.substr(-5) && (l = 1), h !== a[_++] && (D = parseFloat(a[_ - 1]) || 0, d._pt = {
                _next: d._pt,
                p: f || 1 === _ ? f : ",",
                s: D,
                c: "=" === h.charAt(1) ? parseFloat(h.substr(2)) * ("-" === h.charAt(0) ? -1 : 1) : parseFloat(h) - D,
                m: l && l < 4 ? Math.round : 0
            }, g = tt.lastIndex);
            return d.c = g < r.length ? r.substring(g, r.length) : "", d.fp = s, (et.test(r) || p) && (d.e = 0), this._pt = d, d
        },
        Ve = function(t, e, n, r, i, u, s, o, a) {
            j(r) && (r = r(i || 0, t, u));
            var l, h = t[e],
                f = "get" !== n ? n : j(h) ? a ? t[e.indexOf("set") || !j(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](a) : t[e]() : h,
                D = j(h) ? a ? $e : Ze : Ke;
            if (X(r) && (~r.indexOf("random(") && (r = fe(r)), "=" === r.charAt(1) && (r = parseFloat(f) + parseFloat(r.substr(2)) * ("-" === r.charAt(0) ? -1 : 1) + (te(f) || 0))), f !== r) return isNaN(f * r) ? (!h && !(e in t) && st(e, r), je.call(this, t, e, f, r, D, o || P.stringFilter, a)) : (l = new hn(this._pt, t, e, +f || 0, r - (f || 0), "boolean" == typeof h ? nn : en, 0, D), a && (l.fp = a), s && l.modifier(s, this, t), this._pt = l)
        },
        Ue = function(t, e, n, r, i, u) {
            var s, o, a, l;
            if (pt[t] && !1 !== (s = new pt[t]).init(i, s.rawVars ? e[t] : function(t, e, n, r, i) {
                    if (j(t) && (t = qe(t, i, e, n, r)), !W(t) || t.style && t.nodeType || K(t) || Q(t)) return X(t) ? qe(t, i, e, n, r) : t;
                    var u, s = {};
                    for (u in t) s[u] = qe(t[u], i, e, n, r);
                    return s
                }(e[t], r, i, u, n), n, r, u) && (n._pt = o = new hn(n._pt, i, t, 0, 1, s.render, s, 0, s.priority), n !== f))
                for (a = n._ptLookup[n._targets.indexOf(i)], l = s._props.length; l--;) a[s._props[l]] = o;
            return s
        },
        We = function t(e, n) {
            var r, i, s, o, a, l, h, f, D, p, c, d, g, _ = e.vars,
                m = _.ease,
                v = _.startAt,
                y = _.immediateRender,
                C = _.lazy,
                x = _.onUpdate,
                F = _.onUpdateParams,
                w = _.callbackScope,
                E = _.runBackwards,
                b = _.yoyoEase,
                T = _.keyframes,
                A = _.autoRevert,
                M = e._dur,
                O = e._startAt,
                S = e._targets,
                P = e.parent,
                k = P && "nested" === P.data ? P.parent._targets : S,
                L = "auto" === e._overwrite,
                N = e.timeline;
            if (N && (!T || !m) && (m = "none"), e._ease = Be(m, B.ease), e._yEase = b ? Se(Be(!0 === b ? m : b, B.ease)) : 0, b && e._yoyo && !e._repeat && (b = e._yEase, e._yEase = e._ease, e._ease = b), !N) {
                if (d = (f = S[0] ? vt(S[0]).harness : 0) && _[f.prop], r = Bt(_, ht), O && O.render(-1, !0).kill(), v) {
                    if (Nt(e._startAt = Qe.set(S, Mt({
                            data: "isStart",
                            overwrite: !1,
                            parent: P,
                            immediateRender: !0,
                            lazy: q(C),
                            startAt: null,
                            delay: 0,
                            onUpdate: x,
                            onUpdateParams: F,
                            callbackScope: w,
                            stagger: 0
                        }, v))), y)
                        if (n > 0) A || (e._startAt = 0);
                        else if (M && !(n < 0 && O)) return void(n && (e._zTime = n))
                } else if (E && M)
                    if (O) !A && (e._startAt = 0);
                    else if (n && (y = !1), s = Mt({
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: y && q(C),
                        immediateRender: y,
                        stagger: 0,
                        parent: P
                    }, r), d && (s[f.prop] = d), Nt(e._startAt = Qe.set(S, s)), y) {
                    if (!n) return
                } else t(e._startAt, 1e-8);
                for (e._pt = 0, C = M && q(C) || C && !M, i = 0; i < S.length; i++) {
                    if (h = (a = S[i])._gsap || mt(S)[i]._gsap, e._ptLookup[i] = p = {}, Dt[h.id] && ft.length && Et(), c = k === S ? i : k.indexOf(a), f && !1 !== (D = new f).init(a, d || r, e, c, k) && (e._pt = o = new hn(e._pt, a, D.name, 0, 1, D.render, D, 0, D.priority), D._props.forEach((function(t) {
                            p[t] = o
                        })), D.priority && (l = 1)), !f || d)
                        for (s in r) pt[s] && (D = Ue(s, r, e, c, a, k)) ? D.priority && (l = 1) : p[s] = o = Ve.call(e, a, s, "get", r[s], c, k, 0, _.stringFilter);
                    e._op && e._op[i] && e.kill(a, e._op[i]), L && e._pt && (Xe = e, u.killTweensOf(a, p, e.globalTime(0)), g = !e.parent, Xe = 0), e._pt && C && (Dt[h.id] = 1)
                }
                l && ln(e), e._onInit && e._onInit(e)
            }
            e._from = !N && !!_.runBackwards, e._onUpdate = x, e._initted = (!e._op || e._pt) && !g
        },
        qe = function(t, e, n, r, i) {
            return j(t) ? t.call(e, n, r, i) : X(t) && ~t.indexOf("random(") ? fe(t) : t
        },
        Ge = _t + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
        He = (Ge + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
        Qe = function(t) {
            function e(e, n, i, s) {
                var o;
                "number" == typeof n && (i.duration = n, n = i, i = null);
                var a, l, h, f, D, p, c, d, g = (o = t.call(this, s ? n : kt(n), i) || this).vars,
                    _ = g.duration,
                    m = g.delay,
                    v = g.immediateRender,
                    y = g.stagger,
                    C = g.overwrite,
                    x = g.keyframes,
                    F = g.defaults,
                    w = g.scrollTrigger,
                    E = g.yoyoEase,
                    b = o.parent,
                    T = (K(e) || Q(e) ? V(e[0]) : "length" in n) ? [e] : ie(e);
                if (o._targets = T.length ? mt(T) : ot("GSAP target " + e + " not found. https://greensock.com", !P.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = C, x || y || H(_) || H(m)) {
                    if (n = o.vars, (a = o.timeline = new Ye({
                            data: "nested",
                            defaults: F || {}
                        })).kill(), a.parent = r(o), x) Mt(a.vars.defaults, {
                        ease: "none"
                    }), x.forEach((function(t) {
                        return a.to(T, t, ">")
                    }));
                    else {
                        if (f = T.length, c = y ? se(y) : lt, W(y))
                            for (D in y) ~Ge.indexOf(D) && (d || (d = {}), d[D] = y[D]);
                        for (l = 0; l < f; l++) {
                            for (D in h = {}, n) He.indexOf(D) < 0 && (h[D] = n[D]);
                            h.stagger = 0, E && (h.yoyoEase = E), d && St(h, d), p = T[l], h.duration = +qe(_, r(o), l, p, T), h.delay = (+qe(m, r(o), l, p, T) || 0) - o._delay, !y && 1 === f && h.delay && (o._delay = m = h.delay, o._start += m, h.delay = 0), a.to(p, h, c(l, p, T))
                        }
                        a.duration() ? _ = m = 0 : o.timeline = 0
                    }
                    _ || o.duration(_ = a.duration())
                } else o.timeline = 0;
                return !0 === C && (Xe = r(o), u.killTweensOf(T), Xe = 0), b && Ut(b, r(o)), (v || !_ && !x && o._start === xt(b._time) && q(v) && function t(e) {
                    return !e || e._ts && t(e.parent)
                }(r(o)) && "nested" !== b.data) && (o._tTime = -1e-8, o.render(Math.max(0, -m))), w && qt(r(o), w), o
            }
            i(e, t);
            var n = e.prototype;
            return n.render = function(t, e, n) {
                var r, i, u, s, o, a, l, h, f, D = this._time,
                    p = this._tDur,
                    c = this._dur,
                    d = t > p - 1e-8 && t >= 0 ? p : t < 1e-8 ? 0 : t;
                if (c) {
                    if (d !== this._tTime || !t || n || this._startAt && this._zTime < 0 != t < 0) {
                        if (r = d, h = this.timeline, this._repeat) {
                            if (s = c + this._rDelay, r = xt(d % s), d === p ? (u = this._repeat, r = c) : ((u = ~~(d / s)) && u === d / s && (r = c, u--), r > c && (r = c)), (a = this._yoyo && 1 & u) && (f = this._yEase, r = c - r), o = Yt(this._tTime, s), r === D && !n && this._initted) return this;
                            u !== o && (h && this._yEase && Pe(h, a), !this.vars.repeatRefresh || a || this._lock || (this._lock = n = 1, this.render(xt(s * u), !0).invalidate()._lock = 0))
                        }
                        if (!this._initted) {
                            if (Gt(this, t < 0 ? t : r, n, e)) return this._tTime = 0, this;
                            if (c !== this._dur) return this.render(t, e, n)
                        }
                        for (this._tTime = d, this._time = r, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = l = (f || this._ease)(r / c), this._from && (this.ratio = l = 1 - l), r && !D && !e && ce(this, "onStart"), i = this._pt; i;) i.r(l, i.d), i = i._next;
                        h && h.render(t < 0 ? t : !r && a ? -1e-8 : h._dur * l, e, n) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, n), ce(this, "onUpdate")), this._repeat && u !== o && this.vars.onRepeat && !e && this.parent && ce(this, "onRepeat"), d !== this._tDur && d || this._tTime !== d || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), (t || !c) && (d === this._tDur && this._ts > 0 || !d && this._ts < 0) && Nt(this, 1), e || t < 0 && !D || !d && !D || (ce(this, d === p ? "onComplete" : "onReverseComplete", !0), this._prom && !(d < p && this.timeScale() > 0) && this._prom()))
                    }
                } else ! function(t, e, n, r) {
                    var i, u, s = t.ratio,
                        o = e < 0 || !e && s && !t._start && t._zTime > 1e-8 && !t._dp._lock || (t._ts < 0 || t._dp._ts < 0) && "isFromStart" !== t.data && "isStart" !== t.data ? 0 : 1,
                        a = t._rDelay,
                        l = 0;
                    if (a && t._repeat && (l = Jt(0, t._tDur, e), Yt(l, a) !== (u = Yt(t._tTime, a)) && (s = 1 - o, t.vars.repeatRefresh && t._initted && t.invalidate())), o !== s || r || 1e-8 === t._zTime || !e && t._zTime) {
                        if (!t._initted && Gt(t, e, r, n)) return;
                        for (u = t._zTime, t._zTime = e || (n ? 1e-8 : 0), n || (n = e && !u), t.ratio = o, t._from && (o = 1 - o), t._time = 0, t._tTime = l, n || ce(t, "onStart"), i = t._pt; i;) i.r(o, i.d), i = i._next;
                        t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !n && ce(t, "onUpdate"), l && t._repeat && !n && t.parent && ce(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === o && (o && Nt(t, 1), n || (ce(t, o ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                    } else t._zTime || (t._zTime = e)
                }(this, t, e, n);
                return this
            }, n.targets = function() {
                return this._targets
            }, n.invalidate = function() {
                return this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), t.prototype.invalidate.call(this)
            }, n.kill = function(t, e) {
                if (void 0 === e && (e = "all"), !(t || e && "all" !== e) && (this._lazy = 0, this.parent)) return de(this);
                if (this.timeline) {
                    var n = this.timeline.totalDuration();
                    return this.timeline.killTweensOf(t, e, Xe && !0 !== Xe.vars.overwrite)._first || de(this), this.parent && n !== this.timeline.totalDuration() && Ht(this, this._dur * this.timeline._tDur / n, 0, 1), this
                }
                var r, i, u, s, o, a, l, h = this._targets,
                    f = t ? ie(t) : h,
                    D = this._ptLookup,
                    p = this._pt;
                if ((!e || "all" === e) && function(t, e) {
                        for (var n = t.length, r = n === e.length; r && n-- && t[n] === e[n];);
                        return n < 0
                    }(h, f)) return "all" === e && (this._pt = 0), de(this);
                for (r = this._op = this._op || [], "all" !== e && (X(e) && (o = {}, Ct(e, (function(t) {
                        return o[t] = 1
                    })), e = o), e = function(t, e) {
                        var n, r, i, u, s = t[0] ? vt(t[0]).harness : 0,
                            o = s && s.aliases;
                        if (!o) return e;
                        for (r in n = St({}, e), o)
                            if (r in n)
                                for (i = (u = o[r].split(",")).length; i--;) n[u[i]] = n[r];
                        return n
                    }(h, e)), l = h.length; l--;)
                    if (~f.indexOf(h[l]))
                        for (o in i = D[l], "all" === e ? (r[l] = e, s = i, u = {}) : (u = r[l] = r[l] || {}, s = e), s)(a = i && i[o]) && ("kill" in a.d && !0 !== a.d.kill(o) || Lt(this, a, "_pt"), delete i[o]), "all" !== u && (u[o] = 1);
                return this._initted && !this._pt && p && de(this), this
            }, e.to = function(t, n) {
                return new e(t, n, arguments[2])
            }, e.from = function(t, n) {
                return new e(t, wt(arguments, 1))
            }, e.delayedCall = function(t, n, r, i) {
                return new e(n, 0, {
                    immediateRender: !1,
                    lazy: !1,
                    overwrite: !1,
                    delay: t,
                    onComplete: n,
                    onReverseComplete: n,
                    onCompleteParams: r,
                    onReverseCompleteParams: r,
                    callbackScope: i
                })
            }, e.fromTo = function(t, n, r) {
                return new e(t, wt(arguments, 2))
            }, e.set = function(t, n) {
                return n.duration = 0, n.repeatDelay || (n.repeat = 0), new e(t, n)
            }, e.killTweensOf = function(t, e, n) {
                return u.killTweensOf(t, e, n)
            }, e
        }(ze);
    Mt(Qe.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), Ct("staggerTo,staggerFrom,staggerFromTo", (function(t) {
        Qe[t] = function() {
            var e = new Ye,
                n = ee.call(arguments, 0);
            return n.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, n)
        }
    }));
    var Ke = function(t, e, n) {
            return t[e] = n
        },
        Ze = function(t, e, n) {
            return t[e](n)
        },
        $e = function(t, e, n, r) {
            return t[e](r.fp, n)
        },
        Je = function(t, e, n) {
            return t.setAttribute(e, n)
        },
        tn = function(t, e) {
            return j(t[e]) ? Ze : U(t[e]) && t.setAttribute ? Je : Ke
        },
        en = function(t, e) {
            return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e)
        },
        nn = function(t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        },
        rn = function(t, e) {
            var n = e._pt,
                r = "";
            if (!t && e.b) r = e.b;
            else if (1 === t && e.e) r = e.e;
            else {
                for (; n;) r = n.p + (n.m ? n.m(n.s + n.c * t) : Math.round(1e4 * (n.s + n.c * t)) / 1e4) + r, n = n._next;
                r += e.c
            }
            e.set(e.t, e.p, r, e)
        },
        un = function(t, e) {
            for (var n = e._pt; n;) n.r(t, n.d), n = n._next
        },
        sn = function(t, e, n, r) {
            for (var i, u = this._pt; u;) i = u._next, u.p === r && u.modifier(t, e, n), u = i
        },
        on = function(t) {
            for (var e, n, r = this._pt; r;) n = r._next, r.p === t && !r.op || r.op === t ? Lt(this, r, "_pt") : r.dep || (e = 1), r = n;
            return !e
        },
        an = function(t, e, n, r) {
            r.mSet(t, e, r.m.call(r.tween, n, r.mt), r)
        },
        ln = function(t) {
            for (var e, n, r, i, u = t._pt; u;) {
                for (e = u._next, n = r; n && n.pr > u.pr;) n = n._next;
                (u._prev = n ? n._prev : i) ? u._prev._next = u: r = u, (u._next = n) ? n._prev = u : i = u, u = e
            }
            t._pt = r
        },
        hn = function() {
            function t(t, e, n, r, i, u, s, o, a) {
                this.t = e, this.s = r, this.c = i, this.p = n, this.r = u || en, this.d = s || this, this.set = o || Ke, this.pr = a || 0, this._next = t, t && (t._prev = this)
            }
            return t.prototype.modifier = function(t, e, n) {
                this.mSet = this.mSet || this.set, this.set = an, this.m = t, this.mt = n, this.tween = e
            }, t
        }();
    Ct(_t + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function(t) {
        return ht[t] = 1
    })), rt.TweenMax = rt.TweenLite = Qe, rt.TimelineLite = rt.TimelineMax = Ye, u = new Ye({
        sortChildren: !1,
        defaults: B,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), P.stringFilter = we;
    var fn = {
        registerPlugin: function() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            e.forEach((function(t) {
                return ge(t)
            }))
        },
        timeline: function(t) {
            return new Ye(t)
        },
        getTweensOf: function(t, e) {
            return u.getTweensOf(t, e)
        },
        getProperty: function(t, e, n, r) {
            X(t) && (t = ie(t)[0]);
            var i = vt(t || {}).get,
                u = n ? At : Tt;
            return "native" === n && (n = ""), t ? e ? u((pt[e] && pt[e].get || i)(t, e, n, r)) : function(e, n, r) {
                return u((pt[e] && pt[e].get || i)(t, e, n, r))
            } : t
        },
        quickSetter: function(t, e, n) {
            if ((t = ie(t)).length > 1) {
                var r = t.map((function(t) {
                        return cn.quickSetter(t, e, n)
                    })),
                    i = r.length;
                return function(t) {
                    for (var e = i; e--;) r[e](t)
                }
            }
            t = t[0] || {};
            var u = pt[e],
                s = vt(t),
                o = s.harness && (s.harness.aliases || {})[e] || e,
                a = u ? function(e) {
                    var r = new u;
                    f._pt = 0, r.init(t, n ? e + n : e, f, 0, [t]), r.render(1, r), f._pt && un(1, f)
                } : s.set(t, o);
            return u ? a : function(e) {
                return a(t, o, n ? e + n : e, s, 1)
            }
        },
        isTweening: function(t) {
            return u.getTweensOf(t, !0).length > 0
        },
        defaults: function(t) {
            return t && t.ease && (t.ease = Be(t.ease, B.ease)), Pt(B, t || {})
        },
        config: function(t) {
            return Pt(P, t || {})
        },
        registerEffect: function(t) {
            var e = t.name,
                n = t.effect,
                r = t.plugins,
                i = t.defaults,
                u = t.extendTimeline;
            (r || "").split(",").forEach((function(t) {
                return t && !pt[t] && !rt[t] && ot(e + " effect requires " + t + " plugin.")
            })), ct[e] = function(t, e, r) {
                return n(ie(t), Mt(e || {}, i), r)
            }, u && (Ye.prototype[e] = function(t, n, r) {
                return this.add(ct[e](t, W(n) ? n : (r = n) && {}, this), r)
            })
        },
        registerEase: function(t, e) {
            Te[t] = Be(e)
        },
        parseEase: function(t, e) {
            return arguments.length ? Be(t, e) : Te
        },
        getById: function(t) {
            return u.getById(t)
        },
        exportRoot: function(t, e) {
            void 0 === t && (t = {});
            var n, r, i = new Ye(t);
            for (i.smoothChildTiming = q(t.smoothChildTiming), u.remove(i), i._dp = 0, i._time = i._tTime = u._time, n = u._first; n;) r = n._next, !e && !n._dur && n instanceof Qe && n.vars.onComplete === n._targets[0] || Wt(i, n, n._start - n._delay), n = r;
            return Wt(u, i, 0), i
        },
        utils: {
            wrap: function t(e, n, r) {
                var i = n - e;
                return K(e) ? he(e, t(0, e.length), n) : $t(r, (function(t) {
                    return (i + (t - e) % i) % i + e
                }))
            },
            wrapYoyo: function t(e, n, r) {
                var i = n - e,
                    u = 2 * i;
                return K(e) ? he(e, t(0, e.length - 1), n) : $t(r, (function(t) {
                    return e + ((t = (u + (t - e) % u) % u || 0) > i ? u - t : t)
                }))
            },
            distribute: se,
            random: le,
            snap: ae,
            normalize: function(t, e, n) {
                return De(t, e, 0, 1, n)
            },
            getUnit: te,
            clamp: function(t, e, n) {
                return $t(n, (function(n) {
                    return Jt(t, e, n)
                }))
            },
            splitColor: ve,
            toArray: ie,
            mapRange: De,
            pipe: function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return function(t) {
                    return e.reduce((function(t, e) {
                        return e(t)
                    }), t)
                }
            },
            unitize: function(t, e) {
                return function(n) {
                    return t(parseFloat(n)) + (e || te(n))
                }
            },
            interpolate: function t(e, n, r, i) {
                var u = isNaN(e + n) ? 0 : function(t) {
                    return (1 - t) * e + t * n
                };
                if (!u) {
                    var s, o, a, l, h, f = X(e),
                        D = {};
                    if (!0 === r && (i = 1) && (r = null), f) e = {
                        p: e
                    }, n = {
                        p: n
                    };
                    else if (K(e) && !K(n)) {
                        for (a = [], l = e.length, h = l - 2, o = 1; o < l; o++) a.push(t(e[o - 1], e[o]));
                        l--, u = function(t) {
                            t *= l;
                            var e = Math.min(h, ~~t);
                            return a[e](t - e)
                        }, r = n
                    } else i || (e = St(K(e) ? [] : {}, e));
                    if (!a) {
                        for (s in n) Ve.call(D, e, s, "get", n[s]);
                        u = function(t) {
                            return un(t, D) || (f ? e.p : e)
                        }
                    }
                }
                return $t(r, u)
            },
            shuffle: ue
        },
        install: ut,
        effects: ct,
        ticker: Ee,
        updateRoot: Ye.updateRoot,
        plugins: pt,
        globalTimeline: u,
        core: {
            PropTween: hn,
            globals: at,
            Tween: Qe,
            Timeline: Ye,
            Animation: ze,
            getCache: vt,
            _removeLinkedListItem: Lt
        }
    };
    Ct("to,from,fromTo,delayedCall,set,killTweensOf", (function(t) {
        return fn[t] = Qe[t]
    })), Ee.add(Ye.updateRoot), f = fn.to({}, {
        duration: 0
    });
    var Dn = function(t, e) {
            for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e;) n = n._next;
            return n
        },
        pn = function(t, e) {
            return {
                name: t,
                rawVars: 1,
                init: function(t, n, r) {
                    r._onInit = function(t) {
                        var r, i;
                        if (X(n) && (r = {}, Ct(n, (function(t) {
                                return r[t] = 1
                            })), n = r), e) {
                            for (i in r = {}, n) r[i] = e(n[i]);
                            n = r
                        }! function(t, e) {
                            var n, r, i, u = t._targets;
                            for (n in e)
                                for (r = u.length; r--;)(i = t._ptLookup[r][n]) && (i = i.d) && (i._pt && (i = Dn(i, n)), i && i.modifier && i.modifier(e[n], t, u[r], n))
                        }(t, n)
                    }
                }
            }
        },
        cn = fn.registerPlugin({
            name: "attr",
            init: function(t, e, n, r, i) {
                var u, s;
                for (u in e)(s = this.add(t, "setAttribute", (t.getAttribute(u) || 0) + "", e[u], r, i, 0, 0, u)) && (s.op = u), this._props.push(u)
            }
        }, {
            name: "endArray",
            init: function(t, e) {
                for (var n = e.length; n--;) this.add(t, n, t[n] || 0, e[n])
            }
        }, pn("roundProps", oe), pn("modifiers"), pn("snap", ae)) || fn;
    Qe.version = Ye.version = cn.version = "3.5.1", l = 1, G() && be();
    Te.Power0, Te.Power1, Te.Power2, Te.Power3, Te.Power4, Te.Linear, Te.Quad, Te.Cubic, Te.Quart, Te.Quint, Te.Strong, Te.Elastic, Te.Back, Te.SteppedEase, Te.Bounce, Te.Sine, Te.Expo, Te.Circ;
    /*!
     * CSSPlugin 3.5.1
     * https://greensock.com
     *
     * Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var dn, gn, _n, mn, vn, yn, Cn, xn, Fn = {},
        wn = 180 / Math.PI,
        En = Math.PI / 180,
        bn = Math.atan2,
        Tn = /([A-Z])/g,
        An = /(?:left|right|width|margin|padding|x)/i,
        Mn = /[\s,\(]\S/,
        On = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        },
        Sn = function(t, e) {
            return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        },
        Pn = function(t, e) {
            return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        },
        Bn = function(t, e) {
            return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
        },
        kn = function(t, e) {
            var n = e.s + e.c * t;
            e.set(e.t, e.p, ~~(n + (n < 0 ? -.5 : .5)) + e.u, e)
        },
        Ln = function(t, e) {
            return e.set(e.t, e.p, t ? e.e : e.b, e)
        },
        Nn = function(t, e) {
            return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
        },
        Rn = function(t, e, n) {
            return t.style[e] = n
        },
        In = function(t, e, n) {
            return t.style.setProperty(e, n)
        },
        zn = function(t, e, n) {
            return t._gsap[e] = n
        },
        Yn = function(t, e, n) {
            return t._gsap.scaleX = t._gsap.scaleY = n
        },
        Xn = function(t, e, n, r, i) {
            var u = t._gsap;
            u.scaleX = u.scaleY = n, u.renderTransform(i, u)
        },
        jn = function(t, e, n, r, i) {
            var u = t._gsap;
            u[e] = n, u.renderTransform(i, u)
        },
        Vn = "transform",
        Un = Vn + "Origin",
        Wn = function(t, e) {
            var n = gn.createElementNS ? gn.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : gn.createElement(t);
            return n.style ? n : gn.createElement(t)
        },
        qn = function t(e, n, r) {
            var i = getComputedStyle(e);
            return i[n] || i.getPropertyValue(n.replace(Tn, "-$1").toLowerCase()) || i.getPropertyValue(n) || !r && t(e, Hn(n) || n, 1) || ""
        },
        Gn = "O,Moz,ms,Ms,Webkit".split(","),
        Hn = function(t, e, n) {
            var r = (e || vn).style,
                i = 5;
            if (t in r && !n) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); i-- && !(Gn[i] + t in r););
            return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? Gn[i] : "") + t
        },
        Qn = function() {
            "undefined" != typeof window && window.document && (dn = window, gn = dn.document, _n = gn.documentElement, vn = Wn("div") || {
                style: {}
            }, yn = Wn("div"), Vn = Hn(Vn), Un = Vn + "Origin", vn.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", xn = !!Hn("perspective"), mn = 1)
        },
        Kn = function t(e) {
            var n, r = Wn("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                i = this.parentNode,
                u = this.nextSibling,
                s = this.style.cssText;
            if (_n.appendChild(r), r.appendChild(this), this.style.display = "block", e) try {
                n = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
            } catch (t) {} else this._gsapBBox && (n = this._gsapBBox());
            return i && (u ? i.insertBefore(this, u) : i.appendChild(this)), _n.removeChild(r), this.style.cssText = s, n
        },
        Zn = function(t, e) {
            for (var n = e.length; n--;)
                if (t.hasAttribute(e[n])) return t.getAttribute(e[n])
        },
        $n = function(t) {
            var e;
            try {
                e = t.getBBox()
            } catch (n) {
                e = Kn.call(t, !0)
            }
            return e && (e.width || e.height) || t.getBBox === Kn || (e = Kn.call(t, !0)), !e || e.width || e.x || e.y ? e : {
                x: +Zn(t, ["x", "cx", "x1"]) || 0,
                y: +Zn(t, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0
            }
        },
        Jn = function(t) {
            return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !$n(t))
        },
        tr = function(t, e) {
            if (e) {
                var n = t.style;
                e in Fn && e !== Un && (e = Vn), n.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), n.removeProperty(e.replace(Tn, "-$1").toLowerCase())) : n.removeAttribute(e)
            }
        },
        er = function(t, e, n, r, i, u) {
            var s = new hn(t._pt, e, n, 0, 1, u ? Nn : Ln);
            return t._pt = s, s.b = r, s.e = i, t._props.push(n), s
        },
        nr = {
            deg: 1,
            rad: 1,
            turn: 1
        },
        rr = function t(e, n, r, i) {
            var u, s, o, a, l = parseFloat(r) || 0,
                h = (r + "").trim().substr((l + "").length) || "px",
                f = vn.style,
                D = An.test(n),
                p = "svg" === e.tagName.toLowerCase(),
                c = (p ? "client" : "offset") + (D ? "Width" : "Height"),
                d = "px" === i,
                g = "%" === i;
            return i === h || !l || nr[i] || nr[h] ? l : ("px" !== h && !d && (l = t(e, n, r, "px")), a = e.getCTM && Jn(e), g && (Fn[n] || ~n.indexOf("adius")) ? xt(l / (a ? e.getBBox()[D ? "width" : "height"] : e[c]) * 100) : (f[D ? "width" : "height"] = 100 + (d ? h : i), s = ~n.indexOf("adius") || "em" === i && e.appendChild && !p ? e : e.parentNode, a && (s = (e.ownerSVGElement || {}).parentNode), s && s !== gn && s.appendChild || (s = gn.body), (o = s._gsap) && g && o.width && D && o.time === Ee.time ? xt(l / o.width * 100) : ((g || "%" === h) && (f.position = qn(e, "position")), s === e && (f.position = "static"), s.appendChild(vn), u = vn[c], s.removeChild(vn), f.position = "absolute", D && g && ((o = vt(s)).time = Ee.time, o.width = s[c]), xt(d ? u * l / 100 : u && l ? 100 / u * l : 0))))
        },
        ir = function(t, e, n, r) {
            var i;
            return mn || Qn(), e in On && "transform" !== e && ~(e = On[e]).indexOf(",") && (e = e.split(",")[0]), Fn[e] && "transform" !== e ? (i = dr(t, r), i = "transformOrigin" !== e ? i[e] : gr(qn(t, Un)) + " " + i.zOrigin + "px") : (!(i = t.style[e]) || "auto" === i || r || ~(i + "").indexOf("calc(")) && (i = ar[e] && ar[e](t, e, n) || qn(t, e) || yt(t, e) || ("opacity" === e ? 1 : 0)), n && !~(i + "").indexOf(" ") ? rr(t, e, i, n) + n : i
        },
        ur = function(t, e, n, r) {
            if (!n || "none" === n) {
                var i = Hn(e, t, 1),
                    u = i && qn(t, i, 1);
                u && u !== n ? (e = i, n = u) : "borderColor" === e && (n = qn(t, "borderTopColor"))
            }
            var s, o, a, l, h, f, D, p, c, d, g, _, m = new hn(this._pt, t.style, e, 0, 1, rn),
                v = 0,
                y = 0;
            if (m.b = n, m.e = r, n += "", "auto" === (r += "") && (t.style[e] = r, r = qn(t, e) || r, t.style[e] = n), we(s = [n, r]), r = s[1], a = (n = s[0]).match(J) || [], (r.match(J) || []).length) {
                for (; o = J.exec(r);) D = o[0], c = r.substring(v, o.index), h ? h = (h + 1) % 5 : "rgba(" !== c.substr(-5) && "hsla(" !== c.substr(-5) || (h = 1), D !== (f = a[y++] || "") && (l = parseFloat(f) || 0, g = f.substr((l + "").length), (_ = "=" === D.charAt(1) ? +(D.charAt(0) + "1") : 0) && (D = D.substr(2)), p = parseFloat(D), d = D.substr((p + "").length), v = J.lastIndex - d.length, d || (d = d || P.units[e] || g, v === r.length && (r += d, m.e += d)), g !== d && (l = rr(t, e, f, d) || 0), m._pt = {
                    _next: m._pt,
                    p: c || 1 === y ? c : ",",
                    s: l,
                    c: _ ? _ * p : p - l,
                    m: h && h < 4 ? Math.round : 0
                });
                m.c = v < r.length ? r.substring(v, r.length) : ""
            } else m.r = "display" === e && "none" === r ? Nn : Ln;
            return et.test(r) && (m.e = 0), this._pt = m, m
        },
        sr = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        },
        or = function(t, e) {
            if (e.tween && e.tween._time === e.tween._dur) {
                var n, r, i, u = e.t,
                    s = u.style,
                    o = e.u,
                    a = u._gsap;
                if ("all" === o || !0 === o) s.cssText = "", r = 1;
                else
                    for (i = (o = o.split(",")).length; --i > -1;) n = o[i], Fn[n] && (r = 1, n = "transformOrigin" === n ? Un : Vn), tr(u, n);
                r && (tr(u, Vn), a && (a.svg && u.removeAttribute("transform"), dr(u, 1), a.uncache = 1))
            }
        },
        ar = {
            clearProps: function(t, e, n, r, i) {
                if ("isFromStart" !== i.data) {
                    var u = t._pt = new hn(t._pt, e, n, 0, 0, or);
                    return u.u = r, u.pr = -10, u.tween = i, t._props.push(n), 1
                }
            }
        },
        lr = [1, 0, 0, 1, 0, 0],
        hr = {},
        fr = function(t) {
            return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
        },
        Dr = function(t) {
            var e = qn(t, Vn);
            return fr(e) ? lr : e.substr(7).match($).map(xt)
        },
        pr = function(t, e) {
            var n, r, i, u, s = t._gsap || vt(t),
                o = t.style,
                a = Dr(t);
            return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (a = [(i = t.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",") ? lr : a : (a !== lr || t.offsetParent || t === _n || s.svg || (i = o.display, o.display = "block", (n = t.parentNode) && t.offsetParent || (u = 1, r = t.nextSibling, _n.appendChild(t)), a = Dr(t), i ? o.display = i : tr(t, "display"), u && (r ? n.insertBefore(t, r) : n ? n.appendChild(t) : _n.removeChild(t))), e && a.length > 6 ? [a[0], a[1], a[4], a[5], a[12], a[13]] : a)
        },
        cr = function(t, e, n, r, i, u) {
            var s, o, a, l = t._gsap,
                h = i || pr(t, !0),
                f = l.xOrigin || 0,
                D = l.yOrigin || 0,
                p = l.xOffset || 0,
                c = l.yOffset || 0,
                d = h[0],
                g = h[1],
                _ = h[2],
                m = h[3],
                v = h[4],
                y = h[5],
                C = e.split(" "),
                x = parseFloat(C[0]) || 0,
                F = parseFloat(C[1]) || 0;
            n ? h !== lr && (o = d * m - g * _) && (a = x * (-g / o) + F * (d / o) - (d * y - g * v) / o, x = x * (m / o) + F * (-_ / o) + (_ * y - m * v) / o, F = a) : (x = (s = $n(t)).x + (~C[0].indexOf("%") ? x / 100 * s.width : x), F = s.y + (~(C[1] || C[0]).indexOf("%") ? F / 100 * s.height : F)), r || !1 !== r && l.smooth ? (v = x - f, y = F - D, l.xOffset = p + (v * d + y * _) - v, l.yOffset = c + (v * g + y * m) - y) : l.xOffset = l.yOffset = 0, l.xOrigin = x, l.yOrigin = F, l.smooth = !!r, l.origin = e, l.originIsAbsolute = !!n, t.style[Un] = "0px 0px", u && (er(u, l, "xOrigin", f, x), er(u, l, "yOrigin", D, F), er(u, l, "xOffset", p, l.xOffset), er(u, l, "yOffset", c, l.yOffset)), t.setAttribute("data-svg-origin", x + " " + F)
        },
        dr = function(t, e) {
            var n = t._gsap || new Ie(t);
            if ("x" in n && !e && !n.uncache) return n;
            var r, i, u, s, o, a, l, h, f, D, p, c, d, g, _, m, v, y, C, x, F, w, E, b, T, A, M, O, S, B, k, L, N = t.style,
                R = n.scaleX < 0,
                I = qn(t, Un) || "0";
            return r = i = u = a = l = h = f = D = p = 0, s = o = 1, n.svg = !(!t.getCTM || !Jn(t)), g = pr(t, n.svg), n.svg && (b = !n.uncache && t.getAttribute("data-svg-origin"), cr(t, b || I, !!b || n.originIsAbsolute, !1 !== n.smooth, g)), c = n.xOrigin || 0, d = n.yOrigin || 0, g !== lr && (y = g[0], C = g[1], x = g[2], F = g[3], r = w = g[4], i = E = g[5], 6 === g.length ? (s = Math.sqrt(y * y + C * C), o = Math.sqrt(F * F + x * x), a = y || C ? bn(C, y) * wn : 0, (f = x || F ? bn(x, F) * wn + a : 0) && (o *= Math.cos(f * En)), n.svg && (r -= c - (c * y + d * x), i -= d - (c * C + d * F))) : (L = g[6], B = g[7], M = g[8], O = g[9], S = g[10], k = g[11], r = g[12], i = g[13], u = g[14], l = (_ = bn(L, S)) * wn, _ && (b = w * (m = Math.cos(-_)) + M * (v = Math.sin(-_)), T = E * m + O * v, A = L * m + S * v, M = w * -v + M * m, O = E * -v + O * m, S = L * -v + S * m, k = B * -v + k * m, w = b, E = T, L = A), h = (_ = bn(-x, S)) * wn, _ && (m = Math.cos(-_), k = F * (v = Math.sin(-_)) + k * m, y = b = y * m - M * v, C = T = C * m - O * v, x = A = x * m - S * v), a = (_ = bn(C, y)) * wn, _ && (b = y * (m = Math.cos(_)) + C * (v = Math.sin(_)), T = w * m + E * v, C = C * m - y * v, E = E * m - w * v, y = b, w = T), l && Math.abs(l) + Math.abs(a) > 359.9 && (l = a = 0, h = 180 - h), s = xt(Math.sqrt(y * y + C * C + x * x)), o = xt(Math.sqrt(E * E + L * L)), _ = bn(w, E), f = Math.abs(_) > 2e-4 ? _ * wn : 0, p = k ? 1 / (k < 0 ? -k : k) : 0), n.svg && (b = t.getAttribute("transform"), n.forceCSS = t.setAttribute("transform", "") || !fr(qn(t, Vn)), b && t.setAttribute("transform", b))), Math.abs(f) > 90 && Math.abs(f) < 270 && (R ? (s *= -1, f += a <= 0 ? 180 : -180, a += a <= 0 ? 180 : -180) : (o *= -1, f += f <= 0 ? 180 : -180)), n.x = ((n.xPercent = r && Math.round(t.offsetWidth / 2) === Math.round(-r) ? -50 : 0) ? 0 : r) + "px", n.y = ((n.yPercent = i && Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0) ? 0 : i) + "px", n.z = u + "px", n.scaleX = xt(s), n.scaleY = xt(o), n.rotation = xt(a) + "deg", n.rotationX = xt(l) + "deg", n.rotationY = xt(h) + "deg", n.skewX = f + "deg", n.skewY = D + "deg", n.transformPerspective = p + "px", (n.zOrigin = parseFloat(I.split(" ")[2]) || 0) && (N[Un] = gr(I)), n.xOffset = n.yOffset = 0, n.force3D = P.force3D, n.renderTransform = n.svg ? yr : xn ? vr : mr, n.uncache = 0, n
        },
        gr = function(t) {
            return (t = t.split(" "))[0] + " " + t[1]
        },
        _r = function(t, e, n) {
            var r = te(e);
            return xt(parseFloat(e) + parseFloat(rr(t, "x", n + "px", r))) + r
        },
        mr = function(t, e) {
            e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, vr(t, e)
        },
        vr = function(t, e) {
            var n = e || this,
                r = n.xPercent,
                i = n.yPercent,
                u = n.x,
                s = n.y,
                o = n.z,
                a = n.rotation,
                l = n.rotationY,
                h = n.rotationX,
                f = n.skewX,
                D = n.skewY,
                p = n.scaleX,
                c = n.scaleY,
                d = n.transformPerspective,
                g = n.force3D,
                _ = n.target,
                m = n.zOrigin,
                v = "",
                y = "auto" === g && t && 1 !== t || !0 === g;
            if (m && ("0deg" !== h || "0deg" !== l)) {
                var C, x = parseFloat(l) * En,
                    F = Math.sin(x),
                    w = Math.cos(x);
                x = parseFloat(h) * En, C = Math.cos(x), u = _r(_, u, F * C * -m), s = _r(_, s, -Math.sin(x) * -m), o = _r(_, o, w * C * -m + m)
            }
            "0px" !== d && (v += "perspective(" + d + ") "), (r || i) && (v += "translate(" + r + "%, " + i + "%) "), (y || "0px" !== u || "0px" !== s || "0px" !== o) && (v += "0px" !== o || y ? "translate3d(" + u + ", " + s + ", " + o + ") " : "translate(" + u + ", " + s + ") "), "0deg" !== a && (v += "rotate(" + a + ") "), "0deg" !== l && (v += "rotateY(" + l + ") "), "0deg" !== h && (v += "rotateX(" + h + ") "), "0deg" === f && "0deg" === D || (v += "skew(" + f + ", " + D + ") "), 1 === p && 1 === c || (v += "scale(" + p + ", " + c + ") "), _.style[Vn] = v || "translate(0, 0)"
        },
        yr = function(t, e) {
            var n, r, i, u, s, o = e || this,
                a = o.xPercent,
                l = o.yPercent,
                h = o.x,
                f = o.y,
                D = o.rotation,
                p = o.skewX,
                c = o.skewY,
                d = o.scaleX,
                g = o.scaleY,
                _ = o.target,
                m = o.xOrigin,
                v = o.yOrigin,
                y = o.xOffset,
                C = o.yOffset,
                x = o.forceCSS,
                F = parseFloat(h),
                w = parseFloat(f);
            D = parseFloat(D), p = parseFloat(p), (c = parseFloat(c)) && (p += c = parseFloat(c), D += c), D || p ? (D *= En, p *= En, n = Math.cos(D) * d, r = Math.sin(D) * d, i = Math.sin(D - p) * -g, u = Math.cos(D - p) * g, p && (c *= En, s = Math.tan(p - c), i *= s = Math.sqrt(1 + s * s), u *= s, c && (s = Math.tan(c), n *= s = Math.sqrt(1 + s * s), r *= s)), n = xt(n), r = xt(r), i = xt(i), u = xt(u)) : (n = d, u = g, r = i = 0), (F && !~(h + "").indexOf("px") || w && !~(f + "").indexOf("px")) && (F = rr(_, "x", h, "px"), w = rr(_, "y", f, "px")), (m || v || y || C) && (F = xt(F + m - (m * n + v * i) + y), w = xt(w + v - (m * r + v * u) + C)), (a || l) && (s = _.getBBox(), F = xt(F + a / 100 * s.width), w = xt(w + l / 100 * s.height)), s = "matrix(" + n + "," + r + "," + i + "," + u + "," + F + "," + w + ")", _.setAttribute("transform", s), x && (_.style[Vn] = s)
        },
        Cr = function(t, e, n, r, i, u) {
            var s, o, a = X(i),
                l = parseFloat(i) * (a && ~i.indexOf("rad") ? wn : 1),
                h = u ? l * u : l - r,
                f = r + h + "deg";
            return a && ("short" === (s = i.split("_")[1]) && (h %= 360) !== h % 180 && (h += h < 0 ? 360 : -360), "cw" === s && h < 0 ? h = (h + 36e9) % 360 - 360 * ~~(h / 360) : "ccw" === s && h > 0 && (h = (h - 36e9) % 360 - 360 * ~~(h / 360))), t._pt = o = new hn(t._pt, e, n, r, h, Pn), o.e = f, o.u = "deg", t._props.push(n), o
        },
        xr = function(t, e, n) {
            var r, i, u, s, o, a, l, h = yn.style,
                f = n._gsap;
            for (i in h.cssText = getComputedStyle(n).cssText + ";position:absolute;display:block;", h[Vn] = e, gn.body.appendChild(yn), r = dr(yn, 1), Fn)(u = f[i]) !== (s = r[i]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 && (o = te(u) !== (l = te(s)) ? rr(n, i, u, l) : parseFloat(u), a = parseFloat(s), t._pt = new hn(t._pt, f, i, o, a - o, Sn), t._pt.u = l || 0, t._props.push(i));
            gn.body.removeChild(yn)
        };
    Ct("padding,margin,Width,Radius", (function(t, e) {
        var n = "Top",
            r = "Right",
            i = "Bottom",
            u = "Left",
            s = (e < 3 ? [n, r, i, u] : [n + u, n + r, i + r, i + u]).map((function(n) {
                return e < 2 ? t + n : "border" + n + t
            }));
        ar[e > 1 ? "border" + t : t] = function(t, e, n, r, i) {
            var u, o;
            if (arguments.length < 4) return u = s.map((function(e) {
                return ir(t, e, n)
            })), 5 === (o = u.join(" ")).split(u[0]).length ? u[0] : o;
            u = (r + "").split(" "), o = {}, s.forEach((function(t, e) {
                return o[t] = u[e] = u[e] || u[(e - 1) / 2 | 0]
            })), t.init(e, o, i)
        }
    }));
    var Fr, wr, Er = {
        name: "css",
        register: Qn,
        targetTest: function(t) {
            return t.style && t.nodeType
        },
        init: function(t, e, n, r, i) {
            var u, s, o, a, l, h, f, D, p, c, d, g, _, m, v, y, C, x, F, w = this._props,
                E = t.style;
            for (f in mn || Qn(), e)
                if ("autoRound" !== f && (s = e[f], !pt[f] || !Ue(f, e, n, r, t, i)))
                    if (l = typeof s, h = ar[f], "function" === l && (l = typeof(s = s.call(n, r, t, i))), "string" === l && ~s.indexOf("random(") && (s = fe(s)), h) h(this, t, f, s, n) && (v = 1);
                    else if ("--" === f.substr(0, 2)) this.add(E, "setProperty", getComputedStyle(t).getPropertyValue(f) + "", s + "", r, i, 0, 0, f);
            else if ("undefined" !== l) {
                if (u = ir(t, f), a = parseFloat(u), (c = "string" === l && "=" === s.charAt(1) ? +(s.charAt(0) + "1") : 0) && (s = s.substr(2)), o = parseFloat(s), f in On && ("autoAlpha" === f && (1 === a && "hidden" === ir(t, "visibility") && o && (a = 0), er(this, E, "visibility", a ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== f && "transform" !== f && ~(f = On[f]).indexOf(",") && (f = f.split(",")[0])), d = f in Fn)
                    if (g || ((_ = t._gsap).renderTransform || dr(t), m = !1 !== e.smoothOrigin && _.smooth, (g = this._pt = new hn(this._pt, E, Vn, 0, 1, _.renderTransform, _, 0, -1)).dep = 1), "scale" === f) this._pt = new hn(this._pt, _, "scaleY", _.scaleY, c ? c * o : o - _.scaleY), w.push("scaleY", f), f += "X";
                    else {
                        if ("transformOrigin" === f) {
                            C = void 0, x = void 0, F = void 0, C = (y = s).split(" "), x = C[0], F = C[1] || "50%", "top" !== x && "bottom" !== x && "left" !== F && "right" !== F || (y = x, x = F, F = y), C[0] = sr[x] || x, C[1] = sr[F] || F, s = C.join(" "), _.svg ? cr(t, s, 0, m, 0, this) : ((p = parseFloat(s.split(" ")[2]) || 0) !== _.zOrigin && er(this, _, "zOrigin", _.zOrigin, p), er(this, E, f, gr(u), gr(s)));
                            continue
                        }
                        if ("svgOrigin" === f) {
                            cr(t, s, 1, m, 0, this);
                            continue
                        }
                        if (f in hr) {
                            Cr(this, _, f, a, s, c);
                            continue
                        }
                        if ("smoothOrigin" === f) {
                            er(this, _, "smooth", _.smooth, s);
                            continue
                        }
                        if ("force3D" === f) {
                            _[f] = s;
                            continue
                        }
                        if ("transform" === f) {
                            xr(this, s, t);
                            continue
                        }
                    }
                else f in E || (f = Hn(f) || f);
                if (d || (o || 0 === o) && (a || 0 === a) && !Mn.test(s) && f in E) o || (o = 0), (D = (u + "").substr((a + "").length)) !== (p = te(s) || (f in P.units ? P.units[f] : D)) && (a = rr(t, f, u, p)), this._pt = new hn(this._pt, d ? _ : E, f, a, c ? c * o : o - a, "px" !== p || !1 === e.autoRound || d ? Sn : kn), this._pt.u = p || 0, D !== p && (this._pt.b = u, this._pt.r = Bn);
                else if (f in E) ur.call(this, t, f, u, s);
                else {
                    if (!(f in t)) {
                        st(f, s);
                        continue
                    }
                    this.add(t, f, t[f], s, r, i)
                }
                w.push(f)
            }
            v && ln(this)
        },
        get: ir,
        aliases: On,
        getSetter: function(t, e, n) {
            var r = On[e];
            return r && r.indexOf(",") < 0 && (e = r), e in Fn && e !== Un && (t._gsap.x || ir(t, "x")) ? n && Cn === n ? "scale" === e ? Yn : zn : (Cn = n || {}) && ("scale" === e ? Xn : jn) : t.style && !U(t.style[e]) ? Rn : ~e.indexOf("-") ? In : tn(t, e)
        },
        core: {
            _removeProperty: tr,
            _getMatrix: pr
        }
    };
    cn.utils.checkPrefix = Hn, wr = Ct("x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + (Fr = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function(t) {
        Fn[t] = 1
    })), Ct(Fr, (function(t) {
        P.units[t] = "deg", hr[t] = 1
    })), On[wr[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + Fr, Ct("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function(t) {
        var e = t.split(":");
        On[e[1]] = wr[e[0]]
    })), Ct("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function(t) {
        P.units[t] = "px"
    })), cn.registerPlugin(Er);
    var br, Tr, Ar, Mr = cn.registerPlugin(Er) || cn,
        Or = Mr.core.Tween,
        Sr = function() {
            return br || "undefined" != typeof window && (br = window.gsap) && br.registerPlugin && br
        },
        Pr = function(t) {
            br = Sr(), (Ar = br && br.parseEase("_CE")) ? (Tr = 1, br.parseEase("bounce").config = function(t) {
                return "object" == typeof t ? kr("", t) : kr("bounce(" + t + ")", {
                    strength: +t
                })
            }) : t && console.warn("Please gsap.registerPlugin(CustomEase, CustomBounce)")
        },
        Br = function(t) {
            var e, n = t.length,
                r = 1 / t[n - 2];
            for (e = 2; e < n; e += 2) t[e] = ~~(t[e] * r * 1e3) / 1e3;
            t[n - 2] = 1
        },
        kr = function(t, e) {
            Tr || Pr(1), e = e || {};
            var n, r, i, u, s, o, a, l = Math.min(.999, e.strength || .7),
                h = l,
                f = (e.squash || 0) / 100,
                D = f,
                p = 1 / .03,
                c = .2,
                d = 1,
                g = .1,
                _ = [0, 0, .07, 0, .1, 1, .1, 1],
                m = [0, 0, 0, 0, .1, 0, .1, 0];
            for (s = 0; s < 200 && (o = g + (c *= h * ((h + 1) / 2)), u = 1 - (d *= l * l), r = (i = g + .49 * c) + .8 * (i - (n = g + d / p)), f && (g += f, n += f, i += f, r += f, o += f, a = f / D, m.push(g - f, 0, g - f, a, g - f / 2, a, g, a, g, 0, g, 0, g, -.6 * a, g + (o - g) / 6, 0, o, 0), _.push(g - f, 1, g, 1, g, 1), f *= l * l), _.push(g, 1, n, u, i, u, r, u, o, 1, o, 1), l *= .95, p = d / (o - r), g = o, !(u > .999)); s++);
            if (e.endAtStart && "false" !== e.endAtStart) {
                if (i = -.1, _.unshift(i, 1, i, 1, -.07, 0), D)
                    for (i -= f = 2.5 * D, _.unshift(i, 1, i, 1, i, 1), m.splice(0, 6), m.unshift(i, 0, i, 0, i, 1, i + f / 2, 1, i + f, 1, i + f, 0, i + f, 0, i + f, -.6, i + f + .033, 0), s = 0; s < m.length; s += 2) m[s] -= i;
                for (s = 0; s < _.length; s += 2) _[s] -= i, _[s + 1] = 1 - _[s + 1]
            }
            return f && (Br(m), m[2] = "C" + m[2], Ar(e.squashID || t + "-squash", "M" + m.join(","))), Br(_), _[2] = "C" + _[2], Ar(t, "M" + _.join(","))
        },
        Lr = function() {
            function t(t, e) {
                this.ease = kr(t, e)
            }
            return t.create = function(t, e) {
                return kr(t, e)
            }, t.register = function(t) {
                br = t, Pr()
            }, t
        }();
    /*!
     * CustomBounce 3.5.1
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    Sr() && br.registerPlugin(Lr), Lr.version = "3.5.1";
    /*!
     * paths 3.5.1
     * https://greensock.com
     *
     * Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Nr = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        Rr = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        Ir = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
        zr = /(^[#\.][a-z]|[a-y][a-z])/i,
        Yr = Math.PI / 180,
        Xr = 180 / Math.PI,
        jr = Math.sin,
        Vr = Math.cos,
        Ur = Math.abs,
        Wr = Math.sqrt,
        qr = Math.atan2,
        Gr = function(t) {
            return "string" == typeof t
        },
        Hr = function(t) {
            return "number" == typeof t
        },
        Qr = {},
        Kr = {},
        Zr = function(t) {
            return Math.round((t + 1e8) % 1 * 1e5) / 1e5 || (t < 0 ? 0 : 1)
        },
        $r = function(t) {
            return Math.round(1e5 * t) / 1e5 || 0
        },
        Jr = function(t, e, n, r) {
            var i = t[e],
                u = 1 === r ? 6 : hi(i, n, r);
            if (u && u + n + 2 < i.length) return t.splice(e, 0, i.slice(0, n + u + 2)), i.splice(0, n + u), 1
        },
        ti = function(t, e) {
            return e.totalLength = t.totalLength, t.samples ? (e.samples = t.samples.slice(0), e.lookup = t.lookup.slice(0), e.minLength = t.minLength, e.resolution = t.resolution) : e.totalPoints = t.totalPoints, e
        },
        ei = function(t, e) {
            var n = t.length,
                r = t[n - 1] || [],
                i = r.length;
            e[0] === r[i - 2] && e[1] === r[i - 1] && (e = r.concat(e.slice(2)), n--), t[n] = e
        };

    function ni(t) {
        var e, n = (t = Gr(t) && zr.test(t) && document.querySelector(t) || t).getAttribute ? t : 0;
        return n && (t = t.getAttribute("d")) ? (n._gsPath || (n._gsPath = {}), (e = n._gsPath[t]) && !e._dirty ? e : n._gsPath[t] = di(t)) : t ? Gr(t) ? di(t) : Hr(t[0]) ? [t] : t : console.warn("Expecting a <path> element or an SVG path data string")
    }

    function ri(t) {
        var e, n = 0;
        for (t.reverse(); n < t.length; n += 2) e = t[n], t[n] = t[n + 1], t[n + 1] = e;
        t.reversed = !t.reversed
    }
    var ii = {
        rect: "rx,ry,x,y,width,height",
        circle: "r,cx,cy",
        ellipse: "rx,ry,cx,cy",
        line: "x1,x2,y1,y2"
    };

    function ui(t, e) {
        var n, r, i, u, s, o, a, l, h, f, D, p, c, d, g, _, m, v, y, C, x, F, w = t.tagName.toLowerCase(),
            E = .552284749831;
        return "path" !== w && t.getBBox ? (o = function(t, e) {
            var n, r = document.createElementNS("http://www.w3.org/2000/svg", "path"),
                i = [].slice.call(t.attributes),
                u = i.length;
            for (e = "," + e + ","; --u > -1;) n = i[u].nodeName.toLowerCase(), e.indexOf("," + n + ",") < 0 && r.setAttributeNS(null, n, i[u].nodeValue);
            return r
        }(t, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"), F = function(t, e) {
            for (var n = e ? e.split(",") : [], r = {}, i = n.length; --i > -1;) r[n[i]] = +t.getAttribute(n[i]) || 0;
            return r
        }(t, ii[w]), "rect" === w ? (u = F.rx, s = F.ry || u, r = F.x, i = F.y, f = F.width - 2 * u, D = F.height - 2 * s, n = u || s ? "M" + (_ = (d = (c = r + u) + f) + u) + "," + (v = i + s) + " V" + (y = v + D) + " C" + [_, C = y + s * E, g = d + u * E, x = y + s, d, x, d - (d - c) / 3, x, c + (d - c) / 3, x, c, x, p = r + u * (1 - E), x, r, C, r, y, r, y - (y - v) / 3, r, v + (y - v) / 3, r, v, r, m = i + s * (1 - E), p, i, c, i, c + (d - c) / 3, i, d - (d - c) / 3, i, d, i, g, i, _, m, _, v].join(",") + "z" : "M" + (r + f) + "," + i + " v" + D + " h" + -f + " v" + -D + " h" + f + "z") : "circle" === w || "ellipse" === w ? ("circle" === w ? l = (u = s = F.r) * E : (u = F.rx, l = (s = F.ry) * E), n = "M" + ((r = F.cx) + u) + "," + (i = F.cy) + " C" + [r + u, i + l, r + (a = u * E), i + s, r, i + s, r - a, i + s, r - u, i + l, r - u, i, r - u, i - l, r - a, i - s, r, i - s, r + a, i - s, r + u, i - l, r + u, i].join(",") + "z") : "line" === w ? n = "M" + F.x1 + "," + F.y1 + " L" + F.x2 + "," + F.y2 : "polyline" !== w && "polygon" !== w || (n = "M" + (r = (h = (t.getAttribute("points") + "").match(Rr) || []).shift()) + "," + (i = h.shift()) + " L" + h.join(","), "polygon" === w && (n += "," + r + "," + i + "z")), o.setAttribute("d", mi(o._gsRawPath = di(n))), e && t.parentNode && (t.parentNode.insertBefore(o, t), t.parentNode.removeChild(t)), o) : t
    }

    function si(t, e, n) {
        var r, i = t[e],
            u = t[e + 2],
            s = t[e + 4];
        return i += (u - i) * n, i += ((u += (s - u) * n) - i) * n, r = u + (s + (t[e + 6] - s) * n - u) * n - i, i = t[e + 1], i += ((u = t[e + 3]) - i) * n, i += ((u += ((s = t[e + 5]) - u) * n) - i) * n, $r(qr(u + (s + (t[e + 7] - s) * n - u) * n - i, r) * Xr)
    }

    function oi(t, e, n) {
        void 0 === n && (n = 1);
        var r = (e = e || 0) > n,
            i = Math.max(0, ~~(Ur(n - e) - 1e-8));
        if (r && (r = n, n = e, e = r, r = 1, i -= i ? 1 : 0), e < 0 || n < 0) {
            var u = 1 + ~~Math.min(e, n);
            e += u, n += u
        }
        var s, o, a, l, h, f, D, p = function(t) {
                for (var e = [], n = 0; n < t.length; n++) e[n] = ti(t[n], t[n].slice(0));
                return ti(t, e)
            }(t.totalLength ? t : li(t)),
            c = n > 1,
            d = fi(p, e, Qr, !0),
            g = fi(p, n, Kr),
            _ = g.segment,
            m = d.segment,
            v = g.segIndex,
            y = d.segIndex,
            C = g.i,
            x = d.i,
            F = y === v,
            w = C === x && F,
            E = F && x > C || w && d.t > g.t;
        if (c || i) {
            if (Jr(p, y, x, d.t) && (s = 1, y++, w ? E ? g.t /= d.t : (g.t = (g.t - d.t) / (1 - d.t), v++, C = 0) : y <= v + 1 && !E && (v++, F && (C -= x))), g.t ? Jr(p, v, C, g.t) && (E && s && y++, r && v++) : (v--, r && y--), l = [], f = 1 + (h = p.length) * i, D = y, r)
                for (f += (h - (v = (v || h) - 1) + y) % h, a = 0; a < f; a++) ei(l, p[D]), D = (D || h) - 1;
            else
                for (f += (h - y + v) % h, a = 0; a < f; a++) ei(l, p[D++ % h]);
            p = l
        } else if (o = 1 === g.t ? 6 : hi(_, C, g.t), e !== n)
            for (s = hi(m, x, w ? d.t / g.t : d.t), F && (o += s), _.splice(C + o + 2), (s || x) && m.splice(0, x + s), a = p.length; a--;)(a < y || a > v) && p.splice(a, 1);
        else _.angle = si(_, C + o, 0), d = _[C += o], g = _[C + 1], _.length = _.totalLength = 0, _.totalPoints = p.totalPoints = 8, _.push(d, g, d, g, d, g, d, g);
        return r && function(t, e) {
            var n = t.length;
            for (e || t.reverse(); n--;) t[n].reversed || ri(t[n])
        }(p, c || i), p.totalLength = 0, p
    }

    function ai(t, e, n) {
        e = e || 0, t.samples || (t.samples = [], t.lookup = []);
        var r, i, u, s, o, a, l, h, f, D, p, c, d, g, _, m, v, y = ~~t.resolution || 12,
            C = 1 / y,
            x = n ? e + 6 * n + 1 : t.length,
            F = t[e],
            w = t[e + 1],
            E = e ? e / 6 * y : 0,
            b = t.samples,
            T = t.lookup,
            A = (e ? t.minLength : 1e8) || 1e8,
            M = b[E + n * y - 1],
            O = e ? b[E - 1] : 0;
        for (b.length = T.length = 0, i = e + 2; i < x; i += 6) {
            if (u = t[i + 4] - F, s = t[i + 2] - F, o = t[i] - F, h = t[i + 5] - w, f = t[i + 3] - w, D = t[i + 1] - w, a = l = p = c = 0, Ur(u) < 1e-5 && Ur(h) < 1e-5 && Ur(o) + Ur(D) < 1e-5) t.length > 8 && (t.splice(i, 6), i -= 6, x -= 6);
            else
                for (r = 1; r <= y; r++) a = l - (l = ((g = C * r) * g * u + 3 * (d = 1 - g) * (g * s + d * o)) * g), p = c - (c = (g * g * h + 3 * d * (g * f + d * D)) * g), (m = Wr(p * p + a * a)) < A && (A = m), O += m, b[E++] = O;
            F += u, w += h
        }
        if (M)
            for (M -= O; E < b.length; E++) b[E] += M;
        if (b.length && A)
            for (t.totalLength = v = b[b.length - 1] || 0, t.minLength = A, m = _ = 0, r = 0; r < v; r += A) T[m++] = b[_] < r ? ++_ : _;
        else t.totalLength = b[0] = 0;
        return e ? O - b[e / 2 - 1] : O
    }

    function li(t, e) {
        var n, r, i;
        for (i = n = r = 0; i < t.length; i++) t[i].resolution = ~~e || 12, r += t[i].length, n += ai(t[i]);
        return t.totalPoints = r, t.totalLength = n, t
    }

    function hi(t, e, n) {
        if (n <= 0 || n >= 1) return 0;
        var r = t[e],
            i = t[e + 1],
            u = t[e + 2],
            s = t[e + 3],
            o = t[e + 4],
            a = t[e + 5],
            l = r + (u - r) * n,
            h = u + (o - u) * n,
            f = i + (s - i) * n,
            D = s + (a - s) * n,
            p = l + (h - l) * n,
            c = f + (D - f) * n,
            d = o + (t[e + 6] - o) * n,
            g = a + (t[e + 7] - a) * n;
        return h += (d - h) * n, D += (g - D) * n, t.splice(e + 2, 4, $r(l), $r(f), $r(p), $r(c), $r(p + (h - p) * n), $r(c + (D - c) * n), $r(h), $r(D), $r(d), $r(g)), t.samples && t.samples.splice(e / 6 * t.resolution | 0, 0, 0, 0, 0, 0, 0, 0), 6
    }

    function fi(t, e, n, r) {
        n = n || {}, t.totalLength || li(t), (e < 0 || e > 1) && (e = Zr(e));
        var i, u, s, o, a, l, h, f = 0,
            D = t[0];
        if (t.length > 1) {
            for (s = t.totalLength * e, a = l = 0;
                (a += t[l++].totalLength) < s;) f = l;
            e = (s - (o = a - (D = t[f]).totalLength)) / (a - o) || 0
        }
        return i = D.samples, u = D.resolution, s = D.totalLength * e, o = (l = D.lookup[~~(s / D.minLength)] || 0) ? i[l - 1] : 0, (a = i[l]) < s && (o = a, a = i[++l]), h = 1 / u * ((s - o) / (a - o) + l % u), l = 6 * ~~(l / u), r && 1 === h && (l + 6 < D.length ? (l += 6, h = 0) : f + 1 < t.length && (l = h = 0, D = t[++f])), n.t = h, n.i = l, n.path = t, n.segment = D, n.segIndex = f, n
    }

    function Di(t, e, n, r) {
        var i, u, s, o, a, l, h, f, D, p = t[0],
            c = r || {};
        if ((e < 0 || e > 1) && (e = Zr(e)), t.length > 1) {
            for (s = t.totalLength * e, a = l = 0;
                (a += t[l++].totalLength) < s;) p = t[l];
            e = (s - (o = a - p.totalLength)) / (a - o) || 0
        }
        return i = p.samples, u = p.resolution, s = p.totalLength * e, o = (l = p.lookup[~~(s / p.minLength)] || 0) ? i[l - 1] : 0, (a = i[l]) < s && (o = a, a = i[++l]), D = 1 - (h = 1 / u * ((s - o) / (a - o) + l % u) || 0), f = p[l = 6 * ~~(l / u)], c.x = $r((h * h * (p[l + 6] - f) + 3 * D * (h * (p[l + 4] - f) + D * (p[l + 2] - f))) * h + f), c.y = $r((h * h * (p[l + 7] - (f = p[l + 1])) + 3 * D * (h * (p[l + 5] - f) + D * (p[l + 3] - f))) * h + f), n && (c.angle = p.totalLength ? si(p, l, h >= 1 ? 1 - 1e-9 : h || 1e-9) : p.angle || 0), c
    }

    function pi(t, e, n, r, i, u, s) {
        for (var o, a, l, h, f, D = t.length; --D > -1;)
            for (a = (o = t[D]).length, l = 0; l < a; l += 2) h = o[l], f = o[l + 1], o[l] = h * e + f * r + u, o[l + 1] = h * n + f * i + s;
        return t._dirty = 1, t
    }

    function ci(t, e, n, r, i, u, s, o, a) {
        if (t !== o || e !== a) {
            n = Ur(n), r = Ur(r);
            var l = i % 360 * Yr,
                h = Vr(l),
                f = jr(l),
                D = Math.PI,
                p = 2 * D,
                c = (t - o) / 2,
                d = (e - a) / 2,
                g = h * c + f * d,
                _ = -f * c + h * d,
                m = g * g,
                v = _ * _,
                y = m / (n * n) + v / (r * r);
            y > 1 && (n = Wr(y) * n, r = Wr(y) * r);
            var C = n * n,
                x = r * r,
                F = (C * x - C * v - x * m) / (C * v + x * m);
            F < 0 && (F = 0);
            var w = (u === s ? -1 : 1) * Wr(F),
                E = w * (n * _ / r),
                b = w * (-r * g / n),
                T = (t + o) / 2 + (h * E - f * b),
                A = (e + a) / 2 + (f * E + h * b),
                M = (g - E) / n,
                O = (_ - b) / r,
                S = (-g - E) / n,
                P = (-_ - b) / r,
                B = M * M + O * O,
                k = (O < 0 ? -1 : 1) * Math.acos(M / Wr(B)),
                L = (M * P - O * S < 0 ? -1 : 1) * Math.acos((M * S + O * P) / Wr(B * (S * S + P * P)));
            isNaN(L) && (L = D), !s && L > 0 ? L -= p : s && L < 0 && (L += p), k %= p, L %= p;
            var N, R = Math.ceil(Ur(L) / (p / 4)),
                I = [],
                z = L / R,
                Y = 4 / 3 * jr(z / 2) / (1 + Vr(z / 2)),
                X = h * n,
                j = f * n,
                V = f * -r,
                U = h * r;
            for (N = 0; N < R; N++) g = Vr(i = k + N * z), _ = jr(i), M = Vr(i += z), O = jr(i), I.push(g - Y * _, _ + Y * g, M + Y * O, O - Y * M, M, O);
            for (N = 0; N < I.length; N += 2) g = I[N], _ = I[N + 1], I[N] = g * X + _ * V + T, I[N + 1] = g * j + _ * U + A;
            return I[N - 2] = o, I[N - 1] = a, I
        }
    }

    function di(t) {
        var e, n, r, i, u, s, o, a, l, h, f, D, p, c, d, g = (t + "").replace(Ir, (function(t) {
                var e = +t;
                return e < 1e-4 && e > -1e-4 ? 0 : e
            })).match(Nr) || [],
            _ = [],
            m = 0,
            v = 0,
            y = g.length,
            C = 0,
            x = "ERROR: malformed path: " + t,
            F = function(t, e, n, r) {
                h = (n - t) / 3, f = (r - e) / 3, o.push(t + h, e + f, n - h, r - f, n, r)
            };
        if (!t || !isNaN(g[0]) || isNaN(g[1])) return console.log(x), _;
        for (e = 0; e < y; e++)
            if (p = u, isNaN(g[e]) ? s = (u = g[e].toUpperCase()) !== g[e] : e--, r = +g[e + 1], i = +g[e + 2], s && (r += m, i += v), e || (a = r, l = i), "M" === u) o && (o.length < 8 ? _.length -= 1 : C += o.length), m = a = r, v = l = i, o = [r, i], _.push(o), e += 2, u = "L";
            else if ("C" === u) o || (o = [0, 0]), s || (m = v = 0), o.push(r, i, m + 1 * g[e + 3], v + 1 * g[e + 4], m += 1 * g[e + 5], v += 1 * g[e + 6]), e += 6;
        else if ("S" === u) h = m, f = v, "C" !== p && "S" !== p || (h += m - o[o.length - 4], f += v - o[o.length - 3]), s || (m = v = 0), o.push(h, f, r, i, m += 1 * g[e + 3], v += 1 * g[e + 4]), e += 4;
        else if ("Q" === u) h = m + 2 / 3 * (r - m), f = v + 2 / 3 * (i - v), s || (m = v = 0), m += 1 * g[e + 3], v += 1 * g[e + 4], o.push(h, f, m + 2 / 3 * (r - m), v + 2 / 3 * (i - v), m, v), e += 4;
        else if ("T" === u) h = m - o[o.length - 4], f = v - o[o.length - 3], o.push(m + h, v + f, r + 2 / 3 * (m + 1.5 * h - r), i + 2 / 3 * (v + 1.5 * f - i), m = r, v = i), e += 2;
        else if ("H" === u) F(m, v, m = r, v), e += 1;
        else if ("V" === u) F(m, v, m, v = r + (s ? v - m : 0)), e += 1;
        else if ("L" === u || "Z" === u) "Z" === u && (r = a, i = l, o.closed = !0), ("L" === u || Ur(m - r) > .5 || Ur(v - i) > .5) && (F(m, v, r, i), "L" === u && (e += 2)), m = r, v = i;
        else if ("A" === u) {
            if (c = g[e + 4], d = g[e + 5], h = g[e + 6], f = g[e + 7], n = 7, c.length > 1 && (c.length < 3 ? (f = h, h = d, n--) : (f = d, h = c.substr(2), n -= 2), d = c.charAt(1), c = c.charAt(0)), D = ci(m, v, +g[e + 1], +g[e + 2], +g[e + 3], +c, +d, (s ? m : 0) + 1 * h, (s ? v : 0) + 1 * f), e += n, D)
                for (n = 0; n < D.length; n++) o.push(D[n]);
            m = o[o.length - 2], v = o[o.length - 1]
        } else console.log(x);
        return (e = o.length) < 6 ? (_.pop(), e = 0) : o[0] === o[e - 2] && o[1] === o[e - 1] && (o.closed = !0), _.totalPoints = C + e, _
    }

    function gi(t, e) {
        void 0 === e && (e = 1);
        for (var n = t[0], r = 0, i = [n, r], u = 2; u < t.length; u += 2) i.push(n, r, t[u], r = (t[u] - n) * e / 2, n = t[u], -r);
        return i
    }

    function _i(t, e, n) {
        var r, i, u, s, o, a, l, h, f, D, p, c, d, g, _ = t.length - 2,
            m = +t[0],
            v = +t[1],
            y = +t[2],
            C = +t[3],
            x = [m, v, m, v],
            F = y - m,
            w = C - v,
            E = Math.abs(t[_] - m) < .001 && Math.abs(t[_ + 1] - v) < .001;
        for (isNaN(n) && (n = Math.PI / 10), E && (t.push(y, C), y = m, C = v, m = t[_ - 2], v = t[_ - 1], t.unshift(m, v), _ += 4), e = e || 0 === e ? +e : 1, o = 2; o < _; o += 2) r = m, i = v, m = y, v = C, c = (a = F) * a + (h = w) * h, d = (F = (y = +t[o + 2]) - m) * F + (w = (C = +t[o + 3]) - v) * w, g = (l = y - r) * l + (f = C - i) * f, p = (u = Math.acos((c + d - g) / Wr(4 * c * d))) / Math.PI * e, D = Wr(c) * p, p *= Wr(d), m === r && v === i || (u > n ? (s = qr(f, l), x.push($r(m - Vr(s) * D), $r(v - jr(s) * D), $r(m), $r(v), $r(m + Vr(s) * p), $r(v + jr(s) * p))) : (s = qr(h, a), x.push($r(m - Vr(s) * D), $r(v - jr(s) * D)), s = qr(w, F), x.push($r(m), $r(v), $r(m + Vr(s) * p), $r(v + jr(s) * p))));
        return x.push($r(y), $r(C), $r(y), $r(C)), E && (x.splice(0, 6), x.length = x.length - 6), x
    }

    function mi(t) {
        Hr(t[0]) && (t = [t]);
        var e, n, r, i, u = "",
            s = t.length;
        for (n = 0; n < s; n++) {
            for (i = t[n], u += "M" + $r(i[0]) + "," + $r(i[1]) + " C", e = i.length, r = 2; r < e; r++) u += $r(i[r++]) + "," + $r(i[r++]) + " " + $r(i[r++]) + "," + $r(i[r++]) + " " + $r(i[r++]) + "," + $r(i[r]) + " ";
            i.closed && (u += "z")
        }
        return u
    }
    /*!
     * CustomEase 3.5.1
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var vi, yi, Ci = function() {
            return vi || "undefined" != typeof window && (vi = window.gsap) && vi.registerPlugin && vi
        },
        xi = function() {
            (vi = Ci()) ? (vi.registerEase("_CE", Ti.create), yi = 1) : console.warn("Please gsap.registerPlugin(CustomEase)")
        },
        Fi = function(t) {
            return ~~(1e3 * t + (t < 0 ? -.5 : .5)) / 1e3
        },
        wi = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
        Ei = /[cLlsSaAhHvVtTqQ]/g,
        bi = function t(e, n, r, i, u, s, o, a, l, h, f) {
            var D, p = (e + r) / 2,
                c = (n + i) / 2,
                d = (r + u) / 2,
                g = (i + s) / 2,
                _ = (u + o) / 2,
                m = (s + a) / 2,
                v = (p + d) / 2,
                y = (c + g) / 2,
                C = (d + _) / 2,
                x = (g + m) / 2,
                F = (v + C) / 2,
                w = (y + x) / 2,
                E = o - e,
                b = a - n,
                T = Math.abs((r - o) * b - (i - a) * E),
                A = Math.abs((u - o) * b - (s - a) * E);
            return h || (h = [{
                x: e,
                y: n
            }, {
                x: o,
                y: a
            }], f = 1), h.splice(f || h.length - 1, 0, {
                x: F,
                y: w
            }), (T + A) * (T + A) > l * (E * E + b * b) && (D = h.length, t(e, n, p, c, v, y, F, w, l, h, f), t(F, w, C, x, _, m, o, a, l, h, f + 1 + (h.length - D))), h
        },
        Ti = function() {
            function t(t, e, n) {
                yi || xi(), this.id = t, this.setData(e, n)
            }
            var e = t.prototype;
            return e.setData = function(t, e) {
                e = e || {};
                var n, r, i, u, s, o, a, l, h, f = (t = t || "0,0,1,1").match(wi),
                    D = 1,
                    p = [],
                    c = [],
                    d = e.precision || 1,
                    g = d <= 1;
                if (this.data = t, (Ei.test(t) || ~t.indexOf("M") && t.indexOf("C") < 0) && (f = di(t)[0]), 4 === (n = f.length)) f.unshift(0, 0), f.push(1, 1), n = 8;
                else if ((n - 2) % 6) throw "Invalid CustomEase";
                for (0 == +f[0] && 1 == +f[n - 2] || function(t, e, n) {
                        n || 0 === n || (n = Math.max(+t[t.length - 1], +t[1]));
                        var r, i = -1 * +t[0],
                            u = -n,
                            s = t.length,
                            o = 1 / (+t[s - 2] + i),
                            a = -e || (Math.abs(+t[s - 1] - +t[1]) < .01 * (+t[s - 2] - +t[0]) ? function(t) {
                                var e, n = t.length,
                                    r = 1e20;
                                for (e = 1; e < n; e += 6) + t[e] < r && (r = +t[e]);
                                return r
                            }(t) + u : +t[s - 1] + u);
                        for (a = a ? 1 / a : -o, r = 0; r < s; r += 2) t[r] = (+t[r] + i) * o, t[r + 1] = (+t[r + 1] + u) * a
                    }(f, e.height, e.originY), this.segment = f, u = 2; u < n; u += 6) r = {
                    x: +f[u - 2],
                    y: +f[u - 1]
                }, i = {
                    x: +f[u + 4],
                    y: +f[u + 5]
                }, p.push(r, i), bi(r.x, r.y, +f[u], +f[u + 1], +f[u + 2], +f[u + 3], i.x, i.y, 1 / (2e5 * d), p, p.length - 1);
                for (n = p.length, u = 0; u < n; u++) a = p[u], l = p[u - 1] || a, (a.x > l.x || l.y !== a.y && l.x === a.x || a === l) && a.x <= 1 ? (l.cx = a.x - l.x, l.cy = a.y - l.y, l.n = a, l.nx = a.x, g && u > 1 && Math.abs(l.cy / l.cx - p[u - 2].cy / p[u - 2].cx) > 2 && (g = 0), l.cx < D && (l.cx ? D = l.cx : (l.cx = .001, u === n - 1 && (l.x -= .001, D = Math.min(D, .001), g = 0)))) : (p.splice(u--, 1), n--);
                if (s = 1 / (n = 1 / D + 1 | 0), o = 0, a = p[0], g) {
                    for (u = 0; u < n; u++) h = u * s, a.nx < h && (a = p[++o]), r = a.y + (h - a.x) / a.cx * a.cy, c[u] = {
                        x: h,
                        cx: s,
                        y: r,
                        cy: 0,
                        nx: 9
                    }, u && (c[u - 1].cy = r - c[u - 1].y);
                    c[n - 1].cy = p[p.length - 1].y - r
                } else {
                    for (u = 0; u < n; u++) a.nx < u * s && (a = p[++o]), c[u] = a;
                    o < p.length - 1 && (c[u - 1] = p[p.length - 2])
                }
                return this.ease = function(t) {
                    var e = c[t * n | 0] || c[n - 1];
                    return e.nx < t && (e = e.n), e.y + (t - e.x) / e.cx * e.cy
                }, this.ease.custom = this, this.id && vi.registerEase(this.id, this.ease), this
            }, e.getSVGData = function(e) {
                return t.getSVGData(this, e)
            }, t.create = function(e, n, r) {
                return new t(e, n, r).ease
            }, t.register = function(t) {
                vi = t, xi()
            }, t.get = function(t) {
                return vi.parseEase(t)
            }, t.getSVGData = function(e, n) {
                var r, i, u, s, o, a, l, h, f, D, p = (n = n || {}).width || 100,
                    c = n.height || 100,
                    d = n.x || 0,
                    g = (n.y || 0) + c,
                    _ = vi.utils.toArray(n.path)[0];
                if (n.invert && (c = -c, g = 0), "string" == typeof e && (e = vi.parseEase(e)), e.custom && (e = e.custom), e instanceof t) r = mi(pi([e.segment], p, 0, 0, -c, d, g));
                else {
                    for (r = [d, g], s = 1 / (l = Math.max(5, 200 * (n.precision || 1))), h = 5 / (l += 2), f = Fi(d + s * p), i = ((D = Fi(g + e(s) * -c)) - g) / (f - d), u = 2; u < l; u++) o = Fi(d + u * s * p), a = Fi(g + e(u * s) * -c), (Math.abs((a - D) / (o - f) - i) > h || u === l - 1) && (r.push(f, D), i = (a - D) / (o - f)), f = o, D = a;
                    r = "M" + r.join(",")
                }
                return _ && _.setAttribute("d", r), r
            }, t
        }();
    Ci() && vi.registerPlugin(Ti), Ti.version = "3.5.1";
    /*!
     * CustomWiggle 3.5.1
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Ai, Mi, Oi, Si = function() {
            return Ai || "undefined" != typeof window && (Ai = window.gsap) && Ai.registerPlugin && Ai
        },
        Pi = {
            easeOut: "M0,1,C0.7,1,0.6,0,1,0",
            easeInOut: "M0,0,C0.1,0,0.24,1,0.444,1,0.644,1,0.6,0,1,0",
            anticipate: "M0,0,C0,0.222,0.024,0.386,0,0.4,0.18,0.455,0.65,0.646,0.7,0.67,0.9,0.76,1,0.846,1,1",
            uniform: "M0,0,C0,0.95,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0"
        },
        Bi = function(t) {
            return t
        },
        ki = function(t) {
            if (!Mi)
                if (Ai = Si(), Oi = Ai && Ai.parseEase("_CE")) {
                    for (var e in Pi) Pi[e] = Oi("", Pi[e]);
                    Mi = 1, Ni("wiggle").config = function(t) {
                        return "object" == typeof t ? Ni("", t) : Ni("wiggle(" + t + ")", {
                            wiggles: +t
                        })
                    }
                } else t && console.warn("Please gsap.registerPlugin(CustomEase, CustomWiggle)")
        },
        Li = function(t, e) {
            return "function" != typeof t && (t = Ai.parseEase(t) || Oi("", t)), t.custom || !e ? t : function(e) {
                return 1 - t(e)
            }
        },
        Ni = function(t, e) {
            Mi || ki(1);
            var n, r, i, u, s, o, a, l, h, f = 0 | ((e = e || {}).wiggles || 10),
                D = 1 / f,
                p = D / 2,
                c = "anticipate" === e.type,
                d = Pi[e.type] || Pi.easeOut,
                g = Bi;
            if (c && (g = d, d = Pi.easeOut), e.timingEase && (g = Li(e.timingEase)), e.amplitudeEase && (d = Li(e.amplitudeEase, !0)), l = [0, 0, (o = g(p)) / 4, 0, o / 2, a = c ? -d(p) : d(p), o, a], "random" === e.type) {
                for (l.length = 4, n = g(D), r = 2 * Math.random() - 1, h = 2; h < f; h++) p = n, a = r, n = g(D * h), r = 2 * Math.random() - 1, i = Math.atan2(r - l[l.length - 3], n - l[l.length - 4]), u = Math.cos(i) * D, s = Math.sin(i) * D, l.push(p - u, a - s, p, a, p + u, a + s);
                l.push(n, 0, 1, 0)
            } else {
                for (h = 1; h < f; h++) l.push(g(p + D / 2), a), p += D, a = (a > 0 ? -1 : 1) * d(h * D), o = g(p), l.push(g(p - D / 2), a, o, a);
                l.push(g(p + D / 4), a, g(p + D / 4), 0, 1, 0)
            }
            for (h = l.length; --h > -1;) l[h] = ~~(1e3 * l[h]) / 1e3;
            return l[2] = "C" + l[2], Oi(t, "M" + l.join(","))
        },
        Ri = function() {
            function t(t, e) {
                this.ease = Ni(t, e)
            }
            return t.create = function(t, e) {
                return Ni(t, e)
            }, t.register = function(t) {
                Ai = t, ki()
            }, t
        }();
    Si() && Ai.registerPlugin(Ri), Ri.version = "3.5.1";
    /*!
     * DrawSVGPlugin 3.5.1
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Ii, zi, Yi, Xi, ji, Vi = function() {
            return "undefined" != typeof window
        },
        Ui = function() {
            return Ii || Vi() && (Ii = window.gsap) && Ii.registerPlugin && Ii
        },
        Wi = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
        qi = {
            rect: ["width", "height"],
            circle: ["r", "r"],
            ellipse: ["rx", "ry"],
            line: ["x2", "y2"]
        },
        Gi = function(t) {
            return Math.round(1e4 * t) / 1e4
        },
        Hi = function(t) {
            return parseFloat(t || 0)
        },
        Qi = function(t, e) {
            return Hi(t.getAttribute(e))
        },
        Ki = Math.sqrt,
        Zi = function(t, e, n, r, i, u) {
            return Ki(Math.pow((Hi(n) - Hi(t)) * i, 2) + Math.pow((Hi(r) - Hi(e)) * u, 2))
        },
        $i = function(t) {
            return console.warn(t)
        },
        Ji = function(t) {
            return "non-scaling-stroke" === t.getAttribute("vector-effect")
        },
        tu = function(t) {
            if (!(t = zi(t)[0])) return 0;
            var e, n, r, i, u, s, o, a = t.tagName.toLowerCase(),
                l = t.style,
                h = 1,
                f = 1;
            Ji(t) && (f = t.getScreenCTM(), h = Ki(f.a * f.a + f.b * f.b), f = Ki(f.d * f.d + f.c * f.c));
            try {
                n = t.getBBox()
            } catch (t) {
                $i("Some browsers won't measure invisible elements (like display:none or masks inside defs).")
            }
            var D = n || {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                },
                p = D.x,
                c = D.y,
                d = D.width,
                g = D.height;
            if (n && (d || g) || !qi[a] || (d = Qi(t, qi[a][0]), g = Qi(t, qi[a][1]), "rect" !== a && "line" !== a && (d *= 2, g *= 2), "line" === a && (p = Qi(t, "x1"), c = Qi(t, "y1"), d = Math.abs(d - p), g = Math.abs(g - c))), "path" === a) i = l.strokeDasharray, l.strokeDasharray = "none", e = t.getTotalLength() || 0, h !== f && $i("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."), e *= (h + f) / 2, l.strokeDasharray = i;
            else if ("rect" === a) e = 2 * d * h + 2 * g * f;
            else if ("line" === a) e = Zi(p, c, p + d, c + g, h, f);
            else if ("polyline" === a || "polygon" === a)
                for (r = t.getAttribute("points").match(Wi) || [], "polygon" === a && r.push(r[0], r[1]), e = 0, u = 2; u < r.length; u += 2) e += Zi(r[u - 2], r[u - 1], r[u], r[u + 1], h, f) || 0;
            else "circle" !== a && "ellipse" !== a || (s = d / 2 * h, o = g / 2 * f, e = Math.PI * (3 * (s + o) - Ki((3 * s + o) * (s + 3 * o))));
            return e || 0
        },
        eu = function(t, e) {
            if (!(t = zi(t)[0])) return [0, 0];
            e || (e = tu(t) + 1);
            var n = Yi.getComputedStyle(t),
                r = n.strokeDasharray || "",
                i = Hi(n.strokeDashoffset),
                u = r.indexOf(",");
            return u < 0 && (u = r.indexOf(" ")), (r = u < 0 ? e : Hi(r.substr(0, u)) || 1e-5) > e && (r = e), [Math.max(0, -i), Math.max(0, r - i)]
        },
        nu = function() {
            Vi() && (document, Yi = window, ji = Ii = Ui(), zi = Ii.utils.toArray, Xi = -1 !== ((Yi.navigator || {}).userAgent || "").indexOf("Edge"))
        },
        ru = {
            version: "3.5.1",
            name: "drawSVG",
            register: function(t) {
                Ii = t, nu()
            },
            init: function(t, e, n, r, i) {
                if (!t.getBBox) return !1;
                ji || nu();
                var u, s, o, a, l = tu(t) + 1;
                return this._style = t.style, this._target = t, e + "" == "true" ? e = "0 100%" : e ? -1 === (e + "").indexOf(" ") && (e = "0 " + e) : e = "0 0", s = function(t, e, n) {
                    var r, i, u = t.indexOf(" ");
                    return u < 0 ? (r = void 0 !== n ? n + "" : t, i = t) : (r = t.substr(0, u), i = t.substr(u + 1)), (r = ~r.indexOf("%") ? Hi(r) / 100 * e : Hi(r)) > (i = ~i.indexOf("%") ? Hi(i) / 100 * e : Hi(i)) ? [i, r] : [r, i]
                }(e, l, (u = eu(t, l))[0]), this._length = Gi(l + 10), 0 === u[0] && 0 === s[0] ? (o = Math.max(1e-5, s[1] - l), this._dash = Gi(l + o), this._offset = Gi(l - u[1] + o), this._offsetPT = this.add(this, "_offset", this._offset, Gi(l - s[1] + o))) : (this._dash = Gi(u[1] - u[0]) || 1e-6, this._offset = Gi(-u[0]), this._dashPT = this.add(this, "_dash", this._dash, Gi(s[1] - s[0]) || 1e-5), this._offsetPT = this.add(this, "_offset", this._offset, Gi(-s[0]))), Xi && (a = Yi.getComputedStyle(t)).strokeLinecap !== a.strokeLinejoin && (s = Hi(a.strokeMiterlimit), this.add(t.style, "strokeMiterlimit", s, s + .01)), this._live = Ji(t) || ~(e + "").indexOf("live"), this._props.push("drawSVG"), 1
            },
            render: function(t, e) {
                var n, r, i, u, s = e._pt,
                    o = e._style;
                if (s) {
                    for (e._live && (n = tu(e._target) + 11) !== e._length && (r = n / e._length, e._length = n, e._offsetPT.s *= r, e._offsetPT.c *= r, e._dashPT ? (e._dashPT.s *= r, e._dashPT.c *= r) : e._dash *= r); s;) s.r(t, s.d), s = s._next;
                    i = e._dash, u = e._offset, n = e._length, o.strokeDashoffset = e._offset, 1 !== t && t ? o.strokeDasharray = i + "px," + n + "px" : (i - u < .001 && n - i <= 10 && (o.strokeDashoffset = u + 1), o.strokeDasharray = u < .001 && n - i <= 10 ? "none" : u === i ? "0px, 999999px" : i + "px," + n + "px")
                }
            },
            getLength: tu,
            getPosition: eu
        };
    Ui() && Ii.registerPlugin(ru);
    /*!
     * matrix 3.5.1
     * https://greensock.com
     *
     * Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var iu, uu, su, ou, au, lu, hu, fu, Du = "transform",
        pu = Du + "Origin",
        cu = function(t) {
            var e = t.ownerDocument || t;
            !(Du in t.style) && "msTransform" in t.style && (pu = (Du = "msTransform") + "Origin");
            for (; e.parentNode && (e = e.parentNode););
            if (uu = window, hu = new Cu, e) {
                iu = e, su = e.documentElement, ou = e.body;
                var n = e.createElement("div"),
                    r = e.createElement("div");
                ou.appendChild(n), n.appendChild(r), n.style.position = "static", n.style[Du] = "translate3d(0,0,1px)", fu = r.offsetParent !== n, ou.removeChild(n)
            }
            return e
        },
        du = [],
        gu = [],
        _u = function(t) {
            return t.ownerSVGElement || ("svg" === (t.tagName + "").toLowerCase() ? t : null)
        },
        mu = function t(e, n) {
            if (e.parentNode && (iu || cu(e))) {
                var r = _u(e),
                    i = r ? r.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
                    u = r ? n ? "rect" : "g" : "div",
                    s = 2 !== n ? 0 : 100,
                    o = 3 === n ? 100 : 0,
                    a = "position:absolute;display:block;pointer-events:none;",
                    l = iu.createElementNS ? iu.createElementNS(i.replace(/^https/, "http"), u) : iu.createElement(u);
                return n && (r ? (lu || (lu = t(e)), l.setAttribute("width", .01), l.setAttribute("height", .01), l.setAttribute("transform", "translate(" + s + "," + o + ")"), lu.appendChild(l)) : (au || ((au = t(e)).style.cssText = a), l.style.cssText = a + "width:0.1px;height:0.1px;top:" + o + "px;left:" + s + "px", au.appendChild(l))), l
            }
            throw "Need document and parent."
        },
        vu = function(t, e) {
            var n, r, i, u, s, o = _u(t),
                a = t === o,
                l = o ? du : gu;
            if (t === uu) return t;
            if (l.length || l.push(mu(t, 1), mu(t, 2), mu(t, 3)), n = o ? lu : au, o) i = a ? {
                x: 0,
                y: 0
            } : t.getBBox(), (r = t.transform ? t.transform.baseVal : {}).numberOfItems ? (u = (r = r.numberOfItems > 1 ? function(t) {
                for (var e = new Cu, n = 0; n < t.numberOfItems; n++) e.multiply(t.getItem(n).matrix);
                return e
            }(r) : r.getItem(0).matrix).a * i.x + r.c * i.y, s = r.b * i.x + r.d * i.y) : (r = hu, u = i.x, s = i.y), e && "g" === t.tagName.toLowerCase() && (u = s = 0), n.setAttribute("transform", "matrix(" + r.a + "," + r.b + "," + r.c + "," + r.d + "," + (r.e + u) + "," + (r.f + s) + ")"), (a ? o : t.parentNode).appendChild(n);
            else {
                if (u = s = 0, fu)
                    for (r = t.offsetParent, i = t; i && (i = i.parentNode) && i !== r && i.parentNode;)(uu.getComputedStyle(i)[Du] + "").length > 4 && (u = i.offsetLeft, s = i.offsetTop, i = 0);
                (i = n.style).top = t.offsetTop - s + "px", i.left = t.offsetLeft - u + "px", r = uu.getComputedStyle(t), i[Du] = r[Du], i[pu] = r[pu], i.border = r.border, i.borderLeftStyle = r.borderLeftStyle, i.borderTopStyle = r.borderTopStyle, i.borderLeftWidth = r.borderLeftWidth, i.borderTopWidth = r.borderTopWidth, i.position = "fixed" === r.position ? "fixed" : "absolute", t.parentNode.appendChild(n)
            }
            return n
        },
        yu = function(t, e, n, r, i, u, s) {
            return t.a = e, t.b = n, t.c = r, t.d = i, t.e = u, t.f = s, t
        },
        Cu = function() {
            function t(t, e, n, r, i, u) {
                void 0 === t && (t = 1), void 0 === e && (e = 0), void 0 === n && (n = 0), void 0 === r && (r = 1), void 0 === i && (i = 0), void 0 === u && (u = 0), yu(this, t, e, n, r, i, u)
            }
            var e = t.prototype;
            return e.inverse = function() {
                var t = this.a,
                    e = this.b,
                    n = this.c,
                    r = this.d,
                    i = this.e,
                    u = this.f,
                    s = t * r - e * n || 1e-10;
                return yu(this, r / s, -e / s, -n / s, t / s, (n * u - r * i) / s, -(t * u - e * i) / s)
            }, e.multiply = function(t) {
                var e = this.a,
                    n = this.b,
                    r = this.c,
                    i = this.d,
                    u = this.e,
                    s = this.f,
                    o = t.a,
                    a = t.c,
                    l = t.b,
                    h = t.d,
                    f = t.e,
                    D = t.f;
                return yu(this, o * e + l * r, o * n + l * i, a * e + h * r, a * n + h * i, u + f * e + D * r, s + f * n + D * i)
            }, e.clone = function() {
                return new t(this.a, this.b, this.c, this.d, this.e, this.f)
            }, e.equals = function(t) {
                var e = this.a,
                    n = this.b,
                    r = this.c,
                    i = this.d,
                    u = this.e,
                    s = this.f;
                return e === t.a && n === t.b && r === t.c && i === t.d && u === t.e && s === t.f
            }, e.apply = function(t, e) {
                void 0 === e && (e = {});
                var n = t.x,
                    r = t.y,
                    i = this.a,
                    u = this.b,
                    s = this.c,
                    o = this.d,
                    a = this.e,
                    l = this.f;
                return e.x = n * i + r * s + a || 0, e.y = n * u + r * o + l || 0, e
            }, t
        }();

    function xu(t, e, n) {
        if (!t || !t.parentNode || (iu || cu(t)).documentElement === t) return new Cu;
        var r = function(t) {
                for (var e, n; t && t !== ou;)(n = t._gsap) && !n.scaleX && !n.scaleY && n.renderTransform && (n.scaleX = n.scaleY = 1e-4, n.renderTransform(1, n), e ? e.push(n) : e = [n]), t = t.parentNode;
                return e
            }(t.parentNode),
            i = _u(t) ? du : gu,
            u = vu(t, n),
            s = i[0].getBoundingClientRect(),
            o = i[1].getBoundingClientRect(),
            a = i[2].getBoundingClientRect(),
            l = u.parentNode,
            h = function t(e) {
                return "fixed" === uu.getComputedStyle(e).position || ((e = e.parentNode) && 1 === e.nodeType ? t(e) : void 0)
            }(t),
            f = new Cu((o.left - s.left) / 100, (o.top - s.top) / 100, (a.left - s.left) / 100, (a.top - s.top) / 100, s.left + (h ? 0 : uu.pageXOffset || iu.scrollLeft || su.scrollLeft || ou.scrollLeft || 0), s.top + (h ? 0 : uu.pageYOffset || iu.scrollTop || su.scrollTop || ou.scrollTop || 0));
        if (l.removeChild(u), r)
            for (s = r.length; s--;)(o = r[s]).scaleX = o.scaleY = 0, o.renderTransform(1, o);
        return e ? f.inverse() : f
    }
    /*!
     * MotionPathPlugin 3.5.1
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Fu, wu, Eu, bu, Tu = ["x", "translateX", "left", "marginLeft"],
        Au = ["y", "translateY", "top", "marginTop"],
        Mu = Math.PI / 180,
        Ou = function(t, e, n, r) {
            for (var i = e.length, u = 2 === r ? 0 : r, s = 0; s < i; s++) t[u] = parseFloat(e[s][n]), 2 === r && (t[u + 1] = 0), u += 2;
            return t
        },
        Su = function(t, e, n) {
            return parseFloat(t._gsap.get(t, e, n || "px")) || 0
        },
        Pu = function(t) {
            var e, n = t[0],
                r = t[1];
            for (e = 2; e < t.length; e += 2) n = t[e] += n, r = t[e + 1] += r
        },
        Bu = function(t, e, n, r, i, u, s) {
            "cubic" === s.type ? e = [e] : (e.unshift(Su(n, r, s.unitX), i ? Su(n, i, s.unitY) : 0), s.relative && Pu(e), e = [(i ? _i : gi)(e, s.curviness)]);
            return e = u(Iu(e, n, s)), zu(t, n, r, e, "x", s.unitX), i && zu(t, n, i, e, "y", s.unitY), li(e, s.resolution || (0 === s.curviness ? 20 : 12))
        },
        ku = function(t) {
            return t
        },
        Lu = /[-+\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/g,
        Nu = function(t, e, n) {
            var r, i, u, s = xu(t);
            return "svg" === (t.tagName + "").toLowerCase() ? (i = (r = t.viewBox.baseVal).x, u = r.y, r.width || (r = {
                width: +t.getAttribute("width"),
                height: +t.getAttribute("height")
            })) : (r = e && t.getBBox && t.getBBox(), i = u = 0), e && "auto" !== e && (i += e.push ? e[0] * (r ? r.width : t.offsetWidth || 0) : e.x, u += e.push ? e[1] * (r ? r.height : t.offsetHeight || 0) : e.y), n.apply(i || u ? s.apply({
                x: i,
                y: u
            }) : {
                x: s.e,
                y: s.f
            })
        },
        Ru = function(t, e, n, r) {
            var i, u = xu(t.parentNode, !0, !0),
                s = u.clone().multiply(xu(e)),
                o = Nu(t, n, u),
                a = Nu(e, r, u),
                l = a.x,
                h = a.y;
            return s.e = s.f = 0, "auto" === r && e.getTotalLength && "path" === e.tagName.toLowerCase() && (i = e.getAttribute("d").match(Lu) || [], l += (i = s.apply({
                x: +i[0],
                y: +i[1]
            })).x, h += i.y), (i || e.getBBox && t.getBBox && e.ownerSVGElement === t.ownerSVGElement) && (l -= (i = s.apply(e.getBBox())).x, h -= i.y), s.e = l - o.x, s.f = h - o.y, s
        },
        Iu = function(t, e, n) {
            var r, i, u, s = n.align,
                o = n.matrix,
                a = n.offsetX,
                l = n.offsetY,
                h = n.alignOrigin,
                f = t[0][0],
                D = t[0][1],
                p = Su(e, "x"),
                c = Su(e, "y");
            return t && t.length ? (s && ("self" === s || (r = bu(s)[0] || e) === e ? pi(t, 1, 0, 0, 1, p - f, c - D) : (h && !1 !== h[2] ? Fu.set(e, {
                transformOrigin: 100 * h[0] + "% " + 100 * h[1] + "%"
            }) : h = [Su(e, "xPercent") / -100, Su(e, "yPercent") / -100], u = (i = Ru(e, r, h, "auto")).apply({
                x: f,
                y: D
            }), pi(t, i.a, i.b, i.c, i.d, p + i.e - (u.x - i.e), c + i.f - (u.y - i.f)))), o ? pi(t, o.a, o.b, o.c, o.d, o.e, o.f) : (a || l) && pi(t, 1, 0, 0, 1, a || 0, l || 0), t) : ni("M0,0L0,0")
        },
        zu = function(t, e, n, r, i, u) {
            var s = e._gsap,
                o = s.harness,
                a = o && o.aliases && o.aliases[n],
                l = a && a.indexOf(",") < 0 ? a : n,
                h = t._pt = new wu(t._pt, e, l, 0, 0, ku, 0, s.set(e, l, t));
            h.u = Eu(s.get(e, l, u)) || 0, h.path = r, h.pp = i, t._props.push(l)
        },
        Yu = {
            version: "3.5.1",
            name: "motionPath",
            register: function(t, e, n) {
                Eu = (Fu = t).utils.getUnit, bu = Fu.utils.toArray, wu = n
            },
            init: function(t, e) {
                if (!Fu) return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"), !1;
                "object" == typeof e && !e.style && e.path || (e = {
                    path: e
                });
                var n, r, i, u, s, o, a = [],
                    l = e.path,
                    h = l[0],
                    f = e.autoRotate,
                    D = (s = e.start, o = "end" in e ? e.end : 1, function(t) {
                        return s || 1 !== o ? oi(t, s, o) : t
                    });
                if (this.rawPaths = a, this.target = t, (this.rotate = f || 0 === f) && (this.rOffset = parseFloat(f) || 0, this.radians = !!e.useRadians, this.rProp = e.rotation || "rotation", this.rSet = t._gsap.set(t, this.rProp, this), this.ru = Eu(t._gsap.get(t, this.rProp)) || 0), Array.isArray(l) && !("closed" in l) && "number" != typeof h) {
                    for (r in h) ~Tu.indexOf(r) ? i = r : ~Au.indexOf(r) && (u = r);
                    for (r in i && u ? a.push(Bu(this, Ou(Ou([], l, i, 0), l, u, 1), t, e.x || i, e.y || u, D, e)) : i = u = 0, h) r !== i && r !== u && a.push(Bu(this, Ou([], l, r, 2), t, r, 0, D, e))
                } else li(n = D(Iu(ni(e.path), t, e)), e.resolution), a.push(n), zu(this, t, e.x || "x", n, "x", e.unitX || "px"), zu(this, t, e.y || "y", n, "y", e.unitY || "px")
            },
            render: function(t, e) {
                var n = e.rawPaths,
                    r = n.length,
                    i = e._pt;
                for (t > 1 ? t = 1 : t < 0 && (t = 0); r--;) Di(n[r], t, !r && e.rotate, n[r]);
                for (; i;) i.set(i.t, i.p, i.path[i.pp] + i.u, i.d, t), i = i._next;
                e.rotate && e.rSet(e.target, e.rProp, n[0].angle * (e.radians ? Mu : 1) + e.rOffset + e.ru, e, t)
            },
            getLength: function(t) {
                return li(ni(t)).totalLength
            },
            sliceRawPath: oi,
            getRawPath: ni,
            pointsToSegment: _i,
            stringToRawPath: di,
            rawPathToString: mi,
            transformRawPath: pi,
            getGlobalMatrix: xu,
            getPositionOnPath: Di,
            cacheRawPathMeasurements: li,
            convertToPath: function(t, e) {
                return bu(t).map((function(t) {
                    return ui(t, !1 !== e)
                }))
            },
            convertCoordinates: function(t, e, n) {
                var r = xu(e, !0, !0).multiply(xu(t));
                return n ? r.apply(n) : r
            },
            getAlignMatrix: Ru,
            getRelativePosition: function(t, e, n, r) {
                var i = Ru(t, e, n, r);
                return {
                    x: i.e,
                    y: i.f
                }
            },
            arrayToRawPath: function(t, e) {
                var n = Ou(Ou([], t, (e = e || {}).x || "x", 0), t, e.y || "y", 1);
                return e.relative && Pu(n), ["cubic" === e.type ? n : _i(n, e.curviness)]
            }
        };
    (Fu || "undefined" != typeof window && (Fu = window.gsap) && Fu.registerPlugin && Fu) && Fu.registerPlugin(Yu);
    /*!
     * ScrollToPlugin 3.5.1
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Xu, ju, Vu, Uu, Wu, qu, Gu, Hu = function() {
            return "undefined" != typeof window
        },
        Qu = function() {
            return Xu || Hu() && (Xu = window.gsap) && Xu.registerPlugin && Xu
        },
        Ku = function(t) {
            return "string" == typeof t
        },
        Zu = function(t, e) {
            var n = "x" === e ? "Width" : "Height",
                r = "scroll" + n,
                i = "client" + n;
            return t === Vu || t === Uu || t === Wu ? Math.max(Uu[r], Wu[r]) - (Vu["inner" + n] || Uu[i] || Wu[i]) : t[r] - t["offset" + n]
        },
        $u = function(t, e) {
            var n = "scroll" + ("x" === e ? "Left" : "Top");
            return t === Vu && (null != t.pageXOffset ? n = "page" + e.toUpperCase() + "Offset" : t = null != Uu[n] ? Uu : Wu),
                function() {
                    return t[n]
                }
        },
        Ju = function(t, e) {
            var n = qu(t)[0].getBoundingClientRect(),
                r = !e || e === Vu || e === Wu,
                i = r ? {
                    top: Uu.clientTop - (Vu.pageYOffset || Uu.scrollTop || Wu.scrollTop || 0),
                    left: Uu.clientLeft - (Vu.pageXOffset || Uu.scrollLeft || Wu.scrollLeft || 0)
                } : e.getBoundingClientRect(),
                u = {
                    x: n.left - i.left,
                    y: n.top - i.top
                };
            return !r && e && (u.x += $u(e, "x")(), u.y += $u(e, "y")()), u
        },
        ts = function(t, e, n, r, i) {
            return isNaN(t) || "object" == typeof t ? Ku(t) && "=" === t.charAt(1) ? parseFloat(t.substr(2)) * ("-" === t.charAt(0) ? -1 : 1) + r - i : "max" === t ? Zu(e, n) - i : Math.min(Zu(e, n), Ju(t, e)[n] - i) : parseFloat(t) - i
        },
        es = function() {
            Xu = Qu(), Hu() && Xu && document.body && (Vu = window, Wu = document.body, Uu = document.documentElement, qu = Xu.utils.toArray, Xu.config({
                autoKillThreshold: 7
            }), Gu = Xu.config(), ju = 1)
        },
        ns = {
            version: "3.5.1",
            name: "scrollTo",
            rawVars: 1,
            register: function(t) {
                Xu = t, es()
            },
            init: function(t, e, n, r, i) {
                ju || es();
                this.isWin = t === Vu, this.target = t, this.tween = n, "object" != typeof e ? Ku((e = {
                    y: e
                }).y) && "max" !== e.y && "=" !== e.y.charAt(1) && (e.x = e.y) : e.nodeType && (e = {
                    y: e,
                    x: e
                }), this.vars = e, this.autoKill = !!e.autoKill, this.getX = $u(t, "x"), this.getY = $u(t, "y"), this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != e.x ? (this.add(this, "x", this.x, ts(e.x, t, "x", this.x, e.offsetX || 0), r, i, Math.round), this._props.push("scrollTo_x")) : this.skipX = 1, null != e.y ? (this.add(this, "y", this.y, ts(e.y, t, "y", this.y, e.offsetY || 0), r, i, Math.round), this._props.push("scrollTo_y")) : this.skipY = 1
            },
            render: function(t, e) {
                for (var n, r, i, u, s, o = e._pt, a = e.target, l = e.tween, h = e.autoKill, f = e.xPrev, D = e.yPrev, p = e.isWin; o;) o.r(t, o.d), o = o._next;
                n = p || !e.skipX ? e.getX() : f, i = (r = p || !e.skipY ? e.getY() : D) - D, u = n - f, s = Gu.autoKillThreshold, e.x < 0 && (e.x = 0), e.y < 0 && (e.y = 0), h && (!e.skipX && (u > s || u < -s) && n < Zu(a, "x") && (e.skipX = 1), !e.skipY && (i > s || i < -s) && r < Zu(a, "y") && (e.skipY = 1), e.skipX && e.skipY && (l.kill(), e.vars.onAutoKill && e.vars.onAutoKill.apply(l, e.vars.onAutoKillParams || []))), p ? Vu.scrollTo(e.skipX ? n : e.x, e.skipY ? r : e.y) : (e.skipY || (a.scrollTop = e.y), e.skipX || (a.scrollLeft = e.x)), e.xPrev = e.x, e.yPrev = e.y
            },
            kill: function(t) {
                var e = "scrollTo" === t;
                (e || "scrollTo_x" === t) && (this.skipX = 1), (e || "scrollTo_y" === t) && (this.skipY = 1)
            }
        };
    ns.max = Zu, ns.getOffset = Ju, ns.buildGetter = $u, Qu() && Xu.registerPlugin(ns);
    /*!
     * strings: 3.5.1
     * https://greensock.com
     *
     * Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var rs = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
    /*!
     * SplitText: 3.5.1
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var is, us, ss, os, as = /(?:\r|\n|\t\t)/g,
        ls = /(?:\s\s+)/g,
        hs = function(t) {
            return us.getComputedStyle(t)
        },
        fs = Array.isArray,
        Ds = [].slice,
        ps = function(t, e) {
            var n;
            return fs(t) ? t : "string" == (n = typeof t) && !e && t ? Ds.call(is.querySelectorAll(t), 0) : t && "object" === n && "length" in t ? Ds.call(t, 0) : t ? [t] : []
        },
        cs = function(t) {
            return "absolute" === t.position || !0 === t.absolute
        },
        ds = function(t, e) {
            for (var n, r = e.length; --r > -1;)
                if (n = e[r], t.substr(0, n.length) === n) return n.length
        },
        gs = function(t, e) {
            void 0 === t && (t = "");
            var n = ~t.indexOf("++"),
                r = 1;
            return n && (t = t.split("++").join("")),
                function() {
                    return "<" + e + " style='position:relative;display:inline-block;'" + (t ? " class='" + t + (n ? r++ : "") + "'>" : ">")
                }
        },
        _s = function t(e, n, r) {
            var i = e.nodeType;
            if (1 === i || 9 === i || 11 === i)
                for (e = e.firstChild; e; e = e.nextSibling) t(e, n, r);
            else 3 !== i && 4 !== i || (e.nodeValue = e.nodeValue.split(n).join(r))
        },
        ms = function(t, e) {
            for (var n = e.length; --n > -1;) t.push(e[n])
        },
        vs = function(t, e, n) {
            for (var r; t && t !== e;) {
                if (r = t._next || t.nextSibling) return r.textContent.charAt(0) === n;
                t = t.parentNode || t._parent
            }
        },
        ys = function t(e) {
            var n, r, i = ps(e.childNodes),
                u = i.length;
            for (n = 0; n < u; n++)(r = i[n])._isSplit ? t(r) : (n && 3 === r.previousSibling.nodeType ? r.previousSibling.nodeValue += 3 === r.nodeType ? r.nodeValue : r.firstChild.nodeValue : 3 !== r.nodeType && e.insertBefore(r.firstChild, r), e.removeChild(r))
        },
        Cs = function(t, e) {
            return parseFloat(e[t]) || 0
        },
        xs = function(t, e, n, r, i, u, s) {
            var o, a, l, h, f, D, p, c, d, g, _, m, v = hs(t),
                y = Cs("paddingLeft", v),
                C = -999,
                x = Cs("borderBottomWidth", v) + Cs("borderTopWidth", v),
                F = Cs("borderLeftWidth", v) + Cs("borderRightWidth", v),
                w = Cs("paddingTop", v) + Cs("paddingBottom", v),
                E = Cs("paddingLeft", v) + Cs("paddingRight", v),
                b = Cs("fontSize", v) * (e.lineThreshold || .2),
                T = v.textAlign,
                A = [],
                M = [],
                O = [],
                S = e.wordDelimiter || " ",
                P = e.tag ? e.tag : e.span ? "span" : "div",
                B = e.type || e.split || "chars,words,lines",
                k = i && ~B.indexOf("lines") ? [] : null,
                L = ~B.indexOf("words"),
                N = ~B.indexOf("chars"),
                R = cs(e),
                I = e.linesClass,
                z = ~(I || "").indexOf("++"),
                Y = [];
            for (z && (I = I.split("++").join("")), l = (a = t.getElementsByTagName("*")).length, f = [], o = 0; o < l; o++) f[o] = a[o];
            if (k || R)
                for (o = 0; o < l; o++)((D = (h = f[o]).parentNode === t) || R || N && !L) && (m = h.offsetTop, k && D && Math.abs(m - C) > b && ("BR" !== h.nodeName || 0 === o) && (p = [], k.push(p), C = m), R && (h._x = h.offsetLeft, h._y = m, h._w = h.offsetWidth, h._h = h.offsetHeight), k && ((h._isSplit && D || !N && D || L && D || !L && h.parentNode.parentNode === t && !h.parentNode._isSplit) && (p.push(h), h._x -= y, vs(h, t, S) && (h._wordEnd = !0)), "BR" === h.nodeName && (h.nextSibling && "BR" === h.nextSibling.nodeName || 0 === o) && k.push([])));
            for (o = 0; o < l; o++) D = (h = f[o]).parentNode === t, "BR" !== h.nodeName ? (R && (d = h.style, L || D || (h._x += h.parentNode._x, h._y += h.parentNode._y), d.left = h._x + "px", d.top = h._y + "px", d.position = "absolute", d.display = "block", d.width = h._w + 1 + "px", d.height = h._h + "px"), !L && N ? h._isSplit ? (h._next = h.nextSibling, h.parentNode.appendChild(h)) : h.parentNode._isSplit ? (h._parent = h.parentNode, !h.previousSibling && h.firstChild && (h.firstChild._isFirst = !0), h.nextSibling && " " === h.nextSibling.textContent && !h.nextSibling.nextSibling && Y.push(h.nextSibling), h._next = h.nextSibling && h.nextSibling._isFirst ? null : h.nextSibling, h.parentNode.removeChild(h), f.splice(o--, 1), l--) : D || (m = !h.nextSibling && vs(h.parentNode, t, S), h.parentNode._parent && h.parentNode._parent.appendChild(h), m && h.parentNode.appendChild(is.createTextNode(" ")), "span" === P && (h.style.display = "inline"), A.push(h)) : h.parentNode._isSplit && !h._isSplit && "" !== h.innerHTML ? M.push(h) : N && !h._isSplit && ("span" === P && (h.style.display = "inline"), A.push(h))) : k || R ? (h.parentNode && h.parentNode.removeChild(h), f.splice(o--, 1), l--) : L || t.appendChild(h);
            for (o = Y.length; --o > -1;) Y[o].parentNode.removeChild(Y[o]);
            if (k) {
                for (R && (g = is.createElement(P), t.appendChild(g), _ = g.offsetWidth + "px", m = g.offsetParent === t ? 0 : t.offsetLeft, t.removeChild(g)), d = t.style.cssText, t.style.cssText = "display:none;"; t.firstChild;) t.removeChild(t.firstChild);
                for (c = " " === S && (!R || !L && !N), o = 0; o < k.length; o++) {
                    for (p = k[o], (g = is.createElement(P)).style.cssText = "display:block;text-align:" + T + ";position:" + (R ? "absolute;" : "relative;"), I && (g.className = I + (z ? o + 1 : "")), O.push(g), l = p.length, a = 0; a < l; a++) "BR" !== p[a].nodeName && (h = p[a], g.appendChild(h), c && h._wordEnd && g.appendChild(is.createTextNode(" ")), R && (0 === a && (g.style.top = h._y + "px", g.style.left = y + m + "px"), h.style.top = "0px", m && (h.style.left = h._x - m + "px")));
                    0 === l ? g.innerHTML = "&nbsp;" : L || N || (ys(g), _s(g, String.fromCharCode(160), " ")), R && (g.style.width = _, g.style.height = h._h + "px"), t.appendChild(g)
                }
                t.style.cssText = d
            }
            R && (s > t.clientHeight && (t.style.height = s - w + "px", t.clientHeight < s && (t.style.height = s + x + "px")), u > t.clientWidth && (t.style.width = u - E + "px", t.clientWidth < u && (t.style.width = u + F + "px"))), ms(n, A), L && ms(r, M), ms(i, O)
        },
        Fs = function(t, e, n, r) {
            var i, u, s, o, a, l, h, f, D = e.tag ? e.tag : e.span ? "span" : "div",
                p = ~(e.type || e.split || "chars,words,lines").indexOf("chars"),
                c = cs(e),
                d = e.wordDelimiter || " ",
                g = " " !== d ? "" : c ? "&#173; " : " ",
                _ = "</" + D + ">",
                m = 1,
                v = e.specialChars ? "function" == typeof e.specialChars ? e.specialChars : ds : null,
                y = is.createElement("div"),
                C = t.parentNode;
            for (C.insertBefore(y, t), y.textContent = t.nodeValue, C.removeChild(t), h = -1 !== (i = function t(e) {
                    var n = e.nodeType,
                        r = "";
                    if (1 === n || 9 === n || 11 === n) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) r += t(e)
                    } else if (3 === n || 4 === n) return e.nodeValue;
                    return r
                }(t = y)).indexOf("<"), !1 !== e.reduceWhiteSpace && (i = i.replace(ls, " ").replace(as, "")), h && (i = i.split("<").join("{{LT}}")), a = i.length, u = (" " === i.charAt(0) ? g : "") + n(), s = 0; s < a; s++)
                if (l = i.charAt(s), v && (f = v(i.substr(s), e.specialChars))) l = i.substr(s, f || 1), u += p && " " !== l ? r() + l + "</" + D + ">" : l, s += f - 1;
                else if (l === d && i.charAt(s - 1) !== d && s) {
                for (u += m ? _ : "", m = 0; i.charAt(s + 1) === d;) u += g, s++;
                s === a - 1 ? u += g : ")" !== i.charAt(s + 1) && (u += g + n(), m = 1)
            } else "{" === l && "{{LT}}" === i.substr(s, 6) ? (u += p ? r() + "{{LT}}</" + D + ">" : "{{LT}}", s += 5) : l.charCodeAt(0) >= 55296 && l.charCodeAt(0) <= 56319 || i.charCodeAt(s + 1) >= 65024 && i.charCodeAt(s + 1) <= 65039 ? (o = ((i.substr(s, 12).split(rs) || [])[1] || "").length || 2, u += p && " " !== l ? r() + i.substr(s, o) + "</" + D + ">" : i.substr(s, o), s += o - 1) : u += p && " " !== l ? r() + l + "</" + D + ">" : l;
            t.outerHTML = u + (m ? _ : ""), h && _s(C, "{{LT}}", "<")
        },
        ws = function t(e, n, r, i) {
            var u, s, o = ps(e.childNodes),
                a = o.length,
                l = cs(n);
            if (3 !== e.nodeType || a > 1) {
                for (n.absolute = !1, u = 0; u < a; u++)(3 !== (s = o[u]).nodeType || /\S+/.test(s.nodeValue)) && (l && 3 !== s.nodeType && "inline" === hs(s).display && (s.style.display = "inline-block", s.style.position = "relative"), s._isSplit = !0, t(s, n, r, i));
                return n.absolute = l, void(e._isSplit = !0)
            }
            Fs(e, n, r, i)
        },
        Es = function() {
            function t(t, e) {
                ss || (is = document, us = window, ss = 1), this.elements = ps(t), this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = e || {}, this.split(e)
            }
            var e = t.prototype;
            return e.split = function(t) {
                this.isSplit && this.revert(), this.vars = t = t || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
                for (var e, n, r, i = this.elements.length, u = t.tag ? t.tag : t.span ? "span" : "div", s = gs(t.wordsClass, u), o = gs(t.charsClass, u); --i > -1;) r = this.elements[i], this._originals[i] = r.innerHTML, e = r.clientHeight, n = r.clientWidth, ws(r, t, s, o), xs(r, t, this.chars, this.words, this.lines, n, e);
                return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
            }, e.revert = function() {
                var t = this._originals;
                if (!t) throw "revert() call wasn't scoped properly.";
                return this.elements.forEach((function(e, n) {
                    return e.innerHTML = t[n]
                })), this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
            }, t.create = function(e, n) {
                return new t(e, n)
            }, t
        }();
    Es.version = "3.5.1", Mr.registerPlugin(Qe, Or, Ye, Ye, Lr, Ti, Ri, ru, Yu, ns, Er);
    var bs = os = window.punchgs = window.tpGS = {};
    for (var Ts in bs.gsap = Mr, bs.TweenLite = Qe, bs.TweenMax = Or, bs.TimelineLite = Ye, bs.TimelineMax = Ye, bs.CustomBounce = Lr, bs.CustomEase = Ti, bs.CustomWiggle = Ri, bs.DrawSVGPlugin = ru, bs.MotionPathPlugin = Yu, bs.ScrollToPlugin = ns, bs.CSSPlugin = Er, /*!Map SplitText to tpGS TPGSSPLITTEXT*/ bs.SplitText = Es, bs.RAD2DEG = 180 / Math.PI, bs.DEG2RAD = Math.PI / 180, /*!REGISTER MOTION PATH (BEZIER)*/ bs.gsap.registerPlugin(bs.MotionPathPlugin), bs.gsap.config({
            nullTargetWarn: !1
        }), /*!FallBack for old and new Eases*/ bs.eases = bs.gsap.parseEase(), bs.eases) bs.eases.hasOwnProperty(Ts) && void 0 === bs[Ts] && (bs[Ts] = bs.eases[Ts]) /*!FallBack for Essential Grid*/ ;
    void 0 !== os && void 0 !== os.TweenLite && void 0 === os.TweenLite.lagSmoothing && (os.TweenLite.lagSmoothing = function() {});
    var As = [];

    function Ms(t, e, n) {
        var r = document.createElement("canvas"),
            i = r.getContext("2d");
        if (r.width = 100, r.height = 200, 0 === t.length) i.fillStyle = n;
        else {
            for (var u = i.createLinearGradient(0, 0, 100, 0), s = 0; s < t.length; s++) u.addColorStop(t[s].stop / 100, t[s].color);
            i.fillStyle = u
        }
        i.fillRect(0, 0, 100, 200);
        var o = i.getImageData(0, 0, 100, 2).data,
            a = "";
        for (s = 0; s < e.length; s++) {
            var l = Math.ceil(e[s]),
                h = 4 * (0 !== l ? l - 1 : l);
            a += "rgba(" + o[h] + "," + o[h + 1] + "," + o[h + 2] + "," + o[h + 3] / 255 + ")", a += " " + l + (e.length - 1 === s ? "%" : "%,")
        }
        return r.remove(), a
    }

    function Os(t, e, n, r) {
        for (var i = "", u = bs.gsap.utils.mapRange(0, r.length - 1, 0, t.length - 1), s = 0; s < r.length; s++) {
            var o = Math.round(u(s));
            i += t[o].color, i += " " + t[o].stop + (r.length - 1 === s ? "%" : "%,")
        }
        return i
    }

    function Ss(t) {
        var e = /rgb([\s\S]*?)%/g,
            n = [],
            r = [],
            i = [];
        do {
            (s = e.exec(t)) && n.push(s[0])
        } while (s);
        for (var u = 0; u < n.length; u++) {
            var s = n[u],
                o = (t = /rgb([\s\S]*?)\)/.exec(s), /\)([\s\S]*?)%/.exec(s));
            t[0] && (t = t[0]), o[1] && (o = o[1]), i.push(parseFloat(o)), r.push({
                color: t,
                stop: parseFloat(o)
            })
        }
        return 0 === r.length && (r.push({
            color: t,
            stop: 0
        }), i.push(0), r.push({
            color: t,
            stop: 100
        }), i.push(100)), {
            points: r,
            stops: i
        }
    }
    bs.getSSGColors = function(t, e, n) {
        if (n = void 0 === n ? "fading" : n, -1 === t.indexOf("gradient") && -1 === e.indexOf("gradient")) return {
            from: t,
            to: e
        };
        for (var r = {
                from: t,
                to: e
            }, i = 0; i < As.length; i++) {
            if (As[i].from === t && As[i].to === e && As[i].type === n) return {
                from: As[i].rFrom,
                to: As[i].rTo
            };
            if (As[i].from === e && As[i].to === t && As[i].type === n) return {
                from: As[i].rTo,
                to: As[i].rFrom
            }
        }
        var u = Ss(t),
            s = Ss(e);
        if (u.stops.length === s.stops.length && -1 !== t.indexOf("gradient") && -1 !== e.indexOf("gradient")) return {
            from: t,
            to: e
        };
        var o, a, l = u.stops;
        for (i = 0; i < s.stops.length; i++) - 1 === l.indexOf(s.stops[i]) && l.push(s.stops[i]);
        if (l.sort((function(t, e) {
                return t - e
            })), -1 !== t.indexOf("gradient(")) {
            var h = -1 !== t.indexOf("deg,") ? t.indexOf("deg,") + 4 : -1 !== t.indexOf("at center,") ? t.indexOf("at center,") + 10 : t.indexOf("gradient(") + 9;
            o = t.substring(0, h), -1 === e.indexOf("gradient(") && (a = t.substring(0, h))
        }
        if (-1 !== e.indexOf("gradient(")) {
            h = -1 !== e.indexOf("deg,") ? e.indexOf("deg,") + 4 : -1 !== e.indexOf("at center,") ? e.indexOf("at center,") + 10 : e.indexOf("gradient(") + 9;
            a = e.substring(0, h), -1 === t.indexOf("gradient(") && (o = e.substring(0, h))
        }
        return "fading" === n ? (u.stops.length, s.stops.length, o += Ms(u.points, l, t), a += Ms(s.points, l, e)) : "sliding" === n && (u.stops.length > s.stops.length ? a += Os(s.points, l, e, u.points) : o += Os(u.points, l, t, s.points)), o += ")", a += ")", "sliding" === n && (u.stops.length > s.stops.length ? o = t : a = e), r.rFrom = o, r.rTo = a, r.tyep = n, As.push(r), {
            from: o,
            to: a
        }
    }
}]);
window.RS_MODULES = window.RS_MODULES || {};
window.RS_MODULES.tpGS = {
    loaded: true,
    version: "6.4.11"
};
if (window.RS_MODULES.checkMinimal) window.RS_MODULES.checkMinimal();;
/*!
- Slider Revolution JavaScript Plugin -
..........................xXXXXX.................
................. xXXXXX..xXXXXX..xXXXXX.........
..................xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
.........,xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
.........,xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
.........,xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
.....................xxxxxxxxxxxxxxxxxxx.........
.....................xxxxxxxxxxxxxxxxxxx.........
.....................xxxxxxxxxxxxxxxxxxx.........
DATE: 2021-06-16
@author: Krisztian Horvath, ThemePunch OHG.
INTRODUCING GIT
UPDATES AND DOCS AT:
https://www.themepunch.com/support-center
GET LICENSE AT:
https://www.themepunch.com/links/slider_revolution_wordpress_regular_license
LICENSE:
Copyright (c) 2009-2019, ThemePunch. All rights reserved.
This work is subject to the terms at https://www.themepunch.com/links/slider_revolution_wordpress_regular_license (Regular / Extended)
*/
! function(e, i) {
    "use strict";
    var t = "Slider Revolution 6.5.2";
    window.RSANYID = window.RSANYID === i ? [] : window.RSANYID, window.RSANYID_sliderID = window.RSANYID_sliderID === i ? [] : window.RSANYID_sliderID, e.fn.revolution = e.fn.revolution || {};
    var a = e.fn.revolution;
    e.fn.revolutionInit = function(t) {
        return this.each(function() {
            a.ISM = a.ISM || a.is_mobile();
            for (var s = document.getElementsByClassName("rs-p-wp-fix"); s[0];) s[0].parentNode.removeChild(s[0]);
            this.id !== i ? (a[n] = {
                anyid: []
            }, this.id = a.revCheckIDS(n, this, !0)) : this.id = "rs_module_" + Math.round(1e7 * Math.random());
            var n = this.id,
                d = a.clone(t);
            a[n] = G(t), a[n].ignoreHeightChange = a.ISM && "fullscreen" === a[n].sliderLayout && a[n].ignoreHeightChange, a[n].option_export = d, a[n].anyid = [], a[n]._Lshortcuts = {}, a[n].computedStyle = {}, a[n].c = e(this), a[n].cpar = a[n].c.parent(), a[n].canvas = a[n].c.find("rs-slides"), a[n].caches = {
                calcResponsiveLayersList: [],
                contWidthManager: {}
            }, a[n].sbgs = {}, window.RSBrowser = window.RSBrowser === i ? a.get_browser() : window.RSBrowser, a.setIsIOS(), a.setIsChrome8889(), a[n].noDetach = a[n].BUG_ie_clipPath = "Edge" === window.RSBrowser || "IE" === window.RSBrowser, a.getByTag = r(), a[n].indexhelper = 0, a[n].fullScreenOffsetResult = 0, a[n].level = 0, a[n].rtl = e("body").hasClass("rtl"), a[n]._L = a[n]._L === i ? {} : a[n]._L, a[n].emptyObject = "{}", a[n].dimensionReCheck = {}, a.globalListener === i && a.pageHandler(n), a[n].stopAfterLoops != i && a[n].stopAfterLoops > -1 ? a[n].looptogo = a[n].stopAfterLoops : a[n].looptogo = "disabled", window.T = a[n], a[n].BUG_safari_clipPath = "Safari" === a.get_browser() && a.get_browser_version() > "12", a[n].minHeight = "fullwidth" === a[n].sliderLayout ? 0 : a[n].minHeight != i && "" !== a[n].minHeight ? parseInt(a[n].minHeight, 0) : 0, a[n].minHeight = a[n].minHeight === i ? 0 : a[n].minHeight, a[n].isEdge = "Edge" === a.get_browser(), o(n), a.updateVisibleArea(n), B(n), a.mesuredScrollBarDone || a.mesureScrollBar(), window.requestAnimationFrame(function() {
                if ("fullscreen" === a[n].sliderLayout) {
                    var e = a.getFullscreenOffsets(n);
                    0 !== e && a[n].cpar.height(a.getWinH(n) - e)
                }
                a[n].cpar[0].style.visibility = "visible"
            }), "hero" == a[n].sliderType && a[n].c.find("rs-slide").each(function(i) {
                i > 0 && e(this).remove()
            }), a[n].navigation.use = "hero" !== a[n].sliderType && ("carousel" == a[n].sliderType || a[n].navigation.keyboardNavigation || "on" == a[n].navigation.mouseScrollNavigation || "carousel" == a[n].navigation.mouseScrollNavigation || a[n].navigation.touch.touchenabled || a[n].navigation.arrows.enable || a[n].navigation.bullets.enable || a[n].navigation.thumbnails.enable || a[n].navigation.tabs.enable), a[n].c.find("rs-bgvideo").each(function() {
                "RS-BGVIDEO" !== this.tagName || this.id !== i && "" !== this.id || (this.id = "rs-bg-video-" + Math.round(1e6 * Math.random()))
            }), tpGS.force3D = "auto", !0 === a[n].modal.useAsModal && -1 === a.RS_prioList.indexOf(n) && (a.RS_toInit[n] = !1, a.RS_prioList.push(n)), a.RS_killedlist !== i && -1 !== a.RS_killedlist.indexOf(n) && (a.RS_toInit[n] = !1, a.RS_prioList.push(n)), !0 === a.RS_prioListFirstInit && !0 !== a[n].modal.useAsModal && -1 === a.RS_prioList.indexOf(n) && (a.RS_toInit[n] = !1, a.RS_prioList.push(n)), a.initNextRevslider(n)
        })
    };
    a = window.RS_F;
    e.fn.extend({
        getRSJASONOptions: function(e) {
            console.log(JSON.stringify(a[e].option_export))
        },
        getRSVersion: function(e) {
            var i, t, a = window.SliderRevolutionVersion;
            if (!e) {
                for (var r in i = t = "---------------------------------------------------------\n", i += "    Currently Loaded Slider Revolution & SR Modules :\n" + t, a) a.hasOwnProperty(r) && (i += a[r].alias + ": " + a[r].ver + "\n");
                i += t
            }
            return e ? a : i
        },
        revremoveslide: function(i) {
            return this.each(function() {
                var t = this.id;
                if (!(i < 0 || i > a[t].slideamount) && a[t] && a[t].slides.length > 0 && (i > 0 || i <= a[t].slides.length)) {
                    var r = a.gA(a[t].slides[i], "key");
                    a[t].slideamount = a[t].slideamount - 1, a[t].realslideamount = a[t].realslideamount - 1, n("rs-bullet", r, t), n("rs-tab", r, t), n("rs-thumb", r, t), e(a[t].slides[i]).remove(), a[t].thumbs = s(a[t].thumbs, i), a.updateNavIndexes && a.updateNavIndexes(t), i <= a[t].pr_active_key && (a[t].pr_active_key = a[t].pr_active_key - 1)
                }
            })
        },
        revaddcallback: function(e) {
            return this.each(function() {
                a[this.id] && (a[this.id].callBackArray === i && (a[this.id].callBackArray = []), a[this.id].callBackArray.push(e))
            })
        },
        revgetparallaxproc: function() {
            if (a[this[0].id]) return a[this[0].id].scrollproc
        },
        revdebugmode: function() {},
        revscroll: function(i) {
            return this.each(function() {
                var t = e(this);
                e("body,html").animate({
                    scrollTop: t.offset().top + t.height() - i + "px"
                }, {
                    duration: 400
                })
            })
        },
        revredraw: function() {
            return this.each(function() {
                m(this.id, i, !0)
            })
        },
        revkill: function() {
            return this.each(function() {
                var t = this.id;
                a[t].c.data("conthover", 1), a[t].c.data("conthoverchanged", 1), a[t].c.trigger("revolution.slide.onpause"), a[t].tonpause = !0, a[t].c.trigger("stoptimer"), a[t].sliderisrunning = !1;
                var r = "updateContainerSizes." + a[t].c.attr("id");
                a.window.unbind(r), tpGS.gsap.killTweensOf(a[t].c.find("*"), !1), tpGS.gsap.killTweensOf(a[t].c, !1), a[t].c.unbind("hover, mouseover, mouseenter,mouseleave, resize"), a[t].c.find("*").each(function() {
                    var t = e(this);
                    t.unbind("on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer"), t.off("on, hover, mouseenter,mouseleave,mouseover, resize"), t.data("mySplitText", null), t.data("ctl", null), t.data("tween") != i && t.data("tween").kill(), t.data("pztl") != i && t.data("pztl").kill(), t.data("timeline_out") != i && t.data("timeline_out").kill(), t.data("timeline") != i && t.data("timeline").kill(), t.remove(), t.empty(), t = null
                }), tpGS.gsap.killTweensOf(a[t].c.find("*"), !1), tpGS.gsap.killTweensOf(a[t].c, !1), a[t].progressC.remove();
                try {
                    a[t].c.closest(".rev_slider_wrapper").detach()
                } catch (e) {}
                try {
                    a[t].c.closest("rs-fullwidth-wrap").remove()
                } catch (e) {}
                try {
                    a[t].c.closest("rs-module-wrap").remove()
                } catch (e) {}
                try {
                    a[t].c.remove()
                } catch (e) {}
                a[t].cpar.detach(), a[t].c.html(""), a[t].c = null, delete a[t], a.RS_prioList.splice(a.RS_prioList.indexOf(t), 1), a.RS_toInit[t] = !1, a.RS_killedlist = a.RS_killedlist === i ? [] : a.RS_killedlist, -1 === a.RS_killedlist.indexOf(t) && a.RS_killedlist.push(t)
            })
        },
        revpause: function() {
            return this.each(function() {
                var t = e(this);
                t != i && t.length > 0 && e("body").find("#" + t.attr("id")).length > 0 && (t.data("conthover", 1), t.data("conthoverchanged", 1), t.trigger("revolution.slide.onpause"), a[this.id].tonpause = !0, t.trigger("stoptimer"))
            })
        },
        revresume: function() {
            return this.each(function() {
                if (a[this.id] !== i) {
                    var t = e(this);
                    t.data("conthover", 0), t.data("conthoverchanged", 1), t.trigger("revolution.slide.onresume"), a[this.id].tonpause = !1, t.trigger("starttimer")
                }
            })
        },
        revmodal: function(t) {
            var r = this instanceof e ? this[0] : this,
                o = r.id;
            a[r.id] !== i && a.revModal(o, t)
        },
        revstart: function() {
            var t = this instanceof e ? this[0] : this;
            return a[t.id] === i ? (console.log("Slider is Not Existing"), !1) : a[t.id].sliderisrunning || !0 === a[t.id].initEnded ? (console.log("Slider Is Running Already"), !1) : (a[t.id].c = e(t), a[t.id].canvas = a[t.id].c.find("rs-slides"), u(t.id), !0)
        },
        revnext: function() {
            return this.each(function() {
                a[this.id] !== i && a.callingNewSlide(this.id, 1, "carousel" === a[this.id].sliderType)
            })
        },
        revprev: function() {
            return this.each(function() {
                a[this.id] !== i && a.callingNewSlide(this.id, -1, "carousel" === a[this.id].sliderType)
            })
        },
        revmaxslide: function() {
            return e(this).find("rs-slide").length
        },
        revcurrentslide: function() {
            if (a[e(this)[0].id] !== i) return parseInt(a[e(this)[0].id].pr_active_key, 0) + 1
        },
        revlastslide: function() {
            return e(this).find("rs-slide").length
        },
        revshowslide: function(e) {
            return this.each(function() {
                a[this.id] !== i && e !== i && a.callingNewSlide(this.id, "to" + (e - 1))
            })
        },
        revcallslidewithid: function(e) {
            return this.each(function() {
                a[this.id] !== i && a.callingNewSlide(this.id, e, "carousel" === a[this.id].sliderType)
            })
        }
    }), a = e.fn.revolution, e.extend(!0, a, {
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        trim: function(e) {
            return e !== i && null !== e && "string" == typeof e ? e.trim() : e
        },
        setCookie: function(e, i, t) {
            var a = new Date;
            a.setTime(a.getTime() + 60 * t * 60 * 1e3);
            var r = "expires=" + a.toUTCString();
            document.cookie = e + "=" + i + ";" + r + ";path=/"
        },
        getCookie: function(e) {
            for (var i = e + "=", t = document.cookie.split(";"), a = 0; a < t.length; a++) {
                for (var r = t[a];
                    " " == r.charAt(0);) r = r.substring(1);
                if (0 == r.indexOf(i)) return decodeURIComponent(r.substring(i.length, r.length))
            }
            return ""
        },
        mesureScrollBar: function() {
            a.mesuredScrollBarDone = !0, requestAnimationFrame(function() {
                var e = document.createElement("div");
                e.className = "RSscrollbar-measure", document.body.appendChild(e), a.mesuredScrollbarWidth = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
            })
        },
        pageHandler: function(t) {
            a.globalListener = !0, a.window = e(window), a.document = e(document), a.RS_toInit = {}, a.RS_prioList = [], a.RS_swapping = [], a.RS_swapList = {}, window.isSafari11 === i && (window.isSafari11 = a.isSafari11()), a.ISM ? (window.addEventListener("orientationchange", function() {
                a.getWindowDimension(!1, !0), setTimeout(function() {
                    a.getWindowDimension(!0, !0)
                }, 400)
            }), window.addEventListener("resize", a.getWindowDimension), tpGS.gsap.delayedCall(3, function() {
                window.removeEventListener("resize", a.getWindowDimension)
            })) : window.addEventListener("resize", a.getWindowDimension), a.getWindowDimension(!1), a.stickySupported = !1, "IE" !== window.RSBrowser && (a.stickySupported = !0), a.checkParrentOverflows(t);
            var r = a.getByTag(document, "RS-MODULE");
            for (var o in r) r.hasOwnProperty(o) && (a.RS_toInit[r[o].id] = !1, a.RS_prioList.push(r[o].id));
            a.nextSlider = t, a.RS_prioListFirstInit = !0, a.hasNavClickListener === i && (a.document.on(a.is_mobile() ? "touchstart" : "mouseenter", ".tparrows, .tp-bullets, .tp-bullet, .tp-tab, .tp-thumb, .tp-thumbs, .tp-tabs, .tp-rightarrow, .tp-leftarrow", function(e) {
                this.classList.add("rs-touchhover")
            }), a.document.on(a.is_mobile() ? "touchend" : "mouseleave", ".tparrows, .tp-bullets, .tp-bullet, .tp-tab, .tp-thumb, .tp-tabs,  .tp-rightarrow, .tp-leftarrow", function(e) {
                var i = this;
                requestAnimationFrame(function() {
                    i.classList.remove("rs-touchhover")
                })
            }), a.hasNavClickListener = !0), window.addEventListener("unload", function(e) {
                for (var i in a.RS_toInit)
                    if (a.hasOwnProperty(i)) {
                        for (var r in a[i].sbgs)
                            if (a[t].sbgs.hasOwnProperty(r)) {
                                var o = a[t].sbgs[r];
                                a.destroyCanvas(o.canvas), a.destroyCanvas(o.shadowCanvas), o.three && a.destroyCanvas(o.three.canvas), a.destroyCanvas(o.patternImageCanvas), a.destroyCanvas(o.fmShadow), a.destroyCanvas(o.help_canvas)
                            }
                        a.destroyCanvas(a[i].createPattern)
                    }
                var s = document.querySelectorAll("canvas");
                for (var i in s) s.hasOwnProperty(i) && a.destroyCanvas(s[i])
            })
        },
        destroyCanvas: function(e) {
            e && (e.width = e.height = 0, e.remove(), e = null)
        },
        checkParrentOverflows: function(e) {
            window.requestAnimationFrame(function() {
                for (var i = a[e].cpar[0]; i.parentNode && !1 !== a.stickySupported;) {
                    if ("RS-MODULE-WRAP" !== i.tagName && "RS-FULLWIDTH-WRAP" !== i.tagName && "RS-MODULE-WRAP" !== i.tagName && -1 === i.className.indexOf("wp-block-themepunch-revslider")) {
                        var t = window.getComputedStyle(i);
                        a.stickySupported = "hidden" !== t.overflow && "hidden" !== t.overflowX && "hidden" !== t.overflowY
                    }
                    i = i.parentNode
                }
            })
        },
        initNextRevslider: function(e) {
            a.RS_prioList[0] === e && !1 === a.RS_toInit[e] ? (a.RS_toInit[e] = "waiting", c(e), setTimeout(function() {
                a.initNextRevslider(e)
            }, 19)) : a.RS_prioList[0] === e && "waiting" === a.RS_toInit[e] ? setTimeout(function() {
                a.initNextRevslider(e)
            }, 19) : a.RS_prioList[0] === e && !0 === a.RS_toInit[e] ? (a.RS_prioList.shift(), 0 !== a.RS_prioList.length && setTimeout(function() {
                a.initNextRevslider(e)
            }, 19)) : a.RS_prioList[0] !== e && !1 === a.RS_toInit[e] ? setTimeout(function() {
                a.initNextRevslider(e)
            }, 19) : 0 === a.RS_prioList.length && !0 === a.RS_toInit[e] && c(e)
        },
        scrollTicker: function(e) {
            1 != a.scrollTickerAdded && (a.slidersToScroll = [], a.scrollTickerAdded = !0, a.ISM ? (tpGS.gsap.ticker.fps(150), tpGS.gsap.ticker.add(function() {
                a.generalObserver()
            })) : document.addEventListener("scroll", function(e) {
                a.scrollRaF === i && (a.scrollRaF = requestAnimationFrame(a.generalObserver.bind(this, !0)))
            }, {
                passive: !0
            })), a.slidersToScroll.push(e), a.generalObserver(a.ISM)
        },
        generalObserver: function(e, t) {
            for (var r in a.scrollRaF && (a.scrollRaF = cancelAnimationFrame(a.scrollRaF)), a.lastwindowheight = a.lastwindowheight || a.winH, a.scrollY = window.scrollY, a.slidersToScroll) a.slidersToScroll.hasOwnProperty(r) && a.scrollHandling(a.slidersToScroll[r], e, i, t)
        },
        wrapObserver: {
            targets: [],
            init: function(e) {
                var i = 1,
                    t = 0,
                    r = 0,
                    o = s.bind(a.wrapObserver);

                function s() {
                    if (r++, requestAnimationFrame(o), !(r - t < 30 / i)) {
                        t = r;
                        for (var s = 0; s < a.wrapObserver.targets.length; s++)
                            if (a.wrapObserver.targets.hasOwnProperty(s)) {
                                var n = a.wrapObserver.targets[s];
                                box = n.elem.getBoundingClientRect(), n.lw === box.width && n.lh === box.height || 0 === box.width || (n.callback && (n.callback.pause(), n.callback.kill(), n.callback = null), n.callback = tpGS.gsap.to({}, {
                                    duration: .2,
                                    onComplete: e.bind(window, n.elem, n.id)
                                })), n.lw = box.width, n.lh = box.height
                            }
                    }
                }
                s()
            },
            observe: function(e, i) {
                if ("" !== (e = e.getBoundingClientRect ? e : e[0].getBoundingClientRect ? e[0] : "")) {
                    var t = e.getBoundingClientRect();
                    a.wrapObserver.targets.push({
                        elem: e,
                        id: i,
                        lw: t.width,
                        lh: t.height
                    })
                }
            }
        },
        enterViewPort: function(t, r) {
            !0 !== a[t].started ? (a[t].started = !0, a[t].c.trigger("revolution.slide.firstrun"), setTimeout(function() {
                k(t), "hero" !== a[t].sliderType && a.manageNavigation && a[t].navigation.use && !0 === a[t].navigation.createNavigationDone && a.manageNavigation(t), a[t].slideamount > 1 && M(t), setTimeout(function() {
                    a[t] !== i && (a[t].revolutionSlideOnLoaded = !0, a[t].c.trigger("revolution.slide.onloaded"))
                }, 50)
            }, a[t].startDelay), a[t].startDelay = 0, window.requestAnimationFrame(function() {
                h(t)
            })) : (a[t].waitForCountDown && (M(t), a[t].waitForCountDown = !1), "playing" != a[t].sliderlaststatus && a[t].sliderlaststatus != i || a[t].c.trigger("starttimer"), a[t].lastplayedvideos != i && a[t].lastplayedvideos.length > 0 && e.each(a[t].lastplayedvideos, function(e, i) {
                a.playVideo(i, t)
            }))
        },
        leaveViewPort: function(t) {
            a[t].sliderlaststatus = a[t].sliderstatus, a[t].c.trigger("stoptimer"), a[t].playingvideos != i && a[t].playingvideos.length > 0 && (a[t].lastplayedvideos = e.extend(!0, [], a[t].playingvideos), a[t].playingvideos && e.each(a[t].playingvideos, function(e, i) {
                a[t].leaveViewPortBasedStop = !0, a.stopVideo && a.stopVideo(i, t)
            }))
        },
        scrollHandling: function(e, t, r, o) {
            if (a[e] !== i) {
                var s = a[e].topc !== i ? a[e].topc[0].getBoundingClientRect() : 0 === a[e].canv.height ? a[e].cpar[0].getBoundingClientRect() : a[e].c[0].getBoundingClientRect();
                s.hheight = 0 === s.height ? 0 === a[e].canv.height ? a[e].module.height : a[e].canv.height : s.height, a[e].scrollproc = s.top < 0 || s.hheight > a.lastwindowheight && s.top < a.lastwindowheight ? s.top / s.hheight : s.bottom > a.lastwindowheight ? (s.bottom - a.lastwindowheight) / s.hheight : 0;
                var n = Math.max(0, 1 - Math.abs(a[e].scrollproc));
                a[e].viewPort.enable && ("%" === a[e].viewPort.vaType[a[e].level] && (a[e].viewPort.visible_area[a[e].level] <= n || n > 0 && n <= 1 && a[e].sbtimeline.fixed) || "px" === a[e].viewPort.vaType[a[e].level] && (s.top <= 0 && s.bottom >= a.lastwindowheight || s.top >= 0 && s.bottom <= a.lastwindowheight || s.top >= 0 && s.top < a.lastwindowheight - a[e].viewPort.visible_area[a[e].level] || s.bottom >= a[e].viewPort.visible_area[a[e].level] && s.bottom < a.lastwindowheight) ? a[e].inviewport || (a[e].inviewport = !0, a.enterViewPort(e, !0), a[e].c.trigger("enterviewport")) : a[e].inviewport && (a[e].inviewport = !1, a.leaveViewPort(e), a[e].c.trigger("leftviewport"))), a[e].inviewport && (a.callBackHandling && a.callBackHandling(e, "parallax", "start"), requestAnimationFrame(function() {
                    "fullscreen" === a[e].sliderLayout && a.getFullscreenOffsets(e)
                }), a.parallaxProcesses(e, s, o, r), a.callBackHandling && a.callBackHandling(e, "parallax", "end"))
            }
        },
        clone: function(e, t) {
            if (t === i && e === i) return {};
            return function e(t, a) {
                var r = Array.isArray(t) ? [] : {};
                for (var o in t) t.hasOwnProperty(o) && (t[o] !== i && "object" == typeof t[o] && a ? r[o] = e(t[o], !0) : t[o] !== i && (r[o] = t[o]));
                return r
            }(e, t)
        },
        closest: function(e, i) {
            return e && (i(e) ? e : a.closest(e.parentNode, i))
        },
        closestNode: function(e, i) {
            return a.closest(e, function(e) {
                return e.nodeName === i
            })
        },
        closestClass: function(e, i) {
            return a.closest(e, function(e) {
                return (" " + e.className + " ").indexOf(" " + i + " ") >= 0
            })
        },
        getWinH: function(e) {
            return a[e].ignoreHeightChange ? a.mobileWinH : a.winH
        },
        getWindowDimension: function(e, t) {
            !1 === e ? (a.rAfScrollbar = "skip", a.winWAll = window.innerWidth, a.winWSbar = document.documentElement.clientWidth, a.ISM ? (a.zoom = t ? 1 : a.winWSbar / a.winWAll, a.winW = 1 !== a.zoom ? a.winWSbar * a.zoom : Math.min(a.winWAll, a.winWSbar), a.winH = 1 !== a.zoom ? window.innerHeight * a.zoom : window.innerHeight, t && window.visualViewport && (a.winH *= window.visualViewport.scale, a.winWAll *= window.visualViewport.scale), a.scrollBarWidth = 0) : (a.isModalOpen && a.openModalId !== i && a[a.openModalId] !== i && a[a.openModalId].canv.height > a.winH ? a.scrollBarWidth = a.mesuredScrollbarWidth : a.scrollBarWidth = a.winWAll - a.winWSbar, a.winW = Math.min(a.winWAll, a.winWSbar), a.winH = window.innerHeight), a.ISM && a.winH > 125 && (a.lastwindowheight !== i && Math.abs(a.lastwindowheight - a.winH) < 125 ? a.mobileWinH = a.lastwindowheight : a.mobileWinH = a.winH)) : clearTimeout(a.windowDimenstionDelay), a.windowDimenstionDelay = setTimeout(function() {
                a.rAfScrollbar = i, a.winWAll = window.innerWidth, a.winWSbar = document.documentElement.clientWidth, a.ISM ? (a.zoom = t ? 1 : a.winWSbar / a.winWAll, a.RS_px_ratio = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth, a.winW = 1 !== a.zoom ? a.winWSbar * a.zoom : Math.min(a.winWAll, a.winWSbar), a.winH = 1 !== a.zoom ? window.innerHeight * a.zoom : window.innerHeight, t && window.visualViewport && (a.winH *= window.visualViewport.scale, a.winWAll *= window.visualViewport.scale), a.scrollBarWidth = 0, t && tpGS.gsap.delayedCall(.1, function() {
                    a.getWindowDimension()
                })) : (a.isModalOpen && a.openModalId !== i && a[a.openModalId] !== i && a[a.openModalId].canv.height > a.winH ? a.scrollBarWidth = a.mesuredScrollbarWidth : a.scrollBarWidth = a.winWAll - a.winWSbar, a.winW = Math.min(a.winWAll, a.winWSbar), a.winH = window.innerHeight), a.ISM && a.winH > 125 && (a.lastwindowheight !== i && Math.abs(a.lastwindowheight - a.winH) < 125 ? a.mobileWinH = a.lastwindowheight : a.mobileWinH = a.winH), !1 !== e && a.document.trigger("updateContainerSizes")
            }, 100)
        },
        aC: function(i, t) {
            i && (i.classList && i.classList.add ? i.classList.add("" + t) : e(i).addClass(t))
        },
        rC: function(i, t) {
            i && (i.classList && i.classList.remove ? i.classList.remove("" + t) : e(i).removeClass(t))
        },
        sA: function(e, i, t) {
            e && e.setAttribute && e.setAttribute("data-" + i, t)
        },
        gA: function(e, t, a) {
            return e === i ? i : e.hasAttribute && e.hasAttribute("data-" + t) && e.getAttribute("data-" + t) !== i && null !== e.getAttribute("data-" + t) ? e.getAttribute("data-" + t) : a !== i ? a : i
        },
        rA: function(e, i) {
            e && e.removeAttribute && e.removeAttribute("data-" + i)
        },
        iWA: function(e, t) {
            return a[e].justifyCarousel ? "static" === t ? a[e].carousel.wrapwidth : a[e].carousel.slide_widths[t !== i ? t : a[e].carousel.focused] : a[e].gridwidth[a[e].level]
        },
        iHE: function(e, i) {
            return a[e].useFullScreenHeight ? a[e].canv.height : Math.max(a[e].currentRowsHeight, a[e].gridheight[a[e].level])
        },
        updateFixedScrollTimes: function(e) {
            !0 === a[e].sbtimeline.set && !0 === a[e].sbtimeline.fixed && "auto" !== a[e].sliderLayout && (a[e].sbtimeline.rest = a[e].duration - a[e].sbtimeline.fixEnd, a[e].sbtimeline.time = a[e].duration - (a[e].sbtimeline.fixStart + a[e].sbtimeline.rest), a[e].sbtimeline.extended = a[e].sbtimeline.time / 10)
        },
        addSafariFix: function(e) {
            !0 === window.isSafari11 && !0 !== a[e].safari3dFix && (a[e].safari3dFix = !0, a[e].c[0].className += " safarifix")
        },
        openModalAPI: function(t, r, o, s, n, d) {
            if (window.RS_60_MODALS !== i && -1 != e.inArray(t, window.RS_60_MODALS) || window.RS_60_MODAL_API_CALLS !== i && -1 != e.inArray(t, window.RS_60_MODAL_API_CALLS)) e.inArray(t, window.RS_60_MODALS) >= 0 && e.fn.revolution.document.trigger("RS_OPENMODAL_" + t, r);
            else {
                window.RS_60_MODAL_API_CALLS = window.RS_60_MODAL_API_CALLS || [], window.RS_60_MODAL_API_CALLS.push(t), s && a.showModalCover(n, d, "show");
                var l = {
                    action: "revslider_ajax_call_front",
                    client_action: "get_slider_html",
                    alias: t,
                    usage: "modal"
                };
                e.ajax({
                    type: "post",
                    url: o,
                    dataType: "json",
                    data: l,
                    success: function(o, l, c) {
                        if (null !== o && 1 == o.success) {
                            var p;
                            if (o.waiting !== i)
                                for (p in o.waiting) - 1 == e.inArray(o.waiting[p], RS_MODULES.waiting) && (RS_MODULES.waiting.push(o.waiting[p]), window.RS_MODULES.minimal = !1);
                            if (o.toload !== i) {
                                var g = "";
                                for (p in RS_MODULES = RS_MODULES || {}, RS_MODULES.requestedScripts = [], o.toload) o.toload.hasOwnProperty(p) && (RS_MODULES != i && RS_MODULES[p] != i && !0 === RS_MODULES[p].loaded || -1 === e.inArray(p, RS_MODULES.requestedScripts) && (RS_MODULES.requestedScripts.push(p), g += o.toload[p]));
                                "" !== g && e("body").append(g)
                            }
                            e("body").append(o.data), s && a.showModalCover(n, d, "hide"), a[t] !== i && a[t].openModalApiListener ? e.fn.revolution.document.trigger("RS_OPENMODAL_" + t, r) : e(document).on("RS_MODALOPENLISTENER_" + t, function() {
                                e.fn.revolution.document.trigger("RS_OPENMODAL_" + t, r)
                            })
                        } else s && a.showModalCover(n, d, "hide")
                    },
                    error: function(e) {
                        s && a.showModalCover(n, d, "hide"), console.log("Modal Can not be Loaded"), console.log(e)
                    }
                })
            }
        },
        showModalCover: function(t, r, o) {
            switch (o) {
                case "show":
                    var s;
                    if (r.spin !== i && "off" !== r.spin && (s = a.buildSpinner(t, "spinner" + r.spin, r.spinc, "modalspinner")), r.bg !== i && !1 !== r.bg && "false" !== r.bg && "transparent" !== r.bg) {
                        var n = e('<rs-modal-cover data-alias="' + r.alias + '" data-rid="' + t + '" id="' + t + '_modal_bg" style="display:none;opacity:0;background:' + r.bg + '"></rs-modal-cover>');
                        e("body").append(n), r.speed = parseFloat(r.speed), r.speed = r.speed > 200 ? r.speed / 1e3 : r.speed, r.speed = Math.max(Math.min(3, r.speed), .3), tpGS.gsap.to(n, r.speed, {
                            display: "block",
                            opacity: 1,
                            ease: "power3.inOut"
                        }), a.isModalOpen = !0, s !== i && n.append(s)
                    } else s !== i && a[t].c.append(s);
                    break;
                case "hide":
                    (n = e('rs-modal-cover[data-alias="' + r.alias + '"] .modalspinner')) !== i && n.length > 0 ? n.remove() : t !== i && a[t].c.find(".modalspinner").remove()
            }
        },
        revModal: function(t, r) {
            if (t !== i && a[t] !== i && "clicked" !== a[t].modal.closeProtection) {
                if (!0 === a[t].modal.closeProtection) return a[t].modal.closeProtection, void setTimeout(function() {
                    a[t].modal.closeProtection = !1, a.revModal(t, r)
                }, 750);
                switch (r.mode) {
                    case "show":
                        if (!0 === a[t].modal.isLive) return;
                        if (!0 === a.anyModalclosing) return;
                        a[t].modal.isLive = !0, r.slide = r.slide === i ? "to0" : r.slide, a[t].modal.bodyclass !== i && a[t].modal.bodyclass.length >= 0 && document.body.classList.add(a[t].modal.bodyclass), a[t].modal.bg.attr("data-rid", t), tpGS.gsap.to(a[t].modal.bg, a[t].modal.coverSpeed, {
                            display: "block",
                            opacity: 1,
                            ease: "power3.inOut"
                        }), tpGS.gsap.set(a[t].modal.c, {
                            display: "auto" === a[t].sliderLayout ? "inline-block" : "block",
                            opacity: 0
                        }), a[t].cpar.removeClass("hideallscrollbars"), tpGS.gsap.set(a[t].cpar, {
                            display: "block",
                            opacity: 1
                        });
                        var o = {
                            a: 0
                        };
                        a.isModalOpen = !0, a[t].clearModalBG = !0, tpGS.gsap.fromTo(o, a[t].modal.coverSpeed / 5, {
                            a: 0
                        }, {
                            a: 10,
                            ease: "power3.inOut",
                            onComplete: function() {
                                a.openModalId = t, a[t].sliderisrunning ? a.callingNewSlide(t, r.slide) : ("to0" !== r.slide && (a[t].startWithSlideKey = r.slide), u(t))
                            }
                        }), setTimeout(function() {
                            tpGS.gsap.fromTo([a[t].modal.c], .01, {
                                opacity: 0
                            }, {
                                opacity: 1,
                                delay: a[t].modal.coverSpeed / 4,
                                ease: "power3.inOut",
                                onComplete: function() {}
                            }), window.overscrollhistory = document.body.style.overflow, document.body.style.overflow = "hidden", a.getWindowDimension()
                        }, 250);
                        break;
                    case "close":
                        if (!0 === a.anyModalclosing) return;
                        a.anyModalclosing = !0, a.openModalId = i, x(t), document.body.style.overflow = window.overscrollhistory, a[t].cpar.addClass("hideallscrollbars"), a[t].modal.bodyclass !== i && a[t].modal.bodyclass.length >= 0 && document.body.classList.remove(a[t].modal.bodyclass), tpGS.gsap.to(a[t].modal.bg, a[t].modal.coverSpeed, {
                            display: "none",
                            opacity: 0,
                            ease: "power3.inOut"
                        }), tpGS.gsap.to(a[t].modal.c, a[t].modal.coverSpeed / 6.5, {
                            display: "none",
                            delay: a[t].modal.coverSpeed / 4,
                            opacity: 0,
                            onComplete: function() {
                                tpGS.gsap.set(a[t].cpar, {
                                    display: "none",
                                    opacity: 0
                                }), a.document.trigger("revolution.all.resize"), a.document.trigger("revolution.modal.close", [a[t].modal]), a.getWindowDimension(), a.isModalOpen = !1
                            }
                        }), a[t].modal.closeProtection = !0, clearTimeout(a[t].modal.closeTimer), a[t].modal.closeTimer = setTimeout(function() {
                            a.anyModalclosing = !1, a[t].modal.isLive = !1, a[t].modal.closeProtection = !1
                        }, Math.max(750, 1020 * a[t].modal.coverSpeed));
                        break;
                    case "init":
                        if (window.RS_60_MODALS = window.RS_60_MODALS === i ? [] : window.RS_60_MODALS, -1 === e.inArray(a[t].modal.alias, window.RS_60_MODALS) && window.RS_60_MODALS.push(a[t].modal.alias), a[t].modal.listener === i && (a[t].modal.c = e("#" + t + "_modal"), !1 !== a[t].modal.cover && "false" !== a[t].modal.cover || (a[t].modal.coverColor = "transparent"), a[t].modal.bg = e('rs-modal-cover[data-alias="' + r.alias + '"]'), a[t].modal.bg === i || 0 === a[t].modal.bg.length ? (a[t].modal.bg = e('<rs-modal-cover style="display:none;opacity:0;background:' + a[t].modal.coverColor + '" data-rid="' + t + '" id="' + t + '_modal_bg"></rs-modal-cover>'), "auto" === a[t].sliderLayout && a[t].modal.cover ? e("body").append(a[t].modal.bg) : a[t].modal.c.append(a[t].modal.bg)) : a[t].modal.bg.attr("data-rid", t), a[t].modal.c[0].className += "rs-modal-" + a[t].sliderLayout, a[t].modal.calibration = {
                                left: "auto" === a[t].sliderLayout ? "center" === a[t].modal.horizontal ? "50%" : "left" === a[t].modal.horizontal ? "0px" : "auto" : "0px",
                                right: "auto" === a[t].sliderLayout ? "center" === a[t].modal.horizontal ? "auto" : "left" === a[t].modal.horizontal ? "auto" : "0px" : "0px",
                                top: "auto" === a[t].sliderLayout || "fullwidth" === a[t].sliderLayout ? "middle" === a[t].modal.vertical ? "50%" : "top" === a[t].modal.vertical ? "0px" : "auto" : "0px",
                                bottom: "auto" === a[t].sliderLayout || "fullwidth" === a[t].sliderLayout ? "middle" === a[t].modal.vertical ? "auto" : "top" === a[t].modal.vertical ? "auto" : "0px" : "0px",
                                y: ("auto" === a[t].sliderLayout || "fullwidth" === a[t].sliderLayout) && "middle" === a[t].modal.vertical ? "-50%" : 0,
                                x: "auto" === a[t].sliderLayout && "center" === a[t].modal.horizontal ? "-50%" : 0
                            }, "-50%" === a[t].modal.calibration.y && (a[t].modal.calibration.filter = "blur(0px)"), tpGS.gsap.set(a[t].modal.c, "auto" === a[t].sliderLayout || "fullscreen" === a[t].sliderLayout ? e.extend(!0, a[t].modal.calibration, {
                                opacity: 0,
                                display: "none"
                            }) : {
                                opacity: 0,
                                display: "none"
                            }), "fullwidth" === a[t].sliderLayout && tpGS.gsap.set(a[t].modal.c.find("rs-module-wrap"), a[t].modal.calibration), a.document.on("RS_OPENMODAL_" + a[t].modal.alias, function(e, i) {
                                a[t].initEnded = !0, a.revModal(t, {
                                    mode: "show",
                                    slide: i
                                })
                            }), a[a[t].modal.alias] = a[a[t].modal.alias] || {}, a[a[t].modal.alias].openModalApiListener = !0, a.document.trigger("RS_MODALOPENLISTENER_" + a[t].modal.alias), a.document.on("click", "rs-modal-cover", function() {
                                a.revModal(a.gA(this, "rid"), {
                                    mode: "close"
                                })
                            }), a[t].modal.listener = !0, a[t].modal.trigger !== i)) {
                            var s, n = a[t].modal.trigger.split(";");
                            for (o in a[t].modal.trigger = {}, n)
                                if (n.hasOwnProperty(o)) switch ((s = n[o].split(":"))[0]) {
                                    case "t":
                                        a[t].modal.trigger.time = parseInt(s[1], 0);
                                        break;
                                    case "s":
                                        a[t].modal.trigger.scroll = s[1];
                                        break;
                                    case "so":
                                        a[t].modal.trigger.scrollo = parseInt(s[1], 0);
                                        break;
                                    case "e":
                                        a[t].modal.trigger.event = s[1];
                                        break;
                                    case "ha":
                                        a[t].modal.trigger.hash = s[1];
                                        break;
                                    case "co":
                                        a[t].modal.trigger.cookie = s[1]
                                }
                            var d = !0;
                            if (a[t].modal.trigger.cookie !== i ? d = "true" !== a.getCookie(a[t].modal.alias + "_modal_one_time") : "true" == a.getCookie(a[t].modal.alias + "_modal_one_time") && a.setCookie(a[t].modal.alias + "_modal_one_time", !1, 10), d && (a[t].modal.trigger.time !== i && 0 !== a[t].modal.trigger.time && (a[t].modal.trigger.cookie !== i && a.setCookie(a[t].modal.alias + "_modal_one_time", !0, a[t].modal.trigger.cookie), setTimeout(function() {
                                    a.document.trigger("RS_OPENMODAL_" + a[t].modal.alias)
                                }, a[t].modal.trigger.time)), a[t].modal.trigger.scrollo !== i || a[t].modal.trigger.scroll !== i)) {
                                a[t].modal.trigger.scroll !== i && e(a[t].modal.trigger.scroll)[0] !== i && (a[t].modal.trigger.scroll = e(a[t].modal.trigger.scroll)[0]);
                                var l = function() {
                                    if (a[t].modal.trigger.scroll !== i) var e = a[t].modal.trigger.scroll.getBoundingClientRect();
                                    (a[t].modal.trigger.scroll !== i && Math.abs(e.top + (e.bottom - e.top) / 2 - a.getWinH(t) / 2) < 50 || a[t].modal.trigger.scrollo !== i && Math.abs(a[t].modal.trigger.scrollo - (a.scrollY !== i ? a.scrollY : window.scrollY)) < 100) && (a.document.trigger("RS_OPENMODAL_" + a[t].modal.alias), a[t].modal.trigger.cookie !== i && a.setCookie(a[t].modal.alias + "_modal_one_time", !0, a[t].modal.trigger.cookie), document.removeEventListener("scroll", l))
                                };
                                document.addEventListener("scroll", l, {
                                    id: t,
                                    passive: !0
                                })
                            }
                            a[t].modal.trigger.event !== i && a.document.on(a[t].modal.trigger.event, function() {
                                a.document.trigger("RS_OPENMODAL_" + a[t].modal.alias)
                            }), "t" == a[t].modal.trigger.hash && window.location.hash.substring(1) == a[t].modal.alias && a.document.trigger("RS_OPENMODAL_" + a[t].modal.alias)
                        }
                }
            }
        },
        smartConvertDivs: function(e) {
            var i = "";
            if ("string" == typeof e && e.indexOf("#") >= 0) {
                var t = e.split(","),
                    a = t.length - 1;
                for (var r in t) i = "string" == typeof t[r] && "#" === t[r][0] ? i + t[r][1] / t[r][3] * 100 + "%" + (r < a ? "," : "") : i + t[r] + (r < a ? "," : "")
            } else i = e;
            return i
        },
        revToResp: function(e, t, a, r) {
            if ((e = e === i ? a : e) !== i) {
                if (r = r === i ? "," : r, "boolean" != typeof e && ("object" != typeof e || Array.isArray(e))) {
                    try {
                        e = e.replace(/[[\]]/g, "").replace(/\'/g, "").split(r)
                    } catch (e) {}
                    for (e = Array.isArray(e) ? e : [e]; e.length < t;) e[e.length] = e[e.length - 1]
                }
                return e
            }
        },
        loadImages: function(t, r, o, s) {
            if (t !== i && 0 !== t.length) {
                var n = [];
                if (Array.isArray(t))
                    for (var d in t) t.hasOwnProperty(d) && t[d] !== i && n.push(t[d]);
                else n.push(t);
                for (var l in n)
                    if (n.hasOwnProperty(l)) {
                        var c = n[l].querySelectorAll("img, rs-sbg, .rs-svg");
                        for (var d in c)
                            if (c.hasOwnProperty(d)) {
                                c[d] !== i && c[d].dataset !== i && c[d].dataset.src !== i && c[d].dataset.src.indexOf("dummy.png") >= 0 && c[d].src.indexOf("data") >= 0 && delete c[d].dataset.src;
                                var p = g(c[d], i, r),
                                    u = p !== i ? p : a.gA(c[d], "svg_src") != i ? a.gA(c[d], "svg_src") : c[d].src === i ? e(c[d]).data("src") : c[d].src,
                                    h = a.gA(c[d], "svg_src") != i ? "svg" : "img";
                                u !== i && a[r].loadqueue !== i && 0 == a[r].loadqueue.filter(function(e) {
                                    return e.src === u
                                }).length && a[r].loadqueue.push({
                                    src: u,
                                    img: c[d],
                                    index: d,
                                    starttoload: e.now(),
                                    type: h || "img",
                                    prio: o,
                                    progress: c[d].complete && u === c[d].src ? "loaded" : "prepared",
                                    static: s,
                                    width: c[d].complete && u === c[d].src ? c[d].width : i,
                                    height: c[d].complete && u === c[d].src ? c[d].height : i
                                })
                            }
                    }
                b(r)
            }
        },
        waitForCurrentImages: function(t, r, o) {
            if (t !== i && 0 !== t.length && a[r] !== i) {
                var s = !1,
                    n = [];
                if (Array.isArray(t))
                    for (var d in t) t.hasOwnProperty(d) && t[d] !== i && n.push(t[d]);
                else n.push(t);
                for (var l in n)
                    if (n.hasOwnProperty(l)) {
                        var c = n[l].querySelectorAll("img, rs-sbg, .rs-svg");
                        for (d in c)
                            if (c.hasOwnProperty(d) && "length" !== d && !(c[d].className.indexOf("rs-pzimg") >= 0)) {
                                var p = e(c[d]).data(),
                                    u = g(c[d], i, r),
                                    h = u !== i ? u : a.gA(c[d], "svg_src") != i ? a.gA(c[d], "svg_src") : c[d].src === i ? p.src : c[d].src,
                                    m = a.getLoadObj(r, h);
                                if (a.sA(c[d], "src-rs-ref", h), p.loaded === i && m !== i && m.progress && "loaded" == m.progress) {
                                    if ("img" == m.type) {
                                        if (c[d].src.slice(c[d].src.length - 10) !== m.src.slice(m.src.length - 10) && (c[d].src = m.src), p.slidebgimage) {
                                            -1 == m.src.indexOf("images/transparent.png") && -1 == m.src.indexOf("assets/transparent.png") || p.bgcolor === i || p.bgcolor !== i && "transparent" !== p.bgcolor && (m.bgColor = !0, m.useBGColor = !0), a.sA(n[l], "owidth", m.width), a.sA(n[l], "oheight", m.height);
                                            var v = a.getByTag(n[l], "RS-SBG-WRAP"),
                                                f = a.gA(n[l], "key");
                                            if (a[r].sbgs[f].loadobj = m, v.length > 0 && (a.sA(v[0], "owidth", m.width), a.sA(v[0], "oheight", m.height)), "carousel" === a[r].sliderType) {
                                                var y = e(v),
                                                    w = a.getSlideIndex(r, f);
                                                (a[r].carousel.justify && a[r].carousel.slide_widths === i || a[r].carousel.slide_width === i) && a.setCarouselDefaults(r, !0), y.data("panzoom") === i || a[r].panzoomTLs !== i && a[r].panzoomTLs[w] !== i || a.startPanZoom(y, r, 0, w, "prepare", f), a[r].sbgs[f].isHTML5 && !a[r].sbgs[f].videoisplaying && (a[r].sbgs[f].video = a[r].sbgs[f].loadobj.img), n[l].getAttribute("data-iratio") !== i && !n[l].getAttribute("data-iratio") && m.img && m.img.naturalWidth && (n[l].setAttribute("data-iratio", m.img.naturalWidth / m.img.naturalHeight), a.setCarouselDefaults(r, "redraw"), !0 === a[r].carousel.ocfirsttun && a.organiseCarousel(r, "right", !0, !1, !1)), a.updateSlideBGs(r, f, a[r].sbgs[f])
                                            }
                                        }
                                    } else "svg" == m.type && "loaded" == m.progress && (c[d].innerHTML = m.innerHTML);
                                    p.loaded = !0
                                }
                                m && m.progress && m.progress.match(/inprogress|inload|prepared/g) && (!m.error && e.now() - m.starttoload < 15e3 ? s = !0 : (m.progress = "failed", m.reported_img || (m.reported_img = !0, console.log(h + "  Could not be loaded !")))), 1 != a[r].youtubeapineeded || window.YT && YT.Player != i || (s = S("youtube", r)), 1 != a[r].vimeoapineeded || window.Vimeo || (s = S("vimeo", r))
                            }
                    }!a.ISM && a[r].audioqueue && a[r].audioqueue.length > 0 && e.each(a[r].audioqueue, function(i, t) {
                    t.status && "prepared" === t.status && e.now() - t.start < t.waittime && (s = !0)
                }), e.each(a[r].loadqueue, function(i, t) {
                    !0 === t.static && ("loaded" != t.progress && "done" !== t.progress || "failed" === t.progress) && ("failed" != t.progress || t.reported ? !t.error && e.now() - t.starttoload < 5e3 ? s = !0 : t.reported || (t.reported = _(t.src, t.error)) : t.reported = _(t.src, t.error))
                }), s ? tpGS.gsap.delayedCall(.02, a.waitForCurrentImages, [t, r, o]) : o !== i && tpGS.gsap.delayedCall(1e-4, o)
            }
        },
        updateVisibleArea: function(e) {
            for (var t in a[e].viewPort.visible_area = a.revToResp(a[e].viewPort.visible_area, a[e].rle, "0px"), a[e].viewPort.vaType = new Array(4), a[e].viewPort.visible_area) a[e].viewPort.visible_area.hasOwnProperty(t) && (!1 === a[e].viewPort.local && !0 === a[e].viewPort.global ? (a[e].viewPort.vaType[t] = a[e].viewPort.globalDist.indexOf("%") >= 0 ? "%" : "px", a[e].viewPort.visible_area[t] = parseInt(a[e].viewPort.globalDist)) : (a.isNumeric(a[e].viewPort.visible_area[t]) && (a[e].viewPort.visible_area[t] += "%"), a[e].viewPort.visible_area[t] !== i && (a[e].viewPort.vaType[t] = a[e].viewPort.visible_area[t].indexOf("%") >= 0 ? "%" : "px"), a[e].viewPort.visible_area[t] = parseInt(a[e].viewPort.visible_area[t], 0)), a[e].viewPort.visible_area[t] = "%" == a[e].viewPort.vaType[t] ? a[e].viewPort.visible_area[t] / 100 : a[e].viewPort.visible_area[t])
        },
        observeFonts: function(e, t, r) {
            r = r === i ? 0 : r, a.fonts === i && (a.fonts = {}, a.monoWidth = d("monospace"), a.sansWidth = d("sans-serif"), a.serifWidth = d("serif")), r++;
            var o = a.fonts[e];
            !0 !== a.fonts[e] && (a.fonts[e] = a.monoWidth !== d(e + ",monospace") || a.sansWidth !== d(e + ",sans-serif") || a.serifWidth !== d(e + ",serif")), 100 === r || (!1 === o || o === i) && !0 === a.fonts[e] ? (d(e + ",monospace", !0), d(e + ",sans-serif", !0), d(e + ",serif", !0), t()) : setTimeout(function() {
                a.observeFonts(e, t, r)
            }, 19)
        },
        getversion: function() {
            return t
        },
        currentSlideIndex: function(e) {
            return a[e].pr_active_key
        },
        iOSVersion: function() {
            return !!(navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i)) && navigator.userAgent.match(/OS 4_\d like Mac OS X/i)
        },
        setIsIOS: function() {
            a.isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || "MacIntel" === navigator.platform && void 0 !== navigator.standalone
        },
        setIsChrome8889: function() {
            a.isChrome8889 = a.isChrome8889 === i ? navigator.userAgent.indexOf("Chrome/88") >= 0 || navigator.userAgent.indexOf("Chrome/89") >= 0 : a.isChrome8889
        },
        isIE: function() {
            if (a.isIERes === i) {
                var t = e('<div style="display:none;"/>').appendTo(e("body"));
                t.html("\x3c!--[if IE 8]><a>&nbsp;</a><![endif]--\x3e"), a.isIERes = t.find("a").length, t.remove()
            }
            return a.isIERes
        },
        is_mobile: function() {
            var e = ["android", "webos", "iphone", "ipad", "blackberry", "Android", "webos", "iPod", "iPhone", "iPad", "Blackberry", "BlackBerry"],
                t = !1;
            if (window.orientation !== i) t = !0;
            else
                for (var a in e) e.hasOwnProperty(a) && (t = !!(t || navigator.userAgent.split(e[a]).length > 1) || t);
            return t && document.body && -1 === document.body.className.indexOf("rs-ISM") && (document.body.className += " rs-ISM"), t
        },
        is_android: function() {
            var e = ["android", "Android"],
                i = !1;
            for (var t in e) e.hasOwnProperty(t) && (i = !!(i || navigator.userAgent.split(e[t]).length > 1) || i);
            return i
        },
        callBackHandling: function(i, t, r) {
            a[i].callBackArray && e.each(a[i].callBackArray, function(e, i) {
                i && i.inmodule && i.inmodule === t && i.atposition && i.atposition === r && i.callback && i.callback.call()
            })
        },
        get_browser: function() {
            var e, i = navigator.userAgent,
                t = i.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            return /trident/i.test(t[1]) ? (e = /\brv[ :]+(\d+)/g.exec(i) || [], "IE") : "Chrome" === t[1] && null != (e = i.match(/\b(OPR|Edge)\/(\d+)/)) ? e[1].replace("OPR", "Opera") : (t = t[2] ? [t[1], t[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (e = i.match(/version\/(\d+)/i)) && t.splice(1, 1, e[1]), t[0])
        },
        get_browser_version: function() {
            var e, i = navigator.appName,
                t = navigator.userAgent,
                a = t.match(/(edge|opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
            return a && null != (e = t.match(/version\/([\.\d]+)/i)) && (a[2] = e[1]), (a = a ? [a[1], a[2]] : [i, navigator.appVersion, "-?"])[1]
        },
        isFaceBook: function() {
            return a.isFaceBookApp == i && (a.isFaceBookApp = navigator.userAgent || navigator.vendor || window.opera, a.isFaceBookApp = a.isFaceBookApp.indexOf("FBAN") > -1 || a.isFaceBookApp.indexOf("FBAV") > -1), a.isFaceBookApp
        },
        isFirefox: function(e) {
            return a[e].isFirefox = a[e].isFirefox === i ? "Firefox" === a.get_browser() : a[e].isFirefox, a[e].isFirefox
        },
        isSafari11: function() {
            return "safari" === a.trim(a.get_browser().toLowerCase()) && parseFloat(a.get_browser_version()) >= 11
        },
        isWebkit: function() {
            var e = /(webkit)[ \/]([\w.]+)/.exec(navigator.userAgent.toLowerCase());
            return e && e[1] && "webkit" === e[1]
        },
        isIE11: function() {
            return a.IE11 = a.IE11 === i ? !!navigator.userAgent.match(/Trident.*rv\:11\./) : a.IE11, a.IE11
        },
        deepLink: function(e, t) {
            if (t !== i) {
                var r = parseInt(t.toString().replace(/^slide/, "").replace("-", ""), 10);
                if (isNaN(r))
                    for (var o in a[e].slides)
                        if (a[e].slides.hasOwnProperty(o) && a.gA(a[e].slides[o], "deeplink") === t) {
                            r = parseInt(a.gA(a[e].slides[o], "originalindex"), 10);
                            break
                        }
                return isNaN(r) || r < 1 || r > a[e].realslideamount ? void 0 : r
            }
        },
        getHorizontalOffset: function(e, i) {
            var t = l(e, ".outer-left"),
                a = l(e, ".outer-right");
            return "left" == i ? t : "right" == i ? a : "all" == i ? {
                left: t,
                right: a,
                both: t + a,
                inuse: t + a != 0
            } : t + a
        },
        getComingSlide: function(e, t) {
            var r = a[e].pr_next_key !== i ? a[e].pr_next_key : a[e].pr_processing_key !== i ? a[e].pr_processing_key : a[e].pr_active_key,
                o = 0;
            if (o = 0, a[e].pr_active_slide !== i && "true" == a.gA(a[e].pr_active_slide[0], "not_in_nav") && (r = a[e].pr_lastshown_key), t !== i && a.isNumeric(t) || t !== i && t.match(/to/g)) o = 1 === t || -1 === t ? parseInt(r, 0) + t < 0 ? a[e].slideamount - 1 : parseInt(r, 0) + t >= a[e].slideamount ? 0 : parseInt(r, 0) + t : (t = a.isNumeric(t) ? t : parseInt(t.split("to")[1], 0)) < 0 ? 0 : t > a[e].slideamount - 1 ? a[e].slideamount - 1 : t;
            else if (t)
                for (var s in a[e].slides) a[e].slides.hasOwnProperty(s) && (o = a[e].slides && a[e].slides[s] && a.gA(a[e].slides[s], "key") === t ? s : o);
            return {
                nindex: o,
                aindex: r
            }
        },
        callingNewSlide: function(e, t, r) {
            var o = a.getComingSlide(e, t);
            a[e].pr_next_key = o.nindex, a[e].sdir = a[e].pr_next_key < a[e].pr_active_key ? 1 : 0, r && a[e].carousel !== i && (a[e].carousel.focused = a[e].pr_next_key), a[e].ctNavElement ? a[e].ctNavElement = !1 : a[e].c.trigger("revolution.nextslide.waiting"), (a[e].started && o.aindex === a[e].pr_next_key && o.aindex === a[e].pr_lastshown_key || a[e].pr_next_key !== o.aindex && -1 != a[e].pr_next_key && a[e].pr_lastshown_key !== i) && k(e, r)
        },
        getLoadObj: function(e, t) {
            var r = a[e].loadqueue !== i && a[e].loadqueue.filter(function(e) {
                return e.src === t
            })[0];
            return r === i ? {
                src: t
            } : r
        },
        getResponsiveLevel: function(e) {
            var i = 9999,
                t = 0,
                r = 0,
                o = 0;
            if (a[e].responsiveLevels && a[e].responsiveLevels.length)
                for (var s in a[e].responsiveLevels) a[e].responsiveLevels.hasOwnProperty(s) && (a.winWAll < a[e].responsiveLevels[s] && (0 == t || t > parseInt(a[e].responsiveLevels[s])) && (i = parseInt(a[e].responsiveLevels[s]), o = parseInt(s), t = parseInt(a[e].responsiveLevels[s])), a.winWAll > a[e].responsiveLevels[s] && t < a[e].responsiveLevels[s] && (t = parseInt(a[e].responsiveLevels[s]), r = parseInt(s)));
            return t < i ? r : o
        },
        getSizeMultpilicator: function(e, i, t) {
            var r = {
                h: 0,
                w: 0
            };
            return a[e].justifyCarousel ? r.h = r.w = 1 : (r.w = t.width / a[e].gridwidth[a[e].level], r.h = t.height / a[e].gridheight[a[e].level], r.w = isNaN(r.w) ? 1 : r.w, r.h = isNaN(r.h) ? 1 : r.h, 1 == a[e].enableUpscaling ? r.h = r.w : (r.h > r.w ? r.h = r.w : r.w = r.h, (r.h > 1 || r.w > 1) && (r.w = 1, r.h = 1))), r
        },
        updateDims: function(e, t) {
            var r = a[e].pr_processing_key || a[e].pr_active_key || 0,
                o = a[e].pr_active_key || 0,
                s = a[e].modal !== i && a[e].modal.useAsModal,
                n = s ? a.winWAll : a.winW,
                d = !1;
            if (a[e].lastScrollBarWidth = a.scrollBarWidth, a[e].redraw = a[e].redraw === i ? {} : a[e].redraw, a[e].module = a[e].module === i ? {} : a[e].module, a[e].canv = a[e].canv === i ? {} : a[e].canv, a[e].content = a[e].content === i ? {} : a[e].content, a[e].drawUpdates = {
                    c: {},
                    cpar: {},
                    canv: {}
                }, "carousel" == a[e].sliderType ? a[e].module.margins = {
                    top: parseInt(a[e].carousel.padding_top || 0, 0),
                    bottom: parseInt(a[e].carousel.padding_bottom || 0, 0)
                } : a[e].module.margins = {
                    top: 0,
                    bottom: 0
                }, a[e].module.paddings === i && (a[e].module.paddings = {
                    top: parseInt(a[e].cpar.css("paddingTop"), 0) || 0,
                    bottom: parseInt(a[e].cpar.css("paddingBottom"), 0) || 0
                }), a[e].blockSpacing !== i ? (a[e].block = {
                    bottom: a[e].blockSpacing.bottom !== i ? parseInt(a[e].blockSpacing.bottom[a[e].level], 0) : 0,
                    top: a[e].blockSpacing.top !== i ? parseInt(a[e].blockSpacing.top[a[e].level], 0) : 0,
                    left: a[e].blockSpacing.left !== i ? parseInt(a[e].blockSpacing.left[a[e].level], 0) : 0,
                    right: a[e].blockSpacing.right !== i ? parseInt(a[e].blockSpacing.right[a[e].level], 0) : 0
                }, a[e].block.hor = a[e].block.left + a[e].block.right, a[e].block.ver = a[e].block.top + a[e].block.bottom) : a[e].block === i && (a[e].block = {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    hor: 0,
                    ver: 0
                }), a[e].blockSpacing !== i) {
                var l = {
                        paddingLeft: a[e].block.left,
                        paddingRight: a[e].block.right,
                        marginTop: a[e].block.top,
                        marginBottom: a[e].block.bottom
                    },
                    c = JSON.stringify(l);
                l !== a[e].emptyObject && c !== a[e].caches.setsizeBLOCKOBJ && (tpGS.gsap.set(a[e].blockSpacing.block, l), a[e].caches.setsizeBLOCKOBJ = c, d = !0)
            }
            if (a[e].levelForced = a[e].level = a.getResponsiveLevel(e), a[e].rowHeights = a.getRowHeights(e), a[e].aratio = a[e].gridheight[a[e].level] / a[e].gridwidth[a[e].level], a[e].module.width = "auto" === a[e].sliderLayout || 1 == a[e].disableForceFullWidth ? a[e].cpar.width() : n - a[e].block.hor, a[e].outNavDims = a.getOuterNavDimension(e), a[e].canv.width = a[e].module.width - a[e].outNavDims.horizontal - (s ? a.scrollBarWidth : 0), s && "auto" === a[e].sliderLayout && (a[e].canv.width = Math.min(a[e].gridwidth[a[e].level], n)), "fullscreen" === a[e].sliderLayout || a[e].infullscreenmode) {
                var p = a.getWinH(e) - (!0 === a[e].modal.useAsModal ? 0 : a.getFullscreenOffsets(e));
                a[e].canv.height = Math.max(a[e].rowHeights.cur, Math.max(p - a[e].outNavDims.vertical, a[e].minHeight)), o !== r && (a[e].currentSlideHeight = Math.max(a[e].rowHeights.last, Math.max(p - a[e].outNavDims.vertical, a[e].minHeight)), a[e].redraw.maxHeightOld = !0), a[e].drawUpdates.c.height = "100%"
            } else a[e].canv.height = a[e].keepBPHeight ? a[e].gridheight[a[e].level] : Math.round(a[e].canv.width * a[e].aratio), a[e].canv.height = a[e].autoHeight ? a[e].canv.height : Math.min(a[e].canv.height, a[e].gridheight[a[e].level]), a[e].canv.height = Math.max(Math.max(a[e].rowHeights.cur, a[e].canv.height), a[e].minHeight), a[e].drawUpdates.c.height = a[e].canv.height;
            a[e].module.height = a[e].canv.height, "fullwidth" != a[e].sliderLayout || a[e].fixedOnTop || (a[e].drawUpdates.c.maxHeight = 0 != a[e].maxHeight ? Math.min(a[e].canv.height, a[e].maxHeight) : a[e].canv.height), a[e].CM = a.getSizeMultpilicator(e, a[e].enableUpscaling, {
                width: a[e].canv.width,
                height: a[e].canv.height
            }), a[e].content.width = a[e].gridwidth[a[e].level] * a[e].CM.w, a[e].content.height = Math.round(Math.max(a[e].rowHeights.cur, a[e].gridheight[a[e].level] * a[e].CM.h));
            var g = a[e].module.margins.top + a[e].module.margins.bottom + ("fullscreen" === a[e].sliderLayout ? 0 : a[e].outNavDims.vertical) + a[e].canv.height + a[e].module.paddings.top + a[e].module.paddings.bottom;
            a[e].drawUpdates.cpar.height = g, a[e].drawUpdates.cpar.width = "auto" === a[e].sliderLayout ? "auto" : a[e].module.width, "auto" === a[e].sliderLayout || "fullscreen" === a[e].sliderLayout && !0 === a[e].disableForceFullWidth || a[e].rsFullWidthWrap === i ? "fullscreen" == a[e].sliderLayout && 1 == a[e].disableForceFullWidth && (a[e].drawUpdates.cpar.left = 0) : a[e].drawUpdates.cpar.left = 0 - Math.ceil(a[e].rsFullWidthWrap.offset().left - (a[e].outNavDims.left + a[e].block.left)), a[e].sbtimeline.set && a[e].sbtimeline.fixed ? (a[e].sbtimeline.extended === i && a.updateFixedScrollTimes(e), a[e].forcerHeight = 2 * g + a[e].sbtimeline.extended) : a[e].forcerHeight = g, a[e].forcerHeight !== a[e].caches.setsizeForcerHeight && a[e].forcer !== i && (a[e].caches.setsizeForcerHeight = a[e].forcerHeight, d = !0, a[e].redraw.forcer = !0), a[e].drawUpdates.c.width = a[e].canv.width, "auto" === a[e].sliderLayout && (a[e].drawUpdates.c.left = a[e].outNavDims.left), a[e].drawUpdates.c !== a[e].emptyObject && JSON.stringify(a[e].drawUpdates.c) !== a[e].caches.setsizeCOBJ && (a[e].caches.setsizeCOBJ = JSON.stringify(a[e].drawUpdates.c), d = !0, a[e].redraw.c = !0), a[e].drawUpdates.cpar !== a[e].emptyObject && JSON.stringify(a[e].drawUpdates.cpar) !== a[e].caches.setsizeCPAROBJ && (a[e].caches.setsizeCPAROBJ = JSON.stringify(a[e].drawUpdates.cpar), d = !0, a[e].redraw.cpar = !0), s && "auto" === a[e].sliderLayout && a[e].caches.canWidth !== a[e].canv.width && (a[e].caches.canWidth = a[e].canv.width, d = !0, a[e].redraw.modalcanvas = !0), a[e].slayers && a[e].slayers.length > 0 && a[e].outNavDims.left !== a[e].caches.outNavDimsLeft && "fullwidth" != a[e].sliderLayout && "fullscreen" != a[e].sliderLayout && (a[e].caches.outNavDimsLeft = a[e].outNavDims.left, a[e].redraw.slayers = !0), s && a[e].modal.calibration !== i && "middle" === a[e].modal.vertical && (a[e].modal.calibration.top = a.getWinH(e) < g ? "0%" : "50%", a[e].modal.calibration.y = a.getWinH(e) < g ? "0px" : "-50%", "fullwidth" === a[e].sliderLayout && (d = !0, a[e].redraw.modulewrap = !0)), a[e].gridOffsetWidth = (a[e].module.width - a[e].gridwidth[a[e].level]) / 2, a[e].gridOffsetHeight = (a[e].module.height - a[e].content.height) / 2, a[e].caches.curRowsHeight = a[e].currentRowsHeight = a[e].rowHeights.cur, a[e].caches.moduleWidth = a[e].width = a[e].module.width, a[e].caches.moduleHeight = a[e].height = a[e].module.height, a[e].caches.canWidth = a[e].conw = a[e].canv.width, a[e].caches.canHeight = a[e].conh = a[e].canv.height, a[e].bw = a[e].CM.w, a[e].bh = a[e].CM.h, a[e].caches.outNavDimsLeft = a[e].outNavDims.left, window.requestAnimationFrame(function() {
                a[e].redraw.forcer && tpGS.gsap.set(a[e].forcer, {
                    height: a[e].forcerHeight
                }), a[e].redraw.c && tpGS.gsap.set(a[e].c, a[e].drawUpdates.c), a[e].redraw.cpar && tpGS.gsap.set(a[e].cpar, a[e].drawUpdates.cpar), a[e].redraw.modalcanvas && tpGS.gsap.set([a[e].modal.c, a[e].canvas], {
                    width: a[e].canv.width
                }), a[e].redraw.maxHeightOld && (a[e].slides[o].style.maxHeight = a[e].currentSlideHeight !== a[e].canv.height ? a[e].currentSlideHeight + "px" : "none"), a[e].redraw.slayers && tpGS.gsap.set(a[e].slayers, {
                    left: a[e].outNavDims.left
                }), a[e].redraw.modulewrap && tpGS.gsap.set(a[e].modal.c.find("rs-module-wrap"), a[e].modal.calibration), !0 !== a[e].navigation.initialised && "prepared" === t && ("hero" !== a[e].sliderType && a.createNavigation && a[e].navigation.use && !0 !== a[e].navigation.createNavigationDone && a.createNavigation(e), a.resizeThumbsTabs && a.resizeThumbsTabs && a[e].navigation.use && a.resizeThumbsTabs(e)), a[e].rebuildProgressBar && O(e), a[e].redraw = {}
            });
            var u = a[e].inviewport && (a[e].heightInLayers !== i && a[e].module.height !== a[e].heightInLayers || a[e].widthInLayers !== i && a[e].module.width !== a[e].widthInLayers);
            return "ignore" !== t && u && (a[e].heightInLayers = i, a[e].widthInLayers = i, "carousel" !== a[e].sliderType && (a[e].pr_next_key !== i ? a.animateTheLayers({
                slide: a[e].pr_next_key,
                id: e,
                mode: "rebuild",
                caller: "swapSlideProgress_1"
            }) : a[e].pr_processing_key !== i ? a.animateTheLayers({
                slide: a[e].pr_processing_key,
                id: e,
                mode: "rebuild",
                caller: "swapSlideProgress_2"
            }) : a[e].pr_active_key !== i && a.animateTheLayers({
                slide: a[e].pr_active_key,
                id: e,
                mode: "rebuild",
                caller: "swapSlideProgress_3"
            })), d = !0), d && "ignore" !== t && a.requestLayerUpdates(e, "enterstage"), a[e].module.height !== a[e].module.lastHeight && (a[e].module.lastHeight = a[e].module.height, window.requestAnimationFrame(function() {
                window.innerHeight !== screen.height && Math.round(window.innerHeight * window.devicePixelRatio) !== screen.height && m(e, i, !1)
            })), tpGS.gsap.delayedCall(.1, function() {
                a[e].lastScrollBarWidth !== a.scrollBarWidth ? (a.updateDims(e, "ignore"), m(e)) : a.isModalOpen || a.scrollBarWidth === window.innerWidth - document.documentElement.clientWidth || a.rAfScrollbar === i && (a.rAfScrollbar = requestAnimationFrame(function() {
                    a.rAfScrollbar = i, a.getWindowDimension(e, !1)
                }))
            }), d
        },
        getSlideIndex: function(e, i) {
            var t = !1;
            for (var r in a[e].slides) {
                if (!a[e].slides.hasOwnProperty(r) || !1 !== t) continue;
                t = a.gA(a[e].slides[r], "key") === i ? r : t
            }
            return !1 === t ? 0 : t
        },
        loadUpcomingContent: function(e) {
            if ("smart" == a[e].lazyType) {
                var i = [],
                    t = parseInt(a.getSlideIndex(e, a.gA(a[e].pr_next_slide[0], "key")), 0),
                    r = t - 1 < 0 ? a[e].realslideamount - 1 : t - 1,
                    o = t + 1 == a[e].realslideamount ? 0 : t + 1;
                r !== t && i.push(a[e].slides[r]), o !== t && i.push(a[e].slides[o]), i.length > 0 && (a.loadImages(i, e, 2), a.waitForCurrentImages(i, e, function() {}))
            }
        },
        getFullscreenOffsets: function(t) {
            var r = 0;
            if (a[t].fullScreenOffsetContainer != i) {
                var o = ("" + a[t].fullScreenOffsetContainer).split(",");
                for (var s in o) o.hasOwnProperty(s) && (r += e(o[s]).outerHeight(!0) || 0)
            }
            return a[t].fullScreenOffset != i && (!a.isNumeric(a[t].fullScreenOffset) && a[t].fullScreenOffset.split("%").length > 1 ? r += a.getWinH(t) * parseInt(a[t].fullScreenOffset, 0) / 100 : a.isNumeric(parseInt(a[t].fullScreenOffset, 0)) && (r += parseInt(a[t].fullScreenOffset, 0) || 0)), a[t].fullScreenOffsetResult = r, r
        },
        unToggleState: function(e) {
            if (e !== i)
                for (var t = 0; t < e.length; t++) try {
                    document.getElementById(e[t]).classList.remove("rs-tc-active")
                } catch (e) {}
        },
        toggleState: function(e) {
            if (e !== i)
                for (var t = 0; t < e.length; t++) try {
                    document.getElementById(e[t]).classList.add("rs-tc-active")
                } catch (e) {}
        },
        swaptoggleState: function(e) {
            if (e != i && e.length > 0)
                for (var t = 0; t < e.length; t++) {
                    var r = document.getElementById(e[t]);
                    if (a.gA(r, "toggletimestamp") !== i && (new Date).getTime() - a.gA(r, "toggletimestamp") < 250) return;
                    a.sA(r, "toggletimestamp", (new Date).getTime()), null !== r && (r.className.indexOf("rs-tc-active") >= 0 ? r.classList.remove("rs-tc-active") : r.classList.add("rs-tc-active"))
                }
        },
        lastToggleState: function(e) {
            var t;
            if (e !== i)
                for (var a = 0; a < e.length; a++) {
                    var r = document.getElementById(e[a]);
                    t = !0 === t || null !== r && r.className.indexOf("rs-tc-active") >= 0 || t
                }
            return t
        },
        revCheckIDS: function(t, r) {
            if (a.gA(r, "idcheck") === i) {
                var o = r.id,
                    s = e.inArray(r.id, window.RSANYID),
                    n = -1; - 1 !== s && (n = e.inArray(r.id, a[t].anyid), window.RSANYID_sliderID[s] === t && -1 === n || (r.id = r.id + "_" + Math.round(9999 * Math.random()), console.log("Warning - ID:" + o + " exists already. New Runtime ID:" + r.id), s = n = -1)), -1 === n && a[t].anyid.push(r.id), -1 === s && (window.RSANYID.push(r.id), window.RSANYID_sliderID.push(t))
            }
            return a.sA(r, "idcheck", !0), r.id
        },
        buildSpinner: function(t, a, r, o) {
            var s;
            if ("off" !== a) {
                o = o === i ? "" : o, r = r === i ? "#ffffff" : r;
                var n = parseInt(a.replace("spinner", ""), 10);
                if (isNaN(n) || n < 6) {
                    var d = 'style="background-color:' + r + '"',
                        l = o === i || 3 !== n && 4 != n ? "" : d;
                    s = e("<rs-loader " + (o === i || 1 !== n && 2 != n ? "" : d) + ' class="' + a + " " + o + '"><div ' + l + ' class="dot1"></div><div ' + l + ' class="dot2"></div><div ' + l + ' class="bounce1"></div><div ' + l + ' class="bounce2"></div><div ' + l + ' class="bounce3"></div></rs-loader>')
                } else {
                    var c, p = '<div class="rs-spinner-inner"';
                    if (7 === n) - 1 !== r.search("#") ? (c = r.replace("#", ""), c = "rgba(" + parseInt(c.substring(0, 2), 16) + ", " + parseInt(c.substring(2, 4), 16) + ", " + parseInt(c.substring(4, 6), 16) + ", ") : -1 !== r.search("rgb") && (c = r.substring(r.indexOf("(") + 1, r.lastIndexOf(")")).split(",")).length > 2 && (c = "rgba(" + c[0].trim() + ", " + c[1].trim() + ", " + c[2].trim() + ", "), c && "string" == typeof c && (p += ' style="border-top-color: ' + c + "0.65); border-bottom-color: " + c + "0.15); border-left-color: " + c + "0.65); border-right-color: " + c + '0.15)"');
                    else 12 === n && (p += ' style="background:' + r + '"');
                    p += ">";
                    for (var g = [10, 0, 4, 2, 5, 9, 0, 4, 4, 2][n - 6], u = 0; u < g; u++) u > 0 && (p += " "), p += '<span style="background:' + r + '"></span>';
                    s = e('<rs-loader class="' + a + " " + o + '">' + (p += "</div>") + "</div></rs-loader>")
                }
                return s
            }
        },
        addStaticLayerTo: function(e, i, t) {
            if (a[e].slayers.length < 2) {
                var r = document.createElement("rs-static-layers");
                r.className = "rs-stl-" + i, r.appendChild(t[0]), a[e].c[0].appendChild(r), a[e].slayers.push(r)
            } else a[e].slayers[1].appendChild(t[0])
        }
    });
    var r = function() {
            return a.isIE11() ? function(e, i) {
                return e.querySelectorAll(i)
            } : function(e, i) {
                return e.getElementsByTagName(i)
            }
        },
        o = function(e) {
            a[e].responsiveLevels = a.revToResp(a[e].responsiveLevels, a[e].rle), a[e].visibilityLevels = a.revToResp(a[e].visibilityLevels, a[e].rle), a[e].responsiveLevels[0] = 9999, a[e].rle = a[e].responsiveLevels.length || 1, a[e].gridwidth = a.revToResp(a[e].gridwidth, a[e].rle), a[e].gridheight = a.revToResp(a[e].gridheight, a[e].rle), a[e].editorheight !== i && (a[e].editorheight = a.revToResp(a[e].editorheight, a[e].rle)), a.updateDims(e)
        },
        s = function(i, t) {
            var a = [];
            return e.each(i, function(e, i) {
                e != t && a.push(i)
            }), a
        },
        n = function(i, t, r) {
            a[r].c.find(i).each(function() {
                var i = e(this);
                i.data("key") === t && i.remove()
            })
        },
        d = function(e, t) {
            if (a["rsfont_" + e] == i && (a["rsfont_" + e] = document.createElement("span"), a["rsfont_" + e].innerHTML = Array(100).join("wi"), a["rsfont_" + e].style.cssText = ["position:absolute", "width:auto", "font-size:128px", "left:-99999px"].join(" !important;"), a["rsfont_" + e].style.fontFamily = e, document.body.appendChild(a["rsfont_" + e])), t === i) return a["rsfont_" + e].clientWidth;
            document.body.removeChild(a["rsfont_" + e])
        },
        l = function(i, t) {
            var a = 0;
            return i.find(t).each(function() {
                var i = e(this);
                !i.hasClass("tp-forcenotvisible") && a < i.outerWidth() && (a = i.outerWidth())
            }), a
        },
        c = function(t) {
            if (t === i || a[t] === i || a[t].c === i) return !1;
            if (a[t].cpar !== i && a[t].cpar.data("aimg") != i && ("enabled" == a[t].cpar.data("aie8") && a.isIE(8) || "enabled" == a[t].cpar.data("amobile") && a.ISM)) a[t].c.html('<img class="tp-slider-alternative-image" src="' + a[t].cpar.data("aimg") + '">');
            else {
                window._rs_firefox13 = !1, window._rs_firefox = a.isFirefox(), window._rs_ie = window._rs_ie === i ? !e.support.opacity : window._rs_ie, window._rs_ie9 = window._rs_ie9 === i ? 9 == document.documentMode : window._rs_ie9;
                var r = e.fn.jquery.split("."),
                    o = parseFloat(r[0]),
                    s = parseFloat(r[1]);
                1 == o && s < 7 && a[t].c.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:' + r + " <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>"), o > 1 && (window._rs_ie = !1), a[t].realslideamount = a[t].slideamount = 0;
                var n = a.getByTag(a[t].canvas[0], "RS-SLIDE"),
                    d = [];
                for (var l in a[t].notInNav = [], a[t].slides = [], n) n.hasOwnProperty(l) && ("on" == a.gA(n[l], "hsom") && a.ISM ? d.push(n[l]) : (a.gA(n[l], "invisible") || 1 == a.gA(n[l], "invisible") ? a[t].notInNav.push(n[l]) : (a[t].slides.push(n[l]), a[t].slideamount++), a[t].realslideamount++, a.sA(n[l], "originalindex", a[t].realslideamount), a.sA(n[l], "origindex", a[t].realslideamount - 1)));
                for (l in d) d.hasOwnProperty(l) && d[l].remove();
                for (l in a[t].notInNav) a[t].notInNav.hasOwnProperty(l) && (a.sA(a[t].notInNav[l], "not_in_nav", !0), a[t].canvas[0].appendChild(a[t].notInNav[l]));
                if (a[t].canvas.css({
                        visibility: "visible"
                    }), a[t].slayers = a[t].c.find("rs-static-layers"), a[t].slayers.length > 0 && a.sA(a[t].slayers[0], "key", "staticlayers"), !0 === a[t].modal.useAsModal && (a[t].cpar.wrap('<rs-modal id="' + a[t].c[0].id + '_modal"></rs-modal>'), a[t].modal.c = e(a.closestNode(a[t].cpar[0], "RS-MODAL")), a[t].modal.c.appendTo(e("body")), a[t].modal !== i && a[t].modal.alias !== i && a.revModal(t, {
                        mode: "init"
                    })), 1 == a[t].waitForInit || 1 == a[t].modal.useAsModal) return a.RS_toInit !== i && (a.RS_toInit[t] = !0), a[t].c.trigger("revolution.slide.waitingforinit"), void(a[t].waitingForInit = !0);
                window.requestAnimationFrame(function() {
                    u(t)
                }), a[t].initEnded = !0
            }
        },
        p = function() {
            e("body").data("rs-fullScreenMode", !e("body").data("rs-fullScreenMode")), e("body").data("rs-fullScreenMode") && setTimeout(function() {
                a.window.trigger("resize")
            }, 200)
        },
        g = function(e, t, r) {
            return a.gA(e, "lazyload") !== i ? a.gA(e, "lazyload") : a[r].lazyloaddata !== i && a[r].lazyloaddata.length > 0 && a.gA(e, a[r].lazyloaddata) !== i ? a.gA(e, a[r].lazyloaddata) : a.gA(e, "lazy-src") !== i ? a.gA(e, "lazy-src") : a.gA(e, "lazy-wpfc-original-src") !== i ? a.gA(e, "lazy-wpfc-original-src") : a.gA(e, "lazy") !== i ? a.gA(e, "lazy") : t
        },
        u = function(t) {
            if (a[t] !== i) {
                if (a[t].sliderisrunning = !0, !0 !== a[t].noDetach && a[t].c.detach(), a[t].shuffle) {
                    for (var r = a[t].canvas.find("rs-slide:first-child"), o = a.gA(r[0], "firstanim"), s = 0; s < a[t].slideamount; s++) a[t].canvas.find("rs-slide:eq(" + Math.round(Math.random() * a[t].slideamount) + ")").prependTo(a[t].canvas);
                    a.sA(a[t].canvas.find("rs-slide:first-child")[0], "firstanim", o)
                }
                a[t].slides = a.getByTag(a[t].canvas[0], "RS-SLIDE"), a[t].thumbs = new Array(a[t].slides.length), a[t].slots = 1, a[t].firststart = 1, a[t].loadqueue = [], a[t].syncload = 0;
                var n = 0,
                    d = "carousel" === a[t].sliderType && a[t].carousel.border_radius !== i ? parseInt(a[t].carousel.border_radius, 0) : 0;
                for (var l in a[t].slides)
                    if (a[t].slides.hasOwnProperty(l) && "length" !== l) {
                        var c = a[t].slides[l],
                            u = a.getByTag(c, "IMG")[0];
                        a.gA(c, "key") === i && a.sA(c, "key", "rs-" + Math.round(999999 * Math.random()));
                        var h = {
                            params: Array(12),
                            id: a.gA(c, "key"),
                            src: a.gA(c, "thumb") !== i ? a.gA(c, "thumb") : g(u, u !== i ? u.src : i, t)
                        };
                        a.gA(c, "title") === i && a.sA(c, "title", ""), a.gA(c, "description") === i && a.sA(c, "description", ""), h.params[0] = {
                            from: RegExp("\\{\\{title\\}\\}", "g"),
                            to: a.gA(c, "title")
                        }, h.params[1] = {
                            from: RegExp("\\{\\{description\\}\\}", "g"),
                            to: a.gA(c, "description")
                        };
                        for (var v = 1; v <= 10; v++) a.gA(c, "p" + v) !== i ? h.params[v + 1] = {
                            from: RegExp("\\{\\{param" + v + "\\}\\}", "g"),
                            to: a.gA(c, "p" + v)
                        } : h.params[v + 1] = {
                            from: RegExp("\\{\\{param" + v + "\\}\\}", "g"),
                            to: ""
                        };
                        if (a[t].thumbs[n] = e.extend({}, !0, h), d > 0 && tpGS.gsap.set(c, {
                                borderRadius: d + "px"
                            }), a.gA(c, "link") != i || a.gA(c, "linktoslide") !== i) {
                            var y = a.gA(c, "link") !== i ? a.gA(c, "link") : "slide",
                                w = "slide" != y ? "no" : a.gA(c, "linktoslide"),
                                b = a.gA(c, "seoz");
                            if (w != i && "no" != w && "next" != w && "prev" != w)
                                for (var _ in a[t].slides) a[t].slides.hasOwnProperty(_) && parseInt(a.gA(a[t].slides[_], "origindex"), 0) + 1 == a.gA(c, "linktoslide") && (w = a.gA(a[t].slides[_], "key"));
                            e(c).prepend('<rs-layer class="rs-layer slidelink" id="rs_slidelink_' + Math.round(1e5 * Math.random()) + '" data-zindex="' + ("back" === b ? 0 : "front" === b ? 95 : b !== i ? parseInt(b, 0) : 100) + '" dataxy="x:c;y:c" data-dim="w:100%;h:100%" data-basealign="slide"' + ("no" == w ? "slide" == y || a.ISM ? "" : "  data-actions='o:click;a:simplelink;target:" + (a.gA(c, "target") || "_self") + ";url:" + y + ";'" : "  data-actions='" + ("scroll_under" === w ? "o:click;a:scrollbelow;offset:100px;" : "prev" === w ? "o:click;a:jumptoslide;slide:prev;d:0.2;" : "next" === w ? "o:click;a:jumptoslide;slide:next;d:0.2;" : "o:click;a:jumptoslide;slide:" + w + ";d:0.2;") + "'") + " data-frame_1='e:power3.inOut;st:100;sp:100' data-frame_999='e:power3.inOut;o:0;st:w;sp:100'>" + (a.ISM ? "<a " + ("slide" != y ? ("_blank" === a.gA(c, "target") ? 'rel="noopener" ' : "") + 'target="' + (a.gA(c, "target") || "_self") + '" href="' + y + '"' : "") + "><span></span></a>" : "") + "</rs-layer>")
                        }
                        n++
                    }
                if (a[t].simplifyAll && (a.isIE(8) || a.iOSVersion()) && (a[t].c.find(".rs-layer").each(function() {
                        var i = e(this);
                        i.removeClass("customin customout").addClass("fadein fadeout"), i.data("splitin", ""), i.data("speed", 400)
                    }), a[t].c.find("rs-slide").each(function() {
                        var i = e(this);
                        i.data("transition", "fade"), i.data("masterspeed", 500), i.data("slotamount", 1), (i.find(".rev-slidebg") || i.find(">img").first()).data("panzoom", null)
                    })), window._rs_desktop = window._rs_desktop === i ? !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i) : window._rs_desktop, a[t].autoHeight = "fullscreen" == a[t].sliderLayout || a[t].autoHeight, "fullwidth" != a[t].sliderLayout || a[t].autoHeight || a[t].c.css({
                        maxHeight: a[t].gridheight[a[t].level] + "px"
                    }), "auto" == a[t].sliderLayout || null !== a.closestNode(a[t].c[0], "RS-FULLWIDTH-WRAP") || "fullscreen" === a[t].sliderLayout && 1 == a[t].disableForceFullWidth) a[t].topc = a[t].cpar;
                else {
                    var S = a[t].cpar[0].style.marginTop,
                        x = a[t].cpar[0].style.marginBottom;
                    S = S === i || "" === S ? "" : "margin-top:" + S + ";", x = x === i || "" === x ? "" : "margin-bottom:" + x + ";", a[t].rsFullWidthWrap = a[t].topc = e('<rs-fullwidth-wrap id="' + a[t].c[0].id + '_forcefullwidth" style="' + S + x + '"></rs-fullwidth-wrap>'), a[t].forcer = e('<rs-fw-forcer style="height:' + (a[t].forcerHeight === i ? a[t].cpar.height() : a[t].forcerHeight) + 'px"></rs-fw-forcer>'), a[t].topc.append(a[t].forcer), a[t].topc.insertBefore(a[t].cpar), a[t].cpar.detach(), a[t].cpar.css({
                        marginTop: "0px",
                        marginBottom: "0px",
                        position: "absolute"
                    }), a[t].cpar.prependTo(a[t].topc)
                }
                if (a[t].forceOverflow && a[t].topc[0].classList.add("rs-forceoverflow"), "carousel" === a[t].sliderType && !0 !== a[t].overflowHidden && a[t].c.css({
                        overflow: "visible"
                    }), 0 !== a[t].maxHeight && tpGS.gsap.set([a[t].cpar, a[t].c, a[t].topc], {
                        maxHeight: a[t].maxHeight + "px"
                    }), a[t].fixedOnTop && tpGS.gsap.set(a[t].blockSpacing !== i && a[t].blockSpacing.block !== i ? a[t].blockSpacing.block : a[t].topc, {
                        position: "fixed",
                        top: "0px",
                        left: "0px",
                        pointerEvents: "none",
                        zIndex: 5e3
                    }), a[t].shadow !== i && a[t].shadow > 0 && a[t].cpar.addClass("tp-shadow" + a[t].shadow).append('<div class="tp-shadowcover" style="background-color:' + a[t].cpar.css("backgroundColor") + ";background-image:" + a[t].cpar.css("backgroundImage") + '"></div>'), a.updateDims(t, "prepared"), a.observeWraps === i && (a.observeWraps = new a.wrapObserver.init(function(e, t) {
                        m(t, i, !0)
                    })), !a[t].c.hasClass("revslider-initialised")) {
                    a[t].c[0].classList.add("revslider-initialised"), a[t].c[0].id = a[t].c[0].id === i ? "revslider-" + Math.round(1e3 * Math.random() + 5) : a[t].c[0].id, a.revCheckIDS(t, a[t].c[0]), a[t].origcd = parseInt(a[t].duration, 0), a[t].scrolleffect._L = [], a[t].sbas = a[t].sbas === i ? {} : a[t].sbas, a[t].layers = a[t].layers || {}, a[t].sortedLayers = a[t].sortedLayers || {};
                    var k = a[t].c[0].querySelectorAll("rs-layer, rs-row, rs-column, rs-group,  rs-bgvideo, .rs-layer");
                    for (var L in k)
                        if (k.hasOwnProperty(L)) {
                            var R, O, I = e(k[L]),
                                T = I.data();
                            if (T.startclasses = k[L].className, T.startclasses = T.startclasses === i || null === T.startclasses ? "" : T.startclasses, T.animationonscroll = !!a[t].sbtimeline.set && a[t].sbtimeline.layers, T.animationonscroll = !0 === T.animationonscroll || "true" == T.animationonscroll, T.filteronscroll = !!a[t].scrolleffect.set && a[t].scrolleffect.layers, T.pxundermask = T.startclasses.indexOf("rs-pxmask") >= 0 && "off" !== a[t].parallax.type && T.startclasses.indexOf("rs-pxl-") >= 0, T.noPevents = T.startclasses.indexOf("rs-noevents") >= 0, T.sba)
                                for (var v in R = T.sba.split(";")) R.hasOwnProperty(v) && ("t" == (O = R[v].split(":"))[0] && (T.animationonscroll = O[1], "false" == O[1] && (T.animOnScrollForceDisable = !0)), "e" == O[0] && (T.filteronscroll = O[1]), "so" == O[0] && (T.scrollBasedOffset = parseInt(O[1]) / 1e3));
                            if ("true" != T.animationonscroll && 1 != T.animationonscroll || (T.startclasses += " rs-sba", I[0].className += " rs-sba"), T.startclasses.indexOf("rs-layer-static") >= 0 && a.handleStaticLayers && a.handleStaticLayers(I, t), "RS-BGVIDEO" !== I[0].tagName) {
                                if (I[0].classList.add("rs-layer"), "column" === T.type && (T.columnwidth = "33.33%", T.verticalalign = "top", T.column !== i))
                                    for (var M in R = T.column.split(";")) R.hasOwnProperty(M) && ("w" === (O = R[M].split(":"))[0] && (T.columnwidth = O[1]), "a" === O[0] && (T.verticalalign = O[1]));
                                var C = T.startclasses.indexOf("slidelink") >= 0 ? "z-index:" + T.zindex + ";width:100% !important;height:100% !important;" : "",
                                    A = "column" !== T.type ? "" : T.verticalalign === i ? " vertical-align:top;" : " vertical-align:" + T.verticalalign + ";",
                                    B = "row" === T.type || "column" === T.type ? "position:relative;" : "position:absolute;",
                                    z = "",
                                    G = "row" === T.type ? "rs-row-wrap" : "column" === T.type ? "rs-column-wrap" : "group" === T.type ? "rs-group-wrap" : "rs-layer-wrap",
                                    E = "",
                                    N = "",
                                    H = (T.noPevents, ";pointer-events:none");
                                "row" === T.type || "column" === T.type || "group" === T.type ? (I[0].classList.remove("tp-resizeme"), "column" === T.type && (T.width = "auto", I[0].group = "row", tpGS.gsap.set(I, {
                                    width: "auto"
                                }), T.filteronscroll = !1)) : (E = "display:" + ("inline-block" === I[0].style.display ? "inline-block" : "block") + ";", null !== a.closestNode(I[0], "RS-COLUMN") ? (I[0].group = "column", T.filteronscroll = !1) : null !== a.closestNode(I[0], "RS-GROUP-WRAP") && (I[0].group = "group", T.filteronscroll = !1)), T.wrpcls !== i && (z = z + " " + T.wrpcls), T.wrpid !== i && (N = 'id="' + T.wrpid + '"'), I.wrap("<" + G + " " + N + ' class="rs-parallax-wrap ' + z + '" style="' + A + " " + C + B + E + H + '"><rs-loop-wrap style="' + C + B + E + '"><rs-mask-wrap style="' + C + B + E + '">' + (T.pxundermask ? "<rs-px-mask></rs-px-mask>" : "") + "</rs-mask-wrap></rs-loop-wrap></" + G + ">"), !0 !== T.filteronscroll && "true" != T.filteronscroll || a[t].scrolleffect._L.push(I.parent()), I[0].id = I[0].id === i ? "layer-" + Math.round(999999999 * Math.random()) : I[0].id, a.revCheckIDS(t, I[0]), T.pxundermask ? a[t]._Lshortcuts[I[0].id] = {
                                    p: e(I[0].parentNode.parentNode.parentNode.parentNode),
                                    lp: e(I[0].parentNode.parentNode.parentNode),
                                    m: e(I[0].parentNode.parentNode)
                                } : a[t]._Lshortcuts[I[0].id] = {
                                    p: e(I[0].parentNode.parentNode.parentNode),
                                    lp: e(I[0].parentNode.parentNode),
                                    m: e(I[0].parentNode)
                                }, "column" === T.type && a[t]._Lshortcuts[I[0].id].p.append('<rs-cbg-mask-wrap><rs-column-bg id="' + I[0].id + '_rs_cbg"></rs-column-bg></rs-cbg-mask-wrap>'), "text" === T.type && a.getByTag(I[0], "IFRAME").length > 0 && (a[t].slideHasIframe = !0, I[0].classList.add("rs-ii-o")), a[t].BUG_safari_clipPath && "true" != T.animationonscroll && 1 != T.animationonscroll && I[0].classList.add("rs-pelock"), I[0].dataset.staticz !== i && "row" !== T.type && "row" !== I[0].group && "column" !== I[0].group && a.addStaticLayerTo(t, I[0].dataset.staticz, a[t]._Lshortcuts[I[0].id].p)
                            }
                            a.gA(I[0], "actions") && a.checkActions && a.checkActions(I, t, a[t]), !a.checkVideoApis || window.rs_addedvim && window.rs_addedyt || a[t].youtubeapineeded && a[t].vimeoapineeded || a.checkVideoApis(I, t)
                        }
                    a.checkActions && a.checkActions(i, t), a[t].c[0].addEventListener("mousedown", function() {
                        if (!0 !== a[t].onceClicked && (a[t].onceClicked = !0, !0 !== a[t].onceVideoPlayed && a[t].activeRSSlide !== i && a[t].slides !== i && a[t].slides[a[t].activeRSSlide] !== i)) {
                            var r = e(a[t].slides[a[t].activeRSSlide]).find("rs-bgvideo");
                            r !== i && null !== r && r.length > 0 && a.playVideo(r, t)
                        }
                    }), a[t].c[0].addEventListener("mouseenter", function() {
                        a[t].c.trigger("tp-mouseenter"), a[t].overcontainer = !0
                    }, {
                        passive: !0
                    }), a[t].c[0].addEventListener("mouseover", function() {
                        a[t].c.trigger("tp-mouseover"), a[t].overcontainer = !0
                    }, {
                        passive: !0
                    }), a[t].c[0].addEventListener("mouseleave", function() {
                        a[t].c.trigger("tp-mouseleft"), a[t].overcontainer = !1
                    }, {
                        passive: !0
                    }), a[t].c.find(".rs-layer video").each(function(i) {
                        var t = e(this);
                        t.removeClass("video-js vjs-default-skin"), t.attr("preload", ""), t.css({
                            display: "none"
                        })
                    }), a[t].rs_static_layer = a.getByTag(a[t].c[0], "RS-STATIC-LAYERS"), a.preLoadAudio && a[t].rs_static_layer.length > 0 && a.preLoadAudio(e(a[t].rs_static_layer), t, 1), a[t].rs_static_layer.length > 0 && (a.loadImages(a[t].rs_static_layer[0], t, 0, !0), a.waitForCurrentImages(a[t].rs_static_layer[0], t, function() {
                        a[t] !== i && a[t].c.find("rs-static-layers img").each(function() {
                            this.src = a.getLoadObj(t, a.gA(this, "src") != i ? a.gA(this, "src") : this.src).src
                        })
                    })), a[t].rowzones = [], a[t].rowzonesHeights = [], a[t].topZones = [], a[t].middleZones = [], a[t].bottomZones = [];
                    var j = a.deepLink(t, P("#")[0]);
                    j !== i && (a[t].startWithSlide = j, a[t].deepLinkListener = !0, window.addEventListener("hashchange", function() {
                        if (!0 !== a[t].ignoreDeeplinkChange) {
                            var e = a.deepLink(t, P("#")[0]);
                            e !== i && a.callingNewSlide(t, e, !0)
                        }
                        a[t].ignoreDeeplinkChange = !1
                    })), a[t].loader = a.buildSpinner(t, a[t].spinner, a[t].spinnerclr), a[t].loaderVisible = !0, a[t].c.append(a[t].loader), f(t), ("off" !== a[t].parallax.type || a[t].scrolleffect.set || a[t].sbtimeline.set) && a.checkForParallax && a.checkForParallax(t), a[t].fallbacks.disableFocusListener || "true" == a[t].fallbacks.disableFocusListener || !0 === a[t].fallbacks.disableFocusListener || (a[t].c.addClass("rev_redraw_on_blurfocus"), D());
                    var F = a[t].viewPort;
                    for (var v in "on" === a[t].navigation.mouseScrollNavigation && (F.enable = !0), a[t].slides)
                        if (a[t].slides.hasOwnProperty(v)) {
                            var W = e(a[t].slides[v]);
                            a[t].rowzones[v] = [], a[t].rowzonesHeights[v] = [], a[t].topZones[v] = [], a[t].middleZones[v] = [], a[t].bottomZones[v] = [], W.find("rs-zone").each(function() {
                                a[t].rowzones[v].push(e(this)), this.className.indexOf("rev_row_zone_top") >= 0 && a[t].topZones[v].push(this), this.className.indexOf("rev_row_zone_middle") >= 0 && a[t].middleZones[v].push(this), this.className.indexOf("rev_row_zone_bottom") >= 0 && a[t].bottomZones[v].push(this)
                            }), (F.enable && a[t].inviewport || !F.enable) && "all" == a[t].lazyType && (a.loadImages(W[0], t, v), a.waitForCurrentImages(W[0], t, function() {}))
                        }
                    a[t].srowzones = [], a[t].smiddleZones = [], a[t].slayers && a[t].slayers.find("rs-zone").each(function() {
                        a[t].srowzones.push(e(this)), this.className.indexOf("rev_row_zone_middle") >= 0 && a[t].smiddleZones.push(this)
                    }), "carousel" === a[t].sliderType && tpGS.gsap.set(a[t].canvas, {
                        scale: 1,
                        perspective: 1200,
                        transformStyle: "flat",
                        opacity: 0
                    }), a[t].c.prependTo(a[t].cpar), e("body").data("rs-fullScreenMode", !1), window.addEventListener("fullscreenchange", p, {
                        passive: !0
                    }), window.addEventListener("mozfullscreenchange", p, {
                        passive: !0
                    }), window.addEventListener("webkitfullscreenchange", p, {
                        passive: !0
                    }), a.document.on("updateContainerSizes." + a[t].c.attr("id"), function() {
                        if (a[t] !== i) return a[t].c != i && void(a.updateDims(t, "ignore") && window.requestAnimationFrame(function() {
                            a.updateDims(t, "ignore"), a[t].fullScreenMode = a.checkfullscreenEnabled(t), a.lastwindowheight = a.getWinH(t), m(t)
                        }))
                    }), F.presize && (a[t].pr_next_slide = e(a[t].slides[0]), a.loadImages(a[t].pr_next_slide[0], t, 0, !0), a.waitForCurrentImages(a[t].pr_next_slide.find(".tp-layers"), t, function() {
                        a.animateTheLayers && a.animateTheLayers({
                            slide: a[t].pr_next_key,
                            id: t,
                            mode: "preset",
                            caller: "runSlider"
                        })
                    })), ("off" != a[t].parallax.type || a[t].sbtimeline.set || !0 === F.enable) && a.scrollTicker(t), !0 !== F.enable && (a[t].inviewport = !0, a.enterViewPort(t)), a.RS_toInit !== i && (a.RS_toInit[t] = !0), a[t].observeWrap && a.observeWraps && a.wrapObserver.observe(a[t].rsFullWidthWrap !== i ? a[t].rsFullWidthWrap[0] : a[t].cpar[0], t)
                }
            }
        },
        h = function(e, t) {
            a.winW < a[e].hideSliderAtLimit ? (a[e].c.trigger("stoptimer"), !0 !== a[e].sliderIsHidden && (a.sA(a[e].cpar[0], "displaycache", "none" != a[e].cpar.css("display") ? a[e].cpar.css("display") : a.gA(a[e].cpar[0], "displaycache")), a[e].cpar.css({
                display: "none"
            }), a[e].sliderIsHidden = !0)) : (!0 === a[e].sliderIsHidden || a[e].sliderIsHidden === i && a[e].c.is(":hidden")) && t && (a[e].cpar[0].style.display = a.gA(a[e].cpar[0], "displaycache") != i && "none" != a.gA(a[e].cpar[0], "displaycache") ? a.gA(a[e].cpar[0], "displaycache") : "block", a[e].sliderIsHidden = !1, a[e].c.trigger("restarttimer"), window.requestAnimationFrame(function() {
                m(e, !0)
            })), a.hideUnHideNav && a[e].navigation.use && a.hideUnHideNav(e)
        },
        m = function(e, t, r) {
            if (a[e].c === i) return !1;
            if (a[e].dimensionReCheck = {}, a[e].c.trigger("revolution.slide.beforeredraw"), 1 == a[e].infullscreenmode && (a[e].minHeight = a.getWinH(e)), a.ISM && (a[e].lastMobileHeight = a.getWinH(e)), r && a.updateDims(e), !a.resizeThumbsTabs || !0 === a.resizeThumbsTabs(e)) {
                if (window.requestAnimationFrame(function() {
                        h(e, !0 !== t), O(e)
                    }), a[e].started) {
                    if ("carousel" == a[e].sliderType)
                        for (var o in a.prepareCarousel(e), a[e].sbgs) a[e].sbgs.hasOwnProperty(o) && a[e].sbgs[o].mDIM !== i && a.updateSlideBGs(e, a[e].sbgs[o].key, a[e].sbgs[o]);
                    else a.updateSlideBGs(e);
                    if ("carousel" === a[e].sliderType && a[e].carCheckconW != a[e].canv.width) {
                        for (var s in clearTimeout(a[e].pcartimer), a[e].sbgs) a[e].sbgs[s].loadobj !== i && a.updateSlideBGs(e, a[e].sbgs[s].key, a[e].sbgs[s]);
                        a[e].pcartimer = setTimeout(function() {
                            a.prepareCarousel(e), a.animateTheLayers({
                                slide: "individual",
                                id: e,
                                mode: "rebuild",
                                caller: "containerResized_1"
                            }), a[e].carCheckconW = a[e].canv.width
                        }, 100), a[e].lastconw = a[e].canv.width
                    }
                    if (a[e].pr_processing_key !== i ? a.animateTheLayers({
                            slide: a[e].pr_processing_key,
                            id: e,
                            mode: "rebuild",
                            caller: "containerResized_2"
                        }) : a[e].pr_active_key !== i && a.animateTheLayers({
                            slide: a[e].pr_active_key,
                            id: e,
                            mode: "rebuild",
                            caller: "containerResized_3"
                        }), "carousel" === a[e].sliderType) {
                        for (var s in a[e].panzoomTLs)
                            if (a[e].panzoomTLs.hasOwnProperty(s)) {
                                var n = a.gA(a[e].panzoomBGs[s][0], "key");
                                a.startPanZoom(a[e].panzoomBGs[s], e, a[e].panzoomTLs[s].progress(), s, a[e].panzoomTLs[s].isActive() ? "play" : "reset", n)
                            }
                    } else a[e].pr_active_bg !== i && a[e].pr_active_bg[0] !== i && v(e, a[e].pr_active_bg, a[e].pr_active_bg[0].dataset.key), a[e].pr_next_bg !== i && a[e].pr_next_bg[0] !== i && v(e, a[e].pr_next_bg, a[e].pr_next_bg[0].dataset.key);
                    clearTimeout(a[e].mNavigTimeout), a.manageNavigation && (a[e].mNavigTimeout = setTimeout(function() {
                        a.manageNavigation(e)
                    }, 20))
                }
                a.prepareCoveredVideo(e)
            }
            a[e].c.trigger("revolution.slide.afterdraw", [{
                id: e
            }])
        },
        v = function(e, t, r) {
            if (a[e].panzoomTLs !== i) {
                var o = a.getSlideIndex(e, r);
                a.startPanZoom(t, e, a[e].panzoomTLs[o] !== i ? a[e].panzoomTLs[o].progress() : 0, o, "play", r)
            }
        },
        f = function(t) {
            !0 !== a[t].noDetach && a[t].canvas.detach();
            var r = a.isFaceBook() ? "visible" : "hidden";
            if (a[t].autoHeight && tpGS.gsap.set([a[t].c, a[t].cpar], {
                    maxHeight: "none"
                }), tpGS.gsap.set(a[t].canvas, a[t].modal !== i && a[t].modal.useAsModal ? {
                    overflow: r,
                    width: "100%",
                    height: "100%"
                } : {
                    overflow: r,
                    width: "100%",
                    height: "100%",
                    maxHeight: a[t].autoHeight ? "none" : a[t].cpar.css("maxHeight")
                }), "carousel" === a[t].sliderType) {
                var o = "margin-top:" + parseInt(a[t].carousel.padding_top || 0, 0) + "px;";
                a[t].canvas.css({
                    overflow: "visible"
                }).wrap('<rs-carousel-wrap style="' + o + '"></rs-carousel-wrap>'), a[t].cpar.prepend("<rs-carousel-space></rs-carousel-space>").append("<rs-carousel-space></rs-carousel-space>"), a.defineCarouselElements(t)
            }
            a[t].startWithSlide = a[t].startWithSlide === i ? i : Math.max(1, (a[t].sliderType, parseInt(a[t].startWithSlide))), a[t].cpar.css({
                overflow: "visible"
            }), a[t].scrolleffect.bgs = [];
            for (var s = 0; s < a[t].slides.length; s++) {
                var n = e(a[t].slides[s]),
                    d = a.gA(n[0], "key"),
                    l = n.find(".rev-slidebg") || n.find(">img"),
                    c = a[t].sbgs[d] = y(l.data(), t),
                    p = n.data("mediafilter");
                if (c.skeyindex = a.getSlideIndex(t, d), c.bgvid = n.find("rs-bgvideo"), l.detach(), c.bgvid.detach(), (a[t].startWithSlide != i && a.gA(a[t].slides[s], "originalindex") == a[t].startWithSlide || a[t].startWithSlide === i && 0 == s) && (a[t].pr_next_key = n.index()), tpGS.gsap.set(n, {
                        width: "100%",
                        height: "100%",
                        overflow: r
                    }), l.wrap('<rs-sbg-px><rs-sbg-wrap data-key="' + d + '"></rs-sbg-wrap></rs-sbg-px>'), c.wrap = e(a.closestNode(l[0], "RS-SBG-WRAP")), c.src = l[0].src, c.lazyload = c.lazyload = g(l[0], i, t), c.slidebgimage = !0, c.loadobj = c.loadobj === i ? {} : c.loadobj, c.mediafilter = p = "none" === p || p === i ? "" : p, c.sbg = document.createElement("rs-sbg"), a[t].overlay !== i && "none" != a[t].overlay.type && a[t].overlay.type != i) {
                    var u = a.createOverlay(t, a[t].overlay.type, a[t].overlay.size, {
                        0: a[t].overlay.colora,
                        1: a[t].overlay.colorb
                    });
                    c.wrap.append('<rs-dotted style="background-image:' + u + '"></rs-dotted>')
                }
                l.data("mediafilter", p), c.canvas = document.createElement("canvas"), c.sbg.appendChild(c.canvas), c.canvas.style.width = "100%", c.canvas.style.height = "100%", c.ctx = c.canvas.getContext("2d"), c.lazyload !== i && (c.sbg.dataset.lazyload = c.lazyload), c.sbg.className = p, c.sbg.src = c.src, c.sbg.dataset.bgcolor = c.bgcolor, c.sbg.style.width = "100%", c.sbg.style.height = "100%", c.key = d, c.wrap[0].dataset.key = d, e(c.sbg).data(c), c.wrap.data(c), c.wrap[0].appendChild(c.sbg), l[0].style.display = "none", a.gA(n[0], "sba") === i && a.sA(n[0], "sba", "");
                var h = {},
                    m = a.gA(n[0], "sba").split(";");
                for (var v in m)
                    if (m.hasOwnProperty(v)) {
                        var f = m[v].split(":");
                        switch (f[0]) {
                            case "f":
                                h.f = f[1];
                                break;
                            case "b":
                                h.b = f[1];
                                break;
                            case "g":
                                h.g = f[1];
                                break;
                            case "t":
                                h.s = f[1]
                        }
                    }
                a.sA(n[0], "scroll-based", !!a[t].sbtimeline.set && (h.s !== i && h.s)), c.bgvid.length > 0 && (c.bgvidid = c.bgvid[0].id, c.animateDirection = "idle", c.bgvid.addClass("defaultvid").css({
                    zIndex: 30
                }), p !== i && "" !== p && "none" !== p && c.bgvid.addClass(p), c.bgvid.appendTo(c.wrap), c.parallax != i && (c.bgvid.data("parallax", c.parallax), c.bgvid.data("showcoveronpause", "on"), c.bgvid.data("mediafilter", p)), c.poster = !1, (c.src !== i && -1 == c.src.indexOf("assets/dummy.png") && -1 == c.src.indexOf("assets/transparent.png") || c.lazyload !== i && -1 == c.lazyload.indexOf("assets/transparent.png") && -1 == c.lazyload.indexOf("assets/dummy.png")) && (c.poster = !0), c.bgvid.data("bgvideo", 1), c.bgvid[0].dataset.key = d, 0 == c.bgvid.find(".rs-fullvideo-cover").length && c.bgvid.append('<div class="rs-fullvideo-cover"></div>')), a[t].scrolleffect.set ? (a[t].scrolleffect.bgs.push({
                    fade: h.f !== i ? h.f : !!a[t].scrolleffect.slide && a[t].scrolleffect.fade,
                    blur: h.b !== i ? h.b : !!a[t].scrolleffect.slide && a[t].scrolleffect.blur,
                    grayscale: h.g !== i ? h.g : !!a[t].scrolleffect.slide && a[t].scrolleffect.grayscale,
                    c: c.wrap.wrap("<rs-sbg-effectwrap></rs-sbg-effectwrap>").parent()
                }), n.prepend(c.wrap.parent().parent())) : n.prepend(c.wrap.parent())
            }
            "carousel" === a[t].sliderType ? (tpGS.gsap.set(a[t].carousel.wrap, {
                opacity: 0
            }), a[t].c[0].appendChild(a[t].carousel.wrap[0])) : a[t].c[0].appendChild(a[t].canvas[0])
        },
        y = function(t, r) {
            t.bg = t.bg === i ? "" : t.bg;
            var o = t.bg.split(";"),
                s = {
                    bgposition: "50% 50%",
                    bgfit: "cover",
                    bgrepeat: "no-repeat",
                    bgcolor: "transparent"
                };
            for (var n in o)
                if (o.hasOwnProperty(n)) {
                    var d = o[n].split(":"),
                        l = d[0],
                        c = d[1],
                        p = "";
                    switch (l) {
                        case "p":
                            p = "bgposition";
                            break;
                        case "f":
                            p = "bgfit";
                            break;
                        case "r":
                            p = "bgrepeat";
                            break;
                        case "c":
                            p = "bgcolor"
                    }
                    p !== i && (s[p] = c)
                }
            return a[r].fallbacks.panZoomDisableOnMobile && a.ISM && (s.panzoom = i, s.bgfit = "cover", t.panzoom = i), e.extend(!0, t, s)
        },
        w = function(e, t, r) {
            if (a[t] !== i) {
                a[t].syncload--;
                var o = a.gA(e, "reference");
                for (var s in a[t].loadqueue) a[t].loadqueue.hasOwnProperty(s) && "loaded" !== a[t].loadqueue[s].progress && o == a[t].loadqueue[s].src && (a[t].loadqueue[s].img = e, a[t].loadqueue[s].progress = r, a[t].loadqueue[s].width = e.width, a[t].loadqueue[s].height = e.height);
                b(t)
            }
        },
        b = function(t) {
            4 != a[t].syncload && a[t].loadqueue && e.each(a[t].loadqueue, function(r, o) {
                if ("prepared" == o.progress && a[t].syncload <= 4) {
                    if (a[t].syncload++, "img" == o.type) {
                        var s = "IMG" == o.img.tagName ? o.img : new Image;
                        a.sA(s, "reference", o.src), /^([\w]+\:)?\/\//.test(o.src) && -1 === o.src.indexOf(location.host) && "" !== a[t].imgCrossOrigin && a[t].imgCrossOrigin !== i && (s.crossOrigin = a[t].imgCrossOrigin), s.onload = function() {
                            w(this, t, "loaded"), o.error = !1
                        }, s.onerror = function() {
                            w(this, t, "failed"), o.error = !0
                        }, s.src = o.src, o.starttoload = e.now()
                    } else e.get(o.src, function(e) {
                        o.innerHTML = (new XMLSerializer).serializeToString(e.documentElement), o.progress = "loaded", a[t].syncload--, b(t)
                    }).fail(function() {
                        o.progress = "failed", a[t].syncload--, b(t)
                    });
                    o.progress = "inload"
                }
            })
        },
        _ = function(e, i) {
            return console.log("Static Image " + e + "  Could not be loaded in time. Error Exists:" + i), !0
        },
        S = function(i, t) {
            if (e.now() - a[t][i + "starttime"] > 5e3 && 1 != a[t][i + "warning"]) {
                a[t][i + "warning"] = !0;
                var r = i + " Api Could not be loaded !";
                "https:" === location.protocol && (r += " Please Check and Renew SSL Certificate !"), console.error(r), a[t].c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>' + r + "</strong></div>")
            }
            return !0
        },
        x = function(t) {
            a[t] !== i && (a[t].pr_active_slide = e(a[t].slides[a[t].pr_active_key]), a[t].pr_next_slide = e(a[t].slides[a[t].pr_processing_key]), a[t].pr_active_bg = a[t].pr_active_slide.find("rs-sbg-wrap"), a[t].pr_next_bg = a[t].pr_next_slide.find("rs-sbg-wrap"), a[t].pr_active_bg !== i && a[t].pr_active_bg.length > 0 && tpGS.gsap.to(a[t].pr_active_bg, .5, {
                opacity: 0
            }), a[t].pr_next_bg !== i && a[t].pr_next_bg.length > 0 && tpGS.gsap.to(a[t].pr_next_bg, .5, {
                opacity: 0
            }), tpGS.gsap.set(a[t].pr_active_slide, {
                zIndex: 18
            }), a[t].pr_next_slide !== i && a[t].pr_next_slide.length > 0 && tpGS.gsap.set(a[t].pr_next_slide, {
                autoAlpha: 0,
                zIndex: 20
            }), a[t].tonpause = !1, a[t].pr_active_key !== i && a.removeTheLayers(a[t].pr_active_slide, t, !0), a[t].firststart = 1, setTimeout(function() {
                delete a[t].pr_active_key, delete a[t].pr_processing_key
            }, 200))
        },
        k = function(t, r) {
            if (a[t] !== i)
                if (clearTimeout(a[t].waitWithSwapSlide), a[t].pr_processing_key === i || !0 !== a[t].firstSlideShown) {
                    if (clearTimeout(a[t].waitWithSwapSlide), a[t].startWithSlideKey !== i && (a[t].pr_next_key = a.getComingSlide(t, a[t].startWithSlideKey).nindex, delete a[t].startWithSlideKey), a[t].pr_active_slide = e(a[t].slides[a[t].pr_active_key]), a[t].pr_next_slide = e(a[t].slides[a[t].pr_next_key]), a[t].pr_next_key == a[t].pr_active_key) return delete a[t].pr_next_key;
                    var o = a.gA(a[t].pr_next_slide[0], "key");
                    a[t].sbgs[o].bgvid && a[t].sbgs[o].bgvid.length > 0 && (a[t].videos == i || a[t].videos[a[t].sbgs[o].bgvid[0].id] === i) && a.manageVideoLayer(a[t].sbgs[o].bgvid, t, o), a[t].pr_processing_key = a[t].pr_next_key, a[t].pr_cache_pr_next_key = a[t].pr_next_key, delete a[t].pr_next_key, a[t].pr_next_slide !== i && a[t].pr_next_slide[0] !== i && a.gA(a[t].pr_next_slide[0], "hal") !== i && a.sA(a[t].pr_next_slide[0], "sofacounter", a.gA(a[t].pr_next_slide[0], "sofacounter") === i ? 1 : parseInt(a.gA(a[t].pr_next_slide[0], "sofacounter"), 0) + 1), a[t].stopLoop && a[t].pr_processing_key == a[t].lastslidetoshow - 1 && (a[t].progressC.css({
                        visibility: "hidden"
                    }), a[t].c.trigger("revolution.slide.onstop"), a[t].noloopanymore = 1), a[t].pr_next_slide.index() === a[t].slideamount - 1 && a[t].looptogo > 0 && "disabled" !== a[t].looptogo && (a[t].looptogo--, a[t].looptogo <= 0 && (a[t].stopLoop = !0)), a[t].tonpause = !0, a[t].slideInSwapTimer = !0, a[t].c.trigger("stoptimer"), "off" === a[t].spinner ? a[t].loader !== i && !0 === a[t].loaderVisible && (a[t].loader.css({
                        display: "none"
                    }), a[t].loaderVisible = !1) : a[t].loadertimer = setTimeout(function() {
                        a[t].loader !== i && !0 !== a[t].loaderVisible && (a[t].loader.css({
                            display: "block"
                        }), a[t].loaderVisible = !0)
                    }, 100);
                    var s = "carousel" === a[t].sliderType && "all" !== a[t].lazyType ? a.loadVisibleCarouselItems(t) : a[t].pr_next_slide[0];
                    a.loadImages(s, t, 1), a.preLoadAudio && a.preLoadAudio(a[t].pr_next_slide, t, 1), a.waitForCurrentImages(s, t, function() {
                        a[t].firstSlideShown = !0, a[t].pr_next_slide.find("rs-bgvideo").each(function() {
                            a.prepareCoveredVideo(t)
                        }), a.loadUpcomingContent(t), window.requestAnimationFrame(function() {
                            L(a[t].pr_next_slide.find("rs-sbg"), t, r)
                        })
                    })
                } else a[t].waitWithSwapSlide = setTimeout(function() {
                    k(t, r)
                }, 18)
        },
        L = function(t, r, o) {
            if (a[r] !== i) {
                if (O(r), a[r].pr_active_slide = e(a[r].slides[a[r].pr_active_key]), a[r].pr_next_slide = e(a[r].slides[a[r].pr_processing_key]), a[r].pr_active_bg = a[r].pr_active_slide.find("rs-sbg-wrap"), a[r].pr_next_bg = a[r].pr_next_slide.find("rs-sbg-wrap"), a[r].tonpause = !1, clearTimeout(a[r].loadertimer), a[r].loader !== i && !0 === a[r].loaderVisible && (window.requestAnimationFrame(function() {
                        a[r].loader.css({
                            display: "none"
                        })
                    }), a[r].loaderVisible = !1), a[r].onBeforeSwap = {
                        slider: r,
                        slideIndex: parseInt(a[r].pr_active_key, 0) + 1,
                        slideLIIndex: a[r].pr_active_key,
                        nextSlideIndex: parseInt(a[r].pr_processing_key, 0) + 1,
                        nextSlideLIIndex: a[r].pr_processing_key,
                        nextslide: a[r].pr_next_slide,
                        slide: a[r].pr_active_slide,
                        currentslide: a[r].pr_active_slide,
                        prevslide: a[r].pr_lastshown_key !== i ? a[r].slides[a[r].pr_lastshown_key] : ""
                    }, a[r].c.trigger("revolution.slide.onbeforeswap", a[r].onBeforeSwap), a[r].transition = 1, a[r].stopByVideo = !1, a[r].pr_next_slide[0] !== i && a.gA(a[r].pr_next_slide[0], "duration") != i && "" != a.gA(a[r].pr_next_slide[0], "duration") ? a[r].duration = parseInt(a.gA(a[r].pr_next_slide[0], "duration"), 0) : a[r].duration = a[r].origcd, a[r].pr_next_slide[0] === i || "true" != a.gA(a[r].pr_next_slide[0], "ssop") && !0 !== a.gA(a[r].pr_next_slide[0], "ssop") ? a[r].ssop = !1 : a[r].ssop = !0, a[r].sbtimeline.set && a[r].sbtimeline.fixed && a.updateFixedScrollTimes(r), a[r].c.trigger("nulltimer"), a[r].sdir = a[r].pr_processing_key < a[r].pr_active_key ? 1 : 0, "arrow" == a[r].sc_indicator && (0 == a[r].pr_active_key && a[r].pr_processing_key == a[r].slideamount - 1 && (a[r].sdir = 1), a[r].pr_active_key == a[r].slideamount - 1 && 0 == a[r].pr_processing_key && (a[r].sdir = 0)), a[r].lsdir = a[r].sdir, a[r].pr_active_key != a[r].pr_processing_key && 1 != a[r].firststart && "carousel" !== a[r].sliderType && a.removeTheLayers && a.removeTheLayers(a[r].pr_active_slide, r), 1 !== a.gA(a[r].pr_next_slide[0], "rspausetimeronce") && 1 !== a.gA(a[r].pr_next_slide[0], "rspausetimeralways") ? a[r].c.trigger("restarttimer") : (a[r].stopByVideo = !0, a.unToggleState(a[r].slidertoggledby)), a.sA(a[r].pr_next_slide[0], "rspausetimeronce", 0), a[r].pr_next_slide[0] !== i && a.sA(a[r].c[0], "slideactive", a.gA(a[r].pr_next_slide[0], "key")), "carousel" == a[r].sliderType) {
                    if (a[r].mtl = tpGS.gsap.timeline(), a.prepareCarousel(r), R(r), a.updateSlideBGs(r), !0 !== a[r].carousel.checkFVideo) {
                        var s = a.gA(a[r].pr_next_slide[0], "key");
                        a[r].sbgs[s] !== i && a[r].sbgs[s].bgvid !== i && 0 !== a[r].sbgs[s].bgvid.length && a.playBGVideo(r, s), a[r].carousel.checkFVideo = !0
                    }
                    a[r].transition = 0
                } else {
                    a[r].pr_lastshown_key = a[r].pr_lastshown_key === i ? a[r].pr_next_key !== i ? a[r].pr_next_key : a[r].pr_processing_key !== i ? a[r].pr_processing_key : a[r].pr_active_key !== i ? a[r].pr_active_key : a[r].pr_lastshown_key : a[r].pr_lastshown_key, a[r].mtl = tpGS.gsap.timeline({
                        paused: !0,
                        onComplete: function() {
                            R(r)
                        }
                    }), a[r].pr_next_key !== i ? a.animateTheLayers({
                        slide: a[r].pr_next_key,
                        id: r,
                        mode: "preset",
                        caller: "swapSlideProgress_1"
                    }) : a[r].pr_processing_key !== i ? a.animateTheLayers({
                        slide: a[r].pr_processing_key,
                        id: r,
                        mode: "preset",
                        caller: "swapSlideProgress_2"
                    }) : a[r].pr_active_key !== i && a.animateTheLayers({
                        slide: a[r].pr_active_key,
                        id: r,
                        mode: "preset",
                        caller: "swapSlideProgress_3"
                    }), 1 == a[r].firststart && (a[r].pr_active_slide[0] !== i && tpGS.gsap.set(a[r].pr_active_slide, {
                        autoAlpha: 0
                    }), a[r].firststart = 0), a[r].pr_active_slide[0] !== i && tpGS.gsap.set(a[r].pr_active_slide, {
                        zIndex: 18
                    }), a[r].pr_next_slide[0] !== i && tpGS.gsap.set(a[r].pr_next_slide, {
                        autoAlpha: 0,
                        zIndex: 20
                    });
                    s = a.gA(a[r].pr_next_slide[0], "key");
                    a[r].sbgs[s].alt === i && (a[r].sbgs[s].alt = a.gA(a[r].pr_next_slide[0], "alttrans") || !1, a[r].sbgs[s].alt = !1 !== a[r].sbgs[s].alt && a[r].sbgs[s].alt.split(","), a[r].sbgs[s].altIndex = 0, a[r].sbgs[s].altLen = !1 !== a[r].sbgs[s].alt ? a[r].sbgs[s].alt.length : 0);
                    a[r].firstSlideAnimDone === i && a[r].fanim !== i && !1 !== a[r].fanim || (a[r].sbgs[s].slideanimation === i || a[r].sbgs[s].slideanimationRebuild || (a[r].sbgs[s].random !== i && a.SLTR !== i || a[r].sbgs[s].altLen > 0 && a.SLTR));
                    a[r].sbgs[s].slideanimation = a[r].firstSlideAnimDone === i && a[r].fanim !== i && !1 !== a[r].fanim ? a.convertSlideAnimVals(e.extend(!0, {}, a.getSlideAnim_EmptyObject(), a[r].fanim)) : a[r].sbgs[s].slideanimation === i || a[r].sbgs[s].slideanimationRebuild ? a.getSlideAnimationObj(r, {
                        anim: a.gA(a[r].pr_next_slide[0], "anim"),
                        filter: a.gA(a[r].pr_next_slide[0], "filter"),
                        in: a.gA(a[r].pr_next_slide[0], "in"),
                        out: a.gA(a[r].pr_next_slide[0], "out"),
                        d3: a.gA(a[r].pr_next_slide[0], "d3")
                    }, s) : a[r].sbgs[s].random !== i && a.SLTR !== i ? a.convertSlideAnimVals(e.extend(!0, {}, a.getSlideAnim_EmptyObject(), a.getAnimObjectByKey(a.getRandomSlideTrans(a[r].sbgs[s].random.rndmain, a[r].sbgs[s].random.rndgrp, a.SLTR), a.SLTR))) : a[r].sbgs[s].altLen > 0 && a.SLTR !== i ? a.convertSlideAnimVals(e.extend(!0, {
                        altAnim: a[r].sbgs[s].alt[a[r].sbgs[s].altIndex]
                    }, a.getSlideAnim_EmptyObject(), a.getAnimObjectByKey(a[r].sbgs[s].alt[a[r].sbgs[s].altIndex], a.SLTR))) : a[r].sbgs[s].slideanimation, a[r].sbgs[s].altLen > 0 && (a[r].sbgs[s].firstSlideAnimDone !== i ? (a[r].sbgs[s].altIndex++, a[r].sbgs[s].altIndex = a[r].sbgs[s].altIndex >= a[r].sbgs[s].altLen ? 0 : a[r].sbgs[s].altIndex) : (a[r].sbgs[s].firstSlideAnimDone = !0, a.SLTR === i && a.SLTR_loading === i && a.loadSlideAnimLibrary(r))), a[r].sbgs[s].currentState = "animating", a.animateSlide(r, a[r].sbgs[s].slideanimation), a[r].firstSlideAnimDone === i && a[r].fanim !== i && !1 !== a[r].fanim && (a[r].sbgs[s].slideanimationRebuild = !0), a[r].firstSlideAnimDone = !0, a[r].pr_next_bg.data("panzoom") !== i && requestAnimationFrame(function() {
                        var e = a.gA(a[r].pr_next_slide[0], "key");
                        a.startPanZoom(a[r].pr_next_bg, r, 0, a.getSlideIndex(r, e), "first", e)
                    }), a[r].mtl.pause()
                }
                a.animateTheLayers ? "carousel" === a[r].sliderType ? (!1 !== a[r].carousel.showLayersAllTime && (a[r].carousel.allLayersStarted ? a.animateTheLayers({
                    slide: "individual",
                    id: r,
                    mode: "rebuild",
                    caller: "swapSlideProgress_5"
                }) : a.animateTheLayers({
                    slide: "individual",
                    id: r,
                    mode: "start",
                    caller: "swapSlideProgress_4"
                }), a[r].carousel.allLayersStarted = !0), 0 !== a[r].firststart ? a.animateTheLayers({
                    slide: 0,
                    id: r,
                    mode: "start",
                    caller: "swapSlideProgress_6"
                }) : !0 !== o && a.animateTheLayers({
                    slide: a[r].pr_next_key !== i ? a[r].pr_next_key : a[r].pr_processing_key !== i ? a[r].pr_processing_key : a[r].pr_active_key,
                    id: r,
                    mode: "start",
                    caller: "swapSlideProgress_7"
                }), a[r].firststart = 0) : a.animateTheLayers({
                    slide: a[r].pr_next_key !== i ? a[r].pr_next_key : a[r].pr_processing_key !== i ? a[r].pr_processing_key : a[r].pr_active_key,
                    id: r,
                    mode: "start",
                    caller: "swapSlideProgress_8"
                }) : a[r].mtl != i && setTimeout(function() {
                    a[r].mtl.resume()
                }, 18), "carousel" !== a[r].sliderType && tpGS.gsap.to(a[r].pr_next_slide, .001, {
                    autoAlpha: 1
                })
            }
        },
        R = function(t) {
            if (a[t] !== i) {
                if ("done" !== a.RS_swapList[t]) {
                    a.RS_swapList[t] = "done";
                    var r = e.inArray(t, a.RS_swapping);
                    a.RS_swapping.splice(r, 1)
                }
                if (a[t].firstSlideAvailable === i && (a[t].firstSlideAvailable = !0, window.requestAnimationFrame(function() {
                        "hero" !== a[t].sliderType && a.createNavigation && a[t].navigation.use && !0 !== a[t].navigation.createNavigationDone && a.createNavigation(t)
                    })), "carousel" === a[t].sliderType && tpGS.gsap.to(a[t].carousel.wrap, 1, {
                        opacity: 1
                    }), a[t].pr_active_key = a[t].pr_processing_key !== i ? a[t].pr_processing_key : a[t].pr_active_key, delete a[t].pr_processing_key, "scroll" != a[t].parallax.type && "scroll+mouse" != a[t].parallax.type && "mouse+scroll" != a[t].parallax.type || (a[t].lastscrolltop = -999, a.generalObserver(a.ISM)), a[t].mtldiff = a[t].mtl.time(), delete a[t].mtl, a[t].pr_active_key !== i) {
                    a.gA(a[t].slides[a[t].pr_active_key], "sloop") !== i && function(e) {
                        if (a[e] !== i) {
                            a[e].sloops = a[e].sloops === i ? {} : a[e].sloops;
                            var t = a.gA(a[e].slides[a[e].pr_active_key], "key"),
                                r = a[e].sloops[t];
                            if (r === i) {
                                r = {
                                    s: 2500,
                                    e: 4500,
                                    r: "unlimited"
                                };
                                var o = a.gA(a[e].slides[a[e].pr_active_key], "sloop").split(";");
                                for (var s in o)
                                    if (o.hasOwnProperty(s)) {
                                        var n = o[s].split(":");
                                        switch (n[0]) {
                                            case "s":
                                                r.s = parseInt(n[1], 0) / 1e3;
                                                break;
                                            case "e":
                                                r.e = parseInt(n[1], 0) / 1e3;
                                                break;
                                            case "r":
                                                r.r = n[1]
                                        }
                                    }
                                r.r = "unlimited" === r.r ? -1 : parseInt(r.r, 0), a[e].sloops[t] = r, r.key = t
                            }
                            r.ct = {
                                time: r.s
                            }, r.tl = tpGS.gsap.timeline({}), r.timer = tpGS.gsap.fromTo(r.ct, r.e - r.s, {
                                time: r.s
                            }, {
                                time: r.e,
                                ease: "none",
                                onRepeat: function() {
                                    for (var t in a[e].layers[r.key]) a[e].layers[r.key].hasOwnProperty(t) && a[e]._L[t].timeline.play(r.s);
                                    var o = a[e].progressC;
                                    o !== i && o[0] !== i && o[0].tween !== i && o[0].tween.time(r.s)
                                },
                                onUpdate: function() {},
                                onComplete: function() {}
                            }).repeat(r.r), r.tl.add(r.timer, r.s), r.tl.time(a[e].mtldiff)
                        }
                    }(t), a.sA(a[t].slides[a[t].activeRSSlide], "isactiveslide", !1), a[t].activeRSSlide = a[t].pr_active_key, a.sA(a[t].slides[a[t].activeRSSlide], "isactiveslide", !0);
                    var o = a.gA(a[t].slides[a[t].pr_active_key], "key"),
                        s = a.gA(a[t].slides[a[t].pr_lastshown_key], "key");
                    a.sA(a[t].c[0], "slideactive", o), s !== i && a[t].panzoomTLs !== i && a[t].panzoomTLs[a.getSlideIndex(t, s)] !== i && ("carousel" === a[t].sliderType ? (a[t].panzoomTLs[a.getSlideIndex(t, s)].timeScale(3), a[t].panzoomTLs[a.getSlideIndex(t, s)].reverse()) : a[t].panzoomTLs[a.getSlideIndex(t, s)].pause()), a[t].pr_next_bg.data("panzoom") !== i && (a[t].panzoomTLs !== i && a[t].panzoomTLs[a.getSlideIndex(t, o)] !== i ? (a[t].panzoomTLs[a.getSlideIndex(t, o)].timeScale(1), a[t].panzoomTLs[a.getSlideIndex(t, o)].play()) : a.startPanZoom(a[t].pr_next_bg, t, 0, a.getSlideIndex(t, o), "play", o));
                    var n = {
                        slider: t,
                        slideIndex: parseInt(a[t].pr_active_key, 0) + 1,
                        slideLIIndex: a[t].pr_active_key,
                        slide: a[t].pr_next_slide,
                        currentslide: a[t].pr_next_slide,
                        prevSlideIndex: a[t].pr_lastshown_key !== i && parseInt(a[t].pr_lastshown_key, 0) + 1,
                        prevSlideLIIndex: a[t].pr_lastshown_key !== i && parseInt(a[t].pr_lastshown_key, 0),
                        prevSlide: a[t].pr_lastshown_key !== i && a[t].slides[a[t].pr_lastshown_key]
                    };
                    if (a[t].c.trigger("revolution.slide.onchange", n), a[t].c.trigger("revolution.slide.onafterswap", n), a[t].deepLinkListener || a[t].enableDeeplinkHash) {
                        var d = a.gA(a[t].slides[a[t].pr_active_key], "deeplink");
                        d !== i && d.length > 0 && (a[t].ignoreDeeplinkChange = !0, window.location.hash = a.gA(a[t].slides[a[t].pr_active_key], "deeplink"))
                    }
                    a[t].pr_lastshown_key = a[t].pr_active_key, a[t].startWithSlide !== i && "done" !== a[t].startWithSlide && "carousel" === a[t].sliderType && (a[t].firststart = 0), a[t].duringslidechange = !1, a[t].pr_active_slide.length > 0 && 0 != a.gA(a[t].pr_active_slide[0], "hal") && a.gA(a[t].pr_active_slide[0], "hal") <= a.gA(a[t].pr_active_slide[0], "sofacounter") && a[t].c.revremoveslide(a[t].pr_active_slide.index());
                    var l = a[t].pr_processing_key || a[t].pr_active_key || 0;
                    a[t].rowzones != i && (l = l > a[t].rowzones.length ? a[t].rowzones.length : l), (a[t].rowzones != i && a[t].rowzones.length > 0 && a[t].rowzones[l] != i && l >= 0 && l <= a[t].rowzones.length && a[t].rowzones[l].length > 0 || a.winH < a[t].module.height) && a.updateDims(t), delete a[t].sc_indicator, delete a[t].sc_indicator_dir, a[t].firstLetItFree === i && (a.generalObserver(a.ISM), a[t].firstLetItFree = !0)
                }
            }
        },
        O = function(t) {
            var r = a[t].progressBar;
            if (a[t].progressC === i || 0 == a[t].progressC.length)
                if (a[t].progressC = e('<rs-progress style="visibility:hidden;"></rs-progress>'), "horizontal" === r.style || "vertical" === r.style) {
                    if ("module" === r.basedon) {
                        for (var o = "", s = 0; s < a[t].slideamount; s++) o += "<rs-progress-bar></rs-progress-bar>";
                        o += "<rs-progress-bgs>";
                        for (s = 0; s < a[t].slideamount; s++) o += "<rs-progress-bg></rs-progress-bg>";
                        if (o += "</rs-progress-bgs>", "nogap" !== r.gaptype)
                            for (s = 0; s < a[t].slideamount; s++) o += "<rs-progress-gap></rs-progress-gap>";
                        a[t].progressC[0].innerHTML = o, !0 === a[t].noDetach && a[t].c.append(a[t].progressC), a[t].progressCBarBGS = a.getByTag(a[t].progressC[0], "RS-PROGRESS-BG"), a[t].progressCBarGAPS = a.getByTag(a[t].progressC[0], "RS-PROGRESS-GAP"), "nogap" !== r.gaptype && tpGS.gsap.set(a[t].progressCBarGAPS, {
                            backgroundColor: r.gapcolor,
                            zIndex: "gapbg" === r.gaptype ? 17 : 27
                        }), tpGS.gsap.set(a[t].progressCBarBGS, {
                            backgroundColor: r.bgcolor
                        })
                    } else a[t].progressC[0].innerHTML = "<rs-progress-bar></rs-progress-bar>", !0 === a[t].noDetach && a[t].c.append(a[t].progressC);
                    a[t].progressCBarInner = a.getByTag(a[t].progressC[0], "RS-PROGRESS-BAR"), tpGS.gsap.set(a[t].progressCBarInner, {
                        background: r.color
                    })
                } else a[t].progressC[0].innerHTML = '<canvas width="' + 2 * r.radius + '" height="' + 2 * r.radius + '" style="position:absolute" class="rs-progress-bar"></canvas>', !0 === a[t].noDetach && a[t].c.append(a[t].progressC), a[t].progressCBarInner = a[t].progressC[0].getElementsByClassName("rs-progress-bar")[0], a[t].progressBCanvas = a[t].progressCBarInner.getContext("2d"), a[t].progressBar.degree = "cw" === a[t].progressBar.style ? 360 : 0, I(t);
            if (!0 !== a[t].noDetach && a[t].progressC.detach(), a[t].progressBar.visibility[a[t].level] && 1 != a[t].progressBar.disableProgressBar)
                if ("horizontal" === r.style || "vertical" === r.style) {
                    var n, d, l = a[t].slideamount - 1;
                    if ("horizontal" === r.style) {
                        var c = "grid" === r.alignby ? a[t].gridwidth[a[t].level] : a[t].module.width;
                        n = Math.ceil(c / a[t].slideamount), d = Math.ceil((c - l * r.gapsize) / a[t].slideamount), tpGS.gsap.set(a[t].progressC, {
                            visibility: "visible",
                            top: "top" === r.vertical ? r.y + ("grid" === r.alignby && a[t].gridOffsetHeight !== i ? Math.max(0, a[t].gridOffsetHeight) : 0) : "center" === r.vertical ? "50%" : "auto",
                            bottom: "top" === r.vertical || "center" === r.vertical ? "auto" : r.y + ("grid" === r.alignby && a[t].gridOffsetHeight !== i ? Math.max(0, a[t].gridOffsetHeight) : 0),
                            left: "left" === r.horizontal && "grid" === r.alignby && a[t].gridOffsetWidth !== i ? Math.max(0, a[t].gridOffsetWidth) : "auto",
                            right: "right" === r.horizontal && "grid" === r.alignby && a[t].gridOffsetWidth !== i ? Math.max(0, a[t].gridOffsetWidth) : "auto",
                            y: "center" === r.vertical ? r.y : 0,
                            height: r.size,
                            backgroundColor: "module" === r.basedon ? "transparent" : r.bgcolor,
                            marginTop: "bottom" === r.vertical ? 0 : "top" === r.vertical ? 0 : parseInt(r.size, 0) / 2,
                            width: "grid" === r.alignby ? a[t].gridwidth[a[t].level] : "100%"
                        }), tpGS.gsap.set(a[t].progressCBarInner, {
                            x: "module" === r.basedon ? r.gap ? function(e) {
                                return ("right" === r.horizontal ? l - e : e) * (d + r.gapsize)
                            } : function(e) {
                                return ("right" === r.horizontal ? l - e : e) * n
                            } : 0,
                            width: "module" === r.basedon ? r.gap ? d + "px" : 100 / a[t].slideamount + "%" : "100%"
                        }), "module" === r.basedon && (tpGS.gsap.set(a[t].progressCBarBGS, {
                            x: "module" === r.basedon ? r.gap ? function(e) {
                                return e * (d + r.gapsize)
                            } : function(e) {
                                return e * n
                            } : 0,
                            width: "module" === r.basedon ? r.gap ? d + "px" : 100 / a[t].slideamount + "%" : "100%"
                        }), tpGS.gsap.set(a[t].progressCBarGAPS, {
                            width: r.gap ? r.gapsize + "px" : 0,
                            x: r.gap ? function(e) {
                                return (e + 1) * d + parseInt(r.gapsize, 0) * e
                            } : 0
                        }))
                    } else if ("vertical" === r.style) {
                        c = "grid" === r.alignby ? a[t].gridheight[a[t].level] : a[t].module.height;
                        n = Math.ceil(c / a[t].slideamount), d = Math.ceil((c - l * r.gapsize) / a[t].slideamount), tpGS.gsap.set(a[t].progressC, {
                            visibility: "visible",
                            left: "left" === r.horizontal ? r.x + ("grid" === r.alignby && a[t].gridOffsetWidth !== i ? Math.max(0, a[t].gridOffsetWidth) : 0) : "center" === r.horizontal ? "50%" : "auto",
                            right: "left" === r.horizontal || "center" === r.horizontal ? "auto" : r.x + ("grid" === r.alignby && a[t].gridOffsetWidth !== i ? Math.max(0, a[t].gridOffsetWidth) : 0),
                            x: "center" === r.horizontal ? r.x : 0,
                            top: "top" === r.vertical && "grid" === r.alignby && a[t].gridOffsetHeight !== i ? Math.max(a[t].gridOffsetHeight, 0) : "auto",
                            bottom: "bottom" === r.vertical && "grid" === r.alignby && a[t].gridOffsetHeight !== i ? Math.max(a[t].gridOffsetHeight, 0) : "auto",
                            width: r.size,
                            marginLeft: "left" === r.horizontal ? 0 : "right" === r.horizontal ? 0 : parseInt(r.size, 0) / 2,
                            backgroundColor: "module" === r.basedon ? "transparent" : r.bgcolor,
                            height: "grid" === r.alignby ? a[t].gridheight[a[t].level] : "100%"
                        }), tpGS.gsap.set(a[t].progressCBarInner, {
                            y: "module" === r.basedon ? r.gap ? function(e) {
                                return ("bottom" === r.vertical ? l - e : e) * (d + r.gapsize)
                            } : function(e) {
                                return ("bottom" === r.vertical ? l - e : e) * n
                            } : 0,
                            height: "module" === r.basedon ? r.gap ? d + "px" : 100 / a[t].slideamount + "%" : "100%"
                        }), "module" === r.basedon && (tpGS.gsap.set(a[t].progressCBarBGS, {
                            y: "module" === r.basedon ? r.gap ? function(e) {
                                return e * (d + r.gapsize)
                            } : function(e) {
                                return e * n
                            } : 0,
                            height: "module" === r.basedon ? r.gap ? d + "px" : 100 / a[t].slideamount + "%" : "100%"
                        }), tpGS.gsap.set(a[t].progressCBarGAPS, {
                            height: r.gap ? r.gapsize + "px" : 0,
                            y: r.gap ? function(e) {
                                return (e + 1) * d + parseInt(r.gapsize, 0) * e
                            } : 0
                        }))
                    }
                } else tpGS.gsap.set(a[t].progressC, {
                    top: "top" === r.vertical ? r.y + ("grid" === r.alignby && a[t].gridOffsetHeight !== i ? Math.max(0, a[t].gridOffsetHeight) : 0) : "center" === r.vertical ? "50%" : "auto",
                    bottom: "top" === r.vertical || "center" === r.vertical ? "auto" : r.y + ("grid" === r.alignby && a[t].gridOffsetHeight !== i ? Math.max(0, a[t].gridOffsetHeight) : 0),
                    left: "left" === r.horizontal ? r.x + ("grid" === r.alignby && a[t].gridOffsetWidth !== i ? Math.max(0, a[t].gridOffsetWidth) : 0) : "center" === r.horizontal ? "50%" : "auto",
                    right: "left" === r.horizontal || "center" === r.horizontal ? "auto" : r.x + ("grid" === r.alignby && a[t].gridOffsetWidth !== i ? Math.max(0, a[t].gridOffsetWidth) : 0),
                    y: "center" === r.vertical ? r.y : 0,
                    x: "center" === r.horizontal ? r.x : 0,
                    width: 2 * r.radius,
                    height: 2 * r.radius,
                    marginTop: "center" === r.vertical ? 0 - r.radius : 0,
                    marginLeft: "center" === r.horizontal ? 0 - r.radius : 0,
                    backgroundColor: "transparent",
                    visibility: "visible"
                });
            else a[t].progressC[0].style.visibility = "hidden";
            !0 !== a[t].noDetach && a[t].c.append(a[t].progressC), a[t].gridOffsetWidth === i && "grid" === r.alignby ? a[t].rebuildProgressBar = !0 : a[t].rebuildProgressBar = !1
        },
        I = function(e) {
            var i = a[e].progressBar;
            i.radius - parseInt(i.size, 0) <= 0 && (i.size = i.radius / 4);
            var t = parseInt(i.radius),
                r = parseInt(i.radius);
            a[e].progressBCanvas.lineCap = "round", a[e].progressBCanvas.clearRect(0, 0, 2 * i.radius, 2 * i.radius), a[e].progressBCanvas.beginPath(), a[e].progressBCanvas.arc(t, r, i.radius - parseInt(i.size, 0), Math.PI / 180 * 270, Math.PI / 180 * 630), a[e].progressBCanvas.strokeStyle = i.bgcolor, a[e].progressBCanvas.lineWidth = parseInt(i.size, 0) - 1, a[e].progressBCanvas.stroke(), a[e].progressBCanvas.beginPath(), a[e].progressBCanvas.strokeStyle = i.color, a[e].progressBCanvas.lineWidth = parseInt(i.size, 0), a[e].progressBCanvas.arc(t, r, i.radius - parseInt(i.size, 0), Math.PI / 180 * 270, Math.PI / 180 * (270 + a[e].progressBar.degree), "cw" !== i.style), a[e].progressBCanvas.stroke()
        },
        T = function(t) {
            var r = function() {
                    t !== i && a !== i && a[t] !== i && (0 == e("body").find(a[t].c).length || null === a[t] || null === a[t].c || a[t].c === i || 0 === a[t].length ? (! function(i) {
                        a[i].c.children().each(function() {
                            try {
                                e(this).die("click")
                            } catch (e) {}
                            try {
                                e(this).die("mouseenter")
                            } catch (e) {}
                            try {
                                e(this).die("mouseleave")
                            } catch (e) {}
                            try {
                                e(this).unbind("hover")
                            } catch (e) {}
                        });
                        try {
                            a[i].c.die("click", "mouseenter", "mouseleave")
                        } catch (e) {}
                        clearInterval(a[i].cdint), a[i].c = null
                    }(t), clearInterval(a[t].cdint)) : (a[t].c.trigger("revolution.slide.slideatend"), 1 == a[t].c.data("conthoverchanged") && (a[t].conthover = a[t].c.data("conthover"), a[t].c.data("conthoverchanged", 0)), a.callingNewSlide(t, 1, !0)))
                },
                o = tpGS.gsap.timeline({
                    paused: !0
                }),
                s = "reset" === a[t].progressBar.reset || a[t].progressBar.notnew === i ? 0 : .2,
                n = "slide" === a[t].progressBar.basedon ? 0 : a[t].pr_processing_key !== i ? a[t].pr_processing_key : a[t].pr_active_key;
            if (n = n === i ? 0 : n, "horizontal" === a[t].progressBar.style) {
                if (o.add(tpGS.gsap.to(a[t].progressCBarInner[n], s, {
                        scaleX: 0,
                        transformOrigin: "right" === a[t].progressBar.horizontal ? "100% 50%" : "0% 50%"
                    })), o.add(tpGS.gsap.to(a[t].progressCBarInner[n], a[t].duration / 1e3, {
                        transformOrigin: "right" === a[t].progressBar.horizontal ? "100% 50%" : "0% 50%",
                        force3D: "auto",
                        scaleX: 1,
                        onComplete: r,
                        delay: .5,
                        ease: a[t].progressBar.ease
                    })), "module" === a[t].progressBar.basedon)
                    for (var d = 0; d < a[t].slideamount; d++) d !== n && o.add(tpGS.gsap.set(a[t].progressCBarInner[d], {
                        scaleX: d < n ? 1 : 0,
                        transformOrigin: "right" === a[t].progressBar.horizontal ? "100% 50%" : "0% 50%"
                    }), 0)
            } else if ("vertical" === a[t].progressBar.style) {
                if (a[t].progressCBarInner[n] !== i && o.add(tpGS.gsap.to(a[t].progressCBarInner[n], s, {
                        scaleY: 0,
                        transformOrigin: "bottom" === a[t].progressBar.vertical ? "50% 100%" : "50% 0%"
                    })), a[t].progressCBarInner[n] !== i && o.add(tpGS.gsap.to(a[t].progressCBarInner[n], a[t].duration / 1e3, {
                        transformOrigin: "bottom" === a[t].progressBar.vertical ? "50% 100%" : "50% 0%",
                        force3D: "auto",
                        scaleY: 1,
                        onComplete: r,
                        delay: .5,
                        ease: a[t].progressBar.ease
                    })), "module" === a[t].progressBar.basedon)
                    for (d = 0; d < a[t].slideamount; d++) d !== n && a[t].progressCBarInner[d] !== i && o.add(tpGS.gsap.set(a[t].progressCBarInner[d], {
                        scaleY: d < n ? 1 : 0,
                        transformOrigin: "botton" === a[t].progressBar.vertical ? "50% 100%" : "50% 0%"
                    }), 0)
            } else {
                var l = "slide" === a[t].progressBar.basedon ? 0 : Math.max(0, 360 / a[t].slideamount * n),
                    c = "slide" === a[t].progressBar.basedon ? 360 : 360 / a[t].slideamount * (n + 1);
                "ccw" === a[t].progressBar.style && "slide" !== a[t].progressBar.basedon && (l = 360 - c, c = 360 - 360 / a[t].slideamount * n), o.add(tpGS.gsap.to(a[t].progressBar, s, {
                    degree: "cw" === a[t].progressBar.style ? l : c,
                    onUpdate: function() {
                        I(t)
                    }
                })), o.add(tpGS.gsap.to(a[t].progressBar, a[t].duration / 1e3, {
                    degree: "cw" === a[t].progressBar.style ? c : l,
                    onUpdate: function() {
                        I(t)
                    },
                    onComplete: r,
                    delay: .5,
                    ease: a[t].progressBar.ease
                }))
            }
            return a[t].progressBar.notnew = !0, o
        },
        M = function(e) {
            a[e].progressC == i && O(e), a[e].loop = 0, a[e].stopAtSlide != i && a[e].stopAtSlide > -1 ? a[e].lastslidetoshow = a[e].stopAtSlide : a[e].lastslidetoshow = 999, a[e].stopLoop = !1, 0 == a[e].looptogo && (a[e].stopLoop = !0), a[e].c.on("stoptimer", function() {
                a[e].progressC != i && (a[e].progressC[0].tween.pause(), a[e].progressBar.disableProgressBar && (a[e].progressC[0].style.visibility = "hidden"), a[e].sliderstatus = "paused", a[e].slideInSwapTimer || a.unToggleState(a[e].slidertoggledby), a[e].slideInSwapTimer = !1)
            }), a[e].c.on("starttimer", function() {
                a[e].progressC != i && (a[e].forcepaused || (1 != a[e].conthover && 1 != a[e].stopByVideo && a[e].module.width > a[e].hideSliderAtLimit && 1 != a[e].tonpause && 1 != a[e].overnav && 1 != a[e].ssop && (1 === a[e].noloopanymore || a[e].viewPort.enable && !a[e].inviewport || (a[e].progressBar.visibility[a[e].level] || (a[e].progressC[0].style.visibility = "visible"), a[e].progressC[0].tween.resume(), a[e].sliderstatus = "playing")), !a[e].progressBar.disableProgressBar && a[e].progressBar.visibility[a[e].level] || (a[e].progressC[0].style.visibility = "hidden"), a.toggleState(a[e].slidertoggledby)))
            }), a[e].c.on("restarttimer", function() {
                if (a[e].progressC != i && !a[e].forcepaused) {
                    if (a[e].mouseoncontainer && "on" == a[e].navigation.onHoverStop && !a.ISM) return !1;
                    1 === a[e].noloopanymore || a[e].viewPort.enable && !a[e].inviewport || 1 == a[e].ssop ? a.unToggleState(a[e].slidertoggledby) : (a[e].progressBar.visibility[a[e].level] || (a[e].progressC[0].style.visibility = "visible"), a[e].progressC[0].tween !== i && a[e].progressC[0].tween.kill(), a[e].progressC[0].tween = T(e), a[e].progressC[0].tween.play(), a[e].sliderstatus = "playing", a.toggleState(a[e].slidertoggledby)), !a[e].progressBar.disableProgressBar && a[e].progressBar.visibility[a[e].level] || (a[e].progressC[0].style.visibility = "hidden"), a[e].mouseoncontainer && 1 == a[e].navigation.onHoverStop && !a.ISM && (a[e].c.trigger("stoptimer"), a[e].c.trigger("revolution.slide.onpause"))
                }
            }), a[e].c.on("nulltimer", function() {
                a[e].progressC != i && a[e].progressC[0] !== i && (a[e].progressC[0].tween !== i && a[e].progressC[0].tween.kill(), a[e].progressC[0].tween = T(e), a[e].progressC[0].tween.pause(0), !a[e].progressBar.disableProgressBar && a[e].progressBar.visibility[a[e].level] || (a[e].progressC[0].style.visibility = "hidden"), a[e].sliderstatus = "paused")
            }), a[e].progressC !== i && (a[e].progressC[0].tween = T(e)), a[e].slideamount > 1 && (0 != a[e].stopAfterLoops || 1 != a[e].stopAtSlide) ? a[e].c.trigger("starttimer") : (a[e].noloopanymore = 1, a[e].c.trigger("nulltimer")), a[e].c.on("tp-mouseenter", function() {
                a[e].mouseoncontainer = !0, 1 != a[e].navigation.onHoverStop || a.ISM || (a[e].c.trigger("stoptimer"), a[e].c.trigger("revolution.slide.onpause"))
            }), a[e].c.on("tp-mouseleft", function() {
                a[e].mouseoncontainer = !1, 1 != a[e].c.data("conthover") && 1 == a[e].navigation.onHoverStop && (1 == a[e].viewPort.enable && a[e].inviewport || 0 == a[e].viewPort.enable) && (a[e].c.trigger("revolution.slide.onresume"), a[e].c.trigger("starttimer"))
            })
        },
        C = function() {
            e(".rev_redraw_on_blurfocus").each(function() {
                var e = this.id;
                if (a[e] == i || a[e].c == i || 0 === a[e].c.length) return !1;
                1 != a[e].windowfocused && (a[e].windowfocused = !0, tpGS.gsap.delayedCall(.1, function() {
                    a[e].fallbacks.nextSlideOnWindowFocus && a[e].c.revnext(), a[e].c.revredraw(), "playing" == a[e].lastsliderstatus && a[e].c.revresume(), a[e].c.trigger("revolution.slide.tabfocused")
                }))
            })
        },
        A = function() {
            document.hasFocus() || e(".rev_redraw_on_blurfocus").each(function(e) {
                var i = this.id;
                a[i].windowfocused = !1, a[i].lastsliderstatus = a[i].sliderstatus, a[i].c.revpause(), a[i].c.trigger("revolution.slide.tabblured")
            })
        },
        D = function() {
            var e = document.documentMode === i,
                t = window.chrome;
            1 !== a.revslider_focus_blur_listener && (a.revslider_focus_blur_listener = 1, e && !t ? a.window.on("focusin", function() {
                !0 !== a.windowIsFocused && C(), a.windowIsFocused = !0
            }).on("focusout", function() {
                !0 !== a.windowIsFocused && a.windowIsFocused !== i || A(), a.windowIsFocused = !1
            }) : window.addEventListener ? (window.addEventListener("focus", function(e) {
                !0 !== a.windowIsFocused && C(), a.windowIsFocused = !0
            }, {
                capture: !1,
                passive: !0
            }), window.addEventListener("blur", function(e) {
                !0 !== a.windowIsFocused && a.windowIsFocused !== i || A(), a.windowIsFocused = !1
            }, {
                capture: !1,
                passive: !0
            })) : (window.attachEvent("focus", function(e) {
                !0 !== a.windowIsFocused && C(), a.windowIsFocused = !0
            }), window.attachEvent("blur", function(e) {
                !0 !== a.windowIsFocused && a.windowIsFocused !== i || A(), a.windowIsFocused = !1
            })))
        },
        P = function(e) {
            for (var i, t = [], a = window.location.href.slice(window.location.href.indexOf(e) + 1).split("_"), r = 0; r < a.length; r++) a[r] = a[r].replace("%3D", "="), i = a[r].split("="), t.push(i[0]), t[i[0]] = i[1];
            return t
        },
        B = function(t) {
            if (a[t].blockSpacing !== i) {
                var r = a[t].blockSpacing.split(";");
                for (var o in a[t].blockSpacing = {}, r)
                    if (r.hasOwnProperty(o)) {
                        var s = r[o].split(":");
                        switch (s[0]) {
                            case "t":
                                a[t].blockSpacing.top = a.revToResp(s[1], 4, 0);
                                break;
                            case "b":
                                a[t].blockSpacing.bottom = a.revToResp(s[1], 4, 0);
                                break;
                            case "l":
                                a[t].blockSpacing.left = a.revToResp(s[1], 4, 0);
                                break;
                            case "r":
                                a[t].blockSpacing.right = a.revToResp(s[1], 4, 0)
                        }
                    }
                a[t].blockSpacing.block = e(a.closestClass(a[t].c[0], "wp-block-themepunch-revslider")), a[t].level !== i && a[t].blockSpacing !== i && tpGS.gsap.set(a[t].blockSpacing.block, {
                    paddingLeft: a[t].blockSpacing.left[a[t].level],
                    paddingRight: a[t].blockSpacing.right[a[t].level],
                    marginTop: a[t].blockSpacing.top[a[t].level],
                    marginBottom: a[t].blockSpacing.bottom[a[t].level]
                })
            }
        },
        z = function(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        },
        G = function(t) {
            return function(e) {
                for (var t in e.minHeight = e.minHeight !== i ? "none" === e.minHeight || "0" === e.minHeight || "0px" === e.minHeight || "" == e.minHeight || " " == e.minHeight ? 0 : parseInt(e.minHeight, 0) : 0, e.maxHeight = "none" === e.maxHeight || "0" === e.maxHeight ? 0 : parseInt(e.maxHeight, 0), e.carousel.maxVisibleItems = e.carousel.maxVisibleItems < 1 ? 999 : e.carousel.maxVisibleItems, e.carousel.vertical_align = "top" === e.carousel.vertical_align ? "0%" : "bottom" === e.carousel.vertical_align ? "100%" : "50%", e.carousel.space = parseInt(e.carousel.space, 0), e.carousel.maxOpacity = parseInt(e.carousel.maxOpacity, 0), e.carousel.maxOpacity = e.carousel.maxOpacity > 1 ? e.carousel.maxOpacity / 100 : e.carousel.maxOpacity, e.carousel.showLayersAllTime = "true" === e.carousel.showLayersAllTime || !0 === e.carousel.showLayersAllTime ? "all" : e.carousel.showLayersAllTime, e.carousel.maxRotation = parseInt(e.carousel.maxRotation, 0), e.carousel.minScale = parseInt(e.carousel.minScale, 0), e.carousel.minScale = e.carousel.minScale > .9 ? e.carousel.minScale / 100 : e.carousel.minScale, e.carousel.speed = parseInt(e.carousel.speed, 0), e.navigation.maintypes = ["arrows", "tabs", "thumbnails", "bullets"], e.perspective = parseInt(e.perspective, 0), e.navigation.maintypes) e.navigation.maintypes.hasOwnProperty(t) && e.navigation[e.navigation.maintypes[t]] !== i && (e.navigation[e.navigation.maintypes[t]].animDelay = e.navigation[e.navigation.maintypes[t]].animDelay === i ? 1e3 : e.navigation[e.navigation.maintypes[t]].animDelay, e.navigation[e.navigation.maintypes[t]].animSpeed = e.navigation[e.navigation.maintypes[t]].animSpeed === i ? 1e3 : e.navigation[e.navigation.maintypes[t]].animSpeed, e.navigation[e.navigation.maintypes[t]].animDelay = parseInt(e.navigation[e.navigation.maintypes[t]].animDelay, 0) / 1e3, e.navigation[e.navigation.maintypes[t]].animSpeed = parseInt(e.navigation[e.navigation.maintypes[t]].animSpeed, 0) / 1e3);
                if (a.isNumeric(e.scrolleffect.tilt) || -1 !== e.scrolleffect.tilt.indexOf("%") && (e.scrolleffect.tilt = parseInt(e.scrolleffect.tilt)), e.scrolleffect.tilt = e.scrolleffect.tilt / 100, e.navigation.thumbnails.position = "outer-horizontal" == e.navigation.thumbnails.position ? "bottom" == e.navigation.thumbnails.v_align ? "outer-bottom" : "outer-top" : "outer-vertical" == e.navigation.thumbnails.position ? "left" == e.navigation.thumbnails.h_align ? "outer-left" : "outer-right" : e.navigation.thumbnails.position, e.navigation.tabs.position = "outer-horizontal" == e.navigation.tabs.position ? "bottom" == e.navigation.tabs.v_align ? "outer-bottom" : "outer-top" : "outer-vertical" == e.navigation.tabs.position ? "left" == e.navigation.tabs.h_align ? "outer-left" : "outer-right" : e.navigation.tabs.position, e.sbtimeline.speed = parseInt(e.sbtimeline.speed, 0) / 1e3 || .5, !0 === e.sbtimeline.set && !0 === e.sbtimeline.fixed && "auto" !== e.sliderLayout ? (e.sbtimeline.fixStart = parseInt(e.sbtimeline.fixStart), e.sbtimeline.fixEnd = parseInt(e.sbtimeline.fixEnd)) : e.sbtimeline.fixed = !1, e.progressBar === i || "true" != e.progressBar.disableProgressBar && 1 != e.progressBar.disableProgressBar || (e.progressBar.disableProgressBar = !0), e.startDelay = parseInt(e.startDelay, 0) || 0, e.navigation !== i && e.navigation.arrows != i && e.navigation.arrows.hide_under != i && (e.navigation.arrows.hide_under = parseInt(e.navigation.arrows.hide_under)), e.navigation !== i && e.navigation.bullets != i && e.navigation.bullets.hide_under != i && (e.navigation.bullets.hide_under = parseInt(e.navigation.bullets.hide_under)), e.navigation !== i && e.navigation.thumbnails != i && e.navigation.thumbnails.hide_under != i && (e.navigation.thumbnails.hide_under = parseInt(e.navigation.thumbnails.hide_under)), e.navigation !== i && e.navigation.tabs != i && e.navigation.tabs.hide_under != i && (e.navigation.tabs.hide_under = parseInt(e.navigation.tabs.hide_under)), e.navigation !== i && e.navigation.arrows != i && e.navigation.arrows.hide_over != i && (e.navigation.arrows.hide_over = parseInt(e.navigation.arrows.hide_over)), e.navigation !== i && e.navigation.bullets != i && e.navigation.bullets.hide_over != i && (e.navigation.bullets.hide_over = parseInt(e.navigation.bullets.hide_over)), e.navigation !== i && e.navigation.thumbnails != i && e.navigation.thumbnails.hide_over != i && (e.navigation.thumbnails.hide_over = parseInt(e.navigation.thumbnails.hide_over)), e.navigation !== i && e.navigation.tabs != i && e.navigation.tabs.hide_over != i && (e.navigation.tabs.hide_over = parseInt(e.navigation.tabs.hide_over)), e.lazyloaddata !== i && e.lazyloaddata.length > 0 && e.lazyloaddata.indexOf("-") > 0) {
                    var r = e.lazyloaddata.split("-");
                    for (e.lazyloaddata = r[0], t = 1; t < r.length; t++) e.lazyloaddata += z(r[t])
                }
                return e.duration = parseInt(e.duration), "single" === e.lazyType && "carousel" === e.sliderType && (e.lazyType = "smart"), "carousel" === e.sliderType && e.carousel.justify && (e.justifyCarousel = !0, e.keepBPHeight = !0), e.enableUpscaling = 1 == e.enableUpscaling && "carousel" !== e.sliderType && "fullwidth" === e.sliderLayout, e.useFullScreenHeight = "carousel" === e.sliderType && "fullscreen" === e.sliderLayout && !0 === e.useFullScreenHeight, e.progressBar.y = parseInt(e.progressBar.y, 0), e.progressBar.x = parseInt(e.progressBar.x, 0), /*!Custom Eases*/ "IE" !== window.RSBrowser && e.customEases !== i && (!e.customEases.SFXBounceLite && "true" != e.customEases.SFXBounceLite || tpGS.SFXBounceLite !== i || (tpGS.SFXBounceLite = tpGS.CustomBounce.create("SFXBounceLite", {
                    strength: .3,
                    squash: 1,
                    squashID: "SFXBounceLite-squash"
                })), !e.customEases.SFXBounceSolid && "true" != e.customEases.SFXBounceSolid || tpGS.SFXBounceSolid !== i || (tpGS.SFXBounceSolid = tpGS.CustomBounce.create("SFXBounceSolid", {
                    strength: .5,
                    squash: 2,
                    squashID: "SFXBounceSolid-squash"
                })), !e.customEases.SFXBounceStrong && "true" != e.customEases.SFXBounceStrong || tpGS.SFXBounceStrong !== i || (tpGS.SFXBounceStrong = tpGS.CustomBounce.create("SFXBounceStrong", {
                    strength: .7,
                    squash: 3,
                    squashID: "SFXBounceStrong-squash"
                })), !e.customEases.SFXBounceExtrem && "true" != e.customEases.SFXBounceExtrem || tpGS.SFXBounceExtrem !== i || (tpGS.SFXBounceExtrem = tpGS.CustomBounce.create("SFXBounceExtrem", {
                    strength: .9,
                    squash: 4,
                    squashID: "SFXBounceExtrem-squash"
                })), !e.customEases.BounceLite && "true" != e.customEases.BounceLite || tpGS.BounceLite !== i || (tpGS.BounceLite = tpGS.CustomBounce.create("BounceLite", {
                    strength: .3
                })), !e.customEases.BounceSolid && "true" != e.customEases.BounceSolid || tpGS.BounceSolid !== i || (tpGS.BounceSolid = tpGS.CustomBounce.create("BounceSolid", {
                    strength: .5
                })), !e.customEases.BounceStrong && "true" != e.customEases.BounceStrong || tpGS.BounceStrong !== i || (tpGS.BounceStrong = tpGS.CustomBounce.create("BounceStrong", {
                    strength: .7
                })), !e.customEases.BounceExtrem && "true" != e.customEases.BounceExtrem || tpGS.BounceExtrem !== i || (tpGS.BounceExtrem = tpGS.CustomBounce.create("BounceExtrem", {
                    strength: .9
                }))), e.modal.coverSpeed = parseFloat(e.modal.coverSpeed), e.modal.coverSpeed = e.modal.coverSpeed > 200 ? e.modal.coverSpeed / 1e3 : e.modal.coverSpeed, e.modal.coverSpeed = Math.max(Math.min(3, e.modal.coverSpeed), .3), e.navigation.wheelViewPort = e.navigation.wheelViewPort === i ? .5 : e.navigation.wheelViewPort / 100, e.navigation.wheelCallDelay = e.navigation.wheelCallDelay === i ? 1e3 : parseInt(e.navigation.wheelCallDelay), e.autoDPR = "string" == typeof e.DPR && -1 !== e.DPR.indexOf("ax"), e.DPR = e.DPR.replace("ax", ""), e.DPR = parseInt(e.DPR.replace("x", "")), e.DPR = isNaN(e.DPR) ? window.devicePixelRatio : e.autoDPR ? Math.min(window.devicePixelRatio, e.DPR) : e.DPR, e.DPR = 1 != e.onedpronmobile && "true" != e.onedpronmobile || !a.ISM ? e.DPR : 1, !1 === e.viewPort.global ? e.viewPort.enable = !1 : !0 === e.viewPort.global && (e.viewPort.local = e.viewPort.enable, e.viewPort.enable = !0), e
            }(e.extend(!0, {
                DPR: "dpr",
                sliderType: "standard",
                sliderLayout: "auto",
                overlay: {
                    type: "none",
                    size: 1,
                    colora: "transparent",
                    colorb: "#000000"
                },
                duration: 9e3,
                imgCrossOrigin: "",
                modal: {
                    useAsModal: !1,
                    cover: !0,
                    coverColor: "rgba(0,0,0,0.5)",
                    horizontal: "center",
                    vertical: "middle",
                    coverSpeed: 1
                },
                navigation: {
                    keyboardNavigation: !1,
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation: "off",
                    wheelViewPort: 50,
                    wheelCallDelay: "1000ms",
                    onHoverStop: !0,
                    mouseScrollReverse: "default",
                    touch: {
                        touchenabled: !1,
                        touchOnDesktop: !1,
                        swipe_treshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: !1,
                        mobileCarousel: !0,
                        desktopCarousel: !0
                    },
                    arrows: {
                        style: "",
                        enable: !1,
                        hide_onmobile: !1,
                        hide_under: 0,
                        hide_onleave: !1,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_over: 9999,
                        tmp: "",
                        rtl: !1,
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 20,
                            v_offset: 0,
                            container: "slider"
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 20,
                            v_offset: 0,
                            container: "slider"
                        }
                    },
                    bullets: {
                        enable: !1,
                        hide_onmobile: !1,
                        hide_onleave: !1,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_under: 0,
                        hide_over: 9999,
                        direction: "horizontal",
                        h_align: "center",
                        v_align: "bottom",
                        space: 5,
                        h_offset: 0,
                        v_offset: 20,
                        tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>',
                        container: "slider",
                        rtl: !1,
                        style: ""
                    },
                    thumbnails: {
                        container: "slider",
                        rtl: !1,
                        style: "",
                        enable: !1,
                        width: 100,
                        height: 50,
                        min_width: 100,
                        wrapper_padding: 2,
                        wrapper_color: "transparent",
                        tmp: '<span class="tp-thumb-image"></span><span class="tp-thumb-title"></span>',
                        visibleAmount: 5,
                        hide_onmobile: !1,
                        hide_onleave: !1,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_under: 0,
                        hide_over: 9999,
                        direction: "horizontal",
                        span: !1,
                        position: "inner",
                        space: 2,
                        h_align: "center",
                        v_align: "bottom",
                        h_offset: 0,
                        v_offset: 20,
                        mhoff: 0,
                        mvoff: 0
                    },
                    tabs: {
                        container: "slider",
                        rtl: !1,
                        style: "",
                        enable: !1,
                        width: 100,
                        min_width: 100,
                        height: 50,
                        wrapper_padding: 10,
                        wrapper_color: "transparent",
                        tmp: '<span class="tp-tab-image"></span>',
                        visibleAmount: 5,
                        hide_onmobile: !1,
                        hide_onleave: !1,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_under: 0,
                        hide_over: 9999,
                        direction: "horizontal",
                        span: !1,
                        space: 0,
                        position: "inner",
                        h_align: "center",
                        v_align: "bottom",
                        h_offset: 0,
                        v_offset: 20,
                        mhoff: 0,
                        mvoff: 0
                    }
                },
                responsiveLevels: 4064,
                visibilityLevels: [2048, 1024, 778, 480],
                gridwidth: 960,
                gridheight: 500,
                minHeight: 0,
                maxHeight: 0,
                keepBPHeight: !1,
                useFullScreenHeight: !0,
                overflowHidden: !1,
                forceOverflow: !1,
                fixedOnTop: !1,
                autoHeight: !1,
                gridEQModule: !1,
                disableForceFullWidth: !1,
                fullScreenOffsetContainer: "",
                fullScreenOffset: "0",
                hideLayerAtLimit: 0,
                hideAllLayerAtLimit: 0,
                hideSliderAtLimit: 0,
                progressBar: {
                    disableProgressBar: !1,
                    style: "horizontal",
                    size: "5px",
                    radius: 10,
                    vertical: "bottom",
                    horizontal: "left",
                    x: 0,
                    y: 0,
                    color: "rgba(255,255,255,0.5)",
                    bgcolor: "transparent",
                    basedon: "slide",
                    gapsize: 0,
                    reset: "reset",
                    gaptype: "gapboth",
                    gapcolor: "rgba(255,255,255,0.5)",
                    ease: "none",
                    visibility: {
                        0: !0,
                        1: !0,
                        2: !0,
                        3: !0
                    }
                },
                stopAtSlide: -1,
                stopAfterLoops: 0,
                shadow: 0,
                startDelay: 0,
                lazyType: "none",
                spinner: "off",
                shuffle: !1,
                perspective: "600px",
                perspectiveType: "local",
                viewPort: {
                    enable: !1,
                    global: !1,
                    globalDist: "-400px",
                    outof: "wait",
                    visible_area: "200px",
                    presize: !1
                },
                fallbacks: {
                    isJoomla: !1,
                    panZoomDisableOnMobile: !1,
                    simplifyAll: !0,
                    nextSlideOnWindowFocus: !1,
                    disableFocusListener: !1,
                    allowHTML5AutoPlayOnAndroid: !0
                },
                fanim: !1,
                parallax: {
                    type: "off",
                    levels: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
                    origo: "enterpoint",
                    disable_onmobile: !1,
                    ddd_shadow: !1,
                    ddd_bgfreeze: !1,
                    ddd_overflow: "visible",
                    ddd_layer_overflow: "visible",
                    ddd_z_correction: 65,
                    speed: 400,
                    speedbg: 0,
                    speedls: 0
                },
                scrolleffect: {
                    set: !1,
                    fade: !1,
                    blur: !1,
                    scale: !1,
                    grayscale: !1,
                    maxblur: 10,
                    layers: !1,
                    slide: !1,
                    direction: "both",
                    multiplicator: 1.35,
                    multiplicator_layers: .5,
                    tilt: 30,
                    disable_onmobile: !1
                },
                sbtimeline: {
                    set: !1,
                    fixed: !1,
                    fixStart: 0,
                    fixEnd: 0,
                    layers: !1,
                    slide: !1,
                    ease: "none",
                    speed: 500
                },
                carousel: {
                    easing: "power3.inOut",
                    speed: 800,
                    showLayersAllTime: !1,
                    horizontal_align: "center",
                    vertical_align: "center",
                    infinity: !1,
                    space: 0,
                    maxVisibleItems: 3,
                    stretch: !1,
                    fadeout: !0,
                    maxRotation: 0,
                    maxOpacity: 100,
                    minScale: 0,
                    offsetScale: !1,
                    vary_fade: !1,
                    vary_rotation: !1,
                    vary_scale: !1,
                    border_radius: "0px",
                    padding_top: 0,
                    padding_bottom: 0
                },
                observeWrap: !1,
                extensions: "extensions/",
                extensions_suffix: ".min.js",
                stopLoop: !1,
                waitForInit: !1,
                ignoreHeightChange: !0,
                onedpronmobile: !1
            }, t))
        };
    window.RS_MODULES = window.RS_MODULES || {}, window.RS_MODULES.main = {
        loaded: !0,
        version: t
    }, window.RS_MODULES.minimal = !1, window.RS_MODULES.callSliders = function() {
        for (var e in RS_MODULES.modules) !0 !== RS_MODULES.modules[e].once && window.RS_MODULES !== i && window.RS_MODULES.minimal && (RS_MODULES.modules[e].once = !0, RS_MODULES.modules[e].init())
    }, document.body && document.body.className.indexOf("elementor-page") >= 0 && (window.RS_MODULES.waiting = window.RS_MODULES.waiting === i ? [] : window.RS_MODULES.waiting, window.RS_MODULES.waiting.push("elementor"), function e() {
        window.elementorFrontend !== i && window.elementorFrontend.hooks !== i && window.elementorFrontend.hooks.addAction !== i ? (window.RS_MODULES.elementor = {
            loaded: !0,
            version: "6.5.0"
        }, window.RS_MODULES.checkMinimal && window.RS_MODULES.checkMinimal()) : requestAnimationFrame(e)
    }()), "loading" === document.readyState && document.addEventListener("readystatechange", function() {
        "interactive" !== document.readyState && "complete" !== document.readyState || window.RS_MODULES.callSliders()
    }), window.RS_MODULES.checkMinimal = function() {
        if (0 == window.RS_MODULES.minimal) {
            var t = 1 == window.RS_MODULES.minimal || window.RS_MODULES.waiting !== i && e.fn.revolution !== i && window.tpGS !== i && window.tpGS.gsap !== i;
            if (t)
                for (var a in window.RS_MODULES.waiting) window.RS_MODULES.waiting.hasOwnProperty(a) && t && window.RS_MODULES[window.RS_MODULES.waiting[a]] === i && (t = !1);
            t && (!0 !== window.RS_MODULES.minimal && e(document).trigger("REVSLIDER_READY_TO_USE"), window.RS_MODULES.minimal = !0)
        } else window.RS_MODULES.minimal = !0;
        !0 === window.RS_MODULES.minimal && window.RS_MODULES.callSliders()
    }, window.RS_MODULES.checkMinimal()
}(jQuery),
function($, undefined) {
    "use strict";
    var version = "6.2.14";
    jQuery.fn.revolution = jQuery.fn.revolution || {};
    var _R = jQuery.fn.revolution;
    jQuery.extend(!0, _R, {
        checkActions: function(e, i) {
            e === undefined ? moduleEnterLeaveActions(i) : checkActions_intern(e, i)
        },
        delayer: function(e, i, t) {
            _R[e].timeStamps = _R[e].timeStamps === undefined ? {} : _R[e].timeStamps;
            var a = (new Date).getTime(),
                r = _R[e].timeStamps[t] === undefined ? parseInt(i) + 100 : a - _R[e].timeStamps[t],
                o = parseInt(r) > i;
            return o && (_R[e].timeStamps[t] = a), o
        },
        getURLDetails: function(e) {
            (e = e === undefined ? {} : e).url = e.url === undefined ? window.location.href : e.url, e.url = e.url.replace("www", ""), e.protocol = 0 === e.url.indexOf("http://") ? "http://" : 0 === e.url.indexOf("https://") ? "https://" : 0 === e.url.indexOf("//") ? "//" : "relative";
            var i = e.url.replace("https://", "");
            i = i.replace("http://", ""), "relative" === e.protocol && (i = i.replace("//", "")), i = i.split("#"), e.anchor = (e.anchor === undefined || "" == e.anchor || 0 == e.anchor.length) && i.length > 1 ? i[1] : e.anchor === undefined ? "" : e.anchor.replace("#", ""), e.anchor = e.anchor.split("?"), e.queries = i[0].split("?"), e.queries = e.queries.length > 1 ? e.queries[1] : "", e.queries = e.queries.length > 1 ? e.queries[1] : e.anchor.length > 1 ? e.anchor[1] : e.queries, e.anchor = e.anchor[0];
            (i = i[0]).split("/");
            var t = i.split("/");
            return e.host = t[0], t.splice(0, 1), e.path = "/" + t.join("/"), "/" == e.path[e.path.length - 1] && (e.path = e.path.slice(0, -1)), e.origin = "relative" !== e.protocol ? e.protocol + e.host : window.location.origin.replace("www", "") + window.location.pathname, e.hash = ("" !== e.queries && e.queries !== undefined ? "?" + e.queries : "") + ("" !== e.anchor && e.anchor !== undefined ? "#" + e.anchor : ""), e
        },
        scrollToId: function(e) {
            var i = "scrollbelow" === e.action ? (getOffContH(_R[e.id].fullScreenOffsetContainer) || 0) - (parseInt(e.offset, 0) || 0) || 0 : 0 - (parseInt(e.offset, 0) || 0),
                t = "scrollbelow" === e.action ? _R[e.id].c : jQuery("#" + e.anchor),
                a = t.length > 0 ? t.offset().top : 0,
                r = {
                    _y: _R[e.id].modal.useAsModal ? _R[e.id].cpar[0].scrollTop : window.pageYOffset !== document.documentElement.scrollTop ? 0 !== window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop : window.pageYOffset
                };
            a += "scrollbelow" === e.action ? _R[e.id].sbtimeline.fixed ? _R[e.id].cpar.parent().height() + _R[e.id].fullScreenOffsetResult : jQuery(_R[e.id].slides[0]).height() : 0, tpGS.gsap.to(r, e.speed / 1e3, {
                _y: a - i,
                ease: e.ease,
                onUpdate: function() {
                    _R[e.id].modal.useAsModal ? _R[e.id].cpar.scrollTop(r._y) : _R.document.scrollTop(r._y)
                },
                onComplete: function() {
                    e.hash !== undefined && (window.location.hash = e.hash)
                }
            })
        }
    });
    var moduleEnterLeaveActions = function(e) {
            !_R[e].moduleActionsPrepared && _R[e].c[0].getElementsByClassName("rs-on-sh").length > 0 && (_R[e].c.on("tp-mouseenter", function() {
                _R[e].mouseoncontainer = !0;
                var i, t = _R[e].pr_next_key !== undefined ? _R[e].pr_next_key : _R[e].pr_processing_key !== undefined ? _R[e].pr_processing_key : _R[e].pr_active_key !== undefined ? _R[e].pr_active_key : _R[e].pr_next_key;
                if ("none" !== t && t !== undefined) {
                    if ((t = _R.gA(_R[e].slides[t], "key")) !== undefined && _R[e].layers[t])
                        for (i in _R[e].layers[t]) _R[e].layers[t][i].className.indexOf("rs-on-sh") >= 0 && _R.renderLayerAnimation({
                            layer: jQuery(_R[e].layers[t][i]),
                            frame: "frame_1",
                            mode: "trigger",
                            id: e
                        });
                    for (i in _R[e].layers.static) _R[e].layers.static[i].className.indexOf("rs-on-sh") >= 0 && _R.renderLayerAnimation({
                        layer: jQuery(_R[e].layers.static[i]),
                        frame: "frame_1",
                        mode: "trigger",
                        id: e
                    })
                }
            }), _R[e].c.on("tp-mouseleft", function() {
                _R[e].mouseoncontainer = !0;
                var i, t = _R[e].pr_next_key !== undefined ? _R[e].pr_next_key : _R[e].pr_processing_key !== undefined ? _R[e].pr_processing_key : _R[e].pr_active_key !== undefined ? _R[e].pr_active_key : _R[e].pr_next_key;
                if ("none" !== t && t !== undefined) {
                    if ((t = _R.gA(_R[e].slides[t], "key")) !== undefined && _R[e].layers[t])
                        for (i in _R[e].layers[t]) _R[e].layers[t][i].className.indexOf("rs-on-sh") >= 0 && _R.renderLayerAnimation({
                            layer: jQuery(_R[e].layers[t][i]),
                            frame: "frame_999",
                            mode: "trigger",
                            id: e
                        });
                    for (i in _R[e].layers.static) _R[e].layers.static[i].className.indexOf("rs-on-sh") >= 0 && _R.renderLayerAnimation({
                        layer: jQuery(_R[e].layers.static[i]),
                        frame: "frame_999",
                        mode: "trigger",
                        id: e
                    })
                }
            })), _R[e].moduleActionsPrepared = !0
        },
        checkActions_intern = function(layer, id) {
            var actions = _R.gA(layer[0], "actions"),
                _L = layer.data();
            for (var ei in actions = actions.split("||"), layer.addClass("rs-waction"), _L.events = _L.events === undefined ? [] : _L.events, _R[id].lastMouseDown = {}, actions)
                if (actions.hasOwnProperty(ei)) {
                    var event = getEventParams(actions[ei].split(";"));
                    _L.events.push(event), "click" === event.on && layer[0].classList.add("rs-wclickaction"), _R[id].fullscreen_esclistener || "exitfullscreen" != event.action && "togglefullscreen" != event.action || (_R.document.keyup(function(e) {
                        27 == e.keyCode && jQuery("#rs-go-fullscreen").length > 0 && layer.trigger(event.on)
                    }), _R[id].fullscreen_esclistener = !0);
                    var targetlayer = "backgroundvideo" == event.layer ? jQuery("rs-bgvideo") : "firstvideo" == event.layer ? jQuery("rs-slide").find(".rs-layer-video") : jQuery("#" + event.layer);
                    switch (-1 != jQuery.inArray(event.action, ["toggleslider", "toggle_mute_video", "toggle_global_mute_video", "togglefullscreen"]) && (_L._togglelisteners = !0), event.action) {
                        case "togglevideo":
                            jQuery.each(targetlayer, function() {
                                updateToggleByList(jQuery(this), "videotoggledby", layer[0].id)
                            });
                            break;
                        case "togglelayer":
                            jQuery.each(targetlayer, function() {
                                updateToggleByList(jQuery(this), "layertoggledby", layer[0].id), jQuery(this).data("triggered_startstatus", event.togglestate)
                            });
                            break;
                        case "toggle_global_mute_video":
                        case "toggle_mute_video":
                            jQuery.each(targetlayer, function() {
                                updateToggleByList(jQuery(this), "videomutetoggledby", layer[0].id)
                            });
                            break;
                        case "toggleslider":
                            _R[id].slidertoggledby == undefined && (_R[id].slidertoggledby = []), _R[id].slidertoggledby.push(layer[0].id);
                            break;
                        case "togglefullscreen":
                            _R[id].fullscreentoggledby == undefined && (_R[id].fullscreentoggledby = []), _R[id].fullscreentoggledby.push(layer[0].id)
                    }
                }
            _R[id].actionsPrepared = !0, layer.on("mousedown", function(e) {
                e.touches && (e = e.touches[0]), _R[id].lastMouseDown.pageX = e.pageX, _R[id].lastMouseDown.pageY = e.pageY
            }), layer.on("click mouseenter mouseleave", function(e) {
                if ("click" === e.type) {
                    var evt = e.touches ? e.touches[0] : e;
                    if (Math.abs(evt.pageX - _R[id].lastMouseDown.pageX) > 5 || Math.abs(evt.pageY - _R[id].lastMouseDown.pageY) > 5) return
                }
                for (var i in _L.events)
                    if (_L.events.hasOwnProperty(i) && _L.events[i].on === e.type) {
                        var event = _L.events[i];
                        if (!(event.repeat !== undefined && event.repeat > 0) || _R.delayer(id, 1e3 * event.repeat, _L.c[0].id + "_" + event.action)) {
                            if ("click" === event.on && layer.hasClass("tp-temporarydisabled")) return !1;
                            var targetlayer = "backgroundvideo" == event.layer ? jQuery(_R[id].slides[_R[id].pr_active_key]).find("rs-sbg-wrap rs-bgvideo") : "firstvideo" == event.layer ? jQuery(_R[id].slides[_R[id].pr_active_key]).find(".rs-layer-video").first() : jQuery("#" + event.layer),
                                tex = targetlayer.length > 0;
                            switch (event.action) {
                                case "menulink":
                                    var linkto = _R.getURLDetails({
                                            url: event.url,
                                            anchor: event.anchor
                                        }),
                                        linkfrom = _R.getURLDetails();
                                    linkto.host == linkfrom.host && linkto.path == linkfrom.path && "_self" === event.target ? _R.scrollToId({
                                        id: id,
                                        offset: event.offset,
                                        action: event.action,
                                        anchor: event.anchor,
                                        hash: linkto.hash,
                                        speed: event.speed,
                                        ease: event.ease
                                    }) : "_self" === event.target ? window.location = linkto.url + (linkto.anchor !== undefined && "" !== linkto.anchor ? "#" + linkto.anchor : "") : window.open(linkto.url + (linkto.anchor !== undefined && "" !== linkto.anchor ? "#" + linkto.anchor : "")), e.preventDefault();
                                    break;
                                case "nextframe":
                                case "prevframe":
                                case "gotoframe":
                                case "togglelayer":
                                case "toggleframes":
                                case "startlayer":
                                case "stoplayer":
                                    if (targetlayer[0] === undefined) continue;
                                    var _ = _R[id]._L[targetlayer[0].id],
                                        frame = event.frame,
                                        tou = "triggerdelay";
                                    if ("click" === e.type && _.clicked_time_stamp !== undefined && (new Date).getTime() - _.clicked_time_stamp < 300) return;
                                    if ("mouseenter" === e.type && _.mouseentered_time_stamp !== undefined && (new Date).getTime() - _.mouseentered_time_stamp < 300) return;
                                    if (clearTimeout(_.triggerdelayIn), clearTimeout(_.triggerdelayOut), clearTimeout(_.triggerdelay), "click" === e.type && (_.clicked_time_stamp = (new Date).getTime()), "mouseenter" === e.type && (_.mouseentered_time_stamp = (new Date).getTime()), "mouseleave" === e.type && (_.mouseentered_time_stamp = undefined), "nextframe" === event.action || "prevframe" === event.action) {
                                        _.forda = _.forda === undefined ? getFordWithAction(_) : _.forda;
                                        var inx = jQuery.inArray(_.currentframe, _.ford);
                                        for ("nextframe" === event.action && inx++, "prevframe" === event.action && inx--;
                                            "skip" !== _.forda[inx] && inx > 0 && inx < _.forda.length - 1;) "nextframe" === event.action && inx++, "prevframe" === event.action && inx--, inx = Math.min(Math.max(0, inx), _.forda.length - 1);
                                        frame = _.ford[inx]
                                    }
                                    jQuery.inArray(event.action, ["toggleframes", "togglelayer", "startlayer", "stoplayer"]) >= 0 && (_.triggeredstate = "startlayer" === event.action || "togglelayer" === event.action && "frame_1" !== _.currentframe || "toggleframes" === event.action && _.currentframe !== event.frameN, "togglelayer" === event.action && !0 === _.triggeredstate && _.currentframe !== undefined && "frame_999" !== _.currentframe && (_.triggeredstate = !1), frame = _.triggeredstate ? "toggleframes" === event.action ? event.frameN : "frame_1" : "toggleframes" === event.action ? event.frameM : "frame_999", tou = _.triggeredstate ? "triggerdelayIn" : "triggerdelayOut", _.triggeredstate ? _R.toggleState(_.layertoggledby) : (_R.stopVideo && _R.stopVideo(targetlayer, id), _R.unToggleState(_.layertoggledby)));
                                    var pars = {
                                        layer: targetlayer,
                                        frame: frame,
                                        mode: "trigger",
                                        id: id
                                    };
                                    !0 === event.children && (pars.updateChildren = !0, pars.fastforward = !0), _R.renderLayerAnimation && (clearTimeout(_[tou]), _[tou] = setTimeout(function(e) {
                                        _R.renderLayerAnimation(e)
                                    }, 1e3 * event.delay, pars));
                                    break;
                                case "playvideo":
                                    tex && _R.playVideo(targetlayer, id);
                                    break;
                                case "stopvideo":
                                    tex && _R.stopVideo && _R.stopVideo(targetlayer, id);
                                    break;
                                case "togglevideo":
                                    tex && (_R.isVideoPlaying(targetlayer, id) ? _R.stopVideo && _R.stopVideo(targetlayer, id) : _R.playVideo(targetlayer, id));
                                    break;
                                case "mutevideo":
                                    tex && _R.Mute(targetlayer, id, !0);
                                    break;
                                case "unmutevideo":
                                    tex && _R.Mute && _R.Mute(targetlayer, id, !1);
                                    break;
                                case "toggle_mute_video":
                                    tex && (_R.Mute(targetlayer, id) ? _R.Mute(targetlayer, id, !1) : _R.Mute && _R.Mute(targetlayer, id, !0));
                                    break;
                                case "toggle_global_mute_video":
                                    var pvl = _R[id].playingvideos != undefined && _R[id].playingvideos.length > 0;
                                    pvl && (_R[id].globalmute ? jQuery.each(_R[id].playingvideos, function(e, i) {
                                        _R.Mute && _R.Mute(i, id, !1)
                                    }) : jQuery.each(_R[id].playingvideos, function(e, i) {
                                        _R.Mute && _R.Mute(i, id, !0)
                                    })), _R[id].globalmute = !_R[id].globalmute;
                                    break;
                                default:
                                    tpGS.gsap.delayedCall(event.delay, function(targetlayer, id, event, layer) {
                                        switch (event.action) {
                                            case "openmodal":
                                                _R.openModalAPI(event.modal, event.modalslide === undefined ? 0 : event.modalslide, _R[id].ajaxUrl, !0, id, event);
                                                break;
                                            case "closemodal":
                                                _R.revModal(id, {
                                                    mode: "close"
                                                });
                                                break;
                                            case "callback":
                                                eval(event.callback);
                                                break;
                                            case "simplelink":
                                                window.open(event.url, event.target);
                                                break;
                                            case "simulateclick":
                                                targetlayer.length > 0 && targetlayer.trigger("click");
                                                break;
                                            case "toggleclass":
                                                targetlayer.length > 0 && targetlayer.toggleClass(event.classname);
                                                break;
                                            case "scrollbelow":
                                            case "scrollto":
                                                "scrollbelow" === event.action && layer.addClass("tp-scrollbelowslider"), _R.scrollToId({
                                                    id: id,
                                                    offset: event.offset,
                                                    action: event.action,
                                                    anchor: event.id,
                                                    speed: event.speed,
                                                    ease: event.ease
                                                });
                                                break;
                                            case "jumptoslide":
                                                switch (event.slide.toLowerCase()) {
                                                    case "rs-random":
                                                        var ts = Math.min(Math.max(0, Math.ceil(Math.random() * _R[id].realslideamount) - 1));
                                                        ts = _R[id].activeRSSlide == ts ? ts > 0 ? ts - 1 : ts + 1 : ts, _R.callingNewSlide(id, _R[id].slides[ts].dataset.key, "carousel" === _R[id].sliderType);
                                                        break;
                                                    case "+1":
                                                    case "next":
                                                    case "rs-next":
                                                        _R[id].sc_indicator = "arrow", _R[id].sc_indicator_dir = 0, _R.callingNewSlide(id, 1, "carousel" === _R[id].sliderType);
                                                        break;
                                                    case "rs-previous":
                                                    case "rs-prev":
                                                    case "previous":
                                                    case "prev":
                                                    case "-1":
                                                        _R[id].sc_indicator = "arrow", _R[id].sc_indicator_dir = 1, _R.callingNewSlide(id, -1, "carousel" === _R[id].sliderType);
                                                        break;
                                                    case "first":
                                                    case "rs-first":
                                                        _R[id].sc_indicator = "arrow", _R[id].sc_indicator_dir = 1, _R.callingNewSlide(id, 0, "carousel" === _R[id].sliderType);
                                                        break;
                                                    case "last":
                                                    case "rs-last":
                                                        _R[id].sc_indicator = "arrow", _R[id].sc_indicator_dir = 0, _R.callingNewSlide(id, _R[id].slideamount - 1, "carousel" === _R[id].sliderType);
                                                        break;
                                                    default:
                                                        var ts = _R.isNumeric(event.slide) ? parseInt(event.slide, 0) : event.slide;
                                                        _R.callingNewSlide(id, ts, "carousel" === _R[id].sliderType)
                                                }
                                                break;
                                            case "toggleslider":
                                                _R[id].noloopanymore = 0, "playing" == _R[id].sliderstatus ? (_R[id].c.revpause(), _R[id].forcepaused = !0, _R.unToggleState(_R[id].slidertoggledby)) : (_R[id].forcepaused = !1, _R[id].c.revresume(), _R.toggleState(_R[id].slidertoggledby));
                                                break;
                                            case "pauseslider":
                                                _R[id].c.revpause(), _R.unToggleState(_R[id].slidertoggledby);
                                                break;
                                            case "playslider":
                                                _R[id].noloopanymore = 0, _R[id].c.revresume(), _R.toggleState(_R[id].slidertoggledby);
                                                break;
                                            case "gofullscreen":
                                            case "exitfullscreen":
                                            case "togglefullscreen":
                                                var gf;
                                                jQuery(".rs-go-fullscreen").length > 0 && ("togglefullscreen" == event.action || "exitfullscreen" == event.action) ? (jQuery(".rs-go-fullscreen").removeClass("rs-go-fullscreen"), gf = _R[id].c.closest("rs-fullwidth-wrap").length > 0 ? _R[id].c.closest("rs-fullwidth-wrap") : _R[id].c.closest("rs-module-wrap"), _R[id].minHeight = _R[id].oldminheight, _R[id].infullscreenmode = !1, _R[id].c.revredraw(), _R[id].c.revredraw(), jQuery(window).trigger("resize"), _R.unToggleState(_R[id].fullscreentoggledby)) : 0 != jQuery(".rs-go-fullscreen").length || "togglefullscreen" != event.action && "gofullscreen" != event.action || (gf = _R[id].c.closest("rs-fullwidth-wrap").length > 0 ? _R[id].c.closest("rs-fullwidth-wrap") : _R[id].c.closest("rs-module-wrap"), gf.addClass("rs-go-fullscreen"), _R[id].oldminheight = _R[id].minHeight, _R[id].minHeight = _R.getWinH(id), _R[id].infullscreenmode = !0, jQuery(window).trigger("resize"), _R.toggleState(_R[id].fullscreentoggledby), _R[id].c.revredraw());
                                                break;
                                            default:
                                                _R[id].c.trigger("layeraction", [event.action, layer, event])
                                        }
                                    }, [targetlayer, id, event, layer])
                            }
                        }
                    }
            })
        };

    function getFordWithAction(e) {
        var i = [];
        for (var t in e.ford) e.frames[e.ford[t]].timeline.waitoncall ? i.push(e.ford[t]) : i.push("skip");
        return i
    }

    function updateToggleByList(e, i, t) {
        var a = e.data(i);
        a === undefined && (a = []), a.push(t), e.data(i, a)
    }

    function getEventParams(e) {
        var i = {
            on: "click",
            delay: 0,
            ease: "power2.out",
            speed: 400
        };
        for (var t in e)
            if (e.hasOwnProperty(t)) {
                var a = e[t].split(":");
                switch (a.length > 2 && "call" === a[0] && (a[1] = a.join(":").replace(a[0] + ":", "")), a[0]) {
                    case "modal":
                        i.modal = a[1];
                        break;
                    case "ms":
                        i.modalslide = a[1];
                        break;
                    case "m":
                        i.frameM = a[1];
                        break;
                    case "n":
                        i.frameN = a[1];
                        break;
                    case "o":
                        i.on = "click" === a[1] || "c" === a[1] ? "click" : "ml" === a[1] || "mouseleave" === a[1] ? "mouseleave" : "mouseenter" === a[1] || "me" === a[1] ? "mouseenter" : a[1];
                        break;
                    case "d":
                        i.delay = parseInt(a[1], 0) / 1e3, i.delay = "NaN" === i.delay || isNaN(i.delay) ? 0 : i.delay;
                        break;
                    case "rd":
                        i.repeat = parseInt(a[1], 0) / 1e3, i.repeat = "NaN" === i.repeat || isNaN(i.repeat) ? 0 : i.repeat;
                        break;
                    case "a":
                        i.action = a[1];
                        break;
                    case "f":
                        i.frame = a[1];
                        break;
                    case "slide":
                        i.slide = a[1];
                        break;
                    case "layer":
                        i.layer = a[1];
                        break;
                    case "sp":
                        i.speed = parseInt(a[1], 0);
                        break;
                    case "e":
                        i.ease = a[1];
                        break;
                    case "ls":
                        i.togglestate = a[1];
                        break;
                    case "offset":
                        i.offset = a[1];
                        break;
                    case "call":
                        i.callback = a[1];
                        break;
                    case "url":
                        i.url = "";
                        for (var r = 1; r < a.length; r++) i.url += a[r] + (r === a.length - 1 ? "" : ":");
                        break;
                    case "target":
                        i.target = a[1];
                        break;
                    case "class":
                        i.classname = a[1];
                        break;
                    case "ch":
                        i.children = "true" == a[1] || 1 == a[1] || "t" == a[1];
                        break;
                    default:
                        a[0].length > 0 && "" !== a[0] && (i[a[0]] = a[1])
                }
            }
        return i
    }
    var getOffContH = function(e) {
        if (e == undefined) return 0;
        if (e.split(",").length > 1) {
            var i = e.split(","),
                t = 0;
            return i && jQuery.each(i, function(e, i) {
                jQuery(i).length > 0 && (t += jQuery(i).outerHeight(!0))
            }), t
        }
        return jQuery(e).height()
    };
    window.RS_MODULES = window.RS_MODULES || {}, window.RS_MODULES.actions = {
        loaded: !0,
        version: version
    }, window.RS_MODULES.checkMinimal && window.RS_MODULES.checkMinimal()
}(jQuery),
function(e) {
    "use strict";
    jQuery.fn.revolution = jQuery.fn.revolution || {};
    var i = jQuery.fn.revolution;
    jQuery.extend(!0, i, {
        prepareCarousel: function(e, t, a) {
            if (void 0 !== e) {
                var o = i[e].carousel;
                o.slidepositions = void 0 === o.slidepositions ? [] : o.slidepositions, o.slideFakePositions = void 0 === o.slideFakePositions ? [] : o.slideFakePositions, t = o.lastdirection = r(t, o.lastdirection), i.setCarouselDefaults(e), void 0 === o.slidepositions[0] && (o.slideAnims = [], i.organiseCarousel(e, "right", !0, !1, !1), o.focused = 0, o.keepFocusedFirst = !0), o.slide_offset = void 0 !== o.slide_offset && i.isNumeric(o.slide_offset) ? o.slide_offset : 0, o.swipeTo = o.slide_offset + s(e), o.swipeToDistance = Math.abs(o.slide_offset) + Math.abs(s(e)), void 0 !== o.swipeTo && i.isNumeric(o.swipeTo) ? void 0 !== a ? i.swipeAnimate({
                    id: e,
                    to: o.swipeTo,
                    distance: o.swipeToDistance,
                    direction: t,
                    fix: !0,
                    speed: a
                }) : i.swipeAnimate({
                    id: e,
                    to: o.swipeTo,
                    distance: o.swipeToDistance,
                    direction: t,
                    fix: !0
                }) : i.swipeAnimate({
                    id: e,
                    to: 0,
                    direction: t,
                    speed: 0
                })
            }
        },
        carouselToEvalPosition: function(e, a, o) {
            var s = i[e].carousel;
            if (s.justify) s.focused = void 0 === s.focused ? 0 : s.focused, s.slidepositions[s.focused] = void 0 === s.slidepositions[s.focused] ? 0 : s.slidepositions[s.focused], s.slide_offset_target = t(e, s.focused);
            else {
                a = s.lastdirection = r(a, s.lastdirection);
                var n = "center" === s.horizontal_align ? (s.wrapwidth / 2 - s.slide_width / 2 - s.slide_offset) / s.slide_width : (0 - s.slide_offset) / s.slide_width,
                    d = n % i[e].slideamount,
                    l = d - Math.floor(d),
                    c = -1 * (Math.ceil(d) - d),
                    p = -1 * (Math.floor(d) - d),
                    g = l * s.slide_width,
                    u = g >= 20 && "left" === a ? 1 : g >= s.slide_width - 20 && "right" === a ? 2 : g < 20 && "left" === a ? 3 : g < s.slide_width - 20 && "right" === a ? 4 : 5,
                    h = 1 === u || 2 === u ? c : 3 === u || 4 === u ? p : 0;
                s.slide_offset_target = (s.infinity ? h : d < 0 ? d : n > i[e].slideamount - 1 ? n - (i[e].slideamount - 1) : h) * s.slide_width
            }
            return s.slide_offset_target !== s.slide_offset_targetCACHE && !0 !== o && (0 !== Math.abs(s.slide_offset_target) ? i.animateCarousel(e, a, !0) : i.organiseCarousel(e, a), s.slide_offset_targetCACHE = s.slide_offset_target), s.slide_offset_target
        },
        loadVisibleCarouselItems: function(e, t) {
            var a = [];
            i[e].carousel.focused = parseInt(i[e].carousel.focused, 0), i[e].carousel.focused = i.isNumeric(i[e].carousel.focused) ? i[e].carousel.focused : 0;
            for (var r = 0; r < Math.ceil(i[e].carousel.maxVisibleItems / 2); r++) {
                var o = "right" === i[e].carousel.horizontal_align ? i[e].carousel.focused - r : i[e].carousel.focused + r,
                    s = "center" === i[e].carousel.horizontal_align ? i[e].carousel.focused - r : "left" === i[e].carousel.horizontal_align ? i[e].carousel.maxVisibleItems + o - 1 : o - i[e].carousel.maxVisibleItems + 1;
                o = o >= i[e].slideamount ? o - i[e].slideamount + 0 : o, s = s >= i[e].slideamount ? s - i[e].slideamount + 0 : s, o = o < 0 ? i[e].slideamount + o : o, s = s < 0 ? i[e].slideamount + s : s, a.push(i[e].slides[o]), o !== s && a.push(i[e].slides[s])
            }
            return t && (i.loadImages(a, e, 1), i.waitForCurrentImages(a, e)), a
        },
        organiseCarousel: function(e, t, a, r, o) {
            Math.round(1e5 * Math.random());
            var s = i[e].carousel,
                n = "center" === s.horizontal_align ? 2 : 1,
                d = Math.ceil(s.maxVisibleItems / n),
                l = "center" === s.horizontal_align ? s.wrapwidth / 2 + s.maxwidth / 2 : s.maxwidth - s.slide_width,
                c = "center" === s.horizontal_align ? s.wrapwidth / 2 - s.maxwidth / 2 : 0 - s.slide_width,
                p = 0,
                g = 0,
                u = 0;
            if (s.ocfirsttun = !0, t = s.slide_offset < s.cached_slide_offset ? "left" : "right", s.cached_slide_offset = s.slide_offset, !0 !== s.justify && "center" === s.horizontal_align) {
                var h = 2 * (s.windhalf - s.wrapoffset) + s.slide_width;
                h >= s.maxwidth && ("left" === t && (l = 2 * s.windhalf, c = 0 - (s.slide_width - (h - s.maxwidth))), "right" === t && (l = 2 * s.windhalf - (h - s.maxwidth), c = 0 - s.slide_width))
            }
            for (var m = 2 * s.windhalf, v = 0, f = -1, y = 0; y < s.len; y++) !0 === s.justify ? (p += y > 0 ? s.slide_widths[y - 1] + s.space : s.slide_offset, s.wrapwidth >= s.maxwidth && "center" !== s.horizontal_align && (s.slideFakePositions[y] = p - s.slide_offset), c = 0 - s.slide_widths[y], l = s.maxwidth - s.slide_widths[y], s.inneroffset = 0) : (p = y * s.slide_width + s.slide_offset, s.wrapwidth >= s.maxwidth && "left" === s.horizontal_align && (s.slideFakePositions[y] = y * s.slide_width), s.wrapwidth >= s.maxwidth && "right" === s.horizontal_align && (s.slideFakePositions[y] = s.wrapwidth - (y + 1) * s.slide_width)), u = g = p, s.infinity && (g = g >= l - s.inneroffset ? g - s.maxwidth : g <= c - s.inneroffset ? g + s.maxwidth : g), m > g && (m = g, y), v < g && (v = g, f = y), s.slidepositions[y] = u > s.maxwidth + l ? g - s.maxwidth : u < c - s.maxwidth ? g + s.maxwidth : g;
            s.infinity && m > 0 && v > s.wrapwidth && (s.slidepositions[f] -= s.maxwidth);
            var w = 999,
                b = 0,
                _ = (i[e].module.width, !1),
                S = "right" === s.horizontal_align ? 0 : s.wrapwidth;
            if (i[e].slides)
                for (y = 0; y < i[e].slides.length; y++) {
                    var x = {
                            left: (g = s.slidepositions[y]) + s.inneroffset,
                            width: !0 === s.justify ? s.slide_widths[y] : s.slide_width,
                            x: 0
                        },
                        k = 0;
                    if (void 0 === s.slideAnims[y] && (x.transformOrigin = "50% " + s.vertical_align, x.scale = 1, x.force3D = !0, x.transformStyle = "3D" != i[e].parallax.type && "3d" != i[e].parallax.type ? "flat" : "preserve-3d"), s.justify) x.autoAlpha = 1, s.wrapwidth >= s.maxwidth && "center" !== s.horizontal_align || ("center" === s.horizontal_align && s.slidepositions[y] < s.windhalf && s.slidepositions[y] + s.slide_widths[y] > s.windhalf ? s.focused = y : "left" === s.horizontal_align && s.slidepositions[y] >= -25 && s.slidepositions[y] < s.windhalf && (!_ || s.slidepositions[y] < S) ? (s.focused = y, _ = !0, S = s.slidepositions[y]) : "right" === s.horizontal_align && s.slidepositions[y] + s.slide_widths[y] <= s.wrapwidth + 25 && (s.slide_widths[y] < s.windhalf && s.slidepositions[y] > s.windhalf || s.slidepositions[y] > s.wrapwidth - s.slide_widths[y]) && (!_ || s.slidepositions[y] > S) && (s.focused = y, _ = !0, S = s.slidepositions[y]), s.focused = s.focused >= s.len ? s.infinity ? 0 : s.len - 1 : s.focused < 0 ? s.infinity ? s.len - 1 : 0 : s.focused);
                    else {
                        k = "center" === s.horizontal_align ? (Math.abs(s.wrapwidth / 2) - (x.left + s.slide_width / 2)) / s.slide_width : (s.inneroffset - x.left) / s.slide_width, (Math.abs(k) < w || 0 === k) && (w = Math.abs(k), s.focused = y), void 0 !== s.minScale && s.minScale > 0 && (s.vary_scale ? x.scale = 1 - Math.abs((1 - s.minScale) / d * k) : x.scale = k >= 1 || k <= -1 ? s.minScale : s.minScale + (1 - s.minScale) * (1 - Math.abs(k)), b = k * (x.width - x.width * x.scale) / 2), s.fadeout && (s.vary_fade ? x.autoAlpha = 1 - Math.abs(s.maxOpacity / d * k) : x.autoAlpha = k >= 1 || k <= -1 ? s.maxOpacity : s.maxOpacity + (1 - s.maxOpacity) * (1 - Math.abs(k)));
                        var L = Math.ceil(s.maxVisibleItems / n) - Math.abs(k);
                        x.autoAlpha = void 0 === x.autoAlpha ? 1 : x.autoAlpha, x.autoAlpha = Math.max(0, Math.min(L, x.autoAlpha)), void 0 !== s.maxRotation && 0 != Math.abs(s.maxRotation) && (s.vary_rotation ? (x.rotationY = Math.abs(s.maxRotation) - Math.abs((1 - Math.abs(1 / d * k)) * s.maxRotation), x.autoAlpha = Math.abs(x.rotationY) > 90 ? 0 : x.autoAlpha) : x.rotationY = k >= 1 || k <= -1 ? s.maxRotation : Math.abs(k) * s.maxRotation, x.rotationY = k < 0 ? -1 * x.rotationY : x.rotationY, i.isSafari11() && (x.z = 0 !== k ? 0 - Math.abs(x.rotationY) : 0)), x.x = Math.floor(-1 * s.space * k * (s.offsetScale ? x.scale : 1)), void 0 !== x.scale && (x.x = x.x + b)
                    }
                    x.x += s.wrapwidth >= s.maxwidth && ("left" === s.horizontal_align || "right" === s.horizontal_align) ? s.slideFakePositions[y] : Math.floor(x.left), delete x.left, x.zIndex = s.justify ? 95 : Math.round(100 - Math.abs(5 * k)), !0 !== o && (void 0 !== s.slideAnims[y] && (x.width === s.slideAnims[y].width && delete x.width, x.x === s.slideAnims[y].x && delete x.x, x.autoAlpha === s.slideAnims[y].autoAlpha && delete x.autoAlpha, x.scale === s.slideAnims[y].scale && delete x.scale, x.zIndex === s.slideAnims[y].zIndex && delete x.zIndex, x.rotationY === s.slideAnims[y].rotationY && delete x.rotationY), tpGS.gsap.set(i[e].slides[y], x), s.slideAnims[y] = jQuery.extend(!0, s.slideAnims[y], x))
                }
            if (i.loadVisibleCarouselItems(e, !0), r && !0 !== o) {
                if (s.focused = void 0 === s.focused ? 0 : s.focused, s.oldfocused = void 0 === s.oldfocused ? 0 : s.oldfocused, i[e].pr_next_key = s.focused, s.focused !== s.oldfocused)
                    for (var R in void 0 !== s.oldfocused && i.removeTheLayers(jQuery(i[e].slides[s.oldfocused]), e), i.animateTheLayers({
                            slide: s.focused,
                            id: e,
                            mode: "start"
                        }), i.animateTheLayers({
                            slide: "individual",
                            id: e,
                            mode: i[e].carousel.allLayersStarted ? "rebuild" : "start"
                        }), i[e].sbgs) i[e].sbgs.hasOwnProperty(R) && void 0 !== i[e].sbgs[R].bgvid && 0 !== i[e].sbgs[R].bgvid.length && ("" + i[e].sbgs[R].skeyindex == "" + s.focused ? i.playBGVideo(e, i.gA(i[e].pr_next_slide[0], "key")) : i.stopBGVideo(e, i[e].sbgs[R].key));
                s.oldfocused = s.focused, i[e].c.trigger("revolution.nextslide.waiting")
            }
        },
        swipeAnimate: function(e) {
            var t = i[e.id].carousel,
                r = {
                    from: t.slide_offset,
                    to: e.to
                },
                o = void 0 === e.speed ? .5 : e.speed;
            if (t.distance = void 0 !== e.distance ? e.distance : e.to, void 0 !== t.positionanim && t.positionanim.pause(), e.fix) {
                if (!1 !== t.snap) {
                    var s = t.slide_offset,
                        n = "end" === e.phase ? t.focusedBeforeSwipe : t.focused;
                    t.slide_offset = e.to, i.organiseCarousel(e.id, e.direction, !0, !1, !1), Math.abs(t.swipeDistance) > 40 && n == t.focused && (t.focused = "right" === e.direction ? t.focused - 1 : t.focused + 1, t.focused = t.focused >= t.len ? t.infinity ? 0 : t.len - 1 : t.focused < 0 ? t.infinity ? t.len - 1 : 0 : t.focused), r.to += i.carouselToEvalPosition(e.id, e.direction, !0), t.slide_offset = s, i.organiseCarousel(e.id, e.direction, !0, !1, !1), t.keepFocusedFirst && (t.keepFocusedFirst = !1, t.focused = 0)
                } else !0 !== t.infinity ? (r.to > 0 && (r.to = 0), r.to < t.wrapwidth - t.maxwidth && (r.to = t.wrapwidth - t.maxwidth)) : "end" === e.phase ? t.dragModeJustEnded = !0 : !0 !== t.dragModeJustEnded ? r.to += i.carouselToEvalPosition(e.id, e.direction, !0) : t.dragModeJustEnded = !1;
                0 !== (o = t.speed / 1e3 * a(Math.abs(Math.abs(r.from) - Math.abs(t.distance)) / t.wrapwidth)) && o < .1 && Math.abs(r.to) > 25 && (o = .3)
            }
            t.swipeDistance = 0, o = !0 !== t.firstSwipedDone ? 0 : o, t.firstSwipedDone = !0, t.positionanim = tpGS.gsap.to(r, o, {
                from: r.to,
                onUpdate: function() {
                    t.slide_offset = r.from % t.maxwidth, i.organiseCarousel(e.id, e.direction, !0 !== e.fix, !0 !== e.fix), t.slide_offset = r.from
                },
                onComplete: function() {
                    t.slide_offset = r.from % t.maxwidth, "carousel" !== i[e.id].sliderType || t.fadein || (tpGS.gsap.to(i[e.id].canvas, 1, {
                        scale: 1,
                        opacity: 1
                    }), t.fadein = !0), t.lastNotSimplifedSlideOffset = t.slide_offset, t.justDragged = !1, e.fix && (t.focusedAfterAnimation = t.focused, e.newSlide && t.focusedBeforeSwipe !== t.focused && i.callingNewSlide(e.id, jQuery(i[e.id].slides[t.focused]).data("key"), !0), i.organiseCarousel(e.id, e.direction, !0, !0), i[e.id].c.trigger("revolution.slide.carouselchange", {
                        slider: e.id,
                        slideIndex: parseInt(i[e.id].pr_active_key, 0) + 1,
                        slideLIIndex: i[e.id].pr_active_key,
                        slide: i[e.id].pr_next_slide,
                        currentslide: i[e.id].pr_next_slide,
                        prevSlideIndex: void 0 !== i[e.id].pr_lastshown_key && parseInt(i[e.id].pr_lastshown_key, 0) + 1,
                        prevSlideLIIndex: void 0 !== i[e.id].pr_lastshown_key && parseInt(i[e.id].pr_lastshown_key, 0),
                        prevSlide: void 0 !== i[e.id].pr_lastshown_key && i[e.id].slides[i[e.id].pr_lastshown_key]
                    }))
                },
                ease: e.easing ? e.easing : t.easing
            })
        },
        defineCarouselElements: function(e) {
            var t = i[e].carousel;
            t.infbackup = t.infinity, t.maxVisiblebackup = t.maxVisibleItems, t.slide_offset = "none", t.slide_offset = 0, t.cached_slide_offset = 0, t.wrap = jQuery(i[e].canvas[0].parentNode), 0 !== t.maxRotation && ("3D" !== i[e].parallax.type && "3d" !== i[e].parallax.type || tpGS.gsap.set(t.wrap, {
                perspective: "1600px",
                transformStyle: "preserve-3d"
            }))
        },
        setCarouselDefaults: function(e, t) {
            var a = i[e].carousel;
            if (a.slide_width = !0 !== a.stretch ? i[e].gridwidth[i[e].level] * (0 === i[e].CM.w ? 1 : i[e].CM.w) : i[e].canv.width, a.slide_height = !0 !== a.stretch ? i[e].infullscreenmode ? i.getWinH(e) - i.getFullscreenOffsets(e) : i[e].gridheight[i[e].level] * (0 === i[e].CM.w ? 1 : i[e].CM.w) : i[e].canv.height, a.ratio = a.slide_width / a.slide_height, a.len = i[e].slides.length, a.maxwidth = i[e].slideamount * a.slide_width, 1 != a.justify && a.maxVisiblebackup > a.len && (a.maxVisibleItems = a.len % 2 ? a.len : a.len + 1), a.wrapwidth = a.maxVisibleItems * a.slide_width + (a.maxVisibleItems - 1) * a.space, a.wrapwidth = "auto" != i[e].sliderLayout ? a.wrapwidth > i[e].canv.width ? i[e].canv.width : a.wrapwidth : a.wrapwidth > i[e].module.width ? i[e].module.width : a.wrapwidth, !0 === a.justify) {
                a.slide_height = "fullscreen" === i[e].sliderLayout ? i[e].module.height : i[e].gridheight[i[e].level], a.slide_widths = [], a.slide_widthsCache = void 0 === a.slide_widthsCache ? [] : a.slide_widthsCache, a.maxwidth = 0;
                for (var r = 0; r < a.len; r++)
                    if (i[e].slides.hasOwnProperty(r)) {
                        var o = i.gA(i[e].slides[r], "iratio");
                        o = void 0 === o || 0 === o || null === o ? a.ratio : o, a.slide_widths[r] = Math.round(a.slide_height * o), !1 !== a.justifyMaxWidth && (a.slide_widths[r] = Math.min(a.wrapwidth, a.slide_widths[r])), a.slide_widths[r] !== a.slide_widthsCache[r] && (a.slide_widthsCache[r] = a.slide_widths[r], !0 !== t && tpGS.gsap.set(i[e].slides[r], {
                            width: a.slide_widths[r]
                        })), a.maxwidth += a.slide_widths[r] + a.space
                    }
            }
            if (a.infinity = !(a.wrapwidth >= a.maxwidth) && a.infbackup, !0 !== a.quickmode) {
                a.wrapoffset = "center" === a.horizontal_align ? (i[e].canv.width - i[e].outNavDims.right - i[e].outNavDims.left - a.wrapwidth) / 2 : 0, a.wrapoffset = "auto" != i[e].sliderLayout && i[e].outernav ? 0 : a.wrapoffset < i[e].outNavDims.left ? i[e].outNavDims.left : a.wrapoffset;
                var s = "3D" == i[e].parallax.type || "3d" == i[e].parallax.type ? "visible" : "hidden",
                    n = "right" === a.horizontal_align ? {
                        left: "auto",
                        right: a.wrapoffset + "px",
                        width: a.wrapwidth,
                        overflow: s
                    } : "left" === a.horizontal_align || a.wrapwidth < i.winW ? {
                        right: "auto",
                        left: a.wrapoffset + "px",
                        width: a.wrapwidth,
                        overflow: s
                    } : {
                        right: "auto",
                        left: "auto",
                        width: "100%",
                        overflow: s
                    };
                void 0 !== a.cacheWrapObj && n.left === a.cacheWrapObj.left && n.right === a.cacheWrapObj.right && n.width === a.cacheWrapObj.width || (window.requestAnimationFrame(function() {
                    tpGS.gsap.set(a.wrap, n), i[e].carousel.wrapoffset > 0 && tpGS.gsap.set(i[e].canvas, {
                        left: 0
                    })
                }), a.cacheWrapObj = jQuery.extend(!0, {}, n)), a.inneroffset = "right" === a.horizontal_align ? a.wrapwidth - a.slide_width : 0, a.windhalf = "auto" === i[e].sliderLayout ? i[e].module.width / 2 : i.winW / 2
            }
        }
    });
    var t = function(e, t) {
            var a = i[e].carousel;
            return "center" === a.horizontal_align ? a.windhalf - a.slide_widths[t] / 2 - a.slidepositions[t] : "left" === a.horizontal_align ? 0 - a.slidepositions[t] : a.wrapwidth - a.slide_widths[t] - a.slidepositions[t]
        },
        a = function(e) {
            return e < 1 ? Math.sqrt(1 - (e -= 1) * e) : Math.sqrt(e)
        },
        r = function(e, i) {
            return null === e || jQuery.isEmptyObject(e) ? i : void 0 === e ? "right" : e
        },
        o = function(e, i) {
            return Math.abs(e) > Math.abs(i) ? e > 0 ? e - Math.abs(Math.floor(e / i) * i) : e + Math.abs(Math.floor(e / i) * i) : e
        },
        s = function(e) {
            var t, a, r, s, n, d = 0,
                l = i[e].carousel;
            if (void 0 !== l.positionanim && l.positionanim.pause(), l.justify) "center" === l.horizontal_align ? d = l.windhalf - l.slide_widths[l.focused] / 2 - l.slidepositions[l.focused] : "left" === l.horizontal_align ? d = 0 - l.slidepositions[l.focused] : "right" === l.horizontal_align && (d = l.wrapwidth - l.slide_widths[l.focused] - l.slidepositions[l.focused]), d = d > l.maxwidth / 2 ? l.maxwidth - d : d < 0 - l.maxwidth / 2 ? d + l.maxwidth : d;
            else {
                var c = i[e].pr_processing_key >= 0 ? i[e].pr_processing_key : i[e].pr_active_key >= 0 ? i[e].pr_active_key : 0,
                    p = ("center" === l.horizontal_align ? (l.wrapwidth / 2 - l.slide_width / 2 - l.slide_offset) / l.slide_width : (0 - l.slide_offset) / l.slide_width) % i[e].slideamount;
                d = (l.infinity ? (t = p, a = c, r = i[e].slideamount, n = a - r - t, s = o(s = a - t, r), n = o(n, r), -(Math.abs(s) > Math.abs(n) ? n : s)) : p - c) * l.slide_width
            }
            return !1 === l.snap && l.justDragged && (d = 0), l.justDragged = !1, d
        };
    window.RS_MODULES = window.RS_MODULES || {}, window.RS_MODULES.carousel = {
        loaded: !0,
        version: "6.2.0"
    }, window.RS_MODULES.checkMinimal && window.RS_MODULES.checkMinimal()
}(jQuery),
function(e) {
    "use strict";
    var i = ["chars", "words", "lines"],
        t = ["Top", "Right", "Bottom", "Left"],
        a = ["TopLeft", "TopRight", "BottomRight", "BottomLeft"],
        r = ["top", "right", "bottom", "left"];
    jQuery.fn.revolution = jQuery.fn.revolution || {};
    var o = jQuery.fn.revolution;
    jQuery.extend(!0, o, {
        checkLayerDimensions: function(e) {
            var i = !1;
            for (var t in o[e.id].layers[e.skey])
                if (o[e.id].layers[e.skey].hasOwnProperty(t)) {
                    var a = o[e.id].layers[e.skey][t],
                        r = o[e.id]._L[a.id];
                    r.eow !== a.offsetWidth && "true" !== o.gA(a, "vary-layer-dims") && (i = !0), r.lastknownwidth = r.eow, r.lastknownheight = r.eoh, r._slidelink || o[e.id].caches.calcResponsiveLayersList.push({
                        a: o[e.id]._L[a.id].c,
                        b: e.id,
                        c: 0,
                        d: r.rsp_bd,
                        e: e.slideIndex
                    })
                }
            return i
        },
        requestLayerUpdates: function(e, i, t, a) {
            var r, s, n, d;
            if (void 0 !== t) r = t, o[e]._L[r].pVisRequest !== o[e]._L[r].pVisStatus && (void 0 === o[e]._L[r]._ligid || !0 !== o[e]._L[o[e]._L[r]._ligid].childrenAtStartNotVisible ? (o[e]._L[r].pVisStatus = o[e]._L[r].pVisRequest, d = ("row" === o[e]._L[r].type || "column" === o[e]._L[r].type || "group" === o[e]._L[r].type) && void 0 !== o[e]._L[r].frames && void 0 !== o[e]._L[r].frames.frame_999 && void 0 !== o[e]._L[r].frames.frame_999.transform && "" + o[e]._L[r].frames.frame_999.transform.opacity != "0", n = 1 === o[e]._L[r].pVisRequest ? "remove" : d ? n : "add", s = 1 === o[e]._L[r].pVisRequest ? "remove" : d ? "add" : s) : (n = "add", s = "remove"), void 0 !== s && o[e]._L[r].p[0].classList[s]("rs-forceuntouchable"), void 0 !== n && o[e]._L[r].p[0].classList[n]("rs-forcehidden")), o[e]._L[r].pPointerStatus !== o[e]._L[r].pPeventsRequest && (o[e]._L[r].pPointerStatus = o[e]._L[r].pPeventsRequest, tpGS.gsap.set(o[e]._L[r].p[0], {
                pointerEvents: o[e]._L[r].pPointerStatus,
                visibility: 1 === o[e]._L[r].pVisStatus ? "visible" : 0 === o[e]._L[r].pVisStatus ? "hidden" : o[e]._L[r].pVisStatus
            })), void 0 !== a && "ignore" !== a && 0 !== a && (a++, "enterstage" === i || "leavestage" === i || "framestarted" === i ? o.isFirefox(e) ? -1 === o[e]._L[r].p[0].style.transform.indexOf("perspective") && (o[e]._L[r].p[0].style.transform += (0 === o[e]._L[r].p[0].style.transform.length ? " " : "") + "perspective(" + a + "px)") : (!window.isSafari11 && !0 !== o[e]._L[r].maskHasPerspective && 0 === o[e]._L[r].p[0].style.perspective.length || "none" == o[e]._L[r].p[0].style.perspective) && (o[e]._L[r].p[0].style.perspective = a + "px") : "frameended" === i && (o.isFirefox(e) ? o[e]._L[r].p[0].style.transform = o[e]._L[r].p[0].style.transform.replace("perspective(" + a + "px)", "") : window.isSafari11 || (o[e]._L[r].p[0].style.perspective = o[e]._L[r].p[0].style.perspective.replace(a - 1 + "px", ""))));
            else
                for (r in o[e]._L) o[e]._L.hasOwnProperty(r) && (o[e]._L[r].pVisRequest !== o[e]._L[r].pVisStatus && (o[e]._L[r].pVisStatus = o[e]._L[r].pVisRequest, 0 === o[e]._L[r].pVisStatus ? o[e]._L[r].p[0].classList.add("rs-forcehidden") : o[e]._L[r].p[0].classList.remove("rs-forcehidden")), o[e]._L[r].pPointerStatus !== o[e]._L[r].pPeventsRequest && (o[e]._L[r].pPointerStatus = o[e]._L[r].pPeventsRequest, tpGS.gsap.set(o[e]._L[r].p[0], {
                    pointerEvents: o[e]._L[r].pPointerStatus,
                    visibility: o[e]._L[r].pVisStatus
                })));
            "enterstage" === i && void 0 !== t && void 0 !== o[e]._L[t].esginside && o[e]._L[t].esginside.length > 0 && void 0 !== o[e]._L[t].esginside.esredraw && o[e]._L[t].esginside.esredraw()
        },
        updateMiddleZonesAndESG: function(e) {
            var i, t = o[e].pr_processing_key || o[e].pr_active_key || 0;
            if (o[e].middleZones && o[e].middleZones.length > 0 && void 0 !== o[e].middleZones[t])
                for (i = 0; i < o[e].middleZones[t].length; i++) tpGS.gsap.set(o[e].middleZones[t][i], {
                    y: Math.round(o[e].module.height / 2 - o[e].middleZones[t][i].offsetHeight / 2) + "px"
                });
            if (o[e].smiddleZones && o[e].smiddleZones.length > 0)
                for (i = 0; i < o[e].smiddleZones.length; i++) tpGS.gsap.set(o[e].smiddleZones[i], {
                    y: Math.round(o[e].module.height / 2 - o[e].smiddleZones[i].offsetHeight / 2) + "px"
                })
        },
        getRowHeights: function(e) {
            var i = 0,
                t = 0,
                a = 0,
                r = o[e].pr_processing_key || o[e].pr_active_key || 0,
                s = o[e].pr_active_key || 0;
            if (o[e].rowzones && o[e].rowzones.length > 0) {
                if (void 0 !== o[e].rowzones[r])
                    for (var n = 0; n < o[e].rowzones[r].length; n++) o[e].rowzonesHeights[r][n] = o[e].rowzones[r][n][0].offsetHeight, i += o[e].rowzonesHeights[r][n];
                if (s !== r)
                    for (n = 0; n < o[e].rowzones[s].length; n++) o[e].rowzonesHeights[s][n] = o[e].rowzones[s][n][0].offsetHeight, t += o[e].rowzonesHeights[s][n]
            }
            if (o[e].srowzones && o[e].srowzones.length > 0)
                for (n = 0; n < o[e].srowzones.length; n++) a += o[e].srowzones[n][0].offsetHeight;
            return {
                cur: i = i < a ? a : i,
                last: t
            }
        },
        getGridOffset: function(e, i, t, a) {
            var r = "grid" === t ? o[e].canv.width : "carousel" !== o[e].sliderType || a ? o[e].canv.width : o[e].carousel.slide_width,
                s = o[e].useFullScreenHeight ? o[e].module.height : "grid" === t ? o[e].content.height : "carousel" !== o[e].sliderType || a ? o[e].module.height : o[e].canv.height,
                n = "slide" === t ? 0 : Math.max(0, "fullscreen" == o[e].sliderLayout ? o[e].module.height / 2 - o.iHE(e) * (o[e].keepBPHeight ? 1 : o[e].CM.h) / 2 : o[e].autoHeight || null != o[e].minHeight && o[e].minHeight > 0 || o[e].keepBPHeight ? o[e].canv.height / 2 - o.iHE(e) * o[e].CM.h / 2 : 0),
                d = "slide" === t ? 0 : Math.max(0, "carousel" === o[e].sliderType ? 0 : o[e].canv.width / 2 - o.iWA(e, i) * o[e].CM.w / 2);
            return "slide" !== t && "carousel" === o[e].sliderType && a && void 0 !== o[e].carousel && void 0 !== o[e].carousel.horizontal_align && (d = Math.max(0, "center" === o[e].carousel.horizontal_align ? 0 + (o[e].module.width - o.iWA(e, "static") * o[e].CM.w) / 2 : "right" === o[e].carousel.horizontal_align ? o[e].module.width - o[e].gridwidth[o[e].level] * o[e].CM.w : d)), [r, s, d, n]
        },
        initLayer: function(e) {
            var i, t, a, r = e.id,
                s = e.skey;
            for (var n in o[r].layers[e.skey])
                if (o[r].layers[e.skey].hasOwnProperty(n)) {
                    var d = o[r].layers[e.skey][n],
                        l = jQuery(d),
                        c = o.gA(d, "initialised"),
                        p = c ? o[r]._L[d.id] : l.data();
                    if ("individual" === e.skey && (p.slideKey = void 0 === p.slideKey ? o.gA(l.closest("rs-slide")[0], "key") : p.slideKey, p.slideIndex = void 0 === p.slideIndex ? o.getSlideIndex(r, p.slideKey) : p.slideIndex, e.slideIndex = p.slideIndex, s = p.slideKey), void 0 === c) {
                        if (o.revCheckIDS(r, d), o[r]._L[d.id] = p, p.ford = void 0 === p.ford ? "frame_0;frame_1;frame_999" : p.ford, p.ford = ";" == p.ford[p.ford.length - 1] ? p.ford.substring(0, p.ford.length - 1) : p.ford, p.ford = p.ford.split(";"), void 0 !== p.clip)
                            for (i in p.clipPath = {
                                    use: !1,
                                    origin: "l",
                                    type: "rectangle"
                                }, p.clip = p.clip.split(";"), p.clip) p.clip.hasOwnProperty(i) && ("u" == (t = p.clip[i].split(":"))[0] && (p.clipPath.use = "true" == t[1]), "o" == t[0] && (p.clipPath.origin = t[1]), "t" == t[0] && (p.clipPath.type = t[1]));
                        if (p.frames = k(p, r), p.caches = {}, p.OBJUPD = {}, p.c = l, p.p = o[r]._Lshortcuts[d.id].p, p.lp = o[r]._Lshortcuts[d.id].lp, p.m = o[r]._Lshortcuts[d.id].m, p.triggercache = void 0 === p.triggercache ? "reset" : p.triggercache, p.rsp_bd = void 0 === p.rsp_bd ? "column" === p.type || "row" === p.type ? "off" : "on" : p.rsp_bd, p.rsp_o = void 0 === p.rsp_o ? "on" : p.rsp_o, p.basealign = void 0 === p.basealign ? "grid" : p.basealign, p.group = "group" !== p.type && null !== o.closestNode(l[0], "RS-GROUP-WRAP") ? "group" : "column" !== p.type && null !== o.closestNode(l[0], "RS-COLUMN") ? "column" : "row" !== p.type && null !== o.closestNode(l[0], "RS-ROW") ? "row" : void 0, p._lig = "group" === p.group ? jQuery(o.closestNode(l[0], "RS-GROUP")) : "column" === p.group ? jQuery(o.closestNode(l[0], "RS-COLUMN")) : "row" === p.group ? jQuery(o.closestNode(l[0], "RS-ROW")) : void 0, p._ligid = void 0 !== p._lig ? p._lig[0].id : void 0, p._column = "RS-COLUMN" === l[0].tagName ? jQuery(o.closestNode(l[0], "RS-COLUMN-WRAP")) : "none", p._row = "RS-COLUMN" === l[0].tagName && jQuery(o.closestNode(l[0], "RS-ROW")), p._ingroup = "group" === p.group, p._incolumn = "column" === p.group, p._inrow = "row" === p.group, (p._ingroup || p._incolumn) && p._lig[0].className.indexOf("rs-sba") >= 0 && (!1 !== p.animationonscroll || void 0 === p.frames.loop) && !0 !== p.animOnScrollForceDisable && (p.animationonscroll = !0, l[0].className += " rs-sba", o[r].sbas[s][d.id] = l[0]), p.animOnScrollRepeats = 0, p._isgroup = "RS-GROUP" === l[0].tagName, p.type = p.type || "none", "row" === p.type && (void 0 === p.cbreak && (p.cbreak = 2), void 0 === p.zone && (p.zone = o.closestNode(l[0], "RS-ZONE"), p.zone = null !== p.zone && void 0 !== p.zone ? p.zone.className : "")), p.esginside = jQuery(l[0].getElementsByClassName("esg-grid")[0]), p._isnotext = -1 !== jQuery.inArray(p.type, ["video", "image", "audio", "shape", "row", "group"]), p._mediatag = "html5" == p.audio ? "audio" : "video", p.img = l.find("img"), p.deepiframe = o.getByTag(l[0], "iframe"), p.deepmedia = o.getByTag(l[0], p._mediatag), p.layertype = "image" === p.type ? "image" : l[0].className.indexOf("rs-layer-video") >= 0 || l[0].className.indexOf("rs-layer-audio") >= 0 || p.deepiframe.length > 0 && (p.deepiframe[0].src.toLowerCase().indexOf("youtube") > 0 || p.deepiframe[0].src.toLowerCase().indexOf("vimeo") > 0) || p.deepmedia.length > 0 ? "video" : "html", p.deepiframe.length > 0 && o.sA(p.deepiframe[0], "layertype", p.layertype), "column" === p.type && (p.cbg = jQuery(o.getByTag(p.p[0], "RS-COLUMN-BG")[0]), p.cbgmask = jQuery(o.getByTag(p.p[0], "RS-CBG-MASK-WRAP")[0])), p._slidelink = l[0].className.indexOf("slidelink") >= 0, p._isstatic = l[0].className.indexOf("rs-layer-static") >= 0, p.slidekey = p._isstatic ? "staticlayers" : s, p._togglelisteners = l[0].getElementsByClassName("rs-toggled-content").length > 0, "text" === p.type && (p.c[0].innerHTML = p.c[0].innerHTML.replace("{{total_slide_count}}", o[r].realslideamount), p.c[0].innerHTML.indexOf("{{current_slide_index}}") >= 0))
                            if (p._isstatic) p.metas = p.metas || {}, p.metas.csi = {}, p.c[0].innerHTML = p.c[0].innerHTML.replace("{{current_slide_index}}", "<cusli>" + o[r].realslideamount + "</cusli>"), p.metas.csi.c = p.c[0].getElementsByTagName("CUSLI")[0];
                            else {
                                var g = parseInt(e.slideIndex) + 1;
                                p.c[0].innerHTML = p.c[0].innerHTML.replace("{{current_slide_index}}", (g < 10 && o[r].realslideamount > 9 ? "0" : "") + g)
                            }
                        if (p.bgcol = void 0 === p.bgcol ? l[0].style.background.indexOf("gradient") >= 0 ? l[0].style.background : l[0].style.backgroundColor : p.bgcol, p.bgcol = "" === p.bgcol ? "rgba(0, 0, 0, 0)" : p.bgcol, p.bgcol = 0 === p.bgcol.indexOf("rgba(0, 0, 0, 0)") && p.bgcol.length > 18 ? p.bgcol.replace("rgba(0, 0, 0, 0)", "") : p.bgcol, p.zindex = void 0 === p.zindex ? l[0].style.zIndex : p.zindex, p._isgroup && (p.frames.frame_1.timeline.waitoncall && (p.childrenAtStartNotVisible = !0), p.pVisRequest = 0), p._togglelisteners && l.on("click", function() {
                                o.swaptoggleState([this.id])
                            }), void 0 !== p.border)
                            for (i in p.border = p.border.split(";"), p.bordercolor = "transparent", p.border)
                                if (p.border.hasOwnProperty(i)) switch ((t = p.border[i].split(":"))[0]) {
                                    case "boc":
                                        p.bordercolor = t[1];
                                        break;
                                    case "bow":
                                        p.borderwidth = o.revToResp(t[1], 4, 0);
                                        break;
                                    case "bos":
                                        p.borderstyle = o.revToResp(t[1], 4, 0);
                                        break;
                                    case "bor":
                                        p.borderradius = o.revToResp(t[1], 4, 0)
                                }
                        if ("svg" === p.type && (p.svg = l.find("svg"), p.svgI = f(p.svgi, r), p.svgPath = p.svg.find(p.svgI.svgAll ? "path, circle, ellipse, line, polygon, polyline, rect" : "path"), p.svgH = void 0 !== p.svgi && -1 === p.svgi.indexOf("oc:t") ? f(p.svgh, r) : {}), void 0 !== p.btrans) {
                            var u = p.btrans;
                            for (i in p.btrans = {
                                    rX: 0,
                                    rY: 0,
                                    rZ: 0,
                                    o: 1
                                }, u = u.split(";"))
                                if (u.hasOwnProperty(i)) switch ((t = u[i].split(":"))[0]) {
                                    case "rX":
                                        p.btrans.rX = t[1];
                                        break;
                                    case "rY":
                                        p.btrans.rY = t[1];
                                        break;
                                    case "rZ":
                                        p.btrans.rZ = t[1];
                                        break;
                                    case "o":
                                        p.btrans.o = t[1]
                                }
                        }
                        if (void 0 !== p.tsh)
                            for (i in p.tshadow = {
                                    c: "rgba(0,0,0,0.25)",
                                    v: 0,
                                    h: 0,
                                    b: 0
                                }, p.tsh = p.tsh.split(";"), p.tsh)
                                if (p.tsh.hasOwnProperty(i)) switch ((t = p.tsh[i].split(":"))[0]) {
                                    case "c":
                                        p.tshadow.c = t[1];
                                        break;
                                    case "h":
                                        p.tshadow.h = t[1];
                                        break;
                                    case "v":
                                        p.tshadow.v = t[1];
                                        break;
                                    case "b":
                                        p.tshadow.b = t[1]
                                }
                        if (void 0 !== p.tst)
                            for (i in p.tstroke = {
                                    c: "rgba(0,0,0,0.25)",
                                    w: 1
                                }, p.tst = p.tst.split(";"), p.tst)
                                if (p.tst.hasOwnProperty(i)) switch ((t = p.tst[i].split(":"))[0]) {
                                    case "c":
                                        p.tstroke.c = t[1];
                                        break;
                                    case "w":
                                        p.tstroke.w = t[1]
                                }
                        if (void 0 !== p.bsh)
                            for (i in p.bshadow = {
                                    e: "c",
                                    c: "rgba(0,0,0,0.25)",
                                    v: 0,
                                    h: 0,
                                    b: 0,
                                    s: 0
                                }, p.bsh = p.bsh.split(";"), p.bsh)
                                if (p.bsh.hasOwnProperty(i)) switch ((t = p.bsh[i].split(":"))[0]) {
                                    case "c":
                                        p.bshadow.c = t[1];
                                        break;
                                    case "h":
                                        p.bshadow.h = t[1];
                                        break;
                                    case "v":
                                        p.bshadow.v = t[1];
                                        break;
                                    case "b":
                                        p.bshadow.b = t[1];
                                        break;
                                    case "s":
                                        p.bshadow.s = t[1];
                                        break;
                                    case "e":
                                        p.bshadow.e = t[1]
                                }
                        if (void 0 !== p.dim)
                            for (i in p.dim = p.dim.split(";"), p.dim)
                                if (p.dim.hasOwnProperty(i)) switch ((t = p.dim[i].split(":"))[0]) {
                                    case "w":
                                        p.width = t[1];
                                        break;
                                    case "h":
                                        p.height = t[1];
                                        break;
                                    case "maxw":
                                        p.maxwidth = t[1];
                                        break;
                                    case "maxh":
                                        p.maxheight = t[1];
                                        break;
                                    case "minw":
                                        p.minwidth = t[1];
                                        break;
                                    case "minh":
                                        p.minheight = t[1]
                                }
                        if (void 0 !== p.xy && "row" !== p.type && "column" !== p.type)
                            for (i in p.xy = p.xy.split(";"), p.xy)
                                if (p.xy.hasOwnProperty(i)) switch ((t = p.xy[i].split(":"))[0]) {
                                    case "x":
                                        p.x = t[1].replace("px", "");
                                        break;
                                    case "y":
                                        p.y = t[1].replace("px", "");
                                        break;
                                    case "xo":
                                        p.hoffset = t[1].replace("px", "");
                                        break;
                                    case "yo":
                                        p.voffset = t[1].replace("px", "")
                                }
                        if (!p._isnotext && void 0 !== p.text)
                            for (i in p.text = p.text.split(";"), p.text)
                                if (p.text.hasOwnProperty(i)) switch ((t = p.text[i].split(":"))[0]) {
                                    case "w":
                                        p.whitespace = t[1];
                                        break;
                                    case "td":
                                        p.textDecoration = t[1];
                                        break;
                                    case "c":
                                        p.clear = t[1];
                                        break;
                                    case "f":
                                        p.float = t[1];
                                        break;
                                    case "s":
                                        p.fontsize = t[1];
                                        break;
                                    case "l":
                                        p.lineheight = t[1];
                                        break;
                                    case "ls":
                                        p.letterspacing = t[1];
                                        break;
                                    case "fw":
                                        p.fontweight = t[1];
                                        break;
                                    case "a":
                                        p.textalign = t[1]
                                }
                        if ("column" === p.type && void 0 !== p.textDecoration && delete p.textDecoration, void 0 !== p.flcr)
                            for (i in p.flcr = p.flcr.split(";"), p.flcr)
                                if (p.flcr.hasOwnProperty(i)) switch ((t = p.flcr[i].split(":"))[0]) {
                                    case "c":
                                        p.clear = t[1];
                                        break;
                                    case "f":
                                        p.float = t[1]
                                }
                        if (void 0 !== p.padding)
                            for (i in p.padding = p.padding.split(";"), p.padding)
                                if (p.padding.hasOwnProperty(i)) switch ((t = p.padding[i].split(":"))[0]) {
                                    case "t":
                                        p.paddingtop = t[1];
                                        break;
                                    case "b":
                                        p.paddingbottom = t[1];
                                        break;
                                    case "l":
                                        p.paddingleft = t[1];
                                        break;
                                    case "r":
                                        p.paddingright = t[1]
                                }
                        if (void 0 !== p.margin)
                            for (i in p.margin = p.margin.split(";"), p.margin)
                                if (p.margin.hasOwnProperty(i)) switch ((t = p.margin[i].split(":"))[0]) {
                                    case "t":
                                        p.margintop = t[1];
                                        break;
                                    case "b":
                                        p.marginbottom = t[1];
                                        break;
                                    case "l":
                                        p.marginleft = t[1];
                                        break;
                                    case "r":
                                        p.marginright = t[1]
                                }
                        if (void 0 !== p.spike && (p.spike = z(p.spike)), void 0 !== p.corners)
                            for (i in a = p.corners.split(";"), p.corners = {}, a) a.hasOwnProperty(i) && a[i].length > 0 && (p.corners[a[i]] = jQuery("<" + a[i] + "></" + a[i] + ">"), p.c.append(p.corners[a[i]]));
                        p.textalign = y(p.textalign), p.vbility = o.revToResp(p.vbility, o[r].rle, !0), p.hoffset = o.revToResp(p.hoffset, o[r].rle, 0), p.voffset = o.revToResp(p.voffset, o[r].rle, 0), p.x = o.revToResp(p.x, o[r].rle, "l"), p.y = o.revToResp(p.y, o[r].rle, "t"), C(l, 0, r), o.sA(d, "initialised", !0), o[r].c.trigger("layerinitialised", {
                            layer: l[0].id,
                            slider: r
                        })
                    }
                    var h = p.x[o[r].level],
                        m = p.y[o[r].level],
                        v = o.getGridOffset(r, e.slideIndex, p.basealign, p._isstatic),
                        w = v[0],
                        b = v[1],
                        _ = v[2],
                        S = v[3];
                    if (p.slideIndex = e.slideIndex, "updateposition" !== e.mode) {
                        if (0 == p.vbility[o[r].levelForced] || "f" == p.vbility[o[r].levelForced] || w < o[r].hideLayerAtLimit && "on" == p.layeronlimit || w < o[r].hideAllLayerAtLimit ? (!0 !== p.layerIsHidden && p.p[0].classList.add("rs-layer-hidden"), p.layerIsHidden = !0) : (p.layerIsHidden && p.p[0].classList.remove("rs-layer-hidden"), p.layerIsHidden = !1), p.poster = null == p.poster && void 0 !== p.thumbimage ? p.thumbimage : p.poster, "image" === p.layertype)
                            if (p.imgOBJ = {}, "cover-proportional" === p.img.data("c")) {
                                o.sA(p.img[0], "owidth", o.gA(p.img[0], "owidth", p.img[0].width)), o.sA(p.img[0], "oheight", o.gA(p.img[0], "oheight", p.img[0].height));
                                var x = o.gA(p.img[0], "owidth") / o.gA(p.img[0], "oheight"),
                                    L = w / b;
                                p.imgOBJ = x > L && x <= 1 || x < L && x > 1 ? {
                                    width: "100%",
                                    height: "auto",
                                    left: "c" === h || "center" === h ? "50%" : "left" === h || "l" === h ? "0" : "auto",
                                    right: "r" === h || "right" === h ? "0" : "auto",
                                    top: "c" === m || "center" === m ? "50%" : "top" === m || "t" === m ? "0" : "auto",
                                    bottom: "b" === m || "bottom" === m ? "0" : "auto",
                                    x: "c" === h || "center" === h ? "-50%" : "0",
                                    y: "c" === m || "center" === h ? "-50%" : "0"
                                } : {
                                    height: "100%",
                                    width: "auto",
                                    left: "c" === h || "center" === h ? "50%" : "left" === h || "l" === h ? "0" : "auto",
                                    right: "r" === h || "right" === h ? "0" : "auto",
                                    top: "c" === m || "center" === m ? "50%" : "top" === m || "t" === m ? "0" : "auto",
                                    bottom: "b" === m || "bottom" === m ? "0" : "auto",
                                    x: "c" === h || "center" === h ? "-50%" : "0",
                                    y: "c" === m || "center" === h ? "-50%" : "0"
                                }
                            } else void 0 === p.group && "auto" === p.width[o[r].level] && "auto" === p.height[o[r].level] && (p.width[o[r].level] = o.gA(p.img[0], "owidth", p.img[0].width), p.height[o[r].level] = o.gA(p.img[0], "owidth", p.img[0].height)), p.imgOBJ = {
                                width: "auto" !== p.width[o[r].level] || isNaN(p.width[o[r].level]) && p.width[o[r].level].indexOf("%") >= 0 ? "100%" : "auto",
                                height: "auto" !== p.height[o[r].level] || isNaN(p.height[o[r].level]) && p.height[o[r].level].indexOf("%") >= 0 ? "100%" : "auto"
                            };
                        else if ("video" === p.layertype) {
                            o.manageVideoLayer(l, r, s), "rebuild" !== e.mode && o.resetVideo(l, r, e.mode), null != p.aspectratio && p.aspectratio.split(":").length > 1 && 1 == p.bgvideo && o.prepareCoveredVideo(r, l), p.media = void 0 === p.media ? p.deepiframe.length > 0 ? jQuery(p.deepiframe[0]) : jQuery(p.deepmedia[0]) : p.media, p.html5vid = void 0 === p.html5vid ? !(p.deepiframe.length > 0) : p.html5vid, p.mediaOBJ = {
                                display: "block"
                            };
                            var R = p.width[o[r].level],
                                O = p.height[o[r].level];
                            if (R = "auto" === R ? R : !o.isNumeric(R) && R.indexOf("%") > 0 ? p._incolumn || p._ingroup ? "100%" : "grid" === p.basealign ? o.iWA(r, e.slideIndex) * o[r].CM.w : w : "off" !== p.rsp_bd ? parseFloat(R) * o[r].CM.w + "px" : parseFloat(R) + "px", O = "auto" === O ? O : !o.isNumeric(O) && O.indexOf("%") > 0 ? "grid" === p.basealign ? o.iHE(r) * o[r].CM.w : b : "off" !== p.rsp_bd ? parseFloat(O) * o[r].CM.h + "px" : parseFloat(O) + "px", p.vd = void 0 === p.vd ? o[r].videos[l[0].id].ratio.split(":").length > 1 ? o[r].videos[l[0].id].ratio.split(":")[0] / o[r].videos[l[0].id].ratio.split(":")[1] : 1 : p.vd, !p._incolumn || "100%" !== R && "auto" !== O || void 0 === p.ytid) - 1 == l[0].className.indexOf("rs-fsv") ? (O = "auto" === O && void 0 !== p.vd && "auto" !== R ? "100%" === R ? l.width() / p.vd : R / p.vd : O, p.vidOBJ = {
                                width: R,
                                height: O
                            }) : ("grid" !== p.basealign && (_ = 0, S = 0), p.x = o.revToResp(0, o[r].rle, 0), p.y = o.revToResp(0, o[r].rle, 0), p.vidOBJ = {
                                width: R,
                                height: o[r].autoHeight ? o[r].canv.height : O
                            }), 0 != p.html5vid && l.hasClass("rs-fsv") || (p.mediaOBJ = {
                                width: R,
                                height: O,
                                display: "block"
                            }), p._ingroup && null !== p.vidOBJ.width && void 0 !== p.vidOBJ.width && !o.isNumeric(p.vidOBJ.width) && p.vidOBJ.width.indexOf("%") > 0 && (p.OBJUPD.lppmOBJ = {
                                minWidth: R
                            });
                            else {
                                var I = l.width(),
                                    T = "auto" === O ? I / p.vd : O;
                                p.vidOBJ = {
                                    width: "auto",
                                    height: T
                                }, p.heightSetByVideo = !0
                            }
                        }
                        p._slidelink || o[r].caches.calcResponsiveLayersList.push({
                            a: l,
                            b: r,
                            c: 0,
                            d: p.rsp_bd,
                            e: e.slideIndex
                        }), "on" === p.rsp_ch && "row" !== p.type && "column" !== p.type && "group" !== p.type && "image" !== p.type && "video" !== p.type && "shape" !== p.type && l.find("*").each(function() {
                            var i = jQuery(this);
                            "true" !== o.gA(this, "stylerecorder") && !0 !== o.gA(this, "stylerecorder") && C(i, "rekursive", r), o[r].caches.calcResponsiveLayersList.push({
                                a: i,
                                b: r,
                                c: "rekursive",
                                d: p.rsp_bd,
                                e: e.slideIndex,
                                RSL: l
                            })
                        })
                    }
                    if ("preset" !== e.mode) {
                        if (p.oldeow = p.eow, p.oldeoh = p.eoh, p.eow = l.outerWidth(!0), p.eoh = l.outerHeight(!0), void 0 !== p.metas && void 0 !== p.metas.csi && p.metas.csi.change !== o[r].focusedSlideIndex) {
                            p.metas.csi.change = o[r].focusedSlideIndex;
                            g = parseInt(p.metas.csi.change) + 1;
                            p.metas.csi.c.innerHTML = (o[r].realslideamount > 9 && g < 10 ? "0" : "") + g
                        }
                        if (p.imgInFirefox = "image" == p.type && "auto" == p.width[o[r].level] && "100%" == p.height[o[r].level] && o.isFirefox(r), p.imgInFirefox) {
                            var M = p.img.width();
                            p.eow = 0 !== M ? M : p.eow
                        }
                        if (p.eow <= 0 && void 0 !== p.lastknownwidth && (p.eow = p.lastknownwidth), p.eoh <= 0 && void 0 !== p.lastknownheight && (p.eoh = p.lastknownheight), void 0 !== p.corners && ("text" === p.type || "button" === p.type || "shape" === p.type)) {
                            for (a in p.corners)
                                if (p.corners.hasOwnProperty(a)) {
                                    p.corners[a].css("borderWidth", p.eoh + "px");
                                    var A = "rs-fcrt" === a || "rs-fcr" === a;
                                    p.corners[a].css("border" + (A ? "Right" : "Left"), "0px solid transparent"), p.corners[a].css("border" + ("rs-fcrt" == a || "rs-bcr" == a ? "Bottom" : "Top") + "Color", p.bgcol)
                                }
                            p.eow = l.outerWidth(!0)
                        }
                        0 == p.eow && 0 == p.eoh && (p.eow = "grid" === p.basealign ? o[r].content.width : o[r].module.width, p.eoh = "grid" === p.basealign ? o[r].content.height : o[r].module.height), p.basealign = o[r].justifyCarousel ? "grid" : p.basealign;
                        var D = "on" === p.rsp_o ? parseInt(p.voffset[o[r].level], 0) * o[r].CM.w : parseInt(p.voffset[o[r].level], 0),
                            P = "on" === p.rsp_o ? parseInt(p.hoffset[o[r].level], 0) * o[r].CM.h : parseInt(p.hoffset[o[r].level], 0),
                            B = "grid" === p.basealign ? o.iWA(r, e.slideIndex) * o[r].CM.w : w,
                            G = "grid" === p.basealign ? o.iHE(r) * (o[r].keepBPHeight || o[r].currentRowsHeight > o[r].gridheight[o[r].level] ? 1 : o[r].CM.h) : b;
                        (1 == o[r].gridEQModule || void 0 !== p._lig && "row" !== p.type && "column" !== p.type && "group" !== p.type) && (B = void 0 !== p._lig ? p._lig.width() : o[r].module.width, G = void 0 !== p._lig ? p._lig.height() : o[r].module.height, _ = 0, S = 0), "video" === p.type && null != p.vidOBJ && (p.vidOBJ.height >= 0 && 0 === p.eoh && (p.eoh = p.vidOBJ.height), p.vidOBJ.width >= 0 && 0 === p.eow && (p.eow = p.vidOBJ.width)), h = "c" === h || "m" === h || "center" === h || "middle" === h ? B / 2 - p.eow / 2 + P : "l" === h || "left" === h ? P : "r" === h || "right" === h ? B - p.eow - P : "off" !== p.rsp_o ? h * o[r].CM.w : h, m = "m" === m || "c" === m || "center" === m || "middle" === m ? G / 2 - p.eoh / 2 + D : "t" === m || "top" == m ? D : "b" === m || "bottom" == m ? G - p.eoh - D : "off" !== p.rsp_o ? m * o[r].CM.w : m, h = p._slidelink ? 0 : o[r].rtl && -1 == ("" + p.width[o[r].level]).indexOf("%") ? parseInt(h) + p.eow : h, p.calcx = parseInt(h, 0) + _, p.calcy = parseInt(m, 0) + S, "row" !== p.type && "column" !== p.type ? p.OBJUPD.POBJ = {
                            zIndex: p.zindex,
                            top: p.calcy,
                            left: p.calcx,
                            overwrite: "auto"
                        } : "row" !== p.type ? p.OBJUPD.POBJ = {
                            zIndex: p.zindex,
                            width: p.columnwidth,
                            top: 0,
                            left: 0,
                            overwrite: "auto"
                        } : "row" === p.type && (p.OBJUPD.POBJ = {
                            zIndex: p.zindex,
                            width: "grid" === p.basealign ? B + "px" : "100%",
                            top: 0,
                            left: o[r].rtl ? -1 * _ : _,
                            overwrite: "auto"
                        }, p.cbreak <= o[r].level ? -1 === l[0].className.indexOf("rev_break_columns") && l[0].classList.add("rev_break_columns") : l[0].className.indexOf("rev_break_columns") > 0 && l[0].classList.remove("rev_break_columns"), p.rowcalcx = p.OBJUPD.POBJ.left, p.pow = p.p.outerWidth(!0)), void 0 !== p.blendmode && (p.OBJUPD.POBJ.mixBlendMode = p.blendmode), (void 0 !== p.frames.loop || p.imgInFirefox) && (p.OBJUPD.LPOBJ = {
                            width: p.eow,
                            height: p.eoh
                        }), p._ingroup && (void 0 !== p._groupw && !o.isNumeric(p._groupw) && p._groupw.indexOf("%") > 0 && (p.OBJUPD.lppmOBJ.minWidth = p._groupw), void 0 !== p._grouph && !o.isNumeric(p._grouph) && p._grouph.indexOf("%") > 0 && (p.OBJUPD.lppmOBJ.minHeight = p._grouph)), "updateposition" === e.mode && (p.caches.POBJ_LEFT === p.OBJUPD.POBJ.left && p.caches.POBJ_TOP === p.OBJUPD.POBJ.top || (tpGS.gsap.set(p.p, p.OBJUPD.POBJ), p.caches.POBJ_LEFT = p.OBJUPD.POBJ.left, p.caches.POBJ_TOP = p.OBJUPD.POBJ.top)), e.animcompleted && o.animcompleted(l, r)
                    }
                }
        },
        hoverReverseDone: function(e) {
            o[e.id]._L[e.L[0].id].textDecoration && tpGS.gsap.set(o[e.id]._L[e.L[0].id].c, {
                textDecoration: o[e.id]._L[e.L[0].id].textDecoration
            })
        },
        animcompleted: function(e, i, t) {
            if (void 0 !== o[i].videos) {
                var a = o[i].videos[e[0].id];
                null != a && null != a.type && "none" != a.type && (1 == a.aplay || "true" == a.aplay || "on" == a.aplay || "1sttime" == a.aplay ? (("static" === a.slideid || "carousel" !== o[i].sliderType || e.closest("rs-slide").index() == o[i].carousel.focused || e.closest("rs-slide").index() == o[i].activeRSSlide && o[i].carousel.oldfocused == o[i].carousel.focused || t) && o.playVideo(e, i), o.toggleState(e.data("videotoggledby")), (a.aplay1 || "1sttime" == a.aplay) && (a.aplay1 = !1, a.aplay = !1)) : ("no1sttime" == a.aplay && (a.aplay = !0), o.unToggleState(e.data("videotoggledby"))))
            }
        },
        handleStaticLayers: function(e, i) {
            var t = 0,
                a = o[i].realslideamount + 1;
            if (void 0 !== o.gA(e[0], "onslides")) {
                var r = o.gA(e[0], "onslides").split(";");
                for (var s in r)
                    if (r.hasOwnProperty(s)) {
                        var n = r[s].split(":");
                        "s" === n[0] && (t = parseInt(n[1], 0)), "e" === n[0] && (a = parseInt(n[1], 0))
                    }
            }
            t = Math.max(0, t), a = Math.min(o[i].realslideamount, a < 0 ? o[i].realslideamount : a), a = 1 !== t && 0 !== t || a !== o[i].realslideamount ? a : o[i].realslideamount + 1, e.data("startslide", t), e.data("endslide", a), o.sA(e[0], "startslide", t), o.sA(e[0], "endslide", a)
        },
        updateLayersOnFullStage: function(e) {
            if (o[e].caches.calcResponsiveLayersList.length > 0) {
                !0 !== o[e].slideHasIframe && !0 !== o[e].fullScreenMode && ("carousel" === o[e].sliderType ? o[e].carousel.wrap.detach() : o[e].canvas.detach());
                for (var i = 0; i < o[e].caches.calcResponsiveLayersList.length; i++) void 0 !== o[e].caches.calcResponsiveLayersList[i] && B(o[e].caches.calcResponsiveLayersList[i]);
                !0 !== o[e].slideHasIframe && !0 !== o[e].fullScreenMode && ("carousel" === o[e].sliderType ? o[e].c[0].appendChild(o[e].carousel.wrap[0]) : o[e].c[0].appendChild(o[e].canvas[0]))
            }
        },
        animateTheLayers: function(e) {
            if (void 0 === e.slide) return !1;
            var i = e.id;
            if (void 0 === o[i].slides[e.slide] && "individual" !== e.slide) return !1;
            if ("carousel" === o[i].sliderType) {
                if ("start" === e.mode && "start" === o[i].lastATLmode) {
                    if (e.slide === o[i].lastATLslide && (new Date).getTime() - o[i].lastATLtime < 1500) return;
                    o[i].lastATLtime = (new Date).getTime()
                }
                o[i].lastATLmode = e.mode, o[i].lastATLslide = e.slide
            }
            var t = "individual" !== e.slide ? o.gA(o[i].slides[e.slide], "key") : "individual",
                a = o[i].pr_processing_key || o[i].pr_active_key || 0;
            o[i].focusedSlideIndex = a, o[i].caches.calcResponsiveLayersList = [], o[i].layers = o[i].layers || {}, "individual" === t ? o[i].layers.individual = void 0 === o[i].layers.individual ? "all" === o[i].carousel.showLayersAllTime ? T(jQuery(o[i].c), "rs-layer", "rs-layer-static") : T(jQuery(o[i].c), "rs-on-car") : o[i].layers.individual : (o[i].layers[t] = void 0 === o[i].layers[t] ? "all" === o[i].carousel.showLayersAllTime ? [] : T(jQuery(o[i].slides[e.slide]), "rs-layer", "carousel" === o[i].sliderType ? "rs-on-car" : void 0) : o[i].layers[t], o[i].layers.static = void 0 === o[i].layers.static ? T(jQuery(o[i].c.find("rs-static-layers")), "rs-layer", "rs-on-car") : o[i].layers.static, o[i].sbas[t] = void 0 === o[i].sbas[t] ? T(jQuery(o[i].slides[e.slide]), "rs-sba") : o[i].sbas[t]);
            var r = "rebuild" === e.mode && "carousel" === o[i].sliderType && "individual" === t;
            void 0 !== t && o[i].layers[t] && o.initLayer({
                id: i,
                slideIndex: e.slide,
                skey: t,
                mode: e.mode,
                animcompleted: r
            }), o[i].layers.static && o.initLayer({
                id: i,
                skey: "static",
                slideIndex: "static",
                mode: e.mode,
                animcompleted: r
            }), o.updateLayersOnFullStage(i), "preset" !== e.mode || void 0 !== o[i].slidePresets && void 0 !== o[i].slidePresets[e.slide] || (o[i].slidePresets = void 0 === o[i].slidePresets ? {} : o[i].slidePresets, o[i].slidePresets[e.slide] = !0, o[i].c.trigger("revolution.slideprepared", {
                slide: e.slide,
                key: t
            })), o[i].heightInLayers = o[i].module.height, o[i].widthInLayers = o[i].module.width, o[i].levelInLayers = o[i].level;
            var s = {
                id: i,
                skey: t,
                slide: e.slide,
                key: t,
                mode: e.mode,
                index: a
            };
            window.requestAnimationFrame(function() {
                if (void 0 === o[i].dimensionReCheck[t] ? (o.updateLayerDimensions(s), !0 !== o[i].doubleDimensionCheck ? setTimeout(function() {
                        o.updateLayerDimensions(s), o.updateRowZones(s)
                    }, 150) : o.updateRowZones(s), o[i].doubleDimensionCheck = !0, o[i].dimensionReCheck[t] = !0) : o.updateRowZones(s), void 0 !== t && o[i].layers[t])
                    for (var a in o[i].layers[t]) o[i].layers[t].hasOwnProperty(a) && o.renderLayerAnimation({
                        layer: jQuery(o[i].layers[t][a]),
                        id: i,
                        mode: e.mode,
                        caller: e.caller
                    });
                if (o[i].layers.static)
                    for (var a in o[i].layers.static) o[i].layers.static.hasOwnProperty(a) && o.renderLayerAnimation({
                        layer: jQuery(o[i].layers.static[a]),
                        id: i,
                        mode: e.mode,
                        caller: e.caller
                    });
                null != o[i].mtl && o[i].mtl.resume()
            })
        },
        updateRowZones: function(e) {
            (void 0 !== o[e.id].rowzones && o[e.id].rowzones.length > 0 && e.index >= 0 && o[e.id].rowzones[Math.min(e.index, o[e.id].rowzones.length)] && o[e.id].rowzones[Math.min(e.index, o[e.id].rowzones.length)].length > 0 || void 0 !== o[e.id].srowzones && o[e.id].srowzones.length > 0 || void 0 !== o[e.id].smiddleZones && o[e.id].smiddleZones.length > 0) && (o.updateDims(e.id), o.initLayer({
                id: e.id,
                skey: e.key,
                slideIndex: e.slide,
                mode: "updateposition"
            }), o.initLayer({
                id: e.id,
                skey: "static",
                slideIndex: "static",
                mode: "updateposition"
            }), "start" !== e.mode && "preset" !== e.mode || o.manageNavigation(e.id))
        },
        updateLayerDimensions: function(e) {
            var i = !1;
            o[e.id].caches.calcResponsiveLayersList = [], void 0 === e.key || "individual" != e.key && void 0 === o[e.id].layers[e.key] || !o.checkLayerDimensions({
                id: e.id,
                skey: e.key,
                slideIndex: e.slide
            }) || (i = !0), o.initLayer({
                id: e.id,
                skey: e.key,
                slideIndex: e.slide,
                mode: "updateAndResize"
            }), o[e.id].layers.static && o.checkLayerDimensions({
                id: e.id,
                skey: "static",
                slideIndex: "static"
            }) && (i = !0, o.initLayer({
                id: e.id,
                skey: "static",
                slideIndex: "static",
                mode: "updateAndResize"
            })), i && o.updateLayersOnFullStage(e.id)
        },
        updateAnimatingLayerPositions: function(e) {
            o.initLayer({
                id: e.id,
                skey: e.key,
                slideIndex: e.slide,
                mode: "updateposition"
            })
        },
        removeTheLayers: function(e, i, t) {
            var a = o.gA(e[0], "key");
            for (var r in o[i].sloops && o[i].sloops[a] && o[i].sloops[a].tl && o[i].sloops[a].tl.pause(), o[i].layers[a]) o[i].layers[a].hasOwnProperty(r) && o.renderLayerAnimation({
                layer: jQuery(o[i].layers[a][r]),
                frame: "frame_999",
                mode: "continue",
                remove: !0,
                id: i,
                allforce: t
            });
            for (var r in o[i].layers.static) o[i].layers.static.hasOwnProperty(r) && o.renderLayerAnimation({
                layer: jQuery(o[i].layers.static[r]),
                frame: "frame_999",
                mode: "continue",
                remove: !0,
                id: i,
                allforce: t
            })
        },
        renderLayerAnimation: function(e) {
            var t, a = e.layer,
                r = e.id,
                u = o[r].level,
                m = o[r]._L[a[0].id],
                v = void 0 !== m.timeline ? m.timeline.time() : void 0,
                f = !1,
                y = !1,
                _ = "none";
            if (("containerResized_2" !== e.caller && "swapSlideProgress_2" !== e.caller || !0 === m.animationRendered) && (m.animationRendered = !0, "preset" !== e.mode || !0 === m.frames.frame_1.timeline.waitoncall || void 0 !== m.scrollBasedOffset)) {
                if ("trigger" == e.mode && (m.triggeredFrame = e.frame), m._isstatic) {
                    var x = "carousel" === o[r].sliderType && void 0 !== o[r].carousel.oldfocused ? o[r].carousel.oldfocused : void 0 === o[r].pr_lastshown_key ? 1 : parseInt(o[r].pr_lastshown_key, 0) + 1,
                        k = "carousel" === o[r].sliderType ? void 0 === o[r].pr_next_key ? 0 === x ? 1 : x : parseInt(o[r].pr_next_key, 0) + 1 : void 0 === o[r].pr_processing_key ? x : parseInt(o[r].pr_processing_key, 0) + 1,
                        L = x >= m.startslide && x <= m.endslide,
                        R = k >= m.startslide && k <= m.endslide;
                    if (_ = x === m.endslide && "continue" === e.mode || ("continue" === e.mode || x === m.endslide) && "none", !0 === e.allforce || !0 === _) {
                        if ("continue" === e.mode && "frame_999" === e.frame && (R || void 0 === m.lastRequestedMainFrame)) return
                    } else {
                        if ("preset" === e.mode && (m.elementHovered || !R)) return;
                        if ("rebuild" === e.mode && !L && !R) return;
                        if ("start" === e.mode && R && "frame_1" === m.lastRequestedMainFrame) return;
                        if (("start" === e.mode || "preset" === e.mode) && "frame_999" === m.lastRequestedMainFrame && !0 !== m.leftstage) return;
                        if ("continue" === e.mode && "frame_999" === e.frame && (R || void 0 === m.lastRequestedMainFrame)) return;
                        if ("start" === e.mode && !R) return
                    }
                } else "start" === e.mode && "keep" !== m.triggercache && (m.triggeredFrame = void 0);
                for (var O in "start" === e.mode && (void 0 !== m.layerLoop && (m.layerLoop.count = 0), e.frame = void 0 === m.triggeredFrame ? 0 : m.triggeredFrame), "continue" === e.mode || "trigger" === e.mode || void 0 === m.timeline || m._isstatic && !0 === m.leftstage || m.timeline.pause(0), "continue" !== e.mode && "trigger" !== e.mode || void 0 === m.timeline || m.timeline.pause(), m.timeline = tpGS.gsap.timeline({
                        paused: !0
                    }), "text" !== m.type && "button" !== m.type || void 0 !== m.splitText && (void 0 !== m.splitTextFix || "start" !== e.mode && "preset" !== e.mode) || (w({
                        layer: a,
                        id: r
                    }), "start" === e.mode && (m.splitTextFix = !0)), m.ford)
                    if (m.ford.hasOwnProperty(O)) {
                        var I = m.ford[O],
                            T = !1;
                        if ("frame_0" !== I && "frame_hover" !== I && "loop" !== I) {
                            if ("frame_999" === I && !m.frames[I].timeline.waitoncall && m.frames[I].timeline.start >= o[r].duration && !0 !== e.remove && (m.frames[I].timeline.waitoncall = !0), "start" === e.mode && "keep" !== m.triggercache && (m.frames[I].timeline.callstate = m.frames[I].timeline.waitoncall ? "waiting" : ""), "trigger" === e.mode && m.frames[I].timeline.waitoncall && (I === e.frame ? (m.frames[I].timeline.triggered = !0, m.frames[I].timeline.callstate = "called") : m.frames[I].timeline.triggered = !1), "rebuild" === e.mode || m.frames[I].timeline.triggered || (m.frames[I].timeline.callstate = m.frames[I].timeline.waitoncall ? "waiting" : ""), !1 !== e.fastforward) {
                                if (("continue" === e.mode || "trigger" === e.mode) && !1 === y && I !== e.frame) continue;
                                if (("rebuild" === e.mode || "preset" === e.mode) && !1 === y && void 0 !== m.triggeredFrame && I !== m.triggeredFrame) continue;
                                (I === e.frame || "rebuild" === e.mode && I === m.triggeredFrame) && (y = !0)
                            } else I === e.frame && (y = !0);
                            if (I !== e.frame && m.frames[I].timeline.waitoncall && "called" !== m.frames[I].timeline.callstate && (f = !0), I !== e.frame && y && (f = !0 === f && m.frames[I].timeline.waitoncall ? "skiprest" : !0 !== f && f), void 0 === m.hideonfirststart && "frame_1" === I && m.frames[I].timeline.waitoncall && (m.hideonfirststart = !0), f && "waiting" === m.frames[I].timeline.callstate && "preset" === e.mode && 1 != m.firstTimeRendered) {
                                if (m._isstatic && void 0 === m.currentframe) continue;
                                T = !0, m.firstTimeRendered = !0
                            } else if ("skiprest" === f || "called" !== m.frames[I].timeline.callstate && f && e.toframe !== I) continue;
                            if ("frame_999" !== I || !1 !== _ || "continue" !== e.mode && "start" !== e.mode && "rebuild" !== e.mode) {
                                m.fff = "frame_1" === I && ("trigger" !== e.mode || "frame_999" === m.currentframe || "frame_0" === m.currentframe || void 0 === m.currentframe), "trigger" === e.mode && "frame_1" === e.frame && !1 === m.leftstage && (m.fff = !1), T || (m.frames[I].timeline.callstate = "called", m.currentframe = I);
                                var M = m.frames[I],
                                    C = m.fff ? m.frames.frame_0 : void 0,
                                    A = tpGS.gsap.timeline(),
                                    D = tpGS.gsap.timeline(),
                                    P = m.c,
                                    B = void 0 !== M.sfx && b(M.sfx.effect, m.m, M.timeline.ease),
                                    z = M.timeline.speed / 1e3,
                                    G = 0,
                                    E = S({
                                        id: r,
                                        frame: M,
                                        layer: a,
                                        ease: M.timeline.ease,
                                        splitAmount: P.length,
                                        target: I,
                                        forcefilter: void 0 !== m.frames.frame_hover && void 0 !== m.frames.frame_hover.filter
                                    }),
                                    N = m.fff ? S({
                                        id: r,
                                        frame: C,
                                        layer: a,
                                        ease: M.timeline.ease,
                                        splitAmount: P.length,
                                        target: "frame_0"
                                    }) : void 0,
                                    H = void 0 !== M.mask ? S({
                                        id: r,
                                        frame: {
                                            transform: {
                                                x: M.mask.x,
                                                y: M.mask.y
                                            }
                                        },
                                        layer: a,
                                        ease: E.ease,
                                        target: "mask"
                                    }) : void 0,
                                    j = void 0 !== H && m.fff ? S({
                                        id: r,
                                        frame: {
                                            transform: {
                                                x: C.mask.x,
                                                y: C.mask.y
                                            }
                                        },
                                        layer: a,
                                        ease: E.ease,
                                        target: "frommask"
                                    }) : void 0,
                                    F = E.ease;
                                if (E.force3D = !0, "block" === B.type && (B.ft[0].background = M.sfx.fxc, B.ft[0].visibility = "visible", B.ft[1].visibility = "visible", A.add(tpGS.gsap.fromTo(B.bmask_in, z / 2, B.ft[0], B.ft[1], 0)), A.add(tpGS.gsap.fromTo(B.bmask_in, z / 2, B.ft[1], B.t, z / 2)), "frame_0" !== I && "frame_1" !== I || (N.opacity = 0)), void 0 !== M.color ? E.color = M.color : void 0 !== m.color && "npc" !== m.color[u] && (E.color = m.color[u]), void 0 !== C && void 0 !== C.color ? N.color = C.color : void 0 !== C && void 0 !== m.color && "npc" !== m.color[u] && (N.color = m.color[u]), void 0 !== M.bgcolor ? M.bgcolor.indexOf("gradient") >= 0 ? E.background = M.bgcolor : E.backgroundColor = M.bgcolor : !0 === m.bgcolinuse && (m.bgcol.indexOf("gradient") >= 0 ? E.background = m.bgcol : E.backgroundColor = m.bgcol), void 0 !== C && (void 0 !== C.bgcolor ? C.bgcolor.indexOf("gradient") >= 0 ? N.background = C.bgcolor : N.backgroundColor = C.bgcolor : !0 === m.bgcolinuse && (m.bgcol.indexOf("gradient") >= 0 ? N.background = m.bgcol : N.backgroundColor = m.bgcol)), void 0 !== m.splitText && !1 !== m.splitText)
                                    for (var W in i)
                                        if (void 0 !== M[i[W]] && !m.quickRendering) {
                                            var V = m.splitText[i[W]],
                                                U = S({
                                                    id: r,
                                                    frame: M,
                                                    source: i[W],
                                                    ease: F,
                                                    layer: a,
                                                    splitAmount: V.length,
                                                    target: I + "_" + i[W]
                                                }),
                                                X = m.fff ? S({
                                                    id: r,
                                                    frame: C,
                                                    ease: U.ease,
                                                    source: i[W],
                                                    layer: a,
                                                    splitAmount: V.length,
                                                    target: "frame_0_" + i[W]
                                                }) : void 0,
                                                Y = m.frames[I].dosplit ? void 0 === M[i[W]].delay ? .05 : M[i[W]].delay / 100 : 0;
                                            m.color[u] === E.color && "frame_1" === I || (U.color = E.color), void 0 !== N && m.color[u] !== N.color && (X.color = N.color), void 0 !== X && X.color !== E.color && (U.color = E.color);
                                            var Q = o.clone(U),
                                                J = m.fff ? o.clone(X) : void 0,
                                                q = M[i[W]].dir;
                                            delete Q.dir, Q.data = {
                                                splitted: !0
                                            }, Q.stagger = "center" === q || "edge" === q ? l({
                                                each: Y,
                                                offset: Y / 2,
                                                from: q
                                            }) : {
                                                each: Y,
                                                from: q
                                            }, Q.duration = z, void 0 !== J && delete J.dir, m.fff ? A.add(D.fromTo(V, J, Q), 0) : A.add(D.to(V, Q), 0), G = Math.max(G, V.length * Y)
                                        }
                                if (z += G, void 0 === t && (t = "isometric" === o[r].perspectiveType ? 0 : "local" === o[r].perspectiveType ? void 0 !== E.transformPerspective ? E.transformPerspective : m.fff && void 0 !== N.transfromPerspective ? N.transfromPerspective : o[r].perspective : o[r].perspective), m.knowTransformPerspective = t, m.pxundermask || void 0 !== H && (void 0 !== C && "hidden" === C.mask.overflow || "hidden" === M.mask.overflow)) A.add(tpGS.gsap.to(m.m, .001, {
                                    overflow: "hidden"
                                }), 0), "column" === m.type && A.add(tpGS.gsap.to(m.cbgmask, .001, {
                                    overflow: "hidden"
                                }), 0), m.btrans && (j && (j.rotationX = m.btrans.rX, j.rotationY = m.btrans.rY, j.rotationZ = m.btrans.rZ, j.opacity = m.btrans.o), H.rotationX = m.btrans.rX, H.rotationY = m.btrans.rY, H.rotationZ = m.btrans.rZ, H.opacity = m.btrans.o), m.fff ? A.add(tpGS.gsap.fromTo([m.m, m.cbgmask], z, o.clone(j), o.clone(H)), .001) : A.add(tpGS.gsap.to([m.m, m.cbgmask], z, o.clone(H)), .001);
                                else if (void 0 !== m.btrans) {
                                    var Z = {
                                        x: 0,
                                        y: 0,
                                        filter: "none",
                                        opacity: m.btrans.o,
                                        rotationX: m.btrans.rX,
                                        rotationY: m.btrans.rY,
                                        rotationZ: m.btrans.rZ,
                                        overflow: "visible"
                                    };
                                    0 === m.btrans.rX && 0 == m.btrans.rY || (m.maskHasPerspective = !0, Z.transformPerspective = t), A.add(tpGS.gsap.to(m.m, .001, Z), 0)
                                } else A.add(tpGS.gsap.to(m.m, .001, {
                                    clearProps: "transform",
                                    overflow: "visible"
                                }), 0);
                                E.force3D = "auto", m.fff ? (E.visibility = "visible", void 0 !== m.cbg && A.fromTo(m.cbg, z, N, E, 0), o[r].BUG_safari_clipPath && (N.clipPath || E.clipPath || m.spike) && (N.z && parseInt(N.z, 10) || (N.z = -1e-4), E.z && parseInt(E.z, 10) || (E.z = 0)), void 0 !== m.cbg && "column" === m.type ? A.fromTo(P, z, s(N), s(E), 0) : A.fromTo(P, z, N, E, 0), A.invalidate()) : ("frame_999" !== m.frame && (E.visibility = "visible"), void 0 !== m.cbg && A.to(m.cbg, z, E, 0), !o[r].BUG_safari_clipPath || !E.clipPath && !m.spike || E.z && parseInt(E.z, 10) || (E.z = 0 - .01 * Math.random()), void 0 !== m.cbg && "column" === m.type ? A.to(P, z, s(E), 0) : A.to(P, z, E, 0)), void 0 !== F && "object" != typeof F && "function" != typeof F && F.indexOf("SFXBounce") >= 0 && A.to(P, z, {
                                    scaleY: .5,
                                    scaleX: 1.3,
                                    ease: E.ease + "-squash",
                                    transformOrigin: "bottom"
                                }, 1e-4);
                                var K = "trigger" !== e.mode && (!0 !== f && "skiprest" !== f || "rebuild" !== e.mode) || e.frame === I || void 0 === M.timeline.start || !o.isNumeric(M.timeline.start) ? "+=0" === M.timeline.start || void 0 === M.timeline.start ? "+=0.05" : parseInt(M.timeline.start, 0) / 1e3 : "+=" + parseInt(M.timeline.startRelative, 0) / 1e3;
                                m.timeline.addLabel(I, K), m.timeline.add(A, K), m.timeline.addLabel(I + "_end", "+=0.01"), A.eventCallback("onStart", c, [{
                                    id: r,
                                    frame: I,
                                    L: a,
                                    tPE: t
                                }]), "true" == m.animationonscroll || 1 == m.animationonscroll ? (A.eventCallback("onUpdate", p, [{
                                    id: r,
                                    frame: I,
                                    L: a
                                }]), A.smoothChildTiming = !0) : A.eventCallback("onUpdate", p, [{
                                    id: r,
                                    frame: I,
                                    L: a
                                }]), A.eventCallback("onComplete", g, [{
                                    id: r,
                                    frame: I,
                                    L: a,
                                    tPE: t
                                }])
                            }
                        }
                    }
                if (void 0 !== m.frames.loop) {
                    var $ = parseInt(m.frames.loop.timeline.speed, 0) / 1e3,
                        ee = parseInt(m.frames.loop.timeline.start) / 1e3 || 0,
                        ie = "trigger" !== e.mode && "frame_999" !== e.frame || "frame_999" !== e.frame ? .2 : 0,
                        te = ee + ie;
                    m.loop = {
                        root: tpGS.gsap.timeline({}),
                        preset: tpGS.gsap.timeline({}),
                        move: tpGS.gsap.timeline({
                            repeat: -1,
                            yoyo: m.frames.loop.timeline.yoyo_move
                        }),
                        rotate: tpGS.gsap.timeline({
                            repeat: -1,
                            yoyo: m.frames.loop.timeline.yoyo_rotate
                        }),
                        scale: tpGS.gsap.timeline({
                            repeat: -1,
                            yoyo: m.frames.loop.timeline.yoyo_scale
                        }),
                        filter: tpGS.gsap.timeline({
                            repeat: -1,
                            yoyo: m.frames.loop.timeline.yoyo_filter
                        })
                    };
                    var ae = m.frames.loop.frame_0,
                        re = m.frames.loop.frame_999,
                        oe = "blur(" + parseInt(ae.blur || 0, 0) + "px) grayscale(" + parseInt(ae.grayscale || 0, 0) + "%) brightness(" + parseInt(ae.brightness || 100, 0) + "%)",
                        se = "blur(" + (re.blur || 0) + "px) grayscale(" + (re.grayscale || 0) + "%) brightness(" + (re.brightness || 100) + "%)";
                    if (m.loop.root.add(m.loop.preset, 0), m.loop.root.add(m.loop.move, ie), m.loop.root.add(m.loop.rotate, ie), m.loop.root.add(m.loop.scale, ie), m.loop.root.add(m.loop.filter, ie), "blur(0px) grayscale(0%) brightness(100%)" === oe && "blur(0px) grayscale(0%) brightness(100%)" === se && (oe = "none", se = "none"), re.originX = ae.originX, re.originY = ae.originY, re.originZ = ae.originZ, void 0 === t && (t = "isometric" === o[r].perspectiveType ? 0 : "local" === o[r].perspectiveType && void 0 !== E ? void 0 !== E.transformPerspective ? E.transformPerspective : m.fff && void 0 !== N.transfromPerspective ? N.transfromPerspective : o[r].perspective : o[r].perspective), m.frames.loop.timeline.curved) {
                        var ne = parseInt(m.frames.loop.timeline.radiusAngle, 0) || 0,
                            de = [{
                                x: (ae.x - ae.xr) * o[r].CM.w,
                                y: 0,
                                z: (ae.z - ae.zr) * o[r].CM.w
                            }, {
                                x: 0,
                                y: (ae.y + ae.yr) * o[r].CM.w,
                                z: 0
                            }, {
                                x: (re.x + re.xr) * o[r].CM.w,
                                y: 0,
                                z: (re.z + re.zr) * o[r].CM.w
                            }, {
                                x: 0,
                                y: (re.y - re.yr) * o[r].CM.w,
                                z: 0
                            }],
                            le = {
                                type: "thru",
                                curviness: m.frames.loop.timeline.curviness,
                                path: [],
                                autoRotate: m.frames.loop.timeline.autoRotate
                            };
                        for (var ce in de) de.hasOwnProperty(ce) && (le.path[ce] = de[ne], ne = ++ne == de.length ? 0 : ne);
                        ("trigger" !== e.mode && "frame_999" !== e.frame || "frame_999" !== e.frame) && m.loop.preset.fromTo(m.lp, ie, {
                            "-webkit-filter": oe,
                            filter: oe,
                            x: 0,
                            y: 0,
                            z: 0,
                            minWidth: m._incolumn || m._ingroup ? "100%" : void 0 === m.eow ? 0 : m.eow,
                            minHeight: m._incolumn || m._ingroup ? "100%" : void 0 === m.eoh ? 0 : m.eoh,
                            scaleX: 1,
                            scaleY: 1,
                            skewX: 0,
                            skewY: 0,
                            rotationX: 0,
                            rotationY: 0,
                            rotationZ: 0,
                            transformPerspective: t,
                            transformOrigin: re.originX + " " + re.originY + " " + re.originZ,
                            opacity: 1
                        }, d({
                            x: le.path[3].x,
                            y: le.path[3].y,
                            z: le.path[3].z,
                            scaleX: ae.scaleX,
                            skewX: ae.skewX,
                            skewY: ae.skewY,
                            scaleY: ae.scaleY,
                            rotationX: ae.rotationX,
                            rotationY: ae.rotationY,
                            rotationZ: ae.rotationZ,
                            "-webkit-filter": oe,
                            filter: oe,
                            ease: "sine.inOut",
                            opacity: ae.opacity
                        }), 0), n(le) && m.loop.move.to(m.lp, m.frames.loop.timeline.yoyo_move ? $ / 2 : $, {
                            motionPath: le,
                            ease: m.frames.loop.timeline.ease
                        })
                    } else("trigger" !== e.mode && "frame_999" !== e.frame || "frame_999" !== e.frame) && m.loop.preset.fromTo(m.lp, ie, {
                        "-webkit-filter": oe,
                        filter: oe,
                        x: 0,
                        y: 0,
                        z: 0,
                        minWidth: m._incolumn || m._ingroup ? "100%" : void 0 === m.eow ? 0 : m.eow,
                        minHeight: m._incolumn || m._ingroup ? "100%" : void 0 === m.eoh ? 0 : m.eoh,
                        scaleX: 1,
                        scaleY: 1,
                        skewX: 0,
                        skewY: 0,
                        rotationX: 0,
                        rotationY: 0,
                        rotationZ: 0,
                        transformPerspective: t,
                        transformOrigin: re.originX + " " + re.originY + " " + re.originZ,
                        opacity: 1
                    }, d({
                        x: ae.x * o[r].CM.w,
                        y: ae.y * o[r].CM.w,
                        z: ae.z * o[r].CM.w,
                        scaleX: ae.scaleX,
                        skewX: ae.skewX,
                        skewY: ae.skewY,
                        scaleY: ae.scaleY,
                        rotationX: ae.rotationX,
                        rotationY: ae.rotationY,
                        rotationZ: ae.rotationZ,
                        ease: "sine.out",
                        opacity: ae.opacity,
                        "-webkit-filter": oe,
                        filter: oe
                    }), 0), m.loop.move.to(m.lp, m.frames.loop.timeline.yoyo_move ? $ / 2 : $, {
                        x: re.x * o[r].CM.w,
                        y: re.y * o[r].CM.w,
                        z: re.z * o[r].CM.w,
                        ease: m.frames.loop.timeline.ease
                    });
                    m.loop.rotate.to(m.lp, m.frames.loop.timeline.yoyo_rotate ? $ / 2 : $, {
                        rotationX: re.rotationX,
                        rotationY: re.rotationY,
                        rotationZ: re.rotationZ,
                        ease: m.frames.loop.timeline.ease
                    }), m.loop.scale.to(m.lp, m.frames.loop.timeline.yoyo_scale ? $ / 2 : $, d({
                        scaleX: re.scaleX,
                        scaleY: re.scaleY,
                        skewX: re.skewX,
                        skewY: re.skewY,
                        ease: m.frames.loop.timeline.ease
                    }));
                    var pe = {
                        opacity: re.opacity || 1,
                        ease: m.frames.loop.timeline.ease,
                        "-webkit-filter": se,
                        filter: se
                    };
                    m.loop.filter.to(m.lp, m.frames.loop.timeline.yoyo_filter ? $ / 2 : $, pe), m.timeline.add(m.loop.root, te)
                }
                if (void 0 !== m.frames.frame_hover && ("start" === e.mode || void 0 === m.hoverframeadded)) {
                    m.hoverframeadded = !0;
                    var ge = m.frames.frame_hover.timeline.speed / 1e3;
                    ge = 0 === ge ? 1e-5 : ge, m.hoverlistener || (m.hoverlistener = !0, o.document.on("mouseenter mousemove", ("column" === m.type ? "#" + m.cbg[0].id + "," : "") + "#" + m.c[0].id, function(e) {
                        if ("mousemove" !== e.type || !0 !== m.ignoremousemove) {
                            if (m.animationonscroll || m.readyForHover) {
                                if (m.elementHovered = !0, m.hovertimeline || (m.hovertimeline = tpGS.gsap.timeline({
                                        paused: !0
                                    })), 0 == m.hovertimeline.progress() && (void 0 === m.lastHoveredTimeStamp || (new Date).getTime() - m.lastHoveredTimeStamp > 150) && (m.ignoremousemove = !0, m.hovertimeline.to([m.m, m.cbgmask], ge, {
                                        overflow: m.frames.frame_hover.mask ? "hidden" : "visible"
                                    }, 0), "column" === m.type && m.hovertimeline.to(m.cbg, ge, o.clone(h(m.frames.frame_hover, m.cbg, {
                                        bgCol: m.bgcol,
                                        bg: m.styleProps.background
                                    })), 0), "text" !== m.type && "button" !== m.type || void 0 === m.splitText || !1 === m.splitText || m.hovertimeline.to([m.splitText.lines, m.splitText.words, m.splitText.chars], ge, {
                                        color: m.frames.frame_hover.color,
                                        ease: m.frames.frame_hover.transform.ease
                                    }, 0), "column" === m.type ? m.hovertimeline.to(m.c, ge, s(o.clone(h(m.frames.frame_hover, m.c, {
                                        bgCol: m.bgcol,
                                        bg: m.styleProps.background
                                    }))), 0) : m.hovertimeline.to(m.c, ge, o.clone(h(m.frames.frame_hover, m.c, {
                                        bgCol: m.bgcol,
                                        bg: m.styleProps.background
                                    })), 0), "svg" === m.type)) {
                                    m.svgHTemp = o.clone(m.svgH);
                                    var i = Array.isArray(m.svgHTemp.fill) ? m.svgHTemp.fill[o[r].level] : m.svgHTemp.fill;
                                    m.svgHTemp.fill = i, m.hovertimeline.to(m.svg, ge, m.svgHTemp, 0), m.hovertimeline.to(m.svgPath, ge, {
                                        fill: i
                                    }, 0)
                                }
                                m.hovertimeline.play()
                            }
                            m.lastHoveredTimeStamp = (new Date).getTime()
                        }
                    }), o.document.on("mouseleave", ("column" === m.type ? "#" + m.cbg[0].id + "," : "") + "#" + m.c[0].id, function() {
                        m.elementHovered = !1, (m.animationonscroll || m.readyForHover) && void 0 !== m.hovertimeline && (m.hovertimeline.reverse(), m.hovertimeline.eventCallback("onReverseComplete", o.hoverReverseDone, [{
                            id: r,
                            L: a
                        }]))
                    }))
                }
                if (T || (m.lastRequestedMainFrame = "start" === e.mode ? "frame_1" : "continue" === e.mode ? void 0 === e.frame ? m.currentframe : e.frame : m.lastRequestedMainFrame), void 0 !== e.totime ? m.tSTART = e.totime : void 0 !== v && void 0 === e.frame ? m.tSTART = v : void 0 !== e.frame ? m.tSTART = e.frame : m.tSTART = 0, 0 === m.tSTART && void 0 === m.startedAnimOnce && void 0 === m.leftstage && void 0 === m.startedAnimOnce && !0 === m.hideonfirststart && "preset" === e.mode && (o[r]._L[a[0].id].pVisRequest = 0, m.hideonfirststart = !1), "frame_999" !== m.tSTART && "frame_999" !== m.triggeredFrame || !m.leftstage && void 0 !== m.startedAnimOnce) {
                    if ("true" != m.animationonscroll && 1 != m.animationonscroll ? m.timeline.play(m.tSTART) : m.timeline.time(m.tSTART), jQuery.inArray(m.type, ["group", "row", "column"]) >= 0 && void 0 !== e.frame) {
                        if (void 0 === m.childrenJS)
                            for (var W in m.childrenJS = {}, o[r]._L) void 0 !== o[r]._L[W]._lig && void 0 !== o[r]._L[W]._lig[0] && o[r]._L[W]._lig[0].id === a[0].id && o[r]._L[W]._lig[0].id !== o[r]._L[W].c[0].id && (m.childrenJS[o[r]._L[W].c[0].id] = o[r]._L[W].c);
                        e.frame = "0" == e.frame ? "frame_0" : e.frame, e.frame = "1" == e.frame ? "frame_1" : e.frame, e.frame = "999" == e.frame ? "frame_999" : e.frame;
                        var ue = void 0 === e.totime ? void 0 !== m.frames[e.frame].timeline.startAbsolute ? parseInt(m.frames[e.frame].timeline.startAbsolute, 0) / 1e3 : void 0 !== m.frames[e.frame].timeline.start ? o.isNumeric(m.frames[e.frame].timeline.start) ? parseInt(m.frames[e.frame].timeline.start, 0) / 1e3 : 0 : .001 : e.totime;
                        if (!0 === e.updateChildren)
                            for (var W in m.childrenJS) m.childrenJS.hasOwnProperty(W) && o.renderLayerAnimation({
                                layer: m.childrenJS[W],
                                fastforward: !1,
                                id: r,
                                mode: "continue",
                                updateChildren: !0,
                                totime: ue
                            });
                        else
                            for (var W in m.childrenJS) m.childrenJS.hasOwnProperty(W) && o[r]._L[W].pausedTrueParrent && (o.renderLayerAnimation({
                                layer: m.childrenJS[W],
                                fastforward: !1,
                                id: r,
                                mode: "continue",
                                updateChildren: !0,
                                totime: ue
                            }), o[r]._L[W].pausedTrueParrent = !1)
                    }
                } else;
            }
        }
    });
    var s = function(e) {
            var i = o.clone(e);
            return delete i.backgroundColor, delete i.background, delete i.backgroundImage, delete i.borderSize, delete i.borderStyle, delete i["backdrop-filter"], i
        },
        n = function(e) {
            if (void 0 !== e && void 0 !== e.path && Array.isArray(e.path)) {
                var i = 0,
                    t = 0;
                for (var a in e.path) !e.path.hasOwnProperty(a) || i > 0 || t > 0 || (i += e.path[a].x, t += e.path[a].y);
                return 0 != i || 0 != t
            }
        },
        d = function(e) {
            return void 0 === e.skewX && delete e.skewX, void 0 === e.skewY && delete e.skewY, e
        },
        l = function(e) {
            e.from = "edge" === e.from ? "edges" : e.from;
            var i = tpGS.gsap.utils.distribute(e);
            return function(t, a, r) {
                return i(t, a, r) + (t <= r.length / 2 ? 0 : e.offset || 0)
            }
        },
        c = function(e) {
            o[e.id].BUG_safari_clipPath && e.L[0].classList.remove("rs-pelock"), (o[e.id]._L[e.L[0].id]._ingroup || o[e.id]._L[e.L[0].id]._incolumn || o[e.id]._L[e.L[0].id]._inrow) && void 0 !== o[e.id]._L[o[e.id]._L[e.L[0].id]._ligid] && void 0 !== o[e.id]._L[o[e.id]._L[e.L[0].id]._ligid].timeline && (o[e.id]._L[o[e.id]._L[e.L[0].id]._ligid].timeline.isActive() || void 0 === o[e.id]._L[e.L[0].id] || void 0 === o[e.id]._L[e.L[0].id].frames[o[e.id]._L[e.L[0].id].timeline.currentLabel()] || (null == o[e.id]._L[o[e.id]._L[e.L[0].id]._ligid].timezone || o[e.id]._L[o[e.id]._L[e.L[0].id]._ligid].timezone.to <= parseInt(o[e.id]._L[e.L[0].id].frames[o[e.id]._L[e.L[0].id].timeline.currentLabel()].timeline.start, 0)) && !0 !== o[e.id]._L[e.L[0].id].animOnScrollForceDisable && (o[e.id]._L[e.L[0].id].pausedTrueParrent = !0, o[e.id]._L[e.L[0].id].timeline.pause()));
            var i = o[e.id]._L[e.L[0].id],
                t = i.hovertimeline;
            t && t.time() > 0 && (t.pause(), t.time(0), t.kill(), delete i.hovertimeline), delete o[e.id]._L[e.L[0].id].childrenAtStartNotVisible, o[e.id]._L[e.L[0].id].pVisRequest = 1;
            var a = {
                layer: e.L
            };
            o[e.id]._L[e.L[0].id].ignoremousemove = !1, o[e.id]._L[e.L[0].id].leftstage = !1, o[e.id]._L[e.L[0].id].readyForHover = !1, void 0 !== o[e.id]._L[e.L[0].id].layerLoop && o[e.id]._L[e.L[0].id].layerLoop.from === e.frame && o[e.id]._L[e.L[0].id].layerLoop.count++, "frame_1" === e.frame && "Safari" === window.RSBrowser && void 0 === o[e.id]._L[e.L[0].id].safariRenderIssue && (tpGS.gsap.set([o[e.id]._L[e.L[0].id].c], {
                opacity: 1
            }), o[e.id]._L[e.L[0].id].safariRenderIssue = !0), "frame_999" !== e.frame && (o[e.id]._L[e.L[0].id].startedAnimOnce = !0, o[e.id]._L[e.L[0].id].pPeventsRequest = o[e.id]._L[e.L[0].id].noPevents ? "none" : "auto"), a.eventtype = "frame_0" === e.frame || "frame_1" === e.frame ? "enterstage" : "frame_999" === e.frame ? "leavestage" : "framestarted", o[e.id]._L[e.L[0].id]._ingroup && !0 !== o[e.id]._L[o[e.id]._L[e.L[0].id]._lig[0].id].frames.frame_1.timeline.waitoncall && (o[e.id]._L[o[e.id]._L[e.L[0].id]._lig[0].id].pVisRequest = 1), o.requestLayerUpdates(e.id, a.eventtype, e.L[0].id, void 0 !== o[e.id]._L[e.L[0].id].frames[e.frame] && void 0 !== o[e.id]._L[e.L[0].id].frames[e.frame].timeline && 0 == o[e.id]._L[e.L[0].id].frames[e.frame].timeline.usePerspective ? e.tPE : "ignore"), a.id = e.id, a.layerid = e.L[0].id, a.layertype = o[e.id]._L[e.L[0].id].type, a.frame_index = e.frame, a.layersettings = o[e.id]._L[e.L[0].id], o[e.id].c.trigger("revolution.layeraction", [a]), "enterstage" === a.eventtype && o.toggleState(o[e.id]._L[e.L[0].id].layertoggledby), "frame_1" === e.frame && o.animcompleted(e.L, e.id)
        },
        p = function(e) {
            "frame_999" === e.frame && (o[e.id]._L[e.L[0].id].pVisRequest = 1, o[e.id]._L[e.L[0].id].pPeventsRequest = o[e.id]._L[e.L[0].id].noPevents ? "none" : "auto", o[e.id]._L[e.L[0].id].leftstage = !1, window.requestAnimationFrame(function() {
                o.requestLayerUpdates(e.id, "update", e.L[0].id)
            }))
        },
        g = function(e) {
            var i = !0;
            if ("column" === o[e.id]._L[e.L[0].id].type || "row" === o[e.id]._L[e.L[0].id].type || "group" === o[e.id]._L[e.L[0].id].type) {
                var t = o[e.id]._L[e.L[0].id].timeline.currentLabel(),
                    a = jQuery.inArray(t, o[e.id]._L[e.L[0].id].ford);
                a++, a = o[e.id]._L[e.L[0].id].ford.length > a ? o[e.id]._L[e.L[0].id].ford[a] : t, void 0 !== o[e.id]._L[e.L[0].id].frames[a] && void 0 !== o[e.id]._L[e.L[0].id].frames[t] && (o[e.id]._L[e.L[0].id].timezone = {
                    from: parseInt(o[e.id]._L[e.L[0].id].frames[t].timeline.startAbsolute, 0),
                    to: parseInt(o[e.id]._L[e.L[0].id].frames[a].timeline.startAbsolute, 0)
                })
            }
            if ("frame_999" !== e.frame && o[e.id].isEdge && "shape" === o[e.id]._L[e.L[0].id].type) {
                var r = o[e.id]._L[e.L[0].id].c[0].style.opacity;
                o[e.id]._L[e.L[0].id].c[0].style.opacity = r - 1e-4, tpGS.gsap.set(o[e.id]._L[e.L[0].id].c[0], {
                    opacity: r - .001,
                    delay: .05
                }), tpGS.gsap.set(o[e.id]._L[e.L[0].id].c[0], {
                    opacity: r,
                    delay: .1
                })
            }
            var s = {};
            s.layer = e.L, s.eventtype = "frame_0" === e.frame || "frame_1" === e.frame ? "enteredstage" : "frame_999" === e.frame ? "leftstage" : "frameended", o[e.id]._L[e.L[0].id].readyForHover = !0, s.layertype = o[e.id]._L[e.L[0].id].type, s.frame_index = e.frame, s.layersettings = o[e.id]._L[e.L[0].id], o[e.id].c.trigger("revolution.layeraction", [s]), "frame_999" === e.frame && "leftstage" === s.eventtype ? (o[e.id]._L[e.L[0].id].leftstage = !0, o[e.id]._L[e.L[0].id].pVisRequest = 0, o[e.id]._L[e.L[0].id].pPeventsRequest = "none", i = !1, window.requestAnimationFrame(function() {
                o.requestLayerUpdates(e.id, "leftstage", e.L[0].id)
            })) : (e.L[0].id, void 0 !== o[e.id]._L[e.L[0].id].frames[e.frame] && void 0 !== o[e.id]._L[e.L[0].id].frames[e.frame].timeline && 0 == o[e.id]._L[e.L[0].id].frames[e.frame].timeline.usePerspective && window.requestAnimationFrame(function() {
                o.requestLayerUpdates(e.id, "frameended", e.L[0].id, e.tPE)
            })), "leftstage" === s.eventtype && void 0 !== o[e.id].videos && void 0 !== o[e.id].videos[e.L[0].id] && o.stopVideo && o.stopVideo(e.L, e.id), "column" === o[e.id]._L[e.L[0].id].type && tpGS.gsap.to(o[e.id]._L[e.L[0].id].cbg, .01, {
                visibility: "visible"
            }), "leftstage" === s.eventtype && (o.unToggleState(e.layertoggledby), "video" === o[e.id]._L[e.L[0].id].type && o.resetVideo && setTimeout(function() {
                o.resetVideo(e.L, e.id)
            }, 100)), o[e.id].BUG_safari_clipPath && !i && e.L[0].classList.add("rs-pelock"), void 0 !== o[e.id]._L[e.L[0].id].layerLoop && o[e.id]._L[e.L[0].id].layerLoop.to === e.frame && (-1 == o[e.id]._L[e.L[0].id].layerLoop.repeat || o[e.id]._L[e.L[0].id].layerLoop.repeat > o[e.id]._L[e.L[0].id].layerLoop.count) && o.renderLayerAnimation({
                layer: o[e.id]._L[e.L[0].id].c,
                frame: o[e.id]._L[e.L[0].id].layerLoop.from,
                updateChildren: o[e.id]._L[e.L[0].id].layerLoop.children,
                mode: "continue",
                fastforward: !0 === o[e.id]._L[e.L[0].id].layerLoop.keep,
                id: e.id
            })
        },
        u = function(e) {
            if (void 0 === e) return "";
            var i = "";
            return o.isChrome8889 && 0 === e.blur && (e.blur = .05), i = void 0 !== e.blur ? "blur(" + (e.blur || 0) + "px)" : "", i += void 0 !== e.grayscale ? (i.length > 0 ? " " : "") + "grayscale(" + (e.grayscale || 0) + "%)" : "", "" === (i += void 0 !== e.brightness ? (i.length > 0 ? " " : "") + "brightness(" + (e.brightness || 100) + "%)" : "") ? "none" : i
        },
        h = function(e, i, t) {
            var a, r = o.clone(e.transform);
            if ((r.originX || r.originY || r.originZ) && (r.transformOrigin = (void 0 === r.originX ? "50%" : r.originX) + " " + (void 0 === r.originY ? "50%" : r.originY) + " " + (void 0 === r.originZ ? "50%" : r.originZ), delete r.originX, delete r.originY, delete r.originZ), void 0 !== e && void 0 !== e.filter && (r.filter = u(e.filter), r["-webkit-filter"] = r.filter), r.color = void 0 === r.color ? "rgba(255,255,255,1)" : r.color, r.force3D = "auto", void 0 !== r.borderRadius && ((a = r.borderRadius.split(" ")).length, r.borderTopLeftRadius = a[0], r.borderTopRightRadius = a[1], r.borderBottomRightRadius = a[2], r.borderBottomLeftRadius = a[3], delete r.borderRadius), void 0 !== r.borderWidth && ((a = r.borderWidth.split(" ")).length, r.borderTopWidth = a[0], r.borderRightWidth = a[1], r.borderBottomWidth = a[2], r.borderLeftWidth = a[3], delete r.borderWidth), void 0 === t.bg || -1 === t.bg.indexOf("url")) {
                var s = -1 !== t.bgCol.search("gradient"),
                    n = r.backgroundImage && "string" == typeof r.backgroundImage && -1 !== r.backgroundImage.search("gradient");
                n && s ? (180 !== v(t.bgCol) && 180 == v(r.backgroundImage) && (r.backgroundImage = m(r.backgroundImage, 180)), r.backgroundImage = tpGS.getSSGColors(t.bgCol, r.backgroundImage, void 0 === r.gs ? "fading" : r.gs).to) : n && !s ? r.backgroundImage = tpGS.getSSGColors(t.bgCol, r.backgroundImage, void 0 === r.gs ? "fading" : r.gs).to : !n && s && (r.backgroundImage = tpGS.getSSGColors(t.bgCol, r.backgroundColor, void 0 === r.gs ? "fading" : r.gs).to)
            }
            return delete r.gs, r
        },
        m = function(e, i) {
            var t = (e = e.split("("))[0];
            return e.shift(), t + "(" + i + "deg, " + e.join("(")
        },
        v = function(e) {
            if (-1 !== e.search("deg,")) {
                var i = e.split("deg,")[0];
                if (-1 !== i.search(/\(/)) return parseInt(i.split("(")[1], 10)
            }
            return 180
        },
        f = function(e, i) {
            if (void 0 !== e && e.indexOf("oc:t") >= 0) return {};
            e = void 0 === e ? "" : e.split(";");
            var t = {
                fill: o.revToResp("#ffffff", o[i].rle),
                stroke: "transparent",
                "stroke-width": "0px",
                "stroke-dasharray": "0",
                "stroke-dashoffset": "0"
            };
            for (var a in e)
                if (e.hasOwnProperty(a)) {
                    var r = e[a].split(":");
                    switch (r[0]) {
                        case "c":
                            t.fill = o.revToResp(r[1], o[i].rle, void 0, "||");
                            break;
                        case "sw":
                            t["stroke-width"] = r[1];
                            break;
                        case "sc":
                            t.stroke = r[1];
                            break;
                        case "so":
                            t["stroke-dashoffset"] = r[1];
                            break;
                        case "sa":
                            t["stroke-dasharray"] = r[1];
                            break;
                        case "sall":
                            t.svgAll = r[1]
                    }
                }
            return t
        },
        y = function(e) {
            return "c" === e ? "center" : "l" === e ? "left" : "r" === e ? "right" : e
        },
        w = function(e) {
            var i = o[e.id]._L[e.layer[0].id],
                t = !1;
            if (i.splitText && !1 !== i.splitText && i.splitText.revert(), "text" === i.type || "button" === i.type) {
                for (var a in i.frames)
                    if (void 0 !== i.frames[a].chars || void 0 !== i.frames[a].words || void 0 !== i.frames[a].lines) {
                        t = !0;
                        break
                    }
                i.splitText = !!t && new tpGS.SplitText(i.c, {
                    type: "lines,words,chars",
                    wordsClass: "rs_splitted_words",
                    linesClass: "rs_splitted_lines",
                    charsClass: "rs_splitted_chars"
                })
            } else i.splitText = !1
        },
        b = function(e, i, t) {
            if (void 0 !== e && e.indexOf("block") >= 0) {
                var a = {};
                switch (0 === i[0].getElementsByClassName("tp-blockmask_in").length && (i.append('<div class="tp-blockmask_in"></div>'), i.append('<div class="tp-blockmask_out"></div>')), t = void 0 === t ? "power3.inOut" : t, a.ft = [{
                    scaleY: 1,
                    scaleX: 0,
                    transformOrigin: "0% 50%"
                }, {
                    scaleY: 1,
                    scaleX: 1,
                    ease: t,
                    immediateRender: !1
                }], a.t = {
                    scaleY: 1,
                    scaleX: 0,
                    transformOrigin: "100% 50%",
                    ease: t,
                    immediateRender: !1
                }, a.bmask_in = i.find(".tp-blockmask_in"), a.bmask_out = i.find(".tp-blockmask_out"), a.type = "block", e) {
                    case "blocktoleft":
                    case "blockfromright":
                        a.ft[0].transformOrigin = "100% 50%", a.t.transformOrigin = "0% 50%";
                        break;
                    case "blockfromtop":
                    case "blocktobottom":
                        a.ft = [{
                            scaleX: 1,
                            scaleY: 0,
                            transformOrigin: "50% 0%"
                        }, {
                            scaleX: 1,
                            scaleY: 1,
                            ease: t,
                            immediateRender: !1
                        }], a.t = {
                            scaleX: 1,
                            scaleY: 0,
                            transformOrigin: "50% 100%",
                            ease: t,
                            immediateRender: !1
                        };
                        break;
                    case "blocktotop":
                    case "blockfrombottom":
                        a.ft = [{
                            scaleX: 1,
                            scaleY: 0,
                            transformOrigin: "50% 100%"
                        }, {
                            scaleX: 1,
                            scaleY: 1,
                            ease: t,
                            immediateRender: !1
                        }], a.t = {
                            scaleX: 1,
                            scaleY: 0,
                            transformOrigin: "50% 0%",
                            ease: t,
                            immediateRender: !1
                        }
                }
                return a.ft[1].overwrite = "auto", a.t.overwrite = "auto", a
            }
            return !1
        },
        _ = function(e, i, t, a, r) {
            return 0 === o[r].sdir || void 0 === i ? e : ("mask" === t ? a = "x" === a ? "mX" : "y" === a ? "mY" : a : "chars" === t ? a = "x" === a ? "cX" : "y" === a ? "cY" : "dir" === a ? "cD" : a : "words" === t ? a = "x" === a ? "wX" : "y" === a ? "wY" : "dir" === a ? "wD" : a : "lines" === t && (a = "x" === a ? "lX" : "y" === a ? "lY" : "dir" === a ? "lD" : a), void 0 === i[a] || !1 === i[a] ? e : void 0 !== i && !0 === i[a] ? "t" === e || "top" === e ? "b" : "b" === e || "bottom" === e ? "t" : "l" === e || "left" === e ? "r" : "r" === e || "right" === e ? "l" : -1 * e : void 0)
        },
        S = function(e) {
            var i, t = o[e.id]._L[e.layer[0].id],
                a = void 0 === e.source ? o.clone(e.frame.transform) : o.clone(e.frame[e.source]),
                r = {
                    originX: "50%",
                    originY: "50%",
                    originZ: "0"
                },
                s = void 0 !== t._lig ? o[e.id]._L[t._lig[0].id].eow : o[e.id].conw,
                n = void 0 !== t._lig ? o[e.id]._L[t._lig[0].id].eoh : o[e.id].conh;
            for (var d in a)
                if (a.hasOwnProperty(d)) {
                    if (a[d] = "object" == typeof a[d] ? a[d][o[e.id].level] : a[d], "inherit" === a[d] || "delay" === d || "direction" === d || "use" === d) delete a[d];
                    else if ("originX" === d || "originY" === d || "originZ" === d) r[d] = a[d], delete a[d];
                    else if (o.isNumeric(a[d], 0)) a[d] = _(a[d], e.frame.reverse, e.target, d, e.id, e.id);
                    else if ("r" === a[d][0] && "a" === a[d][1] && "(" === a[d][3]) a[d] = a[d].replace("ran", "random");
                    else if (a[d].indexOf("cyc(") >= 0) {
                        var l = a[d].replace("cyc(", "").replace(")", "").replace("[", "").replace("]", "").split("|");
                        a[d] = new function(e) {
                            return tpGS.gsap.utils.wrap(l, void 0)
                        }
                    } else if (a[d].indexOf("%") >= 0 && o.isNumeric(i = parseInt(a[d], 0))) a[d] = "x" === d ? _((t.eow || 0) * i / 100, e.frame.reverse, e.target, d, e.id) : "y" === d ? _((t.eoh || 0) * i / 100, e.frame.reverse, e.target, d, e.id) : a[d];
                    else {
                        a[d] = a[d].replace("[", "").replace("]", ""), a[d] = _(a[d], e.frame.reverse, e.target, d, e.id, e.id);
                        var c = {
                            t: 0,
                            b: 0
                        };
                        switch ("row" === t.type && ("rev_row_zone_top" === t.zone && void 0 !== o[e.id].topZones[t.slideIndex] && void 0 !== o[e.id].topZones[t.slideIndex][0] ? c = {
                            t: 0,
                            b: 0
                        } : "rev_row_zone_middle" === t.zone && void 0 !== o[e.id].middleZones[t.slideIndex] && void 0 !== o[e.id].middleZones[t.slideIndex][0] ? c = {
                            t: Math.round(o[e.id].module.height / 2 - o[e.id].middleZones[t.slideIndex][0].offsetHeight / 2),
                            b: Math.round(o[e.id].module.height / 2 + o[e.id].middleZones[t.slideIndex][0].offsetHeight / 2)
                        } : "rev_row_zone_bottom" === t.zone && void 0 !== o[e.id].bottomZones[t.slideIndex] && void 0 !== o[e.id].bottomZones[t.slideIndex][0] && (c = {
                            t: Math.round(o[e.id].module.height - o[e.id].bottomZones[t.slideIndex][0].offsetHeight),
                            b: o[e.id].module.height + o[e.id].bottomZones[t.slideIndex][0].offsetHeight
                        })), a[d]) {
                            case "t":
                            case "top":
                                a[d] = 0 - (t.eoh || 0) - ("column" === t.type ? 0 : t.calcy || 0) - o.getLayerParallaxOffset(e.id, e.layer[0].id, "v") - ("row" === t.type && void 0 !== t.marginTop ? t.marginTop[o[e.id].level] : 0) - c.b;
                                break;
                            case "b":
                            case "bottom":
                                a[d] = n - ("column" === t.type || "row" === t.type ? 0 : t.calcy || 0) + o.getLayerParallaxOffset(e.id, e.layer[0].id, "v") - c.t;
                                break;
                            case "l":
                            case "left":
                                a[d] = 0 - ("row" === t.type ? t.pow : t.eow || 0) - ("column" === t.type ? 0 : "row" === t.type ? t.rowcalcx : t.calcx || 0) - o.getLayerParallaxOffset(e.id, e.layer[0].id, "h");
                                break;
                            case "r":
                            case "right":
                                a[d] = s - ("column" === t.type ? 0 : "row" === t.type ? t.rowcalcx : t.calcx || 0) + o.getLayerParallaxOffset(e.id, e.layer[0].id, "h");
                                break;
                            case "m":
                            case "c":
                            case "middle":
                            case "center":
                                a[d] = "x" === d ? _(s / 2 - ("column" === t.type ? 0 : t.calcx || 0) - (t.eow || 0) / 2, e.frame.reverse, e.target, d, e.id) : "y" === d ? _(n / 2 - ("column" === t.type ? 0 : t.calcy || 0) - (t.eoh || 0) / 2, e.frame.reverse, e.target, d, e.id) : a[d]
                        }
                    }
                    "skewX" === d && void 0 !== a[d] && (a.scaleY = void 0 === a.scaleY ? 1 : parseFloat(a.scaleY), a.scaleY *= Math.cos(parseFloat(a[d]) * tpGS.DEG2RAD)), "skewY" === d && void 0 !== a[d] && (a.scaleX = void 0 === a.scaleX ? 1 : parseFloat(a.scaleX), a.scaleX *= Math.cos(parseFloat(a[d]) * tpGS.DEG2RAD))
                }
            if (a.transformOrigin = r.originX + " " + r.originY + " " + r.originZ, !o[e.id].BUG_ie_clipPath && void 0 !== a.clip && void 0 !== t.clipPath && t.clipPath.use) {
                var p = "rectangle" == t.clipPath.type,
                    g = parseInt(a.clip, 0),
                    h = 100 - parseInt(a.clipB, 0),
                    m = Math.round(g / 2);
                switch (t.clipPath.origin) {
                    case "invh":
                        a.clipPath = "polygon(0% 0%, 0% 100%, " + g + "% 100%, " + g + "% 0%, 100% 0%, 100% 100%, " + h + "% 100%, " + h + "% 0%, 0% 0%)";
                        break;
                    case "invv":
                        a.clipPath = "polygon(100% 0%, 0% 0%, 0% " + g + "%, 100% " + g + "%, 100% 100%, 0% 100%, 0% " + h + "%, 100% " + h + "%, 100% 0%)";
                        break;
                    case "cv":
                        a.clipPath = p ? "polygon(" + (50 - m) + "% 0%, " + (50 + m) + "% 0%, " + (50 + m) + "% 100%, " + (50 - m) + "% 100%)" : "circle(" + g + "% at 50% 50%)";
                        break;
                    case "ch":
                        a.clipPath = p ? "polygon(0% " + (50 - m) + "%, 0% " + (50 + m) + "%, 100% " + (50 + m) + "%, 100% " + (50 - m) + "%)" : "circle(" + g + "% at 50% 50%)";
                        break;
                    case "l":
                        a.clipPath = p ? "polygon(0% 0%, " + g + "% 0%, " + g + "% 100%, 0% 100%)" : "circle(" + g + "% at 0% 50%)";
                        break;
                    case "r":
                        a.clipPath = p ? "polygon(" + (100 - g) + "% 0%, 100% 0%, 100% 100%, " + (100 - g) + "% 100%)" : "circle(" + g + "% at 100% 50%)";
                        break;
                    case "t":
                        a.clipPath = p ? "polygon(0% 0%, 100% 0%, 100% " + g + "%, 0% " + g + "%)" : "circle(" + g + "% at 50% 0%)";
                        break;
                    case "b":
                        a.clipPath = p ? "polygon(0% 100%, 100% 100%, 100% " + (100 - g) + "%, 0% " + (100 - g) + "%)" : "circle(" + g + "% at 50% 100%)";
                        break;
                    case "lt":
                        a.clipPath = p ? "polygon(0% 0%," + 2 * g + "% 0%, 0% " + 2 * g + "%)" : "circle(" + g + "% at 0% 0%)";
                        break;
                    case "lb":
                        a.clipPath = p ? "polygon(0% " + (100 - 2 * g) + "%, 0% 100%," + 2 * g + "% 100%)" : "circle(" + g + "% at 0% 100%)";
                        break;
                    case "rt":
                        a.clipPath = p ? "polygon(" + (100 - 2 * g) + "% 0%, 100% 0%, 100% " + 2 * g + "%)" : "circle(" + g + "% at 100% 0%)";
                        break;
                    case "rb":
                        a.clipPath = p ? "polygon(" + (100 - 2 * g) + "% 100%, 100% 100%, 100% " + (100 - 2 * g) + "%)" : "circle(" + g + "% at 100% 100%)";
                        break;
                    case "clr":
                        a.clipPath = p ? "polygon(0% 0%, 0% " + g + "%, " + (100 - g) + "% 100%, 100% 100%, 100% " + (100 - g) + "%, " + g + "% 0%)" : "circle(" + g + "% at 50% 50%)";
                        break;
                    case "crl":
                        a.clipPath = p ? "polygon(0% " + (100 - g) + "%, 0% 100%, " + g + "% 100%, 100% " + g + "%, 100% 0%, " + (100 - g) + "% 0%)" : "circle(" + g + "% at 50% 50%)"
                }!0 !== o.isFirefox(e.id) && (a["-webkit-clip-path"] = a.clipPath), a["clip-path"] = a.clipPath, delete a.clip, delete a.clipB
            } else delete a.clip;
            return "mask" !== e.target && (void 0 === e.frame || void 0 === e.frame.filter && !e.forcefilter || (a.filter = u(e.frame.filter), a["-webkit-filter"] = a.filter, a["backdrop-filter"] = function(e) {
                if (void 0 === e) return "";
                var i = "";
                return o.isChrome8889 && 0 === e.b_blur && (e.b_blur = .05), i = void 0 !== e.b_blur ? "blur(" + (e.b_blur || 0) + "px)" : "", i += void 0 !== e.b_grayscale ? (i.length > 0 ? " " : "") + "grayscale(" + (e.b_grayscale || 0) + "%)" : "", i += void 0 !== e.b_sepia ? (i.length > 0 ? " " : "") + "sepia(" + (e.b_sepia || 0) + "%)" : "", i += void 0 !== e.b_invert ? (i.length > 0 ? " " : "") + "invert(" + (e.b_invert || 0) + "%)" : "", "" == (i += void 0 !== e.b_brightness ? (i.length > 0 ? " " : "") + "brightness(" + (e.b_brightness || 100) + "%)" : "") ? "none" : i
            }(e.frame.filter), window.isSafari11 && (a["-webkit-backdrop-filter"] = a["backdrop-filter"]), window.isSafari11 && void 0 !== a.filter && void 0 === a.x && void 0 !== e.frame.filter && void 0 !== e.frame.filter.blur && (a.x = 1e-4)), jQuery.inArray(e.source, ["chars", "words", "lines"]) >= 0 && (void 0 !== e.frame[e.source].blur || e.forcefilter) && (a.filter = u(e.frame[e.source]), a["-webkit-filter"] = a.filter), delete a.grayscale, delete a.blur, delete a.brightness), a.ease = void 0 !== a.ease ? a.ease : void 0 === a.ease && void 0 !== e.ease || void 0 !== a.ease && void 0 !== e.ease && "inherit" === a.ease ? e.ease : e.frame.timeline.ease, a.ease = void 0 === a.ease || "default" === a.ease ? "power3.inOut" : a.ease, a
        },
        x = function(e, i, t, a, r) {
            var s, n, d = {},
                l = {},
                c = {};
            for (var p in a = void 0 === a ? "transform" : a, "loop" === r ? (c.autoRotate = !1, c.yoyo_filter = !1, c.yoyo_rotate = !1, c.yoyo_move = !1, c.yoyo_scale = !1, c.curved = !1, c.curviness = 2, c.ease = "none", c.speed = 1e3, c.st = 0, d.x = 0, d.y = 0, d.z = 0, d.xr = 0, d.yr = 0, d.zr = 0, d.scaleX = 1, d.scaleY = 1, d.originX = "50%", d.originY = "50%", d.originZ = "0", d.rotationX = "0deg", d.rotationY = "0deg", d.rotationZ = "0deg") : (c.speed = 300, t ? c.ease = "default" : d.ease = "default"), "sfx" === r && (d.fxc = "#ffffff"), e = e.split(";"))
                if (e.hasOwnProperty(p)) {
                    var g = e[p].split(":");
                    switch (g[0]) {
                        case "u":
                            d.use = "true" === g[1] || "t" === g[1] || fasle;
                            break;
                        case "c":
                            s = g[1];
                            break;
                        case "fxc":
                            d.fxc = g[1];
                            break;
                        case "bgc":
                            n = g[1];
                            break;
                        case "auto":
                            d.auto = "t" === g[1] || void 0 === g[1] || "true" === g[1];
                            break;
                        case "o":
                            d.opacity = g[1];
                            break;
                        case "oX":
                            d.originX = g[1];
                            break;
                        case "oY":
                            d.originY = g[1];
                            break;
                        case "oZ":
                            d.originZ = g[1];
                            break;
                        case "sX":
                            d.scaleX = g[1];
                            break;
                        case "sY":
                            d.scaleY = g[1];
                            break;
                        case "skX":
                            d.skewX = g[1];
                            break;
                        case "skY":
                            d.skewY = g[1];
                            break;
                        case "rX":
                            d.rotationX = g[1], 0 != g[1] && "0deg" !== g[1] && o.addSafariFix(i);
                            break;
                        case "rY":
                            d.rotationY = g[1], 0 != g[1] && "0deg" !== g[1] && o.addSafariFix(i);
                            break;
                        case "rZ":
                            d.rotationZ = g[1];
                            break;
                        case "sc":
                            d.color = g[1];
                            break;
                        case "se":
                            d.effect = g[1];
                            break;
                        case "bos":
                            d.borderStyle = g[1];
                            break;
                        case "boc":
                            d.borderColor = g[1];
                            break;
                        case "td":
                            d.textDecoration = g[1];
                            break;
                        case "zI":
                            d.zIndex = g[1];
                            break;
                        case "tp":
                            d.transformPerspective = "isometric" === o[i].perspectiveType ? 0 : "global" === o[i].perspectiveType ? o[i].perspective : g[1];
                            break;
                        case "cp":
                            d.clip = parseInt(g[1], 0);
                            break;
                        case "cpb":
                            d.clipB = parseInt(g[1], 0);
                            break;
                        case "aR":
                            c.autoRotate = "t" == g[1];
                            break;
                        case "rA":
                            c.radiusAngle = g[1];
                            break;
                        case "yyf":
                            c.yoyo_filter = "t" == g[1];
                            break;
                        case "yym":
                            c.yoyo_move = "t" == g[1];
                            break;
                        case "yyr":
                            c.yoyo_rotate = "t" == g[1];
                            break;
                        case "yys":
                            c.yoyo_scale = "t" == g[1];
                            break;
                        case "crd":
                            c.curved = "t" == g[1];
                            break;
                        case "x":
                            d.x = "reverse" === r ? "t" === g[1] || !0 === g[1] || "true" == g[1] : "loop" === r ? parseInt(g[1], 0) : o.revToResp(g[1], o[i].rle);
                            break;
                        case "y":
                            d.y = "reverse" === r ? "t" === g[1] || !0 === g[1] || "true" == g[1] : "loop" === r ? parseInt(g[1], 0) : o.revToResp(g[1], o[i].rle);
                            break;
                        case "z":
                            d.z = "loop" === r ? parseInt(g[1], 0) : o.revToResp(g[1], o[i].rle), 0 != g[1] && o.addSafariFix(i);
                            break;
                        case "bow":
                            d.borderWidth = o.revToResp(g[1], 4, 0).toString().replace(/,/g, " ");
                            break;
                        case "bor":
                            d.borderRadius = o.revToResp(g[1], 4, 0).toString().replace(/,/g, " ");
                            break;
                        case "m":
                            d.mask = "t" === g[1] || "f" !== g[1] && g[1];
                            break;
                        case "iC":
                            d.instantClick = "t" === g[1] || "f" !== g[1] && g[1];
                            break;
                        case "xR":
                            d.xr = parseInt(g[1], 0), o.addSafariFix(i);
                            break;
                        case "yR":
                            d.yr = parseInt(g[1], 0), o.addSafariFix(i);
                            break;
                        case "zR":
                            d.zr = parseInt(g[1], 0);
                            break;
                        case "blu":
                            "loop" === r ? d.blur = parseInt(g[1], 0) : l.blur = parseInt(g[1], 0);
                            break;
                        case "gra":
                            "loop" === r ? d.grayscale = parseInt(g[1], 0) : l.grayscale = parseInt(g[1], 0);
                            break;
                        case "bri":
                            "loop" === r ? d.brightness = parseInt(g[1], 0) : l.brightness = parseInt(g[1], 0);
                            break;
                        case "bB":
                            l.b_blur = parseInt(g[1], 0);
                            break;
                        case "bG":
                            l.b_grayscale = parseInt(g[1], 0);
                            break;
                        case "bR":
                            l.b_brightness = parseInt(g[1], 0);
                            break;
                        case "bI":
                            l.b_invert = parseInt(g[1], 0);
                            break;
                        case "bS":
                            l.b_sepia = parseInt(g[1], 0);
                            break;
                        case "sp":
                            c.speed = parseInt(g[1], 0);
                            break;
                        case "d":
                            d.delay = parseInt(g[1], 0);
                            break;
                        case "crns":
                            c.curviness = parseInt(g[1], 0);
                            break;
                        case "st":
                            c.start = "w" === g[1] || "a" === g[1] ? "+=0" : g[1], c.waitoncall = "w" === g[1] || "a" === g[1];
                            break;
                        case "sA":
                            c.startAbsolute = g[1];
                            break;
                        case "sR":
                            c.startRelative = g[1];
                            break;
                        case "e":
                            t ? c.ease = g[1] : d.ease = g[1];
                            break;
                        default:
                            g[0].length > 0 && (d[g[0]] = "t" === g[1] || "f" !== g[1] && g[1])
                    }
                }
            var u = {
                timeline: c
            };
            return jQuery.isEmptyObject(l) || ("split" === r ? d = jQuery.extend(!0, d, l) : u.filter = l), "split" === r && (d.dir = void 0 === d.dir ? "start" : "backward" === d.dir ? "end" : "middletoedge" === d.dir ? "center" : "edgetomiddle" === d.dir ? "edge" : d.dir), jQuery.isEmptyObject(s) || (u.color = s), jQuery.isEmptyObject(n) || (u.bgcolor = n), u[a] = d, u
        },
        k = function(e, i) {
            var t = {},
                a = 0;
            if (void 0 === o[i]._rdF0) {
                var r = x("x:0;y:0;z:0;rX:0;rY:0;rZ:0;o:0;skX:0;skY:0;sX:0;sY:0;oX:50%;oY:50%;oZ:0;dir:forward;d:5", i).transform;
                o[i]._rdF0 = o[i]._rdF1 = {
                    transform: x("x:0;y:0;z:0;rX:0;rY:0;rZ:0;o:0;skX:0;skY:0;sX:0;sY:0;oX:50%;oY:50%;oZ:0;tp:600px", i, !0).transform,
                    mask: x("x:0;y:0", i, !0).transform,
                    chars: jQuery.extend(!0, {
                        blur: 0,
                        grayscale: 0,
                        brightness: 100
                    }, r),
                    words: jQuery.extend(!0, {
                        blur: 0,
                        grayscale: 0,
                        brightness: 100
                    }, r),
                    lines: jQuery.extend(!0, {
                        blur: 0,
                        grayscale: 0,
                        brightness: 100
                    }, r)
                }, o[i]._rdF1.transform.opacity = o[i]._rdF1.chars.opacity = o[i]._rdF1.words.opacity = o[i]._rdF1.lines.opacity = o[i]._rdF1.transform.scaleX = o[i]._rdF1.chars.scaleX = o[i]._rdF1.words.scaleX = o[i]._rdF1.lines.scaleX = o[i]._rdF1.transform.scaleY = o[i]._rdF1.chars.scaleY = o[i]._rdF1.words.scaleY = o[i]._rdF1.lines.scaleY = 1
            }
            for (var a in void 0 === e.frame_0 && (e.frame_0 = "x:0"), void 0 === e.frame_1 && (e.frame_1 = "x:0"), e.dddNeeded = !1, e.ford)
                if (e.ford.hasOwnProperty(a)) {
                    var s = e.ford[a];
                    if (e[s]) {
                        if (t[s] = x(e[s], i, !0), void 0 !== t[s].bgcolor && (e.bgcolinuse = !0), o[i].BUG_ie_clipPath && void 0 !== e.clipPath && e.clipPath.use && void 0 !== t[s].transform.clip) {
                            var n = "rectangle" === e.clipPath.type ? 100 - parseInt(t[s].transform.clip) : 100 - Math.min(100, 2 * parseInt(t[s].transform.clip));
                            switch (e.clipPath.origin) {
                                case "clr":
                                case "rb":
                                case "rt":
                                case "r":
                                    e[s + "_mask"] = "u:t;x:" + n + "%;y:0px;", t[s].transform.x = o.revToResp("-" + n + "%", o[i].rle);
                                    break;
                                case "crl":
                                case "lb":
                                case "lt":
                                case "cv":
                                case "l":
                                    e[s + "_mask"] = "u:t;x:-" + n + "%;y:0px;", t[s].transform.x = o.revToResp(n + "%", o[i].rle);
                                    break;
                                case "ch":
                                case "t":
                                    e[s + "_mask"] = "u:t;y:-" + n + "%;y:0px;", t[s].transform.y = o.revToResp(n + "%", o[i].rle);
                                    break;
                                case "b":
                                    e[s + "_mask"] = "u:t;y:" + n + "%;y:0px;", t[s].transform.y = o.revToResp("-" + n + "%", o[i].rle)
                            }
                            delete t[s].transform.clip, delete t[s].transform.clipB
                        }
                        e[s + "_mask"] && (t[s].mask = x(e[s + "_mask"], i).transform), null != t[s].mask && t[s].mask.use ? (t[s].mask.x = void 0 === t[s].mask.x ? 0 : t[s].mask.x, t[s].mask.y = void 0 === t[s].mask.y ? 0 : t[s].mask.y, delete t[s].mask.use, t[s].mask.overflow = "hidden") : t[s].mask = {
                            ease: "default",
                            overflow: "visible"
                        }, e[s + "_chars"] && (t[s].chars = x(e[s + "_chars"], i, void 0, void 0, "split").transform), e[s + "_words"] && (t[s].words = x(e[s + "_words"], i, void 0, void 0, "split").transform), e[s + "_lines"] && (t[s].lines = x(e[s + "_lines"], i, void 0, void 0, "split").transform), (e[s + "_chars"] || e[s + "_words"] || e[s + "_lines"]) && (t[s].dosplit = !0), t.frame_0 = void 0 === t.frame_0 ? {
                            transform: {}
                        } : t.frame_0, t[s].transform.auto && (t[s].transform = o.clone(t.frame_0.transform), t[s].transform.opacity = void 0 === t[s].transform.opacity ? 0 : t[s].transform.opacity, void 0 !== t.frame_0.filter && (t[s].filter = o.clone(t.frame_0.filter)), void 0 !== t.frame_0.mask && (t[s].mask = o.clone(t.frame_0.mask)), void 0 !== t.frame_0.chars && (t[s].chars = o.clone(t.frame_0.chars)), void 0 !== t.frame_0.words && (t[s].words = o.clone(t.frame_0.words)), void 0 !== t.frame_0.lines && (t[s].lines = o.clone(t.frame_0.lines)), void 0 === t.frame_0.chars && void 0 === t.frame_0.words && void 0 === t.frame_0.lines || (t[s].dosplit = !0)), e[s + "_sfx"] && (t[s].sfx = x(e[s + "_sfx"], i, !1, void 0, "sfx").transform), e[s + "_reverse"] && (t[s].reverse = x(e[s + "_reverse"], i, !1, void 0, "reverse").transform)
                    }
                }
            if (t.frame_0.dosplit && (t.frame_1.dosplit = !0), void 0 === e.frame_hover && void 0 === e.svgh || (t.frame_hover = x(void 0 === e.frame_hover ? "" : e.frame_hover, i), !o.ISM || "true" != t.frame_hover.transform.instantClick && 1 != t.frame_hover.transform.instantClick ? (delete t.frame_hover.transform.instantClick, t.frame_hover.transform.color = t.frame_hover.color, void 0 === t.frame_hover.transform.color && delete t.frame_hover.transform.color, void 0 !== t.frame_hover.bgcolor && t.frame_hover.bgcolor.indexOf("gradient") >= 0 ? t.frame_hover.transform.backgroundImage = t.frame_hover.bgcolor : void 0 !== t.frame_hover.bgcolor && (t.frame_hover.transform.backgroundColor = t.frame_hover.bgcolor), void 0 !== t.frame_hover.bgcolor && (e.bgcolinuse = !0), t.frame_hover.transform.opacity = void 0 === t.frame_hover.transform.opacity ? 1 : t.frame_hover.transform.opacity, t.frame_hover.mask = void 0 !== t.frame_hover.transform.mask && t.frame_hover.transform.mask, delete t.frame_hover.transform.mask, void 0 !== t.frame_hover.transform && ((t.frame_hover.transform.borderWidth || t.frame_hover.transform.borderStyle) && (t.frame_hover.transform.borderColor = void 0 === t.frame_hover.transform.borderColor ? "transparent" : t.frame_hover.transform.borderColor), "none" !== t.frame_hover.transform.borderStyle && void 0 === t.frame_hover.transform.borderWidth && (t.frame_hover.transform.borderWidth = o.revToResp(0, 4, 0).toString().replace(/,/g, " ")), void 0 === e.bordercolor && void 0 !== t.frame_hover.transform.borderColor && (e.bordercolor = "transparent"), void 0 === e.borderwidth && void 0 !== t.frame_hover.transform.borderWidth && (e.borderwidth = o.revToResp(t.frame_hover.transform.borderWidth, 4, 0)), void 0 === e.borderstyle && void 0 !== t.frame_hover.transform.borderStyle && (e.borderstyle = o.revToResp(t.frame_hover.transform.borderStyle, 4, 0)))) : delete t.frame_hover), void 0 !== e.tloop) {
                e.layerLoop = {
                    from: "frame_1",
                    to: "frame_999",
                    repeat: -1,
                    keep: !0,
                    children: !0
                };
                var d = e.tloop.split(";");
                for (var a in d)
                    if (d.hasOwnProperty(a)) {
                        var l = d[a].split(":");
                        switch (l[0]) {
                            case "f":
                                e.layerLoop.from = l[1];
                                break;
                            case "t":
                                e.layerLoop.to = l[1];
                                break;
                            case "k":
                                e.layerLoop.keep = l[1];
                                break;
                            case "r":
                                e.layerLoop.repeat = parseInt(l[1], 0);
                                break;
                            case "c":
                                e.layerLoop.children = l[1]
                        }
                    }
                e.layerLoop.count = 0
            }
            for (var a in (e.loop_0 || e.loop_999) && (t.loop = x(e.loop_999, i, !0, "frame_999", "loop"), t.loop.frame_0 = x(e.loop_0 || "", i, !1, void 0, "loop").transform), t.frame_0.transform.opacity = void 0 === t.frame_0.transform.opacity ? 0 : t.frame_0.transform.opacity, t.frame_1.transform.opacity = void 0 === t.frame_1.transform.opacity ? 1 : t.frame_1.transform.opacity, t.frame_999.transform.opacity = void 0 === t.frame_999.transform.opacity ? "inherit" : t.frame_999.transform.opacity, e.clipPath && e.clipPath.use && (t.frame_0.transform.clip = void 0 === t.frame_0.transform.clip ? 100 : parseInt(t.frame_0.transform.clip), t.frame_1.transform.clip = void 0 === t.frame_1.transform.clip ? 100 : parseInt(t.frame_1.transform.clip)), e.resetfilter = !1, e.useFilter = {
                    blur: !1,
                    grayscale: !1,
                    brightness: !1,
                    b_blur: !1,
                    b_grayscale: !1,
                    b_brightness: !1,
                    b_invert: !1,
                    b_sepia: !1
                }, t) void 0 !== t[a].filter && (e.resetfilter = !0, e.useFilter = R(e.useFilter, t[a].filter));
            if (!0 !== e.resetFilter && void 0 !== t.frame_hover && (e.useFilter = R(e.useFilter, t.frame_hover)), e.resetfilter)
                for (var a in t.frame_0.filter = o.clone(t.frame_0.filter), t.frame_0.filter = L(e.useFilter, o.clone(t.frame_0.filter)), t) void 0 !== t[a].filter && "frame_1" !== a && "frame_0" !== a && (t[a].filter = o.clone(t[a].filter), t[a].filter = L(e.useFilter, o.clone(t[a].filter)));
            return void 0 !== t.frame_0.filter && (t.frame_1.filter = o.clone(t.frame_1.filter), void 0 !== t.frame_0.filter.blur && 0 !== t.frame_1.filter.blur && (t.frame_1.filter.blur = void 0 === t.frame_1.filter.blur ? 0 : t.frame_1.filter.blur), void 0 !== t.frame_0.filter.brightness && 100 !== t.frame_1.filter.brightness && (t.frame_1.filter.brightness = void 0 === t.frame_1.filter.brightness ? 100 : t.frame_1.filter.brightness), void 0 !== t.frame_0.filter.grayscale && 0 !== t.frame_1.filter.grayscale && (t.frame_1.filter.grayscale = void 0 === t.frame_1.filter.grayscale ? 0 : t.frame_1.filter.grayscale), void 0 !== t.frame_0.filter.b_blur && 0 !== t.frame_1.filter.b_blur && (t.frame_1.filter.b_blur = void 0 === t.frame_1.filter.b_blur ? 0 : t.frame_1.filter.b_blur), void 0 !== t.frame_0.filter.b_brightness && 100 !== t.frame_1.filter.b_brightness && (t.frame_1.filter.b_brightness = void 0 === t.frame_1.filter.b_brightness ? 100 : t.frame_1.filter.b_brightness), void 0 !== t.frame_0.filter.b_grayscale && 0 !== t.frame_1.filter.b_grayscale && (t.frame_1.filter.b_grayscale = void 0 === t.frame_1.filter.b_grayscale ? 0 : t.frame_1.filter.b_grayscale), void 0 !== t.frame_0.filter.b_invert && 0 !== t.frame_1.filter.b_invert && (t.frame_1.filter.b_invert = void 0 === t.frame_1.filter.b_invert ? 0 : t.frame_1.filter.b_invert), void 0 !== t.frame_0.filter.b_sepia && 0 !== t.frame_1.filter.b_sepia && (t.frame_1.filter.b_sepia = void 0 === t.frame_1.filter.b_sepia ? 0 : t.frame_1.filter.b_sepia)), I(t, i, e)
        },
        L = function(e, i) {
            return e.blur ? i.blur = void 0 === i.blur ? 0 : i.blur : delete i.blur, e.brightness ? i.brightness = void 0 === i.brightness ? 100 : i.brightness : delete i.brightness, e.grayscale ? i.grayscale = void 0 === i.grayscale ? 0 : i.grayscale : delete i.grayscale, e.b_blur ? i.b_blur = void 0 === i.b_blur ? 0 : i.b_blur : delete i.b_blur, e.b_brightness ? i.b_brightness = void 0 === i.b_brightness ? 100 : i.b_brightness : delete i.b_brightness, e.b_grayscale ? i.b_grayscale = void 0 === i.b_grayscale ? 0 : i.b_grayscale : delete i.b_grayscale, e.b_invert ? i.b_invert = void 0 === i.b_invert ? 0 : i.b_invert : delete i.b_invert, e.b_sepia ? i.b_sepia = void 0 === i.b_sepia ? 0 : i.b_sepia : delete i.b_sepia, i
        },
        R = function(e, i) {
            return e.blur = !0 === e.blur || void 0 !== i.blur && 0 !== i.blur && "0px" !== i.blur, e.grayscale = !0 === e.grayscale || void 0 !== i.grayscale && 0 !== i.grayscale && "0%" !== i.grayscale, e.brightness = !0 === e.brightness || void 0 !== i.brightness && 100 !== i.brightness && "100%" !== i.brightness, e.b_blur = !0 === e.b_blur || void 0 !== i.b_blur && 0 !== i.b_blur && "0px" !== i.b_blur, e.b_grayscale = !0 === e.b_grayscale || void 0 !== i.b_grayscale && 0 !== i.b_grayscale && "0%" !== i.b_grayscale, e.b_brightness = !0 === e.b_brightness || void 0 !== i.b_brightness && 100 !== i.b_brightness && "100%" !== i.b_brightness, e.b_invert = !0 === e.b_invert || void 0 !== i.b_invert && 0 !== i.b_invert && "0%" !== i.b_invert, e.b_sepia = !0 === e.b_sepia || void 0 !== i.b_sepia && 0 !== i.b_sepia && "0%" !== i.b_sepia, e
        },
        O = function(e) {
            return void 0 !== e && (void 0 !== e.rotationY || void 0 !== e.rotationX || void 0 !== e.z)
        },
        I = function(e, i, t) {
            var a, r = {},
                s = ["transform", "words", "chars", "lines", "mask"],
                n = "global" == o[i].perspectiveType ? o[i].perspective : 0,
                d = !0,
                l = !1;
            for (var c in e) "loop" !== c && "frame_hover" !== c && (r = jQuery.extend(!0, r, e[c]));
            for (var c in e)
                if (e.hasOwnProperty(c) && (void 0 !== e[c].timeline && (e[c].timeline.usePerspective = !1), "loop" !== c && "frame_hover" !== c)) {
                    for (a in r.transform) r.transform.hasOwnProperty(a) && (r.transform[a] = void 0 === e[c].transform[a] ? "frame_0" === c ? o[i]._rdF0.transform[a] : "frame_1" === c ? o[i]._rdF1.transform[a] : r.transform[a] : e[c].transform[a], e[c].transform[a] = void 0 === e[c].transform[a] ? r.transform[a] : e[c].transform[a]);
                    for (var p = 1; p <= 4; p++)
                        for (a in r[s[p]]) r[s[p]].hasOwnProperty(a) && (e[c][s[p]] = void 0 === e[c][s[p]] ? {} : e[c][s[p]], r[s[p]][a] = void 0 === e[c][s[p]][a] ? "frame_0" === c ? o[i]._rdF0[s[p]][a] : "frame_1" === c ? o[i]._rdF1[s[p]][a] : r[s[p]][a] : e[c][s[p]][a], e[c][s[p]][a] = void 0 === e[c][s[p]][a] ? r[s[p]][a] : e[c][s[p]][a]);
                    void 0 !== e[c].timeline && !1 === e[c].timeline.usePerspective && void 0 !== e[c].transform && (void 0 !== e[c].transform.rotationY || void 0 !== e[c].transform.rotationX || void 0 !== e[c].transform.z || O(e[c].chars) || O(e[c].words) || O(e[c].lines)) && (n = "local" == o[i].perspectiveType ? void 0 === e[c].transform.transformPerspective ? 600 : e[c].transform.transformPerspective : n, e[c].timeline.usePerspective = !0, (O(e[c].chars) || O(e[c].words) || O(e[c].lines)) && !o.isFirefox(i) && (l = !0), d = !1)
                }
            if (l && requestAnimationFrame(function() {
                    tpGS.gsap.set(t.c, {
                        transformStyle: "preserve-3d"
                    })
                }), void 0 !== e.frame_0.timeline && e.frame_0.timeline.usePerspective && (e.frame_0.transform.transformPerspective = "local" === o[i].perspectiveType ? void 0 === e.frame_0.transform.transformPerspective ? n : e.frame_0.transform.transformPerspective : "isometric" === o[i].perspectiveType ? 0 : o[i].perspective), d)
                for (var c in e) {
                    if (!e.hasOwnProperty(c) || void 0 === e[c].transform) continue;
                    delete e[c].transform.transformPerspective
                }
            return e
        },
        T = function(e, i, t) {
            if (0 === e.length) return {};
            for (var a = e[0].getElementsByClassName(i), r = {}, o = 0; o < a.length; o++) void 0 !== t && -1 !== a[o].className.indexOf(t) || (r[a[o].id] = a[o]);
            if (void 0 !== e[1])
                for (a = e[1].getElementsByClassName(i), o = 0; o < a.length; o++) void 0 !== t && -1 !== a[o].className.indexOf(t) || (r[a[o].id] = a[o]);
            return r
        },
        M = function(e) {
            return "thin" === (e = o.isNumeric(e) ? e : e.toLowerCase()) ? "00" : "extra light" === e ? 200 : "light" === e ? 300 : "normal" === e ? 400 : "medium" === e ? 500 : "semi bold" === e ? 600 : "bold" === e ? 700 : "extra bold" === e ? 800 : "ultra bold" === e ? 900 : "black" === e ? 900 : e
        },
        C = function(e, i, s) {
            var n;
            if ("BR" == e[0].nodeName || "br" == e[0].tagName || "object" != typeof e[0].className && e[0].className.indexOf("rs_splitted_") >= 0) return !1;
            o.sA(e[0], "stylerecorder", !0), void 0 === e[0].id && (e[0].id = "rs-layer-sub-" + Math.round(1e6 * Math.random())), o[s].computedStyle[e[0].id] = window.getComputedStyle(e[0], null);
            var d = void 0 !== e[0].id && void 0 !== o[s]._L[e[0].id] ? o[s]._L[e[0].id] : e.data(),
                l = "rekursive" === i ? jQuery(o.closestClass(e[0], "rs-layer")) : void 0;
            void 0 !== l && (o[s].computedStyle[l[0].id] = void 0 === o[s].computedStyle[l[0].id] ? window.getComputedStyle(l[0], null) : o[s].computedStyle[l[0].id]);
            var c = void 0 !== l && o[s].computedStyle[e[0].id].fontSize == o[s].computedStyle[l[0].id].fontSize && M(o[s].computedStyle[e[0].id].fontWeight) == M(o[s].computedStyle[l[0].id].fontWeight) && o[s].computedStyle[e[0].id].lineHeight == o[s].computedStyle[l[0].id].lineHeight,
                p = c ? void 0 !== l[0].id && void 0 !== o[s]._L[l[0].id] ? o[s]._L[l[0].id] : l.data() : void 0,
                g = 0;
            for (d.basealign = void 0 === d.basealign ? "grid" : d.basealign, d._isnotext || (d.fontSize = o.revToResp(c ? void 0 === p.fontsize ? parseInt(o[s].computedStyle[l[0].id].fontSize, 0) || 20 : p.fontsize : void 0 === d.fontsize ? "rekursive" !== i ? 20 : "inherit" : d.fontsize, o[s].rle), d.fontWeight = o.revToResp(c ? void 0 === p.fontweight ? o[s].computedStyle[l[0].id].fontWeight || "inherit" : p.fontweight : void 0 === d.fontweight ? o[s].computedStyle[e[0].id].fontWeight || "inherit" : d.fontweight, o[s].rle), d.whiteSpace = o.revToResp(c ? void 0 === p.whitespace ? "nowrap" : p.whitespace : void 0 === d.whitespace ? "nowrap" : d.whitespace, o[s].rle), d.textAlign = o.revToResp(c ? void 0 === p.textalign ? "left" : p.textalign : void 0 === d.textalign ? "left" : d.textalign, o[s].rle), d.letterSpacing = o.revToResp(c ? void 0 === p.letterspacing ? parseInt(o[s].computedStyle[l[0].id].letterSpacing, 0) || "inherit" : p.letterspacing : void 0 === d.letterspacing ? parseInt("normal" === o[s].computedStyle[e[0].id].letterSpacing ? 0 : o[s].computedStyle[e[0].id].letterSpacing, 0) || "inherit" : d.letterspacing, o[s].rle), d.textDecoration = c ? void 0 === p.textDecoration ? "none" : p.textDecoration : void 0 === d.textDecoration ? "none" : d.textDecoration, g = 25, g = void 0 !== l && "I" === e[0].tagName ? "inherit" : g, void 0 !== d.tshadow && (d.tshadow.b = o.revToResp(d.tshadow.b, o[s].rle), d.tshadow.h = o.revToResp(d.tshadow.h, o[s].rle), d.tshadow.v = o.revToResp(d.tshadow.v, o[s].rle))), void 0 !== d.bshadow && (d.bshadow.b = o.revToResp(d.bshadow.b, o[s].rle), d.bshadow.h = o.revToResp(d.bshadow.h, o[s].rle), d.bshadow.v = o.revToResp(d.bshadow.v, o[s].rle), d.bshadow.s = o.revToResp(d.bshadow.s, o[s].rle)), void 0 !== d.tstroke && (d.tstroke.w = o.revToResp(d.tstroke.w, o[s].rle)), d.display = c ? void 0 === p.display ? o[s].computedStyle[l[0].id].display : p.display : void 0 === d.display ? o[s].computedStyle[e[0].id].display : d.display, d.float = o.revToResp(c ? void 0 === p.float ? o[s].computedStyle[l[0].id].float || "none" : p.float : void 0 === d.float ? "none" : d.float, o[s].rle), d.clear = o.revToResp(c ? void 0 === p.clear ? o[s].computedStyle[l[0].id].clear || "none" : p.clear : void 0 === d.clear ? "none" : d.clear, o[s].rle), d.lineHeight = o.revToResp(e.is("img") || -1 != jQuery.inArray(d.layertype, ["video", "image", "audio"]) ? g : c ? void 0 === p.lineheight ? parseInt(o[s].computedStyle[l[0].id].lineHeight, 0) || g : p.lineheight : void 0 === d.lineheight ? g : d.lineheight, o[s].rle), d.zIndex = c ? void 0 === p.zindex ? parseInt(o[s].computedStyle[l[0].id].zIndex, 0) || "inherit" : p.zindex : void 0 === d.zindex ? parseInt(o[s].computedStyle[e[0].id].zIndex, 0) || "inherit" : d.zindex, n = 0; n < 4; n++) d["padding" + t[n]] = o.revToResp(void 0 === d["padding" + r[n]] ? parseInt(o[s].computedStyle[e[0].id]["padding" + t[n]], 0) || 0 : d["padding" + r[n]], o[s].rle), d["margin" + t[n]] = o.revToResp(void 0 === d["margin" + r[n]] ? parseInt(o[s].computedStyle[e[0].id]["margin" + t[n]], 0) || 0 : d["margin" + r[n]], o[s].rle), d["border" + t[n] + "Width"] = void 0 === d.borderwidth ? parseInt(o[s].computedStyle[e[0].id]["border" + t[n] + "Width"], 0) || 0 : d.borderwidth[n], d["border" + t[n] + "Color"] = void 0 === d.bordercolor ? o[s].computedStyle[e[0].id]["border-" + r[n] + "-color"] : d.bordercolor, d["border" + a[n] + "Radius"] = o.revToResp(void 0 === d.borderradius ? o[s].computedStyle[e[0].id]["border" + a[n] + "Radius"] || 0 : d.borderradius[n], o[s].rle);
            for (d.borderStyle = o.revToResp(void 0 === d.borderstyle ? o[s].computedStyle[e[0].id].borderStyle || 0 : d.borderstyle, o[s].rle), "rekursive" !== i ? (d.color = o.revToResp(void 0 === d.color ? "#ffffff" : d.color, o[s].rle, void 0, "||"), d.minWidth = o.revToResp(void 0 === d.minwidth ? parseInt(o[s].computedStyle[e[0].id].minWidth, 0) || 0 : d.minwidth, o[s].rle), d.minHeight = o.revToResp(void 0 === d.minheight ? parseInt(o[s].computedStyle[e[0].id].minHeight, 0) || 0 : d.minheight, o[s].rle), d.width = o.revToResp(void 0 === d.width ? "auto" : o.smartConvertDivs(d.width), o[s].rle), d.height = o.revToResp(void 0 === d.height ? "auto" : o.smartConvertDivs(d.height), o[s].rle), d.maxWidth = o.revToResp(void 0 === d.maxwidth ? parseInt(o[s].computedStyle[e[0].id].maxWidth, 0) || "none" : d.maxwidth, o[s].rle), d.maxHeight = o.revToResp(-1 !== jQuery.inArray(d.type, ["column", "row"]) ? "none" : void 0 !== d.maxheight ? parseInt(o[s].computedStyle[e[0].id].maxHeight, 0) || "none" : d.maxheight, o[s].rle)) : "html" === d.layertype && (d.width = o.revToResp(e[0].width, o[s].rle), d.height = o.revToResp(e[0].height, o[s].rle)), d.styleProps = {
                    background: e[0].style.background,
                    "background-color": e[0].style["background-color"],
                    color: e[0].style.color,
                    cursor: e[0].style.cursor,
                    "font-style": e[0].style["font-style"]
                }, null == d.bshadow && (d.styleProps.boxShadow = e[0].style.boxShadow), "" !== d.styleProps.background && void 0 !== d.styleProps.background && d.styleProps.background !== d.styleProps["background-color"] || delete d.styleProps.background, "" == d.styleProps.color && (d.styleProps.color = o[s].computedStyle[e[0].id].color), n = 0; n < 4; n++) A(d["padding" + t[n]], 0) && delete d["padding" + t[n]], A(d["margin" + t[n]], 0) && delete d["margin" + t[n]], A(d["border" + a[n] + "Radius"], "0px") ? delete d["border" + a[n] + "Radius"] : A(d["border" + a[n] + "Radius"], "0") && delete d["border" + a[n] + "Radius"];
            if (A(d.borderStyle, "none"))
                for (delete d.borderStyle, n = 0; n < 4; n++) delete d["border" + t[n] + "Width"], delete d["border" + t[n] + "Color"]
        },
        A = function(e, i) {
            return i === e[0] && i === e[1] && i === e[2] && i === e[3]
        },
        D = function(e, i, t, a, r) {
            var s = o.isNumeric(e) || void 0 === e ? "" : e.indexOf("px") >= 0 ? "px" : e.indexOf("%") >= 0 ? "%" : "";
            return e = o.isNumeric(parseInt(e)) ? parseInt(e) : e, e = null == (e = "full" === (e = o.isNumeric(e) ? e * i + s : e) ? a : "auto" === e || "none" === e ? t : e) ? r : e
        },
        P = function(e) {
            return null != e && 0 !== parseInt(e, 0)
        },
        B = function(e) {
            var i, s, n, d, l, c, p, g, u, h, m = e.a,
                v = e.b,
                f = e.c,
                y = e.d,
                w = e.e,
                b = {},
                _ = {},
                S = o[v]._L[m[0].id],
                x = m[0].className;
            if (S = void 0 === S ? {} : S, "object" == typeof x && (x = ""), void 0 !== m && void 0 !== m[0] && (x.indexOf("rs_splitted") >= 0 || "BR" == m[0].nodeName || "br" == m[0].tagName || m[0].tagName.indexOf("FCR") > 0 || m[0].tagName.indexOf("BCR") > 0)) return !1;
            w = "individual" === w ? S.slideIndex : w;
            e = function(e, i, r) {
                if (void 0 !== e) {
                    if ("BR" == e[0].nodeName || "br" == e[0].tagName) return !1;
                    var s, n = o[i].level,
                        d = void 0 !== e[0] && void 0 !== e[0].id && void 0 !== o[i]._L[e[0].id] ? o[i]._L[e[0].id] : e.data();
                    void 0 === (d = void 0 === d.basealign ? r.data() : d)._isnotext && (d._isnotext = void 0 !== r && void 0 !== r[0] && r[0].length > 0 ? o.gA(r[0], "_isnotext") : d._isnotext);
                    var l = {
                        basealign: void 0 === d.basealign ? "grid" : d.basealign,
                        lineHeight: void 0 === d.basealign ? "inherit" : parseInt(d.lineHeight[n]),
                        color: void 0 === d.color ? void 0 : d.color[n],
                        width: void 0 === d.width ? void 0 : "a" === d.width[n] ? "auto" : d.width[n],
                        height: void 0 === d.height ? void 0 : "a" === d.height[n] ? "auto" : d.height[n],
                        minWidth: void 0 === d.minWidth ? void 0 : "n" === d.minWidth[n] ? "none" : d.minWidth[n],
                        minHeight: void 0 === d.minHeight ? void 0 : "n" == d.minHeight[n] ? "none" : d.minHeight[n],
                        maxWidth: void 0 === d.maxWidth ? void 0 : "n" == d.maxWidth[n] ? "none" : d.maxWidth[n],
                        maxHeight: void 0 === d.maxHeight ? void 0 : "n" == d.maxHeight[n] ? "none" : d.maxHeight[n],
                        float: d.float[n],
                        clear: d.clear[n]
                    };
                    for (d.borderStyle && (l.borderStyle = d.borderStyle[n]), s = 0; s < 4; s++) d["padding" + t[s]] && (l["padding" + t[s]] = d["padding" + t[s]][n]), d["margin" + t[s]] && (l["margin" + t[s]] = parseInt(d["margin" + t[s]][n])), d["border" + a[s] + "Radius"] && (l["border" + a[s] + "Radius"] = d["border" + a[s] + "Radius"][n]), d["border" + t[s] + "Color"] && (l["border" + t[s] + "Color"] = d["border" + t[s] + "Color"]), d["border" + t[s] + "Width"] && (l["border" + t[s] + "Width"] = parseInt(d["border" + t[s] + "Width"]));
                    return d._isnotext || (l.textDecoration = d.textDecoration, l.fontSize = parseInt(d.fontSize[n]), l.fontWeight = parseInt(d.fontWeight[n]), l.letterSpacing = parseInt(d.letterSpacing[n]) || 0, l.textAlign = d.textAlign[n], l.whiteSpace = d.whiteSpace[n], l.whiteSpace = "normal" === l.whiteSpace && "auto" === l.width && !0 !== d._incolumn ? "nowrap" : l.whiteSpace, l.display = d.display, void 0 !== d.tshadow && (l.textShadow = parseInt(d.tshadow.h[n], 0) + "px " + parseInt(d.tshadow.v[n], 0) + "px " + d.tshadow.b[n] + " " + d.tshadow.c), void 0 !== d.tstroke && (l.textStroke = parseInt(d.tstroke.w[n], 0) + "px " + d.tstroke.c)), void 0 !== d.bshadow && (l.boxShadow = parseInt(d.bshadow.h[n], 0) + "px " + parseInt(d.bshadow.v[n], 0) + "px " + parseInt(d.bshadow.b[n], 0) + "px " + parseInt(d.bshadow.s[n], 0) + "px " + d.bshadow.c), l
                }
            }(m, v, e.RSL);
            var k, L = "off" === y ? 1 : o[v].CM.w;
            if (void 0 === S._isnotext && (S._isnotext = void 0 !== e.RSL && void 0 !== e.RSL[0] && e.RSL[0].length > 0 ? o.gA(e.RSL[0], "_isnotext") : S._isnotext), S.OBJUPD = null == S.OBJUPD ? {} : S.OBJUPD, S.caches = null == S.caches ? {} : S.caches, "column" === S.type) {
                for (s = {}, k = {}, i = 0; i < 4; i++) void 0 !== e["margin" + t[i]] && (s["padding" + t[i]] = Math.round(e["margin" + t[i]] * L) + "px", k["margin" + t[i]] = e["margin" + t[i]], delete e["margin" + t[i]]);
                jQuery.isEmptyObject(s) || tpGS.gsap.set(S._column, s)
            }
            var R = o.clone(S.OBJUPD.POBJ),
                O = o.clone(S.OBJUPD.LPOBJ);
            if (-1 === x.indexOf("rs_splitted_")) {
                for (s = {
                        overwrite: "auto"
                    }, i = 0; i < 4; i++) void 0 !== e["border" + a[i] + "Radius"] && (s["border" + a[i] + "Radius"] = e["border" + a[i] + "Radius"]), void 0 !== e["padding" + t[i]] && (s["padding" + t[i]] = Math.round(e["padding" + t[i]] * L) + "px"), void 0 === e["margin" + t[i]] || S._incolumn || (s["margin" + t[i]] = "row" === S.type ? 0 : Math.round(e["margin" + t[i]] * L) + "px");
                if (void 0 !== S.spike && (s["clip-path"] = s["-webkit-clip-path"] = S.spike), e.boxShadow && (s.boxShadow = e.boxShadow), "column" !== S.type && (void 0 !== e.borderStyle && "none" !== e.borderStyle && (0 !== e.borderTopWidth || e.borderBottomWidth > 0 || e.borderLeftWidth > 0 || e.borderRightWidth > 0) ? (s.borderTopWidth = Math.round(e.borderTopWidth * L) + "px", s.borderBottomWidth = Math.round(e.borderBottomWidth * L) + "px", s.borderLeftWidth = Math.round(e.borderLeftWidth * L) + "px", s.borderRightWidth = Math.round(e.borderRightWidth * L) + "px", s.borderStyle = e.borderStyle, s.borderTopColor = e.borderTopColor, s.borderBottomColor = e.borderBottomColor, s.borderLeftColor = e.borderLeftColor, s.borderRightColor = e.borderRightColor) : ("none" === e.borderStyle && (s.borderStyle = "none"), s.borderTopColor = e.borderTopColor, s.borderBottomColor = e.borderBottomColor, s.borderLeftColor = e.borderLeftColor, s.borderRightColor = e.borderRightColor)), "shape" !== S.type && "image" !== S.type || !(P(e.borderTopLeftRadius) || P(e.borderTopRightRadius) || P(e.borderBottomLeftRadius) || P(e.borderBottomRightRadius)) || (s.overflow = "hidden"), S._isnotext || ("column" !== S.type && (s.fontSize = Math.round(e.fontSize * L) + "px", s.fontWeight = e.fontWeight, s.letterSpacing = e.letterSpacing * L + "px", e.textShadow && (s.textShadow = e.textShadow), e.textStroke && (s["-webkit-text-stroke"] = e.textStroke)), s.lineHeight = Math.round(e.lineHeight * L) + "px", s.textAlign = e.textAlign), "column" === S.type && (void 0 === S.cbg_set && (S.cbg_set = S.styleProps["background-color"], S.cbg_set = "" == S.cbg_set || void 0 === S.cbg_set || 0 == S.cbg_set.length ? "transparent" : S.cbg_set, S.cbg_img = m.css("backgroundImage"), "" !== S.cbg_img && void 0 !== S.cbg_img && "none" !== S.cbg_img && (S.cbg_img_r = m.css("backgroundRepeat"), S.cbg_img_p = m.css("backgroundPosition"), S.cbg_img_s = m.css("backgroundSize")), S.cbg_o = S.bgopacity ? 1 : S.bgopacity, b.backgroundColor = "transparent", b.backgroundImage = ""), s.backgroundColor = "transparent", s.backgroundImage = "none"), S._isstatic && S.elementHovered && (p = m.data("frames")) && p.frame_hover && p.frame_hover.transform)
                    for (g in s) s.hasOwnProperty(g) && p.frame_hover.transform.hasOwnProperty(g) && delete s[g];
                if ("IFRAME" == m[0].nodeName && "html" === o.gA(m[0], "layertype") && (u = "slide" == e.basealign ? o[v].module.width : o.iWA(v, w), h = "slide" == e.basealign ? o[v].module.height : o.iHE(v), s.width = !o.isNumeric(e.width) && e.width.indexOf("%") >= 0 ? !S._isstatic || S._incolumn || S._ingroup ? e.width : u * parseInt(e.width, 0) / 100 : D(e.width, L, "auto", u, "auto"), s.height = !o.isNumeric(e.height) && e.height.indexOf("%") >= 0 ? !S._isstatic || S._incolumn || S._ingroup ? e.height : h * parseInt(e.height, 0) / 100 : D(e.height, L, "auto", u, "auto")), b = jQuery.extend(!0, b, s), "rekursive" != f) {
                    u = "slide" == e.basealign ? o[v].module.width : o.iWA(v, w), h = "slide" == e.basealign ? o[v].module.height : o.iHE(v);
                    var I = !o.isNumeric(e.width) && e.width.indexOf("%") >= 0 ? !S._isstatic || S._incolumn || S._ingroup ? e.width : u * parseInt(e.width, 0) / 100 : D(e.width, L, "auto", u, "auto"),
                        T = !o.isNumeric(e.height) && e.height.indexOf("%") >= 0 ? !S._isstatic || S._incolumn || S._ingroup ? e.height : h * parseInt(e.height, 0) / 100 : D(e.height, L, "auto", u, "auto"),
                        M = {
                            maxWidth: D(e.maxWidth, L, "none", u, "none"),
                            maxHeight: D(e.maxHeight, L, "none", h, "none"),
                            minWidth: D(e.minWidth, L, "0px", u, 0),
                            minHeight: D(e.minHeight, L, "0px", h, 0),
                            height: T,
                            width: I,
                            overwrite: "auto"
                        };
                    1 == S.heightSetByVideo && (M.height = S.vidOBJ.height);
                    var C = !1;
                    if (S._incolumn) {
                        for (R = jQuery.extend(!0, R, {
                                minWidth: I,
                                maxWidth: I,
                                float: e.float,
                                clear: e.clear
                            }), i = 0; i < 4; i++) void 0 !== e["margin" + t[i]] && (R["margin" + t[i]] = e["margin" + t[i]] * L + "px");
                        O.width = "100%", void 0 !== e.display && "inline-block" !== e.display || (_ = {
                            width: "100%"
                        }), M.width = !o.isNumeric(e.width) && e.width.indexOf("%") >= 0 ? "100%" : I, "image" === S.type && tpGS.gsap.set(S.img, {
                            width: "100%"
                        })
                    } else !o.isNumeric(e.width) && e.width.indexOf("%") >= 0 && (R.minWidth = "slide" === S.basealign || !0 === S._ingroup ? I : o.iWA(v, w) * o[v].CM.w * parseInt(I) / 100 + "px", O.width = "100%", _.width = "100%");
                    if (!o.isNumeric(e.height) && e.height.indexOf("%") >= 0 && (R.minHeight = "slide" === S.basealign || !0 === S._ingroup ? T : o.iHE(v) * (o[v].currentRowsHeight > o[v].gridheight[o[v].level] ? 1 : o[v].CM.w) * parseInt(T) / 100 + "px", O.height = "100%", _.height = "100%", C = !0), S._isnotext || (M.whiteSpace = e.whiteSpace, M.textAlign = e.textAlign, M.textDecoration = e.textDecoration), "npc" != e.color && void 0 !== e.color && (M.color = e.color), S._ingroup && (S._groupw = M.minWidth, S._grouph = M.minHeight), "row" === S.type && (o.isNumeric(M.minHeight) || M.minHeight.indexOf("px") >= 0) && "0px" !== M.minHeight && 0 !== M.minHeight && "0" !== M.minHeight && "none" !== M.minHeight ? M.height = M.minHeight : "row" === S.type && (M.height = "auto"), S._isstatic && S.elementHovered && (p = m.data("frames")) && p.frame_hover && p.frame_hover.transform)
                        for (g in M) M.hasOwnProperty(g) && p.frame_hover.transform.hasOwnProperty(g) && delete M[g];
                    "group" !== S.type && "row" !== S.type && "column" !== S.type && (!o.isNumeric(M.width) && M.width.indexOf("%") >= 0 && (M.width = "100%"), !o.isNumeric(M.height) && M.height.indexOf("%") >= 0 && (M.height = "100%")), S._isgroup && (!o.isNumeric(M.width) && M.width.indexOf("%") >= 0 && (M.width = "100%"), R.height = C ? "100%" : M.height), b = jQuery.extend(!0, b, M), null != S.svg_src && void 0 !== S.svgI && ("string" == typeof S.svgI.fill && (S.svgI.fill = [S.svgI.fill]), S.svgTemp = o.clone(S.svgI), void 0 !== S.svgTemp.fill && (S.svgTemp.fill = S.svgTemp.fill[o[v].level], tpGS.gsap.set(S.svgPath, {
                        fill: S.svgI.fill[o[v].level]
                    })), tpGS.gsap.set(S.svg, S.svgTemp))
                }
                if ("row" === S.type)
                    for (i = 0; i < 4; i++) void 0 !== e["margin" + t[i]] && (R["padding" + t[i]] = e["margin" + t[i]] * L + "px");
                if ("column" === S.type && S.cbg && S.cbg.length > 0) {
                    for (void 0 !== S.cbg_img_s && (S.cbg[0].style.backgroundSize = S.cbg_img_s), s = {}, "" !== S.styleProps.cursor && (s.cursor = S.styleProps.cursor), "" !== S.cbg_set && "transparent" !== S.cbg_set && (s.backgroundColor = S.cbg_set), "" !== S.cbg_img && "none" !== S.cbg_img && (s.backgroundImage = S.cbg_img, "" !== S.cbg_img_r && (s.backgroundRepeat = S.cbg_img_r), "" !== S.cbg_img_p && (s.backgroundPosition = S.cbg_img_p)), "" !== S.cbg_o && void 0 !== S.cbg_o && (s.opacity = S.cbg_o), i = 0; i < 4; i++) void 0 !== e.borderStyle && "none" !== e.borderStyle && (void 0 !== e["border" + t[i] + "Width"] && (s["border" + t[i] + "Width"] = Math.round(parseInt(e["border" + t[i] + "Width"]) * L) + "px"), void 0 !== e["border" + t[i] + "Color"] && (s["border" + t[i] + "Color"] = e["border" + t[i] + "Color"])), e["border" + a[i] + "Radius"] && (s["border" + a[i] + "Radius"] = e["border" + a[i] + "Radius"]);
                    for (void 0 !== e.borderStyle && "none" !== e.borderStyle && (s.borderStyle = e.borderStyle), (n = JSON.stringify(s)) !== o[v].emptyObject && n !== S.caches.cbgS && tpGS.gsap.set(S.cbg, s), S.caches.cbgS = n, s = {}, i = 0; i < 4; i++) k["margin" + t[i]] && (s[r[i]] = k["margin" + t[i]] * L + "px");
                    (n = JSON.stringify(s)) !== o[v].emptyObject && n !== S.caches.cbgmaskS && (tpGS.gsap.set(S.cbgmask, s), S.caches.cbgmaskS = n)
                }
                "auto" === R.maxWidth && (R.maxWidth = "inherit"), "auto" === R.maxHeight && (R.maxHeight = "inherit"), "auto" === _.maxWidth && (_.maxWidth = "inherit"), "auto" === _.maxHeight && (_.maxHeight = "inherit"), "auto" === O.maxWidth && (O.maxWidth = "inherit"), "auto" === O.maxHeight && (O.maxHeight = "inherit"), void 0 !== S.vidOBJ && (b.width = S.vidOBJ.width, b.height = S.vidOBJ.height), void 0 !== S.OBJUPD.lppmOBJ && (void 0 !== S.OBJUPD.lppmOBJ.minWidth && (O.minWidth = S.OBJUPD.lppmOBJ.minWidth, _.minWidth = S.OBJUPD.lppmOBJ.minWidth, R.minWidth = S.OBJUPD.lppmOBJ.minWidth), void 0 !== S.OBJUPD.lppmOBJ.minHeight && (O.minHeight = S.OBJUPD.lppmOBJ.minHeight, _.minHeight = S.OBJUPD.lppmOBJ.minHeight, R.minHeight = S.OBJUPD.lppmOBJ.minHeight)), n = JSON.stringify(b), d = JSON.stringify(O), l = JSON.stringify(_), c = JSON.stringify(R), void 0 === S.imgOBJ || void 0 !== S.caches.imgOBJ && S.caches.imgOBJ.width === S.imgOBJ.width && S.caches.imgOBJ.height === S.imgOBJ.height && S.caches.imgOBJ.left === S.imgOBJ.left && S.caches.imgOBJ.right === S.imgOBJ.right && S.caches.imgOBJ.top === S.imgOBJ.top && S.caches.imgOBJ.bottom === S.imgOBJ.bottom || (S.caches.imgOBJ = o.clone(S.imgOBJ), S.imgOBJ.position = "relative", tpGS.gsap.set(S.img, S.imgOBJ)), void 0 === S.mediaOBJ || void 0 !== S.caches.mediaOBJ && S.caches.mediaOBJ.width === S.mediaOBJ.width && S.caches.mediaOBJ.height === S.mediaOBJ.height && S.caches.mediaOBJ.display === S.mediaOBJ.display || (S.caches.mediaOBJ = o.clone(S.mediaOBJ), S.media.css(S.mediaOBJ)), n != o[v].emptyObject && n != S.caches.LOBJ && (tpGS.gsap.set(m, b), S.caches.LOBJ = n), d != o[v].emptyObject && d != S.caches.LPOBJ && (tpGS.gsap.set(S.lp, O), S.caches.LPOBJ = d), l != o[v].emptyObject && l != S.caches.MOBJ && (tpGS.gsap.set(S.m, _), S.caches.MOBJ = l), c != o[v].emptyObject && c != S.caches.POBJ && (tpGS.gsap.set(S.p, R), S.caches.POBJ = c, S.caches.POBJ_LEFT = R.left, S.caches.POBJ_TOP = R.top)
            }
        },
        z = function(e) {
            var i = {
                l: "none",
                lw: 10,
                r: "none",
                rw: 10
            };
            for (var t in e = e.split(";"))
                if (e.hasOwnProperty(t)) {
                    var a = e[t].split(":");
                    switch (a[0]) {
                        case "l":
                            i.l = a[1];
                            break;
                        case "r":
                            i.r = a[1];
                            break;
                        case "lw":
                            i.lw = a[1];
                            break;
                        case "rw":
                            i.rw = a[1]
                    }
                }
            return "polygon(" + G(i.l, 0, parseFloat(i.lw)) + "," + G(i.r, 100, 100 - parseFloat(i.rw), !0) + ")"
        },
        G = function(e, i, t, a) {
            var r;
            switch (e) {
                case "none":
                    r = i + "% 100%," + i + "% 0%";
                    break;
                case "top":
                    r = t + "% 100%," + i + "% 0%";
                    break;
                case "middle":
                    r = t + "% 100%," + i + "% 50%," + t + "% 0%";
                    break;
                case "bottom":
                    r = i + "% 100%," + t + "% 0%";
                    break;
                case "two":
                    r = t + "% 100%," + i + "% 75%," + t + "% 50%," + i + "% 25%," + t + "% 0%";
                    break;
                case "three":
                    r = i + "% 100%," + t + "% 75%," + i + "% 50%," + t + "% 25%," + i + "% 0%";
                    break;
                case "four":
                    r = i + "% 100%," + t + "% 87.5%," + i + "% 75%," + t + "% 62.5%," + i + "% 50%," + t + "% 37.5%," + i + "% 25%," + t + "% 12.5%," + i + "% 0%";
                    break;
                case "five":
                    r = i + "% 100%," + t + "% 90%," + i + "% 80%," + t + "% 70%," + i + "% 60%," + t + "% 50%," + i + "% 40%," + t + "% 30%," + i + "% 20%," + t + "% 10%," + i + "% 0%"
            }
            if (a) {
                var o = r.split(",");
                for (var t in r = "", o) o.hasOwnProperty(t) && (r += o[o.length - 1 - t] + (t < o.length - 1 ? "," : ""))
            }
            return r
        };
    window.RS_MODULES = window.RS_MODULES || {}, window.RS_MODULES.layeranimation = {
        loaded: !0,
        version: "6.4.0"
    }, window.RS_MODULES.checkMinimal && window.RS_MODULES.checkMinimal()
}(jQuery),
function(e) {
    "use strict";
    jQuery.fn.revolution = jQuery.fn.revolution || {};
    var i = jQuery.fn.revolution;

    function t(e, t) {
        var a = new Object({
            single: ".tp-" + t,
            c: i[e].cpar.find(".tp-" + t + "s")
        });
        return a.mask = a.c.find(".tp-" + t + "-mask"), a.wrap = a.c.find(".tp-" + t + "s-inner-wrapper"), a
    }
    jQuery.extend(!0, i, {
        hideUnHideNav: function(e) {
            window.requestAnimationFrame(function() {
                var t = !1;
                c(i[e].navigation.arrows) && (t = S(i[e].navigation.arrows, e, t)), c(i[e].navigation.bullets) && (t = S(i[e].navigation.bullets, e, t)), c(i[e].navigation.thumbnails) && (t = S(i[e].navigation.thumbnails, e, t)), c(i[e].navigation.tabs) && (t = S(i[e].navigation.tabs, e, t)), t && i.manageNavigation(e)
            })
        },
        getOuterNavDimension: function(e) {
            i[e].navigation.scaler = Math.max(0, Math.min(1, (i.winW - 480) / 500));
            var t = {
                left: 0,
                right: 0,
                horizontal: 0,
                vertical: 0,
                top: 0,
                bottom: 0
            };
            return i[e].navigation.thumbnails && i[e].navigation.thumbnails.enable && (i[e].navigation.thumbnails.isVisible = i[e].navigation.thumbnails.hide_under < i[e].module.width && i[e].navigation.thumbnails.hide_over > i[e].module.width, i[e].navigation.thumbnails.cw = Math.max(Math.round(i[e].navigation.thumbnails.width * i[e].navigation.scaler), i[e].navigation.thumbnails.min_width), i[e].navigation.thumbnails.ch = Math.round(i[e].navigation.thumbnails.cw / i[e].navigation.thumbnails.width * i[e].navigation.thumbnails.height), i[e].navigation.thumbnails.isVisible && "outer-left" === i[e].navigation.thumbnails.position ? t.left = i[e].navigation.thumbnails.cw + 2 * i[e].navigation.thumbnails.wrapper_padding : i[e].navigation.thumbnails.isVisible && "outer-right" === i[e].navigation.thumbnails.position ? t.right = i[e].navigation.thumbnails.cw + 2 * i[e].navigation.thumbnails.wrapper_padding : i[e].navigation.thumbnails.isVisible && "outer-top" === i[e].navigation.thumbnails.position ? t.top = i[e].navigation.thumbnails.ch + 2 * i[e].navigation.thumbnails.wrapper_padding : i[e].navigation.thumbnails.isVisible && "outer-bottom" === i[e].navigation.thumbnails.position && (t.bottom = i[e].navigation.thumbnails.ch + 2 * i[e].navigation.thumbnails.wrapper_padding)), i[e].navigation.tabs && i[e].navigation.tabs.enable && (i[e].navigation.tabs.isVisible = i[e].navigation.tabs.hide_under < i[e].module.width && i[e].navigation.tabs.hide_over > i[e].module.width, i[e].navigation.tabs.cw = Math.max(Math.round(i[e].navigation.tabs.width * i[e].navigation.scaler), i[e].navigation.tabs.min_width), i[e].navigation.tabs.ch = Math.round(i[e].navigation.tabs.cw / i[e].navigation.tabs.width * i[e].navigation.tabs.height), i[e].navigation.tabs.isVisible && "outer-left" === i[e].navigation.tabs.position ? t.left += i[e].navigation.tabs.cw + 2 * i[e].navigation.tabs.wrapper_padding : i[e].navigation.tabs.isVisible && "outer-right" === i[e].navigation.tabs.position ? t.right += i[e].navigation.tabs.cw + 2 * i[e].navigation.tabs.wrapper_padding : i[e].navigation.tabs.isVisible && "outer-top" === i[e].navigation.tabs.position ? t.top += i[e].navigation.tabs.ch + 2 * i[e].navigation.tabs.wrapper_padding : i[e].navigation.tabs.isVisible && "outer-bottom" === i[e].navigation.tabs.position && (t.bottom += i[e].navigation.tabs.ch + 2 * i[e].navigation.tabs.wrapper_padding)), {
                left: t.left,
                right: t.right,
                horizontal: t.left + t.right,
                vertical: t.top + t.bottom,
                top: t.top,
                bottom: t.bottom
            }
        },
        resizeThumbsTabs: function(e, t) {
            if (void 0 !== i[e] && i[e].navigation.use && (i[e].navigation && i[e].navigation.bullets.enable || i[e].navigation && i[e].navigation.tabs.enable || i[e].navigation && i[e].navigation.thumbnails.enable)) {
                var a = tpGS.gsap.timeline(),
                    o = i[e].navigation.tabs,
                    s = i[e].navigation.thumbnails,
                    n = i[e].navigation.bullets;
                if (a.pause(), c(o) && (t || o.width > o.min_width) && r(e, a, i[e].c, o, i[e].slideamount, "tab"), c(s) && (t || s.width > s.min_width) && r(e, a, i[e].c, s, i[e].slideamount, "thumb", e), c(n) && t) {
                    var d = i[e].c.find(".tp-bullets");
                    d.find(".tp-bullet").each(function(e) {
                        var i = jQuery(this),
                            t = e + 1,
                            a = i.outerWidth() + parseInt(void 0 === n.space ? 0 : n.space, 0),
                            r = i.outerHeight() + parseInt(void 0 === n.space ? 0 : n.space, 0);
                        "vertical" === n.direction ? (i.css({
                            top: (t - 1) * r + "px",
                            left: "0px"
                        }), d.css({
                            height: (t - 1) * r + i.outerHeight(),
                            width: i.outerWidth()
                        })) : (i.css({
                            left: (t - 1) * a + "px",
                            top: "0px"
                        }), d.css({
                            width: (t - 1) * a + i.outerWidth(),
                            height: i.outerHeight()
                        }))
                    })
                }
                a.play()
            }
            return !0
        },
        updateNavIndexes: function(e) {
            var t = i[e].c;

            function a(e) {
                t.find(e).lenght > 0 && t.find(e).each(function(e) {
                    jQuery(this).data("liindex", e)
                })
            }
            a("rs-tab"), a("rs-bullet"), a("rs-thumb"), i.resizeThumbsTabs(e, !0), i.manageNavigation(e)
        },
        manageNavigation: function(e, t) {
            i[e].navigation.use && (c(i[e].navigation.bullets) && ("fullscreen" != i[e].sliderLayout && "fullwidth" != i[e].sliderLayout && (i[e].navigation.bullets.h_offset_old = void 0 === i[e].navigation.bullets.h_offset_old ? parseInt(i[e].navigation.bullets.h_offset, 0) : i[e].navigation.bullets.h_offset_old, i[e].navigation.bullets.h_offset = "center" === i[e].navigation.bullets.h_align ? i[e].navigation.bullets.h_offset_old + i[e].outNavDims.left / 2 - i[e].outNavDims.right / 2 : i[e].navigation.bullets.h_offset_old + i[e].outNavDims.left), w(i[e].navigation.bullets, e)), c(i[e].navigation.thumbnails) && w(i[e].navigation.thumbnails, e), c(i[e].navigation.tabs) && w(i[e].navigation.tabs, e), c(i[e].navigation.arrows) && ("fullscreen" != i[e].sliderLayout && "fullwidth" != i[e].sliderLayout && (i[e].navigation.arrows.left.h_offset_old = void 0 === i[e].navigation.arrows.left.h_offset_old ? parseInt(i[e].navigation.arrows.left.h_offset, 0) : i[e].navigation.arrows.left.h_offset_old, i[e].navigation.arrows.left.h_offset = (i[e].navigation.arrows.left.h_align, i[e].navigation.arrows.left.h_offset_old), i[e].navigation.arrows.right.h_offset_old = void 0 === i[e].navigation.arrows.right.h_offset_old ? parseInt(i[e].navigation.arrows.right.h_offset, 0) : i[e].navigation.arrows.right.h_offset_old, i[e].navigation.arrows.right.h_offset = (i[e].navigation.arrows.right.h_align, i[e].navigation.arrows.right.h_offset_old)), w(i[e].navigation.arrows.left, e), w(i[e].navigation.arrows.right, e)), !1 !== t && (c(i[e].navigation.thumbnails) && a(i[e].navigation.thumbnails, e), c(i[e].navigation.tabs) && a(i[e].navigation.tabs, e)))
        },
        showFirstTime: function(e) {
            g(e), i.hideUnHideNav(e)
        },
        selectNavElement: function(e, t, a, r) {
            for (var o = i[e].cpar[0].getElementsByClassName(a), s = 0; s < o.length; s++) i.gA(o[s], "key") === t ? (o[s].classList.add("selected"), void 0 !== r && r()) : o[s].classList.remove("selected")
        },
        transferParams: function(e, i) {
            if (void 0 !== i)
                for (var t in i.params) e = e.replace(i.params[t].from, i.params[t].to);
            return e
        },
        updateNavElementContent: function(e, t, r, o, s) {
            if (void 0 !== i[e].pr_next_key || void 0 !== i[e].pr_active_key) {
                var n = void 0 === i[e].pr_next_key ? void 0 === i[e].pr_cache_pr_next_key ? i[e].pr_active_key : i[e].pr_cache_pr_next_key : i[e].pr_next_key,
                    d = i.gA(i[e].slides[n], "key"),
                    l = 0,
                    c = !1;
                for (var p in r.enable && i.selectNavElement(e, d, "tp-bullet"), o.enable && i.selectNavElement(e, d, "tp-thumb", function() {
                        a(o, e)
                    }), s.enable && i.selectNavElement(e, d, "tp-tab", function() {
                        a(s, e)
                    }), i[e].thumbs) l = !0 === c ? l : p, c = i[e].thumbs[p].id === d || p == d || c;
                var g = (l = parseInt(l, 0)) > 0 ? l - 1 : i[e].slideamount - 1,
                    u = l + 1 == i[e].slideamount ? 0 : l + 1;
                if (!0 === t.enable && t.pi !== g && t.ni !== u) {
                    if (t.pi = g, t.ni = u, t.left.c[0].innerHTML = i.transferParams(t.tmp, i[e].thumbs[g]), u > i[e].slideamount) return;
                    t.right.c[0].innerHTML = i.transferParams(t.tmp, i[e].thumbs[u]), t.right.iholder = t.right.c.find(".tp-arr-imgholder"), t.left.iholder = t.left.c.find(".tp-arr-imgholder"), t.rtl ? (void 0 !== t.left.iholder[0] && tpGS.gsap.set(t.left.iholder, {
                        backgroundImage: "url(" + i[e].thumbs[u].src + ")"
                    }), void 0 !== i[e].thumbs[g] && void 0 !== t.right.iholder[0] && tpGS.gsap.set(t.right.iholder, {
                        backgroundImage: "url(" + i[e].thumbs[g].src + ")"
                    })) : (void 0 !== i[e].thumbs[g] && void 0 !== t.left.iholder[0] && tpGS.gsap.set(t.left.iholder, {
                        backgroundImage: "url(" + i[e].thumbs[g].src + ")"
                    }), void 0 !== t.right.iholder[0] && tpGS.gsap.set(t.right.iholder, {
                        backgroundImage: "url(" + i[e].thumbs[u].src + ")"
                    }))
                }
            }
        },
        createNavigation: function(e) {
            var a = i[e].navigation.arrows,
                r = i[e].navigation.bullets,
                n = i[e].navigation.thumbnails,
                u = i[e].navigation.tabs,
                m = c(a),
                f = c(r),
                y = c(n),
                S = c(u);
            for (var x in o(e), s(e), m && (v(a, e), a.c = i[e].cpar.find(".tparrows")), i[e].slides)
                if (i[e].slides.hasOwnProperty(x) && "true" != i.gA(i[e].slides[x], "not_in_nav")) {
                    var k = jQuery(i[e].slides[i[e].slides.length - 1 - x]),
                        L = jQuery(i[e].slides[x]);
                    f && (i[e].navigation.bullets.rtl ? b(i[e].c, r, k, e) : b(i[e].c, r, L, e)), y && (i[e].navigation.thumbnails.rtl ? _(i[e].c, n, k, "tp-thumb", e) : _(i[e].c, n, L, "tp-thumb", e)), S && (i[e].navigation.tabs.rtl ? _(i[e].c, u, k, "tp-tab", e) : _(i[e].c, u, L, "tp-tab", e))
                }
            f && w(r, e), y && w(n, e), S && w(u, e), (y || S) && i.updateDims(e), i[e].navigation.createNavigationDone = !0, y && jQuery.extend(!0, n, t(e, "thumb")), S && jQuery.extend(!0, u, t(e, "tab")), i[e].c.on("revolution.slide.onafterswap revolution.nextslide.waiting", function() {
                i.updateNavElementContent(e, a, r, n, u)
            }), l(a), l(r), l(n), l(u), i[e].cpar.on("mouseenter mousemove", function(t) {
                void 0 !== t.target && void 0 !== t.target.className && "string" == typeof t.target.className && t.target.className.indexOf("rs-waction") >= 0 || !0 !== i[e].tpMouseOver && i[e].firstSlideAvailable && (i[e].tpMouseOver = !0, g(e), i.ISM && !0 !== i[e].someNavIsDragged && (p(i[e].hideAllNavElementTimer), i[e].hideAllNavElementTimer = setTimeout(function() {
                    i[e].tpMouseOver = !1, h(e)
                }, 150)))
            }), i[e].cpar.on("mouseleave ", function() {
                i[e].tpMouseOver = !1, h(e)
            }), (y || S || "carousel" === i[e].sliderType || i[e].navigation.touch.touchOnDesktop || i[e].navigation.touch.touchenabled && i.ISM) && d(e), i[e].navigation.initialised = !0, i.updateNavElementContent(e, a, r, n, u), i.showFirstTime(e)
        }
    });
    var a = function(e, t) {
            if (void 0 !== e && null != e.mask) {
                var a = "vertical" === e.direction ? e.mask.find(e.single).first().outerHeight(!0) + e.space : e.mask.find(e.single).first().outerWidth(!0) + e.space,
                    r = "vertical" === e.direction ? e.mask.height() : e.mask.width(),
                    o = e.mask.find(e.single + ".selected").data("liindex");
                o = (o = void 0 === (o = e.rtl ? i[t].slideamount - o : o) ? 0 : o) > 0 && 1 === i[t].sdir && e.visibleAmount > 1 ? o - 1 : o;
                var s = r / a,
                    n = "vertical" === e.direction ? e.mask.height() : e.mask.width(),
                    d = 0 - o * a,
                    l = "vertical" === e.direction ? e.wrap.height() : e.wrap.width(),
                    c = d < 0 - (l - n) ? 0 - (l - n) : d,
                    p = i.gA(e.wrap[0], "offset");
                p = void 0 === p ? 0 : p, s > 2 && (c = d - (p + a) <= 0 ? d - (p + a) < 0 - a ? p : c + a : c, c = d - a + p + r < a && d + (Math.round(s) - 2) * a < p ? d + (Math.round(s) - 2) * a : c), c = "vertical" !== e.direction && e.mask.width() >= e.wrap.width() || "vertical" === e.direction && e.mask.height() >= e.wrap.height() ? 0 : c < 0 - (l - n) ? 0 - (l - n) : c > 0 ? 0 : c, e.c.hasClass("dragged") || ("vertical" === e.direction ? e.wrap.data("tmmove", tpGS.gsap.to(e.wrap, .5, {
                    top: c + "px",
                    ease: "power3.inOut"
                })) : e.wrap.data("tmmove", tpGS.gsap.to(e.wrap, .5, {
                    left: c + "px",
                    ease: "power3.inOut"
                })), e.wrap.data("offset", c))
            }
        },
        r = function(e, t, a, r, o, s) {
            var n = a.parent().find(".tp-" + s + "s"),
                d = n.find(".tp-" + s + "s-inner-wrapper"),
                l = n.find(".tp-" + s + "-mask"),
                c = "vertical" === r.direction ? r.cw : r.cw * o + parseFloat(r.space) * (o - 1),
                p = "vertical" === r.direction ? r.ch * o + parseInt(r.space) * (o - 1) : r.ch,
                g = "vertical" === r.direction ? {
                    width: r.cw + "px"
                } : {
                    height: r.ch + "px"
                };
            if (t.add(tpGS.gsap.set(n, g)), t.add(tpGS.gsap.set(d, {
                    width: c + "px",
                    height: p + "px"
                })), "horizontal" === r.direction) {
                var u = Math.min(c, r.cw * r.visibleAmount + parseFloat(r.space) * (r.visibleAmount - 1));
                t.add(tpGS.gsap.set(l, {
                    width: u + "px",
                    height: p + "px"
                }))
            } else {
                var h = Math.min(p, r.ch * r.visibleAmount + parseFloat(r.space) * (r.visibleAmount - 1));
                t.add(tpGS.gsap.set(l, {
                    width: c + "px",
                    height: h + "px"
                }))
            }
            null !== d.outerWidth() && (i[e].thumbResized = !0);
            var m = d.find(".tp-" + s);
            return m && jQuery.each(m, function(e, i) {
                "vertical" === r.direction ? t.add(tpGS.gsap.set(i, {
                    top: e * (r.ch + parseInt(void 0 === r.space ? 0 : r.space, 0)),
                    width: r.cw + "px",
                    height: r.ch + "px"
                })) : "horizontal" === r.direction && t.add(tpGS.gsap.set(i, {
                    left: e * (r.cw + parseInt(void 0 === r.space ? 0 : r.space, 0)),
                    width: r.cw + "px",
                    height: r.ch + "px"
                }))
            }), t
        },
        o = function(e) {
            !0 === i[e].navigation.keyboardNavigation && i.document.on("keydown", function(t) {
                if ("horizontal" == i[e].navigation.keyboard_direction && 39 == t.keyCode || "vertical" == i[e].navigation.keyboard_direction && 40 == t.keyCode) {
                    if (void 0 !== i[e].keydown_time_stamp && (new Date).getTime() - i[e].keydown_time_stamp < 1e3) return;
                    i[e].sc_indicator = "arrow", i[e].sc_indicator_dir = 0, "carousel" === i[e].sliderType && (i[e].ctNavElement = !0), i.callingNewSlide(e, 1, "carousel" === i[e].sliderType)
                }
                if ("horizontal" == i[e].navigation.keyboard_direction && 37 == t.keyCode || "vertical" == i[e].navigation.keyboard_direction && 38 == t.keyCode) {
                    if (void 0 !== i[e].keydown_time_stamp && (new Date).getTime() - i[e].keydown_time_stamp < 1e3) return;
                    i[e].sc_indicator = "arrow", i[e].sc_indicator_dir = 1, "carousel" === i[e].sliderType && (i[e].ctNavElement = !0), i.callingNewSlide(e, -1, "carousel" === i[e].sliderType)
                }
                i[e].keydown_time_stamp = (new Date).getTime()
            })
        },
        s = function(e) {
            !0 !== i[e].navigation.mouseScrollNavigation && "on" !== i[e].navigation.mouseScrollNavigation && "carousel" !== i[e].navigation.mouseScrollNavigation || i[e].c.on("wheel mousewheel DOMMouseScroll", function(t) {
                var a = function(e) {
                        var i = 0;
                        return "deltaY" in e || "deltaX" in e ? i = 0 != e.deltaY && -0 != e.deltaY || !(e.deltaX < 0 || e.deltaX > 0) ? e.deltaY : e.deltaX : ("detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120)), ((i = navigator.userAgent.match(/mozilla/i) ? 10 * i : i) > 300 || i < -300) && (i /= 10), i
                    }(t.originalEvent),
                    r = !1,
                    o = 0 == i[e].pr_active_key || 0 == i[e].pr_processing_key,
                    s = i[e].pr_active_key == i[e].slideamount - 1 || i[e].pr_processing_key == i[e].slideamount - 1,
                    n = void 0 !== i[e].topc ? i[e].topc[0].getBoundingClientRect() : 0 === i[e].canv.height ? i[e].cpar[0].getBoundingClientRect() : i[e].c[0].getBoundingClientRect();
                if ((n.top > 0 && n.bottom < i.winH ? 1 : n.top >= 0 && n.bottom >= i.winH ? (i.winH - n.top) / n.height : n.top <= 0 && n.bottom <= i.winH ? n.bottom / n.height : 1) >= i[e].navigation.wheelViewPort) {
                    if ("reverse" == i[e].navigation.mouseScrollReverse) {
                        var d = s;
                        s = o, o = d
                    }
                    if ("carousel" === i[e].sliderType && !1 === i[e].carousel.snap) i.swipeAnimate({
                        id: e,
                        to: i[e].carousel.slide_offset + 5 * a,
                        direction: a < 0 ? "left" : "right",
                        easing: "power2.out",
                        phase: "move"
                    });
                    else {
                        var l = a < 0 ? -1 : 1;
                        i[e].sc_indicator_dir = "reverse" === i[e].navigation.mouseScrollReverse && l < 0 || "reverse" !== i[e].navigation.mouseScrollReverse && l > 0 ? 0 : 1, "carousel" == i[e].navigation.mouseScrollNavigation || 0 === i[e].sc_indicator_dir && !s || 1 === i[e].sc_indicator_dir && !o ? void 0 === i[e].pr_processing_key && !0 !== i[e].justmouseScrolled ? (i[e].sc_indicator = "arrow", "carousel" === i[e].sliderType && (i[e].ctNavElement = !0), i.callingNewSlide(e, 0 === i[e].sc_indicator_dir ? 1 : -1, "carousel" === i[e].sliderType), i[e].justmouseScrolled = !0, setTimeout(function() {
                            i[e].justmouseScrolled = !1
                        }, i[e].navigation.wheelCallDelay)) : delete i[e].sc_indicator_dir : !0 !== i[e].justmouseScrolled && (r = !0)
                    }
                    return !!r || (t.preventDefault(t), !1)
                }
            })
        },
        n = function(e, t) {
            var a = !1;
            for (var r in (void 0 === t.path || i.ISM) && (a = function(e, i) {
                    for (; e && e !== document; e = e.parentNode)
                        if (e.tagName === i) return e;
                    return !1
                }(t.target, e)), t.path) t.path.hasOwnProperty(r) && t.path[r].tagName === e && (a = !0);
            return a
        },
        d = function(e) {
            var t = i[e].carousel,
                a = i.is_android();
            jQuery(".bullet, .bullets, .tp-bullets, .tparrows").addClass("noSwipe"), i[e].navigation.touch = void 0 === i[e].navigation.touch ? {} : i[e].navigation.touch, i[e].navigation.touch.swipe_direction = void 0 === i[e].navigation.touch.swipe_direction ? "horizontal" : i[e].navigation.touch.swipe_direction, i[e].cpar.find(".rs-nav-element").rsswipe({
                allowPageScroll: "vertical",
                triggerOnTouchLeave: !0,
                treshold: i[e].navigation.touch.swipe_treshold,
                fingers: i[e].navigation.touch.swipe_min_touches > 5 ? 1 : i[e].navigation.touch.swipe_min_touches,
                excludedElements: "button, input, select, textarea, .noSwipe, .rs-waction",
                tap: function(e, i) {
                    if (void 0 !== i) var t = jQuery(i).closest("rs-thumb");
                    void 0 !== t && t.length > 0 ? t.trigger("click") : (t = jQuery(i).closest("rs-tab")).length > 0 ? t.trigger("click") : (t = jQuery(i).closest("rs-bullet")).length > 0 && t.trigger("click")
                },
                swipeStatus: function(r, o, s, d, l, c, g) {
                    if ("start" !== o && "move" !== o && "end" !== o && "cancel" != o) return !0;
                    var h = n("RS-THUMB", r),
                        m = n("RS-TAB", r);
                    !1 === h && !1 === m && !0 !== (h = "RS-THUMBS-WRAP" === r.target.tagName || "RS-THUMBS" === r.target.tagName || r.target.className.indexOf("tp-thumb-mask") >= 0) && (m = "RS-TABS-WRAP" === r.target.tagName || "RS-TABS" === r.target.tagName || r.target.className.indexOf("tp-tab-mask") >= 0);
                    var v = "start" === o ? 0 : a ? g[0].end.x - g[0].start.x : r.pageX - t.screenX,
                        f = "start" === o ? 0 : a ? g[0].end.y - g[0].start.y : r.pageY - t.screenY,
                        y = h ? ".tp-thumbs" : ".tp-tabs",
                        w = h ? ".tp-thumb-mask" : ".tp-tab-mask",
                        b = h ? ".tp-thumbs-inner-wrapper" : ".tp-tabs-inner-wrapper",
                        _ = h ? ".tp-thumb" : ".tp-tab",
                        S = h ? i[e].navigation.thumbnails : i[e].navigation.tabs,
                        x = i[e].cpar.find(w),
                        k = x.find(b),
                        L = S.direction,
                        R = "vertical" === L ? k.height() : k.width(),
                        O = "vertical" === L ? x.height() : x.width(),
                        I = "vertical" === L ? x.find(_).first().outerHeight(!0) + parseFloat(S.space) : x.find(_).first().outerWidth(!0) + parseFloat(S.space),
                        T = void 0 === k.data("offset") ? 0 : parseInt(k.data("offset"), 0),
                        M = 0;
                    switch (o) {
                        case "start":
                            "vertical" === L && r.preventDefault(), t.screenX = a ? g[0].end.x : r.pageX, t.screenY = a ? g[0].end.y : r.pageY, i[e].cpar.find(y).addClass("dragged"), T = "vertical" === L ? k.position().top : k.position().left, k.data("offset", T), k.data("tmmove") && k.data("tmmove").pause(), i[e].someNavIsDragged = !0, u(e);
                            break;
                        case "move":
                            if (R <= O) return !1;
                            M = (M = T + ("vertical" === L ? f : v)) > 0 ? "horizontal" === L ? M - k.width() * (M / k.width() * M / k.width()) : M - k.height() * (M / k.height() * M / k.height()) : M;
                            var C = "vertical" === L ? 0 - (k.height() - x.height()) : 0 - (k.width() - x.width());
                            M = M < C ? "horizontal" === L ? M + k.width() * (M - C) / k.width() * (M - C) / k.width() : M + k.height() * (M - C) / k.height() * (M - C) / k.height() : M, "vertical" === L ? tpGS.gsap.set(k, {
                                top: M + "px"
                            }) : tpGS.gsap.set(k, {
                                left: M + "px"
                            }), p(i[e].hideAllNavElementTimer);
                            break;
                        case "end":
                        case "cancel":
                            return M = T + ("vertical" === L ? f : v), M = (M = "vertical" === L ? M < 0 - (k.height() - x.height()) ? 0 - (k.height() - x.height()) : M : M < 0 - (k.width() - x.width()) ? 0 - (k.width() - x.width()) : M) > 0 ? 0 : M, M = Math.abs(d) > I / 10 ? d <= 0 ? Math.floor(M / I) * I : Math.ceil(M / I) * I : d < 0 ? Math.ceil(M / I) * I : Math.floor(M / I) * I, M = (M = "vertical" === L ? M < 0 - (k.height() - x.height()) ? 0 - (k.height() - x.height()) : M : M < 0 - (k.width() - x.width()) ? 0 - (k.width() - x.width()) : M) > 0 ? 0 : M, "vertical" === L ? tpGS.gsap.to(k, .5, {
                                top: M + "px",
                                ease: "power3.out"
                            }) : tpGS.gsap.to(k, .5, {
                                left: M + "px",
                                ease: "power3.out"
                            }), M = M || ("vertical" === L ? k.position().top : k.position().left), k.data("offset", M), k.data("distance", d), i[e].cpar.find(y).removeClass("dragged"), i[e].someNavIsDragged = !1, !0
                    }
                }
            }), ("carousel" !== i[e].sliderType && (i.ISM && i[e].navigation.touch.touchenabled || !0 !== i.ISM && i[e].navigation.touch.touchOnDesktop) || "carousel" === i[e].sliderType && (i.ISM && i[e].navigation.touch.mobileCarousel || !0 !== i.ISM && i[e].navigation.touch.desktopCarousel)) && (i[e].preventClicks = !1, i[e].c.on("click", function(t) {
                i[e].preventClicks && t.preventDefault()
            }), i[e].c.rsswipe({
                allowPageScroll: "vertical",
                triggerOnTouchLeave: !0,
                treshold: i[e].navigation.touch.swipe_treshold,
                fingers: i[e].navigation.touch.swipe_min_touches > 5 ? 1 : i[e].navigation.touch.swipe_min_touches,
                excludedElements: "label, button, input, select, textarea, .noSwipe, .rs-nav-element",
                swipeStatus: function(r, o, s, n, d, l, c) {
                    i[e].preventClicks = !0;
                    var p = "start" === o ? 0 : a ? c[0].end.x - c[0].start.x : r.pageX - t.screenX,
                        g = "start" === o ? 0 : a ? c[0].end.x - c[0].start.y : r.pageY - t.screenY;
                    if (!("carousel" === i[e].sliderType && i[e].carousel.wrapwidth > i[e].carousel.maxwidth && "center" !== i[e].carousel.horizontal_align)) {
                        if ("carousel" !== i[e].sliderType) {
                            if ("end" == o) {
                                if (i[e].sc_indicator = "arrow", "horizontal" == i[e].navigation.touch.swipe_direction && "left" == s || "vertical" == i[e].navigation.touch.swipe_direction && "up" == s) return i[e].sc_indicator_dir = 0, i.callingNewSlide(e, 1), !1;
                                if ("horizontal" == i[e].navigation.touch.swipe_direction && "right" == s || "vertical" == i[e].navigation.touch.swipe_direction && "down" == s) return i[e].sc_indicator_dir = 1, i.callingNewSlide(e, -1), !1
                            }
                            return !0
                        }
                        switch ((t.preventSwipe || i.ISM && ("left" === s || "right" === s)) && r.preventDefault(), void 0 !== t.positionanim && t.positionanim.pause(), t.carouselAutomatic = !1, o) {
                            case "start":
                                clearTimeout(t.swipeMainTimer), t.beforeSwipeOffet = t.slide_offset, t.focusedBeforeSwipe = t.focused, t.beforeDragStatus = i[e].sliderstatus, i[e].c.trigger("stoptimer"), t.swipeStartPos = a ? c[0].start.x : r.pageX, t.swipeStartTime = (new Date).getTime(), t.screenX = a ? c[0].end.x : r.pageX, t.screenY = a ? c[0].end.y : r.pageY, void 0 !== t.positionanim && (t.positionanim.pause(), t.carouselAutomatic = !1), t.overpull = "none", t.wrap.addClass("dragged");
                                break;
                            case "move":
                                if ("left" !== s && "right" !== s || (t.preventSwipe = !0), t.justDragged = !0, Math.abs(p) >= 10 || i[e].carousel.isDragged) {
                                    if (i[e].carousel.isDragged = !0, i[e].c.find(".rs-waction").addClass("tp-temporarydisabled"), t.CACHE_slide_offset = t.beforeSwipeOffet + p, !t.infinity) {
                                        var u = "center" === t.horizontal_align ? (t.wrapwidth / 2 - t.slide_width / 2 - t.CACHE_slide_offset) / t.slide_width : (0 - t.CACHE_slide_offset) / t.slide_width;
                                        "none" !== t.overpull && 0 !== t.overpull || !(u < 0 || u > i[e].slideamount - 1) ? u >= 0 && u <= i[e].slideamount - 1 && (u >= 0 && p > t.overpull || u <= i[e].slideamount - 1 && p < t.overpull) && (t.overpull = 0) : t.overpull = p, t.CACHE_slide_offset = u < 0 ? t.CACHE_slide_offset + (t.overpull - p) / 1.5 + Math.sqrt(Math.abs((t.overpull - p) / 1.5)) : u > i[e].slideamount - 1 ? t.CACHE_slide_offset + (t.overpull - p) / 1.5 - Math.sqrt(Math.abs((t.overpull - p) / 1.5)) : t.CACHE_slide_offset
                                    }
                                    i.swipeAnimate({
                                        id: e,
                                        to: t.CACHE_slide_offset,
                                        direction: s,
                                        easing: "power2.out",
                                        phase: "move"
                                    })
                                }
                                break;
                            case "end":
                            case "cancel":
                                if (clearTimeout(t.swipeMainTimer), t.swipeMainTimer = setTimeout(function() {
                                        t.preventSwipe = !1
                                    }, 500), i[e].carousel.isDragged = !1, t.wrap.removeClass("dragged"), t.swipeEndPos = a ? c[0].end.x : r.pageX, t.swipeEndTime = (new Date).getTime(), t.swipeDuration = t.swipeEndTime - t.swipeStartTime, t.swipeDistance = i.ISM ? t.swipeEndPos - t.swipeStartPos : (t.swipeEndPos - t.swipeStartPos) / 1.5, t.swipePower = t.swipeDistance / t.swipeDuration, t.CACHE_slide_offset = t.slide_offset + t.swipeDistance * Math.abs(t.swipePower), Math.abs(p) < 5 && Math.abs(g) < 5) break;
                                i.swipeAnimate({
                                    id: e,
                                    to: t.CACHE_slide_offset,
                                    direction: s,
                                    fix: !0,
                                    newSlide: !0,
                                    easing: "power2.out",
                                    phase: "end"
                                }), "playing" === t.beforeDragStatus && i[e].c.trigger("restarttimer"), setTimeout(function() {
                                    i[e].c.find(".rs-waction").removeClass("tp-temporarydisabled")
                                }, 19)
                        }
                    }
                },
                tap: function() {
                    i[e].preventClicks = !1
                }
            })), "carousel" === i[e].sliderType && (i.ISM && 0 == i[e].navigation.touch.mobileCarousel || !0 !== i.ISM && !1 === i[e].navigation.touch.desktopCarousel) && t.wrap.addClass("noswipe"), i[e].navigation.touch.drag_block_vertical && i[e].c.addClass("disableVerticalScroll")
        },
        l = function(e) {
            e.hide_delay = i.isNumeric(parseInt(e.hide_delay, 0)) ? e.hide_delay : .2, e.hide_delay_mobile = i.isNumeric(parseInt(e.hide_delay_mobile, 0)) ? e.hide_delay_mobile : .2
        },
        c = function(e) {
            return e && e.enable
        },
        p = function(e) {
            clearTimeout(e)
        },
        g = function(e) {
            var t = i[e].navigation.maintypes;
            for (var a in t) t.hasOwnProperty(a) && c(i[e].navigation[t[a]]) && void 0 !== i[e].navigation[t[a]].c && (p(i[e].navigation[t[a]].showCall), i[e].navigation[t[a]].showCall = setTimeout(function(t) {
                p(t.hideCall), t.hide_onleave && !0 !== i[e].tpMouseOver || (void 0 === t.tween ? t.tween = m(t) : t.tween.play())
            }, i[e].navigation[t[a]].hide_onleave && !0 !== i[e].tpMouseOver ? 0 : parseInt(i[e].navigation[t[a]].animDelay), i[e].navigation[t[a]]))
        },
        u = function(e) {
            var t = i[e].navigation.maintypes;
            for (var a in t) t.hasOwnProperty(a) && void 0 !== i[e].navigation[t[a]] && i[e].navigation[t[a]].hide_onleave && c(i[e].navigation[t[a]]) && p(i[e].navigation[t[a]].hideCall)
        },
        h = function(e, t) {
            var a = i[e].navigation.maintypes;
            for (var r in a) a.hasOwnProperty(r) && void 0 !== i[e].navigation[a[r]] && i[e].navigation[a[r]].hide_onleave && c(i[e].navigation[a[r]]) && (p(i[e].navigation[a[r]].hideCall), i[e].navigation[a[r]].hideCall = setTimeout(function(e) {
                p(e.showCall), e.tween && e.tween.reverse()
            }, i.ISM ? parseInt(i[e].navigation[a[r]].hide_delay_mobile, 0) : parseInt(i[e].navigation[a[r]].hide_delay, 0), i[e].navigation[a[r]]))
        },
        m = function(e) {
            e.speed = void 0 === e.animSpeed ? .5 : e.animSpeed, e.anims = [], void 0 !== e.anim && void 0 === e.left && e.anims.push(e.anim), void 0 !== e.left && e.anims.push(e.left.anim), void 0 !== e.right && e.anims.push(e.right.anim);
            var i = tpGS.gsap.timeline();
            for (var t in i.add(tpGS.gsap.to(e.c, e.speed, {
                    delay: e.animDelay,
                    opacity: 1,
                    ease: "power3.inOut"
                }), 0), e.anims)
                if (e.anims.hasOwnProperty(t)) switch (e.anims[t]) {
                    case "left":
                        i.add(tpGS.gsap.fromTo(e.c[t], e.speed, {
                            marginLeft: -50
                        }, {
                            delay: e.animDelay,
                            marginLeft: 0,
                            ease: "power3.inOut"
                        }), 0);
                        break;
                    case "right":
                        i.add(tpGS.gsap.fromTo(e.c[t], e.speed, {
                            marginLeft: 50
                        }, {
                            delay: e.animDelay,
                            marginLeft: 0,
                            ease: "power3.inOut"
                        }), 0);
                        break;
                    case "top":
                        i.add(tpGS.gsap.fromTo(e.c[t], e.speed, {
                            marginTop: -50
                        }, {
                            delay: e.animDelay,
                            marginTop: 0,
                            ease: "power3.inOut"
                        }), 0);
                        break;
                    case "bottom":
                        i.add(tpGS.gsap.fromTo(e.c[t], e.speed, {
                            marginTop: 50
                        }, {
                            delay: e.animDelay,
                            marginTop: 0,
                            ease: "power3.inOut"
                        }), 0);
                        break;
                    case "zoomin":
                        i.add(tpGS.gsap.fromTo(e.c[t], e.speed, {
                            scale: .5
                        }, {
                            delay: e.animDelay,
                            scale: 1,
                            ease: "power3.inOut"
                        }), 0);
                        break;
                    case "zoomout":
                        i.add(tpGS.gsap.fromTo(e.c[t], e.speed, {
                            scale: 1.2
                        }, {
                            delay: e.animDelay,
                            scale: 1,
                            ease: "power3.inOut"
                        }), 0)
                }
            return i.play(), i
        },
        v = function(e, t) {
            e.style = void 0 === e.style ? "" : e.style, e.left.style = void 0 === e.left.style ? "" : e.left.style, e.right.style = void 0 === e.right.style ? "" : e.right.style, void 0 === e.left.c && (e.left.c = jQuery('<rs-arrow style="opacity:0" class="tp-leftarrow tparrows ' + e.style + " " + e.left.style + '">' + e.tmp + "</rs-arrow>"), i[t].c.append(e.left.c)), void 0 === e.right.c && (e.right.c = jQuery('<rs-arrow style="opacity:0"  class="tp-rightarrow tparrows ' + e.style + " " + e.right.style + '">' + e.tmp + "</rs-arrow>"), i[t].c.append(e.right.c)), e[e.rtl ? "left" : "right"].c.on("click", function() {
                "carousel" === i[t].sliderType && (i[t].ctNavElement = !0), i[t].sc_indicator = "arrow", i[t].sc_indicator_dir = 0, i[t].c.revnext()
            }), e[e.rtl ? "right" : "left"].c.on("click", function() {
                "carousel" === i[t].sliderType && (i[t].ctNavElement = !0), i[t].sc_indicator = "arrow", i[t].sc_indicator_dir = 1, i[t].c.revprev()
            }), e.padding_top = parseInt(i[t].carousel.padding_top || 0, 0), e.padding_bottom = parseInt(i[t].carousel.padding_bottom || 0, 0), w(e.left, t), w(e.right, t), "outer-left" != e.position && "outer-right" != e.position || (i[t].outernav = !0)
        },
        f = function(e, t, a, r) {
            r = void 0 === r ? e.outerHeight(!0) : r;
            var o = null == i[a] ? 0 : 0 == i[a].canv.height ? i[a].module.height : i[a].canv.height,
                s = "layergrid" == t.container ? "fullscreen" == i[a].sliderLayout ? i[a].module.height / 2 - i[a].gridheight[i[a].level] * i[a].CM.h / 2 : i[a].autoHeight || null != i[a].minHeight && i[a].minHeight > 0 ? o / 2 - i[a].gridheight[i[a].level] * i[a].CM.h / 2 : 0 : 0,
                n = "top" === t.v_align ? {
                    top: "0px",
                    y: Math.round(t.v_offset + s) + "px"
                } : "center" === t.v_align ? {
                    top: "50%",
                    y: Math.round(0 - r / 2 + t.v_offset) + "px"
                } : {
                    top: "100%",
                    y: Math.round(0 - (r + t.v_offset + s)) + "px"
                };
            e.hasClass("outer-bottom") || tpGS.gsap.set(e, n)
        },
        y = function(e, t, a, r) {
            r = void 0 === r ? e.outerWidth() : r;
            var o = "layergrid" === t.container ? i[a].module.width / 2 - i[a].gridwidth[i[a].level] * i[a].CM.w / 2 : 0,
                s = "left" === t.h_align ? {
                    left: "0px",
                    x: Math.round(t.h_offset + o) + "px"
                } : "center" === t.h_align ? {
                    left: "50%",
                    x: Math.round(0 - r / 2 + t.h_offset) + "px"
                } : {
                    left: "100%",
                    x: Math.round(0 - (r + t.h_offset + o)) + "px"
                };
            tpGS.gsap.set(e, s)
        },
        w = function(e, t) {
            if (null != e && void 0 !== e.c) {
                var a = "fullwidth" == i[t].sliderLayout || "fullscreen" == i[t].sliderLayout ? i[t].module.width : i[t].canv.width,
                    r = e.c.outerWidth(),
                    o = e.c.outerHeight();
                if (!(r <= 0 || o <= 0) && (f(e.c, e, t, o), y(e.c, e, t, r), "outer-left" === e.position ? tpGS.gsap.set(e.c, {
                        left: 0 - r + "px",
                        x: e.h_offset + "px"
                    }) : "outer-right" === e.position && tpGS.gsap.set(e.c, {
                        right: 0 - r + "px",
                        x: e.h_offset + "px"
                    }), "tp-thumb" === e.type || "tp-tab" === e.type)) {
                    var s = parseInt(e.padding_top || 0, 0),
                        n = parseInt(e.padding_bottom || 0, 0),
                        d = {},
                        l = {};
                    e.maxw > a && "outer-left" !== e.position && "outer-right" !== e.position ? (d.left = "0px", d.x = 0, d.maxWidth = a - 2 * e.wpad + "px", l.maxWidth = a - 2 * e.wpad + "px") : (d.maxWidth = e.maxw, l.maxWidth = a + "px"), e.maxh + 2 * e.wpad > i[t].conh && "outer-bottom" !== e.position && "outer-top" !== e.position ? (d.top = "0px", d.y = 0, d.maxHeight = s + n + (i[t].conh - 2 * e.wpad) + "px", l.maxHeight = s + n + (i[t].conh - 2 * e.wpad) + "px") : (d.maxHeight = e.maxh + "px", l.maxHeight = e.maxh + "px"), e.mask = void 0 === e.mask ? e.c.find("rs-navmask") : e.mask, (e.mhoff > 0 || e.mvoff > 0) && (l.padding = e.mvoff + "px " + e.mhoff + "px"), e.span ? ("layergrid" == e.container && "outer-left" !== e.position && "outer-right" !== e.position && (s = n = 0), "vertical" === e.direction ? (d.maxHeight = s + n + (i[t].conh - 2 * e.wpad) + "px", d.height = s + n + (i[t].conh - 2 * e.wpad) + "px", d.top = 0, d.y = 0, l.maxHeight = s + n + Math.min(e.maxh, i[t].conh - 2 * e.wpad) + "px", tpGS.gsap.set(e.c, d), tpGS.gsap.set(e.mask, l), f(e.mask, e, t)) : "horizontal" === e.direction && (d.maxWidth = "100%", d.width = a - 2 * e.wpad + "px", d.left = 0, d.x = 0, l.maxWidth = e.maxw >= a ? "100%" : Math.min(e.maxw, a) + "px", tpGS.gsap.set(e.c, d), tpGS.gsap.set(e.mask, l), y(e.mask, e, t))) : (tpGS.gsap.set(e.c, d), tpGS.gsap.set(e.mask, l))
                }
            }
        },
        b = function(e, t, a, r) {
            0 === e.find(".tp-bullets").length && (t.style = void 0 === t.style ? "" : t.style, t.c = jQuery('<rs-bullets style="opacity:0"  class="tp-bullets ' + t.style + " " + t.direction + " nav-pos-hor-" + t.h_align + " nav-pos-ver-" + t.v_align + " nav-dir-" + t.direction + '"></rs-bullets>'));
            var o = a.data("key"),
                s = t.tmp;
            void 0 !== i[r].thumbs[a.index()] && jQuery.each(i[r].thumbs[a.index()].params, function(e, i) {
                s = s.replace(i.from, i.to)
            });
            var n = jQuery('<rs-bullet data-key="' + o + '" class="tp-bullet">' + s + "</rs-bullet>");
            void 0 !== i[r].thumbs[a.index()] && n.find(".tp-bullet-image").css({
                backgroundImage: "url(" + i[r].thumbs[a.index()].src + ")"
            }), t.c.append(n), e.append(t.c);
            var d = t.c.find(".tp-bullet").length,
                l = n.outerWidth(),
                c = n.outerHeight(),
                p = l + parseInt(void 0 === t.space ? 0 : t.space, 0),
                g = c + parseInt(void 0 === t.space ? 0 : t.space, 0);
            "vertical" === t.direction ? (n.css({
                top: (d - 1) * g + "px",
                left: "0px"
            }), t.c.css({
                height: (d - 1) * g + c,
                width: l
            })) : (n.css({
                left: (d - 1) * p + "px",
                top: "0px"
            }), t.c.css({
                width: (d - 1) * p + l,
                height: c
            })), n.on("click", function() {
                "carousel" === i[r].sliderType && (i[r].ctNavElement = !0), i[r].sc_indicator = "bullet", e.revcallslidewithid(o), e.find(".tp-bullet").removeClass("selected"), jQuery(this).addClass("selected")
            }), t.padding_top = parseInt(i[r].carousel.padding_top || 0, 0), t.padding_bottom = parseInt(i[r].carousel.padding_bottom || 0, 0), "outer-left" != t.position && "outer-right" != t.position || (i[r].outernav = !0)
        },
        _ = function(e, t, a, r, o) {
            var s = "tp-thumb" === r ? ".tp-thumbs" : ".tp-tabs",
                n = "tp-thumb" === r ? ".tp-thumb-mask" : ".tp-tab-mask",
                d = "tp-thumb" === r ? ".tp-thumbs-inner-wrapper" : ".tp-tabs-inner-wrapper",
                l = "tp-thumb" === r ? ".tp-thumb" : ".tp-tab",
                c = "tp-thumb" === r ? ".tp-thumb-image" : ".tp-tab-image",
                p = "tp-thumb" === r ? "rs-thumb" : "rs-tab";
            t.type = r, t.visibleAmount = t.visibleAmount > i[o].slideamount ? i[o].slideamount : t.visibleAmount, t.sliderLayout = i[o].sliderLayout, void 0 === t.c && (t.wpad = t.wrapper_padding, t.c = jQuery("<" + p + 's style="opacity:0" class="nav-dir-' + t.direction + " nav-pos-ver-" + t.v_align + " nav-pos-hor-" + t.h_align + " rs-nav-element " + r + "s " + (!0 === t.span ? "tp-span-wrapper" : "") + " " + t.position + " " + (void 0 === t.style ? "" : t.style) + '"><rs-navmask class="' + r + '-mask" style="overflow:hidden;position:relative"><' + p + 's-wrap class="' + r + 's-inner-wrapper" style="position:relative;"></' + p + "s-wrap></rs-navmask></" + p + "s>"), t.c.css({
                overflow: "visible",
                position: "outer-top" === t.position || "outer-bottom" === t.position ? "relative" : "absolute",
                background: t.wrapper_color,
                padding: t.wpad + "px",
                boxSizing: "contet-box"
            }), "outer-top" === t.position ? e.parent().prepend(t.c) : "outer-bottom" === t.position ? e.after(t.c) : e.append(t.c), "outer-left" !== t.position && "outer-right" !== t.position || tpGS.gsap.set(i[o].c, {
                overflow: "visible"
            }), t.padding_top = parseInt(i[o].carousel.padding_top || 0, 0), t.padding_bottom = parseInt(i[o].carousel.padding_bottom || 0, 0), "outer-left" != t.position && "outer-right" != t.position || (i[o].outernav = !0));
            var g = a.data("key"),
                u = t.c.find(n),
                h = u.find(d),
                m = t.tmp;
            t.space = parseFloat(t.space) || 0, t.maxw = "horizontal" === t.direction ? t.width * t.visibleAmount + t.space * (t.visibleAmount - 1) : t.width, t.maxh = "horizontal" === t.direction ? t.height : t.height * t.visibleAmount + t.space * (t.visibleAmount - 1), t.maxw += 2 * t.mhoff, t.maxh += 2 * t.mvoff, void 0 !== i[o].thumbs[a.index()] && jQuery.each(i[o].thumbs[a.index()].params, function(e, i) {
                m = m.replace(i.from, i.to)
            });
            var v = jQuery("<" + p + ' data-liindex="' + a.index() + '" data-key="' + g + '" class="' + r + '" style="width:' + t.width + "px;height:" + t.height + 'px;">' + m + "<" + p + ">");
            void 0 !== i[o].thumbs[a.index()] && v.find(c).css({
                backgroundImage: "url(" + i[o].thumbs[a.index()].src + ")"
            }), h.append(v);
            var f = t.c.find(l).length,
                y = v.outerWidth(),
                w = v.outerHeight(),
                b = y + parseInt(void 0 === t.space ? 0 : t.space, 0),
                _ = w + parseInt(void 0 === t.space ? 0 : t.space, 0);
            "vertical" === t.direction ? (v.css({
                top: (f - 1) * _ + "px",
                left: "0px"
            }), h.css({
                height: (f - 1) * _ + w,
                width: y
            })) : (v.css({
                left: (f - 1) * b + "px",
                top: "0px"
            }), h.css({
                width: (f - 1) * b + y,
                height: w
            })), u.css({
                maxWidth: t.maxw + "px",
                maxHeight: t.maxh + "px"
            }), t.c.css({
                maxWidth: t.maxw + "px",
                maxHeight: t.maxh + "px"
            }), v.on("click", function() {
                i[o].sc_indicator = "bullet", "carousel" === i[o].sliderType && (i[o].ctNavElement = !0);
                var t = e.parent().find(d).data("distance");
                t = void 0 === t ? 0 : t, Math.abs(t) < 10 && (e.revcallslidewithid(g), e.parent().find(s).removeClass("selected"), jQuery(this).addClass("selected"))
            })
        },
        S = function(e, t, a) {
            return null == e || void 0 === e.c ? a : (e.hide_under > i[t].canv.width || i[t].canv.width > e.hide_over ? (!0 !== e.tpForceNotVisible && (e.c.addClass("tp-forcenotvisible"), e.isVisible = !1, a = !0), e.tpForceNotVisible = !0) : (!1 !== e.tpForceNotVisible && (e.c.removeClass("tp-forcenotvisible"), e.isVisible = !0, a = !0), e.tpForceNotVisible = !1), a)
        };
    window.RS_MODULES = window.RS_MODULES || {}, window.RS_MODULES.navigation = {
        loaded: !0,
        version: "6.3.2"
    }, window.RS_MODULES.checkMinimal && window.RS_MODULES.checkMinimal()
}(jQuery),
function(e) {
    "use strict";
    window._R_is_Editor ? RVS._R = void 0 === RVS._R ? {} : RVS._R : window._R_is_Editor = !1, jQuery.fn.revolution = jQuery.fn.revolution || {};
    var i = _R_is_Editor ? RVS._R : jQuery.fn.revolution;
    jQuery.extend(!0, i, {
        bgW: function(e, t) {
            return _R_is_Editor ? RVS.RMD.width : "carousel" === i[e].sliderType ? i[e].justifyCarousel ? i[e].carousel.slide_widths[void 0 !== t ? t : i[e].carousel.focused] : i[e].carousel.slide_width : i[e].module.width
        },
        bgH: function(e, t) {
            return _R_is_Editor ? RVS.RMD.height : "carousel" === i[e].sliderType ? i[e].carousel.slide_height : i[e].module.height
        },
        getPZSides: function(e, i, t, a, r, o, s) {
            var n = e * t,
                d = i * t,
                l = Math.abs(a - n),
                c = Math.abs(r - d),
                p = new Object;
            return p.l = (0 - o) * l, p.r = p.l + n, p.t = (0 - s) * c, p.b = p.t + d, p.h = o, p.v = s, p
        },
        getPZCorners: function(e, t, a, r) {
            var o = e.bgposition.split(" ") || "center center",
                s = "center" == o[0] ? "50%" : "left" == o[0] || "left" == o[1] ? "0%" : "right" == o[0] || "right" == o[1] ? "100%" : o[0],
                n = "center" == o[1] ? "50%" : "top" == o[0] || "top" == o[1] ? "0%" : "bottom" == o[0] || "bottom" == o[1] ? "100%" : o[1];
            s = parseInt(s, 0) / 100 || 0, n = parseInt(n, 0) / 100 || 0;
            var d = new Object;
            return d.start = i.getPZSides(r.start.width, r.start.height, r.start.scale, t, a, s, n), d.end = i.getPZSides(r.start.width, r.start.height, r.end.scale, t, a, s, n), d
        },
        getPZValues: function(e) {
            var i = e.panzoom.split(";"),
                t = {
                    duration: 10,
                    ease: "none",
                    scalestart: 1,
                    scaleend: 1,
                    rotatestart: .01,
                    rotateend: 0,
                    blurstart: 0,
                    blurend: 0,
                    offsetstart: "0/0",
                    offsetend: "0/0"
                };
            for (var a in i)
                if (i.hasOwnProperty(a)) {
                    var r = i[a].split(":"),
                        o = r[0],
                        s = r[1];
                    switch (o) {
                        case "d":
                            t.duration = parseInt(s, 0) / 1e3;
                            break;
                        case "e":
                            t.ease = s;
                            break;
                        case "ss":
                            t.scalestart = parseInt(s, 0) / 100;
                            break;
                        case "se":
                            t.scaleend = parseInt(s, 0) / 100;
                            break;
                        case "rs":
                            t.rotatestart = parseInt(s, 0);
                            break;
                        case "re":
                            t.rotateend = parseInt(s, 0);
                            break;
                        case "bs":
                            t.blurstart = parseInt(s, 0);
                            break;
                        case "be":
                            t.blurend = parseInt(s, 0);
                            break;
                        case "os":
                            t.offsetstart = s;
                            break;
                        case "oe":
                            t.offsetend = s
                    }
                }
            return t.offsetstart = t.offsetstart.split("/") || [0, 0], t.offsetend = t.offsetend.split("/") || [0, 0], t.rotatestart = 0 === t.rotatestart ? .01 : t.rotatestart, e.panvalues = t, e.bgposition = "center center" == e.bgposition ? "50% 50%" : e.bgposition, t
        },
        pzCalcL: function(e, t, a) {
            var r, o, s, n, d, l, c = void 0 === a.panvalues ? jQuery.extend(!0, {}, i.getPZValues(a)) : jQuery.extend(!0, {}, a.panvalues),
                p = c.offsetstart,
                g = c.offsetend,
                u = {
                    start: {
                        width: e,
                        height: _R_is_Editor ? e / a.loadobj.width * a.loadobj.height : e / a.owidth * a.oheight,
                        rotation: c.rotatestart,
                        scale: c.scalestart,
                        transformOrigin: "0% 0%"
                    },
                    end: {
                        rotation: c.rotateend,
                        scale: c.scaleend
                    }
                };
            c.scalestart, a.owidth, a.oheight, c.scaleend, a.owidth, a.oheight;
            return u.start.height < t && (l = t / u.start.height, u.start.height = t, u.start.width = u.start.width * l), .01 === c.rotatestart && 0 === c.rotateend && (delete u.start.rotation, delete u.end.rotation), r = i.getPZCorners(a, e, t, u), p[0] = parseFloat(p[0]) + r.start.l, g[0] = parseFloat(g[0]) + r.end.l, p[1] = parseFloat(p[1]) + r.start.t, g[1] = parseFloat(g[1]) + r.end.t, o = r.start.r - r.start.l, s = r.start.b - r.start.t, n = r.end.r - r.end.l, d = r.end.b - r.end.t, p[0] = p[0] > 0 ? 0 : o + p[0] < e ? e - o : p[0], g[0] = g[0] > 0 ? 0 : n + g[0] < e ? e - n : g[0], p[1] = p[1] > 0 ? 0 : s + p[1] < t ? t - s : p[1], g[1] = g[1] > 0 ? 0 : d + g[1] < t ? t - d : g[1], u.start.x = p[0], u.start.y = p[1], u.end.x = g[0], u.end.y = g[1], u.end.ease = c.ease, u
        },
        pzDrawShadow: function(e, t, a) {
            var r = a.start.width * a.start.scale,
                o = a.start.height * a.start.scale;
            t.shadowCTX.clearRect(0, 0, t.shadowCanvas.width, t.shadowCanvas.height), t.shadowCTX.save(), t.shadowCTX.translate(a.start.x, a.start.y), void 0 !== a.start.rotation && t.shadowCTX.rotate(a.start.rotation * Math.PI / 180), t.shadowCTX.drawImage(t.loadobj.img, 0, 0, r, o), t.shadowCTX.restore(), "animating" !== t.currentState ? (i.updateSlideBGs(e, a.slidekey, t, !0), void 0 !== a.start.blur && (t.canvas.style.filter = 0 === a.start.blur ? "none" : "blur(" + a.start.blur + "px)")) : void 0 !== a.start.blur && t.canvasFilter ? t.canvasFilterBlur = a.start.blur : t.canvas.style.filter = 0 === a.start.blur ? "none" : "blur(" + a.start.blur + "px)"
        },
        startPanZoom: function(e, t, a, r, o, s) {
            var n = _R_is_Editor ? e : e.data();
            if (void 0 !== n.panzoom && null !== n.panzoom) {
                var d = _R_is_Editor ? n : i[t].sbgs[s];
                _R_is_Editor || "carousel" !== i[t].sliderType || (i[t].carousel.justify && void 0 === i[t].carousel.slide_widths && i.setCarouselDefaults(t, !0), i[t].carousel.justify || (void 0 === i[t].carousel.slide_width && (i[t].carousel.slide_width = !0 !== i[t].carousel.stretch ? i[t].gridwidth[i[t].level] * (0 === i[t].CM.w ? 1 : i[t].CM.w) : i[t].canv.width), void 0 === i[t].carousel.slide_height && (i[t].carousel.slide_height = !0 !== i[t].carousel.stretch ? i[t].gridheight[i[t].level] * (0 === i[t].CM.w ? 1 : i[t].CM.w) : i[t].canv.height)));
                var l, c = i.getmDim(t, r, d),
                    p = i.pzCalcL(c.width, c.height, n);
                _R_is_Editor || (i[t].panzoomTLs = void 0 === i[t].panzoomTLs ? {} : i[t].panzoomTLs, i[t].panzoomBGs = void 0 === i[t].panzoomBGs ? {} : i[t].panzoomBGs, void 0 === i[t].panzoomBGs[r] && (i[t].panzoomBGs[r] = e), l = i[t].panzoomTLs[r]), a = a || 0, void 0 !== l && (l.pause(), l.kill(), l = void 0), l = tpGS.gsap.timeline({
                    paused: !0
                }), n.panvalues.duration = NaN === n.panvalues.duration || void 0 === n.panvalues.duration ? 10 : n.panvalues.duration, _R_is_Editor || void 0 === n || void 0 === d || (d.panvalues = n.panvalues), void 0 !== d && (void 0 === d.shadowCanvas && (d.shadowCanvas = document.createElement("canvas"), d.shadowCTX = d.shadowCanvas.getContext("2d"), d.shadowCanvas.style.background = "transparent", d.shadowCanvas.style.opacity = 1), d.shadowCanvas.width = c.width, d.shadowCanvas.height = c.height, p.slideindex = r, p.slidekey = _R_is_Editor ? void 0 : s, i.pzDrawShadow(t, d, p), p.end.onUpdate = function() {
                    i.pzDrawShadow(t, d, p)
                }, d.panStart = jQuery.extend(!0, {}, p.start), void 0 === n.panvalues.blurstart || void 0 === n.panvalues.blurend || 0 === n.panvalues.blurstart && 0 === n.panvalues.blurend || (p.start.blur = n.panvalues.blurstart, p.end.blur = n.panvalues.blurend), l.add(tpGS.gsap.to(p.start, n.panvalues.duration, p.end), 0), l.progress(a), "play" !== o && "first" !== o || l.play(), _R_is_Editor ? RVS.TL[RVS.S.slideId].panzoom = l : i[t].panzoomTLs[r] = l)
            }
        }
    }), window.RS_MODULES = window.RS_MODULES || {}, window.RS_MODULES.panzoom = {
        loaded: !0,
        version: "6.2.0"
    }, window.RS_MODULES.checkMinimal && window.RS_MODULES.checkMinimal()
}(jQuery),
function(e) {
    "use strict";
    jQuery.fn.revolution = jQuery.fn.revolution || {};
    var i = jQuery.fn.revolution;
    jQuery.extend(!0, i, {
        checkForParallax: function(e) {
            var r = i[e].parallax;
            if (!r.done) {
                if (r.done = !0, i.ISM && r.disable_onmobile) return !1;
                if ("3D" == r.type || "3d" == r.type) {
                    if (i.addSafariFix(e), tpGS.gsap.set(i[e].c, {
                            overflow: r.ddd_overflow
                        }), tpGS.gsap.set(i[e].canvas, {
                            overflow: r.ddd_overflow
                        }), "carousel" != i[e].sliderType && r.ddd_shadow) {
                        var o = jQuery('<div class="dddwrappershadow"></div>');
                        tpGS.gsap.set(o, {
                            force3D: "auto",
                            transformPerspective: 1600,
                            transformOrigin: "50% 50%",
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            zIndex: 0
                        }), i[e].c.prepend(o)
                    }
                    for (var s in i[e].slides) i[e].slides.hasOwnProperty(s) && t(jQuery(i[e].slides[s]), e);
                    i[e].c.find("rs-static-layers").length > 0 && (tpGS.gsap.set(i[e].c.find("rs-static-layers"), {
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }), t(i[e].c.find("rs-static-layers"), e))
                }
                r.pcontainers = {}, r.bgcontainers = [], r.bgcontainer_depths = [], r.speed = void 0 === r.speed ? 0 : parseInt(r.speed, 0), r.speedbg = void 0 === r.speedbg ? 0 : parseInt(r.speedbg, 0), r.speedls = void 0 === r.speedls ? 0 : parseInt(r.speedls, 0), i[e].c.find("rs-slide rs-sbg-wrap, rs-slide rs-bgvideo").each(function() {
                    var t = jQuery(this),
                        a = t.data("parallax");
                    window.isSafari11 || (i[e].parZ = 1), void 0 !== (a = "on" == a || !0 === a ? 1 : a) && "off" !== a && !1 !== a && (r.bgcontainers.push(t.closest("rs-sbg-px")), r.bgcontainer_depths.push(i[e].parallax.levels[parseInt(a, 0) - 1] / 100))
                });
                for (s = 1; s <= r.levels.length; s++) {
                    for (var n in i[e].slides)
                        if (i[e].slides.hasOwnProperty(n)) {
                            var d = (c = i[e].slides[n]).dataset.key;
                            void 0 === r.pcontainers[d] && (r.pcontainers[d] = {}), a(s, r, c, r.pcontainers[d])
                        }
                    d = "static";
                    void 0 === r.pcontainers[d] && (r.pcontainers[d] = {}), a(s, r, i[e].slayers[0], r.pcontainers[d]), JSON.stringify(r.pcontainers[d]) == JSON.stringify({}) && delete r.pcontainers[d]
                }
                if ("mouse" == r.type || "mousescroll" == r.type || "3D" == r.type || "3d" == r.type) {
                    var l = "rs-slide .dddwrapper, .dddwrappershadow, rs-slide .dddwrapper-layer, rs-static-layers .dddwrapper-layer";
                    for (var n in "carousel" === i[e].sliderType && (l = "rs-slide .dddwrapper, rs-slide .dddwrapper-layer, rs-static-layers .dddwrapper-layer"), r.sctors = {}, i[e].slides)
                        if (i[e].slides.hasOwnProperty(n)) {
                            var c;
                            d = (c = i[e].slides[n]).dataset.key;
                            r.sctors[d] = c.querySelectorAll(l)
                        }
                    i[e].slayers[0] && (r.sctors.static = i[e].slayers[0].querySelectorAll(l)), r.mouseEntered = !1, i[e].c.on("mouseenter", function(t) {
                        var a = i[e].c.offset().top,
                            o = i[e].c.offset().left;
                        r.mouseEnterX = t.pageX - o, r.mouseEnterY = t.pageY - a, r.mouseEntered = !0
                    });
                    var p = this.updateParallax.bind(this, e, r);
                    i[e].c.on("mousemove.hoverdir, mouseleave.hoverdir, trigger3dpath", function(e) {
                        r.eventData = e, void 0 !== r.frame && "mouseleave" !== e.type || (r.frame = window.requestAnimationFrame(p))
                    }), i.ISM && window.addEventListener("deviceorientation", function(e) {
                        r.eventData = e, void 0 === r.frame && (r.frame = window.requestAnimationFrame(p))
                    })
                }
                var g = i[e].scrolleffect;
                g.set && (g.multiplicator_layers = parseFloat(g.multiplicator_layers), g.multiplicator = parseFloat(g.multiplicator)), void 0 !== g._L && 0 === g._L.length && (g._L = !1), void 0 !== g.bgs && 0 === g.bgs.length && (g.bgs = !1)
            }
        },
        getLayerParallaxOffset: function(e, t, a) {
            return void 0 !== i[e].parallax && void 0 !== i[e].parallax.pcontainers && void 0 !== i[e].parallax.pcontainers[i[e]._L[t].slidekey] && void 0 !== i[e].parallax.pcontainers[i[e]._L[t].slidekey][t] ? Math.abs(i[e].parallax.pcontainers[i[e]._L[t].slidekey][t]["offs" + a]) : 0
        },
        updateParallax: function(e, t) {
            t.frame && (t.frame = window.cancelAnimationFrame(t.frame));
            var a, r, o = t.eventData,
                s = i[e].c.offset().left,
                n = i[e].c.offset().top,
                d = i[e].canv.width,
                l = i[e].canv.height,
                c = t.speed / 1e3 || 3;
            if ("enterpoint" == t.origo && "deviceorientation" !== o.type ? (!1 === t.mouseEntered && (t.mouseEnterX = o.pageX - s, t.mouseEnterY = o.pageY - n, t.mouseEntered = !0), a = t.mouseEnterX - (o.pageX - s), r = t.mouseEnterY - (o.pageY - n), c = t.speed / 1e3 || .4) : "deviceorientation" !== o.type && (a = d / 2 - (o.pageX - s), r = l / 2 - (o.pageY - n)), "deviceorientation" == o.type) {
                var p, g, u;
                p = o.beta - 60, g = o.gamma, u = p;
                var h = Math.abs(t.orientationX - g) > 1 || Math.abs(t.orientationY - u) > 1;
                if (t.orientationX = g, t.orientationY = u, !h) return;
                if (i.winW > i.getWinH(e)) {
                    var m = g;
                    g = u, u = m
                }
                a = 360 / d * (g *= 1.5), r = 180 / l * (u *= 1.5)
            }
            for (var v in o.type, "mouseout" === o.type && (a = 0, r = 0, t.mouseEntered = !1), t.pcontainers)
                if (t.pcontainers.hasOwnProperty(v) && (void 0 === i[e].activeRSSlide || "static" === v || i[e].slides[i[e].activeRSSlide].dataset.key === v))
                    for (var f in t.pcontainers[v])
                        if (t.pcontainers[v].hasOwnProperty(f)) {
                            var y = t.pcontainers[v][f];
                            y.pl = "3D" == t.type || "3d" == t.type ? y.depth / 200 : y.depth / 100, y.offsh = a * y.pl, y.offsv = r * y.pl, "mousescroll" == t.type ? tpGS.gsap.to(y.tpw, c, {
                                force3D: "auto",
                                x: y.offsh,
                                ease: "power3.out",
                                overwrite: "all"
                            }) : tpGS.gsap.to(y.tpw, c, {
                                force3D: "auto",
                                x: y.offsh,
                                y: y.offsv,
                                ease: "power3.out",
                                overwrite: "all"
                            })
                        }
            if ("3D" == t.type || "3d" == t.type)
                for (var v in t.sctors)
                    if (t.sctors.hasOwnProperty(v) && (void 0 === i[e].activeRSSlide || "static" === v || i[e].slides[i[e].activeRSSlide].dataset.key === v))
                        for (var f in t.sctors[v])
                            if (t.sctors[v].hasOwnProperty(f)) {
                                n = jQuery(t.sctors[v][f]);
                                var w = i.isFirefox() ? Math.min(25, t.levels[t.levels.length - 1]) / 200 : t.levels[t.levels.length - 1] / 200,
                                    b = a * w,
                                    _ = r * w,
                                    S = 0 == i[e].canv.width ? 0 : Math.round(a / i[e].canv.width * w * 100) || 0,
                                    x = 0 == i[e].canv.height ? 0 : Math.round(r / i[e].canv.height * w * 100) || 0,
                                    k = n.closest("rs-slide"),
                                    L = 0,
                                    R = !1;
                                "deviceorientation" === o.type && (b = a * (w = t.levels[t.levels.length - 1] / 200), _ = r * w * 3, S = 0 == i[e].canv.width ? 0 : Math.round(a / i[e].canv.width * w * 500) || 0, x = 0 == i[e].canv.height ? 0 : Math.round(r / i[e].canv.height * w * 700) || 0), n.hasClass("dddwrapper-layer") && (L = t.ddd_z_correction || 65, R = !0), n.hasClass("dddwrapper-layer") && (b = 0, _ = 0), k.index() === i[e].pr_active_key || "carousel" != i[e].sliderType ? !t.ddd_bgfreeze || R ? tpGS.gsap.to(n, c, {
                                    rotationX: x,
                                    rotationY: -S,
                                    x: b,
                                    z: L,
                                    y: _,
                                    ease: "power3.out",
                                    overwrite: "all"
                                }) : tpGS.gsap.to(n, .5, {
                                    force3D: "auto",
                                    rotationY: 0,
                                    rotationX: 0,
                                    z: 0,
                                    ease: "power3.out",
                                    overwrite: "all"
                                }) : tpGS.gsap.to(n, .5, {
                                    force3D: "auto",
                                    rotationY: 0,
                                    x: 0,
                                    y: 0,
                                    rotationX: 0,
                                    z: 0,
                                    ease: "power3.out",
                                    overwrite: "all"
                                }), "mouseleave" != o.type && "mouseout" !== o.type || tpGS.gsap.to(this, 3.8, {
                                    z: 0,
                                    ease: "power3.out"
                                })
                            }
        },
        parallaxProcesses: function(e, t, a, r) {
            var o = i[e].fixedOnTop ? Math.min(1, Math.max(0, window.scrollY / i.lastwindowheight)) : Math.min(1, Math.max(0, (0 - (t.top - i.lastwindowheight)) / (t.hheight + i.lastwindowheight))),
                s = (t.top >= 0 && t.top <= i.lastwindowheight || t.top <= 0 && t.bottom >= 0 || t.top <= 0 && t.bottom, i[e].slides[void 0 === i[e].pr_active_key ? 0 : i[e].pr_active_key]);
            if (i[e].scrollProg = o, i[e].scrollProgBasics = {
                    top: t.top,
                    height: t.hheight,
                    bottom: t.bottom
                }, i[e].sbtimeline.fixed ? (!1 === i[e].fixedScrollOnState || !i.stickySupported || 0 != i[e].fullScreenOffsetResult && null != i[e].fullScreenOffsetResult ? i.stickySupported = !1 : (i[e].topc.addClass("rs-stickyscrollon"), i[e].fixedScrollOnState = !0), void 0 === i[e].sbtimeline.rest && i.updateFixedScrollTimes(e), t.top >= i[e].fullScreenOffsetResult && t.top <= i.lastwindowheight ? (o = i[e].sbtimeline.fixStart * (1 - t.top / i.lastwindowheight) / 1e3, !0 !== i.stickySupported && !1 !== i[e].fixedScrollOnState && (i[e].topc.removeClass("rs-fixedscrollon"), tpGS.gsap.set(i[e].cpar, {
                    top: 0,
                    y: 0
                }), i[e].fixedScrollOnState = !1)) : t.top <= i[e].fullScreenOffsetResult && t.bottom >= i[e].module.height ? (!0 !== i.stickySupported && !0 !== i[e].fixedScrollOnState && (i[e].fixedScrollOnState = !0, i[e].topc.addClass("rs-fixedscrollon"), tpGS.gsap.set(i[e].cpar, {
                    top: 0,
                    y: i[e].fullScreenOffsetResult
                })), o = (i[e].sbtimeline.fixStart + i[e].sbtimeline.time * (Math.abs(t.top) / (t.hheight - i[e].module.height))) / 1e3) : (!0 !== i.stickySupported && (tpGS.gsap.set(i[e].cpar, {
                    top: i[e].scrollproc >= 0 ? 0 : t.height - i[e].module.height
                }), !1 !== i[e].fixedScrollOnState && (i[e].topc.removeClass("rs-fixedscrollon"), i[e].fixedScrollOnState = !1)), o = t.top > i.lastwindowheight ? 0 : (i[e].sbtimeline.fixEnd + i[e].sbtimeline.rest * (1 - t.bottom / i[e].module.height)) / 1e3)) : o = i[e].duration * o / 1e3, void 0 !== s && void 0 !== i.gA(s, "key") && !0 !== a) {
                var n = 0;
                for (var d in i[e].sbas[i.gA(s, "key")])
                    if (void 0 !== i[e]._L[d] && null == i[e]._L[d].timeline && n++, void 0 !== i[e]._L[d] && void 0 !== i[e]._L[d].timeline && (1 == i[e]._L[d].animationonscroll || "true" == i[e]._L[d].animationonscroll)) {
                        n = -9999;
                        var l = void 0 !== i[e]._L[d].scrollBasedOffset ? o + i[e]._L[d].scrollBasedOffset : o;
                        l = l <= 0 ? 0 : l < .1 ? .1 : l, i[e]._L[d].animteToTime !== l && (i[e]._L[d].animteToTime = l, tpGS.gsap.to(i[e]._L[d].timeline, i[e].sbtimeline.speed, {
                            time: l,
                            ease: i[e].sbtimeline.ease
                        }))
                    }
                n > 0 && requestAnimationFrame(function() {
                    i.parallaxProcesses(e, t, a, r)
                }), i[e].c.trigger("timeline_scroll_processed", {
                    id: e,
                    mproc: o,
                    speed: i[e].sbtimeline.speed
                })
            }
            if (i.ISM && i[e].parallax.disable_onmobile) return !1;
            var c, p = i[e].parallax;
            if (void 0 !== i[e].slides[i[e].pr_processing_key] && void 0 !== i[e].slides[i[e].pr_processing_key].dataset && (c = i[e].slides[i[e].pr_processing_key].dataset.key), "3d" != p.type && "3D" != p.type) {
                if ("scroll" == p.type || "mousescroll" == p.type)
                    for (var g in p.pcontainers)
                        if (p.pcontainers.hasOwnProperty(g) && (void 0 === i[e].activeRSSlide || "static" === g || i[e].slides[i[e].activeRSSlide].dataset.key === g || c === g))
                            for (var u in p.pcontainers[g])
                                if (p.pcontainers[g].hasOwnProperty(u)) {
                                    var h = p.pcontainers[g][u],
                                        m = void 0 !== r ? r : p.speedls / 1e3 || 0;
                                    h.pl = h.depth / 100, h.offsv = Math.round(i[e].scrollproc * (-h.pl * i[e].canv.height) * 10) / 10 || 0, tpGS.gsap.to(h.tpw, m, {
                                        overwrite: "auto",
                                        force3D: "auto",
                                        y: h.offsv
                                    })
                                }
                if (p.bgcontainers)
                    for (u = 0; u < p.bgcontainers.length; u++) {
                        var v = p.bgcontainers[u],
                            f = p.bgcontainer_depths[u],
                            y = i[e].scrollproc * (-f * i[e].canv.height) || 0;
                        m = void 0 !== r ? r : p.speedbg / 1e3 || .015;
                        m = void 0 !== i[e].parallax.lastBGY && 0 === m && Math.abs(y - i[e].parallax.lastBGY) > 50 ? .15 : m, tpGS.gsap.to(v, m, {
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            backfaceVisibility: "hidden",
                            force3D: "true",
                            y: y + "px"
                        }), i[e].parallax.lastBGY = y
                    }
            }
            var w = i[e].scrolleffect;
            if (w.set && (!i.ISM || !1 === w.disable_onmobile)) {
                var b = Math.abs(i[e].scrollproc) - w.tilt / 100;
                if (b = b < 0 ? 0 : b, !1 !== w._L) {
                    var _ = 1 - b * w.multiplicator_layers,
                        S = {
                            force3D: "true"
                        };
                    if ("top" == w.direction && i[e].scrollproc >= 0 && (_ = 1), "bottom" == w.direction && i[e].scrollproc <= 0 && (_ = 1), _ = _ > 1 ? 1 : _ < 0 ? 0 : _, w.fade && (S.opacity = _), w.scale) {
                        var x = _;
                        S.scale = 1 - x + 1
                    }
                    if (w.blur) R = (R = (1 - _) * w.maxblur) <= .03 ? 0 : R, S["-webkit-filter"] = "blur(" + R + "px)", S.filter = "blur(" + R + "px)";
                    if (w.grayscale) {
                        var k = "grayscale(" + 100 * (1 - _) + "%)";
                        S["-webkit-filter"] = void 0 === S["-webkit-filter"] ? k : S["-webkit-filter"] + " " + k, S.filter = void 0 === S.filter ? k : S.filter + " " + k
                    }
                    tpGS.gsap.set(w._L, S)
                }
                if (!1 !== w.bgs) {
                    _ = 1 - b * w.multiplicator, S = {
                        backfaceVisibility: "hidden",
                        force3D: "true"
                    };
                    for (var L in "top" == w.direction && i[e].scrollproc >= 0 && (_ = 1), "bottom" == w.direction && i[e].scrollproc <= 0 && (_ = 1), _ = _ > 1 ? 1 : _ < 0 ? 0 : _, w.bgs)
                        if (w.bgs.hasOwnProperty(L)) {
                            if (w.bgs[L].fade && (S.opacity = _), w.bgs[L].blur) {
                                var R = (1 - _) * w.maxblur;
                                S["-webkit-filter"] = "blur(" + R + "px)", S.filter = "blur(" + R + "px)"
                            }
                            if (w.bgs[L].grayscale) {
                                k = "grayscale(" + 100 * (1 - _) + "%)";
                                S["-webkit-filter"] = void 0 === S["-webkit-filter"] ? k : S["-webkit-filter"] + " " + k, S.filter = void 0 === S.filter ? k : S.filter + " " + k
                            }
                            tpGS.gsap.set(w.bgs[L].c, S)
                        }
                }
            }
        }
    });
    var t = function(e, t) {
        var a = i[t].parallax;
        e.find("rs-sbg-wrap").wrapAll('<div class="dddwrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden"></div>');
        var r = e[0].querySelectorAll(".rs-parallax-wrap"),
            o = document.createElement("div");
        o.className = "dddwrapper-layer", o.style.width = "100%", o.style.height = "100%", o.style.position = "absolute", o.style.top = "0px", o.style.left = "0px", o.style.zIndex = 5, o.style.overflow = a.ddd_layer_overflow;
        for (var s = 0; s < r.length; s++) r.hasOwnProperty(s) && null === i.closestNode(r[s], "RS-GROUP") && null === i.closestNode(r[s], "RS-ROW") && o.appendChild(r[s]);
        e[0].appendChild(o), e.find(".rs-pxl-tobggroup").closest(".rs-parallax-wrap").wrapAll('<div class="dddwrapper-layertobggroup" style="position:absolute;top:0px;left:0px;z-index:50;width:100%;height:100%"></div>');
        var n = e.find(".dddwrapper"),
            d = e.find(".dddwrapper-layer");
        e.find(".dddwrapper-layertobggroup").appendTo(n), "carousel" == i[t].sliderType && (a.ddd_shadow && n.addClass("dddwrappershadow"), tpGS.gsap.set(n, {
            borderRadius: i[t].carousel.border_radius
        })), tpGS.gsap.set(e, {
            overflow: "visible",
            transformStyle: "preserve-3d",
            perspective: 1600
        }), tpGS.gsap.set(n, {
            force3D: "auto",
            transformOrigin: "50% 50%",
            transformStyle: "preserve-3d",
            transformPerspective: 1600
        }), tpGS.gsap.set(d, {
            force3D: "auto",
            transformOrigin: "50% 50%",
            zIndex: 5,
            transformStyle: "flat",
            transformPerspective: 1600
        }), tpGS.gsap.set(i[t].canvas, {
            transformStyle: "preserve-3d",
            transformPerspective: 1600
        })
    };

    function a(t, a, r, o) {
        e(r).find(".rs-pxl-" + t).each(function() {
            var e = this.className.indexOf("rs-pxmask") >= 0,
                r = e ? i.closestNode(this, "RS-PX-MASK") : i.closestClass(this, "rs-parallax-wrap");
            r && (e && !window.isSafari11 && (tpGS.gsap.set(r, {
                z: 1
            }), tpGS.gsap.set(i.closestNode(r, "RS-BG-ELEM"), {
                z: 1
            })), r.dataset.parallaxlevel = a.levels[t - 1], r.classList.add("tp-parallax-container"), o[this.id] = {
                tpw: r,
                depth: a.levels[t - 1],
                offsv: 0,
                offsh: 0
            })
        })
    }
    window.RS_MODULES = window.RS_MODULES || {}, window.RS_MODULES.parallax = {
        loaded: !0,
        version: "6.2.24"
    }, window.RS_MODULES.checkMinimal && window.RS_MODULES.checkMinimal()
}(jQuery),
function(e) {
    "use strict";
    window._R_is_Editor ? RVS._R = void 0 === RVS._R ? {} : RVS._R : window._R_is_Editor = !1;
    jQuery.fn.revolution = jQuery.fn.revolution || {};
    var i = _R_is_Editor ? RVS._R : jQuery.fn.revolution;
    _R_is_Editor && (RVS._R.isNumeric = RVS.F.isNumeric), jQuery.extend(!0, i, {
        getSlideAnimationObj: function(e, t, a) {
            var r, o = {};
            for (var s in void 0 === t.anim && null == t.in && (t.in = "o:0"), t)
                if (t.hasOwnProperty(s) && void 0 !== t[s]) {
                    var n = t[s].split(";");
                    for (var d in n) n.hasOwnProperty(d) && void 0 !== (r = n[d].split(":"))[0] && void 0 !== r[1] && (o[s] = void 0 === o[s] ? {} : o[s], o[s][r[0]] = "d3" === s && "c" === r[0] ? r[1] : r[1].split(",")[0])
                }
            return o.in = void 0 === o.in ? {} : o.in, o.anim = void 0 === o.anim ? {
                e: "basic"
            } : o.anim, _R_is_Editor || void 0 === o.in || void 0 === o.in.prst || i.loadSlideAnimLibrary(e, {
                key: a,
                prst: o.in.prst
            }), i[e].sbgs[a].slideanimationRebuild = !1, o
        },
        loadSlideAnimLibrary: function(e, t) {
            void 0 === i.SLTR && !0 !== i.SLTR_loading ? (i.SLTR_loading = !0, jQuery.ajax({
                type: "post",
                url: i[e].ajaxUrl,
                dataType: "json",
                data: {
                    action: "revslider_ajax_call_front",
                    client_action: "get_transitions"
                },
                success: function(a, r, o) {
                    1 == a.success && (i.SLTR = a.transitions, void 0 !== t && i.setRandomDefaults(e, t.key, t.prst))
                },
                error: function(e) {
                    console.log("Transition Table can not be loaded"), console.log(e)
                }
            })) : void 0 !== t && void 0 !== i.SLTR && i.setRandomDefaults(e, t.key, t.prst)
        },
        convertSlideAnimVals: function(e) {
            return {
                anim: {
                    eng: e.eng,
                    ms: parseInt(e.speed, 0),
                    o: e.o,
                    e: e.e,
                    f: e.f,
                    p: e.p,
                    d: parseInt(e.d, 0)
                },
                d3: {
                    f: e.d3.f,
                    d: e.d3.d,
                    z: e.d3.z,
                    t: e.d3.t,
                    c: e.d3.c,
                    e: e.d3.e,
                    fdi: e.d3.fdi,
                    fdo: e.d3.fdo,
                    fz: e.d3.fz,
                    su: e.d3.su,
                    smi: e.d3.smi,
                    sma: e.d3.sma,
                    sc: e.d3.sc,
                    sl: e.d3.sl
                },
                in: {
                    eng: e.in.eng,
                    o: _R_is_Editor && void 0 !== e.preset && 0 === e.preset.indexOf("rnd") ? 0 : i.valBeau(e.in.o),
                    x: i.valBeau(e.in.x),
                    y: i.valBeau(e.in.y),
                    r: i.valBeau(e.in.r),
                    sx: i.valBeau(e.in.sx),
                    sy: i.valBeau(e.in.sy),
                    m: e.in.m,
                    e: e.in.e,
                    row: e.in.row,
                    col: e.in.col,
                    mo: "false" !== e.in.mou && !1 !== e.in.mou ? i.valBeau(e.in.mo) : 0,
                    moo: "false" !== e.in.mou && !1 !== e.in.mou ? i.valBeau(e.in.moo) : "none",
                    mou: e.in.mou
                },
                out: void 0 === e.out.a || "true" == e.out.a || !0 === e.out.a ? void 0 : {
                    a: d(e.out.a),
                    o: i.valBeau(e.out.o),
                    x: i.valBeau(e.out.x),
                    y: i.valBeau(e.out.y),
                    r: i.valBeau(e.out.r),
                    sx: i.valBeau(e.out.sx),
                    sy: i.valBeau(e.out.sy),
                    m: e.out.m,
                    e: e.out.e,
                    row: i.valBeau(e.out.row),
                    col: i.valBeau(e.out.col)
                },
                filter: {
                    u: e.filter.u,
                    e: e.filter.e,
                    b: e.filter.b,
                    g: e.filter.g,
                    h: e.filter.h,
                    s: e.filter.s,
                    c: e.filter.c,
                    i: e.filter.i
                },
                addOns: e.addOns
            }
        },
        setRandomDefaults: function(e, t, a) {
            i[e].sbgs[t].random = i.getAnimObjectByKey(a, i.SLTR)
        },
        getSlideAnim_AddonDefaults: function() {
            var e = {};
            for (var t in i.enabledSlideAnimAddons) e = jQuery.extend(!0, e, i[i.enabledSlideAnimAddons[t]].defaults());
            return e
        },
        getSlideAnim_EmptyObject: function() {
            return {
                speed: 1e3,
                o: "inout",
                e: "basic",
                f: "start",
                p: "none",
                d: 15,
                eng: "animateCore",
                d3: {
                    f: "none",
                    d: "horizontal",
                    z: 300,
                    t: 0,
                    c: "#ccc",
                    e: "power2.inOut",
                    fdi: 1.5,
                    fdo: 2,
                    fz: 0,
                    su: !1,
                    smi: 0,
                    sma: .5,
                    sc: "#000",
                    sl: 1
                },
                filter: {
                    u: !1,
                    e: "default",
                    b: 0,
                    g: 0,
                    h: 100,
                    s: 0,
                    c: 100,
                    i: 0
                },
                in: {
                    o: 1,
                    x: 0,
                    y: 0,
                    r: 0,
                    sx: 1,
                    sy: 1,
                    m: !1,
                    e: "power2.inOut",
                    row: 1,
                    col: 1,
                    mo: 80,
                    mou: !1
                },
                out: {
                    a: "true",
                    o: 1,
                    x: 0,
                    y: 0,
                    r: 0,
                    sx: 1,
                    sy: 1,
                    m: !1,
                    e: "power2.inOut",
                    row: 1,
                    col: 1
                },
                addOns: i.getSlideAnim_AddonDefaults()
            }
        },
        getAnimObjectByKey: function(e, t) {
            if (i.getAnimObjectCacheKey === e) return i.getAnimObjectCache;
            var a;
            for (var r in i.getAnimObjectCacheKey = e, t)
                if (t.hasOwnProperty(r) && void 0 === a)
                    for (var o in t[r])
                        if (t[r].hasOwnProperty(o) && void 0 === a)
                            if (e === o && 0 === e.indexOf("rnd"))(a = t[r][o]).main = r, a.group = o;
                            else
                                for (var s in t[r][o]) t[r][o].hasOwnProperty(s) && void 0 === a && s === e && ((a = t[r][o][s]).main = r, a.group = o);
            return i.getAnimObjectCache = jQuery.extend(!0, {}, a), a
        },
        getRandomSlideTrans: function(e, t, a) {
            if (void 0 !== i.randomSlideAnimCache && void 0 !== i.randomSlideAnimCache[e] && void 0 !== i.randomSlideAnimCache[e][t]) return i.randomSlideAnimCache[e][t][Math.floor(Math.random() * i.randomSlideAnimCache[e][t].length)];
            for (var r in i.randomSlideAnimCache = void 0 === i.randomSlideAnimCache ? {} : i.randomSlideAnimCache, i.randomSlideAnimCache[e] = void 0 === i.randomSlideAnimCache[e] ? {} : i.randomSlideAnimCache[e], i.randomSlideAnimCache[e][t] = void 0 === i.randomSlideAnimCache[e][t] ? [] : i.randomSlideAnimCache[e][t], a)
                if (a.hasOwnProperty(r) && "random" !== r && "custom" !== r && ("all" == e || r == e))
                    for (var o in a[r])
                        if (a[r].hasOwnProperty(o) && "icon" !== o && ("" + t == "undefined" || t.indexOf(o) >= 0))
                            for (var s in a[r][o]) a[r][o].hasOwnProperty(s) && -1 == jQuery.inArray(a[r][o][s].title, ["*north*", "*south*", "*east*", "*west*"]) && i.randomSlideAnimCache[e][t].push(s);
            return i.randomSlideAnimCache[e][t][Math.floor(Math.random() * i.randomSlideAnimCache[e][t].length)]
        },
        cbgW: function(e, t) {
            return _R_is_Editor ? RVS.RMD.width : "carousel" === i[e].sliderType ? i[e].justifyCarousel ? i[e].carousel.slide_widths[void 0 !== t ? t : i[e].carousel.focused] : i[e].carousel.slide_width : i[e].canv.width
        },
        cbgH: function(e, t) {
            return _R_is_Editor ? RVS.RMD.height : "carousel" === i[e].sliderType ? i[e].carousel.slide_height : void 0 !== i[e].maxHeight && i[e].maxHeight > 0 && !i[e].fixedOnTop ? Math.min(i[e].canv.height, i[e].maxHeight) : i[e].canv.height
        },
        valBeau: function(e) {
            return e = ("" + (e = ("" + (e = ("" + (e = ("" + (e = ("" + e).split(",").join("|"))).replace("{", "ran("))).replace("}", ")"))).replace("[", "cyc("))).replace("]", ")")
        },
        animateSlide: function(e, i) {
            return _R_is_Editor && RVS.F.resetSlideTL(), void 0 === tpGS.eases.late && (tpGS.CustomEase.create("late", "M0,0,C0,0,0.474,0.078,0.724,0.26,0.969,0.438,1,1,1,1"), tpGS.CustomEase.create("late2", "M0,0 C0,0 0.738,-0.06 0.868,0.22 1,0.506 1,1 1,1 "), tpGS.CustomEase.create("late3", "M0,0,C0,0,0.682,0.157,0.812,0.438,0.944,0.724,1,1,1,1")), o(e, i)
        },
        getBasic: function(e) {
            return jQuery.extend(!0, {
                attr: null == e || void 0 === e.attr ? ["o", "r", "sx", "sy", "x", "y", "m", "e", "row", "col", "mo", "moo"] : e.attr,
                in: {
                    f: "start",
                    m: !1,
                    o: 1,
                    r: 0,
                    sx: 1,
                    sy: 1,
                    x: 0,
                    y: 0,
                    row: 1,
                    col: 1,
                    e: "power2.inOut",
                    ms: 1e3,
                    mo: 0,
                    moo: "none"
                },
                out: {
                    f: "start",
                    m: !1,
                    o: 1,
                    r: 0,
                    sx: 1,
                    sy: 1,
                    x: 0,
                    y: 0,
                    row: 1,
                    col: 1,
                    e: "power2.inOut",
                    ms: 1e3
                }
            }, e)
        },
        playBGVideo: function(e, t, a) {
            if (_R_is_Editor) a = void 0 === a ? RVS.SBGS[RVS.S.slideId].n : a;
            else {
                if (void 0 === a && (void 0 === i[e].pr_next_bg || 0 === i[e].pr_next_bg.length)) return;
                a = void 0 === a ? i[e].sbgs[void 0 === t ? i[e].pr_next_bg[0].dataset.key : t] : a
            }
            void 0 !== a.bgvid && a.bgvid.length > 0 && (c(e, {}, a, "in"), i.resetVideo(a.bgvid, e), i.playVideo(a.bgvid, e, !0), tpGS.gsap.to(a.bgvid[0], .2, {
                zIndex: 30,
                display: "block",
                autoAlpha: 1,
                delay: .075,
                overwrite: "all"
            }))
        },
        stopBGVideo: function(e, t, a) {
            if (_R_is_Editor) a = void 0 === a ? RVS.SBGS[RVS.S.slideId].n : a;
            else {
                if (void 0 === a && (void 0 === i[e].pr_next_bg || 0 === i[e].pr_next_bg.length)) return;
                a = void 0 === a ? i[e].sbgs[void 0 === t ? i[e].pr_next_bg[0].dataset.key : t] : a
            }
            void 0 !== a.bgvid && a.bgvid.length > 0 && (a.drawVideoCanvasImagesRecall = !1, i.stopVideo(a.bgvid, e), tpGS.gsap.to(a.bgvid[0], .2, {
                autoAlpha: 0,
                zIndex: 0,
                display: "none"
            }))
        },
        SATools: {
            getOffset: function(e, t, a, r) {
                var o = ("" + e).indexOf("%") >= 0;
                return 0 == (e = i.SATools.getSpecialValue(e, r, a)) || void 0 === e ? 0 : o ? t * (parseInt(e) / 100) : parseInt(e)
            },
            getSpecialValue: function(e, t, a, r) {
                if (i.isNumeric(parseFloat(e, 0))) return parseFloat(e, 0);
                var o = ("" + e).split("ran(").length > 1 ? "random" : ("" + e).split("cyc(").length > 1 ? "wrap" : ("" + e).split("(").length > 1 ? "dir" : "unknown",
                    s = ("random" === o ? e.slice(4, -1) : "wrap" === o ? e.slice(4, -1) : e.slice(1, -1)).split("|");
                if ("random" === o) return tpGS.gsap.utils.random(parseFloat(s[0]), parseFloat(s.length > 1 ? s[1] : 0 - s[0]));
                if ("wrap" === o) {
                    var n = tpGS.gsap.utils.wrap(s, t);
                    return ("" + n).split("(").length > 1 ? parseFloat(n.slice(1, -1)) * a + (r ? "%" : "") : n
                }
                return "dir" === o ? parseFloat(s[0]) * a + (r ? "%" : "") : void 0
            }
        },
        getmDim: function(e, t, a) {
            var r = i.cbgW(e, t),
                o = i.cbgH(e, t);
            return a.DPR = _R_is_Editor ? Math.min(window.devicePixelRatio, 2) : i[e].DPR, i.maxDimCheck(a, r, o)
        },
        maxDimCheck: function(e, t, a) {
            var r, o;
            void 0 !== e.video && ("img" === e.video.tagName || null == e.video.videoWidth || e.video.videoWidth);
            if ("animating" !== e.currentState && null == e.panzoom)
                if (e.DPR > 1 && i.ISM && a > 1024) e.DPR = 1, r = t, o = a;
                else {
                    var s = {
                            w: null == e.video || e.isVidImg ? e.loadobj.width : 0 == e.video.videoWidth ? e.loadobj.width : e.video.videoWidth,
                            h: null == e.video || e.isVidImg ? e.loadobj.height : 0 == e.video.videoHeight ? e.loadobj.height : e.video.videoHeight
                        },
                        n = a / s.w,
                        d = t / s.h,
                        l = Math.max(n, d);
                    if (l > e.DPR || n >= 1 && d >= 1 ? e.DPR = 1 : e.DPR > l && (e.DPR = Math.min(e.DPR, e.DPR / l)), r = t * e.DPR, o = a * e.DPR, e.DPR > 1) {
                        var c = t / a;
                        s.w > s.h && s.w < r ? (o = (r = Math.max(t, s.w)) / c, e.DPR = 1) : s.h > s.w && s.h < o && (r = (o = Math.max(a, s.h)) * c, e.DPR = 1)
                    }
                }
            else e.DPR = 1, r = t, o = a;
            return {
                width: Math.round(r),
                height: Math.round(o),
                w: t,
                h: a
            }
        },
        updateSlideBGs: function(e, t, a, r) {
            if (_R_is_Editor) a = void 0 === a ? RVS.SBGS[RVS.S.slideId].n : a;
            else {
                if (void 0 === a && (void 0 === i[e].pr_next_bg || 0 === i[e].pr_next_bg.length)) return;
                a = void 0 === a ? i[e].sbgs[void 0 === t ? i[e].pr_next_bg[0].dataset.key : t] : a
            }(r = void 0 !== a.mDIM && r) || (a.mDIM = i.getmDim(e, a.skeyindex, a)), void 0 !== a.video ? ("IMG" !== a.video.tagName && (a.isVidImg = ""), a.cDIMS = i.getBGCanvasDetails(e, a), a.canvas.width = a.mDIM.width, a.canvas.height = a.mDIM.height, a.ctx.clearRect(0, 0, a.mDIM.width, a.mDIM.height), a.ctx.drawImage(a.shadowCanvas, 0, 0)) : (a.cDIMS = i.getBGCanvasDetails(e, a, r), a.canvas.width = a.mDIM.width, a.canvas.height = a.mDIM.height, "panzoom" === a.currentState || "animating" === a.currentState || void 0 === a.currentState && !_R_is_Editor && "carousel" != i[e].sliderType || (a.ctx.clearRect(0, 0, a.mDIM.width, a.mDIM.height), a.ctx.drawImage(a.shadowCanvas, 0, 0))), "animating" === a.currentState && "carousel" !== i[e].sliderType && i.animatedCanvasUpdate(e, a)
        },
        addCanvas: function() {
            var e = document.createElement("canvas");
            return x = e.getContext("2d"), e.style.background = "transparent", e.style.opacity = 1, x
        },
        updateVideoFrames: function(e, t, a) {
            if (t.now = Date.now(), t.then = void 0 === t.then ? t.now - 500 : t.then, t.elapsed = t.now - t.then, t.fps = "animating" === t.currentState && window._rs_firefox ? 50 : 33, t.elapsed > t.fps) {
                t.then = t.now - t.elapsed % t.fps;
                var r = "img" === t.video.tagName || null == t.video.videoWidth || 0 == t.video.videoWidth;
                void 0 !== t.video && !t.video.BGrendered && void 0 !== t.loadobj && void 0 !== t.loadobj.img || i.ISM && i.isFirefox(e) ? (t.mDIM = i.getmDim(e, t.skeyindex, t), t.pDIMS = s(t.mDIM, t, {
                    width: t.mDIM.width,
                    height: t.mDIM.height,
                    x: 0,
                    y: 0,
                    contw: t.loadobj.width,
                    conth: t.loadobj.height
                }), t.shadowCanvas.width = t.mDIM.width, t.shadowCanvas.height = t.mDIM.height, t.shadowCTX.drawImage(t.loadobj.img, t.pDIMS.x, t.pDIMS.y, t.pDIMS.width, t.pDIMS.height)) : ((a || void 0 === t.sDIMS || r !== t.isVidImg || 0 === t.sDIMS.width || 0 === t.sDIMS.height) && (t.isVidImg = r, t.mDIM = i.getmDim(e, t.skeyindex, t), t.sDIMS = s(t.mDIM, t, {
                    width: t.mDIM.width,
                    height: t.mDIM.height,
                    x: 0,
                    y: 0,
                    contw: t.isVidImg ? t.loadobj.width : t.video.videoWidth,
                    conth: t.isVidImg ? t.loadobj.height : t.video.videoHeight
                })), void 0 !== t.sDIMS && 0 !== t.sDIMS.width && 0 !== t.sDIMS.height && ("animating" === t.currentState ? (t.shadowCanvas.width = t.sDIMS.width, t.shadowCanvas.height = t.sDIMS.height, t.shadowCTX.drawImage(t.video, t.sDIMS.x, t.sDIMS.y, t.sDIMS.width, t.sDIMS.height)) : void 0 === t.animateDirection && (t.canvas.width = t.mDIM.width, t.canvas.height = t.mDIM.height, t.ctx.drawImage(t.video, t.sDIMS.x, t.sDIMS.y, t.sDIMS.width, t.sDIMS.height)), t.shadowCanvas_Drawn = !0))
            }(a || t.drawVideoCanvasImagesRecall && "animating" === t.currentState || "animating" === t.currentState && void 0 === t.shadowCanvas_Drawn) && window.requestAnimationFrame(function() {
                i.updateVideoFrames(e, t)
            })
        },
        createOverlay: function(e, t, a, r) {
            if ("none" === t) return "none";
            a = void 0 === a ? 1 : a;
            r = void 0 === r ? {
                0: "rgba(0, 0, 0, 0)",
                1: "rgba(0, 0, 0, 1)"
            } : r;
            var o = {
                    none: [
                        [0]
                    ],
                    1: [
                        [1, 0],
                        [0, 0]
                    ],
                    2: [
                        [1, 0, 0],
                        [0, 0, 0],
                        [0, 0, 0]
                    ],
                    3: [
                        [1, 0, 0, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0]
                    ],
                    4: [
                        [1],
                        [0]
                    ],
                    5: [
                        [1],
                        [0],
                        [0]
                    ],
                    6: [
                        [1],
                        [0],
                        [0],
                        [0]
                    ],
                    7: [
                        [1, 0]
                    ],
                    8: [
                        [1, 0, 0]
                    ],
                    9: [
                        [1, 0, 0, 0]
                    ],
                    10: [
                        [1, 0, 0, 0, 0],
                        [0, 1, 0, 1, 0],
                        [0, 0, 0, 0, 0],
                        [0, 1, 0, 1, 0],
                        [0, 0, 0, 0, 1]
                    ],
                    11: [
                        [0, 0, 1, 0, 0],
                        [0, 1, 0, 1, 0],
                        [1, 0, 0, 0, 1],
                        [0, 1, 0, 1, 0],
                        [0, 0, 1, 0, 0]
                    ],
                    12: [
                        [1, 0, 0],
                        [0, 1, 0],
                        [0, 0, 1]
                    ],
                    13: [
                        [0, 0, 1],
                        [0, 1, 0],
                        [1, 0, 0]
                    ],
                    14: [
                        [1, 0, 0, 0, 0],
                        [0, 1, 0, 0, 0],
                        [0, 0, 1, 0, 0],
                        [0, 0, 0, 1, 0],
                        [0, 0, 0, 0, 0]
                    ],
                    15: [
                        [0, 0, 0, 0, 1],
                        [0, 0, 0, 1, 0],
                        [0, 0, 1, 0, 0],
                        [0, 1, 0, 0, 0],
                        [1, 0, 0, 0, 0]
                    ],
                    16: [
                        [1, 0, 0, 0, 1],
                        [0, 1, 0, 1, 0],
                        [0, 0, 1, 0, 0],
                        [0, 1, 0, 1, 0],
                        [1, 0, 0, 0, 1]
                    ]
                },
                s = void 0 === o[t = void 0 === t ? 1 : t] ? o[2] : o[t];
            _R_is_Editor && (i[e] = void 0 === i[e] ? {} : i[e]), i[e].patternCanvas = document.createElement("canvas"), i[e].patternCtx = i[e].patternCanvas.getContext("2d"), i[e].patternCanvas.width = s[0].length * a, i[e].patternCanvas.height = s.length * a;
            for (var n = 0; n < s.length; n++)
                for (var d = 0; d < s[n].length; d++) "transparent" != r[s[n][d]] && (i[e].patternCtx.fillStyle = r[s[n][d]], i[e].patternCtx.fillRect(d * a, n * a, a, a));
            return "url(" + i[e].patternCanvas.toDataURL() + ")"
        },
        getBGCanvasDetails: function(e, t, a) {
            var r;
            return a || (t.mDIM = i.getmDim(e, t.skeyindex, t)), t.usepattern = ("auto" === t.bgfit || t.bgfit.indexOf("%") >= 0) && (void 0 === t.loadobj || !0 !== t.loadobj.useBGColor), _R_is_Editor && void 0 === t.panzoom && delete t.shadowCanvas, void 0 === t.shadowCanvas && (t.shadowCanvas = document.createElement("canvas"), t.shadowCTX = t.shadowCanvas.getContext("2d"), t.shadowCanvas.style.background = "transparent", t.shadowCanvas.style.opacity = 1), !0 === t.replaceShadowCanvas || !0 === t.loadobj.bgColor || !0 === t.usebgColor || void 0 !== t.panzoom || null != t.isHTML5 && 1 != t.poster || t.usepattern ? (r = {
                width: t.mDIM.width,
                height: t.mDIM.height,
                x: 0,
                y: 0
            }, t.usepattern && void 0 !== t.loadobj && void 0 !== t.loadobj.img ? i.getCanvasPattern(e, t, {
                ratio: t.loadobj.height / t.loadobj.width
            }) : (t.loadobj.bgColor || t.usebgColor) && (t.shadowCanvas.width = t.mDIM.width, t.shadowCanvas.height = t.mDIM.height, i.getCanvasGradients(e, t))) : (r = s(t.mDIM, t, {
                width: t.mDIM.width,
                height: t.mDIM.height,
                x: 0,
                y: 0,
                contw: t.loadobj.width,
                conth: t.loadobj.height
            }), t.shadowCanvas.width = t.mDIM.width, t.shadowCanvas.height = t.mDIM.height, void 0 !== t.loadobj && void 0 !== t.loadobj.img && t.shadowCTX.drawImage(t.loadobj.img, r.x, r.y, r.width, r.height), r = {
                width: t.mDIM.width,
                height: t.mDIM.height,
                x: 0,
                y: 0
            }), r
        },
        getCanvasPattern: function(e, t, a) {
            void 0 === t.patternImageCanvas && (t.patternImageCanvas = document.createElement("canvas"), t.patternImageCTX = t.patternImageCanvas.getContext("2d"));
            var r = t.bgfit.split(" ");
            1 === r.length && (r[1] = r[0]), a.width = "auto" === r[0] ? t.loadobj.width : t.loadobj.width * (parseInt(r[0], 0) / 100), a.height = "auto" === r[1] ? t.loadobj.height : a.width * a.ratio, t.DPR = _R_is_Editor ? Math.min(window.devicePixelRatio, 2) : i[e].DPR;
            var o = a.width / a.height;
            a.width = a.width * t.DPR, a.height = a.height * t.DPR, i.isIOS && a.width * a.height > 15728640 && (t.mDIM.width > t.mDIM.height ? (a.width = t.mDIM.width, a.height = Math.round(t.mDIM.width / o)) : (a.height = t.mDIM.height, a.width = Math.round(t.mDIM.height * o))), t.patternImageCanvas.width = a.width, t.patternImageCanvas.height = a.height, t.patternImageCTX.drawImage(t.loadobj.img, 0, 0, a.width, a.height), t.shadowCanvas.width = t.mDIM.width, t.shadowCanvas.height = t.mDIM.height, t.pattern = t.shadowCTX.createPattern(t.patternImageCanvas, t.bgrepeat), t.shadowCTX.fillStyle = t.pattern, t.shadowShifts = {
                h: t.bgposition.split(" ")[0],
                v: t.bgposition.split(" ")[1]
            }, t.shadowShifts.hperc = i.isNumeric(parseInt(t.shadowShifts.h)) ? parseInt(t.shadowShifts.h) / 100 * t.mDIM.width : 0, t.shadowShifts.vperc = i.isNumeric(parseInt(t.shadowShifts.v)) ? parseInt(t.shadowShifts.v) / 100 * t.mDIM.height : 0, t.shadowShifts.x = "left" === t.shadowShifts.h ? 0 : "center" === t.shadowShifts.h || "50%" == t.shadowShifts.h ? "repeat" == t.bgrepeat || "repeat-x" == t.bgrepeat ? t.mDIM.width / 2 - a.width / 2 - Math.ceil(t.mDIM.width / 2 / a.width) * a.width : t.mDIM.width / 2 - a.width / 2 : "right" === t.shadowShifts.h ? "repeat" == t.bgrepeat || "repeat-x" == t.bgrepeat ? -(a.width - t.mDIM.width % a.width) : t.mDIM.width - a.width : "repeat" == t.bgrepeat || "repeat-x" == t.bgrepeat ? -(a.width - t.shadowShifts.hperc % a.width) : t.shadowShifts.hperc, t.shadowShifts.y = "top" === t.shadowShifts.v ? 0 : "center" === t.shadowShifts.v || "50%" == t.shadowShifts.v ? "repeat" == t.bgrepeat || "repeat-y" == t.bgrepeat ? t.mDIM.height / 2 - a.height / 2 - Math.ceil(t.mDIM.height / 2 / a.height) * a.height : t.mDIM.height / 2 - a.height / 2 : "bottom" === t.shadowShifts.v ? "repeat" == t.bgrepeat || "repeat-y" == t.bgrepeat ? -(a.height - t.mDIM.height % a.height) : t.mDIM.height - a.height : "repeat" == t.bgrepeat || "repeat-y" == t.bgrepeat ? -(a.height - t.shadowShifts.vperc % a.height) : t.shadowShifts.vperc, t.shadowCTX.translate(t.shadowShifts.x, t.shadowShifts.y), t.shadowCTX.fillRect(0, 0, t.mDIM.width - t.shadowShifts.x, t.mDIM.height - t.shadowShifts.y)
        },
        getCanvasGradients: function(e, t) {
            if (t.bgcolor.indexOf("gradient") >= 0) {
                t.gradient = null == t.gradient || _R_is_Editor ? i.getGradients(t.bgcolor) : t.gradient, t.shadowGrd = "radialGradient" === t.gradient.type ? t.shadowCTX.createRadialGradient(t.mDIM.width / 2, t.mDIM.height / 2, 0, t.mDIM.width / 2, t.mDIM.height / 2, Math.max(t.mDIM.width / 2, t.mDIM.height / 2)) : i.calcLinearGradient(t.shadowCTX, t.shadowCanvas.width, t.shadowCanvas.height, t.gradient.deg);
                for (var a = 0; a < t.gradient.stops.length; a += 2) t.shadowGrd.addColorStop(t.gradient.stops[a + 1], t.gradient.stops[a]);
                t.shadowCTX.clearRect(0, 0, t.mDIM.width, t.mDIM.height), t.shadowCTX.fillStyle = t.shadowGrd, t.shadowCTX.fillRect(0, 0, t.mDIM.width, t.mDIM.height)
            } else t.shadowCTX.fillStyle = t.bgcolor, t.shadowCTX.fillRect(0, 0, t.mDIM.width, t.mDIM.height)
        },
        cNS: function(e) {
            var i;
            for (i in e.n = document.createElementNS("http://www.w3.org/2000/svg", e.n), e.v) e.n.setAttributeNS(null, i.replace(/[A-Z]/g, function(e, i, t, a) {
                return "-" + e.toLowerCase()
            }), e.v[i]);
            for (i in void 0 !== e.c && e.n.setAttribute("class", e.c), void 0 !== e.id && (e.n.id = e.id), void 0 !== e.t && (e.n.textContent = e.t), e.s) e.s.hasOwnProperty(i) && (e.n.style[i] = e.s[i]);
            return e.n
        },
        rgbToHex: function(e) {
            return "#" + l(e[0]) + l(e[1]) + l(e[2])
        },
        getSVGGradient: function(e) {
            if (void 0 === e) return e;
            if (_R_is_Editor && (e = RSColor.convert(e)), -1 == e.indexOf("gradient")) return e;
            var t = i.getGradients(e);
            void 0 === i.gradSVG && (i.gradSVG = i.cNS({
                n: "svg",
                id: "tp_svg_gradients",
                s: {
                    width: "100%",
                    height: "100%",
                    opacity: 0,
                    pointerEvents: "none"
                }
            }), i.gradSVG.setAttribute("viewBox", "0 0 1 1"), i.gradSVG.setAttribute("preserveAspectRatio", "none"), document.body.appendChild(i.gradSVG), i.svgGradients = []);
            for (var a = !1, r = JSON.stringify(e), o = 0; o < i.svgGradients.length; o++) a || i.svgGradients[o].src == r && (a = !0, e = i.svgGradients[o].url);
            if (!a) {
                var s, n, d, l = "radialGradient" === t.type ? 0 : t.deg * (Math.PI / 180),
                    c = "radialGradient" === t.type ? 0 : {
                        x1: Math.round(50 + 50 * Math.sin(l)) + "%",
                        y1: Math.round(50 + 50 * Math.cos(l)) + "%",
                        x2: Math.round(50 + 50 * Math.sin(l + Math.PI)) + "%",
                        y2: Math.round(50 + 50 * Math.cos(l + Math.PI)) + "%"
                    };
                d = i.cNS({
                    n: t.type,
                    id: "tp_svg_gradient_" + i.svgGradients.length,
                    v: "radialGradient" === t.type ? void 0 : {
                        gradientUnits: "userSpaceOnUse",
                        x1: c.x1,
                        y1: c.y1,
                        x2: c.x2,
                        y2: c.y2
                    }
                });
                for (var p = 0; p <= t.stops.length / 2; p += 2) n = tpGS.gsap.utils.splitColor(t.stops[p]), s = i.cNS({
                    n: "stop",
                    v: {
                        offset: 100 * t.stops[p + 1] + "%",
                        stopColor: i.rgbToHex(n),
                        stopOpacity: n.length > 3 ? n[3] : 1
                    }
                }), d.appendChild(s);
                i.gradSVG.appendChild(d), e = "url(#tp_svg_gradient_" + i.svgGradients.length + ")", i.svgGradients.push({
                    url: e,
                    src: r,
                    g: d
                })
            }
            return e
        },
        getGradients: function(e) {
            return e.indexOf("radial-gradient") >= 0 ? {
                stops: i.getGradientColorStopPoints(e.split("radial-gradient(ellipse at center, ")[1]),
                type: "radialGradient",
                deg: 0
            } : -1 !== e.indexOf("gradient") ? i.getLinearGradientStops(e) : e
        },
        getLinearGradientStops: function(e) {
            var i = e.split("linear-gradient(")[1];
            _R_is_Editor && (i = (i = i.split(", ").join(",")).split(",rgba").join(", rgba"));
            var t = i.split("deg, ");
            for (var a in i = (t.length > 1 ? t[1] : t[0]).split(" "), t = t.length > 1 ? t[0] : 180, i) i.hasOwnProperty(a) && i[a].indexOf("%") >= 0 && (i[a] = "" + Math.round(100 * parseFloat(i[a].split("%,")[0].split("%)")[0])) / 1e4);
            return {
                stops: i,
                deg: t,
                type: "linearGradient"
            }
        },
        getGradientColorStopPoints: function(e) {
            var i = /rgb([\s\S]*?)%/g,
                t = [],
                a = [];
            do {
                (o = i.exec(e)) && t.push(o[0])
            } while (o);
            for (var r = 0; r < t.length; r++) {
                var o = t[r],
                    s = (e = /rgb([\s\S]*?)\)/.exec(o), /\)([\s\S]*?)%/.exec(o));
                e[0] && (e = e[0]), s[1] && (s = s[1]), a.push(e), a.push(parseFloat(s) / 100)
            }
            return a
        },
        calcLinearGradient: function(e, i, t, a) {
            a = a * Math.PI / 180 + Math.PI / 2;
            for (var r, o, s, n, d = i / 2, l = t / 2, c = Math.sqrt(d * d + l * l), h = {
                    x1: Math.cos(a) * c + d,
                    y1: Math.sin(a) * c + l,
                    x2: d,
                    y2: l
                }, m = [g({
                    x: 0,
                    y: 0
                }, a), g({
                    x: i,
                    y: 0
                }, a), g({
                    x: i,
                    y: t
                }, a), g({
                    x: 0,
                    y: t
                }, a)], v = [], f = 0; f < m.length; f++) v.push(u(m[f], h));
            if (p(d, l, v[0].x, v[0].y) > p(d, l, v[1].x, v[1].y) ? (r = v[0].x, o = v[0].y) : (r = v[1].x, o = v[1].y), p(d, l, v[2].x, v[2].y) > p(d, l, v[3].x, v[3].y) ? (s = v[2].x, n = v[2].y) : (s = v[3].x, n = v[3].y), Math.round(100 * Math.atan2(l - o, d - r)) / 100 === Math.round(a % (2 * Math.PI) * 100) / 100) {
                var y = r,
                    w = o;
                r = s, o = n, s = y, n = w
            }
            return e.createLinearGradient(Math.round(r), Math.round(o), Math.round(s), Math.round(n))
        },
        transitions: {
            filter: {
                update: function(e, i, t) {
                    if (void 0 !== e && void 0 !== e.tl) {
                        var a = void 0 !== t || void 0 !== e.tl.blur ? " blur(" + (void 0 !== t ? t : 0 + e.tl.blur !== void 0 ? e.tl.blur : 0) + "px)" : "";
                        i.canvas.style.filter = void 0 === e.tl.filter ? "" + a : e.tl.filter + a
                    }
                },
                extendTimeLine: function(e, i, t) {
                    if (null != i) {
                        var a = void 0 !== i.g && "0%" !== i.g && 0 !== i.g ? ("" === a ? "" : " ") + "grayscale(_g_%)" : "";
                        a += void 0 !== i.h && "100%" !== i.h && 100 !== i.h ? ("" === a ? "" : " ") + "brightness(_h_%)" : "", a += void 0 !== i.s && "0px" !== i.s && 0 !== i.s ? ("" === a ? "" : " ") + "sepia(_s_%)" : "", a += void 0 !== i.c && 100 !== i.c ? ("" === a ? "" : " ") + "contrast(_c_%)" : "", "" !== (a += void 0 !== i.i && 0 !== i.i ? ("" === a ? "" : " ") + "invert(_i_%)" : "") && (i.tl = {
                            filter: a.replace("_g_", parseFloat(i.g)).replace("_h_", parseFloat(i.h)).replace("_s_", parseFloat(i.s)).replace("_c_", parseFloat(i.c)).replace("_i_", parseFloat(i.i))
                        }), void 0 !== i.b && "0px" !== i.b && 0 !== i.b && (void 0 === i.tl ? i.tl = {
                            blur: parseFloat(i.b)
                        } : i.tl.blur = parseFloat(i.b)), void 0 !== i.tl && (e.add(tpGS.gsap.to(i.tl, i.ms / i.sec, void 0 === i.tl.filter ? {
                            blur: 0
                        } : void 0 === i.tl.blur ? {
                            filter: a.replace("_g_", "0").replace("_h_", "100").replace("_s_", "0").replace("_c_", 100).replace("_i_", 0),
                            ease: i.e
                        } : {
                            blur: 0,
                            filter: a.replace("_g_", "0").replace("_h_", "100").replace("_s_", "0").replace("_c_", 100).replace("_i_", 0),
                            ease: i.e
                        }), 0), t.canvasFilter = !0)
                    }
                }
            },
            slidingoverlay: {
                getBasic: function() {
                    return i.getBasic({
                        attr: ["x", "y"],
                        in: {
                            m: !0,
                            o: -1,
                            _xy: 20,
                            _gxys: 10,
                            _gxye: -10,
                            zIndex: 20,
                            e: "power1.inOut"
                        },
                        out: {
                            m: !0,
                            reversed: !1,
                            _xy: -100,
                            o: 0,
                            zIndex: 10,
                            e: "power1.inOut"
                        }
                    })
                },
                updateAnim: function(e, t, a) {
                    var r = void 0 !== t.in.x && 0 !== t.in.x && "0%" !== t.in.x ? "x" : "y";
                    t.in["g" + r + "s"] = i.SATools.getOffset(t.in[r], t.in._gxys, a, 1) + "%", t.in["g" + r + "e"] = i.SATools.getOffset(t.in[r], t.in._gxye, a, 1) + "%", t.out[r] = i.SATools.getOffset(t.in[r], t.out._xy, a, 1) + "%", t.in[r] = i.SATools.getOffset(t.in[r], t.in._xy, a, 1) + "%";
                    var o = parseInt(t.in[r]) >= 0;
                    return t.in.d = "x" === r ? o ? "left" : "right" : o ? "up" : "down", t
                },
                beforeDraw: function(e, i, t, a) {
                    void 0 !== t.d && (t._dxs = "right" === t.d ? 0 + t.mw : "left" === t.d ? 0 - t.mw : 0, t._dys = "down" === t.d ? 0 + t.mh : "up" === t.d ? 0 - t.mh : 0, t._xs = "left" === t.d ? 0 - t.mw : 0, t._ys = "up" === t.d ? 0 - t.mh : 0, t._xe = "right" === t.d ? a.SLOT.OW + t.mw : "left" === t.d ? a.SLOT.OW - t.mw : a.SLOT.OW, t._ye = "down" === t.d ? a.SLOT.OH + t.mh : "up" === t.d ? a.SLOT.OH - t.mh : a.SLOT.OH, i.beginPath(), i.rect("left" === t.d ? Math.max(0, t._xs) : "right" === t.d ? Math.min(0, t._xs) : 0, "up" === t.d ? Math.max(0, t._ys) : "down" === t.d ? Math.min(0, t._ys) : 0, "left" === t.d ? Math.max(a.SLOT.OW, t._xe) : "right" === t.d ? Math.min(a.SLOT.OW, t._xe) : t._xe, "up" === t.d ? Math.max(a.SLOT.OH, t._ye) : "down" === t.d ? Math.min(a.SLOT.OH, t._ye) : t._ye), i.clip())
                },
                afterDraw: function(e, i, t, a, r) {
                    void 0 !== t.d && (i.save(), i.beginPath(), i.rect(Math.max(0, t._dxs), Math.max(0, t._dys), t._xe, t._ye), i.clip(), i.save(), i.transform(r.csx, r.ssx, r.ssy, r.csy, .5 * a.SLOT.OW + t.x + t.sgx, .5 * a.SLOT.OH + t.y + t.sgy), i.drawImage(void 0 !== a.shadowCanvas ? a.shadowCanvas : a.loadobj.img, 0, 0, a.SLOT.OW, a.SLOT.OH, t.sgx - a.SLOT.OW / 2, t.sgy - a.SLOT.OH / 2, a.SLOT.OW, a.SLOT.OH), i.restore(), i.fillStyle = "rgba(0,0,0,0.6)", i.fillRect(t.gx, t.gy, a.SLOT.OW, a.SLOT.OH), i.restore())
                },
                extendTimeLine: function(e, t, a, r, o, s) {
                    "in" !== o.direction || void 0 === r.gxe && void 0 === r.gye || (jQuery.extend(!0, a[0], {
                        d: r.d,
                        gx: void 0 === r.gxs ? 0 : 2 * i.SATools.getOffset(r.gxs, s.width, o.sdir, 0),
                        gy: void 0 === r.gys ? 0 : 2 * i.SATools.getOffset(r.gys, s.height, o.sdir, 0),
                        sgx: void 0 === r.gxs ? 0 : i.SATools.getOffset(r.gxs, s.width, o.sdir, 0),
                        sgy: void 0 === r.gys ? 0 : i.SATools.getOffset(r.gys, s.height, o.sdir, 0),
                        mw: 0 - s.width,
                        mh: 0 - s.height
                    }), t.add(tpGS.gsap.to(a, r.ms / r.sec, {
                        gx: void 0 === r.gxe ? 0 : 2 * i.SATools.getOffset(r.gxe, s.width, o.sdir, 0),
                        gy: void 0 === r.gye ? 0 : 2 * i.SATools.getOffset(r.gye, s.height, o.sdir, 0),
                        sgx: void 0 === r.gxe ? 0 : 2 * i.SATools.getOffset(r.gxe, s.width, o.sdir, 0),
                        sgy: void 0 === r.gye ? 0 : 2 * i.SATools.getOffset(r.gye, s.height, o.sdir, 0),
                        mw: s.width,
                        mh: s.height,
                        ease: r.e
                    }), 0))
                }
            },
            motionFilter: {
                init: function(e, i) {
                    return void 0 !== i && parseFloat(i) > 0 ? (i = parseFloat(i), e.fmExists = !0, e.fmShadow = void 0 === e.fmShadow ? document.createElement("canvas") : e.fmShadow, e.fmCtx = e.fmShadow.getContext("2d"), e.fmShadow.width = e.ctx.canvas.width, e.fmShadow.height = e.ctx.canvas.height, e.fmCtx.globalAlpha = tpGS.gsap.utils.mapRange(100, 0, 40, 0, i) / 100, e.fmCtx.clearRect(0, 0, e.ctx.canvas.width, e.ctx.canvas.height)) : e.fmExists = !1, i
                },
                render: function(e, i) {
                    "partial" === i && (e.fmCtx.globalCompositeOperation = "source-over"), e.fmCtx.drawImage(e.canvas, 0, 0, e.canvas.width, e.canvas.height), e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height), e.ctx.drawImage(e.fmCtx.canvas, 0, 0, e.canvas.width, e.canvas.height), "partial" === i && (e.fmCtx.globalCompositeOperation = "source-atop"), "partial" !== i && "full" !== i || (e.fmCtx.fillStyle = "rgba(255, 255, 255, 0.1)", e.fmCtx.fillRect(0, 0, e.canvas.width, e.canvas.height))
                },
                clearFull: function(e, i) {
                    e.fmExists && void 0 !== e.fmCtx && (e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height), e.fmCtx.clearRect(0, 0, e.canvas.width, e.canvas.height), void 0 !== i && i.render(i.time(), !0, !0))
                },
                complete: function(e) {
                    e.fmShadow && e.fmShadow.remove()
                }
            },
            d3: {
                ticker: function(e, i, t) {
                    if (void 0 !== e.helper) {
                        var a = e.smi * ("in" === t ? e.helper.oo : e.helper.o),
                            r = e.sma * ("in" === t ? e.helper.oo : e.helper.o);
                        if (e.gradient = "vertical" === e.d ? "in" === t ? i.ctx.createLinearGradient(0, 0, 0, i.canvas.height) : i.ctx.createLinearGradient(0, i.canvas.height, 0, 0) : "in" === t ? i.ctx.createLinearGradient(0, 0, i.canvas.width, 0) : i.ctx.createLinearGradient(i.canvas.width, 0, 0, 0), e.gradient.addColorStop(0, "rgba(" + e.sc + "," + a + ")"), e.gradient.addColorStop(e.sl, "rgba(" + e.sc + "," + r + ")"), i.ctx.fillStyle = e.gradient, i.ctx.fillRect(0, 0, i.canvas.width, i.canvas.height), void 0 !== i.cube && i.cube.ctx) {
                            var o = void 0 !== e.roomhelper && !1 !== e.roomhelper && (90 - e.roomhelper.r) / 90;
                            a = !1 !== o ? o : e.smi * e.helper.o, r = !1 !== o ? o : e.sma * e.helper.o, i.cube.ctx.clearRect(0, 0, i.cube.ctx.canvas.width, i.cube.ctx.canvas.height), e.gradientW = !1 !== o ? "vertical" === e.d ? e.t < 0 && 1 === e.sdir || e.t > 0 && -1 === e.sdir ? i.ctx.createRadialGradient(0, i.cube.ctx.canvas.width / 2, 0, 0, 0, 2 * i.cube.ctx.canvas.width) : i.ctx.createRadialGradient(i.cube.ctx.canvas.width, 0, 0, 0, 0, 2 * i.cube.ctx.canvas.width) : e.t > 0 && 1 === e.sdir || e.t < 0 && -1 === e.sdir ? i.ctx.createRadialGradient(i.cube.ctx.canvas.width / 2, i.cube.ctx.canvas.height, 0, i.cube.ctx.canvas.width / 2, i.cube.ctx.canvas.height, i.cube.ctx.canvas.width) : i.ctx.createRadialGradient(i.cube.ctx.canvas.width / 2, .2 * i.cube.ctx.canvas.height, 0, i.cube.ctx.canvas.width / 2, .2 * i.cube.ctx.canvas.height, i.cube.ctx.canvas.width) : "vertical" === e.d ? i.ctx.createLinearGradient(0, 0, 0, i.cube.ctx.canvas.height) : i.ctx.createLinearGradient(0, 0, i.cube.ctx.canvas.width, 0), e.gradientW.addColorStop(0, "rgba(" + e.sc + "," + (!1 !== o ? "a" === e.DIR ? r : 0 : "a" === e.DIR ? 0 : r) + ")"), e.gradientW.addColorStop(1, "rgba(" + e.sc + "," + (!1 !== o ? "a" === e.DIR ? 0 : r : "a" === e.DIR ? r : 0) + ")"), i.cube.ctx.fillStyle = e.gradientW, i.cube.ctx.fillRect(0, 0, i.cube.ctx.canvas.width, i.cube.ctx.canvas.height)
                        }
                    }
                },
                setWall: function(e, i, t, a, r, o) {
                    return e.TL = tpGS.gsap.timeline(), e.TL.add(tpGS.gsap.to(e.c, .2, {
                        display: "block"
                    }), 0), "rotationX" === t ? (e.ctx.canvas.width = a.w, e.ctx.canvas.height = a.w, e.TL.add(tpGS.gsap.set(e.w, {
                        backgroundColor: r,
                        width: a.w,
                        height: a.w,
                        transformOrigin: "50% 50% -" + a.w / 2 + "px",
                        x: 0,
                        y: i > 0 ? -(a.w - a.h) : 0,
                        rotationX: i > 0 ? -90 : 90,
                        rotationY: 0
                    }), 0)) : (e.ctx.canvas.width = o ? a.w : a.h, e.ctx.canvas.height = a.h, e.TL.add(tpGS.gsap.set(e.w, {
                        backgroundColor: r,
                        width: o ? a.w : a.h,
                        height: a.h,
                        transformOrigin: "50% 50% -" + (o ? a.w : a.h) / 2 + "px",
                        x: i < 0 ? a.w - a.h : 0,
                        y: 0,
                        rotationX: 0,
                        rotationY: i > 0 ? -90 : 90
                    }), 0)), e.TL
                },
                buildCube: function(e) {
                    e.cube = {
                        c: document.createElement("div"),
                        w: document.createElement("canvas")
                    }, e.cube.ctx = e.cube.w.getContext("2d"), e.cube.c.className = "rs_fake_cube", e.cube.w.className = "rs_fake_cube_wall", tpGS.gsap.set(e.cube.c, {
                        width: e.mDIM.w,
                        height: e.mDIM.h
                    }), tpGS.gsap.set(e.cube.w, {
                        width: e.mDIM.w,
                        height: e.mDIM.h,
                        backgroundColor: "#ccc"
                    }), e.cube.c.appendChild(e.cube.w), e.sbg.appendChild(e.cube.c)
                },
                cubeTL: function(e, t, a, r) {
                    if ("none" !== t.f && void 0 !== t.f) {
                        a.sbg.style.transformStyle = "preserve-3d";
                        var o = tpGS.gsap.timeline(),
                            s = "incube" === t.f ? 1 : -1,
                            n = "incube" === t.f || "cube" === t.f,
                            d = "fly" === t.f ? -30 : 90,
                            l = "turn" !== t.f && !1 !== t.t && (_R_is_Editor || !0 === i[e].firstSlideAnimDone),
                            c = -1 * t.z,
                            p = {},
                            g = {
                                z: l ? 0 : c,
                                ease: "power1.inOut"
                            },
                            u = {
                                ease: t.e
                            },
                            h = [a.canvas],
                            m = n ? "50% 50% " : "20% 20% ",
                            v = "rotationX",
                            f = "rotationY",
                            y = "y",
                            w = "height",
                            b = t.fd;
                        if ("vertical" !== t.d ? (v = "rotationY", f = "rotationX", y = "x", w = "width", t.DIR = 1 === t.sdir ? "b" : "a") : t.DIR = 1 === t.sdir ? "a" : "b", w = "width" === w ? "w" : "height" === w ? "h" : w, "turn" === t.f ? (d = "vertical" === t.d ? -120 : 120, m = "vertical" === t.d ? 1 === t.sdir ? "in" === r ? "0% 0% 0%" : "0% 100% 0%" : "in" === r ? "0% 100% 0%" : "0% 0% 0%" : 1 === t.sdir ? "in" === r ? "0% 0% 0%" : "100% 0% 0%" : "in" === r ? "100% 0% 0%" : "0% 0% 0%", g.z = 0, u.ease = "out" === r ? "power3.out" : u.ease, b = "out" === r ? b / 2 : b) : m += s * a.mDIM[w] / 2 + "px", u[v] = 0, u[y] = 0, "in" === r ? p[v] = d * t.sdir : u[v] = -d * t.sdir, "fly" === t.f) {
                            var _ = void 0 === t.fz ? 20 * Math.random() - 10 : parseInt(t.fz);
                            "in" === r ? (p[y] = a.mDIM[w] * (void 0 === t.fdi ? 1.5 : parseFloat(t.fdi)) * t.sdir, p.rotateZ = t.sdir * _, u.rotateZ = 0) : (u[y] = a.mDIM[w] * (void 0 === t.fdo ? 2 : parseFloat(t.fdo)) * t.sdir * -1, u.rotateZ = t.sdir * _ * -1)
                        }
                        if (a.sbg.style.perspective = l ? "2500px" : "1500px", l) {
                            var S = {
                                    z: c * ("fly" === t.f ? 1.5 : 3),
                                    ease: "power1.inOut"
                                },
                                x = {
                                    z: 0,
                                    ease: "power1.inOut"
                                };
                            S[f] = -1 * t.t, x[f] = 0, t.roomhelper = {
                                r: 0
                            }, o.add(tpGS.gsap.set(_R_is_Editor ? RVS.SBGS[RVS.S.slideId].wrap : a.wrap[0], {
                                perspective: 1200,
                                transformStyle: "preserve-3d",
                                transformOrigin: m
                            }), 0), o.add(tpGS.gsap.to(a.sbg, 3 * t.md, S), 0), o.add(tpGS.gsap.to(a.sbg, 3 * t.md, x), b - t.md), o.add(tpGS.gsap.to(t.roomhelper, 3 * t.md, {
                                r: Math.abs(t.t)
                            }), 0), o.add(tpGS.gsap.to(t.roomhelper, 3 * t.md, {
                                r: 0
                            }), b - t.md), "in" === r && 1 !== s && n && (void 0 === a.cube && i.transitions.d3.buildCube(a), o.add(i.transitions.d3.setWall(a.cube, S[f], f, a.mDIM, t.c), 0), h.push(a.cube.c))
                        } else t.roomhelper = !1, o.add(tpGS.gsap.set(_R_is_Editor ? RVS.SBGS[RVS.S.slideId].wrap : a.wrap[0], {
                            perspective: "none",
                            transformStyle: "none",
                            transformOrigin: "50% 50%"
                        }), 0), !_R_is_Editor && !0 !== i[e].firstSlideAnimDone && n && (void 0 === a.cube && i.transitions.d3.buildCube(a), o.add(i.transitions.d3.setWall(a.cube, p[v], v, a.mDIM, t.c, !0), 0), o.add(tpGS.gsap.fromTo(a.cube.w, 4 * t.md, {
                            opacity: 0
                        }, {
                            opacity: 1
                        }), 0), h.push(a.cube.c));
                        return t.helper = {
                            o: 0,
                            oo: 1
                        }, o.add(tpGS.gsap.to(t.helper, b, {
                            o: 1,
                            oo: 0,
                            ease: t.e
                        }), t.md + 0), o.add(tpGS.gsap.set(h, jQuery.extend(!0, {}, p, {
                            force3D: !0,
                            transformOrigin: m
                        })), 0), "turn" !== t.f && o.add(tpGS.gsap.to(h, 3 * t.md, g), 0), o.add(tpGS.gsap.to(h, b, u), t.md + 0), "turn" !== t.f && o.add(tpGS.gsap.to(h, 3 * t.md, {
                            z: 0,
                            ease: "power1.inOut"
                        }), b - t.md), "out" === r && 1 !== s && o.add(tpGS.gsap.to(h, 2 * t.md, {
                            opacity: 0
                        }), t.dur - 2 * t.md), o
                    }
                }
            }
        },
        animatedCanvasUpdate: function(e, t) {
            t.cDIMS = i.getBGCanvasDetails(e, t), t.canvas.style.backgroundColor = "transparent", t.canvas.style.opacity = 1, t.canvas.width !== t.mDIM.width && (t.canvas.width = t.mDIM.width), t.canvas.height !== t.mDIM.height && (t.canvas.height = t.mDIM.height), _R_is_Editor || !0 !== i[e].clearModalBG || (t.ctx.clearRect(0, 0, t.canvas.width, t.canvas.height), i[e].clearModalBG = !1, t.sbg.parentNode.style.opacity = 1), t.col = t.col || 1, t.row = t.row || 1, t.SLOT = jQuery.extend(!0, {
                s: {},
                c: {}
            }, a(e, t.col, t.row, t.mDIM, "OW", "OH")), t.SLOT.DX = 0 - t.SLOT.OW / 2, t.SLOT.DY = 0 - t.SLOT.OH / 2, t.row = Math.ceil(t.mDIM.height / t.SLOT.OH) || 1, void 0 !== t.callFromAnimatedCanvasUpdate && t.callFromAnimatedCanvasUpdate()
        },
        slideAnimFinished: function(e, t, a, r) {
            void 0 !== t && (void 0 !== t.bgvid && t.bgvid.length > 0 && "out" === a.direction && (t.drawVideoCanvasImagesRecall = !1, i.stopVideo(t.bgvid, e), t.bgvid[0].style.display = "none", t.bgvid[0].style.zIndex = 0), "in" === a.direction && (i.transitions.motionFilter.complete(t), t.ctx.canvas.style.filter = "none", tpGS.gsap.set(a.slide, {
                zIndex: 20
            }), delete t.animateDirection, t.bgvid.length > 0 && (t.isHTML5 || (i.resetVideo(t.bgvid, e), i.playVideo(t.bgvid, e, !0)), tpGS.gsap.set(t.bgvid[0], {
                zIndex: 30,
                display: "block",
                opacity: 1
            }))), "out" === a.direction ? (tpGS.gsap.set(a.slide, {
                zIndex: 10
            }), tpGS.gsap.set(t.canvas, {
                rotationX: 0,
                rotationY: 0,
                rotationZ: 0,
                x: 0,
                y: 0,
                z: 0,
                opacity: 1
            }), t.currentState = void 0) : t.currentState = "idle", void 0 !== t.cube && (t.cube.c.style.display = "none"), "in" === a.direction && (i.updateSlideBGs(e, t.skeyindex, t), void 0 === t.panzoom || _R_is_Editor || i.startPanZoom(i[e].pr_next_bg, e, void 0 !== i[e].panzoomTLs[t.skeyindex] ? i[e].panzoomTLs[t.skeyindex].progress() : 0, t.skeyindex, "play", t.key), void 0 !== a.BG && !0 !== r && a.BG.ctx.clearRect(0, 0, 2 * t.canvas.width, 2 * t.canvas.height)))
        },
        animateCore: function(e, t, a, r) {
            var o, s, n, d, l = t.canvas,
                c = t.ctx,
                p = 0;
            if (t.col = a.col, t.row = a.row, _R_is_Editor && t.three) {
                for (t.canvas.style.display = "block"; t.three.scene.children.length > 0;) t.three.scene.remove(t.three.scene.children[0]);
                t.three.canvas.parentNode.removeChild(t.three.canvas), t.three = void 0
            }
            i.animatedCanvasUpdate(e, t), a.row = t.row, t.animateDirection = r.direction, r.delay = void 0 === r.delay ? 0 : r.delay, n = a.col * a.row, d = Array(n), void 0 === t.help_canvas && "out" === r.direction && void 0 !== r.bgColor && (t.help_canvas = document.createElement("canvas"), t.help_ctx = t.help_canvas.getContext("2d")), "out" === r.direction && void 0 !== r.bgColor && (t.help_canvas.width = t.mDIM.width, t.help_canvas.height = t.mDIM.height, t.help_ctx.fillStyle = r.bgColor, t.help_ctx.fillRect(0, 0, t.mDIM.width, t.mDIM.height)), a.mo = i.transitions.motionFilter.init(t, a.mo), a.dur = a.ms / a.sec, void 0 !== r.d3 && (r.d3.dur = a.dur, r.d3.fd = .7 * a.dur, r.d3.md = .15 * a.dur, r.d3.sdir = r.sdir), t.SLOT.c = {
                ws: 0,
                hs: 0,
                wd: 0,
                hd: 0
            }, a.mo > 0 && _R_is_Editor && c.clearRect(0, 0, l.width, l.height);
            var g = tpGS.gsap.timeline({
                onUpdate: function() {
                    if (p = 0, a.mo > 0 ? i.transitions.motionFilter.render(t, a.moo) : c.clearRect(0, 0, l.width, l.height), t.help_canvas && "out" === r.direction && c.drawImage(t.help_canvas, 0, 0), (r.filter && r.filter.u || !_R_is_Editor) && i.transitions.filter.update(r.filter, c, t.canvasFilterBlur), _R_is_Editor && 0 !== a.zIndex && void 0 !== a.zIndex && tpGS.gsap.set(r.slide, {
                            zIndex: a.zIndex
                        }), void 0 !== t.shadowCanvas)
                        for (o = 0; o < a.col; o++)
                            for (t.SLOT.SX = t.SLOT.OW * o, t.SLOT.tw = t.SLOT.OW * (o + .5), t.SLOT.c.wd = t.mDIM.width - (t.SLOT.tw + t.SLOT.DX + t.SLOT.OW), t.SLOT.c.wd = t.SLOT.c.wd < 0 ? t.SLOT.c.wd : 0, t.SLOT.DW = t.SLOT.SW = t.SLOT.OW + t.SLOT.c.wd, s = 0; s < a.row; s++) {
                                c.save();
                                var n = -Math.PI / 180 * d[p].r,
                                    g = 0 !== a.r ? Math.cos(n) * d[p].sx : d[p].sx,
                                    u = 0 !== a.r ? Math.cos(n) * d[p].sy : d[p].sy,
                                    h = 0 !== a.r ? Math.sin(n) * d[p].sx : 0,
                                    m = 0 !== a.r ? Math.sin(n) * -d[p].sy : 0;
                                t.SLOT.SY = t.SLOT.OH * s, t.SLOT.th = t.SLOT.OH * (s + .5), i.transitions[r.effect] && i.transitions[r.effect].beforeDraw && i.transitions[r.effect].beforeDraw(e, c, d[p], t), a.m && (c.beginPath(), c.rect(t.SLOT.OW * o, t.SLOT.OH * s, t.SLOT.OW, t.SLOT.OH), c.clip()), c.transform(g, h, m, u, t.SLOT.tw + d[p].x, t.SLOT.th + d[p].y), c.globalAlpha = Math.max(0, d[p].o), t.SLOT.c.hd = t.mDIM.height - (t.SLOT.th + t.SLOT.DY + t.SLOT.OH), t.SLOT.c.hd = t.SLOT.c.hd < 0 ? t.SLOT.c.hd : 0, t.SLOT.DH = t.SLOT.SH = t.SLOT.OH + t.SLOT.c.hd, t.SLOT.SW > 1 && t.SLOT.SH > 1 && c.drawImage(t.shadowCanvas, t.SLOT.SX, t.SLOT.SY, t.SLOT.SW, t.SLOT.SH, t.SLOT.DX, t.SLOT.DY, t.SLOT.DW, t.SLOT.DH), c.restore(), i.transitions[r.effect] && i.transitions[r.effect].afterDraw && i.transitions[r.effect].afterDraw(e, c, d[p], t, {
                                    csx: g,
                                    csy: u,
                                    ssx: h,
                                    ssy: m
                                }), p++
                            }
                    void 0 !== r.d3 && r.d3.su && i.transitions.d3.ticker(r.d3, t, r.direction), t.currentState = "animating"
                },
                onComplete: function() {
                    i.slideAnimFinished(e, t, r)
                }
            });
            if (a.col * a.row < 2 && (a.f = "start"), 0 !== a.zIndex && void 0 !== a.zIndex && g.add(tpGS.gsap.set(r.slide, {
                    zIndex: parseInt(a.zIndex, 0)
                }), 0), a.m = "false" != a.m && !1 !== a.m, "in" === r.direction) {
                for (o = 0; o < n; o++) d[o] = {
                    x: i.SATools.getOffset(a.x, a.m ? t.SLOT.OW : t.mDIM.width, r.sdir, o),
                    y: i.SATools.getOffset(a.y, a.m ? t.SLOT.OH : t.mDIM.height, r.sdir, o),
                    o: i.SATools.getSpecialValue(a.o, o, r.sdir),
                    sx: i.SATools.getSpecialValue(a.sx, o, r.sdir),
                    sy: i.SATools.getSpecialValue(a.sy, o, r.sdir),
                    r: 0 !== a.r ? i.SATools.getSpecialValue(a.r, o, r.sdir) : 0
                };
                g.add(tpGS.gsap.to(d, a.dur, {
                    o: 1,
                    sx: 1,
                    sy: 1,
                    r: 0,
                    x: 0,
                    y: 0,
                    ease: a.e,
                    stagger: {
                        amount: "nodelay" === a.f ? 0 : a.ms / a.stasec,
                        grid: [a.col, a.row],
                        from: "nodelay" === a.f ? "start" : a.f
                    }
                }), r.delay), void 0 !== r.d3 && g.add(i.transitions.d3.cubeTL(e, r.d3, t, "in"), 0), i.transitions.filter.extendTimeLine(g, r.filter, t)
            } else {
                for (o = 0; o < n; o++) d[o] = {
                    x: 0,
                    y: 0,
                    o: 1,
                    sx: 1,
                    sy: 1,
                    r: 0
                };
                g.add(tpGS.gsap.to(d, a.dur, {
                    o: function(e) {
                        return i.SATools.getSpecialValue(a.o, e, r.sdir)
                    },
                    sx: function(e) {
                        return i.SATools.getSpecialValue(a.sx, e, r.sdir)
                    },
                    sy: function(e) {
                        return i.SATools.getSpecialValue(a.sy, e, r.sdir)
                    },
                    r: 0 !== a.r && void 0 !== a.r ? function(e) {
                        return i.SATools.getSpecialValue(a.r, e, r.sdir)
                    } : 0,
                    x: function(e) {
                        return i.SATools.getOffset(a.x, a.m ? t.SLOT.OW : t.mDIM.width, r.sdir, e) * (a.reversed ? -1 : 1)
                    },
                    y: function(e) {
                        return i.SATools.getOffset(a.y, a.m ? t.SLOT.OH : t.mDIM.height, r.sdir, e) * (a.reversed ? -1 : 1)
                    },
                    ease: a.e,
                    stagger: {
                        amount: "nodelay" === a.f ? 0 : a.ms / a.stasec,
                        grid: [a.col, a.row],
                        from: "nodelay" === a.f ? "start" : a.f
                    }
                }), r.delay + (void 0 !== a.outdelay ? a.outdelay : 0)), void 0 !== r.d3 && g.add(i.transitions.d3.cubeTL(e, r.d3, t, "out"), 0)
            }
            i.transitions[r.effect] && i.transitions[r.effect].extendTimeLine && i.transitions[r.effect].extendTimeLine(e, g, d, a, r, t.mDIM), _R_is_Editor ? RVS.TL[RVS.S.slideId].slide.add(g, 0) : i[e].mtl.add(g, r.delay)
        }
    });
    var t = function(e, t) {
            return void 0 !== t && i.isNumeric(t) ? parseFloat(t, 0) : null == t || "default" === t || "d" === t ? e : t
        },
        a = function(e, i, t, a, r, o) {
            var s = {};
            return s[r] = Math.ceil(a.width / i), s[o] = (_R_is_Editor, Math.ceil(a.height / t)), s
        },
        r = function(e) {
            return null == e || 0 === e || NaN === e ? 1 : e
        },
        o = function(e, a) {
            _R_is_Editor || (i[e].duringslidechange = !0);
            var o, s = _R_is_Editor ? -1 : "arrow" == i[e].sc_indicator ? void 0 === i[e].sc_indicator_dir ? i[e].sdir : i[e].sc_indicator_dir : i[e].sdir,
                d = !!_R_is_Editor || void 0 !== i[e].pr_next_bg && i[e].pr_next_bg.length > 0 && void 0 !== i[e].pr_next_bg[0],
                l = !!_R_is_Editor || void 0 !== i[e].pr_active_bg && i[e].pr_active_bg.length > 0 && void 0 !== i[e].pr_active_bg[0],
                p = _R_is_Editor ? RVS.SBGS[RVS.S.slideId].n : d ? i[e].sbgs[i[e].pr_next_bg[0].dataset.key] : void 0,
                g = _R_is_Editor ? RVS.SBGS[RVS.S.slideId].c : l ? i[e].sbgs[i[e].pr_active_bg[0].dataset.key] : void 0;
            s = 1 === s ? -1 : 1, o = jQuery.extend(!0, {}, function(e, a, o) {
                var s = void 0 !== i.transitions[a.anim.e] && void 0 !== i.transitions[a.anim.e].getBasic ? i.transitions[a.anim.e].getBasic() : i.getBasic(),
                    n = "";
                s.out = null == s.out ? {} : s.out, s.out.reversed = void 0 === a.out && (void 0 === s.out.reversed || s.out.reversed);
                void 0 !== a.iw && parseInt(a.iw, 0), void 0 !== a.ow && parseInt(a.ow, 0);
                for (var d in s.attr) n = s.attr[d], s.in[n] = t(s.in[n], a.in[n]), s.out[n] = s.out.reversed ? s.in[n] : void 0 === a.out ? s.out[n] : t(s.out[n], a.out[n]);
                return s.filter = void 0 !== a.filter ? jQuery.extend(!0, a.filter, a.filter) : s.filter, i.transitions[a.anim.e] && i.transitions[a.anim.e].updateAnim && (s = i.transitions[a.anim.e].updateAnim(e, s, o)), s.e = a.anim.e, void 0 !== s.in && (s.in.col = "random" === s.in.col ? tpGS.gsap.utils.random(1, 10, 1) : r(s.in.col), s.in.row = "random" === s.in.row ? tpGS.gsap.utils.random(1, 10, 1) : r(s.in.row)), void 0 !== s.out && (s.out.col = "random" === s.out.col ? tpGS.gsap.utils.random(1, 10, 1) : r(s.out.col), s.out.row = "random" === s.out.row ? tpGS.gsap.utils.random(1, 10, 1) : r(s.out.row)), s
            }(e, a, s)), void 0 !== p.random && void 0 !== i.SLTR && void 0 !== g && (delete g.help_canvas, delete g.help_ctx), o.ms = t(void 0, void 0 === a.anim.ms ? 1e3 : a.anim.ms), o.f = t(void 0, a.anim.f), o.p = t(void 0, a.anim.p), o.d = t(void 0, a.anim.d), o.o = a.anim.o, void 0 !== a.d3 && (a.d3.t = void 0 !== a.d3.t && 0 !== a.d3.t && a.d3.t, a.d3.su = "true" == a.d3.su || 1 == a.d3.su, a.d3.su && (a.d3.smi = void 0 === a.d3.smi ? 0 : parseFloat(a.d3.smi), a.d3.sl = void 0 === a.d3.sl ? 1 : parseFloat(a.d3.sl), a.d3.sma = void 0 === a.d3.sma ? .5 : parseFloat(a.d3.sma), a.d3.sc = void 0 === a.d3.sc ? "0,0,0" : tpGS.gsap.utils.splitColor(a.d3.sc).join(",")), o.p = "none", void 0 !== o.in.row && void 0 !== o.in.col && o.in.row * o.in.col > 200 && (o.filter = void 0)), o.in.sec = void 0 === o.in.sec ? 1e3 : o.in.sec, o.in.stasec = void 0 === o.in.stasec ? void 0 === o.d ? 1500 : 100 * o.d : o.in.stasec, o.in.ms = "default" === o.ms || "d" === o.ms ? o.in.ms : "random" === o.ms ? Math.round(1e3 * Math.random() + 300) : null != o.ms ? parseInt(o.ms, 0) : o.in.ms, o.out.ms = o.in.ms, void 0 !== o.filter && (o.filter.ms = o.in.ms, o.filter.sec = o.in.sec, o.filter.e = void 0 === o.filter.e || "default" === o.filter.e ? o.in.e : o.filter.e), o.in.f = void 0 === o.f || "default" === o.f || "d" === o.f ? o.in.f : o.f, o.in.f = "slidebased" === o.in.f ? 1 == s ? "start" : "end" : "oppslidebased" === o.in.f ? 1 === s ? "end" : "start" : o.in.f, o.out.f = o.in.f, o.out = jQuery.extend(!0, {}, o.in, o.out), o.in.eng = o.out.eng = a.anim.eng, void 0 !== o.p && "none" !== o.p && (o.in.bg = "dark" === o.p ? "#000" : "light" === o.p ? "#fff" : "transparent", o.out.delay = "none" !== o.p ? function(e, i) {
                return e / 2.5
            } : 0, 1 === o.out.o && 0 === o.out.x && 0 === o.out.y && (o.out.o = 0)), "forceinout" === o.o ? (o.in.zIndex = 20, o.out.zIndex = 10) : "outin" !== o.o && (1 !== o.in.o || 0 !== o.in.x || 0 !== o.in.y || void 0 === a.out || 1 === o.out.o && 0 === o.out.x && 0 === o.out.y) || (o.in.zIndex = 10, o.out.zIndex = 20), p.bgvid.length > 0 && (o.in = c(e, o.in, p, "in")), l && void 0 !== g.bgvid && g.bgvid.length > 0 && (o.out = c(e, o.out, g, "out")), void 0 !== o.out && (o.out.simplify || o.in.simplify) && (o.out = n(o.out)), o.in.simplify && (o.in = n(o.in)), _R_is_Editor || requestAnimationFrame(function() {
                i.generalObserver(i.ISM, !0)
            }), o.in.eng = void 0 === o.in.eng ? "animateCore" : o.in.eng, o.out.eng = void 0 === o.out.eng ? "animateCore" : o.out.eng, l && !0 !== o.out.skip && i[o.out.eng](e, g, o.out, {
                effect: o.e,
                slide: _R_is_Editor ? RVS.SBGS[RVS.S.slideId].c.sbg : i[e].pr_active_slide,
                direction: "out",
                delay: 0,
                bgColor: o.in.bg,
                sdir: s,
                filter: void 0,
                d3: a.d3,
                addOns: _R_is_Editor ? a.addOns : void 0
            }), !0 !== o.in.skip && i[o.in.eng](e, p, o.in, {
                effect: o.e,
                slide: _R_is_Editor ? RVS.SBGS[RVS.S.slideId].n.sbg : i[e].pr_next_slide,
                direction: "in",
                delay: l ? "function" == typeof o.out.delay ? o.out.delay(o.in.ms / 1e3, o.out.row * o.out.col) : o.out.delay : o.in.delay,
                BG: g,
                outslide: _R_is_Editor ? RVS.SBGS[RVS.S.slideId].c.sbg : i[e].pr_active_slide,
                sdir: s,
                filter: o.filter,
                d3: a.d3,
                addOns: _R_is_Editor ? a.addOns : void 0
            })
        },
        s = function(e, t, a) {
            var r = e.height / e.width;
            if (a.ratio = a.conth / a.contw, a.ratio < r && "contain" === t.bgfit || a.ratio > r && "cover" === t.bgfit) a.height = e.width * a.ratio;
            else if (a.ratio > r && "contain" === t.bgfit || a.ratio < r && "cover" === t.bgfit) a.width = e.width * r / a.ratio;
            else if (a.ratio !== r || "contain" !== t.bgfit && "cover" !== t.bgfit) {
                var o = t.bgfit.split(" ");
                1 === o.length && (o[1] = o[0]), a.width = "auto" === o[0] ? a.contw : e.width * (parseInt(o[0], 0) / 100), a.height = "auto" === o[1] ? a.conth : a.width * a.ratio, t.usepattern = !0
            } else a.width = e.width;
            var s = function(e, t, a) {
                return 1 === (a = a.split(" ")).length && (a[1] = a[0]), {
                    x: "center" === a[0] || "50%" === a[0] ? (e.width - t.width) / 2 : "left" === a[0] ? 0 : "right" === a[0] ? e.width - t.width : i.isNumeric(a[0]) ? 0 : a[0].indexOf("%") >= 0 ? parseInt(a[0], 0) / 100 * e.width - parseInt(a[0], 0) / 100 * t.width : parseInt(a[0], 0),
                    y: "center" === a[1] || "50%" === a[1] ? (e.height - t.height) / 2 : "top" === a[1] ? 0 : "bottom" === a[1] ? e.height - t.height : i.isNumeric(a[1]) ? 0 : a[1].indexOf("%") >= 0 ? parseInt(a[1], 0) / 100 * e.height - parseInt(a[1], 0) / 100 * t.height : parseInt(a[1], 0)
                }
            }(e, a, t.bgposition);
            return a.x = s.x, a.y = s.y, a
        },
        n = function(e) {
            return e.o = 0, e.r = 0, e.row = 1, e.col = 1, e.x = 0, e.y = 0, e.sx = 1, e.sy = 1, e
        },
        d = function(e) {
            return e = "false" !== e && !1 !== e && "off" !== e && void 0 !== e && 0 !== e && -1 !== e
        },
        l = function(e) {
            var i = e.toString(16);
            return 1 == i.length ? "0" + i : i
        },
        c = function(e, t, a, r) {
            return t.skip = !1, "in" === r ? a.isHTML5 ? (a.bgvid[0].style.display = "none", i.resetVideo(a.bgvid, e), a.animateDirection = "in", a.currentState = "animating", a.drawVideoCanvasImagesRecall = !0, i.updateVideoFrames(e, a, !0), i.playVideo(a.bgvid, e)) : (i[e].videos[a.bgvid[0].id].pauseCalled = !1, t.waitToSlideTrans = i[e].videos[a.bgvid[0].id].waitToSlideTrans, !0 !== a.poster ? (i.resetVideo(a.bgvid, e), i[e].videos[a.bgvid[0].id].prePlayForaWhile = !1, !0 !== t.waitToSlideTrans && i.playVideo(a.bgvid, e, !0), tpGS.gsap.fromTo(a.bgvid, t.ms / t.sec, {
                zIndex: 30,
                display: "block",
                opacity: 0
            }, {
                opacity: 1,
                zIndex: 30,
                display: "block"
            }), a.loadobj.bgColor = !0, a.bgcolor = "#000", t.simplify = !0) : (i[e].videos[a.bgvid[0].id].prePlayForaWhile = !1, i.resetVideo(a.bgvid, e), i.playVideo(a.bgvid, e), a.bgvid[0].style.display = "none", a.bgvid[0].style.zIndex = 0, a.bgvid[0].style.opacity = 0)) : "out" === r && (a.isHTML5 ? (a.currentState = "animating", a.drawVideoCanvasImagesRecall = !0, i.updateVideoFrames(e, a, !0), window.requestAnimationFrame(function() {
                tpGS.gsap.to(a.bgvid, .1, {
                    zIndex: 0,
                    display: "none"
                })
            })) : (i.stopVideo(a.bgvid, e, !0), !0 !== a.poster && (a.loadobj.bgColor = !0, a.bgcolor = "#000"))), t
        },
        p = function(e, i, t, a) {
            return Math.sqrt(Math.pow(e - t, 2) + Math.pow(i - a, 2))
        },
        g = function(e, i) {
            var t = i + Math.PI / 2;
            return {
                x1: e.x,
                y1: e.y,
                x2: e.x + 100 * Math.cos(t),
                y2: e.y + 100 * Math.sin(t)
            }
        },
        u = function(e, i) {
            var t = e.y2 - e.y1,
                a = e.x1 - e.x2,
                r = t * e.x1 + a * e.y1,
                o = i.y2 - i.y1,
                s = i.x1 - i.x2,
                n = o * i.x1 + s * i.y1,
                d = t * s - o * a;
            return 0 !== d && {
                x: Math.round((s * r - a * n) / d * 100) / 100,
                y: Math.round((t * n - o * r) / d * 100) / 100
            }
        };
    window.RS_MODULES = window.RS_MODULES || {}, window.RS_MODULES.slideanims = {
        loaded: !0,
        version: "6.4.9"
    }, window.RS_MODULES.checkMinimal && window.RS_MODULES.checkMinimal()
}(jQuery),
function(e) {
    "use strict";
    jQuery.fn.revolution = jQuery.fn.revolution || {};
    var i = jQuery.fn.revolution;

    function t(e) {
        return null == e ? -1 : i.isNumeric(e) ? e : e.split(":").length > 1 ? 60 * parseInt(e.split(":")[0], 0) + parseInt(e.split(":")[1], 0) : e
    }
    jQuery.extend(!0, i, {
        preLoadAudio: function(e, t) {
            i[t].videos = void 0 === i[t].videos ? {} : i[t].videos, e.find(".rs-layer-audio").each(function() {
                var a = jQuery(this),
                    r = i[t].videos[a[0].id] = void 0 === i[t].videos[a[0].id] ? f(a.data(), "audio", i.gA(e[0], "key")) : i[t].videos[a[0].id],
                    o = {};
                0 === a.find("audio").length && (o.src = null != r.mp4 ? r.mp4 : "", o.pre = r.pload || "", this.id = void 0 === this.id || "" === this.id ? a.attr("audio-layer-" + Math.round(199999 * Math.random())) : this.id, o.id = this.id, o.status = "prepared", o.start = jQuery.now(), o.waittime = void 0 !== r.ploadwait ? 1e3 * r.ploadwait : 5e3, "auto" != o.pre && "canplaythrough" != o.pre && "canplay" != o.pre && "progress" != o.pre || (void 0 === i[t].audioqueue && (i[t].audioqueue = []), i[t].audioqueue.push(o), i.manageVideoLayer(a, t, i.gA(e[0], "key"), !0)))
            })
        },
        preLoadAudioDone: function(e, t, a) {
            var r = i[t].videos[e[0].id];
            i[t].audioqueue && i[t].audioqueue.length > 0 && jQuery.each(i[t].audioqueue, function(e, i) {
                r.mp4 !== i.src || i.pre !== a && "auto" !== i.pre || (i.status = "loaded")
            })
        },
        checkfullscreenEnabled: function(e) {
            if (void 0 !== window.fullScreen) return window.fullScreen;
            if (void 0 !== document.fullscreen) return document.fullscreen;
            if (void 0 !== document.mozFullScreen) return document.mozFullScreen;
            if (void 0 !== document.webkitIsFullScreen) return document.webkitIsFullScreen;
            var t = i.isWebkit() && /Apple Computer/.test(navigator.vendor) ? 42 : 5;
            return screen.width == i.winW && Math.abs(screen.height - i.getWinH(e)) < t
        },
        showVideo: function(e) {
            tpGS.gsap.to(e, .3, {
                opacity: 1,
                display: "block",
                ease: "power3.inOut"
            })
        },
        resetVideo: function(e, t, a) {
            if ("updateAndResize" !== a) {
                var r = i[t].videos[e[0].id];
                if ("resetVideo" !== r.cRS) switch (r.cRS = "resetVideo", r.type) {
                    case "youtube":
                        r.rwd && null != r.player && void 0 !== r.player.seekTo && (r.player.seekTo(-1 == r.ssec ? 0 : r.ssec), r.player.pauseVideo()), r.bgvideo || "preset" === a || 0 != r.jsposter.length || i.showVideo(e.find("iframe"));
                        break;
                    case "vimeo":
                        void 0 !== r.vimeoplayer && r.rwd && (0 !== r.ssec && -1 !== r.ssec || r.bgvideo || r.jsposter.length > 0) && (r.vimeoplayer.setCurrentTime(-1 == r.ssec ? 0 : r.ssec), r.vimeoplayer.pause()), 0 != r.jsposter.length || r.bgvideo || "preset" === a || i.showVideo(e.find("iframe"));
                        break;
                    case "html5":
                        if (i.ISM && r.notonmobile) return !1;
                        r.bgvideo || i.showVideo(r.jvideo), r.rwd && "playing" !== r.cSS && !isNaN(r.video.duration) && (r.justReseted = !0, r.video.currentTime = -1 == r.ssec ? 0 : r.ssec), ("mute" == r.volume || i.lastToggleState(e.videomutetoggledby) || !0 === i[t].globalmute) && (r.video.muted = !0)
                }
            }
        },
        Mute: function(e, t, a) {
            var r = !1,
                o = i[t].videos[e[0].id];
            switch (o.type) {
                case "youtube":
                    o.player && (!0 === a && o.player.mute(), !1 === a && n(o, parseInt(o.volcache, 0)), r = o.player.isMuted());
                    break;
                case "vimeo":
                    o.volcachecheck || (o.volcache = o.volcache > 1 ? o.volcache / 100 : o.volcache, o.volcachecheck = !0), o.volume = !0 === a ? "mute" : !1 === a ? o.volcache : o.volume, void 0 !== a && null != o.vimeoplayer && s(o, !0 === a ? 0 : o.volcache), r = "mute" == o.volume || 0 === o.volume;
                    break;
                case "html5":
                    o.volcachecheck || (o.volcache = o.volcache > 1 ? o.volcache / 100 : o.volcache, o.volcachecheck = !0), o.video.volume = o.volcache, void 0 !== a && o.video && (o.video.muted = a), r = void 0 !== o.video ? o.video.muted : r
            }
            if (void 0 === a) return r
        },
        stopVideo: function(e, t, a) {
            if (void 0 !== i[t] && void 0 !== i[t]) {
                var r = i[t].videos[e[0].id];
                if (void 0 !== r && ("stopVideo" !== r.cRS || "paused" !== r.cSS)) switch (r.cRS = "stopVideo", i[t].leaveViewPortBasedStop || (i[t].lastplayedvideos = []), i[t].leaveViewPortBasedStop = !1, r.type) {
                    case "youtube":
                        void 0 !== r.player && 2 !== r.player.getPlayerState() && 5 !== r.player.getPlayerState() && (r.player.pauseVideo(), void 0 !== a && p(t, r, "hide"));
                        break;
                    case "vimeo":
                        void 0 !== r.vimeoplayer && (r.vimeoplayer.pause(), void 0 !== a && p(t, r, "hide"));
                        break;
                    case "html5":
                        r.video && (r.video.pause(), i.ISM && b(r, 1))
                }
            }
        },
        playVideo: function(e, t, r) {
            var o = i[t].videos[e[0].id];
            if (clearTimeout(o.videoplaywait), "playVideo" !== o.cRS || "playing" !== o.cSS) switch (o.cRS = "playVideo", o.type) {
                case "youtube":
                    if (0 == e.find("iframe").length) e.append(o.videomarkup), u(e, t, !0);
                    else if (void 0 !== o.player && null != o.player.playVideo) {
                        var s = o.player.getCurrentTime();
                        o.nseTriggered && (s = -1, o.nseTriggered = !1), -1 != o.ssec && o.ssec > s && o.player.seekTo(o.ssec), c(o)
                    } else o.videoplaywait = setTimeout(function() {
                        i.playVideo(e, t)
                    }, 50);
                    break;
                case "vimeo":
                    if (0 == e.find("iframe").length) delete o.vimeoplayer, e.append(o.videomarkup), u(e, t, !0);
                    else if (e.hasClass("rs-apiready"))
                        if (o.vimeoplayer = null == o.vimeoplayer ? new Vimeo.Player(e.find("iframe").attr("id")) : o.vimeoplayer, o.vimeoplayer.getPaused()) {
                            s = void 0 === o.currenttime ? 0 : o.currenttime;
                            o.nseTriggered && (s = -1, o.nseTriggered = !1), -1 != o.ssec && o.ssec > s && o.vimeoplayer.setCurrentTime(o.ssec), ("mute" == o.volume || 0 === o.volume || i.lastToggleState(e.data("videomutetoggledby")) || !0 === i[t].globalmute) && (o.volumetoken = !0, o.vimeoplayer.setVolume(0)), l(o)
                        } else o.videoplaywait = setTimeout(function() {
                            i.playVideo(e, t)
                        }, 50);
                    else o.videoplaywait = setTimeout(function() {
                        i.playVideo(e, t)
                    }, 50);
                    break;
                case "html5":
                    if (o.metaloaded) {
                        if (("" + o.video.duration == "NaN" || o.video.readyState < 4) && !r) return o.loadRequested || (o.video.load(), o.loadRequested = !0), void setTimeout(function() {
                            i.playVideo(e, t)
                        }, 50);
                        s = o.video.currentTime;
                        o.nseTriggered && (s = -1, o.nseTriggered = !1), -1 != o.ssec && o.ssec > s && o.ssec < o.video.duration && (o.video.currentTime = o.ssec), d(o)
                    } else a(o.video, "loadedmetadata", function(e) {
                        i.playVideo(e, t)
                    }(e))
            }
        },
        isVideoPlaying: function(e, t) {
            var a = !1;
            return null != i[t].playingvideos && jQuery.each(i[t].playingvideos, function(i, t) {
                e.attr("id") == t.attr("id") && (a = !0)
            }), a
        },
        removeMediaFromList: function(e, i) {
            w(e, i)
        },
        prepareCoveredVideo: function(e) {
            clearTimeout(i[e].resizePrepareCoverVideolistener);
            var t = "carousel" === i[e].sliderType ? i[e].carousel.justify ? void 0 === i[e].carousel.slide_widths ? void 0 : i[e].carousel.slide_widths[i[e].carousel.focused] : i[e].carousel.slide_width : i[e].canv.width,
                a = "carousel" === i[e].sliderType ? i[e].carousel.slide_height : i[e].canv.height;
            if (0 !== t && 0 !== a && void 0 !== t && void 0 !== a)
                for (var r in i[e].videos) {
                    var o = i[e].videos[r];
                    if (void 0 !== o.jvideo && ((o.bgvideo || o.jvideo.parent().hasClass("rs-fsv") || i.closestNode(o.video, "RS-LAYER") && i.closestNode(o.video, "RS-LAYER").classList.contains("rs-fsv")) && ("html5" === o.type && void 0 !== o.jvideo && tpGS.gsap.set(o.jvideo, {
                            width: t
                        }), void 0 === i[e].activeRSSlide || o.slideid === i.gA(i[e].slides[i[e].activeRSSlide], "key") || void 0 === i[e].pr_next_slide || o.slideid === i.gA(i[e].pr_next_slide[0], "key")))) {
                        o.vd = o.ratio.split(":").length > 1 ? o.ratio.split(":")[0] / o.ratio.split(":")[1] : 1;
                        var s, n = t / a,
                            d = o.vd * n * 100,
                            l = o.vd / n * 100;
                        s = "Edge" === i.get_browser() || "IE" === i.get_browser() ? n > o.vd ? {
                            minWidth: "100%",
                            height: d + "%",
                            x: "-50%",
                            y: "-50%",
                            top: "50%",
                            left: "50%",
                            position: "absolute"
                        } : {
                            minHeight: "100%",
                            width: l + "%",
                            x: "-50%",
                            y: "-50%",
                            top: "50%",
                            left: "50%",
                            position: "absolute"
                        } : n > o.vd ? {
                            height: (o.fitCover ? 100 : d) + "%",
                            width: "100%",
                            top: o.fitCover ? 0 : -(d - 100) / 2 + "%",
                            left: "0px",
                            position: "absolute"
                        } : {
                            width: (o.fitCover ? 100 : l) + "%",
                            height: "100%",
                            left: o.fitCover ? 0 : -(l - 100) / 2 + "%",
                            top: "0px",
                            position: "absolute"
                        }, void 0 === o.vimeoid && void 0 === o.ytid || (s.maxWidth = "none", s.maxHeight = "none"), tpGS.gsap.set(o.jvideo, s)
                    }
                } else i[e].resizePrepareCoverVideolistener = setTimeout(function() {
                    i.prepareCoveredVideo(e)
                }, 100)
        },
        checkVideoApis: function(e, t) {
            location.protocol;
            if (!i[t].youtubeapineeded && ((null != e.data("ytid") || e.find("iframe").length > 0 && e.find("iframe").attr("src").toLowerCase().indexOf("youtube") > 0) && (i[t].youtubeapineeded = !0), i[t].youtubeapineeded && !window.rs_addedyt)) {
                i[t].youtubestarttime = jQuery.now(), window.rs_addedyt = !0;
                var a = document.createElement("script"),
                    r = i.getByTag(document, "script")[0],
                    o = !0;
                a.src = "https://www.youtube.com/iframe_api", jQuery("head").find("*").each(function() {
                    "https://www.youtube.com/iframe_api" == jQuery(this).attr("src") && (o = !1)
                }), o && r.parentNode.insertBefore(a, r)
            }
            if (!i[t].vimeoapineeded && ((null != e.data("vimeoid") || e.find("iframe").length > 0 && e.find("iframe").attr("src").toLowerCase().indexOf("vimeo") > 0) && (i[t].vimeoapineeded = !0), i[t].vimeoapineeded && !window.rs_addedvim)) {
                i[t].vimeostarttime = jQuery.now(), window.rs_addedvim = !0;
                var s = document.createElement("script");
                r = i.getByTag(document, "script")[0], o = !0;
                s.src = "https://player.vimeo.com/api/player.js", jQuery("head").find("*").each(function() {
                    "https://player.vimeo.com/api/player.js" == jQuery(this).attr("src") && (o = !1)
                }), o && r.parentNode.insertBefore(s, r)
            }
        },
        manageVideoLayer: function(e, t, r, o) {
            if (i[t].videos = void 0 === i[t].videos ? {} : i[t].videos, void 0 === i[t].videos[e[0].id] || !0 === o) {
                var s = i[t].videos[e[0].id] = void 0 === i[t].videos[e[0].id] ? f(e.data(), void 0, r) : i[t].videos[e[0].id];
                if (s.audio = void 0 !== s.audio && s.audio, i.ISM && s.opom) 0 == e.find("rs-poster").length && e.append('<rs-poster class="noSwipe" style="background-image:url(' + s.poster + ');"></rs-poster>');
                else {
                    s.jsposter = e.find("rs-poster"), s.id = e[0].id, s.pload = "auto" === s.pload || "canplay" === s.pload || "canplaythrough" === s.pload || "progress" === s.pload ? "auto" : s.pload, s.type = null != s.mp4 || null != s.webm ? "html5" : null != s.ytid && String(s.ytid).length > 1 ? "youtube" : null != s.vimeoid && String(s.vimeoid).length > 1 ? "vimeo" : "none", s.newtype = "html5" == s.type && 0 == e.find(s.audio ? "audio" : "video").length ? "html5" : "youtube" == s.type && 0 == e.find("iframe").length ? "youtube" : "vimeo" == s.type && 0 == e.find("iframe").length ? "vimeo" : "none", s.extras = "", s.posterMarkup = void 0 === s.posterMarkup ? "" : s.posterMarkup, !s.audio && "1sttime" == s.aplay && s.pausetimer && s.bgvideo && i.sA(e.closest("rs-slide")[0], "rspausetimeronce", 1), s.audio || !s.bgvideo || !s.pausetimer || 1 != s.aplay && "true" != s.aplay && "no1sttime" != s.aplay || i.sA(e.closest("rs-slide")[0], "rspausetimeralways", 1), s.noInt && e.addClass("rs-nointeraction"), !(null != s.poster && s.poster.length > 2) || i.ISM && s.npom || 0 == s.jsposter.length && (s.posterMarkup += '<rs-poster class="noSwipe" style="background-image:url(' + s.poster + ');"></rs-poster>');
                    var n = !0;
                    switch (s.cSS = "created", s.cRS = "created", s.newtype) {
                        case "html5":
                            1 == window.isSafari11 && (i[t].slideHasIframe = !0), s.audio && e.addClass("rs-audio"), s.tag = s.audio ? "audio" : "video";
                            var d = "video" === s.tag && (i.is_mobile() || i.isSafari11()) ? s.aplay || "true" === s.aplay ? "muted playsinline autoplay" : s.inline ? " playsinline" : "" : "",
                                l = '<div class="html5vid rs_html5vidbasicstyles ' + (!1 === s.afs ? "hidefullscreen" : "") + '">';
                            l += "<" + s.tag + " " + d + " " + (s.controls && "none" !== s.controls ? " controls" : "") + (s.bgvideo && -1 == d.indexOf("autoplay") ? " autoplay" : "") + (s.bgvideo && -1 == d.indexOf("muted") ? " muted" : "") + ' style="' + ("Edge" !== i.get_browser() ? (s.fitCover ? "object-fit:cover;background-size:cover;" : "") + "opacity:0;width:100%; height:100%" : "") + '" class="" ' + (s.loop ? "loop" : "") + ' preload="' + s.pload + '">', "video" === s.tag && null != s.webm && "firefox" == i.get_browser().toLowerCase() && (l = l + '<source src="' + s.webm + '" type="video/webm" />'), null != s.mp4 && (l = l + '<source src="' + s.mp4 + '" type="' + ("video" === s.tag ? "video/mp4" : s.mp4.toLowerCase().indexOf("m4a") > 0 ? "audio/x-m4a" : "audio/mpeg") + '" />'), null != s.ogv && (l = l + '<source src="' + s.mp4 + '" type="' + s.tag + '/ogg" />'), l += "</" + s.tag + "></div>", l += s.posterMarkup, s.controls && !s.audio && void 0 === s.poster || s.bgvideo || (l += '<div class="tp-video-play-button"><i class="revicon-right-dir"></i><span class="tp-revstop">&nbsp;</span></div>'), s.videomarkup = l, n = !1, i.ISM && s.notonmobile || i.isIE(8) || e.append(l), s.jvideo = e.find(s.tag), s.video = s.jvideo[0], s.html5vid = s.jvideo.parent(), a(s.video, "canplay", function(e) {
                                m(e, t), i.resetVideo(e, t)
                            }(e));
                            break;
                        case "youtube":
                            i[t].slideHasIframe = !0, s.controls && "none" !== s.controls || (s.vatr = s.vatr.replace("controls=1", "controls=0"), -1 == s.vatr.toLowerCase().indexOf("controls") && (s.vatr = s.vatr + "&controls=0")), (s.inline || "RS-BGVIDEO" === e[0].tagName) && (s.vatr = s.vatr + "&playsinline=1"), -1 != s.ssec && (s.vatr += "&start=" + s.ssec), -1 != s.esec && (s.vatr += "&end=" + s.esec);
                            var c = s.vatr.split("origin=https://");
                            s.vatrnew = c.length > 1 ? c[0] + "origin=https://" + (self.location.href.match(/www/gi) && !c[1].match(/www/gi) ? "www." + c[1] : c[1]) : s.vatr, s.videomarkup = '<iframe allow="autoplay; ' + (!0 === s.afs ? "fullscreen" : "") + '" type="text/html" src="https://www.youtube-nocookie.com/embed/' + s.ytid + "?" + s.vatrnew + '" ' + (!0 === s.afs ? "allowfullscreen" : "") + ' width="100%" height="100%" class="intrinsic-ignore" style="opacity:0;visibility:visible;width:100%;height:100%"></iframe>';
                            break;
                        case "vimeo":
                            i[t].slideHasIframe = !0, s.controls && "none" !== s.controls ? (s.vatr = s.vatr.replace("background=0", "background=1"), -1 == s.vatr.toLowerCase().indexOf("background") && (s.vatr = s.vatr + "&background=1")) : (s.vatr = s.vatr.replace("background=1", "background=0"), -1 == s.vatr.toLowerCase().indexOf("background") && (s.vatr = s.vatr + "&background=0")), s.vatr = "autoplay=" + (!0 === s.aplay ? 1 : 0) + "&" + s.vatr, s.bgvideo && (s.prePlayForaWhile = !0), i.ISM && !0 === s.aplay && (s.vatr = "muted=1&" + s.vatr), s.loop && (s.vatr = "loop=1&" + s.vatr), s.videomarkup = '<iframe  allow="autoplay; ' + (!0 === s.afs ? "fullscreen" : "") + '" src="https://player.vimeo.com/video/' + s.vimeoid + "?" + s.vatr + '" ' + (!0 === s.afs ? "webkitallowfullscreen mozallowfullscreen allowfullscreen" : "") + ' width="100%" height="100%" class="intrinsic-ignore" style="opacity:0;visibility:visible;width:100%;height:100%"></iframe>'
                    }
                    if (!(null != s.poster && s.poster.length > 2) || i.ISM && s.npom) {
                        if (i.ISM && s.notonmobile) return !1;
                        0 != e.find("iframe").length || "youtube" != s.type && "vimeo" != s.type || (delete s.vimeoplayer, e.append(s.videomarkup), u(e, t, !("vimeo" !== s.newtype || !s.bgvideo), !0))
                    } else n && 0 == e.find("rs-poster").length && e.append(s.posterMarkup), 0 == e.find("iframe").length && (s.jsposter = e.find("rs-poster"), s.jsposter.on("click", function() {
                        if (i.playVideo(e, t, !0), i.ISM) {
                            if (s.notonmobile) return !1;
                            tpGS.gsap.to(s.jsposter, .3, {
                                opacity: 0,
                                visibility: "hidden",
                                force3D: "auto",
                                ease: "power3.inOut"
                            }), i.showVideo(e.find("iframe"))
                        }
                    }));
                    if ("none" !== s.doverlay && void 0 !== s.doverlay) {
                        var p = i.createOverlay(t, s.doverlay, s.doverlaysize, {
                            0: s.doverlaycolora,
                            1: s.doverlaycolorb
                        });
                        s.bgvideo && 1 != e.closest("rs-sbg-wrap").find("rs-dotted").length ? e.closest("rs-sbg-wrap").append('<rs-dotted style="background-image:' + p + '"></rs-dotted>') : s.bgvideo || 1 == e.find("rs-dotted").length || e.append('<rs-dotted style="background-image:' + p + '"></rs-dotted>')
                    }
                    s.bgvideo && (e[0].style.display = "none", e[0].style.zIndex = 0, tpGS.gsap.set(e.find("video, iframe"), {
                        opacity: 0
                    }))
                }
            }
        }
    });
    var a = function(e, i, t) {
            e.addEventListener ? e.addEventListener(i, t, {
                capture: !1,
                passive: !0
            }) : e.attachEvent(i, t, {
                capture: !1,
                passive: !0
            })
        },
        r = function(e, i, t) {
            var a = {};
            return a.video = e, a.type = i, a.settings = t, a
        },
        o = function(e, t) {
            var a = i[e].videos[t[0].id];
            (a.bgvideo || t.hasClass("rs-fsv")) && ((void 0 === a.ratio || a.ratio.split(":").length <= 1) && (a.ratio = "16:9"), requestAnimationFrame(function() {
                i.prepareCoveredVideo(e)
            }))
        },
        s = function(e, t) {
            var a = e.vimeoplayer;
            a.getPaused().then(function(r) {
                e.volumetoken = !0;
                var o = !r,
                    s = a.setVolume(t);
                void 0 !== s && s.then(function(i) {
                    a.getPaused().then(function(i) {
                        o === i && (e.volume = "mute", e.volumetoken = !0, a.setVolume(0), a.play())
                    }).catch(function(e) {
                        console.log("Get Paused Function Failed for Vimeo Volume Changes Inside the Promise")
                    })
                }).catch(function(t) {
                    o && (e.volume = "mute", e.volumetoken = !0, a.setVolume(0), a.play()), i.ISM && b(e, 0)
                })
            }).catch(function() {
                console.log("Get Paused Function Failed for Vimeo Volume Changes")
            })
        },
        n = function(e, i) {
            var t = e.player.getPlayerState();
            "mute" === i ? e.player.mute() : (e.player.unMute(), e.player.setVolume(i)), setTimeout(function() {
                1 === t && 1 !== e.player.getPlayerState() && (e.player.mute(), e.player.playVideo())
            }, 39)
        },
        d = function(e, t) {
            if ("playVideo" === e.cRS) {
                var a = e.video.play();
                void 0 !== a && a.then(function(e) {}).catch(function(i) {
                    e.video.pause(), !0 !== t && d(e, !0)
                }), i.ISM && b(e, 0)
            }
        },
        l = function(e) {
            if ("playVideo" === e.cRS) {
                var i = e.vimeoplayer.play();
                void 0 !== i && i.then(function(e) {}).catch(function(i) {
                    e.vimeoplayer.volumetoken = !0, e.vimeoplayer.setVolume(0), e.vimeoplayer.play()
                })
            }
        },
        c = function(e) {
            "playVideo" === e.cRS && e.player.playVideo()
        },
        p = function(e, t, a, r) {
            clearTimeout(t.repeatedPosterCalls), t.repeatedPosterCalls = setTimeout(function() {
                "show" === a || "playing" === t.cSS && !0 !== t.VideoIsVisible ? (void 0 !== t.showhideposter && t.showhideposter.pause(), t.showhideposter = tpGS.gsap.timeline(), t.jsposter.length > 0 && t.showhideposter.add(tpGS.gsap.to(t.jsposter, .3, {
                    zIndex: 5,
                    autoAlpha: 0,
                    force3D: "auto",
                    ease: "power3.inOut"
                }), 0), t.jvideo.length > 0 && t.showhideposter.add(tpGS.gsap.to(t.jvideo, void 0 !== r ? r : .001, {
                    opacity: 1,
                    display: "block",
                    ease: t.jsposter.length > 0 ? "power3.inOut" : "power3.out"
                }), 0), t.VideoIsVisible = !0) : ("hide" === a || "paused" === t.cSS && 1 != i.checkfullscreenEnabled(e) && t.jsposter.length > 0 && !1 !== t.VideoIsVisible && !0 !== t.seeking) && (void 0 !== t.showhideposter && t.showhideposter.pause(), t.showhideposter = tpGS.gsap.timeline(), t.jsposter.length > 0 && t.showhideposter.add(tpGS.gsap.to(t.jsposter, .3, {
                    zIndex: 5,
                    autoAlpha: 1,
                    force3D: "auto",
                    ease: "power3.inOut"
                }), 0), t.jvideo.length > 0 && t.showhideposter.add(tpGS.gsap.to(t.jvideo, void 0 !== r ? r : .001, {
                    opacity: 0,
                    ease: t.jsposter.length > 0 ? "power3.inOut" : "power3.out"
                }), .3), t.bgvideo && void 0 !== t.nBG && void 0 !== t.nBG.loadobj && (t.nBG.video = t.nBG.loadobj.img), t.VideoIsVisible = !1)
            }, void 0 !== a ? 0 : 100)
        },
        g = function(e, t, a) {
            e.cSS = "playing", e.vimeostarted = !0, e.nextslidecalled = !1, e.jsposter = void 0 === e.jsposter || 0 === e.jsposter.length ? t.find("rs-poster") : e.jsposter, e.jvideo = t.find("iframe"), i[a].c.trigger("revolution.slide.onvideoplay", r(e.vimeoplayer, "vimeo", e)), i[a].stopByVideo = e.pausetimer, y(t, a), "mute" == e.volume || 0 === e.volume || i.lastToggleState(t.data("videomutetoggledby")) || !0 === i[a].globalmute ? (e.volumetoken = !0, e.vimeoplayer.setVolume(0)) : s(e, parseInt(e.volcache, 0) / 100 || .75), i.toggleState(e.videotoggledby)
        },
        u = function(e, t, a, s) {
            var d = i[t].videos[e[0].id],
                l = "iframe" + Math.round(1e5 * Math.random() + 1);
            if (d.jvideo = e.find("iframe"), o(t, e), d.jvideo.attr("id", l), d.startvideonow = a, d.videolistenerexist) {
                if (a) switch (d.type) {
                    case "youtube":
                        i.playVideo(e, t), -1 != d.ssec && d.player.seekTo(d.ssec);
                        break;
                    case "vimeo":
                        i.playVideo(e, t), -1 != d.ssec && d.vimeoplayer.seekTo(d.ssec)
                }
            } else switch (d.type) {
                case "youtube":
                    if ("undefined" == typeof YT || void 0 === YT.Player) return i.checkVideoApis(e, t), void setTimeout(function() {
                        u(e, t, a, s)
                    }, 50);
                    d.player = new YT.Player(l, {
                        events: {
                            onStateChange: function(a) {
                                a.data == YT.PlayerState.PLAYING ? (d.cSS = "playing", i[t].onceVideoPlayed = !0, "mute" == d.volume || 0 === d.volume || i.lastToggleState(e.data("videomutetoggledby")) || !0 === i[t].globalmute ? d.player.mute() : n(d, parseInt(d.volcache, 0) || 75), i[t].stopByVideo = !0, y(e, t), d.pausetimer ? i[t].c.trigger("stoptimer") : i[t].stopByVideo = !1, i[t].c.trigger("revolution.slide.onvideoplay", r(d.player, "youtube", d)), i.toggleState(d.videotoggledby)) : (d.cSS = "paused", 0 == a.data && d.loop && (-1 != d.ssec && d.player.seekTo(d.ssec), i.playVideo(e, t), i.toggleState(d.videotoggledby)), -1 != a.data && 3 != a.data && (i[t].stopByVideo = !1, i[t].tonpause = !1, w(e, t), i[t].c.trigger("starttimer"), i[t].c.trigger("revolution.slide.onvideostop", r(d.player, "youtube", d)), null != i[t].videoIsPlaying && i[t].videoIsPlaying.attr("id") != e.attr("id") || i.unToggleState(d.videotoggledby)), 0 == a.data && d.nse ? (h(), d.nseTriggered = !0, i[t].c.revnext(), w(e, t)) : (w(e, t), i[t].stopByVideo = !1, 3 !== a.data && (-1 != d.lasteventdata && 3 != d.lasteventdata && void 0 !== d.lasteventdata || -1 != a.data && 3 != a.data) && i[t].c.trigger("starttimer"), i[t].c.trigger("revolution.slide.onvideostop", r(d.player, "youtube", d)), null != i[t].videoIsPlaying && i[t].videoIsPlaying.attr("id") != e.attr("id") || i.unToggleState(d.videotoggledby))), clearTimeout(d.postOrVideoTimer), 3 !== a.data && (d.postOrVideoTimer = setTimeout(function() {
                                    p(t, d)
                                }, 1 === d.lasteventdata && 2 === a.data || 2 === d.lasteventdata && 3 !== a.data ? 1e3 : 0), d.lasteventdata = a.data)
                            },
                            onReady: function(a) {
                                var r, o = i.is_mobile(),
                                    n = e.hasClass("rs-layer-video");
                                d.ready = !0, !o && (!i.isSafari11() || o && n) || "RS-BGVIDEO" !== e[0].tagName && (!n || !0 !== d.aplay && "true" !== d.aplay) || (r = !0, d.player.setVolume(0), d.volume = "mute", d.player.mute(), clearTimeout(e.data("mobilevideotimr")), 2 !== d.player.getPlayerState() && -1 !== d.player.getPlayerState() || e.data("mobilevideotimr", setTimeout(function() {
                                    i.playVideo(e, t)
                                }, 500))), r || "mute" != d.volume || (d.player.setVolume(0), d.player.mute()), e.addClass("rs-apiready"), null == d.speed && 1 === d.speed || a.target.setPlaybackRate(parseFloat(d.speed)), d.jsposter.unbind("click"), d.jsposter.on("click", function() {
                                    i.playVideo(e, t, !0)
                                }), d.startvideonow ? (i.playVideo(e, t), -1 != d.ssec && d.player.seekTo(d.ssec)) : s && p(t, d, "show", .2), d.videolistenerexist = !0
                            }
                        }
                    });
                    break;
                case "vimeo":
                    if ("undefined" == typeof Vimeo || void 0 === Vimeo.Player) return i.checkVideoApis(e, t), void setTimeout(function() {
                        u(e, t, a, s)
                    }, 50);
                    for (var c, m = d.jvideo.attr("src"), v = {}, f = m, b = /([^&=]+)=([^&]*)/g; c = b.exec(f);) v[decodeURIComponent(c[1])] = decodeURIComponent(c[2]);
                    m = (m = null != v.player_id ? m.replace(v.player_id, l) : m + "&player_id=" + l).replace(/&api=0|&api=1/g, "");
                    var _, S = i.is_mobile() || i.isSafari11(),
                        x = "RS-BGVIDEO" === e[0].tagName;
                    if (S && x && (m += "&background=1"), d.jvideo.attr("src", m), d.vimeoplayer = void 0 === d.vimeoplayer || !1 === d.vimeoplayer ? new Vimeo.Player(l) : d.vimeoplayer, S) x ? _ = !0 : (d.aplay || "true" === d.aplay) && (_ = !0), _ && (d.volumetoken = !0, d.vimeoplayer.setVolume(0), d.volume = "mute");
                    d.vimeoplayer.on("play", function(a) {
                        i[t].onceVideoPlayed = !0, d.cSS = "playing", d.vimeostarted || g(d, e, t)
                    }), d.vimeoplayer.on("loaded", function(a) {
                        var r = {};
                        d.vimeoplayer.getVideoWidth().then(function(i) {
                            r.width = i, void 0 !== r.width && void 0 !== r.height && (d.ratio = r.width + ":" + r.height, d.vimeoplayerloaded = !0, o(t, e))
                        }), d.vimeoplayer.getVideoHeight().then(function(i) {
                            r.height = i, void 0 !== r.width && void 0 !== r.height && (d.ratio = r.width + ":" + r.height, d.vimeoplayerloaded = !0, o(t, e))
                        }), d.startvideonow ? ("mute" === d.volume && (d.volumetoken = !0, d.vimeoplayer.setVolume(0)), i.playVideo(e, t), -1 != d.ssec && d.vimeoplayer.setCurrentTime(d.ssec)) : s && p(t, d, "show", .2)
                    }), e.addClass("rs-apiready"), d.vimeoplayer.on("volumechange", function(e) {
                        d.volumetoken && (d.volume = e.volume), d.volumetoken = !1
                    }), d.vimeoplayer.on("timeupdate", function(a) {
                        p(t, d), d.vimeostarted || 0 === a.percent || void 0 !== i[t].activeRSSlide && d.slideid !== i.gA(i[t].slides[i[t].activeRSSlide], "key") || g(d, e, t), d.pausetimer && "playing" == i[t].sliderstatus && (i[t].stopByVideo = !0, i[t].c.trigger("stoptimer")), d.currenttime = a.seconds, 0 != d.esec && -1 !== d.esec && d.esec < a.seconds && !0 !== d.nextslidecalled && (d.loop ? (i.playVideo(e, t), d.vimeoplayer.setCurrentTime(-1 !== d.ssec ? d.ssec : 0)) : (d.nse && (d.nseTriggered = !0, d.nextslidecalled = !0, i[t].c.revnext()), d.vimeoplayer.pause())), d.prePlayForaWhile && d.vimeoplayer.pause()
                    }), d.vimeoplayer.on("ended", function(a) {
                        d.cSS = "paused", p(t, d), d.vimeostarted = !1, w(e, t), i[t].stopByVideo = !1, i[t].c.trigger("starttimer"), i[t].c.trigger("revolution.slide.onvideostop", r(d.vimeoplayer, "vimeo", d)), d.nse && (d.nseTriggered = !0, i[t].c.revnext()), null != i[t].videoIsPlaying && i[t].videoIsPlaying.attr("id") != e.attr("id") || i.unToggleState(d.videotoggledby)
                    }), d.vimeoplayer.on("pause", function(a) {
                        d.vimeostarted = !1, d.cSS = "paused", p(t, d), i[t].stopByVideo = !1, i[t].tonpause = !1, w(e, t), i[t].c.trigger("starttimer"), i[t].c.trigger("revolution.slide.onvideostop", r(d.vimeoplayer, "vimeo", d)), null != i[t].videoIsPlaying && i[t].videoIsPlaying.attr("id") != e.attr("id") || i.unToggleState(d.videotoggledby)
                    }), d.jsposter.unbind("click"), d.jsposter.on("click", function() {
                        if (!i.ISM) return i.playVideo(e, t, !0), !1
                    }), d.videolistenerexist = !0
            }
        },
        h = function() {
            document.exitFullscreen && document.fullscreen ? document.exitFullscreen() : document.mozCancelFullScreen && document.mozFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitIsFullScreen && document.webkitExitFullscreen()
        },
        m = function(e, t, o) {
            var s = i[t].videos[e[0].id];
            if (i.ISM && s.notonmobile) return !1;
            if (s.metaloaded = !0, "html5" === s.newtype && s.bgvideo && (s.nBG = i[t].sbgs[e[0].dataset.key], void 0 === s.nBG.shadowCanvas && (s.nBG.shadowCanvas = document.createElement("canvas"), s.nBG.shadowCTX = s.nBG.shadowCanvas.getContext("2d"), s.nBG.shadowCanvas.style.background = "transparent", s.nBG.shadowCanvas.style.opacity = 1), s.nBG.isHTML5 = !0, s.nBG.video = void 0 !== s.nBG.loadobj && void 0 !== s.nBG.loadobj.img ? s.nBG.loadobj.img : s.video, s.nBG.drawVideoCanvasImagesRecall = !1), !s.controls || s.audio || void 0 !== s.poster) {
                0 != e.find(".tp-video-play-button").length || i.ISM || e.append('<div class="tp-video-play-button"><i class="revicon-right-dir"></i><span class="tp-revstop">&nbsp;</span></div>');
                var n = "video, rs-poster, .tp-video-play-button";
                void 0 !== s.poster && s.controls && (n = ".tp-video-play-button"), e.find(n).on("click", function() {
                    !1 === s.loop && s.esec > 0 && s.esec <= s.video.currentTime || (e.hasClass("videoisplaying") ? i.stopVideo(e, t) : i.playVideo(e, t, !0))
                })
            }(e.hasClass("rs-fsv") || s.bgvideo) && (s.bgvideo || e.hasClass("rs-fsv") ? (s.html5vid.addClass("fullcoveredvideo"), void 0 !== s.ratio && 1 != s.ratio.split(":").length || (s.ratio = "16:9"), i.prepareCoveredVideo(t)) : s.html5vid.addClass("rs-fsv")), a(s.video, "canplaythrough", function() {
                i.preLoadAudioDone(e, t, "canplaythrough")
            }), a(s.video, "canplay", function() {
                i.preLoadAudioDone(e, t, "canplay")
            }), a(s.video, "progress", function() {
                i.preLoadAudioDone(e, t, "progress")
            }), a(s.video, "pause", function() {
                i.ISM && b(s, 1)
            }), a(s.video, "timeupdate", function(e) {
                this.BGrendered = !0, p(t, s), -1 === s.esec && s.loop && 1 == window.isSafari11 && (s.esec = s.video.duration - .075), void 0 !== s.lastCurrentTime ? s.fps = s.video.currentTime - s.lastCurrentTime : s.fps = .1, s.lastCurrentTime = s.video.currentTime, 0 != s.esec && -1 != s.esec && s.esec < s.video.currentTime && !s.nextslidecalled && (s.loop ? (d(s), s.video.currentTime = -1 === s.ssec ? .5 : s.ssec) : (s.nse && (s.nseTriggered = !0, s.nextslidecalled = !0, i[t].jcnah = !0, i[t].c.revnext(), setTimeout(function() {
                    i[t].jcnah = !1
                }, 1e3)), s.video.pause()))
            }), a(s.video, "play", function() {
                s.cSS = "playing", p(t, s), s.bgvideo && (s.nBG.drawVideoCanvasImagesRecall = !0, s.nBG.videoisplaying = !0, s.nBG.video = s.video, i.updateVideoFrames(t, s.nBG)), i[t].onceVideoPlayed = !0, s.nextslidecalled = !1, s.volume = null != s.volume && "mute" != s.volume ? parseFloat(s.volcache) : s.volume, s.volcache = null != s.volcache && "mute" != s.volcache ? parseFloat(s.volcache) : s.volcache, i.is_mobile() || i.isSafari11() || (!0 === i[t].globalmute ? s.video.muted = !0 : s.video.muted = "mute" == s.volume, s.volcache = i.isNumeric(s.volcache) && s.volcache > 1 ? s.volcache / 100 : s.volcache, "mute" == s.volume ? s.video.muted = !0 : null != s.volcache && (s.video.volume = s.volcache)), e.addClass("videoisplaying"), y(e, t), clearTimeout(s.showCoverSoon), !0 !== s.pausetimer || "audio" == s.tag ? (i[t].stopByVideo = !1, i[t].c.trigger("revolution.slide.onvideostop", r(s.video, "html5", s))) : (i[t].stopByVideo = !0, i[t].c.trigger("revolution.slide.onvideoplay", r(s.video, "html5", s))), s.pausetimer && "playing" == i[t].sliderstatus && (i[t].stopByVideo = !0, i[t].c.trigger("stoptimer")), i.toggleState(s.videotoggledby)
            }), a(s.video, "seeked", function() {
                s.seeking = !1
            }), a(s.video, "seeking", function() {
                s.seeking = !0
            }), a(s.video, "pause", function(a) {
                s.cSS = "paused", p(t, s), e.removeClass("videoisplaying"), s.bgvideo && (s.nBG.drawVideoCanvasImagesRecall = !1, s.nBG.videoisplaying = !1), i[t].stopByVideo = !1, w(e, t), "audio" != s.tag && i[t].c.trigger("starttimer"), i[t].c.trigger("revolution.slide.onvideostop", r(s.video, "html5", s)), null != i[t].videoIsPlaying && i[t].videoIsPlaying.attr("id") != e.attr("id") || i.unToggleState(s.videotoggledby)
            }), a(s.video, "ended", function() {
                s.cSS = "paused", h(), p(t, s), w(e, t), i[t].stopByVideo = !1, w(e, t), "audio" != s.tag && i[t].c.trigger("starttimer"), i[t].c.trigger("revolution.slide.onvideostop", r(s.video, "html5", e.data())), s.nse && s.video.currentTime > 0 && (1 == !i[t].jcnah && (s.nseTriggered = !0, i[t].c.revnext(), i[t].jcnah = !0), setTimeout(function() {
                    i[t].jcnah = !1
                }, 1500)), e.removeClass("videoisplaying"), s.bgvideo && (s.nBG.drawVideoCanvasImagesRecall = !1, s.nBG.videoisplaying = !1), !0 !== i[t].inviewport && void 0 !== i[t].inviewport || (i[t].lastplayedvideos = [])
            })
        },
        v = function(e) {
            return "t" === e || !0 === e || "true" === e || "f" !== e && !1 !== e && "false" !== e && e
        },
        f = function(e, i, a) {
            e.audio = "audio" === i;
            var r = void 0 === e.video ? [] : e.video.split(";"),
                o = {
                    volume: e.audio ? 1 : "mute",
                    pload: "auto",
                    ratio: "16:9",
                    loop: !0,
                    aplay: "true",
                    fitCover: !0,
                    afs: !0,
                    controls: !1,
                    nse: !0,
                    npom: !1,
                    opom: !1,
                    inline: !0,
                    notonmobile: !1,
                    start: -1,
                    end: -1,
                    doverlay: "none",
                    doverlaysize: 1,
                    doverlaycolora: "transparent",
                    doverlaycolorb: "#000000",
                    scop: !1,
                    rwd: !0,
                    speed: 1,
                    ploadwait: 5,
                    stopAV: 1 !== e.bgvideo,
                    noInt: !1,
                    volcache: 75
                };
            for (var s in r)
                if (r.hasOwnProperty(s)) {
                    var n = r[s].split(":");
                    switch (n[0]) {
                        case "v":
                            o.volume = n[1];
                            break;
                        case "vd":
                            o.volcache = n[1];
                            break;
                        case "p":
                            o.pload = n[1];
                            break;
                        case "ar":
                            o.ratio = n[1] + (void 0 !== n[2] ? ":" + n[2] : "");
                            break;
                        case "ap":
                            o.aplay = v(n[1]);
                            break;
                        case "vfc":
                            o.fitCover = v(n[1]);
                            break;
                        case "afs":
                            o.afs = v(n[1]);
                            break;
                        case "vc":
                            o.controls = n[1];
                            break;
                        case "nse":
                            o.nse = v(n[1]);
                            break;
                        case "npom":
                            o.npom = v(n[1]);
                            break;
                        case "opom":
                            o.opom = v(n[1]);
                            break;
                        case "t":
                            o.vtype = n[1];
                            break;
                        case "inl":
                            o.inline = v(n[1]);
                            break;
                        case "nomo":
                            o.notonmobile = v(n[1]);
                            break;
                        case "sta":
                            o.start = n[1] + (void 0 !== n[2] ? ":" + n[2] : "");
                            break;
                        case "end":
                            o.end = n[1] + (void 0 !== n[2] ? ":" + n[2] : "");
                            break;
                        case "do":
                            o.doverlay = n[1];
                            break;
                        case "dos":
                            o.doverlaysize = n[1];
                            break;
                        case "doca":
                            o.doverlaycolora = n[1];
                            break;
                        case "docb":
                            o.doverlaycolorb = n[1];
                            break;
                        case "scop":
                            o.scop = v(n[1]);
                            break;
                        case "rwd":
                            o.rwd = v(n[1]);
                            break;
                        case "sp":
                            o.speed = n[1];
                            break;
                        case "vw":
                            o.ploadwait = parseInt(n[1], 0) || 5;
                            break;
                        case "sav":
                            o.stopAV = v(n[1]);
                            break;
                        case "noint":
                            o.noInt = v(n[1]);
                            break;
                        case "l":
                            o.loopcache = n[1], o.loop = "loop" === n[1] || "loopandnoslidestop" === n[1] || "none" !== n[1] && v(n[1]);
                            break;
                        case "ptimer":
                            o.pausetimer = v(n[1]);
                            break;
                        case "sat":
                            o.waitToSlideTrans = v(n[1])
                    }
                }
            return null == e.mp4 && null == e.webm && (o.fitCover = !1), void 0 !== e.bgvideo && (o.bgvideo = e.bgvideo), o.noInt && (o.controls = !1), void 0 !== e.mp4 && (o.mp4 = e.mp4), void 0 !== e.videomp4 && (o.mp4 = e.videomp4), void 0 !== e.ytid && (o.ytid = e.ytid), void 0 !== e.ogv && (o.ogv = e.ogv), void 0 !== e.webm && (o.webm = e.webm), void 0 !== e.vimeoid && (o.vimeoid = e.vimeoid), void 0 !== e.vatr && (o.vatr = e.vatr), void 0 !== e.videoattributes && (o.vatr = e.videoattributes), void 0 !== e.poster && (o.poster = e.poster), o.slideid = a, o.aplay = "true" === o.aplay || o.aplay, 1 === o.bgvideo && (o.volume = "mute"), o.ssec = t(o.start), o.esec = t(o.end), o.pausetimer = void 0 === o.pausetimer ? "loopandnoslidestop" !== o.loopcache : o.pausetimer, o.inColumn = e._incolumn, o.audio = e.audio, !0 !== o.loop && "true" !== o.loop || !0 !== o.nse && "true" !== o.nse || (o.loop = !1), o
        },
        y = function(e, t) {
            if (i[t].playingvideos = void 0 === i[t].playingvideos ? new Array : i[t].playingvideos, i[t].videos[e[0].id].stopAV && void 0 !== i[t].playingvideos && i[t].playingvideos.length > 0)
                for (var a in i[t].lastplayedvideos = jQuery.extend(!0, [], i[t].playingvideos), i[t].playingvideos) i[t].playingvideos.hasOwnProperty(a) && i.stopVideo(i[t].playingvideos[a], t);
            i[t].playingvideos.push(e), i[t].videoIsPlaying = e
        },
        w = function(e, t) {
            void 0 !== i[t] && void 0 !== i[t] && null != i[t].playingvideos && jQuery.inArray(e, i[t].playingvideos) >= 0 && i[t].playingvideos.splice(jQuery.inArray(e, i[t].playingvideos), 1)
        },
        b = function(e, t) {
            if (void 0 !== e && (void 0 === t && (t = 0), i.ISM && !e.bgvideo)) {
                e.playPauseBtnTween && e.playPauseBtnTween.kill && e.playPauseBtnTween.kill();
                var a = i.closestNode(e.video, "RS-LAYER"),
                    r = e.controls ? 1 : 0,
                    o = e.controls ? 0 : .3;
                e.controls && e.poster && 0 === t && (o = 0, r = 0), a && (e.playPauseBtnTween = tpGS.gsap.to(a.querySelector(".tp-video-play-button"), {
                    duration: o,
                    delay: r,
                    opacity: t
                }))
            }
        };
    window.RS_MODULES = window.RS_MODULES || {}, window.RS_MODULES.video = {
        loaded: !0,
        version: "6.2.14"
    }, window.RS_MODULES.checkMinimal && window.RS_MODULES.checkMinimal()
}(jQuery);;
/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */
! function() {
    "use strict";

    function e(p) {
        p.fn._fadeIn = p.fn.fadeIn;
        var b = p.noop || function() {},
            h = /MSIE/.test(navigator.userAgent),
            k = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent),
            y = (document.documentMode, "function" == typeof document.createElement("div").style.setExpression && document.createElement("div").style.setExpression);
        p.blockUI = function(e) {
            o(window, e)
        }, p.unblockUI = function(e) {
            v(window, e)
        }, p.growlUI = function(e, t, o, n) {
            var i = p('<div class="growlUI"></div>');
            e && i.append("<h1>" + e + "</h1>"), t && i.append("<h2>" + t + "</h2>"), o === undefined && (o = 3e3);
            var s = function(e) {
                e = e || {}, p.blockUI({
                    message: i,
                    fadeIn: "undefined" != typeof e.fadeIn ? e.fadeIn : 700,
                    fadeOut: "undefined" != typeof e.fadeOut ? e.fadeOut : 1e3,
                    timeout: "undefined" != typeof e.timeout ? e.timeout : o,
                    centerY: !1,
                    showOverlay: !1,
                    onUnblock: n,
                    css: p.blockUI.defaults.growlCSS
                })
            };
            s();
            i.css("opacity");
            i.on("mouseover", function() {
                s({
                    fadeIn: 0,
                    timeout: 3e4
                });
                var e = p(".blockMsg");
                e.stop(), e.fadeTo(300, 1)
            }).on("mouseout", function() {
                p(".blockMsg").fadeOut(1e3)
            })
        }, p.fn.block = function(e) {
            if (this[0] === window) return p.blockUI(e), this;
            var t = p.extend({}, p.blockUI.defaults, e || {});
            return this.each(function() {
                var e = p(this);
                t.ignoreIfBlocked && e.data("blockUI.isBlocked") || e.unblock({
                    fadeOut: 0
                })
            }), this.each(function() {
                "static" == p.css(this, "position") && (this.style.position = "relative", p(this).data("blockUI.static", !0)), this.style.zoom = 1, o(this, e)
            })
        }, p.fn.unblock = function(e) {
            return this[0] === window ? (p.unblockUI(e), this) : this.each(function() {
                v(this, e)
            })
        }, p.blockUI.version = 2.7, p.blockUI.defaults = {
            message: "<h1>Please wait...</h1>",
            title: null,
            draggable: !0,
            theme: !1,
            css: {
                padding: 0,
                margin: 0,
                width: "30%",
                top: "40%",
                left: "35%",
                textAlign: "center",
                color: "#000",
                border: "3px solid #aaa",
                backgroundColor: "#fff",
                cursor: "wait"
            },
            themedCSS: {
                width: "30%",
                top: "40%",
                left: "35%"
            },
            overlayCSS: {
                backgroundColor: "#000",
                opacity: .6,
                cursor: "wait"
            },
            cursorReset: "default",
            growlCSS: {
                width: "350px",
                top: "10px",
                left: "",
                right: "10px",
                border: "none",
                padding: "5px",
                opacity: .6,
                cursor: "default",
                color: "#fff",
                backgroundColor: "#000",
                "-webkit-border-radius": "10px",
                "-moz-border-radius": "10px",
                "border-radius": "10px"
            },
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank",
            forceIframe: !1,
            baseZ: 1e3,
            centerX: !0,
            centerY: !0,
            allowBodyStretch: !0,
            bindEvents: !0,
            constrainTabKey: !0,
            fadeIn: 200,
            fadeOut: 400,
            timeout: 0,
            showOverlay: !0,
            focusInput: !0,
            focusableElements: ":input:enabled:visible",
            onBlock: null,
            onUnblock: null,
            onOverlayClick: null,
            quirksmodeOffsetHack: 4,
            blockMsgClass: "blockMsg",
            ignoreIfBlocked: !1
        };
        var m = null,
            g = [];

        function o(e, o) {
            var t, n, i, s, l, d, a, c, r, u = e == window,
                f = o && o.message !== undefined ? o.message : undefined;
            (o = p.extend({}, p.blockUI.defaults, o || {})).ignoreIfBlocked && p(e).data("blockUI.isBlocked") || (o.overlayCSS = p.extend({}, p.blockUI.defaults.overlayCSS, o.overlayCSS || {}), i = p.extend({}, p.blockUI.defaults.css, o.css || {}), o.onOverlayClick && (o.overlayCSS.cursor = "pointer"), s = p.extend({}, p.blockUI.defaults.themedCSS, o.themedCSS || {}), f = f === undefined ? o.message : f, u && m && v(window, {
                fadeOut: 0
            }), f && "string" != typeof f && (f.parentNode || f.jquery) && (t = f.jquery ? f[0] : f, a = {}, p(e).data("blockUI.history", a), a.el = t, a.parent = t.parentNode, a.display = t.style.display, a.position = t.style.position, a.parent && a.parent.removeChild(t)), p(e).data("blockUI.onUnblock", o.onUnblock), r = o.baseZ, a = h || o.forceIframe ? p('<iframe class="blockUI" style="z-index:' + r++ + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + o.iframeSrc + '"></iframe>') : p('<div class="blockUI" style="display:none"></div>'), t = o.theme ? p('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + r++ + ';display:none"></div>') : p('<div class="blockUI blockOverlay" style="z-index:' + r++ + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'), o.theme && u ? (c = '<div class="blockUI ' + o.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (r + 10) + ';display:none;position:fixed">', o.title && (c += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (o.title || "&nbsp;") + "</div>"), c += '<div class="ui-widget-content ui-dialog-content"></div>', c += "</div>") : o.theme ? (c = '<div class="blockUI ' + o.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (r + 10) + ';display:none;position:absolute">', o.title && (c += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (o.title || "&nbsp;") + "</div>"), c += '<div class="ui-widget-content ui-dialog-content"></div>', c += "</div>") : c = u ? '<div class="blockUI ' + o.blockMsgClass + ' blockPage" style="z-index:' + (r + 10) + ';display:none;position:fixed"></div>' : '<div class="blockUI ' + o.blockMsgClass + ' blockElement" style="z-index:' + (r + 10) + ';display:none;position:absolute"></div>', r = p(c), f && (o.theme ? (r.css(s), r.addClass("ui-widget-content")) : r.css(i)), o.theme || t.css(o.overlayCSS), t.css("position", u ? "fixed" : "absolute"), (h || o.forceIframe) && a.css("opacity", 0), c = [a, t, r], n = p(u ? "body" : e), p.each(c, function() {
                this.appendTo(n)
            }), o.theme && o.draggable && p.fn.draggable && r.draggable({
                handle: ".ui-dialog-titlebar",
                cancel: "li"
            }), s = y && (!p.support.boxModel || 0 < p("object,embed", u ? null : e).length), (k || s) && (u && o.allowBodyStretch && p.support.boxModel && p("html,body").css("height", "100%"), !k && p.support.boxModel || u || (i = U(e, "borderTopWidth"), s = U(e, "borderLeftWidth"), l = i ? "(0 - " + i + ")" : 0, d = s ? "(0 - " + s + ")" : 0), p.each(c, function(e, t) {
                t = t[0].style;
                t.position = "absolute", e < 2 ? (u ? t.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + o.quirksmodeOffsetHack + ') + "px"') : t.setExpression("height", 'this.parentNode.offsetHeight + "px"'), u ? t.setExpression("width", 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : t.setExpression("width", 'this.parentNode.offsetWidth + "px"'), d && t.setExpression("left", d), l && t.setExpression("top", l)) : o.centerY ? (u && t.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'), t.marginTop = 0) : !o.centerY && u && (e = "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + (o.css && o.css.top ? parseInt(o.css.top, 10) : 0) + ') + "px"', t.setExpression("top", e))
            })), f && ((o.theme ? r.find(".ui-widget-content") : r).append(f), (f.jquery || f.nodeType) && p(f).show()), (h || o.forceIframe) && o.showOverlay && a.show(), o.fadeIn ? (c = o.onBlock ? o.onBlock : b, a = o.showOverlay && !f ? c : b, c = f ? c : b, o.showOverlay && t._fadeIn(o.fadeIn, a), f && r._fadeIn(o.fadeIn, c)) : (o.showOverlay && t.show(), f && r.show(), o.onBlock && o.onBlock.bind(r)()), I(1, e, o), u ? (m = r[0], g = p(o.focusableElements, m), o.focusInput && setTimeout(w, 20)) : function(e, t, o) {
                var n = e.parentNode,
                    i = e.style,
                    s = (n.offsetWidth - e.offsetWidth) / 2 - U(n, "borderLeftWidth"),
                    n = (n.offsetHeight - e.offsetHeight) / 2 - U(n, "borderTopWidth");
                t && (i.left = 0 < s ? s + "px" : "0");
                o && (i.top = 0 < n ? n + "px" : "0")
            }(r[0], o.centerX, o.centerY), o.timeout && (r = setTimeout(function() {
                u ? p.unblockUI(o) : p(e).unblock(o)
            }, o.timeout), p(e).data("blockUI.timeout", r)))
        }

        function v(e, t) {
            var o, n, i = e == window,
                s = p(e),
                l = s.data("blockUI.history"),
                d = s.data("blockUI.timeout");
            d && (clearTimeout(d), s.removeData("blockUI.timeout")), t = p.extend({}, p.blockUI.defaults, t || {}), I(0, e, t), null === t.onUnblock && (t.onUnblock = s.data("blockUI.onUnblock"), s.removeData("blockUI.onUnblock")), n = i ? p(document.body).children().filter(".blockUI").add("body > .blockUI") : s.find(">.blockUI"), t.cursorReset && (1 < n.length && (n[1].style.cursor = t.cursorReset), 2 < n.length && (n[2].style.cursor = t.cursorReset)), i && (m = g = null), t.fadeOut ? (o = n.length, n.stop().fadeOut(t.fadeOut, function() {
                0 == --o && a(n, l, t, e)
            })) : a(n, l, t, e)
        }

        function a(e, t, o, n) {
            var i = p(n);
            i.data("blockUI.isBlocked") || (e.each(function(e, t) {
                this.parentNode && this.parentNode.removeChild(this)
            }), t && t.el && (t.el.style.display = t.display, t.el.style.position = t.position, t.el.style.cursor = "default", t.parent && t.parent.appendChild(t.el), i.removeData("blockUI.history")), i.data("blockUI.static") && i.css("position", "static"), "function" == typeof o.onUnblock && o.onUnblock(n, o), n = (i = p(document.body)).width(), o = i[0].style.width, i.width(n - 1).width(n), i[0].style.width = o)
        }

        function I(e, t, o) {
            var n = t == window,
                t = p(t);
            !e && (n && !m || !n && !t.data("blockUI.isBlocked")) || (t.data("blockUI.isBlocked", e), n && o.bindEvents && (!e || o.showOverlay) && (n = "mousedown mouseup keydown keypress keyup touchstart touchend touchmove", e ? p(document).on(n, o, i) : p(document).off(n, i)))
        }

        function i(e) {
            if ("keydown" === e.type && e.keyCode && 9 == e.keyCode && m && e.data.constrainTabKey) {
                var t = !e.shiftKey && e.target === g[g.length - 1],
                    o = e.shiftKey && e.target === g[0];
                if (t || o) return setTimeout(function() {
                    w(o)
                }, 10), !1
            }
            var n = e.data,
                t = p(e.target);
            return t.hasClass("blockOverlay") && n.onOverlayClick && n.onOverlayClick(e), 0 < t.parents("div." + n.blockMsgClass).length || 0 === t.parents().children().filter("div.blockUI").length
        }

        function w(e) {
            !g || (e = g[!0 === e ? g.length - 1 : 0]) && e.trigger("focus")
        }

        function U(e, t) {
            return parseInt(p.css(e, t), 10) || 0
        }
    }
    "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], e) : e(jQuery)
}();