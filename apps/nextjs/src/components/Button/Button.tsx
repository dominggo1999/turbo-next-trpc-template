import React from "react";

const Button = () => {
  const handleClick = () => {
    console.log("Test");
  };

  return <button onClick={handleClick}>test</button>;
};

export default Button;
