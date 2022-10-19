import React from "react";

const Square = (props) =>{

    return(
        <span className="square" onClick={props.onClick}>{props.value}</span>
    )
}

export default Square;