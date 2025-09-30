import React from 'react'
import Navigation from './components/Nav'
import Hero from './components/Hero'
import DefaultLayout from './components/Layout'
import Countdown from './components/Countdown'
import About from './components/About'
import Schedule from './components/Schedule'
import Speakers from './components/Speaker'
import Venue from './components/Venue'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navigation/>
      <Hero/>
      <DefaultLayout>
        <Countdown/>
        <About/>
        <Schedule/>
        <Speakers/>
        <Venue/>
        <Contact/>
      </DefaultLayout>
      <Footer/>
    </div>
  )
}

export default App