import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import MoviePage from '../../pages/movie-page/movie-page';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import MovieType from '../../types/movie-type';
import ReviewType from '../../types/review-type';

type AppProps = {
  movieList: MovieType[];
  reviewList: ReviewType[];
};

const App = (props: AppProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/">
        <Route index element={<MainPage movieList={props.movieList}/>} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/mylist" element={
          <PrivateRoute authorizationAccess>
            <MyList movieList={props.movieList} />
          </PrivateRoute>
        }
        />
        <Route path="/movies/:id" element={<MoviePage movieList={props.movieList} reviewList={props.reviewList} />} />
        <Route path="/movies/:id/review" element={<AddReview movieList={props.movieList} />} />
        <Route path="/player/:id" element={<Player movieList={props.movieList} />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
