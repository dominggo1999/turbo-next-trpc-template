import React from "react";

const Button = () => {
  const handleClick = () => {
    console.log("Hello world");
  };

  return <button onClick={handleClick}>test</button>;
};

export default Button;
