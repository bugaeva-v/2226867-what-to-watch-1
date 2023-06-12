/* eslint-disable jsx-a11y/anchor-is-valid */
import MovieCard from '../../components/movie-card/movie-card';
import Footer from '../../components/footer/footer';
import PromoFilm from '../../components/promo-movie/promo-movie';

const Main = (): JSX.Element => (
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
          <MovieCard
            img="img/fantastic-beasts-the-crimes-of-grindelwald.jpg"
            title="Fantastic Beasts: The Crimes of Grindelwald"
          />
          <MovieCard
            img="img/bohemian-rhapsody.jpg"
            title="Bohemian Rhapsody"
          />
          <MovieCard
            img="img/macbeth.jpg"
            title="Macbeth"
          />
          <MovieCard
            img="img/aviator.jpg"
            title="Aviator"
          />
          <MovieCard
            img="img/we-need-to-talk-about-kevin.jpg"
            title="We need to talk about Kevin"
          />
          <MovieCard
            img="img/what-we-do-in-the-shadows.jpg"
            title="What We Do in the Shadows"
          />
          <MovieCard
            img="img/revenant.jpg"
            title="Revenant"
          />
          <MovieCard
            img="img/johnny-english.jpg"
            title="Johnny English"
          />
          <MovieCard
            img="img/shutter-island.jpg"
            title="Shutter Island"
          />
          <MovieCard
            img="img/pulp-fiction.jpg"
            title="Pulp Fiction"
          />
          <MovieCard
            img="img/no-country-for-old-men.jpg"
            title="No Country for Old Men"
          />
          <MovieCard
            img="img/snatch.jpg"
            title="Snatch"
          />
          <MovieCard
            img="img/moonrise-kingdom.jpg"
            title="Moonrise Kingdom"
          />
          <MovieCard
            img="img/seven-years-in-tibet.jpg"
            title="Seven Years in Tibet"
          />
          <MovieCard
            img="img/midnight-special.jpg"
            title="Midnight Special"
          />
          <MovieCard
            img="img/war-of-the-worlds.jpg"
            title="War of the Worlds"
          />
          <MovieCard
            img="img/dardjeeling-limited.jpg"
            title="Dardjeeling Limited"
          />
          <MovieCard
            img="img/orlando.jpg"
            title="Orlando"
          />
          <MovieCard
            img="img/mindhunter.jpg"
            title="Mindhunter"
          />
          <MovieCard
            img="img\midnight-special.jpg"
            title="Midnight Special"
          />
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
