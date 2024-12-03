import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../Assets/assets';

const ExploreMenu = ({ category, setCategory, minimal = false }) => {
  return (
    <div className={`explore-menu ${minimal ? 'explore-menu-minimal' : ''}`}>
      {!minimal && (
        <center>
          <h1>
            Tasty Food To Your Destination
            <br />
            <span>In 20 Mins.</span>
          </h1>
        </center>
      )}
      <h2>{minimal ? 'Popular Cuisines' : 'Explore Our Menu'}</h2>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            key={index}
            className={`explore-menu-list-item ${category === item.menu_name ? 'active' : ''}`}
            onClick={() => setCategory((prev) => (prev === item.menu_name ? 'All' : item.menu_name))}
          >
            <img src={item.menu_image} alt={`${item.menu_name} icon`} />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      {!minimal && <hr />}
    </div>
  );
};

export default ExploreMenu;
