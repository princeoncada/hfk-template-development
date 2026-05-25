# HFK Short O Tailwind Trace Template

This is the TailwindCSS conversion of the tracing worksheet HTML.

## Run

```bash
npm install
npm run dev
```

Open the local Vite URL.

## What changed

- The huge inline `<style>` block was moved into `src/input.css`.
- Most layout styling is now Tailwind `@apply` utilities.
- The HTML remains section-commented so you can find each worksheet zone quickly.
- The exact pixel positions are still exposed in Tailwind arbitrary values like `left-[37px]`, `top-[183px]`, `w-[370px]`, and `h-[242px]`.
- SVG drawing helper classes remain semantic: `.draw`, `.thin`, `.solid`, `.white`, `.trace-path`.
- Dev tracing tools remain available.

## Shortcuts

- `R` toggles the reference image.
- `G` toggles the grid.
- `Z` toggles the zone boxes.
- `F` toggles final mode.

## Manual tracing tip

Adjust one section at a time in `src/input.css`. Once a section matches the reference, add a comment like:

```css
/* LOCKED: Activity 1 */
```

Then avoid touching that block again.
