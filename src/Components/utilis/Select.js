import React from "react";

const Select = ({ tips, handleInput, value }) => {

    const tipsArray = tips.map(item => (
        <option key={item} value={item}>{item}%</option>
    ))

    const onChange = (e) => {
        handleInput(e.target.value);
    }

    return(
        <select onChange={onChange} value={value} >
            {tipsArray}
        </select>
    )
}

export default Select;