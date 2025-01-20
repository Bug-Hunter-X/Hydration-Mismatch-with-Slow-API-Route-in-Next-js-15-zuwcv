# Hydration Mismatch with Slow API Route in Next.js 15

This repository demonstrates a hydration mismatch error in a Next.js 15 application caused by a slow API route.  The client-side data fetching, which is performed using `fetch`, does not match the server-side rendering (SSR), resulting in a hydration error. This error occurs when the data used for client-side hydration differs from the data used during the initial server rendering.

## Setup

1. Clone this repository.
2. Navigate to the project directory: `cd nextjs-hydration-mismatch`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`

## Problem

The `pages/api/hello.js` route simulates a slow API response by introducing a 2-second delay.  The `pages/index.js` component uses `fetch` to retrieve data from the API route.  Because the client-side fetch completes after the server-side rendering, and the initial render does not include the actual data, a hydration mismatch occurs.

## Solution

The solution involves using a technique that avoids the hydration mismatch: using a placeholder or showing a loading state until the data is fetched. In the solution file, we are showing a loading state until the data arrives from the server side.