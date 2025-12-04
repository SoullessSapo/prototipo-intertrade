# InterTrade One - Prototype

## Overview
InterTrade One is a high-fidelity visual prototype for a modern cross-border trade platform. It is designed with a premium "Dark Neon" corporate aesthetic, drawing inspiration from industry leaders like SAP, Maersk, and Stripe. The application simulates a comprehensive portal for managing logistics, compliance, finance, and supply chains.

## Key Features

*   **Modern UI/UX**:
    *   **Dark Neon Theme**: A sophisticated dark mode with neon blue and purple accents, glassmorphism effects, and animated backgrounds.
    *   **Responsive Layout**: Sidebar navigation, sticky headers, and adaptive content areas.
    *   **Interactive Components**: Hover effects, animated cards, and smooth transitions.

*   **Core Modules**:
    *   **Dashboard**: Real-time KPI monitoring with interactive charts (Recharts) and status widgets.
    *   **Shipment Tracking**: Integrated Google Maps view for real-time cargo tracking with route visualization.
    *   **Document Manager**: Blockchain-verified document handling with status indicators (Approved, Review, Rejected).
    *   **Compliance Engine**: AI-driven regulatory compliance search and risk assessment.
    *   **Financial Integration**: Liquidity monitoring, Letter of Credit management, and financial health visualization.
    *   **Sustainability (ESG)**: Carbon footprint tracking, emission breakdowns, and eco-route optimization.
    *   **Supplier Management**: Detailed supplier profiles with certification tracking and performance metrics.
    *   **Settings**: User profile management and application preferences (Dark Mode, Compact View).

## Tech Stack

*   **Framework**: React 19
*   **Build Tool**: Vite
*   **Styling**: Tailwind CSS v3 (with custom configuration for neon theme)
*   **Icons**: Lucide React
*   **Charts**: Recharts
*   **Maps**: Google Maps JavaScript API

## Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/SoullessSapo/prototipo-intertrade.git
    cd intertrade-one
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Configure Google Maps**:
    *   Open `index.html`.
    *   Replace `YOUR_API_KEY_HERE` with your valid Google Maps API Key.

4.  **Run the development server**:
    ```bash
    npm run dev
    ```

5.  **Build for production**:
    ```bash
    npm run build
    ```

## Project Structure

*   `src/components`: Reusable UI components (Layout, Header, Sidebar, Cards).
*   `src/pages`: Individual screen implementations (Login, Dashboard, Tracking, etc.).
*   `src/index.css`: Global styles and Tailwind directives.
*   `tailwind.config.js`: Custom theme configuration (colors, fonts, animations).

---
*Prototype developed for Universidad project.*
