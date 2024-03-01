import React from "react";
import ReactDOM  from "react-dom/client";

//!REACT ELEMENT
// const heading= React.createElement("div",{id:"trys"},"welcome by parcel")
const jsxHeading=<h1 id="trys" className="classgiven">weclome using jsx</h1>
//*babel is compling this code to react for understandable jsx            

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(jsxHeading)

