# Owais Usman Travel Agency

## Overview
A travel agency website built with React, Vite, and Tailwind CSS. The application allows users to explore travel destinations, search for trips, and book vacations.

## Tech Stack
- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: React Router DOM
- **State Management**: TanStack React Query
- **Forms**: React Hook Form with Zod validation

## Project Structure
```
src/
├── components/     # Reusable UI components
│   ├── ui/         # shadcn/ui components
│   └── *.tsx       # Custom components (Header, Footer, etc.)
├── data/           # Mock data
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
├── pages/          # Page components
└── main.tsx        # Application entry point
```

## Development
- Run `npm run dev` to start the development server on port 5000
- Run `npm run build` to build for production
- Run `npm run preview` to preview the production build

## Deployment
Configured for static deployment with the `dist` directory as the public folder.
