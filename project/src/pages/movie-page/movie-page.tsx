/* eslint-disable jsx-a11y/anchor-is-valid */
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import MovieType from '../../types/movie-type';
import MovieList from '../../components/movie-list/movie-list';
import { Link, Navigate, useParams } from 'react-router-dom';

type MoviePageProps = {
  movieList: MovieType[];
};

const getRatingLevel = (rating: number) => {
  const x = rating;
  switch (true) {
    case (x < 3): return 'Bad';
    case (x < 5): return 'Normal';
    case (x < 8): return 'Good';
    case (x < 10): return 'Very good';
  }
};

const MoviePage = (props: MoviePageProps): JSX.Element => {
  const paramId = Number(useParams().id);
  const movie = props.movieList.find((mov) => mov.id === paramId);
  return !movie
    ? (<Navigate to="*" />)
    : (
      <body>
        <section style={{ 'background': `${movie.backgroundColor}` }} className="film-card film-card--full">
          <div className="film-card__hero">
            <div className="film-card__bg">
              <img src={movie.backgroundImage} alt={movie.name} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <Header />

            <div className="film-card__wrap">
              <div className="film-card__desc">
                <h2 className="film-card__title">{movie.name}</h2>
                <p className="film-card__meta">
                  <span className="film-card__genre">{movie.genre}</span>
                  <span className="film-card__year">{movie.released}</span>
                </p>

                <div className="film-card__buttons">
                  <Link to={`/player/${movie.id}`} className="btn btn--play film-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </Link>
                  <button className="btn btn--list film-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                    <span className="film-card__count">{movie.id}</span>
                  </button>
                  <Link to={`/movies/${movie.id}/review`} className="btn film-card__button">Add review</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="film-card__wrap film-card__translate-top">
            <div className="film-card__info">
              <div className="film-card__poster film-card__poster--big">
                <img src={movie.posterImage} alt={movie.name} width="218" height="327" />
              </div>

              <div className="film-card__desc">
                <nav className="film-nav film-card__nav">
                  <ul className="film-nav__list">
                    <li className="film-nav__item film-nav__item--active">
                      <a href="#" className="film-nav__link">Overview</a>
                    </li>
                    <li className="film-nav__item">
                      <a href="#" className="film-nav__link">Details</a>
                    </li>
                    <li className="film-nav__item">
                      <a href="#" className="film-nav__link">Reviews</a>
                    </li>
                  </ul>
                </nav>

                <div className="film-rating">
                  <div className="film-rating__score">{movie.rating}</div>
                  <p className="film-rating__meta">
                    <span className="film-rating__level">{getRatingLevel(movie.rating)}</span>
                    <span className="film-rating__count">{movie.scoresCount}</span>
                  </p>
                </div>

                <div className="film-card__text">
                  <p>{movie.description}</p>

                  <p className="film-card__director"><strong>{`Director: ${movie.director}`}</strong></p>

                  <p className="film-card__starring"><strong>{`Starring: ${movie.starring.join(', ')} and other`}</strong></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <div className="catalog__films-list">
              <MovieList movieList={props.movieList} />
            </div>
          </section>

          <Footer />
        </div>
      </body>
    );
};

export default MoviePage;
