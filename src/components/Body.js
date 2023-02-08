import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const filterData = (inputText, restaurantList) => {
  return restaurantList.filter((restaurant) => {
    return restaurant.data.name.includes(inputText);
  });
};

export default Body = () => {
  const [inputText, setInputText] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.4545144&lng=77.70085089999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setTimeout(() => {
      console.log(json);
      setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }, 3000);
  }

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />

        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(inputText, restaurants);
            setFilteredRestaurants(data);
            console.log(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurant-list">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          ))
        ) : (
          <Shimmer />
        )}
      </div>
    </>
  );
};
