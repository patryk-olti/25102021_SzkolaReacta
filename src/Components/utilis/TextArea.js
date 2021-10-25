import React from "react";

const TextArea = ({ type, placeholder, handleInput, value }) => {

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
        <textarea
            style={styles}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
    )
}

export default TextArea;