import Navbar from 'components/Navbar';
import { useEffect, useState } from 'react';
import { Genre } from 'types/genre';
import { makePrivateRequest } from 'util/request';
import './styles.css';

const MovieCatalog = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [genreId, setGenreId] = useState(1);

  useEffect(() => {
    makePrivateRequest({ url: '/genres' }).then((response) =>
      setGenres(response.data)
    );
  }, []);

  return (
    <div className="justify-content-center">
        <Navbar visible={true} />
      <div className="select-genre-container">
        <form className="select-genre">
          <select
            className="select-genre-items"
            value={genreId}
            onChange={(e) => setGenreId(Number(e.target.value))}
            autoFocus={true}
          >
            {genres.map((genre) => (
              <option value={genre.id} key={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
        </form>
      </div>
    </div>
  );
};

export default MovieCatalog;
