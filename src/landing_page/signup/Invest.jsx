import React from "react";
export default function Invest(){
    return(
        <>
         <h3 style={{textAlign:"center"}} className="p-5 mb-5">Investment options with Zerodha demat account</h3>
        <div className="container mb-5">
           
            <div className="row mb-5" style={{textAlign:"center"}}>
                <div className="col-4 offset-1" style={{display:"flex"}}>
                    <div className="col-6">
                        <img src="st.svg" alt="st" style={{width:"100px"}} ></img>
                    </div>
                    <div className="col-6">
                        <h4>Stocks</h4>
                        <p style={{opacity:0.85}}>Invest in all exchange-listed securities</p>
                    </div>
                </div>
                <div className="col-6" style={{display:"flex"}}>
                    <div className="col-6"> 
                        <img src="mutualfund.svg" alt="mutualfuns" style={{width:"100px"}}></img>
                    </div>
                    <div className="col-6">
                        <h4>Mutual funds</h4>
                    <p style={{opacity:0.85}}>Invest in commission-free direct mutual funds</p>
                    </div>
                </div>
            </div>
            <div className="row" style={{textAlign:"center"}}>
                <div className="col-4 offset-1" style={{display:"flex"}}>
                    <div className="col-6">
                        <img src="ipo.svg" alt="ipo" style={{width:"100px"}}></img>
                    </div>
                    <div className="col-6">
                        <h4>IPO</h4>
                    <p style={{opacity:0.85}}>Apply to the latest IPOs instantly via UPI</p>
                    </div>
                </div>
                <div className="col-6" style={{display:"flex"}}>
                    <div className="col-6">
                        <img src="future.svg" alt="future" style={{width:"100px"}}></img>
                    </div>
                    <div className="col-6">
                        <h4>Futures & options</h4>
                        <p style={{opacity:0.85}}>Hedge and mitigate market risk through simplified F&O trading</p>
                    </div>
                </div>
                
            </div>
            <button type="button" className="btn btn-primary" style={{width:"200px", height:"50px"}}>Explore Investments</button>
        </div>
        </>
    )
}
