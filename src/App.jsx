import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/header'
import MainContent from './Components/maincontent'
import Features from './Components/features'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <MainContent/>
      <Features/>
    </>
  )
}

export default App
