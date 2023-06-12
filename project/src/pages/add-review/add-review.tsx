/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, Navigate, useParams } from 'react-router-dom';
import MovieType from '../../types/movie-type';
import ReviewForm from '../../components/review-form/review-form';

type AddReviewProps = {
  movieList: MovieType[];
};

const AddReview = (props: AddReviewProps): JSX.Element => {
  const paramId = Number(useParams().id);
  const movie = props.movieList.find((mov) => mov.id === paramId);
  return !movie
    ? (<Navigate to="*" />)
    : (
      <body>
        <section style={{ 'background': `${movie.backgroundColor}` }} className="film-card film-card--full">
          <div className="film-card__header">
            <div className="film-card__bg">
              <img src={movie.backgroundImage} alt={movie.name} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header">
              <div className="logo">
                <a href="main.html" className="logo__link">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </a>
              </div>

              <nav className="breadcrumbs">
                <ul className="breadcrumbs__list">
                  <li className="breadcrumbs__item">
                    <Link to={`/movies/${movie.id}`} className="breadcrumbs__link">{movie.name}</Link>
                  </li>
                  <li className="breadcrumbs__item">
                    <a className="breadcrumbs__link">Add review</a>
                  </li>
                </ul>
              </nav>

              <ul className="user-block">
                <li className="user-block__item">
                  <div className="user-block__avatar">
                    <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                  </div>
                </li>
                <li className="user-block__item">
                  <a className="user-block__link">Sign out</a>
                </li>
              </ul>
            </header>

            <div className="film-card__poster film-card__poster--small">
              <img src={movie.posterImage} alt={movie.name} width="218" height="327" />
            </div>
          </div>

          <ReviewForm />

        </section>
      </body>
    );
};

export default AddReview;
