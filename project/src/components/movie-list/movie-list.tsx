import { useState } from 'react';
import MovieCard from '../movie-card/movie-card';
import MovieType from '../../types/movie-type';

type MovieListProps = {
  movieList: MovieType[];
};

const MovieList = (props: MovieListProps): JSX.Element => {
  const [activeMovieCard, setActiveMovieCard] = useState(NaN);
  return (
    <>
      {props.movieList.map((movie) => (<MovieCard key={movie.id} movie={movie} setActiveMovieCard={setActiveMovieCard} isActive={activeMovieCard === movie.id} />))}
    </>
  );
};

export default MovieList;
