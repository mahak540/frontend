import React from "react";
export default function People(){
    return(
        <>
        <div className="container mb-4">
            <h2 style={{textAlign:"center"}} className="mb-5 fs-2">People</h2>
            <div className="row mb-5">
                <div className="col-6 mb-5 "style={{textAlign:"center"}}>
                    <img src="ceo.jpg" className="card-img-top rounded-circle p-2" style={{width:"300px"}}></img>
                    <h4 className="fs-5">Nithin Kamath</h4>
                    <p style={{opacity:"0.90"}}>Founder and CEO</p>
                </div>
                <div className="col-6 fs-5" >
                    <p style={{opacity:"0.85"}}>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p style={{opacity:"0.85"}}>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p style={{opacity:"0.85"}}>Playing basketball is his zen.</p>
                </div>
            </div>
            <div className="row mb-5" style={{textAlign:"center"}}>
                <div className="col-4" >
                    <img className="card-img-top rounded-circle p-2" src="cfo.jpg" alt="Card image" style={{ width: "300px" }}></img>
                    <div className="card-body">
                        <h4 className="card-title">Nikhil Kamath</h4>
                        <p className="card-text">Co-founder & CFO</p>
                        <div className="dropdown">
                            <button type="button" className="dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#cfo">
                                Bio
                            </button>
                             <div id="cfo" class="collapse">
                                <p>Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess.</p>
                               
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="col-4" >
                    <img className="card-img-top rounded-circle p-2" src="cto.jpg" alt="Card image" style={{ width: "300px" }}></img>
                    <div className="card-body">
                        <h4 className="card-title">Dr. Kailash Nadh</h4>
                        <p className="card-text">CTO</p>
                        <div className="dropdown">
                            <button type="button" className="dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#cto">
                                Bio
                            </button>
                             <div id="cto" class="collapse">
                                <p>Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day.</p>
                               
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <img className="card-img-top rounded-circle p-2" src="coo.jpg" alt="Card image" style={{ width: "300px" }}></img>
                    <div className="card-body">
                        <h4 className="card-title">Venu Madhav</h4>
                        <p className="card-text">COO</p>
                        <div className="dropdown">
                            <button type="button" className="dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#coo">
                                Bio
                            </button>
                            <div id="coo" class="collapse">
                                <p>Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis. Workouts, cycling, and adventuring is what he does outside of Zerodha.</p>
                               
                            </div> 
                        </div>
                    </div>
                </div>
            </div>

             <div className="row" style={{textAlign:"center"}}>
                <div className="col-4" >
                    <img className="card-img-top rounded-circle p-2" src="director.jpg" alt="Card image" style={{ width: "300px" }}></img>
                    <div className="card-body">
                        <h4 className="card-title">Seema Patil</h4>
                        <p className="card-text">Director</p>
                        <div className="dropdown">
                            <button type="button" className="dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#dc">
                                Bio
                            </button>
                              <div id="dc" class="collapse">
                                <p>Seema who has lead the quality team since the beginning of Zerodha, is now a director. She is an extremely disciplined fitness enthusiast.</p>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <img className="card-img-top rounded-circle p-2" src="coe.jpg" alt="Card image" style={{ width: "300px" }}></img>
                    <div className="card-body">
                        <h4 className="card-title">Karthik Rangappa</h4>
                        <p className="card-text">Chief of Education</p>
                        <div className="dropdown">
                            <button type="button" className="dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#coe">
                                Bio
                            </button>
                            <div id="coe" class="collapse">
                                <p >Karthik "Guru" Rangappa single handledly wrote Varsity, Zerodha's massive educational program. He heads investor education initiatives at Zerodha and loves stock markets, classic rock, single malts, and photography.</p>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <img className="card-img-top rounded-circle p-2" src="ds.jpg" alt="Card image" style={{ width: "300px" }}></img>
                    <div className="card-body">
                        <h4 className="card-title">Austin Prakesh</h4>
                        <p className="card-text">Director Strategy</p>
                        <div className="dropdown">
                            <button type="button" className="dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#ds">
                                Bio
                            </button>
                            <div id="ds" class="collapse">
                                <p>Austin is a successful self-made entrepreneur from Singapore. His area of specialty revolves around helping organisations including grow by optimizing revenue streams and creating growth strategies. He is a boxing enthusiast and loves collecting exquisite watches.</p>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}