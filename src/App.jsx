import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const minusHandler = () => {
    setCount(count - 1)
  }

  const plusHandler = () => {
    setCount(count + 1)
  }

  const zeroHandler = () => {
    setCount(0)
  }

  return (
    <>
      <div>
        <p>{count}</p>
        <div>
          <button onClick={minusHandler}>Minus</button>
          <button onClick={zeroHandler}>Zero</button>
          <button onClick={plusHandler}>Plus</button>
        </div>
      </div>
    </>
  )
}

export default App
