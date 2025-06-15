import { useGSAP } from '@gsap/react'
import gsap from 'gsap' 
import { ScrollTrigger } from 'gsap/ScrollTrigger' 
import React from 'react'
import AnimatedTitle from './AnimatedTitle.jsx'

gsap.registerPlugin(ScrollTrigger);
const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    
    <div id="about" className="min-h-screen w-screen" >
        <div className="relative mt-36 mb-8 flex flex-col items-center gap-5" >
        <h2 className="font-general uppercase text-sm md:text-[15px]">
welcome to the world of absolute cinema
        </h2>
         <AnimatedTitle
          title="the gretest show of all time <br />  <b>breking bad</b>"
          containerClass="mt-5 !text-black text-center"
        />
        <div className="about-subtext" >
<p > It’s about this simple, dying chemistry teacher, Walter White </p>
<p>it’s about pride, power, and losing everything to become the king of nothing.</p>

        </div>

        </div>
        <div className=" h-dvh w-screen " id="clip"> 
            <div className=" mask-clip-path about-image">
                <img src="img/about.jpg" alt=" background" className="absolute top-0 left-0 size-full object-cover"/>

            </div>
        </div>

    </div>
  )
}

export default About