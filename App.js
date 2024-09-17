import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const heading = <h1> This is React Element</h1>;

//React functional Component with composition
const HeadingComponent = () => (
  <div>
    <HeadingComponentWithReturnKeyword />
    <h1> This is React functional Component without return keyword</h1>
  </div>
);

const HeadingComponentWithReturnKeyword = () => (
  <h1> This is React functional Component with return keyword</h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
