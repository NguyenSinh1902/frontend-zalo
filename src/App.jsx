import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LogsPage from './pages/logs/logs'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div>
      <LogsPage />
    </div>
  )
}

export default App
