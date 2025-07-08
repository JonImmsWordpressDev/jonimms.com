# jonimms.com

Welcome to the repository for [jonimms.com](https://jonimms.com) — the personal website and portfolio of Jon Imms, a seasoned WordPress developer specializing in custom Gutenberg blocks and modern front-end development.

---

## 🔧 Tech Stack

- **WordPress**: CMS
- **Theme**: Frost (as a child theme)
- **Custom Plugin**: `jonimms-blocks` – a growing collection of custom Gutenberg blocks
- **Build Tools**: Webpack, SCSS, Babel
- **Hosting**: Local development via Local by Flywheel, production on Kinsta

---

## 🧱 Custom Blocks

The `jonimms-blocks` plugin includes purpose-built Gutenberg blocks such as:

- ✅ `website-copyright` – dynamic year copyright
- ✅ `social-logos` – display social icons with links
- 🚧 `daily-tech-quote` – random tech quote of the day *(coming soon)*
- 💡 More blocks coming soon…

Each block is modular and uses its own directory structure with `block.json`, `edit.js`, `save.js`, and SCSS styling.

---

## 🚀 Development

### Requirements

- Node.js (v18+ recommended)
- Local WordPress install (e.g., Local by Flywheel)

### Setup

```bash
cd wp-content/plugins/jonimms-blocks
npm install
npm run build
```
For live development:
```bash
npm run start
```
### Development Workflow
Build Assets
All block assets are compiled using Webpack.

Styles are written in SCSS, output to build/.

## 🛠️ Deployment Notes
Git is set up to only track frost-child and jonimms-blocks within wp-content

Uploads and other themes/plugins are ignored via .gitignore

Use GitHub → Kinsta or manual deployment via SFTP/Git push

## 🙋‍♂️ About Me
I'm Jon Imms — a UK-born, Omaha-based web developer with 15+ years of experience in WordPress, currently focused on building performant, flexible Gutenberg blocks for content creators and businesses.

Check out jonimms.com for more.

## 📬 Contact
Need a custom WordPress block or site?
👉 
Get in touch or email me at jon@jonimms.com.
