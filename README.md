<p align="center">
  <img src="https://cdn.jsdelivr.net/npm/@wbc-ui/press2/logo/press2.svg" alt="@wbc-ui/press2" width="220" style="max-width: 100%;"/>
</p>

<p align="center">
  <strong>Docs Sites as Data. Vue 2. JSON-driven.</strong><br/>
  <em>Build content-driven sites — docs, blogs, catalogs — from a JSON config, not Vue component code. One <code>createPressApp()</code> call (or a <code>&lt;PressLayout&gt;</code>) turns navigation + meta into a full site.</em>
</p>

<p align="center">
<a href="https://www.npmjs.com/package/@wbc-ui/press2"><img src="https://img.shields.io/npm/v/@wbc-ui/press2?color=1976D2" alt="npm"></a>
<a href="https://www.npmjs.com/package/@wbc-ui/press2?activeTab=versions"><img src="https://img.shields.io/npm/dm/@wbc-ui/press2?color=1976D2" alt="downloads"></a>
<a href="https://github.com/wbc-ui/press2/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/@wbc-ui/press2?color=blue" alt="license"></a>
<a href="https://vuejs.org"><img src="https://img.shields.io/badge/vue-2.7%2B-42b883" alt="vue"></a>
</p>

<p align="center">
  <a href="https://wb-press.wbc-ui.com">📘 Docs</a> ·
  <a href="https://github.com/wbc-ui/press2">🐙 GitHub</a> ·
  <a href="https://wb-press.wbc-ui.com">▶️ Playground</a> ·
  <a href="https://wbc-ui.com">💎 Pro</a>
</p>

---

## Why?

**@wbc-ui/press2** lets you build a documentation/content site by describing its **navigation and meta as JSON** — no per-page Vue components, no router boilerplate. It composes on top of the `@wbc-ui/core2` (WBC) engine, so page bodies are WBC items.

### A whole site from one call

```javascript
import { createPressApp } from '@wbc-ui/press2';
import { menu, side, menu0 } from './config/navigation';

createPressApp({
  menu, side, menu0,
  meta: { title: 'My Documentation', description: 'Built with press2', author: 'Your Name' },
});
```

> **One config. One `createPressApp()`.** Navigation, layout, and meta are data — pages are WBC items.

---

## What is @wbc-ui/press2?

A **Vue 2.7+ docs-site engine** that renders a navigable site from JSON navigation config. Use the full app factory or drop the layout component into an existing app.

| Surface | Role |
|---|---|
| `createPressApp({ menu, side, menu0, meta })` | App factory — boots a complete press site from config |
| `<PressLayout :menu :side :menu0 :meta>` | The layout component — top menu, sidebar, and content region |
| `menu` / `side` / `menu0` | Navigation config: primary menu, sidebar tree, and the home/landing menu |
| `meta` | Site meta: `title`, `description`, `author`, … |

**Who's it for?** Teams shipping documentation, knowledge bases, blogs, or catalog sites who want a JSON-configured site rather than a hand-built Vue app.

---

## Teasing Examples

### Level 1 — Component-level usage
```vue
<template>
  <PressLayout :menu="menu" :side="side" :menu0="menu0" :meta="meta" />
</template>

<script>
import { PressLayout } from '@wbc-ui/press2';
import { menu, side, menu0 } from './config/navigation';
export default {
  components: { PressLayout },
  data: () => ({ menu, side, menu0, meta: { title: 'My Docs' } }),
};
</script>
```

### Level 2 — Full app factory
```javascript
import { createPressApp } from '@wbc-ui/press2';
import { menu, side, menu0 } from './config/navigation';

createPressApp({
  menu, side, menu0,
  meta: { title: 'Handbook', description: 'Internal docs', author: 'Platform Team' },
});
```

---

## 🚀 Try it in 30 seconds

> Explore a live press2 site at **[wb-press.wbc-ui.com](https://wb-press.wbc-ui.com)** — see the navigation config drive the whole site, and copy the structure into your own project.

---

## Installation

### Prerequisites

- **Node.js** ≥ 18 · **Vue 2.7.x** (Vue 3 tracked as `@wbc-ui/press3`)
- **[`@wbc-ui/core2`](https://www.npmjs.com/package/@wbc-ui/core2)** — the WBC engine that renders page bodies

### npm (recommended)

```bash
npm install @wbc-ui/press2 @wbc-ui/core2

# Peer dependencies — install once per project
npm install vue@^2.7.16 vuetify@^2.7.2
```

### Yarn / pnpm

```bash
yarn add @wbc-ui/press2 @wbc-ui/core2 vue@^2.7.16 vuetify@^2.7.2
pnpm add @wbc-ui/press2 @wbc-ui/core2 vue@^2.7.16 vuetify@^2.7.2
```

### Usage

```javascript
// Either boot a full app:
import { createPressApp } from '@wbc-ui/press2';
createPressApp({ menu, side, menu0, meta });

// …or drop the layout into an existing app:
import { PressLayout } from '@wbc-ui/press2';
```

### Troubleshooting common install errors

| Symptom | Cause | Fix |
|---|---|---|
| Site renders unstyled | Vuetify CSS isn't loaded | Import once: `import 'vuetify/dist/vuetify.min.css';` |
| `Cannot find module '@wbc-ui/press2'` | npm couldn't resolve the package | `npm ls @wbc-ui/press2`; if empty, `npm install @wbc-ui/press2@latest`. |
| Page bodies don't render | `@wbc-ui/core2` not installed | press2 renders pages as WBC items — `npm install @wbc-ui/core2`. |

For worked examples, see [wb-press.wbc-ui.com](https://wb-press.wbc-ui.com).

---

## 💎 Free vs Pro

> **`@wbc-ui/press2` is open-source and a complete docs engine today** — the app factory, layout, JSON navigation, and WBC-rendered page bodies are free. The Pro lane follows the same open-core tiering as the underlying [`@wbc-ui/core2`](https://www.npmjs.com/package/@wbc-ui/core2) engine.

| Capability | Free | Pro |
|---|---|---|
| `createPressApp` + `<PressLayout>` | ✅ Full | ✅ Full |
| JSON navigation (`menu` / `side` / `menu0`) + `meta` | ✅ Full | ✅ Full |
| WBC-rendered page bodies | ✅ | ✅ |
| Depth / item caps on rendered WBC trees | core2 free caps | ∞ (via core2 Pro) |
| Advanced engine hooks & headless extraction | — | ✅ (via core2 Pro) |

👉 **[Compare in detail →](https://wbc-ui.com/free-vs-pro)** · **[Buy Pro →](https://wbc-ui.com/pricing)**

---

## 🌐 Ecosystem

`@wbc-ui/press2` is a sibling package in the **@wbc-ui** monorepo. Every package is published to npm and shares the same versioning line.

| Package | What it adds | Status |
|---|---|---|
| [`@wbc-ui/core2`](https://www.npmjs.com/package/@wbc-ui/core2) | "UI as Data" engine — the foundation | 🟢 GA |
| [`@wbc-ui/code2`](https://www.npmjs.com/package/@wbc-ui/code2) | JSON-driven code editor + live run | 🟢 GA |
| [`@wbc-ui/chart2`](https://www.npmjs.com/package/@wbc-ui/chart2) | ECharts integration | 🟢 GA |
| [`@wbc-ui/dataviewer2`](https://www.npmjs.com/package/@wbc-ui/dataviewer2) | JSON / data-table explorer | 🟢 GA |
| [`@wbc-ui/latex2`](https://www.npmjs.com/package/@wbc-ui/latex2) | LaTeX math rendering | 🟢 GA |
| [`@wbc-ui/mermaid2`](https://www.npmjs.com/package/@wbc-ui/mermaid2) | Diagram-as-code rendering | 🟢 GA |
| [`@wbc-ui/alert2`](https://www.npmjs.com/package/@wbc-ui/alert2) | Notification / toast system | 🟢 GA |
| **[`@wbc-ui/press2`](https://www.npmjs.com/package/@wbc-ui/press2)** | **Markdown-driven docs engine** *(this package)* | 🟢 GA |

---

## 📄 License

MIT © [Wissem Boughamoura](https://github.com/wissemb11) · [wi-bg.com](https://www.wi-bg.com) · [wbc-ui.com](https://wbc-ui.com)
