import jsonplaceholder from "../apis/jsonPlaceholder";

export const fatchPosts = () => async dispatch => {
  const response = await jsonplaceholder.get("/posts");
  dispatch({
    type: "FATCH_DATA",
    payload: response.data
  });
};
