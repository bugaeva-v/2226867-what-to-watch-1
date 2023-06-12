/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState} from 'react';
import MovieType from '../../types/movie-type';
import ReviewType from '../../types/review-type';
import MovieReviews from '../movie-review/movie-review';
import MovieDetails from '../movie-details/movie-details';
import MovieOverview from '../movie-overview/movie-overview';

type TabsProps = {
  movie: MovieType;
  reviews: ReviewType[];
};

enum TabTitles {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

const Tabs = (props: TabsProps): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState(TabTitles.Overview);
  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={selectedTab === TabTitles.Overview ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
            <a className="film-nav__link" onClick={() => setSelectedTab(TabTitles.Overview)}>Overview</a>
          </li>
          <li className={selectedTab === TabTitles.Details ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
            <a className="film-nav__link" onClick={() => setSelectedTab(TabTitles.Details)}>Details</a>
          </li>
          <li className={selectedTab === TabTitles.Reviews ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
            <a className="film-nav__link" onClick={() => setSelectedTab(TabTitles.Reviews)}>Reviews</a>
          </li>
        </ul>
      </nav>
      {selectedTab === TabTitles.Overview && <MovieOverview movie={props.movie} />}
      {selectedTab === TabTitles.Details && <MovieDetails movie={props.movie} />}
      {selectedTab === TabTitles.Reviews && <MovieReviews reviewList={props.reviews} />}
    </div>
  );
};

export default Tabs;
