import { Navigate } from 'react-router';

function RouteProtect({ children }) {
const userData = JSON.parse(localStorage.getItem('userData')) || null;

  const isLoggedIn = userData.isLoggedIn === true;
  return isLoggedIn ? children : <Navigate to="/login" />;
}

export default RouteProtect;
