import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';

function Layout() {
  return (

    <div className='flex flex-col min-h-screen '>
      <ToastContainer />
      <Navbar />
      <main className='flex-grow justify-center items-center p-4'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
