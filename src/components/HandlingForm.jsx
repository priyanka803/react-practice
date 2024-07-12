import { useState } from "react";

const HandlingForm = () => {
  const [name, setName] = useState("");
  const [option, setOption] = useState("");
  const [tnc, setTnc] = useState(false);

  const fromSubmit = (event) => {
    console.log("submitted");
    event.preventdefault();
  };

  return (
    <>
      <form onSubmit={fromSubmit}>
        <h1>Registration Form</h1>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <select onChange={(e) => setOption(e.target.value)}>
          <option>MBA</option>
          <option>MCA</option>
          <option>BA</option>
          <option>Bsc</option>
        </select>
        <br />
        <br />
        <input type="checkbox" onChange={(e) => setTnc(true)} />
        <span>Accept terms and conditions</span>
        <br />
        <br />
        <button type="submit">Submit</button>
        <button type="reset">Clear</button>
      </form>
    </>
  );
};
export default HandlingForm;
