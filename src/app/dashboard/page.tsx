import React from 'react'

import Footer from '../components/Footer'
import Navbar from './navbar/page'
import Hero from './hero/page'
import DestinationSlider from './destinations/page'

const Page = () => {

        


  return (
    <div>
        
        <Navbar/>
        <Hero/>
        <DestinationSlider/>
        <Footer/>
    </div>
  )
}

export default Page