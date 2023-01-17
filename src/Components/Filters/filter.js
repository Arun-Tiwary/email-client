import { useDispatch, useSelector } from "react-redux";
import {
  SORT_BY_FAVORITES,
  SORT_BY_READ,
  SORT_BY_UNREAD,
} from "../../actions/action1";

const Filters = () => {
  const { byRead, byUnread, byFavorites, emailData } = useSelector(
    (state) => state
  );

  const dispatch = useDispatch();
  console.log(byRead, byUnread, byFavorites, emailData);

  return (
    <div className="filters">
      <h3>Filter By: </h3>

      <div
        onClick={() => {
          dispatch({ type: SORT_BY_UNREAD, payload: true });
          dispatch({ type: SORT_BY_READ, payload: false });
          dispatch({ type: "FILTER_TYPE", payload: "unread" });
        }}
        className={byUnread ? "filterd-block" : "unfilterd-block"}
      >
        Unread
      </div>
      <div
        onClick={() => {
          dispatch({ type: SORT_BY_READ, payload: true });
          dispatch({ type: SORT_BY_UNREAD, payload: false });
          dispatch({ type: "FILTER_TYPE", payload: "read" });
        }}
        className={byRead ? "filterd-block" : "unfilterd-block"}
      >
        Read
      </div>
      <div
        onClick={() => {
          dispatch({ type: SORT_BY_FAVORITES, payload: !byFavorites });
        }}
        className={byFavorites ? "filterd-block" : "unfilterd-block"}
      >
        favorites
      </div>
    </div>
  );
};

export default Filters;
