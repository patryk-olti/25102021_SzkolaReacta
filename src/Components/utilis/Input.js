import React from "react";

const Input = ({ type, placeholder }) => {

    const styles = {
        border: '1px solid black',
        fontSize: '20px',
        padding: '5px'
    }

    return(
        <input 
            style={styles}
            type={type}
            placeholder={placeholder}
        />
    )
}

export default Input;