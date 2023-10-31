# Trending Repositories

To meet the filtering by languages bonus requirement, I took each of the languages from the repositories response and put them into an array, removed the duplicates using a set, and then displayed them in the dropdown. This gives you the ability to filter the results by a language and it populates the dropdown, but it's done on the client.

Alternatively, you could look at passing a selected language into the request and you'd receive repositories only related to that language. But then you would have the challenge of how to populate the dropdown. I looked to see if GitHub provideded a languages API endpoint, but I could not find one that would give me a list of popular languages. It could be hard-coded though, as the benefit of this approach would be that you can server-side render the repository list.

This application is deployed and hosted by Vercel, it can be accessed here - https://trending-repos-jake-towers-projects.vercel.app/

## Tech

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://nextjs.org/docs/basic-features/eslint)
- [Prettier](https://prettier.io/)
- [husky](https://github.com/typicode/husky)
- [Playwright](https://playwright.dev/)
- [Jest](https://jestjs.io/)

## Running locally

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Prerequisites:

- node - v20.9.0
- npm - 10.1.0

First, install the node packages:

```
npm i
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Testing

### Unit Tests

```
npm run test
```

### E2E Tests

Install Playwright Browsers

```
npx playwright install
```

Run the application locally first, then run

```
npm run test:e2e
```

Note: due to GitHub API rate limiting the tests will fail if all they are all ran at once. For this reason, it's recommended you run then individually and wait a minute after each run, using the following commands:

```
npx playwright test favourites
npx playwright test header
npx playwright test languagesFilter
npx playwright test page
npx playwright test repositoryCard
```

## Deployment

This application is deployed to Vercel on pushes to main.

It can also be manually deployed using a GitHub Action workflow. You can provide the GitHub Commit SHA and deploy that version of the application.

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
