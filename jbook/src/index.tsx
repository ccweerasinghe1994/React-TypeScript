import * as esbuild from "esbuild-wasm";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { unpkgPathPlugin } from "./plugins/unpkg-path-plugin";
const App: React.FC = () => {
  const ref = useRef<any>();
  const [input, SetInput] = useState("");
  const [code, setCode] = useState("");

  const startService = async () => {
    await esbuild.initialize({
      wasmURL: "/esbuild.wasm",
    });
    ref.current = await esbuild.build;

    // const transform = await esbuild.transform(
    //   'import ReactDOM from "react-dom";'
    // );
  };

  useEffect(() => {
    startService();
  }, []);

  const handleSubmit = async () => {
    if (!ref.current) return;
    console.log(ref.current);

    const data = await ref.current({
      entryPoints: ["index.js"],
      bundle: true,
      write: false,
      plugins: [unpkgPathPlugin()],
    });
    console.log(data.outputFiles[0].text);

    setCode(data.outputFiles[0].text);
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
