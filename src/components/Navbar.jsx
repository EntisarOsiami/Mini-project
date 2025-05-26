import { Link } from 'react-router';
import { useNavigate } from 'react-router';

function Navbar() {
  const navigate = useNavigate();

const user = JSON.parse(localStorage.getItem('userData')) || {};
  const handleLogout = () => {
    user.isLoggedIn = false
    localStorage.setItem('userData', JSON.stringify(user));
    navigate('/');
  };

  return (
    <nav className='navbar bg-emerald-900 text-white p-6 flex  h-18 '>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='navbar-brand'>
          <Link to='/' className='text-2xl font-bold'>
            Health Tracker
          </Link>
        </div>
        <ul className='space-x-4 hidden md:flex'>
          <li>
            <Link to='/'>Home</Link>
          </li>      
          <li>
            <Link to='/bmi'>BMI Calculator</Link>
          </li>
        </ul>
        <div>
          {user.isLoggedIn ? (
            <div className='flex gap-4'>
              <p className='hidden md:block'>Welcome, {user.fullName}</p>
              <button
                onClick={handleLogout}
                className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors'>
                Logout
              </button>
            </div>
          ) : (
            <Link
              to='/login'
              className='bg-emerald-500 text-white px-4 py-2 rounded-md hover:bg-emerald-600 transition-colors'>
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
