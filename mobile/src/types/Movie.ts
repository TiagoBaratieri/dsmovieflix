export type MoviesResponse = {
    content: Movie[];
    totalPages: number;
}

export type Movie = {
    id: number;
    title: string;
    subtitle: string;
    year: number;
    imgUrl: string;
    synopsis: string;
    genre: Genre;
    reviews?: Review[];
}

export type Genre = {
    id: number;
    name: string;
}

export type Review = {
    id: number;
    text: string;
    user: User;
    movie: Movie;
}

export type User = {
    id: number;
    name: string;
}