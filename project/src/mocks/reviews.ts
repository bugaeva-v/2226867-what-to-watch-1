import ReviewType from '../types/review-type';

const REVIEWS: ReviewType[] = [
  {
    id: 1,
    user: {
      id: 14,
      name: 'Corey'
    },
    rating: 1.3,
    comment: 'A movie that will take you to another world full of emotions.',
    date: '2023-04-23T13:03:23.469Z'
  },
  {
    id: 2,
    user: {
      id: 16,
      name: 'Mollie'
    },
    rating: 5.4,
    comment: 'This movie is perfect in all its categories: credits, sound track, production, casting, writing, photography, editing, acting, and direction.\nI was amazed with the freedom of the use of the camera. This movie will change the way movies are made. Slow-mo, stills, black and white, and color were all used to brilliant effect.',
    date: '2023-04-30T13:03:23.469Z'
  },
  {
    id: 3,
    user: {
      id: 17,
      name: 'Emely'
    },
    rating: 8.3,
    comment: 'Unfortunately we don\'t have a reliable way to tell the true ratings of a movie.',
    date: '2023-05-12T13:03:23.469Z'
  },
  {
    id: 4,
    user: {
      id: 11,
      name: 'Jack'
    },
    rating: 9.5,
    comment: 'Poised to be an instant classic, almost everything about this film is phenomenal - the acting, the cinematography, the discography, etc.',
    date: '2023-05-05T13:03:23.469Z'
  },
  {
    id: 5,
    user: {
      id: 16,
      name: 'Mollie'
    },
    rating: 9.2,
    comment: 'I personally found this movie to be boring. Definitely one of the most boring movies I\'ve ever seen.',
    date: '2023-05-07T13:03:23.469Z'
  }
];

export default REVIEWS;
