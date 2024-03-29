import React, { useState } from "react";

import Form from "../../Components/utilis/Form";
import TextInput from "../../Components/utilis/TextInput";
import Select from "../../Components/utilis/Select";
import Button from "../../Components/utilis/Button";

const RestaurantForm = ({ handleSubmit }) => {

    const tips = [0,5,10,15,20];
    const tax = 5;

    const [ netto, setNetto ] = useState(0);
    const [ tip, setTip ] = useState(0);

    const measurePrice = () => {
        let price = Number(netto) + (Number(netto)*(Number(tip)/100));
        price = Math.floor(price * (1+Number(tax)/100));
        handleSubmit(price);
    }

    return(
        <Form>
            <TextInput placeholder="netto" handleInput={setNetto} value={netto} />
            <Select tips={tips} handleInput={setTip} value={tip} />
            <Button name="Przelicz" handleOnClick={measurePrice} />
        </Form>
    )
}

export default RestaurantForm;