export type Roles = {
    id: number;
    authority: string;
  };
  
  export type User = {
    id: number;
    name: string;
    email: string;
    roles: Roles[];
  };
  