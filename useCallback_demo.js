import './App.css';
import Content from './Content'
import { useState, useCallback } from 'react'

function App() {
  const [count, setCount] = useState(0);

  // không dùng useCallback dẫn tới component 
  // con bị re-render lại
  // const handleIncrease = () => {
  //   setCount(prevCount => prevCount + 1)
  // }

  const handleIncrease = useCallback(() => {
    setCount(prevCount => prevCount + 1)
  })

  return (
    <div className="App">
      <Content onIncrease={handleIncrease}/>
      <h1>{count}</h1>
    </div>
  );
}

export default App;


import { memo } from 'react'

function Content({ onIncrease }) {
    console.log('re-render')

    return (
        <>
            <h2>Hello World</h2>
            <button onClick={onIncrease}>Click me!</button>
        </>
    )
}

export default memo(Content)