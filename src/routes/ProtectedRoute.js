import { Navigate } from 'react-router-dom';

function ProtectedRoute ({ element: Component, ...rest }) {
  const token = sessionStorage.getItem('token');
  
  return token ? <Component {...rest} /> : <Navigate to="/" />;
}

export default ProtectedRoute;
