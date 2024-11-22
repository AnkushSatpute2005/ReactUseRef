import { useState , useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  //example of mormal variable 'a'
  // let a=0;
  // useEffect(() => {
  //   a=a+1;
  //   console.log(`rerendering the value of a is ${a}......`)// value of a is again and again zero because this is nornal variable and component is always rerender so value is always initialize as zero
  // });
  
  //Example of useRef hook
  const b = useRef(0)
  useEffect(()=>{
    b.current = b.current+1;
    console.log(`rerendering the value of 'b' is ${b.current}......`)
  })
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App