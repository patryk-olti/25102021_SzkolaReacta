import React, { useState } from "react";

import Form from "../../Components/utilis/Form";
import Div from "../../Components/utilis/Div";
import TextArea from "../../Components/utilis/TextArea";
import Button from "../../Components/utilis/Button";
import TextInput from "../../Components/utilis/TextInput";
import RadioInput from "../../Components/utilis/RadioInput";
import CheckBox from "../../Components/utilis/CheckBox";

const errorArray= [
    {   visible: false,
        errorMessage: "Za krótkie imię!"   },
    {   visible: false,
        errorMessage: "Błędny email!"   },
    {   visible: false,
        errorMessage: "Brak bio!"   },
    {   visible: false,
        errorMessage: "Brak zaznaczonej płci!"   },
    {   visible: false,
        errorMessage: "Brak akceptacji regulaminu!"   },
]

const UsersForm = ({ handleClick }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [sex, setSex] = useState("");
    const [accept, setAccept] = useState(false);

    const toggleAccept = () => setAccept( prev => !prev );

    const resetValues = () => {
        let loginAccept = true;

        if(name.length === 0){
            errorArray[0].visible = true;
            loginAccept = false; 
        }else{
            errorArray[0].visible = false;
        };

        if(email.length === 0){
            errorArray[1].visible = true;
            loginAccept = false; 
        }else{
            errorArray[1].visible = false;
        };
        
        if(bio.length === 0){
            errorArray[2].visible = true;
            loginAccept = false; 
        }else{
            errorArray[2].visible = false;
        };

        if(sex.length === 0){
            errorArray[3].visible = true;
            loginAccept = false; 
        }else{
            errorArray[3].visible = false;
        };

        if(!accept){
            errorArray[4].visible = true;
            loginAccept = false; 
        }else{
            errorArray[4].visible = false;
        };

        setName("");
        setEmail("");
        setBio("");
        setSex("");
        setAccept(false);

        if(loginAccept){
            loginAccept=true;
            handleClick(true);
        }
    }

    return(
        <Form>
            <Div>
                <TextInput name="name" placeholder="name"  handleInput={setName} value={name}/>
                {errorArray[0].visible ? <div>{errorArray[0].errorMessage}</div> : null}
            </Div>
            <Div>
                <TextInput name="email" placeholder="email"  handleInput={setEmail} value={email}/>
                <span> {errorArray[1].visible ? errorArray[1].errorMessage : null} </span>
            </Div>
            <Div>
                <TextArea type="email" placeholder="bio" handleInput={setBio} value={bio} />
                <span> {errorArray[2].visible ? errorArray[2].errorMessage : null} </span>
            </Div>
            <Div>
                <RadioInput name="sex" handleInput={setSex} value="female" text="Female" stateValue={sex} />
                <RadioInput name="sex" handleInput={setSex} value="men" text="Men" stateValue={sex} />
                <span> {errorArray[3].visible ? errorArray[3].errorMessage : null} </span>
            </Div>
            <Div>
                <CheckBox handleInput={toggleAccept} text="accept" stateValue={accept} />
                <span> {errorArray[4].visible ? errorArray[4].errorMessage : null} </span>
            </Div>
            
            <Button name="przelicz" handleOnClick={resetValues} />            
        </Form>
    )
}

export default UsersForm;