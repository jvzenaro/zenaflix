import React from "react";
import Logo from "../../assets/img/logo.svg";
import "./Menu.css";
import Button from "../Button";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img src={Logo} className="Logo" alt="Zenaflix Logo" />
      </a>

      <Button as="a" className="ButtonLink" href="/">
          Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
