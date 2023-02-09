import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const filterData = (inputText, restaurantList) => {
  return restaurantList.filter((restaurant) => {
    return restaurant?.data?.name
      ?.toLowerCase()
      ?.includes(inputText.toLowerCase());
  });
};

export default Body = () => {
  const [inputText, setInputText] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([""]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6320535&lng=77.44581509999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setTimeout(() => {
      // console.log(json);
      setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }, 3000);
  }

  //  Early return
  if (!restaurants) return null;

  if (filteredRestaurants.length === 0) {
    return <h1> No restaurant Found...</h1>;
  }

  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
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
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
        ))}
      </div>
    </>
  );
};
