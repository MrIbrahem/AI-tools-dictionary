var Oa = e => {
    throw TypeError(e)
}
;
var Bs = (e, t, n) => t.has(e) || Oa("Cannot " + n);
var C = (e, t, n) => (Bs(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , V = (e, t, n) => t.has(e) ? Oa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n)
  , z = (e, t, n, r) => (Bs(e, t, "write to private field"),
r ? r.call(e, n) : t.set(e, n),
n)
  , me = (e, t, n) => (Bs(e, t, "access private method"),
n);
var co = (e, t, n, r) => ({
    set _(o) {
        z(e, t, o, n)
    },
    get _() {
        return C(e, t, r)
    }
});
function fh(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const s = Object.getOwnPropertyDescriptor(r, o);
                    s && Object.defineProperty(e, o, s.get ? s : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o => {
        for (const s of o)
            if (s.type === "childList")
                for (const i of s.addedNodes)
                    i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const s = {};
        return o.integrity && (s.integrity = o.integrity),
        o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? s.credentials = "include" : o.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
        s
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const s = n(o);
        fetch(o.href, s)
    }
}
)();
function yc(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var gc = {
    exports: {}
}
  , ys = {}
  , wc = {
    exports: {}
}
  , b = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oo = Symbol.for("react.element")
  , ph = Symbol.for("react.portal")
  , hh = Symbol.for("react.fragment")
  , mh = Symbol.for("react.strict_mode")
  , vh = Symbol.for("react.profiler")
  , yh = Symbol.for("react.provider")
  , gh = Symbol.for("react.context")
  , wh = Symbol.for("react.forward_ref")
  , xh = Symbol.for("react.suspense")
  , Sh = Symbol.for("react.memo")
  , Eh = Symbol.for("react.lazy")
  , ja = Symbol.iterator;
function Ch(e) {
    return e === null || typeof e != "object" ? null : (e = ja && e[ja] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var xc = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Sc = Object.assign
  , Ec = {};
function lr(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Ec,
    this.updater = n || xc
}
lr.prototype.isReactComponent = {};
lr.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
lr.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Cc() {}
Cc.prototype = lr.prototype;
function kl(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Ec,
    this.updater = n || xc
}
var _l = kl.prototype = new Cc;
_l.constructor = kl;
Sc(_l, lr.prototype);
_l.isPureReactComponent = !0;
var Ma = Array.isArray
  , kc = Object.prototype.hasOwnProperty
  , Pl = {
    current: null
}
  , _c = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Pc(e, t, n) {
    var r, o = {}, s = null, i = null;
    if (t != null)
        for (r in t.ref !== void 0 && (i = t.ref),
        t.key !== void 0 && (s = "" + t.key),
        t)
            kc.call(t, r) && !_c.hasOwnProperty(r) && (o[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1)
        o.children = n;
    else if (1 < l) {
        for (var a = Array(l), u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        o.children = a
    }
    if (e && e.defaultProps)
        for (r in l = e.defaultProps,
        l)
            o[r] === void 0 && (o[r] = l[r]);
    return {
        $$typeof: oo,
        type: e,
        key: s,
        ref: i,
        props: o,
        _owner: Pl.current
    }
}
function kh(e, t) {
    return {
        $$typeof: oo,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Tl(e) {
    return typeof e == "object" && e !== null && e.$$typeof === oo
}
function _h(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var La = /\/+/g;
function Ws(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? _h("" + e.key) : t.toString(36)
}
function Oo(e, t, n, r, o) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var i = !1;
    if (e === null)
        i = !0;
    else
        switch (s) {
        case "string":
        case "number":
            i = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case oo:
            case ph:
                i = !0
            }
        }
    if (i)
        return i = e,
        o = o(i),
        e = r === "" ? "." + Ws(i, 0) : r,
        Ma(o) ? (n = "",
        e != null && (n = e.replace(La, "$&/") + "/"),
        Oo(o, t, n, "", function(u) {
            return u
        })) : o != null && (Tl(o) && (o = kh(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(La, "$&/") + "/") + e)),
        t.push(o)),
        1;
    if (i = 0,
    r = r === "" ? "." : r + ":",
    Ma(e))
        for (var l = 0; l < e.length; l++) {
            s = e[l];
            var a = r + Ws(s, l);
            i += Oo(s, t, n, a, o)
        }
    else if (a = Ch(e),
    typeof a == "function")
        for (e = a.call(e),
        l = 0; !(s = e.next()).done; )
            s = s.value,
            a = r + Ws(s, l++),
            i += Oo(s, t, n, a, o);
    else if (s === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return i
}
function fo(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , o = 0;
    return Oo(e, r, "", "", function(s) {
        return t.call(n, s, o++)
    }),
    r
}
function Ph(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Te = {
    current: null
}
  , jo = {
    transition: null
}
  , Th = {
    ReactCurrentDispatcher: Te,
    ReactCurrentBatchConfig: jo,
    ReactCurrentOwner: Pl
};
function Tc() {
    throw Error("act(...) is not supported in production builds of React.")
}
b.Children = {
    map: fo,
    forEach: function(e, t, n) {
        fo(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return fo(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return fo(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Tl(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
b.Component = lr;
b.Fragment = hh;
b.Profiler = vh;
b.PureComponent = kl;
b.StrictMode = mh;
b.Suspense = xh;
b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Th;
b.act = Tc;
b.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Sc({}, e.props)
      , o = e.key
      , s = e.ref
      , i = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (s = t.ref,
        i = Pl.current),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
            var l = e.type.defaultProps;
        for (a in t)
            kc.call(t, a) && !_c.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1)
        r.children = n;
    else if (1 < a) {
        l = Array(a);
        for (var u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        r.children = l
    }
    return {
        $$typeof: oo,
        type: e.type,
        key: o,
        ref: s,
        props: r,
        _owner: i
    }
}
;
b.createContext = function(e) {
    return e = {
        $$typeof: gh,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: yh,
        _context: e
    },
    e.Consumer = e
}
;
b.createElement = Pc;
b.createFactory = function(e) {
    var t = Pc.bind(null, e);
    return t.type = e,
    t
}
;
b.createRef = function() {
    return {
        current: null
    }
}
;
b.forwardRef = function(e) {
    return {
        $$typeof: wh,
        render: e
    }
}
;
b.isValidElement = Tl;
b.lazy = function(e) {
    return {
        $$typeof: Eh,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Ph
    }
}
;
b.memo = function(e, t) {
    return {
        $$typeof: Sh,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
b.startTransition = function(e) {
    var t = jo.transition;
    jo.transition = {};
    try {
        e()
    } finally {
        jo.transition = t
    }
}
;
b.unstable_act = Tc;
b.useCallback = function(e, t) {
    return Te.current.useCallback(e, t)
}
;
b.useContext = function(e) {
    return Te.current.useContext(e)
}
;
b.useDebugValue = function() {}
;
b.useDeferredValue = function(e) {
    return Te.current.useDeferredValue(e)
}
;
b.useEffect = function(e, t) {
    return Te.current.useEffect(e, t)
}
;
b.useId = function() {
    return Te.current.useId()
}
;
b.useImperativeHandle = function(e, t, n) {
    return Te.current.useImperativeHandle(e, t, n)
}
;
b.useInsertionEffect = function(e, t) {
    return Te.current.useInsertionEffect(e, t)
}
;
b.useLayoutEffect = function(e, t) {
    return Te.current.useLayoutEffect(e, t)
}
;
b.useMemo = function(e, t) {
    return Te.current.useMemo(e, t)
}
;
b.useReducer = function(e, t, n) {
    return Te.current.useReducer(e, t, n)
}
;
b.useRef = function(e) {
    return Te.current.useRef(e)
}
;
b.useState = function(e) {
    return Te.current.useState(e)
}
;
b.useSyncExternalStore = function(e, t, n) {
    return Te.current.useSyncExternalStore(e, t, n)
}
;
b.useTransition = function() {
    return Te.current.useTransition()
}
;
b.version = "18.3.1";
wc.exports = b;
var v = wc.exports;
const It = yc(v)
  , Nc = fh({
    __proto__: null,
    default: It
}, [v]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nh = v
  , Rh = Symbol.for("react.element")
  , Ih = Symbol.for("react.fragment")
  , Ah = Object.prototype.hasOwnProperty
  , Oh = Nh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , jh = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Rc(e, t, n) {
    var r, o = {}, s = null, i = null;
    n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
    for (r in t)
        Ah.call(t, r) && !jh.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: Rh,
        type: e,
        key: s,
        ref: i,
        props: o,
        _owner: Oh.current
    }
}
ys.Fragment = Ih;
ys.jsx = Rc;
ys.jsxs = Rc;
gc.exports = ys;
var w = gc.exports
  , Ic = {
    exports: {}
}
  , be = {}
  , Ac = {
    exports: {}
}
  , Oc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(R, A) {
        var L = R.length;
        R.push(A);
        e: for (; 0 < L; ) {
            var $ = L - 1 >>> 1
              , ee = R[$];
            if (0 < o(ee, A))
                R[$] = A,
                R[L] = ee,
                L = $;
            else
                break e
        }
    }
    function n(R) {
        return R.length === 0 ? null : R[0]
    }
    function r(R) {
        if (R.length === 0)
            return null;
        var A = R[0]
          , L = R.pop();
        if (L !== A) {
            R[0] = L;
            e: for (var $ = 0, ee = R.length, ht = ee >>> 1; $ < ht; ) {
                var ot = 2 * ($ + 1) - 1
                  , Vs = R[ot]
                  , on = ot + 1
                  , uo = R[on];
                if (0 > o(Vs, L))
                    on < ee && 0 > o(uo, Vs) ? (R[$] = uo,
                    R[on] = L,
                    $ = on) : (R[$] = Vs,
                    R[ot] = L,
                    $ = ot);
                else if (on < ee && 0 > o(uo, L))
                    R[$] = uo,
                    R[on] = L,
                    $ = on;
                else
                    break e
            }
        }
        return A
    }
    function o(R, A) {
        var L = R.sortIndex - A.sortIndex;
        return L !== 0 ? L : R.id - A.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        e.unstable_now = function() {
            return s.now()
        }
    } else {
        var i = Date
          , l = i.now();
        e.unstable_now = function() {
            return i.now() - l
        }
    }
    var a = []
      , u = []
      , d = 1
      , p = null
      , f = 3
      , x = !1
      , g = !1
      , y = !1
      , E = typeof setTimeout == "function" ? setTimeout : null
      , h = typeof clearTimeout == "function" ? clearTimeout : null
      , c = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function m(R) {
        for (var A = n(u); A !== null; ) {
            if (A.callback === null)
                r(u);
            else if (A.startTime <= R)
                r(u),
                A.sortIndex = A.expirationTime,
                t(a, A);
            else
                break;
            A = n(u)
        }
    }
    function S(R) {
        if (y = !1,
        m(R),
        !g)
            if (n(a) !== null)
                g = !0,
                H(k);
            else {
                var A = n(u);
                A !== null && Ue(S, A.startTime - R)
            }
    }
    function k(R, A) {
        g = !1,
        y && (y = !1,
        h(_),
        _ = -1),
        x = !0;
        var L = f;
        try {
            for (m(A),
            p = n(a); p !== null && (!(p.expirationTime > A) || R && !W()); ) {
                var $ = p.callback;
                if (typeof $ == "function") {
                    p.callback = null,
                    f = p.priorityLevel;
                    var ee = $(p.expirationTime <= A);
                    A = e.unstable_now(),
                    typeof ee == "function" ? p.callback = ee : p === n(a) && r(a),
                    m(A)
                } else
                    r(a);
                p = n(a)
            }
            if (p !== null)
                var ht = !0;
            else {
                var ot = n(u);
                ot !== null && Ue(S, ot.startTime - A),
                ht = !1
            }
            return ht
        } finally {
            p = null,
            f = L,
            x = !1
        }
    }
    var N = !1
      , P = null
      , _ = -1
      , j = 5
      , O = -1;
    function W() {
        return !(e.unstable_now() - O < j)
    }
    function D() {
        if (P !== null) {
            var R = e.unstable_now();
            O = R;
            var A = !0;
            try {
                A = P(!0, R)
            } finally {
                A ? Ee() : (N = !1,
                P = null)
            }
        } else
            N = !1
    }
    var Ee;
    if (typeof c == "function")
        Ee = function() {
            c(D)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var M = new MessageChannel
          , ie = M.port2;
        M.port1.onmessage = D,
        Ee = function() {
            ie.postMessage(null)
        }
    } else
        Ee = function() {
            E(D, 0)
        }
        ;
    function H(R) {
        P = R,
        N || (N = !0,
        Ee())
    }
    function Ue(R, A) {
        _ = E(function() {
            R(e.unstable_now())
        }, A)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(R) {
        R.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        g || x || (g = !0,
        H(k))
    }
    ,
    e.unstable_forceFrameRate = function(R) {
        0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : j = 0 < R ? Math.floor(1e3 / R) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return f
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(a)
    }
    ,
    e.unstable_next = function(R) {
        switch (f) {
        case 1:
        case 2:
        case 3:
            var A = 3;
            break;
        default:
            A = f
        }
        var L = f;
        f = A;
        try {
            return R()
        } finally {
            f = L
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(R, A) {
        switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            R = 3
        }
        var L = f;
        f = R;
        try {
            return A()
        } finally {
            f = L
        }
    }
    ,
    e.unstable_scheduleCallback = function(R, A, L) {
        var $ = e.unstable_now();
        switch (typeof L == "object" && L !== null ? (L = L.delay,
        L = typeof L == "number" && 0 < L ? $ + L : $) : L = $,
        R) {
        case 1:
            var ee = -1;
            break;
        case 2:
            ee = 250;
            break;
        case 5:
            ee = 1073741823;
            break;
        case 4:
            ee = 1e4;
            break;
        default:
            ee = 5e3
        }
        return ee = L + ee,
        R = {
            id: d++,
            callback: A,
            priorityLevel: R,
            startTime: L,
            expirationTime: ee,
            sortIndex: -1
        },
        L > $ ? (R.sortIndex = L,
        t(u, R),
        n(a) === null && R === n(u) && (y ? (h(_),
        _ = -1) : y = !0,
        Ue(S, L - $))) : (R.sortIndex = ee,
        t(a, R),
        g || x || (g = !0,
        H(k))),
        R
    }
    ,
    e.unstable_shouldYield = W,
    e.unstable_wrapCallback = function(R) {
        var A = f;
        return function() {
            var L = f;
            f = A;
            try {
                return R.apply(this, arguments)
            } finally {
                f = L
            }
        }
    }
}
)(Oc);
Ac.exports = Oc;
var Mh = Ac.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lh = v
  , ze = Mh;
function T(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var jc = new Set
  , Lr = {};
function En(e, t) {
    Jn(e, t),
    Jn(e + "Capture", t)
}
function Jn(e, t) {
    for (Lr[e] = t,
    e = 0; e < t.length; e++)
        jc.add(t[e])
}
var Et = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , ki = Object.prototype.hasOwnProperty
  , Fh = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Fa = {}
  , Da = {};
function Dh(e) {
    return ki.call(Da, e) ? !0 : ki.call(Fa, e) ? !1 : Fh.test(e) ? Da[e] = !0 : (Fa[e] = !0,
    !1)
}
function zh(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function bh(e, t, n, r) {
    if (t === null || typeof t > "u" || zh(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Ne(e, t, n, r, o, s, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = o,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = s,
    this.removeEmptyString = i
}
var pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    pe[e] = new Ne(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    pe[t] = new Ne(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    pe[e] = new Ne(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    pe[e] = new Ne(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    pe[e] = new Ne(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    pe[e] = new Ne(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    pe[e] = new Ne(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    pe[e] = new Ne(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    pe[e] = new Ne(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Nl = /[\-:]([a-z])/g;
function Rl(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Nl, Rl);
    pe[t] = new Ne(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Nl, Rl);
    pe[t] = new Ne(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Nl, Rl);
    pe[t] = new Ne(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    pe[e] = new Ne(e,1,!1,e.toLowerCase(),null,!1,!1)
});
pe.xlinkHref = new Ne("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    pe[e] = new Ne(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Il(e, t, n, r) {
    var o = pe.hasOwnProperty(t) ? pe[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (bh(t, n, o, r) && (n = null),
    r || o === null ? Dh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName,
    r = o.attributeNamespace,
    n === null ? e.removeAttribute(t) : (o = o.type,
    n = o === 3 || o === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Pt = Lh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , po = Symbol.for("react.element")
  , _n = Symbol.for("react.portal")
  , Pn = Symbol.for("react.fragment")
  , Al = Symbol.for("react.strict_mode")
  , _i = Symbol.for("react.profiler")
  , Mc = Symbol.for("react.provider")
  , Lc = Symbol.for("react.context")
  , Ol = Symbol.for("react.forward_ref")
  , Pi = Symbol.for("react.suspense")
  , Ti = Symbol.for("react.suspense_list")
  , jl = Symbol.for("react.memo")
  , Ot = Symbol.for("react.lazy")
  , Fc = Symbol.for("react.offscreen")
  , za = Symbol.iterator;
function dr(e) {
    return e === null || typeof e != "object" ? null : (e = za && e[za] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var J = Object.assign, Qs;
function Sr(e) {
    if (Qs === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Qs = t && t[1] || ""
        }
    return `
` + Qs + e
}
var Hs = !1;
function Ks(e, t) {
    if (!e || Hs)
        return "";
    Hs = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), s = r.stack.split(`
`), i = o.length - 1, l = s.length - 1; 1 <= i && 0 <= l && o[i] !== s[l]; )
                l--;
            for (; 1 <= i && 0 <= l; i--,
            l--)
                if (o[i] !== s[l]) {
                    if (i !== 1 || l !== 1)
                        do
                            if (i--,
                            l--,
                            0 > l || o[i] !== s[l]) {
                                var a = `
` + o[i].replace(" at new ", " at ");
                                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)),
                                a
                            }
                        while (1 <= i && 0 <= l);
                    break
                }
        }
    } finally {
        Hs = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Sr(e) : ""
}
function $h(e) {
    switch (e.tag) {
    case 5:
        return Sr(e.type);
    case 16:
        return Sr("Lazy");
    case 13:
        return Sr("Suspense");
    case 19:
        return Sr("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = Ks(e.type, !1),
        e;
    case 11:
        return e = Ks(e.type.render, !1),
        e;
    case 1:
        return e = Ks(e.type, !0),
        e;
    default:
        return ""
    }
}
function Ni(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Pn:
        return "Fragment";
    case _n:
        return "Portal";
    case _i:
        return "Profiler";
    case Al:
        return "StrictMode";
    case Pi:
        return "Suspense";
    case Ti:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Lc:
            return (e.displayName || "Context") + ".Consumer";
        case Mc:
            return (e._context.displayName || "Context") + ".Provider";
        case Ol:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case jl:
            return t = e.displayName || null,
            t !== null ? t : Ni(e.type) || "Memo";
        case Ot:
            t = e._payload,
            e = e._init;
            try {
                return Ni(e(t))
            } catch {}
        }
    return null
}
function Uh(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Ni(t);
    case 8:
        return t === Al ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function Xt(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Dc(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function Vh(e) {
    var t = Dc(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get
          , s = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(i) {
                r = "" + i,
                s.call(this, i)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(i) {
                r = "" + i
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function ho(e) {
    e._valueTracker || (e._valueTracker = Vh(e))
}
function zc(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Dc(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Ho(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Ri(e, t) {
    var n = t.checked;
    return J({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function ba(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = Xt(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function bc(e, t) {
    t = t.checked,
    t != null && Il(e, "checked", t, !1)
}
function Ii(e, t) {
    bc(e, t);
    var n = Xt(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Ai(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ai(e, t.type, Xt(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function $a(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Ai(e, t, n) {
    (t !== "number" || Ho(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Er = Array.isArray;
function Dn(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var o = 0; o < n.length; o++)
            t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            o = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== o && (e[n].selected = o),
            o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Xt(n),
        t = null,
        o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0,
                r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}
function Oi(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(T(91));
    return J({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Ua(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(T(92));
            if (Er(n)) {
                if (1 < n.length)
                    throw Error(T(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: Xt(n)
    }
}
function $c(e, t) {
    var n = Xt(t.value)
      , r = Xt(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Va(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Uc(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function ji(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Uc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var mo, Vc = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (mo = mo || document.createElement("div"),
        mo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = mo.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Fr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var _r = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , Bh = ["Webkit", "ms", "Moz", "O"];
Object.keys(_r).forEach(function(e) {
    Bh.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        _r[t] = _r[e]
    })
});
function Bc(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || _r.hasOwnProperty(e) && _r[e] ? ("" + t).trim() : t + "px"
}
function Wc(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , o = Bc(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, o) : e[n] = o
        }
}
var Wh = J({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Mi(e, t) {
    if (t) {
        if (Wh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(T(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(T(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(T(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(T(62))
    }
}
function Li(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var Fi = null;
function Ml(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Di = null
  , zn = null
  , bn = null;
function Ba(e) {
    if (e = lo(e)) {
        if (typeof Di != "function")
            throw Error(T(280));
        var t = e.stateNode;
        t && (t = Es(t),
        Di(e.stateNode, e.type, t))
    }
}
function Qc(e) {
    zn ? bn ? bn.push(e) : bn = [e] : zn = e
}
function Hc() {
    if (zn) {
        var e = zn
          , t = bn;
        if (bn = zn = null,
        Ba(e),
        t)
            for (e = 0; e < t.length; e++)
                Ba(t[e])
    }
}
function Kc(e, t) {
    return e(t)
}
function Gc() {}
var Gs = !1;
function qc(e, t, n) {
    if (Gs)
        return e(t, n);
    Gs = !0;
    try {
        return Kc(e, t, n)
    } finally {
        Gs = !1,
        (zn !== null || bn !== null) && (Gc(),
        Hc())
    }
}
function Dr(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Es(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
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
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(T(231, t, typeof n));
    return n
}
var zi = !1;
if (Et)
    try {
        var fr = {};
        Object.defineProperty(fr, "passive", {
            get: function() {
                zi = !0
            }
        }),
        window.addEventListener("test", fr, fr),
        window.removeEventListener("test", fr, fr)
    } catch {
        zi = !1
    }
function Qh(e, t, n, r, o, s, i, l, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (d) {
        this.onError(d)
    }
}
var Pr = !1
  , Ko = null
  , Go = !1
  , bi = null
  , Hh = {
    onError: function(e) {
        Pr = !0,
        Ko = e
    }
};
function Kh(e, t, n, r, o, s, i, l, a) {
    Pr = !1,
    Ko = null,
    Qh.apply(Hh, arguments)
}
function Gh(e, t, n, r, o, s, i, l, a) {
    if (Kh.apply(this, arguments),
    Pr) {
        if (Pr) {
            var u = Ko;
            Pr = !1,
            Ko = null
        } else
            throw Error(T(198));
        Go || (Go = !0,
        bi = u)
    }
}
function Cn(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Yc(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Wa(e) {
    if (Cn(e) !== e)
        throw Error(T(188))
}
function qh(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Cn(e),
        t === null)
            throw Error(T(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null)
            break;
        var s = o.alternate;
        if (s === null) {
            if (r = o.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === s.child) {
            for (s = o.child; s; ) {
                if (s === n)
                    return Wa(o),
                    e;
                if (s === r)
                    return Wa(o),
                    t;
                s = s.sibling
            }
            throw Error(T(188))
        }
        if (n.return !== r.return)
            n = o,
            r = s;
        else {
            for (var i = !1, l = o.child; l; ) {
                if (l === n) {
                    i = !0,
                    n = o,
                    r = s;
                    break
                }
                if (l === r) {
                    i = !0,
                    r = o,
                    n = s;
                    break
                }
                l = l.sibling
            }
            if (!i) {
                for (l = s.child; l; ) {
                    if (l === n) {
                        i = !0,
                        n = s,
                        r = o;
                        break
                    }
                    if (l === r) {
                        i = !0,
                        r = s,
                        n = o;
                        break
                    }
                    l = l.sibling
                }
                if (!i)
                    throw Error(T(189))
            }
        }
        if (n.alternate !== r)
            throw Error(T(190))
    }
    if (n.tag !== 3)
        throw Error(T(188));
    return n.stateNode.current === n ? e : t
}
function Xc(e) {
    return e = qh(e),
    e !== null ? Zc(e) : null
}
function Zc(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = Zc(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Jc = ze.unstable_scheduleCallback
  , Qa = ze.unstable_cancelCallback
  , Yh = ze.unstable_shouldYield
  , Xh = ze.unstable_requestPaint
  , oe = ze.unstable_now
  , Zh = ze.unstable_getCurrentPriorityLevel
  , Ll = ze.unstable_ImmediatePriority
  , ed = ze.unstable_UserBlockingPriority
  , qo = ze.unstable_NormalPriority
  , Jh = ze.unstable_LowPriority
  , td = ze.unstable_IdlePriority
  , gs = null
  , dt = null;
function em(e) {
    if (dt && typeof dt.onCommitFiberRoot == "function")
        try {
            dt.onCommitFiberRoot(gs, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var tt = Math.clz32 ? Math.clz32 : rm
  , tm = Math.log
  , nm = Math.LN2;
function rm(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (tm(e) / nm | 0) | 0
}
var vo = 64
  , yo = 4194304;
function Cr(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
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
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Yo(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , o = e.suspendedLanes
      , s = e.pingedLanes
      , i = n & 268435455;
    if (i !== 0) {
        var l = i & ~o;
        l !== 0 ? r = Cr(l) : (s &= i,
        s !== 0 && (r = Cr(s)))
    } else
        i = n & ~o,
        i !== 0 ? r = Cr(i) : s !== 0 && (r = Cr(s));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r,
    s = t & -t,
    o >= s || o === 16 && (s & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - tt(t),
            o = 1 << n,
            r |= e[n],
            t &= ~o;
    return r
}
function om(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
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
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function sm(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
        var i = 31 - tt(s)
          , l = 1 << i
          , a = o[i];
        a === -1 ? (!(l & n) || l & r) && (o[i] = om(l, t)) : a <= t && (e.expiredLanes |= l),
        s &= ~l
    }
}
function $i(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function nd() {
    var e = vo;
    return vo <<= 1,
    !(vo & 4194240) && (vo = 64),
    e
}
function qs(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function so(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - tt(t),
    e[t] = n
}
function im(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - tt(n)
          , s = 1 << o;
        t[o] = 0,
        r[o] = -1,
        e[o] = -1,
        n &= ~s
    }
}
function Fl(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - tt(n)
          , o = 1 << r;
        o & t | e[r] & t && (e[r] |= t),
        n &= ~o
    }
}
var B = 0;
function rd(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var od, Dl, sd, id, ld, Ui = !1, go = [], Bt = null, Wt = null, Qt = null, zr = new Map, br = new Map, Mt = [], lm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ha(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Bt = null;
        break;
    case "dragenter":
    case "dragleave":
        Wt = null;
        break;
    case "mouseover":
    case "mouseout":
        Qt = null;
        break;
    case "pointerover":
    case "pointerout":
        zr.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        br.delete(t.pointerId)
    }
}
function pr(e, t, n, r, o, s) {
    return e === null || e.nativeEvent !== s ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [o]
    },
    t !== null && (t = lo(t),
    t !== null && Dl(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    o !== null && t.indexOf(o) === -1 && t.push(o),
    e)
}
function am(e, t, n, r, o) {
    switch (t) {
    case "focusin":
        return Bt = pr(Bt, e, t, n, r, o),
        !0;
    case "dragenter":
        return Wt = pr(Wt, e, t, n, r, o),
        !0;
    case "mouseover":
        return Qt = pr(Qt, e, t, n, r, o),
        !0;
    case "pointerover":
        var s = o.pointerId;
        return zr.set(s, pr(zr.get(s) || null, e, t, n, r, o)),
        !0;
    case "gotpointercapture":
        return s = o.pointerId,
        br.set(s, pr(br.get(s) || null, e, t, n, r, o)),
        !0
    }
    return !1
}
function ad(e) {
    var t = an(e.target);
    if (t !== null) {
        var n = Cn(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = Yc(n),
                t !== null) {
                    e.blockedOn = t,
                    ld(e.priority, function() {
                        sd(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Mo(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Vi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            Fi = r,
            n.target.dispatchEvent(r),
            Fi = null
        } else
            return t = lo(n),
            t !== null && Dl(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Ka(e, t, n) {
    Mo(e) && n.delete(t)
}
function um() {
    Ui = !1,
    Bt !== null && Mo(Bt) && (Bt = null),
    Wt !== null && Mo(Wt) && (Wt = null),
    Qt !== null && Mo(Qt) && (Qt = null),
    zr.forEach(Ka),
    br.forEach(Ka)
}
function hr(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Ui || (Ui = !0,
    ze.unstable_scheduleCallback(ze.unstable_NormalPriority, um)))
}
function $r(e) {
    function t(o) {
        return hr(o, e)
    }
    if (0 < go.length) {
        hr(go[0], e);
        for (var n = 1; n < go.length; n++) {
            var r = go[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Bt !== null && hr(Bt, e),
    Wt !== null && hr(Wt, e),
    Qt !== null && hr(Qt, e),
    zr.forEach(t),
    br.forEach(t),
    n = 0; n < Mt.length; n++)
        r = Mt[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Mt.length && (n = Mt[0],
    n.blockedOn === null); )
        ad(n),
        n.blockedOn === null && Mt.shift()
}
var $n = Pt.ReactCurrentBatchConfig
  , Xo = !0;
function cm(e, t, n, r) {
    var o = B
      , s = $n.transition;
    $n.transition = null;
    try {
        B = 1,
        zl(e, t, n, r)
    } finally {
        B = o,
        $n.transition = s
    }
}
function dm(e, t, n, r) {
    var o = B
      , s = $n.transition;
    $n.transition = null;
    try {
        B = 4,
        zl(e, t, n, r)
    } finally {
        B = o,
        $n.transition = s
    }
}
function zl(e, t, n, r) {
    if (Xo) {
        var o = Vi(e, t, n, r);
        if (o === null)
            si(e, t, r, Zo, n),
            Ha(e, r);
        else if (am(o, e, t, n, r))
            r.stopPropagation();
        else if (Ha(e, r),
        t & 4 && -1 < lm.indexOf(e)) {
            for (; o !== null; ) {
                var s = lo(o);
                if (s !== null && od(s),
                s = Vi(e, t, n, r),
                s === null && si(e, t, r, Zo, n),
                s === o)
                    break;
                o = s
            }
            o !== null && r.stopPropagation()
        } else
            si(e, t, r, null, n)
    }
}
var Zo = null;
function Vi(e, t, n, r) {
    if (Zo = null,
    e = Ml(r),
    e = an(e),
    e !== null)
        if (t = Cn(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = Yc(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Zo = e,
    null
}
function ud(e) {
    switch (e) {
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
    case "selectstart":
        return 1;
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
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (Zh()) {
        case Ll:
            return 1;
        case ed:
            return 4;
        case qo:
        case Jh:
            return 16;
        case td:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var Ut = null
  , bl = null
  , Lo = null;
function cd() {
    if (Lo)
        return Lo;
    var e, t = bl, n = t.length, r, o = "value"in Ut ? Ut.value : Ut.textContent, s = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++)
        ;
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === o[s - r]; r++)
        ;
    return Lo = o.slice(e, 1 < r ? 1 - r : void 0)
}
function Fo(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function wo() {
    return !0
}
function Ga() {
    return !1
}
function $e(e) {
    function t(n, r, o, s, i) {
        this._reactName = n,
        this._targetInst = o,
        this.type = r,
        this.nativeEvent = s,
        this.target = i,
        this.currentTarget = null;
        for (var l in e)
            e.hasOwnProperty(l) && (n = e[l],
            this[l] = n ? n(s) : s[l]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? wo : Ga,
        this.isPropagationStopped = Ga,
        this
    }
    return J(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = wo)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = wo)
        },
        persist: function() {},
        isPersistent: wo
    }),
    t
}
var ar = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, $l = $e(ar), io = J({}, ar, {
    view: 0,
    detail: 0
}), fm = $e(io), Ys, Xs, mr, ws = J({}, io, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ul,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== mr && (mr && e.type === "mousemove" ? (Ys = e.screenX - mr.screenX,
        Xs = e.screenY - mr.screenY) : Xs = Ys = 0,
        mr = e),
        Ys)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : Xs
    }
}), qa = $e(ws), pm = J({}, ws, {
    dataTransfer: 0
}), hm = $e(pm), mm = J({}, io, {
    relatedTarget: 0
}), Zs = $e(mm), vm = J({}, ar, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), ym = $e(vm), gm = J({}, ar, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), wm = $e(gm), xm = J({}, ar, {
    data: 0
}), Ya = $e(xm), Sm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, Em = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, Cm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function km(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Cm[e]) ? !!t[e] : !1
}
function Ul() {
    return km
}
var _m = J({}, io, {
    key: function(e) {
        if (e.key) {
            var t = Sm[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Fo(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Em[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ul,
    charCode: function(e) {
        return e.type === "keypress" ? Fo(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Fo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , Pm = $e(_m)
  , Tm = J({}, ws, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Xa = $e(Tm)
  , Nm = J({}, io, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ul
})
  , Rm = $e(Nm)
  , Im = J({}, ar, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , Am = $e(Im)
  , Om = J({}, ws, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , jm = $e(Om)
  , Mm = [9, 13, 27, 32]
  , Vl = Et && "CompositionEvent"in window
  , Tr = null;
Et && "documentMode"in document && (Tr = document.documentMode);
var Lm = Et && "TextEvent"in window && !Tr
  , dd = Et && (!Vl || Tr && 8 < Tr && 11 >= Tr)
  , Za = " "
  , Ja = !1;
function fd(e, t) {
    switch (e) {
    case "keyup":
        return Mm.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function pd(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var Tn = !1;
function Fm(e, t) {
    switch (e) {
    case "compositionend":
        return pd(t);
    case "keypress":
        return t.which !== 32 ? null : (Ja = !0,
        Za);
    case "textInput":
        return e = t.data,
        e === Za && Ja ? null : e;
    default:
        return null
    }
}
function Dm(e, t) {
    if (Tn)
        return e === "compositionend" || !Vl && fd(e, t) ? (e = cd(),
        Lo = bl = Ut = null,
        Tn = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return dd && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var zm = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function eu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!zm[e.type] : t === "textarea"
}
function hd(e, t, n, r) {
    Qc(r),
    t = Jo(t, "onChange"),
    0 < t.length && (n = new $l("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Nr = null
  , Ur = null;
function bm(e) {
    _d(e, 0)
}
function xs(e) {
    var t = In(e);
    if (zc(t))
        return e
}
function $m(e, t) {
    if (e === "change")
        return t
}
var md = !1;
if (Et) {
    var Js;
    if (Et) {
        var ei = "oninput"in document;
        if (!ei) {
            var tu = document.createElement("div");
            tu.setAttribute("oninput", "return;"),
            ei = typeof tu.oninput == "function"
        }
        Js = ei
    } else
        Js = !1;
    md = Js && (!document.documentMode || 9 < document.documentMode)
}
function nu() {
    Nr && (Nr.detachEvent("onpropertychange", vd),
    Ur = Nr = null)
}
function vd(e) {
    if (e.propertyName === "value" && xs(Ur)) {
        var t = [];
        hd(t, Ur, e, Ml(e)),
        qc(bm, t)
    }
}
function Um(e, t, n) {
    e === "focusin" ? (nu(),
    Nr = t,
    Ur = n,
    Nr.attachEvent("onpropertychange", vd)) : e === "focusout" && nu()
}
function Vm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return xs(Ur)
}
function Bm(e, t) {
    if (e === "click")
        return xs(t)
}
function Wm(e, t) {
    if (e === "input" || e === "change")
        return xs(t)
}
function Qm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var rt = typeof Object.is == "function" ? Object.is : Qm;
function Vr(e, t) {
    if (rt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!ki.call(t, o) || !rt(e[o], t[o]))
            return !1
    }
    return !0
}
function ru(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function ou(e, t) {
    var n = ru(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = ru(n)
    }
}
function yd(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? yd(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function gd() {
    for (var e = window, t = Ho(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Ho(e.document)
    }
    return t
}
function Bl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function Hm(e) {
    var t = gd()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && yd(n.ownerDocument.documentElement, n)) {
        if (r !== null && Bl(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length
                  , s = Math.min(r.start, o);
                r = r.end === void 0 ? s : Math.min(r.end, o),
                !e.extend && s > r && (o = r,
                r = s,
                s = o),
                o = ou(n, s);
                var i = ou(n, r);
                o && i && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(),
                t.setStart(o.node, o.offset),
                e.removeAllRanges(),
                s > r ? (e.addRange(t),
                e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var Km = Et && "documentMode"in document && 11 >= document.documentMode
  , Nn = null
  , Bi = null
  , Rr = null
  , Wi = !1;
function su(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Wi || Nn == null || Nn !== Ho(r) || (r = Nn,
    "selectionStart"in r && Bl(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Rr && Vr(Rr, r) || (Rr = r,
    r = Jo(Bi, "onSelect"),
    0 < r.length && (t = new $l("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = Nn)))
}
function xo(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Rn = {
    animationend: xo("Animation", "AnimationEnd"),
    animationiteration: xo("Animation", "AnimationIteration"),
    animationstart: xo("Animation", "AnimationStart"),
    transitionend: xo("Transition", "TransitionEnd")
}
  , ti = {}
  , wd = {};
Et && (wd = document.createElement("div").style,
"AnimationEvent"in window || (delete Rn.animationend.animation,
delete Rn.animationiteration.animation,
delete Rn.animationstart.animation),
"TransitionEvent"in window || delete Rn.transitionend.transition);
function Ss(e) {
    if (ti[e])
        return ti[e];
    if (!Rn[e])
        return e;
    var t = Rn[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in wd)
            return ti[e] = t[n];
    return e
}
var xd = Ss("animationend")
  , Sd = Ss("animationiteration")
  , Ed = Ss("animationstart")
  , Cd = Ss("transitionend")
  , kd = new Map
  , iu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function en(e, t) {
    kd.set(e, t),
    En(t, [e])
}
for (var ni = 0; ni < iu.length; ni++) {
    var ri = iu[ni]
      , Gm = ri.toLowerCase()
      , qm = ri[0].toUpperCase() + ri.slice(1);
    en(Gm, "on" + qm)
}
en(xd, "onAnimationEnd");
en(Sd, "onAnimationIteration");
en(Ed, "onAnimationStart");
en("dblclick", "onDoubleClick");
en("focusin", "onFocus");
en("focusout", "onBlur");
en(Cd, "onTransitionEnd");
Jn("onMouseEnter", ["mouseout", "mouseover"]);
Jn("onMouseLeave", ["mouseout", "mouseover"]);
Jn("onPointerEnter", ["pointerout", "pointerover"]);
Jn("onPointerLeave", ["pointerout", "pointerover"]);
En("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
En("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
En("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
En("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
En("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
En("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var kr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , Ym = new Set("cancel close invalid load scroll toggle".split(" ").concat(kr));
function lu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    Gh(r, t, void 0, e),
    e.currentTarget = null
}
function _d(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , o = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                    var l = r[i]
                      , a = l.instance
                      , u = l.currentTarget;
                    if (l = l.listener,
                    a !== s && o.isPropagationStopped())
                        break e;
                    lu(o, l, u),
                    s = a
                }
            else
                for (i = 0; i < r.length; i++) {
                    if (l = r[i],
                    a = l.instance,
                    u = l.currentTarget,
                    l = l.listener,
                    a !== s && o.isPropagationStopped())
                        break e;
                    lu(o, l, u),
                    s = a
                }
        }
    }
    if (Go)
        throw e = bi,
        Go = !1,
        bi = null,
        e
}
function G(e, t) {
    var n = t[qi];
    n === void 0 && (n = t[qi] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Pd(t, e, 2, !1),
    n.add(r))
}
function oi(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Pd(n, e, r, t)
}
var So = "_reactListening" + Math.random().toString(36).slice(2);
function Br(e) {
    if (!e[So]) {
        e[So] = !0,
        jc.forEach(function(n) {
            n !== "selectionchange" && (Ym.has(n) || oi(n, !1, e),
            oi(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[So] || (t[So] = !0,
        oi("selectionchange", !1, t))
    }
}
function Pd(e, t, n, r) {
    switch (ud(t)) {
    case 1:
        var o = cm;
        break;
    case 4:
        o = dm;
        break;
    default:
        o = zl
    }
    n = o.bind(null, t, n, e),
    o = void 0,
    !zi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
    r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}
function si(e, t, n, r, o) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var i = r.tag;
            if (i === 3 || i === 4) {
                var l = r.stateNode.containerInfo;
                if (l === o || l.nodeType === 8 && l.parentNode === o)
                    break;
                if (i === 4)
                    for (i = r.return; i !== null; ) {
                        var a = i.tag;
                        if ((a === 3 || a === 4) && (a = i.stateNode.containerInfo,
                        a === o || a.nodeType === 8 && a.parentNode === o))
                            return;
                        i = i.return
                    }
                for (; l !== null; ) {
                    if (i = an(l),
                    i === null)
                        return;
                    if (a = i.tag,
                    a === 5 || a === 6) {
                        r = s = i;
                        continue e
                    }
                    l = l.parentNode
                }
            }
            r = r.return
        }
    qc(function() {
        var u = s
          , d = Ml(n)
          , p = [];
        e: {
            var f = kd.get(e);
            if (f !== void 0) {
                var x = $l
                  , g = e;
                switch (e) {
                case "keypress":
                    if (Fo(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    x = Pm;
                    break;
                case "focusin":
                    g = "focus",
                    x = Zs;
                    break;
                case "focusout":
                    g = "blur",
                    x = Zs;
                    break;
                case "beforeblur":
                case "afterblur":
                    x = Zs;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    x = qa;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    x = hm;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    x = Rm;
                    break;
                case xd:
                case Sd:
                case Ed:
                    x = ym;
                    break;
                case Cd:
                    x = Am;
                    break;
                case "scroll":
                    x = fm;
                    break;
                case "wheel":
                    x = jm;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    x = wm;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    x = Xa
                }
                var y = (t & 4) !== 0
                  , E = !y && e === "scroll"
                  , h = y ? f !== null ? f + "Capture" : null : f;
                y = [];
                for (var c = u, m; c !== null; ) {
                    m = c;
                    var S = m.stateNode;
                    if (m.tag === 5 && S !== null && (m = S,
                    h !== null && (S = Dr(c, h),
                    S != null && y.push(Wr(c, S, m)))),
                    E)
                        break;
                    c = c.return
                }
                0 < y.length && (f = new x(f,g,null,n,d),
                p.push({
                    event: f,
                    listeners: y
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (f = e === "mouseover" || e === "pointerover",
                x = e === "mouseout" || e === "pointerout",
                f && n !== Fi && (g = n.relatedTarget || n.fromElement) && (an(g) || g[Ct]))
                    break e;
                if ((x || f) && (f = d.window === d ? d : (f = d.ownerDocument) ? f.defaultView || f.parentWindow : window,
                x ? (g = n.relatedTarget || n.toElement,
                x = u,
                g = g ? an(g) : null,
                g !== null && (E = Cn(g),
                g !== E || g.tag !== 5 && g.tag !== 6) && (g = null)) : (x = null,
                g = u),
                x !== g)) {
                    if (y = qa,
                    S = "onMouseLeave",
                    h = "onMouseEnter",
                    c = "mouse",
                    (e === "pointerout" || e === "pointerover") && (y = Xa,
                    S = "onPointerLeave",
                    h = "onPointerEnter",
                    c = "pointer"),
                    E = x == null ? f : In(x),
                    m = g == null ? f : In(g),
                    f = new y(S,c + "leave",x,n,d),
                    f.target = E,
                    f.relatedTarget = m,
                    S = null,
                    an(d) === u && (y = new y(h,c + "enter",g,n,d),
                    y.target = m,
                    y.relatedTarget = E,
                    S = y),
                    E = S,
                    x && g)
                        t: {
                            for (y = x,
                            h = g,
                            c = 0,
                            m = y; m; m = kn(m))
                                c++;
                            for (m = 0,
                            S = h; S; S = kn(S))
                                m++;
                            for (; 0 < c - m; )
                                y = kn(y),
                                c--;
                            for (; 0 < m - c; )
                                h = kn(h),
                                m--;
                            for (; c--; ) {
                                if (y === h || h !== null && y === h.alternate)
                                    break t;
                                y = kn(y),
                                h = kn(h)
                            }
                            y = null
                        }
                    else
                        y = null;
                    x !== null && au(p, f, x, y, !1),
                    g !== null && E !== null && au(p, E, g, y, !0)
                }
            }
            e: {
                if (f = u ? In(u) : window,
                x = f.nodeName && f.nodeName.toLowerCase(),
                x === "select" || x === "input" && f.type === "file")
                    var k = $m;
                else if (eu(f))
                    if (md)
                        k = Wm;
                    else {
                        k = Vm;
                        var N = Um
                    }
                else
                    (x = f.nodeName) && x.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (k = Bm);
                if (k && (k = k(e, u))) {
                    hd(p, k, n, d);
                    break e
                }
                N && N(e, f, u),
                e === "focusout" && (N = f._wrapperState) && N.controlled && f.type === "number" && Ai(f, "number", f.value)
            }
            switch (N = u ? In(u) : window,
            e) {
            case "focusin":
                (eu(N) || N.contentEditable === "true") && (Nn = N,
                Bi = u,
                Rr = null);
                break;
            case "focusout":
                Rr = Bi = Nn = null;
                break;
            case "mousedown":
                Wi = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Wi = !1,
                su(p, n, d);
                break;
            case "selectionchange":
                if (Km)
                    break;
            case "keydown":
            case "keyup":
                su(p, n, d)
            }
            var P;
            if (Vl)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var _ = "onCompositionStart";
                        break e;
                    case "compositionend":
                        _ = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        _ = "onCompositionUpdate";
                        break e
                    }
                    _ = void 0
                }
            else
                Tn ? fd(e, n) && (_ = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
            _ && (dd && n.locale !== "ko" && (Tn || _ !== "onCompositionStart" ? _ === "onCompositionEnd" && Tn && (P = cd()) : (Ut = d,
            bl = "value"in Ut ? Ut.value : Ut.textContent,
            Tn = !0)),
            N = Jo(u, _),
            0 < N.length && (_ = new Ya(_,e,null,n,d),
            p.push({
                event: _,
                listeners: N
            }),
            P ? _.data = P : (P = pd(n),
            P !== null && (_.data = P)))),
            (P = Lm ? Fm(e, n) : Dm(e, n)) && (u = Jo(u, "onBeforeInput"),
            0 < u.length && (d = new Ya("onBeforeInput","beforeinput",null,n,d),
            p.push({
                event: d,
                listeners: u
            }),
            d.data = P))
        }
        _d(p, t)
    })
}
function Wr(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Jo(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e
          , s = o.stateNode;
        o.tag === 5 && s !== null && (o = s,
        s = Dr(e, n),
        s != null && r.unshift(Wr(e, s, o)),
        s = Dr(e, t),
        s != null && r.push(Wr(e, s, o))),
        e = e.return
    }
    return r
}
function kn(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function au(e, t, n, r, o) {
    for (var s = t._reactName, i = []; n !== null && n !== r; ) {
        var l = n
          , a = l.alternate
          , u = l.stateNode;
        if (a !== null && a === r)
            break;
        l.tag === 5 && u !== null && (l = u,
        o ? (a = Dr(n, s),
        a != null && i.unshift(Wr(n, a, l))) : o || (a = Dr(n, s),
        a != null && i.push(Wr(n, a, l)))),
        n = n.return
    }
    i.length !== 0 && e.push({
        event: t,
        listeners: i
    })
}
var Xm = /\r\n?/g
  , Zm = /\u0000|\uFFFD/g;
function uu(e) {
    return (typeof e == "string" ? e : "" + e).replace(Xm, `
`).replace(Zm, "")
}
function Eo(e, t, n) {
    if (t = uu(t),
    uu(e) !== t && n)
        throw Error(T(425))
}
function es() {}
var Qi = null
  , Hi = null;
function Ki(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Gi = typeof setTimeout == "function" ? setTimeout : void 0
  , Jm = typeof clearTimeout == "function" ? clearTimeout : void 0
  , cu = typeof Promise == "function" ? Promise : void 0
  , ev = typeof queueMicrotask == "function" ? queueMicrotask : typeof cu < "u" ? function(e) {
    return cu.resolve(null).then(e).catch(tv)
}
: Gi;
function tv(e) {
    setTimeout(function() {
        throw e
    })
}
function ii(e, t) {
    var n = t
      , r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n),
        o && o.nodeType === 8)
            if (n = o.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(o),
                    $r(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    $r(t)
}
function Ht(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function du(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var ur = Math.random().toString(36).slice(2)
  , ct = "__reactFiber$" + ur
  , Qr = "__reactProps$" + ur
  , Ct = "__reactContainer$" + ur
  , qi = "__reactEvents$" + ur
  , nv = "__reactListeners$" + ur
  , rv = "__reactHandles$" + ur;
function an(e) {
    var t = e[ct];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Ct] || n[ct]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = du(e); e !== null; ) {
                    if (n = e[ct])
                        return n;
                    e = du(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function lo(e) {
    return e = e[ct] || e[Ct],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function In(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(T(33))
}
function Es(e) {
    return e[Qr] || null
}
var Yi = []
  , An = -1;
function tn(e) {
    return {
        current: e
    }
}
function q(e) {
    0 > An || (e.current = Yi[An],
    Yi[An] = null,
    An--)
}
function Q(e, t) {
    An++,
    Yi[An] = e.current,
    e.current = t
}
var Zt = {}
  , xe = tn(Zt)
  , Ae = tn(!1)
  , yn = Zt;
function er(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return Zt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, s;
    for (s in n)
        o[s] = t[s];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = o),
    o
}
function Oe(e) {
    return e = e.childContextTypes,
    e != null
}
function ts() {
    q(Ae),
    q(xe)
}
function fu(e, t, n) {
    if (xe.current !== Zt)
        throw Error(T(168));
    Q(xe, t),
    Q(Ae, n)
}
function Td(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t))
            throw Error(T(108, Uh(e) || "Unknown", o));
    return J({}, n, r)
}
function ns(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Zt,
    yn = xe.current,
    Q(xe, e),
    Q(Ae, Ae.current),
    !0
}
function pu(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(T(169));
    n ? (e = Td(e, t, yn),
    r.__reactInternalMemoizedMergedChildContext = e,
    q(Ae),
    q(xe),
    Q(xe, e)) : q(Ae),
    Q(Ae, n)
}
var gt = null
  , Cs = !1
  , li = !1;
function Nd(e) {
    gt === null ? gt = [e] : gt.push(e)
}
function ov(e) {
    Cs = !0,
    Nd(e)
}
function nn() {
    if (!li && gt !== null) {
        li = !0;
        var e = 0
          , t = B;
        try {
            var n = gt;
            for (B = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            gt = null,
            Cs = !1
        } catch (o) {
            throw gt !== null && (gt = gt.slice(e + 1)),
            Jc(Ll, nn),
            o
        } finally {
            B = t,
            li = !1
        }
    }
    return null
}
var On = []
  , jn = 0
  , rs = null
  , os = 0
  , Be = []
  , We = 0
  , gn = null
  , wt = 1
  , xt = "";
function sn(e, t) {
    On[jn++] = os,
    On[jn++] = rs,
    rs = e,
    os = t
}
function Rd(e, t, n) {
    Be[We++] = wt,
    Be[We++] = xt,
    Be[We++] = gn,
    gn = e;
    var r = wt;
    e = xt;
    var o = 32 - tt(r) - 1;
    r &= ~(1 << o),
    n += 1;
    var s = 32 - tt(t) + o;
    if (30 < s) {
        var i = o - o % 5;
        s = (r & (1 << i) - 1).toString(32),
        r >>= i,
        o -= i,
        wt = 1 << 32 - tt(t) + o | n << o | r,
        xt = s + e
    } else
        wt = 1 << s | n << o | r,
        xt = e
}
function Wl(e) {
    e.return !== null && (sn(e, 1),
    Rd(e, 1, 0))
}
function Ql(e) {
    for (; e === rs; )
        rs = On[--jn],
        On[jn] = null,
        os = On[--jn],
        On[jn] = null;
    for (; e === gn; )
        gn = Be[--We],
        Be[We] = null,
        xt = Be[--We],
        Be[We] = null,
        wt = Be[--We],
        Be[We] = null
}
var De = null
  , Fe = null
  , Y = !1
  , et = null;
function Id(e, t) {
    var n = Qe(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function hu(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        De = e,
        Fe = Ht(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        De = e,
        Fe = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = gn !== null ? {
            id: wt,
            overflow: xt
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Qe(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        De = e,
        Fe = null,
        !0) : !1;
    default:
        return !1
    }
}
function Xi(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Zi(e) {
    if (Y) {
        var t = Fe;
        if (t) {
            var n = t;
            if (!hu(e, t)) {
                if (Xi(e))
                    throw Error(T(418));
                t = Ht(n.nextSibling);
                var r = De;
                t && hu(e, t) ? Id(r, n) : (e.flags = e.flags & -4097 | 2,
                Y = !1,
                De = e)
            }
        } else {
            if (Xi(e))
                throw Error(T(418));
            e.flags = e.flags & -4097 | 2,
            Y = !1,
            De = e
        }
    }
}
function mu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    De = e
}
function Co(e) {
    if (e !== De)
        return !1;
    if (!Y)
        return mu(e),
        Y = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Ki(e.type, e.memoizedProps)),
    t && (t = Fe)) {
        if (Xi(e))
            throw Ad(),
            Error(T(418));
        for (; t; )
            Id(e, t),
            t = Ht(t.nextSibling)
    }
    if (mu(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(T(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Fe = Ht(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Fe = null
        }
    } else
        Fe = De ? Ht(e.stateNode.nextSibling) : null;
    return !0
}
function Ad() {
    for (var e = Fe; e; )
        e = Ht(e.nextSibling)
}
function tr() {
    Fe = De = null,
    Y = !1
}
function Hl(e) {
    et === null ? et = [e] : et.push(e)
}
var sv = Pt.ReactCurrentBatchConfig;
function vr(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(T(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(T(147, e));
            var o = r
              , s = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(i) {
                var l = o.refs;
                i === null ? delete l[s] : l[s] = i
            }
            ,
            t._stringRef = s,
            t)
        }
        if (typeof e != "string")
            throw Error(T(284));
        if (!n._owner)
            throw Error(T(290, e))
    }
    return e
}
function ko(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(T(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function vu(e) {
    var t = e._init;
    return t(e._payload)
}
function Od(e) {
    function t(h, c) {
        if (e) {
            var m = h.deletions;
            m === null ? (h.deletions = [c],
            h.flags |= 16) : m.push(c)
        }
    }
    function n(h, c) {
        if (!e)
            return null;
        for (; c !== null; )
            t(h, c),
            c = c.sibling;
        return null
    }
    function r(h, c) {
        for (h = new Map; c !== null; )
            c.key !== null ? h.set(c.key, c) : h.set(c.index, c),
            c = c.sibling;
        return h
    }
    function o(h, c) {
        return h = Yt(h, c),
        h.index = 0,
        h.sibling = null,
        h
    }
    function s(h, c, m) {
        return h.index = m,
        e ? (m = h.alternate,
        m !== null ? (m = m.index,
        m < c ? (h.flags |= 2,
        c) : m) : (h.flags |= 2,
        c)) : (h.flags |= 1048576,
        c)
    }
    function i(h) {
        return e && h.alternate === null && (h.flags |= 2),
        h
    }
    function l(h, c, m, S) {
        return c === null || c.tag !== 6 ? (c = hi(m, h.mode, S),
        c.return = h,
        c) : (c = o(c, m),
        c.return = h,
        c)
    }
    function a(h, c, m, S) {
        var k = m.type;
        return k === Pn ? d(h, c, m.props.children, S, m.key) : c !== null && (c.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Ot && vu(k) === c.type) ? (S = o(c, m.props),
        S.ref = vr(h, c, m),
        S.return = h,
        S) : (S = Bo(m.type, m.key, m.props, null, h.mode, S),
        S.ref = vr(h, c, m),
        S.return = h,
        S)
    }
    function u(h, c, m, S) {
        return c === null || c.tag !== 4 || c.stateNode.containerInfo !== m.containerInfo || c.stateNode.implementation !== m.implementation ? (c = mi(m, h.mode, S),
        c.return = h,
        c) : (c = o(c, m.children || []),
        c.return = h,
        c)
    }
    function d(h, c, m, S, k) {
        return c === null || c.tag !== 7 ? (c = vn(m, h.mode, S, k),
        c.return = h,
        c) : (c = o(c, m),
        c.return = h,
        c)
    }
    function p(h, c, m) {
        if (typeof c == "string" && c !== "" || typeof c == "number")
            return c = hi("" + c, h.mode, m),
            c.return = h,
            c;
        if (typeof c == "object" && c !== null) {
            switch (c.$$typeof) {
            case po:
                return m = Bo(c.type, c.key, c.props, null, h.mode, m),
                m.ref = vr(h, null, c),
                m.return = h,
                m;
            case _n:
                return c = mi(c, h.mode, m),
                c.return = h,
                c;
            case Ot:
                var S = c._init;
                return p(h, S(c._payload), m)
            }
            if (Er(c) || dr(c))
                return c = vn(c, h.mode, m, null),
                c.return = h,
                c;
            ko(h, c)
        }
        return null
    }
    function f(h, c, m, S) {
        var k = c !== null ? c.key : null;
        if (typeof m == "string" && m !== "" || typeof m == "number")
            return k !== null ? null : l(h, c, "" + m, S);
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case po:
                return m.key === k ? a(h, c, m, S) : null;
            case _n:
                return m.key === k ? u(h, c, m, S) : null;
            case Ot:
                return k = m._init,
                f(h, c, k(m._payload), S)
            }
            if (Er(m) || dr(m))
                return k !== null ? null : d(h, c, m, S, null);
            ko(h, m)
        }
        return null
    }
    function x(h, c, m, S, k) {
        if (typeof S == "string" && S !== "" || typeof S == "number")
            return h = h.get(m) || null,
            l(c, h, "" + S, k);
        if (typeof S == "object" && S !== null) {
            switch (S.$$typeof) {
            case po:
                return h = h.get(S.key === null ? m : S.key) || null,
                a(c, h, S, k);
            case _n:
                return h = h.get(S.key === null ? m : S.key) || null,
                u(c, h, S, k);
            case Ot:
                var N = S._init;
                return x(h, c, m, N(S._payload), k)
            }
            if (Er(S) || dr(S))
                return h = h.get(m) || null,
                d(c, h, S, k, null);
            ko(c, S)
        }
        return null
    }
    function g(h, c, m, S) {
        for (var k = null, N = null, P = c, _ = c = 0, j = null; P !== null && _ < m.length; _++) {
            P.index > _ ? (j = P,
            P = null) : j = P.sibling;
            var O = f(h, P, m[_], S);
            if (O === null) {
                P === null && (P = j);
                break
            }
            e && P && O.alternate === null && t(h, P),
            c = s(O, c, _),
            N === null ? k = O : N.sibling = O,
            N = O,
            P = j
        }
        if (_ === m.length)
            return n(h, P),
            Y && sn(h, _),
            k;
        if (P === null) {
            for (; _ < m.length; _++)
                P = p(h, m[_], S),
                P !== null && (c = s(P, c, _),
                N === null ? k = P : N.sibling = P,
                N = P);
            return Y && sn(h, _),
            k
        }
        for (P = r(h, P); _ < m.length; _++)
            j = x(P, h, _, m[_], S),
            j !== null && (e && j.alternate !== null && P.delete(j.key === null ? _ : j.key),
            c = s(j, c, _),
            N === null ? k = j : N.sibling = j,
            N = j);
        return e && P.forEach(function(W) {
            return t(h, W)
        }),
        Y && sn(h, _),
        k
    }
    function y(h, c, m, S) {
        var k = dr(m);
        if (typeof k != "function")
            throw Error(T(150));
        if (m = k.call(m),
        m == null)
            throw Error(T(151));
        for (var N = k = null, P = c, _ = c = 0, j = null, O = m.next(); P !== null && !O.done; _++,
        O = m.next()) {
            P.index > _ ? (j = P,
            P = null) : j = P.sibling;
            var W = f(h, P, O.value, S);
            if (W === null) {
                P === null && (P = j);
                break
            }
            e && P && W.alternate === null && t(h, P),
            c = s(W, c, _),
            N === null ? k = W : N.sibling = W,
            N = W,
            P = j
        }
        if (O.done)
            return n(h, P),
            Y && sn(h, _),
            k;
        if (P === null) {
            for (; !O.done; _++,
            O = m.next())
                O = p(h, O.value, S),
                O !== null && (c = s(O, c, _),
                N === null ? k = O : N.sibling = O,
                N = O);
            return Y && sn(h, _),
            k
        }
        for (P = r(h, P); !O.done; _++,
        O = m.next())
            O = x(P, h, _, O.value, S),
            O !== null && (e && O.alternate !== null && P.delete(O.key === null ? _ : O.key),
            c = s(O, c, _),
            N === null ? k = O : N.sibling = O,
            N = O);
        return e && P.forEach(function(D) {
            return t(h, D)
        }),
        Y && sn(h, _),
        k
    }
    function E(h, c, m, S) {
        if (typeof m == "object" && m !== null && m.type === Pn && m.key === null && (m = m.props.children),
        typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case po:
                e: {
                    for (var k = m.key, N = c; N !== null; ) {
                        if (N.key === k) {
                            if (k = m.type,
                            k === Pn) {
                                if (N.tag === 7) {
                                    n(h, N.sibling),
                                    c = o(N, m.props.children),
                                    c.return = h,
                                    h = c;
                                    break e
                                }
                            } else if (N.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Ot && vu(k) === N.type) {
                                n(h, N.sibling),
                                c = o(N, m.props),
                                c.ref = vr(h, N, m),
                                c.return = h,
                                h = c;
                                break e
                            }
                            n(h, N);
                            break
                        } else
                            t(h, N);
                        N = N.sibling
                    }
                    m.type === Pn ? (c = vn(m.props.children, h.mode, S, m.key),
                    c.return = h,
                    h = c) : (S = Bo(m.type, m.key, m.props, null, h.mode, S),
                    S.ref = vr(h, c, m),
                    S.return = h,
                    h = S)
                }
                return i(h);
            case _n:
                e: {
                    for (N = m.key; c !== null; ) {
                        if (c.key === N)
                            if (c.tag === 4 && c.stateNode.containerInfo === m.containerInfo && c.stateNode.implementation === m.implementation) {
                                n(h, c.sibling),
                                c = o(c, m.children || []),
                                c.return = h,
                                h = c;
                                break e
                            } else {
                                n(h, c);
                                break
                            }
                        else
                            t(h, c);
                        c = c.sibling
                    }
                    c = mi(m, h.mode, S),
                    c.return = h,
                    h = c
                }
                return i(h);
            case Ot:
                return N = m._init,
                E(h, c, N(m._payload), S)
            }
            if (Er(m))
                return g(h, c, m, S);
            if (dr(m))
                return y(h, c, m, S);
            ko(h, m)
        }
        return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m,
        c !== null && c.tag === 6 ? (n(h, c.sibling),
        c = o(c, m),
        c.return = h,
        h = c) : (n(h, c),
        c = hi(m, h.mode, S),
        c.return = h,
        h = c),
        i(h)) : n(h, c)
    }
    return E
}
var nr = Od(!0)
  , jd = Od(!1)
  , ss = tn(null)
  , is = null
  , Mn = null
  , Kl = null;
function Gl() {
    Kl = Mn = is = null
}
function ql(e) {
    var t = ss.current;
    q(ss),
    e._currentValue = t
}
function Ji(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Un(e, t) {
    is = e,
    Kl = Mn = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Ie = !0),
    e.firstContext = null)
}
function Ke(e) {
    var t = e._currentValue;
    if (Kl !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Mn === null) {
            if (is === null)
                throw Error(T(308));
            Mn = e,
            is.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Mn = Mn.next = e;
    return t
}
var un = null;
function Yl(e) {
    un === null ? un = [e] : un.push(e)
}
function Md(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n,
    Yl(t)) : (n.next = o.next,
    o.next = n),
    t.interleaved = n,
    kt(e, r)
}
function kt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var jt = !1;
function Xl(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Ld(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function St(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Kt(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    U & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next,
        o.next = t),
        r.pending = t,
        kt(e, n)
    }
    return o = r.interleaved,
    o === null ? (t.next = t,
    Yl(r)) : (t.next = o.next,
    o.next = t),
    r.interleaved = t,
    kt(e, n)
}
function Do(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Fl(e, n)
    }
}
function yu(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var o = null
          , s = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                s === null ? o = s = i : s = s.next = i,
                n = n.next
            } while (n !== null);
            s === null ? o = s = t : s = s.next = t
        } else
            o = s = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: s,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function ls(e, t, n, r) {
    var o = e.updateQueue;
    jt = !1;
    var s = o.firstBaseUpdate
      , i = o.lastBaseUpdate
      , l = o.shared.pending;
    if (l !== null) {
        o.shared.pending = null;
        var a = l
          , u = a.next;
        a.next = null,
        i === null ? s = u : i.next = u,
        i = a;
        var d = e.alternate;
        d !== null && (d = d.updateQueue,
        l = d.lastBaseUpdate,
        l !== i && (l === null ? d.firstBaseUpdate = u : l.next = u,
        d.lastBaseUpdate = a))
    }
    if (s !== null) {
        var p = o.baseState;
        i = 0,
        d = u = a = null,
        l = s;
        do {
            var f = l.lane
              , x = l.eventTime;
            if ((r & f) === f) {
                d !== null && (d = d.next = {
                    eventTime: x,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var g = e
                      , y = l;
                    switch (f = t,
                    x = n,
                    y.tag) {
                    case 1:
                        if (g = y.payload,
                        typeof g == "function") {
                            p = g.call(x, p, f);
                            break e
                        }
                        p = g;
                        break e;
                    case 3:
                        g.flags = g.flags & -65537 | 128;
                    case 0:
                        if (g = y.payload,
                        f = typeof g == "function" ? g.call(x, p, f) : g,
                        f == null)
                            break e;
                        p = J({}, p, f);
                        break e;
                    case 2:
                        jt = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64,
                f = o.effects,
                f === null ? o.effects = [l] : f.push(l))
            } else
                x = {
                    eventTime: x,
                    lane: f,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                },
                d === null ? (u = d = x,
                a = p) : d = d.next = x,
                i |= f;
            if (l = l.next,
            l === null) {
                if (l = o.shared.pending,
                l === null)
                    break;
                f = l,
                l = f.next,
                f.next = null,
                o.lastBaseUpdate = f,
                o.shared.pending = null
            }
        } while (!0);
        if (d === null && (a = p),
        o.baseState = a,
        o.firstBaseUpdate = u,
        o.lastBaseUpdate = d,
        t = o.shared.interleaved,
        t !== null) {
            o = t;
            do
                i |= o.lane,
                o = o.next;
            while (o !== t)
        } else
            s === null && (o.shared.lanes = 0);
        xn |= i,
        e.lanes = i,
        e.memoizedState = p
    }
}
function gu(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , o = r.callback;
            if (o !== null) {
                if (r.callback = null,
                r = n,
                typeof o != "function")
                    throw Error(T(191, o));
                o.call(r)
            }
        }
}
var ao = {}
  , ft = tn(ao)
  , Hr = tn(ao)
  , Kr = tn(ao);
function cn(e) {
    if (e === ao)
        throw Error(T(174));
    return e
}
function Zl(e, t) {
    switch (Q(Kr, t),
    Q(Hr, e),
    Q(ft, ao),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : ji(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = ji(t, e)
    }
    q(ft),
    Q(ft, t)
}
function rr() {
    q(ft),
    q(Hr),
    q(Kr)
}
function Fd(e) {
    cn(Kr.current);
    var t = cn(ft.current)
      , n = ji(t, e.type);
    t !== n && (Q(Hr, e),
    Q(ft, n))
}
function Jl(e) {
    Hr.current === e && (q(ft),
    q(Hr))
}
var X = tn(0);
function as(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var ai = [];
function ea() {
    for (var e = 0; e < ai.length; e++)
        ai[e]._workInProgressVersionPrimary = null;
    ai.length = 0
}
var zo = Pt.ReactCurrentDispatcher
  , ui = Pt.ReactCurrentBatchConfig
  , wn = 0
  , Z = null
  , le = null
  , ue = null
  , us = !1
  , Ir = !1
  , Gr = 0
  , iv = 0;
function ve() {
    throw Error(T(321))
}
function ta(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!rt(e[n], t[n]))
            return !1;
    return !0
}
function na(e, t, n, r, o, s) {
    if (wn = s,
    Z = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    zo.current = e === null || e.memoizedState === null ? cv : dv,
    e = n(r, o),
    Ir) {
        s = 0;
        do {
            if (Ir = !1,
            Gr = 0,
            25 <= s)
                throw Error(T(301));
            s += 1,
            ue = le = null,
            t.updateQueue = null,
            zo.current = fv,
            e = n(r, o)
        } while (Ir)
    }
    if (zo.current = cs,
    t = le !== null && le.next !== null,
    wn = 0,
    ue = le = Z = null,
    us = !1,
    t)
        throw Error(T(300));
    return e
}
function ra() {
    var e = Gr !== 0;
    return Gr = 0,
    e
}
function it() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ue === null ? Z.memoizedState = ue = e : ue = ue.next = e,
    ue
}
function Ge() {
    if (le === null) {
        var e = Z.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = le.next;
    var t = ue === null ? Z.memoizedState : ue.next;
    if (t !== null)
        ue = t,
        le = e;
    else {
        if (e === null)
            throw Error(T(310));
        le = e,
        e = {
            memoizedState: le.memoizedState,
            baseState: le.baseState,
            baseQueue: le.baseQueue,
            queue: le.queue,
            next: null
        },
        ue === null ? Z.memoizedState = ue = e : ue = ue.next = e
    }
    return ue
}
function qr(e, t) {
    return typeof t == "function" ? t(e) : t
}
function ci(e) {
    var t = Ge()
      , n = t.queue;
    if (n === null)
        throw Error(T(311));
    n.lastRenderedReducer = e;
    var r = le
      , o = r.baseQueue
      , s = n.pending;
    if (s !== null) {
        if (o !== null) {
            var i = o.next;
            o.next = s.next,
            s.next = i
        }
        r.baseQueue = o = s,
        n.pending = null
    }
    if (o !== null) {
        s = o.next,
        r = r.baseState;
        var l = i = null
          , a = null
          , u = s;
        do {
            var d = u.lane;
            if ((wn & d) === d)
                a !== null && (a = a.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var p = {
                    lane: d,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                a === null ? (l = a = p,
                i = r) : a = a.next = p,
                Z.lanes |= d,
                xn |= d
            }
            u = u.next
        } while (u !== null && u !== s);
        a === null ? i = r : a.next = l,
        rt(r, t.memoizedState) || (Ie = !0),
        t.memoizedState = r,
        t.baseState = i,
        t.baseQueue = a,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        o = e;
        do
            s = o.lane,
            Z.lanes |= s,
            xn |= s,
            o = o.next;
        while (o !== e)
    } else
        o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function di(e) {
    var t = Ge()
      , n = t.queue;
    if (n === null)
        throw Error(T(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , o = n.pending
      , s = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var i = o = o.next;
        do
            s = e(s, i.action),
            i = i.next;
        while (i !== o);
        rt(s, t.memoizedState) || (Ie = !0),
        t.memoizedState = s,
        t.baseQueue === null && (t.baseState = s),
        n.lastRenderedState = s
    }
    return [s, r]
}
function Dd() {}
function zd(e, t) {
    var n = Z
      , r = Ge()
      , o = t()
      , s = !rt(r.memoizedState, o);
    if (s && (r.memoizedState = o,
    Ie = !0),
    r = r.queue,
    oa(Ud.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || ue !== null && ue.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Yr(9, $d.bind(null, n, r, o, t), void 0, null),
        ce === null)
            throw Error(T(349));
        wn & 30 || bd(n, t, o)
    }
    return o
}
function bd(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = Z.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    Z.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function $d(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Vd(t) && Bd(e)
}
function Ud(e, t, n) {
    return n(function() {
        Vd(t) && Bd(e)
    })
}
function Vd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !rt(e, n)
    } catch {
        return !0
    }
}
function Bd(e) {
    var t = kt(e, 1);
    t !== null && nt(t, e, 1, -1)
}
function wu(e) {
    var t = it();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: qr,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = uv.bind(null, Z, e),
    [t.memoizedState, e]
}
function Yr(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = Z.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    Z.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Wd() {
    return Ge().memoizedState
}
function bo(e, t, n, r) {
    var o = it();
    Z.flags |= e,
    o.memoizedState = Yr(1 | t, n, void 0, r === void 0 ? null : r)
}
function ks(e, t, n, r) {
    var o = Ge();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (le !== null) {
        var i = le.memoizedState;
        if (s = i.destroy,
        r !== null && ta(r, i.deps)) {
            o.memoizedState = Yr(t, n, s, r);
            return
        }
    }
    Z.flags |= e,
    o.memoizedState = Yr(1 | t, n, s, r)
}
function xu(e, t) {
    return bo(8390656, 8, e, t)
}
function oa(e, t) {
    return ks(2048, 8, e, t)
}
function Qd(e, t) {
    return ks(4, 2, e, t)
}
function Hd(e, t) {
    return ks(4, 4, e, t)
}
function Kd(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function Gd(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    ks(4, 4, Kd.bind(null, t, e), n)
}
function sa() {}
function qd(e, t) {
    var n = Ge();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ta(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function Yd(e, t) {
    var n = Ge();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ta(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function Xd(e, t, n) {
    return wn & 21 ? (rt(n, t) || (n = nd(),
    Z.lanes |= n,
    xn |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Ie = !0),
    e.memoizedState = n)
}
function lv(e, t) {
    var n = B;
    B = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = ui.transition;
    ui.transition = {};
    try {
        e(!1),
        t()
    } finally {
        B = n,
        ui.transition = r
    }
}
function Zd() {
    return Ge().memoizedState
}
function av(e, t, n) {
    var r = qt(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Jd(e))
        ef(t, n);
    else if (n = Md(e, t, n, r),
    n !== null) {
        var o = Pe();
        nt(n, e, r, o),
        tf(n, t, r)
    }
}
function uv(e, t, n) {
    var r = qt(e)
      , o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Jd(e))
        ef(t, o);
    else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer,
        s !== null))
            try {
                var i = t.lastRenderedState
                  , l = s(i, n);
                if (o.hasEagerState = !0,
                o.eagerState = l,
                rt(l, i)) {
                    var a = t.interleaved;
                    a === null ? (o.next = o,
                    Yl(t)) : (o.next = a.next,
                    a.next = o),
                    t.interleaved = o;
                    return
                }
            } catch {} finally {}
        n = Md(e, t, o, r),
        n !== null && (o = Pe(),
        nt(n, e, r, o),
        tf(n, t, r))
    }
}
function Jd(e) {
    var t = e.alternate;
    return e === Z || t !== null && t === Z
}
function ef(e, t) {
    Ir = us = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function tf(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Fl(e, n)
    }
}
var cs = {
    readContext: Ke,
    useCallback: ve,
    useContext: ve,
    useEffect: ve,
    useImperativeHandle: ve,
    useInsertionEffect: ve,
    useLayoutEffect: ve,
    useMemo: ve,
    useReducer: ve,
    useRef: ve,
    useState: ve,
    useDebugValue: ve,
    useDeferredValue: ve,
    useTransition: ve,
    useMutableSource: ve,
    useSyncExternalStore: ve,
    useId: ve,
    unstable_isNewReconciler: !1
}
  , cv = {
    readContext: Ke,
    useCallback: function(e, t) {
        return it().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: Ke,
    useEffect: xu,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        bo(4194308, 4, Kd.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return bo(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return bo(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = it();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = it();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = av.bind(null, Z, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = it();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: wu,
    useDebugValue: sa,
    useDeferredValue: function(e) {
        return it().memoizedState = e
    },
    useTransition: function() {
        var e = wu(!1)
          , t = e[0];
        return e = lv.bind(null, e[1]),
        it().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = Z
          , o = it();
        if (Y) {
            if (n === void 0)
                throw Error(T(407));
            n = n()
        } else {
            if (n = t(),
            ce === null)
                throw Error(T(349));
            wn & 30 || bd(r, t, n)
        }
        o.memoizedState = n;
        var s = {
            value: n,
            getSnapshot: t
        };
        return o.queue = s,
        xu(Ud.bind(null, r, s, e), [e]),
        r.flags |= 2048,
        Yr(9, $d.bind(null, r, s, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = it()
          , t = ce.identifierPrefix;
        if (Y) {
            var n = xt
              , r = wt;
            n = (r & ~(1 << 32 - tt(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Gr++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = iv++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , dv = {
    readContext: Ke,
    useCallback: qd,
    useContext: Ke,
    useEffect: oa,
    useImperativeHandle: Gd,
    useInsertionEffect: Qd,
    useLayoutEffect: Hd,
    useMemo: Yd,
    useReducer: ci,
    useRef: Wd,
    useState: function() {
        return ci(qr)
    },
    useDebugValue: sa,
    useDeferredValue: function(e) {
        var t = Ge();
        return Xd(t, le.memoizedState, e)
    },
    useTransition: function() {
        var e = ci(qr)[0]
          , t = Ge().memoizedState;
        return [e, t]
    },
    useMutableSource: Dd,
    useSyncExternalStore: zd,
    useId: Zd,
    unstable_isNewReconciler: !1
}
  , fv = {
    readContext: Ke,
    useCallback: qd,
    useContext: Ke,
    useEffect: oa,
    useImperativeHandle: Gd,
    useInsertionEffect: Qd,
    useLayoutEffect: Hd,
    useMemo: Yd,
    useReducer: di,
    useRef: Wd,
    useState: function() {
        return di(qr)
    },
    useDebugValue: sa,
    useDeferredValue: function(e) {
        var t = Ge();
        return le === null ? t.memoizedState = e : Xd(t, le.memoizedState, e)
    },
    useTransition: function() {
        var e = di(qr)[0]
          , t = Ge().memoizedState;
        return [e, t]
    },
    useMutableSource: Dd,
    useSyncExternalStore: zd,
    useId: Zd,
    unstable_isNewReconciler: !1
};
function Ye(e, t) {
    if (e && e.defaultProps) {
        t = J({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function el(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : J({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var _s = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Cn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Pe()
          , o = qt(e)
          , s = St(r, o);
        s.payload = t,
        n != null && (s.callback = n),
        t = Kt(e, s, o),
        t !== null && (nt(t, e, o, r),
        Do(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Pe()
          , o = qt(e)
          , s = St(r, o);
        s.tag = 1,
        s.payload = t,
        n != null && (s.callback = n),
        t = Kt(e, s, o),
        t !== null && (nt(t, e, o, r),
        Do(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Pe()
          , r = qt(e)
          , o = St(n, r);
        o.tag = 2,
        t != null && (o.callback = t),
        t = Kt(e, o, r),
        t !== null && (nt(t, e, r, n),
        Do(t, e, r))
    }
};
function Su(e, t, n, r, o, s, i) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, i) : t.prototype && t.prototype.isPureReactComponent ? !Vr(n, r) || !Vr(o, s) : !0
}
function nf(e, t, n) {
    var r = !1
      , o = Zt
      , s = t.contextType;
    return typeof s == "object" && s !== null ? s = Ke(s) : (o = Oe(t) ? yn : xe.current,
    r = t.contextTypes,
    s = (r = r != null) ? er(e, o) : Zt),
    t = new t(n,s),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = _s,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = o,
    e.__reactInternalMemoizedMaskedChildContext = s),
    t
}
function Eu(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && _s.enqueueReplaceState(t, t.state, null)
}
function tl(e, t, n, r) {
    var o = e.stateNode;
    o.props = n,
    o.state = e.memoizedState,
    o.refs = {},
    Xl(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? o.context = Ke(s) : (s = Oe(t) ? yn : xe.current,
    o.context = er(e, s)),
    o.state = e.memoizedState,
    s = t.getDerivedStateFromProps,
    typeof s == "function" && (el(e, t, s, n),
    o.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
    typeof o.componentWillMount == "function" && o.componentWillMount(),
    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
    t !== o.state && _s.enqueueReplaceState(o, o.state, null),
    ls(e, n, o, r),
    o.state = e.memoizedState),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function or(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += $h(r),
            r = r.return;
        while (r);
        var o = n
    } catch (s) {
        o = `
Error generating stack: ` + s.message + `
` + s.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}
function fi(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function nl(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var pv = typeof WeakMap == "function" ? WeakMap : Map;
function rf(e, t, n) {
    n = St(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        fs || (fs = !0,
        fl = r),
        nl(e, t)
    }
    ,
    n
}
function of(e, t, n) {
    n = St(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }
        ,
        n.callback = function() {
            nl(e, t)
        }
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
        nl(e, t),
        typeof r != "function" && (Gt === null ? Gt = new Set([this]) : Gt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : ""
        })
    }
    ),
    n
}
function Cu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new pv;
        var o = new Set;
        r.set(t, o)
    } else
        o = r.get(t),
        o === void 0 && (o = new Set,
        r.set(t, o));
    o.has(n) || (o.add(n),
    e = Tv.bind(null, e, t, n),
    t.then(e, e))
}
function ku(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function _u(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = o,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = St(-1, 1),
    t.tag = 2,
    Kt(n, t, 1))),
    n.lanes |= 1),
    e)
}
var hv = Pt.ReactCurrentOwner
  , Ie = !1;
function ke(e, t, n, r) {
    t.child = e === null ? jd(t, null, n, r) : nr(t, e.child, n, r)
}
function Pu(e, t, n, r, o) {
    n = n.render;
    var s = t.ref;
    return Un(t, o),
    r = na(e, t, n, r, s, o),
    n = ra(),
    e !== null && !Ie ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    _t(e, t, o)) : (Y && n && Wl(t),
    t.flags |= 1,
    ke(e, t, r, o),
    t.child)
}
function Tu(e, t, n, r, o) {
    if (e === null) {
        var s = n.type;
        return typeof s == "function" && !pa(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = s,
        sf(e, t, s, r, o)) : (e = Bo(n.type, null, r, t, t.mode, o),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (s = e.child,
    !(e.lanes & o)) {
        var i = s.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Vr,
        n(i, r) && e.ref === t.ref)
            return _t(e, t, o)
    }
    return t.flags |= 1,
    e = Yt(s, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function sf(e, t, n, r, o) {
    if (e !== null) {
        var s = e.memoizedProps;
        if (Vr(s, r) && e.ref === t.ref)
            if (Ie = !1,
            t.pendingProps = r = s,
            (e.lanes & o) !== 0)
                e.flags & 131072 && (Ie = !0);
            else
                return t.lanes = e.lanes,
                _t(e, t, o)
    }
    return rl(e, t, n, r, o)
}
function lf(e, t, n) {
    var r = t.pendingProps
      , o = r.children
      , s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            Q(Fn, Le),
            Le |= n;
        else {
            if (!(n & 1073741824))
                return e = s !== null ? s.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                Q(Fn, Le),
                Le |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = s !== null ? s.baseLanes : n,
            Q(Fn, Le),
            Le |= r
        }
    else
        s !== null ? (r = s.baseLanes | n,
        t.memoizedState = null) : r = n,
        Q(Fn, Le),
        Le |= r;
    return ke(e, t, o, n),
    t.child
}
function af(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function rl(e, t, n, r, o) {
    var s = Oe(n) ? yn : xe.current;
    return s = er(t, s),
    Un(t, o),
    n = na(e, t, n, r, s, o),
    r = ra(),
    e !== null && !Ie ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    _t(e, t, o)) : (Y && r && Wl(t),
    t.flags |= 1,
    ke(e, t, n, o),
    t.child)
}
function Nu(e, t, n, r, o) {
    if (Oe(n)) {
        var s = !0;
        ns(t)
    } else
        s = !1;
    if (Un(t, o),
    t.stateNode === null)
        $o(e, t),
        nf(t, n, r),
        tl(t, n, r, o),
        r = !0;
    else if (e === null) {
        var i = t.stateNode
          , l = t.memoizedProps;
        i.props = l;
        var a = i.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = Ke(u) : (u = Oe(n) ? yn : xe.current,
        u = er(t, u));
        var d = n.getDerivedStateFromProps
          , p = typeof d == "function" || typeof i.getSnapshotBeforeUpdate == "function";
        p || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (l !== r || a !== u) && Eu(t, i, r, u),
        jt = !1;
        var f = t.memoizedState;
        i.state = f,
        ls(t, r, i, o),
        a = t.memoizedState,
        l !== r || f !== a || Ae.current || jt ? (typeof d == "function" && (el(t, n, d, r),
        a = t.memoizedState),
        (l = jt || Su(t, n, l, r, f, a, u)) ? (p || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(),
        typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()),
        typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = a),
        i.props = r,
        i.state = a,
        i.context = u,
        r = l) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        i = t.stateNode,
        Ld(e, t),
        l = t.memoizedProps,
        u = t.type === t.elementType ? l : Ye(t.type, l),
        i.props = u,
        p = t.pendingProps,
        f = i.context,
        a = n.contextType,
        typeof a == "object" && a !== null ? a = Ke(a) : (a = Oe(n) ? yn : xe.current,
        a = er(t, a));
        var x = n.getDerivedStateFromProps;
        (d = typeof x == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (l !== p || f !== a) && Eu(t, i, r, a),
        jt = !1,
        f = t.memoizedState,
        i.state = f,
        ls(t, r, i, o);
        var g = t.memoizedState;
        l !== p || f !== g || Ae.current || jt ? (typeof x == "function" && (el(t, n, x, r),
        g = t.memoizedState),
        (u = jt || Su(t, n, u, r, f, g, a) || !1) ? (d || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, g, a),
        typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, g, a)),
        typeof i.componentDidUpdate == "function" && (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = g),
        i.props = r,
        i.state = g,
        i.context = a,
        r = u) : (typeof i.componentDidUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return ol(e, t, n, r, s, o)
}
function ol(e, t, n, r, o, s) {
    af(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i)
        return o && pu(t, n, !1),
        _t(e, t, s);
    r = t.stateNode,
    hv.current = t;
    var l = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && i ? (t.child = nr(t, e.child, null, s),
    t.child = nr(t, null, l, s)) : ke(e, t, l, s),
    t.memoizedState = r.state,
    o && pu(t, n, !0),
    t.child
}
function uf(e) {
    var t = e.stateNode;
    t.pendingContext ? fu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && fu(e, t.context, !1),
    Zl(e, t.containerInfo)
}
function Ru(e, t, n, r, o) {
    return tr(),
    Hl(o),
    t.flags |= 256,
    ke(e, t, n, r),
    t.child
}
var sl = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function il(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function cf(e, t, n) {
    var r = t.pendingProps, o = X.current, s = !1, i = (t.flags & 128) !== 0, l;
    if ((l = i) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l ? (s = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
    Q(X, o & 1),
    e === null)
        return Zi(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (i = r.children,
        e = r.fallback,
        s ? (r = t.mode,
        s = t.child,
        i = {
            mode: "hidden",
            children: i
        },
        !(r & 1) && s !== null ? (s.childLanes = 0,
        s.pendingProps = i) : s = Ns(i, r, 0, null),
        e = vn(e, r, n, null),
        s.return = t,
        e.return = t,
        s.sibling = e,
        t.child = s,
        t.child.memoizedState = il(n),
        t.memoizedState = sl,
        e) : ia(t, i));
    if (o = e.memoizedState,
    o !== null && (l = o.dehydrated,
    l !== null))
        return mv(e, t, i, r, l, o, n);
    if (s) {
        s = r.fallback,
        i = t.mode,
        o = e.child,
        l = o.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(i & 1) && t.child !== o ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = a,
        t.deletions = null) : (r = Yt(o, a),
        r.subtreeFlags = o.subtreeFlags & 14680064),
        l !== null ? s = Yt(l, s) : (s = vn(s, i, n, null),
        s.flags |= 2),
        s.return = t,
        r.return = t,
        r.sibling = s,
        t.child = r,
        r = s,
        s = t.child,
        i = e.child.memoizedState,
        i = i === null ? il(n) : {
            baseLanes: i.baseLanes | n,
            cachePool: null,
            transitions: i.transitions
        },
        s.memoizedState = i,
        s.childLanes = e.childLanes & ~n,
        t.memoizedState = sl,
        r
    }
    return s = e.child,
    e = s.sibling,
    r = Yt(s, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function ia(e, t) {
    return t = Ns({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function _o(e, t, n, r) {
    return r !== null && Hl(r),
    nr(t, e.child, null, n),
    e = ia(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function mv(e, t, n, r, o, s, i) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = fi(Error(T(422))),
        _o(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (s = r.fallback,
        o = t.mode,
        r = Ns({
            mode: "visible",
            children: r.children
        }, o, 0, null),
        s = vn(s, o, i, null),
        s.flags |= 2,
        r.return = t,
        s.return = t,
        r.sibling = s,
        t.child = r,
        t.mode & 1 && nr(t, e.child, null, i),
        t.child.memoizedState = il(i),
        t.memoizedState = sl,
        s);
    if (!(t.mode & 1))
        return _o(e, t, i, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset,
        r)
            var l = r.dgst;
        return r = l,
        s = Error(T(419)),
        r = fi(s, r, void 0),
        _o(e, t, i, r)
    }
    if (l = (i & e.childLanes) !== 0,
    Ie || l) {
        if (r = ce,
        r !== null) {
            switch (i & -i) {
            case 4:
                o = 2;
                break;
            case 16:
                o = 8;
                break;
            case 64:
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
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                o = 32;
                break;
            case 536870912:
                o = 268435456;
                break;
            default:
                o = 0
            }
            o = o & (r.suspendedLanes | i) ? 0 : o,
            o !== 0 && o !== s.retryLane && (s.retryLane = o,
            kt(e, o),
            nt(r, e, o, -1))
        }
        return fa(),
        r = fi(Error(T(421))),
        _o(e, t, i, r)
    }
    return o.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = Nv.bind(null, e),
    o._reactRetry = t,
    null) : (e = s.treeContext,
    Fe = Ht(o.nextSibling),
    De = t,
    Y = !0,
    et = null,
    e !== null && (Be[We++] = wt,
    Be[We++] = xt,
    Be[We++] = gn,
    wt = e.id,
    xt = e.overflow,
    gn = t),
    t = ia(t, r.children),
    t.flags |= 4096,
    t)
}
function Iu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    Ji(e.return, t, n)
}
function pi(e, t, n, r, o) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (s.isBackwards = t,
    s.rendering = null,
    s.renderingStartTime = 0,
    s.last = r,
    s.tail = n,
    s.tailMode = o)
}
function df(e, t, n) {
    var r = t.pendingProps
      , o = r.revealOrder
      , s = r.tail;
    if (ke(e, t, r.children, n),
    r = X.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Iu(e, n, t);
                else if (e.tag === 19)
                    Iu(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (Q(X, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (o) {
        case "forwards":
            for (n = t.child,
            o = null; n !== null; )
                e = n.alternate,
                e !== null && as(e) === null && (o = n),
                n = n.sibling;
            n = o,
            n === null ? (o = t.child,
            t.child = null) : (o = n.sibling,
            n.sibling = null),
            pi(t, !1, o, n, s);
            break;
        case "backwards":
            for (n = null,
            o = t.child,
            t.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && as(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = n,
                n = o,
                o = e
            }
            pi(t, !0, n, null, s);
            break;
        case "together":
            pi(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function $o(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function _t(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    xn |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(T(153));
    if (t.child !== null) {
        for (e = t.child,
        n = Yt(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = Yt(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function vv(e, t, n) {
    switch (t.tag) {
    case 3:
        uf(t),
        tr();
        break;
    case 5:
        Fd(t);
        break;
    case 1:
        Oe(t.type) && ns(t);
        break;
    case 4:
        Zl(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , o = t.memoizedProps.value;
        Q(ss, r._currentValue),
        r._currentValue = o;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (Q(X, X.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? cf(e, t, n) : (Q(X, X.current & 1),
            e = _t(e, t, n),
            e !== null ? e.sibling : null);
        Q(X, X.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return df(e, t, n);
            t.flags |= 128
        }
        if (o = t.memoizedState,
        o !== null && (o.rendering = null,
        o.tail = null,
        o.lastEffect = null),
        Q(X, X.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        lf(e, t, n)
    }
    return _t(e, t, n)
}
var ff, ll, pf, hf;
ff = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
ll = function() {}
;
pf = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode,
        cn(ft.current);
        var s = null;
        switch (n) {
        case "input":
            o = Ri(e, o),
            r = Ri(e, r),
            s = [];
            break;
        case "select":
            o = J({}, o, {
                value: void 0
            }),
            r = J({}, r, {
                value: void 0
            }),
            s = [];
            break;
        case "textarea":
            o = Oi(e, o),
            r = Oi(e, r),
            s = [];
            break;
        default:
            typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = es)
        }
        Mi(n, r);
        var i;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var l = o[u];
                    for (i in l)
                        l.hasOwnProperty(i) && (n || (n = {}),
                        n[i] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Lr.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (l = o != null ? o[u] : void 0,
            r.hasOwnProperty(u) && a !== l && (a != null || l != null))
                if (u === "style")
                    if (l) {
                        for (i in l)
                            !l.hasOwnProperty(i) || a && a.hasOwnProperty(i) || (n || (n = {}),
                            n[i] = "");
                        for (i in a)
                            a.hasOwnProperty(i) && l[i] !== a[i] && (n || (n = {}),
                            n[i] = a[i])
                    } else
                        n || (s || (s = []),
                        s.push(u, n)),
                        n = a;
                else
                    u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                    l = l ? l.__html : void 0,
                    a != null && l !== a && (s = s || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (s = s || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Lr.hasOwnProperty(u) ? (a != null && u === "onScroll" && G("scroll", e),
                    s || l === a || (s = [])) : (s = s || []).push(u, a))
        }
        n && (s = s || []).push("style", n);
        var u = s;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
hf = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function yr(e, t) {
    if (!Y)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function ye(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags & 14680064,
            r |= o.flags & 14680064,
            o.return = e,
            o = o.sibling;
    else
        for (o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags,
            r |= o.flags,
            o.return = e,
            o = o.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function yv(e, t, n) {
    var r = t.pendingProps;
    switch (Ql(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return ye(t),
        null;
    case 1:
        return Oe(t.type) && ts(),
        ye(t),
        null;
    case 3:
        return r = t.stateNode,
        rr(),
        q(Ae),
        q(xe),
        ea(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Co(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        et !== null && (ml(et),
        et = null))),
        ll(e, t),
        ye(t),
        null;
    case 5:
        Jl(t);
        var o = cn(Kr.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            pf(e, t, n, r, o),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(T(166));
                return ye(t),
                null
            }
            if (e = cn(ft.current),
            Co(t)) {
                r = t.stateNode,
                n = t.type;
                var s = t.memoizedProps;
                switch (r[ct] = t,
                r[Qr] = s,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    G("cancel", r),
                    G("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    G("load", r);
                    break;
                case "video":
                case "audio":
                    for (o = 0; o < kr.length; o++)
                        G(kr[o], r);
                    break;
                case "source":
                    G("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    G("error", r),
                    G("load", r);
                    break;
                case "details":
                    G("toggle", r);
                    break;
                case "input":
                    ba(r, s),
                    G("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!s.multiple
                    },
                    G("invalid", r);
                    break;
                case "textarea":
                    Ua(r, s),
                    G("invalid", r)
                }
                Mi(n, s),
                o = null;
                for (var i in s)
                    if (s.hasOwnProperty(i)) {
                        var l = s[i];
                        i === "children" ? typeof l == "string" ? r.textContent !== l && (s.suppressHydrationWarning !== !0 && Eo(r.textContent, l, e),
                        o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (s.suppressHydrationWarning !== !0 && Eo(r.textContent, l, e),
                        o = ["children", "" + l]) : Lr.hasOwnProperty(i) && l != null && i === "onScroll" && G("scroll", r)
                    }
                switch (n) {
                case "input":
                    ho(r),
                    $a(r, s, !0);
                    break;
                case "textarea":
                    ho(r),
                    Va(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof s.onClick == "function" && (r.onclick = es)
                }
                r = o,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                i = o.nodeType === 9 ? o : o.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Uc(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                    is: r.is
                }) : (e = i.createElement(n),
                n === "select" && (i = e,
                r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n),
                e[ct] = t,
                e[Qr] = r,
                ff(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (i = Li(n, r),
                    n) {
                    case "dialog":
                        G("cancel", e),
                        G("close", e),
                        o = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        G("load", e),
                        o = r;
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < kr.length; o++)
                            G(kr[o], e);
                        o = r;
                        break;
                    case "source":
                        G("error", e),
                        o = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        G("error", e),
                        G("load", e),
                        o = r;
                        break;
                    case "details":
                        G("toggle", e),
                        o = r;
                        break;
                    case "input":
                        ba(e, r),
                        o = Ri(e, r),
                        G("invalid", e);
                        break;
                    case "option":
                        o = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        o = J({}, r, {
                            value: void 0
                        }),
                        G("invalid", e);
                        break;
                    case "textarea":
                        Ua(e, r),
                        o = Oi(e, r),
                        G("invalid", e);
                        break;
                    default:
                        o = r
                    }
                    Mi(n, o),
                    l = o;
                    for (s in l)
                        if (l.hasOwnProperty(s)) {
                            var a = l[s];
                            s === "style" ? Wc(e, a) : s === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                            a != null && Vc(e, a)) : s === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Fr(e, a) : typeof a == "number" && Fr(e, "" + a) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Lr.hasOwnProperty(s) ? a != null && s === "onScroll" && G("scroll", e) : a != null && Il(e, s, a, i))
                        }
                    switch (n) {
                    case "input":
                        ho(e),
                        $a(e, r, !1);
                        break;
                    case "textarea":
                        ho(e),
                        Va(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + Xt(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        s = r.value,
                        s != null ? Dn(e, !!r.multiple, s, !1) : r.defaultValue != null && Dn(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof o.onClick == "function" && (e.onclick = es)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return ye(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            hf(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(T(166));
            if (n = cn(Kr.current),
            cn(ft.current),
            Co(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[ct] = t,
                (s = r.nodeValue !== n) && (e = De,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        Eo(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Eo(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                s && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[ct] = t,
                t.stateNode = r
        }
        return ye(t),
        null;
    case 13:
        if (q(X),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (Y && Fe !== null && t.mode & 1 && !(t.flags & 128))
                Ad(),
                tr(),
                t.flags |= 98560,
                s = !1;
            else if (s = Co(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!s)
                        throw Error(T(318));
                    if (s = t.memoizedState,
                    s = s !== null ? s.dehydrated : null,
                    !s)
                        throw Error(T(317));
                    s[ct] = t
                } else
                    tr(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                ye(t),
                s = !1
            } else
                et !== null && (ml(et),
                et = null),
                s = !0;
            if (!s)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || X.current & 1 ? ae === 0 && (ae = 3) : fa())),
        t.updateQueue !== null && (t.flags |= 4),
        ye(t),
        null);
    case 4:
        return rr(),
        ll(e, t),
        e === null && Br(t.stateNode.containerInfo),
        ye(t),
        null;
    case 10:
        return ql(t.type._context),
        ye(t),
        null;
    case 17:
        return Oe(t.type) && ts(),
        ye(t),
        null;
    case 19:
        if (q(X),
        s = t.memoizedState,
        s === null)
            return ye(t),
            null;
        if (r = (t.flags & 128) !== 0,
        i = s.rendering,
        i === null)
            if (r)
                yr(s, !1);
            else {
                if (ae !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (i = as(e),
                        i !== null) {
                            for (t.flags |= 128,
                            yr(s, !1),
                            r = i.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                s = n,
                                e = r,
                                s.flags &= 14680066,
                                i = s.alternate,
                                i === null ? (s.childLanes = 0,
                                s.lanes = e,
                                s.child = null,
                                s.subtreeFlags = 0,
                                s.memoizedProps = null,
                                s.memoizedState = null,
                                s.updateQueue = null,
                                s.dependencies = null,
                                s.stateNode = null) : (s.childLanes = i.childLanes,
                                s.lanes = i.lanes,
                                s.child = i.child,
                                s.subtreeFlags = 0,
                                s.deletions = null,
                                s.memoizedProps = i.memoizedProps,
                                s.memoizedState = i.memoizedState,
                                s.updateQueue = i.updateQueue,
                                s.type = i.type,
                                e = i.dependencies,
                                s.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return Q(X, X.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                s.tail !== null && oe() > sr && (t.flags |= 128,
                r = !0,
                yr(s, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = as(i),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    yr(s, !0),
                    s.tail === null && s.tailMode === "hidden" && !i.alternate && !Y)
                        return ye(t),
                        null
                } else
                    2 * oe() - s.renderingStartTime > sr && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    yr(s, !1),
                    t.lanes = 4194304);
            s.isBackwards ? (i.sibling = t.child,
            t.child = i) : (n = s.last,
            n !== null ? n.sibling = i : t.child = i,
            s.last = i)
        }
        return s.tail !== null ? (t = s.tail,
        s.rendering = t,
        s.tail = t.sibling,
        s.renderingStartTime = oe(),
        t.sibling = null,
        n = X.current,
        Q(X, r ? n & 1 | 2 : n & 1),
        t) : (ye(t),
        null);
    case 22:
    case 23:
        return da(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Le & 1073741824 && (ye(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : ye(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(T(156, t.tag))
}
function gv(e, t) {
    switch (Ql(t),
    t.tag) {
    case 1:
        return Oe(t.type) && ts(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return rr(),
        q(Ae),
        q(xe),
        ea(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Jl(t),
        null;
    case 13:
        if (q(X),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(T(340));
            tr()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return q(X),
        null;
    case 4:
        return rr(),
        null;
    case 10:
        return ql(t.type._context),
        null;
    case 22:
    case 23:
        return da(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Po = !1
  , we = !1
  , wv = typeof WeakSet == "function" ? WeakSet : Set
  , I = null;
function Ln(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                ne(e, t, r)
            }
        else
            n.current = null
}
function al(e, t, n) {
    try {
        n()
    } catch (r) {
        ne(e, t, r)
    }
}
var Au = !1;
function xv(e, t) {
    if (Qi = Xo,
    e = gd(),
    Bl(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset
                      , s = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        s.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var i = 0
                      , l = -1
                      , a = -1
                      , u = 0
                      , d = 0
                      , p = e
                      , f = null;
                    t: for (; ; ) {
                        for (var x; p !== n || o !== 0 && p.nodeType !== 3 || (l = i + o),
                        p !== s || r !== 0 && p.nodeType !== 3 || (a = i + r),
                        p.nodeType === 3 && (i += p.nodeValue.length),
                        (x = p.firstChild) !== null; )
                            f = p,
                            p = x;
                        for (; ; ) {
                            if (p === e)
                                break t;
                            if (f === n && ++u === o && (l = i),
                            f === s && ++d === r && (a = i),
                            (x = p.nextSibling) !== null)
                                break;
                            p = f,
                            f = p.parentNode
                        }
                        p = x
                    }
                    n = l === -1 || a === -1 ? null : {
                        start: l,
                        end: a
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Hi = {
        focusedElem: e,
        selectionRange: n
    },
    Xo = !1,
    I = t; I !== null; )
        if (t = I,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            I = e;
        else
            for (; I !== null; ) {
                t = I;
                try {
                    var g = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (g !== null) {
                                var y = g.memoizedProps
                                  , E = g.memoizedState
                                  , h = t.stateNode
                                  , c = h.getSnapshotBeforeUpdate(t.elementType === t.type ? y : Ye(t.type, y), E);
                                h.__reactInternalSnapshotBeforeUpdate = c
                            }
                            break;
                        case 3:
                            var m = t.stateNode.containerInfo;
                            m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(T(163))
                        }
                } catch (S) {
                    ne(t, t.return, S)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    I = e;
                    break
                }
                I = t.return
            }
    return g = Au,
    Au = !1,
    g
}
function Ar(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var s = o.destroy;
                o.destroy = void 0,
                s !== void 0 && al(t, n, s)
            }
            o = o.next
        } while (o !== r)
    }
}
function Ps(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function ul(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function mf(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    mf(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[ct],
    delete t[Qr],
    delete t[qi],
    delete t[nv],
    delete t[rv])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function vf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Ou(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || vf(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function cl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = es));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (cl(e, t, n),
        e = e.sibling; e !== null; )
            cl(e, t, n),
            e = e.sibling
}
function dl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (dl(e, t, n),
        e = e.sibling; e !== null; )
            dl(e, t, n),
            e = e.sibling
}
var de = null
  , Je = !1;
function Tt(e, t, n) {
    for (n = n.child; n !== null; )
        yf(e, t, n),
        n = n.sibling
}
function yf(e, t, n) {
    if (dt && typeof dt.onCommitFiberUnmount == "function")
        try {
            dt.onCommitFiberUnmount(gs, n)
        } catch {}
    switch (n.tag) {
    case 5:
        we || Ln(n, t);
    case 6:
        var r = de
          , o = Je;
        de = null,
        Tt(e, t, n),
        de = r,
        Je = o,
        de !== null && (Je ? (e = de,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : de.removeChild(n.stateNode));
        break;
    case 18:
        de !== null && (Je ? (e = de,
        n = n.stateNode,
        e.nodeType === 8 ? ii(e.parentNode, n) : e.nodeType === 1 && ii(e, n),
        $r(e)) : ii(de, n.stateNode));
        break;
    case 4:
        r = de,
        o = Je,
        de = n.stateNode.containerInfo,
        Je = !0,
        Tt(e, t, n),
        de = r,
        Je = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!we && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            o = r = r.next;
            do {
                var s = o
                  , i = s.destroy;
                s = s.tag,
                i !== void 0 && (s & 2 || s & 4) && al(n, t, i),
                o = o.next
            } while (o !== r)
        }
        Tt(e, t, n);
        break;
    case 1:
        if (!we && (Ln(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (l) {
                ne(n, t, l)
            }
        Tt(e, t, n);
        break;
    case 21:
        Tt(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (we = (r = we) || n.memoizedState !== null,
        Tt(e, t, n),
        we = r) : Tt(e, t, n);
        break;
    default:
        Tt(e, t, n)
    }
}
function ju(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new wv),
        t.forEach(function(r) {
            var o = Rv.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(o, o))
        })
    }
}
function qe(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var s = e
                  , i = t
                  , l = i;
                e: for (; l !== null; ) {
                    switch (l.tag) {
                    case 5:
                        de = l.stateNode,
                        Je = !1;
                        break e;
                    case 3:
                        de = l.stateNode.containerInfo,
                        Je = !0;
                        break e;
                    case 4:
                        de = l.stateNode.containerInfo,
                        Je = !0;
                        break e
                    }
                    l = l.return
                }
                if (de === null)
                    throw Error(T(160));
                yf(s, i, o),
                de = null,
                Je = !1;
                var a = o.alternate;
                a !== null && (a.return = null),
                o.return = null
            } catch (u) {
                ne(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            gf(t, e),
            t = t.sibling
}
function gf(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (qe(t, e),
        st(e),
        r & 4) {
            try {
                Ar(3, e, e.return),
                Ps(3, e)
            } catch (y) {
                ne(e, e.return, y)
            }
            try {
                Ar(5, e, e.return)
            } catch (y) {
                ne(e, e.return, y)
            }
        }
        break;
    case 1:
        qe(t, e),
        st(e),
        r & 512 && n !== null && Ln(n, n.return);
        break;
    case 5:
        if (qe(t, e),
        st(e),
        r & 512 && n !== null && Ln(n, n.return),
        e.flags & 32) {
            var o = e.stateNode;
            try {
                Fr(o, "")
            } catch (y) {
                ne(e, e.return, y)
            }
        }
        if (r & 4 && (o = e.stateNode,
        o != null)) {
            var s = e.memoizedProps
              , i = n !== null ? n.memoizedProps : s
              , l = e.type
              , a = e.updateQueue;
            if (e.updateQueue = null,
            a !== null)
                try {
                    l === "input" && s.type === "radio" && s.name != null && bc(o, s),
                    Li(l, i);
                    var u = Li(l, s);
                    for (i = 0; i < a.length; i += 2) {
                        var d = a[i]
                          , p = a[i + 1];
                        d === "style" ? Wc(o, p) : d === "dangerouslySetInnerHTML" ? Vc(o, p) : d === "children" ? Fr(o, p) : Il(o, d, p, u)
                    }
                    switch (l) {
                    case "input":
                        Ii(o, s);
                        break;
                    case "textarea":
                        $c(o, s);
                        break;
                    case "select":
                        var f = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!s.multiple;
                        var x = s.value;
                        x != null ? Dn(o, !!s.multiple, x, !1) : f !== !!s.multiple && (s.defaultValue != null ? Dn(o, !!s.multiple, s.defaultValue, !0) : Dn(o, !!s.multiple, s.multiple ? [] : "", !1))
                    }
                    o[Qr] = s
                } catch (y) {
                    ne(e, e.return, y)
                }
        }
        break;
    case 6:
        if (qe(t, e),
        st(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(T(162));
            o = e.stateNode,
            s = e.memoizedProps;
            try {
                o.nodeValue = s
            } catch (y) {
                ne(e, e.return, y)
            }
        }
        break;
    case 3:
        if (qe(t, e),
        st(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                $r(t.containerInfo)
            } catch (y) {
                ne(e, e.return, y)
            }
        break;
    case 4:
        qe(t, e),
        st(e);
        break;
    case 13:
        qe(t, e),
        st(e),
        o = e.child,
        o.flags & 8192 && (s = o.memoizedState !== null,
        o.stateNode.isHidden = s,
        !s || o.alternate !== null && o.alternate.memoizedState !== null || (ua = oe())),
        r & 4 && ju(e);
        break;
    case 22:
        if (d = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (we = (u = we) || d,
        qe(t, e),
        we = u) : qe(t, e),
        st(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !d && e.mode & 1)
                for (I = e,
                d = e.child; d !== null; ) {
                    for (p = I = d; I !== null; ) {
                        switch (f = I,
                        x = f.child,
                        f.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Ar(4, f, f.return);
                            break;
                        case 1:
                            Ln(f, f.return);
                            var g = f.stateNode;
                            if (typeof g.componentWillUnmount == "function") {
                                r = f,
                                n = f.return;
                                try {
                                    t = r,
                                    g.props = t.memoizedProps,
                                    g.state = t.memoizedState,
                                    g.componentWillUnmount()
                                } catch (y) {
                                    ne(r, n, y)
                                }
                            }
                            break;
                        case 5:
                            Ln(f, f.return);
                            break;
                        case 22:
                            if (f.memoizedState !== null) {
                                Lu(p);
                                continue
                            }
                        }
                        x !== null ? (x.return = f,
                        I = x) : Lu(p)
                    }
                    d = d.sibling
                }
            e: for (d = null,
            p = e; ; ) {
                if (p.tag === 5) {
                    if (d === null) {
                        d = p;
                        try {
                            o = p.stateNode,
                            u ? (s = o.style,
                            typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (l = p.stateNode,
                            a = p.memoizedProps.style,
                            i = a != null && a.hasOwnProperty("display") ? a.display : null,
                            l.style.display = Bc("display", i))
                        } catch (y) {
                            ne(e, e.return, y)
                        }
                    }
                } else if (p.tag === 6) {
                    if (d === null)
                        try {
                            p.stateNode.nodeValue = u ? "" : p.memoizedProps
                        } catch (y) {
                            ne(e, e.return, y)
                        }
                } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
                    p.child.return = p,
                    p = p.child;
                    continue
                }
                if (p === e)
                    break e;
                for (; p.sibling === null; ) {
                    if (p.return === null || p.return === e)
                        break e;
                    d === p && (d = null),
                    p = p.return
                }
                d === p && (d = null),
                p.sibling.return = p.return,
                p = p.sibling
            }
        }
        break;
    case 19:
        qe(t, e),
        st(e),
        r & 4 && ju(e);
        break;
    case 21:
        break;
    default:
        qe(t, e),
        st(e)
    }
}
function st(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (vf(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(T(160))
            }
            switch (r.tag) {
            case 5:
                var o = r.stateNode;
                r.flags & 32 && (Fr(o, ""),
                r.flags &= -33);
                var s = Ou(e);
                dl(e, s, o);
                break;
            case 3:
            case 4:
                var i = r.stateNode.containerInfo
                  , l = Ou(e);
                cl(e, l, i);
                break;
            default:
                throw Error(T(161))
            }
        } catch (a) {
            ne(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function Sv(e, t, n) {
    I = e,
    wf(e)
}
function wf(e, t, n) {
    for (var r = (e.mode & 1) !== 0; I !== null; ) {
        var o = I
          , s = o.child;
        if (o.tag === 22 && r) {
            var i = o.memoizedState !== null || Po;
            if (!i) {
                var l = o.alternate
                  , a = l !== null && l.memoizedState !== null || we;
                l = Po;
                var u = we;
                if (Po = i,
                (we = a) && !u)
                    for (I = o; I !== null; )
                        i = I,
                        a = i.child,
                        i.tag === 22 && i.memoizedState !== null ? Fu(o) : a !== null ? (a.return = i,
                        I = a) : Fu(o);
                for (; s !== null; )
                    I = s,
                    wf(s),
                    s = s.sibling;
                I = o,
                Po = l,
                we = u
            }
            Mu(e)
        } else
            o.subtreeFlags & 8772 && s !== null ? (s.return = o,
            I = s) : Mu(e)
    }
}
function Mu(e) {
    for (; I !== null; ) {
        var t = I;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        we || Ps(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !we)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : Ye(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var s = t.updateQueue;
                        s !== null && gu(t, s, r);
                        break;
                    case 3:
                        var i = t.updateQueue;
                        if (i !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            gu(t, i, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = l;
                            var a = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                a.autoFocus && n.focus();
                                break;
                            case "img":
                                a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var d = u.memoizedState;
                                if (d !== null) {
                                    var p = d.dehydrated;
                                    p !== null && $r(p)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(T(163))
                    }
                we || t.flags & 512 && ul(t)
            } catch (f) {
                ne(t, t.return, f)
            }
        }
        if (t === e) {
            I = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            I = n;
            break
        }
        I = t.return
    }
}
function Lu(e) {
    for (; I !== null; ) {
        var t = I;
        if (t === e) {
            I = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            I = n;
            break
        }
        I = t.return
    }
}
function Fu(e) {
    for (; I !== null; ) {
        var t = I;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Ps(4, t)
                } catch (a) {
                    ne(t, n, a)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        r.componentDidMount()
                    } catch (a) {
                        ne(t, o, a)
                    }
                }
                var s = t.return;
                try {
                    ul(t)
                } catch (a) {
                    ne(t, s, a)
                }
                break;
            case 5:
                var i = t.return;
                try {
                    ul(t)
                } catch (a) {
                    ne(t, i, a)
                }
            }
        } catch (a) {
            ne(t, t.return, a)
        }
        if (t === e) {
            I = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return,
            I = l;
            break
        }
        I = t.return
    }
}
var Ev = Math.ceil
  , ds = Pt.ReactCurrentDispatcher
  , la = Pt.ReactCurrentOwner
  , He = Pt.ReactCurrentBatchConfig
  , U = 0
  , ce = null
  , se = null
  , fe = 0
  , Le = 0
  , Fn = tn(0)
  , ae = 0
  , Xr = null
  , xn = 0
  , Ts = 0
  , aa = 0
  , Or = null
  , Re = null
  , ua = 0
  , sr = 1 / 0
  , yt = null
  , fs = !1
  , fl = null
  , Gt = null
  , To = !1
  , Vt = null
  , ps = 0
  , jr = 0
  , pl = null
  , Uo = -1
  , Vo = 0;
function Pe() {
    return U & 6 ? oe() : Uo !== -1 ? Uo : Uo = oe()
}
function qt(e) {
    return e.mode & 1 ? U & 2 && fe !== 0 ? fe & -fe : sv.transition !== null ? (Vo === 0 && (Vo = nd()),
    Vo) : (e = B,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : ud(e.type)),
    e) : 1
}
function nt(e, t, n, r) {
    if (50 < jr)
        throw jr = 0,
        pl = null,
        Error(T(185));
    so(e, n, r),
    (!(U & 2) || e !== ce) && (e === ce && (!(U & 2) && (Ts |= n),
    ae === 4 && Lt(e, fe)),
    je(e, r),
    n === 1 && U === 0 && !(t.mode & 1) && (sr = oe() + 500,
    Cs && nn()))
}
function je(e, t) {
    var n = e.callbackNode;
    sm(e, t);
    var r = Yo(e, e === ce ? fe : 0);
    if (r === 0)
        n !== null && Qa(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && Qa(n),
        t === 1)
            e.tag === 0 ? ov(Du.bind(null, e)) : Nd(Du.bind(null, e)),
            ev(function() {
                !(U & 6) && nn()
            }),
            n = null;
        else {
            switch (rd(r)) {
            case 1:
                n = Ll;
                break;
            case 4:
                n = ed;
                break;
            case 16:
                n = qo;
                break;
            case 536870912:
                n = td;
                break;
            default:
                n = qo
            }
            n = Tf(n, xf.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function xf(e, t) {
    if (Uo = -1,
    Vo = 0,
    U & 6)
        throw Error(T(327));
    var n = e.callbackNode;
    if (Vn() && e.callbackNode !== n)
        return null;
    var r = Yo(e, e === ce ? fe : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = hs(e, r);
    else {
        t = r;
        var o = U;
        U |= 2;
        var s = Ef();
        (ce !== e || fe !== t) && (yt = null,
        sr = oe() + 500,
        mn(e, t));
        do
            try {
                _v();
                break
            } catch (l) {
                Sf(e, l)
            }
        while (!0);
        Gl(),
        ds.current = s,
        U = o,
        se !== null ? t = 0 : (ce = null,
        fe = 0,
        t = ae)
    }
    if (t !== 0) {
        if (t === 2 && (o = $i(e),
        o !== 0 && (r = o,
        t = hl(e, o))),
        t === 1)
            throw n = Xr,
            mn(e, 0),
            Lt(e, r),
            je(e, oe()),
            n;
        if (t === 6)
            Lt(e, r);
        else {
            if (o = e.current.alternate,
            !(r & 30) && !Cv(o) && (t = hs(e, r),
            t === 2 && (s = $i(e),
            s !== 0 && (r = s,
            t = hl(e, s))),
            t === 1))
                throw n = Xr,
                mn(e, 0),
                Lt(e, r),
                je(e, oe()),
                n;
            switch (e.finishedWork = o,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(T(345));
            case 2:
                ln(e, Re, yt);
                break;
            case 3:
                if (Lt(e, r),
                (r & 130023424) === r && (t = ua + 500 - oe(),
                10 < t)) {
                    if (Yo(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes,
                    (o & r) !== r) {
                        Pe(),
                        e.pingedLanes |= e.suspendedLanes & o;
                        break
                    }
                    e.timeoutHandle = Gi(ln.bind(null, e, Re, yt), t);
                    break
                }
                ln(e, Re, yt);
                break;
            case 4:
                if (Lt(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                o = -1; 0 < r; ) {
                    var i = 31 - tt(r);
                    s = 1 << i,
                    i = t[i],
                    i > o && (o = i),
                    r &= ~s
                }
                if (r = o,
                r = oe() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Ev(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = Gi(ln.bind(null, e, Re, yt), r);
                    break
                }
                ln(e, Re, yt);
                break;
            case 5:
                ln(e, Re, yt);
                break;
            default:
                throw Error(T(329))
            }
        }
    }
    return je(e, oe()),
    e.callbackNode === n ? xf.bind(null, e) : null
}
function hl(e, t) {
    var n = Or;
    return e.current.memoizedState.isDehydrated && (mn(e, t).flags |= 256),
    e = hs(e, t),
    e !== 2 && (t = Re,
    Re = n,
    t !== null && ml(t)),
    e
}
function ml(e) {
    Re === null ? Re = e : Re.push.apply(Re, e)
}
function Cv(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r]
                      , s = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!rt(s(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function Lt(e, t) {
    for (t &= ~aa,
    t &= ~Ts,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - tt(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Du(e) {
    if (U & 6)
        throw Error(T(327));
    Vn();
    var t = Yo(e, 0);
    if (!(t & 1))
        return je(e, oe()),
        null;
    var n = hs(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = $i(e);
        r !== 0 && (t = r,
        n = hl(e, r))
    }
    if (n === 1)
        throw n = Xr,
        mn(e, 0),
        Lt(e, t),
        je(e, oe()),
        n;
    if (n === 6)
        throw Error(T(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    ln(e, Re, yt),
    je(e, oe()),
    null
}
function ca(e, t) {
    var n = U;
    U |= 1;
    try {
        return e(t)
    } finally {
        U = n,
        U === 0 && (sr = oe() + 500,
        Cs && nn())
    }
}
function Sn(e) {
    Vt !== null && Vt.tag === 0 && !(U & 6) && Vn();
    var t = U;
    U |= 1;
    var n = He.transition
      , r = B;
    try {
        if (He.transition = null,
        B = 1,
        e)
            return e()
    } finally {
        B = r,
        He.transition = n,
        U = t,
        !(U & 6) && nn()
    }
}
function da() {
    Le = Fn.current,
    q(Fn)
}
function mn(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    Jm(n)),
    se !== null)
        for (n = se.return; n !== null; ) {
            var r = n;
            switch (Ql(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && ts();
                break;
            case 3:
                rr(),
                q(Ae),
                q(xe),
                ea();
                break;
            case 5:
                Jl(r);
                break;
            case 4:
                rr();
                break;
            case 13:
                q(X);
                break;
            case 19:
                q(X);
                break;
            case 10:
                ql(r.type._context);
                break;
            case 22:
            case 23:
                da()
            }
            n = n.return
        }
    if (ce = e,
    se = e = Yt(e.current, null),
    fe = Le = t,
    ae = 0,
    Xr = null,
    aa = Ts = xn = 0,
    Re = Or = null,
    un !== null) {
        for (t = 0; t < un.length; t++)
            if (n = un[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var o = r.next
                  , s = n.pending;
                if (s !== null) {
                    var i = s.next;
                    s.next = o,
                    r.next = i
                }
                n.pending = r
            }
        un = null
    }
    return e
}
function Sf(e, t) {
    do {
        var n = se;
        try {
            if (Gl(),
            zo.current = cs,
            us) {
                for (var r = Z.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null),
                    r = r.next
                }
                us = !1
            }
            if (wn = 0,
            ue = le = Z = null,
            Ir = !1,
            Gr = 0,
            la.current = null,
            n === null || n.return === null) {
                ae = 1,
                Xr = t,
                se = null;
                break
            }
            e: {
                var s = e
                  , i = n.return
                  , l = n
                  , a = t;
                if (t = fe,
                l.flags |= 32768,
                a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a
                      , d = l
                      , p = d.tag;
                    if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
                        var f = d.alternate;
                        f ? (d.updateQueue = f.updateQueue,
                        d.memoizedState = f.memoizedState,
                        d.lanes = f.lanes) : (d.updateQueue = null,
                        d.memoizedState = null)
                    }
                    var x = ku(i);
                    if (x !== null) {
                        x.flags &= -257,
                        _u(x, i, l, s, t),
                        x.mode & 1 && Cu(s, u, t),
                        t = x,
                        a = u;
                        var g = t.updateQueue;
                        if (g === null) {
                            var y = new Set;
                            y.add(a),
                            t.updateQueue = y
                        } else
                            g.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Cu(s, u, t),
                            fa();
                            break e
                        }
                        a = Error(T(426))
                    }
                } else if (Y && l.mode & 1) {
                    var E = ku(i);
                    if (E !== null) {
                        !(E.flags & 65536) && (E.flags |= 256),
                        _u(E, i, l, s, t),
                        Hl(or(a, l));
                        break e
                    }
                }
                s = a = or(a, l),
                ae !== 4 && (ae = 2),
                Or === null ? Or = [s] : Or.push(s),
                s = i;
                do {
                    switch (s.tag) {
                    case 3:
                        s.flags |= 65536,
                        t &= -t,
                        s.lanes |= t;
                        var h = rf(s, a, t);
                        yu(s, h);
                        break e;
                    case 1:
                        l = a;
                        var c = s.type
                          , m = s.stateNode;
                        if (!(s.flags & 128) && (typeof c.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Gt === null || !Gt.has(m)))) {
                            s.flags |= 65536,
                            t &= -t,
                            s.lanes |= t;
                            var S = of(s, l, t);
                            yu(s, S);
                            break e
                        }
                    }
                    s = s.return
                } while (s !== null)
            }
            kf(n)
        } catch (k) {
            t = k,
            se === n && n !== null && (se = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Ef() {
    var e = ds.current;
    return ds.current = cs,
    e === null ? cs : e
}
function fa() {
    (ae === 0 || ae === 3 || ae === 2) && (ae = 4),
    ce === null || !(xn & 268435455) && !(Ts & 268435455) || Lt(ce, fe)
}
function hs(e, t) {
    var n = U;
    U |= 2;
    var r = Ef();
    (ce !== e || fe !== t) && (yt = null,
    mn(e, t));
    do
        try {
            kv();
            break
        } catch (o) {
            Sf(e, o)
        }
    while (!0);
    if (Gl(),
    U = n,
    ds.current = r,
    se !== null)
        throw Error(T(261));
    return ce = null,
    fe = 0,
    ae
}
function kv() {
    for (; se !== null; )
        Cf(se)
}
function _v() {
    for (; se !== null && !Yh(); )
        Cf(se)
}
function Cf(e) {
    var t = Pf(e.alternate, e, Le);
    e.memoizedProps = e.pendingProps,
    t === null ? kf(e) : se = t,
    la.current = null
}
function kf(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = gv(n, t),
            n !== null) {
                n.flags &= 32767,
                se = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                ae = 6,
                se = null;
                return
            }
        } else if (n = yv(n, t, Le),
        n !== null) {
            se = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            se = t;
            return
        }
        se = t = e
    } while (t !== null);
    ae === 0 && (ae = 5)
}
function ln(e, t, n) {
    var r = B
      , o = He.transition;
    try {
        He.transition = null,
        B = 1,
        Pv(e, t, n, r)
    } finally {
        He.transition = o,
        B = r
    }
    return null
}
function Pv(e, t, n, r) {
    do
        Vn();
    while (Vt !== null);
    if (U & 6)
        throw Error(T(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(T(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (im(e, s),
    e === ce && (se = ce = null,
    fe = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || To || (To = !0,
    Tf(qo, function() {
        return Vn(),
        null
    })),
    s = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || s) {
        s = He.transition,
        He.transition = null;
        var i = B;
        B = 1;
        var l = U;
        U |= 4,
        la.current = null,
        xv(e, n),
        gf(n, e),
        Hm(Hi),
        Xo = !!Qi,
        Hi = Qi = null,
        e.current = n,
        Sv(n),
        Xh(),
        U = l,
        B = i,
        He.transition = s
    } else
        e.current = n;
    if (To && (To = !1,
    Vt = e,
    ps = o),
    s = e.pendingLanes,
    s === 0 && (Gt = null),
    em(n.stateNode),
    je(e, oe()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            o = t[n],
            r(o.value, {
                componentStack: o.stack,
                digest: o.digest
            });
    if (fs)
        throw fs = !1,
        e = fl,
        fl = null,
        e;
    return ps & 1 && e.tag !== 0 && Vn(),
    s = e.pendingLanes,
    s & 1 ? e === pl ? jr++ : (jr = 0,
    pl = e) : jr = 0,
    nn(),
    null
}
function Vn() {
    if (Vt !== null) {
        var e = rd(ps)
          , t = He.transition
          , n = B;
        try {
            if (He.transition = null,
            B = 16 > e ? 16 : e,
            Vt === null)
                var r = !1;
            else {
                if (e = Vt,
                Vt = null,
                ps = 0,
                U & 6)
                    throw Error(T(331));
                var o = U;
                for (U |= 4,
                I = e.current; I !== null; ) {
                    var s = I
                      , i = s.child;
                    if (I.flags & 16) {
                        var l = s.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var u = l[a];
                                for (I = u; I !== null; ) {
                                    var d = I;
                                    switch (d.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ar(8, d, s)
                                    }
                                    var p = d.child;
                                    if (p !== null)
                                        p.return = d,
                                        I = p;
                                    else
                                        for (; I !== null; ) {
                                            d = I;
                                            var f = d.sibling
                                              , x = d.return;
                                            if (mf(d),
                                            d === u) {
                                                I = null;
                                                break
                                            }
                                            if (f !== null) {
                                                f.return = x,
                                                I = f;
                                                break
                                            }
                                            I = x
                                        }
                                }
                            }
                            var g = s.alternate;
                            if (g !== null) {
                                var y = g.child;
                                if (y !== null) {
                                    g.child = null;
                                    do {
                                        var E = y.sibling;
                                        y.sibling = null,
                                        y = E
                                    } while (y !== null)
                                }
                            }
                            I = s
                        }
                    }
                    if (s.subtreeFlags & 2064 && i !== null)
                        i.return = s,
                        I = i;
                    else
                        e: for (; I !== null; ) {
                            if (s = I,
                            s.flags & 2048)
                                switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Ar(9, s, s.return)
                                }
                            var h = s.sibling;
                            if (h !== null) {
                                h.return = s.return,
                                I = h;
                                break e
                            }
                            I = s.return
                        }
                }
                var c = e.current;
                for (I = c; I !== null; ) {
                    i = I;
                    var m = i.child;
                    if (i.subtreeFlags & 2064 && m !== null)
                        m.return = i,
                        I = m;
                    else
                        e: for (i = c; I !== null; ) {
                            if (l = I,
                            l.flags & 2048)
                                try {
                                    switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ps(9, l)
                                    }
                                } catch (k) {
                                    ne(l, l.return, k)
                                }
                            if (l === i) {
                                I = null;
                                break e
                            }
                            var S = l.sibling;
                            if (S !== null) {
                                S.return = l.return,
                                I = S;
                                break e
                            }
                            I = l.return
                        }
                }
                if (U = o,
                nn(),
                dt && typeof dt.onPostCommitFiberRoot == "function")
                    try {
                        dt.onPostCommitFiberRoot(gs, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            B = n,
            He.transition = t
        }
    }
    return !1
}
function zu(e, t, n) {
    t = or(n, t),
    t = rf(e, t, 1),
    e = Kt(e, t, 1),
    t = Pe(),
    e !== null && (so(e, 1, t),
    je(e, t))
}
function ne(e, t, n) {
    if (e.tag === 3)
        zu(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                zu(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Gt === null || !Gt.has(r))) {
                    e = or(n, e),
                    e = of(t, e, 1),
                    t = Kt(t, e, 1),
                    e = Pe(),
                    t !== null && (so(t, 1, e),
                    je(t, e));
                    break
                }
            }
            t = t.return
        }
}
function Tv(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = Pe(),
    e.pingedLanes |= e.suspendedLanes & n,
    ce === e && (fe & n) === n && (ae === 4 || ae === 3 && (fe & 130023424) === fe && 500 > oe() - ua ? mn(e, 0) : aa |= n),
    je(e, t)
}
function _f(e, t) {
    t === 0 && (e.mode & 1 ? (t = yo,
    yo <<= 1,
    !(yo & 130023424) && (yo = 4194304)) : t = 1);
    var n = Pe();
    e = kt(e, t),
    e !== null && (so(e, t, n),
    je(e, n))
}
function Nv(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    _f(e, n)
}
function Rv(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(T(314))
    }
    r !== null && r.delete(t),
    _f(e, n)
}
var Pf;
Pf = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ae.current)
            Ie = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Ie = !1,
                vv(e, t, n);
            Ie = !!(e.flags & 131072)
        }
    else
        Ie = !1,
        Y && t.flags & 1048576 && Rd(t, os, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        $o(e, t),
        e = t.pendingProps;
        var o = er(t, xe.current);
        Un(t, n),
        o = na(null, t, r, e, o, n);
        var s = ra();
        return t.flags |= 1,
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Oe(r) ? (s = !0,
        ns(t)) : s = !1,
        t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
        Xl(t),
        o.updater = _s,
        t.stateNode = o,
        o._reactInternals = t,
        tl(t, r, e, n),
        t = ol(null, t, r, !0, s, n)) : (t.tag = 0,
        Y && s && Wl(t),
        ke(null, t, o, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch ($o(e, t),
            e = t.pendingProps,
            o = r._init,
            r = o(r._payload),
            t.type = r,
            o = t.tag = Av(r),
            e = Ye(r, e),
            o) {
            case 0:
                t = rl(null, t, r, e, n);
                break e;
            case 1:
                t = Nu(null, t, r, e, n);
                break e;
            case 11:
                t = Pu(null, t, r, e, n);
                break e;
            case 14:
                t = Tu(null, t, r, Ye(r.type, e), n);
                break e
            }
            throw Error(T(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : Ye(r, o),
        rl(e, t, r, o, n);
    case 1:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : Ye(r, o),
        Nu(e, t, r, o, n);
    case 3:
        e: {
            if (uf(t),
            e === null)
                throw Error(T(387));
            r = t.pendingProps,
            s = t.memoizedState,
            o = s.element,
            Ld(e, t),
            ls(t, r, null, n);
            var i = t.memoizedState;
            if (r = i.element,
            s.isDehydrated)
                if (s = {
                    element: r,
                    isDehydrated: !1,
                    cache: i.cache,
                    pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                    transitions: i.transitions
                },
                t.updateQueue.baseState = s,
                t.memoizedState = s,
                t.flags & 256) {
                    o = or(Error(T(423)), t),
                    t = Ru(e, t, r, n, o);
                    break e
                } else if (r !== o) {
                    o = or(Error(T(424)), t),
                    t = Ru(e, t, r, n, o);
                    break e
                } else
                    for (Fe = Ht(t.stateNode.containerInfo.firstChild),
                    De = t,
                    Y = !0,
                    et = null,
                    n = jd(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (tr(),
                r === o) {
                    t = _t(e, t, n);
                    break e
                }
                ke(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Fd(t),
        e === null && Zi(t),
        r = t.type,
        o = t.pendingProps,
        s = e !== null ? e.memoizedProps : null,
        i = o.children,
        Ki(r, o) ? i = null : s !== null && Ki(r, s) && (t.flags |= 32),
        af(e, t),
        ke(e, t, i, n),
        t.child;
    case 6:
        return e === null && Zi(t),
        null;
    case 13:
        return cf(e, t, n);
    case 4:
        return Zl(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = nr(t, null, r, n) : ke(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : Ye(r, o),
        Pu(e, t, r, o, n);
    case 7:
        return ke(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return ke(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return ke(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            o = t.pendingProps,
            s = t.memoizedProps,
            i = o.value,
            Q(ss, r._currentValue),
            r._currentValue = i,
            s !== null)
                if (rt(s.value, i)) {
                    if (s.children === o.children && !Ae.current) {
                        t = _t(e, t, n);
                        break e
                    }
                } else
                    for (s = t.child,
                    s !== null && (s.return = t); s !== null; ) {
                        var l = s.dependencies;
                        if (l !== null) {
                            i = s.child;
                            for (var a = l.firstContext; a !== null; ) {
                                if (a.context === r) {
                                    if (s.tag === 1) {
                                        a = St(-1, n & -n),
                                        a.tag = 2;
                                        var u = s.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var d = u.pending;
                                            d === null ? a.next = a : (a.next = d.next,
                                            d.next = a),
                                            u.pending = a
                                        }
                                    }
                                    s.lanes |= n,
                                    a = s.alternate,
                                    a !== null && (a.lanes |= n),
                                    Ji(s.return, n, t),
                                    l.lanes |= n;
                                    break
                                }
                                a = a.next
                            }
                        } else if (s.tag === 10)
                            i = s.type === t.type ? null : s.child;
                        else if (s.tag === 18) {
                            if (i = s.return,
                            i === null)
                                throw Error(T(341));
                            i.lanes |= n,
                            l = i.alternate,
                            l !== null && (l.lanes |= n),
                            Ji(i, n, t),
                            i = s.sibling
                        } else
                            i = s.child;
                        if (i !== null)
                            i.return = s;
                        else
                            for (i = s; i !== null; ) {
                                if (i === t) {
                                    i = null;
                                    break
                                }
                                if (s = i.sibling,
                                s !== null) {
                                    s.return = i.return,
                                    i = s;
                                    break
                                }
                                i = i.return
                            }
                        s = i
                    }
            ke(e, t, o.children, n),
            t = t.child
        }
        return t;
    case 9:
        return o = t.type,
        r = t.pendingProps.children,
        Un(t, n),
        o = Ke(o),
        r = r(o),
        t.flags |= 1,
        ke(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        o = Ye(r, t.pendingProps),
        o = Ye(r.type, o),
        Tu(e, t, r, o, n);
    case 15:
        return sf(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : Ye(r, o),
        $o(e, t),
        t.tag = 1,
        Oe(r) ? (e = !0,
        ns(t)) : e = !1,
        Un(t, n),
        nf(t, r, o),
        tl(t, r, o, n),
        ol(null, t, r, !0, e, n);
    case 19:
        return df(e, t, n);
    case 22:
        return lf(e, t, n)
    }
    throw Error(T(156, t.tag))
}
;
function Tf(e, t) {
    return Jc(e, t)
}
function Iv(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Qe(e, t, n, r) {
    return new Iv(e,t,n,r)
}
function pa(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function Av(e) {
    if (typeof e == "function")
        return pa(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Ol)
            return 11;
        if (e === jl)
            return 14
    }
    return 2
}
function Yt(e, t) {
    var n = e.alternate;
    return n === null ? (n = Qe(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Bo(e, t, n, r, o, s) {
    var i = 2;
    if (r = e,
    typeof e == "function")
        pa(e) && (i = 1);
    else if (typeof e == "string")
        i = 5;
    else
        e: switch (e) {
        case Pn:
            return vn(n.children, o, s, t);
        case Al:
            i = 8,
            o |= 8;
            break;
        case _i:
            return e = Qe(12, n, t, o | 2),
            e.elementType = _i,
            e.lanes = s,
            e;
        case Pi:
            return e = Qe(13, n, t, o),
            e.elementType = Pi,
            e.lanes = s,
            e;
        case Ti:
            return e = Qe(19, n, t, o),
            e.elementType = Ti,
            e.lanes = s,
            e;
        case Fc:
            return Ns(n, o, s, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Mc:
                    i = 10;
                    break e;
                case Lc:
                    i = 9;
                    break e;
                case Ol:
                    i = 11;
                    break e;
                case jl:
                    i = 14;
                    break e;
                case Ot:
                    i = 16,
                    r = null;
                    break e
                }
            throw Error(T(130, e == null ? e : typeof e, ""))
        }
    return t = Qe(i, n, t, o),
    t.elementType = e,
    t.type = r,
    t.lanes = s,
    t
}
function vn(e, t, n, r) {
    return e = Qe(7, e, r, t),
    e.lanes = n,
    e
}
function Ns(e, t, n, r) {
    return e = Qe(22, e, r, t),
    e.elementType = Fc,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function hi(e, t, n) {
    return e = Qe(6, e, null, t),
    e.lanes = n,
    e
}
function mi(e, t, n) {
    return t = Qe(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function Ov(e, t, n, r, o) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = qs(0),
    this.expirationTimes = qs(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = qs(0),
    this.identifierPrefix = r,
    this.onRecoverableError = o,
    this.mutableSourceEagerHydrationData = null
}
function ha(e, t, n, r, o, s, i, l, a) {
    return e = new Ov(e,t,n,l,a),
    t === 1 ? (t = 1,
    s === !0 && (t |= 8)) : t = 0,
    s = Qe(3, null, null, t),
    e.current = s,
    s.stateNode = e,
    s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Xl(s),
    e
}
function jv(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: _n,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Nf(e) {
    if (!e)
        return Zt;
    e = e._reactInternals;
    e: {
        if (Cn(e) !== e || e.tag !== 1)
            throw Error(T(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Oe(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(T(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Oe(n))
            return Td(e, n, t)
    }
    return t
}
function Rf(e, t, n, r, o, s, i, l, a) {
    return e = ha(n, r, !0, e, o, s, i, l, a),
    e.context = Nf(null),
    n = e.current,
    r = Pe(),
    o = qt(n),
    s = St(r, o),
    s.callback = t ?? null,
    Kt(n, s, o),
    e.current.lanes = o,
    so(e, o, r),
    je(e, r),
    e
}
function Rs(e, t, n, r) {
    var o = t.current
      , s = Pe()
      , i = qt(o);
    return n = Nf(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = St(s, i),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = Kt(o, t, i),
    e !== null && (nt(e, o, i, s),
    Do(e, o, i)),
    i
}
function ms(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function bu(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function ma(e, t) {
    bu(e, t),
    (e = e.alternate) && bu(e, t)
}
function Mv() {
    return null
}
var If = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function va(e) {
    this._internalRoot = e
}
Is.prototype.render = va.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(T(409));
    Rs(e, t, null, null)
}
;
Is.prototype.unmount = va.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Sn(function() {
            Rs(null, e, null, null)
        }),
        t[Ct] = null
    }
}
;
function Is(e) {
    this._internalRoot = e
}
Is.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = id();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Mt.length && t !== 0 && t < Mt[n].priority; n++)
            ;
        Mt.splice(n, 0, e),
        n === 0 && ad(e)
    }
}
;
function ya(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function As(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function $u() {}
function Lv(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var u = ms(i);
                s.call(u)
            }
        }
        var i = Rf(t, r, e, 0, null, !1, !1, "", $u);
        return e._reactRootContainer = i,
        e[Ct] = i.current,
        Br(e.nodeType === 8 ? e.parentNode : e),
        Sn(),
        i
    }
    for (; o = e.lastChild; )
        e.removeChild(o);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var u = ms(a);
            l.call(u)
        }
    }
    var a = ha(e, 0, !1, null, null, !1, !1, "", $u);
    return e._reactRootContainer = a,
    e[Ct] = a.current,
    Br(e.nodeType === 8 ? e.parentNode : e),
    Sn(function() {
        Rs(t, a, n, r)
    }),
    a
}
function Os(e, t, n, r, o) {
    var s = n._reactRootContainer;
    if (s) {
        var i = s;
        if (typeof o == "function") {
            var l = o;
            o = function() {
                var a = ms(i);
                l.call(a)
            }
        }
        Rs(t, i, e, o)
    } else
        i = Lv(n, t, e, o, r);
    return ms(i)
}
od = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Cr(t.pendingLanes);
            n !== 0 && (Fl(t, n | 1),
            je(t, oe()),
            !(U & 6) && (sr = oe() + 500,
            nn()))
        }
        break;
    case 13:
        Sn(function() {
            var r = kt(e, 1);
            if (r !== null) {
                var o = Pe();
                nt(r, e, 1, o)
            }
        }),
        ma(e, 1)
    }
}
;
Dl = function(e) {
    if (e.tag === 13) {
        var t = kt(e, 134217728);
        if (t !== null) {
            var n = Pe();
            nt(t, e, 134217728, n)
        }
        ma(e, 134217728)
    }
}
;
sd = function(e) {
    if (e.tag === 13) {
        var t = qt(e)
          , n = kt(e, t);
        if (n !== null) {
            var r = Pe();
            nt(n, e, t, r)
        }
        ma(e, t)
    }
}
;
id = function() {
    return B
}
;
ld = function(e, t) {
    var n = B;
    try {
        return B = e,
        t()
    } finally {
        B = n
    }
}
;
Di = function(e, t, n) {
    switch (t) {
    case "input":
        if (Ii(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var o = Es(r);
                    if (!o)
                        throw Error(T(90));
                    zc(r),
                    Ii(r, o)
                }
            }
        }
        break;
    case "textarea":
        $c(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Dn(e, !!n.multiple, t, !1)
    }
}
;
Kc = ca;
Gc = Sn;
var Fv = {
    usingClientEntryPoint: !1,
    Events: [lo, In, Es, Qc, Hc, ca]
}
  , gr = {
    findFiberByHostInstance: an,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , Dv = {
    bundleType: gr.bundleType,
    version: gr.version,
    rendererPackageName: gr.rendererPackageName,
    rendererConfig: gr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Pt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Xc(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: gr.findFiberByHostInstance || Mv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var No = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!No.isDisabled && No.supportsFiber)
        try {
            gs = No.inject(Dv),
            dt = No
        } catch {}
}
be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fv;
be.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ya(t))
        throw Error(T(200));
    return jv(e, t, null, n)
}
;
be.createRoot = function(e, t) {
    if (!ya(e))
        throw Error(T(299));
    var n = !1
      , r = ""
      , o = If;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    t = ha(e, 1, !1, null, null, n, !1, r, o),
    e[Ct] = t.current,
    Br(e.nodeType === 8 ? e.parentNode : e),
    new va(t)
}
;
be.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(T(188)) : (e = Object.keys(e).join(","),
        Error(T(268, e)));
    return e = Xc(t),
    e = e === null ? null : e.stateNode,
    e
}
;
be.flushSync = function(e) {
    return Sn(e)
}
;
be.hydrate = function(e, t, n) {
    if (!As(t))
        throw Error(T(200));
    return Os(null, e, t, !0, n)
}
;
be.hydrateRoot = function(e, t, n) {
    if (!ya(e))
        throw Error(T(405));
    var r = n != null && n.hydratedSources || null
      , o = !1
      , s = ""
      , i = If;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0),
    n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    t = Rf(t, null, e, 1, n ?? null, o, !1, s, i),
    e[Ct] = t.current,
    Br(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            o = n._getVersion,
            o = o(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new Is(t)
}
;
be.render = function(e, t, n) {
    if (!As(t))
        throw Error(T(200));
    return Os(null, e, t, !1, n)
}
;
be.unmountComponentAtNode = function(e) {
    if (!As(e))
        throw Error(T(40));
    return e._reactRootContainer ? (Sn(function() {
        Os(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Ct] = null
        })
    }),
    !0) : !1
}
;
be.unstable_batchedUpdates = ca;
be.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!As(n))
        throw Error(T(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(T(38));
    return Os(e, t, n, !1, r)
}
;
be.version = "18.3.1-next-f1338f8080-20240426";
function Af() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Af)
        } catch (e) {
            console.error(e)
        }
}
Af(),
Ic.exports = be;
var js = Ic.exports;
const zv = yc(js);
var Of, Uu = js;
Of = Uu.createRoot,
Uu.hydrateRoot;
function bv(e, t) {
    if (e instanceof RegExp)
        return {
            keys: !1,
            pattern: e
        };
    var n, r, o, s, i = [], l = "", a = e.split("/");
    for (a[0] || a.shift(); o = a.shift(); )
        n = o[0],
        n === "*" ? (i.push(n),
        l += o[1] === "?" ? "(?:/(.*))?" : "/(.*)") : n === ":" ? (r = o.indexOf("?", 1),
        s = o.indexOf(".", 1),
        i.push(o.substring(1, ~r ? r : ~s ? s : o.length)),
        l += ~r && !~s ? "(?:/([^/]+?))?" : "/([^/]+?)",
        ~s && (l += (~r ? "?" : "") + "\\" + o.substring(s))) : l += "/" + o;
    return {
        keys: i,
        pattern: new RegExp("^" + l + (t ? "(?=$|/)" : "/?$"),"i")
    }
}
var jf = {
    exports: {}
}
  , Mf = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ir = v;
function $v(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Uv = typeof Object.is == "function" ? Object.is : $v
  , Vv = ir.useState
  , Bv = ir.useEffect
  , Wv = ir.useLayoutEffect
  , Qv = ir.useDebugValue;
function Hv(e, t) {
    var n = t()
      , r = Vv({
        inst: {
            value: n,
            getSnapshot: t
        }
    })
      , o = r[0].inst
      , s = r[1];
    return Wv(function() {
        o.value = n,
        o.getSnapshot = t,
        vi(o) && s({
            inst: o
        })
    }, [e, n, t]),
    Bv(function() {
        return vi(o) && s({
            inst: o
        }),
        e(function() {
            vi(o) && s({
                inst: o
            })
        })
    }, [e]),
    Qv(n),
    n
}
function vi(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Uv(e, n)
    } catch {
        return !0
    }
}
function Kv(e, t) {
    return t()
}
var Gv = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? Kv : Hv;
Mf.useSyncExternalStore = ir.useSyncExternalStore !== void 0 ? ir.useSyncExternalStore : Gv;
jf.exports = Mf;
var qv = jf.exports;
const Yv = Nc.useInsertionEffect
  , Xv = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , Zv = Xv ? v.useLayoutEffect : v.useEffect
  , Jv = Yv || Zv
  , Lf = e => {
    const t = v.useRef([e, (...n) => t[0](...n)]).current;
    return Jv( () => {
        t[0] = e
    }
    ),
    t[1]
}
  , ey = "popstate"
  , ga = "pushState"
  , wa = "replaceState"
  , ty = "hashchange"
  , Vu = [ey, ga, wa, ty]
  , ny = e => {
    for (const t of Vu)
        addEventListener(t, e);
    return () => {
        for (const t of Vu)
            removeEventListener(t, e)
    }
}
  , Ff = (e, t) => qv.useSyncExternalStore(ny, e, t)
  , ry = () => location.search
  , oy = ({ssrSearch: e=""}={}) => Ff(ry, () => e)
  , Bu = () => location.pathname
  , sy = ({ssrPath: e}={}) => Ff(Bu, e ? () => e : Bu)
  , iy = (e, {replace: t=!1, state: n=null}={}) => history[t ? wa : ga](n, "", e)
  , ly = (e={}) => [sy(e), iy]
  , Wu = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[Wu] > "u") {
    for (const e of [ga, wa]) {
        const t = history[e];
        history[e] = function() {
            const n = t.apply(this, arguments)
              , r = new Event(e);
            return r.arguments = arguments,
            dispatchEvent(r),
            n
        }
    }
    Object.defineProperty(window, Wu, {
        value: !0
    })
}
const ay = (e, t) => t.toLowerCase().indexOf(e.toLowerCase()) ? "~" + t : t.slice(e.length) || "/"
  , Df = (e="") => e === "/" ? "" : e
  , uy = (e, t) => e[0] === "~" ? e.slice(1) : Df(t) + e
  , cy = (e="", t) => ay(Qu(Df(e)), Qu(t))
  , Qu = e => {
    try {
        return decodeURI(e)
    } catch {
        return e
    }
}
  , zf = {
    hook: ly,
    searchHook: oy,
    parser: bv,
    base: "",
    ssrPath: void 0,
    ssrSearch: void 0,
    hrefs: e => e
}
  , bf = v.createContext(zf)
  , Ms = () => v.useContext(bf)
  , $f = {}
  , Uf = v.createContext($f)
  , dy = () => v.useContext(Uf)
  , xa = e => {
    const [t,n] = e.hook(e);
    return [cy(e.base, t), Lf( (r, o) => n(uy(r, e.base), o))]
}
  , Vf = (e, t, n, r) => {
    const {pattern: o, keys: s} = t instanceof RegExp ? {
        keys: !1,
        pattern: t
    } : e(t || "*", r)
      , i = o.exec(n) || []
      , [l,...a] = i;
    return l !== void 0 ? [!0, ( () => {
        const u = s !== !1 ? Object.fromEntries(s.map( (p, f) => [p, a[f]])) : i.groups;
        let d = {
            ...a
        };
        return u && Object.assign(d, u),
        d
    }
    )(), ...r ? [l] : []] : [!1, null]
}
  , fy = ({children: e, ...t}) => {
    var d, p;
    const n = Ms()
      , r = t.hook ? zf : n;
    let o = r;
    const [s,i] = ((d = t.ssrPath) == null ? void 0 : d.split("?")) ?? [];
    i && (t.ssrSearch = i,
    t.ssrPath = s),
    t.hrefs = t.hrefs ?? ((p = t.hook) == null ? void 0 : p.hrefs);
    let l = v.useRef({})
      , a = l.current
      , u = a;
    for (let f in r) {
        const x = f === "base" ? r[f] + (t[f] || "") : t[f] || r[f];
        a === u && x !== u[f] && (l.current = u = {
            ...u
        }),
        u[f] = x,
        x !== r[f] && (o = u)
    }
    return v.createElement(bf.Provider, {
        value: o,
        children: e
    })
}
  , Hu = ({children: e, component: t}, n) => t ? v.createElement(t, {
    params: n
}) : typeof e == "function" ? e(n) : e
  , py = e => {
    let t = v.useRef($f)
      , n = t.current;
    for (const r in e)
        e[r] !== n[r] && (n = e);
    return Object.keys(e).length === 0 && (n = e),
    t.current = n
}
  , yi = ({path: e, nest: t, match: n, ...r}) => {
    const o = Ms()
      , [s] = xa(o)
      , [i,l,a] = n ?? Vf(o.parser, e, s, t)
      , u = py({
        ...dy(),
        ...l
    });
    if (!i)
        return null;
    const d = a ? v.createElement(fy, {
        base: a
    }, Hu(r, u)) : Hu(r, u);
    return v.createElement(Uf.Provider, {
        value: u,
        children: d
    })
}
;
v.forwardRef( (e, t) => {
    const n = Ms()
      , [r,o] = xa(n)
      , {to: s="", href: i=s, onClick: l, asChild: a, children: u, className: d, replace: p, state: f, ...x} = e
      , g = Lf(E => {
        E.ctrlKey || E.metaKey || E.altKey || E.shiftKey || E.button !== 0 || (l == null || l(E),
        E.defaultPrevented || (E.preventDefault(),
        o(i, e)))
    }
    )
      , y = n.hrefs(i[0] === "~" ? i.slice(1) : n.base + i, n);
    return a && v.isValidElement(u) ? v.cloneElement(u, {
        onClick: g,
        href: y
    }) : v.createElement("a", {
        ...x,
        onClick: g,
        href: y,
        className: d != null && d.call ? d(r === i) : d,
        children: u,
        ref: t
    })
}
);
const Bf = e => Array.isArray(e) ? e.flatMap(t => Bf(t && t.type === v.Fragment ? t.props.children : t)) : [e]
  , hy = ({children: e, location: t}) => {
    const n = Ms()
      , [r] = xa(n);
    for (const o of Bf(e)) {
        let s = 0;
        if (v.isValidElement(o) && (s = Vf(n.parser, o.props.path, t || r, o.props.nest))[0])
            return v.cloneElement(o, {
                match: s
            })
    }
    return null
}
;
var Ls = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , Fs = typeof window > "u" || "Deno"in globalThis;
function Xe() {}
function my(e, t) {
    return typeof e == "function" ? e(t) : e
}
function vy(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function yy(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function Ku(e, t) {
    return typeof e == "function" ? e(t) : e
}
function gy(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Gu(e, t) {
    const {type: n="all", exact: r, fetchStatus: o, predicate: s, queryKey: i, stale: l} = e;
    if (i) {
        if (r) {
            if (t.queryHash !== Sa(i, t.options))
                return !1
        } else if (!Jr(t.queryKey, i))
            return !1
    }
    if (n !== "all") {
        const a = t.isActive();
        if (n === "active" && !a || n === "inactive" && a)
            return !1
    }
    return !(typeof l == "boolean" && t.isStale() !== l || o && o !== t.state.fetchStatus || s && !s(t))
}
function qu(e, t) {
    const {exact: n, status: r, predicate: o, mutationKey: s} = e;
    if (s) {
        if (!t.options.mutationKey)
            return !1;
        if (n) {
            if (Zr(t.options.mutationKey) !== Zr(s))
                return !1
        } else if (!Jr(t.options.mutationKey, s))
            return !1
    }
    return !(r && t.state.status !== r || o && !o(t))
}
function Sa(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || Zr)(e)
}
function Zr(e) {
    return JSON.stringify(e, (t, n) => vl(n) ? Object.keys(n).sort().reduce( (r, o) => (r[o] = n[o],
    r), {}) : n)
}
function Jr(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some(n => !Jr(e[n], t[n])) : !1
}
function Wf(e, t) {
    if (e === t)
        return e;
    const n = Yu(e) && Yu(t);
    if (n || vl(e) && vl(t)) {
        const r = n ? e : Object.keys(e)
          , o = r.length
          , s = n ? t : Object.keys(t)
          , i = s.length
          , l = n ? [] : {};
        let a = 0;
        for (let u = 0; u < i; u++) {
            const d = n ? u : s[u];
            (!n && r.includes(d) || n) && e[d] === void 0 && t[d] === void 0 ? (l[d] = void 0,
            a++) : (l[d] = Wf(e[d], t[d]),
            l[d] === e[d] && e[d] !== void 0 && a++)
        }
        return o === i && a === o ? e : l
    }
    return t
}
function Yu(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function vl(e) {
    if (!Xu(e))
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const n = t.prototype;
    return !(!Xu(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function Xu(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function wy(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function xy(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? Wf(e, t) : t
}
function Sy(e, t, n=0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}
function Ey(e, t, n=0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var Ea = Symbol();
function Qf(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === Ea ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var dn, Ft, Wn, uc, Cy = (uc = class extends Ls {
    constructor() {
        super();
        V(this, dn);
        V(this, Ft);
        V(this, Wn);
        z(this, Wn, t => {
            if (!Fs && window.addEventListener) {
                const n = () => t();
                return window.addEventListener("visibilitychange", n, !1),
                () => {
                    window.removeEventListener("visibilitychange", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        C(this, Ft) || this.setEventListener(C(this, Wn))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = C(this, Ft)) == null || t.call(this),
        z(this, Ft, void 0))
    }
    setEventListener(t) {
        var n;
        z(this, Wn, t),
        (n = C(this, Ft)) == null || n.call(this),
        z(this, Ft, t(r => {
            typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
        }
        ))
    }
    setFocused(t) {
        C(this, dn) !== t && (z(this, dn, t),
        this.onFocus())
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(n => {
            n(t)
        }
        )
    }
    isFocused() {
        var t;
        return typeof C(this, dn) == "boolean" ? C(this, dn) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
}
,
dn = new WeakMap,
Ft = new WeakMap,
Wn = new WeakMap,
uc), Hf = new Cy, Qn, Dt, Hn, cc, ky = (cc = class extends Ls {
    constructor() {
        super();
        V(this, Qn, !0);
        V(this, Dt);
        V(this, Hn);
        z(this, Hn, t => {
            if (!Fs && window.addEventListener) {
                const n = () => t(!0)
                  , r = () => t(!1);
                return window.addEventListener("online", n, !1),
                window.addEventListener("offline", r, !1),
                () => {
                    window.removeEventListener("online", n),
                    window.removeEventListener("offline", r)
                }
            }
        }
        )
    }
    onSubscribe() {
        C(this, Dt) || this.setEventListener(C(this, Hn))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = C(this, Dt)) == null || t.call(this),
        z(this, Dt, void 0))
    }
    setEventListener(t) {
        var n;
        z(this, Hn, t),
        (n = C(this, Dt)) == null || n.call(this),
        z(this, Dt, t(this.setOnline.bind(this)))
    }
    setOnline(t) {
        C(this, Qn) !== t && (z(this, Qn, t),
        this.listeners.forEach(r => {
            r(t)
        }
        ))
    }
    isOnline() {
        return C(this, Qn)
    }
}
,
Qn = new WeakMap,
Dt = new WeakMap,
Hn = new WeakMap,
cc), vs = new ky;
function _y() {
    let e, t;
    const n = new Promise( (o, s) => {
        e = o,
        t = s
    }
    );
    n.status = "pending",
    n.catch( () => {}
    );
    function r(o) {
        Object.assign(n, o),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = o => {
        r({
            status: "fulfilled",
            value: o
        }),
        e(o)
    }
    ,
    n.reject = o => {
        r({
            status: "rejected",
            reason: o
        }),
        t(o)
    }
    ,
    n
}
function Py(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function Kf(e) {
    return (e ?? "online") === "online" ? vs.isOnline() : !0
}
var Gf = class extends Error {
    constructor(e) {
        super("CancelledError"),
        this.revert = e == null ? void 0 : e.revert,
        this.silent = e == null ? void 0 : e.silent
    }
}
;
function gi(e) {
    return e instanceof Gf
}
function qf(e) {
    let t = !1, n = 0, r = !1, o;
    const s = _y()
      , i = y => {
        var E;
        r || (f(new Gf(y)),
        (E = e.abort) == null || E.call(e))
    }
      , l = () => {
        t = !0
    }
      , a = () => {
        t = !1
    }
      , u = () => Hf.isFocused() && (e.networkMode === "always" || vs.isOnline()) && e.canRun()
      , d = () => Kf(e.networkMode) && e.canRun()
      , p = y => {
        var E;
        r || (r = !0,
        (E = e.onSuccess) == null || E.call(e, y),
        o == null || o(),
        s.resolve(y))
    }
      , f = y => {
        var E;
        r || (r = !0,
        (E = e.onError) == null || E.call(e, y),
        o == null || o(),
        s.reject(y))
    }
      , x = () => new Promise(y => {
        var E;
        o = h => {
            (r || u()) && y(h)
        }
        ,
        (E = e.onPause) == null || E.call(e)
    }
    ).then( () => {
        var y;
        o = void 0,
        r || (y = e.onContinue) == null || y.call(e)
    }
    )
      , g = () => {
        if (r)
            return;
        let y;
        const E = n === 0 ? e.initialPromise : void 0;
        try {
            y = E ?? e.fn()
        } catch (h) {
            y = Promise.reject(h)
        }
        Promise.resolve(y).then(p).catch(h => {
            var N;
            if (r)
                return;
            const c = e.retry ?? (Fs ? 0 : 3)
              , m = e.retryDelay ?? Py
              , S = typeof m == "function" ? m(n, h) : m
              , k = c === !0 || typeof c == "number" && n < c || typeof c == "function" && c(n, h);
            if (t || !k) {
                f(h);
                return
            }
            n++,
            (N = e.onFail) == null || N.call(e, n, h),
            wy(S).then( () => u() ? void 0 : x()).then( () => {
                t ? f(h) : g()
            }
            )
        }
        )
    }
    ;
    return {
        promise: s,
        cancel: i,
        continue: () => (o == null || o(),
        s),
        cancelRetry: l,
        continueRetry: a,
        canStart: d,
        start: () => (d() ? g() : x().then(g),
        s)
    }
}
function Ty() {
    let e = []
      , t = 0
      , n = l => {
        l()
    }
      , r = l => {
        l()
    }
      , o = l => setTimeout(l, 0);
    const s = l => {
        t ? e.push(l) : o( () => {
            n(l)
        }
        )
    }
      , i = () => {
        const l = e;
        e = [],
        l.length && o( () => {
            r( () => {
                l.forEach(a => {
                    n(a)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: l => {
            let a;
            t++;
            try {
                a = l()
            } finally {
                t--,
                t || i()
            }
            return a
        }
        ,
        batchCalls: l => (...a) => {
            s( () => {
                l(...a)
            }
            )
        }
        ,
        schedule: s,
        setNotifyFunction: l => {
            n = l
        }
        ,
        setBatchNotifyFunction: l => {
            r = l
        }
        ,
        setScheduler: l => {
            o = l
        }
    }
}
var _e = Ty(), fn, dc, Yf = (dc = class {
    constructor() {
        V(this, fn)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        vy(this.gcTime) && z(this, fn, setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (Fs ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        C(this, fn) && (clearTimeout(C(this, fn)),
        z(this, fn, void 0))
    }
}
,
fn = new WeakMap,
dc), Kn, Gn, Ve, ge, no, pn, Ze, vt, fc, Ny = (fc = class extends Yf {
    constructor(t) {
        super();
        V(this, Ze);
        V(this, Kn);
        V(this, Gn);
        V(this, Ve);
        V(this, ge);
        V(this, no);
        V(this, pn);
        z(this, pn, !1),
        z(this, no, t.defaultOptions),
        this.setOptions(t.options),
        this.observers = [],
        z(this, Ve, t.cache),
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        z(this, Kn, Iy(this.options)),
        this.state = t.state ?? C(this, Kn),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var t;
        return (t = C(this, ge)) == null ? void 0 : t.promise
    }
    setOptions(t) {
        this.options = {
            ...C(this, no),
            ...t
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && C(this, Ve).remove(this)
    }
    setData(t, n) {
        const r = xy(this.state.data, t, this.options);
        return me(this, Ze, vt).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual
        }),
        r
    }
    setState(t, n) {
        me(this, Ze, vt).call(this, {
            type: "setState",
            state: t,
            setStateOptions: n
        })
    }
    cancel(t) {
        var r, o;
        const n = (r = C(this, ge)) == null ? void 0 : r.promise;
        return (o = C(this, ge)) == null || o.cancel(t),
        n ? n.then(Xe).catch(Xe) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(C(this, Kn))
    }
    isActive() {
        return this.observers.some(t => gy(t.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Ea || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStale() {
        return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0
    }
    isStaleByTime(t=0) {
        return this.state.isInvalidated || this.state.data === void 0 || !yy(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = C(this, ge)) == null || n.continue()
    }
    onOnline() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnReconnect());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = C(this, ge)) == null || n.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        C(this, Ve).notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t),
        this.observers.length || (C(this, ge) && (C(this, pn) ? C(this, ge).cancel({
            revert: !0
        }) : C(this, ge).cancelRetry()),
        this.scheduleGc()),
        C(this, Ve).notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || me(this, Ze, vt).call(this, {
            type: "invalidate"
        })
    }
    fetch(t, n) {
        var a, u, d;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (C(this, ge))
                return C(this, ge).continueRetry(),
                C(this, ge).promise
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const p = this.observers.find(f => f.options.queryFn);
            p && this.setOptions(p.options)
        }
        const r = new AbortController
          , o = p => {
            Object.defineProperty(p, "signal", {
                enumerable: !0,
                get: () => (z(this, pn, !0),
                r.signal)
            })
        }
          , s = () => {
            const p = Qf(this.options, n)
              , f = {
                queryKey: this.queryKey,
                meta: this.meta
            };
            return o(f),
            z(this, pn, !1),
            this.options.persister ? this.options.persister(p, f, this) : p(f)
        }
          , i = {
            fetchOptions: n,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: s
        };
        o(i),
        (a = this.options.behavior) == null || a.onFetch(i, this),
        z(this, Gn, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((u = i.fetchOptions) == null ? void 0 : u.meta)) && me(this, Ze, vt).call(this, {
            type: "fetch",
            meta: (d = i.fetchOptions) == null ? void 0 : d.meta
        });
        const l = p => {
            var f, x, g, y;
            gi(p) && p.silent || me(this, Ze, vt).call(this, {
                type: "error",
                error: p
            }),
            gi(p) || ((x = (f = C(this, Ve).config).onError) == null || x.call(f, p, this),
            (y = (g = C(this, Ve).config).onSettled) == null || y.call(g, this.state.data, p, this)),
            this.scheduleGc()
        }
        ;
        return z(this, ge, qf({
            initialPromise: n == null ? void 0 : n.initialPromise,
            fn: i.fetchFn,
            abort: r.abort.bind(r),
            onSuccess: p => {
                var f, x, g, y;
                if (p === void 0) {
                    l(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(p)
                } catch (E) {
                    l(E);
                    return
                }
                (x = (f = C(this, Ve).config).onSuccess) == null || x.call(f, p, this),
                (y = (g = C(this, Ve).config).onSettled) == null || y.call(g, p, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: l,
            onFail: (p, f) => {
                me(this, Ze, vt).call(this, {
                    type: "failed",
                    failureCount: p,
                    error: f
                })
            }
            ,
            onPause: () => {
                me(this, Ze, vt).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                me(this, Ze, vt).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: i.options.retry,
            retryDelay: i.options.retryDelay,
            networkMode: i.options.networkMode,
            canRun: () => !0
        })),
        C(this, ge).start()
    }
}
,
Kn = new WeakMap,
Gn = new WeakMap,
Ve = new WeakMap,
ge = new WeakMap,
no = new WeakMap,
pn = new WeakMap,
Ze = new WeakSet,
vt = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error
            };
        case "pause":
            return {
                ...r,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...r,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...r,
                ...Ry(r.data, this.options),
                fetchMeta: t.meta ?? null
            };
        case "success":
            return {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
        case "error":
            const o = t.error;
            return gi(o) && o.revert && C(this, Gn) ? {
                ...C(this, Gn),
                fetchStatus: "idle"
            } : {
                ...r,
                error: o,
                errorUpdateCount: r.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: r.fetchFailureCount + 1,
                fetchFailureReason: o,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...r,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...r,
                ...t.state
            }
        }
    }
    ;
    this.state = n(this.state),
    _e.batch( () => {
        this.observers.forEach(r => {
            r.onQueryUpdate()
        }
        ),
        C(this, Ve).notify({
            query: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
fc);
function Ry(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: Kf(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function Iy(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , n = t !== void 0
      , r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var lt, pc, Ay = (pc = class extends Ls {
    constructor(t={}) {
        super();
        V(this, lt);
        this.config = t,
        z(this, lt, new Map)
    }
    build(t, n, r) {
        const o = n.queryKey
          , s = n.queryHash ?? Sa(o, n);
        let i = this.get(s);
        return i || (i = new Ny({
            cache: this,
            queryKey: o,
            queryHash: s,
            options: t.defaultQueryOptions(n),
            state: r,
            defaultOptions: t.getQueryDefaults(o)
        }),
        this.add(i)),
        i
    }
    add(t) {
        C(this, lt).has(t.queryHash) || (C(this, lt).set(t.queryHash, t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const n = C(this, lt).get(t.queryHash);
        n && (t.destroy(),
        n === t && C(this, lt).delete(t.queryHash),
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        _e.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return C(this, lt).get(t)
    }
    getAll() {
        return [...C(this, lt).values()]
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Gu(n, r))
    }
    findAll(t={}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter(r => Gu(t, r)) : n
    }
    notify(t) {
        _e.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    onFocus() {
        _e.batch( () => {
            this.getAll().forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        _e.batch( () => {
            this.getAll().forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
,
lt = new WeakMap,
pc), at, Ce, hn, ut, At, hc, Oy = (hc = class extends Yf {
    constructor(t) {
        super();
        V(this, ut);
        V(this, at);
        V(this, Ce);
        V(this, hn);
        this.mutationId = t.mutationId,
        z(this, Ce, t.mutationCache),
        z(this, at, []),
        this.state = t.state || jy(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
        this.options = t,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(t) {
        C(this, at).includes(t) || (C(this, at).push(t),
        this.clearGcTimeout(),
        C(this, Ce).notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        z(this, at, C(this, at).filter(n => n !== t)),
        this.scheduleGc(),
        C(this, Ce).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        C(this, at).length || (this.state.status === "pending" ? this.scheduleGc() : C(this, Ce).remove(this))
    }
    continue() {
        var t;
        return ((t = C(this, hn)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
    }
    async execute(t) {
        var o, s, i, l, a, u, d, p, f, x, g, y, E, h, c, m, S, k, N, P;
        z(this, hn, qf({
            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
            onFail: (_, j) => {
                me(this, ut, At).call(this, {
                    type: "failed",
                    failureCount: _,
                    error: j
                })
            }
            ,
            onPause: () => {
                me(this, ut, At).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                me(this, ut, At).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => C(this, Ce).canRun(this)
        }));
        const n = this.state.status === "pending"
          , r = !C(this, hn).canStart();
        try {
            if (!n) {
                me(this, ut, At).call(this, {
                    type: "pending",
                    variables: t,
                    isPaused: r
                }),
                await ((s = (o = C(this, Ce).config).onMutate) == null ? void 0 : s.call(o, t, this));
                const j = await ((l = (i = this.options).onMutate) == null ? void 0 : l.call(i, t));
                j !== this.state.context && me(this, ut, At).call(this, {
                    type: "pending",
                    context: j,
                    variables: t,
                    isPaused: r
                })
            }
            const _ = await C(this, hn).start();
            return await ((u = (a = C(this, Ce).config).onSuccess) == null ? void 0 : u.call(a, _, t, this.state.context, this)),
            await ((p = (d = this.options).onSuccess) == null ? void 0 : p.call(d, _, t, this.state.context)),
            await ((x = (f = C(this, Ce).config).onSettled) == null ? void 0 : x.call(f, _, null, this.state.variables, this.state.context, this)),
            await ((y = (g = this.options).onSettled) == null ? void 0 : y.call(g, _, null, t, this.state.context)),
            me(this, ut, At).call(this, {
                type: "success",
                data: _
            }),
            _
        } catch (_) {
            try {
                throw await ((h = (E = C(this, Ce).config).onError) == null ? void 0 : h.call(E, _, t, this.state.context, this)),
                await ((m = (c = this.options).onError) == null ? void 0 : m.call(c, _, t, this.state.context)),
                await ((k = (S = C(this, Ce).config).onSettled) == null ? void 0 : k.call(S, void 0, _, this.state.variables, this.state.context, this)),
                await ((P = (N = this.options).onSettled) == null ? void 0 : P.call(N, void 0, _, t, this.state.context)),
                _
            } finally {
                me(this, ut, At).call(this, {
                    type: "error",
                    error: _
                })
            }
        } finally {
            C(this, Ce).runNext(this)
        }
    }
}
,
at = new WeakMap,
Ce = new WeakMap,
hn = new WeakMap,
ut = new WeakSet,
At = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                failureCount: t.failureCount,
                failureReason: t.error
            };
        case "pause":
            return {
                ...r,
                isPaused: !0
            };
        case "continue":
            return {
                ...r,
                isPaused: !1
            };
        case "pending":
            return {
                ...r,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...r,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...r,
                data: void 0,
                error: t.error,
                failureCount: r.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = n(this.state),
    _e.batch( () => {
        C(this, at).forEach(r => {
            r.onMutationUpdate(t)
        }
        ),
        C(this, Ce).notify({
            mutation: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
hc);
function jy() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var Me, ro, mc, My = (mc = class extends Ls {
    constructor(t={}) {
        super();
        V(this, Me);
        V(this, ro);
        this.config = t,
        z(this, Me, new Map),
        z(this, ro, Date.now())
    }
    build(t, n, r) {
        const o = new Oy({
            mutationCache: this,
            mutationId: ++co(this, ro)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(o),
        o
    }
    add(t) {
        const n = Ro(t)
          , r = C(this, Me).get(n) ?? [];
        r.push(t),
        C(this, Me).set(n, r),
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        var r;
        const n = Ro(t);
        if (C(this, Me).has(n)) {
            const o = (r = C(this, Me).get(n)) == null ? void 0 : r.filter(s => s !== t);
            o && (o.length === 0 ? C(this, Me).delete(n) : C(this, Me).set(n, o))
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        var r;
        const n = (r = C(this, Me).get(Ro(t))) == null ? void 0 : r.find(o => o.state.status === "pending");
        return !n || n === t
    }
    runNext(t) {
        var r;
        const n = (r = C(this, Me).get(Ro(t))) == null ? void 0 : r.find(o => o !== t && o.state.isPaused);
        return (n == null ? void 0 : n.continue()) ?? Promise.resolve()
    }
    clear() {
        _e.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    getAll() {
        return [...C(this, Me).values()].flat()
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => qu(n, r))
    }
    findAll(t={}) {
        return this.getAll().filter(n => qu(t, n))
    }
    notify(t) {
        _e.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return _e.batch( () => Promise.all(t.map(n => n.continue().catch(Xe))))
    }
}
,
Me = new WeakMap,
ro = new WeakMap,
mc);
function Ro(e) {
    var t;
    return ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId)
}
function Zu(e) {
    return {
        onFetch: (t, n) => {
            var d, p, f, x, g;
            const r = t.options
              , o = (f = (p = (d = t.fetchOptions) == null ? void 0 : d.meta) == null ? void 0 : p.fetchMore) == null ? void 0 : f.direction
              , s = ((x = t.state.data) == null ? void 0 : x.pages) || []
              , i = ((g = t.state.data) == null ? void 0 : g.pageParams) || [];
            let l = {
                pages: [],
                pageParams: []
            }
              , a = 0;
            const u = async () => {
                let y = !1;
                const E = m => {
                    Object.defineProperty(m, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? y = !0 : t.signal.addEventListener("abort", () => {
                            y = !0
                        }
                        ),
                        t.signal)
                    })
                }
                  , h = Qf(t.options, t.fetchOptions)
                  , c = async (m, S, k) => {
                    if (y)
                        return Promise.reject();
                    if (S == null && m.pages.length)
                        return Promise.resolve(m);
                    const N = {
                        queryKey: t.queryKey,
                        pageParam: S,
                        direction: k ? "backward" : "forward",
                        meta: t.options.meta
                    };
                    E(N);
                    const P = await h(N)
                      , {maxPages: _} = t.options
                      , j = k ? Ey : Sy;
                    return {
                        pages: j(m.pages, P, _),
                        pageParams: j(m.pageParams, S, _)
                    }
                }
                ;
                if (o && s.length) {
                    const m = o === "backward"
                      , S = m ? Ly : Ju
                      , k = {
                        pages: s,
                        pageParams: i
                    }
                      , N = S(r, k);
                    l = await c(k, N, m)
                } else {
                    const m = e ?? s.length;
                    do {
                        const S = a === 0 ? i[0] ?? r.initialPageParam : Ju(r, l);
                        if (a > 0 && S == null)
                            break;
                        l = await c(l, S),
                        a++
                    } while (a < m)
                }
                return l
            }
            ;
            t.options.persister ? t.fetchFn = () => {
                var y, E;
                return (E = (y = t.options).persister) == null ? void 0 : E.call(y, u, {
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            }
            : t.fetchFn = u
        }
    }
}
function Ju(e, {pages: t, pageParams: n}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}
function Ly(e, {pages: t, pageParams: n}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var te, zt, bt, qn, Yn, $t, Xn, Zn, vc, Fy = (vc = class {
    constructor(e={}) {
        V(this, te);
        V(this, zt);
        V(this, bt);
        V(this, qn);
        V(this, Yn);
        V(this, $t);
        V(this, Xn);
        V(this, Zn);
        z(this, te, e.queryCache || new Ay),
        z(this, zt, e.mutationCache || new My),
        z(this, bt, e.defaultOptions || {}),
        z(this, qn, new Map),
        z(this, Yn, new Map),
        z(this, $t, 0)
    }
    mount() {
        co(this, $t)._++,
        C(this, $t) === 1 && (z(this, Xn, Hf.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            C(this, te).onFocus())
        }
        )),
        z(this, Zn, vs.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            C(this, te).onOnline())
        }
        )))
    }
    unmount() {
        var e, t;
        co(this, $t)._--,
        C(this, $t) === 0 && ((e = C(this, Xn)) == null || e.call(this),
        z(this, Xn, void 0),
        (t = C(this, Zn)) == null || t.call(this),
        z(this, Zn, void 0))
    }
    isFetching(e) {
        return C(this, te).findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return C(this, zt).findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = C(this, te).get(t.queryHash)) == null ? void 0 : n.state.data
    }
    ensureQueryData(e) {
        const t = this.getQueryData(e.queryKey);
        if (t === void 0)
            return this.fetchQuery(e);
        {
            const n = this.defaultQueryOptions(e)
              , r = C(this, te).build(this, n);
            return e.revalidateIfStale && r.isStaleByTime(Ku(n.staleTime, r)) && this.prefetchQuery(n),
            Promise.resolve(t)
        }
    }
    getQueriesData(e) {
        return C(this, te).findAll(e).map( ({queryKey: t, state: n}) => {
            const r = n.data;
            return [t, r]
        }
        )
    }
    setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({
            queryKey: e
        })
          , o = C(this, te).get(r.queryHash)
          , s = o == null ? void 0 : o.state.data
          , i = my(t, s);
        if (i !== void 0)
            return C(this, te).build(this, r).setData(i, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(e, t, n) {
        return _e.batch( () => C(this, te).findAll(e).map( ({queryKey: r}) => [r, this.setQueryData(r, t, n)]))
    }
    getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = C(this, te).get(t.queryHash)) == null ? void 0 : n.state
    }
    removeQueries(e) {
        const t = C(this, te);
        _e.batch( () => {
            t.findAll(e).forEach(n => {
                t.remove(n)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        const n = C(this, te)
          , r = {
            type: "active",
            ...e
        };
        return _e.batch( () => (n.findAll(e).forEach(o => {
            o.reset()
        }
        ),
        this.refetchQueries(r, t)))
    }
    cancelQueries(e={}, t={}) {
        const n = {
            revert: !0,
            ...t
        }
          , r = _e.batch( () => C(this, te).findAll(e).map(o => o.cancel(n)));
        return Promise.all(r).then(Xe).catch(Xe)
    }
    invalidateQueries(e={}, t={}) {
        return _e.batch( () => {
            if (C(this, te).findAll(e).forEach(r => {
                r.invalidate()
            }
            ),
            e.refetchType === "none")
                return Promise.resolve();
            const n = {
                ...e,
                type: e.refetchType ?? e.type ?? "active"
            };
            return this.refetchQueries(n, t)
        }
        )
    }
    refetchQueries(e={}, t) {
        const n = {
            ...t,
            cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0
        }
          , r = _e.batch( () => C(this, te).findAll(e).filter(o => !o.isDisabled()).map(o => {
            let s = o.fetch(void 0, n);
            return n.throwOnError || (s = s.catch(Xe)),
            o.state.fetchStatus === "paused" ? Promise.resolve() : s
        }
        ));
        return Promise.all(r).then(Xe)
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = C(this, te).build(this, t);
        return n.isStaleByTime(Ku(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(Xe).catch(Xe)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = Zu(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Xe).catch(Xe)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = Zu(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return vs.isOnline() ? C(this, zt).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return C(this, te)
    }
    getMutationCache() {
        return C(this, zt)
    }
    getDefaultOptions() {
        return C(this, bt)
    }
    setDefaultOptions(e) {
        z(this, bt, e)
    }
    setQueryDefaults(e, t) {
        C(this, qn).set(Zr(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        const t = [...C(this, qn).values()];
        let n = {};
        return t.forEach(r => {
            Jr(e, r.queryKey) && (n = {
                ...n,
                ...r.defaultOptions
            })
        }
        ),
        n
    }
    setMutationDefaults(e, t) {
        C(this, Yn).set(Zr(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        const t = [...C(this, Yn).values()];
        let n = {};
        return t.forEach(r => {
            Jr(e, r.mutationKey) && (n = {
                ...n,
                ...r.defaultOptions
            })
        }
        ),
        n
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const t = {
            ...C(this, bt).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = Sa(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.enabled !== !0 && t.queryFn === Ea && (t.enabled = !1),
        t
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
            ...C(this, bt).mutations,
            ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        C(this, te).clear(),
        C(this, zt).clear()
    }
}
,
te = new WeakMap,
zt = new WeakMap,
bt = new WeakMap,
qn = new WeakMap,
Yn = new WeakMap,
$t = new WeakMap,
Xn = new WeakMap,
Zn = new WeakMap,
vc), Dy = v.createContext(void 0), zy = ({client: e, children: t}) => (v.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
w.jsx(Dy.Provider, {
    value: e,
    children: t
}));
async function by(e) {
    if (!e.ok) {
        const t = await e.text() || e.statusText;
        throw new Error(`${e.status}: ${t}`)
    }
}
const $y = ({on401: e}) => async ({queryKey: t}) => {
    const n = await fetch(t[0], {
        credentials: "include"
    });
    return e === "returnNull" && n.status === 401 ? null : (await by(n),
    await n.json())
}
  , Uy = new Fy({
    defaultOptions: {
        queries: {
            queryFn: $y({
                on401: "throw"
            }),
            refetchInterval: !1,
            refetchOnWindowFocus: !1,
            staleTime: 1 / 0,
            retry: !1
        },
        mutations: {
            retry: !1
        }
    }
})
  , Vy = 1
  , By = 1e6;
let wi = 0;
function Wy() {
    return wi = (wi + 1) % Number.MAX_SAFE_INTEGER,
    wi.toString()
}
const xi = new Map
  , ec = e => {
    if (xi.has(e))
        return;
    const t = setTimeout( () => {
        xi.delete(e),
        Mr({
            type: "REMOVE_TOAST",
            toastId: e
        })
    }
    , By);
    xi.set(e, t)
}
  , Qy = (e, t) => {
    switch (t.type) {
    case "ADD_TOAST":
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, Vy)
        };
    case "UPDATE_TOAST":
        return {
            ...e,
            toasts: e.toasts.map(n => n.id === t.toast.id ? {
                ...n,
                ...t.toast
            } : n)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: n} = t;
            return n ? ec(n) : e.toasts.forEach(r => {
                ec(r.id)
            }
            ),
            {
                ...e,
                toasts: e.toasts.map(r => r.id === n || n === void 0 ? {
                    ...r,
                    open: !1
                } : r)
            }
        }
    case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(n => n.id !== t.toastId)
        }
    }
}
  , Wo = [];
let Qo = {
    toasts: []
};
function Mr(e) {
    Qo = Qy(Qo, e),
    Wo.forEach(t => {
        t(Qo)
    }
    )
}
function Hy({...e}) {
    const t = Wy()
      , n = o => Mr({
        type: "UPDATE_TOAST",
        toast: {
            ...o,
            id: t
        }
    })
      , r = () => Mr({
        type: "DISMISS_TOAST",
        toastId: t
    });
    return Mr({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: o => {
                o || r()
            }
        }
    }),
    {
        id: t,
        dismiss: r,
        update: n
    }
}
function Ky() {
    const [e,t] = v.useState(Qo);
    return v.useEffect( () => (Wo.push(t),
    () => {
        const n = Wo.indexOf(t);
        n > -1 && Wo.splice(n, 1)
    }
    ), [e]),
    {
        ...e,
        toast: Hy,
        dismiss: n => Mr({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}
function re(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return function(o) {
        if (e == null || e(o),
        n === !1 || !o.defaultPrevented)
            return t == null ? void 0 : t(o)
    }
}
function Gy(e, t) {
    typeof e == "function" ? e(t) : e != null && (e.current = t)
}
function Xf(...e) {
    return t => e.forEach(n => Gy(n, t))
}
function Jt(...e) {
    return v.useCallback(Xf(...e), e)
}
function qy(e, t=[]) {
    let n = [];
    function r(s, i) {
        const l = v.createContext(i)
          , a = n.length;
        n = [...n, i];
        function u(p) {
            const {scope: f, children: x, ...g} = p
              , y = (f == null ? void 0 : f[e][a]) || l
              , E = v.useMemo( () => g, Object.values(g));
            return w.jsx(y.Provider, {
                value: E,
                children: x
            })
        }
        function d(p, f) {
            const x = (f == null ? void 0 : f[e][a]) || l
              , g = v.useContext(x);
            if (g)
                return g;
            if (i !== void 0)
                return i;
            throw new Error(`\`${p}\` must be used within \`${s}\``)
        }
        return u.displayName = s + "Provider",
        [u, d]
    }
    const o = () => {
        const s = n.map(i => v.createContext(i));
        return function(l) {
            const a = (l == null ? void 0 : l[e]) || s;
            return v.useMemo( () => ({
                [`__scope${e}`]: {
                    ...l,
                    [e]: a
                }
            }), [l, a])
        }
    }
    ;
    return o.scopeName = e,
    [r, Yy(o, ...t)]
}
function Yy(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(s) {
            const i = r.reduce( (l, {useScope: a, scopeName: u}) => {
                const p = a(s)[`__scope${u}`];
                return {
                    ...l,
                    ...p
                }
            }
            , {});
            return v.useMemo( () => ({
                [`__scope${t.scopeName}`]: i
            }), [i])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
var eo = v.forwardRef( (e, t) => {
    const {children: n, ...r} = e
      , o = v.Children.toArray(n)
      , s = o.find(Zy);
    if (s) {
        const i = s.props.children
          , l = o.map(a => a === s ? v.Children.count(i) > 1 ? v.Children.only(null) : v.isValidElement(i) ? i.props.children : null : a);
        return w.jsx(yl, {
            ...r,
            ref: t,
            children: v.isValidElement(i) ? v.cloneElement(i, void 0, l) : null
        })
    }
    return w.jsx(yl, {
        ...r,
        ref: t,
        children: n
    })
}
);
eo.displayName = "Slot";
var yl = v.forwardRef( (e, t) => {
    const {children: n, ...r} = e;
    if (v.isValidElement(n)) {
        const o = eg(n);
        return v.cloneElement(n, {
            ...Jy(r, n.props),
            ref: t ? Xf(t, o) : o
        })
    }
    return v.Children.count(n) > 1 ? v.Children.only(null) : null
}
);
yl.displayName = "SlotClone";
var Xy = ({children: e}) => w.jsx(w.Fragment, {
    children: e
});
function Zy(e) {
    return v.isValidElement(e) && e.type === Xy
}
function Jy(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const o = e[r]
          , s = t[r];
        /^on[A-Z]/.test(r) ? o && s ? n[r] = (...l) => {
            s(...l),
            o(...l)
        }
        : o && (n[r] = o) : r === "style" ? n[r] = {
            ...o,
            ...s
        } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function eg(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function Zf(e) {
    const t = e + "CollectionProvider"
      , [n,r] = qy(t)
      , [o,s] = n(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , i = x => {
        const {scope: g, children: y} = x
          , E = It.useRef(null)
          , h = It.useRef(new Map).current;
        return w.jsx(o, {
            scope: g,
            itemMap: h,
            collectionRef: E,
            children: y
        })
    }
    ;
    i.displayName = t;
    const l = e + "CollectionSlot"
      , a = It.forwardRef( (x, g) => {
        const {scope: y, children: E} = x
          , h = s(l, y)
          , c = Jt(g, h.collectionRef);
        return w.jsx(eo, {
            ref: c,
            children: E
        })
    }
    );
    a.displayName = l;
    const u = e + "CollectionItemSlot"
      , d = "data-radix-collection-item"
      , p = It.forwardRef( (x, g) => {
        const {scope: y, children: E, ...h} = x
          , c = It.useRef(null)
          , m = Jt(g, c)
          , S = s(u, y);
        return It.useEffect( () => (S.itemMap.set(c, {
            ref: c,
            ...h
        }),
        () => void S.itemMap.delete(c))),
        w.jsx(eo, {
            [d]: "",
            ref: m,
            children: E
        })
    }
    );
    p.displayName = u;
    function f(x) {
        const g = s(e + "CollectionConsumer", x);
        return It.useCallback( () => {
            const E = g.collectionRef.current;
            if (!E)
                return [];
            const h = Array.from(E.querySelectorAll(`[${d}]`));
            return Array.from(g.itemMap.values()).sort( (S, k) => h.indexOf(S.ref.current) - h.indexOf(k.ref.current))
        }
        , [g.collectionRef, g.itemMap])
    }
    return [{
        Provider: i,
        Slot: a,
        ItemSlot: p
    }, f, r]
}
function Jf(e, t=[]) {
    let n = [];
    function r(s, i) {
        const l = v.createContext(i)
          , a = n.length;
        n = [...n, i];
        const u = p => {
            var h;
            const {scope: f, children: x, ...g} = p
              , y = ((h = f == null ? void 0 : f[e]) == null ? void 0 : h[a]) || l
              , E = v.useMemo( () => g, Object.values(g));
            return w.jsx(y.Provider, {
                value: E,
                children: x
            })
        }
        ;
        u.displayName = s + "Provider";
        function d(p, f) {
            var y;
            const x = ((y = f == null ? void 0 : f[e]) == null ? void 0 : y[a]) || l
              , g = v.useContext(x);
            if (g)
                return g;
            if (i !== void 0)
                return i;
            throw new Error(`\`${p}\` must be used within \`${s}\``)
        }
        return [u, d]
    }
    const o = () => {
        const s = n.map(i => v.createContext(i));
        return function(l) {
            const a = (l == null ? void 0 : l[e]) || s;
            return v.useMemo( () => ({
                [`__scope${e}`]: {
                    ...l,
                    [e]: a
                }
            }), [l, a])
        }
    }
    ;
    return o.scopeName = e,
    [r, tg(o, ...t)]
}
function tg(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(s) {
            const i = r.reduce( (l, {useScope: a, scopeName: u}) => {
                const p = a(s)[`__scope${u}`];
                return {
                    ...l,
                    ...p
                }
            }
            , {});
            return v.useMemo( () => ({
                [`__scope${t.scopeName}`]: i
            }), [i])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
var ng = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"]
  , Se = ng.reduce( (e, t) => {
    const n = v.forwardRef( (r, o) => {
        const {asChild: s, ...i} = r
          , l = s ? eo : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        w.jsx(l, {
            ...i,
            ref: o
        })
    }
    );
    return n.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: n
    }
}
, {});
function ep(e, t) {
    e && js.flushSync( () => e.dispatchEvent(t))
}
function pt(e) {
    const t = v.useRef(e);
    return v.useEffect( () => {
        t.current = e
    }
    ),
    v.useMemo( () => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }
    , [])
}
function rg(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = pt(e);
    v.useEffect( () => {
        const r = o => {
            o.key === "Escape" && n(o)
        }
        ;
        return t.addEventListener("keydown", r, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }
    , [n, t])
}
var og = "DismissableLayer", gl = "dismissableLayer.update", sg = "dismissableLayer.pointerDownOutside", ig = "dismissableLayer.focusOutside", tc, tp = v.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), np = v.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: s, onInteractOutside: i, onDismiss: l, ...a} = e
      , u = v.useContext(tp)
      , [d,p] = v.useState(null)
      , f = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,x] = v.useState({})
      , g = Jt(t, P => p(P))
      , y = Array.from(u.layers)
      , [E] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
      , h = y.indexOf(E)
      , c = d ? y.indexOf(d) : -1
      , m = u.layersWithOutsidePointerEventsDisabled.size > 0
      , S = c >= h
      , k = ag(P => {
        const _ = P.target
          , j = [...u.branches].some(O => O.contains(_));
        !S || j || (o == null || o(P),
        i == null || i(P),
        P.defaultPrevented || l == null || l())
    }
    , f)
      , N = ug(P => {
        const _ = P.target;
        [...u.branches].some(O => O.contains(_)) || (s == null || s(P),
        i == null || i(P),
        P.defaultPrevented || l == null || l())
    }
    , f);
    return rg(P => {
        c === u.layers.size - 1 && (r == null || r(P),
        !P.defaultPrevented && l && (P.preventDefault(),
        l()))
    }
    , f),
    v.useEffect( () => {
        if (d)
            return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (tc = f.body.style.pointerEvents,
            f.body.style.pointerEvents = "none"),
            u.layersWithOutsidePointerEventsDisabled.add(d)),
            u.layers.add(d),
            nc(),
            () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = tc)
            }
    }
    , [d, f, n, u]),
    v.useEffect( () => () => {
        d && (u.layers.delete(d),
        u.layersWithOutsidePointerEventsDisabled.delete(d),
        nc())
    }
    , [d, u]),
    v.useEffect( () => {
        const P = () => x({});
        return document.addEventListener(gl, P),
        () => document.removeEventListener(gl, P)
    }
    , []),
    w.jsx(Se.div, {
        ...a,
        ref: g,
        style: {
            pointerEvents: m ? S ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: re(e.onFocusCapture, N.onFocusCapture),
        onBlurCapture: re(e.onBlurCapture, N.onBlurCapture),
        onPointerDownCapture: re(e.onPointerDownCapture, k.onPointerDownCapture)
    })
}
);
np.displayName = og;
var lg = "DismissableLayerBranch"
  , rp = v.forwardRef( (e, t) => {
    const n = v.useContext(tp)
      , r = v.useRef(null)
      , o = Jt(t, r);
    return v.useEffect( () => {
        const s = r.current;
        if (s)
            return n.branches.add(s),
            () => {
                n.branches.delete(s)
            }
    }
    , [n.branches]),
    w.jsx(Se.div, {
        ...e,
        ref: o
    })
}
);
rp.displayName = lg;
function ag(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = pt(e)
      , r = v.useRef(!1)
      , o = v.useRef( () => {}
    );
    return v.useEffect( () => {
        const s = l => {
            if (l.target && !r.current) {
                let a = function() {
                    op(sg, n, u, {
                        discrete: !0
                    })
                };
                const u = {
                    originalEvent: l
                };
                l.pointerType === "touch" ? (t.removeEventListener("click", o.current),
                o.current = a,
                t.addEventListener("click", o.current, {
                    once: !0
                })) : a()
            } else
                t.removeEventListener("click", o.current);
            r.current = !1
        }
          , i = window.setTimeout( () => {
            t.addEventListener("pointerdown", s)
        }
        , 0);
        return () => {
            window.clearTimeout(i),
            t.removeEventListener("pointerdown", s),
            t.removeEventListener("click", o.current)
        }
    }
    , [t, n]),
    {
        onPointerDownCapture: () => r.current = !0
    }
}
function ug(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = pt(e)
      , r = v.useRef(!1);
    return v.useEffect( () => {
        const o = s => {
            s.target && !r.current && op(ig, n, {
                originalEvent: s
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
    }
    , [t, n]),
    {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}
function nc() {
    const e = new CustomEvent(gl);
    document.dispatchEvent(e)
}
function op(e, t, n, {discrete: r}) {
    const o = n.originalEvent.target
      , s = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? ep(o, s) : o.dispatchEvent(s)
}
var cg = np
  , dg = rp
  , to = globalThis != null && globalThis.document ? v.useLayoutEffect : () => {}
  , fg = "Portal"
  , sp = v.forwardRef( (e, t) => {
    var l;
    const {container: n, ...r} = e
      , [o,s] = v.useState(!1);
    to( () => s(!0), []);
    const i = n || o && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
    return i ? zv.createPortal(w.jsx(Se.div, {
        ...r,
        ref: t
    }), i) : null
}
);
sp.displayName = fg;
function pg(e, t) {
    return v.useReducer( (n, r) => t[n][r] ?? n, e)
}
var Ca = e => {
    const {present: t, children: n} = e
      , r = hg(t)
      , o = typeof n == "function" ? n({
        present: r.isPresent
    }) : v.Children.only(n)
      , s = Jt(r.ref, mg(o));
    return typeof n == "function" || r.isPresent ? v.cloneElement(o, {
        ref: s
    }) : null
}
;
Ca.displayName = "Presence";
function hg(e) {
    const [t,n] = v.useState()
      , r = v.useRef({})
      , o = v.useRef(e)
      , s = v.useRef("none")
      , i = e ? "mounted" : "unmounted"
      , [l,a] = pg(i, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return v.useEffect( () => {
        const u = Io(r.current);
        s.current = l === "mounted" ? u : "none"
    }
    , [l]),
    to( () => {
        const u = r.current
          , d = o.current;
        if (d !== e) {
            const f = s.current
              , x = Io(u);
            e ? a("MOUNT") : x === "none" || (u == null ? void 0 : u.display) === "none" ? a("UNMOUNT") : a(d && f !== x ? "ANIMATION_OUT" : "UNMOUNT"),
            o.current = e
        }
    }
    , [e, a]),
    to( () => {
        if (t) {
            let u;
            const d = t.ownerDocument.defaultView ?? window
              , p = x => {
                const y = Io(r.current).includes(x.animationName);
                if (x.target === t && y && (a("ANIMATION_END"),
                !o.current)) {
                    const E = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    u = d.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = E)
                    }
                    )
                }
            }
              , f = x => {
                x.target === t && (s.current = Io(r.current))
            }
            ;
            return t.addEventListener("animationstart", f),
            t.addEventListener("animationcancel", p),
            t.addEventListener("animationend", p),
            () => {
                d.clearTimeout(u),
                t.removeEventListener("animationstart", f),
                t.removeEventListener("animationcancel", p),
                t.removeEventListener("animationend", p)
            }
        } else
            a("ANIMATION_END")
    }
    , [t, a]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(l),
        ref: v.useCallback(u => {
            u && (r.current = getComputedStyle(u)),
            n(u)
        }
        , [])
    }
}
function Io(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function mg(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function ka({prop: e, defaultProp: t, onChange: n= () => {}
}) {
    const [r,o] = vg({
        defaultProp: t,
        onChange: n
    })
      , s = e !== void 0
      , i = s ? e : r
      , l = pt(n)
      , a = v.useCallback(u => {
        if (s) {
            const p = typeof u == "function" ? u(e) : u;
            p !== e && l(p)
        } else
            o(u)
    }
    , [s, e, o, l]);
    return [i, a]
}
function vg({defaultProp: e, onChange: t}) {
    const n = v.useState(e)
      , [r] = n
      , o = v.useRef(r)
      , s = pt(t);
    return v.useEffect( () => {
        o.current !== r && (s(r),
        o.current = r)
    }
    , [r, o, s]),
    n
}
var yg = "VisuallyHidden"
  , _a = v.forwardRef( (e, t) => w.jsx(Se.span, {
    ...e,
    ref: t,
    style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style
    }
}));
_a.displayName = yg;
var Pa = "ToastProvider"
  , [Ta,gg,wg] = Zf("Toast")
  , [ip,dw] = Jf("Toast", [wg])
  , [xg,Ds] = ip(Pa)
  , lp = e => {
    const {__scopeToast: t, label: n="Notification", duration: r=5e3, swipeDirection: o="right", swipeThreshold: s=50, children: i} = e
      , [l,a] = v.useState(null)
      , [u,d] = v.useState(0)
      , p = v.useRef(!1)
      , f = v.useRef(!1);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${Pa}\`. Expected non-empty \`string\`.`),
    w.jsx(Ta.Provider, {
        scope: t,
        children: w.jsx(xg, {
            scope: t,
            label: n,
            duration: r,
            swipeDirection: o,
            swipeThreshold: s,
            toastCount: u,
            viewport: l,
            onViewportChange: a,
            onToastAdd: v.useCallback( () => d(x => x + 1), []),
            onToastRemove: v.useCallback( () => d(x => x - 1), []),
            isFocusedToastEscapeKeyDownRef: p,
            isClosePausedRef: f,
            children: i
        })
    })
}
;
lp.displayName = Pa;
var ap = "ToastViewport"
  , Sg = ["F8"]
  , wl = "toast.viewportPause"
  , xl = "toast.viewportResume"
  , up = v.forwardRef( (e, t) => {
    const {__scopeToast: n, hotkey: r=Sg, label: o="Notifications ({hotkey})", ...s} = e
      , i = Ds(ap, n)
      , l = gg(n)
      , a = v.useRef(null)
      , u = v.useRef(null)
      , d = v.useRef(null)
      , p = v.useRef(null)
      , f = Jt(t, p, i.onViewportChange)
      , x = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , g = i.toastCount > 0;
    v.useEffect( () => {
        const E = h => {
            var m;
            r.length !== 0 && r.every(S => h[S] || h.code === S) && ((m = p.current) == null || m.focus())
        }
        ;
        return document.addEventListener("keydown", E),
        () => document.removeEventListener("keydown", E)
    }
    , [r]),
    v.useEffect( () => {
        const E = a.current
          , h = p.current;
        if (g && E && h) {
            const c = () => {
                if (!i.isClosePausedRef.current) {
                    const N = new CustomEvent(wl);
                    h.dispatchEvent(N),
                    i.isClosePausedRef.current = !0
                }
            }
              , m = () => {
                if (i.isClosePausedRef.current) {
                    const N = new CustomEvent(xl);
                    h.dispatchEvent(N),
                    i.isClosePausedRef.current = !1
                }
            }
              , S = N => {
                !E.contains(N.relatedTarget) && m()
            }
              , k = () => {
                E.contains(document.activeElement) || m()
            }
            ;
            return E.addEventListener("focusin", c),
            E.addEventListener("focusout", S),
            E.addEventListener("pointermove", c),
            E.addEventListener("pointerleave", k),
            window.addEventListener("blur", c),
            window.addEventListener("focus", m),
            () => {
                E.removeEventListener("focusin", c),
                E.removeEventListener("focusout", S),
                E.removeEventListener("pointermove", c),
                E.removeEventListener("pointerleave", k),
                window.removeEventListener("blur", c),
                window.removeEventListener("focus", m)
            }
        }
    }
    , [g, i.isClosePausedRef]);
    const y = v.useCallback( ({tabbingDirection: E}) => {
        const c = l().map(m => {
            const S = m.ref.current
              , k = [S, ...Mg(S)];
            return E === "forwards" ? k : k.reverse()
        }
        );
        return (E === "forwards" ? c.reverse() : c).flat()
    }
    , [l]);
    return v.useEffect( () => {
        const E = p.current;
        if (E) {
            const h = c => {
                var k, N, P;
                const m = c.altKey || c.ctrlKey || c.metaKey;
                if (c.key === "Tab" && !m) {
                    const _ = document.activeElement
                      , j = c.shiftKey;
                    if (c.target === E && j) {
                        (k = u.current) == null || k.focus();
                        return
                    }
                    const D = y({
                        tabbingDirection: j ? "backwards" : "forwards"
                    })
                      , Ee = D.findIndex(M => M === _);
                    Si(D.slice(Ee + 1)) ? c.preventDefault() : j ? (N = u.current) == null || N.focus() : (P = d.current) == null || P.focus()
                }
            }
            ;
            return E.addEventListener("keydown", h),
            () => E.removeEventListener("keydown", h)
        }
    }
    , [l, y]),
    w.jsxs(dg, {
        ref: a,
        role: "region",
        "aria-label": o.replace("{hotkey}", x),
        tabIndex: -1,
        style: {
            pointerEvents: g ? void 0 : "none"
        },
        children: [g && w.jsx(Sl, {
            ref: u,
            onFocusFromOutsideViewport: () => {
                const E = y({
                    tabbingDirection: "forwards"
                });
                Si(E)
            }
        }), w.jsx(Ta.Slot, {
            scope: n,
            children: w.jsx(Se.ol, {
                tabIndex: -1,
                ...s,
                ref: f
            })
        }), g && w.jsx(Sl, {
            ref: d,
            onFocusFromOutsideViewport: () => {
                const E = y({
                    tabbingDirection: "backwards"
                });
                Si(E)
            }
        })]
    })
}
);
up.displayName = ap;
var cp = "ToastFocusProxy"
  , Sl = v.forwardRef( (e, t) => {
    const {__scopeToast: n, onFocusFromOutsideViewport: r, ...o} = e
      , s = Ds(cp, n);
    return w.jsx(_a, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...o,
        ref: t,
        style: {
            position: "fixed"
        },
        onFocus: i => {
            var u;
            const l = i.relatedTarget;
            !((u = s.viewport) != null && u.contains(l)) && r()
        }
    })
}
);
Sl.displayName = cp;
var zs = "Toast"
  , Eg = "toast.swipeStart"
  , Cg = "toast.swipeMove"
  , kg = "toast.swipeCancel"
  , _g = "toast.swipeEnd"
  , dp = v.forwardRef( (e, t) => {
    const {forceMount: n, open: r, defaultOpen: o, onOpenChange: s, ...i} = e
      , [l=!0,a] = ka({
        prop: r,
        defaultProp: o,
        onChange: s
    });
    return w.jsx(Ca, {
        present: n || l,
        children: w.jsx(Ng, {
            open: l,
            ...i,
            ref: t,
            onClose: () => a(!1),
            onPause: pt(e.onPause),
            onResume: pt(e.onResume),
            onSwipeStart: re(e.onSwipeStart, u => {
                u.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: re(e.onSwipeMove, u => {
                const {x: d, y: p} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "move"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${d}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${p}px`)
            }
            ),
            onSwipeCancel: re(e.onSwipeCancel, u => {
                u.currentTarget.setAttribute("data-swipe", "cancel"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: re(e.onSwipeEnd, u => {
                const {x: d, y: p} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "end"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${d}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${p}px`),
                a(!1)
            }
            )
        })
    })
}
);
dp.displayName = zs;
var [Pg,Tg] = ip(zs, {
    onClose() {}
})
  , Ng = v.forwardRef( (e, t) => {
    const {__scopeToast: n, type: r="foreground", duration: o, open: s, onClose: i, onEscapeKeyDown: l, onPause: a, onResume: u, onSwipeStart: d, onSwipeMove: p, onSwipeCancel: f, onSwipeEnd: x, ...g} = e
      , y = Ds(zs, n)
      , [E,h] = v.useState(null)
      , c = Jt(t, M => h(M))
      , m = v.useRef(null)
      , S = v.useRef(null)
      , k = o || y.duration
      , N = v.useRef(0)
      , P = v.useRef(k)
      , _ = v.useRef(0)
      , {onToastAdd: j, onToastRemove: O} = y
      , W = pt( () => {
        var ie;
        (E == null ? void 0 : E.contains(document.activeElement)) && ((ie = y.viewport) == null || ie.focus()),
        i()
    }
    )
      , D = v.useCallback(M => {
        !M || M === 1 / 0 || (window.clearTimeout(_.current),
        N.current = new Date().getTime(),
        _.current = window.setTimeout(W, M))
    }
    , [W]);
    v.useEffect( () => {
        const M = y.viewport;
        if (M) {
            const ie = () => {
                D(P.current),
                u == null || u()
            }
              , H = () => {
                const Ue = new Date().getTime() - N.current;
                P.current = P.current - Ue,
                window.clearTimeout(_.current),
                a == null || a()
            }
            ;
            return M.addEventListener(wl, H),
            M.addEventListener(xl, ie),
            () => {
                M.removeEventListener(wl, H),
                M.removeEventListener(xl, ie)
            }
        }
    }
    , [y.viewport, k, a, u, D]),
    v.useEffect( () => {
        s && !y.isClosePausedRef.current && D(k)
    }
    , [s, k, y.isClosePausedRef, D]),
    v.useEffect( () => (j(),
    () => O()), [j, O]);
    const Ee = v.useMemo( () => E ? gp(E) : null, [E]);
    return y.viewport ? w.jsxs(w.Fragment, {
        children: [Ee && w.jsx(Rg, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: Ee
        }), w.jsx(Pg, {
            scope: n,
            onClose: W,
            children: js.createPortal(w.jsx(Ta.ItemSlot, {
                scope: n,
                children: w.jsx(cg, {
                    asChild: !0,
                    onEscapeKeyDown: re(l, () => {
                        y.isFocusedToastEscapeKeyDownRef.current || W(),
                        y.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: w.jsx(Se.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": s ? "open" : "closed",
                        "data-swipe-direction": y.swipeDirection,
                        ...g,
                        ref: c,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: re(e.onKeyDown, M => {
                            M.key === "Escape" && (l == null || l(M.nativeEvent),
                            M.nativeEvent.defaultPrevented || (y.isFocusedToastEscapeKeyDownRef.current = !0,
                            W()))
                        }
                        ),
                        onPointerDown: re(e.onPointerDown, M => {
                            M.button === 0 && (m.current = {
                                x: M.clientX,
                                y: M.clientY
                            })
                        }
                        ),
                        onPointerMove: re(e.onPointerMove, M => {
                            if (!m.current)
                                return;
                            const ie = M.clientX - m.current.x
                              , H = M.clientY - m.current.y
                              , Ue = !!S.current
                              , R = ["left", "right"].includes(y.swipeDirection)
                              , A = ["left", "up"].includes(y.swipeDirection) ? Math.min : Math.max
                              , L = R ? A(0, ie) : 0
                              , $ = R ? 0 : A(0, H)
                              , ee = M.pointerType === "touch" ? 10 : 2
                              , ht = {
                                x: L,
                                y: $
                            }
                              , ot = {
                                originalEvent: M,
                                delta: ht
                            };
                            Ue ? (S.current = ht,
                            Ao(Cg, p, ot, {
                                discrete: !1
                            })) : rc(ht, y.swipeDirection, ee) ? (S.current = ht,
                            Ao(Eg, d, ot, {
                                discrete: !1
                            }),
                            M.target.setPointerCapture(M.pointerId)) : (Math.abs(ie) > ee || Math.abs(H) > ee) && (m.current = null)
                        }
                        ),
                        onPointerUp: re(e.onPointerUp, M => {
                            const ie = S.current
                              , H = M.target;
                            if (H.hasPointerCapture(M.pointerId) && H.releasePointerCapture(M.pointerId),
                            S.current = null,
                            m.current = null,
                            ie) {
                                const Ue = M.currentTarget
                                  , R = {
                                    originalEvent: M,
                                    delta: ie
                                };
                                rc(ie, y.swipeDirection, y.swipeThreshold) ? Ao(_g, x, R, {
                                    discrete: !0
                                }) : Ao(kg, f, R, {
                                    discrete: !0
                                }),
                                Ue.addEventListener("click", A => A.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), y.viewport)
        })]
    }) : null
}
)
  , Rg = e => {
    const {__scopeToast: t, children: n, ...r} = e
      , o = Ds(zs, t)
      , [s,i] = v.useState(!1)
      , [l,a] = v.useState(!1);
    return Og( () => i(!0)),
    v.useEffect( () => {
        const u = window.setTimeout( () => a(!0), 1e3);
        return () => window.clearTimeout(u)
    }
    , []),
    l ? null : w.jsx(sp, {
        asChild: !0,
        children: w.jsx(_a, {
            ...r,
            children: s && w.jsxs(w.Fragment, {
                children: [o.label, " ", n]
            })
        })
    })
}
  , Ig = "ToastTitle"
  , fp = v.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return w.jsx(Se.div, {
        ...r,
        ref: t
    })
}
);
fp.displayName = Ig;
var Ag = "ToastDescription"
  , pp = v.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return w.jsx(Se.div, {
        ...r,
        ref: t
    })
}
);
pp.displayName = Ag;
var hp = "ToastAction"
  , mp = v.forwardRef( (e, t) => {
    const {altText: n, ...r} = e;
    return n.trim() ? w.jsx(yp, {
        altText: n,
        asChild: !0,
        children: w.jsx(Na, {
            ...r,
            ref: t
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${hp}\`. Expected non-empty \`string\`.`),
    null)
}
);
mp.displayName = hp;
var vp = "ToastClose"
  , Na = v.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e
      , o = Tg(vp, n);
    return w.jsx(yp, {
        asChild: !0,
        children: w.jsx(Se.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: re(e.onClick, o.onClose)
        })
    })
}
);
Na.displayName = vp;
var yp = v.forwardRef( (e, t) => {
    const {__scopeToast: n, altText: r, ...o} = e;
    return w.jsx(Se.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t
    })
}
);
function gp(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        jg(r)) {
            const o = r.ariaHidden || r.hidden || r.style.display === "none"
              , s = r.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (s) {
                    const i = r.dataset.radixToastAnnounceAlt;
                    i && t.push(i)
                } else
                    t.push(...gp(r))
        }
    }
    ),
    t
}
function Ao(e, t, n, {discrete: r}) {
    const o = n.originalEvent.currentTarget
      , s = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? ep(o, s) : o.dispatchEvent(s)
}
var rc = (e, t, n=0) => {
    const r = Math.abs(e.x)
      , o = Math.abs(e.y)
      , s = r > o;
    return t === "left" || t === "right" ? s && r > n : !s && o > n
}
;
function Og(e= () => {}
) {
    const t = pt(e);
    to( () => {
        let n = 0
          , r = 0;
        return n = window.requestAnimationFrame( () => r = window.requestAnimationFrame(t)),
        () => {
            window.cancelAnimationFrame(n),
            window.cancelAnimationFrame(r)
        }
    }
    , [t])
}
function jg(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function Mg(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function Si(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(),
    document.activeElement !== t))
}
var Lg = lp
  , wp = up
  , xp = dp
  , Sp = fp
  , Ep = pp
  , Cp = mp
  , kp = Na;
function _p(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e))
            for (t = 0; t < e.length; t++)
                e[t] && (n = _p(e[t])) && (r && (r += " "),
                r += n);
        else
            for (t in e)
                e[t] && (r && (r += " "),
                r += t);
    return r
}
function Fg() {
    for (var e, t, n = 0, r = ""; n < arguments.length; )
        (e = arguments[n++]) && (t = _p(e)) && (r && (r += " "),
        r += t);
    return r
}
const oc = e => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e
  , sc = Fg
  , Pp = (e, t) => n => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
        return sc(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {variants: o, defaultVariants: s} = t
      , i = Object.keys(o).map(u => {
        const d = n == null ? void 0 : n[u]
          , p = s == null ? void 0 : s[u];
        if (d === null)
            return null;
        const f = oc(d) || oc(p);
        return o[u][f]
    }
    )
      , l = n && Object.entries(n).reduce( (u, d) => {
        let[p,f] = d;
        return f === void 0 || (u[p] = f),
        u
    }
    , {})
      , a = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce( (u, d) => {
        let {class: p, className: f, ...x} = d;
        return Object.entries(x).every(g => {
            let[y,E] = g;
            return Array.isArray(E) ? E.includes({
                ...s,
                ...l
            }[y]) : {
                ...s,
                ...l
            }[y] === E
        }
        ) ? [...u, p, f] : u
    }
    , []);
    return sc(e, i, a, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
}
;
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dg = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , Tp = (...e) => e.filter( (t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var zg = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bg = v.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: n=2, absoluteStrokeWidth: r, className: o="", children: s, iconNode: i, ...l}, a) => v.createElement("svg", {
    ref: a,
    ...zg,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: Tp("lucide", o),
    ...l
}, [...i.map( ([u,d]) => v.createElement(u, d)), ...Array.isArray(s) ? s : [s]]));
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rn = (e, t) => {
    const n = v.forwardRef( ({className: r, ...o}, s) => v.createElement(bg, {
        ref: s,
        iconNode: t,
        className: Tp(`lucide-${Dg(e)}`, r),
        ...o
    }));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $g = rn("CircleAlert", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "8",
    y2: "12",
    key: "1pkeuh"
}], ["line", {
    x1: "12",
    x2: "12.01",
    y1: "16",
    y2: "16",
    key: "4dfq90"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ug = rn("ExternalLink", [["path", {
    d: "M15 3h6v6",
    key: "1q9fwt"
}], ["path", {
    d: "M10 14 21 3",
    key: "gplh6r"
}], ["path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
    key: "a6xqqp"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vg = rn("Facebook", [["path", {
    d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
    key: "1jg4f8"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bg = rn("Github", [["path", {
    d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
    key: "tonef"
}], ["path", {
    d: "M9 18c-4.51 2-5-2-7-2",
    key: "9comsn"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wg = rn("Instagram", [["rect", {
    width: "20",
    height: "20",
    x: "2",
    y: "2",
    rx: "5",
    ry: "5",
    key: "2e1cvw"
}], ["path", {
    d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
    key: "9exkf1"
}], ["line", {
    x1: "17.5",
    x2: "17.51",
    y1: "6.5",
    y2: "6.5",
    key: "r4j83e"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Np = rn("Search", [["circle", {
    cx: "11",
    cy: "11",
    r: "8",
    key: "4ej97u"
}], ["path", {
    d: "m21 21-4.3-4.3",
    key: "1qie3q"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qg = rn("Twitter", [["path", {
    d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
    key: "pff0z6"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hg = rn("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]);
function Rp(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++)
                e[t] && (n = Rp(e[t])) && (r && (r += " "),
                r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                r += n);
    return r
}
function Kg() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
        (e = arguments[n]) && (t = Rp(e)) && (r && (r += " "),
        r += t);
    return r
}
const Ra = "-"
  , Gg = e => {
    const t = Yg(e)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: r} = e;
    return {
        getClassGroupId: i => {
            const l = i.split(Ra);
            return l[0] === "" && l.length !== 1 && l.shift(),
            Ip(l, t) || qg(i)
        }
        ,
        getConflictingClassGroupIds: (i, l) => {
            const a = n[i] || [];
            return l && r[i] ? [...a, ...r[i]] : a
        }
    }
}
  , Ip = (e, t) => {
    var i;
    if (e.length === 0)
        return t.classGroupId;
    const n = e[0]
      , r = t.nextPart.get(n)
      , o = r ? Ip(e.slice(1), r) : void 0;
    if (o)
        return o;
    if (t.validators.length === 0)
        return;
    const s = e.join(Ra);
    return (i = t.validators.find( ({validator: l}) => l(s))) == null ? void 0 : i.classGroupId
}
  , ic = /^\[(.+)\]$/
  , qg = e => {
    if (ic.test(e)) {
        const t = ic.exec(e)[1]
          , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
  , Yg = e => {
    const {theme: t, prefix: n} = e
      , r = {
        nextPart: new Map,
        validators: []
    };
    return Zg(Object.entries(e.classGroups), n).forEach( ([s,i]) => {
        El(i, r, s, t)
    }
    ),
    r
}
  , El = (e, t, n, r) => {
    e.forEach(o => {
        if (typeof o == "string") {
            const s = o === "" ? t : lc(t, o);
            s.classGroupId = n;
            return
        }
        if (typeof o == "function") {
            if (Xg(o)) {
                El(o(r), t, n, r);
                return
            }
            t.validators.push({
                validator: o,
                classGroupId: n
            });
            return
        }
        Object.entries(o).forEach( ([s,i]) => {
            El(i, lc(t, s), n, r)
        }
        )
    }
    )
}
  , lc = (e, t) => {
    let n = e;
    return t.split(Ra).forEach(r => {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(r)
    }
    ),
    n
}
  , Xg = e => e.isThemeGetter
  , Zg = (e, t) => t ? e.map( ([n,r]) => {
    const o = r.map(s => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map( ([i,l]) => [t + i, l])) : s);
    return [n, o]
}
) : e
  , Jg = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , n = new Map
      , r = new Map;
    const o = (s, i) => {
        n.set(s, i),
        t++,
        t > e && (t = 0,
        r = n,
        n = new Map)
    }
    ;
    return {
        get(s) {
            let i = n.get(s);
            if (i !== void 0)
                return i;
            if ((i = r.get(s)) !== void 0)
                return o(s, i),
                i
        },
        set(s, i) {
            n.has(s) ? n.set(s, i) : o(s, i)
        }
    }
}
  , Ap = "!"
  , e0 = e => {
    const {separator: t, experimentalParseClassName: n} = e
      , r = t.length === 1
      , o = t[0]
      , s = t.length
      , i = l => {
        const a = [];
        let u = 0, d = 0, p;
        for (let E = 0; E < l.length; E++) {
            let h = l[E];
            if (u === 0) {
                if (h === o && (r || l.slice(E, E + s) === t)) {
                    a.push(l.slice(d, E)),
                    d = E + s;
                    continue
                }
                if (h === "/") {
                    p = E;
                    continue
                }
            }
            h === "[" ? u++ : h === "]" && u--
        }
        const f = a.length === 0 ? l : l.substring(d)
          , x = f.startsWith(Ap)
          , g = x ? f.substring(1) : f
          , y = p && p > d ? p - d : void 0;
        return {
            modifiers: a,
            hasImportantModifier: x,
            baseClassName: g,
            maybePostfixModifierPosition: y
        }
    }
    ;
    return n ? l => n({
        className: l,
        parseClassName: i
    }) : i
}
  , t0 = e => {
    if (e.length <= 1)
        return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
        r[0] === "[" ? (t.push(...n.sort(), r),
        n = []) : n.push(r)
    }
    ),
    t.push(...n.sort()),
    t
}
  , n0 = e => ({
    cache: Jg(e.cacheSize),
    parseClassName: e0(e),
    ...Gg(e)
})
  , r0 = /\s+/
  , o0 = (e, t) => {
    const {parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o} = t
      , s = []
      , i = e.trim().split(r0);
    let l = "";
    for (let a = i.length - 1; a >= 0; a -= 1) {
        const u = i[a]
          , {modifiers: d, hasImportantModifier: p, baseClassName: f, maybePostfixModifierPosition: x} = n(u);
        let g = !!x
          , y = r(g ? f.substring(0, x) : f);
        if (!y) {
            if (!g) {
                l = u + (l.length > 0 ? " " + l : l);
                continue
            }
            if (y = r(f),
            !y) {
                l = u + (l.length > 0 ? " " + l : l);
                continue
            }
            g = !1
        }
        const E = t0(d).join(":")
          , h = p ? E + Ap : E
          , c = h + y;
        if (s.includes(c))
            continue;
        s.push(c);
        const m = o(y, g);
        for (let S = 0; S < m.length; ++S) {
            const k = m[S];
            s.push(h + k)
        }
        l = u + (l.length > 0 ? " " + l : l)
    }
    return l
}
;
function s0() {
    let e = 0, t, n, r = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (n = Op(t)) && (r && (r += " "),
        r += n);
    return r
}
const Op = e => {
    if (typeof e == "string")
        return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++)
        e[r] && (t = Op(e[r])) && (n && (n += " "),
        n += t);
    return n
}
;
function i0(e, ...t) {
    let n, r, o, s = i;
    function i(a) {
        const u = t.reduce( (d, p) => p(d), e());
        return n = n0(u),
        r = n.cache.get,
        o = n.cache.set,
        s = l,
        l(a)
    }
    function l(a) {
        const u = r(a);
        if (u)
            return u;
        const d = o0(a, n);
        return o(a, d),
        d
    }
    return function() {
        return s(s0.apply(null, arguments))
    }
}
const K = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , jp = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , l0 = /^\d+\/\d+$/
  , a0 = new Set(["px", "full", "screen"])
  , u0 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , c0 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , d0 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , f0 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , p0 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , mt = e => Bn(e) || a0.has(e) || l0.test(e)
  , Nt = e => cr(e, "length", S0)
  , Bn = e => !!e && !Number.isNaN(Number(e))
  , Ei = e => cr(e, "number", Bn)
  , wr = e => !!e && Number.isInteger(Number(e))
  , h0 = e => e.endsWith("%") && Bn(e.slice(0, -1))
  , F = e => jp.test(e)
  , Rt = e => u0.test(e)
  , m0 = new Set(["length", "size", "percentage"])
  , v0 = e => cr(e, m0, Mp)
  , y0 = e => cr(e, "position", Mp)
  , g0 = new Set(["image", "url"])
  , w0 = e => cr(e, g0, C0)
  , x0 = e => cr(e, "", E0)
  , xr = () => !0
  , cr = (e, t, n) => {
    const r = jp.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
}
  , S0 = e => c0.test(e) && !d0.test(e)
  , Mp = () => !1
  , E0 = e => f0.test(e)
  , C0 = e => p0.test(e)
  , k0 = () => {
    const e = K("colors")
      , t = K("spacing")
      , n = K("blur")
      , r = K("brightness")
      , o = K("borderColor")
      , s = K("borderRadius")
      , i = K("borderSpacing")
      , l = K("borderWidth")
      , a = K("contrast")
      , u = K("grayscale")
      , d = K("hueRotate")
      , p = K("invert")
      , f = K("gap")
      , x = K("gradientColorStops")
      , g = K("gradientColorStopPositions")
      , y = K("inset")
      , E = K("margin")
      , h = K("opacity")
      , c = K("padding")
      , m = K("saturate")
      , S = K("scale")
      , k = K("sepia")
      , N = K("skew")
      , P = K("space")
      , _ = K("translate")
      , j = () => ["auto", "contain", "none"]
      , O = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , W = () => ["auto", F, t]
      , D = () => [F, t]
      , Ee = () => ["", mt, Nt]
      , M = () => ["auto", Bn, F]
      , ie = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , H = () => ["solid", "dashed", "dotted", "double", "none"]
      , Ue = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , R = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , A = () => ["", "0", F]
      , L = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , $ = () => [Bn, F];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [xr],
            spacing: [mt, Nt],
            blur: ["none", "", Rt, F],
            brightness: $(),
            borderColor: [e],
            borderRadius: ["none", "", "full", Rt, F],
            borderSpacing: D(),
            borderWidth: Ee(),
            contrast: $(),
            grayscale: A(),
            hueRotate: $(),
            invert: A(),
            gap: D(),
            gradientColorStops: [e],
            gradientColorStopPositions: [h0, Nt],
            inset: W(),
            margin: W(),
            opacity: $(),
            padding: D(),
            saturate: $(),
            scale: $(),
            sepia: A(),
            skew: $(),
            space: D(),
            translate: D()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", F]
            }],
            container: ["container"],
            columns: [{
                columns: [Rt]
            }],
            "break-after": [{
                "break-after": L()
            }],
            "break-before": [{
                "break-before": L()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...ie(), F]
            }],
            overflow: [{
                overflow: O()
            }],
            "overflow-x": [{
                "overflow-x": O()
            }],
            "overflow-y": [{
                "overflow-y": O()
            }],
            overscroll: [{
                overscroll: j()
            }],
            "overscroll-x": [{
                "overscroll-x": j()
            }],
            "overscroll-y": [{
                "overscroll-y": j()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [y]
            }],
            "inset-x": [{
                "inset-x": [y]
            }],
            "inset-y": [{
                "inset-y": [y]
            }],
            start: [{
                start: [y]
            }],
            end: [{
                end: [y]
            }],
            top: [{
                top: [y]
            }],
            right: [{
                right: [y]
            }],
            bottom: [{
                bottom: [y]
            }],
            left: [{
                left: [y]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", wr, F]
            }],
            basis: [{
                basis: W()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", F]
            }],
            grow: [{
                grow: A()
            }],
            shrink: [{
                shrink: A()
            }],
            order: [{
                order: ["first", "last", "none", wr, F]
            }],
            "grid-cols": [{
                "grid-cols": [xr]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", wr, F]
                }, F]
            }],
            "col-start": [{
                "col-start": M()
            }],
            "col-end": [{
                "col-end": M()
            }],
            "grid-rows": [{
                "grid-rows": [xr]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [wr, F]
                }, F]
            }],
            "row-start": [{
                "row-start": M()
            }],
            "row-end": [{
                "row-end": M()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", F]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", F]
            }],
            gap: [{
                gap: [f]
            }],
            "gap-x": [{
                "gap-x": [f]
            }],
            "gap-y": [{
                "gap-y": [f]
            }],
            "justify-content": [{
                justify: ["normal", ...R()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...R(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...R(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [c]
            }],
            px: [{
                px: [c]
            }],
            py: [{
                py: [c]
            }],
            ps: [{
                ps: [c]
            }],
            pe: [{
                pe: [c]
            }],
            pt: [{
                pt: [c]
            }],
            pr: [{
                pr: [c]
            }],
            pb: [{
                pb: [c]
            }],
            pl: [{
                pl: [c]
            }],
            m: [{
                m: [E]
            }],
            mx: [{
                mx: [E]
            }],
            my: [{
                my: [E]
            }],
            ms: [{
                ms: [E]
            }],
            me: [{
                me: [E]
            }],
            mt: [{
                mt: [E]
            }],
            mr: [{
                mr: [E]
            }],
            mb: [{
                mb: [E]
            }],
            ml: [{
                ml: [E]
            }],
            "space-x": [{
                "space-x": [P]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [P]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", F, t]
            }],
            "min-w": [{
                "min-w": [F, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [F, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [Rt]
                }, Rt]
            }],
            h: [{
                h: [F, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [F, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [F, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [F, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", Rt, Nt]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ei]
            }],
            "font-family": [{
                font: [xr]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", F]
            }],
            "line-clamp": [{
                "line-clamp": ["none", Bn, Ei]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", mt, F]
            }],
            "list-image": [{
                "list-image": ["none", F]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", F]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [h]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [h]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...H(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", mt, Nt]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", mt, F]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: D()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", F]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", F]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [h]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...ie(), y0]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", v0]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, w0]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [g]
            }],
            "gradient-via-pos": [{
                via: [g]
            }],
            "gradient-to-pos": [{
                to: [g]
            }],
            "gradient-from": [{
                from: [x]
            }],
            "gradient-via": [{
                via: [x]
            }],
            "gradient-to": [{
                to: [x]
            }],
            rounded: [{
                rounded: [s]
            }],
            "rounded-s": [{
                "rounded-s": [s]
            }],
            "rounded-e": [{
                "rounded-e": [s]
            }],
            "rounded-t": [{
                "rounded-t": [s]
            }],
            "rounded-r": [{
                "rounded-r": [s]
            }],
            "rounded-b": [{
                "rounded-b": [s]
            }],
            "rounded-l": [{
                "rounded-l": [s]
            }],
            "rounded-ss": [{
                "rounded-ss": [s]
            }],
            "rounded-se": [{
                "rounded-se": [s]
            }],
            "rounded-ee": [{
                "rounded-ee": [s]
            }],
            "rounded-es": [{
                "rounded-es": [s]
            }],
            "rounded-tl": [{
                "rounded-tl": [s]
            }],
            "rounded-tr": [{
                "rounded-tr": [s]
            }],
            "rounded-br": [{
                "rounded-br": [s]
            }],
            "rounded-bl": [{
                "rounded-bl": [s]
            }],
            "border-w": [{
                border: [l]
            }],
            "border-w-x": [{
                "border-x": [l]
            }],
            "border-w-y": [{
                "border-y": [l]
            }],
            "border-w-s": [{
                "border-s": [l]
            }],
            "border-w-e": [{
                "border-e": [l]
            }],
            "border-w-t": [{
                "border-t": [l]
            }],
            "border-w-r": [{
                "border-r": [l]
            }],
            "border-w-b": [{
                "border-b": [l]
            }],
            "border-w-l": [{
                "border-l": [l]
            }],
            "border-opacity": [{
                "border-opacity": [h]
            }],
            "border-style": [{
                border: [...H(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [l]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [l]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [h]
            }],
            "divide-style": [{
                divide: H()
            }],
            "border-color": [{
                border: [o]
            }],
            "border-color-x": [{
                "border-x": [o]
            }],
            "border-color-y": [{
                "border-y": [o]
            }],
            "border-color-s": [{
                "border-s": [o]
            }],
            "border-color-e": [{
                "border-e": [o]
            }],
            "border-color-t": [{
                "border-t": [o]
            }],
            "border-color-r": [{
                "border-r": [o]
            }],
            "border-color-b": [{
                "border-b": [o]
            }],
            "border-color-l": [{
                "border-l": [o]
            }],
            "divide-color": [{
                divide: [o]
            }],
            "outline-style": [{
                outline: ["", ...H()]
            }],
            "outline-offset": [{
                "outline-offset": [mt, F]
            }],
            "outline-w": [{
                outline: [mt, Nt]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: Ee()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [h]
            }],
            "ring-offset-w": [{
                "ring-offset": [mt, Nt]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", Rt, x0]
            }],
            "shadow-color": [{
                shadow: [xr]
            }],
            opacity: [{
                opacity: [h]
            }],
            "mix-blend": [{
                "mix-blend": [...Ue(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": Ue()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [r]
            }],
            contrast: [{
                contrast: [a]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", Rt, F]
            }],
            grayscale: [{
                grayscale: [u]
            }],
            "hue-rotate": [{
                "hue-rotate": [d]
            }],
            invert: [{
                invert: [p]
            }],
            saturate: [{
                saturate: [m]
            }],
            sepia: [{
                sepia: [k]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [r]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [a]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [u]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [d]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [p]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [h]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [m]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [k]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [i]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [i]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [i]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", F]
            }],
            duration: [{
                duration: $()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", F]
            }],
            delay: [{
                delay: $()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", F]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [S]
            }],
            "scale-x": [{
                "scale-x": [S]
            }],
            "scale-y": [{
                "scale-y": [S]
            }],
            rotate: [{
                rotate: [wr, F]
            }],
            "translate-x": [{
                "translate-x": [_]
            }],
            "translate-y": [{
                "translate-y": [_]
            }],
            "skew-x": [{
                "skew-x": [N]
            }],
            "skew-y": [{
                "skew-y": [N]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", F]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", F]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": D()
            }],
            "scroll-mx": [{
                "scroll-mx": D()
            }],
            "scroll-my": [{
                "scroll-my": D()
            }],
            "scroll-ms": [{
                "scroll-ms": D()
            }],
            "scroll-me": [{
                "scroll-me": D()
            }],
            "scroll-mt": [{
                "scroll-mt": D()
            }],
            "scroll-mr": [{
                "scroll-mr": D()
            }],
            "scroll-mb": [{
                "scroll-mb": D()
            }],
            "scroll-ml": [{
                "scroll-ml": D()
            }],
            "scroll-p": [{
                "scroll-p": D()
            }],
            "scroll-px": [{
                "scroll-px": D()
            }],
            "scroll-py": [{
                "scroll-py": D()
            }],
            "scroll-ps": [{
                "scroll-ps": D()
            }],
            "scroll-pe": [{
                "scroll-pe": D()
            }],
            "scroll-pt": [{
                "scroll-pt": D()
            }],
            "scroll-pr": [{
                "scroll-pr": D()
            }],
            "scroll-pb": [{
                "scroll-pb": D()
            }],
            "scroll-pl": [{
                "scroll-pl": D()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", F]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [mt, Nt, Ei]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , _0 = i0(k0);
function he(...e) {
    return _0(Kg(e))
}
const P0 = Lg
  , Lp = v.forwardRef( ({className: e, ...t}, n) => w.jsx(wp, {
    ref: n,
    className: he("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
}));
Lp.displayName = wp.displayName;
const T0 = Pp("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , Fp = v.forwardRef( ({className: e, variant: t, ...n}, r) => w.jsx(xp, {
    ref: r,
    className: he(T0({
        variant: t
    }), e),
    ...n
}));
Fp.displayName = xp.displayName;
const N0 = v.forwardRef( ({className: e, ...t}, n) => w.jsx(Cp, {
    ref: n,
    className: he("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", e),
    ...t
}));
N0.displayName = Cp.displayName;
const Dp = v.forwardRef( ({className: e, ...t}, n) => w.jsx(kp, {
    ref: n,
    className: he("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: w.jsx(Hg, {
        className: "h-4 w-4"
    })
}));
Dp.displayName = kp.displayName;
const zp = v.forwardRef( ({className: e, ...t}, n) => w.jsx(Sp, {
    ref: n,
    className: he("text-sm font-semibold", e),
    ...t
}));
zp.displayName = Sp.displayName;
const bp = v.forwardRef( ({className: e, ...t}, n) => w.jsx(Ep, {
    ref: n,
    className: he("text-sm opacity-90", e),
    ...t
}));
bp.displayName = Ep.displayName;
function R0() {
    const {toasts: e} = Ky();
    return w.jsxs(P0, {
        children: [e.map(function({id: t, title: n, description: r, action: o, ...s}) {
            return w.jsxs(Fp, {
                ...s,
                children: [w.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && w.jsx(zp, {
                        children: n
                    }), r && w.jsx(bp, {
                        children: r
                    })]
                }), o, w.jsx(Dp, {})]
            }, t)
        }), w.jsx(Lp, {})]
    })
}
const bs = v.forwardRef( ({className: e, ...t}, n) => w.jsx("div", {
    ref: n,
    className: he("rounded-lg border bg-card text-card-foreground shadow-sm", e),
    ...t
}));
bs.displayName = "Card";
const I0 = v.forwardRef( ({className: e, ...t}, n) => w.jsx("div", {
    ref: n,
    className: he("flex flex-col space-y-1.5 p-6", e),
    ...t
}));
I0.displayName = "CardHeader";
const A0 = v.forwardRef( ({className: e, ...t}, n) => w.jsx("h3", {
    ref: n,
    className: he("text-2xl font-semibold leading-none tracking-tight", e),
    ...t
}));
A0.displayName = "CardTitle";
const O0 = v.forwardRef( ({className: e, ...t}, n) => w.jsx("p", {
    ref: n,
    className: he("text-sm text-muted-foreground", e),
    ...t
}));
O0.displayName = "CardDescription";
const $s = v.forwardRef( ({className: e, ...t}, n) => w.jsx("div", {
    ref: n,
    className: he("p-6 pt-0", e),
    ...t
}));
$s.displayName = "CardContent";
const j0 = v.forwardRef( ({className: e, ...t}, n) => w.jsx("div", {
    ref: n,
    className: he("flex items-center p-6 pt-0", e),
    ...t
}));
j0.displayName = "CardFooter";
function M0() {
    return w.jsx("div", {
        className: "min-h-screen w-full flex items-center justify-center bg-gray-50",
        children: w.jsx(bs, {
            className: "w-full max-w-md mx-4",
            children: w.jsxs($s, {
                className: "pt-6",
                children: [w.jsxs("div", {
                    className: "flex mb-4 gap-2",
                    children: [w.jsx($g, {
                        className: "h-8 w-8 text-red-500"
                    }), w.jsx("h1", {
                        className: "text-2xl font-bold text-gray-900",
                        children: "404 Page Not Found"
                    })]
                }), w.jsx("p", {
                    className: "mt-4 text-sm text-gray-600",
                    children: "Did you forget to add the page to the router?"
                })]
            })
        })
    })
}
function L0({tool: e}) {
    return w.jsx(bs, {
        children: w.jsxs($s, {
            className: "p-4",
            children: [w.jsx("div", {
                className: "relative w-full h-48 mb-4 rounded-lg overflow-hidden",
                children: w.jsx("img", {
                    src: `//image.thum.io/get/${e.path}`,
                    alt: e.name,
                    className: "w-full h-full object-cover"
                })
            }), w.jsxs("div", {
                className: "flex items-center justify-between mb-4",
                children: [w.jsx("h4", {
                    className: "text-lg font-bold",
                    children: e.name
                }), w.jsx("a", {
                    href: e.path,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-primary hover:text-primary/80",
                    children: w.jsx(Ug, {
                        className: "h-5 w-5"
                    })
                })]
            }), w.jsx("p", {
                className: "text-muted-foreground mb-4",
                children: e.description
            }), w.jsx("ul", {
                className: "space-y-2",
                children: e.use_cases.map( (t, n) => w.jsxs("li", {
                    className: "flex items-center gap-2",
                    children: [w.jsx("span", {
                        className: "w-2 h-2 rounded-full bg-primary"
                    }), t]
                }, n))
            })]
        })
    })
}
function F0({category: e, categoryIndex: t}) {
    return w.jsx(bs, {
        id: `category-${t}`,
        className: "mb-4 overflow-hidden scroll-mt-20",
        children: w.jsxs($s, {
            className: "p-4",
            children: [w.jsxs("div", {
                children: [w.jsx("h3", {
                    className: "text-xl font-bold mb-2",
                    children: e.title
                }), w.jsx("p", {
                    className: "text-muted-foreground mb-4",
                    children: e.introduction
                })]
            }), w.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                children: e.tools.map( (n, r) => w.jsx(L0, {
                    tool: {
                        ...n,
                        categoryId: t + 1
                    }
                }, `${t}-${r}`))
            })]
        })
    })
}
const D0 = [{
    title: "أفضل 10 أدوات ذكاء اصطناعي للمسوقين 🚀",
    introduction: "يا خبراء التسويق الرقمي! هل تبحثون عن طرق لزيادة إنتاجيتكم وتحقيق نتائج مبهرة؟ 🤩 الذكاء الاصطناعي هنا ليغير قواعد اللعبة! إليكم أفضل 10 أدوات ذكاء اصطناعي ستجعل التسويق أسهل وأكثر فعالية. 😎",
    tools: [{
        name: "Jasper AI",
        description: "أداة ذكاء اصطناعي توليدي تساعد على كتابة أنواع مختلفة من المحتوى التسويقي الرقمي لمواقع الويب لتحسين ظهورها ورفع ترتيبها في نتائج محركات البحث. 📝",
        use_cases: ["تدقيق المحتوى للتحقق من السرقة العلمية. 💯", "إعداد حملات تسويقية لمختلف قنوات التسويق. 🎯", "كتابة محتوى تسويقي مخصص للعلامة التجارية. 🏷️"],
        path: "https://www.jasper.ai/"
    }, {
        name: "Attentive AI",
        description: "أداة ذكاء اصطناعي توليدي لإنشاء الحملات الإعلانية وإرسالها عبر الرسائل النصية القصيرة والبريد الإلكتروني. ✉️",
        use_cases: ["أتمتة إنشاء الحملات الإعلانية ونشرها. 🤖", "توليد محتوى تسويقي مخصص للعلامة التجارية. 💎", "إنشاء حملات تسويقية مخصصة للعملاء. 🤝"],
        path: "https://www.attentivemobile.com/"
    }, {
        name: "OwlyWriter AI",
        description: "أداة ذكاء اصطناعي توليدي للمساعدة في مهام كتابة المحتوى التسويقي ونشره عبر وسائل التواصل الاجتماعي. 📱",
        use_cases: ["توليد تعليقات (Captions) لمنشورات وسائل التواصل الاجتماعي. ✨", "كتابة محتوى مناسب للمناسبات الرسمية خلال السنة. 🗓️", "إنشاء منشورات مخصصة مُستوحاة من أفضل المنشورات أداءً. 🏆"],
        path: "https://www.hootsuite.com/products/owlywriter-ai"
    }, {
        name: "Writer",
        description: "أداة ذكاء اصطناعي توليدي لإنشاء المحتوى بما في ذلك المحتوى التسويقي مع تقديم مجموعة من خدمات الكتابة للمسوقين. ✍️",
        use_cases: ["إنشاء حملات تسويق عبر البريد الإلكتروني. 📧", "تحليل المحتوى والإجابة عن الأسئلة المتعلقة به. 🤔", "كتابة أوصاف للمنتجات تعكس هوية العلامة التجارية. 🛍️"],
        path: "https://writer.com/"
    }, {
        name: "Mutiny",
        description: "أداة ذكاء اصطناعي تساعد في تخصيص محتوى مواقع الويب ليتناسب مع احتياجات وتفضيلات كل زائر دون الحاجة إلى أي خبرات برمجية. 🌐",
        use_cases: ["إجراء اختبارات أ/ب لتحسين التسويق الرقمي. 🧪", "إطلاق وإدارة حملات تسويقية موجهة إلى الجمهور المستهدف. 🎯", "إنشاء محتوى مخصص لجذب العملاء الجدد. ✨"],
        path: "https://www.mutinyhq.com/"
    }, {
        name: "Hypotenuse AI",
        description: "أداة ذكاء اصطناعي توليدي تستخدم في إنشاء محتوى تسويقي يتضمن نصوصًا وصورًا بناءً على مدخلات نصية، مثل: الكلمات المفتاحية أو وصف المنتج. 🖼️",
        use_cases: ["تحويل النصوص إلى صور. 🏞️", "توليد مقالات تسويقية بأسلوب يتناسب مع هوية العلامة التجارية. 🖋️", "كتابة وصف المنتجات لزيادة فرصة ظهورها في نتائج محركات البحث. 🔍"],
        path: "https://www.hypotenuse.ai/"
    }, {
        name: "Rytr",
        description: "أداة ذكاء اصطناعي توليدي تمكن من كتابة محتوى تسويقي بعدة لغات باستخدام أساليب كتابة مختلفة تتناسب مع عدة منصات للتواصل الاجتماعي. 🗣️",
        use_cases: ["توليد أسماء علامات تجارية. 💡", "كتابة محتوى تسويقي مناسب لمختلف منصات التواصل الاجتماعي. 🌐", "توليد ردود مناسبة لرسائل العملاء ورسائل البريد الإلكتروني. 💬"],
        path: "https://rytr.me/"
    }, {
        name: "AI Studios",
        description: "أداة ذكاء اصطناعي توليدي تساعد في تبسيط عملية إنتاج الفيديوهات التسويقية المخصصة وتوفر أكثر من مئة صوت للحديث بأكثر من ثمانين لغة. 🎬",
        use_cases: ["تحرير الفيديوهات. ✂️", "تحويل ملفات العروض التقديمية إلى فيديوهات. 📊➡️🎞️", "تحويل النصوص إلى فيديوهات تسويقية. 📝➡️🎞️"],
        path: "https://www.synthesia.io/ai-video-generator"
    }, {
        name: "Writesonic",
        description: "أداة ذكاء اصطناعي توليدي لإنشاء المحتوى بما في ذلك المحتوى التسويقي وتحسينه لإبرازه في محركات البحث ومنصات وسائل التواصل الاجتماعي. ✨",
        use_cases: ["كتابة وصف للمنتجات. 🏷️", "إنشاء حملات تسويقية عبر البريد الإلكتروني. 📧", "إنشاء محتوى تسويقي مخصص. 💎"],
        path: "https://writesonic.com/"
    }, {
        name: "Textcortex",
        description: "أداة ذكاء اصطناعي توليدي تساعد على إنشاء محتوى مخصص يتناسب مع هوية العلامة التجارية وتقديم اقتراحات لتحسين الحملات التسويقية وتحليل أدائها. 📊",
        use_cases: ["إعادة كتابة المحتوى التسويقي. 🔄", "توليد أفكار جديدة للحملات التسويقية. 💡", "الإجابة عن الأسئلة المتعلقة بتحسين عملية التواصل مع العملاء. 💬🤝"],
        path: "https://textcortex.com/"
    }]
}, {
    title: "أفضل 10 أدوات ذكاء اصطناعي للمبرمجين 💻",
    introduction: "يا عباقرة البرمجة! 👨‍💻👩‍💻 وداعًا للأخطاء والإحباط! 👋 مع هذه الأدوات العشرة المدعومة بالذكاء الاصطناعي، ستصبح كتابة الكود أسرع وأكثر كفاءة من أي وقت مضى. 🔥 استعدوا لمضاعفة إنتاجيتكم وتحويل أفكاركم إلى واقع برمجي مذهل! ✨",
    tools: [{
        name: "Visual Studio Intellicode",
        description: "أداة ذكاء اصطناعي توليدي تمكن من كتابة الأكواد البرمجية وإكمالها وتقديم اقتراحات لتحسينها تتناسب مع السياق وأسلوب المبرمج. 🧑‍💻",
        use_cases: ["كتابة الأكواد البرمجية وإكمالها بشكل تلقائي. 🤖", "اكتشاف التكرار في الأكواد البرمجية. 🔍", "تحسين دقة الأكواد البرمجية عبر تقديم اقتراحات مخصصة. ✨"],
        path: "https://visualstudio.microsoft.com/services/intellicode/"
    }, {
        name: "Amazon CodeWhisperer",
        description: "أداة ذكاء اصطناعي توليدي تساعد على كتابة الأكواد البرمجية عبر توليد اقتراحات للأكواد البرمجية وتحليلها لاكتشاف الأخطاء أو الثغرات الأمنية. 🛡️",
        use_cases: ["كتابة الأكواد البرمجية بمعظم اللغات البرمجية. 🗣️", "تحليل الأكواد البرمجية لاكتشاف الثغرات الأمنية. 🔒", "توليد اقتراحات للأكواد البرمجية مخصصة في الوقت الآني. 🚀"],
        path: "https://aws.amazon.com/codewhisperer/"
    }, {
        name: "GitHub Copilot",
        description: "أداة ذكاء اصطناعي توليدي لتوليد الأكواد البرمجية وتقديم اقتراحات بناءً على سياق المشروع البرمجي وأسلوب المبرمج. 🧑‍💻🤝",
        use_cases: ["تقديم اقتراحات برمجية عن طريق المحادثات النصية. 💬", "إكمال كتابة الأوامر البرمجية الشائعة والمتكررة تلقائيًا. 🤖", "اكتشاف الأخطاء المحتملة أثناء الكتابة. 🔍"],
        path: "https://github.com/features/copilot"
    }, {
        name: "OpenAI Codex",
        description: "أداة ذكاء اصطناعي توليدي لتعزيز إنتاجية المطورين ومساعدتهم على كتابة الأكواد البرمجية وتحسين دقتها وتقليل الأخطاء فيها. ✨",
        use_cases: ["إعادة كتابة الأكواد البرمجية لتحسينها. 🔄", "تحويل النصوص إلى أكواد برمجية. 📝➡️💻", "إكمال الأكواد البرمجية حسب السياق. 🤖"],
        path: "https://platform.openai.com/docs/models/codex"
    }, {
        name: "Replit AI",
        description: "أداة ذكاء اصطناعي توليدي تمكن من كتابة الأكواد البرمجية وتشغيلها ومشاركتها عن طريق متصفح الويب. 🌐💻",
        use_cases: ["تحويل النصوص إلى أكواد برمجية. 📝➡️💻", "الإجابة عن الأسئلة البرمجية عن طريق المحادثات النصية. 💬", "اكتشاف الأخطاء في الأكواد البرمجية واقتراح حلول لها. 🔍💡"],
        path: "https://replit.com/site/ai"
    }, {
        name: "Bugasura",
        description: "أداة تستخدم الذكاء الاصطناعي تساعد على اكتشاف الأخطاء في الأكواد البرمجية والإبلاغ عنها وتتبعها وتحليلها والتعاون بين أصحاب المصلحة لإصلاحها. 🛠️",
        use_cases: ["الإبلاغ عن الأخطاء في الأكواد البرمجية. 🚩", "إنشاء تقارير حول الأخطاء والثغرات ومشاركتها مع أصحاب المصلحة. 📊🤝", "تحليل الأخطاء البرمجية وإصلاحها. 🔍🛠️"],
        path: "https://www.bugasura.io/"
    }, {
        name: "Warp",
        description: "أداة ذكاء اصطناعي على هيئة واجهة سطر الأوامر (CLI) تساعد على كتابة الأوامر وتحريرها وإكمالها. ⌨️",
        use_cases: ["الإكمال التلقائي للأوامر البرمجية واقتراح الأوامر المناسبة. 🤖", "اكتشاف الأخطاء في الأوامر البرمجية واقتراح حلول لها. 🔍💡", "الإجابة عن الأسئلة البرمجية عن طريق المحادثات النصية. 💬"],
        path: "https://www.warp.dev/"
    }, {
        name: "Diffblue Cover",
        description: "أداة ذكاء اصطناعي توليدي تساعد على أتمتة عمليات اختبار البرمجيات عن طريق إنشاء وتقييم اختبار الوحدة (Unit Testing) للغة جافا (Java). 🧪",
        use_cases: ["أتمتة توليد اختبارات الوحدة للأكواد البرمجية. 🤖🧪", "تحديث اختبارات الوحدة تلقائيًا عند حدوث تغيير على الكود البرمجي. 🔄🧪", "تحديد الأكواد البرمجية غير القابلة للاختبار التي يجب إعادة هيكلتها. 🔍🏗️"],
        path: "https://www.diffblue.com/"
    }, {
        name: "Mutable AI",
        description: "أداة توفر عدة حلول ذكاء اصطناعي توليدي لتحسين عمليات تطوير البرمجيات، مثل: كتابة الأكواد البرمجية وتوثيقها، وأتمتة اختبارات التكامل (Integration Testing)، وشرح محتوى منصة جيت هب (GitHub). 🛠️",
        use_cases: ["إنشاء اختبارات تكامل شاملة. 🧪🤝", "كتابة الأكواد البرمجية وتحسينها عن طريق المدخلات النصية. 📝➡️💻", "إنشاء مقالات تشرح الأكواد البرمجية بأسلوب مشابه لطريقة موسوعة ويكيبيديا. 📚💻"],
        path: "https://mutable.ai/"
    }, {
        name: "Cursor",
        description: "أداة ذكاء اصطناعي توليدي توفر بيئة تطوير متكاملة (IDE) تعزز كفاءة عملية البرمجة من خلال عدة ميزات، منها: توليد الأكواد البرمجية والاقتراحات، وإتاحة البرمجة الثنائية (Pair Programming). 🤝🧑‍💻🧑‍💻",
        use_cases: ["توليد الأكواد البرمجية عن طريق التعليمات والأوامر النصية. 📝➡️💻", "فحص الأكواد البرمجية بحثًا عن الأخطاء والمساعدة على حلها. 🔍💡", "البحث في الأكواد البرمجية عن معلومات أو وظائف محددة. 🔍📚"],
        path: "https://cursor.sh/"
    }]
}, {
    title: "أفضل 10 أدوات ذكاء اصطناعي للمعلمين 🍎",
    introduction: "يا بناة المستقبل! 🍎👩‍🏫👨‍🏫 الذكاء الاصطناعي يدخل الفصول الدراسية ليجعل التعليم أكثر متعة وفاعلية! 🤩 هذه الأدوات العشرة ستساعدكم في تخصيص الدروس، تقييم الطلاب، وإعداد تجارب تعليمية تفاعلية لا تُنسى. ✨ استعدوا لمستقبل التعليم الذكي! 🚀",
    tools: [{
        name: "Google Classroom",
        description: "أداة قائمة على الذكاء الاصطناعي لتعزيز العملية التعليمية وإثرائها، وإنشاء تجارب تعليمية تفاعلية يمكن تخصيصها وإدارتها. 🍎💻",
        use_cases: ["تخصيص المحتوى وعملية التعليم. 🍎", "تقييم أداء الطالب. 📝", "إنشاء أسئلة تدريبية واختبارات تفاعلية. ❓✍️"],
        path: "https://classroom.google.com/"
    }, {
        name: "Kahoot! School",
        description: "أداة تعتمد على الذكاء الاصطناعي التوليدي لإنشاء ألعاب وتجارب تعليمية تفاعلية مخصصة لتقييم أداء الطلاب بصورة مستمرة وتوفير تغذية راجعة. 🎮🍎",
        use_cases: ["إنشاء ألعاب تعليمية. 🎮🍎", "توليد الأسئلة لتقييم الطلاب. ❓📝", "تحويل النصوص إلى محتوى تعليمي تفاعلي. 📝➡️🍎"],
        path: "https://kahoot.com/schools/"
    }, {
        name: "Quizlet",
        description: "أداة قائمة على الذكاء الاصطناعي تساعد على تصميم الألعاب التعليمية والدروس التفاعلية والتدريبات المخصصة، والتفاعل مع الطلاب عن طريق المحادثات النصية. 🎮🍎💬",
        use_cases: ["إنشاء محتوى تعليمي تفاعلي. 🍎✨", "التقييم المستمر لأداء الطلاب. 📝📊", "الإجابة عن أسئلة الطلاب حول المواد التعليمية. 💬🍎❓"],
        path: "https://quizlet.com/"
    }, {
        name: "Khanmigo (Khan Academy)",
        description: "أداة ذكاء اصطناعي توليدي لكتابة خطط المناهج وتضمين محتوى منصة خان أكاديمي (Khan Academy) فيها، وتعزيز العملية التعليمية عبر المحادثات النصية. 🍎📚💬",
        use_cases: ["تحضير الدروس. 🍎📝", "تقييم الطلاب وتحديد مجالات الدعم. 📝📊🤝", "تقديم اقتراحات حول المواد التعليمية. 💡📚"],
        path: "https://www.khanacademy.org/khan-labs"
    }, {
        name: "Century Tech",
        description: "أداة معتمدة على الذكاء الاصطناعي تساعد على دعم عملية التدريس وتخصيصها، ومتابعة أداء الطلاب وتقييمهم وتقديم تغذية راجعة مناسبة. 🍎🚀",
        use_cases: ["تخصيص المسار التعليمي للطلاب. 🍎🛣️", "تصحيح الاختبارات بصورة مؤتمتة. 🤖📝", "تقييم أداء الطلاب وتحديد نقاط القوة والضعف. 📊💪📉"],
        path: "https://www.century.tech/"
    }, {
        name: "Quizizz AI",
        description: "أداة قائمة على الذكاء الاصطناعي التوليدي تساعد في إثراء المحتوى التعليمي عن طريق إنشاء اختبارات تفاعلية ومسابقات تعليمية من مجموعة متنوعة من المصادر. 🎮🍎❓",
        use_cases: ["إنشاء اختبارات تفاعلية مخصصة. 🎮🍎❓", "تحسين أسئلة الاختبارات والتقييم وإعادة صياغتها. ❓📝🔄", "التقييم المستمر لأداء الطلاب وتقديم تغذية راجعة مناسبة. 📝📊🍎"],
        path: "https://quizizz.com/ai"
    }, {
        name: "Gradescope",
        description: "أداة معتمدة على الذكاء الاصطناعي تساعد على تبسيط عملية تصحيح الواجبات ووضع الاختبارات وتقييم أداء الطلاب. 📝📊🍎",
        use_cases: ["تصحيح الواجبات، مثل: المقالات والتقارير. 📝✅", "تصحيح الاختبارات. 📝✅", "تصنيف إجابات الطلاب وتجميع ما تشابه منها. 🤖📝"],
        path: "https://www.gradescope.com/"
    }, {
        name: "Nolej AI",
        description: "أداة ذكاء اصطناعي توليدي تستخدم في إنشاء محتوى تعليمي عن طريق تحويل المواد التعليمية، مثل: الكتب المدرسية إلى محتوى تفاعلي. 📚🍎✨",
        use_cases: ["توليد كتب تعليمية تفاعلية. 📚🍎✨", "توليد فيديوهات تعليمية تفاعلية. 🍎🎞️✨", "تحليل المحتوى وتوليد أسئلة تفاعلية منه. 📚❓🍎"],
        path: "https://nolej.io/"
    }, {
        name: "Quizgecko",
        description: "أداة ذكاء اصطناعي توليدي تمكن من إنشاء أسئلة الاختبارات والواجبات التي يمكن تخصيصها ومشاركتها مع الطلاب. ❓🍎🤝",
        use_cases: ["توليد أسئلة اختبارات باللغة العربية. 🗣️❓", "تقييم أداء الطلاب وتقديم تغذية راجعة مناسبة. 📝🍎📊", "إنشاء تقارير وإحصائيات لفهم كيفية أداء الطلاب. 📊🍎📈"],
        path: "https://quizgecko.com/"
    }, {
        name: "MagicSchool",
        description: "أداة ذكاء اصطناعي توليدي تساعد في إعداد الدروس وتقييم أداء الطلاب ومتابعة تقدمهم وتزويدهم بتغذية راجعة مناسبة. 🍎🚀",
        use_cases: ["توليد محتوى تعليمي بأكثر من 25 لغة. 🗣️🍎", "توليد الخطط الدراسية. 🍎📝", "تصحيح الواجبات وتقديم ملاحظات حولها. 📝✅🍎"],
        path: "https://www.magicschool.ai/"
    }]
}, {
    title: ". أفضل 10 أدوات ذكاء اصطناعي للمحامين ⚖️",
    introduction: "أيها القانونيون الأعزاء! ⚖️ هل تبحثون عن أدوات تساعدكم في تبسيط مهامكم القانونية المعقدة وزيادة كفاءتكم؟ 🤔 الذكاء الاصطناعي هنا ليغير قواعد اللعبة في عالم القانون! 🚀 إليكم 10 أدوات ذكاء اصطناعي ستجعل عملكم أكثر دقة وسرعة وفعالية. 🚀",
    tools: [{
        name: "Ironclad AI",
        description: "أداة ذكاء اصطناعي تساعد على تبسيط العمليات المتعلقة بالعقود وتحسينها وتعزيز الجوانب المختلفة لإدارة العقود. 🤝📄",
        use_cases: ["مراجعة العقود. ✅📄", "صياغة العقود. ✍️📄", "استخراج بيانات العقود. 📊📄"],
        path: "https://ironcladapp.com/"
    }, {
        name: "Everlaw AI",
        description: "أداة معتمدة على الذكاء الاصطناعي لتحسين كفاءة مختلف مهام التقاضي، وإدارة المستندات وتحليلها، وتعزيز التعاون بين أصحاب المصلحة. ⚖️🤝🚀",
        use_cases: ["تلخيص المستندات القانونية. 📝📄", "الإجابة عن أسئلة حول المستندات القانونية. ❓📄", "إنشاء مسودات للمستندات القانونية مع الاستشهاد بالمستندات الداعمة. ✍️📄📚"],
        path: "https://www.everlaw.com/"
    }, {
        name: "ivo",
        description: "أداة ذكاء اصطناعي توليدي تساعد في تعزيز كفاءة كتابة العقود ومراجعتها وتحسين عملية إدارة الاتفاقيات والمفاوضات. ✍️📄🤝",
        use_cases: ["تلخيص الاتفاقيات. 📝📄", "تصحيح كتابة الاتفاقيات. ✅✍️📄", "مراجعة الاتفاقيات وتحليلها للتحقق من دقتها. 🔍📄✅"],
        path: "https://www.ivo.ai/"
    }, {
        name: "LeAh",
        description: "أداة ذكاء اصطناعي توليدي لإدارة دورة حياة العقود بدءًا من الإنشاء والتفاوض إلى الموافقة والتجديد، مع توفير تقييم للمخاطر المرتبطة بكل عقد. 📄🔄🚀",
        use_cases: ["إنشاء العقود ومراجعتها وتحليلها. ✍️📄✅", "تلخيص المستندات القانونية واستخراج البيانات منها. 📝📄📊", "الإجابة عن الأسئلة القانونية باستخدام قاعدة البيانات القانونية. ❓📚"],
        path: "https://www.contractpodai.com/platform/leah-ai/"
    }, {
        name: "Amto.AI",
        description: "أداة ذكاء اصطناعي توليدي تمكن من صياغة الوثائق القانونية ومراجعتها وتحليلها بأسلوب مخصص ويراعي السياق القانوني. ✍️📄⚖️",
        use_cases: ["الإجابة عن الاستفسارات القانونية الشائعة من العملاء. 💬🤝", "مراجعة وتعديل مختلف أنواع المستندات القانونية، مثل: العقود والخطابات. 📄🔄✍️", "تلخيص المستندات القانونية. 📝📄"],
        path: "https://amto.ai/"
    }, {
        name: "Lexis+ AI",
        description: "أداة قائمة على الذكاء الاصطناعي التوليدي تساعد في البحث القانوني وكتابة المستندات وتلخيصها وتحليل البيانات القانونية. 🔍📄🚀",
        use_cases: ["الإجابة عن الأسئلة القانونية. ❓⚖️", "تلخيص المستندات والأبحاث القانونية. 📝📄📚", "استخراج وتلخيص المعلومات الأساسية من المستندات القانونية. 💡📄📝"],
        path: "https://www.lexisnexis.com/en-us/lexis-plus-ai.page"
    }, {
        name: "LexMachina",
        description: "أداة معتمدة على الذكاء الاصطناعي لتحليل البيانات القانونية وتقديم رؤى تساعد على فهم القضايا ودعم اتخاذ القرار. ⚖️📊💡",
        use_cases: ["تحليل أداء القضاة والمحاكم لفهم اتجاهات التقاضي. ⚖️📊", "تلخيص المستندات القانونية. 📝📄", "التنبؤ بمسار القضية ونتيجتها. 🔮⚖️"],
        path: "https://lexmachina.com/"
    }, {
        name: "Harvey AI",
        description: "أداة ذكاء اصطناعي توليدي لتحليل البيانات القانونية المعقدة تساعد المحامين على معالجة القضايا القانونية. ⚖️🤯🚀",
        use_cases: ["تحليل البيانات القانونية. 📊⚖️", "توليد ملخصات ونماذج للوثائق القانونية. 📝📄📊", "بناء حلول مخصصة لتلبية الاحتياجات المحددة لكل شركة قانونية. 💡⚖️🤝"],
        path: "https://www.harvey.ai/"
    }, {
        name: "CoCounsel (casetext)",
        description: "أداة ذكاء اصطناعي توليدي تستخدم في البحث القانوني والاستعداد للمرافعات وتسهيل إنجاز مختلف المهام القانونية عن طريق المدخلات النصية. 🔍📄🗣️",
        use_cases: ["مراجعة المستندات والأبحاث القانونية وتلخيصها. ✅📄📚📝", "كتابة المذكرات القانونية. ✍️📄", "الإجابة عن الأسئلة المتعلقة بالمستندات القانونية مع الاستشهاد بالمصادر. ❓📄📚"],
        path: "https://casetext.com/cocounsel"
    }, {
        name: "LegalMation",
        description: "أداة ذكاء اصطناعي لأتمتة مهام التقاضي وتحسين كفاءة سير العمل القانوني واستخلاص رؤى تحليلية قيمة من البيانات القانونية. 🤖⚖️📊",
        use_cases: ["أتمتة إنشاء المستندات القانونية. 🤖📄", "تحليل البيانات القانونية. 📊⚖️", "تحسين عملية إدارة القضايا. 🚀⚖️"],
        path: "https://legalmation.com/"
    }]
}, {
    title: "أفضل 10 أدوات ذكاء اصطناعي لأخصائيي الأمن السيبراني 🛡️",
    introduction: "يا حماة العالم الرقمي! 🦸‍♀️🦸‍♂️ في عصر التهديدات السيبرانية المتزايدة، إليكم 10 أدوات ذكاء اصطناعي ستكون درعكم الحصين. 💪 هذه الأدوات ستساعدكم في الكشف عن التهديدات، والاستجابة الفورية، وحماية الأنظمة بذكاء وكفاءة لا مثيل لها. 🚀",
    tools: [{
        name: "Microsoft Copilot for Security",
        description: "أداة مدعومة بالذكاء الاصطناعي التوليدي لتوفير الحماية من الهجمات السيبرانية والتخفيف من أثرها عبر تقديم التحليلات في الوقت الآني وأتمتة المهام المتكررة. 🛡️🤖",
        use_cases: ["تحليل البيانات الأمنية للكشف عن التهديدات السيبرانية. 🔍", "الإجابة عن الأسئلة المتعلقة بالأمن السيبراني. 💬", "توفير إرشادات مخصصة لحماية الأنظمة من الهجمات السيبرانية. 💡🛡️"],
        path: "https://www.microsoft.com/en-us/security/business/ai-cybersecurity"
    }, {
        name: "IBM Security QRadar SIEM",
        description: "أداة قائمة على الذكاء الاصطناعي تساعد على الكشف عن التهديدات السيبرانية والاستجابة لها استباقيًا وتصنيفها بناءً على خطورتها وتأثيرها. 🚨",
        use_cases: ["اكتشاف التهديدات السيبرانية. 🔍", "أتمتة مهام الاستجابة للحوادث الأمنية. 🤖🚨", "تحليل بيانات الشبكة وسلوك المستخدم للكشف عن الأنشطة المشبوهة. 📊🕵️"],
        path: "https://www.ibm.com/products/qradar-siem"
    }, {
        name: "Cylance AI",
        description: "أداة تستخدم الذكاء الاصطناعي لتعزيز حماية الأجهزة من البرامج الضارة والهجمات السيبرانية في الوقت الآني وتقليل وقت الاستجابة للحوادث الأمنية. 🛡️🚀",
        use_cases: ["الاستجابة للهجمات السيبرانية. 🚨", "تحليل البيانات لإيقاف الهجمات السيبرانية. 🔍🛑", "التنبؤ بالهجمات السيبرانية. 🔮"],
        path: "https://www.blackberry.com/us/en/products/cylance-endpoint-security"
    }, {
        name: "Elastic AI Assistant",
        description: "أداة معتمدة على الذكاء الاصطناعي التوليدي تمكن من تحليل البيانات واكتشاف رؤى جديدة وتحسين عملية رصد الهجمات السيبرانية عن طريق المحادثات النصية. 🤖💬",
        use_cases: ["الإجابة عن الأسئلة حول التهديدات السيبرانية. 💬", "تحليل تنبيهات الأمان وإنشاء تقارير لتلخيصها. 📊🔍", "إنشاء رسوم بيانية توضح بيانات الحوادث السيبرانية. 📈📊"],
        path: "https://www.elastic.co/security"
    }, {
        name: "FortiAI",
        description: "أداة ذكاء اصطناعي توليدي تساعد في تحليل وفهم الحوادث الأمنية وأتمتة عمليات التحقيق والاستجابة لها، مع إمكانية التفاعل من خلال المحادثات النصية. 🤖💬🤝",
        use_cases: ["التحقيق في الحوادث الأمنية. 🕵️", "تقديم توصيات مخصصة للاستجابة للتهديدات السيبرانية. 💡🛡️", "الإجابة عن الأسئلة المتعلقة بالأمن السيبراني. 💬"],
        path: "https://www.fortinet.com/products/artificial-intelligence/fortiai"
    }, {
        name: "Darktrace ActiveAI Security Platform",
        description: "أداة أمنية تتضمن ميزات ذكاء اصطناعي توليدي لحماية البيانات ورصد التهديدات السيبرانية بصورة استباقية والاستجابة لها في الوقت الآني. 🛡️🔮",
        use_cases: ["إنشاء تقارير الحوادث السيبرانية. 📊🚨", "التنبؤ بالهجمات السيبرانية. 🔮", "أتمتة الاستجابة للتهديدات السيبرانية. 🤖🛡️"],
        path: "https://www.darktrace.com/en/cyber-ai-platform/"
    }, {
        name: "CrowdStrike Charlotte AI",
        description: "أداة ذكاء اصطناعي توليدي لتحسين عمليات الأمن السيبراني وأتمتتها ودعم اتخاذ القرار الأمني عبر المحادثات النصية. 🤖💬🤝",
        use_cases: ["أتمتة مهام التحقيق والاستجابة للحوادث السيبرانية. 🤖🚨", "تقديم توصيات للحماية من الهجمات السيبرانية. 💡🛡️", "تقديم إجابات مخصصة عن الأسئلة المتعلقة بالأمن السيبراني. 💬"],
        path: "https://www.crowdstrike.com/cybersecurity-101/artificial-intelligence/"
    }, {
        name: "Purple AI",
        description: "أداة ذكاء اصطناعي توليدي تمكن من رصد التهديدات والهجمات السيبرانية بأنواعها المختلفة والاستجابة لها وتحليلها من خلال المحادثات النصية. 💬🔍",
        use_cases: ["اكتشاف التهديدات السيبرانية. 🔍", "تحليل الهجمات السيبرانية. 📊", "توليد إجابات مخصصة عن الأسئلة المتعلقة بالأمن السيبراني. 💬"],
        path: "https://www.sentinelone.com/platform/purple-ai/"
    }, {
        name: "Vectra AI",
        description: "أداة ذكاء اصطناعي تساعد على أتمتة اكتشاف الهجمات السيبرانية وتصنيفها وتحديد أولوياتها وخطورتها والاستجابة لها. 🤖🚨",
        use_cases: ["فرز الهجمات السيبرانية وتصنيفها. 🤖🚨", "التحقيق في الحوادث السيبرانية. 🕵️", "التصدي للهجمات السيبرانية. 🛡️🛑"],
        path: "https://www.vectra.ai/"
    }, {
        name: "Tessian",
        description: "أداة ذكاء اصطناعي لحماية البريد الإلكتروني من الهجمات السيبرانية المتطورة، مثل: هجمات التصيد الإلكتروني، والهجمات الموجهة. 📧🛡️",
        use_cases: ["صد الهجمات السيبرانية على البريد الإلكتروني. 📧🛑", "حماية البيانات الحساسة ومنع تسربها عبر البريد الإلكتروني. 🔒📧", "الاستجابة للحوادث السيبرانية. 🚨"],
        path: "https://www.tessian.com/"
    }]
}, {
    title: "أفضل 10 أدوات ذكاء اصطناعي للمهندسين المعماريين 🏗️",
    introduction: "أيها المهندسون المعماريون المبدعون! 🏗️✨ هل تحلمون بتصاميم فريدة ومستدامة؟ 💡 الذكاء الاصطناعي يفتح لكم أبواب الإبداع اللامحدود! 🤩 إليكم 10 أدوات ذكاء اصطناعي ستساعدكم في تصميم مبانٍ مبتكرة، وتحليل البيانات، وتحويل رؤاكم إلى واقع معماري مذهل. 🚀",
    tools: [{
        name: "Adobe Firefly",
        description: "أداة ذكاء اصطناعي توليدي لتسهيل عملية التصميم وتوليد الصور يمكن استخدامها لتعزيز الابتكار في عملية التصميم المعماري. 🔥🏗️🖼️",
        use_cases: ["إنشاء صور توضح الأفكار الأولية للتصاميم المعمارية. 🖼️💡🏗️", "إنشاء عدة تصورات للتصاميم المعمارية. 🖼️🏗️✨", "تعديل التصاميم وتحسينها. 🔄🏗️✅"],
        path: "https://www.adobe.com/sensei/generative-ai/firefly.html"
    }, {
        name: "Autodesk AI",
        description: "أداة معتمدة على الذكاء الاصطناعي التوليدي للمساعدة في تعزيز الإبداع وتحسين عملية التصميم عبر تحليل البيانات وتوقع المخاطر وأتمتة مهام التصميم الروتينية. 🏗️🤖🚀",
        use_cases: ["تحليل البيانات المناخية المؤثرة على التصميم المعماري. 📊🏗️☀️", "تحليل بيانات المشروع لتحديد المخاطر. 📊🏗️⚠️", "التعرف على الملاحظات المكتوبة بخط اليد وإضافتها إلى المخططات المعمارية. ✍️➡️📐🏗️"],
        path: "https://www.autodesk.com/solutions/artificial-intelligence"
    }, {
        name: "Midjourney",
        description: "أداة ذكاء اصطناعي توليدي لتوليد الصور ويمكن استخدامها لتعزيز الإبداع في التصميم المعماري. 🖼️🏗️✨",
        use_cases: ["توليد صور للتصاميم المعمارية. 🖼️🏗️", "توليد تصاميم ثلاثية أبعاد للتصاميم المعمارية. 3️⃣D🏗️🖼️", "تعديل التصاميم المعمارية وتحسينها. 🔄🏗️✅"],
        path: "https://www.midjourney.com/"
    }, {
        name: "Testfit AI",
        description: "أداة تستخدم الذكاء الاصطناعي التوليدي لتحسين عمليات تحليل وتخطيط المواقع للمشاريع المعمارية وأتمتة الأعمال الروتينية. 🏗️🤖🗺️",
        use_cases: ["إنشاء مخططات معمارية بناء على متطلبات محددة. 📐🏗️🎯", "إنشاء مخططات معمارية ثلاثية أبعاد. 3️⃣D📐🏗️", "تحليل التكاليف والعائد على الاستثمار للمشروع الهندسي. 💰🏗️📊"],
        path: "https://testfit.io/"
    }, {
        name: "Delve",
        description: "أداة قائمة على الذكاء الاصطناعي التوليدي لتحسين كفاءة عملية التصميم المعماري وجودتها وتعزيز التعاون بين فريق المشروع. 🏗️🚀🤝",
        use_cases: ["إنشاء تصاميم معمارية بناءً على مدخلات محددة. 📐🏗️🎯", "توليد عدة خيارات للتصميم المعماري وترتيبها بناء على أولويات المشروع. 🏗️✨🥇", "تقييم تكاليف البناء والعائد المتوقع على الاستثمار لكل تصميم معماري. 💰🏗️📊"],
        path: "https://www.sidewalklabs.com/our-work/delve"
    }, {
        name: "BricsCAD BIM",
        description: "أداة معتمدة على الذكاء الاصطناعي لإنشاء تصاميم معمارية ثنائية وثلاثية أبعاد وتعزيز عملية نمذجة معلومات البناء (BIM). 📐3️⃣D🏗️",
        use_cases: ["إنشاء تصاميم معمارية ثنائية أبعاد. 📐🏗️", "تحويل التصاميم المعمارية ثنائية الأبعاد إلى نماذج ثلاثية أبعاد. 2️⃣D➡️3️⃣D🏗️", "أتمتة المهام المتعلقة بنمذجة معلومات البناء. 🤖🏗️🗂️"],
        path: "https://www.bricsys.com/en-us/bricscad-bim/"
    }, {
        name: "Architechtures",
        description: "أداة تستخدم الذكاء الاصطناعي التوليدي لتعزيز رسم التصاميم الهندسية للمباني السكنية في الوقت الآني، وتحليل بيانات المشاريع المعمارية ودعم اتخاذ القرار. 📐🏠🚀",
        use_cases: ["إنشاء تصاميم معمارية ثنائية أبعاد للمباني السكنية بناء على متطلبات محددة. 📐🏠🎯", "عرض التصاميم المعمارية كنموذج ثلاثي أبعاد. 3️⃣D🏠🖼️", "استكشاف عدة خيارات لتصميم المبنى السكني. 🏠✨💡"],
        path: "https://architechtures.com/"
    }, {
        name: "AI Getfloorplan",
        description: "أداة معتمدة على الذكاء الاصطناعي لإنشاء مخططات هندسية ثنائية وثلاثية أبعاد وجولات افتراضية بزاوية (360) درجة للمباني. 📐3️⃣D🏗️🌐",
        use_cases: ["إنشاء مخططات هندسية ثلاثية أبعاد. 3️⃣D📐🏗️", "إنشاء مخططات هندسية ثنائية أبعاد. 📐🏗️", "إنشاء جولات افتراضية بزاوية (360) درجة للمباني بناء على نمط تصميم داخلي محدد. 🌐🏗️📐"],
        path: "https://getfloorplan.com/ai/"
    }, {
        name: "Maket",
        description: "أداة ذكاء اصطناعي توليدي تساعد على أتمتة عمليات التصميم المعماري وإنشاء المخططات والمجسمات ثلاثية الأبعاد للمباني السكنية. 🏗️🤖3️⃣D",
        use_cases: ["توليد مخططات معمارية مخصصة. 📐🏗️🎯", "توليد عدة خيارات للتصميم المعماري. 🏗️✨💡", "الإجابة عن الأسئلة في مجال التصميم المعماري عن طريق المحادثات النصية. 💬🏗️❓"],
        path: "https://maket.io/"
    }, {
        name: "Archistar",
        description: "أداة ذكاء اصطناعي توليدي تمكن من تحسين عمليات تصميم المخططات الهندسية وتحليل بيانات موقع المشروع المعماري وأتمتة المهام المتكررة. 🏗️🤖🚀",
        use_cases: ["إنشاء تصاميم أولية تراعي طبيعة الموقع وظروفه البيئية. 📐🏗️🌳", "تعديل التصاميم المعمارية وتحسينها. 🔄🏗️✅", "تحليل البيانات البيئية للموقع في الوقت الآني. 📊🏗️🌳⏱️"],
        path: "https://www.archistar.ai/"
    }]
}, {
    title: "أفضل 10 أدوات ذكاء اصطناعي لأخصائيي الموارد البشرية 🧑‍💼",
    introduction: "يا خبراء إدارة المواهب! 🧑‍💼🚀 هل تبحثون عن طرق لجعل عمليات الموارد البشرية أكثر ذكاءً وكفاءة؟ 🤔 الذكاء الاصطناعي هو الحل الأمثل! ✨ إليكم 10 أدوات ذكاء اصطناعي ستساعدكم في التوظيف، تطوير الموظفين، وتحسين تجربة الموظف بشكل عام. 🤩",
    tools: [{
        name: "LinkedIn Recruiter",
        description: "أداة معتمدة على الذكاء الاصطناعي في كتابة النصوص وتحليل البيانات وتوفير رؤى لاتخاذ قرارات توظيف مستنيرة وتسهيل عملية البحث عن المواهب في منصة لينكد إن (LinkedIn). 🧑‍💼🚀🔍",
        use_cases: ["البحث عن مرشحين مؤهلين للوظائف عن طريق المدخلات النصية. 🔍🧑‍💼🎯", "أتمتة إنشاء رسائل مخصصة للمرشحين. 🤖✉️🤝", "إنشاء تقارير مخصصة عن أداء عملية التوظيف. 📊🧑‍💼📈"],
        path: "https://business.linkedin.com/talent-solutions/recruiter"
    }, {
        name: "iCIMS Talent Cloud AI",
        description: "أداة تستخدم الذكاء الاصطناعي لتبسيط وتحسين كفاءة عمليات الموارد البشرية والتوظيف عبر إنشاء المحتوى وأتمتة المهام الروتينية وتقديم التوصيات. 🧑‍💼🚀🤖",
        use_cases: ["تحسين الوصف الوظيفي للوظيفة الشاغرة. 📝🧑‍💼✨", "إنشاء أسئلة المقابلات الشخصية للمرشحين. ❓🤝🧑‍💼", "أتمتة فرز السير الذاتية للمتقدمين للوظيفة وتحديد المرشحين. 🤖📄🧑‍💼🎯"],
        path: "https://www.icims.com/"
    }, {
        name: "Eightfold AI",
        description: "أداة ذكاء اصطناعي تساعد في تحليل البيانات وتوفير رؤى لدعم إدارة المواهب والاستقطاب وتعزيز عملية التوظيف وتحسين تجربة الموظف. 🧑‍💼🚀📊💡",
        use_cases: ["تحديد أفضل المرشحين للوظائف الشاغرة. 🎯🧑‍💼🥇", "تقديم توصيات لتطوير مهارات الموظفين. 💡🧑‍💼📈", "تقديم رؤى لدعم التخطيط للمسار الوظيفي للموظفين. 🛣️🧑‍💼💡"],
        path: "https://eightfold.ai/"
    }, {
        name: "Paradox Olivia",
        description: "أداة ذكاء اصطناعي توليدي تتفاعل مع المرشحين عبر المحادثات النصية لتعزيز تجربتهم وأتمتة عملية التوظيف وتحسينها. 💬🧑‍💼🚀🤝",
        use_cases: ["أتمتة جدولة المقابلات مع المرشحين. 🤖🗓️🤝", "تقييم مهارات المرشحين ومقارنتها مع متطلبات الوظيفة. 📊🧑‍💼🎯", "الإجابة عن استفسارات المرشحين عبر تطبيقات المحادثة. 💬🧑‍💼❓"],
        path: "https://www.paradox.ai/platform/olivia"
    }, {
        name: "Zoho Recruit",
        description: "أداة تستخدم الذكاء الاصطناعي لأتمتة المهام الروتينية في مختلف مراحل التوظيف وتبسيط ودعم عمليات البحث عن المرشحين وتقييمهم. 🧑‍💼🚀🤖",
        use_cases: ["فرز المرشحين وتحليل سيرهم الذاتية. 🤖📄🧑‍💼", "إنشاء مسارات عمل مخصصة لعمليات التوظيف. 🛣️🧑‍💼📝", "الرد على استفسارات المرشحين عبر المحادثات النصية. 💬🧑‍💼✉️"],
        path: "https://www.zoho.com/recruit/"
    }, {
        name: "UKG PRO",
        description: "أداة لإدارة رأس المال البشري تتضمن ميزات ذكاء اصطناعي توليدي لتحليل بيانات الموارد البشرية والإجابة عن الأسئلة حولها وتقديم رؤى لتحسين تجربة الموظف. 🧑‍💼🚀📊💡",
        use_cases: ["استخلاص البيانات وتحليلها لتوفير رؤى حول سير العمل. 📊🧑‍💼💡📈", "تقديم اقتراحات وتوصيات مخصصة للموظف لتحسين أدائه. 💡🧑‍💼📈", "الإجابة عن الأسئلة حول أفضل الممارسات في إدارة رأس المال البشري. 💬🧑‍💼❓💡"],
        path: "https://www.ukg.com/products/ukg-pro"
    }, {
        name: "Leena AI",
        description: "أداة ذكاء اصطناعي توليدي تدعم عدة لغات لتحسين خدمات الموارد البشرية وأتمتة المهام الروتينية وتعزيز سير العمل. 🧑‍💼🚀🤖🗣️",
        use_cases: ["أتمتة كتابة رسائل بريد إلكتروني مخصصة وإرسالها إلى الموظفين. 🤖📧✉️🤝", "أتمتة الإجابة عن الاستفسارات الشائعة للموظفين. 🤖💬🧑‍💼❓", "ترتيب طلبات الموارد البشرية حسب الأولوية وتجميعها في تقارير موجزة. 🤖📊🧑‍💼📈"],
        path: "https://www.leena.ai/"
    }, {
        name: "Fetcher",
        description: "أداة ذكاء اصطناعي لتعزيز عملية التوظيف وتبسيطها وتوفير رؤى حولها وتحسين التواصل مع المرشحين عبر أتمتة المهام الروتينية وتحليل البيانات. 🧑‍💼🚀🤖📊",
        use_cases: ["أتمتة البحث عن المرشحين في مختلف منصات التوظيف. 🤖🔍🧑‍💼🎯", "أتمتة تدقيق السير الذاتية. 🤖📄🧑‍💼", "أتمتة إنشاء رسائل بريد إلكتروني مخصصة للمرشحين مع تحديد المواعيد المناسبة وإرسالها. 🤖📧✉️🤝🗓️"],
        path: "https://www.fetcher.ai/"
    }, {
        name: "EVA-REC",
        description: "أداة ذكاء اصطناعي تساعد على تبسيط دورة عملية التوظيف وأتمتتها بدءًا من إنشاء طلبات الوظائف الشاغرة وحتى تأهيل الموظفين الجدد. 🧑‍💼🚀🤖",
        use_cases: ["أتمتة المهام الروتينية، مثل: تصفية السير الذاتية وجدولة المقابلات. 🤖📄🗓️🤝", "تقييم المتقدمين للوظائف. 📊🧑‍💼🎯", "إنشاء مخططات سير عمل مخصصة لعملية التوظيف. 📝🧑‍💼🛣️"],
        path: "https://www.eva-recruiter.com/"
    }, {
        name: "Loxo AI",
        description: "أداة معتمدة على الذكاء الاصطناعي لأتمتة المهام الروتينية وإدارة جميع مراحل عملية التوظيف من البحث عن المرشحين وتقييمهم والتواصل معهم إلى التعيين. 🧑‍💼🚀🤖🤝",
        use_cases: ["تقييم المرشحين وترتيبهم حسب ملاءمتهم لمتطلبات الوظيفة. 📊🧑‍💼🎯🥇", "إنشاء رسائل بريد إلكتروني مخصصة للمرشحين. 📧🧑‍💼✉️🤝", "توفير تحليلات بيانات وتنبؤات لدعم اتخاذ القرار في عملية التوظيف. 📊🔮🧑‍💼💡"],
        path: "https://www.loxo.co/platform/recruiting-ai"
    }]
}, {
    title: "أفضل 10 أدوات ذكاء اصطناعي لمديري المشاريع 💼",
    introduction: "يا قادة المشاريع! 💼🚀 هل تسعون لتحقيق مشاريع ناجحة بكفاءة وسلاسة؟ ✨ الذكاء الاصطناعي هو حليفكم الجديد في إدارة المشاريع! 🤝 إليكم 10 أدوات ذكاء اصطناعي ستساعدكم في التخطيط، التنظيم، والتعاون لتحقيق أهداف مشاريعكم ببراعة. 😎",
    tools: [{
        name: "Asana Intelligence",
        description: "أداة معتمدة على الذكاء الاصطناعي التوليدي للمساعدة في تخطيط سير العمل وتنظيمه وتسهيل إنشاء المحتوى وتلخيص المهام وتعزيز التعاون بين أعضاء الفريق. 🤝💼🚀",
        use_cases: ["الإجابة عن الأسئلة حول المشاريع عن طريق المحادثات النصية. 💬❓", "إنشاء مسارات عمل بناءً على مدخلات نصية بسيطة. 🛣️💼", "إنشاء تقارير توضح حالة المشاريع. 📊💼"],
        path: "https://asana.com/product/ai"
    }, {
        name: "Notion AI",
        description: "أداة قائمة على الذكاء الاصطناعي التوليدي لتحسين كفاءة إدارة المشاريع عن طريق تنظيم سير العمل وأتمتة المهام الروتينية وتعزيز التعاون بين أعضاء الفريق. 🤝💼🚀",
        use_cases: ["كتابة مختلف أنواع الوثائق للمشروع. 📝💼📄", "أتمتة تحديث حالة المشروع. 🤖💼🔄", "الإجابة عن الأسئلة حول إدارة المشاريع عن طريق المحادثات النصية. 💬💼❓"],
        path: "https://www.notion.so/product/ai"
    }, {
        name: "ClickUp Brain",
        description: "أداة معتمدة على الذكاء الاصطناعي التوليدي لإنشاء المحتوى والإجابة عن الأسئلة المتعلقة بالمشاريع وأتمتة المهام المتكررة عن طريق المدخلات النصية. 🧠💼🚀",
        use_cases: ["أتمتة إنشاء التقارير والملخصات حول حالة المشروع. 🤖📊💼📝", "تحويل المحادثات الصوتية في الاجتماعات إلى نصوص وتمكين البحث فيها. 🗣️➡️📝🔍", "الإجابة عن الأسئلة حول المهام أو المستندات أو فريق العمل. 💬💼❓"],
        path: "https://clickup.com/features/clickup-ai"
    }, {
        name: "Wrike Work Intelligence",
        description: "أداة قائمة على الذكاء الاصطناعي التوليدي لتعزيز إدارة المشاريع عبر تسهيل كتابة النصوص وتحريرها وتلخيصها، وتحليل بيانات المشروع وتحديد مجالات التحسين. 💼🚀📝",
        use_cases: ["كتابة رسائل البريد الإلكتروني والرد عليها. 📧💼✉️", "إنشاء خطط للمشاريع. 📝💼🛣️", "تلخيص مناقشات فريق العمل. 📝💼🤝"],
        path: "https://www.wrike.com/ai/"
    }, {
        name: "HiveMind (Hive)",
        description: "أداة معتمدة على الذكاء الاصطناعي التوليدي للمساعدة في مهام إدارة المشاريع المتعلقة بالمحتوى التي تشمل الكتابة والتدقيق اللغوي والترجمة. 💼🚀📝🗣️",
        use_cases: ["إنشاء مخططات العمل. 📝💼📈", "كتابة رسائل بريد إلكتروني مخصصة لأعضاء الفريق. 📧💼✉️🤝", "ترجمة المراسلات بين أعضاء الفريق إلى عدة لغات. 🗣️🌐🤝"],
        path: "https://hive.com/features/ai"
    }, {
        name: "Process AI (Process.st)",
        description: "أداة معتمدة على الذكاء الاصطناعي التوليدي لإنشاء سير العمل وتحسينه وإدارته وأتمتة المهام الروتينية. 💼🚀🤖",
        use_cases: ["إنشاء سير عمل مخصص. 💼🛣️", "تحليل سير العمل الحالي وتحديد فرص التحسين. 📊💼🔄", "توليد رسائل بريد إلكتروني مخصصة. 📧💼✉️"],
        path: "https://www.process.st/ai/"
    }, {
        name: "Planisware",
        description: "أداة تستخدم الذكاء الاصطناعي في تحليل البيانات وتوفير بوت محادثة لدعم مختلف مراحل إدارة المشاريع والمحافظ، والمتضمنة تحديد الأولويات وتقدير الموارد وإدارتها ومتابعة المهام. 💼🚀📊💬",
        use_cases: ["توليد هيكلية تقسيم العمل (WBS) للمشروع. 📝💼📈", "تحديد المخاطر المحتملة للمشروع. ⚠️💼📊", "الإجابة عن الأسئلة المتعلقة بإدارة المشاريع. 💬💼❓"],
        path: "https://www.planisware.com/en/solutions/planisware-ai"
    }, {
        name: "Timelyapp",
        description: "أداة تعمل بالذكاء الاصطناعي تساعد على متابعة المشاريع وإدارة الوقت وتتبعه تلقائيًا، وتوفير رؤى حول تنظيم المهام وأداء فريق العمل والإنتاجية. ⏱️💼🚀",
        use_cases: ["متابعة المشروع في الوقت الآني. ⏱️💼📊", "تتبع المهام وإدارتها. 💼✅📝", "تتبع الوقت الذي يقضيه كل عضو في الفريق لكل مهمة. ⏱️💼🤝"],
        path: "https://timelyapp.com/"
    }, {
        name: "Ayanza AI",
        description: "أداة معتمدة على الذكاء الاصطناعي التوليدي في كتابة المحتوى والإجابة عن الأسئلة لتحسين كفاءة إدارة المشاريع وتعزيز التواصل بين أعضاء الفريق. 🤝💼🚀💬",
        use_cases: ["توليد الأفكار وعمل العصف الذهني. 💡💼🧠", "إنشاء ردود على رسائل أعضاء الفريق. 💬🤝✉️", "الإجابة عن الأسئلة حول إدارة المشاريع. 💬💼❓"],
        path: "https://ayanza.com/"
    }, {
        name: "Planview",
        description: "أداة مبنية على الذكاء الاصطناعي في تحليل البيانات وتوفير رؤى ومعلومات حول المشاريع عن طريق المدخلات النصية لدعم اتخاذ القرارات الاستراتيجية. 📊💼🚀💡",
        use_cases: ["البحث في قواعد البيانات باستخدام المدخلات النصية. 🔍📊💼", "الإجابة عن الأسئلة المتعلقة بمشاريع محددة. 💬💼❓🎯", "توقع المخاطر المحتملة للمشروع بناءً على نماذج التحليلات التنبؤية. 🔮💼📊⚠️"],
        path: "https://www.planview.com/products/enterprise-portfolio-management/"
    }]
}, {
    title: "أفضل 10 أدوات ذكاء اصطناعي للمحاسبين 📊",
    introduction: "يا خبراء الأرقام! 📊💰 هل تبحثون عن طرق لجعل المحاسبة أكثر دقة وكفاءة؟ 🤔 الذكاء الاصطناعي هو الحل الأمثل لتحدياتكم! ✨ إليكم 10 أدوات ذكاء اصطناعي ستساعدكم في تحليل البيانات المالية، إعداد التقارير، وأتمتة المهام المحاسبية الروتينية. 🤩",
    tools: [{
        name: "Workiva",
        description: "أداة تستفيد من الذكاء الاصطناعي التوليدي لتعزيز عمليات تحليل البيانات المالية وإنشاء التقارير المالية وتحريرها وتلخيصها ومشاركتها. 📊💰🚀",
        use_cases: ["تلخيص المستندات المحاسبية. 📝📊📄", "توليد عروض تقديمية تلخص التقارير المالية. 📊💰✨", "أتمتة عمليات إعداد التقارير المالية. 🤖📊📝"],
        path: "https://www.workiva.com/"
    }, {
        name: "Appzen",
        description: "أداة معتمدة على الذكاء الاصطناعي لتقديم رؤية شاملة للنفقات وأتمتة عمليات رقمنة الفواتير ومعالجتها وتحليلها وتدقيقها وإعداد التقارير المالية. 💰📊🚀🤖",
        use_cases: ["أتمتة عمليات استخراج البيانات من الفواتير والتحقق من صحتها. 🤖📄✅", "تتبع الفواتير المدفوعة والمستحقة. 🧾✅", "توليد ردود مناسبة على رسائل البريد الإلكتروني الموجهة إلى قسم المحاسبة. 📧💬🤝💰"],
        path: "https://www.appzen.com/"
    }, {
        name: "Glean.ai Platform",
        description: "أداة ذكاء اصطناعي توفر رؤى شاملة حول النفقات المالية وتكاملاً سلسًا مع أنظمة المحاسبة المختلفة لتحسين كفاءة العمليات وتعزيز التعاون والشفافية المالية. 📊💰🚀🤝",
        use_cases: ["أتمتة استخراج بيانات الفواتير وتصنيفها. 🤖📄🗂️", "تحليل النفقات واستخلاص رؤى حول ترشيد الإنفاق وتحقيق وفورات مالية. 📊💰💡📈", "توفير إدارة مركزية لعمليات الشراء والتوريد والتعامل مع الموردين. 📦💰🤝"],
        path: "https://www.glean.ai/platform"
    }, {
        name: "VIC.AI",
        description: "أداة ذكاء اصطناعي توليدي تساعد على مراجعة وتدقيق الحسابات المالية وأتمتة العمليات الروتينية كمعالجة الفواتير والمعاملات المرتبطة بالمدفوعات. 💰📊🚀🤖",
        use_cases: ["أتمتة عملية رقمنة الفواتير. 🤖🧾➡️💻", "مراجعة الفواتير وتدقيقها. ✅🧾🔍", "تحليل بيانات الإنفاق. 📊💰📉"],
        path: "https://vic.ai/"
    }, {
        name: "Docyt AI",
        description: "أداة ذكاء اصطناعي توليدي توفر إدارة مركزية للعمليات المحاسبية وتساعد على أتمتتها لتحسين كفاءتها والحصول على رؤية شاملة لجميع البيانات المالية في مكان واحد. 📊💰🚀💻",
        use_cases: ["تحليل البيانات المالية. 📊💰📈📉", "إنشاء التقارير المالية المخصصة. 📊💰📝", "أتمتة إدارة الفواتير، بما في ذلك استلامها وتصنيفها وتتبع حالاتها. 🤖🧾🗂️✅"],
        path: "https://docyt.com/"
    }, {
        name: "Truewind",
        description: "أداة ذكاء اصطناعي لتبسيط إدارة العمليات المحاسبية وتعزيز كفاءتها، وتحسين عملية صنع القرار وتعزيز الامتثال للوائح المحاسبية والضريبية. 💰📊🚀✅",
        use_cases: ["مراجعة الأداء المالي وتحليله. ✅📊📈📉", "إنشاء تقارير مالية تفاعلية. 📊💰✨📝", "أتمتة عمليات مسك الدفاتر المحاسبية. 🤖💰📚"],
        path: "https://truewind.com/"
    }, {
        name: "Booke.ai",
        description: "أداة ذكاء اصطناعي تمكن من أتمتة العمليات المحاسبية وتحليل البيانات المالية وتعزيز اكتشاف الأخطاء المحاسبية ومعالجتها. 📊💰🚀🤖",
        use_cases: ["استخراج البيانات من الفواتير. 📄➡️📊💰", "تصنيف المعاملات المالية. 🗂️💰🧾", "مراجعة الحسابات المالية وتدقيقها. ✅💰🔍"],
        path: "https://booke.ai/"
    }, {
        name: "Zeni",
        description: "أداة ذكاء اصطناعي تساعد على أتمتة المهام المالية الروتينية، وتحليل البيانات المالية في الوقت الآني لدعم اتخاذ القرار، وإعداد التقارير المالية التفاعلية. 📊💰🚀⏱️",
        use_cases: ["إنشاء تقارير مالية مخصصة. 📊📝💰", "تحليل البيانات المالية واكتشاف الأنماط والاتجاهات. 📊📈📉🔍", "تصحيح الأخطاء في البيانات المالية. ✅📊💰"],
        path: "https://www.zeni.ai/"
    }, {
        name: "Gridlex Sky",
        description: "أداة تستخدم الذكاء الاصطناعي لإدارة العمليات المالية بكفاءة وأتمتة بعض مهام المحاسبة، إضافة إلى تحليل البيانات المالية واكتشاف الأنماط والاتجاهات. 📊💰🚀🤖",
        use_cases: ["تحليل الأداء المالي. 📊📈📉", "تتبع المعاملات المالية وتصنيفها وتحليلها. 🧾🗂️📊📈", "أتمتة العمليات المحاسبية، مثل: إدخال البيانات المالية. 🤖💰🧾➡️📊"],
        path: "https://www.gridlex.com/sky/accounting/"
    }, {
        name: "Hebbia",
        description: "أداة ذكاء اصطناعي توليدي تساعد على تحليل البيانات واستخراج المعلومات من المستندات وتصنيفها والبحث فيها، بما في ذلك المستندات المالية. 📊💰🚀🔍",
        use_cases: ["استخراج البيانات من الفواتير والعقود والتقارير المالية. 📄📊💰", "تحليل البيانات المالية لتحديد الأنماط والاتجاهات. 📊📈📉🔍", "تصنيف المستندات المالية حسب نوعها أو محتواها. 🗂️📊📄"],
        path: "https://www.hebbia.ai/"
    }]
}, {
    title: "أفضل 10 أدوات ذكاء اصطناعي للباحثين 🔬",
    introduction: "يا رواد المعرفة! 🔬🧑‍🔬👩‍🔬 الذكاء الاصطناعي يفتح آفاقًا جديدة للبحث العلمي! 🚀 هذه الأدوات العشرة ستساعدكم في إنجاز مهام الكتابة، تحليل الأبحاث، واكتشاف رؤى لم تكن ممكنة من قبل. 💡 استعدوا لعصر الاكتشافات العلمية المدعومة بالذكاء الاصطناعي! ✨",
    tools: [{
        name: "Grammarly",
        description: "أداة تستخدم الذكاء الاصطناعي التوليدي للمساعدة في إنجاز مهام الكتابة البحثية بدءًا من صياغة الأفكار ووصولًا إلى إعادة صياغة الجمل وتنقيح الأسلوب. ✍️🔬",
        use_cases: ["توليد أفكار للمحتوى البحثي. 💡📝", "اقتراح تحسينات للنصوص. 🔄✍️", "توليد النصوص البحثية بأسلوب الكاتب. 🖋️🔬"],
        path: "https://www.grammarly.com/"
    }, {
        name: "Consensus",
        description: "أداة تعمل كمحرك بحث علمي قائم على الذكاء الاصطناعي لتسهيل البحث عن الأبحاث والدراسات الموثوقة في مختلف المجالات واستخلاص المعلومات منها وشرحها. 🔍🔬💡",
        use_cases: ["البحث عن الأوراق العلمية. 🔍📄", "تلخيص الأوراق البحثية. 📝📄", "الإجابة عن الأسئلة العلمية مع الاستشهاد بمصادر المعلومات. ❓📚"],
        path: "https://consensus.app/"
    }, {
        name: "Elicit",
        description: "أداة تحليل الأوراق البحثية تتضمن ميزات ذكاء اصطناعي تساعد على أتمتة المهام البحثية وتحليل الأوراق البحثية لاستخراج البيانات منها. 📊🔬📄",
        use_cases: ["تلخيص الأوراق البحثية. 📝📄", "البحث عن أوراق أكاديمية في مجال محدد. 🔍📄🎯", "استخراج البيانات من الأوراق البحثية. 📊📄💡"],
        path: "https://elicit.com/"
    }, {
        name: "Scite AI",
        description: "أداة ذكاء اصطناعي للبحث عن الأوراق العلمية وتقييم موثوقيتها عبر توضيح أين استشهد بها والسياق والغرض من الاستشهاد. 🔬✅📄",
        use_cases: ["البحث عن أوراق علمية في مجال محدد. 🔍📄🎯", "تقييم جودة المراجع. ✅📄", "الإجابة عن الأسئلة العلمية مع الاستشهاد بمصادر المعلومات. ❓📚"],
        path: "https://scite.ai/"
    }, {
        name: "Jenni",
        description: "أداة ذكاء اصطناعي توليدي تساعد على كتابة محتوى بحثي وتحريره وتدقيقه والاستشهاد بالمراجع وتوثيقها. ✍️🔬✅",
        use_cases: ["الإكمال التلقائي للنصوص. 🤖✍️", "تحميل الورقة البحثية والإجابة عن الأسئلة من محتواها. 📄❓", "إعادة صياغة المحتوى بأي أسلوب مع الاستشهاد بالاقتباسات والتوثيق. 🔄✍️✅"],
        path: "https://jenni.ai/"
    }, {
        name: "TLDRthis",
        description: "أداة ذكاء اصطناعي توليدي تساعد على أتمتة تلخيص النصوص أو أجزاء منها لإنشاء محتوى موجز وسهل الاستيعاب. 📝🔬💡",
        use_cases: ["أتمتة تلخيص الأوراق العلمية. 🤖📝📄", "تلخيص محتوى صفحات الويب لتحديد المعلومات ذوات الصلة. 🌐📝💡", "البقاء على اطلاع بآخر التطورات في المجال عبر قراءة ملخصات الأوراق العلمية. 📰🔬💡"],
        path: "https://tldrthis.com/"
    }, {
        name: "typeset.io",
        description: "أداة ذكاء اصطناعي توليدي تساعد على فهم الأوراق البحثية وشرحها وتلخيصها وتحليلها واستخلاص البيانات منها. 🔬💡📊",
        use_cases: ["إعادة صياغة النصوص. 🔄✍️", "تلخيص الأوراق البحثية المعقدة. 📝📄🤯", "كتابة المراجعة الأدبية للبحوث العلمية. 📚🔬✍️"],
        path: "https://typeset.io/"
    }, {
        name: "Quillbot",
        description: "أداة تستخدم الذكاء الاصطناعي التوليدي لتنقيح النصوص وإعادة صياغتها وترجمتها وتلخيصها وتوليد الاقتباسات بعدة أساليب منها الكتابة الأكاديمية، إضافة إلى كشف الانتحال العلمي. ✍️🔬✅🚫",
        use_cases: ["توليد محتوى الأبحاث. 📝🔬", "إعادة صياغة النصوص بأسلوب أكاديمي. 🔄✍️🎓", "كشف المحتوى المولد باستخدام الذكاء الاصطناعي. 🚫🤖"],
        path: "https://quillbot.com/"
    }, {
        name: "Trinka AI",
        description: "أداة ذكاء اصطناعي تساعد على تحسين جودة النصوص وجعلها أكثر وضوحًا عن طريق تقديم اقتراحات لتحسين القواعد اللغوية والأسلوب. ✍️🔬✅",
        use_cases: ["اكتشاف وتصحيح الأخطاء اللغوية والنحوية. ✍️✅", "تحسين وضوح الكتابة العلمية. ✍️🔬✨", "إعادة صياغة النصوص لتجنب الانتحال العلمي. 🔄✍️🚫"],
        path: "https://www.trinka.ai/"
    }, {
        name: "Writefull",
        description: "أداة معتمدة على الذكاء الاصطناعي التوليدي لكتابة المحتوى الأكاديمي وإعادة صياغته وتحريره وتدقيقه لغويًا مع توفر توصيات لتحسين الكتابة في الوقت الآني. ✍️🔬🚀",
        use_cases: ["توليد عنوان الورقة البحثية بناءً على الملخص. 📝➡️🏷️", "توليد ملخص الورقة العلمية بناءً على محتواها. 📄➡️📝", "إعادة صياغة النصوص في الورقة البحثية. 🔄✍️📄"],
        path: "https://writefull.com/"
    }]
}, {
    title: "أفضل 10 أدوات ذكاء اصطناعي للأطباء 🩺",
    introduction: "يا ملائكة الرحمة! 🩺👩‍⚕️👨‍⚕️ الذكاء الاصطناعي ينضم إليكم في مهمتكم النبيلة! 😇 هذه الأدوات العشرة ستساعدكم في التشخيص الدقيق، تحليل الصور الطبية، وتحسين جودة الرعاية الصحية لمرضاكم. ❤️ استعدوا لمستقبل الرعاية الصحية الذكية! 🚀",
    tools: [{
        name: "AI-Rad Companion (Siemens Healthineers)",
        description: "أداة ذكاء اصطناعي تساعد على تحسين دقة وكفاءة تفسير الصور الطبية وتشخيص الأمراض واكتشاف التغيرات أو التشوهات. 🩻🩺🔍",
        use_cases: ["تحليل الصور الطبية وشرحها. 🩻🔍", "اكتشاف الأورام وتحديد أبعادها. 🦠📏", "تحديد أي علامات في الصور الطبية تدل على خطر الإصابة بأمراض معينة. 🚩🩻"],
        path: "https://www.siemens-healthineers.com/en-us/radiology/ai-in-radiology/ai-rad-companion"
    }, {
        name: "Viz CTP",
        description: "أداة ذكاء اصطناعي لتشخيص السكتة الدماغية وحالات تمدد الأوعية الدموية عن طريق تحليل صور التصوير المقطعي المحوسب (Computed Tomography) للدماغ. 🧠🩺🚑",
        use_cases: ["تقييم خطر اإلصابة بالسكتة الدماغية. 🚨🧠", "تحديد المناطق التي تعاني من نقص في تدفق الدم. 🩸🧠", "تشخيص السكتة الدماغية وتحديد موقعها وحجمها ونوعها. 🩺🧠📏"],
        path: "https://www.viz.ai/viz-ctp"
    }, {
        name: "Abridge AI",
        description: "أداة ذكاء اصطناعي توليدي تساعد على تحسين جودة الملاحظات الطبية وتعزيز كفاءة تدوينها عن طريق تحويل الأصوات إلى نصوص في الوقت الآني. 🩺📝🗣️",
        use_cases: ["تحويل المحادثات الصوتية بين المريض والطبيب إلى ملاحظات طبية. 🗣️➡️📝", "تلخيص المحادثات الطبية وتصنيفها لتسهيل قراءتها والبحث فيها. 📝📊🔍", "توثيق المقابلات في الأبحاث الطبية. 📄🔬🩺"],
        path: "https://www.abridge.com/"
    }, {
        name: "Nabla Copilot",
        description: "أداة ذكاء اصطناعي توليدي لتوثيق المحادثات الطبية وتحسين كفاءة تدوينها عبر تحويل الأصوات إلى نصوص في الوقت الآني سواء كانت المحادثات حضورية أو عن بعد. 🩺📝🗣️💻",
        use_cases: ["توليد ملخصات مخصصة للمرضى حول استشاراتهم الطبية. 📝🩺🤝", "توثيق معلومات المرضى في أنظمة السجلات الصحية الإلكترونية (EHR). 🏥📝💻", "تحويل المحادثات الصوتية بين المريض والطبيب إلى ملاحظات طبية. 🗣️➡️📝"],
        path: "https://nabla.com/copilot"
    }, {
        name: "DeepScribe",
        description: "أداة ذكاء اصطناعي توليدي لتحويل المحادثات الصوتية إلى ملاحظات نصية يمكن تخصيصها لأي مجال من مجالات الرعاية الصحية. 🩺📝🗣️🏥",
        use_cases: ["إنشاء ملاحظات ووثائق طبية مخصصة. 📝🩺📄", "تحويل المحادثات الصوتية بين المريض والممارس الصحي إلى نصوص. 🗣️➡️📝", "تحديث سجلات المرضى في أنظمة السجلات الصحية الإلكترونية (EHR). 🏥📝💻"],
        path: "https://www.deepscribe.ai/"
    }, {
        name: "Ambience",
        description: "أداة ذكاء اصطناعي لتعزيز عمليات توثيق السجلات الطبية وتحسين الدقة والكفاءة في مجال التشخيص الطبي ودعم التواصل بين مقدمي الرعاية الصحية والمرضى. 🩺📝🤝",
        use_cases: ["إنشاء ملاحظات طبية من المحادثات الصوتية بين الطبيب والمريض في الوقت الآني. 🗣️➡️📝", "التحقق من دقة الترميز الطبي في السجلات الطبية. ✅📝", "إنشاء ملخصات مخصصة للمرضى حول استشاراتهم الطبية. 📝🩺🤝"],
        path: "https://ambiencehealthcare.com/"
    }, {
        name: "Memora Health",
        description: "أداة ذكاء اصطناعي توليدي لتبسيط عمليات إدارة الرعاية الصحية وتعزيز تجربة المريض ودعم التواصل بينه وبين مقدمي الرعاية الصحية. 🏥🤝🚀",
        use_cases: ["أتمتة المهام الروتينية، مثل: جدولة المواعيد أو إرسال رسائل التذكير. 🤖🗓️✉️", "توليد إجابات عن الأسئلة الشائعة للمرضى. 💬🩺❓", "إنشاء رسائل مخصصة للمرضى لتقديم التعليمات والدعم. ✉️🩺🤝"],
        path: "https://www.memorahealth.com/"
    }, {
        name: "Athelas",
        description: "أداة معتمدة على الذكاء الاصطناعي قابلة للتخصيص لرفع كفاءة العمليات التشغيلية وتحسين الرعاية الصحية وتعزيز التواصل بين مقدمي الرعاية الصحية والمرضى. 🏥🚀🤝",
        use_cases: ["أتمتة عملية التوثيق الطبي وتحديث السجلات الصحية عبر تحويل الأصوات إلى نصوص. 🤖📝🏥", "توليد رسائل بريد إلكتروني مخصصة لإشعار المريض بحالته الصحية. 📧🩺✉️", "أتمتة عمليات إدارة دورة الإيرادات لمنشآت الرعاية الصحية. 🤖🏥💰"],
        path: "https://www.athelas.com/"
    }, {
        name: "ChatRWD (Atropos Health)",
        description: "أداة معتمدة على الذكاء الاصطناعي للتفاعل مع قواعد البيانات الطبية عن طريق المحادثات النصية لاستخراج المعلومات وتحليل البيانات الطبية واستخلاص الرؤى. 💬📊🔬🏥",
        use_cases: ["توليد إجابات مخصصة عن الأسئلة الطبية. 💬🩺❓", "تحليل البيانات الطبية لتحديد الأنماط والاتجاهات حول الرعاية الصحية. 📊🔬📈🏥", "الاستعلام والبحث في قواعد البيانات الطبية. 🔍🏥📚"],
        path: "https://www.atroposhealth.com/chatrwd"
    }, {
        name: "Flywheel",
        description: "أداة ذكاء اصطناعي تستخدم لتحسين إدارة البيانات والصور الطبية وتحليلها ومشاركتها ودعم التعاون بين الفرق البحثية في المجال الطبي. 🗂️🖼️📊🤝🏥",
        use_cases: ["أتمتة مهام تحليل البيانات. 🤖📊", "اكتشاف الأنماط والرؤى. 🔍💡📈", "تنظيم البيانات وإدارتها. 🗂️🤖"],
        path: "https://www.flywheel.io/"
    }]
}, {
    title: "أفضل 10 أدوات ذكاء اصطناعي للمصممين 🎨",
    introduction: "يا مبدعي التصميم! 🖌️ استعدوا لإطلاق العنان لإبداعكم بمساعدة الذكاء الاصطناعي! هذه الأدوات ستغير طريقة عملكم، من توليد الصور إلى تحريرها بلمسة سحرية. ✨ اكتشفوا كيف يمكن للذكاء الاصطناعي أن يكون أفضل صديق للمصمم. 🤝",
    tools: [{
        name: "Adobe Firefly",
        description: "أداة معتمدة على الذكاء الاصطناعي التوليدي لتوليد الصور وتحريرها وإضافة تأثيرات على النصوص عن طريق المدخلات النصية. 🔥",
        use_cases: ["تحويل النصوص إلى صور. 📝➡️🖼️", "تحرير الصور لإضافة عناصر. ➕🖼️", "تحرير الصور لحذف عناصر. ➖🖼️"],
        path: "https://www.adobe.com/sensei/generative-ai/firefly.html"
    }, {
        name: "Midjourney",
        description: "أداة ذكاء اصطناعي توليدي تساعد على إنشاء محتوى إبداعي عن طريق توليد التصاميم الفنية والصور وتحريرها ومشاركتها. 🏞️",
        use_cases: ["كتابة وصف للصور. 📝➡️🖼️", "دمج عدة صور لتوليد صورة جديدة. 🖼️➕🖼️➡️🖼️", "تحويل النصوص إلى صور. 📝➡️🖼️"],
        path: "https://www.midjourney.com/"
    }, {
        name: "DALLE-2",
        description: "أداة ذكاء اصطناعي توليدي تمكن من إنشاء صور وتصاميم إبداعية وتحريرها بمختلف الأنماط والأساليب الفنية عن طريق المدخلات النصية. 🖼️",
        use_cases: ["تحويل النصوص إلى صور. 📝➡️🖼️", "إنشاء صور بأسلوب فني معين. 🎨", "إضافة عناصر جديدة إلى الصور. ➕🖼️"],
        path: "https://openai.com/dall-e-2"
    }, {
        name: "Magic Design (Canva)",
        description: "أداة معتمدة على الذكاء الاصطناعي التوليدي لتوليد صور وفيديوهات من النصوص وتحريرها وإضافة تأثيرات إلى النصوص والأشكال لإنشاء أنماط جديدة. ✨",
        use_cases: ["تحرير الصور وتغيير أبعادها. 📐🖼️", "تحويل النصوص إلى صور. 📝➡️🖼️", "تحويل النصوص إلى فيديوهات. 📝➡️🎞️"],
        path: "https://www.canva.com/magic-design/"
    }, {
        name: "RunwayML",
        description: "أداة ذكاء اصطناعي توليدي لإنشاء الصور والأصوات والفيديوهات والنماذج ثلاثية الأبعاد وتحريرها والتمكين من استخدام أنماط وأساليب فنية معينة. 🎬🏞️🔊",
        use_cases: ["توليد صور من نصوص أو صور. 📝➡️🖼️, 🖼️➡️🖼️", "توليد فيديوهات من نصوص أو صور أو فيديوهات. 📝➡️🎞️, 🖼️➡️🎞️, 🎞️➡️🎞️", "توليد أصوات عن طريق تحويل النصوص إلى أصوات. 📝➡️🔊"],
        path: "https://runwayml.com/"
    }, {
        name: "Picsart",
        description: "أداة قائمة على الذكاء الاصطناعي التوليدي لإنشاء الصور و الفيديوهات وتحريرها عن طريق المدخلات النصية. 🖼️🎬",
        use_cases: ["تغيير خلفيات الصور. 🖼️➡️🖼️", "تحسين الصور ورفع جودتها. ✨🖼️", "توليد صور أو فيديوهات من النصوص. 📝➡️🖼️/🎞️"],
        path: "https://picsart.com/"
    }, {
        name: "TEXT TO IMAGE",
        description: "أداة ذكاء اصطناعي توليدي تساعد على إنشاء مختلف أنواع الصور وتحريرها أو دمج عناصر من صور مختلفة. 🖼️",
        use_cases: ["تحويل النصوص إلى صور. 📝➡️🖼️", "تحرير الصور بأسلوب فني محدد. 🎨🖼️", "إنشاء صور مختلفة من صورة واحدة. 🖼️➡️🖼️+🖼️+…"],
        path: "https://imagetotext.ai/ (قد تحتاج إلى البحث عن الأداة المحددة بناءً على الاسم)"
    }, {
        name: "Kittl AI",
        description: "أداة ذكاء اصطناعي توليدي لإنشاء صور وأيقونات وقصاصات فنية مع إمكانية تحرير الصور إلى أنماط مختلفة. 🎨🖼️",
        use_cases: ["تحويل النصوص إلى صور. 📝➡️🖼️", "تحويل النصوص إلى أيقونات. 📝➡️<0xF0><0x9F><0xAA><0x9B>", "تحرير الصور وتحويلها إلى تصاميم فنية. 🖼️➡️🎨"],
        path: "https://www.kittl.com/"
    }, {
        name: "Looka",
        description: "أداة ذكاء اصطناعي توليدي تساعد على إنشاء شعارات مخصصة وبناء هوية العلامة التجارية دون الحاجة إلى مهارات التصميم. 🏷️",
        use_cases: ["إنشاء شعارات مخصصة للعلامة التجارية. 🚀🏷️", "تصميم بطاقات عمل ووثائق تسويقية. 💼📄", "تصميم قوالب بريد إلكتروني مخصصة. 📧"],
        path: "https://looka.com/"
    }, {
        name: "Photosonic",
        description: "أداة ذكاء اصطناعي توليدي لتوليد الصور والأعمال الفنية عن طريق تحويل النصوص إلى صور أو تصاميم فنية. 🖼️🎨",
        use_cases: ["إنشاء صور تتناسب مع مختلف وسائل التواصل الاجتماعي. 🌐🖼️", "إنشاء صور لتصميم العروض التقديمية. 📊🖼️", "تصميم مواد تسويقية لمنصات التواصل الاجتماعي. 📣🖼️"],
        path: "https://photosonic.writesonic.com/"
    }]
}];
function z0() {
    return D0
}
const $p = v.forwardRef( ({className: e, type: t, ...n}, r) => w.jsx("input", {
    type: t,
    className: he("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", e),
    ref: r,
    ...n
}));
$p.displayName = "Input";
function b0({value: e, onChange: t, placeholder: n}) {
    return w.jsxs("div", {
        className: "relative",
        children: [w.jsx(Np, {
            className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5"
        }), w.jsx($p, {
            type: "text",
            value: e,
            onChange: r => t(r.target.value),
            placeholder: n || "ابحث عن أدوات الذكاء الاصطناعي...",
            className: "pr-4 pl-10 py-6 text-foreground"
        })]
    })
}
const $0 = Pp("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , Up = v.forwardRef( ({className: e, variant: t, size: n, asChild: r=!1, ...o}, s) => {
    const i = r ? eo : "button";
    return w.jsx(i, {
        className: he($0({
            variant: t,
            size: n,
            className: e
        })),
        ref: s,
        ...o
    })
}
);
Up.displayName = "Button";
function U0(e, t=[]) {
    let n = [];
    function r(s, i) {
        const l = v.createContext(i)
          , a = n.length;
        n = [...n, i];
        function u(p) {
            const {scope: f, children: x, ...g} = p
              , y = (f == null ? void 0 : f[e][a]) || l
              , E = v.useMemo( () => g, Object.values(g));
            return w.jsx(y.Provider, {
                value: E,
                children: x
            })
        }
        function d(p, f) {
            const x = (f == null ? void 0 : f[e][a]) || l
              , g = v.useContext(x);
            if (g)
                return g;
            if (i !== void 0)
                return i;
            throw new Error(`\`${p}\` must be used within \`${s}\``)
        }
        return u.displayName = s + "Provider",
        [u, d]
    }
    const o = () => {
        const s = n.map(i => v.createContext(i));
        return function(l) {
            const a = (l == null ? void 0 : l[e]) || s;
            return v.useMemo( () => ({
                [`__scope${e}`]: {
                    ...l,
                    [e]: a
                }
            }), [l, a])
        }
    }
    ;
    return o.scopeName = e,
    [r, V0(o, ...t)]
}
function V0(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(s) {
            const i = r.reduce( (l, {useScope: a, scopeName: u}) => {
                const p = a(s)[`__scope${u}`];
                return {
                    ...l,
                    ...p
                }
            }
            , {});
            return v.useMemo( () => ({
                [`__scope${t.scopeName}`]: i
            }), [i])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
var B0 = Nc.useId || ( () => {}
)
  , W0 = 0;
function Vp(e) {
    const [t,n] = v.useState(B0());
    return to( () => {
        e || n(r => r ?? String(W0++))
    }
    , [e]),
    e || (t ? `radix-${t}` : "")
}
var Q0 = v.createContext(void 0);
function Bp(e) {
    const t = v.useContext(Q0);
    return e || t || "ltr"
}
var Ci = "rovingFocusGroup.onEntryFocus"
  , H0 = {
    bubbles: !1,
    cancelable: !0
}
  , Us = "RovingFocusGroup"
  , [Cl,Wp,K0] = Zf(Us)
  , [G0,Qp] = U0(Us, [K0])
  , [q0,Y0] = G0(Us)
  , Hp = v.forwardRef( (e, t) => w.jsx(Cl.Provider, {
    scope: e.__scopeRovingFocusGroup,
    children: w.jsx(Cl.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: w.jsx(X0, {
            ...e,
            ref: t
        })
    })
}));
Hp.displayName = Us;
var X0 = v.forwardRef( (e, t) => {
    const {__scopeRovingFocusGroup: n, orientation: r, loop: o=!1, dir: s, currentTabStopId: i, defaultCurrentTabStopId: l, onCurrentTabStopIdChange: a, onEntryFocus: u, preventScrollOnEntryFocus: d=!1, ...p} = e
      , f = v.useRef(null)
      , x = Jt(t, f)
      , g = Bp(s)
      , [y=null,E] = ka({
        prop: i,
        defaultProp: l,
        onChange: a
    })
      , [h,c] = v.useState(!1)
      , m = pt(u)
      , S = Wp(n)
      , k = v.useRef(!1)
      , [N,P] = v.useState(0);
    return v.useEffect( () => {
        const _ = f.current;
        if (_)
            return _.addEventListener(Ci, m),
            () => _.removeEventListener(Ci, m)
    }
    , [m]),
    w.jsx(q0, {
        scope: n,
        orientation: r,
        dir: g,
        loop: o,
        currentTabStopId: y,
        onItemFocus: v.useCallback(_ => E(_), [E]),
        onItemShiftTab: v.useCallback( () => c(!0), []),
        onFocusableItemAdd: v.useCallback( () => P(_ => _ + 1), []),
        onFocusableItemRemove: v.useCallback( () => P(_ => _ - 1), []),
        children: w.jsx(Se.div, {
            tabIndex: h || N === 0 ? -1 : 0,
            "data-orientation": r,
            ...p,
            ref: x,
            style: {
                outline: "none",
                ...e.style
            },
            onMouseDown: re(e.onMouseDown, () => {
                k.current = !0
            }
            ),
            onFocus: re(e.onFocus, _ => {
                const j = !k.current;
                if (_.target === _.currentTarget && j && !h) {
                    const O = new CustomEvent(Ci,H0);
                    if (_.currentTarget.dispatchEvent(O),
                    !O.defaultPrevented) {
                        const W = S().filter(H => H.focusable)
                          , D = W.find(H => H.active)
                          , Ee = W.find(H => H.id === y)
                          , ie = [D, Ee, ...W].filter(Boolean).map(H => H.ref.current);
                        qp(ie, d)
                    }
                }
                k.current = !1
            }
            ),
            onBlur: re(e.onBlur, () => c(!1))
        })
    })
}
)
  , Kp = "RovingFocusGroupItem"
  , Gp = v.forwardRef( (e, t) => {
    const {__scopeRovingFocusGroup: n, focusable: r=!0, active: o=!1, tabStopId: s, ...i} = e
      , l = Vp()
      , a = s || l
      , u = Y0(Kp, n)
      , d = u.currentTabStopId === a
      , p = Wp(n)
      , {onFocusableItemAdd: f, onFocusableItemRemove: x} = u;
    return v.useEffect( () => {
        if (r)
            return f(),
            () => x()
    }
    , [r, f, x]),
    w.jsx(Cl.ItemSlot, {
        scope: n,
        id: a,
        focusable: r,
        active: o,
        children: w.jsx(Se.span, {
            tabIndex: d ? 0 : -1,
            "data-orientation": u.orientation,
            ...i,
            ref: t,
            onMouseDown: re(e.onMouseDown, g => {
                r ? u.onItemFocus(a) : g.preventDefault()
            }
            ),
            onFocus: re(e.onFocus, () => u.onItemFocus(a)),
            onKeyDown: re(e.onKeyDown, g => {
                if (g.key === "Tab" && g.shiftKey) {
                    u.onItemShiftTab();
                    return
                }
                if (g.target !== g.currentTarget)
                    return;
                const y = ew(g, u.orientation, u.dir);
                if (y !== void 0) {
                    if (g.metaKey || g.ctrlKey || g.altKey || g.shiftKey)
                        return;
                    g.preventDefault();
                    let h = p().filter(c => c.focusable).map(c => c.ref.current);
                    if (y === "last")
                        h.reverse();
                    else if (y === "prev" || y === "next") {
                        y === "prev" && h.reverse();
                        const c = h.indexOf(g.currentTarget);
                        h = u.loop ? tw(h, c + 1) : h.slice(c + 1)
                    }
                    setTimeout( () => qp(h))
                }
            }
            )
        })
    })
}
);
Gp.displayName = Kp;
var Z0 = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
};
function J0(e, t) {
    return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e
}
function ew(e, t, n) {
    const r = J0(e.key, n);
    if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
        return Z0[r]
}
function qp(e, t=!1) {
    const n = document.activeElement;
    for (const r of e)
        if (r === n || (r.focus({
            preventScroll: t
        }),
        document.activeElement !== n))
            return
}
function tw(e, t) {
    return e.map( (n, r) => e[(t + r) % e.length])
}
var nw = Hp
  , rw = Gp
  , Ia = "Tabs"
  , [ow,fw] = Jf(Ia, [Qp])
  , Yp = Qp()
  , [sw,Aa] = ow(Ia)
  , Xp = v.forwardRef( (e, t) => {
    const {__scopeTabs: n, value: r, onValueChange: o, defaultValue: s, orientation: i="horizontal", dir: l, activationMode: a="automatic", ...u} = e
      , d = Bp(l)
      , [p,f] = ka({
        prop: r,
        onChange: o,
        defaultProp: s
    });
    return w.jsx(sw, {
        scope: n,
        baseId: Vp(),
        value: p,
        onValueChange: f,
        orientation: i,
        dir: d,
        activationMode: a,
        children: w.jsx(Se.div, {
            dir: d,
            "data-orientation": i,
            ...u,
            ref: t
        })
    })
}
);
Xp.displayName = Ia;
var Zp = "TabsList"
  , Jp = v.forwardRef( (e, t) => {
    const {__scopeTabs: n, loop: r=!0, ...o} = e
      , s = Aa(Zp, n)
      , i = Yp(n);
    return w.jsx(nw, {
        asChild: !0,
        ...i,
        orientation: s.orientation,
        dir: s.dir,
        loop: r,
        children: w.jsx(Se.div, {
            role: "tablist",
            "aria-orientation": s.orientation,
            ...o,
            ref: t
        })
    })
}
);
Jp.displayName = Zp;
var eh = "TabsTrigger"
  , th = v.forwardRef( (e, t) => {
    const {__scopeTabs: n, value: r, disabled: o=!1, ...s} = e
      , i = Aa(eh, n)
      , l = Yp(n)
      , a = oh(i.baseId, r)
      , u = sh(i.baseId, r)
      , d = r === i.value;
    return w.jsx(rw, {
        asChild: !0,
        ...l,
        focusable: !o,
        active: d,
        children: w.jsx(Se.button, {
            type: "button",
            role: "tab",
            "aria-selected": d,
            "aria-controls": u,
            "data-state": d ? "active" : "inactive",
            "data-disabled": o ? "" : void 0,
            disabled: o,
            id: a,
            ...s,
            ref: t,
            onMouseDown: re(e.onMouseDown, p => {
                !o && p.button === 0 && p.ctrlKey === !1 ? i.onValueChange(r) : p.preventDefault()
            }
            ),
            onKeyDown: re(e.onKeyDown, p => {
                [" ", "Enter"].includes(p.key) && i.onValueChange(r)
            }
            ),
            onFocus: re(e.onFocus, () => {
                const p = i.activationMode !== "manual";
                !d && !o && p && i.onValueChange(r)
            }
            )
        })
    })
}
);
th.displayName = eh;
var nh = "TabsContent"
  , rh = v.forwardRef( (e, t) => {
    const {__scopeTabs: n, value: r, forceMount: o, children: s, ...i} = e
      , l = Aa(nh, n)
      , a = oh(l.baseId, r)
      , u = sh(l.baseId, r)
      , d = r === l.value
      , p = v.useRef(d);
    return v.useEffect( () => {
        const f = requestAnimationFrame( () => p.current = !1);
        return () => cancelAnimationFrame(f)
    }
    , []),
    w.jsx(Ca, {
        present: o || d,
        children: ({present: f}) => w.jsx(Se.div, {
            "data-state": d ? "active" : "inactive",
            "data-orientation": l.orientation,
            role: "tabpanel",
            "aria-labelledby": a,
            hidden: !f,
            id: u,
            tabIndex: 0,
            ...i,
            ref: t,
            style: {
                ...e.style,
                animationDuration: p.current ? "0s" : void 0
            },
            children: f && s
        })
    })
}
);
rh.displayName = nh;
function oh(e, t) {
    return `${e}-trigger-${t}`
}
function sh(e, t) {
    return `${e}-content-${t}`
}
var iw = Xp
  , ih = Jp
  , lh = th
  , ah = rh;
const lw = iw
  , uh = v.forwardRef( ({className: e, ...t}, n) => w.jsx(ih, {
    ref: n,
    className: he("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", e),
    ...t
}));
uh.displayName = ih.displayName;
const ch = v.forwardRef( ({className: e, ...t}, n) => w.jsx(lh, {
    ref: n,
    className: he("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm", e),
    ...t
}));
ch.displayName = lh.displayName;
const dh = v.forwardRef( ({className: e, ...t}, n) => w.jsx(ah, {
    ref: n,
    className: he("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", e),
    ...t
}));
dh.displayName = ah.displayName;
function ac() {
    var u;
    const [e,t] = v.useState("")
      , [n,r] = v.useState(!1)
      , [o,s] = v.useState(!1)
      , [i,l] = v.useState(null);
    v.useEffect( () => {
        const d = () => {
            s(window.scrollY > 100)
        }
        ;
        return window.addEventListener("scroll", d),
        () => window.removeEventListener("scroll", d)
    }
    , []);
    const a = z0();
    return v.useMemo( () => e.trim() ? a.map(d => ({
        ...d,
        tools: d.tools.filter(p => {
            const f = e.toLowerCase();
            return p.name.toLowerCase().includes(f) || p.description.toLowerCase().includes(f) || p.use_cases.some(x => x.toLowerCase().includes(f))
        }
        )
    })).filter(d => d.tools.length > 0) : a, [a, e]),
    w.jsxs("div", {
        className: "min-h-screen bg-background flex flex-col",
        dir: "rtl",
        children: [w.jsx("header", {
            className: "fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground h-16",
            children: w.jsx("div", {
                className: "container mx-auto px-4 h-full",
                children: w.jsxs("div", {
                    className: "flex items-center justify-between h-full",
                    children: [w.jsxs("div", {
                        className: "flex items-center gap-4",
                        children: [w.jsx(Up, {
                            variant: "ghost",
                            size: "icon",
                            onClick: () => r(!n),
                            children: w.jsx(Np, {
                                className: "h-5 w-5"
                            })
                        }), n && w.jsx("div", {
                            className: "w-64 transition-all duration-300 ease-in-out",
                            children: w.jsx(b0, {
                                value: e,
                                onChange: t
                            })
                        })]
                    }), w.jsx("h1", {
                        className: "text-xl font-bold",
                        children: "دليل أدوات الذكاء الاصطناعي"
                    })]
                })
            })
        }), w.jsxs("main", {
            className: "container mx-auto px-4 py-8 flex-grow mt-20",
            children: [w.jsx("h2", {
                className: "text-2xl text-center mb-8 text-muted-foreground",
                children: "استكشف أفضل أدوات الذكاء الاصطناعي مصنفة في فئات متنوعة"
            }), w.jsxs(lw, {
                defaultValue: (u = a[0]) == null ? void 0 : u.title,
                className: "w-full flex flex-col relative",
                onValueChange: d => {
                    const p = a.findIndex(f => f.title === d);
                    l(p)
                }
                ,
                children: [w.jsx(uh, {
                    className: "w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 bg-transparent mb-8 relative z-10",
                    children: a.map( (d, p) => w.jsx(ch, {
                        value: d.title,
                        className: `w-full text-center py-6 ${i === p ? "bg-primary text-primary-foreground" : ""}`,
                        children: d.title.split(" ").slice(-2).join(" ")
                    }, p))
                }), w.jsx("div", {
                    className: "mt-4 relative z-0",
                    children: a.map( (d, p) => w.jsx(dh, {
                        value: d.title,
                        className: "relative",
                        children: w.jsx(F0, {
                            category: d,
                            categoryIndex: p,
                            isActive: i === p
                        })
                    }, p))
                })]
            })]
        }), w.jsxs("footer", {
            className: "fixed bottom-0 left-0 right-0 bg-background border-t p-4 text-center",
            children: [w.jsxs("div", {
                className: "flex justify-center gap-4 mb-2",
                children: [w.jsxs("a", {
                    href: "https://github.com/MrIbrahem",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-foreground hover:text-primary transition-colors",
                    children: [w.jsx(Bg, {
                        className: "h-5 w-5"
                    }), w.jsx("span", {
                        className: "sr-only",
                        children: "GitHub"
                    })]
                }), w.jsxs("a", {
                    href: "https://www.instagram.com/ibrahem.al.radaei",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-foreground hover:text-primary transition-colors",
                    children: [w.jsx(Wg, {
                        className: "h-5 w-5"
                    }), w.jsx("span", {
                        className: "sr-only",
                        children: "Instagram"
                    })]
                }), w.jsxs("a", {
                    href: "https://twitter.com/MrIbrahem",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-foreground hover:text-primary transition-colors",
                    children: [w.jsx(Qg, {
                        className: "h-5 w-5"
                    }), w.jsx("span", {
                        className: "sr-only",
                        children: "Twitter"
                    })]
                }), w.jsxs("a", {
                    href: "https://www.facebook.com/Mr.Ibrahem",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-foreground hover:text-primary transition-colors",
                    children: [w.jsx(Vg, {
                        className: "h-5 w-5"
                    }), w.jsx("span", {
                        className: "sr-only",
                        children: "Facebook"
                    })]
                })]
            }), w.jsx("p", {
                className: "text-sm text-muted-foreground",
                children: "م/إبراهيم الرداعي - 770633517"
            })]
        })]
    })
}
function aw() {
    return w.jsxs(hy, {
        children: [w.jsx(yi, {
            path: "/",
            component: ac
        }), w.jsx(yi, {
            path: "/AI-tools-dictionary/",
            component: ac
        }), w.jsx(yi, {
            component: M0
        })]
    })
}
function uw() {
    return w.jsxs(zy, {
        client: Uy,
        children: [w.jsx(aw, {}), w.jsx(R0, {})]
    })
}
Of(document.getElementById("root")).render(w.jsx(uw, {}));
