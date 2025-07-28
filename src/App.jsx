import React from 'react'
import Hero from './components/Hero.jsx'
import Feve from './components/Feve.jsx'
import Navbar from './components/Navbar.jsx'
import Feactures from './components/Feactures.jsx'
import Cardpage from './components/Cardpage.jsx'
import Footer from "./components/Footer.jsx"
import Mid from './components/Mid.jsx'
import Account from './components/Account.jsx'

export const App = () => {
 
  return (

    <main className="relative min-h-screen overflow-x-hidden">
     
      <Feve />
      <Navbar />
      <Hero />
      <Mid />
      <Feactures />
      
      <Footer />
      <Account/>
    </main>

  )
}
export default App