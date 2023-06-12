import MovieType from '../../types/movie-type';
import MovieList from '../movie-list/movie-list';

type RelatedMoviesProps = {
  movies: MovieType[];
  currentMovie: MovieType;
};

const RelatedMovies = (props : RelatedMoviesProps): JSX.Element => {
  const relatedFilms = props.movies
    .filter((currentFilm) => (currentFilm.genre === props.currentMovie.genre && currentFilm.id !== props.currentMovie.id))
    .slice(0, 4);

  return (<MovieList movieList={relatedFilms} />);
};

export default RelatedMovies;
