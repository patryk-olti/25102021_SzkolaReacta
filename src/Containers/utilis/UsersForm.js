import React, { useState } from "react";

import Form from "../../Components/utilis/Form";
import Input from "../../Components/utilis/Input";

const UsersForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");


    return(
        <Form>
            <Input type="text" placeholder="name"  handleInput={setName} value={name} />
            <Input type="email" placeholder="email" handleInput={setEmail} value={email} />
        </Form>
    )
}

export default UsersForm;