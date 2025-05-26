import { useState } from 'react';

function BMI() {
  
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [cate, setCate] = useState('');

  function calculateBmi(e) {
    e.preventDefault();

    const userHeight = parseFloat(height) / 100;
    const userWeight = parseFloat(weight);
    const userBmi = userWeight / (userHeight * userHeight);
    setBmi(userBmi.toFixed(2));

    if (userBmi < 18.5) {
      setCate('Underweight');
    } else if (userBmi >= 18.5 && userBmi <= 24.9) {
      setCate('Normal');
    } else if (userBmi >= 25 && userBmi <= 29.9) {
      setCate('Class I obesity');
    } else if (userBmi >= 30 && userBmi <= 39.9) {
      setCate('Class II obesity');
    } else {
      setCate('Class III obesity');
    }
  }

  function reset(e) {
    e.preventDefault();

    setHeight(0);
    setWeight(0);
    setCate('');
    setBmi(0);
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 p-4 m-2 justify-center  '>
      <form className='flex flex-col justify-center max-w-xl p-4 rounded-2xl gap-5 shadow-xl'>
        <label className='font-bold'>
          <span className='text-gray-700'>Height(cm)</span>
          <input
            name='height'
            type='text'
            className='mt-1  w-full  p-2 border-gray-300 rounded-md shadow-sm focus:border-emerald-500 focus:ring-emerald-500'
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </label>
        <label className='font-bold'>
          <span className='text-gray-700'>weight(kg)</span>
          <input
            name='weight'
            type='text'
            className='mt-1  w-full  p-2 border-gray-300 rounded-md shadow-sm focus:border-emerald-500 focus:ring-emerald-500'
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </label>
        <div className='flex gap-2'>
          <button
            type='submit'
            onClick={calculateBmi}
            className='bg-emerald-600 py-2  mb-7 px-5 rounded-2xl text-white'>
            Calculate
          </button>
          <button
            onClick={reset}
            className='bg-white  border-2 py-2  mb-7 px-5 rounded-2xl text-emerald-600'>
            Reset
          </button>
        </div>
      </form>

      <div className='p-3 m-2 text-xl'>
        <div>
          <p className='font-bold'>
            Your BMI is :
            <span className='font-semibold text-emerald-700'>{bmi}</span>
          </p>
          <p className='font-bold'>
            Category :
            <span className='font-semibold text-emerald-700'>{cate}</span>
          </p>
          {cate ? <img src={`/${cate}.png`} className='h-50 w-50' /> : null}
        </div>
      </div>
    </div>
  );
}

export default BMI;
