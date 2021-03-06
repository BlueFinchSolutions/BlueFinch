if (function(e, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function(e, t) {
        function n(e) {
            var t = !!e && "length" in e && e.length,
                n = ot.type(e);
            return "function" === n || ot.isWindow(e) ? !1 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
        }

        function i(e, t, n) {
            if (ot.isFunction(t)) return ot.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            });
            if (t.nodeType) return ot.grep(e, function(e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (gt.test(t)) return ot.filter(t, e, n);
                t = ot.filter(t, e)
            }
            return ot.grep(e, function(e) {
                return Z.call(t, e) > -1 !== n
            })
        }

        function r(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }

        function o(e) {
            var t = {};
            return ot.each(e.match(wt) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function s() {
            Y.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s), ot.ready()
        }

        function a() {
            this.expando = ot.expando + a.uid++
        }

        function l(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType)
                if (i = "data-" + t.replace(Nt, "-$&").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : St.test(n) ? ot.parseJSON(n) : n
                    } catch (r) {}
                    Et.set(e, t, n)
                } else n = void 0;
            return n
        }

        function u(e, t, n, i) {
            var r, o = 1,
                s = 20,
                a = i ? function() {
                    return i.cur()
                } : function() {
                    return ot.css(e, t, "")
                },
                l = a(),
                u = n && n[3] || (ot.cssNumber[t] ? "" : "px"),
                c = (ot.cssNumber[t] || "px" !== u && +l) && At.exec(ot.css(e, t));
            if (c && c[3] !== u) {
                u = u || c[3], n = n || [], c = +l || 1;
                do o = o || ".5", c /= o, ot.style(e, t, c + u); while (o !== (o = a() / l) && 1 !== o && --s)
            }
            return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
        }

        function c(e, t) {
            var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
            return void 0 === t || t && ot.nodeName(e, t) ? ot.merge([e], n) : n
        }

        function d(e, t) {
            for (var n = 0, i = e.length; i > n; n++) $t.set(e[n], "globalEval", !t || $t.get(t[n], "globalEval"))
        }

        function f(e, t, n, i, r) {
            for (var o, s, a, l, u, f, p = t.createDocumentFragment(), h = [], g = 0, m = e.length; m > g; g++)
                if (o = e[g], o || 0 === o)
                    if ("object" === ot.type(o)) ot.merge(h, o.nodeType ? [o] : o);
                    else if (Ht.test(o)) {
                for (s = s || p.appendChild(t.createElement("div")), a = (Ot.exec(o) || ["", ""])[1].toLowerCase(), l = Rt[a] || Rt._default, s.innerHTML = l[1] + ot.htmlPrefilter(o) + l[2], f = l[0]; f--;) s = s.lastChild;
                ot.merge(h, s.childNodes), s = p.firstChild, s.textContent = ""
            } else h.push(t.createTextNode(o));
            for (p.textContent = "", g = 0; o = h[g++];)
                if (i && ot.inArray(o, i) > -1) r && r.push(o);
                else if (u = ot.contains(o.ownerDocument, o), s = c(p.appendChild(o), "script"), u && d(s), n)
                for (f = 0; o = s[f++];) qt.test(o.type || "") && n.push(o);
            return p
        }

        function p() {
            return !0
        }

        function h() {
            return !1
        }

        function g() {
            try {
                return Y.activeElement
            } catch (e) {}
        }

        function m(e, t, n, i, r, o) {
            var s, a;
            if ("object" == typeof t) {
                "string" != typeof n && (i = i || n, n = void 0);
                for (a in t) m(e, a, n, i, t[a], o);
                return e
            }
            if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1) r = h;
            else if (!r) return e;
            return 1 === o && (s = r, r = function(e) {
                return ot().off(e), s.apply(this, arguments)
            }, r.guid = s.guid || (s.guid = ot.guid++)), e.each(function() {
                ot.event.add(this, t, r, i, n)
            })
        }

        function v(e, t) {
            return ot.nodeName(e, "table") && ot.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function y(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function b(e) {
            var t = Ut.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function x(e, t) {
            var n, i, r, o, s, a, l, u;
            if (1 === t.nodeType) {
                if ($t.hasData(e) && (o = $t.access(e), s = $t.set(t, o), u = o.events)) {
                    delete s.handle, s.events = {};
                    for (r in u)
                        for (n = 0, i = u[r].length; i > n; n++) ot.event.add(t, r, u[r][n])
                }
                Et.hasData(e) && (a = Et.access(e), l = ot.extend({}, a), Et.set(t, l))
            }
        }

        function w(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && It.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }

        function T(e, t, n, i) {
            t = K.apply([], t);
            var r, o, s, a, l, u, d = 0,
                p = e.length,
                h = p - 1,
                g = t[0],
                m = ot.isFunction(g);
            if (m || p > 1 && "string" == typeof g && !it.checkClone && _t.test(g)) return e.each(function(r) {
                var o = e.eq(r);
                m && (t[0] = g.call(this, r, o.html())), T(o, t, n, i)
            });
            if (p && (r = f(t, e[0].ownerDocument, !1, e, i), o = r.firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
                for (s = ot.map(c(r, "script"), y), a = s.length; p > d; d++) l = r, d !== h && (l = ot.clone(l, !0, !0), a && ot.merge(s, c(l, "script"))), n.call(e[d], l, d);
                if (a)
                    for (u = s[s.length - 1].ownerDocument, ot.map(s, b), d = 0; a > d; d++) l = s[d], qt.test(l.type || "") && !$t.access(l, "globalEval") && ot.contains(u, l) && (l.src ? ot._evalUrl && ot._evalUrl(l.src) : ot.globalEval(l.textContent.replace(zt, "")))
            }
            return e
        }

        function C(e, t, n) {
            for (var i, r = t ? ot.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || ot.cleanData(c(i)), i.parentNode && (n && ot.contains(i.ownerDocument, i) && d(c(i, "script")), i.parentNode.removeChild(i));
            return e
        }

        function k(e, t) {
            var n = ot(t.createElement(e)).appendTo(t.body),
                i = ot.css(n[0], "display");
            return n.detach(), i
        }

        function $(e) {
            var t = Y,
                n = Vt[e];
            return n || (n = k(e, t), "none" !== n && n || (Xt = (Xt || ot("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Xt[0].contentDocument, t.write(), t.close(), n = k(e, t), Xt.detach()), Vt[e] = n), n
        }

        function E(e, t, n) {
            var i, r, o, s, a = e.style;
            return n = n || Gt(e), s = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== s && void 0 !== s || ot.contains(e.ownerDocument, e) || (s = ot.style(e, t)), n && !it.pixelMarginRight() && Yt.test(s) && Qt.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o), void 0 !== s ? s + "" : s
        }

        function S(e, t) {
            return {
                get: function() {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function N(e) {
            if (e in rn) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = nn.length; n--;)
                if (e = nn[n] + t, e in rn) return e
        }

        function D(e, t, n) {
            var i = At.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
        }

        function A(e, t, n, i, r) {
            for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += ot.css(e, n + jt[o], !0, r)), i ? ("content" === n && (s -= ot.css(e, "padding" + jt[o], !0, r)), "margin" !== n && (s -= ot.css(e, "border" + jt[o] + "Width", !0, r))) : (s += ot.css(e, "padding" + jt[o], !0, r), "padding" !== n && (s += ot.css(e, "border" + jt[o] + "Width", !0, r)));
            return s
        }

        function j(t, n, i) {
            var r = !0,
                o = "width" === n ? t.offsetWidth : t.offsetHeight,
                s = Gt(t),
                a = "border-box" === ot.css(t, "boxSizing", !1, s);
            if (Y.msFullscreenElement && e.top !== e && t.getClientRects().length && (o = Math.round(100 * t.getBoundingClientRect()[n])), 0 >= o || null == o) {
                if (o = E(t, n, s), (0 > o || null == o) && (o = t.style[n]), Yt.test(o)) return o;
                r = a && (it.boxSizingReliable() || o === t.style[n]), o = parseFloat(o) || 0
            }
            return o + A(t, n, i || (a ? "border" : "content"), r, s) + "px"
        }

        function L(e, t) {
            for (var n, i, r, o = [], s = 0, a = e.length; a > s; s++) i = e[s], i.style && (o[s] = $t.get(i, "olddisplay"), n = i.style.display, t ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Lt(i) && (o[s] = $t.access(i, "olddisplay", $(i.nodeName)))) : (r = Lt(i), "none" === n && r || $t.set(i, "olddisplay", r ? n : ot.css(i, "display"))));
            for (s = 0; a > s; s++) i = e[s], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[s] || "" : "none"));
            return e
        }

        function I(e, t, n, i, r) {
            return new I.prototype.init(e, t, n, i, r)
        }

        function O() {
            return e.setTimeout(function() {
                on = void 0
            }), on = ot.now()
        }

        function q(e, t) {
            var n, i = 0,
                r = {
                    height: e
                };
            for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = jt[i], r["margin" + n] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r
        }

        function R(e, t, n) {
            for (var i, r = (F.tweeners[t] || []).concat(F.tweeners["*"]), o = 0, s = r.length; s > o; o++)
                if (i = r[o].call(n, t, e)) return i
        }

        function H(e, t, n) {
            var i, r, o, s, a, l, u, c, d = this,
                f = {},
                p = e.style,
                h = e.nodeType && Lt(e),
                g = $t.get(e, "fxshow");
            n.queue || (a = ot._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                a.unqueued || l()
            }), a.unqueued++, d.always(function() {
                d.always(function() {
                    a.unqueued--, ot.queue(e, "fx").length || a.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = ot.css(e, "display"), c = "none" === u ? $t.get(e, "olddisplay") || $(e.nodeName) : u, "inline" === c && "none" === ot.css(e, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always(function() {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            }));
            for (i in t)
                if (r = t[i], an.exec(r)) {
                    if (delete t[i], o = o || "toggle" === r, r === (h ? "hide" : "show")) {
                        if ("show" !== r || !g || void 0 === g[i]) continue;
                        h = !0
                    }
                    f[i] = g && g[i] || ot.style(e, i)
                } else u = void 0;
            if (ot.isEmptyObject(f)) "inline" === ("none" === u ? $(e.nodeName) : u) && (p.display = u);
            else {
                g ? "hidden" in g && (h = g.hidden) : g = $t.access(e, "fxshow", {}), o && (g.hidden = !h), h ? ot(e).show() : d.done(function() {
                    ot(e).hide()
                }), d.done(function() {
                    var t;
                    $t.remove(e, "fxshow");
                    for (t in f) ot.style(e, t, f[t])
                });
                for (i in f) s = R(h ? g[i] : 0, i, d), i in g || (g[i] = s.start, h && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function P(e, t) {
            var n, i, r, o, s;
            for (n in e)
                if (i = ot.camelCase(n), r = t[i], o = e[n], ot.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), s = ot.cssHooks[i], s && "expand" in s) {
                    o = s.expand(o), delete e[i];
                    for (n in o) n in e || (e[n] = o[n], t[n] = r)
                } else t[i] = r
        }

        function F(e, t, n) {
            var i, r, o = 0,
                s = F.prefilters.length,
                a = ot.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (r) return !1;
                    for (var t = on || O(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, o = 1 - i, s = 0, l = u.tweens.length; l > s; s++) u.tweens[s].run(o);
                    return a.notifyWith(e, [u, o, n]), 1 > o && l ? n : (a.resolveWith(e, [u]), !1)
                },
                u = a.promise({
                    elem: e,
                    props: ot.extend({}, t),
                    opts: ot.extend(!0, {
                        specialEasing: {},
                        easing: ot.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: on || O(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var i = ot.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(i), i
                    },
                    stop: function(t) {
                        var n = 0,
                            i = t ? u.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; i > n; n++) u.tweens[n].run(1);
                        return t ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]), this
                    }
                }),
                c = u.props;
            for (P(c, u.opts.specialEasing); s > o; o++)
                if (i = F.prefilters[o].call(u, e, c, u.opts)) return ot.isFunction(i.stop) && (ot._queueHooks(u.elem, u.opts.queue).stop = ot.proxy(i.stop, i)), i;
            return ot.map(c, R, u), ot.isFunction(u.opts.start) && u.opts.start.call(e, u), ot.fx.timer(ot.extend(l, {
                elem: e,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function M(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function W(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, r = 0,
                    o = t.toLowerCase().match(wt) || [];
                if (ot.isFunction(n))
                    for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function B(e, t, n, i) {
            function r(a) {
                var l;
                return o[a] = !0, ot.each(e[a] || [], function(e, a) {
                    var u = a(t, n, i);
                    return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1)
                }), l
            }
            var o = {},
                s = e === En;
            return r(t.dataTypes[0]) || !o["*"] && r("*")
        }

        function _(e, t) {
            var n, i, r = ot.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
            return i && ot.extend(!0, e, i), e
        }

        function U(e, t, n) {
            for (var i, r, o, s, a = e.contents, l = e.dataTypes;
                "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
            if (i)
                for (r in a)
                    if (a[r] && a[r].test(i)) {
                        l.unshift(r);
                        break
                    }
            if (l[0] in n) o = l[0];
            else {
                for (r in n) {
                    if (!l[0] || e.converters[r + " " + l[0]]) {
                        o = r;
                        break
                    }
                    s || (s = r)
                }
                o = o || s
            }
            return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
        }

        function z(e, t, n, i) {
            var r, o, s, a, l, u = {},
                c = e.dataTypes.slice();
            if (c[1])
                for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
            for (o = c.shift(); o;)
                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                    if ("*" === o) o = l;
                    else if ("*" !== l && l !== o) {
                if (s = u[l + " " + o] || u["* " + o], !s)
                    for (r in u)
                        if (a = r.split(" "), a[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                            s === !0 ? s = u[r] : u[r] !== !0 && (o = a[0], c.unshift(a[1]));
                            break
                        }
                if (s !== !0)
                    if (s && e.throws) t = s(t);
                    else try {
                        t = s(t)
                    } catch (d) {
                        return {
                            state: "parsererror",
                            error: s ? d : "No conversion from " + l + " to " + o
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function X(e, t, n, i) {
            var r;
            if (ot.isArray(t)) ot.each(t, function(t, r) {
                n || An.test(e) ? i(e, r) : X(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
            });
            else if (n || "object" !== ot.type(t)) i(e, t);
            else
                for (r in t) X(e + "[" + r + "]", t[r], n, i)
        }

        function V(e) {
            return ot.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
        }
        var Q = [],
            Y = e.document,
            G = Q.slice,
            K = Q.concat,
            J = Q.push,
            Z = Q.indexOf,
            et = {},
            tt = et.toString,
            nt = et.hasOwnProperty,
            it = {},
            rt = "2.2.1",
            ot = function(e, t) {
                return new ot.fn.init(e, t)
            },
            st = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            at = /^-ms-/,
            lt = /-([\da-z])/gi,
            ut = function(e, t) {
                return t.toUpperCase()
            };
        ot.fn = ot.prototype = {
            jquery: rt,
            constructor: ot,
            selector: "",
            length: 0,
            toArray: function() {
                return G.call(this)
            },
            get: function(e) {
                return null != e ? 0 > e ? this[e + this.length] : this[e] : G.call(this)
            },
            pushStack: function(e) {
                var t = ot.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e) {
                return ot.each(this, e)
            },
            map: function(e) {
                return this.pushStack(ot.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(G.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: J,
            sort: Q.sort,
            splice: Q.splice
        }, ot.extend = ot.fn.extend = function() {
            var e, t, n, i, r, o, s = arguments[0] || {},
                a = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || ot.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
                if (null != (e = arguments[a]))
                    for (t in e) n = s[t], i = e[t], s !== i && (u && i && (ot.isPlainObject(i) || (r = ot.isArray(i))) ? (r ? (r = !1, o = n && ot.isArray(n) ? n : []) : o = n && ot.isPlainObject(n) ? n : {}, s[t] = ot.extend(u, o, i)) : void 0 !== i && (s[t] = i));
            return s
        }, ot.extend({
            expando: "jQuery" + (rt + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === ot.type(e)
            },
            isArray: Array.isArray,
            isWindow: function(e) {
                return null != e && e === e.window
            },
            isNumeric: function(e) {
                var t = e && e.toString();
                return !ot.isArray(e) && t - parseFloat(t) + 1 >= 0
            },
            isPlainObject: function(e) {
                return "object" !== ot.type(e) || e.nodeType || ot.isWindow(e) ? !1 : e.constructor && !nt.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? et[tt.call(e)] || "object" : typeof e
            },
            globalEval: function(e) {
                var t, n = eval;
                e = ot.trim(e), e && (1 === e.indexOf("use strict") ? (t = Y.createElement("script"), t.text = e, Y.head.appendChild(t).parentNode.removeChild(t)) : n(e))
            },
            camelCase: function(e) {
                return e.replace(at, "ms-").replace(lt, ut)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t) {
                var i, r = 0;
                if (n(e))
                    for (i = e.length; i > r && t.call(e[r], r, e[r]) !== !1; r++);
                else
                    for (r in e)
                        if (t.call(e[r], r, e[r]) === !1) break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(st, "")
            },
            makeArray: function(e, t) {
                var i = t || [];
                return null != e && (n(Object(e)) ? ot.merge(i, "string" == typeof e ? [e] : e) : J.call(i, e)), i
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : Z.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, r = e.length; n > i; i++) e[r++] = t[i];
                return e.length = r, e
            },
            grep: function(e, t, n) {
                for (var i, r = [], o = 0, s = e.length, a = !n; s > o; o++) i = !t(e[o], o), i !== a && r.push(e[o]);
                return r
            },
            map: function(e, t, i) {
                var r, o, s = 0,
                    a = [];
                if (n(e))
                    for (r = e.length; r > s; s++) o = t(e[s], s, i), null != o && a.push(o);
                else
                    for (s in e) o = t(e[s], s, i), null != o && a.push(o);
                return K.apply([], a)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, i, r;
                return "string" == typeof t && (n = e[t], t = e, e = n), ot.isFunction(e) ? (i = G.call(arguments, 2), r = function() {
                    return e.apply(t || this, i.concat(G.call(arguments)))
                }, r.guid = e.guid = e.guid || ot.guid++, r) : void 0
            },
            now: Date.now,
            support: it
        }), "function" == typeof Symbol && (ot.fn[Symbol.iterator] = Q[Symbol.iterator]), ot.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            et["[object " + t + "]"] = t.toLowerCase()
        });
        var ct = function(e) {
            function t(e, t, n, i) {
                var r, o, s, a, l, u, d, p, h = t && t.ownerDocument,
                    g = t ? t.nodeType : 9;
                if (n = n || [], "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g) return n;
                if (!i && ((t ? t.ownerDocument || t : M) !== L && j(t), t = t || L, O)) {
                    if (11 !== g && (u = vt.exec(e)))
                        if (r = u[1]) {
                            if (9 === g) {
                                if (!(s = t.getElementById(r))) return n;
                                if (s.id === r) return n.push(s), n
                            } else if (h && (s = h.getElementById(r)) && P(t, s) && s.id === r) return n.push(s), n
                        } else {
                            if (u[2]) return J.apply(n, t.getElementsByTagName(e)), n;
                            if ((r = u[3]) && w.getElementsByClassName && t.getElementsByClassName) return J.apply(n, t.getElementsByClassName(r)), n
                        }
                    if (!(!w.qsa || z[e + " "] || q && q.test(e))) {
                        if (1 !== g) h = t, p = e;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((a = t.getAttribute("id")) ? a = a.replace(bt, "\\$&") : t.setAttribute("id", a = F), d = $(e), o = d.length, l = ft.test(a) ? "#" + a : "[id='" + a + "']"; o--;) d[o] = l + " " + f(d[o]);
                            p = d.join(","), h = yt.test(e) && c(t.parentNode) || t
                        }
                        if (p) try {
                            return J.apply(n, h.querySelectorAll(p)), n
                        } catch (m) {} finally {
                            a === F && t.removeAttribute("id")
                        }
                    }
                }
                return S(e.replace(at, "$1"), t, n, i)
            }

            function n() {
                function e(n, i) {
                    return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = i
                }
                var t = [];
                return e
            }

            function i(e) {
                return e[F] = !0, e
            }

            function r(e) {
                var t = L.createElement("div");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function o(e, t) {
                for (var n = e.split("|"), i = n.length; i--;) T.attrHandle[n[i]] = t
            }

            function s(e, t) {
                var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function a(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function l(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function u(e) {
                return i(function(t) {
                    return t = +t, i(function(n, i) {
                        for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                    })
                })
            }

            function c(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }

            function d() {}

            function f(e) {
                for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
                return i
            }

            function p(e, t, n) {
                var i = t.dir,
                    r = n && "parentNode" === i,
                    o = B++;
                return t.first ? function(t, n, o) {
                    for (; t = t[i];)
                        if (1 === t.nodeType || r) return e(t, n, o)
                } : function(t, n, s) {
                    var a, l, u, c = [W, o];
                    if (s) {
                        for (; t = t[i];)
                            if ((1 === t.nodeType || r) && e(t, n, s)) return !0
                    } else
                        for (; t = t[i];)
                            if (1 === t.nodeType || r) {
                                if (u = t[F] || (t[F] = {}), l = u[t.uniqueID] || (u[t.uniqueID] = {}), (a = l[i]) && a[0] === W && a[1] === o) return c[2] = a[2];
                                if (l[i] = c, c[2] = e(t, n, s)) return !0
                            }
                }
            }

            function h(e) {
                return e.length > 1 ? function(t, n, i) {
                    for (var r = e.length; r--;)
                        if (!e[r](t, n, i)) return !1;
                    return !0
                } : e[0]
            }

            function g(e, n, i) {
                for (var r = 0, o = n.length; o > r; r++) t(e, n[r], i);
                return i
            }

            function m(e, t, n, i, r) {
                for (var o, s = [], a = 0, l = e.length, u = null != t; l > a; a++)(o = e[a]) && (!n || n(o, i, r)) && (s.push(o), u && t.push(a));
                return s
            }

            function v(e, t, n, r, o, s) {
                return r && !r[F] && (r = v(r)), o && !o[F] && (o = v(o, s)), i(function(i, s, a, l) {
                    var u, c, d, f = [],
                        p = [],
                        h = s.length,
                        v = i || g(t || "*", a.nodeType ? [a] : a, []),
                        y = !e || !i && t ? v : m(v, f, e, a, l),
                        b = n ? o || (i ? e : h || r) ? [] : s : y;
                    if (n && n(y, b, a, l), r)
                        for (u = m(b, p), r(u, [], a, l), c = u.length; c--;)(d = u[c]) && (b[p[c]] = !(y[p[c]] = d));
                    if (i) {
                        if (o || e) {
                            if (o) {
                                for (u = [], c = b.length; c--;)(d = b[c]) && u.push(y[c] = d);
                                o(null, b = [], u, l)
                            }
                            for (c = b.length; c--;)(d = b[c]) && (u = o ? et(i, d) : f[c]) > -1 && (i[u] = !(s[u] = d))
                        }
                    } else b = m(b === s ? b.splice(h, b.length) : b), o ? o(null, s, b, l) : J.apply(s, b)
                })
            }

            function y(e) {
                for (var t, n, i, r = e.length, o = T.relative[e[0].type], s = o || T.relative[" "], a = o ? 1 : 0, l = p(function(e) {
                        return e === t
                    }, s, !0), u = p(function(e) {
                        return et(t, e) > -1
                    }, s, !0), c = [function(e, n, i) {
                        var r = !o && (i || n !== N) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                        return t = null, r
                    }]; r > a; a++)
                    if (n = T.relative[e[a].type]) c = [p(h(c), n)];
                    else {
                        if (n = T.filter[e[a].type].apply(null, e[a].matches), n[F]) {
                            for (i = ++a; r > i && !T.relative[e[i].type]; i++);
                            return v(a > 1 && h(c), a > 1 && f(e.slice(0, a - 1).concat({
                                value: " " === e[a - 2].type ? "*" : ""
                            })).replace(at, "$1"), n, i > a && y(e.slice(a, i)), r > i && y(e = e.slice(i)), r > i && f(e))
                        }
                        c.push(n)
                    }
                return h(c)
            }

            function b(e, n) {
                var r = n.length > 0,
                    o = e.length > 0,
                    s = function(i, s, a, l, u) {
                        var c, d, f, p = 0,
                            h = "0",
                            g = i && [],
                            v = [],
                            y = N,
                            b = i || o && T.find.TAG("*", u),
                            x = W += null == y ? 1 : Math.random() || .1,
                            w = b.length;
                        for (u && (N = s === L || s || u); h !== w && null != (c = b[h]); h++) {
                            if (o && c) {
                                for (d = 0, s || c.ownerDocument === L || (j(c), a = !O); f = e[d++];)
                                    if (f(c, s || L, a)) {
                                        l.push(c);
                                        break
                                    }
                                u && (W = x)
                            }
                            r && ((c = !f && c) && p--, i && g.push(c))
                        }
                        if (p += h, r && h !== p) {
                            for (d = 0; f = n[d++];) f(g, v, s, a);
                            if (i) {
                                if (p > 0)
                                    for (; h--;) g[h] || v[h] || (v[h] = G.call(l));
                                v = m(v)
                            }
                            J.apply(l, v), u && !i && v.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                        }
                        return u && (W = x, N = y), g
                    };
                return r ? i(s) : s
            }
            var x, w, T, C, k, $, E, S, N, D, A, j, L, I, O, q, R, H, P, F = "sizzle" + 1 * new Date,
                M = e.document,
                W = 0,
                B = 0,
                _ = n(),
                U = n(),
                z = n(),
                X = function(e, t) {
                    return e === t && (A = !0), 0
                },
                V = 1 << 31,
                Q = {}.hasOwnProperty,
                Y = [],
                G = Y.pop,
                K = Y.push,
                J = Y.push,
                Z = Y.slice,
                et = function(e, t) {
                    for (var n = 0, i = e.length; i > n; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                tt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                nt = "[\\x20\\t\\r\\n\\f]",
                it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                rt = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]",
                ot = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)",
                st = new RegExp(nt + "+", "g"),
                at = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
                lt = new RegExp("^" + nt + "*," + nt + "*"),
                ut = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
                ct = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
                dt = new RegExp(ot),
                ft = new RegExp("^" + it + "$"),
                pt = {
                    ID: new RegExp("^#(" + it + ")"),
                    CLASS: new RegExp("^\\.(" + it + ")"),
                    TAG: new RegExp("^(" + it + "|[*])"),
                    ATTR: new RegExp("^" + rt),
                    PSEUDO: new RegExp("^" + ot),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + tt + ")$", "i"),
                    needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
                },
                ht = /^(?:input|select|textarea|button)$/i,
                gt = /^h\d$/i,
                mt = /^[^{]+\{\s*\[native \w/,
                vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                yt = /[+~]/,
                bt = /'|\\/g,
                xt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
                wt = function(e, t, n) {
                    var i = "0x" + t - 65536;
                    return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                Tt = function() {
                    j()
                };
            try {
                J.apply(Y = Z.call(M.childNodes), M.childNodes), Y[M.childNodes.length].nodeType
            } catch (Ct) {
                J = {
                    apply: Y.length ? function(e, t) {
                        K.apply(e, Z.call(t))
                    } : function(e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }
            w = t.support = {}, k = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, j = t.setDocument = function(e) {
                var t, n, i = e ? e.ownerDocument || e : M;
                return i !== L && 9 === i.nodeType && i.documentElement ? (L = i, I = L.documentElement, O = !k(L), (n = L.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Tt, !1) : n.attachEvent && n.attachEvent("onunload", Tt)), w.attributes = r(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), w.getElementsByTagName = r(function(e) {
                    return e.appendChild(L.createComment("")), !e.getElementsByTagName("*").length
                }), w.getElementsByClassName = mt.test(L.getElementsByClassName), w.getById = r(function(e) {
                    return I.appendChild(e).id = F, !L.getElementsByName || !L.getElementsByName(F).length
                }), w.getById ? (T.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && O) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }, T.filter.ID = function(e) {
                    var t = e.replace(xt, wt);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete T.find.ID, T.filter.ID = function(e) {
                    var t = e.replace(xt, wt);
                    return function(e) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), T.find.TAG = w.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        r = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return o
                }, T.find.CLASS = w.getElementsByClassName && function(e, t) {
                    return "undefined" != typeof t.getElementsByClassName && O ? t.getElementsByClassName(e) : void 0
                }, R = [], q = [], (w.qsa = mt.test(L.querySelectorAll)) && (r(function(e) {
                    I.appendChild(e).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + nt + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || q.push("\\[" + nt + "*(?:value|" + tt + ")"), e.querySelectorAll("[id~=" + F + "-]").length || q.push("~="), e.querySelectorAll(":checked").length || q.push(":checked"), e.querySelectorAll("a#" + F + "+*").length || q.push(".#.+[+~]")
                }), r(function(e) {
                    var t = L.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && q.push("name" + nt + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), q.push(",.*:")
                })), (w.matchesSelector = mt.test(H = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && r(function(e) {
                    w.disconnectedMatch = H.call(e, "div"), H.call(e, "[s!='']:x"), R.push("!=", ot)
                }), q = q.length && new RegExp(q.join("|")), R = R.length && new RegExp(R.join("|")), t = mt.test(I.compareDocumentPosition), P = t || mt.test(I.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, X = t ? function(e, t) {
                    if (e === t) return A = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === L || e.ownerDocument === M && P(M, e) ? -1 : t === L || t.ownerDocument === M && P(M, t) ? 1 : D ? et(D, e) - et(D, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return A = !0, 0;
                    var n, i = 0,
                        r = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        l = [t];
                    if (!r || !o) return e === L ? -1 : t === L ? 1 : r ? -1 : o ? 1 : D ? et(D, e) - et(D, t) : 0;
                    if (r === o) return s(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) l.unshift(n);
                    for (; a[i] === l[i];) i++;
                    return i ? s(a[i], l[i]) : a[i] === M ? -1 : l[i] === M ? 1 : 0
                }, L) : L
            }, t.matches = function(e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== L && j(e), n = n.replace(ct, "='$1']"), !(!w.matchesSelector || !O || z[n + " "] || R && R.test(n) || q && q.test(n))) try {
                    var i = H.call(e, n);
                    if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (r) {}
                return t(n, L, null, [e]).length > 0
            }, t.contains = function(e, t) {
                return (e.ownerDocument || e) !== L && j(e), P(e, t)
            }, t.attr = function(e, t) {
                (e.ownerDocument || e) !== L && j(e);
                var n = T.attrHandle[t.toLowerCase()],
                    i = n && Q.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
                return void 0 !== i ? i : w.attributes || !O ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    r = 0;
                if (A = !w.detectDuplicates, D = !w.sortStable && e.slice(0), e.sort(X), A) {
                    for (; t = e[r++];) t === e[r] && (i = n.push(r));
                    for (; i--;) e.splice(n[i], 1)
                }
                return D = null, e
            }, C = t.getText = function(e) {
                var t, n = "",
                    i = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else
                    for (; t = e[i++];) n += C(t);
                return n
            }, T = t.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: pt,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(xt, wt), e[3] = (e[3] || e[4] || e[5] || "").replace(xt, wt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return pt.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && dt.test(n) && (t = $(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(xt, wt).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = _[e + " "];
                        return t || (t = new RegExp("(^|" + nt + ")" + e + "(" + nt + "|$)")) && _(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, i) {
                        return function(r) {
                            var o = t.attr(r, e);
                            return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(st, " ") + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                        }
                    },
                    CHILD: function(e, t, n, i, r) {
                        var o = "nth" !== e.slice(0, 3),
                            s = "last" !== e.slice(-4),
                            a = "of-type" === t;
                        return 1 === i && 0 === r ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var u, c, d, f, p, h, g = o !== s ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                v = a && t.nodeName.toLowerCase(),
                                y = !l && !a,
                                b = !1;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (f = t; f = f[g];)
                                            if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [s ? m.firstChild : m.lastChild], s && y) {
                                    for (f = m, d = f[F] || (f[F] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), u = c[e] || [], p = u[0] === W && u[1], b = p && u[2], f = p && m.childNodes[p]; f = ++p && f && f[g] || (b = p = 0) || h.pop();)
                                        if (1 === f.nodeType && ++b && f === t) {
                                            c[e] = [W, p, b];
                                            break
                                        }
                                } else if (y && (f = t, d = f[F] || (f[F] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), u = c[e] || [], p = u[0] === W && u[1], b = p), b === !1)
                                    for (;
                                        (f = ++p && f && f[g] || (b = p = 0) || h.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && (d = f[F] || (f[F] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), c[e] = [W, b]), f !== t)););
                                return b -= r, b === i || b % i === 0 && b / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var r, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return o[F] ? o(n) : o.length > 1 ? (r = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                            for (var i, r = o(e, n), s = r.length; s--;) i = et(e, r[s]), e[i] = !(t[i] = r[s])
                        }) : function(e) {
                            return o(e, 0, r)
                        }) : o
                    }
                },
                pseudos: {
                    not: i(function(e) {
                        var t = [],
                            n = [],
                            r = E(e.replace(at, "$1"));
                        return r[F] ? i(function(e, t, n, i) {
                            for (var o, s = r(e, null, i, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                        }) : function(e, i, o) {
                            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: i(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: i(function(e) {
                        return e = e.replace(xt, wt),
                            function(t) {
                                return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                            }
                    }),
                    lang: i(function(e) {
                        return ft.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xt, wt).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === I
                    },
                    focus: function(e) {
                        return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !T.pseudos.empty(e)
                    },
                    header: function(e) {
                        return gt.test(e.nodeName)
                    },
                    input: function(e) {
                        return ht.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: u(function() {
                        return [0]
                    }),
                    last: u(function(e, t) {
                        return [t - 1]
                    }),
                    eq: u(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: u(function(e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: u(function(e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: u(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                        return e
                    }),
                    gt: u(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }, T.pseudos.nth = T.pseudos.eq;
            for (x in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) T.pseudos[x] = a(x);
            for (x in {
                    submit: !0,
                    reset: !0
                }) T.pseudos[x] = l(x);
            return d.prototype = T.filters = T.pseudos, T.setFilters = new d, $ = t.tokenize = function(e, n) {
                var i, r, o, s, a, l, u, c = U[e + " "];
                if (c) return n ? 0 : c.slice(0);
                for (a = e, l = [], u = T.preFilter; a;) {
                    (!i || (r = lt.exec(a))) && (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = ut.exec(a)) && (i = r.shift(), o.push({
                        value: i,
                        type: r[0].replace(at, " ")
                    }), a = a.slice(i.length));
                    for (s in T.filter) !(r = pt[s].exec(a)) || u[s] && !(r = u[s](r)) || (i = r.shift(), o.push({
                        value: i,
                        type: s,
                        matches: r
                    }), a = a.slice(i.length));
                    if (!i) break
                }
                return n ? a.length : a ? t.error(e) : U(e, l).slice(0)
            }, E = t.compile = function(e, t) {
                var n, i = [],
                    r = [],
                    o = z[e + " "];
                if (!o) {
                    for (t || (t = $(e)), n = t.length; n--;) o = y(t[n]), o[F] ? i.push(o) : r.push(o);
                    o = z(e, b(r, i)), o.selector = e
                }
                return o
            }, S = t.select = function(e, t, n, i) {
                var r, o, s, a, l, u = "function" == typeof e && e,
                    d = !i && $(e = u.selector || e);
                if (n = n || [], 1 === d.length) {
                    if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === t.nodeType && O && T.relative[o[1].type]) {
                        if (t = (T.find.ID(s.matches[0].replace(xt, wt), t) || [])[0], !t) return n;
                        u && (t = t.parentNode), e = e.slice(o.shift().value.length)
                    }
                    for (r = pt.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !T.relative[a = s.type]);)
                        if ((l = T.find[a]) && (i = l(s.matches[0].replace(xt, wt), yt.test(o[0].type) && c(t.parentNode) || t))) {
                            if (o.splice(r, 1), e = i.length && f(o), !e) return J.apply(n, i), n;
                            break
                        }
                }
                return (u || E(e, d))(i, t, !O, n, !t || yt.test(e) && c(t.parentNode) || t), n
            }, w.sortStable = F.split("").sort(X).join("") === F, w.detectDuplicates = !!A, j(), w.sortDetached = r(function(e) {
                return 1 & e.compareDocumentPosition(L.createElement("div"))
            }), r(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function(e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), w.attributes && r(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || o("value", function(e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            }), r(function(e) {
                return null == e.getAttribute("disabled")
            }) || o(tt, function(e, t, n) {
                var i;
                return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }), t
        }(e);
        ot.find = ct, ot.expr = ct.selectors, ot.expr[":"] = ot.expr.pseudos, ot.uniqueSort = ot.unique = ct.uniqueSort, ot.text = ct.getText, ot.isXMLDoc = ct.isXML, ot.contains = ct.contains;
        var dt = function(e, t, n) {
                for (var i = [], r = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (r && ot(e).is(n)) break;
                        i.push(e)
                    }
                return i
            },
            ft = function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            pt = ot.expr.match.needsContext,
            ht = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            gt = /^.[^:#\[\.,]*$/;
        ot.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? ot.find.matchesSelector(i, e) ? [i] : [] : ot.find.matches(e, ot.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, ot.fn.extend({
            find: function(e) {
                var t, n = this.length,
                    i = [],
                    r = this;
                if ("string" != typeof e) return this.pushStack(ot(e).filter(function() {
                    for (t = 0; n > t; t++)
                        if (ot.contains(r[t], this)) return !0
                }));
                for (t = 0; n > t; t++) ot.find(e, r[t], i);
                return i = this.pushStack(n > 1 ? ot.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
            },
            filter: function(e) {
                return this.pushStack(i(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(i(this, e || [], !0))
            },
            is: function(e) {
                return !!i(this, "string" == typeof e && pt.test(e) ? ot(e) : e || [], !1).length
            }
        });
        var mt, vt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            yt = ot.fn.init = function(e, t, n) {
                var i, r;
                if (!e) return this;
                if (n = n || mt, "string" == typeof e) {
                    if (i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : vt.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (i[1]) {
                        if (t = t instanceof ot ? t[0] : t, ot.merge(this, ot.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : Y, !0)), ht.test(i[1]) && ot.isPlainObject(t))
                            for (i in t) ot.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                        return this
                    }
                    return r = Y.getElementById(i[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = Y, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ot.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(ot) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ot.makeArray(e, this))
            };
        yt.prototype = ot.fn, mt = ot(Y);
        var bt = /^(?:parents|prev(?:Until|All))/,
            xt = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        ot.fn.extend({
            has: function(e) {
                var t = ot(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var e = 0; n > e; e++)
                        if (ot.contains(this, t[e])) return !0
                })
            },
            closest: function(e, t) {
                for (var n, i = 0, r = this.length, o = [], s = pt.test(e) || "string" != typeof e ? ot(e, t || this.context) : 0; r > i; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ot.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
                return this.pushStack(o.length > 1 ? ot.uniqueSort(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? Z.call(ot(e), this[0]) : Z.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(ot.uniqueSort(ot.merge(this.get(), ot(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), ot.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return dt(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return dt(e, "parentNode", n)
            },
            next: function(e) {
                return r(e, "nextSibling")
            },
            prev: function(e) {
                return r(e, "previousSibling")
            },
            nextAll: function(e) {
                return dt(e, "nextSibling")
            },
            prevAll: function(e) {
                return dt(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return dt(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return dt(e, "previousSibling", n)
            },
            siblings: function(e) {
                return ft((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return ft(e.firstChild)
            },
            contents: function(e) {
                return e.contentDocument || ot.merge([], e.childNodes)
            }
        }, function(e, t) {
            ot.fn[e] = function(n, i) {
                var r = ot.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = ot.filter(i, r)), this.length > 1 && (xt[e] || ot.uniqueSort(r), bt.test(e) && r.reverse()), this.pushStack(r)
            }
        });
        var wt = /\S+/g;
        ot.Callbacks = function(e) {
            e = "string" == typeof e ? o(e) : ot.extend({}, e);
            var t, n, i, r, s = [],
                a = [],
                l = -1,
                u = function() {
                    for (r = e.once, i = t = !0; a.length; l = -1)
                        for (n = a.shift(); ++l < s.length;) s[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = s.length, n = !1);
                    e.memory || (n = !1), t = !1, r && (s = n ? [] : "")
                },
                c = {
                    add: function() {
                        return s && (n && !t && (l = s.length - 1, a.push(n)), function i(t) {
                            ot.each(t, function(t, n) {
                                ot.isFunction(n) ? e.unique && c.has(n) || s.push(n) : n && n.length && "string" !== ot.type(n) && i(n)
                            })
                        }(arguments), n && !t && u()), this
                    },
                    remove: function() {
                        return ot.each(arguments, function(e, t) {
                            for (var n;
                                (n = ot.inArray(t, s, n)) > -1;) s.splice(n, 1), l >= n && l--
                        }), this
                    },
                    has: function(e) {
                        return e ? ot.inArray(e, s) > -1 : s.length > 0
                    },
                    empty: function() {
                        return s && (s = []), this
                    },
                    disable: function() {
                        return r = a = [], s = n = "", this
                    },
                    disabled: function() {
                        return !s
                    },
                    lock: function() {
                        return r = a = [], n || (s = n = ""), this
                    },
                    locked: function() {
                        return !!r
                    },
                    fireWith: function(e, n) {
                        return r || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || u()), this
                    },
                    fire: function() {
                        return c.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return c
        }, ot.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", ot.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", ot.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", ot.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return ot.Deferred(function(n) {
                                ot.each(t, function(t, o) {
                                    var s = ot.isFunction(e[t]) && e[t];
                                    r[o[1]](function() {
                                        var e = s && s.apply(this, arguments);
                                        e && ot.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? ot.extend(e, i) : i
                        }
                    },
                    r = {};
                return i.pipe = i.then, ot.each(t, function(e, o) {
                    var s = o[2],
                        a = o[3];
                    i[o[1]] = s.add, a && s.add(function() {
                        n = a
                    }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function() {
                        return r[o[0] + "With"](this === r ? i : this, arguments), this
                    }, r[o[0] + "With"] = s.fireWith
                }), i.promise(r), e && e.call(r, r), r
            },
            when: function(e) {
                var t, n, i, r = 0,
                    o = G.call(arguments),
                    s = o.length,
                    a = 1 !== s || e && ot.isFunction(e.promise) ? s : 0,
                    l = 1 === a ? e : ot.Deferred(),
                    u = function(e, n, i) {
                        return function(r) {
                            n[e] = this, i[e] = arguments.length > 1 ? G.call(arguments) : r, i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                        }
                    };
                if (s > 1)
                    for (t = new Array(s), n = new Array(s), i = new Array(s); s > r; r++) o[r] && ot.isFunction(o[r].promise) ? o[r].promise().progress(u(r, n, t)).done(u(r, i, o)).fail(l.reject) : --a;
                return a || l.resolveWith(i, o), l.promise()
            }
        });
        var Tt;
        ot.fn.ready = function(e) {
            return ot.ready.promise().done(e), this
        }, ot.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? ot.readyWait++ : ot.ready(!0)
            },
            ready: function(e) {
                (e === !0 ? --ot.readyWait : ot.isReady) || (ot.isReady = !0, e !== !0 && --ot.readyWait > 0 || (Tt.resolveWith(Y, [ot]), ot.fn.triggerHandler && (ot(Y).triggerHandler("ready"), ot(Y).off("ready"))))
            }
        }), ot.ready.promise = function(t) {
            return Tt || (Tt = ot.Deferred(), "complete" === Y.readyState || "loading" !== Y.readyState && !Y.documentElement.doScroll ? e.setTimeout(ot.ready) : (Y.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s))), Tt.promise(t)
        }, ot.ready.promise();
        var Ct = function(e, t, n, i, r, o, s) {
                var a = 0,
                    l = e.length,
                    u = null == n;
                if ("object" === ot.type(n)) {
                    r = !0;
                    for (a in n) Ct(e, t, a, n[a], !0, o, s)
                } else if (void 0 !== i && (r = !0, ot.isFunction(i) || (s = !0), u && (s ? (t.call(e, i), t = null) : (u = t, t = function(e, t, n) {
                        return u.call(ot(e), n)
                    })), t))
                    for (; l > a; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
                return r ? e : u ? t.call(e) : l ? t(e[0], n) : o
            },
            kt = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };
        a.uid = 1, a.prototype = {
            register: function(e, t) {
                var n = t || {};
                return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                    value: n,
                    writable: !0,
                    configurable: !0
                }), e[this.expando]
            },
            cache: function(e) {
                if (!kt(e)) return {};
                var t = e[this.expando];
                return t || (t = {}, kt(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function(e, t, n) {
                var i, r = this.cache(e);
                if ("string" == typeof t) r[t] = n;
                else
                    for (i in t) r[i] = t[i];
                return r
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
            },
            access: function(e, t, n) {
                var i;
                return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, ot.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, i, r, o = e[this.expando];
                if (void 0 !== o) {
                    if (void 0 === t) this.register(e);
                    else {
                        ot.isArray(t) ? i = t.concat(t.map(ot.camelCase)) : (r = ot.camelCase(t), t in o ? i = [t, r] : (i = r, i = i in o ? [i] : i.match(wt) || [])), n = i.length;
                        for (; n--;) delete o[i[n]]
                    }(void 0 === t || ot.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !ot.isEmptyObject(t)
            }
        };
        var $t = new a,
            Et = new a,
            St = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Nt = /[A-Z]/g;
        ot.extend({
            hasData: function(e) {
                return Et.hasData(e) || $t.hasData(e)
            },
            data: function(e, t, n) {
                return Et.access(e, t, n)
            },
            removeData: function(e, t) {
                Et.remove(e, t)
            },
            _data: function(e, t, n) {
                return $t.access(e, t, n)
            },
            _removeData: function(e, t) {
                $t.remove(e, t)
            }
        }), ot.fn.extend({
            data: function(e, t) {
                var n, i, r, o = this[0],
                    s = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (r = Et.get(o), 1 === o.nodeType && !$t.get(o, "hasDataAttrs"))) {
                        for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = ot.camelCase(i.slice(5)), l(o, i, r[i])));
                        $t.set(o, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof e ? this.each(function() {
                    Et.set(this, e)
                }) : Ct(this, function(t) {
                    var n, i;
                    if (o && void 0 === t) {
                        if (n = Et.get(o, e) || Et.get(o, e.replace(Nt, "-$&").toLowerCase()), void 0 !== n) return n;
                        if (i = ot.camelCase(e), n = Et.get(o, i), void 0 !== n) return n;
                        if (n = l(o, i, void 0), void 0 !== n) return n
                    } else i = ot.camelCase(e), this.each(function() {
                        var n = Et.get(this, i);
                        Et.set(this, i, t), e.indexOf("-") > -1 && void 0 !== n && Et.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    Et.remove(this, e)
                })
            }
        }), ot.extend({
            queue: function(e, t, n) {
                var i;
                return e ? (t = (t || "fx") + "queue", i = $t.get(e, t), n && (!i || ot.isArray(n) ? i = $t.access(e, t, ot.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = ot.queue(e, t),
                    i = n.length,
                    r = n.shift(),
                    o = ot._queueHooks(e, t),
                    s = function() {
                        ot.dequeue(e, t)
                    };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, s, o)), !i && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return $t.get(e, n) || $t.access(e, n, {
                    empty: ot.Callbacks("once memory").add(function() {
                        $t.remove(e, [t + "queue", n])
                    })
                })
            }
        }), ot.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ot.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = ot.queue(this, e, t);
                    ot._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ot.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    ot.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, i = 1,
                    r = ot.Deferred(),
                    o = this,
                    s = this.length,
                    a = function() {
                        --i || r.resolveWith(o, [o])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = $t.get(o[s], e + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
                return a(), r.promise(t)
            }
        });
        var Dt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            At = new RegExp("^(?:([+-])=|)(" + Dt + ")([a-z%]*)$", "i"),
            jt = ["Top", "Right", "Bottom", "Left"],
            Lt = function(e, t) {
                return e = t || e, "none" === ot.css(e, "display") || !ot.contains(e.ownerDocument, e)
            },
            It = /^(?:checkbox|radio)$/i,
            Ot = /<([\w:-]+)/,
            qt = /^$|\/(?:java|ecma)script/i,
            Rt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Rt.optgroup = Rt.option, Rt.tbody = Rt.tfoot = Rt.colgroup = Rt.caption = Rt.thead, Rt.th = Rt.td;
        var Ht = /<|&#?\w+;/;
        ! function() {
            var e = Y.createDocumentFragment(),
                t = e.appendChild(Y.createElement("div")),
                n = Y.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), it.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", it.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        }();
        var Pt = /^key/,
            Ft = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Mt = /^([^.]*)(?:\.(.+)|)/;
        ot.event = {
            global: {},
            add: function(e, t, n, i, r) {
                var o, s, a, l, u, c, d, f, p, h, g, m = $t.get(e);
                if (m)
                    for (n.handler && (o = n, n = o.handler, r = o.selector), n.guid || (n.guid = ot.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function(t) {
                            return "undefined" != typeof ot && ot.event.triggered !== t.type ? ot.event.dispatch.apply(e, arguments) : void 0
                        }), t = (t || "").match(wt) || [""], u = t.length; u--;) a = Mt.exec(t[u]) || [], p = g = a[1], h = (a[2] || "").split(".").sort(), p && (d = ot.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, d = ot.event.special[p] || {}, c = ot.extend({
                        type: p,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && ot.expr.match.needsContext.test(r),
                        namespace: h.join(".")
                    }, o), (f = l[p]) || (f = l[p] = [], f.delegateCount = 0, d.setup && d.setup.call(e, i, h, s) !== !1 || e.addEventListener && e.addEventListener(p, s)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, c) : f.push(c), ot.event.global[p] = !0)
            },
            remove: function(e, t, n, i, r) {
                var o, s, a, l, u, c, d, f, p, h, g, m = $t.hasData(e) && $t.get(e);
                if (m && (l = m.events)) {
                    for (t = (t || "").match(wt) || [""], u = t.length; u--;)
                        if (a = Mt.exec(t[u]) || [], p = g = a[1], h = (a[2] || "").split(".").sort(), p) {
                            for (d = ot.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, f = l[p] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = f.length; o--;) c = f[o], !r && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (f.splice(o, 1), c.selector && f.delegateCount--, d.remove && d.remove.call(e, c));
                            s && !f.length && (d.teardown && d.teardown.call(e, h, m.handle) !== !1 || ot.removeEvent(e, p, m.handle), delete l[p])
                        } else
                            for (p in l) ot.event.remove(e, p + t[u], n, i, !0);
                    ot.isEmptyObject(l) && $t.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                e = ot.event.fix(e);
                var t, n, i, r, o, s = [],
                    a = G.call(arguments),
                    l = ($t.get(this, "events") || {})[e.type] || [],
                    u = ot.event.special[e.type] || {};
                if (a[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                    for (s = ot.event.handlers.call(this, e, l), t = 0;
                        (r = s[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = r.elem, n = 0;
                            (o = r.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.rnamespace || e.rnamespace.test(o.namespace)) && (e.handleObj = o, e.data = o.data, i = ((ot.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, t) {
                var n, i, r, o, s = [],
                    a = t.delegateCount,
                    l = e.target;
                if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                    for (; l !== this; l = l.parentNode || this)
                        if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                            for (i = [], n = 0; a > n; n++) o = t[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? ot(r, this).index(l) > -1 : ot.find(r, this, null, [l]).length), i[r] && i.push(o);
                            i.length && s.push({
                                elem: l,
                                handlers: i
                            })
                        }
                return a < t.length && s.push({
                    elem: this,
                    handlers: t.slice(a)
                }), s
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, t) {
                    var n, i, r, o = t.button;
                    return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || Y, i = n.documentElement, r = n.body, e.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
                }
            },
            fix: function(e) {
                if (e[ot.expando]) return e;
                var t, n, i, r = e.type,
                    o = e,
                    s = this.fixHooks[r];
                for (s || (this.fixHooks[r] = s = Ft.test(r) ? this.mouseHooks : Pt.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new ot.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
                return e.target || (e.target = Y), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== g() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === g() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && ot.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function(e) {
                        return ot.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, ot.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, ot.Event = function(e, t) {
            return this instanceof ot.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? p : h) : this.type = e, t && ot.extend(this, t), this.timeStamp = e && e.timeStamp || ot.now(), void(this[ot.expando] = !0)) : new ot.Event(e, t)
        }, ot.Event.prototype = {
            constructor: ot.Event,
            isDefaultPrevented: h,
            isPropagationStopped: h,
            isImmediatePropagationStopped: h,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = p, e && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = p, e && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = p, e && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, ot.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            ot.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = this,
                        r = e.relatedTarget,
                        o = e.handleObj;
                    return (!r || r !== i && !ot.contains(i, r)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), ot.fn.extend({
            on: function(e, t, n, i) {
                return m(this, e, t, n, i)
            },
            one: function(e, t, n, i) {
                return m(this, e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ot(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (r in e) this.off(r, t, e[r]);
                    return this
                }
                return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = h), this.each(function() {
                    ot.event.remove(this, e, n, t)
                })
            }
        });
        var Wt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            Bt = /<script|<style|<link/i,
            _t = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ut = /^true\/(.*)/,
            zt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        ot.extend({
            htmlPrefilter: function(e) {
                return e.replace(Wt, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var i, r, o, s, a = e.cloneNode(!0),
                    l = ot.contains(e.ownerDocument, e);
                if (!(it.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ot.isXMLDoc(e)))
                    for (s = c(a), o = c(e), i = 0, r = o.length; r > i; i++) w(o[i], s[i]);
                if (t)
                    if (n)
                        for (o = o || c(e), s = s || c(a), i = 0, r = o.length; r > i; i++) x(o[i], s[i]);
                    else x(e, a);
                return s = c(a, "script"), s.length > 0 && d(s, !l && c(e, "script")), a
            },
            cleanData: function(e) {
                for (var t, n, i, r = ot.event.special, o = 0; void 0 !== (n = e[o]); o++)
                    if (kt(n)) {
                        if (t = n[$t.expando]) {
                            if (t.events)
                                for (i in t.events) r[i] ? ot.event.remove(n, i) : ot.removeEvent(n, i, t.handle);
                            n[$t.expando] = void 0
                        }
                        n[Et.expando] && (n[Et.expando] = void 0)
                    }
            }
        }), ot.fn.extend({
            domManip: T,
            detach: function(e) {
                return C(this, e, !0)
            },
            remove: function(e) {
                return C(this, e)
            },
            text: function(e) {
                return Ct(this, function(e) {
                    return void 0 === e ? ot.text(this) : this.empty().each(function() {
                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return T(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = v(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return T(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = v(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return T(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return T(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ot.cleanData(c(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                    return ot.clone(this, e, t)
                })
            },
            html: function(e) {
                return Ct(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !Bt.test(e) && !Rt[(Ot.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = ot.htmlPrefilter(e);
                        try {
                            for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (ot.cleanData(c(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (r) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return T(this, arguments, function(t) {
                    var n = this.parentNode;
                    ot.inArray(this, e) < 0 && (ot.cleanData(c(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), ot.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            ot.fn[e] = function(e) {
                for (var n, i = [], r = ot(e), o = r.length - 1, s = 0; o >= s; s++) n = s === o ? this : this.clone(!0), ot(r[s])[t](n), J.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var Xt, Vt = {
                HTML: "block",
                BODY: "block"
            },
            Qt = /^margin/,
            Yt = new RegExp("^(" + Dt + ")(?!px)[a-z%]+$", "i"),
            Gt = function(t) {
                var n = t.ownerDocument.defaultView;
                return n && n.opener || (n = e), n.getComputedStyle(t)
            },
            Kt = function(e, t, n, i) {
                var r, o, s = {};
                for (o in t) s[o] = e.style[o], e.style[o] = t[o];
                r = n.apply(e, i || []);
                for (o in t) e.style[o] = s[o];
                return r
            },
            Jt = Y.documentElement;
        ! function() {
            function t() {
                a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Jt.appendChild(s);
                var t = e.getComputedStyle(a);
                n = "1%" !== t.top, o = "2px" === t.marginLeft, i = "4px" === t.width, a.style.marginRight = "50%", r = "4px" === t.marginRight, Jt.removeChild(s)
            }
            var n, i, r, o, s = Y.createElement("div"),
                a = Y.createElement("div");
            a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", it.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), ot.extend(it, {
                pixelPosition: function() {
                    return t(), n
                },
                boxSizingReliable: function() {
                    return null == i && t(), i
                },
                pixelMarginRight: function() {
                    return null == i && t(), r
                },
                reliableMarginLeft: function() {
                    return null == i && t(), o
                },
                reliableMarginRight: function() {
                    var t, n = a.appendChild(Y.createElement("div"));
                    return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", Jt.appendChild(s), t = !parseFloat(e.getComputedStyle(n).marginRight), Jt.removeChild(s), a.removeChild(n), t
                }
            }))
        }();
        var Zt = /^(none|table(?!-c[ea]).+)/,
            en = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            tn = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            nn = ["Webkit", "O", "Moz", "ms"],
            rn = Y.createElement("div").style;
        ot.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = E(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": "cssFloat"
            },
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r, o, s, a = ot.camelCase(t),
                        l = e.style;
                    return t = ot.cssProps[a] || (ot.cssProps[a] = N(a) || a), s = ot.cssHooks[t] || ot.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : l[t] : (o = typeof n, "string" === o && (r = At.exec(n)) && r[1] && (n = u(e, t, r), o = "number"), null != n && n === n && ("number" === o && (n += r && r[3] || (ot.cssNumber[a] ? "" : "px")), it.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l[t] = n)), void 0)
                }
            },
            css: function(e, t, n, i) {
                var r, o, s, a = ot.camelCase(t);
                return t = ot.cssProps[a] || (ot.cssProps[a] = N(a) || a), s = ot.cssHooks[t] || ot.cssHooks[a], s && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = E(e, t, i)), "normal" === r && t in tn && (r = tn[t]), "" === n || n ? (o = parseFloat(r), n === !0 || isFinite(o) ? o || 0 : r) : r
            }
        }), ot.each(["height", "width"], function(e, t) {
            ot.cssHooks[t] = {
                get: function(e, n, i) {
                    return n ? Zt.test(ot.css(e, "display")) && 0 === e.offsetWidth ? Kt(e, en, function() {
                        return j(e, t, i)
                    }) : j(e, t, i) : void 0
                },
                set: function(e, n, i) {
                    var r, o = i && Gt(e),
                        s = i && A(e, t, i, "border-box" === ot.css(e, "boxSizing", !1, o), o);
                    return s && (r = At.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = ot.css(e, t)), D(e, n, s)
                }
            }
        }), ot.cssHooks.marginLeft = S(it.reliableMarginLeft, function(e, t) {
            return t ? (parseFloat(E(e, "marginLeft")) || e.getBoundingClientRect().left - Kt(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px" : void 0
        }), ot.cssHooks.marginRight = S(it.reliableMarginRight, function(e, t) {
            return t ? Kt(e, {
                display: "inline-block"
            }, E, [e, "marginRight"]) : void 0
        }), ot.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            ot.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[e + jt[i] + t] = o[i] || o[i - 2] || o[0];
                    return r
                }
            }, Qt.test(e) || (ot.cssHooks[e + t].set = D)
        }), ot.fn.extend({
            css: function(e, t) {
                return Ct(this, function(e, t, n) {
                    var i, r, o = {},
                        s = 0;
                    if (ot.isArray(t)) {
                        for (i = Gt(e), r = t.length; r > s; s++) o[t[s]] = ot.css(e, t[s], !1, i);
                        return o
                    }
                    return void 0 !== n ? ot.style(e, t, n) : ot.css(e, t)
                }, e, t, arguments.length > 1)
            },
            show: function() {
                return L(this, !0)
            },
            hide: function() {
                return L(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    Lt(this) ? ot(this).show() : ot(this).hide()
                })
            }
        }), ot.Tween = I, I.prototype = {
            constructor: I,
            init: function(e, t, n, i, r, o) {
                this.elem = e, this.prop = n, this.easing = r || ot.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (ot.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = I.propHooks[this.prop];
                return e && e.get ? e.get(this) : I.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = I.propHooks[this.prop];
                return this.pos = t = this.options.duration ? ot.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : I.propHooks._default.set(this), this
            }
        }, I.prototype.init.prototype = I.prototype, I.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ot.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
                },
                set: function(e) {
                    ot.fx.step[e.prop] ? ot.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ot.cssProps[e.prop]] && !ot.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ot.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, I.propHooks.scrollTop = I.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, ot.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, ot.fx = I.prototype.init, ot.fx.step = {};
        var on, sn, an = /^(?:toggle|show|hide)$/,
            ln = /queueHooks$/;
        ot.Animation = ot.extend(F, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return u(n.elem, e, At.exec(t), n), n
                    }]
                },
                tweener: function(e, t) {
                    ot.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(wt);
                    for (var n, i = 0, r = e.length; r > i; i++) n = e[i], F.tweeners[n] = F.tweeners[n] || [], F.tweeners[n].unshift(t)
                },
                prefilters: [H],
                prefilter: function(e, t) {
                    t ? F.prefilters.unshift(e) : F.prefilters.push(e)
                }
            }), ot.speed = function(e, t, n) {
                var i = e && "object" == typeof e ? ot.extend({}, e) : {
                    complete: n || !n && t || ot.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !ot.isFunction(t) && t
                };
                return i.duration = ot.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ot.fx.speeds ? ot.fx.speeds[i.duration] : ot.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    ot.isFunction(i.old) && i.old.call(this), i.queue && ot.dequeue(this, i.queue)
                }, i
            }, ot.fn.extend({
                fadeTo: function(e, t, n, i) {
                    return this.filter(Lt).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, i)
                },
                animate: function(e, t, n, i) {
                    var r = ot.isEmptyObject(e),
                        o = ot.speed(t, n, i),
                        s = function() {
                            var t = F(this, ot.extend({}, e), o);
                            (r || $t.get(this, "finish")) && t.stop(!0)
                        };
                    return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
                },
                stop: function(e, t, n) {
                    var i = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            r = null != e && e + "queueHooks",
                            o = ot.timers,
                            s = $t.get(this);
                        if (r) s[r] && s[r].stop && i(s[r]);
                        else
                            for (r in s) s[r] && s[r].stop && ln.test(r) && i(s[r]);
                        for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                        (t || !n) && ot.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return e !== !1 && (e = e || "fx"), this.each(function() {
                        var t, n = $t.get(this),
                            i = n[e + "queue"],
                            r = n[e + "queueHooks"],
                            o = ot.timers,
                            s = i ? i.length : 0;
                        for (n.finish = !0, ot.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; s > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), ot.each(["toggle", "show", "hide"], function(e, t) {
                var n = ot.fn[t];
                ot.fn[t] = function(e, i, r) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(q(t, !0), e, i, r)
                }
            }), ot.each({
                slideDown: q("show"),
                slideUp: q("hide"),
                slideToggle: q("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                ot.fn[e] = function(e, n, i) {
                    return this.animate(t, e, n, i)
                }
            }), ot.timers = [], ot.fx.tick = function() {
                var e, t = 0,
                    n = ot.timers;
                for (on = ot.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
                n.length || ot.fx.stop(), on = void 0
            }, ot.fx.timer = function(e) {
                ot.timers.push(e), e() ? ot.fx.start() : ot.timers.pop()
            }, ot.fx.interval = 13, ot.fx.start = function() {
                sn || (sn = e.setInterval(ot.fx.tick, ot.fx.interval))
            }, ot.fx.stop = function() {
                e.clearInterval(sn), sn = null
            }, ot.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, ot.fn.delay = function(t, n) {
                return t = ot.fx ? ot.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, i) {
                    var r = e.setTimeout(n, t);
                    i.stop = function() {
                        e.clearTimeout(r)
                    }
                })
            },
            function() {
                var e = Y.createElement("input"),
                    t = Y.createElement("select"),
                    n = t.appendChild(Y.createElement("option"));
                e.type = "checkbox", it.checkOn = "" !== e.value, it.optSelected = n.selected, t.disabled = !0, it.optDisabled = !n.disabled, e = Y.createElement("input"), e.value = "t", e.type = "radio", it.radioValue = "t" === e.value
            }();
        var un, cn = ot.expr.attrHandle;
        ot.fn.extend({
            attr: function(e, t) {
                return Ct(this, ot.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    ot.removeAttr(this, e)
                })
            }
        }), ot.extend({
            attr: function(e, t, n) {
                var i, r, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? ot.prop(e, t, n) : (1 === o && ot.isXMLDoc(e) || (t = t.toLowerCase(), r = ot.attrHooks[t] || (ot.expr.match.bool.test(t) ? un : void 0)), void 0 !== n ? null === n ? void ot.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = ot.find.attr(e, t), null == i ? void 0 : i))
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!it.radioValue && "radio" === t && ot.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, i, r = 0,
                    o = t && t.match(wt);
                if (o && 1 === e.nodeType)
                    for (; n = o[r++];) i = ot.propFix[n] || n, ot.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
            }
        }), un = {
            set: function(e, t, n) {
                return t === !1 ? ot.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, ot.each(ot.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = cn[t] || ot.find.attr;
            cn[t] = function(e, t, i) {
                var r, o;
                return i || (o = cn[t], cn[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, cn[t] = o), r
            }
        });
        var dn = /^(?:input|select|textarea|button)$/i,
            fn = /^(?:a|area)$/i;
        ot.fn.extend({
            prop: function(e, t) {
                return Ct(this, ot.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[ot.propFix[e] || e]
                })
            }
        }), ot.extend({
            prop: function(e, t, n) {
                var i, r, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ot.isXMLDoc(e) || (t = ot.propFix[t] || t, r = ot.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = ot.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : dn.test(e.nodeName) || fn.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }), it.optSelected || (ot.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            }
        }), ot.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            ot.propFix[this.toLowerCase()] = this
        });
        var pn = /[\t\r\n\f]/g;
        ot.fn.extend({
            addClass: function(e) {
                var t, n, i, r, o, s, a, l = 0;
                if (ot.isFunction(e)) return this.each(function(t) {
                    ot(this).addClass(e.call(this, t, M(this)))
                });
                if ("string" == typeof e && e)
                    for (t = e.match(wt) || []; n = this[l++];)
                        if (r = M(n), i = 1 === n.nodeType && (" " + r + " ").replace(pn, " ")) {
                            for (s = 0; o = t[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                            a = ot.trim(i), r !== a && n.setAttribute("class", a)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, i, r, o, s, a, l = 0;
                if (ot.isFunction(e)) return this.each(function(t) {
                    ot(this).removeClass(e.call(this, t, M(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof e && e)
                    for (t = e.match(wt) || []; n = this[l++];)
                        if (r = M(n), i = 1 === n.nodeType && (" " + r + " ").replace(pn, " ")) {
                            for (s = 0; o = t[s++];)
                                for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                            a = ot.trim(i), r !== a && n.setAttribute("class", a)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(ot.isFunction(e) ? function(n) {
                    ot(this).toggleClass(e.call(this, n, M(this), t), t)
                } : function() {
                    var t, i, r, o;
                    if ("string" === n)
                        for (i = 0, r = ot(this), o = e.match(wt) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                    else(void 0 === e || "boolean" === n) && (t = M(this), t && $t.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : $t.get(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, i = 0;
                for (t = " " + e + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + M(n) + " ").replace(pn, " ").indexOf(t) > -1) return !0;
                return !1
            }
        });
        var hn = /\r/g;
        ot.fn.extend({
            val: function(e) {
                var t, n, i, r = this[0]; {
                    if (arguments.length) return i = ot.isFunction(e), this.each(function(n) {
                        var r;
                        1 === this.nodeType && (r = i ? e.call(this, n, ot(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : ot.isArray(r) && (r = ot.map(r, function(e) {
                            return null == e ? "" : e + ""
                        })), t = ot.valHooks[this.type] || ot.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                    });
                    if (r) return t = ot.valHooks[r.type] || ot.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(hn, "") : null == n ? "" : n)
                }
            }
        }), ot.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        return ot.trim(e.value)
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, s = o ? null : [], a = o ? r + 1 : i.length, l = 0 > r ? a : o ? r : 0; a > l; l++)
                            if (n = i[l], !(!n.selected && l !== r || (it.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ot.nodeName(n.parentNode, "optgroup"))) {
                                if (t = ot(n).val(), o) return t;
                                s.push(t)
                            }
                        return s
                    },
                    set: function(e, t) {
                        for (var n, i, r = e.options, o = ot.makeArray(t), s = r.length; s--;) i = r[s], (i.selected = ot.inArray(ot.valHooks.option.get(i), o) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), o
                    }
                }
            }
        }), ot.each(["radio", "checkbox"], function() {
            ot.valHooks[this] = {
                set: function(e, t) {
                    return ot.isArray(t) ? e.checked = ot.inArray(ot(e).val(), t) > -1 : void 0
                }
            }, it.checkOn || (ot.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var gn = /^(?:focusinfocus|focusoutblur)$/;
        ot.extend(ot.event, {
            trigger: function(t, n, i, r) {
                var o, s, a, l, u, c, d, f = [i || Y],
                    p = nt.call(t, "type") ? t.type : t,
                    h = nt.call(t, "namespace") ? t.namespace.split(".") : [];
                if (s = a = i = i || Y, 3 !== i.nodeType && 8 !== i.nodeType && !gn.test(p + ot.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), u = p.indexOf(":") < 0 && "on" + p, t = t[ot.expando] ? t : new ot.Event(p, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : ot.makeArray(n, [t]), d = ot.event.special[p] || {}, r || !d.trigger || d.trigger.apply(i, n) !== !1)) {
                    if (!r && !d.noBubble && !ot.isWindow(i)) {
                        for (l = d.delegateType || p, gn.test(l + p) || (s = s.parentNode); s; s = s.parentNode) f.push(s), a = s;
                        a === (i.ownerDocument || Y) && f.push(a.defaultView || a.parentWindow || e)
                    }
                    for (o = 0;
                        (s = f[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? l : d.bindType || p, c = ($t.get(s, "events") || {})[t.type] && $t.get(s, "handle"), c && c.apply(s, n), c = u && s[u], c && c.apply && kt(s) && (t.result = c.apply(s, n), t.result === !1 && t.preventDefault());
                    return t.type = p, r || t.isDefaultPrevented() || d._default && d._default.apply(f.pop(), n) !== !1 || !kt(i) || u && ot.isFunction(i[p]) && !ot.isWindow(i) && (a = i[u], a && (i[u] = null), ot.event.triggered = p, i[p](), ot.event.triggered = void 0, a && (i[u] = a)), t.result
                }
            },
            simulate: function(e, t, n) {
                var i = ot.extend(new ot.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                ot.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault()
            }
        }), ot.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    ot.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                return n ? ot.event.trigger(e, t, n, !0) : void 0
            }
        }), ot.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            ot.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), ot.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), it.focusin = "onfocusin" in e, it.focusin || ot.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                ot.event.simulate(t, e.target, ot.event.fix(e))
            };
            ot.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        r = $t.access(i, t);
                    r || i.addEventListener(e, n, !0), $t.access(i, t, (r || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        r = $t.access(i, t) - 1;
                    r ? $t.access(i, t, r) : (i.removeEventListener(e, n, !0), $t.remove(i, t))
                }
            }
        });
        var mn = e.location,
            vn = ot.now(),
            yn = /\?/;
        ot.parseJSON = function(e) {
            return JSON.parse(e + "")
        }, ot.parseXML = function(t) {
            var n;
            if (!t || "string" != typeof t) return null;
            try {
                n = (new e.DOMParser).parseFromString(t, "text/xml")
            } catch (i) {
                n = void 0
            }
            return (!n || n.getElementsByTagName("parsererror").length) && ot.error("Invalid XML: " + t), n
        };
        var bn = /#.*$/,
            xn = /([?&])_=[^&]*/,
            wn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Tn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Cn = /^(?:GET|HEAD)$/,
            kn = /^\/\//,
            $n = {},
            En = {},
            Sn = "*/".concat("*"),
            Nn = Y.createElement("a");
        Nn.href = mn.href, ot.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: mn.href,
                type: "GET",
                isLocal: Tn.test(mn.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Sn,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": ot.parseJSON,
                    "text xml": ot.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? _(_(e, ot.ajaxSettings), t) : _(ot.ajaxSettings, e)
            },
            ajaxPrefilter: W($n),
            ajaxTransport: W(En),
            ajax: function(t, n) {
                function i(t, n, i, a) {
                    var u, d, y, b, w, C = n;
                    2 !== x && (x = 2, l && e.clearTimeout(l), r = void 0, s = a || "", T.readyState = t > 0 ? 4 : 0, u = t >= 200 && 300 > t || 304 === t, i && (b = U(f, T, i)), b = z(f, b, T, u), u ? (f.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (ot.lastModified[o] = w), w = T.getResponseHeader("etag"), w && (ot.etag[o] = w)), 204 === t || "HEAD" === f.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, d = b.data, y = b.error, u = !y)) : (y = C, (t || !C) && (C = "error", 0 > t && (t = 0))), T.status = t, T.statusText = (n || C) + "", u ? g.resolveWith(p, [d, C, T]) : g.rejectWith(p, [T, C, y]), T.statusCode(v), v = void 0, c && h.trigger(u ? "ajaxSuccess" : "ajaxError", [T, f, u ? d : y]), m.fireWith(p, [T, C]), c && (h.trigger("ajaxComplete", [T, f]), --ot.active || ot.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (n = t, t = void 0), n = n || {};
                var r, o, s, a, l, u, c, d, f = ot.ajaxSetup({}, n),
                    p = f.context || f,
                    h = f.context && (p.nodeType || p.jquery) ? ot(p) : ot.event,
                    g = ot.Deferred(),
                    m = ot.Callbacks("once memory"),
                    v = f.statusCode || {},
                    y = {},
                    b = {},
                    x = 0,
                    w = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === x) {
                                if (!a)
                                    for (a = {}; t = wn.exec(s);) a[t[1].toLowerCase()] = t[2];
                                t = a[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === x ? s : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return x || (e = b[n] = b[n] || e, y[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return x || (f.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (2 > x)
                                    for (t in e) v[t] = [v[t], e[t]];
                                else T.always(e[T.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || w;
                            return r && r.abort(t), i(0, t), this
                        }
                    };
                if (g.promise(T).complete = m.add, T.success = T.done, T.error = T.fail, f.url = ((t || f.url || mn.href) + "").replace(bn, "").replace(kn, mn.protocol + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = ot.trim(f.dataType || "*").toLowerCase().match(wt) || [""], null == f.crossDomain) {
                    u = Y.createElement("a");
                    try {
                        u.href = f.url, u.href = u.href, f.crossDomain = Nn.protocol + "//" + Nn.host != u.protocol + "//" + u.host
                    } catch (C) {
                        f.crossDomain = !0
                    }
                }
                if (f.data && f.processData && "string" != typeof f.data && (f.data = ot.param(f.data, f.traditional)), B($n, f, n, T), 2 === x) return T;
                c = ot.event && f.global, c && 0 === ot.active++ && ot.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Cn.test(f.type), o = f.url, f.hasContent || (f.data && (o = f.url += (yn.test(o) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = xn.test(o) ? o.replace(xn, "$1_=" + vn++) : o + (yn.test(o) ? "&" : "?") + "_=" + vn++)), f.ifModified && (ot.lastModified[o] && T.setRequestHeader("If-Modified-Since", ot.lastModified[o]), ot.etag[o] && T.setRequestHeader("If-None-Match", ot.etag[o])), (f.data && f.hasContent && f.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", f.contentType), T.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Sn + "; q=0.01" : "") : f.accepts["*"]);
                for (d in f.headers) T.setRequestHeader(d, f.headers[d]);
                if (f.beforeSend && (f.beforeSend.call(p, T, f) === !1 || 2 === x)) return T.abort();
                w = "abort";
                for (d in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) T[d](f[d]);
                if (r = B(En, f, n, T)) {
                    if (T.readyState = 1, c && h.trigger("ajaxSend", [T, f]), 2 === x) return T;
                    f.async && f.timeout > 0 && (l = e.setTimeout(function() {
                        T.abort("timeout")
                    }, f.timeout));
                    try {
                        x = 1, r.send(y, i)
                    } catch (C) {
                        if (!(2 > x)) throw C;
                        i(-1, C)
                    }
                } else i(-1, "No Transport");
                return T
            },
            getJSON: function(e, t, n) {
                return ot.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return ot.get(e, void 0, t, "script")
            }
        }), ot.each(["get", "post"], function(e, t) {
            ot[t] = function(e, n, i, r) {
                return ot.isFunction(n) && (r = r || i, i = n, n = void 0), ot.ajax(ot.extend({
                    url: e,
                    type: t,
                    dataType: r,
                    data: n,
                    success: i
                }, ot.isPlainObject(e) && e))
            }
        }), ot._evalUrl = function(e) {
            return ot.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, ot.fn.extend({
            wrapAll: function(e) {
                var t;
                return ot.isFunction(e) ? this.each(function(t) {
                    ot(this).wrapAll(e.call(this, t))
                }) : (this[0] && (t = ot(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this)
            },
            wrapInner: function(e) {
                return this.each(ot.isFunction(e) ? function(t) {
                    ot(this).wrapInner(e.call(this, t))
                } : function() {
                    var t = ot(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = ot.isFunction(e);
                return this.each(function(n) {
                    ot(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    ot.nodeName(this, "body") || ot(this).replaceWith(this.childNodes)
                }).end()
            }
        }), ot.expr.filters.hidden = function(e) {
            return !ot.expr.filters.visible(e)
        }, ot.expr.filters.visible = function(e) {
            return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
        };
        var Dn = /%20/g,
            An = /\[\]$/,
            jn = /\r?\n/g,
            Ln = /^(?:submit|button|image|reset|file)$/i,
            In = /^(?:input|select|textarea|keygen)/i;
        ot.param = function(e, t) {
            var n, i = [],
                r = function(e, t) {
                    t = ot.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (void 0 === t && (t = ot.ajaxSettings && ot.ajaxSettings.traditional), ot.isArray(e) || e.jquery && !ot.isPlainObject(e)) ot.each(e, function() {
                r(this.name, this.value)
            });
            else
                for (n in e) X(n, e[n], t, r);
            return i.join("&").replace(Dn, "+")
        }, ot.fn.extend({
            serialize: function() {
                return ot.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = ot.prop(this, "elements");
                    return e ? ot.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !ot(this).is(":disabled") && In.test(this.nodeName) && !Ln.test(e) && (this.checked || !It.test(e))
                }).map(function(e, t) {
                    var n = ot(this).val();
                    return null == n ? null : ot.isArray(n) ? ot.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(jn, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(jn, "\r\n")
                    }
                }).get()
            }
        }), ot.ajaxSettings.xhr = function() {
            try {
                return new e.XMLHttpRequest
            } catch (t) {}
        };
        var On = {
                0: 200,
                1223: 204
            },
            qn = ot.ajaxSettings.xhr();
        it.cors = !!qn && "withCredentials" in qn, it.ajax = qn = !!qn, ot.ajaxTransport(function(t) {
            var n, i;
            return it.cors || qn && !t.crossDomain ? {
                send: function(r, o) {
                    var s, a = t.xhr();
                    if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (s in t.xhrFields) a[s] = t.xhrFields[s];
                    t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (s in r) a.setRequestHeader(s, r[s]);
                    n = function(e) {
                        return function() {
                            n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(On[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                        4 === a.readyState && e.setTimeout(function() {
                            n && i()
                        })
                    }, n = n("abort");
                    try {
                        a.send(t.hasContent && t.data || null)
                    } catch (l) {
                        if (n) throw l
                    }
                },
                abort: function() {
                    n && n()
                }
            } : void 0
        }), ot.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return ot.globalEval(e), e
                }
            }
        }), ot.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), ot.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function(i, r) {
                        t = ot("<script>").prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                        }), Y.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
        var Rn = [],
            Hn = /(=)\?(?=&|$)|\?\?/;
        ot.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Rn.pop() || ot.expando + "_" + vn++;
                return this[e] = !0, e
            }
        }), ot.ajaxPrefilter("json jsonp", function(t, n, i) {
            var r, o, s, a = t.jsonp !== !1 && (Hn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Hn.test(t.data) && "data");
            return a || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = ot.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Hn, "$1" + r) : t.jsonp !== !1 && (t.url += (yn.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
                return s || ot.error(r + " was not called"), s[0]
            }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
                s = arguments
            }, i.always(function() {
                void 0 === o ? ot(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, Rn.push(r)), s && ot.isFunction(o) && o(s[0]), s = o = void 0
            }), "script") : void 0
        }), it.createHTMLDocument = function() {
            var e = Y.implementation.createHTMLDocument("").body;
            return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
        }(), ot.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || (it.createHTMLDocument ? Y.implementation.createHTMLDocument("") : Y);
            var i = ht.exec(e),
                r = !n && [];
            return i ? [t.createElement(i[1])] : (i = f([e], t, r), r && r.length && ot(r).remove(), ot.merge([], i.childNodes))
        };
        var Pn = ot.fn.load;
        ot.fn.load = function(e, t, n) {
            if ("string" != typeof e && Pn) return Pn.apply(this, arguments);
            var i, r, o, s = this,
                a = e.indexOf(" ");
            return a > -1 && (i = ot.trim(e.slice(a)), e = e.slice(0, a)), ot.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && ot.ajax({
                url: e,
                type: r || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                o = arguments, s.html(i ? ot("<div>").append(ot.parseHTML(e)).find(i) : e)
            }).always(n && function(e, t) {
                s.each(function() {
                    n.apply(s, o || [e.responseText, t, e])
                })
            }), this
        }, ot.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            ot.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), ot.expr.filters.animated = function(e) {
            return ot.grep(ot.timers, function(t) {
                return e === t.elem
            }).length
        }, ot.offset = {
            setOffset: function(e, t, n) {
                var i, r, o, s, a, l, u, c = ot.css(e, "position"),
                    d = ot(e),
                    f = {};
                "static" === c && (e.style.position = "relative"), a = d.offset(), o = ot.css(e, "top"), l = ot.css(e, "left"), u = ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1, u ? (i = d.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), ot.isFunction(t) && (t = t.call(e, n, ot.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + r), "using" in t ? t.using.call(e, f) : d.css(f)
            }
        }, ot.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                    ot.offset.setOffset(this, e, t)
                });
                var t, n, i = this[0],
                    r = {
                        top: 0,
                        left: 0
                    },
                    o = i && i.ownerDocument;
                if (o) return t = o.documentElement, ot.contains(t, i) ? (r = i.getBoundingClientRect(), n = V(o), {
                    top: r.top + n.pageYOffset - t.clientTop,
                    left: r.left + n.pageXOffset - t.clientLeft
                }) : r
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === ot.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ot.nodeName(e[0], "html") || (i = e.offset()), i.top += ot.css(e[0], "borderTopWidth", !0), i.left += ot.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - i.top - ot.css(n, "marginTop", !0),
                        left: t.left - i.left - ot.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && "static" === ot.css(e, "position");) e = e.offsetParent;
                    return e || Jt
                })
            }
        }), ot.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = "pageYOffset" === t;
            ot.fn[e] = function(i) {
                return Ct(this, function(e, i, r) {
                    var o = V(e);
                    return void 0 === r ? o ? o[t] : e[i] : void(o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r)
                }, e, i, arguments.length)
            }
        }), ot.each(["top", "left"], function(e, t) {
            ot.cssHooks[t] = S(it.pixelPosition, function(e, n) {
                return n ? (n = E(e, t), Yt.test(n) ? ot(e).position()[t] + "px" : n) : void 0
            })
        }), ot.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            ot.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, i) {
                ot.fn[i] = function(i, r) {
                    var o = arguments.length && (n || "boolean" != typeof i),
                        s = n || (i === !0 || r === !0 ? "margin" : "border");
                    return Ct(this, function(t, n, i) {
                        var r;
                        return ot.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? ot.css(t, n, s) : ot.style(t, n, i, s)
                    }, t, o ? i : void 0, o, null)
                }
            })
        }), ot.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            size: function() {
                return this.length
            }
        }), ot.fn.andSelf = ot.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return ot
        });
        var Fn = e.jQuery,
            Mn = e.$;
        return ot.noConflict = function(t) {
            return e.$ === ot && (e.$ = Mn), t && e.jQuery === ot && (e.jQuery = Fn), ot
        }, t || (e.jQuery = e.$ = ot), ot
    }), + function(e) {
        "use strict";

        function t(t) {
            return this.each(function() {
                var i = e(this),
                    r = i.data("bs.affix"),
                    o = "object" == typeof t && t;
                r || i.data("bs.affix", r = new n(this, o)), "string" == typeof t && r[t]()
            })
        }
        var n = function(t, i) {
            this.options = e.extend({}, n.DEFAULTS, i), this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
        };
        n.VERSION = "3.3.6", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
            offset: 0,
            target: window
        }, n.prototype.getState = function(e, t, n, i) {
            var r = this.$target.scrollTop(),
                o = this.$element.offset(),
                s = this.$target.height();
            if (null != n && "top" == this.affixed) return n > r ? "top" : !1;
            if ("bottom" == this.affixed) return null != n ? r + this.unpin <= o.top ? !1 : "bottom" : e - i >= r + s ? !1 : "bottom";
            var a = null == this.affixed,
                l = a ? r : o.top,
                u = a ? s : t;
            return null != n && n >= r ? "top" : null != i && l + u >= e - i ? "bottom" : !1
        }, n.prototype.getPinnedOffset = function() {
            if (this.pinnedOffset) return this.pinnedOffset;
            this.$element.removeClass(n.RESET).addClass("affix");
            var e = this.$target.scrollTop(),
                t = this.$element.offset();
            return this.pinnedOffset = t.top - e
        }, n.prototype.checkPositionWithEventLoop = function() {
            setTimeout(e.proxy(this.checkPosition, this), 1)
        }, n.prototype.checkPosition = function() {
            if (this.$element.is(":visible")) {
                var t = this.$element.height(),
                    i = this.options.offset,
                    r = i.top,
                    o = i.bottom,
                    s = Math.max(e(document).height(), e(document.body).height());
                "object" != typeof i && (o = r = i), "function" == typeof r && (r = i.top(this.$element)), "function" == typeof o && (o = i.bottom(this.$element));
                var a = this.getState(s, t, r, o);
                if (this.affixed != a) {
                    null != this.unpin && this.$element.css("top", "");
                    var l = "affix" + (a ? "-" + a : ""),
                        u = e.Event(l + ".bs.affix");
                    if (this.$element.trigger(u), u.isDefaultPrevented()) return;
                    this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
                }
                "bottom" == a && this.$element.offset({
                    top: s - t - o
                })
            }
        };
        var i = e.fn.affix;
        e.fn.affix = t, e.fn.affix.Constructor = n, e.fn.affix.noConflict = function() {
            return e.fn.affix = i, this
        }, e(window).on("load", function() {
            e('[data-spy="affix"]').each(function() {
                var n = e(this),
                    i = n.data();
                i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), t.call(n, i)
            })
        })
    }(jQuery), + function(e) {
        "use strict";

        function t(t) {
            return this.each(function() {
                var i = e(this),
                    r = i.data("bs.carousel"),
                    o = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t),
                    s = "string" == typeof t ? t : o.slide;
                r || i.data("bs.carousel", r = new n(this, o)), "number" == typeof t ? r.to(t) : s ? r[s]() : o.interval && r.pause().cycle()
            })
        }
        var n = function(t, n) {
            this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", e.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", e.proxy(this.pause, this)).on("mouseleave.bs.carousel", e.proxy(this.cycle, this))
        };
        n.VERSION = "3.3.6", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
            interval: 5e3,
            pause: "hover",
            wrap: !0,
            keyboard: !0
        }, n.prototype.keydown = function(e) {
            if (!/input|textarea/i.test(e.target.tagName)) {
                switch (e.which) {
                    case 37:
                        this.prev();
                        break;
                    case 39:
                        this.next();
                        break;
                    default:
                        return
                }
                e.preventDefault()
            }
        }, n.prototype.cycle = function(t) {
            return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
        }, n.prototype.getItemIndex = function(e) {
            return this.$items = e.parent().children(".item"), this.$items.index(e || this.$active)
        }, n.prototype.getItemForDirection = function(e, t) {
            var n = this.getItemIndex(t),
                i = "prev" == e && 0 === n || "next" == e && n == this.$items.length - 1;
            if (i && !this.options.wrap) return t;
            var r = "prev" == e ? -1 : 1,
                o = (n + r) % this.$items.length;
            return this.$items.eq(o)
        }, n.prototype.to = function(e) {
            var t = this,
                n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
            return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
                t.to(e)
            }) : n == e ? this.pause().cycle() : this.slide(e > n ? "next" : "prev", this.$items.eq(e))
        }, n.prototype.pause = function(t) {
            return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
        }, n.prototype.next = function() {
            return this.sliding ? void 0 : this.slide("next")
        }, n.prototype.prev = function() {
            return this.sliding ? void 0 : this.slide("prev")
        }, n.prototype.slide = function(t, i) {
            var r = this.$element.find(".item.active"),
                o = i || this.getItemForDirection(t, r),
                s = this.interval,
                a = "next" == t ? "left" : "right",
                l = this;
            if (o.hasClass("active")) return this.sliding = !1;
            var u = o[0],
                c = e.Event("slide.bs.carousel", {
                    relatedTarget: u,
                    direction: a
                });
            if (this.$element.trigger(c), !c.isDefaultPrevented()) {
                if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                    this.$indicators.find(".active").removeClass("active");
                    var d = e(this.$indicators.children()[this.getItemIndex(o)]);
                    d && d.addClass("active")
                }
                var f = e.Event("slid.bs.carousel", {
                    relatedTarget: u,
                    direction: a
                });
                return e.support.transition && this.$element.hasClass("slide") ? (o.addClass(t), o[0].offsetWidth, r.addClass(a), o.addClass(a), r.one("bsTransitionEnd", function() {
                    o.removeClass([t, a].join(" ")).addClass("active"), r.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function() {
                        l.$element.trigger(f)
                    }, 0)
                }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (r.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(f)), s && this.cycle(), this
            }
        };
        var i = e.fn.carousel;
        e.fn.carousel = t, e.fn.carousel.Constructor = n, e.fn.carousel.noConflict = function() {
            return e.fn.carousel = i, this
        };
        var r = function(n) {
            var i, r = e(this),
                o = e(r.attr("data-target") || (i = r.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
            if (o.hasClass("carousel")) {
                var s = e.extend({}, o.data(), r.data()),
                    a = r.attr("data-slide-to");
                a && (s.interval = !1), t.call(o, s), a && o.data("bs.carousel").to(a), n.preventDefault()
            }
        };
        e(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r), e(window).on("load", function() {
            e('[data-ride="carousel"]').each(function() {
                var n = e(this);
                t.call(n, n.data())
            })
        })
    }(jQuery), + function(e) {
        "use strict";

        function t(t) {
            return this.each(function() {
                var i = e(this),
                    r = i.data("bs.tab");
                r || i.data("bs.tab", r = new n(this)), "string" == typeof t && r[t]()
            })
        }
        var n = function(t) {
            this.element = e(t)
        };
        n.VERSION = "3.3.6", n.TRANSITION_DURATION = 150, n.prototype.show = function() {
            var t = this.element,
                n = t.closest("ul:not(.dropdown-menu)"),
                i = t.data("target");
            if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
                var r = n.find(".active:last a"),
                    o = e.Event("hide.bs.tab", {
                        relatedTarget: t[0]
                    }),
                    s = e.Event("show.bs.tab", {
                        relatedTarget: r[0]
                    });
                if (r.trigger(o), t.trigger(s), !s.isDefaultPrevented() && !o.isDefaultPrevented()) {
                    var a = e(i);
                    this.activate(t.closest("li"), n), this.activate(a, a.parent(), function() {
                        r.trigger({
                            type: "hidden.bs.tab",
                            relatedTarget: t[0]
                        }), t.trigger({
                            type: "shown.bs.tab",
                            relatedTarget: r[0]
                        })
                    })
                }
            }
        }, n.prototype.activate = function(t, i, r) {
            function o() {
                s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), r && r()
            }
            var s = i.find("> .active"),
                a = r && e.support.transition && (s.length && s.hasClass("fade") || !!i.find("> .fade").length);
            s.length && a ? s.one("bsTransitionEnd", o).emulateTransitionEnd(n.TRANSITION_DURATION) : o(), s.removeClass("in")
        };
        var i = e.fn.tab;
        e.fn.tab = t, e.fn.tab.Constructor = n, e.fn.tab.noConflict = function() {
            return e.fn.tab = i, this
        };
        var r = function(n) {
            n.preventDefault(), t.call(e(this), "show")
        };
        e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', r).on("click.bs.tab.data-api", '[data-toggle="pill"]', r)
    }(jQuery), + function(e) {
        "use strict";

        function t() {
            var e = document.createElement("bootstrap"),
                t = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var n in t)
                if (void 0 !== e.style[n]) return {
                    end: t[n]
                };
            return !1
        }
        e.fn.emulateTransitionEnd = function(t) {
            var n = !1,
                i = this;
            e(this).one("bsTransitionEnd", function() {
                n = !0
            });
            var r = function() {
                n || e(i).trigger(e.support.transition.end)
            };
            return setTimeout(r, t), this
        }, e(function() {
            e.support.transition = t(), e.support.transition && (e.event.special.bsTransitionEnd = {
                bindType: e.support.transition.end,
                delegateType: e.support.transition.end,
                handle: function(t) {
                    return e(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : void 0
                }
            })
        })
    }(jQuery), + function(e) {
        "use strict";

        function t(t) {
            var n, i = t.attr("data-target") || (n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
            return e(i)
        }

        function n(t) {
            return this.each(function() {
                var n = e(this),
                    r = n.data("bs.collapse"),
                    o = e.extend({}, i.DEFAULTS, n.data(), "object" == typeof t && t);
                !r && o.toggle && /show|hide/.test(t) && (o.toggle = !1), r || n.data("bs.collapse", r = new i(this, o)), "string" == typeof t && r[t]()
            })
        }
        var i = function(t, n) {
            this.$element = e(t), this.options = e.extend({}, i.DEFAULTS, n), this.$trigger = e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
        };
        i.VERSION = "3.3.6", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
            toggle: !0
        }, i.prototype.dimension = function() {
            var e = this.$element.hasClass("width");
            return e ? "width" : "height"
        }, i.prototype.show = function() {
            if (!this.transitioning && !this.$element.hasClass("in")) {
                var t, r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                if (!(r && r.length && (t = r.data("bs.collapse"), t && t.transitioning))) {
                    var o = e.Event("show.bs.collapse");
                    if (this.$element.trigger(o), !o.isDefaultPrevented()) {
                        r && r.length && (n.call(r, "hide"), t || r.data("bs.collapse", null));
                        var s = this.dimension();
                        this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                        var a = function() {
                            this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                        };
                        if (!e.support.transition) return a.call(this);
                        var l = e.camelCase(["scroll", s].join("-"));
                        this.$element.one("bsTransitionEnd", e.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[s](this.$element[0][l])
                    }
                }
            }
        }, i.prototype.hide = function() {
            if (!this.transitioning && this.$element.hasClass("in")) {
                var t = e.Event("hide.bs.collapse");
                if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                    var n = this.dimension();
                    this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                    var r = function() {
                        this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                    };
                    return e.support.transition ? void this.$element[n](0).one("bsTransitionEnd", e.proxy(r, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : r.call(this)
                }
            }
        }, i.prototype.toggle = function() {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }, i.prototype.getParent = function() {
            return e(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(e.proxy(function(n, i) {
                var r = e(i);
                this.addAriaAndCollapsedClass(t(r), r)
            }, this)).end()
        }, i.prototype.addAriaAndCollapsedClass = function(e, t) {
            var n = e.hasClass("in");
            e.attr("aria-expanded", n), t.toggleClass("collapsed", !n).attr("aria-expanded", n)
        };
        var r = e.fn.collapse;
        e.fn.collapse = n, e.fn.collapse.Constructor = i, e.fn.collapse.noConflict = function() {
            return e.fn.collapse = r, this
        }, e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
            var r = e(this);
            r.attr("data-target") || i.preventDefault();
            var o = t(r),
                s = o.data("bs.collapse"),
                a = s ? "toggle" : r.data();
            n.call(o, a)
        })
    }(jQuery), + function(e) {
        "use strict";

        function t(t, i) {
            return this.each(function() {
                var r = e(this),
                    o = r.data("bs.modal"),
                    s = e.extend({}, n.DEFAULTS, r.data(), "object" == typeof t && t);
                o || r.data("bs.modal", o = new n(this, s)), "string" == typeof t ? o[t](i) : s.show && o.show(i)
            })
        }
        var n = function(t, n) {
            this.options = n, this.$body = e(document.body), this.$element = e(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        };
        n.VERSION = "3.3.6", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        }, n.prototype.toggle = function(e) {
            return this.isShown ? this.hide() : this.show(e)
        }, n.prototype.show = function(t) {
            var i = this,
                r = e.Event("show.bs.modal", {
                    relatedTarget: t
                });
            this.$element.trigger(r), this.isShown || r.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
                i.$element.one("mouseup.dismiss.bs.modal", function(t) {
                    e(t.target).is(i.$element) && (i.ignoreBackdropClick = !0)
                })
            }), this.backdrop(function() {
                var r = e.support.transition && i.$element.hasClass("fade");
                i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), r && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
                var o = e.Event("shown.bs.modal", {
                    relatedTarget: t
                });
                r ? i.$dialog.one("bsTransitionEnd", function() {
                    i.$element.trigger("focus").trigger(o)
                }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(o)
            }))
        }, n.prototype.hide = function(t) {
            t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
        }, n.prototype.enforceFocus = function() {
            e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
                this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
            }, this))
        }, n.prototype.escape = function() {
            this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy(function(e) {
                27 == e.which && this.hide()
            }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
        }, n.prototype.resize = function() {
            this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off("resize.bs.modal")
        }, n.prototype.hideModal = function() {
            var e = this;
            this.$element.hide(), this.backdrop(function() {
                e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal")
            })
        }, n.prototype.removeBackdrop = function() {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        }, n.prototype.backdrop = function(t) {
            var i = this,
                r = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var o = e.support.transition && r;
                if (this.$backdrop = e(document.createElement("div")).addClass("modal-backdrop " + r).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", e.proxy(function(e) {
                        return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                    }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
                o ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : t()
            } else if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var s = function() {
                    i.removeBackdrop(), t && t()
                };
                e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : s()
            } else t && t()
        }, n.prototype.handleUpdate = function() {
            this.adjustDialog()
        }, n.prototype.adjustDialog = function() {
            var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
            this.$element.css({
                paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
                paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
            })
        }, n.prototype.resetAdjustments = function() {
            this.$element.css({
                paddingLeft: "",
                paddingRight: ""
            })
        }, n.prototype.checkScrollbar = function() {
            var e = window.innerWidth;
            if (!e) {
                var t = document.documentElement.getBoundingClientRect();
                e = t.right - Math.abs(t.left)
            }
            this.bodyIsOverflowing = document.body.clientWidth < e, this.scrollbarWidth = this.measureScrollbar()
        }, n.prototype.setScrollbar = function() {
            var e = parseInt(this.$body.css("padding-right") || 0, 10);
            this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
        }, n.prototype.resetScrollbar = function() {
            this.$body.css("padding-right", this.originalBodyPad)
        }, n.prototype.measureScrollbar = function() {
            var e = document.createElement("div");
            e.className = "modal-scrollbar-measure", this.$body.append(e);
            var t = e.offsetWidth - e.clientWidth;
            return this.$body[0].removeChild(e), t
        };
        var i = e.fn.modal;
        e.fn.modal = t, e.fn.modal.Constructor = n, e.fn.modal.noConflict = function() {
            return e.fn.modal = i, this
        }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
            var i = e(this),
                r = i.attr("href"),
                o = e(i.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")),
                s = o.data("bs.modal") ? "toggle" : e.extend({
                    remote: !/#/.test(r) && r
                }, o.data(), i.data());
            i.is("a") && n.preventDefault(), o.one("show.bs.modal", function(e) {
                e.isDefaultPrevented() || o.one("hidden.bs.modal", function() {
                    i.is(":visible") && i.trigger("focus")
                })
            }), t.call(o, s, this)
        })
    }(jQuery), $.expo = {
        velocity: 7,
        velocityMax: 20,
        accelerationFrequency: 50,
        acceleration: function(e, t) {
            return t + Math.min(this.velocityMax, Math.floor(e / this.accelerationFrequency))
        },
        interval: 1
    }, $(window).load(function() {
        $(document).on("click tap", ".expo-prev, .expo-next", function(e) {
            return e.preventDefault(), !1
        }), $(".expo").each(function(e, t) {
            $(t).css("display", "block");
            var n, i, r = $(t),
                o = r.find(".expo-viewport"),
                s = r.find(".expo-track"),
                a = r.find(".expo-prev"),
                l = r.find(".expo-next"),
                u = o.find(".expo-item:last"),
                c = u.offset().left + u.outerWidth(!0) - s.offset().left;
            o.css("max-width", c), a.on("mousedown touchstart", function() {
                var e = 0,
                    t = $.expo.velocity;
                n = setInterval(function() {
                    t = $.expo.acceleration(e++, t), s.scrollLeft(s.scrollLeft() - t)
                }, $.expo.interval)
            }).on("mouseup touchend mouseleave", function() {
                clearInterval(n)
            }), l.on("mousedown touchstart", function() {
                var e = 0,
                    t = $.expo.velocity;
                i = setInterval(function() {
                    t = $.expo.acceleration(e++, t), s.scrollLeft(s.scrollLeft() + t)
                }, $.expo.interval)
            }).on("mouseup touchend mouseleave", function() {
                clearInterval(i)
            })
        })
    }), $(document).ready(function() {
        if ($("#forum").length) {
            document.getElementById("loading-forum-txt").appendChild(document.createTextNode("Loading Forum ..."));
            var e = function() {
                var e = document.getElementById("loading");
                e.parentNode.removeChild(e)
            };
            document.getElementById("forum_embed").onload = e, document.getElementById("forum_embed").src = "https://groups.google.com/forum/embed/?place=forum/mobile-angular-ui-forum&showsearch=true&showpopout=true&showtabs=false&hideforumtitle=true&hidesubject=true&parenturl=" + encodeURIComponent(window.location.href)
        }
    }), $(document).ready(function() {
        var e = $(".github-count"),
            t = $(".twitter-count"),
            n = $(".google-plus-count");
        (e.length || t.length || n.length) && $.get("http://mobile-angular-ui-social.herokuapp.com/", function(i) {
            i.github && (e.text("" + i.github), e.addClass("loaded")), i.twitter && (t.text("" + i.twitter), t.addClass("loaded")), i.google && (n.text("" + i.google), n.addClass("loaded"))
        }), $("a").each(function() {
            var e = new RegExp("/" + window.location.host + "/");
            e.test(this.href) || $(this).attr("target", "_blank")
        });
        var i = $("#toc");
        if (i.length) {
            var r = i.parent(),
                o = $(".footer");
            $(window).resize(function() {
                i.width(r.width())
            }).trigger("resize"), i.affix({
                offset: {
                    top: i.offset().top,
                    bottom: function() {
                        return o.outerHeight(!0)
                    }
                }
            });
            var s = function(e) {
                    if (e = $(e), !e.length) return !1;
                    var t = $(window).scrollTop(),
                        n = e.offset().top;
                    return t + 100 > n ? !0 : !1
                },
                a = function() {
                    var e = [];
                    i.find("a").each(function() {
                        e.push({
                            tocItem: $(this),
                            header: $(this.hash)
                        })
                    });
                    for (var t = null, n = e.length - 1; n >= 0; n--) {
                        var r = e[n];
                        if (s(r.header)) {
                            t = r.tocItem;
                            break
                        }
                    }
                    i.find("li").removeClass("active"), t && t.parentsUntil("#toc", "li").addClass("active")
                };
            $(window).scroll(a), $(window).resize(a), $(window).trigger("scroll")
        }
        $('a[href*="#"]:not([href="#"]):not([data-slide])').click(function() {
            if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
                var e = this.href,
                    t = $(this.hash);
                if (t = t.length ? t : $("[name='" + this.hash.slice(1) + "']"), t.length) return $("html,body").animate({
                    scrollTop: t.offset().top - 70
                }, 500, function() {
                    window.location.href = e
                }), !1
            }
        }), $("#docs-contents, #page-contents").find("h2,h3,h4,h5,h6").each(function() {
            var e = $(this),
                t = e.attr("id");
            t && e.wrap('<a href="#' + t + '" class="doc-anchor"></a>')
        });
        var l = function(e) {
                var t, n, i = '<div class="modal modal-example-code">  <div class="modal-dialog">    <div class="modal-content">      <div class="modal-header">        <button class="close"           data-dismiss="modal">&times;</button>        <h4 class="modal-title">' + e.title + '</h4>      </div>      <div class="modal-body">        <ul class="nav nav-tabs" role="tablist">';
                for (t = 0; t < e.tabs.length; t++) n = e.tabs[t], i += '<li class="' + (0 === t ? "active" : "") + '"><a href="#modal-example-code-tab-' + t + '">' + n.type.toUpperCase() + "</a></li>";
                for (i += '        </ul>        <div class="tab-content">', t = 0; t < e.tabs.length; t++) n = e.tabs[t], i += '<div role="tabpanel" class="tab-pane ' + (0 === t ? "active" : "") + '" id="modal-example-code-tab-' + t + '"><pre><code>' + n.code + "</code></pre></div>";
                return i += "        </div>      </div>    </div>  </div></div>"
            },
            u = function(e) {
                var t = $(l(e));
                $("body").append(t), t.find(".nav a").click(function(e) {
                    e.preventDefault(), $(this).tab("show")
                }), t.show(), t.modal(), t.on("hidden.bs.modal", function() {
                    t.remove()
                })
            },
            c = function(e) {
                $.get(e, {}, function(e) {
                    u(e)
                }, "json")
            };
        $("iframe.embedded-example").each(function() {
            var e = $(this);
            e.attr("height", "600px"), e.attr("width", "400px"), e.attr("seamless", "1"), e.attr("frameborder", "0"), e.wrap('<div class="embedded-example-container"></div>');
            var t = $('<a href="#" class="btn btn-xs btn-default btn-show-code"><i class="fa fa-code"></i> Code</a>');
            t.on("click", function(t) {
                return c(e.attr("src") + ".json"), t.preventDefault(), !1
            }), e.parent().append(t)
        })
    }), navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement("style");
    msViewportStyle.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}")), document.querySelector("head").appendChild(msViewportStyle)
}