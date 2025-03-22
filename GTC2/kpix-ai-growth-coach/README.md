# KPIx AI Growth Coach

KPIx is a Taylor Swift-inspired AI Growth Coach designed to transform the way startup founders and growth leaders see and use their data. It takes multiple data sources—including Stripe, Shopify, Google Analytics, LinkedIn, social media, and more—and converts raw numbers into engaging, narrative-driven insights.

## Features

- Unified Growth Dashboard
- Role-based Access Control
- Natural Language Processing for KPI Insights
- Automated Video Reports
- Competitor Intelligence
- Real-time Notifications

## Tech Stack

### Frontend
- React with TypeScript
- Material-UI
- React Router
- Axios for API calls

### Backend
- Node.js with Express
- TypeScript
- PostgreSQL
- JWT Authentication

## Prerequisites

- Node.js (v18 or higher)
- PostgreSQL
- npm or yarn

## Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/kpix-ai-growth-coach.git
cd kpix-ai-growth-coach
```

2. Install dependencies:
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Set up environment variables:
```bash
# Backend (.env)
cp backend/.env.example backend/.env
# Edit backend/.env with your configuration

# Frontend (.env)
cp frontend/.env.example frontend/.env
# Edit frontend/.env with your configuration
```

4. Set up the database:
```bash
# Create PostgreSQL database
createdb kpix_db

# Run migrations (when available)
cd backend
npm run migrate
```

## Running the Application

1. Start the backend server:
```bash
cd backend
npm run dev
```

2. Start the frontend development server:
```bash
cd frontend
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001

## Development

### Backend Structure
```
backend/
├── src/
│   ├── config/         # Configuration files
│   ├── controllers/    # Route controllers
│   ├── middleware/     # Custom middleware
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   ├── services/       # Business logic
│   └── server.ts       # Main server file
├── .env               # Environment variables
├── package.json       # Dependencies and scripts
└── tsconfig.json      # TypeScript configuration
```

### Frontend Structure
```
frontend/
├── src/
│   ├── components/    # Reusable components
│   ├── pages/         # Page components
│   ├── services/      # API services
│   ├── utils/         # Utility functions
│   ├── App.tsx        # Main App component
│   └── index.tsx      # Entry point
├── public/           # Static files
└── package.json      # Dependencies and scripts
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 