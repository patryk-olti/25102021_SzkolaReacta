import React from "react";

const TextInput = ({ name, placeholder, handleInput, value }) => {

    const styles = {
        border: '1px solid black',
        fontSize: '20px',
        padding: '5px',
        textAlign: 'center'
    }

    const onChange = (e) => {
        if(handleInput !== undefined){
            return handleInput(e.target.value);
        }
    }

    return(
        <input 
            style={styles}
            name={name}
            type="text"
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
    )
}

export default TextInput;