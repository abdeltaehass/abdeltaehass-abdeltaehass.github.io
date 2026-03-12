# abdeltaehass.github.io

Personal portfolio website — built with React + Vite.

## Stack

- React 19 + Vite
- CSS Modules
- Deployed via GitHub Pages

## Development

```bash
npm install
npm run dev
```

## Deployment

The site deploys automatically to GitHub Pages on every push to `main` via the included GitHub Actions workflow.

To enable GitHub Pages in your repo:
1. Go to **Settings → Pages**
2. Under **Source**, select **GitHub Actions**

## Project structure

```
src/
  components/
    Navbar.jsx / .module.css
    Hero.jsx   / .module.css
    Projects.jsx / .module.css
    About.jsx  / .module.css
    Contact.jsx / .module.css
  App.jsx
  index.css
public/
  resume.pdf
```
