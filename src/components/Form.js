import "./Form.css";
import { useState } from "react";

const Form = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "firstname") {
      setFirstname(e.target.value);
    } else if (e.target.name === "lastname") {
      setLastname(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you.");
  };

  return (
    <div className="wrapper">
      <button className="bt-free-trial">
        <span>Try it free 7 days</span> then $20/mo. thereafter
      </button>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstname"
            value={firstname}
            placeholder="First Name"
            required
            onChange={handleChange}
          ></input>
          <input
            type="text"
            name="lastname"
            value={lastname}
            placeholder="Last Name"
            required
            onChange={handleChange}
          ></input>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email Address"
            required
            onChange={handleChange}
          ></input>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            required
            minLength="4"
            onChange={handleChange}
          ></input>
          <button type="submit" className="bt-claim">
            CLAIM YOUR FREE TRIAL
          </button>
        </form>
        <p>
          By clicking the button, you are agreeing to our
          <span> Terms and Services</span>
        </p>
      </div>
    </div>
  );
};

export default Form;
