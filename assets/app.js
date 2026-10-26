"use client";
(() => {
    var _h = Object.create;
    var gi = Object.defineProperty;
    var Fh = Object.getOwnPropertyDescriptor;
    var Gh = Object.getOwnPropertyNames;
    var Vh = Object.getPrototypeOf, Ph = Object.prototype.hasOwnProperty;
    var ya = (e, a) => () => { try {
        return a || e((a = { exports: {} }).exports, a), a.exports;
    }
    catch (t) {
        throw a = 0, t;
    } };
    var Xh = (e, a, t, l) => { if (a && typeof a == "object" || typeof a == "function")
        for (let u of Gh(a))
            !Ph.call(e, u) && u !== t && gi(e, u, { get: () => a[u], enumerable: !(l = Fh(a, u)) || l.enumerable }); return e; };
    var fl = (e, a, t) => (t = e != null ? _h(Vh(e)) : {}, Xh(a || !e || !e.__esModule ? gi(t, "default", { value: e, enumerable: !0 }) : t, e));
    var Di = ya(z => {
        "use strict";
        var xd = Symbol.for("react.transitional.element"), Yh = Symbol.for("react.portal"), Qh = Symbol.for("react.fragment"), Zh = Symbol.for("react.strict_mode"), jh = Symbol.for("react.profiler"), Kh = Symbol.for("react.consumer"), Jh = Symbol.for("react.context"), Wh = Symbol.for("react.forward_ref"), $h = Symbol.for("react.suspense"), eL = Symbol.for("react.memo"), vi = Symbol.for("react.lazy"), aL = Symbol.for("react.activity"), xi = Symbol.iterator;
        function tL(e) { return e === null || typeof e != "object" ? null : (e = xi && e[xi] || e["@@iterator"], typeof e == "function" ? e : null); }
        var Ii = { isMounted: function () { return !1; }, enqueueForceUpdate: function () { }, enqueueReplaceState: function () { }, enqueueSetState: function () { } }, bi = Object.assign, Ai = {};
        function nl(e, a, t) { this.props = e, this.context = a, this.refs = Ai, this.updater = t || Ii; }
        nl.prototype.isReactComponent = {};
        nl.prototype.setState = function (e, a) { if (typeof e != "object" && typeof e != "function" && e != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables."); this.updater.enqueueSetState(this, e, a, "setState"); };
        nl.prototype.forceUpdate = function (e) { this.updater.enqueueForceUpdate(this, e, "forceUpdate"); };
        function Mi() { }
        Mi.prototype = nl.prototype;
        function Sd(e, a, t) { this.props = e, this.context = a, this.refs = Ai, this.updater = t || Ii; }
        var Cd = Sd.prototype = new Mi;
        Cd.constructor = Sd;
        bi(Cd, nl.prototype);
        Cd.isPureReactComponent = !0;
        var Si = Array.isArray;
        function gd() { }
        var ue = { H: null, A: null, T: null, S: null }, Ti = Object.prototype.hasOwnProperty;
        function yd(e, a, t) { var l = t.ref; return { $$typeof: xd, type: e, key: a, ref: l !== void 0 ? l : null, props: t }; }
        function lL(e, a) { return yd(e.type, a, e.props); }
        function vd(e) { return typeof e == "object" && e !== null && e.$$typeof === xd; }
        function uL(e) { var a = { "=": "=0", ":": "=2" }; return "$" + e.replace(/[=:]/g, function (t) { return a[t]; }); }
        var Ci = /\/+/g;
        function Ld(e, a) { return typeof e == "object" && e !== null && e.key != null ? uL("" + e.key) : a.toString(36); }
        function oL(e) { switch (e.status) {
            case "fulfilled": return e.value;
            case "rejected": throw e.reason;
            default: switch (typeof e.status == "string" ? e.then(gd, gd) : (e.status = "pending", e.then(function (a) { e.status === "pending" && (e.status = "fulfilled", e.value = a); }, function (a) { e.status === "pending" && (e.status = "rejected", e.reason = a); })), e.status) {
                case "fulfilled": return e.value;
                case "rejected": throw e.reason;
            }
        } throw e; }
        function dl(e, a, t, l, u) { var o = typeof e; (o === "undefined" || o === "boolean") && (e = null); var f = !1; if (e === null)
            f = !0;
        else
            switch (o) {
                case "bigint":
                case "string":
                case "number":
                    f = !0;
                    break;
                case "object": switch (e.$$typeof) {
                    case xd:
                    case Yh:
                        f = !0;
                        break;
                    case vi: return f = e._init, dl(f(e._payload), a, t, l, u);
                }
            } if (f)
            return u = u(e), f = l === "" ? "." + Ld(e, 0) : l, Si(u) ? (t = "", f != null && (t = f.replace(Ci, "$&/") + "/"), dl(u, a, t, "", function (r) { return r; })) : u != null && (vd(u) && (u = lL(u, t + (u.key == null || e && e.key === u.key ? "" : ("" + u.key).replace(Ci, "$&/") + "/") + f)), a.push(u)), 1; f = 0; var n = l === "" ? "." : l + ":"; if (Si(e))
            for (var s = 0; s < e.length; s++)
                l = e[s], o = n + Ld(l, s), f += dl(l, a, t, o, u);
        else if (s = tL(e), typeof s == "function")
            for (e = s.call(e), s = 0; !(l = e.next()).done;)
                l = l.value, o = n + Ld(l, s++), f += dl(l, a, t, o, u);
        else if (o === "object") {
            if (typeof e.then == "function")
                return dl(oL(e), a, t, l, u);
            throw a = String(e), Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
        } return f; }
        function Bo(e, a, t) { if (e == null)
            return e; var l = [], u = 0; return dl(e, l, "", "", function (o) { return a.call(t, o, u++); }), l; }
        function fL(e) { if (e._status === -1) {
            var a = e._result;
            a = a(), a.then(function (t) { (e._status === 0 || e._status === -1) && (e._status = 1, e._result = t); }, function (t) { (e._status === 0 || e._status === -1) && (e._status = 2, e._result = t); }), e._status === -1 && (e._status = 0, e._result = a);
        } if (e._status === 1)
            return e._result.default; throw e._result; }
        var yi = typeof reportError == "function" ? reportError : function (e) { if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var a = new window.ErrorEvent("error", { bubbles: !0, cancelable: !0, message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e), error: e });
            if (!window.dispatchEvent(a))
                return;
        }
        else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", e);
            return;
        } console.error(e); }, dL = { map: Bo, forEach: function (e, a, t) { Bo(e, function () { a.apply(this, arguments); }, t); }, count: function (e) { var a = 0; return Bo(e, function () { a++; }), a; }, toArray: function (e) { return Bo(e, function (a) { return a; }) || []; }, only: function (e) { if (!vd(e))
                throw Error("React.Children.only expected to receive a single React element child."); return e; } };
        z.Activity = aL;
        z.Children = dL;
        z.Component = nl;
        z.Fragment = Qh;
        z.Profiler = jh;
        z.PureComponent = Sd;
        z.StrictMode = Zh;
        z.Suspense = $h;
        z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ue;
        z.__COMPILER_RUNTIME = { __proto__: null, c: function (e) { return ue.H.useMemoCache(e); } };
        z.cache = function (e) { return function () { return e.apply(null, arguments); }; };
        z.cacheSignal = function () { return null; };
        z.cloneElement = function (e, a, t) { if (e == null)
            throw Error("The argument must be a React element, but you passed " + e + "."); var l = bi({}, e.props), u = e.key; if (a != null)
            for (o in a.key !== void 0 && (u = "" + a.key), a)
                !Ti.call(a, o) || o === "key" || o === "__self" || o === "__source" || o === "ref" && a.ref === void 0 || (l[o] = a[o]); var o = arguments.length - 2; if (o === 1)
            l.children = t;
        else if (1 < o) {
            for (var f = Array(o), n = 0; n < o; n++)
                f[n] = arguments[n + 2];
            l.children = f;
        } return yd(e.type, u, l); };
        z.createContext = function (e) { return e = { $$typeof: Jh, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null }, e.Provider = e, e.Consumer = { $$typeof: Kh, _context: e }, e; };
        z.createElement = function (e, a, t) { var l, u = {}, o = null; if (a != null)
            for (l in a.key !== void 0 && (o = "" + a.key), a)
                Ti.call(a, l) && l !== "key" && l !== "__self" && l !== "__source" && (u[l] = a[l]); var f = arguments.length - 2; if (f === 1)
            u.children = t;
        else if (1 < f) {
            for (var n = Array(f), s = 0; s < f; s++)
                n[s] = arguments[s + 2];
            u.children = n;
        } if (e && e.defaultProps)
            for (l in f = e.defaultProps, f)
                u[l] === void 0 && (u[l] = f[l]); return yd(e, o, u); };
        z.createRef = function () { return { current: null }; };
        z.forwardRef = function (e) { return { $$typeof: Wh, render: e }; };
        z.isValidElement = vd;
        z.lazy = function (e) { return { $$typeof: vi, _payload: { _status: -1, _result: e }, _init: fL }; };
        z.memo = function (e, a) { return { $$typeof: eL, type: e, compare: a === void 0 ? null : a }; };
        z.startTransition = function (e) { var a = ue.T, t = {}; ue.T = t; try {
            var l = e(), u = ue.S;
            u !== null && u(t, l), typeof l == "object" && l !== null && typeof l.then == "function" && l.then(gd, yi);
        }
        catch (o) {
            yi(o);
        }
        finally {
            a !== null && t.types !== null && (a.types = t.types), ue.T = a;
        } };
        z.unstable_useCacheRefresh = function () { return ue.H.useCacheRefresh(); };
        z.use = function (e) { return ue.H.use(e); };
        z.useActionState = function (e, a, t) { return ue.H.useActionState(e, a, t); };
        z.useCallback = function (e, a) { return ue.H.useCallback(e, a); };
        z.useContext = function (e) { return ue.H.useContext(e); };
        z.useDebugValue = function () { };
        z.useDeferredValue = function (e, a) { return ue.H.useDeferredValue(e, a); };
        z.useEffect = function (e, a) { return ue.H.useEffect(e, a); };
        z.useEffectEvent = function (e) { return ue.H.useEffectEvent(e); };
        z.useId = function () { return ue.H.useId(); };
        z.useImperativeHandle = function (e, a, t) { return ue.H.useImperativeHandle(e, a, t); };
        z.useInsertionEffect = function (e, a) { return ue.H.useInsertionEffect(e, a); };
        z.useLayoutEffect = function (e, a) { return ue.H.useLayoutEffect(e, a); };
        z.useMemo = function (e, a) { return ue.H.useMemo(e, a); };
        z.useOptimistic = function (e, a) { return ue.H.useOptimistic(e, a); };
        z.useReducer = function (e, a, t) { return ue.H.useReducer(e, a, t); };
        z.useRef = function (e) { return ue.H.useRef(e); };
        z.useState = function (e) { return ue.H.useState(e); };
        z.useSyncExternalStore = function (e, a, t) { return ue.H.useSyncExternalStore(e, a, t); };
        z.useTransition = function () { return ue.H.useTransition(); };
        z.version = "19.2.0";
    });
    var sl = ya((J1, wi) => {
        "use strict";
        wi.exports = Di();
    });
    var Zi = ya(se => {
        "use strict";
        function Td(e, a) { var t = e.length; e.push(a); e: for (; 0 < t;) {
            var l = t - 1 >>> 1, u = e[l];
            if (0 < Uo(u, a))
                e[l] = a, e[t] = u, t = l;
            else
                break e;
        } }
        function ba(e) { return e.length === 0 ? null : e[0]; }
        function qo(e) { if (e.length === 0)
            return null; var a = e[0], t = e.pop(); if (t !== a) {
            e[0] = t;
            e: for (var l = 0, u = e.length, o = u >>> 1; l < o;) {
                var f = 2 * (l + 1) - 1, n = e[f], s = f + 1, r = e[s];
                if (0 > Uo(n, t))
                    s < u && 0 > Uo(r, n) ? (e[l] = r, e[s] = t, l = s) : (e[l] = n, e[f] = t, l = f);
                else if (s < u && 0 > Uo(r, t))
                    e[l] = r, e[s] = t, l = s;
                else
                    break e;
            }
        } return a; }
        function Uo(e, a) { var t = e.sortIndex - a.sortIndex; return t !== 0 ? t : e.id - a.id; }
        se.unstable_now = void 0;
        typeof performance == "object" && typeof performance.now == "function" ? (Hi = performance, se.unstable_now = function () { return Hi.now(); }) : (bd = Date, _i = bd.now(), se.unstable_now = function () { return bd.now() - _i; });
        var Hi, bd, _i, Ea = [], ft = [], LL = 1, ta = null, Re = 3, Dd = !1, Au = !1, Mu = !1, wd = !1, Vi = typeof setTimeout == "function" ? setTimeout : null, Pi = typeof clearTimeout == "function" ? clearTimeout : null, Fi = typeof setImmediate < "u" ? setImmediate : null;
        function Eo(e) { for (var a = ba(ft); a !== null;) {
            if (a.callback === null)
                qo(ft);
            else if (a.startTime <= e)
                qo(ft), a.sortIndex = a.expirationTime, Td(Ea, a);
            else
                break;
            a = ba(ft);
        } }
        function Bd(e) { if (Mu = !1, Eo(e), !Au)
            if (ba(Ea) !== null)
                Au = !0, Cl || (Cl = !0, Sl());
            else {
                var a = ba(ft);
                a !== null && Rd(Bd, a.startTime - e);
            } }
        var Cl = !1, Tu = -1, Xi = 5, Yi = -1;
        function Qi() { return wd ? !0 : !(se.unstable_now() - Yi < Xi); }
        function Ad() { if (wd = !1, Cl) {
            var e = se.unstable_now();
            Yi = e;
            var a = !0;
            try {
                e: {
                    Au = !1, Mu && (Mu = !1, Pi(Tu), Tu = -1), Dd = !0;
                    var t = Re;
                    try {
                        a: {
                            for (Eo(e), ta = ba(Ea); ta !== null && !(ta.expirationTime > e && Qi());) {
                                var l = ta.callback;
                                if (typeof l == "function") {
                                    ta.callback = null, Re = ta.priorityLevel;
                                    var u = l(ta.expirationTime <= e);
                                    if (e = se.unstable_now(), typeof u == "function") {
                                        ta.callback = u, Eo(e), a = !0;
                                        break a;
                                    }
                                    ta === ba(Ea) && qo(Ea), Eo(e);
                                }
                                else
                                    qo(Ea);
                                ta = ba(Ea);
                            }
                            if (ta !== null)
                                a = !0;
                            else {
                                var o = ba(ft);
                                o !== null && Rd(Bd, o.startTime - e), a = !1;
                            }
                        }
                        break e;
                    }
                    finally {
                        ta = null, Re = t, Dd = !1;
                    }
                    a = void 0;
                }
            }
            finally {
                a ? Sl() : Cl = !1;
            }
        } }
        var Sl;
        typeof Fi == "function" ? Sl = function () { Fi(Ad); } : typeof MessageChannel < "u" ? (Md = new MessageChannel, Gi = Md.port2, Md.port1.onmessage = Ad, Sl = function () { Gi.postMessage(null); }) : Sl = function () { Vi(Ad, 0); };
        var Md, Gi;
        function Rd(e, a) { Tu = Vi(function () { e(se.unstable_now()); }, a); }
        se.unstable_IdlePriority = 5;
        se.unstable_ImmediatePriority = 1;
        se.unstable_LowPriority = 4;
        se.unstable_NormalPriority = 3;
        se.unstable_Profiling = null;
        se.unstable_UserBlockingPriority = 2;
        se.unstable_cancelCallback = function (e) { e.callback = null; };
        se.unstable_forceFrameRate = function (e) { 0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Xi = 0 < e ? Math.floor(1e3 / e) : 5; };
        se.unstable_getCurrentPriorityLevel = function () { return Re; };
        se.unstable_next = function (e) { switch (Re) {
            case 1:
            case 2:
            case 3:
                var a = 3;
                break;
            default: a = Re;
        } var t = Re; Re = a; try {
            return e();
        }
        finally {
            Re = t;
        } };
        se.unstable_requestPaint = function () { wd = !0; };
        se.unstable_runWithPriority = function (e, a) { switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5: break;
            default: e = 3;
        } var t = Re; Re = e; try {
            return a();
        }
        finally {
            Re = t;
        } };
        se.unstable_scheduleCallback = function (e, a, t) { var l = se.unstable_now(); switch (typeof t == "object" && t !== null ? (t = t.delay, t = typeof t == "number" && 0 < t ? l + t : l) : t = l, e) {
            case 1:
                var u = -1;
                break;
            case 2:
                u = 250;
                break;
            case 5:
                u = 1073741823;
                break;
            case 4:
                u = 1e4;
                break;
            default: u = 5e3;
        } return u = t + u, e = { id: LL++, callback: a, priorityLevel: e, startTime: t, expirationTime: u, sortIndex: -1 }, t > l ? (e.sortIndex = t, Td(ft, e), ba(Ea) === null && e === ba(ft) && (Mu ? (Pi(Tu), Tu = -1) : Mu = !0, Rd(Bd, t - l))) : (e.sortIndex = u, Td(Ea, e), Au || Dd || (Au = !0, Cl || (Cl = !0, Sl()))), e; };
        se.unstable_shouldYield = Qi;
        se.unstable_wrapCallback = function (e) { var a = Re; return function () { var t = Re; Re = a; try {
            return e.apply(this, arguments);
        }
        finally {
            Re = t;
        } }; };
    });
    var Ki = ya((Px, ji) => {
        "use strict";
        ji.exports = Zi();
    });
    var Wi = ya(Ue => {
        "use strict";
        var gL = sl();
        function Ji(e) { var a = "https://react.dev/errors/" + e; if (1 < arguments.length) {
            a += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var t = 2; t < arguments.length; t++)
                a += "&args[]=" + encodeURIComponent(arguments[t]);
        } return "Minified React error #" + e + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."; }
        function dt() { }
        var Oe = { d: { f: dt, r: function () { throw Error(Ji(522)); }, D: dt, C: dt, L: dt, m: dt, X: dt, S: dt, M: dt }, p: 0, findDOMNode: null }, xL = Symbol.for("react.portal");
        function SL(e, a, t) { var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null; return { $$typeof: xL, key: l == null ? null : "" + l, children: e, containerInfo: a, implementation: t }; }
        var Du = gL.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function zo(e, a) { if (e === "font")
            return ""; if (typeof a == "string")
            return a === "use-credentials" ? a : ""; }
        Ue.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Oe;
        Ue.createPortal = function (e, a) { var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null; if (!a || a.nodeType !== 1 && a.nodeType !== 9 && a.nodeType !== 11)
            throw Error(Ji(299)); return SL(e, a, null, t); };
        Ue.flushSync = function (e) { var a = Du.T, t = Oe.p; try {
            if (Du.T = null, Oe.p = 2, e)
                return e();
        }
        finally {
            Du.T = a, Oe.p = t, Oe.d.f();
        } };
        Ue.preconnect = function (e, a) { typeof e == "string" && (a ? (a = a.crossOrigin, a = typeof a == "string" ? a === "use-credentials" ? a : "" : void 0) : a = null, Oe.d.C(e, a)); };
        Ue.prefetchDNS = function (e) { typeof e == "string" && Oe.d.D(e); };
        Ue.preinit = function (e, a) { if (typeof e == "string" && a && typeof a.as == "string") {
            var t = a.as, l = zo(t, a.crossOrigin), u = typeof a.integrity == "string" ? a.integrity : void 0, o = typeof a.fetchPriority == "string" ? a.fetchPriority : void 0;
            t === "style" ? Oe.d.S(e, typeof a.precedence == "string" ? a.precedence : void 0, { crossOrigin: l, integrity: u, fetchPriority: o }) : t === "script" && Oe.d.X(e, { crossOrigin: l, integrity: u, fetchPriority: o, nonce: typeof a.nonce == "string" ? a.nonce : void 0 });
        } };
        Ue.preinitModule = function (e, a) { if (typeof e == "string")
            if (typeof a == "object" && a !== null) {
                if (a.as == null || a.as === "script") {
                    var t = zo(a.as, a.crossOrigin);
                    Oe.d.M(e, { crossOrigin: t, integrity: typeof a.integrity == "string" ? a.integrity : void 0, nonce: typeof a.nonce == "string" ? a.nonce : void 0 });
                }
            }
            else
                a == null && Oe.d.M(e); };
        Ue.preload = function (e, a) { if (typeof e == "string" && typeof a == "object" && a !== null && typeof a.as == "string") {
            var t = a.as, l = zo(t, a.crossOrigin);
            Oe.d.L(e, t, { crossOrigin: l, integrity: typeof a.integrity == "string" ? a.integrity : void 0, nonce: typeof a.nonce == "string" ? a.nonce : void 0, type: typeof a.type == "string" ? a.type : void 0, fetchPriority: typeof a.fetchPriority == "string" ? a.fetchPriority : void 0, referrerPolicy: typeof a.referrerPolicy == "string" ? a.referrerPolicy : void 0, imageSrcSet: typeof a.imageSrcSet == "string" ? a.imageSrcSet : void 0, imageSizes: typeof a.imageSizes == "string" ? a.imageSizes : void 0, media: typeof a.media == "string" ? a.media : void 0 });
        } };
        Ue.preloadModule = function (e, a) { if (typeof e == "string")
            if (a) {
                var t = zo(a.as, a.crossOrigin);
                Oe.d.m(e, { as: typeof a.as == "string" && a.as !== "script" ? a.as : void 0, crossOrigin: t, integrity: typeof a.integrity == "string" ? a.integrity : void 0 });
            }
            else
                Oe.d.m(e); };
        Ue.requestFormReset = function (e) { Oe.d.r(e); };
        Ue.unstable_batchedUpdates = function (e, a) { return e(a); };
        Ue.useFormState = function (e, a, t) { return Du.H.useFormState(e, a, t); };
        Ue.useFormStatus = function () { return Du.H.useHostTransitionStatus(); };
        Ue.version = "19.2.0";
    });
    var ar = ya((Yx, er) => {
        "use strict";
        function $i() { if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($i);
            }
            catch (e) {
                console.error(e);
            } }
        $i(), er.exports = Wi();
    });
    var mh = ya(sd => {
        "use strict";
        var ye = Ki(), Tc = sl(), CL = ar();
        function A(e) { var a = "https://react.dev/errors/" + e; if (1 < arguments.length) {
            a += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var t = 2; t < arguments.length; t++)
                a += "&args[]=" + encodeURIComponent(arguments[t]);
        } return "Minified React error #" + e + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."; }
        function Dc(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11); }
        function ho(e) { var a = e, t = e; if (e.alternate)
            for (; a.return;)
                a = a.return;
        else {
            e = a;
            do
                a = e, (a.flags & 4098) !== 0 && (t = a.return), e = a.return;
            while (e);
        } return a.tag === 3 ? t : null; }
        function wc(e) { if (e.tag === 13) {
            var a = e.memoizedState;
            if (a === null && (e = e.alternate, e !== null && (a = e.memoizedState)), a !== null)
                return a.dehydrated;
        } return null; }
        function Bc(e) { if (e.tag === 31) {
            var a = e.memoizedState;
            if (a === null && (e = e.alternate, e !== null && (a = e.memoizedState)), a !== null)
                return a.dehydrated;
        } return null; }
        function tr(e) { if (ho(e) !== e)
            throw Error(A(188)); }
        function yL(e) { var a = e.alternate; if (!a) {
            if (a = ho(e), a === null)
                throw Error(A(188));
            return a !== e ? null : e;
        } for (var t = e, l = a;;) {
            var u = t.return;
            if (u === null)
                break;
            var o = u.alternate;
            if (o === null) {
                if (l = u.return, l !== null) {
                    t = l;
                    continue;
                }
                break;
            }
            if (u.child === o.child) {
                for (o = u.child; o;) {
                    if (o === t)
                        return tr(u), e;
                    if (o === l)
                        return tr(u), a;
                    o = o.sibling;
                }
                throw Error(A(188));
            }
            if (t.return !== l.return)
                t = u, l = o;
            else {
                for (var f = !1, n = u.child; n;) {
                    if (n === t) {
                        f = !0, t = u, l = o;
                        break;
                    }
                    if (n === l) {
                        f = !0, l = u, t = o;
                        break;
                    }
                    n = n.sibling;
                }
                if (!f) {
                    for (n = o.child; n;) {
                        if (n === t) {
                            f = !0, t = o, l = u;
                            break;
                        }
                        if (n === l) {
                            f = !0, l = o, t = u;
                            break;
                        }
                        n = n.sibling;
                    }
                    if (!f)
                        throw Error(A(189));
                }
            }
            if (t.alternate !== l)
                throw Error(A(190));
        } if (t.tag !== 3)
            throw Error(A(188)); return t.stateNode.current === t ? e : a; }
        function Rc(e) { var a = e.tag; if (a === 5 || a === 26 || a === 27 || a === 6)
            return e; for (e = e.child; e !== null;) {
            if (a = Rc(e), a !== null)
                return a;
            e = e.sibling;
        } return null; }
        var de = Object.assign, vL = Symbol.for("react.element"), No = Symbol.for("react.transitional.element"), qu = Symbol.for("react.portal"), Ml = Symbol.for("react.fragment"), kc = Symbol.for("react.strict_mode"), cn = Symbol.for("react.profiler"), Oc = Symbol.for("react.consumer"), Va = Symbol.for("react.context"), ds = Symbol.for("react.forward_ref"), mn = Symbol.for("react.suspense"), pn = Symbol.for("react.suspense_list"), ns = Symbol.for("react.memo"), nt = Symbol.for("react.lazy"), hn = Symbol.for("react.activity"), IL = Symbol.for("react.memo_cache_sentinel"), lr = Symbol.iterator;
        function wu(e) { return e === null || typeof e != "object" ? null : (e = lr && e[lr] || e["@@iterator"], typeof e == "function" ? e : null); }
        var bL = Symbol.for("react.client.reference");
        function Ln(e) { if (e == null)
            return null; if (typeof e == "function")
            return e.$$typeof === bL ? null : e.displayName || e.name || null; if (typeof e == "string")
            return e; switch (e) {
            case Ml: return "Fragment";
            case cn: return "Profiler";
            case kc: return "StrictMode";
            case mn: return "Suspense";
            case pn: return "SuspenseList";
            case hn: return "Activity";
        } if (typeof e == "object")
            switch (e.$$typeof) {
                case qu: return "Portal";
                case Va: return e.displayName || "Context";
                case Oc: return (e._context.displayName || "Context") + ".Consumer";
                case ds:
                    var a = e.render;
                    return e = e.displayName, e || (e = a.displayName || a.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                case ns: return a = e.displayName || null, a !== null ? a : Ln(e.type) || "Memo";
                case nt:
                    a = e._payload, e = e._init;
                    try {
                        return Ln(e(a));
                    }
                    catch { }
            } return null; }
        var zu = Array.isArray, E = Tc.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = CL.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Pt = { pending: !1, data: null, method: null, action: null }, gn = [], Tl = -1;
        function wa(e) { return { current: e }; }
        function be(e) { 0 > Tl || (e.current = gn[Tl], gn[Tl] = null, Tl--); }
        function le(e, a) { Tl++, gn[Tl] = e.current, e.current = a; }
        var Da = wa(null), eo = wa(null), St = wa(null), xf = wa(null);
        function Sf(e, a) { switch (le(St, a), le(eo, e), le(Da, null), a.nodeType) {
            case 9:
            case 11:
                e = (e = a.documentElement) && (e = e.namespaceURI) ? ic(e) : 0;
                break;
            default: if (e = a.tagName, a = a.namespaceURI)
                a = ic(a), e = $p(a, e);
            else
                switch (e) {
                    case "svg":
                        e = 1;
                        break;
                    case "math":
                        e = 2;
                        break;
                    default: e = 0;
                }
        } be(Da), le(Da, e); }
        function Xl() { be(Da), be(eo), be(St); }
        function xn(e) { e.memoizedState !== null && le(xf, e); var a = Da.current, t = $p(a, e.type); a !== t && (le(eo, e), le(Da, t)); }
        function Cf(e) { eo.current === e && (be(Da), be(eo)), xf.current === e && (be(xf), co._currentValue = Pt); }
        var kd, ur;
        function _t(e) {
            if (kd === void 0)
                try {
                    throw Error();
                }
                catch (t) {
                    var a = t.stack.trim().match(/\n( *(at )?)/);
                    kd = a && a[1] || "", ur = -1 < t.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < t.stack.indexOf("@") ? "@unknown:0:0" : "";
                }
            return `
` + kd + e + ur;
        }
        var Od = !1;
        function Ud(e, a) {
            if (!e || Od)
                return "";
            Od = !0;
            var t = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            try {
                var l = { DetermineComponentFrameRoot: function () { try {
                        if (a) {
                            var p = function () { throw Error(); };
                            if (Object.defineProperty(p.prototype, "props", { set: function () { throw Error(); } }), typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(p, []);
                                }
                                catch (C) {
                                    var i = C;
                                }
                                Reflect.construct(e, [], p);
                            }
                            else {
                                try {
                                    p.call();
                                }
                                catch (C) {
                                    i = C;
                                }
                                e.call(p.prototype);
                            }
                        }
                        else {
                            try {
                                throw Error();
                            }
                            catch (C) {
                                i = C;
                            }
                            (p = e()) && typeof p.catch == "function" && p.catch(function () { });
                        }
                    }
                    catch (C) {
                        if (C && i && typeof C.stack == "string")
                            return [C.stack, i.stack];
                    } return [null, null]; } };
                l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
                var u = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, "name");
                u && u.configurable && Object.defineProperty(l.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
                var o = l.DetermineComponentFrameRoot(), f = o[0], n = o[1];
                if (f && n) {
                    var s = f.split(`
`), r = n.split(`
`);
                    for (u = l = 0; l < s.length && !s[l].includes("DetermineComponentFrameRoot");)
                        l++;
                    for (; u < r.length && !r[u].includes("DetermineComponentFrameRoot");)
                        u++;
                    if (l === s.length || u === r.length)
                        for (l = s.length - 1, u = r.length - 1; 1 <= l && 0 <= u && s[l] !== r[u];)
                            u--;
                    for (; 1 <= l && 0 <= u; l--, u--)
                        if (s[l] !== r[u]) {
                            if (l !== 1 || u !== 1)
                                do
                                    if (l--, u--, 0 > u || s[l] !== r[u]) {
                                        var g = `
` + s[l].replace(" at new ", " at ");
                                        return e.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", e.displayName)), g;
                                    }
                                while (1 <= l && 0 <= u);
                            break;
                        }
                }
            }
            finally {
                Od = !1, Error.prepareStackTrace = t;
            }
            return (t = e ? e.displayName || e.name : "") ? _t(t) : "";
        }
        function AL(e, a) { switch (e.tag) {
            case 26:
            case 27:
            case 5: return _t(e.type);
            case 16: return _t("Lazy");
            case 13: return e.child !== a && a !== null ? _t("Suspense Fallback") : _t("Suspense");
            case 19: return _t("SuspenseList");
            case 0:
            case 15: return Ud(e.type, !1);
            case 11: return Ud(e.type.render, !1);
            case 1: return Ud(e.type, !0);
            case 31: return _t("Activity");
            default: return "";
        } }
        function or(e) {
            try {
                var a = "", t = null;
                do
                    a += AL(e, t), t = e, e = e.return;
                while (e);
                return a;
            }
            catch (l) {
                return `
Error generating stack: ` + l.message + `
` + l.stack;
            }
        }
        var Sn = Object.prototype.hasOwnProperty, ss = ye.unstable_scheduleCallback, Ed = ye.unstable_cancelCallback, ML = ye.unstable_shouldYield, TL = ye.unstable_requestPaint, Ze = ye.unstable_now, DL = ye.unstable_getCurrentPriorityLevel, Uc = ye.unstable_ImmediatePriority, Ec = ye.unstable_UserBlockingPriority, yf = ye.unstable_NormalPriority, wL = ye.unstable_LowPriority, qc = ye.unstable_IdlePriority, BL = ye.log, RL = ye.unstable_setDisableYieldValue, Lo = null, je = null;
        function pt(e) { if (typeof BL == "function" && RL(e), je && typeof je.setStrictMode == "function")
            try {
                je.setStrictMode(Lo, e);
            }
            catch { } }
        var Ke = Math.clz32 ? Math.clz32 : UL, kL = Math.log, OL = Math.LN2;
        function UL(e) { return e >>>= 0, e === 0 ? 32 : 31 - (kL(e) / OL | 0) | 0; }
        var Ho = 256, _o = 262144, Fo = 4194304;
        function Ft(e) { var a = e & 42; if (a !== 0)
            return a; switch (e & -e) {
            case 1: return 1;
            case 2: return 2;
            case 4: return 4;
            case 8: return 8;
            case 16: return 16;
            case 32: return 32;
            case 64: return 64;
            case 128: return 128;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072: return e & 261888;
            case 262144:
            case 524288:
            case 1048576:
            case 2097152: return e & 3932160;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432: return e & 62914560;
            case 67108864: return 67108864;
            case 134217728: return 134217728;
            case 268435456: return 268435456;
            case 536870912: return 536870912;
            case 1073741824: return 0;
            default: return e;
        } }
        function Qf(e, a, t) { var l = e.pendingLanes; if (l === 0)
            return 0; var u = 0, o = e.suspendedLanes, f = e.pingedLanes; e = e.warmLanes; var n = l & 134217727; return n !== 0 ? (l = n & ~o, l !== 0 ? u = Ft(l) : (f &= n, f !== 0 ? u = Ft(f) : t || (t = n & ~e, t !== 0 && (u = Ft(t))))) : (n = l & ~o, n !== 0 ? u = Ft(n) : f !== 0 ? u = Ft(f) : t || (t = l & ~e, t !== 0 && (u = Ft(t)))), u === 0 ? 0 : a !== 0 && a !== u && (a & o) === 0 && (o = u & -u, t = a & -a, o >= t || o === 32 && (t & 4194048) !== 0) ? a : u; }
        function go(e, a) { return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & a) === 0; }
        function EL(e, a) { switch (e) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64: return a + 250;
            case 16:
            case 32:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152: return a + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432: return -1;
            case 67108864:
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824: return -1;
            default: return -1;
        } }
        function zc() { var e = Fo; return Fo <<= 1, (Fo & 62914560) === 0 && (Fo = 4194304), e; }
        function qd(e) { for (var a = [], t = 0; 31 > t; t++)
            a.push(e); return a; }
        function xo(e, a) { e.pendingLanes |= a, a !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0); }
        function qL(e, a, t, l, u, o) { var f = e.pendingLanes; e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= t, e.entangledLanes &= t, e.errorRecoveryDisabledLanes &= t, e.shellSuspendCounter = 0; var n = e.entanglements, s = e.expirationTimes, r = e.hiddenUpdates; for (t = f & ~t; 0 < t;) {
            var g = 31 - Ke(t), p = 1 << g;
            n[g] = 0, s[g] = -1;
            var i = r[g];
            if (i !== null)
                for (r[g] = null, g = 0; g < i.length; g++) {
                    var C = i[g];
                    C !== null && (C.lane &= -536870913);
                }
            t &= ~p;
        } l !== 0 && Nc(e, l, 0), o !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= o & ~(f & ~a)); }
        function Nc(e, a, t) { e.pendingLanes |= a, e.suspendedLanes &= ~a; var l = 31 - Ke(a); e.entangledLanes |= a, e.entanglements[l] = e.entanglements[l] | 1073741824 | t & 261930; }
        function Hc(e, a) { var t = e.entangledLanes |= a; for (e = e.entanglements; t;) {
            var l = 31 - Ke(t), u = 1 << l;
            u & a | e[l] & a && (e[l] |= a), t &= ~u;
        } }
        function _c(e, a) { var t = a & -a; return t = (t & 42) !== 0 ? 1 : is(t), (t & (e.suspendedLanes | a)) !== 0 ? 0 : t; }
        function is(e) { switch (e) {
            case 2:
                e = 1;
                break;
            case 8:
                e = 4;
                break;
            case 32:
                e = 16;
                break;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                e = 128;
                break;
            case 268435456:
                e = 134217728;
                break;
            default: e = 0;
        } return e; }
        function rs(e) { return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2; }
        function Fc() { var e = Q.p; return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : ih(e.type)); }
        function fr(e, a) { var t = Q.p; try {
            return Q.p = e, a();
        }
        finally {
            Q.p = t;
        } }
        var kt = Math.random().toString(36).slice(2), Me = "__reactFiber$" + kt, Fe = "__reactProps$" + kt, tu = "__reactContainer$" + kt, Cn = "__reactEvents$" + kt, zL = "__reactListeners$" + kt, NL = "__reactHandles$" + kt, dr = "__reactResources$" + kt, So = "__reactMarker$" + kt;
        function cs(e) { delete e[Me], delete e[Fe], delete e[Cn], delete e[zL], delete e[NL]; }
        function Dl(e) { var a = e[Me]; if (a)
            return a; for (var t = e.parentNode; t;) {
            if (a = t[tu] || t[Me]) {
                if (t = a.alternate, a.child !== null || t !== null && t.child !== null)
                    for (e = hc(e); e !== null;) {
                        if (t = e[Me])
                            return t;
                        e = hc(e);
                    }
                return a;
            }
            e = t, t = e.parentNode;
        } return null; }
        function lu(e) { if (e = e[Me] || e[tu]) {
            var a = e.tag;
            if (a === 5 || a === 6 || a === 13 || a === 31 || a === 26 || a === 27 || a === 3)
                return e;
        } return null; }
        function Nu(e) { var a = e.tag; if (a === 5 || a === 26 || a === 27 || a === 6)
            return e.stateNode; throw Error(A(33)); }
        function Nl(e) { var a = e[dr]; return a || (a = e[dr] = { hoistableStyles: new Map, hoistableScripts: new Map }), a; }
        function Ie(e) { e[So] = !0; }
        var Gc = new Set, Vc = {};
        function el(e, a) { Yl(e, a), Yl(e + "Capture", a); }
        function Yl(e, a) { for (Vc[e] = a, e = 0; e < a.length; e++)
            Gc.add(a[e]); }
        var HL = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), nr = {}, sr = {};
        function _L(e) { return Sn.call(sr, e) ? !0 : Sn.call(nr, e) ? !1 : HL.test(e) ? sr[e] = !0 : (nr[e] = !0, !1); }
        function tf(e, a, t) { if (_L(a))
            if (t === null)
                e.removeAttribute(a);
            else {
                switch (typeof t) {
                    case "undefined":
                    case "function":
                    case "symbol":
                        e.removeAttribute(a);
                        return;
                    case "boolean":
                        var l = a.toLowerCase().slice(0, 5);
                        if (l !== "data-" && l !== "aria-") {
                            e.removeAttribute(a);
                            return;
                        }
                }
                e.setAttribute(a, "" + t);
            } }
        function Go(e, a, t) { if (t === null)
            e.removeAttribute(a);
        else {
            switch (typeof t) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    e.removeAttribute(a);
                    return;
            }
            e.setAttribute(a, "" + t);
        } }
        function qa(e, a, t, l) { if (l === null)
            e.removeAttribute(t);
        else {
            switch (typeof l) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    e.removeAttribute(t);
                    return;
            }
            e.setAttributeNS(a, t, "" + l);
        } }
        function ua(e) { switch (typeof e) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined": return e;
            case "object": return e;
            default: return "";
        } }
        function Pc(e) { var a = e.type; return (e = e.nodeName) && e.toLowerCase() === "input" && (a === "checkbox" || a === "radio"); }
        function FL(e, a, t) { var l = Object.getOwnPropertyDescriptor(e.constructor.prototype, a); if (!e.hasOwnProperty(a) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
            var u = l.get, o = l.set;
            return Object.defineProperty(e, a, { configurable: !0, get: function () { return u.call(this); }, set: function (f) { t = "" + f, o.call(this, f); } }), Object.defineProperty(e, a, { enumerable: l.enumerable }), { getValue: function () { return t; }, setValue: function (f) { t = "" + f; }, stopTracking: function () { e._valueTracker = null, delete e[a]; } };
        } }
        function yn(e) { if (!e._valueTracker) {
            var a = Pc(e) ? "checked" : "value";
            e._valueTracker = FL(e, a, "" + e[a]);
        } }
        function Xc(e) { if (!e)
            return !1; var a = e._valueTracker; if (!a)
            return !0; var t = a.getValue(), l = ""; return e && (l = Pc(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== t ? (a.setValue(e), !0) : !1; }
        function vf(e) { if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
            return null; try {
            return e.activeElement || e.body;
        }
        catch {
            return e.body;
        } }
        var GL = /[\n"\\]/g;
        function da(e) { return e.replace(GL, function (a) { return "\\" + a.charCodeAt(0).toString(16) + " "; }); }
        function vn(e, a, t, l, u, o, f, n) { e.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.type = f : e.removeAttribute("type"), a != null ? f === "number" ? (a === 0 && e.value === "" || e.value != a) && (e.value = "" + ua(a)) : e.value !== "" + ua(a) && (e.value = "" + ua(a)) : f !== "submit" && f !== "reset" || e.removeAttribute("value"), a != null ? In(e, f, ua(a)) : t != null ? In(e, f, ua(t)) : l != null && e.removeAttribute("value"), u == null && o != null && (e.defaultChecked = !!o), u != null && (e.checked = u && typeof u != "function" && typeof u != "symbol"), n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" ? e.name = "" + ua(n) : e.removeAttribute("name"); }
        function Yc(e, a, t, l, u, o, f, n) { if (o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (e.type = o), a != null || t != null) {
            if (!(o !== "submit" && o !== "reset" || a != null)) {
                yn(e);
                return;
            }
            t = t != null ? "" + ua(t) : "", a = a != null ? "" + ua(a) : t, n || a === e.value || (e.value = a), e.defaultValue = a;
        } l = l ?? u, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = n ? e.checked : !!l, e.defaultChecked = !!l, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.name = f), yn(e); }
        function In(e, a, t) { a === "number" && vf(e.ownerDocument) === e || e.defaultValue === "" + t || (e.defaultValue = "" + t); }
        function Hl(e, a, t, l) { if (e = e.options, a) {
            a = {};
            for (var u = 0; u < t.length; u++)
                a["$" + t[u]] = !0;
            for (t = 0; t < e.length; t++)
                u = a.hasOwnProperty("$" + e[t].value), e[t].selected !== u && (e[t].selected = u), u && l && (e[t].defaultSelected = !0);
        }
        else {
            for (t = "" + ua(t), a = null, u = 0; u < e.length; u++) {
                if (e[u].value === t) {
                    e[u].selected = !0, l && (e[u].defaultSelected = !0);
                    return;
                }
                a !== null || e[u].disabled || (a = e[u]);
            }
            a !== null && (a.selected = !0);
        } }
        function Qc(e, a, t) { if (a != null && (a = "" + ua(a), a !== e.value && (e.value = a), t == null)) {
            e.defaultValue !== a && (e.defaultValue = a);
            return;
        } e.defaultValue = t != null ? "" + ua(t) : ""; }
        function Zc(e, a, t, l) { if (a == null) {
            if (l != null) {
                if (t != null)
                    throw Error(A(92));
                if (zu(l)) {
                    if (1 < l.length)
                        throw Error(A(93));
                    l = l[0];
                }
                t = l;
            }
            t == null && (t = ""), a = t;
        } t = ua(a), e.defaultValue = t, l = e.textContent, l === t && l !== "" && l !== null && (e.value = l), yn(e); }
        function Ql(e, a) { if (a) {
            var t = e.firstChild;
            if (t && t === e.lastChild && t.nodeType === 3) {
                t.nodeValue = a;
                return;
            }
        } e.textContent = a; }
        var VL = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
        function ir(e, a, t) { var l = a.indexOf("--") === 0; t == null || typeof t == "boolean" || t === "" ? l ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "" : l ? e.setProperty(a, t) : typeof t != "number" || t === 0 || VL.has(a) ? a === "float" ? e.cssFloat = t : e[a] = ("" + t).trim() : e[a] = t + "px"; }
        function jc(e, a, t) { if (a != null && typeof a != "object")
            throw Error(A(62)); if (e = e.style, t != null) {
            for (var l in t)
                !t.hasOwnProperty(l) || a != null && a.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
            for (var u in a)
                l = a[u], a.hasOwnProperty(u) && t[u] !== l && ir(e, u, l);
        }
        else
            for (var o in a)
                a.hasOwnProperty(o) && ir(e, o, a[o]); }
        function ms(e) { if (e.indexOf("-") === -1)
            return !1; switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph": return !1;
            default: return !0;
        } }
        var PL = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), XL = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
        function lf(e) { return XL.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e; }
        function Pa() { }
        var bn = null;
        function ps(e) { return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e; }
        var wl = null, _l = null;
        function rr(e) { var a = lu(e); if (a && (e = a.stateNode)) {
            var t = e[Fe] || null;
            e: switch (e = a.stateNode, a.type) {
                case "input":
                    if (vn(e, t.value, t.defaultValue, t.defaultValue, t.checked, t.defaultChecked, t.type, t.name), a = t.name, t.type === "radio" && a != null) {
                        for (t = e; t.parentNode;)
                            t = t.parentNode;
                        for (t = t.querySelectorAll('input[name="' + da("" + a) + '"][type="radio"]'), a = 0; a < t.length; a++) {
                            var l = t[a];
                            if (l !== e && l.form === e.form) {
                                var u = l[Fe] || null;
                                if (!u)
                                    throw Error(A(90));
                                vn(l, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name);
                            }
                        }
                        for (a = 0; a < t.length; a++)
                            l = t[a], l.form === e.form && Xc(l);
                    }
                    break e;
                case "textarea":
                    Qc(e, t.value, t.defaultValue);
                    break e;
                case "select": a = t.value, a != null && Hl(e, !!t.multiple, a, !1);
            }
        } }
        var zd = !1;
        function Kc(e, a, t) { if (zd)
            return e(a, t); zd = !0; try {
            var l = e(a);
            return l;
        }
        finally {
            if (zd = !1, (wl !== null || _l !== null) && (od(), wl && (a = wl, e = _l, _l = wl = null, rr(a), e)))
                for (a = 0; a < e.length; a++)
                    rr(e[a]);
        } }
        function ao(e, a) { var t = e.stateNode; if (t === null)
            return null; var l = t[Fe] || null; if (l === null)
            return null; t = l[a]; e: switch (a) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
                break e;
            default: e = !1;
        } if (e)
            return null; if (t && typeof t != "function")
            throw Error(A(231, a, typeof t)); return t; }
        var ja = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), An = !1;
        if (ja)
            try {
                yl = {}, Object.defineProperty(yl, "passive", { get: function () { An = !0; } }), window.addEventListener("test", yl, yl), window.removeEventListener("test", yl, yl);
            }
            catch {
                An = !1;
            }
        var yl, ht = null, hs = null, uf = null;
        function Jc() { if (uf)
            return uf; var e, a = hs, t = a.length, l, u = "value" in ht ? ht.value : ht.textContent, o = u.length; for (e = 0; e < t && a[e] === u[e]; e++)
            ; var f = t - e; for (l = 1; l <= f && a[t - l] === u[o - l]; l++)
            ; return uf = u.slice(e, 1 < l ? 1 - l : void 0); }
        function of(e) { var a = e.keyCode; return "charCode" in e ? (e = e.charCode, e === 0 && a === 13 && (e = 13)) : e = a, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0; }
        function Vo() { return !0; }
        function cr() { return !1; }
        function Ge(e) { function a(t, l, u, o, f) { this._reactName = t, this._targetInst = u, this.type = l, this.nativeEvent = o, this.target = f, this.currentTarget = null; for (var n in e)
            e.hasOwnProperty(n) && (t = e[n], this[n] = t ? t(o) : o[n]); return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Vo : cr, this.isPropagationStopped = cr, this; } return de(a.prototype, { preventDefault: function () { this.defaultPrevented = !0; var t = this.nativeEvent; t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = Vo); }, stopPropagation: function () { var t = this.nativeEvent; t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = Vo); }, persist: function () { }, isPersistent: Vo }), a; }
        var al = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) { return e.timeStamp || Date.now(); }, defaultPrevented: 0, isTrusted: 0 }, Zf = Ge(al), Co = de({}, al, { view: 0, detail: 0 }), YL = Ge(Co), Nd, Hd, Bu, jf = de({}, Co, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ls, button: 0, buttons: 0, relatedTarget: function (e) { return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget; }, movementX: function (e) { return "movementX" in e ? e.movementX : (e !== Bu && (Bu && e.type === "mousemove" ? (Nd = e.screenX - Bu.screenX, Hd = e.screenY - Bu.screenY) : Hd = Nd = 0, Bu = e), Nd); }, movementY: function (e) { return "movementY" in e ? e.movementY : Hd; } }), mr = Ge(jf), QL = de({}, jf, { dataTransfer: 0 }), ZL = Ge(QL), jL = de({}, Co, { relatedTarget: 0 }), _d = Ge(jL), KL = de({}, al, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), JL = Ge(KL), WL = de({}, al, { clipboardData: function (e) { return "clipboardData" in e ? e.clipboardData : window.clipboardData; } }), $L = Ge(WL), eg = de({}, al, { data: 0 }), pr = Ge(eg), ag = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, tg = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, lg = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
        function ug(e) { var a = this.nativeEvent; return a.getModifierState ? a.getModifierState(e) : (e = lg[e]) ? !!a[e] : !1; }
        function Ls() { return ug; }
        var og = de({}, Co, { key: function (e) { if (e.key) {
                var a = ag[e.key] || e.key;
                if (a !== "Unidentified")
                    return a;
            } return e.type === "keypress" ? (e = of(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? tg[e.keyCode] || "Unidentified" : ""; }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ls, charCode: function (e) { return e.type === "keypress" ? of(e) : 0; }, keyCode: function (e) { return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0; }, which: function (e) { return e.type === "keypress" ? of(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0; } }), fg = Ge(og), dg = de({}, jf, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), hr = Ge(dg), ng = de({}, Co, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ls }), sg = Ge(ng), ig = de({}, al, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), rg = Ge(ig), cg = de({}, jf, { deltaX: function (e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0; }, deltaY: function (e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0; }, deltaZ: 0, deltaMode: 0 }), mg = Ge(cg), pg = de({}, al, { newState: 0, oldState: 0 }), hg = Ge(pg), Lg = [9, 13, 27, 32], gs = ja && "CompositionEvent" in window, Fu = null;
        ja && "documentMode" in document && (Fu = document.documentMode);
        var gg = ja && "TextEvent" in window && !Fu, Wc = ja && (!gs || Fu && 8 < Fu && 11 >= Fu), Lr = " ", gr = !1;
        function $c(e, a) { switch (e) {
            case "keyup": return Lg.indexOf(a.keyCode) !== -1;
            case "keydown": return a.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout": return !0;
            default: return !1;
        } }
        function em(e) { return e = e.detail, typeof e == "object" && "data" in e ? e.data : null; }
        var Bl = !1;
        function xg(e, a) { switch (e) {
            case "compositionend": return em(a);
            case "keypress": return a.which !== 32 ? null : (gr = !0, Lr);
            case "textInput": return e = a.data, e === Lr && gr ? null : e;
            default: return null;
        } }
        function Sg(e, a) { if (Bl)
            return e === "compositionend" || !gs && $c(e, a) ? (e = Jc(), uf = hs = ht = null, Bl = !1, e) : null; switch (e) {
            case "paste": return null;
            case "keypress":
                if (!(a.ctrlKey || a.altKey || a.metaKey) || a.ctrlKey && a.altKey) {
                    if (a.char && 1 < a.char.length)
                        return a.char;
                    if (a.which)
                        return String.fromCharCode(a.which);
                }
                return null;
            case "compositionend": return Wc && a.locale !== "ko" ? null : a.data;
            default: return null;
        } }
        var Cg = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
        function xr(e) { var a = e && e.nodeName && e.nodeName.toLowerCase(); return a === "input" ? !!Cg[e.type] : a === "textarea"; }
        function am(e, a, t, l) { wl ? _l ? _l.push(l) : _l = [l] : wl = l, a = _f(a, "onChange"), 0 < a.length && (t = new Zf("onChange", "change", null, t, l), e.push({ event: t, listeners: a })); }
        var Gu = null, to = null;
        function yg(e) { Kp(e, 0); }
        function Kf(e) { var a = Nu(e); if (Xc(a))
            return e; }
        function Sr(e, a) { if (e === "change")
            return a; }
        var tm = !1;
        ja && (ja ? (Xo = "oninput" in document, Xo || (Fd = document.createElement("div"), Fd.setAttribute("oninput", "return;"), Xo = typeof Fd.oninput == "function"), Po = Xo) : Po = !1, tm = Po && (!document.documentMode || 9 < document.documentMode));
        var Po, Xo, Fd;
        function Cr() { Gu && (Gu.detachEvent("onpropertychange", lm), to = Gu = null); }
        function lm(e) { if (e.propertyName === "value" && Kf(to)) {
            var a = [];
            am(a, to, e, ps(e)), Kc(yg, a);
        } }
        function vg(e, a, t) { e === "focusin" ? (Cr(), Gu = a, to = t, Gu.attachEvent("onpropertychange", lm)) : e === "focusout" && Cr(); }
        function Ig(e) { if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return Kf(to); }
        function bg(e, a) { if (e === "click")
            return Kf(a); }
        function Ag(e, a) { if (e === "input" || e === "change")
            return Kf(a); }
        function Mg(e, a) { return e === a && (e !== 0 || 1 / e === 1 / a) || e !== e && a !== a; }
        var We = typeof Object.is == "function" ? Object.is : Mg;
        function lo(e, a) { if (We(e, a))
            return !0; if (typeof e != "object" || e === null || typeof a != "object" || a === null)
            return !1; var t = Object.keys(e), l = Object.keys(a); if (t.length !== l.length)
            return !1; for (l = 0; l < t.length; l++) {
            var u = t[l];
            if (!Sn.call(a, u) || !We(e[u], a[u]))
                return !1;
        } return !0; }
        function yr(e) { for (; e && e.firstChild;)
            e = e.firstChild; return e; }
        function vr(e, a) { var t = yr(e); e = 0; for (var l; t;) {
            if (t.nodeType === 3) {
                if (l = e + t.textContent.length, e <= a && l >= a)
                    return { node: t, offset: a - e };
                e = l;
            }
            e: {
                for (; t;) {
                    if (t.nextSibling) {
                        t = t.nextSibling;
                        break e;
                    }
                    t = t.parentNode;
                }
                t = void 0;
            }
            t = yr(t);
        } }
        function um(e, a) { return e && a ? e === a ? !0 : e && e.nodeType === 3 ? !1 : a && a.nodeType === 3 ? um(e, a.parentNode) : "contains" in e ? e.contains(a) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(a) & 16) : !1 : !1; }
        function om(e) { e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window; for (var a = vf(e.document); a instanceof e.HTMLIFrameElement;) {
            try {
                var t = typeof a.contentWindow.location.href == "string";
            }
            catch {
                t = !1;
            }
            if (t)
                e = a.contentWindow;
            else
                break;
            a = vf(e.document);
        } return a; }
        function xs(e) { var a = e && e.nodeName && e.nodeName.toLowerCase(); return a && (a === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || a === "textarea" || e.contentEditable === "true"); }
        var Tg = ja && "documentMode" in document && 11 >= document.documentMode, Rl = null, Mn = null, Vu = null, Tn = !1;
        function Ir(e, a, t) { var l = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument; Tn || Rl == null || Rl !== vf(l) || (l = Rl, "selectionStart" in l && xs(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = { anchorNode: l.anchorNode, anchorOffset: l.anchorOffset, focusNode: l.focusNode, focusOffset: l.focusOffset }), Vu && lo(Vu, l) || (Vu = l, l = _f(Mn, "onSelect"), 0 < l.length && (a = new Zf("onSelect", "select", null, a, t), e.push({ event: a, listeners: l }), a.target = Rl))); }
        function Ht(e, a) { var t = {}; return t[e.toLowerCase()] = a.toLowerCase(), t["Webkit" + e] = "webkit" + a, t["Moz" + e] = "moz" + a, t; }
        var kl = { animationend: Ht("Animation", "AnimationEnd"), animationiteration: Ht("Animation", "AnimationIteration"), animationstart: Ht("Animation", "AnimationStart"), transitionrun: Ht("Transition", "TransitionRun"), transitionstart: Ht("Transition", "TransitionStart"), transitioncancel: Ht("Transition", "TransitionCancel"), transitionend: Ht("Transition", "TransitionEnd") }, Gd = {}, fm = {};
        ja && (fm = document.createElement("div").style, "AnimationEvent" in window || (delete kl.animationend.animation, delete kl.animationiteration.animation, delete kl.animationstart.animation), "TransitionEvent" in window || delete kl.transitionend.transition);
        function tl(e) { if (Gd[e])
            return Gd[e]; if (!kl[e])
            return e; var a = kl[e], t; for (t in a)
            if (a.hasOwnProperty(t) && t in fm)
                return Gd[e] = a[t]; return e; }
        var dm = tl("animationend"), nm = tl("animationiteration"), sm = tl("animationstart"), Dg = tl("transitionrun"), wg = tl("transitionstart"), Bg = tl("transitioncancel"), im = tl("transitionend"), rm = new Map, Dn = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
        Dn.push("scrollEnd");
        function ga(e, a) { rm.set(e, a), el(a, [e]); }
        var If = typeof reportError == "function" ? reportError : function (e) { if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var a = new window.ErrorEvent("error", { bubbles: !0, cancelable: !0, message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e), error: e });
            if (!window.dispatchEvent(a))
                return;
        }
        else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", e);
            return;
        } console.error(e); }, la = [], Ol = 0, Ss = 0;
        function Jf() { for (var e = Ol, a = Ss = Ol = 0; a < e;) {
            var t = la[a];
            la[a++] = null;
            var l = la[a];
            la[a++] = null;
            var u = la[a];
            la[a++] = null;
            var o = la[a];
            if (la[a++] = null, l !== null && u !== null) {
                var f = l.pending;
                f === null ? u.next = u : (u.next = f.next, f.next = u), l.pending = u;
            }
            o !== 0 && cm(t, u, o);
        } }
        function Wf(e, a, t, l) { la[Ol++] = e, la[Ol++] = a, la[Ol++] = t, la[Ol++] = l, Ss |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l); }
        function Cs(e, a, t, l) { return Wf(e, a, t, l), bf(e); }
        function ll(e, a) { return Wf(e, null, null, a), bf(e); }
        function cm(e, a, t) { e.lanes |= t; var l = e.alternate; l !== null && (l.lanes |= t); for (var u = !1, o = e.return; o !== null;)
            o.childLanes |= t, l = o.alternate, l !== null && (l.childLanes |= t), o.tag === 22 && (e = o.stateNode, e === null || e._visibility & 1 || (u = !0)), e = o, o = o.return; return e.tag === 3 ? (o = e.stateNode, u && a !== null && (u = 31 - Ke(t), e = o.hiddenUpdates, l = e[u], l === null ? e[u] = [a] : l.push(a), a.lane = t | 536870912), o) : null; }
        function bf(e) { if (50 < Wu)
            throw Wu = 0, jn = null, Error(A(185)); for (var a = e.return; a !== null;)
            e = a, a = e.return; return e.tag === 3 ? e.stateNode : null; }
        var Ul = {};
        function Rg(e, a, t, l) { this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = a, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null; }
        function Ye(e, a, t, l) { return new Rg(e, a, t, l); }
        function ys(e) { return e = e.prototype, !(!e || !e.isReactComponent); }
        function Ya(e, a) { var t = e.alternate; return t === null ? (t = Ye(e.tag, a, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = a, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 65011712, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, a = e.dependencies, t.dependencies = a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t.refCleanup = e.refCleanup, t; }
        function mm(e, a) { e.flags &= 65011714; var t = e.alternate; return t === null ? (e.childLanes = 0, e.lanes = a, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = t.childLanes, e.lanes = t.lanes, e.child = t.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = t.memoizedProps, e.memoizedState = t.memoizedState, e.updateQueue = t.updateQueue, e.type = t.type, a = t.dependencies, e.dependencies = a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }), e; }
        function ff(e, a, t, l, u, o) { var f = 0; if (l = e, typeof e == "function")
            ys(e) && (f = 1);
        else if (typeof e == "string")
            f = U1(e, t, Da.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
        else
            e: switch (e) {
                case hn: return e = Ye(31, t, a, u), e.elementType = hn, e.lanes = o, e;
                case Ml: return Xt(t.children, u, o, a);
                case kc:
                    f = 8, u |= 24;
                    break;
                case cn: return e = Ye(12, t, a, u | 2), e.elementType = cn, e.lanes = o, e;
                case mn: return e = Ye(13, t, a, u), e.elementType = mn, e.lanes = o, e;
                case pn: return e = Ye(19, t, a, u), e.elementType = pn, e.lanes = o, e;
                default:
                    if (typeof e == "object" && e !== null)
                        switch (e.$$typeof) {
                            case Va:
                                f = 10;
                                break e;
                            case Oc:
                                f = 9;
                                break e;
                            case ds:
                                f = 11;
                                break e;
                            case ns:
                                f = 14;
                                break e;
                            case nt:
                                f = 16, l = null;
                                break e;
                        }
                    f = 29, t = Error(A(130, e === null ? "null" : typeof e, "")), l = null;
            } return a = Ye(f, t, a, u), a.elementType = e, a.type = l, a.lanes = o, a; }
        function Xt(e, a, t, l) { return e = Ye(7, e, l, a), e.lanes = t, e; }
        function Vd(e, a, t) { return e = Ye(6, e, null, a), e.lanes = t, e; }
        function pm(e) { var a = Ye(18, null, null, 0); return a.stateNode = e, a; }
        function Pd(e, a, t) { return a = Ye(4, e.children !== null ? e.children : [], e.key, a), a.lanes = t, a.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, a; }
        var br = new WeakMap;
        function na(e, a) { if (typeof e == "object" && e !== null) {
            var t = br.get(e);
            return t !== void 0 ? t : (a = { value: e, source: a, stack: or(a) }, br.set(e, a), a);
        } return { value: e, source: a, stack: or(a) }; }
        var El = [], ql = 0, Af = null, uo = 0, oa = [], fa = 0, Dt = null, Aa = 1, Ma = "";
        function Fa(e, a) { El[ql++] = uo, El[ql++] = Af, Af = e, uo = a; }
        function hm(e, a, t) { oa[fa++] = Aa, oa[fa++] = Ma, oa[fa++] = Dt, Dt = e; var l = Aa; e = Ma; var u = 32 - Ke(l) - 1; l &= ~(1 << u), t += 1; var o = 32 - Ke(a) + u; if (30 < o) {
            var f = u - u % 5;
            o = (l & (1 << f) - 1).toString(32), l >>= f, u -= f, Aa = 1 << 32 - Ke(a) + u | t << u | l, Ma = o + e;
        }
        else
            Aa = 1 << o | t << u | l, Ma = e; }
        function vs(e) { e.return !== null && (Fa(e, 1), hm(e, 1, 0)); }
        function Is(e) { for (; e === Af;)
            Af = El[--ql], El[ql] = null, uo = El[--ql], El[ql] = null; for (; e === Dt;)
            Dt = oa[--fa], oa[fa] = null, Ma = oa[--fa], oa[fa] = null, Aa = oa[--fa], oa[fa] = null; }
        function Lm(e, a) { oa[fa++] = Aa, oa[fa++] = Ma, oa[fa++] = Dt, Aa = a.id, Ma = a.overflow, Dt = e; }
        var Te = null, fe = null, X = !1, Ct = null, sa = !1, wn = Error(A(519));
        function wt(e) { var a = Error(A(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")); throw oo(na(a, e)), wn; }
        function Ar(e) { var a = e.stateNode, t = e.type, l = e.memoizedProps; switch (a[Me] = e, a[Fe] = l, t) {
            case "dialog":
                F("cancel", a), F("close", a);
                break;
            case "iframe":
            case "object":
            case "embed":
                F("load", a);
                break;
            case "video":
            case "audio":
                for (t = 0; t < io.length; t++)
                    F(io[t], a);
                break;
            case "source":
                F("error", a);
                break;
            case "img":
            case "image":
            case "link":
                F("error", a), F("load", a);
                break;
            case "details":
                F("toggle", a);
                break;
            case "input":
                F("invalid", a), Yc(a, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0);
                break;
            case "select":
                F("invalid", a);
                break;
            case "textarea": F("invalid", a), Zc(a, l.value, l.defaultValue, l.children);
        } t = l.children, typeof t != "string" && typeof t != "number" && typeof t != "bigint" || a.textContent === "" + t || l.suppressHydrationWarning === !0 || Wp(a.textContent, t) ? (l.popover != null && (F("beforetoggle", a), F("toggle", a)), l.onScroll != null && F("scroll", a), l.onScrollEnd != null && F("scrollend", a), l.onClick != null && (a.onclick = Pa), a = !0) : a = !1, a || wt(e, !0); }
        function Mr(e) { for (Te = e.return; Te;)
            switch (Te.tag) {
                case 5:
                case 31:
                case 13:
                    sa = !1;
                    return;
                case 27:
                case 3:
                    sa = !0;
                    return;
                default: Te = Te.return;
            } }
        function vl(e) { if (e !== Te)
            return !1; if (!X)
            return Mr(e), X = !0, !1; var a = e.tag, t; if ((t = a !== 3 && a !== 27) && ((t = a === 5) && (t = e.type, t = !(t !== "form" && t !== "button") || es(e.type, e.memoizedProps)), t = !t), t && fe && wt(e), Mr(e), a === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
                throw Error(A(317));
            fe = pc(e);
        }
        else if (a === 31) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
                throw Error(A(317));
            fe = pc(e);
        }
        else
            a === 27 ? (a = fe, Ot(e.type) ? (e = us, us = null, fe = e) : fe = a) : fe = Te ? ra(e.stateNode.nextSibling) : null; return !0; }
        function jt() { fe = Te = null, X = !1; }
        function Xd() { var e = Ct; return e !== null && (He === null ? He = e : He.push.apply(He, e), Ct = null), e; }
        function oo(e) { Ct === null ? Ct = [e] : Ct.push(e); }
        var Bn = wa(null), ul = null, Xa = null;
        function it(e, a, t) { le(Bn, a._currentValue), a._currentValue = t; }
        function Qa(e) { e._currentValue = Bn.current, be(Bn); }
        function Rn(e, a, t) { for (; e !== null;) {
            var l = e.alternate;
            if ((e.childLanes & a) !== a ? (e.childLanes |= a, l !== null && (l.childLanes |= a)) : l !== null && (l.childLanes & a) !== a && (l.childLanes |= a), e === t)
                break;
            e = e.return;
        } }
        function kn(e, a, t, l) { var u = e.child; for (u !== null && (u.return = e); u !== null;) {
            var o = u.dependencies;
            if (o !== null) {
                var f = u.child;
                o = o.firstContext;
                e: for (; o !== null;) {
                    var n = o;
                    o = u;
                    for (var s = 0; s < a.length; s++)
                        if (n.context === a[s]) {
                            o.lanes |= t, n = o.alternate, n !== null && (n.lanes |= t), Rn(o.return, t, e), l || (f = null);
                            break e;
                        }
                    o = n.next;
                }
            }
            else if (u.tag === 18) {
                if (f = u.return, f === null)
                    throw Error(A(341));
                f.lanes |= t, o = f.alternate, o !== null && (o.lanes |= t), Rn(f, t, e), f = null;
            }
            else
                f = u.child;
            if (f !== null)
                f.return = u;
            else
                for (f = u; f !== null;) {
                    if (f === e) {
                        f = null;
                        break;
                    }
                    if (u = f.sibling, u !== null) {
                        u.return = f.return, f = u;
                        break;
                    }
                    f = f.return;
                }
            u = f;
        } }
        function uu(e, a, t, l) { e = null; for (var u = a, o = !1; u !== null;) {
            if (!o) {
                if ((u.flags & 524288) !== 0)
                    o = !0;
                else if ((u.flags & 262144) !== 0)
                    break;
            }
            if (u.tag === 10) {
                var f = u.alternate;
                if (f === null)
                    throw Error(A(387));
                if (f = f.memoizedProps, f !== null) {
                    var n = u.type;
                    We(u.pendingProps.value, f.value) || (e !== null ? e.push(n) : e = [n]);
                }
            }
            else if (u === xf.current) {
                if (f = u.alternate, f === null)
                    throw Error(A(387));
                f.memoizedState.memoizedState !== u.memoizedState.memoizedState && (e !== null ? e.push(co) : e = [co]);
            }
            u = u.return;
        } e !== null && kn(a, e, t, l), a.flags |= 262144; }
        function Mf(e) { for (e = e.firstContext; e !== null;) {
            if (!We(e.context._currentValue, e.memoizedValue))
                return !0;
            e = e.next;
        } return !1; }
        function Kt(e) { ul = e, Xa = null, e = e.dependencies, e !== null && (e.firstContext = null); }
        function De(e) { return gm(ul, e); }
        function Yo(e, a) { return ul === null && Kt(e), gm(e, a); }
        function gm(e, a) { var t = a._currentValue; if (a = { context: a, memoizedValue: t, next: null }, Xa === null) {
            if (e === null)
                throw Error(A(308));
            Xa = a, e.dependencies = { lanes: 0, firstContext: a }, e.flags |= 524288;
        }
        else
            Xa = Xa.next = a; return t; }
        var kg = typeof AbortController < "u" ? AbortController : function () { var e = [], a = this.signal = { aborted: !1, addEventListener: function (t, l) { e.push(l); } }; this.abort = function () { a.aborted = !0, e.forEach(function (t) { return t(); }); }; }, Og = ye.unstable_scheduleCallback, Ug = ye.unstable_NormalPriority, xe = { $$typeof: Va, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
        function bs() { return { controller: new kg, data: new Map, refCount: 0 }; }
        function yo(e) { e.refCount--, e.refCount === 0 && Og(Ug, function () { e.controller.abort(); }); }
        var Pu = null, On = 0, Zl = 0, Fl = null;
        function Eg(e, a) { if (Pu === null) {
            var t = Pu = [];
            On = 0, Zl = js(), Fl = { status: "pending", value: void 0, then: function (l) { t.push(l); } };
        } return On++, a.then(Tr, Tr), a; }
        function Tr() { if (--On === 0 && Pu !== null) {
            Fl !== null && (Fl.status = "fulfilled");
            var e = Pu;
            Pu = null, Zl = 0, Fl = null;
            for (var a = 0; a < e.length; a++)
                (0, e[a])();
        } }
        function qg(e, a) { var t = [], l = { status: "pending", value: null, reason: null, then: function (u) { t.push(u); } }; return e.then(function () { l.status = "fulfilled", l.value = a; for (var u = 0; u < t.length; u++)
            (0, t[u])(a); }, function (u) { for (l.status = "rejected", l.reason = u, u = 0; u < t.length; u++)
            (0, t[u])(void 0); }), l; }
        var Dr = E.S;
        E.S = function (e, a) { Rp = Ze(), typeof a == "object" && a !== null && typeof a.then == "function" && Eg(e, a), Dr !== null && Dr(e, a); };
        var Yt = wa(null);
        function As() { var e = Yt.current; return e !== null ? e : te.pooledCache; }
        function df(e, a) { a === null ? le(Yt, Yt.current) : le(Yt, a.pool); }
        function xm() { var e = As(); return e === null ? null : { parent: xe._currentValue, pool: e }; }
        var ou = Error(A(460)), Ms = Error(A(474)), $f = Error(A(542)), Tf = { then: function () { } };
        function wr(e) { return e = e.status, e === "fulfilled" || e === "rejected"; }
        function Sm(e, a, t) { switch (t = e[t], t === void 0 ? e.push(a) : t !== a && (a.then(Pa, Pa), a = t), a.status) {
            case "fulfilled": return a.value;
            case "rejected": throw e = a.reason, Rr(e), e;
            default:
                if (typeof a.status == "string")
                    a.then(Pa, Pa);
                else {
                    if (e = te, e !== null && 100 < e.shellSuspendCounter)
                        throw Error(A(482));
                    e = a, e.status = "pending", e.then(function (l) { if (a.status === "pending") {
                        var u = a;
                        u.status = "fulfilled", u.value = l;
                    } }, function (l) { if (a.status === "pending") {
                        var u = a;
                        u.status = "rejected", u.reason = l;
                    } });
                }
                switch (a.status) {
                    case "fulfilled": return a.value;
                    case "rejected": throw e = a.reason, Rr(e), e;
                }
                throw Qt = a, ou;
        } }
        function Gt(e) { try {
            var a = e._init;
            return a(e._payload);
        }
        catch (t) {
            throw t !== null && typeof t == "object" && typeof t.then == "function" ? (Qt = t, ou) : t;
        } }
        var Qt = null;
        function Br() { if (Qt === null)
            throw Error(A(459)); var e = Qt; return Qt = null, e; }
        function Rr(e) { if (e === ou || e === $f)
            throw Error(A(483)); }
        var Gl = null, fo = 0;
        function Qo(e) { var a = fo; return fo += 1, Gl === null && (Gl = []), Sm(Gl, e, a); }
        function Ru(e, a) { a = a.props.ref, e.ref = a !== void 0 ? a : null; }
        function Zo(e, a) { throw a.$$typeof === vL ? Error(A(525)) : (e = Object.prototype.toString.call(a), Error(A(31, e === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : e))); }
        function Cm(e) { function a(h, m) { if (e) {
            var x = h.deletions;
            x === null ? (h.deletions = [m], h.flags |= 16) : x.push(m);
        } } function t(h, m) { if (!e)
            return null; for (; m !== null;)
            a(h, m), m = m.sibling; return null; } function l(h) { for (var m = new Map; h !== null;)
            h.key !== null ? m.set(h.key, h) : m.set(h.index, h), h = h.sibling; return m; } function u(h, m) { return h = Ya(h, m), h.index = 0, h.sibling = null, h; } function o(h, m, x) { return h.index = x, e ? (x = h.alternate, x !== null ? (x = x.index, x < m ? (h.flags |= 67108866, m) : x) : (h.flags |= 67108866, m)) : (h.flags |= 1048576, m); } function f(h) { return e && h.alternate === null && (h.flags |= 67108866), h; } function n(h, m, x, I) { return m === null || m.tag !== 6 ? (m = Vd(x, h.mode, I), m.return = h, m) : (m = u(m, x), m.return = h, m); } function s(h, m, x, I) { var R = x.type; return R === Ml ? g(h, m, x.props.children, I, x.key) : m !== null && (m.elementType === R || typeof R == "object" && R !== null && R.$$typeof === nt && Gt(R) === m.type) ? (m = u(m, x.props), Ru(m, x), m.return = h, m) : (m = ff(x.type, x.key, x.props, null, h.mode, I), Ru(m, x), m.return = h, m); } function r(h, m, x, I) { return m === null || m.tag !== 4 || m.stateNode.containerInfo !== x.containerInfo || m.stateNode.implementation !== x.implementation ? (m = Pd(x, h.mode, I), m.return = h, m) : (m = u(m, x.children || []), m.return = h, m); } function g(h, m, x, I, R) { return m === null || m.tag !== 7 ? (m = Xt(x, h.mode, I, R), m.return = h, m) : (m = u(m, x), m.return = h, m); } function p(h, m, x) { if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint")
            return m = Vd("" + m, h.mode, x), m.return = h, m; if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case No: return x = ff(m.type, m.key, m.props, null, h.mode, x), Ru(x, m), x.return = h, x;
                case qu: return m = Pd(m, h.mode, x), m.return = h, m;
                case nt: return m = Gt(m), p(h, m, x);
            }
            if (zu(m) || wu(m))
                return m = Xt(m, h.mode, x, null), m.return = h, m;
            if (typeof m.then == "function")
                return p(h, Qo(m), x);
            if (m.$$typeof === Va)
                return p(h, Yo(h, m), x);
            Zo(h, m);
        } return null; } function i(h, m, x, I) { var R = m !== null ? m.key : null; if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint")
            return R !== null ? null : n(h, m, "" + x, I); if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
                case No: return x.key === R ? s(h, m, x, I) : null;
                case qu: return x.key === R ? r(h, m, x, I) : null;
                case nt: return x = Gt(x), i(h, m, x, I);
            }
            if (zu(x) || wu(x))
                return R !== null ? null : g(h, m, x, I, null);
            if (typeof x.then == "function")
                return i(h, m, Qo(x), I);
            if (x.$$typeof === Va)
                return i(h, m, Yo(h, x), I);
            Zo(h, x);
        } return null; } function C(h, m, x, I, R) { if (typeof I == "string" && I !== "" || typeof I == "number" || typeof I == "bigint")
            return h = h.get(x) || null, n(m, h, "" + I, R); if (typeof I == "object" && I !== null) {
            switch (I.$$typeof) {
                case No: return h = h.get(I.key === null ? x : I.key) || null, s(m, h, I, R);
                case qu: return h = h.get(I.key === null ? x : I.key) || null, r(m, h, I, R);
                case nt: return I = Gt(I), C(h, m, x, I, R);
            }
            if (zu(I) || wu(I))
                return h = h.get(x) || null, g(m, h, I, R, null);
            if (typeof I.then == "function")
                return C(h, m, x, Qo(I), R);
            if (I.$$typeof === Va)
                return C(h, m, x, Yo(m, I), R);
            Zo(m, I);
        } return null; } function D(h, m, x, I) { for (var R = null, V = null, S = m, v = m = 0, L = null; S !== null && v < x.length; v++) {
            S.index > v ? (L = S, S = null) : L = S.sibling;
            var y = i(h, S, x[v], I);
            if (y === null) {
                S === null && (S = L);
                break;
            }
            e && S && y.alternate === null && a(h, S), m = o(y, m, v), V === null ? R = y : V.sibling = y, V = y, S = L;
        } if (v === x.length)
            return t(h, S), X && Fa(h, v), R; if (S === null) {
            for (; v < x.length; v++)
                S = p(h, x[v], I), S !== null && (m = o(S, m, v), V === null ? R = S : V.sibling = S, V = S);
            return X && Fa(h, v), R;
        } for (S = l(S); v < x.length; v++)
            L = C(S, h, v, x[v], I), L !== null && (e && L.alternate !== null && S.delete(L.key === null ? v : L.key), m = o(L, m, v), V === null ? R = L : V.sibling = L, V = L); return e && S.forEach(function (b) { return a(h, b); }), X && Fa(h, v), R; } function B(h, m, x, I) { if (x == null)
            throw Error(A(151)); for (var R = null, V = null, S = m, v = m = 0, L = null, y = x.next(); S !== null && !y.done; v++, y = x.next()) {
            S.index > v ? (L = S, S = null) : L = S.sibling;
            var b = i(h, S, y.value, I);
            if (b === null) {
                S === null && (S = L);
                break;
            }
            e && S && b.alternate === null && a(h, S), m = o(b, m, v), V === null ? R = b : V.sibling = b, V = b, S = L;
        } if (y.done)
            return t(h, S), X && Fa(h, v), R; if (S === null) {
            for (; !y.done; v++, y = x.next())
                y = p(h, y.value, I), y !== null && (m = o(y, m, v), V === null ? R = y : V.sibling = y, V = y);
            return X && Fa(h, v), R;
        } for (S = l(S); !y.done; v++, y = x.next())
            y = C(S, h, v, y.value, I), y !== null && (e && y.alternate !== null && S.delete(y.key === null ? v : y.key), m = o(y, m, v), V === null ? R = y : V.sibling = y, V = y); return e && S.forEach(function (T) { return a(h, T); }), X && Fa(h, v), R; } function q(h, m, x, I) { if (typeof x == "object" && x !== null && x.type === Ml && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
                case No:
                    e: {
                        for (var R = x.key; m !== null;) {
                            if (m.key === R) {
                                if (R = x.type, R === Ml) {
                                    if (m.tag === 7) {
                                        t(h, m.sibling), I = u(m, x.props.children), I.return = h, h = I;
                                        break e;
                                    }
                                }
                                else if (m.elementType === R || typeof R == "object" && R !== null && R.$$typeof === nt && Gt(R) === m.type) {
                                    t(h, m.sibling), I = u(m, x.props), Ru(I, x), I.return = h, h = I;
                                    break e;
                                }
                                t(h, m);
                                break;
                            }
                            else
                                a(h, m);
                            m = m.sibling;
                        }
                        x.type === Ml ? (I = Xt(x.props.children, h.mode, I, x.key), I.return = h, h = I) : (I = ff(x.type, x.key, x.props, null, h.mode, I), Ru(I, x), I.return = h, h = I);
                    }
                    return f(h);
                case qu:
                    e: {
                        for (R = x.key; m !== null;) {
                            if (m.key === R)
                                if (m.tag === 4 && m.stateNode.containerInfo === x.containerInfo && m.stateNode.implementation === x.implementation) {
                                    t(h, m.sibling), I = u(m, x.children || []), I.return = h, h = I;
                                    break e;
                                }
                                else {
                                    t(h, m);
                                    break;
                                }
                            else
                                a(h, m);
                            m = m.sibling;
                        }
                        I = Pd(x, h.mode, I), I.return = h, h = I;
                    }
                    return f(h);
                case nt: return x = Gt(x), q(h, m, x, I);
            }
            if (zu(x))
                return D(h, m, x, I);
            if (wu(x)) {
                if (R = wu(x), typeof R != "function")
                    throw Error(A(150));
                return x = R.call(x), B(h, m, x, I);
            }
            if (typeof x.then == "function")
                return q(h, m, Qo(x), I);
            if (x.$$typeof === Va)
                return q(h, m, Yo(h, x), I);
            Zo(h, x);
        } return typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint" ? (x = "" + x, m !== null && m.tag === 6 ? (t(h, m.sibling), I = u(m, x), I.return = h, h = I) : (t(h, m), I = Vd(x, h.mode, I), I.return = h, h = I), f(h)) : t(h, m); } return function (h, m, x, I) { try {
            fo = 0;
            var R = q(h, m, x, I);
            return Gl = null, R;
        }
        catch (S) {
            if (S === ou || S === $f)
                throw S;
            var V = Ye(29, S, null, h.mode);
            return V.lanes = I, V.return = h, V;
        } }; }
        var Jt = Cm(!0), ym = Cm(!1), st = !1;
        function Ts(e) { e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null }; }
        function Un(e, a) { e = e.updateQueue, a.updateQueue === e && (a.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, callbacks: null }); }
        function yt(e) { return { lane: e, tag: 0, payload: null, callback: null, next: null }; }
        function vt(e, a, t) { var l = e.updateQueue; if (l === null)
            return null; if (l = l.shared, (Y & 2) !== 0) {
            var u = l.pending;
            return u === null ? a.next = a : (a.next = u.next, u.next = a), l.pending = a, a = bf(e), cm(e, null, t), a;
        } return Wf(e, l, a, t), bf(e); }
        function Xu(e, a, t) { if (a = a.updateQueue, a !== null && (a = a.shared, (t & 4194048) !== 0)) {
            var l = a.lanes;
            l &= e.pendingLanes, t |= l, a.lanes = t, Hc(e, t);
        } }
        function Yd(e, a) { var t = e.updateQueue, l = e.alternate; if (l !== null && (l = l.updateQueue, t === l)) {
            var u = null, o = null;
            if (t = t.firstBaseUpdate, t !== null) {
                do {
                    var f = { lane: t.lane, tag: t.tag, payload: t.payload, callback: null, next: null };
                    o === null ? u = o = f : o = o.next = f, t = t.next;
                } while (t !== null);
                o === null ? u = o = a : o = o.next = a;
            }
            else
                u = o = a;
            t = { baseState: l.baseState, firstBaseUpdate: u, lastBaseUpdate: o, shared: l.shared, callbacks: l.callbacks }, e.updateQueue = t;
            return;
        } e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = a : e.next = a, t.lastBaseUpdate = a; }
        var En = !1;
        function Yu() { if (En) {
            var e = Fl;
            if (e !== null)
                throw e;
        } }
        function Qu(e, a, t, l) { En = !1; var u = e.updateQueue; st = !1; var o = u.firstBaseUpdate, f = u.lastBaseUpdate, n = u.shared.pending; if (n !== null) {
            u.shared.pending = null;
            var s = n, r = s.next;
            s.next = null, f === null ? o = r : f.next = r, f = s;
            var g = e.alternate;
            g !== null && (g = g.updateQueue, n = g.lastBaseUpdate, n !== f && (n === null ? g.firstBaseUpdate = r : n.next = r, g.lastBaseUpdate = s));
        } if (o !== null) {
            var p = u.baseState;
            f = 0, g = r = s = null, n = o;
            do {
                var i = n.lane & -536870913, C = i !== n.lane;
                if (C ? (P & i) === i : (l & i) === i) {
                    i !== 0 && i === Zl && (En = !0), g !== null && (g = g.next = { lane: 0, tag: n.tag, payload: n.payload, callback: null, next: null });
                    e: {
                        var D = e, B = n;
                        i = a;
                        var q = t;
                        switch (B.tag) {
                            case 1:
                                if (D = B.payload, typeof D == "function") {
                                    p = D.call(q, p, i);
                                    break e;
                                }
                                p = D;
                                break e;
                            case 3: D.flags = D.flags & -65537 | 128;
                            case 0:
                                if (D = B.payload, i = typeof D == "function" ? D.call(q, p, i) : D, i == null)
                                    break e;
                                p = de({}, p, i);
                                break e;
                            case 2: st = !0;
                        }
                    }
                    i = n.callback, i !== null && (e.flags |= 64, C && (e.flags |= 8192), C = u.callbacks, C === null ? u.callbacks = [i] : C.push(i));
                }
                else
                    C = { lane: i, tag: n.tag, payload: n.payload, callback: n.callback, next: null }, g === null ? (r = g = C, s = p) : g = g.next = C, f |= i;
                if (n = n.next, n === null) {
                    if (n = u.shared.pending, n === null)
                        break;
                    C = n, n = C.next, C.next = null, u.lastBaseUpdate = C, u.shared.pending = null;
                }
            } while (!0);
            g === null && (s = p), u.baseState = s, u.firstBaseUpdate = r, u.lastBaseUpdate = g, o === null && (u.shared.lanes = 0), Rt |= f, e.lanes = f, e.memoizedState = p;
        } }
        function vm(e, a) { if (typeof e != "function")
            throw Error(A(191, e)); e.call(a); }
        function Im(e, a) { var t = e.callbacks; if (t !== null)
            for (e.callbacks = null, e = 0; e < t.length; e++)
                vm(t[e], a); }
        var jl = wa(null), Df = wa(0);
        function kr(e, a) { e = $a, le(Df, e), le(jl, a), $a = e | a.baseLanes; }
        function qn() { le(Df, $a), le(jl, jl.current); }
        function Ds() { $a = Df.current, be(jl), be(Df); }
        var $e = wa(null), ia = null;
        function rt(e) { var a = e.alternate; le(pe, pe.current & 1), le($e, e), ia === null && (a === null || jl.current !== null || a.memoizedState !== null) && (ia = e); }
        function zn(e) { le(pe, pe.current), le($e, e), ia === null && (ia = e); }
        function bm(e) { e.tag === 22 ? (le(pe, pe.current), le($e, e), ia === null && (ia = e)) : ct(e); }
        function ct() { le(pe, pe.current), le($e, $e.current); }
        function Xe(e) { be($e), ia === e && (ia = null), be(pe); }
        var pe = wa(0);
        function wf(e) { for (var a = e; a !== null;) {
            if (a.tag === 13) {
                var t = a.memoizedState;
                if (t !== null && (t = t.dehydrated, t === null || ts(t) || ls(t)))
                    return a;
            }
            else if (a.tag === 19 && (a.memoizedProps.revealOrder === "forwards" || a.memoizedProps.revealOrder === "backwards" || a.memoizedProps.revealOrder === "unstable_legacy-backwards" || a.memoizedProps.revealOrder === "together")) {
                if ((a.flags & 128) !== 0)
                    return a;
            }
            else if (a.child !== null) {
                a.child.return = a, a = a.child;
                continue;
            }
            if (a === e)
                break;
            for (; a.sibling === null;) {
                if (a.return === null || a.return === e)
                    return null;
                a = a.return;
            }
            a.sibling.return = a.return, a = a.sibling;
        } return null; }
        var Ka = 0, N = null, ee = null, Le = null, Bf = !1, Vl = !1, Wt = !1, Rf = 0, no = 0, Pl = null, zg = 0;
        function ce() { throw Error(A(321)); }
        function ws(e, a) { if (a === null)
            return !1; for (var t = 0; t < a.length && t < e.length; t++)
            if (!We(e[t], a[t]))
                return !1; return !0; }
        function Bs(e, a, t, l, u, o) { return Ka = o, N = a, a.memoizedState = null, a.updateQueue = null, a.lanes = 0, E.H = e === null || e.memoizedState === null ? ap : Fs, Wt = !1, o = t(l, u), Wt = !1, Vl && (o = Mm(a, t, l, u)), Am(e), o; }
        function Am(e) { E.H = so; var a = ee !== null && ee.next !== null; if (Ka = 0, Le = ee = N = null, Bf = !1, no = 0, Pl = null, a)
            throw Error(A(300)); e === null || Se || (e = e.dependencies, e !== null && Mf(e) && (Se = !0)); }
        function Mm(e, a, t, l) { N = e; var u = 0; do {
            if (Vl && (Pl = null), no = 0, Vl = !1, 25 <= u)
                throw Error(A(301));
            if (u += 1, Le = ee = null, e.updateQueue != null) {
                var o = e.updateQueue;
                o.lastEffect = null, o.events = null, o.stores = null, o.memoCache != null && (o.memoCache.index = 0);
            }
            E.H = tp, o = a(t, l);
        } while (Vl); return o; }
        function Ng() { var e = E.H, a = e.useState()[0]; return a = typeof a.then == "function" ? vo(a) : a, e = e.useState()[0], (ee !== null ? ee.memoizedState : null) !== e && (N.flags |= 1024), a; }
        function Rs() { var e = Rf !== 0; return Rf = 0, e; }
        function ks(e, a, t) { a.updateQueue = e.updateQueue, a.flags &= -2053, e.lanes &= ~t; }
        function Os(e) { if (Bf) {
            for (e = e.memoizedState; e !== null;) {
                var a = e.queue;
                a !== null && (a.pending = null), e = e.next;
            }
            Bf = !1;
        } Ka = 0, Le = ee = N = null, Vl = !1, no = Rf = 0, Pl = null; }
        function Ee() { var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return Le === null ? N.memoizedState = Le = e : Le = Le.next = e, Le; }
        function he() { if (ee === null) {
            var e = N.alternate;
            e = e !== null ? e.memoizedState : null;
        }
        else
            e = ee.next; var a = Le === null ? N.memoizedState : Le.next; if (a !== null)
            Le = a, ee = e;
        else {
            if (e === null)
                throw N.alternate === null ? Error(A(467)) : Error(A(310));
            ee = e, e = { memoizedState: ee.memoizedState, baseState: ee.baseState, baseQueue: ee.baseQueue, queue: ee.queue, next: null }, Le === null ? N.memoizedState = Le = e : Le = Le.next = e;
        } return Le; }
        function ed() { return { lastEffect: null, events: null, stores: null, memoCache: null }; }
        function vo(e) { var a = no; return no += 1, Pl === null && (Pl = []), e = Sm(Pl, e, a), a = N, (Le === null ? a.memoizedState : Le.next) === null && (a = a.alternate, E.H = a === null || a.memoizedState === null ? ap : Fs), e; }
        function ad(e) { if (e !== null && typeof e == "object") {
            if (typeof e.then == "function")
                return vo(e);
            if (e.$$typeof === Va)
                return De(e);
        } throw Error(A(438, String(e))); }
        function Us(e) { var a = null, t = N.updateQueue; if (t !== null && (a = t.memoCache), a == null) {
            var l = N.alternate;
            l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (a = { data: l.data.map(function (u) { return u.slice(); }), index: 0 })));
        } if (a == null && (a = { data: [], index: 0 }), t === null && (t = ed(), N.updateQueue = t), t.memoCache = a, t = a.data[a.index], t === void 0)
            for (t = a.data[a.index] = Array(e), l = 0; l < e; l++)
                t[l] = IL; return a.index++, t; }
        function Ja(e, a) { return typeof a == "function" ? a(e) : a; }
        function nf(e) { var a = he(); return Es(a, ee, e); }
        function Es(e, a, t) { var l = e.queue; if (l === null)
            throw Error(A(311)); l.lastRenderedReducer = t; var u = e.baseQueue, o = l.pending; if (o !== null) {
            if (u !== null) {
                var f = u.next;
                u.next = o.next, o.next = f;
            }
            a.baseQueue = u = o, l.pending = null;
        } if (o = e.baseState, u === null)
            e.memoizedState = o;
        else {
            a = u.next;
            var n = f = null, s = null, r = a, g = !1;
            do {
                var p = r.lane & -536870913;
                if (p !== r.lane ? (P & p) === p : (Ka & p) === p) {
                    var i = r.revertLane;
                    if (i === 0)
                        s !== null && (s = s.next = { lane: 0, revertLane: 0, gesture: null, action: r.action, hasEagerState: r.hasEagerState, eagerState: r.eagerState, next: null }), p === Zl && (g = !0);
                    else if ((Ka & i) === i) {
                        r = r.next, i === Zl && (g = !0);
                        continue;
                    }
                    else
                        p = { lane: 0, revertLane: r.revertLane, gesture: null, action: r.action, hasEagerState: r.hasEagerState, eagerState: r.eagerState, next: null }, s === null ? (n = s = p, f = o) : s = s.next = p, N.lanes |= i, Rt |= i;
                    p = r.action, Wt && t(o, p), o = r.hasEagerState ? r.eagerState : t(o, p);
                }
                else
                    i = { lane: p, revertLane: r.revertLane, gesture: r.gesture, action: r.action, hasEagerState: r.hasEagerState, eagerState: r.eagerState, next: null }, s === null ? (n = s = i, f = o) : s = s.next = i, N.lanes |= p, Rt |= p;
                r = r.next;
            } while (r !== null && r !== a);
            if (s === null ? f = o : s.next = n, !We(o, e.memoizedState) && (Se = !0, g && (t = Fl, t !== null)))
                throw t;
            e.memoizedState = o, e.baseState = f, e.baseQueue = s, l.lastRenderedState = o;
        } return u === null && (l.lanes = 0), [e.memoizedState, l.dispatch]; }
        function Qd(e) { var a = he(), t = a.queue; if (t === null)
            throw Error(A(311)); t.lastRenderedReducer = e; var l = t.dispatch, u = t.pending, o = a.memoizedState; if (u !== null) {
            t.pending = null;
            var f = u = u.next;
            do
                o = e(o, f.action), f = f.next;
            while (f !== u);
            We(o, a.memoizedState) || (Se = !0), a.memoizedState = o, a.baseQueue === null && (a.baseState = o), t.lastRenderedState = o;
        } return [o, l]; }
        function Tm(e, a, t) { var l = N, u = he(), o = X; if (o) {
            if (t === void 0)
                throw Error(A(407));
            t = t();
        }
        else
            t = a(); var f = !We((ee || u).memoizedState, t); if (f && (u.memoizedState = t, Se = !0), u = u.queue, qs(Bm.bind(null, l, u, e), [e]), u.getSnapshot !== a || f || Le !== null && Le.memoizedState.tag & 1) {
            if (l.flags |= 2048, Kl(9, { destroy: void 0 }, wm.bind(null, l, u, t, a), null), te === null)
                throw Error(A(349));
            o || (Ka & 127) !== 0 || Dm(l, a, t);
        } return t; }
        function Dm(e, a, t) { e.flags |= 16384, e = { getSnapshot: a, value: t }, a = N.updateQueue, a === null ? (a = ed(), N.updateQueue = a, a.stores = [e]) : (t = a.stores, t === null ? a.stores = [e] : t.push(e)); }
        function wm(e, a, t, l) { a.value = t, a.getSnapshot = l, Rm(a) && km(e); }
        function Bm(e, a, t) { return t(function () { Rm(a) && km(e); }); }
        function Rm(e) { var a = e.getSnapshot; e = e.value; try {
            var t = a();
            return !We(e, t);
        }
        catch {
            return !0;
        } }
        function km(e) { var a = ll(e, 2); a !== null && _e(a, e, 2); }
        function Nn(e) { var a = Ee(); if (typeof e == "function") {
            var t = e;
            if (e = t(), Wt) {
                pt(!0);
                try {
                    t();
                }
                finally {
                    pt(!1);
                }
            }
        } return a.memoizedState = a.baseState = e, a.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Ja, lastRenderedState: e }, a; }
        function Om(e, a, t, l) { return e.baseState = t, Es(e, ee, typeof l == "function" ? l : Ja); }
        function Hg(e, a, t, l, u) { if (ld(e))
            throw Error(A(485)); if (e = a.action, e !== null) {
            var o = { payload: u, action: e, next: null, isTransition: !0, status: "pending", value: null, reason: null, listeners: [], then: function (f) { o.listeners.push(f); } };
            E.T !== null ? t(!0) : o.isTransition = !1, l(o), t = a.pending, t === null ? (o.next = a.pending = o, Um(a, o)) : (o.next = t.next, a.pending = t.next = o);
        } }
        function Um(e, a) { var t = a.action, l = a.payload, u = e.state; if (a.isTransition) {
            var o = E.T, f = {};
            E.T = f;
            try {
                var n = t(u, l), s = E.S;
                s !== null && s(f, n), Or(e, a, n);
            }
            catch (r) {
                Hn(e, a, r);
            }
            finally {
                o !== null && f.types !== null && (o.types = f.types), E.T = o;
            }
        }
        else
            try {
                o = t(u, l), Or(e, a, o);
            }
            catch (r) {
                Hn(e, a, r);
            } }
        function Or(e, a, t) { t !== null && typeof t == "object" && typeof t.then == "function" ? t.then(function (l) { Ur(e, a, l); }, function (l) { return Hn(e, a, l); }) : Ur(e, a, t); }
        function Ur(e, a, t) { a.status = "fulfilled", a.value = t, Em(a), e.state = t, a = e.pending, a !== null && (t = a.next, t === a ? e.pending = null : (t = t.next, a.next = t, Um(e, t))); }
        function Hn(e, a, t) { var l = e.pending; if (e.pending = null, l !== null) {
            l = l.next;
            do
                a.status = "rejected", a.reason = t, Em(a), a = a.next;
            while (a !== l);
        } e.action = null; }
        function Em(e) { e = e.listeners; for (var a = 0; a < e.length; a++)
            (0, e[a])(); }
        function qm(e, a) { return a; }
        function Er(e, a) { if (X) {
            var t = te.formState;
            if (t !== null) {
                e: {
                    var l = N;
                    if (X) {
                        if (fe) {
                            a: {
                                for (var u = fe, o = sa; u.nodeType !== 8;) {
                                    if (!o) {
                                        u = null;
                                        break a;
                                    }
                                    if (u = ra(u.nextSibling), u === null) {
                                        u = null;
                                        break a;
                                    }
                                }
                                o = u.data, u = o === "F!" || o === "F" ? u : null;
                            }
                            if (u) {
                                fe = ra(u.nextSibling), l = u.data === "F!";
                                break e;
                            }
                        }
                        wt(l);
                    }
                    l = !1;
                }
                l && (a = t[0]);
            }
        } return t = Ee(), t.memoizedState = t.baseState = a, l = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: qm, lastRenderedState: a }, t.queue = l, t = Wm.bind(null, N, l), l.dispatch = t, l = Nn(!1), o = _s.bind(null, N, !1, l.queue), l = Ee(), u = { state: a, dispatch: null, action: e, pending: null }, l.queue = u, t = Hg.bind(null, N, u, o, t), u.dispatch = t, l.memoizedState = e, [a, t, !1]; }
        function qr(e) { var a = he(); return zm(a, ee, e); }
        function zm(e, a, t) { if (a = Es(e, a, qm)[0], e = nf(Ja)[0], typeof a == "object" && a !== null && typeof a.then == "function")
            try {
                var l = vo(a);
            }
            catch (f) {
                throw f === ou ? $f : f;
            }
        else
            l = a; a = he(); var u = a.queue, o = u.dispatch; return t !== a.memoizedState && (N.flags |= 2048, Kl(9, { destroy: void 0 }, _g.bind(null, u, t), null)), [l, o, e]; }
        function _g(e, a) { e.action = a; }
        function zr(e) { var a = he(), t = ee; if (t !== null)
            return zm(a, t, e); he(), a = a.memoizedState, t = he(); var l = t.queue.dispatch; return t.memoizedState = e, [a, l, !1]; }
        function Kl(e, a, t, l) { return e = { tag: e, create: t, deps: l, inst: a, next: null }, a = N.updateQueue, a === null && (a = ed(), N.updateQueue = a), t = a.lastEffect, t === null ? a.lastEffect = e.next = e : (l = t.next, t.next = e, e.next = l, a.lastEffect = e), e; }
        function Nm() { return he().memoizedState; }
        function sf(e, a, t, l) { var u = Ee(); N.flags |= e, u.memoizedState = Kl(1 | a, { destroy: void 0 }, t, l === void 0 ? null : l); }
        function td(e, a, t, l) { var u = he(); l = l === void 0 ? null : l; var o = u.memoizedState.inst; ee !== null && l !== null && ws(l, ee.memoizedState.deps) ? u.memoizedState = Kl(a, o, t, l) : (N.flags |= e, u.memoizedState = Kl(1 | a, o, t, l)); }
        function Nr(e, a) { sf(8390656, 8, e, a); }
        function qs(e, a) { td(2048, 8, e, a); }
        function Fg(e) { N.flags |= 4; var a = N.updateQueue; if (a === null)
            a = ed(), N.updateQueue = a, a.events = [e];
        else {
            var t = a.events;
            t === null ? a.events = [e] : t.push(e);
        } }
        function Hm(e) { var a = he().memoizedState; return Fg({ ref: a, nextImpl: e }), function () { if ((Y & 2) !== 0)
            throw Error(A(440)); return a.impl.apply(void 0, arguments); }; }
        function _m(e, a) { return td(4, 2, e, a); }
        function Fm(e, a) { return td(4, 4, e, a); }
        function Gm(e, a) { if (typeof a == "function") {
            e = e();
            var t = a(e);
            return function () { typeof t == "function" ? t() : a(null); };
        } if (a != null)
            return e = e(), a.current = e, function () { a.current = null; }; }
        function Vm(e, a, t) { t = t != null ? t.concat([e]) : null, td(4, 4, Gm.bind(null, a, e), t); }
        function zs() { }
        function Pm(e, a) { var t = he(); a = a === void 0 ? null : a; var l = t.memoizedState; return a !== null && ws(a, l[1]) ? l[0] : (t.memoizedState = [e, a], e); }
        function Xm(e, a) { var t = he(); a = a === void 0 ? null : a; var l = t.memoizedState; if (a !== null && ws(a, l[1]))
            return l[0]; if (l = e(), Wt) {
            pt(!0);
            try {
                e();
            }
            finally {
                pt(!1);
            }
        } return t.memoizedState = [l, a], l; }
        function Ns(e, a, t) { return t === void 0 || (Ka & 1073741824) !== 0 && (P & 261930) === 0 ? e.memoizedState = a : (e.memoizedState = t, e = Op(), N.lanes |= e, Rt |= e, t); }
        function Ym(e, a, t, l) { return We(t, a) ? t : jl.current !== null ? (e = Ns(e, t, l), We(e, a) || (Se = !0), e) : (Ka & 42) === 0 || (Ka & 1073741824) !== 0 && (P & 261930) === 0 ? (Se = !0, e.memoizedState = t) : (e = Op(), N.lanes |= e, Rt |= e, a); }
        function Qm(e, a, t, l, u) { var o = Q.p; Q.p = o !== 0 && 8 > o ? o : 8; var f = E.T, n = {}; E.T = n, _s(e, !1, a, t); try {
            var s = u(), r = E.S;
            if (r !== null && r(n, s), s !== null && typeof s == "object" && typeof s.then == "function") {
                var g = qg(s, l);
                Zu(e, a, g, Je(e));
            }
            else
                Zu(e, a, l, Je(e));
        }
        catch (p) {
            Zu(e, a, { then: function () { }, status: "rejected", reason: p }, Je());
        }
        finally {
            Q.p = o, f !== null && n.types !== null && (f.types = n.types), E.T = f;
        } }
        function Gg() { }
        function _n(e, a, t, l) { if (e.tag !== 5)
            throw Error(A(476)); var u = Zm(e).queue; Qm(e, u, a, Pt, t === null ? Gg : function () { return jm(e), t(l); }); }
        function Zm(e) { var a = e.memoizedState; if (a !== null)
            return a; a = { memoizedState: Pt, baseState: Pt, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Ja, lastRenderedState: Pt }, next: null }; var t = {}; return a.next = { memoizedState: t, baseState: t, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Ja, lastRenderedState: t }, next: null }, e.memoizedState = a, e = e.alternate, e !== null && (e.memoizedState = a), a; }
        function jm(e) { var a = Zm(e); a.next === null && (a = e.alternate.memoizedState), Zu(e, a.next.queue, {}, Je()); }
        function Hs() { return De(co); }
        function Km() { return he().memoizedState; }
        function Jm() { return he().memoizedState; }
        function Vg(e) { for (var a = e.return; a !== null;) {
            switch (a.tag) {
                case 24:
                case 3:
                    var t = Je();
                    e = yt(t);
                    var l = vt(a, e, t);
                    l !== null && (_e(l, a, t), Xu(l, a, t)), a = { cache: bs() }, e.payload = a;
                    return;
            }
            a = a.return;
        } }
        function Pg(e, a, t) { var l = Je(); t = { lane: l, revertLane: 0, gesture: null, action: t, hasEagerState: !1, eagerState: null, next: null }, ld(e) ? $m(a, t) : (t = Cs(e, a, t, l), t !== null && (_e(t, e, l), ep(t, a, l))); }
        function Wm(e, a, t) { var l = Je(); Zu(e, a, t, l); }
        function Zu(e, a, t, l) { var u = { lane: l, revertLane: 0, gesture: null, action: t, hasEagerState: !1, eagerState: null, next: null }; if (ld(e))
            $m(a, u);
        else {
            var o = e.alternate;
            if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = a.lastRenderedReducer, o !== null))
                try {
                    var f = a.lastRenderedState, n = o(f, t);
                    if (u.hasEagerState = !0, u.eagerState = n, We(n, f))
                        return Wf(e, a, u, 0), te === null && Jf(), !1;
                }
                catch { }
            if (t = Cs(e, a, u, l), t !== null)
                return _e(t, e, l), ep(t, a, l), !0;
        } return !1; }
        function _s(e, a, t, l) { if (l = { lane: 2, revertLane: js(), gesture: null, action: l, hasEagerState: !1, eagerState: null, next: null }, ld(e)) {
            if (a)
                throw Error(A(479));
        }
        else
            a = Cs(e, t, l, 2), a !== null && _e(a, e, 2); }
        function ld(e) { var a = e.alternate; return e === N || a !== null && a === N; }
        function $m(e, a) { Vl = Bf = !0; var t = e.pending; t === null ? a.next = a : (a.next = t.next, t.next = a), e.pending = a; }
        function ep(e, a, t) { if ((t & 4194048) !== 0) {
            var l = a.lanes;
            l &= e.pendingLanes, t |= l, a.lanes = t, Hc(e, t);
        } }
        var so = { readContext: De, use: ad, useCallback: ce, useContext: ce, useEffect: ce, useImperativeHandle: ce, useLayoutEffect: ce, useInsertionEffect: ce, useMemo: ce, useReducer: ce, useRef: ce, useState: ce, useDebugValue: ce, useDeferredValue: ce, useTransition: ce, useSyncExternalStore: ce, useId: ce, useHostTransitionStatus: ce, useFormState: ce, useActionState: ce, useOptimistic: ce, useMemoCache: ce, useCacheRefresh: ce };
        so.useEffectEvent = ce;
        var ap = { readContext: De, use: ad, useCallback: function (e, a) { return Ee().memoizedState = [e, a === void 0 ? null : a], e; }, useContext: De, useEffect: Nr, useImperativeHandle: function (e, a, t) { t = t != null ? t.concat([e]) : null, sf(4194308, 4, Gm.bind(null, a, e), t); }, useLayoutEffect: function (e, a) { return sf(4194308, 4, e, a); }, useInsertionEffect: function (e, a) { sf(4, 2, e, a); }, useMemo: function (e, a) { var t = Ee(); a = a === void 0 ? null : a; var l = e(); if (Wt) {
                pt(!0);
                try {
                    e();
                }
                finally {
                    pt(!1);
                }
            } return t.memoizedState = [l, a], l; }, useReducer: function (e, a, t) { var l = Ee(); if (t !== void 0) {
                var u = t(a);
                if (Wt) {
                    pt(!0);
                    try {
                        t(a);
                    }
                    finally {
                        pt(!1);
                    }
                }
            }
            else
                u = a; return l.memoizedState = l.baseState = u, e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: u }, l.queue = e, e = e.dispatch = Pg.bind(null, N, e), [l.memoizedState, e]; }, useRef: function (e) { var a = Ee(); return e = { current: e }, a.memoizedState = e; }, useState: function (e) { e = Nn(e); var a = e.queue, t = Wm.bind(null, N, a); return a.dispatch = t, [e.memoizedState, t]; }, useDebugValue: zs, useDeferredValue: function (e, a) { var t = Ee(); return Ns(t, e, a); }, useTransition: function () { var e = Nn(!1); return e = Qm.bind(null, N, e.queue, !0, !1), Ee().memoizedState = e, [!1, e]; }, useSyncExternalStore: function (e, a, t) { var l = N, u = Ee(); if (X) {
                if (t === void 0)
                    throw Error(A(407));
                t = t();
            }
            else {
                if (t = a(), te === null)
                    throw Error(A(349));
                (P & 127) !== 0 || Dm(l, a, t);
            } u.memoizedState = t; var o = { value: t, getSnapshot: a }; return u.queue = o, Nr(Bm.bind(null, l, o, e), [e]), l.flags |= 2048, Kl(9, { destroy: void 0 }, wm.bind(null, l, o, t, a), null), t; }, useId: function () { var e = Ee(), a = te.identifierPrefix; if (X) {
                var t = Ma, l = Aa;
                t = (l & ~(1 << 32 - Ke(l) - 1)).toString(32) + t, a = "_" + a + "R_" + t, t = Rf++, 0 < t && (a += "H" + t.toString(32)), a += "_";
            }
            else
                t = zg++, a = "_" + a + "r_" + t.toString(32) + "_"; return e.memoizedState = a; }, useHostTransitionStatus: Hs, useFormState: Er, useActionState: Er, useOptimistic: function (e) { var a = Ee(); a.memoizedState = a.baseState = e; var t = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null }; return a.queue = t, a = _s.bind(null, N, !0, t), t.dispatch = a, [e, a]; }, useMemoCache: Us, useCacheRefresh: function () { return Ee().memoizedState = Vg.bind(null, N); }, useEffectEvent: function (e) { var a = Ee(), t = { impl: e }; return a.memoizedState = t, function () { if ((Y & 2) !== 0)
                throw Error(A(440)); return t.impl.apply(void 0, arguments); }; } }, Fs = { readContext: De, use: ad, useCallback: Pm, useContext: De, useEffect: qs, useImperativeHandle: Vm, useInsertionEffect: _m, useLayoutEffect: Fm, useMemo: Xm, useReducer: nf, useRef: Nm, useState: function () { return nf(Ja); }, useDebugValue: zs, useDeferredValue: function (e, a) { var t = he(); return Ym(t, ee.memoizedState, e, a); }, useTransition: function () { var e = nf(Ja)[0], a = he().memoizedState; return [typeof e == "boolean" ? e : vo(e), a]; }, useSyncExternalStore: Tm, useId: Km, useHostTransitionStatus: Hs, useFormState: qr, useActionState: qr, useOptimistic: function (e, a) { var t = he(); return Om(t, ee, e, a); }, useMemoCache: Us, useCacheRefresh: Jm };
        Fs.useEffectEvent = Hm;
        var tp = { readContext: De, use: ad, useCallback: Pm, useContext: De, useEffect: qs, useImperativeHandle: Vm, useInsertionEffect: _m, useLayoutEffect: Fm, useMemo: Xm, useReducer: Qd, useRef: Nm, useState: function () { return Qd(Ja); }, useDebugValue: zs, useDeferredValue: function (e, a) { var t = he(); return ee === null ? Ns(t, e, a) : Ym(t, ee.memoizedState, e, a); }, useTransition: function () { var e = Qd(Ja)[0], a = he().memoizedState; return [typeof e == "boolean" ? e : vo(e), a]; }, useSyncExternalStore: Tm, useId: Km, useHostTransitionStatus: Hs, useFormState: zr, useActionState: zr, useOptimistic: function (e, a) { var t = he(); return ee !== null ? Om(t, ee, e, a) : (t.baseState = e, [e, t.queue.dispatch]); }, useMemoCache: Us, useCacheRefresh: Jm };
        tp.useEffectEvent = Hm;
        function Zd(e, a, t, l) { a = e.memoizedState, t = t(l, a), t = t == null ? a : de({}, a, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t); }
        var Fn = { enqueueSetState: function (e, a, t) { e = e._reactInternals; var l = Je(), u = yt(l); u.payload = a, t != null && (u.callback = t), a = vt(e, u, l), a !== null && (_e(a, e, l), Xu(a, e, l)); }, enqueueReplaceState: function (e, a, t) { e = e._reactInternals; var l = Je(), u = yt(l); u.tag = 1, u.payload = a, t != null && (u.callback = t), a = vt(e, u, l), a !== null && (_e(a, e, l), Xu(a, e, l)); }, enqueueForceUpdate: function (e, a) { e = e._reactInternals; var t = Je(), l = yt(t); l.tag = 2, a != null && (l.callback = a), a = vt(e, l, t), a !== null && (_e(a, e, t), Xu(a, e, t)); } };
        function Hr(e, a, t, l, u, o, f) { return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, o, f) : a.prototype && a.prototype.isPureReactComponent ? !lo(t, l) || !lo(u, o) : !0; }
        function _r(e, a, t, l) { e = a.state, typeof a.componentWillReceiveProps == "function" && a.componentWillReceiveProps(t, l), typeof a.UNSAFE_componentWillReceiveProps == "function" && a.UNSAFE_componentWillReceiveProps(t, l), a.state !== e && Fn.enqueueReplaceState(a, a.state, null); }
        function $t(e, a) { var t = a; if ("ref" in a) {
            t = {};
            for (var l in a)
                l !== "ref" && (t[l] = a[l]);
        } if (e = e.defaultProps) {
            t === a && (t = de({}, t));
            for (var u in e)
                t[u] === void 0 && (t[u] = e[u]);
        } return t; }
        function lp(e) { If(e); }
        function up(e) { console.error(e); }
        function op(e) { If(e); }
        function kf(e, a) { try {
            var t = e.onUncaughtError;
            t(a.value, { componentStack: a.stack });
        }
        catch (l) {
            setTimeout(function () { throw l; });
        } }
        function Fr(e, a, t) { try {
            var l = e.onCaughtError;
            l(t.value, { componentStack: t.stack, errorBoundary: a.tag === 1 ? a.stateNode : null });
        }
        catch (u) {
            setTimeout(function () { throw u; });
        } }
        function Gn(e, a, t) { return t = yt(t), t.tag = 3, t.payload = { element: null }, t.callback = function () { kf(e, a); }, t; }
        function fp(e) { return e = yt(e), e.tag = 3, e; }
        function dp(e, a, t, l) { var u = t.type.getDerivedStateFromError; if (typeof u == "function") {
            var o = l.value;
            e.payload = function () { return u(o); }, e.callback = function () { Fr(a, t, l); };
        } var f = t.stateNode; f !== null && typeof f.componentDidCatch == "function" && (e.callback = function () { Fr(a, t, l), typeof u != "function" && (It === null ? It = new Set([this]) : It.add(this)); var n = l.stack; this.componentDidCatch(l.value, { componentStack: n !== null ? n : "" }); }); }
        function Xg(e, a, t, l, u) { if (t.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
            if (a = t.alternate, a !== null && uu(a, t, u, !0), t = $e.current, t !== null) {
                switch (t.tag) {
                    case 31:
                    case 13: return ia === null ? zf() : t.alternate === null && me === 0 && (me = 3), t.flags &= -257, t.flags |= 65536, t.lanes = u, l === Tf ? t.flags |= 16384 : (a = t.updateQueue, a === null ? t.updateQueue = new Set([l]) : a.add(l), on(e, l, u)), !1;
                    case 22: return t.flags |= 65536, l === Tf ? t.flags |= 16384 : (a = t.updateQueue, a === null ? (a = { transitions: null, markerInstances: null, retryQueue: new Set([l]) }, t.updateQueue = a) : (t = a.retryQueue, t === null ? a.retryQueue = new Set([l]) : t.add(l)), on(e, l, u)), !1;
                }
                throw Error(A(435, t.tag));
            }
            return on(e, l, u), zf(), !1;
        } if (X)
            return a = $e.current, a !== null ? ((a.flags & 65536) === 0 && (a.flags |= 256), a.flags |= 65536, a.lanes = u, l !== wn && (e = Error(A(422), { cause: l }), oo(na(e, t)))) : (l !== wn && (a = Error(A(423), { cause: l }), oo(na(a, t))), e = e.current.alternate, e.flags |= 65536, u &= -u, e.lanes |= u, l = na(l, t), u = Gn(e.stateNode, l, u), Yd(e, u), me !== 4 && (me = 2)), !1; var o = Error(A(520), { cause: l }); if (o = na(o, t), Ju === null ? Ju = [o] : Ju.push(o), me !== 4 && (me = 2), a === null)
            return !0; l = na(l, t), t = a; do {
            switch (t.tag) {
                case 3: return t.flags |= 65536, e = u & -u, t.lanes |= e, e = Gn(t.stateNode, l, e), Yd(t, e), !1;
                case 1: if (a = t.type, o = t.stateNode, (t.flags & 128) === 0 && (typeof a.getDerivedStateFromError == "function" || o !== null && typeof o.componentDidCatch == "function" && (It === null || !It.has(o))))
                    return t.flags |= 65536, u &= -u, t.lanes |= u, u = fp(u), dp(u, e, t, l), Yd(t, u), !1;
            }
            t = t.return;
        } while (t !== null); return !1; }
        var Gs = Error(A(461)), Se = !1;
        function Ae(e, a, t, l) { a.child = e === null ? ym(a, null, t, l) : Jt(a, e.child, t, l); }
        function Gr(e, a, t, l, u) { t = t.render; var o = a.ref; if ("ref" in l) {
            var f = {};
            for (var n in l)
                n !== "ref" && (f[n] = l[n]);
        }
        else
            f = l; return Kt(a), l = Bs(e, a, t, f, o, u), n = Rs(), e !== null && !Se ? (ks(e, a, u), Wa(e, a, u)) : (X && n && vs(a), a.flags |= 1, Ae(e, a, l, u), a.child); }
        function Vr(e, a, t, l, u) { if (e === null) {
            var o = t.type;
            return typeof o == "function" && !ys(o) && o.defaultProps === void 0 && t.compare === null ? (a.tag = 15, a.type = o, np(e, a, o, l, u)) : (e = ff(t.type, null, l, a, a.mode, u), e.ref = a.ref, e.return = a, a.child = e);
        } if (o = e.child, !Vs(e, u)) {
            var f = o.memoizedProps;
            if (t = t.compare, t = t !== null ? t : lo, t(f, l) && e.ref === a.ref)
                return Wa(e, a, u);
        } return a.flags |= 1, e = Ya(o, l), e.ref = a.ref, e.return = a, a.child = e; }
        function np(e, a, t, l, u) { if (e !== null) {
            var o = e.memoizedProps;
            if (lo(o, l) && e.ref === a.ref)
                if (Se = !1, a.pendingProps = l = o, Vs(e, u))
                    (e.flags & 131072) !== 0 && (Se = !0);
                else
                    return a.lanes = e.lanes, Wa(e, a, u);
        } return Vn(e, a, t, l, u); }
        function sp(e, a, t, l) { var u = l.children, o = e !== null ? e.memoizedState : null; if (e === null && a.stateNode === null && (a.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), l.mode === "hidden") {
            if ((a.flags & 128) !== 0) {
                if (o = o !== null ? o.baseLanes | t : t, e !== null) {
                    for (l = a.child = e.child, u = 0; l !== null;)
                        u = u | l.lanes | l.childLanes, l = l.sibling;
                    l = u & ~o;
                }
                else
                    l = 0, a.child = null;
                return Pr(e, a, o, t, l);
            }
            if ((t & 536870912) !== 0)
                a.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && df(a, o !== null ? o.cachePool : null), o !== null ? kr(a, o) : qn(), bm(a);
            else
                return l = a.lanes = 536870912, Pr(e, a, o !== null ? o.baseLanes | t : t, t, l);
        }
        else
            o !== null ? (df(a, o.cachePool), kr(a, o), ct(a), a.memoizedState = null) : (e !== null && df(a, null), qn(), ct(a)); return Ae(e, a, u, t), a.child; }
        function Hu(e, a) { return e !== null && e.tag === 22 || a.stateNode !== null || (a.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), a.sibling; }
        function Pr(e, a, t, l, u) { var o = As(); return o = o === null ? null : { parent: xe._currentValue, pool: o }, a.memoizedState = { baseLanes: t, cachePool: o }, e !== null && df(a, null), qn(), bm(a), e !== null && uu(e, a, l, !0), a.childLanes = u, null; }
        function rf(e, a) { return a = Of({ mode: a.mode, children: a.children }, e.mode), a.ref = e.ref, e.child = a, a.return = e, a; }
        function Xr(e, a, t) { return Jt(a, e.child, null, t), e = rf(a, a.pendingProps), e.flags |= 2, Xe(a), a.memoizedState = null, e; }
        function Yg(e, a, t) { var l = a.pendingProps, u = (a.flags & 128) !== 0; if (a.flags &= -129, e === null) {
            if (X) {
                if (l.mode === "hidden")
                    return e = rf(a, l), a.lanes = 536870912, Hu(null, e);
                if (zn(a), (e = fe) ? (e = ah(e, sa), e = e !== null && e.data === "&" ? e : null, e !== null && (a.memoizedState = { dehydrated: e, treeContext: Dt !== null ? { id: Aa, overflow: Ma } : null, retryLane: 536870912, hydrationErrors: null }, t = pm(e), t.return = a, a.child = t, Te = a, fe = null)) : e = null, e === null)
                    throw wt(a);
                return a.lanes = 536870912, null;
            }
            return rf(a, l);
        } var o = e.memoizedState; if (o !== null) {
            var f = o.dehydrated;
            if (zn(a), u)
                if (a.flags & 256)
                    a.flags &= -257, a = Xr(e, a, t);
                else if (a.memoizedState !== null)
                    a.child = e.child, a.flags |= 128, a = null;
                else
                    throw Error(A(558));
            else if (Se || uu(e, a, t, !1), u = (t & e.childLanes) !== 0, Se || u) {
                if (l = te, l !== null && (f = _c(l, t), f !== 0 && f !== o.retryLane))
                    throw o.retryLane = f, ll(e, f), _e(l, e, f), Gs;
                zf(), a = Xr(e, a, t);
            }
            else
                e = o.treeContext, fe = ra(f.nextSibling), Te = a, X = !0, Ct = null, sa = !1, e !== null && Lm(a, e), a = rf(a, l), a.flags |= 4096;
            return a;
        } return e = Ya(e.child, { mode: l.mode, children: l.children }), e.ref = a.ref, a.child = e, e.return = a, e; }
        function cf(e, a) { var t = a.ref; if (t === null)
            e !== null && e.ref !== null && (a.flags |= 4194816);
        else {
            if (typeof t != "function" && typeof t != "object")
                throw Error(A(284));
            (e === null || e.ref !== t) && (a.flags |= 4194816);
        } }
        function Vn(e, a, t, l, u) { return Kt(a), t = Bs(e, a, t, l, void 0, u), l = Rs(), e !== null && !Se ? (ks(e, a, u), Wa(e, a, u)) : (X && l && vs(a), a.flags |= 1, Ae(e, a, t, u), a.child); }
        function Yr(e, a, t, l, u, o) { return Kt(a), a.updateQueue = null, t = Mm(a, l, t, u), Am(e), l = Rs(), e !== null && !Se ? (ks(e, a, o), Wa(e, a, o)) : (X && l && vs(a), a.flags |= 1, Ae(e, a, t, o), a.child); }
        function Qr(e, a, t, l, u) { if (Kt(a), a.stateNode === null) {
            var o = Ul, f = t.contextType;
            typeof f == "object" && f !== null && (o = De(f)), o = new t(l, o), a.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, o.updater = Fn, a.stateNode = o, o._reactInternals = a, o = a.stateNode, o.props = l, o.state = a.memoizedState, o.refs = {}, Ts(a), f = t.contextType, o.context = typeof f == "object" && f !== null ? De(f) : Ul, o.state = a.memoizedState, f = t.getDerivedStateFromProps, typeof f == "function" && (Zd(a, t, f, l), o.state = a.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (f = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), f !== o.state && Fn.enqueueReplaceState(o, o.state, null), Qu(a, l, o, u), Yu(), o.state = a.memoizedState), typeof o.componentDidMount == "function" && (a.flags |= 4194308), l = !0;
        }
        else if (e === null) {
            o = a.stateNode;
            var n = a.memoizedProps, s = $t(t, n);
            o.props = s;
            var r = o.context, g = t.contextType;
            f = Ul, typeof g == "object" && g !== null && (f = De(g));
            var p = t.getDerivedStateFromProps;
            g = typeof p == "function" || typeof o.getSnapshotBeforeUpdate == "function", n = a.pendingProps !== n, g || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (n || r !== f) && _r(a, o, l, f), st = !1;
            var i = a.memoizedState;
            o.state = i, Qu(a, l, o, u), Yu(), r = a.memoizedState, n || i !== r || st ? (typeof p == "function" && (Zd(a, t, p, l), r = a.memoizedState), (s = st || Hr(a, t, s, l, i, r, f)) ? (g || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (a.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (a.flags |= 4194308), a.memoizedProps = l, a.memoizedState = r), o.props = l, o.state = r, o.context = f, l = s) : (typeof o.componentDidMount == "function" && (a.flags |= 4194308), l = !1);
        }
        else {
            o = a.stateNode, Un(e, a), f = a.memoizedProps, g = $t(t, f), o.props = g, p = a.pendingProps, i = o.context, r = t.contextType, s = Ul, typeof r == "object" && r !== null && (s = De(r)), n = t.getDerivedStateFromProps, (r = typeof n == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (f !== p || i !== s) && _r(a, o, l, s), st = !1, i = a.memoizedState, o.state = i, Qu(a, l, o, u), Yu();
            var C = a.memoizedState;
            f !== p || i !== C || st || e !== null && e.dependencies !== null && Mf(e.dependencies) ? (typeof n == "function" && (Zd(a, t, n, l), C = a.memoizedState), (g = st || Hr(a, t, g, l, i, C, s) || e !== null && e.dependencies !== null && Mf(e.dependencies)) ? (r || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(l, C, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(l, C, s)), typeof o.componentDidUpdate == "function" && (a.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (a.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || f === e.memoizedProps && i === e.memoizedState || (a.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && i === e.memoizedState || (a.flags |= 1024), a.memoizedProps = l, a.memoizedState = C), o.props = l, o.state = C, o.context = s, l = g) : (typeof o.componentDidUpdate != "function" || f === e.memoizedProps && i === e.memoizedState || (a.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && i === e.memoizedState || (a.flags |= 1024), l = !1);
        } return o = l, cf(e, a), l = (a.flags & 128) !== 0, o || l ? (o = a.stateNode, t = l && typeof t.getDerivedStateFromError != "function" ? null : o.render(), a.flags |= 1, e !== null && l ? (a.child = Jt(a, e.child, null, u), a.child = Jt(a, null, t, u)) : Ae(e, a, t, u), a.memoizedState = o.state, e = a.child) : e = Wa(e, a, u), e; }
        function Zr(e, a, t, l) { return jt(), a.flags |= 256, Ae(e, a, t, l), a.child; }
        var jd = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
        function Kd(e) { return { baseLanes: e, cachePool: xm() }; }
        function Jd(e, a, t) { return e = e !== null ? e.childLanes & ~t : 0, a && (e |= Qe), e; }
        function ip(e, a, t) { var l = a.pendingProps, u = !1, o = (a.flags & 128) !== 0, f; if ((f = o) || (f = e !== null && e.memoizedState === null ? !1 : (pe.current & 2) !== 0), f && (u = !0, a.flags &= -129), f = (a.flags & 32) !== 0, a.flags &= -33, e === null) {
            if (X) {
                if (u ? rt(a) : ct(a), (e = fe) ? (e = ah(e, sa), e = e !== null && e.data !== "&" ? e : null, e !== null && (a.memoizedState = { dehydrated: e, treeContext: Dt !== null ? { id: Aa, overflow: Ma } : null, retryLane: 536870912, hydrationErrors: null }, t = pm(e), t.return = a, a.child = t, Te = a, fe = null)) : e = null, e === null)
                    throw wt(a);
                return ls(e) ? a.lanes = 32 : a.lanes = 536870912, null;
            }
            var n = l.children;
            return l = l.fallback, u ? (ct(a), u = a.mode, n = Of({ mode: "hidden", children: n }, u), l = Xt(l, u, t, null), n.return = a, l.return = a, n.sibling = l, a.child = n, l = a.child, l.memoizedState = Kd(t), l.childLanes = Jd(e, f, t), a.memoizedState = jd, Hu(null, l)) : (rt(a), Pn(a, n));
        } var s = e.memoizedState; if (s !== null && (n = s.dehydrated, n !== null)) {
            if (o)
                a.flags & 256 ? (rt(a), a.flags &= -257, a = Wd(e, a, t)) : a.memoizedState !== null ? (ct(a), a.child = e.child, a.flags |= 128, a = null) : (ct(a), n = l.fallback, u = a.mode, l = Of({ mode: "visible", children: l.children }, u), n = Xt(n, u, t, null), n.flags |= 2, l.return = a, n.return = a, l.sibling = n, a.child = l, Jt(a, e.child, null, t), l = a.child, l.memoizedState = Kd(t), l.childLanes = Jd(e, f, t), a.memoizedState = jd, a = Hu(null, l));
            else if (rt(a), ls(n)) {
                if (f = n.nextSibling && n.nextSibling.dataset, f)
                    var r = f.dgst;
                f = r, l = Error(A(419)), l.stack = "", l.digest = f, oo({ value: l, source: null, stack: null }), a = Wd(e, a, t);
            }
            else if (Se || uu(e, a, t, !1), f = (t & e.childLanes) !== 0, Se || f) {
                if (f = te, f !== null && (l = _c(f, t), l !== 0 && l !== s.retryLane))
                    throw s.retryLane = l, ll(e, l), _e(f, e, l), Gs;
                ts(n) || zf(), a = Wd(e, a, t);
            }
            else
                ts(n) ? (a.flags |= 192, a.child = e.child, a = null) : (e = s.treeContext, fe = ra(n.nextSibling), Te = a, X = !0, Ct = null, sa = !1, e !== null && Lm(a, e), a = Pn(a, l.children), a.flags |= 4096);
            return a;
        } return u ? (ct(a), n = l.fallback, u = a.mode, s = e.child, r = s.sibling, l = Ya(s, { mode: "hidden", children: l.children }), l.subtreeFlags = s.subtreeFlags & 65011712, r !== null ? n = Ya(r, n) : (n = Xt(n, u, t, null), n.flags |= 2), n.return = a, l.return = a, l.sibling = n, a.child = l, Hu(null, l), l = a.child, n = e.child.memoizedState, n === null ? n = Kd(t) : (u = n.cachePool, u !== null ? (s = xe._currentValue, u = u.parent !== s ? { parent: s, pool: s } : u) : u = xm(), n = { baseLanes: n.baseLanes | t, cachePool: u }), l.memoizedState = n, l.childLanes = Jd(e, f, t), a.memoizedState = jd, Hu(e.child, l)) : (rt(a), t = e.child, e = t.sibling, t = Ya(t, { mode: "visible", children: l.children }), t.return = a, t.sibling = null, e !== null && (f = a.deletions, f === null ? (a.deletions = [e], a.flags |= 16) : f.push(e)), a.child = t, a.memoizedState = null, t); }
        function Pn(e, a) { return a = Of({ mode: "visible", children: a }, e.mode), a.return = e, e.child = a; }
        function Of(e, a) { return e = Ye(22, e, null, a), e.lanes = 0, e; }
        function Wd(e, a, t) { return Jt(a, e.child, null, t), e = Pn(a, a.pendingProps.children), e.flags |= 2, a.memoizedState = null, e; }
        function jr(e, a, t) { e.lanes |= a; var l = e.alternate; l !== null && (l.lanes |= a), Rn(e.return, a, t); }
        function $d(e, a, t, l, u, o) { var f = e.memoizedState; f === null ? e.memoizedState = { isBackwards: a, rendering: null, renderingStartTime: 0, last: l, tail: t, tailMode: u, treeForkCount: o } : (f.isBackwards = a, f.rendering = null, f.renderingStartTime = 0, f.last = l, f.tail = t, f.tailMode = u, f.treeForkCount = o); }
        function rp(e, a, t) { var l = a.pendingProps, u = l.revealOrder, o = l.tail; l = l.children; var f = pe.current, n = (f & 2) !== 0; if (n ? (f = f & 1 | 2, a.flags |= 128) : f &= 1, le(pe, f), Ae(e, a, l, t), l = X ? uo : 0, !n && e !== null && (e.flags & 128) !== 0)
            e: for (e = a.child; e !== null;) {
                if (e.tag === 13)
                    e.memoizedState !== null && jr(e, t, a);
                else if (e.tag === 19)
                    jr(e, t, a);
                else if (e.child !== null) {
                    e.child.return = e, e = e.child;
                    continue;
                }
                if (e === a)
                    break e;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === a)
                        break e;
                    e = e.return;
                }
                e.sibling.return = e.return, e = e.sibling;
            } switch (u) {
            case "forwards":
                for (t = a.child, u = null; t !== null;)
                    e = t.alternate, e !== null && wf(e) === null && (u = t), t = t.sibling;
                t = u, t === null ? (u = a.child, a.child = null) : (u = t.sibling, t.sibling = null), $d(a, !1, u, t, o, l);
                break;
            case "backwards":
            case "unstable_legacy-backwards":
                for (t = null, u = a.child, a.child = null; u !== null;) {
                    if (e = u.alternate, e !== null && wf(e) === null) {
                        a.child = u;
                        break;
                    }
                    e = u.sibling, u.sibling = t, t = u, u = e;
                }
                $d(a, !0, t, null, o, l);
                break;
            case "together":
                $d(a, !1, null, null, void 0, l);
                break;
            default: a.memoizedState = null;
        } return a.child; }
        function Wa(e, a, t) { if (e !== null && (a.dependencies = e.dependencies), Rt |= a.lanes, (t & a.childLanes) === 0)
            if (e !== null) {
                if (uu(e, a, t, !1), (t & a.childLanes) === 0)
                    return null;
            }
            else
                return null; if (e !== null && a.child !== e.child)
            throw Error(A(153)); if (a.child !== null) {
            for (e = a.child, t = Ya(e, e.pendingProps), a.child = t, t.return = a; e.sibling !== null;)
                e = e.sibling, t = t.sibling = Ya(e, e.pendingProps), t.return = a;
            t.sibling = null;
        } return a.child; }
        function Vs(e, a) { return (e.lanes & a) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Mf(e))); }
        function Qg(e, a, t) { switch (a.tag) {
            case 3:
                Sf(a, a.stateNode.containerInfo), it(a, xe, e.memoizedState.cache), jt();
                break;
            case 27:
            case 5:
                xn(a);
                break;
            case 4:
                Sf(a, a.stateNode.containerInfo);
                break;
            case 10:
                it(a, a.type, a.memoizedProps.value);
                break;
            case 31:
                if (a.memoizedState !== null)
                    return a.flags |= 128, zn(a), null;
                break;
            case 13:
                var l = a.memoizedState;
                if (l !== null)
                    return l.dehydrated !== null ? (rt(a), a.flags |= 128, null) : (t & a.child.childLanes) !== 0 ? ip(e, a, t) : (rt(a), e = Wa(e, a, t), e !== null ? e.sibling : null);
                rt(a);
                break;
            case 19:
                var u = (e.flags & 128) !== 0;
                if (l = (t & a.childLanes) !== 0, l || (uu(e, a, t, !1), l = (t & a.childLanes) !== 0), u) {
                    if (l)
                        return rp(e, a, t);
                    a.flags |= 128;
                }
                if (u = a.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), le(pe, pe.current), l)
                    break;
                return null;
            case 22: return a.lanes = 0, sp(e, a, t, a.pendingProps);
            case 24: it(a, xe, e.memoizedState.cache);
        } return Wa(e, a, t); }
        function cp(e, a, t) { if (e !== null)
            if (e.memoizedProps !== a.pendingProps)
                Se = !0;
            else {
                if (!Vs(e, t) && (a.flags & 128) === 0)
                    return Se = !1, Qg(e, a, t);
                Se = (e.flags & 131072) !== 0;
            }
        else
            Se = !1, X && (a.flags & 1048576) !== 0 && hm(a, uo, a.index); switch (a.lanes = 0, a.tag) {
            case 16:
                e: {
                    var l = a.pendingProps;
                    if (e = Gt(a.elementType), a.type = e, typeof e == "function")
                        ys(e) ? (l = $t(e, l), a.tag = 1, a = Qr(null, a, e, l, t)) : (a.tag = 0, a = Vn(null, a, e, l, t));
                    else {
                        if (e != null) {
                            var u = e.$$typeof;
                            if (u === ds) {
                                a.tag = 11, a = Gr(null, a, e, l, t);
                                break e;
                            }
                            else if (u === ns) {
                                a.tag = 14, a = Vr(null, a, e, l, t);
                                break e;
                            }
                        }
                        throw a = Ln(e) || e, Error(A(306, a, ""));
                    }
                }
                return a;
            case 0: return Vn(e, a, a.type, a.pendingProps, t);
            case 1: return l = a.type, u = $t(l, a.pendingProps), Qr(e, a, l, u, t);
            case 3:
                e: {
                    if (Sf(a, a.stateNode.containerInfo), e === null)
                        throw Error(A(387));
                    l = a.pendingProps;
                    var o = a.memoizedState;
                    u = o.element, Un(e, a), Qu(a, l, null, t);
                    var f = a.memoizedState;
                    if (l = f.cache, it(a, xe, l), l !== o.cache && kn(a, [xe], t, !0), Yu(), l = f.element, o.isDehydrated)
                        if (o = { element: l, isDehydrated: !1, cache: f.cache }, a.updateQueue.baseState = o, a.memoizedState = o, a.flags & 256) {
                            a = Zr(e, a, l, t);
                            break e;
                        }
                        else if (l !== u) {
                            u = na(Error(A(424)), a), oo(u), a = Zr(e, a, l, t);
                            break e;
                        }
                        else
                            for (e = a.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, fe = ra(e.firstChild), Te = a, X = !0, Ct = null, sa = !0, t = ym(a, null, l, t), a.child = t; t;)
                                t.flags = t.flags & -3 | 4096, t = t.sibling;
                    else {
                        if (jt(), l === u) {
                            a = Wa(e, a, t);
                            break e;
                        }
                        Ae(e, a, l, t);
                    }
                    a = a.child;
                }
                return a;
            case 26: return cf(e, a), e === null ? (t = gc(a.type, null, a.pendingProps, null)) ? a.memoizedState = t : X || (t = a.type, e = a.pendingProps, l = Ff(St.current).createElement(t), l[Me] = a, l[Fe] = e, we(l, t, e), Ie(l), a.stateNode = l) : a.memoizedState = gc(a.type, e.memoizedProps, a.pendingProps, e.memoizedState), null;
            case 27: return xn(a), e === null && X && (l = a.stateNode = th(a.type, a.pendingProps, St.current), Te = a, sa = !0, u = fe, Ot(a.type) ? (us = u, fe = ra(l.firstChild)) : fe = u), Ae(e, a, a.pendingProps.children, t), cf(e, a), e === null && (a.flags |= 4194304), a.child;
            case 5: return e === null && X && ((u = l = fe) && (l = y1(l, a.type, a.pendingProps, sa), l !== null ? (a.stateNode = l, Te = a, fe = ra(l.firstChild), sa = !1, u = !0) : u = !1), u || wt(a)), xn(a), u = a.type, o = a.pendingProps, f = e !== null ? e.memoizedProps : null, l = o.children, es(u, o) ? l = null : f !== null && es(u, f) && (a.flags |= 32), a.memoizedState !== null && (u = Bs(e, a, Ng, null, null, t), co._currentValue = u), cf(e, a), Ae(e, a, l, t), a.child;
            case 6: return e === null && X && ((e = t = fe) && (t = v1(t, a.pendingProps, sa), t !== null ? (a.stateNode = t, Te = a, fe = null, e = !0) : e = !1), e || wt(a)), null;
            case 13: return ip(e, a, t);
            case 4: return Sf(a, a.stateNode.containerInfo), l = a.pendingProps, e === null ? a.child = Jt(a, null, l, t) : Ae(e, a, l, t), a.child;
            case 11: return Gr(e, a, a.type, a.pendingProps, t);
            case 7: return Ae(e, a, a.pendingProps, t), a.child;
            case 8: return Ae(e, a, a.pendingProps.children, t), a.child;
            case 12: return Ae(e, a, a.pendingProps.children, t), a.child;
            case 10: return l = a.pendingProps, it(a, a.type, l.value), Ae(e, a, l.children, t), a.child;
            case 9: return u = a.type._context, l = a.pendingProps.children, Kt(a), u = De(u), l = l(u), a.flags |= 1, Ae(e, a, l, t), a.child;
            case 14: return Vr(e, a, a.type, a.pendingProps, t);
            case 15: return np(e, a, a.type, a.pendingProps, t);
            case 19: return rp(e, a, t);
            case 31: return Yg(e, a, t);
            case 22: return sp(e, a, t, a.pendingProps);
            case 24: return Kt(a), l = De(xe), e === null ? (u = As(), u === null && (u = te, o = bs(), u.pooledCache = o, o.refCount++, o !== null && (u.pooledCacheLanes |= t), u = o), a.memoizedState = { parent: l, cache: u }, Ts(a), it(a, xe, u)) : ((e.lanes & t) !== 0 && (Un(e, a), Qu(a, null, null, t), Yu()), u = e.memoizedState, o = a.memoizedState, u.parent !== l ? (u = { parent: l, cache: l }, a.memoizedState = u, a.lanes === 0 && (a.memoizedState = a.updateQueue.baseState = u), it(a, xe, l)) : (l = o.cache, it(a, xe, l), l !== u.cache && kn(a, [xe], t, !0))), Ae(e, a, a.pendingProps.children, t), a.child;
            case 29: throw a.pendingProps;
        } throw Error(A(156, a.tag)); }
        function za(e) { e.flags |= 4; }
        function en(e, a, t, l, u) { if ((a = (e.mode & 32) !== 0) && (a = !1), a) {
            if (e.flags |= 16777216, (u & 335544128) === u)
                if (e.stateNode.complete)
                    e.flags |= 8192;
                else if (qp())
                    e.flags |= 8192;
                else
                    throw Qt = Tf, Ms;
        }
        else
            e.flags &= -16777217; }
        function Kr(e, a) { if (a.type !== "stylesheet" || (a.state.loading & 4) !== 0)
            e.flags &= -16777217;
        else if (e.flags |= 16777216, !oh(a))
            if (qp())
                e.flags |= 8192;
            else
                throw Qt = Tf, Ms; }
        function jo(e, a) { a !== null && (e.flags |= 4), e.flags & 16384 && (a = e.tag !== 22 ? zc() : 536870912, e.lanes |= a, Jl |= a); }
        function ku(e, a) { if (!X)
            switch (e.tailMode) {
                case "hidden":
                    a = e.tail;
                    for (var t = null; a !== null;)
                        a.alternate !== null && (t = a), a = a.sibling;
                    t === null ? e.tail = null : t.sibling = null;
                    break;
                case "collapsed":
                    t = e.tail;
                    for (var l = null; t !== null;)
                        t.alternate !== null && (l = t), t = t.sibling;
                    l === null ? a || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null;
            } }
        function oe(e) { var a = e.alternate !== null && e.alternate.child === e.child, t = 0, l = 0; if (a)
            for (var u = e.child; u !== null;)
                t |= u.lanes | u.childLanes, l |= u.subtreeFlags & 65011712, l |= u.flags & 65011712, u.return = e, u = u.sibling;
        else
            for (u = e.child; u !== null;)
                t |= u.lanes | u.childLanes, l |= u.subtreeFlags, l |= u.flags, u.return = e, u = u.sibling; return e.subtreeFlags |= l, e.childLanes = t, a; }
        function Zg(e, a, t) { var l = a.pendingProps; switch (Is(a), a.tag) {
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14: return oe(a), null;
            case 1: return oe(a), null;
            case 3: return t = a.stateNode, l = null, e !== null && (l = e.memoizedState.cache), a.memoizedState.cache !== l && (a.flags |= 2048), Qa(xe), Xl(), t.pendingContext && (t.context = t.pendingContext, t.pendingContext = null), (e === null || e.child === null) && (vl(a) ? za(a) : e === null || e.memoizedState.isDehydrated && (a.flags & 256) === 0 || (a.flags |= 1024, Xd())), oe(a), null;
            case 26:
                var u = a.type, o = a.memoizedState;
                return e === null ? (za(a), o !== null ? (oe(a), Kr(a, o)) : (oe(a), en(a, u, null, l, t))) : o ? o !== e.memoizedState ? (za(a), oe(a), Kr(a, o)) : (oe(a), a.flags &= -16777217) : (e = e.memoizedProps, e !== l && za(a), oe(a), en(a, u, e, l, t)), null;
            case 27:
                if (Cf(a), t = St.current, u = a.type, e !== null && a.stateNode != null)
                    e.memoizedProps !== l && za(a);
                else {
                    if (!l) {
                        if (a.stateNode === null)
                            throw Error(A(166));
                        return oe(a), null;
                    }
                    e = Da.current, vl(a) ? Ar(a, e) : (e = th(u, l, t), a.stateNode = e, za(a));
                }
                return oe(a), null;
            case 5:
                if (Cf(a), u = a.type, e !== null && a.stateNode != null)
                    e.memoizedProps !== l && za(a);
                else {
                    if (!l) {
                        if (a.stateNode === null)
                            throw Error(A(166));
                        return oe(a), null;
                    }
                    if (o = Da.current, vl(a))
                        Ar(a, o);
                    else {
                        var f = Ff(St.current);
                        switch (o) {
                            case 1:
                                o = f.createElementNS("http://www.w3.org/2000/svg", u);
                                break;
                            case 2:
                                o = f.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                                break;
                            default: switch (u) {
                                case "svg":
                                    o = f.createElementNS("http://www.w3.org/2000/svg", u);
                                    break;
                                case "math":
                                    o = f.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                                    break;
                                case "script":
                                    o = f.createElement("div"), o.innerHTML = "<script><\/script>", o = o.removeChild(o.firstChild);
                                    break;
                                case "select":
                                    o = typeof l.is == "string" ? f.createElement("select", { is: l.is }) : f.createElement("select"), l.multiple ? o.multiple = !0 : l.size && (o.size = l.size);
                                    break;
                                default: o = typeof l.is == "string" ? f.createElement(u, { is: l.is }) : f.createElement(u);
                            }
                        }
                        o[Me] = a, o[Fe] = l;
                        e: for (f = a.child; f !== null;) {
                            if (f.tag === 5 || f.tag === 6)
                                o.appendChild(f.stateNode);
                            else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                                f.child.return = f, f = f.child;
                                continue;
                            }
                            if (f === a)
                                break e;
                            for (; f.sibling === null;) {
                                if (f.return === null || f.return === a)
                                    break e;
                                f = f.return;
                            }
                            f.sibling.return = f.return, f = f.sibling;
                        }
                        a.stateNode = o;
                        e: switch (we(o, u, l), u) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l = !!l.autoFocus;
                                break e;
                            case "img":
                                l = !0;
                                break e;
                            default: l = !1;
                        }
                        l && za(a);
                    }
                }
                return oe(a), en(a, a.type, e === null ? null : e.memoizedProps, a.pendingProps, t), null;
            case 6:
                if (e && a.stateNode != null)
                    e.memoizedProps !== l && za(a);
                else {
                    if (typeof l != "string" && a.stateNode === null)
                        throw Error(A(166));
                    if (e = St.current, vl(a)) {
                        if (e = a.stateNode, t = a.memoizedProps, l = null, u = Te, u !== null)
                            switch (u.tag) {
                                case 27:
                                case 5: l = u.memoizedProps;
                            }
                        e[Me] = a, e = !!(e.nodeValue === t || l !== null && l.suppressHydrationWarning === !0 || Wp(e.nodeValue, t)), e || wt(a, !0);
                    }
                    else
                        e = Ff(e).createTextNode(l), e[Me] = a, a.stateNode = e;
                }
                return oe(a), null;
            case 31:
                if (t = a.memoizedState, e === null || e.memoizedState !== null) {
                    if (l = vl(a), t !== null) {
                        if (e === null) {
                            if (!l)
                                throw Error(A(318));
                            if (e = a.memoizedState, e = e !== null ? e.dehydrated : null, !e)
                                throw Error(A(557));
                            e[Me] = a;
                        }
                        else
                            jt(), (a.flags & 128) === 0 && (a.memoizedState = null), a.flags |= 4;
                        oe(a), e = !1;
                    }
                    else
                        t = Xd(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = t), e = !0;
                    if (!e)
                        return a.flags & 256 ? (Xe(a), a) : (Xe(a), null);
                    if ((a.flags & 128) !== 0)
                        throw Error(A(558));
                }
                return oe(a), null;
            case 13:
                if (l = a.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (u = vl(a), l !== null && l.dehydrated !== null) {
                        if (e === null) {
                            if (!u)
                                throw Error(A(318));
                            if (u = a.memoizedState, u = u !== null ? u.dehydrated : null, !u)
                                throw Error(A(317));
                            u[Me] = a;
                        }
                        else
                            jt(), (a.flags & 128) === 0 && (a.memoizedState = null), a.flags |= 4;
                        oe(a), u = !1;
                    }
                    else
                        u = Xd(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = u), u = !0;
                    if (!u)
                        return a.flags & 256 ? (Xe(a), a) : (Xe(a), null);
                }
                return Xe(a), (a.flags & 128) !== 0 ? (a.lanes = t, a) : (t = l !== null, e = e !== null && e.memoizedState !== null, t && (l = a.child, u = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (u = l.alternate.memoizedState.cachePool.pool), o = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (o = l.memoizedState.cachePool.pool), o !== u && (l.flags |= 2048)), t !== e && t && (a.child.flags |= 8192), jo(a, a.updateQueue), oe(a), null);
            case 4: return Xl(), e === null && Ks(a.stateNode.containerInfo), oe(a), null;
            case 10: return Qa(a.type), oe(a), null;
            case 19:
                if (be(pe), l = a.memoizedState, l === null)
                    return oe(a), null;
                if (u = (a.flags & 128) !== 0, o = l.rendering, o === null)
                    if (u)
                        ku(l, !1);
                    else {
                        if (me !== 0 || e !== null && (e.flags & 128) !== 0)
                            for (e = a.child; e !== null;) {
                                if (o = wf(e), o !== null) {
                                    for (a.flags |= 128, ku(l, !1), e = o.updateQueue, a.updateQueue = e, jo(a, e), a.subtreeFlags = 0, e = t, t = a.child; t !== null;)
                                        mm(t, e), t = t.sibling;
                                    return le(pe, pe.current & 1 | 2), X && Fa(a, l.treeForkCount), a.child;
                                }
                                e = e.sibling;
                            }
                        l.tail !== null && Ze() > Ef && (a.flags |= 128, u = !0, ku(l, !1), a.lanes = 4194304);
                    }
                else {
                    if (!u)
                        if (e = wf(o), e !== null) {
                            if (a.flags |= 128, u = !0, e = e.updateQueue, a.updateQueue = e, jo(a, e), ku(l, !0), l.tail === null && l.tailMode === "hidden" && !o.alternate && !X)
                                return oe(a), null;
                        }
                        else
                            2 * Ze() - l.renderingStartTime > Ef && t !== 536870912 && (a.flags |= 128, u = !0, ku(l, !1), a.lanes = 4194304);
                    l.isBackwards ? (o.sibling = a.child, a.child = o) : (e = l.last, e !== null ? e.sibling = o : a.child = o, l.last = o);
                }
                return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = Ze(), e.sibling = null, t = pe.current, le(pe, u ? t & 1 | 2 : t & 1), X && Fa(a, l.treeForkCount), e) : (oe(a), null);
            case 22:
            case 23: return Xe(a), Ds(), l = a.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (a.flags |= 8192) : l && (a.flags |= 8192), l ? (t & 536870912) !== 0 && (a.flags & 128) === 0 && (oe(a), a.subtreeFlags & 6 && (a.flags |= 8192)) : oe(a), t = a.updateQueue, t !== null && jo(a, t.retryQueue), t = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), l = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (l = a.memoizedState.cachePool.pool), l !== t && (a.flags |= 2048), e !== null && be(Yt), null;
            case 24: return t = null, e !== null && (t = e.memoizedState.cache), a.memoizedState.cache !== t && (a.flags |= 2048), Qa(xe), oe(a), null;
            case 25: return null;
            case 30: return null;
        } throw Error(A(156, a.tag)); }
        function jg(e, a) { switch (Is(a), a.tag) {
            case 1: return e = a.flags, e & 65536 ? (a.flags = e & -65537 | 128, a) : null;
            case 3: return Qa(xe), Xl(), e = a.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (a.flags = e & -65537 | 128, a) : null;
            case 26:
            case 27:
            case 5: return Cf(a), null;
            case 31:
                if (a.memoizedState !== null) {
                    if (Xe(a), a.alternate === null)
                        throw Error(A(340));
                    jt();
                }
                return e = a.flags, e & 65536 ? (a.flags = e & -65537 | 128, a) : null;
            case 13:
                if (Xe(a), e = a.memoizedState, e !== null && e.dehydrated !== null) {
                    if (a.alternate === null)
                        throw Error(A(340));
                    jt();
                }
                return e = a.flags, e & 65536 ? (a.flags = e & -65537 | 128, a) : null;
            case 19: return be(pe), null;
            case 4: return Xl(), null;
            case 10: return Qa(a.type), null;
            case 22:
            case 23: return Xe(a), Ds(), e !== null && be(Yt), e = a.flags, e & 65536 ? (a.flags = e & -65537 | 128, a) : null;
            case 24: return Qa(xe), null;
            case 25: return null;
            default: return null;
        } }
        function mp(e, a) { switch (Is(a), a.tag) {
            case 3:
                Qa(xe), Xl();
                break;
            case 26:
            case 27:
            case 5:
                Cf(a);
                break;
            case 4:
                Xl();
                break;
            case 31:
                a.memoizedState !== null && Xe(a);
                break;
            case 13:
                Xe(a);
                break;
            case 19:
                be(pe);
                break;
            case 10:
                Qa(a.type);
                break;
            case 22:
            case 23:
                Xe(a), Ds(), e !== null && be(Yt);
                break;
            case 24: Qa(xe);
        } }
        function Io(e, a) { try {
            var t = a.updateQueue, l = t !== null ? t.lastEffect : null;
            if (l !== null) {
                var u = l.next;
                t = u;
                do {
                    if ((t.tag & e) === e) {
                        l = void 0;
                        var o = t.create, f = t.inst;
                        l = o(), f.destroy = l;
                    }
                    t = t.next;
                } while (t !== u);
            }
        }
        catch (n) {
            W(a, a.return, n);
        } }
        function Bt(e, a, t) { try {
            var l = a.updateQueue, u = l !== null ? l.lastEffect : null;
            if (u !== null) {
                var o = u.next;
                l = o;
                do {
                    if ((l.tag & e) === e) {
                        var f = l.inst, n = f.destroy;
                        if (n !== void 0) {
                            f.destroy = void 0, u = a;
                            var s = t, r = n;
                            try {
                                r();
                            }
                            catch (g) {
                                W(u, s, g);
                            }
                        }
                    }
                    l = l.next;
                } while (l !== o);
            }
        }
        catch (g) {
            W(a, a.return, g);
        } }
        function pp(e) { var a = e.updateQueue; if (a !== null) {
            var t = e.stateNode;
            try {
                Im(a, t);
            }
            catch (l) {
                W(e, e.return, l);
            }
        } }
        function hp(e, a, t) { t.props = $t(e.type, e.memoizedProps), t.state = e.memoizedState; try {
            t.componentWillUnmount();
        }
        catch (l) {
            W(e, a, l);
        } }
        function ju(e, a) { try {
            var t = e.ref;
            if (t !== null) {
                switch (e.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var l = e.stateNode;
                        break;
                    case 30:
                        l = e.stateNode;
                        break;
                    default: l = e.stateNode;
                }
                typeof t == "function" ? e.refCleanup = t(l) : t.current = l;
            }
        }
        catch (u) {
            W(e, a, u);
        } }
        function Ta(e, a) { var t = e.ref, l = e.refCleanup; if (t !== null)
            if (typeof l == "function")
                try {
                    l();
                }
                catch (u) {
                    W(e, a, u);
                }
                finally {
                    e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
                }
            else if (typeof t == "function")
                try {
                    t(null);
                }
                catch (u) {
                    W(e, a, u);
                }
            else
                t.current = null; }
        function Lp(e) { var a = e.type, t = e.memoizedProps, l = e.stateNode; try {
            e: switch (a) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    t.autoFocus && l.focus();
                    break e;
                case "img": t.src ? l.src = t.src : t.srcSet && (l.srcset = t.srcSet);
            }
        }
        catch (u) {
            W(e, e.return, u);
        } }
        function an(e, a, t) { try {
            var l = e.stateNode;
            h1(l, e.type, t, a), l[Fe] = a;
        }
        catch (u) {
            W(e, e.return, u);
        } }
        function gp(e) { return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Ot(e.type) || e.tag === 4; }
        function tn(e) { e: for (;;) {
            for (; e.sibling === null;) {
                if (e.return === null || gp(e.return))
                    return null;
                e = e.return;
            }
            for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
                if (e.tag === 27 && Ot(e.type) || e.flags & 2 || e.child === null || e.tag === 4)
                    continue e;
                e.child.return = e, e = e.child;
            }
            if (!(e.flags & 2))
                return e.stateNode;
        } }
        function Xn(e, a, t) { var l = e.tag; if (l === 5 || l === 6)
            e = e.stateNode, a ? (t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t).insertBefore(e, a) : (a = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, a.appendChild(e), t = t._reactRootContainer, t != null || a.onclick !== null || (a.onclick = Pa));
        else if (l !== 4 && (l === 27 && Ot(e.type) && (t = e.stateNode, a = null), e = e.child, e !== null))
            for (Xn(e, a, t), e = e.sibling; e !== null;)
                Xn(e, a, t), e = e.sibling; }
        function Uf(e, a, t) { var l = e.tag; if (l === 5 || l === 6)
            e = e.stateNode, a ? t.insertBefore(e, a) : t.appendChild(e);
        else if (l !== 4 && (l === 27 && Ot(e.type) && (t = e.stateNode), e = e.child, e !== null))
            for (Uf(e, a, t), e = e.sibling; e !== null;)
                Uf(e, a, t), e = e.sibling; }
        function xp(e) { var a = e.stateNode, t = e.memoizedProps; try {
            for (var l = e.type, u = a.attributes; u.length;)
                a.removeAttributeNode(u[0]);
            we(a, l, t), a[Me] = e, a[Fe] = t;
        }
        catch (o) {
            W(e, e.return, o);
        } }
        var Ga = !1, ge = !1, ln = !1, Jr = typeof WeakSet == "function" ? WeakSet : Set, ve = null;
        function Kg(e, a) { if (e = e.containerInfo, Wn = Xf, e = om(e), xs(e)) {
            if ("selectionStart" in e)
                var t = { start: e.selectionStart, end: e.selectionEnd };
            else
                e: {
                    t = (t = e.ownerDocument) && t.defaultView || window;
                    var l = t.getSelection && t.getSelection();
                    if (l && l.rangeCount !== 0) {
                        t = l.anchorNode;
                        var u = l.anchorOffset, o = l.focusNode;
                        l = l.focusOffset;
                        try {
                            t.nodeType, o.nodeType;
                        }
                        catch {
                            t = null;
                            break e;
                        }
                        var f = 0, n = -1, s = -1, r = 0, g = 0, p = e, i = null;
                        a: for (;;) {
                            for (var C; p !== t || u !== 0 && p.nodeType !== 3 || (n = f + u), p !== o || l !== 0 && p.nodeType !== 3 || (s = f + l), p.nodeType === 3 && (f += p.nodeValue.length), (C = p.firstChild) !== null;)
                                i = p, p = C;
                            for (;;) {
                                if (p === e)
                                    break a;
                                if (i === t && ++r === u && (n = f), i === o && ++g === l && (s = f), (C = p.nextSibling) !== null)
                                    break;
                                p = i, i = p.parentNode;
                            }
                            p = C;
                        }
                        t = n === -1 || s === -1 ? null : { start: n, end: s };
                    }
                    else
                        t = null;
                }
            t = t || { start: 0, end: 0 };
        }
        else
            t = null; for ($n = { focusedElem: e, selectionRange: t }, Xf = !1, ve = a; ve !== null;)
            if (a = ve, e = a.child, (a.subtreeFlags & 1028) !== 0 && e !== null)
                e.return = a, ve = e;
            else
                for (; ve !== null;) {
                    switch (a = ve, o = a.alternate, e = a.flags, a.tag) {
                        case 0:
                            if ((e & 4) !== 0 && (e = a.updateQueue, e = e !== null ? e.events : null, e !== null))
                                for (t = 0; t < e.length; t++)
                                    u = e[t], u.ref.impl = u.nextImpl;
                            break;
                        case 11:
                        case 15: break;
                        case 1:
                            if ((e & 1024) !== 0 && o !== null) {
                                e = void 0, t = a, u = o.memoizedProps, o = o.memoizedState, l = t.stateNode;
                                try {
                                    var D = $t(t.type, u);
                                    e = l.getSnapshotBeforeUpdate(D, o), l.__reactInternalSnapshotBeforeUpdate = e;
                                }
                                catch (B) {
                                    W(t, t.return, B);
                                }
                            }
                            break;
                        case 3:
                            if ((e & 1024) !== 0) {
                                if (e = a.stateNode.containerInfo, t = e.nodeType, t === 9)
                                    as(e);
                                else if (t === 1)
                                    switch (e.nodeName) {
                                        case "HEAD":
                                        case "HTML":
                                        case "BODY":
                                            as(e);
                                            break;
                                        default: e.textContent = "";
                                    }
                            }
                            break;
                        case 5:
                        case 26:
                        case 27:
                        case 6:
                        case 4:
                        case 17: break;
                        default: if ((e & 1024) !== 0)
                            throw Error(A(163));
                    }
                    if (e = a.sibling, e !== null) {
                        e.return = a.return, ve = e;
                        break;
                    }
                    ve = a.return;
                } }
        function Sp(e, a, t) { var l = t.flags; switch (t.tag) {
            case 0:
            case 11:
            case 15:
                Ha(e, t), l & 4 && Io(5, t);
                break;
            case 1:
                if (Ha(e, t), l & 4)
                    if (e = t.stateNode, a === null)
                        try {
                            e.componentDidMount();
                        }
                        catch (f) {
                            W(t, t.return, f);
                        }
                    else {
                        var u = $t(t.type, a.memoizedProps);
                        a = a.memoizedState;
                        try {
                            e.componentDidUpdate(u, a, e.__reactInternalSnapshotBeforeUpdate);
                        }
                        catch (f) {
                            W(t, t.return, f);
                        }
                    }
                l & 64 && pp(t), l & 512 && ju(t, t.return);
                break;
            case 3:
                if (Ha(e, t), l & 64 && (e = t.updateQueue, e !== null)) {
                    if (a = null, t.child !== null)
                        switch (t.child.tag) {
                            case 27:
                            case 5:
                                a = t.child.stateNode;
                                break;
                            case 1: a = t.child.stateNode;
                        }
                    try {
                        Im(e, a);
                    }
                    catch (f) {
                        W(t, t.return, f);
                    }
                }
                break;
            case 27: a === null && l & 4 && xp(t);
            case 26:
            case 5:
                Ha(e, t), a === null && l & 4 && Lp(t), l & 512 && ju(t, t.return);
                break;
            case 12:
                Ha(e, t);
                break;
            case 31:
                Ha(e, t), l & 4 && vp(e, t);
                break;
            case 13:
                Ha(e, t), l & 4 && Ip(e, t), l & 64 && (e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null && (t = o1.bind(null, t), I1(e, t))));
                break;
            case 22:
                if (l = t.memoizedState !== null || Ga, !l) {
                    a = a !== null && a.memoizedState !== null || ge, u = Ga;
                    var o = ge;
                    Ga = l, (ge = a) && !o ? _a(e, t, (t.subtreeFlags & 8772) !== 0) : Ha(e, t), Ga = u, ge = o;
                }
                break;
            case 30: break;
            default: Ha(e, t);
        } }
        function Cp(e) { var a = e.alternate; a !== null && (e.alternate = null, Cp(a)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (a = e.stateNode, a !== null && cs(a)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null; }
        var ie = null, Ne = !1;
        function Na(e, a, t) { for (t = t.child; t !== null;)
            yp(e, a, t), t = t.sibling; }
        function yp(e, a, t) { if (je && typeof je.onCommitFiberUnmount == "function")
            try {
                je.onCommitFiberUnmount(Lo, t);
            }
            catch { } switch (t.tag) {
            case 26:
                ge || Ta(t, a), Na(e, a, t), t.memoizedState ? t.memoizedState.count-- : t.stateNode && (t = t.stateNode, t.parentNode.removeChild(t));
                break;
            case 27:
                ge || Ta(t, a);
                var l = ie, u = Ne;
                Ot(t.type) && (ie = t.stateNode, Ne = !1), Na(e, a, t), $u(t.stateNode), ie = l, Ne = u;
                break;
            case 5: ge || Ta(t, a);
            case 6:
                if (l = ie, u = Ne, ie = null, Na(e, a, t), ie = l, Ne = u, ie !== null)
                    if (Ne)
                        try {
                            (ie.nodeType === 9 ? ie.body : ie.nodeName === "HTML" ? ie.ownerDocument.body : ie).removeChild(t.stateNode);
                        }
                        catch (o) {
                            W(t, a, o);
                        }
                    else
                        try {
                            ie.removeChild(t.stateNode);
                        }
                        catch (o) {
                            W(t, a, o);
                        }
                break;
            case 18:
                ie !== null && (Ne ? (e = ie, cc(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, t.stateNode), au(e)) : cc(ie, t.stateNode));
                break;
            case 4:
                l = ie, u = Ne, ie = t.stateNode.containerInfo, Ne = !0, Na(e, a, t), ie = l, Ne = u;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                Bt(2, t, a), ge || Bt(4, t, a), Na(e, a, t);
                break;
            case 1:
                ge || (Ta(t, a), l = t.stateNode, typeof l.componentWillUnmount == "function" && hp(t, a, l)), Na(e, a, t);
                break;
            case 21:
                Na(e, a, t);
                break;
            case 22:
                ge = (l = ge) || t.memoizedState !== null, Na(e, a, t), ge = l;
                break;
            default: Na(e, a, t);
        } }
        function vp(e, a) { if (a.memoizedState === null && (e = a.alternate, e !== null && (e = e.memoizedState, e !== null))) {
            e = e.dehydrated;
            try {
                au(e);
            }
            catch (t) {
                W(a, a.return, t);
            }
        } }
        function Ip(e, a) { if (a.memoizedState === null && (e = a.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
            try {
                au(e);
            }
            catch (t) {
                W(a, a.return, t);
            } }
        function Jg(e) { switch (e.tag) {
            case 31:
            case 13:
            case 19:
                var a = e.stateNode;
                return a === null && (a = e.stateNode = new Jr), a;
            case 22: return e = e.stateNode, a = e._retryCache, a === null && (a = e._retryCache = new Jr), a;
            default: throw Error(A(435, e.tag));
        } }
        function Ko(e, a) { var t = Jg(e); a.forEach(function (l) { if (!t.has(l)) {
            t.add(l);
            var u = f1.bind(null, e, l);
            l.then(u, u);
        } }); }
        function qe(e, a) { var t = a.deletions; if (t !== null)
            for (var l = 0; l < t.length; l++) {
                var u = t[l], o = e, f = a, n = f;
                e: for (; n !== null;) {
                    switch (n.tag) {
                        case 27:
                            if (Ot(n.type)) {
                                ie = n.stateNode, Ne = !1;
                                break e;
                            }
                            break;
                        case 5:
                            ie = n.stateNode, Ne = !1;
                            break e;
                        case 3:
                        case 4:
                            ie = n.stateNode.containerInfo, Ne = !0;
                            break e;
                    }
                    n = n.return;
                }
                if (ie === null)
                    throw Error(A(160));
                yp(o, f, u), ie = null, Ne = !1, o = u.alternate, o !== null && (o.return = null), u.return = null;
            } if (a.subtreeFlags & 13886)
            for (a = a.child; a !== null;)
                bp(a, e), a = a.sibling; }
        var La = null;
        function bp(e, a) { var t = e.alternate, l = e.flags; switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                qe(a, e), ze(e), l & 4 && (Bt(3, e, e.return), Io(3, e), Bt(5, e, e.return));
                break;
            case 1:
                qe(a, e), ze(e), l & 512 && (ge || t === null || Ta(t, t.return)), l & 64 && Ga && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (t = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = t === null ? l : t.concat(l))));
                break;
            case 26:
                var u = La;
                if (qe(a, e), ze(e), l & 512 && (ge || t === null || Ta(t, t.return)), l & 4) {
                    var o = t !== null ? t.memoizedState : null;
                    if (l = e.memoizedState, t === null)
                        if (l === null)
                            if (e.stateNode === null) {
                                e: {
                                    l = e.type, t = e.memoizedProps, u = u.ownerDocument || u;
                                    a: switch (l) {
                                        case "title":
                                            o = u.getElementsByTagName("title")[0], (!o || o[So] || o[Me] || o.namespaceURI === "http://www.w3.org/2000/svg" || o.hasAttribute("itemprop")) && (o = u.createElement(l), u.head.insertBefore(o, u.querySelector("head > title"))), we(o, l, t), o[Me] = e, Ie(o), l = o;
                                            break e;
                                        case "link":
                                            var f = Sc("link", "href", u).get(l + (t.href || ""));
                                            if (f) {
                                                for (var n = 0; n < f.length; n++)
                                                    if (o = f[n], o.getAttribute("href") === (t.href == null || t.href === "" ? null : t.href) && o.getAttribute("rel") === (t.rel == null ? null : t.rel) && o.getAttribute("title") === (t.title == null ? null : t.title) && o.getAttribute("crossorigin") === (t.crossOrigin == null ? null : t.crossOrigin)) {
                                                        f.splice(n, 1);
                                                        break a;
                                                    }
                                            }
                                            o = u.createElement(l), we(o, l, t), u.head.appendChild(o);
                                            break;
                                        case "meta":
                                            if (f = Sc("meta", "content", u).get(l + (t.content || ""))) {
                                                for (n = 0; n < f.length; n++)
                                                    if (o = f[n], o.getAttribute("content") === (t.content == null ? null : "" + t.content) && o.getAttribute("name") === (t.name == null ? null : t.name) && o.getAttribute("property") === (t.property == null ? null : t.property) && o.getAttribute("http-equiv") === (t.httpEquiv == null ? null : t.httpEquiv) && o.getAttribute("charset") === (t.charSet == null ? null : t.charSet)) {
                                                        f.splice(n, 1);
                                                        break a;
                                                    }
                                            }
                                            o = u.createElement(l), we(o, l, t), u.head.appendChild(o);
                                            break;
                                        default: throw Error(A(468, l));
                                    }
                                    o[Me] = e, Ie(o), l = o;
                                }
                                e.stateNode = l;
                            }
                            else
                                Cc(u, e.type, e.stateNode);
                        else
                            e.stateNode = xc(u, l, e.memoizedProps);
                    else
                        o !== l ? (o === null ? t.stateNode !== null && (t = t.stateNode, t.parentNode.removeChild(t)) : o.count--, l === null ? Cc(u, e.type, e.stateNode) : xc(u, l, e.memoizedProps)) : l === null && e.stateNode !== null && an(e, e.memoizedProps, t.memoizedProps);
                }
                break;
            case 27:
                qe(a, e), ze(e), l & 512 && (ge || t === null || Ta(t, t.return)), t !== null && l & 4 && an(e, e.memoizedProps, t.memoizedProps);
                break;
            case 5:
                if (qe(a, e), ze(e), l & 512 && (ge || t === null || Ta(t, t.return)), e.flags & 32) {
                    u = e.stateNode;
                    try {
                        Ql(u, "");
                    }
                    catch (D) {
                        W(e, e.return, D);
                    }
                }
                l & 4 && e.stateNode != null && (u = e.memoizedProps, an(e, u, t !== null ? t.memoizedProps : u)), l & 1024 && (ln = !0);
                break;
            case 6:
                if (qe(a, e), ze(e), l & 4) {
                    if (e.stateNode === null)
                        throw Error(A(162));
                    l = e.memoizedProps, t = e.stateNode;
                    try {
                        t.nodeValue = l;
                    }
                    catch (D) {
                        W(e, e.return, D);
                    }
                }
                break;
            case 3:
                if (hf = null, u = La, La = Gf(a.containerInfo), qe(a, e), La = u, ze(e), l & 4 && t !== null && t.memoizedState.isDehydrated)
                    try {
                        au(a.containerInfo);
                    }
                    catch (D) {
                        W(e, e.return, D);
                    }
                ln && (ln = !1, Ap(e));
                break;
            case 4:
                l = La, La = Gf(e.stateNode.containerInfo), qe(a, e), ze(e), La = l;
                break;
            case 12:
                qe(a, e), ze(e);
                break;
            case 31:
                qe(a, e), ze(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Ko(e, l)));
                break;
            case 13:
                qe(a, e), ze(e), e.child.flags & 8192 && e.memoizedState !== null != (t !== null && t.memoizedState !== null) && (ud = Ze()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Ko(e, l)));
                break;
            case 22:
                u = e.memoizedState !== null;
                var s = t !== null && t.memoizedState !== null, r = Ga, g = ge;
                if (Ga = r || u, ge = g || s, qe(a, e), ge = g, Ga = r, ze(e), l & 8192)
                    e: for (a = e.stateNode, a._visibility = u ? a._visibility & -2 : a._visibility | 1, u && (t === null || s || Ga || ge || Vt(e)), t = null, a = e;;) {
                        if (a.tag === 5 || a.tag === 26) {
                            if (t === null) {
                                s = t = a;
                                try {
                                    if (o = s.stateNode, u)
                                        f = o.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                                    else {
                                        n = s.stateNode;
                                        var p = s.memoizedProps.style, i = p != null && p.hasOwnProperty("display") ? p.display : null;
                                        n.style.display = i == null || typeof i == "boolean" ? "" : ("" + i).trim();
                                    }
                                }
                                catch (D) {
                                    W(s, s.return, D);
                                }
                            }
                        }
                        else if (a.tag === 6) {
                            if (t === null) {
                                s = a;
                                try {
                                    s.stateNode.nodeValue = u ? "" : s.memoizedProps;
                                }
                                catch (D) {
                                    W(s, s.return, D);
                                }
                            }
                        }
                        else if (a.tag === 18) {
                            if (t === null) {
                                s = a;
                                try {
                                    var C = s.stateNode;
                                    u ? mc(C, !0) : mc(s.stateNode, !1);
                                }
                                catch (D) {
                                    W(s, s.return, D);
                                }
                            }
                        }
                        else if ((a.tag !== 22 && a.tag !== 23 || a.memoizedState === null || a === e) && a.child !== null) {
                            a.child.return = a, a = a.child;
                            continue;
                        }
                        if (a === e)
                            break e;
                        for (; a.sibling === null;) {
                            if (a.return === null || a.return === e)
                                break e;
                            t === a && (t = null), a = a.return;
                        }
                        t === a && (t = null), a.sibling.return = a.return, a = a.sibling;
                    }
                l & 4 && (l = e.updateQueue, l !== null && (t = l.retryQueue, t !== null && (l.retryQueue = null, Ko(e, t))));
                break;
            case 19:
                qe(a, e), ze(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Ko(e, l)));
                break;
            case 30: break;
            case 21: break;
            default: qe(a, e), ze(e);
        } }
        function ze(e) { var a = e.flags; if (a & 2) {
            try {
                for (var t, l = e.return; l !== null;) {
                    if (gp(l)) {
                        t = l;
                        break;
                    }
                    l = l.return;
                }
                if (t == null)
                    throw Error(A(160));
                switch (t.tag) {
                    case 27:
                        var u = t.stateNode, o = tn(e);
                        Uf(e, o, u);
                        break;
                    case 5:
                        var f = t.stateNode;
                        t.flags & 32 && (Ql(f, ""), t.flags &= -33);
                        var n = tn(e);
                        Uf(e, n, f);
                        break;
                    case 3:
                    case 4:
                        var s = t.stateNode.containerInfo, r = tn(e);
                        Xn(e, r, s);
                        break;
                    default: throw Error(A(161));
                }
            }
            catch (g) {
                W(e, e.return, g);
            }
            e.flags &= -3;
        } a & 4096 && (e.flags &= -4097); }
        function Ap(e) { if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null;) {
                var a = e;
                Ap(a), a.tag === 5 && a.flags & 1024 && a.stateNode.reset(), e = e.sibling;
            } }
        function Ha(e, a) { if (a.subtreeFlags & 8772)
            for (a = a.child; a !== null;)
                Sp(e, a.alternate, a), a = a.sibling; }
        function Vt(e) { for (e = e.child; e !== null;) {
            var a = e;
            switch (a.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    Bt(4, a, a.return), Vt(a);
                    break;
                case 1:
                    Ta(a, a.return);
                    var t = a.stateNode;
                    typeof t.componentWillUnmount == "function" && hp(a, a.return, t), Vt(a);
                    break;
                case 27: $u(a.stateNode);
                case 26:
                case 5:
                    Ta(a, a.return), Vt(a);
                    break;
                case 22:
                    a.memoizedState === null && Vt(a);
                    break;
                case 30:
                    Vt(a);
                    break;
                default: Vt(a);
            }
            e = e.sibling;
        } }
        function _a(e, a, t) { for (t = t && (a.subtreeFlags & 8772) !== 0, a = a.child; a !== null;) {
            var l = a.alternate, u = e, o = a, f = o.flags;
            switch (o.tag) {
                case 0:
                case 11:
                case 15:
                    _a(u, o, t), Io(4, o);
                    break;
                case 1:
                    if (_a(u, o, t), l = o, u = l.stateNode, typeof u.componentDidMount == "function")
                        try {
                            u.componentDidMount();
                        }
                        catch (r) {
                            W(l, l.return, r);
                        }
                    if (l = o, u = l.updateQueue, u !== null) {
                        var n = l.stateNode;
                        try {
                            var s = u.shared.hiddenCallbacks;
                            if (s !== null)
                                for (u.shared.hiddenCallbacks = null, u = 0; u < s.length; u++)
                                    vm(s[u], n);
                        }
                        catch (r) {
                            W(l, l.return, r);
                        }
                    }
                    t && f & 64 && pp(o), ju(o, o.return);
                    break;
                case 27: xp(o);
                case 26:
                case 5:
                    _a(u, o, t), t && l === null && f & 4 && Lp(o), ju(o, o.return);
                    break;
                case 12:
                    _a(u, o, t);
                    break;
                case 31:
                    _a(u, o, t), t && f & 4 && vp(u, o);
                    break;
                case 13:
                    _a(u, o, t), t && f & 4 && Ip(u, o);
                    break;
                case 22:
                    o.memoizedState === null && _a(u, o, t), ju(o, o.return);
                    break;
                case 30: break;
                default: _a(u, o, t);
            }
            a = a.sibling;
        } }
        function Ps(e, a) { var t = null; e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), e = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (e = a.memoizedState.cachePool.pool), e !== t && (e != null && e.refCount++, t != null && yo(t)); }
        function Xs(e, a) { e = null, a.alternate !== null && (e = a.alternate.memoizedState.cache), a = a.memoizedState.cache, a !== e && (a.refCount++, e != null && yo(e)); }
        function ha(e, a, t, l) { if (a.subtreeFlags & 10256)
            for (a = a.child; a !== null;)
                Mp(e, a, t, l), a = a.sibling; }
        function Mp(e, a, t, l) { var u = a.flags; switch (a.tag) {
            case 0:
            case 11:
            case 15:
                ha(e, a, t, l), u & 2048 && Io(9, a);
                break;
            case 1:
                ha(e, a, t, l);
                break;
            case 3:
                ha(e, a, t, l), u & 2048 && (e = null, a.alternate !== null && (e = a.alternate.memoizedState.cache), a = a.memoizedState.cache, a !== e && (a.refCount++, e != null && yo(e)));
                break;
            case 12:
                if (u & 2048) {
                    ha(e, a, t, l), e = a.stateNode;
                    try {
                        var o = a.memoizedProps, f = o.id, n = o.onPostCommit;
                        typeof n == "function" && n(f, a.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
                    }
                    catch (s) {
                        W(a, a.return, s);
                    }
                }
                else
                    ha(e, a, t, l);
                break;
            case 31:
                ha(e, a, t, l);
                break;
            case 13:
                ha(e, a, t, l);
                break;
            case 23: break;
            case 22:
                o = a.stateNode, f = a.alternate, a.memoizedState !== null ? o._visibility & 2 ? ha(e, a, t, l) : Ku(e, a) : o._visibility & 2 ? ha(e, a, t, l) : (o._visibility |= 2, bl(e, a, t, l, (a.subtreeFlags & 10256) !== 0 || !1)), u & 2048 && Ps(f, a);
                break;
            case 24:
                ha(e, a, t, l), u & 2048 && Xs(a.alternate, a);
                break;
            default: ha(e, a, t, l);
        } }
        function bl(e, a, t, l, u) { for (u = u && ((a.subtreeFlags & 10256) !== 0 || !1), a = a.child; a !== null;) {
            var o = e, f = a, n = t, s = l, r = f.flags;
            switch (f.tag) {
                case 0:
                case 11:
                case 15:
                    bl(o, f, n, s, u), Io(8, f);
                    break;
                case 23: break;
                case 22:
                    var g = f.stateNode;
                    f.memoizedState !== null ? g._visibility & 2 ? bl(o, f, n, s, u) : Ku(o, f) : (g._visibility |= 2, bl(o, f, n, s, u)), u && r & 2048 && Ps(f.alternate, f);
                    break;
                case 24:
                    bl(o, f, n, s, u), u && r & 2048 && Xs(f.alternate, f);
                    break;
                default: bl(o, f, n, s, u);
            }
            a = a.sibling;
        } }
        function Ku(e, a) { if (a.subtreeFlags & 10256)
            for (a = a.child; a !== null;) {
                var t = e, l = a, u = l.flags;
                switch (l.tag) {
                    case 22:
                        Ku(t, l), u & 2048 && Ps(l.alternate, l);
                        break;
                    case 24:
                        Ku(t, l), u & 2048 && Xs(l.alternate, l);
                        break;
                    default: Ku(t, l);
                }
                a = a.sibling;
            } }
        var _u = 8192;
        function Il(e, a, t) { if (e.subtreeFlags & _u)
            for (e = e.child; e !== null;)
                Tp(e, a, t), e = e.sibling; }
        function Tp(e, a, t) { switch (e.tag) {
            case 26:
                Il(e, a, t), e.flags & _u && e.memoizedState !== null && E1(t, La, e.memoizedState, e.memoizedProps);
                break;
            case 5:
                Il(e, a, t);
                break;
            case 3:
            case 4:
                var l = La;
                La = Gf(e.stateNode.containerInfo), Il(e, a, t), La = l;
                break;
            case 22:
                e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = _u, _u = 16777216, Il(e, a, t), _u = l) : Il(e, a, t));
                break;
            default: Il(e, a, t);
        } }
        function Dp(e) { var a = e.alternate; if (a !== null && (e = a.child, e !== null)) {
            a.child = null;
            do
                a = e.sibling, e.sibling = null, e = a;
            while (e !== null);
        } }
        function Ou(e) { var a = e.deletions; if ((e.flags & 16) !== 0) {
            if (a !== null)
                for (var t = 0; t < a.length; t++) {
                    var l = a[t];
                    ve = l, Bp(l, e);
                }
            Dp(e);
        } if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null;)
                wp(e), e = e.sibling; }
        function wp(e) { switch (e.tag) {
            case 0:
            case 11:
            case 15:
                Ou(e), e.flags & 2048 && Bt(9, e, e.return);
                break;
            case 3:
                Ou(e);
                break;
            case 12:
                Ou(e);
                break;
            case 22:
                var a = e.stateNode;
                e.memoizedState !== null && a._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (a._visibility &= -3, mf(e)) : Ou(e);
                break;
            default: Ou(e);
        } }
        function mf(e) { var a = e.deletions; if ((e.flags & 16) !== 0) {
            if (a !== null)
                for (var t = 0; t < a.length; t++) {
                    var l = a[t];
                    ve = l, Bp(l, e);
                }
            Dp(e);
        } for (e = e.child; e !== null;) {
            switch (a = e, a.tag) {
                case 0:
                case 11:
                case 15:
                    Bt(8, a, a.return), mf(a);
                    break;
                case 22:
                    t = a.stateNode, t._visibility & 2 && (t._visibility &= -3, mf(a));
                    break;
                default: mf(a);
            }
            e = e.sibling;
        } }
        function Bp(e, a) { for (; ve !== null;) {
            var t = ve;
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    Bt(8, t, a);
                    break;
                case 23:
                case 22:
                    if (t.memoizedState !== null && t.memoizedState.cachePool !== null) {
                        var l = t.memoizedState.cachePool.pool;
                        l != null && l.refCount++;
                    }
                    break;
                case 24: yo(t.memoizedState.cache);
            }
            if (l = t.child, l !== null)
                l.return = t, ve = l;
            else
                e: for (t = e; ve !== null;) {
                    l = ve;
                    var u = l.sibling, o = l.return;
                    if (Cp(l), l === t) {
                        ve = null;
                        break e;
                    }
                    if (u !== null) {
                        u.return = o, ve = u;
                        break e;
                    }
                    ve = o;
                }
        } }
        var Wg = { getCacheForType: function (e) { var a = De(xe), t = a.data.get(e); return t === void 0 && (t = e(), a.data.set(e, t)), t; }, cacheSignal: function () { return De(xe).controller.signal; } }, $g = typeof WeakMap == "function" ? WeakMap : Map, Y = 0, te = null, G = null, P = 0, J = 0, Pe = null, Lt = !1, fu = !1, Ys = !1, $a = 0, me = 0, Rt = 0, Zt = 0, Qs = 0, Qe = 0, Jl = 0, Ju = null, He = null, Yn = !1, ud = 0, Rp = 0, Ef = 1 / 0, qf = null, It = null, Ce = 0, bt = null, Wl = null, Za = 0, Qn = 0, Zn = null, kp = null, Wu = 0, jn = null;
        function Je() { return (Y & 2) !== 0 && P !== 0 ? P & -P : E.T !== null ? js() : Fc(); }
        function Op() { if (Qe === 0)
            if ((P & 536870912) === 0 || X) {
                var e = _o;
                _o <<= 1, (_o & 3932160) === 0 && (_o = 262144), Qe = e;
            }
            else
                Qe = 536870912; return e = $e.current, e !== null && (e.flags |= 32), Qe; }
        function _e(e, a, t) { (e === te && (J === 2 || J === 9) || e.cancelPendingCommit !== null) && ($l(e, 0), gt(e, P, Qe, !1)), xo(e, t), ((Y & 2) === 0 || e !== te) && (e === te && ((Y & 2) === 0 && (Zt |= t), me === 4 && gt(e, P, Qe, !1)), Ba(e)); }
        function Up(e, a, t) { if ((Y & 6) !== 0)
            throw Error(A(327)); var l = !t && (a & 127) === 0 && (a & e.expiredLanes) === 0 || go(e, a), u = l ? t1(e, a) : un(e, a, !0), o = l; do {
            if (u === 0) {
                fu && !l && gt(e, a, 0, !1);
                break;
            }
            else {
                if (t = e.current.alternate, o && !e1(t)) {
                    u = un(e, a, !1), o = !1;
                    continue;
                }
                if (u === 2) {
                    if (o = a, e.errorRecoveryDisabledLanes & o)
                        var f = 0;
                    else
                        f = e.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
                    if (f !== 0) {
                        a = f;
                        e: {
                            var n = e;
                            u = Ju;
                            var s = n.current.memoizedState.isDehydrated;
                            if (s && ($l(n, f).flags |= 256), f = un(n, f, !1), f !== 2) {
                                if (Ys && !s) {
                                    n.errorRecoveryDisabledLanes |= o, Zt |= o, u = 4;
                                    break e;
                                }
                                o = He, He = u, o !== null && (He === null ? He = o : He.push.apply(He, o));
                            }
                            u = f;
                        }
                        if (o = !1, u !== 2)
                            continue;
                    }
                }
                if (u === 1) {
                    $l(e, 0), gt(e, a, 0, !0);
                    break;
                }
                e: {
                    switch (l = e, o = u, o) {
                        case 0:
                        case 1: throw Error(A(345));
                        case 4: if ((a & 4194048) !== a)
                            break;
                        case 6:
                            gt(l, a, Qe, !Lt);
                            break e;
                        case 2:
                            He = null;
                            break;
                        case 3:
                        case 5: break;
                        default: throw Error(A(329));
                    }
                    if ((a & 62914560) === a && (u = ud + 300 - Ze(), 10 < u)) {
                        if (gt(l, a, Qe, !Lt), Qf(l, 0, !0) !== 0)
                            break e;
                        Za = a, l.timeoutHandle = eh(Wr.bind(null, l, t, He, qf, Yn, a, Qe, Zt, Jl, Lt, o, "Throttled", -0, 0), u);
                        break e;
                    }
                    Wr(l, t, He, qf, Yn, a, Qe, Zt, Jl, Lt, o, null, -0, 0);
                }
            }
            break;
        } while (!0); Ba(e); }
        function Wr(e, a, t, l, u, o, f, n, s, r, g, p, i, C) { if (e.timeoutHandle = -1, p = a.subtreeFlags, p & 8192 || (p & 16785408) === 16785408) {
            p = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: !0, waitingForViewTransition: !1, unsuspend: Pa }, Tp(a, o, p);
            var D = (o & 62914560) === o ? ud - Ze() : (o & 4194048) === o ? Rp - Ze() : 0;
            if (D = q1(p, D), D !== null) {
                Za = o, e.cancelPendingCommit = D(ec.bind(null, e, a, o, t, l, u, f, n, s, g, p, null, i, C)), gt(e, o, f, !r);
                return;
            }
        } ec(e, a, o, t, l, u, f, n, s); }
        function e1(e) { for (var a = e;;) {
            var t = a.tag;
            if ((t === 0 || t === 11 || t === 15) && a.flags & 16384 && (t = a.updateQueue, t !== null && (t = t.stores, t !== null)))
                for (var l = 0; l < t.length; l++) {
                    var u = t[l], o = u.getSnapshot;
                    u = u.value;
                    try {
                        if (!We(o(), u))
                            return !1;
                    }
                    catch {
                        return !1;
                    }
                }
            if (t = a.child, a.subtreeFlags & 16384 && t !== null)
                t.return = a, a = t;
            else {
                if (a === e)
                    break;
                for (; a.sibling === null;) {
                    if (a.return === null || a.return === e)
                        return !0;
                    a = a.return;
                }
                a.sibling.return = a.return, a = a.sibling;
            }
        } return !0; }
        function gt(e, a, t, l) { a &= ~Qs, a &= ~Zt, e.suspendedLanes |= a, e.pingedLanes &= ~a, l && (e.warmLanes |= a), l = e.expirationTimes; for (var u = a; 0 < u;) {
            var o = 31 - Ke(u), f = 1 << o;
            l[o] = -1, u &= ~f;
        } t !== 0 && Nc(e, t, a); }
        function od() { return (Y & 6) === 0 ? (bo(0, !1), !1) : !0; }
        function Zs() { if (G !== null) {
            if (J === 0)
                var e = G.return;
            else
                e = G, Xa = ul = null, Os(e), Gl = null, fo = 0, e = G;
            for (; e !== null;)
                mp(e.alternate, e), e = e.return;
            G = null;
        } }
        function $l(e, a) { var t = e.timeoutHandle; t !== -1 && (e.timeoutHandle = -1, x1(t)), t = e.cancelPendingCommit, t !== null && (e.cancelPendingCommit = null, t()), Za = 0, Zs(), te = e, G = t = Ya(e.current, null), P = a, J = 0, Pe = null, Lt = !1, fu = go(e, a), Ys = !1, Jl = Qe = Qs = Zt = Rt = me = 0, He = Ju = null, Yn = !1, (a & 8) !== 0 && (a |= a & 32); var l = e.entangledLanes; if (l !== 0)
            for (e = e.entanglements, l &= a; 0 < l;) {
                var u = 31 - Ke(l), o = 1 << u;
                a |= e[u], l &= ~o;
            } return $a = a, Jf(), t; }
        function Ep(e, a) { N = null, E.H = so, a === ou || a === $f ? (a = Br(), J = 3) : a === Ms ? (a = Br(), J = 4) : J = a === Gs ? 8 : a !== null && typeof a == "object" && typeof a.then == "function" ? 6 : 1, Pe = a, G === null && (me = 1, kf(e, na(a, e.current))); }
        function qp() { var e = $e.current; return e === null ? !0 : (P & 4194048) === P ? ia === null : (P & 62914560) === P || (P & 536870912) !== 0 ? e === ia : !1; }
        function zp() { var e = E.H; return E.H = so, e === null ? so : e; }
        function Np() { var e = E.A; return E.A = Wg, e; }
        function zf() { me = 4, Lt || (P & 4194048) !== P && $e.current !== null || (fu = !0), (Rt & 134217727) === 0 && (Zt & 134217727) === 0 || te === null || gt(te, P, Qe, !1); }
        function un(e, a, t) { var l = Y; Y |= 2; var u = zp(), o = Np(); (te !== e || P !== a) && (qf = null, $l(e, a)), a = !1; var f = me; e: do
            try {
                if (J !== 0 && G !== null) {
                    var n = G, s = Pe;
                    switch (J) {
                        case 8:
                            Zs(), f = 6;
                            break e;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            $e.current === null && (a = !0);
                            var r = J;
                            if (J = 0, Pe = null, zl(e, n, s, r), t && fu) {
                                f = 0;
                                break e;
                            }
                            break;
                        default: r = J, J = 0, Pe = null, zl(e, n, s, r);
                    }
                }
                a1(), f = me;
                break;
            }
            catch (g) {
                Ep(e, g);
            }
        while (!0); return a && e.shellSuspendCounter++, Xa = ul = null, Y = l, E.H = u, E.A = o, G === null && (te = null, P = 0, Jf()), f; }
        function a1() { for (; G !== null;)
            Hp(G); }
        function t1(e, a) { var t = Y; Y |= 2; var l = zp(), u = Np(); te !== e || P !== a ? (qf = null, Ef = Ze() + 500, $l(e, a)) : fu = go(e, a); e: do
            try {
                if (J !== 0 && G !== null) {
                    a = G;
                    var o = Pe;
                    a: switch (J) {
                        case 1:
                            J = 0, Pe = null, zl(e, a, o, 1);
                            break;
                        case 2:
                        case 9:
                            if (wr(o)) {
                                J = 0, Pe = null, $r(a);
                                break;
                            }
                            a = function () { J !== 2 && J !== 9 || te !== e || (J = 7), Ba(e); }, o.then(a, a);
                            break e;
                        case 3:
                            J = 7;
                            break e;
                        case 4:
                            J = 5;
                            break e;
                        case 7:
                            wr(o) ? (J = 0, Pe = null, $r(a)) : (J = 0, Pe = null, zl(e, a, o, 7));
                            break;
                        case 5:
                            var f = null;
                            switch (G.tag) {
                                case 26: f = G.memoizedState;
                                case 5:
                                case 27:
                                    var n = G;
                                    if (f ? oh(f) : n.stateNode.complete) {
                                        J = 0, Pe = null;
                                        var s = n.sibling;
                                        if (s !== null)
                                            G = s;
                                        else {
                                            var r = n.return;
                                            r !== null ? (G = r, fd(r)) : G = null;
                                        }
                                        break a;
                                    }
                            }
                            J = 0, Pe = null, zl(e, a, o, 5);
                            break;
                        case 6:
                            J = 0, Pe = null, zl(e, a, o, 6);
                            break;
                        case 8:
                            Zs(), me = 6;
                            break e;
                        default: throw Error(A(462));
                    }
                }
                l1();
                break;
            }
            catch (g) {
                Ep(e, g);
            }
        while (!0); return Xa = ul = null, E.H = l, E.A = u, Y = t, G !== null ? 0 : (te = null, P = 0, Jf(), me); }
        function l1() { for (; G !== null && !ML();)
            Hp(G); }
        function Hp(e) { var a = cp(e.alternate, e, $a); e.memoizedProps = e.pendingProps, a === null ? fd(e) : G = a; }
        function $r(e) { var a = e, t = a.alternate; switch (a.tag) {
            case 15:
            case 0:
                a = Yr(t, a, a.pendingProps, a.type, void 0, P);
                break;
            case 11:
                a = Yr(t, a, a.pendingProps, a.type.render, a.ref, P);
                break;
            case 5: Os(a);
            default: mp(t, a), a = G = mm(a, $a), a = cp(t, a, $a);
        } e.memoizedProps = e.pendingProps, a === null ? fd(e) : G = a; }
        function zl(e, a, t, l) { Xa = ul = null, Os(a), Gl = null, fo = 0; var u = a.return; try {
            if (Xg(e, u, a, t, P)) {
                me = 1, kf(e, na(t, e.current)), G = null;
                return;
            }
        }
        catch (o) {
            if (u !== null)
                throw G = u, o;
            me = 1, kf(e, na(t, e.current)), G = null;
            return;
        } a.flags & 32768 ? (X || l === 1 ? e = !0 : fu || (P & 536870912) !== 0 ? e = !1 : (Lt = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = $e.current, l !== null && l.tag === 13 && (l.flags |= 16384))), _p(a, e)) : fd(a); }
        function fd(e) { var a = e; do {
            if ((a.flags & 32768) !== 0) {
                _p(a, Lt);
                return;
            }
            e = a.return;
            var t = Zg(a.alternate, a, $a);
            if (t !== null) {
                G = t;
                return;
            }
            if (a = a.sibling, a !== null) {
                G = a;
                return;
            }
            G = a = e;
        } while (a !== null); me === 0 && (me = 5); }
        function _p(e, a) { do {
            var t = jg(e.alternate, e);
            if (t !== null) {
                t.flags &= 32767, G = t;
                return;
            }
            if (t = e.return, t !== null && (t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null), !a && (e = e.sibling, e !== null)) {
                G = e;
                return;
            }
            G = e = t;
        } while (e !== null); me = 6, G = null; }
        function ec(e, a, t, l, u, o, f, n, s) { e.cancelPendingCommit = null; do
            dd();
        while (Ce !== 0); if ((Y & 6) !== 0)
            throw Error(A(327)); if (a !== null) {
            if (a === e.current)
                throw Error(A(177));
            if (o = a.lanes | a.childLanes, o |= Ss, qL(e, t, o, f, n, s), e === te && (G = te = null, P = 0), Wl = a, bt = e, Za = t, Qn = o, Zn = u, kp = l, (a.subtreeFlags & 10256) !== 0 || (a.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, d1(yf, function () { return Xp(), null; })) : (e.callbackNode = null, e.callbackPriority = 0), l = (a.flags & 13878) !== 0, (a.subtreeFlags & 13878) !== 0 || l) {
                l = E.T, E.T = null, u = Q.p, Q.p = 2, f = Y, Y |= 4;
                try {
                    Kg(e, a, t);
                }
                finally {
                    Y = f, Q.p = u, E.T = l;
                }
            }
            Ce = 1, Fp(), Gp(), Vp();
        } }
        function Fp() { if (Ce === 1) {
            Ce = 0;
            var e = bt, a = Wl, t = (a.flags & 13878) !== 0;
            if ((a.subtreeFlags & 13878) !== 0 || t) {
                t = E.T, E.T = null;
                var l = Q.p;
                Q.p = 2;
                var u = Y;
                Y |= 4;
                try {
                    bp(a, e);
                    var o = $n, f = om(e.containerInfo), n = o.focusedElem, s = o.selectionRange;
                    if (f !== n && n && n.ownerDocument && um(n.ownerDocument.documentElement, n)) {
                        if (s !== null && xs(n)) {
                            var r = s.start, g = s.end;
                            if (g === void 0 && (g = r), "selectionStart" in n)
                                n.selectionStart = r, n.selectionEnd = Math.min(g, n.value.length);
                            else {
                                var p = n.ownerDocument || document, i = p && p.defaultView || window;
                                if (i.getSelection) {
                                    var C = i.getSelection(), D = n.textContent.length, B = Math.min(s.start, D), q = s.end === void 0 ? B : Math.min(s.end, D);
                                    !C.extend && B > q && (f = q, q = B, B = f);
                                    var h = vr(n, B), m = vr(n, q);
                                    if (h && m && (C.rangeCount !== 1 || C.anchorNode !== h.node || C.anchorOffset !== h.offset || C.focusNode !== m.node || C.focusOffset !== m.offset)) {
                                        var x = p.createRange();
                                        x.setStart(h.node, h.offset), C.removeAllRanges(), B > q ? (C.addRange(x), C.extend(m.node, m.offset)) : (x.setEnd(m.node, m.offset), C.addRange(x));
                                    }
                                }
                            }
                        }
                        for (p = [], C = n; C = C.parentNode;)
                            C.nodeType === 1 && p.push({ element: C, left: C.scrollLeft, top: C.scrollTop });
                        for (typeof n.focus == "function" && n.focus(), n = 0; n < p.length; n++) {
                            var I = p[n];
                            I.element.scrollLeft = I.left, I.element.scrollTop = I.top;
                        }
                    }
                    Xf = !!Wn, $n = Wn = null;
                }
                finally {
                    Y = u, Q.p = l, E.T = t;
                }
            }
            e.current = a, Ce = 2;
        } }
        function Gp() { if (Ce === 2) {
            Ce = 0;
            var e = bt, a = Wl, t = (a.flags & 8772) !== 0;
            if ((a.subtreeFlags & 8772) !== 0 || t) {
                t = E.T, E.T = null;
                var l = Q.p;
                Q.p = 2;
                var u = Y;
                Y |= 4;
                try {
                    Sp(e, a.alternate, a);
                }
                finally {
                    Y = u, Q.p = l, E.T = t;
                }
            }
            Ce = 3;
        } }
        function Vp() { if (Ce === 4 || Ce === 3) {
            Ce = 0, TL();
            var e = bt, a = Wl, t = Za, l = kp;
            (a.subtreeFlags & 10256) !== 0 || (a.flags & 10256) !== 0 ? Ce = 5 : (Ce = 0, Wl = bt = null, Pp(e, e.pendingLanes));
            var u = e.pendingLanes;
            if (u === 0 && (It = null), rs(t), a = a.stateNode, je && typeof je.onCommitFiberRoot == "function")
                try {
                    je.onCommitFiberRoot(Lo, a, void 0, (a.current.flags & 128) === 128);
                }
                catch { }
            if (l !== null) {
                a = E.T, u = Q.p, Q.p = 2, E.T = null;
                try {
                    for (var o = e.onRecoverableError, f = 0; f < l.length; f++) {
                        var n = l[f];
                        o(n.value, { componentStack: n.stack });
                    }
                }
                finally {
                    E.T = a, Q.p = u;
                }
            }
            (Za & 3) !== 0 && dd(), Ba(e), u = e.pendingLanes, (t & 261930) !== 0 && (u & 42) !== 0 ? e === jn ? Wu++ : (Wu = 0, jn = e) : Wu = 0, bo(0, !1);
        } }
        function Pp(e, a) { (e.pooledCacheLanes &= a) === 0 && (a = e.pooledCache, a != null && (e.pooledCache = null, yo(a))); }
        function dd() { return Fp(), Gp(), Vp(), Xp(); }
        function Xp() { if (Ce !== 5)
            return !1; var e = bt, a = Qn; Qn = 0; var t = rs(Za), l = E.T, u = Q.p; try {
            Q.p = 32 > t ? 32 : t, E.T = null, t = Zn, Zn = null;
            var o = bt, f = Za;
            if (Ce = 0, Wl = bt = null, Za = 0, (Y & 6) !== 0)
                throw Error(A(331));
            var n = Y;
            if (Y |= 4, wp(o.current), Mp(o, o.current, f, t), Y = n, bo(0, !1), je && typeof je.onPostCommitFiberRoot == "function")
                try {
                    je.onPostCommitFiberRoot(Lo, o);
                }
                catch { }
            return !0;
        }
        finally {
            Q.p = u, E.T = l, Pp(e, a);
        } }
        function ac(e, a, t) { a = na(t, a), a = Gn(e.stateNode, a, 2), e = vt(e, a, 2), e !== null && (xo(e, 2), Ba(e)); }
        function W(e, a, t) { if (e.tag === 3)
            ac(e, e, t);
        else
            for (; a !== null;) {
                if (a.tag === 3) {
                    ac(a, e, t);
                    break;
                }
                else if (a.tag === 1) {
                    var l = a.stateNode;
                    if (typeof a.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (It === null || !It.has(l))) {
                        e = na(t, e), t = fp(2), l = vt(a, t, 2), l !== null && (dp(t, l, a, e), xo(l, 2), Ba(l));
                        break;
                    }
                }
                a = a.return;
            } }
        function on(e, a, t) { var l = e.pingCache; if (l === null) {
            l = e.pingCache = new $g;
            var u = new Set;
            l.set(a, u);
        }
        else
            u = l.get(a), u === void 0 && (u = new Set, l.set(a, u)); u.has(t) || (Ys = !0, u.add(t), e = u1.bind(null, e, a, t), a.then(e, e)); }
        function u1(e, a, t) { var l = e.pingCache; l !== null && l.delete(a), e.pingedLanes |= e.suspendedLanes & t, e.warmLanes &= ~t, te === e && (P & t) === t && (me === 4 || me === 3 && (P & 62914560) === P && 300 > Ze() - ud ? (Y & 2) === 0 && $l(e, 0) : Qs |= t, Jl === P && (Jl = 0)), Ba(e); }
        function Yp(e, a) { a === 0 && (a = zc()), e = ll(e, a), e !== null && (xo(e, a), Ba(e)); }
        function o1(e) { var a = e.memoizedState, t = 0; a !== null && (t = a.retryLane), Yp(e, t); }
        function f1(e, a) { var t = 0; switch (e.tag) {
            case 31:
            case 13:
                var l = e.stateNode, u = e.memoizedState;
                u !== null && (t = u.retryLane);
                break;
            case 19:
                l = e.stateNode;
                break;
            case 22:
                l = e.stateNode._retryCache;
                break;
            default: throw Error(A(314));
        } l !== null && l.delete(a), Yp(e, t); }
        function d1(e, a) { return ss(e, a); }
        var Nf = null, Al = null, Kn = !1, Hf = !1, fn = !1, xt = 0;
        function Ba(e) { e !== Al && e.next === null && (Al === null ? Nf = Al = e : Al = Al.next = e), Hf = !0, Kn || (Kn = !0, s1()); }
        function bo(e, a) { if (!fn && Hf) {
            fn = !0;
            do
                for (var t = !1, l = Nf; l !== null;) {
                    if (!a)
                        if (e !== 0) {
                            var u = l.pendingLanes;
                            if (u === 0)
                                var o = 0;
                            else {
                                var f = l.suspendedLanes, n = l.pingedLanes;
                                o = (1 << 31 - Ke(42 | e) + 1) - 1, o &= u & ~(f & ~n), o = o & 201326741 ? o & 201326741 | 1 : o ? o | 2 : 0;
                            }
                            o !== 0 && (t = !0, tc(l, o));
                        }
                        else
                            o = P, o = Qf(l, l === te ? o : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), (o & 3) === 0 || go(l, o) || (t = !0, tc(l, o));
                    l = l.next;
                }
            while (t);
            fn = !1;
        } }
        function n1() { Qp(); }
        function Qp() { Hf = Kn = !1; var e = 0; xt !== 0 && g1() && (e = xt); for (var a = Ze(), t = null, l = Nf; l !== null;) {
            var u = l.next, o = Zp(l, a);
            o === 0 ? (l.next = null, t === null ? Nf = u : t.next = u, u === null && (Al = t)) : (t = l, (e !== 0 || (o & 3) !== 0) && (Hf = !0)), l = u;
        } Ce !== 0 && Ce !== 5 || bo(e, !1), xt !== 0 && (xt = 0); }
        function Zp(e, a) { for (var t = e.suspendedLanes, l = e.pingedLanes, u = e.expirationTimes, o = e.pendingLanes & -62914561; 0 < o;) {
            var f = 31 - Ke(o), n = 1 << f, s = u[f];
            s === -1 ? ((n & t) === 0 || (n & l) !== 0) && (u[f] = EL(n, a)) : s <= a && (e.expiredLanes |= n), o &= ~n;
        } if (a = te, t = P, t = Qf(e, e === a ? t : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), l = e.callbackNode, t === 0 || e === a && (J === 2 || J === 9) || e.cancelPendingCommit !== null)
            return l !== null && l !== null && Ed(l), e.callbackNode = null, e.callbackPriority = 0; if ((t & 3) === 0 || go(e, t)) {
            if (a = t & -t, a === e.callbackPriority)
                return a;
            switch (l !== null && Ed(l), rs(t)) {
                case 2:
                case 8:
                    t = Ec;
                    break;
                case 32:
                    t = yf;
                    break;
                case 268435456:
                    t = qc;
                    break;
                default: t = yf;
            }
            return l = jp.bind(null, e), t = ss(t, l), e.callbackPriority = a, e.callbackNode = t, a;
        } return l !== null && l !== null && Ed(l), e.callbackPriority = 2, e.callbackNode = null, 2; }
        function jp(e, a) { if (Ce !== 0 && Ce !== 5)
            return e.callbackNode = null, e.callbackPriority = 0, null; var t = e.callbackNode; if (dd() && e.callbackNode !== t)
            return null; var l = P; return l = Qf(e, e === te ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), l === 0 ? null : (Up(e, l, a), Zp(e, Ze()), e.callbackNode != null && e.callbackNode === t ? jp.bind(null, e) : null); }
        function tc(e, a) { if (dd())
            return null; Up(e, a, !0); }
        function s1() { S1(function () { (Y & 6) !== 0 ? ss(Uc, n1) : Qp(); }); }
        function js() { if (xt === 0) {
            var e = Zl;
            e === 0 && (e = Ho, Ho <<= 1, (Ho & 261888) === 0 && (Ho = 256)), xt = e;
        } return xt; }
        function lc(e) { return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : lf("" + e); }
        function uc(e, a) { var t = a.ownerDocument.createElement("input"); return t.name = a.name, t.value = a.value, e.id && t.setAttribute("form", e.id), a.parentNode.insertBefore(t, a), e = new FormData(e), t.parentNode.removeChild(t), e; }
        function i1(e, a, t, l, u) { if (a === "submit" && t && t.stateNode === u) {
            var o = lc((u[Fe] || null).action), f = l.submitter;
            f && (a = (a = f[Fe] || null) ? lc(a.formAction) : f.getAttribute("formAction"), a !== null && (o = a, f = null));
            var n = new Zf("action", "action", null, l, u);
            e.push({ event: n, listeners: [{ instance: null, listener: function () { if (l.defaultPrevented) {
                            if (xt !== 0) {
                                var s = f ? uc(u, f) : new FormData(u);
                                _n(t, { pending: !0, data: s, method: u.method, action: o }, null, s);
                            }
                        }
                        else
                            typeof o == "function" && (n.preventDefault(), s = f ? uc(u, f) : new FormData(u), _n(t, { pending: !0, data: s, method: u.method, action: o }, o, s)); }, currentTarget: u }] });
        } }
        for (Jo = 0; Jo < Dn.length; Jo++)
            Wo = Dn[Jo], oc = Wo.toLowerCase(), fc = Wo[0].toUpperCase() + Wo.slice(1), ga(oc, "on" + fc);
        var Wo, oc, fc, Jo;
        ga(dm, "onAnimationEnd");
        ga(nm, "onAnimationIteration");
        ga(sm, "onAnimationStart");
        ga("dblclick", "onDoubleClick");
        ga("focusin", "onFocus");
        ga("focusout", "onBlur");
        ga(Dg, "onTransitionRun");
        ga(wg, "onTransitionStart");
        ga(Bg, "onTransitionCancel");
        ga(im, "onTransitionEnd");
        Yl("onMouseEnter", ["mouseout", "mouseover"]);
        Yl("onMouseLeave", ["mouseout", "mouseover"]);
        Yl("onPointerEnter", ["pointerout", "pointerover"]);
        Yl("onPointerLeave", ["pointerout", "pointerover"]);
        el("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
        el("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
        el("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
        el("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
        el("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
        el("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var io = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), r1 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(io));
        function Kp(e, a) { a = (a & 4) !== 0; for (var t = 0; t < e.length; t++) {
            var l = e[t], u = l.event;
            l = l.listeners;
            e: {
                var o = void 0;
                if (a)
                    for (var f = l.length - 1; 0 <= f; f--) {
                        var n = l[f], s = n.instance, r = n.currentTarget;
                        if (n = n.listener, s !== o && u.isPropagationStopped())
                            break e;
                        o = n, u.currentTarget = r;
                        try {
                            o(u);
                        }
                        catch (g) {
                            If(g);
                        }
                        u.currentTarget = null, o = s;
                    }
                else
                    for (f = 0; f < l.length; f++) {
                        if (n = l[f], s = n.instance, r = n.currentTarget, n = n.listener, s !== o && u.isPropagationStopped())
                            break e;
                        o = n, u.currentTarget = r;
                        try {
                            o(u);
                        }
                        catch (g) {
                            If(g);
                        }
                        u.currentTarget = null, o = s;
                    }
            }
        } }
        function F(e, a) { var t = a[Cn]; t === void 0 && (t = a[Cn] = new Set); var l = e + "__bubble"; t.has(l) || (Jp(a, e, 2, !1), t.add(l)); }
        function dn(e, a, t) { var l = 0; a && (l |= 4), Jp(t, e, l, a); }
        var $o = "_reactListening" + Math.random().toString(36).slice(2);
        function Ks(e) { if (!e[$o]) {
            e[$o] = !0, Gc.forEach(function (t) { t !== "selectionchange" && (r1.has(t) || dn(t, !1, e), dn(t, !0, e)); });
            var a = e.nodeType === 9 ? e : e.ownerDocument;
            a === null || a[$o] || (a[$o] = !0, dn("selectionchange", !1, a));
        } }
        function Jp(e, a, t, l) { switch (ih(a)) {
            case 2:
                var u = H1;
                break;
            case 8:
                u = _1;
                break;
            default: u = ei;
        } t = u.bind(null, a, t, e), u = void 0, !An || a !== "touchstart" && a !== "touchmove" && a !== "wheel" || (u = !0), l ? u !== void 0 ? e.addEventListener(a, t, { capture: !0, passive: u }) : e.addEventListener(a, t, !0) : u !== void 0 ? e.addEventListener(a, t, { passive: u }) : e.addEventListener(a, t, !1); }
        function nn(e, a, t, l, u) { var o = l; if ((a & 1) === 0 && (a & 2) === 0 && l !== null)
            e: for (;;) {
                if (l === null)
                    return;
                var f = l.tag;
                if (f === 3 || f === 4) {
                    var n = l.stateNode.containerInfo;
                    if (n === u)
                        break;
                    if (f === 4)
                        for (f = l.return; f !== null;) {
                            var s = f.tag;
                            if ((s === 3 || s === 4) && f.stateNode.containerInfo === u)
                                return;
                            f = f.return;
                        }
                    for (; n !== null;) {
                        if (f = Dl(n), f === null)
                            return;
                        if (s = f.tag, s === 5 || s === 6 || s === 26 || s === 27) {
                            l = o = f;
                            continue e;
                        }
                        n = n.parentNode;
                    }
                }
                l = l.return;
            } Kc(function () { var r = o, g = ps(t), p = []; e: {
            var i = rm.get(e);
            if (i !== void 0) {
                var C = Zf, D = e;
                switch (e) {
                    case "keypress": if (of(t) === 0)
                        break e;
                    case "keydown":
                    case "keyup":
                        C = fg;
                        break;
                    case "focusin":
                        D = "focus", C = _d;
                        break;
                    case "focusout":
                        D = "blur", C = _d;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        C = _d;
                        break;
                    case "click": if (t.button === 2)
                        break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        C = mr;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        C = ZL;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        C = sg;
                        break;
                    case dm:
                    case nm:
                    case sm:
                        C = JL;
                        break;
                    case im:
                        C = rg;
                        break;
                    case "scroll":
                    case "scrollend":
                        C = YL;
                        break;
                    case "wheel":
                        C = mg;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        C = $L;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        C = hr;
                        break;
                    case "toggle":
                    case "beforetoggle": C = hg;
                }
                var B = (a & 4) !== 0, q = !B && (e === "scroll" || e === "scrollend"), h = B ? i !== null ? i + "Capture" : null : i;
                B = [];
                for (var m = r, x; m !== null;) {
                    var I = m;
                    if (x = I.stateNode, I = I.tag, I !== 5 && I !== 26 && I !== 27 || x === null || h === null || (I = ao(m, h), I != null && B.push(ro(m, I, x))), q)
                        break;
                    m = m.return;
                }
                0 < B.length && (i = new C(i, D, null, t, g), p.push({ event: i, listeners: B }));
            }
        } if ((a & 7) === 0) {
            e: {
                if (i = e === "mouseover" || e === "pointerover", C = e === "mouseout" || e === "pointerout", i && t !== bn && (D = t.relatedTarget || t.fromElement) && (Dl(D) || D[tu]))
                    break e;
                if ((C || i) && (i = g.window === g ? g : (i = g.ownerDocument) ? i.defaultView || i.parentWindow : window, C ? (D = t.relatedTarget || t.toElement, C = r, D = D ? Dl(D) : null, D !== null && (q = ho(D), B = D.tag, D !== q || B !== 5 && B !== 27 && B !== 6) && (D = null)) : (C = null, D = r), C !== D)) {
                    if (B = mr, I = "onMouseLeave", h = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (B = hr, I = "onPointerLeave", h = "onPointerEnter", m = "pointer"), q = C == null ? i : Nu(C), x = D == null ? i : Nu(D), i = new B(I, m + "leave", C, t, g), i.target = q, i.relatedTarget = x, I = null, Dl(g) === r && (B = new B(h, m + "enter", D, t, g), B.target = x, B.relatedTarget = q, I = B), q = I, C && D)
                        a: {
                            for (B = c1, h = C, m = D, x = 0, I = h; I; I = B(I))
                                x++;
                            I = 0;
                            for (var R = m; R; R = B(R))
                                I++;
                            for (; 0 < x - I;)
                                h = B(h), x--;
                            for (; 0 < I - x;)
                                m = B(m), I--;
                            for (; x--;) {
                                if (h === m || m !== null && h === m.alternate) {
                                    B = h;
                                    break a;
                                }
                                h = B(h), m = B(m);
                            }
                            B = null;
                        }
                    else
                        B = null;
                    C !== null && dc(p, i, C, B, !1), D !== null && q !== null && dc(p, q, D, B, !0);
                }
            }
            e: {
                if (i = r ? Nu(r) : window, C = i.nodeName && i.nodeName.toLowerCase(), C === "select" || C === "input" && i.type === "file")
                    var V = Sr;
                else if (xr(i))
                    if (tm)
                        V = Ag;
                    else {
                        V = Ig;
                        var S = vg;
                    }
                else
                    C = i.nodeName, !C || C.toLowerCase() !== "input" || i.type !== "checkbox" && i.type !== "radio" ? r && ms(r.elementType) && (V = Sr) : V = bg;
                if (V && (V = V(e, r))) {
                    am(p, V, t, g);
                    break e;
                }
                S && S(e, i, r), e === "focusout" && r && i.type === "number" && r.memoizedProps.value != null && In(i, "number", i.value);
            }
            switch (S = r ? Nu(r) : window, e) {
                case "focusin":
                    (xr(S) || S.contentEditable === "true") && (Rl = S, Mn = r, Vu = null);
                    break;
                case "focusout":
                    Vu = Mn = Rl = null;
                    break;
                case "mousedown":
                    Tn = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Tn = !1, Ir(p, t, g);
                    break;
                case "selectionchange": if (Tg)
                    break;
                case "keydown":
                case "keyup": Ir(p, t, g);
            }
            var v;
            if (gs)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var L = "onCompositionStart";
                            break e;
                        case "compositionend":
                            L = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            L = "onCompositionUpdate";
                            break e;
                    }
                    L = void 0;
                }
            else
                Bl ? $c(e, t) && (L = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (L = "onCompositionStart");
            L && (Wc && t.locale !== "ko" && (Bl || L !== "onCompositionStart" ? L === "onCompositionEnd" && Bl && (v = Jc()) : (ht = g, hs = "value" in ht ? ht.value : ht.textContent, Bl = !0)), S = _f(r, L), 0 < S.length && (L = new pr(L, e, null, t, g), p.push({ event: L, listeners: S }), v ? L.data = v : (v = em(t), v !== null && (L.data = v)))), (v = gg ? xg(e, t) : Sg(e, t)) && (L = _f(r, "onBeforeInput"), 0 < L.length && (S = new pr("onBeforeInput", "beforeinput", null, t, g), p.push({ event: S, listeners: L }), S.data = v)), i1(p, e, r, t, g);
        } Kp(p, a); }); }
        function ro(e, a, t) { return { instance: e, listener: a, currentTarget: t }; }
        function _f(e, a) { for (var t = a + "Capture", l = []; e !== null;) {
            var u = e, o = u.stateNode;
            if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || o === null || (u = ao(e, t), u != null && l.unshift(ro(e, u, o)), u = ao(e, a), u != null && l.push(ro(e, u, o))), e.tag === 3)
                return l;
            e = e.return;
        } return []; }
        function c1(e) { if (e === null)
            return null; do
            e = e.return;
        while (e && e.tag !== 5 && e.tag !== 27); return e || null; }
        function dc(e, a, t, l, u) { for (var o = a._reactName, f = []; t !== null && t !== l;) {
            var n = t, s = n.alternate, r = n.stateNode;
            if (n = n.tag, s !== null && s === l)
                break;
            n !== 5 && n !== 26 && n !== 27 || r === null || (s = r, u ? (r = ao(t, o), r != null && f.unshift(ro(t, r, s))) : u || (r = ao(t, o), r != null && f.push(ro(t, r, s)))), t = t.return;
        } f.length !== 0 && e.push({ event: a, listeners: f }); }
        var m1 = /\r\n?/g, p1 = /\u0000|\uFFFD/g;
        function nc(e) {
            return (typeof e == "string" ? e : "" + e).replace(m1, `
`).replace(p1, "");
        }
        function Wp(e, a) { return a = nc(a), nc(e) === a; }
        function $(e, a, t, l, u, o) { switch (t) {
            case "children":
                typeof l == "string" ? a === "body" || a === "textarea" && l === "" || Ql(e, l) : (typeof l == "number" || typeof l == "bigint") && a !== "body" && Ql(e, "" + l);
                break;
            case "className":
                Go(e, "class", l);
                break;
            case "tabIndex":
                Go(e, "tabindex", l);
                break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                Go(e, t, l);
                break;
            case "style":
                jc(e, l, o);
                break;
            case "data": if (a !== "object") {
                Go(e, "data", l);
                break;
            }
            case "src":
            case "href":
                if (l === "" && (a !== "a" || t !== "href")) {
                    e.removeAttribute(t);
                    break;
                }
                if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
                    e.removeAttribute(t);
                    break;
                }
                l = lf("" + l), e.setAttribute(t, l);
                break;
            case "action":
            case "formAction":
                if (typeof l == "function") {
                    e.setAttribute(t, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                    break;
                }
                else
                    typeof o == "function" && (t === "formAction" ? (a !== "input" && $(e, a, "name", u.name, u, null), $(e, a, "formEncType", u.formEncType, u, null), $(e, a, "formMethod", u.formMethod, u, null), $(e, a, "formTarget", u.formTarget, u, null)) : ($(e, a, "encType", u.encType, u, null), $(e, a, "method", u.method, u, null), $(e, a, "target", u.target, u, null)));
                if (l == null || typeof l == "symbol" || typeof l == "boolean") {
                    e.removeAttribute(t);
                    break;
                }
                l = lf("" + l), e.setAttribute(t, l);
                break;
            case "onClick":
                l != null && (e.onclick = Pa);
                break;
            case "onScroll":
                l != null && F("scroll", e);
                break;
            case "onScrollEnd":
                l != null && F("scrollend", e);
                break;
            case "dangerouslySetInnerHTML":
                if (l != null) {
                    if (typeof l != "object" || !("__html" in l))
                        throw Error(A(61));
                    if (t = l.__html, t != null) {
                        if (u.children != null)
                            throw Error(A(60));
                        e.innerHTML = t;
                    }
                }
                break;
            case "multiple":
                e.multiple = l && typeof l != "function" && typeof l != "symbol";
                break;
            case "muted":
                e.muted = l && typeof l != "function" && typeof l != "symbol";
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref": break;
            case "autoFocus": break;
            case "xlinkHref":
                if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
                    e.removeAttribute("xlink:href");
                    break;
                }
                t = lf("" + l), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", t);
                break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(t, "" + l) : e.removeAttribute(t);
                break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
                l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(t, "") : e.removeAttribute(t);
                break;
            case "capture":
            case "download":
                l === !0 ? e.setAttribute(t, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(t, l) : e.removeAttribute(t);
                break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(t, l) : e.removeAttribute(t);
                break;
            case "rowSpan":
            case "start":
                l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(t) : e.setAttribute(t, l);
                break;
            case "popover":
                F("beforetoggle", e), F("toggle", e), tf(e, "popover", l);
                break;
            case "xlinkActuate":
                qa(e, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
                break;
            case "xlinkArcrole":
                qa(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
                break;
            case "xlinkRole":
                qa(e, "http://www.w3.org/1999/xlink", "xlink:role", l);
                break;
            case "xlinkShow":
                qa(e, "http://www.w3.org/1999/xlink", "xlink:show", l);
                break;
            case "xlinkTitle":
                qa(e, "http://www.w3.org/1999/xlink", "xlink:title", l);
                break;
            case "xlinkType":
                qa(e, "http://www.w3.org/1999/xlink", "xlink:type", l);
                break;
            case "xmlBase":
                qa(e, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
                break;
            case "xmlLang":
                qa(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
                break;
            case "xmlSpace":
                qa(e, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
                break;
            case "is":
                tf(e, "is", l);
                break;
            case "innerText":
            case "textContent": break;
            default: (!(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (t = PL.get(t) || t, tf(e, t, l));
        } }
        function Jn(e, a, t, l, u, o) { switch (t) {
            case "style":
                jc(e, l, o);
                break;
            case "dangerouslySetInnerHTML":
                if (l != null) {
                    if (typeof l != "object" || !("__html" in l))
                        throw Error(A(61));
                    if (t = l.__html, t != null) {
                        if (u.children != null)
                            throw Error(A(60));
                        e.innerHTML = t;
                    }
                }
                break;
            case "children":
                typeof l == "string" ? Ql(e, l) : (typeof l == "number" || typeof l == "bigint") && Ql(e, "" + l);
                break;
            case "onScroll":
                l != null && F("scroll", e);
                break;
            case "onScrollEnd":
                l != null && F("scrollend", e);
                break;
            case "onClick":
                l != null && (e.onclick = Pa);
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref": break;
            case "innerText":
            case "textContent": break;
            default: if (!Vc.hasOwnProperty(t))
                e: {
                    if (t[0] === "o" && t[1] === "n" && (u = t.endsWith("Capture"), a = t.slice(2, u ? t.length - 7 : void 0), o = e[Fe] || null, o = o != null ? o[t] : null, typeof o == "function" && e.removeEventListener(a, o, u), typeof l == "function")) {
                        typeof o != "function" && o !== null && (t in e ? e[t] = null : e.hasAttribute(t) && e.removeAttribute(t)), e.addEventListener(a, l, u);
                        break e;
                    }
                    t in e ? e[t] = l : l === !0 ? e.setAttribute(t, "") : tf(e, t, l);
                }
        } }
        function we(e, a, t) { switch (a) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li": break;
            case "img":
                F("error", e), F("load", e);
                var l = !1, u = !1, o;
                for (o in t)
                    if (t.hasOwnProperty(o)) {
                        var f = t[o];
                        if (f != null)
                            switch (o) {
                                case "src":
                                    l = !0;
                                    break;
                                case "srcSet":
                                    u = !0;
                                    break;
                                case "children":
                                case "dangerouslySetInnerHTML": throw Error(A(137, a));
                                default: $(e, a, o, f, t, null);
                            }
                    }
                u && $(e, a, "srcSet", t.srcSet, t, null), l && $(e, a, "src", t.src, t, null);
                return;
            case "input":
                F("invalid", e);
                var n = o = f = u = null, s = null, r = null;
                for (l in t)
                    if (t.hasOwnProperty(l)) {
                        var g = t[l];
                        if (g != null)
                            switch (l) {
                                case "name":
                                    u = g;
                                    break;
                                case "type":
                                    f = g;
                                    break;
                                case "checked":
                                    s = g;
                                    break;
                                case "defaultChecked":
                                    r = g;
                                    break;
                                case "value":
                                    o = g;
                                    break;
                                case "defaultValue":
                                    n = g;
                                    break;
                                case "children":
                                case "dangerouslySetInnerHTML":
                                    if (g != null)
                                        throw Error(A(137, a));
                                    break;
                                default: $(e, a, l, g, t, null);
                            }
                    }
                Yc(e, o, n, s, r, f, u, !1);
                return;
            case "select":
                F("invalid", e), l = f = o = null;
                for (u in t)
                    if (t.hasOwnProperty(u) && (n = t[u], n != null))
                        switch (u) {
                            case "value":
                                o = n;
                                break;
                            case "defaultValue":
                                f = n;
                                break;
                            case "multiple": l = n;
                            default: $(e, a, u, n, t, null);
                        }
                a = o, t = f, e.multiple = !!l, a != null ? Hl(e, !!l, a, !1) : t != null && Hl(e, !!l, t, !0);
                return;
            case "textarea":
                F("invalid", e), o = u = l = null;
                for (f in t)
                    if (t.hasOwnProperty(f) && (n = t[f], n != null))
                        switch (f) {
                            case "value":
                                l = n;
                                break;
                            case "defaultValue":
                                u = n;
                                break;
                            case "children":
                                o = n;
                                break;
                            case "dangerouslySetInnerHTML":
                                if (n != null)
                                    throw Error(A(91));
                                break;
                            default: $(e, a, f, n, t, null);
                        }
                Zc(e, l, u, o);
                return;
            case "option":
                for (s in t)
                    t.hasOwnProperty(s) && (l = t[s], l != null) && (s === "selected" ? e.selected = l && typeof l != "function" && typeof l != "symbol" : $(e, a, s, l, t, null));
                return;
            case "dialog":
                F("beforetoggle", e), F("toggle", e), F("cancel", e), F("close", e);
                break;
            case "iframe":
            case "object":
                F("load", e);
                break;
            case "video":
            case "audio":
                for (l = 0; l < io.length; l++)
                    F(io[l], e);
                break;
            case "image":
                F("error", e), F("load", e);
                break;
            case "details":
                F("toggle", e);
                break;
            case "embed":
            case "source":
            case "link": F("error", e), F("load", e);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
                for (r in t)
                    if (t.hasOwnProperty(r) && (l = t[r], l != null))
                        switch (r) {
                            case "children":
                            case "dangerouslySetInnerHTML": throw Error(A(137, a));
                            default: $(e, a, r, l, t, null);
                        }
                return;
            default: if (ms(a)) {
                for (g in t)
                    t.hasOwnProperty(g) && (l = t[g], l !== void 0 && Jn(e, a, g, l, t, void 0));
                return;
            }
        } for (n in t)
            t.hasOwnProperty(n) && (l = t[n], l != null && $(e, a, n, l, t, null)); }
        function h1(e, a, t, l) { switch (a) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li": break;
            case "input":
                var u = null, o = null, f = null, n = null, s = null, r = null, g = null;
                for (C in t) {
                    var p = t[C];
                    if (t.hasOwnProperty(C) && p != null)
                        switch (C) {
                            case "checked": break;
                            case "value": break;
                            case "defaultValue": s = p;
                            default: l.hasOwnProperty(C) || $(e, a, C, null, l, p);
                        }
                }
                for (var i in l) {
                    var C = l[i];
                    if (p = t[i], l.hasOwnProperty(i) && (C != null || p != null))
                        switch (i) {
                            case "type":
                                o = C;
                                break;
                            case "name":
                                u = C;
                                break;
                            case "checked":
                                r = C;
                                break;
                            case "defaultChecked":
                                g = C;
                                break;
                            case "value":
                                f = C;
                                break;
                            case "defaultValue":
                                n = C;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (C != null)
                                    throw Error(A(137, a));
                                break;
                            default: C !== p && $(e, a, i, C, l, p);
                        }
                }
                vn(e, f, n, s, r, g, o, u);
                return;
            case "select":
                C = f = n = i = null;
                for (o in t)
                    if (s = t[o], t.hasOwnProperty(o) && s != null)
                        switch (o) {
                            case "value": break;
                            case "multiple": C = s;
                            default: l.hasOwnProperty(o) || $(e, a, o, null, l, s);
                        }
                for (u in l)
                    if (o = l[u], s = t[u], l.hasOwnProperty(u) && (o != null || s != null))
                        switch (u) {
                            case "value":
                                i = o;
                                break;
                            case "defaultValue":
                                n = o;
                                break;
                            case "multiple": f = o;
                            default: o !== s && $(e, a, u, o, l, s);
                        }
                a = n, t = f, l = C, i != null ? Hl(e, !!t, i, !1) : !!l != !!t && (a != null ? Hl(e, !!t, a, !0) : Hl(e, !!t, t ? [] : "", !1));
                return;
            case "textarea":
                C = i = null;
                for (n in t)
                    if (u = t[n], t.hasOwnProperty(n) && u != null && !l.hasOwnProperty(n))
                        switch (n) {
                            case "value": break;
                            case "children": break;
                            default: $(e, a, n, null, l, u);
                        }
                for (f in l)
                    if (u = l[f], o = t[f], l.hasOwnProperty(f) && (u != null || o != null))
                        switch (f) {
                            case "value":
                                i = u;
                                break;
                            case "defaultValue":
                                C = u;
                                break;
                            case "children": break;
                            case "dangerouslySetInnerHTML":
                                if (u != null)
                                    throw Error(A(91));
                                break;
                            default: u !== o && $(e, a, f, u, l, o);
                        }
                Qc(e, i, C);
                return;
            case "option":
                for (var D in t)
                    i = t[D], t.hasOwnProperty(D) && i != null && !l.hasOwnProperty(D) && (D === "selected" ? e.selected = !1 : $(e, a, D, null, l, i));
                for (s in l)
                    i = l[s], C = t[s], l.hasOwnProperty(s) && i !== C && (i != null || C != null) && (s === "selected" ? e.selected = i && typeof i != "function" && typeof i != "symbol" : $(e, a, s, i, l, C));
                return;
            case "img":
            case "link":
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
            case "menuitem":
                for (var B in t)
                    i = t[B], t.hasOwnProperty(B) && i != null && !l.hasOwnProperty(B) && $(e, a, B, null, l, i);
                for (r in l)
                    if (i = l[r], C = t[r], l.hasOwnProperty(r) && i !== C && (i != null || C != null))
                        switch (r) {
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (i != null)
                                    throw Error(A(137, a));
                                break;
                            default: $(e, a, r, i, l, C);
                        }
                return;
            default: if (ms(a)) {
                for (var q in t)
                    i = t[q], t.hasOwnProperty(q) && i !== void 0 && !l.hasOwnProperty(q) && Jn(e, a, q, void 0, l, i);
                for (g in l)
                    i = l[g], C = t[g], !l.hasOwnProperty(g) || i === C || i === void 0 && C === void 0 || Jn(e, a, g, i, l, C);
                return;
            }
        } for (var h in t)
            i = t[h], t.hasOwnProperty(h) && i != null && !l.hasOwnProperty(h) && $(e, a, h, null, l, i); for (p in l)
            i = l[p], C = t[p], !l.hasOwnProperty(p) || i === C || i == null && C == null || $(e, a, p, i, l, C); }
        function sc(e) { switch (e) {
            case "css":
            case "script":
            case "font":
            case "img":
            case "image":
            case "input":
            case "link": return !0;
            default: return !1;
        } }
        function L1() { if (typeof performance.getEntriesByType == "function") {
            for (var e = 0, a = 0, t = performance.getEntriesByType("resource"), l = 0; l < t.length; l++) {
                var u = t[l], o = u.transferSize, f = u.initiatorType, n = u.duration;
                if (o && n && sc(f)) {
                    for (f = 0, n = u.responseEnd, l += 1; l < t.length; l++) {
                        var s = t[l], r = s.startTime;
                        if (r > n)
                            break;
                        var g = s.transferSize, p = s.initiatorType;
                        g && sc(p) && (s = s.responseEnd, f += g * (s < n ? 1 : (n - r) / (s - r)));
                    }
                    if (--l, a += 8 * (o + f) / (u.duration / 1e3), e++, 10 < e)
                        break;
                }
            }
            if (0 < e)
                return a / e / 1e6;
        } return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5; }
        var Wn = null, $n = null;
        function Ff(e) { return e.nodeType === 9 ? e : e.ownerDocument; }
        function ic(e) { switch (e) {
            case "http://www.w3.org/2000/svg": return 1;
            case "http://www.w3.org/1998/Math/MathML": return 2;
            default: return 0;
        } }
        function $p(e, a) { if (e === 0)
            switch (a) {
                case "svg": return 1;
                case "math": return 2;
                default: return 0;
            } return e === 1 && a === "foreignObject" ? 0 : e; }
        function es(e, a) { return e === "textarea" || e === "noscript" || typeof a.children == "string" || typeof a.children == "number" || typeof a.children == "bigint" || typeof a.dangerouslySetInnerHTML == "object" && a.dangerouslySetInnerHTML !== null && a.dangerouslySetInnerHTML.__html != null; }
        var sn = null;
        function g1() { var e = window.event; return e && e.type === "popstate" ? e === sn ? !1 : (sn = e, !0) : (sn = null, !1); }
        var eh = typeof setTimeout == "function" ? setTimeout : void 0, x1 = typeof clearTimeout == "function" ? clearTimeout : void 0, rc = typeof Promise == "function" ? Promise : void 0, S1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof rc < "u" ? function (e) { return rc.resolve(null).then(e).catch(C1); } : eh;
        function C1(e) { setTimeout(function () { throw e; }); }
        function Ot(e) { return e === "head"; }
        function cc(e, a) { var t = a, l = 0; do {
            var u = t.nextSibling;
            if (e.removeChild(t), u && u.nodeType === 8)
                if (t = u.data, t === "/$" || t === "/&") {
                    if (l === 0) {
                        e.removeChild(u), au(a);
                        return;
                    }
                    l--;
                }
                else if (t === "$" || t === "$?" || t === "$~" || t === "$!" || t === "&")
                    l++;
                else if (t === "html")
                    $u(e.ownerDocument.documentElement);
                else if (t === "head") {
                    t = e.ownerDocument.head, $u(t);
                    for (var o = t.firstChild; o;) {
                        var f = o.nextSibling, n = o.nodeName;
                        o[So] || n === "SCRIPT" || n === "STYLE" || n === "LINK" && o.rel.toLowerCase() === "stylesheet" || t.removeChild(o), o = f;
                    }
                }
                else
                    t === "body" && $u(e.ownerDocument.body);
            t = u;
        } while (t); au(a); }
        function mc(e, a) { var t = e; e = 0; do {
            var l = t.nextSibling;
            if (t.nodeType === 1 ? a ? (t._stashedDisplay = t.style.display, t.style.display = "none") : (t.style.display = t._stashedDisplay || "", t.getAttribute("style") === "" && t.removeAttribute("style")) : t.nodeType === 3 && (a ? (t._stashedText = t.nodeValue, t.nodeValue = "") : t.nodeValue = t._stashedText || ""), l && l.nodeType === 8)
                if (t = l.data, t === "/$") {
                    if (e === 0)
                        break;
                    e--;
                }
                else
                    t !== "$" && t !== "$?" && t !== "$~" && t !== "$!" || e++;
            t = l;
        } while (t); }
        function as(e) { var a = e.firstChild; for (a && a.nodeType === 10 && (a = a.nextSibling); a;) {
            var t = a;
            switch (a = a.nextSibling, t.nodeName) {
                case "HTML":
                case "HEAD":
                case "BODY":
                    as(t), cs(t);
                    continue;
                case "SCRIPT":
                case "STYLE": continue;
                case "LINK": if (t.rel.toLowerCase() === "stylesheet")
                    continue;
            }
            e.removeChild(t);
        } }
        function y1(e, a, t, l) { for (; e.nodeType === 1;) {
            var u = t;
            if (e.nodeName.toLowerCase() !== a.toLowerCase()) {
                if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
                    break;
            }
            else if (l) {
                if (!e[So])
                    switch (a) {
                        case "meta":
                            if (!e.hasAttribute("itemprop"))
                                break;
                            return e;
                        case "link":
                            if (o = e.getAttribute("rel"), o === "stylesheet" && e.hasAttribute("data-precedence"))
                                break;
                            if (o !== u.rel || e.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || e.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || e.getAttribute("title") !== (u.title == null ? null : u.title))
                                break;
                            return e;
                        case "style":
                            if (e.hasAttribute("data-precedence"))
                                break;
                            return e;
                        case "script":
                            if (o = e.getAttribute("src"), (o !== (u.src == null ? null : u.src) || e.getAttribute("type") !== (u.type == null ? null : u.type) || e.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && o && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                                break;
                            return e;
                        default: return e;
                    }
            }
            else if (a === "input" && e.type === "hidden") {
                var o = u.name == null ? null : "" + u.name;
                if (u.type === "hidden" && e.getAttribute("name") === o)
                    return e;
            }
            else
                return e;
            if (e = ra(e.nextSibling), e === null)
                break;
        } return null; }
        function v1(e, a, t) { if (a === "")
            return null; for (; e.nodeType !== 3;)
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = ra(e.nextSibling), e === null))
                return null; return e; }
        function ah(e, a) { for (; e.nodeType !== 8;)
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = ra(e.nextSibling), e === null))
                return null; return e; }
        function ts(e) { return e.data === "$?" || e.data === "$~"; }
        function ls(e) { return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading"; }
        function I1(e, a) { var t = e.ownerDocument; if (e.data === "$~")
            e._reactRetry = a;
        else if (e.data !== "$?" || t.readyState !== "loading")
            a();
        else {
            var l = function () { a(), t.removeEventListener("DOMContentLoaded", l); };
            t.addEventListener("DOMContentLoaded", l), e._reactRetry = l;
        } }
        function ra(e) { for (; e != null; e = e.nextSibling) {
            var a = e.nodeType;
            if (a === 1 || a === 3)
                break;
            if (a === 8) {
                if (a = e.data, a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&" || a === "F!" || a === "F")
                    break;
                if (a === "/$" || a === "/&")
                    return null;
            }
        } return e; }
        var us = null;
        function pc(e) { e = e.nextSibling; for (var a = 0; e;) {
            if (e.nodeType === 8) {
                var t = e.data;
                if (t === "/$" || t === "/&") {
                    if (a === 0)
                        return ra(e.nextSibling);
                    a--;
                }
                else
                    t !== "$" && t !== "$!" && t !== "$?" && t !== "$~" && t !== "&" || a++;
            }
            e = e.nextSibling;
        } return null; }
        function hc(e) { e = e.previousSibling; for (var a = 0; e;) {
            if (e.nodeType === 8) {
                var t = e.data;
                if (t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&") {
                    if (a === 0)
                        return e;
                    a--;
                }
                else
                    t !== "/$" && t !== "/&" || a++;
            }
            e = e.previousSibling;
        } return null; }
        function th(e, a, t) { switch (a = Ff(t), e) {
            case "html":
                if (e = a.documentElement, !e)
                    throw Error(A(452));
                return e;
            case "head":
                if (e = a.head, !e)
                    throw Error(A(453));
                return e;
            case "body":
                if (e = a.body, !e)
                    throw Error(A(454));
                return e;
            default: throw Error(A(451));
        } }
        function $u(e) { for (var a = e.attributes; a.length;)
            e.removeAttributeNode(a[0]); cs(e); }
        var ca = new Map, Lc = new Set;
        function Gf(e) { return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument; }
        var et = Q.d;
        Q.d = { f: b1, r: A1, D: M1, C: T1, L: D1, m: w1, X: R1, S: B1, M: k1 };
        function b1() { var e = et.f(), a = od(); return e || a; }
        function A1(e) { var a = lu(e); a !== null && a.tag === 5 && a.type === "form" ? jm(a) : et.r(e); }
        var du = typeof document > "u" ? null : document;
        function lh(e, a, t) { var l = du; if (l && typeof a == "string" && a) {
            var u = da(a);
            u = 'link[rel="' + e + '"][href="' + u + '"]', typeof t == "string" && (u += '[crossorigin="' + t + '"]'), Lc.has(u) || (Lc.add(u), e = { rel: e, crossOrigin: t, href: a }, l.querySelector(u) === null && (a = l.createElement("link"), we(a, "link", e), Ie(a), l.head.appendChild(a)));
        } }
        function M1(e) { et.D(e), lh("dns-prefetch", e, null); }
        function T1(e, a) { et.C(e, a), lh("preconnect", e, a); }
        function D1(e, a, t) { et.L(e, a, t); var l = du; if (l && e && a) {
            var u = 'link[rel="preload"][as="' + da(a) + '"]';
            a === "image" && t && t.imageSrcSet ? (u += '[imagesrcset="' + da(t.imageSrcSet) + '"]', typeof t.imageSizes == "string" && (u += '[imagesizes="' + da(t.imageSizes) + '"]')) : u += '[href="' + da(e) + '"]';
            var o = u;
            switch (a) {
                case "style":
                    o = eu(e);
                    break;
                case "script": o = nu(e);
            }
            ca.has(o) || (e = de({ rel: "preload", href: a === "image" && t && t.imageSrcSet ? void 0 : e, as: a }, t), ca.set(o, e), l.querySelector(u) !== null || a === "style" && l.querySelector(Ao(o)) || a === "script" && l.querySelector(Mo(o)) || (a = l.createElement("link"), we(a, "link", e), Ie(a), l.head.appendChild(a)));
        } }
        function w1(e, a) { et.m(e, a); var t = du; if (t && e) {
            var l = a && typeof a.as == "string" ? a.as : "script", u = 'link[rel="modulepreload"][as="' + da(l) + '"][href="' + da(e) + '"]', o = u;
            switch (l) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script": o = nu(e);
            }
            if (!ca.has(o) && (e = de({ rel: "modulepreload", href: e }, a), ca.set(o, e), t.querySelector(u) === null)) {
                switch (l) {
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script": if (t.querySelector(Mo(o)))
                        return;
                }
                l = t.createElement("link"), we(l, "link", e), Ie(l), t.head.appendChild(l);
            }
        } }
        function B1(e, a, t) { et.S(e, a, t); var l = du; if (l && e) {
            var u = Nl(l).hoistableStyles, o = eu(e);
            a = a || "default";
            var f = u.get(o);
            if (!f) {
                var n = { loading: 0, preload: null };
                if (f = l.querySelector(Ao(o)))
                    n.loading = 5;
                else {
                    e = de({ rel: "stylesheet", href: e, "data-precedence": a }, t), (t = ca.get(o)) && Js(e, t);
                    var s = f = l.createElement("link");
                    Ie(s), we(s, "link", e), s._p = new Promise(function (r, g) { s.onload = r, s.onerror = g; }), s.addEventListener("load", function () { n.loading |= 1; }), s.addEventListener("error", function () { n.loading |= 2; }), n.loading |= 4, pf(f, a, l);
                }
                f = { type: "stylesheet", instance: f, count: 1, state: n }, u.set(o, f);
            }
        } }
        function R1(e, a) { et.X(e, a); var t = du; if (t && e) {
            var l = Nl(t).hoistableScripts, u = nu(e), o = l.get(u);
            o || (o = t.querySelector(Mo(u)), o || (e = de({ src: e, async: !0 }, a), (a = ca.get(u)) && Ws(e, a), o = t.createElement("script"), Ie(o), we(o, "link", e), t.head.appendChild(o)), o = { type: "script", instance: o, count: 1, state: null }, l.set(u, o));
        } }
        function k1(e, a) { et.M(e, a); var t = du; if (t && e) {
            var l = Nl(t).hoistableScripts, u = nu(e), o = l.get(u);
            o || (o = t.querySelector(Mo(u)), o || (e = de({ src: e, async: !0, type: "module" }, a), (a = ca.get(u)) && Ws(e, a), o = t.createElement("script"), Ie(o), we(o, "link", e), t.head.appendChild(o)), o = { type: "script", instance: o, count: 1, state: null }, l.set(u, o));
        } }
        function gc(e, a, t, l) { var u = (u = St.current) ? Gf(u) : null; if (!u)
            throw Error(A(446)); switch (e) {
            case "meta":
            case "title": return null;
            case "style": return typeof t.precedence == "string" && typeof t.href == "string" ? (a = eu(t.href), t = Nl(u).hoistableStyles, l = t.get(a), l || (l = { type: "style", instance: null, count: 0, state: null }, t.set(a, l)), l) : { type: "void", instance: null, count: 0, state: null };
            case "link":
                if (t.rel === "stylesheet" && typeof t.href == "string" && typeof t.precedence == "string") {
                    e = eu(t.href);
                    var o = Nl(u).hoistableStyles, f = o.get(e);
                    if (f || (u = u.ownerDocument || u, f = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, o.set(e, f), (o = u.querySelector(Ao(e))) && !o._p && (f.instance = o, f.state.loading = 5), ca.has(e) || (t = { rel: "preload", as: "style", href: t.href, crossOrigin: t.crossOrigin, integrity: t.integrity, media: t.media, hrefLang: t.hrefLang, referrerPolicy: t.referrerPolicy }, ca.set(e, t), o || O1(u, e, t, f.state))), a && l === null)
                        throw Error(A(528, ""));
                    return f;
                }
                if (a && l !== null)
                    throw Error(A(529, ""));
                return null;
            case "script": return a = t.async, t = t.src, typeof t == "string" && a && typeof a != "function" && typeof a != "symbol" ? (a = nu(t), t = Nl(u).hoistableScripts, l = t.get(a), l || (l = { type: "script", instance: null, count: 0, state: null }, t.set(a, l)), l) : { type: "void", instance: null, count: 0, state: null };
            default: throw Error(A(444, e));
        } }
        function eu(e) { return 'href="' + da(e) + '"'; }
        function Ao(e) { return 'link[rel="stylesheet"][' + e + "]"; }
        function uh(e) { return de({}, e, { "data-precedence": e.precedence, precedence: null }); }
        function O1(e, a, t, l) { e.querySelector('link[rel="preload"][as="style"][' + a + "]") ? l.loading = 1 : (a = e.createElement("link"), l.preload = a, a.addEventListener("load", function () { return l.loading |= 1; }), a.addEventListener("error", function () { return l.loading |= 2; }), we(a, "link", t), Ie(a), e.head.appendChild(a)); }
        function nu(e) { return '[src="' + da(e) + '"]'; }
        function Mo(e) { return "script[async]" + e; }
        function xc(e, a, t) { if (a.count++, a.instance === null)
            switch (a.type) {
                case "style":
                    var l = e.querySelector('style[data-href~="' + da(t.href) + '"]');
                    if (l)
                        return a.instance = l, Ie(l), l;
                    var u = de({}, t, { "data-href": t.href, "data-precedence": t.precedence, href: null, precedence: null });
                    return l = (e.ownerDocument || e).createElement("style"), Ie(l), we(l, "style", u), pf(l, t.precedence, e), a.instance = l;
                case "stylesheet":
                    u = eu(t.href);
                    var o = e.querySelector(Ao(u));
                    if (o)
                        return a.state.loading |= 4, a.instance = o, Ie(o), o;
                    l = uh(t), (u = ca.get(u)) && Js(l, u), o = (e.ownerDocument || e).createElement("link"), Ie(o);
                    var f = o;
                    return f._p = new Promise(function (n, s) { f.onload = n, f.onerror = s; }), we(o, "link", l), a.state.loading |= 4, pf(o, t.precedence, e), a.instance = o;
                case "script": return o = nu(t.src), (u = e.querySelector(Mo(o))) ? (a.instance = u, Ie(u), u) : (l = t, (u = ca.get(o)) && (l = de({}, t), Ws(l, u)), e = e.ownerDocument || e, u = e.createElement("script"), Ie(u), we(u, "link", l), e.head.appendChild(u), a.instance = u);
                case "void": return null;
                default: throw Error(A(443, a.type));
            }
        else
            a.type === "stylesheet" && (a.state.loading & 4) === 0 && (l = a.instance, a.state.loading |= 4, pf(l, t.precedence, e)); return a.instance; }
        function pf(e, a, t) { for (var l = t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), u = l.length ? l[l.length - 1] : null, o = u, f = 0; f < l.length; f++) {
            var n = l[f];
            if (n.dataset.precedence === a)
                o = n;
            else if (o !== u)
                break;
        } o ? o.parentNode.insertBefore(e, o.nextSibling) : (a = t.nodeType === 9 ? t.head : t, a.insertBefore(e, a.firstChild)); }
        function Js(e, a) { e.crossOrigin == null && (e.crossOrigin = a.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = a.referrerPolicy), e.title == null && (e.title = a.title); }
        function Ws(e, a) { e.crossOrigin == null && (e.crossOrigin = a.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = a.referrerPolicy), e.integrity == null && (e.integrity = a.integrity); }
        var hf = null;
        function Sc(e, a, t) { if (hf === null) {
            var l = new Map, u = hf = new Map;
            u.set(t, l);
        }
        else
            u = hf, l = u.get(t), l || (l = new Map, u.set(t, l)); if (l.has(e))
            return l; for (l.set(e, null), t = t.getElementsByTagName(e), u = 0; u < t.length; u++) {
            var o = t[u];
            if (!(o[So] || o[Me] || e === "link" && o.getAttribute("rel") === "stylesheet") && o.namespaceURI !== "http://www.w3.org/2000/svg") {
                var f = o.getAttribute(a) || "";
                f = e + f;
                var n = l.get(f);
                n ? n.push(o) : l.set(f, [o]);
            }
        } return l; }
        function Cc(e, a, t) { e = e.ownerDocument || e, e.head.insertBefore(t, a === "title" ? e.querySelector("head > title") : null); }
        function U1(e, a, t) { if (t === 1 || a.itemProp != null)
            return !1; switch (e) {
            case "meta":
            case "title": return !0;
            case "style":
                if (typeof a.precedence != "string" || typeof a.href != "string" || a.href === "")
                    break;
                return !0;
            case "link":
                if (typeof a.rel != "string" || typeof a.href != "string" || a.href === "" || a.onLoad || a.onError)
                    break;
                return a.rel === "stylesheet" ? (e = a.disabled, typeof a.precedence == "string" && e == null) : !0;
            case "script": if (a.async && typeof a.async != "function" && typeof a.async != "symbol" && !a.onLoad && !a.onError && a.src && typeof a.src == "string")
                return !0;
        } return !1; }
        function oh(e) { return !(e.type === "stylesheet" && (e.state.loading & 3) === 0); }
        function E1(e, a, t, l) { if (t.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (t.state.loading & 4) === 0) {
            if (t.instance === null) {
                var u = eu(l.href), o = a.querySelector(Ao(u));
                if (o) {
                    a = o._p, a !== null && typeof a == "object" && typeof a.then == "function" && (e.count++, e = Vf.bind(e), a.then(e, e)), t.state.loading |= 4, t.instance = o, Ie(o);
                    return;
                }
                o = a.ownerDocument || a, l = uh(l), (u = ca.get(u)) && Js(l, u), o = o.createElement("link"), Ie(o);
                var f = o;
                f._p = new Promise(function (n, s) { f.onload = n, f.onerror = s; }), we(o, "link", l), t.instance = o;
            }
            e.stylesheets === null && (e.stylesheets = new Map), e.stylesheets.set(t, a), (a = t.state.preload) && (t.state.loading & 3) === 0 && (e.count++, t = Vf.bind(e), a.addEventListener("load", t), a.addEventListener("error", t));
        } }
        var rn = 0;
        function q1(e, a) { return e.stylesheets && e.count === 0 && Lf(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function (t) { var l = setTimeout(function () { if (e.stylesheets && Lf(e, e.stylesheets), e.unsuspend) {
            var o = e.unsuspend;
            e.unsuspend = null, o();
        } }, 6e4 + a); 0 < e.imgBytes && rn === 0 && (rn = 62500 * L1()); var u = setTimeout(function () { if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Lf(e, e.stylesheets), e.unsuspend)) {
            var o = e.unsuspend;
            e.unsuspend = null, o();
        } }, (e.imgBytes > rn ? 50 : 800) + a); return e.unsuspend = t, function () { e.unsuspend = null, clearTimeout(l), clearTimeout(u); }; } : null; }
        function Vf() { if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets)
                Lf(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                this.unsuspend = null, e();
            }
        } }
        var Pf = null;
        function Lf(e, a) { e.stylesheets = null, e.unsuspend !== null && (e.count++, Pf = new Map, a.forEach(z1, e), Pf = null, Vf.call(e)); }
        function z1(e, a) { if (!(a.state.loading & 4)) {
            var t = Pf.get(e);
            if (t)
                var l = t.get(null);
            else {
                t = new Map, Pf.set(e, t);
                for (var u = e.querySelectorAll("link[data-precedence],style[data-precedence]"), o = 0; o < u.length; o++) {
                    var f = u[o];
                    (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (t.set(f.dataset.precedence, f), l = f);
                }
                l && t.set(null, l);
            }
            u = a.instance, f = u.getAttribute("data-precedence"), o = t.get(f) || l, o === l && t.set(null, u), t.set(f, u), this.count++, l = Vf.bind(this), u.addEventListener("load", l), u.addEventListener("error", l), o ? o.parentNode.insertBefore(u, o.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(u, e.firstChild)), a.state.loading |= 4;
        } }
        var co = { $$typeof: Va, Provider: null, Consumer: null, _currentValue: Pt, _currentValue2: Pt, _threadCount: 0 };
        function N1(e, a, t, l, u, o, f, n, s) { this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = qd(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = qd(0), this.hiddenUpdates = qd(null), this.identifierPrefix = l, this.onUncaughtError = u, this.onCaughtError = o, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = s, this.incompleteTransitions = new Map; }
        function fh(e, a, t, l, u, o, f, n, s, r, g, p) { return e = new N1(e, a, t, f, s, r, g, p, n), a = 1, o === !0 && (a |= 24), o = Ye(3, null, null, a), e.current = o, o.stateNode = e, a = bs(), a.refCount++, e.pooledCache = a, a.refCount++, o.memoizedState = { element: l, isDehydrated: t, cache: a }, Ts(o), e; }
        function dh(e) { return e ? (e = Ul, e) : Ul; }
        function nh(e, a, t, l, u, o) { u = dh(u), l.context === null ? l.context = u : l.pendingContext = u, l = yt(a), l.payload = { element: t }, o = o === void 0 ? null : o, o !== null && (l.callback = o), t = vt(e, l, a), t !== null && (_e(t, e, a), Xu(t, e, a)); }
        function yc(e, a) { if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var t = e.retryLane;
            e.retryLane = t !== 0 && t < a ? t : a;
        } }
        function $s(e, a) { yc(e, a), (e = e.alternate) && yc(e, a); }
        function sh(e) { if (e.tag === 13 || e.tag === 31) {
            var a = ll(e, 67108864);
            a !== null && _e(a, e, 67108864), $s(e, 67108864);
        } }
        function vc(e) { if (e.tag === 13 || e.tag === 31) {
            var a = Je();
            a = is(a);
            var t = ll(e, a);
            t !== null && _e(t, e, a), $s(e, a);
        } }
        var Xf = !0;
        function H1(e, a, t, l) { var u = E.T; E.T = null; var o = Q.p; try {
            Q.p = 2, ei(e, a, t, l);
        }
        finally {
            Q.p = o, E.T = u;
        } }
        function _1(e, a, t, l) { var u = E.T; E.T = null; var o = Q.p; try {
            Q.p = 8, ei(e, a, t, l);
        }
        finally {
            Q.p = o, E.T = u;
        } }
        function ei(e, a, t, l) { if (Xf) {
            var u = os(l);
            if (u === null)
                nn(e, a, l, Yf, t), Ic(e, l);
            else if (G1(u, e, a, t, l))
                l.stopPropagation();
            else if (Ic(e, l), a & 4 && -1 < F1.indexOf(e)) {
                for (; u !== null;) {
                    var o = lu(u);
                    if (o !== null)
                        switch (o.tag) {
                            case 3:
                                if (o = o.stateNode, o.current.memoizedState.isDehydrated) {
                                    var f = Ft(o.pendingLanes);
                                    if (f !== 0) {
                                        var n = o;
                                        for (n.pendingLanes |= 2, n.entangledLanes |= 2; f;) {
                                            var s = 1 << 31 - Ke(f);
                                            n.entanglements[1] |= s, f &= ~s;
                                        }
                                        Ba(o), (Y & 6) === 0 && (Ef = Ze() + 500, bo(0, !1));
                                    }
                                }
                                break;
                            case 31:
                            case 13: n = ll(o, 2), n !== null && _e(n, o, 2), od(), $s(o, 2);
                        }
                    if (o = os(l), o === null && nn(e, a, l, Yf, t), o === u)
                        break;
                    u = o;
                }
                u !== null && l.stopPropagation();
            }
            else
                nn(e, a, l, null, t);
        } }
        function os(e) { return e = ps(e), ai(e); }
        var Yf = null;
        function ai(e) { if (Yf = null, e = Dl(e), e !== null) {
            var a = ho(e);
            if (a === null)
                e = null;
            else {
                var t = a.tag;
                if (t === 13) {
                    if (e = wc(a), e !== null)
                        return e;
                    e = null;
                }
                else if (t === 31) {
                    if (e = Bc(a), e !== null)
                        return e;
                    e = null;
                }
                else if (t === 3) {
                    if (a.stateNode.current.memoizedState.isDehydrated)
                        return a.tag === 3 ? a.stateNode.containerInfo : null;
                    e = null;
                }
                else
                    a !== e && (e = null);
            }
        } return Yf = e, null; }
        function ih(e) { switch (e) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart": return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave": return 8;
            case "message": switch (DL()) {
                case Uc: return 2;
                case Ec: return 8;
                case yf:
                case wL: return 32;
                case qc: return 268435456;
                default: return 32;
            }
            default: return 32;
        } }
        var fs = !1, At = null, Mt = null, Tt = null, mo = new Map, po = new Map, mt = [], F1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
        function Ic(e, a) { switch (e) {
            case "focusin":
            case "focusout":
                At = null;
                break;
            case "dragenter":
            case "dragleave":
                Mt = null;
                break;
            case "mouseover":
            case "mouseout":
                Tt = null;
                break;
            case "pointerover":
            case "pointerout":
                mo.delete(a.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture": po.delete(a.pointerId);
        } }
        function Uu(e, a, t, l, u, o) { return e === null || e.nativeEvent !== o ? (e = { blockedOn: a, domEventName: t, eventSystemFlags: l, nativeEvent: o, targetContainers: [u] }, a !== null && (a = lu(a), a !== null && sh(a)), e) : (e.eventSystemFlags |= l, a = e.targetContainers, u !== null && a.indexOf(u) === -1 && a.push(u), e); }
        function G1(e, a, t, l, u) { switch (a) {
            case "focusin": return At = Uu(At, e, a, t, l, u), !0;
            case "dragenter": return Mt = Uu(Mt, e, a, t, l, u), !0;
            case "mouseover": return Tt = Uu(Tt, e, a, t, l, u), !0;
            case "pointerover":
                var o = u.pointerId;
                return mo.set(o, Uu(mo.get(o) || null, e, a, t, l, u)), !0;
            case "gotpointercapture": return o = u.pointerId, po.set(o, Uu(po.get(o) || null, e, a, t, l, u)), !0;
        } return !1; }
        function rh(e) { var a = Dl(e.target); if (a !== null) {
            var t = ho(a);
            if (t !== null) {
                if (a = t.tag, a === 13) {
                    if (a = wc(t), a !== null) {
                        e.blockedOn = a, fr(e.priority, function () { vc(t); });
                        return;
                    }
                }
                else if (a === 31) {
                    if (a = Bc(t), a !== null) {
                        e.blockedOn = a, fr(e.priority, function () { vc(t); });
                        return;
                    }
                }
                else if (a === 3 && t.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
                    return;
                }
            }
        } e.blockedOn = null; }
        function gf(e) { if (e.blockedOn !== null)
            return !1; for (var a = e.targetContainers; 0 < a.length;) {
            var t = os(e.nativeEvent);
            if (t === null) {
                t = e.nativeEvent;
                var l = new t.constructor(t.type, t);
                bn = l, t.target.dispatchEvent(l), bn = null;
            }
            else
                return a = lu(t), a !== null && sh(a), e.blockedOn = t, !1;
            a.shift();
        } return !0; }
        function bc(e, a, t) { gf(e) && t.delete(a); }
        function V1() { fs = !1, At !== null && gf(At) && (At = null), Mt !== null && gf(Mt) && (Mt = null), Tt !== null && gf(Tt) && (Tt = null), mo.forEach(bc), po.forEach(bc); }
        function ef(e, a) { e.blockedOn === a && (e.blockedOn = null, fs || (fs = !0, ye.unstable_scheduleCallback(ye.unstable_NormalPriority, V1))); }
        var af = null;
        function Ac(e) { af !== e && (af = e, ye.unstable_scheduleCallback(ye.unstable_NormalPriority, function () { af === e && (af = null); for (var a = 0; a < e.length; a += 3) {
            var t = e[a], l = e[a + 1], u = e[a + 2];
            if (typeof l != "function") {
                if (ai(l || t) === null)
                    continue;
                break;
            }
            var o = lu(t);
            o !== null && (e.splice(a, 3), a -= 3, _n(o, { pending: !0, data: u, method: t.method, action: l }, l, u));
        } })); }
        function au(e) { function a(s) { return ef(s, e); } At !== null && ef(At, e), Mt !== null && ef(Mt, e), Tt !== null && ef(Tt, e), mo.forEach(a), po.forEach(a); for (var t = 0; t < mt.length; t++) {
            var l = mt[t];
            l.blockedOn === e && (l.blockedOn = null);
        } for (; 0 < mt.length && (t = mt[0], t.blockedOn === null);)
            rh(t), t.blockedOn === null && mt.shift(); if (t = (e.ownerDocument || e).$$reactFormReplay, t != null)
            for (l = 0; l < t.length; l += 3) {
                var u = t[l], o = t[l + 1], f = u[Fe] || null;
                if (typeof o == "function")
                    f || Ac(t);
                else if (f) {
                    var n = null;
                    if (o && o.hasAttribute("formAction")) {
                        if (u = o, f = o[Fe] || null)
                            n = f.formAction;
                        else if (ai(u) !== null)
                            continue;
                    }
                    else
                        n = f.action;
                    typeof n == "function" ? t[l + 1] = n : (t.splice(l, 3), l -= 3), Ac(t);
                }
            } }
        function ch() { function e(o) { o.canIntercept && o.info === "react-transition" && o.intercept({ handler: function () { return new Promise(function (f) { return u = f; }); }, focusReset: "manual", scroll: "manual" }); } function a() { u !== null && (u(), u = null), l || setTimeout(t, 20); } function t() { if (!l && !navigation.transition) {
            var o = navigation.currentEntry;
            o && o.url != null && navigation.navigate(o.url, { state: o.getState(), info: "react-transition", history: "replace" });
        } } if (typeof navigation == "object") {
            var l = !1, u = null;
            return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", a), navigation.addEventListener("navigateerror", a), setTimeout(t, 100), function () { l = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", a), navigation.removeEventListener("navigateerror", a), u !== null && (u(), u = null); };
        } }
        function ti(e) { this._internalRoot = e; }
        nd.prototype.render = ti.prototype.render = function (e) { var a = this._internalRoot; if (a === null)
            throw Error(A(409)); var t = a.current, l = Je(); nh(t, l, e, a, null, null); };
        nd.prototype.unmount = ti.prototype.unmount = function () { var e = this._internalRoot; if (e !== null) {
            this._internalRoot = null;
            var a = e.containerInfo;
            nh(e.current, 2, null, e, null, null), od(), a[tu] = null;
        } };
        function nd(e) { this._internalRoot = e; }
        nd.prototype.unstable_scheduleHydration = function (e) { if (e) {
            var a = Fc();
            e = { blockedOn: null, target: e, priority: a };
            for (var t = 0; t < mt.length && a !== 0 && a < mt[t].priority; t++)
                ;
            mt.splice(t, 0, e), t === 0 && rh(e);
        } };
        var Mc = Tc.version;
        if (Mc !== "19.2.0")
            throw Error(A(527, Mc, "19.2.0"));
        Q.findDOMNode = function (e) { var a = e._reactInternals; if (a === void 0)
            throw typeof e.render == "function" ? Error(A(188)) : (e = Object.keys(e).join(","), Error(A(268, e))); return e = yL(a), e = e !== null ? Rc(e) : null, e = e === null ? null : e.stateNode, e; };
        var P1 = { bundleType: 0, version: "19.2.0", rendererPackageName: "react-dom", currentDispatcherRef: E, reconcilerVersion: "19.2.0" };
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && (Eu = __REACT_DEVTOOLS_GLOBAL_HOOK__, !Eu.isDisabled && Eu.supportsFiber))
            try {
                Lo = Eu.inject(P1), je = Eu;
            }
            catch { }
        var Eu;
        sd.createRoot = function (e, a) { if (!Dc(e))
            throw Error(A(299)); var t = !1, l = "", u = lp, o = up, f = op; return a != null && (a.unstable_strictMode === !0 && (t = !0), a.identifierPrefix !== void 0 && (l = a.identifierPrefix), a.onUncaughtError !== void 0 && (u = a.onUncaughtError), a.onCaughtError !== void 0 && (o = a.onCaughtError), a.onRecoverableError !== void 0 && (f = a.onRecoverableError)), a = fh(e, 1, !1, null, null, t, l, null, u, o, f, ch), e[tu] = a.current, Ks(e), new ti(a); };
        sd.hydrateRoot = function (e, a, t) { if (!Dc(e))
            throw Error(A(299)); var l = !1, u = "", o = lp, f = up, n = op, s = null; return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (n = t.onRecoverableError), t.formState !== void 0 && (s = t.formState)), a = fh(e, 1, !0, a, t ?? null, l, u, s, o, f, n, ch), a.context = dh(null), t = a.current, l = Je(), l = is(l), u = yt(l), u.callback = null, vt(t, u, l), t = l, a.current.lanes = t, xo(a, t), Ba(a), e[tu] = a.current, Ks(e), new nd(a); };
        sd.version = "19.2.0";
    });
    var Lh = ya((Zx, hh) => {
        "use strict";
        function ph() { if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ph);
            }
            catch (e) {
                console.error(e);
            } }
        ph(), hh.exports = mh();
    });
    var xh = ya(id => {
        "use strict";
        var X1 = Symbol.for("react.transitional.element"), Y1 = Symbol.for("react.fragment");
        function gh(e, a, t) { var l = null; if (t !== void 0 && (l = "" + t), a.key !== void 0 && (l = "" + a.key), "key" in a) {
            t = {};
            for (var u in a)
                u !== "key" && (t[u] = a[u]);
        }
        else
            t = a; return a = t.ref, { $$typeof: X1, type: e, key: l, ref: a !== void 0 ? a : null, props: t }; }
        id.Fragment = Y1;
        id.jsx = gh;
        id.jsxs = gh;
    });
    var li = ya((Kx, Sh) => {
        "use strict";
        Sh.exports = xh();
    });
    var _ = fl(sl());
    var il = function (e, a) {
        let u = e, o = cu[a], f = null, n = 0, s = null, r = [], g = {}, p = function (S, v) { n = u * 4 + 17, f = (function (L) { let y = new Array(L); for (let b = 0; b < L; b += 1) {
            y[b] = new Array(L);
            for (let T = 0; T < L; T += 1)
                y[b][T] = null;
        } return y; })(n), i(0, 0), i(n - 7, 0), i(0, n - 7), B(), D(), h(S, v), u >= 7 && q(S), s == null && (s = I(u, o, r)), m(s, v); }, i = function (S, v) { for (let L = -1; L <= 7; L += 1)
            if (!(S + L <= -1 || n <= S + L))
                for (let y = -1; y <= 7; y += 1)
                    v + y <= -1 || n <= v + y || (0 <= L && L <= 6 && (y == 0 || y == 6) || 0 <= y && y <= 6 && (L == 0 || L == 6) || 2 <= L && L <= 4 && 2 <= y && y <= 4 ? f[S + L][v + y] = !0 : f[S + L][v + y] = !1); }, C = function () { let S = 0, v = 0; for (let L = 0; L < 8; L += 1) {
            p(!0, L);
            let y = tt.getLostPoint(g);
            (L == 0 || S > y) && (S = y, v = L);
        } return v; }, D = function () { for (let S = 8; S < n - 8; S += 1)
            f[S][6] == null && (f[S][6] = S % 2 == 0); for (let S = 8; S < n - 8; S += 1)
            f[6][S] == null && (f[6][S] = S % 2 == 0); }, B = function () { let S = tt.getPatternPosition(u); for (let v = 0; v < S.length; v += 1)
            for (let L = 0; L < S.length; L += 1) {
                let y = S[v], b = S[L];
                if (f[y][b] == null)
                    for (let T = -2; T <= 2; T += 1)
                        for (let O = -2; O <= 2; O += 1)
                            T == -2 || T == 2 || O == -2 || O == 2 || T == 0 && O == 0 ? f[y + T][b + O] = !0 : f[y + T][b + O] = !1;
            } }, q = function (S) { let v = tt.getBCHTypeNumber(u); for (let L = 0; L < 18; L += 1) {
            let y = !S && (v >> L & 1) == 1;
            f[Math.floor(L / 3)][L % 3 + n - 8 - 3] = y;
        } for (let L = 0; L < 18; L += 1) {
            let y = !S && (v >> L & 1) == 1;
            f[L % 3 + n - 8 - 3][Math.floor(L / 3)] = y;
        } }, h = function (S, v) { let L = o << 3 | v, y = tt.getBCHTypeInfo(L); for (let b = 0; b < 15; b += 1) {
            let T = !S && (y >> b & 1) == 1;
            b < 6 ? f[b][8] = T : b < 8 ? f[b + 1][8] = T : f[n - 15 + b][8] = T;
        } for (let b = 0; b < 15; b += 1) {
            let T = !S && (y >> b & 1) == 1;
            b < 8 ? f[8][n - b - 1] = T : b < 9 ? f[8][15 - b - 1 + 1] = T : f[8][15 - b - 1] = T;
        } f[n - 8][8] = !S; }, m = function (S, v) { let L = -1, y = n - 1, b = 7, T = 0, O = tt.getMaskFunction(v); for (let H = n - 1; H > 0; H -= 2)
            for (H == 6 && (H -= 1);;) {
                for (let j = 0; j < 2; j += 1)
                    if (f[y][H - j] == null) {
                        let ne = !1;
                        T < S.length && (ne = (S[T] >>> b & 1) == 1), O(y, H - j) && (ne = !ne), f[y][H - j] = ne, b -= 1, b == -1 && (T += 1, b = 7);
                    }
                if (y += L, y < 0 || n <= y) {
                    y -= L, L = -L;
                    break;
                }
            } }, x = function (S, v) { let L = 0, y = 0, b = 0, T = new Array(v.length), O = new Array(v.length); for (let U = 0; U < v.length; U += 1) {
            let K = v[U].dataCount, ke = v[U].totalCount - K;
            y = Math.max(y, K), b = Math.max(b, ke), T[U] = new Array(K);
            for (let ma = 0; ma < T[U].length; ma += 1)
                T[U][ma] = 255 & S.getBuffer()[ma + L];
            L += K;
            let ol = tt.getErrorCorrectPolynomial(ke), su = mu(T[U], ol.getLength() - 1).mod(ol);
            O[U] = new Array(ol.getLength() - 1);
            for (let ma = 0; ma < O[U].length; ma += 1) {
                let Ve = ma + su.getLength() - O[U].length;
                O[U][ma] = Ve >= 0 ? su.getAt(Ve) : 0;
            }
        } let H = 0; for (let U = 0; U < v.length; U += 1)
            H += v[U].totalCount; let j = new Array(H), ne = 0; for (let U = 0; U < y; U += 1)
            for (let K = 0; K < v.length; K += 1)
                U < T[K].length && (j[ne] = T[K][U], ne += 1); for (let U = 0; U < b; U += 1)
            for (let K = 0; K < v.length; K += 1)
                U < O[K].length && (j[ne] = O[K][U], ne += 1); return j; }, I = function (S, v, L) { let y = Bi.getRSBlocks(S, v), b = Ri(); for (let O = 0; O < L.length; O += 1) {
            let H = L[O];
            b.put(H.getMode(), 4), b.put(H.getLength(), tt.getLengthInBits(H.getMode(), S)), H.write(b);
        } let T = 0; for (let O = 0; O < y.length; O += 1)
            T += y[O].dataCount; if (b.getLengthInBits() > T * 8)
            throw "code length overflow. (" + b.getLengthInBits() + ">" + T * 8 + ")"; for (b.getLengthInBits() + 4 <= T * 8 && b.put(0, 4); b.getLengthInBits() % 8 != 0;)
            b.putBit(!1); for (; !(b.getLengthInBits() >= T * 8 || (b.put(236, 8), b.getLengthInBits() >= T * 8));)
            b.put(17, 8); return x(b, y); };
        g.addData = function (S, v) { v = v || "Byte"; let L = null; switch (v) {
            case "Numeric":
                L = nL(S);
                break;
            case "Alphanumeric":
                L = sL(S);
                break;
            case "Byte":
                L = iL(S);
                break;
            case "Kanji":
                L = rL(S);
                break;
            default: throw "mode:" + v;
        } r.push(L), s = null; }, g.isDark = function (S, v) { if (S < 0 || n <= S || v < 0 || n <= v)
            throw S + "," + v; return f[S][v]; }, g.getModuleCount = function () { return n; }, g.make = function () { if (u < 1) {
            let S = 1;
            for (; S < 40; S++) {
                let v = Bi.getRSBlocks(S, o), L = Ri();
                for (let b = 0; b < r.length; b++) {
                    let T = r[b];
                    L.put(T.getMode(), 4), L.put(T.getLength(), tt.getLengthInBits(T.getMode(), S)), T.write(L);
                }
                let y = 0;
                for (let b = 0; b < v.length; b++)
                    y += v[b].dataCount;
                if (L.getLengthInBits() <= y * 8)
                    break;
            }
            u = S;
        } p(!1, C()); }, g.createTableTag = function (S, v) { S = S || 2, v = typeof v > "u" ? S * 4 : v; let L = ""; L += '<table style="', L += " border-width: 0px; border-style: none;", L += " border-collapse: collapse;", L += " padding: 0px; margin: " + v + "px;", L += '">', L += "<tbody>"; for (let y = 0; y < g.getModuleCount(); y += 1) {
            L += "<tr>";
            for (let b = 0; b < g.getModuleCount(); b += 1)
                L += '<td style="', L += " border-width: 0px; border-style: none;", L += " border-collapse: collapse;", L += " padding: 0px; margin: 0px;", L += " width: " + S + "px;", L += " height: " + S + "px;", L += " background-color: ", L += g.isDark(y, b) ? "#000000" : "#ffffff", L += ";", L += '"/>';
            L += "</tr>";
        } return L += "</tbody>", L += "</table>", L; }, g.createSvgTag = function (S, v, L, y) { let b = {}; typeof arguments[0] == "object" && (b = arguments[0], S = b.cellSize, v = b.margin, L = b.alt, y = b.title), S = S || 2, v = typeof v > "u" ? S * 4 : v, L = typeof L == "string" ? { text: L } : L || {}, L.text = L.text || null, L.id = L.text ? L.id || "qrcode-description" : null, y = typeof y == "string" ? { text: y } : y || {}, y.text = y.text || null, y.id = y.text ? y.id || "qrcode-title" : null; let T = g.getModuleCount() * S + v * 2, O, H, j, ne, U = "", K; for (K = "l" + S + ",0 0," + S + " -" + S + ",0 0,-" + S + "z ", U += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', U += b.scalable ? "" : ' width="' + T + 'px" height="' + T + 'px"', U += ' viewBox="0 0 ' + T + " " + T + '" ', U += ' preserveAspectRatio="xMinYMin meet"', U += y.text || L.text ? ' role="img" aria-labelledby="' + R([y.id, L.id].join(" ").trim()) + '"' : "", U += ">", U += y.text ? '<title id="' + R(y.id) + '">' + R(y.text) + "</title>" : "", U += L.text ? '<description id="' + R(L.id) + '">' + R(L.text) + "</description>" : "", U += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', U += '<path d="', j = 0; j < g.getModuleCount(); j += 1)
            for (ne = j * S + v, O = 0; O < g.getModuleCount(); O += 1)
                g.isDark(j, O) && (H = O * S + v, U += "M" + H + "," + ne + K); return U += '" stroke="transparent" fill="black"/>', U += "</svg>", U; }, g.createDataURL = function (S, v) { S = S || 2, v = typeof v > "u" ? S * 4 : v; let L = g.getModuleCount() * S + v * 2, y = v, b = L - v; return hL(L, L, function (T, O) { if (y <= T && T < b && y <= O && O < b) {
            let H = Math.floor((T - y) / S), j = Math.floor((O - y) / S);
            return g.isDark(j, H) ? 0 : 1;
        }
        else
            return 1; }); }, g.createImgTag = function (S, v, L) { S = S || 2, v = typeof v > "u" ? S * 4 : v; let y = g.getModuleCount() * S + v * 2, b = ""; return b += "<img", b += ' src="', b += g.createDataURL(S, v), b += '"', b += ' width="', b += y, b += '"', b += ' height="', b += y, b += '"', L && (b += ' alt="', b += R(L), b += '"'), b += "/>", b; };
        let R = function (S) { let v = ""; for (let L = 0; L < S.length; L += 1) {
            let y = S.charAt(L);
            switch (y) {
                case "<":
                    v += "&lt;";
                    break;
                case ">":
                    v += "&gt;";
                    break;
                case "&":
                    v += "&amp;";
                    break;
                case '"':
                    v += "&quot;";
                    break;
                default:
                    v += y;
                    break;
            }
        } return v; }, V = function (S) {
            S = typeof S > "u" ? 2 : S;
            let L = g.getModuleCount() * 1 + S * 2, y = S, b = L - S, T, O, H, j, ne, U = { "\u2588\u2588": "\u2588", "\u2588 ": "\u2580", " \u2588": "\u2584", "  ": " " }, K = { "\u2588\u2588": "\u2580", "\u2588 ": "\u2580", " \u2588": " ", "  ": " " }, ke = "";
            for (T = 0; T < L; T += 2) {
                for (H = Math.floor((T - y) / 1), j = Math.floor((T + 1 - y) / 1), O = 0; O < L; O += 1)
                    ne = "\u2588", y <= O && O < b && y <= T && T < b && g.isDark(H, Math.floor((O - y) / 1)) && (ne = " "), y <= O && O < b && y <= T + 1 && T + 1 < b && g.isDark(j, Math.floor((O - y) / 1)) ? ne += " " : ne += "\u2588", ke += S < 1 && T + 1 >= b ? K[ne] : U[ne];
                ke += `
`;
            }
            return L % 2 && S > 0 ? ke.substring(0, ke.length - L - 1) + Array(L + 1).join("\u2580") : ke.substring(0, ke.length - 1);
        };
        return g.createASCII = function (S, v) {
            if (S = S || 1, S < 2)
                return V(v);
            S -= 1, v = typeof v > "u" ? S * 2 : v;
            let L = g.getModuleCount() * S + v * 2, y = v, b = L - v, T, O, H, j, ne = Array(S + 1).join("\u2588\u2588"), U = Array(S + 1).join("  "), K = "", ke = "";
            for (T = 0; T < L; T += 1) {
                for (H = Math.floor((T - y) / S), ke = "", O = 0; O < L; O += 1)
                    j = 1, y <= O && O < b && y <= T && T < b && g.isDark(H, Math.floor((O - y) / S)) && (j = 0), ke += j ? ne : U;
                for (H = 0; H < S; H += 1)
                    K += ke + `
`;
            }
            return K.substring(0, K.length - 1);
        }, g.renderTo2dContext = function (S, v) { v = v || 2; let L = g.getModuleCount(); for (let y = 0; y < L; y++)
            for (let b = 0; b < L; b++)
                S.fillStyle = g.isDark(y, b) ? "black" : "white", S.fillRect(b * v, y * v, v, v); }, g;
    };
    il.stringToBytes = function (e) { let a = []; for (let t = 0; t < e.length; t += 1) {
        let l = e.charCodeAt(t);
        a.push(l & 255);
    } return a; };
    il.createStringToBytes = function (e, a) { let t = (function () { let u = mL(e), o = function () { let s = u.read(); if (s == -1)
        throw "eof"; return s; }, f = 0, n = {}; for (;;) {
        let s = u.read();
        if (s == -1)
            break;
        let r = o(), g = o(), p = o(), i = String.fromCharCode(s << 8 | r), C = g << 8 | p;
        n[i] = C, f += 1;
    } if (f != a)
        throw f + " != " + a; return n; })(), l = 63; return function (u) { let o = []; for (let f = 0; f < u.length; f += 1) {
        let n = u.charCodeAt(f);
        if (n < 128)
            o.push(n);
        else {
            let s = t[u.charAt(f)];
            typeof s == "number" ? (s & 255) == s ? o.push(s) : (o.push(s >>> 8), o.push(s & 255)) : o.push(l);
        }
    } return o; }; };
    var Be = { MODE_NUMBER: 1, MODE_ALPHA_NUM: 2, MODE_8BIT_BYTE: 4, MODE_KANJI: 8 }, cu = { L: 1, M: 0, Q: 3, H: 2 }, at = { PATTERN000: 0, PATTERN001: 1, PATTERN010: 2, PATTERN011: 3, PATTERN100: 4, PATTERN101: 5, PATTERN110: 6, PATTERN111: 7 }, tt = (function () { let e = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]], a = 1335, t = 7973, l = 21522, u = {}, o = function (f) { let n = 0; for (; f != 0;)
        n += 1, f >>>= 1; return n; }; return u.getBCHTypeInfo = function (f) { let n = f << 10; for (; o(n) - o(a) >= 0;)
        n ^= a << o(n) - o(a); return (f << 10 | n) ^ l; }, u.getBCHTypeNumber = function (f) { let n = f << 12; for (; o(n) - o(t) >= 0;)
        n ^= t << o(n) - o(t); return f << 12 | n; }, u.getPatternPosition = function (f) { return e[f - 1]; }, u.getMaskFunction = function (f) { switch (f) {
        case at.PATTERN000: return function (n, s) { return (n + s) % 2 == 0; };
        case at.PATTERN001: return function (n, s) { return n % 2 == 0; };
        case at.PATTERN010: return function (n, s) { return s % 3 == 0; };
        case at.PATTERN011: return function (n, s) { return (n + s) % 3 == 0; };
        case at.PATTERN100: return function (n, s) { return (Math.floor(n / 2) + Math.floor(s / 3)) % 2 == 0; };
        case at.PATTERN101: return function (n, s) { return n * s % 2 + n * s % 3 == 0; };
        case at.PATTERN110: return function (n, s) { return (n * s % 2 + n * s % 3) % 2 == 0; };
        case at.PATTERN111: return function (n, s) { return (n * s % 3 + (n + s) % 2) % 2 == 0; };
        default: throw "bad maskPattern:" + f;
    } }, u.getErrorCorrectPolynomial = function (f) { let n = mu([1], 0); for (let s = 0; s < f; s += 1)
        n = n.multiply(mu([1, lt.gexp(s)], 0)); return n; }, u.getLengthInBits = function (f, n) { if (1 <= n && n < 10)
        switch (f) {
            case Be.MODE_NUMBER: return 10;
            case Be.MODE_ALPHA_NUM: return 9;
            case Be.MODE_8BIT_BYTE: return 8;
            case Be.MODE_KANJI: return 8;
            default: throw "mode:" + f;
        }
    else if (n < 27)
        switch (f) {
            case Be.MODE_NUMBER: return 12;
            case Be.MODE_ALPHA_NUM: return 11;
            case Be.MODE_8BIT_BYTE: return 16;
            case Be.MODE_KANJI: return 10;
            default: throw "mode:" + f;
        }
    else if (n < 41)
        switch (f) {
            case Be.MODE_NUMBER: return 14;
            case Be.MODE_ALPHA_NUM: return 13;
            case Be.MODE_8BIT_BYTE: return 16;
            case Be.MODE_KANJI: return 12;
            default: throw "mode:" + f;
        }
    else
        throw "type:" + n; }, u.getLostPoint = function (f) { let n = f.getModuleCount(), s = 0; for (let p = 0; p < n; p += 1)
        for (let i = 0; i < n; i += 1) {
            let C = 0, D = f.isDark(p, i);
            for (let B = -1; B <= 1; B += 1)
                if (!(p + B < 0 || n <= p + B))
                    for (let q = -1; q <= 1; q += 1)
                        i + q < 0 || n <= i + q || B == 0 && q == 0 || D == f.isDark(p + B, i + q) && (C += 1);
            C > 5 && (s += 3 + C - 5);
        } for (let p = 0; p < n - 1; p += 1)
        for (let i = 0; i < n - 1; i += 1) {
            let C = 0;
            f.isDark(p, i) && (C += 1), f.isDark(p + 1, i) && (C += 1), f.isDark(p, i + 1) && (C += 1), f.isDark(p + 1, i + 1) && (C += 1), (C == 0 || C == 4) && (s += 3);
        } for (let p = 0; p < n; p += 1)
        for (let i = 0; i < n - 6; i += 1)
            f.isDark(p, i) && !f.isDark(p, i + 1) && f.isDark(p, i + 2) && f.isDark(p, i + 3) && f.isDark(p, i + 4) && !f.isDark(p, i + 5) && f.isDark(p, i + 6) && (s += 40); for (let p = 0; p < n; p += 1)
        for (let i = 0; i < n - 6; i += 1)
            f.isDark(i, p) && !f.isDark(i + 1, p) && f.isDark(i + 2, p) && f.isDark(i + 3, p) && f.isDark(i + 4, p) && !f.isDark(i + 5, p) && f.isDark(i + 6, p) && (s += 40); let r = 0; for (let p = 0; p < n; p += 1)
        for (let i = 0; i < n; i += 1)
            f.isDark(i, p) && (r += 1); let g = Math.abs(100 * r / n / n - 50) / 5; return s += g * 10, s; }, u; })(), lt = (function () { let e = new Array(256), a = new Array(256); for (let l = 0; l < 8; l += 1)
        e[l] = 1 << l; for (let l = 8; l < 256; l += 1)
        e[l] = e[l - 4] ^ e[l - 5] ^ e[l - 6] ^ e[l - 8]; for (let l = 0; l < 255; l += 1)
        a[e[l]] = l; let t = {}; return t.glog = function (l) { if (l < 1)
        throw "glog(" + l + ")"; return a[l]; }, t.gexp = function (l) { for (; l < 0;)
        l += 255; for (; l >= 256;)
        l -= 255; return e[l]; }, t; })(), mu = function (e, a) { if (typeof e.length > "u")
        throw e.length + "/" + a; let t = (function () { let u = 0; for (; u < e.length && e[u] == 0;)
        u += 1; let o = new Array(e.length - u + a); for (let f = 0; f < e.length - u; f += 1)
        o[f] = e[f + u]; return o; })(), l = {}; return l.getAt = function (u) { return t[u]; }, l.getLength = function () { return t.length; }, l.multiply = function (u) { let o = new Array(l.getLength() + u.getLength() - 1); for (let f = 0; f < l.getLength(); f += 1)
        for (let n = 0; n < u.getLength(); n += 1)
            o[f + n] ^= lt.gexp(lt.glog(l.getAt(f)) + lt.glog(u.getAt(n))); return mu(o, 0); }, l.mod = function (u) { if (l.getLength() - u.getLength() < 0)
        return l; let o = lt.glog(l.getAt(0)) - lt.glog(u.getAt(0)), f = new Array(l.getLength()); for (let n = 0; n < l.getLength(); n += 1)
        f[n] = l.getAt(n); for (let n = 0; n < u.getLength(); n += 1)
        f[n] ^= lt.gexp(lt.glog(u.getAt(n)) + o); return mu(f, 0).mod(u); }, l; }, Bi = (function () { let e = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12, 7, 37, 13], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]], a = function (u, o) { let f = {}; return f.totalCount = u, f.dataCount = o, f; }, t = {}, l = function (u, o) { switch (o) {
        case cu.L: return e[(u - 1) * 4 + 0];
        case cu.M: return e[(u - 1) * 4 + 1];
        case cu.Q: return e[(u - 1) * 4 + 2];
        case cu.H: return e[(u - 1) * 4 + 3];
        default: return;
    } }; return t.getRSBlocks = function (u, o) { let f = l(u, o); if (typeof f > "u")
        throw "bad rs block @ typeNumber:" + u + "/errorCorrectionLevel:" + o; let n = f.length / 3, s = []; for (let r = 0; r < n; r += 1) {
        let g = f[r * 3 + 0], p = f[r * 3 + 1], i = f[r * 3 + 2];
        for (let C = 0; C < g; C += 1)
            s.push(a(p, i));
    } return s; }, t; })(), Ri = function () { let e = [], a = 0, t = {}; return t.getBuffer = function () { return e; }, t.getAt = function (l) { let u = Math.floor(l / 8); return (e[u] >>> 7 - l % 8 & 1) == 1; }, t.put = function (l, u) { for (let o = 0; o < u; o += 1)
        t.putBit((l >>> u - o - 1 & 1) == 1); }, t.getLengthInBits = function () { return a; }, t.putBit = function (l) { let u = Math.floor(a / 8); e.length <= u && e.push(0), l && (e[u] |= 128 >>> a % 8), a += 1; }, t; }, nL = function (e) { let a = Be.MODE_NUMBER, t = e, l = {}; l.getMode = function () { return a; }, l.getLength = function (f) { return t.length; }, l.write = function (f) { let n = t, s = 0; for (; s + 2 < n.length;)
        f.put(u(n.substring(s, s + 3)), 10), s += 3; s < n.length && (n.length - s == 1 ? f.put(u(n.substring(s, s + 1)), 4) : n.length - s == 2 && f.put(u(n.substring(s, s + 2)), 7)); }; let u = function (f) { let n = 0; for (let s = 0; s < f.length; s += 1)
        n = n * 10 + o(f.charAt(s)); return n; }, o = function (f) { if ("0" <= f && f <= "9")
        return f.charCodeAt(0) - 48; throw "illegal char :" + f; }; return l; }, sL = function (e) { let a = Be.MODE_ALPHA_NUM, t = e, l = {}; l.getMode = function () { return a; }, l.getLength = function (o) { return t.length; }, l.write = function (o) { let f = t, n = 0; for (; n + 1 < f.length;)
        o.put(u(f.charAt(n)) * 45 + u(f.charAt(n + 1)), 11), n += 2; n < f.length && o.put(u(f.charAt(n)), 6); }; let u = function (o) { if ("0" <= o && o <= "9")
        return o.charCodeAt(0) - 48; if ("A" <= o && o <= "Z")
        return o.charCodeAt(0) - 65 + 10; switch (o) {
        case " ": return 36;
        case "$": return 37;
        case "%": return 38;
        case "*": return 39;
        case "+": return 40;
        case "-": return 41;
        case ".": return 42;
        case "/": return 43;
        case ":": return 44;
        default: throw "illegal char :" + o;
    } }; return l; }, iL = function (e) { let a = Be.MODE_8BIT_BYTE, t = e, l = il.stringToBytes(e), u = {}; return u.getMode = function () { return a; }, u.getLength = function (o) { return l.length; }, u.write = function (o) { for (let f = 0; f < l.length; f += 1)
        o.put(l[f], 8); }, u; }, rL = function (e) { let a = Be.MODE_KANJI, t = e, l = il.stringToBytes; (function (f, n) { let s = l(f); if (s.length != 2 || (s[0] << 8 | s[1]) != n)
        throw "sjis not supported."; })("\u53CB", 38726); let u = l(e), o = {}; return o.getMode = function () { return a; }, o.getLength = function (f) { return ~~(u.length / 2); }, o.write = function (f) { let n = u, s = 0; for (; s + 1 < n.length;) {
        let r = (255 & n[s]) << 8 | 255 & n[s + 1];
        if (33088 <= r && r <= 40956)
            r -= 33088;
        else if (57408 <= r && r <= 60351)
            r -= 49472;
        else
            throw "illegal char at " + (s + 1) + "/" + r;
        r = (r >>> 8 & 255) * 192 + (r & 255), f.put(r, 13), s += 2;
    } if (s < n.length)
        throw "illegal char at " + (s + 1); }, o; }, ki = function () { let e = [], a = {}; return a.writeByte = function (t) { e.push(t & 255); }, a.writeShort = function (t) { a.writeByte(t), a.writeByte(t >>> 8); }, a.writeBytes = function (t, l, u) { l = l || 0, u = u || t.length; for (let o = 0; o < u; o += 1)
        a.writeByte(t[o + l]); }, a.writeString = function (t) { for (let l = 0; l < t.length; l += 1)
        a.writeByte(t.charCodeAt(l)); }, a.toByteArray = function () { return e; }, a.toString = function () { let t = ""; t += "["; for (let l = 0; l < e.length; l += 1)
        l > 0 && (t += ","), t += e[l]; return t += "]", t; }, a; }, cL = function () { let e = 0, a = 0, t = 0, l = "", u = {}, o = function (n) { l += String.fromCharCode(f(n & 63)); }, f = function (n) { if (n < 0)
        throw "n:" + n; if (n < 26)
        return 65 + n; if (n < 52)
        return 97 + (n - 26); if (n < 62)
        return 48 + (n - 52); if (n == 62)
        return 43; if (n == 63)
        return 47; throw "n:" + n; }; return u.writeByte = function (n) { for (e = e << 8 | n & 255, a += 8, t += 1; a >= 6;)
        o(e >>> a - 6), a -= 6; }, u.flush = function () { if (a > 0 && (o(e << 6 - a), e = 0, a = 0), t % 3 != 0) {
        let n = 3 - t % 3;
        for (let s = 0; s < n; s += 1)
            l += "=";
    } }, u.toString = function () { return l; }, u; }, mL = function (e) { let a = e, t = 0, l = 0, u = 0, o = {}; o.read = function () { for (; u < 8;) {
        if (t >= a.length) {
            if (u == 0)
                return -1;
            throw "unexpected end of file./" + u;
        }
        let s = a.charAt(t);
        if (t += 1, s == "=")
            return u = 0, -1;
        if (s.match(/^\s$/))
            continue;
        l = l << 6 | f(s.charCodeAt(0)), u += 6;
    } let n = l >>> u - 8 & 255; return u -= 8, n; }; let f = function (n) { if (65 <= n && n <= 90)
        return n - 65; if (97 <= n && n <= 122)
        return n - 97 + 26; if (48 <= n && n <= 57)
        return n - 48 + 52; if (n == 43)
        return 62; if (n == 47)
        return 63; throw "c:" + n; }; return o; }, pL = function (e, a) { let t = e, l = a, u = new Array(e * a), o = {}; o.setPixel = function (r, g, p) { u[g * t + r] = p; }, o.write = function (r) { r.writeString("GIF87a"), r.writeShort(t), r.writeShort(l), r.writeByte(128), r.writeByte(0), r.writeByte(0), r.writeByte(0), r.writeByte(0), r.writeByte(0), r.writeByte(255), r.writeByte(255), r.writeByte(255), r.writeString(","), r.writeShort(0), r.writeShort(0), r.writeShort(t), r.writeShort(l), r.writeByte(0); let g = 2, p = n(g); r.writeByte(g); let i = 0; for (; p.length - i > 255;)
        r.writeByte(255), r.writeBytes(p, i, 255), i += 255; r.writeByte(p.length - i), r.writeBytes(p, i, p.length - i), r.writeByte(0), r.writeString(";"); }; let f = function (r) { let g = r, p = 0, i = 0, C = {}; return C.write = function (D, B) { if (D >>> B)
        throw "length over"; for (; p + B >= 8;)
        g.writeByte(255 & (D << p | i)), B -= 8 - p, D >>>= 8 - p, i = 0, p = 0; i = D << p | i, p = p + B; }, C.flush = function () { p > 0 && g.writeByte(i); }, C; }, n = function (r) { let g = 1 << r, p = (1 << r) + 1, i = r + 1, C = s(); for (let m = 0; m < g; m += 1)
        C.add(String.fromCharCode(m)); C.add(String.fromCharCode(g)), C.add(String.fromCharCode(p)); let D = ki(), B = f(D); B.write(g, i); let q = 0, h = String.fromCharCode(u[q]); for (q += 1; q < u.length;) {
        let m = String.fromCharCode(u[q]);
        q += 1, C.contains(h + m) ? h = h + m : (B.write(C.indexOf(h), i), C.size() < 4095 && (C.size() == 1 << i && (i += 1), C.add(h + m)), h = m);
    } return B.write(C.indexOf(h), i), B.write(p, i), B.flush(), D.toByteArray(); }, s = function () { let r = {}, g = 0, p = {}; return p.add = function (i) { if (p.contains(i))
        throw "dup key:" + i; r[i] = g, g += 1; }, p.size = function () { return g; }, p.indexOf = function (i) { return r[i]; }, p.contains = function (i) { return typeof r[i] < "u"; }, p; }; return o; }, hL = function (e, a, t) { let l = pL(e, a); for (let n = 0; n < a; n += 1)
        for (let s = 0; s < e; s += 1)
            l.setPixel(s, n, t(s, n)); let u = ki(); l.write(u); let o = cL(), f = u.toByteArray(); for (let n = 0; n < f.length; n += 1)
        o.writeByte(f[n]); return o.flush(), "data:image/gif;base64," + o; }, Id = il, W1 = il.stringToBytes;
    var ko = fl(sl());
    var Oi = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ro = (...e) => e.filter((a, t, l) => !!a && a.trim() !== "" && l.indexOf(a) === t).join(" ").trim();
    var pu = fl(sl());
    var Ui = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
    var Ei = (0, pu.forwardRef)(({ color: e = "currentColor", size: a = 24, strokeWidth: t = 2, absoluteStrokeWidth: l, className: u = "", children: o, iconNode: f, ...n }, s) => (0, pu.createElement)("svg", { ref: s, ...Ui, width: a, height: a, stroke: e, strokeWidth: l ? Number(t) * 24 / Number(a) : t, className: Ro("lucide", u), ...n }, [...f.map(([r, g]) => (0, pu.createElement)(r, g)), ...Array.isArray(o) ? o : [o]]));
    var k = (e, a) => { let t = (0, ko.forwardRef)(({ className: l, ...u }, o) => (0, ko.createElement)(Ei, { ref: o, iconNode: a, className: Ro(`lucide-${Oi(e)}`, l), ...u })); return t.displayName = `${e}`, t; };
    var Ut = k("Activity", [["path", { d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2", key: "169zse" }]]);
    var Ra = k("ArrowDownToLine", [["path", { d: "M12 17V3", key: "1cwfxf" }], ["path", { d: "m6 11 6 6 6-6", key: "12ii2o" }], ["path", { d: "M19 21H5", key: "150jfl" }]]);
    var aa = k("ArrowRight", [["path", { d: "M5 12h14", key: "1ays0h" }], ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]]);
    var rl = k("ArrowUpRight", [["path", { d: "M7 7h10v10", key: "1tivn9" }], ["path", { d: "M7 17 17 7", key: "1vkiza" }]]);
    var hu = k("Bell", [["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }], ["path", { d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326", key: "11g9vi" }]]);
    var Lu = k("Box", [["path", { d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z", key: "hh9hay" }], ["path", { d: "m3.3 7 8.7 5 8.7-5", key: "g66t2b" }], ["path", { d: "M12 22V12", key: "d0xqtd" }]]);
    var ka = k("ChevronRight", [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]]);
    var ut = k("CircleHelp", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }], ["path", { d: "M12 17h.01", key: "p32p05" }]]);
    var cl = k("Cpu", [["rect", { width: "16", height: "16", x: "4", y: "4", rx: "2", key: "14l7u7" }], ["rect", { width: "6", height: "6", x: "9", y: "9", rx: "1", key: "5aljv4" }], ["path", { d: "M15 2v2", key: "13l42r" }], ["path", { d: "M15 20v2", key: "15mkzm" }], ["path", { d: "M2 15h2", key: "1gxd5l" }], ["path", { d: "M2 9h2", key: "1bbxkp" }], ["path", { d: "M20 15h2", key: "19e6y8" }], ["path", { d: "M20 9h2", key: "19tzq7" }], ["path", { d: "M9 2v2", key: "165o2o" }], ["path", { d: "M9 20v2", key: "i2bqo8" }]]);
    var Et = k("Database", [["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }], ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }], ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]]);
    var qt = k("Droplets", [["path", { d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z", key: "1ptgy4" }], ["path", { d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97", key: "1sl1rz" }]]);
    var gu = k("FlaskConical", [["path", { d: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2", key: "18mbvz" }], ["path", { d: "M6.453 15h11.094", key: "3shlmq" }], ["path", { d: "M8.5 2h7", key: "csnxdl" }]]);
    var va = k("Layers", [["path", { d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z", key: "zw3jo" }], ["path", { d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12", key: "1wduqc" }], ["path", { d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17", key: "kqbvx6" }]]);
    var xu = k("LayoutDashboard", [["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }], ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }], ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }], ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }]]);
    var Oa = k("Leaf", [["path", { d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z", key: "nnexq3" }], ["path", { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12", key: "mt58a7" }]]);
    var Su = k("LogOut", [["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }], ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }], ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]]);
    var ml = k("Pause", [["rect", { x: "14", y: "4", width: "4", height: "16", rx: "1", key: "zuxfzm" }], ["rect", { x: "6", y: "4", width: "4", height: "16", rx: "1", key: "1okwgv" }]]);
    var pl = k("Play", [["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]]);
    var hl = k("Plus", [["path", { d: "M5 12h14", key: "1ays0h" }], ["path", { d: "M12 5v14", key: "s699le" }]]);
    var Cu = k("RefreshCw", [["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }], ["path", { d: "M21 3v5h-5", key: "1q7to0" }], ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }], ["path", { d: "M8 16H3v5", key: "1cv678" }]]);
    var Ll = k("Search", [["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }], ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]]);
    var zt = k("Settings", [["path", { d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z", key: "1qme2f" }], ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]]);
    var Nt = k("ShieldCheck", [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", key: "oel41y" }], ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]]);
    var Ia = k("Sprout", [["path", { d: "M7 20h10", key: "e6iznv" }], ["path", { d: "M10 20c5.5-2.5.8-6.4 3-10", key: "161w41" }], ["path", { d: "M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z", key: "9gtqwd" }], ["path", { d: "M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z", key: "bkxnd2" }]]);
    var gl = k("Thermometer", [["path", { d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z", key: "17jzev" }]]);
    var yu = k("Trash2", [["path", { d: "M3 6h18", key: "d0wm0j" }], ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }], ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }], ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }], ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]]);
    var vu = k("Wind", [["path", { d: "M12.8 19.6A2 2 0 1 0 14 16H2", key: "148xed" }], ["path", { d: "M17.5 8a2.5 2.5 0 1 1 2 4H2", key: "1u4tom" }], ["path", { d: "M9.8 4.4A2 2 0 1 1 11 8H2", key: "75valh" }]]);
    var xl = k("X", [["path", { d: "M18 6 6 18", key: "1bl5f8" }], ["path", { d: "m6 6 12 12", key: "d8bk6v" }]]);
    var Iu = k("Zap", [["path", { d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z", key: "1xq2db" }]]);
    var Ua = [{ name: "Egg", days: "Days 0\u20134", detail: "Keep egg clusters above a suitable moist substrate. Observe hatching and record the start date; timing varies with conditions." }, { name: "Larva", days: "Days 5\u201318", detail: "The active feeding stage converts organic material into wet biomass. Track feed, moisture and temperature; avoid overloading trays." }, { name: "Prepupa", days: "Days 19\u201324", detail: "Larvae darken and feeding reduces. Record harvest mass and separate the breeding population from the production harvest." }, { name: "Pupa", days: "Days 25\u201338", detail: "A non-feeding transformation stage. Maintain a dedicated breeding area and log emergence observations." }, { name: "Adult", days: "Days 39\u201345", detail: "Adults mate and lay eggs to begin the next cycle. Record egg collection and colony observations." }], qi = [29.2, 28.7, 30.1, 29.6, 31.2, 40].map((e, a) => ({ id: a + 1, temp: e, humidity: [65, 68, 62, 70, 66, 83][a], waste: [42, 38, 45, 32, 40, 28][a] }));
    function bu(e) { return Math.sqrt(((e.temp - 29) / 2.5) ** 2 + ((e.humidity - 65) / 8) ** 2); }
    function ot(e, a) { return e.temp > a.temp || e.humidity > a.humidity || bu(e) > 3 ? "Attention" : "Optimal"; }
    function zi(e, a, t, l) { let u = e * a / 100; return { biomass: u, revenue: u * t, margin: u * t - l }; }
    function Oo(e) { return typeof e.name == "string" && e.name.trim().length > 0 && e.name.length <= 80 && Number.isFinite(e.waste) && e.waste > 0 && e.waste <= 1e5 && Ua.some(a => a.name === e.stage) && Number.isInteger(e.module) && e.module >= 1 && e.module <= 6; }
    function Ni(e) {
        let a = t => '"' + String(t).replace(/"/g, '""') + '"';
        return [["ID", "Name", "Module", "Waste kg", "Stage", "Created", "Source"], ...e.map(t => [t.id, t.name, t.module, t.waste, t.stage, t.created_at, t.source])].map(t => t.map(l => a(/^[=+@\-\t\r]/.test(String(l)) ? "'" + l : l)).join(",")).join(`\r
`);
    }
    var Mh = fl(Lh()), d = fl(li()), ea = null, Q1 = [["Overview", xu], ["Waste intake", Oa], ["Farm modules", va], ["Batch registry", Lu], ["Impact lab", gu], ["Settings", zt]], Ch = e => "\u20B9" + e.toLocaleString("en-IN", { maximumFractionDigits: 0 }), rd = () => [1, 2, 3, 4].map(e => ({ id: `demo-${e}`, name: ["Kitchen organics", "Market greens", "Food processing", "Fruit residue"][e - 1], module: e, waste: [42, 38, 45, 32][e - 1], stage: ["Larva", "Prepupa", "Larva", "Egg"][e - 1], created_at: "2026-10-20T09:00:00Z", source: "Demo" }));
    function yh({ icon: e, ...a }) { return (0, d.jsx)(e, { size: 18, strokeWidth: 1.7, ...a }); }
    function vh({ history: e }) { let a = e.map((t, l) => `${l * 600 / Math.max(1, e.length - 1)},${150 - (t - 20) * 5}`).join(" "); return (0, d.jsxs)("svg", { viewBox: "0 0 600 170", className: "chart", role: "img", "aria-label": "Simulated mean temperature trend", children: [(0, d.jsx)("defs", { children: (0, d.jsxs)("linearGradient", { id: "fill", x1: "0", y1: "0", x2: "0", y2: "1", children: [(0, d.jsx)("stop", { offset: "0%", stopColor: "#c5fb70", stopOpacity: ".22" }), (0, d.jsx)("stop", { offset: "100%", stopColor: "#c5fb70", stopOpacity: "0" })] }) }), [30, 70, 110, 150].map(t => (0, d.jsx)("line", { x1: "0", x2: "600", y1: t, y2: t, stroke: "#ffffff10" }, t)), (0, d.jsx)("polygon", { points: `0,170 ${a} 600,170`, fill: "url(#fill)" }), (0, d.jsx)("polyline", { points: a, fill: "none", stroke: "#c5fb70", strokeWidth: "3", strokeLinejoin: "round" }), (0, d.jsx)("circle", { cx: "600", cy: 150 - (e.at(-1) - 20) * 5, r: "4", fill: "#c5fb70" })] }); }
    function Ih({ large: e = !1 }) { return (0, d.jsxs)("div", { className: `cycle ${e ? "large" : ""}`, "aria-hidden": "true", children: [(0, d.jsx)("div", { className: "orbit o1" }), (0, d.jsx)("div", { className: "orbit o2" }), (0, d.jsx)("div", { className: "orbit o3" }), (0, d.jsx)("div", { className: "planet", children: (0, d.jsx)(Ia, { size: e ? 64 : 44 }) }), (0, d.jsx)("span", { className: "satellite s1", children: (0, d.jsx)(Oa, {}) }), (0, d.jsx)("span", { className: "satellite s2", children: (0, d.jsx)(qt, {}) }), (0, d.jsx)("span", { className: "satellite s3", children: (0, d.jsx)(Iu, {}) }), (0, d.jsx)("div", { className: "orbit-caption", children: "CIRCULAR BY NATURE" })] }); }
    var cd = [{ name: "Manure", detail: "Livestock manure \xB7 solid / semi-solid", icon: "\u25C9", color: "#bc926b" }, { name: "Bedding", detail: "Soiled straw, sawdust and bedding", icon: "\u25A4", color: "#edc361" }, { name: "Fodder", detail: "Leftover plant-based feed", icon: "\u2767", color: "#a4d17b" }, { name: "Spoiled crops", detail: "Fruit and vegetable residues", icon: "\u25CD", color: "#e58f79" }, { name: "Other residues", detail: "Other farm residues \u2014 specify in notes", icon: "\u2733", color: "#a8abc9" }], bh = () => ({ type: "Manure", source: "", quantity: 25, date: new Date().toLocaleDateString("en-CA"), condition: "Fresh / good", separated: !1, assessed: !1, chemicals: !1, medicines: !1, materials: !1, notes: "" }), xa = e => e.chemicals || e.medicines || e.materials || !e.separated || !e.assessed || e.condition !== "Fresh / good", ui = e => typeof e.id == "string" && typeof e.source == "string" && e.source.trim().length > 0 && Number.isFinite(e.quantity) && e.quantity > 0 && e.quantity <= 1e5 && cd.some(a => a.name === e.type) && /^\d{4}-\d{2}-\d{2}$/.test(e.date) && ["Fresh / good", "Stored / aged", "Degraded / unusual", "Unknown"].includes(e.condition) && ["separated", "assessed", "chemicals", "medicines", "materials"].every(a => typeof e[a] == "boolean") && typeof e.notes == "string";
    function Z1({ record: e }) { let a = Id(0, "M"); return a.addData(JSON.stringify({ app: "ModuFly AI", id: e.id, type: e.type, source: e.source, kg: e.quantity, date: e.date, status: xa(e) ? "Hold for review" : "Recorded - review required" })), a.make(), (0, d.jsx)("img", { className: "qr-image", alt: "QR traceability label for " + e.id, src: a.createDataURL(4, 16) }); }
    function qrBatchPayload(e) { return { app: "ModuFly AI", record_type: "batch", id: e.id, name: e.name, module: e.module, waste_kg: e.waste, stage: e.stage, created_at: e.created_at, source: e.source }; }
    function qrBatchUrl(e) { let a = qrBatchPayload(e); return ["MODUFLY AI - BATCH DETAILS", "------------------------", "Batch ID: " + (a.id ?? "N/A"), "Batch Name: " + (a.name ?? "N/A"), "Assigned Module: " + (a.module ?? "N/A"), "Waste Input (kg): " + (a.waste_kg ?? "N/A"), "Lifecycle Stage: " + (a.stage ?? "N/A"), "Created At: " + (a.created_at ?? "N/A"), "Source: " + (a.source ?? "N/A")].join("\n"); }
    function B1({ batch: e }) { let a = Id(0, "M"); return a.addData(qrBatchUrl(e)), a.make(), (0, d.jsx)("img", { className: "qr-image", alt: "QR code for batch " + e.name, src: a.createDataURL(4, 16) }); }
    function Ah() {
        let [e, a] = (0, _.useState)("Overview"), [t, l] = (0, _.useState)(qi), [u, o] = (0, _.useState)(!1), [f, n] = (0, _.useState)([28, 29, 28.8, 30.5, 29.8, 31, 30.2, 31.1, 30.5, 31.3, 30.8, 31.5]), [s, r] = (0, _.useState)([]), [g, p] = (0, _.useState)(!1), [i, C] = (0, _.useState)({ temp: 35, humidity: 85 }), [D, B] = (0, _.useState)(""), [q, h] = (0, _.useState)("All"), [m, x] = (0, _.useState)(null), [I, R] = (0, _.useState)(1), [V, S] = (0, _.useState)(null), [v, L] = (0, _.useState)(""), [y, b] = (0, _.useState)(!1), [T, O] = (0, _.useState)(null), [H, j] = (0, _.useState)(!1), [ne, U] = (0, _.useState)(100), [K, ke] = (0, _.useState)(15), [ol, oi] = (0, _.useState)(50), [su, ma] = (0, _.useState)(500), [Ve, To] = (0, _.useState)([]), [fi, Th] = (0, _.useState)(!1), [re, Sa] = (0, _.useState)(bh), [di, Dh] = (0, _.useState)(""), [md, wh] = (0, _.useState)("All"), [Z, pd] = (0, _.useState)(null), [pa, iu] = (0, _.useState)({ name: "", module: 1, waste: 25, stage: "Egg" }), [ni, Bh] = (0, _.useState)(""), [si, ii] = (0, _.useState)("");
        (0, _.useEffect)(() => { try {
            let M = JSON.parse(localStorage.getItem("modufly-v2") || "null");
            r(M?.batches?.filter(Oo) || rd()), M?.limits && Number.isFinite(M.limits.temp) && Number.isFinite(M.limits.humidity) && C(M.limits);
        }
        catch {
            r(rd()), L("Local records could not be loaded. Demo records restored.");
        } if (p(!0), !ea)
            return; ea.auth.getSession().then(({ data: M, error: w }) => { w && L(w.message), O(M.session?.user || null); }); let { data: c } = ea.auth.onAuthStateChange((M, w) => { O(w?.user || null), j(!1); }); return () => c.subscription.unsubscribe(); }, []), (0, _.useEffect)(() => { if (g && !H && !T)
            try {
                localStorage.setItem("modufly-v2", JSON.stringify({ batches: s, limits: i }));
            }
            catch {
                L("Browser storage unavailable. Export records to keep a copy.");
            } }, [s, i, g, H, T]), (0, _.useEffect)(() => { if (!v)
            return; let c = setTimeout(() => L(""), 7e3); return () => clearTimeout(c); }, [v]), (0, _.useEffect)(() => { if (!u)
            return; let c = setInterval(() => { l(M => M.map(w => ({ ...w, temp: Math.max(20, Math.min(45, +(w.temp + (Math.random() - .5) * .6).toFixed(1))), humidity: Math.max(30, Math.min(95, +(w.humidity + (Math.random() - .5)).toFixed(1))) }))); }, 3e3); return () => clearInterval(c); }, [u]), (0, _.useEffect)(() => { n(c => [...c.slice(-19), t.reduce((M, w) => M + w.temp, 0) / 6]); }, [t]), (0, _.useEffect)(() => { if (!m)
            return; let c = document.activeElement, M = setTimeout(() => document.querySelector(".modal input,.modal .close")?.focus(), 20), w = ae => { if (ae.key === "Escape" && !y && x(null), ae.key === "Tab") {
            let ru = [...document.querySelectorAll(".modal button:not(:disabled),.modal input,.modal select")], hi = ru[0], Li = ru.at(-1);
            ae.shiftKey && document.activeElement === hi ? (ae.preventDefault(), Li?.focus()) : !ae.shiftKey && document.activeElement === Li && (ae.preventDefault(), hi?.focus());
        } }; return document.addEventListener("keydown", w), () => { clearTimeout(M), document.removeEventListener("keydown", w), c?.focus(); }; }, [m, y]), (0, _.useEffect)(() => { try {
            let c = JSON.parse(localStorage.getItem("modufly-intake-v1") || "[]");
            Array.isArray(c) && To(c.filter(ui));
        }
        catch {
            L("Waste records could not be loaded. Restore a backup if available.");
        } Th(!0); }, []), (0, _.useEffect)(() => { if (fi)
            try {
                localStorage.setItem("modufly-intake-v1", JSON.stringify(Ve));
            }
            catch {
                L("Browser storage unavailable. Download a backup to keep your records.");
            } }, [Ve, fi]);
        function Rh(c) { c.preventDefault(); let M = { ...re, source: re.source.trim(), id: "MF-" + re.date.replaceAll("-", "") + "-" + crypto.randomUUID().slice(0, 8).toUpperCase(), created_at: new Date().toISOString(), batch_id: null }; if (!ui(M)) {
            L("Please enter a valid source, date and positive weight.");
            return;
        } To(w => [M, ...w]), pd(M), Sa(bh()), x("waste-record"), L("Waste load recorded with a unique traceability ID."); }
        function kh(c) { if (xa(c)) {
            L("This load is on hold. Resolve the recorded risks outside the demo before production use.");
            return;
        } if (c.batch_id || !confirm("Confirm that a responsible operator has reviewed this feedstock for your intended use. The software does not establish biological or feed safety. Create a linked batch?"))
            return; let M = crypto.randomUUID(); r(w => [{ id: M, name: c.type + " \xB7 " + c.id, module: 1, waste: c.quantity, stage: "Egg", created_at: new Date().toISOString(), source: "Manual" }, ...w]), To(w => w.map(ae => ae.id === c.id ? { ...ae, batch_id: M } : ae)), pd({ ...c, batch_id: M }), L("Linked batch created in Module 01. Its waste is now counted in the dashboard."); }
        function Oh() { let c = new Blob([JSON.stringify({ version: 1, loads: Ve, batches: s, limits: i }, null, 2)], { type: "application/json" }); hd(c, "ModuFlyAI-backup.json"); }
        function hd(c, M) { let w = URL.createObjectURL(c), ae = document.createElement("a"); ae.href = w, ae.download = M, ae.click(), setTimeout(() => URL.revokeObjectURL(w), 1e3); }
        function Uh() {
            let c = ["id", "type", "source", "quantity", "date", "condition", "separated", "assessed", "chemicals", "medicines", "materials", "notes", "batch_id"], M = w => '"' + String(w ?? "").replace(/^[=+@\-\t\r]/, "'$&").replaceAll('"', '""') + '"';
            hd(new Blob([[c, ...Ve.map(w => c.map(ae => w[ae]))].map(w => w.map(M).join(",")).join(`\r
`)], { type: "text/csv;charset=utf-8" }), "ModuFlyAI-waste-register.csv");
        }
        async function Eh(c) { let M = c.target.files?.[0]; if (c.target.value = "", !!M)
            try {
                if (M.size > 5e6)
                    throw Error("Backup must be smaller than 5 MB.");
                let w = JSON.parse(await M.text());
                if (w.version !== 1 || !Array.isArray(w.loads) || !w.loads.every(ui) || !Array.isArray(w.batches) || !w.batches.every(Oo) || !w.limits || !Number.isFinite(w.limits.temp) || w.limits.temp < 25 || w.limits.temp > 45 || !Number.isFinite(w.limits.humidity) || w.limits.humidity < 50 || w.limits.humidity > 95)
                    throw Error("This is not a valid ModuFly AI backup.");
                if (!confirm("Replace the current records with this backup? Download your current backup first if needed."))
                    return;
                To(w.loads), r(w.batches), C(w.limits), L("Backup restored successfully.");
            }
            catch (w) {
                L("Restore failed: " + w.message);
            } }
        let Ca = t.filter(c => ot(c, i) === "Attention"), Do = s.reduce((c, M) => c + M.waste, 0), wo = zi(ne, K, ol, su);
        async function ri() { if (!ea || !T) {
            x("auth");
            return;
        } b(!0); try {
            let { data: c, error: M } = await ea.from("batches").select("*").order("created_at", { ascending: !1 });
            if (M)
                throw M;
            r(c), j(!0), L("Cloud records loaded. You are now editing your database records.");
        }
        catch (c) {
            L("Database: " + c.message);
        }
        finally {
            b(!1);
        } }
        async function qh(c) { if (c.preventDefault(), !Oo(pa)) {
            L("Enter a batch name and a valid positive waste weight.");
            return;
        } b(!0); try {
            let M = { ...pa, name: pa.name.trim(), id: crypto.randomUUID(), created_at: new Date().toISOString(), source: "Manual" };
            if (H) {
                let { data: w, error: ae } = await ea.from("batches").insert({ ...M, user_id: T.id }).select().single();
                if (ae)
                    throw ae;
                M = w;
            }
            r(w => [M, ...w]), pd(M), x("batch-qr"), iu({ name: "", module: 1, waste: 25, stage: "Egg" }), L("Batch created. QR traceability label is ready.");
        }
        catch (M) {
            L("Save failed: " + M.message);
        }
        finally {
            b(!1);
        } }
        async function zh(c, M) { b(!0); try {
            if (H) {
                let { error: w } = await ea.from("batches").update({ stage: M }).eq("id", c.id);
                if (w)
                    throw w;
            }
            r(w => w.map(ae => ae.id === c.id ? { ...ae, stage: M } : ae)), L("Lifecycle stage updated.");
        }
        catch (w) {
            L("Update failed: " + w.message);
        }
        finally {
            b(!1);
        } }
        async function Nh(c) { if (confirm(`Delete ${c.name}? Export first if you need this record.`)) {
            b(!0);
            try {
                if (H) {
                    let { error: M } = await ea.from("batches").delete().eq("id", c.id);
                    if (M)
                        throw M;
                }
                r(M => M.filter(w => w.id !== c.id));
            }
            catch (M) {
                L("Delete failed: " + M.message);
            }
            finally {
                b(!1);
            }
        } }
        async function ci(c, M = !1) { c.preventDefault(), b(!0); try {
            let { error: w } = await ea.auth[M ? "signUp" : "signInWithPassword"]({ email: ni, password: si });
            if (w)
                throw w;
            L(M ? "Account requested. Check your email if confirmation is enabled." : "Signed in. Use Load cloud records to open your database."), ii(""), x(null);
        }
        catch (w) {
            L(w.message);
        }
        finally {
            b(!1);
        } }
        function mi() { let c = URL.createObjectURL(new Blob([Ni(s)], { type: "text/csv;charset=utf-8;" })), M = document.createElement("a"); M.href = c, M.download = "modufly-batches.csv", M.click(), URL.revokeObjectURL(c); }
        let pi = (0, d.jsx)("div", { className: "module-grid", children: t.map(c => (0, d.jsxs)("button", { className: `module-card ${ot(c, i) === "Attention" ? "warning" : ""}`, onClick: () => { S(c.id), x("module"); }, children: [(0, d.jsxs)("div", { className: "row", children: [(0, d.jsx)("span", { className: "module-icon", children: (0, d.jsx)(va, { size: 20 }) }), (0, d.jsxs)("span", { className: `badge ${ot(c, i) === "Attention" ? "amber" : ""}`, children: [(0, d.jsx)("i", {}), ot(c, i)] })] }), (0, d.jsxs)("h3", { children: ["Module 0", c.id] }), (0, d.jsxs)("p", { children: ["BSF cultivation unit ", (0, d.jsx)(ka, { size: 14 })] }), (0, d.jsxs)("div", { className: "sensor-row", children: [(0, d.jsxs)("span", { children: [(0, d.jsx)(gl, { size: 15 }), (0, d.jsxs)("b", { children: [c.temp.toFixed(1), "\xB0"] })] }), (0, d.jsxs)("span", { children: [(0, d.jsx)(qt, { size: 15 }), (0, d.jsxs)("b", { children: [c.humidity.toFixed(0), "%"] })] })] }), (0, d.jsx)("div", { className: "meter", children: (0, d.jsx)("span", { style: { width: Math.min(100, c.waste * 2) + "%" } }) }), (0, d.jsxs)("div", { className: "row muted tiny", children: [(0, d.jsx)("span", { children: "Feed allocation" }), (0, d.jsxs)("span", { children: [c.waste, " kg \xB7 demo"] })] })] }, c.id)) }), Hh = (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)("div", { className: "table-tools", children: [(0, d.jsxs)("label", { className: "search", children: [(0, d.jsx)(Ll, { size: 16 }), (0, d.jsx)("input", { "aria-label": "Search batches", placeholder: "Search batches or module\u2026", value: D, onChange: c => B(c.target.value) })] }), (0, d.jsxs)("select", { "aria-label": "Filter lifecycle stage", value: q, onChange: c => h(c.target.value), children: [(0, d.jsx)("option", { children: "All" }), Ua.map(c => (0, d.jsx)("option", { children: c.name }, c.name))] }), (0, d.jsxs)("button", { className: "secondary", onClick: mi, children: [(0, d.jsx)(Ra, { size: 16 }), "Export CSV"] })] }), (0, d.jsxs)("div", { className: "table-wrap", children: [(0, d.jsxs)("table", { children: [(0, d.jsx)("thead", { children: (0, d.jsxs)("tr", { children: [(0, d.jsx)("th", { children: "Batch / feedstock" }), (0, d.jsx)("th", { children: "Module" }), (0, d.jsx)("th", { children: "Input" }), (0, d.jsx)("th", { children: "Lifecycle" }), (0, d.jsx)("th", { children: "Source" }), (0, d.jsx)("th", { children: "Action" })] }) }), (0, d.jsx)("tbody", { children: s.filter(c => (q === "All" || c.stage === q) && `${c.name} ${c.module} ${c.id}`.toLowerCase().includes(D.toLowerCase())).map(c => (0, d.jsxs)("tr", { children: [(0, d.jsxs)("td", { children: [(0, d.jsx)("strong", { children: c.name }), (0, d.jsxs)("small", { children: [c.id.slice(0, 12), " \xB7 ", new Date(c.created_at).toLocaleDateString("en-IN")] })] }), (0, d.jsxs)("td", { children: ["Unit 0", c.module] }), (0, d.jsxs)("td", { children: [c.waste, " kg"] }), (0, d.jsx)("td", { children: (0, d.jsx)("select", { "aria-label": `Stage of ${c.name}`, disabled: y, value: c.stage, onChange: M => zh(c, M.target.value), children: Ua.map(M => (0, d.jsx)("option", { children: M.name }, M.name)) }) }), (0, d.jsx)("td", { children: (0, d.jsx)("span", { className: "badge neutral", children: c.source }) }), (0, d.jsx)("td", { children: (0, d.jsx)("button", { className: "icon-button", disabled: y, "aria-label": `Delete ${c.name}`, onClick: () => Nh(c), children: (0, d.jsx)(yu, { size: 16 }) }) })] }, c.id)) })] }), !s.length && (0, d.jsx)("p", { className: "empty", children: "No records yet. Create your first batch to start tracking." })] })] });
        return (0, d.jsxs)("div", { className: "app-shell", children: [(0, d.jsxs)("aside", { className: "sidebar", children: [(0, d.jsxs)("a", { className: "brand", href: "#", onClick: () => a("Overview"), children: [(0, d.jsx)("span", { className: "brand-mark", children: (0, d.jsx)(Ia, { size: 25 }) }), "ModuFly", (0, d.jsx)("span", { children: "AI" })] }), (0, d.jsxs)("div", { className: "workspace", children: [(0, d.jsx)("span", { className: "workspace-icon", children: "M" }), (0, d.jsxs)("div", { children: [(0, d.jsx)("strong", { children: "Living Systems Lab" }), (0, d.jsx)("small", { children: "Hackathon workspace" })] }), (0, d.jsx)(ka, { size: 16 })] }), (0, d.jsx)("p", { className: "nav-label", children: "WORKSPACE" }), (0, d.jsx)("nav", { children: Q1.map(([c, M]) => (0, d.jsxs)("button", { className: e === c ? "active" : "", onClick: () => a(c), children: [(0, d.jsx)(yh, { icon: M }), c, c === "Farm modules" && (0, d.jsx)("span", { className: "nav-count", children: "6" })] }, c)) }), (0, d.jsxs)("div", { className: "sidebar-bottom", children: [(0, d.jsxs)("div", { className: "eco-note", children: [(0, d.jsx)(Oa, { size: 22 }), (0, d.jsxs)("strong", { children: ["Small organisms.", (0, d.jsx)("br", {}), "Extraordinary impact."] }), (0, d.jsx)("p", { children: "A smarter loop for organic waste." }), (0, d.jsxs)("button", { onClick: () => a("Impact lab"), children: ["Explore your impact ", (0, d.jsx)(rl, { size: 15 })] })] }), (0, d.jsxs)("button", { className: "profile", onClick: () => x("auth"), children: [(0, d.jsx)("span", { className: "avatar", children: T ? "U" : "ML" }), (0, d.jsxs)("span", { children: [(0, d.jsx)("strong", { children: T ? "Cloud operator" : "Demo operator" }), (0, d.jsx)("small", { children: T ? T.email : "Local workspace" })] }), (0, d.jsx)(zt, { size: 16 })] })] })] }), (0, d.jsxs)("main", { children: [(0, d.jsxs)("header", { className: "topbar", children: [(0, d.jsxs)("span", { children: ["Workspace ", (0, d.jsx)(ka, { size: 14 }), " ", (0, d.jsx)("b", { children: e })] }), (0, d.jsxs)("div", { className: "row", children: [(0, d.jsxs)("span", { className: "connection", children: [(0, d.jsx)("i", {}), H ? "Cloud database" : "Local demo"] }), (0, d.jsxs)("button", { className: "icon-button", "aria-label": "View alerts", onClick: () => x("alerts"), children: [(0, d.jsx)(hu, { size: 19 }), Ca.length > 0 && (0, d.jsx)("em", {})] }), (0, d.jsx)("button", { className: "icon-button", "aria-label": "Project information", onClick: () => x("help"), children: (0, d.jsx)(ut, { size: 19 }) })] })] }), (0, d.jsxs)("div", { className: "content", children: [(0, d.jsxs)("div", { className: "page-heading", children: [(0, d.jsxs)("div", { children: [(0, d.jsx)("p", { className: "eyebrow", children: "INTELLIGENCE MEETS CIRCULARITY" }), (0, d.jsx)("h1", { children: e === "Overview" ? "A living system. A clearer picture." : e }), (0, d.jsx)("p", { className: "muted", children: e === "Overview" ? "Your waste-to-value operation, connected in one place." : e === "Waste intake" ? "Collect, separate, screen and trace every incoming waste load." : e === "Farm modules" ? "Explore environmental readings and inspect each cultivation unit." : e === "Batch registry" ? "Track every batch from feedstock to lifecycle stage." : e === "Impact lab" ? "Turn assumptions into transparent production scenarios." : "Manage thresholds, data connections and your workspace." })] }), (0, d.jsxs)("button", { className: "primary", onClick: () => e === "Waste intake" ? document.querySelector(".type-options")?.scrollIntoView({ behavior: "smooth", block: "center" }) : x("batch"), children: [(0, d.jsx)(hl, { size: 17 }), " ", e === "Waste intake" ? "Register waste" : "Create batch"] })] }), e === "Overview" && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)("button", { className: "intake-entry", onClick: () => a("Waste intake"), children: [(0, d.jsx)(Oa, { size: 20 }), (0, d.jsxs)("span", { children: [(0, d.jsx)("strong", { children: "From farm waste to full traceability" }), (0, d.jsx)("small", { children: "Collect \u2192 Separate \u2192 Screen \u2192 Assign a unique record" })] }), (0, d.jsx)(aa, { size: 18 })] }), (0, d.jsxs)("section", { className: "hero", children: [(0, d.jsxs)("div", { className: "hero-copy", children: [(0, d.jsxs)("span", { className: "pill", children: [(0, d.jsx)("span", {}), " BUILT FOR A REGENERATIVE FUTURE"] }), (0, d.jsxs)("h2", { children: ["Waste becomes", (0, d.jsx)("br", {}), (0, d.jsx)("span", { children: "the next beginning." })] }), (0, d.jsxs)("p", { children: ["Monitor your farm. Understand your biology.", (0, d.jsx)("br", {}), "Make every resource count."] }), (0, d.jsxs)("button", { className: "hero-link", onClick: () => a("Impact lab"), children: ["Open impact lab ", (0, d.jsx)(aa, { size: 17 })] })] }), (0, d.jsx)(Ih, {}), (0, d.jsxs)("div", { className: "hero-meta", children: [(0, d.jsx)("span", { children: "01 / CIRCULAR SYSTEMS" }), (0, d.jsx)("span", { children: "BLACK SOLDIER FLY BIOCONVERSION" })] })] }), (0, d.jsx)("section", { className: "kpi-grid", children: [[va, "Modules monitored", "06", `${6 - Ca.length} within demo limits`], [Oa, "Waste registered", `${Do.toFixed(0)} kg`, `${s.length} traceable batches`], [Ia, "Scenario wet biomass", `${(Do * K / 100).toFixed(1)} kg`, `${K}% assumed conversion`], [Ut, "Needs attention", String(Ca.length).padStart(2, "0"), "Simulated module readings"]].map(([c, M, w, ae], ru) => (0, d.jsxs)("article", { className: "kpi", children: [(0, d.jsxs)("div", { className: "row", children: [(0, d.jsx)("span", { children: M }), (0, d.jsx)(yh, { icon: c })] }), (0, d.jsx)("strong", { children: w }), (0, d.jsxs)("small", { className: ru === 3 ? "amber-text" : "", children: [ru !== 3 && (0, d.jsx)(rl, { size: 13 }), " ", ae] })] }, M)) }), (0, d.jsxs)("div", { className: "split", children: [(0, d.jsxs)("section", { className: "panel trend-panel", children: [(0, d.jsxs)("div", { className: "section-head", children: [(0, d.jsxs)("div", { children: [(0, d.jsx)("h2", { children: "Environmental pulse" }), (0, d.jsx)("p", { children: "Mean temperature \xB7 simulated samples" })] }), (0, d.jsxs)("button", { className: `secondary ${u ? "live" : ""}`, onClick: () => o(!u), children: [u ? (0, d.jsx)(ml, { size: 14 }) : (0, d.jsx)(pl, { size: 14 }), " ", u ? "Pause demo" : "Run demo"] })] }), (0, d.jsxs)("div", { className: "trend-value", children: [(t.reduce((c, M) => c + M.temp, 0) / 6).toFixed(1), (0, d.jsx)("span", { children: "\xB0C" }), (0, d.jsx)("span", { className: "badge", children: "Demo telemetry" })] }), (0, d.jsx)(vh, { history: f }), (0, d.jsxs)("div", { className: "chart-axis", children: [(0, d.jsx)("span", { children: "Earlier samples" }), (0, d.jsx)("span", { children: "Latest reading" })] })] }), (0, d.jsxs)("section", { className: "panel intelligence", children: [(0, d.jsxs)("div", { className: "row", children: [(0, d.jsx)("span", { className: "ai-icon", children: (0, d.jsx)(cl, { size: 20 }) }), (0, d.jsx)("span", { className: "badge neutral", children: "EXPLAINABLE DEMO" })] }), (0, d.jsx)("h2", { children: "A second pair of eyes." }), (0, d.jsxs)("p", { children: [Ca.length, " module", Ca.length !== 1 ? "s" : "", " need a closer look based on configured limits or unusual readings."] }), (0, d.jsxs)("div", { className: "insight", children: [(0, d.jsx)("span", { className: "amber-dot" }), (0, d.jsxs)("div", { children: [(0, d.jsx)("strong", { children: Ca.length ? `Inspect Module 0${Ca[0].id}` : "All modules in range" }), (0, d.jsx)("small", { children: Ca.length ? "Review temperature, moisture and recent feed." : "Continue observation and batch logging." })] })] }), (0, d.jsxs)("button", { className: "text-button", onClick: () => x("alerts"), children: ["Review insights ", (0, d.jsx)(aa, { size: 16 })] })] })] }), (0, d.jsxs)("section", { className: "section", children: [(0, d.jsxs)("div", { className: "section-head", children: [(0, d.jsxs)("div", { children: [(0, d.jsxs)("h2", { children: ["Your farm, at a glance ", (0, d.jsx)("span", { className: "count", children: "6 UNITS" })] }), (0, d.jsx)("p", { children: "Click a module to inspect its readings." })] }), (0, d.jsxs)("button", { className: "text-button", onClick: () => a("Farm modules"), children: ["View all modules ", (0, d.jsx)(aa, { size: 16 })] })] }), pi] })] }), e === "Waste intake" && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)("section", { className: "intake-flow", children: [["01", "Collect farm waste", "Identify the incoming organic material."], ["02", "Separate at source", "Keep different waste streams apart."], ["03", "Record & check", "Log source, weight and contamination risks."], ["04", "Assign a record", "Generate a unique ID and offline QR label."]].map(([c, M, w]) => (0, d.jsxs)("article", { children: [(0, d.jsx)("span", { children: c }), (0, d.jsx)("h3", { children: M }), (0, d.jsx)("p", { children: w })] }, c)) }), (0, d.jsxs)("div", { className: "intake-layout", children: [(0, d.jsxs)("section", { className: "panel", children: [(0, d.jsx)("p", { className: "eyebrow", children: "SOURCE \u2192 SEPARATION \u2192 TRACEABILITY" }), (0, d.jsx)("h2", { children: "Register incoming waste" }), (0, d.jsxs)("form", { onSubmit: Rh, children: [(0, d.jsxs)("fieldset", { className: "type-options", children: [(0, d.jsx)("legend", { children: "1. Choose a waste stream" }), cd.map(c => (0, d.jsxs)("button", { type: "button", className: re.type === c.name ? "chosen" : "", onClick: () => Sa({ ...re, type: c.name }), children: [(0, d.jsx)("span", { style: { color: c.color }, children: c.icon }), (0, d.jsx)("strong", { children: c.name }), (0, d.jsx)("small", { children: c.detail })] }, c.name))] }), (0, d.jsxs)("label", { className: "check-line", children: [(0, d.jsx)("input", { type: "checkbox", checked: re.separated, onChange: c => Sa({ ...re, separated: c.target.checked }) }), "This waste stream was kept separate at source."] }), (0, d.jsx)("h3", { className: "form-section-title", children: "2. Record & check details" }), (0, d.jsxs)("label", { children: ["Animal / farm source", (0, d.jsx)("input", { required: !0, maxLength: "100", placeholder: "e.g. Cow Farm \u2014 Unit 1", value: re.source, onChange: c => Sa({ ...re, source: c.target.value }) })] }), (0, d.jsxs)("div", { className: "form-grid", children: [(0, d.jsxs)("label", { children: ["Quantity (kg)", (0, d.jsx)("input", { type: "number", min: ".01", max: "100000", step: ".01", required: !0, value: re.quantity, onChange: c => Sa({ ...re, quantity: +c.target.value }) })] }), (0, d.jsxs)("label", { children: ["Collection date", (0, d.jsx)("input", { type: "date", required: !0, value: re.date, onChange: c => Sa({ ...re, date: c.target.value }) })] })] }), (0, d.jsxs)("label", { children: ["Observed condition", (0, d.jsx)("select", { value: re.condition, onChange: c => Sa({ ...re, condition: c.target.value }), children: ["Fresh / good", "Stored / aged", "Degraded / unusual", "Unknown"].map(c => (0, d.jsx)("option", { children: c }, c)) })] }), (0, d.jsxs)("fieldset", { className: "risk-box", children: [(0, d.jsx)("legend", { children: "3. Contamination screening" }), (0, d.jsx)("p", { children: "Select each risk reported or suspected for this load." }), [["chemicals", "Chemicals \u2014 pesticides or fertilizers"], ["medicines", "Medicines \u2014 antibiotics or hormones"], ["materials", "Unsuitable materials \u2014 plastic, metal or glass"]].map(([c, M]) => (0, d.jsxs)("label", { className: "check-line", children: [(0, d.jsx)("input", { type: "checkbox", checked: re[c], onChange: w => Sa({ ...re, [c]: w.target.checked }) }), M] }, c)), (0, d.jsxs)("label", { className: "check-line assessed", children: [(0, d.jsx)("input", { type: "checkbox", checked: re.assessed, onChange: c => Sa({ ...re, assessed: c.target.checked }) }), "I have completed the source and contamination checks."] })] }), (0, d.jsxs)("label", { children: ["Inspection notes / other residue details", (0, d.jsx)("textarea", { rows: "3", maxLength: "1000", placeholder: "Record observations, origin details or follow-up actions\u2026", value: re.notes, onChange: c => Sa({ ...re, notes: c.target.value }) })] }), (0, d.jsxs)("div", { className: "intake-outcome", children: [(0, d.jsx)(Nt, { size: 18 }), (0, d.jsx)("span", { children: xa(re) ? "Will be recorded on hold for review." : "Will be recorded; operator review is still required." })] }), (0, d.jsxs)("button", { className: "primary full", type: "submit", children: [(0, d.jsx)(hl, { size: 16 }), "Record load & generate ID"] }), (0, d.jsx)("p", { className: "footnote", children: "Screening is based on user declarations. The app cannot detect residues, certify safety or approve a material as animal feed." })] })] }), (0, d.jsxs)("div", { className: "intake-side", children: [(0, d.jsxs)("section", { className: "panel", children: [(0, d.jsx)("p", { className: "eyebrow", children: "CLASSIFIED WASTE SUMMARY" }), (0, d.jsx)("h2", { children: "Every stream, accounted for." }), (0, d.jsxs)("div", { className: "intake-total", children: [(0, d.jsxs)("strong", { children: [Ve.reduce((c, M) => c + M.quantity, 0).toLocaleString("en-IN"), (0, d.jsx)("small", { children: " kg" })] }), (0, d.jsxs)("span", { children: [Ve.length, " recorded loads \xB7 ", Ve.filter(xa).length, " on hold"] })] }), cd.map(c => { let M = Ve.filter(w => w.type === c.name); return (0, d.jsxs)("div", { className: "summary-stream", children: [(0, d.jsx)("span", { style: { color: c.color }, children: c.icon }), (0, d.jsxs)("div", { children: [(0, d.jsx)("strong", { children: c.name }), (0, d.jsxs)("small", { children: [M.length, " loads"] })] }), (0, d.jsxs)("b", { children: [M.reduce((w, ae) => w + ae.quantity, 0).toLocaleString("en-IN"), " kg"] })] }, c.name); }), (0, d.jsx)("p", { className: "footnote", children: "Intake totals include held records. Dashboard production totals count batches separately. Linking a reviewed load creates one batch; it does not double-count its intake record." })] }), (0, d.jsxs)("section", { className: "panel section", children: [(0, d.jsx)(Et, { className: "lime" }), (0, d.jsx)("h2", { className: "form-section-title", children: "Keep a portable copy" }), (0, d.jsx)("p", { className: "muted", children: "Everything stays in this browser. Back up batches, waste records and limits together." }), (0, d.jsxs)("div", { className: "button-row", children: [(0, d.jsxs)("button", { className: "secondary", onClick: Oh, children: [(0, d.jsx)(Ra, { size: 16 }), "Download backup"] }), (0, d.jsxs)("label", { className: "secondary restore-button", children: ["Restore backup", (0, d.jsx)("input", { "aria-label": "Restore backup file", type: "file", accept: ".json,application/json", onChange: Eh })] })] })] })] })] }), (0, d.jsxs)("section", { className: "panel section", children: [(0, d.jsxs)("div", { className: "section-head", children: [(0, d.jsxs)("div", { children: [(0, d.jsx)("h2", { children: "Waste traceability register" }), (0, d.jsx)("p", { children: "Unique records, QR labels and linked batches." })] }), (0, d.jsxs)("button", { className: "secondary", onClick: Uh, children: [(0, d.jsx)(Ra, { size: 16 }), "Export waste CSV"] })] }), (0, d.jsxs)("div", { className: "table-tools", children: [(0, d.jsxs)("label", { className: "search", children: [(0, d.jsx)(Ll, { size: 16 }), (0, d.jsx)("input", { "aria-label": "Search waste records", placeholder: "Search waste ID or source\u2026", value: di, onChange: c => Dh(c.target.value) })] }), (0, d.jsxs)("select", { "aria-label": "Filter waste type", value: md, onChange: c => wh(c.target.value), children: [(0, d.jsx)("option", { children: "All" }), cd.map(c => (0, d.jsx)("option", { children: c.name }, c.name))] })] }), (0, d.jsxs)("div", { className: "table-wrap", children: [(0, d.jsxs)("table", { children: [(0, d.jsx)("thead", { children: (0, d.jsxs)("tr", { children: [(0, d.jsx)("th", { children: "Waste ID / source" }), (0, d.jsx)("th", { children: "Stream" }), (0, d.jsx)("th", { children: "Quantity" }), (0, d.jsx)("th", { children: "Screening" }), (0, d.jsx)("th", { children: "Traceability" })] }) }), (0, d.jsx)("tbody", { children: Ve.filter(c => (md === "All" || c.type === md) && `${c.id} ${c.source}`.toLowerCase().includes(di.toLowerCase())).map(c => (0, d.jsxs)("tr", { children: [(0, d.jsxs)("td", { children: [(0, d.jsx)("strong", { children: c.id }), (0, d.jsxs)("small", { children: [c.source, " \xB7 ", c.date] })] }), (0, d.jsx)("td", { children: c.type }), (0, d.jsxs)("td", { children: [c.quantity, " kg"] }), (0, d.jsx)("td", { children: (0, d.jsx)("span", { className: `badge ${xa(c) ? "amber" : ""}`, children: xa(c) ? "Hold for review" : "Recorded" }) }), (0, d.jsx)("td", { children: (0, d.jsx)("button", { className: "secondary", onClick: () => { pd(c), x("waste-record"); }, children: "View record / QR" }) })] }, c.id)) })] }), !Ve.length && (0, d.jsx)("p", { className: "empty", children: "Register your first waste load. Each record will receive a unique ID and QR label." })] })] })] }), e === "Farm modules" && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)("div", { className: "banner", children: [(0, d.jsx)(Ut, { size: 20 }), (0, d.jsxs)("div", { children: [(0, d.jsx)("strong", { children: "Interactive farm monitor" }), (0, d.jsx)("p", { children: "Demo readings update every 3 seconds while running. No physical sensors are connected." })] }), (0, d.jsxs)("button", { className: "secondary", onClick: () => o(!u), children: [u ? (0, d.jsx)(ml, { size: 16 }) : (0, d.jsx)(pl, { size: 16 }), " ", u ? "Pause" : "Run simulation"] })] }), pi, (0, d.jsxs)("section", { className: "panel section", children: [(0, d.jsxs)("div", { className: "section-head", children: [(0, d.jsxs)("div", { children: [(0, d.jsx)("h2", { children: "Environmental pulse" }), (0, d.jsx)("p", { children: "Simulated mean temperature" })] }), (0, d.jsxs)("span", { className: "badge neutral", children: [f.length, " samples"] })] }), (0, d.jsx)(vh, { history: f })] })] }), e === "Batch registry" && (0, d.jsxs)("section", { className: "panel", children: [(0, d.jsxs)("div", { className: "section-head", children: [(0, d.jsxs)("div", { children: [(0, d.jsx)("h2", { children: "Batch traceability" }), (0, d.jsxs)("p", { children: [s.length, " records \xB7 ", H ? "Supabase database" : "saved on this browser"] })] }), (0, d.jsxs)("button", { className: "secondary", onClick: () => x("cycle"), children: [(0, d.jsx)(Ia, { size: 16 }), "Lifecycle guide"] })] }), Hh] }), e === "Impact lab" && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)("div", { className: "split impact", children: [(0, d.jsxs)("section", { className: "panel", children: [(0, d.jsx)("p", { className: "eyebrow", children: "SCENARIO BUILDER" }), (0, d.jsx)("h2", { children: "What could your waste become?" }), (0, d.jsx)("p", { className: "muted", children: "Adjust the inputs to explore potential wet biomass and margin." }), (0, d.jsxs)("div", { className: "form-grid", children: [(0, d.jsxs)("label", { children: ["Organic waste (kg)", (0, d.jsx)("input", { type: "number", min: "0", max: "100000", value: ne, onChange: c => U(Math.min(1e5, Math.max(0, +c.target.value))) })] }), (0, d.jsxs)("label", { children: ["Biomass price (\u20B9/kg)", (0, d.jsx)("input", { type: "number", min: "0", max: "100000", value: ol, onChange: c => oi(Math.min(1e5, Math.max(0, +c.target.value))) })] }), (0, d.jsxs)("label", { children: ["Operating cost (\u20B9)", (0, d.jsx)("input", { type: "number", min: "0", max: "10000000", value: su, onChange: c => ma(Math.min(1e7, Math.max(0, +c.target.value))) })] }), (0, d.jsxs)("label", { children: ["Wet biomass yield: ", K, "%", (0, d.jsx)("input", { type: "range", min: "1", max: "40", value: K, onChange: c => ke(+c.target.value) })] })] }), (0, d.jsxs)("button", { className: "secondary", onClick: () => U(Do), children: ["Use registered waste \xB7 ", Do, " kg"] }), (0, d.jsx)("p", { className: "footnote", children: "Scenario only. Wet biomass differs from dried meal. Processing losses, moisture changes, capital costs, feed approval and market variability are excluded. No carbon offset or antibiotic reduction is inferred." })] }), (0, d.jsxs)("section", { className: "panel scenario", children: [(0, d.jsx)(Ih, {}), (0, d.jsxs)("div", { className: "result", children: [(0, d.jsx)("span", { children: "ESTIMATED WET BIOMASS" }), (0, d.jsxs)("strong", { children: [wo.biomass.toFixed(1), " ", (0, d.jsx)("small", { children: "kg" })] })] }), (0, d.jsxs)("div", { className: "result-grid", children: [(0, d.jsxs)("div", { children: [(0, d.jsx)("span", { children: "Illustrative revenue" }), (0, d.jsx)("strong", { children: Ch(wo.revenue) })] }), (0, d.jsxs)("div", { children: [(0, d.jsx)("span", { children: "Illustrative margin" }), (0, d.jsx)("strong", { className: wo.margin < 0 ? "amber-text" : "", children: Ch(wo.margin) })] })] })] })] }), (0, d.jsxs)("section", { className: "panel section", children: [(0, d.jsx)("div", { className: "section-head", children: (0, d.jsxs)("div", { children: [(0, d.jsx)("h2", { children: "The biology behind the loop" }), (0, d.jsx)("p", { children: "Illustrative lifecycle timing; actual duration varies." })] }) }), (0, d.jsx)("div", { className: "stages", children: Ua.map((c, M) => (0, d.jsxs)("button", { className: I === M ? "selected" : "", onClick: () => R(M), children: [(0, d.jsxs)("span", { children: ["0", M + 1] }), (0, d.jsx)("strong", { children: c.name }), (0, d.jsx)("small", { children: c.days }), (0, d.jsx)(ka, { size: 18 })] }, c.name)) }), (0, d.jsxs)("div", { className: "stage-detail", children: [(0, d.jsx)(Ia, {}), (0, d.jsxs)("div", { children: [(0, d.jsx)("h3", { children: Ua[I].name }), (0, d.jsx)("p", { children: Ua[I].detail })] })] })] })] }), e === "Settings" && (0, d.jsxs)("div", { className: "settings-grid", children: [(0, d.jsxs)("section", { className: "panel", children: [(0, d.jsxs)("div", { className: "section-head", children: [(0, d.jsxs)("div", { children: [(0, d.jsx)("h2", { children: "Monitoring limits" }), (0, d.jsx)("p", { children: "Demonstration settings, not biological safety standards." })] }), (0, d.jsx)(zt, { size: 20 })] }), (0, d.jsxs)("label", { children: ["High temperature threshold: ", i.temp, " \xB0C", (0, d.jsx)("input", { type: "range", min: "25", max: "45", step: ".5", value: i.temp, onChange: c => C({ ...i, temp: +c.target.value }) })] }), (0, d.jsxs)("label", { children: ["High humidity threshold: ", i.humidity, "%", (0, d.jsx)("input", { type: "range", min: "50", max: "95", value: i.humidity, onChange: c => C({ ...i, humidity: +c.target.value }) })] }), (0, d.jsx)("p", { className: "footnote", children: "Changes save automatically in this browser. Anomaly flags also use a fixed synthetic reference (29 \xB0C, 65% RH)." })] }), (0, d.jsxs)("section", { className: "panel", children: [(0, d.jsx)(Et, { className: "lime", size: 28 }), (0, d.jsx)("h2", { children: "One workspace. Your records." }), (0, d.jsx)("p", { className: "muted", children: ea ? "Supabase is configured. Sign in to load and manage your private cloud batches." : "Easy-run mode is ready. Your records stay in this browser. Use Export batch CSV for a portable backup. Cloud storage is available in the separate Next.js project." }), T && (0, d.jsxs)("p", { className: "footnote", children: ["Signed in as ", T.email] }), (0, d.jsxs)("div", { className: "button-row", children: [(0, d.jsxs)("button", { className: "primary", disabled: y || !ea, onClick: ri, children: [(0, d.jsx)(Cu, { size: 16 }), y ? "Loading\u2026" : "Load cloud records"] }), (0, d.jsx)("button", { className: "secondary", onClick: () => x("auth"), children: "Account" })] }), (0, d.jsx)("p", { className: "footnote", children: "This edition runs completely locally. Keep using the same browser and file location to retain your records. Export a CSV before moving this file or clearing browser data." }), H && (0, d.jsx)("button", { className: "secondary", onClick: () => { j(!1), r(rd()), L("Switched to local demo records. Cloud records remain in Supabase."); }, children: "Switch to local demo" })] }), (0, d.jsxs)("section", { className: "panel", children: [(0, d.jsx)("h2", { children: "Portable by design" }), (0, d.jsx)("p", { className: "muted", children: "Download your current records for judging, reporting or backup." }), (0, d.jsxs)("button", { className: "secondary", onClick: mi, children: [(0, d.jsx)(Ra, { size: 16 }), "Export batch CSV"] })] }), (0, d.jsxs)("section", { className: "panel", children: [(0, d.jsx)(Nt, { className: "lime" }), (0, d.jsx)("h2", { children: "What powers the insights?" }), (0, d.jsx)("p", { className: "muted", children: "This version uses a transparent standardized-distance anomaly score. It is not the original Python Isolation Forest, a trained predictive model, or a farm-control system." }), (0, d.jsxs)("button", { className: "text-button", onClick: () => x("help"), children: ["Read project notes ", (0, d.jsx)(aa, { size: 16 })] })] })] }), (0, d.jsxs)("footer", { children: [(0, d.jsxs)("span", { children: [(0, d.jsx)(Ia, { size: 14 }), " ModuFly AI ", (0, d.jsx)("span", { className: "muted", children: "/ Regenerative intelligence" })] }), (0, d.jsxs)("span", { children: ["Hackathon prototype \xB7 ", H ? "Cloud records" : "Local records", " \xB7 Simulated telemetry"] })] })] })] }), v && (0, d.jsxs)("div", { className: "toast", role: "status", children: [(0, d.jsx)(Ut, { size: 18 }), v, (0, d.jsx)("button", { onClick: () => L(""), "aria-label": "Dismiss message", children: (0, d.jsx)(xl, { size: 16 }) })] }), m && (0, d.jsx)("div", { className: "modal-backdrop", onClick: c => { c.target === c.currentTarget && !y && x(null); }, children: (0, d.jsxs)("section", { className: "modal", role: "dialog", "aria-modal": "true", "aria-label": m === "batch" ? "Create batch" : m === "auth" ? "Cloud account" : "Project details", children: [(0, d.jsx)("button", { className: "close icon-button", "aria-label": "Close dialog", onClick: () => x(null), children: (0, d.jsx)(xl, {}) }), m === "waste-record" && Z && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)("p", { className: "eyebrow", children: "UNIQUE WASTE RECORD" }), (0, d.jsx)("h2", { children: "Classified & recorded" }), (0, d.jsxs)("div", { className: "record-label", children: [(0, d.jsx)(Z1, { record: Z }), (0, d.jsxs)("div", { children: [(0, d.jsx)("strong", { children: Z.id }), (0, d.jsx)("span", { className: `badge ${xa(Z) ? "amber" : ""}`, children: xa(Z) ? "Hold for review" : "Recorded \xB7 review required" }), (0, d.jsxs)("p", { children: [Z.type, " \xB7 ", Z.quantity, " kg", (0, d.jsx)("br", {}), Z.source, (0, d.jsx)("br", {}), Z.date] })] })] }), (0, d.jsxs)("div", { className: "record-facts", children: [(0, d.jsxs)("p", { children: [(0, d.jsx)("b", { children: "Condition:" }), " ", Z.condition] }), (0, d.jsxs)("p", { children: [(0, d.jsx)("b", { children: "Separated at source:" }), " ", Z.separated ? "Yes" : "No / unconfirmed"] }), (0, d.jsxs)("p", { children: [(0, d.jsx)("b", { children: "Checks completed:" }), " ", Z.assessed ? "Yes" : "No"] }), (0, d.jsxs)("p", { children: [(0, d.jsx)("b", { children: "Reported risks:" }), " ", [Z.chemicals && "Chemicals", Z.medicines && "Medicines", Z.materials && "Unsuitable materials"].filter(Boolean).join(", ") || "None declared"] }), (0, d.jsxs)("p", { children: [(0, d.jsx)("b", { children: "Notes:" }), " ", Z.notes || "None"] })] }), (0, d.jsx)("p", { className: "footnote", children: "The QR contains this record\u2019s summary text. Scan it with a phone QR reader. It is not a public web link or safety certificate." }), (0, d.jsxs)("div", { className: "button-row section", children: [(0, d.jsxs)("button", { className: "secondary", onClick: () => { let c = Id(0, "M"); c.addData(JSON.stringify({ id: Z.id, type: Z.type, source: Z.source, kg: Z.quantity, date: Z.date, status: xa(Z) ? "Hold for review" : "Recorded - review required" })), c.make(), hd(new Blob([c.createSvgTag(4, 16)], { type: "image/svg+xml" }), Z.id + "-label.svg"); }, children: [(0, d.jsx)(Ra, { size: 16 }), "Download QR"] }), (0, d.jsx)("button", { className: "primary", disabled: xa(Z) || !!Z.batch_id, onClick: () => kh(Z), children: Z.batch_id ? "Batch linked" : xa(Z) ? "On hold" : "Review & create batch" })] }), Z.batch_id && (0, d.jsxs)("p", { className: "footnote", children: ["Linked batch: ", Z.batch_id, ". Open Batch registry to manage its lifecycle. If you delete that batch later, the waste record retains this historical reference."] })] }), m === "batch" && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)("p", { className: "eyebrow", children: "TRACE EVERY BEGINNING" }), (0, d.jsx)("h2", { children: "Create a new batch" }), (0, d.jsxs)("p", { className: "muted", children: ["Saved to ", H ? "your cloud database" : "this browser", "."] }), (0, d.jsxs)("form", { onSubmit: qh, children: [(0, d.jsxs)("label", { children: ["Feedstock / batch name", (0, d.jsx)("input", { autoFocus: !0, required: !0, maxLength: "80", placeholder: "e.g. Market greens \u2014 Batch 05", value: pa.name, onChange: c => iu({ ...pa, name: c.target.value }) })] }), (0, d.jsxs)("div", { className: "form-grid", children: [(0, d.jsxs)("label", { children: ["Farm module", (0, d.jsx)("select", { value: pa.module, onChange: c => iu({ ...pa, module: +c.target.value }), children: t.map(c => (0, d.jsxs)("option", { value: c.id, children: ["Module 0", c.id] }, c.id)) })] }), (0, d.jsxs)("label", { children: ["Waste input (kg)", (0, d.jsx)("input", { required: !0, type: "number", min: ".01", max: "100000", step: ".01", value: pa.waste, onChange: c => iu({ ...pa, waste: +c.target.value }) })] })] }), (0, d.jsxs)("label", { children: ["Lifecycle stage", (0, d.jsx)("select", { value: pa.stage, onChange: c => iu({ ...pa, stage: c.target.value }), children: Ua.map(c => (0, d.jsx)("option", { children: c.name }, c.name)) })] }), (0, d.jsxs)("button", { className: "primary full", disabled: y, children: [y ? "Saving\u2026" : "Save batch", (0, d.jsx)(aa, { size: 16 })] })] })] }), m === "batch-qr" && Z && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)("p", { className: "eyebrow", children: "BATCH QR TRACEABILITY LABEL" }), (0, d.jsx)("h2", { children: "Batch QR traceability label" }), (0, d.jsx)("p", { className: "muted", children: "Scan this QR code to read the batch details encoded inside it." }), (0, d.jsx)(B1, { batch: Z }), (0, d.jsxs)("div", { className: "detail-values", children: [(0, d.jsxs)("div", { children: [(0, d.jsx)("strong", { children: Z.name }), (0, d.jsx)("small", { children: "Batch name" })] }), (0, d.jsxs)("div", { children: [(0, d.jsxs)("strong", { children: ["Module 0", Z.module] }), (0, d.jsx)("small", { children: "Farm module" })] }), (0, d.jsxs)("div", { children: [(0, d.jsxs)("strong", { children: [Z.waste, " kg"] }), (0, d.jsx)("small", { children: "Waste input" })] }), (0, d.jsxs)("div", { children: [(0, d.jsx)("strong", { children: Z.stage }), (0, d.jsx)("small", { children: "Lifecycle stage" })] }), (0, d.jsxs)("div", { children: [(0, d.jsx)("strong", { children: Z.id }), (0, d.jsx)("small", { children: "Batch ID" })] })] }), (0, d.jsx)("p", { className: "footnote", children: "Scan this QR with a phone camera to read the batch details directly. The QR contains plain text, not a website link. Phone cameras may display it as text; use Copy Text to save the details." }), (0, d.jsxs)("div", { className: "button-row section", children: [(0, d.jsxs)("button", { className: "secondary", onClick: () => { let c = Id(0, "M"); c.addData(qrBatchUrl(Z)), c.make(), hd(new Blob([c.createSvgTag(4, 16)], { type: "image/svg+xml" }), Z.id + "-batch-qr.svg"); }, children: [(0, d.jsx)(Ra, { size: 16 }), "Download QR"] }), (0, d.jsx)("button", { className: "primary", onClick: () => x(null), children: "Done" })] })] }), m === "module" && (() => { let c = t.find(M => M.id === V); return (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)("p", { className: "eyebrow", children: ["CULTIVATION UNIT 0", c.id] }), (0, d.jsx)("h2", { children: "Module intelligence" }), (0, d.jsxs)("span", { className: `badge ${ot(c, i) === "Attention" ? "amber" : ""}`, children: [ot(c, i), " \xB7 simulated"] }), (0, d.jsxs)("div", { className: "detail-values", children: [(0, d.jsxs)("div", { children: [(0, d.jsx)(gl, {}), (0, d.jsxs)("strong", { children: [c.temp, "\xB0C"] }), (0, d.jsx)("small", { children: "Temperature" })] }), (0, d.jsxs)("div", { children: [(0, d.jsx)(qt, {}), (0, d.jsxs)("strong", { children: [c.humidity, "%"] }), (0, d.jsx)("small", { children: "Humidity" })] })] }), (0, d.jsxs)("div", { className: "insight", children: [(0, d.jsx)(cl, {}), (0, d.jsxs)("div", { children: [(0, d.jsxs)("strong", { children: ["Anomaly score: ", bu(c).toFixed(2)] }), (0, d.jsx)("small", { children: "Standardized distance from a synthetic reference; flags above 3." })] })] }), (0, d.jsx)("p", { className: "muted", children: ot(c, i) === "Attention" ? "Inspect recent feed loading and environmental readings. This flag needs human review." : "Readings are inside the configured demo range. Keep recording observations." }), (0, d.jsx)("h3", { children: "Assigned batches" }), s.filter(M => M.module === c.id).map(M => (0, d.jsxs)("div", { className: "row batch-mini", children: [(0, d.jsxs)("div", { className: "batch-mini-info", children: [(0, d.jsx)("span", { children: M.name }), (0, d.jsx)("span", { className: "badge neutral", children: M.stage })] }), (0, d.jsx)("button", { type: "button", className: "secondary batch-qr-open", onClick: () => { pd(M); x("batch-qr"); }, children: "Open QR" })] }, M.id)), !s.some(M => M.module === c.id) && (0, d.jsx)("p", { className: "muted", children: "No batches assigned yet." })] }); })(), m === "alerts" && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)("p", { className: "eyebrow", children: "HUMAN IN THE LOOP" }), (0, d.jsx)("h2", { children: "Monitoring insights" }), (0, d.jsx)("p", { className: "muted", children: "Simulated readings checked against your limits and the demo anomaly score." }), Ca.length ? Ca.map(c => (0, d.jsxs)("div", { className: "alert-item", children: [(0, d.jsx)(vu, { className: "amber-text" }), (0, d.jsxs)("div", { children: [(0, d.jsxs)("strong", { children: ["Module 0", c.id, " \xB7 review needed"] }), (0, d.jsxs)("p", { children: [c.temp, " \xB0C / ", c.humidity, "% RH \xB7 score ", bu(c).toFixed(2)] }), (0, d.jsxs)("small", { children: [c.temp > i.temp ? "Temperature exceeds your limit. " : "", c.humidity > i.humidity ? "Humidity exceeds your limit. " : "", bu(c) > 3 ? "Reading differs from synthetic reference." : ""] })] })] }, c.id)) : (0, d.jsx)("p", { className: "insight", children: "No current flags." }), (0, d.jsx)("button", { className: "secondary", onClick: () => { a("Settings"), x(null); }, children: "Adjust monitoring limits" })] }), m === "cycle" && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)("p", { className: "eyebrow", children: "BLACK SOLDIER FLY" }), (0, d.jsx)("h2", { children: "Five stages. One continuous loop." }), (0, d.jsx)("p", { className: "muted", children: "Illustrative timing varies with environment and colony." }), Ua.map((c, M) => (0, d.jsxs)("button", { className: "cycle-item", onClick: () => R(M), children: [(0, d.jsxs)("span", { children: ["0", M + 1] }), (0, d.jsxs)("div", { children: [(0, d.jsxs)("strong", { children: [c.name, " \xB7 ", c.days] }), I === M && (0, d.jsx)("p", { children: c.detail })] }), (0, d.jsx)(ka, { size: 16 })] }, c.name))] }), m === "auth" && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(Et, { className: "lime", size: 30 }), (0, d.jsx)("h2", { children: "Connect your workspace" }), ea ? T ? (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)("p", { className: "muted", children: ["Signed in as ", T.email] }), (0, d.jsx)("button", { className: "primary", disabled: y, onClick: async () => { await ri(), x(null); }, children: "Load my cloud records" }), (0, d.jsxs)("button", { className: "secondary", onClick: async () => { let { error: c } = await ea.auth.signOut(); if (c) {
                                                    L(c.message);
                                                    return;
                                                } j(!1), r(rd()), x(null), L("Signed out. Local demo records restored."); }, children: [(0, d.jsx)(Su, { size: 16 }), "Sign out"] })] }) : (0, d.jsxs)("form", { onSubmit: ci, children: [(0, d.jsxs)("label", { children: ["Email", (0, d.jsx)("input", { autoFocus: !0, type: "email", required: !0, value: ni, onChange: c => Bh(c.target.value) })] }), (0, d.jsxs)("label", { children: ["Password", (0, d.jsx)("input", { type: "password", minLength: "8", required: !0, value: si, onChange: c => ii(c.target.value) })] }), (0, d.jsxs)("div", { className: "button-row", children: [(0, d.jsx)("button", { className: "primary", disabled: y, children: "Sign in" }), (0, d.jsx)("button", { className: "secondary", disabled: y, onClick: c => { c.currentTarget.form.reportValidity() && ci(c, !0); }, type: "button", children: "Create account" })] })] }) : (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)("p", { className: "muted", children: "This easy-run edition saves your batches in this browser. No account, installation or internet connection is required. Use the full Next.js project if you want to configure a cloud database." }), (0, d.jsxs)("button", { className: "primary", onClick: () => x(null), children: ["Continue locally ", (0, d.jsx)(aa, { size: 16 })] })] })] }), m === "help" && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)("p", { className: "eyebrow", children: "PROJECT NOTES" }), (0, d.jsx)("h2", { children: "Built to close the loop." }), (0, d.jsx)("p", { children: "ModuFly AI brings Black Soldier Fly batch tracking, environmental monitoring and waste-to-value planning into one workspace." }), (0, d.jsxs)("div", { className: "insight", children: [(0, d.jsx)(Nt, {}), (0, d.jsxs)("div", { children: [(0, d.jsx)("strong", { children: "Honest intelligence" }), (0, d.jsx)("small", { children: "Telemetry is simulated. Anomaly scores use synthetic reference statistics, and yield estimates are user assumptions. No real sensors, antibiotic claims or trained vision model are connected." })] })] }), (0, d.jsx)("p", { className: "muted", children: "This edition works by opening index.html directly. Local browser storage keeps your batch records. The separate Next.js edition includes optional Supabase database integration." }), (0, d.jsxs)("button", { className: "primary", onClick: () => { x("cycle"); }, children: ["Explore the lifecycle ", (0, d.jsx)(aa, { size: 16 })] })] })] }) })] });
    }
    (0, Mh.createRoot)(document.getElementById("root")).render((0, d.jsx)(Ah, {}));
})();

