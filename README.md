# Hybrbase Challenge

This project is a Next.js application that uses Chakra UI for styling and integrates Contentful as the CMS for managing content. The application demonstrates the use of pagination, filtering, and server-side rendering for dynamic product display.

---

## Features

- **Dynamic Product Display**: Displays products fetched from Contentful, categorized and paginated for better user experience.
- **Pagination**: Implements efficient pagination using Chakra UI.
- **Filtering**: Filters products by category.
- **Contentful Integration**: Manages content dynamically via Contentful CMS.
- **Server-Side Rendering (SSR)**: Uses `getServerSideProps` for pre-rendering pages with fresh data on each request.
- **Chakra UI**: Provides responsive and accessible UI components.

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 15.1.5
- **Styling**: [Chakra UI](https://chakra-ui.com/)
- **CMS**: [Contentful](https://www.contentful.com/)
- **Language**: TypeScript

---

## Installation

### Prerequisites

- Node.js (>= 14.x)
- npm

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/uyennmd/hybrbase-challenge.git
   cd hybrbase-challenge
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables: Create a `.env.local` file in the root directory and add the following:

   ```env
   CONTENTFUL_SPACE_ID=4rj22o8020xl
   CONTENTFUL_ACCESS_TOKEN=gJ6VYwJukW_XS7hUARXTimIB6T-pXDh3GlTcamtqfRI
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

5. To build for production:

   ```bash
   npm run build
   ```

---

## Deployment

This application is deployed using Vercel. To deploy:

1. Push your code to GitHub.
2. Link your GitHub repository to Vercel.
3. Add the environment variables (`CONTENTFUL_SPACE_ID` and `CONTENTFUL_ACCESS_TOKEN`) in the Vercel dashboard under **Settings > Environment Variables**.
4. Deploy the application.

---

## File Structure

```
.
├── components          # Reusable UI components
├── lib                 # Contentful client and utility functions
├── pages               # Next.js pages
├── public              # Static assets
├── styles              # Global styles
├── .env.local          # Environment variables
├── next.config.ts      # Next.js configuration
└── tsconfig.json       # TypeScript configuration
```

---

### Common Errors

- **Missing Environment Variables**: If you encounter `TypeError: Expected parameter accessToken`, ensure your `.env.local` file is correctly configured and contains valid values for `CONTENTFUL_SPACE_ID` and `CONTENTFUL_ACCESS_TOKEN`.

- **Tailwind CSS Warning**: Ensure your `tailwind.config.js` file includes the correct `content` paths.

### Debugging Steps

1. Check environment variables using `console.log` in `next.config.ts`.
2. Verify Contentful API keys in your Contentful account.
3. Restart the development server after updating environment variables.

---

## Author

Nguyen Minh Duy Uyen