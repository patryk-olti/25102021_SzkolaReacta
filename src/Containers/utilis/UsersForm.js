import React, { useState } from "react";

import Form from "../../Components/utilis/Form";
import Input from "../../Components/utilis/Input";
import RadioDiv from "../../Components/utilis/RadioDiv";
import TextArea from "../../Components/utilis/TextArea";

const UsersForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [sex, setSex] = useState("")

    return(
        <Form>
            <Input type="text" placeholder="name"  handleInput={setName} value={name} />
            <Input type="email" placeholder="email" handleInput={setEmail} value={email} />
            <TextArea type="email" placeholder="bio" handleInput={setBio} value={bio} />
            <RadioDiv>
                <Input type="radio" name="sex" handleInput={setSex} value="men" text="Men" />
                <Input type="radio" name="sex" handleInput={setSex} value="female" text="Female" />
            </RadioDiv>
            {console.log(name, email, bio, sex)}
        </Form>
    )
}

export default UsersForm;