import React from "react";
import ReactDOM  from "react-dom/client";


// const heading= React.createElement("div",{id:"trys"},"welcome by parcel")
const jsxHeading=<h1 id="trys">weclome using jsx</h1>
            
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(jsxHeading)
