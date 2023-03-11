import { useState, useEffect, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import Offline from "./Offline";
import { DATA_FETCH_URL } from "../Config";
// import userContext from "../utils/userContext";

const Body = () => {
  const [inputText, setInputText] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([""]);
  // const { user, setUser } = useContext(userContext);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(DATA_FETCH_URL);
    const json = await data.json();
    // setTimeout(() => {
    //   // console.log(json);
    // }, 3000);
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const status = useOnline();
  // console.log(status);
  //  Early return

  if (!status) {
    return <Offline />;
  }
  if (!restaurants) return null;

  if (filteredRestaurants.length === 0) {
    return <h1> No restaurant Found...</h1>;
  }

  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex justify-center my-3">
        <input
          type="text"
          className=" focus:outline-yellow-500 p-3"
          placeholder="Search"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />

        <button
          className="mx-3 bg-yellow-400 text-black hover:bg-yellow-200 p-2 rounded-md"
          onClick={() => {
            const data = filterData(inputText, restaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        {/* <input
          value={user.name}
          onChange={(e) => {
            setUser({
              name: e.target.value,
              mail: user.mail
            });
          }}
        ></input>
        <input
          value={user.mail}
          onChange={(e) => {
            setUser({
              name: user.name,
              mail: e.target.value
            });
          }}
        ></input> */}
      </div>
      {/* {console.log(props.user)} */}
      <div className="flex flex-wrap justify-center">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
        ))}
      </div>
    </>
  );
};

export default Body;
