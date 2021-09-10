export type ReviewsResponse = {
  content: Review[];
  totalPages: number;
};

export type Review = {
  id: number;
  text: string;
  userId: number;
  movieId: number;
  user: User;
};

export type User = {
  id: number;
  name: string;
  email: string;
  roles: Roles[];
};

export type Roles = {
  id: number;
  authority: string;
};
