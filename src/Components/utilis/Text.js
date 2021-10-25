import React from "react";

const Text = ({ text }) => {

    const styles = {
        fontSize: '22px'
    }

    return(
        <div>
            <span style={styles}>
                obliczona cena to: {text} zł.
            </span>
        </div>
    )
}

export default Text;