import oe, { forwardRef as V, createElement as P } from "react";
var T = { exports: {} }, v = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var D;
function se() {
  if (D) return v;
  D = 1;
  var t = Symbol.for("react.transitional.element"), a = Symbol.for("react.fragment");
  function c(i, l, o) {
    var b = null;
    if (o !== void 0 && (b = "" + o), l.key !== void 0 && (b = "" + l.key), "key" in l) {
      o = {};
      for (var d in l)
        d !== "key" && (o[d] = l[d]);
    } else o = l;
    return l = o.ref, {
      $$typeof: t,
      type: i,
      key: b,
      ref: l !== void 0 ? l : null,
      props: o
    };
  }
  return v.Fragment = a, v.jsx = c, v.jsxs = c, v;
}
var R = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var W;
function ue() {
  return W || (W = 1, process.env.NODE_ENV !== "production" && function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === te ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case A:
          return "Fragment";
        case G:
          return "Profiler";
        case z:
          return "StrictMode";
        case Q:
          return "Suspense";
        case K:
          return "SuspenseList";
        case re:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case B:
            return "Portal";
          case Z:
            return (e.displayName || "Context") + ".Provider";
          case X:
            return (e._context.displayName || "Context") + ".Consumer";
          case H:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case ee:
            return r = e.displayName || null, r !== null ? r : t(e.type) || "Memo";
          case N:
            r = e._payload, e = e._init;
            try {
              return t(e(r));
            } catch {
            }
        }
      return null;
    }
    function a(e) {
      return "" + e;
    }
    function c(e) {
      try {
        a(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var n = r.error, s = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          s
        ), a(e);
      }
    }
    function i(e) {
      if (e === A) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === N)
        return "<...>";
      try {
        var r = t(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function l() {
      var e = g.A;
      return e === null ? null : e.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function b(e) {
      if (Y.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function d(e, r) {
      function n() {
        $ || ($ = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      n.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: n,
        configurable: !0
      });
    }
    function k() {
      var e = t(this.type);
      return I[e] || (I[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function w(e, r, n, s, m, f, j, O) {
      return n = f.ref, e = {
        $$typeof: C,
        type: e,
        key: r,
        props: f,
        _owner: m
      }, (n !== void 0 ? n : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: k
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: j
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: O
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function _(e, r, n, s, m, f, j, O) {
      var u = r.children;
      if (u !== void 0)
        if (s)
          if (ne(u)) {
            for (s = 0; s < u.length; s++)
              S(u[s]);
            Object.freeze && Object.freeze(u);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else S(u);
      if (Y.call(r, "key")) {
        u = t(e);
        var p = Object.keys(r).filter(function(ae) {
          return ae !== "key";
        });
        s = 0 < p.length ? "{key: someKey, " + p.join(": ..., ") + ": ...}" : "{key: someKey}", F[u + s] || (p = 0 < p.length ? "{" + p.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          s,
          u,
          p,
          u
        ), F[u + s] = !0);
      }
      if (u = null, n !== void 0 && (c(n), u = "" + n), b(r) && (c(r.key), u = "" + r.key), "key" in r) {
        n = {};
        for (var y in r)
          y !== "key" && (n[y] = r[y]);
      } else n = r;
      return u && d(
        n,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), w(
        e,
        u,
        f,
        m,
        l(),
        n,
        j,
        O
      );
    }
    function S(e) {
      typeof e == "object" && e !== null && e.$$typeof === C && e._store && (e._store.validated = 1);
    }
    var h = oe, C = Symbol.for("react.transitional.element"), B = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), z = Symbol.for("react.strict_mode"), G = Symbol.for("react.profiler"), X = Symbol.for("react.consumer"), Z = Symbol.for("react.context"), H = Symbol.for("react.forward_ref"), Q = Symbol.for("react.suspense"), K = Symbol.for("react.suspense_list"), ee = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), re = Symbol.for("react.activity"), te = Symbol.for("react.client.reference"), g = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = Object.prototype.hasOwnProperty, ne = Array.isArray, x = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var $, I = {}, M = h["react-stack-bottom-frame"].bind(
      h,
      o
    )(), L = x(i(o)), F = {};
    R.Fragment = A, R.jsx = function(e, r, n, s, m) {
      var f = 1e4 > g.recentlyCreatedOwnerStacks++;
      return _(
        e,
        r,
        n,
        !1,
        s,
        m,
        f ? Error("react-stack-top-frame") : M,
        f ? x(i(e)) : L
      );
    }, R.jsxs = function(e, r, n, s, m) {
      var f = 1e4 > g.recentlyCreatedOwnerStacks++;
      return _(
        e,
        r,
        n,
        !0,
        s,
        m,
        f ? Error("react-stack-top-frame") : M,
        f ? x(i(e)) : L
      );
    };
  }()), R;
}
var U;
function ce() {
  return U || (U = 1, process.env.NODE_ENV === "production" ? T.exports = se() : T.exports = ue()), T.exports;
}
var E = ce();
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const le = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), ie = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (a, c, i) => i ? i.toUpperCase() : c.toLowerCase()
), q = (t) => {
  const a = ie(t);
  return a.charAt(0).toUpperCase() + a.slice(1);
}, J = (...t) => t.filter((a, c, i) => !!a && a.trim() !== "" && i.indexOf(a) === c).join(" ").trim(), fe = (t) => {
  for (const a in t)
    if (a.startsWith("aria-") || a === "role" || a === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var de = {
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
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const me = V(
  ({
    color: t = "currentColor",
    size: a = 24,
    strokeWidth: c = 2,
    absoluteStrokeWidth: i,
    className: l = "",
    children: o,
    iconNode: b,
    ...d
  }, k) => P(
    "svg",
    {
      ref: k,
      ...de,
      width: a,
      height: a,
      stroke: t,
      strokeWidth: i ? Number(c) * 24 / Number(a) : c,
      className: J("lucide", l),
      ...!o && !fe(d) && { "aria-hidden": "true" },
      ...d
    },
    [
      ...b.map(([w, _]) => P(w, _)),
      ...Array.isArray(o) ? o : [o]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const be = (t, a) => {
  const c = V(
    ({ className: i, ...l }, o) => P(me, {
      ref: o,
      iconNode: a,
      className: J(
        `lucide-${le(q(t))}`,
        `lucide-${t}`,
        i
      ),
      ...l
    })
  );
  return c.displayName = q(t), c;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pe = [
  ["path", { d: "M12 6V2H8", key: "1155em" }],
  ["path", { d: "m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z", key: "w2lp3e" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M9 11v2", key: "1ueba0" }],
  ["path", { d: "M15 11v2", key: "i11awn" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }]
], Ee = be("bot-message-square", pe), ve = ({ name: t = "" }) => /* @__PURE__ */ E.jsx("main", { children: /* @__PURE__ */ E.jsxs("button", { className: "hover:scale-110 cursor-pointer flex items-center justify-center gap-2 text-sm p-2 border-2 border-amber-500 text-amber-500 bg-amber-500/10 hover:bg-amber-500/20  duration-300 rounded-full ", children: [
  /* @__PURE__ */ E.jsx(Ee, { className: "w-4 h-4" }),
  " ",
  t
] }) });
function _e() {
  return /* @__PURE__ */ E.jsx(E.Fragment, { children: /* @__PURE__ */ E.jsx(ve, {}) });
}
export {
  ve as CBot,
  _e as default
};
