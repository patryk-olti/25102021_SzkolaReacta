import React, { useState } from "react";

import Form from "../../Components/utilis/Form";
import Input from "../../Components/utilis/Input";
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
            <Input type="number" placeholder="netto" handleInput={setNetto} />
            <Select tips={tips} handleInput={setTip} />
            <Button name="Przelicz" measurePrice={measurePrice} />
        </Form>
    )
}

export default RestaurantForm;