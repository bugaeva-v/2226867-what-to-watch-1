import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import MoviePage from '../../pages/movie-page/movie-page';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';

const App = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/">
        <Route index element={<MainPage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/mylist" element={
          <PrivateRoute authorizationAccess={false}>
            <MyList />
          </PrivateRoute>
        }
        />
        <Route path="/films/:id" element={<MoviePage />} />
        <Route path="/films/:id/review" element={<AddReview />} />
        <Route path="/player/:id" element={<Player />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
