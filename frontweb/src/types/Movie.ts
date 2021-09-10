export type MoviesResponse = {
  content: Movie[];
  totalPages: number;
};

export type GenreResponse = {
  genre: Genre[];
};

export type Movie = {
  id?: number;
  title: string;
  subTitle: string;
  year: number;
  imgUrl: string;
  synopsis: string;
  genreId: number | string;
  reviews: Review[];
  user: User[];
  userRole: Role[];
};

export type Review = {
  id: number;
  text: string;
  ovieId: number;
  user: User;
};

export type User = {
  id: number;
  name: string;
  email: string;
  roles: Role[];
};

export type Role = {
  id: number;
  authority: string;
};

export type Genre = {
  id: number;
  name: string;
};
