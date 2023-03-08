import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';
export default function about() {
  return (
    <div>
        <Header class='about'/>
        <AboutUs/>
        <Footer/>
    </div>
  )
}
