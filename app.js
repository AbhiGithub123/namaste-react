import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return <h1>Title heading</h1>;
};

const Heading = () => {
  return (
    <div className='container'>
      {Title()}
      <Title />
      <Title></Title>
      <h2>Heading namaste</h2>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
