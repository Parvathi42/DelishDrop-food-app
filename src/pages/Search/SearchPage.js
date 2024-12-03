import React, { useState, useEffect } from 'react';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'; 
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import { food_list } from '../../Assets/assets';
import './SearchPage.css';

const SearchPage = () => {
  const [searchInput, setSearchInput] = useState('');
  const [category, setCategory] = useState('All');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
  };

  return (
    <div className="search-page">
      {/* Search Bar */}
      <div className="search-bar-container">
        <input
          type="text"
          value={searchInput}
          onChange={handleInputChange}
          placeholder="Search for food..."
          className="search-bar"
        />
      </div>

      {/* Explore Menu */}
      <ExploreMenu category={category} setCategory={setCategory} minimal={true}/>

      {/* Food Display */}
      {category !== "All" && <FoodDisplay category={category} showHeading={false} isSearchPage={true} />}
    </div>
  );
};

export default SearchPage;