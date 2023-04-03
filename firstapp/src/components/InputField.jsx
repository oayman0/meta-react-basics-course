import { useState } from "react"

function InputField() {

    const [firstNameField, setFirstNameField] = useState("");
    const [secondNameField, setSecondNameField] = useState("");
    const [emailField, setEmailField] = useState("");

    function firstNameChange(e) {
        setFirstNameField(e.target.value)
    }
    function secondNameChange(e) {
        setSecondNameField(e.target.value)
    }
    function emailChange(e) {
        setEmailField(e.target.value)
    }
    return (
        <>
            <label>First Name</label>
            <input value={firstNameField} onChange={firstNameChange} /><br />

            <label >Second Name</label>
            <input value={secondNameField} onChange={secondNameChange} /><br />

            <label >Email</label>
            <input value={emailField} onChange={emailChange} /><br /> 

            <h3>Your name is: <code>{firstNameField} {secondNameField} </code>and your email is <code>{emailField}</code></h3>

            <button onClick={() => {
                setFirstNameField("");
                setSecondNameField("");
                setEmailField("")
            }} >Reset</button>
        </>
    )
}
export default InputField