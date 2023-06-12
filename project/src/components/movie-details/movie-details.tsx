import { Fragment } from 'react';
import MovieType from '../../types/movie-type';

type MovieDetailsProps = {
  movie: MovieType;
};

const getTimeString = (time: number): string => {
  const hours = (time - time % 60) / 60;
  const minutes = time % 60;
  return `${hours}h ${minutes}m`;
};

const MovieDetails = (props: MovieDetailsProps): JSX.Element => (
  <div className="film-card__text film-card__row">
    <div className="film-card__text-col">
      <p className="film-card__details-item">
        <strong className="film-card__details-name">Director</strong>
        <span className="film-card__details-value">{props.movie.director}</span>
      </p>
      <p className="film-card__details-item">
        <strong className="film-card__details-name">Starring</strong>
        <span className="film-card__details-value">
          {props.movie.starring.map((star) => <Fragment key={star}>{star}, <br /></Fragment>)}
        </span>
      </p>
    </div>

    <div className="film-card__text-col">
      <p className="film-card__details-item">
        <strong className="film-card__details-name">Run Time</strong>
        <span className="film-card__details-value">{getTimeString(props.movie.runTime)}</span>
      </p>
      <p className="film-card__details-item">
        <strong className="film-card__details-name">Genre</strong>
        <span className="film-card__details-value">{props.movie.genre}</span>
      </p>
      <p className="film-card__details-item">
        <strong className="film-card__details-name">Released</strong>
        <span className="film-card__details-value">{props.movie.released}</span>
      </p>
    </div>
  </div>
);

export default MovieDetails;
