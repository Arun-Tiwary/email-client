import axios from "axios";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_DATA } from "./actions/action1";

const ContextPovider = () => {
  const data = useSelector((state) => state.emailData);
  const dispatch = useDispatch();

  const fetchData = async () => {
    const {
      data: { list },
    } = await axios.get("https://flipkart-email-mock.now.sh/");
    // setDataLog(list);
    dispatch({ type: ADD_DATA, payload: { emailData: list } });
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return <div></div>;
};

export default ContextPovider;
