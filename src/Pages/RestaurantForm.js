import React from "react";

import Form from "../Components/utilis/Form";
import Input from "../Components/utilis/Input";
import Select from "../Components/utilis/Select";

const RestaurantForm = () => {

    const tips = [5,10,15,20];

    return(
        <Form>
            <Input type="number" placeholder="netto"/>
            <Select tips={tips} />
        </Form>
    )
}

export default RestaurantForm;