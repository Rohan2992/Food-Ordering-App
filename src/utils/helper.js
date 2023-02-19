export const filterData = (inputText, restaurantList) => {
  return restaurantList.filter((restaurant) => {
    return restaurant?.data?.name
      ?.toLowerCase()
      ?.includes(inputText.toLowerCase());
  });
};
