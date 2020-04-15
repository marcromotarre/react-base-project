function townReducer(
  state = {
    townName: "",
    users: []
  },
  { type, payload }
) {
  switch (type) {
    case "ADD_TOWN_NAME":
      return {
        ...state,
        townName: payload.townName
      };

    case "ADD_USERS":
      return {
        ...state,
        users: payload.users
      };
    default:
      return {
        ...state
      };
  }
}

export default townReducer;
