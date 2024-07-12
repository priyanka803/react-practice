import { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userErr, setUserErr] = useState(false);
  const [passErr, setPassErr] = useState(false);

  const submitForm = (event) => {
    if (userName.length < 5 || password.length < 5) {
      alert("type correct value");
    } else {
      alert("all good");
    }
    event.preventDefault();
    console.log("submitted");
  };
  const handleUser = (e) => {
    let item = e.target.value;
    if (item.length < 3) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
    setUser(item);
  };
  const handlePassword = (e) => {
    let item = e.target.value;
    if (item.length < 5) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }
    setPassword(item);
  };
  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={submitForm}>
        <input type="text" onChange={handleUser} />
        {userErr ? <span>User Not Valid</span> : ""}
        <br />
        <br />
        <input type="text" onChange={handlePassword} />{" "}
        {passErr ? <span>invalid password</span> : ""}
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Login;
