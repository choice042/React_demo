import React from "react";
import ReactDOM from "react-dom";

const Title = <h1>Namaste React </h1>;

const AppLayout = (props) => {
  return (
    <div>
      <Title />
      Hello world
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Title);
