import React, { useState } from "react";

import Form from "../../Components/utilis/Form";
import Div from "../../Components/utilis/Div";
import TextArea from "../../Components/utilis/TextArea";
import Button from "../../Components/utilis/Button";
import TextInput from "../../Components/utilis/TextInput";
import RadioInput from "../../Components/utilis/RadioInput";
import CheckBox from "../../Components/utilis/CheckBox";

const UsersForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [sex, setSex] = useState("");
    const [accept, setAccept] = useState(false);

    const toggleAccept = () => setAccept( prev => !prev );

    const resetValues = () => {
        setName("");
        setEmail("");
        setBio("");
        setSex("");
        setAccept(false);
    }

    return(
        <Form>
            <TextInput name="name" placeholder="name"  handleInput={setName} value={name}/>
            <TextInput name="email" placeholder="name"  handleInput={setEmail} value={email}/>
            <TextArea type="email" placeholder="bio" handleInput={setBio} value={bio} />
            <Div>
                <RadioInput name="sex" handleInput={setSex} value="female" text="Female" stateValue={sex} />
                <RadioInput name="sex" handleInput={setSex} value="men" text="Men" stateValue={sex} />
            </Div>
            <CheckBox handleInput={toggleAccept} text="accept" stateValue={accept} />
            <Button name="przelicz" handleOnClick={resetValues} />
            {console.log(name, email, bio, sex)}
        </Form>
    )
}

export default UsersForm;