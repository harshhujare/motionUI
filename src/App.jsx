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
<About
hello="the gretest show of all time <br />  <b>breking bad</b>"
imge="img/breaking-bad.jpg"
subtext={<><p>It’s about this simple, dying chemistry teacher, Walter White</p><p>this show tells you story of pride, power, and losing everything to become the king of nothing.</p></>}
btnlink="https://vegamovies.mk/33036-breaking-bad-2023-season-1-dual-audio-hindi-hdrip-720p-480p-episode-1-added.html"

/>
<Story/>
<About
hello="the gretest anime of all time <br />  <b>attack on titan</b>"
imge="img/attack-on-titan.jpg"
btnlink="https://www.vegamovies-nl.biz/download-attack-on-titan-season-1-complete-dual-audio-hindi-dubbed-org/"
subtext={<><p>It’s about this simple, dying chemistry teacher, Walter White</p><p>this show tells you story of pride, power, and losing everything to become the king of nothing.</p></>}
/>
<Feactures/>

<Footer />

</main> 

  )
}
export default App