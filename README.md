# wraestlung-ccg

Card definitions and PDF generator for the Wraestlung CCG. Cards are defined in [`cards.js`](./cards.js) and rendered to a PDF via [`ccg-card-generator`](https://www.npmjs.com/package/ccg-card-generator) using styles from [`styles/artifice.css`](./styles/artifice.css).

## Usage

```sh
npm install
npm run build      # writes ./cards.pdf
```

`npm run watch` is currently aliased to `build` (no live reload).

Work in progress, contributions welcome.
