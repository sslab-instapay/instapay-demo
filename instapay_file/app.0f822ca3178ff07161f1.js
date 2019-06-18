webpackJsonp([2, 0], {
    0: function(t, e, r) {
        "use strict";

        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var n = r(212),
            o = s(n),
            a = r(46),
            i = s(a);
        r(277), r(279);
        var c = r(293),
            u = s(c),
            d = r(266);
        s(d);
        r(264);
        var l = r(192),
            f = s(l),
            _ = r(292),
            p = s(_),
            h = r(208),
            v = r(306),
            m = r(47),
            j = s(m),
            b = r(200),
            g = s(b);
        (0, v.sync)(j.default, g.default), i.default.use(p.default), i.default.component("qrcode", f.default), i.default.filter("formatAmount", h.formatAmount), new i.default((0, o.default)({
            router: g.default,
            store: j.default
        }, u.default)).$mount("#app")
    },
    2: function(t, e, r) {
        "use strict";

        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(260),
            o = s(n);
        o.default.disable(), e.default = o.default
    },
    10: function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.muts = {
            CART_ADD: "muts_cart_add",
            CART_CLEAR: "muts_cart_clear",
            PRODUCTS_UPDATED: "muts_products_updated",
            ORDER_UPDATE: "muts_order_update",
            ORDER_PAID: "muts_order_paid",
            CART_STATUS: "muts_cart_status",
            CART_MAX_REACHED: "cart_max_reached"
        }, e.actions = {
            EMPTY_CART: "action_empty_cart",
            ADD_TO_CART: "action_add_cart",
            CART_UPDATE_STATUS: "muts_update_cart_status",
            GET_PRODUCTS: "action_get_products",
            CREATE_ORDER: "action_create_order",
            OPEN_ORDER_WS: "action_open_order_websocket",
            CANCEL_ORDER: "action_cancel_order",
            GET_ORDER: "action_get_order"
        }
    },
    15: function(t, e) {
        "use strict";

        function r(t) {
            return void 0 === t || null === t || 0 === t.trim().length
        }

        function s(t) {
            return void 0 === t || null === t
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.isBlank = r, e.isNull = s
    },
    24: function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.fetching = {
            PENDING: "pending",
            FAILED: "failed",
            READY: "ready",
            DONE: "done"
        }, e.ONE_DAY = 864e5, e.ONE_HOUR = 36e5
    },
    25: function(t, e, r) {
        "use strict";

        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function n(t) {
            if (t.status >= 200 && t.status < 300) return d.default.resolve(t.json());
            var e = new Error(t.status);
            return e.response = t, d.default.reject(e)
        }

        function o(t, e) {
            return "Basic " + btoa(t.trim() + ":" + e.trim())
        }

        function a(t, e) {
            return new d.default(function(r, s) {
                (0, l.isNull)(t) | (0, l.isNull)(e) && s("Invalid Auth Data"), r(o(t, e))
            })
        }

        function i(t, e) {
            return new d.default(function(r, s) {
                (0, l.isBlank)(t) | (0, l.isBlank)(e) && s("Invalid Auth Data"), r(o(t, e))
            })
        }

        function c(t) {
            var e = [];
            for (var r in t) e.push(encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));
            return e.join("&")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.API_URL = e.API_HOST = void 0;
        var u = r(16),
            d = s(u);
        e.prepareJsonResponse = n, e.giveBasic = a, e.giveBasicStrict = i, e.encodeQueryParams = c;
        var l = r(15),
            f = e.API_HOST = window.location.host;
        e.API_URL = "https://" + f + "/api"
    },
    45: function(t, e, r) {
        r(272);
        var s = r(14)(r(194), r(302), null, null);
        t.exports = s.exports
    },
    47: function(t, e, r) {
        "use strict";

        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(46),
            o = s(n),
            a = r(307),
            i = s(a),
            c = r(204),
            u = r(206),
            d = r(205);
        o.default.use(i.default);
        var l = new i.default.Store({
            strict: !1,
            modules: {
                cart_module: c.cart_module,
                products_module: u.products_module,
                order_module: d.order_module
            }
        });
        e.default = l
    },
    189: function(t, e, r) {
        r(269);
        var s = r(14)(r(196), r(299), null, null);
        t.exports = s.exports
    },
    193: function(t, e, r) {
        "use strict";

        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(10),
            o = r(2),
            a = s(o),
            i = (0, a.default)("view:app");
        e.default = {
            computed: {
                products: function() {
                    return this.$store.getters.products
                },
                cart: function() {
                    return this.$store.getters.cart
                }
            },
            created: function() {
                var t = this;
                this.$store.dispatch(n.actions.GET_PRODUCTS).then(function() {
                    return i("%s products fetched from server", t.products.length)
                }).catch(function(t) {
                    return i("error when initializing the cart", t)
                })
            }
        }
    },
    194: function(t, e, r) {
        "use strict";

        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(287),
            o = (s(n), r(285)),
            a = (s(o), r(286)),
            i = (s(a), r(288));
        s(i);
        e.default = {
            props: {
                id: {
                    type: String,
                    required: !0
                },
                label: {
                    type: String,
                    required: !0
                },
                size: {
                    type: String,
                    required: !1,
                    default: ""
                },
                color: {
                    type: String,
                    required: !1
                }
            }
        }
    },
    195: function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = {}
    },
    196: function(t, e, r) {
        "use strict";

        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(26),
            o = s(n),
            a = r(2),
            i = s(a),
            c = r(10),
            u = r(24),
            d = r(45),
            l = s(d),
            f = (0, i.default)("view:cart");
        e.default = {
            components: {
                SvgIcon: l.default
            },
            methods: {
                orderCart: function() {
                    var t = this;
                    this.cart.products.length <= 0 || this.status === u.fetching.PENDING || this.$store.dispatch(c.actions.CART_UPDATE_STATUS, u.fetching.PENDING).then(function() {
                        return t.$store.dispatch(c.actions.CREATE_ORDER, t.cart.products)
                    }).then(function(t) {
                        return f("successfully created order %s", (0, o.default)(t))
                    }).then(function() {
                        t.$store.dispatch(c.actions.CART_UPDATE_STATUS, u.fetching.DONE), t.$router.push({
                            name: "order",
                            params: {
                                id: t.order.id
                            }
                        })
                    }).catch(function(e) {
                        f("%cerror when creating order", "color:red", e), t.$store.dispatch(c.actions.CART_UPDATE_STATUS, u.fetching.FAILED), setTimeout(function() {
                            return t.$store.dispatch(c.actions.CART_UPDATE_STATUS, u.fetching.READY)
                        }, 1700)
                    })
                },
                emptyCart: function() {
                    this.$store.dispatch(c.actions.EMPTY_CART).then(function() {
                        return f("successfully clear cart")
                    }).catch(function(t) {
                        return f("%cerror when emptying cart", "color:red", t)
                    })
                }
            },
            computed: {
                status: function() {
                    return this.$store.getters.cart.status
                },
                cart: function() {
                    return this.$store.getters.cart
                },
                order: function() {
                    return this.$store.getters.order
                },
                total_amount: function() {
                    return this.cart.products.reduce(function(t, e) {
                        return t + e.unitary_price_satoshi * e.count
                    }, 0)
                }
            }
        }
    },
    197: function(t, e, r) {
        "use strict";

        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(26),
            o = s(n),
            a = r(2),
            i = s(a),
            c = r(10),
            u = r(23),
            d = r(15),
            l = r(25),
            f = r(24),
            _ = r(207),
            p = r(45),
            h = s(p),
            v = r(189),
            m = s(v),
            j = (0, i.default)("view:order");
        e.default = {
            components: {
                SvgIcon: h.default,
                Cart: m.default
            },
            data: function() {
                return {
                    status: f.fetching.READY,
                    unit: _.btcUnits.get("btc"),
                    paymentHeight: 0,
                    qriousOpts: {
                        backgroundAlpha: 1,
                        background: "white",
                        foreground: "black",
                        size: 300,
                        level: "L"
                    }
                }
            },
            created: function() {
                var t = this;
                j("loading order %s", this.route_order_id), (0, d.isBlank)(this.route_order_id) || (this.status = f.fetching.PENDING, this.$store.dispatch(c.actions.GET_ORDER, this.route_order_id).then(function(e) {
                    return j("Successfully fetched order %s", (0, o.default)(e)), t.status = f.fetching.DONE, e
                }).then(function(e) {
                    return t.$store.dispatch(c.actions.OPEN_ORDER_WS, e.payment_hash)
                }).catch(function(e) {
                    j("%cerror when fetching order", "color:red", e), t.status = f.fetching.FAILED
                }))
            },
            methods: {
                getProductName: function(t) {
                    var e = (0, u.find)(this.products, {
                        id: t
                    });
                    return e ? e.name : "unknown product name"
                },
                cancelOrder: function() {
                    var t = this;
                    j("cancel order -> go back to cart"), this.$store.dispatch(c.actions.CANCEL_ORDER).then(function() {
                        t.$store.dispatch(c.actions.EMPTY_CART)
                    }).then(function() {
                        j("successfully cancelled order"), t.$router.push({
                            name: "shop"
                        })
                    }).catch(function(t) {
                        return j("%cerror when cancelling order", "color:red", t)
                    })
                },
                switchUnit: function() {
                    this.unit = (0, _.getNextUnitSimple)(this.unit)
                },
                amountInUnit: function(t) {
                    var e = (0, _.convertSatToUnit)(t, this.unit.code);
                    return this.$options.filters.formatAmount(e)
                }
            },
            computed: {
                API_URL: function() {
                    return l.API_URL
                },
                path: function() {
                    return this.$store.state.route.path
                },
                route_order_id: function() {
                    var t = this.$store.state.route.params.id;
                    return (0, d.isBlank)(t) ? "" : t
                },
                products: function() {
                    return this.$store.getters.products
                },
                cart: function() {
                    return this.$store.getters.cart
                },
                order: function() {
                    return this.$store.getters.order
                },
                payment_request_with_scheme: function() {
                    return this.order.payment_request.startsWith("lightning:") ? this.order.payment_request : "lightning:" + this.order.payment_request
                }
            }
        }
    },
    198: function(t, e, r) {
        "use strict";

        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(2),
            o = s(n),
            a = r(10),
            i = r(24),
            c = r(45),
            u = s(c),
            d = (0, o.default)("view:product");
        e.default = {
            props: {
                product: {
                    type: Object,
                    required: !0
                }
            },
            computed: {
                disabled: function() {
                    return this.$store.getters.cart.status === i.fetching.PENDING
                }
            },
            methods: {
                addProductToStore: function() {
                    var t = this;
                    this.$store.dispatch(a.actions.ADD_TO_CART, this.product).then(function() {
                        return d("added %s to cart", t.product.name)
                    }).catch(function(e) {
                        return d("%cerror when adding product %s", "color:red", t.product.id, e)
                    })
                }
            },
            components: {
                SvgIcon: u.default
            }
        }
    },
    199: function(t, e, r) {
        "use strict";

        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = (r(23), r(189)),
            o = s(n),
            a = r(296),
            i = s(a);
        e.default = {
            components: {
                Cart: o.default,
                Product: i.default
            },
            computed: {
                products: function() {
                    return this.$store.getters.products
                },
                cart: function() {
                    return this.$store.getters.cart
                },
                order: function() {
                    return this.$store.getters.order
                }
            }
        }
    },
    200: function(t, e, r) {
        "use strict";

        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(46),
            o = s(n),
            a = r(305),
            i = s(a),
            c = r(294),
            u = s(c),
            d = r(297),
            l = s(d),
            f = r(295),
            _ = s(f),
            p = r(47),
            h = (s(p), r(2)),
            v = s(h);
        (0, v.default)("app:router");
        o.default.use(i.default);
        var m = [{
                path: "/",
                name: "shop",
                component: l.default
            }, {
                path: "/order/:id",
                name: "order",
                component: _.default
            }, {
                path: "*",
                name: "404",
                component: u.default
            }],
            j = new i.default({
                mode: "history",
                routes: m,
                linkActiveClass: "active"
            });
        e.default = j
    },
    201: function(t, e, r) {
        "use strict";

        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function n(t) {
            if (t.length <= 0) return u.default.reject("No products found in order");
            var e = (0, i.default)(t.map(function(t) {
                return {
                    product_id: t.id,
                    count: t.count,
                    unitary_price_satoshi: t.unitary_price_satoshi,
                    product_name: t.name
                }
            }));
            return p("api call to /order with products=%s", e), u.default.resolve().then(function() {
                return fetch(d.API_URL + "/order", {
                    method: "POST",
                    mode: "cors",
                    cache: "no-cache",
                    body: e,
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    }
                })
            }).then(d.prepareJsonResponse)
        }

        function o(t) {
            return (0, l.isBlank)(t) ? u.default.reject("Invalid order id") : u.default.resolve().then(function() {
                return fetch(d.API_URL + "/order/" + t.trim(), {
                    method: "GET",
                    mode: "cors",
                    cache: "no-cache"
                })
            }).then(d.prepareJsonResponse)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = r(26),
            i = s(a),
            c = r(16),
            u = s(c);
        e.createOrder = n, e.getOrder = o, r(191);
        var d = r(25),
            l = r(15),
            f = r(2),
            _ = s(f),
            p = (0, _.default)("service:order")
    },
    202: function(t, e, r) {
        "use strict";

        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function n() {
            return a.default.resolve().then(function() {
                return fetch(i.API_URL + "/product", {
                    method: "GET",
                    mode: "cors",
                    cache: "no-cache"
                })
            }).then(i.prepareJsonResponse)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = r(16),
            a = s(o);
        e.getAll = n, r(191);
        var i = r(25),
            c = (r(15), r(2)),
            u = s(c);
        (0, u.default)("service:product")
    },
    203: function(t, e, r) {
        "use strict";

        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function n(t) {
            return (0, c.isNil)(p) || (f("closing socket with status " + p.readyState), p.close(), p = null), new a.default(function(e, r) {
                (0, i.isBlank)(t) && r("invalid payment hash, could not open WS"), p = new WebSocket(_ + "?payment_hash=" + t), e(p)
            })
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = r(16),
            a = s(o);
        e.init_websocket = n;
        var i = r(15),
            c = r(23),
            u = r(25),
            d = r(2),
            l = s(d),
            f = (0, l.default)("store:order"),
            _ = "wss://" + u.API_HOST + "/api/ws-order",
            p = null
    },
    204: function(t, e, r) {
        "use strict";

        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.cart_module = void 0;
        var n, o, a = r(16),
            i = s(a),
            c = r(29),
            u = s(c),
            d = r(10),
            l = r(15),
            f = r(23),
            _ = r(24),
            p = r(2),
            h = s(p),
            v = (0, h.default)("store:cart");
        e.cart_module = {
            state: {
                cart: {
                    products: [],
                    lastupdate: Date.now(),
                    status: _.fetching.READY,
                    max_reached: !1
                }
            },
            mutations: (n = {}, (0, u.default)(n, d.muts.CART_STATUS, function(t, e) {
                t.cart.status = e
            }), (0, u.default)(n, d.muts.CART_ADD, function(t, e) {
                var r = (0, f.findIndex)(t.cart.products, {
                    id: e.id
                });
                r >= 0 ? (t.cart.products[r].count++, t.cart.products[r].unitary_price_satoshi = e.price_satoshi) : t.cart.products.push({
                    id: e.id,
                    name: e.name,
                    unitary_price_satoshi: e.price_satoshi,
                    count: 1
                }), t.cart.lastupdate = Date.now()
            }), (0, u.default)(n, d.muts.CART_MAX_REACHED, function(t) {
                t.cart.max_reached = !0
            }), (0, u.default)(n, d.muts.CART_CLEAR, function(t) {
                t.cart.products = [], t.cart.max_reached = !1, t.cart.lastupdate = Date.now()
            }), n),
            actions: (o = {}, (0, u.default)(o, d.actions.EMPTY_CART, function(t) {
                var e = t.commit;
                t.state;
                return e(d.muts.CART_CLEAR)
            }), (0, u.default)(o, d.actions.CART_UPDATE_STATUS, function(t, e) {
                var r = t.commit;
                t.state;
                return r(d.muts.CART_STATUS, e)
            }), (0, u.default)(o, d.actions.ADD_TO_CART, function(t, e) {
                var r = t.commit,
                    s = t.state;
                if (!e || (0, l.isBlank)(e.id) || isNaN(e.price_satoshi)) return i.default.reject("invalid product");
                var n = s.cart.products.reduce(function(t, e) {
                    return t + e.unitary_price_satoshi * e.count
                }, 0) + e.price_satoshi;
                return v("total cart is = " + n), n > 7e6 ? (r(d.muts.CART_MAX_REACHED), i.default.reject("Max amount reached")) : r(d.muts.CART_ADD, e)
            }), o),
            getters: {
                cart: function(t) {
                    return t.cart
                }
            }
        }
    },
    205: function(t, e, r) {
        "use strict";

        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.order_module = void 0;
        var n, o, a = r(29),
            i = s(a),
            c = r(26),
            u = s(c),
            d = r(201),
            l = r(10),
            f = r(23),
            _ = r(203),
            p = r(2),
            h = s(p),
            v = (0, h.default)("store:order");
        e.order_module = {
            state: {
                order: {}
            },
            mutations: (n = {}, (0, i.default)(n, l.muts.ORDER_UPDATE, function(t, e) {
                v("order is now %s", (0, u.default)(e)), t.order = e
            }), (0, i.default)(n, l.muts.ORDER_PAID, function(t) {
                (0, f.isEmpty)(t.order) ? v("tried to pay an empty order..."): (v("order was paid with paymentHash=%s", t.order.payment_hash), t.order.paid = !0)
            }), n),
            actions: (o = {}, (0, i.default)(o, l.actions.GET_ORDER, function(t, e) {
                var r = t.commit;
                t.state;
                return (0, d.getOrder)(e).then(function(t) {
                    return r(l.muts.ORDER_UPDATE, t), t
                })
            }), (0, i.default)(o, l.actions.OPEN_ORDER_WS, function(t, e) {
                var r = t.commit,
                    s = t.state;
                return (0, _.init_websocket)(e).then(function(t) {
                    t.onmessage = function(e) {
                        v("received %s from websocket", e.data), e.data === s.order.payment_hash && (r(l.muts.ORDER_PAID), t.close())
                    }, t.onclose = function(t) {
                        v("websocket lost connection with server")
                    }, t.onerror = function(t) {
                        v("websocket encountered error")
                    }
                })
            }), (0, i.default)(o, l.actions.CREATE_ORDER, function(t, e) {
                var r = t.commit;
                t.state;
                return (0, d.createOrder)(e).then(function(t) {
                    return r(l.muts.CART_CLEAR), r(l.muts.ORDER_UPDATE, t)
                })
            }), (0, i.default)(o, l.actions.CANCEL_ORDER, function(t) {
                var e = t.commit;
                t.state;
                return e(l.muts.ORDER_UPDATE, {})
            }), o),
            getters: {
                order: function(t) {
                    return t.order
                }
            }
        }
    },
    206: function(t, e, r) {
        "use strict";

        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.products_module = void 0;
        var n = r(29),
            o = s(n),
            a = r(202),
            i = r(10),
            c = r(2),
            u = s(c);
        (0, u.default)("store:products"), e.products_module = {
            state: {
                products: []
            },
            mutations: (0, o.default)({}, i.muts.PRODUCTS_UPDATED, function(t, e) {
                t.products = e
            }),
            actions: (0, o.default)({}, i.actions.GET_PRODUCTS, function(t) {
                var e = t.commit;
                t.state;
                return (0, a.getAll)().then(function(t) {
                    return e(i.muts.PRODUCTS_UPDATED, t)
                })
            }),
            getters: {
                products: function(t) {
                    return t.products
                }
            }
        }
    },
    207: function(t, e, r) {
        "use strict";

        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function n(t, e) {
            return isNaN(t) || null == e ? 0 : (d("amount: %s unit: %s", t, e.code), l.has(e) ? t / l.get(e).value_sat : t)
        }

        function o(t) {
            if (null == t || "" === t.code) return l.get("mbtc");
            switch (t.code) {
                case "mbtc":
                    return l.get("btc");
                case "btc":
                    return l.get("mbtc");
                default:
                    return l.get("mbtc")
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.btcUnits = void 0;
        var a = r(209),
            i = s(a);
        e.convertSatToUnit = n, e.getNextUnitSimple = o;
        var c = r(2),
            u = s(c),
            d = (0, u.default)("utils:bitcoin"),
            l = e.btcUnits = (new i.default).set("msat", {
                code: "msat",
                label: "Milli-Satoshi",
                unit: "mSat",
                value_sat: .001,
                order: 0
            }).set("sat", {
                code: "sat",
                label: "Satoshi",
                unit: "sat",
                value_sat: 1,
                order: 1
            }).set("mbtc", {
                code: "mbtc",
                label: "Milli-Bitcoin",
                unit: "mBTC",
                value_sat: 1e5,
                order: 2,
                alias: "bits"
            }).set("btc", {
                code: "btc",
                label: "Bitcoin",
                unit: "BTC",
                value_sat: 1e8,
                order: 3
            })
    },
    208: function(t, e, r) {
        "use strict";

        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function n(t) {
            if (!Intl.NumberFormat) return t;
            var e = new Intl.NumberFormat("en", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 8
            });
            return e.format(t)
        }

        function o(t) {
            return (0, u.default)(t).format("YYYY/MM/DD HH:mm:ss")
        }

        function a(t) {
            return (0, u.default)(t).fromNow()
        }

        function i(t) {
            return (0, u.default)(t).calendar()
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.formatAmount = n, e.momentPlain = o, e.momentFrom = a, e.momentCalendar = i;
        var c = r(1),
            u = s(c)
    },
    268: function(t, e) {},
    269: function(t, e) {},
    270: function(t, e) {},
    271: function(t, e) {},
    272: function(t, e) {},
    273: function(t, e) {},
    274: function(t, e) {},
    280: function(t, e, r) {
        function s(t) {
            return r(n(t))
        }

        function n(t) {
            return o[t] || function() {
                throw new Error("Cannot find module '" + t + "'.")
            }()
        }
        var o = {
            "./af": 66,
            "./af.js": 66,
            "./ar": 73,
            "./ar-dz": 67,
            "./ar-dz.js": 67,
            "./ar-kw": 68,
            "./ar-kw.js": 68,
            "./ar-ly": 69,
            "./ar-ly.js": 69,
            "./ar-ma": 70,
            "./ar-ma.js": 70,
            "./ar-sa": 71,
            "./ar-sa.js": 71,
            "./ar-tn": 72,
            "./ar-tn.js": 72,
            "./ar.js": 73,
            "./az": 74,
            "./az.js": 74,
            "./be": 75,
            "./be.js": 75,
            "./bg": 76,
            "./bg.js": 76,
            "./bm": 77,
            "./bm.js": 77,
            "./bn": 78,
            "./bn.js": 78,
            "./bo": 79,
            "./bo.js": 79,
            "./br": 80,
            "./br.js": 80,
            "./bs": 81,
            "./bs.js": 81,
            "./ca": 82,
            "./ca.js": 82,
            "./cs": 83,
            "./cs.js": 83,
            "./cv": 84,
            "./cv.js": 84,
            "./cy": 85,
            "./cy.js": 85,
            "./da": 86,
            "./da.js": 86,
            "./de": 89,
            "./de-at": 87,
            "./de-at.js": 87,
            "./de-ch": 88,
            "./de-ch.js": 88,
            "./de.js": 89,
            "./dv": 90,
            "./dv.js": 90,
            "./el": 91,
            "./el.js": 91,
            "./en-au": 92,
            "./en-au.js": 92,
            "./en-ca": 93,
            "./en-ca.js": 93,
            "./en-gb": 94,
            "./en-gb.js": 94,
            "./en-ie": 95,
            "./en-ie.js": 95,
            "./en-il": 96,
            "./en-il.js": 96,
            "./en-nz": 97,
            "./en-nz.js": 97,
            "./eo": 98,
            "./eo.js": 98,
            "./es": 101,
            "./es-do": 99,
            "./es-do.js": 99,
            "./es-us": 100,
            "./es-us.js": 100,
            "./es.js": 101,
            "./et": 102,
            "./et.js": 102,
            "./eu": 103,
            "./eu.js": 103,
            "./fa": 104,
            "./fa.js": 104,
            "./fi": 105,
            "./fi.js": 105,
            "./fo": 106,
            "./fo.js": 106,
            "./fr": 109,
            "./fr-ca": 107,
            "./fr-ca.js": 107,
            "./fr-ch": 108,
            "./fr-ch.js": 108,
            "./fr.js": 109,
            "./fy": 110,
            "./fy.js": 110,
            "./gd": 111,
            "./gd.js": 111,
            "./gl": 112,
            "./gl.js": 112,
            "./gom-latn": 113,
            "./gom-latn.js": 113,
            "./gu": 114,
            "./gu.js": 114,
            "./he": 115,
            "./he.js": 115,
            "./hi": 116,
            "./hi.js": 116,
            "./hr": 117,
            "./hr.js": 117,
            "./hu": 118,
            "./hu.js": 118,
            "./hy-am": 119,
            "./hy-am.js": 119,
            "./id": 120,
            "./id.js": 120,
            "./is": 121,
            "./is.js": 121,
            "./it": 122,
            "./it.js": 122,
            "./ja": 123,
            "./ja.js": 123,
            "./jv": 124,
            "./jv.js": 124,
            "./ka": 125,
            "./ka.js": 125,
            "./kk": 126,
            "./kk.js": 126,
            "./km": 127,
            "./km.js": 127,
            "./kn": 128,
            "./kn.js": 128,
            "./ko": 129,
            "./ko.js": 129,
            "./ky": 130,
            "./ky.js": 130,
            "./lb": 131,
            "./lb.js": 131,
            "./lo": 132,
            "./lo.js": 132,
            "./lt": 133,
            "./lt.js": 133,
            "./lv": 134,
            "./lv.js": 134,
            "./me": 135,
            "./me.js": 135,
            "./mi": 136,
            "./mi.js": 136,
            "./mk": 137,
            "./mk.js": 137,
            "./ml": 138,
            "./ml.js": 138,
            "./mn": 139,
            "./mn.js": 139,
            "./mr": 140,
            "./mr.js": 140,
            "./ms": 142,
            "./ms-my": 141,
            "./ms-my.js": 141,
            "./ms.js": 142,
            "./mt": 143,
            "./mt.js": 143,
            "./my": 144,
            "./my.js": 144,
            "./nb": 145,
            "./nb.js": 145,
            "./ne": 146,
            "./ne.js": 146,
            "./nl": 148,
            "./nl-be": 147,
            "./nl-be.js": 147,
            "./nl.js": 148,
            "./nn": 149,
            "./nn.js": 149,
            "./pa-in": 150,
            "./pa-in.js": 150,
            "./pl": 151,
            "./pl.js": 151,
            "./pt": 153,
            "./pt-br": 152,
            "./pt-br.js": 152,
            "./pt.js": 153,
            "./ro": 154,
            "./ro.js": 154,
            "./ru": 155,
            "./ru.js": 155,
            "./sd": 156,
            "./sd.js": 156,
            "./se": 157,
            "./se.js": 157,
            "./si": 158,
            "./si.js": 158,
            "./sk": 159,
            "./sk.js": 159,
            "./sl": 160,
            "./sl.js": 160,
            "./sq": 161,
            "./sq.js": 161,
            "./sr": 163,
            "./sr-cyrl": 162,
            "./sr-cyrl.js": 162,
            "./sr.js": 163,
            "./ss": 164,
            "./ss.js": 164,
            "./sv": 165,
            "./sv.js": 165,
            "./sw": 166,
            "./sw.js": 166,
            "./ta": 167,
            "./ta.js": 167,
            "./te": 168,
            "./te.js": 168,
            "./tet": 169,
            "./tet.js": 169,
            "./tg": 170,
            "./tg.js": 170,
            "./th": 171,
            "./th.js": 171,
            "./tl-ph": 172,
            "./tl-ph.js": 172,
            "./tlh": 173,
            "./tlh.js": 173,
            "./tr": 174,
            "./tr.js": 174,
            "./tzl": 175,
            "./tzl.js": 175,
            "./tzm": 177,
            "./tzm-latn": 176,
            "./tzm-latn.js": 176,
            "./tzm.js": 177,
            "./ug-cn": 178,
            "./ug-cn.js": 178,
            "./uk": 179,
            "./uk.js": 179,
            "./ur": 180,
            "./ur.js": 180,
            "./uz": 182,
            "./uz-latn": 181,
            "./uz-latn.js": 181,
            "./uz.js": 182,
            "./vi": 183,
            "./vi.js": 183,
            "./x-pseudo": 184,
            "./x-pseudo.js": 184,
            "./yo": 185,
            "./yo.js": 185,
            "./zh-cn": 186,
            "./zh-cn.js": 186,
            "./zh-hk": 187,
            "./zh-hk.js": 187,
            "./zh-tw": 188,
            "./zh-tw.js": 188
        };
        s.keys = function() {
            return Object.keys(o)
        }, s.resolve = n, t.exports = s, s.id = 280
    },
    285: function(t, e, r) {
        var s = r(28),
            n = '<symbol viewBox="0 0 32 32" id="icon_bin"> <title>Bin</title> <path d="M4 10v20c0 1.1 0.9 2 2 2h18c1.1 0 2-0.9 2-2v-20h-22zM10 28h-2v-14h2v14zM14 28h-2v-14h2v14zM18 28h-2v-14h2v14zM22 28h-2v-14h2v14z"/> <path d="M26.5 4h-6.5v-2.5c0-0.825-0.675-1.5-1.5-1.5h-7c-0.825 0-1.5 0.675-1.5 1.5v2.5h-6.5c-0.825 0-1.5 0.675-1.5 1.5v2.5h26v-2.5c0-0.825-0.675-1.5-1.5-1.5zM18 4h-6v-1.975h6v1.975z"/> </symbol>';
        t.exports = s.add(n, "icon_bin")
    },
    286: function(t, e, r) {
        var s = r(28),
            n = '<symbol viewBox="0 0 32 32" id="icon_cart"> <title>cart</title> <path d="M12 29c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"/> <path d="M32 29c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"/> <path d="M32 16v-12h-24c0-1.105-0.895-2-2-2h-6v2h4l1.502 12.877c-0.915 0.733-1.502 1.859-1.502 3.123 0 2.209 1.791 4 4 4h24v-2h-24c-1.105 0-2-0.895-2-2 0-0.007 0-0.014 0-0.020l26-3.98z"/> </symbol>';
        t.exports = s.add(n, "icon_cart")
    },
    287: function(t, e, r) {
        var s = r(28),
            n = '<symbol viewBox="0 0 32 32" id="icon_check"> <path class="path1" d="M27 4l-15 15-7-7-5 5 12 12 20-20z"/> </symbol>';
        t.exports = s.add(n, "icon_check")
    },
    288: function(t, e, r) {
        var s = r(28),
            n = '<symbol viewBox="0 0 32 32" id="icon_copy"> <path d="M20 8v-8h-14l-6 6v18h12v8h20v-24h-12zM6 2.828v3.172h-3.172l3.172-3.172zM2 22v-14h6v-6h10v6l-6 6v8h-10zM18 10.828v3.172h-3.172l3.172-3.172zM30 30h-16v-14h6v-6h10v20z"/> </symbol>';
        t.exports = s.add(n, "icon_copy")
    },
    293: function(t, e, r) {
        r(274);
        var s = r(14)(r(193), r(304), null, null);
        t.exports = s.exports
    },
    294: function(t, e, r) {
        r(270);
        var s = r(14)(r(195), r(300), null, null);
        t.exports = s.exports
    },
    295: function(t, e, r) {
        r(271);
        var s = r(14)(r(197), r(301), null, null);
        t.exports = s.exports
    },
    296: function(t, e, r) {
        r(273);
        var s = r(14)(r(198), r(303), null, null);
        t.exports = s.exports
    },
    297: function(t, e, r) {
        r(268);
        var s = r(14)(r(199), r(298), null, null);
        t.exports = s.exports
    },
    298: function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "shop"
                }, [r("cart"), t._v(" "), r("div", {
                    staticClass: "products"
                }, t._l(t.products, function(t, e) {
                    return r("product", {
                        key: t.id,
                        attrs: {
                            product: t
                        }
                    })
                }))], 1)
            },
            staticRenderFns: []
        }
    },
    299: function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "cart-wrapper"
                }, [t._m(0), t._v(" "), r("div", {
                    staticClass: "cart"
                }, [r("div", {
                    staticClass: "cart-amount"
                }, [r("div", {
                    staticClass: "cart-amount--value"
                }, [t._v(t._s(t._f("formatAmount")(t.total_amount / 1e5)))]), t._v(" "), r("div", {
                    staticClass: "cart-amount--unit text-xs text-muted"
                }, [t._v("mBTC")])]), t._v(" "), t.cart.max_reached ? r("div", {
                    staticClass: "cart-max-reached"
                }, [t._v("\n      Max 7 mBTC per order\n    ")]) : t._e(), t._v(" "), r("div", {
                    staticClass: "cart-action"
                }, [r("button", {
                    staticClass: "button checkout",
                    attrs: {
                        disabled: t.cart.products.length <= 0
                    },
                    on: {
                        click: t.orderCart
                    }
                }, [r("svg-icon", {
                    attrs: {
                        id: "icon_check",
                        color: "white",
                        label: "Checkout cart",
                        size: "md"
                    }
                }), t._v("\n        Checkout\n      ")], 1), t._v(" "), r("button", {
                    staticClass: "button red",
                    attrs: {
                        disabled: t.cart.products.length <= 0
                    },
                    on: {
                        click: t.emptyCart
                    }
                }, [r("svg-icon", {
                    attrs: {
                        id: "icon_bin",
                        color: "white",
                        label: "Empty cart",
                        size: "md"
                    }
                })], 1)]), t._v(" "), r("transition", {
                    attrs: {
                        name: "slide-up-sm"
                    }
                }, ["pending" === t.status ? r("div", {
                    staticClass: "cart-feedback"
                }, [r("div", [t._v("Please wait...")])]) : t._e(), t._v(" "), "failed" === t.status ? r("div", {
                    staticClass: "cart-feedback text-red"
                }, [r("div", [t._v("Error in checkout, please retry.")])]) : t._e()])], 1)])
            },
            staticRenderFns: [function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "app-logo"
                }, [r("img", {
                    attrs: {
                        src: "/static/images/logo_starblocks.png",
                        width: "256"
                    }
                })])
            }]
        }
    },
    301: function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "order"
                }, ["done" === t.status ? r("div", {
                    staticClass: "order-body"
                }, [r("div", {
                    staticClass: "order-details"
                }, [r("div", {
                    staticClass: "order-title text-center"
                }, [t._v("Order "), r("strong", [t._v("#" + t._s(t.order.id))])]), t._v(" "), r("div", {
                    staticClass: "order-amount",
                    on: {
                        click: t.switchUnit
                    }
                }, [t._v("\n        " + t._s(t.amountInUnit(t.order.amount_satoshi)) + " "), r("span", {
                    staticClass: "unit"
                }, [t._v(t._s(t.unit.unit))])]), t._v(" "), r("ul", {
                    staticClass: "order-products"
                }, t._l(t.order.items, function(e, s) {
                    return r("li", {
                        key: s
                    }, [r("div", {
                        staticClass: "order-product--name text-ellipsis"
                    }, [t._v(t._s(t.getProductName(e.product_id)))]), t._v(" "), r("div", {
                        staticClass: "order-product--count"
                    }, [t._v("× " + t._s(e.count))])])
                }))]), t._v(" "), r("transition", {
                    attrs: {
                        name: "paid",
                        mode: "out-in",
                        duration: {
                            enter: 2e3,
                            leave: 0
                        }
                    }
                }, [t._v(">\n      "), t.order.paid ? r("div", {
                    key: "paid",
                    staticClass: "order-payment order-paid",
                    attrs: {
                        id: "paidbox"
                    }
                }, [r("div", {
                    staticClass: "order-container"
                }, [r("img", {
                    staticClass: "order-check",
                    attrs: {
                        src: "/static/images/icon_check_circle_green.png",
                        width: "200"
                    }
                })])]) : r("div", {
                    key: "notpaid",
                    staticClass: "order-payment"
                }, [r("div", {
                    staticClass: "order-title order-pr--title"
                }, [t._v("Scan this invoice with your "), r("strong", [t._v("LN-enabled")]), t._v(" wallet")]), t._v(" "), r("div", {
                    staticClass: "order-container order-pr"
                }, [t.order.payment_request ? r("div", {
                    staticClass: "order-qrcode"
                }, [r("qrcode", {
                    attrs: {
                        value: t.payment_request_with_scheme,
                        options: t.qriousOpts
                    }
                })], 1) : t._e(), t._v(" "), r("div", {
                    staticClass: "order-pr--value"
                }, [r("span", [t._v(t._s(t.order.payment_request))])]), t._v(" "), r("a", {
                    staticClass: "button ocher",
                    attrs: {
                        href: t.payment_request_with_scheme
                    }
                }, [t._v("Open with your wallet")]), t._v(" "), r("button", {
                    directives: [{
                        name: "clipboard",
                        rawName: "v-clipboard:copy",
                        value: t.order.payment_request,
                        expression: "order.payment_request",
                        arg: "copy"
                    }],
                    staticClass: "button copy ocher",
                    attrs: {
                        type: "button",
                        title: "Copy to clipboard"
                    }
                }, [r("svg-icon", {
                    attrs: {
                        id: "icon_copy",
                        label: "Copy",
                        size: "lg"
                    }
                }), t._v(" "), r("span", [t._v("Copy")])], 1)])])])], 1) : t._e(), t._v(" "), "failed" === t.status ? r("div", {
                    staticClass: "order-failed"
                }, [t._v("\n    This order could not be found\n  ")]) : t._e(), t._v(" "), "pending" === t.status ? r("div", {
                    staticClass: "order-fetching"
                }, [t._v("\n    Retrieving order\n  ")]) : t._e(), t._v(" "), r("div", {
                    staticClass: "order-home"
                }, [r("router-link", {
                    staticClass: "button text-sm",
                    attrs: {
                        to: "/",
                        tag: "button"
                    }
                }, [t._v("Go to Home")])], 1)])
            },
            staticRenderFns: []
        }
    },
    302: function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("svg", {
                    class: "svg-icon " + t.size + " " + t.color,
                    attrs: {
                        width: "10",
                        height: "10",
                        "aria-label": t.label
                    }
                }, [r("title", [t._v(t._s(t.label))]), t._v(" "), r("use", {
                    attrs: {
                        "xlink:href": "#" + t.id
                    }
                })])
            },
            staticRenderFns: []
        }
    },
    303: function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "product-wrapper"
                }, [r("div", {
                    staticClass: "product"
                }, [r("div", {
                    staticClass: "product-illustration"
                }, [r("img", {
                    staticClass: "product-image",
                    attrs: {
                        src: "/static/images/" + t.product.label + ".jpg"
                    }
                }), t._v(" "), r("div", {
                    staticClass: "product-price"
                }, [t._v(t._s(t.product.price_satoshi / 1e5) + " mBTC")])]), t._v(" "), r("div", {
                    staticClass: "product-content"
                }, [r("div", {
                    staticClass: "product-name text-cursive"
                }, [t._v(t._s(t.product.name))]), t._v(" "), r("div", {
                    staticClass: "product-desc"
                }, [t._v(t._s(t.product.description))])]), t._v(" "), r("div", {
                    staticClass: "product-action"
                }, [r("button", {
                    staticClass: "button",
                    attrs: {
                        disabled: t.disabled
                    },
                    on: {
                        click: t.addProductToStore
                    }
                }, [r("svg-icon", {
                    attrs: {
                        id: "icon_cart",
                        color: "white",
                        label: "Add to cart",
                        size: "md"
                    }
                }), t._v("\n        Add to cart!\n      ")], 1)])])])
            },
            staticRenderFns: []
        }
    },
    304: function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "app",
                    attrs: {
                        id: "app"
                    }
                }, [r("div", {
                    staticClass: "app-content"
                }, [r("transition", {
                    attrs: {
                        name: "slide-left",
                        mode: "out-in"
                    }
                }, [r("router-view", {
                    staticClass: "view"
                })], 1)], 1), t._v(" "), t._m(0)])
            },
            staticRenderFns: [function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "poweredby"
                }, [r("a", {
                    attrs: {
                        href: "https://github.com/ACINQ/eclair",
                        target: "_blank"
                    }
                }, [r("img", {
                    attrs: {
                        src: "/static/images/poweredby.png",
                        height: "100"
                    }
                })])])
            }]
        }
    },
    308: function(t, e) {}
});
