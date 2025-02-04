import dotenv from 'dotenv';

// Set the NODE_ENV environment variable to 'development' if not already defined
process.env.NODE_ENV = process.env.NODE_ENV ?? 'development';

// Only load env variables from the .env file in production mode
if (process.env.NODE_ENV !== 'production') {
  // Override env variables that have already been set with the values from the .env file
  const envFound = dotenv.config({ override: true });
  if (envFound.error) {
    throw new Error("Couldn't find .env file");
  }
}

export default {
  NODE_ENV: process.env.NODE_ENV,
  PORT: Number(process.env.PORT ?? 8080),
  BASE_URL: '/api/v1',
  DOCS_ENDPOINT: '/api-docs',
  DIR_SWAGGER: './src/config/docs/swagger.yml',
  DIR_ERRORS: './src/config/errors/error.yml',
  OPENAI_API_KEY: process.env.OPENAI_API_KEY ?? '',
  GOOGLE_API_KEY: process.env.GOOGLE_API_KEY ?? '',
};
