import React from 'react';
import { useNavigate } from 'react-router';

function Hero() {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    if (localStorage.getItem('userData')) {
      navigate('/bmi');
      return;
    } else navigate('/signup');
  };
  return (
    <div className='flex flex-col justify-center items-center'>
      <section className='bg-white flex flex-col justify-center items-center p-6 mt-4 w-full max-w-md'>
        <h1 className='text-2xl font-bold text-center mb-4'>
          Welcome to BMI Calculator
        </h1>
        <p className='text-gray-700 text-center mb-4'>
          Calculate your Body Mass Index (BMI) to understand your body weight
          status.
        </p>
        <p className='text-gray-500 text-center'>
          Please sign up or log in to start using the calculator.
        </p>
        <button
          onClick={handleGetStarted}
          className='mt-4 px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-colors'>
          Get Started
        </button>
      </section>
    </div>
  );
}

export default Hero;
