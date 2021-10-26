import React, { useState } from "react";

import Form from "../../Components/utilis/Form";
import RadioDiv from "../../Components/utilis/RadioDiv";
import TextArea from "../../Components/utilis/TextArea";
import Button from "../../Components/utilis/Button";
import TextInput from "../../Components/utilis/TextInput";
import RadioInput from "../../Components/utilis/RadioInput";

const UsersForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [sex, setSex] = useState("")

    const resetValues = () => {
        setName("");
        setEmail("");
        setBio("");
        setSex("");
    }

    return(
        <Form>
            <TextInput name="name" placeholder="name"  handleInput={setName} value={name}/>
            <TextInput name="email" placeholder="name"  handleInput={setEmail} value={email}/>
            <TextArea type="email" placeholder="bio" handleInput={setBio} value={bio} />
            <RadioDiv>
                <RadioInput name="sex" handleInput={setSex} value="female" text="Female" stateValue={sex} />
                <RadioInput name="sex" handleInput={setSex} value="men" text="Men" stateValue={sex} />
            </RadioDiv>
            <Button name="przelicz" handleOnClick={resetValues} />
            {console.log(name, email, bio, sex)}
        </Form>
    )
}

export default UsersForm;