import { useState } from "react";
import "./responsive/App.css";
import "./responsive/Mobile.css";
import { Login } from "./Login";

function App() {
  const [formInput, setFormInput] = useState({
    email: "",
    pass: "",
    confirmPass: "",
  });
  console.log(formInput);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formInput.pass === formInput.confirmPass) {
      console.log("Log-in Successfully");
    } else {
      console.log("Password does not match");
    }
  };

  return (
    <div className="form-background">
      <Login inputChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
