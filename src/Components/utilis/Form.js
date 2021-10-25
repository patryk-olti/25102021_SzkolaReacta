import React from "react";

const Form = ({ children }) => {

    const styles = {
        display: 'flex',
        flexDirection: 'column',
        width: '200px'
    }

    return(
        <form style={styles} >
            {children}
        </form>
    )
}

export default Form;