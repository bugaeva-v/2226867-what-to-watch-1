import { Link } from 'react-router-dom';

const NotFound = (): JSX.Element => (
  <div>
    <h1>
      Error 404. Page not found
    </h1>
    <Link to='/'>
      Go To Main Page
    </Link>
  </div>
);

export default NotFound;
