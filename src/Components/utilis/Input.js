import React from "react";

const Input = ({ type, placeholder, handleInput }) => {

    const styles = {
        border: '1px solid black',
        fontSize: '20px',
        padding: '5px',
        textAlign: 'center'
    }

    const onChange = (e) => {
        handleInput(e.target.value)
    }

    return(
        <input 
            style={styles}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
        />
    )
}

export default Input;