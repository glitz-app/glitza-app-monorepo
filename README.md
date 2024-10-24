# HyperJobs App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

HyperJobs App is a modern web application built with [Next.js](https://nextjs.org/), [Prisma](https://www.prisma.io/), and other powerful technologies. This README provides an overview of the project's structure, setup, and development workflow.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Setup](#setup)
- [Available Scripts](#available-scripts)
- [Technologies Used](#technologies-used)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Next.js**: A React framework for building fast and scalable web applications.
- **Prisma**: A next-generation ORM for working with your database.
- **TypeScript**: Type-safe development experience.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Clerk Authentication**: Secure and easy-to-integrate user authentication.
- **TRPC**: Type-safe APIs using TypeScript for seamless server-client communication.

## Project Structure

```
├── prisma/                 # Prisma schema and migrations
├── public/                 # Static assets like images and fonts
├── src/                    # Main source code
│   ├── components/         # Reusable components
│   ├── pages/              # Next.js pages
│   ├── styles/             # Global and component-level styles
│   ├── utils/              # Utility functions and helpers
│   ├── server/             # Backend and API logic (TRPC routers, etc.)
│   └── ...                 # Other folders as needed
├── .env                    # Environment variables
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

## Setup

### Prerequisites

- [Node.js](https://nodejs.org/) >= 18.0.0
- [npm](https://www.npmjs.com/) >= 10.5.0
- [PostgreSQL](https://www.postgresql.org/) or another supported database

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/hyperjobs-app.git
   cd hyperjobs-app
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Set up the database:

   Create a `.env` file in the root directory and add the following environment variables:

   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/hyperjobsdb"
   NEXT_PUBLIC_CLERK_FRONTEND_API="your-clerk-frontend-api"
   CLERK_API_KEY="your-clerk-api-key"
   ```

4. Run database migrations:

   ```bash
   npm run db:generate
   ```

### Development

Start the development server:

```bash
npm run dev
```

The application should now be running at [http://localhost:3000](http://localhost:3000).

## Available Scripts

- `npm run build`: Build the application for production.
- `npm run db:generate`: Create new migrations based on the Prisma schema.
- `npm run db:migrate`: Apply migrations to the database.
- `npm run db:push`: Push the Prisma schema changes to the database.
- `npm run db:studio`: Open Prisma Studio to visually explore your data.
- `npm run dev`: Start the development server.
- `npm run lint`: Lint the project using ESLint.
- `npm run start`: Start the production server.
- `npm run postinstall`: Run Prisma generate after dependencies are installed.

## Technologies Used

- **[Next.js](https://nextjs.org/)**: Framework for building server-rendered React applications.
- **[Prisma](https://www.prisma.io/)**: Modern ORM for database management and type-safe queries.
- **[TypeScript](https://www.typescriptlang.org/)**: JavaScript with type definitions.
- **[TRPC](https://trpc.io/)**: Type-safe APIs for Next.js.
- **[Clerk](https://clerk.dev/)**: User management and authentication service.
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework.
- **[React](https://reactjs.org/)**: JavaScript library for building user interfaces.

## Environment Variables

Create a `.env` file in the root directory and add these variables before running the project.

## Contributing

We welcome contributions from the community! If you have any suggestions or find any issues, feel free to open an issue or create a pull request.

### Steps to Contribute

1. Fork the repository.
2. Create a new feature branch.
3. Implement your changes and add tests if necessary.
4. Commit your changes and push the branch.
5. Open a pull request with a detailed description.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
