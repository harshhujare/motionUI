import React from 'react'
import  Hero  from './components/Hero.jsx'
import About from './components/About.jsx'
import Navbar from './components/Navbar.jsx'
import Feactures from './components/Feactures.jsx'
import Story from './components/Story.jsx'
import Footer from "./components/Footer.jsx";
export const App = () => {
  return (

<main className="relative min-h-screen overflow-x-hidden">
<Navbar />
<Hero />
<About/>

<Story/>
<Feactures/>

<Footer />
</main>

  )
}
export default App