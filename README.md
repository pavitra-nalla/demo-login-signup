# Pastel Bloom Auth

A beautiful, calming authentication UI built with React, Vite, and TanStack Router.

## Features

- Clean, pastel-themed login and signup forms
- Form validation with React Hook Form
- Responsive design with Tailwind CSS
- Toast notifications with Sonner
- TypeScript support

## Development

```bash
npm install
npm run dev
```

## Environment Variables

Create a `.env` file in the root directory:

```env
# API Configuration
VITE_API_URL=https://your-backend-url.com
```

When the backend is not deployed yet, the app will show graceful error messages instead of crashing.

## Deployment

### Frontend-Only Deployment (Vercel)

This project is configured for frontend-only deployment. The backend API calls are handled gracefully when the backend is unavailable.

1. **Update Environment Variables**: Set `VITE_API_URL` to your backend URL in Vercel dashboard
2. **Deploy**: Push to your repository connected to Vercel
3. **Configuration**: The `vercel.json` is already configured for SPA routing

### Full-Stack Deployment

When your backend is ready:

1. Deploy the backend API
2. Update `VITE_API_URL` with the actual backend URL
3. The authentication forms will automatically start making real API calls

## Build

```bash
npm run build
```

The built files will be in `dist/client/` for frontend deployment.
