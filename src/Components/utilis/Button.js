import React from "react";

const Button = ({ name, measurePrice }) => {

    const handleClick = (e) => {
        e.preventDefault();
        measurePrice();
    }
    return(
        <button onClick={handleClick}> {name} </button>
    )
}

export default Button;