import React, { useState } from "react";

const Filters = () => {
  const [unread, setUnread] = useState(false);
  const [read, setRead] = useState(false);
  const [favourites, setFavourites] = useState(false);

  return (
    <div className="filters">
      <h3>Filter By: </h3>

      <div
        onClick={() => {
          setUnread(true);
          setRead(false);
          setFavourites(false);
        }}
        className={unread ? "filterd-block" : "unfilterd-block"}
      >
        Unread
      </div>
      <div
        onClick={() => {
          setUnread(false);
          setRead(true);
          setFavourites(false);
        }}
        className={read ? "filterd-block" : "unfilterd-block"}
      >
        Read
      </div>
      <div
        onClick={() => {
          setUnread(false);
          setRead(false);
          setFavourites(true);
        }}
        className={favourites ? "filterd-block" : "unfilterd-block"}
      >
        favourites
      </div>
    </div>
  );
};

export default Filters;
