declare namespace NodeJS {
  export interface ProcessEnv {
    # Environment
    NODE_ENV: string;
    PORT: string;

    # Database
    DB_NAME: string;
    DB_HOST: string;
    DB_PORT: string;
    DB_USERNAME: string;
    DB_PASSWORD: string;
    DB_SSL_MODE: string;
  };
};
