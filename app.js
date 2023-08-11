import React from "react";
import ReactDOM from "react-dom/client";

const heading=React.createElement("div",{id:"parent"},[React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag")]);
    console.log(heading);
    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);