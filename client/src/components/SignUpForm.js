import axios from "axios";
import React, { useState } from "react";
import SignInForm from "./SignInForm";
import { Link } from "react-router-dom";
//import axios from "axios";

const SignUpForm = () => {
  const [formSubmit, setFormSubmit] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [controlPassword, setControlPassword] = useState("");
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  //const [isAdmin, setIsAdmin] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const terms = document.getElementById("terms");
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");
    const passwordConfirmError = document.querySelector(
      ".password-confirm.error"
    );
    const firstnameError = document.querySelector(".firstname.error");
    const lastnameError = document.querySelector(".lastname.error");
    const termsError = document.querySelector(".terms.error");

    passwordConfirmError.innerHTML = "";
    termsError.innerHTML = "";

    if (password !== controlPassword || !terms.checked) {
      if (password !== controlPassword)
        passwordConfirmError.innerHTML =
          " les Mots de passes ne sont pas identiques";

      if (!terms.checked)
        termsError.innerHTML = " Veuillez les conditions generales";
    } else {
      await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}api/users/register`,
        data: {
          email,
          password,
          firstname,
          lastname,
        },
      })
        .then((res) => {
          if (res.data.errors) {
            emailError.innerHTML = res.data.errors.email;
            passwordError.innerHTML = res.data.errors.password;
            firstnameError.innerHTML = res.data.errors.firstname;
            lastnameError.innerHTML = res.data.errors.lastname;
          } else {
            setFormSubmit(true);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/books"} className="navbar-brand">
            BookShop
          </Link>
        </nav>
        <br />
        <br />
        <br />
        {formSubmit ? (
          <>
            <SignInForm />
            <span></span>
            <h4 className="succes">
              {" "}
              Inscription Reussie, Vueillez-vous connecter
            </h4>
          </>
        ) : (
          <div className="submit-form ">
            <form action="" onSubmit={handleRegister} id="sign-up-form">
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
              <br />
              <label htmlFor="password"> Mot de passe</label>
              <br />
              <input
                type="password"
                name="password"
                className="form-control"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <div className="password error"></div>
              <br />
              <label htmlFor="password-conf"> Confirmer mot de passe</label>
              <br />
              <input
                type="password"
                name="password"
                className="form-control"
                id="password-conf"
                onChange={(e) => setControlPassword(e.target.value)}
                value={controlPassword}
              />
              <div className="password-confirm error"></div>
              <br />
              <label htmlFor="firstname"> Prenom</label>
              <br />
              <input
                type="text"
                name="firstname"
                className="form-control"
                id="firstname"
                onChange={(e) => setFirstname(e.target.value)}
                value={firstname}
              />
              <div className="firstname error"></div>
              <br />
              <label htmlFor="lastname"> Nom de famille</label>
              <br />
              <input
                type="text"
                name="lastname"
                className="form-control"
                id="lastname"
                onChange={(e) => setLastname(e.target.value)}
                value={lastname}
              />
              <div className="lastname error"></div>
              <br />
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">
                {" "}
                J'accepte les{" "}
                <a href="/" target="_blank" rel="noopener noreferrer">
                  {" "}
                  conditions génerales{" "}
                </a>
              </label>
              <div className="terms error"></div>
              <br />
              <input type="submit" value=" Valider Inscription" />
            </form>

            <Link to={"/signIn"} className="nav-link">
              Vous avez deja un compte ? Connectez-vous! !
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default SignUpForm;
