import React from 'react'
import Header from  "../Components/Header"
import About from '../Components/About'
import WhyChoose from '../Components/Whychoose'
import SuccessRates from '../Components/SuccessRate'
import Teamcaro from '../Components/Teamcaro'

const Home = () => {
  return (
    <div>
        <Header />
        <About />
        <WhyChoose />
        <SuccessRates />
        <Teamcaro />
    </div>
  )
}

export default Home