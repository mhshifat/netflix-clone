/// <reference types="react-scripts" />

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_TMDB_KEY: string;
    }
  }
}

export {};
