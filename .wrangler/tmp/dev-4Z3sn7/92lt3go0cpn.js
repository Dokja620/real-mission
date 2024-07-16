var __require = /* @__PURE__ */ ((x3) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x3, {
  get: (a, b2) => (typeof require !== "undefined" ? require : a)[b2]
}) : x3)(function(x3) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x3 + '" is not supported');
});

// .wrangler/tmp/bundle-2OvXCc/checked-fetch.js
var urls = /* @__PURE__ */ new Set();
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
globalThis.fetch = new Proxy(globalThis.fetch, {
  apply(target, thisArg, argArray) {
    const [request, init] = argArray;
    checkURL(request, init);
    return Reflect.apply(target, thisArg, argArray);
  }
});

// .wrangler/tmp/pages-Vfo6js/bundledWorker-0.8655599205135998.mjs
var __require2 = /* @__PURE__ */ ((x3) => typeof __require !== "undefined" ? __require : typeof Proxy !== "undefined" ? new Proxy(x3, {
  get: (a, b2) => (typeof __require !== "undefined" ? __require : a)[b2]
}) : x3)(function(x3) {
  if (typeof __require !== "undefined")
    return __require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x3 + '" is not supported');
});
var urls2 = /* @__PURE__ */ new Set();
function checkURL2(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls2.has(url.toString())) {
      urls2.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
globalThis.fetch = new Proxy(globalThis.fetch, {
  apply(target, thisArg, argArray) {
    const [request, init] = argArray;
    checkURL2(request, init);
    return Reflect.apply(target, thisArg, argArray);
  }
});
var notFounds = [
  [
    "/",
    '<html>\n<head>\n  <meta charset="utf-8">\n  <meta http-equiv="Status" content="404">\n  <title>404 Resource Not Found</title>\n  <meta name="viewport" content="width=device-width,initial-scale=1">\n  <style>\n    body { color: #006ce9; background-color: #fafafa; padding: 30px; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Roboto, sans-serif; }\n    p { max-width: 600px; margin: 60px auto 30px auto; background: white; border-radius: 4px; box-shadow: 0px 0px 50px -20px #006ce9; overflow: hidden; }\n    strong { display: inline-block; padding: 15px; background: #006ce9; color: white; }\n    span { display: inline-block; padding: 15px; }\n  </style>\n</head>\n<body><p><strong>404</strong> <span>Resource Not Found</span></p></body>\n</html>'
  ]
];
function getNotFound(p2) {
  for (const r of notFounds) {
    if (p2.startsWith(r[0])) {
      return r[1];
    }
  }
  return "Resource Not Found";
}
var staticPaths = /* @__PURE__ */ new Set(["/_headers", "/_redirects", "/favicon.svg", "/fonts/Arsilon.otf", "/fonts/poppins-v21-latin-500.svg", "/fonts/poppins-v21-latin-500.ttf", "/fonts/poppins-v21-latin-500.woff", "/fonts/poppins-v21-latin-500.woff2", "/fonts/poppins-v21-latin-600.svg", "/fonts/poppins-v21-latin-600.ttf", "/fonts/poppins-v21-latin-600.woff", "/fonts/poppins-v21-latin-600.woff2", "/fonts/poppins-v21-latin-700.svg", "/fonts/poppins-v21-latin-700.ttf", "/fonts/poppins-v21-latin-700.woff", "/fonts/poppins-v21-latin-700.woff2", "/fonts/poppins-v21-latin-800.svg", "/fonts/poppins-v21-latin-800.ttf", "/fonts/poppins-v21-latin-800.woff", "/fonts/poppins-v21-latin-800.woff2", "/fonts/poppins-v21-latin-900.svg", "/fonts/poppins-v21-latin-900.ttf", "/fonts/poppins-v21-latin-900.woff", "/fonts/poppins-v21-latin-900.woff2", "/fonts/poppins-v21-latin-regular.svg", "/fonts/poppins-v21-latin-regular.ttf", "/fonts/poppins-v21-latin-regular.woff", "/fonts/poppins-v21-latin-regular.woff2", "/logo.webp", "/manifest.json", "/media/home/001.webp", "/media/home/finality/001.webp", "/media/home/hero.webp", "/media/icons/english.svg", "/media/icons/facebook.svg", "/media/icons/french.svg", "/media/icons/gmail.svg", "/media/icons/logo-h-f.webp", "/media/icons/whatsapp.svg", "/media/strategy/001.webp", "/media/strategy/002.webp", "/media/strategy/003.webp", "/q-manifest.json", "/qwik-prefetch-service-worker.js", "/robots.txt", "/service-worker.js", "/sitemap.xml"]);
function isStaticPath(method, url) {
  if (method.toUpperCase() !== "GET") {
    return false;
  }
  const p2 = url.pathname;
  if (p2.startsWith("/build/")) {
    return true;
  }
  if (p2.startsWith("/assets/")) {
    return true;
  }
  if (staticPaths.has(p2)) {
    return true;
  }
  if (p2.endsWith("/q-data.json")) {
    const pWithoutQdata = p2.replace(/\/q-data.json$/, "");
    if (staticPaths.has(pWithoutQdata + "/")) {
      return true;
    }
    if (staticPaths.has(pWithoutQdata)) {
      return true;
    }
  }
  return false;
}
var yt = (t2) => t2 && typeof t2.nodeType == "number";
var ps = (t2) => t2.nodeType === 9;
var St = (t2) => t2.nodeType === 1;
var vt = (t2) => {
  const e = t2.nodeType;
  return e === 1 || e === 111;
};
var Or = (t2) => {
  const e = t2.nodeType;
  return e === 1 || e === 111 || e === 3;
};
var et = (t2) => t2.nodeType === 111;
var rn = (t2) => t2.nodeType === 3;
var ee = (t2) => t2.nodeType === 8;
var Et = (t2, ...e) => $n(false, t2, ...e);
var hs = (t2, ...e) => {
  throw $n(false, t2, ...e);
};
var on = (t2, ...e) => $n(true, t2, ...e);
var at = () => {
};
var Dr = (t2) => t2;
var $n = (t2, e, ...n) => {
  const s = e instanceof Error ? e : new Error(e);
  return console.error("%cQWIK ERROR", "", s.message, ...Dr(n), s.stack), t2 && setTimeout(() => {
    throw s;
  }, 0), s;
};
var qe = (t2) => `Code(${t2}) https://github.com/QwikDev/qwik/blob/main/packages/qwik/src/core/error/error.ts#L${8 + t2}`;
var P = (t2, ...e) => {
  const n = qe(t2, ...e);
  return on(n, ...e);
};
var Cr = () => ({ isServer: true, importSymbol(t2, e, n) {
  var o;
  {
    const i = Ir(n), $3 = (o = globalThis.__qwik_reg_symbols) == null ? void 0 : o.get(i);
    if ($3)
      return $3;
  }
  if (!e)
    throw P(31, n);
  if (!t2)
    throw P(30, e, n);
  const s = Fr(t2.ownerDocument, t2, e).toString(), r = new URL(s);
  return r.hash = "", import(r.href).then((i) => i[n]);
}, raf: (t2) => new Promise((e) => {
  requestAnimationFrame(() => {
    e(t2());
  });
}), nextTick: (t2) => new Promise((e) => {
  setTimeout(() => {
    e(t2());
  });
}), chunkForSymbol: (t2, e) => [t2, e ?? "_"] });
var Fr = (t2, e, n) => {
  const s = t2.baseURI, r = new URL(e.getAttribute("q:base") ?? s, s);
  return new URL(n, r);
};
var cn = Cr();
var xc = (t2) => cn = t2;
var Ie = () => cn;
var nt = () => cn.isServer;
var ne = (t2) => {
  const e = Object.getPrototypeOf(t2);
  return e === Object.prototype || e === null;
};
var $t = (t2) => !!t2 && typeof t2 == "object";
var A = (t2) => Array.isArray(t2);
var ut = (t2) => typeof t2 == "string";
var W = (t2) => typeof t2 == "function";
var L = (t2) => t2 && typeof t2.then == "function";
var Re = (t2, e, n) => {
  try {
    const s = t2();
    return L(s) ? s.then(e, n) : e(s);
  } catch (s) {
    return n(s);
  }
};
var k = (t2, e) => L(t2) ? t2.then(e) : e(t2);
var ln = (t2) => t2.some(L) ? Promise.all(t2) : t2;
var Rt = (t2) => t2.length > 0 ? Promise.all(t2) : t2;
var ms = (t2) => t2 != null;
var Qr = (t2) => new Promise((e) => {
  setTimeout(e, t2);
});
var rt = [];
var O = {};
var se = (t2) => typeof document < "u" ? document : t2.nodeType === 9 ? t2 : t2.ownerDocument;
var Wr = "q:renderFn";
var G = "q:slot";
var gs = "q:s";
var Ae = "q:style";
var Ur = "q:sstyle";
var ys = "q:instance";
var Ss = (t2, e) => t2["qFuncs_" + e] || [];
var Br = "q:id";
var Ge = Symbol("proxy target");
var At = Symbol("proxy flags");
var tt = Symbol("proxy manager");
var M = Symbol("IMMUTABLE");
var Me = "_qc_";
var V = (t2, e, n) => t2.setAttribute(e, n);
var Z = (t2, e) => t2.getAttribute(e);
var an = (t2) => t2.replace(/([A-Z])/g, "-$1").toLowerCase();
var Hr = (t2) => t2.replace(/-./g, (e) => e[1].toUpperCase());
var Jr = /^(on|window:|document:)/;
var vs = "preventdefault:";
var un = (t2) => t2.endsWith("$") && Jr.test(t2);
var fn = (t2) => {
  if (t2.length === 0)
    return rt;
  if (t2.length === 1) {
    const n = t2[0];
    return [[n[0], [n[1]]]];
  }
  const e = [];
  for (let n = 0; n < t2.length; n++) {
    const s = t2[n][0];
    e.includes(s) || e.push(s);
  }
  return e.map((n) => [n, t2.filter((s) => s[0] === n).map((s) => s[1])]);
};
var dn = (t2, e, n, s) => {
  if (e.endsWith("$"), e = Ke(e.slice(0, -1)), n)
    if (A(n)) {
      const r = n.flat(1 / 0).filter((o) => o != null).map((o) => [e, Jn(o, s)]);
      t2.push(...r);
    } else
      t2.push([e, Jn(n, s)]);
  return e;
};
var Hn = ["on", "window:on", "document:on"];
var Vr = ["on", "on-window", "on-document"];
var Ke = (t2) => {
  let e = "on";
  for (let n = 0; n < Hn.length; n++) {
    const s = Hn[n];
    if (t2.startsWith(s)) {
      e = Vr[n], t2 = t2.slice(s.length);
      break;
    }
  }
  return e + ":" + (t2 = t2.startsWith("-") ? an(t2.slice(1)) : t2.toLowerCase());
};
var Jn = (t2, e) => (t2.$setContainer$(e), t2);
var Gr = (t2, e) => {
  const n = t2.$element$.attributes, s = [];
  for (let r = 0; r < n.length; r++) {
    const { name: o, value: i } = n.item(r);
    if (o.startsWith("on:") || o.startsWith("on-window:") || o.startsWith("on-document:")) {
      const $3 = i.split(`
`);
      for (const c2 of $3) {
        const l = Ce(c2, e);
        l.$capture$ && wr(l, t2), s.push([o, l]);
      }
    }
  }
  return s;
};
var Kr = (t2, e) => {
  bs(ws(t2, void 0), e);
};
var Vn = (t2, e) => {
  bs(ws(t2, "document"), e);
};
var ws = (t2, e) => {
  const n = e !== void 0 ? e + ":" : "";
  return Array.isArray(t2) ? t2.map((s) => `${n}on-${s}`) : `${n}on-${t2}`;
};
var bs = (t2, e) => {
  if (e) {
    const n = qn(), s = U(n.$hostElement$, n.$renderCtx$.$static$.$containerState$);
    typeof t2 == "string" ? s.li.push([Ke(t2), e]) : s.li.push(...t2.map((r) => [Ke(r), e])), s.$flags$ |= ht;
  }
};
var Xr = (t2, e, n, s) => {
  typeof CustomEvent == "function" && t2 && t2.dispatchEvent(new CustomEvent(e, { detail: n, bubbles: s, composed: s }));
};
var pn = (t2, e, n = 0) => e.$proxyMap$.get(t2) || (n !== 0 && Pe(t2, n), re(t2, e, void 0));
var re = (t2, e, n) => {
  le(t2), e.$proxyMap$.has(t2);
  const s = e.$subsManager$.$createManager$(n), r = new Proxy(t2, new Es(e, s));
  return e.$proxyMap$.set(t2, r), r;
};
var Ne = () => {
  const t2 = {};
  return Pe(t2, 2), t2;
};
var Pe = (t2, e) => {
  Object.defineProperty(t2, At, { value: e, enumerable: false });
};
var Es = class {
  constructor(e, n) {
    this.$containerState$ = e, this.$manager$ = n;
  }
  deleteProperty(e, n) {
    if (2 & e[At])
      throw P(17);
    return typeof n == "string" && delete e[n] && (this.$manager$.$notifySubs$(A(e) ? void 0 : n), true);
  }
  get(e, n) {
    var l;
    if (typeof n == "symbol")
      return n === Ge ? e : n === tt ? this.$manager$ : e[n];
    const s = e[At] ?? 0, r = Y(), o = !!(1 & s), i = e["$$" + n];
    let $3, c2;
    if (r && ($3 = r.$subscriber$), !(2 & s) || n in e && !Yr((l = e[M]) == null ? void 0 : l[n]) || ($3 = null), i ? (c2 = i.value, $3 = null) : c2 = e[n], $3) {
      const a = A(e);
      this.$manager$.$addSub$($3, a ? void 0 : n);
    }
    return o ? Zr(c2, this.$containerState$) : c2;
  }
  set(e, n, s) {
    if (typeof n == "symbol")
      return e[n] = s, true;
    const r = e[At] ?? 0;
    if (2 & r)
      throw P(17);
    const o = 1 & r ? le(s) : s;
    if (A(e))
      return e[n] = o, this.$manager$.$notifySubs$(), true;
    const i = e[n];
    return e[n] = o, i !== o && this.$manager$.$notifySubs$(n), true;
  }
  has(e, n) {
    if (n === Ge)
      return true;
    const s = Object.prototype.hasOwnProperty;
    return !!s.call(e, n) || !(typeof n != "string" || !s.call(e, "$$" + n));
  }
  ownKeys(e) {
    if (!(2 & (e[At] ?? 0))) {
      let s = null;
      const r = Y();
      r && (s = r.$subscriber$), s && this.$manager$.$addSub$(s);
    }
    return A(e) ? Reflect.ownKeys(e) : Reflect.ownKeys(e).map((s) => typeof s == "string" && s.startsWith("$$") ? s.slice(2) : s);
  }
  getOwnPropertyDescriptor(e, n) {
    return A(e) || typeof n == "symbol" ? Object.getOwnPropertyDescriptor(e, n) : { enumerable: true, configurable: true };
  }
};
var Yr = (t2) => t2 === M || C(t2);
var Zr = (t2, e) => {
  if ($t(t2)) {
    if (Object.isFrozen(t2))
      return t2;
    const n = le(t2);
    if (n !== t2 || _r(n))
      return t2;
    if (ne(n) || A(n))
      return e.$proxyMap$.get(n) || pn(n, e, 1);
  }
  return t2;
};
var jr = (t2, e = 0) => {
  for (let n = 0; n < t2.length; n++)
    e = (e << 5) - e + t2.charCodeAt(n), e |= 0;
  return Number(Math.abs(e)).toString(36);
};
var to = (t2, e) => `${jr(t2.$hash$)}-${e}`;
var xs = (t2) => {
  const e = t2.join("|");
  if (e.length > 0)
    return e;
};
var Ft = () => {
  const t2 = qn(), e = U(t2.$hostElement$, t2.$renderCtx$.$static$.$containerState$), n = e.$seq$ || (e.$seq$ = []), s = t2.$i$++;
  return { val: n[s], set: (r) => n[s] = r, i: s, iCtx: t2, elCtx: e };
};
var ct = (t2) => Object.freeze({ id: an(t2) });
var lt = (t2, e) => {
  const { val: n, set: s, elCtx: r } = Ft();
  if (n !== void 0)
    return;
  (r.$contexts$ || (r.$contexts$ = /* @__PURE__ */ new Map())).set(t2.id, e), s(true);
};
var ze = (t2, e) => {
  const { val: n, set: s, iCtx: r, elCtx: o } = Ft();
  if (n !== void 0)
    return n;
  const i = _s(t2, o, r.$renderCtx$.$static$.$containerState$);
  if (typeof e == "function")
    return s(D(void 0, e, i));
  if (i !== void 0)
    return s(i);
  if (e !== void 0)
    return s(e);
  throw P(13, t2.id);
};
var eo = (t2, e) => {
  var r;
  let n = t2, s = 1;
  for (; n && !((r = n.hasAttribute) != null && r.call(n, "q:container")); ) {
    for (; n = n.previousSibling; )
      if (ee(n)) {
        const o = n.__virtual;
        if (o) {
          const i = o[Me];
          if (n === o.open)
            return i ?? U(o, e);
          if (i != null && i.$parentCtx$)
            return i.$parentCtx$;
          n = o;
          continue;
        }
        if (n.data === "/qv")
          s++;
        else if (n.data.startsWith("qv ") && (s--, s === 0))
          return U(ce(n), e);
      }
    n = t2.parentElement, t2 = n;
  }
  return null;
};
var no = (t2, e) => (t2.$parentCtx$ === void 0 && (t2.$parentCtx$ = eo(t2.$element$, e)), t2.$parentCtx$);
var _s = (t2, e, n) => {
  var o;
  const s = t2.id;
  if (!e)
    return;
  let r = e;
  for (; r; ) {
    const i = (o = r.$contexts$) == null ? void 0 : o.get(s);
    if (i)
      return i;
    r = no(r, n);
  }
};
var so = ct("qk-error");
var hn = (t2, e, n) => {
  const s = K(e);
  if (nt())
    throw t2;
  {
    const r = _s(so, s, n.$static$.$containerState$);
    if (r === void 0)
      throw t2;
    r.error = t2;
  }
};
var ro = /* @__PURE__ */ new Set(["animationIterationCount", "aspectRatio", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexShrink", "gridArea", "gridRow", "gridRowEnd", "gridRowStart", "gridColumn", "gridColumnEnd", "gridColumnStart", "fontWeight", "lineClamp", "lineHeight", "opacity", "order", "orphans", "scale", "tabSize", "widows", "zIndex", "zoom", "MozAnimationIterationCount", "MozBoxFlex", "msFlex", "msFlexPositive", "WebkitAnimationIterationCount", "WebkitBoxFlex", "WebkitBoxOrdinalGroup", "WebkitColumnCount", "WebkitColumns", "WebkitFlex", "WebkitFlexGrow", "WebkitFlexShrink", "WebkitLineClamp"]);
var oo = (t2) => ro.has(t2);
var de = (t2, e, n) => {
  e.$flags$ &= ~Ot, e.$flags$ |= Tn, e.$slots$ = [], e.li.length = 0;
  const s = e.$element$, r = e.$componentQrl$, o = e.$props$, i = B(t2.$static$.$locale$, s, void 0, "qRender"), $3 = i.$waitOn$ = [], c2 = oe(t2);
  c2.$cmpCtx$ = e, c2.$slotCtx$ = void 0, i.$subscriber$ = [0, s], i.$renderCtx$ = t2, r.$setContainer$(t2.$static$.$containerState$.$containerEl$);
  const l = r.getFn(i);
  return Re(() => l(o), (a) => k(nt() ? k(Rt($3), () => k(Wo(t2.$static$.$containerState$, t2), () => Rt($3))) : Rt($3), () => {
    var u;
    if (e.$flags$ & Ot) {
      if (!(n && n > 100))
        return de(t2, e, n ? n + 1 : 1);
      at(`Infinite loop detected. Element: ${(u = e.$componentQrl$) == null ? void 0 : u.$symbol$}`);
    }
    return { node: a, rCtx: c2 };
  }), (a) => {
    var u;
    if (a === er) {
      if (!(n && n > 100))
        return k(Rt($3), () => de(t2, e, n ? n + 1 : 1));
      at(`Infinite loop detected. Element: ${(u = e.$componentQrl$) == null ? void 0 : u.$symbol$}`);
    }
    return hn(a, s, t2), { node: Sn, rCtx: c2 };
  });
};
var Ts = (t2, e) => ({ $static$: { $doc$: t2, $locale$: e.$serverData$.locale, $containerState$: e, $hostElements$: /* @__PURE__ */ new Set(), $operations$: [], $postOperations$: [], $roots$: [], $addSlots$: [], $rmSlots$: [], $visited$: [] }, $cmpCtx$: null, $slotCtx$: void 0 });
var oe = (t2) => ({ $static$: t2.$static$, $cmpCtx$: t2.$cmpCtx$, $slotCtx$: t2.$slotCtx$ });
var mn = (t2, e) => {
  var n;
  return (n = e == null ? void 0 : e.$scopeIds$) != null && n.length ? e.$scopeIds$.join(" ") + " " + pe(t2) : pe(t2);
};
var pe = (t2) => {
  if (!t2)
    return "";
  if (ut(t2))
    return t2.trim();
  const e = [];
  if (A(t2))
    for (const n of t2) {
      const s = pe(n);
      s && e.push(s);
    }
  else
    for (const [n, s] of Object.entries(t2))
      s && e.push(n.trim());
  return e.join(" ");
};
var Le = (t2) => {
  if (t2 == null)
    return "";
  if (typeof t2 == "object") {
    if (A(t2))
      throw P(0, t2, "style");
    {
      const e = [];
      for (const n in t2)
        if (Object.prototype.hasOwnProperty.call(t2, n)) {
          const s = t2[n];
          s != null && (n.startsWith("--") ? e.push(n + ":" + s) : e.push(an(n) + ":" + io(n, s)));
        }
      return e.join(";");
    }
  }
  return String(t2);
};
var io = (t2, e) => typeof e != "number" || e === 0 || oo(t2) ? e : e + "px";
var Gt = (t2) => mt(t2.$static$.$containerState$.$elementIndex$++);
var ks = (t2, e) => {
  const n = Gt(t2);
  e.$id$ = n;
};
var Kt = (t2) => C(t2) ? Kt(t2.value) : t2 == null || typeof t2 == "boolean" ? "" : String(t2);
function qs(t2) {
  return t2.startsWith("aria-");
}
var Is = (t2, e) => !!e.key && (!Tt(t2) || !W(t2.type) && t2.key != e.key);
var F = "dangerouslySetInnerHTML";
var Rs;
var fe = "<!--qkssr-f-->";
var As = class {
  constructor(e) {
    this.nodeType = e, this[Rs] = null;
  }
};
Rs = Me;
var $o = () => new As(9);
var _c = async (t2, e) => {
  var w2, m2, f2;
  const n = e.containerTagName, s = he(1).$element$, r = Rn(s, e.base ?? "/");
  r.$serverData$.locale = (w2 = e.serverData) == null ? void 0 : w2.locale;
  const o = $o(), i = Ts(o, r), $3 = e.beforeContent ?? [], c2 = { $static$: { $contexts$: [], $headNodes$: n === "html" ? $3 : [], $locale$: (m2 = e.serverData) == null ? void 0 : m2.locale, $textNodes$: /* @__PURE__ */ new Map() }, $projectedChildren$: void 0, $projectedCtxs$: void 0, $invocationContext$: void 0 }, l = (f2 = e.serverData) == null ? void 0 : f2.locale, a = e.containerAttributes, u = a["q:render"];
  a["q:container"] = "paused", a["q:version"] = "1.7.1", a["q:render"] = (u ? u + "-" : "") + "ssr", a["q:base"] = e.base || "", a["q:locale"] = l, a["q:manifest-hash"] = e.manifestHash, a["q:instance"] = co();
  const d = n === "html" ? [t2] : [$3, t2];
  n !== "html" && (a.class = "qc\u{1F4E6}" + (a.class ? " " + a.class : ""));
  const p2 = r.$serverData$ = { ...r.$serverData$, ...e.serverData };
  p2.containerAttributes = { ...p2.containerAttributes, ...a }, (c2.$invocationContext$ = B(l)).$renderCtx$ = i;
  const v3 = xt(n, null, a, d, Ot | ht, null);
  r.$hostsRendering$ = /* @__PURE__ */ new Set(), await Promise.resolve().then(() => lo(v3, i, c2, e.stream, r, e));
};
var co = () => Math.random().toString(36).slice(2);
var lo = async (t2, e, n, s, r, o) => {
  const i = o.beforeClose;
  return await yn(t2, e, n, s, 0, i ? ($3) => {
    const c2 = i(n.$static$.$contexts$, r, false, n.$static$.$textNodes$);
    return X(c2, e, n, $3, 0, void 0);
  } : void 0), e;
};
var ao = async (t2, e, n, s, r) => {
  s.write(fe);
  const o = t2.props.children;
  let i;
  if (W(o)) {
    const $3 = o({ write(c2) {
      s.write(c2), s.write(fe);
    } });
    if (L($3))
      return $3;
    i = $3;
  } else
    i = o;
  for await (const $3 of i)
    await X($3, e, n, s, r, void 0), s.write(fe);
};
var Ms = (t2, e, n, s, r, o, i, $3) => {
  var w2;
  const c2 = t2.props, l = c2["q:renderFn"];
  if (l)
    return e.$componentQrl$ = l, po(s, r, o, e, t2, i, $3);
  let a = "<!--qv" + fo(c2);
  const u = "q:s" in c2, d = t2.key != null ? String(t2.key) : null;
  u && ((w2 = s.$cmpCtx$) == null || w2.$id$, a += " q:sref=" + s.$cmpCtx$.$id$), d != null && (a += " q:key=" + d), a += "-->", o.write(a);
  const p2 = t2.props[F];
  if (p2)
    return o.write(p2), void o.write(Be);
  if (n)
    for (const m2 of n)
      gn(m2.type, m2.props, o);
  const v3 = Ns(t2.children, s, r, o, i);
  return k(v3, () => {
    var f2;
    if (!u && !$3)
      return void o.write(Be);
    let m2;
    if (u) {
      const y2 = (f2 = r.$projectedChildren$) == null ? void 0 : f2[d];
      if (y2) {
        const [S3, h2] = r.$projectedCtxs$, b2 = oe(S3);
        b2.$slotCtx$ = e, r.$projectedChildren$[d] = void 0, m2 = X(y2, b2, h2, o, i);
      }
    }
    return $3 && (m2 = k(m2, () => $3(o))), k(m2, () => {
      o.write(Be);
    });
  });
};
var Be = "<!--/qv-->";
var uo = (t2) => {
  let e = "";
  for (const n in t2) {
    if (n === F)
      continue;
    const s = t2[n];
    s != null && (e += " " + (s === "" ? n : n + '="' + s + '"'));
  }
  return e;
};
var fo = (t2) => {
  let e = "";
  for (const n in t2) {
    if (n === "children" || n === F)
      continue;
    const s = t2[n];
    s != null && (e += " " + (s === "" ? n : n + "=" + s));
  }
  return e;
};
var gn = (t2, e, n) => {
  if (n.write("<" + t2 + uo(e) + ">"), Ls[t2])
    return;
  const s = e[F];
  s != null && n.write(s), n.write(`</${t2}>`);
};
var po = (t2, e, n, s, r, o, i) => (mo(t2, s, r.props.props), k(de(t2, s), ($3) => {
  const c2 = s.$element$, l = $3.rCtx, a = B(e.$static$.$locale$, c2, void 0);
  a.$subscriber$ = [0, c2], a.$renderCtx$ = l;
  const u = { $static$: e.$static$, $projectedChildren$: ho(r.children, e), $projectedCtxs$: [t2, e], $invocationContext$: a }, d = [];
  if (s.$appendStyles$) {
    const m2 = 4 & o ? e.$static$.$headNodes$ : d;
    for (const f2 of s.$appendStyles$)
      m2.push(xt("style", { [Ae]: f2.styleId, [F]: f2.content, hidden: "" }, null, null, 0, null));
  }
  const p2 = Gt(t2), v3 = s.$scopeIds$ ? xs(s.$scopeIds$) : void 0, w2 = ft(r.type, { [Ur]: v3, [Br]: p2, children: $3.node }, 0, r.key);
  return s.$id$ = p2, e.$static$.$contexts$.push(s), Ms(w2, s, d, l, u, n, o, (m2) => {
    if (s.$flags$ & ht) {
      const S3 = he(1), h2 = S3.li;
      h2.push(...s.li), s.$flags$ &= ~ht, S3.$id$ = Gt(t2);
      const b2 = { type: "placeholder", hidden: "", "q:id": S3.$id$ };
      e.$static$.$contexts$.push(S3);
      const E3 = fn(h2);
      for (const _3 of E3) {
        const g2 = Os(_3[0]);
        b2[g2] = Cn(_3[1], t2.$static$.$containerState$, S3), Xe(g2, t2.$static$.$containerState$);
      }
      gn("script", b2, m2);
    }
    const f2 = u.$projectedChildren$;
    let y2;
    if (f2) {
      const S3 = Object.keys(f2).map((_3) => {
        const g2 = f2[_3];
        if (g2)
          return xt("q:template", { [G]: _3 || true, hidden: true, "aria-hidden": "true" }, null, g2, 0, null);
      }), [h2, b2] = u.$projectedCtxs$, E3 = oe(h2);
      E3.$slotCtx$ = s, y2 = X(S3, E3, b2, m2, 0, void 0);
    }
    return i ? k(y2, () => i(m2)) : y2;
  });
}));
var ho = (t2, e) => {
  const n = Ps(t2, e);
  if (n === null)
    return;
  const s = {};
  for (const r of n) {
    let o = "";
    Tt(r) && (o = r.props[G] || ""), (s[o] || (s[o] = [])).push(r);
  }
  return s;
};
var he = (t2) => {
  const e = new As(t2);
  return Oe(e);
};
var yn = (t2, e, n, s, r, o) => {
  var l;
  const i = t2.type, $3 = e.$cmpCtx$;
  if (typeof i == "string") {
    const a = t2.key, u = t2.props, d = t2.immutableProps || O, p2 = he(1), v3 = p2.$element$, w2 = i === "head";
    let m2 = "<" + i, f2 = false, y2 = false, S3 = "", h2 = null;
    const b2 = (g2, x3, q3) => {
      if (g2 === "ref")
        return void (x3 !== void 0 && (An(x3, v3), y2 = true));
      if (un(g2))
        return void dn(p2.li, g2, x3, void 0);
      if (C(x3) && (x3 = it(x3, q3 ? [1, v3, x3, $3.$element$, g2] : [2, $3.$element$, x3, v3, g2]), f2 = true), g2 === F)
        return void (h2 = x3);
      let R2;
      g2.startsWith(vs) && Xe(g2.slice(15), e.$static$.$containerState$);
      const I3 = g2 === "htmlFor" ? "for" : g2;
      I3 === "class" || I3 === "className" ? S3 = pe(x3) : I3 === "style" ? R2 = Le(x3) : qs(I3) || I3 === "draggable" || I3 === "spellcheck" ? (R2 = x3 != null ? String(x3) : null, x3 = R2) : R2 = x3 === false || x3 == null ? null : String(x3), R2 != null && (I3 === "value" && i === "textarea" ? h2 = Mt(R2) : wo(I3) || (m2 += " " + (x3 === true ? I3 : I3 + '="' + Mt(R2) + '"')));
    };
    for (const g2 in u) {
      let x3 = false, q3;
      g2 in d ? (x3 = true, q3 = d[g2], q3 === M && (q3 = u[g2])) : q3 = u[g2], b2(g2, q3, x3);
    }
    for (const g2 in d) {
      if (g2 in u)
        continue;
      const x3 = d[g2];
      x3 !== M && b2(g2, x3, true);
    }
    const E3 = p2.li;
    if ($3) {
      if ((l = $3.$scopeIds$) != null && l.length) {
        const g2 = $3.$scopeIds$.join(" ");
        S3 = S3 ? `${g2} ${S3}` : g2;
      }
      $3.$flags$ & ht && (E3.push(...$3.li), $3.$flags$ &= ~ht);
    }
    if (w2 && (r |= 1), i in go && (r |= 16), i in yo && (r |= 8), S3 && (m2 += ' class="' + Mt(S3) + '"'), E3.length > 0) {
      const g2 = fn(E3), x3 = !!(16 & r);
      for (const q3 of g2) {
        const R2 = x3 ? Os(q3[0]) : q3[0];
        m2 += " " + R2 + '="' + Cn(q3[1], e.$static$.$containerState$, p2) + '"', Xe(R2, e.$static$.$containerState$);
      }
    }
    if (a != null && (m2 += ' q:key="' + Mt(a) + '"'), y2 || f2 || E3.length > 0) {
      if (y2 || f2 || bo(E3)) {
        const g2 = Gt(e);
        m2 += ' q:id="' + g2 + '"', p2.$id$ = g2;
      }
      n.$static$.$contexts$.push(p2);
    }
    if (1 & r && (m2 += " q:head"), m2 += ">", s.write(m2), i in Ls)
      return;
    if (h2 != null)
      return s.write(String(h2)), void s.write(`</${i}>`);
    i === "html" ? r |= 4 : r &= -5, 2 & t2.flags && (r |= 1024);
    const _3 = X(t2.children, e, n, s, r);
    return k(_3, () => {
      if (w2) {
        for (const g2 of n.$static$.$headNodes$)
          gn(g2.type, g2.props, s);
        n.$static$.$headNodes$.length = 0;
      }
      if (o)
        return k(o(s), () => {
          s.write(`</${i}>`);
        });
      s.write(`</${i}>`);
    });
  }
  if (i === dt) {
    const a = he(111);
    return e.$slotCtx$ ? (a.$parentCtx$ = e.$slotCtx$, a.$realParentCtx$ = e.$cmpCtx$) : a.$parentCtx$ = e.$cmpCtx$, $3 && $3.$flags$ & kn && Eo($3, a), Ms(t2, a, void 0, e, n, s, r, o);
  }
  if (i === Ds)
    return void s.write(t2.props.data);
  if (i === Cs)
    return ao(t2, e, n, s, r);
  const c2 = D(n.$invocationContext$, i, t2.props, t2.key, t2.flags, t2.dev);
  return Is(c2, t2) ? yn(ft(dt, { children: c2 }, 0, t2.key), e, n, s, r, o) : X(c2, e, n, s, r, o);
};
var X = (t2, e, n, s, r, o) => {
  var i;
  if (t2 != null && typeof t2 != "boolean") {
    if (!ut(t2) && typeof t2 != "number") {
      if (Tt(t2))
        return yn(t2, e, n, s, r, o);
      if (A(t2))
        return Ns(t2, e, n, s, r);
      if (C(t2)) {
        const $3 = 8 & r, c2 = (i = e.$cmpCtx$) == null ? void 0 : i.$element$;
        let l;
        if (c2) {
          if (!$3) {
            const a = Gt(e);
            if (l = it(t2, 1024 & r ? [3, "#" + a, t2, "#" + a] : [4, c2, t2, "#" + a]), ut(l)) {
              const u = Kt(l);
              n.$static$.$textNodes$.set(u, a);
            }
            return s.write(`<!--t=${a}-->`), X(l, e, n, s, r, o), void s.write("<!---->");
          }
          l = D(n.$invocationContext$, () => t2.value);
        }
        return void s.write(Mt(Kt(l)));
      }
      return L(t2) ? (s.write(fe), t2.then(($3) => X($3, e, n, s, r, o))) : void at();
    }
    s.write(Mt(String(t2)));
  }
};
var Ns = (t2, e, n, s, r) => {
  if (t2 == null)
    return;
  if (!A(t2))
    return X(t2, e, n, s, r);
  const o = t2.length;
  if (o === 1)
    return X(t2[0], e, n, s, r);
  if (o === 0)
    return;
  let i = 0;
  const $3 = [];
  return t2.reduce((c2, l, a) => {
    const u = [];
    $3.push(u);
    const d = X(l, e, n, c2 ? { write(p2) {
      i === a ? s.write(p2) : u.push(p2);
    } } : s, r);
    if (c2 || L(d)) {
      const p2 = () => {
        i++, $3.length > i && $3[i].forEach((v3) => s.write(v3));
      };
      return L(d) ? c2 ? Promise.all([d, c2]).then(p2) : d.then(p2) : c2.then(p2);
    }
    i++;
  }, void 0);
};
var Ps = (t2, e) => {
  if (t2 == null)
    return null;
  const n = zs(t2, e), s = A(n) ? n : [n];
  return s.length === 0 ? null : s;
};
var zs = (t2, e) => {
  if (t2 == null)
    return null;
  if (A(t2))
    return t2.flatMap((n) => zs(n, e));
  if (Tt(t2) && W(t2.type) && t2.type !== Ds && t2.type !== Cs && t2.type !== dt) {
    const n = D(e.$invocationContext$, t2.type, t2.props, t2.key, t2.flags);
    return Ps(n, e);
  }
  return t2;
};
var mo = (t2, e, n) => {
  const s = Object.keys(n), r = Ne();
  if (e.$props$ = re(r, t2.$static$.$containerState$), s.length === 0)
    return;
  const o = r[M] = n[M] ?? O;
  for (const i of s)
    i !== "children" && i !== G && (C(o[i]) ? r["$$" + i] = o[i] : r[i] = n[i]);
};
var go = { head: true, style: true, script: true, link: true, meta: true };
var yo = { title: true, style: true, script: true, noframes: true, textarea: true };
var Ls = { area: true, base: true, basefont: true, bgsound: true, br: true, col: true, embed: true, frame: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true };
var So = /[&<>'"]/g;
var Xe = (t2, e) => {
  e.$events$.add(rr(t2));
};
var Mt = (t2) => t2.replace(So, (e) => {
  switch (e) {
    case "&":
      return "&amp;";
    case "<":
      return "&lt;";
    case ">":
      return "&gt;";
    case '"':
      return "&quot;";
    case "'":
      return "&#39;";
    default:
      return "";
  }
});
var vo = /[>/="'\u0009\u000a\u000c\u0020]/;
var wo = (t2) => vo.test(t2);
var bo = (t2) => t2.some((e) => e[1].$captureRef$ && e[1].$captureRef$.length > 0);
var Eo = (t2, e) => {
  const n = t2.$dynamicSlots$ || (t2.$dynamicSlots$ = []);
  n.includes(e) || n.push(e);
};
var Os = (t2) => t2 === "on:qvisible" ? "on-document:qinit" : t2;
var Tc = (t2, e, n) => new Ze(t2, e, n);
var xo = (t2) => {
  const e = t2.$funcStr$;
  let n = "";
  for (let s = 0; s < t2.$args$.length; s++)
    n += `p${s},`;
  return `(${n})=>(${e})`;
};
var xt = (t2, e, n, s, r, o) => {
  const i = o == null ? null : String(o);
  return new Qt(t2, e || O, n, s, r, i);
};
var kc = (t2, e, n, s, r, o) => {
  let i = null;
  return e && "children" in e && (i = e.children, delete e.children), xt(t2, e, n, i, s, r);
};
var ft = (t2, e, n, s, r) => {
  const o = s == null ? null : String(s), i = e ?? {};
  if (typeof t2 == "string" && M in i) {
    const c2 = i[M];
    delete i[M];
    const l = i.children;
    delete i.children;
    for (const [a, u] of Object.entries(c2))
      u !== M && (delete i[a], i[a] = u);
    return xt(t2, null, i, l, n, s);
  }
  const $3 = new Qt(t2, i, null, i.children, n, o);
  return typeof t2 == "string" && e && delete e.children, $3;
};
var qc = (t2, e, n) => {
  const r = Zs(() => {
    const i = e.children;
    return typeof t2 == "string" && delete e.children, i;
  });
  return ut(t2) && "className" in e && (e.class = e.className, delete e.className), new Qt(t2, e, null, r, 0, null);
};
var Qt = class {
  constructor(e, n, s, r, o, i = null) {
    this.type = e, this.props = n, this.immutableProps = s, this.children = r, this.flags = o, this.key = i;
  }
};
var dt = (t2) => t2.children;
var Tt = (t2) => t2 instanceof Qt;
var me = (t2) => t2.children;
var Sn = Symbol("skip render");
var Ds = () => null;
var Cs = () => null;
var vn = (t2, e, n) => {
  const s = !(e.$flags$ & Tn), r = e.$element$, o = t2.$static$.$containerState$;
  return o.$hostsStaging$.delete(e), o.$subsManager$.$clearSub$(r), k(de(t2, e), (i) => {
    const $3 = t2.$static$, c2 = i.rCtx, l = B(t2.$static$.$locale$, r);
    if ($3.$hostElements$.add(r), l.$subscriber$ = [0, r], l.$renderCtx$ = c2, s && e.$appendStyles$)
      for (const u of e.$appendStyles$)
        Pi($3, u);
    const a = pt(i.node, l);
    return k(a, (u) => {
      const d = _o(r, u), p2 = wn(e);
      return k(we(c2, p2, d, n), () => {
        e.$vdom$ = d;
      });
    });
  });
};
var wn = (t2) => (t2.$vdom$ || (t2.$vdom$ = be(t2.$element$)), t2.$vdom$);
var ot = class {
  constructor(e, n, s, r, o, i) {
    this.$type$ = e, this.$props$ = n, this.$immutableProps$ = s, this.$children$ = r, this.$flags$ = o, this.$key$ = i, this.$elm$ = null, this.$text$ = "", this.$signal$ = null, this.$id$ = e + (i ? ":" + i : "");
  }
};
var Fs = (t2, e) => {
  const { key: n, type: s, props: r, children: o, flags: i, immutableProps: $3 } = t2;
  let c2 = "";
  if (ut(s))
    c2 = s;
  else {
    if (s !== dt) {
      if (W(s)) {
        const a = D(e, s, r, n, i, t2.dev);
        return Is(a, t2) ? Fs(ft(dt, { children: a }, 0, n), e) : pt(a, e);
      }
      throw P(25, s);
    }
    c2 = Dt;
  }
  let l = rt;
  return o != null ? k(pt(o, e), (a) => (a !== void 0 && (l = A(a) ? a : [a]), new ot(c2, r, $3, l, i, n))) : new ot(c2, r, $3, l, i, n);
};
var _o = (t2, e) => {
  const n = e === void 0 ? rt : A(e) ? e : [e], s = new ot(":virtual", {}, null, n, 0, null);
  return s.$elm$ = t2, s;
};
var pt = (t2, e) => {
  if (t2 != null && typeof t2 != "boolean") {
    if (Qs(t2)) {
      const n = new ot("#text", O, null, rt, 0, null);
      return n.$text$ = String(t2), n;
    }
    if (Tt(t2))
      return Fs(t2, e);
    if (C(t2)) {
      const n = new ot("#signal", O, null, rt, 0, null);
      return n.$signal$ = t2, n;
    }
    if (A(t2)) {
      const n = ln(t2.flatMap((s) => pt(s, e)));
      return k(n, (s) => s.flat(100).filter(ms));
    }
    return L(t2) ? t2.then((n) => pt(n, e)) : t2 === Sn ? new ot(":skipRender", O, null, rt, 0, null) : void at();
  }
};
var Qs = (t2) => ut(t2) || typeof t2 == "number";
var Ws = (t2) => {
  Z(t2, "q:container") === "paused" && (ko(t2), Mo(t2));
};
var To = (t2) => {
  const e = se(t2), n = Ro(t2 === e.documentElement ? e.body : t2, "type");
  if (n)
    return JSON.parse(Io(n.firstChild.data) || "{}");
};
var Ic = (t2, e) => {
  const n = JSON.parse(t2);
  if (typeof n != "object")
    return null;
  const { _objs: s, _entry: r } = n;
  if (s === void 0 || r === void 0)
    return null;
  let o = {}, i = {};
  if (yt(e) && vt(e)) {
    const l = In(e);
    l && (i = Wt(l), o = l.ownerDocument);
  }
  const $3 = Er(i, o);
  for (let l = 0; l < s.length; l++) {
    const a = s[l];
    ut(a) && (s[l] = a === Fe ? void 0 : $3.prepare(a));
  }
  const c2 = (l) => s[j(l)];
  for (const l of s)
    Us(l, c2, $3);
  return c2(r);
};
var ko = (t2) => {
  if (!hi(t2))
    return void at();
  const e = t2._qwikjson_ ?? To(t2);
  if (t2._qwikjson_ = null, !e)
    return void at();
  const n = se(t2), s = t2.getAttribute(ys), r = Ss(n, s), o = Wt(t2), i = /* @__PURE__ */ new Map(), $3 = /* @__PURE__ */ new Map();
  let c2 = null, l = 0;
  const a = n.createTreeWalker(t2, sr);
  for (; c2 = a.nextNode(); ) {
    const f2 = c2.data;
    if (l === 0) {
      if (f2.startsWith("qv ")) {
        const y2 = No(f2);
        y2 >= 0 && i.set(y2, c2);
      } else if (f2.startsWith("t=")) {
        const y2 = f2.slice(2), S3 = j(y2), h2 = Ao(c2);
        i.set(S3, h2), $3.set(S3, h2.data);
      }
    }
    f2 === "cq" ? l++ : f2 === "/cq" && l--;
  }
  const u = t2.getElementsByClassName("qc\u{1F4E6}").length !== 0;
  t2.querySelectorAll("[q\\:id]").forEach((f2) => {
    if (u && f2.closest("[q\\:container]") !== t2)
      return;
    const y2 = Z(f2, "q:id"), S3 = j(y2);
    i.set(S3, f2);
  });
  const d = Er(o, n), p2 = /* @__PURE__ */ new Map(), v3 = /* @__PURE__ */ new Set(), w2 = (f2) => (typeof f2 == "string" && f2.length > 0, p2.has(f2) ? p2.get(f2) : m2(f2)), m2 = (f2) => {
    if (f2.startsWith("#")) {
      const E3 = f2.slice(1), _3 = j(E3);
      i.has(_3);
      const g2 = i.get(_3);
      if (ee(g2)) {
        if (!g2.isConnected)
          return void p2.set(f2, void 0);
        const x3 = ce(g2);
        return p2.set(f2, x3), U(x3, o), x3;
      }
      return St(g2) ? (p2.set(f2, g2), U(g2, o), g2) : (p2.set(f2, g2), g2);
    }
    if (f2.startsWith("@")) {
      const E3 = f2.slice(1), _3 = j(E3);
      return r[_3];
    }
    if (f2.startsWith("*")) {
      const E3 = f2.slice(1), _3 = j(E3);
      i.has(_3);
      const g2 = $3.get(_3);
      return p2.set(f2, g2), g2;
    }
    const y2 = j(f2), S3 = e.objs;
    S3.length > y2;
    let h2 = S3[y2];
    ut(h2) && (h2 = h2 === Fe ? void 0 : d.prepare(h2));
    let b2 = h2;
    for (let E3 = f2.length - 1; E3 >= 0; E3--) {
      const _3 = F$[f2[E3]];
      if (!_3)
        break;
      b2 = _3(b2, o);
    }
    return p2.set(f2, b2), Qs(h2) || v3.has(y2) || (v3.add(y2), qo(h2, y2, e.subs, w2, o, d), Us(h2, w2, d)), b2;
  };
  o.$elementIndex$ = 1e5, o.$pauseCtx$ = { getObject: w2, meta: e.ctx, refs: e.refs }, V(t2, "q:container", "resumed"), Xr(t2, "qresume", void 0, true);
};
var qo = (t2, e, n, s, r, o) => {
  const i = n[e];
  if (i) {
    const $3 = [];
    let c2 = 0;
    for (const l of i)
      if (l.startsWith("_"))
        c2 = parseInt(l.slice(1), 10);
      else {
        const a = J$(l, s);
        a && $3.push(a);
      }
    if (c2 > 0 && Pe(t2, c2), !o.subs(t2, $3)) {
      const l = r.$proxyMap$.get(t2);
      l ? Q(l).$addSubs$($3) : re(t2, r, $3);
    }
  }
};
var Us = (t2, e, n) => {
  if (!n.fill(t2, e) && t2 && typeof t2 == "object") {
    if (A(t2))
      for (let s = 0; s < t2.length; s++)
        t2[s] = e(t2[s]);
    else if (ne(t2))
      for (const s in t2)
        t2[s] = e(t2[s]);
  }
};
var Io = (t2) => t2.replace(/\\x3C(\/?script)/gi, "<$1");
var Ro = (t2, e) => {
  let n = t2.lastElementChild;
  for (; n; ) {
    if (n.tagName === "SCRIPT" && Z(n, e) === "qwik/json")
      return n;
    n = n.previousElementSibling;
  }
};
var Ao = (t2) => {
  const e = t2.nextSibling;
  if (rn(e))
    return e;
  {
    const n = t2.ownerDocument.createTextNode("");
    return t2.parentElement.insertBefore(n, t2), n;
  }
};
var Mo = (t2) => {
  t2.qwik = { pause: () => Xi(t2), state: Wt(t2) };
};
var No = (t2) => {
  const e = t2.indexOf("q:id=");
  return e > 0 ? j(t2.slice(e + 5)) : -1;
};
var bn = () => {
  const t2 = $i();
  let e = t2.$qrl$;
  if (e)
    e.$captureRef$;
  else {
    const n = t2.$element$, s = In(n);
    e = Ce(decodeURIComponent(String(t2.$url$)), s), Ws(s);
    const r = U(n, Wt(s));
    wr(e, r);
  }
  return e.$captureRef$;
};
var Po = (t2, e) => {
  try {
    const n = e[0], s = t2.$static$;
    switch (n) {
      case 1:
      case 2: {
        let r, o;
        n === 1 ? (r = e[1], o = e[3]) : (r = e[3], o = e[1]);
        const i = K(r);
        if (i == null)
          return;
        const $3 = e[4], c2 = r.namespaceURI === $e;
        s.$containerState$.$subsManager$.$clearSignal$(e);
        let l = it(e[2], e.slice(0, -1));
        $3 === "class" ? l = mn(l, K(o)) : $3 === "style" && (l = Le(l));
        const a = wn(i);
        return $3 in a.$props$ && a.$props$[$3] === l ? void 0 : (a.$props$[$3] = l, Nn(s, r, $3, l, c2));
      }
      case 3:
      case 4: {
        const r = e[3];
        if (!s.$visited$.includes(r)) {
          s.$containerState$.$subsManager$.$clearSignal$(e);
          const o = void 0;
          let i = it(e[2], e.slice(0, -1));
          const $3 = K$();
          Array.isArray(i) && (i = new Qt(dt, {}, null, i, 0, null));
          let c2 = pt(i, o);
          if (L(c2))
            Et("Rendering promises in JSX signals is not supported");
          else {
            c2 === void 0 && (c2 = pt("", o));
            const l = ir(r), a = zo(e[1]);
            if (t2.$cmpCtx$ = U(a, t2.$static$.$containerState$), l.$type$ == c2.$type$ && l.$key$ == c2.$key$ && l.$id$ == c2.$id$)
              It(t2, l, c2, 0);
            else {
              const u = [], d = l.$elm$, p2 = wt(t2, c2, 0, u);
              u.length && Et("Rendering promises in JSX signals is not supported"), $3[3] = p2, Pt(t2.$static$, r.parentElement, p2, d), d && zn(s, d);
            }
          }
        }
      }
    }
  } catch {
  }
};
function zo(t2) {
  for (; t2; ) {
    if (vt(t2))
      return t2;
    t2 = t2.parentElement;
  }
  throw new Error("Not found");
}
var Lo = (t2, e) => {
  if (t2[0] === 0) {
    const n = t2[1];
    xn(n) ? Bs(n, e) : Oo(n, e);
  } else
    Do(t2, e);
};
var Oo = (t2, e) => {
  const n = nt();
  n || Ws(e.$containerEl$);
  const s = U(t2, e);
  if (s.$componentQrl$, !(s.$flags$ & Ot))
    if (s.$flags$ |= Ot, e.$hostsRendering$ !== void 0)
      e.$hostsStaging$.add(s);
    else {
      if (n)
        return void at();
      e.$hostsNext$.add(s), En(e);
    }
};
var Do = (t2, e) => {
  const n = e.$hostsRendering$ !== void 0;
  e.$opsNext$.add(t2), n || En(e);
};
var Bs = (t2, e) => {
  t2.$flags$ & _t || (t2.$flags$ |= _t, e.$hostsRendering$ !== void 0 ? e.$taskStaging$.add(t2) : (e.$taskNext$.add(t2), En(e)));
};
var En = (t2) => (t2.$renderPromise$ === void 0 && (t2.$renderPromise$ = Ie().nextTick(() => Hs(t2))), t2.$renderPromise$);
var Co = () => {
  const [t2] = bn();
  Bs(t2, Wt(In(t2.$el$)));
};
var Hs = async (t2) => {
  const e = t2.$containerEl$, n = se(e);
  try {
    const s = Ts(n, t2), r = s.$static$, o = t2.$hostsRendering$ = new Set(t2.$hostsNext$);
    t2.$hostsNext$.clear(), await Qo(t2, s), t2.$hostsStaging$.forEach((c2) => {
      o.add(c2);
    }), t2.$hostsStaging$.clear();
    const i = Array.from(t2.$opsNext$);
    t2.$opsNext$.clear();
    const $3 = Array.from(o);
    Bo($3), !t2.$styleMoved$ && $3.length > 0 && (t2.$styleMoved$ = true, (e === n.documentElement ? n.body : e).querySelectorAll("style[q\\:style]").forEach((c2) => {
      t2.$styleIds$.add(Z(c2, Ae)), pr(r, n.head, c2);
    }));
    for (const c2 of $3) {
      const l = c2.$element$;
      if (!r.$hostElements$.has(l) && c2.$componentQrl$) {
        l.isConnected, r.$roots$.push(c2);
        try {
          await vn(s, c2, Fo(l.parentElement));
        } catch (a) {
          Et(a);
        }
      }
    }
    return i.forEach((c2) => {
      Po(s, c2);
    }), r.$operations$.push(...r.$postOperations$), r.$operations$.length === 0 ? (ss(r), void await Gn(t2, s)) : (await ki(r), ss(r), Gn(t2, s));
  } catch (s) {
    Et(s);
  }
};
var Fo = (t2) => {
  let e = 0;
  return t2 && (t2.namespaceURI === $e && (e |= J), t2.tagName === "HEAD" && (e |= Se)), e;
};
var Gn = async (t2, e) => {
  const n = e.$static$.$hostElements$;
  await Uo(t2, e, (s, r) => !!(s.$flags$ & Vo) && (!r || n.has(s.$el$))), t2.$hostsStaging$.forEach((s) => {
    t2.$hostsNext$.add(s);
  }), t2.$hostsStaging$.clear(), t2.$hostsRendering$ = void 0, t2.$renderPromise$ = void 0, t2.$hostsNext$.size + t2.$taskNext$.size + t2.$opsNext$.size > 0 && (t2.$renderPromise$ = Hs(t2));
};
var Ye = (t2) => !!(t2.$flags$ & Js);
var Kn = (t2) => !!(t2.$flags$ & Vs);
var Qo = async (t2, e) => {
  const n = t2.$containerEl$, s = [], r = [];
  t2.$taskNext$.forEach((o) => {
    Ye(o) && (r.push(k(o.$qrl$.$resolveLazy$(n), () => o)), t2.$taskNext$.delete(o)), Kn(o) && (s.push(k(o.$qrl$.$resolveLazy$(n), () => o)), t2.$taskNext$.delete(o));
  });
  do
    if (t2.$taskStaging$.forEach((o) => {
      Ye(o) ? r.push(k(o.$qrl$.$resolveLazy$(n), () => o)) : Kn(o) ? s.push(k(o.$qrl$.$resolveLazy$(n), () => o)) : t2.$taskNext$.add(o);
    }), t2.$taskStaging$.clear(), r.length > 0) {
      const o = await Promise.all(r);
      ge(o), await Promise.all(o.map((i) => ye(i, t2, e))), r.length = 0;
    }
  while (t2.$taskStaging$.size > 0);
  if (s.length > 0) {
    const o = await Promise.all(s);
    ge(o);
    for (const i of o)
      ye(i, t2, e);
  }
};
var Wo = (t2, e) => {
  const n = t2.$containerEl$, s = t2.$taskStaging$;
  if (!s.size)
    return;
  const r = [];
  let o = 20;
  const i = () => {
    if (s.forEach(($3) => {
      Ye($3) && r.push(k($3.$qrl$.$resolveLazy$(n), () => $3));
    }), s.clear(), r.length > 0)
      return Promise.all(r).then(async ($3) => {
        if (ge($3), await Promise.all($3.map((c2) => ye(c2, t2, e))), r.length = 0, --o && s.size > 0)
          return i();
        o || at(`Infinite task loop detected. Tasks:
${Array.from(s).map((c2) => `  ${c2.$qrl$.$symbol$}`).join(`
`)}`);
      });
  };
  return i();
};
var Uo = async (t2, e, n) => {
  const s = [], r = t2.$containerEl$;
  t2.$taskNext$.forEach((o) => {
    n(o, false) && (o.$el$.isConnected && s.push(k(o.$qrl$.$resolveLazy$(r), () => o)), t2.$taskNext$.delete(o));
  });
  do
    if (t2.$taskStaging$.forEach((o) => {
      o.$el$.isConnected && (n(o, true) ? s.push(k(o.$qrl$.$resolveLazy$(r), () => o)) : t2.$taskNext$.add(o));
    }), t2.$taskStaging$.clear(), s.length > 0) {
      const o = await Promise.all(s);
      ge(o);
      for (const i of o)
        ye(i, t2, e);
      s.length = 0;
    }
  while (t2.$taskStaging$.size > 0);
};
var Bo = (t2) => {
  t2.sort((e, n) => 2 & e.$element$.compareDocumentPosition(xe(n.$element$)) ? 1 : -1);
};
var ge = (t2) => {
  const e = nt();
  t2.sort((n, s) => e || n.$el$ === s.$el$ ? n.$index$ < s.$index$ ? -1 : 1 : 2 & n.$el$.compareDocumentPosition(xe(s.$el$)) ? 1 : -1);
};
var Ho = (t2) => {
  const e = ci(), n = W(t2) && !Un(t2) ? D(void 0, t2) : t2;
  return fi(n, e, 0);
};
var Jo = (t2) => {
  const { val: e, set: n } = Ft();
  return e ?? n(t2 = W(t2) && !Un(t2) ? t2() : t2);
};
var He = (t2) => Jo(() => Ho(t2));
var Vo = 1;
var Js = 2;
var Vs = 4;
var _t = 16;
var Go = (t2, e) => {
  const { val: n, set: s, iCtx: r, i: o, elCtx: i } = Ft();
  if (n)
    return;
  const $3 = r.$renderCtx$.$static$.$containerState$, c2 = new _n(_t | Js, o, i.$element$, t2, void 0);
  s(true), t2.$resolveLazy$($3.$containerEl$), i.$tasks$ || (i.$tasks$ = []), i.$tasks$.push(c2), ai(r, () => Ks(c2, $3, r.$renderCtx$)), nt() && Zo(c2, e == null ? void 0 : e.eagerness);
};
var Gs = (t2) => !!(t2.$flags$ & Vs);
var Ko = (t2) => !!(8 & t2.$flags$);
var ye = async (t2, e, n) => (t2.$flags$ & _t, Gs(t2) ? Xo(t2, e, n) : Ko(t2) ? Yo(t2, e, n) : Ks(t2, e, n));
var Xo = (t2, e, n, s) => {
  t2.$flags$ &= ~_t, Xt(t2);
  const r = B(n.$static$.$locale$, t2.$el$, void 0, "qTask"), { $subsManager$: o } = e;
  r.$renderCtx$ = n;
  const i = t2.$qrl$.getFn(r, () => {
    o.$clearSub$(t2);
  }), $3 = [], c2 = t2.$state$, l = le(c2), a = { track: (f2, y2) => {
    if (W(f2)) {
      const h2 = B();
      return h2.$renderCtx$ = n, h2.$subscriber$ = [0, t2], D(h2, f2);
    }
    const S3 = Q(f2);
    return S3 ? S3.$addSub$([0, t2], y2) : on(qe(26), f2), y2 ? f2[y2] : C(f2) ? f2.value : f2;
  }, cleanup(f2) {
    $3.push(f2);
  }, cache(f2) {
    let y2 = 0;
    y2 = f2 === "immutable" ? 1 / 0 : f2, c2._cache = y2;
  }, previous: l._resolved };
  let u, d, p2 = false;
  const v3 = (f2, y2) => !p2 && (p2 = true, f2 ? (p2 = true, c2.loading = false, c2._state = "resolved", c2._resolved = y2, c2._error = void 0, u(y2)) : (p2 = true, c2.loading = false, c2._state = "rejected", c2._error = y2, d(y2)), true);
  D(r, () => {
    c2._state = "pending", c2.loading = !nt(), c2.value = new Promise((f2, y2) => {
      u = f2, d = y2;
    });
  }), t2.$destroy$ = We(() => {
    p2 = true, $3.forEach((f2) => f2());
  });
  const w2 = Re(() => k(s, () => i(a)), (f2) => {
    v3(true, f2);
  }, (f2) => {
    v3(false, f2);
  }), m2 = l._timeout;
  return m2 > 0 ? Promise.race([w2, Qr(m2).then(() => {
    v3(false, new Error("timeout")) && Xt(t2);
  })]) : w2;
};
var Ks = (t2, e, n) => {
  t2.$flags$ &= ~_t, Xt(t2);
  const s = t2.$el$, r = B(n.$static$.$locale$, s, void 0, "qTask");
  r.$renderCtx$ = n;
  const { $subsManager$: o } = e, i = t2.$qrl$.getFn(r, () => {
    o.$clearSub$(t2);
  }), $3 = [];
  t2.$destroy$ = We(() => {
    $3.forEach((l) => l());
  });
  const c2 = { track: (l, a) => {
    if (W(l)) {
      const d = B();
      return d.$subscriber$ = [0, t2], D(d, l);
    }
    const u = Q(l);
    return u ? u.$addSub$([0, t2], a) : on(qe(26), l), a ? l[a] : C(l) ? l.value : l;
  }, cleanup(l) {
    $3.push(l);
  } };
  return Re(() => i(c2), (l) => {
    W(l) && $3.push(l);
  }, (l) => {
    hn(l, s, n);
  });
};
var Yo = (t2, e, n) => {
  t2.$state$, t2.$flags$ &= ~_t, Xt(t2);
  const s = t2.$el$, r = B(n.$static$.$locale$, s, void 0, "qComputed");
  r.$subscriber$ = [0, t2], r.$renderCtx$ = n;
  const { $subsManager$: o } = e, i = t2.$qrl$.getFn(r, () => {
    o.$clearSub$(t2);
  });
  return Re(i, ($3) => Zs(() => {
    const c2 = t2.$state$;
    c2[Yt] &= ~tr, c2.untrackedValue = $3, c2[tt].$notifySubs$();
  }), ($3) => {
    hn($3, s, n);
  });
};
var Xt = (t2) => {
  const e = t2.$destroy$;
  if (e) {
    t2.$destroy$ = void 0;
    try {
      e();
    } catch (n) {
      Et(n);
    }
  }
};
var Xs = (t2) => {
  32 & t2.$flags$ ? (t2.$flags$ &= -33, (0, t2.$qrl$)()) : Xt(t2);
};
var Zo = (t2, e) => {
  e === "visible" || e === "intersection-observer" ? Kr("qvisible", Je(t2)) : e === "load" || e === "document-ready" ? Vn("qinit", Je(t2)) : e !== "idle" && e !== "document-idle" || Vn("qidle", Je(t2));
};
var Je = (t2) => {
  const e = t2.$qrl$, n = Ue(e.$chunk$, "_hW", Co, null, null, [t2], e.$symbol$);
  return e.dev && (n.dev = e.dev), n;
};
var xn = (t2) => $t(t2) && t2 instanceof _n;
var jo = (t2, e) => {
  let n = `${mt(t2.$flags$)} ${mt(t2.$index$)} ${e(t2.$qrl$)} ${e(t2.$el$)}`;
  return t2.$state$ && (n += ` ${e(t2.$state$)}`), n;
};
var ti = (t2) => {
  const [e, n, s, r, o] = t2.split(" ");
  return new _n(j(e), j(n), r, s, o);
};
var _n = class {
  constructor(e, n, s, r, o) {
    this.$flags$ = e, this.$index$ = n, this.$el$ = s, this.$qrl$ = r, this.$state$ = o;
  }
};
function ei(t2) {
  return ni(t2) && t2.nodeType === 1;
}
function ni(t2) {
  return t2 && typeof t2.nodeType == "number";
}
var Ot = 1;
var ht = 2;
var Tn = 4;
var kn = 8;
var K = (t2) => t2[Me];
var U = (t2, e) => {
  const n = K(t2);
  if (n)
    return n;
  const s = Oe(t2), r = Z(t2, "q:id");
  if (r) {
    const o = e.$pauseCtx$;
    if (s.$id$ = r, o) {
      const { getObject: i, meta: $3, refs: c2 } = o;
      if (ei(t2)) {
        const l = c2[r];
        l && (s.$refMap$ = l.split(" ").map(i), s.li = Gr(s, e.$containerEl$));
      } else {
        const l = t2.getAttribute("q:sstyle");
        s.$scopeIds$ = l ? l.split("|") : null;
        const a = $3[r];
        if (a) {
          const u = a.s, d = a.h, p2 = a.c, v3 = a.w;
          if (u && (s.$seq$ = u.split(" ").map(i)), v3 && (s.$tasks$ = v3.split(" ").map(i)), p2) {
            s.$contexts$ = /* @__PURE__ */ new Map();
            for (const w2 of p2.split(" ")) {
              const [m2, f2] = w2.split("=");
              s.$contexts$.set(m2, i(f2));
            }
          }
          if (d) {
            const [w2, m2] = d.split(" ");
            if (s.$flags$ = Tn, w2 && (s.$componentQrl$ = i(w2)), m2) {
              const f2 = i(m2);
              s.$props$ = f2, Pe(f2, 2), f2[M] = si(f2);
            } else
              s.$props$ = re(Ne(), e);
          }
        }
      }
    }
  }
  return s;
};
var si = (t2) => {
  const e = {}, n = kt(t2);
  for (const s in n)
    s.startsWith("$$") && (e[s.slice(2)] = n[s]);
  return e;
};
var Oe = (t2) => {
  const e = { $flags$: 0, $id$: "", $element$: t2, $refMap$: [], li: [], $tasks$: null, $seq$: null, $slots$: null, $scopeIds$: null, $appendStyles$: null, $props$: null, $vdom$: null, $componentQrl$: null, $contexts$: null, $dynamicSlots$: null, $parentCtx$: void 0, $realParentCtx$: void 0 };
  return t2[Me] = e, e;
};
var ri = (t2, e) => {
  var n;
  (n = t2.$tasks$) == null || n.forEach((s) => {
    e.$clearSub$(s), Xs(s);
  }), t2.$componentQrl$ = null, t2.$seq$ = null, t2.$tasks$ = null;
};
var zt;
function oi(t2) {
  if (zt === void 0) {
    const e = Y();
    return e && e.$locale$ ? e.$locale$ : t2;
  }
  return zt;
}
function Xn(t2, e) {
  const n = zt;
  try {
    return zt = t2, e();
  } finally {
    zt = n;
  }
}
function ii(t2) {
  zt = t2;
}
var Ht;
var Y = () => {
  if (!Ht) {
    const t2 = typeof document < "u" && document && document.__q_context__;
    return t2 ? A(t2) ? document.__q_context__ = Ys(t2) : t2 : void 0;
  }
  return Ht;
};
var $i = () => {
  const t2 = Y();
  if (!t2)
    throw P(14);
  return t2;
};
var qn = () => {
  const t2 = Y();
  if (!t2 || t2.$event$ !== "qRender")
    throw P(20);
  return t2.$hostElement$, t2.$waitOn$, t2.$renderCtx$, t2.$subscriber$, t2;
};
var ci = () => qn().$renderCtx$.$static$.$containerState$;
function D(t2, e, ...n) {
  return li.call(this, t2, e, n);
}
function li(t2, e, n) {
  const s = Ht;
  let r;
  try {
    Ht = t2, r = e.apply(this, n);
  } finally {
    Ht = s;
  }
  return r;
}
var ai = (t2, e) => {
  const n = t2.$waitOn$;
  if (n.length === 0) {
    const s = e();
    L(s) && n.push(s);
  } else
    n.push(Promise.all(n).then(e));
};
var Ys = ([t2, e, n]) => {
  const s = t2.closest("[q\\:container]"), r = (s == null ? void 0 : s.getAttribute("q:locale")) || void 0;
  return r && ii(r), B(r, void 0, t2, e, n);
};
var B = (t2, e, n, s, r) => ({ $url$: r, $i$: 0, $hostElement$: e, $element$: n, $event$: s, $qrl$: void 0, $waitOn$: void 0, $subscriber$: void 0, $renderCtx$: void 0, $locale$: t2 || (typeof s == "object" && s && "locale" in s ? s.locale : void 0) });
var In = (t2) => t2.closest("[q\\:container]");
var Zs = (t2) => D(void 0, t2);
var Yn = B(void 0, void 0, void 0, "qRender");
var it = (t2, e) => (Yn.$subscriber$ = e, D(Yn, () => t2.value));
var ui = (t2) => {
  const e = Y();
  return e && e.$hostElement$ && e.$renderCtx$ && (U(e.$hostElement$, e.$renderCtx$.$static$.$containerState$).$flags$ |= kn), t2;
};
var js;
var fi = (t2, e, n, s) => {
  const r = e.$subsManager$.$createManager$(s);
  return new Zt(t2, r, n);
};
var Yt = Symbol("proxy manager");
var di = 1;
var tr = 2;
var er = Symbol("unassigned signal");
var ie = class {
};
var Zt = class extends ie {
  constructor(e, n, s) {
    super(), this[js] = 0, this.untrackedValue = e, this[tt] = n, this[Yt] = s;
  }
  valueOf() {
  }
  toString() {
    return `[Signal ${String(this.value)}]`;
  }
  toJSON() {
    return { value: this.value };
  }
  get value() {
    var n;
    if (this[Yt] & tr)
      throw er;
    const e = (n = Y()) == null ? void 0 : n.$subscriber$;
    return e && this[tt].$addSub$(e), this.untrackedValue;
  }
  set value(e) {
    const n = this[tt];
    n && this.untrackedValue !== e && (this.untrackedValue = e, n.$notifySubs$());
  }
};
js = Yt;
var Ze = class extends ie {
  constructor(e, n, s) {
    super(), this.$func$ = e, this.$args$ = n, this.$funcStr$ = s;
  }
  get value() {
    return this.$func$.apply(void 0, this.$args$);
  }
};
var je = class extends ie {
  constructor(e, n) {
    super(), this.ref = e, this.prop = n;
  }
  get [tt]() {
    return Q(this.ref);
  }
  get value() {
    return this.ref[this.prop];
  }
  set value(e) {
    this.ref[this.prop] = e;
  }
};
var C = (t2) => t2 instanceof ie;
var nr = (t2, e) => {
  var r, o;
  if (!$t(t2))
    return t2[e];
  if (t2 instanceof ie)
    return t2;
  const n = kt(t2);
  if (n) {
    const i = n["$$" + e];
    if (i)
      return i;
    if (((r = n[M]) == null ? void 0 : r[e]) !== true)
      return new je(t2, e);
  }
  const s = (o = t2[M]) == null ? void 0 : o[e];
  return C(s) ? s : M;
};
var pi = (t2, e) => {
  const n = nr(t2, e);
  return n === M ? t2[e] : n;
};
var Zn = Symbol("ContainerState");
var Wt = (t2) => {
  let e = t2[Zn];
  return e || (t2[Zn] = e = Rn(t2, Z(t2, "q:base") ?? "/")), e;
};
var Rn = (t2, e) => {
  const n = {};
  if (t2) {
    const r = t2.attributes;
    if (r)
      for (let o = 0; o < r.length; o++) {
        const i = r[o];
        n[i.name] = i.value;
      }
  }
  const s = { $containerEl$: t2, $elementIndex$: 0, $styleMoved$: false, $proxyMap$: /* @__PURE__ */ new WeakMap(), $opsNext$: /* @__PURE__ */ new Set(), $taskNext$: /* @__PURE__ */ new Set(), $taskStaging$: /* @__PURE__ */ new Set(), $hostsNext$: /* @__PURE__ */ new Set(), $hostsStaging$: /* @__PURE__ */ new Set(), $styleIds$: /* @__PURE__ */ new Set(), $events$: /* @__PURE__ */ new Set(), $serverData$: { containerAttributes: n }, $base$: e, $renderPromise$: void 0, $hostsRendering$: void 0, $pauseCtx$: void 0, $subsManager$: null, $inlineFns$: /* @__PURE__ */ new Map() };
  return s.$subsManager$ = V$(s), s;
};
var An = (t2, e) => {
  if (W(t2))
    return t2(e);
  if (C(t2))
    return nt() ? t2.untrackedValue = e : t2.value = e;
  throw P(32, t2);
};
var sr = 128;
var hi = (t2) => St(t2) && t2.hasAttribute("q:container");
var mt = (t2) => t2.toString(36);
var j = (t2) => parseInt(t2, 36);
var rr = (t2) => {
  const e = t2.indexOf(":");
  return t2 && Hr(t2.slice(e + 1));
};
var $e = "http://www.w3.org/2000/svg";
var J = 1;
var Se = 2;
var ve = [];
var we = (t2, e, n, s) => {
  e.$elm$;
  const r = n.$children$;
  if (r.length === 1 && r[0].$type$ === ":skipRender")
    return void (n.$children$ = e.$children$);
  const o = e.$elm$;
  let i = Ee;
  e.$children$ === ve && o.nodeName === "HEAD" && (i = yi, s |= Se);
  const $3 = mi(e, i);
  return $3.length > 0 && r.length > 0 ? gi(t2, o, $3, r, s) : $3.length > 0 && r.length === 0 ? Mn(t2.$static$, $3, 0, $3.length - 1) : r.length > 0 ? cr(t2, o, null, r, 0, r.length - 1, s) : void 0;
};
var mi = (t2, e) => {
  const n = t2.$children$;
  return n === ve ? t2.$children$ = or(t2.$elm$, e) : n;
};
var gi = (t2, e, n, s, r) => {
  let o = 0, i = 0, $3 = n.length - 1, c2 = n[0], l = n[$3], a = s.length - 1, u = s[0], d = s[a], p2, v3, w2;
  const m2 = [], f2 = t2.$static$;
  for (; o <= $3 && i <= a; )
    if (c2 == null)
      c2 = n[++o];
    else if (l == null)
      l = n[--$3];
    else if (u == null)
      u = s[++i];
    else if (d == null)
      d = s[--a];
    else if (c2.$id$ === u.$id$)
      m2.push(It(t2, c2, u, r)), c2 = n[++o], u = s[++i];
    else if (l.$id$ === d.$id$)
      m2.push(It(t2, l, d, r)), l = n[--$3], d = s[--a];
    else if (c2.$key$ && c2.$id$ === d.$id$)
      c2.$elm$, l.$elm$, m2.push(It(t2, c2, d, r)), Ni(f2, e, c2.$elm$, l.$elm$), c2 = n[++o], d = s[--a];
    else if (l.$key$ && l.$id$ === u.$id$)
      c2.$elm$, l.$elm$, m2.push(It(t2, l, u, r)), Pt(f2, e, l.$elm$, c2.$elm$), l = n[--$3], u = s[++i];
    else {
      if (p2 === void 0 && (p2 = Ri(n, o, $3)), v3 = p2[u.$key$], v3 === void 0) {
        const S3 = wt(t2, u, r, m2);
        Pt(f2, e, S3, c2 == null ? void 0 : c2.$elm$);
      } else if (w2 = n[v3], w2.$type$ !== u.$type$) {
        const S3 = wt(t2, u, r, m2);
        k(S3, (h2) => {
          Pt(f2, e, h2, c2 == null ? void 0 : c2.$elm$);
        });
      } else
        m2.push(It(t2, w2, u, r)), n[v3] = void 0, w2.$elm$, Pt(f2, e, w2.$elm$, c2.$elm$);
      u = s[++i];
    }
  i <= a && m2.push(cr(t2, e, s[a + 1] == null ? null : s[a + 1].$elm$, s, i, a, r));
  let y2 = ln(m2);
  return o <= $3 && (y2 = k(y2, () => {
    Mn(f2, n, o, $3);
  })), y2;
};
var Nt = (t2, e) => {
  const n = et(t2) ? t2.close : null, s = [];
  let r = t2.firstChild;
  for (; (r = Ln(r)) && (e(r) && s.push(r), r = r.nextSibling, r !== n); )
    ;
  return s;
};
var or = (t2, e) => Nt(t2, e).map(ir);
var ir = (t2) => {
  var e;
  return St(t2) ? ((e = K(t2)) == null ? void 0 : e.$vdom$) ?? be(t2) : be(t2);
};
var be = (t2) => {
  if (vt(t2)) {
    const e = new ot(t2.localName, {}, null, ve, 0, en(t2));
    return e.$elm$ = t2, e;
  }
  if (rn(t2)) {
    const e = new ot(t2.nodeName, O, null, ve, 0, null);
    return e.$text$ = t2.data, e.$elm$ = t2, e;
  }
};
var yi = (t2) => {
  const e = t2.nodeType;
  return e === 1 ? t2.hasAttribute("q:head") : e === 111;
};
var tn = (t2) => t2.nodeName === "Q:TEMPLATE";
var Ee = (t2) => {
  const e = t2.nodeType;
  if (e === 3 || e === 111)
    return true;
  if (e !== 1)
    return false;
  const n = t2.nodeName;
  return n !== "Q:TEMPLATE" && (n === "HEAD" ? t2.hasAttribute("q:head") : n !== "STYLE" || !t2.hasAttribute(Ae));
};
var $r = (t2) => {
  const e = {};
  for (const n of t2) {
    const s = Si(n);
    (e[s] ?? (e[s] = new ot(Dt, { [gs]: "" }, null, [], 0, s))).$children$.push(n);
  }
  return e;
};
var It = (t2, e, n, s) => {
  e.$type$, n.$type$, e.$key$, n.$key$, e.$id$, n.$id$;
  const r = e.$elm$, o = n.$type$, i = t2.$static$, $3 = i.$containerState$, c2 = t2.$cmpCtx$;
  if (n.$elm$ = r, o === "#text") {
    i.$visited$.push(r);
    const d = n.$signal$;
    return d && (n.$text$ = Kt(it(d, [4, c2.$element$, d, r]))), void gt(i, r, "data", n.$text$);
  }
  if (o === "#signal")
    return;
  const l = n.$props$, a = n.$flags$, u = U(r, $3);
  if (o !== Dt) {
    let d = !!(s & J);
    if (d || o !== "svg" || (s |= J, d = true), l !== O) {
      1 & a || (u.li.length = 0);
      const p2 = e.$props$;
      n.$props$ = p2;
      for (const v3 in l) {
        let w2 = l[v3];
        if (v3 !== "ref")
          if (un(v3)) {
            const m2 = dn(u.li, v3, w2, $3.$containerEl$);
            ur(i, r, m2);
          } else
            C(w2) && (w2 = it(w2, [1, c2.$element$, w2, r, v3])), v3 === "class" ? w2 = mn(w2, c2) : v3 === "style" && (w2 = Le(w2)), p2[v3] !== w2 && (p2[v3] = w2, Nn(i, r, v3, w2, d));
        else
          w2 !== void 0 && An(w2, r);
      }
    }
    return 2 & a || (d && o === "foreignObject" && (s &= ~J), l[F] !== void 0) || o === "textarea" ? void 0 : we(t2, e, n, s);
  }
  if ("q:renderFn" in l) {
    const d = l.props;
    Ti($3, u, d);
    let p2 = !!(u.$flags$ & Ot);
    return p2 || u.$componentQrl$ || u.$element$.hasAttribute("q:id") || (ks(t2, u), u.$componentQrl$ = d["q:renderFn"], u.$componentQrl$, p2 = true), p2 ? k(vn(t2, u, s), () => jn(t2, u, n, s)) : jn(t2, u, n, s);
  }
  if ("q:s" in l)
    return c2.$slots$, void c2.$slots$.push(n);
  if (F in l)
    gt(i, r, "innerHTML", l[F]);
  else if (!(2 & a))
    return we(t2, e, n, s);
};
var jn = (t2, e, n, s) => {
  if (2 & n.$flags$)
    return;
  const r = t2.$static$, o = $r(n.$children$), i = ar(e);
  for (const $3 in i.slots)
    if (!o[$3]) {
      const c2 = i.slots[$3], l = or(c2, Ee);
      if (l.length > 0) {
        const a = K(c2);
        a && a.$vdom$ && (a.$vdom$.$children$ = []), Mn(r, l, 0, l.length - 1);
      }
    }
  for (const $3 in i.templates) {
    const c2 = i.templates[$3];
    c2 && !o[$3] && (i.templates[$3] = void 0, zn(r, c2));
  }
  return ln(Object.keys(o).map(($3) => {
    const c2 = o[$3], l = lr(r, i, e, $3, t2.$static$.$containerState$), a = wn(l), u = oe(t2), d = l.$element$;
    u.$slotCtx$ = l, l.$vdom$ = c2, c2.$elm$ = d;
    let p2 = s & ~J;
    d.isSvg && (p2 |= J);
    const v3 = r.$addSlots$.findIndex((w2) => w2[0] === d);
    return v3 >= 0 && r.$addSlots$.splice(v3, 1), we(u, a, c2, p2);
  }));
};
var cr = (t2, e, n, s, r, o, i) => {
  const $3 = [];
  for (; r <= o; ++r) {
    const c2 = s[r], l = wt(t2, c2, i, $3);
    Pt(t2.$static$, e, l, n);
  }
  return Rt($3);
};
var Mn = (t2, e, n, s) => {
  for (; n <= s; ++n) {
    const r = e[n];
    r && (r.$elm$, zn(t2, r.$elm$));
  }
};
var lr = (t2, e, n, s, r) => {
  const o = e.slots[s];
  if (o)
    return U(o, r);
  const i = e.templates[s];
  if (i)
    return U(i, r);
  const $3 = hr(t2.$doc$, s), c2 = Oe($3);
  return c2.$parentCtx$ = n, Li(t2, n.$element$, $3), e.templates[s] = $3, c2;
};
var Si = (t2) => t2.$props$[G] ?? "";
var wt = (t2, e, n, s) => {
  const r = e.$type$, o = t2.$static$.$doc$, i = t2.$cmpCtx$;
  if (r === "#text")
    return e.$elm$ = o.createTextNode(e.$text$);
  if (r === "#signal") {
    const m2 = e.$signal$, f2 = m2.value;
    if (Tt(f2)) {
      const y2 = pt(f2);
      if (C(y2))
        throw new Error("NOT IMPLEMENTED: Promise");
      if (Array.isArray(y2))
        throw new Error("NOT IMPLEMENTED: Array");
      {
        const S3 = wt(t2, y2, n, s);
        return it(m2, 4 & n ? [3, S3, m2, S3] : [4, i.$element$, m2, S3]), e.$elm$ = S3;
      }
    }
    {
      const y2 = o.createTextNode(e.$text$);
      return y2.data = e.$text$ = Kt(f2), it(m2, 4 & n ? [3, y2, m2, y2] : [4, i.$element$, m2, y2]), e.$elm$ = y2;
    }
  }
  let $3, c2 = !!(n & J);
  c2 || r !== "svg" || (n |= J, c2 = true);
  const l = r === Dt, a = e.$props$, u = t2.$static$, d = u.$containerState$;
  l ? $3 = Wi(o, c2) : r === "head" ? ($3 = o.head, n |= Se) : ($3 = Pn(o, r, c2), n &= ~Se), 2 & e.$flags$ && (n |= 4), e.$elm$ = $3;
  const p2 = Oe($3);
  if (t2.$slotCtx$ ? (p2.$parentCtx$ = t2.$slotCtx$, p2.$realParentCtx$ = t2.$cmpCtx$) : p2.$parentCtx$ = t2.$cmpCtx$, l) {
    if ("q:renderFn" in a) {
      const m2 = a["q:renderFn"], f2 = Ne(), y2 = d.$subsManager$.$createManager$(), S3 = new Proxy(f2, new Es(d, y2)), h2 = a.props;
      if (d.$proxyMap$.set(f2, S3), p2.$props$ = S3, h2 !== O) {
        const E3 = f2[M] = h2[M] ?? O;
        for (const _3 in h2)
          if (_3 !== "children" && _3 !== G) {
            const g2 = E3[_3];
            C(g2) ? f2["$$" + _3] = g2 : f2[_3] = h2[_3];
          }
      }
      ks(t2, p2), p2.$componentQrl$ = m2;
      const b2 = k(vn(t2, p2, n), () => {
        let E3 = e.$children$;
        if (E3.length === 0)
          return;
        E3.length === 1 && E3[0].$type$ === ":skipRender" && (E3 = E3[0].$children$);
        const _3 = ar(p2), g2 = [], x3 = $r(E3);
        for (const q3 in x3) {
          const R2 = x3[q3], I3 = lr(u, _3, p2, q3, u.$containerState$), st2 = oe(t2), qt = I3.$element$;
          st2.$slotCtx$ = I3, I3.$vdom$ = R2, R2.$elm$ = qt;
          let H3 = n & ~J;
          qt.isSvg && (H3 |= J);
          for (const z4 of R2.$children$) {
            const Ut = wt(st2, z4, H3, g2);
            z4.$elm$, z4.$elm$, pr(u, qt, Ut);
          }
        }
        return Rt(g2);
      });
      return L(b2) && s.push(b2), $3;
    }
    if ("q:s" in a)
      i.$slots$, Fi($3, e.$key$), V($3, "q:sref", i.$id$), V($3, "q:s", ""), i.$slots$.push(e), u.$addSlots$.push([$3, i.$element$]);
    else if (F in a)
      return gt(u, $3, "innerHTML", a[F]), $3;
  } else {
    if (e.$immutableProps$) {
      const m2 = a !== O ? Object.fromEntries(Object.entries(e.$immutableProps$).map(([f2, y2]) => [f2, y2 === M ? a[f2] : y2])) : e.$immutableProps$;
      ns(u, p2, i, m2, c2, true);
    }
    if (a !== O) {
      p2.$vdom$ = e;
      const m2 = e.$immutableProps$ ? Object.fromEntries(Object.entries(a).filter(([f2]) => !(f2 in e.$immutableProps$))) : a;
      e.$props$ = ns(u, p2, i, m2, c2, false);
    }
    if (c2 && r === "foreignObject" && (c2 = false, n &= ~J), i) {
      const m2 = i.$scopeIds$;
      m2 && m2.forEach((f2) => {
        $3.classList.add(f2);
      }), i.$flags$ & ht && (p2.li.push(...i.li), i.$flags$ &= ~ht);
    }
    for (const m2 of p2.li)
      ur(u, $3, m2[0]);
    if (a[F] !== void 0)
      return $3;
    c2 && r === "foreignObject" && (c2 = false, n &= ~J);
  }
  let v3 = e.$children$;
  if (v3.length === 0)
    return $3;
  v3.length === 1 && v3[0].$type$ === ":skipRender" && (v3 = v3[0].$children$);
  const w2 = v3.map((m2) => wt(t2, m2, n, s));
  for (const m2 of w2)
    jt($3, m2);
  return $3;
};
var vi = (t2) => {
  const e = t2.$slots$;
  return e || (t2.$element$.parentElement, t2.$slots$ = wi(t2));
};
var ar = (t2) => {
  const e = vi(t2), n = {}, s = {}, r = Array.from(t2.$element$.childNodes).filter(tn);
  for (const o of e)
    o.$elm$, n[o.$key$ ?? ""] = o.$elm$;
  for (const o of r)
    s[Z(o, G) ?? ""] = o;
  return { slots: n, templates: s };
};
var wi = (t2) => {
  const e = t2.$element$.parentElement;
  return Ji(e, "q:sref", t2.$id$).map(be);
};
var bi = (t2, e, n) => (gt(t2, e.style, "cssText", n), true);
var ts = (t2, e, n) => (e.namespaceURI === $e ? te(t2, e, "class", n) : gt(t2, e, "className", n), true);
var es = (t2, e, n, s) => s in e && ((e[s] !== n || s === "value" && !e.hasAttribute(s)) && (s === "value" && e.tagName !== "OPTION" ? Mi(t2, e, s, n) : gt(t2, e, s, n)), true);
var Bt = (t2, e, n, s) => (te(t2, e, s.toLowerCase(), n), true);
var Ei = (t2, e, n) => (gt(t2, e, "innerHTML", n), true);
var xi = () => true;
var _i = { style: bi, class: ts, className: ts, value: es, checked: es, href: Bt, list: Bt, form: Bt, tabIndex: Bt, download: Bt, innerHTML: xi, [F]: Ei };
var Nn = (t2, e, n, s, r) => {
  if (qs(n))
    return void te(t2, e, n, s != null ? String(s) : s);
  const o = _i[n];
  o && o(t2, e, s, n) || (r || !(n in e) ? (n.startsWith(vs) && fr(n.slice(15)), te(t2, e, n, s)) : gt(t2, e, n, s));
};
var ns = (t2, e, n, s, r, o) => {
  const i = {}, $3 = e.$element$;
  for (const c2 in s) {
    let l = s[c2];
    if (c2 !== "ref")
      if (un(c2))
        dn(e.li, c2, l, t2.$containerState$.$containerEl$);
      else {
        if (C(l) && (l = it(l, o ? [1, $3, l, n.$element$, c2] : [2, n.$element$, l, $3, c2])), c2 === "class") {
          if (l = mn(l, n), !l)
            continue;
        } else
          c2 === "style" && (l = Le(l));
        i[c2] = l, Nn(t2, $3, c2, l, r);
      }
    else
      l !== void 0 && An(l, $3);
  }
  return i;
};
var Ti = (t2, e, n) => {
  let s = e.$props$;
  if (s || (e.$props$ = s = re(Ne(), t2)), n === O)
    return;
  const r = Q(s), o = kt(s), i = o[M] = n[M] ?? O;
  for (const $3 in n)
    if ($3 !== "children" && $3 !== G && !i[$3]) {
      const c2 = n[$3];
      o[$3] !== c2 && (o[$3] = c2, r.$notifySubs$($3));
    }
};
var Jt = (t2, e, n, s) => {
  if (n.$clearSub$(t2), vt(t2)) {
    if (s && t2.hasAttribute("q:s"))
      return void e.$rmSlots$.push(t2);
    const r = K(t2);
    r && ri(r, n);
    const o = et(t2) ? t2.close : null;
    let i = t2.firstChild;
    for (; (i = Ln(i)) && (Jt(i, e, n, true), i = i.nextSibling, i !== o); )
      ;
  }
};
var ki = async (t2) => {
  Ci(t2);
};
var jt = (t2, e) => {
  et(e) ? e.appendTo(t2) : t2.appendChild(e);
};
var qi = (t2, e) => {
  et(e) ? e.remove() : t2.removeChild(e);
};
var Ii = (t2, e, n) => {
  et(e) ? e.insertBeforeTo(t2, (n == null ? void 0 : n.nextSibling) ?? null) : t2.insertBefore(e, (n == null ? void 0 : n.nextSibling) ?? null);
};
var De = (t2, e, n) => {
  et(e) ? e.insertBeforeTo(t2, xe(n)) : t2.insertBefore(e, xe(n));
};
var Ri = (t2, e, n) => {
  const s = {};
  for (let r = e; r <= n; ++r) {
    const o = t2[r].$key$;
    o != null && (s[o] = r);
  }
  return s;
};
var ur = (t2, e, n) => {
  n.startsWith("on:") || te(t2, e, n, ""), fr(n);
};
var fr = (t2) => {
  var e;
  {
    const n = rr(t2);
    try {
      ((e = globalThis).qwikevents || (e.qwikevents = [])).push(n);
    } catch {
    }
  }
};
var te = (t2, e, n, s) => {
  t2.$operations$.push({ $operation$: Ai, $args$: [e, n, s] });
};
var Ai = (t2, e, n) => {
  if (n == null || n === false)
    t2.removeAttribute(e);
  else {
    const s = n === true ? "" : String(n);
    V(t2, e, s);
  }
};
var gt = (t2, e, n, s) => {
  t2.$operations$.push({ $operation$: dr, $args$: [e, n, s] });
};
var Mi = (t2, e, n, s) => {
  t2.$postOperations$.push({ $operation$: dr, $args$: [e, n, s] });
};
var dr = (t2, e, n) => {
  try {
    t2[e] = n ?? "", n == null && yt(t2) && St(t2) && t2.removeAttribute(e);
  } catch (s) {
    Et(qe(6), e, { node: t2, value: n }, s);
  }
};
var Pn = (t2, e, n) => n ? t2.createElementNS($e, e) : t2.createElement(e);
var Pt = (t2, e, n, s) => (t2.$operations$.push({ $operation$: De, $args$: [e, n, s || null] }), n);
var Ni = (t2, e, n, s) => (t2.$operations$.push({ $operation$: Ii, $args$: [e, n, s || null] }), n);
var pr = (t2, e, n) => (t2.$operations$.push({ $operation$: jt, $args$: [e, n] }), n);
var Pi = (t2, e) => {
  t2.$containerState$.$styleIds$.add(e.styleId), t2.$postOperations$.push({ $operation$: zi, $args$: [t2.$containerState$, e] });
};
var zi = (t2, e) => {
  const n = t2.$containerEl$, s = se(n), r = s.documentElement === n, o = s.head, i = s.createElement("style");
  V(i, Ae, e.styleId), V(i, "hidden", ""), i.textContent = e.content, r && o ? jt(o, i) : De(n, i, n.firstChild);
};
var Li = (t2, e, n) => {
  t2.$operations$.push({ $operation$: Oi, $args$: [e, n] });
};
var Oi = (t2, e) => {
  De(t2, e, t2.firstChild);
};
var zn = (t2, e) => {
  vt(e) && Jt(e, t2, t2.$containerState$.$subsManager$, true), t2.$operations$.push({ $operation$: Di, $args$: [e, t2] });
};
var Di = (t2) => {
  const e = t2.parentElement;
  e && qi(e, t2);
};
var hr = (t2, e) => {
  const n = Pn(t2, "q:template", false);
  return V(n, G, e), V(n, "hidden", ""), V(n, "aria-hidden", "true"), n;
};
var Ci = (t2) => {
  for (const e of t2.$operations$)
    e.$operation$.apply(void 0, e.$args$);
  Qi(t2);
};
var en = (t2) => Z(t2, "q:key");
var Fi = (t2, e) => {
  e !== null && V(t2, "q:key", e);
};
var Qi = (t2) => {
  const e = t2.$containerState$.$subsManager$;
  for (const n of t2.$rmSlots$) {
    const s = en(n), r = Nt(n, Ee);
    if (r.length > 0) {
      const o = n.getAttribute("q:sref"), i = t2.$roots$.find(($3) => $3.$id$ === o);
      if (i) {
        const $3 = i.$element$;
        if ($3.isConnected)
          if (Nt($3, tn).some((c2) => Z(c2, G) === s))
            Jt(n, t2, e, false);
          else {
            const c2 = hr(t2.$doc$, s);
            for (const l of r)
              jt(c2, l);
            De($3, c2, $3.firstChild);
          }
        else
          Jt(n, t2, e, false);
      } else
        Jt(n, t2, e, false);
    }
  }
  for (const [n, s] of t2.$addSlots$) {
    const r = en(n), o = Nt(s, tn).find((i) => i.getAttribute(G) === r);
    o && (Nt(o, Ee).forEach((i) => {
      jt(n, i);
    }), o.remove());
  }
};
var ss = () => {
};
var Wi = (t2, e) => {
  const n = t2.createComment("qv "), s = t2.createComment("/qv");
  return new mr(n, s, e);
};
var Ui = (t2) => {
  if (!t2)
    return {};
  const e = t2.split(" ");
  return Object.fromEntries(e.map((n) => {
    const s = n.indexOf("=");
    return s >= 0 ? [n.slice(0, s), Gi(n.slice(s + 1))] : [n, ""];
  }));
};
var Bi = (t2) => {
  const e = [];
  return Object.entries(t2).forEach(([n, s]) => {
    e.push(s ? `${n}=${Vi(s)}` : `${n}`);
  }), e.join(" ");
};
var Hi = (t2, e, n) => t2.ownerDocument.createTreeWalker(t2, 128, { acceptNode(s) {
  const r = ce(s);
  return r && Z(r, e) === n ? 1 : 2;
} });
var Ji = (t2, e, n) => {
  const s = Hi(t2, e, n), r = [];
  let o = null;
  for (; o = s.nextNode(); )
    r.push(ce(o));
  return r;
};
var Vi = (t2) => t2.replace(/ /g, "+");
var Gi = (t2) => t2.replace(/\+/g, " ");
var Dt = ":virtual";
var mr = class {
  constructor(e, n, s) {
    this.open = e, this.close = n, this.isSvg = s, this._qc_ = null, this.nodeType = 111, this.localName = Dt, this.nodeName = Dt;
    const r = this.ownerDocument = e.ownerDocument;
    this.$template$ = Pn(r, "template", false), this.$attributes$ = Ui(e.data.slice(3)), e.data.startsWith("qv "), e.__virtual = this, n.__virtual = this;
  }
  insertBefore(e, n) {
    const s = this.parentElement;
    return s ? s.insertBefore(e, n || this.close) : this.$template$.insertBefore(e, n), e;
  }
  remove() {
    const e = this.parentElement;
    if (e) {
      const n = this.childNodes;
      this.$template$.childElementCount, e.removeChild(this.open);
      for (let s = 0; s < n.length; s++)
        this.$template$.appendChild(n[s]);
      e.removeChild(this.close);
    }
  }
  appendChild(e) {
    return this.insertBefore(e, null);
  }
  insertBeforeTo(e, n) {
    const s = this.childNodes;
    e.insertBefore(this.open, n);
    for (const r of s)
      e.insertBefore(r, n);
    e.insertBefore(this.close, n), this.$template$.childElementCount;
  }
  appendTo(e) {
    this.insertBeforeTo(e, null);
  }
  get namespaceURI() {
    var e;
    return ((e = this.parentElement) == null ? void 0 : e.namespaceURI) ?? "";
  }
  removeChild(e) {
    this.parentElement ? this.parentElement.removeChild(e) : this.$template$.removeChild(e);
  }
  getAttribute(e) {
    return this.$attributes$[e] ?? null;
  }
  hasAttribute(e) {
    return e in this.$attributes$;
  }
  setAttribute(e, n) {
    this.$attributes$[e] = n, this.open.data = rs(this.$attributes$);
  }
  removeAttribute(e) {
    delete this.$attributes$[e], this.open.data = rs(this.$attributes$);
  }
  matches(e) {
    return false;
  }
  compareDocumentPosition(e) {
    return this.open.compareDocumentPosition(e);
  }
  closest(e) {
    const n = this.parentElement;
    return n ? n.closest(e) : null;
  }
  querySelectorAll(e) {
    const n = [];
    return Nt(this, Or).forEach((s) => {
      vt(s) && (s.matches(e) && n.push(s), n.concat(Array.from(s.querySelectorAll(e))));
    }), n;
  }
  querySelector(e) {
    for (const n of this.childNodes)
      if (St(n)) {
        if (n.matches(e))
          return n;
        const s = n.querySelector(e);
        if (s !== null)
          return s;
      }
    return null;
  }
  get innerHTML() {
    return "";
  }
  set innerHTML(e) {
    const n = this.parentElement;
    n ? (this.childNodes.forEach((s) => this.removeChild(s)), this.$template$.innerHTML = e, n.insertBefore(this.$template$.content, this.close)) : this.$template$.innerHTML = e;
  }
  get firstChild() {
    if (this.parentElement) {
      const e = this.open.nextSibling;
      return e === this.close ? null : e;
    }
    return this.$template$.firstChild;
  }
  get nextSibling() {
    return this.close.nextSibling;
  }
  get previousSibling() {
    return this.open.previousSibling;
  }
  get childNodes() {
    if (!this.parentElement)
      return Array.from(this.$template$.childNodes);
    const e = [];
    let n = this.open;
    for (; (n = n.nextSibling) && n !== this.close; )
      e.push(n);
    return e;
  }
  get isConnected() {
    return this.open.isConnected;
  }
  get parentElement() {
    return this.open.parentElement;
  }
};
var rs = (t2) => `qv ${Bi(t2)}`;
var Ln = (t2) => {
  if (t2 == null)
    return null;
  if (ee(t2)) {
    const e = ce(t2);
    if (e)
      return e;
  }
  return t2;
};
var Ki = (t2) => {
  let e = t2, n = 1;
  for (; e = e.nextSibling; )
    if (ee(e)) {
      const s = e.__virtual;
      if (s)
        e = s;
      else if (e.data.startsWith("qv "))
        n++;
      else if (e.data === "/qv" && (n--, n === 0))
        return e;
    }
};
var ce = (t2) => {
  var n;
  const e = t2.__virtual;
  if (e)
    return e;
  if (t2.data.startsWith("qv ")) {
    const s = Ki(t2);
    return new mr(t2, s, ((n = t2.parentElement) == null ? void 0 : n.namespaceURI) === $e);
  }
  return null;
};
var xe = (t2) => t2 == null ? null : et(t2) ? t2.open : t2;
var Rc = async (t2) => {
  const e = Rn(null, null), n = gr(e);
  let s;
  for (T(t2, n, false); (s = n.$promises$).length > 0; ) {
    n.$promises$ = [];
    const l = await Promise.allSettled(s);
    for (const a of l)
      a.status === "rejected" && console.error(a.reason);
  }
  const r = Array.from(n.$objSet$.keys());
  let o = 0;
  const i = /* @__PURE__ */ new Map();
  for (const l of r)
    i.set(l, mt(o)), o++;
  if (n.$noSerialize$.length > 0) {
    const l = i.get(void 0);
    for (const a of n.$noSerialize$)
      i.set(a, l);
  }
  const $3 = (l) => {
    let a = "";
    if (L(l)) {
      const d = yr(l);
      if (!d)
        throw P(27, l);
      l = d.value, a += d.resolved ? "~" : "_";
    }
    if ($t(l)) {
      const d = kt(l);
      d && (a += "!", l = d);
    }
    const u = i.get(l);
    if (u === void 0)
      throw P(27, l);
    return u + a;
  }, c2 = vr(r, $3, null, n, e);
  return JSON.stringify({ _entry: $3(t2), _objs: c2 });
};
var Xi = async (t2) => {
  const e = se(t2), n = e.documentElement, s = ps(t2) ? n : t2;
  if (Z(s, "q:container") === "paused")
    throw P(21);
  const r = s === e.documentElement ? e.body : s, o = Wt(s), i = Zi(s, o$);
  V(s, "q:container", "paused");
  for (const u of i) {
    const d = u.$element$, p2 = u.li;
    if (u.$scopeIds$) {
      const v3 = xs(u.$scopeIds$);
      v3 && d.setAttribute("q:sstyle", v3);
    }
    if (u.$id$ && d.setAttribute("q:id", u.$id$), St(d) && p2.length > 0) {
      const v3 = fn(p2);
      for (const w2 of v3)
        d.setAttribute(w2[0], Cn(w2[1], o, u));
    }
  }
  const $3 = await Yi(i, o, (u) => yt(u) && rn(u) ? c$(u, o) : null), c2 = e.createElement("script");
  V(c2, "type", "qwik/json"), c2.textContent = n$(JSON.stringify($3.state, void 0, void 0)), r.appendChild(c2);
  const l = Array.from(o.$events$, (u) => JSON.stringify(u)), a = e.createElement("script");
  return a.textContent = `(window.qwikevents||=[]).push(${l.join(", ")})`, r.appendChild(a), $3;
};
var Yi = async (t2, e, n, s) => {
  var S3;
  const r = gr(e);
  s == null || s.forEach((h2, b2) => {
    r.$seen$.add(b2);
  });
  let o = false;
  for (const h2 of t2)
    if (h2.$tasks$)
      for (const b2 of h2.$tasks$)
        Gs(b2) && r.$resources$.push(b2.$state$), Xs(b2);
  for (const h2 of t2) {
    const b2 = h2.$element$, E3 = h2.li;
    for (const _3 of E3)
      if (St(b2)) {
        const g2 = _3[1], x3 = g2.$captureRef$;
        if (x3)
          for (const q3 of x3)
            T(q3, r, true);
        r.$qrls$.push(g2), o = true;
      }
  }
  if (!o)
    return { state: { refs: {}, ctx: {}, objs: [], subs: [] }, objs: [], funcs: [], qrls: [], resources: r.$resources$, mode: "static" };
  let i;
  for (; (i = r.$promises$).length > 0; )
    r.$promises$ = [], await Promise.all(i);
  const $3 = r.$elements$.length > 0;
  if ($3) {
    for (const h2 of r.$deferElements$)
      On(h2, r, h2.$element$);
    for (const h2 of t2)
      ji(h2, r);
  }
  for (; (i = r.$promises$).length > 0; )
    r.$promises$ = [], await Promise.all(i);
  const c2 = /* @__PURE__ */ new Map(), l = Array.from(r.$objSet$.keys()), a = /* @__PURE__ */ new Map(), u = (h2) => {
    let b2 = "";
    if (L(h2)) {
      const g2 = yr(h2);
      if (!g2)
        return null;
      h2 = g2.value, b2 += g2.resolved ? "~" : "_";
    }
    if ($t(h2)) {
      const g2 = kt(h2);
      if (g2)
        b2 += "!", h2 = g2;
      else if (vt(h2)) {
        const x3 = ((q3) => {
          let R2 = c2.get(q3);
          return R2 === void 0 && (R2 = $$(q3), R2 || console.warn("Missing ID", q3), c2.set(q3, R2)), R2;
        })(h2);
        return x3 ? "#" + x3 + b2 : null;
      }
    }
    const E3 = a.get(h2);
    if (E3)
      return E3 + b2;
    const _3 = s == null ? void 0 : s.get(h2);
    return _3 ? "*" + _3 : n ? n(h2) : null;
  }, d = (h2) => {
    const b2 = u(h2);
    if (b2 === null) {
      if (Qn(h2)) {
        const E3 = mt(a.size);
        return a.set(h2, E3), E3;
      }
      throw P(27, h2);
    }
    return b2;
  }, p2 = /* @__PURE__ */ new Map();
  for (const h2 of l) {
    const b2 = (S3 = i$(h2, e)) == null ? void 0 : S3.$subs$;
    if (!b2)
      continue;
    const E3 = kr(h2) ?? 0, _3 = [];
    1 & E3 && _3.push(E3);
    for (const g2 of b2) {
      const x3 = g2[1];
      g2[0] === 0 && yt(x3) && et(x3) && !r.$elements$.includes(K(x3)) || _3.push(g2);
    }
    _3.length > 0 && p2.set(h2, _3);
  }
  l.sort((h2, b2) => (p2.has(h2) ? 0 : 1) - (p2.has(b2) ? 0 : 1));
  let v3 = 0;
  for (const h2 of l)
    a.set(h2, mt(v3)), v3++;
  if (r.$noSerialize$.length > 0) {
    const h2 = a.get(void 0);
    for (const b2 of r.$noSerialize$)
      a.set(b2, h2);
  }
  const w2 = [];
  for (const h2 of l) {
    const b2 = p2.get(h2);
    if (b2 == null)
      break;
    w2.push(b2.map((E3) => typeof E3 == "number" ? `_${E3}` : H$(E3, u)).filter(ms));
  }
  w2.length, p2.size;
  const m2 = vr(l, d, u, r, e), f2 = {}, y2 = {};
  for (const h2 of t2) {
    const b2 = h2.$element$, E3 = h2.$id$, _3 = h2.$refMap$, g2 = h2.$props$, x3 = h2.$contexts$, q3 = h2.$tasks$, R2 = h2.$componentQrl$, I3 = h2.$seq$, st2 = {}, qt = et(b2) && r.$elements$.includes(h2);
    if (_3.length > 0) {
      const H3 = bt(_3, d, " ");
      H3 && (y2[E3] = H3);
    } else if ($3) {
      let H3 = false;
      if (qt) {
        const z4 = u(g2);
        st2.h = d(R2) + (z4 ? " " + z4 : ""), H3 = true;
      } else {
        const z4 = u(g2);
        z4 && (st2.h = " " + z4, H3 = true);
      }
      if (q3 && q3.length > 0) {
        const z4 = bt(q3, u, " ");
        z4 && (st2.w = z4, H3 = true);
      }
      if (qt && I3 && I3.length > 0) {
        const z4 = bt(I3, d, " ");
        st2.s = z4, H3 = true;
      }
      if (x3) {
        const z4 = [];
        x3.forEach((zr, Lr) => {
          const Bn = u(zr);
          Bn && z4.push(`${Lr}=${Bn}`);
        });
        const Ut = z4.join(" ");
        Ut && (st2.c = Ut, H3 = true);
      }
      H3 && (f2[E3] = st2);
    }
  }
  return { state: { refs: y2, ctx: f2, objs: m2, subs: w2 }, objs: l, funcs: r.$inlinedFunctions$, resources: r.$resources$, qrls: r.$qrls$, mode: $3 ? "render" : "listeners" };
};
var bt = (t2, e, n) => {
  let s = "";
  for (const r of t2) {
    const o = e(r);
    o !== null && (s !== "" && (s += n), s += o);
  }
  return s;
};
var Zi = (t2, e) => {
  const n = [], s = e(t2);
  s !== void 0 && n.push(s);
  const r = t2.ownerDocument.createTreeWalker(t2, 1 | sr, { acceptNode(o) {
    if (r$(o))
      return 2;
    const i = e(o);
    return i !== void 0 && n.push(i), 3;
  } });
  for (; r.nextNode(); )
    ;
  return n;
};
var ji = (t2, e) => {
  var r;
  const n = t2.$realParentCtx$ || t2.$parentCtx$, s = t2.$props$;
  if (n && s && !Sr(s) && e.$elements$.includes(n)) {
    const o = (r = Q(s)) == null ? void 0 : r.$subs$, i = t2.$element$;
    if (o)
      for (const [$3, c2] of o)
        $3 === 0 ? (c2 !== i && Ct(Q(s), e, false), yt(c2) ? e$(c2, e) : T(c2, e, true)) : (T(s, e, false), Ct(Q(s), e, false));
  }
};
var gr = (t2) => {
  const e = [];
  return t2.$inlineFns$.forEach((n, s) => {
    for (; e.length <= n; )
      e.push("");
    e[n] = s;
  }), { $containerState$: t2, $seen$: /* @__PURE__ */ new Set(), $objSet$: /* @__PURE__ */ new Set(), $prefetch$: 0, $noSerialize$: [], $inlinedFunctions$: e, $resources$: [], $elements$: [], $qrls$: [], $deferElements$: [], $promises$: [] };
};
var t$ = (t2, e) => {
  const n = K(t2);
  e.$elements$.includes(n) || (e.$elements$.push(n), n.$flags$ & kn ? (e.$prefetch$++, On(n, e, true), e.$prefetch$--) : e.$deferElements$.push(n));
};
var e$ = (t2, e) => {
  const n = K(t2);
  if (n) {
    if (e.$elements$.includes(n))
      return;
    e.$elements$.push(n), On(n, e, t2);
  }
};
var On = (t2, e, n) => {
  if (t2.$props$ && !Sr(t2.$props$) && (T(t2.$props$, e, n), Ct(Q(t2.$props$), e, n)), t2.$componentQrl$ && T(t2.$componentQrl$, e, n), t2.$seq$)
    for (const s of t2.$seq$)
      T(s, e, n);
  if (t2.$tasks$) {
    const s = e.$containerState$.$subsManager$.$groupToManagers$;
    for (const r of t2.$tasks$)
      s.has(r) && T(r, e, n);
  }
  if (n === true && (os(t2, e), t2.$dynamicSlots$))
    for (const s of t2.$dynamicSlots$)
      os(s, e);
};
var os = (t2, e) => {
  for (; t2; ) {
    if (t2.$contexts$)
      for (const n of t2.$contexts$.values())
        T(n, e, true);
    t2 = t2.$parentCtx$;
  }
};
var n$ = (t2) => t2.replace(/<(\/?script)/gi, "\\x3C$1");
var Ct = (t2, e, n) => {
  if (e.$seen$.has(t2))
    return;
  e.$seen$.add(t2);
  const s = t2.$subs$;
  for (const r of s)
    if (r[0] > 0 && T(r[2], e, n), n === true) {
      const o = r[1];
      yt(o) && et(o) ? r[0] === 0 && t$(o, e) : T(o, e, true);
    }
};
var nn = Symbol();
var s$ = (t2) => t2.then((e) => (t2[nn] = { resolved: true, value: e }, e), (e) => (t2[nn] = { resolved: false, value: e }, e));
var yr = (t2) => t2[nn];
var T = (t2, e, n) => {
  if (t2 != null) {
    const s = typeof t2;
    switch (s) {
      case "function":
      case "object": {
        if (e.$seen$.has(t2))
          return;
        if (e.$seen$.add(t2), _r(t2))
          return e.$objSet$.add(void 0), void e.$noSerialize$.push(t2);
        const r = t2, o = kt(t2);
        if (o) {
          const i = !(2 & kr(t2 = o));
          if (n && i && Ct(Q(r), e, n), Tr(r))
            return void e.$objSet$.add(t2);
        }
        if (D$(t2, e, n))
          return void e.$objSet$.add(t2);
        if (L(t2))
          return void e.$promises$.push(s$(t2).then((i) => {
            T(i, e, n);
          }));
        if (s === "object") {
          if (yt(t2))
            return;
          if (A(t2))
            for (let i = 0; i < t2.length; i++)
              T(r[i], e, n);
          else if (ne(t2))
            for (const i in t2)
              T(r[i], e, n);
        }
        break;
      }
    }
  }
  e.$objSet$.add(t2);
};
var r$ = (t2) => St(t2) && t2.hasAttribute("q:container");
var o$ = (t2) => {
  const e = Ln(t2);
  if (vt(e)) {
    const n = K(e);
    if (n && n.$id$)
      return n;
  }
};
var i$ = (t2, e) => {
  if (!$t(t2))
    return;
  if (t2 instanceof Zt)
    return Q(t2);
  const n = e.$proxyMap$.get(t2);
  return n ? Q(n) : void 0;
};
var $$ = (t2) => {
  const e = K(t2);
  return e ? e.$id$ : null;
};
var c$ = (t2, e) => {
  const n = t2.previousSibling;
  if (n && ee(n) && n.data.startsWith("t="))
    return "#" + n.data.slice(2);
  const s = t2.ownerDocument, r = mt(e.$elementIndex$++), o = s.createComment(`t=${r}`), i = s.createComment(""), $3 = t2.parentElement;
  return $3.insertBefore(o, t2), $3.insertBefore(i, t2.nextSibling), "#" + r;
};
var Sr = (t2) => Object.keys(t2).length === 0;
function vr(t2, e, n, s, r) {
  return t2.map((o) => {
    if (o === null)
      return null;
    const i = typeof o;
    switch (i) {
      case "undefined":
        return Fe;
      case "number":
        if (!Number.isFinite(o))
          break;
        return o;
      case "string":
        if (o.charCodeAt(0) < 32)
          break;
        return o;
      case "boolean":
        return o;
    }
    const $3 = C$(o, e, s, r);
    if ($3 !== void 0)
      return $3;
    if (i === "object") {
      if (A(o))
        return o.map(e);
      if (ne(o)) {
        const c2 = {};
        for (const l in o)
          if (n) {
            const a = n(o[l]);
            a !== null && (c2[l] = a);
          } else
            c2[l] = e(o[l]);
        return c2;
      }
    }
    throw P(3, o);
  });
}
var Vt = (t2, e, n = rt) => Ue(null, e, t2, null, null, n, null);
var l$ = (t2, e = rt) => Ue(null, t2, null, null, null, e, null);
var Dn = (t2, e = {}) => {
  var l, a;
  let n = t2.$symbol$, s = t2.$chunk$;
  const r = t2.$refSymbol$ ?? n, o = Ie();
  if (o) {
    const u = o.chunkForSymbol(r, s, (l = t2.dev) == null ? void 0 : l.file);
    u ? (s = u[1], t2.$refSymbol$ || (n = u[0])) : console.error("serializeQRL: Cannot resolve symbol", n, "in", s, (a = t2.dev) == null ? void 0 : a.file);
  }
  if (s == null)
    throw P(31, t2.$symbol$);
  if (s.startsWith("./") && (s = s.slice(2)), X$(t2))
    if (e.$containerState$) {
      const u = e.$containerState$, d = t2.resolved.toString();
      let p2 = u.$inlineFns$.get(d);
      p2 === void 0 && (p2 = u.$inlineFns$.size, u.$inlineFns$.set(d, p2)), n = String(p2);
    } else
      hs("Sync QRL without containerState");
  let i = `${s}#${n}`;
  const $3 = t2.$capture$, c2 = t2.$captureRef$;
  return c2 && c2.length ? e.$getObjId$ ? i += `[${bt(c2, e.$getObjId$, " ")}]` : e.$addRefMap$ && (i += `[${bt(c2, e.$addRefMap$, " ")}]`) : $3 && $3.length > 0 && (i += `[${$3.join(" ")}]`), i;
};
var Cn = (t2, e, n) => {
  n.$element$;
  const s = { $containerState$: e, $addRefMap$: (r) => a$(n.$refMap$, r) };
  return bt(t2, (r) => Dn(r, s), `
`);
};
var Ce = (t2, e) => {
  const n = t2.length, s = is(t2, 0, "#"), r = is(t2, s, "["), o = Math.min(s, r), i = t2.substring(0, o), $3 = s == n ? s : s + 1, c2 = $3 == r ? "default" : t2.substring($3, r), l = r === n ? rt : t2.substring(r + 1, n - 1).split(" "), a = Ue(i, c2, null, null, l, null, null);
  return e && a.$setContainer$(e), a;
};
var is = (t2, e, n) => {
  const s = t2.length, r = t2.indexOf(n, e == s ? 0 : e);
  return r == -1 ? s : r;
};
var a$ = (t2, e) => {
  const n = t2.indexOf(e);
  return n === -1 ? (t2.push(e), String(t2.length - 1)) : String(n);
};
var wr = (t2, e) => (t2.$capture$, t2.$captureRef$ = t2.$capture$.map((n) => {
  const s = parseInt(n, 10), r = e.$refMap$[s];
  return e.$refMap$.length > s, r;
}));
var u$ = (t2) => ({ __brand: "resource", value: void 0, loading: !nt(), _resolved: void 0, _error: void 0, _state: "pending", _timeout: (t2 == null ? void 0 : t2.timeout) ?? -1, _cache: 0 });
var f$ = (t2) => $t(t2) && t2.__brand === "resource";
var d$ = (t2, e) => {
  const n = t2._state;
  return n === "resolved" ? `0 ${e(t2._resolved)}` : n === "pending" ? "1" : `2 ${e(t2._error)}`;
};
var p$ = (t2) => {
  const [e, n] = t2.split(" "), s = u$(void 0);
  return s.value = Promise.resolve(), e === "0" ? (s._state = "resolved", s._resolved = n, s.loading = false) : e === "1" ? (s._state = "pending", s.value = new Promise(() => {
  }), s.loading = true) : e === "2" && (s._state = "rejected", s._error = n, s.loading = false), s;
};
var _e = (t2) => ft(dt, { [gs]: "" }, 0, t2.name ?? "");
var Fe = "";
function N(t2) {
  return { $prefixCode$: t2.$prefix$.charCodeAt(0), $prefixChar$: t2.$prefix$, $test$: t2.$test$, $serialize$: t2.$serialize$, $prepare$: t2.$prepare$, $fill$: t2.$fill$, $collect$: t2.$collect$, $subs$: t2.$subs$ };
}
var h$ = N({ $prefix$: "", $test$: (t2) => Qn(t2), $collect$: (t2, e, n) => {
  if (t2.$captureRef$)
    for (const s of t2.$captureRef$)
      T(s, e, n);
  e.$prefetch$ === 0 && e.$qrls$.push(t2);
}, $serialize$: (t2, e) => Dn(t2, { $getObjId$: e }), $prepare$: (t2, e) => Ce(t2, e.$containerEl$), $fill$: (t2, e) => {
  t2.$capture$ && t2.$capture$.length > 0 && (t2.$captureRef$ = t2.$capture$.map(e), t2.$capture$ = null);
} });
var m$ = N({ $prefix$: "", $test$: (t2) => xn(t2), $collect$: (t2, e, n) => {
  T(t2.$qrl$, e, n), t2.$state$ && (T(t2.$state$, e, n), n === true && t2.$state$ instanceof Zt && Ct(t2.$state$[tt], e, true));
}, $serialize$: (t2, e) => jo(t2, e), $prepare$: (t2) => ti(t2), $fill$: (t2, e) => {
  t2.$el$ = e(t2.$el$), t2.$qrl$ = e(t2.$qrl$), t2.$state$ && (t2.$state$ = e(t2.$state$));
} });
var g$ = N({ $prefix$: "", $test$: (t2) => f$(t2), $collect$: (t2, e, n) => {
  T(t2.value, e, n), T(t2._resolved, e, n);
}, $serialize$: (t2, e) => d$(t2, e), $prepare$: (t2) => p$(t2), $fill$: (t2, e) => {
  if (t2._state === "resolved")
    t2._resolved = e(t2._resolved), t2.value = Promise.resolve(t2._resolved);
  else if (t2._state === "rejected") {
    const n = Promise.reject(t2._error);
    n.catch(() => null), t2._error = e(t2._error), t2.value = n;
  }
} });
var y$ = N({ $prefix$: "", $test$: (t2) => t2 instanceof URL, $serialize$: (t2) => t2.href, $prepare$: (t2) => new URL(t2) });
var S$ = N({ $prefix$: "", $test$: (t2) => t2 instanceof Date, $serialize$: (t2) => t2.toISOString(), $prepare$: (t2) => new Date(t2) });
var v$ = N({ $prefix$: "\x07", $test$: (t2) => t2 instanceof RegExp, $serialize$: (t2) => `${t2.flags} ${t2.source}`, $prepare$: (t2) => {
  const e = t2.indexOf(" "), n = t2.slice(e + 1), s = t2.slice(0, e);
  return new RegExp(n, s);
} });
var w$ = N({ $prefix$: "", $test$: (t2) => t2 instanceof Error, $serialize$: (t2) => t2.message, $prepare$: (t2) => {
  const e = new Error(t2);
  return e.stack = void 0, e;
} });
var b$ = N({ $prefix$: "", $test$: (t2) => !!t2 && typeof t2 == "object" && ps(t2), $prepare$: (t2, e, n) => n });
var Te = Symbol("serializable-data");
var E$ = N({ $prefix$: "", $test$: (t2) => Un(t2), $serialize$: (t2, e) => {
  const [n] = t2[Te];
  return Dn(n, { $getObjId$: e });
}, $prepare$: (t2, e) => {
  const n = Ce(t2, e.$containerEl$);
  return Wn(n);
}, $fill$: (t2, e) => {
  var s;
  const [n] = t2[Te];
  (s = n.$capture$) != null && s.length && (n.$captureRef$ = n.$capture$.map(e), n.$capture$ = null);
} });
var x$ = N({ $prefix$: "", $test$: (t2) => t2 instanceof Ze, $collect$: (t2, e, n) => {
  if (t2.$args$)
    for (const s of t2.$args$)
      T(s, e, n);
}, $serialize$: (t2, e, n) => {
  const s = xo(t2);
  let r = n.$inlinedFunctions$.indexOf(s);
  return r < 0 && (r = n.$inlinedFunctions$.length, n.$inlinedFunctions$.push(s)), bt(t2.$args$, e, " ") + " @" + mt(r);
}, $prepare$: (t2) => {
  const e = t2.split(" "), n = e.slice(0, -1), s = e[e.length - 1];
  return new Ze(s, n, s);
}, $fill$: (t2, e) => {
  t2.$func$, t2.$func$ = e(t2.$func$), t2.$args$ = t2.$args$.map(e);
} });
var _$ = N({ $prefix$: "", $test$: (t2) => t2 instanceof Zt, $collect$: (t2, e, n) => (T(t2.untrackedValue, e, n), n === true && !(t2[Yt] & di) && Ct(t2[tt], e, true), t2), $serialize$: (t2, e) => e(t2.untrackedValue), $prepare$: (t2, e) => {
  var n;
  return new Zt(t2, (n = e == null ? void 0 : e.$subsManager$) == null ? void 0 : n.$createManager$(), 0);
}, $subs$: (t2, e) => {
  t2[tt].$addSubs$(e);
}, $fill$: (t2, e) => {
  t2.untrackedValue = e(t2.untrackedValue);
} });
var T$ = N({ $prefix$: "", $test$: (t2) => t2 instanceof je, $collect$(t2, e, n) {
  if (T(t2.ref, e, n), Tr(t2.ref)) {
    const s = Q(t2.ref);
    Q$(e.$containerState$.$subsManager$, s, n) && T(t2.ref[t2.prop], e, n);
  }
  return t2;
}, $serialize$: (t2, e) => `${e(t2.ref)} ${t2.prop}`, $prepare$: (t2) => {
  const [e, n] = t2.split(" ");
  return new je(e, n);
}, $fill$: (t2, e) => {
  t2.ref = e(t2.ref);
} });
var k$ = N({ $prefix$: "", $test$: (t2) => typeof t2 == "number", $serialize$: (t2) => String(t2), $prepare$: (t2) => Number(t2) });
var q$ = N({ $prefix$: "", $test$: (t2) => t2 instanceof URLSearchParams, $serialize$: (t2) => t2.toString(), $prepare$: (t2) => new URLSearchParams(t2) });
var I$ = N({ $prefix$: "", $test$: (t2) => typeof FormData < "u" && t2 instanceof globalThis.FormData, $serialize$: (t2) => {
  const e = [];
  return t2.forEach((n, s) => {
    e.push(typeof n == "string" ? [s, n] : [s, n.name]);
  }), JSON.stringify(e);
}, $prepare$: (t2) => {
  const e = JSON.parse(t2), n = new FormData();
  for (const [s, r] of e)
    n.append(s, r);
  return n;
} });
var R$ = N({ $prefix$: "", $test$: (t2) => Tt(t2), $collect$: (t2, e, n) => {
  T(t2.children, e, n), T(t2.props, e, n), T(t2.immutableProps, e, n), T(t2.key, e, n);
  let s = t2.type;
  s === _e ? s = ":slot" : s === me && (s = ":fragment"), T(s, e, n);
}, $serialize$: (t2, e) => {
  let n = t2.type;
  return n === _e ? n = ":slot" : n === me && (n = ":fragment"), `${e(n)} ${e(t2.props)} ${e(t2.immutableProps)} ${e(t2.key)} ${e(t2.children)} ${t2.flags}`;
}, $prepare$: (t2) => {
  const [e, n, s, r, o, i] = t2.split(" ");
  return new Qt(e, n, s, o, parseInt(i, 10), r);
}, $fill$: (t2, e) => {
  t2.type = W$(e(t2.type)), t2.props = e(t2.props), t2.immutableProps = e(t2.immutableProps), t2.key = e(t2.key), t2.children = e(t2.children);
} });
var A$ = N({ $prefix$: "", $test$: (t2) => typeof t2 == "bigint", $serialize$: (t2) => t2.toString(), $prepare$: (t2) => BigInt(t2) });
var M$ = N({ $prefix$: "", $test$: (t2) => t2 instanceof Uint8Array, $serialize$: (t2) => {
  let e = "";
  for (const n of t2)
    e += String.fromCharCode(n);
  return btoa(e).replace(/=+$/, "");
}, $prepare$: (t2) => {
  const e = atob(t2), n = new Uint8Array(e.length);
  let s = 0;
  for (const r of e)
    n[s++] = r.charCodeAt(0);
  return n;
}, $fill$: void 0 });
var Lt = Symbol();
var N$ = N({ $prefix$: "", $test$: (t2) => t2 instanceof Set, $collect$: (t2, e, n) => {
  t2.forEach((s) => T(s, e, n));
}, $serialize$: (t2, e) => Array.from(t2).map(e).join(" "), $prepare$: (t2) => {
  const e = /* @__PURE__ */ new Set();
  return e[Lt] = t2, e;
}, $fill$: (t2, e) => {
  const n = t2[Lt];
  t2[Lt] = void 0;
  const s = n.length === 0 ? [] : n.split(" ");
  for (const r of s)
    t2.add(e(r));
} });
var P$ = N({ $prefix$: "", $test$: (t2) => t2 instanceof Map, $collect$: (t2, e, n) => {
  t2.forEach((s, r) => {
    T(s, e, n), T(r, e, n);
  });
}, $serialize$: (t2, e) => {
  const n = [];
  return t2.forEach((s, r) => {
    n.push(e(r) + " " + e(s));
  }), n.join(" ");
}, $prepare$: (t2) => {
  const e = /* @__PURE__ */ new Map();
  return e[Lt] = t2, e;
}, $fill$: (t2, e) => {
  const n = t2[Lt];
  t2[Lt] = void 0;
  const s = n.length === 0 ? [] : n.split(" ");
  s.length % 2;
  for (let r = 0; r < s.length; r += 2)
    t2.set(e(s[r]), e(s[r + 1]));
} });
var z$ = N({ $prefix$: "\x1B", $test$: (t2) => !!br(t2) || t2 === Fe, $serialize$: (t2) => t2, $prepare$: (t2) => t2 });
var Qe = [h$, m$, g$, y$, S$, v$, w$, b$, E$, x$, _$, T$, k$, q$, I$, R$, A$, N$, P$, z$, M$];
var $s = (() => {
  const t2 = [];
  return Qe.forEach((e) => {
    const n = e.$prefixCode$;
    for (; t2.length < n; )
      t2.push(void 0);
    t2.push(e);
  }), t2;
})();
function br(t2) {
  if (typeof t2 == "string") {
    const e = t2.charCodeAt(0);
    if (e < $s.length)
      return $s[e];
  }
}
var L$ = Qe.filter((t2) => t2.$collect$);
var O$ = (t2) => {
  for (const e of Qe)
    if (e.$test$(t2))
      return true;
  return false;
};
var D$ = (t2, e, n) => {
  for (const s of L$)
    if (s.$test$(t2))
      return s.$collect$(t2, e, n), true;
  return false;
};
var C$ = (t2, e, n, s) => {
  for (const r of Qe)
    if (r.$test$(t2)) {
      let o = r.$prefixChar$;
      return r.$serialize$ && (o += r.$serialize$(t2, e, n, s)), o;
    }
  if (typeof t2 == "string")
    return t2;
};
var Er = (t2, e) => {
  const n = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
  return { prepare(r) {
    const o = br(r);
    if (o) {
      const i = o.$prepare$(r.slice(1), t2, e);
      return o.$fill$ && n.set(i, o), o.$subs$ && s.set(i, o), i;
    }
    return r;
  }, subs(r, o) {
    const i = s.get(r);
    return !!i && (i.$subs$(r, o, t2), true);
  }, fill(r, o) {
    const i = n.get(r);
    return !!i && (i.$fill$(r, o, t2), true);
  } };
};
var F$ = { "!": (t2, e) => e.$proxyMap$.get(t2) ?? pn(t2, e), "~": (t2) => Promise.resolve(t2), _: (t2) => Promise.reject(t2) };
var Q$ = (t2, e, n) => {
  if (typeof n == "boolean")
    return n;
  const s = t2.$groupToManagers$.get(n);
  return !!(s && s.length > 0) && (s.length !== 1 || s[0] !== e);
};
var W$ = (t2) => t2 === ":slot" ? _e : t2 === ":fragment" ? me : t2;
var Ac = (t2, e) => sn(t2, /* @__PURE__ */ new Set(), "_", e);
var sn = (t2, e, n, s) => {
  const r = le(t2);
  if (r == null)
    return t2;
  if (U$(r)) {
    if (e.has(r) || (e.add(r), O$(r)))
      return t2;
    const o = typeof r;
    switch (o) {
      case "object":
        if (L(r) || yt(r))
          return t2;
        if (A(r)) {
          let $3 = 0;
          return r.forEach((c2, l) => {
            if (l !== $3)
              throw P(3, r);
            sn(c2, e, n + "[" + l + "]"), $3 = l + 1;
          }), t2;
        }
        if (ne(r)) {
          for (const [$3, c2] of Object.entries(r))
            sn(c2, e, n + "." + $3);
          return t2;
        }
        break;
      case "boolean":
      case "string":
      case "number":
        return t2;
    }
    let i = "";
    if (i = s || "Value cannot be serialized", n !== "_" && (i += ` in ${n},`), o === "object")
      i += ` because it's an instance of "${t2 == null ? void 0 : t2.constructor.name}". You might need to use 'noSerialize()' or use an object literal instead. Check out https://qwik.dev/docs/advanced/dollar/`;
    else if (o === "function") {
      const $3 = t2.name;
      i += ` because it's a function named "${$3}". You might need to convert it to a QRL using $(fn):

const ${$3} = $(${String(t2)});

Please check out https://qwik.dev/docs/advanced/qrl/ for more information.`;
    }
    console.error("Trying to serialize", t2), hs(i);
  }
  return t2;
};
var Fn = /* @__PURE__ */ new WeakSet();
var xr = /* @__PURE__ */ new WeakSet();
var U$ = (t2) => !$t(t2) && !W(t2) || !Fn.has(t2);
var _r = (t2) => Fn.has(t2);
var Tr = (t2) => xr.has(t2);
var We = (t2) => (t2 != null && Fn.add(t2), t2);
var B$ = (t2) => (xr.add(t2), t2);
var le = (t2) => $t(t2) ? kt(t2) ?? t2 : t2;
var kt = (t2) => t2[Ge];
var Q = (t2) => t2[tt];
var kr = (t2) => t2[At];
var H$ = (t2, e) => {
  const n = t2[0], s = typeof t2[1] == "string" ? t2[1] : e(t2[1]);
  if (!s)
    return;
  let r = n + " " + s, o;
  if (n === 0)
    o = t2[2];
  else {
    const i = e(t2[2]);
    if (!i)
      return;
    n <= 2 ? (o = t2[5], r += ` ${i} ${cs(e(t2[3]))} ${t2[4]}`) : n <= 4 && (o = t2[4], r += ` ${i} ${typeof t2[3] == "string" ? t2[3] : cs(e(t2[3]))}`);
  }
  return o && (r += ` ${encodeURI(o)}`), r;
};
var J$ = (t2, e) => {
  const n = t2.split(" "), s = parseInt(n[0], 10);
  n.length >= 2;
  const r = e(n[1]);
  if (!r || xn(r) && !r.$el$)
    return;
  const o = [s, r];
  return s === 0 ? (n.length <= 3, o.push(Ve(n[2]))) : s <= 2 ? (n.length === 5 || n.length, o.push(e(n[2]), e(n[3]), n[4], Ve(n[5]))) : s <= 4 && (n.length === 4 || n.length, o.push(e(n[2]), e(n[3]), Ve(n[4]))), o;
};
var Ve = (t2) => {
  if (t2 !== void 0)
    return decodeURI(t2);
};
var V$ = (t2) => {
  const e = /* @__PURE__ */ new Map();
  return { $groupToManagers$: e, $createManager$: (s) => new G$(e, t2, s), $clearSub$: (s) => {
    const r = e.get(s);
    if (r) {
      for (const o of r)
        o.$unsubGroup$(s);
      e.delete(s), r.length = 0;
    }
  }, $clearSignal$: (s) => {
    const r = e.get(s[1]);
    if (r)
      for (const o of r)
        o.$unsubEntry$(s);
  } };
};
var G$ = class {
  constructor(e, n, s) {
    this.$groupToManagers$ = e, this.$containerState$ = n, this.$subs$ = [], s && this.$addSubs$(s);
  }
  $addSubs$(e) {
    this.$subs$.push(...e);
    for (const n of this.$subs$)
      this.$addToGroup$(n[1], this);
  }
  $addToGroup$(e, n) {
    let s = this.$groupToManagers$.get(e);
    s || this.$groupToManagers$.set(e, s = []), s.includes(n) || s.push(n);
  }
  $unsubGroup$(e) {
    const n = this.$subs$;
    for (let s = 0; s < n.length; s++)
      n[s][1] === e && (n.splice(s, 1), s--);
  }
  $unsubEntry$(e) {
    const [n, s, r, o] = e, i = this.$subs$;
    if (n === 1 || n === 2) {
      const $3 = e[4];
      for (let c2 = 0; c2 < i.length; c2++) {
        const l = i[c2];
        l[0] === n && l[1] === s && l[2] === r && l[3] === o && l[4] === $3 && (i.splice(c2, 1), c2--);
      }
    } else if (n === 3 || n === 4)
      for (let $3 = 0; $3 < i.length; $3++) {
        const c2 = i[$3];
        c2[0] === n && c2[1] === s && c2[2] === r && c2[3] === o && (i.splice($3, 1), $3--);
      }
  }
  $addSub$(e, n) {
    const s = this.$subs$, r = e[1];
    e[0] === 0 && s.some(([o, i, $3]) => o === 0 && i === r && $3 === n) || (s.push(qr = [...e, n]), this.$addToGroup$(r, this));
  }
  $notifySubs$(e) {
    const n = this.$subs$;
    for (const s of n) {
      const r = s[s.length - 1];
      e && r && r !== e || Lo(s, this.$containerState$);
    }
  }
};
var qr;
function K$() {
  return qr;
}
var cs = (t2) => {
  if (t2 == null)
    throw Et("must be non null", t2);
  return t2;
};
var Qn = (t2) => typeof t2 == "function" && typeof t2.getSymbol == "function";
var X$ = (t2) => Qn(t2) && t2.$symbol$ == "<sync>";
var Ue = (t2, e, n, s, r, o, i) => {
  let $3;
  const c2 = async function(...f2) {
    return await p2.call(this, Y())(...f2);
  }, l = (f2) => ($3 || ($3 = f2), $3), a = (f2) => typeof f2 != "function" || !(r != null && r.length) && !(o != null && o.length) ? f2 : function(...y2) {
    let S3 = Y();
    if (S3) {
      const h2 = S3.$qrl$;
      S3.$qrl$ = c2;
      const b2 = S3.$event$;
      S3.$event$ === void 0 && (S3.$event$ = this);
      try {
        return f2.apply(this, y2);
      } finally {
        S3.$qrl$ = h2, S3.$event$ = b2;
      }
    }
    return S3 = B(), S3.$qrl$ = c2, S3.$event$ = this, D.call(this, S3, f2, ...y2);
  }, u = async (f2) => {
    if (n !== null)
      return n;
    if (f2 && l(f2), t2 === "") {
      const h2 = $3.getAttribute(ys), b2 = Ss($3.ownerDocument, h2);
      return c2.resolved = n = b2[Number(e)];
    }
    const y2 = j$(), S3 = Y();
    {
      const h2 = Ie().importSymbol($3, t2, e);
      n = k(h2, (b2) => c2.resolved = n = a(b2));
    }
    return n.finally(() => Y$(e, S3 == null ? void 0 : S3.$element$, y2)), n;
  }, d = (f2) => n !== null ? n : u(f2);
  function p2(f2, y2) {
    return (...S3) => k(d(), (h2) => {
      if (!W(h2))
        throw P(10);
      if (y2 && y2() === false)
        return;
      const b2 = v3(f2);
      return D.call(this, b2, h2, ...S3);
    });
  }
  const v3 = (f2) => f2 == null ? B() : A(f2) ? Ys(f2) : f2, w2 = i ?? e, m2 = Ir(w2);
  return Object.assign(c2, { getSymbol: () => w2, getHash: () => m2, getCaptured: () => o, resolve: u, $resolveLazy$: d, $setContainer$: l, $chunk$: t2, $symbol$: e, $refSymbol$: i, $hash$: m2, getFn: p2, $capture$: r, $captureRef$: o, dev: null, resolved: void 0 }), n && (n = k(n, (f2) => c2.resolved = n = a(f2))), c2;
};
var Ir = (t2) => {
  const e = t2.lastIndexOf("_");
  return e > -1 ? t2.slice(e + 1) : t2;
};
var ls = /* @__PURE__ */ new Set();
var Y$ = (t2, e, n) => {
  ls.has(t2) || (ls.add(t2), Z$("qsymbol", { symbol: t2, element: e, reqTime: n }));
};
var Z$ = (t2, e) => {
  nt() || typeof document != "object" || document.dispatchEvent(new CustomEvent(t2, { bubbles: false, detail: e }));
};
var j$ = () => nt() ? 0 : typeof performance == "object" ? performance.now() : 0;
var tc = (t2) => t2;
var Wn = (t2) => {
  function e(n, s, r) {
    const o = t2.$hash$.slice(0, 4) + ":" + (s || "");
    return ft(dt, { [Wr]: t2, [G]: n[G], [M]: n[M], children: n.children, props: n }, r, o);
  }
  return e[Te] = [t2], e;
};
var Un = (t2) => typeof t2 == "function" && t2[Te] !== void 0;
var ae = (t2, e) => {
  const { val: n, set: s, iCtx: r } = Ft();
  if (n != null)
    return n;
  const o = W(t2) ? D(void 0, t2) : t2;
  if ((e == null ? void 0 : e.reactive) === false)
    return s(o), o;
  {
    const i = pn(o, r.$renderCtx$.$static$.$containerState$, (e == null ? void 0 : e.deep) ?? true ? 1 : 0);
    return s(i), i;
  }
};
function ke(t2, e) {
  var s;
  const n = Y();
  return ((s = n == null ? void 0 : n.$renderCtx$) == null ? void 0 : s.$static$.$containerState$.$serverData$[t2]) ?? e;
}
var ec = (t2) => {
  nc(t2, (e) => e);
};
var nc = (t2, e, n) => {
  const { val: s, set: r, iCtx: o, i, elCtx: $3 } = Ft();
  if (s)
    return s;
  const c2 = to(t2, i), l = o.$renderCtx$.$static$.$containerState$;
  if (r(c2), $3.$appendStyles$ || ($3.$appendStyles$ = []), $3.$scopeIds$ || ($3.$scopeIds$ = []), l.$styleIds$.has(c2))
    return c2;
  l.$styleIds$.add(c2);
  const a = t2.$resolveLazy$(l.$containerEl$), u = (d) => {
    $3.$appendStyles$, $3.$appendStyles$.push({ styleId: c2, content: e(d, c2) });
  };
  return L(a) ? o.$waitOn$.push(a.then(u)) : u(a), c2;
};
var sc = '((i,r,a,o)=>{a=e=>{const t=document.querySelector("[q\\\\:base]");t&&r.active&&r.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},document.addEventListener("qprefetch",e=>{const t=e.detail;r?a(t):i.push(t)}),"serviceWorker"in navigator?navigator.serviceWorker.register("/service-worker.js").then(e=>{o=()=>{r=e,i.forEach(a),a({bundles:i})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&o()}):e.active&&o()}).catch(e=>console.error(e)):console.log("Service worker not supported in this browser.")})([])';
var Rr = ct("qc-s");
var rc = ct("qc-c");
var Ar = ct("qc-ic");
var Mr = ct("qc-h");
var Nr = ct("qc-l");
var oc = ct("qc-n");
var ic = ct("qc-a");
var $c = ct("qc-ir");
var as = tc(l$("s_1RJPKHqF8AQ"));
var cc = (t2) => {
  var e;
  {
    const [n, s] = Ie().chunkForSymbol(as.getSymbol(), null, (e = as.dev) == null ? void 0 : e.file), r = [t2, s, n].map((o) => JSON.stringify(o)).join(",");
    return `(${lc.toString()})(${r});`;
  }
};
var lc = async (t2, e, n) => {
  var s;
  if (!window._qcs && history.scrollRestoration === "manual") {
    window._qcs = true;
    const r = (s = history.state) == null ? void 0 : s._qCityScroll;
    r && window.scrollTo(r.x, r.y);
    const o = document.currentScript;
    if (o) {
      const i = o.closest("[q\\:container]");
      (await import(new URL(e, new URL(t2, document.baseURI)).href))[n](i);
    }
  }
};
var ac = () => {
  const t2 = ke("containerAttributes");
  if (!t2)
    throw new Error("PrefetchServiceWorker component must be rendered on the server.");
  const e = cc(t2["q:base"]);
  ui();
  const n = ke("nonce"), s = ze(Ar);
  if (s.value && s.value.length > 0) {
    const r = s.value.length;
    let o = null;
    for (let i = r - 1; i >= 0; i--)
      s.value[i].default && (o = ft(s.value[i].default, { children: o }, 1, "zl_0"));
    return ft(me, { children: [o, xt("script", { dangerouslySetInnerHTML: e }, { nonce: n }, null, 3, null)] }, 1, "zl_1");
  }
  return Sn;
};
var Mc = Wn(Vt(ac, "s_e0ssiDXoeAM"));
var uc = (t2, e) => new URL(t2, e.href);
var fc = (t2, e) => t2.origin === e.origin;
var us = (t2) => t2.endsWith("/") ? t2 : t2 + "/";
var dc = ({ pathname: t2 }, { pathname: e }) => {
  const n = Math.abs(t2.length - e.length);
  return n === 0 ? t2 === e : n === 1 && us(t2) === us(e);
};
var pc = (t2, e) => t2.search === e.search;
var hc = (t2, e) => pc(t2, e) && dc(t2, e);
var mc = (t2) => t2 && typeof t2.then == "function";
var gc = (t2, e, n, s) => {
  const r = Pr(), i = { head: r, withLocale: ($3) => Xn(s, $3), resolveValue: ($3) => {
    const c2 = $3.__id;
    if ($3.__brand === "server_loader" && !(c2 in t2.loaders))
      throw new Error("You can not get the returned data of a loader that has not been executed for this request.");
    const l = t2.loaders[c2];
    if (mc(l))
      throw new Error("Loaders returning a promise can not be resolved for the head function.");
    return l;
  }, ...e };
  for (let $3 = n.length - 1; $3 >= 0; $3--) {
    const c2 = n[$3] && n[$3].head;
    c2 && (typeof c2 == "function" ? fs(r, Xn(s, () => c2(i))) : typeof c2 == "object" && fs(r, c2));
  }
  return i.head;
};
var fs = (t2, e) => {
  typeof e.title == "string" && (t2.title = e.title), ue(t2.meta, e.meta), ue(t2.links, e.links), ue(t2.styles, e.styles), ue(t2.scripts, e.scripts), Object.assign(t2.frontmatter, e.frontmatter);
};
var ue = (t2, e) => {
  if (Array.isArray(e))
    for (const n of e) {
      if (typeof n.key == "string") {
        const s = t2.findIndex((r) => r.key === n.key);
        if (s > -1) {
          t2[s] = n;
          continue;
        }
      }
      t2.push(n);
    }
};
var Pr = () => ({ title: "", meta: [], links: [], styles: [], scripts: [], frontmatter: {} });
var ds;
(function(t2) {
  t2[t2.EOL = 0] = "EOL", t2[t2.OPEN_BRACKET = 91] = "OPEN_BRACKET", t2[t2.CLOSE_BRACKET = 93] = "CLOSE_BRACKET", t2[t2.DOT = 46] = "DOT", t2[t2.SLASH = 47] = "SLASH";
})(ds || (ds = {}));
var Nc = () => ze(Mr);
var Pc = () => ze(Nr);
var yc = () => We(ke("qwikcity"));
var Sc = ":root{view-transition-name:none}";
var vc = async (t2, e) => {
  const [n, s, r, o] = bn(), { type: i = "link", forceReload: $3 = t2 === void 0, replaceState: c2 = false, scroll: l = true } = typeof e == "object" ? e : { forceReload: e };
  if (typeof t2 == "number")
    return;
  const a = r.value.dest, u = t2 === void 0 ? a : uc(t2, o.url);
  if (fc(u, a) && !(!$3 && hc(u, a)))
    return r.value = { type: i, dest: u, forceReload: $3, replaceState: c2, scroll: l }, n.value = void 0, o.isNavigating = true, new Promise((d) => {
      s.r = d;
    });
};
var wc = ({ track: t2 }) => {
  const [e, n, s, r, o, i, $3, c2, l, a, u] = bn();
  async function d() {
    const [v3, w2] = t2(() => [a.value, e.value]), m2 = oi(""), f2 = u.url, y2 = w2 ? "form" : v3.type;
    v3.replaceState;
    let S3, h2, b2 = null;
    if (S3 = new URL(v3.dest, u.url), b2 = o.loadedRoute, h2 = o.response, b2) {
      const [E3, _3, g2, x3] = b2, q3 = g2, R2 = q3[q3.length - 1];
      u.prevUrl = f2, u.url = S3, u.params = { ..._3 }, a.untrackedValue = { type: y2, dest: S3 };
      const I3 = gc(h2, u, q3, m2);
      n.headings = R2.headings, n.menu = x3, s.value = We(q3), r.links = I3.links, r.meta = I3.meta, r.styles = I3.styles, r.scripts = I3.scripts, r.title = I3.title, r.frontmatter = I3.frontmatter;
    }
  }
  return d();
};
var bc = (t2) => {
  ec(Vt(Sc, "s_RPDJAz33WLA"));
  const e = yc();
  if (!(e != null && e.params))
    throw new Error("Missing Qwik City Env Data for help visit https://github.com/QwikDev/qwik/issues/6237");
  const n = ke("url");
  if (!n)
    throw new Error("Missing Qwik URL Env Data");
  const s = new URL(n), r = ae({ url: s, params: e.params, isNavigating: false, prevUrl: void 0 }, { deep: false }), o = {}, i = B$(ae(e.response.loaders, { deep: false })), $3 = He({ type: "initial", dest: s, forceReload: false, replaceState: false, scroll: true }), c2 = ae(Pr), l = ae({ headings: void 0, menu: void 0 }), a = He(), u = e.response.action, d = u ? e.response.loaders[u] : void 0, p2 = He(d ? { id: u, data: e.response.formData, output: { result: d, status: e.response.status } } : void 0), v3 = Vt(vc, "s_fX0bDjeJa0E", [p2, o, $3, r]);
  return lt(rc, l), lt(Ar, a), lt(Mr, c2), lt(Nr, r), lt(oc, v3), lt(Rr, i), lt(ic, p2), lt($c, $3), Go(Vt(wc, "s_02wMImzEAbk", [p2, l, a, c2, e, v3, i, o, t2, $3, r])), ft(_e, null, 3, "qY_0");
};
var zc = Wn(Vt(bc, "s_TxCFOy819ag"));
var Lc = (t2) => xt("script", { nonce: pi(t2, "nonce") }, { dangerouslySetInnerHTML: sc }, null, 3, "1Z_0");
var Oc = (t2, ...e) => {
  const { id: n, validators: s } = Ec(e, t2);
  function r() {
    return ze(Rr, (o) => {
      if (!(n in o))
        throw new Error(`routeLoader$ "${t2.getSymbol()}" was invoked in a route where it was not declared.
    This is because the routeLoader$ was not exported in a 'layout.tsx' or 'index.tsx' file of the existing route.
    For more information check: https://qwik.dev/qwikcity/route-loader/

    If your are managing reusable logic or a library it is essential that this function is re-exported from within 'layout.tsx' or 'index.tsx file of the existing route otherwise it will not run or throw exception.
    For more information check: https://qwik.dev/docs/cookbook/re-exporting-loaders/`);
      return nr(o, n);
    });
  }
  return r.__brand = "server_loader", r.__qrl = t2, r.__validators = s, r.__id = n, Object.freeze(r), r;
};
var Ec = (t2, e) => {
  let n;
  const s = [];
  if (t2.length === 1) {
    const r = t2[0];
    r && typeof r == "object" && ("validate" in r ? s.push(r) : (n = r.id, r.validation && s.push(...r.validation)));
  } else
    t2.length > 1 && s.push(...t2.filter((r) => !!r));
  return typeof n == "string" ? n = `id_${n}` : n = e.getHash(), { validators: s.reverse(), id: n };
};
var ye2 = ((t2) => typeof __require2 < "u" ? __require2 : typeof Proxy < "u" ? new Proxy(t2, { get: (e, n) => (typeof __require2 < "u" ? __require2 : e)[n] }) : t2)(function(t2) {
  if (typeof __require2 < "u")
    return __require2.apply(this, arguments);
  throw Error('Dynamic require of "' + t2 + '" is not supported');
});
var qe2 = "<sync>";
function G2(t2, e) {
  const n = e == null ? void 0 : e.mapper, s = t2.symbolMapper ? t2.symbolMapper : (o, a, i) => {
    var c2;
    if (n) {
      const l = N2(o), p2 = n[l];
      if (!p2) {
        if (l === qe2)
          return [l, ""];
        if ((c2 = globalThis.__qwik_reg_symbols) == null ? void 0 : c2.has(l))
          return [o, "_"];
        if (i)
          return [o, `${i}?qrl=${o}`];
        console.error("Cannot resolve symbol", o, "in", n, i);
      }
      return p2;
    }
  };
  return { isServer: true, async importSymbol(o, a, i) {
    var w2;
    const c2 = N2(i), l = (w2 = globalThis.__qwik_reg_symbols) == null ? void 0 : w2.get(c2);
    if (l)
      return l;
    let p2 = String(a);
    p2.endsWith(".js") || (p2 += ".js");
    const b2 = ye2(p2);
    if (!(i in b2))
      throw new Error(`Q-ERROR: missing symbol '${i}' in module '${p2}'.`);
    return b2[i];
  }, raf: () => (console.error("server can not rerender"), Promise.resolve()), nextTick: (o) => new Promise((a) => {
    setTimeout(() => {
      a(o());
    });
  }), chunkForSymbol(o, a, i) {
    return s(o, n, i);
  } };
}
async function xe2(t2, e) {
  const n = G2(t2, e);
  xc(n);
}
var N2 = (t2) => {
  const e = t2.lastIndexOf("_");
  return e > -1 ? t2.slice(e + 1) : t2;
};
function z() {
  if (typeof performance > "u")
    return () => 0;
  const t2 = performance.now();
  return () => (performance.now() - t2) / 1e6;
}
function ee2(t2) {
  let e = t2.base;
  return typeof t2.base == "function" && (e = t2.base(t2)), typeof e == "string" ? (e.endsWith("/") || (e += "/"), e) : "/build/";
}
var we2 = '(()=>{var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,s=(e,s)=>{for(var a in s||(s={}))r.call(s,a)&&n(e,a,s[a]);if(t)for(var a of t(s))o.call(s,a)&&n(e,a,s[a]);return e};((e,t)=>{const r="__q_context__",o=window,n=new Set,a=new Set([e]),c="replace",i="forEach",l="target",f="getAttribute",p="isConnected",b="qvisible",u="_qwikjson_",y=(e,t)=>Array.from(e.querySelectorAll(t)),h=e=>{const t=[];return a.forEach((r=>t.push(...y(r,e)))),t},d=e=>{S(e),y(e,"[q\\\\:shadowroot]").forEach((e=>{const t=e.shadowRoot;t&&d(t)}))},m=e=>e&&"function"==typeof e.then,w=(e,t,r=t.type)=>{h("[on"+e+"\\\\:"+r+"]")[i]((o=>E(o,e,t,r)))},q=t=>{if(void 0===t[u]){let r=(t===e.documentElement?e.body:t).lastElementChild;for(;r;){if("SCRIPT"===r.tagName&&"qwik/json"===r[f]("type")){t[u]=JSON.parse(r.textContent[c](/\\\\x3C(\\/?script)/gi,"<$1"));break}r=r.previousElementSibling}}},v=(e,t)=>new CustomEvent(e,{detail:t}),E=async(t,o,n,a=n.type)=>{const i="on"+o+":"+a;t.hasAttribute("preventdefault:"+a)&&n.preventDefault();const l=t._qc_,b=l&&l.li.filter((e=>e[0]===i));if(b&&b.length>0){for(const e of b){const r=e[1].getFn([t,n],(()=>t[p]))(n,t),o=n.cancelBubble;m(r)&&await r,o&&n.stopPropagation()}return}const u=t[f](i);if(u){const o=t.closest("[q\\\\:container]"),a=o[f]("q:base"),i=o[f]("q:version")||"unknown",l=o[f]("q:manifest-hash")||"dev",b=new URL(a,e.baseURI);for(const f of u.split("\\n")){const u=new URL(f,b),y=u.href,h=u.hash[c](/^#?([^?[|]*).*$/,"$1")||"default",d=performance.now();let w,v,E;const _=f.startsWith("#"),A={qBase:a,qManifest:l,qVersion:i,href:y,symbol:h,element:t,reqTime:d};if(_){const t=o.getAttribute("q:instance");w=(e["qFuncs_"+t]||[])[Number.parseInt(h)],w||(v="sync",E=Error("sync handler error for symbol: "+h))}else{const e=u.href.split("#")[0];try{const t=import(e);q(o),w=(await t)[h],w||(v="no-symbol",E=Error(`${h} not in ${e}`))}catch(e){v||(v="async"),E=e}}if(!w){g("qerror",s({importError:v,error:E},A)),console.error(E);break}const k=e[r];if(t[p])try{e[r]=[t,n,u],_||g("qsymbol",s({},A));const o=w(n,t);m(o)&&await o}catch(e){g("qerror",s({error:e},A))}finally{e[r]=k}}}},g=(t,r)=>{e.dispatchEvent(v(t,r))},_=e=>e[c](/([A-Z])/g,(e=>"-"+e.toLowerCase())),A=async e=>{let t=_(e.type),r=e[l];for(w("-document",e,t);r&&r[f];){const o=E(r,"",e,t);let n=e.cancelBubble;m(o)&&await o,n=n||e.cancelBubble||r.hasAttribute("stoppropagation:"+e.type),r=e.bubbles&&!0!==n?r.parentElement:null}},k=e=>{w("-window",e,_(e.type))},C=()=>{var r;const s=e.readyState;if(!t&&("interactive"==s||"complete"==s)&&(a.forEach(d),t=1,g("qinit"),(null!=(r=o.requestIdleCallback)?r:o.setTimeout).bind(o)((()=>g("qidle"))),n.has(b))){const e=h("[on\\\\:"+b+"]"),t=new IntersectionObserver((e=>{for(const r of e)r.isIntersecting&&(t.unobserve(r[l]),E(r[l],"",v(b,r)))}));e[i]((e=>t.observe(e)))}},O=(e,t,r,o=!1)=>e.addEventListener(t,r,{capture:o,passive:!1}),S=(...e)=>{for(const t of e)"string"==typeof t?n.has(t)||(a.forEach((e=>O(e,t,A,!0))),O(o,t,k,!0),n.add(t)):a.has(t)||(n.forEach((e=>O(t,e,A,!0))),a.add(t))};if(!(r in e)){e[r]=0;const t=o.qwikevents;Array.isArray(t)&&S(...t),o.qwikevents={events:n,roots:a,push:S},O(e,"readystatechange",C),C()}})(document)})()';
var _e2 = `(() => {
    var __defProp = Object.defineProperty;
    var __getOwnPropSymbols = Object.getOwnPropertySymbols;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __propIsEnum = Object.prototype.propertyIsEnumerable;
    var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: value
    }) : obj[key] = value;
    var __spreadValues = (a, b) => {
        for (var prop in b || (b = {})) {
            __hasOwnProp.call(b, prop) && __defNormalProp(a, prop, b[prop]);
        }
        if (__getOwnPropSymbols) {
            for (var prop of __getOwnPropSymbols(b)) {
                __propIsEnum.call(b, prop) && __defNormalProp(a, prop, b[prop]);
            }
        }
        return a;
    };
    ((doc, hasInitialized) => {
        const Q_CONTEXT = "__q_context__";
        const win = window;
        const events =  new Set;
        const roots =  new Set([ doc ]);
        const nativeQuerySelectorAll = (root, selector) => Array.from(root.querySelectorAll(selector));
        const querySelectorAll = query => {
            const elements = [];
            roots.forEach((root => elements.push(...nativeQuerySelectorAll(root, query))));
            return elements;
        };
        const findShadowRoots = fragment => {
            processEventOrNode(fragment);
            nativeQuerySelectorAll(fragment, "[q\\\\:shadowroot]").forEach((parent => {
                const shadowRoot = parent.shadowRoot;
                shadowRoot && findShadowRoots(shadowRoot);
            }));
        };
        const isPromise = promise => promise && "function" == typeof promise.then;
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((el => dispatch(el, infix, ev, type)));
        };
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === script.getAttribute("type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/gi, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const relevantListeners = ctx && ctx.li.filter((li => li[0] === attrName));
            if (relevantListeners && relevantListeners.length > 0) {
                for (const listener of relevantListeners) {
                    const results = listener[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                    const cancelBubble = ev.cancelBubble;
                    isPromise(results) && await results;
                    cancelBubble && ev.stopPropagation();
                }
                return;
            }
            const attrValue = element.getAttribute(attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const qBase = container.getAttribute("q:base");
                const qVersion = container.getAttribute("q:version") || "unknown";
                const qManifest = container.getAttribute("q:manifest-hash") || "dev";
                const base = new URL(qBase, doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const href = url.href;
                    const symbol = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    let handler;
                    let importError;
                    let error;
                    const isSync = qrl.startsWith("#");
                    const eventData = {
                        qBase: qBase,
                        qManifest: qManifest,
                        qVersion: qVersion,
                        href: href,
                        symbol: symbol,
                        element: element,
                        reqTime: reqTime
                    };
                    if (isSync) {
                        const hash = container.getAttribute("q:instance");
                        handler = (doc["qFuncs_" + hash] || [])[Number.parseInt(symbol)];
                        if (!handler) {
                            importError = "sync";
                            error = new Error("sync handler error for symbol: " + symbol);
                        }
                    } else {
                        const uri = url.href.split("#")[0];
                        try {
                            const module = import(
                                                        uri);
                            resolveContainer(container);
                            handler = (await module)[symbol];
                            if (!handler) {
                                importError = "no-symbol";
                                error = new Error(\`\${symbol} not in \${uri}\`);
                            }
                        } catch (err) {
                            importError || (importError = "async");
                            error = err;
                        }
                    }
                    if (!handler) {
                        emitEvent("qerror", __spreadValues({
                            importError: importError,
                            error: error
                        }, eventData));
                        console.error(error);
                        break;
                    }
                    const previousCtx = doc[Q_CONTEXT];
                    if (element.isConnected) {
                        try {
                            doc[Q_CONTEXT] = [ element, ev, url ];
                            isSync || emitEvent("qsymbol", __spreadValues({}, eventData));
                            const results = handler(ev, element);
                            isPromise(results) && await results;
                        } catch (error2) {
                            emitEvent("qerror", __spreadValues({
                                error: error2
                            }, eventData));
                        } finally {
                            doc[Q_CONTEXT] = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                const results = dispatch(element, "", ev, type);
                let cancelBubble = ev.cancelBubble;
                isPromise(results) && await results;
                cancelBubble = cancelBubble || ev.cancelBubble || element.hasAttribute("stoppropagation:" + ev.type);
                element = ev.bubbles && !0 !== cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                roots.forEach(findShadowRoots);
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture,
            passive: !1
        });
        const processEventOrNode = (...eventNames) => {
            for (const eventNameOrNode of eventNames) {
                if ("string" == typeof eventNameOrNode) {
                    if (!events.has(eventNameOrNode)) {
                        roots.forEach((root => addEventListener(root, eventNameOrNode, processDocumentEvent, !0)));
                        addEventListener(win, eventNameOrNode, processWindowEvent, !0);
                        events.add(eventNameOrNode);
                    }
                } else if (!roots.has(eventNameOrNode)) {
                    events.forEach((eventName => addEventListener(eventNameOrNode, eventName, processDocumentEvent, !0)));
                    roots.add(eventNameOrNode);
                }
            }
        };
        if (!(Q_CONTEXT in doc)) {
            doc[Q_CONTEXT] = 0;
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && processEventOrNode(...qwikevents);
            win.qwikevents = {
                events: events,
                roots: roots,
                push: processEventOrNode
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})()`;
function U2(t2 = {}) {
  return t2.debug ? _e2 : we2;
}
function ve2(t2, e, n) {
  if (!n)
    return [];
  const s = e.prefetchStrategy, r = ee2(e);
  if (s !== null) {
    if (!s || !s.symbolsToPrefetch || s.symbolsToPrefetch === "auto")
      return je2(t2, n, r);
    if (typeof s.symbolsToPrefetch == "function")
      try {
        return s.symbolsToPrefetch({ manifest: n.manifest });
      } catch (o) {
        console.error("getPrefetchUrls, symbolsToPrefetch()", o);
      }
  }
  return [];
}
function je2(t2, e, n) {
  const s = [], r = t2 == null ? void 0 : t2.qrls, { mapper: o, manifest: a } = e, i = /* @__PURE__ */ new Map();
  if (Array.isArray(r))
    for (const c2 of r) {
      const l = c2.getHash(), p2 = o[l];
      p2 && te2(a, i, s, n, p2[1]);
    }
  return s;
}
function te2(t2, e, n, s, r) {
  const o = s + r;
  let a = e.get(o);
  if (!a) {
    a = { url: o, imports: [] }, e.set(o, a);
    const i = t2.bundles[r];
    if (i && Array.isArray(i.imports))
      for (const c2 of i.imports)
        te2(t2, e, a.imports, s, c2);
  }
  n.push(a);
}
function ke2(t2) {
  if (t2 != null && t2.mapping != null && typeof t2.mapping == "object" && t2.symbols != null && typeof t2.symbols == "object" && t2.bundles != null && typeof t2.bundles == "object")
    return t2;
}
function S() {
  let r = `const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`;
  return r += "w.postMessage(u.map(u=>new URL(u,origin)+''));", r += "w.onmessage=()=>{w.terminate()};", r;
}
function Ie2(t2, e) {
  const n = { bundles: v(e).map((r) => r.split("/").pop()) };
  return `(window.qwikPrefetchSW||(window.qwikPrefetchSW=[])).push(${JSON.stringify(["prefetch", t2, ...n.bundles])});`;
}
function v(t2) {
  const e = [], n = (s) => {
    if (Array.isArray(s))
      for (const r of s)
        e.includes(r.url) || (e.push(r.url), n(r.imports));
  };
  return n(t2), e;
}
function ze2(t2) {
  const e = /* @__PURE__ */ new Map();
  let n = 0;
  const s = (i, c2) => {
    if (Array.isArray(i))
      for (const l of i) {
        const p2 = e.get(l.url) || 0;
        e.set(l.url, p2 + 1), n++, c2.has(l.url) || (c2.add(l.url), s(l.imports, c2));
      }
  }, r = /* @__PURE__ */ new Set();
  for (const i of t2)
    r.clear(), s(i.imports, r);
  const o = n / e.size * 2, a = Array.from(e.entries());
  return a.sort((i, c2) => c2[1] - i[1]), a.slice(0, 5).filter((i) => i[1] > o).map((i) => i[0]);
}
function Ne2(t2, e, n, s) {
  const r = Pe2(e == null ? void 0 : e.implementation), o = [];
  return r.prefetchEvent === "always" && Se2(t2, o, n, s), r.linkInsert === "html-append" && Ee2(o, n, r), r.linkInsert === "js-append" ? De2(o, n, r, s) : r.workerFetchInsert === "always" && Ce2(o, n, s), o.length > 0 ? qc(me, { children: o }) : null;
}
function Se2(t2, e, n, s) {
  const r = ze2(n);
  for (const o of r)
    e.push(qc("link", { rel: "modulepreload", href: o, nonce: s }));
  e.push(qc("script", { "q:type": "prefetch-bundles", dangerouslySetInnerHTML: Ie2(t2, n) + "document.dispatchEvent(new CustomEvent('qprefetch', {detail:{links: [location.pathname]}}))", nonce: s }));
}
function Ee2(t2, e, n) {
  const s = v(e), r = n.linkRel || "prefetch";
  for (const o of s) {
    const a = {};
    a.href = o, a.rel = r, (r === "prefetch" || r === "preload") && o.endsWith(".js") && (a.as = "script"), t2.push(qc("link", a));
  }
}
function De2(t2, e, n, s) {
  const r = n.linkRel || "prefetch";
  let o = "";
  n.workerFetchInsert === "no-link-support" && (o += "let supportsLinkRel = true;"), o += `const u=${JSON.stringify(v(e))};`, o += "u.map((u,i)=>{", o += "const l=document.createElement('link');", o += 'l.setAttribute("href",u);', o += `l.setAttribute("rel","${r}");`, n.workerFetchInsert === "no-link-support" && (o += "if(i===0){", o += "try{", o += `supportsLinkRel=l.relList.supports("${r}");`, o += "}catch(e){}", o += "}"), o += "document.body.appendChild(l);", o += "});", n.workerFetchInsert === "no-link-support" && (o += "if(!supportsLinkRel){", o += S(), o += "}"), n.workerFetchInsert === "always" && (o += S()), t2.push(qc("script", { type: "module", "q:type": "link-js", dangerouslySetInnerHTML: o, nonce: s }));
}
function Ce2(t2, e, n) {
  let s = `const u=${JSON.stringify(v(e))};`;
  s += S(), t2.push(qc("script", { type: "module", "q:type": "prefetch-worker", dangerouslySetInnerHTML: s, nonce: n }));
}
function Pe2(t2) {
  return { ...Be2, ...t2 };
}
var Be2 = { linkInsert: null, linkRel: null, workerFetchInsert: null, prefetchEvent: "always" };
var Ae2 = "q:instance";
var Oe2 = "<!DOCTYPE html>";
async function Fe2(t2, e) {
  var F4, T4, K3;
  let n = e.stream, s = 0, r = 0, o = 0, a = 0, i = "", c2;
  const l = ((F4 = e.streaming) == null ? void 0 : F4.inOrder) ?? { strategy: "auto", maximunInitialChunk: 5e4, maximunChunk: 3e4 }, p2 = e.containerTagName ?? "html", b2 = e.containerAttributes ?? {}, w2 = n, oe3 = z(), se3 = ee2(e), u = ne2(e.manifest);
  function D4() {
    i && (w2.write(i), i = "", s = 0, o++, o === 1 && (a = oe3()));
  }
  function C2(m2) {
    const f2 = m2.length;
    s += f2, r += f2, i += m2;
  }
  switch (l.strategy) {
    case "disabled":
      n = { write: C2 };
      break;
    case "direct":
      n = w2;
      break;
    case "auto":
      let m2 = 0, f2 = false;
      const L4 = l.maximunChunk ?? 0, I3 = l.maximunInitialChunk ?? 0;
      n = { write(q3) {
        q3 === "<!--qkssr-f-->" ? f2 || (f2 = true) : q3 === "<!--qkssr-pu-->" ? m2++ : q3 === "<!--qkssr-po-->" ? m2-- : C2(q3), m2 === 0 && (f2 || s >= (o === 0 ? I3 : L4)) && (f2 = false, D4());
      } };
      break;
  }
  p2 === "html" ? n.write(Oe2) : (n.write("<!--cq-->"), e.qwikLoader ? (e.qwikLoader.include === void 0 && (e.qwikLoader.include = "never"), e.qwikLoader.position === void 0 && (e.qwikLoader.position = "bottom")) : e.qwikLoader = { include: "never" }, e.qwikPrefetchServiceWorker || (e.qwikPrefetchServiceWorker = {}), e.qwikPrefetchServiceWorker.include || (e.qwikPrefetchServiceWorker.include = false), e.qwikPrefetchServiceWorker.position || (e.qwikPrefetchServiceWorker.position = "top")), e.manifest || console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."), await xe2(e, u);
  const P3 = u == null ? void 0 : u.manifest.injections, j4 = P3 ? P3.map((m2) => qc(m2.tag, m2.attributes ?? {})) : [], k4 = ((T4 = e.qwikLoader) == null ? void 0 : T4.include) ?? "auto";
  if ((((K3 = e.qwikLoader) == null ? void 0 : K3.position) ?? "bottom") === "top" && k4 !== "never") {
    const m2 = U2({ debug: e.debug });
    j4.push(qc("script", { id: "qwikloader", dangerouslySetInnerHTML: m2 })), j4.push(qc("script", { dangerouslySetInnerHTML: "window.qwikevents.push('click')" }));
  }
  const re3 = z(), B3 = [];
  let A3 = 0, O4 = 0;
  await _c(t2, { stream: n, containerTagName: p2, containerAttributes: b2, serverData: e.serverData, base: se3, beforeContent: j4, beforeClose: async (m2, f2, L4, I3) => {
    var W4, R2, Q4, Y4, $3;
    A3 = re3();
    const q3 = z();
    c2 = await Yi(m2, f2, void 0, I3);
    const y2 = [];
    if (e.prefetchStrategy !== null) {
      const h2 = ve2(c2, e, u), le3 = b2["q:base"];
      if (h2.length > 0) {
        const J4 = Ne2(le3, e.prefetchStrategy, h2, (W4 = e.serverData) == null ? void 0 : W4.nonce);
        J4 && y2.push(J4);
      }
    }
    const ae3 = JSON.stringify(c2.state, void 0, void 0);
    if (y2.push(qc("script", { type: "qwik/json", dangerouslySetInnerHTML: Ke2(ae3), nonce: (R2 = e.serverData) == null ? void 0 : R2.nonce })), c2.funcs.length > 0) {
      const h2 = b2[Ae2];
      y2.push(qc("script", { "q:func": "qwik/json", dangerouslySetInnerHTML: Me2(h2, c2.funcs), nonce: (Q4 = e.serverData) == null ? void 0 : Q4.nonce }));
    }
    const ce3 = !c2 || c2.mode !== "static", H3 = k4 === "always" || k4 === "auto" && ce3;
    if (H3) {
      const h2 = U2({ debug: e.debug });
      y2.push(qc("script", { id: "qwikloader", dangerouslySetInnerHTML: h2, nonce: (Y4 = e.serverData) == null ? void 0 : Y4.nonce }));
    }
    const M4 = Array.from(f2.$events$, (h2) => JSON.stringify(h2));
    if (M4.length > 0) {
      const h2 = (H3 ? "window.qwikevents" : "(window.qwikevents||=[])") + `.push(${M4.join(", ")})`;
      y2.push(qc("script", { dangerouslySetInnerHTML: h2, nonce: ($3 = e.serverData) == null ? void 0 : $3.nonce }));
    }
    return Le2(B3, m2), O4 = q3(), qc(me, { children: y2 });
  }, manifestHash: (u == null ? void 0 : u.manifest.manifestHash) || "dev" + Te2() }), p2 !== "html" && n.write("<!--/cq-->"), D4();
  const ie3 = c2.resources.some((m2) => m2._cache !== 1 / 0);
  return { prefetchResources: void 0, snapshotResult: c2, flushes: o, manifest: u == null ? void 0 : u.manifest, size: r, isStatic: !ie3, timing: { render: A3, snapshot: O4, firstFlush: a }, _symbols: B3 };
}
function Te2() {
  return Math.random().toString(36).slice(2);
}
function ne2(t2) {
  if (t2) {
    if ("mapper" in t2)
      return t2;
    if (t2 = ke2(t2), t2) {
      const e = {};
      return Object.entries(t2.mapping).forEach(([n, s]) => {
        e[N2(n)] = [n, s];
      }), { mapper: e, manifest: t2 };
    }
  }
}
var Ke2 = (t2) => t2.replace(/<(\/?script)/gi, "\\x3C$1");
function Le2(t2, e) {
  var n;
  for (const s of e) {
    const r = (n = s.$componentQrl$) == null ? void 0 : n.getSymbol();
    r && !t2.includes(r) && t2.push(r);
  }
}
var He2 = 'document["qFuncs_HASH"]=';
function Me2(t2, e) {
  return He2.replace("HASH", t2) + `[${e.join(`,
`)}]`;
}
async function Ve2(t2) {
  const e = G2({ manifest: t2 }, ne2(t2));
  xc(e);
}
var We2 = { manifestHash: "n3rjsc", symbols: { s_02wMImzEAbk: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "QwikCityProvider_component_useTask", canonicalFilename: "s_02wmimzeabk", hash: "02wMImzEAbk", ctxKind: "function", ctxName: "useTask$", captures: true, parent: "s_TxCFOy819ag", loc: [27637, 36818] }, s_1hUDQZrNk0A: { origin: "routes/sections/hero/index.tsx", displayName: "Hero_component", canonicalFilename: "s_1hudqzrnk0a", hash: "1hUDQZrNk0A", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [82, 513] }, s_3sccYCDd1Z0: { origin: "root.tsx", displayName: "root_component", canonicalFilename: "s_3sccycdd1z0", hash: "3sccYCDd1Z0", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [268, 793] }, s_8gdLBszqbaM: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "Link_component", canonicalFilename: "s_8gdlbszqbam", hash: "8gdLBszqbaM", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [38802, 41462] }, s_9TN4mgqwxTI: { origin: "routes/pages/strategie/impact/index.tsx", displayName: "Impact_component", canonicalFilename: "s_9tn4mgqwxti", hash: "9TN4mgqwxTI", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [84, 878] }, s_AHXCM5MQEBQ: { origin: "routes/sections/process/index.tsx", displayName: "Process_component", canonicalFilename: "s_ahxcm5mqebq", hash: "AHXCM5MQEBQ", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [151, 1251] }, s_J3B01Iq9kho: { origin: "routes/sections/c-t-a/index.tsx", displayName: "CallToAction_component", canonicalFilename: "s_j3b01iq9kho", hash: "J3B01Iq9kho", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [90, 260] }, s_Nk9PlpjQm9Y: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "GetForm_component", canonicalFilename: "s_nk9plpjqm9y", hash: "Nk9PlpjQm9Y", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [55155, 56872] }, s_TxCFOy819ag: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "QwikCityProvider_component", canonicalFilename: "s_txcfoy819ag", hash: "TxCFOy819ag", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [24097, 37105] }, s_VkLNXphUh5s: { origin: "routes/layout.tsx", displayName: "layout_component", canonicalFilename: "s_vklnxphuh5s", hash: "VkLNXphUh5s", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [866, 984] }, s_WmYC5H00wtI: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "QwikCityMockProvider_component", canonicalFilename: "s_wmyc5h00wti", hash: "WmYC5H00wtI", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [37389, 38683] }, s_YjpPC49tZf8: { origin: "routes/sections/way/index.tsx", displayName: "Way_component", canonicalFilename: "s_yjppc49tzf8", hash: "YjpPC49tZf8", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [81, 1512] }, s_aCk68v0g98Q: { origin: "routes/pages/strategie/orientation/index.tsx", displayName: "Orientation_component", canonicalFilename: "s_ack68v0g98q", hash: "aCk68v0g98Q", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [89, 1056] }, s_d2YD27NjK04: { origin: "routes/pages/strategie/effect/index.tsx", displayName: "Effect_component", canonicalFilename: "s_d2yd27njk04", hash: "d2YD27NjK04", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [145, 994] }, s_e0ssiDXoeAM: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "RouterOutlet_component", canonicalFilename: "s_e0ssidxoeam", hash: "e0ssiDXoeAM", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [7865, 8765] }, s_fWEWWqrFWbY: { origin: "routes/pages/strategie/stratHero/index.tsx", displayName: "StratHero_component", canonicalFilename: "s_fwewwqrfwby", hash: "fWEWWqrFWbY", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [87, 204] }, s_fah0c0dZ5k0: { origin: "routes/sections/goal/index.tsx", displayName: "Goal_component", canonicalFilename: "s_fah0c0dz5k0", hash: "fah0c0dZ5k0", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [82, 1449] }, s_mBt9fIl89mc: { origin: "components/starter/header/header.tsx", displayName: "header_component", canonicalFilename: "s_mbt9fil89mc", hash: "mBt9fIl89mc", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [247, 781] }, s_nJji05J2H7s: { origin: "routes/pages/strategie/index.tsx", displayName: "strategie_component", canonicalFilename: "s_njji05j2h7s", hash: "nJji05J2H7s", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [333, 513] }, s_pGES7J09frM: { origin: "routes/sections/founder/index.tsx", displayName: "Founder_component", canonicalFilename: "s_pges7j09frm", hash: "pGES7J09frM", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [144, 2019] }, s_u0bwM0i5dA8: { origin: "components/starter/footer/footer.tsx", displayName: "footer_component", canonicalFilename: "s_u0bwm0i5da8", hash: "u0bwM0i5dA8", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [300, 3307] }, s_vogN4rSb0Pw: { origin: "routes/pages/strategie/action/index.tsx", displayName: "Action_component", canonicalFilename: "s_vogn4rsb0pw", hash: "vogN4rSb0Pw", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [145, 3602] }, s_xYL1qOwPyDI: { origin: "routes/index.tsx", displayName: "routes_component", canonicalFilename: "s_xyl1qowpydi", hash: "xYL1qOwPyDI", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [393, 530] }, s_zrbrqoaqXSY: { origin: "components/router-head/router-head.tsx", displayName: "RouterHead_component", canonicalFilename: "s_zrbrqoaqxsy", hash: "zrbrqoaqXSY", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [244, 1197] }, s_RPDJAz33WLA: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "QwikCityProvider_component_useStyles", canonicalFilename: "s_rpdjaz33wla", hash: "RPDJAz33WLA", ctxKind: "function", ctxName: "useStyles$", captures: false, parent: "s_TxCFOy819ag", loc: [24152, 24186] }, s_1RJPKHqF8AQ: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "spa_init_event", canonicalFilename: "s_1rjpkhqf8aq", hash: "1RJPKHqF8AQ", ctxKind: "function", ctxName: "event$", captures: false, parent: null, loc: [1385, 6788] }, s_A5bZC7WO00A: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "routeActionQrl_action_submit", canonicalFilename: "s_a5bzc7wo00a", hash: "A5bZC7WO00A", ctxKind: "function", ctxName: "submit", captures: true, parent: null, loc: [42532, 44199] }, s_SGytLJ8uq8I: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "serverQrl_rpc", canonicalFilename: "s_sgytlj8uq8i", hash: "SGytLJ8uq8I", ctxKind: "function", ctxName: "rpc", captures: true, parent: null, loc: [48928, 51880] }, s_uPHV2oGn4wc: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "Form_form_onSubmit", canonicalFilename: "s_uphv2ogn4wc", hash: "uPHV2oGn4wc", ctxKind: "function", ctxName: "_jsxS", captures: true, parent: null, loc: [54067, 54216] }, s_BUbtvTyvVRE: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "QwikCityMockProvider_component_goto", canonicalFilename: "s_bubtvtyvvre", hash: "BUbtvTyvVRE", ctxKind: "function", ctxName: "goto", captures: false, parent: "s_WmYC5H00wtI", loc: [37804, 37882] }, s_KK5BfmKH4ZI: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "GetForm_component_form_onSubmit_1", canonicalFilename: "s_kk5bfmkh4zi", hash: "KK5BfmKH4ZI", ctxKind: "function", ctxName: "_jsxS", captures: false, parent: "s_Nk9PlpjQm9Y", loc: [56261, 56585] }, s_Osdg8FnYTw4: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "Link_component_handlePrefetch", canonicalFilename: "s_osdg8fnytw4", hash: "Osdg8FnYTw4", ctxKind: "function", ctxName: "handlePrefetch", captures: false, parent: "s_8gdLBszqbaM", loc: [39502, 39833] }, s_fX0bDjeJa0E: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "QwikCityProvider_component_goto", canonicalFilename: "s_fx0bdjeja0e", hash: "fX0bDjeJa0E", ctxKind: "function", ctxName: "goto", captures: true, parent: "s_TxCFOy819ag", loc: [25495, 27025] }, s_p9MSze0ojs4: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "GetForm_component_form_onSubmit", canonicalFilename: "s_p9msze0ojs4", hash: "p9MSze0ojs4", ctxKind: "function", ctxName: "_jsxS", captures: true, parent: "s_Nk9PlpjQm9Y", loc: [55746, 56155] }, s_pIf0khHUxfY: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "Link_component_handleClick", canonicalFilename: "s_pif0khhuxfy", hash: "pIf0khHUxfY", ctxKind: "function", ctxName: "handleClick", captures: true, parent: "s_8gdLBszqbaM", loc: [40260, 40780] } }, mapping: { s_02wMImzEAbk: "q-tOY7n8rD.js", s_1hUDQZrNk0A: "q-H06a8diM.js", s_3sccYCDd1Z0: "q-CbrImzO7.js", s_8gdLBszqbaM: "q-Ds0N2_9i.js", s_9TN4mgqwxTI: "q-ClKQl7pK.js", s_AHXCM5MQEBQ: "q-flP4uM9S.js", s_J3B01Iq9kho: "q-nyz44z2I.js", s_Nk9PlpjQm9Y: "q-Dcb37EpX.js", s_TxCFOy819ag: "q-tOY7n8rD.js", s_VkLNXphUh5s: "q-CafDhJUW.js", s_WmYC5H00wtI: "q-CfxW0gOF.js", s_YjpPC49tZf8: "q-C0tTchK-.js", s_aCk68v0g98Q: "q-D1I1ogT5.js", s_d2YD27NjK04: "q-DKLay-Kw.js", s_e0ssiDXoeAM: "q-0JS1F3On.js", s_fWEWWqrFWbY: "q-C_zI-pY5.js", s_fah0c0dZ5k0: "q-mNiqyjHd.js", s_mBt9fIl89mc: "q-DoB7OzuV.js", s_nJji05J2H7s: "q-CaDpAnvP.js", s_pGES7J09frM: "q-BP4dNgaW.js", s_u0bwM0i5dA8: "q-y9aHoFTn.js", s_vogN4rSb0Pw: "q-CwovweWc.js", s_xYL1qOwPyDI: "q-WmFKNSag.js", s_zrbrqoaqXSY: "q-jENKZsc1.js", s_RPDJAz33WLA: "q-tOY7n8rD.js", s_1RJPKHqF8AQ: "q-BGmpAaRo.js", s_A5bZC7WO00A: "q-onsmAJ1g.js", s_SGytLJ8uq8I: "q-BV8H_kEI.js", s_uPHV2oGn4wc: "q-BjJUSAlw.js", s_BUbtvTyvVRE: "q-CfxW0gOF.js", s_KK5BfmKH4ZI: "q-Dcb37EpX.js", s_Osdg8FnYTw4: "q-Ds0N2_9i.js", s_fX0bDjeJa0E: "q-tOY7n8rD.js", s_p9MSze0ojs4: "q-Dcb37EpX.js", s_pIf0khHUxfY: "q-Ds0N2_9i.js" }, bundles: { "q-0JS1F3On.js": { size: 624, imports: ["q-DrgkIqB6.js", "q-pmfK7Emn.js", "q-uemlvruI.js"], origins: ["node_modules/@builder.io/qwik-city/index.qwik.mjs_entry_RouterOutlet.js", "node_modules/@builder.io/qwik-city/s_e0ssidxoeam.js"], symbols: ["s_e0ssiDXoeAM"] }, "q-B4XL7z7S.js": { size: 170, imports: ["q-DrgkIqB6.js", "q-uemlvruI.js"], dynamicImports: ["q-ClKQl7pK.js"], origins: ["src/routes/pages/strategie/impact/index.tsx"] }, "q-BGmpAaRo.js": { size: 2253, origins: ["node_modules/@builder.io/qwik-city/s_1rjpkhqf8aq.js"], symbols: ["s_1RJPKHqF8AQ"] }, "q-BgStDghK.js": { size: 171, imports: ["q-DrgkIqB6.js", "q-uemlvruI.js"], dynamicImports: ["q-flP4uM9S.js"], origins: ["src/routes/sections/process/index.tsx"] }, "q-BIj0_GM4.js": { size: 171, imports: ["q-DrgkIqB6.js", "q-uemlvruI.js"], dynamicImports: ["q-CbrImzO7.js"], origins: ["src/global.css", "src/root.tsx"] }, "q-BJjAUVW7.js": { size: 366, imports: ["q-DrgkIqB6.js", "q-pmfK7Emn.js", "q-uemlvruI.js"], dynamicImports: ["q-CafDhJUW.js"], origins: ["src/routes/layout.tsx"] }, "q-BjJUSAlw.js": { size: 125, imports: ["q-DrgkIqB6.js"], origins: ["node_modules/@builder.io/qwik-city/index.qwik.mjs_entry_Form.js", "node_modules/@builder.io/qwik-city/s_uphv2ogn4wc.js"], symbols: ["s_uPHV2oGn4wc"] }, "q-BoG0iQUP.js": { size: 173, imports: ["q-DrgkIqB6.js", "q-uemlvruI.js"], dynamicImports: ["q-C_zI-pY5.js"], origins: ["src/routes/pages/strategie/stratHero/index.tsx"] }, "q-BP4dNgaW.js": { size: 1848, imports: ["q-DrgkIqB6.js"], origins: ["public/media/home/hero.webp?jsx", "src/routes/sections/founder/index.tsx_entry_Founder.js", "src/routes/sections/founder/s_pges7j09frm.js"], symbols: ["s_pGES7J09frM"] }, "q-Bq36Wx9q.js": { size: 2539, origins: ["node_modules/@builder.io/qwik-city/service-worker.mjs", "src/routes/service-worker.ts"] }, "q-BV8H_kEI.js": { size: 1210, imports: ["q-DrgkIqB6.js", "q-pmfK7Emn.js", "q-uemlvruI.js"], origins: ["node_modules/@builder.io/qwik-city/index.qwik.mjs_entry_serverQrl.js", "node_modules/@builder.io/qwik-city/s_sgytlj8uq8i.js"], symbols: ["s_SGytLJ8uq8I"] }, "q-BwmutnWS.js": { size: 168, imports: ["q-DrgkIqB6.js", "q-uemlvruI.js"], dynamicImports: ["q-mNiqyjHd.js"], origins: ["src/routes/sections/goal/index.tsx"] }, "q-BYD5gTO-.js": { size: 254, imports: ["q-DrgkIqB6.js", "q-uemlvruI.js"], dynamicImports: ["q-CaDpAnvP.js"], origins: ["src/routes/pages/strategie/index.tsx"] }, "q-C0tTchK-.js": { size: 1130, imports: ["q-DrgkIqB6.js"], origins: ["src/routes/sections/way/index.tsx_entry_Way.js", "src/routes/sections/way/s_yjppc49tzf8.js"], symbols: ["s_YjpPC49tZf8"] }, "q-C3VpEgNo.js": { size: 167, imports: ["q-DrgkIqB6.js", "q-uemlvruI.js"], dynamicImports: ["q-C0tTchK-.js"], origins: ["src/routes/sections/way/index.tsx"] }, "q-C4RqTdix.js": { size: 171, imports: ["q-DrgkIqB6.js", "q-uemlvruI.js"], dynamicImports: ["q-BP4dNgaW.js"], origins: ["src/routes/sections/founder/index.tsx"] }, "q-C5IHMgCG.js": { size: 175, imports: ["q-DrgkIqB6.js", "q-uemlvruI.js"], dynamicImports: ["q-D1I1ogT5.js"], origins: ["src/routes/pages/strategie/orientation/index.tsx"] }, "q-C_zI-pY5.js": { size: 175, imports: ["q-DrgkIqB6.js"], origins: ["src/routes/pages/strategie/stratHero/index.tsx_entry_StratHero.js", "src/routes/pages/strategie/stratHero/s_fwewwqrfwby.js"], symbols: ["s_fWEWWqrFWbY"] }, "q-CaDpAnvP.js": { size: 442, imports: ["q-B4XL7z7S.js", "q-BoG0iQUP.js", "q-C5IHMgCG.js", "q-DrgkIqB6.js", "q-DvKM7wYC.js", "q-TFIicnb1.js", "q-uemlvruI.js"], origins: ["src/routes/pages/strategie/index.tsx_entry_strategie.js", "src/routes/pages/strategie/s_njji05j2h7s.js"], symbols: ["s_nJji05J2H7s"] }, "q-CafDhJUW.js": { size: 386, imports: ["q-DrgkIqB6.js", "q-uemlvruI.js"], dynamicImports: ["q-DoB7OzuV.js", "q-y9aHoFTn.js"], origins: ["src/components/starter/footer/footer.tsx", "src/components/starter/header/header.tsx", "src/routes/layout.tsx_entry_layout.js", "src/routes/s_vklnxphuh5s.js"], symbols: ["s_VkLNXphUh5s"] }, "q-CbrImzO7.js": { size: 505, imports: ["q-DrgkIqB6.js", "q-pmfK7Emn.js", "q-uemlvruI.js"], dynamicImports: ["q-jENKZsc1.js"], origins: ["src/components/router-head/router-head.tsx", "src/root.tsx_entry_root.js", "src/s_3sccycdd1z0.js"], symbols: ["s_3sccYCDd1Z0"] }, "q-CfxW0gOF.js": { size: 845, imports: ["q-DrgkIqB6.js", "q-pmfK7Emn.js", "q-uemlvruI.js"], origins: ["node_modules/@builder.io/qwik-city/index.qwik.mjs_entry_QwikCityMockProvider.js", "node_modules/@builder.io/qwik-city/s_bubtvtyvvre.js", "node_modules/@builder.io/qwik-city/s_wmyc5h00wti.js"], symbols: ["s_BUbtvTyvVRE", "s_WmYC5H00wtI"] }, "q-CjLzsr7P.js": { size: 125, imports: ["q-uemlvruI.js"], dynamicImports: ["q-Bq36Wx9q.js"], origins: ["@qwik-city-entries"] }, "q-ClKQl7pK.js": { size: 612, imports: ["q-DrgkIqB6.js"], origins: ["src/routes/pages/strategie/impact/index.tsx_entry_Impact.js", "src/routes/pages/strategie/impact/s_9tn4mgqwxti.js"], symbols: ["s_9TN4mgqwxTI"] }, "q-CwovweWc.js": { size: 2888, imports: ["q-DrgkIqB6.js"], origins: ["public/media/strategy/002.webp?jsx", "src/routes/pages/strategie/action/index.tsx_entry_Action.js", "src/routes/pages/strategie/action/s_vogn4rsb0pw.js"], symbols: ["s_vogN4rSb0Pw"] }, "q-D1I1ogT5.js": { size: 695, imports: ["q-DrgkIqB6.js"], origins: ["src/routes/pages/strategie/orientation/index.tsx_entry_Orientation.js", "src/routes/pages/strategie/orientation/s_ack68v0g98q.js"], symbols: ["s_aCk68v0g98Q"] }, "q-Dcb37EpX.js": { size: 1299, imports: ["q-DrgkIqB6.js", "q-pmfK7Emn.js", "q-uemlvruI.js"], origins: ["node_modules/@builder.io/qwik-city/index.qwik.mjs_entry_GetForm.js", "node_modules/@builder.io/qwik-city/s_kk5bfmkh4zi.js", "node_modules/@builder.io/qwik-city/s_nk9plpjqm9y.js", "node_modules/@builder.io/qwik-city/s_p9msze0ojs4.js"], symbols: ["s_KK5BfmKH4ZI", "s_Nk9PlpjQm9Y", "s_p9MSze0ojs4"] }, "q-DKLay-Kw.js": { size: 1016, imports: ["q-DrgkIqB6.js"], origins: ["public/media/strategy/003.webp?jsx", "src/routes/pages/strategie/effect/index.tsx_entry_Effect.js", "src/routes/pages/strategie/effect/s_d2yd27njk04.js"], symbols: ["s_d2YD27NjK04"] }, "q-DL3mFo3S.js": { size: 176, imports: ["q-DrgkIqB6.js", "q-uemlvruI.js"], dynamicImports: ["q-nyz44z2I.js"], origins: ["src/routes/sections/c-t-a/index.tsx"] }, "q-DoB7OzuV.js": { size: 463, imports: ["q-DrgkIqB6.js", "q-DUXty5qi.js"], origins: ["src/components/starter/header/header.tsx_entry_header.js", "src/components/starter/header/s_mbt9fil89mc.js"], symbols: ["s_mBt9fIl89mc"] }, "q-DrgkIqB6.js": { size: 63974, origins: ["@builder.io/qwik/build", "node_modules/@builder.io/qwik/core.prod.mjs"] }, "q-Ds0N2_9i.js": { size: 1514, imports: ["q-DrgkIqB6.js", "q-pmfK7Emn.js", "q-uemlvruI.js"], origins: ["node_modules/@builder.io/qwik-city/index.qwik.mjs_entry_Link.js", "node_modules/@builder.io/qwik-city/s_8gdlbszqbam.js", "node_modules/@builder.io/qwik-city/s_osdg8fnytw4.js", "node_modules/@builder.io/qwik-city/s_pif0khhuxfy.js"], symbols: ["s_8gdLBszqbaM", "s_Osdg8FnYTw4", "s_pIf0khHUxfY"] }, "q-DUXty5qi.js": { size: 249, imports: ["q-DrgkIqB6.js"], origins: ["public/media/icons/logo-h-f.webp?jsx"] }, "q-DvKM7wYC.js": { size: 170, imports: ["q-DrgkIqB6.js", "q-uemlvruI.js"], dynamicImports: ["q-CwovweWc.js"], origins: ["src/routes/pages/strategie/action/index.tsx"] }, "q-flP4uM9S.js": { size: 1248, imports: ["q-DrgkIqB6.js"], origins: ["public/media/home/finality/001.webp?jsx", "src/routes/sections/process/index.tsx_entry_Process.js", "src/routes/sections/process/s_ahxcm5mqebq.js"], symbols: ["s_AHXCM5MQEBQ"] }, "q-H06a8diM.js": { size: 447, imports: ["q-DrgkIqB6.js"], origins: ["src/routes/sections/hero/index.tsx_entry_Hero.js", "src/routes/sections/hero/s_1hudqzrnk0a.js"], symbols: ["s_1hUDQZrNk0A"] }, "q-jENKZsc1.js": { size: 903, imports: ["q-DrgkIqB6.js", "q-pmfK7Emn.js", "q-uemlvruI.js"], origins: ["src/components/router-head/router-head.tsx_entry_RouterHead.js", "src/components/router-head/s_zrbrqoaqxsy.js"], symbols: ["s_zrbrqoaqXSY"] }, "q-mNiqyjHd.js": { size: 985, imports: ["q-DrgkIqB6.js"], origins: ["src/routes/sections/goal/index.tsx_entry_Goal.js", "src/routes/sections/goal/s_fah0c0dz5k0.js"], symbols: ["s_fah0c0dZ5k0"] }, "q-nyz44z2I.js": { size: 215, imports: ["q-DrgkIqB6.js"], origins: ["src/routes/sections/c-t-a/index.tsx_entry_CallToAction.js", "src/routes/sections/c-t-a/s_j3b01iq9kho.js"], symbols: ["s_J3B01Iq9kho"] }, "q-onsmAJ1g.js": { size: 761, imports: ["q-DrgkIqB6.js"], origins: ["node_modules/@builder.io/qwik-city/index.qwik.mjs_entry_routeActionQrl.js", "node_modules/@builder.io/qwik-city/s_a5bzc7wo00a.js"], symbols: ["s_A5bZC7WO00A"] }, "q-OPTCbu0N.js": { size: 168, imports: ["q-DrgkIqB6.js", "q-uemlvruI.js"], dynamicImports: ["q-H06a8diM.js"], origins: ["src/routes/sections/hero/index.tsx"] }, "q-pmfK7Emn.js": { size: 8975, imports: ["q-DrgkIqB6.js", "q-uemlvruI.js"], dynamicImports: ["q-0JS1F3On.js", "q-BGmpAaRo.js", "q-tOY7n8rD.js"], origins: ["@qwik-city-sw-register", "node_modules/@builder.io/qwik-city/index.qwik.mjs"] }, "q-TFIicnb1.js": { size: 170, imports: ["q-DrgkIqB6.js", "q-uemlvruI.js"], dynamicImports: ["q-DKLay-Kw.js"], origins: ["src/routes/pages/strategie/effect/index.tsx"] }, "q-tOY7n8rD.js": { size: 6534, imports: ["q-DrgkIqB6.js", "q-pmfK7Emn.js", "q-uemlvruI.js"], dynamicImports: ["q-B4XL7z7S.js", "q-BgStDghK.js", "q-BJjAUVW7.js", "q-BoG0iQUP.js", "q-BwmutnWS.js", "q-BYD5gTO-.js", "q-C3VpEgNo.js", "q-C4RqTdix.js", "q-C5IHMgCG.js", "q-CjLzsr7P.js", "q-DL3mFo3S.js", "q-DvKM7wYC.js", "q-OPTCbu0N.js", "q-TFIicnb1.js", "q-yOLSW52x.js"], origins: ["@qwik-city-plan", "node_modules/@builder.io/qwik-city/index.qwik.mjs_entry_QwikCityProvider.js", "node_modules/@builder.io/qwik-city/s_02wmimzeabk.js", "node_modules/@builder.io/qwik-city/s_fx0bdjeja0e.js", "node_modules/@builder.io/qwik-city/s_rpdjaz33wla.js", "node_modules/@builder.io/qwik-city/s_txcfoy819ag.js"], symbols: ["s_02wMImzEAbk", "s_fX0bDjeJa0E", "s_RPDJAz33WLA", "s_TxCFOy819ag"] }, "q-uemlvruI.js": { size: 1077 }, "q-WmFKNSag.js": { size: 495, imports: ["q-BgStDghK.js", "q-BwmutnWS.js", "q-C3VpEgNo.js", "q-C4RqTdix.js", "q-DL3mFo3S.js", "q-DrgkIqB6.js", "q-OPTCbu0N.js", "q-uemlvruI.js"], origins: ["src/routes/index.tsx_entry_routes.js", "src/routes/s_xyl1qowpydi.js"], symbols: ["s_xYL1qOwPyDI"] }, "q-y9aHoFTn.js": { size: 7175, imports: ["q-DrgkIqB6.js", "q-DUXty5qi.js"], origins: ["public/media/icons/facebook.svg", "public/media/icons/gmail.svg", "public/media/icons/whatsapp.svg", "src/components/starter/footer/footer.tsx_entry_footer.js", "src/components/starter/footer/s_u0bwm0i5da8.js"], symbols: ["s_u0bwM0i5dA8"] }, "q-yOLSW52x.js": { size: 266, imports: ["q-DrgkIqB6.js", "q-uemlvruI.js"], dynamicImports: ["q-WmFKNSag.js"], origins: ["src/routes/index.tsx"] } }, injections: [{ tag: "style", location: "head", attributes: { "data-src": "/build/q-CqOO7_CP.css", dangerouslySetInnerHTML: `:root{--picton-blue: hsla(200, 75%, 55%, 1);--azul: hsla(208, 73%, 42%, 1);--apple-green: hsla(77, 73%, 44%, 1);--green-apple: hsl(96, 100%, 50%);--canary: hsla(56, 100%, 50%, 1);--rich-black: hsla(206, 80%, 4%, 1);--white-smoke: hsla(30, 8%, 95%, 1)}*{margin:0;padding:0;box-sizing:border-box;list-style:none;text-decoration:none;font-weight:400;scroll-behavior:smooth;color:var(--rich-black)}body{min-height:100dvh;background:var(--white-smoke)}@font-face{font-display:swap;font-family:Poppins;font-style:normal;font-weight:400;src:url(/fonts/poppins-v21-latin-regular.eot);src:url(/fonts/poppins-v21-latin-regular.eot?#iefix) format("embedded-opentype"),url(/fonts/poppins-v21-latin-regular.woff2) format("woff2"),url(/fonts/poppins-v21-latin-regular.woff) format("woff"),url(/fonts/poppins-v21-latin-regular.ttf) format("truetype"),url(/fonts/poppins-v21-latin-regular.svg#Poppins) format("svg")}@font-face{font-display:swap;font-family:Poppins;font-style:normal;font-weight:500;src:url(/fonts/poppins-v21-latin-500.eot);src:url(/fonts/poppins-v21-latin-500.eot?#iefix) format("embedded-opentype"),url(/fonts/poppins-v21-latin-500.woff2) format("woff2"),url(/fonts/poppins-v21-latin-500.woff) format("woff"),url(/fonts/poppins-v21-latin-500.ttf) format("truetype"),url(/fonts/poppins-v21-latin-500.svg#Poppins) format("svg")}@font-face{font-display:swap;font-family:Poppins;font-style:normal;font-weight:600;src:url(/fonts/poppins-v21-latin-600.eot);src:url(/fonts/poppins-v21-latin-600.eot?#iefix) format("embedded-opentype"),url(/fonts/poppins-v21-latin-600.woff2) format("woff2"),url(/fonts/poppins-v21-latin-600.woff) format("woff"),url(/fonts/poppins-v21-latin-600.ttf) format("truetype"),url(/fonts/poppins-v21-latin-600.svg#Poppins) format("svg")}@font-face{font-display:swap;font-family:Poppins;font-style:normal;font-weight:700;src:url(/fonts/poppins-v21-latin-700.eot);src:url(/fonts/poppins-v21-latin-700.eot?#iefix) format("embedded-opentype"),url(/fonts/poppins-v21-latin-700.woff2) format("woff2"),url(/fonts/poppins-v21-latin-700.woff) format("woff"),url(/fonts/poppins-v21-latin-700.ttf) format("truetype"),url(/fonts/poppins-v21-latin-700.svg#Poppins) format("svg")}@font-face{font-display:swap;font-family:Poppins;font-style:normal;font-weight:800;src:url(/fonts/poppins-v21-latin-800.eot);src:url(/fonts/poppins-v21-latin-800.eot?#iefix) format("embedded-opentype"),url(/fonts/poppins-v21-latin-800.woff2) format("woff2"),url(/fonts/poppins-v21-latin-800.woff) format("woff"),url(/fonts/poppins-v21-latin-800.ttf) format("truetype"),url(/fonts/poppins-v21-latin-800.svg#Poppins) format("svg")}@font-face{font-display:swap;font-family:Poppins;font-style:normal;font-weight:900;src:url(/fonts/poppins-v21-latin-900.eot);src:url(/fonts/poppins-v21-latin-900.eot?#iefix) format("embedded-opentype"),url(/fonts/poppins-v21-latin-900.woff2) format("woff2"),url(/fonts/poppins-v21-latin-900.woff) format("woff"),url(/fonts/poppins-v21-latin-900.ttf) format("truetype"),url(/fonts/poppins-v21-latin-900.svg#Poppins) format("svg")}@font-face{font-family:Arsilon;src:url(/fonts/Arsilon.otf)}body{font-family:Poppins;font-weight:400}h1,h2,h3,h4,h5{font-family:Poppins;font-weight:700}html{font-size:100%}h1{font-size:4.21rem}h2{font-size:3.158rem}h3{font-size:2.369rem}h4{font-size:1.777rem}h5{font-size:1.333rem}small{font-size:.75rem}header{z-index:5;padding:1em}nav{display:flex;align-items:center}.logo{width:-moz-max-content;width:max-content}.logo img{width:79px;height:100%;mix-blend-mode:multiply}.nav-links{display:flex;gap:1em;margin:0 1.5em 0 auto}.menu{display:flex;gap:.6666666667em;position:relative}.menu *{cursor:pointer}.menu label{position:relative}.menu label:after{content:"Menu";position:absolute;top:50%;transform:translateY(-50%);right:calc(100% + .6666666667em)}.menu label div{width:20px;height:2px;background:var(--rich-black)}.menu label div:nth-child(2){margin:3px 0}.menu input{position:absolute;opacity:0}footer{padding:3em 1em 1em;background:color-mix(in srgb,var(--picton-blue),transparent 80%)}footer .logo{height:100px;flex-shrink:0}footer .logo img{height:100%;width:100%}footer .principal{display:none}.principal{display:flex;align-items:center;margin:0 auto 1.75em}.minimalist{width:-moz-fit-content;width:fit-content;margin:0 auto 1.75em}.minimalist .get-in-touch{gap:1.75em}.get-in-touch{display:flex;flex-wrap:wrap;width:-moz-fit-content;width:fit-content;gap:.6666666667em}.get-in-touch a{font-weight:500;display:flex;gap:.6666666667em;padding-left:1em}.links{display:grid;gap:2px}.copyright{display:flex;justify-content:center;gap:4px}.container{max-width:1536px;margin:0 auto}#hero{height:80vh;display:grid;align-items:center;background:linear-gradient(0deg,#0000001a,#0000001a),url(/media/home/001.webp) 50% center/cover no-repeat;margin:1em 1em 3em;border-radius:1em;position:relative;box-shadow:0 4px 6px #0000001f,0 5px 15px #00000023}#hero h1{text-align:center;color:var(--white-smoke);text-shadow:#000 0px 5px 10px,#000 0px 5px 10px;line-height:1.2}#hero h2{word-spacing:15px;text-align:center;font-family:Arsilon;color:var(--white-smoke);text-shadow:#000 0px 5px 10px,#000 0px 5px 10px}.c-t-a{display:flex;justify-content:center;gap:1em;margin:.6666666667em 0 0}.c-t-a a{background:var(--azul);padding:.6666666667em 1em;border-radius:calc(.6666666667em - 4px);font-weight:600;color:var(--white-smoke);box-shadow:var(--rich-black) 0 0 15px,var(--rich-black) 0 0 25px}#founder{min-height:40vh;position:relative;display:flex;align-items:center}#founder .image{position:absolute;top:0;right:0;z-index:-1;clip-path:polygon(45% 0%,100% 0%,75% 100%,20% 100%)}#founder .image img{height:55vh;width:auto}#founder h4{line-height:1.2}#founder h5{margin:0 0 .6666666667em}#founder .verse{font-weight:500;position:relative}#founder .verse:before{content:"";position:absolute;bottom:0;left:0;height:50%;width:100%;background:color-mix(in srgb,var(--green-apple),transparent 30%);z-index:-1}#founder p:nth-child(5){font-weight:600}#founder p:not(:nth-child(5)){margin:0 0 .6666666667em}#founder a{background:var(--picton-blue);padding:.6666666667em 1em}#founder .text{max-width:65ch}#goal{margin-top:6em;margin-bottom:6em;height:-moz-max-content;height:max-content}#goal .content{display:grid;grid-template-columns:1fr 1fr;gap:2em}#goal .content>div{border-radius:1em;padding:1em;box-shadow:0 4px 6px #0000001f,0 5px 15px #00000023;position:relative;background:#fff}#goal .content>div h4{position:relative;z-index:1}#goal .content>div h4:before{content:"";position:absolute;bottom:0;left:0;height:50%;width:100%;background:color-mix(in srgb,var(--canary),transparent 20%);z-index:-1}#goal .content>div:before{content:"";position:absolute;bottom:-.6666666667em;right:-.6666666667em;height:50px;width:70px;border-radius:4px 4px 1.5em;background:var(--green-apple);box-shadow:0 4px 6px #0000001f,0 5px 15px #00000023;z-index:-1}#goal .content>div:after{content:"";position:absolute;top:-.6666666667em;left:-.6666666667em;height:50px;width:70px;border-radius:1.5em 4px 4px;background:var(--canary);box-shadow:0 4px 6px #0000001f,0 5px 15px #00000023;z-index:-1}#process{display:grid;grid-template-columns:repeat(auto-fit,45%);justify-content:space-evenly;gap:1.75em;margin-bottom:6em}#process .images{position:relative;height:-moz-max-content;height:max-content}#process button{position:absolute;opacity:0}#process .wrap{height:250px;position:relative}#process .wrap:after{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:calc(100% + 1.5em);height:calc(100% + 1.5em);border-radius:1.5em;z-index:-1;background:var(--green-apple);box-shadow:0 4px 6px #0000001f,0 5px 15px #00000023}#process .wrap img{border-radius:1em;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;box-shadow:0 4px 6px #0000001f,0 5px 15px #00000023}#process .pagination{display:flex;position:absolute;bottom:.6666666667em;left:50%;transform:translate(-50%);gap:.6666666667em;z-index:9;opacity:0}#process .pagination span{height:10px;aspect-ratio:1/1;border-radius:50%;background:var(--canary)}#process h5{width:-moz-fit-content;width:fit-content}#process p{margin:.6666666667em 0 0;max-width:50ch}#way{margin-bottom:6em}#way .content{display:flex;gap:2em;border-radius:1em;padding:1em;box-shadow:0 4px 6px #0000001f,0 5px 15px #00000023;position:relative;background:#fff}#way .content:before{content:"";position:absolute;bottom:-.6666666667em;right:-.6666666667em;height:50px;width:70px;border-radius:4px 4px 1.5em;background:var(--green-apple);box-shadow:0 4px 6px #0000001f,0 5px 15px #00000023;z-index:-2}#way .content:after{content:"";position:absolute;top:-.6666666667em;left:-.6666666667em;height:50px;width:70px;border-radius:1.5em 4px 4px;background:var(--canary);box-shadow:0 4px 6px #0000001f,0 5px 15px #00000023;z-index:-2}#way .content .titles{display:grid;gap:.6666666667em}#way .content .titles h5{color:var(--rich-black);width:-moz-fit-content;width:fit-content;position:relative;z-index:1}#way .content .titles h5:before{content:"";position:absolute;bottom:0;left:0;height:50%;width:100%;background:color-mix(in srgb,var(--canary),transparent 20%);z-index:-1}#way .content .titles p{font-weight:700;color:var(--azul)}#way .content .separation{width:3px;background:color-mix(in srgb,var(--rich-black),transparent 80%)}#way .content p{max-width:70ch;position:relative;align-self:center}#c-t-a{text-align:center;padding:4.5em 0;border-top:2px solid color-mix(in srgb,var(--rich-black),transparent 80%);border-bottom:2px solid color-mix(in srgb,var(--rich-black),transparent 80%);margin-top:6em;margin-bottom:6em}#c-t-a h3{margin:0 0 .6666666667em}#c-t-a a{padding:.6666666667em 2em;background:var(--azul);font-weight:600;text-transform:uppercase;color:#fff;border-radius:.6666666667em}#strathero{background:url(/media/strategy/001.jpg) center/cover no-repeat;height:400px;display:grid;place-content:center;margin:1em 1em 3em;border-radius:1em;box-shadow:0 4px 6px #0000001f,0 5px 15px #00000023}#strathero h2{color:var(--white-smoke);text-shadow:#000 0px 5px 10px,#000 0px 5px 10px}#impact{display:grid;grid-template-columns:1fr 1fr;justify-content:space-evenly;gap:3em;margin-top:6em;margin-bottom:6em}#impact>div{border-radius:1em;padding:1em;box-shadow:0 4px 6px #0000001f,0 5px 15px #00000023;position:relative;background:#fff}#impact>div h4{position:relative;z-index:1}#impact>div h4:before{content:"";position:absolute;bottom:0;left:0;height:50%;width:100%;background:color-mix(in srgb,var(--canary),transparent 20%);z-index:-1}#impact>div:before{content:"";position:absolute;bottom:-.6666666667em;right:-.6666666667em;height:50px;width:70px;border-radius:4px 4px 1.5em;background:var(--green-apple);box-shadow:0 4px 6px #0000001f,0 5px 15px #00000023;z-index:-1}#impact>div:after{content:"";position:absolute;top:-.6666666667em;left:-.6666666667em;height:50px;width:70px;border-radius:1.5em 4px 4px;background:var(--canary);box-shadow:0 4px 6px #0000001f,0 5px 15px #00000023;z-index:-1}#effect{display:flex;margin-bottom:6em;gap:3em}#effect .image{height:200px;aspect-ratio:2/1}#effect .image img{width:100%;height:100%;border-radius:1em;-o-object-fit:cover;object-fit:cover;-o-object-position:left center;object-position:left center}#effect .text h4{margin-bottom:.6666666667em}#effect .text div{padding:0 0 0 1em;position:relative}#effect .text div:before{content:"";position:absolute;top:0;left:2px;width:3px;height:100%;background:color-mix(in srgb,var(--rich-black),transparent 70%)}#effect .text div:first-of-type{margin-bottom:1em}#effect .text div p{max-width:70ch}#orientation{margin-bottom:6em}#orientation h4{margin:0 auto 1em}#orientation h3{display:none}#orientation .list{display:flex;justify-content:space-evenly}#orientation .list>div{width:300px;background:#ffffff80;padding:1em;border-radius:1em;box-shadow:0 4px 6px #0000001f,0 5px 15px #00000023;position:relative}#orientation .list>div h3{position:absolute;bottom:1em;right:1em;opacity:.1;z-index:-1}#action{display:flex;justify-content:space-evenly;gap:3em}#action .sites{width:300px;height:auto}#action .sites h5{width:-moz-fit-content;width:fit-content;margin:0 auto 1em;color:var(--rich-black);position:relative}#action .sites h5:before{content:"";position:absolute;bottom:0;left:0;height:50%;width:100%;background:color-mix(in srgb,var(--canary),transparent 20%);z-index:-1}#action .sites img{width:100%;height:100%}#action .wrapper{max-width:75ch}#action .wrapper .slide{padding:0 1em}#action .wrapper .slide div{margin:1em 0}#action .title{display:flex;justify-content:space-between}#action .title h5:last-child{color:color-mix(in srgb,var(--rich-black),transparent 70%)}section{margin:0 0 3em}h4{width:-moz-fit-content;width:fit-content;position:relative}h4:before{content:"";position:absolute;bottom:0;left:0;height:50%;width:100%;background:color-mix(in srgb,var(--canary),transparent 20%);z-index:-1}h5{color:var(--azul)}@media (min-width: 1536px){.container{max-width:90%}}@media (max-width: 1536px){.container{max-width:1280px}}@media (max-width: 1280px){.container{max-width:1024px}}@media (max-width: 1024px){h1{font-size:clamp(1.5rem,7vw,3rem)}h2{font-size:clamp(1.5rem,7vw,2.4rem)}.container{max-width:768px}#hero{height:clamp(300px,40vh,1000px)}#founder{flex-direction:column}#founder .image{position:initial;order:1;clip-path:initial;width:100%;height:250px;margin:0 0 1.75em}#founder .image img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:top;object-position:top;border-radius:1em;box-shadow:0 4px 6px #0000001f,0 5px 15px #00000023}#founder .text{order:2}#goal .content{grid-template-columns:1fr}#way .content{flex-direction:column;gap:.6666666667em}#way .content .separation{height:3px;width:100%;background:color-mix(in srgb,var(--rich-black),transparent 80%)}}@media (max-width: 768px){.container{max-width:640px}.c-t-a a{padding:4px 8px}}@media (max-width: 640px){h4{font-size:clamp(1.3rem,4vw,2.4rem)}h5{font-size:clamp(1.2rem,3vw,2.4rem)}.container{max-width:475px}#process{grid-template-columns:1fr}}@media (max-width: 475px){footer .principal{display:flex}footer .minimalist{display:none}.container{width:100%}#founder{padding:0 1.5em}#goal .content{padding:0 1.5em;gap:4em}#process,#way{padding:0 1.5em}#c-t-a{padding:2em 0 2.5em}#c-t-a h3{font-size:1.75rem;max-width:15ch;line-height:1.2;margin:0 auto 1em}}
` } }], version: "1", options: { target: "client", buildMode: "production", entryStrategy: { type: "smart" } }, platform: { qwik: "1.7.1", vite: "", rollup: "4.18.1", env: "node", os: "win32", node: "20.12.0" } };
var Re2 = () => {
  const t2 = Nc(), e = Pc();
  return ft(me, { children: [xt("title", null, null, t2.title, 1, null), xt("link", null, { rel: "canonical", href: Tc((n) => n.url.href, [e], "p0.url.href") }, null, 3, null), xt("meta", null, { name: "viewport", content: "width=device-width, initial-scale=1.0" }, null, 3, null), xt("link", null, { rel: "icon", type: "image/webp", href: "/logo.webp" }, null, 3, null), t2.meta.map((n) => kc("meta", { ...n }, null, 0, n.key)), t2.links.map((n) => kc("link", { ...n }, null, 0, n.key)), t2.styles.map((n) => {
    var s;
    return kc("style", { ...n.props, ...(s = n.props) != null && s.dangerouslySetInnerHTML ? {} : { dangerouslySetInnerHTML: n.style } }, null, 0, n.key);
  }), t2.scripts.map((n) => {
    var s;
    return kc("script", { ...n.props, ...(s = n.props) != null && s.dangerouslySetInnerHTML ? {} : { dangerouslySetInnerHTML: n.script } }, null, 0, n.key);
  })] }, 1, "OA_0");
};
var Qe2 = Wn(Vt(Re2, "s_zrbrqoaqXSY"));
var Ye2 = () => ft(zc, { children: [xt("head", null, null, [xt("meta", null, { charset: "utf-8" }, null, 3, null), xt("link", null, { rel: "manifest", href: "/manifest.json" }, null, 3, null), ft(Qe2, null, 3, "35_0"), ft(Lc, null, 3, "35_1")], 1, null), xt("body", null, { lang: "fr" }, ft(Mc, null, 3, "35_2"), 1, null)] }, 1, "35_3");
var $e2 = Wn(Vt(Ye2, "s_3sccYCDd1Z0"));
function Ze2(t2) {
  return Fe2(ft($e2, null, 3, "pY_0"), { manifest: We2, ...t2, containerAttributes: { lang: "fr-FR", ...t2.containerAttributes }, serverData: { ...t2.serverData } });
}
var L2 = "/assets/logo-h-f-BNZdiDWz.webp 200w, /assets/logo-h-f-CFkksWZ2.webp 394w";
var R = 394;
var I = 315;
var M2 = { srcSet: L2, width: R, height: I };
function c(u, i, o, r) {
  return xt("img", { decoding: "async", loading: "lazy", ...u }, M2, void 0, 3, i);
}
var j2 = () => xt("header", null, null, xt("nav", null, null, [xt("a", null, { href: "/", class: "logo" }, xt("span", null, null, ft(c, null, 3, "CP_0"), 3, null), 3, null), xt("div", null, { class: "fortest" }, ft(c, { alt: "", [M]: { alt: M } }, 3, "CP_1"), 1, null), xt("ul", null, { class: "nav-links" }, null, 3, null), xt("div", null, { class: "menu" }, xt("p", null, null, "FR / EN", 3, null), 3, null)], 1, null), 1, "CP_2");
var q = Wn(Vt(j2, "s_mBt9fIl89mc"));
var p = "data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0%2012.067C0%2018.0335%204.33333%2022.9944%2010%2024V15.3333H7V12H10V9.33332C10%206.33332%2011.9333%204.66666%2014.6667%204.66666C15.5333%204.66666%2016.4667%204.79999%2017.3333%204.93332V7.99999H15.8C14.3333%207.99999%2014%208.73332%2014%209.66666V12H17.2L16.6667%2015.3333H14V24C19.6667%2022.9944%2024%2018.0335%2024%2012.067C24%205.43017%2018.6%200%2012%200C5.4%200%200%205.43017%200%2012.067Z'%20fill='%231877F2'/%3e%3c/g%3e%3c/svg%3e";
var g = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2048%2048'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ctitle%3eWhatsapp-color%3c/title%3e%3cdesc%3eCreated%20with%20Sketch.%3c/desc%3e%3cdefs%3e%3c/defs%3e%3cg%20id='Icons'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='Color-'%20transform='translate(-700.000000,%20-360.000000)'%20fill='%2367C15E'%3e%3cpath%20d='M723.993033,360%20C710.762252,360%20700,370.765287%20700,383.999801%20C700,389.248451%20701.692661,394.116025%20704.570026,398.066947%20L701.579605,406.983798%20L710.804449,404.035539%20C714.598605,406.546975%20719.126434,408%20724.006967,408%20C737.237748,408%20748,397.234315%20748,384.000199%20C748,370.765685%20737.237748,360.000398%20724.006967,360.000398%20L723.993033,360.000398%20L723.993033,360%20Z%20M717.29285,372.190836%20C716.827488,371.07628%20716.474784,371.034071%20715.769774,371.005401%20C715.529728,370.991464%20715.262214,370.977527%20714.96564,370.977527%20C714.04845,370.977527%20713.089462,371.245514%20712.511043,371.838033%20C711.806033,372.557577%20710.056843,374.23638%20710.056843,377.679202%20C710.056843,381.122023%20712.567571,384.451756%20712.905944,384.917648%20C713.258648,385.382743%20717.800808,392.55031%20724.853297,395.471492%20C730.368379,397.757149%20732.00491,397.545307%20733.260074,397.27732%20C735.093658,396.882308%20737.393002,395.527239%20737.971421,393.891043%20C738.54984,392.25405%20738.54984,390.857171%20738.380255,390.560912%20C738.211068,390.264652%20737.745308,390.095816%20737.040298,389.742615%20C736.335288,389.389811%20732.90737,387.696673%20732.25849,387.470894%20C731.623543,387.231179%20731.017259,387.315995%20730.537963,387.99333%20C729.860819,388.938653%20729.198006,389.89831%20728.661785,390.476494%20C728.238619,390.928051%20727.547144,390.984595%20726.969123,390.744481%20C726.193254,390.420348%20724.021298,389.657798%20721.340985,387.273388%20C719.267356,385.42535%20717.856938,383.125756%20717.448104,382.434484%20C717.038871,381.729275%20717.405907,381.319529%20717.729948,380.938852%20C718.082653,380.501232%20718.421026,380.191036%20718.77373,379.781688%20C719.126434,379.372738%20719.323884,379.160897%20719.549599,378.681068%20C719.789645,378.215575%20719.62006,377.735746%20719.450874,377.382942%20C719.281687,377.030139%20717.871269,373.587317%20717.29285,372.190836%20Z'%20id='Whatsapp'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
var m = "data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%20-31.5%20256%20256'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20preserveAspectRatio='xMidYMid'%20fill='%23000000'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cg%3e%3cpath%20d='M58.1818182,192.049515%20L58.1818182,93.1404244%20L27.5066233,65.0770089%20L0,49.5040608%20L0,174.59497%20C0,184.253152%207.82545455,192.049515%2017.4545455,192.049515%20L58.1818182,192.049515%20Z'%20fill='%234285F4'%3e%3c/path%3e%3cpath%20d='M197.818182,192.049515%20L238.545455,192.049515%20C248.203636,192.049515%20256,184.224061%20256,174.59497%20L256,49.5040608%20L224.844415,67.3422767%20L197.818182,93.1404244%20L197.818182,192.049515%20Z'%20fill='%2334A853'%3e%3c/path%3e%3cpolygon%20fill='%23EA4335'%20points='58.1818182%2093.1404244%2054.0077618%2054.4932827%2058.1818182%2017.5040608%20128%2069.8676972%20197.818182%2017.5040608%20202.487488%2052.4960089%20197.818182%2093.1404244%20128%20145.504061'%3e%3c/polygon%3e%3cpath%20d='M197.818182,17.5040608%20L197.818182,93.1404244%20L256,49.5040608%20L256,26.2313335%20C256,4.64587897%20231.36,-7.65957557%20214.109091,5.28587897%20L197.818182,17.5040608%20Z'%20fill='%23FBBC04'%3e%3c/path%3e%3cpath%20d='M0,49.5040608%20L26.7588051,69.5731646%20L58.1818182,93.1404244%20L58.1818182,17.5040608%20L41.8909091,5.28587897%20C24.6109091,-7.65957557%200,4.64587897%200,26.2313335%20L0,49.5040608%20Z'%20fill='%23C5221F'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
var P2 = () => xt("footer", null, null, [xt("div", null, { class: "minimalist" }, xt("div", null, { class: "get-in-touch" }, [xt("a", null, { href: "mailto:" }, xt("span", null, null, xt("img", null, { src: m, alt: "icon mail", width: 32, height: 32 }, null, 3, null), 3, null), 3, null), xt("a", null, { href: "wa.link.com", target: "_blank" }, xt("span", null, null, xt("img", null, { src: g, alt: "icon whatsapp", width: 32, height: 32 }, null, 3, null), 3, null), 3, null), xt("a", null, { href: "", target: "_blank" }, xt("span", null, null, xt("img", null, { src: p, alt: "icon facebook", width: 32, height: 32 }, null, 3, null), 3, null), 3, null)], 3, null), 3, null), xt("div", null, { class: "principal" }, [xt("div", null, { class: "logo" }, ft(c, null, 3, "so_0"), 3, null), xt("div", null, { class: "get-in-touch" }, [xt("a", null, { href: "mailto:" }, [xt("span", null, null, xt("img", null, { src: m, alt: "icon mail", width: 24, height: 24 }, null, 3, null), 3, null), xt("span", null, null, "this.is.a.gmail@gmail.com", 3, null)], 3, null), xt("a", null, { href: "wa.link.com", target: "_blank" }, [xt("span", null, null, xt("img", null, { src: g, alt: "icon whatsapp", width: 24, height: 24 }, null, 3, null), 3, null), xt("span", null, null, "+261 33 00 000 00", 3, null)], 3, null), xt("a", null, { href: "", target: "_blank" }, [xt("span", null, null, xt("img", null, { src: p, alt: "icon facebook", width: 24, height: 24 }, null, 3, null), 3, null), xt("span", null, null, "Real Mission Movement", 3, null)], 3, null)], 3, null)], 3, null), xt("div", null, { class: "copyright" }, [xt("p", null, null, "\xA9 2024 |", 3, null), xt("a", null, { href: "https://ohayo-dev-design.com/", target: "_blank" }, "Ohayo Dev & Design", 3, null)], 3, null)], 3, "so_1");
var y = Wn(Vt(P2, "s_u0bwM0i5dA8"));
var D2 = async ({ cacheControl: u }) => {
  u({ staleWhileRevalidate: 604800, maxAge: 5 });
};
var U3 = () => ({ date: (/* @__PURE__ */ new Date()).toISOString() });
var V2 = Oc(Vt(U3, "s_GQamrjryd1Y"));
var G3 = () => ft(me, { children: [ft(q, null, 3, "XF_0"), xt("main", null, null, ft(_e, null, 3, "XF_1"), 1, null), ft(y, null, 3, "XF_2")] }, 1, "XF_3");
var x = Wn(Vt(G3, "s_VkLNXphUh5s"));
var B2 = Object.freeze(Object.defineProperty({ __proto__: null, default: x, onGet: D2, useServerTimeLoader: V2 }, Symbol.toStringTag, { value: "Module" }));
var k2 = () => xt("section", null, { id: "hero", class: "" }, xt("div", null, { class: "content container" }, [xt("h1", null, null, ["Miova, Manova\u2026 ", xt("br", null, null, null, 3, null), " Mihavao, Manavao\u2026"], 3, null), xt("h2", null, null, "Manorata tantara", 3, null), xt("div", null, { class: "c-t-a" }, [xt("a", null, { href: "" }, "Nous contacter", 3, null), xt("a", null, { href: "" }, "Visiter le site", 3, null)], 3, null)], 3, null), 3, "02_0");
var h = Wn(Vt(k2, "s_1hUDQZrNk0A"));
var H = Object.freeze(Object.defineProperty({ __proto__: null, Hero: h }, Symbol.toStringTag, { value: "Module" }));
var Q2 = "/assets/hero-DiNiRXSG.webp 200w, /assets/hero-CCMbzrQs.webp 400w, /assets/hero-DAbGN68C.webp 600w, /assets/hero-C_QUhMKv.webp 800w, /assets/hero-BkKmqbOs.webp 1200w";
var W2 = 1200;
var F2 = 822;
var J2 = { srcSet: Q2, width: W2, height: F2 };
function z2(u, i, o, r) {
  return xt("img", { decoding: "async", loading: "lazy", ...u }, J2, void 0, 3, i);
}
var Y2 = () => xt("section", null, { id: "founder", class: "container" }, [xt("div", null, { class: "text" }, [xt("h4", null, null, "Mots du fondateur", 3, null), xt("h5", null, null, "| Rev Dr Mamy RASOLOFONDRAINIBE", 3, null), xt("p", null, null, ["Le d\xE9veloppement s\u2019acc\xE9l\xE8re \xE0 grand pas dans ce monde. \u2013 La technologie s\u2019accroit et \xE9volue vite. La soci\xE9t\xE9 humaine se submerge dans son propre concept d\u2019\xE9volution. S\u2019\xE9voluer vers o\xF9 ? sur quoi ? L\u2019accomplissement de l\u2019\xE9vangile a fait ses preuves partout et dans divers aspects de l\u2019humanit\xE9. ", xt("br", null, null, null, 3, null), " Et ceci cours \xE0 sa d\xE9faillance", xt("span", null, { class: "verse" }, "(Efe.5.16b)", 3, null), "."], 3, null), xt("p", null, null, ["Sur ceux, qu\u2019on peut t\xE9moigner que J\xE9sus Christ n\u2019a jamais chang\xE9", xt("span", null, { class: "verse" }, "(Heb.13.8)", 3, null), ". Son message pour l\u2019humanit\xE9 n\u2019a gu\xE8re chang\xE9. Ordonne ses disciples \xE0 pr\xEAcher l\u2019\xE9vangile \xE0 chacun des hommes dans le monde entier  ", xt("span", null, { class: "verse" }, "(Mar.16.15)", 3, null), ", faire les nations terriennes ses disciples  ", xt("span", null, { class: "verse" }, "(Mat.28.19)", 3, null), ", et \xEAtre ses ind\xE9fectibles t\xE9moins jusqu\u2019au bout de la terre \u2026", xt("span", null, { class: "verse" }, "(Asa.1.8)", 3, null)], 3, null), xt("p", null, null, "Real Mission Movement r\xE9alise ceux qui ont \xE9t\xE9 dits, accomplit \xAB l\u2019authentique mission et le v\xE9ridique \xE9vangile \xBB", 3, null)], 3, null), xt("div", null, { class: "image" }, [xt("span", null, null, null, 3, null), ft(z2, { alt: "Rev Dr Mamy RASOLOFONDRAINIBE", [M]: { alt: M } }, 3, "Sx_0")], 1, null)], 1, "Sx_1");
var E = Wn(Vt(Y2, "s_pGES7J09frM"));
var Z2 = Object.freeze(Object.defineProperty({ __proto__: null, Founder: E }, Symbol.toStringTag, { value: "Module" }));
var $ = () => xt("section", null, { id: "goal", class: "container" }, xt("div", null, { class: "content" }, [xt("div", null, { class: "vision" }, [xt("h4", null, null, "NOTRE VISION", 3, null), xt("h5", null, null, "| UNE DES STRUCTURES D\u2019EMISSION DES MISSIONNAIRES LE PLUS ABONDANT EN AFRIQUE", 3, null), xt("p", null, null, "Dieu exhorte tous les chr\xE9tiens pour \xEAtre int\xE9grer dans sa divine vision, et gagner son objectif. Toutes les actions entreprises soient accomplies dans l\u2019authenticit\xE9, dans l\u2019honn\xEAtet\xE9 et \xE0 travers l\u2019int\xE9grit\xE9.", 3, null)], 3, null), xt("div", null, { class: "mission" }, [xt("h4", null, null, "NOS MISSIONS", 3, null), xt("h5", null, null, "| APPORTER L\u2019EVANGILE DANS LA SOCIETE ET EVANGELISER L\u2019EGLISE", 3, null), xt("p", null, null, "L\u2019\xE9vang\xE9lisation, et le discip\xF4lat sont les fondements de la mission. C\u2019est ce qu\u2019on appelle \xAB L\u2019EMINENTE MISSION \xBB accomplir celle-ci est la raison d\u2019\xEAtre et la raison de vivre des chr\xE9tiens.", 3, null)], 3, null)], 3, null), 3, "IV_0");
var S2 = Wn(Vt($, "s_fah0c0dZ5k0"));
var X2 = Object.freeze(Object.defineProperty({ __proto__: null, Goal: S2 }, Symbol.toStringTag, { value: "Module" }));
var K2 = "/assets/001-BVIlEyi2.webp 200w, /assets/001-DN0xeGhS.webp 400w, /assets/001-CqtunOgP.webp 600w, /assets/001-BIrg832F.webp 702w";
var ll = 702;
var nl = 528;
var el = { srcSet: K2, width: ll, height: nl };
function sl(u, i, o, r) {
  return xt("img", { decoding: "async", loading: "lazy", ...u }, el, void 0, 3, i);
}
var tl = () => xt("section", null, { id: "process", class: "container" }, [xt("div", null, { class: "images" }, [xt("div", null, { class: "wrap slide-1" }, ft(sl, { alt: "image random", [M]: { alt: M } }, 3, "Wn_0"), 1, null), xt("div", null, { class: "navigation" }, [xt("button", null, { class: "prev" }, null, 3, null), xt("button", null, { class: "next" }, null, 3, null)], 3, null), xt("div", null, { class: "pagination" }, [xt("span", null, null, null, 3, null), xt("span", null, null, null, 3, null), xt("span", null, null, null, 3, null), xt("span", null, null, null, 3, null), xt("span", null, null, null, 3, null)], 3, null)], 1, null), xt("div", null, { class: "text" }, [xt("h4", null, null, "LA FINALITE", 3, null), xt("h5", null, null, "| CHAQUE CHRETIEN DEVIENT UN MISSIONNAIRE", 3, null), xt("p", null, null, "Si les chr\xE9tiens s\u2019approprient et appliquent l\u2019\xE9vangile, l\u2019objectif de Dieu sera accompli. La r\xE9alisation de cela sera un immense devoir, mais c\u2019est un imp\xE9ratif pour que ses messages soient accomplis.", 3, null)], 3, null)], 1, "Wn_1");
var v2 = Wn(Vt(tl, "s_AHXCM5MQEBQ"));
var ul = Object.freeze(Object.defineProperty({ __proto__: null, Process: v2 }, Symbol.toStringTag, { value: "Module" }));
var al = () => xt("section", null, { id: "way", class: "container" }, xt("div", null, { class: "content" }, [xt("div", null, { class: "titles" }, [xt("div", null, { class: "doctrine" }, [xt("h5", null, null, "NOTRE PHILOSOPHIE", 3, null), xt("p", null, null, "| MALAGASY PRECHE L\u2019EVANGILE AU PEUPLE MALAGASY, SOUTENU PAR DES MALAGASY ET PR\xD4NE L\u2019ENTRE AIDE", 3, null)], 3, null), xt("div", null, { class: "how" }, [xt("h5", null, null, "NOTRE APPROCHE", 3, null), xt("p", null, null, "| PROCESSUS DE DEVELOPPEMENT HOLISTIQUE ADAPTE AUX VALEURS MALAGASY", 3, null)], 3, null)], 3, null), xt("div", null, { class: "separation" }, null, 3, null), xt("p", null, null, "Effectivement, les missionnaires de l\u2019Ouest, porteur de l\u2019\xE9vangile \xE0 Madagascar, a transmis la lumi\xE8re. Ils ont accomplis leurs responsabilit\xE9s, les \xE9glises malagasy d\xE9ploient l\u2019effort n\xE9cessaire pour assurer le relais. \xAB On ne pourra pas b\xE2tir une maison avec une seule main \xBB, chaque appui sera la bienvenue. Real Mission Movement ne incarnera jamais, comme l\u2019adage malagasy stipule \xAB comme la rivi\xE8re de l\u2019Ikopa, en accueillant ses amis, elle vire en jaune \xBB", 3, null)], 3, null), 3, "C0_0");
var _ = Wn(Vt(al, "s_YjpPC49tZf8"));
var il = Object.freeze(Object.defineProperty({ __proto__: null, Way: _ }, Symbol.toStringTag, { value: "Module" }));
var ol = () => xt("section", null, { id: "c-t-a" }, [xt("h3", null, null, "NOTRE STRATEGIE 2024 - 2028", 3, null), xt("a", null, { href: "/" }, "Voir plus", 3, null)], 3, "G6_0");
var w = Wn(Vt(ol, "s_J3B01Iq9kho"));
var rl = Object.freeze(Object.defineProperty({ __proto__: null, CallToAction: w }, Symbol.toStringTag, { value: "Module" }));
var cl = () => ft(me, { children: [ft(h, null, 3, "H1_0"), ft(S2, null, 3, "H1_1"), ft(v2, null, 3, "H1_2"), ft(_, null, 3, "H1_3"), ft(E, null, 3, "H1_4"), ft(w, null, 3, "H1_5")] }, 1, "H1_6");
var dl = Wn(Vt(cl, "s_xYL1qOwPyDI"));
var pl = { title: "Real Mission Movement", meta: [{ name: "description", content: "Missionnaire" }] };
var gl = Object.freeze(Object.defineProperty({ __proto__: null, default: dl, head: pl }, Symbol.toStringTag, { value: "Module" }));
var ml = "/assets/002-DiKwCPM6.webp 200w, /assets/002-PGTWYyiM.webp 400w, /assets/002-Blm0xqJy.webp 600w, /assets/002-C5Px8EEg.webp 800w, /assets/002-BgdZ8RTN.webp 1042w";
var hl = 1042;
var El = 2043;
var Sl = { srcSet: ml, width: hl, height: El };
function vl(u, i, o, r) {
  return xt("img", { decoding: "async", loading: "lazy", ...u }, Sl, void 0, 3, i);
}
var _l = () => xt("section", null, { id: "action", class: "container" }, [xt("div", null, { class: "sites" }, [xt("h5", null, null, "NOS SITES D'ACTION", 3, null), xt("div", null, { class: "mada" }, ft(vl, { alt: "map of madagascar", [M]: { alt: M } }, 3, "5b_0"), 1, null)], 1, null), xt("div", null, { class: "content" }, [xt("div", null, { class: "wrapper" }, [xt("div", null, { class: "title" }, [xt("h5", null, null, "NOS OBJECTIFS STRATEGIQUES", 3, null), xt("h5", null, null, "1/3", 3, null)], 3, null), xt("div", null, { class: "slider" }, xt("div", null, { class: "slide" }, [xt("div", null, null, xt("p", null, null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, eaque magni quam quo nesciunt tempora earum ipsa culpa itaque ratione!", 3, null), 3, null), xt("div", null, null, xt("p", null, null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, eaque magni quam quo nesciunt tempora earum ipsa culpa itaque ratione!", 3, null), 3, null), xt("div", null, null, xt("p", null, null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, eaque magni quam quo nesciunt tempora earum ipsa culpa itaque ratione!", 3, null), 3, null), xt("div", null, null, xt("p", null, null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, eaque magni quam quo nesciunt tempora earum ipsa culpa itaque ratione!", 3, null), 3, null)], 3, null), 3, null), xt("div", null, { class: "navigation" }, [xt("button", null, { class: "prev" }, null, 3, null), xt("button", null, { class: "next" }, null, 3, null)], 3, null)], 3, null), xt("div", null, { class: "wrapper" }, [xt("div", null, { class: "title" }, [xt("h5", null, null, "NOS OBJECTIFS STRATEGIQUES", 3, null), xt("h5", null, null, "1/3", 3, null)], 3, null), xt("div", null, { class: "slider" }, xt("div", null, { class: "slide" }, [xt("div", null, null, xt("p", null, null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, eaque magni quam quo nesciunt tempora earum ipsa culpa itaque ratione!", 3, null), 3, null), xt("div", null, null, xt("p", null, null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, eaque magni quam quo nesciunt tempora earum ipsa culpa itaque ratione!", 3, null), 3, null), xt("div", null, null, xt("p", null, null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, eaque magni quam quo nesciunt tempora earum ipsa culpa itaque ratione!", 3, null), 3, null), xt("div", null, null, xt("p", null, null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, eaque magni quam quo nesciunt tempora earum ipsa culpa itaque ratione!", 3, null), 3, null)], 3, null), 3, null), xt("div", null, { class: "navigation" }, [xt("button", null, { class: "prev" }, null, 3, null), xt("button", null, { class: "next" }, null, 3, null)], 3, null)], 3, null)], 3, null)], 1, "5b_1");
var f = Wn(Vt(_l, "s_vogN4rSb0Pw"));
var wl = Object.freeze(Object.defineProperty({ __proto__: null, Action: f }, Symbol.toStringTag, { value: "Module" }));
var fl = "/assets/003-DX8tLrSS.webp 200w, /assets/003-DdzD-Bny.webp 400w, /assets/003-BdLkF6P8.webp 600w, /assets/003-CEHQcgkG.webp 800w, /assets/003-B_szyRgV.webp 1080w";
var Tl = 1080;
var Al = 720;
var bl = { srcSet: fl, width: Tl, height: Al };
function Ol(u, i, o, r) {
  return xt("img", { decoding: "async", loading: "lazy", ...u }, bl, void 0, 3, i);
}
var Cl = () => xt("section", null, { id: "effect", class: "container" }, [xt("div", null, { class: "image" }, ft(Ol, { alt: "standing dudes with micros", [M]: { alt: M } }, 3, "0f_0"), 1, null), xt("div", null, { class: "text" }, [xt("h4", null, null, "EFFETS ATTENDUS", 3, null), xt("div", null, null, xt("p", null, null, "Que chaque m\xE9nage s'approprie de l'\xE9vangile et l'utilise pour reprendre des d\xE9cisions de croissance et d'\xE9panouissement durable de chaque membre de la famille.", 3, null), 3, null), xt("div", null, null, xt("p", null, null, "Que l'\xE9vangile soit adopt\xE9 par les leaders de tout les niveaux comme un outil de leadership et de management de d\xE9veloppement communautaire.", 3, null), 3, null)], 3, null)], 1, "0f_1");
var T2 = Wn(Vt(Cl, "s_d2YD27NjK04"));
var Nl = Object.freeze(Object.defineProperty({ __proto__: null, Effect: T2 }, Symbol.toStringTag, { value: "Module" }));
var Ll = () => xt("section", null, { id: "impact", class: "container" }, [xt("div", null, { class: "impact" }, [xt("h4", null, null, "IMPACT", 3, null), xt("p", null, null, "L\u2019EVANGILE SERA UNE VALEURE CONSTITUANT L\u2019IDENTITE DES MALAGASY, SE TRANSMET DE GENERATION EN GENERATION ET GARANT D\u2019UN DEVELOPPEMENT HARMONIEUX ET DURABLE POUR LA NATION", 3, null)], 3, null), xt("div", null, { class: "goal" }, [xt("h4", null, null, "LE BUT", 3, null), xt("p", null, null, "PROMOUVOIR UN CHANGEMENT DE PENSEE, UN CHANGEMENT DE FAIRE ET DE MANI\xC8RE ET UN CHANGEMENT DE COMPORTEMENT", 3, null)], 3, null)], 3, "ub_0");
var A2 = Wn(Vt(Ll, "s_9TN4mgqwxTI"));
var Rl = Object.freeze(Object.defineProperty({ __proto__: null, Impact: A2 }, Symbol.toStringTag, { value: "Module" }));
var Il = () => xt("section", null, { id: "orientation", class: "container" }, [xt("h4", null, null, "ORIENTATIONS STRATEGIQUES", 3, null), xt("div", null, { class: "list" }, [xt("div", null, null, [xt("h3", null, null, "ORIENTATION 01", 3, null), xt("p", null, null, "DEVELOPPER LES CAPACITES DE MISE EN \u0152UVRE DU RMM", 3, null)], 3, null), xt("div", null, null, [xt("h3", null, null, "ORIENTATION 02", 3, null), xt("p", null, null, "DEPLOYER L\u2019EVANGILE JUSQU'AUX COMMUNAUTES LOCALES DE BASE", 3, null)], 3, null), xt("div", null, null, [xt("h3", null, null, "ORIENTATION 03", 3, null), xt("p", null, null, "RENFORCER LES MOYENS D\u2019EXISTANCE ET DE SUBSISTANCE AU NIVEAU LOCAL", 3, null)], 3, null)], 3, null)], 3, "54_0");
var b = Wn(Vt(Il, "s_aCk68v0g98Q"));
var Ml = Object.freeze(Object.defineProperty({ __proto__: null, Orientation: b }, Symbol.toStringTag, { value: "Module" }));
var jl = () => xt("section", null, { id: "strathero" }, xt("h2", null, null, "NOTRE STRATEGIE 2024 - 2028", 3, null), 3, "vQ_0");
var O2 = Wn(Vt(jl, "s_fWEWWqrFWbY"));
var ql = Object.freeze(Object.defineProperty({ __proto__: null, StratHero: O2 }, Symbol.toStringTag, { value: "Module" }));
var Pl = () => ft(me, { children: [ft(O2, null, 3, "fZ_0"), ft(A2, null, 3, "fZ_1"), ft(T2, null, 3, "fZ_2"), ft(b, null, 3, "fZ_3"), ft(f, null, 3, "fZ_4")] }, 1, "fZ_5");
var yl = Wn(Vt(Pl, "s_nJji05J2H7s"));
var Dl = { title: "Strategie", meta: [{ name: "description", content: "Missionnaire" }] };
var Ul = Object.freeze(Object.defineProperty({ __proto__: null, default: yl, head: Dl }, Symbol.toStringTag, { value: "Module" }));
var Vl = [];
var t = () => B2;
var Gl = [["/", [t, () => gl], "/", ["q-BJjAUVW7.js", "q-yOLSW52x.js"]], ["pages/strategie/action/", [t, () => wl], "/pages/strategie/action/", ["q-BJjAUVW7.js", "q-DvKM7wYC.js"]], ["pages/strategie/effect/", [t, () => Nl], "/pages/strategie/effect/", ["q-BJjAUVW7.js", "q-TFIicnb1.js"]], ["pages/strategie/impact/", [t, () => Rl], "/pages/strategie/impact/", ["q-BJjAUVW7.js", "q-B4XL7z7S.js"]], ["pages/strategie/orientation/", [t, () => Ml], "/pages/strategie/orientation/", ["q-BJjAUVW7.js", "q-C5IHMgCG.js"]], ["pages/strategie/stratHero/", [t, () => ql], "/pages/strategie/stratHero/", ["q-BJjAUVW7.js", "q-BoG0iQUP.js"]], ["pages/strategie/", [t, () => Ul], "/pages/strategie/", ["q-BJjAUVW7.js", "q-BYD5gTO-.js"]], ["sections/c-t-a/", [t, () => rl], "/sections/c-t-a/", ["q-BJjAUVW7.js", "q-DL3mFo3S.js"]], ["sections/founder/", [t, () => Z2], "/sections/founder/", ["q-BJjAUVW7.js", "q-C4RqTdix.js"]], ["sections/goal/", [t, () => X2], "/sections/goal/", ["q-BJjAUVW7.js", "q-BwmutnWS.js"]], ["sections/hero/", [t, () => H], "/sections/hero/", ["q-BJjAUVW7.js", "q-OPTCbu0N.js"]], ["sections/process/", [t, () => ul], "/sections/process/", ["q-BJjAUVW7.js", "q-BgStDghK.js"]], ["sections/way/", [t, () => il], "/sections/way/", ["q-BJjAUVW7.js", "q-C3VpEgNo.js"]]];
var xl = [];
var Bl = true;
var kl = "/";
var Hl = true;
var Wl = { routes: Gl, serverPlugins: Vl, menus: xl, trailingSlash: Bl, basePathname: kl, cacheModules: Hl };
var V3 = (e) => {
  throw TypeError(e);
};
var E2 = (e, t2, n) => t2.has(e) || V3("Cannot " + n);
var T3 = (e, t2, n) => (E2(e, t2, "read from private field"), n ? n.call(e) : t2.get(e));
var $2 = (e, t2, n) => t2.has(e) ? V3("Cannot add the same private member more than once") : t2 instanceof WeakSet ? t2.add(e) : t2.set(e, n);
var X3 = (e, t2, n, r) => (E2(e, t2, "write to private field"), r ? r.call(e, n) : t2.set(e, n), n);
var Ue2 = class extends Error {
  constructor(e, t2) {
    super(), this.status = e, this.data = t2;
  }
};
var ye3 = class extends Error {
  constructor(e, t2) {
    super(t2), this.status = e;
  }
};
function Qe3(e, t2) {
  let n = "Server Error";
  return t2 != null && (typeof t2.message == "string" ? n = t2.message : n = String(t2)), "<html>" + we3(e, n) + "</html>";
}
function we3(e, t2) {
  typeof e != "number" && (e = 500), typeof t2 == "string" ? t2 = je3(t2) : t2 = "";
  const n = typeof t2 == "string" ? "600px" : "300px", r = e >= 500 ? Je2 : Ge2;
  return `
<head>
  <meta charset="utf-8">
  <meta http-equiv="Status" content="${e}">
  <title>${e} ${t2}</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    body { color: ${r}; background-color: #fafafa; padding: 30px; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Roboto, sans-serif; }
    p { max-width: ${n}; margin: 60px auto 30px auto; background: white; border-radius: 4px; box-shadow: 0px 0px 50px -20px ${r}; overflow: hidden; }
    strong { display: inline-block; padding: 15px; background: ${r}; color: white; }
    span { display: inline-block; padding: 15px; }
  </style>
</head>
<body><p><strong>${e}</strong> <span>${t2}</span></p></body>
`;
}
var ze3 = /[&<>]/g;
var je3 = (e) => e.replace(ze3, (t2) => {
  switch (t2) {
    case "&":
      return "&amp;";
    case "<":
      return "&lt;";
    case ">":
      return "&gt;";
    default:
      return "";
  }
});
var Ge2 = "#006ce9";
var Je2 = "#713fc2";
var Ke3 = { lax: "Lax", Lax: "Lax", None: "None", none: "None", strict: "Strict", Strict: "Strict" };
var Be3 = { seconds: 1, minutes: 1 * 60, hours: 1 * 60 * 60, days: 1 * 60 * 60 * 24, weeks: 1 * 60 * 60 * 24 * 7 };
var te3 = (e, t2, n) => {
  const r = [`${e}=${t2}`];
  typeof n.domain == "string" && r.push(`Domain=${n.domain}`), typeof n.maxAge == "number" ? r.push(`Max-Age=${n.maxAge}`) : Array.isArray(n.maxAge) ? r.push(`Max-Age=${n.maxAge[0] * Be3[n.maxAge[1]]}`) : typeof n.expires == "number" || typeof n.expires == "string" ? r.push(`Expires=${n.expires}`) : n.expires instanceof Date && r.push(`Expires=${n.expires.toUTCString()}`), n.httpOnly && r.push("HttpOnly"), typeof n.path == "string" && r.push(`Path=${n.path}`);
  const a = Ye3(n.sameSite);
  return a && r.push(`SameSite=${a}`), n.secure && r.push("Secure"), r.join("; ");
};
function ne3(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}
var Xe2 = (e) => {
  const t2 = {};
  if (typeof e == "string" && e !== "") {
    const n = e.split(";");
    for (const r of n) {
      const a = r.indexOf("=");
      a !== -1 && (t2[ne3(r.slice(0, a).trim())] = ne3(r.slice(a + 1).trim()));
    }
  }
  return t2;
};
function Ye3(e) {
  if (e === true)
    return "Strict";
  if (e === false)
    return "None";
  if (e)
    return Ke3[e];
}
var M3 = Symbol("request-cookies");
var H2 = Symbol("response-cookies");
var _2 = Symbol("live-cookies");
var Se3;
var be2;
var Ze3 = class {
  constructor(e) {
    this[Se3] = {}, this[be2] = {}, this.appendCounter = 0, this[M3] = Xe2(e), this[_2] = { ...this[M3] };
  }
  get(e, t2 = true) {
    const n = this[t2 ? _2 : M3][e];
    return n ? { value: n, json() {
      return JSON.parse(n);
    }, number() {
      return Number(n);
    } } : null;
  }
  getAll(e = true) {
    return Object.keys(this[e ? _2 : M3]).reduce((t2, n) => (t2[n] = this.get(n), t2), {});
  }
  has(e, t2 = true) {
    return !!this[t2 ? _2 : M3][e];
  }
  set(e, t2, n = {}) {
    this[_2][e] = typeof t2 == "string" ? t2 : JSON.stringify(t2);
    const r = typeof t2 == "string" ? t2 : encodeURIComponent(JSON.stringify(t2));
    this[H2][e] = te3(e, r, n);
  }
  append(e, t2, n = {}) {
    this[_2][e] = typeof t2 == "string" ? t2 : JSON.stringify(t2);
    const r = typeof t2 == "string" ? t2 : encodeURIComponent(JSON.stringify(t2));
    this[H2][++this.appendCounter] = te3(e, r, n);
  }
  delete(e, t2) {
    this.set(e, "deleted", { ...t2, maxAge: 0 }), this[_2][e] = null;
  }
  headers() {
    return Object.values(this[H2]);
  }
};
Se3 = H2, be2 = _2;
var qe3 = (e, t2) => {
  const n = t2.headers();
  if (n.length > 0) {
    const r = new Headers(e);
    for (const a of n)
      r.append("Set-Cookie", a);
    return r;
  }
  return e;
};
var Z3 = class {
};
var I2 = class extends Z3 {
};
var re2 = /* @__PURE__ */ new WeakMap();
var ae2 = "qaction";
var Ve3 = "qfunc";
var ie2 = "qdata";
function Ee3(e, t2) {
  const n = ce2(e), r = se2(e), a = ce2(t2), i = se2(t2);
  return Re3(e, n, r, t2, a, i);
}
function Re3(e, t2, n, r, a, i) {
  let s = null;
  for (; t2 < n; ) {
    const o = e.charCodeAt(t2++), l = r.charCodeAt(a++);
    if (o === 91) {
      const c2 = Ae3(e, t2), f2 = t2 + (c2 ? 3 : 0), h2 = Y3(e, f2, n, 93), m2 = e.substring(f2, h2), d = Y3(e, h2 + 1, n, 47), g2 = e.substring(h2 + 1, d);
      t2 = h2 + 1;
      const y2 = a - 1;
      if (c2) {
        const C2 = tt2(m2, g2, r, y2, i, e, t2 + g2.length + 1, n);
        if (C2)
          return Object.assign(s || (s = {}), C2);
      }
      const w2 = Y3(r, y2, i, 47, g2);
      if (w2 == -1)
        return null;
      const A3 = r.substring(y2, w2);
      if (!c2 && !g2 && !A3)
        return null;
      a = w2, (s || (s = {}))[m2] = decodeURIComponent(A3);
    } else if (o !== l && !(isNaN(l) && et2(e, t2)))
      return null;
  }
  return oe2(e, t2) && oe2(r, a) ? s || {} : null;
}
function et2(e, t2) {
  return e.charCodeAt(t2) === 91 && Ae3(e, t2 + 1);
}
function se2(e) {
  const t2 = e.length;
  return t2 > 1 && e.charCodeAt(t2 - 1) === 47 ? t2 - 1 : t2;
}
function oe2(e, t2) {
  const n = e.length;
  return t2 >= n || t2 == n - 1 && e.charCodeAt(t2) === 47;
}
function ce2(e) {
  return e.charCodeAt(0) === 47 ? 1 : 0;
}
function Ae3(e, t2) {
  return e.charCodeAt(t2) === 46 && e.charCodeAt(t2 + 1) === 46 && e.charCodeAt(t2 + 2) === 46;
}
function Y3(e, t2, n, r, a = "") {
  for (; t2 < n && e.charCodeAt(t2) !== r; )
    t2++;
  const i = a.length;
  for (let s = 0; s < i; s++)
    if (e.charCodeAt(t2 - i + s) !== a.charCodeAt(s))
      return -1;
  return t2 - i;
}
function tt2(e, t2, n, r, a, i, s, o) {
  n.charCodeAt(r) === 47 && r++;
  let l = a;
  const c2 = t2 + "/";
  for (; l >= r; ) {
    const f2 = Re3(i, s, o, n, l, a);
    if (f2) {
      let m2 = n.substring(r, Math.min(l, a));
      return m2.endsWith(c2) && (m2 = m2.substring(0, m2.length - c2.length)), f2[e] = decodeURIComponent(m2), f2;
    }
    const h2 = nt2(n, r, c2, l, r - 1) + c2.length;
    if (l === h2)
      break;
    l = h2;
  }
  return null;
}
function nt2(e, t2, n, r, a) {
  let i = e.lastIndexOf(n, r);
  return i == r - n.length && (i = e.lastIndexOf(n, r - n.length - 1)), i > t2 ? i : a;
}
var rt2 = async (e, t2, n, r) => {
  if (!Array.isArray(e))
    return null;
  for (const a of e) {
    const i = a[0], s = Ee3(i, r);
    if (!s)
      continue;
    const o = a[1], l = a[3], c2 = new Array(o.length), f2 = [];
    o.forEach((d, g2) => {
      le2(d, f2, (y2) => c2[g2] = y2, n);
    });
    const h2 = at2(t2, r);
    let m2;
    return le2(h2, f2, (d) => m2 = d == null ? void 0 : d.default, n), f2.length > 0 && await Promise.all(f2), [i, s, c2, m2, l];
  }
  return null;
};
var le2 = (e, t2, n, r) => {
  if (typeof e == "function") {
    const a = re2.get(e);
    if (a)
      n(a);
    else {
      const i = e();
      typeof i.then == "function" ? t2.push(i.then((s) => {
        r !== false && re2.set(e, s), n(s);
      })) : i && n(i);
    }
  }
};
var at2 = (e, t2) => {
  if (e) {
    t2 = t2.endsWith("/") ? t2 : t2 + "/";
    const n = e.find((r) => r[0] === t2 || t2.startsWith(r[0] + (t2.endsWith("/") ? "" : "/")));
    if (n)
      return n[1];
  }
};
function it2(e) {
  const t2 = [];
  return e === "day" ? e = 60 * 60 * 24 : e === "week" ? e = 60 * 60 * 24 * 7 : e === "month" ? e = 60 * 60 * 24 * 30 : e === "year" ? e = 60 * 60 * 24 * 365 : e === "private" ? e = { private: true, noCache: true } : e === "immutable" ? e = { public: true, immutable: true, maxAge: 60 * 60 * 24 * 365, staleWhileRevalidate: 60 * 60 * 24 * 365 } : e === "no-cache" && (e = { noCache: true }), typeof e == "number" && (e = { maxAge: e, sMaxAge: e, staleWhileRevalidate: e }), e.immutable && t2.push("immutable"), e.maxAge && t2.push(`max-age=${e.maxAge}`), e.sMaxAge && t2.push(`s-maxage=${e.sMaxAge}`), e.noStore && t2.push("no-store"), e.noCache && t2.push("no-cache"), e.private && t2.push("private"), e.public && t2.push("public"), e.staleWhileRevalidate && t2.push(`stale-while-revalidate=${e.staleWhileRevalidate}`), e.staleIfError && t2.push(`stale-if-error=${e.staleIfError}`), t2.join(", ");
}
var L3;
import("node:async_hooks").then((e) => {
  const t2 = e.AsyncLocalStorage;
  L3 = new t2(), globalThis.qcAsyncRequestStore = L3;
}).catch((e) => {
  console.warn("AsyncLocalStorage not available, continuing without it. This might impact concurrent server calls.", e);
});
function st(e, t2, n, r, a = true, i = "/", s) {
  let o;
  const l = new Promise((f2) => o = f2), c2 = ft2(e, t2, n, r, a, i, s, o);
  return { response: l, requestEv: c2, completion: L3 ? L3.run(c2, fe2, c2, o) : fe2(c2, o) };
}
async function fe2(e, t2) {
  try {
    await e.next();
  } catch (n) {
    if (n instanceof I2)
      await e.getWritableStream().close();
    else if (n instanceof ye3) {
      if (console.error(n), !e.headersSent) {
        const r = Qe3(n.status, n), a = n.status;
        e.html(a, r);
      }
    } else if (!(n instanceof Z3)) {
      if (G4(e) !== "dev")
        try {
          e.headersSent || (e.headers.set("content-type", "text/html; charset=utf-8"), e.cacheControl({ noCache: true }), e.status(500));
          const r = e.getWritableStream();
          if (!r.locked) {
            const a = r.getWriter();
            await a.write(J3.encode(we3(500, "Internal Server Error"))), await a.close();
          }
        } catch {
          console.error("Unable to render error page");
        }
      return n;
    }
  } finally {
    e.isDirty() || t2(null);
  }
}
function ot2(e, t2) {
  if (e.endsWith(D3)) {
    const n = e.length - Te3 + (t2 ? 1 : 0);
    e = e.slice(0, n), e === "" && (e = "/");
  }
  return e;
}
var W3 = "@isQData";
var D3 = "/q-data.json";
var Te3 = D3.length;
var ct2 = (e) => e && typeof e.then == "function";
var _e3 = Symbol("RequestEvLoaders");
var xe3 = Symbol("RequestEvMode");
var Ce3 = Symbol("RequestEvRoute");
var Q3 = Symbol("RequestEvQwikSerializer");
var De3 = Symbol("RequestEvTrailingSlash");
var Pe3 = "@routeName";
var z3 = "@actionId";
var Me3 = "@actionFormData";
var lt2 = "@nonce";
function ft2(e, t2, n, r, a, i, s, o) {
  const { request: l, platform: c2, env: f2 } = e, h2 = /* @__PURE__ */ new Map(), m2 = new Ze3(l.headers.get("cookie")), d = new Headers(), g2 = new URL(l.url);
  g2.pathname.endsWith(D3) && (g2.pathname = g2.pathname.slice(0, -Te3), a && !g2.pathname.endsWith("/") && (g2.pathname += "/"), h2.set(W3, true)), h2.set("@manifest", r);
  let y2 = -1, w2 = null, A3, C2 = e.locale, S3 = 200;
  const Oe3 = async () => {
    for (y2++; y2 < n.length; ) {
      const u = n[y2], p2 = globalThis.qcAsyncRequestStore, b2 = p2 != null && p2.run ? p2.run(R2, u, R2) : u(R2);
      ct2(b2) && await b2, y2++;
    }
  }, P3 = () => {
    if (w2 !== null)
      throw new Error("Response already sent");
  }, N3 = (u, p2) => {
    if (P3(), typeof u == "number") {
      S3 = u;
      const v3 = R2.getWritableStream().getWriter();
      v3.write(typeof p2 == "string" ? J3.encode(p2) : p2), v3.close();
    } else if (S3 = u.status, u.headers.forEach((b2, v3) => {
      d.append(v3, b2);
    }), u.body) {
      const b2 = R2.getWritableStream();
      u.body.pipeTo(b2);
    } else {
      if (S3 >= 300 && S3 < 400)
        return new I2();
      R2.getWritableStream().getWriter().close();
    }
    return K3();
  }, K3 = () => (y2 = ue2, new Z3()), B3 = {}, R2 = { [_e3]: B3, [xe3]: e.mode, [De3]: a, [Ce3]: t2, [Q3]: s, cookie: m2, headers: d, env: f2, method: l.method, signal: l.signal, params: (t2 == null ? void 0 : t2[1]) ?? {}, pathname: g2.pathname, platform: c2, query: g2.searchParams, request: l, url: g2, basePathname: i, sharedMap: h2, get headersSent() {
    return w2 !== null;
  }, get exited() {
    return y2 >= ue2;
  }, get clientConn() {
    return e.getClientConn();
  }, next: Oe3, exit: K3, cacheControl: (u, p2 = "Cache-Control") => {
    P3(), d.set(p2, it2(u));
  }, resolveValue: async (u) => {
    const p2 = u.__id;
    if (u.__brand === "server_loader" && !(p2 in B3))
      throw new Error("You can not get the returned data of a loader that has not been executed for this request.");
    return B3[p2];
  }, status: (u) => typeof u == "number" ? (P3(), S3 = u, u) : S3, locale: (u) => (typeof u == "string" && (C2 = u), C2 || ""), error: (u, p2) => (S3 = u, d.delete("Cache-Control"), new ye3(u, p2)), redirect: (u, p2) => {
    if (P3(), S3 = u, p2) {
      const b2 = p2.replace(/([^:])\/{2,}/g, "$1/");
      p2 !== b2 && console.warn(`Redirect URL ${p2} is invalid, fixing to ${b2}`), d.set("Location", b2);
    }
    return d.delete("Cache-Control"), u > 301 && d.set("Cache-Control", "no-store"), K3(), new I2();
  }, defer: (u) => typeof u == "function" ? u : () => u, fail: (u, p2) => (P3(), S3 = u, d.delete("Cache-Control"), { failed: true, ...p2 }), text: (u, p2) => (d.set("Content-Type", "text/plain; charset=utf-8"), N3(u, p2)), html: (u, p2) => (d.set("Content-Type", "text/html; charset=utf-8"), N3(u, p2)), parseBody: async () => A3 !== void 0 ? A3 : A3 = dt2(R2, h2, s), json: (u, p2) => (d.set("Content-Type", "application/json; charset=utf-8"), N3(u, JSON.stringify(p2))), send: N3, isDirty: () => w2 !== null, getWritableStream: () => {
    if (w2 === null) {
      if (e.mode === "dev") {
        const u = h2.get("@serverTiming");
        u && d.set("Server-Timing", u.map((p2) => `${p2[0]};dur=${p2[1]}`).join(","));
      }
      w2 = e.getWritableStream(S3, d, m2, o, R2);
    }
    return w2;
  } };
  return Object.freeze(R2);
}
function j3(e) {
  return e[_e3];
}
function q2(e) {
  return e[De3];
}
function ut2(e) {
  return e[Ce3];
}
function G4(e) {
  return e[xe3];
}
var ue2 = Number.MAX_SAFE_INTEGER;
var dt2 = async ({ request: e, method: t2, query: n }, r, a) => {
  var i;
  const s = ((i = e.headers.get("content-type")) == null ? void 0 : i.split(/[;,]/, 1)[0].trim()) ?? "";
  if (s === "application/x-www-form-urlencoded" || s === "multipart/form-data") {
    const o = await e.formData();
    return r.set(Me3, o), ht2(o);
  } else {
    if (s === "application/json")
      return await e.json();
    if (s === "application/qwik-json") {
      if (t2 === "GET" && n.has(ie2)) {
        const o = n.get(ie2);
        if (o)
          try {
            return a._deserializeData(decodeURIComponent(o));
          } catch {
          }
      }
      return a._deserializeData(await e.text());
    }
  }
};
var ht2 = (e) => [...e.entries()].reduce((n, [r, a]) => (r.split(".").reduce((i, s, o, l) => {
  if (s.endsWith("[]")) {
    const c2 = s.slice(0, -2);
    return i[c2] = i[c2] || [], i[c2] = [...i[c2], a];
  }
  return o < l.length - 1 ? i[s] = i[s] || (Number.isNaN(+l[o + 1]) ? {} : []) : i[s] = a;
}, n), n), {});
function pt2(e) {
  const { url: t2, params: n, request: r, status: a, locale: i } = e, s = {};
  r.headers.forEach((y2, w2) => s[w2] = y2);
  const o = e.sharedMap.get(z3), l = e.sharedMap.get(Me3), c2 = e.sharedMap.get(Pe3), f2 = e.sharedMap.get(lt2), h2 = e.request.headers, m2 = new URL(t2.pathname + t2.search, t2), d = h2.get("X-Forwarded-Host"), g2 = h2.get("X-Forwarded-Proto");
  return d && (m2.port = "", m2.host = d), g2 && (m2.protocol = g2), { url: m2.href, requestHeaders: s, locale: i(), nonce: f2, containerAttributes: { "q:route": c2 }, qwikcity: { routeName: c2, ev: e, params: { ...n }, loadedRoute: ut2(e), response: { status: a(), loaders: j3(e), action: o, formData: l } } };
}
var mt2 = (e, t2, n, r, a) => {
  const i = [], s = [], o = [], l = !!(t2 && Rt2(t2[2]));
  if (e && de2(i, s, o, e, l, n), t2) {
    const c2 = t2[0];
    r && (n === "POST" || n === "PUT" || n === "PATCH" || n === "DELETE") && o.unshift(At2), l && ((n === "POST" || n === "GET") && o.push(wt2), o.push(St2), o.push(xt2));
    const f2 = t2[2];
    o.push(_t2), de2(i, s, o, f2, l, n), l && (o.push((h2) => {
      h2.sharedMap.set(Pe3, c2);
    }), o.push(gt2(s, i)), o.push(a));
  }
  return o;
};
var de2 = (e, t2, n, r, a, i) => {
  for (const s of r) {
    typeof s.onRequest == "function" ? n.push(s.onRequest) : Array.isArray(s.onRequest) && n.push(...s.onRequest);
    let o;
    switch (i) {
      case "GET": {
        o = s.onGet;
        break;
      }
      case "POST": {
        o = s.onPost;
        break;
      }
      case "PUT": {
        o = s.onPut;
        break;
      }
      case "PATCH": {
        o = s.onPatch;
        break;
      }
      case "DELETE": {
        o = s.onDelete;
        break;
      }
      case "OPTIONS": {
        o = s.onOptions;
        break;
      }
      case "HEAD": {
        o = s.onHead;
        break;
      }
    }
    if (typeof o == "function" ? n.push(o) : Array.isArray(o) && n.push(...o), a) {
      const l = Object.values(s).filter((f2) => he2(f2, "server_loader"));
      e.push(...l);
      const c2 = Object.values(s).filter((f2) => he2(f2, "server_action"));
      t2.push(...c2);
    }
  }
};
var he2 = (e, t2) => e && typeof e == "function" && e.__brand === t2;
function gt2(e, t2) {
  return async (n) => {
    if (n.headersSent) {
      n.exit();
      return;
    }
    const { method: r } = n, a = j3(n), i = G4(n) === "dev", s = n[Q3];
    if (i && r === "GET" && n.query.has(ae2) && console.warn(`Seems like you are submitting a Qwik Action via GET request. Qwik Actions should be submitted via POST request.
Make sure your <form> has method="POST" attribute, like this: <form method="POST">`), r === "POST") {
      const o = n.query.get(ae2);
      if (o) {
        const l = globalThis._qwikActionsMap, c2 = e.find((f2) => f2.__id === o) ?? (l == null ? void 0 : l.get(o));
        if (c2) {
          n.sharedMap.set(z3, o);
          const f2 = await n.parseBody();
          if (!f2 || typeof f2 != "object")
            throw new Error(`Expected request data for the action id ${o} to be an object`);
          const h2 = await pe2(n, c2.__validators, f2, i);
          if (!h2.success)
            a[o] = n.fail(h2.status ?? 500, h2.error);
          else {
            const m2 = i ? await U4(n, c2.__qrl.getSymbol().split("_", 1)[0], () => c2.__qrl.call(n, h2.data, n)) : await c2.__qrl.call(n, h2.data, n);
            i && F3(s, m2, c2.__qrl), a[o] = m2;
          }
        }
      }
    }
    if (t2.length > 0) {
      const o = t2.map((l) => {
        const c2 = l.__id;
        return a[c2] = pe2(n, l.__validators, void 0, i).then((f2) => f2.success ? i ? U4(n, l.__qrl.getSymbol().split("_", 1)[0], () => l.__qrl.call(n, n)) : l.__qrl.call(n, n) : n.fail(f2.status ?? 500, f2.error)).then((f2) => (typeof f2 == "function" ? a[c2] = f2() : (i && F3(s, f2, l.__qrl), a[c2] = f2), f2)), a[c2];
      });
      await Promise.all(o);
    }
  };
}
async function pe2(e, t2, n, r) {
  let a = { success: true, data: n };
  if (t2)
    for (const i of t2)
      if (r ? a = await U4(e, "validator$", () => i.validate(e, n)) : a = await i.validate(e, n), a.success)
        n = a.data;
      else
        return a;
  return a;
}
function yt2(e) {
  return e ? typeof e == "object" && Symbol.asyncIterator in e : false;
}
async function wt2(e) {
  const t2 = e.query.get(Ve3);
  if (t2 && e.request.headers.get("X-QRL") === t2 && e.request.headers.get("Content-Type") === "application/qwik-json") {
    e.exit();
    const n = G4(e) === "dev", r = e[Q3], a = await e.parseBody();
    if (Array.isArray(a)) {
      const [i, ...s] = a;
      if (bt2(i) && i.getHash() === t2) {
        let o;
        try {
          n ? o = await U4(e, `server_${i.getSymbol()}`, () => i.apply(e, s)) : o = await i.apply(e, s);
        } catch (l) {
          if (l instanceof Ue2) {
            e.headers.set("Content-Type", "application/qwik-json"), e.send(l.status, await r._serializeData(l.data, true));
            return;
          }
          e.headers.set("Content-Type", "application/qwik-json"), e.send(500, await r._serializeData(l, true));
          return;
        }
        if (yt2(o)) {
          e.headers.set("Content-Type", "text/qwik-json-stream");
          const c2 = e.getWritableStream().getWriter();
          for await (const f2 of o) {
            n && F3(r, f2, i);
            const h2 = await r._serializeData(f2, true);
            if (e.signal.aborted)
              break;
            await c2.write(J3.encode(`${h2}
`));
          }
          c2.close();
        } else {
          F3(r, o, i), e.headers.set("Content-Type", "application/qwik-json");
          const l = await r._serializeData(o, true);
          e.send(200, l);
        }
        return;
      }
    }
    throw e.error(500, "Invalid request");
  }
}
function St2(e) {
  const t2 = q2(e), { basePathname: n, pathname: r, url: a, sharedMap: i } = e;
  if (!i.has(W3) && r !== n && !r.endsWith(".html")) {
    if (t2) {
      if (!r.endsWith("/"))
        throw e.redirect(302, r + "/" + a.search);
    } else if (r.endsWith("/"))
      throw e.redirect(302, r.slice(0, r.length - 1) + a.search);
  }
}
function F3(e, t2, n) {
  try {
    e._verifySerializable(t2, void 0);
  } catch (r) {
    throw r instanceof Error && n.dev && (r.loc = n.dev), r;
  }
}
var bt2 = (e) => typeof e == "function" && typeof e.getSymbol == "function";
function Rt2(e) {
  const t2 = e[e.length - 1];
  return t2 && typeof t2.default == "function";
}
function ke3(e, t2) {
  return e = new URL(e), e.pathname.endsWith(D3) && (e.pathname = e.pathname.slice(0, -D3.length)), t2 ? e.pathname.endsWith("/") || (e.pathname += "/") : e.pathname.endsWith("/") && (e.pathname = e.pathname.slice(0, -1)), e.toString().substring(e.origin.length);
}
var J3 = new TextEncoder();
function At2(e) {
  if (Dt2(e.request.headers, "application/x-www-form-urlencoded", "multipart/form-data", "text/plain")) {
    const n = e.request.headers.get("origin"), r = e.url.origin;
    if (n !== r)
      throw e.error(403, `CSRF check failed. Cross-site ${e.method} form submissions are forbidden.
The request origin "${n}" does not match the server origin "${r}".`);
  }
}
function Tt2(e) {
  return async (t2) => {
    if (t2.headersSent || t2.sharedMap.has(W3))
      return;
    t2.request.headers.forEach((h2, m2) => h2);
    const r = t2.headers;
    r.has("Content-Type") || r.set("Content-Type", "text/html; charset=utf-8");
    const a = q2(t2), { readable: i, writable: s } = new TextEncoderStream(), o = t2.getWritableStream(), l = i.pipeTo(o, { preventClose: true }), c2 = s.getWriter(), f2 = t2.status();
    try {
      const h2 = G4(t2) === "static", m2 = pt2(t2), d = await e({ base: t2.basePathname + "build/", stream: c2, serverData: m2, containerAttributes: { "q:render": h2 ? "static" : "", ...m2.containerAttributes } }), g2 = { loaders: j3(t2), action: t2.sharedMap.get(z3), status: f2 !== 200 ? f2 : 200, href: ke3(t2.url, a) };
      typeof d.html == "string" && await c2.write(d.html), t2.sharedMap.set("qData", g2);
    } finally {
      await c2.ready, await c2.close(), await l;
    }
    await o.close();
  };
}
async function _t2(e) {
  if (!e.sharedMap.has(W3))
    return;
  try {
    await e.next();
  } catch (i) {
    if (!(i instanceof I2))
      throw i;
  }
  if (e.headersSent)
    return;
  const n = e.status(), r = e.headers.get("Location");
  if (n >= 301 && n <= 308 && r) {
    const i = Ct2(r);
    if (i) {
      e.headers.set("Location", i), e.getWritableStream().close();
      return;
    } else
      e.status(200), e.headers.delete("Location");
  }
}
async function xt2(e) {
  if (!e.sharedMap.has(W3) || (await e.next(), e.headersSent || e.exited))
    return;
  const n = e.status(), r = e.headers.get("Location"), a = q2(e);
  e.request.headers.forEach((c2, f2) => c2), e.headers.set("Content-Type", "application/json; charset=utf-8");
  const i = { loaders: j3(e), action: e.sharedMap.get(z3), status: n !== 200 ? n : 200, href: ke3(e.url, a), redirect: r ?? void 0 }, s = e.getWritableStream().getWriter(), l = await e[Q3]._serializeData(i, true);
  s.write(J3.encode(l)), e.sharedMap.set("qData", i), s.close();
}
function Ct2(e) {
  if (e.startsWith("/")) {
    const t2 = D3, n = new URL(e, "http://localhost");
    return (n.pathname.endsWith("/") ? n.pathname.slice(0, -1) : n.pathname) + (t2.startsWith("/") ? "" : "/") + t2 + n.search;
  } else
    return;
}
function me2() {
  return typeof performance < "u" ? performance.now() : 0;
}
async function U4(e, t2, n) {
  const r = me2();
  try {
    return await n();
  } finally {
    const a = me2() - r;
    let i = e.sharedMap.get("@serverTiming");
    i || e.sharedMap.set("@serverTiming", i = []), i.push([t2, a]);
  }
}
function Dt2(e, ...t2) {
  var n;
  const r = ((n = e.get("content-type")) == null ? void 0 : n.split(/;,/, 1)[0].trim()) ?? "";
  return t2.includes(r);
}
async function Pt2(e, t2, n) {
  const { render: r, qwikCityPlan: a, manifest: i, checkOrigin: s } = t2, o = e.url.pathname, l = ot2(o, a.trailingSlash), c2 = await Mt2(a, l, e.request.method, s ?? true, r);
  if (c2) {
    const [f2, h2] = c2;
    return st(e, f2, h2, i, a.trailingSlash, a.basePathname, n);
  }
  return null;
}
async function Mt2(e, t2, n, r, a) {
  const { routes: i, serverPlugins: s, menus: o, cacheModules: l } = e, c2 = await rt2(i, o, l, t2), f2 = mt2(s, c2, n, r, Tt2(a));
  return f2.length > 0 ? [c2, f2] : null;
}
var x2;
var k3;
var O3;
var ge2;
var kt2 = (ge2 = class {
  constructor() {
    $2(this, x2, null);
    $2(this, k3, new TextEncoder());
    $2(this, O3, new TransformStream({ transform: (e, t2) => {
      e = String(e);
      let n = "";
      for (let r = 0; r < e.length; r++) {
        const a = e[r], i = a.charCodeAt(0);
        if (T3(this, x2) !== null) {
          const s = T3(this, x2);
          if (X3(this, x2, null), 56320 <= i && i <= 57343) {
            n += s + a;
            continue;
          }
          n += "\uFFFD";
        }
        if (55296 <= i && i <= 56319) {
          X3(this, x2, a);
          continue;
        }
        if (56320 <= i && i <= 57343) {
          n += "\uFFFD";
          continue;
        }
        n += a;
      }
      n && t2.enqueue(T3(this, k3).encode(n));
    }, flush: (e) => {
      T3(this, x2) !== null && e.enqueue(new Uint8Array([239, 191, 189]));
    } }));
  }
  get encoding() {
    return T3(this, k3).encoding;
  }
  get readable() {
    return T3(this, O3).readable;
  }
  get writable() {
    return T3(this, O3).writable;
  }
  get [Symbol.toStringTag]() {
    return "TextEncoderStream";
  }
}, x2 = /* @__PURE__ */ new WeakMap(), k3 = /* @__PURE__ */ new WeakMap(), O3 = /* @__PURE__ */ new WeakMap(), ge2);
function Ot2(e) {
  try {
    new globalThis.TextEncoderStream();
  } catch {
    globalThis.TextEncoderStream = kt2;
  }
  const t2 = { _deserializeData: Ic, _serializeData: Rc, _verifySerializable: Ac };
  e.manifest && Ve2(e.manifest);
  async function n(r, a, i) {
    try {
      const s = new URL(r.url);
      if (isStaticPath(r.method, s))
        return a.ASSETS.fetch(r);
      const o = s.hostname !== "127.0.0.1" && s.hostname !== "localhost" && s.port === "" && r.method === "GET", l = new Request(s.href, r), c2 = o ? await caches.open("custom:qwikcity") : null;
      if (c2) {
        const d = await c2.match(l);
        if (d)
          return d;
      }
      const h2 = await Pt2({ mode: "server", locale: void 0, url: s, request: r, env: { get(d) {
        return a[d];
      } }, getWritableStream: (d, g2, y2, w2) => {
        const { readable: A3, writable: C2 } = new TransformStream(), S3 = new Response(A3, { status: d, headers: qe3(g2, y2) });
        return w2(S3), C2;
      }, getClientConn: () => ({ ip: r.headers.get("CF-connecting-ip") || "", country: r.headers.get("CF-IPCountry") || "" }), platform: { request: r, env: a, ctx: i } }, e, t2);
      if (h2) {
        h2.completion.then((g2) => {
          g2 && console.error(g2);
        });
        const d = await h2.response;
        if (d)
          return d.ok && c2 && d.headers.has("Cache-Control") && i.waitUntil(c2.put(l, d.clone())), d;
      }
      const m2 = isStaticPath(r.method || "GET", s) ? "Not Found" : getNotFound(s.pathname);
      return new Response(m2, { status: 404, headers: { "Content-Type": "text/html; charset=utf-8", "X-Not-Found": s.pathname } });
    } catch (s) {
      return console.error(s), new Response(String(s || "Error"), { status: 500, headers: { "Content-Type": "text/plain; charset=utf-8", "X-Error": "cloudflare-pages" } });
    }
  }
  return n;
}
var Lt2 = Ot2({ render: Ze2, qwikCityPlan: Wl, manifest: We2 });
var worker_default = { fetch: Lt2 };
var drainBody = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
};
var middleware_ensure_req_body_drained_default = drainBody;
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
var jsonError = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
};
var middleware_miniflare3_json_error_default = jsonError;
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = worker_default;
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  };
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      };
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = (request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    };
    #dispatcher = (type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    };
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;

// node_modules/wrangler/templates/pages-dev-util.ts
function isRoutingRuleMatch(pathname, routingRule) {
  if (!pathname) {
    throw new Error("Pathname is undefined.");
  }
  if (!routingRule) {
    throw new Error("Routing rule is undefined.");
  }
  const ruleRegExp = transformRoutingRuleToRegExp(routingRule);
  return pathname.match(ruleRegExp) !== null;
}
function transformRoutingRuleToRegExp(rule) {
  let transformedRule;
  if (rule === "/" || rule === "/*") {
    transformedRule = rule;
  } else if (rule.endsWith("/*")) {
    transformedRule = `${rule.substring(0, rule.length - 2)}(/*)?`;
  } else if (rule.endsWith("/")) {
    transformedRule = `${rule.substring(0, rule.length - 1)}(/)?`;
  } else if (rule.endsWith("*")) {
    transformedRule = rule;
  } else {
    transformedRule = `${rule}(/)?`;
  }
  transformedRule = `^${transformedRule.replaceAll(/\./g, "\\.").replaceAll(/\*/g, ".*")}$`;
  return new RegExp(transformedRule);
}

// .wrangler/tmp/pages-Vfo6js/92lt3go0cpn.js
var define_ROUTES_default = {
  version: 1,
  include: [
    "/*"
  ],
  exclude: [
    "/build/*",
    "/assets/*"
  ]
};
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        if (middleware_loader_entry_default.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return middleware_loader_entry_default.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody2 = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
};
var middleware_ensure_req_body_drained_default2 = drainBody2;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError2(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError2(e.cause)
  };
}
var jsonError2 = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError2(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
};
var middleware_miniflare3_json_error_default2 = jsonError2;

// .wrangler/tmp/bundle-2OvXCc/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__2 = [
  middleware_ensure_req_body_drained_default2,
  middleware_miniflare3_json_error_default2
];
var middleware_insertion_facade_default2 = pages_dev_pipeline_default;

// node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__2 = [];
function __facade_register__2(...args) {
  __facade_middleware__2.push(...args.flat());
}
function __facade_invokeChain__2(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__2(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
function __facade_invoke__2(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__2(request, env, ctx, dispatch, [
    ...__facade_middleware__2,
    finalMiddleware
  ]);
}

// .wrangler/tmp/bundle-2OvXCc/middleware-loader.entry.ts
var __Facade_ScheduledController__2 = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__2)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler2(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__2 === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__2.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__2) {
    __facade_register__2(middleware);
  }
  const fetchDispatcher = function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  };
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__2(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      };
      return __facade_invoke__2(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
function wrapWorkerEntrypoint2(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__2 === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__2.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__2) {
    __facade_register__2(middleware);
  }
  return class extends klass {
    #fetchDispatcher = (request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    };
    #dispatcher = (type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__2(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    };
    fetch(request) {
      return __facade_invoke__2(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
var WRAPPED_ENTRY2;
if (typeof middleware_insertion_facade_default2 === "object") {
  WRAPPED_ENTRY2 = wrapExportedHandler2(middleware_insertion_facade_default2);
} else if (typeof middleware_insertion_facade_default2 === "function") {
  WRAPPED_ENTRY2 = wrapWorkerEntrypoint2(middleware_insertion_facade_default2);
}
var middleware_loader_entry_default2 = WRAPPED_ENTRY2;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__2 as __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default2 as default
};
/**
* @license
* @builder.io/qwik/server 1.7.1
* Copyright Builder.io, Inc. All Rights Reserved.
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/QwikDev/qwik/blob/main/LICENSE
*/
//# sourceMappingURL=92lt3go0cpn.js.map
