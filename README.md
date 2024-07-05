# OpenAI Test API

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

This is a test API for interacting with the OpenAI API.

## Features

Some of the features of this project include:

- Express.js: A popular web framework for Node.js.
- TypeScript: A typed superset of JavaScript that provides static typing and other features for building scalable applications.
- Nodemon: A development tool that automatically restarts the server on file changes, improving the development workflow.
- Husky: A Git hook tool that helps automate tasks before commits, such as running scripts or linting.
- ESLint: A linter that helps catch and fix coding errors and maintain code quality.
- Jest: A popular testing framework for Node.js applications.
- lint-staged: A tool that runs scripts on staged files in Git, used here for running ESLint and Prettier on staged files before commits.
- Prettier: An opinionated code formatter that helps maintain consistent code style across the project.
- Swagger: A tool for designing, building, and documenting RESTful APIs.

## Prerequisites

This project requires Node.js 20 and NPM 10 or higher to be installed on your machine.

## Getting Started

To start a new project using this template, follow these steps:

1. Clone the repository: `git clone [URL]`
2. Navigate to the project directory: `cd [folder name]`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and go to `http://localhost:8080/api-docs` to access the Swagger UI that contains the API documentation.

## Scripts

- `npm run start`: Starts the development server with Nodemon.
- `npm run server:prod`: Builds the TypeScript code and runs the compiled code in a production environment.
- `npm run server:prod:docker`: Runs the server in a production environment inside Docker without building.
- `npm run prepare`: Sets up Husky for Git hooks.
- `npm run build`: Builds the TypeScript code and aliases using `tsc-alias`.
- `npm run test`: Runs tests using Jest.
- `npm run test:coverage`: Runs tests using Jest and generates code coverage reports.
- `npm run lint`: Runs ESLint on the source code.
- `npm run lint:fix`: Runs ESLint and fixes linting issues automatically.
- `npm run pre-commit`: Runs lint-staged before commits, which lints and fixes staged files.
- `npm run debug`: Starts the server in debug mode with Nodemon.
- `npm run prettier:code-check`: Checks the code format with Prettier.
- `npm run prettier:fix`: Fixes code format issues with Prettier.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

## Author

This project was created by Gerardo Gimenez.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please open an issue or a pull request on the GitHub repository.

## Issues

If you encounter any issues or have questions, please open an issue on the GitHub repository.

## Acknowledgements

This project is built on top of popular technologies and tools in the Node.js and JavaScript ecosystem, and we would like to express our gratitude to the respective creators and contributors of these projects.

Happy coding! :rocket:
