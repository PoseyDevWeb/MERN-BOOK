import axios from "axios";
import React from "react";
//import cookies from "js-cookie";

const Logout = () => {
  /*const removeCookie = (key) => {
    if (window !== "undefined") {
      cookies.remove(key, { expire: 1 });
    }
  };

  const logout = async () => {
    await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}api/user/logout`,
      withCredentials: true,
    })
      .then(() => removeCookie("jwt"))
      .catch((err) => console.log(err));

    window.location = "/";
  };
  return (
    <li onClick={logout}>
      <img src="./img/icons/logout.svg" alt="logout" />
    </li>
  );*/
};

export default Logout;
