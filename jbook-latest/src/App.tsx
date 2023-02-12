import * as esbuild from 'esbuild-wasm';
import { useState, useEffect, useRef } from 'react';
import './App.css';
import { unpkgPathPlugin } from './plugins/unpkg-path-plugin';

function App() {
  const [input, setInput] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const ref = useRef<any>();
  // console.log('🔥-> ref', ref);

  const startService = async () => {
    ref.current = await esbuild.initialize({
      worker: true,
      wasmURL: './esbuild.wasm',
    });
  };

  useEffect(() => {
    startService();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
  };
  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const result = await esbuild.build({
      entryPoints: ['index.js'],
      bundle: true,
      write: false,
      plugins: [unpkgPathPlugin()],
      define:{
        'process.env.NODE_ENV':'production',
        global:'window',
      }
    });
    // console.log(result);
    setCode(result.outputFiles[0].text);
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
        <pre>{code}</pre>
      </div>
    </>
  );
}

export default App;
