import React from "react";

const Button = ({ name, handleOnClick }) => {

    const handleClick = (e) => {
        e.preventDefault();
        handleOnClick();
    }
    return(
        <button onClick={handleClick}> {name} </button>
    )
}

export default Button;