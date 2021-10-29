import React from 'react';
import Restaurant from './Restaurant';
const RestaurantList = ({ restaurant, username, navigation }) => {
  return restaurant.map(rest => {
    return (
      <Restaurant
        key={rest.id}
        id={rest.id}
        image={rest.image}
        name={rest.name}
        stars={rest.stars}
        location={rest.location}
        username={username}
        navigation={navigation}
      />
    );
  });
};
export default RestaurantList;
