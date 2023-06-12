import ReviewType from '../../types/review-type';

type ReviewCardProps = {
  review: ReviewType;
};

const ReviewCard = (props: ReviewCardProps): JSX.Element => {
  const date = new Date(props.review.date);
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{props.review.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{props.review.user.name}</cite>
          <time
            className="review__date"
            dateTime={`${date.getFullYear()}-${date.getMonth().toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`}
          >
            {`${date.toLocaleString('en-US', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}`}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{props.review.rating}</div>
    </div>
  );
};

export default ReviewCard;
