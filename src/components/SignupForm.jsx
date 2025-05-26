import { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { Link } from 'react-router';
// add validation error messages for the form fields <<!!!!

function SignupForm() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const { fullName, email, password, confirmPassword } = formData;
    if (password !== confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }
    const isLoggedIn = false;

    const userData = {
      fullName,
      email,
      password,
      isLoggedIn,
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    toast.success('Sign up successful!');
    navigate('/login');
  }
  return (
    <div className='flex flex-col justify-center items-center'>
      <h2 className='font-bold text-3xl'>Sign Up</h2>
      <section className='bg-white shadow-md rounded-lg p-6 mt-4 w-full max-w-md'>
        <form className='space-y-4 flex flex-col gap-2'>
          <label className=''>
            <span className='text-gray-700'>Full Name</span>
            <input
              name='fullName'
              type='text'
              minLength={3}
              maxLength={50}
              className='mt-1  p-2 w-full border-gray-300 rounded-md shadow-sm focus:border-emerald-500 focus:ring-emerald-500'
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              required
            />
          </label>
          <label className=''>
            <span className='text-gray-700'>Email</span>
            <input
              name='email'
              type='email'
              className='mt-1  w-full  p-2 border-gray-300 rounded-md shadow-sm focus:border-emerald-500 focus:ring-emerald-500'
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </label>
          <label className=''>
            <span className='text-gray-700'>Password</span>
            <input
              name='password'
              type='password'
              minLength={8}
              className='mt-1  w-full  p-2 border-gray-300 rounded-md shadow-sm focus:border-emerald-500 focus:ring-emerald-500'
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
          </label>
          <label className=''>
            <span className='text-gray-700'>Confirm Password</span>
            <input
              name='confirmPassword'
              type='password'
              className='mt-1  w-full  p-2 border-gray-300 rounded-md shadow-sm focus:border-emerald-500 focus:ring-emerald-500'
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              required
            />
          </label>
          <button
            onClick={handleSubmit}
            type='submit'
            className='w-full bg-emerald-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50'>
            Sign Up
          </button>
          <p className='font-semibold text-sm'>
            if have an account, please
            <Link className='text-emerald-600 p-1 m-1' to={'/login'}>
              Login
            </Link>
          </p>
        </form>
      </section>
    </div>
  );
}

export default SignupForm;
