import About from '@/components/About'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Help from '@/components/Help'
import Navbar from '@/components/Navbar'
import Ourservices from '@/components/Ourservices'
import Solutions from '@/components/Solutions'
import React from 'react'

export default function page() {
  return (
    <>
    <Navbar/>
    <Header/>
    <About/>
    <Ourservices/>
    <Solutions/>
    <Help/>
    <Footer/>
    </>
  )
}
