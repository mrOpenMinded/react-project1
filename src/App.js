
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light');

  const [alert1, setAlert] = useState('null');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert('null');
    }, 2000);
  }
  const handleToggle = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = "WordFinder-DarkMode"
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "WordFinder-LightMode"
    }
  }
  return (
    <>
      
        <Navbar title="Word Finder" aboutText="About" hold={mode} toggleMode={handleToggle} />
        <Alert alertV={alert1} />
        <div className="container my-3">
              <TextForm showAlert={showAlert} heading="Enter the word to Analyze" hold={mode} />
            {/* <About /> */}
        </div>
    </>


  );
}

export default App;