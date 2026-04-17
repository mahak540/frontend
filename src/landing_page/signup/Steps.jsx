import React from "react";
export default function Steps(){
    return(
        <>
        <div className="container">
            <h3 style={{textAlign:"center",opacity:0.87}} className="p-5">Steps to open a demat account with Zerodha</h3>
            <div className="row mb-5">
                <div className="col-5 offset-1">
                    <img src="yt.svg" alt="yt" ></img>
                </div>
                <div className="col-5">
                    <div className="mb-4">
                        <h5>01  Enter the requested details</h5>
                    </div>
                    <hr></hr>
                    <div className="mb-4">
                        <h5>02  Complete e-sign & verification</h5>
                    </div>
                    <hr></hr>
                    <div className="mb-4">
                        <h5>03  Start investing!</h5>
                    </div>
                    <hr></hr>
                </div>
            </div>
        </div>
        </>
    )
}
