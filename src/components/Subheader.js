import React from "react";

const spanStyle = { color: "grey" }

function Subheader(props) {
    return ( <p>{props.company} | <span style={spanStyle}>{props.date}</span></p> )
}

export default Subheader;