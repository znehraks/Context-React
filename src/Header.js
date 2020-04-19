import React, { useContext } from "react";
import { useUser } from "./context";

const Header = () => {
  const { name, loggedIn } = useUser();
  return (
    <header>
      <a href="#">Home</a>Hello, {name}!, you are{" "}
      {loggedIn ? "logged in" : "not logged in"}
    </header>
  );
};

export default Header;
