// import { useState } from "react"
import React from "react"

function FormWithState() {

    const [formData, setFormData] = React.useState({
        firstName:"Omar",
        secondName:"Ayman",
        email:"example@example"
    });



    function firstNameChange(e) {
        setFormData({...formData,firstName:e.target.value});
    
    }
    function secondNameChange(e) {
        setFormData({...formData,secondName:e.target.value});
    
    }
    function emailChange(e) {
      
        setFormData({...formData,email:e.target.value});
    }


    return (
        <>
            <label>First Name</label>
            <input value={formData.firstName} onChange={firstNameChange} /><br />

            <label >Second Name</label>
            <input value={formData.secondName} onChange={secondNameChange} /><br />

            <label >Email</label>
            <input value={formData.email} onChange={emailChange} /><br /> 

            <h3>Your name is: <code>{formData.firstName} {formData.secondName} </code>and your email is <code>{formData.email}</code></h3>

            <button onClick={() => {
                setFormData({
                    firstName:"",
                    secondName:"",
                    email:""
                });
            }} >Reset</button>
        </>
    )
}
export default FormWithState