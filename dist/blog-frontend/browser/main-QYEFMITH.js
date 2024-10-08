import {
  $ as M,
  $a as kd,
  $b as jd,
  A as bs,
  Aa as D,
  Ab as Md,
  Ac as Ar,
  B as ge,
  Ba as Ti,
  Bb as Td,
  Bc as Mr,
  C as ht,
  Ca as L,
  Cb as vt,
  Cc as Tr,
  D as _s,
  Da as Es,
  Db as _e,
  Dc as xe,
  E as Dt,
  Ea as ud,
  Eb as Od,
  Ec as Os,
  F as qe,
  Fa as Jn,
  Fb as j,
  Fc as Xd,
  G as br,
  Ga as pd,
  Gb as Rd,
  Gc as yt,
  H as vs,
  Ha as Me,
  Hb as P,
  Hc as Zd,
  I as _t,
  Ia as At,
  Ib as Ct,
  Ic as Qd,
  J as sd,
  Ja as to,
  Jb as Y,
  Jc as Or,
  K as Yn,
  Ka as Qi,
  Kb as kr,
  Kc as Kd,
  L as Ae,
  La as Ki,
  Lb as Vt,
  Lc as Rr,
  M as Ge,
  Ma as fd,
  Mb as ft,
  N as xs,
  Na as gd,
  Nb as X,
  O as cd,
  Oa as bd,
  Ob as Z,
  Oc as Ri,
  P as ld,
  Pa as _d,
  Pb as Ke,
  Pc as Je,
  Q as _r,
  Qa as vd,
  Qb as y,
  R as ys,
  Ra as xd,
  Rb as Et,
  Rc as me,
  S as vr,
  Sa as yd,
  Sb as ie,
  Sc as Fi,
  T as te,
  Ta as qt,
  Tb as Ms,
  Tc as Fe,
  U as Ft,
  Ua as xr,
  Ub as Fd,
  Uc as Jd,
  V as tt,
  Va as wd,
  Vb as Pd,
  Vc as tm,
  W as dd,
  Wa as eo,
  Wb as Ld,
  X as lt,
  Xa as v,
  Xb as Pt,
  Y as at,
  Ya as d,
  Yb as V,
  Z as Xn,
  Za as Oi,
  Zb as Cr,
  _ as x,
  _a as Ze,
  _b as Nd,
  a as b,
  aa as md,
  ab as yr,
  ac as zd,
  b as nt,
  ba as w,
  bb as wr,
  bc as no,
  ca as ws,
  cb as io,
  cc as Er,
  d as nd,
  da as h,
  db as Te,
  dc as Sr,
  e as ps,
  ea as _,
  eb as Ss,
  ec as Ts,
  f as Lt,
  fa as Zi,
  fb as Is,
  fc as Ir,
  g as od,
  ga as Zn,
  gb as Ji,
  gc as tn,
  h as Jt,
  ha as Qn,
  hb as ut,
  hc as Dr,
  i as fs,
  ia as z,
  ib as Mt,
  ic as St,
  j as ur,
  ja as T,
  jb as Cd,
  jc as Vd,
  k as E,
  ka as F,
  kb as Ds,
  kc as Bd,
  l as Nt,
  la as Ai,
  lb as A,
  lc as it,
  m as rd,
  ma as ks,
  mb as Ed,
  mc as ve,
  n as fe,
  na as hd,
  nb as K,
  nc as en,
  o as Rt,
  oa as Mi,
  ob as C,
  oc as Oe,
  p as I,
  pa as ee,
  pb as As,
  pc as Ud,
  q as jt,
  qa as zt,
  qb as q,
  qc as Hd,
  r as pr,
  ra as st,
  rb as Qe,
  rc as nn,
  s as ad,
  sa as ct,
  sb as Sd,
  sc as $d,
  t as B,
  ta as Ye,
  tb as ot,
  tc as Wd,
  u as Xi,
  ua as Cs,
  ub as Id,
  uc as R,
  v as Wt,
  va as be,
  vb as Dd,
  vc as qd,
  w as gs,
  wa as Xe,
  wb as Ad,
  wc as oo,
  x as fr,
  xa as kt,
  xb as u,
  xc as Gd,
  y as De,
  ya as Kn,
  yb as p,
  yc as Yd,
  z as gr,
  za as et,
  zb as O,
  zc as Re,
} from "./chunk-P2OMNTNM.js";
var ao = class {},
  Pr = class {},
  pt = class n {
    constructor(t) {
      (this.normalizedNames = new Map()),
        (this.lazyUpdate = null),
        t
          ? typeof t == "string"
            ? (this.lazyInit = () => {
                (this.headers = new Map()),
                  t
                    .split(
                      `
`
                    )
                    .forEach((o) => {
                      let e = o.indexOf(":");
                      if (e > 0) {
                        let i = o.slice(0, e),
                          r = i.toLowerCase(),
                          a = o.slice(e + 1).trim();
                        this.maybeSetNormalizedName(i, r),
                          this.headers.has(r)
                            ? this.headers.get(r).push(a)
                            : this.headers.set(r, [a]);
                      }
                    });
              })
            : typeof Headers < "u" && t instanceof Headers
            ? ((this.headers = new Map()),
              t.forEach((o, e) => {
                this.setHeaderEntries(e, o);
              }))
            : (this.lazyInit = () => {
                (this.headers = new Map()),
                  Object.entries(t).forEach(([o, e]) => {
                    this.setHeaderEntries(o, e);
                  });
              })
          : (this.headers = new Map());
    }
    has(t) {
      return this.init(), this.headers.has(t.toLowerCase());
    }
    get(t) {
      this.init();
      let o = this.headers.get(t.toLowerCase());
      return o && o.length > 0 ? o[0] : null;
    }
    keys() {
      return this.init(), Array.from(this.normalizedNames.values());
    }
    getAll(t) {
      return this.init(), this.headers.get(t.toLowerCase()) || null;
    }
    append(t, o) {
      return this.clone({ name: t, value: o, op: "a" });
    }
    set(t, o) {
      return this.clone({ name: t, value: o, op: "s" });
    }
    delete(t, o) {
      return this.clone({ name: t, value: o, op: "d" });
    }
    maybeSetNormalizedName(t, o) {
      this.normalizedNames.has(o) || this.normalizedNames.set(o, t);
    }
    init() {
      this.lazyInit &&
        (this.lazyInit instanceof n
          ? this.copyFrom(this.lazyInit)
          : this.lazyInit(),
        (this.lazyInit = null),
        this.lazyUpdate &&
          (this.lazyUpdate.forEach((t) => this.applyUpdate(t)),
          (this.lazyUpdate = null)));
    }
    copyFrom(t) {
      t.init(),
        Array.from(t.headers.keys()).forEach((o) => {
          this.headers.set(o, t.headers.get(o)),
            this.normalizedNames.set(o, t.normalizedNames.get(o));
        });
    }
    clone(t) {
      let o = new n();
      return (
        (o.lazyInit =
          this.lazyInit && this.lazyInit instanceof n ? this.lazyInit : this),
        (o.lazyUpdate = (this.lazyUpdate || []).concat([t])),
        o
      );
    }
    applyUpdate(t) {
      let o = t.name.toLowerCase();
      switch (t.op) {
        case "a":
        case "s":
          let e = t.value;
          if ((typeof e == "string" && (e = [e]), e.length === 0)) return;
          this.maybeSetNormalizedName(t.name, o);
          let i = (t.op === "a" ? this.headers.get(o) : void 0) || [];
          i.push(...e), this.headers.set(o, i);
          break;
        case "d":
          let r = t.value;
          if (!r) this.headers.delete(o), this.normalizedNames.delete(o);
          else {
            let a = this.headers.get(o);
            if (!a) return;
            (a = a.filter((s) => r.indexOf(s) === -1)),
              a.length === 0
                ? (this.headers.delete(o), this.normalizedNames.delete(o))
                : this.headers.set(o, a);
          }
          break;
      }
    }
    setHeaderEntries(t, o) {
      let e = (Array.isArray(o) ? o : [o]).map((r) => r.toString()),
        i = t.toLowerCase();
      this.headers.set(i, e), this.maybeSetNormalizedName(t, i);
    }
    forEach(t) {
      this.init(),
        Array.from(this.normalizedNames.keys()).forEach((o) =>
          t(this.normalizedNames.get(o), this.headers.get(o))
        );
    }
  };
var Fs = class {
  encodeKey(t) {
    return em(t);
  }
  encodeValue(t) {
    return em(t);
  }
  decodeKey(t) {
    return decodeURIComponent(t);
  }
  decodeValue(t) {
    return decodeURIComponent(t);
  }
};
function jf(n, t) {
  let o = new Map();
  return (
    n.length > 0 &&
      n
        .replace(/^\?/, "")
        .split("&")
        .forEach((i) => {
          let r = i.indexOf("="),
            [a, s] =
              r == -1
                ? [t.decodeKey(i), ""]
                : [t.decodeKey(i.slice(0, r)), t.decodeValue(i.slice(r + 1))],
            c = o.get(a) || [];
          c.push(s), o.set(a, c);
        }),
    o
  );
}
var zf = /%(\d[a-f0-9])/gi,
  Vf = {
    40: "@",
    "3A": ":",
    24: "$",
    "2C": ",",
    "3B": ";",
    "3D": "=",
    "3F": "?",
    "2F": "/",
  };
function em(n) {
  return encodeURIComponent(n).replace(zf, (t, o) => Vf[o] ?? t);
}
function Fr(n) {
  return `${n}`;
}
var ei = class n {
  constructor(t = {}) {
    if (
      ((this.updates = null),
      (this.cloneFrom = null),
      (this.encoder = t.encoder || new Fs()),
      t.fromString)
    ) {
      if (t.fromObject)
        throw new Error("Cannot specify both fromString and fromObject.");
      this.map = jf(t.fromString, this.encoder);
    } else
      t.fromObject
        ? ((this.map = new Map()),
          Object.keys(t.fromObject).forEach((o) => {
            let e = t.fromObject[o],
              i = Array.isArray(e) ? e.map(Fr) : [Fr(e)];
            this.map.set(o, i);
          }))
        : (this.map = null);
  }
  has(t) {
    return this.init(), this.map.has(t);
  }
  get(t) {
    this.init();
    let o = this.map.get(t);
    return o ? o[0] : null;
  }
  getAll(t) {
    return this.init(), this.map.get(t) || null;
  }
  keys() {
    return this.init(), Array.from(this.map.keys());
  }
  append(t, o) {
    return this.clone({ param: t, value: o, op: "a" });
  }
  appendAll(t) {
    let o = [];
    return (
      Object.keys(t).forEach((e) => {
        let i = t[e];
        Array.isArray(i)
          ? i.forEach((r) => {
              o.push({ param: e, value: r, op: "a" });
            })
          : o.push({ param: e, value: i, op: "a" });
      }),
      this.clone(o)
    );
  }
  set(t, o) {
    return this.clone({ param: t, value: o, op: "s" });
  }
  delete(t, o) {
    return this.clone({ param: t, value: o, op: "d" });
  }
  toString() {
    return (
      this.init(),
      this.keys()
        .map((t) => {
          let o = this.encoder.encodeKey(t);
          return this.map
            .get(t)
            .map((e) => o + "=" + this.encoder.encodeValue(e))
            .join("&");
        })
        .filter((t) => t !== "")
        .join("&")
    );
  }
  clone(t) {
    let o = new n({ encoder: this.encoder });
    return (
      (o.cloneFrom = this.cloneFrom || this),
      (o.updates = (this.updates || []).concat(t)),
      o
    );
  }
  init() {
    this.map === null && (this.map = new Map()),
      this.cloneFrom !== null &&
        (this.cloneFrom.init(),
        this.cloneFrom
          .keys()
          .forEach((t) => this.map.set(t, this.cloneFrom.map.get(t))),
        this.updates.forEach((t) => {
          switch (t.op) {
            case "a":
            case "s":
              let o = (t.op === "a" ? this.map.get(t.param) : void 0) || [];
              o.push(Fr(t.value)), this.map.set(t.param, o);
              break;
            case "d":
              if (t.value !== void 0) {
                let e = this.map.get(t.param) || [],
                  i = e.indexOf(Fr(t.value));
                i !== -1 && e.splice(i, 1),
                  e.length > 0
                    ? this.map.set(t.param, e)
                    : this.map.delete(t.param);
              } else {
                this.map.delete(t.param);
                break;
              }
          }
        }),
        (this.cloneFrom = this.updates = null));
  }
};
var Ps = class {
  constructor() {
    this.map = new Map();
  }
  set(t, o) {
    return this.map.set(t, o), this;
  }
  get(t) {
    return (
      this.map.has(t) || this.map.set(t, t.defaultValue()), this.map.get(t)
    );
  }
  delete(t) {
    return this.map.delete(t), this;
  }
  has(t) {
    return this.map.has(t);
  }
  keys() {
    return this.map.keys();
  }
};
function Bf(n) {
  switch (n) {
    case "DELETE":
    case "GET":
    case "HEAD":
    case "OPTIONS":
    case "JSONP":
      return !1;
    default:
      return !0;
  }
}
function im(n) {
  return typeof ArrayBuffer < "u" && n instanceof ArrayBuffer;
}
function nm(n) {
  return typeof Blob < "u" && n instanceof Blob;
}
function om(n) {
  return typeof FormData < "u" && n instanceof FormData;
}
function Uf(n) {
  return typeof URLSearchParams < "u" && n instanceof URLSearchParams;
}
var ro = class n {
    constructor(t, o, e, i) {
      (this.url = o),
        (this.body = null),
        (this.reportProgress = !1),
        (this.withCredentials = !1),
        (this.responseType = "json"),
        (this.method = t.toUpperCase());
      let r;
      if (
        (Bf(this.method) || i
          ? ((this.body = e !== void 0 ? e : null), (r = i))
          : (r = e),
        r &&
          ((this.reportProgress = !!r.reportProgress),
          (this.withCredentials = !!r.withCredentials),
          r.responseType && (this.responseType = r.responseType),
          r.headers && (this.headers = r.headers),
          r.context && (this.context = r.context),
          r.params && (this.params = r.params),
          (this.transferCache = r.transferCache)),
        (this.headers ??= new pt()),
        (this.context ??= new Ps()),
        !this.params)
      )
        (this.params = new ei()), (this.urlWithParams = o);
      else {
        let a = this.params.toString();
        if (a.length === 0) this.urlWithParams = o;
        else {
          let s = o.indexOf("?"),
            c = s === -1 ? "?" : s < o.length - 1 ? "&" : "";
          this.urlWithParams = o + c + a;
        }
      }
    }
    serializeBody() {
      return this.body === null
        ? null
        : typeof this.body == "string" ||
          im(this.body) ||
          nm(this.body) ||
          om(this.body) ||
          Uf(this.body)
        ? this.body
        : this.body instanceof ei
        ? this.body.toString()
        : typeof this.body == "object" ||
          typeof this.body == "boolean" ||
          Array.isArray(this.body)
        ? JSON.stringify(this.body)
        : this.body.toString();
    }
    detectContentTypeHeader() {
      return this.body === null || om(this.body)
        ? null
        : nm(this.body)
        ? this.body.type || null
        : im(this.body)
        ? null
        : typeof this.body == "string"
        ? "text/plain"
        : this.body instanceof ei
        ? "application/x-www-form-urlencoded;charset=UTF-8"
        : typeof this.body == "object" ||
          typeof this.body == "number" ||
          typeof this.body == "boolean"
        ? "application/json"
        : null;
    }
    clone(t = {}) {
      let o = t.method || this.method,
        e = t.url || this.url,
        i = t.responseType || this.responseType,
        r = t.transferCache ?? this.transferCache,
        a = t.body !== void 0 ? t.body : this.body,
        s = t.withCredentials ?? this.withCredentials,
        c = t.reportProgress ?? this.reportProgress,
        l = t.headers || this.headers,
        m = t.params || this.params,
        f = t.context ?? this.context;
      return (
        t.setHeaders !== void 0 &&
          (l = Object.keys(t.setHeaders).reduce(
            (g, k) => g.set(k, t.setHeaders[k]),
            l
          )),
        t.setParams &&
          (m = Object.keys(t.setParams).reduce(
            (g, k) => g.set(k, t.setParams[k]),
            m
          )),
        new n(o, e, a, {
          params: m,
          headers: l,
          context: f,
          reportProgress: c,
          responseType: i,
          withCredentials: s,
          transferCache: r,
        })
      );
    }
  },
  ii = (function (n) {
    return (
      (n[(n.Sent = 0)] = "Sent"),
      (n[(n.UploadProgress = 1)] = "UploadProgress"),
      (n[(n.ResponseHeader = 2)] = "ResponseHeader"),
      (n[(n.DownloadProgress = 3)] = "DownloadProgress"),
      (n[(n.Response = 4)] = "Response"),
      (n[(n.User = 5)] = "User"),
      n
    );
  })(ii || {}),
  so = class {
    constructor(t, o = 200, e = "OK") {
      (this.headers = t.headers || new pt()),
        (this.status = t.status !== void 0 ? t.status : o),
        (this.statusText = t.statusText || e),
        (this.url = t.url || null),
        (this.ok = this.status >= 200 && this.status < 300);
    }
  },
  Lr = class n extends so {
    constructor(t = {}) {
      super(t), (this.type = ii.ResponseHeader);
    }
    clone(t = {}) {
      return new n({
        headers: t.headers || this.headers,
        status: t.status !== void 0 ? t.status : this.status,
        statusText: t.statusText || this.statusText,
        url: t.url || this.url || void 0,
      });
    }
  },
  co = class n extends so {
    constructor(t = {}) {
      super(t),
        (this.type = ii.Response),
        (this.body = t.body !== void 0 ? t.body : null);
    }
    clone(t = {}) {
      return new n({
        body: t.body !== void 0 ? t.body : this.body,
        headers: t.headers || this.headers,
        status: t.status !== void 0 ? t.status : this.status,
        statusText: t.statusText || this.statusText,
        url: t.url || this.url || void 0,
      });
    }
  },
  ti = class extends so {
    constructor(t) {
      super(t, 0, "Unknown Error"),
        (this.name = "HttpErrorResponse"),
        (this.ok = !1),
        this.status >= 200 && this.status < 300
          ? (this.message = `Http failure during parsing for ${
              t.url || "(unknown url)"
            }`)
          : (this.message = `Http failure response for ${
              t.url || "(unknown url)"
            }: ${t.status} ${t.statusText}`),
        (this.error = t.error || null);
    }
  },
  lm = 200,
  Hf = 204;
function Rs(n, t) {
  return {
    body: t,
    headers: n.headers,
    context: n.context,
    observe: n.observe,
    params: n.params,
    reportProgress: n.reportProgress,
    responseType: n.responseType,
    withCredentials: n.withCredentials,
    transferCache: n.transferCache,
  };
}
var Gt = (() => {
    let t = class t {
      constructor(e) {
        this.handler = e;
      }
      request(e, i, r = {}) {
        let a;
        if (e instanceof ro) a = e;
        else {
          let l;
          r.headers instanceof pt ? (l = r.headers) : (l = new pt(r.headers));
          let m;
          r.params &&
            (r.params instanceof ei
              ? (m = r.params)
              : (m = new ei({ fromObject: r.params }))),
            (a = new ro(e, i, r.body !== void 0 ? r.body : null, {
              headers: l,
              context: r.context,
              params: m,
              reportProgress: r.reportProgress,
              responseType: r.responseType || "json",
              withCredentials: r.withCredentials,
              transferCache: r.transferCache,
            }));
        }
        let s = I(a).pipe(qe((l) => this.handler.handle(l)));
        if (e instanceof ro || r.observe === "events") return s;
        let c = s.pipe(ht((l) => l instanceof co));
        switch (r.observe || "body") {
          case "body":
            switch (a.responseType) {
              case "arraybuffer":
                return c.pipe(
                  B((l) => {
                    if (l.body !== null && !(l.body instanceof ArrayBuffer))
                      throw new Error("Response is not an ArrayBuffer.");
                    return l.body;
                  })
                );
              case "blob":
                return c.pipe(
                  B((l) => {
                    if (l.body !== null && !(l.body instanceof Blob))
                      throw new Error("Response is not a Blob.");
                    return l.body;
                  })
                );
              case "text":
                return c.pipe(
                  B((l) => {
                    if (l.body !== null && typeof l.body != "string")
                      throw new Error("Response is not a string.");
                    return l.body;
                  })
                );
              case "json":
              default:
                return c.pipe(B((l) => l.body));
            }
          case "response":
            return c;
          default:
            throw new Error(
              `Unreachable: unhandled observe type ${r.observe}}`
            );
        }
      }
      delete(e, i = {}) {
        return this.request("DELETE", e, i);
      }
      get(e, i = {}) {
        return this.request("GET", e, i);
      }
      head(e, i = {}) {
        return this.request("HEAD", e, i);
      }
      jsonp(e, i) {
        return this.request("JSONP", e, {
          params: new ei().append(i, "JSONP_CALLBACK"),
          observe: "body",
          responseType: "json",
        });
      }
      options(e, i = {}) {
        return this.request("OPTIONS", e, i);
      }
      patch(e, i, r = {}) {
        return this.request("PATCH", e, Rs(r, i));
      }
      post(e, i, r = {}) {
        return this.request("POST", e, Rs(r, i));
      }
      put(e, i, r = {}) {
        return this.request("PUT", e, Rs(r, i));
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(h(ao));
    }),
      (t.ɵprov = x({ token: t, factory: t.ɵfac }));
    let n = t;
    return n;
  })(),
  $f = /^\)\]\}',?\n/,
  Wf = "X-Request-URL";
function rm(n) {
  if (n.url) return n.url;
  let t = Wf.toLocaleLowerCase();
  return n.headers.get(t);
}
var qf = (() => {
    let t = class t {
      constructor() {
        (this.fetchImpl =
          _(Ls, { optional: !0 })?.fetch ?? ((...e) => globalThis.fetch(...e))),
          (this.ngZone = _(D));
      }
      handle(e) {
        return new Jt((i) => {
          let r = new AbortController();
          return (
            this.doRequest(e, r.signal, i).then(Ns, (a) =>
              i.error(new ti({ error: a }))
            ),
            () => r.abort()
          );
        });
      }
      doRequest(e, i, r) {
        return ps(this, null, function* () {
          let a = this.createRequestInit(e),
            s;
          try {
            let S = this.ngZone.runOutsideAngular(() =>
              this.fetchImpl(e.urlWithParams, b({ signal: i }, a))
            );
            Gf(S), r.next({ type: ii.Sent }), (s = yield S);
          } catch (S) {
            r.error(
              new ti({
                error: S,
                status: S.status ?? 0,
                statusText: S.statusText,
                url: e.urlWithParams,
                headers: S.headers,
              })
            );
            return;
          }
          let c = new pt(s.headers),
            l = s.statusText,
            m = rm(s) ?? e.urlWithParams,
            f = s.status,
            g = null;
          if (
            (e.reportProgress &&
              r.next(new Lr({ headers: c, status: f, statusText: l, url: m })),
            s.body)
          ) {
            let S = s.headers.get("content-length"),
              $ = [],
              N = s.body.getReader(),
              U = 0,
              It,
              de,
              Ot = typeof Zone < "u" && Zone.current;
            yield this.ngZone.runOutsideAngular(() =>
              ps(this, null, function* () {
                for (;;) {
                  let { done: Di, value: Gn } = yield N.read();
                  if (Di) break;
                  if (($.push(Gn), (U += Gn.length), e.reportProgress)) {
                    de =
                      e.responseType === "text"
                        ? (de ?? "") +
                          (It ??= new TextDecoder()).decode(Gn, { stream: !0 })
                        : void 0;
                    let id = () =>
                      r.next({
                        type: ii.DownloadProgress,
                        total: S ? +S : void 0,
                        loaded: U,
                        partialText: de,
                      });
                    Ot ? Ot.run(id) : id();
                  }
                }
              })
            );
            let qn = this.concatChunks($, U);
            try {
              let Di = s.headers.get("Content-Type") ?? "";
              g = this.parseBody(e, qn, Di);
            } catch (Di) {
              r.error(
                new ti({
                  error: Di,
                  headers: new pt(s.headers),
                  status: s.status,
                  statusText: s.statusText,
                  url: rm(s) ?? e.urlWithParams,
                })
              );
              return;
            }
          }
          f === 0 && (f = g ? lm : 0),
            f >= 200 && f < 300
              ? (r.next(
                  new co({
                    body: g,
                    headers: c,
                    status: f,
                    statusText: l,
                    url: m,
                  })
                ),
                r.complete())
              : r.error(
                  new ti({
                    error: g,
                    headers: c,
                    status: f,
                    statusText: l,
                    url: m,
                  })
                );
        });
      }
      parseBody(e, i, r) {
        switch (e.responseType) {
          case "json":
            let a = new TextDecoder().decode(i).replace($f, "");
            return a === "" ? null : JSON.parse(a);
          case "text":
            return new TextDecoder().decode(i);
          case "blob":
            return new Blob([i], { type: r });
          case "arraybuffer":
            return i.buffer;
        }
      }
      createRequestInit(e) {
        let i = {},
          r = e.withCredentials ? "include" : void 0;
        if (
          (e.headers.forEach((a, s) => (i[a] = s.join(","))),
          e.headers.has("Accept") ||
            (i.Accept = "application/json, text/plain, */*"),
          !e.headers.has("Content-Type"))
        ) {
          let a = e.detectContentTypeHeader();
          a !== null && (i["Content-Type"] = a);
        }
        return {
          body: e.serializeBody(),
          method: e.method,
          headers: i,
          credentials: r,
        };
      }
      concatChunks(e, i) {
        let r = new Uint8Array(i),
          a = 0;
        for (let s of e) r.set(s, a), (a += s.length);
        return r;
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵprov = x({ token: t, factory: t.ɵfac }));
    let n = t;
    return n;
  })(),
  Ls = class {};
function Ns() {}
function Gf(n) {
  n.then(Ns, Ns);
}
function dm(n, t) {
  return t(n);
}
function Yf(n, t) {
  return (o, e) => t.intercept(o, { handle: (i) => n(i, e) });
}
function Xf(n, t, o) {
  return (e, i) => ee(o, () => t(e, (r) => n(r, i)));
}
var Zf = new w(""),
  jr = new w(""),
  Qf = new w(""),
  mm = new w("", { providedIn: "root", factory: () => !0 });
function Kf() {
  let n = null;
  return (t, o) => {
    n === null && (n = (_(Zf, { optional: !0 }) ?? []).reduceRight(Yf, dm));
    let e = _(Kn);
    if (_(mm)) {
      let r = e.add();
      return n(t, o).pipe(Ae(() => e.remove(r)));
    } else return n(t, o);
  };
}
var am = (() => {
  let t = class t extends ao {
    constructor(e, i) {
      super(),
        (this.backend = e),
        (this.injector = i),
        (this.chain = null),
        (this.pendingTasks = _(Kn)),
        (this.contributeToStability = _(mm));
    }
    handle(e) {
      if (this.chain === null) {
        let i = Array.from(
          new Set([...this.injector.get(jr), ...this.injector.get(Qf, [])])
        );
        this.chain = i.reduceRight((r, a) => Xf(r, a, this.injector), dm);
      }
      if (this.contributeToStability) {
        let i = this.pendingTasks.add();
        return this.chain(e, (r) => this.backend.handle(r)).pipe(
          Ae(() => this.pendingTasks.remove(i))
        );
      } else return this.chain(e, (i) => this.backend.handle(i));
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(h(Pr), h(Mi));
  }),
    (t.ɵprov = x({ token: t, factory: t.ɵfac }));
  let n = t;
  return n;
})();
var Jf = /^\)\]\}',?\n/;
function tg(n) {
  return "responseURL" in n && n.responseURL
    ? n.responseURL
    : /^X-Request-URL:/m.test(n.getAllResponseHeaders())
    ? n.getResponseHeader("X-Request-URL")
    : null;
}
var sm = (() => {
    let t = class t {
      constructor(e) {
        this.xhrFactory = e;
      }
      handle(e) {
        if (e.method === "JSONP") throw new at(-2800, !1);
        let i = this.xhrFactory;
        return (i.ɵloadImpl ? Rt(i.ɵloadImpl()) : I(null)).pipe(
          Ft(
            () =>
              new Jt((a) => {
                let s = i.build();
                if (
                  (s.open(e.method, e.urlWithParams),
                  e.withCredentials && (s.withCredentials = !0),
                  e.headers.forEach((N, U) =>
                    s.setRequestHeader(N, U.join(","))
                  ),
                  e.headers.has("Accept") ||
                    s.setRequestHeader(
                      "Accept",
                      "application/json, text/plain, */*"
                    ),
                  !e.headers.has("Content-Type"))
                ) {
                  let N = e.detectContentTypeHeader();
                  N !== null && s.setRequestHeader("Content-Type", N);
                }
                if (e.responseType) {
                  let N = e.responseType.toLowerCase();
                  s.responseType = N !== "json" ? N : "text";
                }
                let c = e.serializeBody(),
                  l = null,
                  m = () => {
                    if (l !== null) return l;
                    let N = s.statusText || "OK",
                      U = new pt(s.getAllResponseHeaders()),
                      It = tg(s) || e.url;
                    return (
                      (l = new Lr({
                        headers: U,
                        status: s.status,
                        statusText: N,
                        url: It,
                      })),
                      l
                    );
                  },
                  f = () => {
                    let {
                        headers: N,
                        status: U,
                        statusText: It,
                        url: de,
                      } = m(),
                      Ot = null;
                    U !== Hf &&
                      (Ot =
                        typeof s.response > "u" ? s.responseText : s.response),
                      U === 0 && (U = Ot ? lm : 0);
                    let qn = U >= 200 && U < 300;
                    if (e.responseType === "json" && typeof Ot == "string") {
                      let Di = Ot;
                      Ot = Ot.replace(Jf, "");
                      try {
                        Ot = Ot !== "" ? JSON.parse(Ot) : null;
                      } catch (Gn) {
                        (Ot = Di),
                          qn && ((qn = !1), (Ot = { error: Gn, text: Ot }));
                      }
                    }
                    qn
                      ? (a.next(
                          new co({
                            body: Ot,
                            headers: N,
                            status: U,
                            statusText: It,
                            url: de || void 0,
                          })
                        ),
                        a.complete())
                      : a.error(
                          new ti({
                            error: Ot,
                            headers: N,
                            status: U,
                            statusText: It,
                            url: de || void 0,
                          })
                        );
                  },
                  g = (N) => {
                    let { url: U } = m(),
                      It = new ti({
                        error: N,
                        status: s.status || 0,
                        statusText: s.statusText || "Unknown Error",
                        url: U || void 0,
                      });
                    a.error(It);
                  },
                  k = !1,
                  S = (N) => {
                    k || (a.next(m()), (k = !0));
                    let U = { type: ii.DownloadProgress, loaded: N.loaded };
                    N.lengthComputable && (U.total = N.total),
                      e.responseType === "text" &&
                        s.responseText &&
                        (U.partialText = s.responseText),
                      a.next(U);
                  },
                  $ = (N) => {
                    let U = { type: ii.UploadProgress, loaded: N.loaded };
                    N.lengthComputable && (U.total = N.total), a.next(U);
                  };
                return (
                  s.addEventListener("load", f),
                  s.addEventListener("error", g),
                  s.addEventListener("timeout", g),
                  s.addEventListener("abort", g),
                  e.reportProgress &&
                    (s.addEventListener("progress", S),
                    c !== null &&
                      s.upload &&
                      s.upload.addEventListener("progress", $)),
                  s.send(c),
                  a.next({ type: ii.Sent }),
                  () => {
                    s.removeEventListener("error", g),
                      s.removeEventListener("abort", g),
                      s.removeEventListener("load", f),
                      s.removeEventListener("timeout", g),
                      e.reportProgress &&
                        (s.removeEventListener("progress", S),
                        c !== null &&
                          s.upload &&
                          s.upload.removeEventListener("progress", $)),
                      s.readyState !== s.DONE && s.abort();
                  }
                );
              })
          )
        );
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(h(Rr));
    }),
      (t.ɵprov = x({ token: t, factory: t.ɵfac }));
    let n = t;
    return n;
  })(),
  hm = new w(""),
  eg = "XSRF-TOKEN",
  ig = new w("", { providedIn: "root", factory: () => eg }),
  ng = "X-XSRF-TOKEN",
  og = new w("", { providedIn: "root", factory: () => ng }),
  Nr = class {},
  rg = (() => {
    let t = class t {
      constructor(e, i, r) {
        (this.doc = e),
          (this.platform = i),
          (this.cookieName = r),
          (this.lastCookieString = ""),
          (this.lastToken = null),
          (this.parseCount = 0);
      }
      getToken() {
        if (this.platform === "server") return null;
        let e = this.doc.cookie || "";
        return (
          e !== this.lastCookieString &&
            (this.parseCount++,
            (this.lastToken = Ar(e, this.cookieName)),
            (this.lastCookieString = e)),
          this.lastToken
        );
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(h(R), h(Me), h(ig));
    }),
      (t.ɵprov = x({ token: t, factory: t.ɵfac }));
    let n = t;
    return n;
  })();
function ag(n, t) {
  let o = n.url.toLowerCase();
  if (
    !_(hm) ||
    n.method === "GET" ||
    n.method === "HEAD" ||
    o.startsWith("http://") ||
    o.startsWith("https://")
  )
    return t(n);
  let e = _(Nr).getToken(),
    i = _(og);
  return (
    e != null &&
      !n.headers.has(i) &&
      (n = n.clone({ headers: n.headers.set(i, e) })),
    t(n)
  );
}
var js = (function (n) {
  return (
    (n[(n.Interceptors = 0)] = "Interceptors"),
    (n[(n.LegacyInterceptors = 1)] = "LegacyInterceptors"),
    (n[(n.CustomXsrfConfiguration = 2)] = "CustomXsrfConfiguration"),
    (n[(n.NoXsrfProtection = 3)] = "NoXsrfProtection"),
    (n[(n.JsonpSupport = 4)] = "JsonpSupport"),
    (n[(n.RequestsMadeViaParent = 5)] = "RequestsMadeViaParent"),
    (n[(n.Fetch = 6)] = "Fetch"),
    n
  );
})(js || {});
function um(n, t) {
  return { ɵkind: n, ɵproviders: t };
}
function zs(...n) {
  let t = [
    Gt,
    sm,
    am,
    { provide: ao, useExisting: am },
    { provide: Pr, useFactory: () => _(qf, { optional: !0 }) ?? _(sm) },
    { provide: jr, useValue: ag, multi: !0 },
    { provide: hm, useValue: !0 },
    { provide: Nr, useClass: rg },
  ];
  for (let o of n) t.push(...o.ɵproviders);
  return Ai(t);
}
function pm(n) {
  return um(
    js.Interceptors,
    n.map((t) => ({ provide: jr, useValue: t, multi: !0 }))
  );
}
var cm = new w("");
function sg() {
  return um(js.LegacyInterceptors, [
    { provide: cm, useFactory: Kf },
    { provide: jr, useExisting: cm, multi: !0 },
  ]);
}
var fm = (() => {
  let t = class t {};
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵmod = T({ type: t })),
    (t.ɵinj = M({ providers: [zs(sg())] }));
  let n = t;
  return n;
})();
var Us = class extends Wd {
    constructor() {
      super(...arguments), (this.supportsDOMEvents = !0);
    }
  },
  Hs = class n extends Us {
    static makeCurrent() {
      $d(new n());
    }
    onAndCancel(t, o, e) {
      return (
        t.addEventListener(o, e),
        () => {
          t.removeEventListener(o, e);
        }
      );
    }
    dispatchEvent(t, o) {
      t.dispatchEvent(o);
    }
    remove(t) {
      t.remove();
    }
    createElement(t, o) {
      return (o = o || this.getDefaultDocument()), o.createElement(t);
    }
    createHtmlDocument() {
      return document.implementation.createHTMLDocument("fakeTitle");
    }
    getDefaultDocument() {
      return document;
    }
    isElementNode(t) {
      return t.nodeType === Node.ELEMENT_NODE;
    }
    isShadowRoot(t) {
      return t instanceof DocumentFragment;
    }
    getGlobalEventTarget(t, o) {
      return o === "window"
        ? window
        : o === "document"
        ? t
        : o === "body"
        ? t.body
        : null;
    }
    getBaseHref(t) {
      let o = lg();
      return o == null ? null : dg(o);
    }
    resetBaseElement() {
      lo = null;
    }
    getUserAgent() {
      return window.navigator.userAgent;
    }
    getCookie(t) {
      return Ar(document.cookie, t);
    }
  },
  lo = null;
function lg() {
  return (
    (lo = lo || document.querySelector("base")),
    lo ? lo.getAttribute("href") : null
  );
}
function dg(n) {
  return new URL(n, document.baseURI).pathname;
}
var mg = (() => {
    let t = class t {
      build() {
        return new XMLHttpRequest();
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵprov = x({ token: t, factory: t.ɵfac }));
    let n = t;
    return n;
  })(),
  zr = new w(""),
  _m = (() => {
    let t = class t {
      constructor(e, i) {
        (this._zone = i),
          (this._eventNameToPlugin = new Map()),
          e.forEach((r) => {
            r.manager = this;
          }),
          (this._plugins = e.slice().reverse());
      }
      addEventListener(e, i, r) {
        return this._findPluginFor(i).addEventListener(e, i, r);
      }
      getZone() {
        return this._zone;
      }
      _findPluginFor(e) {
        let i = this._eventNameToPlugin.get(e);
        if (i) return i;
        if (((i = this._plugins.find((a) => a.supports(e))), !i))
          throw new at(5101, !1);
        return this._eventNameToPlugin.set(e, i), i;
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(h(zr), h(D));
    }),
      (t.ɵprov = x({ token: t, factory: t.ɵfac }));
    let n = t;
    return n;
  })(),
  mo = class {
    constructor(t) {
      this._doc = t;
    }
  },
  Vs = "ng-app-id",
  vm = (() => {
    let t = class t {
      constructor(e, i, r, a = {}) {
        (this.doc = e),
          (this.appId = i),
          (this.nonce = r),
          (this.platformId = a),
          (this.styleRef = new Map()),
          (this.hostNodes = new Set()),
          (this.styleNodesInDOM = this.collectServerRenderedStyles()),
          (this.platformIsServer = Or(a)),
          this.resetHostNodes();
      }
      addStyles(e) {
        for (let i of e)
          this.changeUsageCount(i, 1) === 1 && this.onStyleAdded(i);
      }
      removeStyles(e) {
        for (let i of e)
          this.changeUsageCount(i, -1) <= 0 && this.onStyleRemoved(i);
      }
      ngOnDestroy() {
        let e = this.styleNodesInDOM;
        e && (e.forEach((i) => i.remove()), e.clear());
        for (let i of this.getAllStyles()) this.onStyleRemoved(i);
        this.resetHostNodes();
      }
      addHost(e) {
        this.hostNodes.add(e);
        for (let i of this.getAllStyles()) this.addStyleToHost(e, i);
      }
      removeHost(e) {
        this.hostNodes.delete(e);
      }
      getAllStyles() {
        return this.styleRef.keys();
      }
      onStyleAdded(e) {
        for (let i of this.hostNodes) this.addStyleToHost(i, e);
      }
      onStyleRemoved(e) {
        let i = this.styleRef;
        i.get(e)?.elements?.forEach((r) => r.remove()), i.delete(e);
      }
      collectServerRenderedStyles() {
        let e = this.doc.head?.querySelectorAll(`style[${Vs}="${this.appId}"]`);
        if (e?.length) {
          let i = new Map();
          return (
            e.forEach((r) => {
              r.textContent != null && i.set(r.textContent, r);
            }),
            i
          );
        }
        return null;
      }
      changeUsageCount(e, i) {
        let r = this.styleRef;
        if (r.has(e)) {
          let a = r.get(e);
          return (a.usage += i), a.usage;
        }
        return r.set(e, { usage: i, elements: [] }), i;
      }
      getStyleElement(e, i) {
        let r = this.styleNodesInDOM,
          a = r?.get(i);
        if (a?.parentNode === e) return r.delete(i), a.removeAttribute(Vs), a;
        {
          let s = this.doc.createElement("style");
          return (
            this.nonce && s.setAttribute("nonce", this.nonce),
            (s.textContent = i),
            this.platformIsServer && s.setAttribute(Vs, this.appId),
            e.appendChild(s),
            s
          );
        }
      }
      addStyleToHost(e, i) {
        let r = this.getStyleElement(e, i),
          a = this.styleRef,
          s = a.get(i)?.elements;
        s ? s.push(r) : a.set(i, { elements: [r], usage: 1 });
      }
      resetHostNodes() {
        let e = this.hostNodes;
        e.clear(), e.add(this.doc.head);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(h(R), h(Jn), h(to, 8), h(Me));
    }),
      (t.ɵprov = x({ token: t, factory: t.ɵfac }));
    let n = t;
    return n;
  })(),
  Bs = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/",
    math: "http://www.w3.org/1998/Math/MathML",
  },
  qs = /%COMP%/g,
  xm = "%COMP%",
  hg = `_nghost-${xm}`,
  ug = `_ngcontent-${xm}`,
  pg = !0,
  fg = new w("", { providedIn: "root", factory: () => pg });
function gg(n) {
  return ug.replace(qs, n);
}
function bg(n) {
  return hg.replace(qs, n);
}
function ym(n, t) {
  return t.map((o) => o.replace(qs, n));
}
var Vr = (() => {
    let t = class t {
      constructor(e, i, r, a, s, c, l, m = null) {
        (this.eventManager = e),
          (this.sharedStylesHost = i),
          (this.appId = r),
          (this.removeStylesOnCompDestroy = a),
          (this.doc = s),
          (this.platformId = c),
          (this.ngZone = l),
          (this.nonce = m),
          (this.rendererByCompId = new Map()),
          (this.platformIsServer = Or(c)),
          (this.defaultRenderer = new ho(e, s, l, this.platformIsServer));
      }
      createRenderer(e, i) {
        if (!e || !i) return this.defaultRenderer;
        this.platformIsServer &&
          i.encapsulation === Qn.ShadowDom &&
          (i = nt(b({}, i), { encapsulation: Qn.Emulated }));
        let r = this.getOrCreateRenderer(e, i);
        return (
          r instanceof Br
            ? r.applyToHost(e)
            : r instanceof uo && r.applyStyles(),
          r
        );
      }
      getOrCreateRenderer(e, i) {
        let r = this.rendererByCompId,
          a = r.get(i.id);
        if (!a) {
          let s = this.doc,
            c = this.ngZone,
            l = this.eventManager,
            m = this.sharedStylesHost,
            f = this.removeStylesOnCompDestroy,
            g = this.platformIsServer;
          switch (i.encapsulation) {
            case Qn.Emulated:
              a = new Br(l, m, i, this.appId, f, s, c, g);
              break;
            case Qn.ShadowDom:
              return new $s(l, m, e, i, s, c, this.nonce, g);
            default:
              a = new uo(l, m, i, f, s, c, g);
              break;
          }
          r.set(i.id, a);
        }
        return a;
      }
      ngOnDestroy() {
        this.rendererByCompId.clear();
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(h(_m), h(vm), h(Jn), h(fg), h(R), h(Me), h(D), h(to));
    }),
      (t.ɵprov = x({ token: t, factory: t.ɵfac }));
    let n = t;
    return n;
  })(),
  ho = class {
    constructor(t, o, e, i) {
      (this.eventManager = t),
        (this.doc = o),
        (this.ngZone = e),
        (this.platformIsServer = i),
        (this.data = Object.create(null)),
        (this.throwOnSyntheticProps = !0),
        (this.destroyNode = null);
    }
    destroy() {}
    createElement(t, o) {
      return o
        ? this.doc.createElementNS(Bs[o] || o, t)
        : this.doc.createElement(t);
    }
    createComment(t) {
      return this.doc.createComment(t);
    }
    createText(t) {
      return this.doc.createTextNode(t);
    }
    appendChild(t, o) {
      (gm(t) ? t.content : t).appendChild(o);
    }
    insertBefore(t, o, e) {
      t && (gm(t) ? t.content : t).insertBefore(o, e);
    }
    removeChild(t, o) {
      o.remove();
    }
    selectRootElement(t, o) {
      let e = typeof t == "string" ? this.doc.querySelector(t) : t;
      if (!e) throw new at(-5104, !1);
      return o || (e.textContent = ""), e;
    }
    parentNode(t) {
      return t.parentNode;
    }
    nextSibling(t) {
      return t.nextSibling;
    }
    setAttribute(t, o, e, i) {
      if (i) {
        o = i + ":" + o;
        let r = Bs[i];
        r ? t.setAttributeNS(r, o, e) : t.setAttribute(o, e);
      } else t.setAttribute(o, e);
    }
    removeAttribute(t, o, e) {
      if (e) {
        let i = Bs[e];
        i ? t.removeAttributeNS(i, o) : t.removeAttribute(`${e}:${o}`);
      } else t.removeAttribute(o);
    }
    addClass(t, o) {
      t.classList.add(o);
    }
    removeClass(t, o) {
      t.classList.remove(o);
    }
    setStyle(t, o, e, i) {
      i & (eo.DashCase | eo.Important)
        ? t.style.setProperty(o, e, i & eo.Important ? "important" : "")
        : (t.style[o] = e);
    }
    removeStyle(t, o, e) {
      e & eo.DashCase ? t.style.removeProperty(o) : (t.style[o] = "");
    }
    setProperty(t, o, e) {
      t != null && (t[o] = e);
    }
    setValue(t, o) {
      t.nodeValue = o;
    }
    listen(t, o, e) {
      if (
        typeof t == "string" &&
        ((t = nn().getGlobalEventTarget(this.doc, t)), !t)
      )
        throw new Error(`Unsupported event target ${t} for event ${o}`);
      return this.eventManager.addEventListener(
        t,
        o,
        this.decoratePreventDefault(e)
      );
    }
    decoratePreventDefault(t) {
      return (o) => {
        if (o === "__ngUnwrap__") return t;
        (this.platformIsServer ? this.ngZone.runGuarded(() => t(o)) : t(o)) ===
          !1 && o.preventDefault();
      };
    }
  };
function gm(n) {
  return n.tagName === "TEMPLATE" && n.content !== void 0;
}
var $s = class extends ho {
    constructor(t, o, e, i, r, a, s, c) {
      super(t, r, a, c),
        (this.sharedStylesHost = o),
        (this.hostEl = e),
        (this.shadowRoot = e.attachShadow({ mode: "open" })),
        this.sharedStylesHost.addHost(this.shadowRoot);
      let l = ym(i.id, i.styles);
      for (let m of l) {
        let f = document.createElement("style");
        s && f.setAttribute("nonce", s),
          (f.textContent = m),
          this.shadowRoot.appendChild(f);
      }
    }
    nodeOrShadowRoot(t) {
      return t === this.hostEl ? this.shadowRoot : t;
    }
    appendChild(t, o) {
      return super.appendChild(this.nodeOrShadowRoot(t), o);
    }
    insertBefore(t, o, e) {
      return super.insertBefore(this.nodeOrShadowRoot(t), o, e);
    }
    removeChild(t, o) {
      return super.removeChild(null, o);
    }
    parentNode(t) {
      return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)));
    }
    destroy() {
      this.sharedStylesHost.removeHost(this.shadowRoot);
    }
  },
  uo = class extends ho {
    constructor(t, o, e, i, r, a, s, c) {
      super(t, r, a, s),
        (this.sharedStylesHost = o),
        (this.removeStylesOnCompDestroy = i),
        (this.styles = c ? ym(c, e.styles) : e.styles);
    }
    applyStyles() {
      this.sharedStylesHost.addStyles(this.styles);
    }
    destroy() {
      this.removeStylesOnCompDestroy &&
        this.sharedStylesHost.removeStyles(this.styles);
    }
  },
  Br = class extends uo {
    constructor(t, o, e, i, r, a, s, c) {
      let l = i + "-" + e.id;
      super(t, o, e, r, a, s, c, l),
        (this.contentAttr = gg(l)),
        (this.hostAttr = bg(l));
    }
    applyToHost(t) {
      this.applyStyles(), this.setAttribute(t, this.hostAttr, "");
    }
    createElement(t, o) {
      let e = super.createElement(t, o);
      return super.setAttribute(e, this.contentAttr, ""), e;
    }
  },
  _g = (() => {
    let t = class t extends mo {
      constructor(e) {
        super(e);
      }
      supports(e) {
        return !0;
      }
      addEventListener(e, i, r) {
        return (
          e.addEventListener(i, r, !1), () => this.removeEventListener(e, i, r)
        );
      }
      removeEventListener(e, i, r) {
        return e.removeEventListener(i, r);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(h(R));
    }),
      (t.ɵprov = x({ token: t, factory: t.ɵfac }));
    let n = t;
    return n;
  })(),
  vg = (() => {
    let t = class t extends mo {
      constructor(e) {
        super(e), (this.delegate = _(Bd, { optional: !0 }));
      }
      supports(e) {
        return this.delegate ? this.delegate.supports(e) : !1;
      }
      addEventListener(e, i, r) {
        return this.delegate.addEventListener(e, i, r);
      }
      removeEventListener(e, i, r) {
        return this.delegate.removeEventListener(e, i, r);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(h(R));
    }),
      (t.ɵprov = x({ token: t, factory: t.ɵfac }));
    let n = t;
    return n;
  })(),
  bm = ["alt", "control", "meta", "shift"],
  xg = {
    "\b": "Backspace",
    "	": "Tab",
    "\x7F": "Delete",
    "\x1B": "Escape",
    Del: "Delete",
    Esc: "Escape",
    Left: "ArrowLeft",
    Right: "ArrowRight",
    Up: "ArrowUp",
    Down: "ArrowDown",
    Menu: "ContextMenu",
    Scroll: "ScrollLock",
    Win: "OS",
  },
  yg = {
    alt: (n) => n.altKey,
    control: (n) => n.ctrlKey,
    meta: (n) => n.metaKey,
    shift: (n) => n.shiftKey,
  },
  wg = (() => {
    let t = class t extends mo {
      constructor(e) {
        super(e);
      }
      supports(e) {
        return t.parseEventName(e) != null;
      }
      addEventListener(e, i, r) {
        let a = t.parseEventName(i),
          s = t.eventCallback(a.fullKey, r, this.manager.getZone());
        return this.manager
          .getZone()
          .runOutsideAngular(() => nn().onAndCancel(e, a.domEventName, s));
      }
      static parseEventName(e) {
        let i = e.toLowerCase().split("."),
          r = i.shift();
        if (i.length === 0 || !(r === "keydown" || r === "keyup")) return null;
        let a = t._normalizeKey(i.pop()),
          s = "",
          c = i.indexOf("code");
        if (
          (c > -1 && (i.splice(c, 1), (s = "code.")),
          bm.forEach((m) => {
            let f = i.indexOf(m);
            f > -1 && (i.splice(f, 1), (s += m + "."));
          }),
          (s += a),
          i.length != 0 || a.length === 0)
        )
          return null;
        let l = {};
        return (l.domEventName = r), (l.fullKey = s), l;
      }
      static matchEventFullKeyCode(e, i) {
        let r = xg[e.key] || e.key,
          a = "";
        return (
          i.indexOf("code.") > -1 && ((r = e.code), (a = "code.")),
          r == null || !r
            ? !1
            : ((r = r.toLowerCase()),
              r === " " ? (r = "space") : r === "." && (r = "dot"),
              bm.forEach((s) => {
                if (s !== r) {
                  let c = yg[s];
                  c(e) && (a += s + ".");
                }
              }),
              (a += r),
              a === i)
        );
      }
      static eventCallback(e, i, r) {
        return (a) => {
          t.matchEventFullKeyCode(a, e) && r.runGuarded(() => i(a));
        };
      }
      static _normalizeKey(e) {
        return e === "esc" ? "escape" : e;
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(h(R));
    }),
      (t.ɵprov = x({ token: t, factory: t.ɵfac }));
    let n = t;
    return n;
  })();
function wm(n, t) {
  return Vd(b({ rootComponent: n }, kg(t)));
}
function kg(n) {
  return {
    appProviders: [...Dg, ...(n?.providers ?? [])],
    platformProviders: Ig,
  };
}
function Cg() {
  Hs.makeCurrent();
}
function Eg() {
  return new Ti();
}
function Sg() {
  return ud(document), document;
}
var Ig = [
  { provide: Me, useValue: Zd },
  { provide: pd, useValue: Cg, multi: !0 },
  { provide: R, useFactory: Sg, deps: [] },
];
var Dg = [
  { provide: hd, useValue: "root" },
  { provide: Ti, useFactory: Eg, deps: [] },
  { provide: zr, useClass: _g, multi: !0, deps: [R, D, Me] },
  { provide: zr, useClass: wg, multi: !0, deps: [R] },
  { provide: zr, useClass: vg, multi: !0 },
  Vr,
  vm,
  _m,
  { provide: wr, useExisting: Vr },
  { provide: Rr, useClass: mg, deps: [] },
  [],
];
var km = (() => {
  let t = class t {
    constructor(e) {
      this._doc = e;
    }
    getTitle() {
      return this._doc.title;
    }
    setTitle(e) {
      this._doc.title = e || "";
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(h(R));
  }),
    (t.ɵprov = x({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let n = t;
  return n;
})();
var Gs = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵprov = x({
        token: t,
        factory: function (i) {
          let r = null;
          return i ? (r = new (i || t)()) : (r = h(Ag)), r;
        },
        providedIn: "root",
      }));
    let n = t;
    return n;
  })(),
  Ag = (() => {
    let t = class t extends Gs {
      constructor(e) {
        super(), (this._doc = e);
      }
      sanitize(e, i) {
        if (i == null) return null;
        switch (e) {
          case qt.NONE:
            return i;
          case qt.HTML:
            return Ki(i, "HTML") ? Qi(i) : yd(this._doc, String(i)).toString();
          case qt.STYLE:
            return Ki(i, "Style") ? Qi(i) : i;
          case qt.SCRIPT:
            if (Ki(i, "Script")) return Qi(i);
            throw new at(5200, !1);
          case qt.URL:
            return Ki(i, "URL") ? Qi(i) : xd(String(i));
          case qt.RESOURCE_URL:
            if (Ki(i, "ResourceURL")) return Qi(i);
            throw new at(5201, !1);
          default:
            throw new at(5202, !1);
        }
      }
      bypassSecurityTrustHtml(e) {
        return fd(e);
      }
      bypassSecurityTrustStyle(e) {
        return gd(e);
      }
      bypassSecurityTrustScript(e) {
        return bd(e);
      }
      bypassSecurityTrustUrl(e) {
        return _d(e);
      }
      bypassSecurityTrustResourceUrl(e) {
        return vd(e);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(h(R));
    }),
      (t.ɵprov = x({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })();
var W = "primary",
  Do = Symbol("RouteTitle"),
  Ks = class {
    constructor(t) {
      this.params = t || {};
    }
    has(t) {
      return Object.prototype.hasOwnProperty.call(this.params, t);
    }
    get(t) {
      if (this.has(t)) {
        let o = this.params[t];
        return Array.isArray(o) ? o[0] : o;
      }
      return null;
    }
    getAll(t) {
      if (this.has(t)) {
        let o = this.params[t];
        return Array.isArray(o) ? o : [o];
      }
      return [];
    }
    get keys() {
      return Object.keys(this.params);
    }
  };
function dn(n) {
  return new Ks(n);
}
function Mg(n, t, o) {
  let e = o.path.split("/");
  if (
    e.length > n.length ||
    (o.pathMatch === "full" && (t.hasChildren() || e.length < n.length))
  )
    return null;
  let i = {};
  for (let r = 0; r < e.length; r++) {
    let a = e[r],
      s = n[r];
    if (a[0] === ":") i[a.substring(1)] = s;
    else if (a !== s.path) return null;
  }
  return { consumed: n.slice(0, e.length), posParams: i };
}
function Tg(n, t) {
  if (n.length !== t.length) return !1;
  for (let o = 0; o < n.length; ++o) if (!ye(n[o], t[o])) return !1;
  return !0;
}
function ye(n, t) {
  let o = n ? Js(n) : void 0,
    e = t ? Js(t) : void 0;
  if (!o || !e || o.length != e.length) return !1;
  let i;
  for (let r = 0; r < o.length; r++)
    if (((i = o[r]), !Pm(n[i], t[i]))) return !1;
  return !0;
}
function Js(n) {
  return [...Object.keys(n), ...Object.getOwnPropertySymbols(n)];
}
function Pm(n, t) {
  if (Array.isArray(n) && Array.isArray(t)) {
    if (n.length !== t.length) return !1;
    let o = [...n].sort(),
      e = [...t].sort();
    return o.every((i, r) => e[r] === i);
  } else return n === t;
}
function Lm(n) {
  return n.length > 0 ? n[n.length - 1] : null;
}
function ri(n) {
  return pr(n) ? n : Sr(n) ? Rt(Promise.resolve(n)) : I(n);
}
var Og = { exact: jm, subset: zm },
  Nm = { exact: Rg, subset: Fg, ignored: () => !0 };
function Em(n, t, o) {
  return (
    Og[o.paths](n.root, t.root, o.matrixParams) &&
    Nm[o.queryParams](n.queryParams, t.queryParams) &&
    !(o.fragment === "exact" && n.fragment !== t.fragment)
  );
}
function Rg(n, t) {
  return ye(n, t);
}
function jm(n, t, o) {
  if (
    !Li(n.segments, t.segments) ||
    !$r(n.segments, t.segments, o) ||
    n.numberOfChildren !== t.numberOfChildren
  )
    return !1;
  for (let e in t.children)
    if (!n.children[e] || !jm(n.children[e], t.children[e], o)) return !1;
  return !0;
}
function Fg(n, t) {
  return (
    Object.keys(t).length <= Object.keys(n).length &&
    Object.keys(t).every((o) => Pm(n[o], t[o]))
  );
}
function zm(n, t, o) {
  return Vm(n, t, t.segments, o);
}
function Vm(n, t, o, e) {
  if (n.segments.length > o.length) {
    let i = n.segments.slice(0, o.length);
    return !(!Li(i, o) || t.hasChildren() || !$r(i, o, e));
  } else if (n.segments.length === o.length) {
    if (!Li(n.segments, o) || !$r(n.segments, o, e)) return !1;
    for (let i in t.children)
      if (!n.children[i] || !zm(n.children[i], t.children[i], e)) return !1;
    return !0;
  } else {
    let i = o.slice(0, n.segments.length),
      r = o.slice(n.segments.length);
    return !Li(n.segments, i) || !$r(n.segments, i, e) || !n.children[W]
      ? !1
      : Vm(n.children[W], t, r, e);
  }
}
function $r(n, t, o) {
  return t.every((e, i) => Nm[o](n[i].parameters, e.parameters));
}
var Le = class {
    constructor(t = new rt([], {}), o = {}, e = null) {
      (this.root = t), (this.queryParams = o), (this.fragment = e);
    }
    get queryParamMap() {
      return (
        (this._queryParamMap ??= dn(this.queryParams)), this._queryParamMap
      );
    }
    toString() {
      return Ng.serialize(this);
    }
  },
  rt = class {
    constructor(t, o) {
      (this.segments = t),
        (this.children = o),
        (this.parent = null),
        Object.values(o).forEach((e) => (e.parent = this));
    }
    hasChildren() {
      return this.numberOfChildren > 0;
    }
    get numberOfChildren() {
      return Object.keys(this.children).length;
    }
    toString() {
      return Wr(this);
    }
  },
  Pi = class {
    constructor(t, o) {
      (this.path = t), (this.parameters = o);
    }
    get parameterMap() {
      return (this._parameterMap ??= dn(this.parameters)), this._parameterMap;
    }
    toString() {
      return Um(this);
    }
  };
function Pg(n, t) {
  return Li(n, t) && n.every((o, e) => ye(o.parameters, t[e].parameters));
}
function Li(n, t) {
  return n.length !== t.length ? !1 : n.every((o, e) => o.path === t[e].path);
}
function Lg(n, t) {
  let o = [];
  return (
    Object.entries(n.children).forEach(([e, i]) => {
      e === W && (o = o.concat(t(i, e)));
    }),
    Object.entries(n.children).forEach(([e, i]) => {
      e !== W && (o = o.concat(t(i, e)));
    }),
    o
  );
}
var Ao = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵprov = x({ token: t, factory: () => new mn(), providedIn: "root" }));
    let n = t;
    return n;
  })(),
  mn = class {
    parse(t) {
      let o = new ec(t);
      return new Le(
        o.parseRootSegment(),
        o.parseQueryParams(),
        o.parseFragment()
      );
    }
    serialize(t) {
      let o = `/${po(t.root, !0)}`,
        e = Vg(t.queryParams),
        i = typeof t.fragment == "string" ? `#${jg(t.fragment)}` : "";
      return `${o}${e}${i}`;
    }
  },
  Ng = new mn();
function Wr(n) {
  return n.segments.map((t) => Um(t)).join("/");
}
function po(n, t) {
  if (!n.hasChildren()) return Wr(n);
  if (t) {
    let o = n.children[W] ? po(n.children[W], !1) : "",
      e = [];
    return (
      Object.entries(n.children).forEach(([i, r]) => {
        i !== W && e.push(`${i}:${po(r, !1)}`);
      }),
      e.length > 0 ? `${o}(${e.join("//")})` : o
    );
  } else {
    let o = Lg(n, (e, i) =>
      i === W ? [po(n.children[W], !1)] : [`${i}:${po(e, !1)}`]
    );
    return Object.keys(n.children).length === 1 && n.children[W] != null
      ? `${Wr(n)}/${o[0]}`
      : `${Wr(n)}/(${o.join("//")})`;
  }
}
function Bm(n) {
  return encodeURIComponent(n)
    .replace(/%40/g, "@")
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",");
}
function Ur(n) {
  return Bm(n).replace(/%3B/gi, ";");
}
function jg(n) {
  return encodeURI(n);
}
function tc(n) {
  return Bm(n)
    .replace(/\(/g, "%28")
    .replace(/\)/g, "%29")
    .replace(/%26/gi, "&");
}
function qr(n) {
  return decodeURIComponent(n);
}
function Sm(n) {
  return qr(n.replace(/\+/g, "%20"));
}
function Um(n) {
  return `${tc(n.path)}${zg(n.parameters)}`;
}
function zg(n) {
  return Object.entries(n)
    .map(([t, o]) => `;${tc(t)}=${tc(o)}`)
    .join("");
}
function Vg(n) {
  let t = Object.entries(n)
    .map(([o, e]) =>
      Array.isArray(e)
        ? e.map((i) => `${Ur(o)}=${Ur(i)}`).join("&")
        : `${Ur(o)}=${Ur(e)}`
    )
    .filter((o) => o);
  return t.length ? `?${t.join("&")}` : "";
}
var Bg = /^[^\/()?;#]+/;
function Ys(n) {
  let t = n.match(Bg);
  return t ? t[0] : "";
}
var Ug = /^[^\/()?;=#]+/;
function Hg(n) {
  let t = n.match(Ug);
  return t ? t[0] : "";
}
var $g = /^[^=?&#]+/;
function Wg(n) {
  let t = n.match($g);
  return t ? t[0] : "";
}
var qg = /^[^&#]+/;
function Gg(n) {
  let t = n.match(qg);
  return t ? t[0] : "";
}
var ec = class {
  constructor(t) {
    (this.url = t), (this.remaining = t);
  }
  parseRootSegment() {
    return (
      this.consumeOptional("/"),
      this.remaining === "" ||
      this.peekStartsWith("?") ||
      this.peekStartsWith("#")
        ? new rt([], {})
        : new rt([], this.parseChildren())
    );
  }
  parseQueryParams() {
    let t = {};
    if (this.consumeOptional("?"))
      do this.parseQueryParam(t);
      while (this.consumeOptional("&"));
    return t;
  }
  parseFragment() {
    return this.consumeOptional("#")
      ? decodeURIComponent(this.remaining)
      : null;
  }
  parseChildren() {
    if (this.remaining === "") return {};
    this.consumeOptional("/");
    let t = [];
    for (
      this.peekStartsWith("(") || t.push(this.parseSegment());
      this.peekStartsWith("/") &&
      !this.peekStartsWith("//") &&
      !this.peekStartsWith("/(");

    )
      this.capture("/"), t.push(this.parseSegment());
    let o = {};
    this.peekStartsWith("/(") &&
      (this.capture("/"), (o = this.parseParens(!0)));
    let e = {};
    return (
      this.peekStartsWith("(") && (e = this.parseParens(!1)),
      (t.length > 0 || Object.keys(o).length > 0) && (e[W] = new rt(t, o)),
      e
    );
  }
  parseSegment() {
    let t = Ys(this.remaining);
    if (t === "" && this.peekStartsWith(";")) throw new at(4009, !1);
    return this.capture(t), new Pi(qr(t), this.parseMatrixParams());
  }
  parseMatrixParams() {
    let t = {};
    for (; this.consumeOptional(";"); ) this.parseParam(t);
    return t;
  }
  parseParam(t) {
    let o = Hg(this.remaining);
    if (!o) return;
    this.capture(o);
    let e = "";
    if (this.consumeOptional("=")) {
      let i = Ys(this.remaining);
      i && ((e = i), this.capture(e));
    }
    t[qr(o)] = qr(e);
  }
  parseQueryParam(t) {
    let o = Wg(this.remaining);
    if (!o) return;
    this.capture(o);
    let e = "";
    if (this.consumeOptional("=")) {
      let a = Gg(this.remaining);
      a && ((e = a), this.capture(e));
    }
    let i = Sm(o),
      r = Sm(e);
    if (t.hasOwnProperty(i)) {
      let a = t[i];
      Array.isArray(a) || ((a = [a]), (t[i] = a)), a.push(r);
    } else t[i] = r;
  }
  parseParens(t) {
    let o = {};
    for (
      this.capture("(");
      !this.consumeOptional(")") && this.remaining.length > 0;

    ) {
      let e = Ys(this.remaining),
        i = this.remaining[e.length];
      if (i !== "/" && i !== ")" && i !== ";") throw new at(4010, !1);
      let r;
      e.indexOf(":") > -1
        ? ((r = e.slice(0, e.indexOf(":"))), this.capture(r), this.capture(":"))
        : t && (r = W);
      let a = this.parseChildren();
      (o[r] = Object.keys(a).length === 1 ? a[W] : new rt([], a)),
        this.consumeOptional("//");
    }
    return o;
  }
  peekStartsWith(t) {
    return this.remaining.startsWith(t);
  }
  consumeOptional(t) {
    return this.peekStartsWith(t)
      ? ((this.remaining = this.remaining.substring(t.length)), !0)
      : !1;
  }
  capture(t) {
    if (!this.consumeOptional(t)) throw new at(4011, !1);
  }
};
function Hm(n) {
  return n.segments.length > 0 ? new rt([], { [W]: n }) : n;
}
function $m(n) {
  let t = {};
  for (let [e, i] of Object.entries(n.children)) {
    let r = $m(i);
    if (e === W && r.segments.length === 0 && r.hasChildren())
      for (let [a, s] of Object.entries(r.children)) t[a] = s;
    else (r.segments.length > 0 || r.hasChildren()) && (t[e] = r);
  }
  let o = new rt(n.segments, t);
  return Yg(o);
}
function Yg(n) {
  if (n.numberOfChildren === 1 && n.children[W]) {
    let t = n.children[W];
    return new rt(n.segments.concat(t.segments), t.children);
  }
  return n;
}
function Ni(n) {
  return n instanceof Le;
}
function Xg(n, t, o = null, e = null) {
  let i = Wm(n);
  return qm(i, t, o, e);
}
function Wm(n) {
  let t;
  function o(r) {
    let a = {};
    for (let c of r.children) {
      let l = o(c);
      a[c.outlet] = l;
    }
    let s = new rt(r.url, a);
    return r === n && (t = s), s;
  }
  let e = o(n.root),
    i = Hm(e);
  return t ?? i;
}
function qm(n, t, o, e) {
  let i = n;
  for (; i.parent; ) i = i.parent;
  if (t.length === 0) return Xs(i, i, i, o, e);
  let r = Zg(t);
  if (r.toRoot()) return Xs(i, i, new rt([], {}), o, e);
  let a = Qg(r, i, n),
    s = a.processChildren
      ? bo(a.segmentGroup, a.index, r.commands)
      : Ym(a.segmentGroup, a.index, r.commands);
  return Xs(i, a.segmentGroup, s, o, e);
}
function Gr(n) {
  return typeof n == "object" && n != null && !n.outlets && !n.segmentPath;
}
function xo(n) {
  return typeof n == "object" && n != null && n.outlets;
}
function Xs(n, t, o, e, i) {
  let r = {};
  e &&
    Object.entries(e).forEach(([c, l]) => {
      r[c] = Array.isArray(l) ? l.map((m) => `${m}`) : `${l}`;
    });
  let a;
  n === t ? (a = o) : (a = Gm(n, t, o));
  let s = Hm($m(a));
  return new Le(s, r, i);
}
function Gm(n, t, o) {
  let e = {};
  return (
    Object.entries(n.children).forEach(([i, r]) => {
      r === t ? (e[i] = o) : (e[i] = Gm(r, t, o));
    }),
    new rt(n.segments, e)
  );
}
var Yr = class {
  constructor(t, o, e) {
    if (
      ((this.isAbsolute = t),
      (this.numberOfDoubleDots = o),
      (this.commands = e),
      t && e.length > 0 && Gr(e[0]))
    )
      throw new at(4003, !1);
    let i = e.find(xo);
    if (i && i !== Lm(e)) throw new at(4004, !1);
  }
  toRoot() {
    return (
      this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/"
    );
  }
};
function Zg(n) {
  if (typeof n[0] == "string" && n.length === 1 && n[0] === "/")
    return new Yr(!0, 0, n);
  let t = 0,
    o = !1,
    e = n.reduce((i, r, a) => {
      if (typeof r == "object" && r != null) {
        if (r.outlets) {
          let s = {};
          return (
            Object.entries(r.outlets).forEach(([c, l]) => {
              s[c] = typeof l == "string" ? l.split("/") : l;
            }),
            [...i, { outlets: s }]
          );
        }
        if (r.segmentPath) return [...i, r.segmentPath];
      }
      return typeof r != "string"
        ? [...i, r]
        : a === 0
        ? (r.split("/").forEach((s, c) => {
            (c == 0 && s === ".") ||
              (c == 0 && s === ""
                ? (o = !0)
                : s === ".."
                ? t++
                : s != "" && i.push(s));
          }),
          i)
        : [...i, r];
    }, []);
  return new Yr(o, t, e);
}
var sn = class {
  constructor(t, o, e) {
    (this.segmentGroup = t), (this.processChildren = o), (this.index = e);
  }
};
function Qg(n, t, o) {
  if (n.isAbsolute) return new sn(t, !0, 0);
  if (!o) return new sn(t, !1, NaN);
  if (o.parent === null) return new sn(o, !0, 0);
  let e = Gr(n.commands[0]) ? 0 : 1,
    i = o.segments.length - 1 + e;
  return Kg(o, i, n.numberOfDoubleDots);
}
function Kg(n, t, o) {
  let e = n,
    i = t,
    r = o;
  for (; r > i; ) {
    if (((r -= i), (e = e.parent), !e)) throw new at(4005, !1);
    i = e.segments.length;
  }
  return new sn(e, !1, i - r);
}
function Jg(n) {
  return xo(n[0]) ? n[0].outlets : { [W]: n };
}
function Ym(n, t, o) {
  if (((n ??= new rt([], {})), n.segments.length === 0 && n.hasChildren()))
    return bo(n, t, o);
  let e = tb(n, t, o),
    i = o.slice(e.commandIndex);
  if (e.match && e.pathIndex < n.segments.length) {
    let r = new rt(n.segments.slice(0, e.pathIndex), {});
    return (
      (r.children[W] = new rt(n.segments.slice(e.pathIndex), n.children)),
      bo(r, 0, i)
    );
  } else
    return e.match && i.length === 0
      ? new rt(n.segments, {})
      : e.match && !n.hasChildren()
      ? ic(n, t, o)
      : e.match
      ? bo(n, 0, i)
      : ic(n, t, o);
}
function bo(n, t, o) {
  if (o.length === 0) return new rt(n.segments, {});
  {
    let e = Jg(o),
      i = {};
    if (
      Object.keys(e).some((r) => r !== W) &&
      n.children[W] &&
      n.numberOfChildren === 1 &&
      n.children[W].segments.length === 0
    ) {
      let r = bo(n.children[W], t, o);
      return new rt(n.segments, r.children);
    }
    return (
      Object.entries(e).forEach(([r, a]) => {
        typeof a == "string" && (a = [a]),
          a !== null && (i[r] = Ym(n.children[r], t, a));
      }),
      Object.entries(n.children).forEach(([r, a]) => {
        e[r] === void 0 && (i[r] = a);
      }),
      new rt(n.segments, i)
    );
  }
}
function tb(n, t, o) {
  let e = 0,
    i = t,
    r = { match: !1, pathIndex: 0, commandIndex: 0 };
  for (; i < n.segments.length; ) {
    if (e >= o.length) return r;
    let a = n.segments[i],
      s = o[e];
    if (xo(s)) break;
    let c = `${s}`,
      l = e < o.length - 1 ? o[e + 1] : null;
    if (i > 0 && c === void 0) break;
    if (c && l && typeof l == "object" && l.outlets === void 0) {
      if (!Dm(c, l, a)) return r;
      e += 2;
    } else {
      if (!Dm(c, {}, a)) return r;
      e++;
    }
    i++;
  }
  return { match: !0, pathIndex: i, commandIndex: e };
}
function ic(n, t, o) {
  let e = n.segments.slice(0, t),
    i = 0;
  for (; i < o.length; ) {
    let r = o[i];
    if (xo(r)) {
      let c = eb(r.outlets);
      return new rt(e, c);
    }
    if (i === 0 && Gr(o[0])) {
      let c = n.segments[t];
      e.push(new Pi(c.path, Im(o[0]))), i++;
      continue;
    }
    let a = xo(r) ? r.outlets[W] : `${r}`,
      s = i < o.length - 1 ? o[i + 1] : null;
    a && s && Gr(s)
      ? (e.push(new Pi(a, Im(s))), (i += 2))
      : (e.push(new Pi(a, {})), i++);
  }
  return new rt(e, {});
}
function eb(n) {
  let t = {};
  return (
    Object.entries(n).forEach(([o, e]) => {
      typeof e == "string" && (e = [e]),
        e !== null && (t[o] = ic(new rt([], {}), 0, e));
    }),
    t
  );
}
function Im(n) {
  let t = {};
  return Object.entries(n).forEach(([o, e]) => (t[o] = `${e}`)), t;
}
function Dm(n, t, o) {
  return n == o.path && ye(t, o.parameters);
}
var _o = "imperative",
  Tt = (function (n) {
    return (
      (n[(n.NavigationStart = 0)] = "NavigationStart"),
      (n[(n.NavigationEnd = 1)] = "NavigationEnd"),
      (n[(n.NavigationCancel = 2)] = "NavigationCancel"),
      (n[(n.NavigationError = 3)] = "NavigationError"),
      (n[(n.RoutesRecognized = 4)] = "RoutesRecognized"),
      (n[(n.ResolveStart = 5)] = "ResolveStart"),
      (n[(n.ResolveEnd = 6)] = "ResolveEnd"),
      (n[(n.GuardsCheckStart = 7)] = "GuardsCheckStart"),
      (n[(n.GuardsCheckEnd = 8)] = "GuardsCheckEnd"),
      (n[(n.RouteConfigLoadStart = 9)] = "RouteConfigLoadStart"),
      (n[(n.RouteConfigLoadEnd = 10)] = "RouteConfigLoadEnd"),
      (n[(n.ChildActivationStart = 11)] = "ChildActivationStart"),
      (n[(n.ChildActivationEnd = 12)] = "ChildActivationEnd"),
      (n[(n.ActivationStart = 13)] = "ActivationStart"),
      (n[(n.ActivationEnd = 14)] = "ActivationEnd"),
      (n[(n.Scroll = 15)] = "Scroll"),
      (n[(n.NavigationSkipped = 16)] = "NavigationSkipped"),
      n
    );
  })(Tt || {}),
  ne = class {
    constructor(t, o) {
      (this.id = t), (this.url = o);
    }
  },
  hn = class extends ne {
    constructor(t, o, e = "imperative", i = null) {
      super(t, o),
        (this.type = Tt.NavigationStart),
        (this.navigationTrigger = e),
        (this.restoredState = i);
    }
    toString() {
      return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
    }
  },
  we = class extends ne {
    constructor(t, o, e) {
      super(t, o), (this.urlAfterRedirects = e), (this.type = Tt.NavigationEnd);
    }
    toString() {
      return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
    }
  },
  Xt = (function (n) {
    return (
      (n[(n.Redirect = 0)] = "Redirect"),
      (n[(n.SupersededByNewNavigation = 1)] = "SupersededByNewNavigation"),
      (n[(n.NoDataFromResolver = 2)] = "NoDataFromResolver"),
      (n[(n.GuardRejected = 3)] = "GuardRejected"),
      n
    );
  })(Xt || {}),
  Xr = (function (n) {
    return (
      (n[(n.IgnoredSameUrlNavigation = 0)] = "IgnoredSameUrlNavigation"),
      (n[(n.IgnoredByUrlHandlingStrategy = 1)] =
        "IgnoredByUrlHandlingStrategy"),
      n
    );
  })(Xr || {}),
  Pe = class extends ne {
    constructor(t, o, e, i) {
      super(t, o),
        (this.reason = e),
        (this.code = i),
        (this.type = Tt.NavigationCancel);
    }
    toString() {
      return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
    }
  },
  oi = class extends ne {
    constructor(t, o, e, i) {
      super(t, o),
        (this.reason = e),
        (this.code = i),
        (this.type = Tt.NavigationSkipped);
    }
  },
  yo = class extends ne {
    constructor(t, o, e, i) {
      super(t, o),
        (this.error = e),
        (this.target = i),
        (this.type = Tt.NavigationError);
    }
    toString() {
      return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
    }
  },
  Zr = class extends ne {
    constructor(t, o, e, i) {
      super(t, o),
        (this.urlAfterRedirects = e),
        (this.state = i),
        (this.type = Tt.RoutesRecognized);
    }
    toString() {
      return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  nc = class extends ne {
    constructor(t, o, e, i) {
      super(t, o),
        (this.urlAfterRedirects = e),
        (this.state = i),
        (this.type = Tt.GuardsCheckStart);
    }
    toString() {
      return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  oc = class extends ne {
    constructor(t, o, e, i, r) {
      super(t, o),
        (this.urlAfterRedirects = e),
        (this.state = i),
        (this.shouldActivate = r),
        (this.type = Tt.GuardsCheckEnd);
    }
    toString() {
      return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
    }
  },
  rc = class extends ne {
    constructor(t, o, e, i) {
      super(t, o),
        (this.urlAfterRedirects = e),
        (this.state = i),
        (this.type = Tt.ResolveStart);
    }
    toString() {
      return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  ac = class extends ne {
    constructor(t, o, e, i) {
      super(t, o),
        (this.urlAfterRedirects = e),
        (this.state = i),
        (this.type = Tt.ResolveEnd);
    }
    toString() {
      return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  sc = class {
    constructor(t) {
      (this.route = t), (this.type = Tt.RouteConfigLoadStart);
    }
    toString() {
      return `RouteConfigLoadStart(path: ${this.route.path})`;
    }
  },
  cc = class {
    constructor(t) {
      (this.route = t), (this.type = Tt.RouteConfigLoadEnd);
    }
    toString() {
      return `RouteConfigLoadEnd(path: ${this.route.path})`;
    }
  },
  lc = class {
    constructor(t) {
      (this.snapshot = t), (this.type = Tt.ChildActivationStart);
    }
    toString() {
      return `ChildActivationStart(path: '${
        (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
      }')`;
    }
  },
  dc = class {
    constructor(t) {
      (this.snapshot = t), (this.type = Tt.ChildActivationEnd);
    }
    toString() {
      return `ChildActivationEnd(path: '${
        (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
      }')`;
    }
  },
  mc = class {
    constructor(t) {
      (this.snapshot = t), (this.type = Tt.ActivationStart);
    }
    toString() {
      return `ActivationStart(path: '${
        (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
      }')`;
    }
  },
  hc = class {
    constructor(t) {
      (this.snapshot = t), (this.type = Tt.ActivationEnd);
    }
    toString() {
      return `ActivationEnd(path: '${
        (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
      }')`;
    }
  },
  Qr = class {
    constructor(t, o, e) {
      (this.routerEvent = t),
        (this.position = o),
        (this.anchor = e),
        (this.type = Tt.Scroll);
    }
    toString() {
      let t = this.position ? `${this.position[0]}, ${this.position[1]}` : null;
      return `Scroll(anchor: '${this.anchor}', position: '${t}')`;
    }
  },
  wo = class {},
  un = class {
    constructor(t, o) {
      (this.url = t), (this.navigationBehaviorOptions = o);
    }
  };
function ib(n, t) {
  return (
    n.providers &&
      !n._injector &&
      (n._injector = Ds(n.providers, t, `Route: ${n.path}`)),
    n._injector ?? t
  );
}
function he(n) {
  return n.outlet || W;
}
function nb(n, t) {
  let o = n.filter((e) => he(e) === t);
  return o.push(...n.filter((e) => he(e) !== t)), o;
}
function Mo(n) {
  if (!n) return null;
  if (n.routeConfig?._injector) return n.routeConfig._injector;
  for (let t = n.parent; t; t = t.parent) {
    let o = t.routeConfig;
    if (o?._loadedInjector) return o._loadedInjector;
    if (o?._injector) return o._injector;
  }
  return null;
}
var uc = class {
    get injector() {
      return Mo(this.route?.snapshot) ?? this.rootInjector;
    }
    set injector(t) {}
    constructor(t) {
      (this.rootInjector = t),
        (this.outlet = null),
        (this.route = null),
        (this.children = new To(this.rootInjector)),
        (this.attachRef = null);
    }
  },
  To = (() => {
    let t = class t {
      constructor(e) {
        (this.rootInjector = e), (this.contexts = new Map());
      }
      onChildOutletCreated(e, i) {
        let r = this.getOrCreateContext(e);
        (r.outlet = i), this.contexts.set(e, r);
      }
      onChildOutletDestroyed(e) {
        let i = this.getContext(e);
        i && ((i.outlet = null), (i.attachRef = null));
      }
      onOutletDeactivated() {
        let e = this.contexts;
        return (this.contexts = new Map()), e;
      }
      onOutletReAttached(e) {
        this.contexts = e;
      }
      getOrCreateContext(e) {
        let i = this.getContext(e);
        return (
          i || ((i = new uc(this.rootInjector)), this.contexts.set(e, i)), i
        );
      }
      getContext(e) {
        return this.contexts.get(e) || null;
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(h(Mi));
    }),
      (t.ɵprov = x({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })(),
  Kr = class {
    constructor(t) {
      this._root = t;
    }
    get root() {
      return this._root.value;
    }
    parent(t) {
      let o = this.pathFromRoot(t);
      return o.length > 1 ? o[o.length - 2] : null;
    }
    children(t) {
      let o = pc(t, this._root);
      return o ? o.children.map((e) => e.value) : [];
    }
    firstChild(t) {
      let o = pc(t, this._root);
      return o && o.children.length > 0 ? o.children[0].value : null;
    }
    siblings(t) {
      let o = fc(t, this._root);
      return o.length < 2
        ? []
        : o[o.length - 2].children.map((i) => i.value).filter((i) => i !== t);
    }
    pathFromRoot(t) {
      return fc(t, this._root).map((o) => o.value);
    }
  };
function pc(n, t) {
  if (n === t.value) return t;
  for (let o of t.children) {
    let e = pc(n, o);
    if (e) return e;
  }
  return null;
}
function fc(n, t) {
  if (n === t.value) return [t];
  for (let o of t.children) {
    let e = fc(n, o);
    if (e.length) return e.unshift(t), e;
  }
  return [];
}
var Yt = class {
  constructor(t, o) {
    (this.value = t), (this.children = o);
  }
  toString() {
    return `TreeNode(${this.value})`;
  }
};
function an(n) {
  let t = {};
  return n && n.children.forEach((o) => (t[o.value.outlet] = o)), t;
}
var Jr = class extends Kr {
  constructor(t, o) {
    super(t), (this.snapshot = o), Cc(this, t);
  }
  toString() {
    return this.snapshot.toString();
  }
};
function Xm(n) {
  let t = ob(n),
    o = new Nt([new Pi("", {})]),
    e = new Nt({}),
    i = new Nt({}),
    r = new Nt({}),
    a = new Nt(""),
    s = new ke(o, e, r, a, i, W, n, t.root);
  return (s.snapshot = t.root), new Jr(new Yt(s, []), t);
}
function ob(n) {
  let t = {},
    o = {},
    e = {},
    i = "",
    r = new cn([], t, e, i, o, W, n, null, {});
  return new ea("", new Yt(r, []));
}
var ke = class {
  constructor(t, o, e, i, r, a, s, c) {
    (this.urlSubject = t),
      (this.paramsSubject = o),
      (this.queryParamsSubject = e),
      (this.fragmentSubject = i),
      (this.dataSubject = r),
      (this.outlet = a),
      (this.component = s),
      (this._futureSnapshot = c),
      (this.title = this.dataSubject?.pipe(B((l) => l[Do])) ?? I(void 0)),
      (this.url = t),
      (this.params = o),
      (this.queryParams = e),
      (this.fragment = i),
      (this.data = r);
  }
  get routeConfig() {
    return this._futureSnapshot.routeConfig;
  }
  get root() {
    return this._routerState.root;
  }
  get parent() {
    return this._routerState.parent(this);
  }
  get firstChild() {
    return this._routerState.firstChild(this);
  }
  get children() {
    return this._routerState.children(this);
  }
  get pathFromRoot() {
    return this._routerState.pathFromRoot(this);
  }
  get paramMap() {
    return (
      (this._paramMap ??= this.params.pipe(B((t) => dn(t)))), this._paramMap
    );
  }
  get queryParamMap() {
    return (
      (this._queryParamMap ??= this.queryParams.pipe(B((t) => dn(t)))),
      this._queryParamMap
    );
  }
  toString() {
    return this.snapshot
      ? this.snapshot.toString()
      : `Future(${this._futureSnapshot})`;
  }
};
function ta(n, t, o = "emptyOnly") {
  let e,
    { routeConfig: i } = n;
  return (
    t !== null &&
    (o === "always" ||
      i?.path === "" ||
      (!t.component && !t.routeConfig?.loadComponent))
      ? (e = {
          params: b(b({}, t.params), n.params),
          data: b(b({}, t.data), n.data),
          resolve: b(b(b(b({}, n.data), t.data), i?.data), n._resolvedData),
        })
      : (e = {
          params: b({}, n.params),
          data: b({}, n.data),
          resolve: b(b({}, n.data), n._resolvedData ?? {}),
        }),
    i && Qm(i) && (e.resolve[Do] = i.title),
    e
  );
}
var cn = class {
    get title() {
      return this.data?.[Do];
    }
    constructor(t, o, e, i, r, a, s, c, l) {
      (this.url = t),
        (this.params = o),
        (this.queryParams = e),
        (this.fragment = i),
        (this.data = r),
        (this.outlet = a),
        (this.component = s),
        (this.routeConfig = c),
        (this._resolve = l);
    }
    get root() {
      return this._routerState.root;
    }
    get parent() {
      return this._routerState.parent(this);
    }
    get firstChild() {
      return this._routerState.firstChild(this);
    }
    get children() {
      return this._routerState.children(this);
    }
    get pathFromRoot() {
      return this._routerState.pathFromRoot(this);
    }
    get paramMap() {
      return (this._paramMap ??= dn(this.params)), this._paramMap;
    }
    get queryParamMap() {
      return (
        (this._queryParamMap ??= dn(this.queryParams)), this._queryParamMap
      );
    }
    toString() {
      let t = this.url.map((e) => e.toString()).join("/"),
        o = this.routeConfig ? this.routeConfig.path : "";
      return `Route(url:'${t}', path:'${o}')`;
    }
  },
  ea = class extends Kr {
    constructor(t, o) {
      super(o), (this.url = t), Cc(this, o);
    }
    toString() {
      return Zm(this._root);
    }
  };
function Cc(n, t) {
  (t.value._routerState = n), t.children.forEach((o) => Cc(n, o));
}
function Zm(n) {
  let t = n.children.length > 0 ? ` { ${n.children.map(Zm).join(", ")} } ` : "";
  return `${n.value}${t}`;
}
function Zs(n) {
  if (n.snapshot) {
    let t = n.snapshot,
      o = n._futureSnapshot;
    (n.snapshot = o),
      ye(t.queryParams, o.queryParams) ||
        n.queryParamsSubject.next(o.queryParams),
      t.fragment !== o.fragment && n.fragmentSubject.next(o.fragment),
      ye(t.params, o.params) || n.paramsSubject.next(o.params),
      Tg(t.url, o.url) || n.urlSubject.next(o.url),
      ye(t.data, o.data) || n.dataSubject.next(o.data);
  } else
    (n.snapshot = n._futureSnapshot),
      n.dataSubject.next(n._futureSnapshot.data);
}
function gc(n, t) {
  let o = ye(n.params, t.params) && Pg(n.url, t.url),
    e = !n.parent != !t.parent;
  return o && !e && (!n.parent || gc(n.parent, t.parent));
}
function Qm(n) {
  return typeof n.title == "string" || n.title === null;
}
var Ec = (() => {
    let t = class t {
      constructor() {
        (this.activated = null),
          (this._activatedRoute = null),
          (this.name = W),
          (this.activateEvents = new et()),
          (this.deactivateEvents = new et()),
          (this.attachEvents = new et()),
          (this.detachEvents = new et()),
          (this.parentContexts = _(To)),
          (this.location = _(Te)),
          (this.changeDetector = _(St)),
          (this.inputBinder = _(ra, { optional: !0 })),
          (this.supportsBindingToComponentInputs = !0);
      }
      get activatedComponentRef() {
        return this.activated;
      }
      ngOnChanges(e) {
        if (e.name) {
          let { firstChange: i, previousValue: r } = e.name;
          if (i) return;
          this.isTrackedInParentContexts(r) &&
            (this.deactivate(), this.parentContexts.onChildOutletDestroyed(r)),
            this.initializeOutletWithName();
        }
      }
      ngOnDestroy() {
        this.isTrackedInParentContexts(this.name) &&
          this.parentContexts.onChildOutletDestroyed(this.name),
          this.inputBinder?.unsubscribeFromRouteData(this);
      }
      isTrackedInParentContexts(e) {
        return this.parentContexts.getContext(e)?.outlet === this;
      }
      ngOnInit() {
        this.initializeOutletWithName();
      }
      initializeOutletWithName() {
        if (
          (this.parentContexts.onChildOutletCreated(this.name, this),
          this.activated)
        )
          return;
        let e = this.parentContexts.getContext(this.name);
        e?.route &&
          (e.attachRef
            ? this.attach(e.attachRef, e.route)
            : this.activateWith(e.route, e.injector));
      }
      get isActivated() {
        return !!this.activated;
      }
      get component() {
        if (!this.activated) throw new at(4012, !1);
        return this.activated.instance;
      }
      get activatedRoute() {
        if (!this.activated) throw new at(4012, !1);
        return this._activatedRoute;
      }
      get activatedRouteData() {
        return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
      }
      detach() {
        if (!this.activated) throw new at(4012, !1);
        this.location.detach();
        let e = this.activated;
        return (
          (this.activated = null),
          (this._activatedRoute = null),
          this.detachEvents.emit(e.instance),
          e
        );
      }
      attach(e, i) {
        (this.activated = e),
          (this._activatedRoute = i),
          this.location.insert(e.hostView),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.attachEvents.emit(e.instance);
      }
      deactivate() {
        if (this.activated) {
          let e = this.component;
          this.activated.destroy(),
            (this.activated = null),
            (this._activatedRoute = null),
            this.deactivateEvents.emit(e);
        }
      }
      activateWith(e, i) {
        if (this.isActivated) throw new at(4013, !1);
        this._activatedRoute = e;
        let r = this.location,
          s = e.snapshot.component,
          c = this.parentContexts.getOrCreateContext(this.name).children,
          l = new bc(e, c, r.injector);
        (this.activated = r.createComponent(s, {
          index: r.length,
          injector: l,
          environmentInjector: i,
        })),
          this.changeDetector.markForCheck(),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.activateEvents.emit(this.activated.instance);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵdir = F({
        type: t,
        selectors: [["router-outlet"]],
        inputs: { name: "name" },
        outputs: {
          activateEvents: "activate",
          deactivateEvents: "deactivate",
          attachEvents: "attach",
          detachEvents: "detach",
        },
        exportAs: ["outlet"],
        standalone: !0,
        features: [zt],
      }));
    let n = t;
    return n;
  })(),
  bc = class n {
    __ngOutletInjector(t) {
      return new n(this.route, this.childContexts, t);
    }
    constructor(t, o, e) {
      (this.route = t), (this.childContexts = o), (this.parent = e);
    }
    get(t, o) {
      return t === ke
        ? this.route
        : t === To
        ? this.childContexts
        : this.parent.get(t, o);
    }
  },
  ra = new w(""),
  Am = (() => {
    let t = class t {
      constructor() {
        this.outletDataSubscriptions = new Map();
      }
      bindActivatedRouteToOutletComponent(e) {
        this.unsubscribeFromRouteData(e), this.subscribeToRouteData(e);
      }
      unsubscribeFromRouteData(e) {
        this.outletDataSubscriptions.get(e)?.unsubscribe(),
          this.outletDataSubscriptions.delete(e);
      }
      subscribeToRouteData(e) {
        let { activatedRoute: i } = e,
          r = Xi([i.queryParams, i.params, i.data])
            .pipe(
              Ft(
                ([a, s, c], l) => (
                  (c = b(b(b({}, a), s), c)),
                  l === 0 ? I(c) : Promise.resolve(c)
                )
              )
            )
            .subscribe((a) => {
              if (
                !e.isActivated ||
                !e.activatedComponentRef ||
                e.activatedRoute !== i ||
                i.component === null
              ) {
                this.unsubscribeFromRouteData(e);
                return;
              }
              let s = Hd(i.component);
              if (!s) {
                this.unsubscribeFromRouteData(e);
                return;
              }
              for (let { templateName: c } of s.inputs)
                e.activatedComponentRef.setInput(c, a[c]);
            });
        this.outletDataSubscriptions.set(e, r);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵprov = x({ token: t, factory: t.ɵfac }));
    let n = t;
    return n;
  })();
function rb(n, t, o) {
  let e = ko(n, t._root, o ? o._root : void 0);
  return new Jr(e, t);
}
function ko(n, t, o) {
  if (o && n.shouldReuseRoute(t.value, o.value.snapshot)) {
    let e = o.value;
    e._futureSnapshot = t.value;
    let i = ab(n, t, o);
    return new Yt(e, i);
  } else {
    if (n.shouldAttach(t.value)) {
      let r = n.retrieve(t.value);
      if (r !== null) {
        let a = r.route;
        return (
          (a.value._futureSnapshot = t.value),
          (a.children = t.children.map((s) => ko(n, s))),
          a
        );
      }
    }
    let e = sb(t.value),
      i = t.children.map((r) => ko(n, r));
    return new Yt(e, i);
  }
}
function ab(n, t, o) {
  return t.children.map((e) => {
    for (let i of o.children)
      if (n.shouldReuseRoute(e.value, i.value.snapshot)) return ko(n, e, i);
    return ko(n, e);
  });
}
function sb(n) {
  return new ke(
    new Nt(n.url),
    new Nt(n.params),
    new Nt(n.queryParams),
    new Nt(n.fragment),
    new Nt(n.data),
    n.outlet,
    n.component,
    n
  );
}
var Co = class {
    constructor(t, o) {
      (this.redirectTo = t), (this.navigationBehaviorOptions = o);
    }
  },
  Km = "ngNavigationCancelingError";
function ia(n, t) {
  let { redirectTo: o, navigationBehaviorOptions: e } = Ni(t)
      ? { redirectTo: t, navigationBehaviorOptions: void 0 }
      : t,
    i = Jm(!1, Xt.Redirect);
  return (i.url = o), (i.navigationBehaviorOptions = e), i;
}
function Jm(n, t) {
  let o = new Error(`NavigationCancelingError: ${n || ""}`);
  return (o[Km] = !0), (o.cancellationCode = t), o;
}
function cb(n) {
  return th(n) && Ni(n.url);
}
function th(n) {
  return !!n && n[Km];
}
var lb = (n, t, o, e) =>
    B(
      (i) => (
        new _c(t, i.targetRouterState, i.currentRouterState, o, e).activate(n),
        i
      )
    ),
  _c = class {
    constructor(t, o, e, i, r) {
      (this.routeReuseStrategy = t),
        (this.futureState = o),
        (this.currState = e),
        (this.forwardEvent = i),
        (this.inputBindingEnabled = r);
    }
    activate(t) {
      let o = this.futureState._root,
        e = this.currState ? this.currState._root : null;
      this.deactivateChildRoutes(o, e, t),
        Zs(this.futureState.root),
        this.activateChildRoutes(o, e, t);
    }
    deactivateChildRoutes(t, o, e) {
      let i = an(o);
      t.children.forEach((r) => {
        let a = r.value.outlet;
        this.deactivateRoutes(r, i[a], e), delete i[a];
      }),
        Object.values(i).forEach((r) => {
          this.deactivateRouteAndItsChildren(r, e);
        });
    }
    deactivateRoutes(t, o, e) {
      let i = t.value,
        r = o ? o.value : null;
      if (i === r)
        if (i.component) {
          let a = e.getContext(i.outlet);
          a && this.deactivateChildRoutes(t, o, a.children);
        } else this.deactivateChildRoutes(t, o, e);
      else r && this.deactivateRouteAndItsChildren(o, e);
    }
    deactivateRouteAndItsChildren(t, o) {
      t.value.component &&
      this.routeReuseStrategy.shouldDetach(t.value.snapshot)
        ? this.detachAndStoreRouteSubtree(t, o)
        : this.deactivateRouteAndOutlet(t, o);
    }
    detachAndStoreRouteSubtree(t, o) {
      let e = o.getContext(t.value.outlet),
        i = e && t.value.component ? e.children : o,
        r = an(t);
      for (let a of Object.values(r)) this.deactivateRouteAndItsChildren(a, i);
      if (e && e.outlet) {
        let a = e.outlet.detach(),
          s = e.children.onOutletDeactivated();
        this.routeReuseStrategy.store(t.value.snapshot, {
          componentRef: a,
          route: t,
          contexts: s,
        });
      }
    }
    deactivateRouteAndOutlet(t, o) {
      let e = o.getContext(t.value.outlet),
        i = e && t.value.component ? e.children : o,
        r = an(t);
      for (let a of Object.values(r)) this.deactivateRouteAndItsChildren(a, i);
      e &&
        (e.outlet && (e.outlet.deactivate(), e.children.onOutletDeactivated()),
        (e.attachRef = null),
        (e.route = null));
    }
    activateChildRoutes(t, o, e) {
      let i = an(o);
      t.children.forEach((r) => {
        this.activateRoutes(r, i[r.value.outlet], e),
          this.forwardEvent(new hc(r.value.snapshot));
      }),
        t.children.length && this.forwardEvent(new dc(t.value.snapshot));
    }
    activateRoutes(t, o, e) {
      let i = t.value,
        r = o ? o.value : null;
      if ((Zs(i), i === r))
        if (i.component) {
          let a = e.getOrCreateContext(i.outlet);
          this.activateChildRoutes(t, o, a.children);
        } else this.activateChildRoutes(t, o, e);
      else if (i.component) {
        let a = e.getOrCreateContext(i.outlet);
        if (this.routeReuseStrategy.shouldAttach(i.snapshot)) {
          let s = this.routeReuseStrategy.retrieve(i.snapshot);
          this.routeReuseStrategy.store(i.snapshot, null),
            a.children.onOutletReAttached(s.contexts),
            (a.attachRef = s.componentRef),
            (a.route = s.route.value),
            a.outlet && a.outlet.attach(s.componentRef, s.route.value),
            Zs(s.route.value),
            this.activateChildRoutes(t, null, a.children);
        } else
          (a.attachRef = null),
            (a.route = i),
            a.outlet && a.outlet.activateWith(i, a.injector),
            this.activateChildRoutes(t, null, a.children);
      } else this.activateChildRoutes(t, null, e);
    }
  },
  na = class {
    constructor(t) {
      (this.path = t), (this.route = this.path[this.path.length - 1]);
    }
  },
  ln = class {
    constructor(t, o) {
      (this.component = t), (this.route = o);
    }
  };
function db(n, t, o) {
  let e = n._root,
    i = t ? t._root : null;
  return fo(e, i, o, [e.value]);
}
function mb(n) {
  let t = n.routeConfig ? n.routeConfig.canActivateChild : null;
  return !t || t.length === 0 ? null : { node: n, guards: t };
}
function fn(n, t) {
  let o = Symbol(),
    e = t.get(n, o);
  return e === o ? (typeof n == "function" && !md(n) ? n : t.get(n)) : e;
}
function fo(
  n,
  t,
  o,
  e,
  i = { canDeactivateChecks: [], canActivateChecks: [] }
) {
  let r = an(t);
  return (
    n.children.forEach((a) => {
      hb(a, r[a.value.outlet], o, e.concat([a.value]), i),
        delete r[a.value.outlet];
    }),
    Object.entries(r).forEach(([a, s]) => vo(s, o.getContext(a), i)),
    i
  );
}
function hb(
  n,
  t,
  o,
  e,
  i = { canDeactivateChecks: [], canActivateChecks: [] }
) {
  let r = n.value,
    a = t ? t.value : null,
    s = o ? o.getContext(n.value.outlet) : null;
  if (a && r.routeConfig === a.routeConfig) {
    let c = ub(a, r, r.routeConfig.runGuardsAndResolvers);
    c
      ? i.canActivateChecks.push(new na(e))
      : ((r.data = a.data), (r._resolvedData = a._resolvedData)),
      r.component ? fo(n, t, s ? s.children : null, e, i) : fo(n, t, o, e, i),
      c &&
        s &&
        s.outlet &&
        s.outlet.isActivated &&
        i.canDeactivateChecks.push(new ln(s.outlet.component, a));
  } else
    a && vo(t, s, i),
      i.canActivateChecks.push(new na(e)),
      r.component
        ? fo(n, null, s ? s.children : null, e, i)
        : fo(n, null, o, e, i);
  return i;
}
function ub(n, t, o) {
  if (typeof o == "function") return o(n, t);
  switch (o) {
    case "pathParamsChange":
      return !Li(n.url, t.url);
    case "pathParamsOrQueryParamsChange":
      return !Li(n.url, t.url) || !ye(n.queryParams, t.queryParams);
    case "always":
      return !0;
    case "paramsOrQueryParamsChange":
      return !gc(n, t) || !ye(n.queryParams, t.queryParams);
    case "paramsChange":
    default:
      return !gc(n, t);
  }
}
function vo(n, t, o) {
  let e = an(n),
    i = n.value;
  Object.entries(e).forEach(([r, a]) => {
    i.component
      ? t
        ? vo(a, t.children.getContext(r), o)
        : vo(a, null, o)
      : vo(a, t, o);
  }),
    i.component
      ? t && t.outlet && t.outlet.isActivated
        ? o.canDeactivateChecks.push(new ln(t.outlet.component, i))
        : o.canDeactivateChecks.push(new ln(null, i))
      : o.canDeactivateChecks.push(new ln(null, i));
}
function Oo(n) {
  return typeof n == "function";
}
function pb(n) {
  return typeof n == "boolean";
}
function fb(n) {
  return n && Oo(n.canLoad);
}
function gb(n) {
  return n && Oo(n.canActivate);
}
function bb(n) {
  return n && Oo(n.canActivateChild);
}
function _b(n) {
  return n && Oo(n.canDeactivate);
}
function vb(n) {
  return n && Oo(n.canMatch);
}
function eh(n) {
  return n instanceof ad || n?.name === "EmptyError";
}
var Hr = Symbol("INITIAL_VALUE");
function pn() {
  return Ft((n) =>
    Xi(n.map((t) => t.pipe(_t(1), te(Hr)))).pipe(
      B((t) => {
        for (let o of t)
          if (o !== !0) {
            if (o === Hr) return Hr;
            if (o === !1 || xb(o)) return o;
          }
        return !0;
      }),
      ht((t) => t !== Hr),
      _t(1)
    )
  );
}
function xb(n) {
  return Ni(n) || n instanceof Co;
}
function yb(n, t) {
  return Wt((o) => {
    let {
      targetSnapshot: e,
      currentSnapshot: i,
      guards: { canActivateChecks: r, canDeactivateChecks: a },
    } = o;
    return a.length === 0 && r.length === 0
      ? I(nt(b({}, o), { guardsResult: !0 }))
      : wb(a, e, i, n).pipe(
          Wt((s) => (s && pb(s) ? kb(e, r, n, t) : I(s))),
          B((s) => nt(b({}, o), { guardsResult: s }))
        );
  });
}
function wb(n, t, o, e) {
  return Rt(n).pipe(
    Wt((i) => Db(i.component, i.route, o, t, e)),
    Ge((i) => i !== !0, !0)
  );
}
function kb(n, t, o, e) {
  return Rt(t).pipe(
    qe((i) =>
      fr(
        Eb(i.route.parent, e),
        Cb(i.route, e),
        Ib(n, i.path, o),
        Sb(n, i.route, o)
      )
    ),
    Ge((i) => i !== !0, !0)
  );
}
function Cb(n, t) {
  return n !== null && t && t(new mc(n)), I(!0);
}
function Eb(n, t) {
  return n !== null && t && t(new lc(n)), I(!0);
}
function Sb(n, t, o) {
  let e = t.routeConfig ? t.routeConfig.canActivate : null;
  if (!e || e.length === 0) return I(!0);
  let i = e.map((r) =>
    De(() => {
      let a = Mo(t) ?? o,
        s = fn(r, a),
        c = gb(s) ? s.canActivate(t, n) : ee(a, () => s(t, n));
      return ri(c).pipe(Ge());
    })
  );
  return I(i).pipe(pn());
}
function Ib(n, t, o) {
  let e = t[t.length - 1],
    r = t
      .slice(0, t.length - 1)
      .reverse()
      .map((a) => mb(a))
      .filter((a) => a !== null)
      .map((a) =>
        De(() => {
          let s = a.guards.map((c) => {
            let l = Mo(a.node) ?? o,
              m = fn(c, l),
              f = bb(m) ? m.canActivateChild(e, n) : ee(l, () => m(e, n));
            return ri(f).pipe(Ge());
          });
          return I(s).pipe(pn());
        })
      );
  return I(r).pipe(pn());
}
function Db(n, t, o, e, i) {
  let r = t && t.routeConfig ? t.routeConfig.canDeactivate : null;
  if (!r || r.length === 0) return I(!0);
  let a = r.map((s) => {
    let c = Mo(t) ?? i,
      l = fn(s, c),
      m = _b(l) ? l.canDeactivate(n, t, o, e) : ee(c, () => l(n, t, o, e));
    return ri(m).pipe(Ge());
  });
  return I(a).pipe(pn());
}
function Ab(n, t, o, e) {
  let i = t.canLoad;
  if (i === void 0 || i.length === 0) return I(!0);
  let r = i.map((a) => {
    let s = fn(a, n),
      c = fb(s) ? s.canLoad(t, o) : ee(n, () => s(t, o));
    return ri(c);
  });
  return I(r).pipe(pn(), ih(e));
}
function ih(n) {
  return od(
    lt((t) => {
      if (typeof t != "boolean") throw ia(n, t);
    }),
    B((t) => t === !0)
  );
}
function Mb(n, t, o, e) {
  let i = t.canMatch;
  if (!i || i.length === 0) return I(!0);
  let r = i.map((a) => {
    let s = fn(a, n),
      c = vb(s) ? s.canMatch(t, o) : ee(n, () => s(t, o));
    return ri(c);
  });
  return I(r).pipe(pn(), ih(e));
}
var Eo = class {
    constructor(t) {
      this.segmentGroup = t || null;
    }
  },
  So = class extends Error {
    constructor(t) {
      super(), (this.urlTree = t);
    }
  };
function rn(n) {
  return jt(new Eo(n));
}
function Tb(n) {
  return jt(new at(4e3, !1));
}
function Ob(n) {
  return jt(Jm(!1, Xt.GuardRejected));
}
var vc = class {
    constructor(t, o) {
      (this.urlSerializer = t), (this.urlTree = o);
    }
    lineralizeSegments(t, o) {
      let e = [],
        i = o.root;
      for (;;) {
        if (((e = e.concat(i.segments)), i.numberOfChildren === 0)) return I(e);
        if (i.numberOfChildren > 1 || !i.children[W])
          return Tb(`${t.redirectTo}`);
        i = i.children[W];
      }
    }
    applyRedirectCommands(t, o, e, i, r) {
      if (typeof o != "string") {
        let s = o,
          {
            queryParams: c,
            fragment: l,
            routeConfig: m,
            url: f,
            outlet: g,
            params: k,
            data: S,
            title: $,
          } = i,
          N = ee(r, () =>
            s({
              params: k,
              data: S,
              queryParams: c,
              fragment: l,
              routeConfig: m,
              url: f,
              outlet: g,
              title: $,
            })
          );
        if (N instanceof Le) throw new So(N);
        o = N;
      }
      let a = this.applyRedirectCreateUrlTree(
        o,
        this.urlSerializer.parse(o),
        t,
        e
      );
      if (o[0] === "/") throw new So(a);
      return a;
    }
    applyRedirectCreateUrlTree(t, o, e, i) {
      let r = this.createSegmentGroup(t, o.root, e, i);
      return new Le(
        r,
        this.createQueryParams(o.queryParams, this.urlTree.queryParams),
        o.fragment
      );
    }
    createQueryParams(t, o) {
      let e = {};
      return (
        Object.entries(t).forEach(([i, r]) => {
          if (typeof r == "string" && r[0] === ":") {
            let s = r.substring(1);
            e[i] = o[s];
          } else e[i] = r;
        }),
        e
      );
    }
    createSegmentGroup(t, o, e, i) {
      let r = this.createSegments(t, o.segments, e, i),
        a = {};
      return (
        Object.entries(o.children).forEach(([s, c]) => {
          a[s] = this.createSegmentGroup(t, c, e, i);
        }),
        new rt(r, a)
      );
    }
    createSegments(t, o, e, i) {
      return o.map((r) =>
        r.path[0] === ":" ? this.findPosParam(t, r, i) : this.findOrReturn(r, e)
      );
    }
    findPosParam(t, o, e) {
      let i = e[o.path.substring(1)];
      if (!i) throw new at(4001, !1);
      return i;
    }
    findOrReturn(t, o) {
      let e = 0;
      for (let i of o) {
        if (i.path === t.path) return o.splice(e), i;
        e++;
      }
      return t;
    }
  },
  xc = {
    matched: !1,
    consumedSegments: [],
    remainingSegments: [],
    parameters: {},
    positionalParamSegments: {},
  };
function Rb(n, t, o, e, i) {
  let r = nh(n, t, o);
  return r.matched
    ? ((e = ib(t, e)),
      Mb(e, t, o, i).pipe(B((a) => (a === !0 ? r : b({}, xc)))))
    : I(r);
}
function nh(n, t, o) {
  if (t.path === "**") return Fb(o);
  if (t.path === "")
    return t.pathMatch === "full" && (n.hasChildren() || o.length > 0)
      ? b({}, xc)
      : {
          matched: !0,
          consumedSegments: [],
          remainingSegments: o,
          parameters: {},
          positionalParamSegments: {},
        };
  let i = (t.matcher || Mg)(o, n, t);
  if (!i) return b({}, xc);
  let r = {};
  Object.entries(i.posParams ?? {}).forEach(([s, c]) => {
    r[s] = c.path;
  });
  let a =
    i.consumed.length > 0
      ? b(b({}, r), i.consumed[i.consumed.length - 1].parameters)
      : r;
  return {
    matched: !0,
    consumedSegments: i.consumed,
    remainingSegments: o.slice(i.consumed.length),
    parameters: a,
    positionalParamSegments: i.posParams ?? {},
  };
}
function Fb(n) {
  return {
    matched: !0,
    parameters: n.length > 0 ? Lm(n).parameters : {},
    consumedSegments: n,
    remainingSegments: [],
    positionalParamSegments: {},
  };
}
function Mm(n, t, o, e) {
  return o.length > 0 && Nb(n, o, e)
    ? {
        segmentGroup: new rt(t, Lb(e, new rt(o, n.children))),
        slicedSegments: [],
      }
    : o.length === 0 && jb(n, o, e)
    ? {
        segmentGroup: new rt(n.segments, Pb(n, o, e, n.children)),
        slicedSegments: o,
      }
    : { segmentGroup: new rt(n.segments, n.children), slicedSegments: o };
}
function Pb(n, t, o, e) {
  let i = {};
  for (let r of o)
    if (aa(n, t, r) && !e[he(r)]) {
      let a = new rt([], {});
      i[he(r)] = a;
    }
  return b(b({}, e), i);
}
function Lb(n, t) {
  let o = {};
  o[W] = t;
  for (let e of n)
    if (e.path === "" && he(e) !== W) {
      let i = new rt([], {});
      o[he(e)] = i;
    }
  return o;
}
function Nb(n, t, o) {
  return o.some((e) => aa(n, t, e) && he(e) !== W);
}
function jb(n, t, o) {
  return o.some((e) => aa(n, t, e));
}
function aa(n, t, o) {
  return (n.hasChildren() || t.length > 0) && o.pathMatch === "full"
    ? !1
    : o.path === "";
}
function zb(n, t, o) {
  return t.length === 0 && !n.children[o];
}
var yc = class {};
function Vb(n, t, o, e, i, r, a = "emptyOnly") {
  return new wc(n, t, o, e, i, a, r).recognize();
}
var Bb = 31,
  wc = class {
    constructor(t, o, e, i, r, a, s) {
      (this.injector = t),
        (this.configLoader = o),
        (this.rootComponentType = e),
        (this.config = i),
        (this.urlTree = r),
        (this.paramsInheritanceStrategy = a),
        (this.urlSerializer = s),
        (this.applyRedirects = new vc(this.urlSerializer, this.urlTree)),
        (this.absoluteRedirectCount = 0),
        (this.allowRedirects = !0);
    }
    noMatchError(t) {
      return new at(4002, `'${t.segmentGroup}'`);
    }
    recognize() {
      let t = Mm(this.urlTree.root, [], [], this.config).segmentGroup;
      return this.match(t).pipe(
        B(({ children: o, rootSnapshot: e }) => {
          let i = new Yt(e, o),
            r = new ea("", i),
            a = Xg(e, [], this.urlTree.queryParams, this.urlTree.fragment);
          return (
            (a.queryParams = this.urlTree.queryParams),
            (r.url = this.urlSerializer.serialize(a)),
            { state: r, tree: a }
          );
        })
      );
    }
    match(t) {
      let o = new cn(
        [],
        Object.freeze({}),
        Object.freeze(b({}, this.urlTree.queryParams)),
        this.urlTree.fragment,
        Object.freeze({}),
        W,
        this.rootComponentType,
        null,
        {}
      );
      return this.processSegmentGroup(this.injector, this.config, t, W, o).pipe(
        B((e) => ({ children: e, rootSnapshot: o })),
        Dt((e) => {
          if (e instanceof So)
            return (this.urlTree = e.urlTree), this.match(e.urlTree.root);
          throw e instanceof Eo ? this.noMatchError(e) : e;
        })
      );
    }
    processSegmentGroup(t, o, e, i, r) {
      return e.segments.length === 0 && e.hasChildren()
        ? this.processChildren(t, o, e, r)
        : this.processSegment(t, o, e, e.segments, i, !0, r).pipe(
            B((a) => (a instanceof Yt ? [a] : []))
          );
    }
    processChildren(t, o, e, i) {
      let r = [];
      for (let a of Object.keys(e.children))
        a === "primary" ? r.unshift(a) : r.push(a);
      return Rt(r).pipe(
        qe((a) => {
          let s = e.children[a],
            c = nb(o, a);
          return this.processSegmentGroup(t, c, s, a, i);
        }),
        ld((a, s) => (a.push(...s), a)),
        vs(null),
        cd(),
        Wt((a) => {
          if (a === null) return rn(e);
          let s = oh(a);
          return Ub(s), I(s);
        })
      );
    }
    processSegment(t, o, e, i, r, a, s) {
      return Rt(o).pipe(
        qe((c) =>
          this.processSegmentAgainstRoute(
            c._injector ?? t,
            o,
            c,
            e,
            i,
            r,
            a,
            s
          ).pipe(
            Dt((l) => {
              if (l instanceof Eo) return I(null);
              throw l;
            })
          )
        ),
        Ge((c) => !!c),
        Dt((c) => {
          if (eh(c)) return zb(e, i, r) ? I(new yc()) : rn(e);
          throw c;
        })
      );
    }
    processSegmentAgainstRoute(t, o, e, i, r, a, s, c) {
      return he(e) !== a && (a === W || !aa(i, r, e))
        ? rn(i)
        : e.redirectTo === void 0
        ? this.matchSegmentAgainstRoute(t, i, e, r, a, c)
        : this.allowRedirects && s
        ? this.expandSegmentAgainstRouteUsingRedirect(t, i, o, e, r, a, c)
        : rn(i);
    }
    expandSegmentAgainstRouteUsingRedirect(t, o, e, i, r, a, s) {
      let {
        matched: c,
        parameters: l,
        consumedSegments: m,
        positionalParamSegments: f,
        remainingSegments: g,
      } = nh(o, i, r);
      if (!c) return rn(o);
      typeof i.redirectTo == "string" &&
        i.redirectTo[0] === "/" &&
        (this.absoluteRedirectCount++,
        this.absoluteRedirectCount > Bb && (this.allowRedirects = !1));
      let k = new cn(
          r,
          l,
          Object.freeze(b({}, this.urlTree.queryParams)),
          this.urlTree.fragment,
          Tm(i),
          he(i),
          i.component ?? i._loadedComponent ?? null,
          i,
          Om(i)
        ),
        S = ta(k, s, this.paramsInheritanceStrategy);
      (k.params = Object.freeze(S.params)), (k.data = Object.freeze(S.data));
      let $ = this.applyRedirects.applyRedirectCommands(
        m,
        i.redirectTo,
        f,
        k,
        t
      );
      return this.applyRedirects
        .lineralizeSegments(i, $)
        .pipe(Wt((N) => this.processSegment(t, e, o, N.concat(g), a, !1, s)));
    }
    matchSegmentAgainstRoute(t, o, e, i, r, a) {
      let s = Rb(o, e, i, t, this.urlSerializer);
      return (
        e.path === "**" && (o.children = {}),
        s.pipe(
          Ft((c) =>
            c.matched
              ? ((t = e._injector ?? t),
                this.getChildConfig(t, e, i).pipe(
                  Ft(({ routes: l }) => {
                    let m = e._loadedInjector ?? t,
                      {
                        parameters: f,
                        consumedSegments: g,
                        remainingSegments: k,
                      } = c,
                      S = new cn(
                        g,
                        f,
                        Object.freeze(b({}, this.urlTree.queryParams)),
                        this.urlTree.fragment,
                        Tm(e),
                        he(e),
                        e.component ?? e._loadedComponent ?? null,
                        e,
                        Om(e)
                      ),
                      $ = ta(S, a, this.paramsInheritanceStrategy);
                    (S.params = Object.freeze($.params)),
                      (S.data = Object.freeze($.data));
                    let { segmentGroup: N, slicedSegments: U } = Mm(o, g, k, l);
                    if (U.length === 0 && N.hasChildren())
                      return this.processChildren(m, l, N, S).pipe(
                        B((de) => new Yt(S, de))
                      );
                    if (l.length === 0 && U.length === 0)
                      return I(new Yt(S, []));
                    let It = he(e) === r;
                    return this.processSegment(
                      m,
                      l,
                      N,
                      U,
                      It ? W : r,
                      !0,
                      S
                    ).pipe(B((de) => new Yt(S, de instanceof Yt ? [de] : [])));
                  })
                ))
              : rn(o)
          )
        )
      );
    }
    getChildConfig(t, o, e) {
      return o.children
        ? I({ routes: o.children, injector: t })
        : o.loadChildren
        ? o._loadedRoutes !== void 0
          ? I({ routes: o._loadedRoutes, injector: o._loadedInjector })
          : Ab(t, o, e, this.urlSerializer).pipe(
              Wt((i) =>
                i
                  ? this.configLoader.loadChildren(t, o).pipe(
                      lt((r) => {
                        (o._loadedRoutes = r.routes),
                          (o._loadedInjector = r.injector);
                      })
                    )
                  : Ob(o)
              )
            )
        : I({ routes: [], injector: t });
    }
  };
function Ub(n) {
  n.sort((t, o) =>
    t.value.outlet === W
      ? -1
      : o.value.outlet === W
      ? 1
      : t.value.outlet.localeCompare(o.value.outlet)
  );
}
function Hb(n) {
  let t = n.value.routeConfig;
  return t && t.path === "";
}
function oh(n) {
  let t = [],
    o = new Set();
  for (let e of n) {
    if (!Hb(e)) {
      t.push(e);
      continue;
    }
    let i = t.find((r) => e.value.routeConfig === r.value.routeConfig);
    i !== void 0 ? (i.children.push(...e.children), o.add(i)) : t.push(e);
  }
  for (let e of o) {
    let i = oh(e.children);
    t.push(new Yt(e.value, i));
  }
  return t.filter((e) => !o.has(e));
}
function Tm(n) {
  return n.data || {};
}
function Om(n) {
  return n.resolve || {};
}
function $b(n, t, o, e, i, r) {
  return Wt((a) =>
    Vb(n, t, o, e, a.extractedUrl, i, r).pipe(
      B(({ state: s, tree: c }) =>
        nt(b({}, a), { targetSnapshot: s, urlAfterRedirects: c })
      )
    )
  );
}
function Wb(n, t) {
  return Wt((o) => {
    let {
      targetSnapshot: e,
      guards: { canActivateChecks: i },
    } = o;
    if (!i.length) return I(o);
    let r = new Set(i.map((c) => c.route)),
      a = new Set();
    for (let c of r) if (!a.has(c)) for (let l of rh(c)) a.add(l);
    let s = 0;
    return Rt(a).pipe(
      qe((c) =>
        r.has(c)
          ? qb(c, e, n, t)
          : ((c.data = ta(c, c.parent, n).resolve), I(void 0))
      ),
      lt(() => s++),
      xs(1),
      Wt((c) => (s === a.size ? I(o) : fe))
    );
  });
}
function rh(n) {
  let t = n.children.map((o) => rh(o)).flat();
  return [n, ...t];
}
function qb(n, t, o, e) {
  let i = n.routeConfig,
    r = n._resolve;
  return (
    i?.title !== void 0 && !Qm(i) && (r[Do] = i.title),
    Gb(r, n, t, e).pipe(
      B(
        (a) => (
          (n._resolvedData = a), (n.data = ta(n, n.parent, o).resolve), null
        )
      )
    )
  );
}
function Gb(n, t, o, e) {
  let i = Js(n);
  if (i.length === 0) return I({});
  let r = {};
  return Rt(i).pipe(
    Wt((a) =>
      Yb(n[a], t, o, e).pipe(
        Ge(),
        lt((s) => {
          if (s instanceof Co) throw ia(new mn(), s);
          r[a] = s;
        })
      )
    ),
    xs(1),
    sd(r),
    Dt((a) => (eh(a) ? fe : jt(a)))
  );
}
function Yb(n, t, o, e) {
  let i = Mo(t) ?? e,
    r = fn(n, i),
    a = r.resolve ? r.resolve(t, o) : ee(i, () => r(t, o));
  return ri(a);
}
function Qs(n) {
  return Ft((t) => {
    let o = n(t);
    return o ? Rt(o).pipe(B(() => t)) : I(t);
  });
}
var ah = (() => {
    let t = class t {
      buildTitle(e) {
        let i,
          r = e.root;
        for (; r !== void 0; )
          (i = this.getResolvedTitleForRoute(r) ?? i),
            (r = r.children.find((a) => a.outlet === W));
        return i;
      }
      getResolvedTitleForRoute(e) {
        return e.data[Do];
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵprov = x({ token: t, factory: () => _(Xb), providedIn: "root" }));
    let n = t;
    return n;
  })(),
  Xb = (() => {
    let t = class t extends ah {
      constructor(e) {
        super(), (this.title = e);
      }
      updateTitle(e) {
        let i = this.buildTitle(e);
        i !== void 0 && this.title.setTitle(i);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(h(km));
    }),
      (t.ɵprov = x({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })(),
  Ro = new w("", { providedIn: "root", factory: () => ({}) }),
  Zb = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵcmp = z({
        type: t,
        selectors: [["ng-component"]],
        standalone: !0,
        features: [V],
        decls: 1,
        vars: 0,
        template: function (i, r) {
          i & 1 && O(0, "router-outlet");
        },
        dependencies: [Ec],
        encapsulation: 2,
      }));
    let n = t;
    return n;
  })();
function Sc(n) {
  let t = n.children && n.children.map(Sc),
    o = t ? nt(b({}, n), { children: t }) : b({}, n);
  return (
    !o.component &&
      !o.loadComponent &&
      (t || o.loadChildren) &&
      o.outlet &&
      o.outlet !== W &&
      (o.component = Zb),
    o
  );
}
var Io = new w(""),
  Ic = (() => {
    let t = class t {
      constructor() {
        (this.componentLoaders = new WeakMap()),
          (this.childrenLoaders = new WeakMap()),
          (this.compiler = _(Dr));
      }
      loadComponent(e) {
        if (this.componentLoaders.get(e)) return this.componentLoaders.get(e);
        if (e._loadedComponent) return I(e._loadedComponent);
        this.onLoadStartListener && this.onLoadStartListener(e);
        let i = ri(e.loadComponent()).pipe(
            B(sh),
            lt((a) => {
              this.onLoadEndListener && this.onLoadEndListener(e),
                (e._loadedComponent = a);
            }),
            Ae(() => {
              this.componentLoaders.delete(e);
            })
          ),
          r = new ur(i, () => new E()).pipe(fs());
        return this.componentLoaders.set(e, r), r;
      }
      loadChildren(e, i) {
        if (this.childrenLoaders.get(i)) return this.childrenLoaders.get(i);
        if (i._loadedRoutes)
          return I({ routes: i._loadedRoutes, injector: i._loadedInjector });
        this.onLoadStartListener && this.onLoadStartListener(i);
        let a = Qb(i, this.compiler, e, this.onLoadEndListener).pipe(
            Ae(() => {
              this.childrenLoaders.delete(i);
            })
          ),
          s = new ur(a, () => new E()).pipe(fs());
        return this.childrenLoaders.set(i, s), s;
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵprov = x({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })();
function Qb(n, t, o, e) {
  return ri(n.loadChildren()).pipe(
    B(sh),
    Wt((i) =>
      i instanceof Cd || Array.isArray(i) ? I(i) : Rt(t.compileModuleAsync(i))
    ),
    B((i) => {
      e && e(n);
      let r,
        a,
        s = !1;
      return (
        Array.isArray(i)
          ? ((a = i), (s = !0))
          : ((r = i.create(o).injector),
            (a = r.get(Io, [], { optional: !0, self: !0 }).flat())),
        { routes: a.map(Sc), injector: r }
      );
    })
  );
}
function Kb(n) {
  return n && typeof n == "object" && "default" in n;
}
function sh(n) {
  return Kb(n) ? n.default : n;
}
var Dc = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵprov = x({ token: t, factory: () => _(Jb), providedIn: "root" }));
    let n = t;
    return n;
  })(),
  Jb = (() => {
    let t = class t {
      shouldProcessUrl(e) {
        return !0;
      }
      extract(e) {
        return e;
      }
      merge(e, i) {
        return e;
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵprov = x({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })(),
  ch = new w(""),
  lh = new w("");
function t_(n, t, o) {
  let e = n.get(lh),
    i = n.get(R);
  return n.get(D).runOutsideAngular(() => {
    if (!i.startViewTransition || e.skipNextTransition)
      return (e.skipNextTransition = !1), new Promise((l) => setTimeout(l));
    let r,
      a = new Promise((l) => {
        r = l;
      }),
      s = i.startViewTransition(() => (r(), e_(n))),
      { onViewTransitionCreated: c } = e;
    return c && ee(n, () => c({ transition: s, from: t, to: o })), a;
  });
}
function e_(n) {
  return new Promise((t) => {
    Ed({ read: () => setTimeout(t) }, { injector: n });
  });
}
var i_ = new w(""),
  Ac = (() => {
    let t = class t {
      get hasRequestedNavigation() {
        return this.navigationId !== 0;
      }
      constructor() {
        (this.currentNavigation = null),
          (this.currentTransition = null),
          (this.lastSuccessfulNavigation = null),
          (this.events = new E()),
          (this.transitionAbortSubject = new E()),
          (this.configLoader = _(Ic)),
          (this.environmentInjector = _(Mi)),
          (this.urlSerializer = _(Ao)),
          (this.rootContexts = _(To)),
          (this.location = _(Re)),
          (this.inputBindingEnabled = _(ra, { optional: !0 }) !== null),
          (this.titleStrategy = _(ah)),
          (this.options = _(Ro, { optional: !0 }) || {}),
          (this.paramsInheritanceStrategy =
            this.options.paramsInheritanceStrategy || "emptyOnly"),
          (this.urlHandlingStrategy = _(Dc)),
          (this.createViewTransition = _(ch, { optional: !0 })),
          (this.navigationErrorHandler = _(i_, { optional: !0 })),
          (this.navigationId = 0),
          (this.afterPreactivation = () => I(void 0)),
          (this.rootComponentType = null);
        let e = (r) => this.events.next(new sc(r)),
          i = (r) => this.events.next(new cc(r));
        (this.configLoader.onLoadEndListener = i),
          (this.configLoader.onLoadStartListener = e);
      }
      complete() {
        this.transitions?.complete();
      }
      handleNavigationRequest(e) {
        let i = ++this.navigationId;
        this.transitions?.next(
          nt(b(b({}, this.transitions.value), e), { id: i })
        );
      }
      setupNavigations(e, i, r) {
        return (
          (this.transitions = new Nt({
            id: 0,
            currentUrlTree: i,
            currentRawUrl: i,
            extractedUrl: this.urlHandlingStrategy.extract(i),
            urlAfterRedirects: this.urlHandlingStrategy.extract(i),
            rawUrl: i,
            extras: {},
            resolve: () => {},
            reject: () => {},
            promise: Promise.resolve(!0),
            source: _o,
            restoredState: null,
            currentSnapshot: r.snapshot,
            targetSnapshot: null,
            currentRouterState: r,
            targetRouterState: null,
            guards: { canActivateChecks: [], canDeactivateChecks: [] },
            guardsResult: null,
          })),
          this.transitions.pipe(
            ht((a) => a.id !== 0),
            B((a) =>
              nt(b({}, a), {
                extractedUrl: this.urlHandlingStrategy.extract(a.rawUrl),
              })
            ),
            Ft((a) => {
              let s = !1,
                c = !1;
              return I(a).pipe(
                Ft((l) => {
                  if (this.navigationId > a.id)
                    return (
                      this.cancelNavigationTransition(
                        a,
                        "",
                        Xt.SupersededByNewNavigation
                      ),
                      fe
                    );
                  (this.currentTransition = a),
                    (this.currentNavigation = {
                      id: l.id,
                      initialUrl: l.rawUrl,
                      extractedUrl: l.extractedUrl,
                      targetBrowserUrl:
                        typeof l.extras.browserUrl == "string"
                          ? this.urlSerializer.parse(l.extras.browserUrl)
                          : l.extras.browserUrl,
                      trigger: l.source,
                      extras: l.extras,
                      previousNavigation: this.lastSuccessfulNavigation
                        ? nt(b({}, this.lastSuccessfulNavigation), {
                            previousNavigation: null,
                          })
                        : null,
                    });
                  let m =
                      !e.navigated ||
                      this.isUpdatingInternalState() ||
                      this.isUpdatedBrowserUrl(),
                    f = l.extras.onSameUrlNavigation ?? e.onSameUrlNavigation;
                  if (!m && f !== "reload") {
                    let g = "";
                    return (
                      this.events.next(
                        new oi(
                          l.id,
                          this.urlSerializer.serialize(l.rawUrl),
                          g,
                          Xr.IgnoredSameUrlNavigation
                        )
                      ),
                      l.resolve(!1),
                      fe
                    );
                  }
                  if (this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))
                    return I(l).pipe(
                      Ft((g) => {
                        let k = this.transitions?.getValue();
                        return (
                          this.events.next(
                            new hn(
                              g.id,
                              this.urlSerializer.serialize(g.extractedUrl),
                              g.source,
                              g.restoredState
                            )
                          ),
                          k !== this.transitions?.getValue()
                            ? fe
                            : Promise.resolve(g)
                        );
                      }),
                      $b(
                        this.environmentInjector,
                        this.configLoader,
                        this.rootComponentType,
                        e.config,
                        this.urlSerializer,
                        this.paramsInheritanceStrategy
                      ),
                      lt((g) => {
                        (a.targetSnapshot = g.targetSnapshot),
                          (a.urlAfterRedirects = g.urlAfterRedirects),
                          (this.currentNavigation = nt(
                            b({}, this.currentNavigation),
                            { finalUrl: g.urlAfterRedirects }
                          ));
                        let k = new Zr(
                          g.id,
                          this.urlSerializer.serialize(g.extractedUrl),
                          this.urlSerializer.serialize(g.urlAfterRedirects),
                          g.targetSnapshot
                        );
                        this.events.next(k);
                      })
                    );
                  if (
                    m &&
                    this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)
                  ) {
                    let {
                        id: g,
                        extractedUrl: k,
                        source: S,
                        restoredState: $,
                        extras: N,
                      } = l,
                      U = new hn(g, this.urlSerializer.serialize(k), S, $);
                    this.events.next(U);
                    let It = Xm(this.rootComponentType).snapshot;
                    return (
                      (this.currentTransition = a =
                        nt(b({}, l), {
                          targetSnapshot: It,
                          urlAfterRedirects: k,
                          extras: nt(b({}, N), {
                            skipLocationChange: !1,
                            replaceUrl: !1,
                          }),
                        })),
                      (this.currentNavigation.finalUrl = k),
                      I(a)
                    );
                  } else {
                    let g = "";
                    return (
                      this.events.next(
                        new oi(
                          l.id,
                          this.urlSerializer.serialize(l.extractedUrl),
                          g,
                          Xr.IgnoredByUrlHandlingStrategy
                        )
                      ),
                      l.resolve(!1),
                      fe
                    );
                  }
                }),
                lt((l) => {
                  let m = new nc(
                    l.id,
                    this.urlSerializer.serialize(l.extractedUrl),
                    this.urlSerializer.serialize(l.urlAfterRedirects),
                    l.targetSnapshot
                  );
                  this.events.next(m);
                }),
                B(
                  (l) => (
                    (this.currentTransition = a =
                      nt(b({}, l), {
                        guards: db(
                          l.targetSnapshot,
                          l.currentSnapshot,
                          this.rootContexts
                        ),
                      })),
                    a
                  )
                ),
                yb(this.environmentInjector, (l) => this.events.next(l)),
                lt((l) => {
                  if (
                    ((a.guardsResult = l.guardsResult),
                    l.guardsResult && typeof l.guardsResult != "boolean")
                  )
                    throw ia(this.urlSerializer, l.guardsResult);
                  let m = new oc(
                    l.id,
                    this.urlSerializer.serialize(l.extractedUrl),
                    this.urlSerializer.serialize(l.urlAfterRedirects),
                    l.targetSnapshot,
                    !!l.guardsResult
                  );
                  this.events.next(m);
                }),
                ht((l) =>
                  l.guardsResult
                    ? !0
                    : (this.cancelNavigationTransition(l, "", Xt.GuardRejected),
                      !1)
                ),
                Qs((l) => {
                  if (l.guards.canActivateChecks.length)
                    return I(l).pipe(
                      lt((m) => {
                        let f = new rc(
                          m.id,
                          this.urlSerializer.serialize(m.extractedUrl),
                          this.urlSerializer.serialize(m.urlAfterRedirects),
                          m.targetSnapshot
                        );
                        this.events.next(f);
                      }),
                      Ft((m) => {
                        let f = !1;
                        return I(m).pipe(
                          Wb(
                            this.paramsInheritanceStrategy,
                            this.environmentInjector
                          ),
                          lt({
                            next: () => (f = !0),
                            complete: () => {
                              f ||
                                this.cancelNavigationTransition(
                                  m,
                                  "",
                                  Xt.NoDataFromResolver
                                );
                            },
                          })
                        );
                      }),
                      lt((m) => {
                        let f = new ac(
                          m.id,
                          this.urlSerializer.serialize(m.extractedUrl),
                          this.urlSerializer.serialize(m.urlAfterRedirects),
                          m.targetSnapshot
                        );
                        this.events.next(f);
                      })
                    );
                }),
                Qs((l) => {
                  let m = (f) => {
                    let g = [];
                    f.routeConfig?.loadComponent &&
                      !f.routeConfig._loadedComponent &&
                      g.push(
                        this.configLoader.loadComponent(f.routeConfig).pipe(
                          lt((k) => {
                            f.component = k;
                          }),
                          B(() => {})
                        )
                      );
                    for (let k of f.children) g.push(...m(k));
                    return g;
                  };
                  return Xi(m(l.targetSnapshot.root)).pipe(vs(null), _t(1));
                }),
                Qs(() => this.afterPreactivation()),
                Ft(() => {
                  let { currentSnapshot: l, targetSnapshot: m } = a,
                    f = this.createViewTransition?.(
                      this.environmentInjector,
                      l.root,
                      m.root
                    );
                  return f ? Rt(f).pipe(B(() => a)) : I(a);
                }),
                B((l) => {
                  let m = rb(
                    e.routeReuseStrategy,
                    l.targetSnapshot,
                    l.currentRouterState
                  );
                  return (
                    (this.currentTransition = a =
                      nt(b({}, l), { targetRouterState: m })),
                    (this.currentNavigation.targetRouterState = m),
                    a
                  );
                }),
                lt(() => {
                  this.events.next(new wo());
                }),
                lb(
                  this.rootContexts,
                  e.routeReuseStrategy,
                  (l) => this.events.next(l),
                  this.inputBindingEnabled
                ),
                _t(1),
                lt({
                  next: (l) => {
                    (s = !0),
                      (this.lastSuccessfulNavigation = this.currentNavigation),
                      this.events.next(
                        new we(
                          l.id,
                          this.urlSerializer.serialize(l.extractedUrl),
                          this.urlSerializer.serialize(l.urlAfterRedirects)
                        )
                      ),
                      this.titleStrategy?.updateTitle(
                        l.targetRouterState.snapshot
                      ),
                      l.resolve(!0);
                  },
                  complete: () => {
                    s = !0;
                  },
                }),
                tt(
                  this.transitionAbortSubject.pipe(
                    lt((l) => {
                      throw l;
                    })
                  )
                ),
                Ae(() => {
                  !s &&
                    !c &&
                    this.cancelNavigationTransition(
                      a,
                      "",
                      Xt.SupersededByNewNavigation
                    ),
                    this.currentTransition?.id === a.id &&
                      ((this.currentNavigation = null),
                      (this.currentTransition = null));
                }),
                Dt((l) => {
                  if (((c = !0), th(l)))
                    this.events.next(
                      new Pe(
                        a.id,
                        this.urlSerializer.serialize(a.extractedUrl),
                        l.message,
                        l.cancellationCode
                      )
                    ),
                      cb(l)
                        ? this.events.next(
                            new un(l.url, l.navigationBehaviorOptions)
                          )
                        : a.resolve(!1);
                  else {
                    let m = new yo(
                      a.id,
                      this.urlSerializer.serialize(a.extractedUrl),
                      l,
                      a.targetSnapshot ?? void 0
                    );
                    try {
                      let f = ee(this.environmentInjector, () =>
                        this.navigationErrorHandler?.(m)
                      );
                      if (f instanceof Co) {
                        let { message: g, cancellationCode: k } = ia(
                          this.urlSerializer,
                          f
                        );
                        this.events.next(
                          new Pe(
                            a.id,
                            this.urlSerializer.serialize(a.extractedUrl),
                            g,
                            k
                          )
                        ),
                          this.events.next(
                            new un(f.redirectTo, f.navigationBehaviorOptions)
                          );
                      } else {
                        this.events.next(m);
                        let g = e.errorHandler(l);
                        a.resolve(!!g);
                      }
                    } catch (f) {
                      this.options.resolveNavigationPromiseOnError
                        ? a.resolve(!1)
                        : a.reject(f);
                    }
                  }
                  return fe;
                })
              );
            })
          )
        );
      }
      cancelNavigationTransition(e, i, r) {
        let a = new Pe(
          e.id,
          this.urlSerializer.serialize(e.extractedUrl),
          i,
          r
        );
        this.events.next(a), e.resolve(!1);
      }
      isUpdatingInternalState() {
        return (
          this.currentTransition?.extractedUrl.toString() !==
          this.currentTransition?.currentUrlTree.toString()
        );
      }
      isUpdatedBrowserUrl() {
        let e = this.urlHandlingStrategy.extract(
            this.urlSerializer.parse(this.location.path(!0))
          ),
          i =
            this.currentNavigation?.targetBrowserUrl ??
            this.currentNavigation?.extractedUrl;
        return (
          e.toString() !== i?.toString() &&
          !this.currentNavigation?.extras.skipLocationChange
        );
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵprov = x({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })();
function n_(n) {
  return n !== _o;
}
var o_ = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵprov = x({ token: t, factory: () => _(r_), providedIn: "root" }));
    let n = t;
    return n;
  })(),
  kc = class {
    shouldDetach(t) {
      return !1;
    }
    store(t, o) {}
    shouldAttach(t) {
      return !1;
    }
    retrieve(t) {
      return null;
    }
    shouldReuseRoute(t, o) {
      return t.routeConfig === o.routeConfig;
    }
  },
  r_ = (() => {
    let t = class t extends kc {};
    (t.ɵfac = (() => {
      let e;
      return function (r) {
        return (e || (e = be(t)))(r || t);
      };
    })()),
      (t.ɵprov = x({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })(),
  dh = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵprov = x({ token: t, factory: () => _(a_), providedIn: "root" }));
    let n = t;
    return n;
  })(),
  a_ = (() => {
    let t = class t extends dh {
      constructor() {
        super(...arguments),
          (this.location = _(Re)),
          (this.urlSerializer = _(Ao)),
          (this.options = _(Ro, { optional: !0 }) || {}),
          (this.canceledNavigationResolution =
            this.options.canceledNavigationResolution || "replace"),
          (this.urlHandlingStrategy = _(Dc)),
          (this.urlUpdateStrategy =
            this.options.urlUpdateStrategy || "deferred"),
          (this.currentUrlTree = new Le()),
          (this.rawUrlTree = this.currentUrlTree),
          (this.currentPageId = 0),
          (this.lastSuccessfulId = -1),
          (this.routerState = Xm(null)),
          (this.stateMemento = this.createStateMemento());
      }
      getCurrentUrlTree() {
        return this.currentUrlTree;
      }
      getRawUrlTree() {
        return this.rawUrlTree;
      }
      restoredState() {
        return this.location.getState();
      }
      get browserPageId() {
        return this.canceledNavigationResolution !== "computed"
          ? this.currentPageId
          : this.restoredState()?.ɵrouterPageId ?? this.currentPageId;
      }
      getRouterState() {
        return this.routerState;
      }
      createStateMemento() {
        return {
          rawUrlTree: this.rawUrlTree,
          currentUrlTree: this.currentUrlTree,
          routerState: this.routerState,
        };
      }
      registerNonRouterCurrentEntryChangeListener(e) {
        return this.location.subscribe((i) => {
          i.type === "popstate" && e(i.url, i.state);
        });
      }
      handleRouterEvent(e, i) {
        if (e instanceof hn) this.stateMemento = this.createStateMemento();
        else if (e instanceof oi) this.rawUrlTree = i.initialUrl;
        else if (e instanceof Zr) {
          if (
            this.urlUpdateStrategy === "eager" &&
            !i.extras.skipLocationChange
          ) {
            let r = this.urlHandlingStrategy.merge(i.finalUrl, i.initialUrl);
            this.setBrowserUrl(i.targetBrowserUrl ?? r, i);
          }
        } else
          e instanceof wo
            ? ((this.currentUrlTree = i.finalUrl),
              (this.rawUrlTree = this.urlHandlingStrategy.merge(
                i.finalUrl,
                i.initialUrl
              )),
              (this.routerState = i.targetRouterState),
              this.urlUpdateStrategy === "deferred" &&
                !i.extras.skipLocationChange &&
                this.setBrowserUrl(i.targetBrowserUrl ?? this.rawUrlTree, i))
            : e instanceof Pe &&
              (e.code === Xt.GuardRejected || e.code === Xt.NoDataFromResolver)
            ? this.restoreHistory(i)
            : e instanceof yo
            ? this.restoreHistory(i, !0)
            : e instanceof we &&
              ((this.lastSuccessfulId = e.id),
              (this.currentPageId = this.browserPageId));
      }
      setBrowserUrl(e, i) {
        let r = e instanceof Le ? this.urlSerializer.serialize(e) : e;
        if (this.location.isCurrentPathEqualTo(r) || i.extras.replaceUrl) {
          let a = this.browserPageId,
            s = b(b({}, i.extras.state), this.generateNgRouterState(i.id, a));
          this.location.replaceState(r, "", s);
        } else {
          let a = b(
            b({}, i.extras.state),
            this.generateNgRouterState(i.id, this.browserPageId + 1)
          );
          this.location.go(r, "", a);
        }
      }
      restoreHistory(e, i = !1) {
        if (this.canceledNavigationResolution === "computed") {
          let r = this.browserPageId,
            a = this.currentPageId - r;
          a !== 0
            ? this.location.historyGo(a)
            : this.currentUrlTree === e.finalUrl &&
              a === 0 &&
              (this.resetState(e), this.resetUrlToCurrentUrlTree());
        } else
          this.canceledNavigationResolution === "replace" &&
            (i && this.resetState(e), this.resetUrlToCurrentUrlTree());
      }
      resetState(e) {
        (this.routerState = this.stateMemento.routerState),
          (this.currentUrlTree = this.stateMemento.currentUrlTree),
          (this.rawUrlTree = this.urlHandlingStrategy.merge(
            this.currentUrlTree,
            e.finalUrl ?? this.rawUrlTree
          ));
      }
      resetUrlToCurrentUrlTree() {
        this.location.replaceState(
          this.urlSerializer.serialize(this.rawUrlTree),
          "",
          this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId)
        );
      }
      generateNgRouterState(e, i) {
        return this.canceledNavigationResolution === "computed"
          ? { navigationId: e, ɵrouterPageId: i }
          : { navigationId: e };
      }
    };
    (t.ɵfac = (() => {
      let e;
      return function (r) {
        return (e || (e = be(t)))(r || t);
      };
    })()),
      (t.ɵprov = x({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })(),
  go = (function (n) {
    return (
      (n[(n.COMPLETE = 0)] = "COMPLETE"),
      (n[(n.FAILED = 1)] = "FAILED"),
      (n[(n.REDIRECTING = 2)] = "REDIRECTING"),
      n
    );
  })(go || {});
function mh(n, t) {
  n.events
    .pipe(
      ht(
        (o) =>
          o instanceof we ||
          o instanceof Pe ||
          o instanceof yo ||
          o instanceof oi
      ),
      B((o) =>
        o instanceof we || o instanceof oi
          ? go.COMPLETE
          : (
              o instanceof Pe
                ? o.code === Xt.Redirect ||
                  o.code === Xt.SupersededByNewNavigation
                : !1
            )
          ? go.REDIRECTING
          : go.FAILED
      ),
      ht((o) => o !== go.REDIRECTING),
      _t(1)
    )
    .subscribe(() => {
      t();
    });
}
function s_(n) {
  throw n;
}
var c_ = {
    paths: "exact",
    fragment: "ignored",
    matrixParams: "ignored",
    queryParams: "exact",
  },
  l_ = {
    paths: "subset",
    fragment: "ignored",
    matrixParams: "ignored",
    queryParams: "subset",
  },
  gt = (() => {
    let t = class t {
      get currentUrlTree() {
        return this.stateManager.getCurrentUrlTree();
      }
      get rawUrlTree() {
        return this.stateManager.getRawUrlTree();
      }
      get events() {
        return this._events;
      }
      get routerState() {
        return this.stateManager.getRouterState();
      }
      constructor() {
        (this.disposed = !1),
          (this.console = _(Er)),
          (this.stateManager = _(dh)),
          (this.options = _(Ro, { optional: !0 }) || {}),
          (this.pendingTasks = _(Kn)),
          (this.urlUpdateStrategy =
            this.options.urlUpdateStrategy || "deferred"),
          (this.navigationTransitions = _(Ac)),
          (this.urlSerializer = _(Ao)),
          (this.location = _(Re)),
          (this.urlHandlingStrategy = _(Dc)),
          (this._events = new E()),
          (this.errorHandler = this.options.errorHandler || s_),
          (this.navigated = !1),
          (this.routeReuseStrategy = _(o_)),
          (this.onSameUrlNavigation =
            this.options.onSameUrlNavigation || "ignore"),
          (this.config = _(Io, { optional: !0 })?.flat() ?? []),
          (this.componentInputBindingEnabled = !!_(ra, { optional: !0 })),
          (this.eventsSubscription = new Lt()),
          this.resetConfig(this.config),
          this.navigationTransitions
            .setupNavigations(this, this.currentUrlTree, this.routerState)
            .subscribe({
              error: (e) => {
                this.console.warn(e);
              },
            }),
          this.subscribeToNavigationEvents();
      }
      subscribeToNavigationEvents() {
        let e = this.navigationTransitions.events.subscribe((i) => {
          try {
            let r = this.navigationTransitions.currentTransition,
              a = this.navigationTransitions.currentNavigation;
            if (r !== null && a !== null) {
              if (
                (this.stateManager.handleRouterEvent(i, a),
                i instanceof Pe &&
                  i.code !== Xt.Redirect &&
                  i.code !== Xt.SupersededByNewNavigation)
              )
                this.navigated = !0;
              else if (i instanceof we) this.navigated = !0;
              else if (i instanceof un) {
                let s = i.navigationBehaviorOptions,
                  c = this.urlHandlingStrategy.merge(i.url, r.currentRawUrl),
                  l = b(
                    {
                      browserUrl: r.extras.browserUrl,
                      info: r.extras.info,
                      skipLocationChange: r.extras.skipLocationChange,
                      replaceUrl:
                        r.extras.replaceUrl ||
                        this.urlUpdateStrategy === "eager" ||
                        n_(r.source),
                    },
                    s
                  );
                this.scheduleNavigation(c, _o, null, l, {
                  resolve: r.resolve,
                  reject: r.reject,
                  promise: r.promise,
                });
              }
            }
            m_(i) && this._events.next(i);
          } catch (r) {
            this.navigationTransitions.transitionAbortSubject.next(r);
          }
        });
        this.eventsSubscription.add(e);
      }
      resetRootComponentType(e) {
        (this.routerState.root.component = e),
          (this.navigationTransitions.rootComponentType = e);
      }
      initialNavigation() {
        this.setUpLocationChangeListener(),
          this.navigationTransitions.hasRequestedNavigation ||
            this.navigateToSyncWithBrowser(
              this.location.path(!0),
              _o,
              this.stateManager.restoredState()
            );
      }
      setUpLocationChangeListener() {
        this.nonRouterCurrentEntryChangeSubscription ??=
          this.stateManager.registerNonRouterCurrentEntryChangeListener(
            (e, i) => {
              setTimeout(() => {
                this.navigateToSyncWithBrowser(e, "popstate", i);
              }, 0);
            }
          );
      }
      navigateToSyncWithBrowser(e, i, r) {
        let a = { replaceUrl: !0 },
          s = r?.navigationId ? r : null;
        if (r) {
          let l = b({}, r);
          delete l.navigationId,
            delete l.ɵrouterPageId,
            Object.keys(l).length !== 0 && (a.state = l);
        }
        let c = this.parseUrl(e);
        this.scheduleNavigation(c, i, s, a);
      }
      get url() {
        return this.serializeUrl(this.currentUrlTree);
      }
      getCurrentNavigation() {
        return this.navigationTransitions.currentNavigation;
      }
      get lastSuccessfulNavigation() {
        return this.navigationTransitions.lastSuccessfulNavigation;
      }
      resetConfig(e) {
        (this.config = e.map(Sc)), (this.navigated = !1);
      }
      ngOnDestroy() {
        this.dispose();
      }
      dispose() {
        this.navigationTransitions.complete(),
          this.nonRouterCurrentEntryChangeSubscription &&
            (this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),
            (this.nonRouterCurrentEntryChangeSubscription = void 0)),
          (this.disposed = !0),
          this.eventsSubscription.unsubscribe();
      }
      createUrlTree(e, i = {}) {
        let {
            relativeTo: r,
            queryParams: a,
            fragment: s,
            queryParamsHandling: c,
            preserveFragment: l,
          } = i,
          m = l ? this.currentUrlTree.fragment : s,
          f = null;
        switch (c ?? this.options.defaultQueryParamsHandling) {
          case "merge":
            f = b(b({}, this.currentUrlTree.queryParams), a);
            break;
          case "preserve":
            f = this.currentUrlTree.queryParams;
            break;
          default:
            f = a || null;
        }
        f !== null && (f = this.removeEmptyProps(f));
        let g;
        try {
          let k = r ? r.snapshot : this.routerState.snapshot.root;
          g = Wm(k);
        } catch {
          (typeof e[0] != "string" || e[0][0] !== "/") && (e = []),
            (g = this.currentUrlTree.root);
        }
        return qm(g, e, f, m ?? null);
      }
      navigateByUrl(e, i = { skipLocationChange: !1 }) {
        let r = Ni(e) ? e : this.parseUrl(e),
          a = this.urlHandlingStrategy.merge(r, this.rawUrlTree);
        return this.scheduleNavigation(a, _o, null, i);
      }
      navigate(e, i = { skipLocationChange: !1 }) {
        return d_(e), this.navigateByUrl(this.createUrlTree(e, i), i);
      }
      serializeUrl(e) {
        return this.urlSerializer.serialize(e);
      }
      parseUrl(e) {
        try {
          return this.urlSerializer.parse(e);
        } catch {
          return this.urlSerializer.parse("/");
        }
      }
      isActive(e, i) {
        let r;
        if (
          (i === !0 ? (r = b({}, c_)) : i === !1 ? (r = b({}, l_)) : (r = i),
          Ni(e))
        )
          return Em(this.currentUrlTree, e, r);
        let a = this.parseUrl(e);
        return Em(this.currentUrlTree, a, r);
      }
      removeEmptyProps(e) {
        return Object.entries(e).reduce(
          (i, [r, a]) => (a != null && (i[r] = a), i),
          {}
        );
      }
      scheduleNavigation(e, i, r, a, s) {
        if (this.disposed) return Promise.resolve(!1);
        let c, l, m;
        s
          ? ((c = s.resolve), (l = s.reject), (m = s.promise))
          : (m = new Promise((g, k) => {
              (c = g), (l = k);
            }));
        let f = this.pendingTasks.add();
        return (
          mh(this, () => {
            queueMicrotask(() => this.pendingTasks.remove(f));
          }),
          this.navigationTransitions.handleNavigationRequest({
            source: i,
            restoredState: r,
            currentUrlTree: this.currentUrlTree,
            currentRawUrl: this.currentUrlTree,
            rawUrl: e,
            extras: a,
            resolve: c,
            reject: l,
            promise: m,
            currentSnapshot: this.routerState.snapshot,
            currentRouterState: this.routerState,
          }),
          m.catch((g) => Promise.reject(g))
        );
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵprov = x({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })();
function d_(n) {
  for (let t = 0; t < n.length; t++) if (n[t] == null) throw new at(4008, !1);
}
function m_(n) {
  return !(n instanceof wo) && !(n instanceof un);
}
var gn = (() => {
  let t = class t {
    constructor(e, i, r, a, s, c) {
      (this.router = e),
        (this.route = i),
        (this.tabIndexAttribute = r),
        (this.renderer = a),
        (this.el = s),
        (this.locationStrategy = c),
        (this.href = null),
        (this.onChanges = new E()),
        (this.preserveFragment = !1),
        (this.skipLocationChange = !1),
        (this.replaceUrl = !1),
        (this.routerLinkInput = null);
      let l = s.nativeElement.tagName?.toLowerCase();
      (this.isAnchorElement = l === "a" || l === "area"),
        this.isAnchorElement
          ? (this.subscription = e.events.subscribe((m) => {
              m instanceof we && this.updateHref();
            }))
          : this.setTabIndexIfNotOnNativeEl("0");
    }
    setTabIndexIfNotOnNativeEl(e) {
      this.tabIndexAttribute != null ||
        this.isAnchorElement ||
        this.applyAttributeValue("tabindex", e);
    }
    ngOnChanges(e) {
      this.isAnchorElement && this.updateHref(), this.onChanges.next(this);
    }
    set routerLink(e) {
      e == null
        ? ((this.routerLinkInput = null), this.setTabIndexIfNotOnNativeEl(null))
        : (Ni(e)
            ? (this.routerLinkInput = e)
            : (this.routerLinkInput = Array.isArray(e) ? e : [e]),
          this.setTabIndexIfNotOnNativeEl("0"));
    }
    onClick(e, i, r, a, s) {
      let c = this.urlTree;
      if (
        c === null ||
        (this.isAnchorElement &&
          (e !== 0 ||
            i ||
            r ||
            a ||
            s ||
            (typeof this.target == "string" && this.target != "_self")))
      )
        return !0;
      let l = {
        skipLocationChange: this.skipLocationChange,
        replaceUrl: this.replaceUrl,
        state: this.state,
        info: this.info,
      };
      return this.router.navigateByUrl(c, l), !this.isAnchorElement;
    }
    ngOnDestroy() {
      this.subscription?.unsubscribe();
    }
    updateHref() {
      let e = this.urlTree;
      this.href =
        e !== null && this.locationStrategy
          ? this.locationStrategy?.prepareExternalUrl(
              this.router.serializeUrl(e)
            )
          : null;
      let i =
        this.href === null
          ? null
          : wd(this.href, this.el.nativeElement.tagName.toLowerCase(), "href");
      this.applyAttributeValue("href", i);
    }
    applyAttributeValue(e, i) {
      let r = this.renderer,
        a = this.el.nativeElement;
      i !== null ? r.setAttribute(a, e, i) : r.removeAttribute(a, e);
    }
    get urlTree() {
      return this.routerLinkInput === null
        ? null
        : Ni(this.routerLinkInput)
        ? this.routerLinkInput
        : this.router.createUrlTree(this.routerLinkInput, {
            relativeTo:
              this.relativeTo !== void 0 ? this.relativeTo : this.route,
            queryParams: this.queryParams,
            fragment: this.fragment,
            queryParamsHandling: this.queryParamsHandling,
            preserveFragment: this.preserveFragment,
          });
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(d(gt), d(ke), Xe("tabindex"), d(io), d(L), d(oo));
  }),
    (t.ɵdir = F({
      type: t,
      selectors: [["", "routerLink", ""]],
      hostVars: 1,
      hostBindings: function (i, r) {
        i & 1 &&
          j("click", function (s) {
            return r.onClick(
              s.button,
              s.ctrlKey,
              s.shiftKey,
              s.altKey,
              s.metaKey
            );
          }),
          i & 2 && K("target", r.target);
      },
      inputs: {
        target: "target",
        queryParams: "queryParams",
        fragment: "fragment",
        queryParamsHandling: "queryParamsHandling",
        state: "state",
        info: "info",
        relativeTo: "relativeTo",
        preserveFragment: [2, "preserveFragment", "preserveFragment", it],
        skipLocationChange: [2, "skipLocationChange", "skipLocationChange", it],
        replaceUrl: [2, "replaceUrl", "replaceUrl", it],
        routerLink: "routerLink",
      },
      standalone: !0,
      features: [Mt, zt],
    }));
  let n = t;
  return n;
})();
var oa = class {};
var h_ = (() => {
    let t = class t {
      constructor(e, i, r, a, s) {
        (this.router = e),
          (this.injector = r),
          (this.preloadingStrategy = a),
          (this.loader = s);
      }
      setUpPreloading() {
        this.subscription = this.router.events
          .pipe(
            ht((e) => e instanceof we),
            qe(() => this.preload())
          )
          .subscribe(() => {});
      }
      preload() {
        return this.processRoutes(this.injector, this.router.config);
      }
      ngOnDestroy() {
        this.subscription && this.subscription.unsubscribe();
      }
      processRoutes(e, i) {
        let r = [];
        for (let a of i) {
          a.providers &&
            !a._injector &&
            (a._injector = Ds(a.providers, e, `Route: ${a.path}`));
          let s = a._injector ?? e,
            c = a._loadedInjector ?? s;
          ((a.loadChildren && !a._loadedRoutes && a.canLoad === void 0) ||
            (a.loadComponent && !a._loadedComponent)) &&
            r.push(this.preloadConfig(s, a)),
            (a.children || a._loadedRoutes) &&
              r.push(this.processRoutes(c, a.children ?? a._loadedRoutes));
        }
        return Rt(r).pipe(gs());
      }
      preloadConfig(e, i) {
        return this.preloadingStrategy.preload(i, () => {
          let r;
          i.loadChildren && i.canLoad === void 0
            ? (r = this.loader.loadChildren(e, i))
            : (r = I(null));
          let a = r.pipe(
            Wt((s) =>
              s === null
                ? I(void 0)
                : ((i._loadedRoutes = s.routes),
                  (i._loadedInjector = s.injector),
                  this.processRoutes(s.injector ?? e, s.routes))
            )
          );
          if (i.loadComponent && !i._loadedComponent) {
            let s = this.loader.loadComponent(i);
            return Rt([a, s]).pipe(gs());
          } else return a;
        });
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(h(gt), h(Dr), h(Mi), h(oa), h(Ic));
    }),
      (t.ɵprov = x({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })(),
  hh = new w(""),
  u_ = (() => {
    let t = class t {
      constructor(e, i, r, a, s = {}) {
        (this.urlSerializer = e),
          (this.transitions = i),
          (this.viewportScroller = r),
          (this.zone = a),
          (this.options = s),
          (this.lastId = 0),
          (this.lastSource = "imperative"),
          (this.restoredId = 0),
          (this.store = {}),
          (s.scrollPositionRestoration ||= "disabled"),
          (s.anchorScrolling ||= "disabled");
      }
      init() {
        this.options.scrollPositionRestoration !== "disabled" &&
          this.viewportScroller.setHistoryScrollRestoration("manual"),
          (this.routerEventsSubscription = this.createScrollEvents()),
          (this.scrollEventsSubscription = this.consumeScrollEvents());
      }
      createScrollEvents() {
        return this.transitions.events.subscribe((e) => {
          e instanceof hn
            ? ((this.store[this.lastId] =
                this.viewportScroller.getScrollPosition()),
              (this.lastSource = e.navigationTrigger),
              (this.restoredId = e.restoredState
                ? e.restoredState.navigationId
                : 0))
            : e instanceof we
            ? ((this.lastId = e.id),
              this.scheduleScrollEvent(
                e,
                this.urlSerializer.parse(e.urlAfterRedirects).fragment
              ))
            : e instanceof oi &&
              e.code === Xr.IgnoredSameUrlNavigation &&
              ((this.lastSource = void 0),
              (this.restoredId = 0),
              this.scheduleScrollEvent(
                e,
                this.urlSerializer.parse(e.url).fragment
              ));
        });
      }
      consumeScrollEvents() {
        return this.transitions.events.subscribe((e) => {
          e instanceof Qr &&
            (e.position
              ? this.options.scrollPositionRestoration === "top"
                ? this.viewportScroller.scrollToPosition([0, 0])
                : this.options.scrollPositionRestoration === "enabled" &&
                  this.viewportScroller.scrollToPosition(e.position)
              : e.anchor && this.options.anchorScrolling === "enabled"
              ? this.viewportScroller.scrollToAnchor(e.anchor)
              : this.options.scrollPositionRestoration !== "disabled" &&
                this.viewportScroller.scrollToPosition([0, 0]));
        });
      }
      scheduleScrollEvent(e, i) {
        this.zone.runOutsideAngular(() => {
          setTimeout(() => {
            this.zone.run(() => {
              this.transitions.events.next(
                new Qr(
                  e,
                  this.lastSource === "popstate"
                    ? this.store[this.restoredId]
                    : null,
                  i
                )
              );
            });
          }, 0);
        });
      }
      ngOnDestroy() {
        this.routerEventsSubscription?.unsubscribe(),
          this.scrollEventsSubscription?.unsubscribe();
      }
    };
    (t.ɵfac = function (i) {
      Oi();
    }),
      (t.ɵprov = x({ token: t, factory: t.ɵfac }));
    let n = t;
    return n;
  })();
function uh(n, ...t) {
  return Ai([
    { provide: Io, multi: !0, useValue: n },
    [],
    { provide: ke, useFactory: ph, deps: [gt] },
    { provide: Ir, multi: !0, useFactory: fh },
    t.map((o) => o.ɵproviders),
  ]);
}
function ph(n) {
  return n.routerState.root;
}
function Fo(n, t) {
  return { ɵkind: n, ɵproviders: t };
}
function fh() {
  let n = _(kt);
  return (t) => {
    let o = n.get(tn);
    if (t !== o.components[0]) return;
    let e = n.get(gt),
      i = n.get(gh);
    n.get(Mc) === 1 && e.initialNavigation(),
      n.get(bh, null, ws.Optional)?.setUpPreloading(),
      n.get(hh, null, ws.Optional)?.init(),
      e.resetRootComponentType(o.componentTypes[0]),
      i.closed || (i.next(), i.complete(), i.unsubscribe());
  };
}
var gh = new w("", { factory: () => new E() }),
  Mc = new w("", { providedIn: "root", factory: () => 1 });
function p_() {
  return Fo(2, [
    { provide: Mc, useValue: 0 },
    {
      provide: Ts,
      multi: !0,
      deps: [kt],
      useFactory: (t) => {
        let o = t.get(qd, Promise.resolve());
        return () =>
          o.then(
            () =>
              new Promise((e) => {
                let i = t.get(gt),
                  r = t.get(gh);
                mh(i, () => {
                  e(!0);
                }),
                  (t.get(Ac).afterPreactivation = () => (
                    e(!0), r.closed ? I(void 0) : r
                  )),
                  i.initialNavigation();
              })
          );
      },
    },
  ]);
}
function f_() {
  return Fo(3, [
    {
      provide: Ts,
      multi: !0,
      useFactory: () => {
        let t = _(gt);
        return () => {
          t.setUpLocationChangeListener();
        };
      },
    },
    { provide: Mc, useValue: 2 },
  ]);
}
var bh = new w("");
function g_(n) {
  return Fo(0, [
    { provide: bh, useExisting: h_ },
    { provide: oa, useExisting: n },
  ]);
}
function b_() {
  return Fo(8, [Am, { provide: ra, useExisting: Am }]);
}
function __(n) {
  let t = [
    { provide: ch, useValue: t_ },
    {
      provide: lh,
      useValue: b({ skipNextTransition: !!n?.skipInitialTransition }, n),
    },
  ];
  return Fo(9, t);
}
var Rm = new w("ROUTER_FORROOT_GUARD"),
  v_ = [
    Re,
    { provide: Ao, useClass: mn },
    gt,
    To,
    { provide: ke, useFactory: ph, deps: [gt] },
    Ic,
    [],
  ],
  bn = (() => {
    let t = class t {
      constructor(e) {}
      static forRoot(e, i) {
        return {
          ngModule: t,
          providers: [
            v_,
            [],
            { provide: Io, multi: !0, useValue: e },
            { provide: Rm, useFactory: k_, deps: [[gt, new Zi(), new Zn()]] },
            { provide: Ro, useValue: i || {} },
            i?.useHash ? y_() : w_(),
            x_(),
            i?.preloadingStrategy ? g_(i.preloadingStrategy).ɵproviders : [],
            i?.initialNavigation ? C_(i) : [],
            i?.bindToComponentInputs ? b_().ɵproviders : [],
            i?.enableViewTransitions ? __().ɵproviders : [],
            E_(),
          ],
        };
      }
      static forChild(e) {
        return {
          ngModule: t,
          providers: [{ provide: Io, multi: !0, useValue: e }],
        };
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(h(Rm, 8));
    }),
      (t.ɵmod = T({ type: t })),
      (t.ɵinj = M({}));
    let n = t;
    return n;
  })();
function x_() {
  return {
    provide: hh,
    useFactory: () => {
      let n = _(Kd),
        t = _(D),
        o = _(Ro),
        e = _(Ac),
        i = _(Ao);
      return (
        o.scrollOffset && n.setOffset(o.scrollOffset), new u_(i, e, n, t, o)
      );
    },
  };
}
function y_() {
  return { provide: oo, useClass: Yd };
}
function w_() {
  return { provide: oo, useClass: Gd };
}
function k_(n) {
  return "guarded";
}
function C_(n) {
  return [
    n.initialNavigation === "disabled" ? f_().ɵproviders : [],
    n.initialNavigation === "enabledBlocking" ? p_().ɵproviders : [],
  ];
}
var Fm = new w("");
function E_() {
  return [
    { provide: Fm, useFactory: fh },
    { provide: Ir, multi: !0, useExisting: Fm },
  ];
}
var Oc;
try {
  Oc = typeof Intl < "u" && Intl.v8BreakIterator;
} catch {
  Oc = !1;
}
var G = (() => {
  let t = class t {
    constructor(e) {
      (this._platformId = e),
        (this.isBrowser = this._platformId
          ? Qd(this._platformId)
          : typeof document == "object" && !!document),
        (this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent)),
        (this.TRIDENT =
          this.isBrowser && /(msie|trident)/i.test(navigator.userAgent)),
        (this.BLINK =
          this.isBrowser &&
          !!(window.chrome || Oc) &&
          typeof CSS < "u" &&
          !this.EDGE &&
          !this.TRIDENT),
        (this.WEBKIT =
          this.isBrowser &&
          /AppleWebKit/i.test(navigator.userAgent) &&
          !this.BLINK &&
          !this.EDGE &&
          !this.TRIDENT),
        (this.IOS =
          this.isBrowser &&
          /iPad|iPhone|iPod/.test(navigator.userAgent) &&
          !("MSStream" in window)),
        (this.FIREFOX =
          this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent)),
        (this.ANDROID =
          this.isBrowser &&
          /android/i.test(navigator.userAgent) &&
          !this.TRIDENT),
        (this.SAFARI =
          this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT);
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(h(Me));
  }),
    (t.ɵprov = x({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let n = t;
  return n;
})();
var vn,
  _h = [
    "color",
    "button",
    "checkbox",
    "date",
    "datetime-local",
    "email",
    "file",
    "hidden",
    "image",
    "month",
    "number",
    "password",
    "radio",
    "range",
    "reset",
    "search",
    "submit",
    "tel",
    "text",
    "time",
    "url",
    "week",
  ];
function Rc() {
  if (vn) return vn;
  if (typeof document != "object" || !document) return (vn = new Set(_h)), vn;
  let n = document.createElement("input");
  return (
    (vn = new Set(_h.filter((t) => (n.setAttribute("type", t), n.type === t)))),
    vn
  );
}
var Po;
function S_() {
  if (Po == null && typeof window < "u")
    try {
      window.addEventListener(
        "test",
        null,
        Object.defineProperty({}, "passive", { get: () => (Po = !0) })
      );
    } finally {
      Po = Po || !1;
    }
  return Po;
}
function Ce(n) {
  return S_() ? n : !!n.capture;
}
var ji;
function vh() {
  if (ji == null) {
    if (
      typeof document != "object" ||
      !document ||
      typeof Element != "function" ||
      !Element
    )
      return (ji = !1), ji;
    if ("scrollBehavior" in document.documentElement.style) ji = !0;
    else {
      let n = Element.prototype.scrollTo;
      n ? (ji = !/\{\s*\[native code\]\s*\}/.test(n.toString())) : (ji = !1);
    }
  }
  return ji;
}
var Tc;
function I_() {
  if (Tc == null) {
    let n = typeof document < "u" ? document.head : null;
    Tc = !!(n && (n.createShadowRoot || n.attachShadow));
  }
  return Tc;
}
function xh(n) {
  if (I_()) {
    let t = n.getRootNode ? n.getRootNode() : null;
    if (typeof ShadowRoot < "u" && ShadowRoot && t instanceof ShadowRoot)
      return t;
  }
  return null;
}
function Lo() {
  let n = typeof document < "u" && document ? document.activeElement : null;
  for (; n && n.shadowRoot; ) {
    let t = n.shadowRoot.activeElement;
    if (t === n) break;
    n = t;
  }
  return n;
}
function oe(n) {
  return n.composedPath ? n.composedPath()[0] : n.target;
}
function No() {
  return (
    (typeof __karma__ < "u" && !!__karma__) ||
    (typeof jasmine < "u" && !!jasmine) ||
    (typeof jest < "u" && !!jest) ||
    (typeof Mocha < "u" && !!Mocha)
  );
}
function Ut(n, ...t) {
  return t.length
    ? t.some((o) => n[o])
    : n.altKey || n.shiftKey || n.ctrlKey || n.metaKey;
}
function Ee(n) {
  return n != null && `${n}` != "false";
}
function Ne(n, t = 0) {
  return D_(n) ? Number(n) : t;
}
function D_(n) {
  return !isNaN(parseFloat(n)) && !isNaN(Number(n));
}
function xn(n) {
  return Array.isArray(n) ? n : [n];
}
function wt(n) {
  return n == null ? "" : typeof n == "string" ? n : `${n}px`;
}
function ae(n) {
  return n instanceof L ? n.nativeElement : n;
}
var A_ = (() => {
  let t = class t {
    create(e) {
      return typeof MutationObserver > "u" ? null : new MutationObserver(e);
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵprov = x({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let n = t;
  return n;
})();
var yn = (() => {
  let t = class t {};
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵmod = T({ type: t })),
    (t.ɵinj = M({ providers: [A_] }));
  let n = t;
  return n;
})();
var yh = new Set(),
  zi,
  M_ = (() => {
    let t = class t {
      constructor(e, i) {
        (this._platform = e),
          (this._nonce = i),
          (this._matchMedia =
            this._platform.isBrowser && window.matchMedia
              ? window.matchMedia.bind(window)
              : O_);
      }
      matchMedia(e) {
        return (
          (this._platform.WEBKIT || this._platform.BLINK) && T_(e, this._nonce),
          this._matchMedia(e)
        );
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(h(G), h(to, 8));
    }),
      (t.ɵprov = x({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })();
function T_(n, t) {
  if (!yh.has(n))
    try {
      zi ||
        ((zi = document.createElement("style")),
        t && zi.setAttribute("nonce", t),
        zi.setAttribute("type", "text/css"),
        document.head.appendChild(zi)),
        zi.sheet &&
          (zi.sheet.insertRule(`@media ${n} {body{ }}`, 0), yh.add(n));
    } catch (o) {
      console.error(o);
    }
}
function O_(n) {
  return {
    matches: n === "all" || n === "",
    media: n,
    addListener: () => {},
    removeListener: () => {},
  };
}
var sa = (() => {
  let t = class t {
    constructor(e, i) {
      (this._mediaMatcher = e),
        (this._zone = i),
        (this._queries = new Map()),
        (this._destroySubject = new E());
    }
    ngOnDestroy() {
      this._destroySubject.next(), this._destroySubject.complete();
    }
    isMatched(e) {
      return wh(xn(e)).some((r) => this._registerQuery(r).mql.matches);
    }
    observe(e) {
      let r = wh(xn(e)).map((s) => this._registerQuery(s).observable),
        a = Xi(r);
      return (
        (a = fr(a.pipe(_t(1)), a.pipe(vr(1), br(0)))),
        a.pipe(
          B((s) => {
            let c = { matches: !1, breakpoints: {} };
            return (
              s.forEach(({ matches: l, query: m }) => {
                (c.matches = c.matches || l), (c.breakpoints[m] = l);
              }),
              c
            );
          })
        )
      );
    }
    _registerQuery(e) {
      if (this._queries.has(e)) return this._queries.get(e);
      let i = this._mediaMatcher.matchMedia(e),
        a = {
          observable: new Jt((s) => {
            let c = (l) => this._zone.run(() => s.next(l));
            return (
              i.addListener(c),
              () => {
                i.removeListener(c);
              }
            );
          }).pipe(
            te(i),
            B(({ matches: s }) => ({ query: e, matches: s })),
            tt(this._destroySubject)
          ),
          mql: i,
        };
      return this._queries.set(e, a), a;
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(h(M_), h(D));
  }),
    (t.ɵprov = x({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let n = t;
  return n;
})();
function wh(n) {
  return n
    .map((t) => t.split(","))
    .reduce((t, o) => t.concat(o))
    .map((t) => t.trim());
}
var kh = {
  XSmall: "(max-width: 599.98px)",
  Small: "(min-width: 600px) and (max-width: 959.98px)",
  Medium: "(min-width: 960px) and (max-width: 1279.98px)",
  Large: "(min-width: 1280px) and (max-width: 1919.98px)",
  XLarge: "(min-width: 1920px)",
  Handset:
    "(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",
  Tablet:
    "(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",
  Web: "(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",
  HandsetPortrait: "(max-width: 599.98px) and (orientation: portrait)",
  TabletPortrait:
    "(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",
  WebPortrait: "(min-width: 840px) and (orientation: portrait)",
  HandsetLandscape: "(max-width: 959.98px) and (orientation: landscape)",
  TabletLandscape:
    "(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",
  WebLandscape: "(min-width: 1280px) and (orientation: landscape)",
};
var Dh = " ";
function Uc(n, t, o) {
  let e = ma(n, t);
  (o = o.trim()),
    !e.some((i) => i.trim() === o) &&
      (e.push(o), n.setAttribute(t, e.join(Dh)));
}
function fa(n, t, o) {
  let e = ma(n, t);
  o = o.trim();
  let i = e.filter((r) => r !== o);
  i.length ? n.setAttribute(t, i.join(Dh)) : n.removeAttribute(t);
}
function ma(n, t) {
  return n.getAttribute(t)?.match(/\S+/g) ?? [];
}
var Ah = "cdk-describedby-message",
  ca = "cdk-describedby-host",
  Lc = 0,
  Mh = (() => {
    let t = class t {
      constructor(e, i) {
        (this._platform = i),
          (this._messageRegistry = new Map()),
          (this._messagesContainer = null),
          (this._id = `${Lc++}`),
          (this._document = e),
          (this._id = _(Jn) + "-" + Lc++);
      }
      describe(e, i, r) {
        if (!this._canBeDescribed(e, i)) return;
        let a = Fc(i, r);
        typeof i != "string"
          ? (Ch(i, this._id),
            this._messageRegistry.set(a, {
              messageElement: i,
              referenceCount: 0,
            }))
          : this._messageRegistry.has(a) || this._createMessageElement(i, r),
          this._isElementDescribedByMessage(e, a) ||
            this._addMessageReference(e, a);
      }
      removeDescription(e, i, r) {
        if (!i || !this._isElementNode(e)) return;
        let a = Fc(i, r);
        if (
          (this._isElementDescribedByMessage(e, a) &&
            this._removeMessageReference(e, a),
          typeof i == "string")
        ) {
          let s = this._messageRegistry.get(a);
          s && s.referenceCount === 0 && this._deleteMessageElement(a);
        }
        this._messagesContainer?.childNodes.length === 0 &&
          (this._messagesContainer.remove(), (this._messagesContainer = null));
      }
      ngOnDestroy() {
        let e = this._document.querySelectorAll(`[${ca}="${this._id}"]`);
        for (let i = 0; i < e.length; i++)
          this._removeCdkDescribedByReferenceIds(e[i]),
            e[i].removeAttribute(ca);
        this._messagesContainer?.remove(),
          (this._messagesContainer = null),
          this._messageRegistry.clear();
      }
      _createMessageElement(e, i) {
        let r = this._document.createElement("div");
        Ch(r, this._id),
          (r.textContent = e),
          i && r.setAttribute("role", i),
          this._createMessagesContainer(),
          this._messagesContainer.appendChild(r),
          this._messageRegistry.set(Fc(e, i), {
            messageElement: r,
            referenceCount: 0,
          });
      }
      _deleteMessageElement(e) {
        this._messageRegistry.get(e)?.messageElement?.remove(),
          this._messageRegistry.delete(e);
      }
      _createMessagesContainer() {
        if (this._messagesContainer) return;
        let e = "cdk-describedby-message-container",
          i = this._document.querySelectorAll(`.${e}[platform="server"]`);
        for (let a = 0; a < i.length; a++) i[a].remove();
        let r = this._document.createElement("div");
        (r.style.visibility = "hidden"),
          r.classList.add(e),
          r.classList.add("cdk-visually-hidden"),
          this._platform &&
            !this._platform.isBrowser &&
            r.setAttribute("platform", "server"),
          this._document.body.appendChild(r),
          (this._messagesContainer = r);
      }
      _removeCdkDescribedByReferenceIds(e) {
        let i = ma(e, "aria-describedby").filter((r) => r.indexOf(Ah) != 0);
        e.setAttribute("aria-describedby", i.join(" "));
      }
      _addMessageReference(e, i) {
        let r = this._messageRegistry.get(i);
        Uc(e, "aria-describedby", r.messageElement.id),
          e.setAttribute(ca, this._id),
          r.referenceCount++;
      }
      _removeMessageReference(e, i) {
        let r = this._messageRegistry.get(i);
        r.referenceCount--,
          fa(e, "aria-describedby", r.messageElement.id),
          e.removeAttribute(ca);
      }
      _isElementDescribedByMessage(e, i) {
        let r = ma(e, "aria-describedby"),
          a = this._messageRegistry.get(i),
          s = a && a.messageElement.id;
        return !!s && r.indexOf(s) != -1;
      }
      _canBeDescribed(e, i) {
        if (!this._isElementNode(e)) return !1;
        if (i && typeof i == "object") return !0;
        let r = i == null ? "" : `${i}`.trim(),
          a = e.getAttribute("aria-label");
        return r ? !a || a.trim() !== r : !1;
      }
      _isElementNode(e) {
        return e.nodeType === this._document.ELEMENT_NODE;
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(h(R), h(G));
    }),
      (t.ɵprov = x({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })();
function Fc(n, t) {
  return typeof n == "string" ? `${t || ""}/${n}` : n;
}
function Ch(n, t) {
  n.id || (n.id = `${Ah}-${t}-${Lc++}`);
}
var Nc = class {
    constructor(t, o) {
      (this._items = t),
        (this._activeItemIndex = -1),
        (this._activeItem = null),
        (this._wrap = !1),
        (this._letterKeyStream = new E()),
        (this._typeaheadSubscription = Lt.EMPTY),
        (this._vertical = !0),
        (this._allowedModifierKeys = []),
        (this._homeAndEnd = !1),
        (this._pageUpAndDown = { enabled: !1, delta: 10 }),
        (this._skipPredicateFn = (e) => e.disabled),
        (this._pressedLetters = []),
        (this.tabOut = new E()),
        (this.change = new E()),
        t instanceof Es
          ? (this._itemChangesSubscription = t.changes.subscribe((e) =>
              this._itemsChanged(e.toArray())
            ))
          : Is(t) &&
            (this._effectRef = Ud(() => this._itemsChanged(t()), {
              injector: o,
            }));
    }
    skipPredicate(t) {
      return (this._skipPredicateFn = t), this;
    }
    withWrap(t = !0) {
      return (this._wrap = t), this;
    }
    withVerticalOrientation(t = !0) {
      return (this._vertical = t), this;
    }
    withHorizontalOrientation(t) {
      return (this._horizontal = t), this;
    }
    withAllowedModifierKeys(t) {
      return (this._allowedModifierKeys = t), this;
    }
    withTypeAhead(t = 200) {
      return (
        this._typeaheadSubscription.unsubscribe(),
        (this._typeaheadSubscription = this._letterKeyStream
          .pipe(
            lt((o) => this._pressedLetters.push(o)),
            br(t),
            ht(() => this._pressedLetters.length > 0),
            B(() => this._pressedLetters.join(""))
          )
          .subscribe((o) => {
            let e = this._getItemsArray();
            for (let i = 1; i < e.length + 1; i++) {
              let r = (this._activeItemIndex + i) % e.length,
                a = e[r];
              if (
                !this._skipPredicateFn(a) &&
                a.getLabel().toUpperCase().trim().indexOf(o) === 0
              ) {
                this.setActiveItem(r);
                break;
              }
            }
            this._pressedLetters = [];
          })),
        this
      );
    }
    cancelTypeahead() {
      return (this._pressedLetters = []), this;
    }
    withHomeAndEnd(t = !0) {
      return (this._homeAndEnd = t), this;
    }
    withPageUpDown(t = !0, o = 10) {
      return (this._pageUpAndDown = { enabled: t, delta: o }), this;
    }
    setActiveItem(t) {
      let o = this._activeItem;
      this.updateActiveItem(t),
        this._activeItem !== o && this.change.next(this._activeItemIndex);
    }
    onKeydown(t) {
      let o = t.keyCode,
        i = ["altKey", "ctrlKey", "metaKey", "shiftKey"].every(
          (r) => !t[r] || this._allowedModifierKeys.indexOf(r) > -1
        );
      switch (o) {
        case 9:
          this.tabOut.next();
          return;
        case 40:
          if (this._vertical && i) {
            this.setNextItemActive();
            break;
          } else return;
        case 38:
          if (this._vertical && i) {
            this.setPreviousItemActive();
            break;
          } else return;
        case 39:
          if (this._horizontal && i) {
            this._horizontal === "rtl"
              ? this.setPreviousItemActive()
              : this.setNextItemActive();
            break;
          } else return;
        case 37:
          if (this._horizontal && i) {
            this._horizontal === "rtl"
              ? this.setNextItemActive()
              : this.setPreviousItemActive();
            break;
          } else return;
        case 36:
          if (this._homeAndEnd && i) {
            this.setFirstItemActive();
            break;
          } else return;
        case 35:
          if (this._homeAndEnd && i) {
            this.setLastItemActive();
            break;
          } else return;
        case 33:
          if (this._pageUpAndDown.enabled && i) {
            let r = this._activeItemIndex - this._pageUpAndDown.delta;
            this._setActiveItemByIndex(r > 0 ? r : 0, 1);
            break;
          } else return;
        case 34:
          if (this._pageUpAndDown.enabled && i) {
            let r = this._activeItemIndex + this._pageUpAndDown.delta,
              a = this._getItemsArray().length;
            this._setActiveItemByIndex(r < a ? r : a - 1, -1);
            break;
          } else return;
        default:
          (i || Ut(t, "shiftKey")) &&
            (t.key && t.key.length === 1
              ? this._letterKeyStream.next(t.key.toLocaleUpperCase())
              : ((o >= 65 && o <= 90) || (o >= 48 && o <= 57)) &&
                this._letterKeyStream.next(String.fromCharCode(o)));
          return;
      }
      (this._pressedLetters = []), t.preventDefault();
    }
    get activeItemIndex() {
      return this._activeItemIndex;
    }
    get activeItem() {
      return this._activeItem;
    }
    isTyping() {
      return this._pressedLetters.length > 0;
    }
    setFirstItemActive() {
      this._setActiveItemByIndex(0, 1);
    }
    setLastItemActive() {
      this._setActiveItemByIndex(this._getItemsArray().length - 1, -1);
    }
    setNextItemActive() {
      this._activeItemIndex < 0
        ? this.setFirstItemActive()
        : this._setActiveItemByDelta(1);
    }
    setPreviousItemActive() {
      this._activeItemIndex < 0 && this._wrap
        ? this.setLastItemActive()
        : this._setActiveItemByDelta(-1);
    }
    updateActiveItem(t) {
      let o = this._getItemsArray(),
        e = typeof t == "number" ? t : o.indexOf(t),
        i = o[e];
      (this._activeItem = i ?? null), (this._activeItemIndex = e);
    }
    destroy() {
      this._typeaheadSubscription.unsubscribe(),
        this._itemChangesSubscription?.unsubscribe(),
        this._effectRef?.destroy(),
        this._letterKeyStream.complete(),
        this.tabOut.complete(),
        this.change.complete(),
        (this._pressedLetters = []);
    }
    _setActiveItemByDelta(t) {
      this._wrap
        ? this._setActiveInWrapMode(t)
        : this._setActiveInDefaultMode(t);
    }
    _setActiveInWrapMode(t) {
      let o = this._getItemsArray();
      for (let e = 1; e <= o.length; e++) {
        let i = (this._activeItemIndex + t * e + o.length) % o.length,
          r = o[i];
        if (!this._skipPredicateFn(r)) {
          this.setActiveItem(i);
          return;
        }
      }
    }
    _setActiveInDefaultMode(t) {
      this._setActiveItemByIndex(this._activeItemIndex + t, t);
    }
    _setActiveItemByIndex(t, o) {
      let e = this._getItemsArray();
      if (e[t]) {
        for (; this._skipPredicateFn(e[t]); ) if (((t += o), !e[t])) return;
        this.setActiveItem(t);
      }
    }
    _getItemsArray() {
      return Is(this._items)
        ? this._items()
        : this._items instanceof Es
        ? this._items.toArray()
        : this._items;
    }
    _itemsChanged(t) {
      if (this._activeItem) {
        let o = t.indexOf(this._activeItem);
        o > -1 && o !== this._activeItemIndex && (this._activeItemIndex = o);
      }
    }
  },
  ha = class extends Nc {
    setActiveItem(t) {
      this.activeItem && this.activeItem.setInactiveStyles(),
        super.setActiveItem(t),
        this.activeItem && this.activeItem.setActiveStyles();
    }
  };
var jo = (() => {
  let t = class t {
    constructor(e) {
      this._platform = e;
    }
    isDisabled(e) {
      return e.hasAttribute("disabled");
    }
    isVisible(e) {
      return Y_(e) && getComputedStyle(e).visibility === "visible";
    }
    isTabbable(e) {
      if (!this._platform.isBrowser) return !1;
      let i = G_(iv(e));
      if (i && (Eh(i) === -1 || !this.isVisible(i))) return !1;
      let r = e.nodeName.toLowerCase(),
        a = Eh(e);
      return e.hasAttribute("contenteditable")
        ? a !== -1
        : r === "iframe" ||
          r === "object" ||
          (this._platform.WEBKIT && this._platform.IOS && !tv(e))
        ? !1
        : r === "audio"
        ? e.hasAttribute("controls")
          ? a !== -1
          : !1
        : r === "video"
        ? a === -1
          ? !1
          : a !== null
          ? !0
          : this._platform.FIREFOX || e.hasAttribute("controls")
        : e.tabIndex >= 0;
    }
    isFocusable(e, i) {
      return (
        ev(e) &&
        !this.isDisabled(e) &&
        (i?.ignoreVisibility || this.isVisible(e))
      );
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(h(G));
  }),
    (t.ɵprov = x({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let n = t;
  return n;
})();
function G_(n) {
  try {
    return n.frameElement;
  } catch {
    return null;
  }
}
function Y_(n) {
  return !!(
    n.offsetWidth ||
    n.offsetHeight ||
    (typeof n.getClientRects == "function" && n.getClientRects().length)
  );
}
function X_(n) {
  let t = n.nodeName.toLowerCase();
  return t === "input" || t === "select" || t === "button" || t === "textarea";
}
function Z_(n) {
  return K_(n) && n.type == "hidden";
}
function Q_(n) {
  return J_(n) && n.hasAttribute("href");
}
function K_(n) {
  return n.nodeName.toLowerCase() == "input";
}
function J_(n) {
  return n.nodeName.toLowerCase() == "a";
}
function Th(n) {
  if (!n.hasAttribute("tabindex") || n.tabIndex === void 0) return !1;
  let t = n.getAttribute("tabindex");
  return !!(t && !isNaN(parseInt(t, 10)));
}
function Eh(n) {
  if (!Th(n)) return null;
  let t = parseInt(n.getAttribute("tabindex") || "", 10);
  return isNaN(t) ? -1 : t;
}
function tv(n) {
  let t = n.nodeName.toLowerCase(),
    o = t === "input" && n.type;
  return o === "text" || o === "password" || t === "select" || t === "textarea";
}
function ev(n) {
  return Z_(n)
    ? !1
    : X_(n) || Q_(n) || n.hasAttribute("contenteditable") || Th(n);
}
function iv(n) {
  return (n.ownerDocument && n.ownerDocument.defaultView) || window;
}
var jc = class {
    get enabled() {
      return this._enabled;
    }
    set enabled(t) {
      (this._enabled = t),
        this._startAnchor &&
          this._endAnchor &&
          (this._toggleAnchorTabIndex(t, this._startAnchor),
          this._toggleAnchorTabIndex(t, this._endAnchor));
    }
    constructor(t, o, e, i, r = !1) {
      (this._element = t),
        (this._checker = o),
        (this._ngZone = e),
        (this._document = i),
        (this._hasAttached = !1),
        (this.startAnchorListener = () => this.focusLastTabbableElement()),
        (this.endAnchorListener = () => this.focusFirstTabbableElement()),
        (this._enabled = !0),
        r || this.attachAnchors();
    }
    destroy() {
      let t = this._startAnchor,
        o = this._endAnchor;
      t &&
        (t.removeEventListener("focus", this.startAnchorListener), t.remove()),
        o &&
          (o.removeEventListener("focus", this.endAnchorListener), o.remove()),
        (this._startAnchor = this._endAnchor = null),
        (this._hasAttached = !1);
    }
    attachAnchors() {
      return this._hasAttached
        ? !0
        : (this._ngZone.runOutsideAngular(() => {
            this._startAnchor ||
              ((this._startAnchor = this._createAnchor()),
              this._startAnchor.addEventListener(
                "focus",
                this.startAnchorListener
              )),
              this._endAnchor ||
                ((this._endAnchor = this._createAnchor()),
                this._endAnchor.addEventListener(
                  "focus",
                  this.endAnchorListener
                ));
          }),
          this._element.parentNode &&
            (this._element.parentNode.insertBefore(
              this._startAnchor,
              this._element
            ),
            this._element.parentNode.insertBefore(
              this._endAnchor,
              this._element.nextSibling
            ),
            (this._hasAttached = !0)),
          this._hasAttached);
    }
    focusInitialElementWhenReady(t) {
      return new Promise((o) => {
        this._executeOnStable(() => o(this.focusInitialElement(t)));
      });
    }
    focusFirstTabbableElementWhenReady(t) {
      return new Promise((o) => {
        this._executeOnStable(() => o(this.focusFirstTabbableElement(t)));
      });
    }
    focusLastTabbableElementWhenReady(t) {
      return new Promise((o) => {
        this._executeOnStable(() => o(this.focusLastTabbableElement(t)));
      });
    }
    _getRegionBoundary(t) {
      let o = this._element.querySelectorAll(
        `[cdk-focus-region-${t}], [cdkFocusRegion${t}], [cdk-focus-${t}]`
      );
      return t == "start"
        ? o.length
          ? o[0]
          : this._getFirstTabbableElement(this._element)
        : o.length
        ? o[o.length - 1]
        : this._getLastTabbableElement(this._element);
    }
    focusInitialElement(t) {
      let o = this._element.querySelector(
        "[cdk-focus-initial], [cdkFocusInitial]"
      );
      if (o) {
        if (!this._checker.isFocusable(o)) {
          let e = this._getFirstTabbableElement(o);
          return e?.focus(t), !!e;
        }
        return o.focus(t), !0;
      }
      return this.focusFirstTabbableElement(t);
    }
    focusFirstTabbableElement(t) {
      let o = this._getRegionBoundary("start");
      return o && o.focus(t), !!o;
    }
    focusLastTabbableElement(t) {
      let o = this._getRegionBoundary("end");
      return o && o.focus(t), !!o;
    }
    hasAttached() {
      return this._hasAttached;
    }
    _getFirstTabbableElement(t) {
      if (this._checker.isFocusable(t) && this._checker.isTabbable(t)) return t;
      let o = t.children;
      for (let e = 0; e < o.length; e++) {
        let i =
          o[e].nodeType === this._document.ELEMENT_NODE
            ? this._getFirstTabbableElement(o[e])
            : null;
        if (i) return i;
      }
      return null;
    }
    _getLastTabbableElement(t) {
      if (this._checker.isFocusable(t) && this._checker.isTabbable(t)) return t;
      let o = t.children;
      for (let e = o.length - 1; e >= 0; e--) {
        let i =
          o[e].nodeType === this._document.ELEMENT_NODE
            ? this._getLastTabbableElement(o[e])
            : null;
        if (i) return i;
      }
      return null;
    }
    _createAnchor() {
      let t = this._document.createElement("div");
      return (
        this._toggleAnchorTabIndex(this._enabled, t),
        t.classList.add("cdk-visually-hidden"),
        t.classList.add("cdk-focus-trap-anchor"),
        t.setAttribute("aria-hidden", "true"),
        t
      );
    }
    _toggleAnchorTabIndex(t, o) {
      t ? o.setAttribute("tabindex", "0") : o.removeAttribute("tabindex");
    }
    toggleAnchors(t) {
      this._startAnchor &&
        this._endAnchor &&
        (this._toggleAnchorTabIndex(t, this._startAnchor),
        this._toggleAnchorTabIndex(t, this._endAnchor));
    }
    _executeOnStable(t) {
      this._ngZone.isStable
        ? t()
        : this._ngZone.onStable.pipe(_t(1)).subscribe(t);
    }
  },
  ga = (() => {
    let t = class t {
      constructor(e, i, r) {
        (this._checker = e), (this._ngZone = i), (this._document = r);
      }
      create(e, i = !1) {
        return new jc(e, this._checker, this._ngZone, this._document, i);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(h(jo), h(D), h(R));
    }),
      (t.ɵprov = x({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })();
function Hc(n) {
  return n.buttons === 0 || n.detail === 0;
}
function $c(n) {
  let t =
    (n.touches && n.touches[0]) || (n.changedTouches && n.changedTouches[0]);
  return (
    !!t &&
    t.identifier === -1 &&
    (t.radiusX == null || t.radiusX === 1) &&
    (t.radiusY == null || t.radiusY === 1)
  );
}
var nv = new w("cdk-input-modality-detector-options"),
  ov = { ignoreKeys: [18, 17, 224, 91, 16] },
  Oh = 650,
  wn = Ce({ passive: !0, capture: !0 }),
  rv = (() => {
    let t = class t {
      get mostRecentModality() {
        return this._modality.value;
      }
      constructor(e, i, r, a) {
        (this._platform = e),
          (this._mostRecentTarget = null),
          (this._modality = new Nt(null)),
          (this._lastTouchMs = 0),
          (this._onKeydown = (s) => {
            this._options?.ignoreKeys?.some((c) => c === s.keyCode) ||
              (this._modality.next("keyboard"),
              (this._mostRecentTarget = oe(s)));
          }),
          (this._onMousedown = (s) => {
            Date.now() - this._lastTouchMs < Oh ||
              (this._modality.next(Hc(s) ? "keyboard" : "mouse"),
              (this._mostRecentTarget = oe(s)));
          }),
          (this._onTouchstart = (s) => {
            if ($c(s)) {
              this._modality.next("keyboard");
              return;
            }
            (this._lastTouchMs = Date.now()),
              this._modality.next("touch"),
              (this._mostRecentTarget = oe(s));
          }),
          (this._options = b(b({}, ov), a)),
          (this.modalityDetected = this._modality.pipe(vr(1))),
          (this.modalityChanged = this.modalityDetected.pipe(Yn())),
          e.isBrowser &&
            i.runOutsideAngular(() => {
              r.addEventListener("keydown", this._onKeydown, wn),
                r.addEventListener("mousedown", this._onMousedown, wn),
                r.addEventListener("touchstart", this._onTouchstart, wn);
            });
      }
      ngOnDestroy() {
        this._modality.complete(),
          this._platform.isBrowser &&
            (document.removeEventListener("keydown", this._onKeydown, wn),
            document.removeEventListener("mousedown", this._onMousedown, wn),
            document.removeEventListener("touchstart", this._onTouchstart, wn));
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(h(G), h(D), h(R), h(nv, 8));
    }),
      (t.ɵprov = x({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })(),
  av = new w("liveAnnouncerElement", { providedIn: "root", factory: sv });
function sv() {
  return null;
}
var cv = new w("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),
  lv = 0,
  ba = (() => {
    let t = class t {
      constructor(e, i, r, a) {
        (this._ngZone = i),
          (this._defaultOptions = a),
          (this._document = r),
          (this._liveElement = e || this._createLiveElement());
      }
      announce(e, ...i) {
        let r = this._defaultOptions,
          a,
          s;
        return (
          i.length === 1 && typeof i[0] == "number" ? (s = i[0]) : ([a, s] = i),
          this.clear(),
          clearTimeout(this._previousTimeout),
          a || (a = r && r.politeness ? r.politeness : "polite"),
          s == null && r && (s = r.duration),
          this._liveElement.setAttribute("aria-live", a),
          this._liveElement.id &&
            this._exposeAnnouncerToModals(this._liveElement.id),
          this._ngZone.runOutsideAngular(
            () => (
              this._currentPromise ||
                (this._currentPromise = new Promise(
                  (c) => (this._currentResolve = c)
                )),
              clearTimeout(this._previousTimeout),
              (this._previousTimeout = setTimeout(() => {
                (this._liveElement.textContent = e),
                  typeof s == "number" &&
                    (this._previousTimeout = setTimeout(() => this.clear(), s)),
                  this._currentResolve?.(),
                  (this._currentPromise = this._currentResolve = void 0);
              }, 100)),
              this._currentPromise
            )
          )
        );
      }
      clear() {
        this._liveElement && (this._liveElement.textContent = "");
      }
      ngOnDestroy() {
        clearTimeout(this._previousTimeout),
          this._liveElement?.remove(),
          (this._liveElement = null),
          this._currentResolve?.(),
          (this._currentPromise = this._currentResolve = void 0);
      }
      _createLiveElement() {
        let e = "cdk-live-announcer-element",
          i = this._document.getElementsByClassName(e),
          r = this._document.createElement("div");
        for (let a = 0; a < i.length; a++) i[a].remove();
        return (
          r.classList.add(e),
          r.classList.add("cdk-visually-hidden"),
          r.setAttribute("aria-atomic", "true"),
          r.setAttribute("aria-live", "polite"),
          (r.id = `cdk-live-announcer-${lv++}`),
          this._document.body.appendChild(r),
          r
        );
      }
      _exposeAnnouncerToModals(e) {
        let i = this._document.querySelectorAll(
          'body > .cdk-overlay-container [aria-modal="true"]'
        );
        for (let r = 0; r < i.length; r++) {
          let a = i[r],
            s = a.getAttribute("aria-owns");
          s
            ? s.indexOf(e) === -1 && a.setAttribute("aria-owns", s + " " + e)
            : a.setAttribute("aria-owns", e);
        }
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(h(av, 8), h(D), h(R), h(cv, 8));
    }),
      (t.ɵprov = x({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })();
var da = (function (n) {
    return (
      (n[(n.IMMEDIATE = 0)] = "IMMEDIATE"),
      (n[(n.EVENTUAL = 1)] = "EVENTUAL"),
      n
    );
  })(da || {}),
  dv = new w("cdk-focus-monitor-default-options"),
  la = Ce({ passive: !0, capture: !0 }),
  ai = (() => {
    let t = class t {
      constructor(e, i, r, a, s) {
        (this._ngZone = e),
          (this._platform = i),
          (this._inputModalityDetector = r),
          (this._origin = null),
          (this._windowFocused = !1),
          (this._originFromTouchInteraction = !1),
          (this._elementInfo = new Map()),
          (this._monitoredElementCount = 0),
          (this._rootNodeFocusListenerCount = new Map()),
          (this._windowFocusListener = () => {
            (this._windowFocused = !0),
              (this._windowFocusTimeoutId = window.setTimeout(
                () => (this._windowFocused = !1)
              ));
          }),
          (this._stopInputModalityDetector = new E()),
          (this._rootNodeFocusAndBlurListener = (c) => {
            let l = oe(c);
            for (let m = l; m; m = m.parentElement)
              c.type === "focus" ? this._onFocus(c, m) : this._onBlur(c, m);
          }),
          (this._document = a),
          (this._detectionMode = s?.detectionMode || da.IMMEDIATE);
      }
      monitor(e, i = !1) {
        let r = ae(e);
        if (!this._platform.isBrowser || r.nodeType !== 1) return I();
        let a = xh(r) || this._getDocument(),
          s = this._elementInfo.get(r);
        if (s) return i && (s.checkChildren = !0), s.subject;
        let c = { checkChildren: i, subject: new E(), rootNode: a };
        return (
          this._elementInfo.set(r, c),
          this._registerGlobalListeners(c),
          c.subject
        );
      }
      stopMonitoring(e) {
        let i = ae(e),
          r = this._elementInfo.get(i);
        r &&
          (r.subject.complete(),
          this._setClasses(i),
          this._elementInfo.delete(i),
          this._removeGlobalListeners(r));
      }
      focusVia(e, i, r) {
        let a = ae(e),
          s = this._getDocument().activeElement;
        a === s
          ? this._getClosestElementsInfo(a).forEach(([c, l]) =>
              this._originChanged(c, i, l)
            )
          : (this._setOrigin(i), typeof a.focus == "function" && a.focus(r));
      }
      ngOnDestroy() {
        this._elementInfo.forEach((e, i) => this.stopMonitoring(i));
      }
      _getDocument() {
        return this._document || document;
      }
      _getWindow() {
        return this._getDocument().defaultView || window;
      }
      _getFocusOrigin(e) {
        return this._origin
          ? this._originFromTouchInteraction
            ? this._shouldBeAttributedToTouch(e)
              ? "touch"
              : "program"
            : this._origin
          : this._windowFocused && this._lastFocusOrigin
          ? this._lastFocusOrigin
          : e && this._isLastInteractionFromInputLabel(e)
          ? "mouse"
          : "program";
      }
      _shouldBeAttributedToTouch(e) {
        return (
          this._detectionMode === da.EVENTUAL ||
          !!e?.contains(this._inputModalityDetector._mostRecentTarget)
        );
      }
      _setClasses(e, i) {
        e.classList.toggle("cdk-focused", !!i),
          e.classList.toggle("cdk-touch-focused", i === "touch"),
          e.classList.toggle("cdk-keyboard-focused", i === "keyboard"),
          e.classList.toggle("cdk-mouse-focused", i === "mouse"),
          e.classList.toggle("cdk-program-focused", i === "program");
      }
      _setOrigin(e, i = !1) {
        this._ngZone.runOutsideAngular(() => {
          if (
            ((this._origin = e),
            (this._originFromTouchInteraction = e === "touch" && i),
            this._detectionMode === da.IMMEDIATE)
          ) {
            clearTimeout(this._originTimeoutId);
            let r = this._originFromTouchInteraction ? Oh : 1;
            this._originTimeoutId = setTimeout(() => (this._origin = null), r);
          }
        });
      }
      _onFocus(e, i) {
        let r = this._elementInfo.get(i),
          a = oe(e);
        !r ||
          (!r.checkChildren && i !== a) ||
          this._originChanged(i, this._getFocusOrigin(a), r);
      }
      _onBlur(e, i) {
        let r = this._elementInfo.get(i);
        !r ||
          (r.checkChildren &&
            e.relatedTarget instanceof Node &&
            i.contains(e.relatedTarget)) ||
          (this._setClasses(i), this._emitOrigin(r, null));
      }
      _emitOrigin(e, i) {
        e.subject.observers.length && this._ngZone.run(() => e.subject.next(i));
      }
      _registerGlobalListeners(e) {
        if (!this._platform.isBrowser) return;
        let i = e.rootNode,
          r = this._rootNodeFocusListenerCount.get(i) || 0;
        r ||
          this._ngZone.runOutsideAngular(() => {
            i.addEventListener("focus", this._rootNodeFocusAndBlurListener, la),
              i.addEventListener(
                "blur",
                this._rootNodeFocusAndBlurListener,
                la
              );
          }),
          this._rootNodeFocusListenerCount.set(i, r + 1),
          ++this._monitoredElementCount === 1 &&
            (this._ngZone.runOutsideAngular(() => {
              this._getWindow().addEventListener(
                "focus",
                this._windowFocusListener
              );
            }),
            this._inputModalityDetector.modalityDetected
              .pipe(tt(this._stopInputModalityDetector))
              .subscribe((a) => {
                this._setOrigin(a, !0);
              }));
      }
      _removeGlobalListeners(e) {
        let i = e.rootNode;
        if (this._rootNodeFocusListenerCount.has(i)) {
          let r = this._rootNodeFocusListenerCount.get(i);
          r > 1
            ? this._rootNodeFocusListenerCount.set(i, r - 1)
            : (i.removeEventListener(
                "focus",
                this._rootNodeFocusAndBlurListener,
                la
              ),
              i.removeEventListener(
                "blur",
                this._rootNodeFocusAndBlurListener,
                la
              ),
              this._rootNodeFocusListenerCount.delete(i));
        }
        --this._monitoredElementCount ||
          (this._getWindow().removeEventListener(
            "focus",
            this._windowFocusListener
          ),
          this._stopInputModalityDetector.next(),
          clearTimeout(this._windowFocusTimeoutId),
          clearTimeout(this._originTimeoutId));
      }
      _originChanged(e, i, r) {
        this._setClasses(e, i),
          this._emitOrigin(r, i),
          (this._lastFocusOrigin = i);
      }
      _getClosestElementsInfo(e) {
        let i = [];
        return (
          this._elementInfo.forEach((r, a) => {
            (a === e || (r.checkChildren && a.contains(e))) && i.push([a, r]);
          }),
          i
        );
      }
      _isLastInteractionFromInputLabel(e) {
        let { _mostRecentTarget: i, mostRecentModality: r } =
          this._inputModalityDetector;
        if (
          r !== "mouse" ||
          !i ||
          i === e ||
          (e.nodeName !== "INPUT" && e.nodeName !== "TEXTAREA") ||
          e.disabled
        )
          return !1;
        let a = e.labels;
        if (a) {
          for (let s = 0; s < a.length; s++) if (a[s].contains(i)) return !0;
        }
        return !1;
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(h(D), h(G), h(rv), h(R, 8), h(dv, 8));
    }),
      (t.ɵprov = x({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })();
var Vi = (function (n) {
    return (
      (n[(n.NONE = 0)] = "NONE"),
      (n[(n.BLACK_ON_WHITE = 1)] = "BLACK_ON_WHITE"),
      (n[(n.WHITE_ON_BLACK = 2)] = "WHITE_ON_BLACK"),
      n
    );
  })(Vi || {}),
  Sh = "cdk-high-contrast-black-on-white",
  Ih = "cdk-high-contrast-white-on-black",
  Pc = "cdk-high-contrast-active",
  Wc = (() => {
    let t = class t {
      constructor(e, i) {
        (this._platform = e),
          (this._document = i),
          (this._breakpointSubscription = _(sa)
            .observe("(forced-colors: active)")
            .subscribe(() => {
              this._hasCheckedHighContrastMode &&
                ((this._hasCheckedHighContrastMode = !1),
                this._applyBodyHighContrastModeCssClasses());
            }));
      }
      getHighContrastMode() {
        if (!this._platform.isBrowser) return Vi.NONE;
        let e = this._document.createElement("div");
        (e.style.backgroundColor = "rgb(1,2,3)"),
          (e.style.position = "absolute"),
          this._document.body.appendChild(e);
        let i = this._document.defaultView || window,
          r = i && i.getComputedStyle ? i.getComputedStyle(e) : null,
          a = ((r && r.backgroundColor) || "").replace(/ /g, "");
        switch ((e.remove(), a)) {
          case "rgb(0,0,0)":
          case "rgb(45,50,54)":
          case "rgb(32,32,32)":
            return Vi.WHITE_ON_BLACK;
          case "rgb(255,255,255)":
          case "rgb(255,250,239)":
            return Vi.BLACK_ON_WHITE;
        }
        return Vi.NONE;
      }
      ngOnDestroy() {
        this._breakpointSubscription.unsubscribe();
      }
      _applyBodyHighContrastModeCssClasses() {
        if (
          !this._hasCheckedHighContrastMode &&
          this._platform.isBrowser &&
          this._document.body
        ) {
          let e = this._document.body.classList;
          e.remove(Pc, Sh, Ih), (this._hasCheckedHighContrastMode = !0);
          let i = this.getHighContrastMode();
          i === Vi.BLACK_ON_WHITE
            ? e.add(Pc, Sh)
            : i === Vi.WHITE_ON_BLACK && e.add(Pc, Ih);
        }
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(h(G), h(R));
    }),
      (t.ɵprov = x({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })(),
  _a = (() => {
    let t = class t {
      constructor(e) {
        e._applyBodyHighContrastModeCssClasses();
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(h(Wc));
    }),
      (t.ɵmod = T({ type: t })),
      (t.ɵinj = M({ imports: [yn] }));
    let n = t;
    return n;
  })();
var mv = new w("cdk-dir-doc", { providedIn: "root", factory: hv });
function hv() {
  return _(R);
}
var uv =
  /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function pv(n) {
  let t = n?.toLowerCase() || "";
  return t === "auto" && typeof navigator < "u" && navigator?.language
    ? uv.test(navigator.language)
      ? "rtl"
      : "ltr"
    : t === "rtl"
    ? "rtl"
    : "ltr";
}
var se = (() => {
  let t = class t {
    constructor(e) {
      if (((this.value = "ltr"), (this.change = new et()), e)) {
        let i = e.body ? e.body.dir : null,
          r = e.documentElement ? e.documentElement.dir : null;
        this.value = pv(i || r || "ltr");
      }
    }
    ngOnDestroy() {
      this.change.complete();
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(h(mv, 8));
  }),
    (t.ɵprov = x({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let n = t;
  return n;
})();
var si = (() => {
  let t = class t {};
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵmod = T({ type: t })),
    (t.ɵinj = M({}));
  let n = t;
  return n;
})();
var fv = ["text"],
  gv = [[["mat-icon"]], "*"],
  bv = ["mat-icon", "*"];
function _v(n, t) {
  if ((n & 1 && O(0, "mat-pseudo-checkbox", 1), n & 2)) {
    let o = P();
    C("disabled", o.disabled)("state", o.selected ? "checked" : "unchecked");
  }
}
function vv(n, t) {
  if ((n & 1 && O(0, "mat-pseudo-checkbox", 3), n & 2)) {
    let o = P();
    C("disabled", o.disabled);
  }
}
function xv(n, t) {
  if ((n & 1 && (u(0, "span", 4), y(1), p()), n & 2)) {
    let o = P();
    v(), ie("(", o.group.label, ")");
  }
}
function yv() {
  return !0;
}
var wv = new w("mat-sanity-checks", { providedIn: "root", factory: yv }),
  Q = (() => {
    let t = class t {
      constructor(e, i, r) {
        (this._sanityChecks = i),
          (this._document = r),
          (this._hasDoneGlobalChecks = !1),
          e._applyBodyHighContrastModeCssClasses(),
          this._hasDoneGlobalChecks || (this._hasDoneGlobalChecks = !0);
      }
      _checkIsEnabled(e) {
        return No()
          ? !1
          : typeof this._sanityChecks == "boolean"
          ? this._sanityChecks
          : !!this._sanityChecks[e];
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(h(Wc), h(wv, 8), h(R));
    }),
      (t.ɵmod = T({ type: t })),
      (t.ɵinj = M({ imports: [si, si] }));
    let n = t;
    return n;
  })();
var Cn = class {
  constructor(t, o, e, i, r) {
    (this._defaultMatcher = t),
      (this.ngControl = o),
      (this._parentFormGroup = e),
      (this._parentForm = i),
      (this._stateChanges = r),
      (this.errorState = !1);
  }
  updateErrorState() {
    let t = this.errorState,
      o = this._parentFormGroup || this._parentForm,
      e = this.matcher || this._defaultMatcher,
      i = this.ngControl ? this.ngControl.control : null,
      r = e?.isErrorState(i, o) ?? !1;
    r !== t && ((this.errorState = r), this._stateChanges.next());
  }
};
var Ca = (() => {
  let t = class t {
    isErrorState(e, i) {
      return !!(e && e.invalid && (e.touched || (i && i.submitted)));
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵprov = x({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let n = t;
  return n;
})();
var ce = (function (n) {
    return (
      (n[(n.FADING_IN = 0)] = "FADING_IN"),
      (n[(n.VISIBLE = 1)] = "VISIBLE"),
      (n[(n.FADING_OUT = 2)] = "FADING_OUT"),
      (n[(n.HIDDEN = 3)] = "HIDDEN"),
      n
    );
  })(ce || {}),
  Yc = class {
    constructor(t, o, e, i = !1) {
      (this._renderer = t),
        (this.element = o),
        (this.config = e),
        (this._animationForciblyDisabledThroughCss = i),
        (this.state = ce.HIDDEN);
    }
    fadeOut() {
      this._renderer.fadeOutRipple(this);
    }
  },
  Rh = Ce({ passive: !0, capture: !0 }),
  Xc = class {
    constructor() {
      (this._events = new Map()),
        (this._delegateEventHandler = (t) => {
          let o = oe(t);
          o &&
            this._events.get(t.type)?.forEach((e, i) => {
              (i === o || i.contains(o)) && e.forEach((r) => r.handleEvent(t));
            });
        });
    }
    addHandler(t, o, e, i) {
      let r = this._events.get(o);
      if (r) {
        let a = r.get(e);
        a ? a.add(i) : r.set(e, new Set([i]));
      } else
        this._events.set(o, new Map([[e, new Set([i])]])),
          t.runOutsideAngular(() => {
            document.addEventListener(o, this._delegateEventHandler, Rh);
          });
    }
    removeHandler(t, o, e) {
      let i = this._events.get(t);
      if (!i) return;
      let r = i.get(o);
      r &&
        (r.delete(e),
        r.size === 0 && i.delete(o),
        i.size === 0 &&
          (this._events.delete(t),
          document.removeEventListener(t, this._delegateEventHandler, Rh)));
    }
  },
  Fh = { enterDuration: 225, exitDuration: 150 },
  kv = 800,
  Ph = Ce({ passive: !0, capture: !0 }),
  Lh = ["mousedown", "touchstart"],
  Nh = ["mouseup", "mouseleave", "touchend", "touchcancel"],
  zo = class zo {
    constructor(t, o, e, i) {
      (this._target = t),
        (this._ngZone = o),
        (this._platform = i),
        (this._isPointerDown = !1),
        (this._activeRipples = new Map()),
        (this._pointerUpEventsRegistered = !1),
        i.isBrowser && (this._containerElement = ae(e));
    }
    fadeInRipple(t, o, e = {}) {
      let i = (this._containerRect =
          this._containerRect ||
          this._containerElement.getBoundingClientRect()),
        r = b(b({}, Fh), e.animation);
      e.centered && ((t = i.left + i.width / 2), (o = i.top + i.height / 2));
      let a = e.radius || Cv(t, o, i),
        s = t - i.left,
        c = o - i.top,
        l = r.enterDuration,
        m = document.createElement("div");
      m.classList.add("mat-ripple-element"),
        (m.style.left = `${s - a}px`),
        (m.style.top = `${c - a}px`),
        (m.style.height = `${a * 2}px`),
        (m.style.width = `${a * 2}px`),
        e.color != null && (m.style.backgroundColor = e.color),
        (m.style.transitionDuration = `${l}ms`),
        this._containerElement.appendChild(m);
      let f = window.getComputedStyle(m),
        g = f.transitionProperty,
        k = f.transitionDuration,
        S =
          g === "none" ||
          k === "0s" ||
          k === "0s, 0s" ||
          (i.width === 0 && i.height === 0),
        $ = new Yc(this, m, e, S);
      (m.style.transform = "scale3d(1, 1, 1)"),
        ($.state = ce.FADING_IN),
        e.persistent || (this._mostRecentTransientRipple = $);
      let N = null;
      return (
        !S &&
          (l || r.exitDuration) &&
          this._ngZone.runOutsideAngular(() => {
            let U = () => this._finishRippleTransition($),
              It = () => this._destroyRipple($);
            m.addEventListener("transitionend", U),
              m.addEventListener("transitioncancel", It),
              (N = { onTransitionEnd: U, onTransitionCancel: It });
          }),
        this._activeRipples.set($, N),
        (S || !l) && this._finishRippleTransition($),
        $
      );
    }
    fadeOutRipple(t) {
      if (t.state === ce.FADING_OUT || t.state === ce.HIDDEN) return;
      let o = t.element,
        e = b(b({}, Fh), t.config.animation);
      (o.style.transitionDuration = `${e.exitDuration}ms`),
        (o.style.opacity = "0"),
        (t.state = ce.FADING_OUT),
        (t._animationForciblyDisabledThroughCss || !e.exitDuration) &&
          this._finishRippleTransition(t);
    }
    fadeOutAll() {
      this._getActiveRipples().forEach((t) => t.fadeOut());
    }
    fadeOutAllNonPersistent() {
      this._getActiveRipples().forEach((t) => {
        t.config.persistent || t.fadeOut();
      });
    }
    setupTriggerEvents(t) {
      let o = ae(t);
      !this._platform.isBrowser ||
        !o ||
        o === this._triggerElement ||
        (this._removeTriggerEvents(),
        (this._triggerElement = o),
        Lh.forEach((e) => {
          zo._eventManager.addHandler(this._ngZone, e, o, this);
        }));
    }
    handleEvent(t) {
      t.type === "mousedown"
        ? this._onMousedown(t)
        : t.type === "touchstart"
        ? this._onTouchStart(t)
        : this._onPointerUp(),
        this._pointerUpEventsRegistered ||
          (this._ngZone.runOutsideAngular(() => {
            Nh.forEach((o) => {
              this._triggerElement.addEventListener(o, this, Ph);
            });
          }),
          (this._pointerUpEventsRegistered = !0));
    }
    _finishRippleTransition(t) {
      t.state === ce.FADING_IN
        ? this._startFadeOutTransition(t)
        : t.state === ce.FADING_OUT && this._destroyRipple(t);
    }
    _startFadeOutTransition(t) {
      let o = t === this._mostRecentTransientRipple,
        { persistent: e } = t.config;
      (t.state = ce.VISIBLE), !e && (!o || !this._isPointerDown) && t.fadeOut();
    }
    _destroyRipple(t) {
      let o = this._activeRipples.get(t) ?? null;
      this._activeRipples.delete(t),
        this._activeRipples.size || (this._containerRect = null),
        t === this._mostRecentTransientRipple &&
          (this._mostRecentTransientRipple = null),
        (t.state = ce.HIDDEN),
        o !== null &&
          (t.element.removeEventListener("transitionend", o.onTransitionEnd),
          t.element.removeEventListener(
            "transitioncancel",
            o.onTransitionCancel
          )),
        t.element.remove();
    }
    _onMousedown(t) {
      let o = Hc(t),
        e =
          this._lastTouchStartEvent &&
          Date.now() < this._lastTouchStartEvent + kv;
      !this._target.rippleDisabled &&
        !o &&
        !e &&
        ((this._isPointerDown = !0),
        this.fadeInRipple(t.clientX, t.clientY, this._target.rippleConfig));
    }
    _onTouchStart(t) {
      if (!this._target.rippleDisabled && !$c(t)) {
        (this._lastTouchStartEvent = Date.now()), (this._isPointerDown = !0);
        let o = t.changedTouches;
        if (o)
          for (let e = 0; e < o.length; e++)
            this.fadeInRipple(
              o[e].clientX,
              o[e].clientY,
              this._target.rippleConfig
            );
      }
    }
    _onPointerUp() {
      this._isPointerDown &&
        ((this._isPointerDown = !1),
        this._getActiveRipples().forEach((t) => {
          let o =
            t.state === ce.VISIBLE ||
            (t.config.terminateOnPointerUp && t.state === ce.FADING_IN);
          !t.config.persistent && o && t.fadeOut();
        }));
    }
    _getActiveRipples() {
      return Array.from(this._activeRipples.keys());
    }
    _removeTriggerEvents() {
      let t = this._triggerElement;
      t &&
        (Lh.forEach((o) => zo._eventManager.removeHandler(o, t, this)),
        this._pointerUpEventsRegistered &&
          (Nh.forEach((o) => t.removeEventListener(o, this, Ph)),
          (this._pointerUpEventsRegistered = !1)));
    }
  };
zo._eventManager = new Xc();
var ya = zo;
function Cv(n, t, o) {
  let e = Math.max(Math.abs(n - o.left), Math.abs(n - o.right)),
    i = Math.max(Math.abs(t - o.top), Math.abs(t - o.bottom));
  return Math.sqrt(e * e + i * i);
}
var Qc = new w("mat-ripple-global-options"),
  Bh = (() => {
    let t = class t {
      get disabled() {
        return this._disabled;
      }
      set disabled(e) {
        e && this.fadeOutAllNonPersistent(),
          (this._disabled = e),
          this._setupTriggerEventsIfEnabled();
      }
      get trigger() {
        return this._trigger || this._elementRef.nativeElement;
      }
      set trigger(e) {
        (this._trigger = e), this._setupTriggerEventsIfEnabled();
      }
      constructor(e, i, r, a, s) {
        (this._elementRef = e),
          (this._animationMode = s),
          (this.radius = 0),
          (this._disabled = !1),
          (this._isInitialized = !1),
          (this._globalOptions = a || {}),
          (this._rippleRenderer = new ya(this, i, e, r));
      }
      ngOnInit() {
        (this._isInitialized = !0), this._setupTriggerEventsIfEnabled();
      }
      ngOnDestroy() {
        this._rippleRenderer._removeTriggerEvents();
      }
      fadeOutAll() {
        this._rippleRenderer.fadeOutAll();
      }
      fadeOutAllNonPersistent() {
        this._rippleRenderer.fadeOutAllNonPersistent();
      }
      get rippleConfig() {
        return {
          centered: this.centered,
          radius: this.radius,
          color: this.color,
          animation: b(
            b(
              b({}, this._globalOptions.animation),
              this._animationMode === "NoopAnimations"
                ? { enterDuration: 0, exitDuration: 0 }
                : {}
            ),
            this.animation
          ),
          terminateOnPointerUp: this._globalOptions.terminateOnPointerUp,
        };
      }
      get rippleDisabled() {
        return this.disabled || !!this._globalOptions.disabled;
      }
      _setupTriggerEventsIfEnabled() {
        !this.disabled &&
          this._isInitialized &&
          this._rippleRenderer.setupTriggerEvents(this.trigger);
      }
      launch(e, i = 0, r) {
        return typeof e == "number"
          ? this._rippleRenderer.fadeInRipple(
              e,
              i,
              b(b({}, this.rippleConfig), r)
            )
          : this._rippleRenderer.fadeInRipple(
              0,
              0,
              b(b({}, this.rippleConfig), e)
            );
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(L), d(D), d(G), d(Qc, 8), d(At, 8));
    }),
      (t.ɵdir = F({
        type: t,
        selectors: [
          ["", "mat-ripple", ""],
          ["", "matRipple", ""],
        ],
        hostAttrs: [1, "mat-ripple"],
        hostVars: 2,
        hostBindings: function (i, r) {
          i & 2 && q("mat-ripple-unbounded", r.unbounded);
        },
        inputs: {
          color: [0, "matRippleColor", "color"],
          unbounded: [0, "matRippleUnbounded", "unbounded"],
          centered: [0, "matRippleCentered", "centered"],
          radius: [0, "matRippleRadius", "radius"],
          animation: [0, "matRippleAnimation", "animation"],
          disabled: [0, "matRippleDisabled", "disabled"],
          trigger: [0, "matRippleTrigger", "trigger"],
        },
        exportAs: ["matRipple"],
        standalone: !0,
      }));
    let n = t;
    return n;
  })(),
  Vo = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵmod = T({ type: t })),
      (t.ɵinj = M({ imports: [Q, Q] }));
    let n = t;
    return n;
  })(),
  Ev = (() => {
    let t = class t {
      constructor(e) {
        (this._animationMode = e),
          (this.state = "unchecked"),
          (this.disabled = !1),
          (this.appearance = "full");
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(At, 8));
    }),
      (t.ɵcmp = z({
        type: t,
        selectors: [["mat-pseudo-checkbox"]],
        hostAttrs: [1, "mat-pseudo-checkbox"],
        hostVars: 12,
        hostBindings: function (i, r) {
          i & 2 &&
            q("mat-pseudo-checkbox-indeterminate", r.state === "indeterminate")(
              "mat-pseudo-checkbox-checked",
              r.state === "checked"
            )("mat-pseudo-checkbox-disabled", r.disabled)(
              "mat-pseudo-checkbox-minimal",
              r.appearance === "minimal"
            )("mat-pseudo-checkbox-full", r.appearance === "full")(
              "_mat-animation-noopable",
              r._animationMode === "NoopAnimations"
            );
        },
        inputs: {
          state: "state",
          disabled: "disabled",
          appearance: "appearance",
        },
        standalone: !0,
        features: [V],
        decls: 0,
        vars: 0,
        template: function (i, r) {},
        styles: [
          '.mat-pseudo-checkbox{border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:"";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-pseudo-checkbox._mat-animation-noopable::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{left:1px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{left:1px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-minimal-pseudo-checkbox-selected-checkmark-color)}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color)}.mat-pseudo-checkbox-full{border-color:var(--mat-full-pseudo-checkbox-unselected-icon-color);border-width:2px;border-style:solid}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled{border-color:var(--mat-full-pseudo-checkbox-disabled-unselected-icon-color)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate{background-color:var(--mat-full-pseudo-checkbox-selected-icon-color);border-color:rgba(0,0,0,0)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-full-pseudo-checkbox-selected-checkmark-color)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background-color:var(--mat-full-pseudo-checkbox-disabled-selected-icon-color)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-full-pseudo-checkbox-disabled-selected-checkmark-color)}.mat-pseudo-checkbox{width:18px;height:18px}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after{width:14px;height:6px;transform-origin:center;top:-4.2426406871px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{top:8px;width:16px}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after{width:10px;height:4px;transform-origin:center;top:-2.8284271247px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{top:6px;width:12px}',
        ],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let n = t;
    return n;
  })(),
  Kc = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵmod = T({ type: t })),
      (t.ɵinj = M({ imports: [Q] }));
    let n = t;
    return n;
  })(),
  Jc = new w("MAT_OPTION_PARENT_COMPONENT");
var tl = new w("MatOptgroup");
var Sv = 0,
  Zc = class {
    constructor(t, o = !1) {
      (this.source = t), (this.isUserInput = o);
    }
  },
  En = (() => {
    let t = class t {
      get multiple() {
        return this._parent && this._parent.multiple;
      }
      get selected() {
        return this._selected;
      }
      get disabled() {
        return (this.group && this.group.disabled) || this._disabled;
      }
      set disabled(e) {
        this._disabled = e;
      }
      get disableRipple() {
        return !!(this._parent && this._parent.disableRipple);
      }
      get hideSingleSelectionIndicator() {
        return !!(this._parent && this._parent.hideSingleSelectionIndicator);
      }
      constructor(e, i, r, a) {
        (this._element = e),
          (this._changeDetectorRef = i),
          (this._parent = r),
          (this.group = a),
          (this._selected = !1),
          (this._active = !1),
          (this._disabled = !1),
          (this._mostRecentViewValue = ""),
          (this.id = `mat-option-${Sv++}`),
          (this.onSelectionChange = new et()),
          (this._stateChanges = new E());
      }
      get active() {
        return this._active;
      }
      get viewValue() {
        return (this._text?.nativeElement.textContent || "").trim();
      }
      select(e = !0) {
        this._selected ||
          ((this._selected = !0),
          this._changeDetectorRef.markForCheck(),
          e && this._emitSelectionChangeEvent());
      }
      deselect(e = !0) {
        this._selected &&
          ((this._selected = !1),
          this._changeDetectorRef.markForCheck(),
          e && this._emitSelectionChangeEvent());
      }
      focus(e, i) {
        let r = this._getHostElement();
        typeof r.focus == "function" && r.focus(i);
      }
      setActiveStyles() {
        this._active ||
          ((this._active = !0), this._changeDetectorRef.markForCheck());
      }
      setInactiveStyles() {
        this._active &&
          ((this._active = !1), this._changeDetectorRef.markForCheck());
      }
      getLabel() {
        return this.viewValue;
      }
      _handleKeydown(e) {
        (e.keyCode === 13 || e.keyCode === 32) &&
          !Ut(e) &&
          (this._selectViaInteraction(), e.preventDefault());
      }
      _selectViaInteraction() {
        this.disabled ||
          ((this._selected = this.multiple ? !this._selected : !0),
          this._changeDetectorRef.markForCheck(),
          this._emitSelectionChangeEvent(!0));
      }
      _getTabIndex() {
        return this.disabled ? "-1" : "0";
      }
      _getHostElement() {
        return this._element.nativeElement;
      }
      ngAfterViewChecked() {
        if (this._selected) {
          let e = this.viewValue;
          e !== this._mostRecentViewValue &&
            (this._mostRecentViewValue && this._stateChanges.next(),
            (this._mostRecentViewValue = e));
        }
      }
      ngOnDestroy() {
        this._stateChanges.complete();
      }
      _emitSelectionChangeEvent(e = !1) {
        this.onSelectionChange.emit(new Zc(this, e));
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(L), d(St), d(Jc, 8), d(tl, 8));
    }),
      (t.ɵcmp = z({
        type: t,
        selectors: [["mat-option"]],
        viewQuery: function (i, r) {
          if ((i & 1 && ft(fv, 7), i & 2)) {
            let a;
            X((a = Z())) && (r._text = a.first);
          }
        },
        hostAttrs: ["role", "option", 1, "mat-mdc-option", "mdc-list-item"],
        hostVars: 11,
        hostBindings: function (i, r) {
          i & 1 &&
            j("click", function () {
              return r._selectViaInteraction();
            })("keydown", function (s) {
              return r._handleKeydown(s);
            }),
            i & 2 &&
              (_e("id", r.id),
              K("aria-selected", r.selected)(
                "aria-disabled",
                r.disabled.toString()
              ),
              q("mdc-list-item--selected", r.selected)(
                "mat-mdc-option-multiple",
                r.multiple
              )("mat-mdc-option-active", r.active)(
                "mdc-list-item--disabled",
                r.disabled
              ));
        },
        inputs: {
          value: "value",
          id: "id",
          disabled: [2, "disabled", "disabled", it],
        },
        outputs: { onSelectionChange: "onSelectionChange" },
        exportAs: ["matOption"],
        standalone: !0,
        features: [Mt, V],
        ngContentSelectors: bv,
        decls: 8,
        vars: 5,
        consts: [
          ["text", ""],
          [
            "aria-hidden",
            "true",
            1,
            "mat-mdc-option-pseudo-checkbox",
            3,
            "disabled",
            "state",
          ],
          [1, "mdc-list-item__primary-text"],
          [
            "state",
            "checked",
            "aria-hidden",
            "true",
            "appearance",
            "minimal",
            1,
            "mat-mdc-option-pseudo-checkbox",
            3,
            "disabled",
          ],
          [1, "cdk-visually-hidden"],
          [
            "aria-hidden",
            "true",
            "mat-ripple",
            "",
            1,
            "mat-mdc-option-ripple",
            "mat-mdc-focus-indicator",
            3,
            "matRippleTrigger",
            "matRippleDisabled",
          ],
        ],
        template: function (i, r) {
          i & 1 &&
            (Ct(gv),
            A(0, _v, 1, 2, "mat-pseudo-checkbox", 1),
            Y(1),
            u(2, "span", 2, 0),
            Y(4, 1),
            p(),
            A(5, vv, 1, 1, "mat-pseudo-checkbox", 3)(6, xv, 2, 1, "span", 4),
            O(7, "div", 5)),
            i & 2 &&
              (ot(r.multiple ? 0 : -1),
              v(5),
              ot(
                !r.multiple && r.selected && !r.hideSingleSelectionIndicator
                  ? 5
                  : -1
              ),
              v(),
              ot(r.group && r.group._inert ? 6 : -1),
              v(),
              C("matRippleTrigger", r._getHostElement())(
                "matRippleDisabled",
                r.disabled || r.disableRipple
              ));
        },
        dependencies: [Ev, Bh],
        styles: [
          '.mat-mdc-option{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:16px;padding-right:16px;-webkit-user-select:none;user-select:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);color:var(--mat-option-label-text-color);font-family:var(--mat-option-label-text-font);line-height:var(--mat-option-label-text-line-height);font-size:var(--mat-option-label-text-size);letter-spacing:var(--mat-option-label-text-tracking);font-weight:var(--mat-option-label-text-weight);min-height:48px}.mat-mdc-option:focus{outline:none}[dir=rtl] .mat-mdc-option,.mat-mdc-option[dir=rtl]{padding-left:16px;padding-right:16px}.mat-mdc-option:hover:not(.mdc-list-item--disabled){background-color:var(--mat-option-hover-state-layer-color)}.mat-mdc-option:focus.mdc-list-item,.mat-mdc-option.mat-mdc-option-active.mdc-list-item{background-color:var(--mat-option-focus-state-layer-color)}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled) .mdc-list-item__primary-text{color:var(--mat-option-selected-state-label-text-color)}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-multiple){background-color:var(--mat-option-selected-state-layer-color)}.mat-mdc-option.mdc-list-item{align-items:center;background:rgba(0,0,0,0)}.mat-mdc-option.mdc-list-item--disabled{cursor:default;pointer-events:none}.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox,.mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text,.mat-mdc-option.mdc-list-item--disabled>mat-icon{opacity:.38}.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:32px}[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:16px;padding-right:32px}.mat-mdc-option .mat-icon,.mat-mdc-option .mat-pseudo-checkbox-full{margin-right:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-icon,[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full{margin-right:0;margin-left:16px}.mat-mdc-option .mat-pseudo-checkbox-minimal{margin-left:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal{margin-right:16px;margin-left:0}.mat-mdc-option .mat-mdc-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-option .mdc-list-item__primary-text{white-space:normal;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;margin-right:auto}[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text{margin-right:0;margin-left:auto}.cdk-high-contrast-active .mat-mdc-option.mdc-list-item--selected:not(.mat-mdc-option-multiple)::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}[dir=rtl] .cdk-high-contrast-active .mat-mdc-option.mdc-list-item--selected:not(.mat-mdc-option-multiple)::after{right:auto;left:16px}.mat-mdc-option-multiple{--mdc-list-list-item-selected-container-color:var(--mdc-list-list-item-container-color, transparent)}.mat-mdc-option-active .mat-mdc-focus-indicator::before{content:""}',
        ],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let n = t;
    return n;
  })();
function Uh(n, t, o) {
  if (o.length) {
    let e = t.toArray(),
      i = o.toArray(),
      r = 0;
    for (let a = 0; a < n + 1; a++) e[a].group && e[a].group === i[r] && r++;
    return r;
  }
  return 0;
}
function Hh(n, t, o, e) {
  return n < o ? n : n + t > o + e ? Math.max(0, n - e + t) : o;
}
var Bo = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵmod = T({ type: t })),
      (t.ɵinj = M({ imports: [Vo, Q, Kc] }));
    let n = t;
    return n;
  })(),
  jh = { capture: !0 },
  zh = ["focus", "click", "mouseenter", "touchstart"],
  qc = "mat-ripple-loader-uninitialized",
  Gc = "mat-ripple-loader-class-name",
  Vh = "mat-ripple-loader-centered",
  xa = "mat-ripple-loader-disabled",
  $h = (() => {
    let t = class t {
      constructor() {
        (this._document = _(R, { optional: !0 })),
          (this._animationMode = _(At, { optional: !0 })),
          (this._globalRippleOptions = _(Qc, { optional: !0 })),
          (this._platform = _(G)),
          (this._ngZone = _(D)),
          (this._hosts = new Map()),
          (this._onInteraction = (e) => {
            if (!(e.target instanceof HTMLElement)) return;
            let r = e.target.closest(`[${qc}]`);
            r && this._createRipple(r);
          }),
          this._ngZone.runOutsideAngular(() => {
            for (let e of zh)
              this._document?.addEventListener(e, this._onInteraction, jh);
          });
      }
      ngOnDestroy() {
        let e = this._hosts.keys();
        for (let i of e) this.destroyRipple(i);
        for (let i of zh)
          this._document?.removeEventListener(i, this._onInteraction, jh);
      }
      configureRipple(e, i) {
        e.setAttribute(qc, ""),
          (i.className || !e.hasAttribute(Gc)) &&
            e.setAttribute(Gc, i.className || ""),
          i.centered && e.setAttribute(Vh, ""),
          i.disabled && e.setAttribute(xa, "");
      }
      getRipple(e) {
        return this._hosts.get(e) || this._createRipple(e);
      }
      setDisabled(e, i) {
        let r = this._hosts.get(e);
        if (r) {
          r.disabled = i;
          return;
        }
        i ? e.setAttribute(xa, "") : e.removeAttribute(xa);
      }
      _createRipple(e) {
        if (!this._document) return;
        let i = this._hosts.get(e);
        if (i) return i;
        e.querySelector(".mat-ripple")?.remove();
        let r = this._document.createElement("span");
        r.classList.add("mat-ripple", e.getAttribute(Gc)), e.append(r);
        let a = new Bh(
          new L(r),
          this._ngZone,
          this._platform,
          this._globalRippleOptions ? this._globalRippleOptions : void 0,
          this._animationMode ? this._animationMode : void 0
        );
        return (
          (a._isInitialized = !0),
          (a.trigger = e),
          (a.centered = e.hasAttribute(Vh)),
          (a.disabled = e.hasAttribute(xa)),
          this.attachRipple(e, a),
          a
        );
      }
      attachRipple(e, i) {
        e.removeAttribute(qc), this._hosts.set(e, i);
      }
      destroyRipple(e) {
        let i = this._hosts.get(e);
        i && (i.ngOnDestroy(), this._hosts.delete(e));
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵprov = x({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })();
var Iv = ["*", [["mat-toolbar-row"]]],
  Dv = ["*", "mat-toolbar-row"],
  Av = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵdir = F({
        type: t,
        selectors: [["mat-toolbar-row"]],
        hostAttrs: [1, "mat-toolbar-row"],
        exportAs: ["matToolbarRow"],
        standalone: !0,
      }));
    let n = t;
    return n;
  })(),
  Ea = (() => {
    let t = class t {
      constructor(e, i, r) {
        (this._elementRef = e), (this._platform = i), (this._document = r);
      }
      ngAfterViewInit() {
        this._platform.isBrowser &&
          (this._checkToolbarMixedModes(),
          this._toolbarRows.changes.subscribe(() =>
            this._checkToolbarMixedModes()
          ));
      }
      _checkToolbarMixedModes() {
        this._toolbarRows.length;
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(L), d(G), d(R));
    }),
      (t.ɵcmp = z({
        type: t,
        selectors: [["mat-toolbar"]],
        contentQueries: function (i, r, a) {
          if ((i & 1 && Vt(a, Av, 5), i & 2)) {
            let s;
            X((s = Z())) && (r._toolbarRows = s);
          }
        },
        hostAttrs: [1, "mat-toolbar"],
        hostVars: 6,
        hostBindings: function (i, r) {
          i & 2 &&
            (Qe(r.color ? "mat-" + r.color : ""),
            q("mat-toolbar-multiple-rows", r._toolbarRows.length > 0)(
              "mat-toolbar-single-row",
              r._toolbarRows.length === 0
            ));
        },
        inputs: { color: "color" },
        exportAs: ["matToolbar"],
        standalone: !0,
        features: [V],
        ngContentSelectors: Dv,
        decls: 2,
        vars: 0,
        template: function (i, r) {
          i & 1 && (Ct(Iv), Y(0), Y(1, 1));
        },
        styles: [
          ".mat-toolbar{background:var(--mat-toolbar-container-background-color);color:var(--mat-toolbar-container-text-color)}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font);font-size:var(--mat-toolbar-title-text-size);line-height:var(--mat-toolbar-title-text-line-height);font-weight:var(--mat-toolbar-title-text-weight);letter-spacing:var(--mat-toolbar-title-text-tracking);margin:0}.cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mdc-text-button-label-text-color:var(--mat-toolbar-container-text-color);--mdc-outlined-button-label-text-color:var(--mat-toolbar-container-text-color)}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height)}}",
        ],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let n = t;
    return n;
  })();
var Sa = (() => {
  let t = class t {};
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵmod = T({ type: t })),
    (t.ɵinj = M({ imports: [Q, Q] }));
  let n = t;
  return n;
})();
var qh = ["mat-button", ""],
  Gh = [
    [
      ["", 8, "material-icons", 3, "iconPositionEnd", ""],
      ["mat-icon", 3, "iconPositionEnd", ""],
      ["", "matButtonIcon", "", 3, "iconPositionEnd", ""],
    ],
    "*",
    [
      ["", "iconPositionEnd", "", 8, "material-icons"],
      ["mat-icon", "iconPositionEnd", ""],
      ["", "matButtonIcon", "", "iconPositionEnd", ""],
    ],
  ],
  Yh = [
    ".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])",
    "*",
    ".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]",
  ],
  Mv =
    '.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:rgba(0,0,0,0)}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button[hidden]{display:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__progress-indicator{font-size:0;position:absolute;transform:translate(-50%, -50%);top:50%;left:50%;line-height:initial}.mdc-button .mdc-button__label{position:relative}.mdc-button .mdc-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px);display:none}@media screen and (forced-colors: active){.mdc-button .mdc-button__focus-ring{border-color:CanvasText}}.mdc-button .mdc-button__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-button .mdc-button__focus-ring::after{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{display:block}}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{padding:0 8px 0 8px}.mdc-button--unelevated{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--unelevated.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--unelevated.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--raised{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--raised.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--raised.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--outlined{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--outlined .mdc-button__ripple{border-style:solid;border-color:rgba(0,0,0,0)}.mat-mdc-button{font-family:var(--mdc-text-button-label-text-font);font-size:var(--mdc-text-button-label-text-size);letter-spacing:var(--mdc-text-button-label-text-tracking);font-weight:var(--mdc-text-button-label-text-weight);text-transform:var(--mdc-text-button-label-text-transform);height:var(--mdc-text-button-container-height);border-radius:var(--mdc-text-button-container-shape);padding:0 var(--mat-text-button-horizontal-padding, 8px)}.mat-mdc-button:not(:disabled){color:var(--mdc-text-button-label-text-color)}.mat-mdc-button:disabled{color:var(--mdc-text-button-disabled-label-text-color)}.mat-mdc-button .mdc-button__ripple{border-radius:var(--mdc-text-button-container-shape)}.mat-mdc-button:has(.material-icons,mat-icon,[matButtonIcon]){padding:0 var(--mat-text-button-with-icon-horizontal-padding, 8px)}.mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, 0)}[dir=rtl] .mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-offset, 0);margin-left:var(--mat-text-button-icon-spacing, 8px)}.mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-offset, 0);margin-left:var(--mat-text-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, 0)}.mat-mdc-button .mat-ripple-element{background-color:var(--mat-text-button-ripple-color)}.mat-mdc-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-state-layer-color)}.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-disabled-state-layer-color)}.mat-mdc-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-hover-state-layer-opacity)}.mat-mdc-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-focus-state-layer-opacity)}.mat-mdc-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-pressed-state-layer-opacity)}.mat-mdc-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-text-button-touch-target-display)}.mat-mdc-button[disabled],.mat-mdc-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-text-button-disabled-label-text-color)}.mat-mdc-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-unelevated-button{font-family:var(--mdc-filled-button-label-text-font);font-size:var(--mdc-filled-button-label-text-size);letter-spacing:var(--mdc-filled-button-label-text-tracking);font-weight:var(--mdc-filled-button-label-text-weight);text-transform:var(--mdc-filled-button-label-text-transform);height:var(--mdc-filled-button-container-height);border-radius:var(--mdc-filled-button-container-shape);padding:0 var(--mat-filled-button-horizontal-padding, 16px)}.mat-mdc-unelevated-button:not(:disabled){background-color:var(--mdc-filled-button-container-color)}.mat-mdc-unelevated-button:disabled{background-color:var(--mdc-filled-button-disabled-container-color)}.mat-mdc-unelevated-button:not(:disabled){color:var(--mdc-filled-button-label-text-color)}.mat-mdc-unelevated-button:disabled{color:var(--mdc-filled-button-disabled-label-text-color)}.mat-mdc-unelevated-button .mdc-button__ripple{border-radius:var(--mdc-filled-button-container-shape)}.mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -4px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}.mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -4px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -4px)}.mat-mdc-unelevated-button .mat-ripple-element{background-color:var(--mat-filled-button-ripple-color)}.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-state-layer-color)}.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-disabled-state-layer-color)}.mat-mdc-unelevated-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-hover-state-layer-opacity)}.mat-mdc-unelevated-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-focus-state-layer-opacity)}.mat-mdc-unelevated-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-pressed-state-layer-opacity)}.mat-mdc-unelevated-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-filled-button-touch-target-display)}.mat-mdc-unelevated-button[disabled],.mat-mdc-unelevated-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-filled-button-disabled-label-text-color);background-color:var(--mdc-filled-button-disabled-container-color)}.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-raised-button{font-family:var(--mdc-protected-button-label-text-font);font-size:var(--mdc-protected-button-label-text-size);letter-spacing:var(--mdc-protected-button-label-text-tracking);font-weight:var(--mdc-protected-button-label-text-weight);text-transform:var(--mdc-protected-button-label-text-transform);height:var(--mdc-protected-button-container-height);border-radius:var(--mdc-protected-button-container-shape);padding:0 var(--mat-protected-button-horizontal-padding, 16px);box-shadow:var(--mdc-protected-button-container-elevation-shadow)}.mat-mdc-raised-button:not(:disabled){background-color:var(--mdc-protected-button-container-color)}.mat-mdc-raised-button:disabled{background-color:var(--mdc-protected-button-disabled-container-color)}.mat-mdc-raised-button:not(:disabled){color:var(--mdc-protected-button-label-text-color)}.mat-mdc-raised-button:disabled{color:var(--mdc-protected-button-disabled-label-text-color)}.mat-mdc-raised-button .mdc-button__ripple{border-radius:var(--mdc-protected-button-container-shape)}.mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -4px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}.mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -4px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -4px)}.mat-mdc-raised-button .mat-ripple-element{background-color:var(--mat-protected-button-ripple-color)}.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-state-layer-color)}.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-disabled-state-layer-color)}.mat-mdc-raised-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-hover-state-layer-opacity)}.mat-mdc-raised-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-focus-state-layer-opacity)}.mat-mdc-raised-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-pressed-state-layer-opacity)}.mat-mdc-raised-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-protected-button-touch-target-display)}.mat-mdc-raised-button:hover{box-shadow:var(--mdc-protected-button-hover-container-elevation-shadow)}.mat-mdc-raised-button:focus{box-shadow:var(--mdc-protected-button-focus-container-elevation-shadow)}.mat-mdc-raised-button:active,.mat-mdc-raised-button:focus:active{box-shadow:var(--mdc-protected-button-pressed-container-elevation-shadow)}.mat-mdc-raised-button[disabled],.mat-mdc-raised-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-protected-button-disabled-label-text-color);background-color:var(--mdc-protected-button-disabled-container-color)}.mat-mdc-raised-button[disabled].mat-mdc-button-disabled,.mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled{box-shadow:var(--mdc-protected-button-disabled-container-elevation-shadow)}.mat-mdc-raised-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-outlined-button{font-family:var(--mdc-outlined-button-label-text-font);font-size:var(--mdc-outlined-button-label-text-size);letter-spacing:var(--mdc-outlined-button-label-text-tracking);font-weight:var(--mdc-outlined-button-label-text-weight);text-transform:var(--mdc-outlined-button-label-text-transform);height:var(--mdc-outlined-button-container-height);border-radius:var(--mdc-outlined-button-container-shape);padding:0 15px 0 15px;border-width:var(--mdc-outlined-button-outline-width);padding:0 var(--mat-outlined-button-horizontal-padding, 15px)}.mat-mdc-outlined-button:not(:disabled){color:var(--mdc-outlined-button-label-text-color)}.mat-mdc-outlined-button:disabled{color:var(--mdc-outlined-button-disabled-label-text-color)}.mat-mdc-outlined-button .mdc-button__ripple{border-radius:var(--mdc-outlined-button-container-shape)}.mat-mdc-outlined-button:not(:disabled){border-color:var(--mdc-outlined-button-outline-color)}.mat-mdc-outlined-button:disabled{border-color:var(--mdc-outlined-button-disabled-outline-color)}.mat-mdc-outlined-button.mdc-button--icon-trailing{padding:0 11px 0 15px}.mat-mdc-outlined-button.mdc-button--icon-leading{padding:0 15px 0 11px}.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:var(--mdc-outlined-button-outline-width)}.mat-mdc-outlined-button .mdc-button__touch{left:calc(-1 * var(--mdc-outlined-button-outline-width));width:calc(100% + 2 * var(--mdc-outlined-button-outline-width))}.mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -4px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}.mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -4px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -4px)}.mat-mdc-outlined-button .mat-ripple-element{background-color:var(--mat-outlined-button-ripple-color)}.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-state-layer-color)}.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-disabled-state-layer-color)}.mat-mdc-outlined-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-hover-state-layer-opacity)}.mat-mdc-outlined-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-focus-state-layer-opacity)}.mat-mdc-outlined-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-pressed-state-layer-opacity)}.mat-mdc-outlined-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-outlined-button-touch-target-display)}.mat-mdc-outlined-button[disabled],.mat-mdc-outlined-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-outlined-button-disabled-label-text-color);border-color:var(--mdc-outlined-button-disabled-outline-color)}.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-button-base{text-decoration:none}.mat-mdc-button,.mat-mdc-unelevated-button,.mat-mdc-raised-button,.mat-mdc-outlined-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-button .mdc-button__label,.mat-mdc-unelevated-button .mdc-button__label,.mat-mdc-raised-button .mdc-button__label,.mat-mdc-outlined-button .mdc-button__label{z-index:1}.mat-mdc-button .mat-mdc-focus-indicator,.mat-mdc-unelevated-button .mat-mdc-focus-indicator,.mat-mdc-raised-button .mat-mdc-focus-indicator,.mat-mdc-outlined-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-unelevated-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-raised-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-outlined-button:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-button._mat-animation-noopable,.mat-mdc-unelevated-button._mat-animation-noopable,.mat-mdc-raised-button._mat-animation-noopable,.mat-mdc-outlined-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-button>.mat-icon,.mat-mdc-unelevated-button>.mat-icon,.mat-mdc-raised-button>.mat-icon,.mat-mdc-outlined-button>.mat-icon{display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:-1px}.mat-mdc-unelevated-button .mat-mdc-focus-indicator::before,.mat-mdc-raised-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-outlined-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 3px)*-1)}',
  Xh =
    ".cdk-high-contrast-active .mat-mdc-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-unelevated-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-raised-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-outlined-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-icon-button{outline:solid 1px}";
var Tv = ["mat-icon-button", ""],
  Ov = ["*"];
var Rv = new w("MAT_BUTTON_CONFIG");
var Fv = [
    { attribute: "mat-button", mdcClasses: ["mdc-button", "mat-mdc-button"] },
    {
      attribute: "mat-flat-button",
      mdcClasses: [
        "mdc-button",
        "mdc-button--unelevated",
        "mat-mdc-unelevated-button",
      ],
    },
    {
      attribute: "mat-raised-button",
      mdcClasses: ["mdc-button", "mdc-button--raised", "mat-mdc-raised-button"],
    },
    {
      attribute: "mat-stroked-button",
      mdcClasses: [
        "mdc-button",
        "mdc-button--outlined",
        "mat-mdc-outlined-button",
      ],
    },
    { attribute: "mat-fab", mdcClasses: ["mdc-fab", "mat-mdc-fab"] },
    {
      attribute: "mat-mini-fab",
      mdcClasses: ["mdc-fab", "mdc-fab--mini", "mat-mdc-mini-fab"],
    },
    {
      attribute: "mat-icon-button",
      mdcClasses: ["mdc-icon-button", "mat-mdc-icon-button"],
    },
  ],
  il = (() => {
    let t = class t {
      get ripple() {
        return this._rippleLoader?.getRipple(this._elementRef.nativeElement);
      }
      set ripple(e) {
        this._rippleLoader?.attachRipple(this._elementRef.nativeElement, e);
      }
      get disableRipple() {
        return this._disableRipple;
      }
      set disableRipple(e) {
        (this._disableRipple = e), this._updateRippleDisabled();
      }
      get disabled() {
        return this._disabled;
      }
      set disabled(e) {
        (this._disabled = e), this._updateRippleDisabled();
      }
      constructor(e, i, r, a) {
        (this._elementRef = e),
          (this._platform = i),
          (this._ngZone = r),
          (this._animationMode = a),
          (this._focusMonitor = _(ai)),
          (this._rippleLoader = _($h)),
          (this._isFab = !1),
          (this._disableRipple = !1),
          (this._disabled = !1);
        let s = _(Rv, { optional: !0 }),
          c = e.nativeElement,
          l = c.classList;
        (this.disabledInteractive = s?.disabledInteractive ?? !1),
          this._rippleLoader?.configureRipple(c, {
            className: "mat-mdc-button-ripple",
          });
        for (let { attribute: m, mdcClasses: f } of Fv)
          c.hasAttribute(m) && l.add(...f);
      }
      ngAfterViewInit() {
        this._focusMonitor.monitor(this._elementRef, !0);
      }
      ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef),
          this._rippleLoader?.destroyRipple(this._elementRef.nativeElement);
      }
      focus(e = "program", i) {
        e
          ? this._focusMonitor.focusVia(this._elementRef.nativeElement, e, i)
          : this._elementRef.nativeElement.focus(i);
      }
      _getAriaDisabled() {
        return this.ariaDisabled != null
          ? this.ariaDisabled
          : this.disabled && this.disabledInteractive
          ? !0
          : null;
      }
      _getDisabledAttribute() {
        return this.disabledInteractive || !this.disabled ? null : !0;
      }
      _updateRippleDisabled() {
        this._rippleLoader?.setDisabled(
          this._elementRef.nativeElement,
          this.disableRipple || this.disabled
        );
      }
    };
    (t.ɵfac = function (i) {
      Oi();
    }),
      (t.ɵdir = F({
        type: t,
        inputs: {
          color: "color",
          disableRipple: [2, "disableRipple", "disableRipple", it],
          disabled: [2, "disabled", "disabled", it],
          ariaDisabled: [2, "aria-disabled", "ariaDisabled", it],
          disabledInteractive: [
            2,
            "disabledInteractive",
            "disabledInteractive",
            it,
          ],
        },
        features: [Mt],
      }));
    let n = t;
    return n;
  })();
var Pv = (() => {
    let t = class t extends il {
      constructor(e, i, r, a) {
        super(e, i, r, a),
          (this._haltDisabledEvents = (s) => {
            this.disabled && (s.preventDefault(), s.stopImmediatePropagation());
          });
      }
      ngOnInit() {
        this._ngZone.runOutsideAngular(() => {
          this._elementRef.nativeElement.addEventListener(
            "click",
            this._haltDisabledEvents
          );
        });
      }
      ngOnDestroy() {
        super.ngOnDestroy(),
          this._elementRef.nativeElement.removeEventListener(
            "click",
            this._haltDisabledEvents
          );
      }
      _getAriaDisabled() {
        return this.ariaDisabled == null ? this.disabled : this.ariaDisabled;
      }
    };
    (t.ɵfac = function (i) {
      Oi();
    }),
      (t.ɵdir = F({
        type: t,
        inputs: {
          tabIndex: [
            2,
            "tabIndex",
            "tabIndex",
            (e) => (e == null ? void 0 : ve(e)),
          ],
        },
        features: [Mt, ut],
      }));
    let n = t;
    return n;
  })(),
  $t = (() => {
    let t = class t extends il {
      constructor(e, i, r, a) {
        super(e, i, r, a);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(L), d(G), d(D), d(At, 8));
    }),
      (t.ɵcmp = z({
        type: t,
        selectors: [
          ["button", "mat-button", ""],
          ["button", "mat-raised-button", ""],
          ["button", "mat-flat-button", ""],
          ["button", "mat-stroked-button", ""],
        ],
        hostVars: 14,
        hostBindings: function (i, r) {
          i & 2 &&
            (K("disabled", r._getDisabledAttribute())(
              "aria-disabled",
              r._getAriaDisabled()
            ),
            Qe(r.color ? "mat-" + r.color : ""),
            q("mat-mdc-button-disabled", r.disabled)(
              "mat-mdc-button-disabled-interactive",
              r.disabledInteractive
            )("_mat-animation-noopable", r._animationMode === "NoopAnimations")(
              "mat-unthemed",
              !r.color
            )("mat-mdc-button-base", !0));
        },
        exportAs: ["matButton"],
        standalone: !0,
        features: [ut, V],
        attrs: qh,
        ngContentSelectors: Yh,
        decls: 7,
        vars: 4,
        consts: [
          [1, "mat-mdc-button-persistent-ripple"],
          [1, "mdc-button__label"],
          [1, "mat-mdc-focus-indicator"],
          [1, "mat-mdc-button-touch-target"],
        ],
        template: function (i, r) {
          i & 1 &&
            (Ct(Gh),
            O(0, "span", 0),
            Y(1),
            u(2, "span", 1),
            Y(3, 1),
            p(),
            Y(4, 2),
            O(5, "span", 2)(6, "span", 3)),
            i & 2 &&
              q("mdc-button__ripple", !r._isFab)("mdc-fab__ripple", r._isFab);
        },
        styles: [
          '.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:rgba(0,0,0,0)}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button[hidden]{display:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__progress-indicator{font-size:0;position:absolute;transform:translate(-50%, -50%);top:50%;left:50%;line-height:initial}.mdc-button .mdc-button__label{position:relative}.mdc-button .mdc-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px);display:none}@media screen and (forced-colors: active){.mdc-button .mdc-button__focus-ring{border-color:CanvasText}}.mdc-button .mdc-button__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-button .mdc-button__focus-ring::after{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{display:block}}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{padding:0 8px 0 8px}.mdc-button--unelevated{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--unelevated.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--unelevated.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--raised{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--raised.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--raised.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--outlined{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--outlined .mdc-button__ripple{border-style:solid;border-color:rgba(0,0,0,0)}.mat-mdc-button{font-family:var(--mdc-text-button-label-text-font);font-size:var(--mdc-text-button-label-text-size);letter-spacing:var(--mdc-text-button-label-text-tracking);font-weight:var(--mdc-text-button-label-text-weight);text-transform:var(--mdc-text-button-label-text-transform);height:var(--mdc-text-button-container-height);border-radius:var(--mdc-text-button-container-shape);padding:0 var(--mat-text-button-horizontal-padding, 8px)}.mat-mdc-button:not(:disabled){color:var(--mdc-text-button-label-text-color)}.mat-mdc-button:disabled{color:var(--mdc-text-button-disabled-label-text-color)}.mat-mdc-button .mdc-button__ripple{border-radius:var(--mdc-text-button-container-shape)}.mat-mdc-button:has(.material-icons,mat-icon,[matButtonIcon]){padding:0 var(--mat-text-button-with-icon-horizontal-padding, 8px)}.mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, 0)}[dir=rtl] .mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-offset, 0);margin-left:var(--mat-text-button-icon-spacing, 8px)}.mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-offset, 0);margin-left:var(--mat-text-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, 0)}.mat-mdc-button .mat-ripple-element{background-color:var(--mat-text-button-ripple-color)}.mat-mdc-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-state-layer-color)}.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-disabled-state-layer-color)}.mat-mdc-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-hover-state-layer-opacity)}.mat-mdc-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-focus-state-layer-opacity)}.mat-mdc-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-pressed-state-layer-opacity)}.mat-mdc-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-text-button-touch-target-display)}.mat-mdc-button[disabled],.mat-mdc-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-text-button-disabled-label-text-color)}.mat-mdc-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-unelevated-button{font-family:var(--mdc-filled-button-label-text-font);font-size:var(--mdc-filled-button-label-text-size);letter-spacing:var(--mdc-filled-button-label-text-tracking);font-weight:var(--mdc-filled-button-label-text-weight);text-transform:var(--mdc-filled-button-label-text-transform);height:var(--mdc-filled-button-container-height);border-radius:var(--mdc-filled-button-container-shape);padding:0 var(--mat-filled-button-horizontal-padding, 16px)}.mat-mdc-unelevated-button:not(:disabled){background-color:var(--mdc-filled-button-container-color)}.mat-mdc-unelevated-button:disabled{background-color:var(--mdc-filled-button-disabled-container-color)}.mat-mdc-unelevated-button:not(:disabled){color:var(--mdc-filled-button-label-text-color)}.mat-mdc-unelevated-button:disabled{color:var(--mdc-filled-button-disabled-label-text-color)}.mat-mdc-unelevated-button .mdc-button__ripple{border-radius:var(--mdc-filled-button-container-shape)}.mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -4px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}.mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -4px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -4px)}.mat-mdc-unelevated-button .mat-ripple-element{background-color:var(--mat-filled-button-ripple-color)}.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-state-layer-color)}.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-disabled-state-layer-color)}.mat-mdc-unelevated-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-hover-state-layer-opacity)}.mat-mdc-unelevated-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-focus-state-layer-opacity)}.mat-mdc-unelevated-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-pressed-state-layer-opacity)}.mat-mdc-unelevated-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-filled-button-touch-target-display)}.mat-mdc-unelevated-button[disabled],.mat-mdc-unelevated-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-filled-button-disabled-label-text-color);background-color:var(--mdc-filled-button-disabled-container-color)}.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-raised-button{font-family:var(--mdc-protected-button-label-text-font);font-size:var(--mdc-protected-button-label-text-size);letter-spacing:var(--mdc-protected-button-label-text-tracking);font-weight:var(--mdc-protected-button-label-text-weight);text-transform:var(--mdc-protected-button-label-text-transform);height:var(--mdc-protected-button-container-height);border-radius:var(--mdc-protected-button-container-shape);padding:0 var(--mat-protected-button-horizontal-padding, 16px);box-shadow:var(--mdc-protected-button-container-elevation-shadow)}.mat-mdc-raised-button:not(:disabled){background-color:var(--mdc-protected-button-container-color)}.mat-mdc-raised-button:disabled{background-color:var(--mdc-protected-button-disabled-container-color)}.mat-mdc-raised-button:not(:disabled){color:var(--mdc-protected-button-label-text-color)}.mat-mdc-raised-button:disabled{color:var(--mdc-protected-button-disabled-label-text-color)}.mat-mdc-raised-button .mdc-button__ripple{border-radius:var(--mdc-protected-button-container-shape)}.mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -4px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}.mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -4px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -4px)}.mat-mdc-raised-button .mat-ripple-element{background-color:var(--mat-protected-button-ripple-color)}.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-state-layer-color)}.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-disabled-state-layer-color)}.mat-mdc-raised-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-hover-state-layer-opacity)}.mat-mdc-raised-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-focus-state-layer-opacity)}.mat-mdc-raised-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-pressed-state-layer-opacity)}.mat-mdc-raised-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-protected-button-touch-target-display)}.mat-mdc-raised-button:hover{box-shadow:var(--mdc-protected-button-hover-container-elevation-shadow)}.mat-mdc-raised-button:focus{box-shadow:var(--mdc-protected-button-focus-container-elevation-shadow)}.mat-mdc-raised-button:active,.mat-mdc-raised-button:focus:active{box-shadow:var(--mdc-protected-button-pressed-container-elevation-shadow)}.mat-mdc-raised-button[disabled],.mat-mdc-raised-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-protected-button-disabled-label-text-color);background-color:var(--mdc-protected-button-disabled-container-color)}.mat-mdc-raised-button[disabled].mat-mdc-button-disabled,.mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled{box-shadow:var(--mdc-protected-button-disabled-container-elevation-shadow)}.mat-mdc-raised-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-outlined-button{font-family:var(--mdc-outlined-button-label-text-font);font-size:var(--mdc-outlined-button-label-text-size);letter-spacing:var(--mdc-outlined-button-label-text-tracking);font-weight:var(--mdc-outlined-button-label-text-weight);text-transform:var(--mdc-outlined-button-label-text-transform);height:var(--mdc-outlined-button-container-height);border-radius:var(--mdc-outlined-button-container-shape);padding:0 15px 0 15px;border-width:var(--mdc-outlined-button-outline-width);padding:0 var(--mat-outlined-button-horizontal-padding, 15px)}.mat-mdc-outlined-button:not(:disabled){color:var(--mdc-outlined-button-label-text-color)}.mat-mdc-outlined-button:disabled{color:var(--mdc-outlined-button-disabled-label-text-color)}.mat-mdc-outlined-button .mdc-button__ripple{border-radius:var(--mdc-outlined-button-container-shape)}.mat-mdc-outlined-button:not(:disabled){border-color:var(--mdc-outlined-button-outline-color)}.mat-mdc-outlined-button:disabled{border-color:var(--mdc-outlined-button-disabled-outline-color)}.mat-mdc-outlined-button.mdc-button--icon-trailing{padding:0 11px 0 15px}.mat-mdc-outlined-button.mdc-button--icon-leading{padding:0 15px 0 11px}.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:var(--mdc-outlined-button-outline-width)}.mat-mdc-outlined-button .mdc-button__touch{left:calc(-1 * var(--mdc-outlined-button-outline-width));width:calc(100% + 2 * var(--mdc-outlined-button-outline-width))}.mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -4px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}.mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -4px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -4px)}.mat-mdc-outlined-button .mat-ripple-element{background-color:var(--mat-outlined-button-ripple-color)}.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-state-layer-color)}.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-disabled-state-layer-color)}.mat-mdc-outlined-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-hover-state-layer-opacity)}.mat-mdc-outlined-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-focus-state-layer-opacity)}.mat-mdc-outlined-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-pressed-state-layer-opacity)}.mat-mdc-outlined-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-outlined-button-touch-target-display)}.mat-mdc-outlined-button[disabled],.mat-mdc-outlined-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-outlined-button-disabled-label-text-color);border-color:var(--mdc-outlined-button-disabled-outline-color)}.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-button-base{text-decoration:none}.mat-mdc-button,.mat-mdc-unelevated-button,.mat-mdc-raised-button,.mat-mdc-outlined-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-button .mdc-button__label,.mat-mdc-unelevated-button .mdc-button__label,.mat-mdc-raised-button .mdc-button__label,.mat-mdc-outlined-button .mdc-button__label{z-index:1}.mat-mdc-button .mat-mdc-focus-indicator,.mat-mdc-unelevated-button .mat-mdc-focus-indicator,.mat-mdc-raised-button .mat-mdc-focus-indicator,.mat-mdc-outlined-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-unelevated-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-raised-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-outlined-button:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-button._mat-animation-noopable,.mat-mdc-unelevated-button._mat-animation-noopable,.mat-mdc-raised-button._mat-animation-noopable,.mat-mdc-outlined-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-button>.mat-icon,.mat-mdc-unelevated-button>.mat-icon,.mat-mdc-raised-button>.mat-icon,.mat-mdc-outlined-button>.mat-icon{display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:-1px}.mat-mdc-unelevated-button .mat-mdc-focus-indicator::before,.mat-mdc-raised-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-outlined-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 3px)*-1)}',
          ".cdk-high-contrast-active .mat-mdc-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-unelevated-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-raised-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-outlined-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-icon-button{outline:solid 1px}",
        ],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let n = t;
    return n;
  })(),
  Zh = (() => {
    let t = class t extends Pv {
      constructor(e, i, r, a) {
        super(e, i, r, a);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(L), d(G), d(D), d(At, 8));
    }),
      (t.ɵcmp = z({
        type: t,
        selectors: [
          ["a", "mat-button", ""],
          ["a", "mat-raised-button", ""],
          ["a", "mat-flat-button", ""],
          ["a", "mat-stroked-button", ""],
        ],
        hostVars: 15,
        hostBindings: function (i, r) {
          i & 2 &&
            (K("disabled", r._getDisabledAttribute())(
              "tabindex",
              r.disabled && !r.disabledInteractive ? -1 : r.tabIndex
            )("aria-disabled", r._getDisabledAttribute()),
            Qe(r.color ? "mat-" + r.color : ""),
            q("mat-mdc-button-disabled", r.disabled)(
              "mat-mdc-button-disabled-interactive",
              r.disabledInteractive
            )("_mat-animation-noopable", r._animationMode === "NoopAnimations")(
              "mat-unthemed",
              !r.color
            )("mat-mdc-button-base", !0));
        },
        exportAs: ["matButton", "matAnchor"],
        standalone: !0,
        features: [ut, V],
        attrs: qh,
        ngContentSelectors: Yh,
        decls: 7,
        vars: 4,
        consts: [
          [1, "mat-mdc-button-persistent-ripple"],
          [1, "mdc-button__label"],
          [1, "mat-mdc-focus-indicator"],
          [1, "mat-mdc-button-touch-target"],
        ],
        template: function (i, r) {
          i & 1 &&
            (Ct(Gh),
            O(0, "span", 0),
            Y(1),
            u(2, "span", 1),
            Y(3, 1),
            p(),
            Y(4, 2),
            O(5, "span", 2)(6, "span", 3)),
            i & 2 &&
              q("mdc-button__ripple", !r._isFab)("mdc-fab__ripple", r._isFab);
        },
        styles: [Mv, Xh],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let n = t;
    return n;
  })();
var Ia = (() => {
  let t = class t extends il {
    constructor(e, i, r, a) {
      super(e, i, r, a),
        this._rippleLoader.configureRipple(this._elementRef.nativeElement, {
          centered: !0,
        });
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(d(L), d(G), d(D), d(At, 8));
  }),
    (t.ɵcmp = z({
      type: t,
      selectors: [["button", "mat-icon-button", ""]],
      hostVars: 14,
      hostBindings: function (i, r) {
        i & 2 &&
          (K("disabled", r._getDisabledAttribute())(
            "aria-disabled",
            r._getAriaDisabled()
          ),
          Qe(r.color ? "mat-" + r.color : ""),
          q("mat-mdc-button-disabled", r.disabled)(
            "mat-mdc-button-disabled-interactive",
            r.disabledInteractive
          )("_mat-animation-noopable", r._animationMode === "NoopAnimations")(
            "mat-unthemed",
            !r.color
          )("mat-mdc-button-base", !0));
      },
      exportAs: ["matButton"],
      standalone: !0,
      features: [ut, V],
      attrs: Tv,
      ngContentSelectors: Ov,
      decls: 4,
      vars: 0,
      consts: [
        [1, "mat-mdc-button-persistent-ripple", "mdc-icon-button__ripple"],
        [1, "mat-mdc-focus-indicator"],
        [1, "mat-mdc-button-touch-target"],
      ],
      template: function (i, r) {
        i & 1 && (Ct(), O(0, "span", 0), Y(1), O(2, "span", 1)(3, "span", 2));
      },
      styles: [
        '.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:rgba(0,0,0,0);fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block}}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button[hidden]{display:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%;display:none}@media screen and (forced-colors: active){.mdc-icon-button__focus-ring{border-color:CanvasText}}.mdc-icon-button__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-icon-button__focus-ring::after{border-color:CanvasText}}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:none;position:absolute;top:0;width:100%}.mat-mdc-icon-button{color:var(--mdc-icon-button-icon-color)}.mat-mdc-icon-button .mdc-button__icon{font-size:var(--mdc-icon-button-icon-size)}.mat-mdc-icon-button svg,.mat-mdc-icon-button img{width:var(--mdc-icon-button-icon-size);height:var(--mdc-icon-button-icon-size)}.mat-mdc-icon-button:disabled{color:var(--mdc-icon-button-disabled-icon-color)}.mat-mdc-icon-button{border-radius:50%;flex-shrink:0;text-align:center;width:var(--mdc-icon-button-state-layer-size, 48px);height:var(--mdc-icon-button-state-layer-size, 48px);padding:calc(calc(var(--mdc-icon-button-state-layer-size, 48px) - var(--mdc-icon-button-icon-size, 24px)) / 2);font-size:var(--mdc-icon-button-icon-size);-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-icon-button svg{vertical-align:baseline}.mat-mdc-icon-button[disabled],.mat-mdc-icon-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-icon-button-disabled-icon-color)}.mat-mdc-icon-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-icon-button .mat-mdc-button-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-icon-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-icon-button .mdc-button__label{z-index:1}.mat-mdc-icon-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-icon-button:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-icon-button .mat-ripple-element{background-color:var(--mat-icon-button-ripple-color)}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-icon-button-state-layer-color)}.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-icon-button-disabled-state-layer-color)}.mat-mdc-icon-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-hover-state-layer-opacity)}.mat-mdc-icon-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-icon-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-focus-state-layer-opacity)}.mat-mdc-icon-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-pressed-state-layer-opacity)}.mat-mdc-icon-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%);display:var(--mat-icon-button-touch-target-display)}.mat-mdc-icon-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple{border-radius:50%}.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before{background:rgba(0,0,0,0);opacity:1}',
        Xh,
      ],
      encapsulation: 2,
      changeDetection: 0,
    }));
  let n = t;
  return n;
})();
var Ht = (() => {
  let t = class t {};
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵmod = T({ type: t })),
    (t.ɵinj = M({ imports: [Q, Vo, Q] }));
  let n = t;
  return n;
})();
var le = { production: !1, apiUrl: "https://api.diegocaceres.online" };
var gl = {};
nd(gl, {
  Manager: () => $i,
  Socket: () => Ui,
  connect: () => Wi,
  default: () => Wi,
  io: () => Wi,
  protocol: () => pl,
});
var ue = Object.create(null);
ue.open = "0";
ue.close = "1";
ue.ping = "2";
ue.pong = "3";
ue.message = "4";
ue.upgrade = "5";
ue.noop = "6";
var Uo = Object.create(null);
Object.keys(ue).forEach((n) => {
  Uo[ue[n]] = n;
});
var Ho = { type: "error", data: "parser error" };
var Jh =
    typeof Blob == "function" ||
    (typeof Blob < "u" &&
      Object.prototype.toString.call(Blob) === "[object BlobConstructor]"),
  tu = typeof ArrayBuffer == "function",
  eu = (n) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(n)
      : n && n.buffer instanceof ArrayBuffer,
  $o = ({ type: n, data: t }, o, e) =>
    Jh && t instanceof Blob
      ? o
        ? e(t)
        : Qh(t, e)
      : tu && (t instanceof ArrayBuffer || eu(t))
      ? o
        ? e(t)
        : Qh(new Blob([t]), e)
      : e(ue[n] + (t || "")),
  Qh = (n, t) => {
    let o = new FileReader();
    return (
      (o.onload = function () {
        let e = o.result.split(",")[1];
        t("b" + (e || ""));
      }),
      o.readAsDataURL(n)
    );
  };
function Kh(n) {
  return n instanceof Uint8Array
    ? n
    : n instanceof ArrayBuffer
    ? new Uint8Array(n)
    : new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
}
var nl;
function iu(n, t) {
  if (Jh && n.data instanceof Blob)
    return n.data.arrayBuffer().then(Kh).then(t);
  if (tu && (n.data instanceof ArrayBuffer || eu(n.data))) return t(Kh(n.data));
  $o(n, !1, (o) => {
    nl || (nl = new TextEncoder()), t(nl.encode(o));
  });
}
var nu = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  Wo = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let n = 0; n < nu.length; n++) Wo[nu.charCodeAt(n)] = n;
var ou = (n) => {
  let t = n.length * 0.75,
    o = n.length,
    e,
    i = 0,
    r,
    a,
    s,
    c;
  n[n.length - 1] === "=" && (t--, n[n.length - 2] === "=" && t--);
  let l = new ArrayBuffer(t),
    m = new Uint8Array(l);
  for (e = 0; e < o; e += 4)
    (r = Wo[n.charCodeAt(e)]),
      (a = Wo[n.charCodeAt(e + 1)]),
      (s = Wo[n.charCodeAt(e + 2)]),
      (c = Wo[n.charCodeAt(e + 3)]),
      (m[i++] = (r << 2) | (a >> 4)),
      (m[i++] = ((a & 15) << 4) | (s >> 2)),
      (m[i++] = ((s & 3) << 6) | (c & 63));
  return l;
};
var Lv = typeof ArrayBuffer == "function",
  qo = (n, t) => {
    if (typeof n != "string") return { type: "message", data: ru(n, t) };
    let o = n.charAt(0);
    return o === "b"
      ? { type: "message", data: Nv(n.substring(1), t) }
      : Uo[o]
      ? n.length > 1
        ? { type: Uo[o], data: n.substring(1) }
        : { type: Uo[o] }
      : Ho;
  },
  Nv = (n, t) => {
    if (Lv) {
      let o = ou(n);
      return ru(o, t);
    } else return { base64: !0, data: n };
  },
  ru = (n, t) => {
    switch (t) {
      case "blob":
        return n instanceof Blob ? n : new Blob([n]);
      case "arraybuffer":
      default:
        return n instanceof ArrayBuffer ? n : n.buffer;
    }
  };
var au = "",
  su = (n, t) => {
    let o = n.length,
      e = new Array(o),
      i = 0;
    n.forEach((r, a) => {
      $o(r, !1, (s) => {
        (e[a] = s), ++i === o && t(e.join(au));
      });
    });
  },
  cu = (n, t) => {
    let o = n.split(au),
      e = [];
    for (let i = 0; i < o.length; i++) {
      let r = qo(o[i], t);
      if ((e.push(r), r.type === "error")) break;
    }
    return e;
  };
function lu() {
  return new TransformStream({
    transform(n, t) {
      iu(n, (o) => {
        let e = o.length,
          i;
        if (e < 126)
          (i = new Uint8Array(1)), new DataView(i.buffer).setUint8(0, e);
        else if (e < 65536) {
          i = new Uint8Array(3);
          let r = new DataView(i.buffer);
          r.setUint8(0, 126), r.setUint16(1, e);
        } else {
          i = new Uint8Array(9);
          let r = new DataView(i.buffer);
          r.setUint8(0, 127), r.setBigUint64(1, BigInt(e));
        }
        n.data && typeof n.data != "string" && (i[0] |= 128),
          t.enqueue(i),
          t.enqueue(o);
      });
    },
  });
}
var ol;
function Da(n) {
  return n.reduce((t, o) => t + o.length, 0);
}
function Aa(n, t) {
  if (n[0].length === t) return n.shift();
  let o = new Uint8Array(t),
    e = 0;
  for (let i = 0; i < t; i++)
    (o[i] = n[0][e++]), e === n[0].length && (n.shift(), (e = 0));
  return n.length && e < n[0].length && (n[0] = n[0].slice(e)), o;
}
function du(n, t) {
  ol || (ol = new TextDecoder());
  let o = [],
    e = 0,
    i = -1,
    r = !1;
  return new TransformStream({
    transform(a, s) {
      for (o.push(a); ; ) {
        if (e === 0) {
          if (Da(o) < 1) break;
          let c = Aa(o, 1);
          (r = (c[0] & 128) === 128),
            (i = c[0] & 127),
            i < 126 ? (e = 3) : i === 126 ? (e = 1) : (e = 2);
        } else if (e === 1) {
          if (Da(o) < 2) break;
          let c = Aa(o, 2);
          (i = new DataView(c.buffer, c.byteOffset, c.length).getUint16(0)),
            (e = 3);
        } else if (e === 2) {
          if (Da(o) < 8) break;
          let c = Aa(o, 8),
            l = new DataView(c.buffer, c.byteOffset, c.length),
            m = l.getUint32(0);
          if (m > Math.pow(2, 21) - 1) {
            s.enqueue(Ho);
            break;
          }
          (i = m * Math.pow(2, 32) + l.getUint32(4)), (e = 3);
        } else {
          if (Da(o) < i) break;
          let c = Aa(o, i);
          s.enqueue(qo(r ? c : ol.decode(c), t)), (e = 0);
        }
        if (i === 0 || i > n) {
          s.enqueue(Ho);
          break;
        }
      }
    },
  });
}
var rl = 4;
function dt(n) {
  if (n) return jv(n);
}
function jv(n) {
  for (var t in dt.prototype) n[t] = dt.prototype[t];
  return n;
}
dt.prototype.on = dt.prototype.addEventListener = function (n, t) {
  return (
    (this._callbacks = this._callbacks || {}),
    (this._callbacks["$" + n] = this._callbacks["$" + n] || []).push(t),
    this
  );
};
dt.prototype.once = function (n, t) {
  function o() {
    this.off(n, o), t.apply(this, arguments);
  }
  return (o.fn = t), this.on(n, o), this;
};
dt.prototype.off =
  dt.prototype.removeListener =
  dt.prototype.removeAllListeners =
  dt.prototype.removeEventListener =
    function (n, t) {
      if (((this._callbacks = this._callbacks || {}), arguments.length == 0))
        return (this._callbacks = {}), this;
      var o = this._callbacks["$" + n];
      if (!o) return this;
      if (arguments.length == 1) return delete this._callbacks["$" + n], this;
      for (var e, i = 0; i < o.length; i++)
        if (((e = o[i]), e === t || e.fn === t)) {
          o.splice(i, 1);
          break;
        }
      return o.length === 0 && delete this._callbacks["$" + n], this;
    };
dt.prototype.emit = function (n) {
  this._callbacks = this._callbacks || {};
  for (
    var t = new Array(arguments.length - 1),
      o = this._callbacks["$" + n],
      e = 1;
    e < arguments.length;
    e++
  )
    t[e - 1] = arguments[e];
  if (o) {
    o = o.slice(0);
    for (var e = 0, i = o.length; e < i; ++e) o[e].apply(this, t);
  }
  return this;
};
dt.prototype.emitReserved = dt.prototype.emit;
dt.prototype.listeners = function (n) {
  return (
    (this._callbacks = this._callbacks || {}), this._callbacks["$" + n] || []
  );
};
dt.prototype.hasListeners = function (n) {
  return !!this.listeners(n).length;
};
var Bt =
  typeof self < "u"
    ? self
    : typeof window < "u"
    ? window
    : Function("return this")();
function Ma(n, ...t) {
  return t.reduce((o, e) => (n.hasOwnProperty(e) && (o[e] = n[e]), o), {});
}
var zv = Bt.setTimeout,
  Vv = Bt.clearTimeout;
function je(n, t) {
  t.useNativeTimers
    ? ((n.setTimeoutFn = zv.bind(Bt)), (n.clearTimeoutFn = Vv.bind(Bt)))
    : ((n.setTimeoutFn = Bt.setTimeout.bind(Bt)),
      (n.clearTimeoutFn = Bt.clearTimeout.bind(Bt)));
}
var Bv = 1.33;
function mu(n) {
  return typeof n == "string"
    ? Uv(n)
    : Math.ceil((n.byteLength || n.size) * Bv);
}
function Uv(n) {
  let t = 0,
    o = 0;
  for (let e = 0, i = n.length; e < i; e++)
    (t = n.charCodeAt(e)),
      t < 128
        ? (o += 1)
        : t < 2048
        ? (o += 2)
        : t < 55296 || t >= 57344
        ? (o += 3)
        : (e++, (o += 4));
  return o;
}
function hu(n) {
  let t = "";
  for (let o in n)
    n.hasOwnProperty(o) &&
      (t.length && (t += "&"),
      (t += encodeURIComponent(o) + "=" + encodeURIComponent(n[o])));
  return t;
}
function uu(n) {
  let t = {},
    o = n.split("&");
  for (let e = 0, i = o.length; e < i; e++) {
    let r = o[e].split("=");
    t[decodeURIComponent(r[0])] = decodeURIComponent(r[1]);
  }
  return t;
}
var Ta = class extends Error {
    constructor(t, o, e) {
      super(t),
        (this.description = o),
        (this.context = e),
        (this.type = "TransportError");
    }
  },
  ze = class extends dt {
    constructor(t) {
      super(),
        (this.writable = !1),
        je(this, t),
        (this.opts = t),
        (this.query = t.query),
        (this.socket = t.socket);
    }
    onError(t, o, e) {
      return super.emitReserved("error", new Ta(t, o, e)), this;
    }
    open() {
      return (this.readyState = "opening"), this.doOpen(), this;
    }
    close() {
      return (
        (this.readyState === "opening" || this.readyState === "open") &&
          (this.doClose(), this.onClose()),
        this
      );
    }
    send(t) {
      this.readyState === "open" && this.write(t);
    }
    onOpen() {
      (this.readyState = "open"),
        (this.writable = !0),
        super.emitReserved("open");
    }
    onData(t) {
      let o = qo(t, this.socket.binaryType);
      this.onPacket(o);
    }
    onPacket(t) {
      super.emitReserved("packet", t);
    }
    onClose(t) {
      (this.readyState = "closed"), super.emitReserved("close", t);
    }
    pause(t) {}
    createUri(t, o = {}) {
      return (
        t +
        "://" +
        this._hostname() +
        this._port() +
        this.opts.path +
        this._query(o)
      );
    }
    _hostname() {
      let t = this.opts.hostname;
      return t.indexOf(":") === -1 ? t : "[" + t + "]";
    }
    _port() {
      return this.opts.port &&
        ((this.opts.secure && +(this.opts.port !== 443)) ||
          (!this.opts.secure && Number(this.opts.port) !== 80))
        ? ":" + this.opts.port
        : "";
    }
    _query(t) {
      let o = hu(t);
      return o.length ? "?" + o : "";
    }
  };
var bu =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(
      ""
    ),
  al = 64,
  Hv = {},
  pu = 0,
  Oa = 0,
  fu;
function gu(n) {
  let t = "";
  do (t = bu[n % al] + t), (n = Math.floor(n / al));
  while (n > 0);
  return t;
}
function Ra() {
  let n = gu(+new Date());
  return n !== fu ? ((pu = 0), (fu = n)) : n + "." + gu(pu++);
}
for (; Oa < al; Oa++) Hv[bu[Oa]] = Oa;
var _u = !1;
try {
  _u = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {}
var vu = _u;
function sl(n) {
  let t = n.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!t || vu)) return new XMLHttpRequest();
  } catch {}
  if (!t)
    try {
      return new Bt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {}
}
function $v() {}
var Wv = (function () {
    return new sl({ xdomain: !1 }).responseType != null;
  })(),
  Pa = class extends ze {
    constructor(t) {
      if ((super(t), (this.polling = !1), typeof location < "u")) {
        let e = location.protocol === "https:",
          i = location.port;
        i || (i = e ? "443" : "80"),
          (this.xd =
            (typeof location < "u" && t.hostname !== location.hostname) ||
            i !== t.port);
      }
      let o = t && t.forceBase64;
      (this.supportsBinary = Wv && !o),
        this.opts.withCredentials && (this.cookieJar = void 0);
    }
    get name() {
      return "polling";
    }
    doOpen() {
      this.poll();
    }
    pause(t) {
      this.readyState = "pausing";
      let o = () => {
        (this.readyState = "paused"), t();
      };
      if (this.polling || !this.writable) {
        let e = 0;
        this.polling &&
          (e++,
          this.once("pollComplete", function () {
            --e || o();
          })),
          this.writable ||
            (e++,
            this.once("drain", function () {
              --e || o();
            }));
      } else o();
    }
    poll() {
      (this.polling = !0), this.doPoll(), this.emitReserved("poll");
    }
    onData(t) {
      let o = (e) => {
        if (
          (this.readyState === "opening" && e.type === "open" && this.onOpen(),
          e.type === "close")
        )
          return (
            this.onClose({ description: "transport closed by the server" }), !1
          );
        this.onPacket(e);
      };
      cu(t, this.socket.binaryType).forEach(o),
        this.readyState !== "closed" &&
          ((this.polling = !1),
          this.emitReserved("pollComplete"),
          this.readyState === "open" && this.poll());
    }
    doClose() {
      let t = () => {
        this.write([{ type: "close" }]);
      };
      this.readyState === "open" ? t() : this.once("open", t);
    }
    write(t) {
      (this.writable = !1),
        su(t, (o) => {
          this.doWrite(o, () => {
            (this.writable = !0), this.emitReserved("drain");
          });
        });
    }
    uri() {
      let t = this.opts.secure ? "https" : "http",
        o = this.query || {};
      return (
        this.opts.timestampRequests !== !1 &&
          (o[this.opts.timestampParam] = Ra()),
        !this.supportsBinary && !o.sid && (o.b64 = 1),
        this.createUri(t, o)
      );
    }
    request(t = {}) {
      return (
        Object.assign(t, { xd: this.xd, cookieJar: this.cookieJar }, this.opts),
        new Fa(this.uri(), t)
      );
    }
    doWrite(t, o) {
      let e = this.request({ method: "POST", data: t });
      e.on("success", o),
        e.on("error", (i, r) => {
          this.onError("xhr post error", i, r);
        });
    }
    doPoll() {
      let t = this.request();
      t.on("data", this.onData.bind(this)),
        t.on("error", (o, e) => {
          this.onError("xhr poll error", o, e);
        }),
        (this.pollXhr = t);
    }
  },
  Fa = (() => {
    class n extends dt {
      constructor(o, e) {
        super(),
          je(this, e),
          (this.opts = e),
          (this.method = e.method || "GET"),
          (this.uri = o),
          (this.data = e.data !== void 0 ? e.data : null),
          this.create();
      }
      create() {
        var o;
        let e = Ma(
          this.opts,
          "agent",
          "pfx",
          "key",
          "passphrase",
          "cert",
          "ca",
          "ciphers",
          "rejectUnauthorized",
          "autoUnref"
        );
        e.xdomain = !!this.opts.xd;
        let i = (this.xhr = new sl(e));
        try {
          i.open(this.method, this.uri, !0);
          try {
            if (this.opts.extraHeaders) {
              i.setDisableHeaderCheck && i.setDisableHeaderCheck(!0);
              for (let r in this.opts.extraHeaders)
                this.opts.extraHeaders.hasOwnProperty(r) &&
                  i.setRequestHeader(r, this.opts.extraHeaders[r]);
            }
          } catch {}
          if (this.method === "POST")
            try {
              i.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
            } catch {}
          try {
            i.setRequestHeader("Accept", "*/*");
          } catch {}
          (o = this.opts.cookieJar) === null || o === void 0 || o.addCookies(i),
            "withCredentials" in i &&
              (i.withCredentials = this.opts.withCredentials),
            this.opts.requestTimeout && (i.timeout = this.opts.requestTimeout),
            (i.onreadystatechange = () => {
              var r;
              i.readyState === 3 &&
                ((r = this.opts.cookieJar) === null ||
                  r === void 0 ||
                  r.parseCookies(i)),
                i.readyState === 4 &&
                  (i.status === 200 || i.status === 1223
                    ? this.onLoad()
                    : this.setTimeoutFn(() => {
                        this.onError(
                          typeof i.status == "number" ? i.status : 0
                        );
                      }, 0));
            }),
            i.send(this.data);
        } catch (r) {
          this.setTimeoutFn(() => {
            this.onError(r);
          }, 0);
          return;
        }
        typeof document < "u" &&
          ((this.index = n.requestsCount++), (n.requests[this.index] = this));
      }
      onError(o) {
        this.emitReserved("error", o, this.xhr), this.cleanup(!0);
      }
      cleanup(o) {
        if (!(typeof this.xhr > "u" || this.xhr === null)) {
          if (((this.xhr.onreadystatechange = $v), o))
            try {
              this.xhr.abort();
            } catch {}
          typeof document < "u" && delete n.requests[this.index],
            (this.xhr = null);
        }
      }
      onLoad() {
        let o = this.xhr.responseText;
        o !== null &&
          (this.emitReserved("data", o),
          this.emitReserved("success"),
          this.cleanup());
      }
      abort() {
        this.cleanup();
      }
    }
    return (n.requestsCount = 0), (n.requests = {}), n;
  })();
if (typeof document < "u") {
  if (typeof attachEvent == "function") attachEvent("onunload", xu);
  else if (typeof addEventListener == "function") {
    let n = "onpagehide" in Bt ? "pagehide" : "unload";
    addEventListener(n, xu, !1);
  }
}
function xu() {
  for (let n in Fa.requests)
    Fa.requests.hasOwnProperty(n) && Fa.requests[n].abort();
}
var Bi =
    typeof Promise == "function" && typeof Promise.resolve == "function"
      ? (t) => Promise.resolve().then(t)
      : (t, o) => o(t, 0),
  Go = Bt.WebSocket || Bt.MozWebSocket,
  La = !0,
  yu = "arraybuffer";
var wu =
    typeof navigator < "u" &&
    typeof navigator.product == "string" &&
    navigator.product.toLowerCase() === "reactnative",
  Na = class extends ze {
    constructor(t) {
      super(t), (this.supportsBinary = !t.forceBase64);
    }
    get name() {
      return "websocket";
    }
    doOpen() {
      if (!this.check()) return;
      let t = this.uri(),
        o = this.opts.protocols,
        e = wu
          ? {}
          : Ma(
              this.opts,
              "agent",
              "perMessageDeflate",
              "pfx",
              "key",
              "passphrase",
              "cert",
              "ca",
              "ciphers",
              "rejectUnauthorized",
              "localAddress",
              "protocolVersion",
              "origin",
              "maxPayload",
              "family",
              "checkServerIdentity"
            );
      this.opts.extraHeaders && (e.headers = this.opts.extraHeaders);
      try {
        this.ws = La && !wu ? (o ? new Go(t, o) : new Go(t)) : new Go(t, o, e);
      } catch (i) {
        return this.emitReserved("error", i);
      }
      (this.ws.binaryType = this.socket.binaryType), this.addEventListeners();
    }
    addEventListeners() {
      (this.ws.onopen = () => {
        this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
      }),
        (this.ws.onclose = (t) =>
          this.onClose({
            description: "websocket connection closed",
            context: t,
          })),
        (this.ws.onmessage = (t) => this.onData(t.data)),
        (this.ws.onerror = (t) => this.onError("websocket error", t));
    }
    write(t) {
      this.writable = !1;
      for (let o = 0; o < t.length; o++) {
        let e = t[o],
          i = o === t.length - 1;
        $o(e, this.supportsBinary, (r) => {
          let a = {};
          La ||
            (e.options && (a.compress = e.options.compress),
            this.opts.perMessageDeflate &&
              (typeof r == "string" ? Buffer.byteLength(r) : r.length) <
                this.opts.perMessageDeflate.threshold &&
              (a.compress = !1));
          try {
            La ? this.ws.send(r) : this.ws.send(r, a);
          } catch {}
          i &&
            Bi(() => {
              (this.writable = !0), this.emitReserved("drain");
            }, this.setTimeoutFn);
        });
      }
    }
    doClose() {
      typeof this.ws < "u" && (this.ws.close(), (this.ws = null));
    }
    uri() {
      let t = this.opts.secure ? "wss" : "ws",
        o = this.query || {};
      return (
        this.opts.timestampRequests && (o[this.opts.timestampParam] = Ra()),
        this.supportsBinary || (o.b64 = 1),
        this.createUri(t, o)
      );
    }
    check() {
      return !!Go;
    }
  };
var ja = class extends ze {
  get name() {
    return "webtransport";
  }
  doOpen() {
    typeof WebTransport == "function" &&
      ((this.transport = new WebTransport(
        this.createUri("https"),
        this.opts.transportOptions[this.name]
      )),
      this.transport.closed
        .then(() => {
          this.onClose();
        })
        .catch((t) => {
          this.onError("webtransport error", t);
        }),
      this.transport.ready.then(() => {
        this.transport.createBidirectionalStream().then((t) => {
          let o = du(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
            e = t.readable.pipeThrough(o).getReader(),
            i = lu();
          i.readable.pipeTo(t.writable), (this.writer = i.writable.getWriter());
          let r = () => {
            e.read()
              .then(({ done: s, value: c }) => {
                s || (this.onPacket(c), r());
              })
              .catch((s) => {});
          };
          r();
          let a = { type: "open" };
          this.query.sid && (a.data = `{"sid":"${this.query.sid}"}`),
            this.writer.write(a).then(() => this.onOpen());
        });
      }));
  }
  write(t) {
    this.writable = !1;
    for (let o = 0; o < t.length; o++) {
      let e = t[o],
        i = o === t.length - 1;
      this.writer.write(e).then(() => {
        i &&
          Bi(() => {
            (this.writable = !0), this.emitReserved("drain");
          }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var t;
    (t = this.transport) === null || t === void 0 || t.close();
  }
};
var cl = { websocket: Na, webtransport: ja, polling: Pa };
var qv =
    /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
  Gv = [
    "source",
    "protocol",
    "authority",
    "userInfo",
    "user",
    "password",
    "host",
    "port",
    "relative",
    "path",
    "directory",
    "file",
    "query",
    "anchor",
  ];
function In(n) {
  if (n.length > 2e3) throw "URI too long";
  let t = n,
    o = n.indexOf("["),
    e = n.indexOf("]");
  o != -1 &&
    e != -1 &&
    (n =
      n.substring(0, o) +
      n.substring(o, e).replace(/:/g, ";") +
      n.substring(e, n.length));
  let i = qv.exec(n || ""),
    r = {},
    a = 14;
  for (; a--; ) r[Gv[a]] = i[a] || "";
  return (
    o != -1 &&
      e != -1 &&
      ((r.source = t),
      (r.host = r.host.substring(1, r.host.length - 1).replace(/;/g, ":")),
      (r.authority = r.authority
        .replace("[", "")
        .replace("]", "")
        .replace(/;/g, ":")),
      (r.ipv6uri = !0)),
    (r.pathNames = Yv(r, r.path)),
    (r.queryKey = Xv(r, r.query)),
    r
  );
}
function Yv(n, t) {
  let o = /\/{2,9}/g,
    e = t.replace(o, "/").split("/");
  return (
    (t.slice(0, 1) == "/" || t.length === 0) && e.splice(0, 1),
    t.slice(-1) == "/" && e.splice(e.length - 1, 1),
    e
  );
}
function Xv(n, t) {
  let o = {};
  return (
    t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (e, i, r) {
      i && (o[i] = r);
    }),
    o
  );
}
var za = (() => {
  class n extends dt {
    constructor(o, e = {}) {
      super(),
        (this.binaryType = yu),
        (this.writeBuffer = []),
        o && typeof o == "object" && ((e = o), (o = null)),
        o
          ? ((o = In(o)),
            (e.hostname = o.host),
            (e.secure = o.protocol === "https" || o.protocol === "wss"),
            (e.port = o.port),
            o.query && (e.query = o.query))
          : e.host && (e.hostname = In(e.host).host),
        je(this, e),
        (this.secure =
          e.secure != null
            ? e.secure
            : typeof location < "u" && location.protocol === "https:"),
        e.hostname && !e.port && (e.port = this.secure ? "443" : "80"),
        (this.hostname =
          e.hostname ||
          (typeof location < "u" ? location.hostname : "localhost")),
        (this.port =
          e.port ||
          (typeof location < "u" && location.port
            ? location.port
            : this.secure
            ? "443"
            : "80")),
        (this.transports = e.transports || [
          "polling",
          "websocket",
          "webtransport",
        ]),
        (this.writeBuffer = []),
        (this.prevBufferLen = 0),
        (this.opts = Object.assign(
          {
            path: "/engine.io",
            agent: !1,
            withCredentials: !1,
            upgrade: !0,
            timestampParam: "t",
            rememberUpgrade: !1,
            addTrailingSlash: !0,
            rejectUnauthorized: !0,
            perMessageDeflate: { threshold: 1024 },
            transportOptions: {},
            closeOnBeforeunload: !1,
          },
          e
        )),
        (this.opts.path =
          this.opts.path.replace(/\/$/, "") +
          (this.opts.addTrailingSlash ? "/" : "")),
        typeof this.opts.query == "string" &&
          (this.opts.query = uu(this.opts.query)),
        (this.id = null),
        (this.upgrades = null),
        (this.pingInterval = null),
        (this.pingTimeout = null),
        (this.pingTimeoutTimer = null),
        typeof addEventListener == "function" &&
          (this.opts.closeOnBeforeunload &&
            ((this.beforeunloadEventListener = () => {
              this.transport &&
                (this.transport.removeAllListeners(), this.transport.close());
            }),
            addEventListener(
              "beforeunload",
              this.beforeunloadEventListener,
              !1
            )),
          this.hostname !== "localhost" &&
            ((this.offlineEventListener = () => {
              this.onClose("transport close", {
                description: "network connection lost",
              });
            }),
            addEventListener("offline", this.offlineEventListener, !1))),
        this.open();
    }
    createTransport(o) {
      let e = Object.assign({}, this.opts.query);
      (e.EIO = rl), (e.transport = o), this.id && (e.sid = this.id);
      let i = Object.assign(
        {},
        this.opts,
        {
          query: e,
          socket: this,
          hostname: this.hostname,
          secure: this.secure,
          port: this.port,
        },
        this.opts.transportOptions[o]
      );
      return new cl[o](i);
    }
    open() {
      let o;
      if (
        this.opts.rememberUpgrade &&
        n.priorWebsocketSuccess &&
        this.transports.indexOf("websocket") !== -1
      )
        o = "websocket";
      else if (this.transports.length === 0) {
        this.setTimeoutFn(() => {
          this.emitReserved("error", "No transports available");
        }, 0);
        return;
      } else o = this.transports[0];
      this.readyState = "opening";
      try {
        o = this.createTransport(o);
      } catch {
        this.transports.shift(), this.open();
        return;
      }
      o.open(), this.setTransport(o);
    }
    setTransport(o) {
      this.transport && this.transport.removeAllListeners(),
        (this.transport = o),
        o
          .on("drain", this.onDrain.bind(this))
          .on("packet", this.onPacket.bind(this))
          .on("error", this.onError.bind(this))
          .on("close", (e) => this.onClose("transport close", e));
    }
    probe(o) {
      let e = this.createTransport(o),
        i = !1;
      n.priorWebsocketSuccess = !1;
      let r = () => {
        i ||
          (e.send([{ type: "ping", data: "probe" }]),
          e.once("packet", (g) => {
            if (!i)
              if (g.type === "pong" && g.data === "probe") {
                if (
                  ((this.upgrading = !0), this.emitReserved("upgrading", e), !e)
                )
                  return;
                (n.priorWebsocketSuccess = e.name === "websocket"),
                  this.transport.pause(() => {
                    i ||
                      (this.readyState !== "closed" &&
                        (f(),
                        this.setTransport(e),
                        e.send([{ type: "upgrade" }]),
                        this.emitReserved("upgrade", e),
                        (e = null),
                        (this.upgrading = !1),
                        this.flush()));
                  });
              } else {
                let k = new Error("probe error");
                (k.transport = e.name), this.emitReserved("upgradeError", k);
              }
          }));
      };
      function a() {
        i || ((i = !0), f(), e.close(), (e = null));
      }
      let s = (g) => {
        let k = new Error("probe error: " + g);
        (k.transport = e.name), a(), this.emitReserved("upgradeError", k);
      };
      function c() {
        s("transport closed");
      }
      function l() {
        s("socket closed");
      }
      function m(g) {
        e && g.name !== e.name && a();
      }
      let f = () => {
        e.removeListener("open", r),
          e.removeListener("error", s),
          e.removeListener("close", c),
          this.off("close", l),
          this.off("upgrading", m);
      };
      e.once("open", r),
        e.once("error", s),
        e.once("close", c),
        this.once("close", l),
        this.once("upgrading", m),
        this.upgrades.indexOf("webtransport") !== -1 && o !== "webtransport"
          ? this.setTimeoutFn(() => {
              i || e.open();
            }, 200)
          : e.open();
    }
    onOpen() {
      if (
        ((this.readyState = "open"),
        (n.priorWebsocketSuccess = this.transport.name === "websocket"),
        this.emitReserved("open"),
        this.flush(),
        this.readyState === "open" && this.opts.upgrade)
      ) {
        let o = 0,
          e = this.upgrades.length;
        for (; o < e; o++) this.probe(this.upgrades[o]);
      }
    }
    onPacket(o) {
      if (
        this.readyState === "opening" ||
        this.readyState === "open" ||
        this.readyState === "closing"
      )
        switch (
          (this.emitReserved("packet", o),
          this.emitReserved("heartbeat"),
          this.resetPingTimeout(),
          o.type)
        ) {
          case "open":
            this.onHandshake(JSON.parse(o.data));
            break;
          case "ping":
            this.sendPacket("pong"),
              this.emitReserved("ping"),
              this.emitReserved("pong");
            break;
          case "error":
            let e = new Error("server error");
            (e.code = o.data), this.onError(e);
            break;
          case "message":
            this.emitReserved("data", o.data),
              this.emitReserved("message", o.data);
            break;
        }
    }
    onHandshake(o) {
      this.emitReserved("handshake", o),
        (this.id = o.sid),
        (this.transport.query.sid = o.sid),
        (this.upgrades = this.filterUpgrades(o.upgrades)),
        (this.pingInterval = o.pingInterval),
        (this.pingTimeout = o.pingTimeout),
        (this.maxPayload = o.maxPayload),
        this.onOpen(),
        this.readyState !== "closed" && this.resetPingTimeout();
    }
    resetPingTimeout() {
      this.clearTimeoutFn(this.pingTimeoutTimer),
        (this.pingTimeoutTimer = this.setTimeoutFn(() => {
          this.onClose("ping timeout");
        }, this.pingInterval + this.pingTimeout)),
        this.opts.autoUnref && this.pingTimeoutTimer.unref();
    }
    onDrain() {
      this.writeBuffer.splice(0, this.prevBufferLen),
        (this.prevBufferLen = 0),
        this.writeBuffer.length === 0
          ? this.emitReserved("drain")
          : this.flush();
    }
    flush() {
      if (
        this.readyState !== "closed" &&
        this.transport.writable &&
        !this.upgrading &&
        this.writeBuffer.length
      ) {
        let o = this.getWritablePackets();
        this.transport.send(o),
          (this.prevBufferLen = o.length),
          this.emitReserved("flush");
      }
    }
    getWritablePackets() {
      if (
        !(
          this.maxPayload &&
          this.transport.name === "polling" &&
          this.writeBuffer.length > 1
        )
      )
        return this.writeBuffer;
      let e = 1;
      for (let i = 0; i < this.writeBuffer.length; i++) {
        let r = this.writeBuffer[i].data;
        if ((r && (e += mu(r)), i > 0 && e > this.maxPayload))
          return this.writeBuffer.slice(0, i);
        e += 2;
      }
      return this.writeBuffer;
    }
    write(o, e, i) {
      return this.sendPacket("message", o, e, i), this;
    }
    send(o, e, i) {
      return this.sendPacket("message", o, e, i), this;
    }
    sendPacket(o, e, i, r) {
      if (
        (typeof e == "function" && ((r = e), (e = void 0)),
        typeof i == "function" && ((r = i), (i = null)),
        this.readyState === "closing" || this.readyState === "closed")
      )
        return;
      (i = i || {}), (i.compress = i.compress !== !1);
      let a = { type: o, data: e, options: i };
      this.emitReserved("packetCreate", a),
        this.writeBuffer.push(a),
        r && this.once("flush", r),
        this.flush();
    }
    close() {
      let o = () => {
          this.onClose("forced close"), this.transport.close();
        },
        e = () => {
          this.off("upgrade", e), this.off("upgradeError", e), o();
        },
        i = () => {
          this.once("upgrade", e), this.once("upgradeError", e);
        };
      return (
        (this.readyState === "opening" || this.readyState === "open") &&
          ((this.readyState = "closing"),
          this.writeBuffer.length
            ? this.once("drain", () => {
                this.upgrading ? i() : o();
              })
            : this.upgrading
            ? i()
            : o()),
        this
      );
    }
    onError(o) {
      (n.priorWebsocketSuccess = !1),
        this.emitReserved("error", o),
        this.onClose("transport error", o);
    }
    onClose(o, e) {
      (this.readyState === "opening" ||
        this.readyState === "open" ||
        this.readyState === "closing") &&
        (this.clearTimeoutFn(this.pingTimeoutTimer),
        this.transport.removeAllListeners("close"),
        this.transport.close(),
        this.transport.removeAllListeners(),
        typeof removeEventListener == "function" &&
          (removeEventListener(
            "beforeunload",
            this.beforeunloadEventListener,
            !1
          ),
          removeEventListener("offline", this.offlineEventListener, !1)),
        (this.readyState = "closed"),
        (this.id = null),
        this.emitReserved("close", o, e),
        (this.writeBuffer = []),
        (this.prevBufferLen = 0));
    }
    filterUpgrades(o) {
      let e = [],
        i = 0,
        r = o.length;
      for (; i < r; i++) ~this.transports.indexOf(o[i]) && e.push(o[i]);
      return e;
    }
  }
  return (n.protocol = rl), n;
})();
var q1 = za.protocol;
function ku(n, t = "", o) {
  let e = n;
  (o = o || (typeof location < "u" && location)),
    n == null && (n = o.protocol + "//" + o.host),
    typeof n == "string" &&
      (n.charAt(0) === "/" &&
        (n.charAt(1) === "/" ? (n = o.protocol + n) : (n = o.host + n)),
      /^(https?|wss?):\/\//.test(n) ||
        (typeof o < "u" ? (n = o.protocol + "//" + n) : (n = "https://" + n)),
      (e = In(n))),
    e.port ||
      (/^(http|ws)$/.test(e.protocol)
        ? (e.port = "80")
        : /^(http|ws)s$/.test(e.protocol) && (e.port = "443")),
    (e.path = e.path || "/");
  let r = e.host.indexOf(":") !== -1 ? "[" + e.host + "]" : e.host;
  return (
    (e.id = e.protocol + "://" + r + ":" + e.port + t),
    (e.href =
      e.protocol + "://" + r + (o && o.port === e.port ? "" : ":" + e.port)),
    e
  );
}
var fl = {};
nd(fl, {
  Decoder: () => hl,
  Encoder: () => ml,
  PacketType: () => J,
  protocol: () => pl,
});
var Zv = typeof ArrayBuffer == "function",
  Qv = (n) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(n)
      : n.buffer instanceof ArrayBuffer,
  Cu = Object.prototype.toString,
  Kv =
    typeof Blob == "function" ||
    (typeof Blob < "u" && Cu.call(Blob) === "[object BlobConstructor]"),
  Jv =
    typeof File == "function" ||
    (typeof File < "u" && Cu.call(File) === "[object FileConstructor]");
function Xo(n) {
  return (
    (Zv && (n instanceof ArrayBuffer || Qv(n))) ||
    (Kv && n instanceof Blob) ||
    (Jv && n instanceof File)
  );
}
function Yo(n, t) {
  if (!n || typeof n != "object") return !1;
  if (Array.isArray(n)) {
    for (let o = 0, e = n.length; o < e; o++) if (Yo(n[o])) return !0;
    return !1;
  }
  if (Xo(n)) return !0;
  if (n.toJSON && typeof n.toJSON == "function" && arguments.length === 1)
    return Yo(n.toJSON(), !0);
  for (let o in n)
    if (Object.prototype.hasOwnProperty.call(n, o) && Yo(n[o])) return !0;
  return !1;
}
function Eu(n) {
  let t = [],
    o = n.data,
    e = n;
  return (
    (e.data = ll(o, t)), (e.attachments = t.length), { packet: e, buffers: t }
  );
}
function ll(n, t) {
  if (!n) return n;
  if (Xo(n)) {
    let o = { _placeholder: !0, num: t.length };
    return t.push(n), o;
  } else if (Array.isArray(n)) {
    let o = new Array(n.length);
    for (let e = 0; e < n.length; e++) o[e] = ll(n[e], t);
    return o;
  } else if (typeof n == "object" && !(n instanceof Date)) {
    let o = {};
    for (let e in n)
      Object.prototype.hasOwnProperty.call(n, e) && (o[e] = ll(n[e], t));
    return o;
  }
  return n;
}
function Su(n, t) {
  return (n.data = dl(n.data, t)), delete n.attachments, n;
}
function dl(n, t) {
  if (!n) return n;
  if (n && n._placeholder === !0) {
    if (typeof n.num == "number" && n.num >= 0 && n.num < t.length)
      return t[n.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(n))
    for (let o = 0; o < n.length; o++) n[o] = dl(n[o], t);
  else if (typeof n == "object")
    for (let o in n)
      Object.prototype.hasOwnProperty.call(n, o) && (n[o] = dl(n[o], t));
  return n;
}
var t0 = [
    "connect",
    "connect_error",
    "disconnect",
    "disconnecting",
    "newListener",
    "removeListener",
  ],
  pl = 5,
  J = (function (n) {
    return (
      (n[(n.CONNECT = 0)] = "CONNECT"),
      (n[(n.DISCONNECT = 1)] = "DISCONNECT"),
      (n[(n.EVENT = 2)] = "EVENT"),
      (n[(n.ACK = 3)] = "ACK"),
      (n[(n.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
      (n[(n.BINARY_EVENT = 5)] = "BINARY_EVENT"),
      (n[(n.BINARY_ACK = 6)] = "BINARY_ACK"),
      n
    );
  })(J || {}),
  ml = class {
    constructor(t) {
      this.replacer = t;
    }
    encode(t) {
      return (t.type === J.EVENT || t.type === J.ACK) && Yo(t)
        ? this.encodeAsBinary({
            type: t.type === J.EVENT ? J.BINARY_EVENT : J.BINARY_ACK,
            nsp: t.nsp,
            data: t.data,
            id: t.id,
          })
        : [this.encodeAsString(t)];
    }
    encodeAsString(t) {
      let o = "" + t.type;
      return (
        (t.type === J.BINARY_EVENT || t.type === J.BINARY_ACK) &&
          (o += t.attachments + "-"),
        t.nsp && t.nsp !== "/" && (o += t.nsp + ","),
        t.id != null && (o += t.id),
        t.data != null && (o += JSON.stringify(t.data, this.replacer)),
        o
      );
    }
    encodeAsBinary(t) {
      let o = Eu(t),
        e = this.encodeAsString(o.packet),
        i = o.buffers;
      return i.unshift(e), i;
    }
  };
function Iu(n) {
  return Object.prototype.toString.call(n) === "[object Object]";
}
var hl = class n extends dt {
    constructor(t) {
      super(), (this.reviver = t);
    }
    add(t) {
      let o;
      if (typeof t == "string") {
        if (this.reconstructor)
          throw new Error("got plaintext data when reconstructing a packet");
        o = this.decodeString(t);
        let e = o.type === J.BINARY_EVENT;
        e || o.type === J.BINARY_ACK
          ? ((o.type = e ? J.EVENT : J.ACK),
            (this.reconstructor = new ul(o)),
            o.attachments === 0 && super.emitReserved("decoded", o))
          : super.emitReserved("decoded", o);
      } else if (Xo(t) || t.base64)
        if (this.reconstructor)
          (o = this.reconstructor.takeBinaryData(t)),
            o &&
              ((this.reconstructor = null), super.emitReserved("decoded", o));
        else
          throw new Error("got binary data when not reconstructing a packet");
      else throw new Error("Unknown type: " + t);
    }
    decodeString(t) {
      let o = 0,
        e = { type: Number(t.charAt(0)) };
      if (J[e.type] === void 0)
        throw new Error("unknown packet type " + e.type);
      if (e.type === J.BINARY_EVENT || e.type === J.BINARY_ACK) {
        let r = o + 1;
        for (; t.charAt(++o) !== "-" && o != t.length; );
        let a = t.substring(r, o);
        if (a != Number(a) || t.charAt(o) !== "-")
          throw new Error("Illegal attachments");
        e.attachments = Number(a);
      }
      if (t.charAt(o + 1) === "/") {
        let r = o + 1;
        for (; ++o && !(t.charAt(o) === "," || o === t.length); );
        e.nsp = t.substring(r, o);
      } else e.nsp = "/";
      let i = t.charAt(o + 1);
      if (i !== "" && Number(i) == i) {
        let r = o + 1;
        for (; ++o; ) {
          let a = t.charAt(o);
          if (a == null || Number(a) != a) {
            --o;
            break;
          }
          if (o === t.length) break;
        }
        e.id = Number(t.substring(r, o + 1));
      }
      if (t.charAt(++o)) {
        let r = this.tryParse(t.substr(o));
        if (n.isPayloadValid(e.type, r)) e.data = r;
        else throw new Error("invalid payload");
      }
      return e;
    }
    tryParse(t) {
      try {
        return JSON.parse(t, this.reviver);
      } catch {
        return !1;
      }
    }
    static isPayloadValid(t, o) {
      switch (t) {
        case J.CONNECT:
          return Iu(o);
        case J.DISCONNECT:
          return o === void 0;
        case J.CONNECT_ERROR:
          return typeof o == "string" || Iu(o);
        case J.EVENT:
        case J.BINARY_EVENT:
          return (
            Array.isArray(o) &&
            (typeof o[0] == "number" ||
              (typeof o[0] == "string" && t0.indexOf(o[0]) === -1))
          );
        case J.ACK:
        case J.BINARY_ACK:
          return Array.isArray(o);
      }
    }
    destroy() {
      this.reconstructor &&
        (this.reconstructor.finishedReconstruction(),
        (this.reconstructor = null));
    }
  },
  ul = class {
    constructor(t) {
      (this.packet = t), (this.buffers = []), (this.reconPack = t);
    }
    takeBinaryData(t) {
      if (
        (this.buffers.push(t),
        this.buffers.length === this.reconPack.attachments)
      ) {
        let o = Su(this.reconPack, this.buffers);
        return this.finishedReconstruction(), o;
      }
      return null;
    }
    finishedReconstruction() {
      (this.reconPack = null), (this.buffers = []);
    }
  };
function Zt(n, t, o) {
  return (
    n.on(t, o),
    function () {
      n.off(t, o);
    }
  );
}
var e0 = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    newListener: 1,
    removeListener: 1,
  }),
  Ui = class extends dt {
    constructor(t, o, e) {
      super(),
        (this.connected = !1),
        (this.recovered = !1),
        (this.receiveBuffer = []),
        (this.sendBuffer = []),
        (this._queue = []),
        (this._queueSeq = 0),
        (this.ids = 0),
        (this.acks = {}),
        (this.flags = {}),
        (this.io = t),
        (this.nsp = o),
        e && e.auth && (this.auth = e.auth),
        (this._opts = Object.assign({}, e)),
        this.io._autoConnect && this.open();
    }
    get disconnected() {
      return !this.connected;
    }
    subEvents() {
      if (this.subs) return;
      let t = this.io;
      this.subs = [
        Zt(t, "open", this.onopen.bind(this)),
        Zt(t, "packet", this.onpacket.bind(this)),
        Zt(t, "error", this.onerror.bind(this)),
        Zt(t, "close", this.onclose.bind(this)),
      ];
    }
    get active() {
      return !!this.subs;
    }
    connect() {
      return this.connected
        ? this
        : (this.subEvents(),
          this.io._reconnecting || this.io.open(),
          this.io._readyState === "open" && this.onopen(),
          this);
    }
    open() {
      return this.connect();
    }
    send(...t) {
      return t.unshift("message"), this.emit.apply(this, t), this;
    }
    emit(t, ...o) {
      if (e0.hasOwnProperty(t))
        throw new Error('"' + t.toString() + '" is a reserved event name');
      if (
        (o.unshift(t),
        this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      )
        return this._addToQueue(o), this;
      let e = { type: J.EVENT, data: o };
      if (
        ((e.options = {}),
        (e.options.compress = this.flags.compress !== !1),
        typeof o[o.length - 1] == "function")
      ) {
        let a = this.ids++,
          s = o.pop();
        this._registerAckCallback(a, s), (e.id = a);
      }
      let i =
        this.io.engine &&
        this.io.engine.transport &&
        this.io.engine.transport.writable;
      return (
        (this.flags.volatile && (!i || !this.connected)) ||
          (this.connected
            ? (this.notifyOutgoingListeners(e), this.packet(e))
            : this.sendBuffer.push(e)),
        (this.flags = {}),
        this
      );
    }
    _registerAckCallback(t, o) {
      var e;
      let i =
        (e = this.flags.timeout) !== null && e !== void 0
          ? e
          : this._opts.ackTimeout;
      if (i === void 0) {
        this.acks[t] = o;
        return;
      }
      let r = this.io.setTimeoutFn(() => {
          delete this.acks[t];
          for (let s = 0; s < this.sendBuffer.length; s++)
            this.sendBuffer[s].id === t && this.sendBuffer.splice(s, 1);
          o.call(this, new Error("operation has timed out"));
        }, i),
        a = (...s) => {
          this.io.clearTimeoutFn(r), o.apply(this, s);
        };
      (a.withError = !0), (this.acks[t] = a);
    }
    emitWithAck(t, ...o) {
      return new Promise((e, i) => {
        let r = (a, s) => (a ? i(a) : e(s));
        (r.withError = !0), o.push(r), this.emit(t, ...o);
      });
    }
    _addToQueue(t) {
      let o;
      typeof t[t.length - 1] == "function" && (o = t.pop());
      let e = {
        id: this._queueSeq++,
        tryCount: 0,
        pending: !1,
        args: t,
        flags: Object.assign({ fromQueue: !0 }, this.flags),
      };
      t.push((i, ...r) =>
        e !== this._queue[0]
          ? void 0
          : (i !== null
              ? e.tryCount > this._opts.retries &&
                (this._queue.shift(), o && o(i))
              : (this._queue.shift(), o && o(null, ...r)),
            (e.pending = !1),
            this._drainQueue())
      ),
        this._queue.push(e),
        this._drainQueue();
    }
    _drainQueue(t = !1) {
      if (!this.connected || this._queue.length === 0) return;
      let o = this._queue[0];
      (o.pending && !t) ||
        ((o.pending = !0),
        o.tryCount++,
        (this.flags = o.flags),
        this.emit.apply(this, o.args));
    }
    packet(t) {
      (t.nsp = this.nsp), this.io._packet(t);
    }
    onopen() {
      typeof this.auth == "function"
        ? this.auth((t) => {
            this._sendConnectPacket(t);
          })
        : this._sendConnectPacket(this.auth);
    }
    _sendConnectPacket(t) {
      this.packet({
        type: J.CONNECT,
        data: this._pid
          ? Object.assign({ pid: this._pid, offset: this._lastOffset }, t)
          : t,
      });
    }
    onerror(t) {
      this.connected || this.emitReserved("connect_error", t);
    }
    onclose(t, o) {
      (this.connected = !1),
        delete this.id,
        this.emitReserved("disconnect", t, o),
        this._clearAcks();
    }
    _clearAcks() {
      Object.keys(this.acks).forEach((t) => {
        if (!this.sendBuffer.some((e) => String(e.id) === t)) {
          let e = this.acks[t];
          delete this.acks[t],
            e.withError &&
              e.call(this, new Error("socket has been disconnected"));
        }
      });
    }
    onpacket(t) {
      if (t.nsp === this.nsp)
        switch (t.type) {
          case J.CONNECT:
            t.data && t.data.sid
              ? this.onconnect(t.data.sid, t.data.pid)
              : this.emitReserved(
                  "connect_error",
                  new Error(
                    "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"
                  )
                );
            break;
          case J.EVENT:
          case J.BINARY_EVENT:
            this.onevent(t);
            break;
          case J.ACK:
          case J.BINARY_ACK:
            this.onack(t);
            break;
          case J.DISCONNECT:
            this.ondisconnect();
            break;
          case J.CONNECT_ERROR:
            this.destroy();
            let e = new Error(t.data.message);
            (e.data = t.data.data), this.emitReserved("connect_error", e);
            break;
        }
    }
    onevent(t) {
      let o = t.data || [];
      t.id != null && o.push(this.ack(t.id)),
        this.connected
          ? this.emitEvent(o)
          : this.receiveBuffer.push(Object.freeze(o));
    }
    emitEvent(t) {
      if (this._anyListeners && this._anyListeners.length) {
        let o = this._anyListeners.slice();
        for (let e of o) e.apply(this, t);
      }
      super.emit.apply(this, t),
        this._pid &&
          t.length &&
          typeof t[t.length - 1] == "string" &&
          (this._lastOffset = t[t.length - 1]);
    }
    ack(t) {
      let o = this,
        e = !1;
      return function (...i) {
        e || ((e = !0), o.packet({ type: J.ACK, id: t, data: i }));
      };
    }
    onack(t) {
      let o = this.acks[t.id];
      typeof o == "function" &&
        (delete this.acks[t.id],
        o.withError && t.data.unshift(null),
        o.apply(this, t.data));
    }
    onconnect(t, o) {
      (this.id = t),
        (this.recovered = o && this._pid === o),
        (this._pid = o),
        (this.connected = !0),
        this.emitBuffered(),
        this.emitReserved("connect"),
        this._drainQueue(!0);
    }
    emitBuffered() {
      this.receiveBuffer.forEach((t) => this.emitEvent(t)),
        (this.receiveBuffer = []),
        this.sendBuffer.forEach((t) => {
          this.notifyOutgoingListeners(t), this.packet(t);
        }),
        (this.sendBuffer = []);
    }
    ondisconnect() {
      this.destroy(), this.onclose("io server disconnect");
    }
    destroy() {
      this.subs && (this.subs.forEach((t) => t()), (this.subs = void 0)),
        this.io._destroy(this);
    }
    disconnect() {
      return (
        this.connected && this.packet({ type: J.DISCONNECT }),
        this.destroy(),
        this.connected && this.onclose("io client disconnect"),
        this
      );
    }
    close() {
      return this.disconnect();
    }
    compress(t) {
      return (this.flags.compress = t), this;
    }
    get volatile() {
      return (this.flags.volatile = !0), this;
    }
    timeout(t) {
      return (this.flags.timeout = t), this;
    }
    onAny(t) {
      return (
        (this._anyListeners = this._anyListeners || []),
        this._anyListeners.push(t),
        this
      );
    }
    prependAny(t) {
      return (
        (this._anyListeners = this._anyListeners || []),
        this._anyListeners.unshift(t),
        this
      );
    }
    offAny(t) {
      if (!this._anyListeners) return this;
      if (t) {
        let o = this._anyListeners;
        for (let e = 0; e < o.length; e++)
          if (t === o[e]) return o.splice(e, 1), this;
      } else this._anyListeners = [];
      return this;
    }
    listenersAny() {
      return this._anyListeners || [];
    }
    onAnyOutgoing(t) {
      return (
        (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
        this._anyOutgoingListeners.push(t),
        this
      );
    }
    prependAnyOutgoing(t) {
      return (
        (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
        this._anyOutgoingListeners.unshift(t),
        this
      );
    }
    offAnyOutgoing(t) {
      if (!this._anyOutgoingListeners) return this;
      if (t) {
        let o = this._anyOutgoingListeners;
        for (let e = 0; e < o.length; e++)
          if (t === o[e]) return o.splice(e, 1), this;
      } else this._anyOutgoingListeners = [];
      return this;
    }
    listenersAnyOutgoing() {
      return this._anyOutgoingListeners || [];
    }
    notifyOutgoingListeners(t) {
      if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
        let o = this._anyOutgoingListeners.slice();
        for (let e of o) e.apply(this, t.data);
      }
    }
  };
function Hi(n) {
  (n = n || {}),
    (this.ms = n.min || 100),
    (this.max = n.max || 1e4),
    (this.factor = n.factor || 2),
    (this.jitter = n.jitter > 0 && n.jitter <= 1 ? n.jitter : 0),
    (this.attempts = 0);
}
Hi.prototype.duration = function () {
  var n = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t = Math.random(),
      o = Math.floor(t * this.jitter * n);
    n = Math.floor(t * 10) & 1 ? n + o : n - o;
  }
  return Math.min(n, this.max) | 0;
};
Hi.prototype.reset = function () {
  this.attempts = 0;
};
Hi.prototype.setMin = function (n) {
  this.ms = n;
};
Hi.prototype.setMax = function (n) {
  this.max = n;
};
Hi.prototype.setJitter = function (n) {
  this.jitter = n;
};
var $i = class extends dt {
  constructor(t, o) {
    var e;
    super(),
      (this.nsps = {}),
      (this.subs = []),
      t && typeof t == "object" && ((o = t), (t = void 0)),
      (o = o || {}),
      (o.path = o.path || "/socket.io"),
      (this.opts = o),
      je(this, o),
      this.reconnection(o.reconnection !== !1),
      this.reconnectionAttempts(o.reconnectionAttempts || 1 / 0),
      this.reconnectionDelay(o.reconnectionDelay || 1e3),
      this.reconnectionDelayMax(o.reconnectionDelayMax || 5e3),
      this.randomizationFactor(
        (e = o.randomizationFactor) !== null && e !== void 0 ? e : 0.5
      ),
      (this.backoff = new Hi({
        min: this.reconnectionDelay(),
        max: this.reconnectionDelayMax(),
        jitter: this.randomizationFactor(),
      })),
      this.timeout(o.timeout == null ? 2e4 : o.timeout),
      (this._readyState = "closed"),
      (this.uri = t);
    let i = o.parser || fl;
    (this.encoder = new i.Encoder()),
      (this.decoder = new i.Decoder()),
      (this._autoConnect = o.autoConnect !== !1),
      this._autoConnect && this.open();
  }
  reconnection(t) {
    return arguments.length
      ? ((this._reconnection = !!t), this)
      : this._reconnection;
  }
  reconnectionAttempts(t) {
    return t === void 0
      ? this._reconnectionAttempts
      : ((this._reconnectionAttempts = t), this);
  }
  reconnectionDelay(t) {
    var o;
    return t === void 0
      ? this._reconnectionDelay
      : ((this._reconnectionDelay = t),
        (o = this.backoff) === null || o === void 0 || o.setMin(t),
        this);
  }
  randomizationFactor(t) {
    var o;
    return t === void 0
      ? this._randomizationFactor
      : ((this._randomizationFactor = t),
        (o = this.backoff) === null || o === void 0 || o.setJitter(t),
        this);
  }
  reconnectionDelayMax(t) {
    var o;
    return t === void 0
      ? this._reconnectionDelayMax
      : ((this._reconnectionDelayMax = t),
        (o = this.backoff) === null || o === void 0 || o.setMax(t),
        this);
  }
  timeout(t) {
    return arguments.length ? ((this._timeout = t), this) : this._timeout;
  }
  maybeReconnectOnOpen() {
    !this._reconnecting &&
      this._reconnection &&
      this.backoff.attempts === 0 &&
      this.reconnect();
  }
  open(t) {
    if (~this._readyState.indexOf("open")) return this;
    this.engine = new za(this.uri, this.opts);
    let o = this.engine,
      e = this;
    (this._readyState = "opening"), (this.skipReconnect = !1);
    let i = Zt(o, "open", function () {
        e.onopen(), t && t();
      }),
      r = (s) => {
        this.cleanup(),
          (this._readyState = "closed"),
          this.emitReserved("error", s),
          t ? t(s) : this.maybeReconnectOnOpen();
      },
      a = Zt(o, "error", r);
    if (this._timeout !== !1) {
      let s = this._timeout,
        c = this.setTimeoutFn(() => {
          i(), r(new Error("timeout")), o.close();
        }, s);
      this.opts.autoUnref && c.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(c);
        });
    }
    return this.subs.push(i), this.subs.push(a), this;
  }
  connect(t) {
    return this.open(t);
  }
  onopen() {
    this.cleanup(), (this._readyState = "open"), this.emitReserved("open");
    let t = this.engine;
    this.subs.push(
      Zt(t, "ping", this.onping.bind(this)),
      Zt(t, "data", this.ondata.bind(this)),
      Zt(t, "error", this.onerror.bind(this)),
      Zt(t, "close", this.onclose.bind(this)),
      Zt(this.decoder, "decoded", this.ondecoded.bind(this))
    );
  }
  onping() {
    this.emitReserved("ping");
  }
  ondata(t) {
    try {
      this.decoder.add(t);
    } catch (o) {
      this.onclose("parse error", o);
    }
  }
  ondecoded(t) {
    Bi(() => {
      this.emitReserved("packet", t);
    }, this.setTimeoutFn);
  }
  onerror(t) {
    this.emitReserved("error", t);
  }
  socket(t, o) {
    let e = this.nsps[t];
    return (
      e
        ? this._autoConnect && !e.active && e.connect()
        : ((e = new Ui(this, t, o)), (this.nsps[t] = e)),
      e
    );
  }
  _destroy(t) {
    let o = Object.keys(this.nsps);
    for (let e of o) if (this.nsps[e].active) return;
    this._close();
  }
  _packet(t) {
    let o = this.encoder.encode(t);
    for (let e = 0; e < o.length; e++) this.engine.write(o[e], t.options);
  }
  cleanup() {
    this.subs.forEach((t) => t()),
      (this.subs.length = 0),
      this.decoder.destroy();
  }
  _close() {
    (this.skipReconnect = !0),
      (this._reconnecting = !1),
      this.onclose("forced close"),
      this.engine && this.engine.close();
  }
  disconnect() {
    return this._close();
  }
  onclose(t, o) {
    this.cleanup(),
      this.backoff.reset(),
      (this._readyState = "closed"),
      this.emitReserved("close", t, o),
      this._reconnection && !this.skipReconnect && this.reconnect();
  }
  reconnect() {
    if (this._reconnecting || this.skipReconnect) return this;
    let t = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(),
        this.emitReserved("reconnect_failed"),
        (this._reconnecting = !1);
    else {
      let o = this.backoff.duration();
      this._reconnecting = !0;
      let e = this.setTimeoutFn(() => {
        t.skipReconnect ||
          (this.emitReserved("reconnect_attempt", t.backoff.attempts),
          !t.skipReconnect &&
            t.open((i) => {
              i
                ? ((t._reconnecting = !1),
                  t.reconnect(),
                  this.emitReserved("reconnect_error", i))
                : t.onreconnect();
            }));
      }, o);
      this.opts.autoUnref && e.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(e);
        });
    }
  }
  onreconnect() {
    let t = this.backoff.attempts;
    (this._reconnecting = !1),
      this.backoff.reset(),
      this.emitReserved("reconnect", t);
  }
};
var Zo = {};
function Wi(n, t) {
  typeof n == "object" && ((t = n), (n = void 0)), (t = t || {});
  let o = ku(n, t.path || "/socket.io"),
    e = o.source,
    i = o.id,
    r = o.path,
    a = Zo[i] && r in Zo[i].nsps,
    s = t.forceNew || t["force new connection"] || t.multiplex === !1 || a,
    c;
  return (
    s ? (c = new $i(e, t)) : (Zo[i] || (Zo[i] = new $i(e, t)), (c = Zo[i])),
    o.query && !t.query && (t.query = o.queryKey),
    c.socket(o.path, t)
  );
}
Object.assign(Wi, { Manager: $i, Socket: Ui, io: Wi, connect: Wi });
var Dn = class {
  config;
  subscribersCounter = {};
  eventObservables$ = {};
  ioSocket;
  emptyConfig = { url: "", options: {} };
  constructor(t) {
    (this.config = t), t === void 0 && (t = this.emptyConfig);
    let o = t.url,
      e = t.options,
      i = Wi ? Wi : gl;
    this.ioSocket = i(o, e);
  }
  of(t) {
    this.ioSocket.of(t);
  }
  on(t, o) {
    this.ioSocket.on(t, o);
  }
  once(t, o) {
    this.ioSocket.once(t, o);
  }
  connect(t) {
    return this.ioSocket.connect(t);
  }
  disconnect(t) {
    return this.ioSocket.disconnect.apply(this.ioSocket, arguments);
  }
  emit(t, ...o) {
    return this.ioSocket.emit.apply(this.ioSocket, arguments);
  }
  removeListener(t, o) {
    return this.ioSocket.removeListener.apply(this.ioSocket, arguments);
  }
  removeAllListeners(t) {
    return this.ioSocket.removeAllListeners.apply(this.ioSocket, arguments);
  }
  fromEvent(t) {
    return (
      this.subscribersCounter[t] || (this.subscribersCounter[t] = 0),
      this.subscribersCounter[t]++,
      this.eventObservables$[t] ||
        (this.eventObservables$[t] = new Jt((o) => {
          let e = (i) => {
            o.next(i);
          };
          return (
            this.ioSocket.on(t, e),
            () => {
              this.subscribersCounter[t]--,
                this.subscribersCounter[t] === 0 &&
                  (this.ioSocket.removeListener(t, e),
                  delete this.eventObservables$[t]);
            }
          );
        }).pipe(_r())),
      this.eventObservables$[t]
    );
  }
  fromOneTimeEvent(t) {
    return new Promise((o) => this.once(t, o));
  }
  listeners(t) {
    return this.ioSocket.listeners(t);
  }
  listenersAny() {
    return this.ioSocket.listenersAny();
  }
  listenersAnyOutgoing() {
    return this.ioSocket.listenersAnyOutgoing();
  }
  off(t, o) {
    return t
      ? t && !o
        ? this.ioSocket.off(t)
        : this.ioSocket.off(t, o)
      : this.ioSocket.offAny();
  }
  onAny(t) {
    return this.ioSocket.onAny(t);
  }
  onAnyOutgoing(t) {
    return this.ioSocket.onAnyOutgoing(t);
  }
  prependAny(t) {
    return this.ioSocket.prependAny(t);
  }
  prependAnyOutgoing(t) {
    return this.ioSocket.prependAnyOutgoing(t);
  }
  timeout(t) {
    return this.ioSocket.timeout(t);
  }
  volatile() {
    return this.ioSocket.volatile;
  }
};
function i0(n) {
  return new Dn(n);
}
var Du = new w("__SOCKET_IO_CONFIG__"),
  Au = (() => {
    class n {
      static forRoot(o) {
        return {
          ngModule: n,
          providers: [
            { provide: Du, useValue: o },
            { provide: Dn, useFactory: i0, deps: [Du] },
          ],
        };
      }
      static ɵfac = function (e) {
        return new (e || n)();
      };
      static ɵmod = T({ type: n });
      static ɵinj = M({});
    }
    return n;
  })();
var Va = (() => {
  let t = class t {
    constructor(e) {
      this.socket = e;
    }
    connect() {
      let e = localStorage.getItem("token");
      e
        ? ((this.socket.ioSocket.io.opts.query = { token: e }),
          this.socket.connect(),
          console.log("WebSocket conectado con token:", e))
        : console.error("Token no disponible para conectar WebSocket");
    }
    createComment(e, i) {
      this.socket.emit("createComment", { postId: e, content: i });
    }
    onCommentCreated() {
      return this.socket.fromEvent("commentCreated");
    }
    disconnect() {
      this.socket.disconnect();
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(h(Dn));
  }),
    (t.ɵprov = x({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let n = t;
  return n;
})();
var ci = (() => {
  let t = class t {
    constructor(e, i) {
      (this.http = e),
        (this.webSocketService = i),
        (this.apiUrl = le.apiUrl),
        (this.isAuthenticatedSubject = new Nt(!1)),
        (this.isAuthenticated$ = this.isAuthenticatedSubject.asObservable());
      let r = localStorage.getItem("token");
      this.checkToken(r);
    }
    getAuthHeaders() {
      let e = localStorage.getItem("token");
      return new pt({
        "Content-Type": "application/json",
        Authorization: `Bearer ${e}`,
      });
    }
    register(e) {
      return this.http
        .post(`${this.apiUrl}/auth/register`, e)
        .pipe(Dt((i) => (console.error("Registration error:", i), jt(i))));
    }
    login(e) {
      return this.http
        .post(`${this.apiUrl}/auth/login`, e, {
          headers: new pt({ "Content-Type": "application/json" }),
        })
        .pipe(
          lt((i) => {
            i.token &&
              (localStorage.setItem("token", i.token),
              this.updateAuthenticationStatus(!0),
              this.webSocketService.connect());
          }),
          Dt((i) => (console.error("Login error:", i), jt(i)))
        );
    }
    createPost(e) {
      return this.http
        .post(`${this.apiUrl}/posts`, e, { headers: this.getAuthHeaders() })
        .pipe(Dt((i) => (console.error("Create post error:", i), jt(i))));
    }
    getAllPosts() {
      return this.http.get(`${this.apiUrl}/posts`, {
        headers: new pt({ "Content-Type": "application/json" }),
      });
    }
    getUserData() {
      return this.http
        .get(`${this.apiUrl}/users/me`, { headers: this.getAuthHeaders() })
        .pipe(Dt((e) => (console.error("Get user data error:", e), jt(e))));
    }
    getUserByEmail(e) {
      return this.http
        .get(`${this.apiUrl}/users/email/${e}`, {
          headers: this.getAuthHeaders(),
        })
        .pipe(Dt((i) => (console.error("Get user by email error:", i), jt(i))));
    }
    logout() {
      localStorage.removeItem("token"),
        this.updateAuthenticationStatus(!1),
        this.webSocketService.disconnect();
    }
    checkToken(e) {
      e
        ? this.validateToken(e).subscribe()
        : this.updateAuthenticationStatus(!1);
    }
    validateToken(e) {
      return this.http
        .post(
          `${this.apiUrl}/auth/validate-token`,
          { token: e },
          { headers: new pt({ "Content-Type": "application/json" }) }
        )
        .pipe(
          lt((i) => {
            this.updateAuthenticationStatus(i.valid);
          }),
          Dt(
            (i) => (
              console.error("Token validation error:", i),
              this.updateAuthenticationStatus(!1),
              jt(i)
            )
          )
        );
    }
    updateAuthenticationStatus(e) {
      this.isAuthenticatedSubject.next(e);
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(h(Gt), h(Va));
  }),
    (t.ɵprov = x({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let n = t;
  return n;
})();
var Qo = class {
    attach(t) {
      return (this._attachedHost = t), t.attach(this);
    }
    detach() {
      let t = this._attachedHost;
      t != null && ((this._attachedHost = null), t.detach());
    }
    get isAttached() {
      return this._attachedHost != null;
    }
    setAttachedHost(t) {
      this._attachedHost = t;
    }
  },
  pe = class extends Qo {
    constructor(t, o, e, i, r) {
      super(),
        (this.component = t),
        (this.viewContainerRef = o),
        (this.injector = e),
        (this.componentFactoryResolver = i),
        (this.projectableNodes = r);
    }
  },
  Ve = class extends Qo {
    constructor(t, o, e, i) {
      super(),
        (this.templateRef = t),
        (this.viewContainerRef = o),
        (this.context = e),
        (this.injector = i);
    }
    get origin() {
      return this.templateRef.elementRef;
    }
    attach(t, o = this.context) {
      return (this.context = o), super.attach(t);
    }
    detach() {
      return (this.context = void 0), super.detach();
    }
  },
  bl = class extends Qo {
    constructor(t) {
      super(), (this.element = t instanceof L ? t.nativeElement : t);
    }
  },
  li = class {
    constructor() {
      (this._isDisposed = !1), (this.attachDomPortal = null);
    }
    hasAttached() {
      return !!this._attachedPortal;
    }
    attach(t) {
      if (t instanceof pe)
        return (this._attachedPortal = t), this.attachComponentPortal(t);
      if (t instanceof Ve)
        return (this._attachedPortal = t), this.attachTemplatePortal(t);
      if (this.attachDomPortal && t instanceof bl)
        return (this._attachedPortal = t), this.attachDomPortal(t);
    }
    detach() {
      this._attachedPortal &&
        (this._attachedPortal.setAttachedHost(null),
        (this._attachedPortal = null)),
        this._invokeDisposeFn();
    }
    dispose() {
      this.hasAttached() && this.detach(),
        this._invokeDisposeFn(),
        (this._isDisposed = !0);
    }
    setDisposeFn(t) {
      this._disposeFn = t;
    }
    _invokeDisposeFn() {
      this._disposeFn && (this._disposeFn(), (this._disposeFn = null));
    }
  };
var Ua = class extends li {
  constructor(t, o, e, i, r) {
    super(),
      (this.outletElement = t),
      (this._componentFactoryResolver = o),
      (this._appRef = e),
      (this._defaultInjector = i),
      (this.attachDomPortal = (a) => {
        this._document;
        let s = a.element;
        s.parentNode;
        let c = this._document.createComment("dom-portal");
        s.parentNode.insertBefore(c, s),
          this.outletElement.appendChild(s),
          (this._attachedPortal = a),
          super.setDisposeFn(() => {
            c.parentNode && c.parentNode.replaceChild(s, c);
          });
      }),
      (this._document = r);
  }
  attachComponentPortal(t) {
    let e = (
        t.componentFactoryResolver || this._componentFactoryResolver
      ).resolveComponentFactory(t.component),
      i;
    return (
      t.viewContainerRef
        ? ((i = t.viewContainerRef.createComponent(
            e,
            t.viewContainerRef.length,
            t.injector || t.viewContainerRef.injector,
            t.projectableNodes || void 0
          )),
          this.setDisposeFn(() => i.destroy()))
        : ((i = e.create(t.injector || this._defaultInjector || kt.NULL)),
          this._appRef.attachView(i.hostView),
          this.setDisposeFn(() => {
            this._appRef.viewCount > 0 && this._appRef.detachView(i.hostView),
              i.destroy();
          })),
      this.outletElement.appendChild(this._getComponentRootNode(i)),
      (this._attachedPortal = t),
      i
    );
  }
  attachTemplatePortal(t) {
    let o = t.viewContainerRef,
      e = o.createEmbeddedView(t.templateRef, t.context, {
        injector: t.injector,
      });
    return (
      e.rootNodes.forEach((i) => this.outletElement.appendChild(i)),
      e.detectChanges(),
      this.setDisposeFn(() => {
        let i = o.indexOf(e);
        i !== -1 && o.remove(i);
      }),
      (this._attachedPortal = t),
      e
    );
  }
  dispose() {
    super.dispose(), this.outletElement.remove();
  }
  _getComponentRootNode(t) {
    return t.hostView.rootNodes[0];
  }
};
var di = (() => {
  let t = class t extends li {
    constructor(e, i, r) {
      super(),
        (this._componentFactoryResolver = e),
        (this._viewContainerRef = i),
        (this._isInitialized = !1),
        (this.attached = new et()),
        (this.attachDomPortal = (a) => {
          this._document;
          let s = a.element;
          s.parentNode;
          let c = this._document.createComment("dom-portal");
          a.setAttachedHost(this),
            s.parentNode.insertBefore(c, s),
            this._getRootNode().appendChild(s),
            (this._attachedPortal = a),
            super.setDisposeFn(() => {
              c.parentNode && c.parentNode.replaceChild(s, c);
            });
        }),
        (this._document = r);
    }
    get portal() {
      return this._attachedPortal;
    }
    set portal(e) {
      (this.hasAttached() && !e && !this._isInitialized) ||
        (this.hasAttached() && super.detach(),
        e && super.attach(e),
        (this._attachedPortal = e || null));
    }
    get attachedRef() {
      return this._attachedRef;
    }
    ngOnInit() {
      this._isInitialized = !0;
    }
    ngOnDestroy() {
      super.dispose(), (this._attachedRef = this._attachedPortal = null);
    }
    attachComponentPortal(e) {
      e.setAttachedHost(this);
      let i =
          e.viewContainerRef != null
            ? e.viewContainerRef
            : this._viewContainerRef,
        a = (
          e.componentFactoryResolver || this._componentFactoryResolver
        ).resolveComponentFactory(e.component),
        s = i.createComponent(
          a,
          i.length,
          e.injector || i.injector,
          e.projectableNodes || void 0
        );
      return (
        i !== this._viewContainerRef &&
          this._getRootNode().appendChild(s.hostView.rootNodes[0]),
        super.setDisposeFn(() => s.destroy()),
        (this._attachedPortal = e),
        (this._attachedRef = s),
        this.attached.emit(s),
        s
      );
    }
    attachTemplatePortal(e) {
      e.setAttachedHost(this);
      let i = this._viewContainerRef.createEmbeddedView(
        e.templateRef,
        e.context,
        { injector: e.injector }
      );
      return (
        super.setDisposeFn(() => this._viewContainerRef.clear()),
        (this._attachedPortal = e),
        (this._attachedRef = i),
        this.attached.emit(i),
        i
      );
    }
    _getRootNode() {
      let e = this._viewContainerRef.element.nativeElement;
      return e.nodeType === e.ELEMENT_NODE ? e : e.parentNode;
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(d(yr), d(Te), d(R));
  }),
    (t.ɵdir = F({
      type: t,
      selectors: [["", "cdkPortalOutlet", ""]],
      inputs: { portal: [0, "cdkPortalOutlet", "portal"] },
      outputs: { attached: "attached" },
      exportAs: ["cdkPortalOutlet"],
      standalone: !0,
      features: [ut],
    }));
  let n = t;
  return n;
})();
var mi = (() => {
  let t = class t {};
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵmod = T({ type: t })),
    (t.ɵinj = M({}));
  let n = t;
  return n;
})();
var Ha = class {
  get selected() {
    return (
      this._selected || (this._selected = Array.from(this._selection.values())),
      this._selected
    );
  }
  constructor(t = !1, o, e = !0, i) {
    (this._multiple = t),
      (this._emitChanges = e),
      (this.compareWith = i),
      (this._selection = new Set()),
      (this._deselectedToEmit = []),
      (this._selectedToEmit = []),
      (this.changed = new E()),
      o &&
        o.length &&
        (t ? o.forEach((r) => this._markSelected(r)) : this._markSelected(o[0]),
        (this._selectedToEmit.length = 0));
  }
  select(...t) {
    this._verifyValueAssignment(t), t.forEach((e) => this._markSelected(e));
    let o = this._hasQueuedChanges();
    return this._emitChangeEvent(), o;
  }
  deselect(...t) {
    this._verifyValueAssignment(t), t.forEach((e) => this._unmarkSelected(e));
    let o = this._hasQueuedChanges();
    return this._emitChangeEvent(), o;
  }
  setSelection(...t) {
    this._verifyValueAssignment(t);
    let o = this.selected,
      e = new Set(t);
    t.forEach((r) => this._markSelected(r)),
      o
        .filter((r) => !e.has(this._getConcreteValue(r, e)))
        .forEach((r) => this._unmarkSelected(r));
    let i = this._hasQueuedChanges();
    return this._emitChangeEvent(), i;
  }
  toggle(t) {
    return this.isSelected(t) ? this.deselect(t) : this.select(t);
  }
  clear(t = !0) {
    this._unmarkAll();
    let o = this._hasQueuedChanges();
    return t && this._emitChangeEvent(), o;
  }
  isSelected(t) {
    return this._selection.has(this._getConcreteValue(t));
  }
  isEmpty() {
    return this._selection.size === 0;
  }
  hasValue() {
    return !this.isEmpty();
  }
  sort(t) {
    this._multiple && this.selected && this._selected.sort(t);
  }
  isMultipleSelection() {
    return this._multiple;
  }
  _emitChangeEvent() {
    (this._selected = null),
      (this._selectedToEmit.length || this._deselectedToEmit.length) &&
        (this.changed.next({
          source: this,
          added: this._selectedToEmit,
          removed: this._deselectedToEmit,
        }),
        (this._deselectedToEmit = []),
        (this._selectedToEmit = []));
  }
  _markSelected(t) {
    (t = this._getConcreteValue(t)),
      this.isSelected(t) ||
        (this._multiple || this._unmarkAll(),
        this.isSelected(t) || this._selection.add(t),
        this._emitChanges && this._selectedToEmit.push(t));
  }
  _unmarkSelected(t) {
    (t = this._getConcreteValue(t)),
      this.isSelected(t) &&
        (this._selection.delete(t),
        this._emitChanges && this._deselectedToEmit.push(t));
  }
  _unmarkAll() {
    this.isEmpty() || this._selection.forEach((t) => this._unmarkSelected(t));
  }
  _verifyValueAssignment(t) {
    t.length > 1 && this._multiple;
  }
  _hasQueuedChanges() {
    return !!(this._deselectedToEmit.length || this._selectedToEmit.length);
  }
  _getConcreteValue(t, o) {
    if (this.compareWith) {
      o = o ?? this._selection;
      for (let e of o) if (this.compareWith(t, e)) return e;
      return t;
    } else return t;
  }
};
var o0 = 20,
  Ko = (() => {
    let t = class t {
      constructor(e, i, r) {
        (this._ngZone = e),
          (this._platform = i),
          (this._scrolled = new E()),
          (this._globalSubscription = null),
          (this._scrolledCount = 0),
          (this.scrollContainers = new Map()),
          (this._document = r);
      }
      register(e) {
        this.scrollContainers.has(e) ||
          this.scrollContainers.set(
            e,
            e.elementScrolled().subscribe(() => this._scrolled.next(e))
          );
      }
      deregister(e) {
        let i = this.scrollContainers.get(e);
        i && (i.unsubscribe(), this.scrollContainers.delete(e));
      }
      scrolled(e = o0) {
        return this._platform.isBrowser
          ? new Jt((i) => {
              this._globalSubscription || this._addGlobalListener();
              let r =
                e > 0
                  ? this._scrolled.pipe(_s(e)).subscribe(i)
                  : this._scrolled.subscribe(i);
              return (
                this._scrolledCount++,
                () => {
                  r.unsubscribe(),
                    this._scrolledCount--,
                    this._scrolledCount || this._removeGlobalListener();
                }
              );
            })
          : I();
      }
      ngOnDestroy() {
        this._removeGlobalListener(),
          this.scrollContainers.forEach((e, i) => this.deregister(i)),
          this._scrolled.complete();
      }
      ancestorScrolled(e, i) {
        let r = this.getAncestorScrollContainers(e);
        return this.scrolled(i).pipe(ht((a) => !a || r.indexOf(a) > -1));
      }
      getAncestorScrollContainers(e) {
        let i = [];
        return (
          this.scrollContainers.forEach((r, a) => {
            this._scrollableContainsElement(a, e) && i.push(a);
          }),
          i
        );
      }
      _getWindow() {
        return this._document.defaultView || window;
      }
      _scrollableContainsElement(e, i) {
        let r = ae(i),
          a = e.getElementRef().nativeElement;
        do if (r == a) return !0;
        while ((r = r.parentElement));
        return !1;
      }
      _addGlobalListener() {
        this._globalSubscription = this._ngZone.runOutsideAngular(() => {
          let e = this._getWindow();
          return bs(e.document, "scroll").subscribe(() =>
            this._scrolled.next()
          );
        });
      }
      _removeGlobalListener() {
        this._globalSubscription &&
          (this._globalSubscription.unsubscribe(),
          (this._globalSubscription = null));
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(h(D), h(G), h(R, 8));
    }),
      (t.ɵprov = x({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })();
var r0 = 20,
  Mn = (() => {
    let t = class t {
      constructor(e, i, r) {
        (this._platform = e),
          (this._change = new E()),
          (this._changeListener = (a) => {
            this._change.next(a);
          }),
          (this._document = r),
          i.runOutsideAngular(() => {
            if (e.isBrowser) {
              let a = this._getWindow();
              a.addEventListener("resize", this._changeListener),
                a.addEventListener("orientationchange", this._changeListener);
            }
            this.change().subscribe(() => (this._viewportSize = null));
          });
      }
      ngOnDestroy() {
        if (this._platform.isBrowser) {
          let e = this._getWindow();
          e.removeEventListener("resize", this._changeListener),
            e.removeEventListener("orientationchange", this._changeListener);
        }
        this._change.complete();
      }
      getViewportSize() {
        this._viewportSize || this._updateViewportSize();
        let e = {
          width: this._viewportSize.width,
          height: this._viewportSize.height,
        };
        return this._platform.isBrowser || (this._viewportSize = null), e;
      }
      getViewportRect() {
        let e = this.getViewportScrollPosition(),
          { width: i, height: r } = this.getViewportSize();
        return {
          top: e.top,
          left: e.left,
          bottom: e.top + r,
          right: e.left + i,
          height: r,
          width: i,
        };
      }
      getViewportScrollPosition() {
        if (!this._platform.isBrowser) return { top: 0, left: 0 };
        let e = this._document,
          i = this._getWindow(),
          r = e.documentElement,
          a = r.getBoundingClientRect(),
          s = -a.top || e.body.scrollTop || i.scrollY || r.scrollTop || 0,
          c = -a.left || e.body.scrollLeft || i.scrollX || r.scrollLeft || 0;
        return { top: s, left: c };
      }
      change(e = r0) {
        return e > 0 ? this._change.pipe(_s(e)) : this._change;
      }
      _getWindow() {
        return this._document.defaultView || window;
      }
      _updateViewportSize() {
        let e = this._getWindow();
        this._viewportSize = this._platform.isBrowser
          ? { width: e.innerWidth, height: e.innerHeight }
          : { width: 0, height: 0 };
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(h(G), h(D), h(R, 8));
    }),
      (t.ɵprov = x({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })();
var An = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵmod = T({ type: t })),
      (t.ɵinj = M({}));
    let n = t;
    return n;
  })(),
  _l = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵmod = T({ type: t })),
      (t.ɵinj = M({ imports: [si, An, si, An] }));
    let n = t;
    return n;
  })();
var Ou = vh(),
  vl = class {
    constructor(t, o) {
      (this._viewportRuler = t),
        (this._previousHTMLStyles = { top: "", left: "" }),
        (this._isEnabled = !1),
        (this._document = o);
    }
    attach() {}
    enable() {
      if (this._canBeEnabled()) {
        let t = this._document.documentElement;
        (this._previousScrollPosition =
          this._viewportRuler.getViewportScrollPosition()),
          (this._previousHTMLStyles.left = t.style.left || ""),
          (this._previousHTMLStyles.top = t.style.top || ""),
          (t.style.left = wt(-this._previousScrollPosition.left)),
          (t.style.top = wt(-this._previousScrollPosition.top)),
          t.classList.add("cdk-global-scrollblock"),
          (this._isEnabled = !0);
      }
    }
    disable() {
      if (this._isEnabled) {
        let t = this._document.documentElement,
          o = this._document.body,
          e = t.style,
          i = o.style,
          r = e.scrollBehavior || "",
          a = i.scrollBehavior || "";
        (this._isEnabled = !1),
          (e.left = this._previousHTMLStyles.left),
          (e.top = this._previousHTMLStyles.top),
          t.classList.remove("cdk-global-scrollblock"),
          Ou && (e.scrollBehavior = i.scrollBehavior = "auto"),
          window.scroll(
            this._previousScrollPosition.left,
            this._previousScrollPosition.top
          ),
          Ou && ((e.scrollBehavior = r), (i.scrollBehavior = a));
      }
    }
    _canBeEnabled() {
      if (
        this._document.documentElement.classList.contains(
          "cdk-global-scrollblock"
        ) ||
        this._isEnabled
      )
        return !1;
      let o = this._document.body,
        e = this._viewportRuler.getViewportSize();
      return o.scrollHeight > e.height || o.scrollWidth > e.width;
    }
  };
var xl = class {
    constructor(t, o, e, i) {
      (this._scrollDispatcher = t),
        (this._ngZone = o),
        (this._viewportRuler = e),
        (this._config = i),
        (this._scrollSubscription = null),
        (this._detach = () => {
          this.disable(),
            this._overlayRef.hasAttached() &&
              this._ngZone.run(() => this._overlayRef.detach());
        });
    }
    attach(t) {
      this._overlayRef, (this._overlayRef = t);
    }
    enable() {
      if (this._scrollSubscription) return;
      let t = this._scrollDispatcher
        .scrolled(0)
        .pipe(
          ht(
            (o) =>
              !o ||
              !this._overlayRef.overlayElement.contains(
                o.getElementRef().nativeElement
              )
          )
        );
      this._config && this._config.threshold && this._config.threshold > 1
        ? ((this._initialScrollPosition =
            this._viewportRuler.getViewportScrollPosition().top),
          (this._scrollSubscription = t.subscribe(() => {
            let o = this._viewportRuler.getViewportScrollPosition().top;
            Math.abs(o - this._initialScrollPosition) > this._config.threshold
              ? this._detach()
              : this._overlayRef.updatePosition();
          })))
        : (this._scrollSubscription = t.subscribe(this._detach));
    }
    disable() {
      this._scrollSubscription &&
        (this._scrollSubscription.unsubscribe(),
        (this._scrollSubscription = null));
    }
    detach() {
      this.disable(), (this._overlayRef = null);
    }
  },
  $a = class {
    enable() {}
    disable() {}
    attach() {}
  };
function yl(n, t) {
  return t.some((o) => {
    let e = n.bottom < o.top,
      i = n.top > o.bottom,
      r = n.right < o.left,
      a = n.left > o.right;
    return e || i || r || a;
  });
}
function Ru(n, t) {
  return t.some((o) => {
    let e = n.top < o.top,
      i = n.bottom > o.bottom,
      r = n.left < o.left,
      a = n.right > o.right;
    return e || i || r || a;
  });
}
var wl = class {
    constructor(t, o, e, i) {
      (this._scrollDispatcher = t),
        (this._viewportRuler = o),
        (this._ngZone = e),
        (this._config = i),
        (this._scrollSubscription = null);
    }
    attach(t) {
      this._overlayRef, (this._overlayRef = t);
    }
    enable() {
      if (!this._scrollSubscription) {
        let t = this._config ? this._config.scrollThrottle : 0;
        this._scrollSubscription = this._scrollDispatcher
          .scrolled(t)
          .subscribe(() => {
            if (
              (this._overlayRef.updatePosition(),
              this._config && this._config.autoClose)
            ) {
              let o = this._overlayRef.overlayElement.getBoundingClientRect(),
                { width: e, height: i } = this._viewportRuler.getViewportSize();
              yl(o, [
                { width: e, height: i, bottom: i, right: e, top: 0, left: 0 },
              ]) &&
                (this.disable(),
                this._ngZone.run(() => this._overlayRef.detach()));
            }
          });
      }
    }
    disable() {
      this._scrollSubscription &&
        (this._scrollSubscription.unsubscribe(),
        (this._scrollSubscription = null));
    }
    detach() {
      this.disable(), (this._overlayRef = null);
    }
  },
  a0 = (() => {
    let t = class t {
      constructor(e, i, r, a) {
        (this._scrollDispatcher = e),
          (this._viewportRuler = i),
          (this._ngZone = r),
          (this.noop = () => new $a()),
          (this.close = (s) =>
            new xl(
              this._scrollDispatcher,
              this._ngZone,
              this._viewportRuler,
              s
            )),
          (this.block = () => new vl(this._viewportRuler, this._document)),
          (this.reposition = (s) =>
            new wl(
              this._scrollDispatcher,
              this._viewportRuler,
              this._ngZone,
              s
            )),
          (this._document = a);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(h(Ko), h(Mn), h(D), h(R));
    }),
      (t.ɵprov = x({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })(),
  hi = class {
    constructor(t) {
      if (
        ((this.scrollStrategy = new $a()),
        (this.panelClass = ""),
        (this.hasBackdrop = !1),
        (this.backdropClass = "cdk-overlay-dark-backdrop"),
        (this.disposeOnNavigation = !1),
        t)
      ) {
        let o = Object.keys(t);
        for (let e of o) t[e] !== void 0 && (this[e] = t[e]);
      }
    }
  };
var kl = class {
  constructor(t, o) {
    (this.connectionPair = t), (this.scrollableViewProperties = o);
  }
};
var ju = (() => {
    let t = class t {
      constructor(e) {
        (this._attachedOverlays = []), (this._document = e);
      }
      ngOnDestroy() {
        this.detach();
      }
      add(e) {
        this.remove(e), this._attachedOverlays.push(e);
      }
      remove(e) {
        let i = this._attachedOverlays.indexOf(e);
        i > -1 && this._attachedOverlays.splice(i, 1),
          this._attachedOverlays.length === 0 && this.detach();
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(h(R));
    }),
      (t.ɵprov = x({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })(),
  s0 = (() => {
    let t = class t extends ju {
      constructor(e, i) {
        super(e),
          (this._ngZone = i),
          (this._keydownListener = (r) => {
            let a = this._attachedOverlays;
            for (let s = a.length - 1; s > -1; s--)
              if (a[s]._keydownEvents.observers.length > 0) {
                let c = a[s]._keydownEvents;
                this._ngZone ? this._ngZone.run(() => c.next(r)) : c.next(r);
                break;
              }
          });
      }
      add(e) {
        super.add(e),
          this._isAttached ||
            (this._ngZone
              ? this._ngZone.runOutsideAngular(() =>
                  this._document.body.addEventListener(
                    "keydown",
                    this._keydownListener
                  )
                )
              : this._document.body.addEventListener(
                  "keydown",
                  this._keydownListener
                ),
            (this._isAttached = !0));
      }
      detach() {
        this._isAttached &&
          (this._document.body.removeEventListener(
            "keydown",
            this._keydownListener
          ),
          (this._isAttached = !1));
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(h(R), h(D, 8));
    }),
      (t.ɵprov = x({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })(),
  c0 = (() => {
    let t = class t extends ju {
      constructor(e, i, r) {
        super(e),
          (this._platform = i),
          (this._ngZone = r),
          (this._cursorStyleIsSet = !1),
          (this._pointerDownListener = (a) => {
            this._pointerDownEventTarget = oe(a);
          }),
          (this._clickListener = (a) => {
            let s = oe(a),
              c =
                a.type === "click" && this._pointerDownEventTarget
                  ? this._pointerDownEventTarget
                  : s;
            this._pointerDownEventTarget = null;
            let l = this._attachedOverlays.slice();
            for (let m = l.length - 1; m > -1; m--) {
              let f = l[m];
              if (
                f._outsidePointerEvents.observers.length < 1 ||
                !f.hasAttached()
              )
                continue;
              if (f.overlayElement.contains(s) || f.overlayElement.contains(c))
                break;
              let g = f._outsidePointerEvents;
              this._ngZone ? this._ngZone.run(() => g.next(a)) : g.next(a);
            }
          });
      }
      add(e) {
        if ((super.add(e), !this._isAttached)) {
          let i = this._document.body;
          this._ngZone
            ? this._ngZone.runOutsideAngular(() => this._addEventListeners(i))
            : this._addEventListeners(i),
            this._platform.IOS &&
              !this._cursorStyleIsSet &&
              ((this._cursorOriginalValue = i.style.cursor),
              (i.style.cursor = "pointer"),
              (this._cursorStyleIsSet = !0)),
            (this._isAttached = !0);
        }
      }
      detach() {
        if (this._isAttached) {
          let e = this._document.body;
          e.removeEventListener("pointerdown", this._pointerDownListener, !0),
            e.removeEventListener("click", this._clickListener, !0),
            e.removeEventListener("auxclick", this._clickListener, !0),
            e.removeEventListener("contextmenu", this._clickListener, !0),
            this._platform.IOS &&
              this._cursorStyleIsSet &&
              ((e.style.cursor = this._cursorOriginalValue),
              (this._cursorStyleIsSet = !1)),
            (this._isAttached = !1);
        }
      }
      _addEventListeners(e) {
        e.addEventListener("pointerdown", this._pointerDownListener, !0),
          e.addEventListener("click", this._clickListener, !0),
          e.addEventListener("auxclick", this._clickListener, !0),
          e.addEventListener("contextmenu", this._clickListener, !0);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(h(R), h(G), h(D, 8));
    }),
      (t.ɵprov = x({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })(),
  Tn = (() => {
    let t = class t {
      constructor(e, i) {
        (this._platform = i), (this._document = e);
      }
      ngOnDestroy() {
        this._containerElement?.remove();
      }
      getContainerElement() {
        return (
          this._containerElement || this._createContainer(),
          this._containerElement
        );
      }
      _createContainer() {
        let e = "cdk-overlay-container";
        if (this._platform.isBrowser || No()) {
          let r = this._document.querySelectorAll(
            `.${e}[platform="server"], .${e}[platform="test"]`
          );
          for (let a = 0; a < r.length; a++) r[a].remove();
        }
        let i = this._document.createElement("div");
        i.classList.add(e),
          No()
            ? i.setAttribute("platform", "test")
            : this._platform.isBrowser || i.setAttribute("platform", "server"),
          this._document.body.appendChild(i),
          (this._containerElement = i);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(h(R), h(G));
    }),
      (t.ɵprov = x({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })(),
  Be = class {
    constructor(t, o, e, i, r, a, s, c, l, m = !1) {
      (this._portalOutlet = t),
        (this._host = o),
        (this._pane = e),
        (this._config = i),
        (this._ngZone = r),
        (this._keyboardDispatcher = a),
        (this._document = s),
        (this._location = c),
        (this._outsideClickDispatcher = l),
        (this._animationsDisabled = m),
        (this._backdropElement = null),
        (this._backdropClick = new E()),
        (this._attachments = new E()),
        (this._detachments = new E()),
        (this._locationChanges = Lt.EMPTY),
        (this._backdropClickHandler = (f) => this._backdropClick.next(f)),
        (this._backdropTransitionendHandler = (f) => {
          this._disposeBackdrop(f.target);
        }),
        (this._keydownEvents = new E()),
        (this._outsidePointerEvents = new E()),
        i.scrollStrategy &&
          ((this._scrollStrategy = i.scrollStrategy),
          this._scrollStrategy.attach(this)),
        (this._positionStrategy = i.positionStrategy);
    }
    get overlayElement() {
      return this._pane;
    }
    get backdropElement() {
      return this._backdropElement;
    }
    get hostElement() {
      return this._host;
    }
    attach(t) {
      !this._host.parentElement &&
        this._previousHostParent &&
        this._previousHostParent.appendChild(this._host);
      let o = this._portalOutlet.attach(t);
      return (
        this._positionStrategy && this._positionStrategy.attach(this),
        this._updateStackingOrder(),
        this._updateElementSize(),
        this._updateElementDirection(),
        this._scrollStrategy && this._scrollStrategy.enable(),
        this._ngZone.onStable.pipe(_t(1)).subscribe(() => {
          this.hasAttached() && this.updatePosition();
        }),
        this._togglePointerEvents(!0),
        this._config.hasBackdrop && this._attachBackdrop(),
        this._config.panelClass &&
          this._toggleClasses(this._pane, this._config.panelClass, !0),
        this._attachments.next(),
        this._keyboardDispatcher.add(this),
        this._config.disposeOnNavigation &&
          (this._locationChanges = this._location.subscribe(() =>
            this.dispose()
          )),
        this._outsideClickDispatcher.add(this),
        typeof o?.onDestroy == "function" &&
          o.onDestroy(() => {
            this.hasAttached() &&
              this._ngZone.runOutsideAngular(() =>
                Promise.resolve().then(() => this.detach())
              );
          }),
        o
      );
    }
    detach() {
      if (!this.hasAttached()) return;
      this.detachBackdrop(),
        this._togglePointerEvents(!1),
        this._positionStrategy &&
          this._positionStrategy.detach &&
          this._positionStrategy.detach(),
        this._scrollStrategy && this._scrollStrategy.disable();
      let t = this._portalOutlet.detach();
      return (
        this._detachments.next(),
        this._keyboardDispatcher.remove(this),
        this._detachContentWhenStable(),
        this._locationChanges.unsubscribe(),
        this._outsideClickDispatcher.remove(this),
        t
      );
    }
    dispose() {
      let t = this.hasAttached();
      this._positionStrategy && this._positionStrategy.dispose(),
        this._disposeScrollStrategy(),
        this._disposeBackdrop(this._backdropElement),
        this._locationChanges.unsubscribe(),
        this._keyboardDispatcher.remove(this),
        this._portalOutlet.dispose(),
        this._attachments.complete(),
        this._backdropClick.complete(),
        this._keydownEvents.complete(),
        this._outsidePointerEvents.complete(),
        this._outsideClickDispatcher.remove(this),
        this._host?.remove(),
        (this._previousHostParent = this._pane = this._host = null),
        t && this._detachments.next(),
        this._detachments.complete();
    }
    hasAttached() {
      return this._portalOutlet.hasAttached();
    }
    backdropClick() {
      return this._backdropClick;
    }
    attachments() {
      return this._attachments;
    }
    detachments() {
      return this._detachments;
    }
    keydownEvents() {
      return this._keydownEvents;
    }
    outsidePointerEvents() {
      return this._outsidePointerEvents;
    }
    getConfig() {
      return this._config;
    }
    updatePosition() {
      this._positionStrategy && this._positionStrategy.apply();
    }
    updatePositionStrategy(t) {
      t !== this._positionStrategy &&
        (this._positionStrategy && this._positionStrategy.dispose(),
        (this._positionStrategy = t),
        this.hasAttached() && (t.attach(this), this.updatePosition()));
    }
    updateSize(t) {
      (this._config = b(b({}, this._config), t)), this._updateElementSize();
    }
    setDirection(t) {
      (this._config = nt(b({}, this._config), { direction: t })),
        this._updateElementDirection();
    }
    addPanelClass(t) {
      this._pane && this._toggleClasses(this._pane, t, !0);
    }
    removePanelClass(t) {
      this._pane && this._toggleClasses(this._pane, t, !1);
    }
    getDirection() {
      let t = this._config.direction;
      return t ? (typeof t == "string" ? t : t.value) : "ltr";
    }
    updateScrollStrategy(t) {
      t !== this._scrollStrategy &&
        (this._disposeScrollStrategy(),
        (this._scrollStrategy = t),
        this.hasAttached() && (t.attach(this), t.enable()));
    }
    _updateElementDirection() {
      this._host.setAttribute("dir", this.getDirection());
    }
    _updateElementSize() {
      if (!this._pane) return;
      let t = this._pane.style;
      (t.width = wt(this._config.width)),
        (t.height = wt(this._config.height)),
        (t.minWidth = wt(this._config.minWidth)),
        (t.minHeight = wt(this._config.minHeight)),
        (t.maxWidth = wt(this._config.maxWidth)),
        (t.maxHeight = wt(this._config.maxHeight));
    }
    _togglePointerEvents(t) {
      this._pane.style.pointerEvents = t ? "" : "none";
    }
    _attachBackdrop() {
      let t = "cdk-overlay-backdrop-showing";
      (this._backdropElement = this._document.createElement("div")),
        this._backdropElement.classList.add("cdk-overlay-backdrop"),
        this._animationsDisabled &&
          this._backdropElement.classList.add(
            "cdk-overlay-backdrop-noop-animation"
          ),
        this._config.backdropClass &&
          this._toggleClasses(
            this._backdropElement,
            this._config.backdropClass,
            !0
          ),
        this._host.parentElement.insertBefore(
          this._backdropElement,
          this._host
        ),
        this._backdropElement.addEventListener(
          "click",
          this._backdropClickHandler
        ),
        !this._animationsDisabled && typeof requestAnimationFrame < "u"
          ? this._ngZone.runOutsideAngular(() => {
              requestAnimationFrame(() => {
                this._backdropElement && this._backdropElement.classList.add(t);
              });
            })
          : this._backdropElement.classList.add(t);
    }
    _updateStackingOrder() {
      this._host.nextSibling && this._host.parentNode.appendChild(this._host);
    }
    detachBackdrop() {
      let t = this._backdropElement;
      if (t) {
        if (this._animationsDisabled) {
          this._disposeBackdrop(t);
          return;
        }
        t.classList.remove("cdk-overlay-backdrop-showing"),
          this._ngZone.runOutsideAngular(() => {
            t.addEventListener(
              "transitionend",
              this._backdropTransitionendHandler
            );
          }),
          (t.style.pointerEvents = "none"),
          (this._backdropTimeout = this._ngZone.runOutsideAngular(() =>
            setTimeout(() => {
              this._disposeBackdrop(t);
            }, 500)
          ));
      }
    }
    _toggleClasses(t, o, e) {
      let i = xn(o || []).filter((r) => !!r);
      i.length && (e ? t.classList.add(...i) : t.classList.remove(...i));
    }
    _detachContentWhenStable() {
      this._ngZone.runOutsideAngular(() => {
        let t = this._ngZone.onStable
          .pipe(tt(ge(this._attachments, this._detachments)))
          .subscribe(() => {
            (!this._pane || !this._host || this._pane.children.length === 0) &&
              (this._pane &&
                this._config.panelClass &&
                this._toggleClasses(this._pane, this._config.panelClass, !1),
              this._host &&
                this._host.parentElement &&
                ((this._previousHostParent = this._host.parentElement),
                this._host.remove()),
              t.unsubscribe());
          });
      });
    }
    _disposeScrollStrategy() {
      let t = this._scrollStrategy;
      t && (t.disable(), t.detach && t.detach());
    }
    _disposeBackdrop(t) {
      t &&
        (t.removeEventListener("click", this._backdropClickHandler),
        t.removeEventListener(
          "transitionend",
          this._backdropTransitionendHandler
        ),
        t.remove(),
        this._backdropElement === t && (this._backdropElement = null)),
        this._backdropTimeout &&
          (clearTimeout(this._backdropTimeout),
          (this._backdropTimeout = void 0));
    }
  },
  Fu = "cdk-overlay-connected-position-bounding-box",
  l0 = /([A-Za-z%]+)$/,
  Cl = class {
    get positions() {
      return this._preferredPositions;
    }
    constructor(t, o, e, i, r) {
      (this._viewportRuler = o),
        (this._document = e),
        (this._platform = i),
        (this._overlayContainer = r),
        (this._lastBoundingBoxSize = { width: 0, height: 0 }),
        (this._isPushed = !1),
        (this._canPush = !0),
        (this._growAfterOpen = !1),
        (this._hasFlexibleDimensions = !0),
        (this._positionLocked = !1),
        (this._viewportMargin = 0),
        (this._scrollables = []),
        (this._preferredPositions = []),
        (this._positionChanges = new E()),
        (this._resizeSubscription = Lt.EMPTY),
        (this._offsetX = 0),
        (this._offsetY = 0),
        (this._appliedPanelClasses = []),
        (this.positionChanges = this._positionChanges),
        this.setOrigin(t);
    }
    attach(t) {
      this._overlayRef && this._overlayRef,
        this._validatePositions(),
        t.hostElement.classList.add(Fu),
        (this._overlayRef = t),
        (this._boundingBox = t.hostElement),
        (this._pane = t.overlayElement),
        (this._isDisposed = !1),
        (this._isInitialRender = !0),
        (this._lastPosition = null),
        this._resizeSubscription.unsubscribe(),
        (this._resizeSubscription = this._viewportRuler
          .change()
          .subscribe(() => {
            (this._isInitialRender = !0), this.apply();
          }));
    }
    apply() {
      if (this._isDisposed || !this._platform.isBrowser) return;
      if (
        !this._isInitialRender &&
        this._positionLocked &&
        this._lastPosition
      ) {
        this.reapplyLastPosition();
        return;
      }
      this._clearPanelClasses(),
        this._resetOverlayElementStyles(),
        this._resetBoundingBoxStyles(),
        (this._viewportRect = this._getNarrowedViewportRect()),
        (this._originRect = this._getOriginRect()),
        (this._overlayRect = this._pane.getBoundingClientRect()),
        (this._containerRect = this._overlayContainer
          .getContainerElement()
          .getBoundingClientRect());
      let t = this._originRect,
        o = this._overlayRect,
        e = this._viewportRect,
        i = this._containerRect,
        r = [],
        a;
      for (let s of this._preferredPositions) {
        let c = this._getOriginPoint(t, i, s),
          l = this._getOverlayPoint(c, o, s),
          m = this._getOverlayFit(l, o, e, s);
        if (m.isCompletelyWithinViewport) {
          (this._isPushed = !1), this._applyPosition(s, c);
          return;
        }
        if (this._canFitWithFlexibleDimensions(m, l, e)) {
          r.push({
            position: s,
            origin: c,
            overlayRect: o,
            boundingBoxRect: this._calculateBoundingBoxRect(c, s),
          });
          continue;
        }
        (!a || a.overlayFit.visibleArea < m.visibleArea) &&
          (a = {
            overlayFit: m,
            overlayPoint: l,
            originPoint: c,
            position: s,
            overlayRect: o,
          });
      }
      if (r.length) {
        let s = null,
          c = -1;
        for (let l of r) {
          let m =
            l.boundingBoxRect.width *
            l.boundingBoxRect.height *
            (l.position.weight || 1);
          m > c && ((c = m), (s = l));
        }
        (this._isPushed = !1), this._applyPosition(s.position, s.origin);
        return;
      }
      if (this._canPush) {
        (this._isPushed = !0), this._applyPosition(a.position, a.originPoint);
        return;
      }
      this._applyPosition(a.position, a.originPoint);
    }
    detach() {
      this._clearPanelClasses(),
        (this._lastPosition = null),
        (this._previousPushAmount = null),
        this._resizeSubscription.unsubscribe();
    }
    dispose() {
      this._isDisposed ||
        (this._boundingBox &&
          qi(this._boundingBox.style, {
            top: "",
            left: "",
            right: "",
            bottom: "",
            height: "",
            width: "",
            alignItems: "",
            justifyContent: "",
          }),
        this._pane && this._resetOverlayElementStyles(),
        this._overlayRef && this._overlayRef.hostElement.classList.remove(Fu),
        this.detach(),
        this._positionChanges.complete(),
        (this._overlayRef = this._boundingBox = null),
        (this._isDisposed = !0));
    }
    reapplyLastPosition() {
      if (this._isDisposed || !this._platform.isBrowser) return;
      let t = this._lastPosition;
      if (t) {
        (this._originRect = this._getOriginRect()),
          (this._overlayRect = this._pane.getBoundingClientRect()),
          (this._viewportRect = this._getNarrowedViewportRect()),
          (this._containerRect = this._overlayContainer
            .getContainerElement()
            .getBoundingClientRect());
        let o = this._getOriginPoint(this._originRect, this._containerRect, t);
        this._applyPosition(t, o);
      } else this.apply();
    }
    withScrollableContainers(t) {
      return (this._scrollables = t), this;
    }
    withPositions(t) {
      return (
        (this._preferredPositions = t),
        t.indexOf(this._lastPosition) === -1 && (this._lastPosition = null),
        this._validatePositions(),
        this
      );
    }
    withViewportMargin(t) {
      return (this._viewportMargin = t), this;
    }
    withFlexibleDimensions(t = !0) {
      return (this._hasFlexibleDimensions = t), this;
    }
    withGrowAfterOpen(t = !0) {
      return (this._growAfterOpen = t), this;
    }
    withPush(t = !0) {
      return (this._canPush = t), this;
    }
    withLockedPosition(t = !0) {
      return (this._positionLocked = t), this;
    }
    setOrigin(t) {
      return (this._origin = t), this;
    }
    withDefaultOffsetX(t) {
      return (this._offsetX = t), this;
    }
    withDefaultOffsetY(t) {
      return (this._offsetY = t), this;
    }
    withTransformOriginOn(t) {
      return (this._transformOriginSelector = t), this;
    }
    _getOriginPoint(t, o, e) {
      let i;
      if (e.originX == "center") i = t.left + t.width / 2;
      else {
        let a = this._isRtl() ? t.right : t.left,
          s = this._isRtl() ? t.left : t.right;
        i = e.originX == "start" ? a : s;
      }
      o.left < 0 && (i -= o.left);
      let r;
      return (
        e.originY == "center"
          ? (r = t.top + t.height / 2)
          : (r = e.originY == "top" ? t.top : t.bottom),
        o.top < 0 && (r -= o.top),
        { x: i, y: r }
      );
    }
    _getOverlayPoint(t, o, e) {
      let i;
      e.overlayX == "center"
        ? (i = -o.width / 2)
        : e.overlayX === "start"
        ? (i = this._isRtl() ? -o.width : 0)
        : (i = this._isRtl() ? 0 : -o.width);
      let r;
      return (
        e.overlayY == "center"
          ? (r = -o.height / 2)
          : (r = e.overlayY == "top" ? 0 : -o.height),
        { x: t.x + i, y: t.y + r }
      );
    }
    _getOverlayFit(t, o, e, i) {
      let r = Lu(o),
        { x: a, y: s } = t,
        c = this._getOffset(i, "x"),
        l = this._getOffset(i, "y");
      c && (a += c), l && (s += l);
      let m = 0 - a,
        f = a + r.width - e.width,
        g = 0 - s,
        k = s + r.height - e.height,
        S = this._subtractOverflows(r.width, m, f),
        $ = this._subtractOverflows(r.height, g, k),
        N = S * $;
      return {
        visibleArea: N,
        isCompletelyWithinViewport: r.width * r.height === N,
        fitsInViewportVertically: $ === r.height,
        fitsInViewportHorizontally: S == r.width,
      };
    }
    _canFitWithFlexibleDimensions(t, o, e) {
      if (this._hasFlexibleDimensions) {
        let i = e.bottom - o.y,
          r = e.right - o.x,
          a = Pu(this._overlayRef.getConfig().minHeight),
          s = Pu(this._overlayRef.getConfig().minWidth),
          c = t.fitsInViewportVertically || (a != null && a <= i),
          l = t.fitsInViewportHorizontally || (s != null && s <= r);
        return c && l;
      }
      return !1;
    }
    _pushOverlayOnScreen(t, o, e) {
      if (this._previousPushAmount && this._positionLocked)
        return {
          x: t.x + this._previousPushAmount.x,
          y: t.y + this._previousPushAmount.y,
        };
      let i = Lu(o),
        r = this._viewportRect,
        a = Math.max(t.x + i.width - r.width, 0),
        s = Math.max(t.y + i.height - r.height, 0),
        c = Math.max(r.top - e.top - t.y, 0),
        l = Math.max(r.left - e.left - t.x, 0),
        m = 0,
        f = 0;
      return (
        i.width <= r.width
          ? (m = l || -a)
          : (m = t.x < this._viewportMargin ? r.left - e.left - t.x : 0),
        i.height <= r.height
          ? (f = c || -s)
          : (f = t.y < this._viewportMargin ? r.top - e.top - t.y : 0),
        (this._previousPushAmount = { x: m, y: f }),
        { x: t.x + m, y: t.y + f }
      );
    }
    _applyPosition(t, o) {
      if (
        (this._setTransformOrigin(t),
        this._setOverlayElementStyles(o, t),
        this._setBoundingBoxStyles(o, t),
        t.panelClass && this._addPanelClasses(t.panelClass),
        this._positionChanges.observers.length)
      ) {
        let e = this._getScrollVisibility();
        if (
          t !== this._lastPosition ||
          !this._lastScrollVisibility ||
          !d0(this._lastScrollVisibility, e)
        ) {
          let i = new kl(t, e);
          this._positionChanges.next(i);
        }
        this._lastScrollVisibility = e;
      }
      (this._lastPosition = t), (this._isInitialRender = !1);
    }
    _setTransformOrigin(t) {
      if (!this._transformOriginSelector) return;
      let o = this._boundingBox.querySelectorAll(this._transformOriginSelector),
        e,
        i = t.overlayY;
      t.overlayX === "center"
        ? (e = "center")
        : this._isRtl()
        ? (e = t.overlayX === "start" ? "right" : "left")
        : (e = t.overlayX === "start" ? "left" : "right");
      for (let r = 0; r < o.length; r++)
        o[r].style.transformOrigin = `${e} ${i}`;
    }
    _calculateBoundingBoxRect(t, o) {
      let e = this._viewportRect,
        i = this._isRtl(),
        r,
        a,
        s;
      if (o.overlayY === "top")
        (a = t.y), (r = e.height - a + this._viewportMargin);
      else if (o.overlayY === "bottom")
        (s = e.height - t.y + this._viewportMargin * 2),
          (r = e.height - s + this._viewportMargin);
      else {
        let k = Math.min(e.bottom - t.y + e.top, t.y),
          S = this._lastBoundingBoxSize.height;
        (r = k * 2),
          (a = t.y - k),
          r > S &&
            !this._isInitialRender &&
            !this._growAfterOpen &&
            (a = t.y - S / 2);
      }
      let c = (o.overlayX === "start" && !i) || (o.overlayX === "end" && i),
        l = (o.overlayX === "end" && !i) || (o.overlayX === "start" && i),
        m,
        f,
        g;
      if (l)
        (g = e.width - t.x + this._viewportMargin * 2),
          (m = t.x - this._viewportMargin);
      else if (c) (f = t.x), (m = e.right - t.x);
      else {
        let k = Math.min(e.right - t.x + e.left, t.x),
          S = this._lastBoundingBoxSize.width;
        (m = k * 2),
          (f = t.x - k),
          m > S &&
            !this._isInitialRender &&
            !this._growAfterOpen &&
            (f = t.x - S / 2);
      }
      return { top: a, left: f, bottom: s, right: g, width: m, height: r };
    }
    _setBoundingBoxStyles(t, o) {
      let e = this._calculateBoundingBoxRect(t, o);
      !this._isInitialRender &&
        !this._growAfterOpen &&
        ((e.height = Math.min(e.height, this._lastBoundingBoxSize.height)),
        (e.width = Math.min(e.width, this._lastBoundingBoxSize.width)));
      let i = {};
      if (this._hasExactPosition())
        (i.top = i.left = "0"),
          (i.bottom = i.right = i.maxHeight = i.maxWidth = ""),
          (i.width = i.height = "100%");
      else {
        let r = this._overlayRef.getConfig().maxHeight,
          a = this._overlayRef.getConfig().maxWidth;
        (i.height = wt(e.height)),
          (i.top = wt(e.top)),
          (i.bottom = wt(e.bottom)),
          (i.width = wt(e.width)),
          (i.left = wt(e.left)),
          (i.right = wt(e.right)),
          o.overlayX === "center"
            ? (i.alignItems = "center")
            : (i.alignItems = o.overlayX === "end" ? "flex-end" : "flex-start"),
          o.overlayY === "center"
            ? (i.justifyContent = "center")
            : (i.justifyContent =
                o.overlayY === "bottom" ? "flex-end" : "flex-start"),
          r && (i.maxHeight = wt(r)),
          a && (i.maxWidth = wt(a));
      }
      (this._lastBoundingBoxSize = e), qi(this._boundingBox.style, i);
    }
    _resetBoundingBoxStyles() {
      qi(this._boundingBox.style, {
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        height: "",
        width: "",
        alignItems: "",
        justifyContent: "",
      });
    }
    _resetOverlayElementStyles() {
      qi(this._pane.style, {
        top: "",
        left: "",
        bottom: "",
        right: "",
        position: "",
        transform: "",
      });
    }
    _setOverlayElementStyles(t, o) {
      let e = {},
        i = this._hasExactPosition(),
        r = this._hasFlexibleDimensions,
        a = this._overlayRef.getConfig();
      if (i) {
        let m = this._viewportRuler.getViewportScrollPosition();
        qi(e, this._getExactOverlayY(o, t, m)),
          qi(e, this._getExactOverlayX(o, t, m));
      } else e.position = "static";
      let s = "",
        c = this._getOffset(o, "x"),
        l = this._getOffset(o, "y");
      c && (s += `translateX(${c}px) `),
        l && (s += `translateY(${l}px)`),
        (e.transform = s.trim()),
        a.maxHeight &&
          (i ? (e.maxHeight = wt(a.maxHeight)) : r && (e.maxHeight = "")),
        a.maxWidth &&
          (i ? (e.maxWidth = wt(a.maxWidth)) : r && (e.maxWidth = "")),
        qi(this._pane.style, e);
    }
    _getExactOverlayY(t, o, e) {
      let i = { top: "", bottom: "" },
        r = this._getOverlayPoint(o, this._overlayRect, t);
      if (
        (this._isPushed &&
          (r = this._pushOverlayOnScreen(r, this._overlayRect, e)),
        t.overlayY === "bottom")
      ) {
        let a = this._document.documentElement.clientHeight;
        i.bottom = `${a - (r.y + this._overlayRect.height)}px`;
      } else i.top = wt(r.y);
      return i;
    }
    _getExactOverlayX(t, o, e) {
      let i = { left: "", right: "" },
        r = this._getOverlayPoint(o, this._overlayRect, t);
      this._isPushed &&
        (r = this._pushOverlayOnScreen(r, this._overlayRect, e));
      let a;
      if (
        (this._isRtl()
          ? (a = t.overlayX === "end" ? "left" : "right")
          : (a = t.overlayX === "end" ? "right" : "left"),
        a === "right")
      ) {
        let s = this._document.documentElement.clientWidth;
        i.right = `${s - (r.x + this._overlayRect.width)}px`;
      } else i.left = wt(r.x);
      return i;
    }
    _getScrollVisibility() {
      let t = this._getOriginRect(),
        o = this._pane.getBoundingClientRect(),
        e = this._scrollables.map((i) =>
          i.getElementRef().nativeElement.getBoundingClientRect()
        );
      return {
        isOriginClipped: Ru(t, e),
        isOriginOutsideView: yl(t, e),
        isOverlayClipped: Ru(o, e),
        isOverlayOutsideView: yl(o, e),
      };
    }
    _subtractOverflows(t, ...o) {
      return o.reduce((e, i) => e - Math.max(i, 0), t);
    }
    _getNarrowedViewportRect() {
      let t = this._document.documentElement.clientWidth,
        o = this._document.documentElement.clientHeight,
        e = this._viewportRuler.getViewportScrollPosition();
      return {
        top: e.top + this._viewportMargin,
        left: e.left + this._viewportMargin,
        right: e.left + t - this._viewportMargin,
        bottom: e.top + o - this._viewportMargin,
        width: t - 2 * this._viewportMargin,
        height: o - 2 * this._viewportMargin,
      };
    }
    _isRtl() {
      return this._overlayRef.getDirection() === "rtl";
    }
    _hasExactPosition() {
      return !this._hasFlexibleDimensions || this._isPushed;
    }
    _getOffset(t, o) {
      return o === "x"
        ? t.offsetX == null
          ? this._offsetX
          : t.offsetX
        : t.offsetY == null
        ? this._offsetY
        : t.offsetY;
    }
    _validatePositions() {}
    _addPanelClasses(t) {
      this._pane &&
        xn(t).forEach((o) => {
          o !== "" &&
            this._appliedPanelClasses.indexOf(o) === -1 &&
            (this._appliedPanelClasses.push(o), this._pane.classList.add(o));
        });
    }
    _clearPanelClasses() {
      this._pane &&
        (this._appliedPanelClasses.forEach((t) => {
          this._pane.classList.remove(t);
        }),
        (this._appliedPanelClasses = []));
    }
    _getOriginRect() {
      let t = this._origin;
      if (t instanceof L) return t.nativeElement.getBoundingClientRect();
      if (t instanceof Element) return t.getBoundingClientRect();
      let o = t.width || 0,
        e = t.height || 0;
      return {
        top: t.y,
        bottom: t.y + e,
        left: t.x,
        right: t.x + o,
        height: e,
        width: o,
      };
    }
  };
function qi(n, t) {
  for (let o in t) t.hasOwnProperty(o) && (n[o] = t[o]);
  return n;
}
function Pu(n) {
  if (typeof n != "number" && n != null) {
    let [t, o] = n.split(l0);
    return !o || o === "px" ? parseFloat(t) : null;
  }
  return n || null;
}
function Lu(n) {
  return {
    top: Math.floor(n.top),
    right: Math.floor(n.right),
    bottom: Math.floor(n.bottom),
    left: Math.floor(n.left),
    width: Math.floor(n.width),
    height: Math.floor(n.height),
  };
}
function d0(n, t) {
  return n === t
    ? !0
    : n.isOriginClipped === t.isOriginClipped &&
        n.isOriginOutsideView === t.isOriginOutsideView &&
        n.isOverlayClipped === t.isOverlayClipped &&
        n.isOverlayOutsideView === t.isOverlayOutsideView;
}
var Nu = "cdk-global-overlay-wrapper",
  El = class {
    constructor() {
      (this._cssPosition = "static"),
        (this._topOffset = ""),
        (this._bottomOffset = ""),
        (this._alignItems = ""),
        (this._xPosition = ""),
        (this._xOffset = ""),
        (this._width = ""),
        (this._height = ""),
        (this._isDisposed = !1);
    }
    attach(t) {
      let o = t.getConfig();
      (this._overlayRef = t),
        this._width && !o.width && t.updateSize({ width: this._width }),
        this._height && !o.height && t.updateSize({ height: this._height }),
        t.hostElement.classList.add(Nu),
        (this._isDisposed = !1);
    }
    top(t = "") {
      return (
        (this._bottomOffset = ""),
        (this._topOffset = t),
        (this._alignItems = "flex-start"),
        this
      );
    }
    left(t = "") {
      return (this._xOffset = t), (this._xPosition = "left"), this;
    }
    bottom(t = "") {
      return (
        (this._topOffset = ""),
        (this._bottomOffset = t),
        (this._alignItems = "flex-end"),
        this
      );
    }
    right(t = "") {
      return (this._xOffset = t), (this._xPosition = "right"), this;
    }
    start(t = "") {
      return (this._xOffset = t), (this._xPosition = "start"), this;
    }
    end(t = "") {
      return (this._xOffset = t), (this._xPosition = "end"), this;
    }
    width(t = "") {
      return (
        this._overlayRef
          ? this._overlayRef.updateSize({ width: t })
          : (this._width = t),
        this
      );
    }
    height(t = "") {
      return (
        this._overlayRef
          ? this._overlayRef.updateSize({ height: t })
          : (this._height = t),
        this
      );
    }
    centerHorizontally(t = "") {
      return this.left(t), (this._xPosition = "center"), this;
    }
    centerVertically(t = "") {
      return this.top(t), (this._alignItems = "center"), this;
    }
    apply() {
      if (!this._overlayRef || !this._overlayRef.hasAttached()) return;
      let t = this._overlayRef.overlayElement.style,
        o = this._overlayRef.hostElement.style,
        e = this._overlayRef.getConfig(),
        { width: i, height: r, maxWidth: a, maxHeight: s } = e,
        c =
          (i === "100%" || i === "100vw") &&
          (!a || a === "100%" || a === "100vw"),
        l =
          (r === "100%" || r === "100vh") &&
          (!s || s === "100%" || s === "100vh"),
        m = this._xPosition,
        f = this._xOffset,
        g = this._overlayRef.getConfig().direction === "rtl",
        k = "",
        S = "",
        $ = "";
      c
        ? ($ = "flex-start")
        : m === "center"
        ? (($ = "center"), g ? (S = f) : (k = f))
        : g
        ? m === "left" || m === "end"
          ? (($ = "flex-end"), (k = f))
          : (m === "right" || m === "start") && (($ = "flex-start"), (S = f))
        : m === "left" || m === "start"
        ? (($ = "flex-start"), (k = f))
        : (m === "right" || m === "end") && (($ = "flex-end"), (S = f)),
        (t.position = this._cssPosition),
        (t.marginLeft = c ? "0" : k),
        (t.marginTop = l ? "0" : this._topOffset),
        (t.marginBottom = this._bottomOffset),
        (t.marginRight = c ? "0" : S),
        (o.justifyContent = $),
        (o.alignItems = l ? "flex-start" : this._alignItems);
    }
    dispose() {
      if (this._isDisposed || !this._overlayRef) return;
      let t = this._overlayRef.overlayElement.style,
        o = this._overlayRef.hostElement,
        e = o.style;
      o.classList.remove(Nu),
        (e.justifyContent =
          e.alignItems =
          t.marginTop =
          t.marginBottom =
          t.marginLeft =
          t.marginRight =
          t.position =
            ""),
        (this._overlayRef = null),
        (this._isDisposed = !0);
    }
  },
  m0 = (() => {
    let t = class t {
      constructor(e, i, r, a) {
        (this._viewportRuler = e),
          (this._document = i),
          (this._platform = r),
          (this._overlayContainer = a);
      }
      global() {
        return new El();
      }
      flexibleConnectedTo(e) {
        return new Cl(
          e,
          this._viewportRuler,
          this._document,
          this._platform,
          this._overlayContainer
        );
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(h(Mn), h(R), h(G), h(Tn));
    }),
      (t.ɵprov = x({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })(),
  h0 = 0,
  xt = (() => {
    let t = class t {
      constructor(e, i, r, a, s, c, l, m, f, g, k, S) {
        (this.scrollStrategies = e),
          (this._overlayContainer = i),
          (this._componentFactoryResolver = r),
          (this._positionBuilder = a),
          (this._keyboardDispatcher = s),
          (this._injector = c),
          (this._ngZone = l),
          (this._document = m),
          (this._directionality = f),
          (this._location = g),
          (this._outsideClickDispatcher = k),
          (this._animationsModuleType = S);
      }
      create(e) {
        let i = this._createHostElement(),
          r = this._createPaneElement(i),
          a = this._createPortalOutlet(r),
          s = new hi(e);
        return (
          (s.direction = s.direction || this._directionality.value),
          new Be(
            a,
            i,
            r,
            s,
            this._ngZone,
            this._keyboardDispatcher,
            this._document,
            this._location,
            this._outsideClickDispatcher,
            this._animationsModuleType === "NoopAnimations"
          )
        );
      }
      position() {
        return this._positionBuilder;
      }
      _createPaneElement(e) {
        let i = this._document.createElement("div");
        return (
          (i.id = `cdk-overlay-${h0++}`),
          i.classList.add("cdk-overlay-pane"),
          e.appendChild(i),
          i
        );
      }
      _createHostElement() {
        let e = this._document.createElement("div");
        return this._overlayContainer.getContainerElement().appendChild(e), e;
      }
      _createPortalOutlet(e) {
        return (
          this._appRef || (this._appRef = this._injector.get(tn)),
          new Ua(
            e,
            this._componentFactoryResolver,
            this._appRef,
            this._injector,
            this._document
          )
        );
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(
        h(a0),
        h(Tn),
        h(yr),
        h(m0),
        h(s0),
        h(kt),
        h(D),
        h(R),
        h(se),
        h(Re),
        h(c0),
        h(At, 8)
      );
    }),
      (t.ɵprov = x({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })(),
  u0 = [
    { originX: "start", originY: "bottom", overlayX: "start", overlayY: "top" },
    { originX: "start", originY: "top", overlayX: "start", overlayY: "bottom" },
    { originX: "end", originY: "top", overlayX: "end", overlayY: "bottom" },
    { originX: "end", originY: "bottom", overlayX: "end", overlayY: "top" },
  ],
  zu = new w("cdk-connected-overlay-scroll-strategy", {
    providedIn: "root",
    factory: () => {
      let n = _(xt);
      return () => n.scrollStrategies.reposition();
    },
  }),
  Jo = (() => {
    let t = class t {
      constructor(e) {
        this.elementRef = e;
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(L));
    }),
      (t.ɵdir = F({
        type: t,
        selectors: [
          ["", "cdk-overlay-origin", ""],
          ["", "overlay-origin", ""],
          ["", "cdkOverlayOrigin", ""],
        ],
        exportAs: ["cdkOverlayOrigin"],
        standalone: !0,
      }));
    let n = t;
    return n;
  })(),
  Sl = (() => {
    let t = class t {
      get offsetX() {
        return this._offsetX;
      }
      set offsetX(e) {
        (this._offsetX = e),
          this._position && this._updatePositionStrategy(this._position);
      }
      get offsetY() {
        return this._offsetY;
      }
      set offsetY(e) {
        (this._offsetY = e),
          this._position && this._updatePositionStrategy(this._position);
      }
      get disposeOnNavigation() {
        return this._disposeOnNavigation;
      }
      set disposeOnNavigation(e) {
        this._disposeOnNavigation = e;
      }
      constructor(e, i, r, a, s) {
        (this._overlay = e),
          (this._dir = s),
          (this._backdropSubscription = Lt.EMPTY),
          (this._attachSubscription = Lt.EMPTY),
          (this._detachSubscription = Lt.EMPTY),
          (this._positionSubscription = Lt.EMPTY),
          (this._disposeOnNavigation = !1),
          (this._ngZone = _(D)),
          (this.viewportMargin = 0),
          (this.open = !1),
          (this.disableClose = !1),
          (this.hasBackdrop = !1),
          (this.lockPosition = !1),
          (this.flexibleDimensions = !1),
          (this.growAfterOpen = !1),
          (this.push = !1),
          (this.backdropClick = new et()),
          (this.positionChange = new et()),
          (this.attach = new et()),
          (this.detach = new et()),
          (this.overlayKeydown = new et()),
          (this.overlayOutsideClick = new et()),
          (this._templatePortal = new Ve(i, r)),
          (this._scrollStrategyFactory = a),
          (this.scrollStrategy = this._scrollStrategyFactory());
      }
      get overlayRef() {
        return this._overlayRef;
      }
      get dir() {
        return this._dir ? this._dir.value : "ltr";
      }
      ngOnDestroy() {
        this._attachSubscription.unsubscribe(),
          this._detachSubscription.unsubscribe(),
          this._backdropSubscription.unsubscribe(),
          this._positionSubscription.unsubscribe(),
          this._overlayRef && this._overlayRef.dispose();
      }
      ngOnChanges(e) {
        this._position &&
          (this._updatePositionStrategy(this._position),
          this._overlayRef.updateSize({
            width: this.width,
            minWidth: this.minWidth,
            height: this.height,
            minHeight: this.minHeight,
          }),
          e.origin && this.open && this._position.apply()),
          e.open && (this.open ? this._attachOverlay() : this._detachOverlay());
      }
      _createOverlay() {
        (!this.positions || !this.positions.length) && (this.positions = u0);
        let e = (this._overlayRef = this._overlay.create(this._buildConfig()));
        (this._attachSubscription = e
          .attachments()
          .subscribe(() => this.attach.emit())),
          (this._detachSubscription = e
            .detachments()
            .subscribe(() => this.detach.emit())),
          e.keydownEvents().subscribe((i) => {
            this.overlayKeydown.next(i),
              i.keyCode === 27 &&
                !this.disableClose &&
                !Ut(i) &&
                (i.preventDefault(), this._detachOverlay());
          }),
          this._overlayRef.outsidePointerEvents().subscribe((i) => {
            let r = this._getOriginElement(),
              a = oe(i);
            (!r || (r !== a && !r.contains(a))) &&
              this.overlayOutsideClick.next(i);
          });
      }
      _buildConfig() {
        let e = (this._position =
            this.positionStrategy || this._createPositionStrategy()),
          i = new hi({
            direction: this._dir,
            positionStrategy: e,
            scrollStrategy: this.scrollStrategy,
            hasBackdrop: this.hasBackdrop,
            disposeOnNavigation: this.disposeOnNavigation,
          });
        return (
          (this.width || this.width === 0) && (i.width = this.width),
          (this.height || this.height === 0) && (i.height = this.height),
          (this.minWidth || this.minWidth === 0) &&
            (i.minWidth = this.minWidth),
          (this.minHeight || this.minHeight === 0) &&
            (i.minHeight = this.minHeight),
          this.backdropClass && (i.backdropClass = this.backdropClass),
          this.panelClass && (i.panelClass = this.panelClass),
          i
        );
      }
      _updatePositionStrategy(e) {
        let i = this.positions.map((r) => ({
          originX: r.originX,
          originY: r.originY,
          overlayX: r.overlayX,
          overlayY: r.overlayY,
          offsetX: r.offsetX || this.offsetX,
          offsetY: r.offsetY || this.offsetY,
          panelClass: r.panelClass || void 0,
        }));
        return e
          .setOrigin(this._getOrigin())
          .withPositions(i)
          .withFlexibleDimensions(this.flexibleDimensions)
          .withPush(this.push)
          .withGrowAfterOpen(this.growAfterOpen)
          .withViewportMargin(this.viewportMargin)
          .withLockedPosition(this.lockPosition)
          .withTransformOriginOn(this.transformOriginSelector);
      }
      _createPositionStrategy() {
        let e = this._overlay.position().flexibleConnectedTo(this._getOrigin());
        return this._updatePositionStrategy(e), e;
      }
      _getOrigin() {
        return this.origin instanceof Jo ? this.origin.elementRef : this.origin;
      }
      _getOriginElement() {
        return this.origin instanceof Jo
          ? this.origin.elementRef.nativeElement
          : this.origin instanceof L
          ? this.origin.nativeElement
          : typeof Element < "u" && this.origin instanceof Element
          ? this.origin
          : null;
      }
      _attachOverlay() {
        this._overlayRef
          ? (this._overlayRef.getConfig().hasBackdrop = this.hasBackdrop)
          : this._createOverlay(),
          this._overlayRef.hasAttached() ||
            this._overlayRef.attach(this._templatePortal),
          this.hasBackdrop
            ? (this._backdropSubscription = this._overlayRef
                .backdropClick()
                .subscribe((e) => {
                  this.backdropClick.emit(e);
                }))
            : this._backdropSubscription.unsubscribe(),
          this._positionSubscription.unsubscribe(),
          this.positionChange.observers.length > 0 &&
            (this._positionSubscription = this._position.positionChanges
              .pipe(dd(() => this.positionChange.observers.length > 0))
              .subscribe((e) => {
                this._ngZone.run(() => this.positionChange.emit(e)),
                  this.positionChange.observers.length === 0 &&
                    this._positionSubscription.unsubscribe();
              }));
      }
      _detachOverlay() {
        this._overlayRef && this._overlayRef.detach(),
          this._backdropSubscription.unsubscribe(),
          this._positionSubscription.unsubscribe();
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(xt), d(Ze), d(Te), d(zu), d(se, 8));
    }),
      (t.ɵdir = F({
        type: t,
        selectors: [
          ["", "cdk-connected-overlay", ""],
          ["", "connected-overlay", ""],
          ["", "cdkConnectedOverlay", ""],
        ],
        inputs: {
          origin: [0, "cdkConnectedOverlayOrigin", "origin"],
          positions: [0, "cdkConnectedOverlayPositions", "positions"],
          positionStrategy: [
            0,
            "cdkConnectedOverlayPositionStrategy",
            "positionStrategy",
          ],
          offsetX: [0, "cdkConnectedOverlayOffsetX", "offsetX"],
          offsetY: [0, "cdkConnectedOverlayOffsetY", "offsetY"],
          width: [0, "cdkConnectedOverlayWidth", "width"],
          height: [0, "cdkConnectedOverlayHeight", "height"],
          minWidth: [0, "cdkConnectedOverlayMinWidth", "minWidth"],
          minHeight: [0, "cdkConnectedOverlayMinHeight", "minHeight"],
          backdropClass: [
            0,
            "cdkConnectedOverlayBackdropClass",
            "backdropClass",
          ],
          panelClass: [0, "cdkConnectedOverlayPanelClass", "panelClass"],
          viewportMargin: [
            0,
            "cdkConnectedOverlayViewportMargin",
            "viewportMargin",
          ],
          scrollStrategy: [
            0,
            "cdkConnectedOverlayScrollStrategy",
            "scrollStrategy",
          ],
          open: [0, "cdkConnectedOverlayOpen", "open"],
          disableClose: [0, "cdkConnectedOverlayDisableClose", "disableClose"],
          transformOriginSelector: [
            0,
            "cdkConnectedOverlayTransformOriginOn",
            "transformOriginSelector",
          ],
          hasBackdrop: [2, "cdkConnectedOverlayHasBackdrop", "hasBackdrop", it],
          lockPosition: [
            2,
            "cdkConnectedOverlayLockPosition",
            "lockPosition",
            it,
          ],
          flexibleDimensions: [
            2,
            "cdkConnectedOverlayFlexibleDimensions",
            "flexibleDimensions",
            it,
          ],
          growAfterOpen: [
            2,
            "cdkConnectedOverlayGrowAfterOpen",
            "growAfterOpen",
            it,
          ],
          push: [2, "cdkConnectedOverlayPush", "push", it],
          disposeOnNavigation: [
            2,
            "cdkConnectedOverlayDisposeOnNavigation",
            "disposeOnNavigation",
            it,
          ],
        },
        outputs: {
          backdropClick: "backdropClick",
          positionChange: "positionChange",
          attach: "attach",
          detach: "detach",
          overlayKeydown: "overlayKeydown",
          overlayOutsideClick: "overlayOutsideClick",
        },
        exportAs: ["cdkConnectedOverlay"],
        standalone: !0,
        features: [Mt, zt],
      }));
    let n = t;
    return n;
  })();
function p0(n) {
  return () => n.scrollStrategies.reposition();
}
var f0 = { provide: zu, deps: [xt], useFactory: p0 },
  Ue = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵmod = T({ type: t })),
      (t.ɵinj = M({ providers: [xt, f0], imports: [si, mi, _l, _l] }));
    let n = t;
    return n;
  })();
function g0(n, t) {
  if (n & 1) {
    let o = vt();
    u(0, "div", 1)(1, "button", 2),
      j("click", function () {
        st(o);
        let i = P();
        return ct(i.action());
      }),
      y(2),
      p()();
  }
  if (n & 2) {
    let o = P();
    v(2), ie(" ", o.data.action, " ");
  }
}
var b0 = ["label"];
function _0(n, t) {}
var v0 = Math.pow(2, 31) - 1,
  tr = class {
    constructor(t, o) {
      (this._overlayRef = o),
        (this._afterDismissed = new E()),
        (this._afterOpened = new E()),
        (this._onAction = new E()),
        (this._dismissedByAction = !1),
        (this.containerInstance = t),
        t._onExit.subscribe(() => this._finishDismiss());
    }
    dismiss() {
      this._afterDismissed.closed || this.containerInstance.exit(),
        clearTimeout(this._durationTimeoutId);
    }
    dismissWithAction() {
      this._onAction.closed ||
        ((this._dismissedByAction = !0),
        this._onAction.next(),
        this._onAction.complete(),
        this.dismiss()),
        clearTimeout(this._durationTimeoutId);
    }
    closeWithAction() {
      this.dismissWithAction();
    }
    _dismissAfter(t) {
      this._durationTimeoutId = setTimeout(
        () => this.dismiss(),
        Math.min(t, v0)
      );
    }
    _open() {
      this._afterOpened.closed ||
        (this._afterOpened.next(), this._afterOpened.complete());
    }
    _finishDismiss() {
      this._overlayRef.dispose(),
        this._onAction.closed || this._onAction.complete(),
        this._afterDismissed.next({
          dismissedByAction: this._dismissedByAction,
        }),
        this._afterDismissed.complete(),
        (this._dismissedByAction = !1);
    }
    afterDismissed() {
      return this._afterDismissed;
    }
    afterOpened() {
      return this.containerInstance._onEnter;
    }
    onAction() {
      return this._onAction;
    }
  },
  Vu = new w("MatSnackBarData"),
  On = class {
    constructor() {
      (this.politeness = "assertive"),
        (this.announcementMessage = ""),
        (this.duration = 0),
        (this.data = null),
        (this.horizontalPosition = "center"),
        (this.verticalPosition = "bottom");
    }
  },
  x0 = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵdir = F({
        type: t,
        selectors: [["", "matSnackBarLabel", ""]],
        hostAttrs: [1, "mat-mdc-snack-bar-label", "mdc-snackbar__label"],
        standalone: !0,
      }));
    let n = t;
    return n;
  })(),
  y0 = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵdir = F({
        type: t,
        selectors: [["", "matSnackBarActions", ""]],
        hostAttrs: [1, "mat-mdc-snack-bar-actions", "mdc-snackbar__actions"],
        standalone: !0,
      }));
    let n = t;
    return n;
  })(),
  w0 = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵdir = F({
        type: t,
        selectors: [["", "matSnackBarAction", ""]],
        hostAttrs: [1, "mat-mdc-snack-bar-action", "mdc-snackbar__action"],
        standalone: !0,
      }));
    let n = t;
    return n;
  })(),
  k0 = (() => {
    let t = class t {
      constructor(e, i) {
        (this.snackBarRef = e), (this.data = i);
      }
      action() {
        this.snackBarRef.dismissWithAction();
      }
      get hasAction() {
        return !!this.data.action;
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(tr), d(Vu));
    }),
      (t.ɵcmp = z({
        type: t,
        selectors: [["simple-snack-bar"]],
        hostAttrs: [1, "mat-mdc-simple-snack-bar"],
        exportAs: ["matSnackBar"],
        standalone: !0,
        features: [V],
        decls: 3,
        vars: 2,
        consts: [
          ["matSnackBarLabel", ""],
          ["matSnackBarActions", ""],
          ["mat-button", "", "matSnackBarAction", "", 3, "click"],
        ],
        template: function (i, r) {
          i & 1 && (u(0, "div", 0), y(1), p(), A(2, g0, 3, 1, "div", 1)),
            i & 2 &&
              (v(),
              ie(
                " ",
                r.data.message,
                `
`
              ),
              v(),
              ot(r.hasAction ? 2 : -1));
        },
        dependencies: [$t, x0, y0, w0],
        styles: [".mat-mdc-simple-snack-bar{display:flex}"],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let n = t;
    return n;
  })(),
  C0 = {
    snackBarState: Ri("state", [
      Fi("void, hidden", me({ transform: "scale(0.8)", opacity: 0 })),
      Fi("visible", me({ transform: "scale(1)", opacity: 1 })),
      Fe("* => visible", Je("150ms cubic-bezier(0, 0, 0.2, 1)")),
      Fe(
        "* => void, * => hidden",
        Je("75ms cubic-bezier(0.4, 0.0, 1, 1)", me({ opacity: 0 }))
      ),
    ]),
  },
  E0 = 0,
  S0 = (() => {
    let t = class t extends li {
      constructor(e, i, r, a, s) {
        super(),
          (this._ngZone = e),
          (this._elementRef = i),
          (this._changeDetectorRef = r),
          (this._platform = a),
          (this.snackBarConfig = s),
          (this._document = _(R)),
          (this._trackedModals = new Set()),
          (this._announceDelay = 150),
          (this._destroyed = !1),
          (this._onAnnounce = new E()),
          (this._onExit = new E()),
          (this._onEnter = new E()),
          (this._animationState = "void"),
          (this._liveElementId = `mat-snack-bar-container-live-${E0++}`),
          (this.attachDomPortal = (c) => {
            this._assertNotAttached();
            let l = this._portalOutlet.attachDomPortal(c);
            return this._afterPortalAttached(), l;
          }),
          s.politeness === "assertive" && !s.announcementMessage
            ? (this._live = "assertive")
            : s.politeness === "off"
            ? (this._live = "off")
            : (this._live = "polite"),
          this._platform.FIREFOX &&
            (this._live === "polite" && (this._role = "status"),
            this._live === "assertive" && (this._role = "alert"));
      }
      attachComponentPortal(e) {
        this._assertNotAttached();
        let i = this._portalOutlet.attachComponentPortal(e);
        return this._afterPortalAttached(), i;
      }
      attachTemplatePortal(e) {
        this._assertNotAttached();
        let i = this._portalOutlet.attachTemplatePortal(e);
        return this._afterPortalAttached(), i;
      }
      onAnimationEnd(e) {
        let { fromState: i, toState: r } = e;
        if (
          (((r === "void" && i !== "void") || r === "hidden") &&
            this._completeExit(),
          r === "visible")
        ) {
          let a = this._onEnter;
          this._ngZone.run(() => {
            a.next(), a.complete();
          });
        }
      }
      enter() {
        this._destroyed ||
          ((this._animationState = "visible"),
          this._changeDetectorRef.markForCheck(),
          this._changeDetectorRef.detectChanges(),
          this._screenReaderAnnounce());
      }
      exit() {
        return (
          this._ngZone.run(() => {
            (this._animationState = "hidden"),
              this._changeDetectorRef.markForCheck(),
              this._elementRef.nativeElement.setAttribute("mat-exit", ""),
              clearTimeout(this._announceTimeoutId);
          }),
          this._onExit
        );
      }
      ngOnDestroy() {
        (this._destroyed = !0), this._clearFromModals(), this._completeExit();
      }
      _completeExit() {
        queueMicrotask(() => {
          this._onExit.next(), this._onExit.complete();
        });
      }
      _afterPortalAttached() {
        let e = this._elementRef.nativeElement,
          i = this.snackBarConfig.panelClass;
        i &&
          (Array.isArray(i)
            ? i.forEach((s) => e.classList.add(s))
            : e.classList.add(i)),
          this._exposeToModals();
        let r = this._label.nativeElement,
          a = "mdc-snackbar__label";
        r.classList.toggle(a, !r.querySelector(`.${a}`));
      }
      _exposeToModals() {
        let e = this._liveElementId,
          i = this._document.querySelectorAll(
            'body > .cdk-overlay-container [aria-modal="true"]'
          );
        for (let r = 0; r < i.length; r++) {
          let a = i[r],
            s = a.getAttribute("aria-owns");
          this._trackedModals.add(a),
            s
              ? s.indexOf(e) === -1 && a.setAttribute("aria-owns", s + " " + e)
              : a.setAttribute("aria-owns", e);
        }
      }
      _clearFromModals() {
        this._trackedModals.forEach((e) => {
          let i = e.getAttribute("aria-owns");
          if (i) {
            let r = i.replace(this._liveElementId, "").trim();
            r.length > 0
              ? e.setAttribute("aria-owns", r)
              : e.removeAttribute("aria-owns");
          }
        }),
          this._trackedModals.clear();
      }
      _assertNotAttached() {
        this._portalOutlet.hasAttached();
      }
      _screenReaderAnnounce() {
        this._announceTimeoutId ||
          this._ngZone.runOutsideAngular(() => {
            this._announceTimeoutId = setTimeout(() => {
              let e =
                  this._elementRef.nativeElement.querySelector("[aria-hidden]"),
                i = this._elementRef.nativeElement.querySelector("[aria-live]");
              if (e && i) {
                let r = null;
                this._platform.isBrowser &&
                  document.activeElement instanceof HTMLElement &&
                  e.contains(document.activeElement) &&
                  (r = document.activeElement),
                  e.removeAttribute("aria-hidden"),
                  i.appendChild(e),
                  r?.focus(),
                  this._onAnnounce.next(),
                  this._onAnnounce.complete();
              }
            }, this._announceDelay);
          });
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(D), d(L), d(St), d(G), d(On));
    }),
      (t.ɵcmp = z({
        type: t,
        selectors: [["mat-snack-bar-container"]],
        viewQuery: function (i, r) {
          if ((i & 1 && (ft(di, 7), ft(b0, 7)), i & 2)) {
            let a;
            X((a = Z())) && (r._portalOutlet = a.first),
              X((a = Z())) && (r._label = a.first);
          }
        },
        hostAttrs: [
          1,
          "mdc-snackbar",
          "mat-mdc-snack-bar-container",
          "mdc-snackbar--open",
        ],
        hostVars: 1,
        hostBindings: function (i, r) {
          i & 1 &&
            Rd("@state.done", function (s) {
              return r.onAnimationEnd(s);
            }),
            i & 2 && Od("@state", r._animationState);
        },
        standalone: !0,
        features: [ut, V],
        decls: 6,
        vars: 3,
        consts: [
          ["label", ""],
          [1, "mdc-snackbar__surface"],
          [1, "mat-mdc-snack-bar-label"],
          ["aria-hidden", "true"],
          ["cdkPortalOutlet", ""],
        ],
        template: function (i, r) {
          i & 1 &&
            (u(0, "div", 1)(1, "div", 2, 0)(3, "div", 3),
            A(4, _0, 0, 0, "ng-template", 4),
            p(),
            O(5, "div"),
            p()()),
            i & 2 &&
              (v(5),
              K("aria-live", r._live)("role", r._role)("id", r._liveElementId));
        },
        dependencies: [di],
        styles: [
          '.mdc-snackbar{display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--open .mdc-snackbar__label,.mdc-snackbar--open .mdc-snackbar__actions{visibility:visible}.mdc-snackbar__surface{padding-left:0;padding-right:8px;display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(0.8);opacity:0}.mdc-snackbar__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-snackbar__surface::before{border-color:CanvasText}}[dir=rtl] .mdc-snackbar__surface,.mdc-snackbar__surface[dir=rtl]{padding-left:8px;padding-right:0}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1)}.mdc-snackbar__label{padding-left:16px;padding-right:8px;width:100%;flex-grow:1;box-sizing:border-box;margin:0;visibility:hidden;padding-top:14px;padding-bottom:14px}[dir=rtl] .mdc-snackbar__label,.mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar__label::before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box;visibility:hidden}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px}.mat-mdc-snack-bar-container{margin:8px;position:static}.mat-mdc-snack-bar-container .mdc-snackbar__surface{min-width:344px}@media(max-width: 480px),(max-width: 344px){.mat-mdc-snack-bar-container .mdc-snackbar__surface{min-width:100%}}@media(max-width: 480px),(max-width: 344px){.mat-mdc-snack-bar-container{width:100vw}}.mat-mdc-snack-bar-container .mdc-snackbar__surface{max-width:672px}.mat-mdc-snack-bar-container .mdc-snackbar__surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)}.mat-mdc-snack-bar-container .mdc-snackbar__surface{background-color:var(--mdc-snackbar-container-color)}.mat-mdc-snack-bar-container .mdc-snackbar__surface{border-radius:var(--mdc-snackbar-container-shape)}.mat-mdc-snack-bar-container .mdc-snackbar__label{color:var(--mdc-snackbar-supporting-text-color)}.mat-mdc-snack-bar-container .mdc-snackbar__label{font-size:var(--mdc-snackbar-supporting-text-size);font-family:var(--mdc-snackbar-supporting-text-font);font-weight:var(--mdc-snackbar-supporting-text-weight);line-height:var(--mdc-snackbar-supporting-text-line-height)}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){color:var(--mat-snack-bar-button-color);--mat-text-button-state-layer-color:currentColor;--mat-text-button-ripple-color:currentColor}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element{opacity:.1}.mat-mdc-snack-bar-container .mdc-snackbar__label::before{display:none}.mat-mdc-snack-bar-handset,.mat-mdc-snack-bar-container,.mat-mdc-snack-bar-label{flex:1 1 auto}.mat-mdc-snack-bar-handset .mdc-snackbar__surface{width:100%}',
        ],
        encapsulation: 2,
        data: { animation: [C0.snackBarState] },
      }));
    let n = t;
    return n;
  })();
function I0() {
  return new On();
}
var D0 = new w("mat-snack-bar-default-options", {
    providedIn: "root",
    factory: I0,
  }),
  ui = (() => {
    let t = class t {
      get _openedSnackBarRef() {
        let e = this._parentSnackBar;
        return e ? e._openedSnackBarRef : this._snackBarRefAtThisLevel;
      }
      set _openedSnackBarRef(e) {
        this._parentSnackBar
          ? (this._parentSnackBar._openedSnackBarRef = e)
          : (this._snackBarRefAtThisLevel = e);
      }
      constructor(e, i, r, a, s, c) {
        (this._overlay = e),
          (this._live = i),
          (this._injector = r),
          (this._breakpointObserver = a),
          (this._parentSnackBar = s),
          (this._defaultConfig = c),
          (this._snackBarRefAtThisLevel = null),
          (this.simpleSnackBarComponent = k0),
          (this.snackBarContainerComponent = S0),
          (this.handsetCssClass = "mat-mdc-snack-bar-handset");
      }
      openFromComponent(e, i) {
        return this._attach(e, i);
      }
      openFromTemplate(e, i) {
        return this._attach(e, i);
      }
      open(e, i = "", r) {
        let a = b(b({}, this._defaultConfig), r);
        return (
          (a.data = { message: e, action: i }),
          a.announcementMessage === e && (a.announcementMessage = void 0),
          this.openFromComponent(this.simpleSnackBarComponent, a)
        );
      }
      dismiss() {
        this._openedSnackBarRef && this._openedSnackBarRef.dismiss();
      }
      ngOnDestroy() {
        this._snackBarRefAtThisLevel && this._snackBarRefAtThisLevel.dismiss();
      }
      _attachSnackBarContainer(e, i) {
        let r = i && i.viewContainerRef && i.viewContainerRef.injector,
          a = kt.create({
            parent: r || this._injector,
            providers: [{ provide: On, useValue: i }],
          }),
          s = new pe(this.snackBarContainerComponent, i.viewContainerRef, a),
          c = e.attach(s);
        return (c.instance.snackBarConfig = i), c.instance;
      }
      _attach(e, i) {
        let r = b(b(b({}, new On()), this._defaultConfig), i),
          a = this._createOverlay(r),
          s = this._attachSnackBarContainer(a, r),
          c = new tr(s, a);
        if (e instanceof Ze) {
          let l = new Ve(e, null, { $implicit: r.data, snackBarRef: c });
          c.instance = s.attachTemplatePortal(l);
        } else {
          let l = this._createInjector(r, c),
            m = new pe(e, void 0, l),
            f = s.attachComponentPortal(m);
          c.instance = f.instance;
        }
        return (
          this._breakpointObserver
            .observe(kh.HandsetPortrait)
            .pipe(tt(a.detachments()))
            .subscribe((l) => {
              a.overlayElement.classList.toggle(
                this.handsetCssClass,
                l.matches
              );
            }),
          r.announcementMessage &&
            s._onAnnounce.subscribe(() => {
              this._live.announce(r.announcementMessage, r.politeness);
            }),
          this._animateSnackBar(c, r),
          (this._openedSnackBarRef = c),
          this._openedSnackBarRef
        );
      }
      _animateSnackBar(e, i) {
        e.afterDismissed().subscribe(() => {
          this._openedSnackBarRef == e && (this._openedSnackBarRef = null),
            i.announcementMessage && this._live.clear();
        }),
          this._openedSnackBarRef
            ? (this._openedSnackBarRef.afterDismissed().subscribe(() => {
                e.containerInstance.enter();
              }),
              this._openedSnackBarRef.dismiss())
            : e.containerInstance.enter(),
          i.duration &&
            i.duration > 0 &&
            e.afterOpened().subscribe(() => e._dismissAfter(i.duration));
      }
      _createOverlay(e) {
        let i = new hi();
        i.direction = e.direction;
        let r = this._overlay.position().global(),
          a = e.direction === "rtl",
          s =
            e.horizontalPosition === "left" ||
            (e.horizontalPosition === "start" && !a) ||
            (e.horizontalPosition === "end" && a),
          c = !s && e.horizontalPosition !== "center";
        return (
          s ? r.left("0") : c ? r.right("0") : r.centerHorizontally(),
          e.verticalPosition === "top" ? r.top("0") : r.bottom("0"),
          (i.positionStrategy = r),
          this._overlay.create(i)
        );
      }
      _createInjector(e, i) {
        let r = e && e.viewContainerRef && e.viewContainerRef.injector;
        return kt.create({
          parent: r || this._injector,
          providers: [
            { provide: tr, useValue: i },
            { provide: Vu, useValue: e.data },
          ],
        });
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(h(xt), h(ba), h(kt), h(sa), h(t, 12), h(D0));
    }),
      (t.ɵprov = x({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })();
function A0(n, t) {
  if (n & 1) {
    let o = vt();
    Md(0),
      u(1, "button", 4),
      j("click", function () {
        st(o);
        let i = P();
        return ct(i.logout());
      }),
      y(2, "Log Out"),
      p(),
      Td();
  }
}
function M0(n, t) {
  n & 1 &&
    (u(0, "a", 5), y(1, "Login"), p(), u(2, "a", 6), y(3, "Register"), p());
}
var Bu = (() => {
  let t = class t {
    constructor(e, i, r) {
      (this.apiService = e),
        (this.router = i),
        (this.snackBar = r),
        (this.isAuthenticated$ = this.apiService.isAuthenticated$);
    }
    ngOnInit() {
      this.isAuthenticated$.subscribe((e) => {});
    }
    logout() {
      this.apiService.logout(),
        this.router.navigate(["/login"]),
        this.snackBar.open(
          "Haz finalizado tu sesion exitosamente. ",
          "Cerrar",
          { duration: 5e3, panelClass: ["green-snackbar"] }
        );
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(d(ci), d(gt), d(ui));
  }),
    (t.ɵcmp = z({
      type: t,
      selectors: [["app-navbar"]],
      standalone: !0,
      features: [V],
      decls: 8,
      vars: 4,
      consts: [
        ["loggedOut", ""],
        ["color", "primary"],
        [1, "spacer"],
        [4, "ngIf", "ngIfElse"],
        ["mat-button", "", 3, "click"],
        ["mat-button", "", "routerLink", "/login"],
        ["mat-button", "", "routerLink", "/register"],
      ],
      template: function (i, r) {
        if (
          (i & 1 &&
            (u(0, "mat-toolbar", 1)(1, "h1"),
            y(2, "My Blog"),
            p(),
            O(3, "span", 2),
            A(4, A0, 3, 0, "ng-container", 3),
            jd(5, "async"),
            A(6, M0, 4, 0, "ng-template", null, 0, no),
            p()),
          i & 2)
        ) {
          let a = Ke(7);
          v(4), C("ngIf", zd(5, 2, r.isAuthenticated$))("ngIfElse", a);
        }
      },
      dependencies: [Sa, Ea, Ht, Zh, $t, yt, xe, Xd, bn, gn],
      styles: [".spacer[_ngcontent-%COMP%]{flex:1 1 auto}"],
    }));
  let n = t;
  return n;
})();
var Uu = (() => {
  let t = class t {};
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵcmp = z({
      type: t,
      selectors: [["app-footer"]],
      standalone: !0,
      features: [V],
      decls: 9,
      vars: 0,
      consts: [
        ["color", "primary", 1, "footer-toolbar"],
        [1, "spacer"],
        ["mat-button", "", "routerLink", "/privacy"],
        ["mat-button", "", "routerLink", "/terms"],
      ],
      template: function (i, r) {
        i & 1 &&
          (u(0, "mat-toolbar", 0)(1, "span"),
          y(2, "\xA9 2024 MyBlog. All rights reserved."),
          p(),
          O(3, "span", 1),
          u(4, "nav")(5, "a", 2),
          y(6, "Privacy Policy"),
          p(),
          u(7, "a", 3),
          y(8, "Terms of Service"),
          p()()());
      },
      dependencies: [Sa, Ea],
      styles: [
        ".footer-toolbar[_ngcontent-%COMP%]{position:fixed;bottom:0;width:100%;text-align:center;padding:10px 0;background:#3f51b5;color:#fff;font-size:14px;z-index:1000}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.footer-toolbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;margin:0 10px;font-size:14px;text-transform:uppercase;font-weight:500}",
      ],
    }));
  let n = t;
  return n;
})();
var Zu = (() => {
    let t = class t {
      constructor(e, i) {
        (this._renderer = e),
          (this._elementRef = i),
          (this.onChange = (r) => {}),
          (this.onTouched = () => {});
      }
      setProperty(e, i) {
        this._renderer.setProperty(this._elementRef.nativeElement, e, i);
      }
      registerOnTouched(e) {
        this.onTouched = e;
      }
      registerOnChange(e) {
        this.onChange = e;
      }
      setDisabledState(e) {
        this.setProperty("disabled", e);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(io), d(L));
    }),
      (t.ɵdir = F({ type: t }));
    let n = t;
    return n;
  })(),
  T0 = (() => {
    let t = class t extends Zu {};
    (t.ɵfac = (() => {
      let e;
      return function (r) {
        return (e || (e = be(t)))(r || t);
      };
    })()),
      (t.ɵdir = F({ type: t, features: [ut] }));
    let n = t;
    return n;
  })(),
  Qu = new w("");
var O0 = { provide: Qu, useExisting: Xn(() => Se), multi: !0 };
function R0() {
  let n = nn() ? nn().getUserAgent() : "";
  return /android (\d+)/.test(n.toLowerCase());
}
var F0 = new w(""),
  Se = (() => {
    let t = class t extends Zu {
      constructor(e, i, r) {
        super(e, i),
          (this._compositionMode = r),
          (this._composing = !1),
          this._compositionMode == null && (this._compositionMode = !R0());
      }
      writeValue(e) {
        let i = e ?? "";
        this.setProperty("value", i);
      }
      _handleInput(e) {
        (!this._compositionMode ||
          (this._compositionMode && !this._composing)) &&
          this.onChange(e);
      }
      _compositionStart() {
        this._composing = !0;
      }
      _compositionEnd(e) {
        (this._composing = !1), this._compositionMode && this.onChange(e);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(io), d(L), d(F0, 8));
    }),
      (t.ɵdir = F({
        type: t,
        selectors: [
          ["input", "formControlName", "", 3, "type", "checkbox"],
          ["textarea", "formControlName", ""],
          ["input", "formControl", "", 3, "type", "checkbox"],
          ["textarea", "formControl", ""],
          ["input", "ngModel", "", 3, "type", "checkbox"],
          ["textarea", "ngModel", ""],
          ["", "ngDefaultControl", ""],
        ],
        hostBindings: function (i, r) {
          i & 1 &&
            j("input", function (s) {
              return r._handleInput(s.target.value);
            })("blur", function () {
              return r.onTouched();
            })("compositionstart", function () {
              return r._compositionStart();
            })("compositionend", function (s) {
              return r._compositionEnd(s.target.value);
            });
        },
        features: [Pt([O0]), ut],
      }));
    let n = t;
    return n;
  })();
function pi(n) {
  return (
    n == null || ((typeof n == "string" || Array.isArray(n)) && n.length === 0)
  );
}
function Ku(n) {
  return n != null && typeof n.length == "number";
}
var Rl = new w(""),
  Fl = new w(""),
  P0 =
    /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  bt = class {
    static min(t) {
      return L0(t);
    }
    static max(t) {
      return N0(t);
    }
    static required(t) {
      return j0(t);
    }
    static requiredTrue(t) {
      return z0(t);
    }
    static email(t) {
      return V0(t);
    }
    static minLength(t) {
      return B0(t);
    }
    static maxLength(t) {
      return U0(t);
    }
    static pattern(t) {
      return H0(t);
    }
    static nullValidator(t) {
      return Ju(t);
    }
    static compose(t) {
      return rp(t);
    }
    static composeAsync(t) {
      return ap(t);
    }
  };
function L0(n) {
  return (t) => {
    if (pi(t.value) || pi(n)) return null;
    let o = parseFloat(t.value);
    return !isNaN(o) && o < n ? { min: { min: n, actual: t.value } } : null;
  };
}
function N0(n) {
  return (t) => {
    if (pi(t.value) || pi(n)) return null;
    let o = parseFloat(t.value);
    return !isNaN(o) && o > n ? { max: { max: n, actual: t.value } } : null;
  };
}
function j0(n) {
  return pi(n.value) ? { required: !0 } : null;
}
function z0(n) {
  return n.value === !0 ? null : { required: !0 };
}
function V0(n) {
  return pi(n.value) || P0.test(n.value) ? null : { email: !0 };
}
function B0(n) {
  return (t) =>
    pi(t.value) || !Ku(t.value)
      ? null
      : t.value.length < n
      ? { minlength: { requiredLength: n, actualLength: t.value.length } }
      : null;
}
function U0(n) {
  return (t) =>
    Ku(t.value) && t.value.length > n
      ? { maxlength: { requiredLength: n, actualLength: t.value.length } }
      : null;
}
function H0(n) {
  if (!n) return Ju;
  let t, o;
  return (
    typeof n == "string"
      ? ((o = ""),
        n.charAt(0) !== "^" && (o += "^"),
        (o += n),
        n.charAt(n.length - 1) !== "$" && (o += "$"),
        (t = new RegExp(o)))
      : ((o = n.toString()), (t = n)),
    (e) => {
      if (pi(e.value)) return null;
      let i = e.value;
      return t.test(i)
        ? null
        : { pattern: { requiredPattern: o, actualValue: i } };
    }
  );
}
function Ju(n) {
  return null;
}
function tp(n) {
  return n != null;
}
function ep(n) {
  return Sr(n) ? Rt(n) : n;
}
function ip(n) {
  let t = {};
  return (
    n.forEach((o) => {
      t = o != null ? b(b({}, t), o) : t;
    }),
    Object.keys(t).length === 0 ? null : t
  );
}
function np(n, t) {
  return t.map((o) => o(n));
}
function $0(n) {
  return !n.validate;
}
function op(n) {
  return n.map((t) => ($0(t) ? t : (o) => t.validate(o)));
}
function rp(n) {
  if (!n) return null;
  let t = n.filter(tp);
  return t.length == 0
    ? null
    : function (o) {
        return ip(np(o, t));
      };
}
function Pl(n) {
  return n != null ? rp(op(n)) : null;
}
function ap(n) {
  if (!n) return null;
  let t = n.filter(tp);
  return t.length == 0
    ? null
    : function (o) {
        let e = np(o, t).map(ep);
        return gr(e).pipe(B(ip));
      };
}
function Ll(n) {
  return n != null ? ap(op(n)) : null;
}
function Hu(n, t) {
  return n === null ? [t] : Array.isArray(n) ? [...n, t] : [n, t];
}
function sp(n) {
  return n._rawValidators;
}
function cp(n) {
  return n._rawAsyncValidators;
}
function Il(n) {
  return n ? (Array.isArray(n) ? n : [n]) : [];
}
function Xa(n, t) {
  return Array.isArray(n) ? n.includes(t) : n === t;
}
function $u(n, t) {
  let o = Il(t);
  return (
    Il(n).forEach((i) => {
      Xa(o, i) || o.push(i);
    }),
    o
  );
}
function Wu(n, t) {
  return Il(t).filter((o) => !Xa(n, o));
}
var Za = class {
    constructor() {
      (this._rawValidators = []),
        (this._rawAsyncValidators = []),
        (this._onDestroyCallbacks = []);
    }
    get value() {
      return this.control ? this.control.value : null;
    }
    get valid() {
      return this.control ? this.control.valid : null;
    }
    get invalid() {
      return this.control ? this.control.invalid : null;
    }
    get pending() {
      return this.control ? this.control.pending : null;
    }
    get disabled() {
      return this.control ? this.control.disabled : null;
    }
    get enabled() {
      return this.control ? this.control.enabled : null;
    }
    get errors() {
      return this.control ? this.control.errors : null;
    }
    get pristine() {
      return this.control ? this.control.pristine : null;
    }
    get dirty() {
      return this.control ? this.control.dirty : null;
    }
    get touched() {
      return this.control ? this.control.touched : null;
    }
    get status() {
      return this.control ? this.control.status : null;
    }
    get untouched() {
      return this.control ? this.control.untouched : null;
    }
    get statusChanges() {
      return this.control ? this.control.statusChanges : null;
    }
    get valueChanges() {
      return this.control ? this.control.valueChanges : null;
    }
    get path() {
      return null;
    }
    _setValidators(t) {
      (this._rawValidators = t || []),
        (this._composedValidatorFn = Pl(this._rawValidators));
    }
    _setAsyncValidators(t) {
      (this._rawAsyncValidators = t || []),
        (this._composedAsyncValidatorFn = Ll(this._rawAsyncValidators));
    }
    get validator() {
      return this._composedValidatorFn || null;
    }
    get asyncValidator() {
      return this._composedAsyncValidatorFn || null;
    }
    _registerOnDestroy(t) {
      this._onDestroyCallbacks.push(t);
    }
    _invokeOnDestroyCallbacks() {
      this._onDestroyCallbacks.forEach((t) => t()),
        (this._onDestroyCallbacks = []);
    }
    reset(t = void 0) {
      this.control && this.control.reset(t);
    }
    hasError(t, o) {
      return this.control ? this.control.hasError(t, o) : !1;
    }
    getError(t, o) {
      return this.control ? this.control.getError(t, o) : null;
    }
  },
  fi = class extends Za {
    get formDirective() {
      return null;
    }
    get path() {
      return null;
    }
  },
  He = class extends Za {
    constructor() {
      super(...arguments),
        (this._parent = null),
        (this.name = null),
        (this.valueAccessor = null);
    }
  },
  Qa = class {
    constructor(t) {
      this._cd = t;
    }
    get isTouched() {
      return this._cd?.control?._touched?.(), !!this._cd?.control?.touched;
    }
    get isUntouched() {
      return !!this._cd?.control?.untouched;
    }
    get isPristine() {
      return this._cd?.control?._pristine?.(), !!this._cd?.control?.pristine;
    }
    get isDirty() {
      return !!this._cd?.control?.dirty;
    }
    get isValid() {
      return this._cd?.control?._status?.(), !!this._cd?.control?.valid;
    }
    get isInvalid() {
      return !!this._cd?.control?.invalid;
    }
    get isPending() {
      return !!this._cd?.control?.pending;
    }
    get isSubmitted() {
      return this._cd?._submitted?.(), !!this._cd?.submitted;
    }
  },
  W0 = {
    "[class.ng-untouched]": "isUntouched",
    "[class.ng-touched]": "isTouched",
    "[class.ng-pristine]": "isPristine",
    "[class.ng-dirty]": "isDirty",
    "[class.ng-valid]": "isValid",
    "[class.ng-invalid]": "isInvalid",
    "[class.ng-pending]": "isPending",
  },
  oD = nt(b({}, W0), { "[class.ng-submitted]": "isSubmitted" }),
  bi = (() => {
    let t = class t extends Qa {
      constructor(e) {
        super(e);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(He, 2));
    }),
      (t.ɵdir = F({
        type: t,
        selectors: [
          ["", "formControlName", ""],
          ["", "ngModel", ""],
          ["", "formControl", ""],
        ],
        hostVars: 14,
        hostBindings: function (i, r) {
          i & 2 &&
            q("ng-untouched", r.isUntouched)("ng-touched", r.isTouched)(
              "ng-pristine",
              r.isPristine
            )("ng-dirty", r.isDirty)("ng-valid", r.isValid)(
              "ng-invalid",
              r.isInvalid
            )("ng-pending", r.isPending);
        },
        features: [ut],
      }));
    let n = t;
    return n;
  })(),
  _i = (() => {
    let t = class t extends Qa {
      constructor(e) {
        super(e);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(fi, 10));
    }),
      (t.ɵdir = F({
        type: t,
        selectors: [
          ["", "formGroupName", ""],
          ["", "formArrayName", ""],
          ["", "ngModelGroup", ""],
          ["", "formGroup", ""],
          ["form", 3, "ngNoForm", ""],
          ["", "ngForm", ""],
        ],
        hostVars: 16,
        hostBindings: function (i, r) {
          i & 2 &&
            q("ng-untouched", r.isUntouched)("ng-touched", r.isTouched)(
              "ng-pristine",
              r.isPristine
            )("ng-dirty", r.isDirty)("ng-valid", r.isValid)(
              "ng-invalid",
              r.isInvalid
            )("ng-pending", r.isPending)("ng-submitted", r.isSubmitted);
        },
        features: [ut],
      }));
    let n = t;
    return n;
  })();
var er = "VALID",
  Ga = "INVALID",
  Rn = "PENDING",
  ir = "DISABLED",
  gi = class {},
  Ka = class extends gi {
    constructor(t, o) {
      super(), (this.value = t), (this.source = o);
    }
  },
  or = class extends gi {
    constructor(t, o) {
      super(), (this.pristine = t), (this.source = o);
    }
  },
  rr = class extends gi {
    constructor(t, o) {
      super(), (this.touched = t), (this.source = o);
    }
  },
  Fn = class extends gi {
    constructor(t, o) {
      super(), (this.status = t), (this.source = o);
    }
  },
  Dl = class extends gi {
    constructor(t) {
      super(), (this.source = t);
    }
  },
  Al = class extends gi {
    constructor(t) {
      super(), (this.source = t);
    }
  };
function Nl(n) {
  return (es(n) ? n.validators : n) || null;
}
function q0(n) {
  return Array.isArray(n) ? Pl(n) : n || null;
}
function jl(n, t) {
  return (es(t) ? t.asyncValidators : n) || null;
}
function G0(n) {
  return Array.isArray(n) ? Ll(n) : n || null;
}
function es(n) {
  return n != null && !Array.isArray(n) && typeof n == "object";
}
function lp(n, t, o) {
  let e = n.controls;
  if (!(t ? Object.keys(e) : e).length) throw new at(1e3, "");
  if (!e[o]) throw new at(1001, "");
}
function dp(n, t, o) {
  n._forEachChild((e, i) => {
    if (o[i] === void 0) throw new at(1002, "");
  });
}
var Pn = class {
    constructor(t, o) {
      (this._pendingDirty = !1),
        (this._hasOwnPendingAsyncValidator = null),
        (this._pendingTouched = !1),
        (this._onCollectionChange = () => {}),
        (this._parent = null),
        (this._status = en(() => this.statusReactive())),
        (this.statusReactive = Ji(void 0)),
        (this._pristine = en(() => this.pristineReactive())),
        (this.pristineReactive = Ji(!0)),
        (this._touched = en(() => this.touchedReactive())),
        (this.touchedReactive = Ji(!1)),
        (this._events = new E()),
        (this.events = this._events.asObservable()),
        (this._onDisabledChange = []),
        this._assignValidators(t),
        this._assignAsyncValidators(o);
    }
    get validator() {
      return this._composedValidatorFn;
    }
    set validator(t) {
      this._rawValidators = this._composedValidatorFn = t;
    }
    get asyncValidator() {
      return this._composedAsyncValidatorFn;
    }
    set asyncValidator(t) {
      this._rawAsyncValidators = this._composedAsyncValidatorFn = t;
    }
    get parent() {
      return this._parent;
    }
    get status() {
      return Oe(this.statusReactive);
    }
    set status(t) {
      Oe(() => this.statusReactive.set(t));
    }
    get valid() {
      return this.status === er;
    }
    get invalid() {
      return this.status === Ga;
    }
    get pending() {
      return this.status == Rn;
    }
    get disabled() {
      return this.status === ir;
    }
    get enabled() {
      return this.status !== ir;
    }
    get pristine() {
      return Oe(this.pristineReactive);
    }
    set pristine(t) {
      Oe(() => this.pristineReactive.set(t));
    }
    get dirty() {
      return !this.pristine;
    }
    get touched() {
      return Oe(this.touchedReactive);
    }
    set touched(t) {
      Oe(() => this.touchedReactive.set(t));
    }
    get untouched() {
      return !this.touched;
    }
    get updateOn() {
      return this._updateOn
        ? this._updateOn
        : this.parent
        ? this.parent.updateOn
        : "change";
    }
    setValidators(t) {
      this._assignValidators(t);
    }
    setAsyncValidators(t) {
      this._assignAsyncValidators(t);
    }
    addValidators(t) {
      this.setValidators($u(t, this._rawValidators));
    }
    addAsyncValidators(t) {
      this.setAsyncValidators($u(t, this._rawAsyncValidators));
    }
    removeValidators(t) {
      this.setValidators(Wu(t, this._rawValidators));
    }
    removeAsyncValidators(t) {
      this.setAsyncValidators(Wu(t, this._rawAsyncValidators));
    }
    hasValidator(t) {
      return Xa(this._rawValidators, t);
    }
    hasAsyncValidator(t) {
      return Xa(this._rawAsyncValidators, t);
    }
    clearValidators() {
      this.validator = null;
    }
    clearAsyncValidators() {
      this.asyncValidator = null;
    }
    markAsTouched(t = {}) {
      let o = this.touched === !1;
      this.touched = !0;
      let e = t.sourceControl ?? this;
      this._parent &&
        !t.onlySelf &&
        this._parent.markAsTouched(nt(b({}, t), { sourceControl: e })),
        o && t.emitEvent !== !1 && this._events.next(new rr(!0, e));
    }
    markAllAsTouched(t = {}) {
      this.markAsTouched({
        onlySelf: !0,
        emitEvent: t.emitEvent,
        sourceControl: this,
      }),
        this._forEachChild((o) => o.markAllAsTouched(t));
    }
    markAsUntouched(t = {}) {
      let o = this.touched === !0;
      (this.touched = !1), (this._pendingTouched = !1);
      let e = t.sourceControl ?? this;
      this._forEachChild((i) => {
        i.markAsUntouched({
          onlySelf: !0,
          emitEvent: t.emitEvent,
          sourceControl: e,
        });
      }),
        this._parent && !t.onlySelf && this._parent._updateTouched(t, e),
        o && t.emitEvent !== !1 && this._events.next(new rr(!1, e));
    }
    markAsDirty(t = {}) {
      let o = this.pristine === !0;
      this.pristine = !1;
      let e = t.sourceControl ?? this;
      this._parent &&
        !t.onlySelf &&
        this._parent.markAsDirty(nt(b({}, t), { sourceControl: e })),
        o && t.emitEvent !== !1 && this._events.next(new or(!1, e));
    }
    markAsPristine(t = {}) {
      let o = this.pristine === !1;
      (this.pristine = !0), (this._pendingDirty = !1);
      let e = t.sourceControl ?? this;
      this._forEachChild((i) => {
        i.markAsPristine({ onlySelf: !0, emitEvent: t.emitEvent });
      }),
        this._parent && !t.onlySelf && this._parent._updatePristine(t, e),
        o && t.emitEvent !== !1 && this._events.next(new or(!0, e));
    }
    markAsPending(t = {}) {
      this.status = Rn;
      let o = t.sourceControl ?? this;
      t.emitEvent !== !1 &&
        (this._events.next(new Fn(this.status, o)),
        this.statusChanges.emit(this.status)),
        this._parent &&
          !t.onlySelf &&
          this._parent.markAsPending(nt(b({}, t), { sourceControl: o }));
    }
    disable(t = {}) {
      let o = this._parentMarkedDirty(t.onlySelf);
      (this.status = ir),
        (this.errors = null),
        this._forEachChild((i) => {
          i.disable(nt(b({}, t), { onlySelf: !0 }));
        }),
        this._updateValue();
      let e = t.sourceControl ?? this;
      t.emitEvent !== !1 &&
        (this._events.next(new Ka(this.value, e)),
        this._events.next(new Fn(this.status, e)),
        this.valueChanges.emit(this.value),
        this.statusChanges.emit(this.status)),
        this._updateAncestors(nt(b({}, t), { skipPristineCheck: o }), this),
        this._onDisabledChange.forEach((i) => i(!0));
    }
    enable(t = {}) {
      let o = this._parentMarkedDirty(t.onlySelf);
      (this.status = er),
        this._forEachChild((e) => {
          e.enable(nt(b({}, t), { onlySelf: !0 }));
        }),
        this.updateValueAndValidity({ onlySelf: !0, emitEvent: t.emitEvent }),
        this._updateAncestors(nt(b({}, t), { skipPristineCheck: o }), this),
        this._onDisabledChange.forEach((e) => e(!1));
    }
    _updateAncestors(t, o) {
      this._parent &&
        !t.onlySelf &&
        (this._parent.updateValueAndValidity(t),
        t.skipPristineCheck || this._parent._updatePristine({}, o),
        this._parent._updateTouched({}, o));
    }
    setParent(t) {
      this._parent = t;
    }
    getRawValue() {
      return this.value;
    }
    updateValueAndValidity(t = {}) {
      if ((this._setInitialStatus(), this._updateValue(), this.enabled)) {
        let e = this._cancelExistingSubscription();
        (this.errors = this._runValidator()),
          (this.status = this._calculateStatus()),
          (this.status === er || this.status === Rn) &&
            this._runAsyncValidator(e, t.emitEvent);
      }
      let o = t.sourceControl ?? this;
      t.emitEvent !== !1 &&
        (this._events.next(new Ka(this.value, o)),
        this._events.next(new Fn(this.status, o)),
        this.valueChanges.emit(this.value),
        this.statusChanges.emit(this.status)),
        this._parent &&
          !t.onlySelf &&
          this._parent.updateValueAndValidity(
            nt(b({}, t), { sourceControl: o })
          );
    }
    _updateTreeValidity(t = { emitEvent: !0 }) {
      this._forEachChild((o) => o._updateTreeValidity(t)),
        this.updateValueAndValidity({ onlySelf: !0, emitEvent: t.emitEvent });
    }
    _setInitialStatus() {
      this.status = this._allControlsDisabled() ? ir : er;
    }
    _runValidator() {
      return this.validator ? this.validator(this) : null;
    }
    _runAsyncValidator(t, o) {
      if (this.asyncValidator) {
        (this.status = Rn),
          (this._hasOwnPendingAsyncValidator = { emitEvent: o !== !1 });
        let e = ep(this.asyncValidator(this));
        this._asyncValidationSubscription = e.subscribe((i) => {
          (this._hasOwnPendingAsyncValidator = null),
            this.setErrors(i, { emitEvent: o, shouldHaveEmitted: t });
        });
      }
    }
    _cancelExistingSubscription() {
      if (this._asyncValidationSubscription) {
        this._asyncValidationSubscription.unsubscribe();
        let t = this._hasOwnPendingAsyncValidator?.emitEvent ?? !1;
        return (this._hasOwnPendingAsyncValidator = null), t;
      }
      return !1;
    }
    setErrors(t, o = {}) {
      (this.errors = t),
        this._updateControlsErrors(
          o.emitEvent !== !1,
          this,
          o.shouldHaveEmitted
        );
    }
    get(t) {
      let o = t;
      return o == null ||
        (Array.isArray(o) || (o = o.split(".")), o.length === 0)
        ? null
        : o.reduce((e, i) => e && e._find(i), this);
    }
    getError(t, o) {
      let e = o ? this.get(o) : this;
      return e && e.errors ? e.errors[t] : null;
    }
    hasError(t, o) {
      return !!this.getError(t, o);
    }
    get root() {
      let t = this;
      for (; t._parent; ) t = t._parent;
      return t;
    }
    _updateControlsErrors(t, o, e) {
      (this.status = this._calculateStatus()),
        t && this.statusChanges.emit(this.status),
        (t || e) && this._events.next(new Fn(this.status, o)),
        this._parent && this._parent._updateControlsErrors(t, o, e);
    }
    _initObservables() {
      (this.valueChanges = new et()), (this.statusChanges = new et());
    }
    _calculateStatus() {
      return this._allControlsDisabled()
        ? ir
        : this.errors
        ? Ga
        : this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(Rn)
        ? Rn
        : this._anyControlsHaveStatus(Ga)
        ? Ga
        : er;
    }
    _anyControlsHaveStatus(t) {
      return this._anyControls((o) => o.status === t);
    }
    _anyControlsDirty() {
      return this._anyControls((t) => t.dirty);
    }
    _anyControlsTouched() {
      return this._anyControls((t) => t.touched);
    }
    _updatePristine(t, o) {
      let e = !this._anyControlsDirty(),
        i = this.pristine !== e;
      (this.pristine = e),
        this._parent && !t.onlySelf && this._parent._updatePristine(t, o),
        i && this._events.next(new or(this.pristine, o));
    }
    _updateTouched(t = {}, o) {
      (this.touched = this._anyControlsTouched()),
        this._events.next(new rr(this.touched, o)),
        this._parent && !t.onlySelf && this._parent._updateTouched(t, o);
    }
    _registerOnCollectionChange(t) {
      this._onCollectionChange = t;
    }
    _setUpdateStrategy(t) {
      es(t) && t.updateOn != null && (this._updateOn = t.updateOn);
    }
    _parentMarkedDirty(t) {
      let o = this._parent && this._parent.dirty;
      return !t && !!o && !this._parent._anyControlsDirty();
    }
    _find(t) {
      return null;
    }
    _assignValidators(t) {
      (this._rawValidators = Array.isArray(t) ? t.slice() : t),
        (this._composedValidatorFn = q0(this._rawValidators));
    }
    _assignAsyncValidators(t) {
      (this._rawAsyncValidators = Array.isArray(t) ? t.slice() : t),
        (this._composedAsyncValidatorFn = G0(this._rawAsyncValidators));
    }
  },
  Ln = class extends Pn {
    constructor(t, o, e) {
      super(Nl(o), jl(e, o)),
        (this.controls = t),
        this._initObservables(),
        this._setUpdateStrategy(o),
        this._setUpControls(),
        this.updateValueAndValidity({
          onlySelf: !0,
          emitEvent: !!this.asyncValidator,
        });
    }
    registerControl(t, o) {
      return this.controls[t]
        ? this.controls[t]
        : ((this.controls[t] = o),
          o.setParent(this),
          o._registerOnCollectionChange(this._onCollectionChange),
          o);
    }
    addControl(t, o, e = {}) {
      this.registerControl(t, o),
        this.updateValueAndValidity({ emitEvent: e.emitEvent }),
        this._onCollectionChange();
    }
    removeControl(t, o = {}) {
      this.controls[t] &&
        this.controls[t]._registerOnCollectionChange(() => {}),
        delete this.controls[t],
        this.updateValueAndValidity({ emitEvent: o.emitEvent }),
        this._onCollectionChange();
    }
    setControl(t, o, e = {}) {
      this.controls[t] &&
        this.controls[t]._registerOnCollectionChange(() => {}),
        delete this.controls[t],
        o && this.registerControl(t, o),
        this.updateValueAndValidity({ emitEvent: e.emitEvent }),
        this._onCollectionChange();
    }
    contains(t) {
      return this.controls.hasOwnProperty(t) && this.controls[t].enabled;
    }
    setValue(t, o = {}) {
      dp(this, !0, t),
        Object.keys(t).forEach((e) => {
          lp(this, !0, e),
            this.controls[e].setValue(t[e], {
              onlySelf: !0,
              emitEvent: o.emitEvent,
            });
        }),
        this.updateValueAndValidity(o);
    }
    patchValue(t, o = {}) {
      t != null &&
        (Object.keys(t).forEach((e) => {
          let i = this.controls[e];
          i && i.patchValue(t[e], { onlySelf: !0, emitEvent: o.emitEvent });
        }),
        this.updateValueAndValidity(o));
    }
    reset(t = {}, o = {}) {
      this._forEachChild((e, i) => {
        e.reset(t ? t[i] : null, { onlySelf: !0, emitEvent: o.emitEvent });
      }),
        this._updatePristine(o, this),
        this._updateTouched(o, this),
        this.updateValueAndValidity(o);
    }
    getRawValue() {
      return this._reduceChildren(
        {},
        (t, o, e) => ((t[e] = o.getRawValue()), t)
      );
    }
    _syncPendingControls() {
      let t = this._reduceChildren(!1, (o, e) =>
        e._syncPendingControls() ? !0 : o
      );
      return t && this.updateValueAndValidity({ onlySelf: !0 }), t;
    }
    _forEachChild(t) {
      Object.keys(this.controls).forEach((o) => {
        let e = this.controls[o];
        e && t(e, o);
      });
    }
    _setUpControls() {
      this._forEachChild((t) => {
        t.setParent(this),
          t._registerOnCollectionChange(this._onCollectionChange);
      });
    }
    _updateValue() {
      this.value = this._reduceValue();
    }
    _anyControls(t) {
      for (let [o, e] of Object.entries(this.controls))
        if (this.contains(o) && t(e)) return !0;
      return !1;
    }
    _reduceValue() {
      let t = {};
      return this._reduceChildren(
        t,
        (o, e, i) => ((e.enabled || this.disabled) && (o[i] = e.value), o)
      );
    }
    _reduceChildren(t, o) {
      let e = t;
      return (
        this._forEachChild((i, r) => {
          e = o(e, i, r);
        }),
        e
      );
    }
    _allControlsDisabled() {
      for (let t of Object.keys(this.controls))
        if (this.controls[t].enabled) return !1;
      return Object.keys(this.controls).length > 0 || this.disabled;
    }
    _find(t) {
      return this.controls.hasOwnProperty(t) ? this.controls[t] : null;
    }
  };
var Ml = class extends Ln {};
var zl = new w("CallSetDisabledState", {
    providedIn: "root",
    factory: () => Vl,
  }),
  Vl = "always";
function Y0(n, t) {
  return [...t.path, n];
}
function Tl(n, t, o = Vl) {
  Bl(n, t),
    t.valueAccessor.writeValue(n.value),
    (n.disabled || o === "always") &&
      t.valueAccessor.setDisabledState?.(n.disabled),
    Z0(n, t),
    K0(n, t),
    Q0(n, t),
    X0(n, t);
}
function qu(n, t, o = !0) {
  let e = () => {};
  t.valueAccessor &&
    (t.valueAccessor.registerOnChange(e), t.valueAccessor.registerOnTouched(e)),
    ts(n, t),
    n &&
      (t._invokeOnDestroyCallbacks(), n._registerOnCollectionChange(() => {}));
}
function Ja(n, t) {
  n.forEach((o) => {
    o.registerOnValidatorChange && o.registerOnValidatorChange(t);
  });
}
function X0(n, t) {
  if (t.valueAccessor.setDisabledState) {
    let o = (e) => {
      t.valueAccessor.setDisabledState(e);
    };
    n.registerOnDisabledChange(o),
      t._registerOnDestroy(() => {
        n._unregisterOnDisabledChange(o);
      });
  }
}
function Bl(n, t) {
  let o = sp(n);
  t.validator !== null
    ? n.setValidators(Hu(o, t.validator))
    : typeof o == "function" && n.setValidators([o]);
  let e = cp(n);
  t.asyncValidator !== null
    ? n.setAsyncValidators(Hu(e, t.asyncValidator))
    : typeof e == "function" && n.setAsyncValidators([e]);
  let i = () => n.updateValueAndValidity();
  Ja(t._rawValidators, i), Ja(t._rawAsyncValidators, i);
}
function ts(n, t) {
  let o = !1;
  if (n !== null) {
    if (t.validator !== null) {
      let i = sp(n);
      if (Array.isArray(i) && i.length > 0) {
        let r = i.filter((a) => a !== t.validator);
        r.length !== i.length && ((o = !0), n.setValidators(r));
      }
    }
    if (t.asyncValidator !== null) {
      let i = cp(n);
      if (Array.isArray(i) && i.length > 0) {
        let r = i.filter((a) => a !== t.asyncValidator);
        r.length !== i.length && ((o = !0), n.setAsyncValidators(r));
      }
    }
  }
  let e = () => {};
  return Ja(t._rawValidators, e), Ja(t._rawAsyncValidators, e), o;
}
function Z0(n, t) {
  t.valueAccessor.registerOnChange((o) => {
    (n._pendingValue = o),
      (n._pendingChange = !0),
      (n._pendingDirty = !0),
      n.updateOn === "change" && mp(n, t);
  });
}
function Q0(n, t) {
  t.valueAccessor.registerOnTouched(() => {
    (n._pendingTouched = !0),
      n.updateOn === "blur" && n._pendingChange && mp(n, t),
      n.updateOn !== "submit" && n.markAsTouched();
  });
}
function mp(n, t) {
  n._pendingDirty && n.markAsDirty(),
    n.setValue(n._pendingValue, { emitModelToViewChange: !1 }),
    t.viewToModelUpdate(n._pendingValue),
    (n._pendingChange = !1);
}
function K0(n, t) {
  let o = (e, i) => {
    t.valueAccessor.writeValue(e), i && t.viewToModelUpdate(e);
  };
  n.registerOnChange(o),
    t._registerOnDestroy(() => {
      n._unregisterOnChange(o);
    });
}
function hp(n, t) {
  n == null, Bl(n, t);
}
function J0(n, t) {
  return ts(n, t);
}
function tx(n, t) {
  if (!n.hasOwnProperty("model")) return !1;
  let o = n.model;
  return o.isFirstChange() ? !0 : !Object.is(t, o.currentValue);
}
function ex(n) {
  return Object.getPrototypeOf(n.constructor) === T0;
}
function up(n, t) {
  n._syncPendingControls(),
    t.forEach((o) => {
      let e = o.control;
      e.updateOn === "submit" &&
        e._pendingChange &&
        (o.viewToModelUpdate(e._pendingValue), (e._pendingChange = !1));
    });
}
function ix(n, t) {
  if (!t) return null;
  Array.isArray(t);
  let o, e, i;
  return (
    t.forEach((r) => {
      r.constructor === Se ? (o = r) : ex(r) ? (e = r) : (i = r);
    }),
    i || e || o || null
  );
}
function nx(n, t) {
  let o = n.indexOf(t);
  o > -1 && n.splice(o, 1);
}
var ox = { provide: fi, useExisting: Xn(() => ar) },
  nr = Promise.resolve(),
  ar = (() => {
    let t = class t extends fi {
      get submitted() {
        return Oe(this.submittedReactive);
      }
      constructor(e, i, r) {
        super(),
          (this.callSetDisabledState = r),
          (this._submitted = en(() => this.submittedReactive())),
          (this.submittedReactive = Ji(!1)),
          (this._directives = new Set()),
          (this.ngSubmit = new et()),
          (this.form = new Ln({}, Pl(e), Ll(i)));
      }
      ngAfterViewInit() {
        this._setUpdateStrategy();
      }
      get formDirective() {
        return this;
      }
      get control() {
        return this.form;
      }
      get path() {
        return [];
      }
      get controls() {
        return this.form.controls;
      }
      addControl(e) {
        nr.then(() => {
          let i = this._findContainer(e.path);
          (e.control = i.registerControl(e.name, e.control)),
            Tl(e.control, e, this.callSetDisabledState),
            e.control.updateValueAndValidity({ emitEvent: !1 }),
            this._directives.add(e);
        });
      }
      getControl(e) {
        return this.form.get(e.path);
      }
      removeControl(e) {
        nr.then(() => {
          let i = this._findContainer(e.path);
          i && i.removeControl(e.name), this._directives.delete(e);
        });
      }
      addFormGroup(e) {
        nr.then(() => {
          let i = this._findContainer(e.path),
            r = new Ln({});
          hp(r, e),
            i.registerControl(e.name, r),
            r.updateValueAndValidity({ emitEvent: !1 });
        });
      }
      removeFormGroup(e) {
        nr.then(() => {
          let i = this._findContainer(e.path);
          i && i.removeControl(e.name);
        });
      }
      getFormGroup(e) {
        return this.form.get(e.path);
      }
      updateModel(e, i) {
        nr.then(() => {
          this.form.get(e.path).setValue(i);
        });
      }
      setValue(e) {
        this.control.setValue(e);
      }
      onSubmit(e) {
        return (
          this.submittedReactive.set(!0),
          up(this.form, this._directives),
          this.ngSubmit.emit(e),
          e?.target?.method === "dialog"
        );
      }
      onReset() {
        this.resetForm();
      }
      resetForm(e = void 0) {
        this.form.reset(e), this.submittedReactive.set(!1);
      }
      _setUpdateStrategy() {
        this.options &&
          this.options.updateOn != null &&
          (this.form._updateOn = this.options.updateOn);
      }
      _findContainer(e) {
        return e.pop(), e.length ? this.form.get(e) : this.form;
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(Rl, 10), d(Fl, 10), d(zl, 8));
    }),
      (t.ɵdir = F({
        type: t,
        selectors: [
          ["form", 3, "ngNoForm", "", 3, "formGroup", ""],
          ["ng-form"],
          ["", "ngForm", ""],
        ],
        hostBindings: function (i, r) {
          i & 1 &&
            j("submit", function (s) {
              return r.onSubmit(s);
            })("reset", function () {
              return r.onReset();
            });
        },
        inputs: { options: [0, "ngFormOptions", "options"] },
        outputs: { ngSubmit: "ngSubmit" },
        exportAs: ["ngForm"],
        features: [Pt([ox]), ut],
      }));
    let n = t;
    return n;
  })();
function Gu(n, t) {
  let o = n.indexOf(t);
  o > -1 && n.splice(o, 1);
}
function Yu(n) {
  return (
    typeof n == "object" &&
    n !== null &&
    Object.keys(n).length === 2 &&
    "value" in n &&
    "disabled" in n
  );
}
var Ya = class extends Pn {
  constructor(t = null, o, e) {
    super(Nl(o), jl(e, o)),
      (this.defaultValue = null),
      (this._onChange = []),
      (this._pendingChange = !1),
      this._applyFormState(t),
      this._setUpdateStrategy(o),
      this._initObservables(),
      this.updateValueAndValidity({
        onlySelf: !0,
        emitEvent: !!this.asyncValidator,
      }),
      es(o) &&
        (o.nonNullable || o.initialValueIsDefault) &&
        (Yu(t) ? (this.defaultValue = t.value) : (this.defaultValue = t));
  }
  setValue(t, o = {}) {
    (this.value = this._pendingValue = t),
      this._onChange.length &&
        o.emitModelToViewChange !== !1 &&
        this._onChange.forEach((e) =>
          e(this.value, o.emitViewToModelChange !== !1)
        ),
      this.updateValueAndValidity(o);
  }
  patchValue(t, o = {}) {
    this.setValue(t, o);
  }
  reset(t = this.defaultValue, o = {}) {
    this._applyFormState(t),
      this.markAsPristine(o),
      this.markAsUntouched(o),
      this.setValue(this.value, o),
      (this._pendingChange = !1);
  }
  _updateValue() {}
  _anyControls(t) {
    return !1;
  }
  _allControlsDisabled() {
    return this.disabled;
  }
  registerOnChange(t) {
    this._onChange.push(t);
  }
  _unregisterOnChange(t) {
    Gu(this._onChange, t);
  }
  registerOnDisabledChange(t) {
    this._onDisabledChange.push(t);
  }
  _unregisterOnDisabledChange(t) {
    Gu(this._onDisabledChange, t);
  }
  _forEachChild(t) {}
  _syncPendingControls() {
    return this.updateOn === "submit" &&
      (this._pendingDirty && this.markAsDirty(),
      this._pendingTouched && this.markAsTouched(),
      this._pendingChange)
      ? (this.setValue(this._pendingValue, {
          onlySelf: !0,
          emitModelToViewChange: !1,
        }),
        !0)
      : !1;
  }
  _applyFormState(t) {
    Yu(t)
      ? ((this.value = this._pendingValue = t.value),
        t.disabled
          ? this.disable({ onlySelf: !0, emitEvent: !1 })
          : this.enable({ onlySelf: !0, emitEvent: !1 }))
      : (this.value = this._pendingValue = t);
  }
};
var rx = (n) => n instanceof Ya;
var vi = (() => {
  let t = class t {};
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵdir = F({
      type: t,
      selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
      hostAttrs: ["novalidate", ""],
    }));
  let n = t;
  return n;
})();
var pp = new w("");
var ax = { provide: fi, useExisting: Xn(() => Qt) },
  Qt = (() => {
    let t = class t extends fi {
      get submitted() {
        return Oe(this._submittedReactive);
      }
      set submitted(e) {
        this._submittedReactive.set(e);
      }
      constructor(e, i, r) {
        super(),
          (this.callSetDisabledState = r),
          (this._submitted = en(() => this._submittedReactive())),
          (this._submittedReactive = Ji(!1)),
          (this._onCollectionChange = () => this._updateDomValue()),
          (this.directives = []),
          (this.form = null),
          (this.ngSubmit = new et()),
          this._setValidators(e),
          this._setAsyncValidators(i);
      }
      ngOnChanges(e) {
        this._checkFormPresent(),
          e.hasOwnProperty("form") &&
            (this._updateValidators(),
            this._updateDomValue(),
            this._updateRegistrations(),
            (this._oldForm = this.form));
      }
      ngOnDestroy() {
        this.form &&
          (ts(this.form, this),
          this.form._onCollectionChange === this._onCollectionChange &&
            this.form._registerOnCollectionChange(() => {}));
      }
      get formDirective() {
        return this;
      }
      get control() {
        return this.form;
      }
      get path() {
        return [];
      }
      addControl(e) {
        let i = this.form.get(e.path);
        return (
          Tl(i, e, this.callSetDisabledState),
          i.updateValueAndValidity({ emitEvent: !1 }),
          this.directives.push(e),
          i
        );
      }
      getControl(e) {
        return this.form.get(e.path);
      }
      removeControl(e) {
        qu(e.control || null, e, !1), nx(this.directives, e);
      }
      addFormGroup(e) {
        this._setUpFormContainer(e);
      }
      removeFormGroup(e) {
        this._cleanUpFormContainer(e);
      }
      getFormGroup(e) {
        return this.form.get(e.path);
      }
      addFormArray(e) {
        this._setUpFormContainer(e);
      }
      removeFormArray(e) {
        this._cleanUpFormContainer(e);
      }
      getFormArray(e) {
        return this.form.get(e.path);
      }
      updateModel(e, i) {
        this.form.get(e.path).setValue(i);
      }
      onSubmit(e) {
        return (
          this._submittedReactive.set(!0),
          up(this.form, this.directives),
          this.ngSubmit.emit(e),
          this.form._events.next(new Dl(this.control)),
          e?.target?.method === "dialog"
        );
      }
      onReset() {
        this.resetForm();
      }
      resetForm(e = void 0) {
        this.form.reset(e),
          this._submittedReactive.set(!1),
          this.form._events.next(new Al(this.form));
      }
      _updateDomValue() {
        this.directives.forEach((e) => {
          let i = e.control,
            r = this.form.get(e.path);
          i !== r &&
            (qu(i || null, e),
            rx(r) && (Tl(r, e, this.callSetDisabledState), (e.control = r)));
        }),
          this.form._updateTreeValidity({ emitEvent: !1 });
      }
      _setUpFormContainer(e) {
        let i = this.form.get(e.path);
        hp(i, e), i.updateValueAndValidity({ emitEvent: !1 });
      }
      _cleanUpFormContainer(e) {
        if (this.form) {
          let i = this.form.get(e.path);
          i && J0(i, e) && i.updateValueAndValidity({ emitEvent: !1 });
        }
      }
      _updateRegistrations() {
        this.form._registerOnCollectionChange(this._onCollectionChange),
          this._oldForm && this._oldForm._registerOnCollectionChange(() => {});
      }
      _updateValidators() {
        Bl(this.form, this), this._oldForm && ts(this._oldForm, this);
      }
      _checkFormPresent() {
        this.form;
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(Rl, 10), d(Fl, 10), d(zl, 8));
    }),
      (t.ɵdir = F({
        type: t,
        selectors: [["", "formGroup", ""]],
        hostBindings: function (i, r) {
          i & 1 &&
            j("submit", function (s) {
              return r.onSubmit(s);
            })("reset", function () {
              return r.onReset();
            });
        },
        inputs: { form: [0, "formGroup", "form"] },
        outputs: { ngSubmit: "ngSubmit" },
        exportAs: ["ngForm"],
        features: [Pt([ax]), ut, zt],
      }));
    let n = t;
    return n;
  })();
var sx = { provide: He, useExisting: Xn(() => $e) },
  $e = (() => {
    let t = class t extends He {
      set isDisabled(e) {}
      constructor(e, i, r, a, s) {
        super(),
          (this._ngModelWarningConfig = s),
          (this._added = !1),
          (this.name = null),
          (this.update = new et()),
          (this._ngModelWarningSent = !1),
          (this._parent = e),
          this._setValidators(i),
          this._setAsyncValidators(r),
          (this.valueAccessor = ix(this, a));
      }
      ngOnChanges(e) {
        this._added || this._setUpControl(),
          tx(e, this.viewModel) &&
            ((this.viewModel = this.model),
            this.formDirective.updateModel(this, this.model));
      }
      ngOnDestroy() {
        this.formDirective && this.formDirective.removeControl(this);
      }
      viewToModelUpdate(e) {
        (this.viewModel = e), this.update.emit(e);
      }
      get path() {
        return Y0(
          this.name == null ? this.name : this.name.toString(),
          this._parent
        );
      }
      get formDirective() {
        return this._parent ? this._parent.formDirective : null;
      }
      _checkParentType() {}
      _setUpControl() {
        this._checkParentType(),
          (this.control = this.formDirective.addControl(this)),
          (this._added = !0);
      }
    };
    (t._ngModelWarningSentOnce = !1),
      (t.ɵfac = function (i) {
        return new (i || t)(
          d(fi, 13),
          d(Rl, 10),
          d(Fl, 10),
          d(Qu, 10),
          d(pp, 8)
        );
      }),
      (t.ɵdir = F({
        type: t,
        selectors: [["", "formControlName", ""]],
        inputs: {
          name: [0, "formControlName", "name"],
          isDisabled: [0, "disabled", "isDisabled"],
          model: [0, "ngModel", "model"],
        },
        outputs: { update: "ngModelChange" },
        features: [Pt([sx]), ut, zt],
      }));
    let n = t;
    return n;
  })();
var cx = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵmod = T({ type: t })),
      (t.ɵinj = M({}));
    let n = t;
    return n;
  })(),
  Ol = class extends Pn {
    constructor(t, o, e) {
      super(Nl(o), jl(e, o)),
        (this.controls = t),
        this._initObservables(),
        this._setUpdateStrategy(o),
        this._setUpControls(),
        this.updateValueAndValidity({
          onlySelf: !0,
          emitEvent: !!this.asyncValidator,
        });
    }
    at(t) {
      return this.controls[this._adjustIndex(t)];
    }
    push(t, o = {}) {
      this.controls.push(t),
        this._registerControl(t),
        this.updateValueAndValidity({ emitEvent: o.emitEvent }),
        this._onCollectionChange();
    }
    insert(t, o, e = {}) {
      this.controls.splice(t, 0, o),
        this._registerControl(o),
        this.updateValueAndValidity({ emitEvent: e.emitEvent });
    }
    removeAt(t, o = {}) {
      let e = this._adjustIndex(t);
      e < 0 && (e = 0),
        this.controls[e] &&
          this.controls[e]._registerOnCollectionChange(() => {}),
        this.controls.splice(e, 1),
        this.updateValueAndValidity({ emitEvent: o.emitEvent });
    }
    setControl(t, o, e = {}) {
      let i = this._adjustIndex(t);
      i < 0 && (i = 0),
        this.controls[i] &&
          this.controls[i]._registerOnCollectionChange(() => {}),
        this.controls.splice(i, 1),
        o && (this.controls.splice(i, 0, o), this._registerControl(o)),
        this.updateValueAndValidity({ emitEvent: e.emitEvent }),
        this._onCollectionChange();
    }
    get length() {
      return this.controls.length;
    }
    setValue(t, o = {}) {
      dp(this, !1, t),
        t.forEach((e, i) => {
          lp(this, !1, i),
            this.at(i).setValue(e, { onlySelf: !0, emitEvent: o.emitEvent });
        }),
        this.updateValueAndValidity(o);
    }
    patchValue(t, o = {}) {
      t != null &&
        (t.forEach((e, i) => {
          this.at(i) &&
            this.at(i).patchValue(e, { onlySelf: !0, emitEvent: o.emitEvent });
        }),
        this.updateValueAndValidity(o));
    }
    reset(t = [], o = {}) {
      this._forEachChild((e, i) => {
        e.reset(t[i], { onlySelf: !0, emitEvent: o.emitEvent });
      }),
        this._updatePristine(o, this),
        this._updateTouched(o, this),
        this.updateValueAndValidity(o);
    }
    getRawValue() {
      return this.controls.map((t) => t.getRawValue());
    }
    clear(t = {}) {
      this.controls.length < 1 ||
        (this._forEachChild((o) => o._registerOnCollectionChange(() => {})),
        this.controls.splice(0),
        this.updateValueAndValidity({ emitEvent: t.emitEvent }));
    }
    _adjustIndex(t) {
      return t < 0 ? t + this.length : t;
    }
    _syncPendingControls() {
      let t = this.controls.reduce(
        (o, e) => (e._syncPendingControls() ? !0 : o),
        !1
      );
      return t && this.updateValueAndValidity({ onlySelf: !0 }), t;
    }
    _forEachChild(t) {
      this.controls.forEach((o, e) => {
        t(o, e);
      });
    }
    _updateValue() {
      this.value = this.controls
        .filter((t) => t.enabled || this.disabled)
        .map((t) => t.value);
    }
    _anyControls(t) {
      return this.controls.some((o) => o.enabled && t(o));
    }
    _setUpControls() {
      this._forEachChild((t) => this._registerControl(t));
    }
    _allControlsDisabled() {
      for (let t of this.controls) if (t.enabled) return !1;
      return this.controls.length > 0 || this.disabled;
    }
    _registerControl(t) {
      t.setParent(this),
        t._registerOnCollectionChange(this._onCollectionChange);
    }
    _find(t) {
      return this.at(t) ?? null;
    }
  };
function Xu(n) {
  return (
    !!n &&
    (n.asyncValidators !== void 0 ||
      n.validators !== void 0 ||
      n.updateOn !== void 0)
  );
}
var xi = (() => {
  let t = class t {
    constructor() {
      this.useNonNullable = !1;
    }
    get nonNullable() {
      let e = new t();
      return (e.useNonNullable = !0), e;
    }
    group(e, i = null) {
      let r = this._reduceControls(e),
        a = {};
      return (
        Xu(i)
          ? (a = i)
          : i !== null &&
            ((a.validators = i.validator),
            (a.asyncValidators = i.asyncValidator)),
        new Ln(r, a)
      );
    }
    record(e, i = null) {
      let r = this._reduceControls(e);
      return new Ml(r, i);
    }
    control(e, i, r) {
      let a = {};
      return this.useNonNullable
        ? (Xu(i) ? (a = i) : ((a.validators = i), (a.asyncValidators = r)),
          new Ya(e, nt(b({}, a), { nonNullable: !0 })))
        : new Ya(e, i, r);
    }
    array(e, i, r) {
      let a = e.map((s) => this._createControl(s));
      return new Ol(a, i, r);
    }
    _reduceControls(e) {
      let i = {};
      return (
        Object.keys(e).forEach((r) => {
          i[r] = this._createControl(e[r]);
        }),
        i
      );
    }
    _createControl(e) {
      if (e instanceof Ya) return e;
      if (e instanceof Pn) return e;
      if (Array.isArray(e)) {
        let i = e[0],
          r = e.length > 1 ? e[1] : null,
          a = e.length > 2 ? e[2] : null;
        return this.control(i, r, a);
      } else return this.control(e);
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵprov = x({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let n = t;
  return n;
})();
var yi = (() => {
  let t = class t {
    static withConfig(e) {
      return {
        ngModule: t,
        providers: [
          { provide: pp, useValue: e.warnOnNgModelWithFormControl ?? "always" },
          { provide: zl, useValue: e.callSetDisabledState ?? Vl },
        ],
      };
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵmod = T({ type: t })),
    (t.ɵinj = M({ imports: [cx] }));
  let n = t;
  return n;
})();
var lx = ["*"];
var dx = [
    [
      ["", "mat-card-avatar", ""],
      ["", "matCardAvatar", ""],
    ],
    [
      ["mat-card-title"],
      ["mat-card-subtitle"],
      ["", "mat-card-title", ""],
      ["", "mat-card-subtitle", ""],
      ["", "matCardTitle", ""],
      ["", "matCardSubtitle", ""],
    ],
    "*",
  ],
  mx = [
    "[mat-card-avatar], [matCardAvatar]",
    `mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,
    "*",
  ],
  hx = new w("MAT_CARD_CONFIG"),
  wi = (() => {
    let t = class t {
      constructor(e) {
        this.appearance = e?.appearance || "raised";
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(hx, 8));
    }),
      (t.ɵcmp = z({
        type: t,
        selectors: [["mat-card"]],
        hostAttrs: [1, "mat-mdc-card", "mdc-card"],
        hostVars: 4,
        hostBindings: function (i, r) {
          i & 2 &&
            q("mat-mdc-card-outlined", r.appearance === "outlined")(
              "mdc-card--outlined",
              r.appearance === "outlined"
            );
        },
        inputs: { appearance: "appearance" },
        exportAs: ["matCard"],
        standalone: !0,
        features: [V],
        ngContentSelectors: lx,
        decls: 1,
        vars: 0,
        template: function (i, r) {
          i & 1 && (Ct(), Y(0));
        },
        styles: [
          '.mdc-card{display:flex;flex-direction:column;box-sizing:border-box}.mdc-card::after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none;pointer-events:none}@media screen and (forced-colors: active){.mdc-card::after{border-color:CanvasText}}.mdc-card--outlined::after{border:none}.mdc-card__content{border-radius:inherit;height:100%}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__media--square::before{margin-top:100%}.mdc-card__media--16-9::before{margin-top:56.25%}.mdc-card__media-content{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box}.mdc-card__primary-action{display:flex;flex-direction:column;box-sizing:border-box;position:relative;outline:none;color:inherit;text-decoration:none;cursor:pointer;overflow:hidden}.mdc-card__primary-action:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__primary-action:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mdc-card__actions--full-bleed{padding:0}.mdc-card__action-buttons,.mdc-card__action-icons{display:flex;flex-direction:row;align-items:center;box-sizing:border-box}.mdc-card__action-icons{color:rgba(0, 0, 0, 0.6);flex-grow:1;justify-content:flex-end}.mdc-card__action-buttons+.mdc-card__action-icons{margin-left:16px;margin-right:0}[dir=rtl] .mdc-card__action-buttons+.mdc-card__action-icons,.mdc-card__action-buttons+.mdc-card__action-icons[dir=rtl]{margin-left:0;margin-right:16px}.mdc-card__action{display:inline-flex;flex-direction:row;align-items:center;box-sizing:border-box;justify-content:center;cursor:pointer;user-select:none}.mdc-card__action:focus{outline:none}.mdc-card__action--button{margin-left:0;margin-right:8px;padding:0 8px}[dir=rtl] .mdc-card__action--button,.mdc-card__action--button[dir=rtl]{margin-left:8px;margin-right:0}.mdc-card__action--button:last-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-card__action--button:last-child,.mdc-card__action--button:last-child[dir=rtl]{margin-left:0;margin-right:0}.mdc-card__actions--full-bleed .mdc-card__action--button{justify-content:space-between;width:100%;height:auto;max-height:none;margin:0;padding:8px 16px;text-align:left}[dir=rtl] .mdc-card__actions--full-bleed .mdc-card__action--button,.mdc-card__actions--full-bleed .mdc-card__action--button[dir=rtl]{text-align:right}.mdc-card__action--icon{margin:-6px 0;padding:12px}.mdc-card__action--icon:not(:disabled){color:rgba(0, 0, 0, 0.6)}.mat-mdc-card{border-radius:var(--mdc-elevated-card-container-shape);background-color:var(--mdc-elevated-card-container-color);border-width:0;border-style:solid;border-color:var(--mdc-elevated-card-container-color);box-shadow:var(--mdc-elevated-card-container-elevation)}.mat-mdc-card .mdc-card::after{border-radius:var(--mdc-elevated-card-container-shape)}.mat-mdc-card-outlined{border-width:var(--mdc-outlined-card-outline-width);border-style:solid;border-color:var(--mdc-outlined-card-outline-color);border-radius:var(--mdc-outlined-card-container-shape);background-color:var(--mdc-outlined-card-container-color);box-shadow:var(--mdc-outlined-card-container-elevation)}.mat-mdc-card-outlined .mdc-card::after{border-radius:var(--mdc-outlined-card-container-shape)}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font);line-height:var(--mat-card-title-text-line-height);font-size:var(--mat-card-title-text-size);letter-spacing:var(--mat-card-title-text-tracking);font-weight:var(--mat-card-title-text-weight)}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color);font-family:var(--mat-card-subtitle-text-font);line-height:var(--mat-card-subtitle-text-line-height);font-size:var(--mat-card-subtitle-text-size);letter-spacing:var(--mat-card-subtitle-text-tracking);font-weight:var(--mat-card-subtitle-text-weight)}.mat-mdc-card{position:relative}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}',
        ],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let n = t;
    return n;
  })(),
  ki = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵdir = F({
        type: t,
        selectors: [
          ["mat-card-title"],
          ["", "mat-card-title", ""],
          ["", "matCardTitle", ""],
        ],
        hostAttrs: [1, "mat-mdc-card-title"],
        standalone: !0,
      }));
    let n = t;
    return n;
  })();
var Ci = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵdir = F({
        type: t,
        selectors: [["mat-card-content"]],
        hostAttrs: [1, "mat-mdc-card-content"],
        standalone: !0,
      }));
    let n = t;
    return n;
  })(),
  fp = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵdir = F({
        type: t,
        selectors: [
          ["mat-card-subtitle"],
          ["", "mat-card-subtitle", ""],
          ["", "matCardSubtitle", ""],
        ],
        hostAttrs: [1, "mat-mdc-card-subtitle"],
        standalone: !0,
      }));
    let n = t;
    return n;
  })();
var jn = (() => {
  let t = class t {};
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵcmp = z({
      type: t,
      selectors: [["mat-card-header"]],
      hostAttrs: [1, "mat-mdc-card-header"],
      standalone: !0,
      features: [V],
      ngContentSelectors: mx,
      decls: 4,
      vars: 0,
      consts: [[1, "mat-mdc-card-header-text"]],
      template: function (i, r) {
        i & 1 && (Ct(dx), Y(0), u(1, "div", 0), Y(2, 1), p(), Y(3, 2));
      },
      encapsulation: 2,
      changeDetection: 0,
    }));
  let n = t;
  return n;
})();
var Ei = (() => {
  let t = class t {};
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵmod = T({ type: t })),
    (t.ɵinj = M({ imports: [Q, yt, Q] }));
  let n = t;
  return n;
})();
var Ul = class {
    constructor(t) {
      (this._box = t),
        (this._destroyed = new E()),
        (this._resizeSubject = new E()),
        (this._elementObservables = new Map()),
        typeof ResizeObserver < "u" &&
          (this._resizeObserver = new ResizeObserver((o) =>
            this._resizeSubject.next(o)
          ));
    }
    observe(t) {
      return (
        this._elementObservables.has(t) ||
          this._elementObservables.set(
            t,
            new Jt((o) => {
              let e = this._resizeSubject.subscribe(o);
              return (
                this._resizeObserver?.observe(t, { box: this._box }),
                () => {
                  this._resizeObserver?.unobserve(t),
                    e.unsubscribe(),
                    this._elementObservables.delete(t);
                }
              );
            }).pipe(
              ht((o) => o.some((e) => e.target === t)),
              ys({ bufferSize: 1, refCount: !0 }),
              tt(this._destroyed)
            )
          ),
        this._elementObservables.get(t)
      );
    }
    destroy() {
      this._destroyed.next(),
        this._destroyed.complete(),
        this._resizeSubject.complete(),
        this._elementObservables.clear();
    }
  },
  gp = (() => {
    let t = class t {
      constructor() {
        (this._observers = new Map()),
          (this._ngZone = _(D)),
          typeof ResizeObserver < "u";
      }
      ngOnDestroy() {
        for (let [, e] of this._observers) e.destroy();
        this._observers.clear(), typeof ResizeObserver < "u";
      }
      observe(e, i) {
        let r = i?.box || "content-box";
        return (
          this._observers.has(r) || this._observers.set(r, new Ul(r)),
          this._observers.get(r).observe(e)
        );
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵprov = x({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })();
var ux = ["notch"],
  px = ["matFormFieldNotchedOutline", ""],
  fx = ["*"],
  gx = ["textField"],
  bx = ["iconPrefixContainer"],
  _x = ["textPrefixContainer"],
  vx = [
    "*",
    [["mat-label"]],
    [
      ["", "matPrefix", ""],
      ["", "matIconPrefix", ""],
    ],
    [["", "matTextPrefix", ""]],
    [["", "matTextSuffix", ""]],
    [
      ["", "matSuffix", ""],
      ["", "matIconSuffix", ""],
    ],
    [["mat-error"], ["", "matError", ""]],
    [["mat-hint", 3, "align", "end"]],
    [["mat-hint", "align", "end"]],
  ],
  xx = [
    "*",
    "mat-label",
    "[matPrefix], [matIconPrefix]",
    "[matTextPrefix]",
    "[matTextSuffix]",
    "[matSuffix], [matIconSuffix]",
    "mat-error, [matError]",
    "mat-hint:not([align='end'])",
    "mat-hint[align='end']",
  ];
function yx(n, t) {
  n & 1 && O(0, "span", 19);
}
function wx(n, t) {
  if (
    (n & 1 && (u(0, "label", 18), Y(1, 1), A(2, yx, 1, 0, "span", 19), p()),
    n & 2)
  ) {
    let o = P(2);
    C("floating", o._shouldLabelFloat())("monitorResize", o._hasOutline())(
      "id",
      o._labelId
    ),
      K("for", o._control.disableAutomaticLabeling ? null : o._control.id),
      v(2),
      ot(!o.hideRequiredMarker && o._control.required ? 2 : -1);
  }
}
function kx(n, t) {
  if ((n & 1 && A(0, wx, 3, 5, "label", 18), n & 2)) {
    let o = P();
    ot(o._hasFloatingLabel() ? 0 : -1);
  }
}
function Cx(n, t) {
  n & 1 && O(0, "div", 5);
}
function Ex(n, t) {}
function Sx(n, t) {
  if ((n & 1 && A(0, Ex, 0, 0, "ng-template", 11), n & 2)) {
    P(2);
    let o = Ke(1);
    C("ngTemplateOutlet", o);
  }
}
function Ix(n, t) {
  if ((n & 1 && (u(0, "div", 7), A(1, Sx, 1, 1, null, 11), p()), n & 2)) {
    let o = P();
    C("matFormFieldNotchedOutlineOpen", o._shouldLabelFloat()),
      v(),
      ot(o._forceDisplayInfixLabel() ? -1 : 1);
  }
}
function Dx(n, t) {
  n & 1 && (u(0, "div", 8, 2), Y(2, 2), p());
}
function Ax(n, t) {
  n & 1 && (u(0, "div", 9, 3), Y(2, 3), p());
}
function Mx(n, t) {}
function Tx(n, t) {
  if ((n & 1 && A(0, Mx, 0, 0, "ng-template", 11), n & 2)) {
    P();
    let o = Ke(1);
    C("ngTemplateOutlet", o);
  }
}
function Ox(n, t) {
  n & 1 && (u(0, "div", 12), Y(1, 4), p());
}
function Rx(n, t) {
  n & 1 && (u(0, "div", 13), Y(1, 5), p());
}
function Fx(n, t) {
  n & 1 && O(0, "div", 14);
}
function Px(n, t) {
  if ((n & 1 && (u(0, "div", 16), Y(1, 6), p()), n & 2)) {
    let o = P();
    C("@transitionMessages", o._subscriptAnimationState);
  }
}
function Lx(n, t) {
  if ((n & 1 && (u(0, "mat-hint", 20), y(1), p()), n & 2)) {
    let o = P(2);
    C("id", o._hintLabelId), v(), Et(o.hintLabel);
  }
}
function Nx(n, t) {
  if (
    (n & 1 &&
      (u(0, "div", 17),
      A(1, Lx, 2, 2, "mat-hint", 20),
      Y(2, 7),
      O(3, "div", 21),
      Y(4, 8),
      p()),
    n & 2)
  ) {
    let o = P();
    C("@transitionMessages", o._subscriptAnimationState),
      v(),
      ot(o.hintLabel ? 1 : -1);
  }
}
var zn = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵdir = F({ type: t, selectors: [["mat-label"]], standalone: !0 }));
    let n = t;
    return n;
  })(),
  jx = 0,
  Ep = new w("MatError"),
  Vn = (() => {
    let t = class t {
      constructor(e, i) {
        (this.id = `mat-mdc-error-${jx++}`),
          e || i.nativeElement.setAttribute("aria-live", "polite");
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(Xe("aria-live"), d(L));
    }),
      (t.ɵdir = F({
        type: t,
        selectors: [["mat-error"], ["", "matError", ""]],
        hostAttrs: [
          "aria-atomic",
          "true",
          1,
          "mat-mdc-form-field-error",
          "mat-mdc-form-field-bottom-align",
        ],
        hostVars: 1,
        hostBindings: function (i, r) {
          i & 2 && _e("id", r.id);
        },
        inputs: { id: "id" },
        standalone: !0,
        features: [Pt([{ provide: Ep, useExisting: t }])],
      }));
    let n = t;
    return n;
  })(),
  zx = 0,
  bp = (() => {
    let t = class t {
      constructor() {
        (this.align = "start"), (this.id = `mat-mdc-hint-${zx++}`);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵdir = F({
        type: t,
        selectors: [["mat-hint"]],
        hostAttrs: [
          1,
          "mat-mdc-form-field-hint",
          "mat-mdc-form-field-bottom-align",
        ],
        hostVars: 4,
        hostBindings: function (i, r) {
          i & 2 &&
            (_e("id", r.id),
            K("align", null),
            q("mat-mdc-form-field-hint-end", r.align === "end"));
        },
        inputs: { align: "align", id: "id" },
        standalone: !0,
      }));
    let n = t;
    return n;
  })(),
  Vx = new w("MatPrefix");
var Bx = new w("MatSuffix");
var Sp = new w("FloatingLabelParent"),
  _p = (() => {
    let t = class t {
      get floating() {
        return this._floating;
      }
      set floating(e) {
        (this._floating = e), this.monitorResize && this._handleResize();
      }
      get monitorResize() {
        return this._monitorResize;
      }
      set monitorResize(e) {
        (this._monitorResize = e),
          this._monitorResize
            ? this._subscribeToResize()
            : this._resizeSubscription.unsubscribe();
      }
      constructor(e) {
        (this._elementRef = e),
          (this._floating = !1),
          (this._monitorResize = !1),
          (this._resizeObserver = _(gp)),
          (this._ngZone = _(D)),
          (this._parent = _(Sp)),
          (this._resizeSubscription = new Lt());
      }
      ngOnDestroy() {
        this._resizeSubscription.unsubscribe();
      }
      getWidth() {
        return Ux(this._elementRef.nativeElement);
      }
      get element() {
        return this._elementRef.nativeElement;
      }
      _handleResize() {
        setTimeout(() => this._parent._handleLabelResized());
      }
      _subscribeToResize() {
        this._resizeSubscription.unsubscribe(),
          this._ngZone.runOutsideAngular(() => {
            this._resizeSubscription = this._resizeObserver
              .observe(this._elementRef.nativeElement, { box: "border-box" })
              .subscribe(() => this._handleResize());
          });
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(L));
    }),
      (t.ɵdir = F({
        type: t,
        selectors: [["label", "matFormFieldFloatingLabel", ""]],
        hostAttrs: [1, "mdc-floating-label", "mat-mdc-floating-label"],
        hostVars: 2,
        hostBindings: function (i, r) {
          i & 2 && q("mdc-floating-label--float-above", r.floating);
        },
        inputs: { floating: "floating", monitorResize: "monitorResize" },
        standalone: !0,
      }));
    let n = t;
    return n;
  })();
function Ux(n) {
  let t = n;
  if (t.offsetParent !== null) return t.scrollWidth;
  let o = t.cloneNode(!0);
  o.style.setProperty("position", "absolute"),
    o.style.setProperty("transform", "translate(-9999px, -9999px)"),
    document.documentElement.appendChild(o);
  let e = o.scrollWidth;
  return o.remove(), e;
}
var vp = "mdc-line-ripple--active",
  ns = "mdc-line-ripple--deactivating",
  xp = (() => {
    let t = class t {
      constructor(e, i) {
        (this._elementRef = e),
          (this._handleTransitionEnd = (r) => {
            let a = this._elementRef.nativeElement.classList,
              s = a.contains(ns);
            r.propertyName === "opacity" && s && a.remove(vp, ns);
          }),
          i.runOutsideAngular(() => {
            e.nativeElement.addEventListener(
              "transitionend",
              this._handleTransitionEnd
            );
          });
      }
      activate() {
        let e = this._elementRef.nativeElement.classList;
        e.remove(ns), e.add(vp);
      }
      deactivate() {
        this._elementRef.nativeElement.classList.add(ns);
      }
      ngOnDestroy() {
        this._elementRef.nativeElement.removeEventListener(
          "transitionend",
          this._handleTransitionEnd
        );
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(L), d(D));
    }),
      (t.ɵdir = F({
        type: t,
        selectors: [["div", "matFormFieldLineRipple", ""]],
        hostAttrs: [1, "mdc-line-ripple"],
        standalone: !0,
      }));
    let n = t;
    return n;
  })(),
  yp = (() => {
    let t = class t {
      constructor(e, i) {
        (this._elementRef = e), (this._ngZone = i), (this.open = !1);
      }
      ngAfterViewInit() {
        let e = this._elementRef.nativeElement.querySelector(
          ".mdc-floating-label"
        );
        e
          ? (this._elementRef.nativeElement.classList.add(
              "mdc-notched-outline--upgraded"
            ),
            typeof requestAnimationFrame == "function" &&
              ((e.style.transitionDuration = "0s"),
              this._ngZone.runOutsideAngular(() => {
                requestAnimationFrame(() => (e.style.transitionDuration = ""));
              })))
          : this._elementRef.nativeElement.classList.add(
              "mdc-notched-outline--no-label"
            );
      }
      _setNotchWidth(e) {
        !this.open || !e
          ? (this._notch.nativeElement.style.width = "")
          : (this._notch.nativeElement.style.width = `calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(L), d(D));
    }),
      (t.ɵcmp = z({
        type: t,
        selectors: [["div", "matFormFieldNotchedOutline", ""]],
        viewQuery: function (i, r) {
          if ((i & 1 && ft(ux, 5), i & 2)) {
            let a;
            X((a = Z())) && (r._notch = a.first);
          }
        },
        hostAttrs: [1, "mdc-notched-outline"],
        hostVars: 2,
        hostBindings: function (i, r) {
          i & 2 && q("mdc-notched-outline--notched", r.open);
        },
        inputs: { open: [0, "matFormFieldNotchedOutlineOpen", "open"] },
        standalone: !0,
        features: [V],
        attrs: px,
        ngContentSelectors: fx,
        decls: 5,
        vars: 0,
        consts: [
          ["notch", ""],
          [1, "mdc-notched-outline__leading"],
          [1, "mdc-notched-outline__notch"],
          [1, "mdc-notched-outline__trailing"],
        ],
        template: function (i, r) {
          i & 1 &&
            (Ct(),
            O(0, "div", 1),
            u(1, "div", 2, 0),
            Y(3),
            p(),
            O(4, "div", 3));
        },
        encapsulation: 2,
        changeDetection: 0,
      }));
    let n = t;
    return n;
  })(),
  Hx = {
    transitionMessages: Ri("transitionMessages", [
      Fi("enter", me({ opacity: 1, transform: "translateY(0%)" })),
      Fe("void => enter", [
        me({ opacity: 0, transform: "translateY(-5px)" }),
        Je("300ms cubic-bezier(0.55, 0, 0.55, 0.2)"),
      ]),
    ]),
  },
  sr = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵdir = F({ type: t }));
    let n = t;
    return n;
  })();
var cr = new w("MatFormField"),
  $x = new w("MAT_FORM_FIELD_DEFAULT_OPTIONS"),
  wp = 0,
  kp = "fill",
  Wx = "auto",
  Cp = "fixed",
  qx = "translateY(-50%)",
  Ie = (() => {
    let t = class t {
      get hideRequiredMarker() {
        return this._hideRequiredMarker;
      }
      set hideRequiredMarker(e) {
        this._hideRequiredMarker = Ee(e);
      }
      get floatLabel() {
        return this._floatLabel || this._defaults?.floatLabel || Wx;
      }
      set floatLabel(e) {
        e !== this._floatLabel &&
          ((this._floatLabel = e), this._changeDetectorRef.markForCheck());
      }
      get appearance() {
        return this._appearance;
      }
      set appearance(e) {
        let i = this._appearance,
          r = e || this._defaults?.appearance || kp;
        (this._appearance = r),
          this._appearance === "outline" &&
            this._appearance !== i &&
            (this._needsOutlineLabelOffsetUpdateOnStable = !0);
      }
      get subscriptSizing() {
        return this._subscriptSizing || this._defaults?.subscriptSizing || Cp;
      }
      set subscriptSizing(e) {
        this._subscriptSizing = e || this._defaults?.subscriptSizing || Cp;
      }
      get hintLabel() {
        return this._hintLabel;
      }
      set hintLabel(e) {
        (this._hintLabel = e), this._processHints();
      }
      get _control() {
        return this._explicitFormFieldControl || this._formFieldControl;
      }
      set _control(e) {
        this._explicitFormFieldControl = e;
      }
      constructor(e, i, r, a, s, c, l, m) {
        (this._elementRef = e),
          (this._changeDetectorRef = i),
          (this._ngZone = r),
          (this._dir = a),
          (this._platform = s),
          (this._defaults = c),
          (this._animationMode = l),
          (this._hideRequiredMarker = !1),
          (this.color = "primary"),
          (this._appearance = kp),
          (this._subscriptSizing = null),
          (this._hintLabel = ""),
          (this._hasIconPrefix = !1),
          (this._hasTextPrefix = !1),
          (this._hasIconSuffix = !1),
          (this._hasTextSuffix = !1),
          (this._labelId = `mat-mdc-form-field-label-${wp++}`),
          (this._hintLabelId = `mat-mdc-hint-${wp++}`),
          (this._subscriptAnimationState = ""),
          (this._destroyed = new E()),
          (this._isFocused = null),
          (this._needsOutlineLabelOffsetUpdateOnStable = !1),
          c &&
            (c.appearance && (this.appearance = c.appearance),
            (this._hideRequiredMarker = !!c?.hideRequiredMarker),
            c.color && (this.color = c.color));
      }
      ngAfterViewInit() {
        this._updateFocusState(),
          (this._subscriptAnimationState = "enter"),
          this._changeDetectorRef.detectChanges();
      }
      ngAfterContentInit() {
        this._assertFormFieldControl(),
          this._initializeControl(),
          this._initializeSubscript(),
          this._initializePrefixAndSuffix(),
          this._initializeOutlineLabelOffsetSubscriptions();
      }
      ngAfterContentChecked() {
        this._assertFormFieldControl();
      }
      ngOnDestroy() {
        this._destroyed.next(), this._destroyed.complete();
      }
      getLabelId() {
        return this._hasFloatingLabel() ? this._labelId : null;
      }
      getConnectedOverlayOrigin() {
        return this._textField || this._elementRef;
      }
      _animateAndLockLabel() {
        this._hasFloatingLabel() && (this.floatLabel = "always");
      }
      _initializeControl() {
        let e = this._control;
        e.controlType &&
          this._elementRef.nativeElement.classList.add(
            `mat-mdc-form-field-type-${e.controlType}`
          ),
          e.stateChanges.subscribe(() => {
            this._updateFocusState(),
              this._syncDescribedByIds(),
              this._changeDetectorRef.markForCheck();
          }),
          e.ngControl &&
            e.ngControl.valueChanges &&
            e.ngControl.valueChanges
              .pipe(tt(this._destroyed))
              .subscribe(() => this._changeDetectorRef.markForCheck());
      }
      _checkPrefixAndSuffixTypes() {
        (this._hasIconPrefix = !!this._prefixChildren.find((e) => !e._isText)),
          (this._hasTextPrefix = !!this._prefixChildren.find((e) => e._isText)),
          (this._hasIconSuffix = !!this._suffixChildren.find(
            (e) => !e._isText
          )),
          (this._hasTextSuffix = !!this._suffixChildren.find((e) => e._isText));
      }
      _initializePrefixAndSuffix() {
        this._checkPrefixAndSuffixTypes(),
          ge(
            this._prefixChildren.changes,
            this._suffixChildren.changes
          ).subscribe(() => {
            this._checkPrefixAndSuffixTypes(),
              this._changeDetectorRef.markForCheck();
          });
      }
      _initializeSubscript() {
        this._hintChildren.changes.subscribe(() => {
          this._processHints(), this._changeDetectorRef.markForCheck();
        }),
          this._errorChildren.changes.subscribe(() => {
            this._syncDescribedByIds(), this._changeDetectorRef.markForCheck();
          }),
          this._validateHints(),
          this._syncDescribedByIds();
      }
      _assertFormFieldControl() {
        this._control;
      }
      _updateFocusState() {
        this._control.focused && !this._isFocused
          ? ((this._isFocused = !0), this._lineRipple?.activate())
          : !this._control.focused &&
            (this._isFocused || this._isFocused === null) &&
            ((this._isFocused = !1), this._lineRipple?.deactivate()),
          this._textField?.nativeElement.classList.toggle(
            "mdc-text-field--focused",
            this._control.focused
          );
      }
      _initializeOutlineLabelOffsetSubscriptions() {
        this._prefixChildren.changes.subscribe(
          () => (this._needsOutlineLabelOffsetUpdateOnStable = !0)
        ),
          this._ngZone.runOutsideAngular(() => {
            this._ngZone.onStable.pipe(tt(this._destroyed)).subscribe(() => {
              this._needsOutlineLabelOffsetUpdateOnStable &&
                ((this._needsOutlineLabelOffsetUpdateOnStable = !1),
                this._updateOutlineLabelOffset());
            });
          }),
          this._dir.change
            .pipe(tt(this._destroyed))
            .subscribe(
              () => (this._needsOutlineLabelOffsetUpdateOnStable = !0)
            );
      }
      _shouldAlwaysFloat() {
        return this.floatLabel === "always";
      }
      _hasOutline() {
        return this.appearance === "outline";
      }
      _forceDisplayInfixLabel() {
        return (
          !this._platform.isBrowser &&
          this._prefixChildren.length &&
          !this._shouldLabelFloat()
        );
      }
      _hasFloatingLabel() {
        return !!this._labelChildNonStatic || !!this._labelChildStatic;
      }
      _shouldLabelFloat() {
        return this._control.shouldLabelFloat || this._shouldAlwaysFloat();
      }
      _shouldForward(e) {
        let i = this._control ? this._control.ngControl : null;
        return i && i[e];
      }
      _getDisplayedMessages() {
        return this._errorChildren &&
          this._errorChildren.length > 0 &&
          this._control.errorState
          ? "error"
          : "hint";
      }
      _handleLabelResized() {
        this._refreshOutlineNotchWidth();
      }
      _refreshOutlineNotchWidth() {
        !this._hasOutline() || !this._floatingLabel || !this._shouldLabelFloat()
          ? this._notchedOutline?._setNotchWidth(0)
          : this._notchedOutline?._setNotchWidth(
              this._floatingLabel.getWidth()
            );
      }
      _processHints() {
        this._validateHints(), this._syncDescribedByIds();
      }
      _validateHints() {
        this._hintChildren;
      }
      _syncDescribedByIds() {
        if (this._control) {
          let e = [];
          if (
            (this._control.userAriaDescribedBy &&
              typeof this._control.userAriaDescribedBy == "string" &&
              e.push(...this._control.userAriaDescribedBy.split(" ")),
            this._getDisplayedMessages() === "hint")
          ) {
            let i = this._hintChildren
                ? this._hintChildren.find((a) => a.align === "start")
                : null,
              r = this._hintChildren
                ? this._hintChildren.find((a) => a.align === "end")
                : null;
            i ? e.push(i.id) : this._hintLabel && e.push(this._hintLabelId),
              r && e.push(r.id);
          } else
            this._errorChildren &&
              e.push(...this._errorChildren.map((i) => i.id));
          this._control.setDescribedByIds(e);
        }
      }
      _updateOutlineLabelOffset() {
        if (
          !this._platform.isBrowser ||
          !this._hasOutline() ||
          !this._floatingLabel
        )
          return;
        let e = this._floatingLabel.element;
        if (!(this._iconPrefixContainer || this._textPrefixContainer)) {
          e.style.transform = "";
          return;
        }
        if (!this._isAttachedToDom()) {
          this._needsOutlineLabelOffsetUpdateOnStable = !0;
          return;
        }
        let i = this._iconPrefixContainer?.nativeElement,
          r = this._textPrefixContainer?.nativeElement,
          a = i?.getBoundingClientRect().width ?? 0,
          s = r?.getBoundingClientRect().width ?? 0,
          c = this._dir.value === "rtl" ? "-1" : "1",
          l = `${a + s}px`,
          f = `calc(${c} * (${l} + var(--mat-mdc-form-field-label-offset-x, 0px)))`;
        e.style.transform = `var(
        --mat-mdc-form-field-label-transform,
        ${qx} translateX(${f})
    )`;
      }
      _isAttachedToDom() {
        let e = this._elementRef.nativeElement;
        if (e.getRootNode) {
          let i = e.getRootNode();
          return i && i !== e;
        }
        return document.documentElement.contains(e);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(
        d(L),
        d(St),
        d(D),
        d(se),
        d(G),
        d($x, 8),
        d(At, 8),
        d(R)
      );
    }),
      (t.ɵcmp = z({
        type: t,
        selectors: [["mat-form-field"]],
        contentQueries: function (i, r, a) {
          if (
            (i & 1 &&
              (Vt(a, zn, 5),
              Vt(a, zn, 7),
              Vt(a, sr, 5),
              Vt(a, Vx, 5),
              Vt(a, Bx, 5),
              Vt(a, Ep, 5),
              Vt(a, bp, 5)),
            i & 2)
          ) {
            let s;
            X((s = Z())) && (r._labelChildNonStatic = s.first),
              X((s = Z())) && (r._labelChildStatic = s.first),
              X((s = Z())) && (r._formFieldControl = s.first),
              X((s = Z())) && (r._prefixChildren = s),
              X((s = Z())) && (r._suffixChildren = s),
              X((s = Z())) && (r._errorChildren = s),
              X((s = Z())) && (r._hintChildren = s);
          }
        },
        viewQuery: function (i, r) {
          if (
            (i & 1 &&
              (ft(gx, 5),
              ft(bx, 5),
              ft(_x, 5),
              ft(_p, 5),
              ft(yp, 5),
              ft(xp, 5)),
            i & 2)
          ) {
            let a;
            X((a = Z())) && (r._textField = a.first),
              X((a = Z())) && (r._iconPrefixContainer = a.first),
              X((a = Z())) && (r._textPrefixContainer = a.first),
              X((a = Z())) && (r._floatingLabel = a.first),
              X((a = Z())) && (r._notchedOutline = a.first),
              X((a = Z())) && (r._lineRipple = a.first);
          }
        },
        hostAttrs: [1, "mat-mdc-form-field"],
        hostVars: 42,
        hostBindings: function (i, r) {
          i & 2 &&
            q("mat-mdc-form-field-label-always-float", r._shouldAlwaysFloat())(
              "mat-mdc-form-field-has-icon-prefix",
              r._hasIconPrefix
            )("mat-mdc-form-field-has-icon-suffix", r._hasIconSuffix)(
              "mat-form-field-invalid",
              r._control.errorState
            )("mat-form-field-disabled", r._control.disabled)(
              "mat-form-field-autofilled",
              r._control.autofilled
            )(
              "mat-form-field-no-animations",
              r._animationMode === "NoopAnimations"
            )("mat-form-field-appearance-fill", r.appearance == "fill")(
              "mat-form-field-appearance-outline",
              r.appearance == "outline"
            )(
              "mat-form-field-hide-placeholder",
              r._hasFloatingLabel() && !r._shouldLabelFloat()
            )("mat-focused", r._control.focused)(
              "mat-primary",
              r.color !== "accent" && r.color !== "warn"
            )("mat-accent", r.color === "accent")(
              "mat-warn",
              r.color === "warn"
            )("ng-untouched", r._shouldForward("untouched"))(
              "ng-touched",
              r._shouldForward("touched")
            )("ng-pristine", r._shouldForward("pristine"))(
              "ng-dirty",
              r._shouldForward("dirty")
            )("ng-valid", r._shouldForward("valid"))(
              "ng-invalid",
              r._shouldForward("invalid")
            )("ng-pending", r._shouldForward("pending"));
        },
        inputs: {
          hideRequiredMarker: "hideRequiredMarker",
          color: "color",
          floatLabel: "floatLabel",
          appearance: "appearance",
          subscriptSizing: "subscriptSizing",
          hintLabel: "hintLabel",
        },
        exportAs: ["matFormField"],
        standalone: !0,
        features: [
          Pt([
            { provide: cr, useExisting: t },
            { provide: Sp, useExisting: t },
          ]),
          V,
        ],
        ngContentSelectors: xx,
        decls: 18,
        vars: 21,
        consts: [
          ["labelTemplate", ""],
          ["textField", ""],
          ["iconPrefixContainer", ""],
          ["textPrefixContainer", ""],
          [1, "mat-mdc-text-field-wrapper", "mdc-text-field", 3, "click"],
          [1, "mat-mdc-form-field-focus-overlay"],
          [1, "mat-mdc-form-field-flex"],
          [
            "matFormFieldNotchedOutline",
            "",
            3,
            "matFormFieldNotchedOutlineOpen",
          ],
          [1, "mat-mdc-form-field-icon-prefix"],
          [1, "mat-mdc-form-field-text-prefix"],
          [1, "mat-mdc-form-field-infix"],
          [3, "ngTemplateOutlet"],
          [1, "mat-mdc-form-field-text-suffix"],
          [1, "mat-mdc-form-field-icon-suffix"],
          ["matFormFieldLineRipple", ""],
          [
            1,
            "mat-mdc-form-field-subscript-wrapper",
            "mat-mdc-form-field-bottom-align",
          ],
          [1, "mat-mdc-form-field-error-wrapper"],
          [1, "mat-mdc-form-field-hint-wrapper"],
          [
            "matFormFieldFloatingLabel",
            "",
            3,
            "floating",
            "monitorResize",
            "id",
          ],
          [
            "aria-hidden",
            "true",
            1,
            "mat-mdc-form-field-required-marker",
            "mdc-floating-label--required",
          ],
          [3, "id"],
          [1, "mat-mdc-form-field-hint-spacer"],
        ],
        template: function (i, r) {
          if (i & 1) {
            let a = vt();
            Ct(vx),
              A(0, kx, 1, 1, "ng-template", null, 0, no),
              u(2, "div", 4, 1),
              j("click", function (c) {
                return st(a), ct(r._control.onContainerClick(c));
              }),
              A(4, Cx, 1, 0, "div", 5),
              u(5, "div", 6),
              A(6, Ix, 2, 2, "div", 7)(7, Dx, 3, 0, "div", 8)(
                8,
                Ax,
                3,
                0,
                "div",
                9
              ),
              u(9, "div", 10),
              A(10, Tx, 1, 1, null, 11),
              Y(11),
              p(),
              A(12, Ox, 2, 0, "div", 12)(13, Rx, 2, 0, "div", 13),
              p(),
              A(14, Fx, 1, 0, "div", 14),
              p(),
              u(15, "div", 15),
              A(16, Px, 2, 1, "div", 16)(17, Nx, 5, 2, "div", 17),
              p();
          }
          if (i & 2) {
            let a;
            v(2),
              q("mdc-text-field--filled", !r._hasOutline())(
                "mdc-text-field--outlined",
                r._hasOutline()
              )("mdc-text-field--no-label", !r._hasFloatingLabel())(
                "mdc-text-field--disabled",
                r._control.disabled
              )("mdc-text-field--invalid", r._control.errorState),
              v(2),
              ot(!r._hasOutline() && !r._control.disabled ? 4 : -1),
              v(2),
              ot(r._hasOutline() ? 6 : -1),
              v(),
              ot(r._hasIconPrefix ? 7 : -1),
              v(),
              ot(r._hasTextPrefix ? 8 : -1),
              v(2),
              ot(!r._hasOutline() || r._forceDisplayInfixLabel() ? 10 : -1),
              v(2),
              ot(r._hasTextSuffix ? 12 : -1),
              v(),
              ot(r._hasIconSuffix ? 13 : -1),
              v(),
              ot(r._hasOutline() ? -1 : 14),
              v(),
              q(
                "mat-mdc-form-field-subscript-dynamic-size",
                r.subscriptSizing === "dynamic"
              ),
              v(),
              ot(
                (a = r._getDisplayedMessages()) === "error"
                  ? 16
                  : a === "hint"
                  ? 17
                  : -1
              );
          }
        },
        dependencies: [_p, yp, Os, xp, bp],
        styles: [
          '.mdc-text-field{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0;display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-text-field__input{height:28px;width:100%;min-width:0;border:none;border-radius:0;background:none;appearance:none;padding:0}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input::-webkit-calendar-picker-indicator{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}@media all{.mdc-text-field__input::placeholder{opacity:0}}@media all{.mdc-text-field__input:-ms-input-placeholder{opacity:0}}@media all{.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{opacity:1}}@media all{.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{opacity:1}}.mdc-text-field__affix{height:28px;opacity:0;white-space:nowrap}.mdc-text-field--label-floating .mdc-text-field__affix,.mdc-text-field--no-label .mdc-text-field__affix{opacity:1}@supports(-webkit-hyphens: none){.mdc-text-field--outlined .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field__affix--prefix,.mdc-text-field__affix--prefix[dir=rtl]{padding-left:2px;padding-right:0}.mdc-text-field--end-aligned .mdc-text-field__affix--prefix{padding-left:0;padding-right:12px}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--end-aligned .mdc-text-field__affix--prefix[dir=rtl]{padding-left:12px;padding-right:0}.mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field__affix--suffix,.mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:12px}.mdc-text-field--end-aligned .mdc-text-field__affix--suffix{padding-left:2px;padding-right:0}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--end-aligned .mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:2px}.mdc-text-field--filled{height:56px}.mdc-text-field--filled::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-text-field--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-text-field--filled .mdc-floating-label,.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled.mdc-text-field--no-label::before{display:none}@supports(-webkit-hyphens: none){.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field--outlined{height:56px;overflow:visible}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--outlined .mdc-text-field__input{height:100%}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px,var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px,var(--mdc-shape-small, 4px))*2)}}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-text-field--outlined{padding-left:max(16px,calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px,var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-left:max(16px,calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-right:max(16px,var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-left:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-right:max(16px,var(--mdc-shape-small, 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-right:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:max(16px,var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-right:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-left:max(16px,calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-right:max(16px,calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:initial}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:rgba(0,0,0,0)}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mdc-text-field--textarea{flex-direction:column;align-items:center;width:auto;height:auto;padding:0}.mdc-text-field--textarea .mdc-floating-label{top:19px}.mdc-text-field--textarea .mdc-floating-label:not(.mdc-floating-label--float-above){transform:none}.mdc-text-field--textarea .mdc-text-field__input{flex-grow:1;height:auto;min-height:1.5rem;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;resize:none;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--filled::before{display:none}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-10.25px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--filled .mdc-text-field__input{margin-top:23px;margin-bottom:9px}.mdc-text-field--textarea.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label{top:18px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field__input{margin-bottom:2px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter{align-self:flex-end;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::after{display:inline-block;width:0;height:16px;content:"";vertical-align:-16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::before{display:none}.mdc-text-field__resizer{align-self:stretch;display:inline-flex;flex-direction:column;flex-grow:1;max-height:100%;max-width:100%;min-height:56px;min-width:fit-content;min-width:-moz-available;min-width:-webkit-fill-available;overflow:hidden;resize:both}.mdc-text-field--filled .mdc-text-field__resizer{transform:translateY(-1px)}.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateY(1px)}.mdc-text-field--outlined .mdc-text-field__resizer{transform:translateX(-1px) translateY(-1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer,.mdc-text-field--outlined .mdc-text-field__resizer[dir=rtl]{transform:translateX(1px) translateY(-1px)}.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateX(1px) translateY(1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input[dir=rtl],.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter[dir=rtl]{transform:translateX(-1px) translateY(1px)}.mdc-text-field--with-leading-icon{padding-left:0;padding-right:16px}[dir=rtl] .mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:16px;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px);left:48px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 64px/0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--with-trailing-icon{padding-left:16px;padding-right:0}[dir=rtl] .mdc-text-field--with-trailing-icon,.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 64px/0.75)}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 96px/0.75)}.mdc-text-field-helper-line{display:flex;justify-content:space-between;box-sizing:border-box}.mdc-text-field+.mdc-text-field-helper-line{padding-right:16px;padding-left:16px}.mdc-form-field>.mdc-text-field+label{align-self:flex-start}.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--focused+.mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){opacity:1}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-text-field--focused.mdc-text-field--outlined.mdc-text-field--textarea .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{opacity:1}.mdc-text-field--disabled{pointer-events:none}@media screen and (forced-colors: active){.mdc-text-field--disabled .mdc-text-field__input{background-color:Window}.mdc-text-field--disabled .mdc-floating-label{z-index:1}}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.mdc-text-field--disabled.mdc-text-field--filled .mdc-text-field__ripple{display:none}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--end-aligned .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--end-aligned .mdc-text-field__input[dir=rtl]{text-align:left}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix{direction:ltr}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--leading,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--leading{order:1}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{order:2}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input{order:3}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{order:4}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--trailing,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--trailing{order:5}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--prefix{padding-right:12px}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--suffix{padding-left:2px}.mdc-floating-label{position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after,.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;pointer-events:none}.mdc-notched-outline__trailing{flex-grow:1}.mdc-notched-outline__notch{flex:0 0 auto;width:auto}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:133.3333333333%}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{z-index:1}.mdc-line-ripple::after{transform:scaleX(0);opacity:0;z-index:2}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{border-top:1px solid;border-bottom:1px solid}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{max-width:calc(100% - 12px*2)}.mdc-line-ripple::before{border-bottom-width:1px}.mdc-line-ripple::after{border-bottom-width:2px}.mdc-text-field--filled{border-top-left-radius:var(--mdc-filled-text-field-container-shape);border-top-right-radius:var(--mdc-filled-text-field-container-shape);border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mdc-filled-text-field-caret-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mdc-filled-text-field-error-caret-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--mdc-filled-text-field-input-text-color)}.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input{color:var(--mdc-filled-text-field-disabled-input-text-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label,.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-label-text-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label,.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-focus-label-text-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label,.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-hover-label-text-color)}.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label,.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-disabled-label-text-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label,.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-error-label-text-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label,.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-error-focus-label-text-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label,.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-error-hover-label-text-color)}.mdc-text-field--filled .mdc-floating-label{font-family:var(--mdc-filled-text-field-label-text-font);font-size:var(--mdc-filled-text-field-label-text-size);font-weight:var(--mdc-filled-text-field-label-text-weight);letter-spacing:var(--mdc-filled-text-field-label-text-tracking)}@media all{.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:var(--mdc-filled-text-field-input-text-placeholder-color)}}@media all{.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:var(--mdc-filled-text-field-input-text-placeholder-color)}}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:var(--mdc-filled-text-field-container-color)}.mdc-text-field--filled.mdc-text-field--disabled{background-color:var(--mdc-filled-text-field-disabled-container-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-active-indicator-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-hover-active-indicator-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:var(--mdc-filled-text-field-focus-active-indicator-color)}.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-disabled-active-indicator-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-error-active-indicator-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-error-hover-active-indicator-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:var(--mdc-filled-text-field-error-focus-active-indicator-color)}.mdc-text-field--filled .mdc-line-ripple::before{border-bottom-width:var(--mdc-filled-text-field-active-indicator-height)}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-width:var(--mdc-filled-text-field-focus-active-indicator-height)}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mdc-outlined-text-field-caret-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mdc-outlined-text-field-error-caret-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--mdc-outlined-text-field-input-text-color)}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input{color:var(--mdc-outlined-text-field-disabled-input-text-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-label-text-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-focus-label-text-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-hover-label-text-color)}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label,.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-disabled-label-text-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-error-label-text-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-error-focus-label-text-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-error-hover-label-text-color)}.mdc-text-field--outlined .mdc-floating-label{font-family:var(--mdc-outlined-text-field-label-text-font);font-size:var(--mdc-outlined-text-field-label-text-size);font-weight:var(--mdc-outlined-text-field-label-text-weight);letter-spacing:var(--mdc-outlined-text-field-label-text-tracking)}@media all{.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:var(--mdc-outlined-text-field-input-text-placeholder-color)}}@media all{.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:var(--mdc-outlined-text-field-input-text-placeholder-color)}}.mdc-text-field--outlined.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:calc(.75*var(--mdc-outlined-text-field-label-text-size))}.mdc-text-field--outlined.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:var(--mdc-outlined-text-field-label-text-size)}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:var(--mdc-outlined-text-field-container-shape);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:var(--mdc-outlined-text-field-container-shape)}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:var(--mdc-outlined-text-field-container-shape);border-bottom-right-radius:var(--mdc-outlined-text-field-container-shape);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px,var(--mdc-outlined-text-field-container-shape))}}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px,var(--mdc-outlined-text-field-container-shape))*2)}}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:var(--mdc-outlined-text-field-container-shape);border-bottom-right-radius:var(--mdc-outlined-text-field-container-shape);border-bottom-left-radius:0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:var(--mdc-outlined-text-field-container-shape);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:var(--mdc-outlined-text-field-container-shape)}@supports(top: max(0%)){.mdc-text-field--outlined{padding-left:max(16px,calc(var(--mdc-outlined-text-field-container-shape) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px,var(--mdc-outlined-text-field-container-shape))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-left:max(16px,calc(var(--mdc-outlined-text-field-container-shape) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-right:max(16px,var(--mdc-outlined-text-field-container-shape))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-left:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-right:max(16px,var(--mdc-outlined-text-field-container-shape))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-right:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:max(16px,var(--mdc-outlined-text-field-container-shape))}}.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-right:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-left:max(16px,calc(var(--mdc-outlined-text-field-container-shape) + 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-right:max(16px,calc(var(--mdc-outlined-text-field-container-shape) + 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-outline-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-hover-outline-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-focus-outline-color)}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-disabled-outline-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-error-outline-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-error-hover-outline-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-error-focus-outline-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline .mdc-notched-outline__trailing{border-width:var(--mdc-outlined-text-field-outline-width)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:var(--mdc-outlined-text-field-focus-outline-width)}.mat-mdc-form-field-textarea-control{vertical-align:middle;resize:vertical;box-sizing:border-box;height:auto;margin:0;padding:0;border:none;overflow:auto}.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font:inherit;letter-spacing:inherit;text-decoration:inherit;text-transform:inherit;border:none}.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;line-height:normal;pointer-events:all;will-change:auto}.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label{cursor:inherit}.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control{height:auto}.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color]{height:23px}.mat-mdc-text-field-wrapper{height:auto;flex:auto;will-change:auto}.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper{padding-left:0;--mat-mdc-form-field-label-offset-x: -16px}.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{padding-right:0}[dir=rtl] .mat-mdc-text-field-wrapper{padding-left:16px;padding-right:16px}[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{padding-left:0}[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper{padding-right:0}.mat-form-field-disabled .mdc-text-field__input::placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color)}.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color)}.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color)}.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color)}.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label{left:auto;right:auto}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input{display:inline-block}.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch{padding-top:0}.mat-mdc-text-field-wrapper::before{content:none}.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:1px solid rgba(0,0,0,0)}[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:none;border-right:1px solid rgba(0,0,0,0)}.mat-mdc-form-field-infix{min-height:var(--mat-form-field-container-height);padding-top:var(--mat-form-field-filled-with-label-container-padding-top);padding-bottom:var(--mat-form-field-filled-with-label-container-padding-bottom)}.mdc-text-field--outlined .mat-mdc-form-field-infix,.mdc-text-field--no-label .mat-mdc-form-field-infix{padding-top:var(--mat-form-field-container-vertical-padding);padding-bottom:var(--mat-form-field-container-vertical-padding)}.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label{top:calc(var(--mat-form-field-container-height)/2)}.mdc-text-field--filled .mat-mdc-floating-label{display:var(--mat-form-field-filled-label-display, block)}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{--mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height) / 2) * -1)) scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));transform:var(--mat-mdc-form-field-label-transform)}.mat-mdc-form-field-subscript-wrapper{box-sizing:border-box;width:100%;position:relative}.mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field-error-wrapper{position:absolute;top:0;left:0;right:0;padding:0 16px}.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper{position:static}.mat-mdc-form-field-bottom-align::before{content:"";display:inline-block;height:16px}.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before{content:unset}.mat-mdc-form-field-hint-end{order:1}.mat-mdc-form-field-hint-wrapper{display:flex}.mat-mdc-form-field-hint-spacer{flex:1 0 1em}.mat-mdc-form-field-error{display:block;color:var(--mat-form-field-error-text-color)}.mat-mdc-form-field-subscript-wrapper,.mat-mdc-form-field-bottom-align::before{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-form-field-subscript-text-font);line-height:var(--mat-form-field-subscript-text-line-height);font-size:var(--mat-form-field-subscript-text-size);letter-spacing:var(--mat-form-field-subscript-text-tracking);font-weight:var(--mat-form-field-subscript-text-weight)}.mat-mdc-form-field-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;opacity:0;pointer-events:none;background-color:var(--mat-form-field-state-layer-color)}.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay{opacity:var(--mat-form-field-hover-state-layer-opacity)}.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay{opacity:var(--mat-form-field-focus-state-layer-opacity)}select.mat-mdc-form-field-input-control{-moz-appearance:none;-webkit-appearance:none;background-color:rgba(0,0,0,0);display:inline-flex;box-sizing:border-box}select.mat-mdc-form-field-input-control:not(:disabled){cursor:pointer}select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option{color:var(--mat-form-field-select-option-text-color)}select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled{color:var(--mat-form-field-select-disabled-option-text-color)}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after{content:"";width:0;height:0;border-left:5px solid rgba(0,0,0,0);border-right:5px solid rgba(0,0,0,0);border-top:5px solid;position:absolute;right:0;top:50%;margin-top:-2.5px;pointer-events:none;color:var(--mat-form-field-enabled-select-arrow-color)}[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after{right:auto;left:0}.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after{color:var(--mat-form-field-focus-select-arrow-color)}.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after{color:var(--mat-form-field-disabled-select-arrow-color)}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control{padding-right:15px}[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control{padding-right:0;padding-left:15px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper{outline:solid 1px}.cdk-high-contrast-active .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper{outline-color:GrayText}.cdk-high-contrast-active .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper{outline:dashed 3px}.cdk-high-contrast-active .mat-mdc-form-field.mat-focused .mdc-notched-outline{border:dashed 3px}.mat-mdc-form-field-input-control[type=date],.mat-mdc-form-field-input-control[type=datetime],.mat-mdc-form-field-input-control[type=datetime-local],.mat-mdc-form-field-input-control[type=month],.mat-mdc-form-field-input-control[type=week],.mat-mdc-form-field-input-control[type=time]{line-height:1}.mat-mdc-form-field-input-control::-webkit-datetime-edit{line-height:1;padding:0;margin-bottom:-2px}.mat-mdc-form-field{--mat-mdc-form-field-floating-label-scale: 0.75;display:inline-flex;flex-direction:column;min-width:0;text-align:left;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-form-field-container-text-font);line-height:var(--mat-form-field-container-text-line-height);font-size:var(--mat-form-field-container-text-size);letter-spacing:var(--mat-form-field-container-text-tracking);font-weight:var(--mat-form-field-container-text-weight)}[dir=rtl] .mat-mdc-form-field{text-align:right}.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above{font-size:calc(var(--mat-form-field-outlined-label-text-populated-size)*var(--mat-mdc-form-field-floating-label-scale))}.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:var(--mat-form-field-outlined-label-text-populated-size)}.mat-mdc-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-mdc-text-field-wrapper{width:100%;z-index:0}.mat-mdc-form-field-icon-prefix,.mat-mdc-form-field-icon-suffix{align-self:center;line-height:0;pointer-events:auto;position:relative;z-index:1}.mat-mdc-form-field-icon-prefix>.mat-icon,.mat-mdc-form-field-icon-suffix>.mat-icon{padding:0 12px;box-sizing:content-box}.mat-mdc-form-field-icon-prefix{color:var(--mat-form-field-leading-icon-color)}.mat-form-field-disabled .mat-mdc-form-field-icon-prefix{color:var(--mat-form-field-disabled-leading-icon-color)}.mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-trailing-icon-color)}.mat-form-field-disabled .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-disabled-trailing-icon-color)}.mat-form-field-invalid .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-trailing-icon-color)}.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-hover-trailing-icon-color)}.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-focus-trailing-icon-color)}.mat-mdc-form-field-icon-prefix,[dir=rtl] .mat-mdc-form-field-icon-suffix{padding:0 4px 0 0}.mat-mdc-form-field-icon-suffix,[dir=rtl] .mat-mdc-form-field-icon-prefix{padding:0 0 0 4px}.mat-mdc-form-field-subscript-wrapper .mat-icon,.mat-mdc-form-field label .mat-icon{width:1em;height:1em;font-size:inherit}.mat-mdc-form-field-infix{flex:auto;min-width:0;width:180px;position:relative;box-sizing:border-box}.mat-mdc-form-field .mdc-notched-outline__notch{margin-left:-1px;-webkit-clip-path:inset(-9em -999em -9em 1px);clip-path:inset(-9em -999em -9em 1px)}[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch{margin-left:0;margin-right:-1px;-webkit-clip-path:inset(-9em 1px -9em -999em);clip-path:inset(-9em 1px -9em -999em)}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input{transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}@media all{.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input::placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}}@media all{.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}}@media all{.mdc-text-field--no-label .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input::placeholder,.mdc-text-field--focused .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms}}@media all{.mdc-text-field--no-label .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__affix{transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--filled.mdc-ripple-upgraded--background-focused .mdc-text-field__ripple::before,.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 34.75px)) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(calc(0% - 34.75px)) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(calc(0% - 34.75px)) scale(0.75)}100%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 34.75px)) scale(0.75)}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--textarea{transition:none}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-filled 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-filled{0%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 10.25px)) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(calc(0% - 10.25px)) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(calc(0% - 10.25px)) scale(0.75)}100%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 10.25px)) scale(0.75)}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-outlined{0%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 24.75px)) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(calc(0% - 24.75px)) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(calc(0% - 24.75px)) scale(0.75)}100%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 24.75px)) scale(0.75)}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{transform:translateX(calc(0% - 32px)) translateY(calc(0% - 34.75px)) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(calc(0% - 34.75px)) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(calc(0% - 34.75px)) scale(0.75)}100%{transform:translateX(calc(0% - 32px)) translateY(calc(0% - 34.75px)) scale(0.75)}}[dir=rtl] .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake,.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{transform:translateX(calc(0% - -32px)) translateY(calc(0% - 34.75px)) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(calc(0% - 34.75px)) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(calc(0% - 34.75px)) scale(0.75)}100%{transform:translateX(calc(0% - -32px)) translateY(calc(0% - 34.75px)) scale(0.75)}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-floating-label{transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 106%)) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(calc(0% - 106%)) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(calc(0% - 106%)) scale(0.75)}100%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 106%)) scale(0.75)}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-notched-outline .mdc-floating-label{max-width:calc(100% + 1px)}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(133.3333333333% + 1px)}',
        ],
        encapsulation: 2,
        data: { animation: [Hx.transitionMessages] },
        changeDetection: 0,
      }));
    let n = t;
    return n;
  })(),
  Kt = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵmod = T({ type: t })),
      (t.ɵinj = M({ imports: [Q, yt, yn, Q] }));
    let n = t;
    return n;
  })();
var Ip = Ce({ passive: !0 }),
  Dp = (() => {
    let t = class t {
      constructor(e, i) {
        (this._platform = e),
          (this._ngZone = i),
          (this._monitoredElements = new Map());
      }
      monitor(e) {
        if (!this._platform.isBrowser) return fe;
        let i = ae(e),
          r = this._monitoredElements.get(i);
        if (r) return r.subject;
        let a = new E(),
          s = "cdk-text-field-autofilled",
          c = (l) => {
            l.animationName === "cdk-text-field-autofill-start" &&
            !i.classList.contains(s)
              ? (i.classList.add(s),
                this._ngZone.run(() =>
                  a.next({ target: l.target, isAutofilled: !0 })
                ))
              : l.animationName === "cdk-text-field-autofill-end" &&
                i.classList.contains(s) &&
                (i.classList.remove(s),
                this._ngZone.run(() =>
                  a.next({ target: l.target, isAutofilled: !1 })
                ));
          };
        return (
          this._ngZone.runOutsideAngular(() => {
            i.addEventListener("animationstart", c, Ip),
              i.classList.add("cdk-text-field-autofill-monitored");
          }),
          this._monitoredElements.set(i, {
            subject: a,
            unlisten: () => {
              i.removeEventListener("animationstart", c, Ip);
            },
          }),
          a
        );
      }
      stopMonitoring(e) {
        let i = ae(e),
          r = this._monitoredElements.get(i);
        r &&
          (r.unlisten(),
          r.subject.complete(),
          i.classList.remove("cdk-text-field-autofill-monitored"),
          i.classList.remove("cdk-text-field-autofilled"),
          this._monitoredElements.delete(i));
      }
      ngOnDestroy() {
        this._monitoredElements.forEach((e, i) => this.stopMonitoring(i));
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(h(G), h(D));
    }),
      (t.ɵprov = x({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })();
var Ap = (() => {
  let t = class t {};
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵmod = T({ type: t })),
    (t.ɵinj = M({}));
  let n = t;
  return n;
})();
var Yx = new w("MAT_INPUT_VALUE_ACCESSOR"),
  Xx = [
    "button",
    "checkbox",
    "file",
    "hidden",
    "image",
    "radio",
    "range",
    "reset",
    "submit",
  ],
  Zx = 0,
  Bn = (() => {
    let t = class t {
      get disabled() {
        return this._disabled;
      }
      set disabled(e) {
        (this._disabled = Ee(e)),
          this.focused && ((this.focused = !1), this.stateChanges.next());
      }
      get id() {
        return this._id;
      }
      set id(e) {
        this._id = e || this._uid;
      }
      get required() {
        return (
          this._required ??
          this.ngControl?.control?.hasValidator(bt.required) ??
          !1
        );
      }
      set required(e) {
        this._required = Ee(e);
      }
      get type() {
        return this._type;
      }
      set type(e) {
        (this._type = e || "text"),
          this._validateType(),
          !this._isTextarea &&
            Rc().has(this._type) &&
            (this._elementRef.nativeElement.type = this._type);
      }
      get errorStateMatcher() {
        return this._errorStateTracker.matcher;
      }
      set errorStateMatcher(e) {
        this._errorStateTracker.matcher = e;
      }
      get value() {
        return this._inputValueAccessor.value;
      }
      set value(e) {
        e !== this.value &&
          ((this._inputValueAccessor.value = e), this.stateChanges.next());
      }
      get readonly() {
        return this._readonly;
      }
      set readonly(e) {
        this._readonly = Ee(e);
      }
      get errorState() {
        return this._errorStateTracker.errorState;
      }
      set errorState(e) {
        this._errorStateTracker.errorState = e;
      }
      constructor(e, i, r, a, s, c, l, m, f, g) {
        (this._elementRef = e),
          (this._platform = i),
          (this.ngControl = r),
          (this._autofillMonitor = m),
          (this._formField = g),
          (this._uid = `mat-input-${Zx++}`),
          (this.focused = !1),
          (this.stateChanges = new E()),
          (this.controlType = "mat-input"),
          (this.autofilled = !1),
          (this._disabled = !1),
          (this._type = "text"),
          (this._readonly = !1),
          (this._neverEmptyInputTypes = [
            "date",
            "datetime",
            "datetime-local",
            "month",
            "time",
            "week",
          ].filter(($) => Rc().has($))),
          (this._iOSKeyupListener = ($) => {
            let N = $.target;
            !N.value &&
              N.selectionStart === 0 &&
              N.selectionEnd === 0 &&
              (N.setSelectionRange(1, 1), N.setSelectionRange(0, 0));
          });
        let k = this._elementRef.nativeElement,
          S = k.nodeName.toLowerCase();
        (this._inputValueAccessor = l || k),
          (this._previousNativeValue = this.value),
          (this.id = this.id),
          i.IOS &&
            f.runOutsideAngular(() => {
              e.nativeElement.addEventListener("keyup", this._iOSKeyupListener);
            }),
          (this._errorStateTracker = new Cn(c, r, s, a, this.stateChanges)),
          (this._isServer = !this._platform.isBrowser),
          (this._isNativeSelect = S === "select"),
          (this._isTextarea = S === "textarea"),
          (this._isInFormField = !!g),
          this._isNativeSelect &&
            (this.controlType = k.multiple
              ? "mat-native-select-multiple"
              : "mat-native-select");
      }
      ngAfterViewInit() {
        this._platform.isBrowser &&
          this._autofillMonitor
            .monitor(this._elementRef.nativeElement)
            .subscribe((e) => {
              (this.autofilled = e.isAutofilled), this.stateChanges.next();
            });
      }
      ngOnChanges() {
        this.stateChanges.next();
      }
      ngOnDestroy() {
        this.stateChanges.complete(),
          this._platform.isBrowser &&
            this._autofillMonitor.stopMonitoring(
              this._elementRef.nativeElement
            ),
          this._platform.IOS &&
            this._elementRef.nativeElement.removeEventListener(
              "keyup",
              this._iOSKeyupListener
            );
      }
      ngDoCheck() {
        this.ngControl &&
          (this.updateErrorState(),
          this.ngControl.disabled !== null &&
            this.ngControl.disabled !== this.disabled &&
            ((this.disabled = this.ngControl.disabled),
            this.stateChanges.next())),
          this._dirtyCheckNativeValue(),
          this._dirtyCheckPlaceholder();
      }
      focus(e) {
        this._elementRef.nativeElement.focus(e);
      }
      updateErrorState() {
        this._errorStateTracker.updateErrorState();
      }
      _focusChanged(e) {
        e !== this.focused && ((this.focused = e), this.stateChanges.next());
      }
      _onInput() {}
      _dirtyCheckNativeValue() {
        let e = this._elementRef.nativeElement.value;
        this._previousNativeValue !== e &&
          ((this._previousNativeValue = e), this.stateChanges.next());
      }
      _dirtyCheckPlaceholder() {
        let e = this._getPlaceholder();
        if (e !== this._previousPlaceholder) {
          let i = this._elementRef.nativeElement;
          (this._previousPlaceholder = e),
            e
              ? i.setAttribute("placeholder", e)
              : i.removeAttribute("placeholder");
        }
      }
      _getPlaceholder() {
        return this.placeholder || null;
      }
      _validateType() {
        Xx.indexOf(this._type) > -1;
      }
      _isNeverEmpty() {
        return this._neverEmptyInputTypes.indexOf(this._type) > -1;
      }
      _isBadInput() {
        let e = this._elementRef.nativeElement.validity;
        return e && e.badInput;
      }
      get empty() {
        return (
          !this._isNeverEmpty() &&
          !this._elementRef.nativeElement.value &&
          !this._isBadInput() &&
          !this.autofilled
        );
      }
      get shouldLabelFloat() {
        if (this._isNativeSelect) {
          let e = this._elementRef.nativeElement,
            i = e.options[0];
          return (
            this.focused ||
            e.multiple ||
            !this.empty ||
            !!(e.selectedIndex > -1 && i && i.label)
          );
        } else return this.focused || !this.empty;
      }
      setDescribedByIds(e) {
        e.length
          ? this._elementRef.nativeElement.setAttribute(
              "aria-describedby",
              e.join(" ")
            )
          : this._elementRef.nativeElement.removeAttribute("aria-describedby");
      }
      onContainerClick() {
        this.focused || this.focus();
      }
      _isInlineSelect() {
        let e = this._elementRef.nativeElement;
        return this._isNativeSelect && (e.multiple || e.size > 1);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(
        d(L),
        d(G),
        d(He, 10),
        d(ar, 8),
        d(Qt, 8),
        d(Ca),
        d(Yx, 10),
        d(Dp),
        d(D),
        d(cr, 8)
      );
    }),
      (t.ɵdir = F({
        type: t,
        selectors: [
          ["input", "matInput", ""],
          ["textarea", "matInput", ""],
          ["select", "matNativeControl", ""],
          ["input", "matNativeControl", ""],
          ["textarea", "matNativeControl", ""],
        ],
        hostAttrs: [1, "mat-mdc-input-element"],
        hostVars: 18,
        hostBindings: function (i, r) {
          i & 1 &&
            j("focus", function () {
              return r._focusChanged(!0);
            })("blur", function () {
              return r._focusChanged(!1);
            })("input", function () {
              return r._onInput();
            }),
            i & 2 &&
              (_e("id", r.id)("disabled", r.disabled)("required", r.required),
              K("name", r.name || null)(
                "readonly",
                (r.readonly && !r._isNativeSelect) || null
              )("aria-invalid", r.empty && r.required ? null : r.errorState)(
                "aria-required",
                r.required
              )("id", r.id),
              q("mat-input-server", r._isServer)(
                "mat-mdc-form-field-textarea-control",
                r._isInFormField && r._isTextarea
              )("mat-mdc-form-field-input-control", r._isInFormField)(
                "mdc-text-field__input",
                r._isInFormField
              )("mat-mdc-native-select-inline", r._isInlineSelect()));
        },
        inputs: {
          disabled: "disabled",
          id: "id",
          placeholder: "placeholder",
          name: "name",
          required: "required",
          type: "type",
          errorStateMatcher: "errorStateMatcher",
          userAriaDescribedBy: [0, "aria-describedby", "userAriaDescribedBy"],
          value: "value",
          readonly: "readonly",
        },
        exportAs: ["matInput"],
        standalone: !0,
        features: [Pt([{ provide: sr, useExisting: t }]), zt],
      }));
    let n = t;
    return n;
  })(),
  Si = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵmod = T({ type: t })),
      (t.ɵinj = M({ imports: [Q, Kt, Kt, Ap, Q] }));
    let n = t;
    return n;
  })();
var Mp = (() => {
  let t = class t {};
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵmod = T({ type: t })),
    (t.ɵinj = M({ imports: [Q, Q] }));
  let n = t;
  return n;
})();
var Tp = (() => {
  let t = class t {};
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵmod = T({ type: t })),
    (t.ɵinj = M({ imports: [yn, yt, Q, Vo, Kc, Mp] }));
  let n = t;
  return n;
})();
function Qx(n, t) {}
var Yi = class {
  constructor() {
    (this.role = "dialog"),
      (this.panelClass = ""),
      (this.hasBackdrop = !0),
      (this.backdropClass = ""),
      (this.disableClose = !1),
      (this.width = ""),
      (this.height = ""),
      (this.data = null),
      (this.ariaDescribedBy = null),
      (this.ariaLabelledBy = null),
      (this.ariaLabel = null),
      (this.ariaModal = !0),
      (this.autoFocus = "first-tabbable"),
      (this.restoreFocus = !0),
      (this.closeOnNavigation = !0),
      (this.closeOnDestroy = !0),
      (this.closeOnOverlayDetachments = !0);
  }
};
var Wl = (() => {
    let t = class t extends li {
      constructor(e, i, r, a, s, c, l, m) {
        super(),
          (this._elementRef = e),
          (this._focusTrapFactory = i),
          (this._config = a),
          (this._interactivityChecker = s),
          (this._ngZone = c),
          (this._overlayRef = l),
          (this._focusMonitor = m),
          (this._platform = _(G)),
          (this._focusTrap = null),
          (this._elementFocusedBeforeDialogWasOpened = null),
          (this._closeInteractionType = null),
          (this._ariaLabelledByQueue = []),
          (this._changeDetectorRef = _(St)),
          (this.attachDomPortal = (f) => {
            this._portalOutlet.hasAttached();
            let g = this._portalOutlet.attachDomPortal(f);
            return this._contentAttached(), g;
          }),
          (this._document = r),
          this._config.ariaLabelledBy &&
            this._ariaLabelledByQueue.push(this._config.ariaLabelledBy);
      }
      _addAriaLabelledBy(e) {
        this._ariaLabelledByQueue.push(e),
          this._changeDetectorRef.markForCheck();
      }
      _removeAriaLabelledBy(e) {
        let i = this._ariaLabelledByQueue.indexOf(e);
        i > -1 &&
          (this._ariaLabelledByQueue.splice(i, 1),
          this._changeDetectorRef.markForCheck());
      }
      _contentAttached() {
        this._initializeFocusTrap(),
          this._handleBackdropClicks(),
          this._captureInitialFocus();
      }
      _captureInitialFocus() {
        this._trapFocus();
      }
      ngOnDestroy() {
        this._restoreFocus();
      }
      attachComponentPortal(e) {
        this._portalOutlet.hasAttached();
        let i = this._portalOutlet.attachComponentPortal(e);
        return this._contentAttached(), i;
      }
      attachTemplatePortal(e) {
        this._portalOutlet.hasAttached();
        let i = this._portalOutlet.attachTemplatePortal(e);
        return this._contentAttached(), i;
      }
      _recaptureFocus() {
        this._containsFocus() || this._trapFocus();
      }
      _forceFocus(e, i) {
        this._interactivityChecker.isFocusable(e) ||
          ((e.tabIndex = -1),
          this._ngZone.runOutsideAngular(() => {
            let r = () => {
              e.removeEventListener("blur", r),
                e.removeEventListener("mousedown", r),
                e.removeAttribute("tabindex");
            };
            e.addEventListener("blur", r), e.addEventListener("mousedown", r);
          })),
          e.focus(i);
      }
      _focusByCssSelector(e, i) {
        let r = this._elementRef.nativeElement.querySelector(e);
        r && this._forceFocus(r, i);
      }
      _trapFocus() {
        let e = this._elementRef.nativeElement;
        switch (this._config.autoFocus) {
          case !1:
          case "dialog":
            this._containsFocus() || e.focus();
            break;
          case !0:
          case "first-tabbable":
            this._focusTrap?.focusInitialElementWhenReady().then((i) => {
              i || this._focusDialogContainer();
            });
            break;
          case "first-heading":
            this._focusByCssSelector(
              'h1, h2, h3, h4, h5, h6, [role="heading"]'
            );
            break;
          default:
            this._focusByCssSelector(this._config.autoFocus);
            break;
        }
      }
      _restoreFocus() {
        let e = this._config.restoreFocus,
          i = null;
        if (
          (typeof e == "string"
            ? (i = this._document.querySelector(e))
            : typeof e == "boolean"
            ? (i = e ? this._elementFocusedBeforeDialogWasOpened : null)
            : e && (i = e),
          this._config.restoreFocus && i && typeof i.focus == "function")
        ) {
          let r = Lo(),
            a = this._elementRef.nativeElement;
          (!r || r === this._document.body || r === a || a.contains(r)) &&
            (this._focusMonitor
              ? (this._focusMonitor.focusVia(i, this._closeInteractionType),
                (this._closeInteractionType = null))
              : i.focus());
        }
        this._focusTrap && this._focusTrap.destroy();
      }
      _focusDialogContainer() {
        this._elementRef.nativeElement.focus &&
          this._elementRef.nativeElement.focus();
      }
      _containsFocus() {
        let e = this._elementRef.nativeElement,
          i = Lo();
        return e === i || e.contains(i);
      }
      _initializeFocusTrap() {
        this._platform.isBrowser &&
          ((this._focusTrap = this._focusTrapFactory.create(
            this._elementRef.nativeElement
          )),
          this._document && (this._elementFocusedBeforeDialogWasOpened = Lo()));
      }
      _handleBackdropClicks() {
        this._overlayRef.backdropClick().subscribe(() => {
          this._config.disableClose && this._recaptureFocus();
        });
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(
        d(L),
        d(ga),
        d(R, 8),
        d(Yi),
        d(jo),
        d(D),
        d(Be),
        d(ai)
      );
    }),
      (t.ɵcmp = z({
        type: t,
        selectors: [["cdk-dialog-container"]],
        viewQuery: function (i, r) {
          if ((i & 1 && ft(di, 7), i & 2)) {
            let a;
            X((a = Z())) && (r._portalOutlet = a.first);
          }
        },
        hostAttrs: ["tabindex", "-1", 1, "cdk-dialog-container"],
        hostVars: 6,
        hostBindings: function (i, r) {
          i & 2 &&
            K("id", r._config.id || null)("role", r._config.role)(
              "aria-modal",
              r._config.ariaModal
            )(
              "aria-labelledby",
              r._config.ariaLabel ? null : r._ariaLabelledByQueue[0]
            )("aria-label", r._config.ariaLabel)(
              "aria-describedby",
              r._config.ariaDescribedBy || null
            );
        },
        standalone: !0,
        features: [ut, V],
        decls: 1,
        vars: 0,
        consts: [["cdkPortalOutlet", ""]],
        template: function (i, r) {
          i & 1 && A(0, Qx, 0, 0, "ng-template", 0);
        },
        dependencies: [di],
        styles: [
          ".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}",
        ],
        encapsulation: 2,
      }));
    let n = t;
    return n;
  })(),
  lr = class {
    constructor(t, o) {
      (this.overlayRef = t),
        (this.config = o),
        (this.closed = new E()),
        (this.disableClose = o.disableClose),
        (this.backdropClick = t.backdropClick()),
        (this.keydownEvents = t.keydownEvents()),
        (this.outsidePointerEvents = t.outsidePointerEvents()),
        (this.id = o.id),
        this.keydownEvents.subscribe((e) => {
          e.keyCode === 27 &&
            !this.disableClose &&
            !Ut(e) &&
            (e.preventDefault(),
            this.close(void 0, { focusOrigin: "keyboard" }));
        }),
        this.backdropClick.subscribe(() => {
          this.disableClose || this.close(void 0, { focusOrigin: "mouse" });
        }),
        (this._detachSubscription = t.detachments().subscribe(() => {
          o.closeOnOverlayDetachments !== !1 && this.close();
        }));
    }
    close(t, o) {
      if (this.containerInstance) {
        let e = this.closed;
        (this.containerInstance._closeInteractionType =
          o?.focusOrigin || "program"),
          this._detachSubscription.unsubscribe(),
          this.overlayRef.dispose(),
          e.next(t),
          e.complete(),
          (this.componentInstance = this.containerInstance = null);
      }
    }
    updatePosition() {
      return this.overlayRef.updatePosition(), this;
    }
    updateSize(t = "", o = "") {
      return this.overlayRef.updateSize({ width: t, height: o }), this;
    }
    addPanelClass(t) {
      return this.overlayRef.addPanelClass(t), this;
    }
    removePanelClass(t) {
      return this.overlayRef.removePanelClass(t), this;
    }
  },
  Kx = new w("DialogScrollStrategy", {
    providedIn: "root",
    factory: () => {
      let n = _(xt);
      return () => n.scrollStrategies.block();
    },
  }),
  Jx = new w("DialogData"),
  ty = new w("DefaultDialogConfig");
var ey = 0,
  ql = (() => {
    let t = class t {
      get openDialogs() {
        return this._parentDialog
          ? this._parentDialog.openDialogs
          : this._openDialogsAtThisLevel;
      }
      get afterOpened() {
        return this._parentDialog
          ? this._parentDialog.afterOpened
          : this._afterOpenedAtThisLevel;
      }
      constructor(e, i, r, a, s, c) {
        (this._overlay = e),
          (this._injector = i),
          (this._defaultOptions = r),
          (this._parentDialog = a),
          (this._overlayContainer = s),
          (this._openDialogsAtThisLevel = []),
          (this._afterAllClosedAtThisLevel = new E()),
          (this._afterOpenedAtThisLevel = new E()),
          (this._ariaHiddenElements = new Map()),
          (this.afterAllClosed = De(() =>
            this.openDialogs.length
              ? this._getAfterAllClosed()
              : this._getAfterAllClosed().pipe(te(void 0))
          )),
          (this._scrollStrategy = c);
      }
      open(e, i) {
        let r = this._defaultOptions || new Yi();
        (i = b(b({}, r), i)),
          (i.id = i.id || `cdk-dialog-${ey++}`),
          i.id && this.getDialogById(i.id);
        let a = this._getOverlayConfig(i),
          s = this._overlay.create(a),
          c = new lr(s, i),
          l = this._attachContainer(s, c, i);
        return (
          (c.containerInstance = l),
          this._attachDialogContent(e, c, l, i),
          this.openDialogs.length ||
            this._hideNonDialogContentFromAssistiveTechnology(),
          this.openDialogs.push(c),
          c.closed.subscribe(() => this._removeOpenDialog(c, !0)),
          this.afterOpened.next(c),
          c
        );
      }
      closeAll() {
        $l(this.openDialogs, (e) => e.close());
      }
      getDialogById(e) {
        return this.openDialogs.find((i) => i.id === e);
      }
      ngOnDestroy() {
        $l(this._openDialogsAtThisLevel, (e) => {
          e.config.closeOnDestroy === !1 && this._removeOpenDialog(e, !1);
        }),
          $l(this._openDialogsAtThisLevel, (e) => e.close()),
          this._afterAllClosedAtThisLevel.complete(),
          this._afterOpenedAtThisLevel.complete(),
          (this._openDialogsAtThisLevel = []);
      }
      _getOverlayConfig(e) {
        let i = new hi({
          positionStrategy:
            e.positionStrategy ||
            this._overlay
              .position()
              .global()
              .centerHorizontally()
              .centerVertically(),
          scrollStrategy: e.scrollStrategy || this._scrollStrategy(),
          panelClass: e.panelClass,
          hasBackdrop: e.hasBackdrop,
          direction: e.direction,
          minWidth: e.minWidth,
          minHeight: e.minHeight,
          maxWidth: e.maxWidth,
          maxHeight: e.maxHeight,
          width: e.width,
          height: e.height,
          disposeOnNavigation: e.closeOnNavigation,
        });
        return e.backdropClass && (i.backdropClass = e.backdropClass), i;
      }
      _attachContainer(e, i, r) {
        let a = r.injector || r.viewContainerRef?.injector,
          s = [
            { provide: Yi, useValue: r },
            { provide: lr, useValue: i },
            { provide: Be, useValue: e },
          ],
          c;
        r.container
          ? typeof r.container == "function"
            ? (c = r.container)
            : ((c = r.container.type), s.push(...r.container.providers(r)))
          : (c = Wl);
        let l = new pe(
          c,
          r.viewContainerRef,
          kt.create({ parent: a || this._injector, providers: s }),
          r.componentFactoryResolver
        );
        return e.attach(l).instance;
      }
      _attachDialogContent(e, i, r, a) {
        if (e instanceof Ze) {
          let s = this._createInjector(a, i, r, void 0),
            c = { $implicit: a.data, dialogRef: i };
          a.templateContext &&
            (c = b(
              b({}, c),
              typeof a.templateContext == "function"
                ? a.templateContext()
                : a.templateContext
            )),
            r.attachTemplatePortal(new Ve(e, null, c, s));
        } else {
          let s = this._createInjector(a, i, r, this._injector),
            c = r.attachComponentPortal(
              new pe(e, a.viewContainerRef, s, a.componentFactoryResolver)
            );
          (i.componentRef = c), (i.componentInstance = c.instance);
        }
      }
      _createInjector(e, i, r, a) {
        let s = e.injector || e.viewContainerRef?.injector,
          c = [
            { provide: Jx, useValue: e.data },
            { provide: lr, useValue: i },
          ];
        return (
          e.providers &&
            (typeof e.providers == "function"
              ? c.push(...e.providers(i, e, r))
              : c.push(...e.providers)),
          e.direction &&
            (!s || !s.get(se, null, { optional: !0 })) &&
            c.push({
              provide: se,
              useValue: { value: e.direction, change: I() },
            }),
          kt.create({ parent: s || a, providers: c })
        );
      }
      _removeOpenDialog(e, i) {
        let r = this.openDialogs.indexOf(e);
        r > -1 &&
          (this.openDialogs.splice(r, 1),
          this.openDialogs.length ||
            (this._ariaHiddenElements.forEach((a, s) => {
              a
                ? s.setAttribute("aria-hidden", a)
                : s.removeAttribute("aria-hidden");
            }),
            this._ariaHiddenElements.clear(),
            i && this._getAfterAllClosed().next()));
      }
      _hideNonDialogContentFromAssistiveTechnology() {
        let e = this._overlayContainer.getContainerElement();
        if (e.parentElement) {
          let i = e.parentElement.children;
          for (let r = i.length - 1; r > -1; r--) {
            let a = i[r];
            a !== e &&
              a.nodeName !== "SCRIPT" &&
              a.nodeName !== "STYLE" &&
              !a.hasAttribute("aria-live") &&
              (this._ariaHiddenElements.set(a, a.getAttribute("aria-hidden")),
              a.setAttribute("aria-hidden", "true"));
          }
        }
      }
      _getAfterAllClosed() {
        let e = this._parentDialog;
        return e ? e._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(h(xt), h(kt), h(ty, 8), h(t, 12), h(Tn), h(Kx));
    }),
      (t.ɵprov = x({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })();
function $l(n, t) {
  let o = n.length;
  for (; o--; ) t(n[o]);
}
var Op = (() => {
  let t = class t {};
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵmod = T({ type: t })),
    (t.ɵinj = M({ providers: [ql], imports: [Ue, mi, _a, mi] }));
  let n = t;
  return n;
})();
function iy(n, t) {}
var dr = class {
    constructor() {
      (this.role = "dialog"),
        (this.panelClass = ""),
        (this.hasBackdrop = !0),
        (this.backdropClass = ""),
        (this.disableClose = !1),
        (this.width = ""),
        (this.height = ""),
        (this.data = null),
        (this.ariaDescribedBy = null),
        (this.ariaLabelledBy = null),
        (this.ariaLabel = null),
        (this.ariaModal = !0),
        (this.autoFocus = "first-tabbable"),
        (this.restoreFocus = !0),
        (this.delayFocusTrap = !0),
        (this.closeOnNavigation = !0);
    }
  },
  Gl = "mdc-dialog--open",
  Rp = "mdc-dialog--opening",
  Fp = "mdc-dialog--closing",
  ny = 150,
  oy = 75,
  ry = (() => {
    let t = class t extends Wl {
      constructor(e, i, r, a, s, c, l, m, f) {
        super(e, i, r, a, s, c, l, f),
          (this._animationMode = m),
          (this._animationStateChanged = new et()),
          (this._animationsEnabled = this._animationMode !== "NoopAnimations"),
          (this._actionSectionCount = 0),
          (this._hostElement = this._elementRef.nativeElement),
          (this._enterAnimationDuration = this._animationsEnabled
            ? Lp(this._config.enterAnimationDuration) ?? ny
            : 0),
          (this._exitAnimationDuration = this._animationsEnabled
            ? Lp(this._config.exitAnimationDuration) ?? oy
            : 0),
          (this._animationTimer = null),
          (this._finishDialogOpen = () => {
            this._clearAnimationClasses(),
              this._openAnimationDone(this._enterAnimationDuration);
          }),
          (this._finishDialogClose = () => {
            this._clearAnimationClasses(),
              this._animationStateChanged.emit({
                state: "closed",
                totalTime: this._exitAnimationDuration,
              });
          });
      }
      _contentAttached() {
        super._contentAttached(), this._startOpenAnimation();
      }
      _startOpenAnimation() {
        this._animationStateChanged.emit({
          state: "opening",
          totalTime: this._enterAnimationDuration,
        }),
          this._animationsEnabled
            ? (this._hostElement.style.setProperty(
                Pp,
                `${this._enterAnimationDuration}ms`
              ),
              this._requestAnimationFrame(() =>
                this._hostElement.classList.add(Rp, Gl)
              ),
              this._waitForAnimationToComplete(
                this._enterAnimationDuration,
                this._finishDialogOpen
              ))
            : (this._hostElement.classList.add(Gl),
              Promise.resolve().then(() => this._finishDialogOpen()));
      }
      _startExitAnimation() {
        this._animationStateChanged.emit({
          state: "closing",
          totalTime: this._exitAnimationDuration,
        }),
          this._hostElement.classList.remove(Gl),
          this._animationsEnabled
            ? (this._hostElement.style.setProperty(
                Pp,
                `${this._exitAnimationDuration}ms`
              ),
              this._requestAnimationFrame(() =>
                this._hostElement.classList.add(Fp)
              ),
              this._waitForAnimationToComplete(
                this._exitAnimationDuration,
                this._finishDialogClose
              ))
            : Promise.resolve().then(() => this._finishDialogClose());
      }
      _updateActionSectionCount(e) {
        (this._actionSectionCount += e), this._changeDetectorRef.markForCheck();
      }
      _clearAnimationClasses() {
        this._hostElement.classList.remove(Rp, Fp);
      }
      _waitForAnimationToComplete(e, i) {
        this._animationTimer !== null && clearTimeout(this._animationTimer),
          (this._animationTimer = setTimeout(i, e));
      }
      _requestAnimationFrame(e) {
        this._ngZone.runOutsideAngular(() => {
          typeof requestAnimationFrame == "function"
            ? requestAnimationFrame(e)
            : e();
        });
      }
      _captureInitialFocus() {
        this._config.delayFocusTrap || this._trapFocus();
      }
      _openAnimationDone(e) {
        this._config.delayFocusTrap && this._trapFocus(),
          this._animationStateChanged.next({ state: "opened", totalTime: e });
      }
      ngOnDestroy() {
        super.ngOnDestroy(),
          this._animationTimer !== null && clearTimeout(this._animationTimer);
      }
      attachComponentPortal(e) {
        let i = super.attachComponentPortal(e);
        return (
          i.location.nativeElement.classList.add(
            "mat-mdc-dialog-component-host"
          ),
          i
        );
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(
        d(L),
        d(ga),
        d(R, 8),
        d(dr),
        d(jo),
        d(D),
        d(Be),
        d(At, 8),
        d(ai)
      );
    }),
      (t.ɵcmp = z({
        type: t,
        selectors: [["mat-dialog-container"]],
        hostAttrs: [
          "tabindex",
          "-1",
          1,
          "mat-mdc-dialog-container",
          "mdc-dialog",
        ],
        hostVars: 10,
        hostBindings: function (i, r) {
          i & 2 &&
            (_e("id", r._config.id),
            K("aria-modal", r._config.ariaModal)("role", r._config.role)(
              "aria-labelledby",
              r._config.ariaLabel ? null : r._ariaLabelledByQueue[0]
            )("aria-label", r._config.ariaLabel)(
              "aria-describedby",
              r._config.ariaDescribedBy || null
            ),
            q("_mat-animation-noopable", !r._animationsEnabled)(
              "mat-mdc-dialog-container-with-actions",
              r._actionSectionCount > 0
            ));
        },
        standalone: !0,
        features: [ut, V],
        decls: 3,
        vars: 0,
        consts: [
          [1, "mdc-dialog__container"],
          [1, "mat-mdc-dialog-surface", "mdc-dialog__surface"],
          ["cdkPortalOutlet", ""],
        ],
        template: function (i, r) {
          i & 1 &&
            (u(0, "div", 0)(1, "div", 1),
            A(2, iy, 0, 0, "ng-template", 2),
            p()());
        },
        dependencies: [di],
        styles: [
          '.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:var(--mdc-dialog-z-index, 7)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:none}@media(max-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px;width:560px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 112px)}}@media(max-width: 720px)and (min-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:560px}}@media(max-width: 720px)and (max-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:calc(100vh - 160px)}}@media(max-width: 720px)and (min-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px}}@media(max-width: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-height: 400px),(max-width: 600px),(min-width: 720px)and (max-height: 400px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(min-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 400px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}.mdc-dialog.mdc-dialog__scrim--hidden .mdc-dialog__scrim{opacity:0}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto;outline:0;transform:scale(0.8)}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}[dir=rtl] .mdc-dialog__surface,.mdc-dialog__surface[dir=rtl]{text-align:right}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-dialog__surface{outline:2px solid windowText}}.mdc-dialog__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-dialog__surface::before{border-color:CanvasText}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.mdc-dialog__surface::before{content:none}}.mdc-dialog__title{display:block;margin-top:0;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:0 24px 9px}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mdc-dialog__title,.mdc-dialog__title[dir=rtl]{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{margin-bottom:1px;padding-bottom:15px}.mdc-dialog--fullscreen .mdc-dialog__header{align-items:baseline;border-bottom:1px solid rgba(0,0,0,0);display:inline-flex;justify-content:space-between;padding:0 24px 9px;z-index:1}@media screen and (forced-colors: active){.mdc-dialog--fullscreen .mdc-dialog__header{border-bottom-color:CanvasText}}.mdc-dialog--fullscreen .mdc-dialog__header .mdc-dialog__close{right:-12px}.mdc-dialog--fullscreen .mdc-dialog__title{margin-bottom:0;padding:0;border-bottom:0}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:0;margin-bottom:0}.mdc-dialog--fullscreen .mdc-dialog__close{top:5px}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--fullscreen--titleless .mdc-dialog__close{margin-top:4px}.mdc-dialog--fullscreen--titleless.mdc-dialog--scrollable .mdc-dialog__close{margin-top:0}.mdc-dialog__content{flex-grow:1;box-sizing:border-box;margin:0;overflow:auto}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content,.mdc-dialog__header+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--closing .mdc-dialog__surface{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{opacity:1}.mdc-dialog--open .mdc-dialog__surface{transform:none}.mdc-dialog--open.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim{opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{transition:opacity 75ms linear}.mdc-dialog--open.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim{transition:opacity 150ms linear}.mdc-dialog__surface-scrim{display:none;opacity:0;position:absolute;width:100%;height:100%;z-index:1}.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{display:block}.mdc-dialog-scroll-lock{overflow:hidden}.mdc-dialog--no-content-padding .mdc-dialog__content{padding:0}.mdc-dialog--sheet .mdc-dialog__container .mdc-dialog__close{right:12px;top:9px;position:absolute;z-index:1}.mdc-dialog__scrim--removed{pointer-events:none}.mdc-dialog__scrim--removed .mdc-dialog__scrim,.mdc-dialog__scrim--removed .mdc-dialog__surface-scrim{display:none}.mat-mdc-dialog-content{max-height:65vh}.mat-mdc-dialog-container{position:static;display:block}.mat-mdc-dialog-container,.mat-mdc-dialog-container .mdc-dialog__container,.mat-mdc-dialog-container .mdc-dialog__surface{max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mat-mdc-dialog-container .mdc-dialog__surface{width:100%;height:100%}.mat-mdc-dialog-component-host{display:contents}.mat-mdc-dialog-container{--mdc-dialog-container-elevation: var(--mdc-dialog-container-elevation-shadow);outline:0}.mat-mdc-dialog-container .mdc-dialog__surface{background-color:var(--mdc-dialog-container-color, white)}.mat-mdc-dialog-container .mdc-dialog__surface{box-shadow:var(--mdc-dialog-container-elevation, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12))}.mat-mdc-dialog-container .mdc-dialog__surface{border-radius:var(--mdc-dialog-container-shape, 4px)}.mat-mdc-dialog-container .mdc-dialog__title{font-family:var(--mdc-dialog-subhead-font, Roboto, sans-serif);line-height:var(--mdc-dialog-subhead-line-height, 1.5rem);font-size:var(--mdc-dialog-subhead-size, 1rem);font-weight:var(--mdc-dialog-subhead-weight, 400);letter-spacing:var(--mdc-dialog-subhead-tracking, 0.03125em)}.mat-mdc-dialog-container .mdc-dialog__title{color:var(--mdc-dialog-subhead-color, rgba(0, 0, 0, 0.87))}.mat-mdc-dialog-container .mdc-dialog__content{font-family:var(--mdc-dialog-supporting-text-font, Roboto, sans-serif);line-height:var(--mdc-dialog-supporting-text-line-height, 1.5rem);font-size:var(--mdc-dialog-supporting-text-size, 1rem);font-weight:var(--mdc-dialog-supporting-text-weight, 400);letter-spacing:var(--mdc-dialog-supporting-text-tracking, 0.03125em)}.mat-mdc-dialog-container .mdc-dialog__content{color:var(--mdc-dialog-supporting-text-color, rgba(0, 0, 0, 0.6))}.mat-mdc-dialog-container .mdc-dialog__container{transition:opacity linear var(--mat-dialog-transition-duration, 0ms)}.mat-mdc-dialog-container .mdc-dialog__surface{transition:transform var(--mat-dialog-transition-duration, 0ms) 0ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-dialog-container._mat-animation-noopable .mdc-dialog__container,.mat-mdc-dialog-container._mat-animation-noopable .mdc-dialog__surface{transition:none}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 80vw);min-width:var(--mat-dialog-container-min-width, 0)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, 80vw)}}.mat-mdc-dialog-title{padding:var(--mat-dialog-headline-padding, 0 24px 9px)}.mat-mdc-dialog-content{display:block}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{padding:var(--mat-dialog-actions-padding, 8px);justify-content:var(--mat-dialog-actions-alignment, start)}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}',
        ],
        encapsulation: 2,
      }));
    let n = t;
    return n;
  })(),
  Pp = "--mat-dialog-transition-duration";
function Lp(n) {
  return n == null
    ? null
    : typeof n == "number"
    ? n
    : n.endsWith("ms")
    ? Ne(n.substring(0, n.length - 2))
    : n.endsWith("s")
    ? Ne(n.substring(0, n.length - 1)) * 1e3
    : n === "0"
    ? 0
    : null;
}
var rs = (function (n) {
    return (
      (n[(n.OPEN = 0)] = "OPEN"),
      (n[(n.CLOSING = 1)] = "CLOSING"),
      (n[(n.CLOSED = 2)] = "CLOSED"),
      n
    );
  })(rs || {}),
  Un = class {
    constructor(t, o, e) {
      (this._ref = t),
        (this._containerInstance = e),
        (this._afterOpened = new E()),
        (this._beforeClosed = new E()),
        (this._state = rs.OPEN),
        (this.disableClose = o.disableClose),
        (this.id = t.id),
        t.addPanelClass("mat-mdc-dialog-panel"),
        e._animationStateChanged
          .pipe(
            ht((i) => i.state === "opened"),
            _t(1)
          )
          .subscribe(() => {
            this._afterOpened.next(), this._afterOpened.complete();
          }),
        e._animationStateChanged
          .pipe(
            ht((i) => i.state === "closed"),
            _t(1)
          )
          .subscribe(() => {
            clearTimeout(this._closeFallbackTimeout), this._finishDialogClose();
          }),
        t.overlayRef.detachments().subscribe(() => {
          this._beforeClosed.next(this._result),
            this._beforeClosed.complete(),
            this._finishDialogClose();
        }),
        ge(
          this.backdropClick(),
          this.keydownEvents().pipe(
            ht((i) => i.keyCode === 27 && !this.disableClose && !Ut(i))
          )
        ).subscribe((i) => {
          this.disableClose ||
            (i.preventDefault(),
            ay(this, i.type === "keydown" ? "keyboard" : "mouse"));
        });
    }
    close(t) {
      (this._result = t),
        this._containerInstance._animationStateChanged
          .pipe(
            ht((o) => o.state === "closing"),
            _t(1)
          )
          .subscribe((o) => {
            this._beforeClosed.next(t),
              this._beforeClosed.complete(),
              this._ref.overlayRef.detachBackdrop(),
              (this._closeFallbackTimeout = setTimeout(
                () => this._finishDialogClose(),
                o.totalTime + 100
              ));
          }),
        (this._state = rs.CLOSING),
        this._containerInstance._startExitAnimation();
    }
    afterOpened() {
      return this._afterOpened;
    }
    afterClosed() {
      return this._ref.closed;
    }
    beforeClosed() {
      return this._beforeClosed;
    }
    backdropClick() {
      return this._ref.backdropClick;
    }
    keydownEvents() {
      return this._ref.keydownEvents;
    }
    updatePosition(t) {
      let o = this._ref.config.positionStrategy;
      return (
        t && (t.left || t.right)
          ? t.left
            ? o.left(t.left)
            : o.right(t.right)
          : o.centerHorizontally(),
        t && (t.top || t.bottom)
          ? t.top
            ? o.top(t.top)
            : o.bottom(t.bottom)
          : o.centerVertically(),
        this._ref.updatePosition(),
        this
      );
    }
    updateSize(t = "", o = "") {
      return this._ref.updateSize(t, o), this;
    }
    addPanelClass(t) {
      return this._ref.addPanelClass(t), this;
    }
    removePanelClass(t) {
      return this._ref.removePanelClass(t), this;
    }
    getState() {
      return this._state;
    }
    _finishDialogClose() {
      (this._state = rs.CLOSED),
        this._ref.close(this._result, {
          focusOrigin: this._closeInteractionType,
        }),
        (this.componentInstance = null);
    }
  };
function ay(n, t, o) {
  return (n._closeInteractionType = t), n.close(o);
}
var sy = new w("MatMdcDialogData"),
  cy = new w("mat-mdc-dialog-default-options"),
  ly = new w("mat-mdc-dialog-scroll-strategy", {
    providedIn: "root",
    factory: () => {
      let n = _(xt);
      return () => n.scrollStrategies.block();
    },
  });
var dy = 0,
  as = (() => {
    let t = class t {
      get openDialogs() {
        return this._parentDialog
          ? this._parentDialog.openDialogs
          : this._openDialogsAtThisLevel;
      }
      get afterOpened() {
        return this._parentDialog
          ? this._parentDialog.afterOpened
          : this._afterOpenedAtThisLevel;
      }
      _getAfterAllClosed() {
        let e = this._parentDialog;
        return e ? e._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
      }
      constructor(e, i, r, a, s, c, l, m) {
        (this._overlay = e),
          (this._defaultOptions = a),
          (this._scrollStrategy = s),
          (this._parentDialog = c),
          (this._openDialogsAtThisLevel = []),
          (this._afterAllClosedAtThisLevel = new E()),
          (this._afterOpenedAtThisLevel = new E()),
          (this.dialogConfigClass = dr),
          (this.afterAllClosed = De(() =>
            this.openDialogs.length
              ? this._getAfterAllClosed()
              : this._getAfterAllClosed().pipe(te(void 0))
          )),
          (this._dialog = i.get(ql)),
          (this._dialogRefConstructor = Un),
          (this._dialogContainerType = ry),
          (this._dialogDataToken = sy);
      }
      open(e, i) {
        let r;
        (i = b(b({}, this._defaultOptions || new dr()), i)),
          (i.id = i.id || `mat-mdc-dialog-${dy++}`),
          (i.scrollStrategy = i.scrollStrategy || this._scrollStrategy());
        let a = this._dialog.open(
          e,
          nt(b({}, i), {
            positionStrategy: this._overlay
              .position()
              .global()
              .centerHorizontally()
              .centerVertically(),
            disableClose: !0,
            closeOnDestroy: !1,
            closeOnOverlayDetachments: !1,
            container: {
              type: this._dialogContainerType,
              providers: () => [
                { provide: this.dialogConfigClass, useValue: i },
                { provide: Yi, useValue: i },
              ],
            },
            templateContext: () => ({ dialogRef: r }),
            providers: (s, c, l) => (
              (r = new this._dialogRefConstructor(s, i, l)),
              r.updatePosition(i?.position),
              [
                { provide: this._dialogContainerType, useValue: l },
                { provide: this._dialogDataToken, useValue: c.data },
                { provide: this._dialogRefConstructor, useValue: r },
              ]
            ),
          })
        );
        return (
          (r.componentRef = a.componentRef),
          (r.componentInstance = a.componentInstance),
          this.openDialogs.push(r),
          this.afterOpened.next(r),
          r.afterClosed().subscribe(() => {
            let s = this.openDialogs.indexOf(r);
            s > -1 &&
              (this.openDialogs.splice(s, 1),
              this.openDialogs.length || this._getAfterAllClosed().next());
          }),
          r
        );
      }
      closeAll() {
        this._closeDialogs(this.openDialogs);
      }
      getDialogById(e) {
        return this.openDialogs.find((i) => i.id === e);
      }
      ngOnDestroy() {
        this._closeDialogs(this._openDialogsAtThisLevel),
          this._afterAllClosedAtThisLevel.complete(),
          this._afterOpenedAtThisLevel.complete();
      }
      _closeDialogs(e) {
        let i = e.length;
        for (; i--; ) e[i].close();
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(
        h(xt),
        h(kt),
        h(Re, 8),
        h(cy, 8),
        h(ly),
        h(t, 12),
        h(Tn),
        h(At, 8)
      );
    }),
      (t.ɵprov = x({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })(),
  my = 0;
var Np = (() => {
    let t = class t {
      constructor(e, i, r) {
        (this._dialogRef = e), (this._elementRef = i), (this._dialog = r);
      }
      ngOnInit() {
        this._dialogRef ||
          (this._dialogRef = hy(this._elementRef, this._dialog.openDialogs)),
          this._dialogRef &&
            Promise.resolve().then(() => {
              this._onAdd();
            });
      }
      ngOnDestroy() {
        this._dialogRef?._containerInstance &&
          Promise.resolve().then(() => {
            this._onRemove();
          });
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(Un, 8), d(L), d(as));
    }),
      (t.ɵdir = F({ type: t, standalone: !0 }));
    let n = t;
    return n;
  })(),
  jp = (() => {
    let t = class t extends Np {
      constructor() {
        super(...arguments), (this.id = `mat-mdc-dialog-title-${my++}`);
      }
      _onAdd() {
        this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id);
      }
      _onRemove() {
        this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id);
      }
    };
    (t.ɵfac = (() => {
      let e;
      return function (r) {
        return (e || (e = be(t)))(r || t);
      };
    })()),
      (t.ɵdir = F({
        type: t,
        selectors: [
          ["", "mat-dialog-title", ""],
          ["", "matDialogTitle", ""],
        ],
        hostAttrs: [1, "mat-mdc-dialog-title", "mdc-dialog__title"],
        hostVars: 1,
        hostBindings: function (i, r) {
          i & 2 && _e("id", r.id);
        },
        inputs: { id: "id" },
        exportAs: ["matDialogTitle"],
        standalone: !0,
        features: [ut],
      }));
    let n = t;
    return n;
  })(),
  zp = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵdir = F({
        type: t,
        selectors: [
          ["", "mat-dialog-content", ""],
          ["mat-dialog-content"],
          ["", "matDialogContent", ""],
        ],
        hostAttrs: [1, "mat-mdc-dialog-content", "mdc-dialog__content"],
        standalone: !0,
      }));
    let n = t;
    return n;
  })(),
  Vp = (() => {
    let t = class t extends Np {
      _onAdd() {
        this._dialogRef._containerInstance?._updateActionSectionCount?.(1);
      }
      _onRemove() {
        this._dialogRef._containerInstance?._updateActionSectionCount?.(-1);
      }
    };
    (t.ɵfac = (() => {
      let e;
      return function (r) {
        return (e || (e = be(t)))(r || t);
      };
    })()),
      (t.ɵdir = F({
        type: t,
        selectors: [
          ["", "mat-dialog-actions", ""],
          ["mat-dialog-actions"],
          ["", "matDialogActions", ""],
        ],
        hostAttrs: [1, "mat-mdc-dialog-actions", "mdc-dialog__actions"],
        hostVars: 6,
        hostBindings: function (i, r) {
          i & 2 &&
            q("mat-mdc-dialog-actions-align-start", r.align === "start")(
              "mat-mdc-dialog-actions-align-center",
              r.align === "center"
            )("mat-mdc-dialog-actions-align-end", r.align === "end");
        },
        inputs: { align: "align" },
        standalone: !0,
        features: [ut],
      }));
    let n = t;
    return n;
  })();
function hy(n, t) {
  let o = n.nativeElement.parentElement;
  for (; o && !o.classList.contains("mat-mdc-dialog-container"); )
    o = o.parentElement;
  return o ? t.find((e) => e.id === o.id) : null;
}
var Bp = (() => {
  let t = class t {};
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵmod = T({ type: t })),
    (t.ɵinj = M({ providers: [as], imports: [Op, Ue, mi, Q, Q] }));
  let n = t;
  return n;
})();
var Yl = (() => {
  let t = class t {
    constructor(e) {
      (this.dialogRef = e),
        (this.title = "Confirmaci\xF3n"),
        (this.message =
          "\xBFEst\xE1s seguro de que deseas realizar esta acci\xF3n?");
    }
    onConfirm() {
      this.dialogRef.close(!0);
    }
    onCancel() {
      this.dialogRef.close(!1);
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(d(Un));
  }),
    (t.ɵcmp = z({
      type: t,
      selectors: [["app-confirm-dialog"]],
      inputs: { title: "title", message: "message" },
      standalone: !0,
      features: [V],
      decls: 10,
      vars: 2,
      consts: [
        ["mat-dialog-title", ""],
        ["mat-dialog-content", ""],
        ["mat-dialog-actions", ""],
        ["mat-button", "", 3, "click"],
      ],
      template: function (i, r) {
        i & 1 &&
          (u(0, "h1", 0),
          y(1),
          p(),
          u(2, "div", 1)(3, "p"),
          y(4),
          p()(),
          u(5, "div", 2)(6, "button", 3),
          j("click", function () {
            return r.onCancel();
          }),
          y(7, "Cancelar"),
          p(),
          u(8, "button", 3),
          j("click", function () {
            return r.onConfirm();
          }),
          y(9, "Confirmar"),
          p()()),
          i & 2 && (v(), Et(r.title), v(3), Et(r.message));
      },
      dependencies: [Ht, $t, Bp, jp, Vp, zp],
      encapsulation: 2,
    }));
  let n = t;
  return n;
})();
var uy = ["trigger"],
  py = ["panel"],
  fy = [[["mat-select-trigger"]], "*"],
  gy = ["mat-select-trigger", "*"];
function by(n, t) {
  if ((n & 1 && (u(0, "span", 4), y(1), p()), n & 2)) {
    let o = P();
    v(), Et(o.placeholder);
  }
}
function _y(n, t) {
  n & 1 && Y(0);
}
function vy(n, t) {
  if ((n & 1 && (u(0, "span", 11), y(1), p()), n & 2)) {
    let o = P(2);
    v(), Et(o.triggerValue);
  }
}
function xy(n, t) {
  if (
    (n & 1 && (u(0, "span", 5), A(1, _y, 1, 0)(2, vy, 2, 1, "span", 11), p()),
    n & 2)
  ) {
    let o = P();
    v(), ot(o.customTrigger ? 1 : 2);
  }
}
function yy(n, t) {
  if (n & 1) {
    let o = vt();
    u(0, "div", 12, 1),
      j("@transformPanel.done", function (i) {
        st(o);
        let r = P();
        return ct(r._panelDoneAnimatingStream.next(i.toState));
      })("keydown", function (i) {
        st(o);
        let r = P();
        return ct(r._handleKeydown(i));
      }),
      Y(2, 1),
      p();
  }
  if (n & 2) {
    let o = P();
    Sd(
      "mat-mdc-select-panel mdc-menu-surface mdc-menu-surface--open ",
      o._getPanelTheme(),
      ""
    ),
      C("ngClass", o.panelClass)("@transformPanel", "showing"),
      K("id", o.id + "-panel")("aria-multiselectable", o.multiple)(
        "aria-label",
        o.ariaLabel || null
      )("aria-labelledby", o._getPanelAriaLabelledby());
  }
}
var wy = {
  transformPanelWrap: Ri("transformPanelWrap", [
    Fe("* => void", tm("@transformPanel", [Jd()], { optional: !0 })),
  ]),
  transformPanel: Ri("transformPanel", [
    Fi("void", me({ opacity: 0, transform: "scale(1, 0.8)" })),
    Fe(
      "void => showing",
      Je(
        "120ms cubic-bezier(0, 0, 0.2, 1)",
        me({ opacity: 1, transform: "scale(1, 1)" })
      )
    ),
    Fe("* => void", Je("100ms linear", me({ opacity: 0 }))),
  ]),
};
var Hp = 0,
  $p = new w("mat-select-scroll-strategy", {
    providedIn: "root",
    factory: () => {
      let n = _(xt);
      return () => n.scrollStrategies.reposition();
    },
  });
function ky(n) {
  return () => n.scrollStrategies.reposition();
}
var Cy = new w("MAT_SELECT_CONFIG"),
  Ey = { provide: $p, deps: [xt], useFactory: ky },
  Sy = new w("MatSelectTrigger"),
  Xl = class {
    constructor(t, o) {
      (this.source = t), (this.value = o);
    }
  },
  ss = (() => {
    let t = class t {
      _scrollOptionIntoView(e) {
        let i = this.options.toArray()[e];
        if (i) {
          let r = this.panel.nativeElement,
            a = Uh(e, this.options, this.optionGroups),
            s = i._getHostElement();
          e === 0 && a === 1
            ? (r.scrollTop = 0)
            : (r.scrollTop = Hh(
                s.offsetTop,
                s.offsetHeight,
                r.scrollTop,
                r.offsetHeight
              ));
        }
      }
      _positioningSettled() {
        this._scrollOptionIntoView(this._keyManager.activeItemIndex || 0);
      }
      _getChangeEvent(e) {
        return new Xl(this, e);
      }
      get focused() {
        return this._focused || this._panelOpen;
      }
      get hideSingleSelectionIndicator() {
        return this._hideSingleSelectionIndicator;
      }
      set hideSingleSelectionIndicator(e) {
        (this._hideSingleSelectionIndicator = e), this._syncParentProperties();
      }
      get placeholder() {
        return this._placeholder;
      }
      set placeholder(e) {
        (this._placeholder = e), this.stateChanges.next();
      }
      get required() {
        return (
          this._required ??
          this.ngControl?.control?.hasValidator(bt.required) ??
          !1
        );
      }
      set required(e) {
        (this._required = e), this.stateChanges.next();
      }
      get multiple() {
        return this._multiple;
      }
      set multiple(e) {
        this._selectionModel, (this._multiple = e);
      }
      get compareWith() {
        return this._compareWith;
      }
      set compareWith(e) {
        (this._compareWith = e),
          this._selectionModel && this._initializeSelection();
      }
      get value() {
        return this._value;
      }
      set value(e) {
        this._assignValue(e) && this._onChange(e);
      }
      get errorStateMatcher() {
        return this._errorStateTracker.matcher;
      }
      set errorStateMatcher(e) {
        this._errorStateTracker.matcher = e;
      }
      get id() {
        return this._id;
      }
      set id(e) {
        (this._id = e || this._uid), this.stateChanges.next();
      }
      get errorState() {
        return this._errorStateTracker.errorState;
      }
      set errorState(e) {
        this._errorStateTracker.errorState = e;
      }
      constructor(e, i, r, a, s, c, l, m, f, g, k, S, $, N) {
        (this._viewportRuler = e),
          (this._changeDetectorRef = i),
          (this._elementRef = s),
          (this._dir = c),
          (this._parentFormField = f),
          (this.ngControl = g),
          (this._liveAnnouncer = $),
          (this._defaultOptions = N),
          (this._positions = [
            {
              originX: "start",
              originY: "bottom",
              overlayX: "start",
              overlayY: "top",
            },
            {
              originX: "end",
              originY: "bottom",
              overlayX: "end",
              overlayY: "top",
            },
            {
              originX: "start",
              originY: "top",
              overlayX: "start",
              overlayY: "bottom",
              panelClass: "mat-mdc-select-panel-above",
            },
            {
              originX: "end",
              originY: "top",
              overlayX: "end",
              overlayY: "bottom",
              panelClass: "mat-mdc-select-panel-above",
            },
          ]),
          (this._panelOpen = !1),
          (this._compareWith = (U, It) => U === It),
          (this._uid = `mat-select-${Hp++}`),
          (this._triggerAriaLabelledBy = null),
          (this._destroy = new E()),
          (this.stateChanges = new E()),
          (this.disableAutomaticLabeling = !0),
          (this._onChange = () => {}),
          (this._onTouched = () => {}),
          (this._valueId = `mat-select-value-${Hp++}`),
          (this._panelDoneAnimatingStream = new E()),
          (this._overlayPanelClass =
            this._defaultOptions?.overlayPanelClass || ""),
          (this._focused = !1),
          (this.controlType = "mat-select"),
          (this.disabled = !1),
          (this.disableRipple = !1),
          (this.tabIndex = 0),
          (this._hideSingleSelectionIndicator =
            this._defaultOptions?.hideSingleSelectionIndicator ?? !1),
          (this._multiple = !1),
          (this.disableOptionCentering =
            this._defaultOptions?.disableOptionCentering ?? !1),
          (this.ariaLabel = ""),
          (this.panelWidth =
            this._defaultOptions && typeof this._defaultOptions.panelWidth < "u"
              ? this._defaultOptions.panelWidth
              : "auto"),
          (this._initialized = new E()),
          (this.optionSelectionChanges = De(() => {
            let U = this.options;
            return U
              ? U.changes.pipe(
                  te(U),
                  Ft(() => ge(...U.map((It) => It.onSelectionChange)))
                )
              : this._initialized.pipe(Ft(() => this.optionSelectionChanges));
          })),
          (this.openedChange = new et()),
          (this._openedStream = this.openedChange.pipe(
            ht((U) => U),
            B(() => {})
          )),
          (this._closedStream = this.openedChange.pipe(
            ht((U) => !U),
            B(() => {})
          )),
          (this.selectionChange = new et()),
          (this.valueChange = new et()),
          (this._trackedModal = null),
          (this._skipPredicate = (U) => (this.panelOpen ? !1 : U.disabled)),
          this.ngControl && (this.ngControl.valueAccessor = this),
          N?.typeaheadDebounceInterval != null &&
            (this.typeaheadDebounceInterval = N.typeaheadDebounceInterval),
          (this._errorStateTracker = new Cn(a, g, m, l, this.stateChanges)),
          (this._scrollStrategyFactory = S),
          (this._scrollStrategy = this._scrollStrategyFactory()),
          (this.tabIndex = parseInt(k) || 0),
          (this.id = this.id);
      }
      ngOnInit() {
        (this._selectionModel = new Ha(this.multiple)),
          this.stateChanges.next(),
          this._panelDoneAnimatingStream
            .pipe(Yn(), tt(this._destroy))
            .subscribe(() => this._panelDoneAnimating(this.panelOpen)),
          this._viewportRuler
            .change()
            .pipe(tt(this._destroy))
            .subscribe(() => {
              this.panelOpen &&
                ((this._overlayWidth = this._getOverlayWidth(
                  this._preferredOverlayOrigin
                )),
                this._changeDetectorRef.detectChanges());
            });
      }
      ngAfterContentInit() {
        this._initialized.next(),
          this._initialized.complete(),
          this._initKeyManager(),
          this._selectionModel.changed
            .pipe(tt(this._destroy))
            .subscribe((e) => {
              e.added.forEach((i) => i.select()),
                e.removed.forEach((i) => i.deselect());
            }),
          this.options.changes
            .pipe(te(null), tt(this._destroy))
            .subscribe(() => {
              this._resetOptions(), this._initializeSelection();
            });
      }
      ngDoCheck() {
        let e = this._getTriggerAriaLabelledby(),
          i = this.ngControl;
        if (e !== this._triggerAriaLabelledBy) {
          let r = this._elementRef.nativeElement;
          (this._triggerAriaLabelledBy = e),
            e
              ? r.setAttribute("aria-labelledby", e)
              : r.removeAttribute("aria-labelledby");
        }
        i &&
          (this._previousControl !== i.control &&
            (this._previousControl !== void 0 &&
              i.disabled !== null &&
              i.disabled !== this.disabled &&
              (this.disabled = i.disabled),
            (this._previousControl = i.control)),
          this.updateErrorState());
      }
      ngOnChanges(e) {
        (e.disabled || e.userAriaDescribedBy) && this.stateChanges.next(),
          e.typeaheadDebounceInterval &&
            this._keyManager &&
            this._keyManager.withTypeAhead(this.typeaheadDebounceInterval);
      }
      ngOnDestroy() {
        this._keyManager?.destroy(),
          this._destroy.next(),
          this._destroy.complete(),
          this.stateChanges.complete(),
          this._clearFromModal();
      }
      toggle() {
        this.panelOpen ? this.close() : this.open();
      }
      open() {
        this._canOpen() &&
          (this._parentFormField &&
            (this._preferredOverlayOrigin =
              this._parentFormField.getConnectedOverlayOrigin()),
          (this._overlayWidth = this._getOverlayWidth(
            this._preferredOverlayOrigin
          )),
          this._applyModalPanelOwnership(),
          (this._panelOpen = !0),
          this._keyManager.withHorizontalOrientation(null),
          this._highlightCorrectOption(),
          this._changeDetectorRef.markForCheck(),
          this.stateChanges.next());
      }
      _applyModalPanelOwnership() {
        let e = this._elementRef.nativeElement.closest(
          'body > .cdk-overlay-container [aria-modal="true"]'
        );
        if (!e) return;
        let i = `${this.id}-panel`;
        this._trackedModal && fa(this._trackedModal, "aria-owns", i),
          Uc(e, "aria-owns", i),
          (this._trackedModal = e);
      }
      _clearFromModal() {
        if (!this._trackedModal) return;
        let e = `${this.id}-panel`;
        fa(this._trackedModal, "aria-owns", e), (this._trackedModal = null);
      }
      close() {
        this._panelOpen &&
          ((this._panelOpen = !1),
          this._keyManager.withHorizontalOrientation(
            this._isRtl() ? "rtl" : "ltr"
          ),
          this._changeDetectorRef.markForCheck(),
          this._onTouched(),
          this.stateChanges.next());
      }
      writeValue(e) {
        this._assignValue(e);
      }
      registerOnChange(e) {
        this._onChange = e;
      }
      registerOnTouched(e) {
        this._onTouched = e;
      }
      setDisabledState(e) {
        (this.disabled = e),
          this._changeDetectorRef.markForCheck(),
          this.stateChanges.next();
      }
      get panelOpen() {
        return this._panelOpen;
      }
      get selected() {
        return this.multiple
          ? this._selectionModel?.selected || []
          : this._selectionModel?.selected[0];
      }
      get triggerValue() {
        if (this.empty) return "";
        if (this._multiple) {
          let e = this._selectionModel.selected.map((i) => i.viewValue);
          return this._isRtl() && e.reverse(), e.join(", ");
        }
        return this._selectionModel.selected[0].viewValue;
      }
      updateErrorState() {
        this._errorStateTracker.updateErrorState();
      }
      _isRtl() {
        return this._dir ? this._dir.value === "rtl" : !1;
      }
      _handleKeydown(e) {
        this.disabled ||
          (this.panelOpen
            ? this._handleOpenKeydown(e)
            : this._handleClosedKeydown(e));
      }
      _handleClosedKeydown(e) {
        let i = e.keyCode,
          r = i === 40 || i === 38 || i === 37 || i === 39,
          a = i === 13 || i === 32,
          s = this._keyManager;
        if (
          (!s.isTyping() && a && !Ut(e)) ||
          ((this.multiple || e.altKey) && r)
        )
          e.preventDefault(), this.open();
        else if (!this.multiple) {
          let c = this.selected;
          s.onKeydown(e);
          let l = this.selected;
          l && c !== l && this._liveAnnouncer.announce(l.viewValue, 1e4);
        }
      }
      _handleOpenKeydown(e) {
        let i = this._keyManager,
          r = e.keyCode,
          a = r === 40 || r === 38,
          s = i.isTyping();
        if (a && e.altKey) e.preventDefault(), this.close();
        else if (!s && (r === 13 || r === 32) && i.activeItem && !Ut(e))
          e.preventDefault(), i.activeItem._selectViaInteraction();
        else if (!s && this._multiple && r === 65 && e.ctrlKey) {
          e.preventDefault();
          let c = this.options.some((l) => !l.disabled && !l.selected);
          this.options.forEach((l) => {
            l.disabled || (c ? l.select() : l.deselect());
          });
        } else {
          let c = i.activeItemIndex;
          i.onKeydown(e),
            this._multiple &&
              a &&
              e.shiftKey &&
              i.activeItem &&
              i.activeItemIndex !== c &&
              i.activeItem._selectViaInteraction();
        }
      }
      _onFocus() {
        this.disabled || ((this._focused = !0), this.stateChanges.next());
      }
      _onBlur() {
        (this._focused = !1),
          this._keyManager?.cancelTypeahead(),
          !this.disabled &&
            !this.panelOpen &&
            (this._onTouched(),
            this._changeDetectorRef.markForCheck(),
            this.stateChanges.next());
      }
      _onAttached() {
        this._overlayDir.positionChange.pipe(_t(1)).subscribe(() => {
          this._changeDetectorRef.detectChanges(), this._positioningSettled();
        });
      }
      _getPanelTheme() {
        return this._parentFormField
          ? `mat-${this._parentFormField.color}`
          : "";
      }
      get empty() {
        return !this._selectionModel || this._selectionModel.isEmpty();
      }
      _initializeSelection() {
        Promise.resolve().then(() => {
          this.ngControl && (this._value = this.ngControl.value),
            this._setSelectionByValue(this._value),
            this.stateChanges.next();
        });
      }
      _setSelectionByValue(e) {
        if (
          (this.options.forEach((i) => i.setInactiveStyles()),
          this._selectionModel.clear(),
          this.multiple && e)
        )
          Array.isArray(e),
            e.forEach((i) => this._selectOptionByValue(i)),
            this._sortValues();
        else {
          let i = this._selectOptionByValue(e);
          i
            ? this._keyManager.updateActiveItem(i)
            : this.panelOpen || this._keyManager.updateActiveItem(-1);
        }
        this._changeDetectorRef.markForCheck();
      }
      _selectOptionByValue(e) {
        let i = this.options.find((r) => {
          if (this._selectionModel.isSelected(r)) return !1;
          try {
            return r.value != null && this._compareWith(r.value, e);
          } catch {
            return !1;
          }
        });
        return i && this._selectionModel.select(i), i;
      }
      _assignValue(e) {
        return e !== this._value || (this._multiple && Array.isArray(e))
          ? (this.options && this._setSelectionByValue(e),
            (this._value = e),
            !0)
          : !1;
      }
      _getOverlayWidth(e) {
        return this.panelWidth === "auto"
          ? (e instanceof Jo
              ? e.elementRef
              : e || this._elementRef
            ).nativeElement.getBoundingClientRect().width
          : this.panelWidth === null
          ? ""
          : this.panelWidth;
      }
      _syncParentProperties() {
        if (this.options)
          for (let e of this.options) e._changeDetectorRef.markForCheck();
      }
      _initKeyManager() {
        (this._keyManager = new ha(this.options)
          .withTypeAhead(this.typeaheadDebounceInterval)
          .withVerticalOrientation()
          .withHorizontalOrientation(this._isRtl() ? "rtl" : "ltr")
          .withHomeAndEnd()
          .withPageUpDown()
          .withAllowedModifierKeys(["shiftKey"])
          .skipPredicate(this._skipPredicate)),
          this._keyManager.tabOut.subscribe(() => {
            this.panelOpen &&
              (!this.multiple &&
                this._keyManager.activeItem &&
                this._keyManager.activeItem._selectViaInteraction(),
              this.focus(),
              this.close());
          }),
          this._keyManager.change.subscribe(() => {
            this._panelOpen && this.panel
              ? this._scrollOptionIntoView(
                  this._keyManager.activeItemIndex || 0
                )
              : !this._panelOpen &&
                !this.multiple &&
                this._keyManager.activeItem &&
                this._keyManager.activeItem._selectViaInteraction();
          });
      }
      _resetOptions() {
        let e = ge(this.options.changes, this._destroy);
        this.optionSelectionChanges.pipe(tt(e)).subscribe((i) => {
          this._onSelect(i.source, i.isUserInput),
            i.isUserInput &&
              !this.multiple &&
              this._panelOpen &&
              (this.close(), this.focus());
        }),
          ge(...this.options.map((i) => i._stateChanges))
            .pipe(tt(e))
            .subscribe(() => {
              this._changeDetectorRef.detectChanges(), this.stateChanges.next();
            });
      }
      _onSelect(e, i) {
        let r = this._selectionModel.isSelected(e);
        e.value == null && !this._multiple
          ? (e.deselect(),
            this._selectionModel.clear(),
            this.value != null && this._propagateChanges(e.value))
          : (r !== e.selected &&
              (e.selected
                ? this._selectionModel.select(e)
                : this._selectionModel.deselect(e)),
            i && this._keyManager.setActiveItem(e),
            this.multiple && (this._sortValues(), i && this.focus())),
          r !== this._selectionModel.isSelected(e) && this._propagateChanges(),
          this.stateChanges.next();
      }
      _sortValues() {
        if (this.multiple) {
          let e = this.options.toArray();
          this._selectionModel.sort((i, r) =>
            this.sortComparator
              ? this.sortComparator(i, r, e)
              : e.indexOf(i) - e.indexOf(r)
          ),
            this.stateChanges.next();
        }
      }
      _propagateChanges(e) {
        let i;
        this.multiple
          ? (i = this.selected.map((r) => r.value))
          : (i = this.selected ? this.selected.value : e),
          (this._value = i),
          this.valueChange.emit(i),
          this._onChange(i),
          this.selectionChange.emit(this._getChangeEvent(i)),
          this._changeDetectorRef.markForCheck();
      }
      _highlightCorrectOption() {
        if (this._keyManager)
          if (this.empty) {
            let e = -1;
            for (let i = 0; i < this.options.length; i++)
              if (!this.options.get(i).disabled) {
                e = i;
                break;
              }
            this._keyManager.setActiveItem(e);
          } else
            this._keyManager.setActiveItem(this._selectionModel.selected[0]);
      }
      _canOpen() {
        return !this._panelOpen && !this.disabled && this.options?.length > 0;
      }
      focus(e) {
        this._elementRef.nativeElement.focus(e);
      }
      _getPanelAriaLabelledby() {
        if (this.ariaLabel) return null;
        let e = this._parentFormField?.getLabelId(),
          i = e ? e + " " : "";
        return this.ariaLabelledby ? i + this.ariaLabelledby : e;
      }
      _getAriaActiveDescendant() {
        return this.panelOpen && this._keyManager && this._keyManager.activeItem
          ? this._keyManager.activeItem.id
          : null;
      }
      _getTriggerAriaLabelledby() {
        if (this.ariaLabel) return null;
        let e = this._parentFormField?.getLabelId(),
          i = (e ? e + " " : "") + this._valueId;
        return this.ariaLabelledby && (i += " " + this.ariaLabelledby), i;
      }
      _panelDoneAnimating(e) {
        this.openedChange.emit(e);
      }
      setDescribedByIds(e) {
        e.length
          ? this._elementRef.nativeElement.setAttribute(
              "aria-describedby",
              e.join(" ")
            )
          : this._elementRef.nativeElement.removeAttribute("aria-describedby");
      }
      onContainerClick() {
        this.focus(), this.open();
      }
      get shouldLabelFloat() {
        return (
          this.panelOpen || !this.empty || (this.focused && !!this.placeholder)
        );
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(
        d(Mn),
        d(St),
        d(D),
        d(Ca),
        d(L),
        d(se, 8),
        d(ar, 8),
        d(Qt, 8),
        d(cr, 8),
        d(He, 10),
        Xe("tabindex"),
        d($p),
        d(ba),
        d(Cy, 8)
      );
    }),
      (t.ɵcmp = z({
        type: t,
        selectors: [["mat-select"]],
        contentQueries: function (i, r, a) {
          if ((i & 1 && (Vt(a, Sy, 5), Vt(a, En, 5), Vt(a, tl, 5)), i & 2)) {
            let s;
            X((s = Z())) && (r.customTrigger = s.first),
              X((s = Z())) && (r.options = s),
              X((s = Z())) && (r.optionGroups = s);
          }
        },
        viewQuery: function (i, r) {
          if ((i & 1 && (ft(uy, 5), ft(py, 5), ft(Sl, 5)), i & 2)) {
            let a;
            X((a = Z())) && (r.trigger = a.first),
              X((a = Z())) && (r.panel = a.first),
              X((a = Z())) && (r._overlayDir = a.first);
          }
        },
        hostAttrs: [
          "role",
          "combobox",
          "aria-autocomplete",
          "none",
          "aria-haspopup",
          "listbox",
          1,
          "mat-mdc-select",
        ],
        hostVars: 19,
        hostBindings: function (i, r) {
          i & 1 &&
            j("keydown", function (s) {
              return r._handleKeydown(s);
            })("focus", function () {
              return r._onFocus();
            })("blur", function () {
              return r._onBlur();
            }),
            i & 2 &&
              (K("id", r.id)("tabindex", r.disabled ? -1 : r.tabIndex)(
                "aria-controls",
                r.panelOpen ? r.id + "-panel" : null
              )("aria-expanded", r.panelOpen)(
                "aria-label",
                r.ariaLabel || null
              )("aria-required", r.required.toString())(
                "aria-disabled",
                r.disabled.toString()
              )("aria-invalid", r.errorState)(
                "aria-activedescendant",
                r._getAriaActiveDescendant()
              ),
              q("mat-mdc-select-disabled", r.disabled)(
                "mat-mdc-select-invalid",
                r.errorState
              )("mat-mdc-select-required", r.required)(
                "mat-mdc-select-empty",
                r.empty
              )("mat-mdc-select-multiple", r.multiple));
        },
        inputs: {
          userAriaDescribedBy: [0, "aria-describedby", "userAriaDescribedBy"],
          panelClass: "panelClass",
          disabled: [2, "disabled", "disabled", it],
          disableRipple: [2, "disableRipple", "disableRipple", it],
          tabIndex: [2, "tabIndex", "tabIndex", (e) => (e == null ? 0 : ve(e))],
          hideSingleSelectionIndicator: [
            2,
            "hideSingleSelectionIndicator",
            "hideSingleSelectionIndicator",
            it,
          ],
          placeholder: "placeholder",
          required: [2, "required", "required", it],
          multiple: [2, "multiple", "multiple", it],
          disableOptionCentering: [
            2,
            "disableOptionCentering",
            "disableOptionCentering",
            it,
          ],
          compareWith: "compareWith",
          value: "value",
          ariaLabel: [0, "aria-label", "ariaLabel"],
          ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
          errorStateMatcher: "errorStateMatcher",
          typeaheadDebounceInterval: [
            2,
            "typeaheadDebounceInterval",
            "typeaheadDebounceInterval",
            ve,
          ],
          sortComparator: "sortComparator",
          id: "id",
          panelWidth: "panelWidth",
        },
        outputs: {
          openedChange: "openedChange",
          _openedStream: "opened",
          _closedStream: "closed",
          selectionChange: "selectionChange",
          valueChange: "valueChange",
        },
        exportAs: ["matSelect"],
        standalone: !0,
        features: [
          Pt([
            { provide: sr, useExisting: t },
            { provide: Jc, useExisting: t },
          ]),
          Mt,
          zt,
          V,
        ],
        ngContentSelectors: gy,
        decls: 11,
        vars: 8,
        consts: [
          ["fallbackOverlayOrigin", "cdkOverlayOrigin", "trigger", ""],
          ["panel", ""],
          ["cdk-overlay-origin", "", 1, "mat-mdc-select-trigger", 3, "click"],
          [1, "mat-mdc-select-value"],
          [1, "mat-mdc-select-placeholder", "mat-mdc-select-min-line"],
          [1, "mat-mdc-select-value-text"],
          [1, "mat-mdc-select-arrow-wrapper"],
          [1, "mat-mdc-select-arrow"],
          [
            "viewBox",
            "0 0 24 24",
            "width",
            "24px",
            "height",
            "24px",
            "focusable",
            "false",
            "aria-hidden",
            "true",
          ],
          ["d", "M7 10l5 5 5-5z"],
          [
            "cdk-connected-overlay",
            "",
            "cdkConnectedOverlayLockPosition",
            "",
            "cdkConnectedOverlayHasBackdrop",
            "",
            "cdkConnectedOverlayBackdropClass",
            "cdk-overlay-transparent-backdrop",
            3,
            "backdropClick",
            "attach",
            "detach",
            "cdkConnectedOverlayPanelClass",
            "cdkConnectedOverlayScrollStrategy",
            "cdkConnectedOverlayOrigin",
            "cdkConnectedOverlayOpen",
            "cdkConnectedOverlayPositions",
            "cdkConnectedOverlayWidth",
          ],
          [1, "mat-mdc-select-min-line"],
          ["role", "listbox", "tabindex", "-1", 3, "keydown", "ngClass"],
        ],
        template: function (i, r) {
          if (i & 1) {
            let a = vt();
            Ct(fy),
              u(0, "div", 2, 0),
              j("click", function () {
                return st(a), ct(r.open());
              }),
              u(3, "div", 3),
              A(4, by, 2, 1, "span", 4)(5, xy, 3, 1, "span", 5),
              p(),
              u(6, "div", 6)(7, "div", 7),
              Ye(),
              u(8, "svg", 8),
              O(9, "path", 9),
              p()()()(),
              A(10, yy, 3, 9, "ng-template", 10),
              j("backdropClick", function () {
                return st(a), ct(r.close());
              })("attach", function () {
                return st(a), ct(r._onAttached());
              })("detach", function () {
                return st(a), ct(r.close());
              });
          }
          if (i & 2) {
            let a = Ke(1);
            v(3),
              K("id", r._valueId),
              v(),
              ot(r.empty ? 4 : 5),
              v(6),
              C("cdkConnectedOverlayPanelClass", r._overlayPanelClass)(
                "cdkConnectedOverlayScrollStrategy",
                r._scrollStrategy
              )("cdkConnectedOverlayOrigin", r._preferredOverlayOrigin || a)(
                "cdkConnectedOverlayOpen",
                r.panelOpen
              )("cdkConnectedOverlayPositions", r._positions)(
                "cdkConnectedOverlayWidth",
                r._overlayWidth
              );
          }
        },
        dependencies: [Jo, Sl, Mr],
        styles: [
          '.mat-mdc-select{display:inline-block;width:100%;outline:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-select-enabled-trigger-text-color);font-family:var(--mat-select-trigger-text-font);line-height:var(--mat-select-trigger-text-line-height);font-size:var(--mat-select-trigger-text-size);font-weight:var(--mat-select-trigger-text-weight);letter-spacing:var(--mat-select-trigger-text-tracking)}div.mat-mdc-select-panel{box-shadow:var(--mat-select-container-elevation-shadow)}.mat-mdc-select-disabled{color:var(--mat-select-disabled-trigger-text-color)}.mat-mdc-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-mdc-select-disabled .mat-mdc-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-mdc-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-mdc-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-mdc-select-arrow-wrapper{height:24px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper{transform:none}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after{color:var(--mat-select-invalid-arrow-color)}.mat-mdc-select-arrow{width:10px;height:5px;position:relative;color:var(--mat-select-enabled-arrow-color)}.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow{color:var(--mat-select-focused-arrow-color)}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow{color:var(--mat-select-disabled-arrow-color)}.mat-mdc-select-arrow svg{fill:currentColor;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.cdk-high-contrast-active .mat-mdc-select-arrow svg{fill:CanvasText}.mat-mdc-select-disabled .cdk-high-contrast-active .mat-mdc-select-arrow svg{fill:GrayText}div.mat-mdc-select-panel{width:100%;max-height:275px;outline:0;overflow:auto;padding:8px 0;border-radius:4px;box-sizing:border-box;position:static;background-color:var(--mat-select-panel-background-color)}.cdk-high-contrast-active div.mat-mdc-select-panel{outline:solid 1px}.cdk-overlay-pane:not(.mat-mdc-select-panel-above) div.mat-mdc-select-panel{border-top-left-radius:0;border-top-right-radius:0;transform-origin:top center}.mat-mdc-select-panel-above div.mat-mdc-select-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:bottom center}div.mat-mdc-select-panel .mat-mdc-option{--mdc-list-list-item-container-color: var(--mat-select-panel-background-color)}.mat-mdc-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);color:var(--mat-select-placeholder-text-color)}._mat-animation-noopable .mat-mdc-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-mdc-select-placeholder{color:rgba(0,0,0,0);-webkit-text-fill-color:rgba(0,0,0,0);transition:none;display:block}.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper{cursor:pointer}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label{max-width:calc(100% - 18px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 24px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch{max-width:calc(100% - 24px)}.mat-mdc-select-min-line:empty::before{content:" ";white-space:pre;width:1px;display:inline-block;visibility:hidden}.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper{transform:var(--mat-select-arrow-transform)}',
        ],
        encapsulation: 2,
        data: { animation: [wy.transformPanel] },
        changeDetection: 0,
      }));
    let n = t;
    return n;
  })();
var cs = (() => {
  let t = class t {};
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵmod = T({ type: t })),
    (t.ɵinj = M({ providers: [Ey], imports: [yt, Ue, Bo, Q, An, Kt, Bo, Q] }));
  let n = t;
  return n;
})();
var Dy = ["*"],
  ls;
function Ay() {
  if (ls === void 0 && ((ls = null), typeof window < "u")) {
    let n = window;
    n.trustedTypes !== void 0 &&
      (ls = n.trustedTypes.createPolicy("angular#components", {
        createHTML: (t) => t,
      }));
  }
  return ls;
}
function mr(n) {
  return Ay()?.createHTML(n) || n;
}
function Wp(n) {
  return Error(`Unable to find icon with the name "${n}"`);
}
function My() {
  return Error(
    "Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports."
  );
}
function qp(n) {
  return Error(
    `The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`
  );
}
function Gp(n) {
  return Error(
    `The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`
  );
}
var We = class {
    constructor(t, o, e) {
      (this.url = t), (this.svgText = o), (this.options = e);
    }
  },
  Ty = (() => {
    let t = class t {
      constructor(e, i, r, a) {
        (this._httpClient = e),
          (this._sanitizer = i),
          (this._errorHandler = a),
          (this._svgIconConfigs = new Map()),
          (this._iconSetConfigs = new Map()),
          (this._cachedIconsByUrl = new Map()),
          (this._inProgressUrlFetches = new Map()),
          (this._fontCssClassesByAlias = new Map()),
          (this._resolvers = []),
          (this._defaultFontSetClass = ["material-icons", "mat-ligature-font"]),
          (this._document = r);
      }
      addSvgIcon(e, i, r) {
        return this.addSvgIconInNamespace("", e, i, r);
      }
      addSvgIconLiteral(e, i, r) {
        return this.addSvgIconLiteralInNamespace("", e, i, r);
      }
      addSvgIconInNamespace(e, i, r, a) {
        return this._addSvgIconConfig(e, i, new We(r, null, a));
      }
      addSvgIconResolver(e) {
        return this._resolvers.push(e), this;
      }
      addSvgIconLiteralInNamespace(e, i, r, a) {
        let s = this._sanitizer.sanitize(qt.HTML, r);
        if (!s) throw Gp(r);
        let c = mr(s);
        return this._addSvgIconConfig(e, i, new We("", c, a));
      }
      addSvgIconSet(e, i) {
        return this.addSvgIconSetInNamespace("", e, i);
      }
      addSvgIconSetLiteral(e, i) {
        return this.addSvgIconSetLiteralInNamespace("", e, i);
      }
      addSvgIconSetInNamespace(e, i, r) {
        return this._addSvgIconSetConfig(e, new We(i, null, r));
      }
      addSvgIconSetLiteralInNamespace(e, i, r) {
        let a = this._sanitizer.sanitize(qt.HTML, i);
        if (!a) throw Gp(i);
        let s = mr(a);
        return this._addSvgIconSetConfig(e, new We("", s, r));
      }
      registerFontClassAlias(e, i = e) {
        return this._fontCssClassesByAlias.set(e, i), this;
      }
      classNameForFontAlias(e) {
        return this._fontCssClassesByAlias.get(e) || e;
      }
      setDefaultFontSetClass(...e) {
        return (this._defaultFontSetClass = e), this;
      }
      getDefaultFontSetClass() {
        return this._defaultFontSetClass;
      }
      getSvgIconFromUrl(e) {
        let i = this._sanitizer.sanitize(qt.RESOURCE_URL, e);
        if (!i) throw qp(e);
        let r = this._cachedIconsByUrl.get(i);
        return r
          ? I(ds(r))
          : this._loadSvgIconFromConfig(new We(e, null)).pipe(
              lt((a) => this._cachedIconsByUrl.set(i, a)),
              B((a) => ds(a))
            );
      }
      getNamedSvgIcon(e, i = "") {
        let r = Yp(i, e),
          a = this._svgIconConfigs.get(r);
        if (a) return this._getSvgFromConfig(a);
        if (((a = this._getIconConfigFromResolvers(i, e)), a))
          return this._svgIconConfigs.set(r, a), this._getSvgFromConfig(a);
        let s = this._iconSetConfigs.get(i);
        return s ? this._getSvgFromIconSetConfigs(e, s) : jt(Wp(r));
      }
      ngOnDestroy() {
        (this._resolvers = []),
          this._svgIconConfigs.clear(),
          this._iconSetConfigs.clear(),
          this._cachedIconsByUrl.clear();
      }
      _getSvgFromConfig(e) {
        return e.svgText
          ? I(ds(this._svgElementFromConfig(e)))
          : this._loadSvgIconFromConfig(e).pipe(B((i) => ds(i)));
      }
      _getSvgFromIconSetConfigs(e, i) {
        let r = this._extractIconWithNameFromAnySet(e, i);
        if (r) return I(r);
        let a = i
          .filter((s) => !s.svgText)
          .map((s) =>
            this._loadSvgIconSetFromConfig(s).pipe(
              Dt((c) => {
                let m = `Loading icon set URL: ${this._sanitizer.sanitize(
                  qt.RESOURCE_URL,
                  s.url
                )} failed: ${c.message}`;
                return this._errorHandler.handleError(new Error(m)), I(null);
              })
            )
          );
        return gr(a).pipe(
          B(() => {
            let s = this._extractIconWithNameFromAnySet(e, i);
            if (!s) throw Wp(e);
            return s;
          })
        );
      }
      _extractIconWithNameFromAnySet(e, i) {
        for (let r = i.length - 1; r >= 0; r--) {
          let a = i[r];
          if (a.svgText && a.svgText.toString().indexOf(e) > -1) {
            let s = this._svgElementFromConfig(a),
              c = this._extractSvgIconFromSet(s, e, a.options);
            if (c) return c;
          }
        }
        return null;
      }
      _loadSvgIconFromConfig(e) {
        return this._fetchIcon(e).pipe(
          lt((i) => (e.svgText = i)),
          B(() => this._svgElementFromConfig(e))
        );
      }
      _loadSvgIconSetFromConfig(e) {
        return e.svgText
          ? I(null)
          : this._fetchIcon(e).pipe(lt((i) => (e.svgText = i)));
      }
      _extractSvgIconFromSet(e, i, r) {
        let a = e.querySelector(`[id="${i}"]`);
        if (!a) return null;
        let s = a.cloneNode(!0);
        if ((s.removeAttribute("id"), s.nodeName.toLowerCase() === "svg"))
          return this._setSvgAttributes(s, r);
        if (s.nodeName.toLowerCase() === "symbol")
          return this._setSvgAttributes(this._toSvgElement(s), r);
        let c = this._svgElementFromString(mr("<svg></svg>"));
        return c.appendChild(s), this._setSvgAttributes(c, r);
      }
      _svgElementFromString(e) {
        let i = this._document.createElement("DIV");
        i.innerHTML = e;
        let r = i.querySelector("svg");
        if (!r) throw Error("<svg> tag not found");
        return r;
      }
      _toSvgElement(e) {
        let i = this._svgElementFromString(mr("<svg></svg>")),
          r = e.attributes;
        for (let a = 0; a < r.length; a++) {
          let { name: s, value: c } = r[a];
          s !== "id" && i.setAttribute(s, c);
        }
        for (let a = 0; a < e.childNodes.length; a++)
          e.childNodes[a].nodeType === this._document.ELEMENT_NODE &&
            i.appendChild(e.childNodes[a].cloneNode(!0));
        return i;
      }
      _setSvgAttributes(e, i) {
        return (
          e.setAttribute("fit", ""),
          e.setAttribute("height", "100%"),
          e.setAttribute("width", "100%"),
          e.setAttribute("preserveAspectRatio", "xMidYMid meet"),
          e.setAttribute("focusable", "false"),
          i && i.viewBox && e.setAttribute("viewBox", i.viewBox),
          e
        );
      }
      _fetchIcon(e) {
        let { url: i, options: r } = e,
          a = r?.withCredentials ?? !1;
        if (!this._httpClient) throw My();
        if (i == null) throw Error(`Cannot fetch icon from URL "${i}".`);
        let s = this._sanitizer.sanitize(qt.RESOURCE_URL, i);
        if (!s) throw qp(i);
        let c = this._inProgressUrlFetches.get(s);
        if (c) return c;
        let l = this._httpClient
          .get(s, { responseType: "text", withCredentials: a })
          .pipe(
            B((m) => mr(m)),
            Ae(() => this._inProgressUrlFetches.delete(s)),
            _r()
          );
        return this._inProgressUrlFetches.set(s, l), l;
      }
      _addSvgIconConfig(e, i, r) {
        return this._svgIconConfigs.set(Yp(e, i), r), this;
      }
      _addSvgIconSetConfig(e, i) {
        let r = this._iconSetConfigs.get(e);
        return r ? r.push(i) : this._iconSetConfigs.set(e, [i]), this;
      }
      _svgElementFromConfig(e) {
        if (!e.svgElement) {
          let i = this._svgElementFromString(e.svgText);
          this._setSvgAttributes(i, e.options), (e.svgElement = i);
        }
        return e.svgElement;
      }
      _getIconConfigFromResolvers(e, i) {
        for (let r = 0; r < this._resolvers.length; r++) {
          let a = this._resolvers[r](i, e);
          if (a)
            return Oy(a) ? new We(a.url, null, a.options) : new We(a, null);
        }
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(h(Gt, 8), h(Gs), h(R, 8), h(Ti));
    }),
      (t.ɵprov = x({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })();
function ds(n) {
  return n.cloneNode(!0);
}
function Yp(n, t) {
  return n + ":" + t;
}
function Oy(n) {
  return !!(n.url && n.options);
}
var Ry = new w("MAT_ICON_DEFAULT_OPTIONS"),
  Fy = new w("mat-icon-location", { providedIn: "root", factory: Py });
function Py() {
  let n = _(R),
    t = n ? n.location : null;
  return { getPathname: () => (t ? t.pathname + t.search : "") };
}
var Xp = [
    "clip-path",
    "color-profile",
    "src",
    "cursor",
    "fill",
    "filter",
    "marker",
    "marker-start",
    "marker-mid",
    "marker-end",
    "mask",
    "stroke",
  ],
  Ly = Xp.map((n) => `[${n}]`).join(", "),
  Ny = /^url\(['"]?#(.*?)['"]?\)$/,
  Zp = (() => {
    let t = class t {
      get color() {
        return this._color || this._defaultColor;
      }
      set color(e) {
        this._color = e;
      }
      get svgIcon() {
        return this._svgIcon;
      }
      set svgIcon(e) {
        e !== this._svgIcon &&
          (e
            ? this._updateSvgIcon(e)
            : this._svgIcon && this._clearSvgElement(),
          (this._svgIcon = e));
      }
      get fontSet() {
        return this._fontSet;
      }
      set fontSet(e) {
        let i = this._cleanupFontValue(e);
        i !== this._fontSet &&
          ((this._fontSet = i), this._updateFontIconClasses());
      }
      get fontIcon() {
        return this._fontIcon;
      }
      set fontIcon(e) {
        let i = this._cleanupFontValue(e);
        i !== this._fontIcon &&
          ((this._fontIcon = i), this._updateFontIconClasses());
      }
      constructor(e, i, r, a, s, c) {
        (this._elementRef = e),
          (this._iconRegistry = i),
          (this._location = a),
          (this._errorHandler = s),
          (this.inline = !1),
          (this._previousFontSetClass = []),
          (this._currentIconFetch = Lt.EMPTY),
          c &&
            (c.color && (this.color = this._defaultColor = c.color),
            c.fontSet && (this.fontSet = c.fontSet)),
          r || e.nativeElement.setAttribute("aria-hidden", "true");
      }
      _splitIconName(e) {
        if (!e) return ["", ""];
        let i = e.split(":");
        switch (i.length) {
          case 1:
            return ["", i[0]];
          case 2:
            return i;
          default:
            throw Error(`Invalid icon name: "${e}"`);
        }
      }
      ngOnInit() {
        this._updateFontIconClasses();
      }
      ngAfterViewChecked() {
        let e = this._elementsWithExternalReferences;
        if (e && e.size) {
          let i = this._location.getPathname();
          i !== this._previousPath &&
            ((this._previousPath = i), this._prependPathToReferences(i));
        }
      }
      ngOnDestroy() {
        this._currentIconFetch.unsubscribe(),
          this._elementsWithExternalReferences &&
            this._elementsWithExternalReferences.clear();
      }
      _usingFontIcon() {
        return !this.svgIcon;
      }
      _setSvgElement(e) {
        this._clearSvgElement();
        let i = this._location.getPathname();
        (this._previousPath = i),
          this._cacheChildrenWithExternalReferences(e),
          this._prependPathToReferences(i),
          this._elementRef.nativeElement.appendChild(e);
      }
      _clearSvgElement() {
        let e = this._elementRef.nativeElement,
          i = e.childNodes.length;
        for (
          this._elementsWithExternalReferences &&
          this._elementsWithExternalReferences.clear();
          i--;

        ) {
          let r = e.childNodes[i];
          (r.nodeType !== 1 || r.nodeName.toLowerCase() === "svg") &&
            r.remove();
        }
      }
      _updateFontIconClasses() {
        if (!this._usingFontIcon()) return;
        let e = this._elementRef.nativeElement,
          i = (
            this.fontSet
              ? this._iconRegistry
                  .classNameForFontAlias(this.fontSet)
                  .split(/ +/)
              : this._iconRegistry.getDefaultFontSetClass()
          ).filter((r) => r.length > 0);
        this._previousFontSetClass.forEach((r) => e.classList.remove(r)),
          i.forEach((r) => e.classList.add(r)),
          (this._previousFontSetClass = i),
          this.fontIcon !== this._previousFontIconClass &&
            !i.includes("mat-ligature-font") &&
            (this._previousFontIconClass &&
              e.classList.remove(this._previousFontIconClass),
            this.fontIcon && e.classList.add(this.fontIcon),
            (this._previousFontIconClass = this.fontIcon));
      }
      _cleanupFontValue(e) {
        return typeof e == "string" ? e.trim().split(" ")[0] : e;
      }
      _prependPathToReferences(e) {
        let i = this._elementsWithExternalReferences;
        i &&
          i.forEach((r, a) => {
            r.forEach((s) => {
              a.setAttribute(s.name, `url('${e}#${s.value}')`);
            });
          });
      }
      _cacheChildrenWithExternalReferences(e) {
        let i = e.querySelectorAll(Ly),
          r = (this._elementsWithExternalReferences =
            this._elementsWithExternalReferences || new Map());
        for (let a = 0; a < i.length; a++)
          Xp.forEach((s) => {
            let c = i[a],
              l = c.getAttribute(s),
              m = l ? l.match(Ny) : null;
            if (m) {
              let f = r.get(c);
              f || ((f = []), r.set(c, f)), f.push({ name: s, value: m[1] });
            }
          });
      }
      _updateSvgIcon(e) {
        if (
          ((this._svgNamespace = null),
          (this._svgName = null),
          this._currentIconFetch.unsubscribe(),
          e)
        ) {
          let [i, r] = this._splitIconName(e);
          i && (this._svgNamespace = i),
            r && (this._svgName = r),
            (this._currentIconFetch = this._iconRegistry
              .getNamedSvgIcon(r, i)
              .pipe(_t(1))
              .subscribe(
                (a) => this._setSvgElement(a),
                (a) => {
                  let s = `Error retrieving icon ${i}:${r}! ${a.message}`;
                  this._errorHandler.handleError(new Error(s));
                }
              ));
        }
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(
        d(L),
        d(Ty),
        Xe("aria-hidden"),
        d(Fy),
        d(Ti),
        d(Ry, 8)
      );
    }),
      (t.ɵcmp = z({
        type: t,
        selectors: [["mat-icon"]],
        hostAttrs: ["role", "img", 1, "mat-icon", "notranslate"],
        hostVars: 10,
        hostBindings: function (i, r) {
          i & 2 &&
            (K("data-mat-icon-type", r._usingFontIcon() ? "font" : "svg")(
              "data-mat-icon-name",
              r._svgName || r.fontIcon
            )("data-mat-icon-namespace", r._svgNamespace || r.fontSet)(
              "fontIcon",
              r._usingFontIcon() ? r.fontIcon : null
            ),
            Qe(r.color ? "mat-" + r.color : ""),
            q("mat-icon-inline", r.inline)(
              "mat-icon-no-color",
              r.color !== "primary" &&
                r.color !== "accent" &&
                r.color !== "warn"
            ));
        },
        inputs: {
          color: "color",
          inline: [2, "inline", "inline", it],
          svgIcon: "svgIcon",
          fontSet: "fontSet",
          fontIcon: "fontIcon",
        },
        exportAs: ["matIcon"],
        standalone: !0,
        features: [Mt, V],
        ngContentSelectors: Dy,
        decls: 1,
        vars: 0,
        template: function (i, r) {
          i & 1 && (Ct(), Y(0));
        },
        styles: [
          "mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}",
        ],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let n = t;
    return n;
  })(),
  ms = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵmod = T({ type: t })),
      (t.ɵinj = M({ imports: [Q, Q] }));
    let n = t;
    return n;
  })();
var zy = ["tooltip"],
  Jp = 20;
var tf = new w("mat-tooltip-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    let n = _(xt);
    return () => n.scrollStrategies.reposition({ scrollThrottle: Jp });
  },
});
function Vy(n) {
  return () => n.scrollStrategies.reposition({ scrollThrottle: Jp });
}
var By = { provide: tf, deps: [xt], useFactory: Vy };
function Uy() {
  return { showDelay: 0, hideDelay: 0, touchendHideDelay: 1500 };
}
var Hy = new w("mat-tooltip-default-options", {
  providedIn: "root",
  factory: Uy,
});
var Qp = "tooltip-panel",
  Kp = Ce({ passive: !0 }),
  $y = 8,
  Wy = 8,
  qy = 24,
  Gy = 200,
  ef = (() => {
    let t = class t {
      get position() {
        return this._position;
      }
      set position(e) {
        e !== this._position &&
          ((this._position = e),
          this._overlayRef &&
            (this._updatePosition(this._overlayRef),
            this._tooltipInstance?.show(0),
            this._overlayRef.updatePosition()));
      }
      get positionAtOrigin() {
        return this._positionAtOrigin;
      }
      set positionAtOrigin(e) {
        (this._positionAtOrigin = Ee(e)),
          this._detach(),
          (this._overlayRef = null);
      }
      get disabled() {
        return this._disabled;
      }
      set disabled(e) {
        (this._disabled = Ee(e)),
          this._disabled
            ? this.hide(0)
            : this._setupPointerEnterEventsIfNeeded();
      }
      get showDelay() {
        return this._showDelay;
      }
      set showDelay(e) {
        this._showDelay = Ne(e);
      }
      get hideDelay() {
        return this._hideDelay;
      }
      set hideDelay(e) {
        (this._hideDelay = Ne(e)),
          this._tooltipInstance &&
            (this._tooltipInstance._mouseLeaveHideDelay = this._hideDelay);
      }
      get message() {
        return this._message;
      }
      set message(e) {
        this._ariaDescriber.removeDescription(
          this._elementRef.nativeElement,
          this._message,
          "tooltip"
        ),
          (this._message = e != null ? String(e).trim() : ""),
          !this._message && this._isTooltipVisible()
            ? this.hide(0)
            : (this._setupPointerEnterEventsIfNeeded(),
              this._updateTooltipMessage(),
              this._ngZone.runOutsideAngular(() => {
                Promise.resolve().then(() => {
                  this._ariaDescriber.describe(
                    this._elementRef.nativeElement,
                    this.message,
                    "tooltip"
                  );
                });
              }));
      }
      get tooltipClass() {
        return this._tooltipClass;
      }
      set tooltipClass(e) {
        (this._tooltipClass = e),
          this._tooltipInstance && this._setTooltipClass(this._tooltipClass);
      }
      constructor(e, i, r, a, s, c, l, m, f, g, k, S) {
        (this._overlay = e),
          (this._elementRef = i),
          (this._scrollDispatcher = r),
          (this._viewContainerRef = a),
          (this._ngZone = s),
          (this._platform = c),
          (this._ariaDescriber = l),
          (this._focusMonitor = m),
          (this._dir = g),
          (this._defaultOptions = k),
          (this._position = "below"),
          (this._positionAtOrigin = !1),
          (this._disabled = !1),
          (this._viewInitialized = !1),
          (this._pointerExitEventsInitialized = !1),
          (this._tooltipComponent = Yy),
          (this._viewportMargin = 8),
          (this._cssClassPrefix = "mat-mdc"),
          (this.touchGestures = "auto"),
          (this._message = ""),
          (this._passiveListeners = []),
          (this._destroyed = new E()),
          (this._scrollStrategy = f),
          (this._document = S),
          k &&
            ((this._showDelay = k.showDelay),
            (this._hideDelay = k.hideDelay),
            k.position && (this.position = k.position),
            k.positionAtOrigin && (this.positionAtOrigin = k.positionAtOrigin),
            k.touchGestures && (this.touchGestures = k.touchGestures)),
          g.change.pipe(tt(this._destroyed)).subscribe(() => {
            this._overlayRef && this._updatePosition(this._overlayRef);
          }),
          (this._viewportMargin = $y);
      }
      ngAfterViewInit() {
        (this._viewInitialized = !0),
          this._setupPointerEnterEventsIfNeeded(),
          this._focusMonitor
            .monitor(this._elementRef)
            .pipe(tt(this._destroyed))
            .subscribe((e) => {
              e
                ? e === "keyboard" && this._ngZone.run(() => this.show())
                : this._ngZone.run(() => this.hide(0));
            });
      }
      ngOnDestroy() {
        let e = this._elementRef.nativeElement;
        clearTimeout(this._touchstartTimeout),
          this._overlayRef &&
            (this._overlayRef.dispose(), (this._tooltipInstance = null)),
          this._passiveListeners.forEach(([i, r]) => {
            e.removeEventListener(i, r, Kp);
          }),
          (this._passiveListeners.length = 0),
          this._destroyed.next(),
          this._destroyed.complete(),
          this._ariaDescriber.removeDescription(e, this.message, "tooltip"),
          this._focusMonitor.stopMonitoring(e);
      }
      show(e = this.showDelay, i) {
        if (this.disabled || !this.message || this._isTooltipVisible()) {
          this._tooltipInstance?._cancelPendingAnimations();
          return;
        }
        let r = this._createOverlay(i);
        this._detach(),
          (this._portal =
            this._portal ||
            new pe(this._tooltipComponent, this._viewContainerRef));
        let a = (this._tooltipInstance = r.attach(this._portal).instance);
        (a._triggerElement = this._elementRef.nativeElement),
          (a._mouseLeaveHideDelay = this._hideDelay),
          a
            .afterHidden()
            .pipe(tt(this._destroyed))
            .subscribe(() => this._detach()),
          this._setTooltipClass(this._tooltipClass),
          this._updateTooltipMessage(),
          a.show(e);
      }
      hide(e = this.hideDelay) {
        let i = this._tooltipInstance;
        i &&
          (i.isVisible()
            ? i.hide(e)
            : (i._cancelPendingAnimations(), this._detach()));
      }
      toggle(e) {
        this._isTooltipVisible() ? this.hide() : this.show(void 0, e);
      }
      _isTooltipVisible() {
        return !!this._tooltipInstance && this._tooltipInstance.isVisible();
      }
      _createOverlay(e) {
        if (this._overlayRef) {
          let a = this._overlayRef.getConfig().positionStrategy;
          if ((!this.positionAtOrigin || !e) && a._origin instanceof L)
            return this._overlayRef;
          this._detach();
        }
        let i = this._scrollDispatcher.getAncestorScrollContainers(
            this._elementRef
          ),
          r = this._overlay
            .position()
            .flexibleConnectedTo(
              this.positionAtOrigin ? e || this._elementRef : this._elementRef
            )
            .withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`)
            .withFlexibleDimensions(!1)
            .withViewportMargin(this._viewportMargin)
            .withScrollableContainers(i);
        return (
          r.positionChanges.pipe(tt(this._destroyed)).subscribe((a) => {
            this._updateCurrentPositionClass(a.connectionPair),
              this._tooltipInstance &&
                a.scrollableViewProperties.isOverlayClipped &&
                this._tooltipInstance.isVisible() &&
                this._ngZone.run(() => this.hide(0));
          }),
          (this._overlayRef = this._overlay.create({
            direction: this._dir,
            positionStrategy: r,
            panelClass: `${this._cssClassPrefix}-${Qp}`,
            scrollStrategy: this._scrollStrategy(),
          })),
          this._updatePosition(this._overlayRef),
          this._overlayRef
            .detachments()
            .pipe(tt(this._destroyed))
            .subscribe(() => this._detach()),
          this._overlayRef
            .outsidePointerEvents()
            .pipe(tt(this._destroyed))
            .subscribe(() => this._tooltipInstance?._handleBodyInteraction()),
          this._overlayRef
            .keydownEvents()
            .pipe(tt(this._destroyed))
            .subscribe((a) => {
              this._isTooltipVisible() &&
                a.keyCode === 27 &&
                !Ut(a) &&
                (a.preventDefault(),
                a.stopPropagation(),
                this._ngZone.run(() => this.hide(0)));
            }),
          this._defaultOptions?.disableTooltipInteractivity &&
            this._overlayRef.addPanelClass(
              `${this._cssClassPrefix}-tooltip-panel-non-interactive`
            ),
          this._overlayRef
        );
      }
      _detach() {
        this._overlayRef &&
          this._overlayRef.hasAttached() &&
          this._overlayRef.detach(),
          (this._tooltipInstance = null);
      }
      _updatePosition(e) {
        let i = e.getConfig().positionStrategy,
          r = this._getOrigin(),
          a = this._getOverlayPosition();
        i.withPositions([
          this._addOffset(b(b({}, r.main), a.main)),
          this._addOffset(b(b({}, r.fallback), a.fallback)),
        ]);
      }
      _addOffset(e) {
        let i = Wy,
          r = !this._dir || this._dir.value == "ltr";
        return (
          e.originY === "top"
            ? (e.offsetY = -i)
            : e.originY === "bottom"
            ? (e.offsetY = i)
            : e.originX === "start"
            ? (e.offsetX = r ? -i : i)
            : e.originX === "end" && (e.offsetX = r ? i : -i),
          e
        );
      }
      _getOrigin() {
        let e = !this._dir || this._dir.value == "ltr",
          i = this.position,
          r;
        i == "above" || i == "below"
          ? (r = {
              originX: "center",
              originY: i == "above" ? "top" : "bottom",
            })
          : i == "before" || (i == "left" && e) || (i == "right" && !e)
          ? (r = { originX: "start", originY: "center" })
          : (i == "after" || (i == "right" && e) || (i == "left" && !e)) &&
            (r = { originX: "end", originY: "center" });
        let { x: a, y: s } = this._invertPosition(r.originX, r.originY);
        return { main: r, fallback: { originX: a, originY: s } };
      }
      _getOverlayPosition() {
        let e = !this._dir || this._dir.value == "ltr",
          i = this.position,
          r;
        i == "above"
          ? (r = { overlayX: "center", overlayY: "bottom" })
          : i == "below"
          ? (r = { overlayX: "center", overlayY: "top" })
          : i == "before" || (i == "left" && e) || (i == "right" && !e)
          ? (r = { overlayX: "end", overlayY: "center" })
          : (i == "after" || (i == "right" && e) || (i == "left" && !e)) &&
            (r = { overlayX: "start", overlayY: "center" });
        let { x: a, y: s } = this._invertPosition(r.overlayX, r.overlayY);
        return { main: r, fallback: { overlayX: a, overlayY: s } };
      }
      _updateTooltipMessage() {
        this._tooltipInstance &&
          ((this._tooltipInstance.message = this.message),
          this._tooltipInstance._markForCheck(),
          this._ngZone.onMicrotaskEmpty
            .pipe(_t(1), tt(this._destroyed))
            .subscribe(() => {
              this._tooltipInstance && this._overlayRef.updatePosition();
            }));
      }
      _setTooltipClass(e) {
        this._tooltipInstance &&
          ((this._tooltipInstance.tooltipClass = e),
          this._tooltipInstance._markForCheck());
      }
      _invertPosition(e, i) {
        return (
          this.position === "above" || this.position === "below"
            ? i === "top"
              ? (i = "bottom")
              : i === "bottom" && (i = "top")
            : e === "end"
            ? (e = "start")
            : e === "start" && (e = "end"),
          { x: e, y: i }
        );
      }
      _updateCurrentPositionClass(e) {
        let { overlayY: i, originX: r, originY: a } = e,
          s;
        if (
          (i === "center"
            ? this._dir && this._dir.value === "rtl"
              ? (s = r === "end" ? "left" : "right")
              : (s = r === "start" ? "left" : "right")
            : (s = i === "bottom" && a === "top" ? "above" : "below"),
          s !== this._currentPosition)
        ) {
          let c = this._overlayRef;
          if (c) {
            let l = `${this._cssClassPrefix}-${Qp}-`;
            c.removePanelClass(l + this._currentPosition),
              c.addPanelClass(l + s);
          }
          this._currentPosition = s;
        }
      }
      _setupPointerEnterEventsIfNeeded() {
        this._disabled ||
          !this.message ||
          !this._viewInitialized ||
          this._passiveListeners.length ||
          (this._platformSupportsMouseEvents()
            ? this._passiveListeners.push([
                "mouseenter",
                (e) => {
                  this._setupPointerExitEventsIfNeeded();
                  let i;
                  e.x !== void 0 && e.y !== void 0 && (i = e),
                    this.show(void 0, i);
                },
              ])
            : this.touchGestures !== "off" &&
              (this._disableNativeGesturesIfNecessary(),
              this._passiveListeners.push([
                "touchstart",
                (e) => {
                  let i = e.targetTouches?.[0],
                    r = i ? { x: i.clientX, y: i.clientY } : void 0;
                  this._setupPointerExitEventsIfNeeded(),
                    clearTimeout(this._touchstartTimeout);
                  let a = 500;
                  this._touchstartTimeout = setTimeout(
                    () => this.show(void 0, r),
                    this._defaultOptions.touchLongPressShowDelay ?? a
                  );
                },
              ])),
          this._addListeners(this._passiveListeners));
      }
      _setupPointerExitEventsIfNeeded() {
        if (this._pointerExitEventsInitialized) return;
        this._pointerExitEventsInitialized = !0;
        let e = [];
        if (this._platformSupportsMouseEvents())
          e.push(
            [
              "mouseleave",
              (i) => {
                let r = i.relatedTarget;
                (!r || !this._overlayRef?.overlayElement.contains(r)) &&
                  this.hide();
              },
            ],
            ["wheel", (i) => this._wheelListener(i)]
          );
        else if (this.touchGestures !== "off") {
          this._disableNativeGesturesIfNecessary();
          let i = () => {
            clearTimeout(this._touchstartTimeout),
              this.hide(this._defaultOptions.touchendHideDelay);
          };
          e.push(["touchend", i], ["touchcancel", i]);
        }
        this._addListeners(e), this._passiveListeners.push(...e);
      }
      _addListeners(e) {
        e.forEach(([i, r]) => {
          this._elementRef.nativeElement.addEventListener(i, r, Kp);
        });
      }
      _platformSupportsMouseEvents() {
        return !this._platform.IOS && !this._platform.ANDROID;
      }
      _wheelListener(e) {
        if (this._isTooltipVisible()) {
          let i = this._document.elementFromPoint(e.clientX, e.clientY),
            r = this._elementRef.nativeElement;
          i !== r && !r.contains(i) && this.hide();
        }
      }
      _disableNativeGesturesIfNecessary() {
        let e = this.touchGestures;
        if (e !== "off") {
          let i = this._elementRef.nativeElement,
            r = i.style;
          (e === "on" ||
            (i.nodeName !== "INPUT" && i.nodeName !== "TEXTAREA")) &&
            (r.userSelect =
              r.msUserSelect =
              r.webkitUserSelect =
              r.MozUserSelect =
                "none"),
            (e === "on" || !i.draggable) && (r.webkitUserDrag = "none"),
            (r.touchAction = "none"),
            (r.webkitTapHighlightColor = "transparent");
        }
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(
        d(xt),
        d(L),
        d(Ko),
        d(Te),
        d(D),
        d(G),
        d(Mh),
        d(ai),
        d(tf),
        d(se),
        d(Hy, 8),
        d(R)
      );
    }),
      (t.ɵdir = F({
        type: t,
        selectors: [["", "matTooltip", ""]],
        hostAttrs: [1, "mat-mdc-tooltip-trigger"],
        hostVars: 2,
        hostBindings: function (i, r) {
          i & 2 && q("mat-mdc-tooltip-disabled", r.disabled);
        },
        inputs: {
          position: [0, "matTooltipPosition", "position"],
          positionAtOrigin: [
            0,
            "matTooltipPositionAtOrigin",
            "positionAtOrigin",
          ],
          disabled: [0, "matTooltipDisabled", "disabled"],
          showDelay: [0, "matTooltipShowDelay", "showDelay"],
          hideDelay: [0, "matTooltipHideDelay", "hideDelay"],
          touchGestures: [0, "matTooltipTouchGestures", "touchGestures"],
          message: [0, "matTooltip", "message"],
          tooltipClass: [0, "matTooltipClass", "tooltipClass"],
        },
        exportAs: ["matTooltip"],
        standalone: !0,
      }));
    let n = t;
    return n;
  })(),
  Yy = (() => {
    let t = class t {
      constructor(e, i, r) {
        (this._changeDetectorRef = e),
          (this._elementRef = i),
          (this._isMultiline = !1),
          (this._closeOnInteraction = !1),
          (this._isVisible = !1),
          (this._onHide = new E()),
          (this._showAnimation = "mat-mdc-tooltip-show"),
          (this._hideAnimation = "mat-mdc-tooltip-hide"),
          (this._animationsDisabled = r === "NoopAnimations");
      }
      show(e) {
        this._hideTimeoutId != null && clearTimeout(this._hideTimeoutId),
          (this._showTimeoutId = setTimeout(() => {
            this._toggleVisibility(!0), (this._showTimeoutId = void 0);
          }, e));
      }
      hide(e) {
        this._showTimeoutId != null && clearTimeout(this._showTimeoutId),
          (this._hideTimeoutId = setTimeout(() => {
            this._toggleVisibility(!1), (this._hideTimeoutId = void 0);
          }, e));
      }
      afterHidden() {
        return this._onHide;
      }
      isVisible() {
        return this._isVisible;
      }
      ngOnDestroy() {
        this._cancelPendingAnimations(),
          this._onHide.complete(),
          (this._triggerElement = null);
      }
      _handleBodyInteraction() {
        this._closeOnInteraction && this.hide(0);
      }
      _markForCheck() {
        this._changeDetectorRef.markForCheck();
      }
      _handleMouseLeave({ relatedTarget: e }) {
        (!e || !this._triggerElement.contains(e)) &&
          (this.isVisible()
            ? this.hide(this._mouseLeaveHideDelay)
            : this._finalizeAnimation(!1));
      }
      _onShow() {
        (this._isMultiline = this._isTooltipMultiline()), this._markForCheck();
      }
      _isTooltipMultiline() {
        let e = this._elementRef.nativeElement.getBoundingClientRect();
        return e.height > qy && e.width >= Gy;
      }
      _handleAnimationEnd({ animationName: e }) {
        (e === this._showAnimation || e === this._hideAnimation) &&
          this._finalizeAnimation(e === this._showAnimation);
      }
      _cancelPendingAnimations() {
        this._showTimeoutId != null && clearTimeout(this._showTimeoutId),
          this._hideTimeoutId != null && clearTimeout(this._hideTimeoutId),
          (this._showTimeoutId = this._hideTimeoutId = void 0);
      }
      _finalizeAnimation(e) {
        e
          ? (this._closeOnInteraction = !0)
          : this.isVisible() || this._onHide.next();
      }
      _toggleVisibility(e) {
        let i = this._tooltip.nativeElement,
          r = this._showAnimation,
          a = this._hideAnimation;
        if (
          (i.classList.remove(e ? a : r),
          i.classList.add(e ? r : a),
          this._isVisible !== e &&
            ((this._isVisible = e), this._changeDetectorRef.markForCheck()),
          e &&
            !this._animationsDisabled &&
            typeof getComputedStyle == "function")
        ) {
          let s = getComputedStyle(i);
          (s.getPropertyValue("animation-duration") === "0s" ||
            s.getPropertyValue("animation-name") === "none") &&
            (this._animationsDisabled = !0);
        }
        e && this._onShow(),
          this._animationsDisabled &&
            (i.classList.add("_mat-animation-noopable"),
            this._finalizeAnimation(e));
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(St), d(L), d(At, 8));
    }),
      (t.ɵcmp = z({
        type: t,
        selectors: [["mat-tooltip-component"]],
        viewQuery: function (i, r) {
          if ((i & 1 && ft(zy, 7), i & 2)) {
            let a;
            X((a = Z())) && (r._tooltip = a.first);
          }
        },
        hostAttrs: ["aria-hidden", "true"],
        hostVars: 2,
        hostBindings: function (i, r) {
          i & 1 &&
            j("mouseleave", function (s) {
              return r._handleMouseLeave(s);
            }),
            i & 2 && As("zoom", r.isVisible() ? 1 : null);
        },
        standalone: !0,
        features: [V],
        decls: 4,
        vars: 4,
        consts: [
          ["tooltip", ""],
          [
            1,
            "mdc-tooltip",
            "mdc-tooltip--shown",
            "mat-mdc-tooltip",
            3,
            "animationend",
            "ngClass",
          ],
          [1, "mdc-tooltip__surface", "mdc-tooltip__surface-animation"],
        ],
        template: function (i, r) {
          if (i & 1) {
            let a = vt();
            u(0, "div", 1, 0),
              j("animationend", function (c) {
                return st(a), ct(r._handleAnimationEnd(c));
              }),
              u(2, "div", 2),
              y(3),
              p()();
          }
          i & 2 &&
            (q("mdc-tooltip--multiline", r._isMultiline),
            C("ngClass", r.tooltipClass),
            v(3),
            Et(r.message));
        },
        dependencies: [Mr],
        styles: [
          '.mdc-tooltip__surface{word-break:break-all;word-break:var(--mdc-tooltip-word-break, normal);overflow-wrap:anywhere}.mdc-tooltip--showing-transition .mdc-tooltip__surface-animation{transition:opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-tooltip--hide-transition .mdc-tooltip__surface-animation{transition:opacity 75ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-tooltip{position:fixed;display:none;z-index:9}.mdc-tooltip-wrapper--rich{position:relative}.mdc-tooltip--shown,.mdc-tooltip--showing,.mdc-tooltip--hide{display:inline-flex}.mdc-tooltip--shown.mdc-tooltip--rich,.mdc-tooltip--showing.mdc-tooltip--rich,.mdc-tooltip--hide.mdc-tooltip--rich{display:inline-block;left:-320px;position:absolute}.mdc-tooltip__surface{line-height:16px;padding:4px 8px;min-width:40px;max-width:200px;min-height:24px;max-height:40vh;box-sizing:border-box;overflow:hidden;text-align:center}.mdc-tooltip__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-tooltip__surface::before{border-color:CanvasText}}.mdc-tooltip--rich .mdc-tooltip__surface{align-items:flex-start;display:flex;flex-direction:column;min-height:24px;min-width:40px;max-width:320px;position:relative}.mdc-tooltip--multiline .mdc-tooltip__surface{text-align:left}[dir=rtl] .mdc-tooltip--multiline .mdc-tooltip__surface,.mdc-tooltip--multiline .mdc-tooltip__surface[dir=rtl]{text-align:right}.mdc-tooltip__surface .mdc-tooltip__title{margin:0 8px}.mdc-tooltip__surface .mdc-tooltip__content{max-width:calc(200px - 2*8px);margin:8px;text-align:left}[dir=rtl] .mdc-tooltip__surface .mdc-tooltip__content,.mdc-tooltip__surface .mdc-tooltip__content[dir=rtl]{text-align:right}.mdc-tooltip--rich .mdc-tooltip__surface .mdc-tooltip__content{max-width:calc(320px - 2*8px);align-self:stretch}.mdc-tooltip__surface .mdc-tooltip__content-link{text-decoration:none}.mdc-tooltip--rich-actions,.mdc-tooltip__content,.mdc-tooltip__title{z-index:1}.mdc-tooltip__surface-animation{opacity:0;transform:scale(0.8);will-change:transform,opacity}.mdc-tooltip--shown .mdc-tooltip__surface-animation{transform:scale(1);opacity:1}.mdc-tooltip--hide .mdc-tooltip__surface-animation{transform:scale(1)}.mdc-tooltip__caret-surface-top,.mdc-tooltip__caret-surface-bottom{position:absolute;height:24px;width:24px;transform:rotate(35deg) skewY(20deg) scaleX(0.9396926208)}.mdc-tooltip__caret-surface-top .mdc-elevation-overlay,.mdc-tooltip__caret-surface-bottom .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-tooltip__caret-surface-bottom{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);outline:1px solid rgba(0,0,0,0);z-index:-1}@media screen and (forced-colors: active){.mdc-tooltip__caret-surface-bottom{outline-color:CanvasText}}.mat-mdc-tooltip .mdc-tooltip__surface{background-color:var(--mdc-plain-tooltip-container-color)}.mat-mdc-tooltip .mdc-tooltip__surface{border-radius:var(--mdc-plain-tooltip-container-shape)}.mat-mdc-tooltip .mdc-tooltip__caret-surface-top,.mat-mdc-tooltip .mdc-tooltip__caret-surface-bottom{border-radius:var(--mdc-plain-tooltip-container-shape)}.mat-mdc-tooltip .mdc-tooltip__surface{color:var(--mdc-plain-tooltip-supporting-text-color)}.mat-mdc-tooltip .mdc-tooltip__surface{font-family:var(--mdc-plain-tooltip-supporting-text-font);line-height:var(--mdc-plain-tooltip-supporting-text-line-height);font-size:var(--mdc-plain-tooltip-supporting-text-size);font-weight:var(--mdc-plain-tooltip-supporting-text-weight);letter-spacing:var(--mdc-plain-tooltip-supporting-text-tracking)}.mat-mdc-tooltip{position:relative;transform:scale(0)}.mat-mdc-tooltip::before{content:"";top:0;right:0;bottom:0;left:0;z-index:-1;position:absolute}.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before{top:-8px}.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before{bottom:-8px}.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before{left:-8px}.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before{right:-8px}.mat-mdc-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-mdc-tooltip-show{0%{opacity:0;transform:scale(0.8)}100%{opacity:1;transform:scale(1)}}@keyframes mat-mdc-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.8)}}.mat-mdc-tooltip-show{animation:mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-mdc-tooltip-hide{animation:mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards}',
        ],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let n = t;
    return n;
  })();
var nf = (() => {
  let t = class t {};
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵmod = T({ type: t })),
    (t.ɵinj = M({ providers: [By], imports: [_a, yt, Ue, Q, Q, An] }));
  let n = t;
  return n;
})();
function Xy(n, t) {
  if ((n & 1 && (u(0, "mat-option", 16), y(1), p()), n & 2)) {
    let o = t.$implicit;
    C("value", o), v(), ie(" ", o, " ");
  }
}
function Zy(n, t) {
  if (n & 1) {
    let o = vt();
    u(0, "mat-form-field", 13)(1, "mat-select", 15),
      j("selectionChange", function (i) {
        st(o);
        let r = P(2);
        return ct(r._changePageSize(i.value));
      }),
      Dd(2, Xy, 2, 2, "mat-option", 16, Id),
      p()();
  }
  if (n & 2) {
    let o = P(2);
    C("appearance", o._formFieldAppearance)("color", o.color),
      v(),
      C("value", o.pageSize)("disabled", o.disabled)(
        "aria-labelledby",
        o._pageSizeLabelId
      )("panelClass", o.selectConfig.panelClass || "")(
        "disableOptionCentering",
        o.selectConfig.disableOptionCentering
      ),
      v(),
      Ad(o._displayedPageSizeOptions);
  }
}
function Qy(n, t) {
  if ((n & 1 && (u(0, "div", 14), y(1), p()), n & 2)) {
    let o = P(2);
    v(), Et(o.pageSize);
  }
}
function Ky(n, t) {
  if (
    (n & 1 &&
      (u(0, "div", 2)(1, "div", 12),
      y(2),
      p(),
      A(3, Zy, 4, 7, "mat-form-field", 13)(4, Qy, 2, 1, "div", 14),
      p()),
    n & 2)
  ) {
    let o = P();
    v(),
      K("id", o._pageSizeLabelId),
      v(),
      ie(" ", o._intl.itemsPerPageLabel, " "),
      v(),
      ot(o._displayedPageSizeOptions.length > 1 ? 3 : -1),
      v(),
      ot(o._displayedPageSizeOptions.length <= 1 ? 4 : -1);
  }
}
function Jy(n, t) {
  if (n & 1) {
    let o = vt();
    u(0, "button", 17),
      j("click", function () {
        st(o);
        let i = P();
        return ct(i.firstPage());
      }),
      Ye(),
      u(1, "svg", 7),
      O(2, "path", 18),
      p()();
  }
  if (n & 2) {
    let o = P();
    C("matTooltip", o._intl.firstPageLabel)(
      "matTooltipDisabled",
      o._previousButtonsDisabled()
    )("matTooltipPosition", "above")("disabled", o._previousButtonsDisabled()),
      K("aria-label", o._intl.firstPageLabel);
  }
}
function tw(n, t) {
  if (n & 1) {
    let o = vt();
    u(0, "button", 19),
      j("click", function () {
        st(o);
        let i = P();
        return ct(i.lastPage());
      }),
      Ye(),
      u(1, "svg", 7),
      O(2, "path", 20),
      p()();
  }
  if (n & 2) {
    let o = P();
    C("matTooltip", o._intl.lastPageLabel)(
      "matTooltipDisabled",
      o._nextButtonsDisabled()
    )("matTooltipPosition", "above")("disabled", o._nextButtonsDisabled()),
      K("aria-label", o._intl.lastPageLabel);
  }
}
var hs = (() => {
  let t = class t {
    constructor() {
      (this.changes = new E()),
        (this.itemsPerPageLabel = "Items per page:"),
        (this.nextPageLabel = "Next page"),
        (this.previousPageLabel = "Previous page"),
        (this.firstPageLabel = "First page"),
        (this.lastPageLabel = "Last page"),
        (this.getRangeLabel = (e, i, r) => {
          if (r == 0 || i == 0) return `0 of ${r}`;
          r = Math.max(r, 0);
          let a = e * i,
            s = a < r ? Math.min(a + i, r) : a + i;
          return `${a + 1} \u2013 ${s} of ${r}`;
        });
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵprov = x({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let n = t;
  return n;
})();
function ew(n) {
  return n || new hs();
}
var iw = { provide: hs, deps: [[new Zi(), new Zn(), hs]], useFactory: ew },
  nw = 50;
var ow = new w("MAT_PAGINATOR_DEFAULT_OPTIONS"),
  rw = 0,
  Zl = (() => {
    let t = class t {
      get pageIndex() {
        return this._pageIndex;
      }
      set pageIndex(e) {
        (this._pageIndex = Math.max(e || 0, 0)),
          this._changeDetectorRef.markForCheck();
      }
      get length() {
        return this._length;
      }
      set length(e) {
        (this._length = e || 0), this._changeDetectorRef.markForCheck();
      }
      get pageSize() {
        return this._pageSize;
      }
      set pageSize(e) {
        (this._pageSize = Math.max(e || 0, 0)),
          this._updateDisplayedPageSizeOptions();
      }
      get pageSizeOptions() {
        return this._pageSizeOptions;
      }
      set pageSizeOptions(e) {
        (this._pageSizeOptions = (e || []).map((i) => ve(i, 0))),
          this._updateDisplayedPageSizeOptions();
      }
      constructor(e, i, r) {
        if (
          ((this._intl = e),
          (this._changeDetectorRef = i),
          (this._pageSizeLabelId = `mat-paginator-page-size-label-${rw++}`),
          (this._isInitialized = !1),
          (this._initializedStream = new rd(1)),
          (this._pageIndex = 0),
          (this._length = 0),
          (this._pageSizeOptions = []),
          (this.hidePageSize = !1),
          (this.showFirstLastButtons = !1),
          (this.selectConfig = {}),
          (this.disabled = !1),
          (this.page = new et()),
          (this.initialized = this._initializedStream),
          (this._intlChanges = e.changes.subscribe(() =>
            this._changeDetectorRef.markForCheck()
          )),
          r)
        ) {
          let {
            pageSize: a,
            pageSizeOptions: s,
            hidePageSize: c,
            showFirstLastButtons: l,
          } = r;
          a != null && (this._pageSize = a),
            s != null && (this._pageSizeOptions = s),
            c != null && (this.hidePageSize = c),
            l != null && (this.showFirstLastButtons = l);
        }
        this._formFieldAppearance = r?.formFieldAppearance || "outline";
      }
      ngOnInit() {
        (this._isInitialized = !0),
          this._updateDisplayedPageSizeOptions(),
          this._initializedStream.next();
      }
      ngOnDestroy() {
        this._initializedStream.complete(), this._intlChanges.unsubscribe();
      }
      nextPage() {
        if (!this.hasNextPage()) return;
        let e = this.pageIndex;
        (this.pageIndex = this.pageIndex + 1), this._emitPageEvent(e);
      }
      previousPage() {
        if (!this.hasPreviousPage()) return;
        let e = this.pageIndex;
        (this.pageIndex = this.pageIndex - 1), this._emitPageEvent(e);
      }
      firstPage() {
        if (!this.hasPreviousPage()) return;
        let e = this.pageIndex;
        (this.pageIndex = 0), this._emitPageEvent(e);
      }
      lastPage() {
        if (!this.hasNextPage()) return;
        let e = this.pageIndex;
        (this.pageIndex = this.getNumberOfPages() - 1), this._emitPageEvent(e);
      }
      hasPreviousPage() {
        return this.pageIndex >= 1 && this.pageSize != 0;
      }
      hasNextPage() {
        let e = this.getNumberOfPages() - 1;
        return this.pageIndex < e && this.pageSize != 0;
      }
      getNumberOfPages() {
        return this.pageSize ? Math.ceil(this.length / this.pageSize) : 0;
      }
      _changePageSize(e) {
        let i = this.pageIndex * this.pageSize,
          r = this.pageIndex;
        (this.pageIndex = Math.floor(i / e) || 0),
          (this.pageSize = e),
          this._emitPageEvent(r);
      }
      _nextButtonsDisabled() {
        return this.disabled || !this.hasNextPage();
      }
      _previousButtonsDisabled() {
        return this.disabled || !this.hasPreviousPage();
      }
      _updateDisplayedPageSizeOptions() {
        this._isInitialized &&
          (this.pageSize ||
            (this._pageSize =
              this.pageSizeOptions.length != 0 ? this.pageSizeOptions[0] : nw),
          (this._displayedPageSizeOptions = this.pageSizeOptions.slice()),
          this._displayedPageSizeOptions.indexOf(this.pageSize) === -1 &&
            this._displayedPageSizeOptions.push(this.pageSize),
          this._displayedPageSizeOptions.sort((e, i) => e - i),
          this._changeDetectorRef.markForCheck());
      }
      _emitPageEvent(e) {
        this.page.emit({
          previousPageIndex: e,
          pageIndex: this.pageIndex,
          pageSize: this.pageSize,
          length: this.length,
        });
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(hs), d(St), d(ow, 8));
    }),
      (t.ɵcmp = z({
        type: t,
        selectors: [["mat-paginator"]],
        hostAttrs: ["role", "group", 1, "mat-mdc-paginator"],
        inputs: {
          color: "color",
          pageIndex: [2, "pageIndex", "pageIndex", ve],
          length: [2, "length", "length", ve],
          pageSize: [2, "pageSize", "pageSize", ve],
          pageSizeOptions: "pageSizeOptions",
          hidePageSize: [2, "hidePageSize", "hidePageSize", it],
          showFirstLastButtons: [
            2,
            "showFirstLastButtons",
            "showFirstLastButtons",
            it,
          ],
          selectConfig: "selectConfig",
          disabled: [2, "disabled", "disabled", it],
        },
        outputs: { page: "page" },
        exportAs: ["matPaginator"],
        standalone: !0,
        features: [Mt, V],
        decls: 14,
        vars: 14,
        consts: [
          [1, "mat-mdc-paginator-outer-container"],
          [1, "mat-mdc-paginator-container"],
          [1, "mat-mdc-paginator-page-size"],
          [1, "mat-mdc-paginator-range-actions"],
          ["aria-live", "polite", 1, "mat-mdc-paginator-range-label"],
          [
            "mat-icon-button",
            "",
            "type",
            "button",
            1,
            "mat-mdc-paginator-navigation-first",
            3,
            "matTooltip",
            "matTooltipDisabled",
            "matTooltipPosition",
            "disabled",
          ],
          [
            "mat-icon-button",
            "",
            "type",
            "button",
            1,
            "mat-mdc-paginator-navigation-previous",
            3,
            "click",
            "matTooltip",
            "matTooltipDisabled",
            "matTooltipPosition",
            "disabled",
          ],
          [
            "viewBox",
            "0 0 24 24",
            "focusable",
            "false",
            "aria-hidden",
            "true",
            1,
            "mat-mdc-paginator-icon",
          ],
          ["d", "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],
          [
            "mat-icon-button",
            "",
            "type",
            "button",
            1,
            "mat-mdc-paginator-navigation-next",
            3,
            "click",
            "matTooltip",
            "matTooltipDisabled",
            "matTooltipPosition",
            "disabled",
          ],
          ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],
          [
            "mat-icon-button",
            "",
            "type",
            "button",
            1,
            "mat-mdc-paginator-navigation-last",
            3,
            "matTooltip",
            "matTooltipDisabled",
            "matTooltipPosition",
            "disabled",
          ],
          [1, "mat-mdc-paginator-page-size-label"],
          [1, "mat-mdc-paginator-page-size-select", 3, "appearance", "color"],
          [1, "mat-mdc-paginator-page-size-value"],
          [
            "hideSingleSelectionIndicator",
            "",
            3,
            "selectionChange",
            "value",
            "disabled",
            "aria-labelledby",
            "panelClass",
            "disableOptionCentering",
          ],
          [3, "value"],
          [
            "mat-icon-button",
            "",
            "type",
            "button",
            1,
            "mat-mdc-paginator-navigation-first",
            3,
            "click",
            "matTooltip",
            "matTooltipDisabled",
            "matTooltipPosition",
            "disabled",
          ],
          ["d", "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],
          [
            "mat-icon-button",
            "",
            "type",
            "button",
            1,
            "mat-mdc-paginator-navigation-last",
            3,
            "click",
            "matTooltip",
            "matTooltipDisabled",
            "matTooltipPosition",
            "disabled",
          ],
          ["d", "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"],
        ],
        template: function (i, r) {
          i & 1 &&
            (u(0, "div", 0)(1, "div", 1),
            A(2, Ky, 5, 4, "div", 2),
            u(3, "div", 3)(4, "div", 4),
            y(5),
            p(),
            A(6, Jy, 3, 5, "button", 5),
            u(7, "button", 6),
            j("click", function () {
              return r.previousPage();
            }),
            Ye(),
            u(8, "svg", 7),
            O(9, "path", 8),
            p()(),
            Cs(),
            u(10, "button", 9),
            j("click", function () {
              return r.nextPage();
            }),
            Ye(),
            u(11, "svg", 7),
            O(12, "path", 10),
            p()(),
            A(13, tw, 3, 5, "button", 11),
            p()()()),
            i & 2 &&
              (v(2),
              ot(r.hidePageSize ? -1 : 2),
              v(3),
              ie(
                " ",
                r._intl.getRangeLabel(r.pageIndex, r.pageSize, r.length),
                " "
              ),
              v(),
              ot(r.showFirstLastButtons ? 6 : -1),
              v(),
              C("matTooltip", r._intl.previousPageLabel)(
                "matTooltipDisabled",
                r._previousButtonsDisabled()
              )("matTooltipPosition", "above")(
                "disabled",
                r._previousButtonsDisabled()
              ),
              K("aria-label", r._intl.previousPageLabel),
              v(3),
              C("matTooltip", r._intl.nextPageLabel)(
                "matTooltipDisabled",
                r._nextButtonsDisabled()
              )("matTooltipPosition", "above")(
                "disabled",
                r._nextButtonsDisabled()
              ),
              K("aria-label", r._intl.nextPageLabel),
              v(3),
              ot(r.showFirstLastButtons ? 13 : -1));
        },
        dependencies: [Ie, ss, En, Ia, ef],
        styles: [
          ".mat-mdc-paginator{display:block;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-paginator-container-text-color);background-color:var(--mat-paginator-container-background-color);font-family:var(--mat-paginator-container-text-font);line-height:var(--mat-paginator-container-text-line-height);font-size:var(--mat-paginator-container-text-size);font-weight:var(--mat-paginator-container-text-weight);letter-spacing:var(--mat-paginator-container-text-tracking);--mat-form-field-container-height:var(--mat-paginator-form-field-container-height);--mat-form-field-container-vertical-padding:var(--mat-paginator-form-field-container-vertical-padding)}.mat-mdc-paginator .mat-mdc-select-value{font-size:var(--mat-paginator-select-trigger-text-size)}.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper{display:none}.mat-mdc-paginator .mat-mdc-select{line-height:1.5}.mat-mdc-paginator-outer-container{display:flex}.mat-mdc-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap;width:100%;min-height:var(--mat-paginator-container-size)}.mat-mdc-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-mdc-paginator-page-size{margin-right:0;margin-left:8px}.mat-mdc-paginator-page-size-label{margin:0 4px}.mat-mdc-paginator-page-size-select{margin:0 4px;width:84px}.mat-mdc-paginator-range-label{margin:0 32px 0 24px}.mat-mdc-paginator-range-actions{display:flex;align-items:center}.mat-mdc-paginator-icon{display:inline-block;width:28px;fill:var(--mat-paginator-enabled-icon-color)}.mat-mdc-icon-button[disabled] .mat-mdc-paginator-icon{fill:var(--mat-paginator-disabled-icon-color)}[dir=rtl] .mat-mdc-paginator-icon{transform:rotate(180deg)}.cdk-high-contrast-active .mat-mdc-icon-button[disabled] .mat-mdc-paginator-icon,.cdk-high-contrast-active .mat-mdc-paginator-icon{fill:currentColor;fill:CanvasText}.cdk-high-contrast-active .mat-mdc-paginator-range-actions .mat-mdc-icon-button{outline:solid 1px}",
        ],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let n = t;
    return n;
  })(),
  of = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵmod = T({ type: t })),
      (t.ɵinj = M({ providers: [iw], imports: [Ht, cs, nf, Zl] }));
    let n = t;
    return n;
  })();
var Ii = (() => {
  let t = class t {
    constructor(e) {
      (this.http = e), (this.apiUrl = le.apiUrl);
    }
    createPost(e) {
      let i = localStorage.getItem("token");
      return this.http.post(`${this.apiUrl}/posts`, e, {
        headers: new pt({ Authorization: `Bearer ${i}` }),
      });
    }
    updatePost(e, i, r) {
      let a = new pt({ Authorization: `Bearer ${r}` });
      return this.http.put(`${this.apiUrl}/posts/${e}`, i, { headers: a });
    }
    getAllPosts(e = 1, i = 10, r) {
      let a = new pt({ Authorization: `Bearer ${r}` });
      return this.http.get(`${this.apiUrl}/posts?page=${e}&limit=${i}`, {
        headers: a,
      });
    }
    getPostById(e, i) {
      let r = new pt({ Authorization: `Bearer ${i}` });
      return this.http.get(`${this.apiUrl}/posts/${e}`, { headers: r });
    }
    getUserPosts(e, i = 1, r = 10, a) {
      let s = new pt({ Authorization: `Bearer ${a}` });
      return this.http.get(
        `${this.apiUrl}/posts/user/${e}?page=${i}&limit=${r}`,
        { headers: s }
      );
    }
    validateToken() {
      let e = localStorage.getItem("token");
      if (!e) return I({ valid: !1 });
      let i = new pt({ "Content-Type": "application/json" });
      return this.http.post(
        `${this.apiUrl}/auth/validate-token`,
        { token: e },
        { headers: i }
      );
    }
    deletePost(e, i) {
      let r = new pt({ Authorization: `Bearer ${i}` });
      return this.http.delete(`${this.apiUrl}/posts/${e}`, { headers: r });
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(h(Gt));
  }),
    (t.ɵprov = x({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let n = t;
  return n;
})();
var sw = () => [5, 10, 25],
  cw = (n) => ["/post", n];
function lw(n, t) {
  if ((n & 1 && O(0, "img", 20), n & 2)) {
    let o = P().$implicit,
      e = P();
    kr("alt", o.title), C("src", e.apiUrl + "/" + o.imageUrl, xr);
  }
}
function dw(n, t) {
  if (n & 1) {
    let o = vt();
    u(0, "button", 21),
      j("click", function () {
        st(o);
        let i = P().$implicit,
          r = P();
        return ct(r.deletePost(i.id));
      }),
      u(1, "mat-icon"),
      y(2, "delete"),
      p()();
  }
}
function mw(n, t) {
  if (
    (n & 1 &&
      (u(0, "div", 15)(1, "h2"),
      y(2),
      p(),
      u(3, "p"),
      y(4),
      p(),
      u(5, "small"),
      y(6),
      p(),
      u(7, "div", 16),
      A(8, lw, 1, 2, "img", 17),
      p(),
      u(9, "button", 18),
      y(10, " Ver Detalles "),
      p(),
      A(11, dw, 3, 0, "button", 19),
      p()),
    n & 2)
  ) {
    let o = t.$implicit,
      e = P();
    v(2),
      Et(o.title),
      v(2),
      Et(o.content),
      v(2),
      Ms(
        "Author: ",
        o.author == null ? null : o.author.nombre,
        " ",
        o.author == null ? null : o.author.apellido,
        ""
      ),
      v(2),
      C("ngIf", o.imageUrl),
      v(),
      C("routerLink", Nd(7, cw, o.id)),
      v(2),
      C("ngIf", (o.author == null ? null : o.author.id) === e.userId);
  }
}
function hw(n, t) {
  n & 1 && (u(0, "div")(1, "p"), y(2, "No posts available."), p()());
}
var rf = (() => {
  let t = class t {
    constructor(e, i, r, a, s, c) {
      (this.postService = e),
        (this.router = i),
        (this.fb = r),
        (this.snackBar = a),
        (this.dialog = s),
        (this.apiService = c),
        (this.posts = []),
        (this.totalPosts = 0),
        (this.selectedImage = null),
        (this.token = ""),
        (this.userId = 0),
        (this.userName = ""),
        (this.userLastName = ""),
        (this.selectedOption = "all"),
        (this.page = 1),
        (this.limit = 10),
        (this.apiUrl = le.apiUrl);
    }
    ngOnInit() {
      console.log(this.apiUrl),
        (this.token = localStorage.getItem("token") || "");
      let e = localStorage.getItem("userId");
      if (
        ((this.userId = e ? +e : 0),
        this.initializeForm(),
        !this.token || !this.userId)
      ) {
        this.router.navigate(["/login"]);
        return;
      }
      this.getUserData(), this.getPosts();
    }
    initializeForm() {
      this.postForm = this.fb.group({
        title: ["", bt.required],
        content: ["", bt.required],
        image: [""],
      });
    }
    getUserData() {
      this.apiService.getUserData().subscribe(
        (e) => {
          (this.userName = e.nombre), (this.userLastName = e.apellido);
        },
        (e) => {
          console.error("Error al obtener los datos del usuario", e);
        }
      );
    }
    getPosts() {
      this.selectedOption === "user" && this.userId
        ? this.postService
            .getUserPosts(this.userId, this.page, this.limit, this.token)
            .subscribe(
              (e) => {
                (this.posts = e.posts), (this.totalPosts = e.total);
              },
              (e) => {
                console.error("Error al obtener los posts del usuario", e);
              }
            )
        : this.postService
            .getAllPosts(this.page, this.limit, this.token)
            .subscribe(
              (e) => {
                (this.posts = e.posts), (this.totalPosts = e.total);
              },
              (e) => {
                console.error("Error al obtener todos los posts", e);
              }
            );
    }
    onSelectionChange(e) {
      (this.selectedOption = e), (this.page = 1), this.getPosts();
    }
    onPageChange(e) {
      (this.page = e.pageIndex + 1), (this.limit = e.pageSize), this.getPosts();
    }
    onFileChange(e) {
      let i = e.target.files[0];
      i && (this.selectedImage = i);
    }
    createPost() {
      this.postForm.valid &&
        this.dialog
          .open(Yl, {
            panelClass: "custom-dialog-container",
            data: {
              title: "Crear Post",
              message: "\xBFEst\xE1s seguro de que deseas crear este post?",
            },
          })
          .afterClosed()
          .subscribe((i) => {
            if (i) {
              let r = new FormData();
              r.append("title", this.postForm.get("title")?.value),
                r.append("content", this.postForm.get("content")?.value),
                this.selectedImage && r.append("image", this.selectedImage),
                this.postService.createPost(r).subscribe(
                  (a) => {
                    this.posts.push(a),
                      this.postForm.reset({
                        title: "",
                        content: "",
                        image: "",
                      }),
                      this.postForm.get("title")?.setErrors(null),
                      this.postForm.get("content")?.setErrors(null),
                      this.postForm.get("image")?.setErrors(null),
                      this.postForm.markAsPristine(),
                      this.postForm.markAsUntouched(),
                      this.snackBar.open("Post creado exitosamente", "Cerrar", {
                        duration: 5e3,
                        panelClass: ["green-snackbar"],
                      });
                  },
                  (a) => {
                    console.error("Error al crear el post", a),
                      this.snackBar.open("Error al crear el post", "Cerrar", {
                        duration: 5e3,
                      });
                  }
                );
            }
          });
    }
    deletePost(e) {
      this.dialog
        .open(Yl, { panelClass: "custom-dialog-container" })
        .afterClosed()
        .subscribe((r) => {
          r &&
            this.postService.deletePost(e, this.token).subscribe(
              () => {
                (this.posts = this.posts.filter((a) => a.id !== e)),
                  this.snackBar.open("Post eliminado exitosamente", "Cerrar", {
                    duration: 5e3,
                    panelClass: ["green-snackbar"],
                  });
              },
              (a) => {
                console.error("Error al eliminar el post", a),
                  this.snackBar.open("Error al eliminar el post", "Cerrar", {
                    duration: 5e3,
                  });
              }
            );
        });
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(d(Ii), d(gt), d(xi), d(ui), d(as), d(ci));
  }),
    (t.ɵcmp = z({
      type: t,
      selectors: [["app-post"]],
      standalone: !0,
      features: [V],
      decls: 36,
      vars: 10,
      consts: [
        [3, "ngSubmit", "formGroup"],
        [1, "form-group"],
        ["for", "title"],
        [
          "type",
          "text",
          "id",
          "title",
          "formControlName",
          "title",
          "placeholder",
          "T\xEDtulo del post",
          1,
          "form-control",
        ],
        ["for", "content"],
        [
          "id",
          "content",
          "formControlName",
          "content",
          "placeholder",
          "Contenido",
          1,
          "form-control",
        ],
        ["for", "image"],
        ["type", "file", "id", "image", 1, "form-control", 3, "change"],
        ["type", "submit", 1, "btn", "btn-primary"],
        [3, "valueChange", "selectionChange", "value"],
        ["value", "all"],
        ["value", "user"],
        ["class", "post-container", 4, "ngFor", "ngForOf"],
        [4, "ngIf"],
        [3, "page", "length", "pageSize", "pageSizeOptions"],
        [1, "post-container"],
        [1, "post-image-container"],
        ["class", "post-image", 3, "src", "alt", 4, "ngIf"],
        [
          "mat-raised-button",
          "",
          "color",
          "primary",
          1,
          "details-button",
          3,
          "routerLink",
        ],
        [
          "mat-icon-button",
          "",
          "color",
          "warn",
          "class",
          "delete-button",
          3,
          "click",
          4,
          "ngIf",
        ],
        [1, "post-image", 3, "src", "alt"],
        [
          "mat-icon-button",
          "",
          "color",
          "warn",
          1,
          "delete-button",
          3,
          "click",
        ],
      ],
      template: function (i, r) {
        i & 1 &&
          (u(0, "h1"),
          y(1),
          p(),
          u(2, "h2"),
          y(3, "Create a Post"),
          p(),
          u(4, "form", 0),
          j("ngSubmit", function () {
            return r.createPost();
          }),
          u(5, "div", 1)(6, "label", 2),
          y(7, "T\xEDtulo"),
          p(),
          O(8, "input", 3),
          p(),
          u(9, "div", 1)(10, "label", 4),
          y(11, "Contenido"),
          p(),
          O(12, "textarea", 5),
          p(),
          u(13, "div", 1)(14, "label", 6),
          y(15, "Subir imagen"),
          p(),
          u(16, "input", 7),
          j("change", function (s) {
            return r.onFileChange(s);
          }),
          p()(),
          u(17, "button", 8),
          y(18, "Crear Post"),
          p()(),
          O(19, "br"),
          u(20, "mat-card")(21, "mat-card-header")(22, "mat-card-title")(
            23,
            "h2"
          ),
          y(24, "Posts"),
          p()(),
          u(25, "mat-card-subtitle")(26, "mat-form-field")(27, "mat-select", 9),
          Ld("valueChange", function (s) {
            return Pd(r.selectedOption, s) || (r.selectedOption = s), s;
          }),
          j("selectionChange", function (s) {
            return r.onSelectionChange(s.value);
          }),
          u(28, "mat-option", 10),
          y(29, "Ver todos los posts"),
          p(),
          u(30, "mat-option", 11),
          y(31, "Ver mis posts"),
          p()()()()(),
          u(32, "mat-card-content"),
          A(33, mw, 12, 9, "div", 12)(34, hw, 3, 0, "div", 13),
          u(35, "mat-paginator", 14),
          j("page", function (s) {
            return r.onPageChange(s);
          }),
          p()()()),
          i & 2 &&
            (v(),
            Ms("Welcome ", r.userName, " ", r.userLastName, ""),
            v(3),
            C("formGroup", r.postForm),
            v(23),
            Fd("value", r.selectedOption),
            v(6),
            C("ngForOf", r.posts),
            v(),
            C("ngIf", r.posts.length === 0),
            v(),
            C("length", r.totalPosts)("pageSize", r.limit)(
              "pageSizeOptions",
              Cr(9, sw)
            ));
      },
      dependencies: [
        yi,
        vi,
        Se,
        bi,
        _i,
        Qt,
        $e,
        yt,
        Tr,
        xe,
        Ei,
        wi,
        Ci,
        jn,
        fp,
        ki,
        Kt,
        Ie,
        Si,
        Ht,
        $t,
        Ia,
        Tp,
        cs,
        ss,
        En,
        Bo,
        ms,
        Zp,
        of,
        Zl,
        bn,
        gn,
      ],
      styles: [
        "[_nghost-%COMP%]{display:block;padding:16px;max-width:800px;margin:auto}mat-form-field[_ngcontent-%COMP%]{width:100%;margin-bottom:16px}button[_ngcontent-%COMP%]{margin-top:16px}mat-list[_ngcontent-%COMP%]{margin-top:16px}mat-list-item[_ngcontent-%COMP%]{margin-bottom:16px}mat-card[_ngcontent-%COMP%]{padding:16px;background:#f9f9f9;margin-bottom:16px}mat-card-title[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:700}mat-card-content[_ngcontent-%COMP%]{font-size:1rem;line-height:1.5}.post-card[_ngcontent-%COMP%]{margin:16px;padding:16px;border-radius:8px;box-shadow:0 4px 8px #0003}mat-card-header[_ngcontent-%COMP%]{background-color:#f5f5f5;padding:16px;border-bottom:1px solid #ddd}mat-card-content[_ngcontent-%COMP%]{background-color:#fff;padding:16px}mat-card-title[_ngcontent-%COMP%]{font-size:1.2em;font-weight:700}.mat-form-field.mat-form-field-should-float.ng-valid[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{border-color:green}.mat-form-field.mat-form-field-should-float.ng-invalid[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{border-color:red}form[_ngcontent-%COMP%]{max-width:800px;margin:auto;padding:16px;border-radius:8px;box-shadow:0 2px 4px #0000001a;background-color:#f9f9f9}.form-group[_ngcontent-%COMP%]{margin-bottom:16px}.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;font-weight:700;margin-bottom:8px}.form-control[_ngcontent-%COMP%]{width:100%;padding:8px;font-size:1rem;border:1px solid #ddd;border-radius:4px}.btn-primary[_ngcontent-%COMP%]{background-color:#007bff;color:#fff;border:none;padding:10px 20px;font-size:1rem;border-radius:4px;cursor:pointer}.btn-primary[_ngcontent-%COMP%]:hover{background-color:#0056b3}mat-card-content[_ngcontent-%COMP%]{padding:16px}ul[_ngcontent-%COMP%]{list-style-type:none;padding:0;margin:0}.post-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;border:1px solid #ddd;border-radius:4px;margin-bottom:16px;padding:16px;position:relative;background-color:#fff}.post-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:1.5rem;color:#333}.post-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:8px 0;font-size:1rem;color:#666}.post-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;top:8px;right:8px}.post-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#f5f5f5}.post-container[_ngcontent-%COMP%]{position:relative;padding:16px;border:1px solid #ddd;border-radius:8px;margin-bottom:16px;box-shadow:0 2px 4px #0000001a}.delete-button[_ngcontent-%COMP%]{position:absolute;top:8px;right:8px}.dashboard-button[_ngcontent-%COMP%]{position:fixed;bottom:16px;right:16px;z-index:1000}.details-button[_ngcontent-%COMP%]{position:absolute;bottom:16px;right:16px}.details-button[_ngcontent-%COMP%]{margin:0}.post-image-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin:20 px 0;border-radius:8px;overflow:hidden;box-shadow:0 4px 8px #0003}.post-image[_ngcontent-%COMP%]{height:80%;width:100%;height:auto;object-fit:cover}",
      ],
    }));
  let n = t;
  return n;
})();
function uw(n, t) {
  n & 1 && (u(0, "mat-error"), y(1, "Email is required"), p());
}
function pw(n, t) {
  n & 1 && (u(0, "mat-error"), y(1, "Enter a valid email"), p());
}
function fw(n, t) {
  n & 1 && (u(0, "mat-error"), y(1, "Password is required"), p());
}
var af = (() => {
  let t = class t {
    constructor(e, i, r, a, s) {
      (this.fb = e),
        (this.apiService = i),
        (this.http = r),
        (this.router = a),
        (this.snackBar = s);
    }
    ngOnInit() {
      this.loginForm = this.fb.group({
        email: ["", [bt.required, bt.email]],
        password: ["", bt.required],
      });
    }
    get email() {
      return this.loginForm.get("email");
    }
    get password() {
      return this.loginForm.get("password");
    }
    onSubmit() {
      if (this.loginForm.valid) {
        let e = this.loginForm.value;
        this.apiService.login(e).subscribe(
          (i) => {
            localStorage.setItem("token", i.access_token),
              this.apiService.getUserByEmail(e.email).subscribe(
                (r) => {
                  localStorage.setItem("userId", r.id.toString()),
                    this.snackBar.open("Login exitoso", "Cerrar", {
                      duration: 5e3,
                      panelClass: ["green-snackbar"],
                    }),
                    this.router.navigate(["/dashboard"]);
                },
                (r) => {
                  console.error("Error al obtener el usuario", r),
                    this.snackBar.open(
                      "Error al obtener los datos del usuario.",
                      "Cerrar",
                      { duration: 5e3 }
                    );
                }
              );
          },
          (i) => {
            console.error("Error en el login", i),
              this.snackBar.open(
                "Email o contrase\xF1a incorrectos.",
                "Cerrar",
                { duration: 5e3 }
              );
          }
        );
      }
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(d(xi), d(ci), d(Gt), d(gt), d(ui));
  }),
    (t.ɵcmp = z({
      type: t,
      selectors: [["app-login"]],
      standalone: !0,
      features: [V],
      decls: 21,
      vars: 4,
      consts: [
        [3, "ngSubmit", "formGroup"],
        ["appearance", "fill"],
        ["matInput", "", "formControlName", "email"],
        [4, "ngIf"],
        ["matInput", "", "type", "password", "formControlName", "password"],
        ["mat-raised-button", "", "color", "primary", "type", "submit"],
      ],
      template: function (i, r) {
        i & 1 &&
          (u(0, "form", 0),
          j("ngSubmit", function () {
            return r.onSubmit();
          }),
          u(1, "mat-card")(2, "mat-card-header")(3, "mat-card-title")(4, "h2"),
          y(5, "Login"),
          p()()(),
          u(6, "mat-card-content")(7, "mat-form-field", 1)(8, "mat-label"),
          y(9, "Email"),
          p(),
          O(10, "input", 2),
          A(11, uw, 2, 0, "mat-error", 3)(12, pw, 2, 0, "mat-error", 3),
          p(),
          u(13, "mat-form-field", 1)(14, "mat-label"),
          y(15, "Password"),
          p(),
          O(16, "input", 4),
          A(17, fw, 2, 0, "mat-error", 3),
          p()(),
          u(18, "button", 5),
          y(19, "Login"),
          p()()(),
          O(20, "app-footer")),
          i & 2 &&
            (C("formGroup", r.loginForm),
            v(11),
            C("ngIf", r.email == null ? null : r.email.hasError("required")),
            v(),
            C("ngIf", r.email == null ? null : r.email.hasError("email")),
            v(5),
            C(
              "ngIf",
              r.password == null ? null : r.password.hasError("required")
            ));
      },
      dependencies: [
        Ei,
        wi,
        Ci,
        jn,
        ki,
        Kt,
        Ie,
        zn,
        Vn,
        Si,
        Bn,
        Ht,
        $t,
        yi,
        vi,
        Se,
        bi,
        _i,
        Qt,
        $e,
        yt,
        xe,
        Uu,
      ],
      styles: [
        "mat-form-field[_ngcontent-%COMP%]{margin-bottom:16px}button[_ngcontent-%COMP%]{margin-top:16px}mat-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;max-width:400px;margin:100px auto;padding:16px;border:1px solid #e0e0e0;border-radius:8px;box-shadow:0 4px 8px #0000001a}mat-card-title[_ngcontent-%COMP%]{margin-bottom:16px}mat-form-field[_ngcontent-%COMP%]{width:100%}",
      ],
    }));
  let n = t;
  return n;
})();
function gw(n, t) {
  n & 1 && (u(0, "mat-error"), y(1, "First name is required"), p());
}
function bw(n, t) {
  n & 1 && (u(0, "mat-error"), y(1, "Last name is required"), p());
}
function _w(n, t) {
  n & 1 && (u(0, "mat-error"), y(1, "Email is required"), p());
}
function vw(n, t) {
  n & 1 && (u(0, "mat-error"), y(1, "Enter a valid email"), p());
}
function xw(n, t) {
  n & 1 && (u(0, "mat-error"), y(1, "Password is required"), p());
}
var sf = (() => {
  let t = class t {
    constructor(e, i, r, a) {
      (this.fb = e),
        (this.apiService = i),
        (this.router = r),
        (this.snackBar = a);
    }
    ngOnInit() {
      this.registerForm = this.fb.group({
        firstName: ["", bt.required],
        lastName: ["", bt.required],
        email: ["", [bt.required, bt.email]],
        password: ["", bt.required],
      });
    }
    get firstName() {
      return this.registerForm.get("firstName");
    }
    get lastName() {
      return this.registerForm.get("lastName");
    }
    get email() {
      return this.registerForm.get("email");
    }
    get password() {
      return this.registerForm.get("password");
    }
    onSubmit() {
      if (this.registerForm.valid) {
        let e = {
          nombre: this.registerForm.value.firstName,
          apellido: this.registerForm.value.lastName,
          email: this.registerForm.value.email,
          password: this.registerForm.value.password,
        };
        this.apiService.register(e).subscribe({
          next: (i) => {
            let r = i.access_token;
            localStorage.setItem("token", r),
              this.apiService.validateToken(r).subscribe(
                (a) => {
                  a.valid
                    ? this.apiService.getUserByEmail(e.email).subscribe(
                        (s) => {
                          localStorage.setItem("userId", s.id.toString()),
                            this.snackBar.open("Registro exitoso", "Cerrar", {
                              duration: 2500,
                              panelClass: ["green-snackbar"],
                            }),
                            this.router.navigate(["/dashboard"]);
                        },
                        (s) => {
                          console.error("Error al obtener el usuario", s),
                            this.snackBar.open(
                              "Error al obtener los datos del usuario.",
                              "Cerrar",
                              { duration: 5e3 }
                            );
                        }
                      )
                    : this.snackBar.open(
                        "Token inv\xE1lido despu\xE9s del registro",
                        "Cerrar",
                        { duration: 5e3 }
                      );
                },
                (a) => {
                  this.snackBar.open("Error al validar el token", "Cerrar", {
                    duration: 5e3,
                  });
                }
              );
          },
          error: (i) => {
            this.snackBar.open("Error en el registro", "Cerrar", {
              duration: 5e3,
            });
          },
        });
      }
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(d(xi), d(ci), d(gt), d(ui));
  }),
    (t.ɵcmp = z({
      type: t,
      selectors: [["app-register"]],
      standalone: !0,
      features: [V],
      decls: 29,
      vars: 6,
      consts: [
        [3, "ngSubmit", "formGroup"],
        ["appearance", "fill"],
        ["matInput", "", "formControlName", "firstName"],
        [4, "ngIf"],
        ["matInput", "", "formControlName", "lastName"],
        ["matInput", "", "formControlName", "email"],
        ["matInput", "", "type", "password", "formControlName", "password"],
        ["mat-raised-button", "", "color", "primary", "type", "submit"],
      ],
      template: function (i, r) {
        i & 1 &&
          (u(0, "form", 0),
          j("ngSubmit", function () {
            return r.onSubmit();
          }),
          u(1, "mat-card")(2, "mat-card-header")(3, "mat-card-title"),
          y(4, "Register"),
          p()(),
          u(5, "mat-card-content")(6, "mat-form-field", 1)(7, "mat-label"),
          y(8, "First Name"),
          p(),
          O(9, "input", 2),
          A(10, gw, 2, 0, "mat-error", 3),
          p(),
          u(11, "mat-form-field", 1)(12, "mat-label"),
          y(13, "Last Name"),
          p(),
          O(14, "input", 4),
          A(15, bw, 2, 0, "mat-error", 3),
          p(),
          u(16, "mat-form-field", 1)(17, "mat-label"),
          y(18, "Email"),
          p(),
          O(19, "input", 5),
          A(20, _w, 2, 0, "mat-error", 3)(21, vw, 2, 0, "mat-error", 3),
          p(),
          u(22, "mat-form-field", 1)(23, "mat-label"),
          y(24, "Password"),
          p(),
          O(25, "input", 6),
          A(26, xw, 2, 0, "mat-error", 3),
          p(),
          u(27, "button", 7),
          y(28, "Register"),
          p()()()()),
          i & 2 &&
            (C("formGroup", r.registerForm),
            v(10),
            C(
              "ngIf",
              r.firstName == null ? null : r.firstName.hasError("required")
            ),
            v(5),
            C(
              "ngIf",
              r.lastName == null ? null : r.lastName.hasError("required")
            ),
            v(5),
            C("ngIf", r.email == null ? null : r.email.hasError("required")),
            v(),
            C("ngIf", r.email == null ? null : r.email.hasError("email")),
            v(5),
            C(
              "ngIf",
              r.password == null ? null : r.password.hasError("required")
            ));
      },
      dependencies: [
        Ei,
        wi,
        Ci,
        jn,
        ki,
        Kt,
        Ie,
        zn,
        Vn,
        Si,
        Bn,
        Ht,
        $t,
        yi,
        vi,
        Se,
        bi,
        _i,
        Qt,
        $e,
        yt,
        xe,
      ],
      styles: [
        "mat-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;max-width:400px;margin:100px auto;padding:24px;border:1px solid #e0e0e0;border-radius:12px;box-shadow:0 4px 12px #0003}mat-card-title[_ngcontent-%COMP%]{margin-bottom:24px}mat-form-field[_ngcontent-%COMP%]{width:100%;margin-bottom:20px}button[_ngcontent-%COMP%]{margin-top:16px}mat-error[_ngcontent-%COMP%]{color:#d32f2f}",
      ],
    }));
  let n = t;
  return n;
})();
function mt(n) {
  let t = Object.prototype.toString.call(n);
  return n instanceof Date || (typeof n == "object" && t === "[object Date]")
    ? new n.constructor(+n)
    : typeof n == "number" ||
      t === "[object Number]" ||
      typeof n == "string" ||
      t === "[object String]"
    ? new Date(n)
    : new Date(NaN);
}
function cf(n, t) {
  return n instanceof Date ? new n.constructor(t) : new Date(t);
}
var yw = Math.pow(10, 8) * 24 * 60 * 60 * 1e3,
  uO = -yw;
var hr = 43200,
  Kl = 1440;
var ww = 3600;
var lf = ww * 24,
  pO = lf * 7,
  kw = lf * 365.2425,
  Cw = kw / 12,
  fO = Cw * 3;
var Ew = {};
function df() {
  return Ew;
}
function Jl(n) {
  let t = mt(n),
    o = new Date(
      Date.UTC(
        t.getFullYear(),
        t.getMonth(),
        t.getDate(),
        t.getHours(),
        t.getMinutes(),
        t.getSeconds(),
        t.getMilliseconds()
      )
    );
  return o.setUTCFullYear(t.getFullYear()), +n - +o;
}
function Hn(n, t) {
  let o = mt(n),
    e = mt(t),
    i = o.getTime() - e.getTime();
  return i < 0 ? -1 : i > 0 ? 1 : i;
}
function mf(n) {
  return cf(n, Date.now());
}
function hf(n, t) {
  let o = mt(n),
    e = mt(t),
    i = o.getFullYear() - e.getFullYear(),
    r = o.getMonth() - e.getMonth();
  return i * 12 + r;
}
function uf(n) {
  return (t) => {
    let e = (n ? Math[n] : Math.trunc)(t);
    return e === 0 ? 0 : e;
  };
}
function pf(n, t) {
  return +mt(n) - +mt(t);
}
function ff(n) {
  let t = mt(n);
  return t.setHours(23, 59, 59, 999), t;
}
function gf(n) {
  let t = mt(n),
    o = t.getMonth();
  return (
    t.setFullYear(t.getFullYear(), o + 1, 0), t.setHours(23, 59, 59, 999), t
  );
}
function bf(n) {
  let t = mt(n);
  return +ff(t) == +gf(t);
}
function _f(n, t) {
  let o = mt(n),
    e = mt(t),
    i = Hn(o, e),
    r = Math.abs(hf(o, e)),
    a;
  if (r < 1) a = 0;
  else {
    o.getMonth() === 1 && o.getDate() > 27 && o.setDate(30),
      o.setMonth(o.getMonth() - i * r);
    let s = Hn(o, e) === -i;
    bf(mt(n)) && r === 1 && Hn(n, e) === 1 && (s = !1),
      (a = i * (r - Number(s)));
  }
  return a === 0 ? 0 : a;
}
function vf(n, t, o) {
  let e = pf(n, t) / 1e3;
  return uf(o?.roundingMethod)(e);
}
var Sw = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds",
    },
    xSeconds: { one: "1 second", other: "{{count}} seconds" },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes",
    },
    xMinutes: { one: "1 minute", other: "{{count}} minutes" },
    aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
    xHours: { one: "1 hour", other: "{{count}} hours" },
    xDays: { one: "1 day", other: "{{count}} days" },
    aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
    xWeeks: { one: "1 week", other: "{{count}} weeks" },
    aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
    xMonths: { one: "1 month", other: "{{count}} months" },
    aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
    xYears: { one: "1 year", other: "{{count}} years" },
    overXYears: { one: "over 1 year", other: "over {{count}} years" },
    almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
  },
  xf = (n, t, o) => {
    let e,
      i = Sw[n];
    return (
      typeof i == "string"
        ? (e = i)
        : t === 1
        ? (e = i.one)
        : (e = i.other.replace("{{count}}", t.toString())),
      o?.addSuffix
        ? o.comparison && o.comparison > 0
          ? "in " + e
          : e + " ago"
        : e
    );
  };
function us(n) {
  return (t = {}) => {
    let o = t.width ? String(t.width) : n.defaultWidth;
    return n.formats[o] || n.formats[n.defaultWidth];
  };
}
var Iw = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy",
  },
  Dw = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a",
  },
  Aw = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}",
  },
  yf = {
    date: us({ formats: Iw, defaultWidth: "full" }),
    time: us({ formats: Dw, defaultWidth: "full" }),
    dateTime: us({ formats: Aw, defaultWidth: "full" }),
  };
var Mw = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P",
  },
  wf = (n, t, o, e) => Mw[n];
function $n(n) {
  return (t, o) => {
    let e = o?.context ? String(o.context) : "standalone",
      i;
    if (e === "formatting" && n.formattingValues) {
      let a = n.defaultFormattingWidth || n.defaultWidth,
        s = o?.width ? String(o.width) : a;
      i = n.formattingValues[s] || n.formattingValues[a];
    } else {
      let a = n.defaultWidth,
        s = o?.width ? String(o.width) : n.defaultWidth;
      i = n.values[s] || n.values[a];
    }
    let r = n.argumentCallback ? n.argumentCallback(t) : t;
    return i[r];
  };
}
var Tw = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"],
  },
  Ow = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
  },
  Rw = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    wide: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
  Fw = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },
  Pw = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
  },
  Lw = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
  },
  Nw = (n, t) => {
    let o = Number(n),
      e = o % 100;
    if (e > 20 || e < 10)
      switch (e % 10) {
        case 1:
          return o + "st";
        case 2:
          return o + "nd";
        case 3:
          return o + "rd";
      }
    return o + "th";
  },
  kf = {
    ordinalNumber: Nw,
    era: $n({ values: Tw, defaultWidth: "wide" }),
    quarter: $n({
      values: Ow,
      defaultWidth: "wide",
      argumentCallback: (n) => n - 1,
    }),
    month: $n({ values: Rw, defaultWidth: "wide" }),
    day: $n({ values: Fw, defaultWidth: "wide" }),
    dayPeriod: $n({
      values: Pw,
      defaultWidth: "wide",
      formattingValues: Lw,
      defaultFormattingWidth: "wide",
    }),
  };
function Wn(n) {
  return (t, o = {}) => {
    let e = o.width,
      i = (e && n.matchPatterns[e]) || n.matchPatterns[n.defaultMatchWidth],
      r = t.match(i);
    if (!r) return null;
    let a = r[0],
      s = (e && n.parsePatterns[e]) || n.parsePatterns[n.defaultParseWidth],
      c = Array.isArray(s) ? zw(s, (f) => f.test(a)) : jw(s, (f) => f.test(a)),
      l;
    (l = n.valueCallback ? n.valueCallback(c) : c),
      (l = o.valueCallback ? o.valueCallback(l) : l);
    let m = t.slice(a.length);
    return { value: l, rest: m };
  };
}
function jw(n, t) {
  for (let o in n)
    if (Object.prototype.hasOwnProperty.call(n, o) && t(n[o])) return o;
}
function zw(n, t) {
  for (let o = 0; o < n.length; o++) if (t(n[o])) return o;
}
function Cf(n) {
  return (t, o = {}) => {
    let e = t.match(n.matchPattern);
    if (!e) return null;
    let i = e[0],
      r = t.match(n.parsePattern);
    if (!r) return null;
    let a = n.valueCallback ? n.valueCallback(r[0]) : r[0];
    a = o.valueCallback ? o.valueCallback(a) : a;
    let s = t.slice(i.length);
    return { value: a, rest: s };
  };
}
var Vw = /^(\d+)(th|st|nd|rd)?/i,
  Bw = /\d+/i,
  Uw = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  Hw = { any: [/^b/i, /^(a|c)/i] },
  $w = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i,
  },
  Ww = { any: [/1/i, /2/i, /3/i, /4/i] },
  qw = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  Gw = {
    narrow: [
      /^j/i,
      /^f/i,
      /^m/i,
      /^a/i,
      /^m/i,
      /^j/i,
      /^j/i,
      /^a/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
    any: [
      /^ja/i,
      /^f/i,
      /^mar/i,
      /^ap/i,
      /^may/i,
      /^jun/i,
      /^jul/i,
      /^au/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
  },
  Yw = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  Xw = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  Zw = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  Qw = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i,
    },
  },
  Ef = {
    ordinalNumber: Cf({
      matchPattern: Vw,
      parsePattern: Bw,
      valueCallback: (n) => parseInt(n, 10),
    }),
    era: Wn({
      matchPatterns: Uw,
      defaultMatchWidth: "wide",
      parsePatterns: Hw,
      defaultParseWidth: "any",
    }),
    quarter: Wn({
      matchPatterns: $w,
      defaultMatchWidth: "wide",
      parsePatterns: Ww,
      defaultParseWidth: "any",
      valueCallback: (n) => n + 1,
    }),
    month: Wn({
      matchPatterns: qw,
      defaultMatchWidth: "wide",
      parsePatterns: Gw,
      defaultParseWidth: "any",
    }),
    day: Wn({
      matchPatterns: Yw,
      defaultMatchWidth: "wide",
      parsePatterns: Xw,
      defaultParseWidth: "any",
    }),
    dayPeriod: Wn({
      matchPatterns: Zw,
      defaultMatchWidth: "any",
      parsePatterns: Qw,
      defaultParseWidth: "any",
    }),
  };
var td = {
  code: "en-US",
  formatDistance: xf,
  formatLong: yf,
  formatRelative: wf,
  localize: kf,
  match: Ef,
  options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
};
function Sf(n, t, o) {
  let e = df(),
    i = o?.locale ?? e.locale ?? td,
    r = 2520,
    a = Hn(n, t);
  if (isNaN(a)) throw new RangeError("Invalid time value");
  let s = Object.assign({}, o, { addSuffix: o?.addSuffix, comparison: a }),
    c,
    l;
  a > 0 ? ((c = mt(t)), (l = mt(n))) : ((c = mt(n)), (l = mt(t)));
  let m = vf(l, c),
    f = (Jl(l) - Jl(c)) / 1e3,
    g = Math.round((m - f) / 60),
    k;
  if (g < 2)
    return o?.includeSeconds
      ? m < 5
        ? i.formatDistance("lessThanXSeconds", 5, s)
        : m < 10
        ? i.formatDistance("lessThanXSeconds", 10, s)
        : m < 20
        ? i.formatDistance("lessThanXSeconds", 20, s)
        : m < 40
        ? i.formatDistance("halfAMinute", 0, s)
        : m < 60
        ? i.formatDistance("lessThanXMinutes", 1, s)
        : i.formatDistance("xMinutes", 1, s)
      : g === 0
      ? i.formatDistance("lessThanXMinutes", 1, s)
      : i.formatDistance("xMinutes", g, s);
  if (g < 45) return i.formatDistance("xMinutes", g, s);
  if (g < 90) return i.formatDistance("aboutXHours", 1, s);
  if (g < Kl) {
    let S = Math.round(g / 60);
    return i.formatDistance("aboutXHours", S, s);
  } else {
    if (g < r) return i.formatDistance("xDays", 1, s);
    if (g < hr) {
      let S = Math.round(g / Kl);
      return i.formatDistance("xDays", S, s);
    } else if (g < hr * 2)
      return (k = Math.round(g / hr)), i.formatDistance("aboutXMonths", k, s);
  }
  if (((k = _f(l, c)), k < 12)) {
    let S = Math.round(g / hr);
    return i.formatDistance("xMonths", S, s);
  } else {
    let S = k % 12,
      $ = Math.trunc(k / 12);
    return S < 3
      ? i.formatDistance("aboutXYears", $, s)
      : S < 9
      ? i.formatDistance("overXYears", $, s)
      : i.formatDistance("almostXYears", $ + 1, s);
  }
}
function If(n, t) {
  return Sf(n, mf(n), t);
}
var Df = (() => {
  let t = class t {
    constructor(e) {
      (this.http = e), (this.apiUrl = le.apiUrl);
    }
    getCommentsByPostId(e, i) {
      let r = { Authorization: `Bearer ${i}` };
      return this.http.get(`${this.apiUrl}/comments/post/${e}`, { headers: r });
    }
    createComment(e, i) {
      let r = localStorage.getItem("token"),
        a = new pt({ Authorization: `Bearer ${r}` }),
        s = { postId: e, content: i };
      return this.http.post(`${this.apiUrl}/create`, s, { headers: a });
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(h(Gt));
  }),
    (t.ɵprov = x({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let n = t;
  return n;
})();
var Jw = () => ["/dashboard"];
function tk(n, t) {
  if ((n & 1 && (u(0, "h2"), y(1), p()), n & 2)) {
    let o = P(2);
    v(), Et(o.post.title);
  }
}
function ek(n, t) {
  n & 1 && (u(0, "div", 20), y(1, " T\xEDtulo requerido "), p());
}
function ik(n, t) {
  if (
    (n & 1 &&
      (u(0, "form", 15)(1, "div", 16)(2, "label", 17),
      y(3, "T\xEDtulo del post"),
      p(),
      O(4, "input", 18),
      A(5, ek, 2, 0, "div", 19),
      p()()),
    n & 2)
  ) {
    let o,
      e = P(2);
    C("formGroup", e.editForm),
      v(5),
      C(
        "ngIf",
        ((o = e.editForm.get("title")) == null ? null : o.invalid) &&
          (((o = e.editForm.get("title")) == null ? null : o.touched) ||
            ((o = e.editForm.get("title")) == null ? null : o.dirty))
      );
  }
}
function nk(n, t) {
  if ((n & 1 && O(0, "img", 22), n & 2)) {
    let o = P(3);
    kr("alt", o.post.title), C("src", o.apiUrl + "/" + o.post.imageUrl, xr);
  }
}
function ok(n, t) {
  if ((n & 1 && (u(0, "div"), A(1, nk, 1, 2, "img", 21), p()), n & 2)) {
    let o = P(2);
    v(), C("ngIf", o.post.imageUrl);
  }
}
function rk(n, t) {
  if ((n & 1 && (u(0, "p"), y(1), p()), n & 2)) {
    let o = P(2);
    v(), Et(o.post.content);
  }
}
function ak(n, t) {
  n & 1 && (u(0, "div", 20), y(1, " Contenido requerido "), p());
}
function sk(n, t) {
  if (n & 1) {
    let o = vt();
    u(0, "form", 15)(1, "div", 16)(2, "label", 23),
      y(3, "Contenido"),
      p(),
      O(4, "textarea", 24),
      A(5, ak, 2, 0, "div", 19),
      p(),
      u(6, "div", 16)(7, "label", 25),
      y(8, "Subir imagen"),
      p(),
      u(9, "input", 26),
      j("change", function (i) {
        st(o);
        let r = P(2);
        return ct(r.onFileChange(i));
      }),
      p()()();
  }
  if (n & 2) {
    let o,
      e = P(2);
    C("formGroup", e.editForm),
      v(5),
      C(
        "ngIf",
        ((o = e.editForm.get("content")) == null ? null : o.invalid) &&
          (((o = e.editForm.get("content")) == null ? null : o.touched) ||
            ((o = e.editForm.get("content")) == null ? null : o.dirty))
      );
  }
}
function ck(n, t) {
  if (n & 1) {
    let o = vt();
    u(0, "button", 30),
      j("click", function () {
        st(o);
        let i = P(3);
        return ct(i.toggleEdit());
      }),
      y(1, " Editar "),
      p();
  }
}
function lk(n, t) {
  if (
    (n & 1 &&
      (u(0, "div", 27),
      A(1, ck, 2, 0, "button", 28),
      u(2, "button", 29),
      y(3, " Volver "),
      p()()),
    n & 2)
  ) {
    let o = P(2);
    v(),
      C("ngIf", (o.post.author == null ? null : o.post.author.id) === o.userId),
      v(),
      C("routerLink", Cr(2, Jw));
  }
}
function dk(n, t) {
  if (n & 1) {
    let o = vt();
    u(0, "div", 27)(1, "button", 30),
      j("click", function () {
        st(o);
        let i = P(2);
        return ct(i.updatePost());
      }),
      y(2, "Actualizar"),
      p(),
      u(3, "button", 31),
      j("click", function () {
        st(o);
        let i = P(2);
        return ct(i.toggleEdit());
      }),
      y(4, "Cancelar"),
      p()();
  }
}
function mk(n, t) {
  if (
    (n & 1 &&
      (u(0, "div", 9)(1, "div", 10),
      A(2, tk, 2, 1, "h2", 4)(3, ik, 6, 2, "form", 11),
      p(),
      u(4, "div", 12),
      A(5, ok, 2, 1, "div", 4)(6, rk, 2, 1, "p", 4)(7, sk, 10, 2, "form", 11),
      u(8, "div", 13)(9, "span"),
      y(10),
      p()()(),
      A(11, lk, 4, 3, "div", 14)(12, dk, 5, 0, "div", 14),
      p()),
    n & 2)
  ) {
    let o = P();
    v(2),
      C("ngIf", !o.isEditing),
      v(),
      C("ngIf", o.isEditing),
      v(2),
      C("ngIf", !o.isEditing),
      v(),
      C("ngIf", !o.isEditing),
      v(),
      C("ngIf", o.isEditing),
      v(3),
      ie(
        "Autor: ",
        (o.post.author == null ? null : o.post.author.nombre) || "Desconocido",
        ""
      ),
      v(),
      C("ngIf", !o.isEditing),
      v(),
      C("ngIf", o.isEditing);
  }
}
function hk(n, t) {
  n & 1 &&
    (u(0, "mat-error"), y(1, " El comentario no puede estar vac\xEDo "), p());
}
function uk(n, t) {
  if (
    (n & 1 &&
      (u(0, "mat-card-content")(1, "div", 32)(2, "p"),
      y(3),
      p(),
      u(4, "small"),
      y(5),
      p(),
      u(6, "small", 33),
      y(7),
      p()()()),
    n & 2)
  ) {
    let o = t.$implicit,
      e = P();
    v(3),
      Et(o.content),
      v(2),
      ie(
        "Autor: ",
        (o.author == null ? null : o.author.nombre) || "An\xF3nimo",
        ""
      ),
      v(2),
      Et(e.getRelativeTime(o.createdAt));
  }
}
var Af = (() => {
  let t = class t {
    constructor(e, i, r, a, s, c) {
      (this.fb = e),
        (this.postService = i),
        (this.route = r),
        (this.router = a),
        (this.commentService = s),
        (this.commentSocketService = c),
        (this.comments = []),
        (this.token = ""),
        (this.isEditing = !1),
        (this.selectedImage = null),
        (this.apiUrl = le.apiUrl),
        (this.userId = 0),
        (this.commentForm = this.fb.group({ content: ["", bt.required] })),
        (this.editForm = this.fb.group({
          title: ["", bt.required],
          content: ["", bt.required],
          imageUrl: [""],
        }));
    }
    ngOnInit() {
      let e = localStorage.getItem("token"),
        i = localStorage.getItem("userId");
      (this.userId = i ? +i : 0),
        (this.token = e !== null ? e : ""),
        this.token && this.commentSocketService.connect(),
        this.route.paramMap.subscribe((r) => {
          let a = +r.get("id");
          this.loadPost(a);
        });
    }
    loadPost(e) {
      this.postService.getPostById(e, this.token).subscribe(
        (i) => {
          (this.post = i),
            this.loadComments(e),
            this.commentSocketService.onCommentCreated().subscribe((r) => {
              this.comments.unshift(r),
                this.comments.sort(
                  (a, s) =>
                    new Date(s.createdAt).getTime() -
                    new Date(a.createdAt).getTime()
                );
            });
        },
        (i) => {
          console.error("Error fetching post:", i);
        }
      );
    }
    onFileChange(e) {
      let i = e.target.files[0];
      i && (this.selectedImage = i);
    }
    toggleEdit() {
      this.isEditing = !this.isEditing;
    }
    updatePost() {
      if (this.editForm.valid) {
        let e = this.editForm.value,
          i = new FormData();
        i.append("title", e.title),
          i.append("content", e.content),
          this.selectedImage && i.append("image", this.selectedImage),
          this.postService.updatePost(this.post.id, i, this.token).subscribe({
            next: (r) => {
              (this.post = r), (this.isEditing = !1);
            },
            error: (r) => {
              console.error("Error updating post:", r);
            },
            complete: () => {
              console.log("Post update complete");
            },
          });
      }
    }
    loadComments(e) {
      this.commentService.getCommentsByPostId(e, this.token).subscribe(
        (i) => {
          this.comments = i;
        },
        (i) => {
          console.error("Error fetching comments:", i);
        }
      );
    }
    submitComment() {
      if (this.commentForm.valid) {
        let e = this.commentForm.get("content")?.value,
          i = this.post.id;
        this.commentSocketService.createComment(i, e), this.commentForm.reset();
      }
    }
    ngOnDestroy() {
      this.commentSocketService.disconnect();
    }
    getRelativeTime(e) {
      return If(new Date(e), { addSuffix: !0 });
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(d(xi), d(Ii), d(ke), d(gt), d(Df), d(Va));
  }),
    (t.ɵcmp = z({
      type: t,
      selectors: [["app-post-detail"]],
      standalone: !0,
      features: [V],
      decls: 16,
      vars: 5,
      consts: [
        ["class", "post-detail-card", 4, "ngIf"],
        [1, "comment-form"],
        [3, "ngSubmit", "formGroup"],
        [
          "matInput",
          "",
          "formControlName",
          "content",
          "placeholder",
          "Escribe tu comentario...",
        ],
        [4, "ngIf"],
        [
          "mat-raised-button",
          "",
          "color",
          "primary",
          "type",
          "submit",
          3,
          "disabled",
        ],
        [1, "comments-section"],
        [1, "comments-content"],
        [4, "ngFor", "ngForOf"],
        [1, "post-detail-card"],
        [1, "post-header"],
        [3, "formGroup", 4, "ngIf"],
        [1, "post-content"],
        [1, "post-author"],
        ["class", "post-actions", 4, "ngIf"],
        [3, "formGroup"],
        [1, "form-group"],
        ["for", "title"],
        [
          "type",
          "text",
          "id",
          "title",
          "formControlName",
          "title",
          "placeholder",
          "T\xEDtulo del post",
          1,
          "form-control",
        ],
        ["class", "text-danger", 4, "ngIf"],
        [1, "text-danger"],
        ["class", "post-image", 3, "src", "alt", 4, "ngIf"],
        [1, "post-image", 3, "src", "alt"],
        ["for", "content"],
        [
          "id",
          "content",
          "formControlName",
          "content",
          "placeholder",
          "Contenido",
          1,
          "form-control",
        ],
        ["for", "image"],
        ["type", "file", "id", "image", 1, "form-control", 3, "change"],
        [1, "post-actions"],
        ["class", "btn btn-primary", 3, "click", 4, "ngIf"],
        [1, "btn", "btn-secondary", 3, "routerLink"],
        [1, "btn", "btn-primary", 3, "click"],
        [1, "btn", "btn-danger", 3, "click"],
        [1, "comment"],
        [1, "comment-date"],
      ],
      template: function (i, r) {
        if (
          (i & 1 &&
            (A(0, mk, 13, 8, "div", 0),
            u(1, "mat-card", 1)(2, "mat-card-title"),
            y(3, "Agregar Comentario"),
            p(),
            u(4, "mat-card-content")(5, "form", 2),
            j("ngSubmit", function () {
              return r.submitComment();
            }),
            u(6, "mat-form-field"),
            O(7, "textarea", 3),
            A(8, hk, 2, 0, "mat-error", 4),
            p(),
            u(9, "button", 5),
            y(10, " Enviar "),
            p()()()(),
            u(11, "mat-card", 6)(12, "mat-card-title"),
            y(13, "Comentarios"),
            p(),
            u(14, "div", 7),
            A(15, uk, 8, 3, "mat-card-content", 8),
            p()()),
          i & 2)
        ) {
          let a;
          C("ngIf", r.post),
            v(5),
            C("formGroup", r.commentForm),
            v(3),
            C(
              "ngIf",
              (a = r.commentForm.get("content")) == null
                ? null
                : a.hasError("required")
            ),
            v(),
            C("disabled", r.commentForm.invalid),
            v(6),
            C("ngForOf", r.comments);
        }
      },
      dependencies: [
        bn,
        gn,
        Ei,
        wi,
        Ci,
        ki,
        Ht,
        $t,
        ms,
        yt,
        Tr,
        xe,
        Kt,
        Ie,
        Vn,
        Si,
        Bn,
        yi,
        vi,
        Se,
        bi,
        _i,
        Qt,
        $e,
      ],
      styles: [
        "body[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;background-color:#f4f4f9;color:#333;margin:0;padding:0}.post-detail-card[_ngcontent-%COMP%]{background-color:#fff;border-radius:12px;box-shadow:0 4px 12px #0000001a;margin:20px auto;padding:20px;max-width:800px}.post-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:15px;color:#333;font-weight:600}.form-group[_ngcontent-%COMP%]{margin-bottom:15px}.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:1rem;font-weight:500;color:#555}.form-control[_ngcontent-%COMP%]{width:100%;padding:10px;font-size:1rem;border:1px solid #ddd;border-radius:6px;box-shadow:inset 0 2px 4px #0000001a;transition:border .3s ease-in-out}.form-control[_ngcontent-%COMP%]:focus{border-color:#007bff;outline:none}.text-danger[_ngcontent-%COMP%]{font-size:.875rem;color:#dc3545}.post-image[_ngcontent-%COMP%]{width:100%;height:auto;max-height:400px;object-fit:cover;border-radius:12px;margin-bottom:20px;box-shadow:0 4px 12px #0000001a}.post-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.6;color:#555;margin-bottom:20px}.post-author[_ngcontent-%COMP%]{font-size:.9rem;color:#777;margin-top:15px}.post-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;gap:10px;margin-top:20px}.post-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:10px 20px;border-radius:6px;font-size:1rem;cursor:pointer;border:none;transition:background-color .3s ease}.btn-primary[_ngcontent-%COMP%]{background-color:#007bff;color:#fff}.btn-primary[_ngcontent-%COMP%]:hover{background-color:#0056b3}.btn-secondary[_ngcontent-%COMP%]{background-color:#6c757d;color:#fff}.btn-secondary[_ngcontent-%COMP%]:hover{background-color:#5a6268}.btn-danger[_ngcontent-%COMP%]{background-color:#dc3545;color:#fff}.btn-danger[_ngcontent-%COMP%]:hover{background-color:#c82333}.comment-form[_ngcontent-%COMP%], .comments-section[_ngcontent-%COMP%]{background-color:#fff;border-radius:12px;box-shadow:0 4px 12px #0000001a;margin:20px auto;padding:20px;max-width:800px}.comment-form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .comments-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:15px;color:#333}.comments-content[_ngcontent-%COMP%]{margin-top:20px}.comment[_ngcontent-%COMP%]{background-color:#f9f9f9;border-radius:6px;padding:15px;margin-bottom:15px;box-shadow:0 2px 8px #0000000d}.comment[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem;color:#555;margin-bottom:8px}.comment[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:.85rem;color:#999}.comment-date[_ngcontent-%COMP%]{float:right;color:#bbb}@media (max-width: 600px){.post-detail-card[_ngcontent-%COMP%], .comment-form[_ngcontent-%COMP%], .comments-section[_ngcontent-%COMP%]{padding:15px;margin:10px}.post-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.5rem}.form-control[_ngcontent-%COMP%]{font-size:.9rem}.post-actions[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch}.post-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{width:100%;margin-bottom:10px}.comment-form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .comments-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.25rem}}",
      ],
    }));
  let n = t;
  return n;
})();
var Mf = (() => {
  let t = class t {
    constructor() {
      this.title = "blog-frontend";
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵcmp = z({
      type: t,
      selectors: [["app-root"]],
      standalone: !0,
      features: [V],
      decls: 3,
      vars: 0,
      consts: [[1, "main-content"]],
      template: function (i, r) {
        i & 1 &&
          (O(0, "app-navbar"), u(1, "div", 0), O(2, "router-outlet"), p());
      },
      dependencies: [Ec, Bu],
      styles: [
        "body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{margin:0;padding:0;min-height:100vh;display:flex;flex-direction:column}.main-content[_ngcontent-%COMP%]{flex:1}",
      ],
    }));
  let n = t;
  return n;
})();
var pk = "@",
  fk = (() => {
    let t = class t {
      constructor(e, i, r, a, s) {
        (this.doc = e),
          (this.delegate = i),
          (this.zone = r),
          (this.animationType = a),
          (this.moduleImpl = s),
          (this._rendererFactoryPromise = null),
          (this.scheduler = _(kd, { optional: !0 })),
          (this.loadingSchedulerFn = _(gk, { optional: !0 }));
      }
      ngOnDestroy() {
        this._engine?.flush();
      }
      loadImpl() {
        let e = () =>
            this.moduleImpl ?? import("./chunk-2ORUMEZA.js").then((r) => r),
          i;
        return (
          this.loadingSchedulerFn
            ? (i = this.loadingSchedulerFn(e))
            : (i = e()),
          i
            .catch((r) => {
              throw new at(5300, !1);
            })
            .then(({ ɵcreateEngine: r, ɵAnimationRendererFactory: a }) => {
              this._engine = r(this.animationType, this.doc);
              let s = new a(this.delegate, this._engine, this.zone);
              return (this.delegate = s), s;
            })
        );
      }
      createRenderer(e, i) {
        let r = this.delegate.createRenderer(e, i);
        if (r.ɵtype === 0) return r;
        typeof r.throwOnSyntheticProps == "boolean" &&
          (r.throwOnSyntheticProps = !1);
        let a = new ed(r);
        return (
          i?.data?.animation &&
            !this._rendererFactoryPromise &&
            (this._rendererFactoryPromise = this.loadImpl()),
          this._rendererFactoryPromise
            ?.then((s) => {
              let c = s.createRenderer(e, i);
              a.use(c), this.scheduler?.notify(10);
            })
            .catch((s) => {
              a.use(r);
            }),
          a
        );
      }
      begin() {
        this.delegate.begin?.();
      }
      end() {
        this.delegate.end?.();
      }
      whenRenderingDone() {
        return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
      }
    };
    (t.ɵfac = function (i) {
      Oi();
    }),
      (t.ɵprov = x({ token: t, factory: t.ɵfac }));
    let n = t;
    return n;
  })(),
  ed = class {
    constructor(t) {
      (this.delegate = t), (this.replay = []), (this.ɵtype = 1);
    }
    use(t) {
      if (((this.delegate = t), this.replay !== null)) {
        for (let o of this.replay) o(t);
        this.replay = null;
      }
    }
    get data() {
      return this.delegate.data;
    }
    destroy() {
      (this.replay = null), this.delegate.destroy();
    }
    createElement(t, o) {
      return this.delegate.createElement(t, o);
    }
    createComment(t) {
      return this.delegate.createComment(t);
    }
    createText(t) {
      return this.delegate.createText(t);
    }
    get destroyNode() {
      return this.delegate.destroyNode;
    }
    appendChild(t, o) {
      this.delegate.appendChild(t, o);
    }
    insertBefore(t, o, e, i) {
      this.delegate.insertBefore(t, o, e, i);
    }
    removeChild(t, o, e) {
      this.delegate.removeChild(t, o, e);
    }
    selectRootElement(t, o) {
      return this.delegate.selectRootElement(t, o);
    }
    parentNode(t) {
      return this.delegate.parentNode(t);
    }
    nextSibling(t) {
      return this.delegate.nextSibling(t);
    }
    setAttribute(t, o, e, i) {
      this.delegate.setAttribute(t, o, e, i);
    }
    removeAttribute(t, o, e) {
      this.delegate.removeAttribute(t, o, e);
    }
    addClass(t, o) {
      this.delegate.addClass(t, o);
    }
    removeClass(t, o) {
      this.delegate.removeClass(t, o);
    }
    setStyle(t, o, e, i) {
      this.delegate.setStyle(t, o, e, i);
    }
    removeStyle(t, o, e) {
      this.delegate.removeStyle(t, o, e);
    }
    setProperty(t, o, e) {
      this.shouldReplay(o) && this.replay.push((i) => i.setProperty(t, o, e)),
        this.delegate.setProperty(t, o, e);
    }
    setValue(t, o) {
      this.delegate.setValue(t, o);
    }
    listen(t, o, e) {
      return (
        this.shouldReplay(o) && this.replay.push((i) => i.listen(t, o, e)),
        this.delegate.listen(t, o, e)
      );
    }
    shouldReplay(t) {
      return this.replay !== null && t.startsWith(pk);
    }
  },
  gk = new w("");
function Tf(n = "animations") {
  return (
    Ss("NgAsyncAnimations"),
    Ai([
      {
        provide: wr,
        useFactory: (t, o, e) => new fk(t, o, e, n),
        deps: [R, Vr, D],
      },
      {
        provide: At,
        useValue: n === "noop" ? "NoopAnimations" : "BrowserAnimations",
      },
    ])
  );
}
var Of = (() => {
  let t = class t {
    constructor(e) {
      this.http = e;
    }
    checkToken(e) {
      return this.http.post("/api/auth/validate-token", { token: e });
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(h(Gt));
  }),
    (t.ɵprov = x({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let n = t;
  return n;
})();
var Rf = (n, t) => {
  let o = _(Of),
    e = _(gt),
    i = localStorage.getItem("token");
  if (i) {
    let r = n.clone({ setHeaders: { Authorization: `Bearer ${i}` } });
    return t(r).pipe(
      Dt(
        (a) => (
          (a.status === 401 || a.status === 403) && e.navigate(["/login"]),
          jt(a)
        )
      )
    );
  }
  return t(n);
};
var Ff = (() => {
  let t = class t {
    constructor(e, i) {
      (this.postService = e), (this.router = i);
    }
    canActivate() {
      return this.postService.validateToken().pipe(
        B((e) => (e.valid ? !0 : (this.router.navigate(["/login"]), !1))),
        Dt(() => (this.router.navigate(["/login"]), I(!1)))
      );
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(h(Ii), h(gt));
  }),
    (t.ɵprov = x({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let n = t;
  return n;
})();
var Pf = [
  { path: "login", component: af },
  { path: "register", component: sf },
  { path: "dashboard", component: rf, canActivate: [Ff] },
  { path: "post/:id", component: Af },
  { path: "**", redirectTo: "/login" },
  { path: "", redirectTo: "/login", pathMatch: "full" },
];
var Lf = {
  providers: [
    uh(Pf),
    zs(pm([Rf])),
    ks(Au.forRoot({ url: le.apiUrl, options: { transports: ["websocket"] } })),
    Tf(),
    ks(fm),
  ],
};
wm(Mf, { providers: [...Lf.providers, Ii] }).catch((n) => console.error(n));
