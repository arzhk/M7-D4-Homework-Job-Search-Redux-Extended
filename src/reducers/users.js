export default function (state = {}, action) {
  switch (action.type) {
    case "UPDATE_USER_INFO":
      return {
        ...state,
        user: action.payload,
      };
    case "ADD_NEW_FAVOURITE":
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    case "REMOVE_FAVOURITE":
      return {
        ...state,
        favourites: state.favourites.filter((favourite) => favourite.id !== action.payload.id),
      };
    case "ADD_RECENT_SEARCH":
      return {
        ...state,
        recentSearches: [...state.recentSearches, action.payload],
      };
    default:
      return state;
  }
}
