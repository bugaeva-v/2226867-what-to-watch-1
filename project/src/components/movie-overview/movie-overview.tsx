import MovieType from '../../types/movie-type';

type MovieOverviewProps = {
  movie: MovieType;
};

const getRatingLevel = (rating: number) => {
  const x = rating;
  switch (true) {
    case (x < 3): return 'Bad';
    case (x < 5): return 'Normal';
    case (x < 8): return 'Good';
    case (x < 10): return 'Very good';
    case (x === 10): return 'Awesome';
  }
};

const MovieOverview = (props: MovieOverviewProps): JSX.Element => (
  <>
    <div className="film-rating">
      <div className="film-rating__score">{props.movie.rating}</div>
      <p className="film-rating__meta">
        <span className="film-rating__level">{getRatingLevel(props.movie.rating)}</span>
        <span className="film-rating__count">{props.movie.scoresCount}</span>
      </p>
    </div>

    <div className="film-card__text">
      <p>{props.movie.description}</p>

      <p className="film-card__director"><strong>{`Director: ${props.movie.director}`}</strong></p>

      <p className="film-card__starring"><strong>{`Starring: ${props.movie.starring.join(', ')} and other`}</strong></p>
    </div>
  </>
);

export default MovieOverview;
