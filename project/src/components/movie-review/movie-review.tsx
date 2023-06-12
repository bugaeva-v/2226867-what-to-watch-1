import ReviewType from '../../types/review-type';
import ReviewCard from '../review-card/review-card';

type MovieReviewsProps = {
  reviewList: ReviewType[];
};

const MovieReviews = (props: MovieReviewsProps): JSX.Element => {
  const middleReviewsList = (props.reviewList.length + props.reviewList.length % 2) / 2;
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {props.reviewList.slice(0, middleReviewsList).map((review) => <ReviewCard key={review.id} review={review} />)}
      </div>


      <div className="film-card__reviews-col">
        {props.reviewList.slice(middleReviewsList).map((review) => <ReviewCard key={review.id} review={review} />)}
      </div>
    </div>
  );
};

export default MovieReviews;
