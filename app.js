import React from "react";
import ReactDOM  from "react-dom/client";

//!REACT ELEMENT
// const heading= React.createElement("div",{id:"trys"},"welcome by parcel") [without jsx creating component]
const jsxHeading=<h1 id="trys" className="classgiven">weclome using jsx</h1>
//*babel is compling this code to react for understandable jsx            
// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(jsxHeading)



//!REACT COMPONENT = 1.FUNCTIONAL COMPONENT
const Heading =() => <h1>displaying by functional component</h1>
const root=ReactDOM.createRoot(document.getElementById("root"))
 root.render(<Heading/>) //this is how functional component render


 //!put inside the components CALLED AS= [COMPONENT COMPOSITION]
 const MainHeading=() => <h1>component composition</h1>
//  const BodyToDisplay =() => { return(
//     <div>
//         <MainHeading/>
//         <p>DONE</p>
//     </div>
//  )}

 //*WITHOUT RETURN REMOVE CURLY DIRECT WRITE INSIDE PARENTHESIS
 const BodyToDisplay =() => (
    <div>
        <MainHeading/>
        <p>DONE</p>
    </div>
 )
 const functionalRoot=ReactDOM.createRoot(document.getElementById("functional"))
 functionalRoot.render(<BodyToDisplay/>) 