# Zewde Bekele Biru: Portfolio (React + Vite)

## Run it
1. Extract `Zewde_Bekele_Biru_Portfolio.zip`.
2. Open the `zewde-portfolio` folder in VS Code (File > Open Folder).
3. In the VS Code terminal (needs Node.js 18+):
```
npm install
npm run dev      # development server (http://localhost:5173)
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Customize
- **Everything personal** (bio, contact, skills, projects, education): `src/data/portfolioData.js`.
- **Profile photo:** save your photo as `public/images/zewde-profile.jpg` (portrait, ~800x1000 px, under 300 KB). Until then a "ZB" placeholder shows.
- **Add a project:** add an object to `projects` (title, category, description, tech, github, demo, image). Put screenshots in `public/images/projects/` and use `image: '/images/projects/name.jpg'`. Links set to `'#'` stay disabled.
- **Add a skill:** add `{ name, icon }` to a group in `skills`. Icon names must be registered in `src/components/SkillCard.jsx`.
- **GitHub link:** set `profile.github`.
- **Colors:** CSS variables at the top of `src/styles/global.css`.

## Contact form
No backend is configured. After validation the form opens the visitor's email app with the message pre-filled. To receive messages directly, connect a service such as Formspree or EmailJS in `Contact` (`src/sections/Sections.jsx`).

## Deploy
Run `npm run build`, then upload `dist/` to Netlify, Vercel, or Cloudflare Pages (build command `npm run build`, output `dist`), or push to GitHub and import the repo.
