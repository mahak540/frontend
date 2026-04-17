import React from "react"; 
export default function Explore(){
    return(
        <>
        <h3 style={{textAlign:"center",opacity:0.85}} className="p-5 mb-5">Explore different account types</h3>
        <div className="container">
            <div id="accordion">

  <div class="card">
    <div class="card-header">
      <a class="btn" data-bs-toggle="collapse" href="#collapseOne">
       What is a Zerodha account?
      </a>
    </div>
    <div id="collapseOne" class="collapse show" data-bs-parent="#accordion">
      <div class="card-body">
        A Zerodha account is a combined demat and trading account that allows investors to buy, sell, and hold securities digitally.
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header">
      <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseTwo">
        What documents are required to open a demat account?
      </a>
    </div>
    <div id="collapseTwo" class="collapse" data-bs-parent="#accordion">
      <div class="card-body">
        The following documents are required to open a Zerodha account online:

        <p>PAN number</p>
        <p>Adhaar Card (Linked with a phone number for OTP verification)</p>
        <p>Cancelled cheque or bank account statement (To link your bank account)</p>
        <p>Income proof (Required only if you wish to trade in Futures & options)</p>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header">
      <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseThree">
       Is Zerodha account opening free?
      </a>
    </div>
    <div id="collapseThree" class="collapse" data-bs-parent="#accordion">
      <div class="card-body">
        Yes, It is completely free.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header">
      <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseFour">
        Are there any maintenance charges for a demat account?
      </a>
    </div>
    <div id="collapseFour" class="collapse" data-bs-parent="#accordion">
      <div class="card-body">
        <p>The account maintenance charges is applicable based on the account type.</p>
        <p>For Basic Services Demat Account: Zero charges if the holding value is less than ₹4,00,000.</p>
        <p>For non-Basic Services Demat Account demat accounts: ₹300 per year + GST.</p>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header">
      <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseFive">
         Can I open a demat account without a bank account?
      </a>
    </div>
    <div id="collapseFive" class="collapse" data-bs-parent="#accordion">
      <div class="card-body">
       <p>To open a demat account, you must have a bank account in your name.</p>
        <p>If UPI verification is completed successfully, no proof of bank is needed. However, if bank verification fails, you'll need to provide either a cancelled cheque or a bank statement to link your bank account to Zerodha.</p>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header">
      <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseSix">
       What is a Basic Services Demat Account (BSDA)?
      </a>
    </div>
    <div id="collapseSix" class="collapse" data-bs-parent="#accordion">
      <div class="card-body">
        <p>BSDA is a demat account designed for retail investors with smaller holdings. It automatically applies if you have only one demat account per PAN and holdings of up to ₹10 lakhs in it. You will not be charged any Account Maintenance Charge (AMC) for holdings up to ₹4 lakhs value, and only ₹25/quarter if holdings are between ₹4 lakhs and ₹10 lakhs.</p>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header">
      <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseSeven">
       Can I open a demat and trading account using the mobile app?
      </a>
    </div>
    <div id="collapseSeven" class="collapse" data-bs-parent="#accordion">
      <div class="card-body">
        <p>Yes, You can open a demat and trading account completely online using the Zerodha Kite mobile app, available on Android and iOS.</p>
      </div>
    </div>
  </div>

</div>
        </div>
        </>
    )
}