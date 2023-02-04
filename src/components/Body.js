import { useState } from "react";
import { restaurantList } from "../Config";
import RestaurantCard from "./RestaurantCard";

function filterData(inputText, restaurantList) {
  return restaurantList.filter((restaurant) => {
    return restaurant.info.name.includes(inputText);
  });
}

export default Body = () => {
  /**
   * // JS variable
   * var inputText = "KFC"; ==== const [inputText, setInputText] = setState("KFC");
   *
   *  // For Each Loop
   *  const result = [];
   *  restaurantList.forEach((restaurant) => {
   *    // console.log(restaurant);
   *    result.push(
   *      <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
   *    );
   *  });
   */

  const [inputText, setInputText] = useState("");
  const [restaurants, setrestaurants] = useState(restaurantList);

  const [searchClicked, setSearchClicked] = useState(false);

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
            const data = filterData(inputText, restaurantList);
            setrestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <h1>{searchClicked}</h1>
      <div className="restaurant-list">
        {/* {result} */}

        {restaurants.map((restaurant) => (
          <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
        ))}

        {/* <RestaurantCard {...restaurantList[0].info} />
        <RestaurantCard {...restaurantList[1].info} />
         */}
      </div>
    </>
  );
};
