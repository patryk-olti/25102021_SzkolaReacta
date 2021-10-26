import React from "react";

const RadioInput = ({ name, handleInput, value, text, stateValue }) => {

    const styles = {
        border: '1px solid black',
        fontSize: '20px',
        padding: '5px',
        textAlign: 'center'
    }

    const onChange = (e) => {
        if(handleInput !== undefined){
            return handleInput(value);
        }
    }

    const isChecked = stateValue===value ? true : false;

    return(
        <label>
            <input 
                style={styles}
                name={name}
                type="radio"
                onChange={onChange}
                value={value}
                checked={isChecked}
            />
            {text}
        </label>
    )
}

export default RadioInput;