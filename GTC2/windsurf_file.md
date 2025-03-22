---

# .windsurfrules

## Project Overview
- **Type:** SaaS Analytics Platform
- **Description:** KPIx is an AI-powered tool inspired by Taylor Swift's persona, designed to help startup founders and growth leaders harness their data for accelerated growth. It aggregates multiple data sources and delivers personalized insights with a unique, era-themed user experience.
- **Primary Goal:** To create an AI-powered tool that helps startup founders and growth leaders understand and use their data to drive growth.

## Project Structure
### Framework-Specific Routing
- **Directory Rules:**
  - React Router 6: Uses a dedicated `src/routes/` directory with `createBrowserRouter` for route definitions.
  - Example 1: "React Router 6" → `src/routes/` with nested route folders and protected routes.

### Core Directories
- **Versioned Structure:**
  - `src/routes`: Houses React Router 6 route configurations and guarded entry points.
  - `src/components`: Contains reusable React components built using modern design patterns influenced by V0 by Vercel and Create XYZ.

### Key Files
- **Stack-Versioned Patterns:**
  - `src/App.js`: Main application entry integrating React Router 6 for route management.
  - `src/routes/index.js`: Defines primary routing logic using `createBrowserRouter` and nested routes.

## Tech Stack Rules
- **Version Enforcement:**
  - react@18: Enforce usage of functional components, hooks, and React Router 6 conventions.
  - node@18: Leverage modern asynchronous patterns and maintain secure API integrations.

## PRD Compliance
- **Non-Negotiable:**
  - "To create an AI-powered tool that helps startup founders and growth leaders understand and use their data to drive growth." : Must implement zero trust architecture, least privilege access, and encryption in transit (TLS 1.2+) and at rest (AES-256).

## App Flow Integration
- **Stack-Aligned Flow:**
  - Example: "React Router 6 KPIx Flow → `src/routes/dashboard.js` implements real-time data integration, role-based access, and personalized KPI updates."

---