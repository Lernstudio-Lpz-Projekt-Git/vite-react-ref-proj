import { useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setinputValue] = useState("");
  let passwordRef = useRef(null);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Vite + React: References</h2>
        <div className="formBox">
          <input
            type={showPassword ? "text" : "password"}
            ref={passwordRef}
            value={inputValue}
            onChange={(e) => setinputValue(e.target.value)}
          ></input>
          <Button toggleFunc={togglePassword} />
        </div>
      </header>
    </div>
  );
}

export default App;
