import { Link } from 'react-router-dom';
import MovieType from '../../types/movie-type';
import { useEffect, useState } from 'react';
import Player from '../player/player';

type MovieCardType = {
  movie: MovieType;
  setActiveMovieCard: (id: number) => void;
  isActive: boolean;
};

const MovieCard = (props: MovieCardType): JSX.Element => {
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    if (props.isActive) {
      const timer = setTimeout(() => setIsPlaying(true), 1000);
      return () => {
        clearTimeout(timer);
        setIsPlaying(false);
      };
    }
  }, [props.isActive]);

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => props.setActiveMovieCard(props.movie.id)}
      onMouseLeave={() => props.setActiveMovieCard(NaN)}
    >
      <div className="small-film-card__image">
        {
          isPlaying
            ? <Player src={props.movie.previewVideoLink} posterImage={props.movie.posterImage} muted />
            : <img src={props.movie.posterImage} alt={props.movie.name} width="280" height="175" />
        }
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`movies/${props.movie.id}`}>{props.movie.name}</Link>
      </h3>
    </article>
  );
};

export default MovieCard;
