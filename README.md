# Dice Game with Redux Toolkit 🎲

This is a simple web application built using Next.js, Tailwind CSS, and Redux Toolkit. The purpose of this project is to test and showcase the usage of Redux Toolkit, a powerful toolset for managing state in Redux applications. The game consists of rolling a dice and advancing through a board with different rules based on the dice result.

## How to Play

1. Click on the "Roll Dice" button to roll the dice.
2. Depending on the dice result, you will advance on the board following these rules:
   - If you roll a number between 1 and 2, you will advance 1 position.
   - If you roll a number between 3 and 4, you will advance 3 positions.
   - If you roll a number greater than 4, you will advance 5 positions.

## Project Setup

Before running the project, make sure you have Node.js and npm installed on your system. Then, follow these steps:

1. Clone the repository and navigate to the project folder.

2. Install the dependencies by running the following command:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

The application will be accessible at `http://localhost:3000`.

## Project Structure

- `pages/index.js`: The main component that displays the game board and handles dice rolling logic.
- `store/`: Contains the Redux store configuration and actions using Redux Toolkit.
- `tailwind.config.js`: The Tailwind CSS configuration file.
- `postcss.config.js`: The PostCSS configuration file.
- `.eslintrc.js`: ESLint configuration file.

## Dependencies

- Next.js: A React framework for building server-side rendered applications.
- Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.
- Redux Toolkit: A collection of utility functions for simplified Redux setup.
- react-redux: The official React bindings for Redux.

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the production version of the application.
- `npm start`: Starts the production server.
- `npm run lint`: Lints the project files using ESLint.

## Note

When a player reaches position 100 on the board, an alert will be shown indicating that they have reached the end of the board. 🎲

