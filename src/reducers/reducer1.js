import {
  ADD_DATA,
  BUTTON_NAME,
  CURRENT_ID,
  FILTER_TYPE,
  MARK_AS_FAVORITES,
  MARK_AS_READ,
  META_DATA,
  RECIVED_ID,
  REMOVE_FROM_FAVORITES,
  SORT_BY_FAVORITES,
  SORT_BY_READ,
  SORT_BY_UNREAD,
} from "../actions/action1";

// intial state
const initialState = {
  filterType: "",
  byRead: false,
  byUnread: false,
  byFavorites: false,
};

//reducer function to manipulate state
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT_BY_READ:
      return { ...state, byRead: action.payload };

    case SORT_BY_UNREAD: {
      return { ...state, byUnread: action.payload };
    }
    case SORT_BY_FAVORITES: {
      return { ...state, byFavorites: action.payload };
    }

    case ADD_DATA: {
      return { ...state, ...action.payload };
    }

    case MARK_AS_READ: {
      return {
        ...state,
        emailList: state.emailList.map((item) =>
          item.id === action.payload.id ? { ...item, isRead: true } : item
        ),
      };
    }
    case MARK_AS_FAVORITES: {
      return {
        ...state,
        emailList: state.emailList.map((item) =>
          item.id === action.payload.id ? { ...item, isFav: true } : item
        ),
      };
    }

    case REMOVE_FROM_FAVORITES: {
      return {
        ...state,
        emailList: state.emailList.map((item) =>
          item.id === action.payload.id ? { ...item, isFav: false } : item
        ),
      };
    }

    case FILTER_TYPE: {
      return { ...state, filterType: action.payload };
    }

    case CURRENT_ID: {
      return { ...state, current_id: action.payload };
    }

    case RECIVED_ID: {
      return { ...state, recived_id: action.payload };
    }

    case META_DATA: {
      return { ...state, meta_data: action.payload };
    }

    case BUTTON_NAME: {
      return { ...state, buttonName: action.payload };
    }

    default:
      return state;
  }
};

export default reducer;
