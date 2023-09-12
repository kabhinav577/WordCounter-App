// main app
import { useState } from "react";
import Alert from "./Alert";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import TextForm from "./TextForm";

function App() {
  const [mode, setMode] = useState("light"); // whether dark Mode is Enabled or Not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
  })
  setTimeout(()=> {
    setAlert(null);  // for Alert are dissmissed auto 
  }, 1500);
  }


  const toggleMode = (cls) => {
    // console.log(cls)
    // document.body.classList.add('bg-'+cls)
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#13273a";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "White";
      showAlert("Light mode has been enabled", "success")
    }
  };


  return (
    <div>
      <Header mode={mode} toggleMode={toggleMode} />
      <Alert 
      alert={alert}
      />
      <TextForm showAlert={showAlert} heading="WordCounter -- Word Counter , Character Counter , LowerCase to UpperCase" mode={mode} />
      <Footer />
    </div>
  );
}

export default App;
