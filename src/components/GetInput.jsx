import { useState } from "react";

const GetInput = () => {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);

  const getData = (val) => {
    console.log(val.target.value);
    setData(val.target.value);
  };
  return (
    <div>
      {print ? <h1>{data}</h1> : null}
      <input type="text" onChange={getData} />
      <button onClick={() => setPrint(true)}> print data</button>
    </div>
  );
};
export default GetInput;
