import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState<string>('');
  const [code, setCode] = useState<string>('');
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
