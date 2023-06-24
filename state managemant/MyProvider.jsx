import React, { useState } from 'react'
import { MyContext } from './MyContex'


function MyProvider({children}) {
    const [next, setNext] = useState(1)
    const [name, setName] =  useState("");
    const [email, setEmail] =  useState("");
    const [phone, setPhone] =  useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [periodicy, setPeriodicy] = useState(true);


    let hasError = false;

    const handleNext = () =>{
        const hasError = validate();
        if (!hasError){
            setNext((prev) => prev + 1);
            console.log(next)
        }
    }
    const handleBack = () =>{
        setNext((prev)=> prev - 1);
    }

    const handPeriodChange = ()=>{
        setPeriodicy((prev)=> !prev)
    }

    const handleNameError = (message) => {
        setNameError(message)
    }
    const handleEmialError = (message) => {
        setEmailError(message)
    }
    const handlePhoneError = (message) => {
        setPhoneError(message)
    }
    
    
    
    const validate = () =>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const Plength = 11;

        if (name.trim() === ""){
            handleNameError("Please Enter Your Name");
            hasError = true;
            
        }
        else{
            handleNameError("")
        }

        if (email.trim() ===""){
            handleEmialError("Please Enter your email address")
            hasError = true;

        }
        else if (!emailRegex.test(email)){
            handleEmialError("Email not complete");
            hasError = true;
        }
        else{
            handleEmialError("");

        }
        if (phone.trim() ===""){
            handlePhoneError("Please Enter your Phone number")
            hasError = true;
        }
        else if (phone.trim().length < Plength){
            handlePhoneError("Yor phone number is not complete")
            hasError = true;
        }
        else{
            handlePhoneError("")

        }
        return hasError;
    }

    const value ={
        handleNext,
        next,
        name,
        nameError,
        setNameError,
        email,
        emailError,
        setEmailError,
        phone,
        phoneError,
        setPhoneError,
        validate,
        setName,
        setEmail,
        setPhone,
        handleBack,
        periodicy,
        setPeriodicy,
        handPeriodChange
    }

  return (
    <MyContext.Provider value={value} >
        {children}
    </MyContext.Provider>
  )
}

export default MyProvider