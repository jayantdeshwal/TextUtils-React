
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import {useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
  
  
// }from "react-router-dom";


function App() {
  const[mode, setMode ] = useState('light');// whethe dark mode is enabled or not 
  const[alert,setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark'); 
      document.body.style.backgroundColor = '#696969';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils-DarkMode';
      setInterval(()=>{
        document.title ='TextUtuls is amazing site';
      },2000)
      setInterval(()=>{
        document.title = 'Install TextUtils Now';
      },1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title='TextUtils-Light Mode';
    }
  }


  const BlueMode = ()=> {
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#483D8B';
      showAlert("Blue mode has been enabled", "success");
      document.title='TextUtils-Blue Mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title='TextUtils-Light Mode';
    }
  }


  return (
    <>
    {/*<BrowserRouter>*/}
            <Navbar title = "TextUtils" About="About" mode= {mode}  toggleMode={toggleMode} BlueMode={BlueMode}/>
            <Alert alert={alert}/>
          <div className="container my-3">
            {/* <Routes> */}
            {/* <Route path="/about" element={<About />} />
             
              <Route path="/" element=
               */}
               {/* <About></About> */}

            <Textform showAlert={showAlert} heading = "Enter the text to analyze" mode ={mode}/>
            {/* </Routes> */}
          </div>
    {/* </BrowserRouter> */}
    </>
   
  );
}

export default App;
