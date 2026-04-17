import React from "react";

import Signu from "./Signu";
import Signupnow from "./Signupnow";
import Invest from "./Invest";
import Steps from "./Steps";
import Benefit from "./Benefit";
import Explore from "./Explore";
import OpenAccount from "./OpenAccount";
import Footer from "../Footer";
export default function Signup(){
    return(
        <>
       
        <Signu/>
        <Signupnow/>
        <Invest/>
        <Steps/>
        <Benefit/>
        <Explore/>
        <OpenAccount/>
        <Footer/>
        </>
    )
 }
