import Navbar from 'components/Navbar';
import { useEffect, useState } from 'react';
import { makePrivateRequest } from 'util/request';
import { Movie } from 'types/Movie';
import MovieInfoLoader from '../loaders/MovieInfoLoader';
import { useParams } from 'react-router-dom';
import './styles.css';

type ParamsType = {
  movieId: string;
};

const MovieDetail = () => {
  const { movieId } = useParams<ParamsType>();
  const [movies, setMovies] = useState<Movie>();
  const [isLoading, setIsloading] = useState(false);


  useEffect(() => {
    setIsloading(true);
    makePrivateRequest({ url:`/movies/${movieId}` })
      .then((response) => setMovies(response.data))
      .finally(() => setIsloading(false));
  }, [movieId]);

  return (
    <div className=" movie-justify-content">
      <Navbar visible={true} />

      <div className="row movie-container">
        {isLoading ? (
          <MovieInfoLoader />
        ) : (
          <>
            <div className="col-6 ">
              <div className="movie-photo-container">
                <img
                  src={movies?.imgUrl}
                  alt={movies?.title}
                  className="movie-photo-details"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="movie-description">
                <h1 className="movie=description-title">{movies?.title}</h1>
                <h3 className="movie-description-year">{movies?.year}</h3>
                <p className="movie-description-subTitle">
                  {movies?.subTitle}{' '}
                </p>
                <textarea
                  className="movie-description-synopsis"
                  value={movies?.synopsis}
                ></textarea>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MovieDetail;
