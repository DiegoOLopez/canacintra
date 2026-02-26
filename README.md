# Canacintra

A comprehensive crowdlending and investment platform designed to bridge the gap between entrepreneurs seeking accessible financing and investors looking for productive projects. The system digitizes and automates the entire credit lifecycle, from initial funding requests to capital returns.

## Main Features

- **Role-Based Access Control:**
  - **Investors:** Browse curated investment opportunities, allocate capital, and manage investment portfolios.
  - **Entrepreneurs (Businesses):** Submit financing requests, upload required documentation, and track proposal statuses.
  - **Administrators:** Validate business proposals, manage users, and oversee the platform's capital flow.
- **Credit Lifecycle Management:** Complete end-to-end workflow for creating, reviewing, and approving loan applications.
- **Financial Tracking:** Detailed tracking of requested amounts, active investments, amortization schedules, and payment histories.
- **Specialized Dashboards:** Dedicated KPI-driven interfaces tailored for Administrators, Investors, and Entrepreneurs.

## Tech Stack

**Frontend:**
- Angular 18 (TypeScript)
- Server-Side Rendering (SSR) via Express

**Backend:**
- Node.js & Express.js
- PostgreSQL (Relational Database)
- Sequelize ORM
- Passport.js & JWT (Authentication)
- Docker & Docker Compose (Infrastructure)

## Installation and Usage

### Prerequisites
- [Node.js](https://nodejs.org/) (LTS recommended)
- [Docker](https://www.docker.com/) and Docker Compose
- [Angular CLI](https://angular.io/cli)

### Backend Setup

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Environment Variables:**
   Create a `.env` file in the `backend/` directory with the following structure:
   ```env
   PORT=3000
   NODE_ENV=dev
   DB_USER=canacintra_admin
   DB_PASSWORD=12345678
   DB_HOST=localhost
   DB_NAME=canacintra
   DB_PORT=5432
   API_KEY=your_api_key
   JWT_SECRET=your_jwt_secret
   ```

3. **Start the Database:**
   ```bash
   docker-compose up -d
   ```

4. **Install Dependencies and Run Migrations:**
   ```bash
   npm install
   npm run migrations:run
   ```

5. **Start the Development Server:**
   ```bash
   npm run dev
   ```

### Frontend Setup

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install Dependencies and Start:**
   ```bash
   npm install
   npm run start
   ```

3. Open your browser and navigate to `http://localhost:4200`.

## Screenshots

![Investor Dashboard](https://via.placeholder.com/800x450.png?text=Investor+Dashboard)
*Investor Dashboard Overview*

![Entrepreneur Application](https://via.placeholder.com/800x450.png?text=Entrepreneur+Application+Form)
*Entrepreneur Loan Application Form*

![Admin Control Panel](https://via.placeholder.com/800x450.png?text=Admin+Control+Panel)
*Administrator Control Panel*

## License

This project is licensed under the [ISC License](LICENSE).
