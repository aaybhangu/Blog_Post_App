export default (state = [], action) => {
  switch (action.type) {
    case "FATCH_DATA":
      return action.payload;
    default:
      return state;
  }
};
