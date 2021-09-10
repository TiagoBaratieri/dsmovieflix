import Navbar from 'components/Navbar';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { makePrivateRequest } from 'util/request';
import { Movie } from 'types/Movie';
import MovieInfoLoader from '../loaders/MovieInfoLoader';
import { useHistory, useParams } from 'react-router-dom';
import MovieReviewLoader from '../loaders/MovieReviewLoader';
import ReviewCard from '../ReviewCard';
import MsgReview from '../MsgReview';
import { isAllowedByRole } from 'util/auth';
import MovieDetailLoader from '../loaders/MovieDetailLoader';
import './styles.css';

type ParamsType = {
  movieId: string;
};

type FormStates = {
  text: string;
  movieId: number;
};

const MovieDetail = () => {
  const { movieId } = useParams<ParamsType>();
  const [movies, setMovies] = useState<Movie>();
  const { register, handleSubmit } = useForm<FormStates>();
  const [isLoading, setIsloading] = useState(false);
  const [msgForm, setMsgForm] = useState('');
  const history = useHistory();

  useEffect(() => {
    setIsloading(true);
    makePrivateRequest({ url: `/movies/${movieId}` })
      .then((response) => setMovies(response.data))
      .finally(() => setIsloading(false));
  }, [movieId]);

  const onSubmit = (data: FormStates) => {
    makePrivateRequest({ url: '/reviews', method: 'POST', data })
      .then((response) => {
        setMsgForm('Obrigado por avaliar');
        history.go(0);
      })
      .catch(() => {
        setMsgForm('O comentário não pode ficar em branco.');
      });
  };

  const updateDisplaySaveReview = () => {
    history.replace(`/movie/${movieId}`);
  };

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

      {isAllowedByRole(['ROLE_MEMBER']) && (
        <>
          <div className="form-review-container">
            {isLoading ? (
              <MovieDetailLoader />
            ) : (
              <>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    {...register('text')}
                    type="text"
                    className="form-input-reviews"
                    placeholder="Insira aqui sua avaliação"
                  />
                  <input
                    {...register('movieId', { required: true })}
                    value={movieId}
                    type="hidden"
                  />

                  <div className="button-container">
                    <button
                      className="button-salve-reviews"
                      onClick={updateDisplaySaveReview}
                    >
                      SALVAR AVALIAÇÃO
                    </button>
                  </div>
                  <div className="d-flex justify-content-center mb-4">
                    <MsgReview msg={msgForm} />
                  </div>
                </form>

                <div className="d-flex justify-content-center"></div>
              </>
            )}
          </div>
        </>
      )}

      <div className="reviews-container">
        {isLoading ? (
          <MovieReviewLoader />
        ) : (
          <>
            <div>
              {movies?.reviews.map((review) => (
                <ReviewCard
                  key={review.id}
                  review={review.text}
                  userReview={review.user.name}
                />
              ))}

              <div className="space-end-page"></div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MovieDetail;
