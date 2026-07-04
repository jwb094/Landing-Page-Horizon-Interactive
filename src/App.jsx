import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import ThemeToggle from './components/ThemeToggle'
import Content_Summary from './components/Content_Summary'
import ContentSlider from './components/ContentSlider'
import Testmonials from './components/Testmonials'
import SignUp from './components/SignUp'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container-fluid p-0 m-0 vh-100 vw-100">
        <Header />
        <Hero />
        <ThemeToggle />
        <Content_Summary />
        <ContentSlider />
        <Testmonials />
        <SignUp />
        <Footer />
      </div>
    </>
  )
}

export default App
