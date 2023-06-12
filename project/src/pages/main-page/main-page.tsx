/* eslint-disable jsx-a11y/anchor-is-valid */
import Footer from '../../components/footer/footer';
import PromoFilm from '../../components/promo-movie/promo-movie';
import MovieType from '../../types/movie-type';
import MovieList from '../../components/movie-list/movie-list';

type MainPageProps = {
  movieList: MovieType[];
};

const Main = (props: MainPageProps): JSX.Element => (
  <body>
    <PromoFilm
      name="The Grand Budapest Hotel"
      srcPoster="img/the-grand-budapest-hotel-poster.jpg"
      srcBg="img/bg-the-grand-budapest-hotel.jpg"
      genre="Drama"
      date="2014"
    />
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <ul className="catalog__genres-list">
          <li className="catalog__genres-item catalog__genres-item--active">
            <a href="#" className="catalog__genres-link">All genres</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Comedies</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Crime</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Documentary</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Dramas</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Horror</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Kids & Family</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Romance</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Sci-Fi</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Thrillers</a>
          </li>
        </ul>

        <div className="catalog__films-list">
          <MovieList movieList={props.movieList}/>
        </div>

        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </section>
      <Footer/>
    </div>
  </body>
);

export default Main;
