import { useState } from 'react'
import './App.css'
import Header from './Header'
import Body from './MainApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-content">
      <Header />
      <Body />
    </div>
  )
}

export default App
