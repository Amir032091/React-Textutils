
import './App.css';
import Navbar from './components/Navbar'
import Alert from './components/Alert';
import React,{useState} from 'react'
import TextForm from './components/TextForm'
import About from './components/About';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';




function App() {
  const [mymode,setmymode]=useState('light');
  const [alert,setalert]=useState('null');
  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert("null")
    }
    ,1500)

  }
  
  const togglemode=()=>{
    if(mymode==="light"){
      setmymode("dark")
      document.body.style.backgroundColor="#042743";
      showAlert(": Dark Mode had been enabled!","success");
   
    }
    else{
      setmymode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light Mode had been enabled!","success");
      
      
    }
  }
  return (
    <>
    <Router>
    
   <Navbar title="Textutils" aboutText="About us" mymode={mymode} toggleMode={togglemode}/>
   <Alert alert={alert}/>
   <div className="container">
   <Routes>
          <Route exact path="/about" element={<About mymode={mymode}/>} />
          <Route exact path="/" element={<TextForm heading="Try TextUtils - word counter, character counter, lowercase to uppercase"  mymode={mymode} showAlert={showAlert} />} />
        </Routes>
 
          
    
              
            
    
    
  
        
   
     
 
        
      
   
 
   </div>
   </Router>
   </>
  );
}

export default App;
