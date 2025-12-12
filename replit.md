# Owais Usman Travel Agency

## Overview
A travel agency website built with React, Vite, and Tailwind CSS. The application allows users to explore travel destinations by country and region, view destination details, and book tours.

## Tech Stack
- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite (port 5000)
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: React Router DOM
- **State Management**: TanStack React Query

## Project Structure
```
src/
├── components/           # Reusable UI components
│   ├── ui/               # shadcn/ui base components
│   ├── Header.tsx        # Site header with navigation
│   ├── Footer.tsx        # Site footer
│   └── DestinationCard.tsx # Destination display card
├── data/
│   └── mockData.ts       # Mock destination and tour data
├── hooks/                # Custom React hooks
├── lib/
│   └── utils.ts          # Utility functions
├── pages/
│   ├── Index.tsx         # Homepage with hero and featured destinations
│   ├── Tours.tsx         # All countries/tours with region filtering
│   ├── DestinationDetail.tsx # Individual destination details
│   ├── Booking.tsx       # Booking page
│   ├── About.tsx         # About page
│   └── NotFound.tsx      # 404 page
├── index.css             # Global styles and Tailwind config
└── App.tsx               # Main app with routing
```

## Navigation
- **Header**: Tour | USD | Help | About
- **Tour**: Shows all countries with region filtering (Asia, Europe, Americas, Africa, Oceania, Middle East)
- **Help**: Opens dialog with contact info, working hours, and FAQs
- **About**: About page

## Development
- Run `npm run dev` to start the development server on port 5000
- Run `npm run build` to build for production

## Deployment
Configured for static deployment with the `dist` directory as the public folder.

## Recent Changes
- Simplified header navigation to: Tour | USD | Help | About
- Added Help dialog with contact info and FAQs
- Created Tours page showing all countries by region
- Removed search section from homepage
- Enhanced promotional banner section
