import React from "react";

function ReactFunction() {
  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <div>
      <p onClick={handleClick}>Hello world!</p>
    </div>
  );
}

export default ReactFunction;
