import React, { useEffect, useState } from 'react'
import { MyContext } from './MyContex'


function MyProvider({children}) {
    const [next, setNext] = useState(2)
    const [name, setName] =  useState("");
    const [email, setEmail] =  useState("");
    const [phone, setPhone] =  useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [periodicy, setPeriodicy] = useState(true);
    const [arcadePrice, setArcadePrice] = useState('$9/mo');
    const [advancePrice, setAdvancePrice] = useState('$12/mo');
    const [proPrice, setProPrice] = useState('$15/mo');
    const [selectedPlan, setSelectedPlan] = useState('');
    const [selectedPrice, setSelectedPrice] = useState('');

    let hasError = false;

    const handleNext = () =>{
        const hasError = validate();
        if (!hasError){
            setNext((prev) => prev + 1);
        }
    }

    // //  this part of that code is used to to automatically change
    // the price of the selectedPlan when the user change the period
    useEffect(() =>{
        if (selectedPrice === "$9/mo"){
            setSelectedPrice("$90/yr")
        }
        else if (selectedPrice === "$90/yr"){
            setSelectedPrice("$9/mo")
        }
        else if (selectedPrice === "$12/mo"){
            setSelectedPrice("$120/yr")
        }
        else if (selectedPrice === "$120/yr"){
            setSelectedPrice("$12/mo")
        }
        else if (selectedPrice === "$15/mo"){
            setSelectedPrice("$150/yr")
        }
        else if (selectedPrice === "$150/yr"){
            setSelectedPrice("$15/mo")
        }
        else{
            setSelectedPrice("")
        }

    }, [periodicy])

    const handleSelectRadio = (planName, planPrice) =>{
        setSelectedPlan(planName)
        setSelectedPrice(planPrice)
        console.log(selectedPlan,selectedPrice);
    }

    // // this part of the code is used to handle the 
    // back control of the form
    const handleBack = () =>{
        setNext((prev)=> prev - 1);
    }

    // this part of the code is used to control the duration change of the plan

    const handPeriodChange = ()=>{
        setPeriodicy((prev)=> !prev)
        if(periodicy){
            setArcadePrice("$90/yr")
            setAdvancePrice("$120/yr")
            setProPrice("$150/yr")
        }
        else{
            setArcadePrice("$9/mo")
            setAdvancePrice("$12/mo")
            setProPrice("$15/mo")
        }
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
        arcadePrice,
        advancePrice,
        proPrice,
        handPeriodChange,
        selectedPlan,
        selectedPrice,
        handleSelectRadio,
    }

  return (
    <MyContext.Provider value={value} >
        {children}
    </MyContext.Provider>
  )
}

export default MyProvider