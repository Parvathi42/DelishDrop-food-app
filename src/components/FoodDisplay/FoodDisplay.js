import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem.js';

const FoodDisplay = ({  category = "All", showHeading = true, isSearchPage = false }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className='food-display' id='food-display'>
      {/* Conditionally render heading */}
      {showHeading && <h2>Top Dishes Near You</h2>}

      <div className='food-display-list'>
        {food_list.map((item, index) => {
          // Display items that match the selected category
          if (category === "All" || category === item.category) {
            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} isSearchPage={isSearchPage}/>;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;