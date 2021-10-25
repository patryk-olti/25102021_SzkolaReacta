import React, { useState } from "react";

import Form from "../../Components/utilis/Form";
import Input from "../../Components/utilis/Input";
import TextArea from "../../Components/utilis/TextArea";

const UsersForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");

    return(
        <Form>
            <Input type="text" placeholder="name"  handleInput={setName} value={name} />
            <Input type="email" placeholder="email" handleInput={setEmail} value={email} />
            <TextArea type="email" placeholder="bio" handleInput={setBio} value={bio} />
        </Form>
    )
}

export default UsersForm;