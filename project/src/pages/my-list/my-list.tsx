import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import MovieList from '../../components/movie-list/movie-list';
import MovieType from '../../types/movie-type';

type MyListProps = {
  movieList: MovieType[];
};

const MyList = (props: MyListProps): JSX.Element => (
  <body>
    <div className="user-page">
      <Header/>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          <MovieList movieList={props.movieList}/>
        </div>
      </section>

      <Footer/>
    </div>
  </body>
);

export default MyList;
