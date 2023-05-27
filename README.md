[![Netlify Status](https://api.netlify.com/api/v1/badges/9e2729bc-9427-49e5-b8bf-850c3aed3221/deploy-status)](https://app.netlify.com/sites/tinusplate/deploys)

# Lanxiang Vermeulen

This is the source code for the Tinusplate, a boilerplate [Next.js](https://nextjs.org/) project. Tinusplate uses the same tech stack as the one employed for every commercial website developed by [Sjors van Holst](https://sjorsvanholst.nl/). The project was bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Tinusplate can be used as a starting point for similar projects that require a reliable, modern, and well-structured tech stack.

## Setup and development

This project uses PNPM for package management. To get started, first install PNPM globally:

```bash
npm install -g pnpm
```

Then install the dependencies:

```bash
pnpm install
```

To run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying app/page.tsx. The page auto-updates as you edit the file.

Tinusplate uses [Decap CMS](https://decapcms.org/) for content management, [next/font](https://nextjs.org/docs/app/api-reference/components/font) to automatically optimize and load Google Fonts, and integrates TypeScript, ESLint and Prettier for code quality and consistency.

## Code Quality

This project is set up with [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/). To run the linter, use:

```bash
pnpm run lint
```

To format your code, use:

```bash
pnpm run format
```

Every push to the main branch will be automatically checked by GitHub Actions for linting and formatting issues.

## Deployment

The Tinusplate project can be hosted on any platform that supports Next.js, such as [Vercel](https://vercel.com/). Every push to the main branch can be configured to trigger an automatic deployment.

## Packages

Tinusplate comes with a number of preconfigured packages:

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [React DOM](https://reactjs.org/docs/react-dom.html)
- [Node.js types](https://www.npmjs.com/package/@types/node)
- [React types](https://www.npmjs.com/package/@types/react)
- [React DOM types](https://www.npmjs.com/package/@types/react-dom)
- [ESLint](https://eslint.org/)
- [ESLint Config Next](https://www.npmjs.com/package/eslint-config-next)
- [ESLint Config Prettier](https://www.npmjs.com/package/eslint-config-prettier)
- [Prettier](https://prettier.io/)
- [Sass](https://sass-lang.com/)
- [TypeScript](https://www.typescriptlang.org/)
