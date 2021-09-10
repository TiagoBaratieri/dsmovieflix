import './styles.css';

type Props = {
  title: string;
  subTitle: string;
  year: number;
  imgUrl: string;
};

const MovieCard = ({ title, subTitle, year, imgUrl }: Props) => {
  return (
    <div className="movie-card-box">
      <img src={imgUrl} alt="img" className="movie-photo"></img>
      <h2 className="movie-card-title">{title}</h2>
      <h3 className="movie-card-year">{year}</h3>
      <p className="movie-card-subTitle">{subTitle}</p>
    </div>
  );
};

export default MovieCard;
