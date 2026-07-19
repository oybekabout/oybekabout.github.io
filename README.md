# Oybek Abdullaev — Personal Website

A one-page site built for GitHub Pages.

## Files
- `index.html` — page structure and content
- `style.css` — all styling
- `script.js` — interactivity (nav highlighting, accordion, seal animations, lightbox)
- `images/` — photos (photo-1.jpg … photo-8.jpg)

## Publish on GitHub Pages
1. Create a new repo, e.g. `oybek-abdullaev.github.io` (or any name).
2. Upload all files in this folder to the repo root, keeping the `images/` folder intact.
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source: Deploy from a branch**, branch **main**, folder **/ (root)**. Save.
5. Wait a minute, then visit the URL GitHub gives you.

## Editing later
- Text content lives directly in `index.html` — search for the section you want (e.g. `id="docket"` for work experience).
- Colors and fonts are defined once at the top of `style.css` under `:root { ... }` — change a value there and it updates everywhere.
- To swap a photo, replace the file in `images/` and keep the same filename, or update the `src="images/..."` path in `index.html`.
