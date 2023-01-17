import {
  ADD_DATA,
  MARK_AS_FAVORITES,
  MARK_AS_READ,
  SORT_BY_FAVORITES,
  SORT_BY_READ,
  SORT_BY_UNREAD,
} from "../actions/action1";

const initialState = {
  filterType: "",
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

    case "FILTER_TYPE": {
      return { ...state, filterType: action.payload };
    }

    case "CURRENT_ID": {
      return { ...state, cuurent_id: action.payload };
    }

    case "BODY_DATA": {
      return { ...state, bodyData: action.payload };
    }

    case "RECIVED_ID": {
      return { ...state, recived_id: action.payload };
    }

    case "META_DATA": {
      return { ...state, meta_data: action.payload };
    }
    default:
      return state;
  }
};

export default reducer;
