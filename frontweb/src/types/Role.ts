export type RolesResponse = {
    content: Role[];
    totalPages: number;
  };

  export type Role = {
    id: number;
    authority: string;
  }; 