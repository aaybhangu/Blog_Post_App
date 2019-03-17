export default (state = [], action) => {
  switch (action.type) {
    case "USER_LIST":
      return [...state, action.payload];
    default:
      return state;
  }
};
