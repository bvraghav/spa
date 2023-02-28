# GA UI

#### Vite3 + VueJS + Tailwind + FontAwesome + VueRouter + Pinia + VueMeta


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev -- --host=0.0.0.0
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Setup and customisations

### Routes, Layouts and Pages

[`@/router/routes.js`](./src/router/routes.js),
[`@/views/*{Page,Layout}.js`](./src/views)

`RouterView` is analogous to `slots` except that slots
are filled in by a parent (or callee), whereas
`RouterView` is filled in by the router, which manages
URL-route based navigation. By definition, routes are
tied to views; and in this case, the root-level paths are
tied to a layout; for example,

+ `/` is tied to `@/views/BaseLayout.vue`; similarly,
+ `/blog` may, by design, be tied to
  `@/views/BlogLayout.vue` and so forth.

In this case, `BaseLayout` has four (sub) views, namely
`header`, `sidebar`, `default` and `footer`, which are
further defined by sub-route. A sub-route is thus tied
to page(s), for example,

+ `/` > `''` is tied to `@views/BaseHeader.vue`,
  `@views/BaseSidebar.vue`, `@views/BaseFooter.vue` and
  `@views/HomePage.vue`.

### Fonts and typography

[Tailwind Config](./tailwind.config.js)  
[`@/assets/fonts.css`](./src/assets/fonts.css)

### Icons from FontAwesome ###

Import icons alongside `faBars` in
[`@/use/fa.js`](./src/use/fa.js) and add them into the `library.add`

#### SVG Icons ####

Refer [this MDN
page](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use)

````html
<svg>
  <use href="/path/to/my.svg#icon-id" fill="colour" stroke="colour" />
</svg>
````

### Page Meta Tags ###

Use `<metainfo>` inside the template to update; example
in [`@/views/HomePage.js`](./src/views/HomePage.js),
and to format the title, modify
[`@/App.vue`](./src/App.vue).

### Branding ###

For security reasons, the branding has been retracted
from this version. The design however, is to place the
logo in `public` folder, which is statically served.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) +
[Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
(and disable Vetur) + [TypeScript Vue Plugin
(Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

