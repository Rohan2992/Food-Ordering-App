import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const filterData = (inputText, restaurantList) => {
  return restaurantList.filter((restaurant) => {
    return restaurant.data.name.includes(inputText);
  });
};

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
   *      <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
   *    );
   *  });
   */

  const [inputText, setInputText] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  // Try rendering the components using search-bar

  useEffect(() => {
    /**
     * // using Promises
     * fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=12.9715987&lng=77.5945627"
    )
      .then((response) => {
        response
          .json()
          .then((responseData) => {
            console.log(responseData);
          })
          .catch((e) => {
            console.log(e);
          });
      })
      .catch((e) => {
        console.log(e);
      });
     */
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
    }, 2000);
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
          <>
            <Shimmer />
          </>
        )}
        {/* {result} */}

        {/* <RestaurantCard {...restaurantList[0].data} />
        <RestaurantCard {...restaurantList[1].data} />
         */}
      </div>
    </>
  );
};
