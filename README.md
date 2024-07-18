This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Make sure you already have Node.js and npm installed in your system.

## Install

Clone the repository:
git clone `https://github.com/anaspits/weather-react-app.git`

Install the packages using the command `npm install`

## Run the application in development mode

To run the development server use one of the following commands:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing by modifying the files. The page auto-updates as you edit the file.

## Try out

If you want to see how the *background* changes depending on the weather you can go to `\src\pages\index.tsx` and change the `currentWeatherCondition` from `Cloudy` to `Stormy`, `Sunny` or `Rainy` at the `weatherInfo` const.

To check the *mobile* layout go to your broswer's DevTools click the device toolbar (in the action bar at the top left) and choose a mobile device from the list or insert you custom dimensions and **refresh the page** in orde to view the app at the corresponding device dimensions.

<!-- [API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages. -->


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
