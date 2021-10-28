import React from 'react';
import Restaurant from './Restaurant';

const RestaurantList = ({ restaurant, username }) => (
  <React.Fragment>
    {restaurant.map(rest => {
      return (
        <Restaurant
          key={rest.id}
          image={rest.image}
          name={rest.name}
          stars={rest.stars}
          location={rest.location}
          username={username}
        />
      );
    })}
  </React.Fragment>
);
export default RestaurantList;
