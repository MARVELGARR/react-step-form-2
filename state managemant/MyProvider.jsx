import React, { useEffect, useState, useRef } from 'react'
import { MyContext } from './MyContex'
import { v4 as uuid } from 'uuid'; 

function MyProvider({children}) {
    const [next, setNext] = useState(0)
    const [name, setName] =  useState("");
    const [email, setEmail] =  useState("");
    const [phone, setPhone] =  useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [periodicy, setPeriodicy] = useState(false);
    const [period, setPeriod] = useState("monthly");
    const [per, setPer] =  useState("per month");
    const [arcadePrice, setArcadePrice] = useState('$9/mo');
    const [advancePrice, setAdvancePrice] = useState('$12/mo');
    const [proPrice, setProPrice] = useState('$15/mo');
    const [selectedPlan, setSelectedPlan] = useState('');
    const [selectedPrice, setSelectedPrice] = useState('');
    
    const [servicePrice1, setServicePrice1] = useState("+$1/mo")
    const [servicePrice2, setServicePrice2] = useState("+$2/mo")
    const [servicePrice3, setServicePrice3] = useState("+$2/mo")
    
    const [selectedService, setSelectedService] = useState( [] )
    const [totalPrice, setTotalPrice] = useState()
    
    
    const uniqueId = uuid();
    let hasError = false;
    
    const handleNext = () =>{
        const hasError = validate();
        if (!hasError){
            setNext((prev) => prev + 1);
        }
    }
    
    const calculateTotals = () =>{
        let PlanPrice = selectedPrice.replace("$","").replace("mo", "").replace("/", "")
       console.log(PlanPrice);
    }
    
    useEffect(() =>{

        calculateTotals();
    }, [selectedPrice])

    
    const handleCheckBox = (event) => {
        const { value, checked } = event.target;
        const [item, price] = value.split(', ');
        const updatedServices = checked ? [...selectedService, { item, price }] : selectedService.filter((service) => service.item !== item);
        setSelectedService(updatedServices);
        periodicy ? checked : !checked;

    };
    
    
    const calculateTotal = () => {
        let planPrice = selectedPrice.replace(/[^\d.-]/g, '');
        let servicesPrice = selectedService.reduce((total, service) => {
          const numericPrice = parseFloat(service.price.replace(/[^\d.-]/g, ''));
          return total + numericPrice;
        }, 0);
    
        let totalPrice = planPrice + servicesPrice;
        setTotalPrice(totalPrice);
    };
    

    useEffect(() => {
        calculateTotal();
    }, [selectedPrice, selectedService]);

    useEffect(() => {
        setTotalPrice(0);

        calculateTotal();

    },[periodicy])

    
    
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
        if(!periodicy){
            setArcadePrice("$90/yr")
            setAdvancePrice("$120/yr")
            setProPrice("$150/yr")
            setServicePrice1("+$10/yr")
            setServicePrice2("+$20/yr")
            setServicePrice3("+$20/yr")
            setPeriod("yearly")
            setPer("per year")
        }
        else{
            setArcadePrice("$9/mo")
            setAdvancePrice("$12/mo")
            setProPrice("$15/mo")
            setServicePrice1("+$1/mo")
            setServicePrice2("+$2/mo")
            setServicePrice3("+$2/mo")
            setPeriod("monthly")
            setPer("per month")
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
        periodicy,
        handleCheckBox,
        servicePrice1,
        servicePrice2,
        servicePrice3,
        selectedService,
        period,
        uniqueId,
        per,
        totalPrice,
    }

  return (
    <MyContext.Provider value={value} >
        {children}
    </MyContext.Provider>
  )
}

export default MyProvider