import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const About = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/signup');
    } catch (error) {
      console.log(error);
    }
  };

  const handleContinue = () => {
    navigate('/');
  };

  return (
    <div className='container mx-auto p-8'>
      <h1 className='text-3xl font-bold mb-4'>About</h1>
      <p className='text-gray-600'>
        Welcome to our application! This is a brief description of the
        application and what it does. Feel free to explore the various features
        and functionalities.
      </p>
      <img
          className='w-full h-full object-cover'
          src='https://www.ariel.ac.il/wp/administrativesystems/wp-content/uploads/sites/21/2021/12/LOGOS_CMYK.png'
          alt='/'
        />

      <div className='text-white mt-8'>
        <h2 className='text-xl font-bold'>Personal Information</h2>
        <p>First Name: Evyatar</p>
        <p>Last Name: Lidani </p>
        <p>Email: evyatar61300@gmail.com</p>
        <p>Department: Practical Software Engineer </p>
      </div>

      <div className='mt-8 flex items-center space-x-4'>
        <button
          onClick={handleLogout}
          className='bg-red-600 px-6 py-2 rounded text-white'
        >
          Sign Out
        </button>

        <button
          onClick={handleContinue}
          className='bg-green-600 px-6 py-2 rounded text-white'
        >
          Continue to Application
        </button>
      </div>
    </div>
  );
};

export default About;
