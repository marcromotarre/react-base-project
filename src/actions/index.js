export const addTownName = ({ townName }) => ({
  type: "ADD_TOWN_NAME",
  payload: {
    townName
  }
});

export const addUsers = ({ users }) => ({
  type: "ADD_USERS",
  payload: {
    users
  }
});
