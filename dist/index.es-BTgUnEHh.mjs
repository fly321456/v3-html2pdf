import { c as Ma, _ as qa, g as Zu } from "./index-CVimHUkM.mjs";
var un = {}, ln = {}, lr, hn;
function Z() {
  if (hn) return lr;
  hn = 1;
  var n = function(e) {
    return e && e.Math === Math && e;
  };
  return lr = // eslint-disable-next-line es/no-global-this -- safe
  n(typeof globalThis == "object" && globalThis) || n(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  n(typeof self == "object" && self) || n(typeof Ma == "object" && Ma) || n(typeof lr == "object" && lr) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ function() {
    return this;
  }() || Function("return this")(), lr;
}
var Qr = {}, Zr, fn;
function ee() {
  return fn || (fn = 1, Zr = function(n) {
    try {
      return !!n();
    } catch {
      return !0;
    }
  }), Zr;
}
var Jr, cn;
function Ee() {
  if (cn) return Jr;
  cn = 1;
  var n = ee();
  return Jr = !n(function() {
    return Object.defineProperty({}, 1, { get: function() {
      return 7;
    } })[1] !== 7;
  }), Jr;
}
var et, vn;
function Ar() {
  if (vn) return et;
  vn = 1;
  var n = ee();
  return et = !n(function() {
    var e = (function() {
    }).bind();
    return typeof e != "function" || e.hasOwnProperty("prototype");
  }), et;
}
var rt, gn;
function se() {
  if (gn) return rt;
  gn = 1;
  var n = Ar(), e = Function.prototype.call;
  return rt = n ? e.bind(e) : function() {
    return e.apply(e, arguments);
  }, rt;
}
var tt = {}, dn;
function Gl() {
  if (dn) return tt;
  dn = 1;
  var n = {}.propertyIsEnumerable, e = Object.getOwnPropertyDescriptor, r = e && !n.call({ 1: 2 }, 1);
  return tt.f = r ? function(i) {
    var a = e(this, i);
    return !!a && a.enumerable;
  } : n, tt;
}
var it, pn;
function Ba() {
  return pn || (pn = 1, it = function(n, e) {
    return {
      enumerable: !(n & 1),
      configurable: !(n & 2),
      writable: !(n & 4),
      value: e
    };
  }), it;
}
var at, yn;
function re() {
  if (yn) return at;
  yn = 1;
  var n = Ar(), e = Function.prototype, r = e.call, t = n && e.bind.bind(r, r);
  return at = n ? t : function(i) {
    return function() {
      return r.apply(i, arguments);
    };
  }, at;
}
var nt, mn;
function Ze() {
  if (mn) return nt;
  mn = 1;
  var n = re(), e = n({}.toString), r = n("".slice);
  return nt = function(t) {
    return r(e(t), 8, -1);
  }, nt;
}
var st, bn;
function Ju() {
  if (bn) return st;
  bn = 1;
  var n = re(), e = ee(), r = Ze(), t = Object, i = n("".split);
  return st = e(function() {
    return !t("z").propertyIsEnumerable(0);
  }) ? function(a) {
    return r(a) === "String" ? i(a, "") : t(a);
  } : t, st;
}
var ot, xn;
function Je() {
  return xn || (xn = 1, ot = function(n) {
    return n == null;
  }), ot;
}
var ut, Tn;
function Re() {
  if (Tn) return ut;
  Tn = 1;
  var n = Je(), e = TypeError;
  return ut = function(r) {
    if (n(r)) throw new e("Can't call method on " + r);
    return r;
  }, ut;
}
var lt, On;
function cr() {
  if (On) return lt;
  On = 1;
  var n = Ju(), e = Re();
  return lt = function(r) {
    return n(e(r));
  }, lt;
}
var ht, Sn;
function te() {
  if (Sn) return ht;
  Sn = 1;
  var n = typeof document == "object" && document.all;
  return ht = typeof n > "u" && n !== void 0 ? function(e) {
    return typeof e == "function" || e === n;
  } : function(e) {
    return typeof e == "function";
  }, ht;
}
var ft, En;
function Ce() {
  if (En) return ft;
  En = 1;
  var n = te();
  return ft = function(e) {
    return typeof e == "object" ? e !== null : n(e);
  }, ft;
}
var ct, Rn;
function er() {
  if (Rn) return ct;
  Rn = 1;
  var n = Z(), e = te(), r = function(t) {
    return e(t) ? t : void 0;
  };
  return ct = function(t, i) {
    return arguments.length < 2 ? r(n[t]) : n[t] && n[t][i];
  }, ct;
}
var vt, Cn;
function Ir() {
  if (Cn) return vt;
  Cn = 1;
  var n = re();
  return vt = n({}.isPrototypeOf), vt;
}
var gt, wn;
function vr() {
  if (wn) return gt;
  wn = 1;
  var n = Z(), e = n.navigator, r = e && e.userAgent;
  return gt = r ? String(r) : "", gt;
}
var dt, Pn;
function ja() {
  if (Pn) return dt;
  Pn = 1;
  var n = Z(), e = vr(), r = n.process, t = n.Deno, i = r && r.versions || t && t.version, a = i && i.v8, s, o;
  return a && (s = a.split("."), o = s[0] > 0 && s[0] < 4 ? 1 : +(s[0] + s[1])), !o && e && (s = e.match(/Edge\/(\d+)/), (!s || s[1] >= 74) && (s = e.match(/Chrome\/(\d+)/), s && (o = +s[1]))), dt = o, dt;
}
var pt, An;
function el() {
  if (An) return pt;
  An = 1;
  var n = ja(), e = ee(), r = Z(), t = r.String;
  return pt = !!Object.getOwnPropertySymbols && !e(function() {
    var i = Symbol("symbol detection");
    return !t(i) || !(Object(i) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && n && n < 41;
  }), pt;
}
var yt, In;
function rl() {
  if (In) return yt;
  In = 1;
  var n = el();
  return yt = n && !Symbol.sham && typeof Symbol.iterator == "symbol", yt;
}
var mt, Nn;
function tl() {
  if (Nn) return mt;
  Nn = 1;
  var n = er(), e = te(), r = Ir(), t = rl(), i = Object;
  return mt = t ? function(a) {
    return typeof a == "symbol";
  } : function(a) {
    var s = n("Symbol");
    return e(s) && r(s.prototype, i(a));
  }, mt;
}
var bt, _n;
function Nr() {
  if (_n) return bt;
  _n = 1;
  var n = String;
  return bt = function(e) {
    try {
      return n(e);
    } catch {
      return "Object";
    }
  }, bt;
}
var xt, Mn;
function je() {
  if (Mn) return xt;
  Mn = 1;
  var n = te(), e = Nr(), r = TypeError;
  return xt = function(t) {
    if (n(t)) return t;
    throw new r(e(t) + " is not a function");
  }, xt;
}
var Tt, qn;
function ar() {
  if (qn) return Tt;
  qn = 1;
  var n = je(), e = Je();
  return Tt = function(r, t) {
    var i = r[t];
    return e(i) ? void 0 : n(i);
  }, Tt;
}
var Ot, Dn;
function $l() {
  if (Dn) return Ot;
  Dn = 1;
  var n = se(), e = te(), r = Ce(), t = TypeError;
  return Ot = function(i, a) {
    var s, o;
    if (a === "string" && e(s = i.toString) && !r(o = n(s, i)) || e(s = i.valueOf) && !r(o = n(s, i)) || a !== "string" && e(s = i.toString) && !r(o = n(s, i))) return o;
    throw new t("Can't convert object to primitive value");
  }, Ot;
}
var St = { exports: {} }, Et, Vn;
function Me() {
  return Vn || (Vn = 1, Et = !1), Et;
}
var Rt, Ln;
function Fa() {
  if (Ln) return Rt;
  Ln = 1;
  var n = Z(), e = Object.defineProperty;
  return Rt = function(r, t) {
    try {
      e(n, r, { value: t, configurable: !0, writable: !0 });
    } catch {
      n[r] = t;
    }
    return t;
  }, Rt;
}
var kn;
function Ua() {
  if (kn) return St.exports;
  kn = 1;
  var n = Me(), e = Z(), r = Fa(), t = "__core-js_shared__", i = St.exports = e[t] || r(t, {});
  return (i.versions || (i.versions = [])).push({
    version: "3.40.0",
    mode: n ? "pure" : "global",
    copyright: "© 2014-2025 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.40.0/LICENSE",
    source: "https://github.com/zloirock/core-js"
  }), St.exports;
}
var Ct, Bn;
function Ga() {
  if (Bn) return Ct;
  Bn = 1;
  var n = Ua();
  return Ct = function(e, r) {
    return n[e] || (n[e] = r || {});
  }, Ct;
}
var wt, jn;
function _r() {
  if (jn) return wt;
  jn = 1;
  var n = Re(), e = Object;
  return wt = function(r) {
    return e(n(r));
  }, wt;
}
var Pt, Fn;
function we() {
  if (Fn) return Pt;
  Fn = 1;
  var n = re(), e = _r(), r = n({}.hasOwnProperty);
  return Pt = Object.hasOwn || function(i, a) {
    return r(e(i), a);
  }, Pt;
}
var At, Un;
function il() {
  if (Un) return At;
  Un = 1;
  var n = re(), e = 0, r = Math.random(), t = n(1 .toString);
  return At = function(i) {
    return "Symbol(" + (i === void 0 ? "" : i) + ")_" + t(++e + r, 36);
  }, At;
}
var It, Gn;
function ne() {
  if (Gn) return It;
  Gn = 1;
  var n = Z(), e = Ga(), r = we(), t = il(), i = el(), a = rl(), s = n.Symbol, o = e("wks"), u = a ? s.for || s : s && s.withoutSetter || t;
  return It = function(l) {
    return r(o, l) || (o[l] = i && r(s, l) ? s[l] : u("Symbol." + l)), o[l];
  }, It;
}
var Nt, $n;
function zl() {
  if ($n) return Nt;
  $n = 1;
  var n = se(), e = Ce(), r = tl(), t = ar(), i = $l(), a = ne(), s = TypeError, o = a("toPrimitive");
  return Nt = function(u, l) {
    if (!e(u) || r(u)) return u;
    var h = t(u, o), c;
    if (h) {
      if (l === void 0 && (l = "default"), c = n(h, u, l), !e(c) || r(c)) return c;
      throw new s("Can't convert object to primitive value");
    }
    return l === void 0 && (l = "number"), i(u, l);
  }, Nt;
}
var _t, zn;
function al() {
  if (zn) return _t;
  zn = 1;
  var n = zl(), e = tl();
  return _t = function(r) {
    var t = n(r, "string");
    return e(t) ? t : t + "";
  }, _t;
}
var Mt, Hn;
function Mr() {
  if (Hn) return Mt;
  Hn = 1;
  var n = Z(), e = Ce(), r = n.document, t = e(r) && e(r.createElement);
  return Mt = function(i) {
    return t ? r.createElement(i) : {};
  }, Mt;
}
var qt, Wn;
function nl() {
  if (Wn) return qt;
  Wn = 1;
  var n = Ee(), e = ee(), r = Mr();
  return qt = !n && !e(function() {
    return Object.defineProperty(r("div"), "a", {
      get: function() {
        return 7;
      }
    }).a !== 7;
  }), qt;
}
var Yn;
function qr() {
  if (Yn) return Qr;
  Yn = 1;
  var n = Ee(), e = se(), r = Gl(), t = Ba(), i = cr(), a = al(), s = we(), o = nl(), u = Object.getOwnPropertyDescriptor;
  return Qr.f = n ? u : function(h, c) {
    if (h = i(h), c = a(c), o) try {
      return u(h, c);
    } catch {
    }
    if (s(h, c)) return t(!e(r.f, h, c), h[c]);
  }, Qr;
}
var Dt = {}, Vt, Xn;
function sl() {
  if (Xn) return Vt;
  Xn = 1;
  var n = Ee(), e = ee();
  return Vt = n && e(function() {
    return Object.defineProperty(function() {
    }, "prototype", {
      value: 42,
      writable: !1
    }).prototype !== 42;
  }), Vt;
}
var Lt, Kn;
function ue() {
  if (Kn) return Lt;
  Kn = 1;
  var n = Ce(), e = String, r = TypeError;
  return Lt = function(t) {
    if (n(t)) return t;
    throw new r(e(t) + " is not an object");
  }, Lt;
}
var Qn;
function He() {
  if (Qn) return Dt;
  Qn = 1;
  var n = Ee(), e = nl(), r = sl(), t = ue(), i = al(), a = TypeError, s = Object.defineProperty, o = Object.getOwnPropertyDescriptor, u = "enumerable", l = "configurable", h = "writable";
  return Dt.f = n ? r ? function(v, f, g) {
    if (t(v), f = i(f), t(g), typeof v == "function" && f === "prototype" && "value" in g && h in g && !g[h]) {
      var d = o(v, f);
      d && d[h] && (v[f] = g.value, g = {
        configurable: l in g ? g[l] : d[l],
        enumerable: u in g ? g[u] : d[u],
        writable: !1
      });
    }
    return s(v, f, g);
  } : s : function(v, f, g) {
    if (t(v), f = i(f), t(g), e) try {
      return s(v, f, g);
    } catch {
    }
    if ("get" in g || "set" in g) throw new a("Accessors not supported");
    return "value" in g && (v[f] = g.value), v;
  }, Dt;
}
var kt, Zn;
function gr() {
  if (Zn) return kt;
  Zn = 1;
  var n = Ee(), e = He(), r = Ba();
  return kt = n ? function(t, i, a) {
    return e.f(t, i, r(1, a));
  } : function(t, i, a) {
    return t[i] = a, t;
  }, kt;
}
var Bt = { exports: {} }, jt, Jn;
function Dr() {
  if (Jn) return jt;
  Jn = 1;
  var n = Ee(), e = we(), r = Function.prototype, t = n && Object.getOwnPropertyDescriptor, i = e(r, "name"), a = i && (function() {
  }).name === "something", s = i && (!n || n && t(r, "name").configurable);
  return jt = {
    EXISTS: i,
    PROPER: a,
    CONFIGURABLE: s
  }, jt;
}
var Ft, es;
function $a() {
  if (es) return Ft;
  es = 1;
  var n = re(), e = te(), r = Ua(), t = n(Function.toString);
  return e(r.inspectSource) || (r.inspectSource = function(i) {
    return t(i);
  }), Ft = r.inspectSource, Ft;
}
var Ut, rs;
function Hl() {
  if (rs) return Ut;
  rs = 1;
  var n = Z(), e = te(), r = n.WeakMap;
  return Ut = e(r) && /native code/.test(String(r)), Ut;
}
var Gt, ts;
function za() {
  if (ts) return Gt;
  ts = 1;
  var n = Ga(), e = il(), r = n("keys");
  return Gt = function(t) {
    return r[t] || (r[t] = e(t));
  }, Gt;
}
var $t, is;
function Ha() {
  return is || (is = 1, $t = {}), $t;
}
var zt, as;
function Vr() {
  if (as) return zt;
  as = 1;
  var n = Hl(), e = Z(), r = Ce(), t = gr(), i = we(), a = Ua(), s = za(), o = Ha(), u = "Object already initialized", l = e.TypeError, h = e.WeakMap, c, v, f, g = function(m) {
    return f(m) ? v(m) : c(m, {});
  }, d = function(m) {
    return function(b) {
      var x;
      if (!r(b) || (x = v(b)).type !== m)
        throw new l("Incompatible receiver, " + m + " required");
      return x;
    };
  };
  if (n || a.state) {
    var p = a.state || (a.state = new h());
    p.get = p.get, p.has = p.has, p.set = p.set, c = function(m, b) {
      if (p.has(m)) throw new l(u);
      return b.facade = m, p.set(m, b), b;
    }, v = function(m) {
      return p.get(m) || {};
    }, f = function(m) {
      return p.has(m);
    };
  } else {
    var y = s("state");
    o[y] = !0, c = function(m, b) {
      if (i(m, y)) throw new l(u);
      return b.facade = m, t(m, y, b), b;
    }, v = function(m) {
      return i(m, y) ? m[y] : {};
    }, f = function(m) {
      return i(m, y);
    };
  }
  return zt = {
    set: c,
    get: v,
    has: f,
    enforce: g,
    getterFor: d
  }, zt;
}
var ns;
function ol() {
  if (ns) return Bt.exports;
  ns = 1;
  var n = re(), e = ee(), r = te(), t = we(), i = Ee(), a = Dr().CONFIGURABLE, s = $a(), o = Vr(), u = o.enforce, l = o.get, h = String, c = Object.defineProperty, v = n("".slice), f = n("".replace), g = n([].join), d = i && !e(function() {
    return c(function() {
    }, "length", { value: 8 }).length !== 8;
  }), p = String(String).split("String"), y = Bt.exports = function(m, b, x) {
    v(h(b), 0, 7) === "Symbol(" && (b = "[" + f(h(b), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), x && x.getter && (b = "get " + b), x && x.setter && (b = "set " + b), (!t(m, "name") || a && m.name !== b) && (i ? c(m, "name", { value: b, configurable: !0 }) : m.name = b), d && x && t(x, "arity") && m.length !== x.arity && c(m, "length", { value: x.arity });
    try {
      x && t(x, "constructor") && x.constructor ? i && c(m, "prototype", { writable: !1 }) : m.prototype && (m.prototype = void 0);
    } catch {
    }
    var S = u(m);
    return t(S, "source") || (S.source = g(p, typeof b == "string" ? b : "")), m;
  };
  return Function.prototype.toString = y(function() {
    return r(this) && l(this).source || s(this);
  }, "toString"), Bt.exports;
}
var Ht, ss;
function rr() {
  if (ss) return Ht;
  ss = 1;
  var n = te(), e = He(), r = ol(), t = Fa();
  return Ht = function(i, a, s, o) {
    o || (o = {});
    var u = o.enumerable, l = o.name !== void 0 ? o.name : a;
    if (n(s) && r(s, l, o), o.global)
      u ? i[a] = s : t(a, s);
    else {
      try {
        o.unsafe ? i[a] && (u = !0) : delete i[a];
      } catch {
      }
      u ? i[a] = s : e.f(i, a, {
        value: s,
        enumerable: !1,
        configurable: !o.nonConfigurable,
        writable: !o.nonWritable
      });
    }
    return i;
  }, Ht;
}
var Wt = {}, Yt, os;
function Wl() {
  if (os) return Yt;
  os = 1;
  var n = Math.ceil, e = Math.floor;
  return Yt = Math.trunc || function(t) {
    var i = +t;
    return (i > 0 ? e : n)(i);
  }, Yt;
}
var Xt, us;
function Lr() {
  if (us) return Xt;
  us = 1;
  var n = Wl();
  return Xt = function(e) {
    var r = +e;
    return r !== r || r === 0 ? 0 : n(r);
  }, Xt;
}
var Kt, ls;
function Yl() {
  if (ls) return Kt;
  ls = 1;
  var n = Lr(), e = Math.max, r = Math.min;
  return Kt = function(t, i) {
    var a = n(t);
    return a < 0 ? e(a + i, 0) : r(a, i);
  }, Kt;
}
var Qt, hs;
function nr() {
  if (hs) return Qt;
  hs = 1;
  var n = Lr(), e = Math.min;
  return Qt = function(r) {
    var t = n(r);
    return t > 0 ? e(t, 9007199254740991) : 0;
  }, Qt;
}
var Zt, fs;
function Wa() {
  if (fs) return Zt;
  fs = 1;
  var n = nr();
  return Zt = function(e) {
    return n(e.length);
  }, Zt;
}
var Jt, cs;
function ul() {
  if (cs) return Jt;
  cs = 1;
  var n = cr(), e = Yl(), r = Wa(), t = function(i) {
    return function(a, s, o) {
      var u = n(a), l = r(u);
      if (l === 0) return !i && -1;
      var h = e(o, l), c;
      if (i && s !== s) {
        for (; l > h; )
          if (c = u[h++], c !== c) return !0;
      } else for (; l > h; h++)
        if ((i || h in u) && u[h] === s) return i || h || 0;
      return !i && -1;
    };
  };
  return Jt = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: t(!0),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: t(!1)
  }, Jt;
}
var ei, vs;
function ll() {
  if (vs) return ei;
  vs = 1;
  var n = re(), e = we(), r = cr(), t = ul().indexOf, i = Ha(), a = n([].push);
  return ei = function(s, o) {
    var u = r(s), l = 0, h = [], c;
    for (c in u) !e(i, c) && e(u, c) && a(h, c);
    for (; o.length > l; ) e(u, c = o[l++]) && (~t(h, c) || a(h, c));
    return h;
  }, ei;
}
var ri, gs;
function Ya() {
  return gs || (gs = 1, ri = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf"
  ]), ri;
}
var ds;
function Xl() {
  if (ds) return Wt;
  ds = 1;
  var n = ll(), e = Ya(), r = e.concat("length", "prototype");
  return Wt.f = Object.getOwnPropertyNames || function(i) {
    return n(i, r);
  }, Wt;
}
var ti = {}, ps;
function Kl() {
  return ps || (ps = 1, ti.f = Object.getOwnPropertySymbols), ti;
}
var ii, ys;
function Ql() {
  if (ys) return ii;
  ys = 1;
  var n = er(), e = re(), r = Xl(), t = Kl(), i = ue(), a = e([].concat);
  return ii = n("Reflect", "ownKeys") || function(o) {
    var u = r.f(i(o)), l = t.f;
    return l ? a(u, l(o)) : u;
  }, ii;
}
var ai, ms;
function Zl() {
  if (ms) return ai;
  ms = 1;
  var n = we(), e = Ql(), r = qr(), t = He();
  return ai = function(i, a, s) {
    for (var o = e(a), u = t.f, l = r.f, h = 0; h < o.length; h++) {
      var c = o[h];
      !n(i, c) && !(s && n(s, c)) && u(i, c, l(a, c));
    }
  }, ai;
}
var ni, bs;
function hl() {
  if (bs) return ni;
  bs = 1;
  var n = ee(), e = te(), r = /#|\.prototype\./, t = function(u, l) {
    var h = a[i(u)];
    return h === o ? !0 : h === s ? !1 : e(l) ? n(l) : !!l;
  }, i = t.normalize = function(u) {
    return String(u).replace(r, ".").toLowerCase();
  }, a = t.data = {}, s = t.NATIVE = "N", o = t.POLYFILL = "P";
  return ni = t, ni;
}
var si, xs;
function le() {
  if (xs) return si;
  xs = 1;
  var n = Z(), e = qr().f, r = gr(), t = rr(), i = Fa(), a = Zl(), s = hl();
  return si = function(o, u) {
    var l = o.target, h = o.global, c = o.stat, v, f, g, d, p, y;
    if (h ? f = n : c ? f = n[l] || i(l, {}) : f = n[l] && n[l].prototype, f) for (g in u) {
      if (p = u[g], o.dontCallGetSet ? (y = e(f, g), d = y && y.value) : d = f[g], v = s(h ? g : l + (c ? "." : "#") + g, o.forced), !v && d !== void 0) {
        if (typeof p == typeof d) continue;
        a(p, d);
      }
      (o.sham || d && d.sham) && r(p, "sham", !0), t(f, g, p, o);
    }
  }, si;
}
var oi, Ts;
function fl() {
  if (Ts) return oi;
  Ts = 1;
  var n = Z(), e = vr(), r = Ze(), t = function(i) {
    return e.slice(0, i.length) === i;
  };
  return oi = function() {
    return t("Bun/") ? "BUN" : t("Cloudflare-Workers") ? "CLOUDFLARE" : t("Deno/") ? "DENO" : t("Node.js/") ? "NODE" : n.Bun && typeof Bun.version == "string" ? "BUN" : n.Deno && typeof Deno.version == "object" ? "DENO" : r(n.process) === "process" ? "NODE" : n.window && n.document ? "BROWSER" : "REST";
  }(), oi;
}
var ui, Os;
function kr() {
  if (Os) return ui;
  Os = 1;
  var n = fl();
  return ui = n === "NODE", ui;
}
var li, Ss;
function Jl() {
  if (Ss) return li;
  Ss = 1;
  var n = re(), e = je();
  return li = function(r, t, i) {
    try {
      return n(e(Object.getOwnPropertyDescriptor(r, t)[i]));
    } catch {
    }
  }, li;
}
var hi, Es;
function eh() {
  if (Es) return hi;
  Es = 1;
  var n = Ce();
  return hi = function(e) {
    return n(e) || e === null;
  }, hi;
}
var fi, Rs;
function rh() {
  if (Rs) return fi;
  Rs = 1;
  var n = eh(), e = String, r = TypeError;
  return fi = function(t) {
    if (n(t)) return t;
    throw new r("Can't set " + e(t) + " as a prototype");
  }, fi;
}
var ci, Cs;
function cl() {
  if (Cs) return ci;
  Cs = 1;
  var n = Jl(), e = Ce(), r = Re(), t = rh();
  return ci = Object.setPrototypeOf || ("__proto__" in {} ? function() {
    var i = !1, a = {}, s;
    try {
      s = n(Object.prototype, "__proto__", "set"), s(a, []), i = a instanceof Array;
    } catch {
    }
    return function(u, l) {
      return r(u), t(l), e(u) && (i ? s(u, l) : u.__proto__ = l), u;
    };
  }() : void 0), ci;
}
var vi, ws;
function Br() {
  if (ws) return vi;
  ws = 1;
  var n = He().f, e = we(), r = ne(), t = r("toStringTag");
  return vi = function(i, a, s) {
    i && !s && (i = i.prototype), i && !e(i, t) && n(i, t, { configurable: !0, value: a });
  }, vi;
}
var gi, Ps;
function th() {
  if (Ps) return gi;
  Ps = 1;
  var n = ol(), e = He();
  return gi = function(r, t, i) {
    return i.get && n(i.get, t, { getter: !0 }), i.set && n(i.set, t, { setter: !0 }), e.f(r, t, i);
  }, gi;
}
var di, As;
function ih() {
  if (As) return di;
  As = 1;
  var n = er(), e = th(), r = ne(), t = Ee(), i = r("species");
  return di = function(a) {
    var s = n(a);
    t && s && !s[i] && e(s, i, {
      configurable: !0,
      get: function() {
        return this;
      }
    });
  }, di;
}
var pi, Is;
function ah() {
  if (Is) return pi;
  Is = 1;
  var n = Ir(), e = TypeError;
  return pi = function(r, t) {
    if (n(t, r)) return r;
    throw new e("Incorrect invocation");
  }, pi;
}
var yi, Ns;
function nh() {
  if (Ns) return yi;
  Ns = 1;
  var n = ne(), e = n("toStringTag"), r = {};
  return r[e] = "z", yi = String(r) === "[object z]", yi;
}
var mi, _s;
function Xa() {
  if (_s) return mi;
  _s = 1;
  var n = nh(), e = te(), r = Ze(), t = ne(), i = t("toStringTag"), a = Object, s = r(/* @__PURE__ */ function() {
    return arguments;
  }()) === "Arguments", o = function(u, l) {
    try {
      return u[l];
    } catch {
    }
  };
  return mi = n ? r : function(u) {
    var l, h, c;
    return u === void 0 ? "Undefined" : u === null ? "Null" : typeof (h = o(l = a(u), i)) == "string" ? h : s ? r(l) : (c = r(l)) === "Object" && e(l.callee) ? "Arguments" : c;
  }, mi;
}
var bi, Ms;
function sh() {
  if (Ms) return bi;
  Ms = 1;
  var n = re(), e = ee(), r = te(), t = Xa(), i = er(), a = $a(), s = function() {
  }, o = i("Reflect", "construct"), u = /^\s*(?:class|function)\b/, l = n(u.exec), h = !u.test(s), c = function(g) {
    if (!r(g)) return !1;
    try {
      return o(s, [], g), !0;
    } catch {
      return !1;
    }
  }, v = function(g) {
    if (!r(g)) return !1;
    switch (t(g)) {
      case "AsyncFunction":
      case "GeneratorFunction":
      case "AsyncGeneratorFunction":
        return !1;
    }
    try {
      return h || !!l(u, a(g));
    } catch {
      return !0;
    }
  };
  return v.sham = !0, bi = !o || e(function() {
    var f;
    return c(c.call) || !c(Object) || !c(function() {
      f = !0;
    }) || f;
  }) ? v : c, bi;
}
var xi, qs;
function oh() {
  if (qs) return xi;
  qs = 1;
  var n = sh(), e = Nr(), r = TypeError;
  return xi = function(t) {
    if (n(t)) return t;
    throw new r(e(t) + " is not a constructor");
  }, xi;
}
var Ti, Ds;
function vl() {
  if (Ds) return Ti;
  Ds = 1;
  var n = ue(), e = oh(), r = Je(), t = ne(), i = t("species");
  return Ti = function(a, s) {
    var o = n(a).constructor, u;
    return o === void 0 || r(u = n(o)[i]) ? s : e(u);
  }, Ti;
}
var Oi, Vs;
function gl() {
  if (Vs) return Oi;
  Vs = 1;
  var n = Ar(), e = Function.prototype, r = e.apply, t = e.call;
  return Oi = typeof Reflect == "object" && Reflect.apply || (n ? t.bind(r) : function() {
    return t.apply(r, arguments);
  }), Oi;
}
var Si, Ls;
function jr() {
  if (Ls) return Si;
  Ls = 1;
  var n = Ze(), e = re();
  return Si = function(r) {
    if (n(r) === "Function") return e(r);
  }, Si;
}
var Ei, ks;
function Ka() {
  if (ks) return Ei;
  ks = 1;
  var n = jr(), e = je(), r = Ar(), t = n(n.bind);
  return Ei = function(i, a) {
    return e(i), a === void 0 ? i : r ? t(i, a) : function() {
      return i.apply(a, arguments);
    };
  }, Ei;
}
var Ri, Bs;
function dl() {
  if (Bs) return Ri;
  Bs = 1;
  var n = er();
  return Ri = n("document", "documentElement"), Ri;
}
var Ci, js;
function uh() {
  if (js) return Ci;
  js = 1;
  var n = re();
  return Ci = n([].slice), Ci;
}
var wi, Fs;
function lh() {
  if (Fs) return wi;
  Fs = 1;
  var n = TypeError;
  return wi = function(e, r) {
    if (e < r) throw new n("Not enough arguments");
    return e;
  }, wi;
}
var Pi, Us;
function pl() {
  if (Us) return Pi;
  Us = 1;
  var n = vr();
  return Pi = /(?:ipad|iphone|ipod).*applewebkit/i.test(n), Pi;
}
var Ai, Gs;
function yl() {
  if (Gs) return Ai;
  Gs = 1;
  var n = Z(), e = gl(), r = Ka(), t = te(), i = we(), a = ee(), s = dl(), o = uh(), u = Mr(), l = lh(), h = pl(), c = kr(), v = n.setImmediate, f = n.clearImmediate, g = n.process, d = n.Dispatch, p = n.Function, y = n.MessageChannel, m = n.String, b = 0, x = {}, S = "onreadystatechange", E, T, _, V;
  a(function() {
    E = n.location;
  });
  var P = function(R) {
    if (i(x, R)) {
      var A = x[R];
      delete x[R], A();
    }
  }, M = function(R) {
    return function() {
      P(R);
    };
  }, w = function(R) {
    P(R.data);
  }, k = function(R) {
    n.postMessage(m(R), E.protocol + "//" + E.host);
  };
  return (!v || !f) && (v = function(A) {
    l(arguments.length, 1);
    var U = t(A) ? A : p(A), I = o(arguments, 1);
    return x[++b] = function() {
      e(U, void 0, I);
    }, T(b), b;
  }, f = function(A) {
    delete x[A];
  }, c ? T = function(R) {
    g.nextTick(M(R));
  } : d && d.now ? T = function(R) {
    d.now(M(R));
  } : y && !h ? (_ = new y(), V = _.port2, _.port1.onmessage = w, T = r(V.postMessage, V)) : n.addEventListener && t(n.postMessage) && !n.importScripts && E && E.protocol !== "file:" && !a(k) ? (T = k, n.addEventListener("message", w, !1)) : S in u("script") ? T = function(R) {
    s.appendChild(u("script"))[S] = function() {
      s.removeChild(this), P(R);
    };
  } : T = function(R) {
    setTimeout(M(R), 0);
  }), Ai = {
    set: v,
    clear: f
  }, Ai;
}
var Ii, $s;
function hh() {
  if ($s) return Ii;
  $s = 1;
  var n = Z(), e = Ee(), r = Object.getOwnPropertyDescriptor;
  return Ii = function(t) {
    if (!e) return n[t];
    var i = r(n, t);
    return i && i.value;
  }, Ii;
}
var Ni, zs;
function ml() {
  if (zs) return Ni;
  zs = 1;
  var n = function() {
    this.head = null, this.tail = null;
  };
  return n.prototype = {
    add: function(e) {
      var r = { item: e, next: null }, t = this.tail;
      t ? t.next = r : this.head = r, this.tail = r;
    },
    get: function() {
      var e = this.head;
      if (e) {
        var r = this.head = e.next;
        return r === null && (this.tail = null), e.item;
      }
    }
  }, Ni = n, Ni;
}
var _i, Hs;
function fh() {
  if (Hs) return _i;
  Hs = 1;
  var n = vr();
  return _i = /ipad|iphone|ipod/i.test(n) && typeof Pebble < "u", _i;
}
var Mi, Ws;
function ch() {
  if (Ws) return Mi;
  Ws = 1;
  var n = vr();
  return Mi = /web0s(?!.*chrome)/i.test(n), Mi;
}
var qi, Ys;
function vh() {
  if (Ys) return qi;
  Ys = 1;
  var n = Z(), e = hh(), r = Ka(), t = yl().set, i = ml(), a = pl(), s = fh(), o = ch(), u = kr(), l = n.MutationObserver || n.WebKitMutationObserver, h = n.document, c = n.process, v = n.Promise, f = e("queueMicrotask"), g, d, p, y, m;
  if (!f) {
    var b = new i(), x = function() {
      var S, E;
      for (u && (S = c.domain) && S.exit(); E = b.get(); ) try {
        E();
      } catch (T) {
        throw b.head && g(), T;
      }
      S && S.enter();
    };
    !a && !u && !o && l && h ? (d = !0, p = h.createTextNode(""), new l(x).observe(p, { characterData: !0 }), g = function() {
      p.data = d = !d;
    }) : !s && v && v.resolve ? (y = v.resolve(void 0), y.constructor = v, m = r(y.then, y), g = function() {
      m(x);
    }) : u ? g = function() {
      c.nextTick(x);
    } : (t = r(t, n), g = function() {
      t(x);
    }), f = function(S) {
      b.head || g(), b.add(S);
    };
  }
  return qi = f, qi;
}
var Di, Xs;
function gh() {
  return Xs || (Xs = 1, Di = function(n, e) {
    try {
      arguments.length === 1 ? console.error(n) : console.error(n, e);
    } catch {
    }
  }), Di;
}
var Vi, Ks;
function Qa() {
  return Ks || (Ks = 1, Vi = function(n) {
    try {
      return { error: !1, value: n() };
    } catch (e) {
      return { error: !0, value: e };
    }
  }), Vi;
}
var Li, Qs;
function dr() {
  if (Qs) return Li;
  Qs = 1;
  var n = Z();
  return Li = n.Promise, Li;
}
var ki, Zs;
function pr() {
  if (Zs) return ki;
  Zs = 1;
  var n = Z(), e = dr(), r = te(), t = hl(), i = $a(), a = ne(), s = fl(), o = Me(), u = ja(), l = e && e.prototype, h = a("species"), c = !1, v = r(n.PromiseRejectionEvent), f = t("Promise", function() {
    var g = i(e), d = g !== String(e);
    if (!d && u === 66 || o && !(l.catch && l.finally)) return !0;
    if (!u || u < 51 || !/native code/.test(g)) {
      var p = new e(function(b) {
        b(1);
      }), y = function(b) {
        b(function() {
        }, function() {
        });
      }, m = p.constructor = {};
      if (m[h] = y, c = p.then(function() {
      }) instanceof y, !c) return !0;
    }
    return !d && (s === "BROWSER" || s === "DENO") && !v;
  });
  return ki = {
    CONSTRUCTOR: f,
    REJECTION_EVENT: v,
    SUBCLASSING: c
  }, ki;
}
var Bi = {}, Js;
function yr() {
  if (Js) return Bi;
  Js = 1;
  var n = je(), e = TypeError, r = function(t) {
    var i, a;
    this.promise = new t(function(s, o) {
      if (i !== void 0 || a !== void 0) throw new e("Bad Promise constructor");
      i = s, a = o;
    }), this.resolve = n(i), this.reject = n(a);
  };
  return Bi.f = function(t) {
    return new r(t);
  }, Bi;
}
var eo;
function dh() {
  if (eo) return ln;
  eo = 1;
  var n = le(), e = Me(), r = kr(), t = Z(), i = se(), a = rr(), s = cl(), o = Br(), u = ih(), l = je(), h = te(), c = Ce(), v = ah(), f = vl(), g = yl().set, d = vh(), p = gh(), y = Qa(), m = ml(), b = Vr(), x = dr(), S = pr(), E = yr(), T = "Promise", _ = S.CONSTRUCTOR, V = S.REJECTION_EVENT, P = S.SUBCLASSING, M = b.getterFor(T), w = b.set, k = x && x.prototype, R = x, A = k, U = t.TypeError, I = t.document, B = t.process, N = E.f, L = N, j = !!(I && I.createEvent && t.dispatchEvent), z = "unhandledrejection", X = "rejectionhandled", H = 0, Q = 1, Fe = 2, De = 1, Ae = 2, de, pe, ye, Ie, Ne = function(C) {
    var q;
    return c(C) && h(q = C.then) ? q : !1;
  }, he = function(C, q) {
    var G = q.value, $ = q.state === Q, W = $ ? C.ok : C.fail, _e = C.resolve, Ve = C.reject, xe = C.domain, Te, We, ur;
    try {
      W ? ($ || (q.rejection === Ae && Tr(q), q.rejection = De), W === !0 ? Te = G : (xe && xe.enter(), Te = W(G), xe && (xe.exit(), ur = !0)), Te === C.promise ? Ve(new U("Promise-chain cycle")) : (We = Ne(Te)) ? i(We, Te, _e, Ve) : _e(Te)) : Ve(G);
    } catch (Or) {
      xe && !ur && xe.exit(), Ve(Or);
    }
  }, me = function(C, q) {
    C.notified || (C.notified = !0, d(function() {
      for (var G = C.reactions, $; $ = G.get(); )
        he($, C);
      C.notified = !1, q && !C.rejection && xr(C);
    }));
  }, Ue = function(C, q, G) {
    var $, W;
    j ? ($ = I.createEvent("Event"), $.promise = q, $.reason = G, $.initEvent(C, !1, !0), t.dispatchEvent($)) : $ = { promise: q, reason: G }, !V && (W = t["on" + C]) ? W($) : C === z && p("Unhandled promise rejection", G);
  }, xr = function(C) {
    i(g, t, function() {
      var q = C.facade, G = C.value, $ = or(C), W;
      if ($ && (W = y(function() {
        r ? B.emit("unhandledRejection", G, q) : Ue(z, q, G);
      }), C.rejection = r || or(C) ? Ae : De, W.error))
        throw W.value;
    });
  }, or = function(C) {
    return C.rejection !== De && !C.parent;
  }, Tr = function(C) {
    i(g, t, function() {
      var q = C.facade;
      r ? B.emit("rejectionHandled", q) : Ue(X, q, C.value);
    });
  }, ve = function(C, q, G) {
    return function($) {
      C(q, $, G);
    };
  }, fe = function(C, q, G) {
    C.done || (C.done = !0, G && (C = G), C.value = q, C.state = Fe, me(C, !0));
  }, be = function(C, q, G) {
    if (!C.done) {
      C.done = !0, G && (C = G);
      try {
        if (C.facade === q) throw new U("Promise can't be resolved itself");
        var $ = Ne(q);
        $ ? d(function() {
          var W = { done: !1 };
          try {
            i(
              $,
              q,
              ve(be, W, C),
              ve(fe, W, C)
            );
          } catch (_e) {
            fe(W, _e, C);
          }
        }) : (C.value = q, C.state = Q, me(C, !1));
      } catch (W) {
        fe({ done: !1 }, W, C);
      }
    }
  };
  if (_ && (R = function(q) {
    v(this, A), l(q), i(de, this);
    var G = M(this);
    try {
      q(ve(be, G), ve(fe, G));
    } catch ($) {
      fe(G, $);
    }
  }, A = R.prototype, de = function(q) {
    w(this, {
      type: T,
      done: !1,
      notified: !1,
      parent: !1,
      reactions: new m(),
      rejection: !1,
      state: H,
      value: null
    });
  }, de.prototype = a(A, "then", function(q, G) {
    var $ = M(this), W = N(f(this, R));
    return $.parent = !0, W.ok = h(q) ? q : !0, W.fail = h(G) && G, W.domain = r ? B.domain : void 0, $.state === H ? $.reactions.add(W) : d(function() {
      he(W, $);
    }), W.promise;
  }), pe = function() {
    var C = new de(), q = M(C);
    this.promise = C, this.resolve = ve(be, q), this.reject = ve(fe, q);
  }, E.f = N = function(C) {
    return C === R || C === ye ? new pe(C) : L(C);
  }, !e && h(x) && k !== Object.prototype)) {
    Ie = k.then, P || a(k, "then", function(q, G) {
      var $ = this;
      return new R(function(W, _e) {
        i(Ie, $, W, _e);
      }).then(q, G);
    }, { unsafe: !0 });
    try {
      delete k.constructor;
    } catch {
    }
    s && s(k, A);
  }
  return n({ global: !0, constructor: !0, wrap: !0, forced: _ }, {
    Promise: R
  }), o(R, T, !1, !0), u(T), ln;
}
var ro = {}, ji, to;
function mr() {
  return to || (to = 1, ji = {}), ji;
}
var Fi, io;
function ph() {
  if (io) return Fi;
  io = 1;
  var n = ne(), e = mr(), r = n("iterator"), t = Array.prototype;
  return Fi = function(i) {
    return i !== void 0 && (e.Array === i || t[r] === i);
  }, Fi;
}
var Ui, ao;
function bl() {
  if (ao) return Ui;
  ao = 1;
  var n = Xa(), e = ar(), r = Je(), t = mr(), i = ne(), a = i("iterator");
  return Ui = function(s) {
    if (!r(s)) return e(s, a) || e(s, "@@iterator") || t[n(s)];
  }, Ui;
}
var Gi, no;
function yh() {
  if (no) return Gi;
  no = 1;
  var n = se(), e = je(), r = ue(), t = Nr(), i = bl(), a = TypeError;
  return Gi = function(s, o) {
    var u = arguments.length < 2 ? i(s) : o;
    if (e(u)) return r(n(u, s));
    throw new a(t(s) + " is not iterable");
  }, Gi;
}
var $i, so;
function mh() {
  if (so) return $i;
  so = 1;
  var n = se(), e = ue(), r = ar();
  return $i = function(t, i, a) {
    var s, o;
    e(t);
    try {
      if (s = r(t, "return"), !s) {
        if (i === "throw") throw a;
        return a;
      }
      s = n(s, t);
    } catch (u) {
      o = !0, s = u;
    }
    if (i === "throw") throw a;
    if (o) throw s;
    return e(s), a;
  }, $i;
}
var zi, oo;
function xl() {
  if (oo) return zi;
  oo = 1;
  var n = Ka(), e = se(), r = ue(), t = Nr(), i = ph(), a = Wa(), s = Ir(), o = yh(), u = bl(), l = mh(), h = TypeError, c = function(f, g) {
    this.stopped = f, this.result = g;
  }, v = c.prototype;
  return zi = function(f, g, d) {
    var p = d && d.that, y = !!(d && d.AS_ENTRIES), m = !!(d && d.IS_RECORD), b = !!(d && d.IS_ITERATOR), x = !!(d && d.INTERRUPTED), S = n(g, p), E, T, _, V, P, M, w, k = function(A) {
      return E && l(E, "normal", A), new c(!0, A);
    }, R = function(A) {
      return y ? (r(A), x ? S(A[0], A[1], k) : S(A[0], A[1])) : x ? S(A, k) : S(A);
    };
    if (m)
      E = f.iterator;
    else if (b)
      E = f;
    else {
      if (T = u(f), !T) throw new h(t(f) + " is not iterable");
      if (i(T)) {
        for (_ = 0, V = a(f); V > _; _++)
          if (P = R(f[_]), P && s(v, P)) return P;
        return new c(!1);
      }
      E = o(f, T);
    }
    for (M = m ? f.next : E.next; !(w = e(M, E)).done; ) {
      try {
        P = R(w.value);
      } catch (A) {
        l(E, "throw", A);
      }
      if (typeof P == "object" && P && s(v, P)) return P;
    }
    return new c(!1);
  }, zi;
}
var Hi, uo;
function bh() {
  if (uo) return Hi;
  uo = 1;
  var n = ne(), e = n("iterator"), r = !1;
  try {
    var t = 0, i = {
      next: function() {
        return { done: !!t++ };
      },
      return: function() {
        r = !0;
      }
    };
    i[e] = function() {
      return this;
    }, Array.from(i, function() {
      throw 2;
    });
  } catch {
  }
  return Hi = function(a, s) {
    try {
      if (!s && !r) return !1;
    } catch {
      return !1;
    }
    var o = !1;
    try {
      var u = {};
      u[e] = function() {
        return {
          next: function() {
            return { done: o = !0 };
          }
        };
      }, a(u);
    } catch {
    }
    return o;
  }, Hi;
}
var Wi, lo;
function Tl() {
  if (lo) return Wi;
  lo = 1;
  var n = dr(), e = bh(), r = pr().CONSTRUCTOR;
  return Wi = r || !e(function(t) {
    n.all(t).then(void 0, function() {
    });
  }), Wi;
}
var ho;
function xh() {
  if (ho) return ro;
  ho = 1;
  var n = le(), e = se(), r = je(), t = yr(), i = Qa(), a = xl(), s = Tl();
  return n({ target: "Promise", stat: !0, forced: s }, {
    all: function(u) {
      var l = this, h = t.f(l), c = h.resolve, v = h.reject, f = i(function() {
        var g = r(l.resolve), d = [], p = 0, y = 1;
        a(u, function(m) {
          var b = p++, x = !1;
          y++, e(g, l, m).then(function(S) {
            x || (x = !0, d[b] = S, --y || c(d));
          }, v);
        }), --y || c(d);
      });
      return f.error && v(f.value), h.promise;
    }
  }), ro;
}
var fo = {}, co;
function Th() {
  if (co) return fo;
  co = 1;
  var n = le(), e = Me(), r = pr().CONSTRUCTOR, t = dr(), i = er(), a = te(), s = rr(), o = t && t.prototype;
  if (n({ target: "Promise", proto: !0, forced: r, real: !0 }, {
    catch: function(l) {
      return this.then(void 0, l);
    }
  }), !e && a(t)) {
    var u = i("Promise").prototype.catch;
    o.catch !== u && s(o, "catch", u, { unsafe: !0 });
  }
  return fo;
}
var vo = {}, go;
function Oh() {
  if (go) return vo;
  go = 1;
  var n = le(), e = se(), r = je(), t = yr(), i = Qa(), a = xl(), s = Tl();
  return n({ target: "Promise", stat: !0, forced: s }, {
    race: function(u) {
      var l = this, h = t.f(l), c = h.reject, v = i(function() {
        var f = r(l.resolve);
        a(u, function(g) {
          e(f, l, g).then(h.resolve, c);
        });
      });
      return v.error && c(v.value), h.promise;
    }
  }), vo;
}
var po = {}, yo;
function Sh() {
  if (yo) return po;
  yo = 1;
  var n = le(), e = yr(), r = pr().CONSTRUCTOR;
  return n({ target: "Promise", stat: !0, forced: r }, {
    reject: function(i) {
      var a = e.f(this), s = a.reject;
      return s(i), a.promise;
    }
  }), po;
}
var mo = {}, Yi, bo;
function Eh() {
  if (bo) return Yi;
  bo = 1;
  var n = ue(), e = Ce(), r = yr();
  return Yi = function(t, i) {
    if (n(t), e(i) && i.constructor === t) return i;
    var a = r.f(t), s = a.resolve;
    return s(i), a.promise;
  }, Yi;
}
var xo;
function Rh() {
  if (xo) return mo;
  xo = 1;
  var n = le(), e = er(), r = Me(), t = dr(), i = pr().CONSTRUCTOR, a = Eh(), s = e("Promise"), o = r && !i;
  return n({ target: "Promise", stat: !0, forced: r || i }, {
    resolve: function(l) {
      return a(o && this === s ? t : this, l);
    }
  }), mo;
}
var To;
function Ch() {
  return To || (To = 1, dh(), xh(), Th(), Oh(), Sh(), Rh()), un;
}
Ch();
function Oo(n, e, r, t, i, a, s) {
  try {
    var o = n[a](s), u = o.value;
  } catch (l) {
    return void r(l);
  }
  o.done ? e(u) : Promise.resolve(u).then(t, i);
}
function Be(n) {
  return function() {
    var e = this, r = arguments;
    return new Promise(function(t, i) {
      var a = n.apply(e, r);
      function s(u) {
        Oo(a, t, i, s, o, "next", u);
      }
      function o(u) {
        Oo(a, t, i, s, o, "throw", u);
      }
      s(void 0);
    });
  };
}
var So = {}, Eo = {}, Xi, Ro;
function qe() {
  if (Ro) return Xi;
  Ro = 1;
  var n = Xa(), e = String;
  return Xi = function(r) {
    if (n(r) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
    return e(r);
  }, Xi;
}
var Ki, Co;
function Ol() {
  if (Co) return Ki;
  Co = 1;
  var n = ue();
  return Ki = function() {
    var e = n(this), r = "";
    return e.hasIndices && (r += "d"), e.global && (r += "g"), e.ignoreCase && (r += "i"), e.multiline && (r += "m"), e.dotAll && (r += "s"), e.unicode && (r += "u"), e.unicodeSets && (r += "v"), e.sticky && (r += "y"), r;
  }, Ki;
}
var Qi, wo;
function Sl() {
  if (wo) return Qi;
  wo = 1;
  var n = ee(), e = Z(), r = e.RegExp, t = n(function() {
    var s = r("a", "y");
    return s.lastIndex = 2, s.exec("abcd") !== null;
  }), i = t || n(function() {
    return !r("a", "y").sticky;
  }), a = t || n(function() {
    var s = r("^r", "gy");
    return s.lastIndex = 2, s.exec("str") !== null;
  });
  return Qi = {
    BROKEN_CARET: a,
    MISSED_STICKY: i,
    UNSUPPORTED_Y: t
  }, Qi;
}
var Zi = {}, Ji, Po;
function wh() {
  if (Po) return Ji;
  Po = 1;
  var n = ll(), e = Ya();
  return Ji = Object.keys || function(t) {
    return n(t, e);
  }, Ji;
}
var Ao;
function Ph() {
  if (Ao) return Zi;
  Ao = 1;
  var n = Ee(), e = sl(), r = He(), t = ue(), i = cr(), a = wh();
  return Zi.f = n && !e ? Object.defineProperties : function(o, u) {
    t(o);
    for (var l = i(u), h = a(u), c = h.length, v = 0, f; c > v; ) r.f(o, f = h[v++], l[f]);
    return o;
  }, Zi;
}
var ea, Io;
function Fr() {
  if (Io) return ea;
  Io = 1;
  var n = ue(), e = Ph(), r = Ya(), t = Ha(), i = dl(), a = Mr(), s = za(), o = ">", u = "<", l = "prototype", h = "script", c = s("IE_PROTO"), v = function() {
  }, f = function(m) {
    return u + h + o + m + u + "/" + h + o;
  }, g = function(m) {
    m.write(f("")), m.close();
    var b = m.parentWindow.Object;
    return m = null, b;
  }, d = function() {
    var m = a("iframe"), b = "java" + h + ":", x;
    return m.style.display = "none", i.appendChild(m), m.src = String(b), x = m.contentWindow.document, x.open(), x.write(f("document.F=Object")), x.close(), x.F;
  }, p, y = function() {
    try {
      p = new ActiveXObject("htmlfile");
    } catch {
    }
    y = typeof document < "u" ? document.domain && p ? g(p) : d() : g(p);
    for (var m = r.length; m--; ) delete y[l][r[m]];
    return y();
  };
  return t[c] = !0, ea = Object.create || function(b, x) {
    var S;
    return b !== null ? (v[l] = n(b), S = new v(), v[l] = null, S[c] = b) : S = y(), x === void 0 ? S : e.f(S, x);
  }, ea;
}
var ra, No;
function Ah() {
  if (No) return ra;
  No = 1;
  var n = ee(), e = Z(), r = e.RegExp;
  return ra = n(function() {
    var t = r(".", "s");
    return !(t.dotAll && t.test(`
`) && t.flags === "s");
  }), ra;
}
var ta, _o;
function Ih() {
  if (_o) return ta;
  _o = 1;
  var n = ee(), e = Z(), r = e.RegExp;
  return ta = n(function() {
    var t = r("(?<a>b)", "g");
    return t.exec("b").groups.a !== "b" || "b".replace(t, "$<a>c") !== "bc";
  }), ta;
}
var ia, Mo;
function Za() {
  if (Mo) return ia;
  Mo = 1;
  var n = se(), e = re(), r = qe(), t = Ol(), i = Sl(), a = Ga(), s = Fr(), o = Vr().get, u = Ah(), l = Ih(), h = a("native-string-replace", String.prototype.replace), c = RegExp.prototype.exec, v = c, f = e("".charAt), g = e("".indexOf), d = e("".replace), p = e("".slice), y = function() {
    var S = /a/, E = /b*/g;
    return n(c, S, "a"), n(c, E, "a"), S.lastIndex !== 0 || E.lastIndex !== 0;
  }(), m = i.BROKEN_CARET, b = /()??/.exec("")[1] !== void 0, x = y || b || m || u || l;
  return x && (v = function(E) {
    var T = this, _ = o(T), V = r(E), P = _.raw, M, w, k, R, A, U, I;
    if (P)
      return P.lastIndex = T.lastIndex, M = n(v, P, V), T.lastIndex = P.lastIndex, M;
    var B = _.groups, N = m && T.sticky, L = n(t, T), j = T.source, z = 0, X = V;
    if (N && (L = d(L, "y", ""), g(L, "g") === -1 && (L += "g"), X = p(V, T.lastIndex), T.lastIndex > 0 && (!T.multiline || T.multiline && f(V, T.lastIndex - 1) !== `
`) && (j = "(?: " + j + ")", X = " " + X, z++), w = new RegExp("^(?:" + j + ")", L)), b && (w = new RegExp("^" + j + "$(?!\\s)", L)), y && (k = T.lastIndex), R = n(c, N ? w : T, X), N ? R ? (R.input = p(R.input, z), R[0] = p(R[0], z), R.index = T.lastIndex, T.lastIndex += R[0].length) : T.lastIndex = 0 : y && R && (T.lastIndex = T.global ? R.index + R[0].length : k), b && R && R.length > 1 && n(h, R[0], w, function() {
      for (A = 1; A < arguments.length - 2; A++)
        arguments[A] === void 0 && (R[A] = void 0);
    }), R && B)
      for (R.groups = U = s(null), A = 0; A < B.length; A++)
        I = B[A], U[I[0]] = R[I[1]];
    return R;
  }), ia = v, ia;
}
var qo;
function Nh() {
  if (qo) return Eo;
  qo = 1;
  var n = le(), e = Za();
  return n({ target: "RegExp", proto: !0, forced: /./.exec !== e }, {
    exec: e
  }), Eo;
}
var aa, Do;
function Ja() {
  if (Do) return aa;
  Do = 1, Nh();
  var n = se(), e = rr(), r = Za(), t = ee(), i = ne(), a = gr(), s = i("species"), o = RegExp.prototype;
  return aa = function(u, l, h, c) {
    var v = i(u), f = !t(function() {
      var y = {};
      return y[v] = function() {
        return 7;
      }, ""[u](y) !== 7;
    }), g = f && !t(function() {
      var y = !1, m = /a/;
      return u === "split" && (m = {}, m.constructor = {}, m.constructor[s] = function() {
        return m;
      }, m.flags = "", m[v] = /./[v]), m.exec = function() {
        return y = !0, null;
      }, m[v](""), !y;
    });
    if (!f || !g || h) {
      var d = /./[v], p = l(v, ""[u], function(y, m, b, x, S) {
        var E = m.exec;
        return E === r || E === o.exec ? f && !S ? { done: !0, value: n(d, m, b, x) } : { done: !0, value: n(y, b, m, x) } : { done: !1 };
      });
      e(String.prototype, u, p[0]), e(o, v, p[1]);
    }
    c && a(o[v], "sham", !0);
  }, aa;
}
var na, Vo;
function _h() {
  if (Vo) return na;
  Vo = 1;
  var n = re(), e = Lr(), r = qe(), t = Re(), i = n("".charAt), a = n("".charCodeAt), s = n("".slice), o = function(u) {
    return function(l, h) {
      var c = r(t(l)), v = e(h), f = c.length, g, d;
      return v < 0 || v >= f ? u ? "" : void 0 : (g = a(c, v), g < 55296 || g > 56319 || v + 1 === f || (d = a(c, v + 1)) < 56320 || d > 57343 ? u ? i(c, v) : g : u ? s(c, v, v + 2) : (g - 55296 << 10) + (d - 56320) + 65536);
    };
  };
  return na = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: o(!1),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: o(!0)
  }, na;
}
var sa, Lo;
function en() {
  if (Lo) return sa;
  Lo = 1;
  var n = _h().charAt;
  return sa = function(e, r, t) {
    return r + (t ? n(e, r).length : 1);
  }, sa;
}
var oa, ko;
function rn() {
  if (ko) return oa;
  ko = 1;
  var n = se(), e = ue(), r = te(), t = Ze(), i = Za(), a = TypeError;
  return oa = function(s, o) {
    var u = s.exec;
    if (r(u)) {
      var l = n(u, s, o);
      return l !== null && e(l), l;
    }
    if (t(s) === "RegExp") return n(i, s, o);
    throw new a("RegExp#exec called on incompatible receiver");
  }, oa;
}
var Bo;
function Mh() {
  if (Bo) return So;
  Bo = 1;
  var n = se(), e = Ja(), r = ue(), t = Je(), i = nr(), a = qe(), s = Re(), o = ar(), u = en(), l = rn();
  return e("match", function(h, c, v) {
    return [
      // `String.prototype.match` method
      // https://tc39.es/ecma262/#sec-string.prototype.match
      function(g) {
        var d = s(this), p = t(g) ? void 0 : o(g, h);
        return p ? n(p, g, d) : new RegExp(g)[h](a(d));
      },
      // `RegExp.prototype[@@match]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
      function(f) {
        var g = r(this), d = a(f), p = v(c, g, d);
        if (p.done) return p.value;
        if (!g.global) return l(g, d);
        var y = g.unicode;
        g.lastIndex = 0;
        for (var m = [], b = 0, x; (x = l(g, d)) !== null; ) {
          var S = a(x[0]);
          m[b] = S, S === "" && (g.lastIndex = u(d, i(g.lastIndex), y)), b++;
        }
        return b === 0 ? null : m;
      }
    ];
  }), So;
}
Mh();
var jo = {}, ua, Fo;
function qh() {
  if (Fo) return ua;
  Fo = 1;
  var n = re(), e = _r(), r = Math.floor, t = n("".charAt), i = n("".replace), a = n("".slice), s = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, o = /\$([$&'`]|\d{1,2})/g;
  return ua = function(u, l, h, c, v, f) {
    var g = h + u.length, d = c.length, p = o;
    return v !== void 0 && (v = e(v), p = s), i(f, p, function(y, m) {
      var b;
      switch (t(m, 0)) {
        case "$":
          return "$";
        case "&":
          return u;
        case "`":
          return a(l, 0, h);
        case "'":
          return a(l, g);
        case "<":
          b = v[a(m, 1, -1)];
          break;
        default:
          var x = +m;
          if (x === 0) return y;
          if (x > d) {
            var S = r(x / 10);
            return S === 0 ? y : S <= d ? c[S - 1] === void 0 ? t(m, 1) : c[S - 1] + t(m, 1) : y;
          }
          b = c[x - 1];
      }
      return b === void 0 ? "" : b;
    });
  }, ua;
}
var Uo;
function Dh() {
  if (Uo) return jo;
  Uo = 1;
  var n = gl(), e = se(), r = re(), t = Ja(), i = ee(), a = ue(), s = te(), o = Je(), u = Lr(), l = nr(), h = qe(), c = Re(), v = en(), f = ar(), g = qh(), d = rn(), p = ne(), y = p("replace"), m = Math.max, b = Math.min, x = r([].concat), S = r([].push), E = r("".indexOf), T = r("".slice), _ = function(w) {
    return w === void 0 ? w : String(w);
  }, V = function() {
    return "a".replace(/./, "$0") === "$0";
  }(), P = function() {
    return /./[y] ? /./[y]("a", "$0") === "" : !1;
  }(), M = !i(function() {
    var w = /./;
    return w.exec = function() {
      var k = [];
      return k.groups = { a: "7" }, k;
    }, "".replace(w, "$<a>") !== "7";
  });
  return t("replace", function(w, k, R) {
    var A = P ? "$" : "$0";
    return [
      // `String.prototype.replace` method
      // https://tc39.es/ecma262/#sec-string.prototype.replace
      function(I, B) {
        var N = c(this), L = o(I) ? void 0 : f(I, y);
        return L ? e(L, I, N, B) : e(k, h(N), I, B);
      },
      // `RegExp.prototype[@@replace]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
      function(U, I) {
        var B = a(this), N = h(U);
        if (typeof I == "string" && E(I, A) === -1 && E(I, "$<") === -1) {
          var L = R(k, B, N, I);
          if (L.done) return L.value;
        }
        var j = s(I);
        j || (I = h(I));
        var z = B.global, X;
        z && (X = B.unicode, B.lastIndex = 0);
        for (var H = [], Q; Q = d(B, N), !(Q === null || (S(H, Q), !z)); ) {
          var Fe = h(Q[0]);
          Fe === "" && (B.lastIndex = v(N, l(B.lastIndex), X));
        }
        for (var De = "", Ae = 0, de = 0; de < H.length; de++) {
          Q = H[de];
          for (var pe = h(Q[0]), ye = m(b(u(Q.index), N.length), 0), Ie = [], Ne, he = 1; he < Q.length; he++) S(Ie, _(Q[he]));
          var me = Q.groups;
          if (j) {
            var Ue = x([pe], Ie, ye, N);
            me !== void 0 && S(Ue, me), Ne = h(n(I, void 0, Ue));
          } else
            Ne = g(pe, N, ye, Ie, me, I);
          ye >= Ae && (De += T(N, Ae, ye) + Ne, Ae = ye + pe.length);
        }
        return De + T(N, Ae);
      }
    ];
  }, !M || !V || P), jo;
}
Dh();
var Go = {}, la, $o;
function Vh() {
  if ($o) return la;
  $o = 1;
  var n = Ce(), e = Ze(), r = ne(), t = r("match");
  return la = function(i) {
    var a;
    return n(i) && ((a = i[t]) !== void 0 ? !!a : e(i) === "RegExp");
  }, la;
}
var ha, zo;
function tn() {
  if (zo) return ha;
  zo = 1;
  var n = Vh(), e = TypeError;
  return ha = function(r) {
    if (n(r))
      throw new e("The method doesn't accept regular expressions");
    return r;
  }, ha;
}
var fa, Ho;
function an() {
  if (Ho) return fa;
  Ho = 1;
  var n = ne(), e = n("match");
  return fa = function(r) {
    var t = /./;
    try {
      "/./"[r](t);
    } catch {
      try {
        return t[e] = !1, "/./"[r](t);
      } catch {
      }
    }
    return !1;
  }, fa;
}
var Wo;
function Lh() {
  if (Wo) return Go;
  Wo = 1;
  var n = le(), e = jr(), r = qr().f, t = nr(), i = qe(), a = tn(), s = Re(), o = an(), u = Me(), l = e("".slice), h = Math.min, c = o("startsWith"), v = !u && !c && !!function() {
    var f = r(String.prototype, "startsWith");
    return f && !f.writable;
  }();
  return n({ target: "String", proto: !0, forced: !v && !c }, {
    startsWith: function(g) {
      var d = i(s(this));
      a(g);
      var p = t(h(arguments.length > 1 ? arguments[1] : void 0, d.length)), y = i(g);
      return l(d, p, p + y.length) === y;
    }
  }), Go;
}
Lh();
var ca, Yo;
function kh() {
  if (Yo) return ca;
  Yo = 1;
  var n = ne(), e = Fr(), r = He().f, t = n("unscopables"), i = Array.prototype;
  return i[t] === void 0 && r(i, t, {
    configurable: !0,
    value: e(null)
  }), ca = function(a) {
    i[t][a] = !0;
  }, ca;
}
var va, Xo;
function Bh() {
  if (Xo) return va;
  Xo = 1;
  var n = ee();
  return va = !n(function() {
    function e() {
    }
    return e.prototype.constructor = null, Object.getPrototypeOf(new e()) !== e.prototype;
  }), va;
}
var ga, Ko;
function El() {
  if (Ko) return ga;
  Ko = 1;
  var n = we(), e = te(), r = _r(), t = za(), i = Bh(), a = t("IE_PROTO"), s = Object, o = s.prototype;
  return ga = i ? s.getPrototypeOf : function(u) {
    var l = r(u);
    if (n(l, a)) return l[a];
    var h = l.constructor;
    return e(h) && l instanceof h ? h.prototype : l instanceof s ? o : null;
  }, ga;
}
var da, Qo;
function Rl() {
  if (Qo) return da;
  Qo = 1;
  var n = ee(), e = te(), r = Ce(), t = Fr(), i = El(), a = rr(), s = ne(), o = Me(), u = s("iterator"), l = !1, h, c, v;
  [].keys && (v = [].keys(), "next" in v ? (c = i(i(v)), c !== Object.prototype && (h = c)) : l = !0);
  var f = !r(h) || n(function() {
    var g = {};
    return h[u].call(g) !== g;
  });
  return f ? h = {} : o && (h = t(h)), e(h[u]) || a(h, u, function() {
    return this;
  }), da = {
    IteratorPrototype: h,
    BUGGY_SAFARI_ITERATORS: l
  }, da;
}
var pa, Zo;
function jh() {
  if (Zo) return pa;
  Zo = 1;
  var n = Rl().IteratorPrototype, e = Fr(), r = Ba(), t = Br(), i = mr(), a = function() {
    return this;
  };
  return pa = function(s, o, u, l) {
    var h = o + " Iterator";
    return s.prototype = e(n, { next: r(+!l, u) }), t(s, h, !1, !0), i[h] = a, s;
  }, pa;
}
var ya, Jo;
function Fh() {
  if (Jo) return ya;
  Jo = 1;
  var n = le(), e = se(), r = Me(), t = Dr(), i = te(), a = jh(), s = El(), o = cl(), u = Br(), l = gr(), h = rr(), c = ne(), v = mr(), f = Rl(), g = t.PROPER, d = t.CONFIGURABLE, p = f.IteratorPrototype, y = f.BUGGY_SAFARI_ITERATORS, m = c("iterator"), b = "keys", x = "values", S = "entries", E = function() {
    return this;
  };
  return ya = function(T, _, V, P, M, w, k) {
    a(V, _, P);
    var R = function(H) {
      if (H === M && N) return N;
      if (!y && H && H in I) return I[H];
      switch (H) {
        case b:
          return function() {
            return new V(this, H);
          };
        case x:
          return function() {
            return new V(this, H);
          };
        case S:
          return function() {
            return new V(this, H);
          };
      }
      return function() {
        return new V(this);
      };
    }, A = _ + " Iterator", U = !1, I = T.prototype, B = I[m] || I["@@iterator"] || M && I[M], N = !y && B || R(M), L = _ === "Array" && I.entries || B, j, z, X;
    if (L && (j = s(L.call(new T())), j !== Object.prototype && j.next && (!r && s(j) !== p && (o ? o(j, p) : i(j[m]) || h(j, m, E)), u(j, A, !0, !0), r && (v[A] = E))), g && M === x && B && B.name !== x && (!r && d ? l(I, "name", x) : (U = !0, N = function() {
      return e(B, this);
    })), M)
      if (z = {
        values: R(x),
        keys: w ? N : R(b),
        entries: R(S)
      }, k) for (X in z)
        (y || U || !(X in I)) && h(I, X, z[X]);
      else n({ target: _, proto: !0, forced: y || U }, z);
    return (!r || k) && I[m] !== N && h(I, m, N, { name: M }), v[_] = N, z;
  }, ya;
}
var ma, eu;
function Uh() {
  return eu || (eu = 1, ma = function(n, e) {
    return { value: n, done: e };
  }), ma;
}
var ba, ru;
function Cl() {
  if (ru) return ba;
  ru = 1;
  var n = cr(), e = kh(), r = mr(), t = Vr(), i = He().f, a = Fh(), s = Uh(), o = Me(), u = Ee(), l = "Array Iterator", h = t.set, c = t.getterFor(l);
  ba = a(Array, "Array", function(f, g) {
    h(this, {
      type: l,
      target: n(f),
      // target
      index: 0,
      // next index
      kind: g
      // kind
    });
  }, function() {
    var f = c(this), g = f.target, d = f.index++;
    if (!g || d >= g.length)
      return f.target = null, s(void 0, !0);
    switch (f.kind) {
      case "keys":
        return s(d, !1);
      case "values":
        return s(g[d], !1);
    }
    return s([d, g[d]], !1);
  }, "values");
  var v = r.Arguments = r.Array;
  if (e("keys"), e("values"), e("entries"), !o && u && v.name !== "values") try {
    i(v, "name", { value: "values" });
  } catch {
  }
  return ba;
}
Cl();
var tu = {}, xa, iu;
function Gh() {
  return iu || (iu = 1, xa = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  }), xa;
}
var Ta, au;
function $h() {
  if (au) return Ta;
  au = 1;
  var n = Mr(), e = n("span").classList, r = e && e.constructor && e.constructor.prototype;
  return Ta = r === Object.prototype ? void 0 : r, Ta;
}
var nu;
function zh() {
  if (nu) return tu;
  nu = 1;
  var n = Z(), e = Gh(), r = $h(), t = Cl(), i = gr(), a = Br(), s = ne(), o = s("iterator"), u = t.values, l = function(c, v) {
    if (c) {
      if (c[o] !== u) try {
        i(c, o, u);
      } catch {
        c[o] = u;
      }
      if (a(c, v, !0), e[v]) {
        for (var f in t)
          if (c[f] !== t[f]) try {
            i(c, f, t[f]);
          } catch {
            c[f] = t[f];
          }
      }
    }
  };
  for (var h in e)
    l(n[h] && n[h].prototype, h);
  return l(r, "DOMTokenList"), tu;
}
zh();
function Hh(n, e) {
  if (qa(n) != "object" || !n) return n;
  var r = n[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(n, e);
    if (qa(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(n);
}
function Wh(n) {
  var e = Hh(n, "string");
  return qa(e) == "symbol" ? e : e + "";
}
function nn(n, e, r) {
  return (e = Wh(e)) in n ? Object.defineProperty(n, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[e] = r, n;
}
var su = {}, Oa, ou;
function Yh() {
  if (ou) return Oa;
  ou = 1;
  var n = je(), e = _r(), r = Ju(), t = Wa(), i = TypeError, a = "Reduce of empty array with no initial value", s = function(o) {
    return function(u, l, h, c) {
      var v = e(u), f = r(v), g = t(v);
      if (n(l), g === 0 && h < 2) throw new i(a);
      var d = o ? g - 1 : 0, p = o ? -1 : 1;
      if (h < 2) for (; ; ) {
        if (d in f) {
          c = f[d], d += p;
          break;
        }
        if (d += p, o ? d < 0 : g <= d)
          throw new i(a);
      }
      for (; o ? d >= 0 : g > d; d += p) d in f && (c = l(c, f[d], d, v));
      return c;
    };
  };
  return Oa = {
    // `Array.prototype.reduce` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduce
    left: s(!1),
    // `Array.prototype.reduceRight` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduceright
    right: s(!0)
  }, Oa;
}
var Sa, uu;
function wl() {
  if (uu) return Sa;
  uu = 1;
  var n = ee();
  return Sa = function(e, r) {
    var t = [][e];
    return !!t && n(function() {
      t.call(null, r || function() {
        return 1;
      }, 1);
    });
  }, Sa;
}
var lu;
function Xh() {
  if (lu) return su;
  lu = 1;
  var n = le(), e = Yh().left, r = wl(), t = ja(), i = kr(), a = !i && t > 79 && t < 83, s = a || !r("reduce");
  return n({ target: "Array", proto: !0, forced: s }, {
    reduce: function(u) {
      var l = arguments.length;
      return e(this, u, l, l > 1 ? arguments[1] : void 0);
    }
  }), su;
}
Xh();
var hu = {}, fu;
function Kh() {
  if (fu) return hu;
  fu = 1;
  var n = le(), e = jr(), r = qr().f, t = nr(), i = qe(), a = tn(), s = Re(), o = an(), u = Me(), l = e("".slice), h = Math.min, c = o("endsWith"), v = !u && !c && !!function() {
    var f = r(String.prototype, "endsWith");
    return f && !f.writable;
  }();
  return n({ target: "String", proto: !0, forced: !v && !c }, {
    endsWith: function(g) {
      var d = i(s(this));
      a(g);
      var p = arguments.length > 1 ? arguments[1] : void 0, y = d.length, m = p === void 0 ? y : h(t(p), y), b = i(g);
      return l(d, m - b.length, m) === b;
    }
  }), hu;
}
Kh();
var cu = {}, vu;
function Qh() {
  if (vu) return cu;
  vu = 1;
  var n = se(), e = re(), r = Ja(), t = ue(), i = Je(), a = Re(), s = vl(), o = en(), u = nr(), l = qe(), h = ar(), c = rn(), v = Sl(), f = ee(), g = v.UNSUPPORTED_Y, d = 4294967295, p = Math.min, y = e([].push), m = e("".slice), b = !f(function() {
    var S = /(?:)/, E = S.exec;
    S.exec = function() {
      return E.apply(this, arguments);
    };
    var T = "ab".split(S);
    return T.length !== 2 || T[0] !== "a" || T[1] !== "b";
  }), x = "abbc".split(/(b)*/)[1] === "c" || // eslint-disable-next-line regexp/no-empty-group -- required for testing
  "test".split(/(?:)/, -1).length !== 4 || "ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
  ".".split(/()()/).length > 1 || "".split(/.?/).length;
  return r("split", function(S, E, T) {
    var _ = "0".split(void 0, 0).length ? function(V, P) {
      return V === void 0 && P === 0 ? [] : n(E, this, V, P);
    } : E;
    return [
      // `String.prototype.split` method
      // https://tc39.es/ecma262/#sec-string.prototype.split
      function(P, M) {
        var w = a(this), k = i(P) ? void 0 : h(P, S);
        return k ? n(k, P, w, M) : n(_, l(w), P, M);
      },
      // `RegExp.prototype[@@split]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
      //
      // NOTE: This cannot be properly polyfilled in engines that don't support
      // the 'y' flag.
      function(V, P) {
        var M = t(this), w = l(V);
        if (!x) {
          var k = T(_, M, w, P, _ !== E);
          if (k.done) return k.value;
        }
        var R = s(M, RegExp), A = M.unicode, U = (M.ignoreCase ? "i" : "") + (M.multiline ? "m" : "") + (M.unicode ? "u" : "") + (g ? "g" : "y"), I = new R(g ? "^(?:" + M.source + ")" : M, U), B = P === void 0 ? d : P >>> 0;
        if (B === 0) return [];
        if (w.length === 0) return c(I, w) === null ? [w] : [];
        for (var N = 0, L = 0, j = []; L < w.length; ) {
          I.lastIndex = g ? 0 : L;
          var z = c(I, g ? m(w, L) : w), X;
          if (z === null || (X = p(u(I.lastIndex + (g ? L : 0)), w.length)) === N)
            L = o(w, L, A);
          else {
            if (y(j, m(w, N, L)), j.length === B) return j;
            for (var H = 1; H <= z.length - 1; H++)
              if (y(j, z[H]), j.length === B) return j;
            L = N = X;
          }
        }
        return y(j, m(w, N)), j;
      }
    ];
  }, x || !b, g), cu;
}
Qh();
var hr = { exports: {} }, Ke = { exports: {} }, Zh = Ke.exports, gu;
function Jh() {
  return gu || (gu = 1, (function() {
    var n, e, r, t, i, a;
    typeof performance < "u" && performance !== null && performance.now ? Ke.exports = function() {
      return performance.now();
    } : typeof process < "u" && process !== null && process.hrtime ? (Ke.exports = function() {
      return (n() - i) / 1e6;
    }, e = process.hrtime, n = function() {
      var s;
      return s = e(), s[0] * 1e9 + s[1];
    }, t = n(), a = process.uptime() * 1e9, i = t - a) : Date.now ? (Ke.exports = function() {
      return Date.now() - r;
    }, r = Date.now()) : (Ke.exports = function() {
      return (/* @__PURE__ */ new Date()).getTime() - r;
    }, r = (/* @__PURE__ */ new Date()).getTime());
  }).call(Zh)), Ke.exports;
}
var du;
function ef() {
  if (du) return hr.exports;
  du = 1;
  for (var n = Jh(), e = typeof window > "u" ? Ma : window, r = ["moz", "webkit"], t = "AnimationFrame", i = e["request" + t], a = e["cancel" + t] || e["cancelRequest" + t], s = 0; !i && s < r.length; s++)
    i = e[r[s] + "Request" + t], a = e[r[s] + "Cancel" + t] || e[r[s] + "CancelRequest" + t];
  if (!i || !a) {
    var o = 0, u = 0, l = [], h = 1e3 / 60;
    i = function(c) {
      if (l.length === 0) {
        var v = n(), f = Math.max(0, h - (v - o));
        o = f + v, setTimeout(function() {
          var g = l.slice(0);
          l.length = 0;
          for (var d = 0; d < g.length; d++)
            if (!g[d].cancelled)
              try {
                g[d].callback(o);
              } catch (p) {
                setTimeout(function() {
                  throw p;
                }, 0);
              }
        }, Math.round(f));
      }
      return l.push({
        handle: ++u,
        callback: c,
        cancelled: !1
      }), u;
    }, a = function(c) {
      for (var v = 0; v < l.length; v++)
        l[v].handle === c && (l[v].cancelled = !0);
    };
  }
  return hr.exports = function(c) {
    return i.call(e, c);
  }, hr.exports.cancel = function() {
    a.apply(e, arguments);
  }, hr.exports.polyfill = function(c) {
    c || (c = e), c.requestAnimationFrame = i, c.cancelAnimationFrame = a;
  }, hr.exports;
}
var rf = ef();
const Ea = /* @__PURE__ */ Zu(rf);
var pu = {}, Ra, yu;
function Pl() {
  return yu || (yu = 1, Ra = `	
\v\f\r                　\u2028\u2029\uFEFF`), Ra;
}
var Ca, mu;
function tf() {
  if (mu) return Ca;
  mu = 1;
  var n = re(), e = Re(), r = qe(), t = Pl(), i = n("".replace), a = RegExp("^[" + t + "]+"), s = RegExp("(^|[^" + t + "])[" + t + "]+$"), o = function(u) {
    return function(l) {
      var h = r(e(l));
      return u & 1 && (h = i(h, a, "")), u & 2 && (h = i(h, s, "$1")), h;
    };
  };
  return Ca = {
    // `String.prototype.{ trimLeft, trimStart }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimstart
    start: o(1),
    // `String.prototype.{ trimRight, trimEnd }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimend
    end: o(2),
    // `String.prototype.trim` method
    // https://tc39.es/ecma262/#sec-string.prototype.trim
    trim: o(3)
  }, Ca;
}
var wa, bu;
function af() {
  if (bu) return wa;
  bu = 1;
  var n = Dr().PROPER, e = ee(), r = Pl(), t = "​᠎";
  return wa = function(i) {
    return e(function() {
      return !!r[i]() || t[i]() !== t || n && r[i].name !== i;
    });
  }, wa;
}
var xu;
function nf() {
  if (xu) return pu;
  xu = 1;
  var n = le(), e = tf().trim, r = af();
  return n({ target: "String", proto: !0, forced: r("trim") }, {
    trim: function() {
      return e(this);
    }
  }), pu;
}
nf();
var Pa, Tu;
function sf() {
  return Tu || (Tu = 1, Pa = function(n) {
    this.ok = !1, this.alpha = 1, n.charAt(0) == "#" && (n = n.substr(1, 6)), n = n.replace(/ /g, ""), n = n.toLowerCase();
    var e = {
      aliceblue: "f0f8ff",
      antiquewhite: "faebd7",
      aqua: "00ffff",
      aquamarine: "7fffd4",
      azure: "f0ffff",
      beige: "f5f5dc",
      bisque: "ffe4c4",
      black: "000000",
      blanchedalmond: "ffebcd",
      blue: "0000ff",
      blueviolet: "8a2be2",
      brown: "a52a2a",
      burlywood: "deb887",
      cadetblue: "5f9ea0",
      chartreuse: "7fff00",
      chocolate: "d2691e",
      coral: "ff7f50",
      cornflowerblue: "6495ed",
      cornsilk: "fff8dc",
      crimson: "dc143c",
      cyan: "00ffff",
      darkblue: "00008b",
      darkcyan: "008b8b",
      darkgoldenrod: "b8860b",
      darkgray: "a9a9a9",
      darkgreen: "006400",
      darkkhaki: "bdb76b",
      darkmagenta: "8b008b",
      darkolivegreen: "556b2f",
      darkorange: "ff8c00",
      darkorchid: "9932cc",
      darkred: "8b0000",
      darksalmon: "e9967a",
      darkseagreen: "8fbc8f",
      darkslateblue: "483d8b",
      darkslategray: "2f4f4f",
      darkturquoise: "00ced1",
      darkviolet: "9400d3",
      deeppink: "ff1493",
      deepskyblue: "00bfff",
      dimgray: "696969",
      dodgerblue: "1e90ff",
      feldspar: "d19275",
      firebrick: "b22222",
      floralwhite: "fffaf0",
      forestgreen: "228b22",
      fuchsia: "ff00ff",
      gainsboro: "dcdcdc",
      ghostwhite: "f8f8ff",
      gold: "ffd700",
      goldenrod: "daa520",
      gray: "808080",
      green: "008000",
      greenyellow: "adff2f",
      honeydew: "f0fff0",
      hotpink: "ff69b4",
      indianred: "cd5c5c",
      indigo: "4b0082",
      ivory: "fffff0",
      khaki: "f0e68c",
      lavender: "e6e6fa",
      lavenderblush: "fff0f5",
      lawngreen: "7cfc00",
      lemonchiffon: "fffacd",
      lightblue: "add8e6",
      lightcoral: "f08080",
      lightcyan: "e0ffff",
      lightgoldenrodyellow: "fafad2",
      lightgrey: "d3d3d3",
      lightgreen: "90ee90",
      lightpink: "ffb6c1",
      lightsalmon: "ffa07a",
      lightseagreen: "20b2aa",
      lightskyblue: "87cefa",
      lightslateblue: "8470ff",
      lightslategray: "778899",
      lightsteelblue: "b0c4de",
      lightyellow: "ffffe0",
      lime: "00ff00",
      limegreen: "32cd32",
      linen: "faf0e6",
      magenta: "ff00ff",
      maroon: "800000",
      mediumaquamarine: "66cdaa",
      mediumblue: "0000cd",
      mediumorchid: "ba55d3",
      mediumpurple: "9370d8",
      mediumseagreen: "3cb371",
      mediumslateblue: "7b68ee",
      mediumspringgreen: "00fa9a",
      mediumturquoise: "48d1cc",
      mediumvioletred: "c71585",
      midnightblue: "191970",
      mintcream: "f5fffa",
      mistyrose: "ffe4e1",
      moccasin: "ffe4b5",
      navajowhite: "ffdead",
      navy: "000080",
      oldlace: "fdf5e6",
      olive: "808000",
      olivedrab: "6b8e23",
      orange: "ffa500",
      orangered: "ff4500",
      orchid: "da70d6",
      palegoldenrod: "eee8aa",
      palegreen: "98fb98",
      paleturquoise: "afeeee",
      palevioletred: "d87093",
      papayawhip: "ffefd5",
      peachpuff: "ffdab9",
      peru: "cd853f",
      pink: "ffc0cb",
      plum: "dda0dd",
      powderblue: "b0e0e6",
      purple: "800080",
      rebeccapurple: "663399",
      red: "ff0000",
      rosybrown: "bc8f8f",
      royalblue: "4169e1",
      saddlebrown: "8b4513",
      salmon: "fa8072",
      sandybrown: "f4a460",
      seagreen: "2e8b57",
      seashell: "fff5ee",
      sienna: "a0522d",
      silver: "c0c0c0",
      skyblue: "87ceeb",
      slateblue: "6a5acd",
      slategray: "708090",
      snow: "fffafa",
      springgreen: "00ff7f",
      steelblue: "4682b4",
      tan: "d2b48c",
      teal: "008080",
      thistle: "d8bfd8",
      tomato: "ff6347",
      turquoise: "40e0d0",
      violet: "ee82ee",
      violetred: "d02090",
      wheat: "f5deb3",
      white: "ffffff",
      whitesmoke: "f5f5f5",
      yellow: "ffff00",
      yellowgreen: "9acd32"
    };
    n = e[n] || n;
    for (var r = [
      {
        re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,
        example: ["rgba(123, 234, 45, 0.8)", "rgba(255,234,245,1.0)"],
        process: function(u) {
          return [
            parseInt(u[1]),
            parseInt(u[2]),
            parseInt(u[3]),
            parseFloat(u[4])
          ];
        }
      },
      {
        re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
        example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
        process: function(u) {
          return [
            parseInt(u[1]),
            parseInt(u[2]),
            parseInt(u[3])
          ];
        }
      },
      {
        re: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        example: ["#00ff00", "336699"],
        process: function(u) {
          return [
            parseInt(u[1], 16),
            parseInt(u[2], 16),
            parseInt(u[3], 16)
          ];
        }
      },
      {
        re: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        example: ["#fb0", "f0f"],
        process: function(u) {
          return [
            parseInt(u[1] + u[1], 16),
            parseInt(u[2] + u[2], 16),
            parseInt(u[3] + u[3], 16)
          ];
        }
      }
    ], t = 0; t < r.length; t++) {
      var i = r[t].re, a = r[t].process, s = i.exec(n);
      if (s) {
        var o = a(s);
        this.r = o[0], this.g = o[1], this.b = o[2], o.length > 3 && (this.alpha = o[3]), this.ok = !0;
      }
    }
    this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b, this.alpha = this.alpha < 0 ? 0 : this.alpha > 1 || isNaN(this.alpha) ? 1 : this.alpha, this.toRGB = function() {
      return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
    }, this.toRGBA = function() {
      return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.alpha + ")";
    }, this.toHex = function() {
      var u = this.r.toString(16), l = this.g.toString(16), h = this.b.toString(16);
      return u.length == 1 && (u = "0" + u), l.length == 1 && (l = "0" + l), h.length == 1 && (h = "0" + h), "#" + u + l + h;
    }, this.getHelpXML = function() {
      for (var u = new Array(), l = 0; l < r.length; l++)
        for (var h = r[l].example, c = 0; c < h.length; c++)
          u[u.length] = h[c];
      for (var v in e)
        u[u.length] = v;
      var f = document.createElement("ul");
      f.setAttribute("id", "rgbcolor-examples");
      for (var l = 0; l < u.length; l++)
        try {
          var g = document.createElement("li"), d = new RGBColor(u[l]), p = document.createElement("div");
          p.style.cssText = "margin: 3px; border: 1px solid black; background:" + d.toHex() + "; color:" + d.toHex(), p.appendChild(document.createTextNode("test"));
          var y = document.createTextNode(
            " " + u[l] + " -> " + d.toRGB() + " -> " + d.toHex()
          );
          g.appendChild(p), g.appendChild(y), f.appendChild(g);
        } catch {
        }
      return f;
    };
  }), Pa;
}
var of = sf();
const Da = /* @__PURE__ */ Zu(of);
var Ou = {}, Su;
function uf() {
  if (Su) return Ou;
  Su = 1;
  var n = le(), e = jr(), r = ul().indexOf, t = wl(), i = e([].indexOf), a = !!i && 1 / i([1], 1, -0) < 0, s = a || !t("indexOf");
  return n({ target: "Array", proto: !0, forced: s }, {
    indexOf: function(u) {
      var l = arguments.length > 1 ? arguments[1] : void 0;
      return a ? i(this, u, l) || 0 : r(this, u, l);
    }
  }), Ou;
}
uf();
var Eu = {}, Ru;
function lf() {
  if (Ru) return Eu;
  Ru = 1;
  var n = le(), e = re(), r = tn(), t = Re(), i = qe(), a = an(), s = e("".indexOf);
  return n({ target: "String", proto: !0, forced: !a("includes") }, {
    includes: function(u) {
      return !!~s(
        i(t(this)),
        i(r(u)),
        arguments.length > 1 ? arguments[1] : void 0
      );
    }
  }), Eu;
}
lf();
var Cu = {}, Aa, wu;
function hf() {
  if (wu) return Aa;
  wu = 1;
  var n = Ze();
  return Aa = Array.isArray || function(r) {
    return n(r) === "Array";
  }, Aa;
}
var Pu;
function ff() {
  if (Pu) return Cu;
  Pu = 1;
  var n = le(), e = re(), r = hf(), t = e([].reverse), i = [1, 2];
  return n({ target: "Array", proto: !0, forced: String(i) === String(i.reverse()) }, {
    reverse: function() {
      return r(this) && (this.length = this.length), t(this);
    }
  }), Cu;
}
ff();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Al = function(n, e) {
  return (Al = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, t) {
    r.__proto__ = t;
  } || function(r, t) {
    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
  })(n, e);
};
function Il(n, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  function r() {
    this.constructor = n;
  }
  Al(n, e), n.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
function cf(n) {
  var e = "";
  Array.isArray(n) || (n = [n]);
  for (var r = 0; r < n.length; r++) {
    var t = n[r];
    if (t.type === O.CLOSE_PATH) e += "z";
    else if (t.type === O.HORIZ_LINE_TO) e += (t.relative ? "h" : "H") + t.x;
    else if (t.type === O.VERT_LINE_TO) e += (t.relative ? "v" : "V") + t.y;
    else if (t.type === O.MOVE_TO) e += (t.relative ? "m" : "M") + t.x + " " + t.y;
    else if (t.type === O.LINE_TO) e += (t.relative ? "l" : "L") + t.x + " " + t.y;
    else if (t.type === O.CURVE_TO) e += (t.relative ? "c" : "C") + t.x1 + " " + t.y1 + " " + t.x2 + " " + t.y2 + " " + t.x + " " + t.y;
    else if (t.type === O.SMOOTH_CURVE_TO) e += (t.relative ? "s" : "S") + t.x2 + " " + t.y2 + " " + t.x + " " + t.y;
    else if (t.type === O.QUAD_TO) e += (t.relative ? "q" : "Q") + t.x1 + " " + t.y1 + " " + t.x + " " + t.y;
    else if (t.type === O.SMOOTH_QUAD_TO) e += (t.relative ? "t" : "T") + t.x + " " + t.y;
    else {
      if (t.type !== O.ARC) throw new Error('Unexpected command type "' + t.type + '" at index ' + r + ".");
      e += (t.relative ? "a" : "A") + t.rX + " " + t.rY + " " + t.xRot + " " + +t.lArcFlag + " " + +t.sweepFlag + " " + t.x + " " + t.y;
    }
  }
  return e;
}
function Va(n, e) {
  var r = n[0], t = n[1];
  return [r * Math.cos(e) - t * Math.sin(e), r * Math.sin(e) + t * Math.cos(e)];
}
function Se() {
  for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
  for (var r = 0; r < n.length; r++) if (typeof n[r] != "number") throw new Error("assertNumbers arguments[" + r + "] is not a number. " + typeof n[r] + " == typeof " + n[r]);
  return !0;
}
var Ge = Math.PI;
function Ia(n, e, r) {
  n.lArcFlag = n.lArcFlag === 0 ? 0 : 1, n.sweepFlag = n.sweepFlag === 0 ? 0 : 1;
  var t = n.rX, i = n.rY, a = n.x, s = n.y;
  t = Math.abs(n.rX), i = Math.abs(n.rY);
  var o = Va([(e - a) / 2, (r - s) / 2], -n.xRot / 180 * Ge), u = o[0], l = o[1], h = Math.pow(u, 2) / Math.pow(t, 2) + Math.pow(l, 2) / Math.pow(i, 2);
  1 < h && (t *= Math.sqrt(h), i *= Math.sqrt(h)), n.rX = t, n.rY = i;
  var c = Math.pow(t, 2) * Math.pow(l, 2) + Math.pow(i, 2) * Math.pow(u, 2), v = (n.lArcFlag !== n.sweepFlag ? 1 : -1) * Math.sqrt(Math.max(0, (Math.pow(t, 2) * Math.pow(i, 2) - c) / c)), f = t * l / i * v, g = -i * u / t * v, d = Va([f, g], n.xRot / 180 * Ge);
  n.cX = d[0] + (e + a) / 2, n.cY = d[1] + (r + s) / 2, n.phi1 = Math.atan2((l - g) / i, (u - f) / t), n.phi2 = Math.atan2((-l - g) / i, (-u - f) / t), n.sweepFlag === 0 && n.phi2 > n.phi1 && (n.phi2 -= 2 * Ge), n.sweepFlag === 1 && n.phi2 < n.phi1 && (n.phi2 += 2 * Ge), n.phi1 *= 180 / Ge, n.phi2 *= 180 / Ge;
}
function Au(n, e, r) {
  Se(n, e, r);
  var t = n * n + e * e - r * r;
  if (0 > t) return [];
  if (t === 0) return [[n * r / (n * n + e * e), e * r / (n * n + e * e)]];
  var i = Math.sqrt(t);
  return [[(n * r + e * i) / (n * n + e * e), (e * r - n * i) / (n * n + e * e)], [(n * r - e * i) / (n * n + e * e), (e * r + n * i) / (n * n + e * e)]];
}
var ae, Le = Math.PI / 180;
function Iu(n, e, r) {
  return (1 - r) * n + r * e;
}
function Nu(n, e, r, t) {
  return n + Math.cos(t / 180 * Ge) * e + Math.sin(t / 180 * Ge) * r;
}
function _u(n, e, r, t) {
  var i = 1e-6, a = e - n, s = r - e, o = 3 * a + 3 * (t - r) - 6 * s, u = 6 * (s - a), l = 3 * a;
  return Math.abs(o) < i ? [-l / u] : function(h, c, v) {
    var f = h * h / 4 - c;
    if (f < -1e-6) return [];
    if (f <= v) return [-h / 2];
    var g = Math.sqrt(f);
    return [-h / 2 - g, -h / 2 + g];
  }(u / o, l / o, i);
}
function Mu(n, e, r, t, i) {
  var a = 1 - i;
  return n * (a * a * a) + e * (3 * a * a * i) + r * (3 * a * i * i) + t * (i * i * i);
}
(function(n) {
  function e() {
    return i(function(o, u, l) {
      return o.relative && (o.x1 !== void 0 && (o.x1 += u), o.y1 !== void 0 && (o.y1 += l), o.x2 !== void 0 && (o.x2 += u), o.y2 !== void 0 && (o.y2 += l), o.x !== void 0 && (o.x += u), o.y !== void 0 && (o.y += l), o.relative = !1), o;
    });
  }
  function r() {
    var o = NaN, u = NaN, l = NaN, h = NaN;
    return i(function(c, v, f) {
      return c.type & O.SMOOTH_CURVE_TO && (c.type = O.CURVE_TO, o = isNaN(o) ? v : o, u = isNaN(u) ? f : u, c.x1 = c.relative ? v - o : 2 * v - o, c.y1 = c.relative ? f - u : 2 * f - u), c.type & O.CURVE_TO ? (o = c.relative ? v + c.x2 : c.x2, u = c.relative ? f + c.y2 : c.y2) : (o = NaN, u = NaN), c.type & O.SMOOTH_QUAD_TO && (c.type = O.QUAD_TO, l = isNaN(l) ? v : l, h = isNaN(h) ? f : h, c.x1 = c.relative ? v - l : 2 * v - l, c.y1 = c.relative ? f - h : 2 * f - h), c.type & O.QUAD_TO ? (l = c.relative ? v + c.x1 : c.x1, h = c.relative ? f + c.y1 : c.y1) : (l = NaN, h = NaN), c;
    });
  }
  function t() {
    var o = NaN, u = NaN;
    return i(function(l, h, c) {
      if (l.type & O.SMOOTH_QUAD_TO && (l.type = O.QUAD_TO, o = isNaN(o) ? h : o, u = isNaN(u) ? c : u, l.x1 = l.relative ? h - o : 2 * h - o, l.y1 = l.relative ? c - u : 2 * c - u), l.type & O.QUAD_TO) {
        o = l.relative ? h + l.x1 : l.x1, u = l.relative ? c + l.y1 : l.y1;
        var v = l.x1, f = l.y1;
        l.type = O.CURVE_TO, l.x1 = ((l.relative ? 0 : h) + 2 * v) / 3, l.y1 = ((l.relative ? 0 : c) + 2 * f) / 3, l.x2 = (l.x + 2 * v) / 3, l.y2 = (l.y + 2 * f) / 3;
      } else o = NaN, u = NaN;
      return l;
    });
  }
  function i(o) {
    var u = 0, l = 0, h = NaN, c = NaN;
    return function(v) {
      if (isNaN(h) && !(v.type & O.MOVE_TO)) throw new Error("path must start with moveto");
      var f = o(v, u, l, h, c);
      return v.type & O.CLOSE_PATH && (u = h, l = c), v.x !== void 0 && (u = v.relative ? u + v.x : v.x), v.y !== void 0 && (l = v.relative ? l + v.y : v.y), v.type & O.MOVE_TO && (h = u, c = l), f;
    };
  }
  function a(o, u, l, h, c, v) {
    return Se(o, u, l, h, c, v), i(function(f, g, d, p) {
      var y = f.x1, m = f.x2, b = f.relative && !isNaN(p), x = f.x !== void 0 ? f.x : b ? 0 : g, S = f.y !== void 0 ? f.y : b ? 0 : d;
      function E(z) {
        return z * z;
      }
      f.type & O.HORIZ_LINE_TO && u !== 0 && (f.type = O.LINE_TO, f.y = f.relative ? 0 : d), f.type & O.VERT_LINE_TO && l !== 0 && (f.type = O.LINE_TO, f.x = f.relative ? 0 : g), f.x !== void 0 && (f.x = f.x * o + S * l + (b ? 0 : c)), f.y !== void 0 && (f.y = x * u + f.y * h + (b ? 0 : v)), f.x1 !== void 0 && (f.x1 = f.x1 * o + f.y1 * l + (b ? 0 : c)), f.y1 !== void 0 && (f.y1 = y * u + f.y1 * h + (b ? 0 : v)), f.x2 !== void 0 && (f.x2 = f.x2 * o + f.y2 * l + (b ? 0 : c)), f.y2 !== void 0 && (f.y2 = m * u + f.y2 * h + (b ? 0 : v));
      var T = o * h - u * l;
      if (f.xRot !== void 0 && (o !== 1 || u !== 0 || l !== 0 || h !== 1)) if (T === 0) delete f.rX, delete f.rY, delete f.xRot, delete f.lArcFlag, delete f.sweepFlag, f.type = O.LINE_TO;
      else {
        var _ = f.xRot * Math.PI / 180, V = Math.sin(_), P = Math.cos(_), M = 1 / E(f.rX), w = 1 / E(f.rY), k = E(P) * M + E(V) * w, R = 2 * V * P * (M - w), A = E(V) * M + E(P) * w, U = k * h * h - R * u * h + A * u * u, I = R * (o * h + u * l) - 2 * (k * l * h + A * o * u), B = k * l * l - R * o * l + A * o * o, N = (Math.atan2(I, U - B) + Math.PI) % Math.PI / 2, L = Math.sin(N), j = Math.cos(N);
        f.rX = Math.abs(T) / Math.sqrt(U * E(j) + I * L * j + B * E(L)), f.rY = Math.abs(T) / Math.sqrt(U * E(L) - I * L * j + B * E(j)), f.xRot = 180 * N / Math.PI;
      }
      return f.sweepFlag !== void 0 && 0 > T && (f.sweepFlag = +!f.sweepFlag), f;
    });
  }
  function s() {
    return function(o) {
      var u = {};
      for (var l in o) u[l] = o[l];
      return u;
    };
  }
  n.ROUND = function(o) {
    function u(l) {
      return Math.round(l * o) / o;
    }
    return o === void 0 && (o = 1e13), Se(o), function(l) {
      return l.x1 !== void 0 && (l.x1 = u(l.x1)), l.y1 !== void 0 && (l.y1 = u(l.y1)), l.x2 !== void 0 && (l.x2 = u(l.x2)), l.y2 !== void 0 && (l.y2 = u(l.y2)), l.x !== void 0 && (l.x = u(l.x)), l.y !== void 0 && (l.y = u(l.y)), l.rX !== void 0 && (l.rX = u(l.rX)), l.rY !== void 0 && (l.rY = u(l.rY)), l;
    };
  }, n.TO_ABS = e, n.TO_REL = function() {
    return i(function(o, u, l) {
      return o.relative || (o.x1 !== void 0 && (o.x1 -= u), o.y1 !== void 0 && (o.y1 -= l), o.x2 !== void 0 && (o.x2 -= u), o.y2 !== void 0 && (o.y2 -= l), o.x !== void 0 && (o.x -= u), o.y !== void 0 && (o.y -= l), o.relative = !0), o;
    });
  }, n.NORMALIZE_HVZ = function(o, u, l) {
    return o === void 0 && (o = !0), u === void 0 && (u = !0), l === void 0 && (l = !0), i(function(h, c, v, f, g) {
      if (isNaN(f) && !(h.type & O.MOVE_TO)) throw new Error("path must start with moveto");
      return u && h.type & O.HORIZ_LINE_TO && (h.type = O.LINE_TO, h.y = h.relative ? 0 : v), l && h.type & O.VERT_LINE_TO && (h.type = O.LINE_TO, h.x = h.relative ? 0 : c), o && h.type & O.CLOSE_PATH && (h.type = O.LINE_TO, h.x = h.relative ? f - c : f, h.y = h.relative ? g - v : g), h.type & O.ARC && (h.rX === 0 || h.rY === 0) && (h.type = O.LINE_TO, delete h.rX, delete h.rY, delete h.xRot, delete h.lArcFlag, delete h.sweepFlag), h;
    });
  }, n.NORMALIZE_ST = r, n.QT_TO_C = t, n.INFO = i, n.SANITIZE = function(o) {
    o === void 0 && (o = 0), Se(o);
    var u = NaN, l = NaN, h = NaN, c = NaN;
    return i(function(v, f, g, d, p) {
      var y = Math.abs, m = !1, b = 0, x = 0;
      if (v.type & O.SMOOTH_CURVE_TO && (b = isNaN(u) ? 0 : f - u, x = isNaN(l) ? 0 : g - l), v.type & (O.CURVE_TO | O.SMOOTH_CURVE_TO) ? (u = v.relative ? f + v.x2 : v.x2, l = v.relative ? g + v.y2 : v.y2) : (u = NaN, l = NaN), v.type & O.SMOOTH_QUAD_TO ? (h = isNaN(h) ? f : 2 * f - h, c = isNaN(c) ? g : 2 * g - c) : v.type & O.QUAD_TO ? (h = v.relative ? f + v.x1 : v.x1, c = v.relative ? g + v.y1 : v.y2) : (h = NaN, c = NaN), v.type & O.LINE_COMMANDS || v.type & O.ARC && (v.rX === 0 || v.rY === 0 || !v.lArcFlag) || v.type & O.CURVE_TO || v.type & O.SMOOTH_CURVE_TO || v.type & O.QUAD_TO || v.type & O.SMOOTH_QUAD_TO) {
        var S = v.x === void 0 ? 0 : v.relative ? v.x : v.x - f, E = v.y === void 0 ? 0 : v.relative ? v.y : v.y - g;
        b = isNaN(h) ? v.x1 === void 0 ? b : v.relative ? v.x : v.x1 - f : h - f, x = isNaN(c) ? v.y1 === void 0 ? x : v.relative ? v.y : v.y1 - g : c - g;
        var T = v.x2 === void 0 ? 0 : v.relative ? v.x : v.x2 - f, _ = v.y2 === void 0 ? 0 : v.relative ? v.y : v.y2 - g;
        y(S) <= o && y(E) <= o && y(b) <= o && y(x) <= o && y(T) <= o && y(_) <= o && (m = !0);
      }
      return v.type & O.CLOSE_PATH && y(f - d) <= o && y(g - p) <= o && (m = !0), m ? [] : v;
    });
  }, n.MATRIX = a, n.ROTATE = function(o, u, l) {
    u === void 0 && (u = 0), l === void 0 && (l = 0), Se(o, u, l);
    var h = Math.sin(o), c = Math.cos(o);
    return a(c, h, -h, c, u - u * c + l * h, l - u * h - l * c);
  }, n.TRANSLATE = function(o, u) {
    return u === void 0 && (u = 0), Se(o, u), a(1, 0, 0, 1, o, u);
  }, n.SCALE = function(o, u) {
    return u === void 0 && (u = o), Se(o, u), a(o, 0, 0, u, 0, 0);
  }, n.SKEW_X = function(o) {
    return Se(o), a(1, 0, Math.atan(o), 1, 0, 0);
  }, n.SKEW_Y = function(o) {
    return Se(o), a(1, Math.atan(o), 0, 1, 0, 0);
  }, n.X_AXIS_SYMMETRY = function(o) {
    return o === void 0 && (o = 0), Se(o), a(-1, 0, 0, 1, o, 0);
  }, n.Y_AXIS_SYMMETRY = function(o) {
    return o === void 0 && (o = 0), Se(o), a(1, 0, 0, -1, 0, o);
  }, n.A_TO_C = function() {
    return i(function(o, u, l) {
      return O.ARC === o.type ? function(h, c, v) {
        var f, g, d, p;
        h.cX || Ia(h, c, v);
        for (var y = Math.min(h.phi1, h.phi2), m = Math.max(h.phi1, h.phi2) - y, b = Math.ceil(m / 90), x = new Array(b), S = c, E = v, T = 0; T < b; T++) {
          var _ = Iu(h.phi1, h.phi2, T / b), V = Iu(h.phi1, h.phi2, (T + 1) / b), P = V - _, M = 4 / 3 * Math.tan(P * Le / 4), w = [Math.cos(_ * Le) - M * Math.sin(_ * Le), Math.sin(_ * Le) + M * Math.cos(_ * Le)], k = w[0], R = w[1], A = [Math.cos(V * Le), Math.sin(V * Le)], U = A[0], I = A[1], B = [U + M * Math.sin(V * Le), I - M * Math.cos(V * Le)], N = B[0], L = B[1];
          x[T] = { relative: h.relative, type: O.CURVE_TO };
          var j = function(z, X) {
            var H = Va([z * h.rX, X * h.rY], h.xRot), Q = H[0], Fe = H[1];
            return [h.cX + Q, h.cY + Fe];
          };
          f = j(k, R), x[T].x1 = f[0], x[T].y1 = f[1], g = j(N, L), x[T].x2 = g[0], x[T].y2 = g[1], d = j(U, I), x[T].x = d[0], x[T].y = d[1], h.relative && (x[T].x1 -= S, x[T].y1 -= E, x[T].x2 -= S, x[T].y2 -= E, x[T].x -= S, x[T].y -= E), S = (p = [x[T].x, x[T].y])[0], E = p[1];
        }
        return x;
      }(o, o.relative ? 0 : u, o.relative ? 0 : l) : o;
    });
  }, n.ANNOTATE_ARCS = function() {
    return i(function(o, u, l) {
      return o.relative && (u = 0, l = 0), O.ARC === o.type && Ia(o, u, l), o;
    });
  }, n.CLONE = s, n.CALCULATE_BOUNDS = function() {
    var o = function(v) {
      var f = {};
      for (var g in v) f[g] = v[g];
      return f;
    }, u = e(), l = t(), h = r(), c = i(function(v, f, g) {
      var d = h(l(u(o(v))));
      function p(L) {
        L > c.maxX && (c.maxX = L), L < c.minX && (c.minX = L);
      }
      function y(L) {
        L > c.maxY && (c.maxY = L), L < c.minY && (c.minY = L);
      }
      if (d.type & O.DRAWING_COMMANDS && (p(f), y(g)), d.type & O.HORIZ_LINE_TO && p(d.x), d.type & O.VERT_LINE_TO && y(d.y), d.type & O.LINE_TO && (p(d.x), y(d.y)), d.type & O.CURVE_TO) {
        p(d.x), y(d.y);
        for (var m = 0, b = _u(f, d.x1, d.x2, d.x); m < b.length; m++)
          0 < (N = b[m]) && 1 > N && p(Mu(f, d.x1, d.x2, d.x, N));
        for (var x = 0, S = _u(g, d.y1, d.y2, d.y); x < S.length; x++)
          0 < (N = S[x]) && 1 > N && y(Mu(g, d.y1, d.y2, d.y, N));
      }
      if (d.type & O.ARC) {
        p(d.x), y(d.y), Ia(d, f, g);
        for (var E = d.xRot / 180 * Math.PI, T = Math.cos(E) * d.rX, _ = Math.sin(E) * d.rX, V = -Math.sin(E) * d.rY, P = Math.cos(E) * d.rY, M = d.phi1 < d.phi2 ? [d.phi1, d.phi2] : -180 > d.phi2 ? [d.phi2 + 360, d.phi1 + 360] : [d.phi2, d.phi1], w = M[0], k = M[1], R = function(L) {
          var j = L[0], z = L[1], X = 180 * Math.atan2(z, j) / Math.PI;
          return X < w ? X + 360 : X;
        }, A = 0, U = Au(V, -T, 0).map(R); A < U.length; A++)
          (N = U[A]) > w && N < k && p(Nu(d.cX, T, V, N));
        for (var I = 0, B = Au(P, -_, 0).map(R); I < B.length; I++) {
          var N;
          (N = B[I]) > w && N < k && y(Nu(d.cY, _, P, N));
        }
      }
      return v;
    });
    return c.minX = 1 / 0, c.maxX = -1 / 0, c.minY = 1 / 0, c.maxY = -1 / 0, c;
  };
})(ae || (ae = {}));
var Oe, Nl = function() {
  function n() {
  }
  return n.prototype.round = function(e) {
    return this.transform(ae.ROUND(e));
  }, n.prototype.toAbs = function() {
    return this.transform(ae.TO_ABS());
  }, n.prototype.toRel = function() {
    return this.transform(ae.TO_REL());
  }, n.prototype.normalizeHVZ = function(e, r, t) {
    return this.transform(ae.NORMALIZE_HVZ(e, r, t));
  }, n.prototype.normalizeST = function() {
    return this.transform(ae.NORMALIZE_ST());
  }, n.prototype.qtToC = function() {
    return this.transform(ae.QT_TO_C());
  }, n.prototype.aToC = function() {
    return this.transform(ae.A_TO_C());
  }, n.prototype.sanitize = function(e) {
    return this.transform(ae.SANITIZE(e));
  }, n.prototype.translate = function(e, r) {
    return this.transform(ae.TRANSLATE(e, r));
  }, n.prototype.scale = function(e, r) {
    return this.transform(ae.SCALE(e, r));
  }, n.prototype.rotate = function(e, r, t) {
    return this.transform(ae.ROTATE(e, r, t));
  }, n.prototype.matrix = function(e, r, t, i, a, s) {
    return this.transform(ae.MATRIX(e, r, t, i, a, s));
  }, n.prototype.skewX = function(e) {
    return this.transform(ae.SKEW_X(e));
  }, n.prototype.skewY = function(e) {
    return this.transform(ae.SKEW_Y(e));
  }, n.prototype.xSymmetry = function(e) {
    return this.transform(ae.X_AXIS_SYMMETRY(e));
  }, n.prototype.ySymmetry = function(e) {
    return this.transform(ae.Y_AXIS_SYMMETRY(e));
  }, n.prototype.annotateArcs = function() {
    return this.transform(ae.ANNOTATE_ARCS());
  }, n;
}(), vf = function(n) {
  return n === " " || n === "	" || n === "\r" || n === `
`;
}, qu = function(n) {
  return 48 <= n.charCodeAt(0) && n.charCodeAt(0) <= 57;
}, gf = function(n) {
  function e() {
    var r = n.call(this) || this;
    return r.curNumber = "", r.curCommandType = -1, r.curCommandRelative = !1, r.canParseCommandOrComma = !0, r.curNumberHasExp = !1, r.curNumberHasExpDigits = !1, r.curNumberHasDecimal = !1, r.curArgs = [], r;
  }
  return Il(e, n), e.prototype.finish = function(r) {
    if (r === void 0 && (r = []), this.parse(" ", r), this.curArgs.length !== 0 || !this.canParseCommandOrComma) throw new SyntaxError("Unterminated command at the path end.");
    return r;
  }, e.prototype.parse = function(r, t) {
    var i = this;
    t === void 0 && (t = []);
    for (var a = function(c) {
      t.push(c), i.curArgs.length = 0, i.canParseCommandOrComma = !0;
    }, s = 0; s < r.length; s++) {
      var o = r[s], u = !(this.curCommandType !== O.ARC || this.curArgs.length !== 3 && this.curArgs.length !== 4 || this.curNumber.length !== 1 || this.curNumber !== "0" && this.curNumber !== "1"), l = qu(o) && (this.curNumber === "0" && o === "0" || u);
      if (!qu(o) || l) if (o !== "e" && o !== "E") if (o !== "-" && o !== "+" || !this.curNumberHasExp || this.curNumberHasExpDigits) if (o !== "." || this.curNumberHasExp || this.curNumberHasDecimal || u) {
        if (this.curNumber && this.curCommandType !== -1) {
          var h = Number(this.curNumber);
          if (isNaN(h)) throw new SyntaxError("Invalid number ending at " + s);
          if (this.curCommandType === O.ARC) {
            if (this.curArgs.length === 0 || this.curArgs.length === 1) {
              if (0 > h) throw new SyntaxError('Expected positive number, got "' + h + '" at index "' + s + '"');
            } else if ((this.curArgs.length === 3 || this.curArgs.length === 4) && this.curNumber !== "0" && this.curNumber !== "1") throw new SyntaxError('Expected a flag, got "' + this.curNumber + '" at index "' + s + '"');
          }
          this.curArgs.push(h), this.curArgs.length === df[this.curCommandType] && (O.HORIZ_LINE_TO === this.curCommandType ? a({ type: O.HORIZ_LINE_TO, relative: this.curCommandRelative, x: h }) : O.VERT_LINE_TO === this.curCommandType ? a({ type: O.VERT_LINE_TO, relative: this.curCommandRelative, y: h }) : this.curCommandType === O.MOVE_TO || this.curCommandType === O.LINE_TO || this.curCommandType === O.SMOOTH_QUAD_TO ? (a({ type: this.curCommandType, relative: this.curCommandRelative, x: this.curArgs[0], y: this.curArgs[1] }), O.MOVE_TO === this.curCommandType && (this.curCommandType = O.LINE_TO)) : this.curCommandType === O.CURVE_TO ? a({ type: O.CURVE_TO, relative: this.curCommandRelative, x1: this.curArgs[0], y1: this.curArgs[1], x2: this.curArgs[2], y2: this.curArgs[3], x: this.curArgs[4], y: this.curArgs[5] }) : this.curCommandType === O.SMOOTH_CURVE_TO ? a({ type: O.SMOOTH_CURVE_TO, relative: this.curCommandRelative, x2: this.curArgs[0], y2: this.curArgs[1], x: this.curArgs[2], y: this.curArgs[3] }) : this.curCommandType === O.QUAD_TO ? a({ type: O.QUAD_TO, relative: this.curCommandRelative, x1: this.curArgs[0], y1: this.curArgs[1], x: this.curArgs[2], y: this.curArgs[3] }) : this.curCommandType === O.ARC && a({ type: O.ARC, relative: this.curCommandRelative, rX: this.curArgs[0], rY: this.curArgs[1], xRot: this.curArgs[2], lArcFlag: this.curArgs[3], sweepFlag: this.curArgs[4], x: this.curArgs[5], y: this.curArgs[6] })), this.curNumber = "", this.curNumberHasExpDigits = !1, this.curNumberHasExp = !1, this.curNumberHasDecimal = !1, this.canParseCommandOrComma = !0;
        }
        if (!vf(o)) if (o === "," && this.canParseCommandOrComma) this.canParseCommandOrComma = !1;
        else if (o !== "+" && o !== "-" && o !== ".") if (l) this.curNumber = o, this.curNumberHasDecimal = !1;
        else {
          if (this.curArgs.length !== 0) throw new SyntaxError("Unterminated command at index " + s + ".");
          if (!this.canParseCommandOrComma) throw new SyntaxError('Unexpected character "' + o + '" at index ' + s + ". Command cannot follow comma");
          if (this.canParseCommandOrComma = !1, o !== "z" && o !== "Z") if (o === "h" || o === "H") this.curCommandType = O.HORIZ_LINE_TO, this.curCommandRelative = o === "h";
          else if (o === "v" || o === "V") this.curCommandType = O.VERT_LINE_TO, this.curCommandRelative = o === "v";
          else if (o === "m" || o === "M") this.curCommandType = O.MOVE_TO, this.curCommandRelative = o === "m";
          else if (o === "l" || o === "L") this.curCommandType = O.LINE_TO, this.curCommandRelative = o === "l";
          else if (o === "c" || o === "C") this.curCommandType = O.CURVE_TO, this.curCommandRelative = o === "c";
          else if (o === "s" || o === "S") this.curCommandType = O.SMOOTH_CURVE_TO, this.curCommandRelative = o === "s";
          else if (o === "q" || o === "Q") this.curCommandType = O.QUAD_TO, this.curCommandRelative = o === "q";
          else if (o === "t" || o === "T") this.curCommandType = O.SMOOTH_QUAD_TO, this.curCommandRelative = o === "t";
          else {
            if (o !== "a" && o !== "A") throw new SyntaxError('Unexpected character "' + o + '" at index ' + s + ".");
            this.curCommandType = O.ARC, this.curCommandRelative = o === "a";
          }
          else t.push({ type: O.CLOSE_PATH }), this.canParseCommandOrComma = !0, this.curCommandType = -1;
        }
        else this.curNumber = o, this.curNumberHasDecimal = o === ".";
      } else this.curNumber += o, this.curNumberHasDecimal = !0;
      else this.curNumber += o;
      else this.curNumber += o, this.curNumberHasExp = !0;
      else this.curNumber += o, this.curNumberHasExpDigits = this.curNumberHasExp;
    }
    return t;
  }, e.prototype.transform = function(r) {
    return Object.create(this, { parse: { value: function(t, i) {
      i === void 0 && (i = []);
      for (var a = 0, s = Object.getPrototypeOf(this).parse.call(this, t); a < s.length; a++) {
        var o = s[a], u = r(o);
        Array.isArray(u) ? i.push.apply(i, u) : i.push(u);
      }
      return i;
    } } });
  }, e;
}(Nl), O = function(n) {
  function e(r) {
    var t = n.call(this) || this;
    return t.commands = typeof r == "string" ? e.parse(r) : r, t;
  }
  return Il(e, n), e.prototype.encode = function() {
    return e.encode(this.commands);
  }, e.prototype.getBounds = function() {
    var r = ae.CALCULATE_BOUNDS();
    return this.transform(r), r;
  }, e.prototype.transform = function(r) {
    for (var t = [], i = 0, a = this.commands; i < a.length; i++) {
      var s = r(a[i]);
      Array.isArray(s) ? t.push.apply(t, s) : t.push(s);
    }
    return this.commands = t, this;
  }, e.encode = function(r) {
    return cf(r);
  }, e.parse = function(r) {
    var t = new gf(), i = [];
    return t.parse(r, i), t.finish(i), i;
  }, e.CLOSE_PATH = 1, e.MOVE_TO = 2, e.HORIZ_LINE_TO = 4, e.VERT_LINE_TO = 8, e.LINE_TO = 16, e.CURVE_TO = 32, e.SMOOTH_CURVE_TO = 64, e.QUAD_TO = 128, e.SMOOTH_QUAD_TO = 256, e.ARC = 512, e.LINE_COMMANDS = e.LINE_TO | e.HORIZ_LINE_TO | e.VERT_LINE_TO, e.DRAWING_COMMANDS = e.HORIZ_LINE_TO | e.VERT_LINE_TO | e.LINE_TO | e.CURVE_TO | e.SMOOTH_CURVE_TO | e.QUAD_TO | e.SMOOTH_QUAD_TO | e.ARC, e;
}(Nl), df = ((Oe = {})[O.MOVE_TO] = 2, Oe[O.LINE_TO] = 2, Oe[O.HORIZ_LINE_TO] = 1, Oe[O.VERT_LINE_TO] = 1, Oe[O.CLOSE_PATH] = 0, Oe[O.QUAD_TO] = 4, Oe[O.SMOOTH_QUAD_TO] = 2, Oe[O.CURVE_TO] = 6, Oe[O.SMOOTH_CURVE_TO] = 4, Oe[O.ARC] = 7, Oe), Du = {}, Na, Vu;
function pf() {
  if (Vu) return Na;
  Vu = 1;
  var n = se(), e = we(), r = Ir(), t = Ol(), i = RegExp.prototype;
  return Na = function(a) {
    var s = a.flags;
    return s === void 0 && !("flags" in i) && !e(a, "flags") && r(i, a) ? n(t, a) : s;
  }, Na;
}
var Lu;
function yf() {
  if (Lu) return Du;
  Lu = 1;
  var n = Dr().PROPER, e = rr(), r = ue(), t = qe(), i = ee(), a = pf(), s = "toString", o = RegExp.prototype, u = o[s], l = i(function() {
    return u.call({ source: "a", flags: "b" }) !== "/a/b";
  }), h = n && u.name !== s;
  return (l || h) && e(o, s, function() {
    var v = r(this), f = t(v.source), g = t(a(v));
    return "/" + f + "/" + g;
  }, { unsafe: !0 }), Du;
}
yf();
function Pr(n) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Pr = function(e) {
    return typeof e;
  } : Pr = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Pr(n);
}
function mf(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
var bf = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259], xf = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];
function Tf(n, e, r, t, i) {
  if (typeof n == "string" && (n = document.getElementById(n)), !n || Pr(n) !== "object" || !("getContext" in n))
    throw new TypeError("Expecting canvas with `getContext` method in processCanvasRGB(A) calls!");
  var a = n.getContext("2d");
  try {
    return a.getImageData(e, r, t, i);
  } catch (s) {
    throw new Error("unable to access image data: " + s);
  }
}
function Of(n, e, r, t, i, a) {
  if (!(isNaN(a) || a < 1)) {
    a |= 0;
    var s = Tf(n, e, r, t, i);
    s = Sf(s, e, r, t, i, a), n.getContext("2d").putImageData(s, e, r);
  }
}
function Sf(n, e, r, t, i, a) {
  for (var s = n.data, o = 2 * a + 1, u = t - 1, l = i - 1, h = a + 1, c = h * (h + 1) / 2, v = new ku(), f = v, g, d = 1; d < o; d++)
    f = f.next = new ku(), d === h && (g = f);
  f.next = v;
  for (var p = null, y = null, m = 0, b = 0, x = bf[a], S = xf[a], E = 0; E < i; E++) {
    f = v;
    for (var T = s[b], _ = s[b + 1], V = s[b + 2], P = s[b + 3], M = 0; M < h; M++)
      f.r = T, f.g = _, f.b = V, f.a = P, f = f.next;
    for (var w = 0, k = 0, R = 0, A = 0, U = h * T, I = h * _, B = h * V, N = h * P, L = c * T, j = c * _, z = c * V, X = c * P, H = 1; H < h; H++) {
      var Q = b + ((u < H ? u : H) << 2), Fe = s[Q], De = s[Q + 1], Ae = s[Q + 2], de = s[Q + 3], pe = h - H;
      L += (f.r = Fe) * pe, j += (f.g = De) * pe, z += (f.b = Ae) * pe, X += (f.a = de) * pe, w += Fe, k += De, R += Ae, A += de, f = f.next;
    }
    p = v, y = g;
    for (var ye = 0; ye < t; ye++) {
      var Ie = X * x >>> S;
      if (s[b + 3] = Ie, Ie !== 0) {
        var Ne = 255 / Ie;
        s[b] = (L * x >>> S) * Ne, s[b + 1] = (j * x >>> S) * Ne, s[b + 2] = (z * x >>> S) * Ne;
      } else
        s[b] = s[b + 1] = s[b + 2] = 0;
      L -= U, j -= I, z -= B, X -= N, U -= p.r, I -= p.g, B -= p.b, N -= p.a;
      var he = ye + a + 1;
      he = m + (he < u ? he : u) << 2, w += p.r = s[he], k += p.g = s[he + 1], R += p.b = s[he + 2], A += p.a = s[he + 3], L += w, j += k, z += R, X += A, p = p.next;
      var me = y, Ue = me.r, xr = me.g, or = me.b, Tr = me.a;
      U += Ue, I += xr, B += or, N += Tr, w -= Ue, k -= xr, R -= or, A -= Tr, y = y.next, b += 4;
    }
    m += t;
  }
  for (var ve = 0; ve < t; ve++) {
    b = ve << 2;
    var fe = s[b], be = s[b + 1], C = s[b + 2], q = s[b + 3], G = h * fe, $ = h * be, W = h * C, _e = h * q, Ve = c * fe, xe = c * be, Te = c * C, We = c * q;
    f = v;
    for (var ur = 0; ur < h; ur++)
      f.r = fe, f.g = be, f.b = C, f.a = q, f = f.next;
    for (var Or = t, Hr = 0, Wr = 0, Yr = 0, Xr = 0, Sr = 1; Sr <= a; Sr++) {
      b = Or + ve << 2;
      var Er = h - Sr;
      Ve += (f.r = fe = s[b]) * Er, xe += (f.g = be = s[b + 1]) * Er, Te += (f.b = C = s[b + 2]) * Er, We += (f.a = q = s[b + 3]) * Er, Xr += fe, Hr += be, Wr += C, Yr += q, f = f.next, Sr < l && (Or += t);
    }
    b = ve, p = v, y = g;
    for (var Kr = 0; Kr < i; Kr++) {
      var ce = b << 2;
      s[ce + 3] = q = We * x >>> S, q > 0 ? (q = 255 / q, s[ce] = (Ve * x >>> S) * q, s[ce + 1] = (xe * x >>> S) * q, s[ce + 2] = (Te * x >>> S) * q) : s[ce] = s[ce + 1] = s[ce + 2] = 0, Ve -= G, xe -= $, Te -= W, We -= _e, G -= p.r, $ -= p.g, W -= p.b, _e -= p.a, ce = ve + ((ce = Kr + h) < l ? ce : l) * t << 2, Ve += Xr += p.r = s[ce], xe += Hr += p.g = s[ce + 1], Te += Wr += p.b = s[ce + 2], We += Yr += p.a = s[ce + 3], p = p.next, G += fe = y.r, $ += be = y.g, W += C = y.b, _e += q = y.a, Xr -= fe, Hr -= be, Wr -= C, Yr -= q, y = y.next, b += t;
    }
  }
  return n;
}
var ku = (
  /**
   * Set properties.
   */
  function n() {
    mf(this, n), this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null;
  }
);
function Ef() {
  var {
    DOMParser: n
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = {
    window: null,
    ignoreAnimation: !0,
    ignoreMouse: !0,
    DOMParser: n,
    createCanvas(r, t) {
      return new OffscreenCanvas(r, t);
    },
    createImage(r) {
      return Be(function* () {
        var t = yield fetch(r), i = yield t.blob(), a = yield createImageBitmap(i);
        return a;
      })();
    }
  };
  return (typeof DOMParser < "u" || typeof n > "u") && Reflect.deleteProperty(e, "DOMParser"), e;
}
function Rf(n) {
  var {
    DOMParser: e,
    canvas: r,
    fetch: t
  } = n;
  return {
    window: null,
    ignoreAnimation: !0,
    ignoreMouse: !0,
    DOMParser: e,
    fetch: t,
    createCanvas: r.createCanvas,
    createImage: r.loadImage
  };
}
var Lc = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  offscreen: Ef,
  node: Rf
});
function sr(n) {
  return n.replace(/(?!\u3000)\s+/gm, " ");
}
function Cf(n) {
  return n.replace(/^[\n \t]+/, "");
}
function wf(n) {
  return n.replace(/[\n \t]+$/, "");
}
function ge(n) {
  var e = (n || "").match(/-?(\d+(?:\.\d*(?:[eE][+-]?\d+)?)?|\.\d+)(?=\D|$)/gm) || [];
  return e.map(parseFloat);
}
var Pf = /^[A-Z-]+$/;
function Af(n) {
  return Pf.test(n) ? n.toLowerCase() : n;
}
function _l(n) {
  var e = /url\(('([^']+)'|"([^"]+)"|([^'")]+))\)/.exec(n) || [];
  return e[2] || e[3] || e[4];
}
function If(n) {
  if (!n.startsWith("rgb"))
    return n;
  var e = 3, r = n.replace(/\d+(\.\d+)?/g, (t, i) => e-- && i ? String(Math.round(parseFloat(t))) : t);
  return r;
}
var Nf = /(\[[^\]]+\])/g, _f = /(#[^\s+>~.[:]+)/g, Mf = /(\.[^\s+>~.[:]+)/g, qf = /(::[^\s+>~.[:]+|:first-line|:first-letter|:before|:after)/gi, Df = /(:[\w-]+\([^)]*\))/gi, Vf = /(:[^\s+>~.[:]+)/g, Lf = /([^\s+>~.[:]+)/g;
function Ye(n, e) {
  var r = e.exec(n);
  return r ? [n.replace(e, " "), r.length] : [n, 0];
}
function kf(n) {
  var e = [0, 0, 0], r = n.replace(/:not\(([^)]*)\)/g, "     $1 ").replace(/{[\s\S]*/gm, " "), t = 0;
  return [r, t] = Ye(r, Nf), e[1] += t, [r, t] = Ye(r, _f), e[0] += t, [r, t] = Ye(r, Mf), e[1] += t, [r, t] = Ye(r, qf), e[2] += t, [r, t] = Ye(r, Df), e[1] += t, [r, t] = Ye(r, Vf), e[1] += t, r = r.replace(/[*\s+>~]/g, " ").replace(/[#.]/g, " "), [r, t] = Ye(r, Lf), e[2] += t, e.join("");
}
var ir = 1e-8;
function Bu(n) {
  return Math.sqrt(Math.pow(n[0], 2) + Math.pow(n[1], 2));
}
function La(n, e) {
  return (n[0] * e[0] + n[1] * e[1]) / (Bu(n) * Bu(e));
}
function ju(n, e) {
  return (n[0] * e[1] < n[1] * e[0] ? -1 : 1) * Math.acos(La(n, e));
}
function Fu(n) {
  return n * n * n;
}
function Uu(n) {
  return 3 * n * n * (1 - n);
}
function Gu(n) {
  return 3 * n * (1 - n) * (1 - n);
}
function $u(n) {
  return (1 - n) * (1 - n) * (1 - n);
}
function zu(n) {
  return n * n;
}
function Hu(n) {
  return 2 * n * (1 - n);
}
function Wu(n) {
  return (1 - n) * (1 - n);
}
class D {
  constructor(e, r, t) {
    this.document = e, this.name = r, this.value = t, this.isNormalizedColor = !1;
  }
  static empty(e) {
    return new D(e, "EMPTY", "");
  }
  split() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : " ", {
      document: r,
      name: t
    } = this;
    return sr(this.getString()).trim().split(e).map((i) => new D(r, t, i));
  }
  hasValue(e) {
    var {
      value: r
    } = this;
    return r !== null && r !== "" && (e || r !== 0) && typeof r < "u";
  }
  isString(e) {
    var {
      value: r
    } = this, t = typeof r == "string";
    return !t || !e ? t : e.test(r);
  }
  isUrlDefinition() {
    return this.isString(/^url\(/);
  }
  isPixels() {
    if (!this.hasValue())
      return !1;
    var e = this.getString();
    switch (!0) {
      case e.endsWith("px"):
      case /^[0-9]+$/.test(e):
        return !0;
      default:
        return !1;
    }
  }
  setValue(e) {
    return this.value = e, this;
  }
  getValue(e) {
    return typeof e > "u" || this.hasValue() ? this.value : e;
  }
  getNumber(e) {
    if (!this.hasValue())
      return typeof e > "u" ? 0 : parseFloat(e);
    var {
      value: r
    } = this, t = parseFloat(r);
    return this.isString(/%$/) && (t /= 100), t;
  }
  getString(e) {
    return typeof e > "u" || this.hasValue() ? typeof this.value > "u" ? "" : String(this.value) : String(e);
  }
  getColor(e) {
    var r = this.getString(e);
    return this.isNormalizedColor || (this.isNormalizedColor = !0, r = If(r), this.value = r), r;
  }
  getDpi() {
    return 96;
  }
  getRem() {
    return this.document.rootEmSize;
  }
  getEm() {
    return this.document.emSize;
  }
  getUnits() {
    return this.getString().replace(/[0-9.-]/g, "");
  }
  getPixels(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (!this.hasValue())
      return 0;
    var [t, i] = typeof e == "boolean" ? [void 0, e] : [e], {
      viewPort: a
    } = this.document.screen;
    switch (!0) {
      case this.isString(/vmin$/):
        return this.getNumber() / 100 * Math.min(a.computeSize("x"), a.computeSize("y"));
      case this.isString(/vmax$/):
        return this.getNumber() / 100 * Math.max(a.computeSize("x"), a.computeSize("y"));
      case this.isString(/vw$/):
        return this.getNumber() / 100 * a.computeSize("x");
      case this.isString(/vh$/):
        return this.getNumber() / 100 * a.computeSize("y");
      case this.isString(/rem$/):
        return this.getNumber() * this.getRem();
      case this.isString(/em$/):
        return this.getNumber() * this.getEm();
      case this.isString(/ex$/):
        return this.getNumber() * this.getEm() / 2;
      case this.isString(/px$/):
        return this.getNumber();
      case this.isString(/pt$/):
        return this.getNumber() * this.getDpi() * (1 / 72);
      case this.isString(/pc$/):
        return this.getNumber() * 15;
      case this.isString(/cm$/):
        return this.getNumber() * this.getDpi() / 2.54;
      case this.isString(/mm$/):
        return this.getNumber() * this.getDpi() / 25.4;
      case this.isString(/in$/):
        return this.getNumber() * this.getDpi();
      case (this.isString(/%$/) && i):
        return this.getNumber() * this.getEm();
      case this.isString(/%$/):
        return this.getNumber() * a.computeSize(t);
      default: {
        var s = this.getNumber();
        return r && s < 1 ? s * a.computeSize(t) : s;
      }
    }
  }
  getMilliseconds() {
    return this.hasValue() ? this.isString(/ms$/) ? this.getNumber() : this.getNumber() * 1e3 : 0;
  }
  getRadians() {
    if (!this.hasValue())
      return 0;
    switch (!0) {
      case this.isString(/deg$/):
        return this.getNumber() * (Math.PI / 180);
      case this.isString(/grad$/):
        return this.getNumber() * (Math.PI / 200);
      case this.isString(/rad$/):
        return this.getNumber();
      default:
        return this.getNumber() * (Math.PI / 180);
    }
  }
  getDefinition() {
    var e = this.getString(), r = /#([^)'"]+)/.exec(e);
    return r && (r = r[1]), r || (r = e), this.document.definitions[r];
  }
  getFillStyleDefinition(e, r) {
    var t = this.getDefinition();
    if (!t)
      return null;
    if (typeof t.createGradient == "function")
      return t.createGradient(this.document.ctx, e, r);
    if (typeof t.createPattern == "function") {
      if (t.getHrefAttribute().hasValue()) {
        var i = t.getAttribute("patternTransform");
        t = t.getHrefAttribute().getDefinition(), i.hasValue() && t.getAttribute("patternTransform", !0).setValue(i.value);
      }
      return t.createPattern(this.document.ctx, e, r);
    }
    return null;
  }
  getTextBaseline() {
    return this.hasValue() ? D.textBaselineMapping[this.getString()] : null;
  }
  addOpacity(e) {
    for (var r = this.getColor(), t = r.length, i = 0, a = 0; a < t && (r[a] === "," && i++, i !== 3); a++)
      ;
    if (e.hasValue() && this.isString() && i !== 3) {
      var s = new Da(r);
      s.ok && (s.alpha = e.getNumber(), r = s.toRGBA());
    }
    return new D(this.document, this.name, r);
  }
}
D.textBaselineMapping = {
  baseline: "alphabetic",
  "before-edge": "top",
  "text-before-edge": "top",
  middle: "middle",
  central: "middle",
  "after-edge": "bottom",
  "text-after-edge": "bottom",
  ideographic: "ideographic",
  alphabetic: "alphabetic",
  hanging: "hanging",
  mathematical: "alphabetic"
};
class Bf {
  constructor() {
    this.viewPorts = [];
  }
  clear() {
    this.viewPorts = [];
  }
  setCurrent(e, r) {
    this.viewPorts.push({
      width: e,
      height: r
    });
  }
  removeCurrent() {
    this.viewPorts.pop();
  }
  getCurrent() {
    var {
      viewPorts: e
    } = this;
    return e[e.length - 1];
  }
  get width() {
    return this.getCurrent().width;
  }
  get height() {
    return this.getCurrent().height;
  }
  computeSize(e) {
    return typeof e == "number" ? e : e === "x" ? this.width : e === "y" ? this.height : Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2)) / Math.sqrt(2);
  }
}
class J {
  constructor(e, r) {
    this.x = e, this.y = r;
  }
  static parse(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, [t = r, i = r] = ge(e);
    return new J(t, i);
  }
  static parseScale(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, [t = r, i = t] = ge(e);
    return new J(t, i);
  }
  static parsePath(e) {
    for (var r = ge(e), t = r.length, i = [], a = 0; a < t; a += 2)
      i.push(new J(r[a], r[a + 1]));
    return i;
  }
  angleTo(e) {
    return Math.atan2(e.y - this.y, e.x - this.x);
  }
  applyTransform(e) {
    var {
      x: r,
      y: t
    } = this, i = r * e[0] + t * e[2] + e[4], a = r * e[1] + t * e[3] + e[5];
    this.x = i, this.y = a;
  }
}
class jf {
  constructor(e) {
    this.screen = e, this.working = !1, this.events = [], this.eventElements = [], this.onClick = this.onClick.bind(this), this.onMouseMove = this.onMouseMove.bind(this);
  }
  isWorking() {
    return this.working;
  }
  start() {
    if (!this.working) {
      var {
        screen: e,
        onClick: r,
        onMouseMove: t
      } = this, i = e.ctx.canvas;
      i.onclick = r, i.onmousemove = t, this.working = !0;
    }
  }
  stop() {
    if (this.working) {
      var e = this.screen.ctx.canvas;
      this.working = !1, e.onclick = null, e.onmousemove = null;
    }
  }
  hasEvents() {
    return this.working && this.events.length > 0;
  }
  runEvents() {
    if (this.working) {
      var {
        screen: e,
        events: r,
        eventElements: t
      } = this, {
        style: i
      } = e.ctx.canvas;
      i && (i.cursor = ""), r.forEach((a, s) => {
        for (var {
          run: o
        } = a, u = t[s]; u; )
          o(u), u = u.parent;
      }), this.events = [], this.eventElements = [];
    }
  }
  checkPath(e, r) {
    if (!(!this.working || !r)) {
      var {
        events: t,
        eventElements: i
      } = this;
      t.forEach((a, s) => {
        var {
          x: o,
          y: u
        } = a;
        !i[s] && r.isPointInPath && r.isPointInPath(o, u) && (i[s] = e);
      });
    }
  }
  checkBoundingBox(e, r) {
    if (!(!this.working || !r)) {
      var {
        events: t,
        eventElements: i
      } = this;
      t.forEach((a, s) => {
        var {
          x: o,
          y: u
        } = a;
        !i[s] && r.isPointInBox(o, u) && (i[s] = e);
      });
    }
  }
  mapXY(e, r) {
    for (var {
      window: t,
      ctx: i
    } = this.screen, a = new J(e, r), s = i.canvas; s; )
      a.x -= s.offsetLeft, a.y -= s.offsetTop, s = s.offsetParent;
    return t.scrollX && (a.x += t.scrollX), t.scrollY && (a.y += t.scrollY), a;
  }
  onClick(e) {
    var {
      x: r,
      y: t
    } = this.mapXY(e.clientX, e.clientY);
    this.events.push({
      type: "onclick",
      x: r,
      y: t,
      run(i) {
        i.onClick && i.onClick();
      }
    });
  }
  onMouseMove(e) {
    var {
      x: r,
      y: t
    } = this.mapXY(e.clientX, e.clientY);
    this.events.push({
      type: "onmousemove",
      x: r,
      y: t,
      run(i) {
        i.onMouseMove && i.onMouseMove();
      }
    });
  }
}
var Ml = typeof window < "u" ? window : null, ql = typeof fetch < "u" ? fetch.bind(void 0) : null;
class Ur {
  constructor(e) {
    var {
      fetch: r = ql,
      window: t = Ml
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.ctx = e, this.FRAMERATE = 30, this.MAX_VIRTUAL_PIXELS = 3e4, this.CLIENT_WIDTH = 800, this.CLIENT_HEIGHT = 600, this.viewPort = new Bf(), this.mouse = new jf(this), this.animations = [], this.waits = [], this.frameDuration = 0, this.isReadyLock = !1, this.isFirstRender = !0, this.intervalId = null, this.window = t, this.fetch = r;
  }
  wait(e) {
    this.waits.push(e);
  }
  ready() {
    return this.readyPromise ? this.readyPromise : Promise.resolve();
  }
  isReady() {
    if (this.isReadyLock)
      return !0;
    var e = this.waits.every((r) => r());
    return e && (this.waits = [], this.resolveReady && this.resolveReady()), this.isReadyLock = e, e;
  }
  setDefaults(e) {
    e.strokeStyle = "rgba(0,0,0,0)", e.lineCap = "butt", e.lineJoin = "miter", e.miterLimit = 4;
  }
  setViewBox(e) {
    var {
      document: r,
      ctx: t,
      aspectRatio: i,
      width: a,
      desiredWidth: s,
      height: o,
      desiredHeight: u,
      minX: l = 0,
      minY: h = 0,
      refX: c,
      refY: v,
      clip: f = !1,
      clipX: g = 0,
      clipY: d = 0
    } = e, p = sr(i).replace(/^defer\s/, ""), [y, m] = p.split(" "), b = y || "xMidYMid", x = m || "meet", S = a / s, E = o / u, T = Math.min(S, E), _ = Math.max(S, E), V = s, P = u;
    x === "meet" && (V *= T, P *= T), x === "slice" && (V *= _, P *= _);
    var M = new D(r, "refX", c), w = new D(r, "refY", v), k = M.hasValue() && w.hasValue();
    if (k && t.translate(-T * M.getPixels("x"), -T * w.getPixels("y")), f) {
      var R = T * g, A = T * d;
      t.beginPath(), t.moveTo(R, A), t.lineTo(a, A), t.lineTo(a, o), t.lineTo(R, o), t.closePath(), t.clip();
    }
    if (!k) {
      var U = x === "meet" && T === E, I = x === "slice" && _ === E, B = x === "meet" && T === S, N = x === "slice" && _ === S;
      b.startsWith("xMid") && (U || I) && t.translate(a / 2 - V / 2, 0), b.endsWith("YMid") && (B || N) && t.translate(0, o / 2 - P / 2), b.startsWith("xMax") && (U || I) && t.translate(a - V, 0), b.endsWith("YMax") && (B || N) && t.translate(0, o - P);
    }
    switch (!0) {
      case b === "none":
        t.scale(S, E);
        break;
      case x === "meet":
        t.scale(T, T);
        break;
      case x === "slice":
        t.scale(_, _);
        break;
    }
    t.translate(-l, -h);
  }
  start(e) {
    var {
      enableRedraw: r = !1,
      ignoreMouse: t = !1,
      ignoreAnimation: i = !1,
      ignoreDimensions: a = !1,
      ignoreClear: s = !1,
      forceRedraw: o,
      scaleWidth: u,
      scaleHeight: l,
      offsetX: h,
      offsetY: c
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      FRAMERATE: v,
      mouse: f
    } = this, g = 1e3 / v;
    if (this.frameDuration = g, this.readyPromise = new Promise((b) => {
      this.resolveReady = b;
    }), this.isReady() && this.render(e, a, s, u, l, h, c), !!r) {
      var d = Date.now(), p = d, y = 0, m = () => {
        d = Date.now(), y = d - p, y >= g && (p = d - y % g, this.shouldUpdate(i, o) && (this.render(e, a, s, u, l, h, c), f.runEvents())), this.intervalId = Ea(m);
      };
      t || f.start(), this.intervalId = Ea(m);
    }
  }
  stop() {
    this.intervalId && (Ea.cancel(this.intervalId), this.intervalId = null), this.mouse.stop();
  }
  shouldUpdate(e, r) {
    if (!e) {
      var {
        frameDuration: t
      } = this, i = this.animations.reduce((a, s) => s.update(t) || a, !1);
      if (i)
        return !0;
    }
    return !!(typeof r == "function" && r() || !this.isReadyLock && this.isReady() || this.mouse.hasEvents());
  }
  render(e, r, t, i, a, s, o) {
    var {
      CLIENT_WIDTH: u,
      CLIENT_HEIGHT: l,
      viewPort: h,
      ctx: c,
      isFirstRender: v
    } = this, f = c.canvas;
    h.clear(), f.width && f.height ? h.setCurrent(f.width, f.height) : h.setCurrent(u, l);
    var g = e.getStyle("width"), d = e.getStyle("height");
    !r && (v || typeof i != "number" && typeof a != "number") && (g.hasValue() && (f.width = g.getPixels("x"), f.style && (f.style.width = "".concat(f.width, "px"))), d.hasValue() && (f.height = d.getPixels("y"), f.style && (f.style.height = "".concat(f.height, "px"))));
    var p = f.clientWidth || f.width, y = f.clientHeight || f.height;
    if (r && g.hasValue() && d.hasValue() && (p = g.getPixels("x"), y = d.getPixels("y")), h.setCurrent(p, y), typeof s == "number" && e.getAttribute("x", !0).setValue(s), typeof o == "number" && e.getAttribute("y", !0).setValue(o), typeof i == "number" || typeof a == "number") {
      var m = ge(e.getAttribute("viewBox").getString()), b = 0, x = 0;
      if (typeof i == "number") {
        var S = e.getStyle("width");
        S.hasValue() ? b = S.getPixels("x") / i : isNaN(m[2]) || (b = m[2] / i);
      }
      if (typeof a == "number") {
        var E = e.getStyle("height");
        E.hasValue() ? x = E.getPixels("y") / a : isNaN(m[3]) || (x = m[3] / a);
      }
      b || (b = x), x || (x = b), e.getAttribute("width", !0).setValue(i), e.getAttribute("height", !0).setValue(a);
      var T = e.getStyle("transform", !0, !0);
      T.setValue("".concat(T.getString(), " scale(").concat(1 / b, ", ").concat(1 / x, ")"));
    }
    t || c.clearRect(0, 0, p, y), e.render(c), v && (this.isFirstRender = !1);
  }
}
Ur.defaultWindow = Ml;
Ur.defaultFetch = ql;
var {
  defaultFetch: Ff
} = Ur, Uf = typeof DOMParser < "u" ? DOMParser : null;
class _a {
  constructor() {
    var {
      fetch: e = Ff,
      DOMParser: r = Uf
    } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.fetch = e, this.DOMParser = r;
  }
  parse(e) {
    var r = this;
    return Be(function* () {
      return e.startsWith("<") ? r.parseFromString(e) : r.load(e);
    })();
  }
  parseFromString(e) {
    var r = new this.DOMParser();
    try {
      return this.checkDocument(r.parseFromString(e, "image/svg+xml"));
    } catch {
      return this.checkDocument(r.parseFromString(e, "text/xml"));
    }
  }
  checkDocument(e) {
    var r = e.getElementsByTagName("parsererror")[0];
    if (r)
      throw new Error(r.textContent);
    return e;
  }
  load(e) {
    var r = this;
    return Be(function* () {
      var t = yield r.fetch(e), i = yield t.text();
      return r.parseFromString(i);
    })();
  }
}
class Gf {
  constructor(e, r) {
    this.type = "translate", this.point = null, this.point = J.parse(r);
  }
  apply(e) {
    var {
      x: r,
      y: t
    } = this.point;
    e.translate(r || 0, t || 0);
  }
  unapply(e) {
    var {
      x: r,
      y: t
    } = this.point;
    e.translate(-1 * r || 0, -1 * t || 0);
  }
  applyToPoint(e) {
    var {
      x: r,
      y: t
    } = this.point;
    e.applyTransform([1, 0, 0, 1, r || 0, t || 0]);
  }
}
class $f {
  constructor(e, r, t) {
    this.type = "rotate", this.angle = null, this.originX = null, this.originY = null, this.cx = 0, this.cy = 0;
    var i = ge(r);
    this.angle = new D(e, "angle", i[0]), this.originX = t[0], this.originY = t[1], this.cx = i[1] || 0, this.cy = i[2] || 0;
  }
  apply(e) {
    var {
      cx: r,
      cy: t,
      originX: i,
      originY: a,
      angle: s
    } = this, o = r + i.getPixels("x"), u = t + a.getPixels("y");
    e.translate(o, u), e.rotate(s.getRadians()), e.translate(-o, -u);
  }
  unapply(e) {
    var {
      cx: r,
      cy: t,
      originX: i,
      originY: a,
      angle: s
    } = this, o = r + i.getPixels("x"), u = t + a.getPixels("y");
    e.translate(o, u), e.rotate(-1 * s.getRadians()), e.translate(-o, -u);
  }
  applyToPoint(e) {
    var {
      cx: r,
      cy: t,
      angle: i
    } = this, a = i.getRadians();
    e.applyTransform([
      1,
      0,
      0,
      1,
      r || 0,
      t || 0
      // this.p.y
    ]), e.applyTransform([Math.cos(a), Math.sin(a), -Math.sin(a), Math.cos(a), 0, 0]), e.applyTransform([
      1,
      0,
      0,
      1,
      -r || 0,
      -t || 0
      // -this.p.y
    ]);
  }
}
class zf {
  constructor(e, r, t) {
    this.type = "scale", this.scale = null, this.originX = null, this.originY = null;
    var i = J.parseScale(r);
    (i.x === 0 || i.y === 0) && (i.x = ir, i.y = ir), this.scale = i, this.originX = t[0], this.originY = t[1];
  }
  apply(e) {
    var {
      scale: {
        x: r,
        y: t
      },
      originX: i,
      originY: a
    } = this, s = i.getPixels("x"), o = a.getPixels("y");
    e.translate(s, o), e.scale(r, t || r), e.translate(-s, -o);
  }
  unapply(e) {
    var {
      scale: {
        x: r,
        y: t
      },
      originX: i,
      originY: a
    } = this, s = i.getPixels("x"), o = a.getPixels("y");
    e.translate(s, o), e.scale(1 / r, 1 / t || r), e.translate(-s, -o);
  }
  applyToPoint(e) {
    var {
      x: r,
      y: t
    } = this.scale;
    e.applyTransform([r || 0, 0, 0, t || 0, 0, 0]);
  }
}
class Dl {
  constructor(e, r, t) {
    this.type = "matrix", this.matrix = [], this.originX = null, this.originY = null, this.matrix = ge(r), this.originX = t[0], this.originY = t[1];
  }
  apply(e) {
    var {
      originX: r,
      originY: t,
      matrix: i
    } = this, a = r.getPixels("x"), s = t.getPixels("y");
    e.translate(a, s), e.transform(i[0], i[1], i[2], i[3], i[4], i[5]), e.translate(-a, -s);
  }
  unapply(e) {
    var {
      originX: r,
      originY: t,
      matrix: i
    } = this, a = i[0], s = i[2], o = i[4], u = i[1], l = i[3], h = i[5], c = 0, v = 0, f = 1, g = 1 / (a * (l * f - h * v) - s * (u * f - h * c) + o * (u * v - l * c)), d = r.getPixels("x"), p = t.getPixels("y");
    e.translate(d, p), e.transform(g * (l * f - h * v), g * (h * c - u * f), g * (o * v - s * f), g * (a * f - o * c), g * (s * h - o * l), g * (o * u - a * h)), e.translate(-d, -p);
  }
  applyToPoint(e) {
    e.applyTransform(this.matrix);
  }
}
class Vl extends Dl {
  constructor(e, r, t) {
    super(e, r, t), this.type = "skew", this.angle = null, this.angle = new D(e, "angle", r);
  }
}
class Hf extends Vl {
  constructor(e, r, t) {
    super(e, r, t), this.type = "skewX", this.matrix = [1, 0, Math.tan(this.angle.getRadians()), 1, 0, 0];
  }
}
class Wf extends Vl {
  constructor(e, r, t) {
    super(e, r, t), this.type = "skewY", this.matrix = [1, Math.tan(this.angle.getRadians()), 0, 1, 0, 0];
  }
}
function Yf(n) {
  return sr(n).trim().replace(/\)([a-zA-Z])/g, ") $1").replace(/\)(\s?,\s?)/g, ") ").split(/\s(?=[a-z])/);
}
function Xf(n) {
  var [e, r] = n.split("(");
  return [e.trim(), r.trim().replace(")", "")];
}
class Qe {
  constructor(e, r, t) {
    this.document = e, this.transforms = [];
    var i = Yf(r);
    i.forEach((a) => {
      if (a !== "none") {
        var [s, o] = Xf(a), u = Qe.transformTypes[s];
        typeof u < "u" && this.transforms.push(new u(this.document, o, t));
      }
    });
  }
  static fromElement(e, r) {
    var t = r.getStyle("transform", !1, !0), [i, a = i] = r.getStyle("transform-origin", !1, !0).split(), s = [i, a];
    return t.hasValue() ? new Qe(e, t.getString(), s) : null;
  }
  apply(e) {
    for (var {
      transforms: r
    } = this, t = r.length, i = 0; i < t; i++)
      r[i].apply(e);
  }
  unapply(e) {
    for (var {
      transforms: r
    } = this, t = r.length, i = t - 1; i >= 0; i--)
      r[i].unapply(e);
  }
  // TODO: applyToPoint unused ... remove?
  applyToPoint(e) {
    for (var {
      transforms: r
    } = this, t = r.length, i = 0; i < t; i++)
      r[i].applyToPoint(e);
  }
}
Qe.transformTypes = {
  translate: Gf,
  rotate: $f,
  scale: zf,
  matrix: Dl,
  skewX: Hf,
  skewY: Wf
};
class K {
  constructor(e, r) {
    var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    if (this.document = e, this.node = r, this.captureTextNodes = t, this.attributes = {}, this.styles = {}, this.stylesSpecificity = {}, this.animationFrozen = !1, this.animationFrozenValue = "", this.parent = null, this.children = [], !(!r || r.nodeType !== 1)) {
      if (Array.from(r.attributes).forEach((o) => {
        var u = Af(o.nodeName);
        this.attributes[u] = new D(e, u, o.value);
      }), this.addStylesFromStyleDefinition(), this.getAttribute("style").hasValue()) {
        var i = this.getAttribute("style").getString().split(";").map((o) => o.trim());
        i.forEach((o) => {
          if (o) {
            var [u, l] = o.split(":").map((h) => h.trim());
            this.styles[u] = new D(e, u, l);
          }
        });
      }
      var {
        definitions: a
      } = e, s = this.getAttribute("id");
      s.hasValue() && (a[s.getString()] || (a[s.getString()] = this)), Array.from(r.childNodes).forEach((o) => {
        if (o.nodeType === 1)
          this.addChild(o);
        else if (t && (o.nodeType === 3 || o.nodeType === 4)) {
          var u = e.createTextNode(o);
          u.getText().length > 0 && this.addChild(u);
        }
      });
    }
  }
  getAttribute(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, t = this.attributes[e];
    if (!t && r) {
      var i = new D(this.document, e, "");
      return this.attributes[e] = i, i;
    }
    return t || D.empty(this.document);
  }
  getHrefAttribute() {
    for (var e in this.attributes)
      if (e === "href" || e.endsWith(":href"))
        return this.attributes[e];
    return D.empty(this.document);
  }
  getStyle(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, i = this.styles[e];
    if (i)
      return i;
    var a = this.getAttribute(e);
    if (a != null && a.hasValue())
      return this.styles[e] = a, a;
    if (!t) {
      var {
        parent: s
      } = this;
      if (s) {
        var o = s.getStyle(e);
        if (o != null && o.hasValue())
          return o;
      }
    }
    if (r) {
      var u = new D(this.document, e, "");
      return this.styles[e] = u, u;
    }
    return i || D.empty(this.document);
  }
  render(e) {
    if (!(this.getStyle("display").getString() === "none" || this.getStyle("visibility").getString() === "hidden")) {
      if (e.save(), this.getStyle("mask").hasValue()) {
        var r = this.getStyle("mask").getDefinition();
        r && (this.applyEffects(e), r.apply(e, this));
      } else if (this.getStyle("filter").getValue("none") !== "none") {
        var t = this.getStyle("filter").getDefinition();
        t && (this.applyEffects(e), t.apply(e, this));
      } else
        this.setContext(e), this.renderChildren(e), this.clearContext(e);
      e.restore();
    }
  }
  setContext(e) {
  }
  applyEffects(e) {
    var r = Qe.fromElement(this.document, this);
    r && r.apply(e);
    var t = this.getStyle("clip-path", !1, !0);
    if (t.hasValue()) {
      var i = t.getDefinition();
      i && i.apply(e);
    }
  }
  clearContext(e) {
  }
  renderChildren(e) {
    this.children.forEach((r) => {
      r.render(e);
    });
  }
  addChild(e) {
    var r = e instanceof K ? e : this.document.createElement(e);
    r.parent = this, K.ignoreChildTypes.includes(r.type) || this.children.push(r);
  }
  matchesSelector(e) {
    var r, {
      node: t
    } = this;
    if (typeof t.matches == "function")
      return t.matches(e);
    var i = (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "class");
    return !i || i === "" ? !1 : i.split(" ").some((a) => ".".concat(a) === e);
  }
  addStylesFromStyleDefinition() {
    var {
      styles: e,
      stylesSpecificity: r
    } = this.document;
    for (var t in e)
      if (!t.startsWith("@") && this.matchesSelector(t)) {
        var i = e[t], a = r[t];
        if (i)
          for (var s in i) {
            var o = this.stylesSpecificity[s];
            typeof o > "u" && (o = "000"), a >= o && (this.styles[s] = i[s], this.stylesSpecificity[s] = a);
          }
      }
  }
  removeStyles(e, r) {
    var t = r.reduce((i, a) => {
      var s = e.getStyle(a);
      if (!s.hasValue())
        return i;
      var o = s.getString();
      return s.setValue(""), [...i, [a, o]];
    }, []);
    return t;
  }
  restoreStyles(e, r) {
    r.forEach((t) => {
      var [i, a] = t;
      e.getStyle(i, !0).setValue(a);
    });
  }
  isFirstChild() {
    var e;
    return ((e = this.parent) === null || e === void 0 ? void 0 : e.children.indexOf(this)) === 0;
  }
}
K.ignoreChildTypes = ["title"];
class Kf extends K {
  constructor(e, r, t) {
    super(e, r, t);
  }
}
function Qf(n) {
  var e = n.trim();
  return /^('|")/.test(e) ? e : '"'.concat(e, '"');
}
function Zf(n) {
  return typeof process > "u" ? n : n.trim().split(",").map(Qf).join(",");
}
function Jf(n) {
  if (!n)
    return "";
  var e = n.trim().toLowerCase();
  switch (e) {
    case "normal":
    case "italic":
    case "oblique":
    case "inherit":
    case "initial":
    case "unset":
      return e;
    default:
      return /^oblique\s+(-|)\d+deg$/.test(e) ? e : "";
  }
}
function ec(n) {
  if (!n)
    return "";
  var e = n.trim().toLowerCase();
  switch (e) {
    case "normal":
    case "bold":
    case "lighter":
    case "bolder":
    case "inherit":
    case "initial":
    case "unset":
      return e;
    default:
      return /^[\d.]+$/.test(e) ? e : "";
  }
}
class oe {
  constructor(e, r, t, i, a, s) {
    var o = s ? typeof s == "string" ? oe.parse(s) : s : {};
    this.fontFamily = a || o.fontFamily, this.fontSize = i || o.fontSize, this.fontStyle = e || o.fontStyle, this.fontWeight = t || o.fontWeight, this.fontVariant = r || o.fontVariant;
  }
  static parse() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = arguments.length > 1 ? arguments[1] : void 0, t = "", i = "", a = "", s = "", o = "", u = sr(e).trim().split(" "), l = {
      fontSize: !1,
      fontStyle: !1,
      fontWeight: !1,
      fontVariant: !1
    };
    return u.forEach((h) => {
      switch (!0) {
        case (!l.fontStyle && oe.styles.includes(h)):
          h !== "inherit" && (t = h), l.fontStyle = !0;
          break;
        case (!l.fontVariant && oe.variants.includes(h)):
          h !== "inherit" && (i = h), l.fontStyle = !0, l.fontVariant = !0;
          break;
        case (!l.fontWeight && oe.weights.includes(h)):
          h !== "inherit" && (a = h), l.fontStyle = !0, l.fontVariant = !0, l.fontWeight = !0;
          break;
        case !l.fontSize:
          h !== "inherit" && ([s] = h.split("/")), l.fontStyle = !0, l.fontVariant = !0, l.fontWeight = !0, l.fontSize = !0;
          break;
        default:
          h !== "inherit" && (o += h);
      }
    }), new oe(t, i, a, s, o, r);
  }
  toString() {
    return [
      Jf(this.fontStyle),
      this.fontVariant,
      ec(this.fontWeight),
      this.fontSize,
      // Wrap fontFamily only on nodejs and only for canvas.ctx
      Zf(this.fontFamily)
    ].join(" ").trim();
  }
}
oe.styles = "normal|italic|oblique|inherit";
oe.variants = "normal|small-caps|inherit";
oe.weights = "normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit";
class Pe {
  constructor() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Number.NaN, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.NaN, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Number.NaN, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Number.NaN;
    this.x1 = e, this.y1 = r, this.x2 = t, this.y2 = i, this.addPoint(e, r), this.addPoint(t, i);
  }
  get x() {
    return this.x1;
  }
  get y() {
    return this.y1;
  }
  get width() {
    return this.x2 - this.x1;
  }
  get height() {
    return this.y2 - this.y1;
  }
  addPoint(e, r) {
    typeof e < "u" && ((isNaN(this.x1) || isNaN(this.x2)) && (this.x1 = e, this.x2 = e), e < this.x1 && (this.x1 = e), e > this.x2 && (this.x2 = e)), typeof r < "u" && ((isNaN(this.y1) || isNaN(this.y2)) && (this.y1 = r, this.y2 = r), r < this.y1 && (this.y1 = r), r > this.y2 && (this.y2 = r));
  }
  addX(e) {
    this.addPoint(e, null);
  }
  addY(e) {
    this.addPoint(null, e);
  }
  addBoundingBox(e) {
    if (e) {
      var {
        x1: r,
        y1: t,
        x2: i,
        y2: a
      } = e;
      this.addPoint(r, t), this.addPoint(i, a);
    }
  }
  sumCubic(e, r, t, i, a) {
    return Math.pow(1 - e, 3) * r + 3 * Math.pow(1 - e, 2) * e * t + 3 * (1 - e) * Math.pow(e, 2) * i + Math.pow(e, 3) * a;
  }
  bezierCurveAdd(e, r, t, i, a) {
    var s = 6 * r - 12 * t + 6 * i, o = -3 * r + 9 * t - 9 * i + 3 * a, u = 3 * t - 3 * r;
    if (o === 0) {
      if (s === 0)
        return;
      var l = -u / s;
      0 < l && l < 1 && (e ? this.addX(this.sumCubic(l, r, t, i, a)) : this.addY(this.sumCubic(l, r, t, i, a)));
      return;
    }
    var h = Math.pow(s, 2) - 4 * u * o;
    if (!(h < 0)) {
      var c = (-s + Math.sqrt(h)) / (2 * o);
      0 < c && c < 1 && (e ? this.addX(this.sumCubic(c, r, t, i, a)) : this.addY(this.sumCubic(c, r, t, i, a)));
      var v = (-s - Math.sqrt(h)) / (2 * o);
      0 < v && v < 1 && (e ? this.addX(this.sumCubic(v, r, t, i, a)) : this.addY(this.sumCubic(v, r, t, i, a)));
    }
  }
  // from http://blog.hackers-cafe.net/2009/06/how-to-calculate-bezier-curves-bounding.html
  addBezierCurve(e, r, t, i, a, s, o, u) {
    this.addPoint(e, r), this.addPoint(o, u), this.bezierCurveAdd(!0, e, t, a, o), this.bezierCurveAdd(!1, r, i, s, u);
  }
  addQuadraticCurve(e, r, t, i, a, s) {
    var o = e + 0.6666666666666666 * (t - e), u = r + 2 / 3 * (i - r), l = o + 1 / 3 * (a - e), h = u + 1 / 3 * (s - r);
    this.addBezierCurve(e, r, o, l, u, h, a, s);
  }
  isPointInBox(e, r) {
    var {
      x1: t,
      y1: i,
      x2: a,
      y2: s
    } = this;
    return t <= e && e <= a && i <= r && r <= s;
  }
}
class F extends O {
  constructor(e) {
    super(e.replace(/([+\-.])\s+/gm, "$1").replace(/[^MmZzLlHhVvCcSsQqTtAae\d\s.,+-].*/g, "")), this.control = null, this.start = null, this.current = null, this.command = null, this.commands = this.commands, this.i = -1, this.previousCommand = null, this.points = [], this.angles = [];
  }
  reset() {
    this.i = -1, this.command = null, this.previousCommand = null, this.start = new J(0, 0), this.control = new J(0, 0), this.current = new J(0, 0), this.points = [], this.angles = [];
  }
  isEnd() {
    var {
      i: e,
      commands: r
    } = this;
    return e >= r.length - 1;
  }
  next() {
    var e = this.commands[++this.i];
    return this.previousCommand = this.command, this.command = e, e;
  }
  getPoint() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "x", r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "y", t = new J(this.command[e], this.command[r]);
    return this.makeAbsolute(t);
  }
  getAsControlPoint(e, r) {
    var t = this.getPoint(e, r);
    return this.control = t, t;
  }
  getAsCurrentPoint(e, r) {
    var t = this.getPoint(e, r);
    return this.current = t, t;
  }
  getReflectedControlPoint() {
    var e = this.previousCommand.type;
    if (e !== O.CURVE_TO && e !== O.SMOOTH_CURVE_TO && e !== O.QUAD_TO && e !== O.SMOOTH_QUAD_TO)
      return this.current;
    var {
      current: {
        x: r,
        y: t
      },
      control: {
        x: i,
        y: a
      }
    } = this, s = new J(2 * r - i, 2 * t - a);
    return s;
  }
  makeAbsolute(e) {
    if (this.command.relative) {
      var {
        x: r,
        y: t
      } = this.current;
      e.x += r, e.y += t;
    }
    return e;
  }
  addMarker(e, r, t) {
    var {
      points: i,
      angles: a
    } = this;
    t && a.length > 0 && !a[a.length - 1] && (a[a.length - 1] = i[i.length - 1].angleTo(t)), this.addMarkerAngle(e, r ? r.angleTo(e) : null);
  }
  addMarkerAngle(e, r) {
    this.points.push(e), this.angles.push(r);
  }
  getMarkerPoints() {
    return this.points;
  }
  getMarkerAngles() {
    for (var {
      angles: e
    } = this, r = e.length, t = 0; t < r; t++)
      if (!e[t]) {
        for (var i = t + 1; i < r; i++)
          if (e[i]) {
            e[t] = e[i];
            break;
          }
      }
    return e;
  }
}
class tr extends K {
  constructor() {
    super(...arguments), this.modifiedEmSizeStack = !1;
  }
  calculateOpacity() {
    for (var e = 1, r = this; r; ) {
      var t = r.getStyle("opacity", !1, !0);
      t.hasValue(!0) && (e *= t.getNumber()), r = r.parent;
    }
    return e;
  }
  setContext(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (!r) {
      var t = this.getStyle("fill"), i = this.getStyle("fill-opacity"), a = this.getStyle("stroke"), s = this.getStyle("stroke-opacity");
      if (t.isUrlDefinition()) {
        var o = t.getFillStyleDefinition(this, i);
        o && (e.fillStyle = o);
      } else if (t.hasValue()) {
        t.getString() === "currentColor" && t.setValue(this.getStyle("color").getColor());
        var u = t.getColor();
        u !== "inherit" && (e.fillStyle = u === "none" ? "rgba(0,0,0,0)" : u);
      }
      if (i.hasValue()) {
        var l = new D(this.document, "fill", e.fillStyle).addOpacity(i).getColor();
        e.fillStyle = l;
      }
      if (a.isUrlDefinition()) {
        var h = a.getFillStyleDefinition(this, s);
        h && (e.strokeStyle = h);
      } else if (a.hasValue()) {
        a.getString() === "currentColor" && a.setValue(this.getStyle("color").getColor());
        var c = a.getString();
        c !== "inherit" && (e.strokeStyle = c === "none" ? "rgba(0,0,0,0)" : c);
      }
      if (s.hasValue()) {
        var v = new D(this.document, "stroke", e.strokeStyle).addOpacity(s).getString();
        e.strokeStyle = v;
      }
      var f = this.getStyle("stroke-width");
      if (f.hasValue()) {
        var g = f.getPixels();
        e.lineWidth = g || ir;
      }
      var d = this.getStyle("stroke-linecap"), p = this.getStyle("stroke-linejoin"), y = this.getStyle("stroke-miterlimit"), m = this.getStyle("stroke-dasharray"), b = this.getStyle("stroke-dashoffset");
      if (d.hasValue() && (e.lineCap = d.getString()), p.hasValue() && (e.lineJoin = p.getString()), y.hasValue() && (e.miterLimit = y.getNumber()), m.hasValue() && m.getString() !== "none") {
        var x = ge(m.getString());
        typeof e.setLineDash < "u" ? e.setLineDash(x) : typeof e.webkitLineDash < "u" ? e.webkitLineDash = x : typeof e.mozDash < "u" && !(x.length === 1 && x[0] === 0) && (e.mozDash = x);
        var S = b.getPixels();
        typeof e.lineDashOffset < "u" ? e.lineDashOffset = S : typeof e.webkitLineDashOffset < "u" ? e.webkitLineDashOffset = S : typeof e.mozDashOffset < "u" && (e.mozDashOffset = S);
      }
    }
    if (this.modifiedEmSizeStack = !1, typeof e.font < "u") {
      var E = this.getStyle("font"), T = this.getStyle("font-style"), _ = this.getStyle("font-variant"), V = this.getStyle("font-weight"), P = this.getStyle("font-size"), M = this.getStyle("font-family"), w = new oe(T.getString(), _.getString(), V.getString(), P.hasValue() ? "".concat(P.getPixels(!0), "px") : "", M.getString(), oe.parse(E.getString(), e.font));
      T.setValue(w.fontStyle), _.setValue(w.fontVariant), V.setValue(w.fontWeight), P.setValue(w.fontSize), M.setValue(w.fontFamily), e.font = w.toString(), P.isPixels() && (this.document.emSize = P.getPixels(), this.modifiedEmSizeStack = !0);
    }
    r || (this.applyEffects(e), e.globalAlpha = this.calculateOpacity());
  }
  clearContext(e) {
    super.clearContext(e), this.modifiedEmSizeStack && this.document.popEmSize();
  }
}
class Y extends tr {
  constructor(e, r, t) {
    super(e, r, t), this.type = "path", this.pathParser = null, this.pathParser = new F(this.getAttribute("d").getString());
  }
  path(e) {
    var {
      pathParser: r
    } = this, t = new Pe();
    for (r.reset(), e && e.beginPath(); !r.isEnd(); )
      switch (r.next().type) {
        case F.MOVE_TO:
          this.pathM(e, t);
          break;
        case F.LINE_TO:
          this.pathL(e, t);
          break;
        case F.HORIZ_LINE_TO:
          this.pathH(e, t);
          break;
        case F.VERT_LINE_TO:
          this.pathV(e, t);
          break;
        case F.CURVE_TO:
          this.pathC(e, t);
          break;
        case F.SMOOTH_CURVE_TO:
          this.pathS(e, t);
          break;
        case F.QUAD_TO:
          this.pathQ(e, t);
          break;
        case F.SMOOTH_QUAD_TO:
          this.pathT(e, t);
          break;
        case F.ARC:
          this.pathA(e, t);
          break;
        case F.CLOSE_PATH:
          this.pathZ(e, t);
          break;
      }
    return t;
  }
  getBoundingBox(e) {
    return this.path();
  }
  getMarkers() {
    var {
      pathParser: e
    } = this, r = e.getMarkerPoints(), t = e.getMarkerAngles(), i = r.map((a, s) => [a, t[s]]);
    return i;
  }
  renderChildren(e) {
    this.path(e), this.document.screen.mouse.checkPath(this, e);
    var r = this.getStyle("fill-rule");
    e.fillStyle !== "" && (r.getString("inherit") !== "inherit" ? e.fill(r.getString()) : e.fill()), e.strokeStyle !== "" && (this.getAttribute("vector-effect").getString() === "non-scaling-stroke" ? (e.save(), e.setTransform(1, 0, 0, 1, 0, 0), e.stroke(), e.restore()) : e.stroke());
    var t = this.getMarkers();
    if (t) {
      var i = t.length - 1, a = this.getStyle("marker-start"), s = this.getStyle("marker-mid"), o = this.getStyle("marker-end");
      if (a.isUrlDefinition()) {
        var u = a.getDefinition(), [l, h] = t[0];
        u.render(e, l, h);
      }
      if (s.isUrlDefinition())
        for (var c = s.getDefinition(), v = 1; v < i; v++) {
          var [f, g] = t[v];
          c.render(e, f, g);
        }
      if (o.isUrlDefinition()) {
        var d = o.getDefinition(), [p, y] = t[i];
        d.render(e, p, y);
      }
    }
  }
  static pathM(e) {
    var r = e.getAsCurrentPoint();
    return e.start = e.current, {
      point: r
    };
  }
  pathM(e, r) {
    var {
      pathParser: t
    } = this, {
      point: i
    } = Y.pathM(t), {
      x: a,
      y: s
    } = i;
    t.addMarker(i), r.addPoint(a, s), e && e.moveTo(a, s);
  }
  static pathL(e) {
    var {
      current: r
    } = e, t = e.getAsCurrentPoint();
    return {
      current: r,
      point: t
    };
  }
  pathL(e, r) {
    var {
      pathParser: t
    } = this, {
      current: i,
      point: a
    } = Y.pathL(t), {
      x: s,
      y: o
    } = a;
    t.addMarker(a, i), r.addPoint(s, o), e && e.lineTo(s, o);
  }
  static pathH(e) {
    var {
      current: r,
      command: t
    } = e, i = new J((t.relative ? r.x : 0) + t.x, r.y);
    return e.current = i, {
      current: r,
      point: i
    };
  }
  pathH(e, r) {
    var {
      pathParser: t
    } = this, {
      current: i,
      point: a
    } = Y.pathH(t), {
      x: s,
      y: o
    } = a;
    t.addMarker(a, i), r.addPoint(s, o), e && e.lineTo(s, o);
  }
  static pathV(e) {
    var {
      current: r,
      command: t
    } = e, i = new J(r.x, (t.relative ? r.y : 0) + t.y);
    return e.current = i, {
      current: r,
      point: i
    };
  }
  pathV(e, r) {
    var {
      pathParser: t
    } = this, {
      current: i,
      point: a
    } = Y.pathV(t), {
      x: s,
      y: o
    } = a;
    t.addMarker(a, i), r.addPoint(s, o), e && e.lineTo(s, o);
  }
  static pathC(e) {
    var {
      current: r
    } = e, t = e.getPoint("x1", "y1"), i = e.getAsControlPoint("x2", "y2"), a = e.getAsCurrentPoint();
    return {
      current: r,
      point: t,
      controlPoint: i,
      currentPoint: a
    };
  }
  pathC(e, r) {
    var {
      pathParser: t
    } = this, {
      current: i,
      point: a,
      controlPoint: s,
      currentPoint: o
    } = Y.pathC(t);
    t.addMarker(o, s, a), r.addBezierCurve(i.x, i.y, a.x, a.y, s.x, s.y, o.x, o.y), e && e.bezierCurveTo(a.x, a.y, s.x, s.y, o.x, o.y);
  }
  static pathS(e) {
    var {
      current: r
    } = e, t = e.getReflectedControlPoint(), i = e.getAsControlPoint("x2", "y2"), a = e.getAsCurrentPoint();
    return {
      current: r,
      point: t,
      controlPoint: i,
      currentPoint: a
    };
  }
  pathS(e, r) {
    var {
      pathParser: t
    } = this, {
      current: i,
      point: a,
      controlPoint: s,
      currentPoint: o
    } = Y.pathS(t);
    t.addMarker(o, s, a), r.addBezierCurve(i.x, i.y, a.x, a.y, s.x, s.y, o.x, o.y), e && e.bezierCurveTo(a.x, a.y, s.x, s.y, o.x, o.y);
  }
  static pathQ(e) {
    var {
      current: r
    } = e, t = e.getAsControlPoint("x1", "y1"), i = e.getAsCurrentPoint();
    return {
      current: r,
      controlPoint: t,
      currentPoint: i
    };
  }
  pathQ(e, r) {
    var {
      pathParser: t
    } = this, {
      current: i,
      controlPoint: a,
      currentPoint: s
    } = Y.pathQ(t);
    t.addMarker(s, a, a), r.addQuadraticCurve(i.x, i.y, a.x, a.y, s.x, s.y), e && e.quadraticCurveTo(a.x, a.y, s.x, s.y);
  }
  static pathT(e) {
    var {
      current: r
    } = e, t = e.getReflectedControlPoint();
    e.control = t;
    var i = e.getAsCurrentPoint();
    return {
      current: r,
      controlPoint: t,
      currentPoint: i
    };
  }
  pathT(e, r) {
    var {
      pathParser: t
    } = this, {
      current: i,
      controlPoint: a,
      currentPoint: s
    } = Y.pathT(t);
    t.addMarker(s, a, a), r.addQuadraticCurve(i.x, i.y, a.x, a.y, s.x, s.y), e && e.quadraticCurveTo(a.x, a.y, s.x, s.y);
  }
  static pathA(e) {
    var {
      current: r,
      command: t
    } = e, {
      rX: i,
      rY: a,
      xRot: s,
      lArcFlag: o,
      sweepFlag: u
    } = t, l = s * (Math.PI / 180), h = e.getAsCurrentPoint(), c = new J(Math.cos(l) * (r.x - h.x) / 2 + Math.sin(l) * (r.y - h.y) / 2, -Math.sin(l) * (r.x - h.x) / 2 + Math.cos(l) * (r.y - h.y) / 2), v = Math.pow(c.x, 2) / Math.pow(i, 2) + Math.pow(c.y, 2) / Math.pow(a, 2);
    v > 1 && (i *= Math.sqrt(v), a *= Math.sqrt(v));
    var f = (o === u ? -1 : 1) * Math.sqrt((Math.pow(i, 2) * Math.pow(a, 2) - Math.pow(i, 2) * Math.pow(c.y, 2) - Math.pow(a, 2) * Math.pow(c.x, 2)) / (Math.pow(i, 2) * Math.pow(c.y, 2) + Math.pow(a, 2) * Math.pow(c.x, 2)));
    isNaN(f) && (f = 0);
    var g = new J(f * i * c.y / a, f * -a * c.x / i), d = new J((r.x + h.x) / 2 + Math.cos(l) * g.x - Math.sin(l) * g.y, (r.y + h.y) / 2 + Math.sin(l) * g.x + Math.cos(l) * g.y), p = ju([1, 0], [(c.x - g.x) / i, (c.y - g.y) / a]), y = [(c.x - g.x) / i, (c.y - g.y) / a], m = [(-c.x - g.x) / i, (-c.y - g.y) / a], b = ju(y, m);
    return La(y, m) <= -1 && (b = Math.PI), La(y, m) >= 1 && (b = 0), {
      currentPoint: h,
      rX: i,
      rY: a,
      sweepFlag: u,
      xAxisRotation: l,
      centp: d,
      a1: p,
      ad: b
    };
  }
  pathA(e, r) {
    var {
      pathParser: t
    } = this, {
      currentPoint: i,
      rX: a,
      rY: s,
      sweepFlag: o,
      xAxisRotation: u,
      centp: l,
      a1: h,
      ad: c
    } = Y.pathA(t), v = 1 - o ? 1 : -1, f = h + v * (c / 2), g = new J(l.x + a * Math.cos(f), l.y + s * Math.sin(f));
    if (t.addMarkerAngle(g, f - v * Math.PI / 2), t.addMarkerAngle(i, f - v * Math.PI), r.addPoint(i.x, i.y), e && !isNaN(h) && !isNaN(c)) {
      var d = a > s ? a : s, p = a > s ? 1 : a / s, y = a > s ? s / a : 1;
      e.translate(l.x, l.y), e.rotate(u), e.scale(p, y), e.arc(0, 0, d, h, h + c, !!(1 - o)), e.scale(1 / p, 1 / y), e.rotate(-u), e.translate(-l.x, -l.y);
    }
  }
  static pathZ(e) {
    e.current = e.start;
  }
  pathZ(e, r) {
    Y.pathZ(this.pathParser), e && r.x1 !== r.x2 && r.y1 !== r.y2 && e.closePath();
  }
}
class Ll extends Y {
  constructor(e, r, t) {
    super(e, r, t), this.type = "glyph", this.horizAdvX = this.getAttribute("horiz-adv-x").getNumber(), this.unicode = this.getAttribute("unicode").getString(), this.arabicForm = this.getAttribute("arabic-form").getString();
  }
}
class ze extends tr {
  constructor(e, r, t) {
    super(e, r, new.target === ze ? !0 : t), this.type = "text", this.x = 0, this.y = 0, this.measureCache = -1;
  }
  setContext(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    super.setContext(e, r);
    var t = this.getStyle("dominant-baseline").getTextBaseline() || this.getStyle("alignment-baseline").getTextBaseline();
    t && (e.textBaseline = t);
  }
  initializeCoordinates() {
    this.x = 0, this.y = 0, this.leafTexts = [], this.textChunkStart = 0, this.minX = Number.POSITIVE_INFINITY, this.maxX = Number.NEGATIVE_INFINITY;
  }
  getBoundingBox(e) {
    if (this.type !== "text")
      return this.getTElementBoundingBox(e);
    this.initializeCoordinates(), this.adjustChildCoordinatesRecursive(e);
    var r = null;
    return this.children.forEach((t, i) => {
      var a = this.getChildBoundingBox(e, this, this, i);
      r ? r.addBoundingBox(a) : r = a;
    }), r;
  }
  getFontSize() {
    var {
      document: e,
      parent: r
    } = this, t = oe.parse(e.ctx.font).fontSize, i = r.getStyle("font-size").getNumber(t);
    return i;
  }
  getTElementBoundingBox(e) {
    var r = this.getFontSize();
    return new Pe(this.x, this.y - r, this.x + this.measureText(e), this.y);
  }
  getGlyph(e, r, t) {
    var i = r[t], a = null;
    if (e.isArabic) {
      var s = r.length, o = r[t - 1], u = r[t + 1], l = "isolated";
      if ((t === 0 || o === " ") && t < s - 1 && u !== " " && (l = "terminal"), t > 0 && o !== " " && t < s - 1 && u !== " " && (l = "medial"), t > 0 && o !== " " && (t === s - 1 || u === " ") && (l = "initial"), typeof e.glyphs[i] < "u") {
        var h = e.glyphs[i];
        a = h instanceof Ll ? h : h[l];
      }
    } else
      a = e.glyphs[i];
    return a || (a = e.missingGlyph), a;
  }
  getText() {
    return "";
  }
  getTextFromNode(e) {
    var r = e || this.node, t = Array.from(r.parentNode.childNodes), i = t.indexOf(r), a = t.length - 1, s = sr(
      // textNode.value
      // || textNode.text
      r.textContent || ""
    );
    return i === 0 && (s = Cf(s)), i === a && (s = wf(s)), s;
  }
  renderChildren(e) {
    if (this.type !== "text") {
      this.renderTElementChildren(e);
      return;
    }
    this.initializeCoordinates(), this.adjustChildCoordinatesRecursive(e), this.children.forEach((t, i) => {
      this.renderChild(e, this, this, i);
    });
    var {
      mouse: r
    } = this.document.screen;
    r.isWorking() && r.checkBoundingBox(this, this.getBoundingBox(e));
  }
  renderTElementChildren(e) {
    var {
      document: r,
      parent: t
    } = this, i = this.getText(), a = t.getStyle("font-family").getDefinition();
    if (a) {
      for (var {
        unitsPerEm: s
      } = a.fontFace, o = oe.parse(r.ctx.font), u = t.getStyle("font-size").getNumber(o.fontSize), l = t.getStyle("font-style").getString(o.fontStyle), h = u / s, c = a.isRTL ? i.split("").reverse().join("") : i, v = ge(t.getAttribute("dx").getString()), f = c.length, g = 0; g < f; g++) {
        var d = this.getGlyph(a, c, g);
        e.translate(this.x, this.y), e.scale(h, -h);
        var p = e.lineWidth;
        e.lineWidth = e.lineWidth * s / u, l === "italic" && e.transform(1, 0, 0.4, 1, 0, 0), d.render(e), l === "italic" && e.transform(1, 0, -0.4, 1, 0, 0), e.lineWidth = p, e.scale(1 / h, -1 / h), e.translate(-this.x, -this.y), this.x += u * (d.horizAdvX || a.horizAdvX) / s, typeof v[g] < "u" && !isNaN(v[g]) && (this.x += v[g]);
      }
      return;
    }
    var {
      x: y,
      y: m
    } = this;
    e.fillStyle && e.fillText(i, y, m), e.strokeStyle && e.strokeText(i, y, m);
  }
  applyAnchoring() {
    if (!(this.textChunkStart >= this.leafTexts.length)) {
      var e = this.leafTexts[this.textChunkStart], r = e.getStyle("text-anchor").getString("start"), t = !1, i = 0;
      r === "start" || r === "end" && t ? i = e.x - this.minX : r === "end" || r === "start" && t ? i = e.x - this.maxX : i = e.x - (this.minX + this.maxX) / 2;
      for (var a = this.textChunkStart; a < this.leafTexts.length; a++)
        this.leafTexts[a].x += i;
      this.minX = Number.POSITIVE_INFINITY, this.maxX = Number.NEGATIVE_INFINITY, this.textChunkStart = this.leafTexts.length;
    }
  }
  adjustChildCoordinatesRecursive(e) {
    this.children.forEach((r, t) => {
      this.adjustChildCoordinatesRecursiveCore(e, this, this, t);
    }), this.applyAnchoring();
  }
  adjustChildCoordinatesRecursiveCore(e, r, t, i) {
    var a = t.children[i];
    a.children.length > 0 ? a.children.forEach((s, o) => {
      r.adjustChildCoordinatesRecursiveCore(e, r, a, o);
    }) : this.adjustChildCoordinates(e, r, t, i);
  }
  adjustChildCoordinates(e, r, t, i) {
    var a = t.children[i];
    if (typeof a.measureText != "function")
      return a;
    e.save(), a.setContext(e, !0);
    var s = a.getAttribute("x"), o = a.getAttribute("y"), u = a.getAttribute("dx"), l = a.getAttribute("dy"), h = a.getStyle("font-family").getDefinition(), c = !!h && h.isRTL;
    i === 0 && (s.hasValue() || s.setValue(a.getInheritedAttribute("x")), o.hasValue() || o.setValue(a.getInheritedAttribute("y")), u.hasValue() || u.setValue(a.getInheritedAttribute("dx")), l.hasValue() || l.setValue(a.getInheritedAttribute("dy")));
    var v = a.measureText(e);
    return c && (r.x -= v), s.hasValue() ? (r.applyAnchoring(), a.x = s.getPixels("x"), u.hasValue() && (a.x += u.getPixels("x"))) : (u.hasValue() && (r.x += u.getPixels("x")), a.x = r.x), r.x = a.x, c || (r.x += v), o.hasValue() ? (a.y = o.getPixels("y"), l.hasValue() && (a.y += l.getPixels("y"))) : (l.hasValue() && (r.y += l.getPixels("y")), a.y = r.y), r.y = a.y, r.leafTexts.push(a), r.minX = Math.min(r.minX, a.x, a.x + v), r.maxX = Math.max(r.maxX, a.x, a.x + v), a.clearContext(e), e.restore(), a;
  }
  getChildBoundingBox(e, r, t, i) {
    var a = t.children[i];
    if (typeof a.getBoundingBox != "function")
      return null;
    var s = a.getBoundingBox(e);
    return s ? (a.children.forEach((o, u) => {
      var l = r.getChildBoundingBox(e, r, a, u);
      s.addBoundingBox(l);
    }), s) : null;
  }
  renderChild(e, r, t, i) {
    var a = t.children[i];
    a.render(e), a.children.forEach((s, o) => {
      r.renderChild(e, r, a, o);
    });
  }
  measureText(e) {
    var {
      measureCache: r
    } = this;
    if (~r)
      return r;
    var t = this.getText(), i = this.measureTargetText(e, t);
    return this.measureCache = i, i;
  }
  measureTargetText(e, r) {
    if (!r.length)
      return 0;
    var {
      parent: t
    } = this, i = t.getStyle("font-family").getDefinition();
    if (i) {
      for (var a = this.getFontSize(), s = i.isRTL ? r.split("").reverse().join("") : r, o = ge(t.getAttribute("dx").getString()), u = s.length, l = 0, h = 0; h < u; h++) {
        var c = this.getGlyph(i, s, h);
        l += (c.horizAdvX || i.horizAdvX) * a / i.fontFace.unitsPerEm, typeof o[h] < "u" && !isNaN(o[h]) && (l += o[h]);
      }
      return l;
    }
    if (!e.measureText)
      return r.length * 10;
    e.save(), this.setContext(e, !0);
    var {
      width: v
    } = e.measureText(r);
    return this.clearContext(e), e.restore(), v;
  }
  /**
   * Inherits positional attributes from {@link TextElement} parent(s). Attributes
   * are only inherited from a parent to its first child.
   * @param name - The attribute name.
   * @returns The attribute value or null.
   */
  getInheritedAttribute(e) {
    for (var r = this; r instanceof ze && r.isFirstChild(); ) {
      var t = r.parent.getAttribute(e);
      if (t.hasValue(!0))
        return t.getValue("0");
      r = r.parent;
    }
    return null;
  }
}
class Gr extends ze {
  constructor(e, r, t) {
    super(e, r, new.target === Gr ? !0 : t), this.type = "tspan", this.text = this.children.length > 0 ? "" : this.getTextFromNode();
  }
  getText() {
    return this.text;
  }
}
class rc extends Gr {
  constructor() {
    super(...arguments), this.type = "textNode";
  }
}
class br extends tr {
  constructor() {
    super(...arguments), this.type = "svg", this.root = !1;
  }
  setContext(e) {
    var r, {
      document: t
    } = this, {
      screen: i,
      window: a
    } = t, s = e.canvas;
    if (i.setDefaults(e), s.style && typeof e.font < "u" && a && typeof a.getComputedStyle < "u") {
      e.font = a.getComputedStyle(s).getPropertyValue("font");
      var o = new D(t, "fontSize", oe.parse(e.font).fontSize);
      o.hasValue() && (t.rootEmSize = o.getPixels("y"), t.emSize = t.rootEmSize);
    }
    this.getAttribute("x").hasValue() || this.getAttribute("x", !0).setValue(0), this.getAttribute("y").hasValue() || this.getAttribute("y", !0).setValue(0);
    var {
      width: u,
      height: l
    } = i.viewPort;
    this.getStyle("width").hasValue() || this.getStyle("width", !0).setValue("100%"), this.getStyle("height").hasValue() || this.getStyle("height", !0).setValue("100%"), this.getStyle("color").hasValue() || this.getStyle("color", !0).setValue("black");
    var h = this.getAttribute("refX"), c = this.getAttribute("refY"), v = this.getAttribute("viewBox"), f = v.hasValue() ? ge(v.getString()) : null, g = !this.root && this.getStyle("overflow").getValue("hidden") !== "visible", d = 0, p = 0, y = 0, m = 0;
    f && (d = f[0], p = f[1]), this.root || (u = this.getStyle("width").getPixels("x"), l = this.getStyle("height").getPixels("y"), this.type === "marker" && (y = d, m = p, d = 0, p = 0)), i.viewPort.setCurrent(u, l), this.node && (!this.parent || ((r = this.node.parentNode) === null || r === void 0 ? void 0 : r.nodeName) === "foreignObject") && this.getStyle("transform", !1, !0).hasValue() && !this.getStyle("transform-origin", !1, !0).hasValue() && this.getStyle("transform-origin", !0, !0).setValue("50% 50%"), super.setContext(e), e.translate(this.getAttribute("x").getPixels("x"), this.getAttribute("y").getPixels("y")), f && (u = f[2], l = f[3]), t.setViewBox({
      ctx: e,
      aspectRatio: this.getAttribute("preserveAspectRatio").getString(),
      width: i.viewPort.width,
      desiredWidth: u,
      height: i.viewPort.height,
      desiredHeight: l,
      minX: d,
      minY: p,
      refX: h.getValue(),
      refY: c.getValue(),
      clip: g,
      clipX: y,
      clipY: m
    }), f && (i.viewPort.removeCurrent(), i.viewPort.setCurrent(u, l));
  }
  clearContext(e) {
    super.clearContext(e), this.document.screen.viewPort.removeCurrent();
  }
  /**
   * Resize SVG to fit in given size.
   * @param width
   * @param height
   * @param preserveAspectRatio
   */
  resize(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, i = this.getAttribute("width", !0), a = this.getAttribute("height", !0), s = this.getAttribute("viewBox"), o = this.getAttribute("style"), u = i.getNumber(0), l = a.getNumber(0);
    if (t)
      if (typeof t == "string")
        this.getAttribute("preserveAspectRatio", !0).setValue(t);
      else {
        var h = this.getAttribute("preserveAspectRatio");
        h.hasValue() && h.setValue(h.getString().replace(/^\s*(\S.*\S)\s*$/, "$1"));
      }
    if (i.setValue(e), a.setValue(r), s.hasValue() || s.setValue("0 0 ".concat(u || e, " ").concat(l || r)), o.hasValue()) {
      var c = this.getStyle("width"), v = this.getStyle("height");
      c.hasValue() && c.setValue("".concat(e, "px")), v.hasValue() && v.setValue("".concat(r, "px"));
    }
  }
}
class kl extends Y {
  constructor() {
    super(...arguments), this.type = "rect";
  }
  path(e) {
    var r = this.getAttribute("x").getPixels("x"), t = this.getAttribute("y").getPixels("y"), i = this.getStyle("width", !1, !0).getPixels("x"), a = this.getStyle("height", !1, !0).getPixels("y"), s = this.getAttribute("rx"), o = this.getAttribute("ry"), u = s.getPixels("x"), l = o.getPixels("y");
    if (s.hasValue() && !o.hasValue() && (l = u), o.hasValue() && !s.hasValue() && (u = l), u = Math.min(u, i / 2), l = Math.min(l, a / 2), e) {
      var h = 4 * ((Math.sqrt(2) - 1) / 3);
      e.beginPath(), a > 0 && i > 0 && (e.moveTo(r + u, t), e.lineTo(r + i - u, t), e.bezierCurveTo(r + i - u + h * u, t, r + i, t + l - h * l, r + i, t + l), e.lineTo(r + i, t + a - l), e.bezierCurveTo(r + i, t + a - l + h * l, r + i - u + h * u, t + a, r + i - u, t + a), e.lineTo(r + u, t + a), e.bezierCurveTo(r + u - h * u, t + a, r, t + a - l + h * l, r, t + a - l), e.lineTo(r, t + l), e.bezierCurveTo(r, t + l - h * l, r + u - h * u, t, r + u, t), e.closePath());
    }
    return new Pe(r, t, r + i, t + a);
  }
  getMarkers() {
    return null;
  }
}
class tc extends Y {
  constructor() {
    super(...arguments), this.type = "circle";
  }
  path(e) {
    var r = this.getAttribute("cx").getPixels("x"), t = this.getAttribute("cy").getPixels("y"), i = this.getAttribute("r").getPixels();
    return e && i > 0 && (e.beginPath(), e.arc(r, t, i, 0, Math.PI * 2, !1), e.closePath()), new Pe(r - i, t - i, r + i, t + i);
  }
  getMarkers() {
    return null;
  }
}
class ic extends Y {
  constructor() {
    super(...arguments), this.type = "ellipse";
  }
  path(e) {
    var r = 4 * ((Math.sqrt(2) - 1) / 3), t = this.getAttribute("rx").getPixels("x"), i = this.getAttribute("ry").getPixels("y"), a = this.getAttribute("cx").getPixels("x"), s = this.getAttribute("cy").getPixels("y");
    return e && t > 0 && i > 0 && (e.beginPath(), e.moveTo(a + t, s), e.bezierCurveTo(a + t, s + r * i, a + r * t, s + i, a, s + i), e.bezierCurveTo(a - r * t, s + i, a - t, s + r * i, a - t, s), e.bezierCurveTo(a - t, s - r * i, a - r * t, s - i, a, s - i), e.bezierCurveTo(a + r * t, s - i, a + t, s - r * i, a + t, s), e.closePath()), new Pe(a - t, s - i, a + t, s + i);
  }
  getMarkers() {
    return null;
  }
}
class ac extends Y {
  constructor() {
    super(...arguments), this.type = "line";
  }
  getPoints() {
    return [new J(this.getAttribute("x1").getPixels("x"), this.getAttribute("y1").getPixels("y")), new J(this.getAttribute("x2").getPixels("x"), this.getAttribute("y2").getPixels("y"))];
  }
  path(e) {
    var [{
      x: r,
      y: t
    }, {
      x: i,
      y: a
    }] = this.getPoints();
    return e && (e.beginPath(), e.moveTo(r, t), e.lineTo(i, a)), new Pe(r, t, i, a);
  }
  getMarkers() {
    var [e, r] = this.getPoints(), t = e.angleTo(r);
    return [[e, t], [r, t]];
  }
}
class Bl extends Y {
  constructor(e, r, t) {
    super(e, r, t), this.type = "polyline", this.points = [], this.points = J.parsePath(this.getAttribute("points").getString());
  }
  path(e) {
    var {
      points: r
    } = this, [{
      x: t,
      y: i
    }] = r, a = new Pe(t, i);
    return e && (e.beginPath(), e.moveTo(t, i)), r.forEach((s) => {
      var {
        x: o,
        y: u
      } = s;
      a.addPoint(o, u), e && e.lineTo(o, u);
    }), a;
  }
  getMarkers() {
    var {
      points: e
    } = this, r = e.length - 1, t = [];
    return e.forEach((i, a) => {
      a !== r && t.push([i, i.angleTo(e[a + 1])]);
    }), t.length > 0 && t.push([e[e.length - 1], t[t.length - 1][1]]), t;
  }
}
class nc extends Bl {
  constructor() {
    super(...arguments), this.type = "polygon";
  }
  path(e) {
    var r = super.path(e), [{
      x: t,
      y: i
    }] = this.points;
    return e && (e.lineTo(t, i), e.closePath()), r;
  }
}
class sc extends K {
  constructor() {
    super(...arguments), this.type = "pattern";
  }
  createPattern(e, r, t) {
    var i = this.getStyle("width").getPixels("x", !0), a = this.getStyle("height").getPixels("y", !0), s = new br(this.document, null);
    s.attributes.viewBox = new D(this.document, "viewBox", this.getAttribute("viewBox").getValue()), s.attributes.width = new D(this.document, "width", "".concat(i, "px")), s.attributes.height = new D(this.document, "height", "".concat(a, "px")), s.attributes.transform = new D(this.document, "transform", this.getAttribute("patternTransform").getValue()), s.children = this.children;
    var o = this.document.createCanvas(i, a), u = o.getContext("2d"), l = this.getAttribute("x"), h = this.getAttribute("y");
    l.hasValue() && h.hasValue() && u.translate(l.getPixels("x", !0), h.getPixels("y", !0)), t.hasValue() ? this.styles["fill-opacity"] = t : Reflect.deleteProperty(this.styles, "fill-opacity");
    for (var c = -1; c <= 1; c++)
      for (var v = -1; v <= 1; v++)
        u.save(), s.attributes.x = new D(this.document, "x", c * o.width), s.attributes.y = new D(this.document, "y", v * o.height), s.render(u), u.restore();
    var f = e.createPattern(o, "repeat");
    return f;
  }
}
class oc extends K {
  constructor() {
    super(...arguments), this.type = "marker";
  }
  render(e, r, t) {
    if (r) {
      var {
        x: i,
        y: a
      } = r, s = this.getAttribute("orient").getString("auto"), o = this.getAttribute("markerUnits").getString("strokeWidth");
      e.translate(i, a), s === "auto" && e.rotate(t), o === "strokeWidth" && e.scale(e.lineWidth, e.lineWidth), e.save();
      var u = new br(this.document, null);
      u.type = this.type, u.attributes.viewBox = new D(this.document, "viewBox", this.getAttribute("viewBox").getValue()), u.attributes.refX = new D(this.document, "refX", this.getAttribute("refX").getValue()), u.attributes.refY = new D(this.document, "refY", this.getAttribute("refY").getValue()), u.attributes.width = new D(this.document, "width", this.getAttribute("markerWidth").getValue()), u.attributes.height = new D(this.document, "height", this.getAttribute("markerHeight").getValue()), u.attributes.overflow = new D(this.document, "overflow", this.getAttribute("overflow").getValue()), u.attributes.fill = new D(this.document, "fill", this.getAttribute("fill").getColor("black")), u.attributes.stroke = new D(this.document, "stroke", this.getAttribute("stroke").getValue("none")), u.children = this.children, u.render(e), e.restore(), o === "strokeWidth" && e.scale(1 / e.lineWidth, 1 / e.lineWidth), s === "auto" && e.rotate(-t), e.translate(-i, -a);
    }
  }
}
class uc extends K {
  constructor() {
    super(...arguments), this.type = "defs";
  }
  render() {
  }
}
class sn extends tr {
  constructor() {
    super(...arguments), this.type = "g";
  }
  getBoundingBox(e) {
    var r = new Pe();
    return this.children.forEach((t) => {
      r.addBoundingBox(t.getBoundingBox(e));
    }), r;
  }
}
class jl extends K {
  constructor(e, r, t) {
    super(e, r, t), this.attributesToInherit = ["gradientUnits"], this.stops = [];
    var {
      stops: i,
      children: a
    } = this;
    a.forEach((s) => {
      s.type === "stop" && i.push(s);
    });
  }
  getGradientUnits() {
    return this.getAttribute("gradientUnits").getString("objectBoundingBox");
  }
  createGradient(e, r, t) {
    var i = this;
    this.getHrefAttribute().hasValue() && (i = this.getHrefAttribute().getDefinition(), this.inheritStopContainer(i));
    var {
      stops: a
    } = i, s = this.getGradient(e, r);
    if (!s)
      return this.addParentOpacity(t, a[a.length - 1].color);
    if (a.forEach((p) => {
      s.addColorStop(p.offset, this.addParentOpacity(t, p.color));
    }), this.getAttribute("gradientTransform").hasValue()) {
      var {
        document: o
      } = this, {
        MAX_VIRTUAL_PIXELS: u,
        viewPort: l
      } = o.screen, [h] = l.viewPorts, c = new kl(o, null);
      c.attributes.x = new D(o, "x", -u / 3), c.attributes.y = new D(o, "y", -u / 3), c.attributes.width = new D(o, "width", u), c.attributes.height = new D(o, "height", u);
      var v = new sn(o, null);
      v.attributes.transform = new D(o, "transform", this.getAttribute("gradientTransform").getValue()), v.children = [c];
      var f = new br(o, null);
      f.attributes.x = new D(o, "x", 0), f.attributes.y = new D(o, "y", 0), f.attributes.width = new D(o, "width", h.width), f.attributes.height = new D(o, "height", h.height), f.children = [v];
      var g = o.createCanvas(h.width, h.height), d = g.getContext("2d");
      return d.fillStyle = s, f.render(d), d.createPattern(g, "no-repeat");
    }
    return s;
  }
  inheritStopContainer(e) {
    this.attributesToInherit.forEach((r) => {
      !this.getAttribute(r).hasValue() && e.getAttribute(r).hasValue() && this.getAttribute(r, !0).setValue(e.getAttribute(r).getValue());
    });
  }
  addParentOpacity(e, r) {
    if (e.hasValue()) {
      var t = new D(this.document, "color", r);
      return t.addOpacity(e).getColor();
    }
    return r;
  }
}
class lc extends jl {
  constructor(e, r, t) {
    super(e, r, t), this.type = "linearGradient", this.attributesToInherit.push("x1", "y1", "x2", "y2");
  }
  getGradient(e, r) {
    var t = this.getGradientUnits() === "objectBoundingBox", i = t ? r.getBoundingBox(e) : null;
    if (t && !i)
      return null;
    !this.getAttribute("x1").hasValue() && !this.getAttribute("y1").hasValue() && !this.getAttribute("x2").hasValue() && !this.getAttribute("y2").hasValue() && (this.getAttribute("x1", !0).setValue(0), this.getAttribute("y1", !0).setValue(0), this.getAttribute("x2", !0).setValue(1), this.getAttribute("y2", !0).setValue(0));
    var a = t ? i.x + i.width * this.getAttribute("x1").getNumber() : this.getAttribute("x1").getPixels("x"), s = t ? i.y + i.height * this.getAttribute("y1").getNumber() : this.getAttribute("y1").getPixels("y"), o = t ? i.x + i.width * this.getAttribute("x2").getNumber() : this.getAttribute("x2").getPixels("x"), u = t ? i.y + i.height * this.getAttribute("y2").getNumber() : this.getAttribute("y2").getPixels("y");
    return a === o && s === u ? null : e.createLinearGradient(a, s, o, u);
  }
}
class hc extends jl {
  constructor(e, r, t) {
    super(e, r, t), this.type = "radialGradient", this.attributesToInherit.push("cx", "cy", "r", "fx", "fy", "fr");
  }
  getGradient(e, r) {
    var t = this.getGradientUnits() === "objectBoundingBox", i = r.getBoundingBox(e);
    if (t && !i)
      return null;
    this.getAttribute("cx").hasValue() || this.getAttribute("cx", !0).setValue("50%"), this.getAttribute("cy").hasValue() || this.getAttribute("cy", !0).setValue("50%"), this.getAttribute("r").hasValue() || this.getAttribute("r", !0).setValue("50%");
    var a = t ? i.x + i.width * this.getAttribute("cx").getNumber() : this.getAttribute("cx").getPixels("x"), s = t ? i.y + i.height * this.getAttribute("cy").getNumber() : this.getAttribute("cy").getPixels("y"), o = a, u = s;
    this.getAttribute("fx").hasValue() && (o = t ? i.x + i.width * this.getAttribute("fx").getNumber() : this.getAttribute("fx").getPixels("x")), this.getAttribute("fy").hasValue() && (u = t ? i.y + i.height * this.getAttribute("fy").getNumber() : this.getAttribute("fy").getPixels("y"));
    var l = t ? (i.width + i.height) / 2 * this.getAttribute("r").getNumber() : this.getAttribute("r").getPixels(), h = this.getAttribute("fr").getPixels();
    return e.createRadialGradient(o, u, h, a, s, l);
  }
}
class fc extends K {
  constructor(e, r, t) {
    super(e, r, t), this.type = "stop";
    var i = Math.max(0, Math.min(1, this.getAttribute("offset").getNumber())), a = this.getStyle("stop-opacity"), s = this.getStyle("stop-color", !0);
    s.getString() === "" && s.setValue("#000"), a.hasValue() && (s = s.addOpacity(a)), this.offset = i, this.color = s.getColor();
  }
}
class on extends K {
  constructor(e, r, t) {
    super(e, r, t), this.type = "animate", this.duration = 0, this.initialValue = null, this.initialUnits = "", this.removed = !1, this.frozen = !1, e.screen.animations.push(this), this.begin = this.getAttribute("begin").getMilliseconds(), this.maxDuration = this.begin + this.getAttribute("dur").getMilliseconds(), this.from = this.getAttribute("from"), this.to = this.getAttribute("to"), this.values = new D(e, "values", null);
    var i = this.getAttribute("values");
    i.hasValue() && this.values.setValue(i.getString().split(";"));
  }
  getProperty() {
    var e = this.getAttribute("attributeType").getString(), r = this.getAttribute("attributeName").getString();
    return e === "CSS" ? this.parent.getStyle(r, !0) : this.parent.getAttribute(r, !0);
  }
  calcValue() {
    var {
      initialUnits: e
    } = this, {
      progress: r,
      from: t,
      to: i
    } = this.getProgress(), a = t.getNumber() + (i.getNumber() - t.getNumber()) * r;
    return e === "%" && (a *= 100), "".concat(a).concat(e);
  }
  update(e) {
    var {
      parent: r
    } = this, t = this.getProperty();
    if (this.initialValue || (this.initialValue = t.getString(), this.initialUnits = t.getUnits()), this.duration > this.maxDuration) {
      var i = this.getAttribute("fill").getString("remove");
      if (this.getAttribute("repeatCount").getString() === "indefinite" || this.getAttribute("repeatDur").getString() === "indefinite")
        this.duration = 0;
      else if (i === "freeze" && !this.frozen)
        this.frozen = !0, r.animationFrozen = !0, r.animationFrozenValue = t.getString();
      else if (i === "remove" && !this.removed)
        return this.removed = !0, t.setValue(r.animationFrozen ? r.animationFrozenValue : this.initialValue), !0;
      return !1;
    }
    this.duration += e;
    var a = !1;
    if (this.begin < this.duration) {
      var s = this.calcValue(), o = this.getAttribute("type");
      if (o.hasValue()) {
        var u = o.getString();
        s = "".concat(u, "(").concat(s, ")");
      }
      t.setValue(s), a = !0;
    }
    return a;
  }
  getProgress() {
    var {
      document: e,
      values: r
    } = this, t = {
      progress: (this.duration - this.begin) / (this.maxDuration - this.begin)
    };
    if (r.hasValue()) {
      var i = t.progress * (r.getValue().length - 1), a = Math.floor(i), s = Math.ceil(i);
      t.from = new D(e, "from", parseFloat(r.getValue()[a])), t.to = new D(e, "to", parseFloat(r.getValue()[s])), t.progress = (i - a) / (s - a);
    } else
      t.from = this.from, t.to = this.to;
    return t;
  }
}
class cc extends on {
  constructor() {
    super(...arguments), this.type = "animateColor";
  }
  calcValue() {
    var {
      progress: e,
      from: r,
      to: t
    } = this.getProgress(), i = new Da(r.getColor()), a = new Da(t.getColor());
    if (i.ok && a.ok) {
      var s = i.r + (a.r - i.r) * e, o = i.g + (a.g - i.g) * e, u = i.b + (a.b - i.b) * e;
      return "rgb(".concat(Math.floor(s), ", ").concat(Math.floor(o), ", ").concat(Math.floor(u), ")");
    }
    return this.getAttribute("from").getColor();
  }
}
class vc extends on {
  constructor() {
    super(...arguments), this.type = "animateTransform";
  }
  calcValue() {
    var {
      progress: e,
      from: r,
      to: t
    } = this.getProgress(), i = ge(r.getString()), a = ge(t.getString()), s = i.map((o, u) => {
      var l = a[u];
      return o + (l - o) * e;
    }).join(" ");
    return s;
  }
}
class gc extends K {
  constructor(e, r, t) {
    super(e, r, t), this.type = "font", this.glyphs = {}, this.horizAdvX = this.getAttribute("horiz-adv-x").getNumber();
    var {
      definitions: i
    } = e, {
      children: a
    } = this;
    for (var s of a)
      switch (s.type) {
        case "font-face": {
          this.fontFace = s;
          var o = s.getStyle("font-family");
          o.hasValue() && (i[o.getString()] = this);
          break;
        }
        case "missing-glyph":
          this.missingGlyph = s;
          break;
        case "glyph": {
          var u = s;
          u.arabicForm ? (this.isRTL = !0, this.isArabic = !0, typeof this.glyphs[u.unicode] > "u" && (this.glyphs[u.unicode] = {}), this.glyphs[u.unicode][u.arabicForm] = u) : this.glyphs[u.unicode] = u;
          break;
        }
      }
  }
  render() {
  }
}
class dc extends K {
  constructor(e, r, t) {
    super(e, r, t), this.type = "font-face", this.ascent = this.getAttribute("ascent").getNumber(), this.descent = this.getAttribute("descent").getNumber(), this.unitsPerEm = this.getAttribute("units-per-em").getNumber();
  }
}
class pc extends Y {
  constructor() {
    super(...arguments), this.type = "missing-glyph", this.horizAdvX = 0;
  }
}
class yc extends ze {
  constructor() {
    super(...arguments), this.type = "tref";
  }
  getText() {
    var e = this.getHrefAttribute().getDefinition();
    if (e) {
      var r = e.children[0];
      if (r)
        return r.getText();
    }
    return "";
  }
}
class mc extends ze {
  constructor(e, r, t) {
    super(e, r, t), this.type = "a";
    var {
      childNodes: i
    } = r, a = i[0], s = i.length > 0 && Array.from(i).every((o) => o.nodeType === 3);
    this.hasText = s, this.text = s ? this.getTextFromNode(a) : "";
  }
  getText() {
    return this.text;
  }
  renderChildren(e) {
    if (this.hasText) {
      super.renderChildren(e);
      var {
        document: r,
        x: t,
        y: i
      } = this, {
        mouse: a
      } = r.screen, s = new D(r, "fontSize", oe.parse(r.ctx.font).fontSize);
      a.isWorking() && a.checkBoundingBox(this, new Pe(t, i - s.getPixels("y"), t + this.measureText(e), i));
    } else if (this.children.length > 0) {
      var o = new sn(this.document, null);
      o.children = this.children, o.parent = this, o.render(e);
    }
  }
  onClick() {
    var {
      window: e
    } = this.document;
    e && e.open(this.getHrefAttribute().getString());
  }
  onMouseMove() {
    var e = this.document.ctx;
    e.canvas.style.cursor = "pointer";
  }
}
function Yu(n, e) {
  var r = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(n);
    e && (t = t.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function Rr(n) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Yu(Object(r), !0).forEach(function(t) {
      nn(n, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : Yu(Object(r)).forEach(function(t) {
      Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return n;
}
class bc extends ze {
  constructor(e, r, t) {
    super(e, r, t), this.type = "textPath", this.textWidth = 0, this.textHeight = 0, this.pathLength = -1, this.glyphInfo = null, this.letterSpacingCache = [], this.measuresCache = /* @__PURE__ */ new Map([["", 0]]);
    var i = this.getHrefAttribute().getDefinition();
    this.text = this.getTextFromNode(), this.dataArray = this.parsePathData(i);
  }
  getText() {
    return this.text;
  }
  path(e) {
    var {
      dataArray: r
    } = this;
    e && e.beginPath(), r.forEach((t) => {
      var {
        type: i,
        points: a
      } = t;
      switch (i) {
        case F.LINE_TO:
          e && e.lineTo(a[0], a[1]);
          break;
        case F.MOVE_TO:
          e && e.moveTo(a[0], a[1]);
          break;
        case F.CURVE_TO:
          e && e.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]);
          break;
        case F.QUAD_TO:
          e && e.quadraticCurveTo(a[0], a[1], a[2], a[3]);
          break;
        case F.ARC: {
          var [s, o, u, l, h, c, v, f] = a, g = u > l ? u : l, d = u > l ? 1 : u / l, p = u > l ? l / u : 1;
          e && (e.translate(s, o), e.rotate(v), e.scale(d, p), e.arc(0, 0, g, h, h + c, !!(1 - f)), e.scale(1 / d, 1 / p), e.rotate(-v), e.translate(-s, -o));
          break;
        }
        case F.CLOSE_PATH:
          e && e.closePath();
          break;
      }
    });
  }
  renderChildren(e) {
    this.setTextData(e), e.save();
    var r = this.parent.getStyle("text-decoration").getString(), t = this.getFontSize(), {
      glyphInfo: i
    } = this, a = e.fillStyle;
    r === "underline" && e.beginPath(), i.forEach((s, o) => {
      var {
        p0: u,
        p1: l,
        rotation: h,
        text: c
      } = s;
      e.save(), e.translate(u.x, u.y), e.rotate(h), e.fillStyle && e.fillText(c, 0, 0), e.strokeStyle && e.strokeText(c, 0, 0), e.restore(), r === "underline" && (o === 0 && e.moveTo(u.x, u.y + t / 8), e.lineTo(l.x, l.y + t / 5));
    }), r === "underline" && (e.lineWidth = t / 20, e.strokeStyle = a, e.stroke(), e.closePath()), e.restore();
  }
  getLetterSpacingAt() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    return this.letterSpacingCache[e] || 0;
  }
  findSegmentToFitChar(e, r, t, i, a, s, o, u, l) {
    var h = s, c = this.measureText(e, u);
    u === " " && r === "justify" && t < i && (c += (i - t) / a), l > -1 && (h += this.getLetterSpacingAt(l));
    var v = this.textHeight / 20, f = this.getEquidistantPointOnPath(h, v, 0), g = this.getEquidistantPointOnPath(h + c, v, 0), d = {
      p0: f,
      p1: g
    }, p = f && g ? Math.atan2(g.y - f.y, g.x - f.x) : 0;
    if (o) {
      var y = Math.cos(Math.PI / 2 + p) * o, m = Math.cos(-p) * o;
      d.p0 = Rr(Rr({}, f), {}, {
        x: f.x + y,
        y: f.y + m
      }), d.p1 = Rr(Rr({}, g), {}, {
        x: g.x + y,
        y: g.y + m
      });
    }
    return h += c, {
      offset: h,
      segment: d,
      rotation: p
    };
  }
  measureText(e, r) {
    var {
      measuresCache: t
    } = this, i = r || this.getText();
    if (t.has(i))
      return t.get(i);
    var a = this.measureTargetText(e, i);
    return t.set(i, a), a;
  }
  // This method supposes what all custom fonts already loaded.
  // If some font will be loaded after this method call, <textPath> will not be rendered correctly.
  // You need to call this method manually to update glyphs cache.
  setTextData(e) {
    if (!this.glyphInfo) {
      var r = this.getText(), t = r.split(""), i = r.split(" ").length - 1, a = this.parent.getAttribute("dx").split().map((x) => x.getPixels("x")), s = this.parent.getAttribute("dy").getPixels("y"), o = this.parent.getStyle("text-anchor").getString("start"), u = this.getStyle("letter-spacing"), l = this.parent.getStyle("letter-spacing"), h = 0;
      !u.hasValue() || u.getValue() === "inherit" ? h = l.getPixels() : u.hasValue() && u.getValue() !== "initial" && u.getValue() !== "unset" && (h = u.getPixels());
      var c = [], v = r.length;
      this.letterSpacingCache = c;
      for (var f = 0; f < v; f++)
        c.push(typeof a[f] < "u" ? a[f] : h);
      var g = c.reduce((x, S, E) => E === 0 ? 0 : x + S || 0, 0), d = this.measureText(e), p = Math.max(d + g, 0);
      this.textWidth = d, this.textHeight = this.getFontSize(), this.glyphInfo = [];
      var y = this.getPathLength(), m = this.getStyle("startOffset").getNumber(0) * y, b = 0;
      (o === "middle" || o === "center") && (b = -p / 2), (o === "end" || o === "right") && (b = -p), b += m, t.forEach((x, S) => {
        var {
          offset: E,
          segment: T,
          rotation: _
        } = this.findSegmentToFitChar(e, o, p, y, i, b, s, x, S);
        b = E, !(!T.p0 || !T.p1) && this.glyphInfo.push({
          // transposeX: midpoint.x,
          // transposeY: midpoint.y,
          text: t[S],
          p0: T.p0,
          p1: T.p1,
          rotation: _
        });
      });
    }
  }
  parsePathData(e) {
    if (this.pathLength = -1, !e)
      return [];
    var r = [], {
      pathParser: t
    } = e;
    for (t.reset(); !t.isEnd(); ) {
      var {
        current: i
      } = t, a = i ? i.x : 0, s = i ? i.y : 0, o = t.next(), u = o.type, l = [];
      switch (o.type) {
        case F.MOVE_TO:
          this.pathM(t, l);
          break;
        case F.LINE_TO:
          u = this.pathL(t, l);
          break;
        case F.HORIZ_LINE_TO:
          u = this.pathH(t, l);
          break;
        case F.VERT_LINE_TO:
          u = this.pathV(t, l);
          break;
        case F.CURVE_TO:
          this.pathC(t, l);
          break;
        case F.SMOOTH_CURVE_TO:
          u = this.pathS(t, l);
          break;
        case F.QUAD_TO:
          this.pathQ(t, l);
          break;
        case F.SMOOTH_QUAD_TO:
          u = this.pathT(t, l);
          break;
        case F.ARC:
          l = this.pathA(t);
          break;
        case F.CLOSE_PATH:
          Y.pathZ(t);
          break;
      }
      o.type !== F.CLOSE_PATH ? r.push({
        type: u,
        points: l,
        start: {
          x: a,
          y: s
        },
        pathLength: this.calcLength(a, s, u, l)
      }) : r.push({
        type: F.CLOSE_PATH,
        points: [],
        pathLength: 0
      });
    }
    return r;
  }
  pathM(e, r) {
    var {
      x: t,
      y: i
    } = Y.pathM(e).point;
    r.push(t, i);
  }
  pathL(e, r) {
    var {
      x: t,
      y: i
    } = Y.pathL(e).point;
    return r.push(t, i), F.LINE_TO;
  }
  pathH(e, r) {
    var {
      x: t,
      y: i
    } = Y.pathH(e).point;
    return r.push(t, i), F.LINE_TO;
  }
  pathV(e, r) {
    var {
      x: t,
      y: i
    } = Y.pathV(e).point;
    return r.push(t, i), F.LINE_TO;
  }
  pathC(e, r) {
    var {
      point: t,
      controlPoint: i,
      currentPoint: a
    } = Y.pathC(e);
    r.push(t.x, t.y, i.x, i.y, a.x, a.y);
  }
  pathS(e, r) {
    var {
      point: t,
      controlPoint: i,
      currentPoint: a
    } = Y.pathS(e);
    return r.push(t.x, t.y, i.x, i.y, a.x, a.y), F.CURVE_TO;
  }
  pathQ(e, r) {
    var {
      controlPoint: t,
      currentPoint: i
    } = Y.pathQ(e);
    r.push(t.x, t.y, i.x, i.y);
  }
  pathT(e, r) {
    var {
      controlPoint: t,
      currentPoint: i
    } = Y.pathT(e);
    return r.push(t.x, t.y, i.x, i.y), F.QUAD_TO;
  }
  pathA(e) {
    var {
      rX: r,
      rY: t,
      sweepFlag: i,
      xAxisRotation: a,
      centp: s,
      a1: o,
      ad: u
    } = Y.pathA(e);
    return i === 0 && u > 0 && (u -= 2 * Math.PI), i === 1 && u < 0 && (u += 2 * Math.PI), [s.x, s.y, r, t, o, u, a, i];
  }
  calcLength(e, r, t, i) {
    var a = 0, s = null, o = null, u = 0;
    switch (t) {
      case F.LINE_TO:
        return this.getLineLength(e, r, i[0], i[1]);
      case F.CURVE_TO:
        for (a = 0, s = this.getPointOnCubicBezier(0, e, r, i[0], i[1], i[2], i[3], i[4], i[5]), u = 0.01; u <= 1; u += 0.01)
          o = this.getPointOnCubicBezier(u, e, r, i[0], i[1], i[2], i[3], i[4], i[5]), a += this.getLineLength(s.x, s.y, o.x, o.y), s = o;
        return a;
      case F.QUAD_TO:
        for (a = 0, s = this.getPointOnQuadraticBezier(0, e, r, i[0], i[1], i[2], i[3]), u = 0.01; u <= 1; u += 0.01)
          o = this.getPointOnQuadraticBezier(u, e, r, i[0], i[1], i[2], i[3]), a += this.getLineLength(s.x, s.y, o.x, o.y), s = o;
        return a;
      case F.ARC: {
        a = 0;
        var l = i[4], h = i[5], c = i[4] + h, v = Math.PI / 180;
        if (Math.abs(l - c) < v && (v = Math.abs(l - c)), s = this.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], l, 0), h < 0)
          for (u = l - v; u > c; u -= v)
            o = this.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], u, 0), a += this.getLineLength(s.x, s.y, o.x, o.y), s = o;
        else
          for (u = l + v; u < c; u += v)
            o = this.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], u, 0), a += this.getLineLength(s.x, s.y, o.x, o.y), s = o;
        return o = this.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], c, 0), a += this.getLineLength(s.x, s.y, o.x, o.y), a;
      }
    }
    return 0;
  }
  getPointOnLine(e, r, t, i, a) {
    var s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : r, o = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : t, u = (a - t) / (i - r + ir), l = Math.sqrt(e * e / (1 + u * u));
    i < r && (l *= -1);
    var h = u * l, c = null;
    if (i === r)
      c = {
        x: s,
        y: o + h
      };
    else if ((o - t) / (s - r + ir) === u)
      c = {
        x: s + l,
        y: o + h
      };
    else {
      var v = 0, f = 0, g = this.getLineLength(r, t, i, a);
      if (g < ir)
        return null;
      var d = (s - r) * (i - r) + (o - t) * (a - t);
      d /= g * g, v = r + d * (i - r), f = t + d * (a - t);
      var p = this.getLineLength(s, o, v, f), y = Math.sqrt(e * e - p * p);
      l = Math.sqrt(y * y / (1 + u * u)), i < r && (l *= -1), h = u * l, c = {
        x: v + l,
        y: f + h
      };
    }
    return c;
  }
  getPointOnPath(e) {
    var r = this.getPathLength(), t = 0, i = null;
    if (e < -5e-5 || e - 5e-5 > r)
      return null;
    var {
      dataArray: a
    } = this;
    for (var s of a) {
      if (s && (s.pathLength < 5e-5 || t + s.pathLength + 5e-5 < e)) {
        t += s.pathLength;
        continue;
      }
      var o = e - t, u = 0;
      switch (s.type) {
        case F.LINE_TO:
          i = this.getPointOnLine(o, s.start.x, s.start.y, s.points[0], s.points[1], s.start.x, s.start.y);
          break;
        case F.ARC: {
          var l = s.points[4], h = s.points[5], c = s.points[4] + h;
          if (u = l + o / s.pathLength * h, h < 0 && u < c || h >= 0 && u > c)
            break;
          i = this.getPointOnEllipticalArc(s.points[0], s.points[1], s.points[2], s.points[3], u, s.points[6]);
          break;
        }
        case F.CURVE_TO:
          u = o / s.pathLength, u > 1 && (u = 1), i = this.getPointOnCubicBezier(u, s.start.x, s.start.y, s.points[0], s.points[1], s.points[2], s.points[3], s.points[4], s.points[5]);
          break;
        case F.QUAD_TO:
          u = o / s.pathLength, u > 1 && (u = 1), i = this.getPointOnQuadraticBezier(u, s.start.x, s.start.y, s.points[0], s.points[1], s.points[2], s.points[3]);
          break;
      }
      if (i)
        return i;
      break;
    }
    return null;
  }
  getLineLength(e, r, t, i) {
    return Math.sqrt((t - e) * (t - e) + (i - r) * (i - r));
  }
  getPathLength() {
    return this.pathLength === -1 && (this.pathLength = this.dataArray.reduce((e, r) => r.pathLength > 0 ? e + r.pathLength : e, 0)), this.pathLength;
  }
  getPointOnCubicBezier(e, r, t, i, a, s, o, u, l) {
    var h = u * Fu(e) + s * Uu(e) + i * Gu(e) + r * $u(e), c = l * Fu(e) + o * Uu(e) + a * Gu(e) + t * $u(e);
    return {
      x: h,
      y: c
    };
  }
  getPointOnQuadraticBezier(e, r, t, i, a, s, o) {
    var u = s * zu(e) + i * Hu(e) + r * Wu(e), l = o * zu(e) + a * Hu(e) + t * Wu(e);
    return {
      x: u,
      y: l
    };
  }
  getPointOnEllipticalArc(e, r, t, i, a, s) {
    var o = Math.cos(s), u = Math.sin(s), l = {
      x: t * Math.cos(a),
      y: i * Math.sin(a)
    };
    return {
      x: e + (l.x * o - l.y * u),
      y: r + (l.x * u + l.y * o)
    };
  }
  // TODO need some optimisations. possibly build cache only for curved segments?
  buildEquidistantCache(e, r) {
    var t = this.getPathLength(), i = r || 0.25, a = e || t / 100;
    if (!this.equidistantCache || this.equidistantCache.step !== a || this.equidistantCache.precision !== i) {
      this.equidistantCache = {
        step: a,
        precision: i,
        points: []
      };
      for (var s = 0, o = 0; o <= t; o += i) {
        var u = this.getPointOnPath(o), l = this.getPointOnPath(o + i);
        !u || !l || (s += this.getLineLength(u.x, u.y, l.x, l.y), s >= a && (this.equidistantCache.points.push({
          x: u.x,
          y: u.y,
          distance: o
        }), s -= a));
      }
    }
  }
  getEquidistantPointOnPath(e, r, t) {
    if (this.buildEquidistantCache(r, t), e < 0 || e - this.getPathLength() > 5e-5)
      return null;
    var i = Math.round(e / this.getPathLength() * (this.equidistantCache.points.length - 1));
    return this.equidistantCache.points[i] || null;
  }
}
var xc = /^\s*data:(([^/,;]+\/[^/,;]+)(?:;([^,;=]+=[^,;=]+))?)?(?:;(base64))?,(.*)$/i;
class Tc extends tr {
  constructor(e, r, t) {
    super(e, r, t), this.type = "image", this.loaded = !1;
    var i = this.getHrefAttribute().getString();
    if (i) {
      var a = i.endsWith(".svg") || /^\s*data:image\/svg\+xml/i.test(i);
      e.images.push(this), a ? this.loadSvg(i) : this.loadImage(i), this.isSvg = a;
    }
  }
  loadImage(e) {
    var r = this;
    return Be(function* () {
      try {
        var t = yield r.document.createImage(e);
        r.image = t;
      } catch (i) {
        console.error('Error while loading image "'.concat(e, '":'), i);
      }
      r.loaded = !0;
    })();
  }
  loadSvg(e) {
    var r = this;
    return Be(function* () {
      var t = xc.exec(e);
      if (t) {
        var i = t[5];
        t[4] === "base64" ? r.image = atob(i) : r.image = decodeURIComponent(i);
      } else
        try {
          var a = yield r.document.fetch(e), s = yield a.text();
          r.image = s;
        } catch (o) {
          console.error('Error while loading image "'.concat(e, '":'), o);
        }
      r.loaded = !0;
    })();
  }
  renderChildren(e) {
    var {
      document: r,
      image: t,
      loaded: i
    } = this, a = this.getAttribute("x").getPixels("x"), s = this.getAttribute("y").getPixels("y"), o = this.getStyle("width").getPixels("x"), u = this.getStyle("height").getPixels("y");
    if (!(!i || !t || !o || !u)) {
      if (e.save(), e.translate(a, s), this.isSvg) {
        var l = r.canvg.forkString(e, this.image, {
          ignoreMouse: !0,
          ignoreAnimation: !0,
          ignoreDimensions: !0,
          ignoreClear: !0,
          offsetX: 0,
          offsetY: 0,
          scaleWidth: o,
          scaleHeight: u
        });
        l.document.documentElement.parent = this, l.render();
      } else {
        var h = this.image;
        r.setViewBox({
          ctx: e,
          aspectRatio: this.getAttribute("preserveAspectRatio").getString(),
          width: o,
          desiredWidth: h.width,
          height: u,
          desiredHeight: h.height
        }), this.loaded && (typeof h.complete > "u" || h.complete) && e.drawImage(h, 0, 0);
      }
      e.restore();
    }
  }
  getBoundingBox() {
    var e = this.getAttribute("x").getPixels("x"), r = this.getAttribute("y").getPixels("y"), t = this.getStyle("width").getPixels("x"), i = this.getStyle("height").getPixels("y");
    return new Pe(e, r, e + t, r + i);
  }
}
class Oc extends tr {
  constructor() {
    super(...arguments), this.type = "symbol";
  }
  render(e) {
  }
}
class Sc {
  constructor(e) {
    this.document = e, this.loaded = !1, e.fonts.push(this);
  }
  load(e, r) {
    var t = this;
    return Be(function* () {
      try {
        var {
          document: i
        } = t, a = yield i.canvg.parser.load(r), s = a.getElementsByTagName("font");
        Array.from(s).forEach((o) => {
          var u = i.createElement(o);
          i.definitions[e] = u;
        });
      } catch (o) {
        console.error('Error while loading font "'.concat(r, '":'), o);
      }
      t.loaded = !0;
    })();
  }
}
class Fl extends K {
  constructor(e, r, t) {
    super(e, r, t), this.type = "style";
    var i = sr(
      Array.from(r.childNodes).map((s) => s.textContent).join("").replace(/(\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm, "").replace(/@import.*;/g, "")
      // remove imports
    ), a = i.split("}");
    a.forEach((s) => {
      var o = s.trim();
      if (o) {
        var u = o.split("{"), l = u[0].split(","), h = u[1].split(";");
        l.forEach((c) => {
          var v = c.trim();
          if (v) {
            var f = e.styles[v] || {};
            if (h.forEach((p) => {
              var y = p.indexOf(":"), m = p.substr(0, y).trim(), b = p.substr(y + 1, p.length - y).trim();
              m && b && (f[m] = new D(e, m, b));
            }), e.styles[v] = f, e.stylesSpecificity[v] = kf(v), v === "@font-face") {
              var g = f["font-family"].getString().replace(/"|'/g, ""), d = f.src.getString().split(",");
              d.forEach((p) => {
                if (p.indexOf('format("svg")') > 0) {
                  var y = _l(p);
                  y && new Sc(e).load(g, y);
                }
              });
            }
          }
        });
      }
    });
  }
}
Fl.parseExternalUrl = _l;
class Ec extends tr {
  constructor() {
    super(...arguments), this.type = "use";
  }
  setContext(e) {
    super.setContext(e);
    var r = this.getAttribute("x"), t = this.getAttribute("y");
    r.hasValue() && e.translate(r.getPixels("x"), 0), t.hasValue() && e.translate(0, t.getPixels("y"));
  }
  path(e) {
    var {
      element: r
    } = this;
    r && r.path(e);
  }
  renderChildren(e) {
    var {
      document: r,
      element: t
    } = this;
    if (t) {
      var i = t;
      if (t.type === "symbol" && (i = new br(r, null), i.attributes.viewBox = new D(r, "viewBox", t.getAttribute("viewBox").getString()), i.attributes.preserveAspectRatio = new D(r, "preserveAspectRatio", t.getAttribute("preserveAspectRatio").getString()), i.attributes.overflow = new D(r, "overflow", t.getAttribute("overflow").getString()), i.children = t.children, t.styles.opacity = new D(r, "opacity", this.calculateOpacity())), i.type === "svg") {
        var a = this.getStyle("width", !1, !0), s = this.getStyle("height", !1, !0);
        a.hasValue() && (i.attributes.width = new D(r, "width", a.getString())), s.hasValue() && (i.attributes.height = new D(r, "height", s.getString()));
      }
      var o = i.parent;
      i.parent = this, i.render(e), i.parent = o;
    }
  }
  getBoundingBox(e) {
    var {
      element: r
    } = this;
    return r ? r.getBoundingBox(e) : null;
  }
  elementTransform() {
    var {
      document: e,
      element: r
    } = this;
    return Qe.fromElement(e, r);
  }
  get element() {
    return this.cachedElement || (this.cachedElement = this.getHrefAttribute().getDefinition()), this.cachedElement;
  }
}
function Cr(n, e, r, t, i, a) {
  return n[r * t * 4 + e * 4 + a];
}
function wr(n, e, r, t, i, a, s) {
  n[r * t * 4 + e * 4 + a] = s;
}
function ie(n, e, r) {
  var t = n[e];
  return t * r;
}
function ke(n, e, r, t) {
  return e + Math.cos(n) * r + Math.sin(n) * t;
}
class Ul extends K {
  constructor(e, r, t) {
    super(e, r, t), this.type = "feColorMatrix";
    var i = ge(this.getAttribute("values").getString());
    switch (this.getAttribute("type").getString("matrix")) {
      // http://www.w3.org/TR/SVG/filters.html#feColorMatrixElement
      case "saturate": {
        var a = i[0];
        i = [0.213 + 0.787 * a, 0.715 - 0.715 * a, 0.072 - 0.072 * a, 0, 0, 0.213 - 0.213 * a, 0.715 + 0.285 * a, 0.072 - 0.072 * a, 0, 0, 0.213 - 0.213 * a, 0.715 - 0.715 * a, 0.072 + 0.928 * a, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
        break;
      }
      case "hueRotate": {
        var s = i[0] * Math.PI / 180;
        i = [ke(s, 0.213, 0.787, -0.213), ke(s, 0.715, -0.715, -0.715), ke(s, 0.072, -0.072, 0.928), 0, 0, ke(s, 0.213, -0.213, 0.143), ke(s, 0.715, 0.285, 0.14), ke(s, 0.072, -0.072, -0.283), 0, 0, ke(s, 0.213, -0.213, -0.787), ke(s, 0.715, -0.715, 0.715), ke(s, 0.072, 0.928, 0.072), 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
        break;
      }
      case "luminanceToAlpha":
        i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2125, 0.7154, 0.0721, 0, 0, 0, 0, 0, 0, 1];
        break;
    }
    this.matrix = i, this.includeOpacity = this.getAttribute("includeOpacity").hasValue();
  }
  apply(e, r, t, i, a) {
    for (var {
      includeOpacity: s,
      matrix: o
    } = this, u = e.getImageData(0, 0, i, a), l = 0; l < a; l++)
      for (var h = 0; h < i; h++) {
        var c = Cr(u.data, h, l, i, a, 0), v = Cr(u.data, h, l, i, a, 1), f = Cr(u.data, h, l, i, a, 2), g = Cr(u.data, h, l, i, a, 3), d = ie(o, 0, c) + ie(o, 1, v) + ie(o, 2, f) + ie(o, 3, g) + ie(o, 4, 1), p = ie(o, 5, c) + ie(o, 6, v) + ie(o, 7, f) + ie(o, 8, g) + ie(o, 9, 1), y = ie(o, 10, c) + ie(o, 11, v) + ie(o, 12, f) + ie(o, 13, g) + ie(o, 14, 1), m = ie(o, 15, c) + ie(o, 16, v) + ie(o, 17, f) + ie(o, 18, g) + ie(o, 19, 1);
        s && (d = 0, p = 0, y = 0, m *= g / 255), wr(u.data, h, l, i, a, 0, d), wr(u.data, h, l, i, a, 1, p), wr(u.data, h, l, i, a, 2, y), wr(u.data, h, l, i, a, 3, m);
      }
    e.clearRect(0, 0, i, a), e.putImageData(u, 0, 0);
  }
}
class $r extends K {
  constructor() {
    super(...arguments), this.type = "mask";
  }
  apply(e, r) {
    var {
      document: t
    } = this, i = this.getAttribute("x").getPixels("x"), a = this.getAttribute("y").getPixels("y"), s = this.getStyle("width").getPixels("x"), o = this.getStyle("height").getPixels("y");
    if (!s && !o) {
      var u = new Pe();
      this.children.forEach((g) => {
        u.addBoundingBox(g.getBoundingBox(e));
      }), i = Math.floor(u.x1), a = Math.floor(u.y1), s = Math.floor(u.width), o = Math.floor(u.height);
    }
    var l = this.removeStyles(r, $r.ignoreStyles), h = t.createCanvas(i + s, a + o), c = h.getContext("2d");
    t.screen.setDefaults(c), this.renderChildren(c), new Ul(t, {
      nodeType: 1,
      childNodes: [],
      attributes: [{
        nodeName: "type",
        value: "luminanceToAlpha"
      }, {
        nodeName: "includeOpacity",
        value: "true"
      }]
    }).apply(c, 0, 0, i + s, a + o);
    var v = t.createCanvas(i + s, a + o), f = v.getContext("2d");
    t.screen.setDefaults(f), r.render(f), f.globalCompositeOperation = "destination-in", f.fillStyle = c.createPattern(h, "no-repeat"), f.fillRect(0, 0, i + s, a + o), e.fillStyle = f.createPattern(v, "no-repeat"), e.fillRect(0, 0, i + s, a + o), this.restoreStyles(r, l);
  }
  render(e) {
  }
}
$r.ignoreStyles = ["mask", "transform", "clip-path"];
var Xu = () => {
};
class Rc extends K {
  constructor() {
    super(...arguments), this.type = "clipPath";
  }
  apply(e) {
    var {
      document: r
    } = this, t = Reflect.getPrototypeOf(e), {
      beginPath: i,
      closePath: a
    } = e;
    t && (t.beginPath = Xu, t.closePath = Xu), Reflect.apply(i, e, []), this.children.forEach((s) => {
      if (!(typeof s.path > "u")) {
        var o = typeof s.elementTransform < "u" ? s.elementTransform() : null;
        o || (o = Qe.fromElement(r, s)), o && o.apply(e), s.path(e), t && (t.closePath = a), o && o.unapply(e);
      }
    }), Reflect.apply(a, e, []), e.clip(), t && (t.beginPath = i, t.closePath = a);
  }
  render(e) {
  }
}
class zr extends K {
  constructor() {
    super(...arguments), this.type = "filter";
  }
  apply(e, r) {
    var {
      document: t,
      children: i
    } = this, a = r.getBoundingBox(e);
    if (a) {
      var s = 0, o = 0;
      i.forEach((y) => {
        var m = y.extraFilterDistance || 0;
        s = Math.max(s, m), o = Math.max(o, m);
      });
      var u = Math.floor(a.width), l = Math.floor(a.height), h = u + 2 * s, c = l + 2 * o;
      if (!(h < 1 || c < 1)) {
        var v = Math.floor(a.x), f = Math.floor(a.y), g = this.removeStyles(r, zr.ignoreStyles), d = t.createCanvas(h, c), p = d.getContext("2d");
        t.screen.setDefaults(p), p.translate(-v + s, -f + o), r.render(p), i.forEach((y) => {
          typeof y.apply == "function" && y.apply(p, 0, 0, h, c);
        }), e.drawImage(d, 0, 0, h, c, v - s, f - o, h, c), this.restoreStyles(r, g);
      }
    }
  }
  render(e) {
  }
}
zr.ignoreStyles = ["filter", "transform", "clip-path"];
class Cc extends K {
  constructor(e, r, t) {
    super(e, r, t), this.type = "feDropShadow", this.addStylesFromStyleDefinition();
  }
  apply(e, r, t, i, a) {
  }
}
class wc extends K {
  constructor() {
    super(...arguments), this.type = "feMorphology";
  }
  apply(e, r, t, i, a) {
  }
}
class Pc extends K {
  constructor() {
    super(...arguments), this.type = "feComposite";
  }
  apply(e, r, t, i, a) {
  }
}
class Ac extends K {
  constructor(e, r, t) {
    super(e, r, t), this.type = "feGaussianBlur", this.blurRadius = Math.floor(this.getAttribute("stdDeviation").getNumber()), this.extraFilterDistance = this.blurRadius;
  }
  apply(e, r, t, i, a) {
    var {
      document: s,
      blurRadius: o
    } = this, u = s.window ? s.window.document.body : null, l = e.canvas;
    l.id = s.getUniqueId(), u && (l.style.display = "none", u.appendChild(l)), Of(l, r, t, i, a, o), u && u.removeChild(l);
  }
}
class Ic extends K {
  constructor() {
    super(...arguments), this.type = "title";
  }
}
class Nc extends K {
  constructor() {
    super(...arguments), this.type = "desc";
  }
}
var _c = {
  svg: br,
  rect: kl,
  circle: tc,
  ellipse: ic,
  line: ac,
  polyline: Bl,
  polygon: nc,
  path: Y,
  pattern: sc,
  marker: oc,
  defs: uc,
  linearGradient: lc,
  radialGradient: hc,
  stop: fc,
  animate: on,
  animateColor: cc,
  animateTransform: vc,
  font: gc,
  "font-face": dc,
  "missing-glyph": pc,
  glyph: Ll,
  text: ze,
  tspan: Gr,
  tref: yc,
  a: mc,
  textPath: bc,
  image: Tc,
  g: sn,
  symbol: Oc,
  style: Fl,
  use: Ec,
  mask: $r,
  clipPath: Rc,
  filter: zr,
  feDropShadow: Cc,
  feMorphology: wc,
  feComposite: Pc,
  feColorMatrix: Ul,
  feGaussianBlur: Ac,
  title: Ic,
  desc: Nc
};
function Ku(n, e) {
  var r = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(n);
    e && (t = t.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function Mc(n) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ku(Object(r), !0).forEach(function(t) {
      nn(n, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : Ku(Object(r)).forEach(function(t) {
      Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return n;
}
function qc(n, e) {
  var r = document.createElement("canvas");
  return r.width = n, r.height = e, r;
}
function Dc(n) {
  return ka.apply(this, arguments);
}
function ka() {
  return ka = Be(function* (n) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = document.createElement("img");
    return e && (r.crossOrigin = "Anonymous"), new Promise((t, i) => {
      r.onload = () => {
        t(r);
      }, r.onerror = (a, s, o, u, l) => {
        i(l);
      }, r.src = n;
    });
  }), ka.apply(this, arguments);
}
class $e {
  constructor(e) {
    var {
      rootEmSize: r = 12,
      emSize: t = 12,
      createCanvas: i = $e.createCanvas,
      createImage: a = $e.createImage,
      anonymousCrossOrigin: s
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.canvg = e, this.definitions = {}, this.styles = {}, this.stylesSpecificity = {}, this.images = [], this.fonts = [], this.emSizeStack = [], this.uniqueId = 0, this.screen = e.screen, this.rootEmSize = r, this.emSize = t, this.createCanvas = i, this.createImage = this.bindCreateImage(a, s), this.screen.wait(this.isImagesLoaded.bind(this)), this.screen.wait(this.isFontsLoaded.bind(this));
  }
  bindCreateImage(e, r) {
    return typeof r == "boolean" ? (t, i) => e(t, typeof i == "boolean" ? i : r) : e;
  }
  get window() {
    return this.screen.window;
  }
  get fetch() {
    return this.screen.fetch;
  }
  get ctx() {
    return this.screen.ctx;
  }
  get emSize() {
    var {
      emSizeStack: e
    } = this;
    return e[e.length - 1];
  }
  set emSize(e) {
    var {
      emSizeStack: r
    } = this;
    r.push(e);
  }
  popEmSize() {
    var {
      emSizeStack: e
    } = this;
    e.pop();
  }
  getUniqueId() {
    return "canvg".concat(++this.uniqueId);
  }
  isImagesLoaded() {
    return this.images.every((e) => e.loaded);
  }
  isFontsLoaded() {
    return this.fonts.every((e) => e.loaded);
  }
  createDocumentElement(e) {
    var r = this.createElement(e.documentElement);
    return r.root = !0, r.addStylesFromStyleDefinition(), this.documentElement = r, r;
  }
  createElement(e) {
    var r = e.nodeName.replace(/^[^:]+:/, ""), t = $e.elementTypes[r];
    return typeof t < "u" ? new t(this, e) : new Kf(this, e);
  }
  createTextNode(e) {
    return new rc(this, e);
  }
  setViewBox(e) {
    this.screen.setViewBox(Mc({
      document: this
    }, e));
  }
}
$e.createCanvas = qc;
$e.createImage = Dc;
$e.elementTypes = _c;
function Qu(n, e) {
  var r = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(n);
    e && (t = t.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function Xe(n) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Qu(Object(r), !0).forEach(function(t) {
      nn(n, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : Qu(Object(r)).forEach(function(t) {
      Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return n;
}
class fr {
  /**
   * Main constructor.
   * @param ctx - Rendering context.
   * @param svg - SVG Document.
   * @param options - Rendering options.
   */
  constructor(e, r) {
    var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.parser = new _a(t), this.screen = new Ur(e, t), this.options = t;
    var i = new $e(this, t), a = i.createDocumentElement(r);
    this.document = i, this.documentElement = a;
  }
  /**
   * Create Canvg instance from SVG source string or URL.
   * @param ctx - Rendering context.
   * @param svg - SVG source string or URL.
   * @param options - Rendering options.
   * @returns Canvg instance.
   */
  static from(e, r) {
    var t = arguments;
    return Be(function* () {
      var i = t.length > 2 && t[2] !== void 0 ? t[2] : {}, a = new _a(i), s = yield a.parse(r);
      return new fr(e, s, i);
    })();
  }
  /**
   * Create Canvg instance from SVG source string.
   * @param ctx - Rendering context.
   * @param svg - SVG source string.
   * @param options - Rendering options.
   * @returns Canvg instance.
   */
  static fromString(e, r) {
    var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = new _a(t), a = i.parseFromString(r);
    return new fr(e, a, t);
  }
  /**
   * Create new Canvg instance with inherited options.
   * @param ctx - Rendering context.
   * @param svg - SVG source string or URL.
   * @param options - Rendering options.
   * @returns Canvg instance.
   */
  fork(e, r) {
    var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return fr.from(e, r, Xe(Xe({}, this.options), t));
  }
  /**
   * Create new Canvg instance with inherited options.
   * @param ctx - Rendering context.
   * @param svg - SVG source string.
   * @param options - Rendering options.
   * @returns Canvg instance.
   */
  forkString(e, r) {
    var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return fr.fromString(e, r, Xe(Xe({}, this.options), t));
  }
  /**
   * Document is ready promise.
   * @returns Ready promise.
   */
  ready() {
    return this.screen.ready();
  }
  /**
   * Document is ready value.
   * @returns Is ready or not.
   */
  isReady() {
    return this.screen.isReady();
  }
  /**
   * Render only first frame, ignoring animations and mouse.
   * @param options - Rendering options.
   */
  render() {
    var e = arguments, r = this;
    return Be(function* () {
      var t = e.length > 0 && e[0] !== void 0 ? e[0] : {};
      r.start(Xe({
        enableRedraw: !0,
        ignoreAnimation: !0,
        ignoreMouse: !0
      }, t)), yield r.ready(), r.stop();
    })();
  }
  /**
   * Start rendering.
   * @param options - Render options.
   */
  start() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, {
      documentElement: r,
      screen: t,
      options: i
    } = this;
    t.start(r, Xe(Xe({
      enableRedraw: !0
    }, i), e));
  }
  /**
   * Stop rendering.
   */
  stop() {
    this.screen.stop();
  }
  /**
   * Resize SVG to fit in given size.
   * @param width
   * @param height
   * @param preserveAspectRatio
   */
  resize(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    this.documentElement.resize(e, r, t);
  }
}
export {
  mc as AElement,
  cc as AnimateColorElement,
  on as AnimateElement,
  vc as AnimateTransformElement,
  Pe as BoundingBox,
  Fu as CB1,
  Uu as CB2,
  Gu as CB3,
  $u as CB4,
  fr as Canvg,
  tc as CircleElement,
  Rc as ClipPathElement,
  uc as DefsElement,
  Nc as DescElement,
  $e as Document,
  K as Element,
  ic as EllipseElement,
  Ul as FeColorMatrixElement,
  Pc as FeCompositeElement,
  Cc as FeDropShadowElement,
  Ac as FeGaussianBlurElement,
  wc as FeMorphologyElement,
  zr as FilterElement,
  oe as Font,
  gc as FontElement,
  dc as FontFaceElement,
  sn as GElement,
  Ll as GlyphElement,
  jl as GradientElement,
  Tc as ImageElement,
  ac as LineElement,
  lc as LinearGradientElement,
  oc as MarkerElement,
  $r as MaskElement,
  Dl as Matrix,
  pc as MissingGlyphElement,
  jf as Mouse,
  ir as PSEUDO_ZERO,
  _a as Parser,
  Y as PathElement,
  F as PathParser,
  sc as PatternElement,
  J as Point,
  nc as PolygonElement,
  Bl as PolylineElement,
  D as Property,
  zu as QB1,
  Hu as QB2,
  Wu as QB3,
  hc as RadialGradientElement,
  kl as RectElement,
  tr as RenderedElement,
  $f as Rotate,
  br as SVGElement,
  Sc as SVGFontLoader,
  zf as Scale,
  Ur as Screen,
  Vl as Skew,
  Hf as SkewX,
  Wf as SkewY,
  fc as StopElement,
  Fl as StyleElement,
  Oc as SymbolElement,
  yc as TRefElement,
  Gr as TSpanElement,
  ze as TextElement,
  bc as TextPathElement,
  Ic as TitleElement,
  Qe as Transform,
  Gf as Translate,
  Kf as UnknownElement,
  Ec as UseElement,
  Bf as ViewPort,
  sr as compressSpaces,
  fr as default,
  kf as getSelectorSpecificity,
  Af as normalizeAttributeName,
  If as normalizeColor,
  _l as parseExternalUrl,
  Lc as presets,
  ge as toNumbers,
  Cf as trimLeft,
  wf as trimRight,
  Bu as vectorMagnitude,
  ju as vectorsAngle,
  La as vectorsRatio
};
