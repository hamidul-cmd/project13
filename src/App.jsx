import React, { useEffect } from 'react'
import Hero from './Sections/Hero'
import BrowseSection from './Sections/BrowseSection'
import Lenis from 'lenis'

function App() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  return (
    <>
      <Hero/>
      <BrowseSection/>
    </>
  )
}

export default App
