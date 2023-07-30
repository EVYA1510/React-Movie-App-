import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to='/'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>
          NETFLIX
        </h1>
      </Link>

      <div className='flex items-center space-x-4'>
        <Link to='/'>
          <button className='text-white'>Home</button>
        </Link>

        <Link to='/about'>
          <button className='text-white'>About</button>
        </Link>

        {/* Add a button to navigate to the search page */}
        <button
          onClick={() => navigate('/search')}
          className='text-white'
        >
          Search
        </button>

        {/* Rest of the code */}
        {user?.email ? (
          <>
            <Link to='/favourites'>
              <button className='text-white'>Favourites</button>
            </Link>
            <button
              onClick={handleLogout}
              className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to='/login'>
              <button className='text-white'>Sign In</button>
            </Link>

            <Link to='/signup'>
              <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>
                Sign up
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
