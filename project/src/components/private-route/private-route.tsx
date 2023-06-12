import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  authorizationAccess: boolean;
  children: JSX.Element;
};

const PrivateRoute = (props: PrivateRouteProps): JSX.Element => (
  props.authorizationAccess ? props.children : <Navigate to={'/login'} />
);

export default PrivateRoute;
