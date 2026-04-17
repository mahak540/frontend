import React from "react";
export default function Benefit(){
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-6 p-5">
                    <img src="benfit.svg" style={{width:"400px" , height:"50vh"}}></img>
                    <h5 style={{opacity:0.87}}>Benefits of opening a Zerodha demat account</h5>
                </div>
                <div className="col-6">
                    <div className="mb-5">
                        <h5 className="mb-4">Unbeatable pricing</h5>
                        <p style={{opacity:0.87}}>Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.</p>
                    </div>
                    <div className="mb-5">
                        <h5 className="mb-4">Best investing experience</h5>
                        <p style={{opacity:0.87}}>Simple and intuitive trading platform with an easy-to-understand user interface.</p>
                    </div>
                    <div className="mb-5">
                        <h5 className="mb-4">No spam or gimmicks</h5>
                        <p style={{opacity:0.87}}>Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.</p>
                    </div>
                    <div className="mb-5">
                        <h5 className="mb-4">The Zerodha universe</h5>
                        <p style={{opacity:0.87}}>More than just an app — gain free access to the entire ecosystem of our partner products.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}