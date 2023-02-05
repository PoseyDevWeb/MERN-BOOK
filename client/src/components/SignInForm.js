import React, { useState } from "react";
import axios from "axios";
import BooksList from "./books-list.component";
import { Link } from "react-router-dom";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formSubmit, setFormSubmit] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");

    axios({
      method: "post",
      url: `http://localhost:5000/api/users/login`,
      withCredentials: true,
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        if (res.data.errors) {
          emailError.innerHTML = res.data.errors.email;
          passwordError.innerHTML = res.data.errors.password;
        } else {
          window.location = "/books";
          setFormSubmit(true);
          //<BooksList />;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div>
        {/*<nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/books"} className="navbar-brand">
            BookShop
          </Link>
        </nav>*/}

        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link to={"#"} className="navbar-brand">
              BookShop
            </Link>
          </nav>
          <br />
          <br />
          <div className="submit-form ">
            <form action="" onSubmit={handleLogin} id="sign-up-form">
              <br />
              <br />
              <br />
              <div className="form-group">
                <label htmlFor="email"> Email</label>
                <br />
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <div className="email error"></div>
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="password"> Mot de passe</label>
                <br />
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <div className="password error"></div>
              </div>
              <br />
              <br />
              <input type="submit" value="Se Connecter" className="submit" />
            </form>
            <Link to={"/signUp"} className="nav-link">
              Vous etes deja Inscrits ? Inscrivez-Vous !
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInForm;
