import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { Link } from 'react-router';

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    const userData = JSON.parse(localStorage.getItem('userData')) || null;
    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }
    if (!userData) {
      toast.error('No user data found. Please sign up first.');
      navigate('/signup');
      return;
    }
    if (userData.email !== email || userData.password !== password) {
      toast.error("Password  or email don't match");
      return;
    }

    if (userData.email === email && userData.password === password) {
      userData.isLoggedIn = true
    localStorage.setItem('userData', JSON.stringify(userData));
      toast.success('login successful!');
      navigate('/bmi');
    }
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <h2 className='font-bold text-3xl'>Login</h2>
      <section className='bg-white shadow-md rounded-lg p-6 mt-4 w-full max-w-md'>
        <form className='space-y-4 flex flex-col gap-2'>
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

          <button
            onClick={handleSubmit}
            type='submit'
            className='w-full bg-emerald-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50'>
            Login
          </button>
          <p className='font-semibold text-sm'>
            if don't have an account, please  
            <Link className='text-emerald-600 p-1 m-1' to={'/signup'}>
              Sign Up
            </Link>
          </p>
        </form>
      </section>
    </div>
  );
}
export default LoginForm;
