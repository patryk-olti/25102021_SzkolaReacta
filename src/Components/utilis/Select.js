import React from "react";

const Select = ({ tips }) => {

    const tipsArray = tips.map(item => (
        <option value={item}>{item}%</option>
    ))

    return(
        <select>
            {tipsArray}
        </select>
    )
}

export default Select;