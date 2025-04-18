/*
 FusionCharts JavaScript Library - KDtree
 Copyright FusionCharts Technologies LLP
 License Information at <http://www.fusioncharts.com/license>

 @version 3.12.2
 FusionCharts JavaScript Library - ZoomScatter Chart
 Copyright FusionCharts Technologies LLP
 License Information at <http://www.fusioncharts.com/license>

 @version 3.12.2
*/
(function (P) {
    "object" === typeof module && "undefined" !== typeof module.exports ? module.exports = P : P(FusionCharts)
})(function (P) {
    P.register("module", ["private", "modules.renderer.js-kdtree", function () {
        function K(f) {
            function x(f, E, H, r) {
                var l = {}, e;
                e = r ? "y" : "x";
                if (E === H) return l.point = f[E], l;
                if (1 === H - E) return f[E][e] > f[H][e] ? (l.point = f[E], l.left = {point: f[H]}) : (l.point = f[H], l.left = {point: f[E]}), l;
                e = E + H >> 1;
                r ? u(f, e, E, H) : v(f, e, E, H);
                l.point = f[e];
                l.left = x(f, E, e - 1, !r);
                l.right = x(f, e + 1, H, !r);
                return l
            }

            function v(f, x, e,
                       n) {
                for (var l, u, C, q, I; n > e;) {
                    600 < n - e && (l = n - e + 1, u = x - e + 1, C = O(l), q = .5 * N(2 * C / 3), I = .5 * B(C * q * (l - q) / l) * (0 > u - l / 2 ? -1 : 1), C = y(e, A(x - u * q / l + I)), l = D(n, A(x + (l - u) * q / l + I)), v(f, x, C, l));
                    l = f[x];
                    u = e;
                    q = n;
                    r(f, e, x);
                    for (f[n].x > l.x && r(f, e, n); u < q;) {
                        r(f, u, q);
                        u++;
                        for (q--; f[u].x < l.x;) u++;
                        for (; f[q].x > l.x;) q--
                    }
                    f[e].x === l.x ? r(f, e, q) : (q++, r(f, q, n));
                    q <= x && (e = q + 1);
                    x <= q && (n = q - 1)
                }
            }

            function u(f, x, e, n) {
                for (var l, v, C, q, I; n > e;) {
                    600 < n - e && (l = n - e + 1, v = x - e + 1, C = O(l), q = .5 * N(2 * C / 3), I = .5 * B(C * q * (l - q) / l) * (0 > v - l / 2 ? -1 : 1), C = y(e, A(x - v * q / l + I)), l = D(n, A(x + (l -
                        v) * q / l + I)), u(f, x, C, l));
                    l = f[x];
                    v = e;
                    q = n;
                    r(f, e, x);
                    for (f[n].y > l.y && r(f, e, n); v < q;) {
                        r(f, v, q);
                        v++;
                        for (q--; f[v].y < l.y;) v++;
                        for (; f[q].y > l.y;) q--
                    }
                    f[e].y === l.y ? r(f, e, q) : (q++, r(f, q, n));
                    q <= x && (e = q + 1);
                    x <= q && (n = q - 1)
                }
            }

            function r(f, e, x) {
                var n = f[e];
                f[e] = f[x];
                f[x] = n
            }

            var n = f && f[0] && f[0].r || 5, e, y = Math.max, A = Math.floor, B = Math.sqrt, D = Math.min,
                O = Math.log, N = Math.exp, L = Math.pow;
            f = f || [];
            for (e = f.length; e--;) f[e].r > n && (n = f[e].r), f[e].i = e, f[e].x = +f[e].x, f[e].y = +f[e].y;
            return {
                tree: 0 === f.length ? {} : x(f, 0, f.length - 1, !1), search: function (f,
                                                                                         e, x) {
                    function r(a, d) {
                        return "circle" === x ? B(L(a - f, 2) + L(d - e, 2)) <= A : a >= A && a <= D && d >= c && d <= b
                    }

                    function l(b) {
                        var c = f >= b.x1 && f <= b.x2 && e >= b.y1 && e <= b.y2, J;
                        J = b.point.y;
                        J = B(L(f - b.point.x, 2) + L(e - J, 2));
                        y ? c ? a ? b.point.i > y.point.i && (y = b, a = c, d = J) : (y = b, a = c, d = J) : !a && J < d && (y = b, a = c, d = J) : (y = b, a = c, d = J)
                    }

                    function u(a) {
                        "circle" === x ? A = a : (A = f - a || 0, D = f + a || 0, c = e - a || 0, b = e + a || 0)
                    }

                    function v(a) {
                        a && a.point && (u(a.point.r), r(a.point.x, a.point.y) && l(a), A <= a.point.x && q(a.left), D >= a.point.x && q(a.right))
                    }

                    function q(a) {
                        a && a.point && (u(a.point.r),
                        r(a.point.x, a.point.y) && l(a), c <= a.point.y && v(a.left), b >= a.point.y && v(a.right))
                    }

                    var y, A = f - n, D = f + n, c = e - n, b = e + n, a = !1, d = 0;
                    v(this.tree);
                    return y && y.point || y
                }
            }
        }

        function e(f) {
            this.configure(f)
        }

        var P = this.hcLib, T = function (f, e, v, u, r) {
                return Math.pow(v - f, 2) + Math.pow(u - e, 2) <= Math.pow(r, 2)
            }, X = Math.PI, aa = Math.cos, ca = Math.sin, Y = Math.max, M = Math.min, U = X / 180,
            y = function (f, e, v, u, r, n) {
                return v <= Y(f, r) && v >= M(f, r) && u <= Y(e, n) && u >= M(e, n) ? !0 : !1
            }, Q = function (f, e, v, u, r, n) {
                e = (u - e) * (r - v);
                f = (v - f) * (n - u);
                isNaN(e) && (e = 0);
                isNaN(f) &&
                (f = 0);
                f = e - f;
                return 0 === f ? 0 : 0 < f ? 1 : 2
            };
        e.prototype = {
            configure: function (f) {
                this.validatorFn = f ? this.shapeValidator() : this.defaultValidator()
            }, defaultValidator: function () {
                var f = this;
                return function (e) {
                    var v = f.mousePoint;
                    return e && 1 >= Math.pow((e.x - v.x) / f.xLimit, 2) + Math.pow((e.y - v.y) / f.yLimit, 2) ? !0 : !1
                }
            }, shapeValidator: function () {
                var f = this;
                return function (e) {
                    var v = f.mousePoint, u = e && e.shapeInfo, r = !1, n, R = v.x, v = v.y, F;
                    switch (u && u.type) {
                        case "circle":
                            n = u.radius;
                            r = T(R, v, e.x, e.y, n);
                            break;
                        case "arc":
                            r = u.innerradius;
                            n = u.radius;
                            r = !T(R, v, e.x, e.y, r) && T(R, v, e.x, e.y, n);
                            break;
                        case "polygon":
                            n = u.radius;
                            F = u.startAngle;
                            u = u.sides;
                            a:{
                                r = e.x;
                                e = e.y;
                                var A, B = 0, D, O, N, L, M;
                                A = !1;
                                if (T(R, v, r, e, n) && 3 <= u) {
                                    A = void 0 === F ? .5 * X : F % 360 * U;
                                    M = 2 * X / u;
                                    D = r + n * aa(-A);
                                    L = e + n * ca(-A);
                                    for (F = 0; F < u; F++) {
                                        A += M;
                                        O = r + n * aa(-A);
                                        N = e + n * ca(-A);
                                        var E = D, H = L, K = O, l = N, P = R, C = v, q = v, I = Q(E, H, K, l, P, C),
                                            Y = Q(E, H, K, l, Infinity, q), Z = Q(P, C, Infinity, q, E, H),
                                            c = Q(P, C, Infinity, q, K, l);
                                        if (I !== Y && Z !== c || 0 === I && y(E, H, P, C, K, l) || 0 === Y && y(E, H, Infinity, q, K, l) || 0 === Z && y(P, C, E, H, Infinity, q) || 0 ===
                                            c && y(P, C, K, l, Infinity, q)) {
                                            if (0 === Q(D, L, R, v, O, N)) {
                                                r = y(D, L, R, v, O, N);
                                                break a
                                            }
                                            B++
                                        }
                                        D = O;
                                        L = N
                                    }
                                    A = 0 !== B % 2
                                }
                                r = A
                            }
                            break;
                        case "rect":
                            r = e.x;
                            n = e.y;
                            e = r + (u.width || 0);
                            u = n + (u.height || 0);
                            r = R >= r && R <= e && v >= n && v <= u;
                            break;
                        case "default":
                            r = !1
                    }
                    return r
                }
            }, buildKdTree: function (e) {
                this.kdTree = K(e);
                this.tree = this.kdTree.tree;
                return this
            }, getNeighbour: function (e, x, v) {
                var u = this.tree,
                    r = {x1: e.x - this.xLimit, x2: e.x + this.xLimit, y1: e.y - this.yLimit, y2: e.y + this.yLimit},
                    n = this.validatorFn;
                this.mousePoint = e;
                if (x) return this.kdTree && this.kdTree.search(e.x,
                    e.y, v);
                if (u) return this._searchBtwnLimit(r, u, !0, n)
            }, _compair2closest: function (e, x) {
                return !e || e && x && x.i > e.i ? x : e
            }, _searchBtwnLimit: function (e, x, v, u) {
                var r, n, y = v ? e.x1 : e.y1, F = v ? e.x2 : e.y2;
                r = x && x.point && x.point[v ? "x" : "y"];
                if (void 0 !== r) return u(x.point) && (n = x.point), r >= y && x.left && (n = this._compair2closest(n, this._searchBtwnLimit(e, x.left, !v, u))), r <= F && x.right && (n = this._compair2closest(n, this._searchBtwnLimit(e, x.right, !v, u))), n
            }, _setSearchLimit: function (e, x) {
                this.xLimit = e;
                this.yLimit = x
            }
        };
        e.prototype.constructor =
            e;
        P.KdTree = e
    }]);
    P.register("module", ["private", "modules.renderer.js-zoomscatter", function () {
        var K = this, e = K.hcLib, da = e.parseTooltext, T = e.Raphael, X = K.window, aa = e.addEvent,
            ca = e.removeEvent, Y = X.MouseEvent, M = X.document, U = e.BLANKSTRING, y = e.pluck, Q = e.pluckNumber,
            f = e.getFirstValue, x = e.toRaphaelColor, v = e.hasSVG, u = e.isIE || e.isIE11, r = e.getFirstColor,
            n = e.hasTouch, R = "rgba(192,192,192," + (u ? .002 : 1E-6) + ")", F = Math, A = F.round, B = F.min,
            D = F.max, O = F.abs, N = F.cos, L = F.sin, ea = F.sqrt, E = F.pow, H = F.floor, fa = 2 * Math.PI,
            l = e.getMouseCoordinate,
            ga = e.POSITION_BOTTOM, C = e.chartAPI, q = e.HUNDREDSTRING, F = !e.CREDIT_REGEX.test(X.location.hostname),
            I = function (c, b) {
                var a = l(b.linkedItems.container, c), d = a.chartX, h = a.chartY, t = b.config, J = t.canvasLeft,
                    e = t.canvasTop, g = t.canvasLeft + t.canvasWidth, t = t.canvasHeight + t.canvasTop;
                a.insideCanvas = !1;
                a.originalEvent = c;
                d > J && d < g && h > e && h < t && (a.insideCanvas = !0);
                return a
            }, ha = function (c, b, a) {
                var d;
                b && c && (a || (a = {}), a.originalEvent && (a = a.originalEvent), a.touches && (a = a.touches[0]), b.dispatchEvent ? (Y && !u ? d = new Y(c, {
                    bubbles: !!a.bubbles,
                    cancelable: !!a.cancelable,
                    clientX: a.clientX || a.pageX && a.pageX - M.body.scrollLeft - M.documentElement.scrollLeft || 0,
                    clientY: a.clientY || a.pageY && a.pageY - M.body.scrollTop - M.documentElement.scrollTop || 0,
                    screenX: a.screenX || 0,
                    screenY: a.screenY || 0,
                    pageX: a.pageX || 0,
                    pageY: a.pageY || 0
                }) : M.createEvent && (d = M.createEvent("HTMLEvents"), d.initEvent(c, !!a.bubbles, !!a.cancelable), d.clientX = a.clientX || a.pageX && a.pageX - M.body.scrollLeft - M.documentElement.scrollLeft || 0, d.clientY = a.clientY || a.pageY && a.pageY - M.body.scrollTop -
                    M.documentElement.scrollTop || 0, d.screenX = a.screenX || 0, d.screenY = a.screenY || 0, d.pageX = a.pageX || 0, d.pageY = a.pageY || 0), d.eventName = c, d && b.dispatchEvent(d)) : M.createEventObject && b.fireEvent && (d = M.createEventObject(), d.eventType = c, d.eventName = c, b.fireEvent("on" + c, d)))
            }, Z = e.KdTree;
        C("zoomscatter", {
            standaloneInit: !0,
            defaultDatasetType: "zoomscatter",
            applicableDSList: {zoomscatter: !0},
            highlightEnabled: !1,
            friendlyName: "ZoomScatter Chart",
            isXY: !0,
            defaultZeroPlaneHighlighted: !1,
            creditLabel: F,
            configure: function () {
                var c,
                    b = this.config;
                C.scatter.configure.apply(this, arguments);
                c = this.jsonData.chart;
                b.stepZoom = 1 - Q(c.stepzoom, 25) / 100;
                b.showToolBarButtonToolText = Q(c.showtoolbarbuttontooltext, 1);
                b.btnResetChartToolText = y(c.btnresetcharttooltext, "Reset Chart");
                b.btnZoomOutToolText = y(c.btnzoomouttooltext, "Zoom out to previous level");
                b.btnZoomInToolText = y(c.btnzoomintooltext, "<strong>Zoom in</strong><br/>Or double-click on plot to zoom-in");
                b.btnSelectZoomToolText = y(c.btnselectzoomtooltext, "<strong>Select a region to zoom-in</strong><br/>Click to enable pan mode.");
                b.btnPanToolText = y(c.btnpantooltext, "<strong>Drag to move across chart</strong><br/>Click to enable select-zoom mode.")
            },
            _setAxisLimits: function () {
                var c = this.jsonData, b = this.components.xAxis, a = y(c.chart.xaxislabelmode, "categories"),
                    c = c.categories && c.categories[0], c = (c && c.category || []).slice(), d, h = Infinity,
                    t = -Infinity, e;
                if ("auto" === a || 0 === c.length) {
                    C.mscartesian._setAxisLimits.call(this);
                    a = b[0].getLimit();
                    b[0].setAxisConfig({hasCategory: 0});
                    b[0].resetCategoryAxisComponents();
                    for (d = 0; d < c.length; d +=
                        1) if (e = c[d].x) e < h && (h = e), e > t && (t = e);
                    if (t > a.max || h < a.min) t = D(t, a.max), h = B(h, a.min), b[0].setDataLimit(t, h)
                } else b[0].resetNumericAxisComponents(), C.scatterBase._setAxisLimits.call(this)
            },
            _createAxes: function () {
                var c = this.components;
                C.scatter._createAxes.call(this, arguments);
                c.yAxis[0].setAxisConfig({animateAxis: !1});
                c.xAxis[0].setAxisConfig({animateAxis: !1})
            },
            _spaceManager: function () {
                var c, b, a = this.config, d = this.components, h = d.xAxis && d.xAxis[0];
                b = d.yAxis && d.yAxis || [];
                var t, e, m = d.legend.config.legendPos,
                    g = a.xDepth, k = a.yDepth, p = a.canvasBgDepth, f = a.canvasBaseDepth, ia = a.canvasBasePadding,
                    G = d.canvas.config.canvasBorderWidth, n = a.realTimeConfig && a.realTimeConfig.showRTValue,
                    w = a.borderWidth, V = a.canvasMarginTop, W = a.canvasMarginBottom, z = a.canvasMarginLeft,
                    S = a.canvasMarginRight, d = a.minCanvasHeight, l = a.minCanvasWidth;
                c = a.minChartWidth;
                var r = a.minChartHeight, u = a.height, v = a.width, q = a._initConfig || (a._initConfig = {}), x = !1,
                    y = a.origCanvasTopMargin, A = a.origCanvasBottomMargin, B, C, D = [];
                q.canvasLeft = a.canvasLeft;
                q.canvasWidth =
                    a.canvasWidth;
                q.canvasHeight = a.canvasHeight;
                q.canvasTop = a.canvasTop;
                q.availableHeight = a.availableHeight;
                q.availableWidth = a.availableWidth;
                a.canvasWidth - 2 * w < c && (e = (a.canvasWidth - c) / 2);
                a.canvasHeight - 2 * w < r && (t = (a.canvasHeight - r) / 2);
                this._allocateSpace({top: t || w, bottom: t || w, left: e || w, right: e || w});
                a.origCanvasWidth = a.canvasWidth;
                a.origCanvasLeft = a.canvasLeft;
                a.canvasRight = a.canvasLeft + a.canvasWidth;
                a.origCanvasRight = a.canvasRight;
                w = 0;
                for (e = b.length; w < e; w++) t = b[w], c = .7 * a.availableWidth, c = t && t.placeAxis(c) ||
                    {}, D.push({axisIndex: w, spaceTaken: c}), t && this._allocateSpace(c);
                b = .7 * a.canvasHeight;
                this._manageActionBarSpace && this._allocateSpace(this._manageActionBarSpace(b));
                this._manageLegendSpace(void 0);
                k && (this._allocateSpace({bottom: k}), a.shift = g + ia + f);
                p && this._allocateSpace({right: p});
                a.canvasWidth - 2 * G < l && (C = (a.canvasWidth - l) / 2);
                this._allocateSpace({left: C || G, right: C || G});
                l > v - z - S && (k = a.canvasWidth - l, g = z + S, z = a.canvasMarginLeft = k * z / g, S = a.canvasMarginRight = k * S / g);
                z = z > a.canvasLeft ? z - a.canvasLeft : 0;
                this._allocateSpace({
                    left: z,
                    right: S > v - a.canvasRight ? S + a.canvasRight - v : 0
                });
                b = m === ga ? .6 * a.canvasHeight : .6 * a.canvasWidth;
                this._manageChartMenuBar(b);
                b = .2 * a.availableHeight;
                this._allocateSpace(this._getSumValueSpace(b));
                b = .3 * a.availableHeight;
                a.origCanvasHeight = a.canvasHeight;
                a.canvasBottom = a.canvasTop + a.canvasHeight;
                a.origCanvasBottom = a.canvasBottom;
                a.origCanvasTop = a.canvasTop;
                a.realtimeEnabled && (n ? this._allocateSpace(this._realTimeValuePositioning(b)) : this._hideRealTimeValue());
                b = .6 * a.availableHeight;
                a.xAxisSpaceAllocation = m =
                    h && h.placeAxis(b);
                h && this._allocateSpace(m);
                this._getDSspace && this._allocateSpace(this._getDSspace(.4 * a.canvasWidth));
                b = .3 * a.availableHeight;
                this._manageScrollerPosition && this._manageScrollerPosition(b);
                a.canvasHeight - 2 * G < d && (B = (a.canvasHeight - d) / 2);
                this._allocateSpace({top: B || G, bottom: B || G});
                this._allocateSpace({bottom: f});
                d > u - V - W && (x = !0, k = a.canvasHeight - d, g = V + W, V = a.canvasMarginTop = k * V / g, W = a.canvasMarginBottom = k * W / g);
                h = V > a.canvasTop ? V - a.canvasTop : 0;
                f = W > u - a.canvasBottom ? W + a.canvasBottom - u : 0;
                this._allocateSpace({
                    top: h,
                    bottom: f
                });
                x && (g = y + A, x = a.canvasHeight, x > d && (k = x - d, h = k * y / g, f = k * A / g), this._allocateSpace({
                    top: h,
                    bottom: f
                }));
                a.actualCanvasMarginTop = h;
                a.actualCanvasMarginLeft = z
            },
            _createToolBox: function () {
                var c, b, a, d, h, t, e, m, g, k = this, p = k.config;
                d = k.components;
                c = d.chartMenuBar;
                b = d.actionBar;
                g = p.showToolBarButtonToolText;
                var f = p.stepZoom;
                c && c.drawn || b && b.drawn || (C.mscartesian._createToolBox.call(k), c = d.tb, b = c.graphics || (c.graphics = {}), a = c.getAPIInstances(c.ALIGNMENT_HORIZONTAL), a = a.Symbol, d = (d.chartMenuBar || d.actionBar).componentGroups[0],
                    h = b.zoomInButton = (new a("zoomInIcon", void 0, c.idCount++, c.pId)).attachEventHandlers({
                        click: function () {
                            k.zoom(f)
                        }, tooltext: g && p.btnZoomInToolText || U
                    }), t = b.zoomOutButton = (new a("zoomOutIcon", void 0, c.idCount++, c.pId)).attachEventHandlers({
                    click: function () {
                        var a = p.viewPortHistory;
                        1 < a.length && (a = a.slice(-2, -1)[0], k.updateVisual(a.x, a.y, a.scaleX, a.scaleY))
                    }, tooltext: g && p.btnZoomOutToolText || U
                }), e = b.resetButton = (new a("resetIcon", void 0, c.idCount++, c.pId)).attachEventHandlers({
                    click: function () {
                        var a = p.viewPortConfig,
                            b = k.graphics;
                        1 < p.viewPortHistory.length && (a.isReset = !0, k.zoomSelection(0, 0, p.canvasWidth, p.canvasHeight), p.viewPortHistory.splice(1), b.trackerGroup.attr({cursor: "default"}), k.updateButtonVisual(), k.updateSelectionBox(0, 0, 0, 0));
                        K.raiseEvent("zoomReset", {}, k.chartInstance, [k.chartInstance.id])
                    }, tooltext: g && p.btnResetChartToolText || U
                }), m = b.toggleZoomInButton = (new a("zoomModeIcon", void 0, c.idCount++, c.pId)).attachEventHandlers({
                    click: function () {
                        k.toogleDragPan(!0)
                    }, tooltext: g && p.btnSelectZoomToolText ||
                        U
                }), g = b.togglePanButton = (new a("panModeIcon", void 0, c.idCount++, c.pId)).attachEventHandlers({
                    click: function () {
                        k.toogleDragPan(!0)
                    }, tooltext: g && p.btnPanToolText || U
                }), d.addSymbol(g, !0), d.addSymbol(m, !0), d.addSymbol(e, !0), d.addSymbol(t, !0), d.addSymbol(h, !0))
            },
            _createLayers: function () {
                var c = this.graphics, b = this.components.paper;
                C.scatter._createLayers.call(this);
                !c.imageContainer && (c.imageContainer = b.group("dataset-orphan", c.datasetGroup));
                this.__preDraw()
            },
            _dist: function (c, b) {
                var a = this.components, d;
                d = a.xAxis[0];
                a = a.yAxis[0];
                if (c && b) return d = (c.x - b.x) * d.getPVR(), a = (c.y - b.y) * a.getPVR(), Math.sqrt(Math.pow(d, 2) + Math.pow(a, 2))
            },
            __preDraw: function () {
                var c = this.graphics, b = c.imageContainer, a = this.config, d = a.canvasLeft, h = a.canvasTop,
                    t = a.canvasWidth, e = a.canvasHeight, m = this.jsonData.chart, g = this.linkedItems,
                    g = g.eventListeners || (g.eventListeners = []), k = this.linkedItems.container,
                    p = this.components.paper;
                a.updateAnimDuration = 500;
                b.transform("t" + d + "," + h);
                b.attr({"clip-rect": d + "," + h + "," + t + "," + e});
                a.status = "zoom";
                a.maxZoomLimit = Q(m.maxzoomlimit, 1E3);
                a.viewPortHistory = [{scaleX: 1, scaleY: 1, x: 0, y: 0}];
                !c.trackerElem && (c.trackerElem = p.rect(d, h, t, e, 0, c.trackerGroup).attr({fill: R, stroke: R}));
                ca(k, n ? "touchstart" : "mousemove", this.searchMouseMove);
                g.push(aa(k, "touchstart mousemove", this.searchMouseMove, this));
                this.zoomPanManager(b)
            },
            searchMouseMove: function (c) {
                var b, a, d, h = c.data, t = h.config, e = t.viewPortConfig, m = h.components, g = m.xAxis[0],
                    k = m.yAxis[0], p = m.trendlines, m = m.vTrendlines;
                h.linkedItems.container && !t.isDragging &&
                ((b = I(c, h)) && b.insideCanvas ? (a = t.canvasTop, d = g.getAxisConfig("axisDimention").x || t.canvasLeft, b = e.lastMouseCoordinate = {
                    x: Number(g.getValue(b.chartX - d)),
                    y: Number(k.getValue(b.chartY - a))
                }, t.lastMouseEvent = c, t.isDragging || (t = h._bestNeighbour(e.lastMouseCoordinate), p = h._getHoveredTrendLine(b, p), m = h._getHoveredTrendLine(b, m), p && p.showontop ? h._drawTooltip(c.originalEvent, p.tooltext) : p || !m || t ? !p || m || t ? p && m && !t && h._drawTooltip(c.originalEvent, m.tooltext) : h._drawTooltip(c.originalEvent, p.tooltext) : h._drawTooltip(c.originalEvent,
                    m.tooltext)), e.neighbourSearchTimer = void 0) : h.highlightPoint(!1))
            },
            updateSelectionBox: function (c, b, a, d) {
                var h = this.config, t = this.graphics, e = this.components.paper, m = h.viewPortConfig, g = h.cursor,
                    k = t.selectionBox, p = h.canvasRight, f = h.canvasLeft, n = h.canvasTop, G = h.canvasBottom,
                    l = c < a ? c : a, w = b < d ? b : d, V = c > a ? c : a, W = b > d ? b : d, z = a - c, S = b - d,
                    g = g ? 0 < z && 0 < S ? "ne-resize" : 0 > z && 0 < S ? "nw-resize" : 0 > z && 0 > S ? "sw-resize" : 0 < z && 0 > S ? "se-resize" : "default" : "default",
                    l = l < f ? f : l > p ? p : l, w = w < n ? n : w > G ? G : w,
                    z = c === a && b === d ? 0 : (V > p ? p : V < f ? f : V) - l, S = c ===
                    a && b === d ? 0 : (W > G ? G : W < n ? n : W) - w;
                k ? k.attr({
                    x: l,
                    y: w,
                    width: z,
                    height: S,
                    cursor: g
                }) : t.selectionBox = e.rect(l, w, z, S).attr({
                    "stroke-width": 1,
                    stroke: "red",
                    fill: "#00FF00",
                    opacity: .2,
                    cursor: g
                });
                t.trackerGroup.attr({cursor: g});
                h.cursor = g;
                m.selectionDimensions || (m.selectionDimensions = {startX: 0, endX: 0, startY: 0, endY: 0});
                m.selectionDimensions.startX = c;
                m.selectionDimensions.endX = b;
                m.selectionDimensions.startY = a;
                m.selectionDimensions.endY = d
            },
            getValue: function (c) {
                var b = this.config, a = this.components, d = b.viewPortConfig;
                c =
                    this.getOriginalPositions(c.x, c.y, c.x, c.y);
                var h = a.xAxis[0].config.axisRange, a = a.yAxis[0].config.axisRange, t = h.min, e = a.max;
                return {
                    x: t + (c[0] - b.canvasLeft) / (b.canvasWidth * d.scaleX / (h.max - t)),
                    y: e - (c[1] - b.canvasTop) / (b.canvasHeight * d.scaleY / (e - a.min))
                }
            },
            _getTouchViewPort: function (c, b, a) {
                var d, h;
                h = this.config;
                var t = h.canvasLeft, e = h.canvasTop;
                d = h.canvasWidth;
                h = h.canvasHeight;
                var m = B(c[0].chartX, c[1].chartX) - t, g = B(c[0].chartY, c[1].chartY) - e,
                    k = Math.abs(c[1].chartX - c[0].chartX);
                c = Math.abs(c[1].chartY - c[0].chartY);
                var t = B(b[0].chartX, b[1].chartX) - t, p = B(b[0].chartY, b[1].chartY) - e,
                    e = Math.abs(b[1].chartX - b[0].chartX) / k * a.scaleX;
                b = Math.abs(b[1].chartY - b[0].chartY) / c * a.scaleY;
                m = a.x + m / a.scaleX - t / e;
                a = a.y + g / a.scaleY - p / b;
                m = 0 > m ? 0 : m;
                a = 0 > a ? 0 : a;
                b = 1 > b ? 1 : b;
                e = 1 > e ? 1 : e;
                d -= d / e;
                h -= h / b;
                return {x: m > d ? d : m, y: a > h ? h : a, scaleX: e, scaleY: b}
            },
            getOriginalPositions: function (c, b, a, d) {
                var h = this.config, t = h.viewPortConfig, e = t.scaleX, m = t.scaleY, g = t.x, t = t.y, k = B(c, a);
                c = D(c, a);
                a = B(b, d);
                b = D(b, d);
                c = c > h.canvasWidth ? h.canvasWidth : c;
                b = b > h.canvasHeight ?
                    h.canvasHeight : b;
                k = 0 > k ? 0 : k;
                a = 0 > a ? 0 : a;
                return [g + k / e, t + a / m, (c - k) / e, (b - a) / m]
            },
            zoomSelection: function (c, b, a, d) {
                var h = this.config;
                a && d && (a = Math.abs(h.canvasWidth / a), d = Math.abs(h.canvasHeight / d), this.updateVisual(c, b, a, d))
            },
            toogleDragPan: function (c) {
                var b = this.config, a = b.status;
                c && (b.status = "zoom" === a ? "pan" : "zoom", K.raiseEvent("zoomModeChanged", {panModeActive: b.status}, this.chartInstance, [this.chartInstance.id]));
                this.updateButtonVisual()
            },
            updateManager: function (c) {
                var b, a = this.components.dataset, d = a.length;
                for (b = 0; b < d; b += 1) a[b].draw(c);
                c || this._drawQuadrant()
            },
            zoomPanManager: function () {
                var c, b = [], a = [], d = this, h = d.config, t = d.graphics, e = d.components, m = e.xAxis[0],
                    g = e.eventListeners || (e.eventListeners = []), k = d.viewPortConfig, p = !1, f = 0, l, G = {},
                    q = function (a) {
                        var b = a.chartX, d = a.chartY, c = m.getAxisConfig("axisDimention").x || h.canvasLeft,
                            t = h.canvasTop, e = h.canvasRight, g = h.canvasBottom;
                        b < c && (a.chartX = D(b, c));
                        b > e && (a.chartX = B(b, e));
                        d < t && (a.chartY = D(d, t));
                        d > g && (a.chartY = B(d, g))
                    }, w = {
                        start: function (a) {
                            k = h.viewPortConfig;
                            n = a.touches ? !0 : !1;
                            b[0] = I(a, d);
                            d.updateSelectionBox(0, 0, 0, 0);
                            n && (p = !1, c = a.touches.length, 2 === c && (p = !0, G.x = k.x, G.y = k.y, G.scaleX = k.scaleX, G.scaleY = k.scaleY, b[0] = I(a.touches.item(0), d), b[1] = I(a.touches.item(1), d)));
                            h.isDragging = !1;
                            "pan" === h.status && (h.panStartX = k.x, h.panStartY = k.y, b[0].insideCanvas && t.trackerGroup.attr({cursor: "move"}))
                        }, on: function (c) {
                            var g, m, f, w;
                            f = h.panStartX;
                            var ba = h.panStartY;
                            g = k.scaleX;
                            m = k.scaleY;
                            var l = e.xAxis[0], q = e.yAxis[0];
                            n = c.touches ? !0 : !1;
                            a[0] = I(c, d);
                            a[0].insideCanvas ? "pan" ===
                                h.status && t.trackerGroup.attr({cursor: "move"}) : t.trackerGroup.attr({cursor: "default"});
                            n && c && (w = c.touches.length, 2 === w ? (p = !0, a[0] = I(c.touches.item(0), d), a[1] = I(c.touches.item(1), d)) : p = !1);
                            !h.isDragging && (!n || 2 < O(a[0].chartX - b[0].chartX) || 2 < O(a[0].chartY - b[0].chartY)) && (h.isDragging = !0, d.highlightPoint(!1), "zoom" === h.status && (b[0].pointValue = d.getValue({
                                x: b[0].chartX,
                                y: b[0].chartY
                            }), K.raiseEvent("selectionStart", {
                                chartX: b[0].chartX,
                                chartY: b[0].chartY,
                                pageX: b[0].pageX,
                                pageY: b[0].pageY,
                                selectionTop: b[0].chartX +
                                    h.canvasLeft,
                                selectionLeft: b[0].chartY + h.canvasTop,
                                selectionWidth: 0,
                                selectionHeight: 0,
                                startXVAlue: b[0].pointValue.x,
                                startYVAlue: b[0].pointValue.y
                            }, d.chartInstance, [d.chartInstance.id])));
                            if (h.isDragging) if (p) {
                                if (b[0].insideCanvas || b[1].insideCanvas) f = d._getTouchViewPort(b, a, G), d.updateVisual(f.x, f.y, f.scaleX, f.scaleY, !0)
                            } else "zoom" === h.status ? d.updateSelectionBox(b[0].chartX, b[0].chartY, a[0].chartX, a[0].chartY) : "pan" !== h.status || 1 === g && 1 === m || !b[0].insideCanvas || (c = b && a[0].chartX - b[0].chartX, w = b &&
                                a[0].chartY - b[0].chartY, f -= c / g, ba -= w / m, g = h.canvasWidth * (g - 1) / g, m = h.canvasHeight * (m - 1) / m, k.x = f > g ? g : 0 > f ? 0 : f, k.y = ba > m ? m : 0 > ba ? 0 : ba, d.updateManager(), l.draw(), q.draw())
                        }, end: function (c) {
                            var e = I(c, d), g = m.getAxisConfig("axisDimention").x || h.canvasLeft, k = h.canvasTop, J;
                            J = h.canvasWidth / 4;
                            var w = h.canvasHeight / 4, e = isNaN(e.chartX) || isNaN(e.chartY) ? a[0] || b[0] : e;
                            if (h.isDragging) {
                                if (p) {
                                    if (b[0].insideCanvas || b[1].insideCanvas) c = d._getTouchViewPort(b, a, G), d.updateVisual(c.x, c.y, c.scaleX, c.scaleY);
                                    p = !1
                                } else "zoom" ===
                                h.status && (c = e, J = b[0], q(J), q(c), k = d.getOriginalPositions(J.chartX - g, J.chartY - k, c.chartX - g, c.chartY - k)) && (c.pointValue = d.getValue({
                                    x: c.chartX,
                                    y: c.chartY
                                }), K.raiseEvent("selectionEnd", {
                                        chartX: c.chartX,
                                        chartY: c.chartY,
                                        pageX: c.pageX,
                                        pageY: c.pageY,
                                        selectionTop: c.chartX + h.canvasLeft,
                                        selectionLeft: c.chartY + h.canvasTop,
                                        selectionWidth: Math.abs(c.chartX - J.chartX),
                                        selectionHeight: Math.abs(c.chartY - J.chartY),
                                        startXVAlue: J.pointValue.x,
                                        startYVAlue: J.pointValue.y,
                                        endXValue: c.pointValue.x,
                                        endYValue: c.pointValue.y
                                    },
                                    d.chartInstance, [d.chartInstance.id]), J.chartX !== c.chartX && J.chartY !== c.chartY && d.zoomSelection(k[0], k[1], k[2], k[3]), d.updateSelectionBox(0, 0, 0, 0));
                                h.isDragging = !1;
                                c = a[0] || b[0];
                                c.data = d;
                                d.searchMouseMove(c)
                            } else e.insideCanvas && (f += 1, setTimeout(function () {
                                f = 0;
                                l = void 0
                            }, 500), 2 === f ? (c && c.touches ? !0 : !1) === l && (g = e.chartX - g, k = e.chartY - k, k = d.getOriginalPositions(g - J, k - w, g + J, k + w), d.zoomSelection(k[0], k[1], k[2], k[3]), c.preventDefault()) : l = c && c.touches ? !0 : !1);
                            t.trackerGroup.attr({cursor: "default"})
                        }
                    };
                g.push(aa(d.linkedItems.container,
                    "pointerdrag", function (a) {
                        w[a.state](a.originalEvent)
                    }))
            },
            _drawDataset: function () {
                var c, b = this.components.dataset, a = b.length;
                for (c = 0; c < a; c += 1) b[c]._deleteGridImages(), b[c].graphics._grid = {};
                this.updateVisual()
            },
            updateVisual: function (c, b, a, d, h) {
                var t, e, m, g, k;
                t = this.config;
                var p = this.components, f = t.viewPortConfig;
                k = t.canvasWidth;
                var l = t.canvasHeight, G = k, n = l, w = t.viewPortHistory, n = w.slice(-1)[0], q = [], q = t.status,
                    r = t._initConfig;
                e = p.xAxis[0];
                g = p.yAxis[0];
                m = this.graphics;
                p = (p = p.quadrant) && p.graphics.container;
                G = t.maxZoomLimit;
                f.x = isNaN(c) ? c = n.x : c;
                f.y = isNaN(b) ? b = n.y : b;
                f.scaleX = a || (a = n.scaleX);
                f.scaleY = d || (d = n.scaleY);
                a > G && (f.x = c = B(c, k - k / G), f.scaleX = a = G);
                d > G && (f.y = b = B(b, l - l / G), f.scaleY = d = G);
                if (h) this.updateManager(h); else for (1 < a || 1 < d ? ("zoom" === q && this.toogleDragPan(!0), a >= n.scaleX || d >= n.scaleY ? (w.push({
                    scaleX: a,
                    scaleY: d,
                    x: c,
                    y: b
                }), q = ["zoomed", "zoomIn"]) : (w.pop(), n = w.slice(-1)[0], f.x = n.x, f.y = n.y, f.scaleX = n.scaleX, f.scaleY = n.scaleY, q = ["zoomed", "zoomOut"])) : (1 < w.length && w.pop(), "pan" === q && this.toogleDragPan(!0),
                    q = ["zoomed", "zoomOut"]), this.toogleDragPan(), G = t.canvasWidth, n = t.canvasHeight, c && (c = f.x *= G / k), b && (f.y *= n / l), t.canvasLeft = r.canvasLeft, t.canvasWidth = r.canvasWidth, t.canvasHeight = r.canvasHeight, t.canvasTop = r.canvasTop, t.availableHeight = r.availableHeight, t.availableWidth = r.availableWidth, this._spaceManager(), this._postSpaceManagement(), this.updateManager(), e.draw(), g.draw(), this._drawCanvas(), k = {"clip-rect": t.canvasLeft + "," + t.canvasTop + "," + t.canvasWidth + "," + t.canvasHeight}, t.viewPortConfig && this.graphics.imageContainer.attr({
                    x: t.canvasLeft,
                    y: t.canvasRight
                }), m.imageContainer.attr(k).transform("T" + t.canvasLeft + "," + t.canvasTop), m.tracker && m.tracker.attr(k), p && p.attr(k), t = e.getValue(0), e = e.getValue(G), m = g.getValue(0), g = g.getValue(n), 0 === arguments.length && (q = U), k = 0; k < q.length; k += 1) "zoomed" === q[k] && K.raiseEvent("zoomed", {
                    level: w.length,
                    startX: t,
                    startY: m,
                    endX: e,
                    endY: g
                }, this.chartInstance, [this.chartInstance.id]), "zoomIn" === q[k] ? K.raiseEvent("zoomedIn", {
                        level: w.length,
                        startX: t,
                        startY: m,
                        endX: e,
                        endY: g
                    }, this.chartInstance, [this.chartInstance.id]) :
                    "zoomOut" !== q[k] || f.isReset || K.raiseEvent("zoomedOut", {
                        level: w.length,
                        startX: t,
                        startY: m,
                        endX: e,
                        endY: g
                    }, this.chartInstance, [this.chartInstance.id]);
                this.highlightPoint(!1);
                f.isReset = !1
            },
            getFillColor: function (c, b) {
                b = parseFloat(b / 100);
                0 > b ? b = 0 : 1 < b && (b = 1);
                c || (c = "#FFFFFF");
                if (u && !v) return b ? c : "transparent";
                c = c.replace(/^#?([a-f0-9]+)/ig, "$1");
                c = e.graphics.HEXtoRGB(c);
                c[3] = b.toString();
                return "rgba(" + c.join(",") + ")"
            },
            _getHoveredTrendLine: function (c, b) {
                var a = this.components, d = a.yAxis[0], h;
                h = b && b.length;
                var a =
                    a.xAxis[0].getPixel(c.x), d = d.getPixel(c.y), e, f, m, g, k, p;
                if (h) for (--h; 0 <= h; h--) if (f = b[h], g = f.x1, k = f.y1, e = f.x2, p = f.y2, f.isTrendZone) {
                    if (a >= g && a <= e && d >= k && d <= p) return f
                } else if (k !== p && g !== e ? (m = e = (k - p) / (g - e), g = k - e * g, m = O(m * a + -1 * d + g) / ea(E(m, 2) + E(-1, 2))) : g === e ? m = O(g - a) : k === p && (m = O(k - d)), m <= f.tolerance) return f
            },
            _bestNeighbour: function (c) {
                var b = this.components, a = this.config, d = b.xAxis[0], h = b.yAxis[0], t = this.jsonData.chart,
                    f = a.canvasLeft, m = a.canvasTop, g, k, p, n, l, q, r, w, u, v, z, x;
                x = b.numberFormatter;
                u = b.dataset;
                for (g = u.length - 1; 0 <= g; --g) if (b = u[g], z = b.config, k = z.showHoverEffect, w = z.showTooltip, b.components.kDTree && b.visible && (n = b.getElement(c), b = this._dist(c, n), !l || b < q)) if (p = g, l = n, q = b, r = u[p] && z.zoomedRadius || 0, q <= r) break;
                q <= D(r + 2, 5) ? (c = d.getPixel(l.x) - f, m = h.getPixel(l.y) - m, f = y(l.tooltext, z.plotToolText), b = u[p], z = b.config, u = z.tooltip.toolTipSepChar, q = z.tooltip.seriesNameInToolTip, r = l.x, g = l.y, l && (v = x.yAxis(g), x = x.xAxis(r), v = Number(w) ? void 0 !== f ? da(f, [4, 5, 6, 7, 8, 9, 10, 11], {
                    yaxisName: h.getAxisConfig("axisName"),
                    xaxisName: d.getAxisConfig("axisName"), yDataValue: v, xDataValue: x
                }, l, t, b.config) : (q ? z.seriesname ? z.seriesname + u : "" : "") + "x:" + x + u + "y:" + v : U), a.lastHoveredPoint !== l && this.highlightPoint(k, c, m, l, p, v)) : (e.toolTip.hide(), this.highlightPoint(!1));
                return l
            },
            _drawTooltip: function (c, b) {
                var a = this.components.paper, d = e.toolTip;
                b && (d.setStyle(a), d.setPosition(c), d.draw(b, a))
            },
            highlightPoint: function (c, b, a, d, h, t) {
                var f = this, m = f.config, g = f.components, k = f.graphics, p = g.paper, l = k.tracker,
                    n = (g = g.dataset[h]) && g.config;
                h = g && n.zoomedRadius || 0;
                var q = g && n.hoverCosmetics, g = q && q.fill, n = q && q.borderColor, q = q && q.borderThickness,
                    r = {}, r = function (a) {
                        e.plotEventHandler.call(this, f, a)
                    }, w = function (a) {
                        e.plotEventHandler.call(this, f, a, "dataplotRollover")
                    }, u = function (a) {
                        e.plotEventHandler.call(this, f, a, "dataplotRollout")
                    }, v = d && d.link;
                l || (l = k.tracker = p.circle(0, 0, 0, k.trackerGroup).attr({"clip-rect": m.canvasLeft + "," + m.canvasTop + "," + m.canvasWidth + "," + m.canvasHeight}).click(r).trackTooltip(!0).hover(w, u));
                d && l.data("eventArgs", {
                    x: d.x,
                    y: d.y, tooltip: t, link: v
                });
                m.lastHoveredPoint = d;
                r = Number(c) ? {r: h, fill: g, stroke: n, "stroke-width": q} : {
                    r: h,
                    fill: R,
                    stroke: R,
                    "stroke-width": 0
                };
                r.cursor = v ? "pointer" : "";
                l.attr(r).tooltip(t).transform("t" + (b + m.canvasLeft) + "," + (a + m.canvasTop));
                d && ha("mouseover", l && l.node, m.lastMouseEvent)
            },
            zoom: function (c) {
                var b, a, d = this.config, h = d.viewPortConfig;
                b = h.x;
                a = h.y;
                var e = d.canvasWidth, d = d.canvasHeight, f = e / h.scaleX, m = d / h.scaleY, h = f * c;
                c *= m;
                h = h > e ? e : h;
                c = c > d ? d : c;
                b = b + f / 2 - h / 2;
                a = a + m / 2 - c / 2;
                b = 0 > b ? 0 : b;
                a = 0 > a ? 0 : a;
                b = b + h > e ? e - h : b;
                a = a + c > d ? d - c : a;
                this.zoomSelection(b, a, h, c)
            },
            updateButtonVisual: function () {
                var c, b, a, d;
                a = this.config;
                var h = this.components.tb.graphics;
                c = a.status;
                var e;
                1 >= a.viewPortHistory.length ? (a = ["zoomOutButton", "resetButton", "togglePanButton"], d = ["zoomInButton"], e = "toggleZoomInButton") : (d = ["resetButton", "zoomOutButton", "zoomInButton"], a = [], "zoom" === c ? (d.push("togglePanButton"), e = "toggleZoomInButton") : "pan" === c && (d.push("toggleZoomInButton"), e = "togglePanButton"));
                for (c = 0; c < a.length; c += 1) b = a[c], h[b].node.attr({
                    config: {
                        hover: {
                            fill: "#FFFFFF",
                            "stroke-width": 1, stroke: "#E3E3E3", cursor: "default"
                        },
                        normal: {fill: "#FFFFFF", stroke: "#E3E3E3", "stroke-width": 1, cursor: "default"},
                        disable: {
                            fill: "#FFFFFF",
                            "stroke-width": 1,
                            stroke: "#E3E3E3",
                            "stroke-opacity": 1,
                            cursor: "default"
                        },
                        pressed: {fill: "#FFFFFF", "stroke-width": 1, stroke: "#E3E3E3", cursor: "default"}
                    },
                    fill: ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", !0],
                    "button-disabled": !1,
                    stroke: "#E3E3E3",
                    "stroke-opacity": 1
                });
                for (c = 0; c < d.length; c += 1) b = d[c], h[b].node.attr({
                    config: {
                        hover: {
                            fill: "#FFFFFF", "stroke-width": 1,
                            stroke: "#aaaaaa", cursor: "pointer"
                        },
                        normal: {fill: "#FFFFFF", stroke: "#C2C2C2", "stroke-width": 1, cursor: "pointer"},
                        disable: {
                            fill: "#FFFFFF",
                            "stroke-width": 1,
                            stroke: "#E3E3E3",
                            "stroke-opacity": 1,
                            cursor: "pointer"
                        },
                        pressed: {fill: "#EFEFEF", "stroke-width": 1, stroke: "#C2C2C2", cursor: "pointer"}
                    },
                    "button-disabled": !1,
                    fill: ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", !0],
                    stroke: "#C2C2C2",
                    "stroke-opacity": 1
                });
                h[e].node.attr({
                    config: {
                        hover: {fill: "#EFEFEF", "stroke-width": 1, stroke: "#EFEFEF", cursor: "default"},
                        normal: {
                            fill: "#EFEFEF",
                            stroke: "#E3E3E3", "stroke-width": 1, cursor: "default"
                        },
                        disable: {
                            fill: "#E6E6E6",
                            "stroke-width": 1,
                            stroke: "#E3E3E3",
                            "stroke-opacity": 1,
                            cursor: "default"
                        },
                        pressed: {fill: "#EFEFEF", "stroke-width": 1, stroke: "#E3E3E3", cursor: "default"}
                    },
                    "button-disabled": !1,
                    fill: ["#EFEFEF", "#EFEFEF", "#EFEFEF", "#EFEFEF", !0],
                    stroke: "#E3E3E3",
                    "stroke-opacity": 1
                })
            },
            _drawAxis: function () {
            }
        }, C.scatterBase);
        P.register("component", ["dataset", "zoomscatter", {
            type: "zoomscatter", configure: function () {
                var c, b, a, d, h, e, f;
                e = this.chart;
                var m = e.config;
                d = e.jsonData.chart;
                var g = e.getFillColor, k = this.JSONData;
                this.__base__.configure.call(this);
                e = this.config;
                b = this.components;
                c = y(k.anchorbordercolor, d.anchorbordercolor);
                e.anchorBorderThickness = y(k.anchorborderthickness, d.anchorborderthickness, c ? 1 : 0);
                b.kDTree = new Z;
                e.chunkSize = Math.floor(B((k.data || []).length / 5, 5E4));
                c = e.staticRadius = Q(d.staticradius, 0);
                e.radius = Q(k.radius, k.anchorradius, d.radius, d.anchorradius, c ? 3 : .5);
                f = e.showHoverEffect;
                c = r(y(k.plotfillhovercolor, k.hovercolor, d.plotfillhovercolor,
                    d.hovercolor, e.anchorbgcolor));
                b = y(k.plotfillhoveralpha, k.hoveralpha, d.plotfillhoveralpha, d.hoveralpha, q);
                a = r(y(k.plotfillhovercolor, k.hovercolor, d.plotfillhovercolor, d.hovercolor, c));
                h = y(k.plotfillhoveralpha, k.hoveralpha, d.plotfillhoveralpha, d.hoveralpha, q);
                d = Q(k.borderhoverthickness, d.borderhoverthickness, 1);
                e.hoverCosmetics = {showHoverEffect: f, fill: g(c, b), borderColor: g(a, h), borderThickness: d};
                e.tooltip = {
                    toolTipVisible: m.showtooltip,
                    seriesNameInToolTip: m.seriesnameintooltip,
                    toolTipSepChar: m.tooltipsepchar
                };
                e.lastViewPort = {}
            }, draw: function (c) {
                var b, a, d;
                b = this.graphics;
                d = this.chart;
                a = d.components;
                var h = d.graphics.imageContainer, e = a.paper;
                d = d.config;
                var f = this.visible, m = d.viewPortConfig, g = this.config, k = g.lastViewPort || {}, p = !1;
                b.container || (b.container = {line: e.group(h), plot: e.group(h)});
                f && this._conatinerHidden ? this.show() : f || this._conatinerHidden || this.hide();
                if (c) this._pixelatedDraw(); else {
                    if (k.scaleX !== m.scaleX || k.scaleY !== m.scaleY) k.scaleX = m.scaleX, k.scaleY = m.scaleY, c = a.xAxis[0], b = a.yAxis[0], a = c.getPVR(),
                        c = b.getPVR(), d = D(g.zoomedRadius = B(g.staticRadius ? g.radius : g.radius * B(m.scaleX, m.scaleY), d.canvasWidth / 2, d.canvasHeight / 2), 2), this.components.kDTree._setSearchLimit(d / a, d / c), this._deleteGridImages(), this.graphics._grid = {}, p = !0;
                    this._gridDraw(p)
                }
            }, _pixelatedDraw: function () {
                var c, b, a, d, h, e = this.chart.config;
                a = this.config;
                d = this.graphics;
                var f = a.drawLine, m = a.lastViewPort || {}, g = m.scaleX, k = m.scaleY;
                h = e.viewPortConfig;
                var p = h.scaleX, l = h.scaleY, m = this.graphics._grid || (this.graphics._grid = []), g = p / g,
                    k = l / k,
                    l = e.canvasWidth * g, e = e.canvasHeight * k;
                a = a._batchDarwTimers;
                d = d.container;
                clearTimeout(this.timer);
                if (a && a.length) for (; a.length;) clearTimeout(a.shift());
                d.line.transform("t" + A(-h.x * h.scaleX) + "," + A(-h.y * h.scaleY));
                d.plot.transform("t" + A(-h.x * h.scaleX) + "," + A(-h.y * h.scaleY));
                for (c in m) if (h = m[c]) for (b in h) (d = h[b]) && d.drawState && (a = d.image, a.attr({
                    x: d.xPixel * g,
                    y: d.yPixel * k,
                    width: l,
                    height: e
                }), f && (a = d.lineImage, a.attr({x: d.xPixel * g, y: d.yPixel * k, width: l, height: e})))
            }, _deleteGridImages: function () {
                var c, b,
                    a, d, h;
                b = this.config;
                var e = this.graphics, f = e._imagePool || (e._imagePool = []),
                    m = e._canvasPool || (e._canvasPool = []), g = e._lineImagePool || (e._lineImagePool = []),
                    k = e._lineCanvasPool || (e._lineCanvasPool = []), p = e._grid || [];
                if ((b = b._batchDarwTimers) && b.length) for (; b.length;) clearTimeout(b.shift());
                for (a in p) if (h = p[a]) for (d in h) (b = h[d]) && b.drawState && (c = b.image, c.attr({
                    src: "",
                    width: 0,
                    height: 0
                }), f.push(c), delete b.image, c = b.canvas, m.push(c), delete b.canvas, delete b.ctx, c = b.lineImage) && (c.attr({
                    src: "",
                    width: 0,
                    height: 0
                }),
                    g.push(c), delete b.lineImage, c = b.lineCanvas, k.push(c), delete b.lineCanvas, delete b.lineCtx);
                delete e._grid
            }, _gridDraw: function (c) {
                var b = this, a = b.graphics, d = b.config, e = b.chart.config.viewPortConfig;
                clearTimeout(d.timer);
                a.container.line.transform("t" + A(-e.x * e.scaleX) + "," + A(-e.y * e.scaleY));
                a.container.plot.transform("t" + A(-e.x * e.scaleX) + "," + A(-e.y * e.scaleY));
                c ? b._gridManager() : d.timer = setTimeout(function () {
                    b._gridManager()
                }, 10)
            }, _gridManager: function () {
                var c, b, a, d, e, f, l, m, g, k = this, p = k.config, n = k.graphics._grid,
                    q = p._drawGrid || (p._drawGrid = []), r = k.chart, u = r.config, r = r.components;
                e = u.viewPortConfig;
                f = e.scaleX;
                var w = e.scaleY;
                l = Math.ceil(w);
                d = Math.ceil(f);
                var v = r.xAxis[0], x = r.yAxis[0], r = v.getAxisConfig("axisDimention").axisLength || u.canvasWidth,
                    u = u.canvasHeight, z = v.config, y = x.config, A = z.axisRange.min, z = z.axisRange.max,
                    C = y.axisRange.min, y = y.axisRange.max, E = (z - A) / f, F = (y - C) / w;
                b = p.radius * B(e.scaleX, e.scaleY) + p.plotCosmetics.borderWidth;
                v = O(b / (r * e.scaleX / (v.max - v.min)));
                x = O(b / (u * e.scaleY / (x.max - x.min)));
                b = r / f;
                g =
                    u / w;
                c = B(1, b / 10, g / 10);
                var w = {}, H = [];
                f = e.x + c;
                b = e.x - c + b;
                m = e.y + c;
                c = e.y + g - c;
                e = k._getFocusedGrid(f, m);
                g = w[e.row] || (w[e.row] = {});
                g[e.col] = !0;
                e = k._getFocusedGrid(b, m);
                g = w[e.row] || (w[e.row] = {});
                g[e.col] = !0;
                e = k._getFocusedGrid(b, c);
                g = w[e.row] || (w[e.row] = {});
                g[e.col] = !0;
                e = k._getFocusedGrid(f, c);
                g = w[e.row] || (w[e.row] = {});
                g[e.col] = !0;
                f = k._getFocusedGrid();
                e = f.row;
                f = f.col;
                b = D(e - 1, 0);
                e = B(e + 1, l - 1);
                l = D(f - 1, 0);
                f = B(f + 1, d - 1);
                d = y - b * F;
                for (m = b; m <= e; m += 1) {
                    n[m] || (n[m] = {});
                    b = A + l * E;
                    for (g = l; g <= f; g += 1) c = n[m][g], c || (a = D(d - F, C),
                        c = B(b + E, z), c = n[m][g] = {
                        xPixel: g * r,
                        yPixel: m * u,
                        xMinValue: b,
                        yMinValue: a,
                        xMaxValue: c,
                        yMaxValue: d,
                        drawState: 0,
                        xMinWPad: D(b - v, A),
                        yMinWPad: D(a - x, C),
                        xMaxWPad: B(c + v, z),
                        yMaxWPad: B(d + x, y)
                    }), c.drawState || (w[m] && w[m][g] ? q.push({row: m, col: g}) : H.push({row: m, col: g})), b += E;
                    d -= F
                }
                (q.length || H.length) && k._drawGridArr(function () {
                    p._drawGrid = H;
                    k._drawGridArr()
                })
            }, _getFocusedGrid: function (c, b) {
                var a = this.chart.config, d = a.viewPortConfig, e = a.canvasWidth / d.scaleX,
                    a = a.canvasHeight / d.scaleY, f = isNaN(c) ? d.x + e / 2 : c, d = isNaN(b) ? d.y +
                    a / 2 : b;
                return {row: H(d / a), col: H(f / e)}
            }, _drawGridArr: function (c) {
                var b, a, d, e, f = this.chart;
                b = f.config;
                var l = f.components, m = b.viewPortConfig, g = this.config, k = g.drawLine, p = g._drawGrid, n = [],
                    q = this.graphics.container, r = l.paper,
                    l = l.xAxis[0].getAxisConfig("axisDimention").axisLength || b.canvasWidth, u = b.canvasHeight,
                    w = this.graphics._grid, v = this.graphics._imagePool || [], x = this.graphics._canvasPool || [],
                    z = this.graphics._lineImagePool || [], y = this.graphics._lineCanvasPool || [],
                    A = g.plotCosmetics, m = g.radius * B(m.scaleX,
                    m.scaleY),
                    f = (f.components.xAxis[0].getAxisConfig("axisDimention").x || b.canvasLeft) - b.canvasLeft;
                if (p.length) {
                    for (; p.length;) b = p.shift(), b = w[b.row][b.col], 2 !== b.drawState && (b.drawState = 2, k && (b.lineImage = z.length ? z.shift() : r.image("", q.line), b.lineImage.attr({
                        x: b.xPixel + f,
                        y: b.yPixel,
                        width: l,
                        height: u
                    }), b.lineCanvas = x.length ? d = y.shift() : d = X.document.createElement("canvas"), d.setAttribute("width", l), d.setAttribute("height", u), e = b.lineCtx = d.getContext("2d"), e.fillStyle = A.fillStyle, e.strokeStyle = A.lineStrokeStyle,
                        e.lineWidth = A.lineWidth), b.image = v.length ? v.shift() : r.image("", q.plot), b.image.attr({
                        x: b.xPixel + f,
                        y: b.yPixel,
                        width: l,
                        height: u
                    }), b.canvas = x.length ? a = x.shift() : a = X.document.createElement("canvas"), a.setAttribute("width", l), a.setAttribute("height", u), e = b.ctx = a.getContext("2d"), 1 > m ? (e.strokeStyle = A.fillStyle, e.lineWidth = .5) : (e.fillStyle = A.fillStyle, e.strokeStyle = A.strokeStyle, e.lineWidth = A.borderWidth), n.push(b));
                    g._batchDrawindex = this.JSONData.data && this.JSONData.data.length - 1 || 0;
                    this._drawGridArrBatch(n,
                        c, !g.animation.enabled)
                } else c && c()
            }, _drawGridArrBatch: function (c, b, a) {
                var d, e, f, l, m, g, k, p, n, q, r, u, w, v, x, z, y = this;
                g = y.config;
                var B = y.chart.components;
                z = y.config;
                var C = z.drawLine;
                p = z.plotCosmetics;
                l = z._batchDrawindex;
                f = y.components.data;
                m = l - z.chunkSize;
                var D = B.yAxis[0], E = z.zoomedRadius, B = B.xAxis[0].getPVR(), D = D.getPVR(),
                    F = g.showRegressionLine, H = z._store || [], I = p.lineWidth || 1 > E;
                F && (v = g.regLineColor, x = g.regressionLineThickness);
                for (p = 0; p < c.length; p += 1) c[p].ctx.beginPath(), C && c[p].lineCtx.beginPath();
                for (m = 0 >= m ? 0 : m; l >= m; --l) if ((r = f[l] && f[l].config.setValue) && !isNaN(r.x) && !isNaN(r.y)) for (p = 0; p < c.length; p += 1) (d = c[p], u = d.xMinValue, w = d.yMaxValue, r.x < d.xMinWPad || r.x > d.xMaxWPad || r.y < d.yMinWPad || r.y > d.yMaxWPad || (n = d.ctx, q = d.lineCtx, d = A((r.x - u) * B), e = A((w - r.y) * D), (k = H[d]) || (k = H[d] = {}), k[e])) || (k[e] = !0, C && (k = 0 <= l - 1 && f[l - 1].config.setValue) && (q.moveTo(A((k.x - u) * B), A((w - k.y) * D)), q.lineTo(d, e)), 1 > E ? (n.moveTo(d, e), n.lineTo(d + 1, e)) : (n.moveTo(d + E, e), n.arc(d, e, E, 0, fa)));
                for (p = 0; p < c.length; p += 1) d = c[p], n = d.ctx,
                    n.fill(), I && n.stroke(), n.closePath(), C && (q = d.lineCtx, q.fill(), I && q.stroke(), q.closePath());
                z._batchDrawindex = l;
                if (0 <= l) {
                    if (!a) for (p = 0; p < c.length; p += 1) n = c[p].image, f = c[p].canvas, n.attr({src: f.toDataURL("image/png")}), z.drawLine && (v = c[p].lineImage, x = c[p].lineCanvas, v.attr({src: x.toDataURL("image/png")}));
                    (z._batchDarwTimers || (z._batchDarwTimers = [])).push(setTimeout(function () {
                        y.chart && y._drawGridArrBatch(c, b, a)
                    }, 0))
                } else {
                    delete z._store;
                    if (F) for (z = g.regressionData, p = 0; p < c.length; p += 1) d = c[p], l = d.xMinValue,
                        g = d.yMaxValue, n = d.image, f = d.canvas, n = d.ctx, f = (z[0].x - l) * B, m = (g - z[0].y) * D, l = (z[1].x - l) * B, g = (g - z[1].y) * D, n.beginPath(), n.strokeStyle = v, n.lineWidth = x, n.moveTo(f, m), n.lineTo(l, g), n.stroke(), n.closePath();
                    for (p = 0; p < c.length; p += 1) d = c[p], n = d.image, f = d.canvas, d.drawState = 1, n.attr({src: f.toDataURL("image/png")}), C && (v = d.lineImage, x = d.lineCanvas, v.attr({src: x.toDataURL("image/png")}));
                    y.tree || setTimeout(function () {
                        y._buildKdTree()
                    }, 250);
                    b && b()
                }
            }, _buildKdTree: function () {
                var c = this.config;
                c._kdPoints = (this.JSONData.data ||
                    []).slice();
                this.components.kDTree || (this.components.kDTree = new Z);
                this.components.kDTree.buildKdTree(c._kdPoints);
                delete c._kdPoints
            }, getElement: function (c) {
                if (this.components.kDTree) return this.components.kDTree.getNeighbour(c)
            }, show: function () {
                var c = this.graphics, c = c && c.container;
                this.visible = !0;
                this._conatinerHidden = !1;
                c.line.show();
                c.plot.show()
            }, hide: function () {
                var c = this.graphics, c = c && c.container;
                this.visible = !1;
                this._conatinerHidden = !0;
                c.line.hide();
                c.plot.hide()
            }, _addLegend: function () {
                var c =
                        this.chart, b = c.jsonData.chart, a = this.config, d = this.JSONData, e = c.getFillColor,
                    l = y(d.anchorbordercolor, b.anchorbordercolor), n = r(y(l, a.plotBorderColor)),
                    l = Q(d.anchorborderthickness, b.anchorborderthickness, l ? 1 : 0),
                    m = r(y(d.anchorbgcolor, d.color, b.anchorbgcolor, a.plotColor)),
                    g = y(d.anchoralpha, d.alpha, b.anchoralpha, q),
                    b = y(d.anchorbgalpha, d.alpha, b.anchorbgalpha, q), d = {color: a.lineColor, alpha: a.lineAlpha},
                    e = a.plotCosmetics = {
                        fillStyle: e(m, g * b / 100),
                        strokeStyle: e(n, g),
                        borderWidth: l,
                        lineWidth: a.lineThickness,
                        lineStrokeStyle: x(d)
                    };
                this.legendItemId = c.components.legend.addItems(this, this.legendInteractivity, {
                    enabled: a.includeInLegend,
                    type: this.type,
                    fillColor: e.fillStyle,
                    strokeColor: e.strokeStyle,
                    anchorSide: 2,
                    strokeWidth: a.anchorBorderThickness,
                    label: f(this.JSONData.seriesname)
                })
            }, _setConfigure: function () {
                var c, b, a, d, f, l, n, m, g, k = -Infinity, p = Infinity, q = Infinity, r = -Infinity,
                    u = this.components.data || (this.components.data = []);
                c = this.chart;
                var v = e.parseUnsafeString, w = this.config, x = this.JSONData, A = c.jsonData.chart, z = x.data || [],
                    C = z.length,
                    E = c.components.numberFormatter, F = v(A.yaxisname), H = v(A.xaxisname), I = w.lineDashed,
                    L = w.lineDashStyle, K = w.parentYAxis, M = w.toolTipSepChar, N = w.seriesname;
                for (c = 0; c < C; c += 1) d = z[c], a = u[c] || (u[c] = {}), b = a.config || (a.config = {}), b.setValue = f = {
                    x: E.getCleanValue(d.x),
                    y: E.getCleanValue(d.y),
                    index: c
                }, r = D(r, f.x), q = B(q, f.x), k = D(k, f.y), p = B(p, f.y), w.showRegressionLine && this.pointValueWatcher(f.x, f.y, w.regressionObj), b.setLink = y(d.link), b.anchorProps = this._parseAnchorProperties(c), b.showValue = Q(d.showvalue, w.showValues),
                    b.dashed = Q(d.dashed, I), b.color = y(d.color, w.lineColor), b.alpha = y(d.alpha, w.lineAlpha), b.dashStyle = b.dashed ? L : "none", b.toolTipValue = l = E.dataLabels(f.y, K), b.setDisplayValue = g = v(d.displayvalue), m = b.formatedVal = y(d.toolTipValue, E.dataLabels(f.y, K)), n = E.xAxis(f.x), b.displayValue = y(g, l), b.setTooltext = e.getValidValue(v(y(d.tooltext, w.plotToolText))), w.showTooltip ? void 0 !== b.setTooltext ? (f = [4, 5, 6, 7, 8, 9, 10, 11], n = {
                    yaxisName: F,
                    xaxisName: H,
                    yDataValue: m,
                    xDataValue: n
                }, d = da(b.setTooltext, f, n, d, A, x)) : null === m ? d = !1 :
                    (d = N ? N + M : U, d += f.x ? n + M : U, d += l) : d = !1, b.toolText = d, a ? a.graphics || (u[c].graphics = {}) : a = u[c] = {graphics: {}}, b.hoverEffects = this._parseHoverEffectOptions(a), b.anchorProps.isAnchorHoverRadius = b.hoverEffects.anchorRadius;
                w.xMax = r;
                w.xMin = q;
                w.yMin = p;
                w.yMax = k;
                w.showRegressionLine && (w.regressionData = this.getRegressionLineSeries(w.regressionObj, w.showYOnX, C));
                this.ErrorValueConfigure && this.ErrorValueConfigure()
            }
        }, "Scatter"]);
        T.addSymbol({
            zoomInIcon: function (c, b, a) {
                c -= .2 * a;
                b -= .2 * a;
                var d = .8 * a, e = T.rad(43), f = T.rad(48),
                    l = c + d * N(e), e = b + d * L(e), m = c + d * N(f), f = b + d * L(f), g = T.rad(45),
                    k = l + a * N(g), n = e + a * L(g), q = m + a * N(g) - 1;
                a = f + a * L(g) - 1;
                return ["M", l, e, "A", d, d, 0, 1, 0, m, f, "Z", "M", l + 1, e + 1, "L", k, n, q, a, m + 1, f + 1, "Z", "M", c - 2, b, "L", c + 2, b, "Z", "M", c, b - 2, "L", c, b + 2, "Z"]
            }, zoomModeIcon: function (c, b, a) {
                var d = [];
                c -= .2 * a;
                b -= .2 * a;
                var e = .8 * a, f = T.rad(43), l = T.rad(48), m = c + e * N(f), f = b + e * L(f), g = c + e * N(l),
                    l = b + e * L(l), k = T.rad(45), n = m + a * N(k), q = f + a * L(k), r = g + a * N(k) - 1;
                a = l + a * L(k) - 1;
                return d = d.concat(["M", m, f, "A", e, e, 0, 1, 0, g, l, "Z", "M", m + 1, f + 1, "L", n, q, r, a, r + 1, a - 1,
                    r + 1.5, a + 1.5, r - 1, a + 1, r, a, g + 1, l + 1, "Z", "M", c - 2, b, "L", c + 2, b, "Z", "M", c, b - 2, "L", c, b + 2, "Z"])
            }, panModeIcon: function (c, b, a) {
                var d = c - 11.25, d = c;
                a *= 2.5;
                return [].concat(["M", d - a / 16, b - a / 8, "L", d + a / 16, b - a / 8, "L", d + a / 16, b - a / 3.2, "L", d + 6 * a / 32, b - 10 * a / 32, "L", d, b - a / 2, "L", d - 6 * a / 32, b - 10 * a / 32, "L", d - a / 16, b - a / 3.2, "Z", "M", d + 4 * a / 32, b - 2 * a / 32, "L", d + 10 * a / 32, b - 2 * a / 32, "L", d + 10 * a / 32, b - 6 * a / 32, "L", d + 16 * a / 32, b, "L", d + 10 * a / 32, b + 6 * a / 32, "L", d + 10 * a / 32, b + 2 * a / 32, "L", d + 4 * a / 32, b + 2 * a / 32, "Z", "M", d + 2 * a / 32, b + 5 * a / 32, "L", d + 2 * a / 32, b + 10 * a / 32, "L", d + 6 * a /
                32, b + 10 * a / 32, "L", d, b + 16 * a / 32, "L", d - 6 * a / 32, b + 10 * a / 32, "L", d - 2 * a / 32, b + 10 * a / 32, "L", d - 2 * a / 32, b + 5 * a / 32, "Z", "M", d - 4 * a / 32, b - 2 * a / 32, "L", d - 10 * a / 32, b - 2 * a / 32, "L", d - 10 * a / 32, b - 6 * a / 32, "L", d - 16 * a / 32, b, "L", d - 10 * a / 32, b + 6 * a / 32, "L", d - 10 * a / 32, b + 2 * a / 32, "L", d - 4 * a / 32, b + 2 * a / 32, "Z"])
            }
        })
    }])
});

//# sourceMappingURL=http://localhost:3052/3.12.2/map/eval/fusioncharts.zoomscatter.js.map
