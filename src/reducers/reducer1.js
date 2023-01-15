import {
  ADD_DATA,
  SORT_BY_FAVORITES,
  SORT_BY_READ,
  SORT_BY_UNREAD,
} from "../actions/action1";

const initialState = {
  byRead: false,
  byUnread: false,
  byFavorites: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT_BY_READ:
      return { ...state, byRead: action.payload };

    case SORT_BY_UNREAD: {
      return { ...state, byUnread: action.payload };
    }
    case SORT_BY_FAVORITES: {
      return { ...state, ...action.payload };
    }

    case ADD_DATA: {
      return { ...state, ...action.payload };
    }

    default:
      return state;
  }
};

export default reducer;
