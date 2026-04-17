import React from "react";
import Nav from "../Nav";
import Signu from "./Signu";
import Signupnow from "./Signupnow";
import Invest from "./Invest";
import Steps from "./Steps";
import Benefit from "./Benefit";
import Explore from "./Explore";
import Open from "./Open";
import Footer from "../Footer";
export default function Signup(){
    return(
        <>
        <Nav/>
        <Signu/>
        <Signupnow/>
        <Invest/>
        <Steps/>
        <Benefit/>
        <Explore/>
        <Open/>
        <Footer/>
        </>
    )
 }