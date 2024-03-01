import React from "react";
import ReactDOM  from "react-dom/client";

const numbers=1000;
//!REACT COMPONENT = 1.FUNCTIONAL COMPONENT
 //!put inside the components CALLED AS= [COMPONENT COMPOSITION]
 const MainHeading=() => <h1>component composition</h1>
 //*WITHOUT RETURN REMOVE CURLY DIRECT WRITE INSIDE PARENTHESIS
 const reactElement=<p>react element</p> //react element
 const BodyToDisplay =() => (
    <div>
        {/*COMPONENT CAN CALL COMPONENT INSIDE BY JUST TAGS AND CLOSE METHOD 1 */}
        <MainHeading/>

         {/*COMPONENT CAN CALL COMPONENT INSIDE BY CALLING FUCTION NAME METHOD 2*/}
         {MainHeading()}

         {/* ELEMENT CAN CALL INSIDE COMPOINET BY JUST INSIDE CURLY BRACES LIKE HJS CODE */}
        {reactElement}
        
        {/* BY PUTTING INSIDE CURLY WE CAN WRITE JS CODE */}
        {numbers} 
        <h1>{console.log("writed through log")}</h1>
        <p>DONE</p>
    </div>
 )
 const functionalRoot=ReactDOM.createRoot(document.getElementById("functional"))
 functionalRoot.render(<BodyToDisplay/>) 