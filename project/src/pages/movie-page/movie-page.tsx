/* eslint-disable jsx-a11y/anchor-is-valid */
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import MovieType from '../../types/movie-type';
import { Link, Navigate, useParams } from 'react-router-dom';
import ReviewType from '../../types/review-type';
import Tabs from '../../components/tabs/tabs';
import RelatedMovies from '../../components/related-movies/related-movies';

type MoviePageProps = {
  movieList: MovieType[];
  reviewList: ReviewType[];
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
                <img src={movie.posterImage} alt={`${movie.name} poster`} width="218" height="327" />
              </div>
              <Tabs movie={movie} reviews={props.reviewList} />
            </div>
          </div>
        </section>
        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <div className="catalog__films-list">
              <RelatedMovies movies={props.movieList} currentMovie={movie} />
            </div>
          </section>

          <Footer />
        </div>
      </body>
    );
};

export default MoviePage;
