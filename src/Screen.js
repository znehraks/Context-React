import React from "react";
import Header from "./Header";
import { useFns } from "./context";

const Screen = () => {
  const { logUserIn } = useFns();
  return (
    <div>
      <Header />
      <h1>First Screen</h1>
      <button onClick={logUserIn}>Log User in</button>
    </div>
  );
};
export default Screen;
