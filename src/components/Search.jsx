import React, { useState } from 'react';
import axios from 'axios';
import { MdSearch } from 'react-icons/md';
import Movie from './Movie';

const API_KEY = 'de1a5287f47e689d7ac97971cb8fd7ba';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchText}`)
      .then((response) => {
        setSearchResults(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching search results:', error);
      });
  };

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className='w-full h-screen'>
      <img
        className='hidden sm:block absolute w-full h-full object-cover'
        src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
        alt='/'
      />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
      <div className='fixed w-full px-4 py-24 z-50'>
        <div
          className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white p-4 rounded-md'
          style={{ maxWidth: '450px', height: '600px', background: 'rgba(0, 0, 0, 0.75)' }}
        >
          <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl font-bold mb-4'>Search</h1>
            <div className='flex'>
              <input
                type='text'
                value={searchText}
                onChange={handleInputChange}
                className='bg-gray-600 w-full px-4 py-2 rounded-l-md focus:outline-none'
                placeholder='Search for movies...'
              />
              <button
                onClick={handleSearch}
                className='bg-red-600 text-white px-4 py-2 rounded-r-md focus:outline-none'
              >
                <MdSearch size={20} />
              </button>
            </div>
          </div>
          <div className='max-w-[320px] mx-auto'>
            <div className='grid grid-cols-3 gap-4 justify-items-center'>
              {searchResults.map((movie) => (
                <Movie key={movie.id} item={movie} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
