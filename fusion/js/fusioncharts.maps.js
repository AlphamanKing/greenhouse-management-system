/*
 FusionCharts JavaScript Library - KDtree
 Copyright FusionCharts Technologies LLP
 License Information at <http://www.fusioncharts.com/license>

 @version 3.12.2
 FusionCharts JavaScript Library
 Copyright FusionCharts Technologies LLP
 License Information at <http://www.fusioncharts.com/license>

 @version 3.12.2
*/
(function (T) {
    "object" === typeof module && "undefined" !== typeof module.exports ? module.exports = T : T(FusionCharts)
})(function (T) {
    T.register("module", ["private", "modules.renderer.js-kdtree", function () {
        function q(h) {
            function m(h, p, z, q) {
                var I = {}, B;
                B = q ? "y" : "x";
                if (p === z) return I.point = h[p], I;
                if (1 === z - p) return h[p][B] > h[z][B] ? (I.point = h[p], I.left = {point: h[z]}) : (I.point = h[z], I.left = {point: h[p]}), I;
                B = p + z >> 1;
                q ? u(h, B, p, z) : J(h, B, p, z);
                I.point = h[B];
                I.left = m(h, p, B - 1, !q);
                I.right = m(h, B + 1, z, !q);
                return I
            }

            function J(h, m, z,
                       q) {
                for (var x, B, u, A, C; q > z;) {
                    600 < q - z && (x = q - z + 1, B = m - z + 1, u = D(x), A = .5 * H(2 * u / 3), C = .5 * N(u * A * (x - A) / x) * (0 > B - x / 2 ? -1 : 1), u = y(z, L(m - B * A / x + C)), x = E(q, L(m + (x - B) * A / x + C)), J(h, m, u, x));
                    x = h[m];
                    B = z;
                    A = q;
                    p(h, z, m);
                    for (h[q].x > x.x && p(h, z, q); B < A;) {
                        p(h, B, A);
                        B++;
                        for (A--; h[B].x < x.x;) B++;
                        for (; h[A].x > x.x;) A--
                    }
                    h[z].x === x.x ? p(h, z, A) : (A++, p(h, A, q));
                    A <= m && (z = A + 1);
                    m <= A && (q = A - 1)
                }
            }

            function u(h, m, z, x) {
                for (var q, B, J, A, C; x > z;) {
                    600 < x - z && (q = x - z + 1, B = m - z + 1, J = D(q), A = .5 * H(2 * J / 3), C = .5 * N(J * A * (q - A) / q) * (0 > B - q / 2 ? -1 : 1), J = y(z, L(m - B * A / q + C)), q = E(x, L(m + (q -
                        B) * A / q + C)), u(h, m, J, q));
                    q = h[m];
                    B = z;
                    A = x;
                    p(h, z, m);
                    for (h[x].y > q.y && p(h, z, x); B < A;) {
                        p(h, B, A);
                        B++;
                        for (A--; h[B].y < q.y;) B++;
                        for (; h[A].y > q.y;) A--
                    }
                    h[z].y === q.y ? p(h, z, A) : (A++, p(h, A, x));
                    A <= m && (z = A + 1);
                    m <= A && (x = A - 1)
                }
            }

            function p(h, m, z) {
                var q = h[m];
                h[m] = h[z];
                h[z] = q
            }

            var C = h && h[0] && h[0].r || 5, q, y = Math.max, L = Math.floor, N = Math.sqrt, E = Math.min,
                D = Math.log, H = Math.exp, G = Math.pow;
            h = h || [];
            for (q = h.length; q--;) h[q].r > C && (C = h[q].r), h[q].i = q, h[q].x = +h[q].x, h[q].y = +h[q].y;
            return {
                tree: 0 === h.length ? {} : m(h, 0, h.length - 1, !1), search: function (h,
                                                                                         m, z) {
                    function q(a, b) {
                        return "circle" === z ? N(G(a - h, 2) + G(b - m, 2)) <= y : a >= y && a <= E && b >= D && b <= H
                    }

                    function x(a) {
                        var c = h >= a.x1 && h <= a.x2 && m >= a.y1 && m <= a.y2, d;
                        d = a.point.y;
                        d = N(G(h - a.point.x, 2) + G(m - d, 2));
                        P ? c ? e ? a.point.i > P.point.i && (P = a, e = c, b = d) : (P = a, e = c, b = d) : !e && d < b && (P = a, e = c, b = d) : (P = a, e = c, b = d)
                    }

                    function p(a) {
                        "circle" === z ? y = a : (y = h - a || 0, E = h + a || 0, D = m - a || 0, H = m + a || 0)
                    }

                    function J(a) {
                        a && a.point && (p(a.point.r), q(a.point.x, a.point.y) && x(a), y <= a.point.x && u(a.left), E >= a.point.x && u(a.right))
                    }

                    function u(a) {
                        a && a.point && (p(a.point.r),
                        q(a.point.x, a.point.y) && x(a), D <= a.point.y && J(a.left), H >= a.point.y && J(a.right))
                    }

                    var P, y = h - C, E = h + C, D = m - C, H = m + C, e = !1, b = 0;
                    J(this.tree);
                    return P && P.point || P
                }
            }
        }

        function R(h) {
            this.configure(h)
        }

        var u = this.hcLib, S = function (h, m, q, u, p) {
                return Math.pow(q - h, 2) + Math.pow(u - m, 2) <= Math.pow(p, 2)
            }, T = Math.PI, U = Math.cos, h = Math.sin, Q = Math.max, y = Math.min, X = T / 180,
            m = function (h, m, q, u, p, C) {
                return q <= Q(h, p) && q >= y(h, p) && u <= Q(m, C) && u >= y(m, C) ? !0 : !1
            }, W = function (h, m, q, u, p, C) {
                m = (u - m) * (p - q);
                h = (q - h) * (C - u);
                isNaN(m) && (m = 0);
                isNaN(h) &&
                (h = 0);
                h = m - h;
                return 0 === h ? 0 : 0 < h ? 1 : 2
            };
        R.prototype = {
            configure: function (h) {
                this.validatorFn = h ? this.shapeValidator() : this.defaultValidator()
            }, defaultValidator: function () {
                var h = this;
                return function (m) {
                    var q = h.mousePoint;
                    return m && 1 >= Math.pow((m.x - q.x) / h.xLimit, 2) + Math.pow((m.y - q.y) / h.yLimit, 2) ? !0 : !1
                }
            }, shapeValidator: function () {
                var q = this;
                return function (x) {
                    var u = q.mousePoint, y = x && x.shapeInfo, p = !1, C, O = u.x, u = u.y, M;
                    switch (y && y.type) {
                        case "circle":
                            C = y.radius;
                            p = S(O, u, x.x, x.y, C);
                            break;
                        case "arc":
                            p = y.innerradius;
                            C = y.radius;
                            p = !S(O, u, x.x, x.y, p) && S(O, u, x.x, x.y, C);
                            break;
                        case "polygon":
                            C = y.radius;
                            M = y.startAngle;
                            y = y.sides;
                            a:{
                                p = x.x;
                                x = x.y;
                                var L, N = 0, E, D, H, G, R;
                                L = !1;
                                if (S(O, u, p, x, C) && 3 <= y) {
                                    L = void 0 === M ? .5 * T : M % 360 * X;
                                    R = 2 * T / y;
                                    E = p + C * U(-L);
                                    G = x + C * h(-L);
                                    for (M = 0; M < y; M++) {
                                        L += R;
                                        D = p + C * U(-L);
                                        H = x + C * h(-L);
                                        var Q = E, V = G, Y = D, I = H, B = O, Z = u, A = u, K = W(Q, V, Y, I, B, Z),
                                            ca = W(Q, V, Y, I, Infinity, A), ea = W(B, Z, Infinity, A, Q, V),
                                            da = W(B, Z, Infinity, A, Y, I);
                                        if (K !== ca && ea !== da || 0 === K && m(Q, V, B, Z, Y, I) || 0 === ca && m(Q, V, Infinity, A, Y, I) || 0 === ea && m(B, Z, Q, V, Infinity, A) ||
                                            0 === da && m(B, Z, Y, I, Infinity, A)) {
                                            if (0 === W(E, G, O, u, D, H)) {
                                                p = m(E, G, O, u, D, H);
                                                break a
                                            }
                                            N++
                                        }
                                        E = D;
                                        G = H
                                    }
                                    L = 0 !== N % 2
                                }
                                p = L
                            }
                            break;
                        case "rect":
                            p = x.x;
                            C = x.y;
                            x = p + (y.width || 0);
                            y = C + (y.height || 0);
                            p = O >= p && O <= x && u >= C && u <= y;
                            break;
                        case "default":
                            p = !1
                    }
                    return p
                }
            }, buildKdTree: function (h) {
                this.kdTree = q(h);
                this.tree = this.kdTree.tree;
                return this
            }, getNeighbour: function (h, m, q) {
                var u = this.tree,
                    p = {x1: h.x - this.xLimit, x2: h.x + this.xLimit, y1: h.y - this.yLimit, y2: h.y + this.yLimit},
                    y = this.validatorFn;
                this.mousePoint = h;
                if (m) return this.kdTree && this.kdTree.search(h.x,
                    h.y, q);
                if (u) return this._searchBtwnLimit(p, u, !0, y)
            }, _compair2closest: function (h, m) {
                return !h || h && m && m.i > h.i ? m : h
            }, _searchBtwnLimit: function (h, m, q, u) {
                var p, y, O = q ? h.x1 : h.y1, M = q ? h.x2 : h.y2;
                p = m && m.point && m.point[q ? "x" : "y"];
                if (void 0 !== p) return u(m.point) && (y = m.point), p >= O && m.left && (y = this._compair2closest(y, this._searchBtwnLimit(h, m.left, !q, u))), p <= M && m.right && (y = this._compair2closest(y, this._searchBtwnLimit(h, m.right, !q, u))), y
            }, _setSearchLimit: function (h, m) {
                this.xLimit = h;
                this.yLimit = m
            }
        };
        R.prototype.constructor =
            R;
        u.KdTree = R
    }]);
    T.register("module", ["private", "modules.renderer.js-gradientlegend", function () {
        function q(e, b) {
            (function c(b, g) {
                var l, f;
                for (f in b) ea.call(b, f) && (l = b[f], void 0 === g[f] ? g[f] = l : "object" === typeof l && c(l, g[f]))
            })(e, b);
            return b
        }

        function R(e) {
            return Z(e ? e : ca) || ca
        }

        function u(e) {
            var b = e.fontSize + "";
            if (!b) return e;
            b = b.replace(/(\d+)(px)*/, "$1px");
            e.fontSize = b;
            return e
        }

        function S(e) {
            return void 0 === e || "undefined" === typeof e || null === e || e !== e ? !0 : !1
        }

        function aa(e, b) {
            this.carpet = e;
            this._componentPool =
                b
        }

        function U(e) {
            this.conf = e;
            this._id = "GL_CARPET";
            this.compositionsByCategory = {};
            this._lSpace = this.group = this.node = void 0;
            this.autoRecalculate = !1;
            this.groupName = "fc-gradient-legend";
            this.moveInstructions = {}
        }

        function h() {
            U.apply(this, arguments)
        }

        function Q(e, b) {
            this.rawText = e;
            this.conf = b;
            this._id = "GL_CAPTION";
            this._lSpace = this.bound = this.node = void 0
        }

        function y(e, b, a) {
            this.colorRange = e;
            this.conf = b;
            this.childTextConf = a;
            this._id = "GL_BODY";
            this.bound = void 0;
            this.compositionsByCategory = {};
            this._lSpace = void 0
        }

        function X() {
            y.apply(this, arguments)
        }

        function m(e) {
            this.conf = e;
            this._id = "GL_LABELS"
        }

        function W() {
            m.apply(this, arguments)
        }

        function z() {
            m.apply(this, arguments);
            this._id = "GL_VALUES"
        }

        function x() {
            z.apply(this, arguments);
            this._id = "GL_VALUES"
        }

        function J(e) {
            this.conf = e;
            this._id = "FL_AXIS";
            this.markerLine = this.shadow = this.node = void 0;
            this.compositionsByCategory = {}
        }

        function P() {
            J.apply(this, arguments)
        }

        function p(e) {
            var b = {};
            this._id = "GL_SG1";
            this.conf = e;
            b.conf = e;
            this.extremes = [];
            this.sliders = {};
            b.sliderGroup =
                this;
            this.valueRange = [];
            this.callbacks = [];
            this.sliders[!1] = new C(!1, b, this._id + "_0");
            this.sliders[!0] = new C(!0, b, this._id + "_1")
        }

        function C(e, b, a) {
            this.conf = b.conf;
            this.sliderIndex = e;
            this.rangeGroup = b.sliderGroup;
            this._id = a;
            this.tracker = this.node = void 0;
            this.currPos = 0;
            this.swing = []
        }

        function O(e, b, a) {
            a = a.components.numberFormatter;
            var c, d, g, l, f, k;
            this.data = e;
            this.options = b || {};
            k = this.mapByPercent = !!e.mapByPercent;
            this.appender = "";
            d = this.mapByPercent ? 0 : b.min;
            b = this.mapByPercent ? 100 : b.max;
            2 === e.colorRange.length &&
            (c = e.colorRange[0], g = e.colorRange[1], l = c.value = S(c.value) ? d : c.value, f = g.value = S(g.value) ? b : g.value, l === f && (l = c.value = d, f = g.value = b), c.displayValue = k ? l + "%" : a.legendValue(l), g.displayValue = k ? f + "%" : a.legendValue(f));
            S(d) && S(c.value) || S(b) && S(c.value) || !e.gradient ? this._preparationGoneWrong = !0 : this._preparationGoneWrong = !1;
            a = this.colorRange = e.colorRange.sort(function (a, b) {
                return a.value - b.value
            });
            this.valueRatio = void 0;
            this.values = [];
            e = 0;
            for (c = a.length; e < c; e++) this.values.push(a[e].value)
        }

        function M() {
            aa.apply(this,
                arguments)
        }

        var L = this, N = L.hcLib, E = N.pluckNumber, D = N.pluck, H = N.toRaphaelColor, G = N.graphics,
            ga = N.dehashify, ha = N.hashify, V = G.convertColor, Y = G.RGBtoHex, I = G.HEXtoRGB, B = G.getLightColor,
            Z = G.getValidColor, A = "rgba(192,192,192," + (N.isIE ? .002 : 1E-6) + ")", K, ca = N.COLOR_BLACK,
            ea = {}.hasOwnProperty, da, fa = {};
        K = function () {
            function e(a) {
                var c = b.numberFormatter, l, f, k;
                l = 0;
                for (f = a.length; l < f; l++) if (k = a[l].maxvalue) a[l].maxvalue = c.getCleanValue(k)
            }

            var b, a, c = {
                legendCarpetConf: {
                    spreadFactor: .85, allowDrag: !1, captionAlignment: "center",
                    padding: {v: 3, h: 3}, style: {fill: "#e4d9c1", stroke: "#c4b89d"}
                },
                legendCaptionConf: {
                    spreadFactor: .2,
                    padding: {v: 2, h: 2},
                    style: {
                        fill: "#786B50",
                        fontFamily: "sans-serif",
                        fontSize: "12px",
                        fontWeight: "bold",
                        fontStyle: "normal"
                    },
                    bound: {style: {stroke: "none"}}
                },
                legendBodyConf: {spreadFactor: .8, padding: {v: 2, h: 2}, bound: {style: {stroke: "none"}}}
            };
            c.legendAxisConf = {
                legendAxisHeight: 11,
                spreadFactor: .4,
                padding: {v: 1, h: 1},
                style: {stroke: "none", "stroke-opacity": 0, "stroke-width": 1},
                line: {
                    grooveLength: 3, offset: 8, style: {
                        stroke: "rgba(255, 255, 255, 0.65)",
                        "stroke-width": 1.5
                    }
                },
                shadow: {
                    style: {
                        stroke: "none",
                        fill: H({
                            FCcolor: {
                                alpha: "25,0,0",
                                angle: 360,
                                color: "000000,FFFFFF,FFFFFF",
                                ratio: "0,30,40"
                            }
                        })
                    }
                },
                bound: {style: {stroke: "none"}}
            };
            c.sliderGroupConf = {
                showTooltip: 1,
                outerCircle: {rFactor: 1.4, style: {fill: A, stroke: "#757575", "stroke-width": 3}},
                innerCircle: {rFactor: .65, style: {fill: A, stroke: "#FFFFFF"}}
            };
            c.axisTextItemConf = {
                spreadFactor: .3,
                padding: {v: 1, h: 1},
                style: {
                    fill: "#786B50",
                    fontFamily: "sans-serif",
                    fontSize: "12px",
                    fontWeight: "normal",
                    fontStyle: "normal"
                }
            };
            return {
                init: function (c) {
                    a =
                        c.chart;
                    b = a.components
                }, setConf: function (a) {
                }, legacyDataParser: function (a, c) {
                    var l = {}, f = b.numberFormatter, k, t, n, F, h, m, r, v, q;
                    if (!a) return !1;
                    l.mapByPercent = q = !!E(a.mapbypercent, 0);
                    k = a.color || [];
                    void 0 === a.minvalue && (a.minvalue = void 0 !== c.min ? q ? 0 : c.min : 0);
                    void 0 === a.maxvalue && (a.maxvalue = void 0 !== c.max ? q ? 100 : c.max : 100);
                    m = !1;
                    n = 0;
                    for (F = k.length; n < F; n++) if (k[n].maxvalue) {
                        m = !0;
                        break
                    }
                    m || (k = []);
                    n = a.code;
                    m = l.colorRange = [];
                    l.gradient = !!E(a.gradient, 1);
                    k.length ? n = R(n) : (n ? (F = R(n), n = R()) : (n = R(), F = B(n, 1)), k.push({
                        code: F,
                        maxvalue: a.maxvalue, label: void 0
                    }));
                    e(k);
                    k = k.sort(function (a, b) {
                        return a.maxvalue - b.maxvalue
                    });
                    r = v = a.minvalue && f.getCleanValue(a.minvalue);
                    v = (void 0 !== r || null !== r) && (q ? r + "%" : f.legendValue(r));
                    m.push({code: ga(n), value: r, displayValue: v, label: a.startlabel});
                    n = 0;
                    for (F = k.length; n < F; n++) t = k[n], h = R(t.code || t.color), r = v = t.maxvalue, isNaN(parseInt(r, 10)) || (v = (void 0 !== r || null !== r) && (q ? r + "%" : f.legendValue(r)), m.push(Object({
                        code: ga(h),
                        value: r,
                        displayValue: v,
                        label: t.label || t.displayvalue
                    })));
                    m[m.length - 1].label =
                        a.endlabel || t.label;
                    return l
                }, getDefaultConf: function (a) {
                    return c[a]
                }
            }
        }();
        da = function (e) {
            var b = e.chartInstance.id, a = fa[b] || (fa[b] = {});
            return function () {
                function c() {
                    var b, c, d, g, l, e;
                    for (b in a) for (c in d = a[b], d) if (g = d[c], g instanceof Array) for (l = 0, e = g.length; l < e; l++) g[l] && g[l].hide(); else g.hide()
                }

                var d, g = {}, l;
                d = {KEY_RECT: "rect", KEY_TEXT: "text", KEY_GROUP: "group", KEY_CIRCLE: "circle", KEY_PATH: "path"};
                g[d.KEY_RECT] = function (a) {
                    return l.rect(a)
                };
                g[d.KEY_TEXT] = function (a, b) {
                    return l.text(a, b)
                };
                g[d.KEY_GROUP] =
                    function (a, b) {
                        return l.group(a, b)
                    };
                g[d.KEY_CIRCLE] = function (a) {
                    return l.circle(a)
                };
                g[d.KEY_PATH] = function (a, b) {
                    return l.path(a, b)
                };
                return {
                    init: function (a) {
                        l = a;
                        c()
                    }, emptyPool: function () {
                        a = fa[b] = {}
                    }, getChart: function () {
                        return e
                    }, getComponent: function (b, c, d) {
                        var l = a[b], e, h, m, r = 0;
                        l || (l = a[b] = {});
                        return (h = l[c]) && !(h instanceof Array) || h instanceof Array && 0 < h.length ? function () {
                            return d ? (m = h[r++]) ? m.show() : h[r] = g[c].apply(this, arguments) : h.show()
                        } : function () {
                            return d ? (e = l[c] || (l[c] = []), h = g[c].apply(this,
                                arguments), e.push(h), h.show()) : l[c] = g[c].apply(this, arguments)
                        }
                    }, hideAll: function () {
                        c()
                    }, getKeys: function () {
                        return d
                    }
                }
            }()
        };
        aa.prototype.constructor = aa;
        aa.prototype.draw = function (e) {
            e.componentPool = this._componentPool;
            return this.carpet.draw(e)
        };
        aa.prototype.getLogicalSpace = function (e, b) {
            e.componentPool = this._componentPool;
            return this.carpet.getLogicalSpace(e, b)
        };
        aa.prototype.dispose = function () {
            this.carpet && this.carpet.group && this.carpet.group.remove();
            this._componentPool.emptyPool()
        };
        U.prototype.constructor =
            U;
        U.prototype.addCompositions = function (e, b) {
            this.compositionsByCategory[b] = e
        };
        U.prototype.getBoundingBox = function (e) {
            var b = this.conf, a = e.refSide, c = e.alignment, d = e.refOffset, g = e.x, l = e.y,
                b = b.width = a * b.spreadFactor;
            !c || void 0 !== g && null !== g || (g = (d + a) / 2 - b / 2);
            return {width: b, height: e.maxOtherSide, x: g, y: l}
        };
        U.prototype.getPostCalcDecisions = function (e, b) {
            var a = this.conf.padding, c, d = 0;
            for (c in b) d += b[c].height || 0;
            e.height = d + 2 * a.v
        };
        U.prototype.getLogicalSpace = function (e, b) {
            var a = this._lSpace, c = this.conf.padding,
                d = this.compositionsByCategory, g, l, f;
            f = 0;
            var k = {}, t, n = 0;
            if (a && !b) return a.isImpure = !0, a;
            a = this._lSpace = l = this.getBoundingBox(e);
            if (S(a.x) || S(a.y) || S(a.height) || S(a.width)) this.autoRecalculate = !0;
            a = q(l, {});
            a.height -= 2 * c.v;
            a.width -= 2 * c.h;
            a.x += c.h;
            a.y += c.v;
            for (t in d) g = d[t], c = q(a, {}), c.y += f, f = a.height * g.conf.spreadFactor, c.height = f + n, f = g.getLogicalSpace(q(c, {}), e, b), n = c.height - f.height, k[t] = f, f = f.height;
            this.getPostCalcDecisions(l, k);
            return this._lSpace = l
        };
        U.prototype.setupDragging = function () {
            var e = this.group,
                b = 0, a = 0, c = 0, d = 0;
            e.css({cursor: "move"});
            e.drag(function (g, l) {
                b = l[0];
                a = l[1];
                e.attr({transform: "t" + (c + b) + "," + (d + a)})
            }, function () {
                c += b;
                d += a
            }, function () {
            })
        };
        U.prototype.draw = function (e) {
            var b = this.conf, a = this.compositionsByCategory, c = e.paper, d = e.parentGroup, g = e.componentPool, l,
                f, k = g.getChart().get("config", "animationObj").duration, t, n = g.getKeys();
            this.getLogicalSpace(e, this.autoRecalculate);
            f = this._lSpace;
            t = g.getComponent(this._id, n.KEY_GROUP);
            this.group = d = t(this.groupName, d);
            d.attr({opacity: 0});
            d.animate({opacity: 1},
                k, "easeIn");
            t = g.getComponent(this._id, n.KEY_RECT);
            this.node = t(d).attr(f).css(b.style);
            for (l in a) g = a[l], g.draw(b.captionAlignment, f, {
                colorRange: e.colorRange,
                numberFormatter: e.numberFormatter,
                paper: c,
                parentLayer: d,
                smartLabel: e.smartLabel,
                moveInstructions: this.moveInstructions[l],
                componentPool: e.componentPool
            });
            b.allowDrag && this.setupDragging();
            return this.node
        };
        h.prototype = Object.create(U.prototype);
        h.prototype.constructor = h;
        h.prototype.getBoundingBox = function (e) {
            var b = this.conf, a = e.refSide, c = e.alignment,
                d = e.refOffset, g = e.x, l = e.y, b = b.height = a * b.spreadFactor;
            !c || void 0 !== l && null !== l || (l = (d + a) / 2 - b / 2);
            return {width: e.maxOtherSide, height: b, x: g, y: l}
        };
        h.prototype.getPostCalcDecisions = function (e, b) {
            var a = this.conf.padding, c = Number.NEGATIVE_INFINITY, d, g, l = this.moveInstructions;
            U.prototype.getPostCalcDecisions.apply(this, arguments);
            for (g in b) d = b[g].width, c = c < d ? d : c;
            e.width = c + 2 * a.h;
            for (g in b) if (d = b[g].width, a = c - d) l[g] = "t" + a / 2 + ",0"
        };
        Q.prototype.constructor = Q;
        Q.LEFT = {
            x: function (e, b) {
                return b.x + e.width / 2 + 2
            }
        };
        Q.RIGHT = {
            x: function (e, b) {
                return b.x + b.width - e.width / 2 - 2
            }
        };
        Q.CENTER = {
            x: function (e, b) {
                return b.x + b.width / 2
            }
        };
        Q.prototype.getLogicalSpace = function (e, b, a) {
            var c = this.conf.padding, d = this._lSpace, g = this.rawText, l = b.componentPool.getChart();
            if (d && !a) return d.isImpure = !0, d;
            d = this._lSpace = {bound: {height: 0, width: 0}, node: {logicArea: void 0, smartText: void 0}};
            a = b.smartLabel;
            if (!g) return d.bound;
            b = q(e, {});
            b.height -= 2 * c.v;
            b.width -= 2 * c.h;
            b.x += c.h;
            b.y += c.v;
            a.useEllipsesOnOverflow(l.config.useEllipsesWhenOverflow);
            l = q(this.conf.style, {});
            u(l);
            a.setStyle(this._metaStyle = l);
            g = a.getSmartText(g, b.width, b.height);
            b.height = g.height;
            b.width = g.width;
            e.height = g.height + 2 * c.v;
            e.width = g.width + 2 * c.h;
            d.node.smartText = g;
            d.node.logicArea = b;
            return d.bound = e
        };
        Q.prototype.draw = function () {
            var e = this.conf, b, a = e.bound || {}, c, d, g, l, f, k, t;
            3 <= arguments.length ? (g = arguments[0], l = arguments[1], f = arguments[2]) : 2 <= arguments.length && (g = arguments[0], f = arguments[1]);
            b = f.parentLayer;
            k = f.componentPool;
            t = k.getKeys();
            c = k.getComponent(this._id, t.KEY_GROUP);
            this.group = b = c("legend-caption", b).css(e.style);
            this.getLogicalSpace(l, f);
            c = this._lSpace;
            f = c.node;
            d = c.bound;
            c = k.getComponent(this._id, t.KEY_RECT);
            this.bound = a = c(b).attr(d).css(a.style);
            g = "string" === typeof g ? Q[g.toUpperCase()].x(f.smartText, l || f.logicArea) : g;
            c = k.getComponent(this._id, t.KEY_TEXT);
            this.node = c({}, b).attr({
                text: f.smartText.text,
                x: g,
                y: f.logicArea.y + f.smartText.height / 2,
                lineHeight: this._metaStyle.lineHeight,
                fill: e.style.fill
            });
            return {group: b, bound: a, node: this.node}
        };
        y.SC_STACK = ["LEGEND_LABEL",
            "LEGEND_AXIS", "AXIS_VALUE"];
        y.DARW_STACK = ["AXIS_VALUE", "LEGEND_AXIS", "LEGEND_LABEL"];
        y.prototype.constructor = y;
        y.prototype.addCompositions = function (e, b) {
            this.compositionsByCategory[b] = e
        };
        y.prototype.getCompositionPlotAreaFor = function (e) {
            var b;
            b = q(e, {});
            return function (a, c) {
                a = a || {};
                b.y += a.height || 0;
                b.height = e.height * c;
                return b
            }
        };
        y.prototype.getSpaceTaken = function (e) {
            return e.height
        };
        y.prototype.updateEffectivePlotArea = function (e, b, a) {
            var c = this.conf.padding;
            b.height = a;
            e.height = a + 2 * c.v
        };
        y.prototype.getLogicalSpace =
            function (e, b, a) {
                var c = this._lSpace, d = this.conf.padding, g = this.compositionsByCategory, l, f, k, t = 0, n, F;
                if (c && !a) return c.isImpure = !0, c;
                c = this._lSpace = {bound: {height: 0, width: 0}, node: {logicArea: void 0}};
                f = q(e, {});
                f.height -= 2 * d.v;
                f.width -= 2 * d.h;
                f.x += d.h;
                f.y += d.v;
                k = this.getCompositionPlotAreaFor(f);
                b.colorRange = this.colorRange;
                n = 0;
                for (F = y.SC_STACK.length; n < F; n++) if (d = g[y.SC_STACK[n]]) l = k(l, d.conf.spreadFactor), l = d.getLogicalSpace(q(l, {}), b, a), t += this.getSpaceTaken(l);
                this.updateEffectivePlotArea(e, f, t);
                c.node.logicArea =
                    f;
                return c.bound = e
            };
        y.prototype.draw = function () {
            var e = this.childTextConf, b = this.conf.bound.style || {}, a = this.compositionsByCategory, c, d, g, l, f,
                k, t;
            3 <= arguments.length ? (g = arguments[1], f = arguments[2]) : 2 <= arguments.length && (f = arguments[1]);
            c = f.parentLayer;
            l = f.componentPool;
            k = l.getKeys();
            this.getLogicalSpace(g, f);
            g = this._lSpace;
            t = l.getComponent(this._id, k.KEY_GROUP);
            e = t("legend-body", c).attr({transform: "t0,0"}).css(e.style);
            t = l.getComponent(this._id, k.KEY_RECT);
            this.bound = b = t(e).attr(g.bound).css(b);
            f.colorRange =
                this.colorRange;
            f.parentLayer = e;
            l = 0;
            for (k = y.DARW_STACK.length; l < k; l++) (d = a[y.DARW_STACK[l]]) && d.draw(f);
            f.moveInstructions && e.attr({transform: f.moveInstructions});
            return {bound: b, group: e}
        };
        X.prototype = Object.create(y.prototype);
        X.prototype.constructor = X;
        X.prototype.getCompositionPlotAreaFor = function (e) {
            var b;
            b = q(e, {});
            return function (a, c) {
                a = a || {};
                b.x += a.width || 0;
                b.width = e.width * c;
                return b
            }
        };
        X.prototype.updateEffectivePlotArea = function (e, b, a) {
            var c = this.conf.padding;
            b.width = a;
            e.width = a + 2 * c.h
        };
        X.prototype.getSpaceTaken =
            function (e) {
                return e.width
            };
        m.prototype.constructor = m;
        m.prototype.getEffectivePlotArea = function (e) {
            var b = this.conf.padding;
            e.height -= 2 * b.v;
            e.width -= 2 * b.h;
            e.x += b.h;
            e.y += b.v;
            this.node = [];
            return e
        };
        m.prototype.getLogicalSpace = function (e, b, a) {
            var c = this._lSpace, d = this.conf, g = d.padding, l, f, k = [], t, n, F, h, m, r = 0, v, ia, y;
            m = b.componentPool.getChart();
            var p = [];
            if (c && !a) return c.isImpure = !0, c;
            c = b.colorRange;
            b = b.smartLabel;
            a = c.getCumulativeValueRatio();
            l = c.colorRange;
            c = this._lSpace = {
                bound: {height: 0, width: 0}, node: {
                    logicArea: void 0,
                    smartTexts: []
                }
            };
            h = c.node.smartTexts;
            t = q(e, {});
            t = this.getEffectivePlotArea(t);
            b.useEllipsesOnOverflow(m.config.useEllipsesWhenOverflow);
            d = q(d.style, {});
            u(this._metaStyle = d);
            b.setStyle(d);
            m = b.getSmartText("W");
            f = 0;
            for (d = l.length; f < d; f++) (n = l[f].label) ? (r++, p.push({oriIndex: f, label: n})) : h[f] = void 0;
            d = p.length;
            if (0 === d) return {height: 0, width: 0};
            n = F = 1 < d ? (a[p[d - 1].oriIndex] - a[p[0].oriIndex]) / 2 * t.width / 100 : Math.max(a[p[0].oriIndex], 100 - a[p[0].oriIndex]) / 2 * t.width / 100;
            r = b.getSmartText(p[0].label, n, t.height);
            r.x = a[p[0].oriIndex] * t.width / 100;
            f = r.x + r.width;
            k.push(r.height);
            h[p[0].oriIndex] = r;
            r = b.getSmartText(p[d - 1].label, n, t.height);
            r.x = a[p[d - 1].oriIndex] * t.width / 100;
            l = r.x - r.width;
            k.push(r.height);
            h[p[d - 1].oriIndex] = r;
            ia = f;
            for (f = 1; f < d - 1; f++) n = p[f].label, y = p[f].oriIndex, r = void 0, F = f + 1 === d - 1 ? l : a[p[f + 1].oriIndex] * t.width / 100, v = a[p[f].oriIndex] * t.width / 100, F = Math.min(v - ia, F - v), F > 2 * m.width && (r = b.getSmartText(n, F, t.height), r.x = a[y] * t.width / 100, ia = F, k.push(r.height)), h[p[f].oriIndex] = r;
            k = Math.max.apply(Math, k);
            t.height = k;
            e.height = k + 2 * g.v;
            c.node.logicArea = t;
            return c.bound = e
        };
        m.prototype.draw = function () {
            var e, b, a = this.conf;
            b = a.bound && a.bound.style || {stroke: "none"};
            var c, d, g, l, f, k, t, n;
            2 <= arguments.length ? (d = arguments[0], l = arguments[1]) : 1 <= arguments.length && (l = arguments[0]);
            e = l.parentLayer;
            l.colorRange.getCumulativeValueRatio();
            c = l.componentPool;
            f = c.getKeys();
            this.getLogicalSpace(d, l);
            g = this._lSpace;
            d = g.node.logicArea;
            l = g.node.smartTexts;
            n = c.getComponent(this._id, f.KEY_GROUP);
            e = n("legend-labels", e);
            n = c.getComponent(this._id,
                f.KEY_RECT);
            this.bound = b = n(e).attr(g.bound).css(b);
            n = c.getComponent(this._id, f.KEY_TEXT, !0);
            f = 0;
            for (g = l.length; f < g; f++) if (c = l[f]) k = d.y + c.height / 2, t = f === g - 1 ? d.x + c.x - c.width / 2 : f ? d.x + c.x : d.x + c.x + c.width / 2, this.node.push(n({}, e).attr({
                text: c.text,
                x: t,
                y: k,
                lineHeight: this._metaStyle.lineHeight,
                fill: a.style.fill
            }).transform("R0"));
            return {group: e, bound: b, node: this.node}
        };
        W.prototype = Object.create(m.prototype);
        W.prototype.constructor = W;
        W.prototype.getLogicalSpace = function (e, b, a) {
            var c = this._lSpace, d = this.conf,
                g = d.padding, l, f, k = [], t, n, h, m, w, r = 0, v, p, y;
            w = b.componentPool.getChart();
            var x = [];
            if (c && !a) return c.isImpure = !0, c;
            c = b.colorRange;
            b = b.smartLabel;
            a = c.getCumulativeValueRatio();
            l = c.colorRange;
            c = this._lSpace = {bound: {height: 0, width: 0}, node: {logicArea: void 0, smartTexts: []}};
            m = c.node.smartTexts;
            t = q(e, {});
            t = this.getEffectivePlotArea(t);
            b.useEllipsesOnOverflow(w.config.useEllipsesWhenOverflow);
            d = q(d.style, {});
            u(this._metaStyle = d);
            b.setStyle(d);
            w = b.getSmartText("W");
            f = 0;
            for (d = l.length; f < d; f++) (n = l[f].label) ? (r++,
                x.push({oriIndex: f, label: n})) : m[f] = void 0;
            d = x.length;
            if (0 === d) return {height: 0, width: 0};
            n = h = 1 < d ? (a[x[d - 1].oriIndex] - a[x[0].oriIndex]) / 2 * t.height / 100 : Math.max(a[x[0].oriIndex], 100 - a[x[0].oriIndex]) / 2 * t.height / 100;
            r = b.getSmartText(x[0].label, n, t.width);
            r.y = a[x[0].oriIndex] * t.height / 100;
            f = r.y + r.width;
            k.push(r.height);
            m[x[0].oriIndex] = r;
            r = b.getSmartText(x[d - 1].label, n, t.width);
            r.y = a[x[d - 1].oriIndex] * t.height / 100;
            l = r.y - r.width;
            k.push(r.height);
            m[x[d - 1].oriIndex] = r;
            p = f;
            for (f = 1; f < d - 1; f++) n = x[f].label, y = x[f].oriIndex,
                r = void 0, h = f + 1 === d - 1 ? l : a[x[f + 1].oriIndex] * t.height / 100, v = a[x[f].oriIndex] * t.height / 100, h = Math.min(v - p, h - v), h > 2 * w.width && (r = b.getSmartText(n, h, t.width), r.y = a[y] * t.height / 100, p = h, k.push(r.height)), m[x[f].oriIndex] = r;
            k = Math.max.apply(Math, k);
            t.width = k;
            e.width = k + 2 * g.v;
            c.node.logicArea = t;
            return c.bound = e
        };
        W.prototype.draw = function () {
            var e, b, a = this.conf;
            b = a.bound && a.bound.style || {stroke: "none"};
            var c, d, g, l, f, k, t, n;
            2 <= arguments.length ? (d = arguments[0], l = arguments[1]) : 1 <= arguments.length && (l = arguments[0]);
            e = l.parentLayer;
            l.colorRange.getCumulativeValueRatio();
            c = l.componentPool;
            f = c.getKeys();
            this.getLogicalSpace(d, l);
            g = this._lSpace;
            d = g.node.logicArea;
            l = g.node.smartTexts;
            n = c.getComponent(this._id, f.KEY_GROUP);
            e = n("legend-labels", e);
            n = c.getComponent(this._id, f.KEY_RECT);
            this.bound = b = n(e).attr(g.bound).css(b);
            n = c.getComponent(this._id, f.KEY_TEXT, !0);
            f = 0;
            for (g = l.length; f < g; f++) if (c = l[f]) k = d.x + c.height / 2, t = f === g - 1 ? d.y + c.y - c.width / 2 : f ? d.y + c.y : d.y + c.y + c.width / 2, this.node.push(n({}, e).attr({
                text: c.text, x: k,
                y: t, lineHeight: this._metaStyle.lineHeight, fill: a.style.fill
            }).transform("R270," + k + "," + t));
            return {group: e, bound: b, node: this.node}
        };
        z.prototype = Object.create(m.prototype);
        z.prototype.constructor = z;
        z.prototype.getLogicalSpace = function (e, b, a) {
            var c = this._lSpace, d = this.conf, g = d.padding, l = b.componentPool.getChart(), f, k, t, n, h, m,
                w = [], r, v, p, y;
            if (c && !a) return c.isImpure = !0, c;
            c = b.colorRange;
            b = b.smartLabel;
            a = c.colorRange;
            t = c.getCumulativeValueRatio();
            c = this._lSpace = {
                bound: {height: 0, width: 0}, node: {
                    logicArea: void 0,
                    smartTexts: []
                }
            };
            y = c.node.smartTexts;
            v = q(e, {});
            v.height -= 2 * g.v;
            v.width -= 2 * g.h;
            v.x += g.h;
            v.y += g.v;
            b.useEllipsesOnOverflow(l.config.useEllipsesWhenOverflow);
            d = q(d.style, {});
            u(this._metaStyle = d);
            b.setStyle(d);
            l = b.getSmartText("W");
            d = a.length;
            m = (t[d - 1] - t[0]) / 2 * v.width / 100;
            f = a[0].displayValue;
            f = b.getSmartText("string" !== typeof f && void 0 !== f && f.toString() || f, m, v.height);
            f.x = t[0] * v.width / 100;
            k = f.x + f.width;
            w.push(f.height);
            y[0] = f;
            f = b.getSmartText(a[d - 1].displayValue, m, v.height);
            f.x = t[d - 1] * v.width / 100;
            m = f.x -
                f.width;
            w.push(f.height);
            y[d - 1] = f;
            r = k;
            for (k = 1; k < d - 1; k++) f = void 0, p = a[k].displayValue, n = k + 1 === d - 1 ? m : t[k + 1] * v.width / 100, h = t[k] * v.width / 100, n = Math.min(h - r, n - h), n > 1.5 * l.width && (f = b.getSmartText(p, 2 * n, v.height), f.x = t[k] * v.width / 100, r = n, w.push(f.height)), y[k] = f;
            w = Math.max.apply(Math, w);
            v.height = w;
            e.height = w + 2 * g.v;
            c.node.logicArea = v;
            return c.bound = e
        };
        z.prototype.draw = function () {
            var e = this.conf, b = e.bound && e.bound.style || {stroke: "none"}, a, c, d, g, l, f, k, t, n;
            2 <= arguments.length ? (l = arguments[0], k = arguments[1]) :
                1 <= arguments.length && (k = arguments[0]);
            g = k.parentLayer;
            c = k.colorRange.getCumulativeValueRatio();
            d = k.componentPool;
            a = d.getKeys();
            this.getLogicalSpace(l, k);
            f = this._lSpace;
            l = f.node.logicArea;
            k = f.node.smartTexts;
            n = d.getComponent(this._id, a.KEY_GROUP);
            g = n("legend-values", g);
            n = d.getComponent(this._id, a.KEY_RECT);
            this.bound = b = n(g).attr(f.bound).css(b);
            n = d.getComponent(this._id, a.KEY_TEXT, !0);
            a = 0;
            for (f = c.length; a < f; a++) if (t = k[a]) c = l.y + t.height / 2, d = a === f - 1 ? l.x + t.x - t.width / 2 : a ? l.x + t.x : l.x + t.x + t.width / 2, n({},
                g).attr({text: t.text, x: d, y: c, lineHeight: this._metaStyle.lineHeight, fill: e.style.fill});
            return {group: g, bound: b}
        };
        x.prototype = Object.create(z.prototype);
        x.prototype.constructor = x;
        x.prototype.getLogicalSpace = function (e, b, a) {
            var c = this._lSpace, d = this.conf, g = d.padding, l = b.componentPool.getChart(), f, k, t, n, h, m,
                w = [], r, v, p, y;
            if (c && !a) return c.isImpure = !0, c;
            c = b.colorRange;
            b = b.smartLabel;
            a = c.colorRange;
            k = c.getCumulativeValueRatio();
            c = this._lSpace = {bound: {height: 0, width: 0}, node: {logicArea: void 0, smartTexts: []}};
            y = c.node.smartTexts;
            h = q(e, {});
            h.height -= 2 * g.v;
            h.width -= 2 * g.h;
            h.x += g.h;
            h.y += g.v;
            b.useEllipsesOnOverflow(l.config.useEllipsesWhenOverflow);
            d = q(d.style, {});
            u(d);
            b.setStyle(this._metaStyle = d);
            p = b.getSmartText("W");
            l = a.length;
            m = (k[l - 1] - k[0]) / 2 * h.height / 100;
            d = b.getSmartText(a[0].displayValue, h.width, m);
            d.y = k[0] * h.height / 100;
            f = d.y + d.width;
            w.push(d.width);
            y[0] = d;
            d = b.getSmartText(a[l - 1].displayValue, h.width, m);
            d.y = k[l - 1] * h.height / 100;
            m = d.y - d.height;
            w.push(d.width);
            y[l - 1] = d;
            r = f;
            for (f = 1; f < l - 1; f++) d = void 0, v =
                a[f].displayValue, t = f + 1 === l - 1 ? m : k[f + 1] * h.height / 100, n = k[f] * h.height / 100, t = Math.min(n - r, t - n), t > 2 * p.height && (d = b.getSmartText(v, h.width, 2 * t), d.y = k[f] * h.height / 100, r = t, w.push(d.width)), y[f] = d;
            w = Math.max.apply(Math, w);
            h.width = w;
            e.width = w + 2 * g.h;
            c.node.logicArea = h;
            return c.bound = e
        };
        x.prototype.draw = function () {
            var e, b, a = this.conf;
            b = a.bound && a.bound.style || {stroke: "none"};
            var c, d, g, l, f, k, t, n;
            2 <= arguments.length ? (c = arguments[0], g = arguments[1]) : 1 <= arguments.length && (g = arguments[0]);
            e = g.parentLayer;
            l = g.colorRange.getCumulativeValueRatio();
            f = g.componentPool;
            k = f.getKeys();
            this.getLogicalSpace(c, g);
            d = this._lSpace;
            c = d.node.logicArea;
            g = d.node.smartTexts;
            n = f.getComponent(this._id, k.KEY_GROUP);
            e = n("legend-values", e);
            n = f.getComponent(this._id, k.KEY_RECT);
            this.bound = b = n(e).attr(d.bound).css(b);
            n = f.getComponent(this._id, k.KEY_TEXT, !0);
            f = 0;
            for (k = l.length; f < k; f++) if (l = g[f]) d = c.x + l.width / 2, t = f === k - 1 ? c.y + l.y - l.height / 2 : f ? c.y + l.y : c.y + l.y + l.height / 2, n({}, e).attr({
                text: l.text,
                x: d,
                y: t,
                lineHeight: this._metaStyle.lineHeight,
                fill: a.style.fill
            });
            return {
                group: e,
                bound: b
            }
        };
        J.prototype.constructor = J;
        J.prototype.addCompositions = function (e, b) {
            this.compositionsByCategory[b] = e
        };
        J.prototype.getLogicalSpace = function (e, b, a) {
            b = this._lSpace;
            var c = this.conf, d = c.padding, g, l;
            l = c.legendAxisHeight;
            var f = this.compositionsByCategory, k;
            k = 0;
            if (b && !a) return b.isImpure = !0, b;
            b = this._lSpace = {bound: {height: 0, width: 0}, node: {logicArea: void 0}};
            a = q(e, {});
            a.height -= 2 * d.v;
            a.width -= 2 * d.h;
            a.x += d.h;
            a.y += d.v;
            c = l / 2 + c.line.offset;
            g = l / 2;
            if (f = f.RANGE) k = f.sliders[!1], k = k.conf.outerCircle.rFactor *
                l, g += k = Math.max(k / 2 - l / 2, 0);
            a.y += k;
            a.height = l = g + c + k;
            e.height = l + 2 * d.v;
            b.node.logicArea = a;
            return b.bound = e
        };
        J.prototype.getDrawableAxisArea = function (e) {
            var b = this.conf;
            return {x: e.x, y: e.y, width: e.width, height: b.legendAxisHeight, r: b.legendAxisHeight / 2}
        };
        J.prototype.preDrawingRangeParam = function (e) {
            return {
                y: e.y + e.height / 2,
                calculationBase: e.height,
                rangeStart: e.x,
                rangeEnd: e.x + e.width,
                prop: "y"
            }
        };
        J.prototype.getScaleMarkerPathStr = function (e, b) {
            var a = q(e, {}), c = this.conf.line, d, g, l, f, k = "";
            a.x += a.r;
            a.width -= 2 *
                a.r;
            f = a.y + a.height;
            d = 0;
            for (g = b.length; d < g; d++) l = b[d], l = a.x + l * a.width / 100, k += "M" + l + "," + (f - c.grooveLength) + "L" + l + "," + (f + c.offset);
            a = "" + ("M" + a.x + "," + (f + c.offset) + "L" + (a.x + a.width) + "," + (f + c.offset));
            return k + a
        };
        J.prototype.getColorGradient = function (e) {
            return {
                axis: e.getBoxFill(),
                shadow: H({FCcolor: {alpha: "25,0,0", angle: 90, color: "000000,FFFFFF,FFFFFF", ratio: "0,30,40"}})
            }
        };
        J.prototype.draw = function () {
            var e, b = this.conf, a = b.line, c = (b.bound || {}).style || {}, d, g, l = this.compositionsByCategory, f,
                k, t, n, h, m;
            2 <= arguments.length ?
                (d = arguments[0], h = arguments[1]) : 1 <= arguments.length && (h = arguments[0]);
            e = h.parentLayer;
            f = h.colorRange;
            k = f.getCumulativeValueRatio();
            m = h.componentPool;
            t = m.getKeys();
            this.getLogicalSpace(d, h);
            n = this._lSpace;
            d = m.getComponent(this._id, t.KEY_GROUP);
            e = d("legend-axis", e);
            d = m.getComponent(this._id, t.KEY_RECT, !0);
            this.bound = d(e).attr(n.bound).css(c);
            c = this.getDrawableAxisArea(n.node.logicArea);
            f = this.getColorGradient(f);
            b.style.fill = f.axis;
            b.shadow.style.fill = f.shadow;
            this.node = d(e).attr(c).css(b.style);
            this.shadow =
                d(e).attr(c).css(b.shadow.style);
            b = this.getScaleMarkerPathStr(c, k);
            d = m.getComponent(this._id, t.KEY_PATH);
            d("M0,0", e).attr({path: b}).css(a.style);
            for (g in l) switch (a = l[g], g) {
                case "RANGE":
                    t = this.preDrawingRangeParam(c), h[t.prop] = t[t.prop], h.key = t.prop, h.rCalcBase = t.calculationBase, h.parentLayer = e, a.draw(t.rangeStart, t.rangeEnd, h)
            }
        };
        P.prototype = Object.create(J.prototype);
        P.prototype.constructor = P;
        P.prototype.getLogicalSpace = function (e, b, a) {
            b = this._lSpace;
            var c = this.conf, d = c.padding, g, l;
            l = c.legendAxisHeight;
            var f = this.compositionsByCategory, k;
            k = 0;
            if (b && !a) return b.isImpure = !0, b;
            b = this._lSpace = {bound: {height: 0, width: 0}, node: {logicArea: void 0}};
            a = q(e, {});
            a.height -= 2 * d.v;
            a.width -= 2 * d.h;
            a.x += d.h;
            a.y += d.v;
            c = l / 2 + c.line.offset;
            g = l / 2;
            if (f = f.RANGE) k = f.sliders[!1], k = k.conf.outerCircle.rFactor * l, g += k = Math.max(k / 2 - l / 2, 0);
            a.x += k;
            a.width = l = g + c + k;
            e.width = l + 2 * d.v;
            b.node.logicArea = a;
            return b.bound = e
        };
        P.prototype.getDrawableAxisArea = function (e) {
            var b = this.conf;
            return {
                x: e.x, y: e.y, width: b.legendAxisHeight, height: e.height,
                r: b.legendAxisHeight / 2
            }
        };
        P.prototype.getScaleMarkerPathStr = function (e, b) {
            var a = q(e, {}), c = this.conf.line, d, g, l, f, k = "";
            a.y += a.r;
            a.height -= 2 * a.r;
            f = a.x + a.width;
            d = 0;
            for (l = b.length; d < l; d++) g = b[d], g = a.y + g * a.height / 100, k += "M" + (f - c.grooveLength) + "," + g + "L" + (f + c.offset) + "," + g;
            a = "" + ("M" + (f + c.offset) + "," + a.y + "L" + (f + c.offset) + "," + (a.y + a.height));
            return k + a
        };
        P.prototype.getColorGradient = function (e) {
            return {
                axis: e.getBoxFill(!0),
                shadow: H({FCcolor: {alpha: "25,0,0", angle: 360, color: "000000,FFFFFF,FFFFFF", ratio: "0,30,40"}})
            }
        };
        P.prototype.preDrawingRangeParam = function (e) {
            return {
                x: e.x + e.width / 2,
                calculationBase: e.width,
                rangeStart: e.y,
                rangeEnd: e.y + e.height,
                prop: "x"
            }
        };
        p.prototype.constructor = p;
        p.prototype.initRange = function (e, b) {
            this.extremes[+e.sliderIndex] = b
        };
        p.prototype.updateRange = function (e, b) {
            var a = e.sliderIndex;
            this.sliders[!a].updateSwingRange(a, b)
        };
        p.prototype.reset = function () {
            var e = {};
            e.conf = this.conf;
            e.sliderGroup = this;
            this.sliders[!1] = new C(!1, e, this._id + "_0");
            this.sliders[!0] = new C(!0, e, this._id + "_1");
            this.draw.apply(this,
                this._drawParams)
        };
        p.prototype.clearListeners = function () {
            this.callbacks.length = 0
        };
        p.prototype.draw = function (e, b, a) {
            var c = this.sliders, d = c[!1], c = c[!0], g = a.colorRange, l = g.colorRange,
                f = this._fcChart = a.componentPool.getChart();
            this.getValueFormPixel = function (a, b, c, d) {
                var g = (b - a) / (d - c);
                this.getValueFormPixel = function (b) {
                    return a + g * b
                }
            };
            this.updateWhenInMove = function (a, b) {
                this.updateWhenInMove = function (c, d) {
                    var g = this.extremes, g = this.getValueFormPixel(c.sliderIndex ? g[1] - g[0] + d : d);
                    return g = b ? parseFloat(g).toFixed(2) +
                        "%" : a.legendValue(g)
                }
            };
            this._drawParams = [e, b, a];
            this.updateWhenInMove(f.components.numberFormatter, g.mapByPercent);
            e = d.draw(e, l[0].displayValue, a[a.key], a);
            e = c.draw(b, l[l.length - 1].displayValue, a[a.key], a);
            d.swing = this.extremes.slice(0);
            c.swing = this.extremes.slice(0);
            this.getValueFormPixel(l[0].value, l[l.length - 1].value, this.extremes[0], this.extremes[1]);
            return e
        };
        p.prototype.registerListener = function (e, b, a) {
            this.callbacks.push({fn: e, context: b, params: a || []})
        };
        p.prototype.updateWhenInRest = function (e,
                                                 b) {
            var a = this.sliders, c = this.extremes, d = e.sliderIndex, g, l = this.callbacks, f, k;
            d ? (g = a[!d].currPos, a = c[1] - c[0] + b) : (g = b, a = c[1] - c[0] + a[!d].currPos);
            c = 0;
            for (d = l.length; c < d; c++) f = l[c], k = f.params.slice(0), k.unshift(this.getValueFormPixel(a)), k.unshift(this.getValueFormPixel(g)), f.fn.apply(f.context, k)
        };
        p.prototype.dragStarted = function (e) {
            var b = this.sliders, a = this.extremes, c = e.conf, d = this._fcChart;
            L.raiseEvent("legendpointerdragstart", {
                pointerIndex: +e.sliderIndex,
                pointers: [{value: this.getValueFormPixel(b[!1].currPos)},
                    {value: this.getValueFormPixel(a[1] - a[0] + b[!0].currPos)}],
                legendPointerHeight: c.outerRadius,
                legendPointerWidth: c.innerRadius,
                outerRadius: c.outerRadius,
                innerRadius: c.innerRadius
            }, d.chartInstance, [d.id])
        };
        p.prototype.dragCompleted = function (e, b, a) {
            var c = this.sliders, d = this.extremes, g = e.conf, l = this.getValueFormPixel(c[!1].currPos),
                c = this.getValueFormPixel(d[1] - d[0] + c[!0].currPos), f = this._fcChart, k;
            e.sliderIndex ? (k = l, a = this.getValueFormPixel(d[1] - d[0] + a)) : (k = this.getValueFormPixel(a), a = c);
            b && L.raiseEvent("legendrangeupdated",
                {previousMinValue: l, previousMaxValue: c, minValue: k, maxValue: a}, f.chartInstance, [f.id]);
            L.raiseEvent("legendpointerdragstop", {
                pointerIndex: +e.sliderIndex,
                pointers: [{value: l}, {value: c}],
                legendPointerHeight: g.outerRadius,
                legendPointerWidth: g.innerRadius,
                outerRadius: g.outerRadius,
                innerRadius: g.innerRadius
            }, f.chartInstance, [f.id])
        };
        C.prototype.constructor = C;
        C.prototype.updateSwingRange = function (e, b) {
            this.swing[+e] = b
        };
        C.prototype.draw = function (e, b, a, c) {
            var d = c.parentLayer, g = this.conf, l = g.outerCircle, f = g.innerCircle,
                k = Math.ceil(l.rFactor * c.rCalcBase / 2), t = Math.ceil(f.rFactor * c.rCalcBase / 2), n = k - t,
                h = this.rangeGroup, m = this.sliderIndex, w, r, v = c.componentPool, q = v.getKeys();
            g.outerRadius = k;
            g.innerRadius = t;
            this._scaleVal = b;
            f.style["stroke-width"] = n;
            n = Math.ceil(l.style["stroke-width"] / 2);
            t += n;
            r = v.getComponent(this._id, q.KEY_GROUP);
            d = this.node = r("fc-gl-slider", d).attr({cursor: "pointer", transform: "t0,0"});
            "x" === c.key ? e = w = e + (m ? -t : +t) : (w = a, e = a = e + (m ? -t : +t));
            h.initRange(this, e);
            r = v.getComponent(this._id, q.KEY_CIRCLE, !0);
            r(d).attr({
                cx: a,
                cy: w, r: k
            }).css(l.style);
            r(d).attr({cx: a, cy: w, r: t}).css(f.style);
            b = this.tracker = r(d).attr({
                cx: a,
                cy: w,
                r: k + 5,
                ishot: !0,
                fill: A,
                stroke: 0,
                cursor: "pointer"
            }).trackTooltip(g.showTooltip ? !0 : !1).tooltip(b, null, null, !0);
            this._dragAPI = c = this.getDragAPI("x" === c.key);
            b.undrag();
            b.drag(c.dragging, c.dragStart, c.dragEnd);
            return {translateAscending: k + n}
        };
        C.prototype.getDragAPI = function (e) {
            var b = this, a = b.node, c = b.sliderIndex, d = b.rangeGroup, g, l, f, k = b.conf.innerRadius, t;
            return {
                dragging: function (n, h) {
                    var m, w, r, v;
                    n.stopPropagation();
                    n.preventDefault();
                    r = e ? h[1] : h[0];
                    c ? (m = g[0] - g[1] + k, w = 0) : (m = 0, w = g[1] - g[0] - k);
                    v = b.currPos + r;
                    v < m ? r += m - v : v > w && (r -= v - w);
                    a.attr({transform: e ? "t0," + (b.currPos + r) : "t" + (b.currPos + r) + ",0"});
                    l = r;
                    f && clearTimeout(f);
                    f = setTimeout(function () {
                        d.updateWhenInRest(b, b.currPos + r)
                    }, 100);
                    b.tracker.tooltip(d.updateWhenInMove(b, b.currPos + r), null, null, !0);
                    return t = !0
                }, dragStart: function (c) {
                    c.stopPropagation();
                    c.preventDefault();
                    a.attr({transform: e ? "t0," + b.currPos : "t" + b.currPos + ",0"});
                    g = g || b.swing;
                    t = !1;
                    d.dragStarted(b)
                }, dragEnd: function () {
                    var a;
                    d.dragCompleted(b, t, b.currPos + l);
                    t && (f && clearTimeout(f), f = setTimeout(function () {
                        d.updateWhenInRest(b, b.currPos)
                    }, 100), b.currPos += l, a = g[+c] + b.currPos, d.updateRange(b, a))
                }
            }
        };
        O.prototype.constructor = O;
        O.prototype.getValueRatio = function () {
            var e = this.colorRange, b, a, c = e.length, d = this.valueRatio, g = e[0].value, l = e[c - 1].value - g,
                f = 0;
            if (d) return d;
            d = this.valueRatio = [];
            for (a = 0; a < c; a++) b = e[a], b = (b.value - g) / l, d.push(100 * (b - f)), f = b;
            return d
        };
        O.prototype.getCumulativeValueRatio = function () {
            var e = this.colorRange, b,
                a, c = e.length, d = e[0].value, g = e[c - 1].value, l = [];
            for (a = 0; a < c; a++) b = e[a], l.push((b.value - d) / (g - d) * 100);
            return l
        };
        O.prototype.getBoxFill = function (e) {
            var b = this.colorRange, a, c = b.length, d = [], g;
            g = e ? 90 : 0;
            for (a = 0; a < c; a++) e = b[a], d.push(e.code);
            b = {FCcolor: {alpha: "100,100,100", angle: g, color: d.join(","), ratio: this.getValueRatio().join(",")}};
            return H(b)
        };
        O.prototype.getColorByValue = function (e) {
            var b = this.values, a = this.colorRange, c, d, g, l;
            if (void 0 !== e && null !== e) {
                d = 0;
                for (c = b.length; d < c; d++) if (e === b[d]) {
                    l = a[d].code;
                    break
                } else if (!d && e < b[d]) {
                    g = !0;
                    break
                } else if (d === c - 1 && e > b[d]) {
                    g = !0;
                    break
                } else if (e > b[d] && e < b[d + 1]) {
                    b = a[d];
                    c = a[d + 1];
                    a = b.value;
                    d = I(b.code);
                    b = c.value;
                    c = I(c.code);
                    l = l = void 0;
                    l = b - a;
                    l = [Math.round(d[0] + (c[0] - d[0]) / l * (e - a)), Math.round(d[1] + (c[1] - d[1]) / l * (e - a)), Math.round(d[2] + (c[2] - d[2]) / l * (e - a))];
                    l = Y(l);
                    break
                }
                if (!g) return l
            }
        };
        M.prototype = Object.create(aa.prototype);
        M.prototype.constructor = M;
        T.register("component", ["gradientLegend", "gradientLegend", {
            pIndex: 1, enabled: !1, init: function (e) {
                function b(b) {
                    a.data =
                        e.chart.jsonData.colorrange;
                    (l = a.nData = K.legacyDataParser(a.data, b)) ? (a.drawOptions = {
                        smartLabel: c.linkedItems.smartLabel,
                        colorRange: a.colorRange = g = new O(l, b, f),
                        maxOtherSide: b.maxOtherSide
                    }, a._dontPlot = !1, g && g._preparationGoneWrong && (a._dontPlot = !0), a._recalculateLogicalSpace = !0, a._configure()) : a._dontPlot = !0
                }

                var a = this, c = e.chart, d, g, l, f;
                K.init(e);
                f = a._chart = e.chart;
                a._cpool = da(f);
                if (!(d = e.dataExtremes)) return b;
                b(d)
            }, _configure: function () {
                var e = this._chart, b = e.jsonData.chart, a = this.conf = {}, c = b.outcnvbasefont,
                    d = b.outcnvbasefontsize, g = b.outcnvbasefontcolor, e = e.config.dataLabelStyle, l, f, k, t, n, h,
                    m;
                a.caption = D(b.legendcaption);
                a.legendPosition = D(b.legendposition, "bottom").toLowerCase();
                a.showLegend = E(b.showlegend, 1);
                a.interactiveLegend = E(b.interactivelegend, 1);
                a.showLegendLabels = E(b.showlegendlabels, 1);
                l = b.legenditemfontcolor || g;
                f = b.legenditemfont || c;
                k = b.legenditemfontsize || d;
                t = E(b.legenditemfontbold, 0);
                g = b.legendcaptionfontcolor || g;
                c = b.legendcaptionfont || c;
                d = b.legendcaptionfontsize || d;
                n = E(b.legendcaptionfontbold,
                    1);
                m = (h = b.legendaxisbordercolor ? ha(ga(b.legendaxisbordercolor)) : void 0) ? E(b.legendaxisborderalpha, 100) / 100 : void 0;
                a.axisTextItemConf = {
                    style: {
                        fill: l ? V(D(l)) : e.color,
                        fontFamily: f ? D(f) : e.fontFamily,
                        fontSize: k ? E(k) : e.fontSize.match(/\d+/)[0],
                        fontWeight: t ? "bold" : e.fontWeight
                    }
                };
                a.legendCaptionConf = {
                    style: {
                        fill: g ? V(D(g)) : e.color,
                        fontFamily: c ? D(c) : e.fontFamily,
                        fontSize: d ? E(d) : e.fontSize.match(/\d+/)[0],
                        fontWeight: n ? "bold" : e.fontWeight,
                        fontStyle: "normal"
                    }
                };
                a.legendAxisConf = {
                    legendAxisHeight: 11,
                    style: {
                        stroke: h,
                        "stroke-opacity": m
                    },
                    line: {
                        style: {
                            stroke: V(D(b.legendscalelinecolor, "FFF8E9"), E(b.legendscalelinealpha, 100)),
                            "stroke-width": E(b.legendscalelinethickness)
                        }
                    }
                };
                a.sliderGroupConf = {
                    showTooltip: E(b.showtooltip, 1),
                    outerCircle: {
                        rFactor: E(b.sliderdiameterfactor),
                        style: {stroke: V(D(b.legendpointerbordercolor, "757575"), E(b.legendpointerborderalpha, 100))}
                    },
                    innerCircle: {
                        rFactor: E(b.sliderholediameterfactor),
                        style: {stroke: V(D(b.legendpointercolor, "FFFFFF"), E(b.legendpointeralpha, 100))}
                    }
                };
                a.legendCarpetConf = {
                    spreadFactor: E(b.legendspreadfactor),
                    allowDrag: !!E(b.legendallowdrag, 0),
                    captionAlignment: D(b.legendcaptionalignment, "center"),
                    style: {
                        fill: V(D(b.legendbgcolor, "e4d9c1"), E(b.legendbgalpha, 100)),
                        stroke: V(D(b.legendbordercolor, "c4b89d"), E(b.legendborderalpha, 100)),
                        "stroke-width": E(b.legendborderthickness, 1)
                    }
                }
            }, postConfigureInit: function () {
                var e = this.conf, b, a, c, d, g, l, f;
                this.elem = {};
                e.caption && (a = q(K.getDefaultConf("legendCaptionConf"), e.legendCaptionConf), b = new Q(e.caption, a));
                e.interactiveLegend && (a = q(K.getDefaultConf("sliderGroupConf"),
                    e.sliderGroupConf), this.elem.sGroup = d = new p(a), this.listeners && 0 < this.listeners.length && d.registerListener.apply(d, this.listeners));
                a = q(K.getDefaultConf("legendCarpetConf"), e.legendCarpetConf);
                "bottom" === e.legendPosition ? (this.drawOptions.refSideKey = "canvasWidth", this.drawOptions.refOffsetKey = "canvasLeft", a = new U(a), g = q(K.getDefaultConf("axisTextItemConf"), e.axisTextItemConf), l = new y(this.drawOptions.colorRange, K.getDefaultConf("legendBodyConf"), g), c = new J(q(K.getDefaultConf("legendAxisConf"), e.legendAxisConf)),
                e.showLegendLabels && (f = new m(g)), e = new z(g)) : (this.drawOptions.refSideKey = "canvasHeight", this.drawOptions.refOffsetKey = "canvasTop", g = q(K.getDefaultConf("axisTextItemConf"), e.axisTextItemConf), a = new h(a), l = new X(this.drawOptions.colorRange, K.getDefaultConf("legendBodyConf"), g), c = new P(q(K.getDefaultConf("legendAxisConf"), e.legendAxisConf)), e.showLegendLabels && (f = new W(g)), e = new x(g));
                d && c.addCompositions(d, "RANGE");
                f && l.addCompositions(f, "LEGEND_LABEL");
                l.addCompositions(c, "LEGEND_AXIS");
                l.addCompositions(e,
                    "AXIS_VALUE");
                b && a.addCompositions(b, "CAPTION");
                a.addCompositions(l, "LEGEND_BODY");
                this.elem.gl = new M(a, this._cpool)
            }, notifyWhenUpdate: function (e, b, a) {
                var c;
                (c = this.elem && this.elem.sGroup) ? c.registerListener(e, b, a) : this.listeners = [e, b, a]
            }, dispose: function () {
                this.elem && this.elem.gl && this.elem.gl.dispose();
                this.elem = {}
            }, getLogicalSpace: function (e) {
                var b = this.conf, a = {height: 0, width: 0}, c = this.drawOptions, d = this._chart;
                if (!this._recalculateLogicalSpace) return b = c.refSideKey, c = c.refOffsetKey, this.drawOptions.refSide =
                    d.config[b], this.drawOptions.refOffset = d.config[c], (this._logicalArea = this.elem.gl.getLogicalSpace(this.drawOptions, !0)) || a;
                if (this._dontPlot) return a;
                this._recalculateLogicalSpace = !1;
                this.postConfigureInit();
                if (!b.showLegend) return a;
                b = c.refSideKey;
                c = c.refOffsetKey;
                this.drawOptions.refSide = d.config[b];
                this.drawOptions.refOffset = d.config[c];
                this.drawOptions.maxOtherSide = e || this.drawOptions.maxOtherSide;
                return this.elem.gl && (this._logicalArea = this.elem.gl.getLogicalSpace(this.drawOptions, !0))
            }, resetLegend: function () {
                var e;
                (e = this.elem && this.elem.sGroup) && e.reset()
            }, clearListeners: function () {
                var e;
                (e = this.elem && this.elem.sGroup) && e.clearListeners()
            }, draw: function (e, b, a) {
                var c = this.conf;
                this._dontPlot || (this._cpool.init(a.paper), c.showLegend ? (this.drawOptions.paper = a.paper, this.drawOptions.parentGroup = a.parentGroup, this.drawOptions.x = e, this.drawOptions.y = b, this.drawOptions.maxOtherSide = this.drawOptions.maxOtherSide || a.maxOtherSide, e = this.elem.gl.draw(this.drawOptions), e = e.getBBox(), c.xPos = e.x, c.yPos = e.y, c.height = e.height,
                    c.width = e.width, this.enabled = !0) : this.enabled = !1)
            }
        }])
    }]);
    T.register("module", ["private", "modules.renderer.js-maps", function () {
        var q = this, R = q.window, u = q.hcLib, S = u.chartAPI, aa = u.addEvent, U = u.removeEvent, h = u.pluck,
            Q = u.imprint, y = u.extend2, X = u.parseTooltext, m = u.pluckNumber, W = u.graphics.getLightColor,
            z = u.dropHash, x = u.HASHSTRING, J = u.parseUnsafeString, P = u.getDashStyle, p = u.schedular,
            C = y(u.defaultPaletteOptions, {
                foregroundcolor: "333333",
                foregroundalpha: "100",
                foregrounddarkcolor: "111111",
                foregrounddarkalpha: "100",
                foregroundlightcolor: "666666",
                foregroundlightalpha: "100",
                backgroundlightcolor: "FFFFFF",
                backgroundlightalpha: "100",
                backgroundlightangle: 90,
                backgroundlightratio: "",
                backgroundcolor: "FFFFCC",
                backgroundalpha: "100",
                backgrounddarkcolor: "ffcc66",
                backgrounddarkalpha: "100",
                backgrounddarkangle: 270,
                backgrounddarkratio: "",
                shadow: 1
            }), O = u.setLineHeight, M = u.graphics.convertColor, L = R.navigator.userAgent,
            N = /msie/i.test(L) && !R.opera, E = u.hasSVG, D = R.Math, H = D.min, G = D.max, ga = /stroke/ig,
            ha = /AppleWebKit/.test(L), V = D.ceil,
            Y = Math.PI / 180, I = u.hasTouch, R = !u.CREDIT_REGEX.test(R.location.hostname), B = u.toRaphaelColor,
            Z = "rgba(192,192,192," + (N ? .002 : 1E-6) + ")", A = function (b, a) {
                var c;
                b || (b = {});
                for (c in a) b[c] = a[c];
                return b
            }, K = function (b, a) {
                var c = a ? A(b.FCcolor, a) : {FCcolor: b};
                c.toString = B;
                return c
            }, ca = function (b, a) {
                var c, d;
                this.index = a;
                for (d in b) c = C[b[d]], this[d] = c instanceof Array ? c[a] : c
            }, ea = {
                right: function (b, a) {
                    return a
                }, left: function (b, a) {
                    return b - a
                }, center: function (b, a) {
                    return 2 * H(a, b - a)
                }
            }, da = {
                top: function (b, a) {
                    return a
                }, middle: function (b,
                                     a) {
                    return 2 * H(a, b - a)
                }, bottom: function (b, a) {
                    return b - a
                }
            }, fa = function (b, a) {
                var c = b && b.length || !1, d = a || "id", g = {}, l;
                if (!b) return b;
                for (; c--;) l = b[c], void 0 !== l[d] && (g[l[d].toLowerCase()] = l);
                return g
            }, e = u.KdTree;
        A(u.eventList, {entityrollover: "FC_Event", entityrollout: "FC_Event"});
        S("geo", {
            name: "geo",
            friendlyName: "Map",
            revision: 1,
            creditLabel: R,
            hasCanvas: !0,
            standaloneInit: !1,
            defaultDatasetType: "maps",
            baseWidth: 400,
            baseHeight: 300,
            baseScaleFactor: 1,
            defaultSeriesType: "geo",
            fireGroupEvent: !0,
            legendposition: "right",
            hasGradientLegend: !0,
            isMap: !0,
            entities: {},
            init: function (b, a, c, d) {
                var g, l;
                l = a.chart = a.chart || a.graph || a.map || {};
                this.jsonData = a;
                g = this.components = this.components || (this.components = {});
                g.mapAnnotations = g.mapAnnotations || (g.mapAnnotations = new u.Annotations);
                this.components.colorPalette = new ca(this.colorPaletteMap, (0 < l.palette && 6 > l.palette ? l.palette : m(this.paletteIndex, 1)) - 1);
                l = T.register("component", ["caption", "MapCaption"]);
                g.caption || (g.caption = new l);
                S.mscartesian.init.call(this, b, a, c, d)
            },
            configure: function () {
                var b;
                b = this.jsonData;
                var a = b.chart || b.map, c = b.markers,
                    d = new ca(this.colorPaletteMap, (0 < a.palette && 6 > a.palette ? a.palette : m(this.paletteIndex, 1)) - 1),
                    g, l, f, k, e = h(a.entitybordercolor, a.bordercolor, d.plotbordercolor),
                    n = h(a.entityfillcolor, a.fillcolor, d.plotfillcolor),
                    F = h(a.entityfillalpha, a.fillalpha, d.plotfillalpha),
                    ba = h(a.entityfillratio, a.fillratio, d.plotfillratio),
                    w = h(a.entityfillangle, a.fillangle, d.plotfillangle),
                    r = h(a.nullentityfillcolor, a.nullentitycolor, n),
                    v = m(a.usevaluesformarkers, b.markers && b.markers.items &&
                        b.markers.items.length, !(b.markers && b.markers.application && b.markers.application.length && b.markers.definition && b.markers.definition.length));
                this.base.base.configure.call(this);
                b = this.config;
                b.origMarginTop = m(a.charttopmargin, a.maptopmargin, 11);
                b.origMarginLeft = m(a.chartleftmargin, a.mapleftmargin, 11);
                b.origMarginBottom = m(a.chartbottommargin, a.mapbottommargin, 11);
                b.origMarginRight = m(a.chartrightmargin, a.maprightmargin, 11);
                k = b.style;
                g = k.inCancolor;
                l = k.inCanfontFamily;
                f = k.inCanfontSize;
                b.entityOpts =
                    {
                        baseScaleFactor: this.baseScaleFactor,
                        dataLabels: {
                            style: {
                                fontFamily: l,
                                fontSize: f,
                                lineHeight: k.inCanLineHeight,
                                color: k.inCancolor
                            }
                        },
                        fillColor: n,
                        fillAlpha: F,
                        fillRatio: ba,
                        fillAngle: w,
                        borderColor: e,
                        borderAlpha: h(a.entityborderalpha, a.borderalpha, this.borderAlpha, "100"),
                        borderThickness: m(a.showentityborder, a.showborder, 1) ? m(a.entityborderthickness, a.borderthickness, 1) : 0,
                        scaleBorder: m(a.scaleentityborder, a.scaleborder, 0),
                        hoverFillColor: h(a.entityfillhovercolor, a.hoverfillcolor, a.hovercolor, d.plothoverfillcolor),
                        hoverFillAlpha: h(a.entityfillhoveralpha, a.hoverfillalpha, a.hoveralpha, d.plothoverfillalpha),
                        hoverFillRatio: h(a.entityfillhoverratio, a.hoverfillratio, a.hoverratio, d.plothoverfillratio),
                        hoverFillAngle: h(a.entityfillhoverangle, a.hoverfillangle, a.hoverangle, d.plothoverfillangle),
                        hoverBorderThickness: h(a.entityborderhoverthickness, a.hoverborderthickness),
                        hoverBorderColor: h(a.entityborderhovercolor, d.plotbordercolor),
                        hoverBorderAlpha: h(a.entityborderhoveralpha, d.plotborderalpha),
                        nullEntityColor: r,
                        nullEntityAlpha: h(a.nullentityfillalpha,
                            a.nullentityalpha, F),
                        nullEntityRatio: h(a.nullentityfillratio, a.nullentityratio, ba),
                        nullEntityAngle: h(a.nullentityfillangle, a.nullentityangle, w),
                        connectorColor: h(a.labelconnectorcolor, a.connectorcolor, g),
                        connectorAlpha: h(a.labelconnectoralpha, a.connectoralpha, "100"),
                        connectorThickness: m(a.labelconnectorthickness, a.borderthickness, 1),
                        showHoverEffect: m(a.showentityhovereffect, a.usehovercolor, a.showhovereffect, 1),
                        hoverOnNull: m(a.hoveronnull, a.entityhoveronnull, 1),
                        labelPadding: m(a.labelpadding, 5),
                        showLabels: m(a.showlabels,
                            1),
                        labelsOnTop: m(a.entitylabelsontop, 1),
                        includeNameInLabels: m(a.includenameinlabels, 1),
                        includeValueInLabels: m(a.includevalueinlabels, 0),
                        useSNameInTooltip: m(a.usesnameintooltip, 0),
                        useShortName: m(a.usesnameinlabels, 1),
                        labelSepChar: h(a.labelsepchar, ", "),
                        showTooltip: m(a.showentitytooltip, a.showtooltip, 1),
                        tooltipSepChar: h(a.tooltipsepchar, ", "),
                        tooltext: a.entitytooltext,
                        hideNullEntities: m(a.hidenullentities, 0),
                        showHiddenEntityBorder: m(a.showhiddenentityborder, 1),
                        showNullEntityBorder: m(a.shownullentityborder,
                            1),
                        hiddenEntityColor: h(a.hiddenentitycolor, a.hiddenentityfillcolor, a.hiddenentityalpha || a.hiddenentityfillalpha ? r : "ffffff"),
                        hiddenEntityAlpha: h(a.hiddenentityalpha, a.hiddenentityfillalpha, .001),
                        shadow: m(a.showshadow, this.defaultPlotShadow, d.shadow)
                    };
                b.markerOpts = {
                    dataLabels: {
                        style: {
                            fontFamily: h(a.markerfont, l),
                            fontSize: m(a.markerfontsize, parseInt(f, 10)),
                            fontColor: h(a.markerfontcolor, g)
                        }
                    },
                    showTooltip: m(a.showmarkertooltip, a.showtooltip, 1),
                    showLabels: m(a.showmarkerlabels, a.showlabels, 1),
                    showHoverEffect: m(a.showmarkerhovereffect,
                        1),
                    labelPadding: h(a.markerlabelpadding, "5"),
                    labelWrapWidth: m(a.markerlabelwrapwidth, 0),
                    labelWrapHeight: m(a.markerlabelwrapheight, 0),
                    fillColor: h(a.markerfillcolor, a.markerbgcolor, d.markerfillcolor),
                    fillAlpha: h(a.markerfillalpha, d.markerfillalpha),
                    fillAngle: h(a.markerfillangle, d.markerfillangle),
                    fillRatio: h(a.markerfillratio, d.markerfillratio),
                    fillPattern: h(a.markerfillpattern, d.markerbgpattern),
                    hoverFillColor: a.markerfillhovercolor,
                    hoverFillAlpha: a.markerfillhoveralpha,
                    hoverFillRatio: a.markerfillhoverratio,
                    hoverFillAngle: a.markerfillhoverangle,
                    borderThickness: h(a.markerborderthickness, 1),
                    borderColor: h(a.markerbordercolor, d.markerbordercolor),
                    borderAlpha: m(a.markerborderalpha, d.markerborderalpha),
                    hoverBorderThickness: a.markerborderhoverthickness,
                    hoverBorderColor: a.markerborderhovercolor,
                    hoverBorderAlpha: a.markerborderhoveralpha,
                    radius: m(a.markerradius && u.trimString(a.markerradius), 7),
                    shapeId: h(a.defaultmarkershape, "circle"),
                    labelSepChar: h(a.labelsepchar, ", "),
                    tooltipSepChar: h(a.tooltipsepchar, ", "),
                    autoScale: m(a.autoscalemarkers, 0),
                    tooltext: h(c && c.tooltext, a.markertooltext),
                    dataEnabled: v,
                    valueToRadius: m(a.markerradiusfromvalue, 1),
                    valueMarkerAlpha: h(a.valuemarkeralpha, "75"),
                    hideNull: m(a.hidenullmarkers, 0),
                    nullRadius: m(a.nullmarkerradius, a.markerradius, 7),
                    adjustViewPort: m(a.adjustviewportformarkers, 0),
                    startAngle: m(a.markerstartangle, 90),
                    maxRadius: m(a.maxmarkerradius, 0),
                    minRadius: m(a.minmarkerradius, 0),
                    applyAll: m(a.applyallmarkers, 0),
                    shadow: m(a.showmarkershadow, a.showshadow, 0)
                };
                b.connectorOpts =
                    {
                        showHoverEffect: m(a.showconnectorhovereffect, 1),
                        thickness: m(a.connectorthickness, a.markerconnthickness, "2"),
                        color: h(a.connectorcolor, a.markerconncolor, d.markerbordercolor),
                        alpha: h(a.connectoralpha, a.markerconnalpha, "100"),
                        hoverThickness: m(a.connectorhoverthickness, a.connectorthickness, a.markerconnthickness, "2"),
                        hoverColor: h(a.connectorhovercolor, a.connectorcolor, a.markerconncolor, d.markerbordercolor),
                        hoverAlpha: h(a.connectorhoveralpha, a.connectoralpha, a.markerconnalpha, "100"),
                        dashed: m(a.connectordashed,
                            a.markerconndashed, 0),
                        dashLen: m(a.connectordashlen, a.markerconndashlen, 3),
                        dashGap: m(a.connectordashgap, a.markerconndashgap, 2),
                        font: h(a.connectorfont, a.markerconnfont, l),
                        fontColor: h(a.connectorfontcolor, a.markerconnfontcolor, g),
                        fontSize: m(a.connectorfontsize, a.markerconnfontsize, parseInt(f, 10)),
                        showLabels: m(a.showconnectorlabels, a.showmarkerlabels, a.showlabels, 1),
                        labelBgColor: h(a.connectorlabelbgcolor, a.markerconnlabelbgcolor, d.plotfillcolor),
                        labelBorderColor: h(a.connectorlabelbordercolor, a.markerconnlabelbordercolor,
                            d.markerbordercolor),
                        shadow: m(a.showconnectorshadow, a.showmarkershadow, a.showshadow, 0),
                        showTooltip: m(a.showconnectortooltip, a.showmarkertooltip, a.showtooltip, 1),
                        tooltext: h(c && c.connectortooltext, a.connectortooltext),
                        hideOpen: m(a.hideopenconnectors, 1)
                    };
                b.adjustViewPortForMarkers = m(a.adjustviewportformarkers, v)
            },
            _createLayers: function () {
                var b = this.graphics || (this.graphics = {}), a = this.components.paper, b = this.graphics;
                b.backgroundGroup = b.backgroundGroup || a.group("background");
                b.canvasGroup = b.canvasGroup ||
                    a.group("canvas");
                b.shadowGroup = b.shadowGroup || a.group("shadow");
                b.datasetGroup = b.datasetGroup || a.group("dataset");
                b.datalabelsGroup = b.datalabelsGroup || a.group("datalabel");
                b.legendGroup = b.legendGroup || a.group("legend");
                b.captionGroup = b.captionGroup || a.group("caption");
                b.captionGroup.trackTooltip(!0);
                b.datasetGroup.trackTooltip(!0);
                b.buttonGroup = b.buttonGroup || a.group("buttons");
                this._attachMouseEvents()
            },
            _attachMouseEvents: function () {
                var b = this.linkedItems, b = b.eventListeners || (b.eventListeners = []),
                    a = this.linkedItems.container;
                U(a, I ? "touchstart" : "mousemove", this.searchMouseMove);
                b.push(aa(a, "touchstart mousemove", this.searchMouseMove, this))
            },
            searchMouseMove: function (b) {
                var a = b.data, c = a.config, d = {};
                if (a.linkedItems.container) {
                    var d = u.getMouseCoordinate(a.linkedItems.container, b), g = d.chartX, l = d.chartY, f = a.config,
                        k = f.canvasLeft, e = f.canvasTop, n = f.canvasLeft + f.canvasWidth,
                        f = f.canvasHeight + f.canvasTop;
                    d.insideCanvas = !1;
                    d.originalEvent = b;
                    g > k && g < n && l > e && l < f && (d.insideCanvas = !0);
                    d && d.insideCanvas && (c.lastMouseEvent =
                        b, d = {x: d.chartX, y: d.chartY}, a._searchNearestNeighbour(d))
                }
            },
            _searchNearestNeighbour: function (b) {
                var a = this.components.dataset[1];
                a && a.components.kDTree && ((b = a.getElement(b)) ? this.config.lastHoveredPoint !== b && a.highlightPoint(b) : a.highlightPoint(!1))
            },
            _createDatasets: function () {
                var b = this.components, a = this.jsonData, c = this.defaultDatasetType, d = a.data || {},
                    g = a.markers, a = 0, l = this.components.dataset, l = b.dataset || (b.dataset = []);
                c && c.toLowerCase();
                if (c = T.get("component", ["dataset", "Entities"])) l[a] ? (l[a].JSONData =
                    d, l[a].configure()) : (b = new c, l.push(b), b.chart = this, b.index = void 0, b.init(d)), a++;
                c = T.get("component", ["dataset", "Markers"]);
                b = l[a];
                c && g ? l[a] ? (b.index = void 0, b.init(g), l[a].configure()) : (b = new c, l.push(b), b.chart = this, b.index = void 0, b.init(g)) : (d = b && b.type, "markers" === d && l.splice(a, 1))
            },
            _parseBackgroundCosmetics: function () {
                var b = this.components.background.config, a = this.components.colorPalette, c = this.jsonData.chart, d;
                d = b.showBorder = m(c.showcanvasborder, 1);
                b.borderWidth = d = d ? m(c.canvasborderthickness,
                    1) : 0;
                b.borderRadius = b.borderRadius = m(c.canvasborderradius, 0);
                b.borderDashStyle = b.borderDashStyle = m(c.borderdashed, 0) ? P(m(c.borderdashlen, 4), m(c.borderdashgap, 2), d) : "none";
                b.borderColor = b.borderColor = M(h(c.canvasbordercolor, a && a.borderColor));
                b.borderAlpha = h(c.canvasborderalpha, a.borderAlpha)
            },
            _getBackgroundCosmetics: function () {
                var b = this.jsonData.chart || this.jsonData.map, a = this.components.colorPalette;
                return {
                    FCcolor: {
                        color: h(b.bgcolor, b.canvasbgcolor, a.bgcolor),
                        alpha: h(b.bgalpha, b.canvasbgalpha, a.bgalpha),
                        angle: h(b.bgangle, b.canvasbgangle, a.bgangle),
                        ratio: h(b.bgratio, b.canvasbgratio, a.bgratio)
                    }
                }
            },
            _parseCanvasCosmetics: function () {
                var b = this.config, a = this.jsonData.chart || this.jsonData.map, c = this.components.canvas.config;
                b.origMarginTop = m(a.maptopmargin, 11);
                b.origMarginLeft = m(a.mapleftmargin, 11);
                b.origMarginBottom = m(a.mapbottommargin, 11);
                b.origMarginRight = m(a.maprightmargin, 11);
                b.origCanvasLeftMargin = m(a.canvasleftmargin, 0);
                b.origCanvasRightMargin = m(a.canvasrightmargin, 0);
                b.origCanvasTopMargin = m(a.canvastopmargin,
                    0);
                b.origCanvasBottomMargin = m(a.canvasbottommargin, 0);
                c.canvasBorderRadius = m(a.canvasborderradius, 0);
                c.origCanvasTopPad = m(a.canvastoppadding, 0);
                c.origCanvasBottomPad = m(a.canvasbottompadding, 0);
                c.origCanvasLeftPad = m(a.canvasleftpadding, 0);
                c.origCanvasRightPad = m(a.canvasrightpadding, 0)
            },
            draw: function () {
                this.config.entitiesDrawn = !1;
                this.config.hasChartMessage ? (this._hide(), this.drawChartMessage()) : (this._show(), this.chartMenuTools.reset(this.components.tb, this), this._createToolBox(), this._manageSpace(),
                    this._updateVisuals(), this.inited = !0, this.chartInstance.jsVars.drawCount += 1, this.chartInstance.__state.dataReady = !0, this.chartInstance.jsVars.hasNativeMessage = !1)
            },
            _drawDataset: function () {
                var b = this.chartInstance, a = this.components.dataset, c = this.graphics, d = a.length,
                    g = this.config.scalingParams;
                c.datasetGroup.hide();
                c.shadowGroup.hide();
                this.config.entitiesReady = !1;
                b.addEventListener("internal.mapdrawingcomplete", function () {
                    return function (a) {
                        a.detachHandler();
                        E && (c.datasetGroup && c.datasetGroup.attr({transform: g.transformStr}),
                        c.shadowGroup && c.shadowGroup.attr({transform: g.transformStr}));
                        c.datasetGroup && c.datasetGroup.show();
                        c.shadowGroup && c.shadowGroup.show()
                    }
                }());
                for (b = 0; b < d; b++) a[b].draw();
                this.checkComplete()
            },
            preliminaryScaling: function () {
                for (var b = this.jsonData, a = (b = b.markers && b.markers.items || [], b.length) || 0, c = Infinity, d = Infinity, g = -Infinity, l = -Infinity, f, k; a--;) k = b[a], f = Number(k.x), k = Number(k.y), c = H(c, f), d = H(d, k), g = G(g, f), l = G(l, k);
                return {x: c, y: d, x1: g, y1: l}
            },
            getScalingParameters: function (b, a, c, d) {
                var g = b / a, l = c /
                    (b * this.baseScaleFactor), f = d / (a * this.baseScaleFactor), k = 0, e = 0;
                l > f ? (l = f, k += (c - d * g) / 2, b = 200 / (a * l)) : (e += (d - c / g) / 2, b = 200 / (b * l));
                return {scaleFactor: l, strokeWidth: b, translateX: k, translateY: e}
            },
            calculateMarkerBounds: function (b, a, c) {
                var d = this.config, g = d.markerOpts, l = this.components.dataset, f = this.getDataLimits(),
                    k = f.dataMin, f = f.dataMax, e = g.hideNull, n = g.nullRadius, g = g.valueToRadius, h, m, w, r,
                    v = Infinity, q = Infinity, p = -Infinity, y = -Infinity, u;
                w = 0;
                for (r = l.length; w < r; w++) d = l[w], m = d.type, "markers" === m && (h = d);
                if (h) for (w in h.calculateMarkerRadiusLimits(),
                    m = h.conf || {}, l = m.minRadius, m = m.maxRadius, h = h.components && h.components.markerObjs || {}, h) d = h[w], d = d.config, u = d.definition || {}, null !== d.cleanValue ? (g && void 0 === u.radius && (d.radius = l + (m - l) * (d.cleanValue - k) / (f - k)), r = Number(d.radius), d = (Number(u.x) + a) * b, u = (Number(u.y) + c) * b, v = H(v, d - r), q = H(q, u - r), p = G(p, d + r), y = G(y, u + r)) : e ? d.__hideMarker = !0 : null === d.radius && (d.radius = n);
                return {x: v, y: q, x1: p, y1: y}
            },
            _spaceManager: function () {
                var b = this.config, a = this.components.legend.config.legendPos, c = this.jsonData.chart,
                    d = b.origMarginLeft,
                    g = b.origMarginTop, l = this.baseWidth, f = this.baseHeight, k, e = {}, n = 0, h = 0, ba,
                    e = b.markerOpts, c = b.borderWidth = b.showBorder ? m(c.borderthickness, 1) : 0;
                this._allocateSpace({top: c, bottom: c, left: c, right: c});
                this._allocateSpace(this._manageActionBarSpace && this._manageActionBarSpace(.225 * b.availableHeight) || {});
                this._manageLegendSpace("right" === a ? .3 * b.canvasWidth : .3 * b.canvasHeight);
                a = this._manageChartMenuBar("bottom" === a ? .225 * b.canvasHeight : .225 * b.canvasWidth);
                c = b.canvasWidth;
                k = b.canvasHeight;
                e.dataEnabled ? (b.adjustViewPortForMarkers ?
                    (e = this.preliminaryScaling(), e.x1 > l && (l = e.x1), 0 > e.x && (l += -e.x, n = -e.x), e.y1 > f && (f = e.y1), 0 > e.y && (f += -e.y, h = -e.y), b = this.getScalingParameters(l, f, c, k), e = this.calculateMarkerBounds(b.scaleFactor * this.baseScaleFactor, n, h), b = k, ba = c, 0 > e.x && (d += -e.x, c += e.x), 0 > e.y && (g += -e.y, k += e.y), e.x1 > ba && (c -= e.x1 - ba), e.y1 > b && (k -= e.y1 - b)) : (b = this.getScalingParameters(l, f, c, k), this.calculateMarkerBounds(b.scaleFactor * this.baseScaleFactor, n, h)), b = this.getScalingParameters(l, f, c, k), d += n * b.scaleFactor * this.baseScaleFactor, g +=
                    h * b.scaleFactor * this.baseScaleFactor) : b = this.getScalingParameters(l, f, c, k);
                this.config.scalingParams = b;
                l = b.scaleFactor;
                b.translateX += d;
                b.translateY = b.translateY + g + a.top || 0;
                b.sFactor = l * this.baseScaleFactor * 100 / 100;
                b.transformStr = ["t", b.translateX, ",", b.translateY, "s", l, ",", l, ",0,0"].join("");
                this.config.annotationConfig = {
                    id: "geo",
                    showbelow: 0,
                    autoscale: 0,
                    grpxshift: b.translateX ? b.translateX : 0,
                    grpyshift: b.translateY ? b.translateY : 0,
                    xscale: 100 * (l ? l * this.baseScaleFactor : 1),
                    yscale: 100 * (l ? l * this.baseScaleFactor :
                        1),
                    options: {useTracker: !0}
                };
                this.components.mapAnnotations.reset(null, this.config.annotationConfig, this);
                this.components.mapAnnotations._renderer && (this.components.mapAnnotations._renderer = null)
            },
            getDataLimits: function () {
                var b = this.components.dataset, a = b.length, c, d = Infinity, g = -Infinity, l;
                for (l = 0; l < a; l++) c = b[l], c = c.getDataLimits(), d = H(d, c.min), g = G(g, c.max);
                return {dataMin: d, dataMax: g}
            },
            getEntityPaths: function (b) {
                var a = {}, c = this.entities, d;
                if (b) {
                    for (d in c) a[d] = c[d];
                    return a
                }
                return c
            },
            checkComplete: function () {
                var b =
                        this, a = b.getJobList(), c = b.components.mapAnnotations,
                    d = b.components.mapLabelAnnotations || [], g = d.length, l, f, k = function (a, k) {
                        return function () {
                            l.draw.call(a, k, !0);
                            b.config.labelDrawCount++;
                            if (b.config.labelDrawCount === g && e && (h = c.groups && c.groups[0] && c.groups[0].wrapper)) for (f = 0; f < g; f++) (m = d[f].groups[0] && d[f].groups[0].wrapper) && m.insertAfter(h)
                        }
                    }, e = b.config.entityOpts.labelsOnTop, h, m;
                b.config.labelDrawCount = 0;
                if (b.config.entityFlag && b.config.entitiesReady) {
                    b.config.entityFlag = !1;
                    for (f = 0; f < g; f++) l = d[f],
                        a.labelDrawID.push(p.addJob(k(l, b), u.priorityList.label, !0));
                    c.draw(b);
                    b.config.markersDrawn = !0;
                    q.raiseEvent("internal.mapdrawingcomplete", {renderer: b}, b.chartInstance)
                }
            },
            colorPaletteMap: {
                basefontcolor: "foregroundcolor",
                bordercolor: "foregrounddarkcolor",
                borderalpha: "foregrounddarkalpha",
                bgcolor: "backgroundlightcolor",
                bgalpha: "backgroundlightalpha",
                bgangle: "backgroundlightangle",
                bgratio: "backgroundlightratio",
                canvasbordercolor: "foregrounddarkcolor",
                canvasborderalpha: "foregrounddarkalpha",
                canvasbgcolor: "backgroundlightcolor",
                canvasbgalpha: "backgroundlightalpha",
                canvasbgangle: "backgroundlightangle",
                canvasbgratio: "backgroundlightratio",
                tooltipbordercolor: "foregrounddarkcolor",
                tooltipborderalpha: "foregrounddarkalpha",
                tooltipbgcolor: "backgroundlightcolor",
                tooltipbgalpha: "backgroundlightalpha",
                tooltipfontcolor: "foregroundcolor",
                legendbordercolor: "foregrounddarkcolor",
                legendborderalpha: "foregrounddarkalpha",
                markerbordercolor: "foregroundlightcolor",
                markerborderalpha: "foregroundlightalpha",
                markerfillcolor: "backgrounddarkcolor",
                markerfillalpha: "backgrounddarkalpha",
                markerfillangle: "backgrounddarkangle",
                markerfillratio: "backgrounddarkratio",
                plotfillcolor: "backgroundcolor",
                plotfillalpha: "backgroundalpha",
                plotfillangle: "backgroundangle",
                plotfillratio: "backgroundratio",
                plothoverfillcolor: "backgrounddarkcolor",
                plothoverfillalpha: "backgrounddarkalpha",
                plothoverfillangle: "backgrounddarkangle",
                plothoverfillratio: "backgrounddarkratio",
                plotbordercolor: "foregroundcolor",
                plotborderalpha: "foregroundalpha",
                shadow: "shadow"
            },
            eiMethods: {
                getMapName: function () {
                    var b =
                        this.jsVars.instanceAPI;
                    return "string" === typeof b.name && b.name.toLowerCase()
                }, getEntityList: function () {
                    var b = this.jsVars.instanceAPI.components.dataset || [], a, c, d, g = b.length, l = [], f;
                    for (a = 0; a < g; a++) if (d = b[a] || [], f = d.type, "entity" === f) {
                        c = d;
                        break
                    }
                    b = c.components.data;
                    for (a in b) b.hasOwnProperty(a) && (c = b[a] || {}, c = c.config || {}, l.push({
                        id: c.id,
                        originalId: c.originalId || c.id,
                        label: c.label,
                        shortlabel: c.shortLabel,
                        value: c.value,
                        formattedValue: c.formattedValue,
                        toolText: c.toolText
                    }));
                    return l
                }, getMapAttribute: function () {
                    q.raiseWarning(this,
                        "12061210581", "run", "JavaScriptRenderer~getMapAttribute()", 'Use of deprecated "getMapAttribute()". Replace with "getChartAttribute()".');
                    return this.getChartAttribute.apply(this, arguments)
                }, exportMap: function () {
                    q.raiseWarning(this, "12061210581", "run", "JavaScriptRenderer~exportMap()", 'Use of deprecated "exportMap()". Replace with "exportChart()".');
                    return this.exportChart && this.exportChart.apply(this, arguments)
                }, addMarker: function (b) {
                    var a = this.jsVars.instanceAPI.components.dataset || [], c = a.length,
                        d, g, l, f;
                    for (d = 0; d < c; d++) if (g = a[d] || [], f = g.type, "markers" === f) {
                        l = g;
                        break
                    }
                    l && !l.addMarkerItem(b) && q.raiseWarning(this, "1309264086", "run", "MapsRenderer~addMarker()", "Failed to add marker. Check the options and try again.")
                }, updateMarker: function (b, a) {
                    var c = this.jsVars.instanceAPI.components.dataset || [], d = c.length, g, l, f, k;
                    for (g = 0; g < d; g++) if (l = c[g] || [], k = l.type, "markers" === k) {
                        f = l;
                        break
                    }
                    f && b && (b = (b + "").toLowerCase(), f.updateMarkerItem(b, a))
                }, removeMarker: function (b) {
                    var a = this.jsVars.instanceAPI.components.dataset ||
                        [], c = a.length, d, g, l, f;
                    for (d = 0; d < c; d++) if (g = a[d] || [], f = g.type, "markers" === f) {
                        l = g;
                        break
                    }
                    b && (b = (b + "").toLowerCase(), l._removeMarkerItem(b))
                }
            },
            _createAxes: function () {
            }
        }, S.mscartesian);
        T.register("component", ["caption", "MapCaption", {
            configure: function () {
                var b = this.chart, a = b.jsonData.chart, c = b.components, d = c.caption.config, g = b.config.style,
                    b = g.outCanfontFamily, l = g.outCancolor, g = g.fontSize, f = ["top", "center"],
                    c = c.subCaption.config;
                d.style = {
                    fontFamily: h(a.captionfont, b),
                    color: M(h(a.captionfontcolor, l).replace(/^#? ([a-f0-9]+)/ig,
                        "#$1")),
                    fontSize: m(a.captionfontsize, g + 3) + "px",
                    fontWeight: 0 === m(a.captionfontbold) ? "normal" : "bold"
                };
                d.align = c.align = h(a.captionposition, "center");
                d.align && (f = d.align.split("-"), f[0] && (f[0] = f[0].toLowerCase()), f[1] && (f[1] = f[1].toLowerCase()));
                d.isOnTop = "bottom" === f[0] ? c.isOnTop = 0 : c.isOnTop = 1;
                switch (f[1]) {
                    case "right":
                        d.align = "end";
                        break;
                    case "left":
                        d.align = "start";
                        break;
                    default:
                        d.align = "middle"
                }
                d.alignWithCanvas = c.alignWithCanvas = m(a.aligncaptionwithcanvas, 1);
                d.horizontalPadding = c.horizontalPadding =
                    m(a.captionhorizontalpadding, d.alignWithCanvas ? 0 : 15);
                d.drawCaption = !0;
                O(d.style);
                c.style = {
                    fontFamily: h(a.subcaptionfont, a.captionfont, b),
                    color: M(h(a.subcaptionfontcolor, a.captionfontcolor, l).replace(/^#? ([a-f0-9]+)/ig, "#$1")),
                    fontSize: m(a.subcaptionfontsize, m(G(m(a.captionfontsize) - 3, -1), g) + m(this.subTitleFontSizeExtender, 1)) + "px",
                    fontWeight: 0 === m(a.subcaptionfontbold, this.subTitleFontWeight, a.captionfontbold) ? "normal" : "bold"
                };
                O(c.style)
            }
        }, "Caption"]);
        T.register("component", ["dataset", "Entities",
            {
                customConfigFn: "_createDatasets", type: "entity", pIndex: 2, configure: function () {
                    var b = this.chart, a = b.jsonData, c = this.conf, d = b.components, g = a.map || a.chart, l,
                        b = u.nonGradientColorRange, f = (a.colorrange || {}).gradient, k = d.postLegendInitFn,
                        e = d.numberFormatter, h, F = {}, d = a.entitydef || [];
                    l = a.data && a.data[0] && a.data[0].data ? this.JSONData = a.data[0].data || [] : this.JSONData = a.data || [];
                    c.useSNameAsId = m(g.usesnameasid, 0);
                    this._redefineEntities(d);
                    d = this.components.data;
                    c.showTooltip = m(g.showtooltip, 1);
                    c.showHoverEffect =
                        m(g.showhovereffect, 0);
                    l = (c = l) && c.length || 0;
                    for (g = {}; l--;) F = c[l], void 0 !== F.id && (g[F.id.toLowerCase()] = F);
                    l = g;
                    this.calculateDataLimits();
                    F = this.getDataLimits();
                    f ? k({min: F.min, max: F.max}) : this.components.colorRange = new b({
                        colorRange: a.colorrange,
                        dataMin: F.min,
                        dataMax: F.max,
                        defaultColor: "#00ff00",
                        numberFormatter: e
                    });
                    for (h in d) a = l[h], b = d[h], b.dataset = this, a ? this._configureEntity(h, b, Q(this._sanitizeEntityOptions(y({}, a)), b.config)) : this._configureEntity(h, b, b.config);
                    this._addLegend()
                }, init: function (b) {
                    this.JSONData =
                        {data: b};
                    this.components = {};
                    this.conf = {};
                    this.graphics = {};
                    this.configure()
                }, updateEntityColors: function (b, a) {
                    var c = this.components.data, d = this.chart, g, l, f, k, e = {"fill-opacity": 0};
                    for (k in c) g = c[k], l = g.config, f = l.cleanValue, l = l.alphaArr || [], l = {"fill-opacity": l[0] / 100 || 1}, f < b || f > a ? (this.setCustomAttrs(g, e, d), g.hidden = !0) : (g.hidden = !1, this.setCustomAttrs(g, l, d))
                }, _addLegend: function () {
                    var b = this.chart.components.legend, a = (this.components.colorRange || {}).colorArr || [],
                        c = this.components.entityColorMap = this.components.entityColorMap ||
                            (this.components.entityColorMap = []), d, g, l = a.length, f, k, e;
                    b.emptyItems();
                    g = c.length = 0;
                    for (l = a.length; g < l; g++) d = a[g], k = h(d.code, d.color), f = W(k, 60).replace(z, x), e = W(k, 40), k = {
                        FCcolor: {
                            color: k + "," + k + "," + e + "," + k + "," + k,
                            ratio: "0,70,30",
                            angle: 270,
                            alpha: "100,100,100,100,100"
                        }
                    }, f = {
                        fillColor: B(k),
                        label: h(d.label, d.displayvalue),
                        strokeColor: B(f),
                        legendItemId: d.legendItemId
                    }, (k = c[g]) || (k = c[g] = {config: {}}), k.config = d, k.visible = !0, k.dataset = this, k.legendItemId = b.addItems(k, this.legendInteractivity, f)
                }, legendInteractivity: function (b,
                                                  a) {
                    var c = this.config, d = b.config, g = b.visible, l = b.dataset, f = l.chart, k = l.components.data,
                        e, h, m = a.config, ba = a.graphics, w, r = l.components.colorRange,
                        v = c.itemHiddenStyle.color, c = c.itemStyle.color, q = m.fillColor;
                    h = {};
                    var p, u = {}, y = {"fill-opacity": 0}, x = m.strokeColor;
                    b.visible = !g;
                    for (e in k) k.hasOwnProperty(e) && (h = k[e], m = h.config, w = m.cleanValue, w = r.getColorObj(w), m = m.visibleEntityAttr, u["fill-opacity"] = m["fill-opacity"], m = g ? y : u, d.code === w.code && (h.hidden = g ? !0 : !1, l.setCustomAttrs(h, m, f)));
                    h = {
                        legendItemSymbol: {
                            fill: g ?
                                v : q, stroke: g ? v : x
                        }, legendItemText: {fill: g ? v : c}, legendIconLine: {stroke: g ? v : q}
                    };
                    for (p in ba) (d = ba[p]) && d.attr && d.attr(h[p])
                }, setCustomAttrs: function (b, a, c) {
                    var d = c.get("config", "animationObj");
                    c = d.transposeAnimDuration;
                    d = d.animType;
                    b && (b = b.graphics, b = b.outlines, b.animate(a, c, d))
                }, calculateDataLimits: function () {
                    var b = this.chart, a = this.conf, c = b.jsonData.data || [], b = b.components.numberFormatter, d,
                        g = Infinity, l = -Infinity, f, k;
                    k = 0;
                    for (f = c.length; k < f; k++) d = c[k].value, d = b.getCleanValue(d), g = H(g, d), l = G(l, d);
                    a.max =
                        l;
                    a.min = g
                }, _configureEntity: function (b, a, c) {
                    var d = this.chart, g = this.conf, l = d.jsonData, f = d.components, k = f.numberFormatter,
                        e = d.config.entityOpts, n = a.config, d = a.labelConfig, F = c.value,
                        q = l.colorrange && l.colorrange.gradient, w = (f = f.gradientLegend) && f.colorRange,
                        r = this.components.colorRange, f = n.cleanValue = k.getCleanValue(F),
                        v = n.formattedValue = void 0 !== f ? k.dataLabels(f) : void 0,
                        k = m(c.showtooltip, e.showTooltip), l = this._getDefaultTooltip.call(a, c, this),
                        v = {formattedValue: v, sName: c.shortLabel, lName: c.label}, p =
                            e.dataLabels.style,
                        k = n.toolText = k ? J(h(X(h(c.tooltext, e.tooltext, l), [1, 2, 7, 38, 39], v, c))) : "",
                        l = n.borderColor = h(c.bordercolor, e.borderColor),
                        v = n.borderAlpha = h(c.borderalpha, e.borderAlpha),
                        u = n.borderThickness = m(c.borderthickness, e.borderThickness),
                        y = n.useHoverColor = m(c.showhovereffect, c.usehovercolor, e.hoverOnNull ? e.showHoverEffect : isNaN(F) ? 0 : e.showHoverEffect),
                        F = n.labelAlignment, x;
                    a.hidden = !1;
                    n.showLabel = m(c.showlabel, e.showLabels);
                    n.labelPadding = m(c.labelpadding, e.labelPadding);
                    n.fontFamily = h(c.font,
                        p.fontFamily);
                    n.fontSize = m(parseInt(c.fontsize, 10), parseInt(p.fontSize, 10));
                    n.fontBold = m(c.fontbold, 0);
                    n.fontColor = h(c.fontcolor, p.color);
                    n.connectorColor = h(c.labelconnectorcolor, e.connectorColor);
                    n.connectorAlpha = h(c.labelconnectoralpha, e.connectorAlpha);
                    n.hoverBorderThickness = m(c.borderhoverthickness, c.hoverborderthickness, e.hoverBorderThickness);
                    n.hoverBorderColor = h(c.borderhovercolor, c.hoverbordercolor, e.hoverBorderColor, n.borderColor);
                    n.hoverBorderAlpha = h(c.borderhoveralpha, c.hoverborderalpha,
                        e.hoverBorderAlpha, n.borderAlpha);
                    n.connectorThickness = m(c.labelconnectorthickness, e.connectorThickness);
                    n.origConnectorThickness = n.connectorThickness;
                    n.borderThickness = u;
                    n.link = c.link;
                    n.isVisible = !0;
                    n.id = b;
                    n.originalId = c.origId;
                    null !== f && (w && q ? x = w.getColorByValue(f) : r && (b = r.getColorObj(f), x = h(b.color, b.code)));
                    void 0 !== h(c.color, c.alpha, c.angle, c.ratio) ? (x = h(c.color, x, e.fillColor), b = h(c.alpha, e.fillAlpha), f = h(c.angle, e.fillAngle), q = h(c.ratio, e.fillRatio), x = K({
                        color: x,
                        alpha: b,
                        angle: f,
                        ratio: q
                    })) : (x =
                        K({
                            color: h(x, e.fillColor),
                            alpha: h(e.fillAlpha),
                            angle: h(e.fillAngle),
                            ratio: h(e.fillRatio)
                        }), b = K({
                        color: h(e.nullEntityColor),
                        alpha: h(e.nullEntityAlpha),
                        angle: h(e.nullEntityAngle),
                        ratio: h(e.nullEntityRatio)
                    }), x = null === f ? b : x, b = x.FCcolor.alpha);
                    "" === k && (g.showTooltip = 0);
                    n.visibleEntityAttr = {
                        stroke: M(l, v),
                        fill: (n.fillColor = x).toString(),
                        "fill-opacity": b / 100
                    };
                    g = b.split(",");
                    n.alphaArr = g;
                    y && (void 0 !== h(c.fillhovercolor, c.fillhoveralpha, c.fillhoverangle, c.fillhoverratio, c.hoverfillcolor, c.hoverfillalpha, c.hoverfillratio,
                        c.hoverfillangle) ? (x = h(c.fillhovercolor, c.hoverfillcolor, e.hoverFillColor), b = h(c.fillhoveralpha, c.hoverfillalpha, e.hoverFillAlpha), f = h(c.fillhoverangle, c.hoverfillangle, e.hoverFillAngle), q = h(c.fillhoverratio, c.hoverfillratio, e.hoverFillRatio), g = K({
                        color: x,
                        alpha: b,
                        angle: f,
                        ratio: q
                    })) : (e.hoverColorObject || (e.hoverColorObject = K({
                        color: e.hoverFillColor,
                        alpha: e.hoverFillAlpha,
                        angle: e.hoverFillAngle,
                        ratio: e.hoverFillRatio
                    })), g = e.hoverColorObject), n.hoverColor = g);
                    !d && (d = a.labelConfig = {});
                    e = n.fontColor;
                    b =
                        n.fontFamily;
                    x = n.fontBold;
                    k = n.toolText;
                    f = n.link;
                    F ? (g = F[0], F = F[1]) : (g = "center", F = "middle");
                    d.align = g;
                    d.vAlign = F;
                    d.bgColor = "";
                    d.borderColor = "";
                    d.fontColor = e;
                    d.fontFamily = b;
                    d.fontBold = x;
                    d.toolText = k;
                    d.link = f;
                    if ("object" === typeof n.options) for (f = n.entityLabels = n.entityLabels || [], l = n.labels || [], v = l.length; v--;) f[v] || (f[v] = {config: {}}), d = f[v].config, (F = l[v].labelAlignment) ? (g = F[0], F = F[1]) : (g = "center", F = "middle"), d.align = g, d.vAlign = F, d.displayValue = this.getDisplayValue.call(a, l[v], n.options.isDataEnabled,
                        !v, c), d.bgColor = "", d.borderColor = "", d.toolText = k, d.align = g, d.vAlign = F, d.bgColor = "", d.borderColor = "", d.fontColor = e, d.fontFamily = b, d.fontBold = x, d.toolText = k; else n = {
                        shortText: n.shortLabel,
                        text: n.label
                    }, d.displayValue = this.getDisplayValue.call(a, n, !0, !0, c)
                }, getDisplayValue: function (b, a, c, d) {
                    var g = this.dataset.chart.config.entityOpts, l = this.config, f = l.cleanValue,
                        e = l.formattedValue, m = g.labelSepChar;
                    a ? c && "undefined" !== typeof d.displayvalue ? b = d.displayvalue : (b = h(g.includeNameInLabels ? g.useShortName ? b.shortText :
                        b.text : ""), g.includeValueInLabels && null !== f && (b = void 0 === b ? e : b + m + e)) : b = l.label;
                    return b
                }, _sanitizeEntityOptions: function (b) {
                    delete b.outlines;
                    delete b.label;
                    delete b.shortlabel;
                    delete b.labelposition;
                    delete b.labelalignment;
                    delete b.labelconnectors;
                    return b
                }, _redefineEntities: function (b) {
                    var a = this.conf, c = {}, d = {}, g = this.chart.entities, l = a.useSNameAsId, f, e, h, n, m, q, w,
                        r = 0, v, p;
                    for (f = b.length; f--;) if (e = b[f], h = e.internalid, n = e.newid ? e.newid : h, m = e.sname, q = e.lname, v = g[h], h = u.trimString(h), n = (n = u.trimString(n)) &&
                        n.toLowerCase(), v) {
                        c[n] = n = {origId: h};
                        d[h] = !0;
                        for (p in v) n[p] = v[p];
                        n.shortLabel = m ? m : v.shortLabel;
                        n.label = q ? q : v.label;
                        n.showhovereffect = e.showhovereffect;
                        n.fillhovercolor = e.fillhovercolor;
                        n.fillhoveralpha = e.fillhoveralpha;
                        n.fillhoverangle = e.fillhoverangle;
                        n.fillhoverratio = e.fillhoverratio;
                        n.borderhoverthickness = e.borderhoverthickness
                    }
                    v = this.components.data;
                    v || (v = this.components.data = {});
                    for (w in c) w = w.toLowerCase(), v[w] || (v[w] = {config: {}}), v[w].config = c[w], r += 1;
                    c = v;
                    for (w in g) if (n = g[w], w = u.trimString(w),
                        !d[w]) {
                        l ? ((v = c[n.shortLabel.toLowerCase()]) || (v = c[n.shortLabel.toLowerCase()] = {}), v.config = {}, v.origId = n.shortLabel) : ((v = c[w.toLowerCase()]) || (v = c[w.toLowerCase()] = {}), v.config = {}, v.config.origId = w);
                        for (p in n) v.config[p] = n[p];
                        r += 1
                    }
                    a.entityCount = r
                }, draw: function () {
                    var b = this.conf, a = this.chart, c = E ? 200 : 10;
                    this.conf.ready = !1;
                    b.BATCH_SIZE = c;
                    b.labelBatchSize = E ? 200 : 20;
                    this._batchRender()(0);
                    a.config.entityFlag = !0
                }, _batchRender: function () {
                    var b = this, a = b.conf, c = b.chart, d = c.getJobList(), c = c.entities.firstEntity,
                        g = b.components.data, l = a.BATCH_SIZE,
                        f = a.entityKeys = c ? b._getKeys(c, g) : Object.keys(g), e = a.entityLength = f.length, h, n,
                        m, q, w, r = function (a) {
                            return function () {
                                v(a)
                            }
                        }, v = function (a) {
                            h = a;
                            for (m = 0; void 0 !== f[h];) {
                                n = g[f[h]];
                                w = b.drawEntity(n, l);
                                m += w;
                                if (n.config.drawn) {
                                    if (q = h === e - 1 ? n : g[f[h - 1]]) q.config.drawn = !1, q.config.outlineStartIndex = void 0;
                                    h++
                                }
                                if (m >= l) {
                                    d.entityDrawID.push(p.addJob(r(h), u.priorityList.entitydraw, void 0, !0));
                                    break
                                }
                            }
                            h === e && (b._addEventListenersToEntities(0), b.initComplete())
                        };
                    return v
                }, _addEventListenersToEntities: function (b) {
                    for (var a =
                        this, c = a.components.data, d = a.chart.getJobList(), g = a.conf, l = g.BATCH_SIZE, f = g.entityKeys, g = g.entityLength, e, h = 0, n, m = function (b) {
                        return function () {
                            a._addEventListenersToEntities(b)
                        }
                    }; b < g; b++) if (e = c[f[b]], n = e.config, (n = n.options) && !1 === n.isDataEnabled || a.addMouseGestures.call(e), h++, h === l) {
                        d.entityDrawID.push(p.addJob(m(b), u.priorityList.entitydraw));
                        break
                    }
                }, _getKeys: function (b, a) {
                    for (var c = [b], d = b; a[d];) d = a[d].nextId, c.push(d);
                    return c
                }, _getDefaultTooltip: function (b) {
                    var a = this.config.cleanValue, c = this.config.formattedValue,
                        d = this.dataset.chart.config.entityOpts;
                    if ("object" === typeof this.config.options) {
                        b = b.labels && b.labels[0];
                        if (!b) return;
                        a = (d.useSNameInTooltip ? b.shortText : b.text) + (null === a ? "" : d.tooltipSepChar + c)
                    } else a = (d.useSNameInTooltip ? b.shortLabel : b.label) + (null === a ? "" : d.tooltipSepChar + c);
                    return a
                }, drawEntity: function (b, a) {
                    var c = this.chart, d = c.components.paper, g = b.config, e = E || !N ? "litepath" : "path",
                        f = g.outlines, k = c.graphics.datasetGroup, h = c.graphics.shadowGroup, n = g.toolText,
                        c = c.config.entityOpts.shadow, m, q = [], w,
                        r, v, p, u, x, B, A;
                    this._configureEntityDrawingParams(b);
                    g = b.config;
                    r = g.visibleEntityAttr;
                    A = g.shadowOptions;
                    w = g.fillOpacity;
                    m = void 0 === g.outlineStartIndex ? f.length : g.outlineStartIndex;
                    b.graphics || (b.graphics = {});
                    x = 0;
                    q = g.outlinePath || (g.outlinePath = []);
                    B = g.customStrokeWidthModifier;
                    if ("object" === typeof g.options) {
                        for (; m--;) {
                            q = f[m].outline;
                            if (!0 === g.options.isDataEnabled) v = r; else {
                                v = y({}, r);
                                p = f[m].style;
                                u = B;
                                var z = void 0, C = {};
                                u = u || 1;
                                if (p && "object" === typeof p) for (z in p) ga.test(z) || ("stroke-width" === z ? (C[z] =
                                    Number(p[z]) / u, ha && (C[z] = C[z] && V(C[z]) || 0)) : C[z] = p[z]);
                                p = C;
                                v = y(v, p)
                            }
                            p = b.graphics.outlines;
                            p || (p = b.graphics.outlines = []);
                            !p[m] && (p[m] = {});
                            (u = p[m].outline) ? u.attr({"fill-opacity": w}) : u = p[m].outline = d[e](q, k);
                            u.attr(v).tooltip(n).shadow(c ? A : !1, h);
                            x++;
                            g.outlineStartIndex = m;
                            if (x === a) return x
                        }
                        g.drawn = !0
                    } else {
                        if (b.graphics.outlines) b.graphics.outlines.attr(r).attr({"fill-opacity": w}); else {
                            for (; m--;) if (w = f[m], q = w.concat(q), x++, g.outlineStartIndex = m, x === a) return g.outlinePath = q, x;
                            b.graphics.outlines = d[e](q,
                                k).attr(r)
                        }
                        g.drawn = !0;
                        g.outlineStartIndex = 0;
                        g.outlinePath = [];
                        b.graphics.outlines.tooltip(n).shadow(c ? A : !1, h)
                    }
                    return x
                }, _configureEntityDrawingParams: function (b) {
                    var a = this.chart, c = a.config, d = a.components.gradientLegend, g = b.config,
                        e = a.config.scalingParams, f = !N || E, k = e.scaleFactor, h = e.strokeWidth,
                        n = (f ? a.baseScaleFactor : 1) * h, m = 1 === a.config.entityOpts.scaleBorder,
                        q = g.borderThickness, p = g.origConnectorThickness, r = g.hoverBorderThickness,
                        v = g.visibleEntityAttr, u = v["fill-opacity"];
                    g.shadowOptions = {
                        scalefactor: [k,
                            k * a.baseScaleFactor], opacity: G.apply(D, g.alphaArr) / 100
                    };
                    d && !0 === c.gLegendEnabled && (b.hidden = !1);
                    g.fillOpacity = b.hidden ? 0 : u;
                    d && d.enabled && (d.resetLegend(), d.clearListeners());
                    d && d.notifyWhenUpdate(this.updateEntityColors, this);
                    f ? (q = g.entityBorderThickness = m ? q * n : q / k, p /= k, b = m ? k : e.sFactor, r && (g.hoverBorderThickness = m ? r * n : r / k)) : (q = m ? q * h : q, b = m ? e.scaleFactor : a.baseScaleFactor);
                    g.entityBorderThickness = q;
                    g.connectorThickness = p;
                    g.customStrokeWidthModifier = b;
                    v["stroke-width"] = q;
                    v.transform = E || !N ? "" : e.transformStr
                },
                drawLabels: function (b) {
                    var a = b.chart, c = b.conf, d = c.labelBatchSize, g = a.components, c = c.entityLength, e = [], f,
                        k = 0, h = 0, n = 0, m = a.config.annotationConfig,
                        q = g.mapLabelAnnotations = g.mapLabelAnnotations || (g.mapLabelAnnotations = []);
                    (g = q[k]) || (g = q[k] = new u.Annotations);
                    g.reset(null, m, a);
                    g._renderer && (g._renderer = null);
                    for (f in this) b.drawLabel.call(this[f], e), k++, k === d ? (g.addGroup({
                        id: "entityLabels",
                        items: e
                    }), h++, (g = q[h]) || (g = q[h] = new u.Annotations), g.reset(null, m, a), g._renderer && (g._renderer = null), k = 0, e = []) : n ===
                        c - 1 && g.addGroup({id: "entityLabels", items: e}), n++;
                    b.drawLabelConnFn(0)
                }, drawLabelConnFn: function (b) {
                    for (var a = this, c = a.conf, d = a.chart.getJobList(), g = a.components.data, e = c.BATCH_SIZE, c = c.entityKeys, f, k = c.length, h, n, m = function (b) {
                        return function () {
                            a.drawLabelConnFn(b)
                        }
                    }, q = 0; b < k; b++) {
                        n = g[c[b]];
                        f = n.config;
                        if ("object" === typeof f.options) for (f = (h = f.labels) && h.length || 0; f--;) h[f].labelConnectors && (a.drawLabelConnectors.call(n, h[f].labelConnectors), q++); else f.labelConnectors && (a.drawLabelConnectors.call(n,
                            f.labelConnectors), q++);
                        if (q === e) {
                            d.entityDrawID.push(p.addJob(m(b), u.priorityList.entitydraw, void 0, !0));
                            break
                        }
                    }
                }, _getLabelObject: function (b, a) {
                    var c = this, d = c.dataset, g = d.chart, e = c.config, f, k = g.config.scalingParams, h, n,
                        m = c.graphics && c.graphics.outlines, p, w = e.fontSize, r = e.labelPadding;
                    n = e.labels || [];
                    f = e.entityLabels || [];
                    var v;
                    void 0 !== b ? (n = n[b], p = f[b], f = p.config, p = f.style = n.style, h = n.labelPosition, n = n.labelAlignment) : (f = c.labelConfig, h = e.labelPosition, n = e.labelAlignment);
                    h ? (m = h[0], h = h[1]) : (h = m.getBBox(),
                        m = h.x + h.width / 2, h = h.y + h.height / 2);
                    n ? (v = n[0], n = n[1], "right" === v ? m -= r : "left" === v && (m += r), "top" === n ? h -= r : "bottom" === n && (h += r)) : (v = "center", n = "middle");
                    w = parseFloat(w) / k.sFactor;
                    !a && p && (p.color && (f.fontColor = p.color), p["font-size"] && (w = parseFloat(p["font-size"]) / k.sFactor), p["font-family"] && (f.fontFamily = p["font-family"]), void 0 !== p["font-weight"] && (f.fontBold = "bold" === p["font-weight"]));
                    f.x = m.toString();
                    f.y = h.toString();
                    f.wrap = 1;
                    f.type = "text";
                    f.fontSize = w;
                    return {
                        x: m.toString(),
                        y: h.toString(),
                        wrapwidth: ea[v](void 0,
                            m + void 0) - r,
                        wrapheight: da[n](void 0, h + void 0) - r,
                        wrap: 1,
                        type: "text",
                        align: f.align,
                        valign: f.vAlign,
                        text: f.displayValue,
                        tooltext: f.toolText,
                        link: f.link,
                        bgcolor: f.bgColor,
                        bordercolor: f.borderColor,
                        fillcolor: f.fontColor,
                        fontsize: f.fontSize,
                        font: f.fontFamily,
                        bold: f.fontBold,
                        onclick: function (a) {
                            q.raiseEvent("entityclick", e.eventArgs, g.chartInstance, a)
                        },
                        onmouseover: function (a) {
                            var b = c.graphics.outlines, g, f;
                            if (b instanceof Array) for (g = 0, f = b.length; g < f; g++) d.entityRollOver.call(b[g].outline, a); else d.entityRollOver.call(b,
                                a)
                        },
                        onmouseout: function (a) {
                            var b = c.graphics.outlines, g, f;
                            if (b instanceof Array) for (g = 0, f = b.length; g < f; g++) d.entityRollOut.call(b[g].outline, a); else d.entityRollOut.call(b, a)
                        },
                        ontouchstart: function (a) {
                            var b = c.graphics.outlines, g, f;
                            if (b instanceof Array) for (g = 0, f = b.length; g < f; g++) d.entityRollOver.call(b[g].outline, a); else d.entityRollOver.call(b, a);
                            d.entityRollOver.call(b, a)
                        }
                    }
                }, drawLabel: function (b) {
                    var a = this.dataset, c = this.config, d;
                    if (c.showLabel) if ("object" === typeof c.options) for (d = (d = c.labels) &&
                        d.length || 0, c = c.options.isDataEnabled; d--;) b.push(a._getLabelObject.call(this, d, c, !d)); else b.push(a._getLabelObject.call(this, void 0, !0, !0))
                }, drawLabelConnectors: function (b) {
                    for (var a = this.config, c = this.dataset.chart, d = c.components.paper, g = c.config.scalingParams, c = c.graphics.datasetGroup, e = b && b.length || 0, f, k, h = a.showLabel; e--;) k = b[e], f = this.graphics.connectorElem, h ? (f || (this.graphics.connectorElem = f = d.path(k, c)), f.show().attr({
                        transform: E || !N ? "" : g.transformStr, stroke: M(a.connectorColor, a.connectorAlpha),
                        "shape-rendering": "crisp", "stroke-width": a.connectorThickness
                    })) : f && f.hide()
                }, entityClick: function (b) {
                    var a = this.node.__entity, c = a.dataset.chart, d = c.linkedItems.linkClickFN, a = a.config,
                        g = a.link;
                    q.raiseEvent("entityclick", a.eventArgs, c.chartInstance, b);
                    void 0 !== g && d.call({link: g}, c)
                }, entityRollOver: function (b) {
                    var a = this.node.__entity, c = a.config, d = a.dataset.chart, g = c.hoverAttr;
                    u.plotEventHandler.call(this, d, b, "entityRollOver");
                    this.data("hovered") ? clearTimeout(a.config.timer) : c.useHoverColor && c.isVisible &&
                        !a.hidden && (d.config.hoverEntity = this, this.attr(g), this.data("hovered", !0))
                }, entityRollOut: function (b) {
                    var a = this, c = this.node.__entity, d, g = c.config.revertAttr;
                    u.plotEventHandler.call(a, c.dataset.chart, b, "entityRollOut");
                    c.config.timer = setTimeout(function () {
                        d = c.hidden;
                        !0 !== d && (a.attr(g), a.data("hovered", !1))
                    }, 100)
                }, addMouseGestures: function () {
                    var b = this, a = b.config, c = b.dataset, d = b.graphics, g = a.hoverBorderThickness,
                        e = a.hoverBorderColor, f = a.hoverBorderAlpha, k = a.entityBorderThickness, h = a.borderColor,
                        n =
                            a.borderAlpha, q = a.link, p = a.visibleEntityAttr, w = "groupId" + a.originalId, r,
                        v = function (d) {
                            void 0 !== q && d.css({cursor: "pointer", _cursor: "hand"});
                            d.data("eventArgs", a.eventArgs);
                            d.data("groupId", w);
                            d.node.__entity = b;
                            b._listenersBinded || d.click(c.entityClick).hover(c.entityRollOver, c.entityRollOut)
                        };
                    a.eventArgs = {
                        value: a.cleanValue,
                        label: a.label,
                        shortLabel: a.shortLabel,
                        originalId: a.origId,
                        id: a.id || a.origId
                    };
                    a.legacyEventArgs = {value: a.value, lName: a.label, sName: a.shortLabel, id: a.originalId || a.id};
                    a.hoverAttr =
                        {fill: B(a.hoverColor)};
                    a.revertAttr = {fill: B(a.fillColor), stroke: B(a.borderColor, a.borderAlpha)};
                    a.revertAttr["fill-opacity"] = p["fill-opacity"];
                    g !== k && (a.hoverAttr["stroke-width"] = m(g, k), a.revertAttr["stroke-width"] = k);
                    if (e !== h || f !== n) a.hoverAttr.stoke = M(e, f), a.revertAttr.stroke = M(h, n);
                    for (r in d) if (d.hasOwnProperty(r)) {
                        if (d[r] instanceof Array) for (k = d[r], g = 0, f = k.length; g < f; g++) e = k[g].outline, v(e); else e = d[r], v(e);
                        b._listenersBinded = !0
                    }
                }, getDataLimits: function () {
                    var b = this.conf;
                    return {max: b.max, min: b.min}
                },
                initComplete: function () {
                    var b = this.chart;
                    this.drawLabels.call(this.components.data, this);
                    b.config.entitiesReady = !0;
                    b.checkComplete()
                }
            }]);
        T.register("component", ["dataset", "Markers", {
            type: "markers", configure: function () {
                var b = this.chart.config.markerOpts;
                this.calculateDataLimits();
                b.dataEnabled ? this._parseMarkers() : this.defineMarkersNShapes();
                this.configureConnectors()
            }, init: function (b) {
                this.JSONData = b;
                this.components = {};
                this.conf = {};
                this.graphics = {};
                this.configure()
            }, calculateMarkerRadiusLimits: function () {
                var b =
                        this.JSONData, a = this.conf, c = this.chart,
                    b = this.getMarkerRadiusLimits(c.config.width, c.config.height, b.markermaxradius, b.markerminradius);
                a.minRadius = b.min;
                a.maxRadius = b.max
            }, calculateDataLimits: function () {
                var b = this.chart, a = this.conf, c = (b.jsonData.markers || {}).items || [],
                    b = b.components.numberFormatter, d = Infinity, g = -Infinity, e, f, k;
                k = 0;
                for (f = c.length; k < f; k++) e = c[k], e = e.value, e = b.getCleanValue(e), null !== e && (d = H(e, d), g = G(e, g));
                a.min = d;
                a.max = g
            }, _parseMarkers: function () {
                var b = this.chart, a = b.jsonData.markers,
                    c = a.items, d = a.shapes, a = b.config.markerOpts, g = b.components.numberFormatter,
                    e = this.components.shapeObjs = this.components.shapeObjs || (this.components.shapeObjs = {}),
                    f = this.components.markerObjs = this.components.markerObjs || (this.components.markerObjs = {}), k,
                    t, n, q, p, w, r;
                if (c && c.length) {
                    if (d && d.length) for (k = d.length; k; --k) if (n = d[k - 1], r = n.id.toLowerCase()) e[r] = n;
                    for (k = c.length; k--;) if (n = c[k], r = n.id && n.id.toLowerCase()) d = n.value, void 0 !== d && "" !== d && (d = parseFloat(d)), t = this._initializeMarkerItem(r, n, null, b),
                    (q = t.config.options.shapeid) && "string" === typeof q && (q = q.toLowerCase()), p = t.config, w = p.options, p.cleanValue = g.getCleanValue(d), p.formattedValue = null !== p.cleanValue ? g.dataLabels(d) : void 0, p.fillColor = h(w.fillcolor, w.color, a.fillColor), p.fillAlpha = h(w.fillalpha, w.alpha, a.fillAlpha), p.fillRatio = h(w.fillratio, a.fillRatio), p.fillAngle = h(w.fillangle, a.fillAngle), p.borderThickness = m(w.borderthickness, a.borderThickness), p.borderColor = h(w.bordercolor, a.borderColor), p.borderAlpha = h(w.borderalpha, a.borderAlpha),
                        p.labelPadding = w.labelpadding || a.labelPadding, t.dataset = this, n.__hideMarker && (t._isHidden = !0), q && (t.shapeObj = e[q]), f[r] = t
                }
            }, defineMarkersNShapes: function () {
                var b = this.chart, a = b.jsonData.markers, c = a.definition, d = b.components.numberFormatter,
                    g = b.config.markerOpts, e = fa(c) || {}, f = fa(a.application) || {}, k = a.shapes,
                    a = this.components.shapeObjs = this.components.shapeObjs || (this.components.shapeObjs = {}),
                    q = this.components.markerObjs = this.components.markerObjs || (this.components.markerObjs = {}), n,
                    p, u, w;
                if (c && c.length) {
                    if (k &&
                        k.length) for (c = k.length; c; --c) if (n = k[c - 1], w = n.id.toLowerCase()) a[w] = n;
                    for (w in e) n = e[w], c = q[w] = this._initializeMarkerItem(w, n, f[w], b), c.dataset = this, u = c.config.options.shapeid, k = c.config, p = n.value, k.cleanValue = d.getCleanValue(p), n = k.options, k.formattedValue = null !== k.cleanValue ? d.dataLabels(p) : void 0, k.fillColor = h(n.fillcolor, n.color, g.fillColor), k.fillAlpha = h(n.fillalpha, n.alpha, g.fillAlpha), k.fillRatio = h(n.fillratio, g.fillRatio), k.fillAngle = h(n.fillangle, g.fillAngle), k.borderThickness = m(n.borderthickness,
                        g.borderThickness), k.borderColor = h(n.bordercolor, g.borderColor), k.borderAlpha = h(n.borderalpha, g.borderAlpha), k.labelPadding = n.labelpadding || g.labelPadding, k.options.tooltext = h(n.tooltext, g.tooltext), k.link = n.link, u && (c.shapeObj = a[u.toLowerCase()])
                }
            }, getMarkerRadiusLimits: function (b, a, c, d) {
                a = H(b, a);
                b = .02 * a;
                a *= .07;
                d = parseFloat(d);
                c = parseFloat(c);
                return isNaN(d) || isNaN(c) ? isNaN(d) ? isNaN(c) ? {min: b, max: a} : {
                    min: parseInt(c / 10, 10),
                    max: c
                } : {min: d, max: 10 * d} : d < c ? {min: d, max: c} : {min: c, max: d}
            }, getDataLimits: function () {
                var b =
                    this.conf;
                return {min: b.min, max: b.max}
            }, _initializeMarkerItem: function (b, a, c) {
                var d = {}, g = d.config;
                g || (g = d.config = {});
                g.id = b;
                g.definition = a;
                g.application = c;
                g.hasValue = null;
                g.value = null;
                g.options = null;
                g.label = null;
                g.markerShape = null;
                g.markerLabel = null;
                g.drawOptions = {shape: null, label: null};
                g.drawComplete = !1;
                b = d.config.options = y({}, g.definition);
                g.dataEnabled ? isNaN(b.value) || "" === b.value || (d.value = parseFloat(b.value), d.hasValue = !0) : g.applyAll ? g.options = y(b, g.application) : c && (g.options = y(b, g.application));
                return d
            }, configureConnectors: function () {
                var b = this.chart, a = b.jsonData.markers || {}, a = a.connector || a.connectors || [],
                    c = this.components.markerObjs, d = a.length, g = this.components.connectors, e = function (a) {
                        return function (c) {
                            var d = c.data, g = d.wrapper;
                            g && d.options.hoverEffect && g.attr(d.options._hoverAttrs);
                            q.raiseEvent("connectorrollover", a, b.chartInstance, c)
                        }
                    }, f = function (a) {
                        return function (c) {
                            var d = c.data, g = d.wrapper;
                            g && d.options.hoverEffect && g.attr(d.options._defaultAttrs);
                            q.raiseEvent("connectorrollout",
                                a, b.chartInstance, c)
                        }
                    }, k = function (a) {
                        return function (c) {
                            q.raiseEvent("connectorClick", a, b.chartInstance, c)
                        }
                    }, t = b.config.connectorOpts, n = {}, p, u, w, r, v, x, z, A, B, C, E, D, H;
                g || (g = this.components.connectors = []);
                for (H = 0; H < d; H++) if (D = a[H], D.from || D.to) u = c[D.from.toLowerCase()], w = c[D.to.toLowerCase()], u && w && (r = a[H].label, n = g[H], !n && (n = g[H] = {}), !n.config && (p = n.config = {}), !n.graphics && (n.graphics = {}), p = n.config = y({}, D), p.fromMarker = u, p.toMarker = w, p.link = D.link, p.showTooltip = m(D.showtooltip, t.showTooltip), v = p.tooltext =
                    p.showTooltip ? h(D.tooltext, t.tooltext) : "", x = p.thickness = h(D.thickness, t.thickness), z = p.color = h(D.color, t.color), A = p.alpha = h(D.alpha, t.alpha), p.hoverEffect = m(D.showhovereffect, t.showHoverEffect), B = h(D.hovercolor, t.hoverColor, z), C = h(D.hoveralpha, t.hoverAlpha, A), E = h(D.hoverthickness, t.hoverThickness, x), p.dashed = h(D.dashed, t.dashed), p.dashLen = m(D.dashlen, t.dashlen), p.dashGap = m(D.dashgap, t.dashgap), v && (p.tooltext = v = J(X(v, [3, 40, 41, 42, 43], {
                    label: r, fromId: u.config.definition.id, toId: w.config.definition.id,
                    fromLabel: u.config.definition.label, toLabel: w.config.definition.label
                }, void 0))), p.eventArgs = {
                    fromMarkerId: u.config.id,
                    toMarkerId: w.config.id,
                    label: r
                }, p._hoverAttrs = {
                    stroke: K({color: B, alpha: C}).toString(),
                    "stroke-width": E
                }, p._defaultAttrs = {
                    stroke: K({color: z, alpha: A}).toString(),
                    "stroke-width": x
                }, p.type = "line", p.onclick = k(p.eventArgs), p.onmouseover = e(p.eventArgs), p.onmouseout = f(p.eventArgs), r && (p = n.labelConfig, !p && (p = n.labelConfig = {}), p.type = "text", p.text = r, p.align = "center", p.valign = "middle", p.font =
                    t.font, p.fillcolor = t.fontColor, p.bgcolor = t.labelBgColor, p.bordercolor = t.labelBorderColor, p.tooltext = t.tooltext))
            }, draw: function () {
                var b = this, a = b.chart, c = b.conf, d = a.components.mapAnnotations, g = b.components.markerObjs,
                    e = a.config, f = e.markerOpts, k = e.scalingParams, e = [], h = [], n, m, q = a.getJobList();
                b.imageLoadCount = 0;
                b.imageCount = 0;
                m = d.addGroup({items: h});
                d = d.addGroup({fillalpha: "100", items: e});
                b.components.markerGroup = d;
                b.components.markerLabelGroup = m;
                c.autoScale = f.autoScale ? k.sFactor : 1;
                for (n in g) c = null,
                    f = g[n], k = f.config, k.conIsHidden || (c = this._drawMarkerItem.call(f)), c && (k._annotationIndex = e.length, f.markerShape = c.markerShape && d.addItem(c.markerShape, !1, a), e.push(f.markerShape), f.markerLabel = c.markerLabel && m.addItem(c.markerLabel, !1, a), h.push(f.markerLabel));
                this._drawConnectors();
                q.kdTreeID.push(p.addJob(function () {
                    b._buildKdTree()
                }, u.priorityList.kdTree))
            }, _buildKdTree: function () {
                var b = this.components.kdArrayMap, a = this.components.markerGroup, c = [], d, g = a && a.items,
                    l = g && g.length || 0;
                for (d = 0; d < l; d++) a =
                    g[d]._id, b[a] && c.push(b[a]);
                this.components.kDTree || (this.components.kDTree = new e(!0));
                this.components.kDTree._setSearchLimit(Infinity, Infinity);
                this.components.kDTree.buildKdTree(c)
            }, _drawMarkerItem: function () {
                var b = this, a = b.dataset, c = a.chart, d = c.config, g = a.conf, e = d.scalingParams, f = b.config,
                    k = f.options, p = f.definition, n = d.markerOpts, d = n.dataLabels.style, q = k.shapeid,
                    u = k.scale || 1, w = k.label || "", r = c.config.scalingParams.scaleFactor * c.baseScaleFactor,
                    c = (k.labelpos || "top").toLowerCase(), v = f.formattedValue,
                    x = k.tooltext, g = m(p.radius, f.radius, n.radius) * u * g.autoScale || 1E-4, p = f.fillColor,
                    z = f.fillAlpha, A = f.fillRatio, C = f.fillAngle, D = f.borderThickness, E = f.borderColor,
                    H = f.borderAlpha, G, I, K = a.components.kdArrayMap || (a.components.kdArrayMap = {}),
                    L = b.config.id;
                f.autoScale = n.autoScale ? r : 1;
                if (q) {
                    x = x ? J(X(x, [1, 2, 3], {formattedValue: v, label: w}, k)) : v ? w + n.tooltipSepChar + v : w;
                    void 0 !== v && null !== v ? w = w + n.labelSepChar + v : isNaN(u) ? u = 1 : 0 > u ? u = 0 : 5 < u && (u = 5);
                    y(k, {
                        x: k.x.toString(),
                        y: k.y.toString(),
                        fillcolor: p,
                        fillalpha: z,
                        fillratio: A,
                        fillangle: C,
                        borderthickness: D,
                        bordercolor: E,
                        borderalpha: H,
                        hovereffect: h(n.showHoverEffect),
                        radius: g.toString(),
                        link: k.link,
                        showshadow: m(k.showshadow, f.shadow),
                        _markerLabel: w,
                        _markerId: k.id,
                        id: (k.id + "").toLowerCase()
                    });
                    delete k.tooltext;
                    f.tooltext = n.showTooltip ? x : !1;
                    r = Number(k.x) * e.sFactor + e.translateX;
                    v = Number(k.y) * e.sFactor + e.translateY;
                    g = k.radius;
                    "triangle" === q ? (y(k, {
                        type: "polygon",
                        sides: 3,
                        startangle: n.startAngle
                    }), u = "polygon", G = 3) : "diamond" === q ? (y(k, {
                        type: "polygon",
                        sides: 4,
                        startangle: n.startAngle
                    }),
                        u = "polygon", G = 4) : "arc" === q ? (I = .6 * g, y(k, {
                        type: "arc",
                        startangle: 0,
                        endangle: 360,
                        innerradius: I
                    }), u = "arc") : "circle" === q ? u = k.type = "circle" : (G = a.getShapeArgs.call(b), n.dataEnabled && n.valueToRadius && void 0 !== k.radius ? delete G.radius : (!G.radius && (G.radius = n.radius), G.radius = G.radius * u * f.autoScale), y(k, G), k.id = k._markerId && k._markerId.toLowerCase(), I = G.innerradius, g = G.radius, u = G.type, G = G.sides);
                    y(k, {
                        hoverfillcolor: h(k.fillhovercolor, n.hoverFillColor, k.fillcolor),
                        hoverfillalpha: h(k.fillhoveralpha, n.hoverFillAlpha,
                            k.fillalpha),
                        hoverfillratio: h(k.fillhoverratio, n.hoverFillRatio, k.fillratio),
                        hoverfillangle: h(k.fillhoverangle, n.hoverFillAngle, k.fillangle),
                        hoverborderthickness: m(k.borderhoverthickness, n.hoverBorderThickness, k.borderthickness),
                        hoverbordercolor: h(k.borderhovercolor, n.hoverBorderColor, k.bordercolor),
                        hoverborderalpha: h(k.borderhoveralpha, n.hoverBorderAlpha, k.borderalpha)
                    });
                    q = {alpha: k.fillalpha, color: k.fillcolor, angle: 360 - k.fillangle, ratio: k.fillratio};
                    x = {
                        alpha: k.hoverfillalpha, color: k.hoverfillcolor,
                        angle: 360 - k.hoverfillangle, ratio: k.hoverfillratio
                    };
                    k._defaultattrs = {
                        fill: B(q),
                        "stroke-width": "0" !== k.showborder ? k.borderthickness : 0,
                        stroke: M(k.bordercolor, k.borderalpha)
                    };
                    k._hoverattrs = {
                        fill: B(x),
                        "stroke-width": "0" !== k.showborder ? k.hoverborderthickness : 0,
                        stroke: M(k.hoverbordercolor, k.hoverborderalpha)
                    };
                    "image" === k.type ? (k.borderthickness = k.borderthickness || 0, k.onload = function (c) {
                        var d = this.options, g = c.width;
                        c = c.height;
                        var f = {}, k = (Number(d.x) - g / (2 * e.sFactor)) * e.sFactor,
                            d = (Number(d.y) - c / (2 * e.sFactor)) *
                                e.sFactor, h, f = K[L] || (K[L] = {});
                        f.x = k + e.translateX;
                        f.y = d + e.translateY;
                        f.element = b;
                        f.shapeInfo = {type: "rect", width: g, height: c};
                        if (g && c) for (h in{wrapper: 1, tracker: 1}) this[h] && this[h].attr({
                            x: k,
                            y: d,
                            width: g,
                            height: c
                        });
                        a.imageLoadCount++;
                        a.imageLoadCount === a.imageCount && a._buildKdTree()
                    }, k.onerror = function () {
                        a.imageLoadCount++;
                        a.imageLoadCount === a.imageCount && a._buildKdTree()
                    }, a.imageCount++) : (q = K[L] || (K[L] = {}), q.x = r, q.y = v, q.element = b, q.shapeInfo = {
                        type: u,
                        sides: G,
                        radius: Number(g) + k.borderthickness / 2,
                        innerradius: I
                    });
                    f.drawOptions.shape = k;
                    if (!n.showLabels) return {markerShape: k};
                    I = k.labelpadding || n.labelPadding;
                    c = a._getLabelOptions(c, I, k);
                    G = c.align;
                    g = c.valign;
                    r = f._labelBaseWidth;
                    u = f._labelBaseHeight;
                    v = f._labelXOffset;
                    q = f._labelYOffset;
                    r = n.labelWrapWidth ? n.labelWrapWidth : a.getWrapWidth[G](r, Number(c.x) + v);
                    n = n.labelWrapHeight ? n.labelWrapHeight : a.getWrapHeight[g](u, Number(c.y) + q);
                    r > I && (r -= I);
                    n > I && (n -= I);
                    f.drawOptions.label = y({type: "text"}, {
                        text: w,
                        tooltext: k.tooltext,
                        x: c.x,
                        y: c.y,
                        align: G,
                        valign: c.valign,
                        wrap: 1,
                        wrapwidth: r,
                        wrapheight: n,
                        fontsize: d.fontSize / e.sFactor,
                        font: d.fontFamily,
                        fillcolor: d.fontColor
                    });
                    return {markerShape: k, markerLabel: f.drawOptions.label}
                }
            }, getHoverFn: function () {
                var b = this.chart;
                return function () {
                    var a = this.data("marker"), c = a.markerShape, d = c.options, g = c.bounds, e = d._markerEventArgs,
                        f = c.wrapper, k = c.fillOptions, h = b.config.scalingParams, m = h.translateX,
                        h = h.translateY, a = a.config;
                    f && d.hovereffect && ("circle" === c.type && (c = {
                        color: d.hoverfillcolor,
                        alpha: d.hoverfillalpha,
                        angle: 360 - d.hoverfillangle,
                        ratio: d.hoverfillratio,
                        gradientUnits: "objectBoundingBox",
                        radialGradient: k.radialGradient,
                        cx: k.cx,
                        cy: k.cy
                    }, d._hoverattrs.fill = B(c)), c = y({}, d._hoverattrs), "image" === f.type && (delete c.fill, delete c.stroke, delete c["stroke-width"]), f.attr(c));
                    e || (e = d._markerEventArgs = {
                        x: g.x1 / g.xs,
                        y: g.y1 / g.ys,
                        scaledX: g.x1,
                        scaledY: g.y1,
                        chartX: m + g.x1,
                        chartY: h + g.y1,
                        id: d._markerId,
                        label: d._markerLabel
                    });
                    q.raiseEventGroup(a.id, "markerRollOver", e, b.chartInstance, a, void 0, void 0, void 0)
                }
            }, getHoverOutFn: function () {
                var b = this.chart;
                return function () {
                    var a =
                            this.data("marker"), c = a.markerShape, d = c.wrapper, e = c.fillOptions, a = a.config,
                        h = c.options;
                    d && c.options.hovereffect && ("circle" === c.type && (h._defaultattrs.fill = B(e)), e = y({}, c.options._defaultattrs), "image" === d.type && (delete e.fill, delete e.stroke, delete e["stroke-width"]), d.attr(e));
                    q.raiseEventGroup(a.id, "markerRollOut", c.options._markerEventArgs, b.chartInstance, void 0, void 0, void 0)
                }
            }, getClickFn: function () {
                var b = this;
                return function (a) {
                    var c = this.data("marker"), d = b.chart, e = d.config.scalingParams, h = e.translateX,
                        e = e.translateY, f = c.markerShape, c = f.options, f = f.bounds, k = c._markerEventArgs;
                    k || (k = c._markerEventArgs = {
                        x: f.x1 / f.xs,
                        y: f.y1 / f.ys,
                        scaledX: f.x1,
                        scaledY: f.y1,
                        chartX: h + f.x1,
                        chartY: e + f.y1,
                        id: c._markerId,
                        label: c._markerLabel
                    });
                    q.raiseEvent("markerClick", k, d.chartInstance, a)
                }
            }, highlightPoint: function (b) {
                var a = b.element, c = this.chart, d = c.graphics, e = c.components.paper,
                    h = d.trackerElems || (d.trackerElems = {}), f = b.shapeInfo, k, m = b.x, n = b.y, p, q, u;
                k = c.config.lastHoveredPoint;
                var r = !1;
                !1 === b ? (k = k && k.shapeInfo.type, (h = h[k]) &&
                h.hide(), c.config.lastHoveredPoint = null) : (k = f.type, "circle" === k && (k = "polygon"), h = h[k], "polygon" === k ? (p = f.sides || 1, q = f.startAngle, f = f.radius, h ? h.attr({polypath: [p, m, n, f, q]}) : (h = d.trackerElems[k] = e.polypath(p, m, n, f, q), r = !0)) : "rect" === k ? (q = f.width, f = f.height, h ? h.attr({
                    x: m,
                    y: n,
                    width: q,
                    height: f
                }) : (h = d.trackerElems[k] = e.rect(m, n, q, f), r = !0)) : "arc" === k && (p = a.markerShape.bounds.innerR, u = a.markerShape.bounds.angles, q = u.start * Y, u = u.end * Y, f = f.radius, h ? h.attr({ringpath: [m, n, f, p, q, u]}) : (h = d.trackerElems[k] = e.ringpath(m,
                    n, f, p, q, u), r = !0)), c.config.lastHoveredPoint = b, r && (h.attr({
                    fill: Z,
                    stroke: Z
                }).click(this.getClickFn()).hover(this.getHoverFn(), this.getHoverOutFn()), h.trackTooltip(!0)), h.show().tooltip(a.config.tooltext).data("marker", a))
            }, _drawConnectors: function () {
                var b = this.chart, a = this.components.connectors, c = a.length, d = b.config.scalingParams,
                    e = b.config.connectorOpts, h = e.showLabels, f = b.components.mapAnnotations, k, m = [], n = [], p,
                    q, u, r, v = [];
                v.push({id: "connectorLabels", fillalpha: "100", items: n});
                v.push({
                    id: "connectors",
                    fillalpha: "100", items: m
                });
                for (k = 0; k < c; k++) a[k] && (q = a[k].config.fromMarker.config, r = a[k].config.toMarker.config, p = q.options.x, q = q.options.y, u = r.options.x, r = r.options.y, a[k].config.x = p, a[k].config.y = q, a[k].config.tox = u, a[k].config.toy = r, m.push(a[k].config), a[k].labelConfig && h && (a[k].labelConfig.x = ((Number(p) + Number(u)) / 2).toString(), a[k].labelConfig.y = ((Number(q) + Number(r)) / 2).toString(), a[k].labelConfig.fontsize = e.fontSize / (d.scaleFactor * b.baseScaleFactor), n.push(a[k].labelConfig)));
                f.addGroup(v[0]);
                f.addGroup(v[1])
            }, getShapeArgs: function () {
                var b = this.config, a = y({}, this.shapeObj), c;
                b.autoScale = 1;
                return a ? ("polygon" === a.type ? 3 > a.sides ? a.type = "circle" : a.startangle = b.startAngle : "arc" === a.type && (c = (a.radius || b.markerRadius) * b.autoScale, a.radius = c, a.innerradius = a.innerradius && a.innerradius * b.autoScale || .6 * c), a) : null
            }, _getLabelOptions: function (b, a, c, d, e) {
                var h, f = b && b.toLowerCase();
                this.getLabelAlignment[f] || (f = "center");
                b = Number(c.x);
                h = Number(c.y);
                c = void 0 === d || void 0 === e ? c.radius || 0 : /^(top|bottom)$/ig.test(f) &&
                    .5 * e || /^(left|right)$/ig.test(f) && .5 * d || 0;
                c = Number(c) + Number(a);
                return this.getLabelAlignment[f](b, h, c)
            }, getLabelAlignment: {
                top: function (b, a, c) {
                    return {x: b.toString(), y: (a - c).toString(), align: "center", valign: "top"}
                }, left: function (b, a, c) {
                    return {x: (b - c).toString(), y: a.toString(), align: "right", valign: "middle"}
                }, right: function (b, a, c) {
                    return {x: (b + c).toString(), y: a.toString(), align: "left", valign: "middle"}
                }, bottom: function (b, a, c) {
                    return {x: b.toString(), y: (a + c).toString(), align: "center", valign: "bottom"}
                }, center: function (b,
                                     a) {
                    return {x: b.toString(), y: a.toString(), align: "center", valign: "middle"}
                }
            }, getWrapWidth: {
                right: function (b, a) {
                    return a
                }, left: function (b, a) {
                    return b - a
                }, center: function (b, a) {
                    return 2 * H(a, b - a)
                }
            }, getWrapHeight: {
                top: function (b, a) {
                    return a
                }, middle: function (b, a) {
                    return 2 * H(a, b - a)
                }, bottom: function (b, a) {
                    return b - a
                }
            }, addMarkerItem: function (b) {
                var a = this.components.markerObjs, c = this.components.shapeObjs, d = this.components.markerGroup,
                    e = this.components.markerLabelGroup, h, f;
                if ((f = b.id.toLowerCase()) && !a[f]) {
                    delete b.value;
                    this.imageLoadCount = 0;
                    b = this._initializeMarkerItem(f, b, null);
                    b.dataset = this;
                    if (h = b.config.options.shapeid) b.shapeObj = c[h && h.toLowerCase()];
                    a[f] = b;
                    a = this._drawMarkerItem.call(b);
                    d && e && (b.markerShape = a.markerShape && d.addItem(a.markerShape, !0), b.markerLabel = a.markerLabel && e.addItem(a.markerLabel, !0));
                    this._buildKdTree()
                }
            }, updateMarkerItem: function (b, a) {
                var c = this.chart.components.mapAnnotations, d, e = this.components.markerObjs[b];
                e && (d = e.config.options, y(d, a), this.imageLoadCount = 0, d = this._drawMarkerItem.call(e).markerShape,
                    this._buildKdTree(), c.update(b, d))
            }, _removeMarkerItem: function (b) {
                var a = this.components, c = a.markerObjs, d = c[b], a = a.kdArrayMap, e;
                d && (e = d.markerShape, d = d.markerLabel, e && e.destroy(), d && d.destroy(), delete a[b], this._buildKdTree());
                delete c[b]
            }, getElement: function (b) {
                if (this.components.kDTree) return this.components.kDTree.getNeighbour(b)
            }
        }, "Entities"])
    }, [3, 2, 0, "release"]])
});

//# sourceMappingURL=http://localhost:3052/3.12.2/map/eval/fusioncharts.maps.js.map
