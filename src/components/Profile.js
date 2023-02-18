//jshint esversion:8
import { useEffect, useState } from "react";

const Profile = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // const timer = setTimeout(() => {
    //   console.log("NAMASTE REACT");
    // }, 1000);
    // console.log("Child - " + "UseEffect");
    // return () => {
    //   clearInterval(timer);
    console.log("useEffect Return");
    // };
  }, []);

  return (
    <>
      {console.log("Child - " + "Render")}
      <h1>Profile Functional Component </h1>
      <p>I am the Functional Component of the Food Villa</p>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count
      </button>
    </>
  );
};

export default Profile;
