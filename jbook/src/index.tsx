import React, { useState } from "react";
import ReactDOM from "react-dom";
const App: React.FC = () => {
  const [input, SetInput] = useState("");
  const [code, setCode] = useState("");

  const handleSubmit = () => {
    console.log(input);
  };
  return (
    <>
      <textarea
        value={input}
        onChange={(e) => SetInput(e.target.value)}
      ></textarea>
      <div>
        <button onClick={handleSubmit}>submit</button>
      </div>
      <pre>{code}</pre>
    </>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
