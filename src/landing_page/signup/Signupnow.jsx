import React from "react";
export default function Signupnow(){
    return(
        <>
        <div className="container">
            <div className="row mb-5">
                <div className="col-6 offset-1">
                    <img src="sign.svg" alt="signup"  style={{width:"100%"}}></img>
                </div>
                <div className="col-4 ">
                    <h3>Signup now</h3>
                    <h6 style={{opacity:"0.85"}}>Or track your existing application</h6>
                    <form className="mt-4">
                        <input type="text"className="mb-4" placeholder="Enter your phone number" style={{width:"230px", height:"60px"}}></input>
                        <button type="button" class="btn btn-primary" style={{width:"300px", height:"50px"}}>Get OTP</button>
                    </form>
                    
                </div>
            </div>
        </div>
        </>
    )
}
