import React from "react";

const Input = ({ type, name, placeholder, handleInput, value, text }) => {

    const styles = {
        border: '1px solid black',
        fontSize: '20px',
        padding: '5px',
        textAlign: 'center'
    }

    const onChange = (e) => {
        if(type=="radio"){
            return handleInput(value);
        }

        if(handleInput !== undefined){
            return handleInput(e.target.value);
        }
    }

    return(
        <label>
            <input 
                style={styles}
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
            {text}
        </label>

    )
}

export default Input;