import { Link } from 'react-router-dom';
import MovieType from '../../types/movie-type';

type MovieCardType = {
  movie: MovieType;
  setActiveMovieCard: (id: number) => void;
};

const MovieCard = (props: MovieCardType): JSX.Element => (
  <article
    className="small-film-card catalog__films-card"
    onMouseEnter={() => props.setActiveMovieCard(props.movie.id)}
    onMouseLeave={() => props.setActiveMovieCard(NaN)}
  >
    <div className="small-film-card__image">
      <img src={props.movie.posterImage} alt={props.movie.name} width="280" height="175" />
    </div>
    <h3 className="small-film-card__title">
      <Link className="small-film-card__link" to={`movies/${props.movie.id}`}>{props.movie.name}</Link>
    </h3>
  </article>
);

export default MovieCard;
