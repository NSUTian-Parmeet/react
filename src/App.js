// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import logo from './logo.svg';
import Navbar from './components/Navbar';
import Textforms from './components/Textforms';
// import About from './components/About';
import Alert from './components/Alert';
import './App.css';
import React, { useState }  from 'react'

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }
  
  let toggleMode = () => {
      if(mode === 'light'){
        setmode('dark');
        document.body.style.backgroundColor = "#495057";
        document.body.style.color = "white";
        showAlert("Dark mode has been enabled", "success");
        document.title = "Textutils dark"

        // setInterval(() => {
        //   document.title = "Textutils is an amazing website";
        // }, 2000);
        // setInterval(() => {
        //   document.title = "Install Textutils now";
        // }, 1500);
      }
      else{
        setmode('light');
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        showAlert("Light mode has been enabled", "success");
        document.title = "Textutils light"
      }
  }
  return (
    <>
      <Navbar title="Textutils2" aboutText="About Textutils" mode={mode} toggleMode={toggleMode}/>
      {/* <Navbar /> */}
      <Alert alert={alert}/>
      <div className="container">
      <Textforms showAlert={showAlert} heading="Enter the text to analyze below"/>
      {/* <About/> */}
    </div>
      

    {/* <Router>
  <Navbar title="Textutils2" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Routes>
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/" element={<Textforms heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />} />
      </Routes>
    </Router> */}

    </>
  );
}

export default App;

