
import React from 'react'

export default function About(props) {
    
    const myStyle={
      color:props.mymode==="dark"?"white":"#042743",
      backgroundColor:props.mymode==="dark"?"rgb(36 74 1104)":"white",
      }
    
    
  return (
    <div className='container my-3'>
        <h1 className='py-3' style={{color:props.mymode==="dark"?"white":"#042743"}}>About Us</h1>
    <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze Your Text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        Textutils provides facility to analyze your text.It helps you in different ways that  You can convert your text into UpperCase,L owerCase,CapitalizeCase and clear text etc.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free To Use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
       Textutils is completely free to use. You have no need to pay anything to use the textutils. So, come and use the textutils as you want.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        Textutils is browser compatible  application that you can use it any browser. You can use it on mozilla Firefox, Safari, Chrome etc.
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
