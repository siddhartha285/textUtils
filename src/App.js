
import React ,{useState} from 'react';

import './App.css';
import Navbar from './compnonents/Navbar';
import TextForm from './compnonents/TextForm';
import Alert from './compnonents/Alert';
import About from './compnonents/About';
import{
  BrowserRouter as Router,
  Routes,
  Route,

}from "react-router-dom";

function App() {
  const[mode,setMode]=useState({
    m:'light',
    theme:'light'
  });

  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{setAlert(null);},1400);
  }
  const toggleBlueMode=()=>{
    if(mode.theme==='light')
    {
      setMode({
        m:'dark',
        theme:'blue'
      });
      document.body.style.backgroundColor='#176B87';
      showAlert("Blue Mode Enabled!!",'success');
    }
    else
    {
      setMode({
        m:'light',
        theme:'light'
      });
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Enabled!!",'success');
    }
  }

  const toggleGreyMode=()=>{
    if(mode.theme==='light')
    {
      setMode({
        m:'dark',
        theme:'grey'
      });
      document.body.style.backgroundColor='#526D82';
      showAlert("Grey Mode Enabled!!",'success');
    }
    else
    {
      setMode({
        m:'light',
        theme:'light'
      });
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Enabled!!",'success');
    }
  }

  const toggleDarkMode=()=>{
    if(mode.theme==='light')
    {
      setMode({
        m:'dark',
        theme:'dark'
      });
      document.body.style.backgroundColor='black';
      showAlert("Dark Mode Enabled!!",'success');
    }
    else
    {
      setMode({
        m:'light',
        theme:'light'
      });
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Enabled!!",'success');
    }
  }
  return (
    <>
      <Router>
          <Navbar
            title="TextUtils"
            mode={mode}
            toggleDarkMode={toggleDarkMode}
            toggleBlueMode={toggleBlueMode}
            toggleGreyMode={toggleGreyMode}
          />
          <Alert alert={alert}/>
          <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About/>}></Route>
            <Route exact path="/" element={ <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}></Route>
          </Routes>
              
            
          </div>
      </Router>

         
          
    </>

  );
}

export default App;
