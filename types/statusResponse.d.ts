 export interface StatusResponse {
    updated_at: string;
    depenencies: {
      database: {
        version: string;
        max_connections: number;
        opened_connections: number;
      };
    };
  }