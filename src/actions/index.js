import jsonplaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";

export const fetchPostAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  /*   const userIds = _.uniq(_.map(getState().posts, "userId"));
  userIds.forEach(id => dispatch(fetchUsers(id))); */

  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach(id => dispatch(fetchUsers(id)))
    .value();
};
export const fetchPosts = () => async dispatch => {
  const response = await jsonplaceholder.get("/posts");
  dispatch({
    type: "FATCH_DATA",
    payload: response.data
  });
};

export const fetchUsers = id => async dispatch => {
  const response = await jsonplaceholder.get("/users/" + id);
  dispatch({
    type: "USER_LIST",
    payload: response.data
  });
};
/* export const fetchUsers = id => dispatch => _fetchUser(id, dispatch);
const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonplaceholder.get("/users/" + id);
  dispatch({
    type: "USER_LIST",
    payload: response.data
  });
}); */
