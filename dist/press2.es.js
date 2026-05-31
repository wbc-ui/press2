import { WBC as w } from "@wbc-ui/core2";
function h(s, e, r, a, o, l, p, f) {
  var c = typeof s == "function" ? s.options : s;
  return e && (c.render = e, c.staticRenderFns = r, c._compiled = !0), {
    exports: s,
    options: c
  };
}
const b = {
  name: "PressLayout",
  props: {
    menu: { type: Array, default: () => [] },
    side: { type: Array, default: () => [] },
    menu0: { type: Array, default: () => [] },
    meta: { type: Object, default: () => ({}) },
    footer: { type: String, default: "" }
  },
  data() {
    return {
      routerViewKey: 0
    };
  },
  computed: {
    metaComp() {
      return {
        comp: "meta",
        title: this.meta.title || "",
        description: this.meta.description || "",
        keywords: this.meta.keywords || [],
        favIcon: this.meta.favicon || "",
        viewport: "width=device-width, initial-scale=1.0",
        language: "en",
        robots: "index,follow",
        ...this.meta.og || {},
        ...this.meta.twitter || {}
      };
    },
    footerText() {
      return this.footer || this.meta.author || "Built with wb-press2";
    }
  }
};
var g = function() {
  var e = this, r = e._self._c;
  return r("div", { staticClass: "press-layout" }, [r("PressSidebar", { attrs: { items: e.side } }), r("v-main", [r("WBC", { attrs: { item: e.metaComp } }), r("PressTabs", { attrs: { items: e.menu0 } }), r("v-container", [r("WBDataViewer", { attrs: { value: e.menu, output: ["vBody"], "max-depth": 1 } }), r("router-view", { key: e.routerViewKey })], 1)], 1), r("v-footer", { attrs: { app: "" } }, [r("span", [e._v("© " + e._s((/* @__PURE__ */ new Date()).getFullYear()) + " " + e._s(e.footerText))])])], 1);
}, P = [], $ = /* @__PURE__ */ h(
  b,
  g,
  P
);
const v = $.exports, x = {
  name: "PressSidebar",
  props: {
    items: { type: Array, default: () => [] },
    expandOnHover: { type: Boolean, default: !0 },
    permanent: { type: Boolean, default: !0 },
    absolute: { type: Boolean, default: !0 },
    rail: { type: Boolean, default: !0 }
  },
  computed: {
    sidebarTemplates() {
      return {
        display: {
          td: { 1: "<VTab,blue pa-1 my-1>", 2: "level1" }
        }
      };
    },
    sidebarConfig() {
      return {
        output: [
          {
            comp: "~VNavigationDrawer",
            options: {
              props: {
                "expand-on-hover": this.expandOnHover,
                absolute: this.absolute,
                permanent: this.permanent,
                rail: this.rail
              }
            }
          },
          "vert"
        ],
        childOutput: ["horiz"]
      };
    }
  }
};
var B = function() {
  var e = this, r = e._self._c;
  return r("WBDataViewer", { attrs: { value: e.items, output: ["horiz"], templates: e.sidebarTemplates, config: e.sidebarConfig } });
}, R = [], F = /* @__PURE__ */ h(
  x,
  B,
  R
);
const C = F.exports, V = {
  name: "PressTabs",
  props: {
    items: { type: Array, default: () => [] }
  }
};
var W = function() {
  var e = this, r = e._self._c;
  return r("WBDataViewer", { attrs: { value: e.items, output: ["wbc"], "max-depth": 1 } });
}, A = [], T = /* @__PURE__ */ h(
  V,
  W,
  A
);
const H = T.exports;
function k(s) {
  if (!s || typeof s != "string") return { displayName: "", componentName: "" };
  const e = s.split("||"), r = e[0] || "";
  let a = "";
  if (e[1]) {
    const o = e[1].trim();
    if (o.startsWith("{") && o.endsWith("}"))
      try {
        a = JSON.parse(o.replace(/'/g, '"')).name || "";
      } catch {
        const p = o.substring(1, o.length - 1).trim();
        p.startsWith("name:") ? a = p.substring(5).trim() : p.startsWith('"name":') ? a = p.substring(7).replace(/"/g, "").trim() : a = o;
      }
    else
      a = o;
  }
  return { displayName: r, componentName: a };
}
function S(s = {}) {
  const { menu: e = [], side: r = [], routeMap: a = {}, defaults: o = {} } = s;
  function l(t) {
    var n, i, u;
    if ((n = a[t]) != null && n.path) return a[t].path;
    if (t.startsWith("props-")) {
      const m = t.replace("props-", "");
      return ((u = (i = a["props-*"]) == null ? void 0 : i.path) == null ? void 0 : u.replace(":doc", m)) || `/props/${m}`;
    }
    return t === "HomeView" || t === "Home" ? "/" : t === "AboutView" || t === "About" ? "/about" : o.pathPrefix ? `${o.pathPrefix}/${t.toLowerCase()}` : `/${t.toLowerCase()}`;
  }
  function p(t) {
    var n;
    if ((n = a[t]) != null && n.item) return { item: a[t].item };
    if (t.startsWith("props-")) {
      const i = t.replace("props-", "");
      return { item: `./docs/props/${i}/${i}.vue` };
    }
    return t === "HomeView" || t === "Home" ? { item: "./views/HomeView/HomeView.vue" } : { item: `./views/${t}/${t}.vue` };
  }
  function f(t) {
    return t.map((n) => {
      if (!(n != null && n.name)) return null;
      const { displayName: i, componentName: u } = k(n.name);
      return u ? {
        path: l(u),
        name: i || u,
        component: w,
        props: p(u)
      } : null;
    }).filter(Boolean);
  }
  const c = f(r), d = f(e);
  return [...c, ...d].filter(
    (t, n, i) => n === i.findIndex((u) => u.path === t.path)
  );
}
function I(s, e = {}) {
  const {
    VueRouter: r,
    Vuetify: a,
    menu: o = [],
    side: l = [],
    menu0: p = [],
    meta: f = {},
    theme: c = {},
    routes: d = {},
    el: _ = "#app",
    onReady: t
  } = e;
  if (!r || !a)
    throw new Error("wb-press2: createPressApp requires `VueRouter` and `Vuetify` constructors via options.");
  s.use(r), s.use(a);
  const n = S({
    menu: o,
    side: l,
    routeMap: d.routeMap || {}
  }), i = new r({
    mode: d.mode || "hash",
    base: d.base || "/",
    routes: n
  }), u = new a({
    theme: {
      dark: c.dark || !1,
      themes: c.themes || {
        light: {
          primary: "#1976D2",
          secondary: "#424242",
          accent: "#82B1FF",
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FFC107"
        }
      }
    },
    icons: { iconfont: "mdi" },
    breakpoint: { mobileBreakpoint: "sm" }
  }), m = new s({
    router: i,
    vuetify: u,
    render: (y) => y(v, {
      props: { menu: o, side: l, menu0: p, meta: f }
    })
  }).$mount(_);
  return typeof t == "function" && t(m), m;
}
const D = function(s, e = {}) {
  s.component("PressLayout", v), s.component("PressSidebar", C), s.component("PressTabs", H);
}, L = { install: D };
export {
  v as PressLayout,
  C as PressSidebar,
  H as PressTabs,
  I as createPressApp,
  S as createRouter,
  L as default,
  D as install,
  k as parseRouteName
};
