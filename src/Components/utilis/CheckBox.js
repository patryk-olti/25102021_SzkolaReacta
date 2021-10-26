import React from "react";

const CheckBox = ({ handleInput, text, stateValue }) => {

    const styles = {
        border: '1px solid black',
        fontSize: '20px',
        padding: '5px',
        textAlign: 'center'
    }

    const onChange = () => handleInput();

    const isChecked = stateValue ? true : false;

    return(
        <label>
            <input 
                style={styles}
                type="checkbox"
                onChange={onChange}
                checked={isChecked}
            />
            {text}
        </label>
    )
}

export default CheckBox;