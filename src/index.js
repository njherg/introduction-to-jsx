import React from "react";
import ReactDOM from "react-dom";

const fname = "Nestor";
const lname = "Hernandez"
var luckyNumber = Math.floor(Math.random() * 100);

ReactDOM.render(
<div>
  <h1>Hello {fname + " " + lname}</h1>
  <p>Your lucky number is {luckyNumber}</p>
</div>, document.getElementById("root"));
