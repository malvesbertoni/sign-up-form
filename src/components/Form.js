import "./Form.css";

const Form = () => {
  return (
    <div className="form-wrapper">
      <button className="bt-free-trial">
        Try it free 7 days then $20/mo. thereafter
      </button>
      <div className="form">
        <form>
          <input type="text" placeholder="First Name"></input>
          <input type="text" placeholder="Last Name"></input>
          <input type="email" placeholder="Email Address"></input>
          <input type="password" placeholder="Password"></input>
          <button className="bt-claim">CLAIM YOUR FREE TRIAL</button>
        </form>
        <p>
          By clicking the button, you are agreeing to our
          <span>Terms and Services</span>
        </p>
      </div>
    </div>
  );
};

export default Form;
