import React from "react";
import "../styles/wrapper.css"

function Wrapper(props) {
  return <main className="wrapper">{props.children}</main>;
}

export default Wrapper;