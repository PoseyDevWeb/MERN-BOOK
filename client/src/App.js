import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { UidContext } from "./components/AppContext";

import AddBook from "./components/add-books.component";
import Book from "./components/book.component";
import BooksList from "./components/books-list.component";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import axios from "axios";
//import Logout from "./components/Logout";
//import IndexUser from "./components/index.user";

const App = () => {
  const [uid, setUid] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true,
      })
        .then((res) => {
          setUid(res.data);
        })
        .catch((err) => console.log("no Token"));
    };
    fetchToken();
  }, [uid]);

  return (
    //<div className="container mt-3">
    <UidContext.Provider value={uid}>
      <Routes>
        <Route path="/" exact element={<SignInForm />} />
        <Route path="/books" exact element={<BooksList />} />
        <Route path="/add" exact element={<AddBook />} />
        <Route path="/books/:id" exact element={<Book />} />
        <Route path="/signUp" exact element={<SignUpForm />} />
        <Route path="/signIn" exact element={<SignInForm />} />
      </Routes>
    </UidContext.Provider>
    //</div>
  );
};

export default App;
