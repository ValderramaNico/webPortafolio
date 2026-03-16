import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loader from './components/Loader'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const [showCurtains, setShowCurtains] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
      setTimeout(() => setShowCurtains(false), 1500)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <>
      {showCurtains && (
        <>
          <div className="fixed top-0 left-0 w-1/2 h-full bg-[#f0ecec] z-[1100] animate-curtain-left" />
          <div className="fixed top-0 right-0 w-1/2 h-full bg-[#f0ecec] z-[1100] animate-curtain-right" />
        </>
      )}
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="5491112345678" message="Hola, me interesa obtener más información sobre sus servicios web" />
    </>
  )
}

export default App
