import * as esbuild from 'esbuild-wasm';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const startService = async () => {
    const service = await esbuild.initialize({
      worker: true,
      wasmURL: './esbuild.wasm',
    });
    console.log(service);
  };

  useEffect(() => {
    startService();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
  };
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(input);
  };
  return (
    <>
      <textarea
        value={input}
        onChange={handleChange}
        name=''
        id=''
        cols={30}
        rows={10}
      ></textarea>
      <div>
        <button onClick={handleClick} type='button'>
          Submit
        </button>
        <pre></pre>
      </div>
    </>
  );
}

export default App;
