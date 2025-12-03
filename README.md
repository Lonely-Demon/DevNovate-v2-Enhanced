# DevNovate V2 - Frontend

A modern React-based hackathon discovery and registration platform.

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Type Check

```bash
npm run check
```

## Project Structure

```
client/src/
├── components/       # Reusable React components
├── pages/           # Page components (LandingPage, Home, About, Community)
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── data/            # Mock/static data
├── App.tsx          # Main app component
└── main.tsx         # Entry point

shared/
└── schema.ts        # Shared types and schemas
```

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS
- **Radix UI** - Headless component library
- **Wouter** - Lightweight router
- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **Framer Motion** - Animations
- **Recharts** - Data visualization

## Features

- Browse hackathons
- View featured challenges
- User profile management
- Registration tracking
- Statistics dashboard
- Responsive design

## License

MIT
