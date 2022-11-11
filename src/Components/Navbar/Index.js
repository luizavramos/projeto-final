import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="topnav">
      <div>
        <img
          src="https://i.imgur.com/aoMUsj5.png"
          alt="logo think travel"
          className="img-logo"
        />
      </div>
      <div>
        <Link to="/">Home</Link>

        <Link to="/passagens">Passagens</Link>
        <Link to="/hoteis">Hoteis</Link>
        <Link to="/pacotes">Pacotes</Link>
      </div>
      <div>
        <Link to="/checkout">
          <img
            src="https://i.imgur.com/QFJB4DF.png"
            alt="carrinho"
            className="checkout-car"
          />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
