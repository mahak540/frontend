import React from "react";
import Nav from "../Nav";
import AboutHero from "./AboutHero";
import Popular from "./Popular";
import People from "./People";
import Footer from "../Footer";
export default function About(){
    return(
        <>
        <Nav/>
        <AboutHero/>
        <Popular/>
        <People/>
        <Footer/>
        </>
    )
}