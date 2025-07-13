import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LiveStream from './Livestream'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <LiveStream />
      </div>
    </>
  )
}

export default App
